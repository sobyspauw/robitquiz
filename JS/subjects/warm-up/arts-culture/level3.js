// Arts & Culture - Level 3: Music & Instruments
(function() {
  const level3 = {
    name: {
      en: "Music & Instruments",
      es: "Música e Instrumentos",
      de: "Musik & Instrumente",
      nl: "Muziek & Instrumenten"
    },
    questions: [
      {
        question: {
          en: "Which instrument has 88 keys?",
          es: "¿Qué instrumento tiene 88 teclas?",
          de: "Welches Instrument hat 88 Tasten?",
          nl: "Welk instrument heeft 88 toetsen?"
        },
        options: [
          { en: "Piano", es: "Piano", de: "Klavier", nl: "Piano" },
          { en: "Guitar", es: "Guitarra", de: "Gitarre", nl: "Gitaar" },
          { en: "Violin", es: "Violín", de: "Geige", nl: "Viool" },
          { en: "Drums", es: "Batería", de: "Schlagzeug", nl: "Drums" }
        ],
        correct: 0,
        explanation: {
          en: "A piano has 88 keys - 52 white keys and 36 black keys. This standard layout was established in the late 1800s and provides a range of over 7 octaves, allowing pianists to play virtually any musical composition.",
          es: "Un piano tiene 88 teclas - 52 teclas blancas y 36 teclas negras. Esta disposición estándar se estableció a fines del siglo XIX y proporciona un rango de más de 7 octavas, permitiendo a los pianistas tocar prácticamente cualquier composición musical.",
          de: "Ein Klavier hat 88 Tasten - 52 weiße Tasten und 36 schwarze Tasten. Diese Standardanordnung wurde Ende des 19. Jahrhunderts etabliert und bietet einen Bereich von über 7 Oktaven, was Pianisten ermöglicht, praktisch jede musikalische Komposition zu spielen.",
          nl: "Een piano heeft 88 toetsen - 52 witte toetsen en 36 zwarte toetsen. Deze standaard indeling werd vastgesteld in de late 1800s en biedt een bereik van meer dan 7 octaven, waardoor pianisten vrijwel elke muzikale compositie kunnen spelen."
        }
      },
      {
        question: {
          en: "What do you use to play a violin?",
          es: "¿Qué usas para tocar un violín?",
          de: "Womit spielst du Geige?",
          nl: "Waarmee speel je viool?"
        },
        options: [
          { en: "Bow", es: "Arco", de: "Bogen", nl: "Strijkstok" },
          { en: "Stick", es: "Palo", de: "Stock", nl: "Stok" },
          { en: "Hammer", es: "Martillo", de: "Hammer", nl: "Hamer" },
          { en: "Pick", es: "Púa", de: "Plektrum", nl: "Plectrum" }
        ],
        correct: 0,
        explanation: {
          en: "A violin is played with a bow made of horsehair stretched over a wooden stick. The bow is drawn across the strings to create sound through friction, allowing for smooth, sustained notes and dynamic expression.",
          es: "Un violín se toca con un arco hecho de crin de caballo estirada sobre un palo de madera. El arco se desliza sobre las cuerdas para crear sonido a través de la fricción, permitiendo notas suaves y sostenidas y expresión dinámica.",
          de: "Eine Geige wird mit einem Bogen gespielt, der aus Rosshaar besteht, das über einen Holzstab gespannt ist. Der Bogen wird über die Saiten gezogen, um durch Reibung Klang zu erzeugen, was weiche, anhaltende Töne und dynamischen Ausdruck ermöglicht.",
          nl: "Een viool wordt bespeeld met een strijkstok gemaakt van paardenhaar gespannen over een houten stok. De strijkstok wordt over de snaren getrokken om geluid te creëren door wrijving, wat zachte, aanhoudende noten en dynamische expressie mogelijk maakt."
        }
      },
      {
        question: {
          en: "How many strings does a guitar usually have?",
          es: "¿Cuántas cuerdas tiene normalmente una guitarra?",
          de: "Wie viele Saiten hat eine Gitarre normalerweise?",
          nl: "Hoeveel snaren heeft een gitaar meestal?"
        },
        options: [
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "12", es: "12", de: "12", nl: "12" }
        ],
        correct: 0,
        explanation: {
          en: "A standard guitar has 6 strings, typically tuned to E-A-D-G-B-E from lowest to highest pitch. These strings are made of steel or nylon and are plucked or strummed to create different musical notes and chords.",
          es: "Una guitarra estándar tiene 6 cuerdas, típicamente afinadas en E-A-D-G-B-E desde el tono más bajo al más alto. Estas cuerdas están hechas de acero o nylon y se pulsan o rasguean para crear diferentes notas musicales y acordes.",
          de: "Eine Standard-Gitarre hat 6 Saiten, typischerweise gestimmt auf E-A-D-G-H-E vom tiefsten zum höchsten Ton. Diese Saiten bestehen aus Stahl oder Nylon und werden gezupft oder geschlagen, um verschiedene Musiknoten und Akkorde zu erzeugen.",
          nl: "Een standaard gitaar heeft 6 snaren, meestal gestemd op E-A-D-G-B-E van laagste naar hoogste toon. Deze snaren zijn gemaakt van staal of nylon en worden getokkeld of gestreeld om verschillende muzieknoten en akkoorden te creëren."
        }
      },
      {
        question: {
          en: "What do you hit to play drums?",
          es: "¿Qué golpeas para tocar la batería?",
          de: "Was schlägst du um Schlagzeug zu spielen?",
          nl: "Wat sla je om drums te spelen?"
        },
        options: [
          { en: "Drumheads", es: "Parches", de: "Trommelfelle", nl: "Trommelkoppen" },
          { en: "Strings", es: "Cuerdas", de: "Saiten", nl: "Snaren" },
          { en: "Keys", es: "Teclas", de: "Tasten", nl: "Toetsen" },
          { en: "Holes", es: "Agujeros", de: "Löcher", nl: "Gaten" }
        ],
        correct: 0,
        explanation: {
          en: "Drums are played by hitting drumheads - stretched membranes made of animal skin or synthetic materials. When struck with drumsticks or hands, the drumheads vibrate to produce sound, with the drum's body amplifying the vibrations.",
          es: "Los tambores se tocan golpeando parches - membranas estiradas hechas de piel animal o materiales sintéticos. Cuando se golpean con baquetas o manos, los parches vibran para producir sonido, con el cuerpo del tambor amplificando las vibraciones.",
          de: "Trommeln werden gespielt, indem man Trommelfelle schlägt - gespannte Membranen aus Tierhaut oder synthetischen Materialien. Wenn sie mit Trommelstöcken oder Händen geschlagen werden, vibrieren die Trommelfelle, um Klang zu erzeugen, wobei der Trommelkörper die Vibrationen verstärkt.",
          nl: "Drums worden bespeeld door trommelkoppen te slaan - gespannen membranen gemaakt van dierenhuid of synthetische materialen. Wanneer geslagen met drumstokjes of handen, trillen de trommelkoppen om geluid te produceren, waarbij het lichaam van de trommel de trillingen versterkt."
        }
      },
      {
        question: {
          en: "Which instrument do you blow into to make sound?",
          es: "¿En qué instrumento soplas para hacer sonido?",
          de: "In welches Instrument bläst man um Töne zu erzeugen?",
          nl: "In welk instrument blaas je om geluid te maken?"
        },
        options: [
          { en: "Flute", es: "Flauta", de: "Flöte", nl: "Fluit" },
          { en: "Piano", es: "Piano", de: "Klavier", nl: "Piano" },
          { en: "Guitar", es: "Guitarra", de: "Gitarre", nl: "Gitaar" },
          { en: "Drums", es: "Batería", de: "Schlagzeug", nl: "Drums" }
        ],
        correct: 0,
        explanation: {
          en: "A flute is a woodwind instrument played by blowing air across a hole in the mouthpiece. The airflow creates vibrations that travel through the tube, and different pitches are made by covering and uncovering holes along the flute's body.",
          es: "Una flauta es un instrumento de viento madera que se toca soplando aire a través de un agujero en la boquilla. El flujo de aire crea vibraciones que viajan a través del tubo, y diferentes tonos se hacen cubriendo y descubriendo agujeros a lo largo del cuerpo de la flauta.",
          de: "Eine Flöte ist ein Holzblasinstrument, das gespielt wird, indem man Luft über ein Loch im Mundstück bläst. Der Luftstrom erzeugt Vibrationen, die durch das Rohr wandern, und verschiedene Tonhöhen werden durch das Abdecken und Aufdecken von Löchern entlang des Flötenkörpers erzeugt.",
          nl: "Een fluit is een houtblaasinstrument dat bespeeld wordt door lucht te blazen over een gat in het mondstuk. De luchtstroom creëert trillingen die door de buis reizen, en verschillende toonhoogtes worden gemaakt door gaten langs het lichaam van de fluit te bedekken en bloot te leggen."
        }
      },
      {
        question: {
          en: "What do you shake to make rhythm?",
          es: "¿Qué agitas para hacer ritmo?",
          de: "Was schüttelst du um Rhythmus zu machen?",
          nl: "Wat schud je om ritme te maken?"
        },
        options: [
          { en: "Maracas", es: "Maracas", de: "Maracas", nl: "Maracas" },
          { en: "Triangle", es: "Triángulo", de: "Triangel", nl: "Triangel" },
          { en: "Cymbals", es: "Platillos", de: "Becken", nl: "Bekkens" },
          { en: "Bell", es: "Campana", de: "Glocke", nl: "Bel" }
        ],
        correct: 0,
        explanation: {
          en: "Maracas are percussion instruments filled with small beads, seeds, or stones that create rhythm when shaken. Originating from Latin America, they're essential in many musical styles and provide the characteristic rattling sound that drives rhythmic patterns.",
          es: "Las maracas son instrumentos de percusión llenos de cuentas pequeñas, semillas o piedras que crean ritmo cuando se agitan. Originarias de América Latina, son esenciales en muchos estilos musicales y proporcionan el sonido característico de sonajero que impulsa patrones rítmicos.",
          de: "Maracas sind Schlaginstrumente, die mit kleinen Perlen, Samen oder Steinen gefüllt sind und beim Schütteln Rhythmus erzeugen. Sie stammen aus Lateinamerika, sind in vielen Musikstilen unverzichtbar und bieten den charakteristischen Rasselklang, der rhythmische Muster antreibt.",
          nl: "Maracas zijn percussie-instrumenten gevuld met kleine kralen, zaden of stenen die ritme creëren wanneer geschud. Afkomstig uit Latijns-Amerika, zijn ze essentieel in veel muziekstijlen en bieden het karakteristieke ratelende geluid dat ritmische patronen aandrijft."
        }
      },
      {
        question: {
          en: "Which instrument is the largest in an orchestra?",
          es: "¿Qué instrumento es el más grande en una orquesta?",
          de: "Welches Instrument ist das größte in einem Orchester?",
          nl: "Welk instrument is het grootste in een orkest?"
        },
        options: [
          { en: "Double bass", es: "Contrabajo", de: "Kontrabass", nl: "Contrabas" },
          { en: "Violin", es: "Violín", de: "Geige", nl: "Viool" },
          { en: "Flute", es: "Flauta", de: "Flöte", nl: "Fluit" },
          { en: "Trumpet", es: "Trompeta", de: "Trompete", nl: "Trompet" }
        ],
        correct: 0,
        explanation: {
          en: "The double bass is the largest string instrument in an orchestra, standing about 6 feet tall. Its deep, low tones provide the foundation for the orchestra's sound, and it's played either with a bow or by plucking the strings (pizzicato).",
          es: "El contrabajo es el instrumento de cuerda más grande en una orquesta, midiendo aproximadamente 6 pies de altura. Sus tonos profundos y bajos proporcionan la base para el sonido de la orquesta, y se toca ya sea con arco o pulsando las cuerdas (pizzicato).",
          de: "Der Kontrabass ist das größte Streichinstrument in einem Orchester und ist etwa 6 Fuß hoch. Seine tiefen, niedrigen Töne bilden die Grundlage für den Orchesterklang und wird entweder mit einem Bogen oder durch Zupfen der Saiten (Pizzicato) gespielt.",
          nl: "De contrabas is het grootste snaarinstrument in een orkest, ongeveer 6 voet hoog. Zijn diepe, lage tonen vormen de basis voor het geluid van het orkest, en wordt bespeeld met een strijkstok of door de snaren te tokkelen (pizzicato)."
        }
      },
      {
        question: {
          en: "What instrument family does the trumpet belong to?",
          es: "¿A qué familia de instrumentos pertenece la trompeta?",
          de: "Zu welcher Instrumentenfamilie gehört die Trompete?",
          nl: "Tot welke instrumentenfamilie behoort de trompet?"
        },
        options: [
          { en: "Brass", es: "Viento metal", de: "Blechbläser", nl: "Koper" },
          { en: "Woodwind", es: "Viento madera", de: "Holzbläser", nl: "Hout" },
          { en: "Percussion", es: "Percusión", de: "Schlagzeug", nl: "Percussie" },
          { en: "String", es: "Cuerda", de: "Saiteninstrument", nl: "Snaar" }
        ],
        correct: 0,
        explanation: {
          en: "The trumpet belongs to the brass family of instruments. Brass instruments produce sound when the player's lips vibrate against a metal mouthpiece, and the sound is amplified through the brass tubing of the instrument.",
          es: "La trompeta pertenece a la familia de instrumentos de viento metal. Los instrumentos de viento metal producen sonido cuando los labios del intérprete vibran contra una boquilla de metal, y el sonido se amplifica a través de la tubería de latón del instrumento.",
          de: "Die Trompete gehört zur Familie der Blechblasinstrumente. Blechblasinstrumente erzeugen Klang, wenn die Lippen des Spielers gegen ein Metallmundstück vibrieren, und der Klang wird durch die Messingrohre des Instruments verstärkt.",
          nl: "De trompet behoort tot de koperblazers familie van instrumenten. Koperblazers produceren geluid wanneer de lippen van de speler trillen tegen een metalen mondstuk, en het geluid wordt versterkt door de koperen buizen van het instrument."
        }
      },
      {
        question: {
          en: "How many beats are in a whole note?",
          es: "¿Cuántos tiempos hay en una nota redonda?",
          de: "Wie viele Schläge hat eine ganze Note?",
          nl: "Hoeveel tellen heeft een hele noot?"
        },
        options: [
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "1", es: "1", de: "1", nl: "1" },
          { en: "8", es: "8", de: "8", nl: "8" }
        ],
        correct: 0,
        explanation: {
          en: "A whole note receives 4 beats in common time (4/4 time signature). It's the longest note value in basic notation, equivalent to four quarter notes, two half notes, or eight eighth notes, providing sustained sound throughout an entire measure.",
          es: "Una nota redonda recibe 4 tiempos en tiempo común (compas de 4/4). Es el valor de nota más largo en notación básica, equivalente a cuatro negras, dos blancas u ocho corcheas, proporcionando sonido sostenido durante todo un compás.",
          de: "Eine ganze Note erhält 4 Schläge im gemeinsamen Takt (4/4-Takt). Es ist der längste Notenwert in der Grundnotation, entspricht vier Viertelnoten, zwei halben Noten oder acht Achtelnoten und bietet anhaltenden Klang während eines ganzen Taktes.",
          nl: "Een hele noot krijgt 4 tellen in gewone tijd (4/4 maatsoort). Het is de langste nootwaarde in basis notatie, gelijk aan vier kwart noten, twee halve noten of acht achtste noten, en biedt aanhoudend geluid gedurende een hele maat."
        }
      },
      {
        question: {
          en: "What do you use to keep time in music?",
          es: "¿Qué usas para mantener el tiempo en la música?",
          de: "Was benutzt man um das Tempo in der Musik zu halten?",
          nl: "Wat gebruik je om de tijd bij te houden in muziek?"
        },
        options: [
          { en: "Metronome", es: "Metrónomo", de: "Metronom", nl: "Metronoom" },
          { en: "Tuner", es: "Afinador", de: "Stimmgerät", nl: "Stemapparaat" },
          { en: "Amplifier", es: "Amplificador", de: "Verstärker", nl: "Versterker" },
          { en: "Microphone", es: "Micrófono", de: "Mikrofon", nl: "Microfoon" }
        ],
        correct: 0,
        explanation: {
          en: "A metronome is a device that produces steady beats to help musicians maintain consistent tempo. It can be mechanical (with a pendulum) or electronic, and it's essential for developing timing skills and ensemble playing.",
          es: "Un metrónomo es un dispositivo que produce latidos constantes para ayudar a los músicos a mantener un tempo consistente. Puede ser mecánico (con péndulo) o electrónico, y es esencial para desarrollar habilidades de tiempo y tocar en conjunto.",
          de: "Ein Metronom ist ein Gerät, das gleichmäßige Schläge erzeugt, um Musikern zu helfen, ein konstantes Tempo zu halten. Es kann mechanisch (mit Pendel) oder elektronisch sein und ist essentiell für die Entwicklung von Timing-Fähigkeiten und Ensemble-Spiel.",
          nl: "Een metronoom is een apparaat dat gelijkmatige slagen produceert om muzikanten te helpen een consistent tempo aan te houden. Het kan mechanisch (met slinger) of elektronisch zijn, en is essentieel voor het ontwikkelen van timing vaardigheden en ensemble spelen."
        }
      },
      {
        question: {
          en: "Which instrument has pedals you press with your feet?",
          es: "¿Qué instrumento tiene pedales que presionas con los pies?",
          de: "Welches Instrument hat Pedale, die man mit den Füßen drückt?",
          nl: "Welk instrument heeft pedalen die je met je voeten indrukt?"
        },
        options: [
          { en: "Piano", es: "Piano", de: "Klavier", nl: "Piano" },
          { en: "Guitar", es: "Guitarra", de: "Gitarre", nl: "Gitaar" },
          { en: "Violin", es: "Violín", de: "Geige", nl: "Viool" },
          { en: "Flute", es: "Flauta", de: "Flöte", nl: "Fluit" }
        ],
        correct: 0,
        explanation: {
          en: "The piano has pedals operated by the feet - typically three pedals: sustain (right), soft (left), and sostenuto (middle). The sustain pedal is most commonly used, allowing notes to ring longer by lifting the dampers from the strings.",
          es: "El piano tiene pedales operados por los pies - típicamente tres pedales: sostenido (derecho), suave (izquierdo) y sostenuto (medio). El pedal de sostenido es el más comúnmente usado, permitiendo que las notas suenen más tiempo al levantar los apagadores de las cuerdas.",
          de: "Das Klavier hat Pedale, die mit den Füßen bedient werden - typischerweise drei Pedale: Sustain (rechts), leise (links) und Sostenuto (Mitte). Das Sustain-Pedal wird am häufigsten verwendet und ermöglicht es den Noten, länger zu klingen, indem die Dämpfer von den Saiten gehoben werden.",
          nl: "De piano heeft pedalen die met de voeten bediend worden - meestal drie pedalen: sustain (rechts), zacht (links) en sostenuto (midden). Het sustain pedaal wordt het meest gebruikt, waardoor noten langer kunnen klinken door de dempers van de snaren op te tillen."
        }
      },
      {
        question: {
          en: "What creates sound in a xylophone?",
          es: "¿Qué crea sonido en un xilófono?",
          de: "Was erzeugt Klang in einem Xylophon?",
          nl: "Wat creëert geluid in een xylofoon?"
        },
        options: [
          { en: "Wooden bars", es: "Barras de madera", de: "Holzstäbe", nl: "Houten staven" },
          { en: "Metal strings", es: "Cuerdas de metal", de: "Metallsaiten", nl: "Metalen snaren" },
          { en: "Plastic keys", es: "Teclas de plástico", de: "Plastiktasten", nl: "Plastic toetsen" },
          { en: "Glass tubes", es: "Tubos de vidrio", de: "Glasröhren", nl: "Glazen buizen" }
        ],
        correct: 0,
        explanation: {
          en: "A xylophone creates sound through wooden bars of different lengths that vibrate when struck with mallets. Each bar is tuned to a specific pitch, and the sound resonates through tubes underneath, creating the characteristic bright, percussive tone.",
          es: "Un xilófono crea sonido a través de barras de madera de diferentes longitudes que vibran cuando se golpean con mazos. Cada barra está afinada a un tono específico, y el sonido resuena a través de tubos debajo, creando el tono percusivo brillante característico.",
          de: "Ein Xylophon erzeugt Klang durch Holzstäbe verschiedener Längen, die vibrieren, wenn sie mit Schlägeln geschlagen werden. Jeder Stab ist auf eine bestimmte Tonhöhe gestimmt, und der Klang resoniert durch Röhren darunter, wodurch der charakteristische helle, perkussive Ton entsteht.",
          nl: "Een xylofoon creëert geluid door houten staven van verschillende lengtes die trillen wanneer geslagen met kloppers. Elke staaf is gestemd op een specifieke toonhoogte, en het geluid resoneert door buizen eronder, wat de karakteristieke heldere, percussieve toon creëert."
        }
      },
      {
        question: {
          en: "Which instrument do you play by pressing keys and pumping air?",
          es: "¿Qué instrumento tocas presionando teclas y bombeando aire?",
          de: "Welches Instrument spielt man durch Tastendrücken und Luftpumpen?",
          nl: "Welk instrument speel je door toetsen in te drukken en lucht te pompen?"
        },
        options: [
          { en: "Accordion", es: "Acordeón", de: "Akkordeon", nl: "Accordeon" },
          { en: "Piano", es: "Piano", de: "Klavier", nl: "Piano" },
          { en: "Organ", es: "Órgano", de: "Orgel", nl: "Orgel" },
          { en: "Harmonica", es: "Armónica", de: "Mundharmonika", nl: "Mondharmonica" }
        ],
        correct: 0,
        explanation: {
          en: "An accordion is played by pressing keys or buttons while pumping air through a bellows system. The bellows creates air pressure that passes through reeds to produce sound, making it a unique combination of wind and keyboard instrument.",
          es: "Un acordeón se toca presionando teclas o botones mientras se bombea aire a través de un sistema de fuelle. El fuelle crea presión de aire que pasa a través de lengüetas para producir sonido, convirtiéndolo en una combinación única de instrumento de viento y teclado.",
          de: "Ein Akkordeon wird gespielt, indem man Tasten oder Knöpfe drückt, während man Luft durch ein Balgensystem pumpt. Der Balgen erzeugt Luftdruck, der durch Zungen fließt, um Klang zu erzeugen, was es zu einer einzigartigen Kombination aus Blas- und Tasteninstrument macht.",
          nl: "Een accordeon wordt bespeeld door toetsen of knoppen in te drukken terwijl je lucht door een balgensysteem pompt. De balg creëert luchtdruk die door rieten stroomt om geluid te produceren, waardoor het een unieke combinatie van blaas- en toetsinstrument is."
        }
      },
      {
        question: {
          en: "What do you strum on a guitar?",
          es: "¿Qué rasgueas en una guitarra?",
          de: "Was zupfst du an einer Gitarre?",
          nl: "Wat tokkels je op een gitaar?"
        },
        options: [
          { en: "Strings", es: "Cuerdas", de: "Saiten", nl: "Snaren" },
          { en: "Keys", es: "Teclas", de: "Tasten", nl: "Toetsen" },
          { en: "Buttons", es: "Botones", de: "Knöpfe", nl: "Knopen" },
          { en: "Holes", es: "Agujeros", de: "Löcher", nl: "Gaten" }
        ],
        correct: 0,
        explanation: {
          en: "Guitar strings are strummed or plucked to create musical notes and chords. Made of steel or nylon, these six strings vibrate when played, with the guitar's hollow body amplifying the sound to create the instrument's characteristic tone.",
          es: "Las cuerdas de guitarra se rasguean o pulsan para crear notas musicales y acordes. Hechas de acero o nylon, estas seis cuerdas vibran cuando se tocan, con el cuerpo hueco de la guitarra amplificando el sonido para crear el tono característico del instrumento.",
          de: "Gitarrensaiten werden geschlagen oder gezupft, um Musiknoten und Akkorde zu erzeugen. Aus Stahl oder Nylon gefertigt, vibrieren diese sechs Saiten beim Spielen, wobei der hohle Korpus der Gitarre den Klang verstärkt, um den charakteristischen Ton des Instruments zu erzeugen.",
          nl: "Gitaarsnaren worden getokkeld of geplukt om muzieknoten en akkoorden te creëren. Gemaakt van staal of nylon, trillen deze zes snaren wanneer bespeeld, waarbij de holle klankkast van de gitaar het geluid versterkt om de karakteristieke toon van het instrument te creëren."
        }
      },
      {
        question: {
          en: "Which instrument is also called a mouth organ?",
          es: "¿Qué instrumento también se llama órgano de boca?",
          de: "Welches Instrument wird auch Mundorgel genannt?",
          nl: "Welk instrument wordt ook wel mondorgel genoemd?"
        },
        options: [
          { en: "Harmonica", es: "Armónica", de: "Mundharmonika", nl: "Mondharmonica" },
          { en: "Flute", es: "Flauta", de: "Flöte", nl: "Fluit" },
          { en: "Recorder", es: "Flauta dulce", de: "Blockflöte", nl: "Blokfluit" },
          { en: "Whistle", es: "Silbato", de: "Pfeife", nl: "Fluit" }
        ],
        correct: 0,
        explanation: {
          en: "The harmonica is also called a mouth organ because it's played by breathing air in and out through the instrument. Small metal reeds inside vibrate to create different pitches, making it a simple yet versatile wind instrument.",
          es: "La armónica también se llama órgano de boca porque se toca respirando aire hacia adentro y hacia afuera a través del instrumento. Pequeñas lengüetas metálicas en el interior vibran para crear diferentes tonos, convirtiéndolo en un instrumento de viento simple pero versátil.",
          de: "Die Mundharmonika wird auch Mundorgel genannt, weil sie gespielt wird, indem man Luft in das Instrument hinein und heraus atmet. Kleine Metallzungen im Inneren vibrieren, um verschiedene Tonhöhen zu erzeugen, was sie zu einem einfachen, aber vielseitigen Blasinstrument macht.",
          nl: "De mondharmonica wordt ook mondorgel genoemd omdat het bespeeld wordt door lucht in en uit het instrument te ademen. Kleine metalen rieten binnenin trillen om verschillende toonhoogtes te creëren, waardoor het een eenvoudig maar veelzijdig blaasinstrument is."
        }
      },
      {
        question: {
          en: "What do you hit with sticks to make music?",
          es: "¿Qué golpeas con palitos para hacer música?",
          de: "Was schlägst du mit Stöcken um Musik zu machen?",
          nl: "Wat sla je met stokjes om muziek te maken?"
        },
        options: [
          { en: "Drums", es: "Tambores", de: "Trommeln", nl: "Trommels" },
          { en: "Piano", es: "Piano", de: "Klavier", nl: "Piano" },
          { en: "Guitar", es: "Guitarra", de: "Gitarre", nl: "Gitaar" },
          { en: "Flute", es: "Flauta", de: "Flöte", nl: "Fluit" }
        ],
        correct: 0,
        explanation: {
          en: "Drums are percussion instruments played by hitting them with drumsticks or mallets. The drumheads vibrate when struck, creating rhythmic beats that form the backbone of most musical pieces and help keep time for other musicians.",
          es: "Los tambores son instrumentos de percusión que se tocan golpeándolos con baquetas o mazos. Los parches vibran cuando se golpean, creando ritmos que forman la columna vertebral de la mayoría de las piezas musicales y ayudan a mantener el tiempo para otros músicos.",
          de: "Trommeln sind Schlaginstrumente, die gespielt werden, indem man sie mit Trommelstöcken oder Schlägeln schlägt. Die Trommelfelle vibrieren beim Schlagen und erzeugen rhythmische Beats, die das Rückgrat der meisten Musikstücke bilden und anderen Musikern helfen, das Tempo zu halten.",
          nl: "Drums zijn percussie-instrumenten die bespeeld worden door ze te slaan met drumstokjes of kloppers. De trommelkoppen trillen wanneer geslagen, waardoor ritmische beats ontstaan die de ruggengraat vormen van de meeste muziekstukken en andere muzikanten helpen de tijd bij te houden."
        }
      },
      {
        question: {
          en: "How many lines are on a musical staff?",
          es: "¿Cuántas líneas hay en un pentagrama musical?",
          de: "Wie viele Linien hat ein Notensystem?",
          nl: "Hoeveel lijnen heeft een notenbalk?"
        },
        options: [
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "3", es: "3", de: "3", nl: "3" }
        ],
        correct: 0,
        explanation: {
          en: "A musical staff has 5 horizontal lines where musical notes are placed. These lines, along with the spaces between them, represent different pitches and help musicians read and write music notation accurately.",
          es: "Un pentagrama musical tiene 5 líneas horizontales donde se colocan las notas musicales. Estas líneas, junto con los espacios entre ellas, representan diferentes tonos y ayudan a los músicos a leer y escribir notación musical con precisión.",
          de: "Ein Notensystem hat 5 horizontale Linien, auf denen Musiknoten platziert werden. Diese Linien, zusammen mit den Zwischenräumen, repräsentieren verschiedene Tonhöhen und helfen Musikern beim genauen Lesen und Schreiben von Musiknotation.",
          nl: "Een notenbalk heeft 5 horizontale lijnen waar muzieknoten op geplaatst worden. Deze lijnen, samen met de ruimtes ertussen, vertegenwoordigen verschillende toonhoogtes en helpen muzikanten bij het accuraat lezen en schrijven van muzieknotatie."
        }
      },
      {
        question: {
          en: "Which instrument do you pluck with your fingers?",
          es: "¿Qué instrumento pulsas con los dedos?",
          de: "Welches Instrument zupfst du mit den Fingern?",
          nl: "Welk instrument tokkels je met je vingers?"
        },
        options: [
          { en: "Harp", es: "Arpa", de: "Harfe", nl: "Harp" },
          { en: "Piano", es: "Piano", de: "Klavier", nl: "Piano" },
          { en: "Drums", es: "Batería", de: "Schlagzeug", nl: "Drums" },
          { en: "Trumpet", es: "Trompeta", de: "Trompete", nl: "Trompet" }
        ],
        correct: 0,
        explanation: {
          en: "A harp is played by plucking its strings with your fingers. This beautiful string instrument has multiple strings of different lengths that produce various pitches when plucked, creating ethereal, flowing melodies.",
          es: "Un arpa se toca pulsando sus cuerdas con los dedos. Este hermoso instrumento de cuerda tiene múltiples cuerdas de diferentes longitudes que producen varios tonos cuando se pulsan, creando melodías etéreas y fluidas.",
          de: "Eine Harfe wird gespielt, indem man ihre Saiten mit den Fingern zupft. Dieses schöne Saiteninstrument hat mehrere Saiten verschiedener Längen, die verschiedene Tonhöhen erzeugen, wenn sie gezupft werden, und ätherische, fließende Melodien schaffen.",
          nl: "Een harp wordt bespeeld door de snaren met je vingers te tokkelen. Dit prachtige snaarinstrument heeft meerdere snaren van verschillende lengtes die verschillende toonhoogtes produceren wanneer getokkeld, waardoor etherische, vloeiende melodieën ontstaan."
        }
      },
      {
        question: {
          en: "What makes the sound louder in a guitar?",
          es: "¿Qué hace que el sonido sea más fuerte en una guitarra?",
          de: "Was macht den Klang in einer Gitarre lauter?",
          nl: "Wat maakt het geluid luider in een gitaar?"
        },
        options: [
          { en: "Sound hole", es: "Boca", de: "Schallloch", nl: "Klankgat" },
          { en: "Strings", es: "Cuerdas", de: "Saiten", nl: "Snaren" },
          { en: "Neck", es: "Mástil", de: "Hals", nl: "Hals" },
          { en: "Tuning pegs", es: "Clavijas", de: "Stimmwirbel", nl: "Stemknoppen" }
        ],
        correct: 0,
        explanation: {
          en: "The sound hole in a guitar amplifies the sound by allowing the vibrations from the strings to resonate within the hollow body. This acoustic chamber acts like a speaker, making the guitar's sound much louder and richer than it would be without the hole.",
          es: "La boca de la guitarra amplifica el sonido al permitir que las vibraciones de las cuerdas resuenen dentro del cuerpo hueco. Esta cámara acústica actúa como un altavoz, haciendo que el sonido de la guitarra sea mucho más fuerte y rico de lo que sería sin el agujero.",
          de: "Das Schallloch in einer Gitarre verstärkt den Klang, indem es den Vibrationen der Saiten ermöglicht, im hohlen Korpus zu resonieren. Diese Akustikkammer wirkt wie ein Lautsprecher und macht den Gitarrenklang viel lauter und reicher, als er ohne das Loch wäre.",
          nl: "Het klankgat in een gitaar versterkt het geluid door de trillingen van de snaren te laten resoneren binnen de holle klankkast. Deze akoestische kamer werkt als een luidspreker, waardoor het geluid van de gitaar veel luider en rijker wordt dan het zou zijn zonder het gat."
        }
      },
      {
        question: {
          en: "Which instrument family includes the flute?",
          es: "¿Qué familia de instrumentos incluye la flauta?",
          de: "Welche Instrumentenfamilie umfasst die Flöte?",
          nl: "Welke instrumentenfamilie bevat de fluit?"
        },
        options: [
          { en: "Woodwind", es: "Viento madera", de: "Holzbläser", nl: "Houtblazers" },
          { en: "Brass", es: "Viento metal", de: "Blechbläser", nl: "Koperblazers" },
          { en: "Percussion", es: "Percusión", de: "Schlagzeug", nl: "Percussie" },
          { en: "String", es: "Cuerda", de: "Saiteninstrument", nl: "Snaarinstrument" }
        ],
        correct: 0,
        explanation: {
          en: "The flute belongs to the woodwind family, even though modern flutes are made of metal. Woodwind instruments produce sound by controlling airflow, and the flute creates music by blowing air across a hole in the mouthpiece.",
          es: "La flauta pertenece a la familia de viento madera, aunque las flautas modernas están hechas de metal. Los instrumentos de viento madera producen sonido controlando el flujo de aire, y la flauta crea música soplando aire a través de un agujero en la boquilla.",
          de: "Die Flöte gehört zur Familie der Holzblasinstrumente, obwohl moderne Flöten aus Metall hergestellt werden. Holzblasinstrumente erzeugen Klang durch Kontrolle des Luftstroms, und die Flöte erzeugt Musik, indem man Luft über ein Loch im Mundstück bläst.",
          nl: "De fluit behoort tot de houtblazers familie, ook al zijn moderne fluiten gemaakt van metaal. Houtblazers produceren geluid door luchtstroom te controleren, en de fluit creëert muziek door lucht over een gat in het mondstuk te blazen."
        }
      },
      {
        question: {
          en: "What do you call a group of musicians playing together?",
          es: "¿Cómo se llama a un grupo de músicos tocando juntos?",
          de: "Wie nennt man eine Gruppe von Musikern, die zusammen spielen?",
          nl: "Hoe noem je een groep muzikanten die samen spelen?"
        },
        options: [
          { en: "Band", es: "Banda", de: "Band", nl: "Band" },
          { en: "Team", es: "Equipo", de: "Team", nl: "Team" },
          { en: "Club", es: "Club", de: "Club", nl: "Club" },
          { en: "Class", es: "Clase", de: "Klasse", nl: "Klas" }
        ],
        correct: 0,
        explanation: {
          en: "A band is a group of musicians who play instruments together. Bands can be small (like a trio or quartet) or large (like a marching band or orchestra), and they work together to create harmonious music.",
          es: "Una banda es un grupo de músicos que tocan instrumentos juntos. Las bandas pueden ser pequeñas (como un trío o cuarteto) o grandes (como una banda de marcha u orquesta), y trabajan juntos para crear música armoniosa.",
          de: "Eine Band ist eine Gruppe von Musikern, die zusammen Instrumente spielen. Bands können klein sein (wie ein Trio oder Quartett) oder groß (wie eine Marschkapelle oder ein Orchester), und sie arbeiten zusammen, um harmonische Musik zu schaffen.",
          nl: "Een band is een groep muzikanten die samen instrumenten bespelen. Bands kunnen klein zijn (zoals een trio of kwartet) of groot (zoals een marching band of orkest), en ze werken samen om harmonieuze muziek te creëren."
        }
      },
      {
        question: {
          en: "Which instrument has three strings and is played with a bow?",
          es: "¿Qué instrumento tiene tres cuerdas y se toca con arco?",
          de: "Welches Instrument hat drei Saiten und wird mit einem Bogen gespielt?",
          nl: "Welk instrument heeft drie snaren en wordt bespeeld met een strijkstok?"
        },
        options: [
          { en: "Violin (can have 3)", es: "Violín (puede tener 3)", de: "Geige (kann 3 haben)", nl: "Viool (kan er 3 hebben)" },
          { en: "Guitar", es: "Guitarra", de: "Gitarre", nl: "Gitaar" },
          { en: "Piano", es: "Piano", de: "Klavier", nl: "Piano" },
          { en: "Drum", es: "Tambor", de: "Trommel", nl: "Trommel" }
        ],
        correct: 0,
        explanation: {
          en: "While violins typically have 4 strings, some specialized violins can have 3 strings for simpler playing or traditional folk music. These instruments are still played with a bow and produce beautiful melodic sounds.",
          es: "Aunque los violines típicamente tienen 4 cuerdas, algunos violines especializados pueden tener 3 cuerdas para tocar de manera más simple o música folclórica tradicional. Estos instrumentos aún se tocan con arco y producen hermosos sonidos melódicos.",
          de: "Obwohl Geigen typischerweise 4 Saiten haben, können einige spezialisierte Geigen 3 Saiten für einfacheres Spielen oder traditionelle Volksmusik haben. Diese Instrumente werden immer noch mit einem Bogen gespielt und erzeugen schöne melodische Klänge.",
          nl: "Hoewel violen meestal 4 snaren hebben, kunnen sommige gespecialiseerde violen 3 snaren hebben voor eenvoudiger bespelen of traditionele volksmuziek. Deze instrumenten worden nog steeds met een strijkstok bespeeld en produceren prachtige melodische klanken."
        }
      },
      {
        question: {
          en: "What do you call the person who leads an orchestra?",
          es: "¿Cómo se llama a la persona que dirige una orquesta?",
          de: "Wie nennt man die Person, die ein Orchester leitet?",
          nl: "Hoe noem je de persoon die een orkest leidt?"
        },
        options: [
          { en: "Conductor", es: "Director", de: "Dirigent", nl: "Dirigent" },
          { en: "Teacher", es: "Profesor", de: "Lehrer", nl: "Leraar" },
          { en: "Player", es: "Jugador", de: "Spieler", nl: "Speler" },
          { en: "Singer", es: "Cantante", de: "Sänger", nl: "Zanger" }
        ],
        correct: 0,
        explanation: {
          en: "A conductor leads an orchestra by using hand gestures and a baton to direct the musicians. They control the tempo, dynamics, and interpretation of the music, ensuring all musicians play together in harmony.",
          es: "Un director dirige una orquesta usando gestos de mano y una batuta para dirigir a los músicos. Controlan el tempo, la dinámica y la interpretación de la música, asegurando que todos los músicos toquen juntos en armonía.",
          de: "Ein Dirigent leitet ein Orchester, indem er Handbewegungen und einen Taktstock verwendet, um die Musiker zu dirigieren. Sie kontrollieren das Tempo, die Dynamik und die Interpretation der Musik und stellen sicher, dass alle Musiker harmonisch zusammenspielen.",
          nl: "Een dirigent leidt een orkest door handgebaren en een dirigeerstok te gebruiken om de muzikanten te leiden. Ze controleren het tempo, de dynamiek en de interpretatie van de muziek, en zorgen ervoor dat alle muzikanten samen in harmonie spelen."
        }
      },
      {
        question: {
          en: "Which instrument makes sound by vibrating metal reeds?",
          es: "¿Qué instrumento hace sonido vibrando lengüetas metálicas?",
          de: "Welches Instrument macht Klang durch vibrierende Metallzungen?",
          nl: "Welk instrument maakt geluid door trillende metalen rieten?"
        },
        options: [
          { en: "Saxophone", es: "Saxofón", de: "Saxophon", nl: "Saxofoon" },
          { en: "Trumpet", es: "Trompeta", de: "Trompete", nl: "Trompet" },
          { en: "Flute", es: "Flauta", de: "Flöte", nl: "Fluit" },
          { en: "Tuba", es: "Tuba", de: "Tuba", nl: "Tuba" }
        ],
        correct: 0,
        explanation: {
          en: "A saxophone produces sound through vibrating metal reeds inside the mouthpiece. When a player blows air through the instrument, the reed vibrates against the mouthpiece, creating the saxophone's distinctive warm, rich tone.",
          es: "Un saxofón produce sonido a través de lengüetas metálicas vibrantes dentro de la boquilla. Cuando un intérprete sopla aire a través del instrumento, la lengüeta vibra contra la boquilla, creando el tono cálido y rico distintivo del saxofón.",
          de: "Ein Saxophon erzeugt Klang durch vibrierende Metallzungen im Mundstück. Wenn ein Spieler Luft durch das Instrument bläst, vibriert die Zunge gegen das Mundstück und erzeugt den charakteristischen warmen, reichen Ton des Saxophons.",
          nl: "Een saxofoon produceert geluid door trillende metalen rieten in het mondstuk. Wanneer een speler lucht door het instrument blaast, trilt het riet tegen het mondstuk, waardoor de kenmerkende warme, rijke toon van de saxofoon ontstaat."
        }
      },
      {
        question: {
          en: "What do you press on a piano to make sound?",
          es: "¿Qué presionas en un piano para hacer sonido?",
          de: "Was drückst du an einem Klavier um Töne zu erzeugen?",
          nl: "Wat druk je op een piano om geluid te maken?"
        },
        options: [
          { en: "Keys", es: "Teclas", de: "Tasten", nl: "Toetsen" },
          { en: "Strings", es: "Cuerdas", de: "Saiten", nl: "Snaren" },
          { en: "Buttons", es: "Botones", de: "Knöpfe", nl: "Knopen" },
          { en: "Handles", es: "Manijas", de: "Griffe", nl: "Handvatten" }
        ],
        correct: 0,
        explanation: {
          en: "Piano keys are pressed to make sound. When you press a key, it triggers a hammer inside the piano that strikes a string, causing it to vibrate and produce a musical note. The 88 keys cover a wide range of pitches.",
          es: "Las teclas del piano se presionan para hacer sonido. Cuando presionas una tecla, activa un martillo dentro del piano que golpea una cuerda, causando que vibre y produzca una nota musical. Las 88 teclas cubren un amplio rango de tonos.",
          de: "Klaviertasten werden gedrückt, um Klang zu erzeugen. Wenn du eine Taste drückst, löst sie einen Hammer im Klavier aus, der eine Saite schlägt, wodurch sie vibriert und eine Musiknote erzeugt. Die 88 Tasten decken einen weiten Bereich von Tonhöhen ab.",
          nl: "Pianotoetsen worden ingedrukt om geluid te maken. Wanneer je een toets indrukt, activeert het een hamer binnen de piano die een snaar raakt, waardoor deze trilt en een muzieknoot produceert. De 88 toetsen beslaan een breed bereik van toonhoogtes."
        }
      },
      {
        question: {
          en: "Which percussion instrument sounds like thunder?",
          es: "¿Qué instrumento de percusión suena como trueno?",
          de: "Welches Schlaginstrument klingt wie Donner?",
          nl: "Welk slagwerkinstrument klinkt als donder?"
        },
        options: [
          { en: "Timpani", es: "Timbales", de: "Pauke", nl: "Pauken" },
          { en: "Triangle", es: "Triángulo", de: "Triangel", nl: "Triangel" },
          { en: "Tambourine", es: "Pandereta", de: "Tamburin", nl: "Tamboerijn" },
          { en: "Bells", es: "Campanas", de: "Glocken", nl: "Bellen" }
        ],
        correct: 0,
        explanation: {
          en: "Timpani are large kettledrums that can produce deep, rumbling sounds similar to thunder. These orchestral percussion instruments can be tuned to specific pitches and create dramatic effects in classical music.",
          es: "Los timbales son grandes tambores de caldera que pueden producir sonidos profundos y retumbantes similares al trueno. Estos instrumentos de percusión orquestal pueden afinarse a tonos específicos y crear efectos dramáticos en la música clásica.",
          de: "Pauken sind große Kesseltrommeln, die tiefe, rollende Klänge ähnlich dem Donner erzeugen können. Diese orchestralen Schlaginstrumente können auf bestimmte Tonhöhen gestimmt werden und schaffen dramatische Effekte in der klassischen Musik.",
          nl: "Pauken zijn grote ketteldtroms die diepe, rommelende klanken kunnen produceren die lijken op donder. Deze orkest percussie-instrumenten kunnen gestemd worden op specifieke toonhoogtes en creëren dramatische effecten in klassieke muziek."
        }
      },
      {
        question: {
          en: "What do you need to tune an instrument?",
          es: "¿Qué necesitas para afinar un instrumento?",
          de: "Was brauchst du um ein Instrument zu stimmen?",
          nl: "Wat heb je nodig om een instrument te stemmen?"
        },
        options: [
          { en: "Good ears", es: "Buenos oídos", de: "Gute Ohren", nl: "Goede oren" },
          { en: "Strong hands", es: "Manos fuertes", de: "Starke Hände", nl: "Sterke handen" },
          { en: "Long fingers", es: "Dedos largos", de: "Lange Finger", nl: "Lange vingers" },
          { en: "Big feet", es: "Pies grandes", de: "Große Füße", nl: "Grote voeten" }
        ],
        correct: 0,
        explanation: {
          en: "To tune an instrument, you need good ears to hear pitch accurately. Musicians must be able to distinguish between different frequencies and adjust their instruments until they match the correct pitch or blend harmoniously with other instruments.",
          es: "Para afinar un instrumento, necesitas buenos oídos para escuchar el tono con precisión. Los músicos deben poder distinguir entre diferentes frecuencias y ajustar sus instrumentos hasta que coincidan con el tono correcto o se mezclen armoniosamente con otros instrumentos.",
          de: "Um ein Instrument zu stimmen, brauchst du gute Ohren, um die Tonhöhe genau zu hören. Musiker müssen zwischen verschiedenen Frequenzen unterscheiden können und ihre Instrumente anpassen, bis sie der korrekten Tonhöhe entsprechen oder harmonisch mit anderen Instrumenten verschmelzen.",
          nl: "Om een instrument te stemmen, heb je goede oren nodig om toonhoogte accuraat te horen. Muzikanten moeten onderscheid kunnen maken tussen verschillende frequenties en hun instrumenten aanpassen totdat ze overeenkomen met de juiste toonhoogte of harmonieus samengaan met andere instrumenten."
        }
      },
      {
        question: {
          en: "Which instrument can you wear around your waist?",
          es: "¿Qué instrumento puedes llevar alrededor de la cintura?",
          de: "Welches Instrument kannst du um die Taille tragen?",
          nl: "Welk instrument kun je om je middel dragen?"
        },
        options: [
          { en: "Accordion", es: "Acordeón", de: "Akkordeon", nl: "Accordeon" },
          { en: "Piano", es: "Piano", de: "Klavier", nl: "Piano" },
          { en: "Drums", es: "Batería", de: "Schlagzeug", nl: "Drums" },
          { en: "Harp", es: "Arpa", de: "Harfe", nl: "Harp" }
        ],
        correct: 0,
        explanation: {
          en: "An accordion can be worn around the waist with straps, making it portable for street performances and folk music. The bellows system allows the player to control airflow while moving around freely.",
          es: "Un acordeón puede llevarse alrededor de la cintura con correas, haciéndolo portátil para actuaciones callejeras y música folclórica. El sistema de fuelle permite al intérprete controlar el flujo de aire mientras se mueve libremente.",
          de: "Ein Akkordeon kann mit Gurten um die Taille getragen werden, wodurch es für Straßenauftritte und Volksmusik tragbar wird. Das Balgensystem ermöglicht es dem Spieler, den Luftstrom zu kontrollieren, während er sich frei bewegt.",
          nl: "Een accordeon kan om het middel gedragen worden met riemen, waardoor het draagbaar is voor straatoptredens en volksmuziek. Het balgensysteem stelt de speler in staat de luchtstroom te controleren terwijl hij vrij kan bewegen."
        }
      },
      {
        question: {
          en: "What creates sound in a bell?",
          es: "¿Qué crea sonido en una campana?",
          de: "Was erzeugt Klang in einer Glocke?",
          nl: "Wat creëert geluid in een bel?"
        },
        options: [
          { en: "Vibrating metal", es: "Metal vibrante", de: "Vibrierendes Metall", nl: "Trillend metaal" },
          { en: "Moving air", es: "Aire en movimiento", de: "Bewegende Luft", nl: "Bewegende lucht" },
          { en: "Stretched strings", es: "Cuerdas estiradas", de: "Gespannte Saiten", nl: "Gespannen snaren" },
          { en: "Wooden blocks", es: "Bloques de madera", de: "Holzblöcke", nl: "Houten blokken" }
        ],
        correct: 0,
        explanation: {
          en: "A bell creates sound through vibrating metal. When struck, the metal bell vibrates at specific frequencies, producing clear, ringing tones that can be heard over long distances. The size and thickness of the metal determine the pitch.",
          es: "Una campana crea sonido a través de metal vibrante. Cuando se golpea, la campana de metal vibra a frecuencias específicas, produciendo tonos claros y resonantes que pueden escucharse a largas distancias. El tamaño y grosor del metal determinan el tono.",
          de: "Eine Glocke erzeugt Klang durch vibrierendes Metall. Wenn sie geschlagen wird, vibriert die Metallglocke bei bestimmten Frequenzen und erzeugt klare, klingende Töne, die über weite Entfernungen gehört werden können. Die Größe und Dicke des Metalls bestimmen die Tonhöhe.",
          nl: "Een bel creëert geluid door trillend metaal. Wanneer geslagen, trilt de metalen bel op specifieke frequenties, wat heldere, rinkelende tonen produceert die over lange afstanden gehoord kunnen worden. De grootte en dikte van het metaal bepalen de toonhoogte."
        }
      },
      {
        question: {
          en: "Which instrument do you hold under your chin?",
          es: "¿Qué instrumento sostienes bajo tu barbilla?",
          de: "Welches Instrument hältst du unter dem Kinn?",
          nl: "Welk instrument houd je onder je kin?"
        },
        options: [
          { en: "Violin", es: "Violín", de: "Geige", nl: "Viool" },
          { en: "Flute", es: "Flauta", de: "Flöte", nl: "Fluit" },
          { en: "Trumpet", es: "Trompeta", de: "Trompete", nl: "Trompet" },
          { en: "Saxophone", es: "Saxofón", de: "Saxophon", nl: "Saxofoon" }
        ],
        correct: 0,
        explanation: {
          en: "A violin is held under your chin while playing. This positioning allows the left hand to finger the strings on the neck while the right hand draws the bow across the strings, creating the instrument's beautiful melodic sound.",
          es: "Un violín se sostiene bajo la barbilla mientras se toca. Esta posición permite que la mano izquierda toque las cuerdas en el mástil mientras la mano derecha desliza el arco sobre las cuerdas, creando el hermoso sonido melódico del instrumento.",
          de: "Eine Geige wird beim Spielen unter dem Kinn gehalten. Diese Positionierung ermöglicht es der linken Hand, die Saiten am Hals zu greifen, während die rechte Hand den Bogen über die Saiten zieht und den schönen melodischen Klang des Instruments erzeugt.",
          nl: "Een viool wordt onder je kin gehouden tijdens het spelen. Deze positionering stelt de linkerhand in staat om de snaren op de hals te vingeren terwijl de rechterhand de strijkstok over de snaren trekt, waardoor het prachtige melodische geluid van het instrument ontstaat."
        }
      },
      {
        question: {
          en: "What do you call the wooden part of a violin?",
          es: "¿Cómo se llama la parte de madera de un violín?",
          de: "Wie nennt man den hölzernen Teil einer Geige?",
          nl: "Hoe noem je het houten deel van een viool?"
        },
        options: [
          { en: "Body", es: "Cuerpo", de: "Korpus", nl: "Klankkast" },
          { en: "Head", es: "Cabeza", de: "Kopf", nl: "Kop" },
          { en: "Arm", es: "Brazo", de: "Arm", nl: "Arm" },
          { en: "Leg", es: "Pierna", de: "Bein", nl: "Been" }
        ],
        correct: 0,
        explanation: {
          en: "The body of a violin is the main wooden part that contains the sound hole and houses the vibrating strings. This resonating chamber amplifies the sound created by the vibrating strings, giving the violin its rich, warm tone.",
          es: "El cuerpo de un violín es la parte principal de madera que contiene el agujero de sonido y aloja las cuerdas vibrantes. Esta cámara de resonancia amplifica el sonido creado por las cuerdas vibrantes, dando al violín su tono rico y cálido.",
          de: "Der Korpus einer Geige ist der hauptsächliche Holzteil, der das Schallloch enthält und die vibrierenden Saiten beherbergt. Diese Resonanzkammer verstärkt den Klang, der von den vibrierenden Saiten erzeugt wird, und verleiht der Geige ihren reichen, warmen Ton.",
          nl: "De klankkast van een viool is het hoofdhouten deel dat het klankgat bevat en de trillende snaren herbergt. Deze resonantiekamer versterkt het geluid dat gecreëerd wordt door de trillende snaren, waardoor de viool zijn rijke, warme toon krijgt."
        }
      },
      {
        question: {
          en: "Which instrument has valves you press to change pitch?",
          es: "¿Qué instrumento tiene válvulas que presionas para cambiar el tono?",
          de: "Welches Instrument hat Ventile, die man drückt um die Tonhöhe zu ändern?",
          nl: "Welk instrument heeft kleppen die je indrukt om de toonhoogte te veranderen?"
        },
        options: [
          { en: "Trumpet", es: "Trompeta", de: "Trompete", nl: "Trompet" },
          { en: "Flute", es: "Flauta", de: "Flöte", nl: "Fluit" },
          { en: "Violin", es: "Violín", de: "Geige", nl: "Viool" },
          { en: "Piano", es: "Piano", de: "Klavier", nl: "Piano" }
        ],
        correct: 0,
        explanation: {
          en: "A trumpet has valves that you press to change pitch. These three valves redirect the airflow through different lengths of tubing, making the sound higher or lower and allowing the trumpet to play a full range of musical notes.",
          es: "Una trompeta tiene válvulas que presionas para cambiar el tono. Estas tres válvulas redirigen el flujo de aire a través de diferentes longitudes de tubería, haciendo que el sonido sea más agudo o más grave y permitiendo que la trompeta toque un rango completo de notas musicales.",
          de: "Eine Trompete hat Ventile, die man drückt, um die Tonhöhe zu ändern. Diese drei Ventile leiten den Luftstrom durch verschiedene Röhrenlängen um, wodurch der Klang höher oder tiefer wird und die Trompete einen vollständigen Bereich von Musiknoten spielen kann.",
          nl: "Een trompet heeft kleppen die je indrukt om de toonhoogte te veranderen. Deze drie kleppen leiden de luchtstroom om door verschillende lengtes van buizen, waardoor het geluid hoger of lager wordt en de trompet een volledig bereik van muzieknoten kan spelen."
        }
      },
      {
        question: {
          en: "What do you call fast musical notes?",
          es: "¿Cómo se llaman las notas musicales rápidas?",
          de: "Wie nennt man schnelle Musiknoten?",
          nl: "Hoe noem je snelle muzieknoten?"
        },
        options: [
          { en: "Quick tempo", es: "Tempo rápido", de: "Schnelles Tempo", nl: "Snel tempo" },
          { en: "Slow tempo", es: "Tempo lento", de: "Langsames Tempo", nl: "Langzaam tempo" },
          { en: "No tempo", es: "Sin tempo", de: "Kein Tempo", nl: "Geen tempo" },
          { en: "Wrong tempo", es: "Tempo incorrecto", de: "Falsches Tempo", nl: "Verkeerd tempo" }
        ],
        correct: 0,
        explanation: {
          en: "Fast musical notes are played at a quick tempo. Tempo refers to the speed of music, and quick tempo creates energetic, lively music that often makes people want to dance or move to the rhythm.",
          es: "Las notas musicales rápidas se tocan a tempo rápido. El tempo se refiere a la velocidad de la música, y el tempo rápido crea música energética y vivaz que a menudo hace que la gente quiera bailar o moverse al ritmo.",
          de: "Schnelle Musiknoten werden in schnellem Tempo gespielt. Tempo bezieht sich auf die Geschwindigkeit der Musik, und schnelles Tempo erzeugt energetische, lebhafte Musik, die oft Menschen dazu bringt, tanzen oder sich zum Rhythmus bewegen zu wollen.",
          nl: "Snelle muzieknoten worden gespeeld in een snel tempo. Tempo verwijst naar de snelheid van muziek, en snel tempo creëert energieke, levendige muziek die mensen vaak doet willen dansen of bewegen op het ritme."
        }
      },
      {
        question: {
          en: "Which instrument has frets on its neck?",
          es: "¿Qué instrumento tiene trastes en su mástil?",
          de: "Welches Instrument hat Bünde am Hals?",
          nl: "Welk instrument heeft frets op de hals?"
        },
        options: [
          { en: "Guitar", es: "Guitarra", de: "Gitarre", nl: "Gitaar" },
          { en: "Violin", es: "Violín", de: "Geige", nl: "Viool" },
          { en: "Piano", es: "Piano", de: "Klavier", nl: "Piano" },
          { en: "Flute", es: "Flauta", de: "Flöte", nl: "Fluit" }
        ],
        correct: 0,
        explanation: {
          en: "A guitar has frets on its neck - metal strips that divide the neck into sections. When you press a string against a fret, it shortens the vibrating length of the string, creating different pitches and making it easier to play accurate notes.",
          es: "Una guitarra tiene trastes en su mástil - tiras metálicas que dividen el mástil en secciones. Cuando presionas una cuerda contra un traste, acortas la longitud vibrante de la cuerda, creando diferentes tonos y facilitando tocar notas precisas.",
          de: "Eine Gitarre hat Bünde am Hals - Metallstreifen, die den Hals in Abschnitte unterteilen. Wenn du eine Saite gegen einen Bund drückst, verkürzt du die vibrierende Länge der Saite, erzeugst verschiedene Tonhöhen und machst es einfacher, genaue Noten zu spielen.",
          nl: "Een gitaar heeft frets op de hals - metalen strips die de hals in secties verdelen. Wanneer je een snaar tegen een fret drukt, verkort je de trillende lengte van de snaar, waardoor verschillende toonhoogtes ontstaan en het makkelijker wordt om accurate noten te spelen."
        }
      },
      {
        question: {
          en: "What do you call singing without instruments?",
          es: "¿Cómo se llama cantar sin instrumentos?",
          de: "Wie nennt man Singen ohne Instrumente?",
          nl: "Hoe noem je zingen zonder instrumenten?"
        },
        options: [
          { en: "A cappella", es: "A capella", de: "A cappella", nl: "A capella" },
          { en: "Karaoke", es: "Karaoke", de: "Karaoke", nl: "Karaoke" },
          { en: "Solo", es: "Solo", de: "Solo", nl: "Solo" },
          { en: "Duet", es: "Dueto", de: "Duett", nl: "Duet" }
        ],
        correct: 0,
        explanation: {
          en: "A cappella refers to singing without instrumental accompaniment. The term comes from Italian meaning 'in the manner of the chapel' and showcases pure vocal harmony and rhythm created entirely by human voices.",
          es: "A capella se refiere a cantar sin acompañamiento instrumental. El término viene del italiano que significa 'a la manera de la capilla' y muestra armonía vocal pura y ritmo creado completamente por voces humanas.",
          de: "A cappella bezieht sich auf Singen ohne Instrumentalbegleitung. Der Begriff kommt aus dem Italienischen und bedeutet 'in der Art der Kapelle' und zeigt pure Vokalharmonie und Rhythmus, die vollständig von menschlichen Stimmen erzeugt werden.",
          nl: "A capella verwijst naar zingen zonder instrumentale begeleiding. De term komt uit het Italiaans en betekent 'op de manier van de kapel' en toont pure vocale harmonie en ritme gecreëerd volledig door menselijke stemmen."
        }
      },
      {
        question: {
          en: "Which instrument family includes the guitar?",
          es: "¿Qué familia de instrumentos incluye la guitarra?",
          de: "Welche Instrumentenfamilie umfasst die Gitarre?",
          nl: "Welke instrumentenfamilie bevat de gitaar?"
        },
        options: [
          { en: "String", es: "Cuerda", de: "Saiteninstrument", nl: "Snaarinstrument" },
          { en: "Woodwind", es: "Viento madera", de: "Holzbläser", nl: "Houtblazers" },
          { en: "Brass", es: "Viento metal", de: "Blechbläser", nl: "Koperblazers" },
          { en: "Percussion", es: "Percusión", de: "Schlagzeug", nl: "Percussie" }
        ],
        correct: 0,
        explanation: {
          en: "The guitar belongs to the string instrument family. String instruments produce sound through vibrating strings, and guitars create music when the strings are plucked, strummed, or picked with fingers or a pick.",
          es: "La guitarra pertenece a la familia de instrumentos de cuerda. Los instrumentos de cuerda producen sonido a través de cuerdas vibrantes, y las guitarras crean música cuando las cuerdas se pulsan, rasguean o tocan con dedos o púa.",
          de: "Die Gitarre gehört zur Familie der Saiteninstrumente. Saiteninstrumente erzeugen Klang durch vibrierende Saiten, und Gitarren erzeugen Musik, wenn die Saiten mit Fingern oder einem Plektrum gezupft, geschlagen oder angeschlagen werden.",
          nl: "De gitaar behoort tot de snaarinstrumenten familie. Snaarinstrumenten produceren geluid door trillende snaren, en gitaren creëren muziek wanneer de snaren getokkeld, gestreeld of gespeeld worden met vingers of een plectrum."
        }
      },
      {
        question: {
          en: "What makes the xylophone different from a piano?",
          es: "¿Qué hace diferente el xilófono de un piano?",
          de: "Was macht das Xylophon anders als ein Klavier?",
          nl: "Wat maakt de xylofoon anders dan een piano?"
        },
        options: [
          { en: "Wooden bars vs keys", es: "Barras de madera vs teclas", de: "Holzstäbe vs Tasten", nl: "Houten staven vs toetsen" },
          { en: "Size difference", es: "Diferencia de tamaño", de: "Größenunterschied", nl: "Grootteverschil" },
          { en: "Color difference", es: "Diferencia de color", de: "Farbunterschied", nl: "Kleurverschil" },
          { en: "Weight difference", es: "Diferencia de peso", de: "Gewichtsunterschied", nl: "Gewichtsverschil" }
        ],
        correct: 0,
        explanation: {
          en: "The main difference between a xylophone and piano is that a xylophone has wooden bars that are struck with mallets, while a piano has keys that trigger hammers to strike strings. Both create different pitches but through completely different mechanisms.",
          es: "La principal diferencia entre un xilófono y un piano es que un xilófono tiene barras de madera que se golpean con mazos, mientras que un piano tiene teclas que activan martillos para golpear cuerdas. Ambos crean diferentes tonos pero a través de mecanismos completamente diferentes.",
          de: "Der Hauptunterschied zwischen einem Xylophon und einem Klavier ist, dass ein Xylophon Holzstäbe hat, die mit Schlägeln geschlagen werden, während ein Klavier Tasten hat, die Hämmer auslösen, um Saiten zu schlagen. Beide erzeugen verschiedene Tonhöhen, aber durch völlig verschiedene Mechanismen.",
          nl: "Het hoofdverschil tussen een xylofoon en een piano is dat een xylofoon houten staven heeft die geslagen worden met kloppers, terwijl een piano toetsen heeft die hamers activeren om snaren te raken. Beide creëren verschillende toonhoogtes maar door compleet verschillende mechanismen."
        }
      },
      {
        question: {
          en: "Which instrument do you blow across a hole to play?",
          es: "¿Qué instrumento soplas a través de un agujero para tocar?",
          de: "In welches Instrument bläst man über ein Loch zum Spielen?",
          nl: "In welk instrument blaas je over een gat om te spelen?"
        },
        options: [
          { en: "Flute", es: "Flauta", de: "Querflöte", nl: "Dwarsfluit" },
          { en: "Recorder", es: "Flauta dulce", de: "Blockflöte", nl: "Blokfluit" },
          { en: "Trumpet", es: "Trompeta", de: "Trompete", nl: "Trompet" },
          { en: "Saxophone", es: "Saxofón", de: "Saxophon", nl: "Saxofoon" }
        ],
        correct: 0,
        explanation: {
          en: "A flute is played by blowing air across a hole rather than into it. This transverse (side-blown) technique creates the flute's characteristic bright, clear tone as air flows across the embouchure hole and vibrates the air column inside.",
          es: "Una flauta se toca soplando aire a través de un agujero en lugar de dentro de él. Esta técnica transversal (soplado lateral) crea el tono brillante y claro característico de la flauta mientras el aire fluye a través del agujero de embocadura y vibra la columna de aire interior.",
          de: "Eine Querflöte wird gespielt, indem man Luft über ein Loch bläst, anstatt hinein. Diese Quertechnik (seitlich geblasen) erzeugt den charakteristischen hellen, klaren Ton der Flöte, während Luft über das Anblassloch strömt und die Luftsäule im Inneren vibriert.",
          nl: "Een dwarsfluit wordt bespeeld door lucht over een gat te blazen in plaats van erin. Deze dwarse (zijwaarts geblazen) techniek creëert de karakteristieke heldere, zuivere toon van de fluit terwijl lucht over het mondgat stroomt en de luchtkolom binnenin doet trillen."
        }
      },
      {
        question: {
          en: "What do you call a very large guitar?",
          es: "¿Cómo se llama una guitarra muy grande?",
          de: "Wie nennt man eine sehr große Gitarre?",
          nl: "Hoe noem je een erg grote gitaar?"
        },
        options: [
          { en: "Bass guitar", es: "Guitarra bajo", de: "Bassgitarre", nl: "Basgitaar" },
          { en: "Electric guitar", es: "Guitarra eléctrica", de: "E-Gitarre", nl: "Elektrische gitaar" },
          { en: "Acoustic guitar", es: "Guitarra acústica", de: "Akustikgitarre", nl: "Akoestische gitaar" },
          { en: "Classical guitar", es: "Guitarra clásica", de: "Klassische Gitarre", nl: "Klassieke gitaar" }
        ],
        correct: 0,
        explanation: {
          en: "A bass guitar is a very large guitar with thicker strings that produce lower, deeper sounds. It typically has 4 strings and provides the low-end foundation in most musical ensembles, creating the rhythmic and harmonic base.",
          es: "Una guitarra bajo es una guitarra muy grande con cuerdas más gruesas que producen sonidos más bajos y profundos. Típicamente tiene 4 cuerdas y proporciona la base de frecuencias bajas en la mayoría de conjuntos musicales, creando la base rítmica y armónica.",
          de: "Eine Bassgitarre ist eine sehr große Gitarre mit dickeren Saiten, die tiefere, dunklere Klänge erzeugen. Sie hat typischerweise 4 Saiten und bildet das tieffrequente Fundament in den meisten Musikensembles, wodurch die rhythmische und harmonische Basis geschaffen wird.",
          nl: "Een basgitaar is een erg grote gitaar met dikkere snaren die lagere, diepere klanken produceren. Het heeft meestal 4 snaren en biedt de lage frequentie basis in de meeste muziekensembles, waardoor de ritmische en harmonische basis wordt gecreëerd."
        }
      },
      {
        question: {
          en: "Which instrument can sound like a horse galloping?",
          es: "¿Qué instrumento puede sonar como un caballo galopando?",
          de: "Welches Instrument kann wie ein galoppierendes Pferd klingen?",
          nl: "Welk instrument kan klinken als een galoppeerend paard?"
        },
        options: [
          { en: "Coconut shells", es: "Cáscaras de coco", de: "Kokosnussschalen", nl: "Kokosschalen" },
          { en: "Piano", es: "Piano", de: "Klavier", nl: "Piano" },
          { en: "Flute", es: "Flauta", de: "Flöte", nl: "Fluit" },
          { en: "Guitar", es: "Guitarra", de: "Gitarre", nl: "Gitaar" }
        ],
        correct: 0,
        explanation: {
          en: "Coconut shells can be clapped together to create a clip-clop sound that mimics a horse galloping. This percussion effect has been used in theater, radio shows, and movies to create the illusion of horses without using real animals.",
          es: "Las cáscaras de coco pueden golpearse juntas para crear un sonido de clip-clop que imita un caballo galopando. Este efecto de percusión se ha usado en teatro, programas de radio y películas para crear la ilusión de caballos sin usar animales reales.",
          de: "Kokosnussschalen können zusammengeschlagen werden, um ein Klipp-Klapp-Geräusch zu erzeugen, das ein galoppierendes Pferd nachahmt. Dieser Percussion-Effekt wurde in Theater, Radiosendungen und Filmen verwendet, um die Illusion von Pferden zu erzeugen, ohne echte Tiere zu verwenden.",
          nl: "Kokosschalen kunnen samen geklopt worden om een klip-klop geluid te creëren dat een galoppeerend paard nabootst. Dit percussie-effect is gebruikt in theater, radioprogramma's en films om de illusie van paarden te creëren zonder echte dieren te gebruiken."
        }
      },
      {
        question: {
          en: "What do you call the part of the guitar you hold?",
          es: "¿Cómo se llama la parte de la guitarra que sostienes?",
          de: "Wie nennt man den Teil der Gitarre, den man hält?",
          nl: "Hoe noem je het deel van de gitaar dat je vasthoudt?"
        },
        options: [
          { en: "Neck", es: "Mástil", de: "Hals", nl: "Hals" },
          { en: "Body", es: "Cuerpo", de: "Korpus", nl: "Klankkast" },
          { en: "Head", es: "Cabeza", de: "Kopf", nl: "Kop" },
          { en: "Tail", es: "Cola", de: "Schwanz", nl: "Staart" }
        ],
        correct: 0,
        explanation: {
          en: "The neck of a guitar is the long, thin part that you hold with your left hand while playing. It contains the frets and fingerboard where you press the strings to create different notes and chords.",
          es: "El mástil de una guitarra es la parte larga y delgada que sostienes con la mano izquierda mientras tocas. Contiene los trastes y el diapasón donde presionas las cuerdas para crear diferentes notas y acordes.",
          de: "Der Hals einer Gitarre ist der lange, dünne Teil, den du mit der linken Hand hältst, während du spielst. Er enthält die Bünde und das Griffbrett, wo du die Saiten drückst, um verschiedene Noten und Akkorde zu erzeugen.",
          nl: "De hals van een gitaar is het lange, dunne deel dat je met je linkerhand vasthoudt tijdens het spelen. Het bevat de frets en toetsenplank waar je de snaren indrukt om verschillende noten en akkoorden te creëren."
        }
      },
      {
        question: {
          en: "Which instrument makes the highest sounds in an orchestra?",
          es: "¿Qué instrumento hace los sonidos más agudos en una orquesta?",
          de: "Welches Instrument macht die höchsten Töne in einem Orchester?",
          nl: "Welk instrument maakt de hoogste klanken in een orkest?"
        },
        options: [
          { en: "Piccolo", es: "Flautín", de: "Piccolo", nl: "Piccolo" },
          { en: "Tuba", es: "Tuba", de: "Tuba", nl: "Tuba" },
          { en: "Double bass", es: "Contrabajo", de: "Kontrabass", nl: "Contrabas" },
          { en: "Cello", es: "Violonchelo", de: "Cello", nl: "Cello" }
        ],
        correct: 0,
        explanation: {
          en: "The piccolo makes the highest sounds in an orchestra. This small flute, about half the size of a regular flute, can reach extremely high pitches that cut through the entire orchestra, often used for special effects and bright, sparkling melodies.",
          es: "El flautín hace los sonidos más agudos en una orquesta. Esta pequeña flauta, aproximadamente la mitad del tamaño de una flauta regular, puede alcanzar tonos extremadamente agudos que atraviesan toda la orquesta, a menudo usado para efectos especiales y melodías brillantes y centelleantes.",
          de: "Die Piccolo macht die höchsten Klänge in einem Orchester. Diese kleine Flöte, etwa halb so groß wie eine normale Flöte, kann extrem hohe Tonhöhen erreichen, die durch das gesamte Orchester schneiden, oft für spezielle Effekte und helle, funkelnde Melodien verwendet.",
          nl: "De piccolo maakt de hoogste klanken in een orkest. Deze kleine fluit, ongeveer half zo groot als een gewone fluit, kan extreem hoge toonhoogtes bereiken die door het hele orkest heen snijden, vaak gebruikt voor speciale effecten en heldere, sprankelende melodieën."
        }
      },
      {
        question: {
          en: "What do you call a song sung by one person?",
          es: "¿Cómo se llama una canción cantada por una persona?",
          de: "Wie nennt man ein Lied, das von einer Person gesungen wird?",
          nl: "Hoe noem je een lied gezongen door één persoon?"
        },
        options: [
          { en: "Solo", es: "Solo", de: "Solo", nl: "Solo" },
          { en: "Duet", es: "Dueto", de: "Duett", nl: "Duet" },
          { en: "Trio", es: "Trío", de: "Trio", nl: "Trio" },
          { en: "Quartet", es: "Cuarteto", de: "Quartett", nl: "Kwartet" }
        ],
        correct: 0,
        explanation: {
          en: "A solo is a song or musical piece performed by one person alone. In music, solos showcase an individual performer's skill and allow them to express their personal interpretation of the music without other voices or instruments.",
          es: "Un solo es una canción o pieza musical interpretada por una persona sola. En música, los solos muestran la habilidad de un intérprete individual y les permite expresar su interpretación personal de la música sin otras voces o instrumentos.",
          de: "Ein Solo ist ein Lied oder Musikstück, das von einer Person allein aufgeführt wird. In der Musik zeigen Solos die Fähigkeit eines einzelnen Interpreten und ermöglichen es ihm, seine persönliche Interpretation der Musik ohne andere Stimmen oder Instrumente auszudrücken.",
          nl: "Een solo is een lied of muziekstuk uitgevoerd door één persoon alleen. In muziek tonen solo's de vaardigheid van een individuele uitvoerder en stellen hen in staat hun persoonlijke interpretatie van de muziek uit te drukken zonder andere stemmen of instrumenten."
        }
      },
      {
        question: {
          en: "Which instrument do you hold between your knees?",
          es: "¿Qué instrumento sostienes entre las rodillas?",
          de: "Welches Instrument hältst du zwischen den Knien?",
          nl: "Welk instrument houd je tussen je knieën?"
        },
        options: [
          { en: "Cello", es: "Violonchelo", de: "Cello", nl: "Cello" },
          { en: "Violin", es: "Violín", de: "Geige", nl: "Viool" },
          { en: "Flute", es: "Flauta", de: "Flöte", nl: "Fluit" },
          { en: "Trumpet", es: "Trompeta", de: "Trompete", nl: "Trompet" }
        ],
        correct: 0,
        explanation: {
          en: "A cello is held between your knees while playing. This large string instrument is positioned upright between the player's legs, with an endpin touching the ground for support, allowing the bow to be drawn across the strings comfortably.",
          es: "Un violonchelo se sostiene entre las rodillas mientras se toca. Este gran instrumento de cuerda se posiciona verticalmente entre las piernas del intérprete, con una pica tocando el suelo para apoyo, permitiendo que el arco se deslice sobre las cuerdas cómodamente.",
          de: "Ein Cello wird zwischen den Knien gehalten, während man spielt. Dieses große Saiteninstrument wird aufrecht zwischen den Beinen des Spielers positioniert, mit einem Stachel, der den Boden berührt zur Unterstützung, wodurch der Bogen bequem über die Saiten geführt werden kann.",
          nl: "Een cello wordt tussen je knieën gehouden tijdens het spelen. Dit grote snaarinstrument wordt rechtop tussen de benen van de speler gepositioneerd, met een steunpin die de grond raakt voor ondersteuning, waardoor de strijkstok comfortabel over de snaren getrokken kan worden."
        }
      },
      {
        question: {
          en: "What creates music in a music box?",
          es: "¿Qué crea música en una caja de música?",
          de: "Was erzeugt Musik in einer Spieluhr?",
          nl: "Wat creëert muziek in een muziekdoosje?"
        },
        options: [
          { en: "Metal pins and comb", es: "Pines metálicos y peine", de: "Metallstifte und Kamm", nl: "Metalen pinnen en kam" },
          { en: "Tiny piano", es: "Piano diminuto", de: "Winziges Klavier", nl: "Klein pianoForte" },
          { en: "Small drum", es: "Tambor pequeño", de: "Kleine Trommel", nl: "Kleine trommel" },
          { en: "Mini guitar", es: "Mini guitarra", de: "Mini-Gitarre", nl: "Mini gitaar" }
        ],
        correct: 0,
        explanation: {
          en: "A music box creates music through metal pins on a rotating cylinder that pluck the teeth of a metal comb. As the cylinder turns, the pins strike different teeth, each tuned to a specific note, creating a delicate, tinkling melody.",
          es: "Una caja de música crea música a través de pines metálicos en un cilindro giratorio que pulsan los dientes de un peine metálico. Mientras el cilindro gira, los pines golpean diferentes dientes, cada uno afinado a una nota específica, creando una melodía delicada y tintinieante.",
          de: "Eine Spieluhr erzeugt Musik durch Metallstifte auf einem rotierenden Zylinder, die die Zähne eines Metallkamms zupfen. Während sich der Zylinder dreht, treffen die Stifte verschiedene Zähne, die jeweils auf eine bestimmte Note gestimmt sind, und erzeugen eine zarte, klirrende Melodie.",
          nl: "Een muziekdoosje creëert muziek door metalen pinnen op een roterende cilinder die de tanden van een metalen kam tokkelen. Terwijl de cilinder draait, raken de pinnen verschillende tanden, elk gestemd op een specifieke noot, waardoor een delicate, rinkelende melodie ontstaat."
        }
      },
      {
        question: {
          en: "Which instrument sounds like rain when shaken?",
          es: "¿Qué instrumento suena como lluvia cuando se agita?",
          de: "Welches Instrument klingt wie Regen wenn man es schüttelt?",
          nl: "Welk instrument klinkt als regen als je het schudt?"
        },
        options: [
          { en: "Rain stick", es: "Palo de lluvia", de: "Regenstab", nl: "Regenstok" },
          { en: "Maracas", es: "Maracas", de: "Maracas", nl: "Maracas" },
          { en: "Tambourine", es: "Pandereta", de: "Tamburin", nl: "Tamboerijn" },
          { en: "Bells", es: "Campanas", de: "Glocken", nl: "Bellen" }
        ],
        correct: 0,
        explanation: {
          en: "A rain stick is a percussion instrument that sounds like rain when shaken. Filled with small beads or seeds and containing internal spikes, it creates a cascading, rainfall-like sound as the contents tumble through the tube.",
          es: "Un palo de lluvia es un instrumento de percusión que suena como lluvia cuando se agita. Lleno de cuentas pequeñas o semillas y conteniendo picos internos, crea un sonido de cascada, similar a la lluvia, mientras el contenido cae a través del tubo.",
          de: "Ein Regenstab ist ein Schlaginstrument, das wie Regen klingt, wenn man es schüttelt. Gefüllt mit kleinen Perlen oder Samen und mit inneren Stacheln versehen, erzeugt er ein kaskadierendes, regenartiges Geräusch, während der Inhalt durch das Rohr fällt.",
          nl: "Een regenstok is een percussie-instrument dat klinkt als regen wanneer geschud. Gevuld met kleine kralen of zaden en bevattend interne spikes, creëert het een waterval-achtig, regenachtig geluid terwijl de inhoud door de buis tuimelt."
        }
      },
      {
        question: {
          en: "What do you use to play a xylophone?",
          es: "¿Qué usas para tocar un xilófono?",
          de: "Was benutzt du um ein Xylophon zu spielen?",
          nl: "Wat gebruik je om een xylofoon te spelen?"
        },
        options: [
          { en: "Mallets", es: "Mazas", de: "Schlägel", nl: "Hamertjes" },
          { en: "Fingers", es: "Dedos", de: "Finger", nl: "Vingers" },
          { en: "Your voice", es: "Tu voz", de: "Deine Stimme", nl: "Je stem" },
          { en: "A bow", es: "Un arco", de: "Ein Bogen", nl: "Een strijkstok" }
        ],
        correct: 0,
        explanation: {
          en: "You use mallets to play a xylophone! These special wooden or rubber-tipped sticks strike the colorful metal or wooden bars to create beautiful, clear musical notes. Each bar is tuned to a different pitch!",
          es: "¡Usas mazas para tocar un xilófono! Estos palos especiales de madera o con puntas de goma golpean las barras coloridas de metal o madera para crear notas musicales hermosas y claras. ¡Cada barra está afinada a un tono diferente!",
          de: "Du benutzt Schlägel um ein Xylophon zu spielen! Diese speziellen Holz- oder Gummistäbe schlagen die bunten Metall- oder Holzstäbe, um schöne, klare Musiknoten zu erzeugen. Jeder Stab ist auf eine andere Tonhöhe gestimmt!",
          nl: "Je gebruikt hamertjes om een xylofoon te spelen! Deze speciale houten of rubber-getipte stokjes slaan de kleurrijke metalen of houten staven om mooie, heldere muzieknoten te creëren. Elke staaf is gestemd op een andere toonhoogte!"
        }
      },
      {
        question: {
          en: "Which instrument do you blow into to make music?",
          es: "¿En qué instrumento soplas para hacer música?",
          de: "In welches Instrument bläst du um Musik zu machen?",
          nl: "In welk instrument blaas je om muziek te maken?"
        },
        options: [
          { en: "Flute", es: "Flauta", de: "Flöte", nl: "Fluit" },
          { en: "Guitar", es: "Guitarra", de: "Gitarre", nl: "Gitaar" },
          { en: "Drum", es: "Tambor", de: "Trommel", nl: "Trom" },
          { en: "Piano", es: "Piano", de: "Klavier", nl: "Piano" }
        ],
        correct: 0,
        explanation: {
          en: "You blow into a flute to make music! Air flowing across the flute's holes creates beautiful, airy melodies. Flutes are wind instruments that make sweet, bird-like sounds when you blow across the mouthpiece!",
          es: "¡Soplas en una flauta para hacer música! El aire que fluye a través de los agujeros de la flauta crea melodías hermosas y aéreas. ¡Las flautas son instrumentos de viento que hacen sonidos dulces, como de pájaro, cuando soplas a través de la boquilla!",
          de: "Du bläst in eine Flöte um Musik zu machen! Luft, die über die Löcher der Flöte strömt, erzeugt schöne, luftige Melodien. Flöten sind Blasinstrumente, die süße, vogelartige Klänge machen, wenn du über das Mundstück bläst!",
          nl: "Je blaast in een fluit om muziek te maken! Lucht die over de gaten van de fluit stroomt creëert mooie, luchtige melodieën. Fluiten zijn blaasinstrumenten die zoete, vogelachtige geluiden maken wanneer je over het mondstuk blaast!"
        }
      },
      {
        question: {
          en: "What makes a music box play a song?",
          es: "¿Qué hace que una caja de música toque una canción?",
          de: "Was bringt eine Spieluhr dazu, ein Lied zu spielen?",
          nl: "Wat zorgt ervoor dat een muziekdoosje een liedje speelt?"
        },
        options: [
          { en: "Winding up a spring", es: "Dar cuerda a un resorte", de: "Eine Feder aufziehen", nl: "Een veer opwinden" },
          { en: "Plugging it into electricity", es: "Conectarlo a la electricidad", de: "Es an Strom anschließen", nl: "Het aansluiten op elektriciteit" },
          { en: "Putting batteries in it", es: "Ponerle baterías", de: "Batterien einlegen", nl: "Er batterijen in doen" },
          { en: "Speaking to it", es: "Hablarle", de: "Mit ihm sprechen", nl: "Ertegen praten" }
        ],
        correct: 0,
        explanation: {
          en: "You wind up a spring to make a music box play! Turning the little key winds up a metal spring inside. As the spring slowly unwinds, it powers a rotating cylinder that plucks metal teeth to create a gentle, tinkling melody!",
          es: "¡Das cuerda a un resorte para hacer que una caja de música toque! Girar la pequeña llave da cuerda a un resorte metálico adentro. ¡Mientras el resorte se desenrolla lentamente, impulsa un cilindro giratorio que pulsa dientes metálicos para crear una melodía suave y tintinieante!",
          de: "Du ziehst eine Feder auf um eine Spieluhr zum Spielen zu bringen! Das Drehen des kleinen Schlüssels zieht eine Metallfeder im Inneren auf. Während sich die Feder langsam entspannt, treibt sie einen rotierenden Zylinder an, der Metallzähne zupft, um eine sanfte, klirrende Melodie zu erzeugen!",
          nl: "Je windt een veer op om een muziekdoosje te laten spelen! Het draaien van het kleine sleuteltje windt een metalen veer binnenin op. Terwijl de veer langzaam afwindt, drijft het een roterende cilinder aan die metalen tanden tokkelt om een zachte, rinkelende melodie te creëren!"
        }
      },
      {
        question: {
          en: "Which instrument has black and white keys?",
          es: "¿Qué instrumento tiene teclas blancas y negras?",
          de: "Welches Instrument hat schwarze und weiße Tasten?",
          nl: "Welk instrument heeft zwarte en witte toetsen?"
        },
        options: [
          { en: "Piano", es: "Piano", de: "Klavier", nl: "Piano" },
          { en: "Violin", es: "Violín", de: "Geige", nl: "Viool" },
          { en: "Flute", es: "Flauta", de: "Flöte", nl: "Fluit" },
          { en: "Drums", es: "Tambores", de: "Trommeln", nl: "Drums" }
        ],
        correct: 0,
        explanation: {
          en: "A piano has black and white keys! The white keys play natural notes like C, D, E, F, G, A, B, while the black keys play sharp and flat notes. Pressing different keys creates different musical sounds - it's like having a rainbow of music at your fingertips!",
          es: "¡Un piano tiene teclas blancas y negras! Las teclas blancas tocan notas naturales como Do, Re, Mi, Fa, Sol, La, Si, mientras las teclas negras tocan notas sostenidas y bemoles. ¡Presionar diferentes teclas crea diferentes sonidos musicales - es como tener un arcoíris de música en la punta de tus dedos!",
          de: "Ein Klavier hat schwarze und weiße Tasten! Die weißen Tasten spielen natürliche Noten wie C, D, E, F, G, A, H, während die schwarzen Tasten Kreuz- und b-Noten spielen. Das Drücken verschiedener Tasten erzeugt verschiedene Musikklänge - es ist wie einen Regenbogen der Musik an den Fingerspitzen zu haben!",
          nl: "Een piano heeft zwarte en witte toetsen! De witte toetsen spelen natuurlijke noten zoals C, D, E, F, G, A, B, terwijl de zwarte toetsen kruis- en mol-noten spelen. Het indrukken van verschillende toetsen creëert verschillende muziekgeluiden - het is alsof je een regenboog van muziek aan je vingertoppen hebt!"
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('warm-up/arts-culture', level3);
  }
})();