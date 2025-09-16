// Music - Level 1: Music Fundamentals
(function() {
  const level1 = {
    name: {
      en: "Music Fundamentals",
      es: "Fundamentos de la Música",
      de: "Musikgrundlagen",
      nl: "Muziekfundamenten"
    },
    questions: [
      {
        question: {
          en: "How many notes are there in a chromatic scale?",
          es: "¿Cuántas notas hay en una escala cromática?",
          de: "Wie viele Noten gibt es in einer chromatischen Tonleiter?",
          nl: "Hoeveel noten zijn er in een chromatische toonladder?"
        },
        options: [
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "10", es: "10", de: "10", nl: "10" }
        ],
        correct: 0,
        explanation: {
          en: "A chromatic scale contains all 12 pitches within an octave, including both natural notes and sharps/flats.",
          es: "Una escala cromática contiene todas las 12 alturas dentro de una octava, incluyendo tanto notas naturales como sostenidos/bemoles.",
          de: "Eine chromatische Tonleiter enthält alle 12 Tonhöhen innerhalb einer Oktave, einschließlich natürlicher Noten und Kreuze/Bs.",
          nl: "Een chromatische toonladder bevat alle 12 toonhoogtes binnen een octaaf, inclusief zowel natuurlijke noten als kruizen/mollen."
        }
      },
      {
        question: {
          en: "What is the time signature of a waltz?",
          es: "¿Cuál es la signatura de tiempo de un vals?",
          de: "Was ist die Taktart eines Walzers?",
          nl: "Wat is de maatsoort van een wals?"
        },
        options: [
          { en: "3/4", es: "3/4", de: "3/4", nl: "3/4" },
          { en: "4/4", es: "4/4", de: "4/4", nl: "4/4" },
          { en: "2/4", es: "2/4", de: "2/4", nl: "2/4" },
          { en: "6/8", es: "6/8", de: "6/8", nl: "6/8" }
        ],
        correct: 0,
        explanation: {
          en: "A waltz is written in 3/4 time signature, with three quarter-note beats per measure, giving it its characteristic 'oom-pah-pah' rhythm.",
          es: "Un vals está escrito en compás de 3/4, con tres tiempos de negra por compás, dándole su ritmo característico de 'oom-pah-pah'.",
          de: "Ein Walzer ist in 3/4-Takt geschrieben, mit drei Viertelnoten-Schlägen pro Takt, was ihm seinen charakteristischen 'Oom-pah-pah'-Rhythmus verleiht.",
          nl: "Een wals is geschreven in 3/4 maatsoort, met drie kwartnoottikken per maat, wat het zijn karakteristieke 'oom-pah-pah' ritme geeft."
        }
      },
      {
        question: {
          en: "Which note is a whole step above C?",
          es: "¿Qué nota está un tono completo por encima de Do?",
          de: "Welche Note ist einen Ganzton über C?",
          nl: "Welke noot ligt een hele toon boven C?"
        },
        options: [
          { en: "D", es: "Re", de: "D", nl: "D" },
          { en: "C#", es: "Do#", de: "Cis", nl: "C#" },
          { en: "E", es: "Mi", de: "E", nl: "E" },
          { en: "B", es: "Si", de: "H", nl: "B" }
        ],
        correct: 0,
        explanation: {
          en: "A whole step (or whole tone) above C is D. A whole step consists of two semitones or half steps.",
          es: "Un tono completo por encima de Do es Re. Un tono completo consiste en dos semitonos o medios tonos.",
          de: "Ein Ganzton über C ist D. Ein Ganzton besteht aus zwei Halbtönen.",
          nl: "Een hele toon boven C is D. Een hele toon bestaat uit twee halve tonen of semitoontjes."
        }
      },
      {
        question: {
          en: "What does 'forte' mean in music?",
          es: "¿Qué significa 'forte' en música?",
          de: "Was bedeutet 'forte' in der Musik?",
          nl: "Wat betekent 'forte' in de muziek?"
        },
        options: [
          { en: "Loud", es: "Fuerte", de: "Laut", nl: "Luid" },
          { en: "Soft", es: "Suave", de: "Leise", nl: "Zacht" },
          { en: "Fast", es: "Rápido", de: "Schnell", nl: "Snel" },
          { en: "Slow", es: "Lento", de: "Langsam", nl: "Langzaam" }
        ],
        correct: 0,
        explanation: {
          en: "Forte (f) is an Italian musical term meaning 'loud' or 'strong', indicating a loud dynamic level.",
          es: "Forte (f) es un término musical italiano que significa 'fuerte' o 'potente', indicando un nivel dinámico alto.",
          de: "Forte (f) ist ein italienischer Musikbegriff, der 'laut' oder 'stark' bedeutet und eine laute Dynamikstufe anzeigt.",
          nl: "Forte (f) is een Italiaanse muziekterm die 'luid' of 'sterk' betekent, wat een luid dynamisch niveau aangeeft."
        }
      },
      {
        question: {
          en: "How many lines does a musical staff have?",
          es: "¿Cuántas líneas tiene un pentagrama musical?",
          de: "Wie viele Linien hat ein Notensystem?",
          nl: "Hoeveel lijnen heeft een notenbalk?"
        },
        options: [
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "7", es: "7", de: "7", nl: "7" }
        ],
        correct: 0,
        explanation: {
          en: "A musical staff consists of five horizontal lines, creating four spaces between them where notes can be placed.",
          es: "Un pentagrama musical consiste en cinco líneas horizontales, creando cuatro espacios entre ellas donde se pueden colocar las notas.",
          de: "Ein Notensystem besteht aus fünf horizontalen Linien, die vier Zwischenräume schaffen, in denen Noten platziert werden können.",
          nl: "Een notenbalk bestaat uit vijf horizontale lijnen, die vier ruimtes ertussen creëren waar noten kunnen worden geplaatst."
        }
      },
      {
        question: {
          en: "What is the relative minor of C major?",
          es: "¿Cuál es el relativo menor de Do mayor?",
          de: "Was ist die parallele Molltonart von C-Dur?",
          nl: "Wat is de parallelle mineur van C-majeur?"
        },
        options: [
          { en: "A minor", es: "La menor", de: "a-Moll", nl: "a-mineur" },
          { en: "C minor", es: "Do menor", de: "c-Moll", nl: "c-mineur" },
          { en: "F minor", es: "Fa menor", de: "f-Moll", nl: "f-mineur" },
          { en: "G minor", es: "Sol menor", de: "g-Moll", nl: "g-mineur" }
        ],
        correct: 0,
        explanation: {
          en: "The relative minor of C major is A minor. Both keys share the same notes but start from different tonal centers.",
          es: "El relativo menor de Do mayor es La menor. Ambas tonalidades comparten las mismas notas pero comienzan desde diferentes centros tonales.",
          de: "Die parallele Molltonart von C-Dur ist a-Moll. Beide Tonarten teilen dieselben Noten, beginnen aber von verschiedenen Tonzentren.",
          nl: "De parallelle mineur van C-majeur is a-mineur. Beide toonsoorten delen dezelfde noten maar beginnen vanuit verschillende tooncentra."
        }
      },
      {
        question: {
          en: "What note value receives one beat in 4/4 time?",
          es: "¿Qué valor de nota recibe un tiempo en compás de 4/4?",
          de: "Welcher Notenwert erhält einen Schlag im 4/4-Takt?",
          nl: "Welke nootwaarde krijgt één tel in 4/4 maatsoort?"
        },
        options: [
          { en: "Quarter note", es: "Negra", de: "Viertelnote", nl: "Kwartnoot" },
          { en: "Half note", es: "Blanca", de: "Halbe Note", nl: "Halve noot" },
          { en: "Whole note", es: "Redonda", de: "Ganze Note", nl: "Hele noot" },
          { en: "Eighth note", es: "Corchea", de: "Achtelnote", nl: "Achtste noot" }
        ],
        correct: 0,
        explanation: {
          en: "In 4/4 time signature, the quarter note receives one beat. The bottom number (4) indicates that a quarter note gets one beat.",
          es: "En compás de 4/4, la negra recibe un tiempo. El número inferior (4) indica que una negra obtiene un tiempo.",
          de: "Im 4/4-Takt erhält die Viertelnote einen Schlag. Die untere Zahl (4) zeigt an, dass eine Viertelnote einen Schlag bekommt.",
          nl: "In 4/4 maatsoort krijgt de kwartnoot één tel. Het onderste cijfer (4) geeft aan dat een kwartnoot één tel krijgt."
        }
      },
      {
        question: {
          en: "Which clef is most commonly used for treble instruments?",
          es: "¿Qué clave se usa más comúnmente para instrumentos agudos?",
          de: "Welcher Schlüssel wird am häufigsten für hohe Instrumente verwendet?",
          nl: "Welke sleutel wordt het meest gebruikt voor hoge instrumenten?"
        },
        options: [
          { en: "Treble clef", es: "Clave de Sol", de: "Violinschlüssel", nl: "Treble sleutel" },
          { en: "Bass clef", es: "Clave de Fa", de: "Bassschlüssel", nl: "Bas sleutel" },
          { en: "Alto clef", es: "Clave de Do", de: "Altschlüssel", nl: "Alt sleutel" },
          { en: "Tenor clef", es: "Clave de Do en cuarta", de: "Tenorschlüssel", nl: "Tenor sleutel" }
        ],
        correct: 0,
        explanation: {
          en: "The treble clef (G clef) is most commonly used for higher-pitched instruments and voices, indicating that the second line represents G above middle C.",
          es: "La clave de Sol se usa más comúnmente para instrumentos y voces de tono más agudo, indicando que la segunda línea representa Sol por encima del Do central.",
          de: "Der Violinschlüssel (G-Schlüssel) wird am häufigsten für höhere Instrumente und Stimmen verwendet und zeigt an, dass die zweite Linie das G über dem mittleren C darstellt.",
          nl: "De treble sleutel (G-sleutel) wordt het meest gebruikt voor hoger klinkende instrumenten en stemmen, wat aangeeft dat de tweede lijn de G boven midden-C voorstelt."
        }
      },
      {
        question: {
          en: "What is an interval of eight notes called?",
          es: "¿Cómo se llama un intervalo de ocho notas?",
          de: "Wie nennt man ein Intervall von acht Noten?",
          nl: "Hoe heet een interval van acht noten?"
        },
        options: [
          { en: "Octave", es: "Octava", de: "Oktave", nl: "Octaaf" },
          { en: "Fifth", es: "Quinta", de: "Quinte", nl: "Kwint" },
          { en: "Fourth", es: "Cuarta", de: "Quarte", nl: "Kwart" },
          { en: "Seventh", es: "Séptima", de: "Septime", nl: "Septiem" }
        ],
        correct: 0,
        explanation: {
          en: "An octave is an interval spanning eight note names, representing a doubling or halving of frequency.",
          es: "Una octava es un intervalo que abarca ocho nombres de notas, representando una duplicación o reducción a la mitad de la frecuencia.",
          de: "Eine Oktave ist ein Intervall, das acht Notennamen umspannt und eine Verdoppelung oder Halbierung der Frequenz darstellt.",
          nl: "Een octaaf is een interval dat acht nootnamen omspant, wat een verdubbeling of halvering van de frequentie vertegenwoordigt."
        }
      },
      {
        question: {
          en: "Which key signature has no sharps or flats?",
          es: "¿Qué armadura no tiene sostenidos ni bemoles?",
          de: "Welche Tonartvorzeichen hat keine Kreuze oder Bs?",
          nl: "Welke toonsoort heeft geen kruizen of mollen?"
        },
        options: [
          { en: "C major", es: "Do mayor", de: "C-Dur", nl: "C-majeur" },
          { en: "G major", es: "Sol mayor", de: "G-Dur", nl: "G-majeur" },
          { en: "F major", es: "Fa mayor", de: "F-Dur", nl: "F-majeur" },
          { en: "D major", es: "Re mayor", de: "D-Dur", nl: "D-majeur" }
        ],
        correct: 0,
        explanation: {
          en: "C major is the only major key that uses only natural notes (white keys on piano) with no sharps or flats in its key signature.",
          es: "Do mayor es la única tonalidad mayor que usa solo notas naturales (teclas blancas del piano) sin sostenidos o bemoles en su armadura.",
          de: "C-Dur ist die einzige Durtonart, die nur natürliche Töne (weiße Tasten am Klavier) ohne Kreuze oder Bs in ihrer Tonartvorzeichnung verwendet.",
          nl: "C-majeur is de enige majeur toonsoort die alleen natuurlijke noten (witte toetsen op piano) gebruikt zonder kruizen of mollen in de voortekening."
        }
      },
      {
        question: {
          en: "What is the term for gradually getting louder?",
          es: "¿Cuál es el término para volverse gradualmente más fuerte?",
          de: "Wie nennt man das allmähliche Lauter werden?",
          nl: "Wat is de term voor geleidelijk luider worden?"
        },
        options: [
          { en: "Crescendo", es: "Crescendo", de: "Crescendo", nl: "Crescendo" },
          { en: "Diminuendo", es: "Diminuendo", de: "Diminuendo", nl: "Diminuendo" },
          { en: "Accelerando", es: "Accelerando", de: "Accelerando", nl: "Accelerando" },
          { en: "Ritardando", es: "Ritardando", de: "Ritardando", nl: "Ritardando" }
        ],
        correct: 0,
        explanation: {
          en: "Crescendo is the musical term for gradually increasing in volume or intensity, often indicated by the symbol <.",
          es: "Crescendo es el término musical para aumentar gradualmente en volumen o intensidad, a menudo indicado por el símbolo <.",
          de: "Crescendo ist der musikalische Begriff für allmähliches Ansteigen in Lautstärke oder Intensität, oft durch das Symbol < angezeigt.",
          nl: "Crescendo is de muzikale term voor geleidelijk toenemen in volume of intensiteit, vaak aangegeven door het symbool <."
        }
      },
      {
        question: {
          en: "How many sharps are in the key of D major?",
          es: "¿Cuántos sostenidos hay en la tonalidad de Re mayor?",
          de: "Wie viele Kreuze hat die Tonart D-Dur?",
          nl: "Hoeveel kruizen heeft de toonsoort D-majeur?"
        },
        options: [
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "1", es: "1", de: "1", nl: "1" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" }
        ],
        correct: 0,
        explanation: {
          en: "D major has two sharps: F# and C#. These sharps appear in the key signature at the beginning of each staff.",
          es: "Re mayor tiene dos sostenidos: Fa# y Do#. Estos sostenidos aparecen en la armadura al comienzo de cada pentagrama.",
          de: "D-Dur hat zwei Kreuze: Fis und Cis. Diese Kreuze erscheinen in der Tonartvorzeichnung am Anfang jedes Notensystems.",
          nl: "D-majeur heeft twee kruizen: F# en C#. Deze kruizen verschijnen in de voortekening aan het begin van elke notenbalk."
        }
      },
      {
        question: {
          en: "What type of chord is built on the first degree of a major scale?",
          es: "¿Qué tipo de acorde se construye sobre el primer grado de una escala mayor?",
          de: "Welche Art von Akkord wird auf der ersten Stufe einer Durtonleiter aufgebaut?",
          nl: "Wat voor soort akkoord wordt gebouwd op de eerste graad van een majeur toonladder?"
        },
        options: [
          { en: "Major triad", es: "Tríada mayor", de: "Dur-Dreiklang", nl: "Majeur drieklanken" },
          { en: "Minor triad", es: "Tríada menor", de: "Moll-Dreiklang", nl: "Mineur drieklank" },
          { en: "Diminished triad", es: "Tríada disminuida", de: "Verminderter Dreiklang", nl: "Verminderde drieklank" },
          { en: "Augmented triad", es: "Tríada aumentada", de: "Übermäßiger Dreiklang", nl: "Overmatige drieklank" }
        ],
        correct: 0,
        explanation: {
          en: "The chord built on the first degree (tonic) of a major scale is a major triad, consisting of the root, major third, and perfect fifth.",
          es: "El acorde construido sobre el primer grado (tónica) de una escala mayor es una tríada mayor, que consiste en la fundamental, tercera mayor y quinta perfecta.",
          de: "Der Akkord, der auf der ersten Stufe (Tonika) einer Durtonleiter aufgebaut wird, ist ein Dur-Dreiklang, bestehend aus Grundton, großer Terz und reiner Quinte.",
          nl: "Het akkoord dat op de eerste graad (tonica) van een majeur toonladder wordt gebouwd is een majeur drieklank, bestaande uit de grondtoon, grote terts en reine kwint."
        }
      },
      {
        question: {
          en: "What is the distance between C and F?",
          es: "¿Cuál es la distancia entre Do y Fa?",
          de: "Was ist der Abstand zwischen C und F?",
          nl: "Wat is de afstand tussen C en F?"
        },
        options: [
          { en: "Perfect fourth", es: "Cuarta perfecta", de: "Reine Quarte", nl: "Reine kwart" },
          { en: "Major third", es: "Tercera mayor", de: "Große Terz", nl: "Grote terts" },
          { en: "Perfect fifth", es: "Quinta perfecta", de: "Reine Quinte", nl: "Reine kwint" },
          { en: "Minor third", es: "Tercera menor", de: "Kleine Terz", nl: "Kleine terts" }
        ],
        correct: 0,
        explanation: {
          en: "The interval from C to F is a perfect fourth, spanning four note names (C-D-E-F) and consisting of 5 semitones.",
          es: "El intervalo de Do a Fa es una cuarta perfecta, abarcando cuatro nombres de notas (Do-Re-Mi-Fa) y consistiendo en 5 semitonos.",
          de: "Das Intervall von C zu F ist eine reine Quarte, die vier Notennamen (C-D-E-F) umspannt und aus 5 Halbtönen besteht.",
          nl: "Het interval van C naar F is een reine kwart, die vier nootnamen (C-D-E-F) omspant en uit 5 halve tonen bestaat."
        }
      },
      {
        question: {
          en: "What does 'andante' mean as a tempo marking?",
          es: "¿Qué significa 'andante' como indicación de tempo?",
          de: "Was bedeutet 'andante' als Tempobezeichnung?",
          nl: "Wat betekent 'andante' als tempo-aanduiding?"
        },
        options: [
          { en: "Walking pace (moderately slow)", es: "Paso caminando (moderadamente lento)", de: "Gehgeschwindigkeit (mäßig langsam)", nl: "Wandeltempo (matig langzaam)" },
          { en: "Very fast", es: "Muy rápido", de: "Sehr schnell", nl: "Heel snel" },
          { en: "Very slow", es: "Muy lento", de: "Sehr langsam", nl: "Heel langzaam" },
          { en: "Lively and fast", es: "Animado y rápido", de: "Lebhaft und schnell", nl: "Levendig en snel" }
        ],
        correct: 0,
        explanation: {
          en: "Andante is Italian for 'going' or 'walking', indicating a moderately slow tempo, typically around 76-108 BPM.",
          es: "Andante es italiano para 'yendo' o 'caminando', indicando un tempo moderadamente lento, típicamente alrededor de 76-108 BPM.",
          de: "Andante ist italienisch für 'gehend' oder 'schreitend' und bezeichnet ein mäßig langsames Tempo, typischerweise um 76-108 BPM.",
          nl: "Andante is Italiaans voor 'gaand' of 'wandelend', wat een matig langzaam tempo aangeeft, typisch rond 76-108 BPM."
        }
      },
      {
        question: {
          en: "Which mode is built on the sixth degree of the major scale?",
          es: "¿Qué modo se construye sobre el sexto grado de la escala mayor?",
          de: "Welcher Modus wird auf der sechsten Stufe der Durtonleiter aufgebaut?",
          nl: "Welke modus wordt gebouwd op de zesde graad van de majeur toonladder?"
        },
        options: [
          { en: "Aeolian (natural minor)", es: "Eólico (menor natural)", de: "Äolisch (natürliches Moll)", nl: "Aeolisch (natuurlijke mineur)" },
          { en: "Dorian", es: "Dórico", de: "Dorisch", nl: "Dorisch" },
          { en: "Phrygian", es: "Frigio", de: "Phrygisch", nl: "Frygisch" },
          { en: "Lydian", es: "Lidio", de: "Lydisch", nl: "Lydisch" }
        ],
        correct: 0,
        explanation: {
          en: "The Aeolian mode, built on the sixth degree of the major scale, is identical to the natural minor scale.",
          es: "El modo eólico, construido sobre el sexto grado de la escala mayor, es idéntico a la escala menor natural.",
          de: "Der äolische Modus, der auf der sechsten Stufe der Durtonleiter aufgebaut wird, ist identisch mit der natürlichen Molltonleiter.",
          nl: "De Aeolische modus, gebouwd op de zesde graad van de majeur toonladder, is identiek aan de natuurlijke mineur toonladder."
        }
      },
      {
        question: {
          en: "What is a dotted half note worth in 4/4 time?",
          es: "¿Cuánto vale una blanca con puntillo en compás de 4/4?",
          de: "Was ist eine punktierte halbe Note im 4/4-Takt wert?",
          nl: "Wat is een gepuncteerde halve noot waard in 4/4 maatsoort?"
        },
        options: [
          { en: "3 beats", es: "3 tiempos", de: "3 Schläge", nl: "3 tellen" },
          { en: "2 beats", es: "2 tiempos", de: "2 Schläge", nl: "2 tellen" },
          { en: "4 beats", es: "4 tiempos", de: "4 Schläge", nl: "4 tellen" },
          { en: "1 beat", es: "1 tiempo", de: "1 Schlag", nl: "1 tel" }
        ],
        correct: 0,
        explanation: {
          en: "A dotted half note is worth 3 beats in 4/4 time. The dot adds half the value of the original note (2 + 1 = 3 beats).",
          es: "Una blanca con puntillo vale 3 tiempos en compás de 4/4. El puntillo añade la mitad del valor de la nota original (2 + 1 = 3 tiempos).",
          de: "Eine punktierte halbe Note ist 3 Schläge im 4/4-Takt wert. Der Punkt fügt die Hälfte des Wertes der ursprünglichen Note hinzu (2 + 1 = 3 Schläge).",
          nl: "Een gepuncteerde halve noot is 3 tellen waard in 4/4 maatsoort. De punt voegt de helft van de waarde van de originele noot toe (2 + 1 = 3 tellen)."
        }
      },
      {
        question: {
          en: "What is the dominant chord in the key of C major?",
          es: "¿Cuál es el acorde dominante en la tonalidad de Do mayor?",
          de: "Was ist der Dominantakkord in der Tonart C-Dur?",
          nl: "Wat is het dominante akkoord in de toonsoort C-majeur?"
        },
        options: [
          { en: "G major", es: "Sol mayor", de: "G-Dur", nl: "G-majeur" },
          { en: "F major", es: "Fa mayor", de: "F-Dur", nl: "F-majeur" },
          { en: "A minor", es: "La menor", de: "a-Moll", nl: "a-mineur" },
          { en: "D minor", es: "Re menor", de: "d-Moll", nl: "d-mineur" }
        ],
        correct: 0,
        explanation: {
          en: "The dominant chord is built on the fifth degree of the scale. In C major, the fifth degree is G, making G major the dominant chord.",
          es: "El acorde dominante se construye sobre el quinto grado de la escala. En Do mayor, el quinto grado es Sol, haciendo de Sol mayor el acorde dominante.",
          de: "Der Dominantakkord wird auf der fünften Stufe der Tonleiter aufgebaut. In C-Dur ist die fünfte Stufe G, wodurch G-Dur der Dominantakkord wird.",
          nl: "Het dominante akkoord wordt gebouwd op de vijfde graad van de toonladder. In C-majeur is de vijfde graad G, waardoor G-majeur het dominante akkoord wordt."
        }
      },
      {
        question: {
          en: "Which rest is equivalent to a quarter note in duration?",
          es: "¿Qué silencio equivale en duración a una negra?",
          de: "Welche Pause entspricht einer Viertelnote in der Dauer?",
          nl: "Welke rust is gelijk in duur aan een kwartnoot?"
        },
        options: [
          { en: "Quarter rest", es: "Silencio de negra", de: "Viertelpause", nl: "Kwartrust" },
          { en: "Half rest", es: "Silencio de blanca", de: "Halbe Pause", nl: "Halve rust" },
          { en: "Whole rest", es: "Silencio de redonda", de: "Ganze Pause", nl: "Hele rust" },
          { en: "Eighth rest", es: "Silencio de corchea", de: "Achtelpause", nl: "Achtste rust" }
        ],
        correct: 0,
        explanation: {
          en: "A quarter rest has the same duration as a quarter note - one beat in 4/4 time. Rests represent silence for the specified duration.",
          es: "Un silencio de negra tiene la misma duración que una negra - un tiempo en compás de 4/4. Los silencios representan silencio durante la duración especificada.",
          de: "Eine Viertelpause hat dieselbe Dauer wie eine Viertelnote - einen Schlag im 4/4-Takt. Pausen stellen Stille für die angegebene Dauer dar.",
          nl: "Een kwartrust heeft dezelfde duur als een kwartnoot - één tel in 4/4 maatsoort. Rusten vertegenwoordigen stilte voor de gespecificeerde duur."
        }
      },
      {
        question: {
          en: "What is the term for two or more notes played simultaneously?",
          es: "¿Cuál es el término para dos o más notas tocadas simultáneamente?",
          de: "Wie nennt man zwei oder mehr gleichzeitig gespielte Noten?",
          nl: "Wat is de term voor twee of meer noten die tegelijkertijd gespeeld worden?"
        },
        options: [
          { en: "Chord", es: "Acorde", de: "Akkord", nl: "Akkoord" },
          { en: "Scale", es: "Escala", de: "Tonleiter", nl: "Toonladder" },
          { en: "Arpeggio", es: "Arpegio", de: "Arpeggio", nl: "Arpeggio" },
          { en: "Melody", es: "Melodía", de: "Melodie", nl: "Melodie" }
        ],
        correct: 0,
        explanation: {
          en: "A chord is a combination of two or more different notes played simultaneously, creating harmony.",
          es: "Un acorde es una combinación de dos o más notas diferentes tocadas simultáneamente, creando armonía.",
          de: "Ein Akkord ist eine Kombination aus zwei oder mehr verschiedenen Noten, die gleichzeitig gespielt werden und Harmonie erzeugen.",
          nl: "Een akkoord is een combinatie van twee of meer verschillende noten die tegelijkertijd gespeeld worden, waardoor harmonie ontstaat."
        }
      },
      {
        question: {
          en: "What does 'pianissimo' mean?",
          es: "¿Qué significa 'pianissimo'?",
          de: "Was bedeutet 'pianissimo'?",
          nl: "Wat betekent 'pianissimo'?"
        },
        options: [
          { en: "Very soft", es: "Muy suave", de: "Sehr leise", nl: "Heel zacht" },
          { en: "Very loud", es: "Muy fuerte", de: "Sehr laut", nl: "Heel luid" },
          { en: "Moderately soft", es: "Moderadamente suave", de: "Mäßig leise", nl: "Matig zacht" },
          { en: "Moderately loud", es: "Moderadamente fuerte", de: "Mäßig laut", nl: "Matig luid" }
        ],
        correct: 0,
        explanation: {
          en: "Pianissimo (pp) means 'very soft' or 'very quiet', representing the softest commonly used dynamic level in music.",
          es: "Pianissimo (pp) significa 'muy suave' o 'muy silencioso', representando el nivel dinámico más suave comúnmente usado en música.",
          de: "Pianissimo (pp) bedeutet 'sehr leise' oder 'sehr still' und stellt die leiseste häufig verwendete Dynamikstufe in der Musik dar.",
          nl: "Pianissimo (pp) betekent 'heel zacht' of 'heel stil', en vertegenwoordigt het zachtste algemeen gebruikte dynamische niveau in muziek."
        }
      },
      {
        question: {
          en: "How many flats are in the key of F major?",
          es: "¿Cuántos bemoles hay en la tonalidad de Fa mayor?",
          de: "Wie viele Bs hat die Tonart F-Dur?",
          nl: "Hoeveel mollen heeft de toonsoort F-majeur?"
        },
        options: [
          { en: "1", es: "1", de: "1", nl: "1" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "0", es: "0", de: "0", nl: "0" },
          { en: "3", es: "3", de: "3", nl: "3" }
        ],
        correct: 0,
        explanation: {
          en: "F major has one flat: B♭. This flat appears in the key signature and affects all B notes in the piece.",
          es: "Fa mayor tiene un bemol: Si♭. Este bemol aparece en la armadura y afecta todas las notas Si en la pieza.",
          de: "F-Dur hat ein B: B♭. Dieses B erscheint in der Tonartvorzeichnung und betrifft alle H-Noten im Stück.",
          nl: "F-majeur heeft één mol: B♭. Deze mol verschijnt in de voortekening en beïnvloedt alle B-noten in het stuk."
        }
      },
      {
        question: {
          en: "What is the subdominant chord in C major?",
          es: "¿Cuál es el acorde subdominante en Do mayor?",
          de: "Was ist der Subdominantakkord in C-Dur?",
          nl: "Wat is het subdominante akkoord in C-majeur?"
        },
        options: [
          { en: "F major", es: "Fa mayor", de: "F-Dur", nl: "F-majeur" },
          { en: "G major", es: "Sol mayor", de: "G-Dur", nl: "G-majeur" },
          { en: "A minor", es: "La menor", de: "a-Moll", nl: "a-mineur" },
          { en: "E minor", es: "Mi menor", de: "e-Moll", nl: "e-mineur" }
        ],
        correct: 0,
        explanation: {
          en: "The subdominant chord is built on the fourth degree of the scale. In C major, the fourth degree is F, making F major the subdominant chord.",
          es: "El acorde subdominante se construye sobre el cuarto grado de la escala. En Do mayor, el cuarto grado es Fa, haciendo de Fa mayor el acorde subdominante.",
          de: "Der Subdominantakkord wird auf der vierten Stufe der Tonleiter aufgebaut. In C-Dur ist die vierte Stufe F, wodurch F-Dur der Subdominantakkord wird.",
          nl: "Het subdominante akkoord wordt gebouwd op de vierde graad van de toonladder. In C-majeur is de vierde graad F, waardoor F-majeur het subdominante akkoord wordt."
        }
      },
      {
        question: {
          en: "What is the term for the speed of music?",
          es: "¿Cuál es el término para la velocidad de la música?",
          de: "Wie nennt man die Geschwindigkeit der Musik?",
          nl: "Wat is de term voor de snelheid van muziek?"
        },
        options: [
          { en: "Tempo", es: "Tempo", de: "Tempo", nl: "Tempo" },
          { en: "Dynamics", es: "Dinámicas", de: "Dynamik", nl: "Dynamiek" },
          { en: "Pitch", es: "Tono", de: "Tonhöhe", nl: "Toonhoogte" },
          { en: "Timbre", es: "Timbre", de: "Klangfarbe", nl: "Timbre" }
        ],
        correct: 0,
        explanation: {
          en: "Tempo refers to the speed or pace of music, usually measured in beats per minute (BPM) or indicated by Italian terms like allegro or adagio.",
          es: "Tempo se refiere a la velocidad o ritmo de la música, usualmente medido en latidos por minuto (BPM) o indicado por términos italianos como allegro o adagio.",
          de: "Tempo bezieht sich auf die Geschwindigkeit oder das Tempo der Musik, normalerweise in Schlägen pro Minute (BPM) gemessen oder durch italienische Begriffe wie Allegro oder Adagio angegeben.",
          nl: "Tempo verwijst naar de snelheid of het tempo van muziek, meestal gemeten in slagen per minuut (BPM) of aangegeven door Italiaanse termen zoals allegro of adagio."
        }
      },
      {
        question: {
          en: "Which interval is known as the 'devil's interval' or tritone?",
          es: "¿Qué intervalo se conoce como el 'intervalo del diablo' o tritono?",
          de: "Welches Intervall ist als 'Teufelsintervall' oder Tritonus bekannt?",
          nl: "Welk interval staat bekend als het 'duivelsinterval' of tritone?"
        },
        options: [
          { en: "Augmented fourth", es: "Cuarta aumentada", de: "Übermäßige Quarte", nl: "Overmatige kwart" },
          { en: "Perfect fifth", es: "Quinta perfecta", de: "Reine Quinte", nl: "Reine kwint" },
          { en: "Major third", es: "Tercera mayor", de: "Große Terz", nl: "Grote terts" },
          { en: "Minor seventh", es: "Séptima menor", de: "Kleine Septime", nl: "Kleine septiem" }
        ],
        correct: 0,
        explanation: {
          en: "The augmented fourth (or diminished fifth) spans exactly three whole tones (tritone) and was historically considered dissonant and avoided.",
          es: "La cuarta aumentada (o quinta disminuida) abarca exactamente tres tonos completos (tritono) y históricamente se consideraba disonante y se evitaba.",
          de: "Die übermäßige Quarte (oder verminderte Quinte) umspannt genau drei Ganztöne (Tritonus) und wurde historisch als dissonant betrachtet und vermieden.",
          nl: "De overmatige kwart (of verminderde kwint) omspant precies drie hele tonen (tritone) en werd historisch gezien als dissonant en vermeden."
        }
      },
      {
        question: {
          en: "What is the natural minor scale pattern in terms of whole and half steps?",
          es: "¿Cuál es el patrón de la escala menor natural en términos de tonos y semitonos?",
          de: "Was ist das natürliche Moll-Tonleiter-Muster in Bezug auf Ganz- und Halbtonschritte?",
          nl: "Wat is het natuurlijke mineur toonladderpatroon in termen van hele en halve stappen?"
        },
        options: [
          { en: "W-H-W-W-H-W-W", es: "T-S-T-T-S-T-T", de: "G-H-G-G-H-G-G", nl: "H-½-H-H-½-H-H" },
          { en: "W-W-H-W-W-W-H", es: "T-T-S-T-T-T-S", de: "G-G-H-G-G-G-H", nl: "H-H-½-H-H-H-½" },
          { en: "H-W-W-H-W-W-W", es: "S-T-T-S-T-T-T", de: "H-G-G-H-G-G-G", nl: "½-H-H-½-H-H-H" },
          { en: "W-W-W-H-W-W-H", es: "T-T-T-S-T-T-S", de: "G-G-G-H-G-G-H", nl: "H-H-H-½-H-H-½" }
        ],
        correct: 0,
        explanation: {
          en: "The natural minor scale follows the pattern W-H-W-W-H-W-W (whole step, half step, whole step, whole step, half step, whole step, whole step).",
          es: "La escala menor natural sigue el patrón T-S-T-T-S-T-T (tono, semitono, tono, tono, semitono, tono, tono).",
          de: "Die natürliche Molltonleiter folgt dem Muster G-H-G-G-H-G-G (Ganzton, Halbton, Ganzton, Ganzton, Halbton, Ganzton, Ganzton).",
          nl: "De natuurlijke mineur toonladder volgt het patroon H-½-H-H-½-H-H (hele stap, halve stap, hele stap, hele stap, halve stap, hele stap, hele stap)."
        }
      },
      {
        question: {
          en: "Which chord tone creates the major or minor quality of a triad?",
          es: "¿Qué nota del acorde crea la calidad mayor o menor de una tríada?",
          de: "Welcher Akkordton erzeugt die Dur- oder Mollqualität eines Dreiklangs?",
          nl: "Welke akkoordtoon creëert de majeur of mineur kwaliteit van een drieklank?"
        },
        options: [
          { en: "The third", es: "La tercera", de: "Die Terz", nl: "De terts" },
          { en: "The fifth", es: "La quinta", de: "Die Quinte", nl: "De kwint" },
          { en: "The root", es: "La fundamental", de: "Der Grundton", nl: "De grondtoon" },
          { en: "The seventh", es: "La séptima", de: "Die Septime", nl: "De septiem" }
        ],
        correct: 0,
        explanation: {
          en: "The third of a triad determines whether it's major or minor. A major third creates a major chord, while a minor third creates a minor chord.",
          es: "La tercera de una tríada determina si es mayor o menor. Una tercera mayor crea un acorde mayor, mientras que una tercera menor crea un acorde menor.",
          de: "Die Terz eines Dreiklangs bestimmt, ob er Dur oder Moll ist. Eine große Terz erzeugt einen Dur-Akkord, während eine kleine Terz einen Moll-Akkord erzeugt.",
          nl: "De terts van een drieklank bepaalt of het majeur of mineur is. Een grote terts creëert een majeur akkoord, terwijl een kleine terts een mineur akkoord creëert."
        }
      },
      {
        question: {
          en: "What does 'staccato' mean in musical notation?",
          es: "¿Qué significa 'staccato' en notación musical?",
          de: "Was bedeutet 'staccato' in der Musiknotation?",
          nl: "Wat betekent 'staccato' in muzieknotatie?"
        },
        options: [
          { en: "Short and detached", es: "Corto y separado", de: "Kurz und abgestoßen", nl: "Kort en losgemaakt" },
          { en: "Smooth and connected", es: "Suave y conectado", de: "Glatt und verbunden", nl: "Glad en verbonden" },
          { en: "Loud and forceful", es: "Fuerte y enérgico", de: "Laut und kraftvoll", nl: "Luid en krachtig" },
          { en: "Soft and gentle", es: "Suave y gentil", de: "Sanft und zart", nl: "Zacht en zachtaardig" }
        ],
        correct: 0,
        explanation: {
          en: "Staccato, indicated by a dot above or below the note, means to play the note short and detached, with clear separation between notes.",
          es: "Staccato, indicado por un punto arriba o abajo de la nota, significa tocar la nota corta y separada, con clara separación entre las notas.",
          de: "Staccato, durch einen Punkt über oder unter der Note angezeigt, bedeutet die Note kurz und abgestoßen zu spielen, mit klarer Trennung zwischen den Noten.",
          nl: "Staccato, aangegeven door een punt boven of onder de noot, betekent de noot kort en losgemaakt te spelen, met duidelijke scheiding tussen noten."
        }
      },
      {
        question: {
          en: "What is the leading tone in the key of C major?",
          es: "¿Cuál es la sensible en la tonalidad de Do mayor?",
          de: "Was ist der Leitton in der Tonart C-Dur?",
          nl: "Wat is de leidtoon in de toonsoort C-majeur?"
        },
        options: [
          { en: "B", es: "Si", de: "H", nl: "B" },
          { en: "G", es: "Sol", de: "G", nl: "G" },
          { en: "F", es: "Fa", de: "F", nl: "F" },
          { en: "A", es: "La", de: "A", nl: "A" }
        ],
        correct: 0,
        explanation: {
          en: "The leading tone is the seventh degree of the major scale. In C major, this is B, which has a strong tendency to resolve up to C.",
          es: "La sensible es el séptimo grado de la escala mayor. En Do mayor, esto es Si, que tiene una fuerte tendencia a resolver hacia Do.",
          de: "Der Leitton ist die siebte Stufe der Durtonleiter. In C-Dur ist dies H, das eine starke Tendenz hat, nach C aufzulösen.",
          nl: "De leidtoon is de zevende graad van de majeur toonladder. In C-majeur is dit B, dat een sterke neiging heeft om op te lossen naar C."
        }
      },
      {
        question: {
          en: "How many eighth notes equal one quarter note?",
          es: "¿Cuántas corcheas equivalen a una negra?",
          de: "Wie viele Achtelnoten entsprechen einer Viertelnote?",
          nl: "Hoeveel achtste noten zijn gelijk aan één kwartnoot?"
        },
        options: [
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "1", es: "1", de: "1", nl: "1" },
          { en: "3", es: "3", de: "3", nl: "3" }
        ],
        correct: 0,
        explanation: {
          en: "Two eighth notes equal one quarter note in duration. Each eighth note is half the value of a quarter note.",
          es: "Dos corcheas equivalen a una negra en duración. Cada corchea es la mitad del valor de una negra.",
          de: "Zwei Achtelnoten entsprechen einer Viertelnote in der Dauer. Jede Achtelnote ist die Hälfte des Wertes einer Viertelnote.",
          nl: "Twee achtste noten zijn gelijk aan één kwartnoot in duur. Elke achtste noot is de helft van de waarde van een kwartnoot."
        }
      },
      {
        question: {
          en: "What is the term for gradually getting slower?",
          es: "¿Cuál es el término para volverse gradualmente más lento?",
          de: "Wie nennt man das allmähliche Langsamer werden?",
          nl: "Wat is de term voor geleidelijk langzamer worden?"
        },
        options: [
          { en: "Ritardando", es: "Ritardando", de: "Ritardando", nl: "Ritardando" },
          { en: "Accelerando", es: "Accelerando", de: "Accelerando", nl: "Accelerando" },
          { en: "Crescendo", es: "Crescendo", de: "Crescendo", nl: "Crescendo" },
          { en: "Diminuendo", es: "Diminuendo", de: "Diminuendo", nl: "Diminuendo" }
        ],
        correct: 0,
        explanation: {
          en: "Ritardando (or 'rit.') is the musical term for gradually slowing down the tempo.",
          es: "Ritardando (o 'rit.') es el término musical para reducir gradualmente el tempo.",
          de: "Ritardando (oder 'rit.') ist der musikalische Begriff für allmähliches Verlangsamen des Tempos.",
          nl: "Ritardando (of 'rit.') is de muzikale term voor geleidelijk vertragen van het tempo."
        }
      },
      {
        question: {
          en: "What type of scale uses only the black keys on a piano?",
          es: "¿Qué tipo de escala usa solo las teclas negras de un piano?",
          de: "Welche Art von Tonleiter verwendet nur die schwarzen Tasten eines Klaviers?",
          nl: "Wat voor soort toonladder gebruikt alleen de zwarte toetsen van een piano?"
        },
        options: [
          { en: "Pentatonic scale", es: "Escala pentatónica", de: "Pentatonische Tonleiter", nl: "Pentatonische toonladder" },
          { en: "Chromatic scale", es: "Escala cromática", de: "Chromatische Tonleiter", nl: "Chromatische toonladder" },
          { en: "Major scale", es: "Escala mayor", de: "Durtonleiter", nl: "Majeur toonladder" },
          { en: "Minor scale", es: "Escala menor", de: "Molltonleiter", nl: "Mineur toonladder" }
        ],
        correct: 0,
        explanation: {
          en: "The pentatonic scale can be played using only the black keys on a piano (G♭, A♭, B♭, D♭, E♭), creating a five-note scale.",
          es: "La escala pentatónica se puede tocar usando solo las teclas negras de un piano (Sol♭, La♭, Si♭, Re♭, Mi♭), creando una escala de cinco notas.",
          de: "Die pentatonische Tonleiter kann nur mit den schwarzen Tasten eines Klaviers gespielt werden (Ges, As, Bb, Des, Es), wodurch eine fünftönige Tonleiter entsteht.",
          nl: "De pentatonische toonladder kan worden gespeeld met alleen de zwarte toetsen van een piano (G♭, A♭, B♭, D♭, E♭), wat een vijf-noten toonladder creëert."
        }
      },
      {
        question: {
          en: "What is the name for the distance between two notes of the same letter name?",
          es: "¿Cómo se llama la distancia entre dos notas del mismo nombre de letra?",
          de: "Wie nennt man den Abstand zwischen zwei Noten desselben Buchstabennamens?",
          nl: "Wat is de naam voor de afstand tussen twee noten met dezelfde letternaam?"
        },
        options: [
          { en: "Octave", es: "Octava", de: "Oktave", nl: "Octaaf" },
          { en: "Unison", es: "Unísono", de: "Einklang", nl: "Unisono" },
          { en: "Perfect fifth", es: "Quinta perfecta", de: "Reine Quinte", nl: "Reine kwint" },
          { en: "Major scale", es: "Escala mayor", de: "Durtonleiter", nl: "Majeur toonladder" }
        ],
        correct: 0,
        explanation: {
          en: "An octave is the interval between two notes of the same letter name, representing a doubling or halving of frequency.",
          es: "Una octava es el intervalo entre dos notas del mismo nombre de letra, representando una duplicación o reducción a la mitad de la frecuencia.",
          de: "Eine Oktave ist das Intervall zwischen zwei Noten desselben Buchstabennamens und stellt eine Verdoppelung oder Halbierung der Frequenz dar.",
          nl: "Een octaaf is het interval tussen twee noten met dezelfde letternaam, wat een verdubbeling of halvering van de frequentie vertegenwoordigt."
        }
      },
      {
        question: {
          en: "Which dynamic marking means 'medium loud'?",
          es: "¿Qué marca de dinámica significa 'medianamente fuerte'?",
          de: "Welche Dynamikbezeichnung bedeutet 'mittellaut'?",
          nl: "Welke dynamische aanduiding betekent 'matig luid'?"
        },
        options: [
          { en: "Mezzo forte (mf)", es: "Mezzo forte (mf)", de: "Mezzo forte (mf)", nl: "Mezzo forte (mf)" },
          { en: "Forte (f)", es: "Forte (f)", de: "Forte (f)", nl: "Forte (f)" },
          { en: "Piano (p)", es: "Piano (p)", de: "Piano (p)", nl: "Piano (p)" },
          { en: "Fortissimo (ff)", es: "Fortissimo (ff)", de: "Fortissimo (ff)", nl: "Fortissimo (ff)" }
        ],
        correct: 0,
        explanation: {
          en: "Mezzo forte (mf) means 'medium loud' or 'moderately loud', representing a dynamic level between piano and forte.",
          es: "Mezzo forte (mf) significa 'medianamente fuerte' o 'moderadamente fuerte', representando un nivel dinámico entre piano y forte.",
          de: "Mezzo forte (mf) bedeutet 'mittellaut' oder 'mäßig laut' und stellt eine Dynamikstufe zwischen Piano und Forte dar.",
          nl: "Mezzo forte (mf) betekent 'matig luid' of 'gematigd luid', wat een dynamisch niveau tussen piano en forte vertegenwoordigt."
        }
      },
      {
        question: {
          en: "What is the first note of a scale called?",
          es: "¿Cómo se llama la primera nota de una escala?",
          de: "Wie nennt man die erste Note einer Tonleiter?",
          nl: "Hoe heet de eerste noot van een toonladder?"
        },
        options: [
          { en: "Tonic", es: "Tónica", de: "Tonika", nl: "Tonica" },
          { en: "Dominant", es: "Dominante", de: "Dominante", nl: "Dominant" },
          { en: "Subdominant", es: "Subdominante", de: "Subdominante", nl: "Subdominant" },
          { en: "Leading tone", es: "Sensible", de: "Leitton", nl: "Leidtoon" }
        ],
        correct: 0,
        explanation: {
          en: "The tonic is the first note of a scale and serves as the home base or tonal center around which the music gravitates.",
          es: "La tónica es la primera nota de una escala y sirve como base o centro tonal alrededor del cual gravita la música.",
          de: "Die Tonika ist die erste Note einer Tonleiter und dient als Heimatbasis oder Tonzentrum, um das die Musik kreist.",
          nl: "De tonica is de eerste noot van een toonladder en dient als thuisbasis of tooncentrum waarrond de muziek draait."
        }
      },
      {
        question: {
          en: "What is the term for music written in a minor key that sounds sad or melancholic?",
          es: "¿Cuál es el término para música escrita en una tonalidad menor que suena triste o melancólica?",
          de: "Wie nennt man Musik, die in einer Molltonart geschrieben ist und traurig oder melancholisch klingt?",
          nl: "Wat is de term voor muziek geschreven in een mineur toonsoort die triest of melancholiek klinkt?"
        },
        options: [
          { en: "Minor mode", es: "Modo menor", de: "Moll-Modus", nl: "Mineur modus" },
          { en: "Major mode", es: "Modo mayor", de: "Dur-Modus", nl: "Majeur modus" },
          { en: "Chromatic mode", es: "Modo cromático", de: "Chromatischer Modus", nl: "Chromatische modus" },
          { en: "Pentatonic mode", es: "Modo pentatónico", de: "Pentatonischer Modus", nl: "Pentatonische modus" }
        ],
        correct: 0,
        explanation: {
          en: "Minor mode refers to music based on minor scales, which typically creates a darker, more somber, or melancholic sound compared to major mode.",
          es: "El modo menor se refiere a música basada en escalas menores, que típicamente crea un sonido más oscuro, más sombrío o melancólico comparado con el modo mayor.",
          de: "Der Moll-Modus bezieht sich auf Musik, die auf Molltonleitern basiert und typischerweise einen dunkleren, düstereren oder melancholischeren Klang als der Dur-Modus erzeugt.",
          nl: "Mineur modus verwijst naar muziek gebaseerd op mineur toonladders, wat typisch een donkerder, somberder of melancholiek geluid creëert vergeleken met majeur modus."
        }
      },
      {
        question: {
          en: "How many beats does a whole note receive in 4/4 time?",
          es: "¿Cuántos tiempos recibe una redonda en compás de 4/4?",
          de: "Wie viele Schläge erhält eine ganze Note im 4/4-Takt?",
          nl: "Hoeveel tellen krijgt een hele noot in 4/4 maatsoort?"
        },
        options: [
          { en: "4 beats", es: "4 tiempos", de: "4 Schläge", nl: "4 tellen" },
          { en: "2 beats", es: "2 tiempos", de: "2 Schläge", nl: "2 tellen" },
          { en: "1 beat", es: "1 tiempo", de: "1 Schlag", nl: "1 tel" },
          { en: "3 beats", es: "3 tiempos", de: "3 Schläge", nl: "3 tellen" }
        ],
        correct: 0,
        explanation: {
          en: "A whole note receives 4 beats in 4/4 time, filling the entire measure. It's the longest standard note value.",
          es: "Una redonda recibe 4 tiempos en compás de 4/4, llenando todo el compás. Es el valor de nota estándar más largo.",
          de: "Eine ganze Note erhält 4 Schläge im 4/4-Takt und füllt den gesamten Takt aus. Es ist der längste Standardnotenwert.",
          nl: "Een hele noot krijgt 4 tellen in 4/4 maatsoort, wat de hele maat vult. Het is de langste standaard nootwaarde."
        }
      },
      {
        question: {
          en: "What is the term for the highness or lowness of a musical sound?",
          es: "¿Cuál es el término para la altura o gravedad de un sonido musical?",
          de: "Wie nennt man die Höhe oder Tiefe eines musikalischen Klangs?",
          nl: "Wat is de term voor de hoogte of laagte van een muzikaal geluid?"
        },
        options: [
          { en: "Pitch", es: "Tono", de: "Tonhöhe", nl: "Toonhoogte" },
          { en: "Dynamics", es: "Dinámicas", de: "Dynamik", nl: "Dynamiek" },
          { en: "Tempo", es: "Tempo", de: "Tempo", nl: "Tempo" },
          { en: "Timbre", es: "Timbre", de: "Klangfarbe", nl: "Timbre" }
        ],
        correct: 0,
        explanation: {
          en: "Pitch refers to the perceived highness or lowness of a musical sound, determined by the frequency of the sound waves.",
          es: "El tono se refiere a la altura o gravedad percibida de un sonido musical, determinada por la frecuencia de las ondas sonoras.",
          de: "Tonhöhe bezieht sich auf die wahrgenommene Höhe oder Tiefe eines musikalischen Klangs, bestimmt durch die Frequenz der Schallwellen.",
          nl: "Toonhoogte verwijst naar de waargenomen hoogte of laagte van een muzikaal geluid, bepaald door de frequentie van de geluidsgolven."
        }
      },
      {
        question: {
          en: "What does the term 'forte' mean in music?",
          es: "¿Qué significa el término 'forte' en música?",
          de: "Was bedeutet der Begriff 'forte' in der Musik?",
          nl: "Wat betekent de term 'forte' in muziek?"
        },
        options: [
          { en: "Loud", es: "Fuerte", de: "Laut", nl: "Luid" },
          { en: "Soft", es: "Suave", de: "Leise", nl: "Zacht" },
          { en: "Fast", es: "Rápido", de: "Schnell", nl: "Snel" },
          { en: "Slow", es: "Lento", de: "Langsam", nl: "Langzaam" }
        ],
        correct: 0,
        explanation: {
          en: "Forte (f) is a dynamic marking that indicates music should be played loudly or with strength.",
          es: "Forte (f) es una indicación dinámica que significa que la música debe tocarse fuerte o con fuerza.",
          de: "Forte (f) ist eine dynamische Bezeichnung, die anzeigt, dass Musik laut oder kraftvoll gespielt werden soll.",
          nl: "Forte (f) is een dynamische aanduiding die betekent dat muziek luid of krachtig gespeeld moet worden."
        }
      },
      {
        question: {
          en: "What is the distance between two identical pitches called?",
          es: "¿Cómo se llama la distancia entre dos tonos idénticos?",
          de: "Wie nennt man den Abstand zwischen zwei identischen Tonhöhen?",
          nl: "Hoe heet de afstand tussen twee identieke toonhoogtes?"
        },
        options: [
          { en: "Octave", es: "Octava", de: "Oktave", nl: "Octaaf" },
          { en: "Fifth", es: "Quinta", de: "Quinte", nl: "Kwint" },
          { en: "Fourth", es: "Cuarta", de: "Quarte", nl: "Kwart" },
          { en: "Third", es: "Tercera", de: "Terz", nl: "Terts" }
        ],
        correct: 0,
        explanation: {
          en: "An octave is the interval between two pitches where one has twice the frequency of the other. They sound identical but at different pitch levels.",
          es: "Una octava es el intervalo entre dos tonos donde uno tiene el doble de frecuencia que el otro. Suenan idénticos pero a diferentes niveles de tono.",
          de: "Eine Oktave ist das Intervall zwischen zwei Tonhöhen, bei dem eine die doppelte Frequenz der anderen hat. Sie klingen identisch, aber auf verschiedenen Tonhöhenebenen.",
          nl: "Een octaaf is het interval tussen twee toonhoogtes waarbij de ene dubbel zo hoge frequentie heeft als de andere. Ze klinken identiek maar op verschillende toonhoogte niveaus."
        }
      },
      {
        question: {
          en: "What does 'allegro' indicate about the tempo of music?",
          es: "¿Qué indica 'allegro' sobre el tempo de la música?",
          de: "Was zeigt 'allegro' über das Tempo der Musik an?",
          nl: "Wat geeft 'allegro' aan over het tempo van muziek?"
        },
        options: [
          { en: "Fast and lively", es: "Rápido y animado", de: "Schnell und lebhaft", nl: "Snel en levendig" },
          { en: "Slow and peaceful", es: "Lento y pacífico", de: "Langsam und friedlich", nl: "Langzaam en vredig" },
          { en: "Medium tempo", es: "Tempo medio", de: "Mittleres Tempo", nl: "Matig tempo" },
          { en: "Very slow", es: "Muy lento", de: "Sehr langsam", nl: "Zeer langzaam" }
        ],
        correct: 0,
        explanation: {
          en: "Allegro is a tempo marking that indicates music should be played in a fast, lively, and cheerful manner, typically around 120-168 beats per minute.",
          es: "Allegro es una indicación de tempo que significa que la música debe tocarse de manera rápida, animada y alegre, típicamente alrededor de 120-168 pulsaciones por minuto.",
          de: "Allegro ist eine Tempobezeichnung, die anzeigt, dass Musik schnell, lebhaft und fröhlich gespielt werden soll, typischerweise um 120-168 Schläge pro Minute.",
          nl: "Allegro is een tempo-aanduiding die betekent dat muziek snel, levendig en opgewekt gespeeld moet worden, typisch rond 120-168 slagen per minuut."
        }
      },
      {
        question: {
          en: "What is the name for a chord consisting of three notes?",
          es: "¿Cómo se llama un acorde que consiste en tres notas?",
          de: "Wie nennt man einen Akkord, der aus drei Noten besteht?",
          nl: "Hoe heet een akkoord dat uit drie noten bestaat?"
        },
        options: [
          { en: "Triad", es: "Tríada", de: "Dreiklang", nl: "Drieklank" },
          { en: "Seventh", es: "Séptima", de: "Septakkord", nl: "Septiem" },
          { en: "Ninth", es: "Novena", de: "Nonakkord", nl: "Nonen" },
          { en: "Diminished", es: "Disminuido", de: "Vermindert", nl: "Verminderd" }
        ],
        correct: 0,
        explanation: {
          en: "A triad is a chord consisting of three notes, typically built from the root, third, and fifth degrees of a scale. It forms the basis of most Western harmony.",
          es: "Una tríada es un acorde que consiste en tres notas, típicamente construido desde los grados primero, tercero y quinto de una escala. Forma la base de la mayoría de la armonía occidental.",
          de: "Ein Dreiklang ist ein Akkord aus drei Noten, typischerweise aufgebaut aus der Grundton, Terz und Quinte einer Tonleiter. Er bildet die Grundlage der meisten westlichen Harmonien.",
          nl: "Een drieklank is een akkoord bestaande uit drie noten, typisch opgebouwd vanuit de grondtoon, terts en kwint van een toonladder. Het vormt de basis van de meeste westerse harmonie."
        }
      },
      {
        question: {
          en: "What is the term for the pattern of strong and weak beats in music?",
          es: "¿Cuál es el término para el patrón de tiempos fuertes y débiles en la música?",
          de: "Wie nennt man das Muster von starken und schwachen Schlägen in der Musik?",
          nl: "Wat is de term voor het patroon van sterke en zwakke tellen in muziek?"
        },
        options: [
          { en: "Meter", es: "Compás", de: "Metrum", nl: "Maatsoort" },
          { en: "Rhythm", es: "Ritmo", de: "Rhythmus", nl: "Ritme" },
          { en: "Melody", es: "Melodía", de: "Melodie", nl: "Melodie" },
          { en: "Harmony", es: "Armonía", de: "Harmonie", nl: "Harmonie" }
        ],
        correct: 0,
        explanation: {
          en: "Meter refers to the recurring pattern of strong and weak beats that gives music its rhythmic structure, such as 4/4, 3/4, or 2/4 time.",
          es: "El compás se refiere al patrón recurrente de tiempos fuertes y débiles que da a la música su estructura rítmica, como 4/4, 3/4 o 2/4.",
          de: "Metrum bezieht sich auf das wiederkehrende Muster starker und schwacher Schläge, das der Musik ihre rhythmische Struktur verleiht, wie 4/4, 3/4 oder 2/4 Takt.",
          nl: "Maatsoort verwijst naar het herhalende patroon van sterke en zwakke tellen dat muziek zijn ritmische structuur geeft, zoals 4/4, 3/4 of 2/4 maat."
        }
      },
      {
        question: {
          en: "What does a sharp (#) symbol do to a note?",
          es: "¿Qué hace un símbolo de sostenido (#) a una nota?",
          de: "Was bewirkt ein Kreuz (#)-Symbol bei einer Note?",
          nl: "Wat doet een kruis (#) symbool met een noot?"
        },
        options: [
          { en: "Raises it by a semitone", es: "La sube un semitono", de: "Erhöht sie um einen Halbton", nl: "Verhoogt het met een halve toon" },
          { en: "Lowers it by a semitone", es: "La baja un semitono", de: "Senkt sie um einen Halbton", nl: "Verlaagt het met een halve toon" },
          { en: "Doubles its length", es: "Duplica su duración", de: "Verdoppelt ihre Länge", nl: "Verdubbelt de lengte" },
          { en: "Makes it silent", es: "La silencia", de: "Macht sie stumm", nl: "Maakt het stil" }
        ],
        correct: 0,
        explanation: {
          en: "A sharp (#) raises the pitch of a note by a semitone (half step), making it higher in pitch.",
          es: "Un sostenido (#) sube el tono de una nota un semitono (medio paso), haciéndola más aguda.",
          de: "Ein Kreuz (#) erhöht die Tonhöhe einer Note um einen Halbton und macht sie höher.",
          nl: "Een kruis (#) verhoogt de toonhoogte van een noot met een halve toon, waardoor het hoger klinkt."
        }
      },
      {
        question: {
          en: "What is the term for the speed of music?",
          es: "¿Cuál es el término para la velocidad de la música?",
          de: "Wie nennt man die Geschwindigkeit der Musik?",
          nl: "Wat is de term voor de snelheid van muziek?"
        },
        options: [
          { en: "Tempo", es: "Tempo", de: "Tempo", nl: "Tempo" },
          { en: "Dynamics", es: "Dinámicas", de: "Dynamik", nl: "Dynamiek" },
          { en: "Articulation", es: "Articulación", de: "Artikulation", nl: "Articulatie" },
          { en: "Expression", es: "Expresión", de: "Ausdruck", nl: "Expressie" }
        ],
        correct: 0,
        explanation: {
          en: "Tempo refers to the speed or pace of music, typically measured in beats per minute (BPM) or indicated by Italian terms like allegro, andante, or adagio.",
          es: "Tempo se refiere a la velocidad o ritmo de la música, típicamente medido en pulsaciones por minuto (BPM) o indicado por términos italianos como allegro, andante o adagio.",
          de: "Tempo bezieht sich auf die Geschwindigkeit oder das Tempo der Musik, typischerweise gemessen in Schlägen pro Minute (BPM) oder durch italienische Begriffe wie Allegro, Andante oder Adagio angegeben.",
          nl: "Tempo verwijst naar de snelheid of het ritme van muziek, typisch gemeten in slagen per minuut (BPM) of aangegeven door Italiaanse termen zoals allegro, andante of adagio."
        }
      },
      {
        question: {
          en: "What does a natural (♮) symbol do to a note?",
          es: "¿Qué hace un símbolo natural (♮) a una nota?",
          de: "Was bewirkt ein Auflösungszeichen (♮) bei einer Note?",
          nl: "Wat doet een herstellingsteken (♮) met een noot?"
        },
        options: [
          { en: "Cancels any previous sharp or flat", es: "Cancela cualquier sostenido o bemol previo", de: "Hebt jedes vorherige Kreuz oder b auf", nl: "Heft elke vorige kruis of mol op" },
          { en: "Raises the note by a semitone", es: "Sube la nota un semitono", de: "Erhöht die Note um einen Halbton", nl: "Verhoogt de noot met een halve toon" },
          { en: "Lowers the note by a semitone", es: "Baja la nota un semitono", de: "Senkt die Note um einen Halbton", nl: "Verlaagt de noot met een halve toon" },
          { en: "Makes the note longer", es: "Hace la nota más larga", de: "Macht die Note länger", nl: "Maakt de noot langer" }
        ],
        correct: 0,
        explanation: {
          en: "A natural (♮) cancels any previous sharp or flat applied to a note, returning it to its original pitch.",
          es: "Un natural (♮) cancela cualquier sostenido o bemol aplicado previamente a una nota, devolviéndola a su tono original.",
          de: "Ein Auflösungszeichen (♮) hebt jedes vorherige Kreuz oder b einer Note auf und bringt sie auf ihre ursprüngliche Tonhöhe zurück.",
          nl: "Een herstellingsteken (♮) heft elke vorige kruis of mol van een noot op en brengt het terug naar de oorspronkelijke toonhoogte."
        }
      },
      {
        question: {
          en: "What is the term for the volume or intensity of music?",
          es: "¿Cuál es el término para el volumen o intensidad de la música?",
          de: "Wie nennt man die Lautstärke oder Intensität der Musik?",
          nl: "Wat is de term voor het volume of de intensiteit van muziek?"
        },
        options: [
          { en: "Dynamics", es: "Dinámicas", de: "Dynamik", nl: "Dynamiek" },
          { en: "Tempo", es: "Tempo", de: "Tempo", nl: "Tempo" },
          { en: "Pitch", es: "Tono", de: "Tonhöhe", nl: "Toonhoogte" },
          { en: "Timbre", es: "Timbre", de: "Klangfarbe", nl: "Timbre" }
        ],
        correct: 0,
        explanation: {
          en: "Dynamics refer to the volume or intensity of music, indicated by markings such as forte (f) for loud, piano (p) for soft, and crescendo for gradually getting louder.",
          es: "Las dinámicas se refieren al volumen o intensidad de la música, indicadas por marcas como forte (f) para fuerte, piano (p) para suave, y crescendo para gradualmente más fuerte.",
          de: "Dynamik bezieht sich auf die Lautstärke oder Intensität der Musik, angezeigt durch Bezeichnungen wie Forte (f) für laut, Piano (p) für leise und Crescendo für allmählich lauter werdend.",
          nl: "Dynamiek verwijst naar het volume of de intensiteit van muziek, aangegeven door markeringen zoals forte (f) voor luid, piano (p) voor zacht, en crescendo voor geleidelijk luider worden."
        }
      },
      {
        question: {
          en: "What is a scale that contains all 12 semitones within an octave called?",
          es: "¿Cómo se llama una escala que contiene los 12 semitonos dentro de una octava?",
          de: "Wie nennt man eine Tonleiter, die alle 12 Halbtöne innerhalb einer Oktave enthält?",
          nl: "Hoe heet een toonladder die alle 12 halve tonen binnen een octaaf bevat?"
        },
        options: [
          { en: "Chromatic scale", es: "Escala cromática", de: "Chromatische Tonleiter", nl: "Chromatische toonladder" },
          { en: "Major scale", es: "Escala mayor", de: "Dur-Tonleiter", nl: "Majeur toonladder" },
          { en: "Minor scale", es: "Escala menor", de: "Moll-Tonleiter", nl: "Mineur toonladder" },
          { en: "Pentatonic scale", es: "Escala pentatónica", de: "Pentatonische Tonleiter", nl: "Pentatonische toonladder" }
        ],
        correct: 0,
        explanation: {
          en: "A chromatic scale contains all 12 semitones (half steps) within an octave, using every available pitch in Western music.",
          es: "Una escala cromática contiene los 12 semitonos (medios pasos) dentro de una octava, usando cada tono disponible en la música occidental.",
          de: "Eine chromatische Tonleiter enthält alle 12 Halbtöne innerhalb einer Oktave und nutzt jede verfügbare Tonhöhe in der westlichen Musik.",
          nl: "Een chromatische toonladder bevat alle 12 halve tonen binnen een octaaf, waarbij elke beschikbare toonhoogte in westerse muziek wordt gebruikt."
        }
      },
      {
        question: {
          en: "What does 'piano' mean as a dynamic marking?",
          es: "¿Qué significa 'piano' como indicación dinámica?",
          de: "Was bedeutet 'Piano' als dynamische Bezeichnung?",
          nl: "Wat betekent 'piano' als dynamische aanduiding?"
        },
        options: [
          { en: "Soft", es: "Suave", de: "Leise", nl: "Zacht" },
          { en: "Loud", es: "Fuerte", de: "Laut", nl: "Luid" },
          { en: "Fast", es: "Rápido", de: "Schnell", nl: "Snel" },
          { en: "Slow", es: "Lento", de: "Langsam", nl: "Langzaam" }
        ],
        correct: 0,
        explanation: {
          en: "Piano (p) is a dynamic marking that indicates music should be played softly or quietly, opposite of forte.",
          es: "Piano (p) es una indicación dinámica que significa que la música debe tocarse suave o silenciosamente, opuesto a forte.",
          de: "Piano (p) ist eine dynamische Bezeichnung, die anzeigt, dass Musik leise oder sanft gespielt werden soll, das Gegenteil von Forte.",
          nl: "Piano (p) is een dynamische aanduiding die betekent dat muziek zacht of stil gespeeld moet worden, het tegenovergestelde van forte."
        }
      },
      {
        question: {
          en: "What does a flat (♭) symbol do to a note?",
          es: "¿Qué hace un símbolo de bemol (♭) a una nota?",
          de: "Was bewirkt ein b (♭)-Symbol bei einer Note?",
          nl: "Wat doet een mol (♭) symbool met een noot?"
        },
        options: [
          { en: "Lowers it by a semitone", es: "La baja un semitono", de: "Senkt sie um einen Halbton", nl: "Verlaagt het met een halve toon" },
          { en: "Raises it by a semitone", es: "La sube un semitono", de: "Erhöht sie um einen Halbton", nl: "Verhoogt het met een halve toon" },
          { en: "Makes it longer", es: "La hace más larga", de: "Macht sie länger", nl: "Maakt het langer" },
          { en: "Makes it shorter", es: "La hace más corta", de: "Macht sie kürzer", nl: "Maakt het korter" }
        ],
        correct: 0,
        explanation: {
          en: "A flat (♭) lowers the pitch of a note by a semitone (half step), making it lower in pitch.",
          es: "Un bemol (♭) baja el tono de una nota un semitono (medio paso), haciéndola más grave.",
          de: "Ein b (♭) senkt die Tonhöhe einer Note um einen Halbton und macht sie tiefer.",
          nl: "Een mol (♭) verlaagt de toonhoogte van een noot met een halve toon, waardoor het lager klinkt."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('brain-teaser/music', level1);
  }
})();
