// Quiz Template - Level 1: Boeken - Non-fictie
(function() {
  const level1 = {
    name: {
      en: "Non-Fiction - Beginner",
      es: "No Ficción - Principiante",
      de: "Sachbuch - Anfänger",
      nl: "Non-fictie - Beginner"
    },
    questions: [
      {
        question: {
          en: "Who wrote 'A Brief History of Time'?",
          es: "¿Quién escribió 'Breve historia del tiempo'?",
          de: "Wer schrieb 'Eine kurze Geschichte der Zeit'?",
          nl: "Wie schreef 'Het heelal'?"
        },
        options: [
          { en: "Stephen Hawking", es: "Stephen Hawking", de: "Stephen Hawking", nl: "Stephen Hawking" },
          { en: "Carl Sagan", es: "Carl Sagan", de: "Carl Sagan", nl: "Carl Sagan" },
          { en: "Neil deGrasse Tyson", es: "Neil deGrasse Tyson", de: "Neil deGrasse Tyson", nl: "Neil deGrasse Tyson" },
          { en: "Brian Cox", es: "Brian Cox", de: "Brian Cox", nl: "Brian Cox" }
        ],
        correct: 0,
        explanation: {
          en: "Stephen Hawking wrote 'A Brief History of Time' (1988), a popular science book that explains complex cosmological concepts in accessible language.",
          es: "Stephen Hawking escribió 'Breve historia del tiempo' (1988), un libro de divulgación científica que explica conceptos cosmológicos complejos en un lenguaje accesible.",
          de: "Stephen Hawking schrieb 'Eine kurze Geschichte der Zeit' (1988), ein populärwissenschaftliches Buch, das komplexe kosmologische Konzepte in verständlicher Sprache erklärt.",
          nl: "Stephen Hawking schreef 'Het heelal' (1988), een populairwetenschappelijk boek dat complexe kosmologische concepten in toegankelijke taal uitlegt."
        }
      },
      {
        question: {
          en: "Who wrote 'Sapiens: A Brief History of Humankind'?",
          es: "¿Quién escribió 'Sapiens: De animales a dioses'?",
          de: "Wer schrieb 'Eine kurze Geschichte der Menschheit'?",
          nl: "Wie schreef 'Sapiens: Een kleine geschiedenis van de mensheid'?"
        },
        options: [
          { en: "Jared Diamond", es: "Jared Diamond", de: "Jared Diamond", nl: "Jared Diamond" },
          { en: "Yuval Noah Harari", es: "Yuval Noah Harari", de: "Yuval Noah Harari", nl: "Yuval Noah Harari" },
          { en: "Steven Pinker", es: "Steven Pinker", de: "Steven Pinker", nl: "Steven Pinker" },
          { en: "Francis Fukuyama", es: "Francis Fukuyama", de: "Francis Fukuyama", nl: "Francis Fukuyama" }
        ],
        correct: 1,
        explanation: {
          en: "Yuval Noah Harari wrote 'Sapiens: A Brief History of Humankind' (2011), exploring how Homo sapiens came to dominate the world through cognitive, agricultural, and scientific revolutions.",
          es: "Yuval Noah Harari escribió 'Sapiens: De animales a dioses' (2011), explorando cómo el Homo sapiens llegó a dominar el mundo a través de revoluciones cognitivas, agrícolas y científicas.",
          de: "Yuval Noah Harari schrieb 'Eine kurze Geschichte der Menschheit' (2011) und erforscht, wie Homo sapiens durch kognitive, landwirtschaftliche und wissenschaftliche Revolutionen die Welt dominierte.",
          nl: "Yuval Noah Harari schreef 'Sapiens: Een kleine geschiedenis van de mensheid' (2011), waarin wordt onderzocht hoe Homo sapiens de wereld kwam te domineren door cognitieve, agrarische en wetenschappelijke revoluties."
        }
      },
      {
        question: {
          en: "Who wrote 'The Diary of a Young Girl'?",
          es: "¿Quién escribió 'El diario de Ana Frank'?",
          de: "Wer schrieb 'Das Tagebuch der Anne Frank'?",
          nl: "Wie schreef 'Het Achterhuis'?"
        },
        options: [
          { en: "Anne Frank", es: "Ana Frank", de: "Anne Frank", nl: "Anne Frank" },
          { en: "Elie Wiesel", es: "Elie Wiesel", de: "Elie Wiesel", nl: "Elie Wiesel" },
          { en: "Primo Levi", es: "Primo Levi", de: "Primo Levi", nl: "Primo Levi" },
          { en: "Viktor Frankl", es: "Viktor Frankl", de: "Viktor Frankl", nl: "Viktor Frankl" }
        ],
        correct: 0,
        explanation: {
          en: "Anne Frank wrote 'The Diary of a Young Girl' while hiding from the Nazis in Amsterdam during World War II. It's one of the most important Holocaust testimonies.",
          es: "Ana Frank escribió 'El diario de Ana Frank' mientras se escondía de los nazis en Ámsterdam durante la Segunda Guerra Mundial. Es uno de los testimonios del Holocausto más importantes.",
          de: "Anne Frank schrieb 'Das Tagebuch der Anne Frank', während sie sich während des Zweiten Weltkriegs vor den Nazis in Amsterdam versteckte. Es ist eines der wichtigsten Holocaust-Zeugnisse.",
          nl: "Anne Frank schreef 'Het Achterhuis' terwijl ze zich tijdens de Tweede Wereldoorlog schuilhield voor de nazi's in Amsterdam. Het is een van de belangrijkste Holocaust-getuigenissen."
        }
      },
      {
        question: {
          en: "Who wrote 'Silent Spring'?",
          es: "¿Quién escribió 'Primavera silenciosa'?",
          de: "Wer schrieb 'Der stumme Frühling'?",
          nl: "Wie schreef 'Dode lente'?"
        },
        options: [
          { en: "Jane Goodall", es: "Jane Goodall", de: "Jane Goodall", nl: "Jane Goodall" },
          { en: "Rachel Carson", es: "Rachel Carson", de: "Rachel Carson", nl: "Rachel Carson" },
          { en: "Dian Fossey", es: "Dian Fossey", de: "Dian Fossey", nl: "Dian Fossey" },
          { en: "Sylvia Earle", es: "Sylvia Earle", de: "Sylvia Earle", nl: "Sylvia Earle" }
        ],
        correct: 1,
        explanation: {
          en: "Rachel Carson wrote 'Silent Spring' (1962), a groundbreaking environmental science book that documented the harmful effects of pesticides and helped launch the environmental movement.",
          es: "Rachel Carson escribió 'Primavera silenciosa' (1962), un libro pionero de ciencia ambiental que documentó los efectos nocivos de los pesticidas y ayudó a lanzar el movimiento ambiental.",
          de: "Rachel Carson schrieb 'Der stumme Frühling' (1962), ein bahnbrechendes Umweltwissenschaftsbuch, das die schädlichen Auswirkungen von Pestiziden dokumentierte und half, die Umweltbewegung zu starten.",
          nl: "Rachel Carson schreef 'Dode lente' (1962), een baanbrekend milieukundig boek dat de schadelijke effecten van pesticiden documenteerde en hielp de milieubeweging te lanceren."
        }
      },
      {
        question: {
          en: "Who wrote 'The Immortal Life of Henrietta Lacks'?",
          es: "¿Quién escribió 'La vida inmortal de Henrietta Lacks'?",
          de: "Wer schrieb 'Das unsterbliche Leben der Henrietta Lacks'?",
          nl: "Wie schreef 'Het onsterfelijke leven van Henrietta Lacks'?"
        },
        options: [
          { en: "Rebecca Skloot", es: "Rebecca Skloot", de: "Rebecca Skloot", nl: "Rebecca Skloot" },
          { en: "Mary Roach", es: "Mary Roach", de: "Mary Roach", nl: "Mary Roach" },
          { en: "Siddhartha Mukherjee", es: "Siddhartha Mukherjee", de: "Siddhartha Mukherjee", nl: "Siddhartha Mukherjee" },
          { en: "Atul Gawande", es: "Atul Gawande", de: "Atul Gawande", nl: "Atul Gawande" }
        ],
        correct: 0,
        explanation: {
          en: "Rebecca Skloot wrote 'The Immortal Life of Henrietta Lacks' (2010), telling the story of how cells from an African American woman became one of medicine's most important tools.",
          es: "Rebecca Skloot escribió 'La vida inmortal de Henrietta Lacks' (2010), contando la historia de cómo las células de una mujer afroamericana se convirtieron en una de las herramientas más importantes de la medicina.",
          de: "Rebecca Skloot schrieb 'Das unsterbliche Leben der Henrietta Lacks' (2010) und erzählt die Geschichte, wie Zellen einer afroamerikanischen Frau zu einem der wichtigsten Werkzeuge der Medizin wurden.",
          nl: "Rebecca Skloot schreef 'Het onsterfelijke leven van Henrietta Lacks' (2010), waarin het verhaal wordt verteld van hoe cellen van een Afro-Amerikaanse vrouw een van de belangrijkste hulpmiddelen van de geneeskunde werden."
        }
      },
      {
        question: {
          en: "Who wrote 'Thinking, Fast and Slow'?",
          es: "¿Quién escribió 'Pensar rápido, pensar despacio'?",
          de: "Wer schrieb 'Schnelles Denken, langsames Denken'?",
          nl: "Wie schreef 'Ons feilbare denken'?"
        },
        options: [
          { en: "Malcolm Gladwell", es: "Malcolm Gladwell", de: "Malcolm Gladwell", nl: "Malcolm Gladwell" },
          { en: "Daniel Kahneman", es: "Daniel Kahneman", de: "Daniel Kahneman", nl: "Daniel Kahneman" },
          { en: "Nassim Nicholas Taleb", es: "Nassim Nicholas Taleb", de: "Nassim Nicholas Taleb", nl: "Nassim Nicholas Taleb" },
          { en: "Dan Ariely", es: "Dan Ariely", de: "Dan Ariely", nl: "Dan Ariely" }
        ],
        correct: 1,
        explanation: {
          en: "Daniel Kahneman wrote 'Thinking, Fast and Slow' (2011), exploring the two systems of thinking: fast, intuitive System 1 and slow, deliberate System 2.",
          es: "Daniel Kahneman escribió 'Pensar rápido, pensar despacio' (2011), explorando los dos sistemas de pensamiento: el Sistema 1 rápido e intuitivo y el Sistema 2 lento y deliberado.",
          de: "Daniel Kahneman schrieb 'Schnelles Denken, langsames Denken' (2011) und erforscht die zwei Denksysteme: das schnelle, intuitive System 1 und das langsame, bewusste System 2.",
          nl: "Daniel Kahneman schreef 'Ons feilbare denken' (2011), waarin de twee denksystemen worden onderzocht: het snelle, intuïtieve Systeem 1 en het langzame, bewuste Systeem 2."
        }
      },
      {
        question: {
          en: "Who wrote 'The 7 Habits of Highly Effective People'?",
          es: "¿Quién escribió 'Los 7 hábitos de la gente altamente efectiva'?",
          de: "Wer schrieb 'Die 7 Wege zur Effektivität'?",
          nl: "Wie schreef 'De 7 eigenschappen van effectief leiderschap'?"
        },
        options: [
          { en: "Tony Robbins", es: "Tony Robbins", de: "Tony Robbins", nl: "Tony Robbins" },
          { en: "Stephen Covey", es: "Stephen Covey", de: "Stephen Covey", nl: "Stephen Covey" },
          { en: "Dale Carnegie", es: "Dale Carnegie", de: "Dale Carnegie", nl: "Dale Carnegie" },
          { en: "Jim Collins", es: "Jim Collins", de: "Jim Collins", nl: "Jim Collins" }
        ],
        correct: 1,
        explanation: {
          en: "Stephen Covey wrote 'The 7 Habits of Highly Effective People' (1989), a self-help book that has influenced millions with its principles for personal and professional effectiveness.",
          es: "Stephen Covey escribió 'Los 7 hábitos de la gente altamente efectiva' (1989), un libro de autoayuda que ha influido a millones con sus principios para la efectividad personal y profesional.",
          de: "Stephen Covey schrieb 'Die 7 Wege zur Effektivität' (1989), ein Selbsthilfebuch, das Millionen mit seinen Prinzipien für persönliche und berufliche Effektivität beeinflusst hat.",
          nl: "Stephen Covey schreef 'De 7 eigenschappen van effectief leiderschap' (1989), een zelfhulpboek dat miljoenen heeft beïnvloed met zijn principes voor persoonlijke en professionele effectiviteit."
        }
      },
      {
        question: {
          en: "Who wrote 'In Cold Blood'?",
          es: "¿Quién escribió 'A sangre fría'?",
          de: "Wer schrieb 'Kaltblütig'?",
          nl: "Wie schreef 'Koelbloedig'?"
        },
        options: [
          { en: "Norman Mailer", es: "Norman Mailer", de: "Norman Mailer", nl: "Norman Mailer" },
          { en: "Truman Capote", es: "Truman Capote", de: "Truman Capote", nl: "Truman Capote" },
          { en: "Tom Wolfe", es: "Tom Wolfe", de: "Tom Wolfe", nl: "Tom Wolfe" },
          { en: "Gay Talese", es: "Gay Talese", de: "Gay Talese", nl: "Gay Talese" }
        ],
        correct: 1,
        explanation: {
          en: "Truman Capote wrote 'In Cold Blood' (1966), a pioneering work of literary journalism that tells the true story of a multiple murder in Kansas.",
          es: "Truman Capote escribió 'A sangre fría' (1966), una obra pionera del periodismo literario que cuenta la historia real de un asesinato múltiple en Kansas.",
          de: "Truman Capote schrieb 'Kaltblütig' (1966), ein bahnbrechendes Werk des literarischen Journalismus, das die wahre Geschichte eines Mehrfachmordes in Kansas erzählt.",
          nl: "Truman Capote schreef 'Koelbloedig' (1966), een baanbrekend werk van literaire journalistiek dat het waargebeurde verhaal van een meervoudige moord in Kansas vertelt."
        }
      },
      {
        question: {
          en: "Who wrote 'The Right Stuff'?",
          es: "¿Quién escribió 'Lo que hay que tener'?",
          de: "Wer schrieb 'The Right Stuff'?",
          nl: "Wie schreef 'The Right Stuff'?"
        },
        options: [
          { en: "Tom Wolfe", es: "Tom Wolfe", de: "Tom Wolfe", nl: "Tom Wolfe" },
          { en: "Hunter S. Thompson", es: "Hunter S. Thompson", de: "Hunter S. Thompson", nl: "Hunter S. Thompson" },
          { en: "Joan Didion", es: "Joan Didion", de: "Joan Didion", nl: "Joan Didion" },
          { en: "Norman Mailer", es: "Norman Mailer", de: "Norman Mailer", nl: "Norman Mailer" }
        ],
        correct: 0,
        explanation: {
          en: "Tom Wolfe wrote 'The Right Stuff' (1979), chronicling the development of the U.S. space program and the test pilots who became the first astronauts.",
          es: "Tom Wolfe escribió 'Lo que hay que tener' (1979), narrando el desarrollo del programa espacial estadounidense y los pilotos de prueba que se convirtieron en los primeros astronautas.",
          de: "Tom Wolfe schrieb 'The Right Stuff' (1979) und chronisiert die Entwicklung des US-Raumfahrtprogramms und die Testpiloten, die zu den ersten Astronauten wurden.",
          nl: "Tom Wolfe schreef 'The Right Stuff' (1979), waarin de ontwikkeling van het Amerikaanse ruimteprogramma en de testpiloten die de eerste astronauten werden, wordt beschreven."
        }
      },
      {
        question: {
          en: "Who wrote 'Midnight in the Garden of Good and Evil'?",
          es: "¿Quién escribió 'Medianoche en el jardín del bien y del mal'?",
          de: "Wer schrieb 'Mitternacht im Garten von Gut und Böse'?",
          nl: "Wie schreef 'Middernacht in de tuin van goed en kwaad'?"
        },
        options: [
          { en: "John Berendt", es: "John Berendt", de: "John Berendt", nl: "John Berendt" },
          { en: "Pat Conroy", es: "Pat Conroy", de: "Pat Conroy", nl: "Pat Conroy" },
          { en: "Anne Rice", es: "Anne Rice", de: "Anne Rice", nl: "Anne Rice" },
          { en: "William Styron", es: "William Styron", de: "William Styron", nl: "William Styron" }
        ],
        correct: 0,
        explanation: {
          en: "John Berendt wrote 'Midnight in the Garden of Good and Evil' (1994), a non-fiction novel about eccentric characters and a murder case in Savannah, Georgia.",
          es: "John Berendt escribió 'Medianoche en el jardín del bien y del mal' (1994), una novela de no ficción sobre personajes excéntricos y un caso de asesinato en Savannah, Georgia.",
          de: "John Berendt schrieb 'Mitternacht im Garten von Gut und Böse' (1994), einen Sachbuchroman über exzentrische Charaktere und einen Mordfall in Savannah, Georgia.",
          nl: "John Berendt schreef 'Middernacht in de tuin van goed en kwaad' (1994), een non-fictie roman over excentrieke personages en een moordzaak in Savannah, Georgia."
        }
      },
      {
        question: {
          en: "Who wrote 'Into the Wild'?",
          es: "¿Quién escribió 'Hacia rutas salvajes'?",
          de: "Wer schrieb 'In die Wildnis'?",
          nl: "Wie schreef 'Into the Wild'?"
        },
        options: [
          { en: "Jon Krakauer", es: "Jon Krakauer", de: "Jon Krakauer", nl: "Jon Krakauer" },
          { en: "Sebastian Junger", es: "Sebastian Junger", de: "Sebastian Junger", nl: "Sebastian Junger" },
          { en: "Bill Bryson", es: "Bill Bryson", de: "Bill Bryson", nl: "Bill Bryson" },
          { en: "Cheryl Strayed", es: "Cheryl Strayed", de: "Cheryl Strayed", nl: "Cheryl Strayed" }
        ],
        correct: 0,
        explanation: {
          en: "Jon Krakauer wrote 'Into the Wild' (1996), the true story of Christopher McCandless, who abandoned his possessions to live in the Alaskan wilderness.",
          es: "Jon Krakauer escribió 'Hacia rutas salvajes' (1996), la historia real de Christopher McCandless, quien abandonó sus posesiones para vivir en la naturaleza salvaje de Alaska.",
          de: "Jon Krakauer schrieb 'In die Wildnis' (1996), die wahre Geschichte von Christopher McCandless, der seine Besitztümer aufgab, um in der Wildnis Alaskas zu leben.",
          nl: "Jon Krakauer schreef 'Into the Wild' (1996), het waargebeurde verhaal van Christopher McCandless, die zijn bezittingen achterliet om in de wildernis van Alaska te leven."
        }
      },
      {
        question: {
          en: "Who wrote 'The Emperor of All Maladies'?",
          es: "¿Quién escribió 'El emperador de todos los males'?",
          de: "Wer schrieb 'Der König aller Krankheiten'?",
          nl: "Wie schreef 'De keizer van alle ziektes'?"
        },
        options: [
          { en: "Atul Gawande", es: "Atul Gawande", de: "Atul Gawande", nl: "Atul Gawande" },
          { en: "Siddhartha Mukherjee", es: "Siddhartha Mukherjee", de: "Siddhartha Mukherjee", nl: "Siddhartha Mukherjee" },
          { en: "Abraham Verghese", es: "Abraham Verghese", de: "Abraham Verghese", nl: "Abraham Verghese" },
          { en: "Paul Kalanithi", es: "Paul Kalanithi", de: "Paul Kalanithi", nl: "Paul Kalanithi" }
        ],
        correct: 1,
        explanation: {
          en: "Siddhartha Mukherjee wrote 'The Emperor of All Maladies' (2010), a comprehensive biography of cancer that won the Pulitzer Prize for General Nonfiction.",
          es: "Siddhartha Mukherjee escribió 'El emperador de todos los males' (2010), una biografía completa del cáncer que ganó el Premio Pulitzer de No Ficción General.",
          de: "Siddhartha Mukherjee schrieb 'Der König aller Krankheiten' (2010), eine umfassende Biographie des Krebses, die den Pulitzer-Preis für Allgemeine Sachliteratur gewann.",
          nl: "Siddhartha Mukherjee schreef 'De keizer van alle ziektes' (2010), een uitgebreide biografie van kanker die de Pulitzer Prijs voor Algemene Non-fictie won."
        }
      },
      {
        question: {
          en: "Who wrote 'The Guns of August'?",
          es: "¿Quién escribió 'Los cañones de agosto'?",
          de: "Wer schrieb 'August 1914'?",
          nl: "Wie schreef 'De kanonnen van augustus'?"
        },
        options: [
          { en: "David McCullough", es: "David McCullough", de: "David McCullough", nl: "David McCullough" },
          { en: "Barbara Tuchman", es: "Barbara Tuchman", de: "Barbara Tuchman", nl: "Barbara Tuchman" },
          { en: "Doris Kearns Goodwin", es: "Doris Kearns Goodwin", de: "Doris Kearns Goodwin", nl: "Doris Kearns Goodwin" },
          { en: "Joseph Ellis", es: "Joseph Ellis", de: "Joseph Ellis", nl: "Joseph Ellis" }
        ],
        correct: 1,
        explanation: {
          en: "Barbara Tuchman wrote 'The Guns of August' (1962), a detailed account of the first month of World War I that won the Pulitzer Prize for General Nonfiction.",
          es: "Barbara Tuchman escribió 'Los cañones de agosto' (1962), un relato detallado del primer mes de la Primera Guerra Mundial que ganó el Premio Pulitzer de No Ficción General.",
          de: "Barbara Tuchman schrieb 'August 1914' (1962), einen detaillierten Bericht über den ersten Monat des Ersten Weltkriegs, der den Pulitzer-Preis für Allgemeine Sachliteratur gewann.",
          nl: "Barbara Tuchman schreef 'De kanonnen van augustus' (1962), een gedetailleerd verslag van de eerste maand van de Eerste Wereldoorlog dat de Pulitzer Prijs voor Algemene Non-fictie won."
        }
      },
      {
        question: {
          en: "Who wrote 'The Double Helix'?",
          es: "¿Quién escribió 'La doble hélice'?",
          de: "Wer schrieb 'Die Doppel-Helix'?",
          nl: "Wie schreef 'De dubbele helix'?"
        },
        options: [
          { en: "Francis Crick", es: "Francis Crick", de: "Francis Crick", nl: "Francis Crick" },
          { en: "James Watson", es: "James Watson", de: "James Watson", nl: "James Watson" },
          { en: "Rosalind Franklin", es: "Rosalind Franklin", de: "Rosalind Franklin", nl: "Rosalind Franklin" },
          { en: "Maurice Wilkins", es: "Maurice Wilkins", de: "Maurice Wilkins", nl: "Maurice Wilkins" }
        ],
        correct: 1,
        explanation: {
          en: "James Watson wrote 'The Double Helix' (1968), a personal account of the discovery of the structure of DNA, though controversial for its portrayal of Rosalind Franklin.",
          es: "James Watson escribió 'La doble hélice' (1968), un relato personal del descubrimiento de la estructura del ADN, aunque controvertido por su retrato de Rosalind Franklin.",
          de: "James Watson schrieb 'Die Doppel-Helix' (1968), einen persönlichen Bericht über die Entdeckung der DNA-Struktur, obwohl umstritten wegen seiner Darstellung von Rosalind Franklin.",
          nl: "James Watson schreef 'De dubbele helix' (1968), een persoonlijk verslag van de ontdekking van de DNA-structuur, hoewel controversieel vanwege zijn portret van Rosalind Franklin."
        }
      },
      {
        question: {
          en: "Who wrote 'Kitchen Confidential'?",
          es: "¿Quién escribió 'Confesiones de un chef'?",
          de: "Wer schrieb 'Geständnisse eines Küchenchefs'?",
          nl: "Wie schreef 'Kitchen Confidential'?"
        },
        options: [
          { en: "Gordon Ramsay", es: "Gordon Ramsay", de: "Gordon Ramsay", nl: "Gordon Ramsay" },
          { en: "Anthony Bourdain", es: "Anthony Bourdain", de: "Anthony Bourdain", nl: "Anthony Bourdain" },
          { en: "Julia Child", es: "Julia Child", de: "Julia Child", nl: "Julia Child" },
          { en: "Marco Pierre White", es: "Marco Pierre White", de: "Marco Pierre White", nl: "Marco Pierre White" }
        ],
        correct: 1,
        explanation: {
          en: "Anthony Bourdain wrote 'Kitchen Confidential' (2000), a behind-the-scenes look at professional kitchens that became a bestseller and launched his media career.",
          es: "Anthony Bourdain escribió 'Confesiones de un chef' (2000), una mirada tras bambalinas de las cocinas profesionales que se convirtió en un bestseller y lanzó su carrera mediática.",
          de: "Anthony Bourdain schrieb 'Geständnisse eines Küchenchefs' (2000), einen Blick hinter die Kulissen professioneller Küchen, der ein Bestseller wurde und seine Medienkarriere startete.",
          nl: "Anthony Bourdain schreef 'Kitchen Confidential' (2000), een kijk achter de schermen van professionele keukens die een bestseller werd en zijn mediacarrière lanceerde."
        }
      },
      {
        question: {
          en: "Who wrote 'Wild: From Lost to Found on the Pacific Crest Trail'?",
          es: "¿Quién escribió 'Salvaje'?",
          de: "Wer schrieb 'Wild'?",
          nl: "Wie schreef 'Wild'?"
        },
        options: [
          { en: "Cheryl Strayed", es: "Cheryl Strayed", de: "Cheryl Strayed", nl: "Cheryl Strayed" },
          { en: "Elizabeth Gilbert", es: "Elizabeth Gilbert", de: "Elizabeth Gilbert", nl: "Elizabeth Gilbert" },
          { en: "Rebecca Solnit", es: "Rebecca Solnit", de: "Rebecca Solnit", nl: "Rebecca Solnit" },
          { en: "Pico Iyer", es: "Pico Iyer", de: "Pico Iyer", nl: "Pico Iyer" }
        ],
        correct: 0,
        explanation: {
          en: "Cheryl Strayed wrote 'Wild' (2012), a memoir about her solo hike along the Pacific Crest Trail as a way to heal from personal tragedy.",
          es: "Cheryl Strayed escribió 'Salvaje' (2012), una memoria sobre su caminata en solitario por el Sendero de la Cresta del Pacífico como una forma de sanar de una tragedia personal.",
          de: "Cheryl Strayed schrieb 'Wild' (2012), eine Autobiographie über ihre Solo-Wanderung auf dem Pacific Crest Trail als Weg, von einer persönlichen Tragödie zu heilen.",
          nl: "Cheryl Strayed schreef 'Wild' (2012), een memoir over haar solo wandeling langs de Pacific Crest Trail als een manier om te genezen van persoonlijke tragedie."
        }
      },
      {
        question: {
          en: "Who wrote 'Fast Food Nation'?",
          es: "¿Quién escribió 'Fast Food Nation'?",
          de: "Wer schrieb 'Fast Food Nation'?",
          nl: "Wie schreef 'Fast Food Nation'?"
        },
        options: [
          { en: "Michael Pollan", es: "Michael Pollan", de: "Michael Pollan", nl: "Michael Pollan" },
          { en: "Eric Schlosser", es: "Eric Schlosser", de: "Eric Schlosser", nl: "Eric Schlosser" },
          { en: "Marion Nestle", es: "Marion Nestle", de: "Marion Nestle", nl: "Marion Nestle" },
          { en: "Mark Bittman", es: "Mark Bittman", de: "Mark Bittman", nl: "Mark Bittman" }
        ],
        correct: 1,
        explanation: {
          en: "Eric Schlosser wrote 'Fast Food Nation' (2001), an exposé of the fast food industry's impact on American society, health, and the economy.",
          es: "Eric Schlosser escribió 'Fast Food Nation' (2001), una exposición del impacto de la industria de comida rápida en la sociedad, salud y economía estadounidenses.",
          de: "Eric Schlosser schrieb 'Fast Food Nation' (2001), eine Enthüllung über die Auswirkungen der Fast-Food-Industrie auf die amerikanische Gesellschaft, Gesundheit und Wirtschaft.",
          nl: "Eric Schlosser schreef 'Fast Food Nation' (2001), een onthulling van de impact van de fastfood-industrie op de Amerikaanse samenleving, gezondheid en economie."
        }
      },
      {
        question: {
          en: "Who wrote 'The Omnivore's Dilemma'?",
          es: "¿Quién escribió 'El dilema del omnívoro'?",
          de: "Wer schrieb 'Das Omnivoren-Dilemma'?",
          nl: "Wie schreef 'Het dilemma van de allesetende'?"
        },
        options: [
          { en: "Michael Pollan", es: "Michael Pollan", de: "Michael Pollan", nl: "Michael Pollan" },
          { en: "Eric Schlosser", es: "Eric Schlosser", de: "Eric Schlosser", nl: "Eric Schlosser" },
          { en: "Joel Salatin", es: "Joel Salatin", de: "Joel Salatin", nl: "Joel Salatin" },
          { en: "Mark Bittman", es: "Mark Bittman", de: "Mark Bittman", nl: "Mark Bittman" }
        ],
        correct: 0,
        explanation: {
          en: "Michael Pollan wrote 'The Omnivore's Dilemma' (2006), exploring the industrial food chain and advocating for more sustainable eating practices.",
          es: "Michael Pollan escribió 'El dilema del omnívoro' (2006), explorando la cadena alimentaria industrial y abogando por prácticas alimentarias más sostenibles.",
          de: "Michael Pollan schrieb 'Das Omnivoren-Dilemma' (2006), erforscht die industrielle Nahrungskette und plädiert für nachhaltigere Essgewohnheiten.",
          nl: "Michael Pollan schreef 'Het dilemma van de allesetende' (2006), waarin de industriële voedselketen wordt onderzocht en wordt gepleit voor duurzamere eetgewoonten."
        }
      },
      {
        question: {
          en: "Who wrote 'When Breath Becomes Air'?",
          es: "¿Quién escribió 'Cuando el aliento se vuelve aire'?",
          de: "Wer schrieb 'Bevor ich jetzt gehe'?",
          nl: "Wie schreef 'Het ongeleefde leven'?"
        },
        options: [
          { en: "Atul Gawande", es: "Atul Gawande", de: "Atul Gawande", nl: "Atul Gawande" },
          { en: "Paul Kalanithi", es: "Paul Kalanithi", de: "Paul Kalanithi", nl: "Paul Kalanithi" },
          { en: "Oliver Sacks", es: "Oliver Sacks", de: "Oliver Sacks", nl: "Oliver Sacks" },
          { en: "Abraham Verghese", es: "Abraham Verghese", de: "Abraham Verghese", nl: "Abraham Verghese" }
        ],
        correct: 1,
        explanation: {
          en: "Paul Kalanithi wrote 'When Breath Becomes Air' (2016), a profound memoir about facing terminal cancer while working as a neurosurgeon.",
          es: "Paul Kalanithi escribió 'Cuando el aliento se vuelve aire' (2016), una memoria profunda sobre enfrentar el cáncer terminal mientras trabajaba como neurocirujano.",
          de: "Paul Kalanithi schrieb 'Bevor ich jetzt gehe' (2016), eine tiefgreifende Autobiographie über die Konfrontation mit terminalem Krebs während seiner Arbeit als Neurochirurg.",
          nl: "Paul Kalanithi schreef 'Het ongeleefde leven' (2016), een diepgaande memoir over het onder ogen zien van terminale kanker terwijl hij werkte als neurochirurg."
        }
      },
      {
        question: {
          en: "Who wrote 'The Selfish Gene'?",
          es: "¿Quién escribió 'El gen egoísta'?",
          de: "Wer schrieb 'Das egoistische Gen'?",
          nl: "Wie schreef 'Het egoïstische gen'?"
        },
        options: [
          { en: "Stephen Jay Gould", es: "Stephen Jay Gould", de: "Stephen Jay Gould", nl: "Stephen Jay Gould" },
          { en: "Richard Dawkins", es: "Richard Dawkins", de: "Richard Dawkins", nl: "Richard Dawkins" },
          { en: "E.O. Wilson", es: "E.O. Wilson", de: "E.O. Wilson", nl: "E.O. Wilson" },
          { en: "Daniel Dennett", es: "Daniel Dennett", de: "Daniel Dennett", nl: "Daniel Dennett" }
        ],
        correct: 1,
        explanation: {
          en: "Richard Dawkins wrote 'The Selfish Gene' (1976), a popular science book that introduced the gene-centered view of evolution and coined the term 'meme'.",
          es: "Richard Dawkins escribió 'El gen egoísta' (1976), un libro de divulgación científica que introdujo la visión de la evolución centrada en los genes y acuñó el término 'meme'.",
          de: "Richard Dawkins schrieb 'Das egoistische Gen' (1976), ein populärwissenschaftliches Buch, das die gen-zentrierte Sicht der Evolution einführte und den Begriff 'Mem' prägte.",
          nl: "Richard Dawkins schreef 'Het egoïstische gen' (1976), een populairwetenschappelijk boek dat de gen-gecentreerde kijk op evolutie introduceerde en de term 'meme' bedacht."
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