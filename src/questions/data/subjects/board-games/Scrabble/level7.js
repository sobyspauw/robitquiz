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
    },
    {
      question: {
        en: "What is 'SOWPODS' in international Scrabble?",
        es: "¿Qué es 'SOWPODS' en Scrabble internacional?",
        de: "Was ist 'SOWPODS' im internationalen Scrabble?",
        nl: "Wat is 'SOWPODS' in internationaal Scrabble?"
      },
      options: [
        {en: "Scandinavian Official Word Pool Organized Dictionary System", es: "Sistema de Diccionario Organizado de Pool de Palabras Oficiales Escandinavas", de: "Skandinavisches Offizielles Wort-Pool-Organisiertes Wörterbuch-System", nl: "Scandinavisch Officieel Woord Pool Georganiseerd Woordenboek Systeem"},
        {en: "Combination of British OSPD and American TWL dictionaries", es: "Combinación de diccionarios británicos OSPD y americanos TWL", de: "Kombination aus britischen OSPD- und amerikanischen TWL-Wörterbüchern", nl: "Combinatie van Britse OSPD en Amerikaanse TWL woordenboeken"},
        {en: "Software for online Scrabble play", es: "Software para juego de Scrabble en línea", de: "Software für Online-Scrabble-Spiel", nl: "Software voor online Scrabble spel"},
        {en: "Tournament organization system", es: "Sistema de organización de torneos", de: "Turnier-Organisationssystem", nl: "Toernooi organisatie systeem"}
      ],
      correct: 1,
      explanation: {
        en: "SOWPODS combined British OSW (Official Scrabble Words) and American OSPD (Official Scrabble Players Dictionary). Now replaced by CSW.",
        es: "SOWPODS combinó el OSW británico (Official Scrabble Words) y el OSPD americano (Official Scrabble Players Dictionary). Ahora reemplazado por CSW.",
        de: "SOWPODS kombinierte britisches OSW (Official Scrabble Words) und amerikanisches OSPD (Official Scrabble Players Dictionary). Jetzt durch CSW ersetzt.",
        nl: "SOWPODS combineerde Brits OSW (Official Scrabble Words) en Amerikaans OSPD (Official Scrabble Players Dictionary). Nu vervangen door CSW."
      }
    },
    {
      question: {
        en: "What is the theoretical maximum score in a single game?",
        es: "¿Cuál es la puntuación máxima teórica en un solo juego?",
        de: "Was ist die theoretisch maximale Punktzahl in einem einzelnen Spiel?",
        nl: "Wat is de theoretisch maximale score in een enkel spel?"
      },
      options: [
        {en: "1,782 points", es: "1.782 puntos", de: "1.782 Punkte", nl: "1.782 punten"},
        {en: "2,044 points", es: "2.044 puntos", de: "2.044 Punkte", nl: "2.044 punten"},
        {en: "3,986 points", es: "3.986 puntos", de: "3.986 Punkte", nl: "3.986 punten"},
        {en: "4,316 points", es: "4.316 puntos", de: "4.316 Punkte", nl: "4.316 punten"}
      ],
      correct: 2,
      explanation: {
        en: "The theoretical maximum single-game score is 3,986 points using all high-value tiles across multiple triple-word scores with optimal setup.",
        es: "La puntuación máxima teórica de un solo juego es 3.986 puntos usando todas las fichas de alto valor a través de múltiples puntajes de palabras triples con configuración óptima.",
        de: "Die theoretisch maximale Einzelspiel-Punktzahl beträgt 3.986 Punkte unter Verwendung aller hochwertigen Steine über mehrere Dreifach-Wort-Wertungen mit optimaler Einrichtung.",
        nl: "De theoretisch maximale enkele-spel score is 3.986 punten met alle hoge-waarde stenen over meerdere drievoudige-woord scores met optimale setup."
      }
    },
    {
      question: {
        en: "What is 'pre-endgame' phase in expert play?",
        es: "¿Qué es la fase de 'pre-final' en juego experto?",
        de: "Was ist die 'Vor-Endspiel'-Phase im Expertenspiel?",
        nl: "Wat is de 'pre-eindspel' fase in expert spel?"
      },
      options: [
        {en: "First 10 moves of game", es: "Primeros 10 movimientos del juego", de: "Ersten 10 Züge des Spiels", nl: "Eerste 10 zetten van spel"},
        {en: "When tile bag has fewer than 7 tiles remaining", es: "Cuando la bolsa de fichas tiene menos de 7 fichas restantes", de: "Wenn der Steinbeutel weniger als 7 Steine übrig hat", nl: "Wanneer steenzak minder dan 7 stenen over heeft"},
        {en: "Middle game transition period", es: "Período de transición del medio juego", de: "Mittelspiel-Übergangsphase", nl: "Middenspel overgangsperiode"},
        {en: "Time before tournament break", es: "Tiempo antes del descanso del torneo", de: "Zeit vor der Turnierpause", nl: "Tijd voor toernooi pauze"}
      ],
      correct: 1,
      explanation: {
        en: "Pre-endgame begins when bag has <7 tiles. Players can track exact tiles remaining and calculate all possibilities, transitioning from probability to certainty.",
        es: "El pre-final comienza cuando la bolsa tiene <7 fichas. Los jugadores pueden rastrear las fichas exactas restantes y calcular todas las posibilidades, pasando de probabilidad a certeza.",
        de: "Das Vor-Endspiel beginnt wenn der Beutel <7 Steine hat. Spieler können exakte verbleibende Steine verfolgen und alle Möglichkeiten berechnen, Übergang von Wahrscheinlichkeit zu Gewissheit.",
        nl: "Pre-eindspel begint wanneer zak <7 stenen heeft. Spelers kunnen exacte overgebleven stenen volgen en alle mogelijkheden berekenen, overgang van waarschijnlijkheid naar zekerheid."
      }
    },
    {
      question: {
        en: "What are 'vowel dumps' in rack management?",
        es: "¿Qué son 'descargas de vocales' en gestión de rack?",
        de: "Was sind 'Vokal-Dumps' im Rack-Management?",
        nl: "Wat zijn 'klinker dumps' in rek management?"
      },
      options: [
        {en: "Playing many vowels to balance rack", es: "Jugar muchas vocales para equilibrar rack", de: "Viele Vokale spielen um Rack zu balancieren", nl: "Veel klinkers spelen om rek te balanceren"},
        {en: "Exchanging all vowels", es: "Intercambiar todas las vocales", de: "Alle Vokale tauschen", nl: "Alle klinkers ruilen"},
        {en: "Avoiding vowel-heavy words", es: "Evitar palabras con muchas vocales", de: "Vokalreiche Wörter vermeiden", nl: "Klinker-rijke woorden vermijden"},
        {en: "Saving vowels for endgame", es: "Guardar vocales para el final", de: "Vokale für Endspiel sparen", nl: "Klinkers sparen voor eindspel"}
      ],
      correct: 0,
      explanation: {
        en: "Vowel dumps play 3+ vowels in one turn to rebalance an vowel-heavy rack (e.g., AEIOU rack becomes more playable after dumping AIO).",
        es: "Las descargas de vocales juegan 3+ vocales en un turno para reequilibrar un rack con muchas vocales (ej., rack AEIOU se vuelve más jugable después de descargar AIO).",
        de: "Vokal-Dumps spielen 3+ Vokale in einem Zug um ein vokalreiches Rack neu zu balancieren (z.B. AEIOU-Rack wird spielbarer nach Dump von AIO).",
        nl: "Klinker dumps spelen 3+ klinkers in één beurt om een klinker-zwaar rek te herbalanceren (bijv. AEIOU rek wordt speelbaarder na dumpen AIO)."
      }
    },
    {
      question: {
        en: "What is 'fishing' for a bingo?",
        es: "¿Qué es 'pescar' un bingo?",
        de: "Was ist 'Fischen' nach einem Bingo?",
        nl: "Wat is 'vissen' voor een bingo?"
      },
      options: [
        {en: "Playing low-scoring words hoping to draw bingo tiles", es: "Jugar palabras de baja puntuación esperando sacar fichas de bingo", de: "Niedrig-bewertete Wörter spielen in Hoffnung Bingo-Steine zu ziehen", nl: "Laag-scorende woorden spelen hopend bingo stenen te trekken"},
        {en: "Challenging opponent's words strategically", es: "Desafiar palabras del oponente estratégicamente", de: "Gegner-Wörter strategisch herausfordern", nl: "Woorden van tegenstander strategisch uitdagen"},
        {en: "Searching dictionary during game", es: "Buscar en diccionario durante el juego", de: "Wörterbuch während des Spiels durchsuchen", nl: "Woordenboek doorzoeken tijdens spel"},
        {en: "Memorizing high-probability bingo stems", es: "Memorizar raíces de bingo de alta probabilidad", de: "Hochwahrscheinliche Bingo-Stämme auswendig lernen", nl: "Hoge-waarschijnlijkheid bingo stammen onthouden"}
      ],
      correct: 0,
      explanation: {
        en: "Fishing means keeping strong bingo-forming tiles (like SATIRE) while playing weak tiles, accepting lower immediate score for higher bingo probability next turn.",
        es: "Pescar significa mantener fichas fuertes formadoras de bingo (como SATIRE) mientras se juegan fichas débiles, aceptando menor puntuación inmediata para mayor probabilidad de bingo en el siguiente turno.",
        de: "Fischen bedeutet starke Bingo-bildende Steine (wie SATIRE) zu behalten während schwache Steine gespielt werden, niedrigere sofortige Punktzahl für höhere Bingo-Wahrscheinlichkeit im nächsten Zug akzeptieren.",
        nl: "Vissen betekent sterke bingo-vormende stenen (zoals SATIRE) houden terwijl zwakke stenen gespeeld worden, lagere directe score accepteren voor hogere bingo kans volgende beurt."
      }
    },
    {
      question: {
        en: "What is the 'two-tile draw' endgame technique?",
        es: "¿Qué es la técnica de 'sorteo de dos fichas' en el final?",
        de: "Was ist die 'Zwei-Stein-Zieh'-Endspiel-Technik?",
        nl: "Wat is de 'twee-stenen trek' eindspel techniek?"
      },
      options: [
        {en: "Drawing exactly 2 tiles per turn", es: "Sacar exactamente 2 fichas por turno", de: "Genau 2 Steine pro Zug ziehen", nl: "Precies 2 stenen per beurt trekken"},
        {en: "Knowing exact unseen tiles when 2 remain in bag", es: "Conocer fichas exactas no vistas cuando quedan 2 en la bolsa", de: "Exakte ungesehene Steine kennen wenn 2 im Beutel bleiben", nl: "Exacte ongeziene stenen kennen wanneer 2 in zak blijven"},
        {en: "Playing pairs of tiles strategically", es: "Jugar pares de fichas estratégicamente", de: "Paare von Steinen strategisch spielen", nl: "Paren van stenen strategisch spelen"},
        {en: "Exchanging 2 tiles in endgame", es: "Intercambiar 2 fichas en el final", de: "2 Steine im Endspiel tauschen", nl: "2 stenen ruilen in eindspel"}
      ],
      correct: 1,
      explanation: {
        en: "Two-tile draw: when tracking shows 2 tiles left in bag, you know exactly which tiles opponent will get, allowing perfect endgame calculation.",
        es: "Sorteo de dos fichas: cuando el seguimiento muestra 2 fichas en la bolsa, sabes exactamente qué fichas obtendrá el oponente, permitiendo cálculo perfecto del final.",
        de: "Zwei-Stein-Zieh: wenn Verfolgung 2 Steine im Beutel zeigt, wissen Sie genau welche Steine der Gegner bekommt, was perfekte Endspiel-Berechnung ermöglicht.",
        nl: "Twee-stenen trek: wanneer volgen 2 stenen in zak toont, weet je precies welke stenen tegenstander krijgt, wat perfecte eindspel berekening mogelijk maakt."
      }
    },
    {
      question: {
        en: "What is a 'hot spot' on the Scrabble board?",
        es: "¿Qué es un 'punto caliente' en el tablero de Scrabble?",
        de: "Was ist ein 'Hot Spot' auf dem Scrabble-Brett?",
        nl: "Wat is een 'hot spot' op het Scrabble bord?"
      },
      options: [
        {en: "Premium squares near center", es: "Cuadrados premium cerca del centro", de: "Premium-Felder nahe der Mitte", nl: "Premium vakken bij centrum"},
        {en: "Open space allowing multiple high-scoring plays", es: "Espacio abierto que permite múltiples jugadas de alta puntuación", de: "Offener Bereich der mehrere hochbewertete Züge ermöglicht", nl: "Open ruimte die meerdere hoog-scorende zetten mogelijk maakt"},
        {en: "Contested endgame position", es: "Posición de final disputada", de: "Umkämpfte Endspiel-Position", nl: "Betwiste eindspel positie"},
        {en: "Triple-word score squares", es: "Cuadrados de puntuación de palabra triple", de: "Dreifach-Wort-Wertungs-Felder", nl: "Drievoudige-woord score vakken"}
      ],
      correct: 1,
      explanation: {
        en: "A hot spot is an open area where multiple high-scoring plays are possible for both players, often created by vowel-heavy or parallel-play setups.",
        es: "Un punto caliente es un área abierta donde múltiples jugadas de alta puntuación son posibles para ambos jugadores, a menudo creado por configuraciones con muchas vocales o jugadas paralelas.",
        de: "Ein Hot Spot ist ein offener Bereich wo mehrere hochbewertete Züge für beide Spieler möglich sind, oft durch vokalreiche oder Parallel-Spiel-Setups erstellt.",
        nl: "Een hot spot is een open gebied waar meerdere hoog-scorende zetten mogelijk zijn voor beide spelers, vaak gecreëerd door klinker-rijke of parallel-spel setups."
      }
    },
    {
      question: {
        en: "What is 'board geometry' in advanced strategy?",
        es: "¿Qué es la 'geometría del tablero' en estrategia avanzada?",
        de: "Was ist 'Brett-Geometrie' in fortgeschrittener Strategie?",
        nl: "Wat is 'bord geometrie' in geavanceerde strategie?"
      },
      options: [
        {en: "Physical board dimensions and measurements", es: "Dimensiones y medidas físicas del tablero", de: "Physische Brett-Dimensionen und Messungen", nl: "Fysieke bord afmetingen en metingen"},
        {en: "Spatial relationships between premium squares and open lanes", es: "Relaciones espaciales entre cuadrados premium y carriles abiertos", de: "Räumliche Beziehungen zwischen Premium-Feldern und offenen Bahnen", nl: "Ruimtelijke relaties tussen premium vakken en open banen"},
        {en: "Mathematical tile placement formulas", es: "Fórmulas matemáticas de colocación de fichas", de: "Mathematische Stein-Platzierungs-Formeln", nl: "Wiskundige steen plaatsing formules"},
        {en: "Triangle patterns in word formation", es: "Patrones triangulares en formación de palabras", de: "Dreiecksmuster in Wortbildung", nl: "Driehoek patronen in woord vorming"}
      ],
      correct: 1,
      explanation: {
        en: "Board geometry analyzes spatial patterns: how premium squares align, where bingo lanes exist, and how board shape influences scoring opportunities over multiple turns.",
        es: "La geometría del tablero analiza patrones espaciales: cómo se alinean los cuadrados premium, dónde existen carriles de bingo, y cómo la forma del tablero influye en oportunidades de puntuación en múltiples turnos.",
        de: "Brett-Geometrie analysiert räumliche Muster: wie Premium-Felder ausgerichtet sind, wo Bingo-Bahnen existieren, und wie Brett-Form Punktechancen über mehrere Züge beeinflusst.",
        nl: "Bord geometrie analyseert ruimtelijke patronen: hoe premium vakken uitgelijnd zijn, waar bingo banen bestaan, en hoe bord vorm score kansen over meerdere beurten beïnvloedt."
      }
    },
    {
      question: {
        en: "What is the 'seven-letter stem' study method?",
        es: "¿Qué es el método de estudio del 'tallo de siete letras'?",
        de: "Was ist die 'Sieben-Buchstaben-Stamm'-Studienmethode?",
        nl: "Wat is de 'zeven-letter stam' studie methode?"
      },
      options: [
        {en: "Learning complete 7-letter words only", es: "Aprender solo palabras completas de 7 letras", de: "Nur vollständige 7-Buchstaben-Wörter lernen", nl: "Alleen complete 7-letter woorden leren"},
        {en: "Memorizing 6-letter combinations that form many bingos", es: "Memorizar combinaciones de 6 letras que forman muchos bingos", de: "6-Buchstaben-Kombinationen auswendig lernen die viele Bingos bilden", nl: "6-letter combinaties onthouden die veel bingos vormen"},
        {en: "Studying word roots and etymology", es: "Estudiar raíces de palabras y etimología", de: "Wortwurzeln und Etymologie studieren", nl: "Woord wortels en etymologie bestuderen"},
        {en: "Learning alphabetical patterns", es: "Aprender patrones alfabéticos", de: "Alphabetische Muster lernen", nl: "Alfabetische patronen leren"}
      ],
      correct: 1,
      explanation: {
        en: "Seven-letter stems are 6-letter combos that form multiple bingos when adding different 7th letters. For example, SATIRE + (D,S,T,etc.) = many valid 7-letter words.",
        es: "Los tallos de siete letras son combinaciones de 6 letras que forman múltiples bingos al agregar diferentes 7as letras. Por ejemplo, SATIRE + (D,S,T,etc.) = muchas palabras válidas de 7 letras.",
        de: "Sieben-Buchstaben-Stämme sind 6-Buchstaben-Kombos die mehrere Bingos bilden beim Hinzufügen verschiedener 7. Buchstaben. Zum Beispiel SATIRE + (D,S,T,usw.) = viele gültige 7-Buchstaben-Wörter.",
        nl: "Zeven-letter stammen zijn 6-letter combo's die meerdere bingos vormen bij toevoegen verschillende 7e letters. Bijvoorbeeld SATIRE + (D,S,T,enz.) = veel geldige 7-letter woorden."
      }
    },
    {
      question: {
        en: "What does 'opening the board' mean strategically?",
        es: "¿Qué significa 'abrir el tablero' estratégicamente?",
        de: "Was bedeutet 'das Brett öffnen' strategisch?",
        nl: "Wat betekent 'het bord openen' strategisch?"
      },
      options: [
        {en: "Starting a new game", es: "Comenzar un nuevo juego", de: "Ein neues Spiel starten", nl: "Een nieuw spel starten"},
        {en: "Creating multiple scoring opportunities for both players", es: "Crear múltiples oportunidades de puntuación para ambos jugadores", de: "Mehrere Punktechancen für beide Spieler schaffen", nl: "Meerdere score kansen creëren voor beide spelers"},
        {en: "Revealing premium squares", es: "Revelar cuadrados premium", de: "Premium-Felder enthüllen", nl: "Premium vakken onthullen"},
        {en: "Playing horizontally vs vertically", es: "Jugar horizontalmente vs verticalmente", de: "Horizontal vs vertikal spielen", nl: "Horizontaal vs verticaal spelen"}
      ],
      correct: 1,
      explanation: {
        en: "Opening the board creates accessible premium squares and bingo lanes. Usually done when ahead in score to trade points, or behind needing opportunities to catch up.",
        es: "Abrir el tablero crea cuadrados premium accesibles y carriles de bingo. Generalmente se hace cuando se va adelante en puntuación para intercambiar puntos, o atrás necesitando oportunidades para alcanzar.",
        de: "Das Brett öffnen schafft zugängliche Premium-Felder und Bingo-Bahnen. Normalerweise gemacht wenn vorne in Punkten um Punkte zu handeln, oder hinten Möglichkeiten zum Aufholen brauchend.",
        nl: "Het bord openen creëert toegankelijke premium vakken en bingo banen. Meestal gedaan wanneer voor in score om punten te ruilen, of achter en kansen nodig hebbend om in te halen."
      }
    },
    {
      question: {
        en: "What is 'closing the board' defensively?",
        es: "¿Qué es 'cerrar el tablero' defensivamente?",
        de: "Was ist 'das Brett schließen' defensiv?",
        nl: "Wat is 'het bord sluiten' defensief?"
      },
      options: [
        {en: "Ending the game early", es: "Terminar el juego temprano", de: "Das Spiel früh beenden", nl: "Het spel vroeg beëindigen"},
        {en: "Blocking all premium squares and bingo opportunities", es: "Bloquear todos los cuadrados premium y oportunidades de bingo", de: "Alle Premium-Felder und Bingo-Möglichkeiten blockieren", nl: "Alle premium vakken en bingo kansen blokkeren"},
        {en: "Playing in corners only", es: "Jugar solo en las esquinas", de: "Nur in Ecken spielen", nl: "Alleen in hoeken spelen"},
        {en: "Using all consonants", es: "Usar todas las consonantes", de: "Alle Konsonanten verwenden", nl: "Alle medeklinkers gebruiken"}
      ],
      correct: 1,
      explanation: {
        en: "Closing the board blocks premium squares and limits bingo lanes when leading in score. This defensive strategy prevents opponent comebacks by reducing high-scoring opportunities.",
        es: "Cerrar el tablero bloquea cuadrados premium y limita carriles de bingo cuando se va adelante en puntuación. Esta estrategia defensiva previene remontadas del oponente reduciendo oportunidades de alta puntuación.",
        de: "Das Brett schließen blockiert Premium-Felder und begrenzt Bingo-Bahnen wenn in Führung. Diese Defensivstrategie verhindert Gegner-Comebacks durch Reduzierung hochbewerteter Möglichkeiten.",
        nl: "Het bord sluiten blokkeert premium vakken en beperkt bingo banen wanneer voor in score. Deze defensieve strategie voorkomt tegenstander comebacks door hoog-scorende kansen te verminderen."
      }
    },
    {
      question: {
        en: "What is the 'Q-stick' endgame situation?",
        es: "¿Qué es la situación de 'Q-stick' en el final?",
        de: "Was ist die 'Q-stick'-Endspiel-Situation?",
        nl: "Wat is de 'Q-stick' eindspel situatie?"
      },
      options: [
        {en: "Playing Q on a premium square", es: "Jugar Q en un cuadrado premium", de: "Q auf Premium-Feld spielen", nl: "Q spelen op premium vak"},
        {en: "Getting stuck with unplayable Q when bag is empty", es: "Quedarse atascado con Q injugable cuando la bolsa está vacía", de: "Mit unspielbarem Q steckenbleiben wenn Beutel leer ist", nl: "Vast komen te zitten met onspeelbaar Q wanneer zak leeg is"},
        {en: "Using Q without U successfully", es: "Usar Q sin U exitosamente", de: "Q ohne U erfolgreich verwenden", nl: "Q zonder U succesvol gebruiken"},
        {en: "Strategic Q tile placement", es: "Colocación estratégica de ficha Q", de: "Strategische Q-Stein-Platzierung", nl: "Strategische Q steen plaatsing"}
      ],
      correct: 1,
      explanation: {
        en: "Q-stick means being left with an unplayable Q tile in endgame (no U available, no Q-without-U spots). The Q's 10 points count against you, often losing close games.",
        es: "Q-stick significa quedarse con una ficha Q injugable en el final (sin U disponible, sin lugares de Q-sin-U). Los 10 puntos de Q cuentan en tu contra, a menudo perdiendo juegos cerrados.",
        de: "Q-stick bedeutet mit einem unspielbaren Q-Stein im Endspiel übrig zu bleiben (kein U verfügbar, keine Q-ohne-U-Stellen). Die 10 Punkte des Q zählen gegen Sie, verlieren oft knappe Spiele.",
        nl: "Q-stick betekent achterblijven met een onspeelbaar Q steen in eindspel (geen U beschikbaar, geen Q-zonder-U plekken). De 10 punten van Q tellen tegen je, verliezen vaak krappe spellen."
      }
    },
    {
      question: {
        en: "What is 'spread' in tournament scoring?",
        es: "¿Qué es 'spread' en puntuación de torneo?",
        de: "Was ist 'Spread' in Turnier-Wertung?",
        nl: "Wat is 'spread' in toernooi scoring?"
      },
      options: [
        {en: "Point difference between your score and opponent's", es: "Diferencia de puntos entre tu puntuación y la del oponente", de: "Punktedifferenz zwischen Ihrer Punktzahl und der des Gegners", nl: "Punten verschil tussen jouw score en die van tegenstander"},
        {en: "Distribution of tiles across board", es: "Distribución de fichas en el tablero", de: "Verteilung der Steine über das Brett", nl: "Verdeling van stenen over bord"},
        {en: "Variety of words played", es: "Variedad de palabras jugadas", de: "Vielfalt gespielter Wörter", nl: "Variëteit van gespeelde woorden"},
        {en: "Average score per turn", es: "Puntuación promedio por turno", de: "Durchschnittliche Punktzahl pro Zug", nl: "Gemiddelde score per beurt"}
      ],
      correct: 0,
      explanation: {
        en: "Spread is your total points minus opponent's points across all tournament games. Tiebreakers use spread, so maximizing winning margins and minimizing losses matters.",
        es: "El spread es tus puntos totales menos los puntos del oponente en todos los juegos del torneo. Los desempates usan spread, por lo que maximizar márgenes de victoria y minimizar pérdidas importa.",
        de: "Spread ist Ihre Gesamtpunktzahl minus Gegnerpunkte über alle Turnierspiele. Tiebreaker verwenden Spread, daher ist Maximierung der Gewinnspannen und Minimierung der Verluste wichtig.",
        nl: "Spread is jouw totale punten minus tegenstander punten over alle toernooi spellen. Tiebreakers gebruiken spread, dus maximaliseren winnende marges en minimaliseren verliezen is belangrijk."
      }
    },
    {
      question: {
        en: "What are 'alphagrams' in Scrabble study?",
        es: "¿Qué son 'alfagramas' en el estudio de Scrabble?",
        de: "Was sind 'Alphagramme' im Scrabble-Studium?",
        nl: "Wat zijn 'alfagrammen' in Scrabble studie?"
      },
      options: [
        {en: "Words containing all alphabet letters", es: "Palabras que contienen todas las letras del alfabeto", de: "Wörter die alle Alphabet-Buchstaben enthalten", nl: "Woorden die alle alfabetletters bevatten"},
        {en: "Letters arranged alphabetically to study anagrams", es: "Letras ordenadas alfabéticamente para estudiar anagramas", de: "Alphabetisch angeordnete Buchstaben zum Studieren von Anagrammen", nl: "Letters alfabetisch gerangschikt om anagrammen te bestuderen"},
        {en: "Greek letter words valid in Scrabble", es: "Palabras de letras griegas válidas en Scrabble", de: "Griechische Buchstabenwörter gültig im Scrabble", nl: "Griekse letter woorden geldig in Scrabble"},
        {en: "First words in dictionary", es: "Primeras palabras en diccionario", de: "Erste Wörter im Wörterbuch", nl: "Eerste woorden in woordenboek"}
      ],
      correct: 1,
      explanation: {
        en: "Alphagrams arrange letters alphabetically to find all anagrams. For example, AEINRT = RATINE, RETAIN, RETINA. This method efficiently organizes word study by letter combinations.",
        es: "Los alfagramas organizan letras alfabéticamente para encontrar todos los anagramas. Por ejemplo, AEINRT = RATINE, RETAIN, RETINA. Este método organiza eficientemente el estudio de palabras por combinaciones de letras.",
        de: "Alphagramme ordnen Buchstaben alphabetisch um alle Anagramme zu finden. Zum Beispiel AEINRT = RATINE, RETAIN, RETINA. Diese Methode organisiert Wortstudium effizient nach Buchstabenkombinationen.",
        nl: "Alfagrammen rangschikken letters alfabetisch om alle anagrammen te vinden. Bijvoorbeeld AEINRT = RATINE, RETAIN, RETINA. Deze methode organiseert woord studie efficiënt per letter combinaties."
      }
    },
    {
      question: {
        en: "What is 'equity' in Scrabble analysis?",
        es: "¿Qué es 'equidad' en análisis de Scrabble?",
        de: "Was ist 'Equity' in Scrabble-Analyse?",
        nl: "Wat is 'equity' in Scrabble analyse?"
      },
      options: [
        {en: "Fair play and sportsmanship", es: "Juego limpio y deportividad", de: "Faires Spiel und Sportlichkeit", nl: "Fair play en sportiviteit"},
        {en: "Expected game value of a play including future turns", es: "Valor de juego esperado de una jugada incluyendo turnos futuros", de: "Erwarteter Spielwert eines Zugs einschließlich zukünftiger Züge", nl: "Verwachte spelwaarde van een zet inclusief toekomstige beurten"},
        {en: "Equal point distribution", es: "Distribución equitativa de puntos", de: "Gleiche Punkteverteilung", nl: "Gelijke punten verdeling"},
        {en: "Balanced rack composition", es: "Composición equilibrada del rack", de: "Ausgewogene Rack-Zusammensetzung", nl: "Gebalanceerde rek samenstelling"}
      ],
      correct: 1,
      explanation: {
        en: "Equity measures expected game value: immediate points + future scoring potential from rack leave. A 30-point play with great leave may have higher equity than a 40-point play with terrible leave.",
        es: "La equidad mide el valor de juego esperado: puntos inmediatos + potencial de puntuación futura del leave del rack. Una jugada de 30 puntos con gran leave puede tener mayor equidad que una jugada de 40 puntos con terrible leave.",
        de: "Equity misst erwarteten Spielwert: sofortige Punkte + zukünftiges Punktepotential aus Rack-Leave. Ein 30-Punkte-Zug mit großartigem Leave kann höhere Equity haben als ein 40-Punkte-Zug mit schrecklichem Leave.",
        nl: "Equity meet verwachte spelwaarde: directe punten + toekomstig scorepotentieel van rek leave. Een 30-punten zet met geweldige leave kan hogere equity hebben dan een 40-punten zet met vreselijke leave."
      }
    },
    {
      question: {
        en: "What is a 'bingo stem' in competitive play?",
        es: "¿Qué es un 'tallo de bingo' en juego competitivo?",
        de: "Was ist ein 'Bingo-Stamm' im Wettkampfspiel?",
        nl: "Wat is een 'bingo stam' in competitief spel?"
      },
      options: [
        {en: "First word played in game", es: "Primera palabra jugada en el juego", de: "Erstes Wort im Spiel gespielt", nl: "Eerste woord gespeeld in spel"},
        {en: "Common letter combination that forms multiple 7-8 letter words", es: "Combinación común de letras que forma múltiples palabras de 7-8 letras", de: "Häufige Buchstabenkombination die mehrere 7-8-Buchstaben-Wörter bildet", nl: "Veelvoorkomende letter combinatie die meerdere 7-8 letter woorden vormt"},
        {en: "Root word etymology", es: "Etimología de raíz de palabra", de: "Wortwurzel-Etymologie", nl: "Woord wortel etymologie"},
        {en: "Tournament seeding system", es: "Sistema de siembra de torneos", de: "Turnier-Setzlistensystem", nl: "Toernooi plaatsings systeem"}
      ],
      correct: 1,
      explanation: {
        en: "Bingo stems are high-probability letter groups like SATIRE, RETINA, ESTRIN that combine with many tiles to form 7-8 letter words. Top players memorize thousands of stems.",
        es: "Los tallos de bingo son grupos de letras de alta probabilidad como SATIRE, RETINA, ESTRIN que se combinan con muchas fichas para formar palabras de 7-8 letras. Los mejores jugadores memorizan miles de tallos.",
        de: "Bingo-Stämme sind hochwahrscheinliche Buchstabengruppen wie SATIRE, RETINA, ESTRIN die sich mit vielen Steinen zu 7-8-Buchstaben-Wörtern kombinieren. Top-Spieler merken sich Tausende von Stämmen.",
        nl: "Bingo stammen zijn hoge-waarschijnlijkheid letter groepen zoals SATIRE, RETINA, ESTRIN die combineren met veel stenen om 7-8 letter woorden te vormen. Top spelers onthouden duizenden stammen."
      }
    },
    {
      question: {
        en: "What is 'simulation' in Scrabble software analysis?",
        es: "¿Qué es 'simulación' en análisis de software de Scrabble?",
        de: "Was ist 'Simulation' in Scrabble-Software-Analyse?",
        nl: "Wat is 'simulatie' in Scrabble software analyse?"
      },
      options: [
        {en: "Playing against AI opponents", es: "Jugar contra oponentes de IA", de: "Gegen KI-Gegner spielen", nl: "Spelen tegen AI tegenstanders"},
        {en: "Running thousands of possible game continuations to evaluate plays", es: "Ejecutar miles de posibles continuaciones de juego para evaluar jugadas", de: "Tausende mögliche Spielfortsetzungen ausführen um Züge zu bewerten", nl: "Duizenden mogelijke spel voortzettingen draaien om zetten te evalueren"},
        {en: "Virtual tournament practice", es: "Práctica de torneo virtual", de: "Virtuelle Turnierpraxis", nl: "Virtuele toernooi oefening"},
        {en: "Computer graphics of board positions", es: "Gráficos por computadora de posiciones del tablero", de: "Computergrafiken von Brett-Positionen", nl: "Computer graphics van bord posities"}
      ],
      correct: 1,
      explanation: {
        en: "Simulation runs thousands of random tile draws and subsequent plays to statistically measure which move gives best long-term winning probability, not just immediate score.",
        es: "La simulación ejecuta miles de sorteos de fichas aleatorios y jugadas posteriores para medir estadísticamente qué movimiento da la mejor probabilidad de victoria a largo plazo, no solo puntuación inmediata.",
        de: "Simulation führt Tausende zufällige Stein-Ziehungen und nachfolgende Züge aus um statistisch zu messen welcher Zug beste langfristige Gewinnwahrscheinlichkeit gibt, nicht nur sofortige Punktzahl.",
        nl: "Simulatie draait duizenden willekeurige steen trekkingen en daaropvolgende zetten om statistisch te meten welke zet beste lange-termijn winst kans geeft, niet alleen directe score."
      }
    },
    {
      question: {
        en: "What is 'tile tracking' in expert play?",
        es: "¿Qué es el 'seguimiento de fichas' en juego experto?",
        de: "Was ist 'Stein-Verfolgung' im Expertenspiel?",
        nl: "Wat is 'steen volgen' in expert spel?"
      },
      options: [
        {en: "Recording all tiles played to deduce unseen tiles", es: "Registrar todas las fichas jugadas para deducir fichas no vistas", de: "Alle gespielten Steine aufzeichnen um ungesehene Steine zu deduzieren", nl: "Alle gespeelde stenen opnemen om ongeziene stenen af te leiden"},
        {en: "Counting points per tile", es: "Contar puntos por ficha", de: "Punkte pro Stein zählen", nl: "Punten per steen tellen"},
        {en: "Following opponent's eye movements", es: "Seguir movimientos oculares del oponente", de: "Augen-Bewegungen des Gegners folgen", nl: "Oogbewegingen van tegenstander volgen"},
        {en: "Organizing tiles on rack efficiently", es: "Organizar fichas en rack eficientemente", de: "Steine auf Rack effizient organisieren", nl: "Stenen op rek efficiënt organiseren"}
      ],
      correct: 0,
      explanation: {
        en: "Tile tracking records every played tile to calculate exactly which tiles remain unseen (in bag + opponent's rack). This enables precise probability calculations and endgame certainty.",
        es: "El seguimiento de fichas registra cada ficha jugada para calcular exactamente qué fichas permanecen sin ver (en bolsa + rack del oponente). Esto permite cálculos de probabilidad precisos y certeza en el final.",
        de: "Stein-Verfolgung zeichnet jeden gespielten Stein auf um genau zu berechnen welche Steine ungesehen bleiben (in Beutel + Gegner-Rack). Dies ermöglicht präzise Wahrscheinlichkeits-Berechnungen und Endspiel-Gewissheit.",
        nl: "Steen volgen neemt elke gespeelde steen op om precies te berekenen welke stenen ongezien blijven (in zak + tegenstander rek). Dit maakt precieze waarschijnlijkheids berekeningen en eindspel zekerheid mogelijk."
      }
    },
    {
      question: {
        en: "What is a 'power tile' in rack management?",
        es: "¿Qué es una 'ficha de poder' en gestión de rack?",
        de: "Was ist ein 'Power-Stein' im Rack-Management?",
        nl: "Wat is een 'power steen' in rek management?"
      },
      options: [
        {en: "Any tile worth 8-10 points", es: "Cualquier ficha que valga 8-10 puntos", de: "Jeder Stein wert 8-10 Punkte", nl: "Elke steen waard 8-10 punten"},
        {en: "Blank tiles only", es: "Solo fichas en blanco", de: "Nur Blanko-Steine", nl: "Alleen blanco stenen"},
        {en: "High-value tiles (J,Q,X,Z) and blanks enabling bingos", es: "Fichas de alto valor (J,Q,X,Z) y blancos que permiten bingos", de: "Hochwertige Steine (J,Q,X,Z) und Blanks die Bingos ermöglichen", nl: "Hoge-waarde stenen (J,Q,X,Z) en blanco's die bingos mogelijk maken"},
        {en: "Most frequently drawn tiles", es: "Fichas más frecuentemente sacadas", de: "Am häufigsten gezogene Steine", nl: "Meest frequent getrokken stenen"}
      ],
      correct: 2,
      explanation: {
        en: "Power tiles (blanks, S, J, Q, X, Z) offer highest scoring potential or flexibility. Managing when to play vs. hold them is crucial for maximizing game score.",
        es: "Las fichas de poder (blancos, S, J, Q, X, Z) ofrecen mayor potencial de puntuación o flexibilidad. Gestionar cuándo jugarlas vs. retenerlas es crucial para maximizar la puntuación del juego.",
        de: "Power-Steine (Blanks, S, J, Q, X, Z) bieten höchstes Punktepotential oder Flexibilität. Das Management wann sie zu spielen vs. zu halten ist entscheidend zur Maximierung der Spiel-Punktzahl.",
        nl: "Power stenen (blanco's, S, J, Q, X, Z) bieden hoogste scorepotentieel of flexibiliteit. Beheren wanneer ze te spelen vs. houden is cruciaal voor maximaliseren van spel score."
      }
    },
    {
      question: {
        en: "What is a 'phoney challenge' strategy?",
        es: "¿Qué es una estrategia de 'desafío falso'?",
        de: "Was ist eine 'Phoney-Challenge'-Strategie?",
        nl: "Wat is een 'phoney uitdaging' strategie?"
      },
      options: [
        {en: "Never challenging opponent's words", es: "Nunca desafiar palabras del oponente", de: "Niemals Gegner-Wörter herausfordern", nl: "Nooit woorden van tegenstander uitdagen"},
        {en: "Intentionally playing invalid words hoping unchallenged", es: "Jugar intencionalmente palabras inválidas esperando no ser desafiado", de: "Absichtlich ungültige Wörter spielen in Hoffnung nicht herausgefordert zu werden", nl: "Opzettelijk ongeldige woorden spelen hopend niet uitgedaagd"},
        {en: "Challenging all opponent words automatically", es: "Desafiar todas las palabras del oponente automáticamente", de: "Alle Gegner-Wörter automatisch herausfordern", nl: "Alle tegenstander woorden automatisch uitdagen"},
        {en: "Using fake dictionary entries", es: "Usar entradas falsas del diccionario", de: "Gefälschte Wörterbuch-Einträge verwenden", nl: "Nep woordenboek vermeldingen gebruiken"}
      ],
      correct: 1,
      explanation: {
        en: "Phoney challenge strategy deliberately plays questionable/invalid words betting opponent won't challenge. Risk: if challenged, you lose turn. Reward: if unchallenged, word scores.",
        es: "La estrategia de desafío falso juega deliberadamente palabras cuestionables/inválidas apostando que el oponente no desafiará. Riesgo: si es desafiado, pierdes turno. Recompensa: si no es desafiado, la palabra puntúa.",
        de: "Phoney-Challenge-Strategie spielt absichtlich fragwürdige/ungültige Wörter wettend dass Gegner nicht herausfordert. Risiko: wenn herausgefordert, verlieren Sie Zug. Belohnung: wenn nicht herausgefordert, Wort zählt.",
        nl: "Phoney uitdaging strategie speelt opzettelijk twijfelachtige/ongeldige woorden weddend dat tegenstander niet uitdaagt. Risico: indien uitgedaagd, verlies je beurt. Beloning: indien niet uitgedaagd, woord scoort."
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
