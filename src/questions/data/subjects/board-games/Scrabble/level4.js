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
    },
    {
      question: {
        en: "What is 'blocking' in Scrabble strategy?",
        es: "¿Qué es 'bloquear' en estrategia de Scrabble?",
        de: "Was ist 'Blockieren' in der Scrabble-Strategie?",
        nl: "Wat is 'blokkeren' in Scrabble-strategie?"
      },
      options: [
        {
          en: "Preventing opponent from making specific plays",
          es: "Evitar que el oponente haga jugadas específicas",
          de: "Verhindern dass der Gegner bestimmte Züge macht",
          nl: "Voorkomen dat tegenstander specifieke zetten maakt"
        },
        {
          en: "Using only consonants",
          es: "Usar solo consonantes",
          de: "Nur Konsonanten verwenden",
          nl: "Alleen medeklinkers gebruiken"
        },
        {
          en: "Holding tiles for later",
          es: "Guardar fichas para después",
          de: "Steine für später aufheben",
          nl: "Stenen voor later bewaren"
        },
        {
          en: "Refusing to challenge",
          es: "Negarse a desafiar",
          de: "Sich weigern herauszufordern",
          nl: "Weigeren uit te dagen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Blocking means making plays that limit opponent's options, such as closing off high-scoring lanes or preventing access to premium squares.",
        es: "Bloquear significa hacer jugadas que limitan las opciones del oponente, como cerrar carriles de alta puntuación o prevenir acceso a cuadrados premium.",
        de: "Blockieren bedeutet Züge zu machen die die Optionen des Gegners einschränken, wie das Schließen von hochbewertenden Bahnen oder das Verhindern des Zugangs zu Premium-Feldern.",
        nl: "Blokkeren betekent zetten maken die de opties van de tegenstander beperken, zoals het afsluiten van hoogscorende banen of toegang tot premiumvakken verhinderen."
      }
    },
    {
      question: {
        en: "What are 'two-letter words' most valuable for in Scrabble?",
        es: "¿Para qué son más valiosas las 'palabras de dos letras' en Scrabble?",
        de: "Wofür sind 'Zwei-Buchstaben-Wörter' im Scrabble am wertvollsten?",
        nl: "Waarvoor zijn 'twee-letterwoorden' het meest waardevol in Scrabble?"
      },
      options: [
        {
          en: "Scoring high points",
          es: "Anotar muchos puntos",
          de: "Hohe Punktzahl erzielen",
          nl: "Hoog scoren"
        },
        {
          en: "Creating parallel plays and hooks",
          es: "Crear jugadas paralelas y ganchos",
          de: "Parallele Züge und Haken erstellen",
          nl: "Parallelle zetten en haken creëren"
        },
        {
          en: "Using blanks",
          es: "Usar blancos",
          de: "Blanko-Steine verwenden",
          nl: "Blanco's gebruiken"
        },
        {
          en: "Opening the game",
          es: "Abrir el juego",
          de: "Das Spiel eröffnen",
          nl: "Het spel openen"
        }
      ],
      correct: 1,
      explanation: {
        en: "Two-letter words are essential for creating parallel plays, hooking onto existing words, and maximizing board usage. Knowing all 107 valid two-letter words is crucial.",
        es: "Las palabras de dos letras son esenciales para crear jugadas paralelas, engancharse a palabras existentes y maximizar el uso del tablero. Conocer las 107 palabras válidas de dos letras es crucial.",
        de: "Zwei-Buchstaben-Wörter sind wesentlich für das Erstellen paralleler Züge, das Anhaken an bestehende Wörter und die Maximierung der Brett-Nutzung. Alle 107 gültigen Zwei-Buchstaben-Wörter zu kennen ist entscheidend.",
        nl: "Twee-letterwoorden zijn essentieel voor het creëren van parallelle zetten, het haken aan bestaande woorden en het maximaliseren van bordgebruik. Alle 107 geldige twee-letterwoorden kennen is cruciaal."
      }
    },
    {
      question: {
        en: "What is a 'phoney' in Scrabble?",
        es: "¿Qué es un 'falso' en Scrabble?",
        de: "Was ist ein 'Schwindel' im Scrabble?",
        nl: "Wat is een 'nep' woord in Scrabble?"
      },
      options: [
        {
          en: "A blank tile",
          es: "Una ficha en blanco",
          de: "Ein Blanko-Stein",
          nl: "Een blanco steen"
        },
        {
          en: "An invalid word played hoping opponent won't challenge",
          es: "Una palabra inválida jugada esperando que el oponente no desafíe",
          de: "Ein ungültiges Wort das in der Hoffnung gespielt wird dass der Gegner nicht herausfordert",
          nl: "Een ongeldig woord gespeeld in de hoop dat tegenstander niet uitdaagt"
        },
        {
          en: "A fake score",
          es: "Un puntaje falso",
          de: "Eine gefälschte Punktzahl",
          nl: "Een valse score"
        },
        {
          en: "An exchanged tile",
          es: "Una ficha intercambiada",
          de: "Ein ausgetauschter Stein",
          nl: "Een geruilede steen"
        }
      ],
      correct: 1,
      explanation: {
        en: "A 'phoney' is an invalid word played intentionally or accidentally. In tournaments, playing phoneys strategically can be risky but occasionally profitable if unchallenged.",
        es: "Un 'falso' es una palabra inválida jugada intencional o accidentalmente. En torneos, jugar falsos estratégicamente puede ser arriesgado pero ocasionalmente rentable si no es desafiado.",
        de: "Ein 'Schwindel' ist ein ungültiges Wort das absichtlich oder versehentlich gespielt wird. In Turnieren kann das strategische Spielen von Schwindeln riskant aber gelegentlich profitabel sein wenn nicht herausgefordert.",
        nl: "Een 'nep' woord is een ongeldig woord dat opzettelijk of per ongeluk wordt gespeeld. In toernooien kan het strategisch spelen van nep woorden risicovol maar soms winstgevend zijn als het niet wordt uitgedaagd."
      }
    },
    {
      question: {
        en: "What is 'rack balancing' in Scrabble?",
        es: "¿Qué es el 'equilibrio del soporte' en Scrabble?",
        de: "Was ist 'Rack-Ausgleich' im Scrabble?",
        nl: "Wat is 'rek balanceren' in Scrabble?"
      },
      options: [
        {
          en: "Keeping equal vowels and consonants",
          es: "Mantener vocales y consonantes iguales",
          de: "Vokale und Konsonanten gleich halten",
          nl: "Klinkers en medeklinkers gelijk houden"
        },
        {
          en: "Holding the rack steady",
          es: "Mantener el soporte estable",
          de: "Das Rack stabil halten",
          nl: "Het rek stabiel houden"
        },
        {
          en: "Distributing points evenly",
          es: "Distribuir puntos uniformemente",
          de: "Punkte gleichmäßig verteilen",
          nl: "Punten gelijk verdelen"
        },
        {
          en: "Playing symmetrically",
          es: "Jugar simétricamente",
          de: "Symmetrisch spielen",
          nl: "Symmetrisch spelen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Rack balancing means maintaining a good mix of vowels and consonants (ideally 3 vowels, 4 consonants) to maximize bingo potential and playability.",
        es: "El equilibrio del soporte significa mantener una buena mezcla de vocales y consonantes (idealmente 3 vocales, 4 consonantes) para maximizar el potencial de bingo y jugabilidad.",
        de: "Rack-Ausgleich bedeutet eine gute Mischung aus Vokalen und Konsonanten aufrechtzuerhalten (idealerweise 3 Vokale, 4 Konsonanten) um Bingo-Potenzial und Spielbarkeit zu maximieren.",
        nl: "Rek balanceren betekent een goede mix van klinkers en medeklinkers behouden (ideaal 3 klinkers, 4 medeklinkers) om bingo-potentieel en speelbaarheid te maximaliseren."
      }
    },
    {
      question: {
        en: "How many points is the letter 'K' worth?",
        es: "¿Cuántos puntos vale la letra 'K'?",
        de: "Wie viele Punkte ist der Buchstabe 'K' wert?",
        nl: "Hoeveel punten is de letter 'K' waard?"
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
          en: "8 points",
          es: "8 puntos",
          de: "8 Punkte",
          nl: "8 punten"
        }
      ],
      correct: 2,
      explanation: {
        en: "The letter 'K' is worth 5 points in Scrabble. There is 1 K tile in a standard set, making it relatively rare.",
        es: "La letra 'K' vale 5 puntos en Scrabble. Hay 1 ficha K en un juego estándar, haciéndola relativamente rara.",
        de: "Der Buchstabe 'K' ist 5 Punkte im Scrabble wert. Es gibt 1 K-Stein in einem Standard-Set, was es relativ selten macht.",
        nl: "De letter 'K' is 5 punten waard in Scrabble. Er is 1 K-steen in een standaard set, waardoor het relatief zeldzaam is."
      }
    },
    {
      question: {
        en: "What is 'fishing' in Scrabble?",
        es: "¿Qué es 'pescar' en Scrabble?",
        de: "Was ist 'Fischen' im Scrabble?",
        nl: "Wat is 'vissen' in Scrabble?"
      },
      options: [
        {
          en: "Playing words about fish",
          es: "Jugar palabras sobre peces",
          de: "Wörter über Fische spielen",
          nl: "Woorden over vissen spelen"
        },
        {
          en: "Keeping one letter hoping to draw a specific tile",
          es: "Mantener una letra esperando sacar una ficha específica",
          de: "Einen Buchstaben behalten in der Hoffnung einen bestimmten Stein zu ziehen",
          nl: "Een letter houden in de hoop een specifieke steen te trekken"
        },
        {
          en: "Searching for blanks",
          es: "Buscar blancos",
          de: "Nach Blanko-Steinen suchen",
          nl: "Zoeken naar blanco's"
        },
        {
          en: "Drawing tiles randomly",
          es: "Sacar fichas al azar",
          de: "Steine zufällig ziehen",
          nl: "Stenen willekeurig trekken"
        }
      ],
      correct: 1,
      explanation: {
        en: "Fishing means keeping a promising letter combination (often retaining 5-6 letters) hoping to draw a specific tile that completes a bingo. It's a risky but sometimes necessary strategy.",
        es: "Pescar significa mantener una combinación prometedora de letras (a menudo reteniendo 5-6 letras) esperando sacar una ficha específica que complete un bingo. Es una estrategia arriesgada pero a veces necesaria.",
        de: "Fischen bedeutet eine vielversprechende Buchstabenkombination zu behalten (oft 5-6 Buchstaben behalten) in der Hoffnung einen bestimmten Stein zu ziehen der ein Bingo vervollständigt. Es ist eine riskante aber manchmal notwendige Strategie.",
        nl: "Vissen betekent een veelbelovende lettercombinatie houden (vaak 5-6 letters behouden) in de hoop een specifieke steen te trekken die een bingo voltooit. Het is een riskante maar soms noodzakelijke strategie."
      }
    },
    {
      question: {
        en: "What is 'opening' in Scrabble board management?",
        es: "¿Qué es 'abrir' en gestión del tablero de Scrabble?",
        de: "Was ist 'Öffnen' im Scrabble-Brett-Management?",
        nl: "Wat is 'openen' in Scrabble bordbeheer?"
      },
      options: [
        {
          en: "Starting the game",
          es: "Comenzar el juego",
          de: "Das Spiel beginnen",
          nl: "Het spel beginnen"
        },
        {
          en: "Creating scoring opportunities for both players",
          es: "Crear oportunidades de puntuación para ambos jugadores",
          de: "Punktemöglichkeiten für beide Spieler schaffen",
          nl: "Scoringsmogelijkheden voor beide spelers creëren"
        },
        {
          en: "Using premium squares",
          es: "Usar cuadrados premium",
          de: "Premium-Felder verwenden",
          nl: "Premiumvakken gebruiken"
        },
        {
          en: "Revealing your tiles",
          es: "Revelar tus fichas",
          de: "Deine Steine offenbaren",
          nl: "Je stenen onthullen"
        }
      ],
      correct: 1,
      explanation: {
        en: "Opening means making plays that create new scoring opportunities and access to premium squares, typically done when ahead. The opposite is 'closing' to limit opponent's options.",
        es: "Abrir significa hacer jugadas que crean nuevas oportunidades de puntuación y acceso a cuadrados premium, típicamente hecho cuando se va adelante. Lo opuesto es 'cerrar' para limitar las opciones del oponente.",
        de: "Öffnen bedeutet Züge zu machen die neue Punktemöglichkeiten und Zugang zu Premium-Feldern schaffen, typischerweise wenn man vorne liegt. Das Gegenteil ist 'Schließen' um die Optionen des Gegners zu begrenzen.",
        nl: "Openen betekent zetten maken die nieuwe scoringsmogelijkheden en toegang tot premiumvakken creëren, typisch gedaan wanneer voor. Het tegenovergestelde is 'sluiten' om opties van tegenstander te beperken."
      }
    },
    {
      question: {
        en: "What are 'Q without U' words most useful for?",
        es: "¿Para qué son más útiles las palabras 'Q sin U'?",
        de: "Wofür sind 'Q ohne U' Wörter am nützlichsten?",
        nl: "Waarvoor zijn 'Q zonder U' woorden het meest nuttig?"
      },
      options: [
        {
          en: "Scoring high points",
          es: "Anotar muchos puntos",
          de: "Hohe Punktzahl erzielen",
          nl: "Hoog scoren"
        },
        {
          en: "Playing Q when stuck without U",
          es: "Jugar Q cuando atascado sin U",
          de: "Q spielen wenn ohne U feststeckt",
          nl: "Q spelen wanneer vast zonder U"
        },
        {
          en: "Using blanks",
          es: "Usar blancos",
          de: "Blanko-Steine verwenden",
          nl: "Blanco's gebruiken"
        },
        {
          en: "Opening the game",
          es: "Abrir el juego",
          de: "Das Spiel eröffnen",
          nl: "Het spel openen"
        }
      ],
      correct: 1,
      explanation: {
        en: "Q without U words (QI, QOPH, QADI, QAID, QANAT, etc.) are crucial for playing the difficult Q tile without having a U. Learning these is essential for competitive play.",
        es: "Las palabras Q sin U (QI, QOPH, QADI, QAID, QANAT, etc.) son cruciales para jugar la difícil ficha Q sin tener una U. Aprender estas es esencial para el juego competitivo.",
        de: "Q ohne U Wörter (QI, QOPH, QADI, QAID, QANAT, etc.) sind entscheidend um den schwierigen Q-Stein ohne U zu spielen. Diese zu lernen ist wesentlich für kompetitives Spiel.",
        nl: "Q zonder U woorden (QI, QOPH, QADI, QAID, QANAT, etc.) zijn cruciaal voor het spelen van de moeilijke Q-steen zonder een U. Deze leren is essentieel voor competitief spel."
      }
    },
    {
      question: {
        en: "What is 'tracking' in competitive Scrabble?",
        es: "¿Qué es 'rastreo' en Scrabble competitivo?",
        de: "Was ist 'Verfolgung' im kompetitiven Scrabble?",
        nl: "Wat is 'volgen' in competitief Scrabble?"
      },
      options: [
        {
          en: "Following tournament rankings",
          es: "Seguir clasificaciones de torneo",
          de: "Turnier-Ranglisten verfolgen",
          nl: "Toernooiranglijsten volgen"
        },
        {
          en: "Recording which tiles have been played",
          es: "Registrar qué fichas se han jugado",
          de: "Aufzeichnen welche Steine gespielt wurden",
          nl: "Bijhouden welke stenen zijn gespeeld"
        },
        {
          en: "Counting points",
          es: "Contar puntos",
          de: "Punkte zählen",
          nl: "Punten tellen"
        },
        {
          en: "Timing opponents",
          es: "Cronometrar oponentes",
          de: "Gegner stoppen",
          nl: "Tegenstanders timen"
        }
      ],
      correct: 1,
      explanation: {
        en: "Tracking means recording which tiles have been played to deduce what remains in the bag and on opponent's rack. Advanced players track tiles to make optimal endgame decisions.",
        es: "Rastreo significa registrar qué fichas se han jugado para deducir qué queda en la bolsa y en el soporte del oponente. Los jugadores avanzados rastrean fichas para tomar decisiones óptimas en el final.",
        de: "Verfolgung bedeutet aufzuzeichnen welche Steine gespielt wurden um zu deduzieren was im Beutel und auf dem Rack des Gegners bleibt. Fortgeschrittene Spieler verfolgen Steine um optimale Endspiel-Entscheidungen zu treffen.",
        nl: "Volgen betekent bijhouden welke stenen zijn gespeeld om af te leiden wat er in de zak en op het rek van de tegenstander overblijft. Gevorderde spelers volgen stenen om optimale eindspel beslissingen te nemen."
      }
    },
    {
      question: {
        en: "What does 'equity' mean in Scrabble analysis?",
        es: "¿Qué significa 'equidad' en análisis de Scrabble?",
        de: "Was bedeutet 'Eigenkapital' in der Scrabble-Analyse?",
        nl: "Wat betekent 'waarde' in Scrabble analyse?"
      },
      options: [
        {
          en: "Fair play",
          es: "Juego limpio",
          de: "Faires Spiel",
          nl: "Eerlijk spel"
        },
        {
          en: "Expected value of a play considering score and future potential",
          es: "Valor esperado de una jugada considerando puntuación y potencial futuro",
          de: "Erwarteter Wert eines Zugs unter Berücksichtigung von Punktzahl und zukünftigem Potenzial",
          nl: "Verwachte waarde van een zet rekening houdend met score en toekomstig potentieel"
        },
        {
          en: "Equal scores",
          es: "Puntuaciones iguales",
          de: "Gleiche Punktzahlen",
          nl: "Gelijke scores"
        },
        {
          en: "Balanced rack",
          es: "Soporte equilibrado",
          de: "Ausgewogenes Rack",
          nl: "Gebalanceerd rek"
        }
      ],
      correct: 1,
      explanation: {
        en: "Equity is the expected value of a play, combining immediate points with the quality of the leaving and future scoring potential. Computer analysis calculates equity for move evaluation.",
        es: "La equidad es el valor esperado de una jugada, combinando puntos inmediatos con la calidad de lo que se deja y el potencial de puntuación futuro. El análisis por computadora calcula la equidad para evaluar jugadas.",
        de: "Eigenkapital ist der erwartete Wert eines Zugs, der sofortige Punkte mit der Qualität des Übriglassens und zukünftigem Punktepotenzial kombiniert. Computeranalyse berechnet Eigenkapital zur Zugbewertung.",
        nl: "Waarde is de verwachte waarde van een zet, waarbij directe punten worden gecombineerd met de kwaliteit van wat overblijft en toekomstig scoringspotentieel. Computeranalyse berekent waarde voor zetevaluatie."
      }
    },
    {
      question: {
        en: "How many tiles of the letter D are in standard Scrabble?",
        es: "¿Cuántas fichas de la letra D hay en Scrabble estándar?",
        de: "Wie viele Steine des Buchstabens D gibt es im Standard-Scrabble?",
        nl: "Hoeveel stenen van de letter D zijn er in standaard Scrabble?"
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
        en: "There are 4 D tiles in standard English Scrabble, each worth 2 points. D is a common and versatile consonant.",
        es: "Hay 4 fichas D en Scrabble inglés estándar, cada una vale 2 puntos. D es una consonante común y versátil.",
        de: "Es gibt 4 D-Steine im Standard-Englisch-Scrabble, jeder ist 2 Punkte wert. D ist ein häufiger und vielseitiger Konsonant.",
        nl: "Er zijn 4 D-stenen in standaard Engels Scrabble, elk 2 punten waard. D is een veel voorkomende en veelzijdige medeklinker."
      }
    },
    {
      question: {
        en: "What is a 'hot spot' on the Scrabble board?",
        es: "¿Qué es un 'punto caliente' en el tablero de Scrabble?",
        de: "Was ist ein 'heißer Punkt' auf dem Scrabble-Brett?",
        nl: "Wat is een 'hot spot' op het Scrabble-bord?"
      },
      options: [
        {
          en: "The center square",
          es: "El cuadrado central",
          de: "Das zentrale Feld",
          nl: "Het centrale vak"
        },
        {
          en: "An area with high scoring potential",
          es: "Un área con alto potencial de puntuación",
          de: "Ein Bereich mit hohem Punktepotenzial",
          nl: "Een gebied met hoog scoringspotentieel"
        },
        {
          en: "A contested corner",
          es: "Una esquina disputada",
          de: "Eine umkämpfte Ecke",
          nl: "Een betwiste hoek"
        },
        {
          en: "Premium squares only",
          es: "Solo cuadrados premium",
          de: "Nur Premium-Felder",
          nl: "Alleen premiumvakken"
        }
      ],
      correct: 1,
      explanation: {
        en: "A hot spot is an area of the board with multiple premium squares accessible or where high-scoring plays are possible, often involving overlapping bonus squares.",
        es: "Un punto caliente es un área del tablero con múltiples cuadrados premium accesibles o donde son posibles jugadas de alta puntuación, a menudo involucrando cuadrados de bonificación superpuestos.",
        de: "Ein heißer Punkt ist ein Bereich des Bretts mit mehreren zugänglichen Premium-Feldern oder wo hochbewertende Züge möglich sind, oft mit überlappenden Bonus-Feldern.",
        nl: "Een hot spot is een gebied van het bord met meerdere toegankelijke premiumvakken of waar hoogscorende zetten mogelijk zijn, vaak met overlappende bonusvakken."
      }
    },
    {
      question: {
        en: "What is 'closed board' play in Scrabble?",
        es: "¿Qué es el juego de 'tablero cerrado' en Scrabble?",
        de: "Was ist 'geschlossenes Brett'-Spiel im Scrabble?",
        nl: "Wat is 'gesloten bord' spel in Scrabble?"
      },
      options: [
        {
          en: "Playing in one corner only",
          es: "Jugar solo en una esquina",
          de: "Nur in einer Ecke spielen",
          nl: "Alleen in één hoek spelen"
        },
        {
          en: "Style limiting scoring opportunities",
          es: "Estilo que limita oportunidades de puntuación",
          de: "Stil der Punktemöglichkeiten begrenzt",
          nl: "Stijl die scoringsmogelijkheden beperkt"
        },
        {
          en: "Ending the game early",
          es: "Terminar el juego temprano",
          de: "Das Spiel früh beenden",
          nl: "Het spel vroeg beëindigen"
        },
        {
          en: "Using no premium squares",
          es: "No usar cuadrados premium",
          de: "Keine Premium-Felder verwenden",
          nl: "Geen premiumvakken gebruiken"
        }
      ],
      correct: 1,
      explanation: {
        en: "Closed board play means making moves that limit both players' scoring opportunities, often used when ahead to protect a lead by reducing variance.",
        es: "El juego de tablero cerrado significa hacer movimientos que limitan las oportunidades de puntuación de ambos jugadores, a menudo usado cuando se va adelante para proteger una ventaja reduciendo la varianza.",
        de: "Geschlossenes Brett-Spiel bedeutet Züge zu machen die die Punktemöglichkeiten beider Spieler begrenzen, oft verwendet wenn man vorne liegt um einen Vorsprung durch Reduzierung der Varianz zu schützen.",
        nl: "Gesloten bord spel betekent zetten maken die de scoringsmogelijkheden van beide spelers beperken, vaak gebruikt wanneer voor om een voorsprong te beschermen door variantie te verminderen."
      }
    },
    {
      question: {
        en: "What is the 'challenge rule' difference between North American and international play?",
        es: "¿Cuál es la diferencia de 'regla de desafío' entre juego norteamericano e internacional?",
        de: "Was ist der 'Herausforderungsregel'-Unterschied zwischen nordamerikanischem und internationalem Spiel?",
        nl: "Wat is het verschil in 'uitdagingsregel' tussen Noord-Amerikaans en internationaal spel?"
      },
      options: [
        {
          en: "No difference",
          es: "Sin diferencia",
          de: "Kein Unterschied",
          nl: "Geen verschil"
        },
        {
          en: "North America uses double challenge, international uses single",
          es: "América del Norte usa desafío doble, internacional usa simple",
          de: "Nordamerika verwendet doppelte Herausforderung, international verwendet einfache",
          nl: "Noord-Amerika gebruikt dubbele uitdaging, internationaal gebruikt enkele"
        },
        {
          en: "Challenges not allowed internationally",
          es: "Desafíos no permitidos internacionalmente",
          de: "Herausforderungen international nicht erlaubt",
          nl: "Uitdagingen niet toegestaan internationaal"
        },
        {
          en: "Only computer challenges allowed",
          es: "Solo desafíos por computadora permitidos",
          de: "Nur Computer-Herausforderungen erlaubt",
          nl: "Alleen computeruitdagingen toegestaan"
        }
      ],
      correct: 1,
      explanation: {
        en: "North American tournaments typically use 'double challenge' (challenger loses turn if wrong), while international play uses 'single challenge' (no penalty for incorrect challenge).",
        es: "Los torneos norteamericanos típicamente usan 'desafío doble' (el retador pierde turno si está mal), mientras que el juego internacional usa 'desafío simple' (sin penalización por desafío incorrecto).",
        de: "Nordamerikanische Turniere verwenden typischerweise 'doppelte Herausforderung' (Herausforderer verliert Zug wenn falsch), während internationales Spiel 'einfache Herausforderung' verwendet (keine Strafe für falsche Herausforderung).",
        nl: "Noord-Amerikaanse toernooien gebruiken typisch 'dubbele uitdaging' (uitdager verliest beurt als fout), terwijl internationaal spel 'enkele uitdaging' gebruikt (geen straf voor onjuiste uitdaging)."
      }
    },
    {
      question: {
        en: "What is 'pre-endgame' in Scrabble?",
        es: "¿Qué es 'pre-final' en Scrabble?",
        de: "Was ist 'Vor-Endspiel' im Scrabble?",
        nl: "Wat is 'pre-eindspel' in Scrabble?"
      },
      options: [
        {
          en: "The first few turns",
          es: "Los primeros turnos",
          de: "Die ersten Züge",
          nl: "De eerste beurten"
        },
        {
          en: "When fewer than 7 tiles remain unseen",
          es: "Cuando quedan menos de 7 fichas sin ver",
          de: "Wenn weniger als 7 Steine ungesehen bleiben",
          nl: "Wanneer minder dan 7 stenen ongezien blijven"
        },
        {
          en: "The middle of the game",
          es: "La mitad del juego",
          de: "Die Mitte des Spiels",
          nl: "Het midden van het spel"
        },
        {
          en: "After first bingo",
          es: "Después del primer bingo",
          de: "Nach dem ersten Bingo",
          nl: "Na eerste bingo"
        }
      ],
      correct: 1,
      explanation: {
        en: "Pre-endgame is the phase when the bag has 0-6 tiles remaining (fewer than one rack). Players can deduce unseen tiles more accurately, requiring different strategic considerations.",
        es: "Pre-final es la fase cuando la bolsa tiene 0-6 fichas restantes (menos de un soporte). Los jugadores pueden deducir fichas no vistas con más precisión, requiriendo diferentes consideraciones estratégicas.",
        de: "Vor-Endspiel ist die Phase wenn der Beutel 0-6 verbleibende Steine hat (weniger als ein Rack). Spieler können ungesehene Steine genauer deduzieren, was andere strategische Überlegungen erfordert.",
        nl: "Pre-eindspel is de fase wanneer de zak 0-6 resterende stenen heeft (minder dan één rek). Spelers kunnen ongeziene stenen nauwkeuriger afleiden, wat verschillende strategische overwegingen vereist."
      }
    },
    {
      question: {
        en: "What does 'S-hook' specifically refer to?",
        es: "¿A qué se refiere específicamente 'gancho-S'?",
        de: "Worauf bezieht sich 'S-Haken' speziell?",
        nl: "Waar verwijst 'S-haak' specifiek naar?"
      },
      options: [
        {
          en: "Any word ending in S",
          es: "Cualquier palabra que termine en S",
          de: "Jedes Wort das mit S endet",
          nl: "Elk woord eindigend op S"
        },
        {
          en: "Adding S to make a plural and form perpendicular word",
          es: "Agregar S para hacer plural y formar palabra perpendicular",
          de: "S hinzufügen um Plural zu machen und senkrechtes Wort zu bilden",
          nl: "S toevoegen om meervoud te maken en loodrecht woord te vormen"
        },
        {
          en: "The letter S shape",
          es: "La forma de la letra S",
          de: "Die Form des Buchstabens S",
          nl: "De vorm van de letter S"
        },
        {
          en: "Playing only S tiles",
          es: "Jugar solo fichas S",
          de: "Nur S-Steine spielen",
          nl: "Alleen S-stenen spelen"
        }
      ],
      correct: 1,
      explanation: {
        en: "An S-hook is adding an S to an existing word to create its plural while simultaneously forming a perpendicular word, maximizing the value of the S tile.",
        es: "Un gancho-S es agregar una S a una palabra existente para crear su plural mientras simultáneamente forma una palabra perpendicular, maximizando el valor de la ficha S.",
        de: "Ein S-Haken ist das Hinzufügen eines S zu einem bestehenden Wort um den Plural zu erstellen während gleichzeitig ein senkrechtes Wort gebildet wird, was den Wert des S-Steins maximiert.",
        nl: "Een S-haak is het toevoegen van een S aan een bestaand woord om het meervoud te maken terwijl tegelijkertijd een loodrecht woord wordt gevormd, waardoor de waarde van de S-steen wordt gemaximaliseerd."
      }
    },
    {
      question: {
        en: "What percentage of the tile pool has been played in an average game?",
        es: "¿Qué porcentaje del conjunto de fichas se ha jugado en un juego promedio?",
        de: "Welcher Prozentsatz des Stein-Pools wurde in einem durchschnittlichen Spiel gespielt?",
        nl: "Welk percentage van de stenenpool is gespeeld in een gemiddeld spel?"
      },
      options: [
        {
          en: "About 60%",
          es: "Aproximadamente 60%",
          de: "Etwa 60%",
          nl: "Ongeveer 60%"
        },
        {
          en: "About 70%",
          es: "Aproximadamente 70%",
          de: "Etwa 70%",
          nl: "Ongeveer 70%"
        },
        {
          en: "About 80%",
          es: "Aproximadamente 80%",
          de: "Etwa 80%",
          nl: "Ongeveer 80%"
        },
        {
          en: "About 90%",
          es: "Aproximadamente 90%",
          de: "Etwa 90%",
          nl: "Ongeveer 90%"
        }
      ],
      correct: 3,
      explanation: {
        en: "About 86-90% of tiles are typically played in an average game. The game usually ends with players having some tiles remaining when no more plays are possible.",
        es: "Aproximadamente 86-90% de las fichas se juegan típicamente en un juego promedio. El juego generalmente termina con jugadores teniendo algunas fichas restantes cuando no son posibles más jugadas.",
        de: "Etwa 86-90% der Steine werden typischerweise in einem durchschnittlichen Spiel gespielt. Das Spiel endet normalerweise mit Spielern die einige Steine übrig haben wenn keine weiteren Züge möglich sind.",
        nl: "Ongeveer 86-90% van de stenen worden typisch gespeeld in een gemiddeld spel. Het spel eindigt meestal met spelers die enkele stenen over hebben wanneer geen zetten meer mogelijk zijn."
      }
    },
    {
      question: {
        en: "What is 'spot' in Scrabble terminology?",
        es: "¿Qué es 'lugar' en terminología de Scrabble?",
        de: "Was ist 'Stelle' in der Scrabble-Terminologie?",
        nl: "Wat is 'plek' in Scrabble-terminologie?"
      },
      options: [
        {
          en: "A premium square",
          es: "Un cuadrado premium",
          de: "Ein Premium-Feld",
          nl: "Een premiumvak"
        },
        {
          en: "A location for a specific play or tile",
          es: "Una ubicación para una jugada o ficha específica",
          de: "Ein Ort für einen bestimmten Zug oder Stein",
          nl: "Een locatie voor een specifieke zet of steen"
        },
        {
          en: "The center star",
          es: "La estrella central",
          de: "Der zentrale Stern",
          nl: "De centrale ster"
        },
        {
          en: "A blank tile placement",
          es: "Una colocación de ficha en blanco",
          de: "Eine Blanko-Stein-Platzierung",
          nl: "Een blanco steen plaatsing"
        }
      ],
      correct: 1,
      explanation: {
        en: "A 'spot' refers to a specific location on the board where a particular tile or word can be played, especially one that creates a good scoring opportunity.",
        es: "Un 'lugar' se refiere a una ubicación específica en el tablero donde una ficha o palabra particular puede jugarse, especialmente una que crea una buena oportunidad de puntuación.",
        de: "Eine 'Stelle' bezieht sich auf einen bestimmten Ort auf dem Brett wo ein bestimmter Stein oder ein Wort gespielt werden kann, besonders einer der eine gute Punktemöglichkeit schafft.",
        nl: "Een 'plek' verwijst naar een specifieke locatie op het bord waar een bepaalde steen of woord kan worden gespeeld, vooral een die een goede scoringsmogelijkheid creëert."
      }
    },
    {
      question: {
        en: "What is the highest possible single-turn score in Scrabble under perfect conditions?",
        es: "¿Cuál es la puntuación más alta posible en un solo turno en Scrabble bajo condiciones perfectas?",
        de: "Was ist die höchstmögliche Einzelzug-Punktzahl im Scrabble unter perfekten Bedingungen?",
        nl: "Wat is de hoogst mogelijke score in één beurt in Scrabble onder perfecte omstandigheden?"
      },
      options: [
        {
          en: "Around 500 points",
          es: "Alrededor de 500 puntos",
          de: "Etwa 500 Punkte",
          nl: "Ongeveer 500 punten"
        },
        {
          en: "Around 1000 points",
          es: "Alrededor de 1000 puntos",
          de: "Etwa 1000 Punkte",
          nl: "Ongeveer 1000 punten"
        },
        {
          en: "Around 1500 points",
          es: "Alrededor de 1500 puntos",
          de: "Etwa 1500 Punkte",
          nl: "Ongeveer 1500 punten"
        },
        {
          en: "Around 2000 points",
          es: "Alrededor de 2000 puntos",
          de: "Etwa 2000 Punkte",
          nl: "Ongeveer 2000 punten"
        }
      ],
      correct: 1,
      explanation: {
        en: "The theoretical maximum single-turn score is around 1780+ points, requiring perfect board setup with multiple overlapping words on Triple Word Scores. The highest recorded real game score is much lower.",
        es: "La puntuación máxima teórica de un solo turno es alrededor de 1780+ puntos, requiriendo configuración perfecta del tablero con múltiples palabras superpuestas en Puntuaciones de Palabra Triple. La puntuación real más alta registrada es mucho menor.",
        de: "Die theoretische maximale Einzelzug-Punktzahl beträgt etwa 1780+ Punkte, was eine perfekte Brett-Einrichtung mit mehreren überlappenden Wörtern auf Dreifachen Wortwerten erfordert. Die höchste aufgezeichnete echte Spiel-Punktzahl ist viel niedriger.",
        nl: "De theoretische maximale score in één beurt is ongeveer 1780+ punten, wat een perfecte bord opstelling vereist met meerdere overlappende woorden op Drievoudige Woord Scores. De hoogste opgenomen echte spel score is veel lager."
      }
    },
    {
      question: {
        en: "What does 'vowel dump' mean strategically?",
        es: "¿Qué significa 'deshacerse de vocales' estratégicamente?",
        de: "Was bedeutet 'Vokal-Entsorgung' strategisch?",
        nl: "Wat betekent 'klinker dump' strategisch?"
      },
      options: [
        {
          en: "Exchanging all vowels",
          es: "Intercambiar todas las vocales",
          de: "Alle Vokale tauschen",
          nl: "Alle klinkers ruilen"
        },
        {
          en: "Playing excess vowels to rebalance rack",
          es: "Jugar vocales excesivas para reequilibrar soporte",
          de: "Überschüssige Vokale spielen um Rack auszugleichen",
          nl: "Overtollige klinkers spelen om rek te herbalanceren"
        },
        {
          en: "Avoiding vowel-heavy words",
          es: "Evitar palabras con muchas vocales",
          de: "Vokalreiche Wörter vermeiden",
          nl: "Klinker-rijke woorden vermijden"
        },
        {
          en: "Saving vowels for later",
          es: "Guardar vocales para después",
          de: "Vokale für später aufheben",
          nl: "Klinkers voor later bewaren"
        }
      ],
      correct: 1,
      explanation: {
        en: "Vowel dumping is playing multiple vowels (even for lower points) when you have too many, to improve rack balance and increase future bingo chances.",
        es: "Deshacerse de vocales es jugar múltiples vocales (incluso por menos puntos) cuando tienes demasiadas, para mejorar el equilibrio del soporte y aumentar las posibilidades futuras de bingo.",
        de: "Vokal-Entsorgung ist das Spielen mehrerer Vokale (auch für niedrigere Punkte) wenn Sie zu viele haben, um Rack-Balance zu verbessern und zukünftige Bingo-Chancen zu erhöhen.",
        nl: "Klinker dumpen is meerdere klinkers spelen (zelfs voor lagere punten) wanneer je er te veel hebt, om rek balans te verbeteren en toekomstige bingo kansen te verhogen."
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
