// Quiz Level 1: Hiërogliefen - Basic Hieroglyph Knowledge & Simple Symbols
(function() {
  "use strict";

  const level1 = {
    name: {
      en: "Basic Hieroglyph Knowledge & Simple Symbols",
      es: "Conocimiento Básico de Jeroglíficos y Símbolos Simples",
      de: "Grundlagen der Hieroglyphen und einfache Symbole",
      nl: "Basiskennis Hiërogliefen & Eenvoudige Symbolen"
    },
    questions: [
      {
        question: {
          en: "What writing system did ancient Egyptians use for monumental inscriptions?",
          es: "¿Qué sistema de escritura usaban los antiguos egipcios para inscripciones monumentales?",
          de: "Welches Schriftsystem verwendeten die alten Ägypter für monumentale Inschriften?",
          nl: "Welk schriftsysteem gebruikten de oude Egyptenaren voor monumentale inscripties?"
        },
        options: [
          { en: "Hieroglyphs", es: "Jeroglíficos", de: "Hieroglyphen", nl: "Hiërogliefen" },
          { en: "Cuneiform", es: "Cuneiforme", de: "Keilschrift", nl: "Spijkerschrift" },
          { en: "Phoenician", es: "Fenicio", de: "Phönizisch", nl: "Fenicisch" },
          { en: "Linear A", es: "Lineal A", de: "Linear A", nl: "Lineair A" }
        ],
        correct: 0,
        explanation: {
          en: "Hieroglyphs were the formal writing system used by ancient Egyptians for religious texts, monumental inscriptions, and official documents. The word 'hieroglyph' comes from Greek meaning 'sacred carving'.",
          es: "Los jeroglíficos eran el sistema de escritura formal usado por los antiguos egipcios para textos religiosos, inscripciones monumentales y documentos oficiales. La palabra 'jeroglífico' viene del griego y significa 'tallado sagrado'.",
          de: "Hieroglyphen waren das formelle Schriftsystem der alten Ägypter für religiöse Texte, monumentale Inschriften und offizielle Dokumente. Das Wort 'Hieroglyphe' kommt aus dem Griechischen und bedeutet 'heilige Schnitzerei'.",
          nl: "Hiërogliefen waren het formele schriftsysteem dat de oude Egyptenaren gebruikten voor religieuze teksten, monumentale inscripties en officiële documenten. Het woord 'hiëroglief' komt uit het Grieks en betekent 'heilige gravering'."
        }
      },
      {
        question: {
          en: "Which direction could hieroglyphs be read?",
          es: "¿En qué dirección se podían leer los jeroglíficos?",
          de: "In welche Richtung konnten Hieroglyphen gelesen werden?",
          nl: "In welke richting konden hiërogliefen worden gelezen?"
        },
        options: [
          { en: "Only left to right", es: "Solo de izquierda a derecha", de: "Nur von links nach rechts", nl: "Alleen van links naar rechts" },
          { en: "Only right to left", es: "Solo de derecha a izquierda", de: "Nur von rechts nach links", nl: "Alleen van rechts naar links" },
          { en: "Left to right, right to left, or top to bottom", es: "De izquierda a derecha, de derecha a izquierda, o de arriba a abajo", de: "Von links nach rechts, von rechts nach links oder von oben nach unten", nl: "Van links naar rechts, van rechts naar links, of van boven naar beneden" },
          { en: "Only top to bottom", es: "Solo de arriba a abajo", de: "Nur von oben nach unten", nl: "Alleen van boven naar beneden" }
        ],
        correct: 2,
        explanation: {
          en: "Hieroglyphs were very flexible in their orientation. They could be read from left to right, right to left, or in vertical columns from top to bottom. The direction was indicated by which way the human and animal figures faced.",
          es: "Los jeroglíficos eran muy flexibles en su orientación. Se podían leer de izquierda a derecha, de derecha a izquierda, o en columnas verticales de arriba a abajo. La dirección se indicaba por hacia dónde miraban las figuras humanas y animales.",
          de: "Hieroglyphen waren sehr flexibel in ihrer Ausrichtung. Sie konnten von links nach rechts, von rechts nach links oder in vertikalen Spalten von oben nach unten gelesen werden. Die Richtung wurde durch die Blickrichtung der Menschen- und Tierfiguren angezeigt.",
          nl: "Hiërogliefen waren zeer flexibel in hun oriëntatie. Ze konden van links naar rechts, van rechts naar links, of in verticale kolommen van boven naar beneden worden gelezen. De richting werd aangegeven door de kant waarop de menselijke en dierlijke figuren keken."
        }
      },
      {
        question: {
          en: "What does the hieroglyph of an eye typically represent?",
          es: "¿Qué representa típicamente el jeroglífico de un ojo?",
          de: "Was stellt die Hieroglyphe eines Auges typischerweise dar?",
          nl: "Wat stelt de hiëroglief van een oog typisch voor?"
        },
        options: [
          { en: "To see, sight, or vision", es: "Ver, vista o visión", de: "Sehen, Sicht oder Vision", nl: "Zien, zicht of visie" },
          { en: "To hear", es: "Oír", de: "Hören", nl: "Horen" },
          { en: "To speak", es: "Hablar", de: "Sprechen", nl: "Spreken" },
          { en: "To think", es: "Pensar", de: "Denken", nl: "Denken" }
        ],
        correct: 0,
        explanation: {
          en: "The eye hieroglyph (𓁹) typically represents concepts related to sight, vision, seeing, or watching. It's one of the most recognizable and commonly used hieroglyphs in Egyptian writing.",
          es: "El jeroglífico del ojo (𓁹) típicamente representa conceptos relacionados con la vista, visión, ver o mirar. Es uno de los jeroglíficos más reconocibles y comúnmente usados en la escritura egipcia.",
          de: "Die Augen-Hieroglyphe (𓁹) stellt typischerweise Konzepte im Zusammenhang mit Sicht, Vision, Sehen oder Beobachten dar. Sie ist eine der bekanntesten und am häufigsten verwendeten Hieroglyphen in der ägyptischen Schrift.",
          nl: "De oog-hiëroglief (𓁹) stelt typisch concepten voor die gerelateerd zijn aan zicht, visie, zien of kijken. Het is een van de meest herkenbare en veelgebruikte hiërogliefen in de Egyptische schrift."
        }
      },
      {
        question: {
          en: "The hieroglyph of a bird typically represents which sound?",
          es: "¿Qué sonido representa típicamente el jeroglífico de un pájaro?",
          de: "Welchen Laut stellt die Hieroglyphe eines Vogels typischerweise dar?",
          nl: "Welk geluid stelt de hiëroglief van een vogel typisch voor?"
        },
        options: [
          { en: "The 'A' sound", es: "El sonido 'A'", de: "Der 'A'-Laut", nl: "Het 'A'-geluid" },
          { en: "The 'B' sound", es: "El sonido 'B'", de: "Der 'B'-Laut", nl: "Het 'B'-geluid" },
          { en: "The 'M' sound", es: "El sonido 'M'", de: "Der 'M'-Laut", nl: "Het 'M'-geluid" },
          { en: "The 'R' sound", es: "El sonido 'R'", de: "Der 'R'-Laut", nl: "Het 'R'-geluid" }
        ],
        correct: 0,
        explanation: {
          en: "The vulture hieroglyph (𓄿) represents the 'A' sound in Egyptian. Different birds represented different sounds - this was part of the phonetic system of hieroglyphic writing.",
          es: "El jeroglífico del buitre (𓄿) representa el sonido 'A' en egipcio. Diferentes pájaros representaban diferentes sonidos - esto era parte del sistema fonético de la escritura jeroglífica.",
          de: "Die Geier-Hieroglyphe (𓄿) stellt den 'A'-Laut im Ägyptischen dar. Verschiedene Vögel stellten verschiedene Laute dar - dies war Teil des phonetischen Systems der Hieroglyphenschrift.",
          nl: "De gier-hiëroglief (𓄿) stelt het 'A'-geluid voor in het Egyptisch. Verschillende vogels stelden verschillende geluiden voor - dit was onderdeel van het fonetische systeem van hiëroglifisch schrift."
        }
      },
      {
        question: {
          en: "What does the ankh symbol represent in Egyptian hieroglyphs?",
          es: "¿Qué representa el símbolo ankh en los jeroglíficos egipcios?",
          de: "Was stellt das Ankh-Symbol in ägyptischen Hieroglyphen dar?",
          nl: "Wat stelt het ankh-symbool voor in Egyptische hiërogliefen?"
        },
        options: [
          { en: "Death", es: "Muerte", de: "Tod", nl: "Dood" },
          { en: "Life", es: "Vida", de: "Leben", nl: "Leven" },
          { en: "Power", es: "Poder", de: "Macht", nl: "Macht" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" }
        ],
        correct: 1,
        explanation: {
          en: "The ankh (𓋹) is the hieroglyphic symbol for life. It appears frequently in Egyptian art and texts, often held by gods and pharaohs as a symbol of eternal life and divine power.",
          es: "El ankh (𓋹) es el símbolo jeroglífico para la vida. Aparece frecuentemente en el arte y textos egipcios, a menudo sostenido por dioses y faraones como símbolo de vida eterna y poder divino.",
          de: "Das Ankh (𓋹) ist das hieroglyphische Symbol für das Leben. Es erscheint häufig in ägyptischer Kunst und Texten, oft von Göttern und Pharaonen gehalten als Symbol des ewigen Lebens und göttlicher Macht.",
          nl: "De ankh (𓋹) is het hiëroglifische symbool voor het leven. Het verschijnt vaak in Egyptische kunst en teksten, vaak vastgehouden door goden en farao's als symbool van eeuwig leven en goddelijke macht."
        }
      },
      {
        question: {
          en: "Which hieroglyph represents water?",
          es: "¿Qué jeroglífico representa el agua?",
          de: "Welche Hieroglyphe stellt Wasser dar?",
          nl: "Welke hiëroglief stelt water voor?"
        },
        options: [
          { en: "A straight line", es: "Una línea recta", de: "Eine gerade Linie", nl: "Een rechte lijn" },
          { en: "A circle", es: "Un círculo", de: "Ein Kreis", nl: "Een cirkel" },
          { en: "Wavy lines", es: "Líneas onduladas", de: "Wellenlinien", nl: "Golvende lijnen" },
          { en: "A triangle", es: "Un triángulo", de: "Ein Dreieck", nl: "Een driehoek" }
        ],
        correct: 2,
        explanation: {
          en: "The water hieroglyph (𓈖) consists of wavy horizontal lines that represent the ripples or waves of water. This symbol was used both pictographically and phonetically in Egyptian writing.",
          es: "El jeroglífico del agua (𓈖) consiste en líneas horizontales onduladas que representan las ondas o ripples del agua. Este símbolo se usaba tanto pictográfica como fonéticamente en la escritura egipcia.",
          de: "Die Wasser-Hieroglyphe (𓈖) besteht aus wellenförmigen horizontalen Linien, die die Wellen oder Kräuselungen des Wassers darstellen. Dieses Symbol wurde sowohl bildlich als auch phonetisch in der ägyptischen Schrift verwendet.",
          nl: "De water-hiëroglief (𓈖) bestaat uit golvende horizontale lijnen die de golven of rimpelingen van water voorstellen. Dit symbool werd zowel pictografisch als fonetisch gebruikt in het Egyptische schrift."
        }
      },
      {
        question: {
          en: "What animal is depicted in the hieroglyph that represents the sound 'L'?",
          es: "¿Qué animal se representa en el jeroglífico que representa el sonido 'L'?",
          de: "Welches Tier wird in der Hieroglyphe dargestellt, die den Laut 'L' darstellt?",
          nl: "Welk dier wordt afgebeeld in de hiëroglief die het geluid 'L' voorstelt?"
        },
        options: [
          { en: "Cat", es: "Gato", de: "Katze", nl: "Kat" },
          { en: "Lion", es: "León", de: "Löwe", nl: "Leeuw" },
          { en: "Leopard", es: "Leopardo", de: "Leopard", nl: "Luipaard" },
          { en: "Lizard", es: "Lagarto", de: "Echse", nl: "Hagedis" }
        ],
        correct: 1,
        explanation: {
          en: "The lion hieroglyph (𓃭) represents the 'L' sound in Egyptian. Lions were important animals in Egyptian culture, symbolizing strength and royal power, making them frequent subjects in hieroglyphic writing.",
          es: "El jeroglífico del león (𓃭) representa el sonido 'L' en egipcio. Los leones eran animales importantes en la cultura egipcia, simbolizando fuerza y poder real, lo que los hacía sujetos frecuentes en la escritura jeroglífica.",
          de: "Die Löwen-Hieroglyphe (𓃭) stellt den 'L'-Laut im Ägyptischen dar. Löwen waren wichtige Tiere in der ägyptischen Kultur und symbolisierten Stärke und königliche Macht, was sie zu häufigen Motiven in der Hieroglyphenschrift machte.",
          nl: "De leeuw-hiëroglief (𓃭) stelt het 'L'-geluid voor in het Egyptisch. Leeuwen waren belangrijke dieren in de Egyptische cultuur, die kracht en koninklijke macht symboliseerden, waardoor ze veel voorkwamen in hiëroglifisch schrift."
        }
      },
      {
        question: {
          en: "The hieroglyph for 'house' looks like what?",
          es: "¿A qué se parece el jeroglífico para 'casa'?",
          de: "Wie sieht die Hieroglyphe für 'Haus' aus?",
          nl: "Hoe ziet de hiëroglief voor 'huis' eruit?"
        },
        options: [
          { en: "A square with a door", es: "Un cuadrado con una puerta", de: "Ein Quadrat mit einer Tür", nl: "Een vierkant met een deur" },
          { en: "A triangle", es: "Un triángulo", de: "Ein Dreieck", nl: "Een driehoek" },
          { en: "A rectangular floor plan", es: "Un plano rectangular", de: "Ein rechteckiger Grundriss", nl: "Een rechthoekige plattegrond" },
          { en: "A pyramid", es: "Una pirámide", de: "Eine Pyramide", nl: "Een piramide" }
        ],
        correct: 2,
        explanation: {
          en: "The house hieroglyph (𓉐) looks like a rectangular floor plan or ground plan of a house, showing the basic outline and internal divisions. It represents both the concept of 'house' and can be used phonetically.",
          es: "El jeroglífico de casa (𓉐) parece un plano rectangular o planta de una casa, mostrando el contorno básico y las divisiones internas. Representa tanto el concepto de 'casa' como puede usarse fonéticamente.",
          de: "Die Haus-Hieroglyphe (𓉐) sieht wie ein rechteckiger Grundriss oder Hausplan aus, der die grundlegende Umrisslinie und interne Unterteilungen zeigt. Sie stellt sowohl das Konzept 'Haus' dar als auch kann phonetisch verwendet werden.",
          nl: "De huis-hiëroglief (𓉐) ziet eruit als een rechthoekige plattegrond van een huis, die de basisomtrek en interne verdelingen toont. Het stelt zowel het concept 'huis' voor als kan fonetisch worden gebruikt."
        }
      },
      {
        question: {
          en: "What does the hieroglyph of a mouth represent?",
          es: "¿Qué representa el jeroglífico de una boca?",
          de: "Was stellt die Hieroglyphe eines Mundes dar?",
          nl: "Wat stelt de hiëroglief van een mond voor?"
        },
        options: [
          { en: "The 'R' sound and concepts related to speech", es: "El sonido 'R' y conceptos relacionados con el habla", de: "Der 'R'-Laut und Konzepte im Zusammenhang mit Sprache", nl: "Het 'R'-geluid en concepten gerelateerd aan spraak" },
          { en: "The 'M' sound only", es: "Solo el sonido 'M'", de: "Nur der 'M'-Laut", nl: "Alleen het 'M'-geluid" },
          { en: "Eating", es: "Comer", de: "Essen", nl: "Eten" },
          { en: "Breathing", es: "Respirar", de: "Atmen", nl: "Ademhalen" }
        ],
        correct: 0,
        explanation: {
          en: "The mouth hieroglyph (𓂋) represents the 'R' sound and is also used for concepts related to speech, mouth, and oral communication. It's a common phonetic sign in Egyptian writing.",
          es: "El jeroglífico de la boca (𓂋) representa el sonido 'R' y también se usa para conceptos relacionados con el habla, la boca y la comunicación oral. Es un signo fonético común en la escritura egipcia.",
          de: "Die Mund-Hieroglyphe (𓂋) stellt den 'R'-Laut dar und wird auch für Konzepte im Zusammenhang mit Sprache, Mund und mündlicher Kommunikation verwendet. Sie ist ein häufiges phonetisches Zeichen in der ägyptischen Schrift.",
          nl: "De mond-hiëroglief (𓂋) stelt het 'R'-geluid voor en wordt ook gebruikt voor concepten gerelateerd aan spraak, mond en mondelinge communicatie. Het is een veelvoorkomend fonetisch teken in het Egyptische schrift."
        }
      },
      {
        question: {
          en: "Which hieroglyph represents the concept of 'god' or 'divine'?",
          es: "¿Qué jeroglífico representa el concepto de 'dios' o 'divino'?",
          de: "Welche Hieroglyphe stellt das Konzept 'Gott' oder 'göttlich' dar?",
          nl: "Welke hiëroglief stelt het concept 'god' of 'goddelijk' voor?"
        },
        options: [
          { en: "A staff or pole", es: "Un bastón o poste", de: "Ein Stab oder Pfahl", nl: "Een staf of paal" },
          { en: "A star", es: "Una estrella", de: "Ein Stern", nl: "Een ster" },
          { en: "A flag or banner", es: "Una bandera o estandarte", de: "Eine Flagge oder ein Banner", nl: "Een vlag of banier" },
          { en: "A crown", es: "Una corona", de: "Eine Krone", nl: "Een kroon" }
        ],
        correct: 0,
        explanation: {
          en: "The god determinative (𓊨) looks like a staff or pole with streamers and is used to indicate divine names and concepts related to gods. It's placed after the names of deities to show their divine nature.",
          es: "El determinativo de dios (𓊨) parece un bastón o poste con serpentinas y se usa para indicar nombres divinos y conceptos relacionados con dioses. Se coloca después de los nombres de las deidades para mostrar su naturaleza divina.",
          de: "Das Gott-Determinativ (𓊨) sieht wie ein Stab oder Pfahl mit Bändern aus und wird verwendet, um göttliche Namen und Konzepte im Zusammenhang mit Göttern anzuzeigen. Es wird nach den Namen von Gottheiten platziert, um ihre göttliche Natur zu zeigen.",
          nl: "Het god-determinatief (𓊨) ziet eruit als een staf of paal met linten en wordt gebruikt om goddelijke namen en concepten gerelateerd aan goden aan te duiden. Het wordt na de namen van godheden geplaatst om hun goddelijke aard te tonen."
        }
      },
      {
        question: {
          en: "What does the bread loaf hieroglyph represent?",
          es: "¿Qué representa el jeroglífico del pan?",
          de: "Was stellt die Brotlaib-Hieroglyphe dar?",
          nl: "Wat stelt de broodbrood-hiëroglief voor?"
        },
        options: [
          { en: "The 'B' sound", es: "El sonido 'B'", de: "Der 'B'-Laut", nl: "Het 'B'-geluid" },
          { en: "The 'T' sound", es: "El sonido 'T'", de: "Der 'T'-Laut", nl: "Het 'T'-geluid" },
          { en: "The 'P' sound", es: "El sonido 'P'", de: "Der 'P'-Laut", nl: "Het 'P'-geluid" },
          { en: "The 'F' sound", es: "El sonido 'F'", de: "Der 'F'-Laut", nl: "Het 'F'-geluid" }
        ],
        correct: 1,
        explanation: {
          en: "The bread loaf hieroglyph (𓏏) represents the 'T' sound. Bread was a staple food in ancient Egypt, making this a very common hieroglyph that appeared frequently in texts.",
          es: "El jeroglífico del pan (𓏏) representa el sonido 'T'. El pan era un alimento básico en el antiguo Egipto, lo que lo convierte en un jeroglífico muy común que aparecía frecuentemente en los textos.",
          de: "Die Brotlaib-Hieroglyphe (𓏏) stellt den 'T'-Laut dar. Brot war ein Grundnahrungsmittel im alten Ägypten, was dies zu einer sehr häufigen Hieroglyphe machte, die oft in Texten erschien.",
          nl: "De broodbrood-hiëroglief (𓏏) stelt het 'T'-geluid voor. Brood was een basisvoedsel in het oude Egypte, waardoor dit een zeer veelvoorkomende hiëroglief was die vaak in teksten verscheen."
        }
      },
      {
        question: {
          en: "The hieroglyph that looks like a hand represents which sound?",
          es: "¿Qué sonido representa el jeroglífico que parece una mano?",
          de: "Welchen Laut stellt die Hieroglyphe dar, die wie eine Hand aussieht?",
          nl: "Welk geluid stelt de hiëroglief voor die eruitziet als een hand?"
        },
        options: [
          { en: "The 'H' sound", es: "El sonido 'H'", de: "Der 'H'-Laut", nl: "Het 'H'-geluid" },
          { en: "The 'D' sound", es: "El sonido 'D'", de: "Der 'D'-Laut", nl: "Het 'D'-geluid" },
          { en: "The 'G' sound", es: "El sonido 'G'", de: "Der 'G'-Laut", nl: "Het 'G'-geluid" },
          { en: "The 'K' sound", es: "El sonido 'K'", de: "Der 'K'-Laut", nl: "Het 'K'-geluid" }
        ],
        correct: 1,
        explanation: {
          en: "The hand hieroglyph (𓂧) represents the 'D' sound in Egyptian. The hand was an important symbol representing action, giving, and human agency in Egyptian culture.",
          es: "El jeroglífico de la mano (𓂧) representa el sonido 'D' en egipcio. La mano era un símbolo importante que representaba la acción, el dar y la agencia humana en la cultura egipcia.",
          de: "Die Hand-Hieroglyphe (𓂧) stellt den 'D'-Laut im Ägyptischen dar. Die Hand war ein wichtiges Symbol, das Handlung, Geben und menschliche Wirksamkeit in der ägyptischen Kultur darstellte.",
          nl: "De hand-hiëroglief (𓂧) stelt het 'D'-geluid voor in het Egyptisch. De hand was een belangrijk symbool dat actie, geven en menselijke betrokkenheid in de Egyptische cultuur voorstelde."
        }
      },
      {
        question: {
          en: "What is the primary function of determinatives in hieroglyphic writing?",
          es: "¿Cuál es la función principal de los determinativos en la escritura jeroglífica?",
          de: "Was ist die Hauptfunktion von Determinativen in der Hieroglyphenschrift?",
          nl: "Wat is de primaire functie van determinatieven in hiëroglifisch schrift?"
        },
        options: [
          { en: "To indicate pronunciation", es: "Para indicar la pronunciación", de: "Um die Aussprache anzuzeigen", nl: "Om uitspraak aan te geven" },
          { en: "To clarify meaning and word category", es: "Para aclarar el significado y la categoría de la palabra", de: "Um Bedeutung und Wortkategorie zu klären", nl: "Om betekenis en woordcategorie te verduidelijken" },
          { en: "To mark the end of sentences", es: "Para marcar el final de las oraciones", de: "Um das Ende von Sätzen zu markieren", nl: "Om het einde van zinnen aan te geven" },
          { en: "To indicate the scribe's name", es: "Para indicar el nombre del escriba", de: "Um den Namen des Schreibers anzuzeigen", nl: "Om de naam van de schrijver aan te geven" }
        ],
        correct: 1,
        explanation: {
          en: "Determinatives are unpronounced hieroglyphs placed at the end of words to clarify their meaning and indicate their semantic category. They help distinguish between words that might be spelled similarly but have different meanings.",
          es: "Los determinativos son jeroglíficos no pronunciados colocados al final de las palabras para aclarar su significado e indicar su categoría semántica. Ayudan a distinguir entre palabras que podrían escribirse de manera similar pero tienen significados diferentes.",
          de: "Determinative sind unausgesprochene Hieroglyphen, die am Ende von Wörtern platziert werden, um ihre Bedeutung zu klären und ihre semantische Kategorie anzuzeigen. Sie helfen dabei, zwischen Wörtern zu unterscheiden, die ähnlich geschrieben werden könnten, aber unterschiedliche Bedeutungen haben.",
          nl: "Determinatieven zijn niet-uitgesproken hiërogliefen die aan het einde van woorden worden geplaatst om hun betekenis te verduidelijken en hun semantische categorie aan te geven. Ze helpen onderscheid te maken tussen woorden die misschien op dezelfde manier gespeld worden maar verschillende betekenissen hebben."
        }
      },
      {
        question: {
          en: "The hieroglyph of a reed represents which vowel sound?",
          es: "¿Qué sonido vocal representa el jeroglífico de una caña?",
          de: "Welchen Vokallaut stellt die Hieroglyphe eines Schilfes dar?",
          nl: "Welk klinkergeluid stelt de hiëroglief van een riet voor?"
        },
        options: [
          { en: "A", es: "A", de: "A", nl: "A" },
          { en: "E", es: "E", de: "E", nl: "E" },
          { en: "I", es: "I", de: "I", nl: "I" },
          { en: "O", es: "O", de: "O", nl: "O" }
        ],
        correct: 2,
        explanation: {
          en: "The reed hieroglyph (𓇋) represents the 'I' sound. Reeds grew abundantly along the Nile River and were used for making papyrus, making this symbol common in Egyptian writing.",
          es: "El jeroglífico de la caña (𓇋) representa el sonido 'I'. Las cañas crecían abundantemente a lo largo del río Nilo y se usaban para hacer papiro, lo que hace que este símbolo sea común en la escritura egipcia.",
          de: "Die Schilf-Hieroglyphe (𓇋) stellt den 'I'-Laut dar. Schilf wuchs reichlich entlang des Nils und wurde zur Papyrusherstellung verwendet, was dieses Symbol in der ägyptischen Schrift häufig macht.",
          nl: "De riet-hiëroglief (𓇋) stelt het 'I'-geluid voor. Riet groeide overvloedig langs de Nijl en werd gebruikt voor het maken van papyrus, waardoor dit symbool veel voorkomt in het Egyptische schrift."
        }
      },
      {
        question: {
          en: "What does the hieroglyph of a folded cloth represent?",
          es: "¿Qué representa el jeroglífico de una tela doblada?",
          de: "Was stellt die Hieroglyphe eines gefalteten Tuches dar?",
          nl: "Wat stelt de hiëroglief van een gevouwen doek voor?"
        },
        options: [
          { en: "The 'S' sound", es: "El sonido 'S'", de: "Der 'S'-Laut", nl: "Het 'S'-geluid" },
          { en: "The 'T' sound", es: "El sonido 'T'", de: "Der 'T'-Laut", nl: "Het 'T'-geluid" },
          { en: "The 'N' sound", es: "El sonido 'N'", de: "Der 'N'-Laut", nl: "Het 'N'-geluid" },
          { en: "The 'F' sound", es: "El sonido 'F'", de: "Der 'F'-Laut", nl: "Het 'F'-geluid" }
        ],
        correct: 0,
        explanation: {
          en: "The folded cloth hieroglyph (𓋴) represents the 'S' sound. Cloth and textiles were important in Egyptian society, both for practical use and as symbols of status and wealth.",
          es: "El jeroglífico de la tela doblada (𓋴) representa el sonido 'S'. La tela y los textiles eran importantes en la sociedad egipcia, tanto para uso práctico como símbolos de estatus y riqueza.",
          de: "Die gefaltete Tuch-Hieroglyphe (𓋴) stellt den 'S'-Laut dar. Stoff und Textilien waren in der ägyptischen Gesellschaft wichtig, sowohl für den praktischen Gebrauch als auch als Symbole für Status und Reichtum.",
          nl: "De gevouwen doek-hiëroglief (𓋴) stelt het 'S'-geluid voor. Doek en textiel waren belangrijk in de Egyptische samenleving, zowel voor praktisch gebruik als als symbolen van status en rijkdom."
        }
      },
      {
        question: {
          en: "Which direction do human and animal figures face to indicate the reading direction?",
          es: "¿Hacia qué dirección miran las figuras humanas y animales para indicar la dirección de lectura?",
          de: "In welche Richtung blicken Menschen- und Tierfiguren, um die Leserichtung anzuzeigen?",
          nl: "Welke kant kijken menselijke en dierlijke figuren op om de leesrichting aan te geven?"
        },
        options: [
          { en: "They face the direction you should read towards", es: "Miran hacia la dirección en la que debes leer", de: "Sie blicken in die Richtung, in die Sie lesen sollten", nl: "Ze kijken de richting op waarin je moet lezen" },
          { en: "They face away from the reading direction", es: "Miran en dirección opuesta a la lectura", de: "Sie blicken weg von der Leserichtung", nl: "Ze kijken weg van de leesrichting" },
          { en: "They always face left", es: "Siempre miran hacia la izquierda", de: "Sie blicken immer nach links", nl: "Ze kijken altijd naar links" },
          { en: "They always face right", es: "Siempre miran hacia la derecha", de: "Sie blicken immer nach rechts", nl: "Ze kijken altijd naar rechts" }
        ],
        correct: 0,
        explanation: {
          en: "Human and animal figures in hieroglyphs face the direction you should read towards. This visual cue helps readers determine whether to read from left to right, right to left, or top to bottom.",
          es: "Las figuras humanas y animales en los jeroglíficos miran hacia la dirección en la que debes leer. Esta señal visual ayuda a los lectores a determinar si deben leer de izquierda a derecha, de derecha a izquierda, o de arriba a abajo.",
          de: "Menschen- und Tierfiguren in Hieroglyphen blicken in die Richtung, in die Sie lesen sollten. Dieser visuelle Hinweis hilft Lesern zu bestimmen, ob sie von links nach rechts, von rechts nach links oder von oben nach unten lesen sollen.",
          nl: "Menselijke en dierlijke figuren in hiërogliefen kijken de richting op waarin je moet lezen. Deze visuele aanwijzing helpt lezers bepalen of ze van links naar rechts, van rechts naar links, of van boven naar beneden moeten lezen."
        }
      },
      {
        question: {
          en: "What material were hieroglyphs commonly carved into for permanent inscriptions?",
          es: "¿En qué material se tallaban comúnmente los jeroglíficos para inscripciones permanentes?",
          de: "In welches Material wurden Hieroglyphen üblicherweise für dauerhafte Inschriften eingemeißelt?",
          nl: "In welk materiaal werden hiërogliefen gewoonlijk gesneden voor permanente inscripties?"
        },
        options: [
          { en: "Wood", es: "Madera", de: "Holz", nl: "Hout" },
          { en: "Stone", es: "Piedra", de: "Stein", nl: "Steen" },
          { en: "Clay", es: "Arcilla", de: "Ton", nl: "Klei" },
          { en: "Metal", es: "Metal", de: "Metall", nl: "Metaal" }
        ],
        correct: 1,
        explanation: {
          en: "Hieroglyphs were commonly carved into stone for permanent inscriptions on temples, tombs, monuments, and official buildings. Stone provided durability and allowed the inscriptions to survive for thousands of years.",
          es: "Los jeroglíficos se tallaban comúnmente en piedra para inscripciones permanentes en templos, tumbas, monumentos y edificios oficiales. La piedra proporcionaba durabilidad y permitía que las inscripciones sobrevivieran durante miles de años.",
          de: "Hieroglyphen wurden üblicherweise in Stein für dauerhafte Inschriften an Tempeln, Gräbern, Monumenten und offiziellen Gebäuden eingemeißelt. Stein bot Haltbarkeit und ermöglichte es den Inschriften, Tausende von Jahren zu überleben.",
          nl: "Hiërogliefen werden gewoonlijk in steen gesneden voor permanente inscripties op tempels, graven, monumenten en officiële gebouwen. Steen bood duurzaamheid en stelde de inscripties in staat duizenden jaren te overleven."
        }
      },
      {
        question: {
          en: "The owl hieroglyph represents which sound?",
          es: "¿Qué sonido representa el jeroglífico del búho?",
          de: "Welchen Laut stellt die Eulen-Hieroglyphe dar?",
          nl: "Welk geluid stelt de uil-hiëroglief voor?"
        },
        options: [
          { en: "The 'M' sound", es: "El sonido 'M'", de: "Der 'M'-Laut", nl: "Het 'M'-geluid" },
          { en: "The 'N' sound", es: "El sonido 'N'", de: "Der 'N'-Laut", nl: "Het 'N'-geluid" },
          { en: "The 'W' sound", es: "El sonido 'W'", de: "Der 'W'-Laut", nl: "Het 'W'-geluid" },
          { en: "The 'V' sound", es: "El sonido 'V'", de: "Der 'V'-Laut", nl: "Het 'V'-geluid" }
        ],
        correct: 0,
        explanation: {
          en: "The owl hieroglyph (𓅓) represents the 'M' sound in Egyptian. Owls were associated with wisdom and the afterlife in Egyptian culture, making them significant symbols in their writing system.",
          es: "El jeroglífico del búho (𓅓) representa el sonido 'M' en egipcio. Los búhos se asociaban con la sabiduría y la vida después de la muerte en la cultura egipcia, lo que los convertía en símbolos significativos en su sistema de escritura.",
          de: "Die Eulen-Hieroglyphe (𓅓) stellt den 'M'-Laut im Ägyptischen dar. Eulen wurden mit Weisheit und dem Jenseits in der ägyptischen Kultur assoziiert, was sie zu bedeutenden Symbolen in ihrem Schriftsystem machte.",
          nl: "De uil-hiëroglief (𓅓) stelt het 'M'-geluid voor in het Egyptisch. Uilen werden geassocieerd met wijsheid en het hiernamaals in de Egyptische cultuur, waardoor ze significante symbolen werden in hun schriftsysteem."
        }
      },
      {
        question: {
          en: "What is the main difference between hieroglyphic, hieratic, and demotic scripts?",
          es: "¿Cuál es la principal diferencia entre los scripts jeroglífico, hierático y demótico?",
          de: "Was ist der Hauptunterschied zwischen hieroglyphischer, hieratischer und demotischer Schrift?",
          nl: "Wat is het hoofdverschil tussen hiëroglifisch, hieratisch en demotisch schrift?"
        },
        options: [
          { en: "They represent different languages", es: "Representan diferentes idiomas", de: "Sie stellen verschiedene Sprachen dar", nl: "Ze vertegenwoordigen verschillende talen" },
          { en: "They are different levels of formality and cursiveness", es: "Son diferentes niveles de formalidad y cursividad", de: "Sie sind verschiedene Ebenen von Formalität und Kursivität", nl: "Ze zijn verschillende niveaus van formaliteit en cursiviteit" },
          { en: "They were used in different time periods only", es: "Se usaron solo en diferentes períodos de tiempo", de: "Sie wurden nur in verschiedenen Zeitperioden verwendet", nl: "Ze werden alleen in verschillende tijdsperioden gebruikt" },
          { en: "They use completely different symbols", es: "Usan símbolos completamente diferentes", de: "Sie verwenden völlig verschiedene Symbole", nl: "Ze gebruiken volledig verschillende symbolen" }
        ],
        correct: 1,
        explanation: {
          en: "Hieroglyphic was the formal script used for monuments, hieratic was a cursive form for daily writing, and demotic was an even more simplified cursive script. All represented the same Egyptian language but with different levels of formality.",
          es: "El jeroglífico era la escritura formal usada para monumentos, el hierático era una forma cursiva para la escritura diaria, y el demótico era una escritura cursiva aún más simplificada. Todos representaban el mismo idioma egipcio pero con diferentes niveles de formalidad.",
          de: "Hieroglyphisch war die formelle Schrift für Monumente, Hieratisch war eine Kursivform für das tägliche Schreiben, und Demotisch war eine noch vereinfachtere Kursivschrift. Alle stellten dieselbe ägyptische Sprache dar, aber mit verschiedenen Formalitätsebenen.",
          nl: "Hiëroglifisch was het formele schrift voor monumenten, hieratisch was een cursieve vorm voor dagelijks schrijven, en demotisch was een nog meer vereenvoudigd cursief schrift. Alle vertegenwoordigden dezelfde Egyptische taal maar met verschillende niveaus van formaliteit."
        }
      },
      {
        question: {
          en: "What does the scarab beetle hieroglyph symbolize?",
          es: "¿Qué simboliza el jeroglífico del escarabajo?",
          de: "Was symbolisiert die Skarabäus-Hieroglyphe?",
          nl: "Wat symboliseert de scarabee-hiëroglief?"
        },
        options: [
          { en: "Death and decay", es: "Muerte y decadencia", de: "Tod und Verfall", nl: "Dood en verval" },
          { en: "Rebirth and transformation", es: "Renacimiento y transformación", de: "Wiedergeburt und Transformation", nl: "Wedergeboorte en transformatie" },
          { en: "War and conflict", es: "Guerra y conflicto", de: "Krieg und Konflikt", nl: "Oorlog en conflict" },
          { en: "Agriculture and harvest", es: "Agricultura y cosecha", de: "Landwirtschaft und Ernte", nl: "Landbouw en oogst" }
        ],
        correct: 1,
        explanation: {
          en: "The scarab beetle hieroglyph (𓆣) symbolizes rebirth, transformation, and the cycle of life. The beetle was associated with the sun god Khepri who rolled the sun across the sky, similar to how scarabs roll dung balls.",
          es: "El jeroglífico del escarabajo (𓆣) simboliza el renacimiento, la transformación y el ciclo de la vida. El escarabajo se asociaba con el dios solar Jepri que rodaba el sol por el cielo, similar a cómo los escarabajos ruedan bolas de estiércol.",
          de: "Die Skarabäus-Hieroglyphe (𓆣) symbolisiert Wiedergeburt, Transformation und den Lebenszyklus. Der Käfer wurde mit dem Sonnengott Chepri assoziiert, der die Sonne über den Himmel rollte, ähnlich wie Skarabäen Dungkugeln rollen.",
          nl: "De scarabee-hiëroglief (𓆣) symboliseert wedergeboorte, transformatie en de cyclus van het leven. De kever werd geassocieerd met de zonnegod Khepri die de zon over de hemel rolde, vergelijkbaar met hoe scarabeeën mestballen rollen."
        }    },
    {
      question: {
        en: "What are hieroglyphs?",
        es: "What are hieroglyphs?",
        de: "What are hieroglyphs?",
        nl: "What are hieroglyphs?"
      },
      options: [
        { en: "Ancient Egyptian writing system", es: "Ancient Egyptian writing system", de: "Ancient Egyptian writing system", nl: "Ancient Egyptian writing system" },
        { en: "Egyptian gods", es: "Egyptian gods", de: "Egyptian gods", nl: "Egyptian gods" },
        { en: "Tomb decorations", es: "Tomb decorations", de: "Tomb decorations", nl: "Tomb decorations" },
        { en: "Pyramid designs", es: "Pyramid designs", de: "Pyramid designs", nl: "Pyramid designs" }
      ],
      correct: 0,
      explanation: {
        en: "Hieroglyphs are the formal writing system of ancient Egypt using pictorial symbols.",
        es: "Hieroglyphs are the formal writing system of ancient Egypt using pictorial symbols.",
        de: "Hieroglyphs are the formal writing system of ancient Egypt using pictorial symbols.",
        nl: "Hieroglyphs are the formal writing system of ancient Egypt using pictorial symbols."
      }
    },
    {
      question: {
        en: "What stone helped decode hieroglyphs?",
        es: "What stone helped decode hieroglyphs?",
        de: "What stone helped decode hieroglyphs?",
        nl: "What stone helped decode hieroglyphs?"
      },
      options: [
        { en: "Rosetta Stone", es: "Rosetta Stone", de: "Rosetta Stone", nl: "Rosetta Stone" },
        { en: "Pyramid Stone", es: "Pyramid Stone", de: "Pyramid Stone", nl: "Pyramid Stone" },
        { en: "Sphinx Stone", es: "Sphinx Stone", de: "Sphinx Stone", nl: "Sphinx Stone" },
        { en: "Nile Stone", es: "Nile Stone", de: "Nile Stone", nl: "Nile Stone" }
      ],
      correct: 0,
      explanation: {
        en: "The Rosetta Stone, discovered in 1799, provided the key to deciphering hieroglyphs.",
        es: "The Rosetta Stone, discovered in 1799, provided the key to deciphering hieroglyphs.",
        de: "The Rosetta Stone, discovered in 1799, provided the key to deciphering hieroglyphs.",
        nl: "The Rosetta Stone, discovered in 1799, provided the key to deciphering hieroglyphs."
      }
    },
    {
      question: {
        en: "Who deciphered hieroglyphs?",
        es: "Who deciphered hieroglyphs?",
        de: "Who deciphered hieroglyphs?",
        nl: "Who deciphered hieroglyphs?"
      },
      options: [
        { en: "Jean-François Champollion", es: "Jean-François Champollion", de: "Jean-François Champollion", nl: "Jean-François Champollion" },
        { en: "Howard Carter", es: "Howard Carter", de: "Howard Carter", nl: "Howard Carter" },
        { en: "Napoleon", es: "Napoleon", de: "Napoleon", nl: "Napoleon" },
        { en: "Ptolemy", es: "Ptolemy", de: "Ptolemy", nl: "Ptolemy" }
      ],
      correct: 0,
      explanation: {
        en: "French scholar Jean-François Champollion deciphered hieroglyphs in 1822.",
        es: "French scholar Jean-François Champollion deciphered hieroglyphs in 1822.",
        de: "French scholar Jean-François Champollion deciphered hieroglyphs in 1822.",
        nl: "French scholar Jean-François Champollion deciphered hieroglyphs in 1822."
      }
    },
    {
      question: {
        en: "How many hieroglyphic symbols existed?",
        es: "How many hieroglyphic symbols existed?",
        de: "How many hieroglyphic symbols existed?",
        nl: "How many hieroglyphic symbols existed?"
      },
      options: [
        { en: "Over 700", es: "Over 700", de: "Over 700", nl: "Over 700" },
        { en: "26 letters", es: "26 letters", de: "26 letters", nl: "26 letters" },
        { en: "100", es: "100", de: "100", nl: "100" },
        { en: "50", es: "50", de: "50", nl: "50" }
      ],
      correct: 0,
      explanation: {
        en: "Ancient Egyptian hieroglyphs included over 700 distinct symbols.",
        es: "Ancient Egyptian hieroglyphs included over 700 distinct symbols.",
        de: "Ancient Egyptian hieroglyphs included over 700 distinct symbols.",
        nl: "Ancient Egyptian hieroglyphs included over 700 distinct symbols."
      }
    },
    {
      question: {
        en: "What direction could hieroglyphs be written?",
        es: "What direction could hieroglyphs be written?",
        de: "What direction could hieroglyphs be written?",
        nl: "What direction could hieroglyphs be written?"
      },
      options: [
        { en: "Any direction (left, right, up, down)", es: "Any direction (left, right, up, down)", de: "Any direction (left, right, up, down)", nl: "Any direction (left, right, up, down)" },
        { en: "Left to right only", es: "Left to right only", de: "Left to right only", nl: "Left to right only" },
        { en: "Right to left only", es: "Right to left only", de: "Right to left only", nl: "Right to left only" },
        { en: "Top to bottom only", es: "Top to bottom only", de: "Top to bottom only", nl: "Top to bottom only" }
      ],
      correct: 0,
      explanation: {
        en: "Hieroglyphs could be written in multiple directions; the direction animals/people faced showed reading direction.",
        es: "Hieroglyphs could be written in multiple directions; the direction animals/people faced showed reading direction.",
        de: "Hieroglyphs could be written in multiple directions; the direction animals/people faced showed reading direction.",
        nl: "Hieroglyphs could be written in multiple directions; the direction animals/people faced showed reading direction."
      }
    },
    {
      question: {
        en: "What is hieratic script?",
        es: "What is hieratic script?",
        de: "What is hieratic script?",
        nl: "What is hieratic script?"
      },
      options: [
        { en: "Cursive form of hieroglyphs", es: "Cursive form of hieroglyphs", de: "Cursive form of hieroglyphs", nl: "Cursive form of hieroglyphs" },
        { en: "Sacred hieroglyphs", es: "Sacred hieroglyphs", de: "Sacred hieroglyphs", nl: "Sacred hieroglyphs" },
        { en: "Foreign script", es: "Foreign script", de: "Foreign script", nl: "Foreign script" },
        { en: "Number system", es: "Number system", de: "Number system", nl: "Number system" }
      ],
      correct: 0,
      explanation: {
        en: "Hieratic was a cursive, simplified form of hieroglyphic writing used for everyday documents.",
        es: "Hieratic was a cursive, simplified form of hieroglyphic writing used for everyday documents.",
        de: "Hieratic was a cursive, simplified form of hieroglyphic writing used for everyday documents.",
        nl: "Hieratic was a cursive, simplified form of hieroglyphic writing used for everyday documents."
      }
    },
    {
      question: {
        en: "What is demotic script?",
        es: "What is demotic script?",
        de: "What is demotic script?",
        nl: "What is demotic script?"
      },
      options: [
        { en: "Even more simplified Egyptian writing", es: "Even more simplified Egyptian writing", de: "Even more simplified Egyptian writing", nl: "Even more simplified Egyptian writing" },
        { en: "Sacred hieroglyphs", es: "Sacred hieroglyphs", de: "Sacred hieroglyphs", nl: "Sacred hieroglyphs" },
        { en: "Greek writing", es: "Greek writing", de: "Greek writing", nl: "Greek writing" },
        { en: "Royal script", es: "Royal script", de: "Royal script", nl: "Royal script" }
      ],
      correct: 0,
      explanation: {
        en: "Demotic was an even more simplified script that developed later, used for business and literature.",
        es: "Demotic was an even more simplified script that developed later, used for business and literature.",
        de: "Demotic was an even more simplified script that developed later, used for business and literature.",
        nl: "Demotic was an even more simplified script that developed later, used for business and literature."
      }
    },
    {
      question: {
        en: "What material did Egyptians write on?",
        es: "What material did Egyptians write on?",
        de: "What material did Egyptians write on?",
        nl: "What material did Egyptians write on?"
      },
      options: [
        { en: "Papyrus", es: "Papyrus", de: "Papyrus", nl: "Papyrus" },
        { en: "Paper", es: "Paper", de: "Paper", nl: "Paper" },
        { en: "Clay tablets", es: "Clay tablets", de: "Clay tablets", nl: "Clay tablets" },
        { en: "Animal skins", es: "Animal skins", de: "Animal skins", nl: "Animal skins" }
      ],
      correct: 0,
      explanation: {
        en: "Egyptians wrote on papyrus, a paper-like material made from papyrus plant.",
        es: "Egyptians wrote on papyrus, a paper-like material made from papyrus plant.",
        de: "Egyptians wrote on papyrus, a paper-like material made from papyrus plant.",
        nl: "Egyptians wrote on papyrus, a paper-like material made from papyrus plant."
      }
    },
    {
      question: {
        en: "What is a determinative in hieroglyphs?",
        es: "What is a determinative in hieroglyphs?",
        de: "What is a determinative in hieroglyphs?",
        nl: "What is a determinative in hieroglyphs?"
      },
      options: [
        { en: "Symbol clarifying meaning of words", es: "Symbol clarifying meaning of words", de: "Symbol clarifying meaning of words", nl: "Symbol clarifying meaning of words" },
        { en: "Vowel marker", es: "Vowel marker", de: "Vowel marker", nl: "Vowel marker" },
        { en: "Punctuation", es: "Punctuation", de: "Punctuation", nl: "Punctuation" },
        { en: "Number", es: "Number", de: "Number", nl: "Number" }
      ],
      correct: 0,
      explanation: {
        en: "Determinatives are symbols placed at word ends to clarify meaning and category.",
        es: "Determinatives are symbols placed at word ends to clarify meaning and category.",
        de: "Determinatives are symbols placed at word ends to clarify meaning and category.",
        nl: "Determinatives are symbols placed at word ends to clarify meaning and category."
      }
    },
    {
      question: {
        en: "What symbol represents the sound 'n'?",
        es: "What symbol represents the sound 'n'?",
        de: "What symbol represents the sound 'n'?",
        nl: "What symbol represents the sound 'n'?"
      },
      options: [
        { en: "Water ripple", es: "Water ripple", de: "Water ripple", nl: "Water ripple" },
        { en: "Reed", es: "Reed", de: "Reed", nl: "Reed" },
        { en: "Owl", es: "Owl", de: "Owl", nl: "Owl" },
        { en: "Mouth", es: "Mouth", de: "Mouth", nl: "Mouth" }
      ],
      correct: 0,
      explanation: {
        en: "The water ripple hieroglyph represented the sound 'n'.",
        es: "The water ripple hieroglyph represented the sound 'n'.",
        de: "The water ripple hieroglyph represented the sound 'n'.",
        nl: "The water ripple hieroglyph represented the sound 'n'."
      }
    },
    {
      question: {
        en: "What animal represents the sound 'm'?",
        es: "What animal represents the sound 'm'?",
        de: "What animal represents the sound 'm'?",
        nl: "What animal represents the sound 'm'?"
      },
      options: [
        { en: "Owl", es: "Owl", de: "Owl", nl: "Owl" },
        { en: "Bird", es: "Bird", de: "Bird", nl: "Bird" },
        { en: "Snake", es: "Snake", de: "Snake", nl: "Snake" },
        { en: "Lion", es: "Lion", de: "Lion", nl: "Lion" }
      ],
      correct: 0,
      explanation: {
        en: "The owl hieroglyph represented the sound 'm'.",
        es: "The owl hieroglyph represented the sound 'm'.",
        de: "The owl hieroglyph represented the sound 'm'.",
        nl: "The owl hieroglyph represented the sound 'm'."
      }
    },
    {
      question: {
        en: "Did hieroglyphs represent only pictures?",
        es: "Did hieroglyphs represent only pictures?",
        de: "Did hieroglyphs represent only pictures?",
        nl: "Did hieroglyphs represent only pictures?"
      },
      options: [
        { en: "No, they were phonetic too", es: "No, they were phonetic too", de: "No, they were phonetic too", nl: "No, they were phonetic too" },
        { en: "Yes, only pictures", es: "Yes, only pictures", de: "Yes, only pictures", nl: "Yes, only pictures" },
        { en: "Only sounds", es: "Only sounds", de: "Only sounds", nl: "Only sounds" },
        { en: "Only ideas", es: "Only ideas", de: "Only ideas", nl: "Only ideas" }
      ],
      correct: 0,
      explanation: {
        en: "Hieroglyphs functioned as logograms (concepts), phonograms (sounds), and determinatives.",
        es: "Hieroglyphs functioned as logograms (concepts), phonograms (sounds), and determinatives.",
        de: "Hieroglyphs functioned as logograms (concepts), phonograms (sounds), and determinatives.",
        nl: "Hieroglyphs functioned as logograms (concepts), phonograms (sounds), and determinatives."
      }
    },
    {
      question: {
        en: "What is a cartouche used for?",
        es: "What is a cartouche used for?",
        de: "What is a cartouche used for?",
        nl: "What is a cartouche used for?"
      },
      options: [
        { en: "Enclosing royal names", es: "Enclosing royal names", de: "Enclosing royal names", nl: "Enclosing royal names" },
        { en: "Marking tomb entrances", es: "Marking tomb entrances", de: "Marking tomb entrances", nl: "Marking tomb entrances" },
        { en: "Decorative borders", es: "Decorative borders", de: "Decorative borders", nl: "Decorative borders" },
        { en: "Mathematical symbols", es: "Mathematical symbols", de: "Mathematical symbols", nl: "Mathematical symbols" }
      ],
      correct: 0,
      explanation: {
        en: "Cartouches are oval frames that enclosed hieroglyphs spelling royal names.",
        es: "Cartouches are oval frames that enclosed hieroglyphs spelling royal names.",
        de: "Cartouches are oval frames that enclosed hieroglyphs spelling royal names.",
        nl: "Cartouches are oval frames that enclosed hieroglyphs spelling royal names."
      }
    },
    {
      question: {
        en: "What does the ankh symbol mean?",
        es: "What does the ankh symbol mean?",
        de: "What does the ankh symbol mean?",
        nl: "What does the ankh symbol mean?"
      },
      options: [
        { en: "Life", es: "Life", de: "Life", nl: "Life" },
        { en: "Death", es: "Death", de: "Death", nl: "Death" },
        { en: "Power", es: "Power", de: "Power", nl: "Power" },
        { en: "Water", es: "Water", de: "Water", nl: "Water" }
      ],
      correct: 0,
      explanation: {
        en: "The ankh hieroglyph symbolizes life and was often carried by gods and pharaohs.",
        es: "The ankh hieroglyph symbolizes life and was often carried by gods and pharaohs.",
        de: "The ankh hieroglyph symbolizes life and was often carried by gods and pharaohs.",
        nl: "The ankh hieroglyph symbolizes life and was often carried by gods and pharaohs."
      }
    },
    {
      question: {
        en: "When did hieroglyphic writing end?",
        es: "When did hieroglyphic writing end?",
        de: "When did hieroglyphic writing end?",
        nl: "When did hieroglyphic writing end?"
      },
      options: [
        { en: "Around 400 CE", es: "Around 400 CE", de: "Around 400 CE", nl: "Around 400 CE" },
        { en: "100 BCE", es: "100 BCE", de: "100 BCE", nl: "100 BCE" },
        { en: "1000 CE", es: "1000 CE", de: "1000 CE", nl: "1000 CE" },
        { en: "Still used today", es: "Still used today", de: "Still used today", nl: "Still used today" }
      ],
      correct: 0,
      explanation: {
        en: "The last known hieroglyphic inscription dates to 394 CE.",
        es: "The last known hieroglyphic inscription dates to 394 CE.",
        de: "The last known hieroglyphic inscription dates to 394 CE.",
        nl: "The last known hieroglyphic inscription dates to 394 CE."
      }
    },
    {
      question: {
        en: "What tool was used to write on papyrus?",
        es: "What tool was used to write on papyrus?",
        de: "What tool was used to write on papyrus?",
        nl: "What tool was used to write on papyrus?"
      },
      options: [
        { en: "Reed pen", es: "Reed pen", de: "Reed pen", nl: "Reed pen" },
        { en: "Quill", es: "Quill", de: "Quill", nl: "Quill" },
        { en: "Brush", es: "Brush", de: "Brush", nl: "Brush" },
        { en: "Stylus", es: "Stylus", de: "Stylus", nl: "Stylus" }
      ],
      correct: 0,
      explanation: {
        en: "Egyptians used reed pens cut and shaped for writing on papyrus.",
        es: "Egyptians used reed pens cut and shaped for writing on papyrus.",
        de: "Egyptians used reed pens cut and shaped for writing on papyrus.",
        nl: "Egyptians used reed pens cut and shaped for writing on papyrus."
      }
    },
    {
      question: {
        en: "What color ink was most common?",
        es: "What color ink was most common?",
        de: "What color ink was most common?",
        nl: "What color ink was most common?"
      },
      options: [
        { en: "Black and red", es: "Black and red", de: "Black and red", nl: "Black and red" },
        { en: "Blue and green", es: "Blue and green", de: "Blue and green", nl: "Blue and green" },
        { en: "Only black", es: "Only black", de: "Only black", nl: "Only black" },
        { en: "Only red", es: "Only red", de: "Only red", nl: "Only red" }
      ],
      correct: 0,
      explanation: {
        en: "Black ink (carbon) was standard; red ink (ochre) was used for headings and emphasis.",
        es: "Black ink (carbon) was standard; red ink (ochre) was used for headings and emphasis.",
        de: "Black ink (carbon) was standard; red ink (ochre) was used for headings and emphasis.",
        nl: "Black ink (carbon) was standard; red ink (ochre) was used for headings and emphasis."
      }
    },
    {
      question: {
        en: "What is a phonogram?",
        es: "What is a phonogram?",
        de: "What is a phonogram?",
        nl: "What is a phonogram?"
      },
      options: [
        { en: "Symbol representing a sound", es: "Symbol representing a sound", de: "Symbol representing a sound", nl: "Symbol representing a sound" },
        { en: "Picture symbol", es: "Picture symbol", de: "Picture symbol", nl: "Picture symbol" },
        { en: "Number symbol", es: "Number symbol", de: "Number symbol", nl: "Number symbol" },
        { en: "Punctuation", es: "Punctuation", de: "Punctuation", nl: "Punctuation" }
      ],
      correct: 0,
      explanation: {
        en: "Phonograms are hieroglyphs that represent sounds rather than objects or ideas.",
        es: "Phonograms are hieroglyphs that represent sounds rather than objects or ideas.",
        de: "Phonograms are hieroglyphs that represent sounds rather than objects or ideas.",
        nl: "Phonograms are hieroglyphs that represent sounds rather than objects or ideas."
      }
    },
    {
      question: {
        en: "What was hieroglyphic writing reserved for?",
        es: "What was hieroglyphic writing reserved for?",
        de: "What was hieroglyphic writing reserved for?",
        nl: "What was hieroglyphic writing reserved for?"
      },
      options: [
        { en: "Formal and sacred contexts", es: "Formal and sacred contexts", de: "Formal and sacred contexts", nl: "Formal and sacred contexts" },
        { en: "All writing", es: "All writing", de: "All writing", nl: "All writing" },
        { en: "Letters only", es: "Letters only", de: "Letters only", nl: "Letters only" },
        { en: "Numbers only", es: "Numbers only", de: "Numbers only", nl: "Numbers only" }
      ],
      correct: 0,
      explanation: {
        en: "Hieroglyphs were primarily used for formal inscriptions on monuments and sacred texts.",
        es: "Hieroglyphs were primarily used for formal inscriptions on monuments and sacred texts.",
        de: "Hieroglyphs were primarily used for formal inscriptions on monuments and sacred texts.",
        nl: "Hieroglyphs were primarily used for formal inscriptions on monuments and sacred texts."
      }
    },
    {
      question: {
        en: "What is a serekh?",
        es: "What is a serekh?",
        de: "What is a serekh?",
        nl: "What is a serekh?"
      },
      options: [
        { en: "Rectangular frame with falcon containing royal name", es: "Rectangular frame with falcon containing royal name", de: "Rectangular frame with falcon containing royal name", nl: "Rectangular frame with falcon containing royal name" },
        { en: "Type of cartouche", es: "Type of cartouche", de: "Type of cartouche", nl: "Type of cartouche" },
        { en: "Temple entrance", es: "Temple entrance", de: "Temple entrance", nl: "Temple entrance" },
        { en: "Tomb decoration", es: "Tomb decoration", de: "Tomb decoration", nl: "Tomb decoration" }
      ],
      correct: 0,
      explanation: {
        en: "A serekh is an early form of royal name frame, rectangular with palace facade design and Horus falcon on top.",
        es: "A serekh is an early form of royal name frame, rectangular with palace facade design and Horus falcon on top.",
        de: "A serekh is an early form of royal name frame, rectangular with palace facade design and Horus falcon on top.",
        nl: "A serekh is an early form of royal name frame, rectangular with palace facade design and Horus falcon on top."
      }

      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }

  return level1;
})();