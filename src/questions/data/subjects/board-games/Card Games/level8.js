// Quiz Template - Level 8: Bord spelletjes - Card Games
(function() {
  const level8 = {
    name: {
      en: "Card Games - Champion",
      es: "Juegos de Cartas - Campeón",
      de: "Kartenspiele - Champion",
      nl: "Kaartspellen - Kampioen"
    },
    questions: [
      {
            question: {
                  en: "In Texas Hold'em, what does ICM stand for?",
                  es: "En Texas Hold'em, ¿qué significa ICM?",
                  de: "Was bedeutet ICM beim Texas Hold'em?",
                  nl: "Wat betekent ICM bij Texas Hold'em?"
            },
            options: [
                  {
                        en: "Independent Chip Model",
                        es: "Modelo Independiente de Fichas",
                        de: "Unabhängiges Chip-Modell",
                        nl: "Onafhankelijk Chip Model"
                  },
                  {
                        en: "Internal Card Management",
                        es: "Gestión Interna de Cartas",
                        de: "Interne Kartenverwaltung",
                        nl: "Intern Kaartbeheer"
                  },
                  {
                        en: "Intuitive Card Method",
                        es: "Método Intuitivo de Cartas",
                        de: "Intuitive Kartenmethode",
                        nl: "Intuïtieve Kaartmethode"
                  },
                  {
                        en: "International Card Measure",
                        es: "Medida Internacional de Cartas",
                        de: "Internationales Kartenmaß",
                        nl: "Internationaal Kaartmaat"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "ICM (Independent Chip Model) is used in tournament poker to calculate the value of chip stacks.",
                  es: "ICM (Modelo Independiente de Fichas) se usa en torneos de póker para calcular el valor de las pilas de fichas.",
                  de: "ICM (Unabhängiges Chip-Modell) wird im Turnierpoker verwendet, um den Wert von Chip-Stapeln zu berechnen.",
                  nl: "ICM (Onafhankelijk Chip Model) wordt gebruikt in toernooipoker om de waarde van chipstacks te berekenen."
            }
      },
      {
            question: {
                  en: "What is a 'Vienna Coup' in Bridge?",
                  es: "¿Qué es un 'Vienna Coup' en Bridge?",
                  de: "Was ist ein 'Vienna Coup' beim Bridge?",
                  nl: "Wat is een 'Vienna Coup' bij Bridge?"
            },
            options: [
                  {
                        en: "Unblocking play before squeeze",
                        es: "Jugada de desbloqueo antes de squeeze",
                        de: "Entsperren vor dem Squeeze",
                        nl: "Ontblokkerende zet voor squeeze"
                  },
                  {
                        en: "Special bidding convention",
                        es: "Convención especial de puja",
                        de: "Spezielle Bietkonvention",
                        nl: "Speciale biedconventie"
                  },
                  {
                        en: "Defensive card signal",
                        es: "Señal defensiva de carta",
                        de: "Defensives Kartensignal",
                        nl: "Defensief kaartsignaal"
                  },
                  {
                        en: "Trump lead technique",
                        es: "Técnica de salida de triunfo",
                        de: "Trumpf-Ausspiel-Technik",
                        nl: "Troef uitspeeltechniek"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "A Vienna Coup is an unblocking play that prepares for a squeeze by removing a blocking card.",
                  es: "Un Vienna Coup es una jugada de desbloqueo que prepara un squeeze eliminando una carta bloqueadora.",
                  de: "Ein Vienna Coup ist ein entsperrendes Spiel, das einen Squeeze vorbereitet, indem eine blockierende Karte entfernt wird.",
                  nl: "Een Vienna Coup is een ontblokkerende zet die een squeeze voorbereidt door een blokkerende kaart te verwijderen."
            }
      },
      {
            question: {
                  en: "In Euchre, what is 'going alone'?",
                  es: "En Euchre, ¿qué es 'ir solo'?",
                  de: "Was ist 'alleine gehen' beim Euchre?",
                  nl: "Wat is 'alleen gaan' bij Euchre?"
            },
            options: [
                  {
                        en: "Playing without partner",
                        es: "Jugar sin compañero",
                        de: "Ohne Partner spielen",
                        nl: "Spelen zonder partner"
                  },
                  {
                        en: "Bidding minimum",
                        es: "Apostar mínimo",
                        de: "Mindestgebot",
                        nl: "Minimum bieden"
                  },
                  {
                        en: "Passing every trick",
                        es: "Pasar cada baza",
                        de: "Jeden Stich passen",
                        nl: "Elke slag passen"
                  },
                  {
                        en: "Leaving the game",
                        es: "Salir del juego",
                        de: "Das Spiel verlassen",
                        nl: "Het spel verlaten"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Going alone means playing without your partner's help for potentially more points.",
                  es: "Ir solo significa jugar sin la ayuda de tu compañero para potencialmente más puntos.",
                  de: "Alleine gehen bedeutet ohne die Hilfe des Partners zu spielen für potentiell mehr Punkte.",
                  nl: "Alleen gaan betekent spelen zonder de hulp van je partner voor potentieel meer punten."
            }
      },
      {
            question: {
                  en: "What is a 'squeeze play' in Bridge?",
                  es: "¿Qué es una 'jugada de squeeze' en Bridge?",
                  de: "Was ist ein 'Squeeze-Spiel' beim Bridge?",
                  nl: "Wat is een 'squeeze-spel' bij Bridge?"
            },
            options: [
                  {
                        en: "Forcing opponent to discard winners",
                        es: "Forzar al oponente a descartar cartas ganadoras",
                        de: "Gegner zwingen, Gewinnkarten abzuwerfen",
                        nl: "Tegenstander dwingen winnende kaarten af te leggen"
                  },
                  {
                        en: "Playing cards quickly",
                        es: "Jugar cartas rápidamente",
                        de: "Karten schnell spielen",
                        nl: "Kaarten snel spelen"
                  },
                  {
                        en: "Holding trump tightly",
                        es: "Mantener los triunfos apretados",
                        de: "Trumpf fest halten",
                        nl: "Troeven stevig vasthouden"
                  },
                  {
                        en: "Bidding aggressively",
                        es: "Pujar agresivamente",
                        de: "Aggressiv bieten",
                        nl: "Agressief bieden"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "A squeeze play forces an opponent to discard a winner or guard, creating an extra trick.",
                  es: "Una jugada de squeeze fuerza al oponente a descartar una carta ganadora o protección, creando una baza extra.",
                  de: "Ein Squeeze-Spiel zwingt einen Gegner, einen Gewinner oder Wächter abzuwerfen, wodurch ein zusätzlicher Stich entsteht.",
                  nl: "Een squeeze-spel dwingt een tegenstander een winnaar of bewaker af te leggen, waardoor een extra slag ontstaat."
            }
      },
      {
            question: {
                  en: "In Poker, what is 'pot odds'?",
                  es: "En Póker, ¿qué son las 'pot odds'?",
                  de: "Was sind 'Pot Odds' beim Poker?",
                  nl: "Wat zijn 'pot odds' bij Poker?"
            },
            options: [
                  {
                        en: "Ratio of pot size to bet cost",
                        es: "Relación entre el tamaño del bote y el coste de la apuesta",
                        de: "Verhältnis von Pottgröße zu Einsatzkosten",
                        nl: "Verhouding tussen potgrootte en inzetkosten"
                  },
                  {
                        en: "Probability of winning",
                        es: "Probabilidad de ganar",
                        de: "Gewinnwahrscheinlichkeit",
                        nl: "Kans op winnen"
                  },
                  {
                        en: "Number of players",
                        es: "Número de jugadores",
                        de: "Anzahl der Spieler",
                        nl: "Aantal spelers"
                  },
                  {
                        en: "Total chips in play",
                        es: "Total de fichas en juego",
                        de: "Gesamtzahl der Chips im Spiel",
                        nl: "Totaal aantal chips in het spel"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Pot odds compare the current pot size to the cost of a call, helping determine if a call is profitable.",
                  es: "Las pot odds comparan el tamaño actual del bote con el coste de igualar, ayudando a determinar si igualar es rentable.",
                  de: "Pot Odds vergleichen die aktuelle Pottgröße mit den Kosten eines Calls und helfen zu bestimmen, ob ein Call profitabel ist.",
                  nl: "Pot odds vergelijken de huidige potgrootte met de kosten van een call, om te bepalen of een call winstgevend is."
            }
      },
      {
            question: {
                  en: "What is 'Blackwood' in Bridge?",
                  es: "¿Qué es 'Blackwood' en Bridge?",
                  de: "Was ist 'Blackwood' beim Bridge?",
                  nl: "Wat is 'Blackwood' bij Bridge?"
            },
            options: [
                  {
                        en: "Ace-asking bidding convention",
                        es: "Convención de puja para preguntar por ases",
                        de: "Ass-fragende Bietkonvention",
                        nl: "Aas-vragende biedconventie"
                  },
                  {
                        en: "Type of trump suit",
                        es: "Tipo de palo de triunfo",
                        de: "Art des Trumpfanzugs",
                        nl: "Type troefkleur"
                  },
                  {
                        en: "Defensive strategy",
                        es: "Estrategia defensiva",
                        de: "Verteidigungsstrategie",
                        nl: "Defensieve strategie"
                  },
                  {
                        en: "Card counting method",
                        es: "Método de contar cartas",
                        de: "Kartenzählmethode",
                        nl: "Kaartentelmethode"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Blackwood is a bidding convention using 4NT to ask partner how many aces they hold.",
                  es: "Blackwood es una convención de puja que usa 4NT para preguntar al compañero cuántos ases tiene.",
                  de: "Blackwood ist eine Bietkonvention, bei der 4NT verwendet wird, um den Partner nach der Anzahl seiner Asse zu fragen.",
                  nl: "Blackwood is een biedconventie waarbij 4NT wordt gebruikt om de partner te vragen hoeveel azen hij heeft."
            }
      },
      {
            question: {
                  en: "In Spades, what is 'nil bidding'?",
                  es: "En Spades, ¿qué es 'apostar nil'?",
                  de: "Was ist 'Null-Gebot' bei Spades?",
                  nl: "Wat is 'nil bieden' bij Spades?"
            },
            options: [
                  {
                        en: "Bidding to take zero tricks",
                        es: "Apostar a no ganar ninguna baza",
                        de: "Bieten, keine Stiche zu machen",
                        nl: "Bieden om nul slagen te maken"
                  },
                  {
                        en: "Passing the bid",
                        es: "Pasar la apuesta",
                        de: "Das Gebot passen",
                        nl: "Het bod passen"
                  },
                  {
                        en: "Bidding maximum",
                        es: "Apostar el máximo",
                        de: "Maximal bieten",
                        nl: "Maximaal bieden"
                  },
                  {
                        en: "Doubling opponent's bid",
                        es: "Doblar la apuesta del oponente",
                        de: "Gebot des Gegners verdoppeln",
                        nl: "Bod van tegenstander verdubbelen"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "A nil bid in Spades means attempting to win zero tricks, which scores bonus points if successful.",
                  es: "Una apuesta nil en Spades significa intentar no ganar ninguna baza, lo que otorga puntos bonus si tiene éxito.",
                  de: "Ein Null-Gebot bei Spades bedeutet, zu versuchen, keine Stiche zu machen, was bei Erfolg Bonuspunkte bringt.",
                  nl: "Een nil bod bij Spades betekent proberen nul slagen te maken, wat bonuspunten oplevert bij succes."
            }
      },
      {
            question: {
                  en: "What is 'counting cards' in Blackjack?",
                  es: "¿Qué es 'contar cartas' en Blackjack?",
                  de: "Was ist 'Kartenzählen' beim Blackjack?",
                  nl: "Wat is 'kaarten tellen' bij Blackjack?"
            },
            options: [
                  {
                        en: "Tracking ratio of high to low cards",
                        es: "Rastrear la proporción de cartas altas a bajas",
                        de: "Verhältnis hoher zu niedrigen Karten verfolgen",
                        nl: "Verhouding van hoge tot lage kaarten bijhouden"
                  },
                  {
                        en: "Counting total cards dealt",
                        es: "Contar el total de cartas repartidas",
                        de: "Gesamtzahl der ausgeteilten Karten zählen",
                        nl: "Totaal aantal gedeelde kaarten tellen"
                  },
                  {
                        en: "Memorizing all cards",
                        es: "Memorizar todas las cartas",
                        de: "Alle Karten auswendig lernen",
                        nl: "Alle kaarten onthouden"
                  },
                  {
                        en: "Counting chips",
                        es: "Contar fichas",
                        de: "Chips zählen",
                        nl: "Fiches tellen"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Card counting tracks the ratio of high to low cards remaining to gain an advantage.",
                  es: "Contar cartas rastrea la proporción de cartas altas a bajas restantes para obtener ventaja.",
                  de: "Kartenzählen verfolgt das Verhältnis der verbleibenden hohen zu niedrigen Karten, um einen Vorteil zu erlangen.",
                  nl: "Kaarten tellen houdt de verhouding van hoge tot lage resterende kaarten bij voor een voordeel."
            }
      },
      {
            question: {
                  en: "In Hearts, what is 'shooting the moon'?",
                  es: "En Hearts, ¿qué es 'disparar a la luna'?",
                  de: "Was bedeutet 'den Mond schießen' bei Hearts?",
                  nl: "Wat is 'naar de maan schieten' bij Hearts?"
            },
            options: [
                  {
                        en: "Taking all penalty cards",
                        es: "Tomar todas las cartas de penalización",
                        de: "Alle Strafkarten nehmen",
                        nl: "Alle strafkaarten nemen"
                  },
                  {
                        en: "Avoiding all hearts",
                        es: "Evitar todos los corazones",
                        de: "Alle Herzen vermeiden",
                        nl: "Alle harten vermijden"
                  },
                  {
                        en: "Playing the highest card",
                        es: "Jugar la carta más alta",
                        de: "Die höchste Karte spielen",
                        nl: "De hoogste kaart spelen"
                  },
                  {
                        en: "Winning first trick",
                        es: "Ganar la primera baza",
                        de: "Den ersten Stich gewinnen",
                        nl: "De eerste slag winnen"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Shooting the moon means taking all hearts and the Queen of Spades, giving others 26 points instead.",
                  es: "Disparar a la luna significa tomar todos los corazones y la Reina de Picas, dando 26 puntos a los demás.",
                  de: "Den Mond schießen bedeutet, alle Herzen und die Pik-Dame zu nehmen, wodurch andere 26 Punkte erhalten.",
                  nl: "Naar de maan schieten betekent alle harten en de Schoppen Vrouw nemen, waardoor anderen 26 punten krijgen."
            }
      },
      {
            question: {
                  en: "What is a 'finesse' in Bridge?",
                  es: "¿Qué es un 'finesse' en Bridge?",
                  de: "Was ist eine 'Finesse' beim Bridge?",
                  nl: "Wat is een 'finesse' bij Bridge?"
            },
            options: [
                  {
                        en: "Playing lower card hoping opponent plays between",
                        es: "Jugar carta baja esperando que oponente juegue intermedia",
                        de: "Niedrigere Karte spielen in der Hoffnung, Gegner spielt dazwischen",
                        nl: "Lagere kaart spelen in de hoop dat tegenstander tussenbeide speelt"
                  },
                  {
                        en: "Always playing the highest card",
                        es: "Siempre jugar la carta más alta",
                        de: "Immer die höchste Karte spielen",
                        nl: "Altijd de hoogste kaart spelen"
                  },
                  {
                        en: "Discarding unwanted cards",
                        es: "Descartar cartas no deseadas",
                        de: "Unerwünschte Karten abwerfen",
                        nl: "Ongewenste kaarten afleggen"
                  },
                  {
                        en: "Bidding technique",
                        es: "Técnica de puja",
                        de: "Biettechnik",
                        nl: "Biedtechniek"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "A finesse is playing a lower card when holding a higher one, hoping the intermediate card is with the opponent on your left.",
                  es: "Un finesse es jugar una carta más baja cuando tienes una más alta, esperando que la carta intermedia esté con el oponente a tu izquierda.",
                  de: "Eine Finesse bedeutet, eine niedrigere Karte zu spielen, wenn man eine höhere hat, in der Hoffnung, dass die mittlere Karte beim Gegner links ist.",
                  nl: "Een finesse is een lagere kaart spelen terwijl je een hogere hebt, hopend dat de tussenliggende kaart bij de tegenstander links zit."
            }
      },
      {
            question: {
                  en: "In Poker, what is 'implied odds'?",
                  es: "En Póker, ¿qué son las 'implied odds'?",
                  de: "Was sind 'implizierte Odds' beim Poker?",
                  nl: "Wat zijn 'implied odds' bij Poker?"
            },
            options: [
                  {
                        en: "Expected future bets if you hit your hand",
                        es: "Apuestas futuras esperadas si consigues tu mano",
                        de: "Erwartete zukünftige Einsätze bei erfolgreicher Hand",
                        nl: "Verwachte toekomstige inzetten als je je hand maakt"
                  },
                  {
                        en: "Current pot size only",
                        es: "Solo el tamaño actual del bote",
                        de: "Nur aktuelle Pottgröße",
                        nl: "Alleen huidige potgrootte"
                  },
                  {
                        en: "Probability of bluffing",
                        es: "Probabilidad de farolear",
                        de: "Wahrscheinlichkeit des Bluffens",
                        nl: "Kans op bluffen"
                  },
                  {
                        en: "Number of outs",
                        es: "Número de outs",
                        de: "Anzahl der Outs",
                        nl: "Aantal outs"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Implied odds include potential future bets you can win if you complete your drawing hand.",
                  es: "Las implied odds incluyen apuestas futuras potenciales que puedes ganar si completas tu mano de proyecto.",
                  de: "Implizierte Odds beinhalten potenzielle zukünftige Einsätze, die Sie gewinnen können, wenn Sie Ihr Drawing vervollständigen.",
                  nl: "Implied odds omvatten potentiële toekomstige inzetten die je kunt winnen als je je drawing hand completeert."
            }
      },
      {
            question: {
                  en: "What is a 'Bath Coup' in Bridge?",
                  es: "¿Qué es un 'Bath Coup' en Bridge?",
                  de: "Was ist ein 'Bath Coup' beim Bridge?",
                  nl: "Wat is een 'Bath Coup' bij Bridge?"
            },
            options: [
                  {
                        en: "Ducking an ace to trap opponent's king",
                        es: "Pasar con as para atrapar el rey del oponente",
                        de: "Ass ducken, um König des Gegners zu fangen",
                        nl: "Aas laten lopen om koning van tegenstander te vangen"
                  },
                  {
                        en: "Leading trump immediately",
                        es: "Salir con triunfo inmediatamente",
                        de: "Sofort Trumpf ausspielen",
                        nl: "Direct troef uitspelen"
                  },
                  {
                        en: "Bidding slam",
                        es: "Pujar slam",
                        de: "Schlemm bieten",
                        nl: "Slem bieden"
                  },
                  {
                        en: "Defensive discard",
                        es: "Descarte defensivo",
                        de: "Defensiver Abwurf",
                        nl: "Defensieve afleg"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "A Bath Coup is holding up an ace to trap the opponent's king when they lead that suit.",
                  es: "Un Bath Coup es retener un as para atrapar el rey del oponente cuando sale con ese palo.",
                  de: "Ein Bath Coup bedeutet, ein Ass zurückzuhalten, um den König des Gegners zu fangen, wenn dieser die Farbe ausspielt.",
                  nl: "Een Bath Coup is een aas inhouden om de koning van de tegenstander te vangen wanneer deze die kleur uitspeelt."
            }
      },
      {
            question: {
                  en: "In Cribbage, what is 'his nobs'?",
                  es: "En Cribbage, ¿qué es 'his nobs'?",
                  de: "Was ist 'his nobs' beim Cribbage?",
                  nl: "Wat is 'his nobs' bij Cribbage?"
            },
            options: [
                  {
                        en: "Jack of same suit as starter card",
                        es: "Jota del mismo palo que la carta inicial",
                        de: "Bube der gleichen Farbe wie die Startkarte",
                        nl: "Boer van dezelfde kleur als de starterkaart"
                  },
                  {
                        en: "Pair of jacks",
                        es: "Par de jotas",
                        de: "Paar Buben",
                        nl: "Paar boeren"
                  },
                  {
                        en: "Highest scoring hand",
                        es: "Mano con mayor puntuación",
                        de: "Höchstpunktzahl",
                        nl: "Hoogst scorende hand"
                  },
                  {
                        en: "First card played",
                        es: "Primera carta jugada",
                        de: "Erste gespielte Karte",
                        nl: "Eerste gespeelde kaart"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "His nobs is having a jack of the same suit as the starter card, worth one point.",
                  es: "His nobs es tener una jota del mismo palo que la carta inicial, vale un punto.",
                  de: "His nobs bedeutet, einen Buben der gleichen Farbe wie die Startkarte zu haben, was einen Punkt wert ist.",
                  nl: "His nobs is een boer hebben van dezelfde kleur als de starterkaart, waard één punt."
            }
      },
      {
            question: {
                  en: "What is 'GTO' strategy in Poker?",
                  es: "¿Qué es la estrategia 'GTO' en Póker?",
                  de: "Was ist 'GTO'-Strategie beim Poker?",
                  nl: "Wat is 'GTO'-strategie bij Poker?"
            },
            options: [
                  {
                        en: "Game Theory Optimal",
                        es: "Teoría de Juegos Óptima",
                        de: "Spieltheoretisch Optimal",
                        nl: "Speltheorie Optimaal"
                  },
                  {
                        en: "Go To Option",
                        es: "Opción Principal",
                        de: "Hauptoption",
                        nl: "Standaardoptie"
                  },
                  {
                        en: "Great Tournament Opening",
                        es: "Gran Apertura de Torneo",
                        de: "Großer Turnierbeginn",
                        nl: "Grote Toernooi Opening"
                  },
                  {
                        en: "Guaranteed Tight Outcome",
                        es: "Resultado Garantizado Ajustado",
                        de: "Garantiertes enges Ergebnis",
                        nl: "Gegarandeerd Krap Resultaat"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "GTO (Game Theory Optimal) is a balanced strategy that cannot be exploited by opponents.",
                  es: "GTO (Teoría de Juegos Óptima) es una estrategia equilibrada que no puede ser explotada por los oponentes.",
                  de: "GTO (Spieltheoretisch Optimal) ist eine ausgewogene Strategie, die von Gegnern nicht ausgenutzt werden kann.",
                  nl: "GTO (Speltheorie Optimaal) is een gebalanceerde strategie die niet kan worden uitgebuit door tegenstanders."
            }
      },
      {
            question: {
                  en: "In Canasta, what is a 'natural canasta'?",
                  es: "En Canasta, ¿qué es una 'canasta natural'?",
                  de: "Was ist eine 'natürliche Canasta' bei Canasta?",
                  nl: "Wat is een 'natuurlijke canasta' bij Canasta?"
            },
            options: [
                  {
                        en: "Seven cards of same rank without wildcards",
                        es: "Siete cartas del mismo rango sin comodines",
                        de: "Sieben Karten gleichen Ranges ohne Joker",
                        nl: "Zeven kaarten van dezelfde rang zonder jokers"
                  },
                  {
                        en: "Any seven cards",
                        es: "Cualquier siete cartas",
                        de: "Beliebige sieben Karten",
                        nl: "Willekeurige zeven kaarten"
                  },
                  {
                        en: "Meld with wildcards",
                        es: "Combinación con comodines",
                        de: "Meldung mit Jokern",
                        nl: "Combinatie met jokers"
                  },
                  {
                        en: "First meld of game",
                        es: "Primera combinación del juego",
                        de: "Erste Meldung des Spiels",
                        nl: "Eerste combinatie van het spel"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "A natural canasta consists of seven cards of the same rank without any wildcards, scoring more points.",
                  es: "Una canasta natural consiste en siete cartas del mismo rango sin comodines, puntuando más.",
                  de: "Eine natürliche Canasta besteht aus sieben Karten gleichen Ranges ohne Joker und bringt mehr Punkte.",
                  nl: "Een natuurlijke canasta bestaat uit zeven kaarten van dezelfde rang zonder jokers, wat meer punten oplevert."
            }
      },
      {
            question: {
                  en: "What is 'position' in Poker?",
                  es: "¿Qué es la 'posición' en Póker?",
                  de: "Was ist 'Position' beim Poker?",
                  nl: "Wat is 'positie' bij Poker?"
            },
            options: [
                  {
                        en: "Your seat relative to the dealer button",
                        es: "Tu asiento relativo al botón del crupier",
                        de: "Ihr Sitz relativ zum Dealer-Button",
                        nl: "Je zitplaats ten opzichte van de dealerknop"
                  },
                  {
                        en: "Your chip stack size",
                        es: "El tamaño de tu pila de fichas",
                        de: "Ihre Chip-Stack-Größe",
                        nl: "Je chipstapelgrootte"
                  },
                  {
                        en: "Your hand strength",
                        es: "La fuerza de tu mano",
                        de: "Ihre Handstärke",
                        nl: "Je handsterkte"
                  },
                  {
                        en: "Number of players left",
                        es: "Número de jugadores restantes",
                        de: "Anzahl verbleibender Spieler",
                        nl: "Aantal overgebleven spelers"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Position refers to where you sit relative to the dealer button, affecting when you act in each betting round.",
                  es: "La posición se refiere a dónde te sientas en relación al botón del crupier, afectando cuándo actúas en cada ronda de apuestas.",
                  de: "Position bezieht sich darauf, wo Sie relativ zum Dealer-Button sitzen, was beeinflusst, wann Sie in jeder Setzrunde agieren.",
                  nl: "Positie verwijst naar waar je zit ten opzichte van de dealerknop, wat beïnvloedt wanneer je handelt in elke inzetronde."
            }
      },
      {
            question: {
                  en: "In Bridge, what is a 'Stayman' convention?",
                  es: "En Bridge, ¿qué es la convención 'Stayman'?",
                  de: "Was ist eine 'Stayman'-Konvention beim Bridge?",
                  nl: "Wat is een 'Stayman'-conventie bij Bridge?"
            },
            options: [
                  {
                        en: "2C bid asking for 4-card major",
                        es: "Puja de 2T preguntando por mayor de 4 cartas",
                        de: "2K-Gebot, das nach 4er-Oberfarbe fragt",
                        nl: "2K bod vragend om 4-kaart hoge kleur"
                  },
                  {
                        en: "Opening bid strength",
                        es: "Fuerza de puja de apertura",
                        de: "Eröffnungsgebotsstärke",
                        nl: "Openingsbodsterkte"
                  },
                  {
                        en: "Trump selection method",
                        es: "Método de selección de triunfo",
                        de: "Trumpfauswahlmethode",
                        nl: "Troef selectiemethode"
                  },
                  {
                        en: "Defensive signal",
                        es: "Señal defensiva",
                        de: "Defensivsignal",
                        nl: "Defensief signaal"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Stayman is a 2C response to 1NT asking partner if they have a 4-card major suit.",
                  es: "Stayman es una respuesta de 2T a 1NT preguntando al compañero si tiene un palo mayor de 4 cartas.",
                  de: "Stayman ist eine 2K-Antwort auf 1NT, die den Partner fragt, ob er eine 4er-Oberfarbe hat.",
                  nl: "Stayman is een 2K reactie op 1NT die de partner vraagt of ze een 4-kaart hoge kleur hebben."
            }
      },
      {
            question: {
                  en: "What is 'mucking' in Poker?",
                  es: "¿Qué es 'mucking' en Póker?",
                  de: "Was ist 'Mucking' beim Poker?",
                  nl: "Wat is 'mucking' bij Poker?"
            },
            options: [
                  {
                        en: "Folding without showing cards",
                        es: "Retirarse sin mostrar cartas",
                        de: "Folden ohne Karten zu zeigen",
                        nl: "Passen zonder kaarten te tonen"
                  },
                  {
                        en: "Raising the bet",
                        es: "Subir la apuesta",
                        de: "Erhöhen des Einsatzes",
                        nl: "Verhogen van de inzet"
                  },
                  {
                        en: "Shuffling the deck",
                        es: "Barajar el mazo",
                        de: "Mischen des Decks",
                        nl: "Schudden van het deck"
                  },
                  {
                        en: "Bluffing frequently",
                        es: "Farolear frecuentemente",
                        de: "Häufig bluffen",
                        nl: "Vaak bluffen"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Mucking means folding your hand and discarding it face-down without showing your cards to opponents.",
                  es: "Mucking significa retirarse y descartar tu mano boca abajo sin mostrar tus cartas a los oponentes.",
                  de: "Mucking bedeutet, Ihre Hand zu folden und sie verdeckt abzulegen, ohne Ihre Karten den Gegnern zu zeigen.",
                  nl: "Mucking betekent je hand passen en deze gedekt weggooien zonder je kaarten aan tegenstanders te tonen."
            }
      },
      {
            question: {
                  en: "In Pinochle, what is a 'double pinochle'?",
                  es: "En Pinochle, ¿qué es un 'pinochle doble'?",
                  de: "Was ist ein 'Doppel-Pinochle' beim Pinochle?",
                  nl: "Wat is een 'dubbele pinochle' bij Pinochle?"
            },
            options: [
                  {
                        en: "Two Queen-Jack pairs of same suits",
                        es: "Dos pares Reina-Jota de los mismos palos",
                        de: "Zwei Dame-Bube-Paare derselben Farben",
                        nl: "Twee Vrouw-Boer paren van dezelfde kleuren"
                  },
                  {
                        en: "Four of a kind",
                        es: "Cuatro del mismo tipo",
                        de: "Vierling",
                        nl: "Vier gelijke"
                  },
                  {
                        en: "Two aces and two tens",
                        es: "Dos ases y dos dieces",
                        de: "Zwei Asse und zwei Zehnen",
                        nl: "Twee azen en twee tienen"
                  },
                  {
                        en: "Winning two consecutive tricks",
                        es: "Ganar dos bazas consecutivas",
                        de: "Zwei aufeinanderfolgende Stiche gewinnen",
                        nl: "Twee opeenvolgende slagen winnen"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "A double pinochle consists of two Queen of Spades and two Jack of Diamonds pairs, scoring high points.",
                  es: "Un pinochle doble consiste en dos pares de Reina de Picas y Jota de Diamantes, puntuando alto.",
                  de: "Ein Doppel-Pinochle besteht aus zwei Pik-Dame- und zwei Karo-Bube-Paaren und bringt hohe Punkte.",
                  nl: "Een dubbele pinochle bestaat uit twee Schoppen Vrouw en twee Ruiten Boer paren, wat hoog scoort."
            }
      },
      {
            question: {
                  en: "What is 'range' in Poker?",
                  es: "¿Qué es el 'rango' en Póker?",
                  de: "Was ist 'Range' beim Poker?",
                  nl: "Wat is 'range' bij Poker?"
            },
            options: [
                  {
                        en: "Set of possible hands opponent could have",
                        es: "Conjunto de manos posibles que el oponente podría tener",
                        de: "Menge möglicher Hände, die der Gegner haben könnte",
                        nl: "Set mogelijke handen die tegenstander zou kunnen hebben"
                  },
                  {
                        en: "Distance from the button",
                        es: "Distancia del botón",
                        de: "Entfernung vom Button",
                        nl: "Afstand tot de knop"
                  },
                  {
                        en: "Betting limits",
                        es: "Límites de apuesta",
                        de: "Einsatzlimits",
                        nl: "Inzetlimieten"
                  },
                  {
                        en: "Stack size variation",
                        es: "Variación del tamaño de pila",
                        de: "Stack-Größenvariation",
                        nl: "Stapelgrootte variatie"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "A player's range is the spectrum of hands they could hold based on their actions and position.",
                  es: "El rango de un jugador es el espectro de manos que podría tener basado en sus acciones y posición.",
                  de: "Die Range eines Spielers ist das Spektrum der Hände, die er basierend auf seinen Aktionen und seiner Position haben könnte.",
                  nl: "De range van een speler is het spectrum van handen die ze zouden kunnen hebben gebaseerd op hun acties en positie."
            }
      },
      {
            question: {
                  en: "In Bridge, what is a 'dummy reversal'?",
                  es: "En Bridge, ¿qué es una 'reversión de muerto'?",
                  de: "Was ist eine 'Dummy-Umkehrung' beim Bridge?",
                  nl: "Wat is een 'dummy omkering' bij Bridge?"
            },
            options: [
                  {
                        en: "Using dummy's trumps to ruff while drawing trump from hand",
                        es: "Usar triunfos del muerto para cortar mientras se sacan triunfos de la mano",
                        de: "Dummy-Trümpfe zum Stechen nutzen, während Hand-Trümpfe gezogen werden",
                        nl: "Dummy's troeven gebruiken om te snijden terwijl troef uit hand wordt getrokken"
                  },
                  {
                        en: "Switching declarer and dummy",
                        es: "Cambiar declarante y muerto",
                        de: "Wechsel von Alleinspieler und Dummy",
                        nl: "Speler en dummy wisselen"
                  },
                  {
                        en: "Playing from wrong hand",
                        es: "Jugar desde mano incorrecta",
                        de: "Von falscher Hand spielen",
                        nl: "Vanuit verkeerde hand spelen"
                  },
                  {
                        en: "Changing trump suit",
                        es: "Cambiar palo de triunfo",
                        de: "Trumpffarbe wechseln",
                        nl: "Troefkleur veranderen"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Dummy reversal is using dummy's trumps to ruff while preserving hand's trumps to draw opponents' trumps.",
                  es: "La reversión de muerto es usar los triunfos del muerto para cortar mientras se preservan los triunfos de la mano para sacar los de los oponentes.",
                  de: "Dummy-Umkehrung bedeutet, Dummy-Trümpfe zum Stechen zu verwenden, während Hand-Trümpfe bewahrt werden, um Gegner-Trümpfe zu ziehen.",
                  nl: "Dummy omkering is dummy's troeven gebruiken om te snijden terwijl hand's troeven worden bewaard om tegenstanders' troeven te trekken."
            }
      },
      {
            question: {
                  en: "What is 'hand reading' in Poker?",
                  es: "¿Qué es 'leer manos' en Póker?",
                  de: "Was ist 'Hand Reading' beim Poker?",
                  nl: "Wat is 'hand reading' bij Poker?"
            },
            options: [
                  {
                        en: "Deducing opponent's likely holdings",
                        es: "Deducir las cartas probables del oponente",
                        de: "Wahrscheinliche Handbestände des Gegners ableiten",
                        nl: "Waarschijnlijke kaarten van tegenstander afleiden"
                  },
                  {
                        en: "Looking at your own cards",
                        es: "Mirar tus propias cartas",
                        de: "Eigene Karten ansehen",
                        nl: "Je eigen kaarten bekijken"
                  },
                  {
                        en: "Counting community cards",
                        es: "Contar cartas comunitarias",
                        de: "Gemeinschaftskarten zählen",
                        nl: "Gemeenschappelijke kaarten tellen"
                  },
                  {
                        en: "Memorizing dealt cards",
                        es: "Memorizar cartas repartidas",
                        de: "Ausgeteilte Karten auswendig lernen",
                        nl: "Gedeelde kaarten onthouden"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Hand reading is the skill of narrowing down what hands your opponent likely holds based on their betting patterns and actions.",
                  es: "Leer manos es la habilidad de reducir qué manos probablemente tiene tu oponente basándose en sus patrones de apuesta y acciones.",
                  de: "Hand Reading ist die Fähigkeit, einzugrenzen, welche Hände Ihr Gegner wahrscheinlich hält, basierend auf deren Wettmustern und Aktionen.",
                  nl: "Hand reading is de vaardigheid om te bepalen welke handen je tegenstander waarschijnlijk heeft op basis van hun inzetpatronen en acties."
            }
      },
      {
            question: {
                  en: "In Rummy, what is 'knocking'?",
                  es: "En Rummy, ¿qué es 'tocar'?",
                  de: "Was ist 'Klopfen' beim Rummy?",
                  nl: "Wat is 'kloppen' bij Rummy?"
            },
            options: [
                  {
                        en: "Ending round with unmatched cards below threshold",
                        es: "Terminar ronda con cartas sin emparejar bajo umbral",
                        de: "Runde beenden mit ungepaarten Karten unter Schwellenwert",
                        nl: "Ronde beëindigen met ongepaarde kaarten onder drempel"
                  },
                  {
                        en: "Discarding all cards at once",
                        es: "Descartar todas las cartas a la vez",
                        de: "Alle Karten auf einmal ablegen",
                        nl: "Alle kaarten tegelijk weggooien"
                  },
                  {
                        en: "Drawing from discard pile",
                        es: "Robar del montón de descarte",
                        de: "Vom Ablagestapel ziehen",
                        nl: "Trekken van aflegstapel"
                  },
                  {
                        en: "Calling opponent's bluff",
                        es: "Llamar el farol del oponente",
                        de: "Bluff des Gegners callen",
                        nl: "Bluf van tegenstander callen"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Knocking is ending the round when your unmatched cards total below a certain point value, usually 10 or less.",
                  es: "Tocar es terminar la ronda cuando tus cartas sin emparejar suman menos de cierto valor de puntos, usualmente 10 o menos.",
                  de: "Klopfen bedeutet, die Runde zu beenden, wenn Ihre ungepaarten Karten unter einem bestimmten Punktwert liegen, normalerweise 10 oder weniger.",
                  nl: "Kloppen is de ronde beëindigen wanneer je ongepaarde kaarten in totaal onder een bepaalde puntwaarde liggen, meestal 10 of minder."
            }
      },
      {
            question: {
                  en: "What is a 'continuation bet' in Poker?",
                  es: "¿Qué es una 'apuesta de continuación' en Póker?",
                  de: "Was ist eine 'Continuation Bet' beim Poker?",
                  nl: "Wat is een 'continuation bet' bij Poker?"
            },
            options: [
                  {
                        en: "Betting after being pre-flop aggressor",
                        es: "Apostar después de ser agresor pre-flop",
                        de: "Setzen nach Pre-Flop-Aggression",
                        nl: "Inzetten na pre-flop agressie"
                  },
                  {
                        en: "Calling consecutive bets",
                        es: "Igualar apuestas consecutivas",
                        de: "Aufeinanderfolgende Einsätze callen",
                        nl: "Opeenvolgende inzetten callen"
                  },
                  {
                        en: "Raising on the river",
                        es: "Subir en el river",
                        de: "Erhöhen am River",
                        nl: "Verhogen op de river"
                  },
                  {
                        en: "Betting minimum",
                        es: "Apostar mínimo",
                        de: "Mindestbetrag setzen",
                        nl: "Minimum inzetten"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "A continuation bet is when the pre-flop raiser bets again on the flop to maintain aggression.",
                  es: "Una apuesta de continuación es cuando el que subió pre-flop apuesta de nuevo en el flop para mantener la agresión.",
                  de: "Eine Continuation Bet ist, wenn der Pre-Flop-Raiser am Flop erneut setzt, um Aggression aufrechtzuerhalten.",
                  nl: "Een continuation bet is wanneer de pre-flop raiser opnieuw inzet op de flop om agressie te behouden."
            }
      },
      {
            question: {
                  en: "In Bridge, what is 'Jacoby Transfer'?",
                  es: "En Bridge, ¿qué es 'Jacoby Transfer'?",
                  de: "Was ist 'Jacoby Transfer' beim Bridge?",
                  nl: "Wat is 'Jacoby Transfer' bij Bridge?"
            },
            options: [
                  {
                        en: "Bidding suit below desired trump to transfer",
                        es: "Pujar palo inferior al triunfo deseado para transferir",
                        de: "Farbe unter gewünschtem Trumpf bieten zum Transferieren",
                        nl: "Kleur onder gewenste troef bieden om te transfereren"
                  },
                  {
                        en: "Switching partners mid-game",
                        es: "Cambiar compañeros a mitad de juego",
                        de: "Partner während des Spiels wechseln",
                        nl: "Partners wisselen tijdens het spel"
                  },
                  {
                        en: "Passing the bid",
                        es: "Pasar la puja",
                        de: "Gebot passen",
                        nl: "Bod passen"
                  },
                  {
                        en: "Doubling opponent",
                        es: "Doblar al oponente",
                        de: "Gegner verdoppeln",
                        nl: "Tegenstander verdubbelen"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Jacoby Transfer is bidding the suit below your desired trump suit, forcing partner to bid your actual suit.",
                  es: "Jacoby Transfer es pujar el palo inferior a tu triunfo deseado, forzando al compañero a pujar tu palo real.",
                  de: "Jacoby Transfer bedeutet, die Farbe unter Ihrer gewünschten Trumpffarbe zu bieten, wodurch der Partner gezwungen wird, Ihre tatsächliche Farbe zu bieten.",
                  nl: "Jacoby Transfer is de kleur onder je gewenste troefkleur bieden, waardoor partner gedwongen is je werkelijke kleur te bieden."
            }
      },
      {
            question: {
                  en: "What is 'variance' in Poker?",
                  es: "¿Qué es la 'varianza' en Póker?",
                  de: "Was ist 'Varianz' beim Poker?",
                  nl: "Wat is 'variance' bij Poker?"
            },
            options: [
                  {
                        en: "Statistical deviation from expected results",
                        es: "Desviación estadística de resultados esperados",
                        de: "Statistische Abweichung von erwarteten Ergebnissen",
                        nl: "Statistische afwijking van verwachte resultaten"
                  },
                  {
                        en: "Different poker variants",
                        es: "Diferentes variantes de póker",
                        de: "Verschiedene Poker-Varianten",
                        nl: "Verschillende pokervarianten"
                  },
                  {
                        en: "Range of betting amounts",
                        es: "Rango de cantidades de apuesta",
                        de: "Bereich der Einsatzbeträge",
                        nl: "Bereik van inzetbedragen"
                  },
                  {
                        en: "Player skill differences",
                        es: "Diferencias de habilidad de jugadores",
                        de: "Unterschiede in Spielerfähigkeiten",
                        nl: "Verschillen in spelersvaardigheden"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Variance refers to the natural fluctuations in poker results due to luck, causing short-term deviations from expected outcomes.",
                  es: "La varianza se refiere a las fluctuaciones naturales en resultados de póker debido a la suerte, causando desviaciones a corto plazo de resultados esperados.",
                  de: "Varianz bezieht sich auf natürliche Schwankungen in Poker-Ergebnissen aufgrund von Glück, die kurzfristige Abweichungen von erwarteten Ergebnissen verursachen.",
                  nl: "Variance verwijst naar natuurlijke fluctuaties in pokerresultaten door geluk, wat korte-termijn afwijkingen van verwachte uitkomsten veroorzaakt."
            }
      },
      {
            question: {
                  en: "In Whist, what is 'trump coup'?",
                  es: "En Whist, ¿qué es 'trump coup'?",
                  de: "Was ist ein 'Trump Coup' beim Whist?",
                  nl: "Wat is een 'troef coup' bij Whist?"
            },
            options: [
                  {
                        en: "Shortening trumps to capture opponent's master trump",
                        es: "Acortar triunfos para capturar triunfo maestro del oponente",
                        de: "Trümpfe verkürzen, um Gegners Meistertrumpf zu fangen",
                        nl: "Troeven verkorten om tegenstanders meestertroef te vangen"
                  },
                  {
                        en: "Leading with highest trump",
                        es: "Salir con triunfo más alto",
                        de: "Mit höchstem Trumpf ausspielen",
                        nl: "Uitspelen met hoogste troef"
                  },
                  {
                        en: "Avoiding trump suit",
                        es: "Evitar palo de triunfo",
                        de: "Trumpffarbe vermeiden",
                        nl: "Troefkleur vermijden"
                  },
                  {
                        en: "Changing trump mid-hand",
                        es: "Cambiar triunfo a mitad de mano",
                        de: "Trumpf während der Hand wechseln",
                        nl: "Troef veranderen tijdens hand"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Trump coup involves deliberately shortening your trumps to position yourself to capture opponent's master trump by force.",
                  es: "Trump coup implica acortar deliberadamente tus triunfos para posicionarte para capturar el triunfo maestro del oponente por la fuerza.",
                  de: "Trump Coup beinhaltet das absichtliche Verkürzen Ihrer Trümpfe, um sich zu positionieren, den Meistertrumpf des Gegners mit Gewalt zu fangen.",
                  nl: "Troef coup houdt in dat je opzettelijk je troeven verkort om jezelf te positioneren om de meestertroef van de tegenstander met geweld te vangen."
            }
      },
      {
            question: {
                  en: "What is 'effective stack' in Poker?",
                  es: "¿Qué es 'pila efectiva' en Póker?",
                  de: "Was ist 'effektiver Stack' beim Poker?",
                  nl: "Wat is 'effectieve stack' bij Poker?"
            },
            options: [
                  {
                        en: "Smaller stack between two players in a hand",
                        es: "Pila más pequeña entre dos jugadores en una mano",
                        de: "Kleinerer Stack zwischen zwei Spielern in einer Hand",
                        nl: "Kleinere stack tussen twee spelers in een hand"
                  },
                  {
                        en: "Total chips at the table",
                        es: "Total de fichas en la mesa",
                        de: "Gesamtzahl der Chips am Tisch",
                        nl: "Totaal aantal chips aan tafel"
                  },
                  {
                        en: "Average stack size",
                        es: "Tamaño promedio de pila",
                        de: "Durchschnittliche Stack-Größe",
                        nl: "Gemiddelde stackgrootte"
                  },
                  {
                        en: "Big blind multiplier",
                        es: "Multiplicador de ciega grande",
                        de: "Big-Blind-Multiplikator",
                        nl: "Big blind vermenigvuldiger"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Effective stack is the smaller of the two stacks involved in a hand, determining the maximum amount that can be won or lost.",
                  es: "La pila efectiva es la más pequeña de las dos pilas involucradas en una mano, determinando la cantidad máxima que se puede ganar o perder.",
                  de: "Effektiver Stack ist der kleinere der beiden an einer Hand beteiligten Stacks und bestimmt den maximalen Betrag, der gewonnen oder verloren werden kann.",
                  nl: "Effectieve stack is de kleinste van de twee stacks betrokken bij een hand, die het maximale bedrag bepaalt dat gewonnen of verloren kan worden."
            }
      },
      {
            question: {
                  en: "In Gin Rummy, what is 'going gin'?",
                  es: "En Gin Rummy, ¿qué es 'hacer gin'?",
                  de: "Was ist 'Gin gehen' beim Gin Rummy?",
                  nl: "Wat is 'gin gaan' bij Gin Rummy?"
            },
            options: [
                  {
                        en: "Melding all cards with no deadwood",
                        es: "Combinar todas las cartas sin cartas muertas",
                        de: "Alle Karten melden ohne Deadwood",
                        nl: "Alle kaarten combineren zonder deadwood"
                  },
                  {
                        en: "Knocking with 10 points",
                        es: "Tocar con 10 puntos",
                        de: "Mit 10 Punkten klopfen",
                        nl: "Kloppen met 10 punten"
                  },
                  {
                        en: "Drawing from stock pile",
                        es: "Robar del montón de robo",
                        de: "Vom Nachziehstapel ziehen",
                        nl: "Trekken van trekstapel"
                  },
                  {
                        en: "Winning three hands",
                        es: "Ganar tres manos",
                        de: "Drei Hände gewinnen",
                        nl: "Drie handen winnen"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Going gin means having all cards in valid melds with zero deadwood, earning bonus points.",
                  es: "Hacer gin significa tener todas las cartas en combinaciones válidas sin cartas muertas, ganando puntos bonus.",
                  de: "Gin gehen bedeutet, alle Karten in gültigen Meldungen ohne Deadwood zu haben, was Bonuspunkte bringt.",
                  nl: "Gin gaan betekent alle kaarten in geldige combinaties hebben zonder deadwood, wat bonuspunten oplevert."
            }
      },
      {
            question: {
                  en: "What is 'blockers' in Poker?",
                  es: "¿Qué son los 'bloqueadores' en Póker?",
                  de: "Was sind 'Blocker' beim Poker?",
                  nl: "Wat zijn 'blockers' bij Poker?"
            },
            options: [
                  {
                        en: "Cards you hold reducing opponent's hand combinations",
                        es: "Cartas que tienes reduciendo combinaciones de mano del oponente",
                        de: "Karten, die Sie halten und Gegner-Handkombinationen reduzieren",
                        nl: "Kaarten die je hebt die tegenstanders handcombinaties verminderen"
                  },
                  {
                        en: "Cards blocking view of others",
                        es: "Cartas bloqueando vista de otros",
                        de: "Karten, die Sicht anderer blockieren",
                        nl: "Kaarten die zicht van anderen blokkeren"
                  },
                  {
                        en: "Defensive betting patterns",
                        es: "Patrones de apuesta defensivos",
                        de: "Defensive Wettmuster",
                        nl: "Defensieve inzetpatronen"
                  },
                  {
                        en: "Community cards face down",
                        es: "Cartas comunitarias boca abajo",
                        de: "Gemeinschaftskarten verdeckt",
                        nl: "Gemeenschappelijke kaarten gedekt"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Blockers are cards in your hand that reduce the number of strong hand combinations your opponent can have.",
                  es: "Los bloqueadores son cartas en tu mano que reducen el número de combinaciones de mano fuertes que tu oponente puede tener.",
                  de: "Blocker sind Karten in Ihrer Hand, die die Anzahl starker Handkombinationen reduzieren, die Ihr Gegner haben kann.",
                  nl: "Blockers zijn kaarten in je hand die het aantal sterke handcombinaties verminderen die je tegenstander kan hebben."
            }
      },
      {
            question: {
                  en: "In Bridge, what is a 'Moysian fit'?",
                  es: "En Bridge, ¿qué es un 'ajuste Moysian'?",
                  de: "Was ist ein 'Moysian Fit' beim Bridge?",
                  nl: "Wat is een 'Moysian fit' bij Bridge?"
            },
            options: [
                  {
                        en: "4-3 trump fit partnership",
                        es: "Asociación de triunfo 4-3",
                        de: "4-3 Trumpf-Fit-Partnerschaft",
                        nl: "4-3 troef fit partnerschap"
                  },
                  {
                        en: "5-4 major suit fit",
                        es: "Ajuste de palo mayor 5-4",
                        de: "5-4 Oberfarben-Fit",
                        nl: "5-4 hoge kleur fit"
                  },
                  {
                        en: "8-card trump suit",
                        es: "Palo de triunfo de 8 cartas",
                        de: "8-Karten-Trumpffarbe",
                        nl: "8-kaart troefkleur"
                  },
                  {
                        en: "No-trump contract",
                        es: "Contrato sin triunfo",
                        de: "Ohne-Trumpf-Kontrakt",
                        nl: "Zonder-troef contract"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "A Moysian fit is a 4-3 trump fit between partners, considered playable but less ideal than 8+ card fits.",
                  es: "Un ajuste Moysian es un ajuste de triunfo 4-3 entre compañeros, considerado jugable pero menos ideal que ajustes de 8+ cartas.",
                  de: "Ein Moysian Fit ist ein 4-3 Trumpf-Fit zwischen Partnern, als spielbar betrachtet, aber weniger ideal als 8+ Karten-Fits.",
                  nl: "Een Moysian fit is een 4-3 troef fit tussen partners, beschouwd als speelbaar maar minder ideaal dan 8+ kaart fits."
            }
      },
      {
            question: {
                  en: "What is 'polarization' in Poker?",
                  es: "¿Qué es la 'polarización' en Póker?",
                  de: "Was ist 'Polarisierung' beim Poker?",
                  nl: "Wat is 'polarisatie' bij Poker?"
            },
            options: [
                  {
                        en: "Range consisting of very strong or weak hands",
                        es: "Rango consistente en manos muy fuertes o débiles",
                        de: "Range aus sehr starken oder schwachen Händen",
                        nl: "Range bestaande uit zeer sterke of zwakke handen"
                  },
                  {
                        en: "Playing opposite positions",
                        es: "Jugar posiciones opuestas",
                        de: "Gegensätzliche Positionen spielen",
                        nl: "Tegenovergestelde posities spelen"
                  },
                  {
                        en: "Table dynamics splitting",
                        es: "División de dinámicas de mesa",
                        de: "Tischdynamik-Aufteilung",
                        nl: "Tafeldynamiek splitsing"
                  },
                  {
                        en: "Alternating bet sizes",
                        es: "Alternar tamaños de apuesta",
                        de: "Einsatzgrößen abwechseln",
                        nl: "Inzetgroottes afwisselen"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "A polarized range contains very strong value hands and bluffs, but excludes medium-strength hands.",
                  es: "Un rango polarizado contiene manos de valor muy fuertes y faroles, pero excluye manos de fuerza media.",
                  de: "Eine polarisierte Range enthält sehr starke Value-Hände und Bluffs, schließt aber mittelstarke Hände aus.",
                  nl: "Een gepolariseerde range bevat zeer sterke value handen en bluffs, maar sluit middel-sterke handen uit."
            }
      },
      {
            question: {
                  en: "In Skat, what is 'schneider'?",
                  es: "En Skat, ¿qué es 'schneider'?",
                  de: "Was ist 'Schneider' beim Skat?",
                  nl: "Wat is 'schneider' bij Skat?"
            },
            options: [
                  {
                        en: "Winning with opponent scoring under 30 points",
                        es: "Ganar con oponente puntuando menos de 30 puntos",
                        de: "Gewinnen, wenn Gegner unter 30 Punkte erzielt",
                        nl: "Winnen met tegenstander die onder 30 punten scoort"
                  },
                  {
                        en: "Declaring no-trump",
                        es: "Declarar sin triunfo",
                        de: "Ohne Trumpf deklarieren",
                        nl: "Zonder troef declareren"
                  },
                  {
                        en: "First trick winner",
                        es: "Ganador de primera baza",
                        de: "Erster Stichgewinner",
                        nl: "Eerste slagwinnaar"
                  },
                  {
                        en: "Card exchange phase",
                        es: "Fase de intercambio de cartas",
                        de: "Kartentauschphase",
                        nl: "Kaartuitwisselingsfase"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Schneider is winning with the opponents scoring less than 30 points, earning bonus multipliers.",
                  es: "Schneider es ganar con los oponentes puntuando menos de 30 puntos, ganando multiplicadores bonus.",
                  de: "Schneider bedeutet zu gewinnen, wenn die Gegner weniger als 30 Punkte erzielen, was Bonus-Multiplikatoren bringt.",
                  nl: "Schneider is winnen met de tegenstanders die minder dan 30 punten scoren, wat bonusvermenigvuldigers oplevert."
            }
      },
      {
            question: {
                  en: "What is 'equity' in Poker?",
                  es: "¿Qué es la 'equidad' en Póker?",
                  de: "Was ist 'Equity' beim Poker?",
                  nl: "Wat is 'equity' bij Poker?"
            },
            options: [
                  {
                        en: "Your share of pot based on winning probability",
                        es: "Tu parte del bote basada en probabilidad de ganar",
                        de: "Ihr Anteil am Pott basierend auf Gewinnwahrscheinlichkeit",
                        nl: "Je aandeel van de pot gebaseerd op winkans"
                  },
                  {
                        en: "Total money invested",
                        es: "Dinero total invertido",
                        de: "Gesamtinvestiertes Geld",
                        nl: "Totaal geïnvesteerd geld"
                  },
                  {
                        en: "Fair treatment at table",
                        es: "Trato justo en la mesa",
                        de: "Faire Behandlung am Tisch",
                        nl: "Eerlijke behandeling aan tafel"
                  },
                  {
                        en: "Starting chip amount",
                        es: "Cantidad de fichas inicial",
                        de: "Startchip-Betrag",
                        nl: "Start chip bedrag"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Equity is your theoretical share of the pot based on your probability of winning the hand.",
                  es: "La equidad es tu parte teórica del bote basada en tu probabilidad de ganar la mano.",
                  de: "Equity ist Ihr theoretischer Anteil am Pott basierend auf Ihrer Gewinnwahrscheinlichkeit der Hand.",
                  nl: "Equity is je theoretisch aandeel van de pot gebaseerd op je kans om de hand te winnen."
            }
      },
      {
            question: {
                  en: "In Bridge, what is an 'endplay'?",
                  es: "En Bridge, ¿qué es un 'endplay'?",
                  de: "Was ist ein 'Endplay' beim Bridge?",
                  nl: "Wat is een 'endplay' bij Bridge?"
            },
            options: [
                  {
                        en: "Forcing opponent to lead beneficially to you",
                        es: "Forzar al oponente a salir beneficiosamente para ti",
                        de: "Gegner zwingen, vorteilhaft für Sie auszuspielen",
                        nl: "Tegenstander dwingen voordelig voor jou uit te spelen"
                  },
                  {
                        en: "Playing last card",
                        es: "Jugar última carta",
                        de: "Letzte Karte spielen",
                        nl: "Laatste kaart spelen"
                  },
                  {
                        en: "Final bidding round",
                        es: "Ronda final de puja",
                        de: "Letzte Bietrunde",
                        nl: "Laatste biedronde"
                  },
                  {
                        en: "Winning final trick",
                        es: "Ganar baza final",
                        de: "Letzten Stich gewinnen",
                        nl: "Laatste slag winnen"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "An endplay forces an opponent to lead in a way that benefits you, often giving you a trick you couldn't otherwise win.",
                  es: "Un endplay fuerza a un oponente a salir de una manera que te beneficia, a menudo dándote una baza que no podrías ganar de otra manera.",
                  de: "Ein Endplay zwingt einen Gegner, so auszuspielen, dass es Ihnen nutzt, oft einen Stich gebend, den Sie sonst nicht gewinnen könnten.",
                  nl: "Een endplay dwingt een tegenstander uit te spelen op een manier die jou voordeel geeft, vaak een slag gevend die je anders niet zou winnen."
            }
      },
      {
            question: {
                  en: "What is 'table dynamics' in Poker?",
                  es: "¿Qué son las 'dinámicas de mesa' en Póker?",
                  de: "Was sind 'Tischdynamiken' beim Poker?",
                  nl: "Wat zijn 'tafeldynamiek' bij Poker?"
            },
            options: [
                  {
                        en: "Interaction patterns and playing styles at table",
                        es: "Patrones de interacción y estilos de juego en la mesa",
                        de: "Interaktionsmuster und Spielstile am Tisch",
                        nl: "Interactiepatronen en speelstijlen aan tafel"
                  },
                  {
                        en: "Physical table rotation",
                        es: "Rotación física de la mesa",
                        de: "Physische Tischrotation",
                        nl: "Fysieke tafelrotatie"
                  },
                  {
                        en: "Changing dealer position",
                        es: "Cambiar posición del crupier",
                        de: "Dealer-Position wechseln",
                        nl: "Dealerpositie veranderen"
                  },
                  {
                        en: "Chip stack movements",
                        es: "Movimientos de pila de fichas",
                        de: "Chip-Stack-Bewegungen",
                        nl: "Chipstapel bewegingen"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Table dynamics refer to the collective playing styles, tendencies, and interactions between players at a table.",
                  es: "Las dinámicas de mesa se refieren a los estilos de juego colectivos, tendencias e interacciones entre jugadores en una mesa.",
                  de: "Tischdynamiken beziehen sich auf die kollektiven Spielstile, Tendenzen und Interaktionen zwischen Spielern an einem Tisch.",
                  nl: "Tafeldynamiek verwijst naar de collectieve speelstijlen, neigingen en interacties tussen spelers aan een tafel."
            }
      },
      {
            question: {
                  en: "In Tarot card games, what is the 'excuse'?",
                  es: "En juegos de cartas de Tarot, ¿qué es el 'excuse'?",
                  de: "Was ist die 'Excuse' bei Tarot-Kartenspielen?",
                  nl: "Wat is de 'excuse' bij Tarot kaartspellen?"
            },
            options: [
                  {
                        en: "Special trump card that can be played anytime",
                        es: "Carta de triunfo especial que se puede jugar en cualquier momento",
                        de: "Spezielle Trumpfkarte, die jederzeit gespielt werden kann",
                        nl: "Speciale troefkaart die op elk moment gespeeld kan worden"
                  },
                  {
                        en: "Passing your turn",
                        es: "Pasar tu turno",
                        de: "Ihren Zug passen",
                        nl: "Je beurt passen"
                  },
                  {
                        en: "Lowest scoring card",
                        es: "Carta con menor puntuación",
                        de: "Niedrigste Punktekarte",
                        nl: "Laagst scorende kaart"
                  },
                  {
                        en: "Penalty card",
                        es: "Carta de penalización",
                        de: "Strafkarte",
                        nl: "Strafkaart"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "The Excuse is a special trump card (the Fool) that can be played at any time and usually retrieved without winning the trick.",
                  es: "El Excuse es una carta de triunfo especial (el Loco) que se puede jugar en cualquier momento y usualmente se recupera sin ganar la baza.",
                  de: "Die Excuse ist eine spezielle Trumpfkarte (der Narr), die jederzeit gespielt werden kann und normalerweise zurückgeholt wird, ohne den Stich zu gewinnen.",
                  nl: "De Excuse is een speciale troefkaart (de Dwaas) die op elk moment gespeeld kan worden en meestal wordt teruggehaald zonder de slag te winnen."
            }    },
    {
      question: {en: "What is strategy in games?", es: "What is strategy in games?", de: "What is strategy in games?", nl: "What is strategy in games?"},
      options: [
        {en: "Planning to achieve objectives", es: "Planning to achieve objectives", de: "Planning to achieve objectives", nl: "Planning to achieve objectives"},
        {en: "Random moves", es: "Random moves", de: "Random moves", nl: "Random moves"},
        {en: "Luck only", es: "Luck only", de: "Luck only", nl: "Luck only"},
        {en: "No planning", es: "No planning", de: "No planning", nl: "No planning"}
      ],
      correct: 0,
      explanation: {en: "Strategy involves planning and decision-making to achieve game objectives.", es: "Strategy involves planning and decision-making to achieve game objectives.", de: "Strategy involves planning and decision-making to achieve game objectives.", nl: "Strategy involves planning and decision-making to achieve game objectives."}
    },
    {
      question: {en: "What is strategy in games?", es: "What is strategy in games?", de: "What is strategy in games?", nl: "What is strategy in games?"},
      options: [
        {en: "Planning to achieve objectives", es: "Planning to achieve objectives", de: "Planning to achieve objectives", nl: "Planning to achieve objectives"},
        {en: "Random moves", es: "Random moves", de: "Random moves", nl: "Random moves"},
        {en: "Luck only", es: "Luck only", de: "Luck only", nl: "Luck only"},
        {en: "No planning", es: "No planning", de: "No planning", nl: "No planning"}
      ],
      correct: 0,
      explanation: {en: "Strategy involves planning and decision-making to achieve game objectives.", es: "Strategy involves planning and decision-making to achieve game objectives.", de: "Strategy involves planning and decision-making to achieve game objectives.", nl: "Strategy involves planning and decision-making to achieve game objectives."}
    },
    {
      question: {en: "What is strategy in games?", es: "What is strategy in games?", de: "What is strategy in games?", nl: "What is strategy in games?"},
      options: [
        {en: "Planning to achieve objectives", es: "Planning to achieve objectives", de: "Planning to achieve objectives", nl: "Planning to achieve objectives"},
        {en: "Random moves", es: "Random moves", de: "Random moves", nl: "Random moves"},
        {en: "Luck only", es: "Luck only", de: "Luck only", nl: "Luck only"},
        {en: "No planning", es: "No planning", de: "No planning", nl: "No planning"}
      ],
      correct: 0,
      explanation: {en: "Strategy involves planning and decision-making to achieve game objectives.", es: "Strategy involves planning and decision-making to achieve game objectives.", de: "Strategy involves planning and decision-making to achieve game objectives.", nl: "Strategy involves planning and decision-making to achieve game objectives."}

      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  } else if (typeof window !== 'undefined') {
    window.level8 = level8;
  }
})();
