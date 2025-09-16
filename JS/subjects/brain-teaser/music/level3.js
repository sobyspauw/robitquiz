// Music - Level 3: Musical Instruments
(function() {
  const level3 = {
    name: {
      en: "Musical Instruments",
      es: "Instrumentos Musicales",
      de: "Musikinstrumente",
      nl: "Muziekinstrumenten"
    },
    questions: [
      {
        question: {
          en: "Which family of instruments includes the violin, viola, cello, and double bass?",
          es: "¿Qué familia de instrumentos incluye el violín, viola, violoncelo y contrabajo?",
          de: "Welche Instrumentenfamilie umfasst Violine, Viola, Cello und Kontrabass?",
          nl: "Welke instrumentenfamilie omvat de viool, altviool, cello en contrabas?"
        },
        options: [
          { en: "String family", es: "Familia de cuerdas", de: "Streicherfamilie", nl: "Strijkersfamilie" },
          { en: "Woodwind family", es: "Familia de viento madera", de: "Holzbläserfamilie", nl: "Houtblazersfamilie" },
          { en: "Brass family", es: "Familia de viento metal", de: "Blechbläserfamilie", nl: "Koperblazerfamilie" },
          { en: "Percussion family", es: "Familia de percusión", de: "Schlagzeugfamilie", nl: "Slagwerkfamilie" }
        ],
        correct: 0,
        explanation: {
          en: "The string family consists of instruments that produce sound through vibrating strings, typically played with a bow or by plucking.",
          es: "La familia de cuerdas consiste en instrumentos que producen sonido a través de cuerdas vibrantes, típicamente tocados con arco o pellizcando.",
          de: "Die Streicherfamilie besteht aus Instrumenten, die Klang durch vibrierende Saiten erzeugen, typischerweise mit einem Bogen gespielt oder gezupft.",
          nl: "De strijkersfamilie bestaat uit instrumenten die geluid produceren door trillende snaren, typisch bespeeld met een strijkstok of door tokken."
        }
      },
      {
        question: {
          en: "What is the highest-pitched instrument in the woodwind family?",
          es: "¿Cuál es el instrumento de tono más agudo en la familia de viento madera?",
          de: "Was ist das höchste Instrument in der Holzbläserfamilie?",
          nl: "Wat is het hoogste instrument in de houtblazersfamilie?"
        },
        options: [
          { en: "Piccolo", es: "Piccolo", de: "Piccolo", nl: "Piccolo" },
          { en: "Flute", es: "Flauta", de: "Flöte", nl: "Fluit" },
          { en: "Oboe", es: "Oboe", de: "Oboe", nl: "Hobo" },
          { en: "Clarinet", es: "Clarinete", de: "Klarinette", nl: "Klarinet" }
        ],
        correct: 0,
        explanation: {
          en: "The piccolo is the highest-pitched instrument in the orchestra, sounding an octave higher than the flute.",
          es: "El piccolo es el instrumento de tono más agudo en la orquesta, sonando una octava más alta que la flauta.",
          de: "Die Piccolo ist das höchste Instrument im Orchester und klingt eine Oktave höher als die Flöte.",
          nl: "De piccolo is het hoogste instrument in het orkest, klinkend een octaaf hoger dan de fluit."
        }
      },
      {
        question: {
          en: "Which brass instrument has a slide instead of valves?",
          es: "¿Qué instrumento de viento metal tiene una vara en lugar de válvulas?",
          de: "Welches Blechblasinstrument hat einen Zug statt Ventile?",
          nl: "Welk koperblaasinstrument heeft een schuif in plaats van kleppen?"
        },
        options: [
          { en: "Trombone", es: "Trombón", de: "Posaune", nl: "Trombone" },
          { en: "Trumpet", es: "Trompeta", de: "Trompete", nl: "Trompet" },
          { en: "French horn", es: "Trompa francesa", de: "Waldhorn", nl: "Hoorn" },
          { en: "Tuba", es: "Tuba", de: "Tuba", nl: "Tuba" }
        ],
        correct: 0,
        explanation: {
          en: "The trombone uses a slide to change pitch, while most other brass instruments use valves or keys to alter the length of tubing.",
          es: "El trombón usa una vara para cambiar el tono, mientras que la mayoría de otros instrumentos de viento metal usan válvulas o llaves para alterar la longitud del tubo.",
          de: "Die Posaune verwendet einen Zug zur Tonhöhenänderung, während die meisten anderen Blechblasinstrumente Ventile oder Klappen verwenden.",
          nl: "De trombone gebruikt een schuif om de toonhoogte te veranderen, terwijl de meeste andere koperblazers kleppen of toetsen gebruiken."
        }
      },
      {
        question: {
          en: "How many strings does a standard acoustic guitar have?",
          es: "¿Cuántas cuerdas tiene una guitarra acústica estándar?",
          de: "Wie viele Saiten hat eine Standard-Akustikgitarre?",
          nl: "Hoeveel snaren heeft een standaard akoestische gitaar?"
        },
        options: [
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "12", es: "12", de: "12", nl: "12" }
        ],
        correct: 0,
        explanation: {
          en: "A standard acoustic guitar has 6 strings, typically tuned E-A-D-G-B-E from lowest to highest pitch.",
          es: "Una guitarra acústica estándar tiene 6 cuerdas, típicamente afinadas Mi-La-Re-Sol-Si-Mi de tono más grave a más agudo.",
          de: "Eine Standard-Akustikgitarre hat 6 Saiten, typischerweise E-A-D-G-H-E von der tiefsten zur höchsten Tonhöhe gestimmt.",
          nl: "Een standaard akoestische gitaar heeft 6 snaren, typisch gestemd E-A-D-G-B-E van laagste naar hoogste toonhoogte."
        }
      },
      {
        question: {
          en: "What type of instrument is the timpani?",
          es: "¿Qué tipo de instrumento es el timpani?",
          de: "Was für ein Instrument ist die Pauke?",
          nl: "Wat voor instrument is de timpani?"
        },
        options: [
          { en: "Tuned percussion", es: "Percusión afinada", de: "Gestimmtes Schlagzeug", nl: "Gestemd slagwerk" },
          { en: "Untuned percussion", es: "Percusión no afinada", de: "Ungestimmtes Schlagzeug", nl: "Ongestemd slagwerk" },
          { en: "String instrument", es: "Instrumento de cuerda", de: "Streichinstrument", nl: "Snaarinstrument" },
          { en: "Wind instrument", es: "Instrumento de viento", de: "Blasinstrument", nl: "Blaasinstrument" }
        ],
        correct: 0,
        explanation: {
          en: "Timpani are tuned percussion instruments (kettle drums) that can be adjusted to specific pitches using pedals or tuning mechanisms.",
          es: "Los timpani son instrumentos de percusión afinada (timbales) que pueden ajustarse a tonos específicos usando pedales o mecanismos de afinación.",
          de: "Pauken sind gestimmte Schlaginstrumente (Kesselpauken), die mit Pedalen oder Stimmmechanismen auf bestimmte Tonhöhen eingestellt werden können.",
          nl: "Timpani zijn gestemde slagwerkinstrumenten (pauken) die kunnen worden afgesteld op specifieke toonhoogtes met pedalen of stemmechanismen."
        }
      },
      {
        question: {
          en: "Which instrument is known as the 'king of instruments'?",
          es: "¿Qué instrumento es conocido como el 'rey de los instrumentos'?",
          de: "Welches Instrument ist als 'König der Instrumente' bekannt?",
          nl: "Welk instrument staat bekend als de 'koning der instrumenten'?"
        },
        options: [
          { en: "Pipe organ", es: "Órgano de tubos", de: "Pfeifenorgel", nl: "Pijporgel" },
          { en: "Piano", es: "Piano", de: "Klavier", nl: "Piano" },
          { en: "Violin", es: "Violín", de: "Violine", nl: "Viool" },
          { en: "Trumpet", es: "Trompeta", de: "Trompete", nl: "Trompet" }
        ],
        correct: 0,
        explanation: {
          en: "The pipe organ is called the 'king of instruments' due to its vast range, power, and complexity, capable of producing the widest variety of sounds.",
          es: "El órgano de tubos es llamado el 'rey de los instrumentos' debido a su vasto rango, poder y complejidad, capaz de producir la mayor variedad de sonidos.",
          de: "Die Pfeifenorgel wird 'König der Instrumente' genannt aufgrund ihrer enormen Bandbreite, Kraft und Komplexität und ihrer Fähigkeit, die größte Vielfalt an Klängen zu erzeugen.",
          nl: "Het pijporgel wordt de 'koning der instrumenten' genoemd vanwege zijn enorme bereik, kracht en complexiteit, in staat om de grootste verscheidenheid aan klanken te produceren."
        }
      },
      {
        question: {
          en: "What material are saxophone reeds typically made from?",
          es: "¿De qué material están hechas típicamente las cañas de saxofón?",
          de: "Aus welchem Material sind Saxophonblätter typischerweise gemacht?",
          nl: "Van welk materiaal zijn saxofoonrieten typisch gemaakt?"
        },
        options: [
          { en: "Bamboo (cane)", es: "Bambú (caña)", de: "Bambus (Rohr)", nl: "Bamboe (riet)" },
          { en: "Plastic", es: "Plástico", de: "Kunststoff", nl: "Plastic" },
          { en: "Wood", es: "Madera", de: "Holz", nl: "Hout" },
          { en: "Metal", es: "Metal", de: "Metall", nl: "Metaal" }
        ],
        correct: 0,
        explanation: {
          en: "Saxophone reeds are traditionally made from bamboo cane (Arundo donax), though synthetic alternatives are also available.",
          es: "Las cañas de saxofón se hacen tradicionalmente de caña de bambú (Arundo donax), aunque también están disponibles alternativas sintéticas.",
          de: "Saxophonblätter werden traditionell aus Bambusrohr (Arundo donax) hergestellt, obwohl auch synthetische Alternativen verfügbar sind.",
          nl: "Saxofoonrieten worden traditioneel gemaakt van bamboeriet (Arundo donax), hoewel synthetische alternatieven ook beschikbaar zijn."
        }
      },
      {
        question: {
          en: "Which percussion instrument is played by scraping a wooden stick across its ridged surface?",
          es: "¿Qué instrumento de percusión se toca raspando un palo de madera por su superficie estriada?",
          de: "Welches Schlaginstrument wird gespielt, indem man einen Holzstab über seine geriffelte Oberfläche schabt?",
          nl: "Welk slagwerkinstrument wordt bespeeld door een houten stok over zijn gegroefde oppervlak te schrapen?"
        },
        options: [
          { en: "Guiro", es: "Güiro", de: "Guiro", nl: "Guiro" },
          { en: "Maracas", es: "Maracas", de: "Maracas", nl: "Maracas" },
          { en: "Claves", es: "Claves", de: "Claves", nl: "Claves" },
          { en: "Cowbell", es: "Cencerro", de: "Kuhglocke", nl: "Koebel" }
        ],
        correct: 0,
        explanation: {
          en: "The guiro is a percussion instrument from Latin America consisting of a hollow gourd with parallel notches cut into one side, played by scraping.",
          es: "El güiro es un instrumento de percusión de América Latina que consiste en una calabaza hueca con muescas paralelas cortadas en un lado, tocado raspando.",
          de: "Das Guiro ist ein Schlaginstrument aus Lateinamerika, bestehend aus einem hohlen Kürbis mit parallelen Kerben an einer Seite, gespielt durch Schaben.",
          nl: "De guiro is een slagwerkinstrument uit Latijns-Amerika bestaande uit een holle kalebas met parallelle inkepingen aan één kant, bespeeld door schrapen."
        }
      },
      {
        question: {
          en: "How many keys does a full-size piano keyboard have?",
          es: "¿Cuántas teclas tiene un teclado de piano de tamaño completo?",
          de: "Wie viele Tasten hat eine Klaviatur in voller Größe?",
          nl: "Hoeveel toetsen heeft een volledig piano toetsenbord?"
        },
        options: [
          { en: "88", es: "88", de: "88", nl: "88" },
          { en: "76", es: "76", de: "76", nl: "76" },
          { en: "100", es: "100", de: "100", nl: "100" },
          { en: "61", es: "61", de: "61", nl: "61" }
        ],
        correct: 0,
        explanation: {
          en: "A full-size piano has 88 keys: 52 white keys and 36 black keys, spanning over 7 octaves from A0 to C8.",
          es: "Un piano de tamaño completo tiene 88 teclas: 52 teclas blancas y 36 teclas negras, abarcando más de 7 octavas de La0 a Do8.",
          de: "Ein Klavier in voller Größe hat 88 Tasten: 52 weiße Tasten und 36 schwarze Tasten, über mehr als 7 Oktaven von A0 bis C8.",
          nl: "Een volledige piano heeft 88 toetsen: 52 witte toetsen en 36 zwarte toetsen, over meer dan 7 octaven van A0 tot C8."
        }
      },
      {
        question: {
          en: "What is the lowest-pitched instrument in the brass family?",
          es: "¿Cuál es el instrumento de tono más grave en la familia de viento metal?",
          de: "Was ist das tiefste Instrument in der Blechbläserfamilie?",
          nl: "Wat is het laagste instrument in de koperblazerfamilie?"
        },
        options: [
          { en: "Tuba", es: "Tuba", de: "Tuba", nl: "Tuba" },
          { en: "Trombone", es: "Trombón", de: "Posaune", nl: "Trombone" },
          { en: "French horn", es: "Trompa francesa", de: "Waldhorn", nl: "Hoorn" },
          { en: "Euphonium", es: "Eufonio", de: "Euphonium", nl: "Euphonium" }
        ],
        correct: 0,
        explanation: {
          en: "The tuba is the lowest-pitched brass instrument, providing the bass foundation for brass sections and wind bands.",
          es: "La tuba es el instrumento de viento metal de tono más grave, proporcionando la base de bajo para secciones de viento metal y bandas de viento.",
          de: "Die Tuba ist das tiefste Blechblasinstrument und bildet die Bassfundament für Blechbläsersektionen und Blasorchester.",
          nl: "De tuba is het laagste koperblaasinstrument, dat de basfundament levert voor koperblazersecties en harmonie-orkesten."
        }
      },
      {
        question: {
          en: "Which traditional Japanese string instrument has three strings and is played with a plectrum?",
          es: "¿Qué instrumento de cuerda tradicional japonés tiene tres cuerdas y se toca con una púa?",
          de: "Welches traditionelle japanische Saiteninstrument hat drei Saiten und wird mit einem Plektrum gespielt?",
          nl: "Welk traditioneel Japans snaarinstrument heeft drie snaren en wordt bespeeld met een plectrum?"
        },
        options: [
          { en: "Shamisen", es: "Shamisen", de: "Shamisen", nl: "Shamisen" },
          { en: "Koto", es: "Koto", de: "Koto", nl: "Koto" },
          { en: "Biwa", es: "Biwa", de: "Biwa", nl: "Biwa" },
          { en: "Shakuhachi", es: "Shakuhachi", de: "Shakuhachi", nl: "Shakuhachi" }
        ],
        correct: 0,
        explanation: {
          en: "The shamisen is a three-stringed Japanese instrument played with a large plectrum called a bachi, used in traditional Japanese music.",
          es: "El shamisen es un instrumento japonés de tres cuerdas tocado con una púa grande llamada bachi, usado en música tradicional japonesa.",
          de: "Die Shamisen ist ein dreisaitiges japanisches Instrument, gespielt mit einem großen Plektrum namens Bachi, verwendet in traditioneller japanischer Musik.",
          nl: "De shamisen is een driesnaarig Japans instrument bespeeld met een grote plectrum genaamd bachi, gebruikt in traditionele Japanse muziek."
        }
      },
      {
        question: {
          en: "What is the range of a typical soprano voice?",
          es: "¿Cuál es el rango de una voz soprano típica?",
          de: "Was ist der Stimmumfang einer typischen Sopranstimme?",
          nl: "Wat is het bereik van een typische sopraan stem?"
        },
        options: [
          { en: "C4 to C6", es: "Do4 a Do6", de: "C4 bis C6", nl: "C4 tot C6" },
          { en: "A3 to A5", es: "La3 a La5", de: "A3 bis A5", nl: "A3 tot A5" },
          { en: "F3 to F5", es: "Fa3 a Fa5", de: "F3 bis F5", nl: "F3 tot F5" },
          { en: "G2 to G4", es: "Sol2 a Sol4", de: "G2 bis G4", nl: "G2 tot G4" }
        ],
        correct: 0,
        explanation: {
          en: "The typical soprano voice range spans from middle C (C4) to high C (C6), though individual singers may extend beyond these limits.",
          es: "El rango típico de voz soprano va del Do central (Do4) al Do agudo (Do6), aunque cantantes individuales pueden extenderse más allá de estos límites.",
          de: "Der typische Sopranstimmumfang reicht vom mittleren C (C4) bis zum hohen C (C6), obwohl einzelne Sänger über diese Grenzen hinausgehen können.",
          nl: "Het typische sopraan stembereik loopt van midden C (C4) tot hoge C (C6), hoewel individuele zangers deze grenzen kunnen overschrijden."
        }
      },
      {
        question: {
          en: "Which woodwind instrument uses a double reed?",
          es: "¿Qué instrumento de viento madera usa una caña doble?",
          de: "Welches Holzblasinstrument verwendet ein Doppelrohrblatt?",
          nl: "Welk houtblaasinstrument gebruikt een dubbel riet?"
        },
        options: [
          { en: "Oboe", es: "Oboe", de: "Oboe", nl: "Hobo" },
          { en: "Flute", es: "Flauta", de: "Flöte", nl: "Fluit" },
          { en: "Clarinet", es: "Clarinete", de: "Klarinette", nl: "Klarinet" },
          { en: "Recorder", es: "Flauta dulce", de: "Blockflöte", nl: "Blokfluit" }
        ],
        correct: 0,
        explanation: {
          en: "The oboe uses a double reed consisting of two pieces of cane bound together, creating its distinctive nasal and penetrating sound.",
          es: "El oboe usa una caña doble que consiste en dos pedazos de caña unidos, creando su sonido nasal y penetrante distintivo.",
          de: "Die Oboe verwendet ein Doppelrohrblatt aus zwei zusammengebundenen Rohrstücken, was ihren charakteristischen nasalen und durchdringenden Klang erzeugt.",
          nl: "De hobo gebruikt een dubbel riet bestaande uit twee stukjes riet die samengebonden zijn, wat zijn kenmerkende nasale en doordringende geluid creëert."
        }
      },
      {
        question: {
          en: "What is the Indian tabla?",
          es: "¿Qué es la tabla india?",
          de: "Was ist die indische Tabla?",
          nl: "Wat is de Indiase tabla?"
        },
        options: [
          { en: "A pair of hand drums", es: "Un par de tambores de mano", de: "Ein Paar Handtrommeln", nl: "Een paar handtrommels" },
          { en: "A string instrument", es: "Un instrumento de cuerda", de: "Ein Saiteninstrument", nl: "Een snaarinstrument" },
          { en: "A wind instrument", es: "Un instrumento de viento", de: "Ein Blasinstrument", nl: "Een blaasinstrument" },
          { en: "A ceremonial bell", es: "Una campana ceremonial", de: "Eine Zeremonienglocke", nl: "Een ceremoniële bel" }
        ],
        correct: 0,
        explanation: {
          en: "The tabla is a pair of hand drums from the Indian subcontinent: the smaller dayan (treble drum) and larger bayan (bass drum).",
          es: "La tabla es un par de tambores de mano del subcontinente indio: el dayan más pequeño (tambor agudo) y el bayan más grande (tambor grave).",
          de: "Die Tabla ist ein Paar Handtrommeln aus dem indischen Subkontinent: die kleinere Dayan (Diskantrommel) und die größere Bayan (Basstrommel).",
          nl: "De tabla is een paar handtrommels van het Indiase subcontinent: de kleinere dayan (hoge trom) en grotere bayan (bastrom)."
        }
      },
      {
        question: {
          en: "Which instrument family does the harmonica belong to?",
          es: "¿A qué familia de instrumentos pertenece la armónica?",
          de: "Zu welcher Instrumentenfamilie gehört die Mundharmonika?",
          nl: "Tot welke instrumentenfamilie behoort de mondharmonica?"
        },
        options: [
          { en: "Free reed instruments", es: "Instrumentos de lengüeta libre", de: "Durchschlagende Zungeninstrumente", nl: "Vrije riet instrumenten" },
          { en: "Brass instruments", es: "Instrumentos de viento metal", de: "Blechblasinstrumente", nl: "Koperblazers" },
          { en: "String instruments", es: "Instrumentos de cuerda", de: "Saiteninstrumente", nl: "Snaarinstrumenten" },
          { en: "Percussion instruments", es: "Instrumentos de percusión", de: "Schlaginstrumente", nl: "Slagwerkinstrumenten" }
        ],
        correct: 0,
        explanation: {
          en: "The harmonica belongs to the free reed family, where metal reeds vibrate freely in slots when air passes through them.",
          es: "La armónica pertenece a la familia de lengüeta libre, donde lengüetas metálicas vibran libremente en ranuras cuando el aire pasa a través de ellas.",
          de: "Die Mundharmonika gehört zur Familie der durchschlagenden Zungeninstrumente, wo Metallzungen frei in Schlitzen schwingen, wenn Luft durch sie strömt.",
          nl: "De mondharmonica behoort tot de vrije riet familie, waar metalen rieten vrij trillen in sleuven wanneer lucht er doorheen stroomt."
        }
      },
      {
        question: {
          en: "What is the proper name for the 'kettledrums' in an orchestra?",
          es: "¿Cuál es el nombre correcto para los 'timbales' en una orquesta?",
          de: "Wie ist der richtige Name für die 'Kesselpauken' in einem Orchester?",
          nl: "Wat is de juiste naam voor de 'pauken' in een orkest?"
        },
        options: [
          { en: "Timpani", es: "Timpani", de: "Pauken", nl: "Timpani" },
          { en: "Tympani", es: "Tímpanos", de: "Tympani", nl: "Tympani" },
          { en: "Tomtoms", es: "Tomtoms", de: "Tomtoms", nl: "Tomtoms" },
          { en: "Tablas", es: "Tablas", de: "Tablas", nl: "Tablas" }
        ],
        correct: 0,
        explanation: {
          en: "Timpani is the correct term for orchestral kettledrums, tunable percussion instruments with copper bowls and calfskin or synthetic heads.",
          es: "Timpani es el término correcto para los timbales orquestales, instrumentos de percusión afinables con cubetas de cobre y parches de piel de ternero o sintéticos.",
          de: "Pauken ist der korrekte Begriff für orchestrale Kesselpauken, stimmbare Schlaginstrumente mit Kupferkesseln und Kalbs- oder Kunstfellen.",
          nl: "Timpani is de juiste term voor orkestpauken, stembare slagwerkinstrumenten met koperen ketels en kalfsleren of synthetische vellen."
        }
      },
      {
        question: {
          en: "Which African instrument consists of metal tines plucked with the thumbs?",
          es: "¿Qué instrumento africano consiste en púas metálicas pellizcadas con los pulgares?",
          de: "Welches afrikanische Instrument besteht aus Metallzinken, die mit den Daumen gezupft werden?",
          nl: "Welk Afrikaans instrument bestaat uit metalen tanden die met de duimen getokkeld worden?"
        },
        options: [
          { en: "Mbira (thumb piano)", es: "Mbira (piano de pulgares)", de: "Mbira (Daumenklavier)", nl: "Mbira (duimpiano)" },
          { en: "Djembe", es: "Djembe", de: "Djembe", nl: "Djembe" },
          { en: "Kora", es: "Kora", de: "Kora", nl: "Kora" },
          { en: "Marimba", es: "Marimba", de: "Marimba", nl: "Marimba" }
        ],
        correct: 0,
        explanation: {
          en: "The mbira, also known as a thumb piano or kalimba, is an African instrument with metal tines attached to a wooden board, played with the thumbs.",
          es: "La mbira, también conocida como piano de pulgares o kalimba, es un instrumento africano con púas metálicas unidas a una tabla de madera, tocado con los pulgares.",
          de: "Die Mbira, auch als Daumenklavier oder Kalimba bekannt, ist ein afrikanisches Instrument mit Metallzinken auf einem Holzbrett, gespielt mit den Daumen.",
          nl: "De mbira, ook bekend als duimpiano of kalimba, is een Afrikaans instrument met metalen tanden bevestigd aan een houten plank, bespeeld met de duimen."
        }
      },
      {
        question: {
          en: "How many valves does a standard trumpet have?",
          es: "¿Cuántas válvulas tiene una trompeta estándar?",
          de: "Wie viele Ventile hat eine Standard-Trompete?",
          nl: "Hoeveel kleppen heeft een standaard trompet?"
        },
        options: [
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "5", es: "5", de: "5", nl: "5" }
        ],
        correct: 0,
        explanation: {
          en: "A standard trumpet has three valves that can be pressed individually or in combination to change the pitch by altering the length of tubing.",
          es: "Una trompeta estándar tiene tres válvulas que pueden presionarse individualmente o en combinación para cambiar el tono alterando la longitud del tubo.",
          de: "Eine Standard-Trompete hat drei Ventile, die einzeln oder in Kombination gedrückt werden können, um die Tonhöhe durch Änderung der Rohrlänge zu verändern.",
          nl: "Een standaard trompet heeft drie kleppen die individueel of in combinatie kunnen worden ingedrukt om de toonhoogte te veranderen door de lengte van de buizen te wijzigen."
        }
      },
      {
        question: {
          en: "Which string instrument is played by bowing while held between the chin and shoulder?",
          es: "¿Qué instrumento de cuerda se toca con arco mientras se sostiene entre la barbilla y el hombro?",
          de: "Welches Streichinstrument wird gespielt, indem es zwischen Kinn und Schulter gehalten wird?",
          nl: "Welk strijkinstrument wordt bespeeld door te strijken terwijl het tussen kin en schouder gehouden wordt?"
        },
        options: [
          { en: "Violin", es: "Violín", de: "Violine", nl: "Viool" },
          { en: "Cello", es: "Violoncelo", de: "Cello", nl: "Cello" },
          { en: "Double bass", es: "Contrabajo", de: "Kontrabass", nl: "Contrabas" },
          { en: "Guitar", es: "Guitarra", de: "Gitarre", nl: "Gitaar" }
        ],
        correct: 0,
        explanation: {
          en: "The violin is held between the chin and shoulder (usually the left) and played with a bow, making it the most recognizable orchestral string instrument.",
          es: "El violín se sostiene entre la barbilla y el hombro (usualmente el izquierdo) y se toca con arco, siendo el instrumento de cuerda orquestal más reconocible.",
          de: "Die Violine wird zwischen Kinn und Schulter (normalerweise links) gehalten und mit einem Bogen gespielt, was sie zum bekanntesten Orchester-Streichinstrument macht.",
          nl: "De viool wordt tussen kin en schouder (gewoonlijk links) gehouden en met een strijkstok bespeeld, waardoor het het meest herkenbare orkest strijkinstrument is."
        }
      },
      {
        question: {
          en: "What is a didgeridoo made from?",
          es: "¿De qué está hecho un didgeridoo?",
          de: "Woraus ist ein Didgeridoo gemacht?",
          nl: "Waarvan is een didgeridoo gemaakt?"
        },
        options: [
          { en: "Hollow wood (eucalyptus)", es: "Madera hueca (eucalipto)", de: "Hohles Holz (Eukalyptus)", nl: "Hol hout (eucalyptus)" },
          { en: "Metal tube", es: "Tubo metálico", de: "Metallrohr", nl: "Metalen buis" },
          { en: "Bamboo", es: "Bambú", de: "Bambus", nl: "Bamboe" },
          { en: "Ceramic", es: "Cerámica", de: "Keramik", nl: "Keramiek" }
        ],
        correct: 0,
        explanation: {
          en: "The didgeridoo is traditionally made from eucalyptus wood that has been naturally hollowed out by termites, creating a resonant tube.",
          es: "El didgeridoo se hace tradicionalmente de madera de eucalipto que ha sido naturalmente vaciada por termitas, creando un tubo resonante.",
          de: "Das Didgeridoo wird traditionell aus Eukalyptusholz hergestellt, das natürlich von Termiten ausgehöhlt wurde und so ein resonantes Rohr bildet.",
          nl: "De didgeridoo wordt traditioneel gemaakt van eucalyptushout dat natuurlijk is uitgehold door termieten, waardoor een resonerende buis ontstaat."
        }
      },
      {
        question: {
          en: "Which percussion instrument consists of wooden bars struck with mallets?",
          es: "¿Qué instrumento de percusión consiste en barras de madera golpeadas con mazos?",
          de: "Welches Schlaginstrument besteht aus Holzstäben, die mit Schlägeln angeschlagen werden?",
          nl: "Welk slagwerkinstrument bestaat uit houten staven die met hamers worden geslagen?"
        },
        options: [
          { en: "Xylophone", es: "Xilófono", de: "Xylophon", nl: "Xylofoon" },
          { en: "Vibraphone", es: "Vibráfono", de: "Vibraphon", nl: "Vibrafoon" },
          { en: "Glockenspiel", es: "Glockenspiel", de: "Glockenspiel", nl: "Klokkenspel" },
          { en: "Celesta", es: "Celesta", de: "Celesta", nl: "Celesta" }
        ],
        correct: 0,
        explanation: {
          en: "The xylophone consists of wooden bars of different lengths arranged chromatically and struck with mallets to produce pitched sounds.",
          es: "El xilófono consiste en barras de madera de diferentes longitudes arregladas cromáticamente y golpeadas con mazos para producir sonidos afinados.",
          de: "Das Xylophon besteht aus Holzstäben verschiedener Längen, die chromatisch angeordnet und mit Schlägeln angeschlagen werden, um Töne zu erzeugen.",
          nl: "De xylofoon bestaat uit houten staven van verschillende lengtes die chromatisch zijn gerangschikt en met hamers worden geslagen om toonhoogtes te produceren."
        }
      },
      {
        question: {
          en: "What is the standard tuning for the four strings of a bass guitar?",
          es: "¿Cuál es la afinación estándar para las cuatro cuerdas de un bajo?",
          de: "Was ist die Standardstimmung für die vier Saiten einer Bassgitarre?",
          nl: "Wat is de standaardtuning voor de vier snaren van een basgitaar?"
        },
        options: [
          { en: "E-A-D-G (low to high)", es: "Mi-La-Re-Sol (grave a agudo)", de: "E-A-D-G (tief zu hoch)", nl: "E-A-D-G (laag naar hoog)" },
          { en: "G-D-A-E (low to high)", es: "Sol-Re-La-Mi (grave a agudo)", de: "G-D-A-E (tief zu hoch)", nl: "G-D-A-E (laag naar hoog)" },
          { en: "A-D-G-C (low to high)", es: "La-Re-Sol-Do (grave a agudo)", de: "A-D-G-C (tief zu hoch)", nl: "A-D-G-C (laag naar hoog)" },
          { en: "D-G-B-E (low to high)", es: "Re-Sol-Si-Mi (grave a agudo)", de: "D-G-H-E (tief zu hoch)", nl: "D-G-B-E (laag naar hoog)" }
        ],
        correct: 0,
        explanation: {
          en: "The standard bass guitar tuning is E-A-D-G from lowest to highest string, one octave lower than the bottom four strings of a guitar.",
          es: "La afinación estándar del bajo es Mi-La-Re-Sol de la cuerda más grave a la más aguda, una octava más baja que las cuatro cuerdas inferiores de una guitarra.",
          de: "Die Standard-Bassgitarren-Stimmung ist E-A-D-G von der tiefsten zur höchsten Saite, eine Oktave tiefer als die unteren vier Saiten einer Gitarre.",
          nl: "De standaard basgitaar tuning is E-A-D-G van laagste naar hoogste snaar, een octaaf lager dan de onderste vier snaren van een gitaar."
        }
      },
      {
        question: {
          en: "Which wind instrument produces sound without a reed or mouthpiece?",
          es: "¿Qué instrumento de viento produce sonido sin caña o boquilla?",
          de: "Welches Blasinstrument erzeugt Klang ohne Rohrblatt oder Mundstück?",
          nl: "Welk blaasinstrument produceert geluid zonder riet of mondstuk?"
        },
        options: [
          { en: "Flute", es: "Flauta", de: "Flöte", nl: "Fluit" },
          { en: "Oboe", es: "Oboe", de: "Oboe", nl: "Hobo" },
          { en: "Clarinet", es: "Clarinete", de: "Klarinette", nl: "Klarinet" },
          { en: "Trumpet", es: "Trompeta", de: "Trompete", nl: "Trompet" }
        ],
        correct: 0,
        explanation: {
          en: "The flute produces sound by blowing air across an embouchure hole, causing the air column inside to vibrate without using reeds or a cup mouthpiece.",
          es: "La flauta produce sonido soplando aire a través de un agujero de embocadura, causando que la columna de aire interior vibre sin usar cañas o boquilla de copa.",
          de: "Die Flöte erzeugt Klang, indem Luft über ein Anblasloch geblasen wird, wodurch die Luftsäule im Inneren ohne Rohrblätter oder Kesselmundstück vibriert.",
          nl: "De fluit produceert geluid door lucht over een aanblaatgat te blazen, waardoor de luchtkolom binnenin trilt zonder rieten of een kopvormig mondstuk te gebruiken."
        }
      },
      {
        question: {
          en: "What type of drum is a djembe?",
          es: "¿Qué tipo de tambor es un djembe?",
          de: "Was für eine Art Trommel ist eine Djembe?",
          nl: "Wat voor soort trom is een djembe?"
        },
        options: [
          { en: "Goblet-shaped hand drum", es: "Tambor de mano en forma de cáliz", de: "Kelchförmige Handtrommel", nl: "Bekervormige handtrom" },
          { en: "Cylindrical drum", es: "Tambor cilíndrico", de: "Zylindrische Trommel", nl: "Cilindervormige trom" },
          { en: "Frame drum", es: "Tambor de marco", de: "Rahmentrommel", nl: "Kadertrom" },
          { en: "Hourglass drum", es: "Tambor de reloj de arena", de: "Sanduhrtrommel", nl: "Zandlopervormige trom" }
        ],
        correct: 0,
        explanation: {
          en: "The djembe is a goblet-shaped hand drum from West Africa, traditionally carved from hardwood with an animal skin drumhead.",
          es: "El djembe es un tambor de mano en forma de cáliz de África Occidental, tradicionalmente tallado en madera dura con un parche de piel animal.",
          de: "Die Djembe ist eine kelchförmige Handtrommel aus Westafrika, traditionell aus Hartholz geschnitzt mit einem Tierhautfell.",
          nl: "De djembe is een bekervormige handtrom uit West-Afrika, traditioneel gesneden uit hardhout met een dierenhuid als trommelvel."
        }
      },
      {
        question: {
          en: "Which instrument uses circular breathing technique to maintain continuous sound?",
          es: "¿Qué instrumento usa la técnica de respiración circular para mantener sonido continuo?",
          de: "Welches Instrument verwendet Zirkularatmung, um kontinuierlichen Klang zu erzeugen?",
          nl: "Welk instrument gebruikt circulaire ademhalingstechniek om continu geluid te behouden?"
        },
        options: [
          { en: "Didgeridoo", es: "Didgeridoo", de: "Didgeridoo", nl: "Didgeridoo" },
          { en: "Trumpet", es: "Trompeta", de: "Trompete", nl: "Trompet" },
          { en: "Flute", es: "Flauta", de: "Flöte", nl: "Fluit" },
          { en: "Trombone", es: "Trombón", de: "Posaune", nl: "Trombone" }
        ],
        correct: 0,
        explanation: {
          en: "The didgeridoo traditionally requires circular breathing, where the player breathes in through the nose while maintaining airflow through the mouth using stored air in the cheeks.",
          es: "El didgeridoo tradicionalmente requiere respiración circular, donde el intérprete respira por la nariz mientras mantiene el flujo de aire por la boca usando aire almacenado en las mejillas.",
          de: "Das Didgeridoo erfordert traditionell Zirkularatmung, bei der der Spieler durch die Nase einatmet, während er den Luftstrom durch den Mund mit gespeicherter Luft in den Wangen aufrechterhält.",
          nl: "De didgeridoo vereist traditioneel circulaire ademhaling, waarbij de speler inademt door de neus terwijl de luchtstroom door de mond wordt gehandhaafd met opgeslagen lucht in de wangen."
        }
      },
      {
        question: {
          en: "What is the metal disc that creates vibrato on a vibraphone called?",
          es: "¿Cómo se llama el disco metálico que crea vibrato en un vibráfono?",
          de: "Wie nennt man die Metallscheibe, die das Vibrato bei einem Vibraphon erzeugt?",
          nl: "Hoe heet de metalen schijf die vibrato creëert op een vibrafoon?"
        },
        options: [
          { en: "Resonator disc", es: "Disco resonador", de: "Resonatorscheibe", nl: "Resonatorschijf" },
          { en: "Damper", es: "Amortiguador", de: "Dämpfer", nl: "Demper" },
          { en: "Sustain disc", es: "Disco de sustain", de: "Sustain-Scheibe", nl: "Sustain schijf" },
          { en: "Tremolo wheel", es: "Rueda de tremolo", de: "Tremolo-Rad", nl: "Tremolo wiel" }
        ],
        correct: 0,
        explanation: {
          en: "The vibraphone has resonator tubes with rotating discs (resonator discs) that open and close to create the characteristic vibrato effect when powered by a motor.",
          es: "El vibráfono tiene tubos resonadores con discos giratorios (discos resonadores) que se abren y cierran para crear el efecto de vibrato característico cuando son accionados por un motor.",
          de: "Das Vibraphon hat Resonatorrohre mit rotierenden Scheiben (Resonatorscheiben), die sich öffnen und schließen, um den charakteristischen Vibrato-Effekt zu erzeugen, wenn sie von einem Motor angetrieben werden.",
          nl: "De vibrafoon heeft resonatorbuizen met roterende schijven (resonatorschijven) die openen en sluiten om het karakteristieke vibrato-effect te creëren wanneer aangedreven door een motor."
        }
      },
      {
        question: {
          en: "How many strings does a standard mandolin have?",
          es: "¿Cuántas cuerdas tiene una mandolina estándar?",
          de: "Wie viele Saiten hat eine Standard-Mandoline?",
          nl: "Hoeveel snaren heeft een standaard mandoline?"
        },
        options: [
          { en: "8 (in 4 pairs)", es: "8 (en 4 pares)", de: "8 (in 4 Paaren)", nl: "8 (in 4 paren)" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "12", es: "12", de: "12", nl: "12" }
        ],
        correct: 0,
        explanation: {
          en: "A standard mandolin has 8 strings arranged in 4 pairs (courses), with each pair tuned to the same pitch: G-G, D-D, A-A, E-E.",
          es: "Una mandolina estándar tiene 8 cuerdas arregladas en 4 pares (órdenes), con cada par afinado al mismo tono: Sol-Sol, Re-Re, La-La, Mi-Mi.",
          de: "Eine Standard-Mandoline hat 8 Saiten in 4 Paaren (Chören) angeordnet, wobei jedes Paar auf dieselbe Tonhöhe gestimmt ist: G-G, D-D, A-A, E-E.",
          nl: "Een standaard mandoline heeft 8 snaren gerangschikt in 4 paren (koren), waarbij elk paar op dezelfde toonhoogte is gestemd: G-G, D-D, A-A, E-E."
        }
      },
      {
        question: {
          en: "What is the lowest-pitched instrument in the woodwind family?",
          es: "¿Cuál es el instrumento de tono más grave en la familia de viento madera?",
          de: "Was ist das tiefste Instrument in der Holzbläserfamilie?",
          nl: "Wat is het laagste instrument in de houtblazersfamilie?"
        },
        options: [
          { en: "Contrabassoon", es: "Contrafagot", de: "Kontrafagott", nl: "Contrafagot" },
          { en: "Bassoon", es: "Fagot", de: "Fagott", nl: "Fagot" },
          { en: "Bass clarinet", es: "Clarinete bajo", de: "Bassklarinette", nl: "Basklarinet" },
          { en: "English horn", es: "Corno inglés", de: "Englischhorn", nl: "Althobo" }
        ],
        correct: 0,
        explanation: {
          en: "The contrabassoon (or double bassoon) is the lowest-pitched instrument in the woodwind family, sounding an octave lower than the regular bassoon.",
          es: "El contrafagot (o fagot doble) es el instrumento de tono más grave en la familia de viento madera, sonando una octava más baja que el fagot regular.",
          de: "Das Kontrafagott (oder Doppelfagott) ist das tiefste Instrument in der Holzbläserfamilie und klingt eine Oktave tiefer als das normale Fagott.",
          nl: "De contrafagot (of dubbele fagot) is het laagste instrument in de houtblazersfamilie, klinkend een octaaf lager dan de gewone fagot."
        }
      },
      {
        question: {
          en: "Which percussion instrument is made of metal bars and has resonating tubes underneath?",
          es: "¿Qué instrumento de percusión está hecho de barras metálicas y tiene tubos resonadores debajo?",
          de: "Welches Schlaginstrument besteht aus Metallstäben und hat Resonatorrohre darunter?",
          nl: "Welk slagwerkinstrument is gemaakt van metalen staven en heeft resonerende buizen eronder?"
        },
        options: [
          { en: "Vibraphone", es: "Vibráfono", de: "Vibraphon", nl: "Vibrafoon" },
          { en: "Xylophone", es: "Xilófono", de: "Xylophon", nl: "Xylofoon" },
          { en: "Marimba", es: "Marimba", de: "Marimba", nl: "Marimba" },
          { en: "Glockenspiel", es: "Glockenspiel", de: "Glockenspiel", nl: "Klokkenspel" }
        ],
        correct: 0,
        explanation: {
          en: "The vibraphone has aluminum or steel bars with resonating tubes underneath that can be opened and closed by rotating discs to create vibrato.",
          es: "El vibráfono tiene barras de aluminio o acero con tubos resonadores debajo que pueden abrirse y cerrarse con discos giratorios para crear vibrato.",
          de: "Das Vibraphon hat Aluminium- oder Stahlstäbe mit Resonatorrohren darunter, die durch rotierende Scheiben geöffnet und geschlossen werden können, um Vibrato zu erzeugen.",
          nl: "De vibrafoon heeft aluminium of stalen staven met resonerende buizen eronder die kunnen worden geopend en gesloten door roterende schijven om vibrato te creëren."
        }
      },
      {
        question: {
          en: "What is the Scottish bagpipe's melody pipe called?",
          es: "¿Cómo se llama la pipa de melodía de la gaita escocesa?",
          de: "Wie nennt man die Melodiepfeife des schottischen Dudelsacks?",
          nl: "Hoe heet de melodiepijp van de Schotse doedelzak?"
        },
        options: [
          { en: "Chanter", es: "Chanter", de: "Chanter", nl: "Chanter" },
          { en: "Drone", es: "Bordón", de: "Bordun", nl: "Bordun" },
          { en: "Blowpipe", es: "Tubo de soplar", de: "Blasrohr", nl: "Blaaspijp" },
          { en: "Reed pipe", es: "Tubo de caña", de: "Rohrpfeife", nl: "Rietpijp" }
        ],
        correct: 0,
        explanation: {
          en: "The chanter is the melody pipe of the bagpipe, fingered like a recorder to play the tune, while drones provide the harmonic accompaniment.",
          es: "El chanter es la pipa de melodía de la gaita, digitada como una flauta dulce para tocar la melodía, mientras los bordones proporcionan acompañamiento armónico.",
          de: "Der Chanter ist die Melodiepfeife des Dudelsacks, wie eine Blockflöte gegriffen, um die Melodie zu spielen, während Bordune die harmonische Begleitung liefern.",
          nl: "De chanter is de melodiepijp van de doedelzak, gegrepen zoals een blokfluit om de melodie te spelen, terwijl borduns de harmonische begeleiding verzorgen."
        }
      },
      {
        question: {
          en: "Which instrument is known as the 'king of the dance floor' in Latin music?",
          es: "¿Qué instrumento es conocido como el 'rey de la pista de baile' en la música latina?",
          de: "Welches Instrument ist in der lateinamerikanischen Musik als 'König der Tanzfläche' bekannt?",
          nl: "Welk instrument staat bekend als de 'koning van de dansvloer' in Latijnse muziek?"
        },
        options: [
          { en: "Conga drums", es: "Congas", de: "Conga-Trommeln", nl: "Conga drums" },
          { en: "Maracas", es: "Maracas", de: "Maracas", nl: "Maracas" },
          { en: "Timbales", es: "Timbales", de: "Timbales", nl: "Timbales" },
          { en: "Bongos", es: "Bongos", de: "Bongos", nl: "Bongo's" }
        ],
        correct: 0,
        explanation: {
          en: "Conga drums are central to Latin dance music, providing the driving rhythmic foundation for salsa, mambo, and other Latin dance genres.",
          es: "Las congas son centrales en la música de baile latina, proporcionando la base rítmica impulsora para salsa, mambo y otros géneros de baile latino.",
          de: "Conga-Trommeln sind zentral für lateinamerikanische Tanzmusik und bieten die treibende rhythmische Grundlage für Salsa, Mambo und andere lateinamerikanische Tanzgenres.",
          nl: "Conga drums zijn centraal in Latijnse dansmuziek, ze bieden de drijvende ritmische basis voor salsa, mambo en andere Latijnse dansgenres."
        }
      },
      {
        question: {
          en: "What is the difference between a cornet and a trumpet?",
          es: "¿Cuál es la diferencia entre una corneta y una trompeta?",
          de: "Was ist der Unterschied zwischen einem Kornett und einer Trompete?",
          nl: "Wat is het verschil tussen een kornet en een trompet?"
        },
        options: [
          { en: "Cornet has a more conical bore", es: "La corneta tiene un tubo más cónico", de: "Das Kornett hat eine konischere Bohrung", nl: "Kornet heeft een meer conische boring" },
          { en: "Cornet is larger", es: "La corneta es más grande", de: "Das Kornett ist größer", nl: "Kornet is groter" },
          { en: "Cornet has four valves", es: "La corneta tiene cuatro válvulas", de: "Das Kornett hat vier Ventile", nl: "Kornet heeft vier kleppen" },
          { en: "No difference", es: "No hay diferencia", de: "Kein Unterschied", nl: "Geen verschil" }
        ],
        correct: 0,
        explanation: {
          en: "The cornet has a more conical bore (gradually widening tube) compared to the trumpet's more cylindrical bore, giving it a warmer, mellower tone.",
          es: "La corneta tiene un tubo más cónico (tubo que se ensancha gradualmente) comparado con el tubo más cilíndrico de la trompeta, dándole un tono más cálido y suave.",
          de: "Das Kornett hat eine konischere Bohrung (sich allmählich erweiterndes Rohr) im Vergleich zur zylindrischeren Bohrung der Trompete, was ihm einen wärmeren, milderen Klang verleiht.",
          nl: "De kornet heeft een meer conische boring (geleidelijk verbredende buis) vergeleken met de meer cilindervormige boring van de trompet, wat het een warmere, zachtere toon geeft."
        }
      },
      {
        question: {
          en: "Which string technique involves plucking the string with the finger instead of using a bow?",
          es: "¿Qué técnica de cuerda involucra pellizcar la cuerda con el dedo en lugar de usar un arco?",
          de: "Welche Streichertechnik beinhaltet das Zupfen der Saite mit dem Finger anstatt einen Bogen zu verwenden?",
          nl: "Welke strijktechniek houdt in dat de snaar met de vinger wordt getokkeld in plaats van een strijkstok te gebruiken?"
        },
        options: [
          { en: "Pizzicato", es: "Pizzicato", de: "Pizzicato", nl: "Pizzicato" },
          { en: "Legato", es: "Legato", de: "Legato", nl: "Legato" },
          { en: "Staccato", es: "Staccato", de: "Staccato", nl: "Staccato" },
          { en: "Vibrato", es: "Vibrato", de: "Vibrato", nl: "Vibrato" }
        ],
        correct: 0,
        explanation: {
          en: "Pizzicato is a string technique where players pluck the strings with their fingers instead of using the bow, creating a distinct percussive sound.",
          es: "Pizzicato es una técnica de cuerda donde los intérpretes pellizcan las cuerdas con sus dedos en lugar de usar el arco, creando un sonido percusivo distinto.",
          de: "Pizzicato ist eine Streichertechnik, bei der die Spieler die Saiten mit den Fingern zupfen anstatt den Bogen zu verwenden, wodurch ein charakteristischer perkussiver Klang entsteht.",
          nl: "Pizzicato is een strijktechniek waarbij spelers de snaren met hun vingers tokkelen in plaats van de strijkstok te gebruiken, wat een kenmerkend percussief geluid creëert."
        }
      },
      {
        question: {
          en: "What is the Chinese string instrument similar to a dulcimer called?",
          es: "¿Cómo se llama el instrumento de cuerda chino similar a un dulcémele?",
          de: "Wie heißt das chinesische Saiteninstrument, das einem Hackbrett ähnelt?",
          nl: "Hoe heet het Chinese snaarinstrument dat lijkt op een cimbaal?"
        },
        options: [
          { en: "Yangqin", es: "Yangqin", de: "Yangqin", nl: "Yangqin" },
          { en: "Guzheng", es: "Guzheng", de: "Guzheng", nl: "Guzheng" },
          { en: "Erhu", es: "Erhu", de: "Erhu", nl: "Erhu" },
          { en: "Pipa", es: "Pipa", de: "Pipa", nl: "Pipa" }
        ],
        correct: 0,
        explanation: {
          en: "The yangqin is a Chinese hammered dulcimer with strings struck by bamboo hammers, widely used in Chinese traditional and folk music.",
          es: "El yangqin es un dulcémele percutido chino con cuerdas golpeadas por martillos de bambú, ampliamente usado en música tradicional y folclórica china.",
          de: "Das Yangqin ist ein chinesisches Hackbrett mit Saiten, die von Bambus-Hämmern angeschlagen werden, weit verbreitet in der chinesischen traditionellen und Volksmusik.",
          nl: "De yangqin is een Chinese hamercimbaal met snaren die worden geslagen door bamboe hamers, veel gebruikt in Chinese traditionele en volksmuziek."
        }
      },
      {
        question: {
          en: "Which brass instrument was invented specifically for marching bands?",
          es: "¿Qué instrumento de viento metal fue inventado específicamente para bandas de marcha?",
          de: "Welches Blechblasinstrument wurde speziell für Marschkapellen erfunden?",
          nl: "Welk koperblaasinstrument werd speciaal uitgevonden voor marcherende orkesten?"
        },
        options: [
          { en: "Sousaphone", es: "Sousáfono", de: "Sousaphon", nl: "Sousafoon" },
          { en: "Tuba", es: "Tuba", de: "Tuba", nl: "Tuba" },
          { en: "Euphonium", es: "Eufonio", de: "Euphonium", nl: "Euphonium" },
          { en: "Baritone horn", es: "Trompa barítono", de: "Baritonhorn", nl: "Baritonhoorn" }
        ],
        correct: 0,
        explanation: {
          en: "The sousaphone was invented by John Philip Sousa specifically for marching bands, wrapping around the player's body for easier carrying while marching.",
          es: "El sousáfono fue inventado por John Philip Sousa específicamente para bandas de marcha, envolviendo alrededor del cuerpo del intérprete para llevarlo más fácilmente mientras marcha.",
          de: "Das Sousaphon wurde von John Philip Sousa speziell für Marschkapellen erfunden und umschließt den Körper des Spielers für einfacheres Tragen beim Marschieren.",
          nl: "De sousafoon werd uitgevonden door John Philip Sousa specifiek voor marcherende orkesten, waarbij het rond het lichaam van de speler wikkelt voor gemakkelijker dragen tijdens het marcheren."
        }
      },
      {
        question: {
          en: "What is the playing technique called where a string player rapidly alternates between two notes?",
          es: "¿Cómo se llama la técnica donde un intérprete de cuerda alterna rápidamente entre dos notas?",
          de: "Wie nennt man die Spieltechnik, bei der ein Streicher schnell zwischen zwei Noten wechselt?",
          nl: "Hoe heet de speeltechniek waarbij een strijker snel afwisselt tussen twee noten?"
        },
        options: [
          { en: "Trill", es: "Trino", de: "Triller", nl: "Triller" },
          { en: "Glissando", es: "Glissando", de: "Glissando", nl: "Glissando" },
          { en: "Tremolo", es: "Tremolo", de: "Tremolo", nl: "Tremolo" },
          { en: "Portamento", es: "Portamento", de: "Portamento", nl: "Portamento" }
        ],
        correct: 0,
        explanation: {
          en: "A trill is an ornament where the player rapidly alternates between the main note and the note a semitone or tone above it.",
          es: "Un trino es un ornamento donde el intérprete alterna rápidamente entre la nota principal y la nota un semitono o tono arriba de ella.",
          de: "Ein Triller ist eine Verzierung, bei der der Spieler schnell zwischen der Hauptnote und der Note einen Halbton oder Ganzton darüber wechselt.",
          nl: "Een triller is een ornament waarbij de speler snel afwisselt tussen de hoofdnoot en de noot een halve of hele toon erboven."
        }
      },
      {
        question: {
          en: "Which keyboard instrument uses hammers to strike strings but has no sustain pedal?",
          es: "¿Qué instrumento de teclado usa martillos para golpear cuerdas pero no tiene pedal de sustain?",
          de: "Welches Tasteninstrument verwendet Hämmer zum Anschlagen von Saiten, hat aber kein Sustain-Pedal?",
          nl: "Welk toetsinstrument gebruikt hamers om snaren aan te slaan maar heeft geen sustain pedaal?"
        },
        options: [
          { en: "Clavichord", es: "Clavicordio", de: "Klavichord", nl: "Clavichord" },
          { en: "Piano", es: "Piano", de: "Klavier", nl: "Piano" },
          { en: "Harpsichord", es: "Clavecín", de: "Cembalo", nl: "Klavecimbel" },
          { en: "Celesta", es: "Celesta", de: "Celesta", nl: "Celesta" }
        ],
        correct: 0,
        explanation: {
          en: "The clavichord uses tangents (small metal blades) to strike the strings directly, allowing for subtle dynamic control but without sustain capability.",
          es: "El clavicordio usa tangentes (pequeñas láminas metálicas) para golpear las cuerdas directamente, permitiendo control dinámico sutil pero sin capacidad de sustain.",
          de: "Das Klavichord verwendet Tangenten (kleine Metallklingen) zum direkten Anschlagen der Saiten, was subtile Dynamikkontrolle ermöglicht, aber ohne Sustain-Fähigkeit.",
          nl: "De clavichord gebruikt tangenten (kleine metalen bladen) om de snaren direct aan te slaan, wat subtiele dynamische controle mogelijk maakt maar zonder sustain mogelijkheid."
        }
      },
      {
        question: {
          en: "What is the metal slide on a steel guitar or dobro used for?",
          es: "¿Para qué se usa la vara metálica en una guitarra de acero o dobro?",
          de: "Wofür wird der Metallslide auf einer Steel-Guitar oder Dobro verwendet?",
          nl: "Waarvoor wordt de metalen slide op een steel guitar of dobro gebruikt?"
        },
        options: [
          { en: "To change pitch by sliding along strings", es: "Para cambiar el tono deslizándose por las cuerdas", de: "Um die Tonhöhe durch Gleiten entlang der Saiten zu ändern", nl: "Om toonhoogte te veranderen door langs snaren te glijden" },
          { en: "To mute the strings", es: "Para silenciar las cuerdas", de: "Um die Saiten zu dämpfen", nl: "Om de snaren te dempen" },
          { en: "To amplify the sound", es: "Para amplificar el sonido", de: "Um den Klang zu verstärken", nl: "Om het geluid te versterken" },
          { en: "To tune the strings", es: "Para afinar las cuerdas", de: "Um die Saiten zu stimmen", nl: "Om de snaren te stemmen" }
        ],
        correct: 0,
        explanation: {
          en: "The metal slide (or steel bar) is placed on the strings without pressing them to the frets, allowing smooth gliding between pitches for a distinctive sliding sound.",
          es: "La vara metálica (o barra de acero) se coloca sobre las cuerdas sin presionarlas contra los trastes, permitiendo un deslizamiento suave entre tonos para un sonido deslizante distintivo.",
          de: "Der Metallslide (oder Stahlstab) wird auf die Saiten gelegt, ohne sie auf die Bünde zu drücken, was sanftes Gleiten zwischen Tonhöhen für einen charakteristischen Slide-Sound ermöglicht.",
          nl: "De metalen slide (of stalen staaf) wordt op de snaren geplaatst zonder ze tegen de fretten te drukken, wat soepel glijden tussen toonhoogtes mogelijk maakt voor een kenmerkend glijdend geluid."
        }
      },
      {
        question: {
          en: "Which percussion instrument originated in Trinidad and is made from oil drums?",
          es: "¿Qué instrumento de percusión se originó en Trinidad y está hecho de tambores de aceite?",
          de: "Welches Schlaginstrument stammt aus Trinidad und wird aus Ölfässern hergestellt?",
          nl: "Welk slagwerkinstrument komt oorspronkelijk uit Trinidad en is gemaakt van oliëvaten?"
        },
        options: [
          { en: "Steel drums (steel pan)", es: "Tambores de acero (steel pan)", de: "Steel Drums (Steel Pan)", nl: "Steel drums (steel pan)" },
          { en: "Conga drums", es: "Congas", de: "Conga-Trommeln", nl: "Conga drums" },
          { en: "Bongo drums", es: "Bongos", de: "Bongo-Trommeln", nl: "Bongo drums" },
          { en: "Timbales", es: "Timbales", de: "Timbales", nl: "Timbales" }
        ],
        correct: 0,
        explanation: {
          en: "Steel drums (or steel pans) originated in Trinidad in the 1930s, created by hammering and tuning sections of oil drums to produce different pitched notes.",
          es: "Los tambores de acero (o steel pans) se originaron en Trinidad en los años 1930, creados martillando y afinando secciones de tambores de aceite para producir diferentes notas afinadas.",
          de: "Steel Drums (oder Steel Pans) entstanden in den 1930er Jahren in Trinidad, geschaffen durch Hämmern und Stimmen von Teilen von Ölfässern, um verschiedene Tonhöhen zu erzeugen.",
          nl: "Steel drums (of steel pans) ontstonden in Trinidad in de jaren 1930, gecreëerd door het hameren en stemmen van delen van oliëvaten om verschillende toonhoogtes te produceren."
        }
      },
      {
        question: {
          en: "What type of mouthpiece does a French horn use?",
          es: "¿Qué tipo de boquilla usa una trompa francesa?",
          de: "Welche Art von Mundstück verwendet ein Waldhorn?",
          nl: "Wat voor soort mondstuk gebruikt een hoorn?"
        },
        options: [
          { en: "Funnel-shaped (conical)", es: "En forma de embudo (cónica)", de: "Trichterförmig (konisch)", nl: "Trechtervormig (conisch)" },
          { en: "Cup-shaped", es: "En forma de copa", de: "Schalenförmig", nl: "Kopvormig" },
          { en: "Flat disc", es: "Disco plano", de: "Flache Scheibe", nl: "Platte schijf" },
          { en: "Reed mouthpiece", es: "Boquilla de caña", de: "Rohrblattmundstück", nl: "Riet mondstuk" }
        ],
        correct: 0,
        explanation: {
          en: "The French horn uses a funnel-shaped (conical) mouthpiece, which contributes to its mellow, warm tone compared to the brighter sound of cup-shaped mouthpieces used by trumpets.",
          es: "La trompa francesa usa una boquilla en forma de embudo (cónica), que contribuye a su tono suave y cálido comparado con el sonido más brillante de las boquillas en forma de copa usadas por las trompetas.",
          de: "Das Waldhorn verwendet ein trichterförmiges (konisches) Mundstück, das zu seinem weichen, warmen Klang beiträgt im Vergleich zum helleren Klang schalenförmiger Mundstücke von Trompeten.",
          nl: "De hoorn gebruikt een trechtervormig (conisch) mondstuk, wat bijdraagt aan zijn zachte, warme toon vergeleken met het helderdere geluid van kopvormige mondstukken gebruikt door trompetten."
        }
      },
      {
        question: {
          en: "Which instrument is considered the predecessor to the modern piano?",
          es: "¿Qué instrumento se considera el predecesor del piano moderno?",
          de: "Welches Instrument gilt als Vorläufer des modernen Klaviers?",
          nl: "Welk instrument wordt beschouwd als de voorloper van de moderne piano?"
        },
        options: [
          { en: "Fortepiano", es: "Fortepiano", de: "Fortepiano", nl: "Fortepiano" },
          { en: "Harpsichord", es: "Clavecín", de: "Cembalo", nl: "Klavecimbel" },
          { en: "Clavichord", es: "Clavicordio", de: "Klavichord", nl: "Clavichord" },
          { en: "Virginal", es: "Virginal", de: "Virginal", nl: "Virginal" }
        ],
        correct: 0,
        explanation: {
          en: "The fortepiano, invented by Bartolomeo Cristofori around 1700, was the direct predecessor to the modern piano, featuring hammers that could play both forte and piano (loud and soft).",
          es: "El fortepiano, inventado por Bartolomeo Cristofori alrededor de 1700, fue el predecesor directo del piano moderno, con martillos que podían tocar tanto forte como piano (fuerte y suave).",
          de: "Das Fortepiano, um 1700 von Bartolomeo Cristofori erfunden, war der direkte Vorläufer des modernen Klaviers, mit Hämmern, die sowohl forte als auch piano (laut und leise) spielen konnten.",
          nl: "De fortepiano, uitgevonden door Bartolomeo Cristofori rond 1700, was de directe voorloper van de moderne piano, met hamers die zowel forte als piano (luid en zacht) konden spelen."
        }
      },
      {
        question: {
          en: "What is unique about the sound production of a glass harmonica?",
          es: "¿Qué es único sobre la producción de sonido de una armónica de cristal?",
          de: "Was ist einzigartig an der Klangerzeugung einer Glasharmonika?",
          nl: "Wat is uniek aan de geluidproductie van een glasharmonica?"
        },
        options: [
          { en: "Friction on rotating glass bowls", es: "Fricción en cubos de vidrio giratorios", de: "Reibung an rotierenden Glasschalen", nl: "Wrijving op draaiende glazen kommen" },
          { en: "Hammers striking glass bars", es: "Martillos golpeando barras de vidrio", de: "Hämmer schlagen Glasstäbe", nl: "Hamers die glazen staven slaan" },
          { en: "Air blown through glass tubes", es: "Aire soplado a través de tubos de vidrio", de: "Luft durch Glasröhren geblasen", nl: "Lucht geblazen door glazen buizen" },
          { en: "Plucking glass strings", es: "Pulsando cuerdas de vidrio", de: "Zupfen von Glassaiten", nl: "Tokkelen van glazen snaren" }
        ],
        correct: 0,
        explanation: {
          en: "The glass harmonica produces sound by friction when the player's moistened fingers touch the rims of rotating glass bowls, creating ethereal, pure tones.",
          es: "La armónica de cristal produce sonido por fricción cuando los dedos humedecidos del intérprete tocan los bordes de cubos de vidrio giratorios, creando tonos etéreos y puros.",
          de: "Die Glasharmonika erzeugt Klang durch Reibung, wenn die befeuchteten Finger des Spielers die Ränder rotierender Glasschalen berühren und ätherische, reine Töne erzeugen.",
          nl: "De glasharmonica produceert geluid door wrijving wanneer de bevochtigde vingers van de speler de randen van draaiende glazen kommen raken, waardoor etherische, zuivere tonen ontstaan."
        }
      },
      {
        question: {
          en: "Which ancient wind instrument is made from a ram's horn?",
          es: "¿Qué instrumento de viento antiguo está hecho de cuerno de carnero?",
          de: "Welches antike Blasinstrument wird aus einem Widderhorn hergestellt?",
          nl: "Welk oud blaasinstrument is gemaakt van een ramshoorn?"
        },
        options: [
          { en: "Shofar", es: "Shofar", de: "Schofar", nl: "Shofar" },
          { en: "Alphorn", es: "Cuerno alpino", de: "Alphorn", nl: "Alpenhoorn" },
          { en: "Hunting horn", es: "Cuerno de caza", de: "Jagdhorn", nl: "Jachthoorn" },
          { en: "Natural trumpet", es: "Trompeta natural", de: "Naturtrompete", nl: "Natuurtrompet" }
        ],
        correct: 0,
        explanation: {
          en: "The shofar is an ancient Jewish ritual wind instrument made from a ram's horn, traditionally blown during religious ceremonies and holidays like Rosh Hashanah.",
          es: "El shofar es un instrumento ritual de viento judío antiguo hecho de cuerno de carnero, tradicionalmente soplado durante ceremonias religiosas y fiestas como Rosh Hashaná.",
          de: "Das Schofar ist ein antikes jüdisches rituelles Blasinstrument aus einem Widderhorn, traditionell geblasen bei religiösen Zeremonien und Feiertagen wie Rosch ha-Schana.",
          nl: "De shofar is een oud Joods ritueel blaasinstrument gemaakt van een ramshoorn, traditioneel geblazen tijdens religieuze ceremonies en feestdagen zoals Rosh Hashanah."
        }
      },
      {
        question: {
          en: "What is the highest-pitched member of the violin family?",
          es: "¿Cuál es el miembro de tono más agudo de la familia del violín?",
          de: "Was ist das höchste Mitglied der Violinfamilie?",
          nl: "Wat is het hoogste lid van de vioolfamilie?"
        },
        options: [
          { en: "Piccolo violin", es: "Violín piccolo", de: "Piccolo-Geige", nl: "Piccolo viool" },
          { en: "Regular violin", es: "Violín regular", de: "Normale Violine", nl: "Gewone viool" },
          { en: "Viola", es: "Viola", de: "Viola", nl: "Altviool" },
          { en: "Violin d'amore", es: "Violín d'amore", de: "Violin d'amore", nl: "Violin d'amore" }
        ],
        correct: 0,
        explanation: {
          en: "The piccolo violin is the smallest and highest-pitched member of the violin family, tuned a fourth higher than a standard violin and rarely used in modern orchestras.",
          es: "El violín piccolo es el miembro más pequeño y de tono más agudo de la familia del violín, afinado una cuarta más alta que un violín estándar y raramente usado en orquestas modernas.",
          de: "Die Piccolo-Geige ist das kleinste und höchste Mitglied der Violinfamilie, eine Quarte höher gestimmt als eine Standard-Violine und selten in modernen Orchestern verwendet.",
          nl: "De piccolo viool is het kleinste en hoogste lid van de vioolfamilie, een kwart hoger gestemd dan een standaard viool en zelden gebruikt in moderne orkesten."
        }
      },
      {
        question: {
          en: "Which percussion instrument consists of suspended metal plates that create a shimmering sound?",
          es: "¿Qué instrumento de percusión consiste en placas metálicas suspendidas que crean un sonido brillante?",
          de: "Welches Schlaginstrument besteht aus hängenden Metallplatten, die einen schimmernden Klang erzeugen?",
          nl: "Welk slagwerkinstrument bestaat uit hangende metalen platen die een glinsterende klank creëren?"
        },
        options: [
          { en: "Crotales", es: "Crótalos", de: "Crotales", nl: "Crotales" },
          { en: "Triangle", es: "Triángulo", de: "Triangel", nl: "Triangel" },
          { en: "Cymbals", es: "Platillos", de: "Becken", nl: "Bekkens" },
          { en: "Tam-tam", es: "Tam-tam", de: "Tam-tam", nl: "Tam-tam" }
        ],
        correct: 0,
        explanation: {
          en: "Crotales are small, thick bronze discs suspended from a frame and struck with mallets, producing a clear, bell-like shimmer often heard in orchestral and film music.",
          es: "Los crótalos son pequeños discos de bronce gruesos suspendidos de un marco y golpeados con mazos, produciendo un brillo claro como campana a menudo escuchado en música orquestal y cinematográfica.",
          de: "Crotales sind kleine, dicke Bronzescheiben, die an einem Rahmen hängen und mit Schlägeln angeschlagen werden, was ein klares, glockenähnliches Schimmern erzeugt, das oft in Orchester- und Filmmusik zu hören ist.",
          nl: "Crotales zijn kleine, dikke bronzen schijven die aan een frame hangen en met hamers worden geslagen, wat een helder, klokachtig glinsteren produceert dat vaak gehoord wordt in orkest- en filmmuziek."
        }
      },
      {
        question: {
          en: "What is the traditional Aboriginal Australian wind instrument called?",
          es: "¿Cómo se llama el instrumento de viento tradicional aborigen australiano?",
          de: "Wie heißt das traditionelle australische Aborigine-Blasinstrument?",
          nl: "Hoe heet het traditionele Aborigine Australische blaasinstrument?"
        },
        options: [
          { en: "Didgeridoo", es: "Didgeridoo", de: "Didgeridoo", nl: "Didgeridoo" },
          { en: "Bullroarer", es: "Bullroarer", de: "Schwirrholz", nl: "Bullroarer" },
          { en: "Clap sticks", es: "Palos de chasquido", de: "Klatschstöcke", nl: "Klap stokken" },
          { en: "Yidaki", es: "Yidaki", de: "Yidaki", nl: "Yidaki" }
        ],
        correct: 0,
        explanation: {
          en: "The didgeridoo (also called yidaki in some regions) is a traditional Aboriginal Australian wind instrument, one of the world's oldest wind instruments, dating back at least 40,000 years.",
          es: "El didgeridoo (también llamado yidaki en algunas regiones) es un instrumento de viento tradicional aborigen australiano, uno de los instrumentos de viento más antiguos del mundo, que data de al menos 40,000 años.",
          de: "Das Didgeridoo (in einigen Regionen auch Yidaki genannt) ist ein traditionelles australisches Aborigine-Blasinstrument, eines der ältesten Blasinstrumente der Welt, mindestens 40.000 Jahre alt.",
          nl: "De didgeridoo (ook yidaki genoemd in sommige regio's) is een traditioneel Aborigine Australisch blaasinstrument, een van de oudste blaasinstrumenten ter wereld, minstens 40.000 jaar oud."
        }
      },
      {
        question: {
          en: "Which stringed instrument has sympathetic strings that vibrate without being played directly?",
          es: "¿Qué instrumento de cuerda tiene cuerdas simpáticas que vibran sin ser tocadas directamente?",
          de: "Welches Saiteninstrument hat Resonanzsaiten, die ohne direktes Spielen schwingen?",
          nl: "Welk snaarinstrument heeft sympathetische snaren die trillen zonder direct bespeeld te worden?"
        },
        options: [
          { en: "Viola d'amore", es: "Viola d'amore", de: "Viola d'amore", nl: "Viola d'amore" },
          { en: "Regular violin", es: "Violín regular", de: "Normale Violine", nl: "Gewone viool" },
          { en: "Guitar", es: "Guitarra", de: "Gitarre", nl: "Gitaar" },
          { en: "Banjo", es: "Banjo", de: "Banjo", nl: "Banjo" }
        ],
        correct: 0,
        explanation: {
          en: "The viola d'amore has 6-7 main playing strings and 7-14 sympathetic strings underneath that resonate automatically when the main strings are played, creating a rich, ethereal sound.",
          es: "La viola d'amore tiene 6-7 cuerdas principales de ejecución y 7-14 cuerdas simpáticas debajo que resuenan automáticamente cuando se tocan las cuerdas principales, creando un sonido rico y etéreo.",
          de: "Die Viola d'amore hat 6-7 Hauptspielstränge und 7-14 Resonanzsaiten darunter, die automatisch mitschwingen, wenn die Hauptsaiten gespielt werden, wodurch ein reicher, ätherischer Klang entsteht.",
          nl: "De viola d'amore heeft 6-7 hoofdspeelsnaren en 7-14 sympathetische snaren eronder die automatisch resoneren wanneer de hoofdsnaren worden bespeeld, wat een rijke, etherische klank creëert."
        }
      },
      {
        question: {
          en: "What is the metal device used to change the pitch of a guitar string called?",
          es: "¿Cómo se llama el dispositivo metálico usado para cambiar el tono de una cuerda de guitarra?",
          de: "Wie nennt man das Metallgerät zum Ändern der Tonhöhe einer Gitarrensaite?",
          nl: "Hoe heet het metalen apparaat dat wordt gebruikt om de toonhoogte van een gitaarsnaar te veranderen?"
        },
        options: [
          { en: "Capo", es: "Cejilla", de: "Kapodaster", nl: "Capo" },
          { en: "Tuning peg", es: "Clavija de afinación", de: "Stimmwirbel", nl: "Stemschroef" },
          { en: "Fret", es: "Traste", de: "Bund", nl: "Fret" },
          { en: "Bridge", es: "Puente", de: "Brücke", nl: "Brug" }
        ],
        correct: 0,
        explanation: {
          en: "A capo is a clamp-like device that presses down on all strings at a specific fret, effectively raising the pitch of all strings by the same interval.",
          es: "Una cejilla es un dispositivo tipo abrazadera que presiona todas las cuerdas en un traste específico, elevando efectivamente el tono de todas las cuerdas por el mismo intervalo.",
          de: "Ein Kapodaster ist ein klammerartiges Gerät, das alle Saiten an einem bestimmten Bund herunterdrückt und so die Tonhöhe aller Saiten um dasselbe Intervall erhöht.",
          nl: "Een capo is een klemachtig apparaat dat alle snaren op een specifieke fret indrukt, waardoor de toonhoogte van alle snaren met hetzelfde interval wordt verhoogd."
        }
      },
      {
        question: {
          en: "Which keyboard instrument produces sound by forcing air through pipes?",
          es: "¿Qué instrumento de teclado produce sonido forzando aire a través de tubos?",
          de: "Welches Tasteninstrument erzeugt Klang, indem Luft durch Pfeifen gepresst wird?",
          nl: "Welk toetsinstrument produceert geluid door lucht door pijpen te persen?"
        },
        options: [
          { en: "Pipe organ", es: "Órgano de tubos", de: "Pfeifenorgel", nl: "Pijporgel" },
          { en: "Piano", es: "Piano", de: "Klavier", nl: "Piano" },
          { en: "Harpsichord", es: "Clavecín", de: "Cembalo", nl: "Klavecimbel" },
          { en: "Synthesizer", es: "Sintetizador", de: "Synthesizer", nl: "Synthesizer" }
        ],
        correct: 0,
        explanation: {
          en: "The pipe organ produces sound by forcing pressurized air through thousands of pipes of various sizes and materials, each pipe producing a specific pitch and timbre.",
          es: "El órgano de tubos produce sonido forzando aire presurizado a través de miles de tubos de varios tamaños y materiales, cada tubo produciendo un tono y timbre específico.",
          de: "Die Pfeifenorgel erzeugt Klang, indem Druckluft durch Tausende von Pfeifen verschiedener Größen und Materialien gepresst wird, wobei jede Pfeife eine bestimmte Tonhöhe und Klangfarbe erzeugt.",
          nl: "Het pijporgel produceert geluid door perslucht door duizenden pijpen van verschillende groottes en materialen te persen, waarbij elke pijp een specifieke toonhoogte en timbre produceert."
        }
      },
      {
        question: {
          en: "What is the electronic wind instrument that simulates various acoustic instruments called?",
          es: "¿Cómo se llama el instrumento de viento electrónico que simula varios instrumentos acústicos?",
          de: "Wie nennt man das elektronische Blasinstrument, das verschiedene akustische Instrumente simuliert?",
          nl: "Hoe heet het elektronische blaasinstrument dat verschillende akoestische instrumenten simuleert?"
        },
        options: [
          { en: "EWI (Electronic Wind Instrument)", es: "EWI (Instrumento de Viento Electrónico)", de: "EWI (Elektronisches Blasinstrument)", nl: "EWI (Elektronisch Blaasinstrument)" },
          { en: "MIDI controller", es: "Controlador MIDI", de: "MIDI-Controller", nl: "MIDI controller" },
          { en: "Synthesizer", es: "Sintetizador", de: "Synthesizer", nl: "Synthesizer" },
          { en: "Theremin", es: "Theremin", de: "Theremin", nl: "Theremin" }
        ],
        correct: 0,
        explanation: {
          en: "The EWI (Electronic Wind Instrument) is played like a traditional wind instrument using breath control and fingering, but produces electronic sounds that can simulate various acoustic instruments.",
          es: "El EWI (Instrumento de Viento Electrónico) se toca como un instrumento de viento tradicional usando control de respiración y digitación, pero produce sonidos electrónicos que pueden simular varios instrumentos acústicos.",
          de: "Das EWI (Elektronisches Blasinstrument) wird wie ein traditionelles Blasinstrument mit Atemkontrolle und Fingersatz gespielt, erzeugt aber elektronische Klänge, die verschiedene akustische Instrumente simulieren können.",
          nl: "De EWI (Elektronisch Blaasinstrument) wordt bespeeld als een traditioneel blaasinstrument met ademhalingscontrole en vingerzetting, maar produceert elektronische klanken die verschillende akoestische instrumenten kunnen simuleren."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('brain-teaser/music', level3);
  }
})();
