// Quiz Template - Level 1: Boeken - Klassieke literatuur
(function() {
  const level1 = {
    name: {
      en: "Classic Literature - Beginner",
      es: "Literatura Clásica - Principiante",
      de: "Klassische Literatur - Anfänger",
      nl: "Klassieke literatuur - Beginner"
    },
    questions: [
      {
        question: {
          en: "Who wrote 'Pride and Prejudice'?",
          es: "¿Quién escribió 'Orgullo y prejuicio'?",
          de: "Wer schrieb 'Stolz und Vorurteil'?",
          nl: "Wie schreef 'Trots en vooroordeel'?"
        },
        options: [
          { en: "Jane Austen", es: "Jane Austen", de: "Jane Austen", nl: "Jane Austen" },
          { en: "Charlotte Brontë", es: "Charlotte Brontë", de: "Charlotte Brontë", nl: "Charlotte Brontë" },
          { en: "Emily Brontë", es: "Emily Brontë", de: "Emily Brontë", nl: "Emily Brontë" },
          { en: "George Eliot", es: "George Eliot", de: "George Eliot", nl: "George Eliot" }
        ],
        correct: 0,
        explanation: {
          en: "Jane Austen wrote 'Pride and Prejudice' (1813), one of the most famous novels in English literature, exploring themes of love, marriage, and social class.",
          es: "Jane Austen escribió 'Orgullo y prejuicio' (1813), una de las novelas más famosas de la literatura inglesa, explorando temas de amor, matrimonio y clase social.",
          de: "Jane Austen schrieb 'Stolz und Vorurteil' (1813), einen der berühmtesten Romane der englischen Literatur, der Themen wie Liebe, Ehe und Gesellschaftsklasse erforscht.",
          nl: "Jane Austen schreef 'Trots en vooroordeel' (1813), een van de beroemdste romans in de Engelse literatuur, waarin thema's als liefde, huwelijk en sociale klasse worden verkend."
        }
      },
      {
        question: {
          en: "What is the first line of Charles Dickens' 'A Tale of Two Cities'?",
          es: "¿Cuál es la primera línea de 'Historia de dos ciudades' de Charles Dickens?",
          de: "Wie lautet die erste Zeile von Charles Dickens' 'Eine Geschichte zweier Städte'?",
          nl: "Wat is de eerste regel van Charles Dickens' 'Een verhaal van twee steden'?"
        },
        options: [
          { en: "Call me Ishmael", es: "Llamadme Ismael", de: "Nennt mich Ismael", nl: "Noem me Ismaël" },
          { en: "It was the best of times, it was the worst of times", es: "Era el mejor de los tiempos, era el peor de los tiempos", de: "Es war die beste aller Zeiten, es war die schlechteste aller Zeiten", nl: "Het was de beste der tijden, het was de slechtste der tijden" },
          { en: "In a hole in the ground there lived a hobbit", es: "En un agujero en el suelo vivía un hobbit", de: "In einem Loch im Boden, da lebte ein Hobbit", nl: "In een gat in de grond woonde een hobbit" },
          { en: "All happy families are alike", es: "Todas las familias felices se parecen", de: "Alle glücklichen Familien sind einander ähnlich", nl: "Alle gelukkige families lijken op elkaar" }
        ],
        correct: 1,
        explanation: {
          en: "'It was the best of times, it was the worst of times' is the famous opening line of 'A Tale of Two Cities', capturing the contradictions of the era during the French Revolution.",
          es: "'Era el mejor de los tiempos, era el peor de los tiempos' es la famosa línea de apertura de 'Historia de dos ciudades', capturando las contradicciones de la era durante la Revolución Francesa.",
          de: "'Es war die beste aller Zeiten, es war die schlechteste aller Zeiten' ist die berühmte Eröffnungszeile von 'Eine Geschichte zweier Städte', die die Widersprüche der Ära während der Französischen Revolution einfängt.",
          nl: "'Het was de beste der tijden, het was de slechtste der tijden' is de beroemde openingsregel van 'Een verhaal van twee steden', waarin de tegenstrijdigheden van het tijdperk tijdens de Franse Revolutie worden gevat."
        }
      },
      {
        question: {
          en: "Who wrote 'One Hundred Years of Solitude'?",
          es: "¿Quién escribió 'Cien años de soledad'?",
          de: "Wer schrieb 'Hundert Jahre Einsamkeit'?",
          nl: "Wie schreef 'Honderd jaar eenzaamheid'?"
        },
        options: [
          { en: "Jorge Luis Borges", es: "Jorge Luis Borges", de: "Jorge Luis Borges", nl: "Jorge Luis Borges" },
          { en: "Gabriel García Márquez", es: "Gabriel García Márquez", de: "Gabriel García Márquez", nl: "Gabriel García Márquez" },
          { en: "Mario Vargas Llosa", es: "Mario Vargas Llosa", de: "Mario Vargas Llosa", nl: "Mario Vargas Llosa" },
          { en: "Octavio Paz", es: "Octavio Paz", de: "Octavio Paz", nl: "Octavio Paz" }
        ],
        correct: 1,
        explanation: {
          en: "Gabriel García Márquez wrote 'One Hundred Years of Solitude' (1967), a masterpiece of magical realism that helped him win the Nobel Prize in Literature in 1982.",
          es: "Gabriel García Márquez escribió 'Cien años de soledad' (1967), una obra maestra del realismo mágico que le ayudó a ganar el Premio Nobel de Literatura en 1982.",
          de: "Gabriel García Márquez schrieb 'Hundert Jahre Einsamkeit' (1967), ein Meisterwerk des magischen Realismus, das ihm 1982 den Literaturnobelpreis einbrachte.",
          nl: "Gabriel García Márquez schreef 'Honderd jaar eenzaamheid' (1967), een meesterwerk van magisch realisme dat hem hielp de Nobelprijs voor Literatuur te winnen in 1982."
        }
      },
      {
        question: {
          en: "What is the name of the protagonist in 'The Great Gatsby'?",
          es: "¿Cómo se llama el protagonista de 'El gran Gatsby'?",
          de: "Wie heißt der Protagonist in 'Der große Gatsby'?",
          nl: "Hoe heet de hoofdpersoon in 'De grote Gatsby'?"
        },
        options: [
          { en: "Jay Gatsby", es: "Jay Gatsby", de: "Jay Gatsby", nl: "Jay Gatsby" },
          { en: "Nick Carraway", es: "Nick Carraway", de: "Nick Carraway", nl: "Nick Carraway" },
          { en: "Tom Buchanan", es: "Tom Buchanan", de: "Tom Buchanan", nl: "Tom Buchanan" },
          { en: "George Wilson", es: "George Wilson", de: "George Wilson", nl: "George Wilson" }
        ],
        correct: 0,
        explanation: {
          en: "Jay Gatsby is the titular protagonist of F. Scott Fitzgerald's 'The Great Gatsby' (1925), though the story is narrated by Nick Carraway.",
          es: "Jay Gatsby es el protagonista titular de 'El gran Gatsby' (1925) de F. Scott Fitzgerald, aunque la historia es narrada por Nick Carraway.",
          de: "Jay Gatsby ist der Titelprotagonist von F. Scott Fitzgeralds 'Der große Gatsby' (1925), obwohl die Geschichte von Nick Carraway erzählt wird.",
          nl: "Jay Gatsby is de titulaire hoofdpersoon van F. Scott Fitzgerald's 'De grote Gatsby' (1925), hoewel het verhaal wordt verteld door Nick Carraway."
        }
      },
      {
        question: {
          en: "Who wrote 'To Kill a Mockingbird'?",
          es: "¿Quién escribió 'Matar a un ruiseñor'?",
          de: "Wer schrieb 'Wer die Nachtigall stört'?",
          nl: "Wie schreef 'Doden van een spotlijster'?"
        },
        options: [
          { en: "Harper Lee", es: "Harper Lee", de: "Harper Lee", nl: "Harper Lee" },
          { en: "Flannery O'Connor", es: "Flannery O'Connor", de: "Flannery O'Connor", nl: "Flannery O'Connor" },
          { en: "Carson McCullers", es: "Carson McCullers", de: "Carson McCullers", nl: "Carson McCullers" },
          { en: "Eudora Welty", es: "Eudora Welty", de: "Eudora Welty", nl: "Eudora Welty" }
        ],
        correct: 0,
        explanation: {
          en: "Harper Lee wrote 'To Kill a Mockingbird' (1960), which won the Pulitzer Prize for Fiction and addresses issues of racial injustice in the American South.",
          es: "Harper Lee escribió 'Matar a un ruiseñor' (1960), que ganó el Premio Pulitzer de Ficción y aborda temas de injusticia racial en el sur americano.",
          de: "Harper Lee schrieb 'Wer die Nachtigall stört' (1960), das den Pulitzer-Preis für Belletristik gewann und Themen der Rassengerechtigkeit im amerikanischen Süden behandelt.",
          nl: "Harper Lee schreef 'Doden van een spotlijster' (1960), dat de Pulitzer Prijs voor Fictie won en vraagstukken van raciale onrechtvaardigheid in het Amerikaanse Zuiden behandelt."
        }
      },
      {
        question: {
          en: "What is the setting of 'Wuthering Heights'?",
          es: "¿Cuál es el escenario de 'Cumbres borrascosas'?",
          de: "Was ist der Schauplatz von 'Sturmhöhe'?",
          nl: "Wat is de setting van 'De woeste hoogte'?"
        },
        options: [
          { en: "The Scottish Highlands", es: "Las Tierras Altas de Escocia", de: "Die schottischen Highlands", nl: "De Schotse Hooglanden" },
          { en: "The Yorkshire Moors", es: "Los páramos de Yorkshire", de: "Die Yorkshire Moors", nl: "De Yorkshire heuvels" },
          { en: "The Irish countryside", es: "El campo irlandés", de: "Die irische Landschaft", nl: "Het Ierse platteland" },
          { en: "The Welsh valleys", es: "Los valles galeses", de: "Die walisischen Täler", nl: "De Welshe valleien" }
        ],
        correct: 1,
        explanation: {
          en: "'Wuthering Heights' by Emily Brontë is set on the Yorkshire Moors in northern England, where the isolated farmhouse creates a dark, atmospheric backdrop for the story.",
          es: "'Cumbres borrascosas' de Emily Brontë está ambientada en los páramos de Yorkshire en el norte de Inglaterra, donde la granja aislada crea un trasfondo oscuro y atmosférico para la historia.",
          de: "'Sturmhöhe' von Emily Brontë spielt in den Yorkshire Moors in Nordengland, wo das isolierte Bauernhaus eine dunkle, atmosphärische Kulisse für die Geschichte schafft.",
          nl: "'De woeste hoogte' van Emily Brontë speelt zich af op de Yorkshire heuvels in Noord-Engeland, waar de geïsoleerde boerderij een donkere, atmosferische achtergrond voor het verhaal creëert."
        }
      },
      {
        question: {
          en: "Who wrote 'Crime and Punishment'?",
          es: "¿Quién escribió 'Crimen y castigo'?",
          de: "Wer schrieb 'Schuld und Sühne'?",
          nl: "Wie schreef 'Misdaad en straf'?"
        },
        options: [
          { en: "Leo Tolstoy", es: "León Tolstói", de: "Leo Tolstoi", nl: "Leo Tolstoj" },
          { en: "Fyodor Dostoevsky", es: "Fiódor Dostoyevski", de: "Fjodor Dostojewski", nl: "Fjodor Dostojevski" },
          { en: "Anton Chekhov", es: "Antón Chéjov", de: "Anton Tschechow", nl: "Anton Tsjechov" },
          { en: "Ivan Turgenev", es: "Iván Turguénev", de: "Iwan Turgenew", nl: "Ivan Toergenjev" }
        ],
        correct: 1,
        explanation: {
          en: "Fyodor Dostoevsky wrote 'Crime and Punishment' (1866), a psychological novel exploring themes of guilt, redemption, and moral responsibility through the character Raskolnikov.",
          es: "Fiódor Dostoyevski escribió 'Crimen y castigo' (1866), una novela psicológica que explora temas de culpa, redención y responsabilidad moral a través del personaje Raskolnikov.",
          de: "Fjodor Dostojewski schrieb 'Schuld und Sühne' (1866), einen psychologischen Roman, der Themen wie Schuld, Erlösung und moralische Verantwortung durch die Figur Raskolnikow erforscht.",
          nl: "Fjodor Dostojevski schreef 'Misdaad en straf' (1866), een psychologische roman die thema's van schuld, verlossing en morele verantwoordelijkheid verkent door het personage Raskolnikov."
        }
      },
      {
        question: {
          en: "In which Shakespeare play does the character Hamlet appear?",
          es: "¿En qué obra de Shakespeare aparece el personaje Hamlet?",
          de: "In welchem Shakespeare-Stück erscheint die Figur Hamlet?",
          nl: "In welk Shakespeare toneelstuk komt het personage Hamlet voor?"
        },
        options: [
          { en: "Macbeth", es: "Macbeth", de: "Macbeth", nl: "Macbeth" },
          { en: "Hamlet", es: "Hamlet", de: "Hamlet", nl: "Hamlet" },
          { en: "King Lear", es: "El rey Lear", de: "König Lear", nl: "Koning Lear" },
          { en: "Othello", es: "Otelo", de: "Othello", nl: "Othello" }
        ],
        correct: 1,
        explanation: {
          en: "Hamlet is the protagonist of Shakespeare's tragedy 'Hamlet' (c. 1600-1601), the Prince of Denmark who seeks revenge for his father's murder.",
          es: "Hamlet es el protagonista de la tragedia 'Hamlet' de Shakespeare (c. 1600-1601), el Príncipe de Dinamarca que busca venganza por el asesinato de su padre.",
          de: "Hamlet ist der Protagonist von Shakespeares Tragödie 'Hamlet' (ca. 1600-1601), der Prinz von Dänemark, der Rache für den Mord an seinem Vater sucht.",
          nl: "Hamlet is de hoofdpersoon van Shakespeare's tragedie 'Hamlet' (ca. 1600-1601), de Prins van Denemarken die wraak zoekt voor de moord op zijn vader."
        }
      },
      {
        question: {
          en: "Who wrote 'The Brothers Karamazov'?",
          es: "¿Quién escribió 'Los hermanos Karamázov'?",
          de: "Wer schrieb 'Die Brüder Karamasow'?",
          nl: "Wie schreef 'De gebroeders Karamazov'?"
        },
        options: [
          { en: "Fyodor Dostoevsky", es: "Fiódor Dostoyevski", de: "Fjodor Dostojewski", nl: "Fjodor Dostojevski" },
          { en: "Leo Tolstoy", es: "León Tolstói", de: "Leo Tolstoi", nl: "Leo Tolstoj" },
          { en: "Nikolai Gogol", es: "Nikolái Gógol", de: "Nikolai Gogol", nl: "Nikolaj Gogol" },
          { en: "Maxim Gorky", es: "Máximo Gorki", de: "Maxim Gorki", nl: "Maksim Gorki" }
        ],
        correct: 0,
        explanation: {
          en: "Fyodor Dostoevsky wrote 'The Brothers Karamazov' (1880), his final novel exploring themes of faith, doubt, morality, and free will through the story of three brothers.",
          es: "Fiódor Dostoyevski escribió 'Los hermanos Karamázov' (1880), su novela final que explora temas de fe, duda, moralidad y libre albedrío a través de la historia de tres hermanos.",
          de: "Fjodor Dostojewski schrieb 'Die Brüder Karamasow' (1880), seinen letzten Roman, der Themen wie Glaube, Zweifel, Moral und freien Willen durch die Geschichte dreier Brüder erforscht.",
          nl: "Fjodor Dostojevski schreef 'De gebroeders Karamazov' (1880), zijn laatste roman die thema's van geloof, twijfel, moraliteit en vrije wil verkent door het verhaal van drie broers."
        }
      },
      {
        question: {
          en: "What is the first novel in the English language?",
          es: "¿Cuál es la primera novela en el idioma inglés?",
          de: "Was ist der erste Roman in englischer Sprache?",
          nl: "Wat is de eerste roman in de Engelse taal?"
        },
        options: [
          { en: "Robinson Crusoe", es: "Robinson Crusoe", de: "Robinson Crusoe", nl: "Robinson Crusoe" },
          { en: "Pamela", es: "Pamela", de: "Pamela", nl: "Pamela" },
          { en: "The Pilgrim's Progress", es: "El progreso del peregrino", de: "Die Pilgerreise", nl: "De Pelgrimsreis" },
          { en: "Don Quixote", es: "Don Quijote", de: "Don Quijote", nl: "Don Quichot" }
        ],
        correct: 0,
        explanation: {
          en: "'Robinson Crusoe' by Daniel Defoe (1719) is often considered the first English novel, telling the story of a man stranded on a desert island.",
          es: "'Robinson Crusoe' de Daniel Defoe (1719) a menudo se considera la primera novela inglesa, contando la historia de un hombre varado en una isla desierta.",
          de: "'Robinson Crusoe' von Daniel Defoe (1719) wird oft als der erste englische Roman betrachtet und erzählt die Geschichte eines Mannes, der auf einer einsamen Insel gestrandet ist.",
          nl: "'Robinson Crusoe' van Daniel Defoe (1719) wordt vaak beschouwd als de eerste Engelse roman, die het verhaal vertelt van een man gestrand op een onbewoond eiland."
        }
      },
      {
        question: {
          en: "Who wrote 'The Divine Comedy'?",
          es: "¿Quién escribió 'La Divina Comedia'?",
          de: "Wer schrieb 'Die Göttliche Komödie'?",
          nl: "Wie schreef 'De Goddelijke Komedie'?"
        },
        options: [
          { en: "Dante Alighieri", es: "Dante Alighieri", de: "Dante Alighieri", nl: "Dante Alighieri" },
          { en: "Petrarch", es: "Petrarca", de: "Petrarca", nl: "Petrarca" },
          { en: "Boccaccio", es: "Boccaccio", de: "Boccaccio", nl: "Boccaccio" },
          { en: "Chaucer", es: "Chaucer", de: "Chaucer", nl: "Chaucer" }
        ],
        correct: 0,
        explanation: {
          en: "Dante Alighieri wrote 'The Divine Comedy' (1320), an epic poem describing the journey through Hell, Purgatory, and Paradise, considered one of the greatest works of world literature.",
          es: "Dante Alighieri escribió 'La Divina Comedia' (1320), un poema épico que describe el viaje a través del Infierno, Purgatorio y Paraíso, considerado una de las obras más grandes de la literatura mundial.",
          de: "Dante Alighieri schrieb 'Die Göttliche Komödie' (1320), ein episches Gedicht, das die Reise durch Hölle, Fegefeuer und Paradies beschreibt und als eines der größten Werke der Weltliteratur gilt.",
          nl: "Dante Alighieri schreef 'De Goddelijke Komedie' (1320), een episch gedicht dat de reis door de Hel, het Vagevuur en het Paradijs beschrijft, beschouwd als een van de grootste werken van de wereldliteratuur."
        }
      },
      {
        question: {
          en: "What is the name of Captain Ahab's ship in 'Moby Dick'?",
          es: "¿Cómo se llama el barco del Capitán Ahab en 'Moby Dick'?",
          de: "Wie heißt Kapitän Ahabs Schiff in 'Moby Dick'?",
          nl: "Hoe heet het schip van kapitein Achab in 'Moby Dick'?"
        },
        options: [
          { en: "The Hispaniola", es: "La Hispaniola", de: "Die Hispaniola", nl: "De Hispaniola" },
          { en: "The Pequod", es: "El Pequod", de: "Die Pequod", nl: "De Pequod" },
          { en: "The Nautilus", es: "El Nautilus", de: "Die Nautilus", nl: "De Nautilus" },
          { en: "The Bounty", es: "El Bounty", de: "Die Bounty", nl: "De Bounty" }
        ],
        correct: 1,
        explanation: {
          en: "The Pequod is Captain Ahab's whaling ship in Herman Melville's 'Moby Dick' (1851), from which he pursues the white whale that destroyed his leg.",
          es: "El Pequod es el barco ballenero del Capitán Ahab en 'Moby Dick' (1851) de Herman Melville, desde el cual persigue a la ballena blanca que destruyó su pierna.",
          de: "Die Pequod ist Kapitän Ahabs Walfangschiff in Herman Melvilles 'Moby Dick' (1851), von dem aus er den weißen Wal verfolgt, der sein Bein zerstörte.",
          nl: "De Pequod is kapitein Achab's walvisvaarder in Herman Melville's 'Moby Dick' (1851), van waaruit hij de witte walvis achtervolgt die zijn been vernietigde."
        }
      },
      {
        question: {
          en: "Who wrote 'The Canterbury Tales'?",
          es: "¿Quién escribió 'Los cuentos de Canterbury'?",
          de: "Wer schrieb 'Die Canterbury-Erzählungen'?",
          nl: "Wie schreef 'De Canterbury verhalen'?"
        },
        options: [
          { en: "William Langland", es: "William Langland", de: "William Langland", nl: "William Langland" },
          { en: "Geoffrey Chaucer", es: "Geoffrey Chaucer", de: "Geoffrey Chaucer", nl: "Geoffrey Chaucer" },
          { en: "John Gower", es: "John Gower", de: "John Gower", nl: "John Gower" },
          { en: "Thomas Malory", es: "Thomas Malory", de: "Thomas Malory", nl: "Thomas Malory" }
        ],
        correct: 1,
        explanation: {
          en: "Geoffrey Chaucer wrote 'The Canterbury Tales' (late 14th century), a collection of stories told by pilgrims traveling to Canterbury Cathedral, written in Middle English.",
          es: "Geoffrey Chaucer escribió 'Los cuentos de Canterbury' (finales del siglo XIV), una colección de historias contadas por peregrinos que viajan a la Catedral de Canterbury, escritas en inglés medio.",
          de: "Geoffrey Chaucer schrieb 'Die Canterbury-Erzählungen' (spätes 14. Jahrhundert), eine Sammlung von Geschichten, die von Pilgern erzählt werden, die zur Kathedrale von Canterbury reisen, geschrieben in Mittelenglisch.",
          nl: "Geoffrey Chaucer schreef 'De Canterbury verhalen' (late 14e eeuw), een verzameling verhalen verteld door pelgrims die naar de Kathedraal van Canterbury reizen, geschreven in Middelengels."
        }
      },
      {
        question: {
          en: "What is the first line of 'Anna Karenina'?",
          es: "¿Cuál es la primera línea de 'Ana Karenina'?",
          de: "Wie lautet die erste Zeile von 'Anna Karenina'?",
          nl: "Wat is de eerste regel van 'Anna Karenina'?"
        },
        options: [
          { en: "It was the best of times", es: "Era el mejor de los tiempos", de: "Es war die beste aller Zeiten", nl: "Het was de beste der tijden" },
          { en: "All happy families are alike", es: "Todas las familias felices se parecen", de: "Alle glücklichen Familien sind einander ähnlich", nl: "Alle gelukkige families lijken op elkaar" },
          { en: "Call me Ishmael", es: "Llamadme Ismael", de: "Nennt mich Ismael", nl: "Noem me Ismaël" },
          { en: "In a hole in the ground", es: "En un agujero en el suelo", de: "In einem Loch im Boden", nl: "In een gat in de grond" }
        ],
        correct: 1,
        explanation: {
          en: "'All happy families are alike; each unhappy family is unhappy in its own way' is the famous opening line of Tolstoy's 'Anna Karenina' (1878).",
          es: "'Todas las familias felices se parecen; cada familia infeliz es infeliz a su manera' es la famosa línea de apertura de 'Ana Karenina' (1878) de Tolstói.",
          de: "'Alle glücklichen Familien sind einander ähnlich; jede unglückliche Familie ist auf ihre eigene Weise unglücklich' ist die berühmte Eröffnungszeile von Tolstois 'Anna Karenina' (1878).",
          nl: "'Alle gelukkige families lijken op elkaar; elke ongelukkige familie is op haar eigen manier ongelukkig' is de beroemde openingsregel van Tolstoj's 'Anna Karenina' (1878)."
        }
      },
      {
        question: {
          en: "Who wrote 'The Metamorphosis'?",
          es: "¿Quién escribió 'La metamorfosis'?",
          de: "Wer schrieb 'Die Verwandlung'?",
          nl: "Wie schreef 'De gedaanteverwisseling'?"
        },
        options: [
          { en: "Franz Kafka", es: "Franz Kafka", de: "Franz Kafka", nl: "Franz Kafka" },
          { en: "Thomas Mann", es: "Thomas Mann", de: "Thomas Mann", nl: "Thomas Mann" },
          { en: "Hermann Hesse", es: "Hermann Hesse", de: "Hermann Hesse", nl: "Hermann Hesse" },
          { en: "Robert Musil", es: "Robert Musil", de: "Robert Musil", nl: "Robert Musil" }
        ],
        correct: 0,
        explanation: {
          en: "Franz Kafka wrote 'The Metamorphosis' (1915), a surreal novella about Gregor Samsa who wakes up transformed into a giant insect-like creature.",
          es: "Franz Kafka escribió 'La metamorfosis' (1915), una novela surrealista sobre Gregor Samsa que despierta transformado en una criatura gigante parecida a un insecto.",
          de: "Franz Kafka schrieb 'Die Verwandlung' (1915), eine surreale Novelle über Gregor Samsa, der aufwacht und sich in ein riesiges insektenähnliches Wesen verwandelt hat.",
          nl: "Franz Kafka schreef 'De gedaanteverwisseling' (1915), een surrealistische novelle over Gregor Samsa die wakker wordt getransformeerd in een gigantisch insectachtig wezen."
        }
      },
      {
        question: {
          en: "What is the name of the narrator in 'The Great Gatsby'?",
          es: "¿Cómo se llama el narrador de 'El gran Gatsby'?",
          de: "Wie heißt der Erzähler in 'Der große Gatsby'?",
          nl: "Hoe heet de verteller in 'De grote Gatsby'?"
        },
        options: [
          { en: "Jay Gatsby", es: "Jay Gatsby", de: "Jay Gatsby", nl: "Jay Gatsby" },
          { en: "Nick Carraway", es: "Nick Carraway", de: "Nick Carraway", nl: "Nick Carraway" },
          { en: "Tom Buchanan", es: "Tom Buchanan", de: "Tom Buchanan", nl: "Tom Buchanan" },
          { en: "Meyer Wolfsheim", es: "Meyer Wolfsheim", de: "Meyer Wolfsheim", nl: "Meyer Wolfsheim" }
        ],
        correct: 1,
        explanation: {
          en: "Nick Carraway is the narrator of F. Scott Fitzgerald's 'The Great Gatsby', Gatsby's neighbor who tells the story of the mysterious millionaire.",
          es: "Nick Carraway es el narrador de 'El gran Gatsby' de F. Scott Fitzgerald, el vecino de Gatsby que cuenta la historia del misterioso millonario.",
          de: "Nick Carraway ist der Erzähler von F. Scott Fitzgeralds 'Der große Gatsby', Gatsbys Nachbar, der die Geschichte des mysteriösen Millionärs erzählt.",
          nl: "Nick Carraway is de verteller van F. Scott Fitzgerald's 'De grote Gatsby', Gatsby's buurman die het verhaal vertelt van de mysterieuze miljonair."
        }
      },
      {
        question: {
          en: "Who wrote 'Don Quixote'?",
          es: "¿Quién escribió 'Don Quijote'?",
          de: "Wer schrieb 'Don Quijote'?",
          nl: "Wie schreef 'Don Quichot'?"
        },
        options: [
          { en: "Miguel de Cervantes", es: "Miguel de Cervantes", de: "Miguel de Cervantes", nl: "Miguel de Cervantes" },
          { en: "Lope de Vega", es: "Lope de Vega", de: "Lope de Vega", nl: "Lope de Vega" },
          { en: "Calderón de la Barca", es: "Calderón de la Barca", de: "Calderón de la Barca", nl: "Calderón de la Barca" },
          { en: "Francisco de Quevedo", es: "Francisco de Quevedo", de: "Francisco de Quevedo", nl: "Francisco de Quevedo" }
        ],
        correct: 0,
        explanation: {
          en: "Miguel de Cervantes wrote 'Don Quixote' (1605-1615), often considered the first modern novel and one of the greatest works of fiction ever written.",
          es: "Miguel de Cervantes escribió 'Don Quijote' (1605-1615), a menudo considerada la primera novela moderna y una de las obras de ficción más grandes jamás escritas.",
          de: "Miguel de Cervantes schrieb 'Don Quijote' (1605-1615), oft als der erste moderne Roman und eines der größten Werke der Belletristik aller Zeiten betrachtet.",
          nl: "Miguel de Cervantes schreef 'Don Quichot' (1605-1615), vaak beschouwd als de eerste moderne roman en een van de grootste fictiewerken ooit geschreven."
        }
      },
      {
        question: {
          en: "What is the setting of 'The Catcher in the Rye'?",
          es: "¿Cuál es el escenario de 'El guardián entre el centeno'?",
          de: "Was ist der Schauplatz von 'Der Fänger im Roggen'?",
          nl: "Wat is de setting van 'De vanger in het graan'?"
        },
        options: [
          { en: "Boston", es: "Boston", de: "Boston", nl: "Boston" },
          { en: "New York City", es: "Ciudad de Nueva York", de: "New York City", nl: "New York City" },
          { en: "Philadelphia", es: "Filadelfia", de: "Philadelphia", nl: "Philadelphia" },
          { en: "Chicago", es: "Chicago", de: "Chicago", nl: "Chicago" }
        ],
        correct: 1,
        explanation: {
          en: "'The Catcher in the Rye' by J.D. Salinger is primarily set in New York City, where teenager Holden Caulfield wanders after leaving his prep school.",
          es: "'El guardián entre el centeno' de J.D. Salinger está principalmente ambientada en la Ciudad de Nueva York, donde el adolescente Holden Caulfield deambula después de dejar su escuela preparatoria.",
          de: "'Der Fänger im Roggen' von J.D. Salinger spielt hauptsächlich in New York City, wo der Teenager Holden Caulfield umherwandert, nachdem er seine Vorbereitungsschule verlassen hat.",
          nl: "'De vanger in het graan' van J.D. Salinger speelt zich voornamelijk af in New York City, waar tiener Holden Caulfield ronddwaalt na het verlaten van zijn voorbereidende school."
        }
      },
      {
        question: {
          en: "Who wrote 'Ulysses'?",
          es: "¿Quién escribió 'Ulises'?",
          de: "Wer schrieb 'Ulysses'?",
          nl: "Wie schreef 'Ulysses'?"
        },
        options: [
          { en: "James Joyce", es: "James Joyce", de: "James Joyce", nl: "James Joyce" },
          { en: "Samuel Beckett", es: "Samuel Beckett", de: "Samuel Beckett", nl: "Samuel Beckett" },
          { en: "Oscar Wilde", es: "Oscar Wilde", de: "Oscar Wilde", nl: "Oscar Wilde" },
          { en: "W.B. Yeats", es: "W.B. Yeats", de: "W.B. Yeats", nl: "W.B. Yeats" }
        ],
        correct: 0,
        explanation: {
          en: "James Joyce wrote 'Ulysses' (1922), a modernist novel set in Dublin that follows Leopold Bloom through a single day, paralleling Homer's Odyssey.",
          es: "James Joyce escribió 'Ulises' (1922), una novela modernista ambientada en Dublín que sigue a Leopold Bloom durante un solo día, paralelizando la Odisea de Homero.",
          de: "James Joyce schrieb 'Ulysses' (1922), einen modernistischen Roman in Dublin, der Leopold Bloom durch einen einzigen Tag folgt und Homers Odyssee parallelisiert.",
          nl: "James Joyce schreef 'Ulysses' (1922), een modernistische roman gesitueerd in Dublin die Leopold Bloom volgt gedurende een enkele dag, parallel aan Homerus' Odyssee."
        }
      },
      {
        question: {
          en: "Who wrote 'One Hundred Years of Solitude'?",
          es: "¿Quién escribió 'Cien años de soledad'?",
          de: "Wer schrieb 'Hundert Jahre Einsamkeit'?",
          nl: "Wie schreef 'Honderd jaar eenzaamheid'?"
        },
        options: [
          { en: "Gabriel García Márquez", es: "Gabriel García Márquez", de: "Gabriel García Márquez", nl: "Gabriel García Márquez" },
          { en: "Mario Vargas Llosa", es: "Mario Vargas Llosa", de: "Mario Vargas Llosa", nl: "Mario Vargas Llosa" },
          { en: "Jorge Luis Borges", es: "Jorge Luis Borges", de: "Jorge Luis Borges", nl: "Jorge Luis Borges" },
          { en: "Octavio Paz", es: "Octavio Paz", de: "Octavio Paz", nl: "Octavio Paz" }
        ],
        correct: 0,
        explanation: {
          en: "Gabriel García Márquez wrote 'One Hundred Years of Solitude' (1967), a landmark work of magical realism that chronicles the Buendía family over seven generations.",
          es: "Gabriel García Márquez escribió 'Cien años de soledad' (1967), una obra emblemática del realismo mágico que narra la historia de la familia Buendía a lo largo de siete generaciones.",
          de: "Gabriel García Márquez schrieb 'Hundert Jahre Einsamkeit' (1967), ein wegweisendes Werk des magischen Realismus, das die Familie Buendía über sieben Generationen verfolgt.",
          nl: "Gabriel García Márquez schreef 'Honderd jaar eenzaamheid' (1967), een baanbrekend werk van magisch realisme dat de familie Buendía over zeven generaties volgt."
        }      },
      {
        question: {
          en: "Who wrote Pride and Prejudice?",
          es: "Who wrote Pride and Prejudice?",
          de: "Who wrote Pride and Prejudice?",
          nl: "Who wrote Pride and Prejudice?"
        },
        options: [
          { en: "Jane Austen", es: "Jane Austen", de: "Jane Austen", nl: "Jane Austen" },
          { en: "Charlotte Bronte", es: "Charlotte Bronte", de: "Charlotte Bronte", nl: "Charlotte Bronte" },
          { en: "Emily Bronte", es: "Emily Bronte", de: "Emily Bronte", nl: "Emily Bronte" },
          { en: "George Eliot", es: "George Eliot", de: "George Eliot", nl: "George Eliot" }
        ],
        correct: 0,
        explanation: {
          en: "Jane Austen wrote Pride and Prejudice in 1813 about Elizabeth Bennet and Mr Darcy.",
          es: "Jane Austen wrote Pride and Prejudice in 1813 about Elizabeth Bennet and Mr Darcy.",
          de: "Jane Austen wrote Pride and Prejudice in 1813 about Elizabeth Bennet and Mr Darcy.",
          nl: "Jane Austen wrote Pride and Prejudice in 1813 about Elizabeth Bennet and Mr Darcy."
        }      },
      {
        question: {
          en: "Who is the author of 1984?",
          es: "Who is the author of 1984?",
          de: "Who is the author of 1984?",
          nl: "Who is the author of 1984?"
        },
        options: [
          { en: "George Orwell", es: "George Orwell", de: "George Orwell", nl: "George Orwell" },
          { en: "Aldous Huxley", es: "Aldous Huxley", de: "Aldous Huxley", nl: "Aldous Huxley" },
          { en: "Ray Bradbury", es: "Ray Bradbury", de: "Ray Bradbury", nl: "Ray Bradbury" },
          { en: "Kurt Vonnegut", es: "Kurt Vonnegut", de: "Kurt Vonnegut", nl: "Kurt Vonnegut" }
        ],
        correct: 0,
        explanation: {
          en: "George Orwell wrote 1984 in 1949 about totalitarian surveillance state.",
          es: "George Orwell wrote 1984 in 1949 about totalitarian surveillance state.",
          de: "George Orwell wrote 1984 in 1949 about totalitarian surveillance state.",
          nl: "George Orwell wrote 1984 in 1949 about totalitarian surveillance state."
        }      },
      {
        question: {
          en: "Who wrote To Kill a Mockingbird?",
          es: "Who wrote To Kill a Mockingbird?",
          de: "Who wrote To Kill a Mockingbird?",
          nl: "Who wrote To Kill a Mockingbird?"
        },
        options: [
          { en: "Harper Lee", es: "Harper Lee", de: "Harper Lee", nl: "Harper Lee" },
          { en: "Toni Morrison", es: "Toni Morrison", de: "Toni Morrison", nl: "Toni Morrison" },
          { en: "Maya Angelou", es: "Maya Angelou", de: "Maya Angelou", nl: "Maya Angelou" },
          { en: "Alice Walker", es: "Alice Walker", de: "Alice Walker", nl: "Alice Walker" }
        ],
        correct: 0,
        explanation: {
          en: "Harper Lee wrote To Kill a Mockingbird in 1960 about racial injustice in Alabama.",
          es: "Harper Lee wrote To Kill a Mockingbird in 1960 about racial injustice in Alabama.",
          de: "Harper Lee wrote To Kill a Mockingbird in 1960 about racial injustice in Alabama.",
          nl: "Harper Lee wrote To Kill a Mockingbird in 1960 about racial injustice in Alabama."
        }      },
      {
        question: {
          en: "The Great Gatsby is by?",
          es: "The Great Gatsby is by?",
          de: "The Great Gatsby is by?",
          nl: "The Great Gatsby is by?"
        },
        options: [
          { en: "F. Scott Fitzgerald", es: "F. Scott Fitzgerald", de: "F. Scott Fitzgerald", nl: "F. Scott Fitzgerald" },
          { en: "Ernest Hemingway", es: "Ernest Hemingway", de: "Ernest Hemingway", nl: "Ernest Hemingway" },
          { en: "John Steinbeck", es: "John Steinbeck", de: "John Steinbeck", nl: "John Steinbeck" },
          { en: "William Faulkner", es: "William Faulkner", de: "William Faulkner", nl: "William Faulkner" }
        ],
        correct: 0,
        explanation: {
          en: "F. Scott Fitzgerald wrote The Great Gatsby in 1925 about Jazz Age excess.",
          es: "F. Scott Fitzgerald wrote The Great Gatsby in 1925 about Jazz Age excess.",
          de: "F. Scott Fitzgerald wrote The Great Gatsby in 1925 about Jazz Age excess.",
          nl: "F. Scott Fitzgerald wrote The Great Gatsby in 1925 about Jazz Age excess."
        }      },
      {
        question: {
          en: "Who wrote Wuthering Heights?",
          es: "Who wrote Wuthering Heights?",
          de: "Who wrote Wuthering Heights?",
          nl: "Who wrote Wuthering Heights?"
        },
        options: [
          { en: "Emily Bronte", es: "Emily Bronte", de: "Emily Bronte", nl: "Emily Bronte" },
          { en: "Charlotte Bronte", es: "Charlotte Bronte", de: "Charlotte Bronte", nl: "Charlotte Bronte" },
          { en: "Jane Austen", es: "Jane Austen", de: "Jane Austen", nl: "Jane Austen" },
          { en: "George Eliot", es: "George Eliot", de: "George Eliot", nl: "George Eliot" }
        ],
        correct: 0,
        explanation: {
          en: "Emily Bronte wrote Wuthering Heights in 1847 about Heathcliff and Catherine.",
          es: "Emily Bronte wrote Wuthering Heights in 1847 about Heathcliff and Catherine.",
          de: "Emily Bronte wrote Wuthering Heights in 1847 about Heathcliff and Catherine.",
          nl: "Emily Bronte wrote Wuthering Heights in 1847 about Heathcliff and Catherine."
        }      },
      {
        question: {
          en: "Moby Dick was written by?",
          es: "Moby Dick was written by?",
          de: "Moby Dick was written by?",
          nl: "Moby Dick was written by?"
        },
        options: [
          { en: "Herman Melville", es: "Herman Melville", de: "Herman Melville", nl: "Herman Melville" },
          { en: "Nathaniel Hawthorne", es: "Nathaniel Hawthorne", de: "Nathaniel Hawthorne", nl: "Nathaniel Hawthorne" },
          { en: "Mark Twain", es: "Mark Twain", de: "Mark Twain", nl: "Mark Twain" },
          { en: "Edgar Allan Poe", es: "Edgar Allan Poe", de: "Edgar Allan Poe", nl: "Edgar Allan Poe" }
        ],
        correct: 0,
        explanation: {
          en: "Herman Melville wrote Moby Dick in 1851 about Captain Ahabs obsession.",
          es: "Herman Melville wrote Moby Dick in 1851 about Captain Ahabs obsession.",
          de: "Herman Melville wrote Moby Dick in 1851 about Captain Ahabs obsession.",
          nl: "Herman Melville wrote Moby Dick in 1851 about Captain Ahabs obsession."
        }      },
      {
        question: {
          en: "Who is the author of Jane Eyre?",
          es: "Who is the author of Jane Eyre?",
          de: "Who is the author of Jane Eyre?",
          nl: "Who is the author of Jane Eyre?"
        },
        options: [
          { en: "Charlotte Bronte", es: "Charlotte Bronte", de: "Charlotte Bronte", nl: "Charlotte Bronte" },
          { en: "Emily Bronte", es: "Emily Bronte", de: "Emily Bronte", nl: "Emily Bronte" },
          { en: "Jane Austen", es: "Jane Austen", de: "Jane Austen", nl: "Jane Austen" },
          { en: "Virginia Woolf", es: "Virginia Woolf", de: "Virginia Woolf", nl: "Virginia Woolf" }
        ],
        correct: 0,
        explanation: {
          en: "Charlotte Bronte wrote Jane Eyre in 1847 about an orphaned governess.",
          es: "Charlotte Bronte wrote Jane Eyre in 1847 about an orphaned governess.",
          de: "Charlotte Bronte wrote Jane Eyre in 1847 about an orphaned governess.",
          nl: "Charlotte Bronte wrote Jane Eyre in 1847 about an orphaned governess."
        }      },
      {
        question: {
          en: "Who wrote The Catcher in the Rye?",
          es: "Who wrote The Catcher in the Rye?",
          de: "Who wrote The Catcher in the Rye?",
          nl: "Who wrote The Catcher in the Rye?"
        },
        options: [
          { en: "J.D. Salinger", es: "J.D. Salinger", de: "J.D. Salinger", nl: "J.D. Salinger" },
          { en: "Jack Kerouac", es: "Jack Kerouac", de: "Jack Kerouac", nl: "Jack Kerouac" },
          { en: "John Updike", es: "John Updike", de: "John Updike", nl: "John Updike" },
          { en: "Philip Roth", es: "Philip Roth", de: "Philip Roth", nl: "Philip Roth" }
        ],
        correct: 0,
        explanation: {
          en: "J.D. Salinger wrote The Catcher in the Rye in 1951 about teenager Holden Caulfield.",
          es: "J.D. Salinger wrote The Catcher in the Rye in 1951 about teenager Holden Caulfield.",
          de: "J.D. Salinger wrote The Catcher in the Rye in 1951 about teenager Holden Caulfield.",
          nl: "J.D. Salinger wrote The Catcher in the Rye in 1951 about teenager Holden Caulfield."
        }      },
      {
        question: {
          en: "Brave New World is by?",
          es: "Brave New World is by?",
          de: "Brave New World is by?",
          nl: "Brave New World is by?"
        },
        options: [
          { en: "Aldous Huxley", es: "Aldous Huxley", de: "Aldous Huxley", nl: "Aldous Huxley" },
          { en: "George Orwell", es: "George Orwell", de: "George Orwell", nl: "George Orwell" },
          { en: "H.G. Wells", es: "H.G. Wells", de: "H.G. Wells", nl: "H.G. Wells" },
          { en: "Ray Bradbury", es: "Ray Bradbury", de: "Ray Bradbury", nl: "Ray Bradbury" }
        ],
        correct: 0,
        explanation: {
          en: "Aldous Huxley wrote Brave New World in 1932 about dystopian future society.",
          es: "Aldous Huxley wrote Brave New World in 1932 about dystopian future society.",
          de: "Aldous Huxley wrote Brave New World in 1932 about dystopian future society.",
          nl: "Aldous Huxley wrote Brave New World in 1932 about dystopian future society."
        }      },
      {
        question: {
          en: "Who wrote Of Mice and Men?",
          es: "Who wrote Of Mice and Men?",
          de: "Who wrote Of Mice and Men?",
          nl: "Who wrote Of Mice and Men?"
        },
        options: [
          { en: "John Steinbeck", es: "John Steinbeck", de: "John Steinbeck", nl: "John Steinbeck" },
          { en: "Ernest Hemingway", es: "Ernest Hemingway", de: "Ernest Hemingway", nl: "Ernest Hemingway" },
          { en: "William Faulkner", es: "William Faulkner", de: "William Faulkner", nl: "William Faulkner" },
          { en: "F. Scott Fitzgerald", es: "F. Scott Fitzgerald", de: "F. Scott Fitzgerald", nl: "F. Scott Fitzgerald" }
        ],
        correct: 0,
        explanation: {
          en: "John Steinbeck wrote Of Mice and Men in 1937 about migrant ranch workers.",
          es: "John Steinbeck wrote Of Mice and Men in 1937 about migrant ranch workers.",
          de: "John Steinbeck wrote Of Mice and Men in 1937 about migrant ranch workers.",
          nl: "John Steinbeck wrote Of Mice and Men in 1937 about migrant ranch workers."
        }      },
      {
        question: {
          en: "Lord of the Flies is by?",
          es: "Lord of the Flies is by?",
          de: "Lord of the Flies is by?",
          nl: "Lord of the Flies is by?"
        },
        options: [
          { en: "William Golding", es: "William Golding", de: "William Golding", nl: "William Golding" },
          { en: "Joseph Heller", es: "Joseph Heller", de: "Joseph Heller", nl: "Joseph Heller" },
          { en: "Kurt Vonnegut", es: "Kurt Vonnegut", de: "Kurt Vonnegut", nl: "Kurt Vonnegut" },
          { en: "J.D. Salinger", es: "J.D. Salinger", de: "J.D. Salinger", nl: "J.D. Salinger" }
        ],
        correct: 0,
        explanation: {
          en: "William Golding wrote Lord of the Flies in 1954 about boys stranded on island.",
          es: "William Golding wrote Lord of the Flies in 1954 about boys stranded on island.",
          de: "William Golding wrote Lord of the Flies in 1954 about boys stranded on island.",
          nl: "William Golding wrote Lord of the Flies in 1954 about boys stranded on island."
        }      },
      {
        question: {
          en: "Who wrote The Scarlet Letter?",
          es: "Who wrote The Scarlet Letter?",
          de: "Who wrote The Scarlet Letter?",
          nl: "Who wrote The Scarlet Letter?"
        },
        options: [
          { en: "Nathaniel Hawthorne", es: "Nathaniel Hawthorne", de: "Nathaniel Hawthorne", nl: "Nathaniel Hawthorne" },
          { en: "Herman Melville", es: "Herman Melville", de: "Herman Melville", nl: "Herman Melville" },
          { en: "Edgar Allan Poe", es: "Edgar Allan Poe", de: "Edgar Allan Poe", nl: "Edgar Allan Poe" },
          { en: "Henry James", es: "Henry James", de: "Henry James", nl: "Henry James" }
        ],
        correct: 0,
        explanation: {
          en: "Nathaniel Hawthorne wrote The Scarlet Letter in 1850 about adultery in Puritan society.",
          es: "Nathaniel Hawthorne wrote The Scarlet Letter in 1850 about adultery in Puritan society.",
          de: "Nathaniel Hawthorne wrote The Scarlet Letter in 1850 about adultery in Puritan society.",
          nl: "Nathaniel Hawthorne wrote The Scarlet Letter in 1850 about adultery in Puritan society."
        }      },
      {
        question: {
          en: "Animal Farm was written by?",
          es: "Animal Farm was written by?",
          de: "Animal Farm was written by?",
          nl: "Animal Farm was written by?"
        },
        options: [
          { en: "George Orwell", es: "George Orwell", de: "George Orwell", nl: "George Orwell" },
          { en: "Aldous Huxley", es: "Aldous Huxley", de: "Aldous Huxley", nl: "Aldous Huxley" },
          { en: "John Steinbeck", es: "John Steinbeck", de: "John Steinbeck", nl: "John Steinbeck" },
          { en: "Kurt Vonnegut", es: "Kurt Vonnegut", de: "Kurt Vonnegut", nl: "Kurt Vonnegut" }
        ],
        correct: 0,
        explanation: {
          en: "George Orwell wrote Animal Farm in 1945 as allegory about Soviet totalitarianism.",
          es: "George Orwell wrote Animal Farm in 1945 as allegory about Soviet totalitarianism.",
          de: "George Orwell wrote Animal Farm in 1945 as allegory about Soviet totalitarianism.",
          nl: "George Orwell wrote Animal Farm in 1945 as allegory about Soviet totalitarianism."
        }      },
      {
        question: {
          en: "Who is the author of Frankenstein?",
          es: "Who is the author of Frankenstein?",
          de: "Who is the author of Frankenstein?",
          nl: "Who is the author of Frankenstein?"
        },
        options: [
          { en: "Mary Shelley", es: "Mary Shelley", de: "Mary Shelley", nl: "Mary Shelley" },
          { en: "Bram Stoker", es: "Bram Stoker", de: "Bram Stoker", nl: "Bram Stoker" },
          { en: "Edgar Allan Poe", es: "Edgar Allan Poe", de: "Edgar Allan Poe", nl: "Edgar Allan Poe" },
          { en: "H.P. Lovecraft", es: "H.P. Lovecraft", de: "H.P. Lovecraft", nl: "H.P. Lovecraft" }
        ],
        correct: 0,
        explanation: {
          en: "Mary Shelley wrote Frankenstein in 1818 about scientist creating life.",
          es: "Mary Shelley wrote Frankenstein in 1818 about scientist creating life.",
          de: "Mary Shelley wrote Frankenstein in 1818 about scientist creating life.",
          nl: "Mary Shelley wrote Frankenstein in 1818 about scientist creating life."
        }      },
      {
        question: {
          en: "The Picture of Dorian Gray is by?",
          es: "The Picture of Dorian Gray is by?",
          de: "The Picture of Dorian Gray is by?",
          nl: "The Picture of Dorian Gray is by?"
        },
        options: [
          { en: "Oscar Wilde", es: "Oscar Wilde", de: "Oscar Wilde", nl: "Oscar Wilde" },
          { en: "Robert Louis Stevenson", es: "Robert Louis Stevenson", de: "Robert Louis Stevenson", nl: "Robert Louis Stevenson" },
          { en: "Bram Stoker", es: "Bram Stoker", de: "Bram Stoker", nl: "Bram Stoker" },
          { en: "H.G. Wells", es: "H.G. Wells", de: "H.G. Wells", nl: "H.G. Wells" }
        ],
        correct: 0,
        explanation: {
          en: "Oscar Wilde wrote The Picture of Dorian Gray in 1890 about eternal youth.",
          es: "Oscar Wilde wrote The Picture of Dorian Gray in 1890 about eternal youth.",
          de: "Oscar Wilde wrote The Picture of Dorian Gray in 1890 about eternal youth.",
          nl: "Oscar Wilde wrote The Picture of Dorian Gray in 1890 about eternal youth."
        }      },
      {
        question: {
          en: "Who wrote Catch-22?",
          es: "Who wrote Catch-22?",
          de: "Who wrote Catch-22?",
          nl: "Who wrote Catch-22?"
        },
        options: [
          { en: "Joseph Heller", es: "Joseph Heller", de: "Joseph Heller", nl: "Joseph Heller" },
          { en: "Kurt Vonnegut", es: "Kurt Vonnegut", de: "Kurt Vonnegut", nl: "Kurt Vonnegut" },
          { en: "Norman Mailer", es: "Norman Mailer", de: "Norman Mailer", nl: "Norman Mailer" },
          { en: "Ken Kesey", es: "Ken Kesey", de: "Ken Kesey", nl: "Ken Kesey" }
        ],
        correct: 0,
        explanation: {
          en: "Joseph Heller wrote Catch-22 in 1961 satirizing military bureaucracy.",
          es: "Joseph Heller wrote Catch-22 in 1961 satirizing military bureaucracy.",
          de: "Joseph Heller wrote Catch-22 in 1961 satirizing military bureaucracy.",
          nl: "Joseph Heller wrote Catch-22 in 1961 satirizing military bureaucracy."
        }      },
      {
        question: {
          en: "The Adventures of Huckleberry Finn is by?",
          es: "The Adventures of Huckleberry Finn is by?",
          de: "The Adventures of Huckleberry Finn is by?",
          nl: "The Adventures of Huckleberry Finn is by?"
        },
        options: [
          { en: "Mark Twain", es: "Mark Twain", de: "Mark Twain", nl: "Mark Twain" },
          { en: "Louisa May Alcott", es: "Louisa May Alcott", de: "Louisa May Alcott", nl: "Louisa May Alcott" },
          { en: "Jack London", es: "Jack London", de: "Jack London", nl: "Jack London" },
          { en: "Nathaniel Hawthorne", es: "Nathaniel Hawthorne", de: "Nathaniel Hawthorne", nl: "Nathaniel Hawthorne" }
        ],
        correct: 0,
        explanation: {
          en: "Mark Twain wrote Adventures of Huckleberry Finn in 1884.",
          es: "Mark Twain wrote Adventures of Huckleberry Finn in 1884.",
          de: "Mark Twain wrote Adventures of Huckleberry Finn in 1884.",
          nl: "Mark Twain wrote Adventures of Huckleberry Finn in 1884."
        }      },
      {
        question: {
          en: "Who wrote Les Miserables?",
          es: "Who wrote Les Miserables?",
          de: "Who wrote Les Miserables?",
          nl: "Who wrote Les Miserables?"
        },
        options: [
          { en: "Victor Hugo", es: "Victor Hugo", de: "Victor Hugo", nl: "Victor Hugo" },
          { en: "Alexandre Dumas", es: "Alexandre Dumas", de: "Alexandre Dumas", nl: "Alexandre Dumas" },
          { en: "Gustave Flaubert", es: "Gustave Flaubert", de: "Gustave Flaubert", nl: "Gustave Flaubert" },
          { en: "Honore de Balzac", es: "Honore de Balzac", de: "Honore de Balzac", nl: "Honore de Balzac" }
        ],
        correct: 0,
        explanation: {
          en: "Victor Hugo wrote Les Miserables in 1862 about Jean Valjean.",
          es: "Victor Hugo wrote Les Miserables in 1862 about Jean Valjean.",
          de: "Victor Hugo wrote Les Miserables in 1862 about Jean Valjean.",
          nl: "Victor Hugo wrote Les Miserables in 1862 about Jean Valjean."
        }      },
      {
        question: {
          en: "War and Peace is by?",
          es: "War and Peace is by?",
          de: "War and Peace is by?",
          nl: "War and Peace is by?"
        },
        options: [
          { en: "Leo Tolstoy", es: "Leo Tolstoy", de: "Leo Tolstoy", nl: "Leo Tolstoy" },
          { en: "Fyodor Dostoevsky", es: "Fyodor Dostoevsky", de: "Fyodor Dostoevsky", nl: "Fyodor Dostoevsky" },
          { en: "Anton Chekhov", es: "Anton Chekhov", de: "Anton Chekhov", nl: "Anton Chekhov" },
          { en: "Ivan Turgenev", es: "Ivan Turgenev", de: "Ivan Turgenev", nl: "Ivan Turgenev" }
        ],
        correct: 0,
        explanation: {
          en: "Leo Tolstoy wrote War and Peace in 1869 about Napoleonic Wars.",
          es: "Leo Tolstoy wrote War and Peace in 1869 about Napoleonic Wars.",
          de: "Leo Tolstoy wrote War and Peace in 1869 about Napoleonic Wars.",
          nl: "Leo Tolstoy wrote War and Peace in 1869 about Napoleonic Wars."
        }      },
      {
        question: {
          en: "Who wrote The Grapes of Wrath?",
          es: "Who wrote The Grapes of Wrath?",
          de: "Who wrote The Grapes of Wrath?",
          nl: "Who wrote The Grapes of Wrath?"
        },
        options: [
          { en: "John Steinbeck", es: "John Steinbeck", de: "John Steinbeck", nl: "John Steinbeck" },
          { en: "Ernest Hemingway", es: "Ernest Hemingway", de: "Ernest Hemingway", nl: "Ernest Hemingway" },
          { en: "William Faulkner", es: "William Faulkner", de: "William Faulkner", nl: "William Faulkner" },
          { en: "Sinclair Lewis", es: "Sinclair Lewis", de: "Sinclair Lewis", nl: "Sinclair Lewis" }
        ],
        correct: 0,
        explanation: {
          en: "John Steinbeck wrote The Grapes of Wrath in 1939 about Dust Bowl migration.",
          es: "John Steinbeck wrote The Grapes of Wrath in 1939 about Dust Bowl migration.",
          de: "John Steinbeck wrote The Grapes of Wrath in 1939 about Dust Bowl migration.",
          nl: "John Steinbeck wrote The Grapes of Wrath in 1939 about Dust Bowl migration."
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
})();