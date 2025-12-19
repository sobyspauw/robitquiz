// Quiz Template - Level 5: Bord spelletjes - Scrabble
(function() {
  const level5 = {
  name: {
    en: "Scrabble",
    es: "Scrabble",
    de: "Scrabble",
    nl: "Scrabble"
  },
  questions: [
    {
      question: {
        en: "What is a 'triple-triple' in Scrabble?",
        es: "¿Qué es un 'triple-triple' en Scrabble?",
        de: "Was ist ein 'Tripel-Tripel' im Scrabble?",
        nl: "Wat is een 'triple-triple' in Scrabble?"
      },
      options: [
        {
          en: "Using three blanks in one word",
          es: "Usar tres blancos en una palabra",
          de: "Drei Blankos in einem Wort verwenden",
          nl: "Drie blancos gebruiken in één woord"
        },
        {
          en: "Word covering two triple word scores",
          es: "Palabra que cubre dos puntuaciones de palabra triple",
          de: "Wort das zwei Dreifach-Wortwerte abdeckt",
          nl: "Woord dat twee driedubbele woordwaarden dekt"
        },
        {
          en: "Playing three words simultaneously",
          es: "Jugar tres palabras simultáneamente",
          de: "Drei Wörter gleichzeitig spielen",
          nl: "Drie woorden tegelijkertijd spelen"
        },
        {
          en: "Scoring exactly 333 points",
          es: "Anotar exactamente 333 puntos",
          de: "Genau 333 Punkte erzielen",
          nl: "Precies 333 punten scoren"
        }
      ],
      correct: 1,
      explanation: {
        en: "A triple-triple is a word played across two triple word score squares, multiplying the word score by 9 (3×3).",
        es: "Un triple-triple es una palabra jugada a través de dos cuadrados de puntuación de palabra triple, multiplicando la puntuación de la palabra por 9 (3×3).",
        de: "Ein Tripel-Tripel ist ein Wort das über zwei Dreifach-Wortwert-Felder gespielt wird, wobei die Wort-Punktzahl mit 9 (3×3) multipliziert wird.",
        nl: "Een triple-triple is een woord gespeeld over twee driedubbele woordwaarde-vakken, waarbij de woordscore met 9 (3×3) wordt vermenigvuldigd."
      }
    },
    {
      question: {
        en: "What is 'equity' in Scrabble analysis?",
        es: "¿Qué es 'equidad' en análisis de Scrabble?",
        de: "Was ist 'Eigenkapital' in der Scrabble-Analyse?",
        nl: "Wat is 'equity' in Scrabble-analyse?"
      },
      options: [
        {
          en: "Equal scores between players",
          es: "Puntuaciones iguales entre jugadores",
          de: "Gleiche Punktzahlen zwischen Spielern",
          nl: "Gelijke scores tussen spelers"
        },
        {
          en: "Expected value of a play including future turns",
          es: "Valor esperado de una jugada incluyendo turnos futuros",
          de: "Erwartungswert eines Zugs einschließlich zukünftiger Züge",
          nl: "Verwachte waarde van een zet inclusief toekomstige beurten"
        },
        {
          en: "Point difference in game",
          es: "Diferencia de puntos en el juego",
          de: "Punktdifferenz im Spiel",
          nl: "Puntenverschil in spel"
        },
        {
          en: "Fair tile distribution",
          es: "Distribución justa de fichas",
          de: "Faire Steinverteilung",
          nl: "Eerlijke stenen verdeling"
        }
      ],
      correct: 1,
      explanation: {
        en: "Equity is the expected value of a move considering both immediate points and future potential (rack leave, board position).",
        es: "La equidad es el valor esperado de un movimiento considerando tanto los puntos inmediatos como el potencial futuro (fichas restantes, posición del tablero).",
        de: "Eigenkapital ist der Erwartungswert eines Zugs unter Berücksichtigung sowohl der sofortigen Punkte als auch des zukünftigen Potenzials (Rack-Überlassen, Brett-Position).",
        nl: "Equity is de verwachte waarde van een zet rekening houdend met zowel directe punten als toekomstig potentieel (rek overgelaten, bordpositie)."
      }
    },
    {
      question: {
        en: "Which word list is used for international English Scrabble outside North America?",
        es: "¿Qué lista de palabras se usa para Scrabble en inglés internacional fuera de América del Norte?",
        de: "Welche Wortliste wird für internationales englisches Scrabble außerhalb Nordamerikas verwendet?",
        nl: "Welke woordenlijst wordt gebruikt voor internationaal Engels Scrabble buiten Noord-Amerika?"
      },
      options: [
        {
          en: "TWL (Tournament Word List)",
          es: "TWL (Lista de Palabras de Torneo)",
          de: "TWL (Turnier-Wortliste)",
          nl: "TWL (Toernooi Woordenlijst)"
        },
        {
          en: "CSW (Collins Scrabble Words)",
          es: "CSW (Palabras de Scrabble Collins)",
          de: "CSW (Collins Scrabble Wörter)",
          nl: "CSW (Collins Scrabble Woorden)"
        },
        {
          en: "OWL (Official Word List)",
          es: "OWL (Lista Oficial de Palabras)",
          de: "OWL (Offizielle Wortliste)",
          nl: "OWL (Officiële Woordenlijst)"
        },
        {
          en: "SOWPODS",
          es: "SOWPODS",
          de: "SOWPODS",
          nl: "SOWPODS"
        }
      ],
      correct: 1,
      explanation: {
        en: "CSW (Collins Scrabble Words) is used internationally. It's more comprehensive than TWL, containing about 279,000 words vs TWL's 187,000.",
        es: "CSW (Palabras de Scrabble Collins) se usa internacionalmente. Es más completo que TWL, conteniendo alrededor de 279,000 palabras vs 187,000 de TWL.",
        de: "CSW (Collins Scrabble Wörter) wird international verwendet. Es ist umfassender als TWL und enthält etwa 279,000 Wörter gegenüber 187,000 von TWL.",
        nl: "CSW (Collins Scrabble Woorden) wordt internationaal gebruikt. Het is uitgebreider dan TWL, met ongeveer 279,000 woorden versus 187,000 van TWL."
      }
    },
    {
      question: {
        en: "What does 'pre-endgame' strategy involve?",
        es: "¿Qué implica la estrategia de 'pre-final'?",
        de: "Was beinhaltet die 'Vor-Endspiel' Strategie?",
        nl: "Wat houdt 'pre-eindspel' strategie in?"
      },
      options: [
        {
          en: "Planning first moves",
          es: "Planificar primeros movimientos",
          de: "Erste Züge planen",
          nl: "Eerste zetten plannen"
        },
        {
          en: "Managing final tiles when bag is nearly empty",
          es: "Gestionar fichas finales cuando bolsa está casi vacía",
          de: "Verwaltung der letzten Steine wenn der Beutel fast leer ist",
          nl: "Beheren van laatste stenen wanneer zak bijna leeg is"
        },
        {
          en: "Mid-game positioning",
          es: "Posicionamiento de medio juego",
          de: "Mittelspiel-Positionierung",
          nl: "Mid-game positionering"
        },
        {
          en: "Opening board setup",
          es: "Configuración de apertura del tablero",
          de: "Eröffnungs-Brett-Aufbau",
          nl: "Openingsbord opzet"
        }
      ],
      correct: 1,
      explanation: {
        en: "Pre-endgame is when 7 or fewer tiles remain unseen. Players track tiles to calculate optimal plays and prevent opponent opportunities.",
        es: "El pre-final es cuando quedan 7 o menos fichas sin ver. Los jugadores rastrean fichas para calcular jugadas óptimas y prevenir oportunidades del oponente.",
        de: "Vor-Endspiel ist wenn 7 oder weniger Steine ungesehen bleiben. Spieler verfolgen Steine um optimale Züge zu berechnen und Gegnermöglichkeiten zu verhindern.",
        nl: "Pre-eindspel is wanneer 7 of minder stenen ongezien blijven. Spelers volgen stenen om optimale zetten te berekenen en tegenstander kansen te voorkomen."
      }
    },
    {
      question: {
        en: "What are the 'JQXZ' tiles commonly called?",
        es: "¿Cómo se llaman comúnmente las fichas 'JQXZ'?",
        de: "Wie werden die 'JQXZ' Steine häufig genannt?",
        nl: "Hoe worden de 'JQXZ' stenen vaak genoemd?"
      },
      options: [
        {
          en: "Power tiles",
          es: "Fichas de poder",
          de: "Power-Steine",
          nl: "Power stenen"
        },
        {
          en: "Big four",
          es: "Los cuatro grandes",
          de: "Große Vier",
          nl: "Grote vier"
        },
        {
          en: "Premium letters",
          es: "Letras premium",
          de: "Premium-Buchstaben",
          nl: "Premium letters"
        },
        {
          en: "Bonus tiles",
          es: "Fichas de bonificación",
          de: "Bonus-Steine",
          nl: "Bonus stenen"
        }
      ],
      correct: 1,
      explanation: {
        en: "J, Q, X, and Z are called the 'big four' - the highest-value consonants worth 8-10 points each, requiring strategic placement.",
        es: "J, Q, X y Z se llaman 'los cuatro grandes' - las consonantes de mayor valor que valen 8-10 puntos cada una, requiriendo colocación estratégica.",
        de: "J, Q, X und Z werden 'Große Vier' genannt - die wertvollsten Konsonanten mit jeweils 8-10 Punkten, die strategische Platzierung erfordern.",
        nl: "J, Q, X en Z worden de 'grote vier' genoemd - de hoogst gewaardeerde medeklinkers ter waarde van elk 8-10 punten, die strategische plaatsing vereisen."
      }
    },
    {
      question: {
        en: "What is a 'phoneyvalid exchange' in tournament play?",
        es: "¿Qué es un 'intercambio de falsa validez' en juego de torneo?",
        de: "Was ist ein 'Phoney-Gültig-Austausch' im Turnierspiel?",
        nl: "Wat is een 'phoney-geldig ruil' in toernooispel?"
      },
      options: [
        {
          en: "Trading tiles illegally",
          es: "Intercambiar fichas ilegalmente",
          de: "Steine illegal tauschen",
          nl: "Stenen illegaal ruilen"
        },
        {
          en: "Playing invalid word hoping opponent won't challenge",
          es: "Jugar palabra inválida esperando que oponente no desafíe",
          de: "Ungültiges Wort spielen in der Hoffnung Gegner fechtet nicht an",
          nl: "Ongeldig woord spelen hopend dat tegenstander niet uitdaagt"
        },
        {
          en: "Challenging valid words",
          es: "Desafiar palabras válidas",
          de: "Gültige Wörter anfechten",
          nl: "Geldige woorden uitdagen"
        },
        {
          en: "Exchanging phonetically similar tiles",
          es: "Intercambiar fichas fonéticamente similares",
          de: "Phonetisch ähnliche Steine austauschen",
          nl: "Fonetisch vergelijkbare stenen ruilen"
        }
      ],
      correct: 1,
      explanation: {
        en: "A phoney is an invalid word played strategically, hoping the opponent doesn't challenge. Common in high-level play as psychological tactic.",
        es: "Un phoney es una palabra inválida jugada estratégicamente, esperando que el oponente no desafíe. Común en juego de alto nivel como táctica psicológica.",
        de: "Ein Phoney ist ein ungültiges Wort das strategisch gespielt wird, in der Hoffnung der Gegner fechtet nicht an. Häufig im hochrangigen Spiel als psychologische Taktik.",
        nl: "Een phoney is een ongeldig woord strategisch gespeeld, hopend dat de tegenstander niet uitdaagt. Gebruikelijk in hoogwaardig spel als psychologische tactiek."
      }
    },
    {
      question: {
        en: "What is the 'AEROLITE' phenomenon in bingo words?",
        es: "¿Qué es el fenómeno 'AEROLITE' en palabras de bingo?",
        de: "Was ist das 'AEROLITE' Phänomen bei Bingo-Wörtern?",
        nl: "Wat is het 'AEROLITE' fenomeen in bingo woorden?"
      },
      options: [
        {
          en: "Rare 8-letter bingo",
          es: "Bingo raro de 8 letras",
          de: "Seltenes 8-Buchstaben-Bingo",
          nl: "Zeldzame 8-letter bingo"
        },
        {
          en: "Common 7-letter stem with 8 anagrams",
          es: "Tallo común de 7 letras con 8 anagramas",
          de: "Häufiger 7-Buchstaben-Stamm mit 8 Anagrammen",
          nl: "Veelvoorkomende 7-letter stam met 8 anagrammen"
        },
        {
          en: "Space-themed word",
          es: "Palabra con tema espacial",
          de: "Weltraum-bezogenes Wort",
          nl: "Ruimte-thema woord"
        },
        {
          en: "High-scoring geology term",
          es: "Término geológico de alta puntuación",
          de: "Hoch punktender geologischer Begriff",
          nl: "Hoog scorende geologische term"
        }
      ],
      correct: 1,
      explanation: {
        en: "AEROLITE is a valuable 7-letter combination with 8 valid anagrams (including ELATERIA, RETALIATE without one letter), making it a powerful bingo stem to memorize.",
        es: "AEROLITE es una combinación valiosa de 7 letras con 8 anagramas válidos (incluyendo ELATERIA, RETALIATE sin una letra), convirtiéndola en un poderoso tallo de bingo para memorizar.",
        de: "AEROLITE ist eine wertvolle 7-Buchstaben-Kombination mit 8 gültigen Anagrammen (einschließlich ELATERIA, RETALIATE ohne einen Buchstaben), was es zu einem mächtigen Bingo-Stamm zum Auswendiglernen macht.",
        nl: "AEROLITE is een waardevolle 7-letter combinatie met 8 geldige anagrammen (inclusief ELATERIA, RETALIATE zonder één letter), waardoor het een krachtige bingo-stam is om te onthouden."
      }
    },
    {
      question: {
        en: "How many total points are all tiles worth in Scrabble?",
        es: "¿Cuántos puntos valen en total todas las fichas en Scrabble?",
        de: "Wie viele Punkte sind alle Steine im Scrabble insgesamt wert?",
        nl: "Hoeveel punten zijn alle stenen in totaal waard in Scrabble?"
      },
      options: [
        {
          en: "187 points",
          es: "187 puntos",
          de: "187 Punkte",
          nl: "187 punten"
        },
        {
          en: "225 points",
          es: "225 puntos",
          de: "225 Punkte",
          nl: "225 punten"
        },
        {
          en: "255 points",
          es: "255 puntos",
          de: "255 Punkte",
          nl: "255 punten"
        },
        {
          en: "300 points",
          es: "300 puntos",
          de: "300 Punkte",
          nl: "300 punten"
        }
      ],
      correct: 0,
      explanation: {
        en: "All 100 tiles in Scrabble (excluding blanks which are 0) sum to exactly 187 points. This is useful for tracking and endgame calculations.",
        es: "Las 100 fichas en Scrabble (excluyendo blancos que son 0) suman exactamente 187 puntos. Esto es útil para rastrear y cálculos de final de juego.",
        de: "Alle 100 Steine im Scrabble (ohne Blankos die 0 sind) summieren sich auf genau 187 Punkte. Dies ist nützlich für Verfolgung und Endspiel-Berechnungen.",
        nl: "Alle 100 stenen in Scrabble (exclusief blancos die 0 zijn) tellen op tot precies 187 punten. Dit is nuttig voor volgen en eindspel berekeningen."
      }
    },
    {
      question: {
        en: "What is 'spot recognition' in expert Scrabble?",
        es: "¿Qué es 'reconocimiento de lugar' en Scrabble experto?",
        de: "Was ist 'Fleck-Erkennung' im Experten-Scrabble?",
        nl: "Wat is 'spot herkenning' in expert Scrabble?"
      },
      options: [
        {
          en: "Finding premium squares",
          es: "Encontrar cuadrados premium",
          de: "Premium-Felder finden",
          nl: "Premium vakken vinden"
        },
        {
          en: "Quickly identifying bingo opportunities on board",
          es: "Identificar rápidamente oportunidades de bingo en tablero",
          de: "Schnelles Erkennen von Bingo-Möglichkeiten auf dem Brett",
          nl: "Snel bingo-kansen op bord identificeren"
        },
        {
          en: "Recognizing opponent's tiles",
          es: "Reconocer fichas del oponente",
          de: "Steine des Gegners erkennen",
          nl: "Stenen van tegenstander herkennen"
        },
        {
          en: "Identifying marked tiles",
          es: "Identificar fichas marcadas",
          de: "Markierte Steine identifizieren",
          nl: "Gemarkeerde stenen identificeren"
        }
      ],
      correct: 1,
      explanation: {
        en: "Spot recognition is the skill of quickly scanning the board to identify potential bingo plays, hooks, and high-scoring positions without extensive calculation.",
        es: "El reconocimiento de lugar es la habilidad de escanear rápidamente el tablero para identificar posibles jugadas de bingo, ganchos y posiciones de alta puntuación sin cálculo extenso.",
        de: "Fleck-Erkennung ist die Fähigkeit das Brett schnell zu scannen um potenzielle Bingo-Züge, Haken und hoch punktende Positionen ohne umfangreiche Berechnung zu identifizieren.",
        nl: "Spot herkenning is de vaardigheid om het bord snel te scannen om potentiële bingo-zetten, haken en hoog scorende posities te identificeren zonder uitgebreide berekening."
      }
    },
    {
      question: {
        en: "What does 'TISANE' mean in Scrabble word study?",
        es: "¿Qué significa 'TISANE' en estudio de palabras de Scrabble?",
        de: "Was bedeutet 'TISANE' im Scrabble-Wortstudium?",
        nl: "Wat betekent 'TISANE' in Scrabble woorden studie?"
      },
      options: [
        {
          en: "Tea made from herbs",
          es: "Té hecho de hierbas",
          de: "Tee aus Kräutern",
          nl: "Thee gemaakt van kruiden"
        },
        {
          en: "Important 6-letter bingo stem",
          es: "Importante tallo de bingo de 6 letras",
          de: "Wichtiger 6-Buchstaben-Bingo-Stamm",
          nl: "Belangrijke 6-letter bingo stam"
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
        en: "TISANE (herbal tea) is both a valid word AND a crucial bingo stem. SATINE is its most common 7-letter combination, with multiple anagrams.",
        es: "TISANE (té de hierbas) es tanto una palabra válida COMO un tallo de bingo crucial. SATINE es su combinación más común de 7 letras, con múltiples anagramas.",
        de: "TISANE (Kräutertee) ist sowohl ein gültiges Wort ALS AUCH ein entscheidender Bingo-Stamm. SATINE ist seine häufigste 7-Buchstaben-Kombination mit mehreren Anagrammen.",
        nl: "TISANE (kruidenthee) is zowel een geldig woord ALS een cruciale bingo-stam. SATINE is zijn meest voorkomende 7-letter combinatie, met meerdere anagrammen."
      }
    },
    {
      question: {
        en: "What is 'rack management' in competitive play?",
        es: "¿Qué es 'gestión del soporte' en juego competitivo?",
        de: "Was ist 'Rack-Verwaltung' im kompetitiven Spiel?",
        nl: "Wat is 'rek beheer' in competitief spel?"
      },
      options: [
        {
          en: "Organizing tiles alphabetically",
          es: "Organizar fichas alfabéticamente",
          de: "Steine alphabetisch organisieren",
          nl: "Stenen alfabetisch organiseren"
        },
        {
          en: "Strategic play to maintain balanced, bingo-prone tiles",
          es: "Juego estratégico para mantener fichas equilibradas propensas a bingo",
          de: "Strategisches Spiel um ausgewogene bingo-anfällige Steine zu erhalten",
          nl: "Strategisch spel om gebalanceerde, bingo-gevoelige stenen te behouden"
        },
        {
          en: "Physical tile holder setup",
          es: "Configuración física del soporte de fichas",
          de: "Physischer Steinhalter-Aufbau",
          nl: "Fysieke steenhouder opzet"
        },
        {
          en: "Counting opponent's tiles",
          es: "Contar fichas del oponente",
          de: "Steine des Gegners zählen",
          nl: "Stenen van tegenstander tellen"
        }
      ],
      correct: 1,
      explanation: {
        en: "Rack management means making plays that balance immediate scoring with maintaining a strong rack for future bingos (good vowel/consonant ratio, avoiding duplication).",
        es: "La gestión del soporte significa hacer jugadas que equilibren la puntuación inmediata con mantener un soporte fuerte para futuros bingos (buena relación vocal/consonante, evitando duplicación).",
        de: "Rack-Verwaltung bedeutet Züge zu machen die sofortige Punktzahl mit der Aufrechterhaltung eines starken Racks für zukünftige Bingos ausbalancieren (gutes Vokal/Konsonanten-Verhältnis, Vermeidung von Duplikation).",
        nl: "Rek beheer betekent zetten maken die directe scores balanceren met het behouden van een sterk rek voor toekomstige bingo's (goede klinker/medeklinker verhouding, het vermijden van duplicatie)."
      }
    },
    {
      question: {
        en: "How many 3-letter words can be formed with just Q and no U?",
        es: "¿Cuántas palabras de 3 letras se pueden formar con solo Q y sin U?",
        de: "Wie viele 3-Buchstaben-Wörter können nur mit Q und ohne U gebildet werden?",
        nl: "Hoeveel 3-letterwoorden kunnen worden gevormd met alleen Q en geen U?"
      },
      options: [
        {
          en: "None",
          es: "Ninguna",
          de: "Keine",
          nl: "Geen"
        },
        {
          en: "1-2 words",
          es: "1-2 palabras",
          de: "1-2 Wörter",
          nl: "1-2 woorden"
        },
        {
          en: "3-5 words",
          es: "3-5 palabras",
          de: "3-5 Wörter",
          nl: "3-5 woorden"
        },
        {
          en: "Over 10 words",
          es: "Más de 10 palabras",
          de: "Über 10 Wörter",
          nl: "Meer dan 10 woorden"
        }
      ],
      correct: 2,
      explanation: {
        en: "There are about 5 valid 3-letter Q-without-U words in tournament Scrabble, including QAT (evergreen shrub), QIS (plural of QI), and QOPH variant spellings.",
        es: "Hay alrededor de 5 palabras válidas de 3 letras de Q-sin-U en Scrabble de torneo, incluyendo QAT (arbusto perenne), QIS (plural de QI) y variantes de ortografía de QOPH.",
        de: "Es gibt etwa 5 gültige 3-Buchstaben Q-ohne-U Wörter im Turnier-Scrabble, einschließlich QAT (immergrüner Strauch), QIS (Plural von QI) und QOPH-Varianten-Schreibweisen.",
        nl: "Er zijn ongeveer 5 geldige 3-letter Q-zonder-U woorden in toernooi Scrabble, inclusief QAT (groenblijvende struik), QIS (meervoud van QI) en QOPH variant spellingen."
      }
    },
    {
      question: {
        en: "What is the 'RETINA' bingo stem?",
        es: "¿Qué es el tallo de bingo 'RETINA'?",
        de: "Was ist der 'RETINA' Bingo-Stamm?",
        nl: "Wat is de 'RETINA' bingo stam?"
      },
      options: [
        {
          en: "Eye-related medical words",
          es: "Palabras médicas relacionadas con ojos",
          de: "Augen-bezogene medizinische Wörter",
          nl: "Oog-gerelateerde medische woorden"
        },
        {
          en: "Prolific 6-letter stem forming many 7-letter words",
          es: "Tallo prolífico de 6 letras formando muchas palabras de 7 letras",
          de: "Fruchtbarer 6-Buchstaben-Stamm der viele 7-Buchstaben-Wörter bildet",
          nl: "Vruchtbare 6-letter stam die veel 7-letterwoorden vormt"
        },
        {
          en: "High-value biology term",
          es: "Término biológico de alto valor",
          de: "Hochw ertiger biologischer Begriff",
          nl: "Hoge waarde biologische term"
        },
        {
          en: "Computer display technology word",
          es: "Palabra de tecnología de pantalla de computadora",
          de: "Computer-Display-Technologie-Wort",
          nl: "Computer display technologie woord"
        }
      ],
      correct: 1,
      explanation: {
        en: "RETINA is one of the most productive 6-letter stems, forming 70+ seven-letter bingos including CERTAIN, TACRINE, KERATIN, etc. Essential for tournament players.",
        es: "RETINA es uno de los tallos de 6 letras más productivos, formando más de 70 bingos de siete letras incluyendo CERTAIN, TACRINE, KERATIN, etc. Esencial para jugadores de torneo.",
        de: "RETINA ist einer der produktivsten 6-Buchstaben-Stämme und bildet über 70 Sieben-Buchstaben-Bingos einschließlich CERTAIN, TACRINE, KERATIN usw. Wesentlich für Turnierspieler.",
        nl: "RETINA is een van de meest productieve 6-letter stammen, die 70+ zeven-letter bingo's vormt inclusief CERTAIN, TACRINE, KERATIN, etc. Essentieel voor toernooispelers."
      }
    },
    {
      question: {
        en: "What is 'simulation' in Scrabble computer analysis?",
        es: "¿Qué es 'simulación' en análisis de Scrabble por computadora?",
        de: "Was ist 'Simulation' in der Scrabble-Computer-Analyse?",
        nl: "Wat is 'simulatie' in Scrabble computer analyse?"
      },
      options: [
        {
          en: "Playing against computer opponents",
          es: "Jugar contra oponentes de computadora",
          de: "Gegen Computer-Gegner spielen",
          nl: "Spelen tegen computer tegenstanders"
        },
        {
          en: "Running thousands of games to test move quality",
          es: "Ejecutar miles de juegos para probar calidad de jugada",
          de: "Tausende Spiele ausführen um Zugqualität zu testen",
          nl: "Duizenden spellen uitvoeren om zetkwaliteit te testen"
        },
        {
          en: "Virtual board visualization",
          es: "Visualización de tablero virtual",
          de: "Virtuelles Brett-Visualisierung",
          nl: "Virtuele bord visualisatie"
        },
        {
          en: "Practice mode with fake tiles",
          es: "Modo de práctica con fichas falsas",
          de: "Übungsmodus mit gefälschten Steinen",
          nl: "Oefenmodus met nep stenen"
        }
      ],
      correct: 1,
      explanation: {
        en: "Simulation involves computer programs (like Quackle) running thousands of games from a position to determine which move has the highest win percentage.",
        es: "La simulación implica que programas de computadora (como Quackle) ejecuten miles de juegos desde una posición para determinar qué movimiento tiene el porcentaje de victoria más alto.",
        de: "Simulation beinhaltet dass Computerprogramme (wie Quackle) Tausende von Spielen von einer Position aus ausführen um zu bestimmen welcher Zug die höchste Gewinnquote hat.",
        nl: "Simulatie houdt in dat computerprogramma's (zoals Quackle) duizenden spellen vanaf een positie uitvoeren om te bepalen welke zet het hoogste winpercentage heeft."
      }
    },
    {
      question: {
        en: "What is a 'vowel dump'?",
        es: "¿Qué es un 'descarte de vocales'?",
        de: "Was ist ein 'Vokal-Dump'?",
        nl: "Wat is een 'klinker dump'?"
      },
      options: [
        {
          en: "Exchanging all vowel tiles",
          es: "Intercambiar todas las fichas de vocales",
          de: "Alle Vokalsteine austauschen",
          nl: "Alle klinker stenen ruilen"
        },
        {
          en: "Playing multiple vowels to balance rack",
          es: "Jugar múltiples vocales para equilibrar soporte",
          de: "Mehrere Vokale spielen um Rack auszugleichen",
          nl: "Meerdere klinkers spelen om rek te balanceren"
        },
        {
          en: "Removing vowels from word list",
          es: "Eliminar vocales de lista de palabras",
          de: "Vokale von Wortliste entfernen",
          nl: "Klinkers uit woordenlijst verwijderen"
        },
        {
          en: "Invalid vowel-only words",
          es: "Palabras inválidas solo de vocales",
          de: "Ungültige nur-Vokal-Wörter",
          nl: "Ongeldige alleen-klinker woorden"
        }
      ],
      correct: 1,
      explanation: {
        en: "A vowel dump is strategically playing 3-4 vowels in one turn (often for low points) to achieve better rack balance, especially when vowel-heavy.",
        es: "Un descarte de vocales es jugar estratégicamente 3-4 vocales en un turno (a menudo por pocos puntos) para lograr mejor equilibrio del soporte, especialmente cuando hay muchas vocales.",
        de: "Ein Vokal-Dump ist strategisches Spielen von 3-4 Vokalen in einer Runde (oft für wenige Punkte) um bessere Rack-Balance zu erreichen, besonders wenn vokalreich.",
        nl: "Een klinker dump is strategisch 3-4 klinkers spelen in één beurt (vaak voor lage punten) om betere rek balans te bereiken, vooral wanneer klinker-zwaar."
      }
    },
    {
      question: {
        en: "What is the value of the letter V in Scrabble?",
        es: "¿Cuál es el valor de la letra V en Scrabble?",
        de: "Welchen Wert hat der Buchstabe V im Scrabble?",
        nl: "Wat is de waarde van de letter V in Scrabble?"
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
      correct: 3,
      explanation: {
        en: "The letter V is worth 4 points in Scrabble. There are 2 V tiles in the standard set.",
        es: "La letra V vale 4 puntos en Scrabble. Hay 2 fichas V en el juego estándar.",
        de: "Der Buchstabe V ist 4 Punkte wert im Scrabble. Es gibt 2 V-Steine im Standard-Set.",
        nl: "De letter V is 4 punten waard in Scrabble. Er zijn 2 V-stenen in de standaard set."
      }
    },
    {
      question: {
        en: "What does 'challenge penalty' mean in double-challenge rules?",
        es: "¿Qué significa 'penalización por desafío' en reglas de doble desafío?",
        de: "Was bedeutet 'Challenge-Strafe' bei Doppel-Challenge-Regeln?",
        nl: "Wat betekent 'uitdaging straf' in dubbele-uitdaging regels?"
      },
      options: [
        {
          en: "Both players lose turn",
          es: "Ambos jugadores pierden turno",
          de: "Beide Spieler verlieren Zug",
          nl: "Beide spelers verliezen beurt"
        },
        {
          en: "Challenger loses turn if word is valid",
          es: "Retador pierde turno si palabra es válida",
          de: "Herausforderer verliert Zug wenn Wort gültig ist",
          nl: "Uitdager verliest beurt als woord geldig is"
        },
        {
          en: "Player who played invalid word AND challenger both penalized",
          es: "Jugador que jugó palabra inválida Y retador ambos penalizados",
          de: "Spieler der ungültiges Wort spielte UND Herausforderer beide bestraft",
          nl: "Speler die ongeldig woord speelde EN uitdager beide gestraft"
        },
        {
          en: "Automatic point deduction",
          es: "Deducción automática de puntos",
          de: "Automatischer Punktabzug",
          nl: "Automatische puntenaftrek"
        }
      ],
      correct: 1,
      explanation: {
        en: "In double-challenge (used in North American tournaments), a failed challenge costs the challenger their next turn. In single-challenge, no penalty for failed challenge.",
        es: "En doble desafío (usado en torneos norteamericanos), un desafío fallido le cuesta al retador su próximo turno. En desafío simple, sin penalización por desafío fallido.",
        de: "Bei Doppel-Challenge (in nordamerikanischen Turnieren verwendet) kostet eine fehlgeschlagene Challenge dem Herausforderer seinen nächsten Zug. Bei Einzel-Challenge keine Strafe für fehlgeschlagene Challenge.",
        nl: "In dubbele-uitdaging (gebruikt in Noord-Amerikaanse toernooien) kost een mislukte uitdaging de uitdager hun volgende beurt. In enkele-uitdaging geen straf voor mislukte uitdaging."
      }
    },
    {
      question: {
        en: "What is 'inflection' in Scrabble word knowledge?",
        es: "¿Qué es 'inflexión' en conocimiento de palabras de Scrabble?",
        de: "Was ist 'Flexion' im Scrabble-Wortwissen?",
        nl: "Wat is 'verbuiging' in Scrabble woorden kennis?"
      },
      options: [
        {
          en: "Curved letter tiles",
          es: "Fichas de letras curvas",
          de: "Gebogene Buchstabensteine",
          nl: "Gebogen letter stenen"
        },
        {
          en: "Word forms with suffixes/prefixes",
          es: "Formas de palabras con sufijos/prefijos",
          de: "Wortformen mit Suffixen/Präfixen",
          nl: "Woordvormen met achtervoegsels/voorvoegsels"
        },
        {
          en: "Pronunciation variations",
          es: "Variaciones de pronunciación",
          de: "Aussprache-Variationen",
          nl: "Uitspraakvariaties"
        },
        {
          en: "Word difficulty levels",
          es: "Niveles de dificultad de palabras",
          de: "Wort-Schwierigkeitsstufen",
          nl: "Woord moeilijkheidsgraden"
        }
      ],
      correct: 1,
      explanation: {
        en: "Inflections are grammatical variations (plurals, verb tenses, comparatives) added to root words. Knowing valid inflections greatly expands playable vocabulary.",
        es: "Las inflexiones son variaciones gramaticales (plurales, tiempos verbales, comparativos) agregados a palabras raíz. Conocer inflexiones válidas expande enormemente el vocabulario jugable.",
        de: "Flexionen sind grammatische Variationen (Plurale, Zeitformen, Komparative) die zu Wurzelwörtern hinzugefügt werden. Kenntnis gültiger Flexionen erweitert das spielbare Vokabular erheblich.",
        nl: "Verbuigingen zijn grammaticale variaties (meervouden, werkwoordstijden, vergrotende trappen) toegevoegd aan stamwoorden. Kennis van geldige verbuigingen breidt het speelbare vocabulaire enorm uit."
      }
    },
    {
      question: {
        en: "What percentage of games does the first player statistically win?",
        es: "¿Qué porcentaje de juegos gana estadísticamente el primer jugador?",
        de: "Welchen Prozentsatz der Spiele gewinnt der erste Spieler statistisch?",
        nl: "Welk percentage van de spellen wint de eerste speler statistisch?"
      },
      options: [
        {
          en: "Exactly 50%",
          es: "Exactamente 50%",
          de: "Genau 50%",
          nl: "Precies 50%"
        },
        {
          en: "About 54%",
          es: "Alrededor de 54%",
          de: "Etwa 54%",
          nl: "Ongeveer 54%"
        },
        {
          en: "About 62%",
          es: "Alrededor de 62%",
          de: "Etwa 62%",
          nl: "Ongeveer 62%"
        },
        {
          en: "About 70%",
          es: "Alrededor de 70%",
          de: "Etwa 70%",
          nl: "Ongeveer 70%"
        }
      ],
      correct: 1,
      explanation: {
        en: "The first player has approximately a 54% win rate in expert play, giving a modest first-move advantage due to controlling the center square.",
        es: "El primer jugador tiene aproximadamente una tasa de victoria del 54% en juego experto, dando una modesta ventaja de primer movimiento debido al control del cuadrado central.",
        de: "Der erste Spieler hat ungefähr eine 54% Gewinnrate im Expertenspiel, was einen bescheidenen Erster-Zug-Vorteil durch Kontrolle des zentralen Feldes gibt.",
        nl: "De eerste speler heeft ongeveer een 54% winratio in expert spel, wat een bescheiden eerste-zet voordeel geeft door controle van het centrale vak."
      }
    },
    {
      question: {
        en: "What is the highest-scoring valid English Scrabble word theoretically possible in one turn?",
        es: "¿Cuál es la palabra válida de inglés en Scrabble de mayor puntuación teóricamente posible en un turno?",
        de: "Was ist das höchst punktende gültige englische Scrabble-Wort das theoretisch in einer Runde möglich ist?",
        nl: "Wat is het hoogst scorende geldige Engelse Scrabble woord theoretisch mogelijk in één beurt?"
      },
      options: [
        {
          en: "OXYPHENBUTAZONE (around 1,780 points)",
          es: "OXYPHENBUTAZONE (alrededor de 1,780 puntos)",
          de: "OXYPHENBUTAZONE (etwa 1,780 Punkte)",
          nl: "OXYPHENBUTAZONE (ongeveer 1,780 punten)"
        },
        {
          en: "QUARTZY (around 500 points)",
          es: "QUARTZY (alrededor de 500 puntos)",
          de: "QUARTZY (etwa 500 Punkte)",
          nl: "QUARTZY (ongeveer 500 punten)"
        },
        {
          en: "BEZIQUE (around 300 points)",
          es: "BEZIQUE (alrededor de 300 puntos)",
          de: "BEZIQUE (etwa 300 Punkte)",
          nl: "BEZIQUE (ongeveer 300 punten)"
        },
        {
          en: "QUIZZIFY (around 200 points)",
          es: "QUIZZIFY (alrededor de 200 puntos)",
          de: "QUIZZIFY (etwa 200 Punkte)",
          nl: "QUIZZIFY (ongeveer 200 punten)"
        }
      ],
      correct: 0,
      explanation: {
        en: "OXYPHENBUTAZONE (a former anti-inflammatory drug) could theoretically score 1,778-1,782 points if played across two triple-word scores with perfect board setup, though this is virtually impossible in actual play.",
        es: "OXYPHENBUTAZONE (un antiguo medicamento antiinflamatorio) teóricamente podría anotar 1,778-1,782 puntos si se juega a través de dos puntuaciones de palabra triple con configuración perfecta del tablero, aunque esto es virtualmente imposible en juego real.",
        de: "OXYPHENBUTAZONE (ein ehemaliges entzündungshemmendes Medikament) könnte theoretisch 1,778-1,782 Punkte erzielen wenn es über zwei Dreifach-Wort-Werte mit perfektem Brett-Aufbau gespielt wird, obwohl dies im tatsächlichen Spiel praktisch unmöglich ist.",
        nl: "OXYPHENBUTAZONE (een voormalig ontstekingsremmend medicijn) zou theoretisch 1,778-1,782 punten kunnen scoren als het over twee driedubbele woordwaarden wordt gespeeld met perfecte bord setup, hoewel dit vrijwel onmogelijk is in daadwerkelijk spel."
      }
    },
    {
      question: {
        en: "What is 'clocking' in tournament Scrabble?",
        es: "¿Qué es 'cronometraje' en Scrabble de torneo?",
        de: "Was ist 'Zeitnahme' im Turnier-Scrabble?",
        nl: "Wat is 'klokken' in toernooi Scrabble?"
      },
      options: [
        {en: "Tracking opponent's time", es: "Rastrear el tiempo del oponente", de: "Zeit des Gegners verfolgen", nl: "Tijd van tegenstander bijhouden"},
        {en: "Managing your own time wisely", es: "Gestionar tu propio tiempo sabiamente", de: "Eigene Zeit klug verwalten", nl: "Je eigen tijd verstandig beheren"},
        {en: "Using a chess clock for time control", es: "Usar un reloj de ajedrez para control de tiempo", de: "Eine Schachuhr zur Zeitkontrolle verwenden", nl: "Een schaakklok gebruiken voor tijdscontrole"},
        {en: "Recording game duration", es: "Registrar duración del juego", de: "Spieldauer aufzeichnen", nl: "Spelduur opnemen"}
      ],
      correct: 2,
      explanation: {
        en: "Clocking refers to using chess clocks in tournament play where each player has a time limit (typically 25 minutes). Exceeding time results in losing 10 points per minute.",
        es: "Cronometraje se refiere al uso de relojes de ajedrez en juego de torneo donde cada jugador tiene un límite de tiempo (típicamente 25 minutos). Exceder el tiempo resulta en perder 10 puntos por minuto.",
        de: "Zeitnahme bezieht sich auf die Verwendung von Schachuhren im Turnierspiel wo jeder Spieler ein Zeitlimit hat (typischerweise 25 Minuten). Das Überschreiten der Zeit führt zum Verlust von 10 Punkten pro Minute.",
        nl: "Klokken verwijst naar het gebruik van schaakklokken in toernooispel waar elke speler een tijdslimiet heeft (typisch 25 minuten). Tijd overschrijden resulteert in verlies van 10 punten per minuut."
      }
    },
    {
      question: {
        en: "What is a 'power tile' in Scrabble strategy?",
        es: "¿Qué es una 'ficha de poder' en estrategia de Scrabble?",
        de: "Was ist ein 'Power-Stein' in der Scrabble-Strategie?",
        nl: "Wat is een 'power steen' in Scrabble strategie?"
      },
      options: [
        {en: "Blank tiles only", es: "Solo fichas en blanco", de: "Nur Blanko-Steine", nl: "Alleen blanco stenen"},
        {en: "High-value letters (J,Q,X,Z) and blanks", es: "Letras de alto valor (J,Q,X,Z) y blancos", de: "Hochwertige Buchstaben (J,Q,X,Z) und Blanko-Steine", nl: "Hoogwaardige letters (J,Q,X,Z) en blanco's"},
        {en: "S tiles only", es: "Solo fichas S", de: "Nur S-Steine", nl: "Alleen S-stenen"},
        {en: "All consonants", es: "Todas las consonantes", de: "Alle Konsonanten", nl: "Alle medeklinkers"}
      ],
      correct: 1,
      explanation: {
        en: "Power tiles are the high-value letters (J,Q,X,Z worth 8-10 points) and the two blank tiles. Managing these 6 tiles effectively is crucial to winning.",
        es: "Las fichas de poder son las letras de alto valor (J,Q,X,Z valen 8-10 puntos) y las dos fichas en blanco. Gestionar estas 6 fichas efectivamente es crucial para ganar.",
        de: "Power-Steine sind die hochwertigen Buchstaben (J,Q,X,Z wert 8-10 Punkte) und die zwei Blanko-Steine. Diese 6 Steine effektiv zu verwalten ist entscheidend zum Gewinnen.",
        nl: "Power stenen zijn de hoogwaardige letters (J,Q,X,Z waard 8-10 punten) en de twee blanco stenen. Deze 6 stenen effectief beheren is cruciaal voor winnen."
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
        {en: "Tile distribution", es: "Distribución de fichas", de: "Steinverteilung", nl: "Stenen verdeling"},
        {en: "Point difference between players", es: "Diferencia de puntos entre jugadores", de: "Punktedifferenz zwischen Spielern", nl: "Puntenverschil tussen spelers"},
        {en: "Board coverage", es: "Cobertura del tablero", de: "Brett-Abdeckung", nl: "Bord dekking"},
        {en: "Word diversity", es: "Diversidad de palabras", de: "Wort-Vielfalt", nl: "Woord diversiteit"}
      ],
      correct: 1,
      explanation: {
        en: "Spread is the point difference (your score minus opponent's score). Tournaments often rank by wins first, then by cumulative spread across all games.",
        es: "El diferencial es la diferencia de puntos (tu puntuación menos la del oponente). Los torneos a menudo clasifican por victorias primero, luego por diferencial acumulativo en todos los juegos.",
        de: "Spread ist die Punktedifferenz (Ihre Punktzahl minus Gegner-Punktzahl). Turniere rangieren oft nach Siegen zuerst, dann nach kumulativem Spread über alle Spiele.",
        nl: "Spread is het puntenverschil (jouw score min tegenstander score). Toernooien rangschikken vaak eerst op overwinningen, dan op cumulatieve spread over alle spellen."
      }
    },
    {
      question: {
        en: "What is 'defensive play' in Scrabble endgame?",
        es: "¿Qué es el 'juego defensivo' en el final de Scrabble?",
        de: "Was ist 'defensives Spiel' im Scrabble-Endspiel?",
        nl: "Wat is 'defensief spel' in Scrabble eindspel?"
      },
      options: [
        {en: "Playing only on your side of board", es: "Jugar solo en tu lado del tablero", de: "Nur auf Ihrer Seite des Bretts spielen", nl: "Alleen op jouw kant van het bord spelen"},
        {en: "Blocking opponent's high-scoring spots when ahead", es: "Bloquear puntos de alta puntuación del oponente cuando vas adelante", de: "Hochbewertende Stellen des Gegners blockieren wenn man vorne liegt", nl: "Hoogscorende plekken van tegenstander blokkeren wanneer voor"},
        {en: "Saving blanks for defense", es: "Guardar blancos para defensa", de: "Blanko-Steine für Verteidigung aufheben", nl: "Blanco's sparen voor verdediging"},
        {en: "Exchanging tiles frequently", es: "Intercambiar fichas frecuentemente", de: "Steine häufig tauschen", nl: "Stenen vaak ruilen"}
      ],
      correct: 1,
      explanation: {
        en: "Defensive play means limiting opponent's scoring opportunities when you're ahead, often by blocking high-value spots or playing to close down the board.",
        es: "El juego defensivo significa limitar las oportunidades de puntuación del oponente cuando vas adelante, a menudo bloqueando puntos de alto valor o jugando para cerrar el tablero.",
        de: "Defensives Spiel bedeutet die Punktemöglichkeiten des Gegners zu begrenzen wenn man vorne liegt, oft durch Blockieren hochwertiger Stellen oder Spielen um das Brett zu schließen.",
        nl: "Defensief spel betekent scoringsmogelijkheden van tegenstander beperken wanneer je voor staat, vaak door hoogwaardige plekken te blokkeren of te spelen om het bord te sluiten."
      }
    },
    {
      question: {
        en: "What is 'rack leave' valuation in computer analysis?",
        es: "¿Qué es la valoración de 'lo que queda en el soporte' en análisis por computadora?",
        de: "Was ist 'Rack-Leave-Bewertung' in der Computeranalyse?",
        nl: "Wat is 'rek leave' waardering in computeranalyse?"
      },
      options: [
        {en: "Number of tiles left", es: "Número de fichas restantes", de: "Anzahl der verbleibenden Steine", nl: "Aantal resterende stenen"},
        {en: "Scoring potential of remaining tiles", es: "Potencial de puntuación de fichas restantes", de: "Punktepotenzial der verbleibenden Steine", nl: "Scoring potentieel van resterende stenen"},
        {en: "Time to replace tiles", es: "Tiempo para reemplazar fichas", de: "Zeit zum Ersetzen der Steine", nl: "Tijd om stenen te vervangen"},
        {en: "Color of tiles remaining", es: "Color de fichas restantes", de: "Farbe der verbleibenden Steine", nl: "Kleur van resterende stenen"}
      },
      correct: 1,
      explanation: {
        en: "Rack leave valuation assigns a value to the tiles remaining after a play, based on their synergy and bingo potential. Good software like Quackle uses this to evaluate moves.",
        es: "La valoración de lo que queda en el soporte asigna un valor a las fichas restantes después de una jugada, basado en su sinergia y potencial de bingo. Buen software como Quackle usa esto para evaluar jugadas.",
        de: "Rack-Leave-Bewertung weist den nach einem Zug verbleibenden Steinen einen Wert zu, basierend auf ihrer Synergie und ihrem Bingo-Potenzial. Gute Software wie Quackle verwendet dies zur Zugbewertung.",
        nl: "Rek leave waardering kent een waarde toe aan de stenen die overblijven na een zet, gebaseerd op hun synergie en bingo potentieel. Goede software zoals Quackle gebruikt dit om zetten te evalueren."
      }
    },
    {
      question: {
        en: "What is 'out-in-two' in Scrabble endgame?",
        es: "¿Qué es 'salir-en-dos' en el final de Scrabble?",
        de: "Was ist 'Out-in-Two' im Scrabble-Endspiel?",
        nl: "Wat is 'uit-in-twee' in Scrabble eindspel?"
      },
      options: [
        {en: "Playing two tiles to end game", es: "Jugar dos fichas para terminar juego", de: "Zwei Steine spielen um Spiel zu beenden", nl: "Twee stenen spelen om spel te beëindigen"},
        {en: "Having two turns left to empty rack", es: "Tener dos turnos restantes para vaciar soporte", de: "Zwei Züge übrig haben um Rack zu leeren", nl: "Twee beurten over hebben om rek te legen"},
        {en: "Two players finishing simultaneously", es: "Dos jugadores terminando simultáneamente", de: "Zwei Spieler beenden gleichzeitig", nl: "Twee spelers eindigen tegelijkertijd"},
        {en: "Playing two bingos", es: "Jugar dos bingos", de: "Zwei Bingos spielen", nl: "Twee bingo's spelen"}
      },
      correct: 1,
      explanation: {
        en: "Out-in-two means you can empty your rack in exactly two more turns. Calculating this correctly is crucial for optimal endgame play when the bag is empty.",
        es: "Salir-en-dos significa que puedes vaciar tu soporte en exactamente dos turnos más. Calcular esto correctamente es crucial para juego óptimo del final cuando la bolsa está vacía.",
        de: "Out-in-Two bedeutet dass Sie Ihr Rack in genau zwei weiteren Zügen leeren können. Dies korrekt zu berechnen ist entscheidend für optimales Endspiel wenn der Beutel leer ist.",
        nl: "Uit-in-twee betekent dat je je rek in precies twee beurten meer kunt legen. Dit correct berekenen is cruciaal voor optimaal eindspel wanneer de zak leeg is."
      }
    },
    {
      question: {
        en: "What percentage of tiles are vowels in standard English Scrabble?",
        es: "¿Qué porcentaje de fichas son vocales en Scrabble inglés estándar?",
        de: "Welcher Prozentsatz der Steine sind Vokale im Standard-Englisch-Scrabble?",
        nl: "Welk percentage van de stenen zijn klinkers in standaard Engels Scrabble?"
      },
      options: [
        {en: "38%", es: "38%", de: "38%", nl: "38%"},
        {en: "42%", es: "42%", de: "42%", nl: "42%"},
        {en: "48%", es: "48%", de: "48%", nl: "48%"},
        {en: "52%", es: "52%", de: "52%", nl: "52%"}
      ],
      correct: 1,
      explanation: {
        en: "42 out of 98 letter tiles are vowels (A=9, E=12, I=9, O=8, U=4), which equals 42.9%. The two blanks can represent any letter.",
        es: "42 de 98 fichas de letras son vocales (A=9, E=12, I=9, O=8, U=4), lo que equivale al 42.9%. Los dos blancos pueden representar cualquier letra.",
        de: "42 von 98 Buchstabensteinen sind Vokale (A=9, E=12, I=9, O=8, U=4), was 42.9% entspricht. Die zwei Blanko-Steine können jeden Buchstaben darstellen.",
        nl: "42 van 98 letterstenen zijn klinkers (A=9, E=12, I=9, O=8, U=4), wat gelijk is aan 42.9%. De twee blanco's kunnen elke letter voorstellen."
      }
    },
    {
      question: {
        en: "What is 'parallel play' in Scrabble?",
        es: "¿Qué es el 'juego paralelo' en Scrabble?",
        de: "Was ist 'Parallel-Spiel' im Scrabble?",
        nl: "Wat is 'parallel spel' in Scrabble?"
      },
      options: [
        {en: "Two games played at once", es: "Dos juegos jugados a la vez", de: "Zwei Spiele gleichzeitig gespielt", nl: "Twee spellen tegelijk gespeeld"},
        {en: "Playing words adjacent and parallel to existing words", es: "Jugar palabras adyacentes y paralelas a palabras existentes", de: "Wörter neben und parallel zu bestehenden Wörtern spielen", nl: "Woorden naast en parallel aan bestaande woorden spelen"},
        {en: "Playing horizontally only", es: "Jugar solo horizontalmente", de: "Nur horizontal spielen", nl: "Alleen horizontaal spelen"},
        {en: "Mirroring opponent's moves", es: "Reflejar movimientos del oponente", de: "Züge des Gegners spiegeln", nl: "Zetten van tegenstander spiegelen"}
      ],
      correct: 1,
      explanation: {
        en: "Parallel play involves placing a word adjacent to an existing word, creating multiple short words perpendicular to both. This often scores well using two-letter words.",
        es: "El juego paralelo implica colocar una palabra adyacente a una palabra existente, creando múltiples palabras cortas perpendiculares a ambas. Esto a menudo puntúa bien usando palabras de dos letras.",
        de: "Parallel-Spiel beinhaltet das Platzieren eines Wortes neben einem bestehenden Wort, wobei mehrere kurze Wörter senkrecht zu beiden erstellt werden. Dies punktet oft gut mit Zwei-Buchstaben-Wörtern.",
        nl: "Parallel spel houdt in dat je een woord naast een bestaand woord plaatst, waarbij meerdere korte woorden loodrecht op beide worden gecreëerd. Dit scoort vaak goed met twee-letterwoorden."
      }
    },
    {
      question: {
        en: "What is the 'probability paradigm' in rack management?",
        es: "¿Qué es el 'paradigma de probabilidad' en gestión del soporte?",
        de: "Was ist das 'Wahrscheinlichkeitsparadigma' im Rack-Management?",
        nl: "Wat is het 'waarschijnlijkheidsparadigma' in rek beheer?"
      },
      options: [
        {en: "Using statistics to predict opponent moves", es: "Usar estadísticas para predecir movimientos del oponente", de: "Statistiken verwenden um Gegnerzüge vorherzusagen", nl: "Statistieken gebruiken om tegenstander zetten te voorspellen"},
        {en: "Keeping tiles with high bingo probability", es: "Mantener fichas con alta probabilidad de bingo", de: "Steine mit hoher Bingo-Wahrscheinlichkeit behalten", nl: "Stenen met hoge bingo waarschijnlijkheid houden"},
        {en: "Random tile selection", es: "Selección aleatoria de fichas", de: "Zufällige Steinauswahl", nl: "Willekeurige steen selectie"},
        {en: "Equal distribution of vowels/consonants", es: "Distribución igual de vocales/consonantes", de: "Gleichverteilung von Vokalen/Konsonanten", nl: "Gelijke verdeling van klinkers/medeklinkers"}
      ],
      correct: 1,
      explanation: {
        en: "The probability paradigm means keeping letter combinations with highest statistical chance of forming bingos, like common stems (RETINA, SATIRE) or high-synergy tiles.",
        es: "El paradigma de probabilidad significa mantener combinaciones de letras con la mayor probabilidad estadística de formar bingos, como tallos comunes (RETINA, SATIRE) o fichas de alta sinergia.",
        de: "Das Wahrscheinlichkeitsparadigma bedeutet Buchstabenkombinationen mit höchster statistischer Chance auf Bingo-Bildung zu behalten, wie häufige Stämme (RETINA, SATIRE) oder hochsyn ergische Steine.",
        nl: "Het waarschijnlijkheidsparadigma betekent lettercombinaties houden met hoogste statistische kans op bingo vorming, zoals veelvoorkomende stammen (RETINA, SATIRE) of hoge-synergie stenen."
      }
    },
    {
      question: {
        en: "What is 'tile turnover strategy'?",
        es: "¿Qué es la 'estrategia de rotación de fichas'?",
        de: "Was ist 'Stein-Umsatz-Strategie'?",
        nl: "Wat is 'steen omzet strategie'?"
      },
      options: [
        {en: "Exchanging frequently", es: "Intercambiar frecuentemente", de: "Häufig tauschen", nl: "Vaak ruilen"},
        {en: "Playing many tiles per turn to cycle through bag", es: "Jugar muchas fichas por turno para ciclar a través de la bolsa", de: "Viele Steine pro Zug spielen um durch Beutel zu zyklieren", nl: "Veel stenen per beurt spelen om door zak te fietsen"},
        {en: "Flipping tiles over", es: "Voltear fichas", de: "Steine umdrehen", nl: "Stenen omdraaien"},
        {en: "Rotating rack position", es: "Rotar posición del soporte", de: "Rack-Position drehen", nl: "Rek positie roteren"}
      ],
      correct: 1,
      explanation: {
        en: "High turnover means playing 5-6 tiles per turn to quickly cycle through the bag, increasing chances of drawing power tiles and blanks, though sometimes at cost of immediate points.",
        es: "Alta rotación significa jugar 5-6 fichas por turno para ciclar rápidamente a través de la bolsa, aumentando las posibilidades de sacar fichas de poder y blancos, aunque a veces a costa de puntos inmediatos.",
        de: "Hoher Umsatz bedeutet 5-6 Steine pro Zug zu spielen um schnell durch den Beutel zu zyklieren, was die Chancen erhöht Power-Steine und Blanko-Steine zu ziehen, manchmal auf Kosten sofortiger Punkte.",
        nl: "Hoge omzet betekent 5-6 stenen per beurt spelen om snel door de zak te fietsen, waardoor kansen toenemen op trekken van power stenen en blanco's, hoewel soms ten koste van directe punten."
      }
    },
    {
      question: {
        en: "What does 'overplaying the blank' mean?",
        es: "¿Qué significa 'sobreju gar el blanco'?",
        de: "Was bedeutet 'das Blanko überspielen'?",
        nl: "Wat betekent 'de blanco overspelen'?"
      },
      options: [
        {en: "Using blank for low-scoring play", es: "Usar blanco para jugada de baja puntuación", de: "Blanko für niedrig punktenden Zug verwenden", nl: "Blanco gebruiken voor laag scorende zet"},
        {en: "Playing both blanks at once", es: "Jugar ambos blancos a la vez", de: "Beide Blanko-Steine auf einmal spielen", nl: "Beide blanco's tegelijk spelen"},
        {en: "Saving blank too long", es: "Guardar blanco demasiado tiempo", de: "Blanko zu lange aufheben", nl: "Blanco te lang bewaren"},
        {en: "Using blank incorrectly", es: "Usar blanco incorrectamente", de: "Blanko falsch verwenden", nl: "Blanco verkeerd gebruiken"}
      ],
      correct: 0,
      explanation: {
        en: "Overplaying the blank means using it for a mediocre-scoring play when you should save it for a high-value bingo or strategic opportunity. Blanks should typically score 25+ points.",
        es: "Sobrejugar el blanco significa usarlo para una jugada de puntuación mediocre cuando deberías guardarlo para un bingo de alto valor u oportunidad estratégica. Los blancos típicamente deberían anotar 25+ puntos.",
        de: "Das Blanko überspielen bedeutet es für einen mittelmäßig punktenden Zug zu verwenden wenn man es für ein hochw ertiges Bingo oder strategische Gelegenheit aufheben sollte. Blanko-Steine sollten typischerweise 25+ Punkte erzielen.",
        nl: "De blanco overspelen betekent het gebruiken voor een matig scorende zet wanneer je het moet sparen voor een hoogwaardige bingo of strategische kans. Blanco's zouden typisch 25+ punten moeten scoren."
      }
    },
    {
      question: {
        en: "What is 'bingo equity' in move evaluation?",
        es: "¿Qué es la 'equidad de bingo' en evaluación de jugadas?",
        de: "Was ist 'Bingo-Eigenkapital' bei der Zugbewertung?",
        nl: "Wat is 'bingo waarde' in zet evaluatie?"
      },
      options: [
        {en: "Points from actual bingos", es: "Puntos de bingos reales", de: "Punkte von tatsächlichen Bingos", nl: "Punten van werkelijke bingo's"},
        {en: "Expected future value from bingo potential", es: "Valor futuro esperado del potencial de bingo", de: "Erwarteter zukünftiger Wert aus Bingo-Potenzial", nl: "Verwachte toekomstige waarde van bingo potentieel"},
        {en: "Bonus points", es: "Puntos de bonificación", de: "Bonuspunkte", nl: "Bonuspunten"},
        {en: "Fair play score", es: "Puntuación de juego limpio", de: "Fair-Play-Punktzahl", nl: "Eerlijk spel score"}
      ],
      correct: 1,
      explanation: {
        en: "Bingo equity is the expected point value added by keeping a rack with good bingo potential versus playing more tiles now. Computer programs calculate this to find optimal plays.",
        es: "La equidad de bingo es el valor esperado en puntos agregado al mantener un soporte con buen potencial de bingo versus jugar más fichas ahora. Los programas de computadora calculan esto para encontrar jugadas óptimas.",
        de: "Bingo-Eigenkapital ist der erwartete Punktwert der hinzugefügt wird indem man ein Rack mit gutem Bingo-Potenzial behält versus jetzt mehr Steine zu spielen. Computerprogramme berechnen dies um optimale Züge zu finden.",
        nl: "Bingo waarde is de verwachte puntwaarde toegevoegd door een rek met goed bingo potentieel te houden versus nu meer stenen te spelen. Computerprogramma's berekenen dit om optimale zetten te vinden."
      }
    },
    {
      question: {
        en: "What is 'knowing your opponent' in tournament strategy?",
        es: "¿Qué es 'conocer a tu oponente' en estrategia de torneo?",
        de: "Was ist 'Ihren Gegner kennen' in Turnierstrategie?",
        nl: "Wat is 'je tegenstander kennen' in toernooi strategie?"
      },
      options: [
        {en: "Personal friendship", es: "Amistad personal", de: "Persönliche Freundschaft", nl: "Persoonlijke vriendschap"},
        {en: "Adjusting play style based on opponent's skill and tendencies", es: "Ajustar estilo de juego según habilidad y tendencias del oponente", de: "Spielstil basierend auf Fähigkeit und Tendenzen des Gegners anpassen", nl: "Speelstijl aanpassen op basis van vaardigheid en neigingen van tegenstander"},
        {en: "Socializing between games", es: "Socializar entre juegos", de: "Zwischen Spielen sozialisieren", nl: "Socializen tussen spellen"},
        {en: "Memorizing their past scores", es: "Memorizar sus puntuaciones pasadas", de: "Ihre früheren Punktzahlen auswendig lernen", nl: "Hun eerdere scores onthouden"}
      ],
      correct: 1,
      explanation: {
        en: "Knowing your opponent means adjusting strategy based on their skill level - playing more defensively against experts, opening up the board against weaker players to maximize spread.",
        es: "Conocer a tu oponente significa ajustar la estrategia según su nivel de habilidad - jugando más defensivamente contra expertos, abriendo el tablero contra jugadores más débiles para maximizar el diferencial.",
        de: "Ihren Gegner kennen bedeutet die Strategie basierend auf ihrem Fähigkeitsniveau anzupassen - defensiver gegen Experten spielen, das Brett gegen schwächere Spieler öffnen um Spread zu maximieren.",
        nl: "Je tegenstander kennen betekent strategie aanpassen op basis van hun vaardigheidsniveau - defensiever spelen tegen experts, het bord openen tegen zwakkere spelers om spread te maximaliseren."
      }
    },
    {
      question: {
        en: "What is 'unseen tile inference' in tracking?",
        es: "¿Qué es la 'inferencia de fichas no vistas' en rastreo?",
        de: "Was ist 'Unsichtbare-Stein-Inferenz' bei der Verfolgung?",
        nl: "Wat is 'ongeziene steen inferentie' in volgen?"
      },
      options: [
        {en: "Guessing randomly", es: "Adivinar aleatoriamente", de: "Zufällig raten", nl: "Willekeurig raden"},
        {en: "Deducing opponent's tiles from their plays and available tiles", es: "Deducir fichas del oponente de sus jugadas y fichas disponibles", de: "Steine des Gegners aus seinen Zügen und verfügbaren Steinen deduzieren", nl: "Stenen van tegenstander afleiden uit hun zetten en beschikbare stenen"},
        {en: "Seeing through tiles", es: "Ver a través de fichas", de: "Durch Steine sehen", nl: "Door stenen heen kijken"},
        {en: "Counting remaining tiles", es: "Contar fichas restantes", de: "Verbleibende Steine zählen", nl: "Resterende stenen tellen"}
      ],
      correct: 1,
      explanation: {
        en: "Unseen tile inference means deducing what tiles opponent likely holds by tracking played tiles and analyzing their moves. Advanced players can narrow down opponent's rack in endgame.",
        es: "La inferencia de fichas no vistas significa deducir qué fichas probablemente tiene el oponente rastreando fichas jugadas y analizando sus movimientos. Los jugadores avanzados pueden reducir el soporte del oponente en el final.",
        de: "Unsichtbare-Stein-Inferenz bedeutet zu deduzieren welche Steine der Gegner wahrscheinlich hält indem man gespielte Steine verfolgt und ihre Züge analysiert. Fortgeschrittene Spieler können das Rack des Gegners im Endspiel eingrenzen.",
        nl: "Ongeziene steen inferentie betekent afleiden welke stenen tegenstander waarschijnlijk heeft door gespeelde stenen te volgen en hun zetten te analyseren. Gevorderde spelers kunnen het rek van tegenstander in eindspel beperken."
      }
    },
    {
      question: {
        en: "What is 'bingoing through' in endgame?",
        es: "¿Qué es 'hacer bingo a través' en el final?",
        de: "Was ist 'Durchbingo' im Endspiel?",
        nl: "Wat is 'bingoen door' in eindspel?"
      },
      options: [
        {en: "Playing multiple bingos", es: "Jugar múltiples bingos", de: "Mehrere Bingos spielen", nl: "Meerdere bingo's spelen"},
        {en: "Playing a bingo that uses all remaining tiles to win", es: "Jugar un bingo que usa todas las fichas restantes para ganar", de: "Ein Bingo spielen das alle verbleibenden Steine verwendet um zu gewinnen", nl: "Een bingo spelen die alle resterende stenen gebruikt om te winnen"},
        {en: "Passing opponent's score with bingo", es: "Pasar puntuación del oponente con bingo", de: "Punktzahl des Gegners mit Bingo überholen", nl: "Score van tegenstander passeren met bingo"},
        {en: "Consecutive bingos", es: "Bingos consecutivos", de: "Aufeinanderfolgende Bingos", nl: "Opeenvolgende bingo's"}
      },
      correct: 1,
      explanation: {
        en: "Bingoing through (or 'bingoing out') means playing a bingo that uses all your remaining tiles when the bag is empty, ending the game and adding opponent's unplayed tiles to your score.",
        es: "Hacer bingo a través (o 'salir con bingo') significa jugar un bingo que usa todas tus fichas restantes cuando la bolsa está vacía, terminando el juego y agregando fichas no jugadas del oponente a tu puntuación.",
        de: "Durchbingo (oder 'Ausbingo') bedeutet ein Bingo zu spielen das alle Ihre verbleibenden Steine verwendet wenn der Beutel leer ist, das Spiel zu beenden und die ungespielten Steine des Gegners zu Ihrer Punktzahl hinzuzufügen.",
        nl: "Bingoen door (of 'uitbingoen') betekent een bingo spelen die alle je resterende stenen gebruikt wanneer de zak leeg is, het spel beëindigen en ongespeelde stenen van tegenstander aan je score toevoegen."
      }
    },
    {
      question: {
        en: "What is the 'JQXZ paradox' in tile management?",
        es: "¿Qué es la 'paradoja JQXZ' en gestión de fichas?",
        de: "Was ist das 'JQXZ-Paradox' im Stein-Management?",
        nl: "Wat is de 'JQXZ paradox' in steen beheer?"
      },
      options: [
        {en: "These tiles are worthless", es: "Estas fichas no valen nada", de: "Diese Steine sind wertlos", nl: "Deze stenen zijn waardeloos"},
        {en: "High-value tiles can hurt rack balance despite their points", es: "Fichas de alto valor pueden perjudicar equilibrio del soporte a pesar de sus puntos", de: "Hochwertige Steine können Rack-Balance trotz ihrer Punkte schaden", nl: "Hoogwaardige stenen kunnen rek balans schaden ondanks hun punten"},
        {en: "They should always be played immediately", es: "Siempre deben jugarse inmediatamente", de: "Sie sollten immer sofort gespielt werden", nl: "Ze moeten altijd onmiddellijk worden gespeeld"},
        {en: "They have secret bonus value", es: "Tienen valor de bonificación secreto", de: "Sie haben geheimen Bonuswert", nl: "Ze hebben geheime bonuswaarde"}
      ],
      correct: 1,
      explanation: {
        en: "The JQXZ paradox is that while these high-value tiles score well, having too many or holding them too long damages rack balance, reducing overall scoring potential and bingo chances.",
        es: "La paradoja JQXZ es que aunque estas fichas de alto valor puntúan bien, tener demasiadas o mantenerlas demasiado tiempo daña el equilibrio del soporte, reduciendo el potencial de puntuación general y las posibilidades de bingo.",
        de: "Das JQXZ-Paradox ist dass diese hochwertigen Steine zwar gut punkten, aber zu viele zu haben oder sie zu lange zu halten die Rack-Balance schädigt, was das Gesamtpunktepotenzial und die Bingo-Chancen reduziert.",
        nl: "De JQXZ paradox is dat hoewel deze hoogwaardige stenen goed scoren, te veel hebben of ze te lang houden de rek balans beschadigt, waardoor het algehele scoringspotentieel en bingo kansen verminderen."
      }
    },
    {
      question: {
        en: "What is 'challenge baiting' in competitive play?",
        es: "¿Qué es 'cebo de desafío' en juego competitivo?",
        de: "Was ist 'Challenge-Ködern' im kompetitiven Spiel?",
        nl: "Wat is 'uitdaging azen' in competitief spel?"
      },
      options: [
        {en: "Encouraging opponent to challenge valid unusual words", es: "Alentar al oponente a desafiar palabras inusuales válidas", de: "Gegner ermutigen ungewöhnliche gültige Wörter herauszufordern", nl: "Tegenstander aanmoedigen ongebruikelijke geldige woorden uit te dagen"},
        {en: "Challenging frequently", es: "Desafiar frecuentemente", de: "Häufig herausfordern", nl: "Vaak uitdagen"},
        {en: "Playing obvious words", es: "Jugar palabras obvias", de: "Offensichtliche Wörter spielen", nl: "Voor de hand liggende woorden spelen"},
        {en: "Avoiding challenges", es: "Evitar desafíos", de: "Herausforderungen vermeiden", nl: "Uitdagingen vermijden"}
      ],
      correct: 0,
      explanation: {
        en: "Challenge baiting means playing obscure but valid words hoping opponent challenges (and loses a turn in double-challenge). Ethical players avoid this, preferring honest play.",
        es: "El cebo de desafío significa jugar palabras oscuras pero válidas esperando que el oponente desafíe (y pierda un turno en doble desafío). Los jugadores éticos evitan esto, prefiriendo el juego honesto.",
        de: "Challenge-Ködern bedeutet obskure aber gültige Wörter zu spielen in der Hoffnung dass der Gegner herausfordert (und einen Zug bei Doppel-Challenge verliert). Ethische Spieler vermeiden dies und bevorzugen ehrliches Spiel.",
        nl: "Uitdaging azen betekent obscure maar geldige woorden spelen in de hoop dat tegenstander uitdaagt (en een beurt verliest in dubbele-uitdaging). Ethische spelers vermijden dit en geven de voorkeur aan eerlijk spel."
      }
    },
    {
      question: {
        en: "What is 'score differential analysis' in tournament strategy?",
        es: "¿Qué es el 'análisis de diferencial de puntuación' en estrategia de torneo?",
        de: "Was ist 'Punktedifferenz-Analyse' in Turnierstrategie?",
        nl: "Wat is 'score differentieel analyse' in toernooi strategie?"
      },
      options: [
        {en: "Comparing scores between games", es: "Comparar puntuaciones entre juegos", de: "Punktzahlen zwischen Spielen vergleichen", nl: "Scores vergelijken tussen spellen"},
        {en: "Adjusting risk based on current point spread", es: "Ajustar riesgo según diferencial de puntos actual", de: "Risiko basierend auf aktuellem Punkteabstand anpassen", nl: "Risico aanpassen op basis van huidige puntenspreiding"},
        {en: "Calculating average scores", es: "Calcular puntuaciones promedio", de: "Durchschnittliche Punktzahlen berechnen", nl: "Gemiddelde scores berekenen"},
        {en: "Finding score patterns", es: "Encontrar patrones de puntuación", de: "Punktemuster finden", nl: "Score patronen vinden"}
      },
      correct: 1,
      explanation: {
        en: "Score differential analysis means adjusting your risk tolerance based on whether you're ahead or behind. When ahead, play defensively; when behind, take risks to catch up or maximize spread.",
        es: "El análisis de diferencial de puntuación significa ajustar tu tolerancia al riesgo según si vas adelante o atrás. Cuando vas adelante, juega defensivamente; cuando vas atrás, toma riesgos para alcanzar o maximizar el diferencial.",
        de: "Punktedifferenz-Analyse bedeutet Ihre Risikotoleranz basierend darauf anzupassen ob Sie vorne oder hinten liegen. Wenn vorne, defensiv spielen; wenn hinten, Risiken eingehen um aufzuholen oder Spread zu maximieren.",
        nl: "Score differentieel analyse betekent je risicotolerantie aanpassen op basis van of je voor of achter staat. Wanneer voor, speel defensief; wanneer achter, neem risico's om in te halen of spread te maximaliseren."
      }
    },
    {
      question: {
        en: "What is 'perfect endgame play'?",
        es: "¿Qué es el 'juego perfecto del final'?",
        de: "Was ist 'perfektes Endspiel'?",
        nl: "Wat is 'perfect eindspel'?"
      },
      options: [
        {en: "Never making mistakes", es: "Nunca cometer errores", de: "Niemals Fehler machen", nl: "Nooit fouten maken"},
        {en: "Calculating all possible outcomes when few tiles remain", es: "Calcular todos los resultados posibles cuando quedan pocas fichas", de: "Alle möglichen Ergebnisse berechnen wenn wenige Steine verbleiben", nl: "Alle mogelijke uitkomsten berekenen wanneer weinig stenen overblijven"},
        {en: "Scoring maximum points", es: "Anotar puntos máximos", de: "Maximale Punkte erzielen", nl: "Maximum punten scoren"},
        {en: "Finishing quickly", es: "Terminar rápidamente", de: "Schnell beenden", nl: "Snel afmaken"}
      ],
      correct: 1,
      explanation: {
        en: "Perfect endgame play involves calculating all possible sequences when tiles are known (bag empty, opponent's rack inferred through tracking) to find the move guaranteeing the win or best result.",
        es: "El juego perfecto del final implica calcular todas las secuencias posibles cuando las fichas son conocidas (bolsa vacía, soporte del oponente inferido a través del rastreo) para encontrar el movimiento que garantiza la victoria o el mejor resultado.",
        de: "Perfektes Endspiel beinhaltet das Berechnen aller möglichen Sequenzen wenn Steine bekannt sind (Beutel leer, Rack des Gegners durch Verfolgung deduziert) um den Zug zu finden der den Sieg oder das beste Ergebnis garantiert.",
        nl: "Perfect eindspel houdt in dat alle mogelijke reeksen worden berekend wanneer stenen bekend zijn (zak leeg, rek van tegenstander afgeleid door volgen) om de zet te vinden die de overwinning of best resultaat garandeert."
      }
    },
    {
      question: {
        en: "What is 'pre-endgame awareness' in advanced play?",
        es: "¿Qué es la 'conciencia pre-final' en juego avanzado?",
        de: "Was ist 'Vor-Endspiel-Bewusstsein' im fortgeschrittenen Spiel?",
        nl: "Wat is 'pre-eindspel bewustzijn' in gevorderd spel?"
      },
      options: [
        {en: "Knowing game will end soon", es: "Saber que el juego terminará pronto", de: "Wissen dass Spiel bald endet", nl: "Weten dat spel binnenkort eindigt"},
        {en: "Adjusting strategy when 7 or fewer tiles remain unseen", es: "Ajustar estrategia cuando quedan 7 o menos fichas sin ver", de: "Strategie anpassen wenn 7 oder weniger Steine ungesehen bleiben", nl: "Strategie aanpassen wanneer 7 of minder stenen ongezien blijven"},
        {en: "Planning final move", es: "Planear movimiento final", de: "Letzten Zug planen", nl: "Laatste zet plannen"},
        {en: "Counting remaining tiles", es: "Contar fichas restantes", de: "Verbleibende Steine zählen", nl: "Resterende stenen tellen"}
      ],
      correct: 1,
      explanation: {
        en: "Pre-endgame awareness means recognizing when fewer than 7 unseen tiles remain (bag nearly empty) and adjusting strategy accordingly - tracking becomes crucial, play becomes more tactical.",
        es: "La conciencia pre-final significa reconocer cuando quedan menos de 7 fichas sin ver (bolsa casi vacía) y ajustar la estrategia en consecuencia - el rastreo se vuelve crucial, el juego se vuelve más táctico.",
        de: "Vor-Endspiel-Bewusstsein bedeutet zu erkennen wenn weniger als 7 ungesehene Steine verbleiben (Beutel fast leer) und die Strategie entsprechend anzupassen - Verfolgung wird entscheidend, Spiel wird taktischer.",
        nl: "Pre-eindspel bewustzijn betekent herkennen wanneer minder dan 7 ongeziene stenen overblijven (zak bijna leeg) en strategie dienovereenkomstig aanpassen - volgen wordt cruciaal, spel wordt tactischer."
      }
    }
  ]
};

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  } else if (typeof window !== 'undefined') {
    window.level5 = level5;
  }
})();
