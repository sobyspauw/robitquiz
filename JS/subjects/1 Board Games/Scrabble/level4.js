// Quiz Template - Level 4: Bord spelletjes - Scrabble
(function() {
  const level4 = {
  name: {
    en: "Scrabble",
    es: "Scrabble",
    de: "Scrabble",
    nl: "Scrabble"
  },
  questions: [
    {
      question: {
        en: "What are 'Q without U' words in Scrabble?",
        es: "¿Qué son las palabras 'Q sin U' en Scrabble?",
        de: "Was sind 'Q ohne U' Wörter im Scrabble?",
        nl: "Wat zijn 'Q zonder U' woorden in Scrabble?"
      },
      options: [
        {
          en: "Invalid words",
          es: "Palabras inválidas",
          de: "Ungültige Wörter",
          nl: "Ongeldige woorden"
        },
        {
          en: "Valid words like QI, QOPH, QADI",
          es: "Palabras válidas como QI, QOPH, QADI",
          de: "Gültige Wörter wie QI, QOPH, QADI",
          nl: "Geldige woorden zoals QI, QOPH, QADI"
        },
        {
          en: "Only allowed with blank tiles",
          es: "Solo permitidas con fichas en blanco",
          de: "Nur mit Blanko-Steinen erlaubt",
          nl: "Alleen toegestaan met blanco stenen"
        },
        {
          en: "Tournament-only words",
          es: "Palabras solo para torneos",
          de: "Nur-Turnier-Wörter",
          nl: "Alleen toernooiwoorden"
        }
      ],
      correct: 1,
      explanation: {
        en: "Words like QI (life force), QOPH (Hebrew letter), QADI (Islamic judge) are valid Q-without-U words, highly valuable in Scrabble.",
        es: "Palabras como QI (fuerza vital), QOPH (letra hebrea), QADI (juez islámico) son palabras válidas de Q-sin-U, muy valiosas en Scrabble.",
        de: "Wörter wie QI (Lebenskraft), QOPH (hebräischer Buchstabe), QADI (islamischer Richter) sind gültige Q-ohne-U-Wörter, sehr wertvoll im Scrabble.",
        nl: "Woorden zoals QI (levenskracht), QOPH (Hebreeuwse letter), QADI (islamitische rechter) zijn geldige Q-zonder-U woorden, zeer waardevol in Scrabble."
      }
    },
    {
      question: {
        en: "What is 'parallel play' in Scrabble strategy?",
        es: "¿Qué es el 'juego paralelo' en estrategia de Scrabble?",
        de: "Was ist 'paralleles Spielen' in der Scrabble-Strategie?",
        nl: "Wat is 'parallel spelen' in Scrabble-strategie?"
      },
      options: [
        {
          en: "Playing at same time as opponent",
          es: "Jugar al mismo tiempo que el oponente",
          de: "Gleichzeitig mit dem Gegner spielen",
          nl: "Tegelijk spelen als tegenstander"
        },
        {
          en: "Placing word parallel to existing word",
          es: "Colocar palabra paralela a palabra existente",
          de: "Wort parallel zu existierendem Wort platzieren",
          nl: "Woord parallel plaatsen aan bestaand woord"
        },
        {
          en: "Using two racks simultaneously",
          es: "Usar dos soportes simultáneamente",
          de: "Zwei Racks gleichzeitig verwenden",
          nl: "Twee rekken tegelijkertijd gebruiken"
        },
        {
          en: "Mirroring opponent's moves",
          es: "Reflejar movimientos del oponente",
          de: "Züge des Gegners spiegeln",
          nl: "Zetten van tegenstander spiegelen"
        }
      ],
      correct: 1,
      explanation: {
        en: "Parallel play means placing a word parallel to an existing word, forming multiple short words with the crossing letters for high scores.",
        es: "Juego paralelo significa colocar una palabra paralela a una palabra existente, formando múltiples palabras cortas con las letras que se cruzan para puntuaciones altas.",
        de: "Paralleles Spielen bedeutet ein Wort parallel zu einem existierenden Wort zu platzieren, wodurch mehrere kurze Wörter mit den sich kreuzenden Buchstaben für hohe Punktzahlen gebildet werden.",
        nl: "Parallel spelen betekent een woord parallel plaatsen aan een bestaand woord, waarbij meerdere korte woorden worden gevormd met de kruisende letters voor hoge scores."
      }
    },
    {
      question: {
        en: "How many Triple Letter Score squares are on a Scrabble board?",
        es: "¿Cuántos cuadrados de Puntuación de Letra Triple hay en un tablero de Scrabble?",
        de: "Wie viele Dreifacher-Buchstabenwert-Felder gibt es auf einem Scrabble-Brett?",
        nl: "Hoeveel Driedubbele Letterwaarde-vakken zijn er op een Scrabble-bord?"
      },
      options: [
        {
          en: "8",
          es: "8",
          de: "8",
          nl: "8"
        },
        {
          en: "12",
          es: "12",
          de: "12",
          nl: "12"
        },
        {
          en: "16",
          es: "16",
          de: "16",
          nl: "16"
        },
        {
          en: "20",
          es: "20",
          de: "20",
          nl: "20"
        }
      ],
      correct: 1,
      explanation: {
        en: "There are 12 Triple Letter Score squares (dark blue) on the board, positioned strategically near the center and edges.",
        es: "Hay 12 cuadrados de Puntuación de Letra Triple (azul oscuro) en el tablero, posicionados estratégicamente cerca del centro y los bordes.",
        de: "Es gibt 12 Dreifacher-Buchstabenwert-Felder (dunkelblau) auf dem Brett, strategisch in der Nähe der Mitte und der Ränder positioniert.",
        nl: "Er zijn 12 Driedubbele Letterwaarde-vakken (donkerblauw) op het bord, strategisch gepositioneerd nabij het midden en de randen."
      }
    },
    {
      question: {
        en: "What is an 'anagram' in Scrabble context?",
        es: "¿Qué es un 'anagrama' en contexto de Scrabble?",
        de: "Was ist ein 'Anagramm' im Scrabble-Kontext?",
        nl: "Wat is een 'anagram' in Scrabble-context?"
      },
      options: [
        {
          en: "A backward word",
          es: "Una palabra al revés",
          de: "Ein rückwärts Wort",
          nl: "Een achterwaarts woord"
        },
        {
          en: "Rearranging letters to form different word",
          es: "Reorganizar letras para formar palabra diferente",
          de: "Buchstaben neu anordnen um ein anderes Wort zu bilden",
          nl: "Letters herschikken om een ander woord te vormen"
        },
        {
          en: "Playing same word twice",
          es: "Jugar la misma palabra dos veces",
          de: "Dasselbe Wort zweimal spielen",
          nl: "Hetzelfde woord twee keer spelen"
        },
        {
          en: "Words with similar meanings",
          es: "Palabras con significados similares",
          de: "Wörter mit ähnlichen Bedeutungen",
          nl: "Woorden met vergelijkbare betekenissen"
        }
      ],
      correct: 1,
      explanation: {
        en: "An anagram is rearranging the same letters to form different words (e.g., LISTEN and SILENT). This skill is crucial for finding bingos.",
        es: "Un anagrama es reorganizar las mismas letras para formar palabras diferentes (ej: LISTEN y SILENT). Esta habilidad es crucial para encontrar bingos.",
        de: "Ein Anagramm ist das Neuordnen derselben Buchstaben um verschiedene Wörter zu bilden (z.B. LISTEN und SILENT). Diese Fähigkeit ist entscheidend für das Finden von Bingos.",
        nl: "Een anagram is het herschikken van dezelfde letters om verschillende woorden te vormen (bijv. LISTEN en SILENT). Deze vaardigheid is cruciaal voor het vinden van bingo's."
      }
    },
    {
      question: {
        en: "What does 'blocking' mean in competitive Scrabble?",
        es: "¿Qué significa 'bloquear' en Scrabble competitivo?",
        de: "Was bedeutet 'Blockieren' im kompetitiven Scrabble?",
        nl: "Wat betekent 'blokkeren' in competitief Scrabble?"
      },
      options: [
        {
          en: "Refusing to play a turn",
          es: "Negarse a jugar un turno",
          de: "Einen Zug verweigern",
          nl: "Weigeren een beurt te spelen"
        },
        {
          en: "Preventing opponent from using premium squares",
          es: "Impedir que el oponente use cuadrados premium",
          de: "Verhindern dass Gegner Premium-Felder nutzt",
          nl: "Voorkomen dat tegenstander premiumvakken gebruikt"
        },
        {
          en: "Covering the board completely",
          es: "Cubrir el tablero completamente",
          de: "Das Brett vollständig bedecken",
          nl: "Het bord volledig bedekken"
        },
        {
          en: "Playing defensive words only",
          es: "Jugar solo palabras defensivas",
          de: "Nur defensive Wörter spielen",
          nl: "Alleen defensieve woorden spelen"
        }
      ],
      correct: 1,
      explanation: {
        en: "Blocking is strategically playing to prevent your opponent from accessing high-value squares or creating specific word opportunities.",
        es: "Bloquear es jugar estratégicamente para evitar que tu oponente acceda a cuadrados de alto valor o cree oportunidades específicas de palabras.",
        de: "Blockieren ist strategisches Spielen um zu verhindern dass der Gegner auf wertvolle Felder zugreift oder spezifische Wortmöglichkeiten schafft.",
        nl: "Blokkeren is strategisch spelen om te voorkomen dat je tegenstander toegang krijgt tot waardevolle vakken of specifieke woordkansen creëert."
      }
    },
    {
      question: {
        en: "What is the value of the letter D in Scrabble?",
        es: "¿Cuál es el valor de la letra D en Scrabble?",
        de: "Welchen Wert hat der Buchstabe D im Scrabble?",
        nl: "Wat is de waarde van de letter D in Scrabble?"
      },
      options: [
        {
          en: "1 point",
          es: "1 punto",
          de: "1 Punkt",
          nl: "1 punt"
        },
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
        }
      ],
      correct: 1,
      explanation: {
        en: "The letter D is worth 2 points in Scrabble, the same as G.",
        es: "La letra D vale 2 puntos en Scrabble, igual que G.",
        de: "Der Buchstabe D ist 2 Punkte wert im Scrabble, genauso wie G.",
        nl: "De letter D is 2 punten waard in Scrabble, hetzelfde als G."
      }
    },
    {
      question: {
        en: "Which 2-letter words are valid in competitive Scrabble?",
        es: "¿Qué palabras de 2 letras son válidas en Scrabble competitivo?",
        de: "Welche 2-Buchstaben-Wörter sind im kompetitiven Scrabble gültig?",
        nl: "Welke 2-letterwoorden zijn geldig in competitief Scrabble?"
      },
      options: [
        {
          en: "Only common words like IT, IS, IN",
          es: "Solo palabras comunes como IT, IS, IN",
          de: "Nur häufige Wörter wie IT, IS, IN",
          nl: "Alleen veelvoorkomende woorden zoals IT, IS, IN"
        },
        {
          en: "Over 100 valid 2-letter words",
          es: "Más de 100 palabras válidas de 2 letras",
          de: "Über 100 gültige 2-Buchstaben-Wörter",
          nl: "Meer dan 100 geldige 2-letterwoorden"
        },
        {
          en: "Only vowel combinations",
          es: "Solo combinaciones de vocales",
          de: "Nur Vokalkombinationen",
          nl: "Alleen klinker combinaties"
        },
        {
          en: "No 2-letter words allowed",
          es: "No se permiten palabras de 2 letras",
          de: "Keine 2-Buchstaben-Wörter erlaubt",
          nl: "Geen 2-letterwoorden toegestaan"
        }
      ],
      correct: 1,
      explanation: {
        en: "There are over 100 valid 2-letter words in competitive Scrabble (e.g., QI, XI, ZA, JO), essential for advanced play and parallel words.",
        es: "Hay más de 100 palabras válidas de 2 letras en Scrabble competitivo (ej: QI, XI, ZA, JO), esenciales para juego avanzado y palabras paralelas.",
        de: "Es gibt über 100 gültige 2-Buchstaben-Wörter im kompetitiven Scrabble (z.B. QI, XI, ZA, JO), wesentlich für fortgeschrittenes Spiel und parallele Wörter.",
        nl: "Er zijn meer dan 100 geldige 2-letterwoorden in competitief Scrabble (bijv. QI, XI, ZA, JO), essentieel voor gevorderd spel en parallelle woorden."
      }
    },
    {
      question: {
        en: "What is 'fishing' in Scrabble strategy?",
        es: "¿Qué es 'pescar' en estrategia de Scrabble?",
        de: "Was ist 'Fischen' in der Scrabble-Strategie?",
        nl: "Wat is 'vissen' in Scrabble-strategie?"
      },
      options: [
        {
          en: "Playing random words hoping for luck",
          es: "Jugar palabras aleatorias esperando suerte",
          de: "Zufällige Wörter spielen in der Hoffnung auf Glück",
          nl: "Willekeurige woorden spelen in de hoop op geluk"
        },
        {
          en: "Keeping one tile to draw specific letter",
          es: "Mantener una ficha para sacar letra específica",
          de: "Einen Stein behalten um einen bestimmten Buchstaben zu ziehen",
          nl: "Eén steen houden om specifieke letter te trekken"
        },
        {
          en: "Exchanging tiles frequently",
          es: "Intercambiar fichas frecuentemente",
          de: "Häufig Steine tauschen",
          nl: "Vaak stenen ruilen"
        },
        {
          en: "Looking at opponent's rack",
          es: "Mirar el soporte del oponente",
          de: "Auf das Rack des Gegners schauen",
          nl: "Naar het rek van de tegenstander kijken"
        }
      ],
      correct: 1,
      explanation: {
        en: "Fishing is keeping a common letter (like S or blank) while playing fewer tiles, hoping to draw a specific tile for a bingo next turn.",
        es: "Pescar es mantener una letra común (como S o blanco) mientras juegas menos fichas, esperando sacar una ficha específica para un bingo en el próximo turno.",
        de: "Fischen ist das Behalten eines häufigen Buchstabens (wie S oder Blanko) während man weniger Steine spielt, in der Hoffnung einen bestimmten Stein für ein Bingo im nächsten Zug zu ziehen.",
        nl: "Vissen is het houden van een veelvoorkomende letter (zoals S of blanco) terwijl je minder stenen speelt, in de hoop een specifieke steen te trekken voor een bingo in de volgende beurt."
      }
    },
    {
      question: {
        en: "How many tiles of the letter T are in English Scrabble?",
        es: "¿Cuántas fichas de la letra T hay en Scrabble inglés?",
        de: "Wie viele Steine des Buchstabens T gibt es im englischen Scrabble?",
        nl: "Hoeveel stenen van de letter T zijn er in Engels Scrabble?"
      },
      options: [
        {
          en: "4 tiles",
          es: "4 fichas",
          de: "4 Steine",
          nl: "4 stenen"
        },
        {
          en: "6 tiles",
          es: "6 fichas",
          de: "6 Steine",
          nl: "6 stenen"
        },
        {
          en: "8 tiles",
          es: "8 fichas",
          de: "8 Steine",
          nl: "8 stenen"
        },
        {
          en: "9 tiles",
          es: "9 fichas",
          de: "9 Steine",
          nl: "9 stenen"
        }
      ],
      correct: 1,
      explanation: {
        en: "There are 6 T tiles in English Scrabble, each worth 1 point. T is common and useful for word endings.",
        es: "Hay 6 fichas T en Scrabble inglés, cada una vale 1 punto. T es común y útil para finales de palabras.",
        de: "Es gibt 6 T-Steine im englischen Scrabble, jeder ist 1 Punkt wert. T ist häufig und nützlich für Wortendungen.",
        nl: "Er zijn 6 T-stenen in Engels Scrabble, elk 1 punt waard. T is gebruikelijk en nuttig voor woordeinden."
      }
    },
    {
      question: {
        en: "What is a 'power tile' in Scrabble?",
        es: "¿Qué es una 'ficha de poder' en Scrabble?",
        de: "Was ist ein 'Power-Stein' im Scrabble?",
        nl: "Wat is een 'power steen' in Scrabble?"
      },
      options: [
        {
          en: "Any tile worth 10 points",
          es: "Cualquier ficha que valga 10 puntos",
          de: "Jeder Stein der 10 Punkte wert ist",
          nl: "Elke steen die 10 punten waard is"
        },
        {
          en: "S or blank tiles",
          es: "Fichas S o en blanco",
          de: "S- oder Blanko-Steine",
          nl: "S- of blanco stenen"
        },
        {
          en: "Triple word score tiles",
          es: "Fichas de puntuación de palabra triple",
          de: "Dreifacher-Wortwert-Steine",
          nl: "Driedubbele woordwaarde stenen"
        },
        {
          en: "First tile played",
          es: "Primera ficha jugada",
          de: "Erster gespielter Stein",
          nl: "Eerste gespeelde steen"
        }
      ],
      correct: 1,
      explanation: {
        en: "Power tiles are S and blank tiles - the most flexible and valuable for creating bingos and hooks. Managing these tiles is crucial.",
        es: "Las fichas de poder son S y fichas en blanco - las más flexibles y valiosas para crear bingos y ganchos. Gestionar estas fichas es crucial.",
        de: "Power-Steine sind S und Blanko-Steine - die flexibelsten und wertvollsten für das Erstellen von Bingos und Haken. Diese Steine zu verwalten ist entscheidend.",
        nl: "Power stenen zijn S en blanco stenen - de meest flexibele en waardevolle voor het maken van bingo's en haken. Het beheren van deze stenen is cruciaal."
      }
    },
    {
      question: {
        en: "What does 'opening up the board' mean?",
        es: "¿Qué significa 'abrir el tablero'?",
        de: "Was bedeutet 'das Brett öffnen'?",
        nl: "Wat betekent 'het bord openen'?"
      },
      options: [
        {
          en: "Starting the game",
          es: "Comenzar el juego",
          de: "Das Spiel beginnen",
          nl: "Het spel beginnen"
        },
        {
          en: "Creating opportunities for high-scoring plays",
          es: "Crear oportunidades para jugadas de alta puntuación",
          de: "Möglichkeiten für punktreiche Züge schaffen",
          nl: "Kansen creëren voor hoog scorende zetten"
        },
        {
          en: "Removing tiles from board",
          es: "Quitar fichas del tablero",
          de: "Steine vom Brett entfernen",
          nl: "Stenen van het bord verwijderen"
        },
        {
          en: "Playing near edges only",
          es: "Jugar solo cerca de los bordes",
          de: "Nur in der Nähe der Ränder spielen",
          nl: "Alleen bij de randen spelen"
        }
      ],
      correct: 1,
      explanation: {
        en: "Opening the board means creating access to premium squares and potential bingo lanes, often a risky strategy that can benefit both players.",
        es: "Abrir el tablero significa crear acceso a cuadrados premium y posibles carriles de bingo, a menudo una estrategia arriesgada que puede beneficiar a ambos jugadores.",
        de: "Das Brett öffnen bedeutet Zugang zu Premium-Feldern und potenziellen Bingo-Bahnen zu schaffen, oft eine riskante Strategie die beiden Spielern zugute kommen kann.",
        nl: "Het bord openen betekent toegang creëren tot premiumvakken en potentiële bingo-banen, vaak een riskante strategie die beide spelers kan bevoordelen."
      }
    },
    {
      question: {
        en: "What is a 'closed game' strategy?",
        es: "¿Qué es una estrategia de 'juego cerrado'?",
        de: "Was ist eine 'geschlossenes Spiel' Strategie?",
        nl: "Wat is een 'gesloten spel' strategie?"
      },
      options: [
        {
          en: "Ending the game early",
          es: "Terminar el juego temprano",
          de: "Das Spiel früh beenden",
          nl: "Het spel vroeg beëindigen"
        },
        {
          en: "Limiting opportunities for big plays",
          es: "Limitar oportunidades para grandes jugadas",
          de: "Möglichkeiten für große Züge begrenzen",
          nl: "Kansen voor grote zetten beperken"
        },
        {
          en: "Playing only in one corner",
          es: "Jugar solo en una esquina",
          de: "Nur in einer Ecke spielen",
          nl: "Alleen in één hoek spelen"
        },
        {
          en: "Not allowing word challenges",
          es: "No permitir desafíos de palabras",
          de: "Keine Wort-Anfechtungen erlauben",
          nl: "Geen woorduitdagingen toestaan"
        }
      ],
      correct: 1,
      explanation: {
        en: "A closed game strategy minimizes access to premium squares and bingo opportunities, often used when ahead to protect your lead.",
        es: "Una estrategia de juego cerrado minimiza el acceso a cuadrados premium y oportunidades de bingo, a menudo usada cuando se está adelante para proteger la ventaja.",
        de: "Eine geschlossenes Spiel Strategie minimiert den Zugang zu Premium-Feldern und Bingo-Möglichkeiten, oft verwendet wenn man vorne ist um den Vorsprung zu schützen.",
        nl: "Een gesloten spel strategie minimaliseert toegang tot premiumvakken en bingo-kansen, vaak gebruikt wanneer je voorligt om je voorsprong te beschermen."
      }
    },
    {
      question: {
        en: "How many tiles of the letter L are in standard Scrabble?",
        es: "¿Cuántas fichas de la letra L hay en Scrabble estándar?",
        de: "Wie viele Steine des Buchstabens L gibt es im Standard-Scrabble?",
        nl: "Hoeveel stenen van de letter L zijn er in standaard Scrabble?"
      },
      options: [
        {
          en: "2 tiles",
          es: "2 fichas",
          de: "2 Steine",
          nl: "2 stenen"
        },
        {
          en: "4 tiles",
          es: "4 fichas",
          de: "4 Steine",
          nl: "4 stenen"
        },
        {
          en: "5 tiles",
          es: "5 fichas",
          de: "5 Steine",
          nl: "5 stenen"
        },
        {
          en: "6 tiles",
          es: "6 fichas",
          de: "6 Steine",
          nl: "6 stenen"
        }
      ],
      correct: 1,
      explanation: {
        en: "There are 4 L tiles in standard English Scrabble, each worth 1 point. L is a versatile consonant for word building.",
        es: "Hay 4 fichas L en Scrabble inglés estándar, cada una vale 1 punto. L es una consonante versátil para construir palabras.",
        de: "Es gibt 4 L-Steine im Standard-Englisch-Scrabble, jeder ist 1 Punkt wert. L ist ein vielseitiger Konsonant für Wortbildung.",
        nl: "Er zijn 4 L-stenen in standaard Engels Scrabble, elk 1 punt waard. L is een veelzijdige medeklinker voor woordvorming."
      }
    },
    {
      question: {
        en: "What is 'dumping' in Scrabble?",
        es: "¿Qué es 'deshacerse' en Scrabble?",
        de: "Was ist 'Abladen' im Scrabble?",
        nl: "Wat is 'dumpen' in Scrabble?"
      },
      options: [
        {
          en: "Discarding tiles illegally",
          es: "Descartar fichas ilegalmente",
          de: "Steine illegal abwerfen",
          nl: "Stenen illegaal weggooien"
        },
        {
          en: "Playing awkward tiles to improve rack",
          es: "Jugar fichas difíciles para mejorar soporte",
          de: "Schwierige Steine spielen um Rack zu verbessern",
          nl: "Lastige stenen spelen om rek te verbeteren"
        },
        {
          en: "Losing on purpose",
          es: "Perder a propósito",
          de: "Absichtlich verlieren",
          nl: "Met opzet verliezen"
        },
        {
          en: "Playing all vowels at once",
          es: "Jugar todas las vocales a la vez",
          de: "Alle Vokale auf einmal spielen",
          nl: "Alle klinkers tegelijk spelen"
        }
      ],
      correct: 1,
      explanation: {
        en: "Dumping is strategically playing awkward or duplicate tiles (even for fewer points) to improve rack balance and bingo potential.",
        es: "Deshacerse es jugar estratégicamente fichas difíciles o duplicadas (incluso por menos puntos) para mejorar el equilibrio del soporte y el potencial de bingo.",
        de: "Abladen ist strategisches Spielen von schwierigen oder doppelten Steinen (auch für weniger Punkte) um Rack-Balance und Bingo-Potenzial zu verbessern.",
        nl: "Dumpen is strategisch spelen van lastige of dubbele stenen (zelfs voor minder punten) om rek balans en bingo-potentieel te verbeteren."
      }
    },
    {
      question: {
        en: "What is the most common first move in tournament Scrabble?",
        es: "¿Cuál es la primera jugada más común en Scrabble de torneo?",
        de: "Was ist der häufigste erste Zug im Turnier-Scrabble?",
        nl: "Wat is de meest voorkomende eerste zet in toernooi-Scrabble?"
      },
      options: [
        {
          en: "Playing horizontally through center",
          es: "Jugar horizontalmente a través del centro",
          de: "Horizontal durch die Mitte spielen",
          nl: "Horizontaal door het midden spelen"
        },
        {
          en: "Playing vertically through center",
          es: "Jugar verticalmente a través del centro",
          de: "Vertikal durch die Mitte spielen",
          nl: "Verticaal door het midden spelen"
        },
        {
          en: "Starting from corner",
          es: "Comenzar desde esquina",
          de: "Von der Ecke beginnen",
          nl: "Beginnen vanuit hoek"
        },
        {
          en: "Exchanging tiles",
          es: "Intercambiar fichas",
          de: "Steine tauschen",
          nl: "Stenen ruilen"
        }
      ],
      correct: 0,
      explanation: {
        en: "The first move must cover the center star and is typically played horizontally for conventional reading and opponent convenience.",
        es: "La primera jugada debe cubrir la estrella central y típicamente se juega horizontalmente por convención de lectura y conveniencia del oponente.",
        de: "Der erste Zug muss den zentralen Stern bedecken und wird typischerweise horizontal gespielt für konventionelles Lesen und Gegner-Bequemlichkeit.",
        nl: "De eerste zet moet de centrale ster bedekken en wordt typisch horizontaal gespeeld voor conventioneel lezen en gemak van de tegenstander."
      }
    },
    {
      question: {
        en: "What is 'turnover' in Scrabble strategy?",
        es: "¿Qué es 'rotación' en estrategia de Scrabble?",
        de: "Was ist 'Umsatz' in der Scrabble-Strategie?",
        nl: "Wat is 'omzet' in Scrabble-strategie?"
      },
      options: [
        {
          en: "Flipping the board mid-game",
          es: "Voltear el tablero a mitad del juego",
          de: "Das Brett mitten im Spiel umdrehen",
          nl: "Het bord halverwege het spel omdraaien"
        },
        {
          en: "Rate of playing and drawing new tiles",
          es: "Velocidad de jugar y sacar nuevas fichas",
          de: "Rate des Spielens und Ziehens neuer Steine",
          nl: "Snelheid van spelen en nieuwe stenen trekken"
        },
        {
          en: "Switching rack positions",
          es: "Cambiar posiciones del soporte",
          de: "Rack-Positionen wechseln",
          nl: "Rek posities wisselen"
        },
        {
          en: "Total number of turns",
          es: "Número total de turnos",
          de: "Gesamtzahl der Züge",
          nl: "Totaal aantal beurten"
        }
      ],
      correct: 1,
      explanation: {
        en: "Turnover is the rate at which you play tiles and draw new ones. High turnover increases bingo chances but may sacrifice points.",
        es: "La rotación es la velocidad a la que juegas fichas y sacas nuevas. Alta rotación aumenta las posibilidades de bingo pero puede sacrificar puntos.",
        de: "Umsatz ist die Rate mit der Sie Steine spielen und neue ziehen. Hoher Umsatz erhöht Bingo-Chancen kann aber Punkte opfern.",
        nl: "Omzet is de snelheid waarmee je stenen speelt en nieuwe trekt. Hoge omzet verhoogt bingo-kansen maar kan punten opofferen."
      }
    },
    {
      question: {
        en: "What is the value of the letter W in Scrabble?",
        es: "¿Cuál es el valor de la letra W en Scrabble?",
        de: "Welchen Wert hat der Buchstabe W im Scrabble?",
        nl: "Wat is de waarde van de letter W in Scrabble?"
      },
      options: [
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
        },
        {
          en: "6 points",
          es: "6 puntos",
          de: "6 Punkte",
          nl: "6 punten"
        }
      ],
      correct: 2,
      explanation: {
        en: "The letter W is worth 4 points in Scrabble. There are 2 W tiles in the standard set.",
        es: "La letra W vale 4 puntos en Scrabble. Hay 2 fichas W en el juego estándar.",
        de: "Der Buchstabe W ist 4 Punkte wert im Scrabble. Es gibt 2 W-Steine im Standard-Set.",
        nl: "De letter W is 4 punten waard in Scrabble. Er zijn 2 W-stenen in de standaard set."
      }
    },
    {
      question: {
        en: "What are 'bingo stems' in Scrabble study?",
        es: "¿Qué son los 'tallos de bingo' en estudio de Scrabble?",
        de: "Was sind 'Bingo-Stämme' im Scrabble-Studium?",
        nl: "Wat zijn 'bingo stammen' in Scrabble studie?"
      },
      options: [
        {
          en: "7-letter words only",
          es: "Solo palabras de 7 letras",
          de: "Nur 7-Buchstaben-Wörter",
          nl: "Alleen 7-letterwoorden"
        },
        {
          en: "Common 6-letter combinations that form bingos",
          es: "Combinaciones comunes de 6 letras que forman bingos",
          de: "Häufige 6-Buchstaben-Kombinationen die Bingos bilden",
          nl: "Veelvoorkomende 6-letter combinaties die bingo's vormen"
        },
        {
          en: "Starting letters only",
          es: "Solo letras iniciales",
          de: "Nur Anfangsbuchstaben",
          nl: "Alleen beginletters"
        },
        {
          en: "Words ending in -ING",
          es: "Palabras que terminan en -ING",
          de: "Wörter die auf -ING enden",
          nl: "Woorden eindigend op -ING"
        }
      ],
      correct: 1,
      explanation: {
        en: "Bingo stems are common 6-letter combinations (like RETINA, SATIRE) that form many 7-letter words when combined with different letters.",
        es: "Los tallos de bingo son combinaciones comunes de 6 letras (como RETINA, SATIRE) que forman muchas palabras de 7 letras cuando se combinan con diferentes letras.",
        de: "Bingo-Stämme sind häufige 6-Buchstaben-Kombinationen (wie RETINA, SATIRE) die viele 7-Buchstaben-Wörter bilden wenn sie mit verschiedenen Buchstaben kombiniert werden.",
        nl: "Bingo stammen zijn veelvoorkomende 6-letter combinaties (zoals RETINA, SATIRE) die vele 7-letterwoorden vormen wanneer gecombineerd met verschillende letters."
      }
    },
    {
      question: {
        en: "What does 'leaving' mean in Scrabble analysis?",
        es: "¿Qué significa 'dejar' en análisis de Scrabble?",
        de: "Was bedeutet 'Übriglassen' in der Scrabble-Analyse?",
        nl: "Wat betekent 'overlaten' in Scrabble analyse?"
      },
      options: [
        {
          en: "Quitting the game",
          es: "Abandonar el juego",
          de: "Das Spiel verlassen",
          nl: "Het spel verlaten"
        },
        {
          en: "Tiles remaining on rack after a play",
          es: "Fichas que quedan en el soporte después de una jugada",
          de: "Steine die nach einem Zug auf dem Rack verbleiben",
          nl: "Stenen die na een zet op het rek overblijven"
        },
        {
          en: "Points left to win",
          es: "Puntos que faltan para ganar",
          de: "Punkte die zum Gewinnen fehlen",
          nl: "Punten die nodig zijn om te winnen"
        },
        {
          en: "Unopened premium squares",
          es: "Cuadrados premium sin abrir",
          de: "Ungeöffnete Premium-Felder",
          nl: "Ongeopende premiumvakken"
        }
      ],
      correct: 1,
      explanation: {
        en: "The 'leaving' is the tiles remaining on your rack after making a play - a key consideration for evaluating move quality and future potential.",
        es: "El 'dejar' son las fichas que quedan en tu soporte después de hacer una jugada - una consideración clave para evaluar calidad de jugada y potencial futuro.",
        de: "Das 'Übriglassen' sind die Steine die nach einem Zug auf Ihrem Rack verbleiben - eine Schlüsselüberlegung zur Bewertung der Zugqualität und des zukünftigen Potenzials.",
        nl: "Het 'overlaten' zijn de stenen die na een zet op je rek overblijven - een belangrijke overweging voor het evalueren van zetkwaliteit en toekomstig potentieel."
      }
    },
    {
      question: {
        en: "How many tiles of the letter R are in standard Scrabble?",
        es: "¿Cuántas fichas de la letra R hay en Scrabble estándar?",
        de: "Wie viele Steine des Buchstabens R gibt es im Standard-Scrabble?",
        nl: "Hoeveel stenen van de letter R zijn er in standaard Scrabble?"
      },
      options: [
        {
          en: "4 tiles",
          es: "4 fichas",
          de: "4 Steine",
          nl: "4 stenen"
        },
        {
          en: "5 tiles",
          es: "5 fichas",
          de: "5 Steine",
          nl: "5 stenen"
        },
        {
          en: "6 tiles",
          es: "6 fichas",
          de: "6 Steine",
          nl: "6 stenen"
        },
        {
          en: "8 tiles",
          es: "8 fichas",
          de: "8 Steine",
          nl: "8 stenen"
        }
      ],
      correct: 2,
      explanation: {
        en: "There are 6 R tiles in standard English Scrabble, each worth 1 point. R is valuable for many common word patterns.",
        es: "Hay 6 fichas R en Scrabble inglés estándar, cada una vale 1 punto. R es valiosa para muchos patrones comunes de palabras.",
        de: "Es gibt 6 R-Steine im Standard-Englisch-Scrabble, jeder ist 1 Punkt wert. R ist wertvoll für viele häufige Wortmuster.",
        nl: "Er zijn 6 R-stenen in standaard Engels Scrabble, elk 1 punt waard. R is waardevol voor vele veelvoorkomende woordpatronen."
      }
    }
  ]
};

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  } else if (typeof window !== 'undefined') {
    window.level4 = level4;
  }
})();
