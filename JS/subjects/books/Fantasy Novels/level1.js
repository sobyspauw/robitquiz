// Quiz Template - Level 1: Boeken - Fantasy romans
(function() {
  const level1 = {
    name: {
      en: "Fantasy Novels - Beginner",
      es: "Novelas de Fantasía - Principiante",
      de: "Fantasy Romane - Anfänger",
      nl: "Fantasy romans - Beginner"
    },
    questions: [
      {
        question: {
          en: "Who wrote 'The Lord of the Rings' trilogy?",
          es: "¿Quién escribió la trilogía 'El Señor de los Anillos'?",
          de: "Wer schrieb die 'Herr der Ringe' Trilogie?",
          nl: "Wie schreef de 'In de Ban van de Ring' trilogie?"
        },
        options: [
          { en: "J.R.R. Tolkien", es: "J.R.R. Tolkien", de: "J.R.R. Tolkien", nl: "J.R.R. Tolkien" },
          { en: "C.S. Lewis", es: "C.S. Lewis", de: "C.S. Lewis", nl: "C.S. Lewis" },
          { en: "George R.R. Martin", es: "George R.R. Martin", de: "George R.R. Martin", nl: "George R.R. Martin" },
          { en: "Terry Pratchett", es: "Terry Pratchett", de: "Terry Pratchett", nl: "Terry Pratchett" }
        ],
        correct: 0,
        explanation: {
          en: "J.R.R. Tolkien wrote 'The Lord of the Rings' trilogy, consisting of 'The Fellowship of the Ring', 'The Two Towers', and 'The Return of the King'. It's considered one of the greatest fantasy works ever written.",
          es: "J.R.R. Tolkien escribió la trilogía 'El Señor de los Anillos', que consiste en 'La Comunidad del Anillo', 'Las Dos Torres' y 'El Retorno del Rey'. Se considera una de las obras de fantasía más grandes jamás escritas.",
          de: "J.R.R. Tolkien schrieb die 'Herr der Ringe' Trilogie, bestehend aus 'Die Gefährten', 'Die Zwei Türme' und 'Die Rückkehr des Königs'. Sie gilt als eines der größten Fantasy-Werke aller Zeiten.",
          nl: "J.R.R. Tolkien schreef de 'In de Ban van de Ring' trilogie, bestaande uit 'De Reisgenoten', 'De Twee Torens' en 'De Terugkeer van de Koning'. Het wordt beschouwd als een van de grootste fantasy-werken ooit geschreven."
        }
      },
      {
        question: {
          en: "What is the name of Harry Potter's school?",
          es: "¿Cómo se llama la escuela de Harry Potter?",
          de: "Wie heißt Harry Potters Schule?",
          nl: "Hoe heet Harry Potter's school?"
        },
        options: [
          { en: "Beauxbatons", es: "Beauxbatons", de: "Beauxbatons", nl: "Beauxbatons" },
          { en: "Durmstrang", es: "Durmstrang", de: "Durmstrang", nl: "Durmstrang" },
          { en: "Hogwarts", es: "Hogwarts", de: "Hogwarts", nl: "Hogwarts" },
          { en: "Ilvermorny", es: "Ilvermorny", de: "Ilvermorny", nl: "Ilvermorny" }
        ],
        correct: 2,
        explanation: {
          en: "Hogwarts School of Witchcraft and Wizardry is the magical school attended by Harry Potter and his friends in J.K. Rowling's famous series.",
          es: "El Colegio Hogwarts de Magia y Hechicería es la escuela mágica a la que asisten Harry Potter y sus amigos en la famosa serie de J.K. Rowling.",
          de: "Hogwarts-Schule für Hexerei und Zauberei ist die magische Schule, die Harry Potter und seine Freunde in J.K. Rowlings berühmter Serie besuchen.",
          nl: "Zweinsteins Hogeschool voor Hekserij en Hocus-Pocus is de magische school die Harry Potter en zijn vrienden bezoeken in J.K. Rowling's beroemde serie."
        }
      },
      {
        question: {
          en: "Who created the fantasy world of Narnia?",
          es: "¿Quién creó el mundo de fantasía de Narnia?",
          de: "Wer erschuf die Fantasy-Welt Narnia?",
          nl: "Wie creëerde de fantasy-wereld Narnia?"
        },
        options: [
          { en: "J.R.R. Tolkien", es: "J.R.R. Tolkien", de: "J.R.R. Tolkien", nl: "J.R.R. Tolkien" },
          { en: "C.S. Lewis", es: "C.S. Lewis", de: "C.S. Lewis", nl: "C.S. Lewis" },
          { en: "Philip Pullman", es: "Philip Pullman", de: "Philip Pullman", nl: "Philip Pullman" },
          { en: "Ursula K. Le Guin", es: "Ursula K. Le Guin", de: "Ursula K. Le Guin", nl: "Ursula K. Le Guin" }
        ],
        correct: 1,
        explanation: {
          en: "C.S. Lewis created the magical world of Narnia in 'The Chronicles of Narnia' series, beginning with 'The Lion, the Witch and the Wardrobe' in 1950.",
          es: "C.S. Lewis creó el mundo mágico de Narnia en la serie 'Las Crónicas de Narnia', comenzando con 'El León, la Bruja y el Ropero' en 1950.",
          de: "C.S. Lewis erschuf die magische Welt Narnia in der Serie 'Die Chroniken von Narnia', beginnend mit 'Der König von Narnia' im Jahr 1950.",
          nl: "C.S. Lewis creëerde de magische wereld van Narnia in de serie 'De Kronieken van Narnia', beginnend met 'De Leeuw, de Heks en de Kleerkast' in 1950."
        }
      },
      {
        question: {
          en: "What is the first book in 'A Song of Ice and Fire' series?",
          es: "¿Cuál es el primer libro de la serie 'Canción de Hielo y Fuego'?",
          de: "Was ist das erste Buch in der 'Das Lied von Eis und Feuer' Serie?",
          nl: "Wat is het eerste boek in de 'Het Lied van IJs en Vuur' serie?"
        },
        options: [
          { en: "A Clash of Kings", es: "Choque de Reyes", de: "Die Saat des goldenen Löwen", nl: "De Strijd der Koningen" },
          { en: "A Game of Thrones", es: "Juego de Tronos", de: "Die Herren von Winterfell", nl: "De Strijd om de Troon" },
          { en: "A Storm of Swords", es: "Tormenta de Espadas", de: "Der Thron der Sieben Königreiche", nl: "Een Storm van Zwaarden" },
          { en: "A Feast for Crows", es: "Festín de Cuervos", de: "Zeit der Krähen", nl: "Een Feestmaal voor Kraaien" }
        ],
        correct: 1,
        explanation: {
          en: "'A Game of Thrones' (1996) is the first book in George R.R. Martin's epic fantasy series 'A Song of Ice and Fire', which inspired the HBO series 'Game of Thrones'.",
          es: "'Juego de Tronos' (1996) es el primer libro de la serie de fantasía épica de George R.R. Martin 'Canción de Hielo y Fuego', que inspiró la serie de HBO 'Juego de Tronos'.",
          de: "'Die Herren von Winterfell' (1996) ist das erste Buch in George R.R. Martins epischer Fantasy-Serie 'Das Lied von Eis und Feuer', die die HBO-Serie 'Game of Thrones' inspirierte.",
          nl: "'De Strijd om de Troon' (1996) is het eerste boek in George R.R. Martin's epische fantasy-serie 'Het Lied van IJs en Vuur', die de HBO-serie 'Game of Thrones' inspireerde."
        }
      },
      {
        question: {
          en: "Who wrote 'The Name of the Wind'?",
          es: "¿Quién escribió 'El Nombre del Viento'?",
          de: "Wer schrieb 'Der Name des Windes'?",
          nl: "Wie schreef 'De Naam van de Wind'?"
        },
        options: [
          { en: "Brandon Sanderson", es: "Brandon Sanderson", de: "Brandon Sanderson", nl: "Brandon Sanderson" },
          { en: "Patrick Rothfuss", es: "Patrick Rothfuss", de: "Patrick Rothfuss", nl: "Patrick Rothfuss" },
          { en: "Robin Hobb", es: "Robin Hobb", de: "Robin Hobb", nl: "Robin Hobb" },
          { en: "Joe Abercrombie", es: "Joe Abercrombie", de: "Joe Abercrombie", nl: "Joe Abercrombie" }
        ],
        correct: 1,
        explanation: {
          en: "Patrick Rothfuss wrote 'The Name of the Wind' (2007), the first book in 'The Kingkiller Chronicle' series, telling the story of Kvothe, a legendary figure.",
          es: "Patrick Rothfuss escribió 'El Nombre del Viento' (2007), el primer libro de la serie 'Crónica del Asesino de Reyes', contando la historia de Kvothe, una figura legendaria.",
          de: "Patrick Rothfuss schrieb 'Der Name des Windes' (2007), das erste Buch der 'Königsmörder-Chronik' Serie, die die Geschichte von Kvothe, einer legendären Figur, erzählt.",
          nl: "Patrick Rothfuss schreef 'De Naam van de Wind' (2007), het eerste boek in 'De Koningsdoder Kronieken' serie, dat het verhaal vertelt van Kvothe, een legendarische figuur."
        }
      },
      {
        question: {
          en: "What is the name of the dragon in 'The Hobbit'?",
          es: "¿Cómo se llama el dragón en 'El Hobbit'?",
          de: "Wie heißt der Drache in 'Der Hobbit'?",
          nl: "Hoe heet de draak in 'De Hobbit'?"
        },
        options: [
          { en: "Glaurung", es: "Glaurung", de: "Glaurung", nl: "Glaurung" },
          { en: "Ancalagon", es: "Ancalagon", de: "Ancalagon", nl: "Ancalagon" },
          { en: "Smaug", es: "Smaug", de: "Smaug", nl: "Smaug" },
          { en: "Scatha", es: "Scatha", de: "Scatha", nl: "Scatha" }
        ],
        correct: 2,
        explanation: {
          en: "Smaug the Magnificent is the dragon who guards the Lonely Mountain and its treasure in Tolkien's 'The Hobbit'. He is known as 'Smaug the Chiefest and Greatest of Calamities'.",
          es: "Smaug el Magnífico es el dragón que guarda la Montaña Solitaria y su tesoro en 'El Hobbit' de Tolkien. Es conocido como 'Smaug el Principal y Mayor de las Calamidades'.",
          de: "Smaug der Prächtige ist der Drache, der den Einsamen Berg und seinen Schatz in Tolkiens 'Der Hobbit' bewacht. Er ist bekannt als 'Smaug, das Oberste und Größte aller Übel'.",
          nl: "Smaug de Magnifieke is de draak die de Eenzame Berg en zijn schat bewaakt in Tolkien's 'De Hobbit'. Hij staat bekend als 'Smaug de Voornaamste en Grootste der Rampen'."
        }
      },
      {
        question: {
          en: "Who wrote 'The Dark Tower' series?",
          es: "¿Quién escribió la serie 'La Torre Oscura'?",
          de: "Wer schrieb die 'Der Dunkle Turm' Serie?",
          nl: "Wie schreef de 'De Donkere Toren' serie?"
        },
        options: [
          { en: "Stephen King", es: "Stephen King", de: "Stephen King", nl: "Stephen King" },
          { en: "Neil Gaiman", es: "Neil Gaiman", de: "Neil Gaiman", nl: "Neil Gaiman" },
          { en: "Terry Pratchett", es: "Terry Pratchett", de: "Terry Pratchett", nl: "Terry Pratchett" },
          { en: "Clive Barker", es: "Clive Barker", de: "Clive Barker", nl: "Clive Barker" }
        ],
        correct: 0,
        explanation: {
          en: "Stephen King wrote 'The Dark Tower' series, an eight-book fantasy series that blends elements of science fiction, horror, and western genres, following gunslinger Roland Deschain.",
          es: "Stephen King escribió la serie 'La Torre Oscura', una serie de fantasía de ocho libros que mezcla elementos de ciencia ficción, horror y géneros occidentales, siguiendo al pistolero Roland Deschain.",
          de: "Stephen King schrieb die 'Der Dunkle Turm' Serie, eine achtteilige Fantasy-Serie, die Elemente aus Science Fiction, Horror und Western-Genres vermischt und dem Revolverhelden Roland Deschain folgt.",
          nl: "Stephen King schreef 'De Donkere Toren' serie, een acht-boeken fantasy serie die elementen van science fiction, horror en western genres mengt, volgend revolverheld Roland Deschain."
        }
      },
      {
        question: {
          en: "What is the first book in Terry Pratchett's Discworld series?",
          es: "¿Cuál es el primer libro de la serie Mundodisco de Terry Pratchett?",
          de: "Was ist das erste Buch in Terry Pratchetts Scheibenwelt-Serie?",
          nl: "Wat is het eerste boek in Terry Pratchett's Schijfwereld serie?"
        },
        options: [
          { en: "The Light Fantastic", es: "La Luz Fantástica", de: "Das Licht der Fantasie", nl: "Het Fantastische Licht" },
          { en: "The Colour of Magic", es: "El Color de la Magia", de: "Die Farbe der Magie", nl: "De Kleur van Toverij" },
          { en: "Equal Rites", es: "Ritos Iguales", de: "Gleichberechtigung", nl: "Gelijke Riten" },
          { en: "Mort", es: "Mort", de: "Mort", nl: "Dood" }
        ],
        correct: 1,
        explanation: {
          en: "'The Colour of Magic' (1983) is the first book in Terry Pratchett's Discworld series, introducing the incompetent wizard Rincewind and the naive tourist Twoflower.",
          es: "'El Color de la Magia' (1983) es el primer libro de la serie Mundodisco de Terry Pratchett, presentando al mago incompetente Rincewind y al turista ingenuo Twoflower.",
          de: "'Die Farbe der Magie' (1983) ist das erste Buch in Terry Pratchetts Scheibenwelt-Serie und stellt den unfähigen Zauberer Rincewind und den naiven Touristen Twoflower vor.",
          nl: "'De Kleur van Toverij' (1983) is het eerste boek in Terry Pratchett's Schijfwereld serie, waarin de incompetente tovenaar Rincewind en de naïeve toerist Twoflower worden geïntroduceerd."
        }
      },
      {
        question: {
          en: "Who wrote 'The Earthsea Cycle'?",
          es: "¿Quién escribió 'El Ciclo de Terramar'?",
          de: "Wer schrieb den 'Erdsee-Zyklus'?",
          nl: "Wie schreef 'De Aardzee Cyclus'?"
        },
        options: [
          { en: "Ursula K. Le Guin", es: "Ursula K. Le Guin", de: "Ursula K. Le Guin", nl: "Ursula K. Le Guin" },
          { en: "Marion Zimmer Bradley", es: "Marion Zimmer Bradley", de: "Marion Zimmer Bradley", nl: "Marion Zimmer Bradley" },
          { en: "Anne McCaffrey", es: "Anne McCaffrey", de: "Anne McCaffrey", nl: "Anne McCaffrey" },
          { en: "Andre Norton", es: "Andre Norton", de: "Andre Norton", nl: "Andre Norton" }
        ],
        correct: 0,
        explanation: {
          en: "Ursula K. Le Guin wrote 'The Earthsea Cycle', beginning with 'A Wizard of Earthsea' (1968). The series follows the wizard Ged in a world of islands and magic.",
          es: "Ursula K. Le Guin escribió 'El Ciclo de Terramar', comenzando con 'Un Mago de Terramar' (1968). La serie sigue al mago Ged en un mundo de islas y magia.",
          de: "Ursula K. Le Guin schrieb den 'Erdsee-Zyklus', beginnend mit 'Der Magier der Erdsee' (1968). Die Serie folgt dem Zauberer Ged in einer Welt aus Inseln und Magie.",
          nl: "Ursula K. Le Guin schreef 'De Aardzee Cyclus', beginnend met 'Een Tovenaar van Aardzee' (1968). De serie volgt de tovenaar Ged in een wereld van eilanden en magie."
        }
      },
      {
        question: {
          en: "What is the name of Gandalf's horse in 'The Lord of the Rings'?",
          es: "¿Cómo se llama el caballo de Gandalf en 'El Señor de los Anillos'?",
          de: "Wie heißt Gandalfs Pferd in 'Der Herr der Ringe'?",
          nl: "Hoe heet Gandalf's paard in 'In de Ban van de Ring'?"
        },
        options: [
          { en: "Roheryn", es: "Roheryn", de: "Roheryn", nl: "Roheryn" },
          { en: "Shadowfax", es: "Sombragrís", de: "Schattenfell", nl: "Schaduwvacht" },
          { en: "Brego", es: "Brego", de: "Brego", nl: "Brego" },
          { en: "Snowmane", es: "Crinblanca", de: "Schneemähne", nl: "Sneeuwmaan" }
        ],
        correct: 1,
        explanation: {
          en: "Shadowfax is Gandalf's horse, known as the 'Lord of all horses' and the greatest of the Mearas, a breed of horses in Middle-earth that can understand human speech.",
          es: "Sombragrís es el caballo de Gandalf, conocido como el 'Señor de todos los caballos' y el más grande de los Mearas, una raza de caballos en la Tierra Media que puede entender el habla humana.",
          de: "Schattenfell ist Gandalfs Pferd, bekannt als der 'Herr aller Pferde' und der größte der Mearas, eine Pferderasse in Mittelerde, die menschliche Sprache verstehen kann.",
          nl: "Schaduwvacht is Gandalf's paard, bekend als de 'Heer van alle paarden' en de grootste van de Mearas, een paardenras in Midden-aarde dat menselijke spraak kan begrijpen."
        }
      },
      {
        question: {
          en: "Who wrote 'The Chronicles of Amber'?",
          es: "¿Quién escribió 'Las Crónicas de Ámbar'?",
          de: "Wer schrieb 'Die Chroniken von Amber'?",
          nl: "Wie schreef 'De Kronieken van Amber'?"
        },
        options: [
          { en: "Roger Zelazny", es: "Roger Zelazny", de: "Roger Zelazny", nl: "Roger Zelazny" },
          { en: "Michael Moorcock", es: "Michael Moorcock", de: "Michael Moorcock", nl: "Michael Moorcock" },
          { en: "Poul Anderson", es: "Poul Anderson", de: "Poul Anderson", nl: "Poul Anderson" },
          { en: "Gene Wolfe", es: "Gene Wolfe", de: "Gene Wolfe", nl: "Gene Wolfe" }
        ],
        correct: 0,
        explanation: {
          en: "Roger Zelazny wrote 'The Chronicles of Amber', a series about Prince Corwin and the magical realm of Amber, beginning with 'Nine Princes in Amber' (1970).",
          es: "Roger Zelazny escribió 'Las Crónicas de Ámbar', una serie sobre el Príncipe Corwin y el reino mágico de Ámbar, comenzando con 'Nueve Príncipes en Ámbar' (1970).",
          de: "Roger Zelazny schrieb 'Die Chroniken von Amber', eine Serie über Prinz Corwin und das magische Reich Amber, beginnend mit 'Neun Prinzen von Amber' (1970).",
          nl: "Roger Zelazny schreef 'De Kronieken van Amber', een serie over Prins Corwin en het magische rijk Amber, beginnend met 'Negen Prinsen in Amber' (1970)."
        }
      },
      {
        question: {
          en: "What magical object allows travel between worlds in 'The Lion, the Witch and the Wardrobe'?",
          es: "¿Qué objeto mágico permite viajar entre mundos en 'El León, la Bruja y el Ropero'?",
          de: "Welcher magische Gegenstand ermöglicht Reisen zwischen Welten in 'Der König von Narnia'?",
          nl: "Welk magisch voorwerp maakt reizen tussen werelden mogelijk in 'De Leeuw, de Heks en de Kleerkast'?"
        },
        options: [
          { en: "A magic ring", es: "Un anillo mágico", de: "Ein magischer Ring", nl: "Een magische ring" },
          { en: "A wardrobe", es: "Un ropero", de: "Ein Kleiderschrank", nl: "Een kleerkast" },
          { en: "A painting", es: "Una pintura", de: "Ein Gemälde", nl: "Een schilderij" },
          { en: "A mirror", es: "Un espejo", de: "Ein Spiegel", nl: "Een spiegel" }
        ],
        correct: 1,
        explanation: {
          en: "The wardrobe serves as the magical portal that allows the Pevensie children to travel from their world to Narnia in C.S. Lewis's classic tale.",
          es: "El ropero sirve como el portal mágico que permite a los niños Pevensie viajar desde su mundo a Narnia en el cuento clásico de C.S. Lewis.",
          de: "Der Kleiderschrank dient als magisches Portal, das den Pevensie-Kindern ermöglicht, von ihrer Welt nach Narnia zu reisen in C.S. Lewis' klassischer Erzählung.",
          nl: "De kleerkast dient als het magische portaal dat de Pevensie kinderen toestaat om van hun wereld naar Narnia te reizen in C.S. Lewis' klassieke verhaal."
        }
      },
      {
        question: {
          en: "Who wrote 'The Wheel of Time' series?",
          es: "¿Quién escribió la serie 'La Rueda del Tiempo'?",
          de: "Wer schrieb die 'Das Rad der Zeit' Serie?",
          nl: "Wie schreef de 'Het Rad des Tijds' serie?"
        },
        options: [
          { en: "Robert Jordan", es: "Robert Jordan", de: "Robert Jordan", nl: "Robert Jordan" },
          { en: "Terry Goodkind", es: "Terry Goodkind", de: "Terry Goodkind", nl: "Terry Goodkind" },
          { en: "Raymond E. Feist", es: "Raymond E. Feist", de: "Raymond E. Feist", nl: "Raymond E. Feist" },
          { en: "David Eddings", es: "David Eddings", de: "David Eddings", nl: "David Eddings" }
        ],
        correct: 0,
        explanation: {
          en: "Robert Jordan wrote 'The Wheel of Time' series, a massive 14-book epic fantasy series. After Jordan's death, Brandon Sanderson completed the final three books.",
          es: "Robert Jordan escribió la serie 'La Rueda del Tiempo', una serie épica de fantasía masiva de 14 libros. Después de la muerte de Jordan, Brandon Sanderson completó los últimos tres libros.",
          de: "Robert Jordan schrieb die 'Das Rad der Zeit' Serie, eine massive 14-bändige epische Fantasy-Serie. Nach Jordans Tod vollendete Brandon Sanderson die letzten drei Bücher.",
          nl: "Robert Jordan schreef 'Het Rad des Tijds' serie, een massieve 14-boeken epische fantasy serie. Na Jordan's dood voltooide Brandon Sanderson de laatste drie boeken."
        }
      },
      {
        question: {
          en: "What is the name of the magical school in 'The Magicians' by Lev Grossman?",
          es: "¿Cómo se llama la escuela mágica en 'Los Magos' de Lev Grossman?",
          de: "Wie heißt die magische Schule in 'Die Magier' von Lev Grossman?",
          nl: "Hoe heet de magische school in 'De Magiërs' van Lev Grossman?"
        },
        options: [
          { en: "Brakebills", es: "Brakebills", de: "Brakebills", nl: "Brakebills" },
          { en: "Blackbriar", es: "Blackbriar", de: "Blackbriar", nl: "Blackbriar" },
          { en: "Bramblewood", es: "Bramblewood", de: "Bramblewood", nl: "Bramblewood" },
          { en: "Brightwater", es: "Brightwater", de: "Brightwater", nl: "Brightwater" }
        ],
        correct: 0,
        explanation: {
          en: "Brakebills College for Magical Pedagogy is the secret magical university in Lev Grossman's 'The Magicians' trilogy, often called the 'adult Harry Potter'.",
          es: "El Colegio Brakebills de Pedagogía Mágica es la universidad mágica secreta en la trilogía 'Los Magos' de Lev Grossman, a menudo llamada el 'Harry Potter para adultos'.",
          de: "Brakebills College für Magische Pädagogik ist die geheime magische Universität in Lev Grossmans 'Die Magier' Trilogie, oft als 'erwachsener Harry Potter' bezeichnet.",
          nl: "Brakebills College voor Magische Pedagogie is de geheime magische universiteit in Lev Grossman's 'De Magiërs' trilogie, vaak het 'volwassen Harry Potter' genoemd."
        }
      },
      {
        question: {
          en: "Who wrote 'The Book of the New Sun'?",
          es: "¿Quién escribió 'El Libro del Nuevo Sol'?",
          de: "Wer schrieb 'Das Buch der Neuen Sonne'?",
          nl: "Wie schreef 'Het Boek van de Nieuwe Zon'?"
        },
        options: [
          { en: "Gene Wolfe", es: "Gene Wolfe", de: "Gene Wolfe", nl: "Gene Wolfe" },
          { en: "Jack Vance", es: "Jack Vance", de: "Jack Vance", nl: "Jack Vance" },
          { en: "Robert E. Howard", es: "Robert E. Howard", de: "Robert E. Howard", nl: "Robert E. Howard" },
          { en: "Fritz Leiber", es: "Fritz Leiber", de: "Fritz Leiber", nl: "Fritz Leiber" }
        ],
        correct: 0,
        explanation: {
          en: "Gene Wolfe wrote 'The Book of the New Sun', a four-volume science fantasy series following Severian, a torturer turned wanderer in a dying Earth's far future.",
          es: "Gene Wolfe escribió 'El Libro del Nuevo Sol', una serie de ciencia ficción fantástica de cuatro volúmenes que sigue a Severian, un torturador convertido en vagabundo en el futuro lejano de una Tierra moribunda.",
          de: "Gene Wolfe schrieb 'Das Buch der Neuen Sonne', eine vierbändige Science-Fantasy-Serie über Severian, einen Folterer, der zum Wanderer wird in der fernen Zukunft einer sterbenden Erde.",
          nl: "Gene Wolfe schreef 'Het Boek van de Nieuwe Zon', een vier-delige science fantasy serie die Severian volgt, een beul die een zwerver wordt in de verre toekomst van een stervende Aarde."
        }
      },
      {
        question: {
          en: "What is the name of the one ring in Tolkien's Middle-earth?",
          es: "¿Cómo se llama el anillo único en la Tierra Media de Tolkien?",
          de: "Wie heißt der eine Ring in Tolkiens Mittelerde?",
          nl: "Hoe heet de ene ring in Tolkien's Midden-aarde?"
        },
        options: [
          { en: "The Ring of Power", es: "El Anillo del Poder", de: "Der Ring der Macht", nl: "De Ring van Macht" },
          { en: "The One Ring", es: "El Anillo Único", de: "Der Eine Ring", nl: "De Ene Ring" },
          { en: "The Master Ring", es: "El Anillo Maestro", de: "Der Meisterring", nl: "De Meester Ring" },
          { en: "The Ruling Ring", es: "El Anillo Gobernante", de: "Der Herrscherring", nl: "De Heersende Ring" }
        ],
        correct: 1,
        explanation: {
          en: "The One Ring is the master ring created by the Dark Lord Sauron to control all other Rings of Power. It is also known as the Ruling Ring or the Ring of Power.",
          es: "El Anillo Único es el anillo maestro creado por el Señor Oscuro Sauron para controlar todos los otros Anillos de Poder. También es conocido como el Anillo Gobernante o el Anillo del Poder.",
          de: "Der Eine Ring ist der Meisterring, geschaffen vom Dunklen Herrscher Sauron, um alle anderen Ringe der Macht zu kontrollieren. Er ist auch als Herrscherring oder Ring der Macht bekannt.",
          nl: "De Ene Ring is de meester ring gecreëerd door de Donkere Heer Sauron om alle andere Ringen van Macht te controleren. Hij staat ook bekend als de Heersende Ring of de Ring van Macht."
        }
      },
      {
        question: {
          en: "Who wrote 'The Poppy War' trilogy?",
          es: "¿Quién escribió la trilogía 'La Guerra de la Amapola'?",
          de: "Wer schrieb die 'Der Mohnkrieg' Trilogie?",
          nl: "Wie schreef de 'De Papaver Oorlog' trilogie?"
        },
        options: [
          { en: "Liu Cixin", es: "Liu Cixin", de: "Liu Cixin", nl: "Liu Cixin" },
          { en: "R.F. Kuang", es: "R.F. Kuang", de: "R.F. Kuang", nl: "R.F. Kuang" },
          { en: "Ken Liu", es: "Ken Liu", de: "Ken Liu", nl: "Ken Liu" },
          { en: "Silvia Moreno-Garcia", es: "Silvia Moreno-Garcia", de: "Silvia Moreno-Garcia", nl: "Silvia Moreno-Garcia" }
        ],
        correct: 1,
        explanation: {
          en: "R.F. Kuang wrote 'The Poppy War' trilogy, a grimdark fantasy series inspired by 20th-century Chinese history, beginning with 'The Poppy War' (2018).",
          es: "R.F. Kuang escribió la trilogía 'La Guerra de la Amapola', una serie de fantasía grimdark inspirada en la historia china del siglo XX, comenzando con 'La Guerra de la Amapola' (2018).",
          de: "R.F. Kuang schrieb die 'Der Mohnkrieg' Trilogie, eine Grimdark-Fantasy-Serie inspiriert von der chinesischen Geschichte des 20. Jahrhunderts, beginnend mit 'Der Mohnkrieg' (2018).",
          nl: "R.F. Kuang schreef 'De Papaver Oorlog' trilogie, een grimdark fantasy serie geïnspireerd door 20e-eeuwse Chinese geschiedenis, beginnend met 'De Papaver Oorlog' (2018)."
        }
      },
      {
        question: {
          en: "What is the magical world called in Philip Pullman's 'His Dark Materials'?",
          es: "¿Cómo se llama el mundo mágico en 'La Materia Oscura' de Philip Pullman?",
          de: "Wie heißt die magische Welt in Philip Pullmans 'Der Goldene Kompass'?",
          nl: "Hoe heet de magische wereld in Philip Pullman's 'Het Noorderlicht'?"
        },
        options: [
          { en: "Multiple parallel universes", es: "Múltiples universos paralelos", de: "Mehrere Paralleluniversen", nl: "Meerdere parallelle universums" },
          { en: "The Dark Realm", es: "El Reino Oscuro", de: "Das Dunkle Reich", nl: "Het Donkere Rijk" },
          { en: "The Spirit World", es: "El Mundo Espiritual", de: "Die Geisterwelt", nl: "De Geestenwereld" },
          { en: "The Shadow Lands", es: "Las Tierras de Sombra", de: "Die Schattenlande", nl: "De Schaduwlanden" }
        ],
        correct: 0,
        explanation: {
          en: "'His Dark Materials' features multiple parallel universes connected by subtle knife cuts, with characters traveling between different worlds including Lyra's Oxford and Will's contemporary world.",
          es: "'La Materia Oscura' presenta múltiples universos paralelos conectados por cortes de cuchillo sutil, con personajes viajando entre diferentes mundos incluyendo el Oxford de Lyra y el mundo contemporáneo de Will.",
          de: "'Der Goldene Kompass' zeigt mehrere Paralleluniversen, die durch subtile Messerschnitte verbunden sind, mit Charakteren, die zwischen verschiedenen Welten reisen, einschließlich Lyras Oxford und Wills zeitgenössischer Welt.",
          nl: "'Het Noorderlicht' toont meerdere parallelle universums verbonden door subtiele messneden, met personages die reizen tussen verschillende werelden waaronder Lyra's Oxford en Will's hedendaagse wereld."
        }
      },
      {
        question: {
          en: "Who wrote 'The First Law' trilogy?",
          es: "¿Quién escribió la trilogía 'La Primera Ley'?",
          de: "Wer schrieb die 'Das Erste Gesetz' Trilogie?",
          nl: "Wie schreef de 'De Eerste Wet' trilogie?"
        },
        options: [
          { en: "Mark Lawrence", es: "Mark Lawrence", de: "Mark Lawrence", nl: "Mark Lawrence" },
          { en: "Joe Abercrombie", es: "Joe Abercrombie", de: "Joe Abercrombie", nl: "Joe Abercrombie" },
          { en: "Scott Lynch", es: "Scott Lynch", de: "Scott Lynch", nl: "Scott Lynch" },
          { en: "Brent Weeks", es: "Brent Weeks", de: "Brent Weeks", nl: "Brent Weeks" }
        ],
        correct: 1,
        explanation: {
          en: "Joe Abercrombie wrote 'The First Law' trilogy, beginning with 'The Blade Itself' (2006). It's known for its gritty, morally ambiguous characters and subversion of fantasy tropes.",
          es: "Joe Abercrombie escribió la trilogía 'La Primera Ley', comenzando con 'La Hoja en Sí' (2006). Es conocida por sus personajes ásperos y moralmente ambiguos y la subversión de los tropos de fantasía.",
          de: "Joe Abercrombie schrieb die 'Das Erste Gesetz' Trilogie, beginnend mit 'Kriegsklingen' (2006). Sie ist bekannt für ihre rauen, moralisch zweideutigen Charaktere und die Subversion von Fantasy-Klischees.",
          nl: "Joe Abercrombie schreef 'De Eerste Wet' trilogie, beginnend met 'Het Lemmet Zelf' (2006). Het staat bekend om zijn ruwe, moreel ambigue personages en subversie van fantasy clichés."
        }
      },
      {
        question: {
          en: "Who wrote 'The Earthsea Cycle', starting with 'A Wizard of Earthsea'?",
          es: "¿Quién escribió 'El Ciclo de Terramar', comenzando con 'Un Mago de Terramar'?",
          de: "Wer schrieb den 'Erdsee-Zyklus', beginnend mit 'Der Zauberer der Erdsee'?",
          nl: "Wie schreef 'De Aardzee Cyclus', beginnend met 'Een Tovenaar van Aardzee'?"
        },
        options: [
          { en: "Ursula K. Le Guin", es: "Ursula K. Le Guin", de: "Ursula K. Le Guin", nl: "Ursula K. Le Guin" },
          { en: "Robin Hobb", es: "Robin Hobb", de: "Robin Hobb", nl: "Robin Hobb" },
          { en: "Anne McCaffrey", es: "Anne McCaffrey", de: "Anne McCaffrey", nl: "Anne McCaffrey" },
          { en: "Patricia A. McKillip", es: "Patricia A. McKillip", de: "Patricia A. McKillip", nl: "Patricia A. McKillip" }
        ],
        correct: 0,
        explanation: {
          en: "Ursula K. Le Guin wrote 'The Earthsea Cycle', beginning with 'A Wizard of Earthsea' (1968). The series is renowned for its thoughtful exploration of magic, responsibility, and coming of age.",
          es: "Ursula K. Le Guin escribió 'El Ciclo de Terramar', comenzando con 'Un Mago de Terramar' (1968). La serie es reconocida por su exploración reflexiva de la magia, responsabilidad y maduración.",
          de: "Ursula K. Le Guin schrieb den 'Erdsee-Zyklus', beginnend mit 'Der Zauberer der Erdsee' (1968). Die Serie ist bekannt für ihre durchdachte Erforschung von Magie, Verantwortung und Erwachsenwerden.",
          nl: "Ursula K. Le Guin schreef 'De Aardzee Cyclus', beginnend met 'Een Tovenaar van Aardzee' (1968). De serie staat bekend om zijn doordachte verkenning van magie, verantwoordelijkheid en volwassen worden."
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