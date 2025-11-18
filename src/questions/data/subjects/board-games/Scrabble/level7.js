// Quiz Template - Level 7: Bord spelletjes - Scrabble
(function() {
  const level7 = {
  name: {
    en: "Scrabble",
    es: "Scrabble",
    de: "Scrabble",
    nl: "Scrabble"
  },
  questions: [
    {
      question: {
        en: "What is the highest-scoring Scrabble word ever played in tournament?",
        es: "¿Cuál es la palabra de Scrabble con mayor puntuación jamás jugada en torneo?",
        de: "Was ist das höchstbewertete Scrabble-Wort, das jemals in einem Turnier gespielt wurde?",
        nl: "Wat is het hoogst scorende Scrabble-woord ooit gespeeld in een toernooi?"
      },
      options: [
        {
          en: "OXYPHENBUTAZONE (1,778 pts)",
          es: "OXYPHENBUTAZONE (1.778 puntos)",
          de: "OXYPHENBUTAZONE (1.778 Punkte)",
          nl: "OXYPHENBUTAZONE (1.778 punten)"
        },
        {
          en: "QUIXOTRY (365 pts)",
          es: "QUIXOTRY (365 puntos)",
          de: "QUIXOTRY (365 Punkte)",
          nl: "QUIXOTRY (365 punten)"
        },
        {
          en: "CAZIQUES (392 pts)",
          es: "CAZIQUES (392 puntos)",
          de: "CAZIQUES (392 Punkte)",
          nl: "CAZIQUES (392 punten)"
        },
        {
          en: "QUARTZY (164 pts)",
          es: "QUARTZY (164 puntos)",
          de: "QUARTZY (164 Punkte)",
          nl: "QUARTZY (164 punten)"
        }
      ],
      correct: 2,
      explanation: {
        en: "CAZIQUES (392 points) holds the record for highest tournament word. OXYPHENBUTAZONE is theoretical maximum but never played in tournament.",
        es: "CAZIQUES (392 puntos) tiene el récord de la palabra de torneo más alta. OXYPHENBUTAZONE es el máximo teórico pero nunca jugado en torneo.",
        de: "CAZIQUES (392 Punkte) hält den Rekord für das höchste Turnierwort. OXYPHENBUTAZONE ist das theoretische Maximum, wurde aber nie in einem Turnier gespielt.",
        nl: "CAZIQUES (392 punten) heeft het record voor hoogste toernooiwoord. OXYPHENBUTAZONE is theoretisch maximum maar nooit gespeeld in toernooi."
      }
    },
    {
      question: {
        en: "In French Scrabble, how many points is the letter K worth?",
        es: "En Scrabble francés, ¿cuántos puntos vale la letra K?",
        de: "Wie viele Punkte ist der Buchstabe K im französischen Scrabble wert?",
        nl: "Hoeveel punten is de letter K waard in Frans Scrabble?"
      },
      options: [
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
        },
        {
          en: "10 points",
          es: "10 puntos",
          de: "10 Punkte",
          nl: "10 punten"
        },
        {
          en: "Same as English (5 points)",
          es: "Igual que en inglés (5 puntos)",
          de: "Gleich wie Englisch (5 Punkte)",
          nl: "Hetzelfde als Engels (5 punten)"
        }
      ],
      correct: 2,
      explanation: {
        en: "In French Scrabble, K is worth 10 points (not 5 like English) because K is extremely rare in French.",
        es: "En Scrabble francés, K vale 10 puntos (no 5 como en inglés) porque K es extremadamente raro en francés.",
        de: "Im französischen Scrabble ist K 10 Punkte wert (nicht 5 wie im Englischen), weil K im Französischen extrem selten ist.",
        nl: "In Frans Scrabble is K 10 punten waard (niet 5 zoals Engels) omdat K extreem zeldzaam is in het Frans."
      }
    },
    {
      question: {
        en: "What is 'Super Scrabble' variant?",
        es: "¿Qué es la variante 'Super Scrabble'?",
        de: "Was ist die 'Super Scrabble'-Variante?",
        nl: "Wat is de 'Super Scrabble'-variant?"
      },
      options: [
        {
          en: "Played with dictionary only",
          es: "Jugado solo con diccionario",
          de: "Nur mit Wörterbuch gespielt",
          nl: "Gespeeld met alleen woordenboek"
        },
        {
          en: "21x21 board with 200 tiles",
          es: "Tablero 21x21 con 200 fichas",
          de: "21x21-Brett mit 200 Steinen",
          nl: "21x21 bord met 200 stenen"
        },
        {
          en: "Double points for all words",
          es: "Puntos dobles para todas las palabras",
          de: "Doppelte Punkte für alle Wörter",
          nl: "Dubbele punten voor alle woorden"
        },
        {
          en: "Timed 3-minute turns",
          es: "Turnos cronometrados de 3 minutos",
          de: "Zeitlich begrenzte 3-Minuten-Züge",
          nl: "Getimede 3-minuten beurten"
        }
      ],
      correct: 1,
      explanation: {
        en: "Super Scrabble uses a 21x21 board (vs 15x15) with 200 tiles (vs 100), creating longer, higher-scoring games.",
        es: "Super Scrabble usa un tablero 21x21 (vs 15x15) con 200 fichas (vs 100), creando juegos más largos y de mayor puntuación.",
        de: "Super Scrabble verwendet ein 21x21-Brett (vs 15x15) mit 200 Steinen (vs 100), was längere Spiele mit höheren Punktzahlen ermöglicht.",
        nl: "Super Scrabble gebruikt een 21x21 bord (vs 15x15) met 200 stenen (vs 100), waardoor langere, hoger scorende spellen ontstaan."
      }
    },
    {
      question: {
        en: "What does 'TWL' stand for in Scrabble?",
        es: "¿Qué significa 'TWL' en Scrabble?",
        de: "Wofür steht 'TWL' im Scrabble?",
        nl: "Waar staat 'TWL' voor in Scrabble?"
      },
      options: [
        {
          en: "Tournament Word List",
          es: "Lista de Palabras de Torneo",
          de: "Turnier-Wortliste",
          nl: "Toernooi Woordenlijst"
        },
        {
          en: "Two Word Limit",
          es: "Límite de Dos Palabras",
          de: "Zwei-Wort-Grenze",
          nl: "Twee Woord Limiet"
        },
        {
          en: "Triple Word Letter",
          es: "Letra de Palabra Triple",
          de: "Dreifacher-Wort-Buchstabe",
          nl: "Driedubbele Woord Letter"
        },
        {
          en: "Tactical Word Learning",
          es: "Aprendizaje Táctico de Palabras",
          de: "Taktisches Wortlernen",
          nl: "Tactisch Woord Leren"
        }
      ],
      correct: 0,
      explanation: {
        en: "TWL (Tournament Word List) is the North American dictionary used in competitive Scrabble, now called NASPA Word List (NWL).",
        es: "TWL (Lista de Palabras de Torneo) es el diccionario norteamericano usado en Scrabble competitivo, ahora llamado NASPA Word List (NWL).",
        de: "TWL (Turnier-Wortliste) ist das nordamerikanische Wörterbuch für Wettkampf-Scrabble, jetzt NASPA Word List (NWL) genannt.",
        nl: "TWL (Toernooi Woordenlijst) is het Noord-Amerikaanse woordenboek gebruikt in competitief Scrabble, nu NASPA Word List (NWL) genoemd."
      }
    },
    {
      question: {
        en: "What is a 'phoney' in competitive Scrabble?",
        es: "¿Qué es un 'phoney' en Scrabble competitivo?",
        de: "Was ist ein 'Phoney' im Wettkampf-Scrabble?",
        nl: "Wat is een 'phoney' in competitief Scrabble?"
      },
      options: [
        {
          en: "A fake tile used for cheating",
          es: "Una ficha falsa usada para hacer trampa",
          de: "Ein gefälschter Stein zum Betrügen",
          nl: "Een nepstenen gebruikt voor vals spelen"
        },
        {
          en: "Invalid word played hoping not challenged",
          es: "Palabra inválida jugada esperando no ser desafiada",
          de: "Ungültiges Wort gespielt in der Hoffnung nicht herausgefordert zu werden",
          nl: "Ongeldig woord gespeeld in de hoop niet uitgedaagd te worden"
        },
        {
          en: "A blank tile used as consonant",
          es: "Una ficha en blanco usada como consonante",
          de: "Ein Blanko-Stein als Konsonant verwendet",
          nl: "Een blanco steen gebruikt als medeklinker"
        },
        {
          en: "Electronic scoring device",
          es: "Dispositivo de puntuación electrónica",
          de: "Elektronisches Bewertungsgerät",
          nl: "Elektronisch scoreapparaat"
        }
      ],
      correct: 1,
      explanation: {
        en: "A phoney is an invalid word played strategically, hoping the opponent won't challenge it. If unchallenged, it stands and scores.",
        es: "Un phoney es una palabra inválida jugada estratégicamente, esperando que el oponente no la desafíe. Si no es desafiada, permanece y puntúa.",
        de: "Ein Phoney ist ein ungültiges Wort, das strategisch gespielt wird in der Hoffnung, dass der Gegner es nicht herausfordert. Wenn nicht herausgefordert, gilt es und zählt.",
        nl: "Een phoney is een ongeldig woord strategisch gespeeld, hopend dat de tegenstander het niet uitdaagt. Indien niet uitgedaagd, blijft het staan en scoort."
      }
    },
    {
      question: {
        en: "How many 2-letter words are valid in TWL dictionary?",
        es: "¿Cuántas palabras de 2 letras son válidas en el diccionario TWL?",
        de: "Wie viele 2-Buchstaben-Wörter sind im TWL-Wörterbuch gültig?",
        nl: "Hoeveel 2-letterwoorden zijn geldig in TWL woordenboek?"
      },
      options: [
        {
          en: "78",
          es: "78",
          de: "78",
          nl: "78"
        },
        {
          en: "101",
          es: "101",
          de: "101",
          nl: "101"
        },
        {
          en: "107",
          es: "107",
          de: "107",
          nl: "107"
        },
        {
          en: "124",
          es: "124",
          de: "124",
          nl: "124"
        }
      ],
      correct: 2,
      explanation: {
        en: "There are 107 valid 2-letter words in current TWL/NWL. Learning all 2-letter words is essential for competitive play.",
        es: "Hay 107 palabras válidas de 2 letras en el TWL/NWL actual. Aprender todas las palabras de 2 letras es esencial para el juego competitivo.",
        de: "Es gibt 107 gültige 2-Buchstaben-Wörter im aktuellen TWL/NWL. Das Lernen aller 2-Buchstaben-Wörter ist für Wettkampfspiele unerlässlich.",
        nl: "Er zijn 107 geldige 2-letterwoorden in huidige TWL/NWL. Alle 2-letterwoorden leren is essentieel voor competitief spel."
      }
    },
    {
      question: {
        en: "What is 'Clabbers' variant?",
        es: "¿Qué es la variante 'Clabbers'?",
        de: "Was ist die 'Clabbers'-Variante?",
        nl: "Wat is de 'Clabbers'-variant?"
      },
      options: [
        {
          en: "Only proper nouns allowed",
          es: "Solo se permiten nombres propios",
          de: "Nur Eigennamen erlaubt",
          nl: "Alleen eigennamen toegestaan"
        },
        {
          en: "Anagrams count as valid words",
          es: "Los anagramas cuentan como palabras válidas",
          de: "Anagramme zählen als gültige Wörter",
          nl: "Anagrammen tellen als geldige woorden"
        },
        {
          en: "Each player has own dictionary",
          es: "Cada jugador tiene su propio diccionario",
          de: "Jeder Spieler hat sein eigenes Wörterbuch",
          nl: "Elke speler heeft eigen woordenboek"
        },
        {
          en: "Words must rhyme with previous word",
          es: "Las palabras deben rimar con la palabra anterior",
          de: "Wörter müssen sich mit dem vorherigen Wort reimen",
          nl: "Woorden moeten rijmen met vorig woord"
        }
      ],
      correct: 1,
      explanation: {
        en: "In Clabbers, any anagram of a valid word is playable. For example, TROS is valid because it's an anagram of SORT.",
        es: "En Clabbers, cualquier anagrama de una palabra válida es jugable. Por ejemplo, TROS es válido porque es un anagrama de SORT.",
        de: "In Clabbers ist jedes Anagramm eines gültigen Wortes spielbar. Zum Beispiel ist TROS gültig, weil es ein Anagramm von SORT ist.",
        nl: "In Clabbers is elk anagram van een geldig woord speelbaar. Bijvoorbeeld, TROS is geldig omdat het een anagram is van SORT."
      }
    },
    {
      question: {
        en: "What is the rarest Scrabble-valid 3-letter word containing Q without U?",
        es: "¿Cuál es la palabra válida de Scrabble de 3 letras más rara que contiene Q sin U?",
        de: "Was ist das seltenste 3-Buchstaben-Scrabble-Wort mit Q ohne U?",
        nl: "Wat is het zeldzaamste geldige 3-letter Scrabble-woord met Q zonder U?"
      },
      options: [
        {
          en: "QAT (Arabian shrub)",
          es: "QAT (arbusto árabe)",
          de: "QAT (arabischer Strauch)",
          nl: "QAT (Arabische struik)"
        },
        {
          en: "QIN (Chinese musical instrument)",
          es: "QIN (instrumento musical chino)",
          de: "QIN (chinesisches Musikinstrument)",
          nl: "QIN (Chinees muziekinstrument)"
        },
        {
          en: "QIS (plural of QI)",
          es: "QIS (plural de QI)",
          de: "QIS (Plural von QI)",
          nl: "QIS (meervoud van QI)"
        },
        {
          en: "All are equally common",
          es: "Todas son igualmente comunes",
          de: "Alle sind gleich häufig",
          nl: "Alle zijn even algemeen"
        }
      ],
      correct: 1,
      explanation: {
        en: "QIN (ancient Chinese stringed instrument) is the rarest Q-without-U word. QAT and QI are more commonly known among players.",
        es: "QIN (antiguo instrumento de cuerda chino) es la palabra Q-sin-U más rara. QAT y QI son más comúnmente conocidas entre los jugadores.",
        de: "QIN (altes chinesisches Saiteninstrument) ist das seltenste Q-ohne-U-Wort. QAT und QI sind unter Spielern bekannter.",
        nl: "QIN (oud Chinees snaarinstrument) is het zeldzaamste Q-zonder-U woord. QAT en QI zijn meer algemeen bekend bij spelers."
      }
    },
    {
      question: {
        en: "What is the World Scrabble Championship format?",
        es: "¿Cuál es el formato del Campeonato Mundial de Scrabble?",
        de: "Was ist das Format der Scrabble-Weltmeisterschaft?",
        nl: "Wat is het formaat van het Wereld Scrabble Kampioenschap?"
      },
      options: [
        {
          en: "Single elimination bracket",
          es: "Eliminación directa",
          de: "KO-System",
          nl: "Enkel eliminatie bracket"
        },
        {
          en: "Best of 7 series",
          es: "Mejor de 7 series",
          de: "Best-of-7-Serie",
          nl: "Best-of-7 serie"
        },
        {
          en: "24-round modified Swiss",
          es: "Suizo modificado de 24 rondas",
          de: "24-Runden modifiziertes Schweizer System",
          nl: "24-ronde gewijzigd Zwitsers"
        },
        {
          en: "Round robin with all players",
          es: "Todos contra todos con todos los jugadores",
          de: "Rundenturnier mit allen Spielern",
          nl: "Round robin met alle spelers"
        }
      ],
      correct: 2,
      explanation: {
        en: "WSC uses a 24-round modified Swiss system where players face opponents with similar records, maximizing competitive matches.",
        es: "WSC usa un sistema suizo modificado de 24 rondas donde los jugadores enfrentan oponentes con registros similares, maximizando partidos competitivos.",
        de: "Die WSC verwendet ein modifiziertes 24-Runden-Schweizer System, bei dem Spieler auf Gegner mit ähnlichen Ergebnissen treffen.",
        nl: "WSC gebruikt een gewijzigd 24-ronde Zwitsers systeem waar spelers tegenstanders met vergelijkbare records ontmoeten."
      }
    },
    {
      question: {
        en: "In Polish Scrabble, which letter is worth the most points?",
        es: "En Scrabble polaco, ¿qué letra vale más puntos?",
        de: "Welcher Buchstabe ist im polnischen Scrabble am meisten wert?",
        nl: "Welke letter is in Pools Scrabble de meeste punten waard?"
      },
      options: [
        {
          en: "Q (10 points)",
          es: "Q (10 puntos)",
          de: "Q (10 Punkte)",
          nl: "Q (10 punten)"
        },
        {
          en: "Ź (9 points)",
          es: "Ź (9 puntos)",
          de: "Ź (9 Punkte)",
          nl: "Ź (9 punten)"
        },
        {
          en: "X (8 points)",
          es: "X (8 puntos)",
          de: "X (8 Punkte)",
          nl: "X (8 punten)"
        },
        {
          en: "Ż (5 points)",
          es: "Ż (5 puntos)",
          de: "Ż (5 Punkte)",
          nl: "Ż (5 punten)"
        }
      ],
      correct: 1,
      explanation: {
        en: "In Polish Scrabble, Ź (Z with acute accent) is worth 9 points, the highest value. Polish has unique diacritical letters with different values.",
        es: "En Scrabble polaco, Ź (Z con acento agudo) vale 9 puntos, el valor más alto. El polaco tiene letras diacríticas únicas con diferentes valores.",
        de: "Im polnischen Scrabble ist Ź (Z mit Akut) 9 Punkte wert, der höchste Wert. Polnisch hat einzigartige diakritische Buchstaben mit unterschiedlichen Werten.",
        nl: "In Pools Scrabble is Ź (Z met accent aigu) 9 punten waard, de hoogste waarde. Pools heeft unieke diakritische letters met verschillende waarden."
      }
    },
    {
      question: {
        en: "What is 'Quackle' in competitive Scrabble?",
        es: "¿Qué es 'Quackle' en Scrabble competitivo?",
        de: "Was ist 'Quackle' im Wettkampf-Scrabble?",
        nl: "Wat is 'Quackle' in competitief Scrabble?"
      },
      options: [
        {
          en: "A duck-themed Scrabble variant",
          es: "Una variante de Scrabble con tema de patos",
          de: "Eine Enten-Scrabble-Variante",
          nl: "Een eenden-thema Scrabble variant"
        },
        {
          en: "Computer analysis software",
          es: "Software de análisis por computadora",
          de: "Computer-Analysesoftware",
          nl: "Computer analyse software"
        },
        {
          en: "Tournament pairing system",
          es: "Sistema de emparejamiento de torneos",
          de: "Turnier-Paarungssystem",
          nl: "Toernooi koppelingsysteem"
        },
        {
          en: "Rapid-play time format",
          es: "Formato de tiempo de juego rápido",
          de: "Schnellspiel-Zeitformat",
          nl: "Snel-spel tijd formaat"
        }
      ],
      correct: 1,
      explanation: {
        en: "Quackle is powerful AI software that analyzes Scrabble positions and suggests optimal plays based on equity and simulation.",
        es: "Quackle es un poderoso software de IA que analiza posiciones de Scrabble y sugiere jugadas óptimas basadas en equidad y simulación.",
        de: "Quackle ist leistungsstarke KI-Software, die Scrabble-Positionen analysiert und optimale Züge basierend auf Equity und Simulation vorschlägt.",
        nl: "Quackle is krachtige AI-software die Scrabble-posities analyseert en optimale zetten voorstelt op basis van equity en simulatie."
      }
    },
    {
      question: {
        en: "What is the longest valid English Scrabble word?",
        es: "¿Cuál es la palabra válida más larga en Scrabble inglés?",
        de: "Was ist das längste gültige englische Scrabble-Wort?",
        nl: "Wat is het langste geldige Engelse Scrabble-woord?"
      },
      options: [
        {
          en: "OXYPHENBUTAZONE (15 letters)",
          es: "OXYPHENBUTAZONE (15 letras)",
          de: "OXYPHENBUTAZONE (15 Buchstaben)",
          nl: "OXYPHENBUTAZONE (15 letters)"
        },
        {
          en: "ETHYLENEDIAMINETETRAACETATES (28 letters)",
          es: "ETHYLENEDIAMINETETRAACETATES (28 letras)",
          de: "ETHYLENEDIAMINETETRAACETATES (28 Buchstaben)",
          nl: "ETHYLENEDIAMINETETRAACETATES (28 letters)"
        },
        {
          en: "ANTIDISESTABLISHMENTARIANISM (28 letters)",
          es: "ANTIDISESTABLISHMENTARIANISM (28 letras)",
          de: "ANTIDISESTABLISHMENTARIANISM (28 Buchstaben)",
          nl: "ANTIDISESTABLISHMENTARIANISM (28 letters)"
        },
        {
          en: "All words limited to 15 letters",
          es: "Todas las palabras limitadas a 15 letras",
          de: "Alle Wörter auf 15 Buchstaben begrenzt",
          nl: "Alle woorden beperkt tot 15 letters"
        }
      ],
      correct: 3,
      explanation: {
        en: "All Scrabble words are limited to 15 letters maximum (board width). OXYPHENBUTAZONE is the longest playable at 15 letters.",
        es: "Todas las palabras de Scrabble están limitadas a un máximo de 15 letras (ancho del tablero). OXYPHENBUTAZONE es la más larga jugable con 15 letras.",
        de: "Alle Scrabble-Wörter sind auf maximal 15 Buchstaben begrenzt (Brettbreite). OXYPHENBUTAZONE ist das längste spielbare mit 15 Buchstaben.",
        nl: "Alle Scrabble-woorden zijn beperkt tot maximaal 15 letters (bordbreedte). OXYPHENBUTAZONE is het langste speelbare met 15 letters."
      }
    },
    {
      question: {
        en: "What is the highest-scoring opening move possible?",
        es: "¿Cuál es la jugada de apertura de mayor puntuación posible?",
        de: "Was ist der höchstmögliche Eröffnungszug?",
        nl: "Wat is de hoogst mogelijke openingszet?"
      },
      options: [
        {
          en: "BEZIQUE (76 points)",
          es: "BEZIQUE (76 puntos)",
          de: "BEZIQUE (76 Punkte)",
          nl: "BEZIQUE (76 punten)"
        },
        {
          en: "MUZJIKS (128 points)",
          es: "MUZJIKS (128 puntos)",
          de: "MUZJIKS (128 Punkte)",
          nl: "MUZJIKS (128 punten)"
        },
        {
          en: "QUARTZY (124 points)",
          es: "QUARTZY (124 puntos)",
          de: "QUARTZY (124 Punkte)",
          nl: "QUARTZY (124 punten)"
        },
        {
          en: "ZEPHYRS (126 points)",
          es: "ZEPHYRS (126 puntos)",
          de: "ZEPHYRS (126 Punkte)",
          nl: "ZEPHYRS (126 punten)"
        }
      ],
      correct: 1,
      explanation: {
        en: "MUZJIKS (Russian peasants) scored horizontally through center star with Z on double-letter square = 128 points (including 50-point bingo).",
        es: "MUZJIKS (campesinos rusos) anotado horizontalmente a través de la estrella central con Z en cuadrado de letra doble = 128 puntos (incluyendo bingo de 50 puntos).",
        de: "MUZJIKS (russische Bauern) horizontal durch den Mittelstern mit Z auf Doppel-Buchstaben-Feld = 128 Punkte (einschließlich 50-Punkte-Bingo).",
        nl: "MUZJIKS (Russische boeren) horizontaal gescoord door centrale ster met Z op dubbele-letter vak = 128 punten (inclusief 50-punten bingo)."
      }
    },
    {
      question: {
        en: "What does 'CSW' dictionary stand for?",
        es: "¿Qué significa el diccionario 'CSW'?",
        de: "Wofür steht das 'CSW'-Wörterbuch?",
        nl: "Waar staat 'CSW' woordenboek voor?"
      },
      options: [
        {
          en: "Common Scrabble Words",
          es: "Palabras Comunes de Scrabble",
          de: "Übliche Scrabble-Wörter",
          nl: "Algemene Scrabble Woorden"
        },
        {
          en: "Collins Scrabble Words",
          es: "Palabras de Scrabble Collins",
          de: "Collins Scrabble-Wörter",
          nl: "Collins Scrabble Woorden"
        },
        {
          en: "Canadian Standard Wordlist",
          es: "Lista de Palabras Estándar Canadiense",
          de: "Kanadische Standard-Wortliste",
          nl: "Canadese Standaard Woordenlijst"
        },
        {
          en: "Championship Scrabble Wordbook",
          es: "Libro de Palabras de Campeonato de Scrabble",
          de: "Meisterschafts-Scrabble-Wortbuch",
          nl: "Kampioenschap Scrabble Woordenboek"
        }
      ],
      correct: 1,
      explanation: {
        en: "CSW (Collins Scrabble Words) is the international Scrabble dictionary used everywhere except North America. It contains more words than TWL.",
        es: "CSW (Collins Scrabble Words) es el diccionario internacional de Scrabble usado en todas partes excepto América del Norte. Contiene más palabras que TWL.",
        de: "CSW (Collins Scrabble Words) ist das internationale Scrabble-Wörterbuch, das überall außer in Nordamerika verwendet wird. Es enthält mehr Wörter als TWL.",
        nl: "CSW (Collins Scrabble Words) is het internationale Scrabble woordenboek gebruikt overal behalve Noord-Amerika. Het bevat meer woorden dan TWL."
      }
    },
    {
      question: {
        en: "What is 'rack leave' strategy?",
        es: "¿Qué es la estrategia de 'rack leave'?",
        de: "Was ist die 'Rack Leave'-Strategie?",
        nl: "Wat is 'rack leave' strategie?"
      },
      options: [
        {
          en: "Leaving rack empty to exchange tiles",
          es: "Dejar el rack vacío para intercambiar fichas",
          de: "Rack leer lassen um Steine zu tauschen",
          nl: "Rek leeg laten om stenen te ruilen"
        },
        {
          en: "Tiles remaining after play for future turns",
          es: "Fichas restantes después de jugar para turnos futuros",
          de: "Steine die nach dem Zug für zukünftige Züge übrig bleiben",
          nl: "Stenen over na zet voor toekomstige beurten"
        },
        {
          en: "Physical rack management technique",
          es: "Técnica de gestión física del rack",
          de: "Physische Rack-Management-Technik",
          nl: "Fysieke rek management techniek"
        },
        {
          en: "Tournament rule about rack visibility",
          es: "Regla de torneo sobre visibilidad del rack",
          de: "Turnierregel zur Rack-Sichtbarkeit",
          nl: "Toernooi regel over rek zichtbaarheid"
        }
      ],
      correct: 1,
      explanation: {
        en: "Rack leave is the tiles you keep after playing, chosen to maximize future scoring potential. Good leave = balanced vowels/consonants, common bingo stems.",
        es: "Rack leave son las fichas que guardas después de jugar, elegidas para maximizar el potencial de puntuación futuro. Buen leave = vocales/consonantes equilibradas, raíces comunes de bingo.",
        de: "Rack Leave sind die Steine, die man nach dem Zug behält, gewählt um zukünftiges Punktepotential zu maximieren. Gutes Leave = ausgeglichene Vokale/Konsonanten, häufige Bingo-Stämme.",
        nl: "Rack leave zijn de stenen die je houdt na spelen, gekozen om toekomstig scorepotentieel te maximaliseren. Goede leave = gebalanceerde klinkers/medeklinkers, veelvoorkomende bingo stammen."
      }
    },
    {
      question: {
        en: "What is a 'blocking play' in Scrabble?",
        es: "¿Qué es una 'jugada de bloqueo' en Scrabble?",
        de: "Was ist ein 'Blockier-Zug' im Scrabble?",
        nl: "Wat is een 'blokkerende zet' in Scrabble?"
      },
      options: [
        {
          en: "Playing perpendicular to block opponent's path",
          es: "Jugar perpendicular para bloquear el camino del oponente",
          de: "Senkrecht spielen um den Weg des Gegners zu blockieren",
          nl: "Loodrecht spelen om pad van tegenstander te blokkeren"
        },
        {
          en: "Closing off premium squares or bingo lanes",
          es: "Cerrar cuadrados premium o carriles de bingo",
          de: "Premium-Felder oder Bingo-Bahnen schließen",
          nl: "Premiumvakken of bingo banen afsluiten"
        },
        {
          en: "Using all consonants to block vowels",
          es: "Usar todas las consonantes para bloquear vocales",
          de: "Alle Konsonanten verwenden um Vokale zu blockieren",
          nl: "Alle medeklinkers gebruiken om klinkers te blokkeren"
        },
        {
          en: "Challenging opponent's word validity",
          es: "Desafiar la validez de la palabra del oponente",
          de: "Die Gültigkeit des Gegner-Wortes herausfordern",
          nl: "Geldigheid van woord van tegenstander uitdagen"
        }
      ],
      correct: 1,
      explanation: {
        en: "Blocking means playing defensively to close off premium squares or reduce opponent's bingo opportunities by limiting open board spaces.",
        es: "Bloquear significa jugar defensivamente para cerrar cuadrados premium o reducir oportunidades de bingo del oponente limitando espacios abiertos del tablero.",
        de: "Blockieren bedeutet defensiv spielen um Premium-Felder zu schließen oder Bingo-Möglichkeiten des Gegners zu reduzieren durch Begrenzung offener Brett-Bereiche.",
        nl: "Blokkeren betekent defensief spelen om premiumvakken af te sluiten of bingo kansen van tegenstander te verminderen door open bordruimtes te beperken."
      }
    },
    {
      question: {
        en: "What is the minimum number of tiles needed for a bingo?",
        es: "¿Cuál es el número mínimo de fichas necesarias para un bingo?",
        de: "Was ist die Mindestanzahl an Steinen für ein Bingo?",
        nl: "Wat is het minimum aantal stenen nodig voor een bingo?"
      },
      options: [
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
          en: "7 tiles",
          es: "7 fichas",
          de: "7 Steine",
          nl: "7 stenen"
        },
        {
          en: "Any number if hooks used",
          es: "Cualquier número si se usan ganchos",
          de: "Beliebige Anzahl wenn Haken verwendet",
          nl: "Elk aantal als haken gebruikt"
        }
      ],
      correct: 2,
      explanation: {
        en: "A bingo requires playing all 7 tiles from your rack in one turn. You cannot get the 50-point bonus by playing fewer tiles even with hooks.",
        es: "Un bingo requiere jugar las 7 fichas de tu rack en un turno. No puedes obtener el bono de 50 puntos jugando menos fichas incluso con ganchos.",
        de: "Ein Bingo erfordert das Spielen aller 7 Steine aus Ihrem Rack in einem Zug. Sie können den 50-Punkte-Bonus nicht durch weniger Steine erhalten, selbst mit Haken.",
        nl: "Een bingo vereist alle 7 stenen van je rek spelen in één beurt. Je kunt de 50-punten bonus niet krijgen door minder stenen te spelen zelfs met haken."
      }
    },
    {
      question: {
        en: "In tournament play, what happens if you exceed time limit?",
        es: "En juego de torneo, ¿qué sucede si excedes el límite de tiempo?",
        de: "Was passiert im Turnierspiel, wenn Sie das Zeitlimit überschreiten?",
        nl: "Wat gebeurt er in toernooispel als je tijdslimiet overschrijdt?"
      },
      options: [
        {
          en: "Automatic game forfeit",
          es: "Pérdida automática del juego",
          de: "Automatisches Spielverlust",
          nl: "Automatisch spel verlies"
        },
        {
          en: "10-point penalty per minute overtime",
          es: "Penalización de 10 puntos por minuto extra",
          de: "10-Punkte-Strafe pro Minute Überschreitung",
          nl: "10-punten straf per minuut overtime"
        },
        {
          en: "Must pass next turn",
          es: "Debe pasar el siguiente turno",
          de: "Muss nächsten Zug aussetzen",
          nl: "Moet volgende beurt passen"
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
        en: "Tournament rules penalize 10 points per minute (or part thereof) of overtime. Players typically have 25 minutes total per game.",
        es: "Las reglas del torneo penalizan 10 puntos por minuto (o parte del mismo) de tiempo extra. Los jugadores generalmente tienen 25 minutos en total por juego.",
        de: "Turnierregeln bestrafen mit 10 Punkten pro Minute (oder Bruchteil davon) Überschreitung. Spieler haben normalerweise 25 Minuten insgesamt pro Spiel.",
        nl: "Toernooiregels straffen met 10 punten per minuut (of deel daarvan) overtime. Spelers hebben doorgaans 25 minuten totaal per spel."
      }
    },
    {
      question: {
        en: "What is 'Scrabble fatigue' in marathon tournaments?",
        es: "¿Qué es la 'fatiga del Scrabble' en torneos maratón?",
        de: "Was ist 'Scrabble-Müdigkeit' in Marathon-Turnieren?",
        nl: "Wat is 'Scrabble vermoeidheid' in marathon toernooien?"
      },
      options: [
        {
          en: "Physical exhaustion from tile handling",
          es: "Agotamiento físico por manejo de fichas",
          de: "Körperliche Erschöpfung durch Stein-Handhabung",
          nl: "Fysieke uitputting door stenen hanteren"
        },
        {
          en: "Mental decline in later rounds affecting play quality",
          es: "Declive mental en rondas posteriores que afecta calidad de juego",
          de: "Mentaler Verfall in späteren Runden der die Spielqualität beeinträchtigt",
          nl: "Mentale achteruitgang in latere rondes die speelkwaliteit beïnvloedt"
        },
        {
          en: "Board wear requiring replacement",
          es: "Desgaste del tablero que requiere reemplazo",
          de: "Brett-Verschleiß der Ersatz erfordert",
          nl: "Bordslijtage die vervanging vereist"
        },
        {
          en: "Loss of tile bag randomness",
          es: "Pérdida de aleatoriedad de la bolsa de fichas",
          de: "Verlust der Steinbeutel-Zufälligkeit",
          nl: "Verlies van steenzak willekeurigheid"
        }
      ],
      correct: 1,
      explanation: {
        en: "Scrabble fatigue refers to mental exhaustion affecting decision-making, word recall, and calculation accuracy during long multi-day tournaments (20+ games).",
        es: "La fatiga del Scrabble se refiere al agotamiento mental que afecta la toma de decisiones, el recuerdo de palabras y la precisión de los cálculos durante torneos largos de varios días (20+ juegos).",
        de: "Scrabble-Müdigkeit bezieht sich auf mentale Erschöpfung die Entscheidungsfindung, Worterinnerung und Berechnungsgenauigkeit während langer mehrtägiger Turniere (20+ Spiele) beeinträchtigt.",
        nl: "Scrabble vermoeidheid verwijst naar mentale uitputting die besluitvorming, woord herinnering en berekeningsnauwkeurigheid beïnvloedt tijdens lange meerdaagse toernooien (20+ spellen)."
      }
    },
    {
      question: {
        en: "What is the 'AEIOU' strategy?",
        es: "¿Qué es la estrategia 'AEIOU'?",
        de: "Was ist die 'AEIOU'-Strategie?",
        nl: "Wat is de 'AEIOU' strategie?"
      },
      options: [
        {
          en: "Playing only vowel-heavy words",
          es: "Jugar solo palabras con muchas vocales",
          de: "Nur vokalreiche Wörter spielen",
          nl: "Alleen klinker-rijke woorden spelen"
        },
        {
          en: "Optimal vowel-to-consonant rack balance (2-3 vowels)",
          es: "Balance óptimo de vocal a consonante en rack (2-3 vocales)",
          de: "Optimales Vokal-zu-Konsonant-Rack-Gleichgewicht (2-3 Vokale)",
          nl: "Optimale klinker-tot-medeklinker rek balans (2-3 klinkers)"
        },
        {
          en: "Memorizing all 5-vowel words",
          es: "Memorizar todas las palabras de 5 vocales",
          de: "Alle 5-Vokal-Wörter auswendig lernen",
          nl: "Alle 5-klinker woorden onthouden"
        },
        {
          en: "Tournament warm-up routine",
          es: "Rutina de calentamiento de torneo",
          de: "Turnier-Aufwärm-Routine",
          nl: "Toernooi opwarm routine"
        }
      ],
      correct: 1,
      explanation: {
        en: "AEIOU strategy means maintaining 2-3 vowels (out of 7 tiles) for optimal rack balance. Too many or few vowels reduces bingo potential.",
        es: "La estrategia AEIOU significa mantener 2-3 vocales (de 7 fichas) para un balance óptimo del rack. Demasiadas o pocas vocales reducen el potencial de bingo.",
        de: "Die AEIOU-Strategie bedeutet 2-3 Vokale (von 7 Steinen) für optimales Rack-Gleichgewicht zu halten. Zu viele oder wenige Vokale reduzieren Bingo-Potential.",
        nl: "AEIOU strategie betekent 2-3 klinkers (van 7 stenen) aanhouden voor optimale rek balans. Te veel of weinig klinkers vermindert bingo potentieel."
      }
    }
  ]
};

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  } else if (typeof window !== 'undefined') {
    window.level7 = level7;
  }
})();
