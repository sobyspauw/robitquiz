// Quiz Template - Level 6: Bord spelletjes - Scrabble
(function() {
  const level6 = {
  name: {
    en: "Scrabble",
    es: "Scrabble",
    de: "Scrabble",
    nl: "Scrabble"
  },
  questions: [
    {
      question: {
        en: "What is 'out-in-two' endgame strategy?",
        es: "¿Qué es la estrategia de final 'fuera-en-dos'?",
        de: "Was ist die 'Raus-in-Zwei' Endspiel-Strategie?",
        nl: "Wat is 'uit-in-twee' eindspel strategie?"
      },
      options: [
        {
          en: "Playing out in exactly two turns",
          es: "Salir en exactamente dos turnos",
          de: "In genau zwei Zügen ausspielen",
          nl: "Uitspelen in precies twee beurten"
        },
        {
          en: "Forcing opponent to pass twice",
          es: "Forzar al oponente a pasar dos veces",
          de: "Gegner zwingen zweimal zu passen",
          nl: "Tegenstander dwingen twee keer te passen"
        },
        {
          en: "Two-player tournament format",
          es: "Formato de torneo de dos jugadores",
          de: "Zwei-Spieler-Turnierformat",
          nl: "Twee-speler toernooi formaat"
        },
        {
          en: "Double word score setup",
          es: "Configuración de puntuación de palabra doble",
          de: "Doppelter-Wortwert-Aufbau",
          nl: "Dubbele woordwaarde opstelling"
        }
      ],
      correct: 0,
      explanation: {
        en: "Out-in-two means calculating endgame to play out all tiles in exactly two turns, maximizing score while preventing opponent response.",
        es: "Fuera-en-dos significa calcular el final para jugar todas las fichas en exactamente dos turnos, maximizando puntuación mientras se previene respuesta del oponente.",
        de: "Raus-in-Zwei bedeutet Endspiel zu berechnen um alle Steine in genau zwei Zügen auszuspielen, Punktzahl zu maximieren während Gegner-Reaktion verhindert wird.",
        nl: "Uit-in-twee betekent eindspel berekenen om alle stenen in precies twee beurten uit te spelen, score maximaliseren terwijl tegenstander respons wordt voorkomen."
      }
    },
    {
      question: {
        en: "What does 'spread' mean in tournament Scrabble?",
        es: "¿Qué significa 'diferencial' en Scrabble de torneo?",
        de: "Was bedeutet 'Spread' im Turnier-Scrabble?",
        nl: "Wat betekent 'spread' in toernooi Scrabble?"
      },
      options: [
        {
          en: "Board coverage percentage",
          es: "Porcentaje de cobertura del tablero",
          de: "Brett-Abdeckungsprozentsatz",
          nl: "Bord dekkingspercentage"
        },
        {
          en: "Point differential (your score minus opponent)",
          es: "Diferencial de puntos (tu puntuación menos oponente)",
          de: "Punktdifferenz (Ihre Punktzahl minus Gegner)",
          nl: "Puntenverschil (jouw score minus tegenstander)"
        },
        {
          en: "Number of different words played",
          es: "Número de palabras diferentes jugadas",
          de: "Anzahl verschiedener gespielter Wörter",
          nl: "Aantal verschillende gespeelde woorden"
        },
        {
          en: "Tile distribution range",
          es: "Rango de distribución de fichas",
          de: "Steinverteilungsbereich",
          nl: "Stenen verdeling bereik"
        }
      ],
      correct: 1,
      explanation: {
        en: "Spread is the cumulative point differential. In Swiss tournaments, spread is often used as tiebreaker after win-loss record.",
        es: "El diferencial es la diferencia acumulativa de puntos. En torneos suizos, el diferencial se usa a menudo como desempate después del récord ganado-perdido.",
        de: "Spread ist die kumulative Punktdifferenz. In Schweizer Turnieren wird Spread oft als Tiebreaker nach Sieg-Niederlagen-Bilanz verwendet.",
        nl: "Spread is het cumulatieve puntenverschil. In Zwitserse toernooien wordt spread vaak gebruikt als tiebreaker na win-verlies record."
      }
    },
    {
      question: {
        en: "What is 'SATINE' in Scrabble word study?",
        es: "¿Qué es 'SATINE' en estudio de palabras de Scrabble?",
        de: "Was ist 'SATINE' im Scrabble-Wortstudium?",
        nl: "Wat is 'SATINE' in Scrabble woorden studie?"
      },
      options: [
        {
          en: "Type of fabric",
          es: "Tipo de tela",
          de: "Stoffart",
          nl: "Type stof"
        },
        {
          en: "Prolific 6-letter stem",
          es: "Tallo prolífico de 6 letras",
          de: "Fruchtbarer 6-Buchstaben-Stamm",
          nl: "Vruchtbare 6-letter stam"
        },
        {
          en: "Both A and B",
          es: "Tanto A como B",
          de: "Sowohl A als auch B",
          nl: "Zowel A als B"
        },
        {
          en: "Tournament scoring system",
          es: "Sistema de puntuación de torneo",
          de: "Turnier-Bewertungssystem",
          nl: "Toernooi scoresysteem"
        }
      ],
      correct: 2,
      explanation: {
        en: "SATINE (a fabric) is both a valid word AND one of the top 6-letter stems, forming 50+ seven-letter bingos including ENTASIA, TAENIAS, etc.",
        es: "SATINE (una tela) es tanto una palabra válida COMO uno de los mejores tallos de 6 letras, formando más de 50 bingos de siete letras incluyendo ENTASIA, TAENIAS, etc.",
        de: "SATINE (ein Stoff) ist sowohl ein gültiges Wort ALS AUCH einer der Top-6-Buchstaben-Stämme, der über 50 Sieben-Buchstaben-Bingos bildet einschließlich ENTASIA, TAENIAS usw.",
        nl: "SATINE (een stof) is zowel een geldig woord ALS een van de top 6-letter stammen, die 50+ zeven-letter bingo's vormt inclusief ENTASIA, TAENIAS, etc."
      }
    },
    {
      question: {
        en: "What is 'clock management' in timed tournament play?",
        es: "¿Qué es 'gestión del reloj' en juego de torneo cronometrado?",
        de: "Was ist 'Uhr-Management' im zeitgesteuerten Turnierspiel?",
        nl: "Wat is 'klok beheer' in getimed toernooi spel?"
      },
      options: [
        {
          en: "Tracking game duration only",
          es: "Solo rastrear duración del juego",
          de: "Nur Spieldauer verfolgen",
          nl: "Alleen spelduur volgen"
        },
        {
          en: "Strategic time usage to maximize advantage",
          es: "Uso estratégico del tiempo para maximizar ventaja",
          de: "Strategische Zeitnutzung um Vorteil zu maximieren",
          nl: "Strategisch tijdgebruik om voordeel te maximaliseren"
        },
        {
          en: "Setting chess clock",
          es: "Configurar reloj de ajedrez",
          de: "Schachuhr einstellen",
          nl: "Schaakklok instellen"
        },
        {
          en: "Synchronizing with opponent",
          es: "Sincronizar con oponente",
          de: "Mit Gegner synchronisieren",
          nl: "Synchroniseren met tegenstander"
        }
      ],
      correct: 1,
      explanation: {
        en: "Clock management means balancing move quality with time usage. In tournaments (25 min/player), spending time wisely on critical decisions while playing quickly when advantageous.",
        es: "La gestión del reloj significa equilibrar calidad de jugada con uso del tiempo. En torneos (25 min/jugador), gastar tiempo sabiamente en decisiones críticas mientras se juega rápido cuando es ventajoso.",
        de: "Uhr-Management bedeutet Zugqualität mit Zeitnutzung auszubalancieren. In Turnieren (25 Min/Spieler) Zeit weise bei kritischen Entscheidungen verbringen während schnell gespielt wird wenn vorteilhaft.",
        nl: "Klok beheer betekent zetkwaliteit balanceren met tijdgebruik. In toernooien (25 min/speler) tijd verstandig besteden aan kritieke beslissingen terwijl snel spelen wanneer voordelig."
      }
    },
    {
      question: {
        en: "What is a 'setup play' in expert Scrabble?",
        es: "¿Qué es una 'jugada de configuración' en Scrabble experto?",
        de: "Was ist ein 'Aufbau-Zug' im Experten-Scrabble?",
        nl: "Wat is een 'setup zet' in expert Scrabble?"
      },
      options: [
        {
          en: "First move of game",
          es: "Primera jugada del juego",
          de: "Erster Zug des Spiels",
          nl: "Eerste zet van spel"
        },
        {
          en: "Creating high-scoring opportunity for yourself",
          es: "Crear oportunidad de alta puntuación para ti",
          de: "Hochwertige Gelegenheit für sich selbst schaffen",
          nl: "Hoog scorende kans voor jezelf creëren"
        },
        {
          en: "Board initialization",
          es: "Inicialización del tablero",
          de: "Brett-Initialisierung",
          nl: "Bord initialisatie"
        },
        {
          en: "Organizing tile rack",
          es: "Organizar soporte de fichas",
          de: "Steinregal organisieren",
          nl: "Steenrek organiseren"
        }
      ],
      correct: 1,
      explanation: {
        en: "A setup is deliberately creating a premium scoring spot (like opening triple-triple lane) you can use next turn before opponent recognizes it.",
        es: "Una configuración es crear deliberadamente un lugar de puntuación premium (como abrir carril triple-triple) que puedes usar en el próximo turno antes de que el oponente lo reconozca.",
        de: "Ein Aufbau ist absichtlich einen Premium-Scoring-Platz zu schaffen (wie Tripel-Tripel-Bahn zu öffnen) den Sie im nächsten Zug nutzen können bevor der Gegner es erkennt.",
        nl: "Een setup is opzettelijk een premium score plek creëren (zoals driedubbel-driedubbel baan openen) die je volgende beurt kunt gebruiken voordat tegenstander het herkent."
      }
    },
    {
      question: {
        en: "What are 'vowel-heavy racks' best solved with?",
        es: "¿Con qué se resuelven mejor los 'soportes pesados en vocales'?",
        de: "Womit werden 'vokalreiche Racks' am besten gelöst?",
        nl: "Waarmee worden 'klinker-zware rekken' het beste opgelost?"
      },
      options: [
        {
          en: "Immediate exchange",
          es: "Intercambio inmediato",
          de: "Sofortiger Austausch",
          nl: "Onmiddellijke ruil"
        },
        {
          en: "Playing 3-4 vowels strategically",
          es: "Jugar 3-4 vocales estratégicamente",
          de: "Strategisch 3-4 Vokale spielen",
          nl: "Strategisch 3-4 klinkers spelen"
        },
        {
          en: "Waiting for consonants",
          es: "Esperar consonantes",
          de: "Auf Konsonanten warten",
          nl: "Wachten op medeklinkers"
        },
        {
          en: "Playing only 1 vowel",
          es: "Jugar solo 1 vocal",
          de: "Nur 1 Vokal spielen",
          nl: "Slechts 1 klinker spelen"
        }
      ],
      correct: 1,
      explanation: {
        en: "With 5+ vowels, optimal strategy is usually playing 3-4 vowels (even for low points) to rebalance rack, rather than exchanging which costs a turn.",
        es: "Con más de 5 vocales, la estrategia óptima suele ser jugar 3-4 vocales (incluso por pocos puntos) para reequilibrar el soporte, en lugar de intercambiar que cuesta un turno.",
        de: "Mit 5+ Vokalen ist die optimale Strategie normalerweise 3-4 Vokale zu spielen (auch für wenige Punkte) um Rack neu auszubalancieren, anstatt zu tauschen was einen Zug kostet.",
        nl: "Met 5+ klinkers is de optimale strategie meestal 3-4 klinkers spelen (zelfs voor lage punten) om rek te herbalanceren, in plaats van ruilen wat een beurt kost."
      }
    },
    {
      question: {
        en: "What does 'bingoing through' mean?",
        es: "¿Qué significa 'hacer bingo a través'?",
        de: "Was bedeutet 'durchbingoen'?",
        nl: "Wat betekent 'doorheen bingoen'?"
      },
      options: [
        {
          en: "Playing multiple bingos in row",
          es: "Jugar múltiples bingos seguidos",
          de: "Mehrere Bingos in Folge spielen",
          nl: "Meerdere bingo's achtereenvolgens spelen"
        },
        {
          en: "Playing 7-letter word using existing letter",
          es: "Jugar palabra de 7 letras usando letra existente",
          de: "7-Buchstaben-Wort unter Verwendung existierenden Buchstabens spielen",
          nl: "7-letter woord spelen met bestaande letter"
        },
        {
          en: "Completing game with bingo",
          es: "Completar juego con bingo",
          de: "Spiel mit Bingo abschließen",
          nl: "Spel voltooien met bingo"
        },
        {
          en: "Challenging opponent's bingo",
          es: "Desafiar bingo del oponente",
          de: "Bingo des Gegners anfechten",
          nl: "Bingo van tegenstander uitdagen"
        }
      ],
      correct: 1,
      explanation: {
        en: "Bingoing through means playing all 7 tiles by using one letter already on the board, forming an 8+ letter word (still gets 50-pt bonus).",
        es: "Hacer bingo a través significa jugar las 7 fichas usando una letra ya en el tablero, formando una palabra de 8+ letras (aún obtiene bonificación de 50 puntos).",
        de: "Durchbingoen bedeutet alle 7 Steine zu spielen indem ein Buchstabe bereits auf dem Brett verwendet wird, wobei ein 8+ Buchstaben-Wort gebildet wird (erhält immer noch 50-Pkt-Bonus).",
        nl: "Doorheen bingoen betekent alle 7 stenen spelen door één letter die al op het bord ligt te gebruiken, een 8+ letter woord vormend (krijgt nog steeds 50-pnt bonus)."
      }
    },
    {
      question: {
        en: "What is 'hold all' strategy in endgame?",
        es: "¿Qué es la estrategia 'mantener todo' en final?",
        de: "Was ist 'Alles behalten' Strategie im Endspiel?",
        nl: "Wat is 'alles houden' strategie in eindspel?"
      },
      options: [
        {
          en: "Keeping all high-value tiles",
          es: "Mantener todas las fichas de alto valor",
          de: "Alle wertvollen Steine behalten",
          nl: "Alle waardevolle stenen houden"
        },
        {
          en: "Retaining unseen tiles to block opponent out",
          es: "Retener fichas no vistas para bloquear oponente",
          de: "Ungesehene Steine behalten um Gegner zu blockieren",
          nl: "Ongeziene stenen behouden om tegenstander te blokkeren"
        },
        {
          en: "Never exchanging tiles",
          es: "Nunca intercambiar fichas",
          de: "Niemals Steine tauschen",
          nl: "Nooit stenen ruilen"
        },
        {
          en: "Maintaining tile rack",
          es: "Mantener soporte de fichas",
          de: "Steinregal behalten",
          nl: "Steenrek behouden"
        }
      ],
      correct: 1,
      explanation: {
        en: "In endgame when winning, sometimes best strategy is keeping unplayed tiles to prevent opponent from playing out, accepting small point loss to preserve win.",
        es: "En el final cuando se está ganando, a veces la mejor estrategia es mantener fichas no jugadas para prevenir que el oponente salga, aceptando pequeña pérdida de puntos para preservar victoria.",
        de: "Im Endspiel wenn man gewinnt ist manchmal die beste Strategie ungespielte Steine zu behalten um zu verhindern dass der Gegner ausspielt, kleine Punktverluste zu akzeptieren um Sieg zu bewahren.",
        nl: "In eindspel wanneer je wint is soms de beste strategie ongespeel de stenen houden om te voorkomen dat tegenstander uitspeelt, kleine puntenverlies accepterend om winst te behouden."
      }
    },
    {
      question: {
        en: "What is the 'AEINRST' phenomenon?",
        es: "¿Qué es el fenómeno 'AEINRST'?",
        de: "Was ist das 'AEINRST' Phänomen?",
        nl: "Wat is het 'AEINRST' fenomeen?"
      },
      options: [
        {
          en: "Most common 7-letter rack",
          es: "Soporte de 7 letras más común",
          de: "Häufigstes 7-Buchstaben-Rack",
          nl: "Meest voorkomende 7-letter rek"
        },
        {
          en: "Top 7-letter stem with most anagrams",
          es: "Mejor tallo de 7 letras con más anagramas",
          de: "Top-7-Buchstaben-Stamm mit meisten Anagrammen",
          nl: "Top 7-letter stam met meeste anagrammen"
        },
        {
          en: "Alphabetical letter frequency",
          es: "Frecuencia alfabética de letras",
          de: "Alphabetische Buchstabenhäufigkeit",
          nl: "Alfabetische letterfrequentie"
        },
        {
          en: "Tournament player ranking",
          es: "Clasificación de jugadores de torneo",
          de: "Turnierspieler-Rangliste",
          nl: "Toernooi speler ranglijst"
        }
      ],
      correct: 1,
      explanation: {
        en: "AEINRST forms over 150 valid 7-letter anagrams (ANESTRI, NASTIER, RETINAS, STAINER, etc.), making it the most prolific bingo combination. Memorizing these is essential.",
        es: "AEINRST forma más de 150 anagramas válidos de 7 letras (ANESTRI, NASTIER, RETINAS, STAINER, etc.), convirtiéndola en la combinación de bingo más prolífica. Memorizarlos es esencial.",
        de: "AEINRST bildet über 150 gültige 7-Buchstaben-Anagramme (ANESTRI, NASTIER, RETINAS, STAINER usw.), was es zur fruchtbarsten Bingo-Kombination macht. Diese auswendig zu lernen ist wesentlich.",
        nl: "AEINRST vormt meer dan 150 geldige 7-letter anagrammen (ANESTRI, NASTIER, RETINAS, STAINER, etc.), waardoor het de meest vruchtbare bingo-combinatie is. Deze onthouden is essentieel."
      }
    },
    {
      question: {
        en: "What is 'rack tracking' in advanced play?",
        es: "¿Qué es 'seguimiento de soporte' en juego avanzado?",
        de: "Was ist 'Rack-Verfolgung' im fortgeschrittenen Spiel?",
        nl: "Wat is 'rek volgen' in gevorderd spel?"
      },
      options: [
        {
          en: "Remembering your previous racks",
          es: "Recordar tus soportes anteriores",
          de: "Sich an Ihre vorherigen Racks erinnern",
          nl: "Je vorige rekken onthouden"
        },
        {
          en: "Deducing opponent's tiles from play patterns",
          es: "Deducir fichas del oponente de patrones de juego",
          de: "Steine des Gegners aus Spielmustern ableiten",
          nl: "Stenen van tegenstander afleiden uit speelpatronen"
        },
        {
          en: "Organizing tiles efficiently",
          es: "Organizar fichas eficientemente",
          de: "Steine effizient organisieren",
          nl: "Stenen efficiënt organiseren"
        },
        {
          en: "Counting tiles drawn",
          es: "Contar fichas sacadas",
          de: "Gezogene Steine zählen",
          nl: "Getrokken stenen tellen"
        }
      ],
      correct: 1,
      explanation: {
        en: "Rack tracking is analyzing opponent's plays to infer their likely tiles. If they pass up obvious spots or make awkward plays, you can deduce problematic letters.",
        es: "El seguimiento de soporte es analizar jugadas del oponente para inferir sus fichas probables. Si omiten lugares obvios o hacen jugadas difíciles, puedes deducir letras problemáticas.",
        de: "Rack-Verfolgung ist das Analysieren der Züge des Gegners um deren wahrscheinliche Steine zu folgern. Wenn sie offensichtliche Stellen überspringen oder schwierige Züge machen können Sie problematische Buchstaben ableiten.",
        nl: "Rek volgen is zetten van tegenstander analyseren om hun waarschijnlijke stenen af te leiden. Als ze voor de hand liggende plekken overslaan of lastige zetten maken kun je problematische letters afleiden."
      }
    },
    {
      question: {
        en: "What is a 'consonant dump'?",
        es: "¿Qué es un 'descarte de consonantes'?",
        de: "Was ist ein 'Konsonanten-Dump'?",
        nl: "Wat is een 'medeklinker dump'?"
      },
      options: [
        {
          en: "Exchanging all consonants",
          es: "Intercambiar todas las consonantes",
          de: "Alle Konsonanten austauschen",
          nl: "Alle medeklinkers ruilen"
        },
        {
          en: "Playing 3-4 consonants to rebalance",
          es: "Jugar 3-4 consonantes para reequilibrar",
          de: "3-4 Konsonanten spielen um neu auszubalancieren",
          nl: "3-4 medeklinkers spelen om te herbalanceren"
        },
        {
          en: "Discarding high-value letters",
          es: "Descartar letras de alto valor",
          de: "Wertvolle Buchstaben abwerfen",
          nl: "Waardevolle letters weggooien"
        },
        {
          en: "Invalid consonant combinations",
          es: "Combinaciones de consonantes inválidas",
          de: "Ungültige Konsonantenkombinationen",
          nl: "Ongeldige medeklinker combinaties"
        }
      ],
      correct: 1,
      explanation: {
        en: "Similar to vowel dump, a consonant dump plays multiple consonants (often low-scoring) when rack has 5+ consonants, prioritizing balance over immediate points.",
        es: "Similar al descarte de vocales, un descarte de consonantes juega múltiples consonantes (a menudo de baja puntuación) cuando el soporte tiene más de 5 consonantes, priorizando equilibrio sobre puntos inmediatos.",
        de: "Ähnlich wie Vokal-Dump spielt ein Konsonanten-Dump mehrere Konsonanten (oft niedrig scorend) wenn Rack 5+ Konsonanten hat, wobei Balance über sofortige Punkte priorisiert wird.",
        nl: "Vergelijkbaar met klinker dump speelt een medeklinker dump meerdere medeklinkers (vaak laag scorend) wanneer rek 5+ medeklinkers heeft, waarbij balans prioriteit heeft boven directe punten."
      }
    },
    {
      question: {
        en: "What is 'playing defense' in Scrabble?",
        es: "¿Qué es 'jugar a la defensiva' en Scrabble?",
        de: "Was ist 'Defensiv spielen' im Scrabble?",
        nl: "Wat is 'defensief spelen' in Scrabble?"
      },
      options: [
        {
          en: "Always blocking opponent moves",
          es: "Siempre bloquear movimientos del oponente",
          de: "Immer Gegner-Züge blockieren",
          nl: "Altijd tegenstander zetten blokkeren"
        },
        {
          en: "Minimizing opponent scoring opportunities while maintaining good rack",
          es: "Minimizar oportunidades de puntuación del oponente manteniendo buen soporte",
          de: "Minimierung der Scoring-Möglichkeiten des Gegners bei Aufrechterhaltung guten Racks",
          nl: "Minimaliseren van tegenstander score kansen terwijl goed rek behouden wordt"
        },
        {
          en: "Only making low-scoring plays",
          es: "Solo hacer jugadas de baja puntuación",
          de: "Nur niedrig scorende Züge machen",
          nl: "Alleen laag scorende zetten maken"
        },
        {
          en: "Challenging all opponent words",
          es: "Desafiar todas las palabras del oponente",
          de: "Alle Wörter des Gegners anfechten",
          nl: "Alle woorden van tegenstander uitdagen"
        }
      ],
      correct: 1,
      explanation: {
        en: "Playing defense means making plays that limit opponent's scoring options (closing hotspots, avoiding hooks) while still scoring reasonably and maintaining rack quality.",
        es: "Jugar a la defensiva significa hacer jugadas que limiten las opciones de puntuación del oponente (cerrar puntos calientes, evitar ganchos) mientras aún se puntúa razonablemente y se mantiene calidad del soporte.",
        de: "Defensiv spielen bedeutet Züge zu machen die die Scoring-Optionen des Gegners begrenzen (Hotspots schließen, Haken vermeiden) während noch vernünftig gepunktet wird und Rack-Qualität erhalten bleibt.",
        nl: "Defensief spelen betekent zetten maken die score opties van tegenstander beperken (hotspots sluiten, haken vermijden) terwijl nog redelijk gescoord wordt en rek kwaliteit behouden blijft."
      }
    },
    {
      question: {
        en: "What is the 'N-hook' in two-letter word strategy?",
        es: "¿Qué es el 'gancho-N' en estrategia de palabras de dos letras?",
        de: "Was ist der 'N-Haken' in der Zwei-Buchstaben-Wort-Strategie?",
        nl: "Wat is de 'N-haak' in twee-letterwoord strategie?"
      },
      options: [
        {
          en: "Words starting with N",
          es: "Palabras que comienzan con N",
          de: "Wörter die mit N beginnen",
          nl: "Woorden die beginnen met N"
        },
        {
          en: "Adding N to create two-letter words",
          es: "Agregar N para crear palabras de dos letras",
          de: "N hinzufügen um Zwei-Buchstaben-Wörter zu erstellen",
          nl: "N toevoegen om twee-letterwoorden te maken"
        },
        {
          en: "N-shaped board position",
          es: "Posición de tablero en forma de N",
          de: "N-förmige Brett-Position",
          nl: "N-vormige bordpositie"
        },
        {
          en: "Ninth move strategy",
          es: "Estrategia de noveno movimiento",
          de: "Neunte-Zug-Strategie",
          nl: "Negende zet strategie"
        }
      ],
      correct: 1,
      explanation: {
        en: "N-hooks are 2-letter words formed by adding N (AN, EN, IN, ON, UN, etc.). Knowing these allows profitable parallel plays and tight board navigation.",
        es: "Los ganchos-N son palabras de 2 letras formadas agregando N (AN, EN, IN, ON, UN, etc.). Conocerlos permite jugadas paralelas rentables y navegación estrecha del tablero.",
        de: "N-Haken sind 2-Buchstaben-Wörter die durch Hinzufügen von N gebildet werden (AN, EN, IN, ON, UN usw.). Diese zu kennen ermöglicht profitable parallele Züge und enge Brett-Navigation.",
        nl: "N-haken zijn 2-letterwoorden gevormd door N toe te voegen (AN, EN, IN, ON, UN, etc.). Deze kennen maakt winstgevende parallelle zetten en strakke bord navigatie mogelijk."
      }
    },
    {
      question: {
        en: "What does 'taking inference' mean?",
        es: "¿Qué significa 'tomar inferencia'?",
        de: "Was bedeutet 'Schlussfolgerung ziehen'?",
        nl: "Wat betekent 'inferentie nemen'?"
      },
      options: [
        {
          en: "Making logical guesses about unseen tiles",
          es: "Hacer conjeturas lógicas sobre fichas no vistas",
          de: "Logische Vermutungen über ungesehene Steine machen",
          nl: "Logische gissingen maken over ongeziene stenen"
        },
        {
          en: "Accepting opponent's explanation",
          es: "Aceptar explicación del oponente",
          de: "Erklärung des Gegners akzeptieren",
          nl: "Uitleg van tegenstander accepteren"
        },
        {
          en: "Drawing conclusions from tiles",
          es: "Sacar conclusiones de fichas",
          de: "Schlüsse aus Steinen ziehen",
          nl: "Conclusies trekken uit stenen"
        },
        {
          en: "Understanding word etymology",
          es: "Entender etimología de palabras",
          de: "Wort-Etymologie verstehen",
          nl: "Woord etymologie begrijpen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Taking inference means deducing opponent's rack from their plays. If they don't play in obvious spot, you infer they lack needed letters, guiding your strategy.",
        es: "Tomar inferencia significa deducir el soporte del oponente de sus jugadas. Si no juegan en lugar obvio, infieres que carecen de letras necesarias, guiando tu estrategia.",
        de: "Schlussfolgerung ziehen bedeutet das Rack des Gegners aus deren Zügen zu folgern. Wenn sie nicht an offensichtlicher Stelle spielen folgern Sie dass sie benötigte Buchstaben fehlen, was Ihre Strategie leitet.",
        nl: "Inferentie nemen betekent het rek van tegenstander afleiden uit hun zetten. Als ze niet op voor de hand liggende plek spelen leid je af dat ze benodigde letters missen, wat je strategie stuurt."
      }
    },
    {
      question: {
        en: "What is 'overdrawing' in Scrabble?",
        es: "¿Qué es 'sobregirar' en Scrabble?",
        de: "Was ist 'Überziehen' im Scrabble?",
        nl: "Wat is 'overtrekken' in Scrabble?"
      },
      options: [
        {
          en: "Taking too many tiles from bag",
          es: "Tomar demasiadas fichas de la bolsa",
          de: "Zu viele Steine aus dem Beutel nehmen",
          nl: "Te veel stenen uit zak nemen"
        },
        {
          en: "Playing beyond time limit",
          es: "Jugar más allá del límite de tiempo",
          de: "Über Zeitlimit hinaus spielen",
          nl: "Spelen buiten tijdslimiet"
        },
        {
          en: "Exceeding score calculation",
          es: "Exceder cálculo de puntuación",
          de: "Punkteberechnung überschreiten",
          nl: "Score berekening overschrijden"
        },
        {
          en: "Drawing conclusions too quickly",
          es: "Sacar conclusiones demasiado rápido",
          de: "Zu schnell Schlüsse ziehen",
          nl: "Te snel conclusies trekken"
        }
      },
      correct: 0,
      explanation: {
        en: "Overdrawing (accidentally taking 8+ tiles) is a penalty situation. In tournaments, opponent chooses which tile(s) to return to bag, a significant disadvantage.",
        es: "Sobregirar (tomar accidentalmente 8+ fichas) es una situación de penalización. En torneos, el oponente elige qué ficha(s) devolver a la bolsa, una desventaja significativa.",
        de: "Überziehen (versehentlich 8+ Steine nehmen) ist eine Strafsituation. In Turnieren wählt der Gegner welche Steine in den Beutel zurückgelegt werden, ein erheblicher Nachteil.",
        nl: "Overtrekken (per ongeluk 8+ stenen nemen) is een straf situatie. In toernooien kiest tegenstander welke steen/stenen terug naar zak gaan, een aanzienlijk nadeel."
      }
    },
    {
      question: {
        en: "What is 'win percentage' vs 'equity' in computer analysis?",
        es: "¿Qué es 'porcentaje de victoria' vs 'equidad' en análisis de computadora?",
        de: "Was ist 'Gewinnprozentsatz' vs 'Eigenkapital' in Computer-Analyse?",
        nl: "Wat is 'win percentage' vs 'equity' in computer analyse?"
      },
      options: [
        {
          en: "Same concept, different terms",
          es: "Mismo concepto, términos diferentes",
          de: "Gleiches Konzept, verschiedene Begriffe",
          nl: "Zelfde concept, verschillende termen"
        },
        {
          en: "Win % = likelihood to win; equity = expected points",
          es: "% victoria = probabilidad de ganar; equidad = puntos esperados",
          de: "Gewinn-% = Gewinnwahrscheinlichkeit; Eigenkapital = erwartete Punkte",
          nl: "Win % = waarschijnlijkheid om te winnen; equity = verwachte punten"
        },
        {
          en: "Win % for tournaments only",
          es: "% victoria solo para torneos",
          de: "Gewinn-% nur für Turniere",
          nl: "Win % alleen voor toernooien"
        },
        {
          en: "Equity is more accurate",
          es: "Equidad es más precisa",
          de: "Eigenkapital ist genauer",
          nl: "Equity is nauwkeuriger"
        }
      ],
      correct: 1,
      explanation: {
        en: "Win % measures probability of winning (useful when ahead/behind). Equity measures expected point value. Different situations prioritize different metrics.",
        es: "% victoria mide probabilidad de ganar (útil cuando se está adelante/atrás). Equidad mide valor de punto esperado. Diferentes situaciones priorizan diferentes métricas.",
        de: "Gewinn-% misst Gewinnwahrscheinlichkeit (nützlich wenn vorne/hinten). Eigenkapital misst erwarteten Punktwert. Verschiedene Situationen priorisieren verschiedene Metriken.",
        nl: "Win % meet waarschijnlijkheid van winnen (nuttig wanneer voor/achter). Equity meet verwachte puntwaarde. Verschillende situaties prioriteren verschillende metrieken."
      }
    },
    {
      question: {
        en: "What is the most common bingo length in expert games?",
        es: "¿Cuál es la longitud de bingo más común en juegos expertos?",
        de: "Was ist die häufigste Bingo-Länge in Expertenspielen?",
        nl: "Wat is de meest voorkomende bingo-lengte in expert spellen?"
      },
      options: [
        {
          en: "Exactly 7 letters",
          es: "Exactamente 7 letras",
          de: "Genau 7 Buchstaben",
          nl: "Precies 7 letters"
        },
        {
          en: "7 or 8 letters (using one hook)",
          es: "7 u 8 letras (usando un gancho)",
          de: "7 oder 8 Buchstaben (mit einem Haken)",
          nl: "7 of 8 letters (met één haak)"
        },
        {
          en: "8+ letters",
          es: "8+ letras",
          de: "8+ Buchstaben",
          nl: "8+ letters"
        },
        {
          en: "No pattern exists",
          es: "No existe patrón",
          de: "Kein Muster existiert",
          nl: "Geen patroon bestaat"
        }
      ],
      correct: 1,
      explanation: {
        en: "Most bingos are 7 or 8 letters (playing through existing tile). Pure 7-letter bingos become rarer as board fills, making 8-letter plays more common mid-game.",
        es: "La mayoría de los bingos son de 7 u 8 letras (jugando a través de ficha existente). Los bingos puros de 7 letras se vuelven más raros a medida que se llena el tablero, haciendo que las jugadas de 8 letras sean más comunes a mitad del juego.",
        de: "Die meisten Bingos sind 7 oder 8 Buchstaben (durch existierenden Stein spielen). Reine 7-Buchstaben-Bingos werden seltener wenn sich das Brett füllt, wodurch 8-Buchstaben-Züge im Mittelspiel häufiger werden.",
        nl: "De meeste bingo's zijn 7 of 8 letters (door bestaande steen spelen). Pure 7-letter bingo's worden zeldzamer naarmate het bord vol raakt, waardoor 8-letter zetten vaker voorkomen mid-game."
      }
    },
    {
      question: {
        en: "What is a 'challenge sacrifice'?",
        es: "¿Qué es un 'sacrificio de desafío'?",
        de: "Was ist ein 'Challenge-Opfer'?",
        nl: "Wat is een 'uitdaging offer'?"
      },
      options: [
        {
          en: "Deliberately playing phoney to test opponent",
          es: "Jugar deliberadamente phoney para probar oponente",
          de: "Absichtlich Phoney spielen um Gegner zu testen",
          nl: "Opzettelijk phoney spelen om tegenstander te testen"
        },
        {
          en: "Challenging word you know is valid",
          es: "Desafiar palabra que sabes es válida",
          de: "Wort anfechten von dem Sie wissen dass es gültig ist",
          nl: "Woord uitdagen waarvan je weet dat het geldig is"
        },
        {
          en: "Both A and B depending on context",
          es: "Tanto A como B según contexto",
          de: "Sowohl A als auch B je nach Kontext",
          nl: "Zowel A als B afhankelijk van context"
        },
        {
          en: "Losing turn to challenge",
          es: "Perder turno por desafiar",
          de: "Zug verlieren durch Anfechten",
          nl: "Beurt verliezen door uitdagen"
        }
      ],
      correct: 0,
      explanation: {
        en: "A challenge sacrifice is deliberately playing an invalid word (phoney) to test if opponent knows it's wrong, or to force a specific rack/board situation if challenged.",
        es: "Un sacrificio de desafío es jugar deliberadamente una palabra inválida (phoney) para probar si el oponente sabe que es incorrecta, o para forzar una situación específica de soporte/tablero si es desafiada.",
        de: "Ein Challenge-Opfer ist absichtlich ein ungültiges Wort (Phoney) zu spielen um zu testen ob der Gegner weiß dass es falsch ist, oder um eine spezifische Rack/Brett-Situation zu erzwingen wenn angefochten wird.",
        nl: "Een uitdaging offer is opzettelijk een ongeldig woord (phoney) spelen om te testen of tegenstander weet dat het fout is, of om een specifieke rek/bord situatie af te dwingen als uitgedaagd."
      }
    },
    {
      question: {
        en: "What is the value of the letter Y in Scrabble?",
        es: "¿Cuál es el valor de la letra Y en Scrabble?",
        de: "Welchen Wert hat der Buchstabe Y im Scrabble?",
        nl: "Wat is de waarde van de letter Y in Scrabble?"
      },
      options: [
        {
          en: "2 points",
          es: "2 puntos",
          de: "2 Punkte",
          nl: "2 punten"
        },
        {
          en: "3 points",
          es: "3 puntos",
          de: "3 Punkte",
          nl: "3 punten"
        },
        {
          en: "4 points",
          es: "4 puntos",
          de: "4 Punkte",
          nl: "4 punten"
        },
        {
          en: "5 points",
          es: "5 puntos",
          de: "5 Punkte",
          nl: "5 punten"
        }
      ],
      correct: 2,
      explanation: {
        en: "The letter Y is worth 4 points in Scrabble. There are 2 Y tiles. Y is valuable because it functions as both vowel and consonant.",
        es: "La letra Y vale 4 puntos en Scrabble. Hay 2 fichas Y. Y es valiosa porque funciona como vocal y consonante.",
        de: "Der Buchstabe Y ist 4 Punkte wert im Scrabble. Es gibt 2 Y-Steine. Y ist wertvoll weil es sowohl als Vokal als auch als Konsonant funktioniert.",
        nl: "De letter Y is 4 punten waard in Scrabble. Er zijn 2 Y-stenen. Y is waardevol omdat het zowel als klinker als medeklinker fungeert."
      }
    }
  ]
};

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  } else if (typeof window !== 'undefined') {
    window.level6 = level6;
  }
})();
