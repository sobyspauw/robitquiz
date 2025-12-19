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
      ],
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
    },
    {
      question: {
        en: "What is 'board vision' in competitive Scrabble?",
        es: "¿Qué es la 'visión del tablero' en Scrabble competitivo?",
        de: "Was ist 'Brett-Vision' im kompetitiven Scrabble?",
        nl: "Wat is 'bord visie' in competitief Scrabble?"
      },
      options: [
        {en: "Physical eyesight quality", es: "Calidad de vista física", de: "Physische Sehkraft", nl: "Fysieke zichtkwaliteit"},
        {en: "Ability to spot high-scoring plays quickly", es: "Capacidad de detectar jugadas de alta puntuación rápidamente", de: "Fähigkeit hochbewertende Züge schnell zu erkennen", nl: "Vermogen om hoogscorende zetten snel te zien"},
        {en: "Memorizing board layout", es: "Memorizar diseño del tablero", de: "Brett-Layout auswendig lernen", nl: "Bordindeling onthouden"},
        {en: "Visualizing future moves", es: "Visualizar movimientos futuros", de: "Zukünftige Züge visualisieren", nl: "Toekomstige zetten visualiseren"}
      ],
      correct: 1,
      explanation: {
        en: "Board vision is the skill of quickly identifying scoring opportunities across the entire board. Expert players develop pattern recognition to find bingos and high-scoring spots rapidly.",
        es: "La visión del tablero es la habilidad de identificar rápidamente oportunidades de puntuación en todo el tablero. Los jugadores expertos desarrollan reconocimiento de patrones para encontrar bingos y puntos de alta puntuación rápidamente.",
        de: "Brett-Vision ist die Fähigkeit Punktemöglichkeiten schnell über das gesamte Brett zu identifizieren. Experten entwickeln Mustererkennung um Bingos und hochbewertende Stellen schnell zu finden.",
        nl: "Bord visie is de vaardigheid om snel scoringsmogelijkheden over het hele bord te identificeren. Expert spelers ontwikkelen patroonherkenning om bingo's en hoogscorende plekken snel te vinden."
      }
    },
    {
      question: {
        en: "What is 'tile efficiency' in rack management?",
        es: "¿Qué es la 'eficiencia de fichas' en gestión del soporte?",
        de: "Was ist 'Stein-Effizienz' im Rack-Management?",
        nl: "Wat is 'steen efficiëntie' in rek beheer?"
      },
      options: [
        {en: "Using fewest tiles to score most points", es: "Usar menos fichas para anotar más puntos", de: "Wenigste Steine verwenden um meiste Punkte zu erzielen", nl: "Minste stenen gebruiken om meeste punten te scoren"},
        {en: "Keeping tiles that work well together", es: "Mantener fichas que funcionan bien juntas", de: "Steine behalten die gut zusammenarbeiten", nl: "Stenen houden die goed samenwerken"},
        {en: "Playing tiles in order", es: "Jugar fichas en orden", de: "Steine in Reihenfolge spielen", nl: "Stenen in volgorde spelen"},
        {en: "Exchanging inefficient tiles", es: "Intercambiar fichas ineficientes", de: "Ineffiziente Steine tauschen", nl: "Inefficiënte stenen ruilen"}
      ],
      correct: 1,
      explanation: {
        en: "Tile efficiency means keeping letters that combine well and create multiple word options. Letters like RETAINS have high efficiency due to versatility and common combinations.",
        es: "La eficiencia de fichas significa mantener letras que se combinan bien y crean múltiples opciones de palabras. Letras como RETAINS tienen alta eficiencia debido a versatilidad y combinaciones comunes.",
        de: "Stein-Effizienz bedeutet Buchstaben zu behalten die sich gut kombinieren und mehrere Wortoptionen schaffen. Buchstaben wie RETAINS haben hohe Effizienz aufgrund von Vielseitigkeit und häufigen Kombinationen.",
        nl: "Steen efficiëntie betekent letters houden die goed combineren en meerdere woordopties creëren. Letters zoals RETAINS hebben hoge efficiëntie vanwege veelzijdigheid en veelvoorkomende combinaties."
      }
    },
    {
      question: {
        en: "What is 'word knowledge depth' vs 'breadth'?",
        es: "¿Qué es 'profundidad de conocimiento de palabras' vs 'amplitud'?",
        de: "Was ist 'Wortwissen-Tiefe' vs 'Breite'?",
        nl: "Wat is 'woord kennis diepte' vs 'breedte'?"
      },
      options: [
        {en: "Depth = rare words; breadth = common words", es: "Profundidad = palabras raras; amplitud = palabras comunes", de: "Tiefe = seltene Wörter; Breite = häufige Wörter", nl: "Diepte = zeldzame woorden; breedte = veelvoorkomende woorden"},
        {en: "Depth = knowing inflections; breadth = knowing stems", es: "Profundidad = conocer inflexiones; amplitud = conocer raíces", de: "Tiefe = Flexionen kennen; Breite = Stämme kennen", nl: "Diepte = verbuigingen kennen; breedte = stammen kennen"},
        {en: "Depth = long words; breadth = short words", es: "Profundidad = palabras largas; amplitud = palabras cortas", de: "Tiefe = lange Wörter; Breite = kurze Wörter", nl: "Diepte = lange woorden; breedte = korte woorden"},
        {en: "Same concept", es: "Mismo concepto", de: "Gleiches Konzept", nl: "Zelfde concept"}
      ],
      correct: 1,
      explanation: {
        en: "Depth means knowing all forms of words you know (plurals, verb tenses, -ING/-ED/-ER/-EST). Breadth means knowing many different root words. Both are crucial for expert play.",
        es: "Profundidad significa conocer todas las formas de palabras que conoces (plurales, tiempos verbales, -ING/-ED/-ER/-EST). Amplitud significa conocer muchas palabras raíz diferentes. Ambas son cruciales para juego experto.",
        de: "Tiefe bedeutet alle Formen von Wörtern zu kennen die Sie kennen (Plurale, Zeitformen, -ING/-ED/-ER/-EST). Breite bedeutet viele verschiedene Wurzelwörter zu kennen. Beide sind entscheidend für Expertenspiel.",
        nl: "Diepte betekent alle vormen kennen van woorden die je kent (meervouden, werkwoordstijden, -ING/-ED/-ER/-EST). Breedte betekent veel verschillende stamwoorden kennen. Beide zijn cruciaal voor expert spel."
      }
    },
    {
      question: {
        en: "What is 'time pressure management' in tournament play?",
        es: "¿Qué es 'gestión de presión de tiempo' en juego de torneo?",
        de: "Was ist 'Zeitdruck-Management' im Turnierspiel?",
        nl: "Wat is 'tijdsdruk beheer' in toernooi spel?"
      },
      options: [
        {en: "Playing faster when ahead", es: "Jugar más rápido cuando se va adelante", de: "Schneller spielen wenn vorne", nl: "Sneller spelen wanneer voor"},
        {en: "Using all available time", es: "Usar todo el tiempo disponible", de: "Alle verfügbare Zeit verwenden", nl: "Alle beschikbare tijd gebruiken"},
        {en: "Balancing time spent per move based on game situation", es: "Equilibrar tiempo gastado por movimiento según situación del juego", de: "Zeit pro Zug basierend auf Spielsituation ausbalancieren", nl: "Tijd per zet balanceren op basis van spel situatie"},
        {en: "Ignoring clock", es: "Ignorar reloj", de: "Uhr ignorieren", nl: "Klok negeren"}
      ],
      correct: 2,
      explanation: {
        en: "Good time management means spending more time on critical decisions (endgame, close scores) and playing faster on routine moves, to avoid time penalties while maintaining quality.",
        es: "Buena gestión de tiempo significa gastar más tiempo en decisiones críticas (final, puntuaciones cercanas) y jugar más rápido en movimientos rutinarios, para evitar penalizaciones de tiempo mientras se mantiene calidad.",
        de: "Gutes Zeitmanagement bedeutet mehr Zeit für kritische Entscheidungen aufzuwenden (Endspiel, knappe Punktzahlen) und bei Routinezügen schneller zu spielen, um Zeitstrafen zu vermeiden während Qualität erhalten bleibt.",
        nl: "Goed tijdsbeheer betekent meer tijd besteden aan kritieke beslissingen (eindspel, krappe scores) en sneller spelen bij routine zetten, om tijdsstraffen te vermijden terwijl kwaliteit behouden blijft."
      }
    },
    {
      question: {
        en: "What are 'consonant dumps' in Scrabble?",
        es: "¿Qué son los 'descartes de consonantes' en Scrabble?",
        de: "Was sind 'Konsonanten-Dumps' im Scrabble?",
        nl: "Wat zijn 'medeklinker dumps' in Scrabble?"
      },
      options: [
        {en: "Playing multiple consonants to rebalance vowel-poor rack", es: "Jugar múltiples consonantes para reequilibrar soporte pobre en vocales", de: "Mehrere Konsonanten spielen um vokal-armes Rack auszugleichen", nl: "Meerdere medeklinkers spelen om klinker-arm rek te herbalanceren"},
        {en: "Exchanging all consonants", es: "Intercambiar todas las consonantes", de: "Alle Konsonanten tauschen", nl: "Alle medeklinkers ruilen"},
        {en: "Avoiding consonant-heavy words", es: "Evitar palabras pesadas en consonantes", de: "Konsonantenreiche Wörter vermeiden", nl: "Medeklinker-rijke woorden vermijden"},
        {en: "Discarding high-value consonants", es: "Descartar consonantes de alto valor", de: "Hochwertige Konsonanten verwerfen", nl: "Hoogwaardige medeklinkers weggooien"}
      ],
      correct: 0,
      explanation: {
        en: "Consonant dumps mean playing 3-4 consonants when you have too many (vowel-poor rack), often for lower points, to improve rack balance and draw more vowels.",
        es: "Los descartes de consonantes significan jugar 3-4 consonantes cuando tienes demasiadas (soporte pobre en vocales), a menudo por menos puntos, para mejorar el equilibrio del soporte y sacar más vocales.",
        de: "Konsonanten-Dumps bedeuten 3-4 Konsonanten zu spielen wenn Sie zu viele haben (vokal-armes Rack), oft für weniger Punkte, um Rack-Balance zu verbessern und mehr Vokale zu ziehen.",
        nl: "Medeklinker dumps betekenen 3-4 medeklinkers spelen wanneer je er te veel hebt (klinker-arm rek), vaak voor lagere punten, om rek balans te verbeteren en meer klinkers te trekken."
      }
    },
    {
      question: {
        en: "What is 'rack synergy' in tile valuation?",
        es: "¿Qué es la 'sinergia del soporte' en valoración de fichas?",
        de: "Was ist 'Rack-Synergie' bei der Stein-Bewertung?",
        nl: "Wat is 'rek synergie' in steen waardering?"
      },
      options: [
        {en: "All tiles same value", es: "Todas las fichas mismo valor", de: "Alle Steine gleicher Wert", nl: "Alle stenen zelfde waarde"},
        {en: "How well tiles work together to form words", es: "Qué tan bien funcionan las fichas juntas para formar palabras", de: "Wie gut Steine zusammenarbeiten um Wörter zu bilden", nl: "Hoe goed stenen samenwerken om woorden te vormen"},
        {en: "Alphabetical order", es: "Orden alfabético", de: "Alphabetische Reihenfolge", nl: "Alfabetische volgorde"},
        {en: "Point total", es: "Total de puntos", de: "Punktesumme", nl: "Punten totaal"}
      ],
      correct: 1,
      explanation: {
        en: "Rack synergy measures how well tiles combine. RETAINS has high synergy (many combinations); JQQVXZ has terrible synergy (few playable combinations despite high points).",
        es: "La sinergia del soporte mide qué tan bien se combinan las fichas. RETAINS tiene alta sinergia (muchas combinaciones); JQQVXZ tiene terrible sinergia (pocas combinaciones jugables a pesar de altos puntos).",
        de: "Rack-Synergie misst wie gut sich Steine kombinieren. RETAINS hat hohe Synergie (viele Kombinationen); JQQVXZ hat schreckliche Synergie (wenige spielbare Kombinationen trotz hoher Punkte).",
        nl: "Rek synergie meet hoe goed stenen combineren. RETAINS heeft hoge synergie (veel combinaties); JQQVXZ heeft verschrikkelijke synergie (weinig speelbare combinaties ondanks hoge punten)."
      }
    },
    {
      question: {
        en: "What is 'board geometry' in play selection?",
        es: "¿Qué es la 'geometría del tablero' en selección de jugadas?",
        de: "Was ist 'Brett-Geometrie' bei der Zugauswahl?",
        nl: "Wat is 'bord geometrie' in zet selectie?"
      },
      options: [
        {en: "Board shape", es: "Forma del tablero", de: "Brett-Form", nl: "Bord vorm"},
        {en: "How words create or block future opportunities", es: "Cómo las palabras crean o bloquean oportunidades futuras", de: "Wie Wörter zukünftige Möglichkeiten schaffen oder blockieren", nl: "Hoe woorden toekomstige kansen creëren of blokkeren"},
        {en: "Premium square positions", es: "Posiciones de cuadrados premium", de: "Premium-Feld-Positionen", nl: "Premium vak posities"},
        {en: "Symmetrical plays", es: "Jugadas simétricas", de: "Symmetrische Züge", nl: "Symmetrische zetten"}
      ],
      correct: 1,
      explanation: {
        en: "Board geometry refers to how play placement affects future scoring lanes. Opening geometry creates opportunities (when behind); closing geometry limits them (when ahead).",
        es: "La geometría del tablero se refiere a cómo la colocación de jugadas afecta los carriles de puntuación futuros. La geometría abierta crea oportunidades (cuando se va atrás); la geometría cerrada las limita (cuando se va adelante).",
        de: "Brett-Geometrie bezieht sich darauf wie Zugplatzierung zukünftige Punktebahnen beeinflusst. Öffnende Geometrie schafft Möglichkeiten (wenn hinten); schließende Geometrie begrenzt sie (wenn vorne).",
        nl: "Bord geometrie verwijst naar hoe zet plaatsing toekomstige score banen beïnvloedt. Openende geometrie creëert kansen (wanneer achter); sluitende geometrie beperkt ze (wanneer voor)."
      }
    },
    {
      question: {
        en: "What is 'alpha-beta pruning' in Scrabble AI?",
        es: "¿Qué es la 'poda alfa-beta' en IA de Scrabble?",
        de: "Was ist 'Alpha-Beta-Beschneidung' in Scrabble-KI?",
        nl: "Wat is 'alpha-beta snoeien' in Scrabble AI?"
      },
      options: [
        {en: "Removing letters from alphabet", es: "Eliminar letras del alfabeto", de: "Buchstaben aus Alphabet entfernen", nl: "Letters uit alfabet verwijderen"},
        {en: "Search algorithm to find optimal moves efficiently", es: "Algoritmo de búsqueda para encontrar movimientos óptimos eficientemente", de: "Suchalgorithmus um optimale Züge effizient zu finden", nl: "Zoekalgoritme om optimale zetten efficiënt te vinden"},
        {en: "Testing word validity", es: "Probar validez de palabras", de: "Wortgültigkeit testen", nl: "Woord geldigheid testen"},
        {en: "Scoring calculation", es: "Cálculo de puntuación", de: "Punkteberechnung", nl: "Score berekening"}
      ],
      correct: 1,
      explanation: {
        en: "Alpha-beta pruning is a search optimization technique used by strong AI programs to eliminate inferior move branches early, allowing faster and deeper move analysis.",
        es: "La poda alfa-beta es una técnica de optimización de búsqueda utilizada por programas de IA fuertes para eliminar ramas de movimiento inferiores temprano, permitiendo análisis de movimiento más rápido y profundo.",
        de: "Alpha-Beta-Beschneidung ist eine Such-Optimierungstechnik die von starken KI-Programmen verwendet wird um unterlegene Zugzweige früh zu eliminieren, was schnellere und tiefere Zuganalyse ermöglicht.",
        nl: "Alpha-beta snoeien is een zoek optimalisatie techniek gebruikt door sterke AI programma's om inferieure zet takken vroeg te elimineren, wat snellere en diepere zet analyse mogelijk maakt."
      }
    },
    {
      question: {
        en: "What is 'positional sacrifice' in Scrabble?",
        es: "¿Qué es el 'sacrificio posicional' en Scrabble?",
        de: "Was ist 'Positions-Opfer' im Scrabble?",
        nl: "Wat is 'positioneel offer' in Scrabble?"
      },
      options: [
        {en: "Giving up points now for better rack/board position", es: "Renunciar a puntos ahora por mejor posición de soporte/tablero", de: "Punkte jetzt aufgeben für bessere Rack/Brett-Position", nl: "Punten nu opgeven voor betere rek/bord positie"},
        {en: "Playing in bad positions", es: "Jugar en malas posiciones", de: "In schlechten Positionen spielen", nl: "Spelen in slechte posities"},
        {en: "Sacrificing rack quality", es: "Sacrificar calidad del soporte", de: "Rack-Qualität opfern", nl: "Rek kwaliteit opofferen"},
        {en: "Blocking yourself", es: "Bloquearte a ti mismo", de: "Sich selbst blockieren", nl: "Jezelf blokkeren"}
      ],
      correct: 0,
      explanation: {
        en: "Positional sacrifice means taking fewer points on current turn to maintain better rack balance, keep bingo potential, or improve future board geometry.",
        es: "El sacrificio posicional significa tomar menos puntos en el turno actual para mantener mejor equilibrio del soporte, mantener potencial de bingo o mejorar la geometría futura del tablero.",
        de: "Positions-Opfer bedeutet weniger Punkte im aktuellen Zug zu nehmen um bessere Rack-Balance zu erhalten, Bingo-Potenzial zu behalten oder zukünftige Brett-Geometrie zu verbessern.",
        nl: "Positioneel offer betekent minder punten nemen in huidige beurt om betere rek balans te behouden, bingo potentieel te houden of toekomstige bord geometrie te verbeteren."
      }
    },
    {
      question: {
        en: "What is 'challenge equity' in decision making?",
        es: "¿Qué es la 'equidad de desafío' en toma de decisiones?",
        de: "Was ist 'Challenge-Eigenkapital' bei Entscheidungsfindung?",
        nl: "Wat is 'uitdaging waarde' in besluitvorming?"
      },
      options: [
        {en: "Always challenge uncertain words", es: "Siempre desafiar palabras inciertas", de: "Immer unsichere Wörter anfechten", nl: "Altijd onzekere woorden uitdagen"},
        {en: "Never challenge unless certain", es: "Nunca desafiar a menos que estés seguro", de: "Niemals anfechten außer sicher", nl: "Nooit uitdagen tenzij zeker"},
        {en: "Calculating expected value of challenging vs not", es: "Calcular valor esperado de desafiar vs no", de: "Erwarteten Wert von Anfechten vs Nicht-Anfechten berechnen", nl: "Verwachte waarde berekenen van uitdagen vs niet"},
        {en: "Random challenging", es: "Desafiar aleatoriamente", de: "Zufällig anfechten", nl: "Willekeurig uitdagen"}
      ],
      correct: 2,
      explanation: {
        en: "Challenge equity means weighing expected points from successful challenge vs penalty for failed challenge, factoring in your confidence level and game situation (ahead/behind).",
        es: "La equidad de desafío significa sopesar puntos esperados de desafío exitoso vs penalización por desafío fallido, considerando tu nivel de confianza y situación del juego (adelante/atrás).",
        de: "Challenge-Eigenkapital bedeutet erwartete Punkte aus erfolgreichem Anfechten gegen Strafe für fehlgeschlagenes Anfechten abzuwägen, unter Berücksichtigung von Vertrauensniveau und Spielsituation (vorne/hinten).",
        nl: "Uitdaging waarde betekent verwachte punten van succesvolle uitdaging afwegen tegen straf voor mislukte uitdaging, rekening houdend met vertrouwensniveau en spel situatie (voor/achter)."
      }
    },
    {
      question: {
        en: "What is 'leave smoothing' in rack management?",
        es: "¿Qué es el 'suavizado de lo que queda' en gestión del soporte?",
        de: "Was ist 'Leave-Glättung' im Rack-Management?",
        nl: "Wat is 'leave gladstrijken' in rek beheer?"
      },
      options: [
        {en: "Making rack physically smooth", es: "Hacer soporte físicamente suave", de: "Rack physisch glatt machen", nl: "Rek fysiek glad maken"},
        {en: "Optimizing remaining tiles for flexibility", es: "Optimizar fichas restantes para flexibilidad", de: "Verbleibende Steine für Flexibilität optimieren", nl: "Resterende stenen optimaliseren voor flexibiliteit"},
        {en: "Arranging tiles in order", es: "Organizar fichas en orden", de: "Steine in Reihenfolge anordnen", nl: "Stenen op volgorde rangschikken"},
        {en: "Balancing point values", es: "Equilibrar valores de puntos", de: "Punktwerte ausgleichen", nl: "Puntwaarden balanceren"}
      ],
      correct: 1,
      explanation: {
        en: "Leave smoothing means consistently making plays that result in flexible, balanced racks rather than awkward combinations, maximizing future scoring opportunities.",
        es: "El suavizado de lo que queda significa hacer constantemente jugadas que resulten en soportes flexibles y equilibrados en lugar de combinaciones incómodas, maximizando oportunidades de puntuación futuras.",
        de: "Leave-Glättung bedeutet konsistent Züge zu machen die zu flexiblen ausgewogenen Racks führen statt zu unbeholfenen Kombinationen, wodurch zukünftige Punktemöglichkeiten maximiert werden.",
        nl: "Leave gladstrijken betekent consistent zetten maken die resulteren in flexibele gebalanceerde rekken in plaats van onhandige combinaties, waardoor toekomstige scoringsmogelijkheden worden gemaximaliseerd."
      }
    },
    {
      question: {
        en: "What is 'rack mixing' or 'tile rearrangement' psychology?",
        es: "¿Qué es la psicología de 'mezcla de soporte' o 'reorganización de fichas'?",
        de: "Was ist 'Rack-Mischen' oder 'Stein-Umordnung' Psychologie?",
        nl: "Wat is 'rek mixen' of 'steen herschikking' psychologie?"
      },
      options: [
        {en: "Wastes time", es: "Desperdicia tiempo", de: "Verschwendet Zeit", nl: "Verspilt tijd"},
        {en: "Helps spot different word combinations and patterns", es: "Ayuda a detectar diferentes combinaciones y patrones de palabras", de: "Hilft verschiedene Wortkombinationen und Muster zu erkennen", nl: "Helpt verschillende woord combinaties en patronen te zien"},
        {en: "Confuses opponent", es: "Confunde al oponente", de: "Verwirrt Gegner", nl: "Verward tegenstander"},
        {en: "Required by rules", es: "Requerido por reglas", de: "Von Regeln gefordert", nl: "Vereist door regels"}
      },
      correct: 1,
      explanation: {
        en: "Rearranging tiles on your rack activates different pattern recognition pathways in your brain, helping you spot words you might otherwise miss. Most experts constantly reorganize.",
        es: "Reorganizar fichas en tu soporte activa diferentes vías de reconocimiento de patrones en tu cerebro, ayudándote a detectar palabras que de otra manera podrías perder. La mayoría de los expertos reorganizan constantemente.",
        de: "Neuanordnen von Steinen auf Ihrem Rack aktiviert verschiedene Mustererkennungswege in Ihrem Gehirn und hilft Ihnen Wörter zu erkennen die Sie sonst verpassen würden. Die meisten Experten reorganisieren ständig.",
        nl: "Stenen herschikken op je rek activeert verschillende patroonherkenningspaden in je brein, waardoor je woorden ziet die je anders zou missen. De meeste experts herschikken constant."
      }
    },
    {
      question: {
        en: "What is 'tempo' in Scrabble strategy?",
        es: "¿Qué es el 'tempo' en estrategia de Scrabble?",
        de: "Was ist 'Tempo' in der Scrabble-Strategie?",
        nl: "Wat is 'tempo' in Scrabble strategie?"
      },
      options: [
        {en: "Game speed", es: "Velocidad del juego", de: "Spielgeschwindigkeit", nl: "Spel snelheid"},
        {en: "Control of scoring initiative and board development", es: "Control de iniciativa de puntuación y desarrollo del tablero", de: "Kontrolle über Punkte-Initiative und Brett-Entwicklung", nl: "Controle van scoring initiatief en bord ontwikkeling"},
        {en: "Time per move", es: "Tiempo por movimiento", de: "Zeit pro Zug", nl: "Tijd per zet"},
        {en: "Rhythm of play", es: "Ritmo de juego", de: "Spiel-Rhythmus", nl: "Spel ritme"}
      ],
      correct: 1,
      explanation: {
        en: "Tempo means controlling the flow of the game - dictating which areas open, forcing opponent to react to your threats rather than executing their own plans.",
        es: "El tempo significa controlar el flujo del juego - dictando qué áreas se abren, forzando al oponente a reaccionar a tus amenazas en lugar de ejecutar sus propios planes.",
        de: "Tempo bedeutet den Spielfluss zu kontrollieren - zu diktieren welche Bereiche sich öffnen, den Gegner zu zwingen auf Ihre Bedrohungen zu reagieren statt eigene Pläne auszuführen.",
        nl: "Tempo betekent de stroom van het spel controleren - dicteren welke gebieden openen, tegenstander dwingen te reageren op jouw bedreigingen in plaats van eigen plannen uitvoeren."
      }
    },
    {
      question: {
        en: "What is 'scoring variance' in Scrabble analysis?",
        es: "¿Qué es la 'varianza de puntuación' en análisis de Scrabble?",
        de: "Was ist 'Punkte-Varianz' in der Scrabble-Analyse?",
        nl: "Wat is 'score variantie' in Scrabble analyse?"
      },
      options: [
        {en: "Difference between players' scores", es: "Diferencia entre puntuaciones de jugadores", de: "Unterschied zwischen Spieler-Punktzahlen", nl: "Verschil tussen spelers scores"},
        {en: "Potential score fluctuation from a move", es: "Fluctuación potencial de puntuación de un movimiento", de: "Potentielle Punkteschwankung aus einem Zug", nl: "Potentiële score fluctuatie van een zet"},
        {en: "Score calculation errors", es: "Errores de cálculo de puntuación", de: "Punkteberechnungsfehler", nl: "Score berekeningsfouten"},
        {en: "Random score changes", es: "Cambios aleatorios de puntuación", de: "Zufällige Punkteänderungen", nl: "Willekeurige score veranderingen"}
      ],
      correct: 1,
      explanation: {
        en: "Scoring variance measures how much a play's outcome could fluctuate based on opponent's response. Low-variance plays (defensive) are safer when ahead; high-variance (opening) help when behind.",
        es: "La varianza de puntuación mide cuánto podría fluctuar el resultado de una jugada según la respuesta del oponente. Las jugadas de baja varianza (defensivas) son más seguras cuando se va adelante; alta varianza (apertura) ayudan cuando se va atrás.",
        de: "Punkte-Varianz misst wie stark das Ergebnis eines Zugs basierend auf Gegner-Antwort schwanken könnte. Niedrig-Varianz-Züge (defensiv) sind sicherer wenn vorne; Hoch-Varianz (öffnend) helfen wenn hinten.",
        nl: "Score variantie meet hoeveel de uitkomst van een zet zou kunnen fluctueren op basis van tegenstander reactie. Lage-variantie zetten (defensief) zijn veiliger wanneer voor; hoge-variantie (openend) helpen wanneer achter."
      }
    },
    {
      question: {
        en: "What is 'bag composition awareness' in mid-game?",
        es: "¿Qué es la 'conciencia de composición de la bolsa' a mitad del juego?",
        de: "Was ist 'Beutel-Zusammensetzungs-Bewusstsein' im Mittelspiel?",
        nl: "Wat is 'zak samenstelling bewustzijn' in mid-game?"
      },
      options: [
        {en: "Knowing exact tiles in bag", es: "Conocer fichas exactas en la bolsa", de: "Genaue Steine im Beutel kennen", nl: "Exacte stenen in zak kennen"},
        {en: "Tracking played tiles to estimate remaining tiles", es: "Rastrear fichas jugadas para estimar fichas restantes", de: "Gespielte Steine verfolgen um verbleibende Steine zu schätzen", nl: "Gespeelde stenen volgen om resterende stenen te schatten"},
        {en: "Bag weight estimation", es: "Estimación de peso de la bolsa", de: "Beutelgewicht-Schätzung", nl: "Zakgewicht schatting"},
        {en: "Counting tiles left", es: "Contar fichas restantes", de: "Verbleibende Steine zählen", nl: "Resterende stenen tellen"}
      ],
      correct: 1,
      explanation: {
        en: "Bag awareness means tracking which tiles have been played to estimate what remains. This helps evaluate risk of drawing bad tiles when making rack decisions.",
        es: "La conciencia de la bolsa significa rastrear qué fichas se han jugado para estimar qué queda. Esto ayuda a evaluar el riesgo de sacar malas fichas al tomar decisiones del soporte.",
        de: "Beutel-Bewusstsein bedeutet zu verfolgen welche Steine gespielt wurden um zu schätzen was verbleibt. Dies hilft das Risiko schlechte Steine zu ziehen bei Rack-Entscheidungen zu bewerten.",
        nl: "Zak bewustzijn betekent volgen welke stenen zijn gespeeld om te schatten wat overblijft. Dit helpt risico inschatten van slechte stenen trekken bij rek beslissingen."
      }
    },
    {
      question: {
        en: "What is 'counter-intuitive sacrifice' in advanced play?",
        es: "¿Qué es el 'sacrificio contra-intuitivo' en juego avanzado?",
        de: "Was ist 'kontraintuitives Opfer' im fortgeschrittenen Spiel?",
        nl: "Wat is 'contra-intuïtief offer' in gevorderd spel?"
      },
      options: [
        {en: "Intentionally scoring low to maintain perfect rack", es: "Intencionalmente anotar bajo para mantener soporte perfecto", de: "Absichtlich niedrig punkten um perfektes Rack zu erhalten", nl: "Opzettelijk laag scoren om perfect rek te behouden"},
        {en: "Making random plays", es: "Hacer jugadas aleatorias", de: "Zufällige Züge machen", nl: "Willekeurige zetten maken"},
        {en: "Always playing maximum points", es: "Siempre jugar puntos máximos", de: "Immer maximale Punkte spielen", nl: "Altijd maximum punten spelen"},
        {en: "Avoiding bingos", es: "Evitar bingos", de: "Bingos vermeiden", nl: "Bingo's vermijden"}
      ],
      correct: 0,
      explanation: {
        en: "Counter-intuitive sacrifice means sometimes playing for very few points (10-15) to maintain an exceptional rack (like keeping SATIRE intact) when high-value bingo opportunities exist.",
        es: "El sacrificio contra-intuitivo significa a veces jugar por muy pocos puntos (10-15) para mantener un soporte excepcional (como mantener SATIRE intacto) cuando existen oportunidades de bingo de alto valor.",
        de: "Kontraintuitives Opfer bedeutet manchmal für sehr wenige Punkte zu spielen (10-15) um ein außergewöhnliches Rack zu erhalten (wie SATIRE intakt zu halten) wenn hochwertige Bingo-Möglichkeiten existieren.",
        nl: "Contra-intuïtief offer betekent soms spelen voor zeer weinig punten (10-15) om een uitzonderlijk rek te behouden (zoals SATIRE intact houden) wanneer hoogwaardige bingo kansen bestaan."
      }
    },
    {
      question: {
        en: "What is 'endgame forcing' strategy?",
        es: "¿Qué es la estrategia de 'forzar el final'?",
        de: "Was ist 'Endspiel-Erzwingen' Strategie?",
        nl: "Wat is 'eindspel forceren' strategie?"
      },
      options: [
        {en: "Playing quickly to end game", es: "Jugar rápidamente para terminar juego", de: "Schnell spielen um Spiel zu beenden", nl: "Snel spelen om spel te beëindigen"},
        {en: "Manipulating bag depletion to reach favorable endgame", es: "Manipular agotamiento de bolsa para alcanzar final favorable", de: "Beutel-Erschöpfung manipulieren um günstiges Endspiel zu erreichen", nl: "Zak uitputting manipuleren om gunstig eindspel te bereiken"},
        {en: "Forcing opponent to pass", es: "Forzar al oponente a pasar", de: "Gegner zum Passen zwingen", nl: "Tegenstander dwingen te passen"},
        {en: "Always going out first", es: "Siempre salir primero", de: "Immer zuerst aussteigen", nl: "Altijd als eerste uitgaan"}
      ],
      correct: 1,
      explanation: {
        en: "Endgame forcing means controlling when the bag empties through tile turnover, trying to create an endgame where you have rack advantage or favorable unseen tiles.",
        es: "Forzar el final significa controlar cuándo se vacía la bolsa a través de la rotación de fichas, tratando de crear un final donde tengas ventaja de soporte o fichas no vistas favorables.",
        de: "Endspiel-Erzwingen bedeutet zu kontrollieren wann der Beutel sich durch Stein-Umsatz leert, um ein Endspiel zu schaffen wo Sie Rack-Vorteil oder günstige ungesehene Steine haben.",
        nl: "Eindspel forceren betekent controleren wanneer de zak leeg raakt door steen omzet, proberen een eindspel te creëren waar je rek voordeel of gunstige ongeziene stenen hebt."
      }
    },
    {
      question: {
        en: "What is 'semi-bluffing' with phoneys in competitive play?",
        es: "¿Qué es el 'semi-faroleo' con phoneys en juego competitivo?",
        de: "Was ist 'Semi-Bluffen' mit Phoneys im kompetitiven Spiel?",
        nl: "Wat is 'semi-bluffen' met phoneys in competitief spel?"
      },
      options: [
        {en: "Playing words you're 50% sure are valid", es: "Jugar palabras de las que estás 50% seguro que son válidas", de: "Wörter spielen von denen Sie 50% sicher sind dass sie gültig sind", nl: "Woorden spelen waarvan je 50% zeker bent dat ze geldig zijn"},
        {en: "Never bluffing", es: "Nunca farolear", de: "Niemals bluffen", nl: "Nooit bluffen"},
        {en: "Always playing phoneys", es: "Siempre jugar phoneys", de: "Immer Phoneys spielen", nl: "Altijd phoneys spelen"},
        {en: "Pretending to bluff", es: "Fingir farolear", de: "Vorgeben zu bluffen", nl: "Doen alsof je bluft"}
      ],
      correct: 0,
      explanation: {
        en: "Semi-bluffing means playing uncertain words (40-60% confidence) when situation justifies risk. When ahead, play only certain words; when behind, semi-bluffing can help catch up if unchallenged.",
        es: "El semi-faroleo significa jugar palabras inciertas (confianza 40-60%) cuando la situación justifica el riesgo. Cuando se va adelante, jugar solo palabras seguras; cuando se va atrás, el semi-faroleo puede ayudar a alcanzar si no es desafiado.",
        de: "Semi-Bluffen bedeutet unsichere Wörter zu spielen (40-60% Vertrauen) wenn Situation Risiko rechtfertigt. Wenn vorne nur sichere Wörter spielen; wenn hinten kann Semi-Bluffen helfen aufzuholen wenn nicht angefochten.",
        nl: "Semi-bluffen betekent onzekere woorden spelen (40-60% vertrouwen) wanneer situatie risico rechtvaardigt. Wanneer voor alleen zekere woorden spelen; wanneer achter kan semi-bluffen helpen inhalen als niet uitgedaagd."
      }
    },
    {
      question: {
        en: "What is 'probabilistic tile tracking' in expert play?",
        es: "¿Qué es el 'rastreo probabilístico de fichas' en juego experto?",
        de: "Was ist 'probabilistische Stein-Verfolgung' im Expertenspiel?",
        nl: "Wat is 'probabilistisch steen volgen' in expert spel?"
      },
      options: [
        {en: "Guessing randomly", es: "Adivinar aleatoriamente", de: "Zufällig raten", nl: "Willekeurig raden"},
        {en: "Calculating likelihood of opponent holding specific tiles", es: "Calcular probabilidad de que oponente tenga fichas específicas", de: "Wahrscheinlichkeit berechnen dass Gegner bestimmte Steine hält", nl: "Waarschijnlijkheid berekenen dat tegenstander specifieke stenen heeft"},
        {en: "Counting tiles played", es: "Contar fichas jugadas", de: "Gespielte Steine zählen", nl: "Gespeelde stenen tellen"},
        {en: "Memorizing tile positions", es: "Memorizar posiciones de fichas", de: "Steinpositionen auswendig lernen", nl: "Steen posities onthouden"}
      ],
      correct: 1,
      explanation: {
        en: "Probabilistic tracking combines tile counting with inference from opponent's plays to estimate likelihood they hold specific tiles, refining probabilities each turn for optimal endgame decisions.",
        es: "El rastreo probabilístico combina el conteo de fichas con la inferencia de las jugadas del oponente para estimar la probabilidad de que tengan fichas específicas, refinando probabilidades cada turno para decisiones óptimas del final.",
        de: "Probabilistische Verfolgung kombiniert Stein-Zählen mit Schlussfolgerung aus Gegner-Zügen um Wahrscheinlichkeit zu schätzen dass sie bestimmte Steine halten, wobei Wahrscheinlichkeiten jeden Zug für optimale Endspiel-Entscheidungen verfeinert werden.",
        nl: "Probabilistisch volgen combineert steen tellen met inferentie uit tegenstander zetten om waarschijnlijkheid te schatten dat ze specifieke stenen hebben, waarbij waarschijnlijkheden elke beurt worden verfijnd voor optimale eindspel beslissingen."
      }
    },
    {
      question: {
        en: "What is 'rack entropy' in information theory applied to Scrabble?",
        es: "¿Qué es la 'entropía del soporte' en teoría de la información aplicada a Scrabble?",
        de: "Was ist 'Rack-Entropie' in Informationstheorie angewendet auf Scrabble?",
        nl: "Wat is 'rek entropie' in informatietheorie toegepast op Scrabble?"
      },
      options: [
        {en: "Rack disorder", es: "Desorden del soporte", de: "Rack-Unordnung", nl: "Rek wanorde"},
        {en: "Measure of rack flexibility and word-forming potential", es: "Medida de flexibilidad del soporte y potencial de formación de palabras", de: "Maß für Rack-Flexibilität und Wortbildungspotenzial", nl: "Maat voor rek flexibiliteit en woord-vormend potentieel"},
        {en: "Randomness of tiles", es: "Aleatoriedad de fichas", de: "Zufälligkeit der Steine", nl: "Willekeurigheid van stenen"},
        {en: "Rack temperature", es: "Temperatura del soporte", de: "Rack-Temperatur", nl: "Rek temperatuur"}
      ],
      correct: 1,
      explanation: {
        en: "Rack entropy measures uncertainty/flexibility in possible plays. High entropy (RETAINS) means many options; low entropy (QJXVWZZ) means few options despite theoretical value.",
        es: "La entropía del soporte mide incertidumbre/flexibilidad en posibles jugadas. Alta entropía (RETAINS) significa muchas opciones; baja entropía (QJXVWZZ) significa pocas opciones a pesar del valor teórico.",
        de: "Rack-Entropie misst Unsicherheit/Flexibilität in möglichen Zügen. Hohe Entropie (RETAINS) bedeutet viele Optionen; niedrige Entropie (QJXVWZZ) bedeutet wenige Optionen trotz theoretischem Wert.",
        nl: "Rek entropie meet onzekerheid/flexibiliteit in mogelijke zetten. Hoge entropie (RETAINS) betekent veel opties; lage entropie (QJXVWZZ) betekent weinig opties ondanks theoretische waarde."
      }
    },
    {
      question: {
        en: "What is 'game tree complexity' in Scrabble computational analysis?",
        es: "¿Qué es la 'complejidad del árbol de juego' en análisis computacional de Scrabble?",
        de: "Was ist 'Spielbaum-Komplexität' in Scrabble-Computeranalyse?",
        nl: "Wat is 'spelboom complexiteit' in Scrabble computationele analyse?"
      },
      options: [
        {en: "Number of possible game sequences", es: "Número de secuencias de juego posibles", de: "Anzahl möglicher Spielsequenzen", nl: "Aantal mogelijke spel reeksen"},
        {en: "Difficulty of game rules", es: "Dificultad de reglas del juego", de: "Schwierigkeit der Spielregeln", nl: "Moeilijkheid van spelregels"},
        {en: "Board layout complexity", es: "Complejidad del diseño del tablero", de: "Komplexität des Brett-Layouts", nl: "Complexiteit van bord indeling"},
        {en: "Word count in dictionary", es: "Recuento de palabras en diccionario", de: "Wortanzahl im Wörterbuch", nl: "Woord aantal in woordenboek"}
      ],
      correct: 0,
      explanation: {
        en: "Game tree complexity refers to the astronomical number of possible Scrabble games (estimated at 10^15 or more), making perfect play computationally impractical even for modern AI.",
        es: "La complejidad del árbol de juego se refiere al número astronómico de juegos de Scrabble posibles (estimado en 10^15 o más), haciendo que el juego perfecto sea computacionalmente impracticable incluso para IA moderna.",
        de: "Spielbaum-Komplexität bezieht sich auf die astronomische Anzahl möglicher Scrabble-Spiele (geschätzt auf 10^15 oder mehr), was perfektes Spiel rechnerisch unpraktisch macht selbst für moderne KI.",
        nl: "Spelboom complexiteit verwijst naar het astronomische aantal mogelijke Scrabble spellen (geschat op 10^15 of meer), waardoor perfect spel computationeel onpraktisch is zelfs voor moderne AI."
      }
    },
    {
      question: {
        en: "What is 'dynamic rack valuation adjustment' during a game?",
        es: "¿Qué es el 'ajuste dinámico de valoración del soporte' durante un juego?",
        de: "Was ist 'dynamische Rack-Bewertungsanpassung' während eines Spiels?",
        nl: "Wat is 'dynamische rek waardering aanpassing' tijdens een spel?"
      },
      options: [
        {en: "Changing tile point values", es: "Cambiar valores de puntos de fichas", de: "Steinpunktwerte ändern", nl: "Steen puntwaarden veranderen"},
        {en: "Adjusting rack evaluation based on bag composition changes", es: "Ajustar evaluación del soporte según cambios en composición de la bolsa", de: "Rack-Bewertung basierend auf Beutel-Zusammensetzungsänderungen anpassen", nl: "Rek evaluatie aanpassen op basis van zak samenstelling veranderingen"},
        {en: "Revaluing words mid-game", es: "Revalorizar palabras a mitad del juego", de: "Wörter während des Spiels neu bewerten", nl: "Woorden mid-game herwaarderen"},
        {en: "Score recalculation", es: "Recálculo de puntuación", de: "Punkteneuberechnung", nl: "Score herberekening"}
      ],
      correct: 1,
      explanation: {
        en: "Dynamic valuation means adjusting how you value certain letters as the bag composition changes. Late-game, drawing the last S becomes much more valuable than early-game.",
        es: "La valoración dinámica significa ajustar cómo valoras ciertas letras a medida que cambia la composición de la bolsa. A final del juego, sacar la última S se vuelve mucho más valiosa que al principio.",
        de: "Dynamische Bewertung bedeutet anzupassen wie Sie bestimmte Buchstaben bewerten wenn sich Beutel-Zusammensetzung ändert. Spät im Spiel wird das Ziehen des letzten S viel wertvoller als früh im Spiel.",
        nl: "Dynamische waardering betekent aanpassen hoe je bepaalde letters waardeert naarmate zak samenstelling verandert. Laat in spel wordt het trekken van de laatste S veel waardevoller dan vroeg in spel."
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
