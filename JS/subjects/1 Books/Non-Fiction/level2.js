// Quiz Template - Level 2: Boeken - Non-fictie
(function() {
  const level2 = {
    name: {
      en: "Non-Fiction Books",
      es: "Libros de No Ficción",
      de: "Sachbücher",
      nl: "Non-fictie Boeken"
    },
    questions: [
      {
        question: {
          en: "Who wrote 'Sapiens: A Brief History of Humankind'?",
          es: "¿Quién escribió 'Sapiens: De animales a dioses'?",
          de: "Wer schrieb 'Eine kurze Geschichte der Menschheit'?",
          nl: "Wie schreef 'Sapiens: Een kleine geschiedenis van de mensheid'?"
        },
        options: [
          { en: "Yuval Noah Harari", es: "Yuval Noah Harari", de: "Yuval Noah Harari", nl: "Yuval Noah Harari" },
          { en: "Jared Diamond", es: "Jared Diamond", de: "Jared Diamond", nl: "Jared Diamond" },
          { en: "Malcolm Gladwell", es: "Malcolm Gladwell", de: "Malcolm Gladwell", nl: "Malcolm Gladwell" },
          { en: "Stephen Hawking", es: "Stephen Hawking", de: "Stephen Hawking", nl: "Stephen Hawking" }
        ],
        correct: 0,
        explanation: {
          en: "Yuval Noah Harari wrote this bestselling book exploring human history from the Stone Age to the modern age.",
          es: "Yuval Noah Harari escribió este bestseller que explora la historia humana desde la Edad de Piedra hasta la era moderna.",
          de: "Yuval Noah Harari schrieb dieses Bestseller-Buch, das die Menschheitsgeschichte von der Steinzeit bis zur Moderne erforscht.",
          nl: "Yuval Noah Harari schreef dit bestseller boek over de menselijke geschiedenis van de steentijd tot het moderne tijdperk."
        }
      },
      {
        question: {
          en: "What is the main topic of 'The Diary of a Young Girl' by Anne Frank?",
          es: "¿Cuál es el tema principal de 'El diario de Ana Frank'?",
          de: "Was ist das Hauptthema von 'Das Tagebuch der Anne Frank'?",
          nl: "Wat is het hoofdonderwerp van 'Het Achterhuis' van Anne Frank?"
        },
        options: [
          { en: "World War I experiences", es: "Experiencias de la Primera Guerra Mundial", de: "Erfahrungen aus dem Ersten Weltkrieg", nl: "Eerste Wereldoorlog ervaringen" },
          { en: "Hiding during the Holocaust", es: "Ocultarse durante el Holocausto", de: "Verstecken während des Holocausts", nl: "Onderduiken tijdens de Holocaust" },
          { en: "Post-war recovery", es: "Recuperación de posguerra", de: "Nachkriegserholung", nl: "Naoorlogse herstel" },
          { en: "Life in Amsterdam", es: "Vida en Ámsterdam", de: "Leben in Amsterdam", nl: "Leven in Amsterdam" }
        ],
        correct: 1,
        explanation: {
          en: "Anne Frank's diary documents her life in hiding with her family during the Nazi occupation of the Netherlands.",
          es: "El diario de Ana Frank documenta su vida escondida con su familia durante la ocupación nazi de los Países Bajos.",
          de: "Anne Franks Tagebuch dokumentiert ihr Leben im Versteck mit ihrer Familie während der Nazi-Besatzung der Niederlande.",
          nl: "Het dagboek van Anne Frank documenteert haar leven ondergedoken met haar familie tijdens de nazi-bezetting van Nederland."
        }
      },
      {
        question: {
          en: "Who wrote 'A Brief History of Time'?",
          es: "¿Quién escribió 'Historia del tiempo'?",
          de: "Wer schrieb 'Eine kurze Geschichte der Zeit'?",
          nl: "Wie schreef 'Het Heelal'?"
        },
        options: [
          { en: "Albert Einstein", es: "Albert Einstein", de: "Albert Einstein", nl: "Albert Einstein" },
          { en: "Carl Sagan", es: "Carl Sagan", de: "Carl Sagan", nl: "Carl Sagan" },
          { en: "Stephen Hawking", es: "Stephen Hawking", de: "Stephen Hawking", nl: "Stephen Hawking" },
          { en: "Neil deGrasse Tyson", es: "Neil deGrasse Tyson", de: "Neil deGrasse Tyson", nl: "Neil deGrasse Tyson" }
        ],
        correct: 2,
        explanation: {
          en: "Stephen Hawking wrote this popular science book explaining cosmology for general readers in 1988.",
          es: "Stephen Hawking escribió este libro de divulgación científica explicando la cosmología para lectores generales en 1988.",
          de: "Stephen Hawking schrieb dieses populärwissenschaftliche Buch, das Kosmologie für allgemeine Leser im Jahr 1988 erklärt.",
          nl: "Stephen Hawking schreef dit populairwetenschappelijk boek dat kosmologie uitlegt voor algemene lezers in 1988."
        }
      },
      {
        question: {
          en: "What subject does 'Thinking, Fast and Slow' by Daniel Kahneman explore?",
          es: "¿Qué tema explora 'Pensar rápido, pensar despacio' de Daniel Kahneman?",
          de: "Welches Thema behandelt 'Schnelles Denken, langsames Denken' von Daniel Kahneman?",
          nl: "Welk onderwerp verkent 'Ons feilbare denken' van Daniel Kahneman?"
        },
        options: [
          { en: "Economic theory", es: "Teoría económica", de: "Wirtschaftstheorie", nl: "Economische theorie" },
          { en: "Psychology and decision-making", es: "Psicología y toma de decisiones", de: "Psychologie und Entscheidungsfindung", nl: "Psychologie en besluitvorming" },
          { en: "Political science", es: "Ciencia política", de: "Politikwissenschaft", nl: "Politieke wetenschappen" },
          { en: "Philosophy", es: "Filosofía", de: "Philosophie", nl: "Filosofie" }
        ],
        correct: 1,
        explanation: {
          en: "Kahneman's book explores the two systems of thinking: fast, intuitive thinking and slow, deliberate reasoning.",
          es: "El libro de Kahneman explora los dos sistemas de pensamiento: pensamiento rápido e intuitivo y razonamiento lento y deliberado.",
          de: "Kahnemans Buch erforscht die zwei Denksysteme: schnelles, intuitives Denken und langsames, überlegtes Denken.",
          nl: "Kahnemans boek verkent de twee denksystemen: snel, intuïtief denken en langzaam, weloverwogen redeneren."
        }
      },
      {
        question: {
          en: "Who authored 'The Immortal Life of Henrietta Lacks'?",
          es: "¿Quién escribió 'La vida inmortal de Henrietta Lacks'?",
          de: "Wer schrieb 'Die Unsterblichkeit der Henrietta Lacks'?",
          nl: "Wie schreef 'Het onsterfelijke leven van Henrietta Lacks'?"
        },
        options: [
          { en: "Rebecca Skloot", es: "Rebecca Skloot", de: "Rebecca Skloot", nl: "Rebecca Skloot" },
          { en: "Siddhartha Mukherjee", es: "Siddhartha Mukherjee", de: "Siddhartha Mukherjee", nl: "Siddhartha Mukherjee" },
          { en: "Atul Gawande", es: "Atul Gawande", de: "Atul Gawande", nl: "Atul Gawande" },
          { en: "Oliver Sacks", es: "Oliver Sacks", de: "Oliver Sacks", nl: "Oliver Sacks" }
        ],
        correct: 0,
        explanation: {
          en: "Rebecca Skloot wrote this book about Henrietta Lacks, whose cancer cells were used for groundbreaking medical research.",
          es: "Rebecca Skloot escribió este libro sobre Henrietta Lacks, cuyas células cancerosas se usaron para investigaciones médicas innovadoras.",
          de: "Rebecca Skloot schrieb dieses Buch über Henrietta Lacks, deren Krebszellen für bahnbrechende medizinische Forschung verwendet wurden.",
          nl: "Rebecca Skloot schreef dit boek over Henrietta Lacks, wiens kankercellen werden gebruikt voor baanbrekend medisch onderzoek."
        }
      },
      {
        question: {
          en: "What is the focus of 'Into the Wild' by Jon Krakauer?",
          es: "¿Cuál es el enfoque de 'Hacia rutas salvajes' de Jon Krakauer?",
          de: "Was ist der Fokus von 'In die Wildnis' von Jon Krakauer?",
          nl: "Wat is de focus van 'Into the Wild' van Jon Krakauer?"
        },
        options: [
          { en: "Mountain climbing", es: "Alpinismo", de: "Bergsteigen", nl: "Bergbeklimmen" },
          { en: "Christopher McCandless's journey into Alaska", es: "El viaje de Christopher McCandless a Alaska", de: "Christopher McCandless' Reise nach Alaska", nl: "Christopher McCandless' reis naar Alaska" },
          { en: "Wildlife conservation", es: "Conservación de la vida silvestre", de: "Naturschutz", nl: "Bescherming van wilde dieren" },
          { en: "Arctic exploration", es: "Exploración ártica", de: "Arktische Erkundung", nl: "Arctische verkenning" }
        ],
        correct: 1,
        explanation: {
          en: "The book tells the true story of Christopher McCandless who ventured into the Alaskan wilderness and died there in 1992.",
          es: "El libro cuenta la historia real de Christopher McCandless quien se aventuró en el desierto de Alaska y murió allí en 1992.",
          de: "Das Buch erzählt die wahre Geschichte von Christopher McCandless, der in die Wildnis Alaskas zog und dort 1992 starb.",
          nl: "Het boek vertelt het waargebeurde verhaal van Christopher McCandless die de Alaskaanse wildernis introk en daar in 1992 stierf."
        }
      },
      {
        question: {
          en: "Who wrote 'Educated: A Memoir'?",
          es: "¿Quién escribió 'Una educación'?",
          de: "Wer schrieb 'Befreit: Wie Bildung mir die Welt erschloss'?",
          nl: "Wie schreef 'Educated: A Memoir'?"
        },
        options: [
          { en: "Tara Westover", es: "Tara Westover", de: "Tara Westover", nl: "Tara Westover" },
          { en: "Michelle Obama", es: "Michelle Obama", de: "Michelle Obama", nl: "Michelle Obama" },
          { en: "Malala Yousafzai", es: "Malala Yousafzai", de: "Malala Yousafzai", nl: "Malala Yousafzai" },
          { en: "Cheryl Strayed", es: "Cheryl Strayed", de: "Cheryl Strayed", nl: "Cheryl Strayed" }
        ],
        correct: 0,
        explanation: {
          en: "Tara Westover wrote this memoir about growing up in a survivalist family and eventually earning a PhD from Cambridge.",
          es: "Tara Westover escribió esta memoria sobre crecer en una familia supervivencialista y eventualmente obtener un doctorado de Cambridge.",
          de: "Tara Westover schrieb diese Memoiren über ihr Aufwachsen in einer Überlebensfamilie und ihren Doktortitel von Cambridge.",
          nl: "Tara Westover schreef deze memoires over opgroeien in een overlevingsgezin en uiteindelijk een doctoraat halen aan Cambridge."
        }
      },
      {
        question: {
          en: "What is 'The Selfish Gene' by Richard Dawkins about?",
          es: "¿De qué trata 'El gen egoísta' de Richard Dawkins?",
          de: "Worum geht es in 'Das egoistische Gen' von Richard Dawkins?",
          nl: "Waar gaat 'Het egoïstische gen' van Richard Dawkins over?"
        },
        options: [
          { en: "Human psychology", es: "Psicología humana", de: "Menschliche Psychologie", nl: "Menselijke psychologie" },
          { en: "Gene-centered view of evolution", es: "Visión centrada en los genes de la evolución", de: "Gen-zentrierte Sicht der Evolution", nl: "Gen-gecentreerd beeld van evolutie" },
          { en: "Genetic diseases", es: "Enfermedades genéticas", de: "Genetische Krankheiten", nl: "Genetische ziekten" },
          { en: "DNA structure", es: "Estructura del ADN", de: "DNA-Struktur", nl: "DNA-structuur" }
        ],
        correct: 1,
        explanation: {
          en: "Dawkins presents evolution from the gene's perspective, arguing that genes are the principal unit of selection in evolution.",
          es: "Dawkins presenta la evolución desde la perspectiva del gen, argumentando que los genes son la unidad principal de selección en la evolución.",
          de: "Dawkins präsentiert Evolution aus der Perspektive des Gens und argumentiert, dass Gene die Haupteinheit der Selektion in der Evolution sind.",
          nl: "Dawkins presenteert evolutie vanuit het perspectief van het gen, met het argument dat genen de belangrijkste eenheid van selectie in evolutie zijn."
        }
      },
      {
        question: {
          en: "Who wrote 'Guns, Germs, and Steel'?",
          es: "¿Quién escribió 'Armas, gérmenes y acero'?",
          de: "Wer schrieb 'Arm und Reich'?",
          nl: "Wie schreef 'Zwaarden, paarden en ziektekiemen'?"
        },
        options: [
          { en: "Yuval Noah Harari", es: "Yuval Noah Harari", de: "Yuval Noah Harari", nl: "Yuval Noah Harari" },
          { en: "Jared Diamond", es: "Jared Diamond", de: "Jared Diamond", nl: "Jared Diamond" },
          { en: "Francis Fukuyama", es: "Francis Fukuyama", de: "Francis Fukuyama", nl: "Francis Fukuyama" },
          { en: "Thomas Friedman", es: "Thomas Friedman", de: "Thomas Friedman", nl: "Thomas Friedman" }
        ],
        correct: 1,
        explanation: {
          en: "Jared Diamond wrote this Pulitzer Prize-winning book explaining how geography shaped human societies and civilizations.",
          es: "Jared Diamond escribió este libro ganador del Premio Pulitzer que explica cómo la geografía moldeó las sociedades y civilizaciones humanas.",
          de: "Jared Diamond schrieb dieses mit dem Pulitzer-Preis ausgezeichnete Buch, das erklärt, wie Geographie menschliche Gesellschaften und Zivilisationen formte.",
          nl: "Jared Diamond schreef dit Pulitzer Prize-winnende boek dat uitlegt hoe geografie menselijke samenlevingen en beschavingen vormde."
        }
      },
      {
        question: {
          en: "What is the main subject of 'Silent Spring' by Rachel Carson?",
          es: "¿Cuál es el tema principal de 'Primavera silenciosa' de Rachel Carson?",
          de: "Was ist das Hauptthema von 'Der stumme Frühling' von Rachel Carson?",
          nl: "Wat is het hoofdonderwerp van 'Vredige lente' van Rachel Carson?"
        },
        options: [
          { en: "Climate change", es: "Cambio climático", de: "Klimawandel", nl: "Klimaatverandering" },
          { en: "Environmental impact of pesticides", es: "Impacto ambiental de los pesticidas", de: "Umweltauswirkungen von Pestiziden", nl: "Milieueffecten van pesticiden" },
          { en: "Bird migration", es: "Migración de aves", de: "Vogelwanderung", nl: "Vogelmigratie" },
          { en: "Ocean pollution", es: "Contaminación oceánica", de: "Meeresverschmutzung", nl: "Oceaanvervuiling" }
        ],
        correct: 1,
        explanation: {
          en: "Rachel Carson's groundbreaking 1962 book exposed the harmful effects of pesticides on the environment and helped launch the modern environmental movement.",
          es: "El libro innovador de Rachel Carson de 1962 expuso los efectos dañinos de los pesticidas en el medio ambiente y ayudó a lanzar el movimiento ambiental moderno.",
          de: "Rachel Carsons bahnbrechendes Buch von 1962 enthüllte die schädlichen Auswirkungen von Pestiziden auf die Umwelt und half, die moderne Umweltbewegung zu starten.",
          nl: "Rachel Carsons baanbrekende boek uit 1962 onthulde de schadelijke effecten van pesticiden op het milieu en hielp de moderne milieubeweging te lanceren."
        }
      },
      {
        question: {
          en: "Who is the author of 'The Man Who Mistook His Wife for a Hat'?",
          es: "¿Quién es el autor de 'El hombre que confundió a su mujer con un sombrero'?",
          de: "Wer ist der Autor von 'Der Mann, der seine Frau mit einem Hut verwechselte'?",
          nl: "Wie is de auteur van 'De man die zijn vrouw voor een hoed aanzag'?"
        },
        options: [
          { en: "Sigmund Freud", es: "Sigmund Freud", de: "Sigmund Freud", nl: "Sigmund Freud" },
          { en: "Oliver Sacks", es: "Oliver Sacks", de: "Oliver Sacks", nl: "Oliver Sacks" },
          { en: "Carl Jung", es: "Carl Jung", de: "Carl Jung", nl: "Carl Jung" },
          { en: "Viktor Frankl", es: "Viktor Frankl", de: "Viktor Frankl", nl: "Viktor Frankl" }
        ],
        correct: 1,
        explanation: {
          en: "Oliver Sacks, a neurologist, wrote this collection of case studies about patients with unusual neurological conditions.",
          es: "Oliver Sacks, un neurólogo, escribió esta colección de casos de estudio sobre pacientes con condiciones neurológicas inusuales.",
          de: "Oliver Sacks, ein Neurologe, schrieb diese Sammlung von Fallstudien über Patienten mit ungewöhnlichen neurologischen Erkrankungen.",
          nl: "Oliver Sacks, een neuroloog, schreef deze verzameling casestudies over patiënten met ongewone neurologische aandoeningen."
        }
      },
      {
        question: {
          en: "What does 'Freakonomics' by Steven Levitt and Stephen Dubner explore?",
          es: "¿Qué explora 'Freakonomics' de Steven Levitt y Stephen Dubner?",
          de: "Was erforscht 'Freakonomics' von Steven Levitt und Stephen Dubner?",
          nl: "Wat onderzoekt 'Freakonomics' van Steven Levitt en Stephen Dubner?"
        },
        options: [
          { en: "Stock market investing", es: "Inversión en bolsa", de: "Börseninvestitionen", nl: "Beursbeleggingen" },
          { en: "Hidden side of economics in everyday life", es: "Lado oculto de la economía en la vida cotidiana", de: "Verborgene Seite der Ökonomie im Alltag", nl: "Verborgen kant van economie in het dagelijks leven" },
          { en: "International trade", es: "Comercio internacional", de: "Internationaler Handel", nl: "Internationale handel" },
          { en: "Corporate finance", es: "Finanzas corporativas", de: "Unternehmensfinanzen", nl: "Bedrijfsfinanciering" }
        ],
        correct: 1,
        explanation: {
          en: "The book uses economic theory to explore diverse subjects, revealing the hidden side of everything through data analysis.",
          es: "El libro utiliza la teoría económica para explorar temas diversos, revelando el lado oculto de todo a través del análisis de datos.",
          de: "Das Buch verwendet Wirtschaftstheorie, um verschiedene Themen zu erforschen und die verborgene Seite von allem durch Datenanalyse zu enthüllen.",
          nl: "Het boek gebruikt economische theorie om diverse onderwerpen te verkennen en onthult de verborgen kant van alles door data-analyse."
        }
      },
      {
        question: {
          en: "Who wrote 'The Double Helix' about the discovery of DNA structure?",
          es: "¿Quién escribió 'La doble hélice' sobre el descubrimiento de la estructura del ADN?",
          de: "Wer schrieb 'Die Doppel-Helix' über die Entdeckung der DNA-Struktur?",
          nl: "Wie schreef 'De dubbele helix' over de ontdekking van de DNA-structuur?"
        },
        options: [
          { en: "Francis Crick", es: "Francis Crick", de: "Francis Crick", nl: "Francis Crick" },
          { en: "Rosalind Franklin", es: "Rosalind Franklin", de: "Rosalind Franklin", nl: "Rosalind Franklin" },
          { en: "James Watson", es: "James Watson", de: "James Watson", nl: "James Watson" },
          { en: "Maurice Wilkins", es: "Maurice Wilkins", de: "Maurice Wilkins", nl: "Maurice Wilkins" }
        ],
        correct: 2,
        explanation: {
          en: "James Watson wrote this personal account of the discovery of DNA's double helix structure in 1953.",
          es: "James Watson escribió este relato personal del descubrimiento de la estructura de doble hélice del ADN en 1953.",
          de: "James Watson schrieb diesen persönlichen Bericht über die Entdeckung der Doppelhelix-Struktur der DNA im Jahr 1953.",
          nl: "James Watson schreef dit persoonlijke verslag van de ontdekking van de dubbele helix structuur van DNA in 1953."
        }
      },
      {
        question: {
          en: "What is 'Born a Crime' by Trevor Noah about?",
          es: "¿De qué trata 'Nacido en un crimen' de Trevor Noah?",
          de: "Worum geht es in 'Farbenblind' von Trevor Noah?",
          nl: "Waar gaat 'Born a Crime' van Trevor Noah over?"
        },
        options: [
          { en: "Comedy writing", es: "Escritura de comedia", de: "Comedy-Schreiben", nl: "Komedie schrijven" },
          { en: "Growing up in apartheid South Africa", es: "Crecer en Sudáfrica durante el apartheid", de: "Aufwachsen im Apartheid-Südafrika", nl: "Opgroeien in apartheid Zuid-Afrika" },
          { en: "Television production", es: "Producción televisiva", de: "Fernsehproduktion", nl: "Televisieproductie" },
          { en: "Immigration to America", es: "Inmigración a América", de: "Einwanderung nach Amerika", nl: "Immigratie naar Amerika" }
        ],
        correct: 1,
        explanation: {
          en: "Trevor Noah's memoir describes growing up mixed-race in apartheid South Africa, where his birth was literally a crime.",
          es: "Las memorias de Trevor Noah describen crecer mestizo en Sudáfrica durante el apartheid, donde su nacimiento fue literalmente un crimen.",
          de: "Trevor Noahs Memoiren beschreiben sein Aufwachsen als Mischling im Apartheid-Südafrika, wo seine Geburt buchstäblich ein Verbrechen war.",
          nl: "Trevor Noahs memoires beschrijven het opgroeien als gemengd ras in apartheid Zuid-Afrika, waar zijn geboorte letterlijk een misdaad was."
        }
      },
      {
        question: {
          en: "Who wrote 'The Emperor of All Maladies: A Biography of Cancer'?",
          es: "¿Quién escribió 'El emperador de todos los males: Una biografía del cáncer'?",
          de: "Wer schrieb 'Der König aller Krankheiten: Krebs - eine Biografie'?",
          nl: "Wie schreef 'De keizer van alle ziektes: Een biografie van kanker'?"
        },
        options: [
          { en: "Atul Gawande", es: "Atul Gawande", de: "Atul Gawande", nl: "Atul Gawande" },
          { en: "Siddhartha Mukherjee", es: "Siddhartha Mukherjee", de: "Siddhartha Mukherjee", nl: "Siddhartha Mukherjee" },
          { en: "Paul Kalanithi", es: "Paul Kalanithi", de: "Paul Kalanithi", nl: "Paul Kalanithi" },
          { en: "Abraham Verghese", es: "Abraham Verghese", de: "Abraham Verghese", nl: "Abraham Verghese" }
        ],
        correct: 1,
        explanation: {
          en: "Siddhartha Mukherjee, an oncologist, wrote this Pulitzer Prize-winning comprehensive history of cancer and its treatment.",
          es: "Siddhartha Mukherjee, un oncólogo, escribió esta historia comprensiva del cáncer y su tratamiento ganadora del Premio Pulitzer.",
          de: "Siddhartha Mukherjee, ein Onkologe, schrieb diese mit dem Pulitzer-Preis ausgezeichnete umfassende Geschichte des Krebses und seiner Behandlung.",
          nl: "Siddhartha Mukherjee, een oncoloog, schreef deze Pulitzer Prize-winnende uitgebreide geschiedenis van kanker en de behandeling ervan."
        }
      },
      {
        question: {
          en: "What is the focus of 'Bad Blood' by John Carreyrou?",
          es: "¿Cuál es el enfoque de 'Bad Blood' de John Carreyrou?",
          de: "Was ist der Fokus von 'Bad Blood' von John Carreyrou?",
          nl: "Wat is de focus van 'Bad Blood' van John Carreyrou?"
        },
        options: [
          { en: "Medical malpractice", es: "Negligencia médica", de: "Ärztliche Kunstfehler", nl: "Medische nalatigheid" },
          { en: "The Theranos scandal", es: "El escándalo de Theranos", de: "Der Theranos-Skandal", nl: "Het Theranos-schandaal" },
          { en: "Blood donation systems", es: "Sistemas de donación de sangre", de: "Blutspendensysteme", nl: "Bloeddonatiesystemen" },
          { en: "Pharmaceutical industry", es: "Industria farmacéutica", de: "Pharmaindustrie", nl: "Farmaceutische industrie" }
        ],
        correct: 1,
        explanation: {
          en: "John Carreyrou's book exposes the fraudulent blood-testing company Theranos and its founder Elizabeth Holmes.",
          es: "El libro de John Carreyrou expone la compañía fraudulenta de análisis de sangre Theranos y su fundadora Elizabeth Holmes.",
          de: "John Carreyrous Buch enthüllt das betrügerische Bluttest-Unternehmen Theranos und seine Gründerin Elizabeth Holmes.",
          nl: "John Carreyrous boek onthult het frauduleuze bloedtestbedrijf Theranos en de oprichter Elizabeth Holmes."
        }
      },
      {
        question: {
          en: "Who wrote 'Quiet: The Power of Introverts'?",
          es: "¿Quién escribió 'El poder de los introvertidos'?",
          de: "Wer schrieb 'Still: Die Bedeutung von Introvertierten'?",
          nl: "Wie schreef 'Stilte: De kracht van introverten'?"
        },
        options: [
          { en: "Brene Brown", es: "Brene Brown", de: "Brene Brown", nl: "Brene Brown" },
          { en: "Susan Cain", es: "Susan Cain", de: "Susan Cain", nl: "Susan Cain" },
          { en: "Carol Dweck", es: "Carol Dweck", de: "Carol Dweck", nl: "Carol Dweck" },
          { en: "Angela Duckworth", es: "Angela Duckworth", de: "Angela Duckworth", nl: "Angela Duckworth" }
        ],
        correct: 1,
        explanation: {
          en: "Susan Cain wrote this book exploring how introverts are undervalued and how they bring extraordinary talents to the world.",
          es: "Susan Cain escribió este libro explorando cómo los introvertidos son subestimados y cómo aportan talentos extraordinarios al mundo.",
          de: "Susan Cain schrieb dieses Buch, das erforscht, wie Introvertierte unterbewertet werden und welche außergewöhnlichen Talente sie der Welt bringen.",
          nl: "Susan Cain schreef dit boek over hoe introverten worden ondergewaardeerd en hoe zij buitengewone talenten naar de wereld brengen."
        }
      },
      {
        question: {
          en: "What is 'Man's Search for Meaning' by Viktor Frankl based on?",
          es: "¿En qué se basa 'El hombre en busca de sentido' de Viktor Frankl?",
          de: "Worauf basiert 'Man's Search for Meaning' von Viktor Frankl?",
          nl: "Waarop is 'De zin van het bestaan' van Viktor Frankl gebaseerd?"
        },
        options: [
          { en: "His psychiatric practice", es: "Su práctica psiquiátrica", de: "Seine psychiatrische Praxis", nl: "Zijn psychiatrische praktijk" },
          { en: "His experiences in Nazi concentration camps", es: "Sus experiencias en campos de concentración nazis", de: "Seine Erfahrungen in Nazi-Konzentrationslagern", nl: "Zijn ervaringen in nazi-concentratiekampen" },
          { en: "Clinical studies", es: "Estudios clínicos", de: "Klinische Studien", nl: "Klinische studies" },
          { en: "Philosophical research", es: "Investigación filosófica", de: "Philosophische Forschung", nl: "Filosofisch onderzoek" }
        ],
        correct: 1,
        explanation: {
          en: "Frankl's book is based on his experiences as a prisoner in Nazi concentration camps and how he found meaning in suffering.",
          es: "El libro de Frankl se basa en sus experiencias como prisionero en campos de concentración nazis y cómo encontró significado en el sufrimiento.",
          de: "Frankls Buch basiert auf seinen Erfahrungen als Gefangener in Nazi-Konzentrationslagern und wie er Sinn im Leiden fand.",
          nl: "Frankls boek is gebaseerd op zijn ervaringen als gevangene in nazi-concentratiekampen en hoe hij betekenis vond in lijden."
        }
      },
      {
        question: {
          en: "Who authored 'The Omnivore's Dilemma'?",
          es: "¿Quién escribió 'El dilema del omnívoro'?",
          de: "Wer schrieb 'Das Omnivoren-Dilemma'?",
          nl: "Wie schreef 'Het dilemma van de omnivoor'?"
        },
        options: [
          { en: "Eric Schlosser", es: "Eric Schlosser", de: "Eric Schlosser", nl: "Eric Schlosser" },
          { en: "Michael Pollan", es: "Michael Pollan", de: "Michael Pollan", nl: "Michael Pollan" },
          { en: "Mark Bittman", es: "Mark Bittman", de: "Mark Bittman", nl: "Mark Bittman" },
          { en: "Dan Barber", es: "Dan Barber", de: "Dan Barber", nl: "Dan Barber" }
        ],
        correct: 1,
        explanation: {
          en: "Michael Pollan wrote this book examining the American food chain and the ethical, environmental, and health implications of our food choices.",
          es: "Michael Pollan escribió este libro examinando la cadena alimentaria estadounidense y las implicaciones éticas, ambientales y de salud de nuestras elecciones alimentarias.",
          de: "Michael Pollan schrieb dieses Buch, das die amerikanische Nahrungskette und die ethischen, ökologischen und gesundheitlichen Auswirkungen unserer Lebensmittelwahl untersucht.",
          nl: "Michael Pollan schreef dit boek over de Amerikaanse voedselketen en de ethische, milieu- en gezondheidsimplicaties van onze voedselkeuzes."
        }
      },
      {
        question: {
          en: "What is 'Becoming' by Michelle Obama?",
          es: "¿Qué es 'Mi historia' de Michelle Obama?",
          de: "Was ist 'Becoming' von Michelle Obama?",
          nl: "Wat is 'Becoming' van Michelle Obama?"
        },
        options: [
          { en: "A political manifesto", es: "Un manifiesto político", de: "Ein politisches Manifest", nl: "Een politiek manifest" },
          { en: "Her memoir", es: "Sus memorias", de: "Ihre Memoiren", nl: "Haar memoires" },
          { en: "A policy handbook", es: "Un manual de políticas", de: "Ein Politikhandbuch", nl: "Een beleidshandboek" },
          { en: "A biography of Barack Obama", es: "Una biografía de Barack Obama", de: "Eine Biografie von Barack Obama", nl: "Een biografie van Barack Obama" }
        ],
        correct: 1,
        explanation: {
          en: "Michelle Obama's memoir chronicles her life from childhood in Chicago to her years as First Lady of the United States.",
          es: "Las memorias de Michelle Obama relatan su vida desde la infancia en Chicago hasta sus años como Primera Dama de los Estados Unidos.",
          de: "Michelle Obamas Memoiren erzählen ihr Leben von der Kindheit in Chicago bis zu ihren Jahren als First Lady der Vereinigten Staaten.",
          nl: "Michelle Obamas memoires vertellen over haar leven vanaf haar kindertijd in Chicago tot haar jaren als First Lady van de Verenigde Staten."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  } else if (typeof window !== 'undefined') {
    window.level2 = level2;
  }
})();
