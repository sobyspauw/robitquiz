// Quiz Template - Level 10: Bord spelletjes - Card Games
(function() {
  const level10 = {
    name: {
      en: "Card Games - Ultimate",
      es: "Juegos de Cartas - Definitivo",
      de: "Kartenspiele - Ultimativ",
      nl: "Kaartspellen - Ultiem"
    },
    questions: [
      {
            question: {
                  en: "What is the 'rule of 2 and 4' in poker?",
                  es: "¿Qué es la 'regla del 2 y 4' en póker?",
                  de: "Was ist die 'Regel von 2 und 4' beim Poker?",
                  nl: "Wat is de 'regel van 2 en 4' bij poker?"
            },
            options: [
                  {
                        en: "Calculate outs to percentage",
                        es: "Calcular outs a porcentaje",
                        de: "Outs in Prozent umrechnen",
                        nl: "Outs naar percentage berekenen"
                  },
                  {
                        en: "Minimum bet sizing",
                        es: "Tamaño mínimo de apuesta",
                        de: "Minimale Einsatzgröße",
                        nl: "Minimum inzetgrootte"
                  },
                  {
                        en: "Number of players rule",
                        es: "Regla de número de jugadores",
                        de: "Spieleranzahl-Regel",
                        nl: "Aantal spelers regel"
                  },
                  {
                        en: "Card ranking system",
                        es: "Sistema de clasificación de cartas",
                        de: "Kartenrangfolge-System",
                        nl: "Kaart rangschikking systeem"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Multiply outs by 2 for 1 card or 4 for 2 cards to estimate winning percentage.",
                  es: "Multiplica outs por 2 para 1 carta o 4 para 2 cartas para estimar el porcentaje de victoria.",
                  de: "Multipliziere Outs mit 2 für 1 Karte oder 4 für 2 Karten um den Gewinnprozentsatz zu schätzen.",
                  nl: "Vermenigvuldig outs met 2 voor 1 kaart of 4 voor 2 kaarten om winpercentage te schatten."
            }
      },
      {
            question: {
                  en: "In competitive Bridge, what is a 'squeeze play'?",
                  es: "En Bridge competitivo, ¿qué es una 'jugada de apretón'?",
                  de: "Was ist ein 'Squeeze Play' im Wettkampf-Bridge?",
                  nl: "Wat is een 'squeeze play' in competitief Bridge?"
            },
            options: [
                  {
                        en: "Forcing opponent to discard a winner",
                        es: "Forzar al oponente a descartar un ganador",
                        de: "Gegner zwingen, einen Gewinner abzuwerfen",
                        nl: "Tegenstander dwingen een winnaar weg te gooien"
                  },
                  {
                        en: "Bidding very aggressively",
                        es: "Apostar muy agresivamente",
                        de: "Sehr aggressiv bieten",
                        nl: "Zeer agressief bieden"
                  },
                  {
                        en: "Playing cards quickly",
                        es: "Jugar cartas rápidamente",
                        de: "Karten schnell spielen",
                        nl: "Kaarten snel spelen"
                  },
                  {
                        en: "Holding cards tightly",
                        es: "Sostener las cartas firmemente",
                        de: "Karten fest halten",
                        nl: "Kaarten stevig vasthouden"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "A squeeze play forces an opponent to discard a winner or guard card, creating an advantage for the declarer.",
                  es: "Una jugada de apretón obliga al oponente a descartar un ganador o carta de guardia, creando una ventaja para el declarante.",
                  de: "Ein Squeeze Play zwingt den Gegner, einen Gewinner oder eine Schutzkarte abzuwerfen, was dem Alleinspieler einen Vorteil verschafft.",
                  nl: "Een squeeze play dwingt een tegenstander om een winnaar of bewakingskaart weg te gooien, wat een voordeel creëert voor de speler."
            }
      },
      {
            question: {
                  en: "What is 'pot equity' in Texas Hold'em?",
                  es: "¿Qué es la 'equidad del bote' en Texas Hold'em?",
                  de: "Was ist 'Pot Equity' beim Texas Hold'em?",
                  nl: "Wat is 'pot equity' bij Texas Hold'em?"
            },
            options: [
                  {
                        en: "Your share of the pot based on win probability",
                        es: "Tu parte del bote basada en la probabilidad de ganar",
                        de: "Dein Anteil am Pot basierend auf Gewinnwahrscheinlichkeit",
                        nl: "Jouw aandeel van de pot gebaseerd op winkans"
                  },
                  {
                        en: "The amount you've contributed",
                        es: "La cantidad que has contribuido",
                        de: "Der Betrag, den du eingezahlt hast",
                        nl: "Het bedrag dat je hebt bijgedragen"
                  },
                  {
                        en: "The total pot size",
                        es: "El tamaño total del bote",
                        de: "Die gesamte Pot-Größe",
                        nl: "De totale pot grootte"
                  },
                  {
                        en: "Your position at the table",
                        es: "Tu posición en la mesa",
                        de: "Deine Position am Tisch",
                        nl: "Jouw positie aan de tafel"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Pot equity represents your theoretical share of the pot based on your probability of winning the hand.",
                  es: "La equidad del bote representa tu participación teórica del bote basada en tu probabilidad de ganar la mano.",
                  de: "Pot Equity repräsentiert deinen theoretischen Anteil am Pot basierend auf deiner Wahrscheinlichkeit, die Hand zu gewinnen.",
                  nl: "Pot equity vertegenwoordigt jouw theoretisch aandeel van de pot gebaseerd op je kans om de hand te winnen."
            }
      },
      {
            question: {
                  en: "In Skat, what is the 'Schneider' threshold?",
                  es: "En Skat, ¿cuál es el umbral de 'Schneider'?",
                  de: "Was ist die 'Schneider'-Schwelle beim Skat?",
                  nl: "Wat is de 'Schneider' drempel bij Skat?"
            },
            options: [
                  {
                        en: "Opponent scores less than 30 points",
                        es: "El oponente anota menos de 30 puntos",
                        de: "Gegner erreicht weniger als 30 Punkte",
                        nl: "Tegenstander scoort minder dan 30 punten"
                  },
                  {
                        en: "Winning by exactly 10 points",
                        es: "Ganar por exactamente 10 puntos",
                        de: "Mit genau 10 Punkten gewinnen",
                        nl: "Winnen met precies 10 punten"
                  },
                  {
                        en: "Bidding over 50",
                        es: "Apostar más de 50",
                        de: "Über 50 reizen",
                        nl: "Bieden boven 50"
                  },
                  {
                        en: "Taking all tricks",
                        es: "Tomar todas las bazas",
                        de: "Alle Stiche nehmen",
                        nl: "Alle slagen nemen"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Schneider occurs when the defending team scores fewer than 30 points, doubling the game value for the declarer.",
                  es: "Schneider ocurre cuando el equipo defensor anota menos de 30 puntos, duplicando el valor del juego para el declarante.",
                  de: "Schneider tritt ein, wenn die Verteidiger weniger als 30 Punkte erreichen, was den Spielwert für den Alleinspieler verdoppelt.",
                  nl: "Schneider treedt op wanneer het verdedigende team minder dan 30 punten scoort, wat de spelwaarde voor de speler verdubbelt."
            }
      },
      {
            question: {
                  en: "What is 'card counting' based on in Blackjack?",
                  es: "¿En qué se basa el 'conteo de cartas' en Blackjack?",
                  de: "Worauf basiert 'Card Counting' beim Blackjack?",
                  nl: "Waarop is 'kaarten tellen' gebaseerd bij Blackjack?"
            },
            options: [
                  {
                        en: "Tracking the ratio of high to low cards remaining",
                        es: "Rastrear la proporción de cartas altas a bajas restantes",
                        de: "Das Verhältnis hoher zu niedrigen Karten verfolgen",
                        nl: "De verhouding van hoge tot lage kaarten bijhouden"
                  },
                  {
                        en: "Memorizing every card played",
                        es: "Memorizar cada carta jugada",
                        de: "Jede gespielte Karte auswendig lernen",
                        nl: "Elke gespeelde kaart onthouden"
                  },
                  {
                        en: "Counting dealer's mistakes",
                        es: "Contar los errores del crupier",
                        de: "Fehler des Dealers zählen",
                        nl: "Fouten van de dealer tellen"
                  },
                  {
                        en: "Tracking shuffle patterns",
                        es: "Rastrear patrones de barajado",
                        de: "Mischmuster verfolgen",
                        nl: "Schudpatronen bijhouden"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Card counting tracks the ratio of high to low cards remaining in the deck to determine when the player has an advantage.",
                  es: "El conteo de cartas rastrea la proporción de cartas altas a bajas que quedan en el mazo para determinar cuándo el jugador tiene ventaja.",
                  de: "Card Counting verfolgt das Verhältnis von hohen zu niedrigen Karten im Deck, um festzustellen, wann der Spieler im Vorteil ist.",
                  nl: "Kaarten tellen houdt de verhouding van hoge tot lage kaarten in het deck bij om te bepalen wanneer de speler een voordeel heeft."
            }
      },
      {
            question: {
                  en: "In Euchre, what is a 'loner' hand?",
                  es: "En Euchre, ¿qué es una mano 'solitaria'?",
                  de: "Was ist eine 'Loner'-Hand beim Euchre?",
                  nl: "Wat is een 'loner' hand bij Euchre?"
            },
            options: [
                  {
                        en: "Playing without your partner",
                        es: "Jugar sin tu pareja",
                        de: "Ohne Partner spielen",
                        nl: "Spelen zonder je partner"
                  },
                  {
                        en: "Having only one trump card",
                        es: "Tener solo una carta de triunfo",
                        de: "Nur eine Trumpfkarte haben",
                        nl: "Slechts één troefkaart hebben"
                  },
                  {
                        en: "Being the last player",
                        es: "Ser el último jugador",
                        de: "Der letzte Spieler sein",
                        nl: "De laatste speler zijn"
                  },
                  {
                        en: "Playing with one card less",
                        es: "Jugar con una carta menos",
                        de: "Mit einer Karte weniger spielen",
                        nl: "Spelen met één kaart minder"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "A loner is when a player chooses to play alone without their partner's help, attempting to take all five tricks for extra points.",
                  es: "Un solitario es cuando un jugador elige jugar solo sin la ayuda de su pareja, intentando tomar las cinco bazas para puntos extra.",
                  de: "Ein Loner ist, wenn ein Spieler wählt, allein ohne die Hilfe seines Partners zu spielen und versucht, alle fünf Stiche für Extrapunkte zu gewinnen.",
                  nl: "Een loner is wanneer een speler ervoor kiest om alleen te spelen zonder de hulp van zijn partner, in een poging alle vijf slagen te winnen voor extra punten."
            }
      },
      {
            question: {
                  en: "What is the 'Independent Chip Model' (ICM) in tournament poker?",
                  es: "¿Qué es el 'Modelo de Fichas Independientes' (ICM) en torneos de póker?",
                  de: "Was ist das 'Independent Chip Model' (ICM) beim Turnierpoker?",
                  nl: "Wat is het 'Independent Chip Model' (ICM) bij toernooipoker?"
            },
            options: [
                  {
                        en: "Converting chip stacks to monetary value",
                        es: "Convertir pilas de fichas a valor monetario",
                        de: "Chip-Stacks in Geldwert umrechnen",
                        nl: "Chipstapels omzetten naar geldwaarde"
                  },
                  {
                        en: "Counting chips independently",
                        es: "Contar fichas independientemente",
                        de: "Chips unabhängig zählen",
                        nl: "Chips onafhankelijk tellen"
                  },
                  {
                        en: "Isolating chip leaders",
                        es: "Aislar a los líderes de fichas",
                        de: "Chip-Leader isolieren",
                        nl: "Chipleiders isoleren"
                  },
                  {
                        en: "Individual chip tracking",
                        es: "Seguimiento individual de fichas",
                        de: "Individuelle Chip-Verfolgung",
                        nl: "Individuele chip tracking"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "ICM is a mathematical model that converts tournament chip stacks into real money equity based on payout structure and remaining players.",
                  es: "ICM es un modelo matemático que convierte las pilas de fichas del torneo en equidad de dinero real basándose en la estructura de pagos y los jugadores restantes.",
                  de: "ICM ist ein mathematisches Modell, das Turnier-Chip-Stacks basierend auf der Auszahlungsstruktur und den verbleibenden Spielern in echten Geldwert umrechnet.",
                  nl: "ICM is een wiskundig model dat toernooi chipstapels omzet in echte geldwaarde op basis van de uitbetalingsstructuur en resterende spelers."
            }
      },
      {
            question: {
                  en: "In Pinochle, what is the minimum meld score typically required to play?",
                  es: "En Pinochle, ¿cuál es la puntuación mínima de meld normalmente requerida para jugar?",
                  de: "Was ist die minimale Meld-Punktzahl beim Pinochle, die normalerweise zum Spielen erforderlich ist?",
                  nl: "Wat is de minimum meld score die typisch vereist is om te spelen bij Pinochle?"
            },
            options: [
                  {
                        en: "20 points",
                        es: "20 puntos",
                        de: "20 Punkte",
                        nl: "20 punten"
                  },
                  {
                        en: "10 points",
                        es: "10 puntos",
                        de: "10 Punkte",
                        nl: "10 punten"
                  },
                  {
                        en: "50 points",
                        es: "50 puntos",
                        de: "50 Punkte",
                        nl: "50 punten"
                  },
                  {
                        en: "5 points",
                        es: "5 puntos",
                        de: "5 Punkte",
                        nl: "5 punten"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "In most Pinochle variants, players must show at least 20 points in melds to be allowed to play their hand and score.",
                  es: "En la mayoría de las variantes de Pinochle, los jugadores deben mostrar al menos 20 puntos en melds para poder jugar su mano y anotar.",
                  de: "In den meisten Pinochle-Varianten müssen Spieler mindestens 20 Punkte in Melds zeigen, um ihre Hand spielen und punkten zu dürfen.",
                  nl: "Bij de meeste Pinochle varianten moeten spelers minstens 20 punten in melds tonen om hun hand te mogen spelen en scoren."
            }
      },
      {
            question: {
                  en: "What is 'Nash Equilibrium' in the context of poker?",
                  es: "¿Qué es el 'Equilibrio de Nash' en el contexto del póker?",
                  de: "Was ist das 'Nash-Gleichgewicht' im Poker-Kontext?",
                  nl: "Wat is 'Nash Equilibrium' in de context van poker?"
            },
            options: [
                  {
                        en: "Optimal strategy where no player can improve by changing alone",
                        es: "Estrategia óptima donde ningún jugador puede mejorar cambiando solo",
                        de: "Optimale Strategie, bei der kein Spieler durch Änderung allein verbessern kann",
                        nl: "Optimale strategie waarbij geen speler kan verbeteren door alleen te veranderen"
                  },
                  {
                        en: "Balancing chip stacks evenly",
                        es: "Equilibrar las pilas de fichas uniformemente",
                        de: "Chip-Stacks gleichmäßig ausbalancieren",
                        nl: "Chipstapels gelijk verdelen"
                  },
                  {
                        en: "Playing conservatively always",
                        es: "Jugar conservadoramente siempre",
                        de: "Immer konservativ spielen",
                        nl: "Altijd conservatief spelen"
                  },
                  {
                        en: "Matching opponent's bet size",
                        es: "Igualar el tamaño de apuesta del oponente",
                        de: "Einsatzgröße des Gegners angleichen",
                        nl: "Inzetgrootte van tegenstander matchen"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Nash Equilibrium is a game theory concept describing a strategy where no player can gain an advantage by unilaterally changing their strategy.",
                  es: "El Equilibrio de Nash es un concepto de teoría de juegos que describe una estrategia donde ningún jugador puede obtener ventaja cambiando unilateralmente su estrategia.",
                  de: "Nash-Gleichgewicht ist ein spieltheoretisches Konzept, das eine Strategie beschreibt, bei der kein Spieler durch einseitige Strategieänderung einen Vorteil erlangen kann.",
                  nl: "Nash Equilibrium is een speltheorie concept dat een strategie beschrijft waarbij geen speler een voordeel kan behalen door eenzijdig zijn strategie te veranderen."
            }
      },
      {
            question: {
                  en: "In Hearts, what is a 'moon shot' or 'shooting the moon'?",
                  es: "En Hearts, ¿qué es un 'moon shot' o 'disparar a la luna'?",
                  de: "Was ist ein 'Moon Shot' oder 'Shooting the Moon' bei Hearts?",
                  nl: "Wat is een 'moon shot' of 'shooting the moon' bij Hearts?"
            },
            options: [
                  {
                        en: "Taking all hearts and the Queen of Spades",
                        es: "Tomar todos los corazones y la Reina de Picas",
                        de: "Alle Herzen und die Pik-Dame nehmen",
                        nl: "Alle harten en de Schoppen Vrouw nemen"
                  },
                  {
                        en: "Avoiding all point cards",
                        es: "Evitar todas las cartas de puntos",
                        de: "Alle Punktkarten vermeiden",
                        nl: "Alle puntenkaarten vermijden"
                  },
                  {
                        en: "Playing the highest card each trick",
                        es: "Jugar la carta más alta en cada baza",
                        de: "Die höchste Karte jedes Stichs spielen",
                        nl: "De hoogste kaart elke slag spelen"
                  },
                  {
                        en: "Winning the first trick",
                        es: "Ganar la primera baza",
                        de: "Den ersten Stich gewinnen",
                        nl: "De eerste slag winnen"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Shooting the moon means taking all 26 penalty points (all hearts and the Queen of Spades), which gives you 0 points and all opponents 26 points.",
                  es: "Disparar a la luna significa tomar todos los 26 puntos de penalización (todos los corazones y la Reina de Picas), lo que te da 0 puntos y a todos los oponentes 26 puntos.",
                  de: "Shooting the Moon bedeutet, alle 26 Strafpunkte (alle Herzen und die Pik-Dame) zu nehmen, was dir 0 Punkte gibt und allen Gegnern 26 Punkte.",
                  nl: "Shooting the moon betekent alle 26 strafpunten nemen (alle harten en de Schoppen Vrouw), wat jou 0 punten geeft en alle tegenstanders 26 punten."
            }
      },
      {
            question: {
                  en: "What is 'GTO' strategy in poker?",
                  es: "¿Qué es la estrategia 'GTO' en póker?",
                  de: "Was ist 'GTO'-Strategie beim Poker?",
                  nl: "Wat is 'GTO' strategie bij poker?"
            },
            options: [
                  {
                        en: "Game Theory Optimal - unexploitable play",
                        es: "Teoría de Juegos Óptima - juego inexplotable",
                        de: "Game Theory Optimal - nicht ausnutzbares Spiel",
                        nl: "Game Theory Optimal - niet-exploiteerbaar spel"
                  },
                  {
                        en: "Go To Omaha - switching games",
                        es: "Ir a Omaha - cambiar de juegos",
                        de: "Go To Omaha - Spiele wechseln",
                        nl: "Go To Omaha - van spel wisselen"
                  },
                  {
                        en: "Great Table Optimization",
                        es: "Gran Optimización de Mesa",
                        de: "Großartige Tischoptimierung",
                        nl: "Geweldige Tafeloptimalisatie"
                  },
                  {
                        en: "Guaranteed Tournament Outcome",
                        es: "Resultado de Torneo Garantizado",
                        de: "Garantiertes Turnierergebnis",
                        nl: "Gegarandeerd Toernooiresultaat"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "GTO (Game Theory Optimal) is a poker strategy that cannot be exploited by opponents, playing in a balanced, mathematically sound way.",
                  es: "GTO (Teoría de Juegos Óptima) es una estrategia de póker que no puede ser explotada por los oponentes, jugando de manera equilibrada y matemáticamente sólida.",
                  de: "GTO (Game Theory Optimal) ist eine Pokerstrategie, die von Gegnern nicht ausgenutzt werden kann und auf ausgewogene, mathematisch fundierte Weise spielt.",
                  nl: "GTO (Game Theory Optimal) is een pokerstrategie die niet kan worden geëxploiteerd door tegenstanders, spelend op een gebalanceerde, wiskundig verantwoorde manier."
            }
      },
      {
            question: {
                  en: "In Spades, what is a 'nil bid'?",
                  es: "En Spades, ¿qué es una 'apuesta nil'?",
                  de: "Was ist ein 'Nil-Gebot' bei Spades?",
                  nl: "Wat is een 'nil bid' bij Spades?"
            },
            options: [
                  {
                        en: "Bidding to take zero tricks",
                        es: "Apostar a tomar cero bazas",
                        de: "Bieten, null Stiche zu machen",
                        nl: "Bieden om nul slagen te nemen"
                  },
                  {
                        en: "Passing your turn",
                        es: "Pasar tu turno",
                        de: "Deinen Zug überspringen",
                        nl: "Je beurt overslaan"
                  },
                  {
                        en: "Having no spades in hand",
                        es: "No tener picas en la mano",
                        de: "Keine Pik auf der Hand haben",
                        nl: "Geen schoppen in je hand hebben"
                  },
                  {
                        en: "Canceling your partner's bid",
                        es: "Cancelar la apuesta de tu pareja",
                        de: "Das Gebot deines Partners stornieren",
                        nl: "Het bod van je partner annuleren"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "A nil bid is a declaration that you will take no tricks during the hand, which scores high points if successful but penalties if you take any tricks.",
                  es: "Una apuesta nil es una declaración de que no tomarás bazas durante la mano, que otorga muchos puntos si tiene éxito pero penalizaciones si tomas alguna baza.",
                  de: "Ein Nil-Gebot ist eine Erklärung, dass man keine Stiche während der Hand macht, was bei Erfolg hohe Punkte bringt, aber Strafen, wenn man Stiche macht.",
                  nl: "Een nil bid is een verklaring dat je geen slagen zult nemen tijdens de hand, wat hoge punten oplevert bij succes maar straffen als je wel slagen neemt."
            }
      },
      {
            question: {
                  en: "What is 'variance' in the context of card games?",
                  es: "¿Qué es la 'varianza' en el contexto de los juegos de cartas?",
                  de: "Was ist 'Varianz' im Kontext von Kartenspielen?",
                  de: "Wat is 'variance' in de context van kaartspellen?"
            },
            options: [
                  {
                        en: "Statistical deviation from expected results",
                        es: "Desviación estadística de los resultados esperados",
                        de: "Statistische Abweichung von erwarteten Ergebnissen",
                        nl: "Statistische afwijking van verwachte resultaten"
                  },
                  {
                        en: "Different game variations",
                        es: "Diferentes variaciones del juego",
                        de: "Verschiedene Spielvarianten",
                        nl: "Verschillende spelvariaties"
                  },
                  {
                        en: "Variable betting amounts",
                        es: "Cantidades de apuesta variables",
                        de: "Variable Wetteinsätze",
                        nl: "Variabele inzetbedragen"
                  },
                  {
                        en: "Number of players changing",
                        es: "Número de jugadores cambiante",
                        de: "Wechselnde Spieleranzahl",
                        nl: "Aantal spelers dat verandert"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Variance refers to the statistical fluctuation of results from the expected outcome, representing short-term luck factors in games.",
                  es: "La varianza se refiere a la fluctuación estadística de los resultados del resultado esperado, representando factores de suerte a corto plazo en los juegos.",
                  de: "Varianz bezieht sich auf die statistische Schwankung der Ergebnisse vom erwarteten Resultat und repräsentiert kurzfristige Glücksfaktoren in Spielen.",
                  nl: "Variance verwijst naar de statistische fluctuatie van resultaten ten opzichte van het verwachte resultaat, en vertegenwoordigt geluksfactoren op korte termijn in spellen."
            }
      },
      {
            question: {
                  en: "In Cribbage, what is the 'starter' or 'cut card'?",
                  es: "En Cribbage, ¿qué es la 'carta inicial' o 'carta de corte'?",
                  de: "Was ist die 'Starter-Karte' oder 'Schnitt-Karte' beim Cribbage?",
                  nl: "Wat is de 'starter' of 'cut card' bij Cribbage?"
            },
            options: [
                  {
                        en: "A fifth card used in counting all hands",
                        es: "Una quinta carta usada para contar todas las manos",
                        de: "Eine fünfte Karte, die beim Zählen aller Hände verwendet wird",
                        nl: "Een vijfde kaart gebruikt bij het tellen van alle handen"
                  },
                  {
                        en: "The first card dealt",
                        es: "La primera carta repartida",
                        de: "Die erste ausgeteilte Karte",
                        nl: "De eerste gedeelde kaart"
                  },
                  {
                        en: "The dealer's highest card",
                        es: "La carta más alta del repartidor",
                        de: "Die höchste Karte des Gebers",
                        nl: "De hoogste kaart van de gever"
                  },
                  {
                        en: "A wild card chosen each round",
                        es: "Una carta comodín elegida cada ronda",
                        de: "Eine Jokerkarte, die jede Runde gewählt wird",
                        nl: "Een jokerkaart gekozen elke ronde"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "The starter is a card cut from the deck after discards, which counts as a fifth card for both players' hands and the crib when scoring.",
                  es: "La carta inicial es una carta cortada del mazo después de los descartes, que cuenta como una quinta carta para las manos de ambos jugadores y el crib al anotar.",
                  de: "Die Starter-Karte wird nach dem Ablegen vom Deck geschnitten und zählt beim Punkten als fünfte Karte für beide Spielerhände und den Crib.",
                  nl: "De starter is een kaart die na het wegleggen van het deck wordt afgesneden en telt als een vijfde kaart voor beide spelershanden en de crib bij het scoren."
            }
      },
      {
            question: {
                  en: "What is 'implied odds' in poker?",
                  es: "¿Qué son las 'probabilidades implícitas' en póker?",
                  de: "Was sind 'implizite Odds' beim Poker?",
                  nl: "Wat zijn 'implied odds' bij poker?"
            },
            options: [
                  {
                        en: "Potential future winnings beyond current pot",
                        es: "Posibles ganancias futuras más allá del bote actual",
                        de: "Potenzielle zukünftige Gewinne über den aktuellen Pot hinaus",
                        nl: "Potentiële toekomstige winsten buiten de huidige pot"
                  },
                  {
                        en: "Hidden betting patterns",
                        es: "Patrones de apuesta ocultos",
                        de: "Versteckte Wettmuster",
                        nl: "Verborgen gokpatronen"
                  },
                  {
                        en: "Suggested bet sizes",
                        es: "Tamaños de apuesta sugeridos",
                        de: "Vorgeschlagene Einsatzgrößen",
                        nl: "Voorgestelde inzetgroottes"
                  },
                  {
                        en: "Probability of winning",
                        es: "Probabilidad de ganar",
                        de: "Gewinnwahrscheinlichkeit",
                        nl: "Kans op winnen"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Implied odds consider not just the current pot size, but also the potential additional money you could win on future betting rounds.",
                  es: "Las probabilidades implícitas consideran no solo el tamaño del bote actual, sino también el dinero adicional potencial que podrías ganar en rondas de apuestas futuras.",
                  de: "Implizite Odds berücksichtigen nicht nur die aktuelle Pot-Größe, sondern auch das potenzielle zusätzliche Geld, das man in zukünftigen Wettrunden gewinnen könnte.",
                  nl: "Implied odds houden niet alleen rekening met de huidige potgrootte, maar ook met het potentiële extra geld dat je in toekomstige gokrondes zou kunnen winnen."
            }
      },
      {
            question: {
                  en: "In Canasta, what is a 'natural' canasta?",
                  es: "En Canasta, ¿qué es una canasta 'natural'?",
                  de: "Was ist eine 'natürliche' Canasta beim Canasta?",
                  nl: "Wat is een 'natuurlijke' canasta bij Canasta?"
            },
            options: [
                  {
                        en: "Seven or more cards of same rank without wild cards",
                        es: "Siete o más cartas del mismo rango sin comodines",
                        de: "Sieben oder mehr Karten des gleichen Rangs ohne Jokerkarten",
                        nl: "Zeven of meer kaarten van dezelfde rang zonder jokers"
                  },
                  {
                        en: "Any seven cards in sequence",
                        es: "Cualquier siete cartas en secuencia",
                        de: "Beliebige sieben Karten in Reihenfolge",
                        nl: "Willekeurige zeven kaarten op volgorde"
                  },
                  {
                        en: "Seven wild cards together",
                        es: "Siete comodines juntos",
                        de: "Sieben Jokerkarten zusammen",
                        nl: "Zeven jokers samen"
                  },
                  {
                        en: "The first canasta made in a game",
                        es: "La primera canasta hecha en un juego",
                        de: "Die erste Canasta in einem Spiel",
                        nl: "De eerste canasta gemaakt in een spel"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "A natural canasta consists of seven or more cards of the same rank with no wild cards, scoring 500 points compared to 300 for mixed canastas.",
                  es: "Una canasta natural consiste en siete o más cartas del mismo rango sin comodines, puntuando 500 puntos comparado con 300 para canastas mixtas.",
                  de: "Eine natürliche Canasta besteht aus sieben oder mehr Karten des gleichen Rangs ohne Jokerkarten und bringt 500 Punkte im Vergleich zu 300 für gemischte Canastas.",
                  nl: "Een natuurlijke canasta bestaat uit zeven of meer kaarten van dezelfde rang zonder jokers, met een score van 500 punten vergeleken met 300 voor gemengde canastas."
            }
      },
      {
            question: {
                  en: "What is 'range balancing' in poker?",
                  es: "¿Qué es el 'equilibrio de rango' en póker?",
                  de: "Was ist 'Range Balancing' beim Poker?",
                  nl: "Wat is 'range balancing' bij poker?"
            },
            options: [
                  {
                        en: "Playing different hand strengths the same way",
                        es: "Jugar diferentes fuerzas de mano de la misma manera",
                        de: "Verschiedene Handstärken auf die gleiche Weise spielen",
                        nl: "Verschillende handsterktes op dezelfde manier spelen"
                  },
                  {
                        en: "Equal chip distribution",
                        es: "Distribución equitativa de fichas",
                        de: "Gleichmäßige Chip-Verteilung",
                        nl: "Gelijke chipverdeling"
                  },
                  {
                        en: "Betting the same amount always",
                        es: "Apostar siempre la misma cantidad",
                        de: "Immer den gleichen Betrag setzen",
                        nl: "Altijd hetzelfde bedrag inzetten"
                  },
                  {
                        en: "Playing all positions equally",
                        es: "Jugar todas las posiciones por igual",
                        de: "Alle Positionen gleich spielen",
                        nl: "Alle posities gelijk spelen"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Range balancing means playing various hand strengths similarly to make your strategy unexploitable and prevent opponents from reading your holdings.",
                  es: "El equilibrio de rango significa jugar varias fuerzas de mano de manera similar para hacer tu estrategia inexplotable y evitar que los oponentes lean tus cartas.",
                  de: "Range Balancing bedeutet, verschiedene Handstärken ähnlich zu spielen, um die Strategie nicht ausnutzbar zu machen und Gegner daran zu hindern, die Hand zu lesen.",
                  nl: "Range balancing betekent verschillende handsterktes op vergelijkbare wijze spelen om je strategie niet-exploiteerbaar te maken en te voorkomen dat tegenstanders je kaarten kunnen lezen."
            }
      },
      {
            question: {
                  en: "In Rummy, what is a 'going rummy'?",
                  es: "En Rummy, ¿qué es 'going rummy'?",
                  de: "Was bedeutet 'Going Rummy' beim Rummy?",
                  nl: "Wat is 'going rummy' bij Rummy?"
            },
            options: [
                  {
                        en: "Melding all cards at once without previous melds",
                        es: "Declarar todas las cartas a la vez sin melds previas",
                        de: "Alle Karten auf einmal melden ohne vorherige Melds",
                        nl: "Alle kaarten tegelijk melden zonder eerdere melds"
                  },
                  {
                        en: "Drawing three cards in a turn",
                        es: "Robar tres cartas en un turno",
                        de: "Drei Karten in einem Zug ziehen",
                        nl: "Drie kaarten trekken in een beurt"
                  },
                  {
                        en: "Discarding face cards only",
                        es: "Descartar solo cartas de figura",
                        de: "Nur Bildkarten abwerfen",
                        nl: "Alleen plaatjeskaarten weggooien"
                  },
                  {
                        en: "Playing out of turn",
                        es: "Jugar fuera de turno",
                        de: "Außer der Reihe spielen",
                        nl: "Buiten je beurt spelen"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Going rummy means melding all your cards in one turn without having made any previous melds, typically scoring double points.",
                  es: "Going rummy significa declarar todas tus cartas en un turno sin haber hecho melds previas, típicamente puntuando el doble.",
                  de: "Going Rummy bedeutet, alle Karten in einem Zug zu melden, ohne vorher Melds gemacht zu haben, was typischerweise doppelte Punkte bringt.",
                  nl: "Going rummy betekent al je kaarten in één beurt melden zonder eerdere melds te hebben gemaakt, wat meestal dubbele punten oplevert."
            }
      },
      {
            question: {
                  en: "What is 'blockers' concept in poker?",
                  es: "¿Qué es el concepto de 'bloqueadores' en póker?",
                  de: "Was ist das 'Blockers'-Konzept beim Poker?",
                  nl: "Wat is het 'blockers' concept bij poker?"
            },
            options: [
                  {
                        en: "Holding cards that prevent opponents from having certain hands",
                        es: "Sostener cartas que impiden a los oponentes tener ciertas manos",
                        de: "Karten halten, die Gegner daran hindern, bestimmte Hände zu haben",
                        nl: "Kaarten vasthouden die tegenstanders beletten bepaalde handen te hebben"
                  },
                  {
                        en: "Blocking betting action",
                        es: "Bloquear la acción de apuesta",
                        de: "Wettaktion blockieren",
                        nl: "Gokactie blokkeren"
                  },
                  {
                        en: "Preventing opponents from folding",
                        es: "Evitar que los oponentes se retiren",
                        de: "Gegner am Folden hindern",
                        nl: "Tegenstanders beletten te folden"
                  },
                  {
                        en: "Covering your cards completely",
                        es: "Cubrir tus cartas completamente",
                        de: "Karten vollständig abdecken",
                        nl: "Je kaarten volledig bedekken"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Blockers are cards you hold that reduce the combinations of strong hands your opponents can have, affecting their possible range.",
                  es: "Los bloqueadores son cartas que sostienes que reducen las combinaciones de manos fuertes que tus oponentes pueden tener, afectando su rango posible.",
                  de: "Blockers sind Karten, die man hält und die die Kombinationen starker Hände reduzieren, die Gegner haben können, was ihre mögliche Range beeinflusst.",
                  nl: "Blockers zijn kaarten die je vasthoudt en die de combinaties van sterke handen verminderen die je tegenstanders kunnen hebben, wat hun mogelijke range beïnvloedt."
            }
      },
      {
            question: {
                  en: "In Tarot card games, what is the 'excuse' or 'fool' card?",
                  es: "En los juegos de cartas del Tarot, ¿qué es la carta del 'excusado' o 'loco'?",
                  de: "Was ist die 'Excuse'- oder 'Narren'-Karte bei Tarot-Kartenspielen?",
                  nl: "Wat is de 'excuse' of 'dwaas' kaart bij Tarot kaartspellen?"
            },
            options: [
                  {
                        en: "A special trump that doesn't win but avoids following suit",
                        es: "Un triunfo especial que no gana pero evita seguir el palo",
                        de: "Ein spezieller Trumpf, der nicht gewinnt, aber das Bedienen vermeidet",
                        nl: "Een speciale troef die niet wint maar het volgen van kleur vermijdt"
                  },
                  {
                        en: "A wild card that can be any suit",
                        es: "Un comodín que puede ser cualquier palo",
                        de: "Eine Jokerkarte, die jede Farbe sein kann",
                        nl: "Een joker die elke kleur kan zijn"
                  },
                  {
                        en: "The lowest trump card",
                        es: "La carta de triunfo más baja",
                        de: "Die niedrigste Trumpfkarte",
                        nl: "De laagste troefkaart"
                  },
                  {
                        en: "A card that skips your turn",
                        es: "Una carta que salta tu turno",
                        de: "Eine Karte, die deinen Zug überspringt",
                        nl: "Een kaart die je beurt overslaat"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "The Excuse is a special card in Tarot games that can be played at any time, doesn't win the trick, but allows the player to avoid following suit and usually retain the card.",
                  es: "El Excusado es una carta especial en los juegos de Tarot que se puede jugar en cualquier momento, no gana la baza, pero permite al jugador evitar seguir el palo y usualmente retener la carta.",
                  de: "Die Excuse ist eine spezielle Karte in Tarot-Spielen, die jederzeit gespielt werden kann, den Stich nicht gewinnt, aber es dem Spieler erlaubt, das Bedienen zu vermeiden und die Karte meist zu behalten.",
                  nl: "De Excuse is een speciale kaart in Tarot spellen die op elk moment gespeeld kan worden, de slag niet wint, maar de speler toestaat kleur te vermijden en meestal de kaart te behouden."
            }
      },
      {
            question: {
                  en: "What is 'minimum defense frequency' (MDF) in poker?",
                  es: "¿Qué es la 'frecuencia mínima de defensa' (MDF) en póker?",
                  de: "Was ist die 'Minimum Defense Frequency' (MDF) beim Poker?",
                  nl: "Wat is 'minimum defense frequency' (MDF) bij poker?"
            },
            options: [
                  {
                        en: "Percentage of time to call/raise to prevent exploitation",
                        es: "Porcentaje de tiempo para igualar/subir para prevenir explotación",
                        de: "Prozentsatz der Zeit zum Callen/Raisen um Ausbeutung zu verhindern",
                        nl: "Percentage van de tijd om te callen/raisen om exploitatie te voorkomen"
                  },
                  {
                        en: "Minimum number of defensive plays per hour",
                        es: "Número mínimo de jugadas defensivas por hora",
                        de: "Minimale Anzahl defensiver Spielzüge pro Stunde",
                        nl: "Minimum aantal defensieve spellen per uur"
                  },
                  {
                        en: "Lowest chip stack to defend blinds",
                        es: "Pila de fichas más baja para defender ciegas",
                        de: "Niedrigster Chip-Stack zur Verteidigung der Blinds",
                        nl: "Laagste chipstapel om blinds te verdedigen"
                  },
                  {
                        en: "Required table position for defense",
                        es: "Posición de mesa requerida para defensa",
                        de: "Erforderliche Tischposition zur Verteidigung",
                        nl: "Vereiste tafelpositie voor verdediging"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "MDF is the minimum frequency you must continue (call or raise) when facing a bet to prevent your opponent from profitably bluffing you.",
                  es: "MDF es la frecuencia mínima con la que debes continuar (igualar o subir) cuando enfrentas una apuesta para evitar que tu oponente te haga farol rentablemente.",
                  de: "MDF ist die minimale Häufigkeit, mit der man weiterspielen muss (callen oder raisen), wenn man mit einer Wette konfrontiert wird, um zu verhindern, dass der Gegner profitabel blufft.",
                  nl: "MDF is de minimale frequentie waarmee je moet doorgaan (callen of raisen) bij een bet om te voorkomen dat je tegenstander winstgevend kan bluffen."
            }
      },
      {
            question: {
                  en: "In Schafkopf, what is a 'Solo' game?",
                  es: "En Schafkopf, ¿qué es un juego 'Solo'?",
                  de: "Was ist ein 'Solo'-Spiel beim Schafkopf?",
                  nl: "Wat is een 'Solo' spel bij Schafkopf?"
            },
            options: [
                  {
                        en: "One player against three opponents",
                        es: "Un jugador contra tres oponentes",
                        de: "Ein Spieler gegen drei Gegner",
                        nl: "Eén speler tegen drie tegenstanders"
                  },
                  {
                        en: "Playing without partners",
                        es: "Jugar sin parejas",
                        de: "Ohne Partner spielen",
                        nl: "Spelen zonder partners"
                  },
                  {
                        en: "Using only one suit",
                        es: "Usar solo un palo",
                        de: "Nur eine Farbe verwenden",
                        nl: "Slechts één kleur gebruiken"
                  },
                  {
                        en: "Taking the first trick alone",
                        es: "Tomar la primera baza solo",
                        de: "Den ersten Stich alleine nehmen",
                        nl: "De eerste slag alleen nemen"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "In Schafkopf, a Solo is a contract where one player plays alone against the other three, declaring trump and attempting to win the majority of points.",
                  es: "En Schafkopf, un Solo es un contrato donde un jugador juega solo contra los otros tres, declarando triunfo e intentando ganar la mayoría de los puntos.",
                  de: "Beim Schafkopf ist ein Solo ein Kontrakt, bei dem ein Spieler allein gegen die anderen drei spielt, Trumpf ansagt und versucht, die Mehrheit der Punkte zu gewinnen.",
                  nl: "Bij Schafkopf is een Solo een contract waarbij één speler alleen speelt tegen de andere drie, troef declareert en probeert de meerderheid van de punten te winnen."
            }
      },
      {
            question: {
                  en: "What is 'reverse implied odds' in poker?",
                  es: "¿Qué son las 'probabilidades implícitas inversas' en póker?",
                  de: "Was sind 'umgekehrte implizite Odds' beim Poker?",
                  nl: "Wat zijn 'reverse implied odds' bij poker?"
            },
            options: [
                  {
                        en: "Potential future losses even when you hit your draw",
                        es: "Posibles pérdidas futuras incluso cuando completas tu proyecto",
                        de: "Potenzielle zukünftige Verluste selbst wenn man sein Draw trifft",
                        nl: "Potentiële toekomstige verliezen zelfs wanneer je je draw maakt"
                  },
                  {
                        en: "Betting in reverse order",
                        es: "Apostar en orden inverso",
                        de: "In umgekehrter Reihenfolge setzen",
                        nl: "Inzetten in omgekeerde volgorde"
                  },
                  {
                        en: "Opponents' implied odds",
                        es: "Probabilidades implícitas de los oponentes",
                        de: "Implizite Odds der Gegner",
                        nl: "Implied odds van tegenstanders"
                  },
                  {
                        en: "Negative pot odds calculation",
                        es: "Cálculo negativo de pot odds",
                        de: "Negative Pot-Odds-Berechnung",
                        nl: "Negatieve pot odds berekening"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Reverse implied odds refer to the potential for losing additional money on future streets even when you make your hand, often when drawing to a dominated hand.",
                  es: "Las probabilidades implícitas inversas se refieren al potencial de perder dinero adicional en calles futuras incluso cuando completas tu mano, a menudo cuando buscas una mano dominada.",
                  de: "Umgekehrte implizite Odds beziehen sich auf das Potenzial, zusätzliches Geld in zukünftigen Streets zu verlieren, selbst wenn man seine Hand macht, oft beim Ziehen zu einer dominierten Hand.",
                  nl: "Reverse implied odds verwijzen naar het potentieel om extra geld te verliezen op toekomstige streets zelfs wanneer je je hand maakt, vaak wanneer je naar een gedomineerde hand trekt."
            }
      },
      {
            question: {
                  en: "In Belote, what is 'Belote-Rebelote'?",
                  es: "En Belote, ¿qué es 'Belote-Rebelote'?",
                  de: "Was ist 'Belote-Rebelote' beim Belote?",
                  nl: "Wat is 'Belote-Rebelote' bij Belote?"
            },
            options: [
                  {
                        en: "Holding both King and Queen of trump suit",
                        es: "Tener tanto el Rey como la Reina del palo de triunfo",
                        de: "König und Dame der Trumpffarbe halten",
                        nl: "Zowel Koning als Vrouw van troefkleur hebben"
                  },
                  {
                        en: "Winning two consecutive tricks",
                        es: "Ganar dos bazas consecutivas",
                        de: "Zwei aufeinanderfolgende Stiche gewinnen",
                        nl: "Twee opeenvolgende slagen winnen"
                  },
                  {
                        en: "Declaring trump twice",
                        es: "Declarar triunfo dos veces",
                        de: "Trumpf zweimal ansagen",
                        nl: "Troef twee keer declareren"
                  },
                  {
                        en: "Replaying a round",
                        es: "Rejugar una ronda",
                        de: "Eine Runde wiederholen",
                        nl: "Een ronde opnieuw spelen"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Belote-Rebelote is declared when a player holds and plays both the King and Queen of the trump suit, scoring 20 bonus points.",
                  es: "Belote-Rebelote se declara cuando un jugador tiene y juega tanto el Rey como la Reina del palo de triunfo, puntuando 20 puntos de bonificación.",
                  de: "Belote-Rebelote wird angesagt, wenn ein Spieler König und Dame der Trumpffarbe hält und spielt, was 20 Bonuspunkte bringt.",
                  nl: "Belote-Rebelote wordt gedeclareerd wanneer een speler zowel de Koning als de Vrouw van de troefkleur heeft en speelt, wat 20 bonuspunten oplevert."
            }
      },
      {
            question: {
                  en: "What is 'fold equity' in poker?",
                  es: "¿Qué es la 'equidad de retiro' en póker?",
                  de: "Was ist 'Fold Equity' beim Poker?",
                  nl: "Wat is 'fold equity' bij poker?"
            },
            options: [
                  {
                        en: "Value gained from opponents folding to your bet",
                        es: "Valor ganado de que los oponentes se retiren ante tu apuesta",
                        de: "Wert gewonnen durch das Folden der Gegner auf deine Wette",
                        nl: "Waarde verkregen doordat tegenstanders folden op je bet"
                  },
                  {
                        en: "Number of times you fold per session",
                        es: "Número de veces que te retiras por sesión",
                        de: "Anzahl der Male, die man pro Session foldet",
                        nl: "Aantal keren dat je foldt per sessie"
                  },
                  {
                        en: "Chips saved by folding",
                        es: "Fichas ahorradas al retirarse",
                        de: "Chips gespart durch Folden",
                        nl: "Chips bespaard door te folden"
                  },
                  {
                        en: "Equity when you're planning to fold",
                        es: "Equidad cuando planeas retirarte",
                        de: "Equity wenn man plant zu folden",
                        nl: "Equity wanneer je van plan bent te folden"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Fold equity is the additional value your hand gains from the possibility that opponents will fold, making a bet or raise profitable even with a weak hand.",
                  es: "La equidad de retiro es el valor adicional que gana tu mano por la posibilidad de que los oponentes se retiren, haciendo una apuesta o subida rentable incluso con una mano débil.",
                  de: "Fold Equity ist der zusätzliche Wert, den deine Hand durch die Möglichkeit gewinnt, dass Gegner folden, wodurch eine Wette oder ein Raise selbst mit einer schwachen Hand profitabel wird.",
                  nl: "Fold equity is de extra waarde die je hand krijgt door de mogelijkheid dat tegenstanders folden, waardoor een bet of raise winstgevend wordt zelfs met een zwakke hand."
            }
      },
      {
            question: {
                  en: "In Tichu, what is the 'Grand Tichu' declaration?",
                  es: "En Tichu, ¿qué es la declaración de 'Grand Tichu'?",
                  de: "Was ist die 'Grand Tichu'-Ansage beim Tichu?",
                  nl: "Wat is de 'Grand Tichu' declaratie bij Tichu?"
            },
            options: [
                  {
                        en: "Betting to go out first before seeing full hand",
                        es: "Apostar a salir primero antes de ver la mano completa",
                        de: "Wetten auf erstes Ausgehen vor dem Sehen der vollen Hand",
                        nl: "Wedden om als eerste uit te gaan voor het zien van de volledige hand"
                  },
                  {
                        en: "Playing all cards at once",
                        es: "Jugar todas las cartas a la vez",
                        de: "Alle Karten auf einmal spielen",
                        nl: "Alle kaarten tegelijk spelen"
                  },
                  {
                        en: "Highest possible combination",
                        es: "Combinación más alta posible",
                        de: "Höchstmögliche Kombination",
                        nl: "Hoogst mogelijke combinatie"
                  },
                  {
                        en: "Winning with special cards only",
                        es: "Ganar solo con cartas especiales",
                        de: "Nur mit Spezialkarten gewinnen",
                        nl: "Winnen met alleen speciale kaarten"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Grand Tichu is a declaration made before looking at all your cards, betting 200 points that you will go out first. Regular Tichu is declared after seeing all cards for 100 points.",
                  es: "Grand Tichu es una declaración hecha antes de mirar todas tus cartas, apostando 200 puntos a que saldrás primero. El Tichu regular se declara después de ver todas las cartas por 100 puntos.",
                  de: "Grand Tichu ist eine Ansage vor dem Betrachten aller Karten, bei der 200 Punkte gewettet werden, dass man als Erster ausgeht. Normales Tichu wird nach dem Sehen aller Karten für 100 Punkte angesagt.",
                  nl: "Grand Tichu is een declaratie gemaakt voordat je al je kaarten bekijkt, waarbij je 200 punten wedt dat je als eerste uitgaat. Normale Tichu wordt na het zien van alle kaarten gedeclareerd voor 100 punten."
            }
      },
      {
            question: {
                  en: "What is 'position' advantage in poker?",
                  es: "¿Qué es la ventaja de 'posición' en póker?",
                  de: "Was ist der 'Positions'-Vorteil beim Poker?",
                  nl: "Wat is 'positie' voordeel bij poker?"
            },
            options: [
                  {
                        en: "Acting after opponents to see their actions first",
                        es: "Actuar después de los oponentes para ver sus acciones primero",
                        de: "Nach den Gegnern agieren um deren Aktionen zuerst zu sehen",
                        nl: "Na tegenstanders handelen om hun acties eerst te zien"
                  },
                  {
                        en: "Sitting closest to the dealer",
                        es: "Sentarse más cerca del crupier",
                        de: "Am nächsten zum Dealer sitzen",
                        nl: "Dichtstbij de dealer zitten"
                  },
                  {
                        en: "Having the most chips",
                        es: "Tener más fichas",
                        de: "Die meisten Chips haben",
                        nl: "De meeste chips hebben"
                  },
                  {
                        en: "Being the tournament leader",
                        es: "Ser el líder del torneo",
                        de: "Turnierführer sein",
                        nl: "De toernooileider zijn"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Position advantage comes from acting later in the betting order, allowing you to make more informed decisions after seeing what opponents do.",
                  es: "La ventaja de posición viene de actuar más tarde en el orden de apuestas, permitiéndote tomar decisiones más informadas después de ver qué hacen los oponentes.",
                  de: "Positionsvorteil kommt davon, später in der Wettreihenfolge zu agieren, wodurch man informiertere Entscheidungen treffen kann, nachdem man gesehen hat, was Gegner tun.",
                  nl: "Positievoordeel komt voort uit later handelen in de gokvolgorde, waardoor je meer geïnformeerde beslissingen kunt nemen nadat je hebt gezien wat tegenstanders doen."
            }
      },
      {
            question: {
                  en: "In Wizard, how is the trump suit determined?",
                  es: "En Wizard, ¿cómo se determina el palo de triunfo?",
                  de: "Wie wird die Trumpffarbe beim Wizard bestimmt?",
                  nl: "Hoe wordt de troefkleur bepaald bij Wizard?"
            },
            options: [
                  {
                        en: "By the card turned up after dealing",
                        es: "Por la carta volteada después de repartir",
                        de: "Durch die nach dem Austeilen aufgedeckte Karte",
                        nl: "Door de kaart die na het delen wordt omgedraaid"
                  },
                  {
                        en: "Player with highest bid chooses",
                        es: "El jugador con la apuesta más alta elige",
                        de: "Spieler mit höchstem Gebot wählt",
                        nl: "Speler met hoogste bod kiest"
                  },
                  {
                        en: "Always rotates clockwise",
                        es: "Siempre rota en sentido horario",
                        de: "Rotiert immer im Uhrzeigersinn",
                        nl: "Roteert altijd met de klok mee"
                  },
                  {
                        en: "Dealer always decides",
                        es: "El crupier siempre decide",
                        de: "Dealer entscheidet immer",
                        nl: "Gever beslist altijd"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "In Wizard, trump is determined by turning up the top card of the remaining deck after dealing. The suit of this card becomes trump, unless it's a Wizard or Jester.",
                  es: "En Wizard, el triunfo se determina volteando la carta superior del mazo restante después de repartir. El palo de esta carta se convierte en triunfo, a menos que sea un Wizard o Bufón.",
                  de: "Beim Wizard wird Trumpf bestimmt, indem die oberste Karte des restlichen Decks nach dem Austeilen aufgedeckt wird. Die Farbe dieser Karte wird Trumpf, es sei denn, es ist ein Wizard oder Narr.",
                  nl: "Bij Wizard wordt troef bepaald door de bovenste kaart van het resterende deck na het delen om te draaien. De kleur van deze kaart wordt troef, tenzij het een Wizard of Nar is."
            }
      },
      {
            question: {
                  en: "What is 'semi-bluffing' in poker?",
                  es: "¿Qué es el 'semi-farol' en póker?",
                  de: "Was ist 'Semi-Bluffing' beim Poker?",
                  nl: "Wat is 'semi-bluffing' bij poker?"
            },
            options: [
                  {
                        en: "Betting with a draw that could improve to best hand",
                        es: "Apostar con un proyecto que podría mejorar a la mejor mano",
                        de: "Setzen mit einem Draw, das sich zur besten Hand verbessern könnte",
                        nl: "Inzetten met een draw die kan verbeteren tot beste hand"
                  },
                  {
                        en: "Betting half your chips as a bluff",
                        es: "Apostar la mitad de tus fichas como farol",
                        de: "Halbe Chips als Bluff setzen",
                        nl: "Half je chips inzetten als bluf"
                  },
                  {
                        en: "Bluffing some of the time",
                        es: "Hacer farol parte del tiempo",
                        de: "Manchmal bluffen",
                        nl: "Een deel van de tijd bluffen"
                  },
                  {
                        en: "Half-hearted betting attempt",
                        es: "Intento de apuesta poco entusiasta",
                        de: "Halbherziger Wettversuch",
                        nl: "Halfslachtige inzetpoging"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "A semi-bluff is betting or raising with a hand that isn't currently best but has potential to improve to the winning hand, combining fold equity with draw equity.",
                  es: "Un semi-farol es apostar o subir con una mano que actualmente no es la mejor pero tiene potencial de mejorar a la mano ganadora, combinando equidad de retiro con equidad de proyecto.",
                  de: "Ein Semi-Bluff ist das Setzen oder Erhöhen mit einer Hand, die derzeit nicht die beste ist, aber das Potenzial hat, sich zur Gewinnhand zu verbessern, wobei Fold Equity mit Draw Equity kombiniert wird.",
                  nl: "Een semi-bluff is inzetten of raisen met een hand die momenteel niet de beste is maar het potentieel heeft om te verbeteren tot de winnende hand, waarbij fold equity wordt gecombineerd met draw equity."
            }
      },
      {
            question: {
                  en: "In Oh Hell (Oh Pshaw), how are points typically scored?",
                  es: "En Oh Hell (Oh Pshaw), ¿cómo se anotan típicamente los puntos?",
                  de: "Wie werden beim Oh Hell (Oh Pshaw) normalerweise Punkte gezählt?",
                  nl: "Hoe worden punten typisch gescoord bij Oh Hell (Oh Pshaw)?"
            },
            options: [
                  {
                        en: "Bonus for exactly meeting your bid",
                        es: "Bonificación por cumplir exactamente tu apuesta",
                        de: "Bonus für das exakte Erfüllen des Gebots",
                        nl: "Bonus voor exact voldoen aan je bod"
                  },
                  {
                        en: "Points for each trick taken",
                        es: "Puntos por cada baza tomada",
                        de: "Punkte für jeden genommenen Stich",
                        nl: "Punten voor elke genomen slag"
                  },
                  {
                        en: "Highest bidder gets all points",
                        es: "El postor más alto obtiene todos los puntos",
                        de: "Höchstbietender bekommt alle Punkte",
                        nl: "Hoogste bieder krijgt alle punten"
                  },
                  {
                        en: "Trump cards only count",
                        es: "Solo cuentan las cartas de triunfo",
                        de: "Nur Trumpfkarten zählen",
                        nl: "Alleen troefkaarten tellen"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "In Oh Hell, players must bid exactly how many tricks they'll take. Making the bid earns points (often 10 plus the bid), while missing it results in no points or penalties.",
                  es: "En Oh Hell, los jugadores deben apostar exactamente cuántas bazas tomarán. Cumplir la apuesta gana puntos (a menudo 10 más la apuesta), mientras que fallarla resulta en ningún punto o penalizaciones.",
                  de: "Bei Oh Hell müssen Spieler genau bieten, wie viele Stiche sie machen werden. Das Erfüllen des Gebots bringt Punkte (oft 10 plus das Gebot), während das Verfehlen keine Punkte oder Strafen bedeutet.",
                  nl: "Bij Oh Hell moeten spelers precies bieden hoeveel slagen ze zullen maken. Het bod halen levert punten op (vaak 10 plus het bod), terwijl het missen geen punten of straffen oplevert."
            }
      },
      {
            question: {
                  en: "What is 'range polarization' in poker?",
                  es: "¿Qué es la 'polarización de rango' en póker?",
                  de: "Was ist 'Range Polarization' beim Poker?",
                  nl: "Wat is 'range polarization' bij poker?"
            },
            options: [
                  {
                        en: "Having only very strong or very weak hands in range",
                        es: "Tener solo manos muy fuertes o muy débiles en el rango",
                        de: "Nur sehr starke oder sehr schwache Hände in der Range haben",
                        nl: "Alleen zeer sterke of zeer zwakke handen in je range hebben"
                  },
                  {
                        en: "Playing opposite of your opponent",
                        es: "Jugar opuesto a tu oponente",
                        de: "Gegenteilig zum Gegner spielen",
                        nl: "Het tegenovergestelde van je tegenstander spelen"
                  },
                  {
                        en: "Extreme betting patterns",
                        es: "Patrones de apuesta extremos",
                        de: "Extreme Wettmuster",
                        nl: "Extreme gokpatronen"
                  },
                  {
                        en: "Separating suited and unsuited hands",
                        es: "Separar manos del mismo palo y de diferentes palos",
                        de: "Suited und unsuited Hände trennen",
                        nl: "Suited en unsuited handen scheiden"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Range polarization means having a range weighted toward the extremes: very strong value hands and bluffs, with few medium-strength hands, often seen in large bets.",
                  es: "La polarización de rango significa tener un rango ponderado hacia los extremos: manos de valor muy fuertes y faroles, con pocas manos de fuerza media, a menudo visto en apuestas grandes.",
                  de: "Range Polarization bedeutet, eine Range zu haben, die zu den Extremen gewichtet ist: sehr starke Value-Hände und Bluffs, mit wenigen mittelstarken Händen, oft bei großen Wetten zu sehen.",
                  nl: "Range polarization betekent een range hebben die naar de uitersten neigt: zeer sterke value hands en bluffs, met weinig middelsterke handen, vaak gezien bij grote bets."
            }
      },
      {
            question: {
                  en: "In Bourré, what happens if a player fails to take any tricks after playing?",
                  es: "En Bourré, ¿qué sucede si un jugador no toma ninguna baza después de jugar?",
                  de: "Was passiert beim Bourré, wenn ein Spieler nach dem Spielen keine Stiche macht?",
                  nl: "Wat gebeurt er bij Bourré als een speler geen slagen neemt na het spelen?"
            },
            options: [
                  {
                        en: "They are 'bourréed' and must match the pot",
                        es: "Están 'bourréed' y deben igualar el bote",
                        de: "Sie sind 'bourréed' und müssen den Pot matchen",
                        nl: "Ze zijn 'bourréed' en moeten de pot matchen"
                  },
                  {
                        en: "They lose their ante only",
                        es: "Solo pierden su apuesta inicial",
                        de: "Sie verlieren nur ihren Einsatz",
                        nl: "Ze verliezen alleen hun ante"
                  },
                  {
                        en: "They win automatically next round",
                        es: "Ganan automáticamente la próxima ronda",
                        de: "Sie gewinnen automatisch die nächste Runde",
                        nl: "Ze winnen automatisch de volgende ronde"
                  },
                  {
                        en: "They become the dealer",
                        es: "Se convierten en el crupier",
                        de: "Sie werden der Dealer",
                        nl: "Ze worden de gever"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "In Bourré, if a player who stayed in the game takes no tricks, they are 'bourréed' and must pay an amount equal to the current pot, which can grow substantially.",
                  es: "En Bourré, si un jugador que se quedó en el juego no toma bazas, está 'bourréed' y debe pagar una cantidad igual al bote actual, que puede crecer sustancialmente.",
                  de: "Beim Bourré muss ein Spieler, der im Spiel geblieben ist und keine Stiche macht, 'bourréed' einen Betrag zahlen, der dem aktuellen Pot entspricht, der erheblich wachsen kann.",
                  nl: "Bij Bourré moet een speler die in het spel is gebleven en geen slagen neemt, 'bourréed' een bedrag betalen gelijk aan de huidige pot, die aanzienlijk kan groeien."
            }
      },
      {
            question: {
                  en: "What is 'expected value' (EV) in poker decision-making?",
                  es: "¿Qué es el 'valor esperado' (EV) en la toma de decisiones de póker?",
                  de: "Was ist der 'Expected Value' (EV) bei Poker-Entscheidungen?",
                  nl: "Wat is 'expected value' (EV) bij pokerbeslissingen?"
            },
            options: [
                  {
                        en: "Average profit or loss of a play over time",
                        es: "Ganancia o pérdida promedio de una jugada con el tiempo",
                        de: "Durchschnittlicher Gewinn oder Verlust eines Spielzugs im Laufe der Zeit",
                        nl: "Gemiddelde winst of verlies van een spel over tijd"
                  },
                  {
                        en: "The value you expect to win this hand",
                        es: "El valor que esperas ganar esta mano",
                        de: "Der Wert, den man diese Hand zu gewinnen erwartet",
                        nl: "De waarde die je verwacht deze hand te winnen"
                  },
                  {
                        en: "Your estimated chip stack at end",
                        es: "Tu pila de fichas estimada al final",
                        de: "Dein geschätzter Chip-Stack am Ende",
                        nl: "Je geschatte chipstapel aan het einde"
                  },
                  {
                        en: "The pot size you're hoping for",
                        es: "El tamaño del bote que esperas",
                        de: "Die Pot-Größe, die man sich erhofft",
                        nl: "De potgrootte waarop je hoopt"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "Expected value is the theoretical average amount you win or lose making a particular play if repeated many times, calculated from probabilities and outcomes.",
                  es: "El valor esperado es la cantidad promedio teórica que ganas o pierdes haciendo una jugada particular si se repite muchas veces, calculada a partir de probabilidades y resultados.",
                  de: "Expected Value ist der theoretische Durchschnittsbetrag, den man bei einem bestimmten Spielzug gewinnt oder verliert, wenn er viele Male wiederholt wird, berechnet aus Wahrscheinlichkeiten und Ergebnissen.",
                  nl: "Expected value is het theoretische gemiddelde bedrag dat je wint of verliest bij het maken van een bepaalde speelactie als deze vele malen wordt herhaald, berekend uit kansen en uitkomsten."
            }
      },
      {
            question: {
                  en: "In Pitch (Setback), what are the four traditional points scored for?",
                  es: "En Pitch (Setback), ¿para qué son los cuatro puntos tradicionales anotados?",
                  de: "Wofür werden beim Pitch (Setback) die vier traditionellen Punkte vergeben?",
                  nl: "Waarvoor zijn de vier traditionele punten gescoord bij Pitch (Setback)?"
            },
            options: [
                  {
                        en: "High, Low, Jack, and Game",
                        es: "Alta, Baja, Jota y Juego",
                        de: "High, Low, Bube und Game",
                        nl: "Hoog, Laag, Boer en Game"
                  },
                  {
                        en: "Aces, Kings, Queens, and Jacks",
                        es: "Ases, Reyes, Reinas y Jotas",
                        de: "Asse, Könige, Damen und Buben",
                        nl: "Azen, Koningen, Vrouwen en Boeren"
                  },
                  {
                        en: "First, Second, Third, and Fourth trick",
                        es: "Primera, Segunda, Tercera y Cuarta baza",
                        de: "Erster, Zweiter, Dritter und Vierter Stich",
                        nl: "Eerste, Tweede, Derde en Vierde slag"
                  },
                  {
                        en: "Spades, Hearts, Diamonds, and Clubs",
                        es: "Picas, Corazones, Diamantes y Tréboles",
                        de: "Pik, Herz, Karo und Kreuz",
                        nl: "Schoppen, Harten, Ruiten en Klaveren"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "In Pitch, points are awarded for: High (highest trump in play), Low (lowest trump in play), Jack (jack of trump), and Game (most game points in tricks taken).",
                  es: "En Pitch, se otorgan puntos por: Alta (triunfo más alto en juego), Baja (triunfo más bajo en juego), Jota (jota de triunfo) y Juego (más puntos de juego en bazas tomadas).",
                  de: "Beim Pitch werden Punkte vergeben für: High (höchster Trumpf im Spiel), Low (niedrigster Trumpf im Spiel), Bube (Trumpf-Bube) und Game (meiste Game-Punkte in genommenen Stichen).",
                  nl: "Bij Pitch worden punten toegekend voor: Hoog (hoogste troef in het spel), Laag (laagste troef in het spel), Boer (boer van troef) en Game (meeste gamepunten in genomen slagen)."
            }
      },
      {
            question: {
                  en: "What is 'ICM pressure' in tournament poker?",
                  es: "¿Qué es la 'presión ICM' en torneos de póker?",
                  de: "Was ist 'ICM-Druck' beim Turnierpoker?",
                  nl: "Wat is 'ICM pressure' bij toernooipoker?"
            },
            options: [
                  {
                        en: "Strategic constraints due to payout structure and chip stacks",
                        es: "Restricciones estratégicas debido a la estructura de pagos y pilas de fichas",
                        de: "Strategische Einschränkungen aufgrund von Auszahlungsstruktur und Chip-Stacks",
                        nl: "Strategische beperkingen door uitbetalingsstructuur en chipstapels"
                  },
                  {
                        en: "Time pressure in tournaments",
                        es: "Presión de tiempo en torneos",
                        de: "Zeitdruck in Turnieren",
                        nl: "Tijdsdruk in toernooien"
                  },
                  {
                        en: "Psychological stress from ICM calculations",
                        es: "Estrés psicológico de cálculos ICM",
                        de: "Psychologischer Stress durch ICM-Berechnungen",
                        nl: "Psychologische stress door ICM berekeningen"
                  },
                  {
                        en: "Increasing chip model requirements",
                        es: "Requisitos crecientes del modelo de fichas",
                        de: "Steigende Chip-Modell-Anforderungen",
                        nl: "Toenemende chip model vereisten"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "ICM pressure refers to strategic adjustments players must make due to the non-linear value of chips in tournaments, especially near money bubbles or final tables.",
                  es: "La presión ICM se refiere a los ajustes estratégicos que los jugadores deben hacer debido al valor no lineal de las fichas en torneos, especialmente cerca de las burbujas de dinero o mesas finales.",
                  de: "ICM-Druck bezieht sich auf strategische Anpassungen, die Spieler aufgrund des nicht-linearen Werts von Chips in Turnieren vornehmen müssen, besonders nahe Money Bubbles oder Final Tables.",
                  nl: "ICM pressure verwijst naar strategische aanpassingen die spelers moeten maken vanwege de niet-lineaire waarde van chips in toernooien, vooral nabij money bubbles of final tables."
            }
      },
      {
            question: {
                  en: "In Cassino (Casino), what is a 'sweep'?",
                  es: "En Cassino (Casino), ¿qué es un 'barrido'?",
                  de: "Was ist ein 'Sweep' beim Cassino (Casino)?",
                  nl: "Wat is een 'sweep' bij Cassino (Casino)?"
            },
            options: [
                  {
                        en: "Capturing all cards from the table at once",
                        es: "Capturar todas las cartas de la mesa a la vez",
                        de: "Alle Karten vom Tisch auf einmal erobern",
                        nl: "Alle kaarten tegelijk van de tafel pakken"
                  },
                  {
                        en: "Winning three hands in a row",
                        es: "Ganar tres manos seguidas",
                        de: "Drei Hände hintereinander gewinnen",
                        nl: "Drie handen op rij winnen"
                  },
                  {
                        en: "Taking all face cards",
                        es: "Tomar todas las cartas de figura",
                        de: "Alle Bildkarten nehmen",
                        nl: "Alle plaatjeskaarten nemen"
                  },
                  {
                        en: "Clearing your hand completely",
                        es: "Limpiar tu mano completamente",
                        de: "Die Hand vollständig leeren",
                        nl: "Je hand volledig leegmaken"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "A sweep occurs when a player captures all the cards currently on the table, earning a bonus point. It's marked by placing a card face-up in the captured pile.",
                  es: "Un barrido ocurre cuando un jugador captura todas las cartas actualmente en la mesa, ganando un punto de bonificación. Se marca colocando una carta boca arriba en la pila capturada.",
                  de: "Ein Sweep tritt auf, wenn ein Spieler alle derzeit auf dem Tisch liegenden Karten erobert und einen Bonuspunkt erhält. Es wird durch eine offen in den eroberten Stapel gelegte Karte markiert.",
                  nl: "Een sweep vindt plaats wanneer een speler alle kaarten die momenteel op de tafel liggen pakt, waarbij een bonuspunt wordt verdiend. Het wordt gemarkeerd door een kaart open in de gepakte stapel te leggen."
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
    module.exports = level10;
  } else if (typeof window !== 'undefined') {
    window.level10 = level10;
  }
})();
