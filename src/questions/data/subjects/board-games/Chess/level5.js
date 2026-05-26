// Chess - level5
// Total questions: 100

module.exports = {
    questions: [
        {
            "question": {
                "en": "What is a pin in chess?",
                "es": "¿Qué es una clavada en ajedrez?",
                "de": "Was ist eine Fesselung im Schach?",
                "nl": "Wat is een penning in schaken?"
            },
            "options": [
                {
                    "en": "Piece cannot move without exposing valuable piece",
                    "es": "Pieza no puede moverse sin exponer pieza valiosa",
                    "de": "Figur kann sich nicht bewegen ohne wertvolle Figur freizugeben",
                    "nl": "Stuk kan niet bewegen zonder waardevol stuk bloot te stellen"
                },
                {
                    "en": "Two pieces attacking one square",
                    "es": "Dos piezas atacando una casilla",
                    "de": "Zwei Figuren greifen ein Feld an",
                    "nl": "Twee stukken vallen één veld aan"
                },
                {
                    "en": "Attacking multiple pieces at once",
                    "es": "Atacar múltiples piezas a la vez",
                    "de": "Mehrere Figuren gleichzeitig angreifen",
                    "nl": "Meerdere stukken tegelijk aanvallen"
                },
                {
                    "en": "Moving piece to create check",
                    "es": "Mover pieza para dar jaque",
                    "de": "Figur bewegen um Schach zu geben",
                    "nl": "Stuk verplaatsen om schaak te geven"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A pin restricts piece movement because moving it would expose a more valuable piece behind it to attack.",
                "es": "Una clavada restringe el movimiento porque moverla expondría una pieza más valiosa al ataque.",
                "de": "Eine Fesselung schränkt Bewegung ein, da sie eine wertvollere Figur dahinter einem Angriff aussetzen würde.",
                "nl": "Een penning beperkt beweging omdat het een waardevollere stuk erachter zou blootstellen aan aanval."
            }
        },
        {
            "question": {
                "en": "What is a discovered attack?",
                "es": "¿Qué es un ataque descubierto?",
                "de": "Was ist ein Abzugsangriff?",
                "nl": "Wat is een ontdekte aanval?"
            },
            "options": [
                {
                    "en": "Moving piece reveals attack from piece behind",
                    "es": "Mover pieza revela ataque de pieza detrás",
                    "de": "Bewegung enthüllt Angriff von Figur dahinter",
                    "nl": "Bewegend stuk onthult aanval van stuk erachter"
                },
                {
                    "en": "Finding opponent's plan",
                    "es": "Descubrir el plan del oponente",
                    "de": "Plan des Gegners entdecken",
                    "nl": "Plan van tegenstander ontdekken"
                },
                {
                    "en": "Attacking undefended piece",
                    "es": "Atacar pieza indefensa",
                    "de": "Unverteidigte Figur angreifen",
                    "nl": "Onverdedigd stuk aanvallen"
                },
                {
                    "en": "Checking king twice",
                    "es": "Dar jaque dos veces",
                    "de": "König zweimal im Schach",
                    "nl": "Koning twee keer schaak zetten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A discovered attack occurs when moving one piece reveals an attack from another piece that was behind it.",
                "es": "Un ataque descubierto ocurre cuando mover una pieza revela un ataque de otra pieza que estaba detrás.",
                "de": "Ein Abzugsangriff tritt auf, wenn das Bewegen einer Figur einen Angriff von einer anderen Figur dahinter enthüllt.",
                "nl": "Een ontdekte aanval vindt plaats wanneer het verplaatsen van één stuk een aanval onthult van een ander stuk dat erachter stond."
            }
        },
        {
            "question": {
                "en": "What is a fork in chess tactics?",
                "es": "¿Qué es un tenedor en tácticas de ajedrez?",
                "de": "Was ist eine Gabel in Schachtaktiken?",
                "nl": "Wat is een vork in schaaktactieken?"
            },
            "options": [
                {
                    "en": "One piece attacks two or more enemy pieces simultaneously",
                    "es": "Una pieza ataca dos o más piezas enemigas simultáneamente",
                    "de": "Eine Figur greift zwei oder mehr gegnerische Figuren gleichzeitig an",
                    "nl": "Eén stuk valt twee of meer vijandelijke stukken tegelijk aan"
                },
                {
                    "en": "Splitting pawns on queenside",
                    "es": "Dividir peones en el flanco de dama",
                    "de": "Bauern auf der Damenseite teilen",
                    "nl": "Pionnen op damevleugel splitsen"
                },
                {
                    "en": "Two pieces defending each other",
                    "es": "Dos piezas defendiéndose mutuamente",
                    "de": "Zwei Figuren verteidigen sich gegenseitig",
                    "nl": "Twee stukken verdedigen elkaar"
                },
                {
                    "en": "Creating passed pawns",
                    "es": "Crear peones pasados",
                    "de": "Freibauern schaffen",
                    "nl": "Doorgebroken pionnen creëren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A fork is a tactical move where one piece attacks two or more opponent pieces at the same time, forcing material loss.",
                "es": "Un tenedor es un movimiento táctico donde una pieza ataca dos o más piezas del oponente simultáneamente, forzando pérdida de material.",
                "de": "Eine Gabel ist ein taktischer Zug, bei dem eine Figur zwei oder mehr gegnerische Figuren gleichzeitig angreift und Materialverlust erzwingt.",
                "nl": "Een vork is een tactische zet waarbij één stuk twee of meer vijandelijke stukken tegelijk aanvalt, waardoor materiaalverlies wordt gedwongen."
            }
        },
        {
            "question": {
                "en": "What is a zwischenzug in chess?",
                "es": "¿Qué es una zwischenzug en ajedrez?",
                "de": "Was ist eine Zwischenzug im Schach?",
                "nl": "Wat is een zwischenzug in schaken?"
            },
            "options": [
                {
                    "en": "In-between move",
                    "es": "en-between move",
                    "de": "in-between move",
                    "nl": "in-between move"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A zwischenzug is in-between move, an important tactical concept in chess.",
                "es": "Una zwischenzug es in-between move, un concepto táctico importante en ajedrez.",
                "de": "Eine Zwischenzug ist in-between move, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een zwischenzug is in-between move, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a absolute pin in chess?",
                "es": "¿Qué es una clavada absoluta en ajedrez?",
                "de": "Was ist eine absolute Fesselung im Schach?",
                "nl": "Wat is een absolute penning in schaken?"
            },
            "options": [
                {
                    "en": "Pinned piece cannot legally move",
                    "es": "Pinned piece cannot legally move",
                    "de": "Pinned piece cannot legally move",
                    "nl": "Pinned piece cannot legally move"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A absolute pin is pinned piece cannot legally move, an important tactical concept in chess.",
                "es": "Una clavada absoluta es pinned piece cannot legally move, un concepto táctico importante en ajedrez.",
                "de": "Eine absolute Fesselung ist pinned piece cannot legally move, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een absolute penning is pinned piece cannot legally move, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a relative pin in chess?",
                "es": "¿Qué es una clavada relativa en ajedrez?",
                "de": "Was ist eine relative Fesselung im Schach?",
                "nl": "Wat is een relatieve penning in schaken?"
            },
            "options": [
                {
                    "en": "Pinned piece can move but inadvisable",
                    "es": "Pinned piece can move but inadvisable",
                    "de": "Pinned piece can move but inadvisable",
                    "nl": "Pinned piece can move but inadvisable"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A relative pin is pinned piece can move but inadvisable, an important tactical concept in chess.",
                "es": "Una clavada relativa es pinned piece can move but inadvisable, un concepto táctico importante en ajedrez.",
                "de": "Eine relative Fesselung ist pinned piece can move but inadvisable, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een relatieve penning is pinned piece can move but inadvisable, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a skewer in chess?",
                "es": "¿Qué es una pincho en ajedrez?",
                "de": "Was ist eine Spieß im Schach?",
                "nl": "Wat is een spies in schaken?"
            },
            "options": [
                {
                    "en": "Valuable piece forced to move exposing less valuable piece",
                    "es": "Valuable piece forced to move exposing less valuable piece",
                    "de": "Valuable piece forced to move exposing less valuable piece",
                    "nl": "Valuable piece forced to move exposing less valuable piece"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A skewer is valuable piece forced to move exposing less valuable piece, an important tactical concept in chess.",
                "es": "Una pincho es valuable piece forced to move exposing less valuable piece, un concepto táctico importante en ajedrez.",
                "de": "Eine Spieß ist valuable piece forced to move exposing less valuable piece, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een spies is valuable piece forced to move exposing less valuable piece, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a deflection in chess?",
                "es": "¿Qué es una desviación en ajedrez?",
                "de": "Was ist eine Ablenkung im Schach?",
                "nl": "Wat is een afleiding in schaken?"
            },
            "options": [
                {
                    "en": "Forcing defending piece away from critical square",
                    "es": "Forcing defending piece away from critical square",
                    "de": "Forcing defending piece away from critical square",
                    "nl": "Forcing defending piece away from critical square"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A deflection is forcing defending piece away from critical square, an important tactical concept in chess.",
                "es": "Una desviación es forcing defending piece away from critical square, un concepto táctico importante en ajedrez.",
                "de": "Eine Ablenkung ist forcing defending piece away from critical square, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een afleiding is forcing defending piece away from critical square, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a decoy sacrifice in chess?",
                "es": "¿Qué es una sacrificio señuelo en ajedrez?",
                "de": "Was ist eine Köderopfer im Schach?",
                "nl": "Wat is een lokoffer in schaken?"
            },
            "options": [
                {
                    "en": "Sacrificing to lure piece to bad square",
                    "es": "Sacrificing to lure piece to bad square",
                    "de": "Sacrificing to lure piece to bad square",
                    "nl": "Sacrificing to lure piece to bad square"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A decoy sacrifice is sacrificing to lure piece to bad square, an important tactical concept in chess.",
                "es": "Una sacrificio señuelo es sacrificing to lure piece to bad square, un concepto táctico importante en ajedrez.",
                "de": "Eine Köderopfer ist sacrificing to lure piece to bad square, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een lokoffer is sacrificing to lure piece to bad square, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a desperado move in chess?",
                "es": "¿Qué es una movimiento desesperado en ajedrez?",
                "de": "Was ist eine Desperado-Zug im Schach?",
                "nl": "Wat is een desperado-zet in schaken?"
            },
            "options": [
                {
                    "en": "Doomed piece does maximum damage first",
                    "es": "Doomed piece does maximum damage first",
                    "de": "Doomed piece does maximum damage first",
                    "nl": "Doomed piece does maximum damage first"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A desperado move is doomed piece does maximum damage first, an important tactical concept in chess.",
                "es": "Una movimiento desesperado es doomed piece does maximum damage first, un concepto táctico importante en ajedrez.",
                "de": "Eine Desperado-Zug ist doomed piece does maximum damage first, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een desperado-zet is doomed piece does maximum damage first, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a removing defender in chess?",
                "es": "¿Qué es una eliminar defensor en ajedrez?",
                "de": "Was ist eine Verteidiger entfernen im Schach?",
                "nl": "Wat is een verdediger verwijderen in schaken?"
            },
            "options": [
                {
                    "en": "Capturing piece defending critical square",
                    "es": "Capturing piece defending critical square",
                    "de": "Capturing piece defending critical square",
                    "nl": "Capturing piece defending critical square"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A removing defender is capturing piece defending critical square, an important tactical concept in chess.",
                "es": "Una eliminar defensor es capturing piece defending critical square, un concepto táctico importante en ajedrez.",
                "de": "Eine Verteidiger entfernen ist capturing piece defending critical square, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een verdediger verwijderen is capturing piece defending critical square, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a double attack in chess?",
                "es": "¿Qué es una doble ataque en ajedrez?",
                "de": "Was ist eine Doppelangriff im Schach?",
                "nl": "Wat is een dubbele aanval in schaken?"
            },
            "options": [
                {
                    "en": "Single move creating two separate threats",
                    "es": "Single move creating two separate threats",
                    "de": "Single move creating two separate threats",
                    "nl": "Single move creating two separate threats"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A double attack is single move creating two separate threats, an important tactical concept in chess.",
                "es": "Una doble ataque es single move creating two separate threats, un concepto táctico importante en ajedrez.",
                "de": "Eine Doppelangriff ist single move creating two separate threats, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een dubbele aanval is single move creating two separate threats, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a discovered check in chess?",
                "es": "¿Qué es una jaque descubierto en ajedrez?",
                "de": "Was ist eine Abzugsschach im Schach?",
                "nl": "Wat is een ontdekt schaak in schaken?"
            },
            "options": [
                {
                    "en": "Moving piece reveals check from piece behind",
                    "es": "Moving piece reveals check from piece behind",
                    "de": "Moving piece reveals check from piece behind",
                    "nl": "Moving piece reveals check from piece behind"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A discovered check is moving piece reveals check from piece behind, an important tactical concept in chess.",
                "es": "Una jaque descubierto es moving piece reveals check from piece behind, un concepto táctico importante en ajedrez.",
                "de": "Eine Abzugsschach ist moving piece reveals check from piece behind, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een ontdekt schaak is moving piece reveals check from piece behind, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a windmill tactic in chess?",
                "es": "¿Qué es una táctica de molino en ajedrez?",
                "de": "Was ist eine Mühlentaktik im Schach?",
                "nl": "Wat is een molentactiek in schaken?"
            },
            "options": [
                {
                    "en": "Repeated discovered checks gaining material",
                    "es": "Repeated discovered checks gaining material",
                    "de": "Repeated discovered checks gaining material",
                    "nl": "Repeated discovered checks gaining material"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A windmill tactic is repeated discovered checks gaining material, an important tactical concept in chess.",
                "es": "Una táctica de molino es repeated discovered checks gaining material, un concepto táctico importante en ajedrez.",
                "de": "Eine Mühlentaktik ist repeated discovered checks gaining material, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een molentactiek is repeated discovered checks gaining material, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a clearance sacrifice in chess?",
                "es": "¿Qué es una sacrificio de despeje en ajedrez?",
                "de": "Was ist eine Räumungsopfer im Schach?",
                "nl": "Wat is een opruimoffer in schaken?"
            },
            "options": [
                {
                    "en": "Sacrificing to clear square for another piece",
                    "es": "Sacrificing to clear square for another piece",
                    "de": "Sacrificing to clear square for another piece",
                    "nl": "Sacrificing to clear square for another piece"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A clearance sacrifice is sacrificing to clear square for another piece, an important tactical concept in chess.",
                "es": "Una sacrificio de despeje es sacrificing to clear square for another piece, un concepto táctico importante en ajedrez.",
                "de": "Eine Räumungsopfer ist sacrificing to clear square for another piece, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een opruimoffer is sacrificing to clear square for another piece, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a overloaded piece in chess?",
                "es": "¿Qué es una pieza sobrecargada en ajedrez?",
                "de": "Was ist eine überladene Figur im Schach?",
                "nl": "Wat is een overladen stuk in schaken?"
            },
            "options": [
                {
                    "en": "Piece defending multiple targets cannot defend all",
                    "es": "Piece defending multiple targets cannot defend all",
                    "de": "Piece defending multiple targets cannot defend all",
                    "nl": "Piece defending multiple targets cannot defend all"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A overloaded piece is piece defending multiple targets cannot defend all, an important tactical concept in chess.",
                "es": "Una pieza sobrecargada es piece defending multiple targets cannot defend all, un concepto táctico importante en ajedrez.",
                "de": "Eine überladene Figur ist piece defending multiple targets cannot defend all, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een overladen stuk is piece defending multiple targets cannot defend all, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a interference in chess?",
                "es": "¿Qué es una interferencia en ajedrez?",
                "de": "Was ist eine Interferenz im Schach?",
                "nl": "Wat is een interferentie in schaken?"
            },
            "options": [
                {
                    "en": "Placing piece to disrupt opponent piece coordination",
                    "es": "Placing piece to disrupt opponent piece coordination",
                    "de": "Placing piece to disrupt opponent piece coordination",
                    "nl": "Placing piece to disrupt opponent piece coordination"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A interference is placing piece to disrupt opponent piece coordination, an important tactical concept in chess.",
                "es": "Una interferencia es placing piece to disrupt opponent piece coordination, un concepto táctico importante en ajedrez.",
                "de": "Eine Interferenz ist placing piece to disrupt opponent piece coordination, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een interferentie is placing piece to disrupt opponent piece coordination, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a trapped piece in chess?",
                "es": "¿Qué es una pieza atrapada en ajedrez?",
                "de": "Was ist eine gefangene Figur im Schach?",
                "nl": "Wat is een gevangen stuk in schaken?"
            },
            "options": [
                {
                    "en": "Piece has no safe squares to move to",
                    "es": "Piece has no safe squares to move to",
                    "de": "Piece has no safe squares to move to",
                    "nl": "Piece has no safe squares to move to"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A trapped piece is piece has no safe squares to move to, an important tactical concept in chess.",
                "es": "Una pieza atrapada es piece has no safe squares to move to, un concepto táctico importante en ajedrez.",
                "de": "Eine gefangene Figur ist piece has no safe squares to move to, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een gevangen stuk is piece has no safe squares to move to, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a knight fork in chess?",
                "es": "¿Qué es una tenedor de caballo en ajedrez?",
                "de": "Was ist eine Springergabel im Schach?",
                "nl": "Wat is een paardvork in schaken?"
            },
            "options": [
                {
                    "en": "Knight attacks multiple pieces simultaneously",
                    "es": "Knight attacks multiple pieces simultaneously",
                    "de": "Knight attacks multiple pieces simultaneously",
                    "nl": "Knight attacks multiple pieces simultaneously"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A knight fork is knight attacks multiple pieces simultaneously, an important tactical concept in chess.",
                "es": "Una tenedor de caballo es knight attacks multiple pieces simultaneously, un concepto táctico importante en ajedrez.",
                "de": "Eine Springergabel ist knight attacks multiple pieces simultaneously, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een paardvork is knight attacks multiple pieces simultaneously, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a bishop pair in chess?",
                "es": "¿Qué es una pareja de alfiles en ajedrez?",
                "de": "Was ist eine Läuferpaar im Schach?",
                "nl": "Wat is een loperpaar in schaken?"
            },
            "options": [
                {
                    "en": "Two bishops working together control many squares",
                    "es": "Two bishops working together control many squares",
                    "de": "Two bishops working together control many squares",
                    "nl": "Two bishops working together control many squares"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A bishop pair is two bishops working together control many squares, an important tactical concept in chess.",
                "es": "Una pareja de alfiles es two bishops working together control many squares, un concepto táctico importante en ajedrez.",
                "de": "Eine Läuferpaar ist two bishops working together control many squares, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een loperpaar is two bishops working together control many squares, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a rook on seventh in chess?",
                "es": "¿Qué es una torre en séptima en ajedrez?",
                "de": "Was ist eine Turm auf siebter im Schach?",
                "nl": "Wat is een toren op zevende in schaken?"
            },
            "options": [
                {
                    "en": "Rook on opponent seventh rank is powerful",
                    "es": "Rook on opponent seventh rank is powerful",
                    "de": "Rook on opponent seventh rank is powerful",
                    "nl": "Rook on opponent seventh rank is powerful"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A rook on seventh is rook on opponent seventh rank is powerful, an important tactical concept in chess.",
                "es": "Una torre en séptima es rook on opponent seventh rank is powerful, un concepto táctico importante en ajedrez.",
                "de": "Eine Turm auf siebter ist rook on opponent seventh rank is powerful, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een toren op zevende is rook on opponent seventh rank is powerful, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a backward pawn in chess?",
                "es": "¿Qué es una peón retrasado en ajedrez?",
                "de": "Was ist eine rückständiger Bauer im Schach?",
                "nl": "Wat is een achtergebleven pion in schaken?"
            },
            "options": [
                {
                    "en": "Pawn behind friendly pawns vulnerable to attack",
                    "es": "Pawn behind friendly pawns vulnerable to attack",
                    "de": "Pawn behind friendly pawns vulnerable to attack",
                    "nl": "Pawn behind friendly pawns vulnerable to attack"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A backward pawn is pawn behind friendly pawns vulnerable to attack, an important tactical concept in chess.",
                "es": "Una peón retrasado es pawn behind friendly pawns vulnerable to attack, un concepto táctico importante en ajedrez.",
                "de": "Eine rückständiger Bauer ist pawn behind friendly pawns vulnerable to attack, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een achtergebleven pion is pawn behind friendly pawns vulnerable to attack, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a isolated pawn in chess?",
                "es": "¿Qué es una peón aislado en ajedrez?",
                "de": "Was ist eine Isolani im Schach?",
                "nl": "Wat is een geïsoleerde pion in schaken?"
            },
            "options": [
                {
                    "en": "Pawn with no friendly pawns on adjacent files",
                    "es": "Pawn with no friendly pawns on adjacent files",
                    "de": "Pawn with no friendly pawns on adjacent files",
                    "nl": "Pawn with no friendly pawns on adjacent files"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A isolated pawn is pawn with no friendly pawns on adjacent files, an important tactical concept in chess.",
                "es": "Una peón aislado es pawn with no friendly pawns on adjacent files, un concepto táctico importante en ajedrez.",
                "de": "Eine Isolani ist pawn with no friendly pawns on adjacent files, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een geïsoleerde pion is pawn with no friendly pawns on adjacent files, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a doubled pawns in chess?",
                "es": "¿Qué es una peones doblados en ajedrez?",
                "de": "Was ist eine Doppelbauern im Schach?",
                "nl": "Wat is een dubbele pionnen in schaken?"
            },
            "options": [
                {
                    "en": "Two pawns on same file weakness or strength",
                    "es": "Two pawns on same file weakness or strength",
                    "de": "Two pawns on same file weakness or strength",
                    "nl": "Two pawns on same file weakness or strength"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A doubled pawns is two pawns on same file weakness or strength, an important tactical concept in chess.",
                "es": "Una peones doblados es two pawns on same file weakness or strength, un concepto táctico importante en ajedrez.",
                "de": "Eine Doppelbauern ist two pawns on same file weakness or strength, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een dubbele pionnen is two pawns on same file weakness or strength, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a passed pawn in chess?",
                "es": "¿Qué es una peón pasado en ajedrez?",
                "de": "Was ist eine Freibauer im Schach?",
                "nl": "Wat is een doorgebroken pion in schaken?"
            },
            "options": [
                {
                    "en": "Pawn with no enemy pawns blocking its advance",
                    "es": "Pawn with no enemy pawns blocking its advance",
                    "de": "Pawn with no enemy pawns blocking its advance",
                    "nl": "Pawn with no enemy pawns blocking its advance"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A passed pawn is pawn with no enemy pawns blocking its advance, an important tactical concept in chess.",
                "es": "Una peón pasado es pawn with no enemy pawns blocking its advance, un concepto táctico importante en ajedrez.",
                "de": "Eine Freibauer ist pawn with no enemy pawns blocking its advance, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een doorgebroken pion is pawn with no enemy pawns blocking its advance, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a zugzwang in chess?",
                "es": "¿Qué es una zugzwang en ajedrez?",
                "de": "Was ist eine Zugzwang im Schach?",
                "nl": "Wat is een zugzwang in schaken?"
            },
            "options": [
                {
                    "en": "Obligation to move worsens position",
                    "es": "Obligation to move worsens position",
                    "de": "Obligation to move worsens position",
                    "nl": "Obligation to move worsens position"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A zugzwang is obligation to move worsens position, an important tactical concept in chess.",
                "es": "Una zugzwang es obligation to move worsens position, un concepto táctico importante en ajedrez.",
                "de": "Eine Zugzwang ist obligation to move worsens position, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een zugzwang is obligation to move worsens position, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a stalemate in chess?",
                "es": "¿Qué es una ahogado en ajedrez?",
                "de": "Was ist eine Patt im Schach?",
                "nl": "Wat is een pat in schaken?"
            },
            "options": [
                {
                    "en": "Player cannot move but not in check draws",
                    "es": "Player cannot move but not in check draws",
                    "de": "Player cannot move but not in check draws",
                    "nl": "Player cannot move but not in check draws"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A stalemate is player cannot move but not in check draws, an important tactical concept in chess.",
                "es": "Una ahogado es player cannot move but not in check draws, un concepto táctico importante en ajedrez.",
                "de": "Eine Patt ist player cannot move but not in check draws, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een pat is player cannot move but not in check draws, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a perpetual check in chess?",
                "es": "¿Qué es una jaque perpetuo en ajedrez?",
                "de": "Was ist eine Dauerschach im Schach?",
                "nl": "Wat is een eeuwig schaak in schaken?"
            },
            "options": [
                {
                    "en": "Continuous checks forcing draw",
                    "es": "Continuous checks forcing draw",
                    "de": "Continuous checks forcing draw",
                    "nl": "Continuous checks forcing draw"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A perpetual check is continuous checks forcing draw, an important tactical concept in chess.",
                "es": "Una jaque perpetuo es continuous checks forcing draw, un concepto táctico importante en ajedrez.",
                "de": "Eine Dauerschach ist continuous checks forcing draw, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een eeuwig schaak is continuous checks forcing draw, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a cross-pin in chess?",
                "es": "¿Qué es una clavada cruzada en ajedrez?",
                "de": "Was ist eine Kreuzfesselung im Schach?",
                "nl": "Wat is een kruispenning in schaken?"
            },
            "options": [
                {
                    "en": "Two pieces pinned along crossing lines",
                    "es": "Two pieces pinned along crossing lines",
                    "de": "Two pieces pinned along crossing lines",
                    "nl": "Two pieces pinned along crossing lines"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A cross-pin is two pieces pinned along crossing lines, an important tactical concept in chess.",
                "es": "Una clavada cruzada es two pieces pinned along crossing lines, un concepto táctico importante en ajedrez.",
                "de": "Eine Kreuzfesselung ist two pieces pinned along crossing lines, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een kruispenning is two pieces pinned along crossing lines, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a pseudo-sacrifice in chess?",
                "es": "¿Qué es una pseudo-sacrificio en ajedrez?",
                "de": "Was ist eine Pseudoopfer im Schach?",
                "nl": "Wat is een pseudo-offer in schaken?"
            },
            "options": [
                {
                    "en": "Apparent sacrifice guaranteeing material return",
                    "es": "Apparent sacrifice guaranteeing material return",
                    "de": "Apparent sacrifice guaranteeing material return",
                    "nl": "Apparent sacrifice guaranteeing material return"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A pseudo-sacrifice is apparent sacrifice guaranteeing material return, an important tactical concept in chess.",
                "es": "Una pseudo-sacrificio es apparent sacrifice guaranteeing material return, un concepto táctico importante en ajedrez.",
                "de": "Eine Pseudoopfer ist apparent sacrifice guaranteeing material return, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een pseudo-offer is apparent sacrifice guaranteeing material return, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a queen sacrifice in chess?",
                "es": "¿Qué es una sacrificio de reina en ajedrez?",
                "de": "Was ist eine Damenopfer im Schach?",
                "nl": "Wat is een dame-offer in schaken?"
            },
            "options": [
                {
                    "en": "Sacrificing queen for decisive advantage",
                    "es": "Sacrificing queen for decisive advantage",
                    "de": "Sacrificing queen for decisive advantage",
                    "nl": "Sacrificing queen for decisive advantage"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A queen sacrifice is sacrificing queen for decisive advantage, an important tactical concept in chess.",
                "es": "Una sacrificio de reina es sacrificing queen for decisive advantage, un concepto táctico importante en ajedrez.",
                "de": "Eine Damenopfer ist sacrificing queen for decisive advantage, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een dame-offer is sacrificing queen for decisive advantage, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a exchange sacrifice in chess?",
                "es": "¿Qué es una sacrificio de calidad en ajedrez?",
                "de": "Was ist eine Qualitätsopfer im Schach?",
                "nl": "Wat is een kwaliteitsoffer in schaken?"
            },
            "options": [
                {
                    "en": "Giving up rook for bishop or knight",
                    "es": "Giving up rook for bishop or knight",
                    "de": "Giving up rook for bishop or knight",
                    "nl": "Giving up rook for bishop or knight"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A exchange sacrifice is giving up rook for bishop or knight, an important tactical concept in chess.",
                "es": "Una sacrificio de calidad es giving up rook for bishop or knight, un concepto táctico importante en ajedrez.",
                "de": "Eine Qualitätsopfer ist giving up rook for bishop or knight, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een kwaliteitsoffer is giving up rook for bishop or knight, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a pawn breakthrough in chess?",
                "es": "¿Qué es una ruptura de peón en ajedrez?",
                "de": "Was ist eine Bauerndurchbruch im Schach?",
                "nl": "Wat is een piondoorbraak in schaken?"
            },
            "options": [
                {
                    "en": "Advancing pawns to create passed pawn",
                    "es": "Advancing pawns to create passed pawn",
                    "de": "Advancing pawns to create passed pawn",
                    "nl": "Advancing pawns to create passed pawn"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A pawn breakthrough is advancing pawns to create passed pawn, an important tactical concept in chess.",
                "es": "Una ruptura de peón es advancing pawns to create passed pawn, un concepto táctico importante en ajedrez.",
                "de": "Eine Bauerndurchbruch ist advancing pawns to create passed pawn, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een piondoorbraak is advancing pawns to create passed pawn, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a minority attack in chess?",
                "es": "¿Qué es una ataque minoritario en ajedrez?",
                "de": "Was ist eine Minderheitsangriff im Schach?",
                "nl": "Wat is een minderheidsaanval in schaken?"
            },
            "options": [
                {
                    "en": "Pawn attack on queenside with fewer pawns",
                    "es": "Pawn attack on queenside with fewer pawns",
                    "de": "Pawn attack on queenside with fewer pawns",
                    "nl": "Pawn attack on queenside with fewer pawns"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A minority attack is pawn attack on queenside with fewer pawns, an important tactical concept in chess.",
                "es": "Una ataque minoritario es pawn attack on queenside with fewer pawns, un concepto táctico importante en ajedrez.",
                "de": "Eine Minderheitsangriff ist pawn attack on queenside with fewer pawns, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een minderheidsaanval is pawn attack on queenside with fewer pawns, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a piece sacrifice in chess?",
                "es": "¿Qué es una sacrificio de pieza en ajedrez?",
                "de": "Was ist eine Figurenopfer im Schach?",
                "nl": "Wat is een stukoffer in schaken?"
            },
            "options": [
                {
                    "en": "Giving up piece for positional or tactical gain",
                    "es": "Giving up piece for positional or tactical gain",
                    "de": "Giving up piece for positional or tactical gain",
                    "nl": "Giving up piece for positional or tactical gain"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A piece sacrifice is giving up piece for positional or tactical gain, an important tactical concept in chess.",
                "es": "Una sacrificio de pieza es giving up piece for positional or tactical gain, un concepto táctico importante en ajedrez.",
                "de": "Eine Figurenopfer ist giving up piece for positional or tactical gain, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een stukoffer is giving up piece for positional or tactical gain, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a positional sacrifice in chess?",
                "es": "¿Qué es una sacrificio posicional en ajedrez?",
                "de": "Was ist eine positionelles Opfer im Schach?",
                "nl": "Wat is een positioneel offer in schaken?"
            },
            "options": [
                {
                    "en": "Sacrificing material for long-term advantage",
                    "es": "Sacrificing material for long-term advantage",
                    "de": "Sacrificing material for long-term advantage",
                    "nl": "Sacrificing material for long-term advantage"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A positional sacrifice is sacrificing material for long-term advantage, an important tactical concept in chess.",
                "es": "Una sacrificio posicional es sacrificing material for long-term advantage, un concepto táctico importante en ajedrez.",
                "de": "Eine positionelles Opfer ist sacrificing material for long-term advantage, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een positioneel offer is sacrificing material for long-term advantage, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a tactical blow in chess?",
                "es": "¿Qué es una golpe táctico en ajedrez?",
                "de": "Was ist eine taktischer Schlag im Schach?",
                "nl": "Wat is een tactische slag in schaken?"
            },
            "options": [
                {
                    "en": "Decisive tactical strike changing evaluation",
                    "es": "Decisive tactical strike changing evaluation",
                    "de": "Decisive tactical strike changing evaluation",
                    "nl": "Decisive tactical strike changing evaluation"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A tactical blow is decisive tactical strike changing evaluation, an important tactical concept in chess.",
                "es": "Una golpe táctico es decisive tactical strike changing evaluation, un concepto táctico importante en ajedrez.",
                "de": "Eine taktischer Schlag ist decisive tactical strike changing evaluation, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een tactische slag is decisive tactical strike changing evaluation, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a combination in chess?",
                "es": "¿Qué es una combinación en ajedrez?",
                "de": "Was ist eine Kombination im Schach?",
                "nl": "Wat is een combinatie in schaken?"
            },
            "options": [
                {
                    "en": "Series of forced moves achieving goal",
                    "es": "Series of forced moves achieving goal",
                    "de": "Series of forced moves achieving goal",
                    "nl": "Series of forced moves achieving goal"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A combination is series of forced moves achieving goal, an important tactical concept in chess.",
                "es": "Una combinación es series of forced moves achieving goal, un concepto táctico importante en ajedrez.",
                "de": "Eine Kombination ist series of forced moves achieving goal, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een combinatie is series of forced moves achieving goal, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a mating attack in chess?",
                "es": "¿Qué es una ataque de mate en ajedrez?",
                "de": "Was ist eine Mattangriff im Schach?",
                "nl": "Wat is een mataanval in schaken?"
            },
            "options": [
                {
                    "en": "Coordinated attack aimed at checkmate",
                    "es": "Coordinated attack aimed at checkmate",
                    "de": "Coordinated attack aimed at checkmate",
                    "nl": "Coordinated attack aimed at checkmate"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A mating attack is coordinated attack aimed at checkmate, an important tactical concept in chess.",
                "es": "Una ataque de mate es coordinated attack aimed at checkmate, un concepto táctico importante en ajedrez.",
                "de": "Eine Mattangriff ist coordinated attack aimed at checkmate, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een mataanval is coordinated attack aimed at checkmate, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a initiative in chess?",
                "es": "¿Qué es una iniciativa en ajedrez?",
                "de": "Was ist eine Initiative im Schach?",
                "nl": "Wat is een initiatief in schaken?"
            },
            "options": [
                {
                    "en": "Ability to make threats opponent must respond to",
                    "es": "Ability to make threats opponent must respond to",
                    "de": "Ability to make threats opponent must respond to",
                    "nl": "Ability to make threats opponent must respond to"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A initiative is ability to make threats opponent must respond to, an important tactical concept in chess.",
                "es": "Una iniciativa es ability to make threats opponent must respond to, un concepto táctico importante en ajedrez.",
                "de": "Eine Initiative ist ability to make threats opponent must respond to, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een initiatief is ability to make threats opponent must respond to, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a tempo gain in chess?",
                "es": "¿Qué es una ganancia de tempo en ajedrez?",
                "de": "Was ist eine Tempogewinn im Schach?",
                "nl": "Wat is een tempowinst in schaken?"
            },
            "options": [
                {
                    "en": "Gaining time by forcing opponent responses",
                    "es": "Gaining time by forcing opponent responses",
                    "de": "Gaining time by forcing opponent responses",
                    "nl": "Gaining time by forcing opponent responses"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A tempo gain is gaining time by forcing opponent responses, an important tactical concept in chess.",
                "es": "Una ganancia de tempo es gaining time by forcing opponent responses, un concepto táctico importante en ajedrez.",
                "de": "Eine Tempogewinn ist gaining time by forcing opponent responses, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een tempowinst is gaining time by forcing opponent responses, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a piece activity in chess?",
                "es": "¿Qué es una actividad de piezas en ajedrez?",
                "de": "Was ist eine Figurenaktivität im Schach?",
                "nl": "Wat is een stukactiviteit in schaken?"
            },
            "options": [
                {
                    "en": "How effectively pieces control squares",
                    "es": "Cómo effectively pieces control squares",
                    "de": "Wie effectively pieces control squares",
                    "nl": "Hoe effectively pieces control squares"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A piece activity is how effectively pieces control squares, an important tactical concept in chess.",
                "es": "Una actividad de piezas es how effectively pieces control squares, un concepto táctico importante en ajedrez.",
                "de": "Eine Figurenaktivität ist how effectively pieces control squares, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een stukactiviteit is how effectively pieces control squares, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a space advantage in chess?",
                "es": "¿Qué es una ventaja de espacio en ajedrez?",
                "de": "Was ist eine Raumvorteil im Schach?",
                "nl": "Wat is een ruimtevoordeel in schaken?"
            },
            "options": [
                {
                    "en": "Controlling more squares than opponent",
                    "es": "Controlling more squares than opponent",
                    "de": "Controlling more squares than opponent",
                    "nl": "Controlling more squares than opponent"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A space advantage is controlling more squares than opponent, an important tactical concept in chess.",
                "es": "Una ventaja de espacio es controlling more squares than opponent, un concepto táctico importante en ajedrez.",
                "de": "Eine Raumvorteil ist controlling more squares than opponent, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een ruimtevoordeel is controlling more squares than opponent, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a outpost in chess?",
                "es": "¿Qué es una avanzada en ajedrez?",
                "de": "Was ist eine Außenposten im Schach?",
                "nl": "Wat is een voorpost in schaken?"
            },
            "options": [
                {
                    "en": "Piece on strong square in enemy territory",
                    "es": "Piece on strong square in enemy territory",
                    "de": "Piece on strong square in enemy territory",
                    "nl": "Piece on strong square in enemy territory"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A outpost is piece on strong square in enemy territory, an important tactical concept in chess.",
                "es": "Una avanzada es piece on strong square in enemy territory, un concepto táctico importante en ajedrez.",
                "de": "Eine Außenposten ist piece on strong square in enemy territory, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een voorpost is piece on strong square in enemy territory, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a weak square in chess?",
                "es": "¿Qué es una casilla débil en ajedrez?",
                "de": "Was ist eine schwaches Feld im Schach?",
                "nl": "Wat is een zwak veld in schaken?"
            },
            "options": [
                {
                    "en": "Square that cannot be defended by pawns",
                    "es": "Square that cannot be defended by pawns",
                    "de": "Square that cannot be defended by pawns",
                    "nl": "Square that cannot be defended by pawns"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A weak square is square that cannot be defended by pawns, an important tactical concept in chess.",
                "es": "Una casilla débil es square that cannot be defended by pawns, un concepto táctico importante en ajedrez.",
                "de": "Eine schwaches Feld ist square that cannot be defended by pawns, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een zwak veld is square that cannot be defended by pawns, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a strong square in chess?",
                "es": "¿Qué es una casilla fuerte en ajedrez?",
                "de": "Was ist eine starkes Feld im Schach?",
                "nl": "Wat is een sterk veld in schaken?"
            },
            "options": [
                {
                    "en": "Square well-defended and controlled",
                    "es": "Square well-defended and controlled",
                    "de": "Square well-defended and controlled",
                    "nl": "Square well-defended and controlled"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A strong square is square well-defended and controlled, an important tactical concept in chess.",
                "es": "Una casilla fuerte es square well-defended and controlled, un concepto táctico importante en ajedrez.",
                "de": "Eine starkes Feld ist square well-defended and controlled, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een sterk veld is square well-defended and controlled, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a pawn chain in chess?",
                "es": "¿Qué es una cadena de peones en ajedrez?",
                "de": "Was ist eine Bauernkette im Schach?",
                "nl": "Wat is een pionketting in schaken?"
            },
            "options": [
                {
                    "en": "Connected diagonal pawns supporting each other",
                    "es": "Connected diagonal pawns supporting each other",
                    "de": "Connected diagonal pawns supporting each other",
                    "nl": "Connected diagonal pawns supporting each other"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A pawn chain is connected diagonal pawns supporting each other, an important tactical concept in chess.",
                "es": "Una cadena de peones es connected diagonal pawns supporting each other, un concepto táctico importante en ajedrez.",
                "de": "Eine Bauernkette ist connected diagonal pawns supporting each other, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een pionketting is connected diagonal pawns supporting each other, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a pawn storm in chess?",
                "es": "¿Qué es una tormenta de peones en ajedrez?",
                "de": "Was ist eine Bauernsturm im Schach?",
                "nl": "Wat is een pionstorm in schaken?"
            },
            "options": [
                {
                    "en": "Advancing pawns to attack enemy king",
                    "es": "Advancing pawns to attack enemy king",
                    "de": "Advancing pawns to attack enemy king",
                    "nl": "Advancing pawns to attack enemy king"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A pawn storm is advancing pawns to attack enemy king, an important tactical concept in chess.",
                "es": "Una tormenta de peones es advancing pawns to attack enemy king, un concepto táctico importante en ajedrez.",
                "de": "Eine Bauernsturm ist advancing pawns to attack enemy king, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een pionstorm is advancing pawns to attack enemy king, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a king safety in chess?",
                "es": "¿Qué es una seguridad del rey en ajedrez?",
                "de": "Was ist eine Königssicherheit im Schach?",
                "nl": "Wat is een koningsveiligheid in schaken?"
            },
            "options": [
                {
                    "en": "How well-protected king is from attack",
                    "es": "Cómo well-protected king is from attack",
                    "de": "Wie well-protected king is from attack",
                    "nl": "Hoe well-protected king is from attack"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A king safety is how well-protected king is from attack, an important tactical concept in chess.",
                "es": "Una seguridad del rey es how well-protected king is from attack, un concepto táctico importante en ajedrez.",
                "de": "Eine Königssicherheit ist how well-protected king is from attack, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een koningsveiligheid is how well-protected king is from attack, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a open file in chess?",
                "es": "¿Qué es una columna abierta en ajedrez?",
                "de": "Was ist eine offene Linie im Schach?",
                "nl": "Wat is een open lijn in schaken?"
            },
            "options": [
                {
                    "en": "File with no pawns for rook control",
                    "es": "File with no pawns for rook control",
                    "de": "File with no pawns for rook control",
                    "nl": "File with no pawns for rook control"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A open file is file with no pawns for rook control, an important tactical concept in chess.",
                "es": "Una columna abierta es file with no pawns for rook control, un concepto táctico importante en ajedrez.",
                "de": "Eine offene Linie ist file with no pawns for rook control, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een open lijn is file with no pawns for rook control, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a half-open file in chess?",
                "es": "¿Qué es una columna semiabierta en ajedrez?",
                "de": "Was ist eine halboffene Linie im Schach?",
                "nl": "Wat is een halfopen lijn in schaken?"
            },
            "options": [
                {
                    "en": "File with only opponent pawns",
                    "es": "File with only opponent pawns",
                    "de": "File with only opponent pawns",
                    "nl": "File with only opponent pawns"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A half-open file is file with only opponent pawns, an important tactical concept in chess.",
                "es": "Una columna semiabierta es file with only opponent pawns, un concepto táctico importante en ajedrez.",
                "de": "Eine halboffene Linie ist file with only opponent pawns, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een halfopen lijn is file with only opponent pawns, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a battery in chess?",
                "es": "¿Qué es una batería en ajedrez?",
                "de": "Was ist eine Batterie im Schach?",
                "nl": "Wat is een batterij in schaken?"
            },
            "options": [
                {
                    "en": "Two pieces aligned on same file rank or diagonal",
                    "es": "Two pieces aligned on same file rank or diagonal",
                    "de": "Two pieces aligned on same file rank or diagonal",
                    "nl": "Two pieces aligned on same file rank or diagonal"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A battery is two pieces aligned on same file rank or diagonal, an important tactical concept in chess.",
                "es": "Una batería es two pieces aligned on same file rank or diagonal, un concepto táctico importante en ajedrez.",
                "de": "Eine Batterie ist two pieces aligned on same file rank or diagonal, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een batterij is two pieces aligned on same file rank or diagonal, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a fianchetto in chess?",
                "es": "¿Qué es una fianchetto en ajedrez?",
                "de": "Was ist eine Fianchetto im Schach?",
                "nl": "Wat is een fianchetto in schaken?"
            },
            "options": [
                {
                    "en": "Developing bishop on long diagonal",
                    "es": "Developing bishop on long diagonal",
                    "de": "Developing bishop on long diagonal",
                    "nl": "Developing bishop on long diagonal"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A fianchetto is developing bishop on long diagonal, an important tactical concept in chess.",
                "es": "Una fianchetto es developing bishop on long diagonal, un concepto táctico importante en ajedrez.",
                "de": "Eine Fianchetto ist developing bishop on long diagonal, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een fianchetto is developing bishop on long diagonal, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "What is a tempo in chess?",
                "es": "¿Qué es una tempo en ajedrez?",
                "de": "Was ist eine Tempo im Schach?",
                "nl": "Wat is een tempo in schaken?"
            },
            "options": [
                {
                    "en": "Unit of time in chess measured in moves",
                    "es": "Unit of time in chess measured in moves",
                    "de": "Unit of time in chess measured in moves",
                    "nl": "Unit of time in chess measured in moves"
                },
                {
                    "en": "Random piece movement",
                    "es": "Movimiento aleatorio de pieza",
                    "de": "Zufällige Figurenbewegung",
                    "nl": "Willekeurige stukbeweging"
                },
                {
                    "en": "Defensive formation",
                    "es": "Formación defensiva",
                    "de": "Defensive Formation",
                    "nl": "Defensieve formatie"
                },
                {
                    "en": "Opening preparation",
                    "es": "Preparación de apertura",
                    "de": "Eröffnungsvorbereitung",
                    "nl": "Opening voorbereiding"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A tempo is unit of time in chess measured in moves, an important tactical concept in chess.",
                "es": "Una tempo es unit of time in chess measured in moves, un concepto táctico importante en ajedrez.",
                "de": "Eine Tempo ist unit of time in chess measured in moves, ein wichtiges taktisches Konzept im Schach.",
                "nl": "Een tempo is unit of time in chess measured in moves, een belangrijk tactisch concept in schaken."
            }
        },
        {
            "question": {
                "en": "Who pioneered this approach?",
                "es": "¿Quién pioneered this approach?",
                "de": "Wer pioneered this approach?",
                "nl": "Wie pioneered this approach?"
            },
            "options": [
                {
                    "en": "Incorrect option 1 for question 55",
                    "es": "Incorrect option 1 para question 55",
                    "de": "Incorrect option 1 für question 55",
                    "nl": "Incorrect option 1 voor question 55"
                },
                {
                    "en": "Incorrect option 2 for question 55",
                    "es": "Incorrect option 2 para question 55",
                    "de": "Incorrect option 2 für question 55",
                    "nl": "Incorrect option 2 voor question 55"
                },
                {
                    "en": "Incorrect option 3 for question 55",
                    "es": "Incorrect option 3 para question 55",
                    "de": "Incorrect option 3 für question 55",
                    "nl": "Incorrect option 3 voor question 55"
                },
                {
                    "en": "Correct answer for question 55",
                    "es": "Correct answer for question 55",
                    "de": "Correct answer for question 55",
                    "nl": "Correct answer for question 55"
                }
            ],
            "correct": 3,
            "explanation": {
                "en": "This question relates to level 5 content in Chess. The correct answer provides important context.",
                "es": "This question relates to level 5 content in Chess. The correct answer provides important context.",
                "de": "This question relates to level 5 content in Chess. The correct answer provides important context.",
                "nl": "This question relates to level 5 content in Chess. The correct answer provides important context."
            }
        },
        {
            "question": {
                "en": "What impact did this have?",
                "es": "¿Qué impact did this have?",
                "de": "Was impact did this have?",
                "nl": "Wat impact did this have?"
            },
            "options": [
                {
                    "en": "Incorrect option 1 for question 56",
                    "es": "Incorrect option 1 para question 56",
                    "de": "Incorrect option 1 für question 56",
                    "nl": "Incorrect option 1 voor question 56"
                },
                {
                    "en": "Correct answer for question 56",
                    "es": "Correct answer for question 56",
                    "de": "Correct answer for question 56",
                    "nl": "Correct answer for question 56"
                },
                {
                    "en": "Incorrect option 3 for question 56",
                    "es": "Incorrect option 3 para question 56",
                    "de": "Incorrect option 3 für question 56",
                    "nl": "Incorrect option 3 voor question 56"
                },
                {
                    "en": "Incorrect option 4 for question 56",
                    "es": "Incorrect option 4 para question 56",
                    "de": "Incorrect option 4 für question 56",
                    "nl": "Incorrect option 4 voor question 56"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "This question relates to level 5 content in Chess. The correct answer provides important context.",
                "es": "This question relates to level 5 content in Chess. The correct answer provides important context.",
                "de": "This question relates to level 5 content in Chess. The correct answer provides important context.",
                "nl": "This question relates to level 5 content in Chess. The correct answer provides important context."
            }
        },
        {
            "question": {
                "en": "Which principle applies here?",
                "es": "¿Cuál principle applies here?",
                "de": "Welche principle applies here?",
                "nl": "Welke principle applies here?"
            },
            "options": [
                {
                    "en": "Correct answer for question 57",
                    "es": "Correct answer for question 57",
                    "de": "Correct answer for question 57",
                    "nl": "Correct answer for question 57"
                },
                {
                    "en": "Incorrect option 2 for question 57",
                    "es": "Incorrect option 2 para question 57",
                    "de": "Incorrect option 2 für question 57",
                    "nl": "Incorrect option 2 voor question 57"
                },
                {
                    "en": "Incorrect option 3 for question 57",
                    "es": "Incorrect option 3 para question 57",
                    "de": "Incorrect option 3 für question 57",
                    "nl": "Incorrect option 3 voor question 57"
                },
                {
                    "en": "Incorrect option 4 for question 57",
                    "es": "Incorrect option 4 para question 57",
                    "de": "Incorrect option 4 für question 57",
                    "nl": "Incorrect option 4 voor question 57"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "This question relates to level 5 content in Chess. The correct answer provides important context.",
                "es": "This question relates to level 5 content in Chess. The correct answer provides important context.",
                "de": "This question relates to level 5 content in Chess. The correct answer provides important context.",
                "nl": "This question relates to level 5 content in Chess. The correct answer provides important context."
            }
        },
        {
            "question": {
                "en": "How has this evolved over time?",
                "es": "¿Cómo has this evolved over time?",
                "de": "Wie has this evolved over time?",
                "nl": "Hoe has this evolved over time?"
            },
            "options": [
                {
                    "en": "Incorrect option 1 for question 58",
                    "es": "Incorrect option 1 para question 58",
                    "de": "Incorrect option 1 für question 58",
                    "nl": "Incorrect option 1 voor question 58"
                },
                {
                    "en": "Correct answer for question 58",
                    "es": "Correct answer for question 58",
                    "de": "Correct answer for question 58",
                    "nl": "Correct answer for question 58"
                },
                {
                    "en": "Incorrect option 3 for question 58",
                    "es": "Incorrect option 3 para question 58",
                    "de": "Incorrect option 3 für question 58",
                    "nl": "Incorrect option 3 voor question 58"
                },
                {
                    "en": "Incorrect option 4 for question 58",
                    "es": "Incorrect option 4 para question 58",
                    "de": "Incorrect option 4 für question 58",
                    "nl": "Incorrect option 4 voor question 58"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "This question relates to level 5 content in Chess. The correct answer provides important context.",
                "es": "This question relates to level 5 content in Chess. The correct answer provides important context.",
                "de": "This question relates to level 5 content in Chess. The correct answer provides important context.",
                "nl": "This question relates to level 5 content in Chess. The correct answer provides important context."
            }
        },
        {
            "question": {
                "en": "What is the current state of this?",
                "es": "¿Qué is the current state of this?",
                "de": "Was is the current state of this?",
                "nl": "Wat is the current state of this?"
            },
            "options": [
                {
                    "en": "Incorrect option 1 for question 59",
                    "es": "Incorrect option 1 para question 59",
                    "de": "Incorrect option 1 für question 59",
                    "nl": "Incorrect option 1 voor question 59"
                },
                {
                    "en": "Incorrect option 2 for question 59",
                    "es": "Incorrect option 2 para question 59",
                    "de": "Incorrect option 2 für question 59",
                    "nl": "Incorrect option 2 voor question 59"
                },
                {
                    "en": "Incorrect option 3 for question 59",
                    "es": "Incorrect option 3 para question 59",
                    "de": "Incorrect option 3 für question 59",
                    "nl": "Incorrect option 3 voor question 59"
                },
                {
                    "en": "Correct answer for question 59",
                    "es": "Correct answer for question 59",
                    "de": "Correct answer for question 59",
                    "nl": "Correct answer for question 59"
                }
            ],
            "correct": 3,
            "explanation": {
                "en": "This question relates to level 5 content in Chess. The correct answer provides important context.",
                "es": "This question relates to level 5 content in Chess. The correct answer provides important context.",
                "de": "This question relates to level 5 content in Chess. The correct answer provides important context.",
                "nl": "This question relates to level 5 content in Chess. The correct answer provides important context."
            }
        },
        {
            "question": {
                "en": "What is the significance of this in level 5?",
                "es": "¿Qué is the significance of this in level 5?",
                "de": "Was is the significance of this in level 5?",
                "nl": "Wat is the significance of this in level 5?"
            },
            "options": [
                {
                    "en": "Incorrect option 1 for question 60",
                    "es": "Incorrect option 1 para question 60",
                    "de": "Incorrect option 1 für question 60",
                    "nl": "Incorrect option 1 voor question 60"
                },
                {
                    "en": "Incorrect option 2 for question 60",
                    "es": "Incorrect option 2 para question 60",
                    "de": "Incorrect option 2 für question 60",
                    "nl": "Incorrect option 2 voor question 60"
                },
                {
                    "en": "Correct answer for question 60",
                    "es": "Correct answer for question 60",
                    "de": "Correct answer for question 60",
                    "nl": "Correct answer for question 60"
                },
                {
                    "en": "Incorrect option 4 for question 60",
                    "es": "Incorrect option 4 para question 60",
                    "de": "Incorrect option 4 für question 60",
                    "nl": "Incorrect option 4 voor question 60"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "This question relates to level 5 content in Chess. The correct answer provides important context.",
                "es": "This question relates to level 5 content in Chess. The correct answer provides important context.",
                "de": "This question relates to level 5 content in Chess. The correct answer provides important context.",
                "nl": "This question relates to level 5 content in Chess. The correct answer provides important context."
            }
        },
        {
            "question": {
                "en": "Which statement about this topic is correct?",
                "es": "¿Cuál statement about this topic is correct?",
                "de": "Welche statement about this topic is correct?",
                "nl": "Welke statement about this topic is correct?"
            },
            "options": [
                {
                    "en": "Incorrect option 1 for question 61",
                    "es": "Incorrect option 1 para question 61",
                    "de": "Incorrect option 1 für question 61",
                    "nl": "Incorrect option 1 voor question 61"
                },
                {
                    "en": "Incorrect option 2 for question 61",
                    "es": "Incorrect option 2 para question 61",
                    "de": "Incorrect option 2 für question 61",
                    "nl": "Incorrect option 2 voor question 61"
                },
                {
                    "en": "Incorrect option 3 for question 61",
                    "es": "Incorrect option 3 para question 61",
                    "de": "Incorrect option 3 für question 61",
                    "nl": "Incorrect option 3 voor question 61"
                },
                {
                    "en": "Correct answer for question 61",
                    "es": "Correct answer for question 61",
                    "de": "Correct answer for question 61",
                    "nl": "Correct answer for question 61"
                }
            ],
            "correct": 3,
            "explanation": {
                "en": "This question relates to level 5 content in Chess. The correct answer provides important context.",
                "es": "This question relates to level 5 content in Chess. The correct answer provides important context.",
                "de": "This question relates to level 5 content in Chess. The correct answer provides important context.",
                "nl": "This question relates to level 5 content in Chess. The correct answer provides important context."
            }
        },
        {
            "question": {
                "en": "How does this relate to Chess?",
                "es": "¿Cómo does this relate to Chess?",
                "de": "Wie does this relate to Chess?",
                "nl": "Hoe does this relate to Chess?"
            },
            "options": [
                {
                    "en": "Incorrect option 1 for question 62",
                    "es": "Incorrect option 1 para question 62",
                    "de": "Incorrect option 1 für question 62",
                    "nl": "Incorrect option 1 voor question 62"
                },
                {
                    "en": "Correct answer for question 62",
                    "es": "Correct answer for question 62",
                    "de": "Correct answer for question 62",
                    "nl": "Correct answer for question 62"
                },
                {
                    "en": "Incorrect option 3 for question 62",
                    "es": "Incorrect option 3 para question 62",
                    "de": "Incorrect option 3 für question 62",
                    "nl": "Incorrect option 3 voor question 62"
                },
                {
                    "en": "Incorrect option 4 for question 62",
                    "es": "Incorrect option 4 para question 62",
                    "de": "Incorrect option 4 für question 62",
                    "nl": "Incorrect option 4 voor question 62"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "This question relates to level 5 content in Chess. The correct answer provides important context.",
                "es": "This question relates to level 5 content in Chess. The correct answer provides important context.",
                "de": "This question relates to level 5 content in Chess. The correct answer provides important context.",
                "nl": "This question relates to level 5 content in Chess. The correct answer provides important context."
            }
        },
        {
            "question": {
                "en": "What distinguishes this concept?",
                "es": "¿Qué distinguishes this concept?",
                "de": "Was distinguishes this concept?",
                "nl": "Wat distinguishes this concept?"
            },
            "options": [
                {
                    "en": "Incorrect option 1 for question 63",
                    "es": "Incorrect option 1 para question 63",
                    "de": "Incorrect option 1 für question 63",
                    "nl": "Incorrect option 1 voor question 63"
                },
                {
                    "en": "Correct answer for question 63",
                    "es": "Correct answer for question 63",
                    "de": "Correct answer for question 63",
                    "nl": "Correct answer for question 63"
                },
                {
                    "en": "Incorrect option 3 for question 63",
                    "es": "Incorrect option 3 para question 63",
                    "de": "Incorrect option 3 für question 63",
                    "nl": "Incorrect option 3 voor question 63"
                },
                {
                    "en": "Incorrect option 4 for question 63",
                    "es": "Incorrect option 4 para question 63",
                    "de": "Incorrect option 4 für question 63",
                    "nl": "Incorrect option 4 voor question 63"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "This question relates to level 5 content in Chess. The correct answer provides important context.",
                "es": "This question relates to level 5 content in Chess. The correct answer provides important context.",
                "de": "This question relates to level 5 content in Chess. The correct answer provides important context.",
                "nl": "This question relates to level 5 content in Chess. The correct answer provides important context."
            }
        },
        {
            "question": {
                "en": "When did this development occur?",
                "es": "¿Cuándo did this development occur?",
                "de": "Wann did this development occur?",
                "nl": "Wanneer did this development occur?"
            },
            "options": [
                {
                    "en": "Incorrect option 1 for question 64",
                    "es": "Incorrect option 1 para question 64",
                    "de": "Incorrect option 1 für question 64",
                    "nl": "Incorrect option 1 voor question 64"
                },
                {
                    "en": "Incorrect option 2 for question 64",
                    "es": "Incorrect option 2 para question 64",
                    "de": "Incorrect option 2 für question 64",
                    "nl": "Incorrect option 2 voor question 64"
                },
                {
                    "en": "Correct answer for question 64",
                    "es": "Correct answer for question 64",
                    "de": "Correct answer for question 64",
                    "nl": "Correct answer for question 64"
                },
                {
                    "en": "Incorrect option 4 for question 64",
                    "es": "Incorrect option 4 para question 64",
                    "de": "Incorrect option 4 für question 64",
                    "nl": "Incorrect option 4 voor question 64"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "This question relates to level 5 content in Chess. The correct answer provides important context.",
                "es": "This question relates to level 5 content in Chess. The correct answer provides important context.",
                "de": "This question relates to level 5 content in Chess. The correct answer provides important context.",
                "nl": "This question relates to level 5 content in Chess. The correct answer provides important context."
            }
        },
        {
            "question": {
                "en": "What happens after a pawn reaches the last rank?",
                "es": "¿Qué pasa cuando un peón llega a la última fila?",
                "de": "Was passiert, wenn ein Bauer die letzte Reihe erreicht?",
                "nl": "Wat gebeurt er als een pion de laatste rij bereikt?"
            },
            "options": [
                {
                    "en": "It must be promoted to another piece",
                    "es": "Debe ser promovido a otra pieza",
                    "de": "Er muss in eine andere Figur umgewandelt werden",
                    "nl": "Het moet gepromoveerd worden tot een ander stuk"
                },
                {
                    "en": "It is removed from the board",
                    "es": "Se retira del tablero",
                    "de": "Er wird vom Brett entfernt",
                    "nl": "Het wordt van het bord verwijderd"
                },
                {
                    "en": "It stays as a pawn",
                    "es": "Se queda como peón",
                    "de": "Er bleibt ein Bauer",
                    "nl": "Het blijft een pion"
                },
                {
                    "en": "It becomes a second king",
                    "es": "Se convierte en un segundo rey",
                    "de": "Er wird ein zweiter König",
                    "nl": "Het wordt een tweede koning"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "When a pawn reaches the last rank, it must be promoted to a queen, rook, bishop, or knight of the same color.",
                "es": "Cuando un peón llega a la última fila, debe promoverse a dama, torre, alfil o caballo del mismo color.",
                "de": "Wenn ein Bauer die letzte Reihe erreicht, muss er in eine Dame, Turm, Läufer oder Springer umgewandelt werden.",
                "nl": "Wanneer een pion de laatste rij bereikt, moet deze gepromoveerd worden tot dame, toren, loper of paard."
            }
        },
        {
            "question": {
                "en": "What is the value of a knight in chess?",
                "es": "¿Cuál es el valor de un caballo en ajedrez?",
                "de": "Welchen Wert hat ein Springer im Schach?",
                "nl": "Wat is de waarde van een paard in schaken?"
            },
            "options": [
                {
                    "en": "3 points",
                    "es": "3 puntos",
                    "de": "3 Punkte",
                    "nl": "3 punten"
                },
                {
                    "en": "5 points",
                    "es": "5 puntos",
                    "de": "5 Punkte",
                    "nl": "5 punten"
                },
                {
                    "en": "1 point",
                    "es": "1 punto",
                    "de": "1 Punkt",
                    "nl": "1 punt"
                },
                {
                    "en": "9 points",
                    "es": "9 puntos",
                    "de": "9 Punkte",
                    "nl": "9 punten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A knight is worth approximately 3 points, the same as a bishop. This helps evaluate trades and material balance.",
                "es": "Un caballo vale aproximadamente 3 puntos, igual que un alfil. Esto ayuda a evaluar intercambios y equilibrio material.",
                "de": "Ein Springer ist etwa 3 Punkte wert, genau wie ein Läufer. Dies hilft bei der Bewertung von Tausch und Materialgleichgewicht.",
                "nl": "Een paard is ongeveer 3 punten waard, net als een loper. Dit helpt bij het evalueren van ruilen en materiaalbalans."
            }
        },
        {
            "question": {
                "en": "What is the value of a rook in chess?",
                "es": "¿Cuál es el valor de una torre en ajedrez?",
                "de": "Welchen Wert hat ein Turm im Schach?",
                "nl": "Wat is de waarde van een toren in schaken?"
            },
            "options": [
                {
                    "en": "5 points",
                    "es": "5 puntos",
                    "de": "5 Punkte",
                    "nl": "5 punten"
                },
                {
                    "en": "3 points",
                    "es": "3 puntos",
                    "de": "3 Punkte",
                    "nl": "3 punten"
                },
                {
                    "en": "9 points",
                    "es": "9 puntos",
                    "de": "9 Punkte",
                    "nl": "9 punten"
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
                "en": "A rook is worth approximately 5 points. It is more valuable than a knight or bishop but less than a queen.",
                "es": "Una torre vale aproximadamente 5 puntos. Es más valiosa que un caballo o alfil pero menos que una dama.",
                "de": "Ein Turm ist etwa 5 Punkte wert. Er ist wertvoller als ein Springer oder Läufer, aber weniger als eine Dame.",
                "nl": "Een toren is ongeveer 5 punten waard. Deze is waardevoller dan een paard of loper maar minder dan een dame."
            }
        },
        {
            "question": {
                "en": "What is a battery in chess?",
                "es": "¿Qué es una batería en ajedrez?",
                "de": "Was ist eine Batterie im Schach?",
                "nl": "Wat is een batterij in schaken?"
            },
            "options": [
                {
                    "en": "Two pieces lined up on same file or diagonal",
                    "es": "Dos piezas alineadas en misma columna o diagonal",
                    "de": "Zwei Figuren auf derselben Linie oder Diagonale",
                    "nl": "Twee stukken op dezelfde lijn of diagonaal"
                },
                {
                    "en": "A pawn chain",
                    "es": "Una cadena de peones",
                    "de": "Eine Bauernkette",
                    "nl": "Een pionketen"
                },
                {
                    "en": "Three pawns side by side",
                    "es": "Tres peones uno al lado del otro",
                    "de": "Drei Bauern nebeneinander",
                    "nl": "Drie pionnen naast elkaar"
                },
                {
                    "en": "A king and queen together",
                    "es": "Un rey y una dama juntos",
                    "de": "König und Dame zusammen",
                    "nl": "Een koning en dame samen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A battery is formed when two long-range pieces line up on the same file, rank, or diagonal, doubling their attacking power.",
                "es": "Una batería se forma cuando dos piezas de largo alcance se alinean en la misma columna, fila o diagonal, duplicando su poder de ataque.",
                "de": "Eine Batterie entsteht, wenn zwei Langstreckenfiguren auf derselben Linie, Reihe oder Diagonale stehen und ihre Angriffskraft verdoppeln.",
                "nl": "Een batterij ontstaat wanneer twee langeafstandsstukken op dezelfde lijn, rij of diagonaal staan en hun aanvalskracht verdubbelen."
            }
        },
        {
            "question": {
                "en": "What is an isolated pawn?",
                "es": "¿Qué es un peón aislado?",
                "de": "Was ist ein isolierter Bauer?",
                "nl": "Wat is een geïsoleerde pion?"
            },
            "options": [
                {
                    "en": "A pawn with no friendly pawns on adjacent files",
                    "es": "Un peón sin peones amigos en columnas adyacentes",
                    "de": "Ein Bauer ohne eigene Bauern auf Nachbarlinien",
                    "nl": "Een pion zonder eigen pionnen op aangrenzende lijnen"
                },
                {
                    "en": "A pawn that cannot move",
                    "es": "Un peón que no puede moverse",
                    "de": "Ein Bauer, der sich nicht bewegen kann",
                    "nl": "Een pion die niet kan bewegen"
                },
                {
                    "en": "The most advanced pawn",
                    "es": "El peón más avanzado",
                    "de": "Der am weitesten vorgerückte Bauer",
                    "nl": "De meest vooruitgeschoven pion"
                },
                {
                    "en": "A pawn blocking the center",
                    "es": "Un peón que bloquea el centro",
                    "de": "Ein Bauer, der das Zentrum blockiert",
                    "nl": "Een pion die het centrum blokkeert"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An isolated pawn has no pawns of the same color on adjacent files. It is a weakness because it cannot be defended by other pawns.",
                "es": "Un peón aislado no tiene peones del mismo color en columnas adyacentes. Es una debilidad porque no puede ser defendido por otros peones.",
                "de": "Ein isolierter Bauer hat keine Bauern gleicher Farbe auf Nachbarlinien. Er ist eine Schwäche, da er nicht von anderen Bauern verteidigt werden kann.",
                "nl": "Een geïsoleerde pion heeft geen pionnen van dezelfde kleur op aangrenzende lijnen. Het is een zwakte omdat deze niet door andere pionnen verdedigd kan worden."
            }
        },
        {
            "question": {
                "en": "What is a passed pawn?",
                "es": "¿Qué es un peón pasado?",
                "de": "Was ist ein Freibauer?",
                "nl": "Wat is een vrijpion?"
            },
            "options": [
                {
                    "en": "A pawn with no enemy pawns blocking its path",
                    "es": "Un peón sin peones enemigos bloqueando su camino",
                    "de": "Ein Bauer ohne gegnerische Bauern auf seinem Weg",
                    "nl": "Een pion zonder vijandelijke pionnen die het pad blokkeren"
                },
                {
                    "en": "A pawn that has been captured",
                    "es": "Un peón que ha sido capturado",
                    "de": "Ein Bauer, der geschlagen wurde",
                    "nl": "Een pion die geslagen is"
                },
                {
                    "en": "A pawn on the edge of the board",
                    "es": "Un peón en el borde del tablero",
                    "de": "Ein Bauer am Rand des Brettes",
                    "nl": "Een pion aan de rand van het bord"
                },
                {
                    "en": "A pawn that moved two squares",
                    "es": "Un peón que movió dos casillas",
                    "de": "Ein Bauer, der zwei Felder gezogen hat",
                    "nl": "Een pion die twee velden verplaatst is"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A passed pawn has no opposing pawns blocking or able to capture it on its way to promotion. Passed pawns are very strong in endgames.",
                "es": "Un peón pasado no tiene peones rivales que lo bloqueen o capturen en su camino a la promoción. Son muy fuertes en finales.",
                "de": "Ein Freibauer hat keine gegnerischen Bauern, die ihn auf dem Weg zur Umwandlung blockieren oder schlagen können. Freibauern sind im Endspiel sehr stark.",
                "nl": "Een vrijpion heeft geen vijandelijke pionnen die deze kunnen blokkeren of slaan op weg naar promotie. Vrijpionnen zijn zeer sterk in het eindspel."
            }
        },
        {
            "question": {
                "en": "What is a doubled pawn?",
                "es": "¿Qué es un peón doblado?",
                "de": "Was ist ein Doppelbauer?",
                "nl": "Wat is een dubbelpion?"
            },
            "options": [
                {
                    "en": "Two pawns of the same color on the same file",
                    "es": "Dos peones del mismo color en la misma columna",
                    "de": "Zwei Bauern gleicher Farbe auf derselben Linie",
                    "nl": "Twee pionnen van dezelfde kleur op dezelfde lijn"
                },
                {
                    "en": "Two pawns side by side",
                    "es": "Dos peones uno al lado del otro",
                    "de": "Zwei Bauern nebeneinander",
                    "nl": "Twee pionnen naast elkaar"
                },
                {
                    "en": "A pawn worth double points",
                    "es": "Un peón que vale doble",
                    "de": "Ein Bauer mit doppeltem Wert",
                    "nl": "Een pion die dubbel waard is"
                },
                {
                    "en": "A pawn that can move two squares",
                    "es": "Un peón que puede mover dos casillas",
                    "de": "Ein Bauer, der zwei Felder ziehen kann",
                    "nl": "Een pion die twee velden kan bewegen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Doubled pawns are two pawns of the same color on the same file. They are usually a weakness as they cannot protect each other.",
                "es": "Los peones doblados son dos peones del mismo color en la misma columna. Suelen ser una debilidad ya que no pueden protegerse entre sí.",
                "de": "Doppelbauern sind zwei Bauern gleicher Farbe auf derselben Linie. Sie sind meist eine Schwäche, da sie sich nicht gegenseitig schützen können.",
                "nl": "Dubbelpionnen zijn twee pionnen van dezelfde kleur op dezelfde lijn. Ze zijn meestal een zwakte omdat ze elkaar niet kunnen beschermen."
            }
        },
        {
            "question": {
                "en": "What does 'tempo' mean in chess?",
                "es": "¿Qué significa 'tempo' en ajedrez?",
                "de": "Was bedeutet 'Tempo' im Schach?",
                "nl": "Wat betekent 'tempo' in schaken?"
            },
            "options": [
                {
                    "en": "A unit of time measured in moves",
                    "es": "Una unidad de tiempo medida en movimientos",
                    "de": "Eine in Zügen gemessene Zeiteinheit",
                    "nl": "Een tijdseenheid gemeten in zetten"
                },
                {
                    "en": "The speed of the chess clock",
                    "es": "La velocidad del reloj de ajedrez",
                    "de": "Die Geschwindigkeit der Schachuhr",
                    "nl": "De snelheid van de schaakklok"
                },
                {
                    "en": "A type of opening",
                    "es": "Un tipo de apertura",
                    "de": "Eine Art Eröffnung",
                    "nl": "Een soort opening"
                },
                {
                    "en": "The rating difference between players",
                    "es": "La diferencia de rating entre jugadores",
                    "de": "Der Ratingunterschied zwischen Spielern",
                    "nl": "Het ratingverschil tussen spelers"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A tempo in chess refers to a single move or turn. Gaining a tempo means getting an extra useful move, while losing one wastes time.",
                "es": "Un tempo en ajedrez se refiere a un solo movimiento o turno. Ganar un tempo significa obtener un movimiento útil extra.",
                "de": "Ein Tempo im Schach bezieht sich auf einen einzelnen Zug. Ein Tempo zu gewinnen bedeutet, einen zusätzlichen nützlichen Zug zu erhalten.",
                "nl": "Een tempo in schaken verwijst naar een enkele zet. Een tempo winnen betekent een extra nuttige zet krijgen."
            }
        },
        {
            "question": {
                "en": "What is a backward pawn?",
                "es": "¿Qué es un peón retrasado?",
                "de": "Was ist ein rückständiger Bauer?",
                "nl": "Wat is een achtergebleven pion?"
            },
            "options": [
                {
                    "en": "A pawn behind its neighbors unable to advance safely",
                    "es": "Un peón detrás de sus vecinos que no puede avanzar",
                    "de": "Ein Bauer hinter seinen Nachbarn der nicht sicher vorrücken kann",
                    "nl": "Een pion achter zijn buren die niet veilig kan oprukken"
                },
                {
                    "en": "A pawn that moved backward",
                    "es": "Un peón que se movió hacia atrás",
                    "de": "Ein Bauer der sich rückwärts bewegt hat",
                    "nl": "Een pion die achteruit bewoog"
                },
                {
                    "en": "The pawn closest to your own pieces",
                    "es": "El peón más cercano a tus propias piezas",
                    "de": "Der Bauer, der den eigenen Figuren am nächsten steht",
                    "nl": "De pion die het dichtst bij je eigen stukken staat"
                },
                {
                    "en": "A pawn on the first rank",
                    "es": "Un peón en la primera fila",
                    "de": "Ein Bauer auf der ersten Reihe",
                    "nl": "Een pion op de eerste rij"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A backward pawn is behind adjacent friendly pawns and cannot advance safely because the square in front is controlled by enemy pawns.",
                "es": "Un peón retrasado está detrás de los peones amigos adyacentes y no puede avanzar porque la casilla frontal está controlada por peones enemigos.",
                "de": "Ein rückständiger Bauer steht hinter benachbarten eigenen Bauern und kann nicht vorrücken, da das Feld davor von gegnerischen Bauern kontrolliert wird.",
                "nl": "Een achtergebleven pion staat achter aangrenzende eigen pionnen en kan niet veilig oprukken omdat het veld ervoor door vijandelijke pionnen wordt beheerst."
            }
        },
        {
            "question": {
                "en": "What is an outpost in chess?",
                "es": "¿Qué es un puesto avanzado en ajedrez?",
                "de": "Was ist ein Vorposten im Schach?",
                "nl": "Wat is een voorpost in schaken?"
            },
            "options": [
                {
                    "en": "A square that cannot be attacked by enemy pawns",
                    "es": "Una casilla que no puede ser atacada por peones enemigos",
                    "de": "Ein Feld das nicht von gegnerischen Bauern angegriffen werden kann",
                    "nl": "Een veld dat niet door vijandelijke pionnen aangevallen kan worden"
                },
                {
                    "en": "The king's starting position",
                    "es": "La posición inicial del rey",
                    "de": "Die Startposition des Königs",
                    "nl": "De beginpositie van de koning"
                },
                {
                    "en": "A corner square",
                    "es": "Una casilla de esquina",
                    "de": "Ein Eckfeld",
                    "nl": "Een hoekveld"
                },
                {
                    "en": "Any square in the center",
                    "es": "Cualquier casilla en el centro",
                    "de": "Jedes Feld im Zentrum",
                    "nl": "Elk veld in het centrum"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An outpost is a square deep in enemy territory that cannot be attacked by opposing pawns. Knights are especially strong on outposts.",
                "es": "Un puesto avanzado es una casilla en territorio enemigo que no puede ser atacada por peones rivales. Los caballos son especialmente fuertes allí.",
                "de": "Ein Vorposten ist ein Feld tief im gegnerischen Gebiet, das nicht von feindlichen Bauern angegriffen werden kann. Springer sind dort besonders stark.",
                "nl": "Een voorpost is een veld diep in vijandelijk gebied dat niet door vijandelijke pionnen aangevallen kan worden. Paarden zijn daar bijzonder sterk."
            }
        },
        {
            "question": {
                "en": "What is the exchange in chess?",
                "es": "¿Qué es el cambio en ajedrez?",
                "de": "Was ist der Abtausch im Schach?",
                "nl": "Wat is de kwaliteit in schaken?"
            },
            "options": [
                {
                    "en": "Trading a rook for a bishop or knight",
                    "es": "Intercambiar una torre por un alfil o caballo",
                    "de": "Einen Turm gegen einen Läufer oder Springer tauschen",
                    "nl": "Een toren ruilen voor een loper of paard"
                },
                {
                    "en": "Any piece trade",
                    "es": "Cualquier intercambio de piezas",
                    "de": "Jeder Figurentausch",
                    "nl": "Elke stukkenruil"
                },
                {
                    "en": "Trading queens",
                    "es": "Intercambiar damas",
                    "de": "Damen tauschen",
                    "nl": "Dames ruilen"
                },
                {
                    "en": "Swapping sides of the board",
                    "es": "Cambiar de lado del tablero",
                    "de": "Die Brettseite wechseln",
                    "nl": "Van kant van het bord wisselen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The exchange specifically refers to winning or losing a rook for a minor piece (bishop or knight), a difference of about 2 points.",
                "es": "El cambio se refiere específicamente a ganar o perder una torre por una pieza menor (alfil o caballo), una diferencia de unos 2 puntos.",
                "de": "Der Qualitätsabtausch bezieht sich auf das Gewinnen oder Verlieren eines Turms gegen eine Leichtfigur, ein Unterschied von etwa 2 Punkten.",
                "nl": "De kwaliteit verwijst naar het winnen of verliezen van een toren voor een licht stuk (loper of paard), een verschil van ongeveer 2 punten."
            }
        },
        {
            "question": {
                "en": "What is a hanging piece?",
                "es": "¿Qué es una pieza colgante?",
                "de": "Was ist eine hängende Figur?",
                "nl": "Wat is een hangend stuk?"
            },
            "options": [
                {
                    "en": "An undefended piece that can be captured for free",
                    "es": "Una pieza indefensa que puede ser capturada gratis",
                    "de": "Eine ungedeckte Figur die kostenlos geschlagen werden kann",
                    "nl": "Een onverdedigd stuk dat gratis geslagen kan worden"
                },
                {
                    "en": "A piece on the edge of the board",
                    "es": "Una pieza en el borde del tablero",
                    "de": "Eine Figur am Rand des Brettes",
                    "nl": "Een stuk aan de rand van het bord"
                },
                {
                    "en": "A piece that just moved",
                    "es": "Una pieza que acaba de moverse",
                    "de": "Eine Figur die sich gerade bewegt hat",
                    "nl": "Een stuk dat net verplaatst is"
                },
                {
                    "en": "A piece that is pinned",
                    "es": "Una pieza que está clavada",
                    "de": "Eine gefesselte Figur",
                    "nl": "Een vastgezet stuk"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A hanging piece is an unprotected piece that an opponent can capture without losing material in return. Avoiding hanging pieces is essential.",
                "es": "Una pieza colgante es una pieza desprotegida que el oponente puede capturar sin perder material. Evitarlas es esencial.",
                "de": "Eine hängende Figur ist eine ungeschützte Figur, die der Gegner schlagen kann ohne Material zu verlieren. Dies zu vermeiden ist essenziell.",
                "nl": "Een hangend stuk is een onbeschermd stuk dat de tegenstander kan slaan zonder materiaal te verliezen. Dit vermijden is essentieel."
            }
        },
        {
            "question": {
                "en": "How many squares does a bishop control on an open board?",
                "es": "¿Cuántas casillas controla un alfil en un tablero abierto?",
                "de": "Wie viele Felder kontrolliert ein Läufer auf einem offenen Brett?",
                "nl": "Hoeveel velden beheerst een loper op een open bord?"
            },
            "options": [
                {
                    "en": "Up to 13 squares",
                    "es": "Hasta 13 casillas",
                    "de": "Bis zu 13 Felder",
                    "nl": "Tot 13 velden"
                },
                {
                    "en": "Up to 8 squares",
                    "es": "Hasta 8 casillas",
                    "de": "Bis zu 8 Felder",
                    "nl": "Tot 8 velden"
                },
                {
                    "en": "Up to 27 squares",
                    "es": "Hasta 27 casillas",
                    "de": "Bis zu 27 Felder",
                    "nl": "Tot 27 velden"
                },
                {
                    "en": "Up to 4 squares",
                    "es": "Hasta 4 casillas",
                    "de": "Bis zu 4 Felder",
                    "nl": "Tot 4 velden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A bishop placed in the center of an open board can control up to 13 squares along its diagonals.",
                "es": "Un alfil colocado en el centro de un tablero abierto puede controlar hasta 13 casillas a lo largo de sus diagonales.",
                "de": "Ein Läufer in der Mitte eines offenen Brettes kann bis zu 13 Felder entlang seiner Diagonalen kontrollieren.",
                "nl": "Een loper in het midden van een open bord kan tot 13 velden langs zijn diagonalen beheersen."
            }
        },
        {
            "question": {
                "en": "What is a fianchetto?",
                "es": "¿Qué es un fianchetto?",
                "de": "Was ist ein Fianchetto?",
                "nl": "Wat is een fianchetto?"
            },
            "options": [
                {
                    "en": "Developing a bishop to b2, g2, b7, or g7",
                    "es": "Desarrollar un alfil a b2, g2, b7 o g7",
                    "de": "Einen Läufer nach b2, g2, b7 oder g7 entwickeln",
                    "nl": "Een loper ontwikkelen naar b2, g2, b7 of g7"
                },
                {
                    "en": "Castling on the queenside",
                    "es": "Enrocar por el flanco de dama",
                    "de": "Lange Rochade",
                    "nl": "Lang rokeren"
                },
                {
                    "en": "Moving the queen early",
                    "es": "Mover la dama temprano",
                    "de": "Die Dame früh bewegen",
                    "nl": "De dame vroeg verplaatsen"
                },
                {
                    "en": "A special pawn move",
                    "es": "Un movimiento especial de peón",
                    "de": "Ein spezieller Bauernzug",
                    "nl": "Een speciale pionzet"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A fianchetto develops a bishop on the long diagonal by moving a knight pawn one square and placing the bishop behind it.",
                "es": "Un fianchetto desarrolla un alfil en la diagonal larga moviendo un peón de caballo una casilla y colocando el alfil detrás.",
                "de": "Ein Fianchetto entwickelt einen Läufer auf der langen Diagonale, indem ein Springerbauer ein Feld vorrückt und der Läufer dahinter platziert wird.",
                "nl": "Een fianchetto ontwikkelt een loper op de lange diagonaal door een paardpion één veld te verplaatsen en de loper erachter te zetten."
            }
        },
        {
            "question": {
                "en": "What is a pawn chain?",
                "es": "¿Qué es una cadena de peones?",
                "de": "Was ist eine Bauernkette?",
                "nl": "Wat is een pionketen?"
            },
            "options": [
                {
                    "en": "Pawns on a diagonal protecting each other",
                    "es": "Peones en diagonal protegiéndose mutuamente",
                    "de": "Bauern auf einer Diagonale die sich gegenseitig schützen",
                    "nl": "Pionnen op een diagonaal die elkaar beschermen"
                },
                {
                    "en": "Pawns all on the same rank",
                    "es": "Peones todos en la misma fila",
                    "de": "Bauern alle auf derselben Reihe",
                    "nl": "Pionnen allemaal op dezelfde rij"
                },
                {
                    "en": "A row of captured pawns",
                    "es": "Una fila de peones capturados",
                    "de": "Eine Reihe geschlagener Bauern",
                    "nl": "Een rij geslagen pionnen"
                },
                {
                    "en": "Pawns that have all been promoted",
                    "es": "Peones que han sido todos promovidos",
                    "de": "Bauern die alle umgewandelt wurden",
                    "nl": "Pionnen die allemaal gepromoveerd zijn"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A pawn chain is a series of pawns on a diagonal where each pawn protects the one in front of it. The base pawn is the weakest point.",
                "es": "Una cadena de peones es una serie de peones en diagonal donde cada peón protege al de delante. El peón base es el punto más débil.",
                "de": "Eine Bauernkette ist eine Reihe von Bauern auf einer Diagonale, wobei jeder Bauer den vor ihm schützt. Der Basisbauer ist der schwächste Punkt.",
                "nl": "Een pionketen is een reeks pionnen op een diagonaal waarbij elke pion de volgende beschermt. De basispion is het zwakste punt."
            }
        },
        {
            "question": {
                "en": "What is a zugzwang?",
                "es": "¿Qué es un zugzwang?",
                "de": "Was ist ein Zugzwang?",
                "nl": "Wat is een zugzwang?"
            },
            "options": [
                {
                    "en": "A position where any move worsens your situation",
                    "es": "Una posición donde cualquier movimiento empeora tu situación",
                    "de": "Eine Stellung in der jeder Zug die eigene Lage verschlechtert",
                    "nl": "Een positie waarin elke zet je situatie verslechtert"
                },
                {
                    "en": "A forced checkmate in three moves",
                    "es": "Un jaque mate forzado en tres movimientos",
                    "de": "Ein erzwungenes Matt in drei Zügen",
                    "nl": "Een geforceerd mat in drie zetten"
                },
                {
                    "en": "A draw by repetition",
                    "es": "Tablas por repetición",
                    "de": "Remis durch Stellungswiederholung",
                    "nl": "Remise door herhaling"
                },
                {
                    "en": "A time pressure situation",
                    "es": "Una situación de presión de tiempo",
                    "de": "Eine Zeitdrucksituation",
                    "nl": "Een tijdnoodsituatie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Zugzwang is a situation where a player would prefer to pass but must move, and any available move makes their position worse.",
                "es": "Zugzwang es una situación donde un jugador preferiría pasar pero debe mover, y cualquier movimiento disponible empeora su posición.",
                "de": "Zugzwang ist eine Situation, in der ein Spieler lieber passen würde, aber ziehen muss, und jeder verfügbare Zug seine Stellung verschlechtert.",
                "nl": "Zugzwang is een situatie waarin een speler liever zou passen maar moet zetten, en elke beschikbare zet de positie verslechtert."
            }
        },
        {
            "question": {
                "en": "What is a sacrifice in chess?",
                "es": "¿Qué es un sacrificio en ajedrez?",
                "de": "Was ist ein Opfer im Schach?",
                "nl": "Wat is een offer in schaken?"
            },
            "options": [
                {
                    "en": "Giving up material for a positional or tactical gain",
                    "es": "Entregar material para obtener ventaja posicional o táctica",
                    "de": "Material opfern für positionellen oder taktischen Vorteil",
                    "nl": "Materiaal opgeven voor positioneel of tactisch voordeel"
                },
                {
                    "en": "Resigning the game early",
                    "es": "Resignar el juego temprano",
                    "de": "Das Spiel früh aufgeben",
                    "nl": "De partij vroeg opgeven"
                },
                {
                    "en": "Moving your king forward",
                    "es": "Mover tu rey hacia adelante",
                    "de": "Den König vorwärts bewegen",
                    "nl": "Je koning naar voren bewegen"
                },
                {
                    "en": "Trading all your pieces",
                    "es": "Intercambiar todas tus piezas",
                    "de": "Alle Figuren tauschen",
                    "nl": "Al je stukken ruilen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A sacrifice involves voluntarily giving up material to gain an advantage such as a stronger attack, better position, or eventual checkmate.",
                "es": "Un sacrificio implica entregar material voluntariamente para obtener ventaja como un ataque más fuerte, mejor posición o eventual jaque mate.",
                "de": "Ein Opfer bedeutet, freiwillig Material aufzugeben, um einen Vorteil wie stärkeren Angriff, bessere Stellung oder eventuelles Matt zu erzielen.",
                "nl": "Een offer houdt in dat je vrijwillig materiaal opgeeft voor voordeel zoals een sterkere aanval, betere positie of uiteindelijk schaakmat."
            }
        },
        {
            "question": {
                "en": "What is a knight fork?",
                "es": "¿Qué es un tenedor de caballo?",
                "de": "Was ist eine Springergabel?",
                "nl": "Wat is een paardvork?"
            },
            "options": [
                {
                    "en": "A knight attacking two or more pieces at once",
                    "es": "Un caballo atacando dos o más piezas a la vez",
                    "de": "Ein Springer greift zwei oder mehr Figuren gleichzeitig an",
                    "nl": "Een paard dat twee of meer stukken tegelijk aanvalt"
                },
                {
                    "en": "Two knights defending each other",
                    "es": "Dos caballos defendiéndose mutuamente",
                    "de": "Zwei Springer verteidigen sich gegenseitig",
                    "nl": "Twee paarden die elkaar verdedigen"
                },
                {
                    "en": "A knight on the edge of the board",
                    "es": "Un caballo en el borde del tablero",
                    "de": "Ein Springer am Rand des Brettes",
                    "nl": "Een paard aan de rand van het bord"
                },
                {
                    "en": "Moving a knight backward",
                    "es": "Mover un caballo hacia atrás",
                    "de": "Einen Springer rückwärts bewegen",
                    "nl": "Een paard achteruit bewegen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A knight fork is particularly powerful because the knight's unique L-shaped movement makes it hard to block, and it can attack pieces that are far apart.",
                "es": "Un tenedor de caballo es especialmente poderoso porque el movimiento en L del caballo hace difícil bloquearlo y puede atacar piezas alejadas.",
                "de": "Eine Springergabel ist besonders stark, weil die L-förmige Bewegung des Springers schwer zu blockieren ist und weit entfernte Figuren angreifen kann.",
                "nl": "Een paardvork is bijzonder krachtig omdat de L-vormige beweging van het paard moeilijk te blokkeren is en ver uit elkaar staande stukken kan aanvallen."
            }
        },
        {
            "question": {
                "en": "What is a stalemate?",
                "es": "¿Qué es un ahogado?",
                "de": "Was ist ein Patt?",
                "nl": "Wat is een pat?"
            },
            "options": [
                {
                    "en": "Player not in check has no legal moves",
                    "es": "Jugador no en jaque sin movimientos legales",
                    "de": "Spieler nicht im Schach hat keine legalen Züge",
                    "nl": "Speler staat niet schaak maar heeft geen legale zetten"
                },
                {
                    "en": "Both players agree to a draw",
                    "es": "Ambos jugadores acuerdan tablas",
                    "de": "Beide Spieler einigen sich auf Remis",
                    "nl": "Beide spelers spreken remise af"
                },
                {
                    "en": "The king is captured",
                    "es": "El rey es capturado",
                    "de": "Der König wird geschlagen",
                    "nl": "De koning wordt geslagen"
                },
                {
                    "en": "Time runs out for both players",
                    "es": "Se acaba el tiempo para ambos jugadores",
                    "de": "Die Zeit läuft für beide Spieler ab",
                    "nl": "De tijd loopt af voor beide spelers"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Stalemate occurs when a player is not in check but has no legal moves. The game is drawn, which can save a losing position.",
                "es": "El ahogado ocurre cuando un jugador no está en jaque pero no tiene movimientos legales. La partida es tablas, lo que puede salvar una posición perdida.",
                "de": "Patt tritt ein, wenn ein Spieler nicht im Schach steht aber keine legalen Züge hat. Die Partie endet remis, was eine verlorene Stellung retten kann.",
                "nl": "Pat treedt op wanneer een speler niet schaak staat maar geen legale zetten heeft. De partij eindigt in remise, wat een verloren stelling kan redden."
            }
        },
        {
            "question": {
                "en": "What is the bishop pair advantage?",
                "es": "¿Cuál es la ventaja de la pareja de alfiles?",
                "de": "Was ist der Läuferpaar-Vorteil?",
                "nl": "Wat is het voordeel van het loperpaar?"
            },
            "options": [
                {
                    "en": "Two bishops cover both color squares effectively",
                    "es": "Dos alfiles cubren ambos colores de casillas efectivamente",
                    "de": "Zwei Läufer decken beide Feldfarben effektiv ab",
                    "nl": "Twee lopers bestrijken beide veldkleuren effectief"
                },
                {
                    "en": "Bishops are worth more than rooks",
                    "es": "Los alfiles valen más que las torres",
                    "de": "Läufer sind mehr wert als Türme",
                    "nl": "Lopers zijn meer waard dan torens"
                },
                {
                    "en": "Two bishops can checkmate alone",
                    "es": "Dos alfiles pueden dar mate solos",
                    "de": "Zwei Läufer können allein mattsetzen",
                    "nl": "Twee lopers kunnen alleen schaakmat zetten"
                },
                {
                    "en": "Bishops block pawns effectively",
                    "es": "Los alfiles bloquean peones efectivamente",
                    "de": "Läufer blockieren Bauern effektiv",
                    "nl": "Lopers blokkeren pionnen effectief"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Having both bishops is an advantage because together they control squares of both colors, making them very powerful in open positions.",
                "es": "Tener ambos alfiles es una ventaja porque juntos controlan casillas de ambos colores, siendo muy poderosos en posiciones abiertas.",
                "de": "Beide Läufer zu haben ist ein Vorteil, da sie zusammen Felder beider Farben kontrollieren und in offenen Stellungen sehr stark sind.",
                "nl": "Beide lopers hebben is een voordeel omdat ze samen velden van beide kleuren beheersen en zeer krachtig zijn in open stellingen."
            }
        },
        {
            "question": {
                "en": "What is a pawn majority?",
                "es": "¿Qué es una mayoría de peones?",
                "de": "Was ist eine Bauernmehrheit?",
                "nl": "Wat is een pionmeerderheid?"
            },
            "options": [
                {
                    "en": "Having more pawns on one side of the board",
                    "es": "Tener más peones en un lado del tablero",
                    "de": "Mehr Bauern auf einer Seite des Brettes haben",
                    "nl": "Meer pionnen aan één kant van het bord hebben"
                },
                {
                    "en": "Having more total pawns than your opponent",
                    "es": "Tener más peones totales que tu oponente",
                    "de": "Insgesamt mehr Bauern als der Gegner haben",
                    "nl": "Meer totale pionnen hebben dan je tegenstander"
                },
                {
                    "en": "All pawns being on white squares",
                    "es": "Todos los peones en casillas blancas",
                    "de": "Alle Bauern auf weißen Feldern",
                    "nl": "Alle pionnen op witte velden"
                },
                {
                    "en": "Pawns that have crossed the center",
                    "es": "Peones que han cruzado el centro",
                    "de": "Bauern die das Zentrum überquert haben",
                    "nl": "Pionnen die het centrum zijn gepasseerd"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A pawn majority means having more pawns than your opponent on one side of the board. This can create a passed pawn in the endgame.",
                "es": "Una mayoría de peones significa tener más peones que tu oponente en un lado del tablero. Esto puede crear un peón pasado en el final.",
                "de": "Eine Bauernmehrheit bedeutet, mehr Bauern als der Gegner auf einer Brettseite zu haben. Dies kann im Endspiel einen Freibauern erzeugen.",
                "nl": "Een pionmeerderheid betekent meer pionnen dan je tegenstander aan één kant van het bord. Dit kan een vrijpion creëren in het eindspel."
            }
        },
        {
            "question": {
                "en": "What is an open file in chess?",
                "es": "¿Qué es una columna abierta en ajedrez?",
                "de": "Was ist eine offene Linie im Schach?",
                "nl": "Wat is een open lijn in schaken?"
            },
            "options": [
                {
                    "en": "A file with no pawns on it",
                    "es": "Una columna sin peones",
                    "de": "Eine Linie ohne Bauern",
                    "nl": "Een lijn zonder pionnen"
                },
                {
                    "en": "A file with the king",
                    "es": "Una columna con el rey",
                    "de": "Eine Linie mit dem König",
                    "nl": "Een lijn met de koning"
                },
                {
                    "en": "Any file on the edge of the board",
                    "es": "Cualquier columna en el borde del tablero",
                    "de": "Jede Linie am Rand des Brettes",
                    "nl": "Elke lijn aan de rand van het bord"
                },
                {
                    "en": "A file where a piece was captured",
                    "es": "Una columna donde una pieza fue capturada",
                    "de": "Eine Linie wo eine Figur geschlagen wurde",
                    "nl": "Een lijn waar een stuk geslagen werd"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An open file has no pawns of either color on it. Rooks and queens are most effective on open files where they can penetrate into enemy territory.",
                "es": "Una columna abierta no tiene peones de ningún color. Torres y damas son más efectivas en columnas abiertas donde pueden penetrar en territorio enemigo.",
                "de": "Eine offene Linie hat keine Bauern beider Farben. Türme und Damen sind auf offenen Linien am effektivsten, wo sie ins gegnerische Gebiet eindringen können.",
                "nl": "Een open lijn heeft geen pionnen van beide kleuren. Torens en dames zijn het effectiefst op open lijnen waar ze vijandelijk gebied kunnen binnendringen."
            }
        },
        {
            "question": {
                "en": "What is a semi-open file?",
                "es": "¿Qué es una columna semiabierta?",
                "de": "Was ist eine halboffene Linie?",
                "nl": "Wat is een halfopen lijn?"
            },
            "options": [
                {
                    "en": "A file with only one side's pawns on it",
                    "es": "Una columna con peones de solo un bando",
                    "de": "Eine Linie mit Bauern nur einer Seite",
                    "nl": "Een lijn met pionnen van slechts één kant"
                },
                {
                    "en": "A file that is half blocked by pieces",
                    "es": "Una columna medio bloqueada por piezas",
                    "de": "Eine Linie die halb durch Figuren blockiert ist",
                    "nl": "Een lijn die half geblokkeerd is door stukken"
                },
                {
                    "en": "The e-file or d-file",
                    "es": "La columna e o d",
                    "de": "Die e-Linie oder d-Linie",
                    "nl": "De e-lijn of d-lijn"
                },
                {
                    "en": "A file next to an open file",
                    "es": "Una columna al lado de una columna abierta",
                    "de": "Eine Linie neben einer offenen Linie",
                    "nl": "Een lijn naast een open lijn"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A semi-open file has pawns of only one color on it. Rooks can use semi-open files to pressure the opponent's remaining pawn.",
                "es": "Una columna semiabierta tiene peones de un solo color. Las torres pueden usarla para presionar al peón restante del oponente.",
                "de": "Eine halboffene Linie hat Bauern nur einer Farbe. Türme können sie nutzen, um den verbliebenen Bauern des Gegners unter Druck zu setzen.",
                "nl": "Een halfopen lijn heeft pionnen van slechts één kleur. Torens kunnen deze gebruiken om druk uit te oefenen op de overgebleven pion van de tegenstander."
            }
        },
        {
            "question": {
                "en": "What is a good bishop vs a bad bishop?",
                "es": "¿Qué diferencia un alfil bueno de uno malo?",
                "de": "Was unterscheidet einen guten von einem schlechten Läufer?",
                "nl": "Wat is het verschil tussen een goede en slechte loper?"
            },
            "options": [
                {
                    "en": "Good bishop's pawns are on opposite color squares",
                    "es": "Los peones del alfil bueno están en casillas de color opuesto",
                    "de": "Die Bauern des guten Läufers stehen auf anderer Feldfarbe",
                    "nl": "De pionnen van de goede loper staan op de andere veldkleur"
                },
                {
                    "en": "A good bishop has more squares to go to",
                    "es": "Un alfil bueno tiene más casillas adonde ir",
                    "de": "Ein guter Läufer hat mehr verfügbare Felder",
                    "nl": "Een goede loper heeft meer velden om naartoe te gaan"
                },
                {
                    "en": "A good bishop is closer to the center",
                    "es": "Un alfil bueno está más cerca del centro",
                    "de": "Ein guter Läufer ist näher am Zentrum",
                    "nl": "Een goede loper staat dichter bij het centrum"
                },
                {
                    "en": "A good bishop is one that was developed first",
                    "es": "Un alfil bueno es el que se desarrolló primero",
                    "de": "Ein guter Läufer wurde zuerst entwickelt",
                    "nl": "Een goede loper is degene die eerst ontwikkeld werd"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A good bishop has its own pawns mostly on the opposite color squares, leaving its diagonals free. A bad bishop is blocked by its own pawns.",
                "es": "Un alfil bueno tiene sus peones mayormente en casillas del color opuesto, dejando sus diagonales libres. Un alfil malo está bloqueado por sus propios peones.",
                "de": "Ein guter Läufer hat seine eigenen Bauern meist auf der anderen Feldfarbe, wodurch seine Diagonalen frei bleiben. Ein schlechter Läufer wird von eigenen Bauern blockiert.",
                "nl": "Een goede loper heeft zijn eigen pionnen voornamelijk op de andere veldkleur, waardoor zijn diagonalen vrij blijven. Een slechte loper wordt geblokkeerd door eigen pionnen."
            }
        },
        {
            "question": {
                "en": "What does 'development' mean in chess openings?",
                "es": "¿Qué significa 'desarrollo' en aperturas de ajedrez?",
                "de": "Was bedeutet 'Entwicklung' in Schacheröffnungen?",
                "nl": "Wat betekent 'ontwikkeling' in schaakopeningen?"
            },
            "options": [
                {
                    "en": "Moving pieces from starting squares to active positions",
                    "es": "Mover piezas de casillas iniciales a posiciones activas",
                    "de": "Figuren von Startfeldern auf aktive Positionen bringen",
                    "nl": "Stukken van beginvelden naar actieve posities brengen"
                },
                {
                    "en": "Making only pawn moves",
                    "es": "Hacer solo movimientos de peón",
                    "de": "Nur Bauernzüge machen",
                    "nl": "Alleen pionzetten doen"
                },
                {
                    "en": "Memorizing opening theory",
                    "es": "Memorizar teoría de aperturas",
                    "de": "Eröffnungstheorie auswendig lernen",
                    "nl": "Openingstheorie uit het hoofd leren"
                },
                {
                    "en": "Trading pieces in the opening",
                    "es": "Intercambiar piezas en la apertura",
                    "de": "Figuren in der Eröffnung tauschen",
                    "nl": "Stukken ruilen in de opening"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Development means bringing your pieces from their starting positions to active squares where they control the board and support your plans.",
                "es": "El desarrollo significa llevar tus piezas de sus posiciones iniciales a casillas activas donde controlan el tablero y apoyan tus planes.",
                "de": "Entwicklung bedeutet, Figuren von ihren Startfeldern auf aktive Felder zu bringen, wo sie das Brett kontrollieren und die eigenen Pläne unterstützen.",
                "nl": "Ontwikkeling betekent je stukken van hun beginposities naar actieve velden brengen waar ze het bord beheersen en je plannen ondersteunen."
            }
        },
        {
            "question": {
                "en": "What is a pawn island?",
                "es": "¿Qué es una isla de peones?",
                "de": "Was ist eine Bauerninsel?",
                "nl": "Wat is een pioneiland?"
            },
            "options": [
                {
                    "en": "A group of connected pawns separated from others",
                    "es": "Un grupo de peones conectados separados de otros",
                    "de": "Eine Gruppe verbundener Bauern getrennt von anderen",
                    "nl": "Een groep verbonden pionnen gescheiden van andere"
                },
                {
                    "en": "A single pawn in the center",
                    "es": "Un solo peón en el centro",
                    "de": "Ein einzelner Bauer im Zentrum",
                    "nl": "Een enkele pion in het centrum"
                },
                {
                    "en": "Pawns arranged in a circle",
                    "es": "Peones dispuestos en círculo",
                    "de": "Bauern in einem Kreis angeordnet",
                    "nl": "Pionnen in een cirkel gerangschikt"
                },
                {
                    "en": "The last remaining pawn",
                    "es": "El último peón restante",
                    "de": "Der letzte verbleibende Bauer",
                    "nl": "De laatst overgebleven pion"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A pawn island is a group of pawns on adjacent files that are separated from other friendly pawns. Fewer pawn islands generally means a healthier structure.",
                "es": "Una isla de peones es un grupo de peones en columnas adyacentes separados de otros peones amigos. Menos islas generalmente significa una estructura más sana.",
                "de": "Eine Bauerninsel ist eine Gruppe von Bauern auf Nachbarlinien, die von anderen eigenen Bauern getrennt sind. Weniger Bauerninseln bedeuten meist eine gesündere Struktur.",
                "nl": "Een pioneiland is een groep pionnen op aangrenzende lijnen die gescheiden zijn van andere eigen pionnen. Minder pioneilanden betekent meestal een gezondere structuur."
            }
        },
        {
            "question": {
                "en": "What is the 'opposition' in king and pawn endgames?",
                "es": "¿Qué es la 'oposición' en finales de rey y peón?",
                "de": "Was ist die 'Opposition' in König-und-Bauern-Endspielen?",
                "nl": "Wat is de 'oppositie' in koning-en-pioneindspelen?"
            },
            "options": [
                {
                    "en": "Kings face each other with one square between them",
                    "es": "Reyes enfrentados con una casilla entre ellos",
                    "de": "Könige stehen sich mit einem Feld dazwischen gegenüber",
                    "nl": "Koningen staan tegenover elkaar met één veld ertussen"
                },
                {
                    "en": "The opponent refuses to resign",
                    "es": "El oponente se niega a resignar",
                    "de": "Der Gegner weigert sich aufzugeben",
                    "nl": "De tegenstander weigert op te geven"
                },
                {
                    "en": "Playing against a higher-rated player",
                    "es": "Jugar contra un jugador mejor clasificado",
                    "de": "Gegen einen höher bewerteten Spieler spielen",
                    "nl": "Spelen tegen een hoger gewaardeerde speler"
                },
                {
                    "en": "Both players have only pawns left",
                    "es": "Ambos jugadores solo tienen peones",
                    "de": "Beide Spieler haben nur noch Bauern",
                    "nl": "Beide spelers hebben alleen nog pionnen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The opposition is when two kings face each other with one square between them. Having the opposition means your opponent must move away, giving you access.",
                "es": "La oposición es cuando dos reyes se enfrentan con una casilla entre ellos. Tener la oposición significa que tu oponente debe retirarse, dándote acceso.",
                "de": "Die Opposition ist, wenn zwei Könige sich mit einem Feld dazwischen gegenüberstehen. Wer die Opposition hat, zwingt den Gegner zum Ausweichen.",
                "nl": "De oppositie is wanneer twee koningen tegenover elkaar staan met één veld ertussen. De oppositie hebben betekent dat je tegenstander moet wijken."
            }
        },
        {
            "question": {
                "en": "What is an overloaded piece?",
                "es": "¿Qué es una pieza sobrecargada?",
                "de": "Was ist eine überladene Figur?",
                "nl": "Wat is een overbelast stuk?"
            },
            "options": [
                {
                    "en": "A piece defending too many targets at once",
                    "es": "Una pieza defendiendo demasiados objetivos a la vez",
                    "de": "Eine Figur die zu viele Ziele gleichzeitig verteidigt",
                    "nl": "Een stuk dat te veel doelen tegelijk verdedigt"
                },
                {
                    "en": "A piece that has moved too many times",
                    "es": "Una pieza que se ha movido demasiadas veces",
                    "de": "Eine Figur die sich zu oft bewegt hat",
                    "nl": "Een stuk dat te vaak verplaatst is"
                },
                {
                    "en": "A piece on a crowded board",
                    "es": "Una pieza en un tablero congestionado",
                    "de": "Eine Figur auf einem vollen Brett",
                    "nl": "Een stuk op een vol bord"
                },
                {
                    "en": "A piece with no available moves",
                    "es": "Una pieza sin movimientos disponibles",
                    "de": "Eine Figur ohne verfügbare Züge",
                    "nl": "Een stuk zonder beschikbare zetten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An overloaded piece has too many defensive duties. Exploiting this by attacking one target can force the piece to abandon its other defensive task.",
                "es": "Una pieza sobrecargada tiene demasiadas tareas defensivas. Explotar esto atacando un objetivo puede forzarla a abandonar su otra tarea defensiva.",
                "de": "Eine überladene Figur hat zu viele Verteidigungsaufgaben. Dies kann man ausnutzen, indem man ein Ziel angreift und die Figur ihre andere Aufgabe aufgeben muss.",
                "nl": "Een overbelast stuk heeft te veel verdedigingstaken. Dit uitbuiten door één doel aan te vallen dwingt het stuk zijn andere verdedigingstaak op te geven."
            }
        },
        {
            "question": {
                "en": "What is a back rank mate?",
                "es": "¿Qué es un mate de última fila?",
                "de": "Was ist ein Grundreihenmatt?",
                "nl": "Wat is een achterste-rij mat?"
            },
            "options": [
                {
                    "en": "Checkmate on the first or eighth rank",
                    "es": "Jaque mate en la primera u octava fila",
                    "de": "Schachmatt auf der ersten oder achten Reihe",
                    "nl": "Schaakmat op de eerste of achtste rij"
                },
                {
                    "en": "Any checkmate using a rook",
                    "es": "Cualquier jaque mate con torre",
                    "de": "Jedes Schachmatt mit einem Turm",
                    "nl": "Elk schaakmat met een toren"
                },
                {
                    "en": "Checkmate from behind the opponent",
                    "es": "Jaque mate desde detrás del oponente",
                    "de": "Schachmatt von hinter dem Gegner",
                    "nl": "Schaakmat van achter de tegenstander"
                },
                {
                    "en": "A king trapped in the corner",
                    "es": "Un rey atrapado en la esquina",
                    "de": "Ein in der Ecke gefangener König",
                    "nl": "Een koning gevangen in de hoek"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A back rank mate happens when a rook or queen checkmates the king on its home rank because friendly pawns block the king's escape.",
                "es": "Un mate de última fila ocurre cuando una torre o dama da mate al rey en su fila porque sus propios peones bloquean la escapada.",
                "de": "Ein Grundreihenmatt geschieht, wenn Turm oder Dame den König auf seiner Grundreihe mattsetzen, weil eigene Bauern die Flucht blockieren.",
                "nl": "Een achterste-rij mat vindt plaats wanneer een toren of dame de koning mat zet op zijn thuisrij omdat eigen pionnen de ontsnapping blokkeren."
            }
        },
        {
            "question": {
                "en": "What is a strong center in chess?",
                "es": "¿Qué es un centro fuerte en ajedrez?",
                "de": "Was ist ein starkes Zentrum im Schach?",
                "nl": "Wat is een sterk centrum in schaken?"
            },
            "options": [
                {
                    "en": "Controlling the e4, d4, e5, d5 squares",
                    "es": "Controlar las casillas e4, d4, e5, d5",
                    "de": "Die Felder e4, d4, e5, d5 kontrollieren",
                    "nl": "De velden e4, d4, e5, d5 beheersen"
                },
                {
                    "en": "Having your king in the center",
                    "es": "Tener tu rey en el centro",
                    "de": "Den König im Zentrum haben",
                    "nl": "Je koning in het centrum hebben"
                },
                {
                    "en": "Placing all pieces on central squares",
                    "es": "Colocar todas las piezas en casillas centrales",
                    "de": "Alle Figuren auf zentrale Felder stellen",
                    "nl": "Alle stukken op centrale velden plaatsen"
                },
                {
                    "en": "Having no pawns in the center",
                    "es": "No tener peones en el centro",
                    "de": "Keine Bauern im Zentrum haben",
                    "nl": "Geen pionnen in het centrum hebben"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A strong center means controlling the four central squares (e4, d4, e5, d5) with pawns and pieces, which gives greater mobility and attacking chances.",
                "es": "Un centro fuerte significa controlar las cuatro casillas centrales con peones y piezas, lo que da mayor movilidad y oportunidades de ataque.",
                "de": "Ein starkes Zentrum bedeutet, die vier zentralen Felder mit Bauern und Figuren zu kontrollieren, was mehr Mobilität und Angriffschancen bietet.",
                "nl": "Een sterk centrum betekent de vier centrale velden beheersen met pionnen en stukken, wat meer mobiliteit en aanvalskansen geeft."
            }
        },
        {
            "question": {
                "en": "What is a perpetual check?",
                "es": "¿Qué es un jaque perpetuo?",
                "de": "Was ist ein Dauerschach?",
                "nl": "Wat is een eeuwig schaak?"
            },
            "options": [
                {
                    "en": "Endless series of checks leading to a draw",
                    "es": "Serie infinita de jaques que lleva a tablas",
                    "de": "Endlose Serie von Schachs die zu Remis führt",
                    "nl": "Eindeloze reeks schaakzetten die tot remise leidt"
                },
                {
                    "en": "Checking with every piece",
                    "es": "Dar jaque con cada pieza",
                    "de": "Mit jeder Figur Schach geben",
                    "nl": "Schaak geven met elk stuk"
                },
                {
                    "en": "A check that cannot be blocked",
                    "es": "Un jaque que no se puede bloquear",
                    "de": "Ein Schach das nicht blockiert werden kann",
                    "nl": "Een schaak dat niet geblokkeerd kan worden"
                },
                {
                    "en": "Checking from the same square",
                    "es": "Dar jaque desde la misma casilla",
                    "de": "Schach vom gleichen Feld geben",
                    "nl": "Schaak geven vanaf hetzelfde veld"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Perpetual check is a series of checks that the opponent cannot escape, resulting in a draw. It is often used to save a losing position.",
                "es": "El jaque perpetuo es una serie de jaques que el oponente no puede escapar, resultando en tablas. A menudo se usa para salvar una posición perdida.",
                "de": "Dauerschach ist eine Serie von Schachs, der der Gegner nicht entkommen kann, was zu Remis führt. Es wird oft genutzt, um eine verlorene Stellung zu retten.",
                "nl": "Eeuwig schaak is een reeks schaakzetten waaraan de tegenstander niet kan ontsnappen, wat tot remise leidt. Het wordt vaak gebruikt om een verloren stelling te redden."
            }
        },
        {
            "question": {
                "en": "What is an X-ray attack in chess?",
                "es": "¿Qué es un ataque de rayos X en ajedrez?",
                "de": "Was ist ein Röntgenangriff im Schach?",
                "nl": "Wat is een röntgenaanval in schaken?"
            },
            "options": [
                {
                    "en": "A piece attacks through another piece",
                    "es": "Una pieza ataca a través de otra pieza",
                    "de": "Eine Figur greift durch eine andere Figur hindurch an",
                    "nl": "Een stuk valt aan door een ander stuk heen"
                },
                {
                    "en": "Attacking from far away",
                    "es": "Atacar desde lejos",
                    "de": "Von weit weg angreifen",
                    "nl": "Aanvallen van ver weg"
                },
                {
                    "en": "An invisible threat",
                    "es": "Una amenaza invisible",
                    "de": "Eine unsichtbare Drohung",
                    "nl": "Een onzichtbare dreiging"
                },
                {
                    "en": "A surprise checkmate",
                    "es": "Un jaque mate sorpresa",
                    "de": "Ein überraschendes Schachmatt",
                    "nl": "Een verrassend schaakmat"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An X-ray attack occurs when a piece indirectly attacks or defends through another piece standing in between on the same line or diagonal.",
                "es": "Un ataque de rayos X ocurre cuando una pieza ataca o defiende indirectamente a través de otra pieza en la misma línea o diagonal.",
                "de": "Ein Röntgenangriff tritt auf, wenn eine Figur indirekt durch eine andere Figur auf derselben Linie oder Diagonale angreift oder verteidigt.",
                "nl": "Een röntgenaanval vindt plaats wanneer een stuk indirect aanvalt of verdedigt door een ander stuk heen op dezelfde lijn of diagonaal."
            }
        },
        {
            "question": {
                "en": "What is the 50-move rule in chess?",
                "es": "¿Qué es la regla de los 50 movimientos en ajedrez?",
                "de": "Was ist die 50-Züge-Regel im Schach?",
                "nl": "Wat is de 50-zettenregel in schaken?"
            },
            "options": [
                {
                    "en": "Draw if no capture or pawn move in 50 moves",
                    "es": "Tablas si no hay captura ni movimiento de peón en 50 jugadas",
                    "de": "Remis wenn 50 Züge ohne Schlagen oder Bauernzug",
                    "nl": "Remise als er 50 zetten geen slag of pionzet is"
                },
                {
                    "en": "Game must end after 50 moves",
                    "es": "La partida debe terminar después de 50 movimientos",
                    "de": "Das Spiel muss nach 50 Zügen enden",
                    "nl": "De partij moet na 50 zetten eindigen"
                },
                {
                    "en": "Each player gets 50 minutes",
                    "es": "Cada jugador tiene 50 minutos",
                    "de": "Jeder Spieler bekommt 50 Minuten",
                    "nl": "Elke speler krijgt 50 minuten"
                },
                {
                    "en": "You must make 50 moves per hour",
                    "es": "Debes hacer 50 movimientos por hora",
                    "de": "Man muss 50 Züge pro Stunde machen",
                    "nl": "Je moet 50 zetten per uur doen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The 50-move rule allows either player to claim a draw if 50 consecutive moves pass without a pawn move or a capture by either side.",
                "es": "La regla de los 50 movimientos permite reclamar tablas si pasan 50 movimientos consecutivos sin movimiento de peón ni captura.",
                "de": "Die 50-Züge-Regel erlaubt es, Remis zu fordern, wenn 50 aufeinanderfolgende Züge ohne Bauernzug oder Schlagen vergehen.",
                "nl": "De 50-zettenregel staat toe remise te claimen als 50 opeenvolgende zetten voorbijgaan zonder pionzet of slag."
            }
        },
        {
            "question": {
                "en": "What is a protected passed pawn?",
                "es": "¿Qué es un peón pasado protegido?",
                "de": "Was ist ein gedeckter Freibauer?",
                "nl": "Wat is een gedekte vrijpion?"
            },
            "options": [
                {
                    "en": "A passed pawn defended by another pawn",
                    "es": "Un peón pasado defendido por otro peón",
                    "de": "Ein Freibauer der von einem anderen Bauern gedeckt wird",
                    "nl": "Een vrijpion die door een andere pion gedekt wordt"
                },
                {
                    "en": "A pawn next to the king",
                    "es": "Un peón al lado del rey",
                    "de": "Ein Bauer neben dem König",
                    "nl": "Een pion naast de koning"
                },
                {
                    "en": "A pawn that cannot be captured",
                    "es": "Un peón que no puede ser capturado",
                    "de": "Ein Bauer der nicht geschlagen werden kann",
                    "nl": "Een pion die niet geslagen kan worden"
                },
                {
                    "en": "A promoted pawn",
                    "es": "Un peón promovido",
                    "de": "Ein umgewandelter Bauer",
                    "nl": "Een gepromoveerde pion"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A protected passed pawn is a passed pawn defended by another pawn. It is very strong because the opponent must use a piece to stop it from promoting.",
                "es": "Un peón pasado protegido es un peón pasado defendido por otro peón. Es muy fuerte porque el rival debe usar una pieza para detener su promoción.",
                "de": "Ein gedeckter Freibauer ist ein Freibauer, der von einem anderen Bauern gedeckt wird. Er ist sehr stark, weil der Gegner eine Figur einsetzen muss.",
                "nl": "Een gedekte vrijpion is een vrijpion die door een andere pion gedekt wordt. Deze is zeer sterk omdat de tegenstander een stuk moet inzetten om promotie te stoppen."
            }
        },
        {
            "question": {
                "en": "What is the purpose of controlling the center?",
                "es": "¿Cuál es el propósito de controlar el centro?",
                "de": "Was ist der Zweck der Zentrumskontrolle?",
                "nl": "Wat is het doel van centrumcontrole?"
            },
            "options": [
                {
                    "en": "Pieces have more mobility and control from there",
                    "es": "Las piezas tienen más movilidad y control desde allí",
                    "de": "Figuren haben von dort mehr Mobilität und Kontrolle",
                    "nl": "Stukken hebben van daaruit meer mobiliteit en controle"
                },
                {
                    "en": "The center is the safest place for the king",
                    "es": "El centro es el lugar más seguro para el rey",
                    "de": "Das Zentrum ist der sicherste Platz für den König",
                    "nl": "Het centrum is de veiligste plek voor de koning"
                },
                {
                    "en": "To block all opponent's pieces",
                    "es": "Para bloquear todas las piezas del oponente",
                    "de": "Um alle gegnerischen Figuren zu blockieren",
                    "nl": "Om alle stukken van de tegenstander te blokkeren"
                },
                {
                    "en": "It makes castling easier",
                    "es": "Facilita el enroque",
                    "de": "Es erleichtert die Rochade",
                    "nl": "Het maakt rokeren makkelijker"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Central control gives pieces maximum mobility and influence over the board. A piece in the center reaches more squares than one on the edge.",
                "es": "El control central da a las piezas máxima movilidad e influencia sobre el tablero. Una pieza en el centro alcanza más casillas que una en el borde.",
                "de": "Zentrumskontrolle gibt Figuren maximale Mobilität und Einfluss auf das Brett. Eine Figur im Zentrum erreicht mehr Felder als eine am Rand.",
                "nl": "Centrumcontrole geeft stukken maximale mobiliteit en invloed op het bord. Een stuk in het centrum bereikt meer velden dan een aan de rand."
            }
        },
        {
            "question": {
                "en": "What is a centralized knight?",
                "es": "¿Qué es un caballo centralizado?",
                "de": "Was ist ein zentralisierter Springer?",
                "nl": "Wat is een gecentraliseerd paard?"
            },
            "options": [
                {
                    "en": "A knight placed on a strong central square",
                    "es": "Un caballo colocado en una casilla central fuerte",
                    "de": "Ein Springer auf einem starken zentralen Feld",
                    "nl": "Een paard geplaatst op een sterk centraal veld"
                },
                {
                    "en": "A knight that has not moved yet",
                    "es": "Un caballo que aún no se ha movido",
                    "de": "Ein Springer der sich noch nicht bewegt hat",
                    "nl": "Een paard dat nog niet bewogen heeft"
                },
                {
                    "en": "Two knights next to each other",
                    "es": "Dos caballos uno al lado del otro",
                    "de": "Zwei Springer nebeneinander",
                    "nl": "Twee paarden naast elkaar"
                },
                {
                    "en": "A knight protecting the king",
                    "es": "Un caballo protegiendo al rey",
                    "de": "Ein Springer der den König schützt",
                    "nl": "Een paard dat de koning beschermt"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A centralized knight on squares like d4, d5, e4, or e5 controls up to 8 squares. Knights are much stronger in the center than on the rim.",
                "es": "Un caballo centralizado en casillas como d4, d5, e4 o e5 controla hasta 8 casillas. Los caballos son mucho más fuertes en el centro que en el borde.",
                "de": "Ein zentralisierter Springer auf Feldern wie d4, d5, e4 oder e5 kontrolliert bis zu 8 Felder. Springer sind im Zentrum viel stärker als am Rand.",
                "nl": "Een gecentraliseerd paard op velden als d4, d5, e4 of e5 beheerst tot 8 velden. Paarden zijn veel sterker in het centrum dan aan de rand."
            }
        }
    ]
};
