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
      },
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
