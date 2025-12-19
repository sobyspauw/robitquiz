// Quiz Template - Level 8: Bord spelletjes - Scrabble
(function() {
  const level8 = {
  name: {
    en: "Scrabble",
    es: "Scrabble",
    de: "Scrabble",
    nl: "Scrabble"
  },
  questions: [
    {
      question: {
        en: "What is 'tile tracking' in competitive Scrabble?",
        es: "¿Qué es el 'rastreo de fichas' en Scrabble competitivo?",
        de: "Was ist 'Stein-Verfolgung' im Wettkampf-Scrabble?",
        nl: "Wat is 'steen volgen' in competitief Scrabble?"
      },
      options: [
        {
          en: "Recording tiles used to infer opponent's rack",
          es: "Registrar fichas usadas para inferir el rack del oponente",
          de: "Verwendete Steine aufzeichnen um Gegner-Rack zu folgern",
          nl: "Gebruikte stenen vastleggen om rek van tegenstander af te leiden"
        },
        {
          en: "GPS system for tournament tiles",
          es: "Sistema GPS para fichas de torneo",
          de: "GPS-System für Turniersteine",
          nl: "GPS-systeem voor toernooi stenen"
        },
        {
          en: "Physical arrangement method on rack",
          es: "Método de disposición física en el rack",
          de: "Physische Anordnungsmethode auf dem Rack",
          nl: "Fysieke rangschikking methode op rek"
        },
        {
          en: "Software for analyzing past games",
          es: "Software para analizar juegos pasados",
          de: "Software zur Analyse vergangener Spiele",
          nl: "Software voor het analyseren van eerdere spellen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Tile tracking means recording all tiles played to deduce which tiles remain in bag and on opponent's rack, enabling strategic play.",
        es: "El rastreo de fichas significa registrar todas las fichas jugadas para deducir qué fichas quedan en la bolsa y en el rack del oponente, permitiendo juego estratégico.",
        de: "Stein-Verfolgung bedeutet alle gespielten Steine aufzuzeichnen um zu folgern welche Steine im Beutel und auf dem Gegner-Rack bleiben, was strategisches Spiel ermöglicht.",
        nl: "Steen volgen betekent alle gespeelde stenen vastleggen om af te leiden welke stenen in zak en op rek van tegenstander blijven, wat strategisch spel mogelijk maakt."
      }
    },
    {
      question: {
        en: "What is a 'power tile' in Scrabble strategy?",
        es: "¿Qué es una 'ficha de poder' en estrategia de Scrabble?",
        de: "Was ist ein 'Power-Stein' in der Scrabble-Strategie?",
        nl: "Wat is een 'krachtsteen' in Scrabble strategie?"
      },
      options: [
        {
          en: "Blank tiles only",
          es: "Solo fichas en blanco",
          de: "Nur Blanko-Steine",
          nl: "Alleen blanco stenen"
        },
        {
          en: "S and blank tiles",
          es: "Fichas S y en blanco",
          de: "S- und Blanko-Steine",
          nl: "S en blanco stenen"
        },
        {
          en: "All 10-point tiles",
          es: "Todas las fichas de 10 puntos",
          de: "Alle 10-Punkte-Steine",
          nl: "Alle 10-punten stenen"
        },
        {
          en: "Triple Word Score squares",
          es: "Cuadrados de Puntuación de Palabra Triple",
          de: "Dreifacher-Wortwert-Felder",
          nl: "Driedubbele Woordwaarde vakken"
        }
      ],
      correct: 1,
      explanation: {
        en: "Power tiles are S and blanks - the most versatile tiles that enable bingos and hooks. Managing them strategically is crucial for winning.",
        es: "Las fichas de poder son S y blancas - las fichas más versátiles que permiten bingos y ganchos. Gestionarlas estratégicamente es crucial para ganar.",
        de: "Power-Steine sind S und Blanko - die vielseitigsten Steine die Bingos und Haken ermöglichen. Strategisches Management ist entscheidend zum Gewinnen.",
        nl: "Krachtstenen zijn S en blanco - de meest veelzijdige stenen die bingo's en haken mogelijk maken. Strategisch beheer is cruciaal voor winnen."
      }
    },
    {
      question: {
        en: "What does 'bingoing through' mean?",
        es: "¿Qué significa 'hacer bingo a través'?",
        de: "Was bedeutet 'Bingo durch'?",
        nl: "Wat betekent 'bingo door'?"
      },
      options: [
        {
          en: "Playing 7 tiles using existing board letters",
          es: "Jugar 7 fichas usando letras existentes del tablero",
          de: "7 Steine spielen unter Verwendung vorhandener Brett-Buchstaben",
          nl: "7 stenen spelen met bestaande bordletters"
        },
        {
          en: "Scoring multiple bingos in one game",
          es: "Anotar múltiples bingos en un juego",
          de: "Mehrere Bingos in einem Spiel erzielen",
          nl: "Meerdere bingo's scoren in één spel"
        },
        {
          en: "Using blank tiles for bingo",
          es: "Usar fichas en blanco para bingo",
          de: "Blanko-Steine für Bingo verwenden",
          nl: "Blanco stenen gebruiken voor bingo"
        },
        {
          en: "Challenging opponent's bingo",
          es: "Desafiar el bingo del oponente",
          de: "Gegner-Bingo herausfordern",
          nl: "Bingo van tegenstander uitdagen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Bingoing through means playing all 7 tiles by connecting through one or more letters already on the board, creating a valid word.",
        es: "Hacer bingo a través significa jugar las 7 fichas conectando a través de una o más letras ya en el tablero, creando una palabra válida.",
        de: "Bingo durch bedeutet alle 7 Steine zu spielen indem man durch einen oder mehrere Buchstaben auf dem Brett verbindet und ein gültiges Wort bildet.",
        nl: "Bingo door betekent alle 7 stenen spelen door te verbinden via één of meer letters al op het bord, een geldig woord creërend."
      }
    },
    {
      question: {
        en: "What is the 'JQXZ' problem in rack management?",
        es: "¿Qué es el problema 'JQXZ' en gestión de rack?",
        de: "Was ist das 'JQXZ'-Problem im Rack-Management?",
        nl: "Wat is het 'JQXZ' probleem in rek beheer?"
      },
      options: [
        {
          en: "These letters are banned in tournament play",
          es: "Estas letras están prohibidas en juego de torneo",
          de: "Diese Buchstaben sind im Turnierspiel verboten",
          nl: "Deze letters zijn verboden in toernooispel"
        },
        {
          en: "High-value tiles that are difficult to play",
          es: "Fichas de alto valor que son difíciles de jugar",
          de: "Hochwertige Steine die schwer zu spielen sind",
          nl: "Hoogwaardige stenen die moeilijk te spelen zijn"
        },
        {
          en: "Maximum allowed per rack is 2",
          es: "Máximo permitido por rack es 2",
          de: "Maximal erlaubt pro Rack ist 2",
          nl: "Maximum toegestaan per rek is 2"
        },
        {
          en: "They cannot be used with blank tiles",
          es: "No se pueden usar con fichas en blanco",
          de: "Sie können nicht mit Blanko-Steinen verwendet werden",
          nl: "Ze kunnen niet worden gebruikt met blanco stenen"
        }
      ],
      correct: 1,
      explanation: {
        en: "The JQXZ tiles are high-value (8-10 points) but difficult to use due to limited word options. Getting multiple can stall your game.",
        es: "Las fichas JQXZ son de alto valor (8-10 puntos) pero difíciles de usar debido a opciones limitadas de palabras. Tener múltiples puede estancar tu juego.",
        de: "Die JQXZ-Steine sind hochwertig (8-10 Punkte) aber schwer zu verwenden wegen begrenzter Wort-Optionen. Mehrere zu haben kann Ihr Spiel blockieren.",
        nl: "De JQXZ stenen zijn hoogwaardig (8-10 punten) maar moeilijk te gebruiken vanwege beperkte woordopties. Meerdere hebben kan je spel laten stagneren."
      }
    },
    {
      question: {
        en: "What is 'equity' in Scrabble analysis?",
        es: "¿Qué es 'equidad' en análisis de Scrabble?",
        de: "Was ist 'Equity' in der Scrabble-Analyse?",
        nl: "Wat is 'equity' in Scrabble analyse?"
      },
      options: [
        {
          en: "Points scored divided by tiles played",
          es: "Puntos anotados divididos por fichas jugadas",
          de: "Erzielte Punkte geteilt durch gespielte Steine",
          nl: "Punten gescoord gedeeld door gespeelde stenen"
        },
        {
          en: "Expected average score considering rack leave and future turns",
          es: "Puntuación promedio esperada considerando leave de rack y turnos futuros",
          de: "Erwartete Durchschnittspunktzahl unter Berücksichtigung von Rack-Leave und zukünftigen Zügen",
          nl: "Verwachte gemiddelde score rekening houdend met rek leave en toekomstige beurten"
        },
        {
          en: "Tournament prize money distribution",
          es: "Distribución de dinero de premios del torneo",
          de: "Turnier-Preisgeldes Verteilung",
          nl: "Toernooi prijzengeld verdeling"
        },
        {
          en: "Number of bingos per game average",
          es: "Número de bingos por promedio de juego",
          de: "Anzahl der Bingos pro Spiel-Durchschnitt",
          nl: "Aantal bingo's per spel gemiddelde"
        }
      ],
      correct: 1,
      explanation: {
        en: "Equity is the expected value of a play considering both immediate points AND quality of rack leave for future scoring potential.",
        es: "La equidad es el valor esperado de una jugada considerando tanto puntos inmediatos COMO calidad del leave de rack para potencial de puntuación futura.",
        de: "Equity ist der erwartete Wert eines Zugs unter Berücksichtigung sowohl sofortiger Punkte ALS AUCH Qualität des Rack-Leave für zukünftiges Punktepotential.",
        nl: "Equity is de verwachte waarde van een zet rekening houdend met zowel directe punten ALS kwaliteit van rek leave voor toekomstig scorepotentieel."
      }
    },
    {
      question: {
        en: "What is a 'triple-triple' in Scrabble?",
        es: "¿Qué es un 'triple-triple' en Scrabble?",
        de: "Was ist ein 'Triple-Triple' im Scrabble?",
        nl: "Wat is een 'triple-triple' in Scrabble?"
      },
      options: [
        {
          en: "Three consecutive bingos",
          es: "Tres bingos consecutivos",
          de: "Drei aufeinanderfolgende Bingos",
          nl: "Drie opeenvolgende bingo's"
        },
        {
          en: "Word covering two TWS squares (9x multiplier)",
          es: "Palabra cubriendo dos cuadrados TWS (multiplicador 9x)",
          de: "Wort das zwei TWS-Felder abdeckt (9x Multiplikator)",
          nl: "Woord dat twee TWS vakken beslaat (9x vermenigvuldiger)"
        },
        {
          en: "Using three blank tiles in one word",
          es: "Usar tres fichas en blanco en una palabra",
          de: "Drei Blanko-Steine in einem Wort verwenden",
          nl: "Drie blanco stenen gebruiken in één woord"
        },
        {
          en: "Three TLS squares in one play",
          es: "Tres cuadrados TLS en una jugada",
          de: "Drei TLS-Felder in einem Zug",
          nl: "Drie TLS vakken in één zet"
        }
      ],
      correct: 1,
      explanation: {
        en: "A triple-triple (TTT) is a word played across two Triple Word Score squares, multiplying the base score by 9 (3x3), often scoring 100+ points.",
        es: "Un triple-triple (TTT) es una palabra jugada a través de dos cuadrados de Puntuación de Palabra Triple, multiplicando la puntuación base por 9 (3x3), a menudo anotando más de 100 puntos.",
        de: "Ein Triple-Triple (TTT) ist ein Wort das über zwei Dreifacher-Wortwert-Felder gespielt wird, die Basis-Punktzahl mit 9 (3x3) multiplizierend, oft mehr als 100 Punkte erzielend.",
        nl: "Een triple-triple (TTT) is een woord gespeeld over twee Driedubbele Woordwaarde vakken, de basisscore vermenigvuldigend met 9 (3x3), vaak 100+ punten scorend."
      }
    },
    {
      question: {
        en: "What is 'simulation' in Scrabble software?",
        es: "¿Qué es 'simulación' en software de Scrabble?",
        de: "Was ist 'Simulation' in Scrabble-Software?",
        nl: "Wat is 'simulatie' in Scrabble software?"
      },
      options: [
        {
          en: "Practice games against computer",
          es: "Juegos de práctica contra computadora",
          de: "Übungsspiele gegen Computer",
          nl: "Oefenspellen tegen computer"
        },
        {
          en: "Running thousands of possible future games to evaluate moves",
          es: "Ejecutar miles de juegos futuros posibles para evaluar movimientos",
          de: "Tausende möglicher zukünftiger Spiele durchführen um Züge zu bewerten",
          nl: "Duizenden mogelijke toekomstige spellen uitvoeren om zetten te evalueren"
        },
        {
          en: "Virtual board for tournament planning",
          es: "Tablero virtual para planificación de torneos",
          de: "Virtuelles Brett für Turnierplanung",
          nl: "Virtueel bord voor toernooi planning"
        },
        {
          en: "Animated tile placement tutorial",
          es: "Tutorial animado de colocación de fichas",
          de: "Animiertes Stein-Platzierungs-Tutorial",
          nl: "Geanimeerde steen plaatsing tutorial"
        }
      ],
      correct: 1,
      explanation: {
        en: "Simulation runs thousands of random tile draws and plays to calculate which move has the highest expected win percentage, beyond simple point scoring.",
        es: "La simulación ejecuta miles de sorteos aleatorios de fichas y jugadas para calcular qué movimiento tiene el porcentaje de victoria esperado más alto, más allá de la puntuación simple.",
        de: "Simulation führt Tausende zufälliger Stein-Ziehungen und Züge durch um zu berechnen welcher Zug den höchsten erwarteten Gewinn-Prozentsatz hat, jenseits einfacher Punktezählung.",
        nl: "Simulatie voert duizenden willekeurige steen trekkingen en zetten uit om te berekenen welke zet het hoogste verwachte winpercentage heeft, verder dan eenvoudige punten tellen."
      }
    },
    {
      question: {
        en: "What is 'pre-endgame' in Scrabble?",
        es: "¿Qué es 'pre-final' en Scrabble?",
        de: "Was ist 'Vor-Endspiel' im Scrabble?",
        nl: "Wat is 'voor-eindspel' in Scrabble?"
      },
      options: [
        {
          en: "First 10 moves of the game",
          es: "Primeros 10 movimientos del juego",
          de: "Ersten 10 Züge des Spiels",
          nl: "Eerste 10 zetten van het spel"
        },
        {
          en: "Phase when fewer than 7 tiles remain in bag",
          es: "Fase cuando quedan menos de 7 fichas en la bolsa",
          de: "Phase wenn weniger als 7 Steine im Beutel verbleiben",
          nl: "Fase wanneer minder dan 7 stenen in zak blijven"
        },
        {
          en: "Final 5 minutes of timed game",
          es: "Últimos 5 minutos del juego cronometrado",
          de: "Letzten 5 Minuten des zeitbegrenzten Spiels",
          nl: "Laatste 5 minuten van getimed spel"
        },
        {
          en: "Tournament warm-up period",
          es: "Período de calentamiento del torneo",
          de: "Turnier-Aufwärmphase",
          nl: "Toernooi opwarmperiode"
        }
      ],
      correct: 1,
      explanation: {
        en: "Pre-endgame begins when fewer than 7 tiles remain in the bag, requiring different strategy as tile tracking becomes perfect knowledge.",
        es: "El pre-final comienza cuando quedan menos de 7 fichas en la bolsa, requiriendo estrategia diferente ya que el rastreo de fichas se convierte en conocimiento perfecto.",
        de: "Vor-Endspiel beginnt wenn weniger als 7 Steine im Beutel verbleiben, was andere Strategie erfordert da Stein-Verfolgung zu perfektem Wissen wird.",
        nl: "Voor-eindspel begint wanneer minder dan 7 stenen in de zak blijven, vereist andere strategie omdat steen volgen perfecte kennis wordt."
      }
    },
    {
      question: {
        en: "What are 'vowel dumps' in Scrabble?",
        es: "¿Qué son 'vertidos de vocales' en Scrabble?",
        de: "Was sind 'Vokal-Dumps' im Scrabble?",
        nl: "Wat zijn 'klinker dumps' in Scrabble?"
      },
      options: [
        {
          en: "Trading all vowels for new tiles",
          es: "Intercambiar todas las vocales por fichas nuevas",
          de: "Alle Vokale gegen neue Steine tauschen",
          nl: "Alle klinkers ruilen voor nieuwe stenen"
        },
        {
          en: "Playing multiple vowels to balance rack",
          es: "Jugar múltiples vocales para equilibrar el rack",
          de: "Mehrere Vokale spielen um Rack zu balancieren",
          nl: "Meerdere klinkers spelen om rek te balanceren"
        },
        {
          en: "Words containing only vowels",
          es: "Palabras que contienen solo vocales",
          de: "Wörter die nur Vokale enthalten",
          nl: "Woorden die alleen klinkers bevatten"
        },
        {
          en: "Discarding vowels at game end",
          es: "Descartar vocales al final del juego",
          de: "Vokale am Spielende verwerfen",
          nl: "Klinkers weggooien aan einde van spel"
        }
      ],
      correct: 1,
      explanation: {
        en: "Vowel dumps are low-scoring plays deliberately using multiple vowels to restore optimal 2-3 vowel rack balance, sacrificing immediate points for better future draws.",
        es: "Los vertidos de vocales son jugadas de baja puntuación usando deliberadamente múltiples vocales para restaurar el equilibrio óptimo de rack de 2-3 vocales, sacrificando puntos inmediatos por mejores sorteos futuros.",
        de: "Vokal-Dumps sind niedrig-scorende Züge die absichtlich mehrere Vokale verwenden um optimales 2-3 Vokal-Rack-Gleichgewicht wiederherzustellen, sofortige Punkte für bessere zukünftige Ziehungen opfernd.",
        nl: "Klinker dumps zijn laag-scorende zetten die bewust meerdere klinkers gebruiken om optimale 2-3 klinker rek balans te herstellen, directe punten opofferend voor betere toekomstige trekkingen."
      }
    },
    {
      question: {
        en: "What is 'challenge penalty' in North American Scrabble?",
        es: "¿Qué es 'penalización por desafío' en Scrabble norteamericano?",
        de: "Was ist 'Herausforderungsstrafe' im nordamerikanischen Scrabble?",
        nl: "Wat is 'uitdaging straf' in Noord-Amerikaans Scrabble?"
      },
      options: [
        {
          en: "Lose your turn if you challenge correctly",
          es: "Pierdes tu turno si desafías correctamente",
          de: "Verlieren Sie Ihren Zug wenn Sie korrekt herausfordern",
          nl: "Verlies je beurt als je correct uitdaagt"
        },
        {
          en: "Lose your turn if your challenge is wrong",
          es: "Pierdes tu turno si tu desafío es incorrecto",
          de: "Verlieren Sie Ihren Zug wenn Ihre Herausforderung falsch ist",
          nl: "Verlies je beurt als je uitdaging verkeerd is"
        },
        {
          en: "Pay 10 points to challenge",
          es: "Pagar 10 puntos para desafiar",
          de: "10 Punkte zahlen um herauszufordern",
          nl: "10 punten betalen om uit te dagen"
        },
        {
          en: "Opponent gains bonus points",
          es: "El oponente gana puntos de bonificación",
          de: "Gegner erhält Bonuspunkte",
          nl: "Tegenstander krijgt bonuspunten"
        }
      ],
      correct: 1,
      explanation: {
        en: "In North American rules, if you challenge a valid word, you lose your turn (double challenge penalty). In international rules, there's no penalty for wrong challenges.",
        es: "En reglas norteamericanas, si desafías una palabra válida, pierdes tu turno (penalización de doble desafío). En reglas internacionales, no hay penalización por desafíos incorrectos.",
        de: "Nach nordamerikanischen Regeln verlieren Sie Ihren Zug wenn Sie ein gültiges Wort herausfordern (doppelte Herausforderungsstrafe). Bei internationalen Regeln gibt es keine Strafe für falsche Herausforderungen.",
        nl: "In Noord-Amerikaanse regels verlies je je beurt als je een geldig woord uitdaagt (dubbele uitdaging straf). In internationale regels is er geen straf voor verkeerde uitdagingen."
      }
    },
    {
      question: {
        en: "What does 'fishing' mean in Scrabble?",
        es: "¿Qué significa 'pescar' en Scrabble?",
        de: "Was bedeutet 'Angeln' im Scrabble?",
        nl: "Wat betekent 'vissen' in Scrabble?"
      },
      options: [
        {
          en: "Playing a weak move hoping to draw specific tiles",
          es: "Jugar un movimiento débil esperando sacar fichas específicas",
          de: "Einen schwachen Zug spielen in der Hoffnung bestimmte Steine zu ziehen",
          nl: "Een zwakke zet spelen hopend specifieke stenen te trekken"
        },
        {
          en: "Searching for obscure words in dictionary",
          es: "Buscar palabras oscuras en el diccionario",
          de: "Nach obskuren Wörtern im Wörterbuch suchen",
          nl: "Zoeken naar obscure woorden in woordenboek"
        },
        {
          en: "Challenging multiple opponent words",
          es: "Desafiar múltiples palabras del oponente",
          de: "Mehrere Gegner-Wörter herausfordern",
          nl: "Meerdere woorden van tegenstander uitdagen"
        },
        {
          en: "Playing Q without U",
          es: "Jugar Q sin U",
          de: "Q ohne U spielen",
          nl: "Q spelen zonder U"
        }
      ],
      correct: 0,
      explanation: {
        en: "Fishing means keeping certain tiles (like S or blank) by playing suboptimal moves, hoping to draw complementary tiles for a big bingo next turn.",
        es: "Pescar significa mantener ciertas fichas (como S o en blanco) jugando movimientos subóptimos, esperando sacar fichas complementarias para un gran bingo en el siguiente turno.",
        de: "Angeln bedeutet bestimmte Steine (wie S oder Blanko) zu behalten indem man suboptimale Züge spielt, in der Hoffnung komplementäre Steine für ein großes Bingo im nächsten Zug zu ziehen.",
        nl: "Vissen betekent bepaalde stenen (zoals S of blanco) houden door suboptimale zetten te spelen, hopend complementaire stenen te trekken voor grote bingo volgende beurt."
      }
    },
    {
      question: {
        en: "What is the 'spread' in tournament Scrabble?",
        es: "¿Qué es el 'spread' en Scrabble de torneo?",
        de: "Was ist der 'Spread' im Turnier-Scrabble?",
        nl: "Wat is de 'spread' in toernooi Scrabble?"
      },
      options: [
        {
          en: "Average points per turn",
          es: "Puntos promedio por turno",
          de: "Durchschnittspunkte pro Zug",
          nl: "Gemiddelde punten per beurt"
        },
        {
          en: "Total wins minus losses",
          es: "Total de victorias menos derrotas",
          de: "Gesamtsiege minus Niederlagen",
          nl: "Totaal overwinningen minus verliezen"
        },
        {
          en: "Point differential (your score minus opponent's)",
          es: "Diferencial de puntos (tu puntuación menos la del oponente)",
          de: "Punkte-Differenz (Ihre Punktzahl minus Gegner)",
          nl: "Punten verschil (jouw score minus tegenstander)"
        },
        {
          en: "Number of games played simultaneously",
          es: "Número de juegos jugados simultáneamente",
          de: "Anzahl gleichzeitig gespielter Spiele",
          nl: "Aantal gelijktijdig gespeelde spellen"
        }
      ],
      correct: 2,
      explanation: {
        en: "Spread is the cumulative point differential across all tournament games. It's used as a tiebreaker when players have the same win-loss record.",
        es: "El spread es el diferencial de puntos acumulado a través de todos los juegos del torneo. Se usa como desempate cuando los jugadores tienen el mismo récord de victorias-derrotas.",
        de: "Spread ist die kumulative Punkte-Differenz über alle Turnierspiele. Es wird als Tiebreaker verwendet wenn Spieler den gleichen Sieg-Niederlage-Rekord haben.",
        nl: "Spread is het cumulatieve punten verschil over alle toernooispellen. Het wordt gebruikt als tiebreaker wanneer spelers hetzelfde overwinning-verlies record hebben."
      }
    },
    {
      question: {
        en: "What is 'opening theory' in Scrabble?",
        es: "¿Qué es 'teoría de apertura' en Scrabble?",
        de: "Was ist 'Eröffnungstheorie' im Scrabble?",
        nl: "Wat is 'openingstheorie' in Scrabble?"
      },
      options: [
        {
          en: "First player always plays highest-scoring word",
          es: "El primer jugador siempre juega la palabra de mayor puntuación",
          de: "Erster Spieler spielt immer das höchstbewertete Wort",
          nl: "Eerste speler speelt altijd hoogst scorende woord"
        },
        {
          en: "Strategic first moves balancing points and board control",
          es: "Movimientos iniciales estratégicos equilibrando puntos y control del tablero",
          de: "Strategische Eröffnungszüge die Punkte und Brett-Kontrolle balancieren",
          nl: "Strategische openingszetten die punten en bordcontrole balanceren"
        },
        {
          en: "Rules for tile bag randomization",
          es: "Reglas para aleatorización de bolsa de fichas",
          de: "Regeln für Steinbeutel-Randomisierung",
          nl: "Regels voor steenzak randomisatie"
        },
        {
          en: "Tournament registration procedures",
          es: "Procedimientos de registro del torneo",
          de: "Turnier-Registrierungsverfahren",
          nl: "Toernooi registratieprocedures"
        }
      ],
      correct: 1,
      explanation: {
        en: "Opening theory studies optimal first moves, balancing immediate scoring with board openness, defensive positioning, and preserving bingo opportunities.",
        es: "La teoría de apertura estudia los primeros movimientos óptimos, equilibrando puntuación inmediata con apertura del tablero, posicionamiento defensivo y preservación de oportunidades de bingo.",
        de: "Eröffnungstheorie untersucht optimale erste Züge, balanciert sofortiges Scoring mit Brett-Offenheit, defensiver Positionierung und Bewahrung von Bingo-Möglichkeiten.",
        nl: "Openingstheorie bestudeert optimale eerste zetten, balanserend directe score met bordontsluiting, defensieve positionering en behouden van bingo kansen."
      }
    },
    {
      question: {
        en: "What is a 'setup play' in Scrabble?",
        es: "¿Qué es una 'jugada de preparación' en Scrabble?",
        de: "Was ist ein 'Setup-Zug' im Scrabble?",
        nl: "Wat is een 'setup zet' in Scrabble?"
      },
      options: [
        {
          en: "Arranging tiles on rack alphabetically",
          es: "Organizar fichas en el rack alfabéticamente",
          de: "Steine auf dem Rack alphabetisch anordnen",
          nl: "Stenen op rek alfabetisch rangschikken"
        },
        {
          en: "Creating opening for high-scoring follow-up move",
          es: "Crear apertura para movimiento de seguimiento de alta puntuación",
          de: "Öffnung für hochscorenden Folgezug schaffen",
          nl: "Opening creëren voor hoog-scorende opvolgende zet"
        },
        {
          en: "Tournament board arrangement",
          es: "Disposición del tablero del torneo",
          de: "Turnier-Brett-Anordnung",
          nl: "Toernooi bord opstelling"
        },
        {
          en: "Initial tile distribution",
          es: "Distribución inicial de fichas",
          de: "Anfängliche Stein-Verteilung",
          nl: "Initiële steen verdeling"
        }
      ],
      correct: 1,
      explanation: {
        en: "A setup play sacrifices immediate points to create a premium square opening (like TWS) that you can exploit next turn, assuming opponent can't block it.",
        es: "Una jugada de preparación sacrifica puntos inmediatos para crear una apertura de cuadrado premium (como TWS) que puedes explotar en el siguiente turno, asumiendo que el oponente no puede bloquearlo.",
        de: "Ein Setup-Zug opfert sofortige Punkte um eine Premium-Feld-Öffnung (wie TWS) zu schaffen die Sie im nächsten Zug ausnutzen können, vorausgesetzt der Gegner kann es nicht blockieren.",
        nl: "Een setup zet offert directe punten op om premium vak opening (zoals TWS) te creëren die je volgende beurt kunt exploiteren, aannemend dat tegenstander het niet kan blokkeren."
      }
    },
    {
      question: {
        en: "What is the 'n-gram' approach in Scrabble word study?",
        es: "¿Qué es el enfoque 'n-grama' en estudio de palabras de Scrabble?",
        de: "Was ist der 'N-Gramm'-Ansatz im Scrabble-Wort-Studium?",
        nl: "Wat is de 'n-gram' aanpak in Scrabble woord studie?"
      },
      options: [
        {
          en: "Learning words by frequency of use",
          es: "Aprender palabras por frecuencia de uso",
          de: "Wörter nach Verwendungshäufigkeit lernen",
          nl: "Woorden leren op gebruiksfrequentie"
        },
        {
          en: "Studying common letter patterns/combinations",
          es: "Estudiar patrones/combinaciones comunes de letras",
          de: "Häufige Buchstabenmuster/-kombinationen studieren",
          nl: "Veel voorkomende letterpatronen/combinaties bestuderen"
        },
        {
          en: "Memorizing by alphabetical order",
          es: "Memorizar por orden alfabético",
          de: "Nach alphabetischer Reihenfolge auswendig lernen",
          nl: "Onthouden in alfabetische volgorde"
        },
        {
          en: "Learning only high-point words",
          es: "Aprender solo palabras de alto puntaje",
          de: "Nur hochpunktige Wörter lernen",
          nl: "Alleen hoogpunt woorden leren"
        }
      ],
      correct: 1,
      explanation: {
        en: "The n-gram approach studies common letter sequences (like -ING, -TION, RE-) to recognize word patterns faster, improving anagramming and word-finding speed.",
        es: "El enfoque n-grama estudia secuencias comunes de letras (como -ING, -TION, RE-) para reconocer patrones de palabras más rápido, mejorando la velocidad de anagramas y búsqueda de palabras.",
        de: "Der N-Gramm-Ansatz untersucht häufige Buchstabensequenzen (wie -ING, -TION, RE-) um Wortmuster schneller zu erkennen, was Anagramm- und Wort-Finde-Geschwindigkeit verbessert.",
        nl: "De n-gram aanpak bestudeert veel voorkomende letterreeksen (zoals -ING, -TION, RE-) om woordpatronen sneller te herkennen, anagrammeren en woord-vind snelheid verbeterend."
      }
    },
    {
      question: {
        en: "What is the 'AEINRST' phenomenon?",
        es: "¿Qué es el fenómeno 'AEINRST'?",
        de: "Was ist das 'AEINRST'-Phänomen?",
        nl: "Wat is het 'AEINRST' fenomeen?"
      },
      options: [
        {
          en: "Most common opening word",
          es: "Palabra de apertura más común",
          de: "Häufigstes Eröffnungswort",
          nl: "Meest voorkomende openingswoord"
        },
        {
          en: "These 7 letters form 150+ valid anagrams",
          es: "Estas 7 letras forman más de 150 anagramas válidos",
          de: "Diese 7 Buchstaben bilden über 150 gültige Anagramme",
          nl: "Deze 7 letters vormen 150+ geldige anagrammen"
        },
        {
          en: "Optimal rack balance ratio",
          es: "Relación óptima de equilibrio de rack",
          de: "Optimales Rack-Balance-Verhältnis",
          nl: "Optimale rek balans verhouding"
        },
        {
          en: "Tournament seeding system",
          es: "Sistema de clasificación de torneos",
          de: "Turnier-Setzungssystem",
          nl: "Toernooi plaatsing systeem"
        }
      ],
      correct: 1,
      explanation: {
        en: "AEINRST is the most productive 7-letter combination, forming over 150 valid English words (like NASTIER, RETAINS, STAINER, etc.), making it crucial to memorize.",
        es: "AEINRST es la combinación de 7 letras más productiva, formando más de 150 palabras inglesas válidas (como NASTIER, RETAINS, STAINER, etc.), siendo crucial memorizarlas.",
        de: "AEINRST ist die produktivste 7-Buchstaben-Kombination, bildet über 150 gültige englische Wörter (wie NASTIER, RETAINS, STAINER, etc.), was sie entscheidend zum Auswendiglernen macht.",
        nl: "AEINRST is de meest productieve 7-letter combinatie, vormt over 150 geldige Engelse woorden (zoals NASTIER, RETAINS, STAINER, etc.), cruciaal om te onthouden."
      }
    },
    {
      question: {
        en: "What is 'defensive play' in Scrabble?",
        es: "¿Qué es 'juego defensivo' en Scrabble?",
        de: "Was ist 'defensives Spiel' im Scrabble?",
        nl: "Wat is 'defensief spel' in Scrabble?"
      },
      options: [
        {
          en: "Only challenging opponent's questionable words",
          es: "Solo desafiar palabras cuestionables del oponente",
          de: "Nur fragwürdige Gegner-Wörter herausfordern",
          nl: "Alleen twijfelachtige woorden van tegenstander uitdagen"
        },
        {
          en: "Playing to minimize opponent's scoring opportunities",
          es: "Jugar para minimizar oportunidades de puntuación del oponente",
          de: "Spielen um die Scoringmöglichkeiten des Gegners zu minimieren",
          nl: "Spelen om score kansen van tegenstander te minimaliseren"
        },
        {
          en: "Using time clock strategically",
          es: "Usar reloj de tiempo estratégicamente",
          de: "Zeitschaltuhr strategisch verwenden",
          nl: "Tijdklok strategisch gebruiken"
        },
        {
          en: "Protecting your rack from being seen",
          es: "Proteger tu rack de ser visto",
          de: "Ihr Rack vor Einsicht schützen",
          nl: "Je rek beschermen tegen zien"
        }
      ],
      correct: 1,
      explanation: {
        en: "Defensive play means intentionally closing the board, avoiding creating bingo lanes or premium square setups that opponent could exploit when you're ahead.",
        es: "El juego defensivo significa cerrar intencionalmente el tablero, evitando crear carriles de bingo o configuraciones de cuadrados premium que el oponente podría explotar cuando vas adelante.",
        de: "Defensives Spiel bedeutet absichtlich das Brett zu schließen, Vermeidung von Bingo-Bahnen oder Premium-Feld-Setups die der Gegner ausnutzen könnte wenn Sie führen.",
        nl: "Defensief spel betekent opzettelijk het bord sluiten, vermijden van bingo banen of premium vak setups creëren die tegenstander kan exploiteren als je voorligt."
      }
    },
    {
      question: {
        en: "What is a 'bingo stem' in Scrabble study?",
        es: "¿Qué es una 'raíz de bingo' en estudio de Scrabble?",
        de: "Was ist ein 'Bingo-Stamm' im Scrabble-Studium?",
        nl: "Wat is een 'bingo stam' in Scrabble studie?"
      },
      options: [
        {
          en: "7-letter base word that can be extended",
          es: "Palabra base de 7 letras que se puede extender",
          de: "7-Buchstaben-Grundwort das erweitert werden kann",
          nl: "7-letter basiswoord dat kan worden uitgebreid"
        },
        {
          en: "Common 6-letter combination forming many 7-letter words",
          es: "Combinación común de 6 letras formando muchas palabras de 7 letras",
          de: "Häufige 6-Buchstaben-Kombination die viele 7-Buchstaben-Wörter bildet",
          nl: "Veel voorkomende 6-letter combinatie vormend veel 7-letter woorden"
        },
        {
          en: "Pattern for memorizing word lists",
          es: "Patrón para memorizar listas de palabras",
          de: "Muster zum Auswendiglernen von Wortlisten",
          nl: "Patroon voor onthouden van woordenlijsten"
        },
        {
          en: "Root word in multiple languages",
          es: "Palabra raíz en múltiples idiomas",
          de: "Wurzelwort in mehreren Sprachen",
          nl: "Stamwoord in meerdere talen"
        }
      ],
      correct: 1,
      explanation: {
        en: "A bingo stem is a common 6-letter combination (like SATINE, RETAIN) that combines with many different 7th letters to form valid 7-letter bingos.",
        es: "Una raíz de bingo es una combinación común de 6 letras (como SATINE, RETAIN) que se combina con muchas séptimas letras diferentes para formar bingos válidos de 7 letras.",
        de: "Ein Bingo-Stamm ist eine häufige 6-Buchstaben-Kombination (wie SATINE, RETAIN) die sich mit vielen verschiedenen 7. Buchstaben zu gültigen 7-Buchstaben-Bingos kombiniert.",
        nl: "Een bingo stam is een veel voorkomende 6-letter combinatie (zoals SATINE, RETAIN) die combineert met veel verschillende 7e letters om geldige 7-letter bingo's te vormen."
      }
    },
    {
      question: {
        en: "What is the 'first-player advantage' in Scrabble?",
        es: "¿Qué es la 'ventaja del primer jugador' en Scrabble?",
        de: "Was ist der 'Erster-Spieler-Vorteil' im Scrabble?",
        nl: "Wat is het 'eerste-speler voordeel' in Scrabble?"
      },
      options: [
        {
          en: "Access to center Double Word Score",
          es: "Acceso al Puntuación de Palabra Doble central",
          de: "Zugang zum zentralen Doppelten Wortwert",
          nl: "Toegang tot centrale Dubbele Woordwaarde"
        },
        {
          en: "Statistical 54% win rate over thousands of games",
          es: "Tasa de victoria estadística del 54% en miles de juegos",
          de: "Statistische 54% Gewinnrate über Tausende von Spielen",
          nl: "Statistische 54% winpercentage over duizenden spellen"
        },
        {
          en: "Extra tile on first turn",
          es: "Ficha extra en primer turno",
          de: "Extra-Stein im ersten Zug",
          nl: "Extra steen op eerste beurt"
        },
        {
          en: "More time on clock",
          es: "Más tiempo en el reloj",
          de: "Mehr Zeit auf der Uhr",
          nl: "Meer tijd op klok"
        }
      ],
      correct: 1,
      explanation: {
        en: "Statistical analysis shows the first player wins approximately 54% of games at top level, mainly due to one extra turn throughout the game.",
        es: "El análisis estadístico muestra que el primer jugador gana aproximadamente el 54% de los juegos a nivel superior, principalmente debido a un turno extra durante el juego.",
        de: "Statistische Analyse zeigt dass der erste Spieler ungefähr 54% der Spiele auf Top-Niveau gewinnt, hauptsächlich wegen eines zusätzlichen Zugs während des Spiels.",
        nl: "Statistische analyse toont dat de eerste speler ongeveer 54% van spellen wint op topniveau, voornamelijk vanwege één extra beurt gedurende het spel."
      }
    },
    {
      question: {
        en: "What is 'N-hook' strategy?",
        es: "¿Qué es la estrategia 'N-gancho'?",
        de: "Was ist 'N-Haken'-Strategie?",
        nl: "Wat is 'N-haak' strategie?"
      },
      options: [
        {
          en: "Only playing words with letter N",
          es: "Solo jugar palabras con letra N",
          de: "Nur Wörter mit Buchstabe N spielen",
          nl: "Alleen woorden spelen met letter N"
        },
        {
          en: "Adding N to create 2-letter words for parallel plays",
          es: "Agregar N para crear palabras de 2 letras para jugadas paralelas",
          de: "N hinzufügen um 2-Buchstaben-Wörter für parallele Züge zu bilden",
          nl: "N toevoegen om 2-letter woorden te maken voor parallelle zetten"
        },
        {
          en: "Northern tournament variation",
          es: "Variación de torneo del norte",
          de: "Nördliche Turnier-Variante",
          nl: "Noordelijke toernooi variatie"
        },
        {
          en: "Negative scoring penalty",
          es: "Penalización de puntuación negativa",
          de: "Negative Scoring-Strafe",
          nl: "Negatieve score straf"
        }
      ],
      correct: 1,
      explanation: {
        en: "N-hooks use the letter N (which forms many 2-letter words: AN, EN, IN, ON, UN) for parallel plays, creating multiple words simultaneously for high scores.",
        es: "Los N-ganchos usan la letra N (que forma muchas palabras de 2 letras: AN, EN, IN, ON, UN) para jugadas paralelas, creando múltiples palabras simultáneamente para altas puntuaciones.",
        de: "N-Haken verwenden den Buchstaben N (der viele 2-Buchstaben-Wörter bildet: AN, EN, IN, ON, UN) für parallele Züge, mehrere Wörter gleichzeitig für hohe Punktzahlen bildend.",
        nl: "N-haken gebruiken de letter N (die veel 2-letter woorden vormt: AN, EN, IN, ON, UN) voor parallelle zetten, meerdere woorden tegelijk creërend voor hoge scores."
      }
    },
    {
      question: {
        en: "What is 'taking inference' in Scrabble?",
        es: "¿Qué es 'tomar inferencia' en Scrabble?",
        de: "Was ist 'Schlussfolgerung ziehen' im Scrabble?",
        nl: "Wat is 'inferentie nemen' in Scrabble?"
      },
      options: [
        {
          en: "Deducing opponent's rack from their plays and passes",
          es: "Deducir el rack del oponente de sus jugadas y pases",
          de: "Gegner-Rack aus seinen Zügen und Pässen ableiten",
          nl: "Rek van tegenstander afleiden uit hun zetten en passen"
        },
        {
          en: "Accepting opponent's word without challenge",
          es: "Aceptar palabra del oponente sin desafío",
          de: "Gegner-Wort ohne Herausforderung akzeptieren",
          nl: "Woord van tegenstander accepteren zonder uitdaging"
        },
        {
          en: "Making logical word extensions",
          es: "Hacer extensiones lógicas de palabras",
          de: "Logische Wort-Erweiterungen machen",
          nl: "Logische woord uitbreidingen maken"
        },
        {
          en: "Inferring tile values from board position",
          es: "Inferir valores de fichas de la posición del tablero",
          de: "Stein-Werte aus Brett-Position ableiten",
          nl: "Steenwaarden afleiden uit bordpositie"
        }
      ],
      correct: 0,
      explanation: {
        en: "Taking inference means using opponent's previous moves, passes, and exchanges to deduce what tiles they likely hold, informing your defensive and offensive strategy.",
        es: "Tomar inferencia significa usar los movimientos previos del oponente, pases e intercambios para deducir qué fichas probablemente tienen, informando tu estrategia defensiva y ofensiva.",
        de: "Schlussfolgerung ziehen bedeutet frühere Züge, Pässe und Tausche des Gegners zu verwenden um abzuleiten welche Steine sie wahrscheinlich halten, Ihre defensive und offensive Strategie informierend.",
        nl: "Inferentie nemen betekent vorige zetten, passen en ruilen van tegenstander gebruiken om af te leiden welke stenen ze waarschijnlijk hebben, je defensieve en offensieve strategie informerend."
      }
    },
    {
      question: {
        en: "What is 'rack turnover' strategy?",
        es: "¿Qué es la estrategia de 'rotación de rack'?",
        de: "Was ist 'Rack-Umschlag'-Strategie?",
        nl: "Wat is 'rek omzet' strategie?"
      },
      options: [
        {en: "Flipping rack upside down", es: "Voltear rack al revés", de: "Rack umdrehen", nl: "Rek omdraaien"},
        {en: "Playing maximum tiles per turn to draw fresh tiles frequently", es: "Jugar máximo de fichas por turno para sacar fichas frescas frecuentemente", de: "Maximum Steine pro Zug spielen um häufig frische Steine zu ziehen", nl: "Maximum stenen per beurt spelen om vaak verse stenen te trekken"},
        {en: "Exchanging all tiles every turn", es: "Intercambiar todas las fichas cada turno", de: "Alle Steine jeden Zug tauschen", nl: "Alle stenen elke beurt ruilen"},
        {en: "Rotating between offensive and defensive plays", es: "Rotar entre jugadas ofensivas y defensivas", de: "Zwischen offensiven und defensiven Zügen rotieren", nl: "Roteren tussen offensieve en defensieve zetten"}
      ],
      correct: 1,
      explanation: {
        en: "Rack turnover means playing 4-5+ tiles per turn to cycle through bag quickly, increasing bingo chances by seeing more tile combinations.",
        es: "La rotación de rack significa jugar 4-5+ fichas por turno para ciclar a través de la bolsa rápidamente, aumentando oportunidades de bingo al ver más combinaciones de fichas.",
        de: "Rack-Umschlag bedeutet 4-5+ Steine pro Zug zu spielen um schnell durch den Beutel zu zyklieren, Bingo-Chancen durch Sehen mehr Stein-Kombinationen erhöhend.",
        nl: "Rek omzet betekent 4-5+ stenen per beurt spelen om snel door zak te fietsen, bingo kansen vergrotend door meer steen combinaties te zien."
      }
    },
    {
      question: {
        en: "What is 'board texture' analysis?",
        es: "¿Qué es análisis de 'textura del tablero'?",
        de: "Was ist 'Brett-Textur'-Analyse?",
        nl: "Wat is 'bord textuur' analyse?"
      },
      options: [
        {en: "Physical board surface quality", es: "Calidad de superficie física del tablero", de: "Physische Brett-Oberflächenqualität", nl: "Fysieke bord oppervlakte kwaliteit"},
        {en: "Evaluating openness vs closedness of scoring opportunities", es: "Evaluar apertura vs cierre de oportunidades de puntuación", de: "Offenheit vs Geschlossenheit von Scoring-Möglichkeiten bewerten", nl: "Openheid vs geslotenheid van score kansen evalueren"},
        {en: "Pattern of premium squares", es: "Patrón de cuadrados premium", de: "Muster von Premium-Feldern", nl: "Patroon van premium vakken"},
        {en: "Color scheme of game board", es: "Esquema de colores del tablero de juego", de: "Farbschema des Spielbretts", nl: "Kleurenschema van spelbord"}
      ],
      correct: 1,
      explanation: {
        en: "Board texture analyzes whether the board is 'open' (many scoring lanes/hooks) or 'closed' (blocked, defensive), affecting strategic decisions about aggressive vs conservative play.",
        es: "La textura del tablero analiza si el tablero está 'abierto' (muchos carriles/ganchos de puntuación) o 'cerrado' (bloqueado, defensivo), afectando decisiones estratégicas sobre juego agresivo vs conservador.",
        de: "Brett-Textur analysiert ob das Brett 'offen' (viele Scoring-Bahnen/Haken) oder 'geschlossen' (blockiert, defensiv) ist, was strategische Entscheidungen über aggressives vs konservatives Spiel beeinflusst.",
        nl: "Bord textuur analyseert of het bord 'open' (veel score banen/haken) of 'gesloten' (geblokkeerd, defensief) is, wat strategische beslissingen over agressief vs conservatief spel beïnvloedt."
      }
    },
    {
      question: {
        en: "What is a 'comeback scenario' in tournament play?",
        es: "¿Qué es un 'escenario de remontada' en juego de torneo?",
        de: "Was ist ein 'Comeback-Szenario' im Turnierspiel?",
        nl: "Wat is een 'comeback scenario' in toernooispel?"
      },
      options: [
        {en: "Playing aggressively when behind to create bingo opportunities", es: "Jugar agresivamente cuando vas atrás para crear oportunidades de bingo", de: "Aggressiv spielen wenn zurück um Bingo-Möglichkeiten zu schaffen", nl: "Agressief spelen wanneer achter om bingo kansen te creëren"},
        {en: "Challenging all opponent words", es: "Desafiar todas las palabras del oponente", de: "Alle Gegner-Wörter herausfordern", nl: "Alle woorden van tegenstander uitdagen"},
        {en: "Requesting timeout to regroup", es: "Solicitar tiempo fuera para reagruparse", de: "Timeout anfordern um sich neu zu gruppieren", nl: "Timeout aanvragen om te hergroeperen"},
        {en: "Exchanging tiles repeatedly", es: "Intercambiar fichas repetidamente", de: "Steine wiederholt tauschen", nl: "Stenen herhaaldelijk ruilen"}
      ],
      correct: 0,
      explanation: {
        en: "When trailing by 50+ points, optimal strategy shifts to opening the board aggressively, creating high-variance scoring chances even if it also helps opponent.",
        es: "Cuando vas atrás por más de 50 puntos, la estrategia óptima cambia a abrir el tablero agresivamente, creando oportunidades de puntuación de alta varianza incluso si también ayuda al oponente.",
        de: "Wenn 50+ Punkte zurück, verschiebt sich optimale Strategie zu aggressivem Brett-Öffnen, hochvariante Scoring-Chancen schaffend selbst wenn es auch dem Gegner hilft.",
        nl: "Wanneer achterliggen met 50+ punten, verschuift optimale strategie naar agressief bord openen, hoge-variantie score kansen creërend zelfs als het ook tegenstander helpt."
      }
    },
    {
      question: {
        en: "What is 'tile smoothing'?",
        es: "¿Qué es 'suavizado de fichas'?",
        de: "Was ist 'Stein-Glättung'?",
        nl: "Wat is 'steen gladmaken'?"
      },
      options: [
        {en: "Physically polishing worn tiles", es: "Pulir físicamente fichas desgastadas", de: "Abgenutzte Steine physisch polieren", nl: "Versleten stenen fysiek polijsten"},
        {en: "Playing tiles to achieve balanced vowel/consonant ratio", es: "Jugar fichas para lograr relación equilibrada vocal/consonante", de: "Steine spielen um ausgewogenes Vokal/Konsonant-Verhältnis zu erreichen", nl: "Stenen spelen om gebalanceerde klinker/medeklinker verhouding te bereiken"},
        {en: "Arranging tiles neatly on rack", es: "Organizar fichas ordenadamente en rack", de: "Steine ordentlich auf Rack anordnen", nl: "Stenen netjes op rek rangschikken"},
        {en: "Removing duplicate tiles", es: "Eliminar fichas duplicadas", de: "Doppelte Steine entfernen", nl: "Dubbele stenen verwijderen"}
      ],
      correct: 1,
      explanation: {
        en: "Tile smoothing plays awkward combinations (like 3 I's or VWXZ) to restore ideal 2-3 vowel, high-synergy rack composition for future bingo potential.",
        es: "El suavizado de fichas juega combinaciones incómodas (como 3 I's o VWXZ) para restaurar composición ideal de rack de 2-3 vocales con alta sinergia para potencial de bingo futuro.",
        de: "Stein-Glättung spielt unangenehme Kombinationen (wie 3 I's oder VWXZ) um ideale 2-3 Vokal, hohe-Synergie Rack-Zusammensetzung für zukünftiges Bingo-Potential wiederherzustellen.",
        nl: "Steen gladmaken speelt onhandige combinaties (zoals 3 I's of VWXZ) om ideale 2-3 klinker, hoge-synergie rek compositie voor toekomstig bingo potentieel te herstellen."
      }
    },
    {
      question: {
        en: "What is 'probabilistic tracking' in endgame?",
        es: "¿Qué es 'rastreo probabilístico' en final?",
        de: "Was ist 'probabilistisches Tracking' im Endspiel?",
        nl: "Wat is 'probabilistisch volgen' in eindspel?"
      },
      options: [
        {en: "Guessing opponent's tiles randomly", es: "Adivinar fichas del oponente aleatoriamente", de: "Gegner-Steine zufällig raten", nl: "Stenen van tegenstander willekeurig raden"},
        {en: "Using known unseen tiles to calculate exact win probability per move", es: "Usar fichas no vistas conocidas para calcular probabilidad exacta de victoria por movimiento", de: "Bekannte ungesehene Steine verwenden um exakte Gewinnwahrscheinlichkeit pro Zug zu berechnen", nl: "Bekende ongeziene stenen gebruiken om exacte winkans per zet te berekenen"},
        {en: "Estimating time remaining", es: "Estimar tiempo restante", de: "Verbleibende Zeit schätzen", nl: "Resterende tijd schatten"},
        {en: "Predicting opponent's next move", es: "Predecir siguiente movimiento del oponente", de: "Nächsten Gegner-Zug vorhersagen", nl: "Volgende zet van tegenstander voorspellen"}
      ],
      correct: 1,
      explanation: {
        en: "When tracking reveals exact unseen tiles, you can calculate precise win probability for each move based on all possible opponent responses and bag draws.",
        es: "Cuando el rastreo revela fichas exactas no vistas, puedes calcular probabilidad precisa de victoria para cada movimiento basado en todas las posibles respuestas del oponente y sorteos de bolsa.",
        de: "Wenn Tracking exakte ungesehene Steine offenbart, können Sie präzise Gewinnwahrscheinlichkeit für jeden Zug basierend auf allen möglichen Gegner-Reaktionen und Beutel-Ziehungen berechnen.",
        nl: "Wanneer volgen exacte ongeziene stenen onthult, kun je precieze winkans voor elke zet berekenen gebaseerd op alle mogelijke tegenstander reacties en zak trekkingen."
      }
    },
    {
      question: {
        en: "What is 'scouting' in tournament context?",
        es: "¿Qué es 'reconocimiento' en contexto de torneo?",
        de: "Was ist 'Scouting' im Turnier-Kontext?",
        nl: "Wat is 'scouten' in toernooi context?"
      },
      options: [
        {en: "Observing opponent's previous games to learn their style", es: "Observar juegos previos del oponente para aprender su estilo", de: "Frühere Spiele des Gegners beobachten um seinen Stil zu lernen", nl: "Eerdere spellen van tegenstander observeren om hun stijl te leren"},
        {en: "Finding vacant tables", es: "Encontrar mesas vacantes", de: "Freie Tische finden", nl: "Lege tafels vinden"},
        {en: "Searching for word patterns", es: "Buscar patrones de palabras", de: "Nach Wortmustern suchen", nl: "Zoeken naar woordpatronen"},
        {en: "Tournament venue reconnaissance", es: "Reconocimiento del lugar del torneo", de: "Turnier-Veranstaltungsort-Erkundung", nl: "Toernooi locatie verkenning"}
      ],
      correct: 0,
      explanation: {
        en: "Scouting means watching opponents' games between rounds to identify their tendencies (aggressive/defensive, strong/weak word knowledge areas) for strategic advantage.",
        es: "Reconocimiento significa observar juegos de oponentes entre rondas para identificar sus tendencias (agresivo/defensivo, áreas fuertes/débiles de conocimiento de palabras) para ventaja estratégica.",
        de: "Scouting bedeutet Gegner-Spiele zwischen Runden zu beobachten um ihre Tendenzen (aggressiv/defensiv, starke/schwache Wort-Kenntnisbereiche) für strategischen Vorteil zu identifizieren.",
        nl: "Scouten betekent spellen van tegenstanders tussen rondes bekijken om hun tendensen (agressief/defensief, sterke/zwakke woord kennis gebieden) voor strategisch voordeel te identificeren."
      }
    },
    {
      question: {
        en: "What is 'leave analysis' in move evaluation?",
        es: "¿Qué es 'análisis de leave' en evaluación de movimiento?",
        de: "Was ist 'Leave-Analyse' in Zug-Bewertung?",
        nl: "Wat is 'leave analyse' in zet evaluatie?"
      },
      options: [
        {en: "Deciding when to leave tournament", es: "Decidir cuándo dejar torneo", de: "Entscheiden wann Turnier verlassen", nl: "Beslissen wanneer toernooi verlaten"},
        {en: "Evaluating future potential of remaining tiles after each play", es: "Evaluar potencial futuro de fichas restantes después de cada jugada", de: "Zukünftiges Potential verbleibender Steine nach jedem Zug bewerten", nl: "Toekomstig potentieel van overgebleven stenen na elke zet evalueren"},
        {en: "Counting tiles left in bag", es: "Contar fichas restantes en bolsa", de: "Verbleibende Steine im Beutel zählen", nl: "Overgebleven stenen in zak tellen"},
        {en: "Reviewing mistakes after game", es: "Revisar errores después del juego", de: "Fehler nach Spiel überprüfen", nl: "Fouten na spel beoordelen"}
      ],
      correct: 1,
      explanation: {
        en: "Leave analysis weighs not just immediate score but quality of tiles remaining: balanced vowels, synergistic consonants, avoiding duplicates or awkward combinations like VVWW.",
        es: "El análisis de leave evalúa no solo puntuación inmediata sino calidad de fichas restantes: vocales equilibradas, consonantes sinérgicas, evitando duplicados o combinaciones incómodas como VVWW.",
        de: "Leave-Analyse wiegt nicht nur sofortige Punktzahl sondern Qualität verbleibender Steine: ausgeglichene Vokale, synergistische Konsonanten, Vermeidung von Duplikaten oder unangenehmen Kombinationen wie VVWW.",
        nl: "Leave analyse weegt niet alleen directe score maar kwaliteit van overgebleven stenen: gebalanceerde klinkers, synergistische medeklinkers, vermijden van duplicaten of onhandige combinaties zoals VVWW."
      }
    },
    {
      question: {
        en: "What is 'timing out' strategy in close endgames?",
        es: "¿Qué es la estrategia de 'agotar el tiempo' en finales cerrados?",
        de: "Was ist 'Zeitablauf'-Strategie in knappen Endspielen?",
        nl: "Wat is 'tijd uitlopen' strategie in krappe eindspellen?"
      },
      options: [
        {en: "Deliberately exceeding time limit", es: "Exceder deliberadamente límite de tiempo", de: "Zeitlimit absichtlich überschreiten", nl: "Opzettelijk tijdslimiet overschrijden"},
        {en: "Using all remaining time to force opponent's time pressure", es: "Usar todo el tiempo restante para forzar presión de tiempo del oponente", de: "Alle verbleibende Zeit verwenden um Zeitdruck des Gegners zu erzwingen", nl: "Alle resterende tijd gebruiken om tijdsdruk van tegenstander te forceren"},
        {en: "Calling timeout between moves", es: "Pedir tiempo fuera entre movimientos", de: "Timeout zwischen Zügen aufrufen", nl: "Timeout roepen tussen zetten"},
        {en: "Playing very quickly", es: "Jugar muy rápidamente", de: "Sehr schnell spielen", nl: "Zeer snel spelen"}
      ],
      correct: 1,
      explanation: {
        en: "When ahead in endgame but low on time, using your remaining seconds fully can put opponent in time pressure, potentially forcing errors even if you incur 10-point overtime penalties.",
        es: "Cuando vas adelante en final pero con poco tiempo, usar tus segundos restantes completamente puede poner al oponente en presión de tiempo, potencialmente forzando errores incluso si incurres en penalizaciones de 10 puntos por tiempo extra.",
        de: "Wenn im Endspiel vorne aber wenig Zeit, volle Nutzung verbleibender Sekunden kann Gegner unter Zeitdruck setzen, potenziell Fehler erzwingend selbst wenn Sie 10-Punkte-Überschreitungsstrafen erhalten.",
        nl: "Wanneer voor in eindspel maar weinig tijd, volledige gebruik van resterende seconden kan tegenstander onder tijdsdruk zetten, potentieel fouten afdwingen zelfs als je 10-punten overtime straffen oploopt."
      }
    },
    {
      question: {
        en: "What is 'word knowledge depth vs breadth'?",
        es: "¿Qué es 'profundidad vs amplitud de conocimiento de palabras'?",
        de: "Was ist 'Wort-Wissens-Tiefe vs Breite'?",
        nl: "Wat is 'woord kennis diepte vs breedte'?"
      },
      options: [
        {en: "Knowing many obscure words vs knowing common words perfectly", es: "Conocer muchas palabras oscuras vs conocer palabras comunes perfectamente", de: "Viele obskure Wörter kennen vs häufige Wörter perfekt kennen", nl: "Veel obscure woorden kennen vs gewone woorden perfect kennen"},
        {en: "Learning words by length categories", es: "Aprender palabras por categorías de longitud", de: "Wörter nach Längen-Kategorien lernen", nl: "Woorden leren per lengte categorieën"},
        {en: "Dictionary coverage percentage", es: "Porcentaje de cobertura del diccionario", de: "Wörterbuch-Abdeckungs-Prozentsatz", nl: "Woordenboek dekking percentage"},
        {en: "Multilingual vocabulary", es: "Vocabulario multilingüe", de: "Mehrsprachiger Wortschatz", nl: "Meertalige woordenschat"}
      ],
      correct: 0,
      explanation: {
        en: "Depth means mastering all common high-probability words (2s, 3s, SATIRE stems). Breadth means learning rare obscure words. Depth provides better tournament ROI.",
        es: "Profundidad significa dominar todas las palabras comunes de alta probabilidad (2s, 3s, raíces SATIRE). Amplitud significa aprender palabras raras oscuras. La profundidad proporciona mejor ROI de torneo.",
        de: "Tiefe bedeutet alle häufigen hochwahrscheinlichen Wörter (2s, 3s, SATIRE-Stämme) zu meistern. Breite bedeutet seltene obskure Wörter zu lernen. Tiefe bietet besseren Turnier-ROI.",
        nl: "Diepte betekent alle gewone hoge-waarschijnlijkheid woorden (2s, 3s, SATIRE stammen) beheersen. Breedte betekent zeldzame obscure woorden leren. Diepte biedt betere toernooi ROI."
      }
    },
    {
      question: {
        en: "What is a 'bingo trap'?",
        es: "¿Qué es una 'trampa de bingo'?",
        de: "Was ist eine 'Bingo-Falle'?",
        nl: "Wat is een 'bingo val'?"
      },
      options: [
        {en: "Setting up apparent bingo lane that's actually blocked", es: "Configurar carril de bingo aparente que en realidad está bloqueado", de: "Scheinbare Bingo-Bahn einrichten die tatsächlich blockiert ist", nl: "Schijnbare bingo baan opzetten die eigenlijk geblokkeerd is"},
        {en: "Challenging opponent's bingo word", es: "Desafiar palabra de bingo del oponente", de: "Gegner-Bingo-Wort herausfordern", nl: "Bingo woord van tegenstander uitdagen"},
        {en: "Playing invalid 7-letter word", es: "Jugar palabra inválida de 7 letras", de: "Ungültiges 7-Buchstaben-Wort spielen", nl: "Ongeldig 7-letter woord spelen"},
        {en: "Scoring lower than 50 points on bingo", es: "Anotar menos de 50 puntos en bingo", de: "Weniger als 50 Punkte auf Bingo erzielen", nl: "Minder dan 50 punten scoren op bingo"}
      ],
      correct: 0,
      explanation: {
        en: "A bingo trap creates an attractive-looking open lane that actually has no valid plays due to awkward letter combinations, tempting opponent to waste a turn fishing for it.",
        es: "Una trampa de bingo crea un carril abierto de apariencia atractiva que en realidad no tiene jugadas válidas debido a combinaciones de letras incómodas, tentando al oponente a desperdiciar un turno pescando por él.",
        de: "Eine Bingo-Falle schafft eine attraktiv aussehende offene Bahn die tatsächlich keine gültigen Züge wegen unangenehmer Buchstaben-Kombinationen hat, Gegner verlockend einen Zug zu verschwenden darauf zu angeln.",
        nl: "Een bingo val creëert een aantrekkelijk ogende open baan die eigenlijk geen geldige zetten heeft door onhandige letter combinaties, tegenstander verleidend een beurt te verspillen erop vissend."
      }
    },
    {
      question: {
        en: "What is 'parallel scoring' technique?",
        es: "¿Qué es la técnica de 'puntuación paralela'?",
        de: "Was ist 'Paralleles Scoring'-Technik?",
        nl: "Wat is 'parallelle score' techniek?"
      },
      options: [
        {en: "Scoring two games simultaneously", es: "Anotar dos juegos simultáneamente", de: "Zwei Spiele gleichzeitig werten", nl: "Twee spellen gelijktijdig scoren"},
        {en: "Playing word parallel to existing word to form multiple 2-letter words", es: "Jugar palabra paralela a palabra existente para formar múltiples palabras de 2 letras", de: "Wort parallel zu bestehendem Wort spielen um mehrere 2-Buchstaben-Wörter zu bilden", nl: "Woord parallel aan bestaand woord spelen om meerdere 2-letter woorden te vormen"},
        {en: "Using spreadsheet to track scores", es: "Usar hoja de cálculo para rastrear puntuaciones", de: "Tabelle verwenden um Punktestände zu verfolgen", nl: "Spreadsheet gebruiken om scores te volgen"},
        {en: "Comparing scores with other tables", es: "Comparar puntuaciones con otras mesas", de: "Punktestände mit anderen Tischen vergleichen", nl: "Scores vergelijken met andere tafels"}
      ],
      correct: 1,
      explanation: {
        en: "Parallel plays score for main word PLUS each 2-letter crossword formed. Example: Playing CAT parallel to DOG forms CA/DO, AT/OG for massive point multiplication.",
        es: "Las jugadas paralelas puntúan por palabra principal MÁS cada crucigrama de 2 letras formado. Ejemplo: Jugar CAT paralelo a DOG forma CA/DO, AT/OG para multiplicación masiva de puntos.",
        de: "Parallele Züge punkten für Hauptwort PLUS jedes 2-Buchstaben-Kreuzwort gebildet. Beispiel: CAT parallel zu DOG spielen bildet CA/DO, AT/OG für massive Punkte-Multiplikation.",
        nl: "Parallelle zetten scoren voor hoofdwoord PLUS elk 2-letter kruiswoord gevormd. Voorbeeld: CAT parallel aan DOG spelen vormt CA/DO, AT/OG voor massale punten vermenigvuldiging."
      }
    },
    {
      question: {
        en: "What is 'bag assumption' error?",
        es: "¿Qué es error de 'suposición de bolsa'?",
        de: "Was ist 'Beutel-Annahme'-Fehler?",
        nl: "Wat is 'zak aanname' fout?"
      },
      options: [
        {en: "Assuming tiles are equally distributed", es: "Asumir que las fichas están distribuidas equitativamente", de: "Annehmen dass Steine gleichmäßig verteilt sind", nl: "Aannemen dat stenen gelijk verdeeld zijn"},
        {en: "Playing as if specific tiles remain without tracking proof", es: "Jugar como si fichas específicas quedan sin prueba de rastreo", de: "Spielen als ob spezifische Steine bleiben ohne Tracking-Beweis", nl: "Spelen alsof specifieke stenen blijven zonder volg bewijs"},
        {en: "Forgetting to shake tile bag", es: "Olvidar agitar bolsa de fichas", de: "Vergessen Steinbeutel zu schütteln", nl: "Vergeten steenzak te schudden"},
        {en: "Miscounting tiles in bag", es: "Contar mal fichas en bolsa", de: "Steine im Beutel falsch zählen", nl: "Stenen in zak verkeerd tellen"}
      ],
      correct: 1,
      explanation: {
        en: "Bag assumption means wrongly assuming certain tiles remain in bag/opponent's rack without proper tracking, leading to flawed strategic decisions like setting up lanes for tiles already played.",
        es: "La suposición de bolsa significa asumir erróneamente que ciertas fichas quedan en bolsa/rack del oponente sin rastreo adecuado, llevando a decisiones estratégicas defectuosas como configurar carriles para fichas ya jugadas.",
        de: "Beutel-Annahme bedeutet fälschlich anzunehmen dass bestimmte Steine in Beutel/Gegner-Rack bleiben ohne ordentliches Tracking, zu fehlerhaften strategischen Entscheidungen führend wie Bahnen für bereits gespielte Steine einzurichten.",
        nl: "Zak aanname betekent ten onrechte aannemen dat bepaalde stenen in zak/rek van tegenstander blijven zonder correct volgen, leidend tot gebrekkige strategische beslissingen zoals banen opzetten voor al gespeelde stenen."
      }
    },
    {
      question: {
        en: "What is 'late-game Q management'?",
        es: "¿Qué es 'gestión de Q de final de juego'?",
        de: "Was ist 'Spätspiel-Q-Management'?",
        nl: "Wat is 'laat-spel Q beheer'?"
      },
      options: [
        {en: "Never playing Q tile", es: "Nunca jugar ficha Q", de: "Q-Stein niemals spielen", nl: "Q steen nooit spelen"},
        {en: "Strategic timing of Q plays to avoid being stuck with unplayable Q in endgame", es: "Tiempo estratégico de jugadas de Q para evitar quedarse atascado con Q injugable en final", de: "Strategisches Timing von Q-Zügen um zu vermeiden mit unspielbarem Q im Endspiel stecken zu bleiben", nl: "Strategische timing van Q zetten om vast komen te zitten met onspeelbaar Q in eindspel te vermijden"},
        {en: "Saving Q for last play", es: "Guardar Q para última jugada", de: "Q für letzten Zug sparen", nl: "Q sparen voor laatste zet"},
        {en: "Exchanging Q immediately", es: "Intercambiar Q inmediatamente", de: "Q sofort tauschen", nl: "Q onmiddellijk ruilen"}
      ],
      correct: 1,
      explanation: {
        en: "Late-game Q management means playing Q when 8-12 tiles remain in bag (ensuring replacement draw) rather than risking getting Q-stuck when no tiles remain to draw.",
        es: "La gestión de Q de final de juego significa jugar Q cuando quedan 8-12 fichas en bolsa (asegurando sorteo de reemplazo) en lugar de arriesgar quedarse atascado con Q cuando no quedan fichas para sacar.",
        de: "Spätspiel-Q-Management bedeutet Q zu spielen wenn 8-12 Steine im Beutel verbleiben (Ersatz-Ziehung sicherstellend) anstatt zu riskieren Q-gesteckt zu werden wenn keine Steine zum Ziehen bleiben.",
        nl: "Laat-spel Q beheer betekent Q spelen wanneer 8-12 stenen in zak blijven (vervangende trek verzekeren) in plaats van risico Q-vast te komen wanneer geen stenen te trekken blijven."
      }
    },
    {
      question: {
        en: "What is 'contested square' control?",
        es: "¿Qué es control de 'cuadrado disputado'?",
        de: "Was ist 'umstrittenes Feld'-Kontrolle?",
        nl: "Wat is 'betwist vak' controle?"
      },
      options: [
        {en: "Fighting over tournament table seating", es: "Luchar por asientos de mesa de torneo", de: "Kämpfen um Turnier-Tisch-Sitzplätze", nl: "Vechten over toernooi tafel zitplaatsen"},
        {en: "Blocking or claiming key premium squares before opponent", es: "Bloquear o reclamar cuadrados premium clave antes del oponente", de: "Wichtige Premium-Felder vor Gegner blockieren oder beanspruchen", nl: "Belangrijke premium vakken blokkeren of claimen voor tegenstander"},
        {en: "Determining who goes first", es: "Determinar quién va primero", de: "Bestimmen wer zuerst geht", nl: "Bepalen wie eerst gaat"},
        {en: "Challenging square legality", es: "Desafiar legalidad de cuadrado", de: "Quadrat-Legalität herausfordern", nl: "Vak legaliteit uitdagen"}
      ],
      correct: 1,
      explanation: {
        en: "Contested squares are high-value premium spaces (especially TWS corners) both players want. Strategic control means using them first OR blocking them to deny opponent the opportunity.",
        es: "Los cuadrados disputados son espacios premium de alto valor (especialmente esquinas TWS) que ambos jugadores quieren. El control estratégico significa usarlos primero O bloquearlos para negar al oponente la oportunidad.",
        de: "Umstrittene Felder sind hochwertige Premium-Bereiche (besonders TWS-Ecken) die beide Spieler wollen. Strategische Kontrolle bedeutet sie zuerst zu verwenden ODER zu blockieren um Gegner die Gelegenheit zu verwehren.",
        nl: "Betwiste vakken zijn hoge-waarde premium ruimtes (vooral TWS hoeken) die beide spelers willen. Strategische controle betekent ze eerst gebruiken OF blokkeren om tegenstander de kans te ontzeggen."
      }
    },
    {
      question: {
        en: "What is 'clock psychology' in tournament Scrabble?",
        es: "¿Qué es 'psicología de reloj' en Scrabble de torneo?",
        de: "Was ist 'Uhren-Psychologie' im Turnier-Scrabble?",
        nl: "Wat is 'klok psychologie' in toernooi Scrabble?"
      },
      options: [
        {en: "Analyzing clock design patterns", es: "Analizar patrones de diseño de reloj", de: "Uhren-Design-Muster analysieren", nl: "Klok ontwerp patronen analyseren"},
        {en: "Managing time and recognizing opponent's time pressure tendencies", es: "Gestionar tiempo y reconocer tendencias de presión de tiempo del oponente", de: "Zeit verwalten und Zeitdruck-Tendenzen des Gegners erkennen", nl: "Tijd beheren en tijdsdruk tendensen van tegenstander herkennen"},
        {en: "Setting optimal alarm times", es: "Configurar tiempos de alarma óptimos", de: "Optimale Alarm-Zeiten einstellen", nl: "Optimale alarm tijden instellen"},
        {en: "Psychological impact of visible clocks", es: "Impacto psicológico de relojes visibles", de: "Psychologische Auswirkung sichtbarer Uhren", nl: "Psychologische impact van zichtbare klokken"}
      ],
      correct: 1,
      explanation: {
        en: "Clock psychology involves managing your time efficiently while observing if opponent plays worse under time pressure, potentially using clock strategically in close games.",
        es: "La psicología de reloj implica gestionar tu tiempo eficientemente mientras observas si el oponente juega peor bajo presión de tiempo, potencialmente usando reloj estratégicamente en juegos cerrados.",
        de: "Uhren-Psychologie beinhaltet Zeit effizient zu verwalten während man beobachtet ob Gegner unter Zeitdruck schlechter spielt, potenziell Uhr strategisch in knappen Spielen verwendend.",
        nl: "Klok psychologie houdt in je tijd efficiënt beheren terwijl observeren of tegenstander slechter speelt onder tijdsdruk, potentieel klok strategisch gebruiken in krappe spellen."
      }
    },
    {
      question: {
        en: "What is 'variance reduction' strategy when leading?",
        es: "¿Qué es estrategia de 'reducción de varianza' cuando vas adelante?",
        de: "Was ist 'Varianz-Reduktions'-Strategie beim Führen?",
        nl: "Wat is 'variantie reductie' strategie wanneer voor?"
      },
      options: [
        {en: "Playing more conservatively to close board and limit comeback chances", es: "Jugar más conservadoramente para cerrar tablero y limitar oportunidades de remontada", de: "Konservativer spielen um Brett zu schließen und Comeback-Chancen zu begrenzen", nl: "Conservatiever spelen om bord te sluiten en comeback kansen te beperken"},
        {en: "Varying play style randomly", es: "Variar estilo de juego aleatoriamente", de: "Spielstil zufällig variieren", nl: "Speelstijl willekeurig variëren"},
        {en: "Reducing tile variety on rack", es: "Reducir variedad de fichas en rack", de: "Stein-Vielfalt auf Rack reduzieren", nl: "Steen variëteit op rek reduceren"},
        {en: "Minimizing score differences", es: "Minimizar diferencias de puntuación", de: "Punkte-Unterschiede minimieren", nl: "Score verschillen minimaliseren"}
      ],
      correct: 0,
      explanation: {
        en: "When ahead by 40+, variance reduction closes board defensively to prevent high-scoring swings, accepting smaller point gains to safely preserve lead rather than risky bingo setups.",
        es: "Cuando vas adelante por más de 40, la reducción de varianza cierra el tablero defensivamente para prevenir oscilaciones de alta puntuación, aceptando ganancias de puntos menores para preservar ventaja de manera segura en lugar de configuraciones de bingo arriesgadas.",
        de: "Wenn 40+ vorne, schließt Varianz-Reduktion Brett defensiv um hochscorige Schwankungen zu verhindern, kleinere Punkt-Gewinne akzeptierend um Führung sicher zu bewahren anstatt riskanter Bingo-Setups.",
        nl: "Wanneer voor met 40+, sluit variantie reductie bord defensief om hoog-scorende schommelingen te voorkomen, kleinere punten winsten accepterend om voorsprong veilig te behouden in plaats van riskante bingo setups."
      }
    },
    {
      question: {
        en: "What is 'hotspot creation' in advanced play?",
        es: "¿Qué es 'creación de punto caliente' en juego avanzado?",
        de: "Was ist 'Hotspot-Erstellung' im fortgeschrittenen Spiel?",
        nl: "Wat is 'hotspot creatie' in geavanceerd spel?"
      },
      options: [
        {en: "Creating board areas with multiple high-scoring opportunities", es: "Crear áreas de tablero con múltiples oportunidades de alta puntuación", de: "Brett-Bereiche mit mehreren hochscorenden Möglichkeiten schaffen", nl: "Bord gebieden creëren met meerdere hoog-scorende kansen"},
        {en: "Heating tiles before play", es: "Calentar fichas antes de jugar", de: "Steine vor dem Spielen erwärmen", nl: "Stenen opwarmen voor spel"},
        {en: "Finding tournament venues", es: "Encontrar lugares de torneos", de: "Turnier-Veranstaltungsorte finden", nl: "Toernooi locaties vinden"},
        {en: "Identifying popular word patterns", es: "Identificar patrones populares de palabras", de: "Beliebte Wort-Muster identifizieren", nl: "Populaire woord patronen identificeren"}
      ],
      correct: 0,
      explanation: {
        en: "Hotspot creation deliberately opens board sections with multiple accessible premium squares/hooks, typically when behind and needing high-variance scoring chances to catch up.",
        es: "La creación de punto caliente abre deliberadamente secciones de tablero con múltiples cuadrados/ganchos premium accesibles, típicamente cuando vas atrás y necesitas oportunidades de puntuación de alta varianza para alcanzar.",
        de: "Hotspot-Erstellung öffnet absichtlich Brett-Abschnitte mit mehreren zugänglichen Premium-Feldern/Haken, typischerweise wenn zurück und hochvariante Scoring-Chancen zum Aufholen benötigt werden.",
        nl: "Hotspot creatie opent opzettelijk bord secties met meerdere toegankelijke premium vakken/haken, typisch wanneer achter en hoge-variantie score kansen nodig om in te halen."
      }
    },
    {
      question: {
        en: "What is 'rack entropy management'?",
        es: "¿Qué es 'gestión de entropía de rack'?",
        de: "Was ist 'Rack-Entropie-Management'?",
        nl: "Wat is 'rek entropie beheer'?"
      },
      options: [
        {en: "Keeping rack organized alphabetically", es: "Mantener rack organizado alfabéticamente", de: "Rack alphabetisch organisiert halten", nl: "Rek alfabetisch georganiseerd houden"},
        {en: "Balancing rack flexibility vs immediate scoring", es: "Equilibrar flexibilidad de rack vs puntuación inmediata", de: "Rack-Flexibilität vs sofortiges Scoring balancieren", nl: "Rek flexibiliteit vs directe score balanceren"},
        {en: "Measuring disorder of tile arrangement", es: "Medir desorden de disposición de fichas", de: "Unordnung der Stein-Anordnung messen", nl: "Wanorde van steen rangschikking meten"},
        {en: "Thermal management of playing area", es: "Gestión térmica de área de juego", de: "Thermisches Management des Spielbereichs", nl: "Thermisch beheer van speelgebied"}
      ],
      correct: 1,
      explanation: {
        en: "Entropy management balances keeping flexible, high-option racks (SATIRE) vs playing them for immediate points. High entropy = many future options but lower current score.",
        es: "La gestión de entropía equilibra mantener racks flexibles de alta opción (SATIRE) vs jugarlos por puntos inmediatos. Alta entropía = muchas opciones futuras pero puntuación actual más baja.",
        de: "Entropie-Management balanciert flexible, hochoptionale Racks (SATIRE) behalten vs sie für sofortige Punkte zu spielen. Hohe Entropie = viele zukünftige Optionen aber niedrigere aktuelle Punktzahl.",
        nl: "Entropie beheer balanceert flexibele, hoge-optie rekken (SATIRE) houden vs ze spelen voor directe punten. Hoge entropie = veel toekomstige opties maar lagere huidige score."
      }
    },
    {
      question: {
        en: "What is 'anti-bingo' defensive technique?",
        es: "¿Qué es técnica defensiva 'anti-bingo'?",
        de: "Was ist 'Anti-Bingo'-Defensiv-Technik?",
        nl: "Wat is 'anti-bingo' defensieve techniek?"
      },
      options: [
        {en: "Challenging all 7-letter words", es: "Desafiar todas las palabras de 7 letras", de: "Alle 7-Buchstaben-Wörter herausfordern", nl: "Alle 7-letter woorden uitdagen"},
        {en: "Systematically blocking bingo lanes and premium square access", es: "Bloquear sistemáticamente carriles de bingo y acceso a cuadrados premium", de: "Systematisch Bingo-Bahnen und Premium-Feld-Zugang blockieren", nl: "Systematisch bingo banen en premium vak toegang blokkeren"},
        {en: "Never playing bingos yourself", es: "Nunca jugar bingos tú mismo", de: "Niemals selbst Bingos spielen", nl: "Nooit zelf bingo's spelen"},
        {en: "Using anti-bingo tiles only", es: "Usar solo fichas anti-bingo", de: "Nur Anti-Bingo-Steine verwenden", nl: "Alleen anti-bingo stenen gebruiken"}
      ],
      correct: 1,
      explanation: {
        en: "Anti-bingo play closes all 7+ letter lanes by strategic blocking, typically when leading and opponent needs bingos to catch up, sacrificing point opportunities for defensive security.",
        es: "El juego anti-bingo cierra todos los carriles de 7+ letras mediante bloqueo estratégico, típicamente cuando vas adelante y el oponente necesita bingos para alcanzar, sacrificando oportunidades de puntos por seguridad defensiva.",
        de: "Anti-Bingo-Spiel schließt alle 7+-Buchstaben-Bahnen durch strategisches Blockieren, typischerweise wenn führend und Gegner Bingos zum Aufholen braucht, Punkt-Möglichkeiten für defensive Sicherheit opfernd.",
        nl: "Anti-bingo spel sluit alle 7+ letter banen door strategisch blokkeren, typisch wanneer voorliggend en tegenstander bingo's nodig heeft om in te halen, punten kansen opofferend voor defensieve veiligheid."
      }
    },
    {
      question: {
        en: "What is 'out-in-two' calculation?",
        es: "¿Qué es cálculo 'fuera-en-dos'?",
        de: "Was ist 'Raus-in-Zwei'-Berechnung?",
        nl: "Wat is 'uit-in-twee' berekening?"
      },
      options: [
        {en: "Playing exactly 2 tiles per turn", es: "Jugar exactamente 2 fichas por turno", de: "Genau 2 Steine pro Zug spielen", nl: "Precies 2 stenen per beurt spelen"},
        {en: "Calculating if you can empty rack in next 2 turns to end game", es: "Calcular si puedes vaciar rack en los próximos 2 turnos para terminar juego", de: "Berechnen ob Sie Rack in nächsten 2 Zügen leeren können um Spiel zu beenden", nl: "Berekenen of je rek kunt legen in volgende 2 beurten om spel te beëindigen"},
        {en: "Requiring 2 moves to win", es: "Requiere 2 movimientos para ganar", de: "2 Züge zum Gewinnen benötigen", nl: "2 zetten nodig om te winnen"},
        {en: "Two-player tournament format", es: "Formato de torneo de dos jugadores", de: "Zwei-Spieler-Turnier-Format", nl: "Twee-speler toernooi formaat"}
      ],
      correct: 1,
      explanation: {
        en: "Out-in-two determines if you can play all remaining tiles in 2 turns to end game (scoring opponent's unplayed tiles), often crucial for winning close endgames.",
        es: "Fuera-en-dos determina si puedes jugar todas las fichas restantes en 2 turnos para terminar el juego (anotando fichas no jugadas del oponente), a menudo crucial para ganar finales cerrados.",
        de: "Raus-in-Zwei bestimmt ob Sie alle verbleibenden Steine in 2 Zügen spielen können um Spiel zu beenden (ungespielte Steine des Gegners wertend), oft entscheidend für Gewinnen knapper Endspiele.",
        nl: "Uit-in-twee bepaalt of je alle resterende stenen in 2 beurten kunt spelen om spel te beëindigen (onguspeelde stenen van tegenstander scorend), vaak cruciaal voor winnen krappe eindspellen."
      }
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
