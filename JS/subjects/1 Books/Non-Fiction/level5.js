// Quiz Template - Level 5: Boeken - Non-fictie
(function() {
  const level5 = {
    name: {
      en: "Non-Fiction Books",
      es: "Libros de No Ficción",
      de: "Sachbücher",
      nl: "Non-fictie Boeken"
    },
    questions: [
      {
        question: {
          en: "Who wrote 'A Room of One's Own', an extended essay on women and fiction?",
          es: "¿Quién escribió 'Una habitación propia', un ensayo extenso sobre mujeres y ficción?",
          de: "Wer schrieb 'Ein Zimmer für sich allein', einen erweiterten Essay über Frauen und Fiktion?",
          nl: "Wie schreef 'A Room of One's Own', een uitgebreid essay over vrouwen en fictie?"
        },
        options: [
          { en: "Virginia Woolf", es: "Virginia Woolf", de: "Virginia Woolf", nl: "Virginia Woolf" },
          { en: "Simone de Beauvoir", es: "Simone de Beauvoir", de: "Simone de Beauvoir", nl: "Simone de Beauvoir" },
          { en: "Germaine Greer", es: "Germaine Greer", de: "Germaine Greer", nl: "Germaine Greer" },
          { en: "Mary Wollstonecraft", es: "Mary Wollstonecraft", de: "Mary Wollstonecraft", nl: "Mary Wollstonecraft" }
        ],
        correct: 0,
        explanation: {
          en: "Virginia Woolf's 1929 essay argues that 'a woman must have money and a room of her own if she is to write fiction.'",
          es: "El ensayo de Virginia Woolf de 1929 argumenta que 'una mujer debe tener dinero y una habitación propia si quiere escribir ficción.'",
          de: "Virginia Woolfs Essay von 1929 argumentiert, dass 'eine Frau Geld und ein eigenes Zimmer haben muss, wenn sie Fiktion schreiben will.'",
          nl: "Virginia Woolfs essay uit 1929 betoogt dat 'een vrouw geld en een eigen kamer moet hebben als ze fictie wil schrijven.'"
        }
      },
      {
        question: {
          en: "What is 'The Shock Doctrine' by Naomi Klein about?",
          es: "¿De qué trata 'La doctrina del shock' de Naomi Klein?",
          de: "Worum geht es in 'Die Schock-Strategie' von Naomi Klein?",
          nl: "Waar gaat 'The Shock Doctrine' van Naomi Klein over?"
        },
        options: [
          { en: "Medical trauma treatment", es: "Tratamiento de trauma médico", de: "Medizinische Traumabehandlung", nl: "Medische traumabehandeling" },
          { en: "Disaster capitalism and economic policies", es: "Capitalismo de desastre y políticas económicas", de: "Katastrophen-Kapitalismus und Wirtschaftspolitik", nl: "Rampkapitalisme en economisch beleid" },
          { en: "Electrical engineering", es: "Ingeniería eléctrica", de: "Elektrotechnik", nl: "Elektrotechniek" },
          { en: "Military tactics", es: "Tácticas militares", de: "Militärtaktiken", nl: "Militaire tactieken" }
        ],
        correct: 1,
        explanation: {
          en: "Naomi Klein argues that free-market policies are often imposed on countries during times of crisis or shock, when populations are too disoriented to resist.",
          es: "Naomi Klein argumenta que las políticas de libre mercado a menudo se imponen a los países durante tiempos de crisis o shock, cuando las poblaciones están demasiado desorientadas para resistir.",
          de: "Naomi Klein argumentiert, dass Freimarktpolitik oft Ländern in Krisen- oder Schockzeiten aufgezwungen wird, wenn die Bevölkerung zu desorientiert ist, um Widerstand zu leisten.",
          nl: "Naomi Klein betoogt dat vrije-marktbeleid vaak aan landen wordt opgelegd tijdens crises of schokken, wanneer bevolkingen te gedesoriënteerd zijn om weerstand te bieden."
        }
      },
      {
        question: {
          en: "Who authored 'The Histories', one of the earliest historical texts?",
          es: "¿Quién escribió 'Las Historias', uno de los primeros textos históricos?",
          de: "Wer schrieb 'Die Historien', einen der frühesten historischen Texte?",
          nl: "Wie schreef 'De Historiën', een van de vroegste historische teksten?"
        },
        options: [
          { en: "Thucydides", es: "Tucídides", de: "Thukydides", nl: "Thucydides" },
          { en: "Herodotus", es: "Heródoto", de: "Herodot", nl: "Herodotus" },
          { en: "Plutarch", es: "Plutarco", de: "Plutarch", nl: "Plutarchus" },
          { en: "Xenophon", es: "Jenofonte", de: "Xenophon", nl: "Xenophon" }
        ],
        correct: 1,
        explanation: {
          en: "Herodotus, often called the 'Father of History', wrote The Histories in the 5th century BC, documenting the Greco-Persian Wars and surrounding cultures.",
          es: "Heródoto, a menudo llamado el 'Padre de la Historia', escribió Las Historias en el siglo V a.C., documentando las Guerras Greco-Persas y las culturas circundantes.",
          de: "Herodot, oft 'Vater der Geschichte' genannt, schrieb Die Historien im 5. Jahrhundert v. Chr. und dokumentierte die Griechisch-Persischen Kriege und umgebende Kulturen.",
          nl: "Herodotus, vaak de 'Vader van de Geschiedenis' genoemd, schreef De Historiën in de 5e eeuw voor Christus, waarin de Grieks-Perzische oorlogen en omliggende culturen worden gedocumenteerd."
        }
      },
      {
        question: {
          en: "What is 'The Jungle' by Upton Sinclair primarily about?",
          es: "¿De qué trata principalmente 'La jungla' de Upton Sinclair?",
          de: "Worum geht es hauptsächlich in 'Der Dschungel' von Upton Sinclair?",
          nl: "Waar gaat 'The Jungle' van Upton Sinclair hoofdzakelijk over?"
        },
        options: [
          { en: "Amazon rainforest exploration", es: "Exploración de la selva amazónica", de: "Amazonas-Regenwald-Erforschung", nl: "Amazone regenwoud verkenning" },
          { en: "Conditions in Chicago's meatpacking industry", es: "Condiciones en la industria cárnica de Chicago", de: "Bedingungen in Chicagos Fleischverpackungsindustrie", nl: "Omstandigheden in Chicago's vleesverwerkende industrie" },
          { en: "Wildlife conservation", es: "Conservación de la vida silvestre", de: "Wildtierschutz", nl: "Natuurbehoud" },
          { en: "Jungle warfare tactics", es: "Tácticas de guerra en la selva", de: "Dschungelkriegstaktiken", nl: "Jungle oorlogstactieken" }
        ],
        correct: 1,
        explanation: {
          en: "Upton Sinclair's 1906 novel exposed horrific working conditions and unsanitary practices in the meatpacking industry, leading to food safety reforms.",
          es: "La novela de Upton Sinclair de 1906 expuso condiciones laborales horribles y prácticas insalubres en la industria cárnica, llevando a reformas de seguridad alimentaria.",
          de: "Upton Sinclairs Roman von 1906 enthüllte schreckliche Arbeitsbedingungen und unhygienische Praktiken in der Fleischverpackungsindustrie, was zu Lebensmittelsicherheitsreformen führte.",
          nl: "Upton Sinclairs roman uit 1906 onthulde verschrikkelijke arbeidsomstandigheden en onhygiënische praktijken in de vleesverwerkende industrie, wat leidde tot voedselveiligheidshervormingen."
        }
      },
      {
        question: {
          en: "Who wrote 'The Gulag Archipelago', documenting the Soviet prison camp system?",
          es: "¿Quién escribió 'Archipiélago Gulag', documentando el sistema de campos de prisión soviéticos?",
          de: "Wer schrieb 'Der Archipel Gulag', der das sowjetische Lagersystem dokumentiert?",
          nl: "Wie schreef 'De Goelag Archipel', waarin het Sovjet gevangenenkampsysteem wordt gedocumenteerd?"
        },
        options: [
          { en: "Boris Pasternak", es: "Borís Pasternak", de: "Boris Pasternak", nl: "Boris Pasternak" },
          { en: "Aleksandr Solzhenitsyn", es: "Aleksandr Solzhenitsyn", de: "Alexander Solschenizyn", nl: "Aleksandr Solzjenitsyn" },
          { en: "Mikhail Bulgakov", es: "Mijaíl Bulgákov", de: "Michail Bulgakow", nl: "Michail Boelgakov" },
          { en: "Andrei Sakharov", es: "Andréi Sájarov", de: "Andrei Sacharow", nl: "Andrej Sacharov" }
        ],
        correct: 1,
        explanation: {
          en: "Aleksandr Solzhenitsyn, who spent years in Soviet labor camps himself, wrote this comprehensive exposé of the gulag system, published in 1973.",
          es: "Aleksandr Solzhenitsyn, quien pasó años en campos de trabajo soviéticos él mismo, escribió esta exposición completa del sistema gulag, publicada en 1973.",
          de: "Alexander Solschenizyn, der selbst Jahre in sowjetischen Arbeitslagern verbrachte, schrieb diese umfassende Enthüllung des Gulag-Systems, veröffentlicht 1973.",
          nl: "Aleksandr Solzjenitsyn, die zelf jaren in Sovjet arbeidskampen doorbracht, schreef deze uitgebreide onthulling van het goelagsysteem, gepubliceerd in 1973."
        }
      },
      {
        question: {
          en: "What is 'The Souls of Black Folk' by W.E.B. Du Bois about?",
          es: "¿De qué trata 'Las almas del pueblo negro' de W.E.B. Du Bois?",
          de: "Worum geht es in 'Die Seelen der Schwarzen' von W.E.B. Du Bois?",
          nl: "Waar gaat 'The Souls of Black Folk' van W.E.B. Du Bois over?"
        },
        options: [
          { en: "African mythology", es: "Mitología africana", de: "Afrikanische Mythologie", nl: "Afrikaanse mythologie" },
          { en: "The African American experience and 'double consciousness'", es: "La experiencia afroamericana y la 'doble conciencia'", de: "Die afroamerikanische Erfahrung und das 'doppelte Bewusstsein'", nl: "De Afro-Amerikaanse ervaring en 'dubbel bewustzijn'" },
          { en: "Music history", es: "Historia de la música", de: "Musikgeschichte", nl: "Muziekgeschiedenis" },
          { en: "Religious studies", es: "Estudios religiosos", de: "Religionswissenschaft", nl: "Religiestudies" }
        ],
        correct: 1,
        explanation: {
          en: "W.E.B. Du Bois's 1903 work is a seminal text in African American literature, introducing the concept of 'double consciousness' - the sense of always looking at oneself through the eyes of others.",
          es: "La obra de W.E.B. Du Bois de 1903 es un texto fundamental en la literatura afroamericana, introduciendo el concepto de 'doble conciencia' - el sentido de siempre mirarse a sí mismo a través de los ojos de otros.",
          de: "W.E.B. Du Bois' Werk von 1903 ist ein grundlegender Text in der afroamerikanischen Literatur und führt das Konzept des 'doppelten Bewusstseins' ein - das Gefühl, sich immer durch die Augen anderer zu sehen.",
          nl: "W.E.B. Du Bois' werk uit 1903 is een seminale tekst in Afro-Amerikaanse literatuur, waarin het concept van 'dubbel bewustzijn' wordt geïntroduceerd - het gevoel jezelf altijd te zien door de ogen van anderen."
        }
      },
      {
        question: {
          en: "Who wrote 'The Varieties of Religious Experience'?",
          es: "¿Quién escribió 'Las variedades de la experiencia religiosa'?",
          de: "Wer schrieb 'Die Vielfalt religiöser Erfahrung'?",
          nl: "Wie schreef 'The Varieties of Religious Experience'?"
        },
        options: [
          { en: "Søren Kierkegaard", es: "Søren Kierkegaard", de: "Søren Kierkegaard", nl: "Søren Kierkegaard" },
          { en: "William James", es: "William James", de: "William James", nl: "William James" },
          { en: "Friedrich Nietzsche", es: "Friedrich Nietzsche", de: "Friedrich Nietzsche", nl: "Friedrich Nietzsche" },
          { en: "Bertrand Russell", es: "Bertrand Russell", de: "Bertrand Russell", nl: "Bertrand Russell" }
        ],
        correct: 1,
        explanation: {
          en: "William James, the American philosopher and psychologist, published this influential study of religious experiences and their psychological aspects in 1902.",
          es: "William James, el filósofo y psicólogo estadounidense, publicó este influyente estudio de experiencias religiosas y sus aspectos psicológicos en 1902.",
          de: "William James, der amerikanische Philosoph und Psychologe, veröffentlichte 1902 diese einflussreiche Studie über religiöse Erfahrungen und ihre psychologischen Aspekte.",
          nl: "William James, de Amerikaanse filosoof en psycholoog, publiceerde deze invloedrijke studie van religieuze ervaringen en hun psychologische aspecten in 1902."
        }
      },
      {
        question: {
          en: "What is 'Civilization and Its Discontents' by Sigmund Freud about?",
          es: "¿De qué trata 'El malestar en la cultura' de Sigmund Freud?",
          de: "Worum geht es in 'Das Unbehagen in der Kultur' von Sigmund Freud?",
          nl: "Waar gaat 'Civilization and Its Discontents' van Sigmund Freud over?"
        },
        options: [
          { en: "Ancient civilizations", es: "Civilizaciones antiguas", de: "Antike Zivilisationen", nl: "Oude beschavingen" },
          { en: "Tension between individual desires and societal demands", es: "Tensión entre deseos individuales y demandas sociales", de: "Spannung zwischen individuellen Wünschen und gesellschaftlichen Anforderungen", nl: "Spanning tussen individuele verlangens en maatschappelijke eisen" },
          { en: "Urban planning", es: "Planificación urbana", de: "Stadtplanung", nl: "Stadsplanning" },
          { en: "Economic development", es: "Desarrollo económico", de: "Wirtschaftliche Entwicklung", nl: "Economische ontwikkeling" }
        ],
        correct: 1,
        explanation: {
          en: "Freud's 1930 work explores the fundamental tension between civilization's demands for order and the individual's desire for freedom and instinctual gratification.",
          es: "La obra de Freud de 1930 explora la tensión fundamental entre las demandas de orden de la civilización y el deseo del individuo de libertad y gratificación instintiva.",
          de: "Freuds Werk von 1930 erforscht die grundlegende Spannung zwischen den Ordnungsanforderungen der Zivilisation und dem Wunsch des Individuums nach Freiheit und triebhafter Befriedigung.",
          nl: "Freuds werk uit 1930 verkent de fundamentele spanning tussen de eisen van beschaving voor orde en het verlangen van het individu naar vrijheid en instinctieve bevrediging."
        }
      },
      {
        question: {
          en: "Who wrote 'Operating Manual for Spaceship Earth'?",
          es: "¿Quién escribió 'Manual de operaciones para la nave espacial Tierra'?",
          de: "Wer schrieb 'Bedienungsanleitung für das Raumschiff Erde'?",
          nl: "Wie schreef 'Operating Manual for Spaceship Earth'?"
        },
        options: [
          { en: "Carl Sagan", es: "Carl Sagan", de: "Carl Sagan", nl: "Carl Sagan" },
          { en: "Buckminster Fuller", es: "Buckminster Fuller", de: "Buckminster Fuller", nl: "Buckminster Fuller" },
          { en: "Rachel Carson", es: "Rachel Carson", de: "Rachel Carson", nl: "Rachel Carson" },
          { en: "James Lovelock", es: "James Lovelock", de: "James Lovelock", nl: "James Lovelock" }
        ],
        correct: 1,
        explanation: {
          en: "Buckminster Fuller's 1969 book presents Earth as a spacecraft with limited resources, arguing for comprehensive thinking and sustainable use of resources.",
          es: "El libro de Buckminster Fuller de 1969 presenta la Tierra como una nave espacial con recursos limitados, argumentando por pensamiento integral y uso sostenible de recursos.",
          de: "Buckminster Fullers Buch von 1969 präsentiert die Erde als Raumschiff mit begrenzten Ressourcen und plädiert für umfassendes Denken und nachhaltige Ressourcennutzung.",
          nl: "Buckminster Fullers boek uit 1969 presenteert de Aarde als een ruimtevaartuig met beperkte middelen, pleitend voor alomvattend denken en duurzaam gebruik van bronnen."
        }
      },
      {
        question: {
          en: "What is 'The Interpretation of Dreams' by Sigmund Freud about?",
          es: "¿De qué trata 'La interpretación de los sueños' de Sigmund Freud?",
          de: "Worum geht es in 'Die Traumdeutung' von Sigmund Freud?",
          nl: "Waar gaat 'The Interpretation of Dreams' van Sigmund Freud over?"
        },
        options: [
          { en: "Sleep disorders", es: "Trastornos del sueño", de: "Schlafstörungen", nl: "Slaapstoornissen" },
          { en: "Dreams as wish fulfillment and the unconscious mind", es: "Los sueños como cumplimiento de deseos y la mente inconsciente", de: "Träume als Wunscherfüllung und das Unbewusste", nl: "Dromen als wensvervulling en het onbewuste" },
          { en: "Prophecy and fortune telling", es: "Profecía y adivinación", de: "Prophezeiung und Wahrsagerei", nl: "Profetie en waarzeggerij" },
          { en: "Sleep patterns", es: "Patrones de sueño", de: "Schlafmuster", nl: "Slaappatronen" }
        ],
        correct: 1,
        explanation: {
          en: "Published in 1899, this foundational work of psychoanalysis argues that dreams are wish fulfillments and provides methods for interpreting them to understand the unconscious.",
          es: "Publicado en 1899, esta obra fundamental del psicoanálisis argumenta que los sueños son cumplimientos de deseos y proporciona métodos para interpretarlos para entender el inconsciente.",
          de: "Dieses 1899 veröffentlichte grundlegende Werk der Psychoanalyse argumentiert, dass Träume Wunscherfüllungen sind und bietet Methoden zu ihrer Deutung, um das Unbewusste zu verstehen.",
          nl: "Gepubliceerd in 1899, betoogt dit fundamentele werk van psychoanalyse dat dromen wensvervullingen zijn en biedt methoden om ze te interpreteren om het onbewuste te begrijpen."
        }
      },
      {
        question: {
          en: "Who authored 'The Social Contract', discussing political philosophy?",
          es: "¿Quién escribió 'El contrato social', discutiendo filosofía política?",
          de: "Wer schrieb 'Der Gesellschaftsvertrag', über politische Philosophie?",
          nl: "Wie schreef 'Het sociaal contract', over politieke filosofie?"
        },
        options: [
          { en: "John Locke", es: "John Locke", de: "John Locke", nl: "John Locke" },
          { en: "Thomas Hobbes", es: "Thomas Hobbes", de: "Thomas Hobbes", nl: "Thomas Hobbes" },
          { en: "Jean-Jacques Rousseau", es: "Jean-Jacques Rousseau", de: "Jean-Jacques Rousseau", nl: "Jean-Jacques Rousseau" },
          { en: "Voltaire", es: "Voltaire", de: "Voltaire", nl: "Voltaire" }
        ],
        correct: 2,
        explanation: {
          en: "Jean-Jacques Rousseau's 1762 treatise explores how individuals can remain free while living in society, famously beginning 'Man is born free, and everywhere he is in chains.'",
          es: "El tratado de Jean-Jacques Rousseau de 1762 explora cómo los individuos pueden permanecer libres mientras viven en sociedad, comenzando famosamente 'El hombre nace libre, pero en todas partes está encadenado.'",
          de: "Jean-Jacques Rousseaus Abhandlung von 1762 erforscht, wie Individuen frei bleiben können, während sie in der Gesellschaft leben, beginnend berühmt mit 'Der Mensch ist frei geboren, und überall liegt er in Ketten.'",
          nl: "Jean-Jacques Rousseaus verhandeling uit 1762 verkent hoe individuen vrij kunnen blijven terwijl ze in de samenleving leven, beroemd beginnend met 'De mens wordt vrij geboren, maar overal ligt hij in ketenen.'"
        }
      },
      {
        question: {
          en: "What is 'Beyond Good and Evil' by Friedrich Nietzsche about?",
          es: "¿De qué trata 'Más allá del bien y del mal' de Friedrich Nietzsche?",
          de: "Worum geht es in 'Jenseits von Gut und Böse' von Friedrich Nietzsche?",
          nl: "Waar gaat 'Beyond Good and Evil' van Friedrich Nietzsche over?"
        },
        options: [
          { en: "Religious ethics", es: "Ética religiosa", de: "Religiöse Ethik", nl: "Religieuze ethiek" },
          { en: "Critique of traditional morality and philosophy", es: "Crítica de la moralidad y filosofía tradicionales", de: "Kritik an traditioneller Moral und Philosophie", nl: "Kritiek op traditionele moraliteit en filosofie" },
          { en: "Criminal psychology", es: "Psicología criminal", de: "Kriminalpsychologie", nl: "Criminele psychologie" },
          { en: "Medieval history", es: "Historia medieval", de: "Mittelalterliche Geschichte", nl: "Middeleeuwse geschiedenis" }
        ],
        correct: 1,
        explanation: {
          en: "Nietzsche's 1886 work critiques traditional European moral philosophy and proposes a new approach to values beyond conventional notions of good and evil.",
          es: "La obra de Nietzsche de 1886 critica la filosofía moral europea tradicional y propone un nuevo enfoque de valores más allá de las nociones convencionales de bien y mal.",
          de: "Nietzsches Werk von 1886 kritisiert die traditionelle europäische Moralphilosophie und schlägt einen neuen Ansatz zu Werten jenseits konventioneller Vorstellungen von Gut und Böse vor.",
          nl: "Nietzsches werk uit 1886 bekritiseert traditionele Europese moraalfilosofie en stelt een nieuwe benadering van waarden voor voorbij conventionele noties van goed en kwaad."
        }
      },
      {
        question: {
          en: "Who wrote 'The Protestant Ethic and the Spirit of Capitalism'?",
          es: "¿Quién escribió 'La ética protestante y el espíritu del capitalismo'?",
          de: "Wer schrieb 'Die protestantische Ethik und der Geist des Kapitalismus'?",
          nl: "Wie schreef 'The Protestant Ethic and the Spirit of Capitalism'?"
        },
        options: [
          { en: "Karl Marx", es: "Karl Marx", de: "Karl Marx", nl: "Karl Marx" },
          { en: "Max Weber", es: "Max Weber", de: "Max Weber", nl: "Max Weber" },
          { en: "Adam Smith", es: "Adam Smith", de: "Adam Smith", nl: "Adam Smith" },
          { en: "Émile Durkheim", es: "Émile Durkheim", de: "Émile Durkheim", nl: "Émile Durkheim" }
        ],
        correct: 1,
        explanation: {
          en: "Max Weber's 1905 sociological study argues that Protestant ethics, particularly Calvinism, played a crucial role in creating the capitalist spirit and economic system.",
          es: "El estudio sociológico de Max Weber de 1905 argumenta que la ética protestante, particularmente el calvinismo, jugó un papel crucial en la creación del espíritu capitalista y el sistema económico.",
          de: "Max Webers soziologische Studie von 1905 argumentiert, dass die protestantische Ethik, besonders der Calvinismus, eine entscheidende Rolle bei der Entstehung des kapitalistischen Geistes und Wirtschaftssystems spielte.",
          nl: "Max Webers sociologische studie uit 1905 betoogt dat protestantse ethiek, met name het calvinisme, een cruciale rol speelde bij het creëren van de kapitalistische geest en economisch systeem."
        }
      },
      {
        question: {
          en: "What is 'The Order of Things' by Michel Foucault about?",
          es: "¿De qué trata 'Las palabras y las cosas' de Michel Foucault?",
          de: "Worum geht es in 'Die Ordnung der Dinge' von Michel Foucault?",
          nl: "Waar gaat 'The Order of Things' van Michel Foucault over?"
        },
        options: [
          { en: "Organization systems", es: "Sistemas de organización", de: "Organisationssysteme", nl: "Organisatiesystemen" },
          { en: "Archaeology of human sciences and knowledge systems", es: "Arqueología de las ciencias humanas y sistemas de conocimiento", de: "Archäologie der Humanwissenschaften und Wissenssysteme", nl: "Archeologie van menswetenschappen en kennissystemen" },
          { en: "Taxonomy of animals", es: "Taxonomía de animales", de: "Taxonomie von Tieren", nl: "Taxonomie van dieren" },
          { en: "Filing systems", es: "Sistemas de archivo", de: "Ablagesysteme", nl: "Archiefsy stemen" }
        ],
        correct: 1,
        explanation: {
          en: "Foucault's 1966 philosophical work examines how human sciences and knowledge systems have been organized throughout history, introducing his concept of 'episteme.'",
          es: "La obra filosófica de Foucault de 1966 examina cómo las ciencias humanas y los sistemas de conocimiento se han organizado a lo largo de la historia, introduciendo su concepto de 'episteme.'",
          de: "Foucaults philosophisches Werk von 1966 untersucht, wie Humanwissenschaften und Wissenssysteme im Laufe der Geschichte organisiert wurden, und führt sein Konzept der 'Episteme' ein.",
          nl: "Foucaults filosofische werk uit 1966 onderzoekt hoe menswetenschappen en kennissystemen door de geschiedenis heen zijn georganiseerd, waarbij hij zijn concept van 'episteme' introduceert."
        }
      },
      {
        question: {
          en: "Who wrote 'The Descent of Man', expanding on evolutionary theory?",
          es: "¿Quién escribió 'El origen del hombre', expandiendo la teoría evolutiva?",
          de: "Wer schrieb 'Die Abstammung des Menschen', um die Evolutionstheorie zu erweitern?",
          nl: "Wie schreef 'The Descent of Man', waarin de evolutietheorie wordt uitgebreid?"
        },
        options: [
          { en: "Thomas Huxley", es: "Thomas Huxley", de: "Thomas Huxley", nl: "Thomas Huxley" },
          { en: "Charles Darwin", es: "Charles Darwin", de: "Charles Darwin", nl: "Charles Darwin" },
          { en: "Alfred Russel Wallace", es: "Alfred Russel Wallace", de: "Alfred Russel Wallace", nl: "Alfred Russel Wallace" },
          { en: "Ernst Haeckel", es: "Ernst Haeckel", de: "Ernst Haeckel", nl: "Ernst Haeckel" }
        ],
        correct: 1,
        explanation: {
          en: "Charles Darwin published this 1871 book applying evolutionary theory specifically to human evolution and sexual selection.",
          es: "Charles Darwin publicó este libro de 1871 aplicando la teoría evolutiva específicamente a la evolución humana y la selección sexual.",
          de: "Charles Darwin veröffentlichte dieses Buch von 1871, das die Evolutionstheorie speziell auf die menschliche Evolution und sexuelle Selektion anwendet.",
          nl: "Charles Darwin publiceerde dit boek uit 1871 waarin de evolutietheorie specifiek wordt toegepast op menselijke evolutie en seksuele selectie."
        }
      },
      {
        question: {
          en: "What is 'The Innovator's Dilemma' by Clayton Christensen about?",
          es: "¿De qué trata 'El dilema del innovador' de Clayton Christensen?",
          de: "Worum geht es in 'The Innovator's Dilemma' von Clayton Christensen?",
          nl: "Waar gaat 'The Innovator's Dilemma' van Clayton Christensen over?"
        },
        options: [
          { en: "Patent law", es: "Ley de patentes", de: "Patentrecht", nl: "Octrooirecht" },
          { en: "Why successful companies fail due to disruptive innovation", es: "Por qué las empresas exitosas fracasan debido a la innovación disruptiva", de: "Warum erfolgreiche Unternehmen aufgrund disruptiver Innovation scheitern", nl: "Waarom succesvolle bedrijven falen door disruptieve innovatie" },
          { en: "Moral philosophy", es: "Filosofía moral", de: "Moralphilosophie", nl: "Moraalfilosofie" },
          { en: "Technology invention process", es: "Proceso de invención tecnológica", de: "Technologie-Erfindungsprozess", nl: "Technologie-uitvindingsproces" }
        ],
        correct: 1,
        explanation: {
          en: "Christensen's 1997 business book explains how successful companies can do everything 'right' yet still lose market leadership due to disruptive technologies.",
          es: "El libro de negocios de Christensen de 1997 explica cómo las empresas exitosas pueden hacer todo 'bien' y aún perder liderazgo de mercado debido a tecnologías disruptivas.",
          de: "Christensens Wirtschaftsbuch von 1997 erklärt, wie erfolgreiche Unternehmen alles 'richtig' machen können und dennoch Marktführerschaft aufgrund disruptiver Technologien verlieren.",
          nl: "Christensens bedrijfsboek uit 1997 legt uit hoe succesvolle bedrijven alles 'goed' kunnen doen en toch marktleiderschap verliezen door disruptieve technologieën."
        }
      },
      {
        question: {
          en: "Who wrote 'A Sand County Almanac', a conservation classic?",
          es: "¿Quién escribió 'A Sand County Almanac', un clásico de conservación?",
          de: "Wer schrieb 'A Sand County Almanac', einen Naturschutz-Klassiker?",
          nl: "Wie schreef 'A Sand County Almanac', een natuurbeschermingsklassieker?"
        },
        options: [
          { en: "Henry David Thoreau", es: "Henry David Thoreau", de: "Henry David Thoreau", nl: "Henry David Thoreau" },
          { en: "John Muir", es: "John Muir", de: "John Muir", nl: "John Muir" },
          { en: "Aldo Leopold", es: "Aldo Leopold", de: "Aldo Leopold", nl: "Aldo Leopold" },
          { en: "Rachel Carson", es: "Rachel Carson", de: "Rachel Carson", nl: "Rachel Carson" }
        ],
        correct: 2,
        explanation: {
          en: "Aldo Leopold's 1949 collection of essays introduced the 'land ethic,' arguing that humans should view themselves as members of the ecological community, not its masters.",
          es: "La colección de ensayos de Aldo Leopold de 1949 introdujo la 'ética de la tierra,' argumentando que los humanos deberían verse a sí mismos como miembros de la comunidad ecológica, no como sus maestros.",
          de: "Aldo Leopolds Essaysammlung von 1949 führte die 'Land-Ethik' ein und argumentierte, dass Menschen sich als Mitglieder der ökologischen Gemeinschaft sehen sollten, nicht als deren Herrscher.",
          nl: "Aldo Leopolds essaybundel uit 1949 introduceerde de 'landethiek,' met het argument dat mensen zichzelf moeten zien als leden van de ecologische gemeenschap, niet als meesters ervan."
        }
      },
      {
        question: {
          en: "What is 'The Feminine Mystique' author Betty Friedan known for coining?",
          es: "¿Por qué es conocida la autora de 'La mística de la feminidad', Betty Friedan?",
          de: "Wofür ist 'Der Weiblichkeitswahn'-Autorin Betty Friedan bekannt?",
          nl: "Waarvoor is 'The Feminine Mystique' auteur Betty Friedan bekend?"
        },
        options: [
          { en: "The term 'glass ceiling'", es: "El término 'techo de cristal'", de: "Den Begriff 'gläserne Decke'", nl: "De term 'glazen plafond'" },
          { en: "The phrase 'the problem that has no name'", es: "La frase 'el problema que no tiene nombre'", de: "Den Ausdruck 'das Problem ohne Namen'", nl: "De uitdrukking 'het probleem dat geen naam heeft'" },
          { en: "The concept of 'intersectionality'", es: "El concepto de 'interseccionalidad'", de: "Das Konzept der 'Intersektionalität'", nl: "Het concept van 'intersectionaliteit'" },
          { en: "The term 'sisterhood'", es: "El término 'hermandad'", de: "Den Begriff 'Schwesternschaft'", nl: "De term 'zusterschap'" }
        ],
        correct: 1,
        explanation: {
          en: "Betty Friedan famously described 'the problem that has no name' - the widespread unhappiness of educated housewives in 1950s-60s America who felt unfulfilled despite having everything society told them they should want.",
          es: "Betty Friedan describió famosamente 'el problema que no tiene nombre' - la infelicidad generalizada de las amas de casa educadas en América de los años 50-60 que se sentían insatisfechas a pesar de tener todo lo que la sociedad les decía que deberían querer.",
          de: "Betty Friedan beschrieb berühmt 'das Problem ohne Namen' - das weit verbreitete Unglück gebildeter Hausfrauen im Amerika der 1950er-60er Jahre, die sich unerfüllt fühlten, obwohl sie alles hatten, was die Gesellschaft ihnen sagte, dass sie wollen sollten.",
          nl: "Betty Friedan beschreef beroemd 'het probleem dat geen naam heeft' - het wijdverspreide ongeluk van opgeleide huisvrouwen in het Amerika van de jaren 50-60 die zich onvervuld voelden ondanks dat ze alles hadden wat de samenleving hen vertelde dat ze zouden moeten willen."
        }
      },
      {
        question: {
          en: "Who authored 'The History of the Peloponnesian War'?",
          es: "¿Quién escribió 'La Historia de la Guerra del Peloponeso'?",
          de: "Wer schrieb 'Die Geschichte des Peloponnesischen Krieges'?",
          nl: "Wie schreef 'The History of the Peloponnesian War'?"
        },
        options: [
          { en: "Herodotus", es: "Heródoto", de: "Herodot", nl: "Herodotus" },
          { en: "Thucydides", es: "Tucídides", de: "Thukydides", nl: "Thucydides" },
          { en: "Xenophon", es: "Jenofonte", de: "Xenophon", nl: "Xenophon" },
          { en: "Polybius", es: "Polibio", de: "Polybios", nl: "Polybius" }
        ],
        correct: 1,
        explanation: {
          en: "Thucydides, an Athenian general and historian, wrote this detailed account of the war between Athens and Sparta (431-404 BC), pioneering rigorous historical methodology.",
          es: "Tucídides, un general e historiador ateniense, escribió este relato detallado de la guerra entre Atenas y Esparta (431-404 a.C.), pionero en metodología histórica rigurosa.",
          de: "Thukydides, ein athenischer General und Historiker, schrieb diesen detaillierten Bericht über den Krieg zwischen Athen und Sparta (431-404 v. Chr.) und war ein Pionier strenger historischer Methodik.",
          nl: "Thucydides, een Atheense generaal en historicus, schreef dit gedetailleerde verslag van de oorlog tussen Athene en Sparta (431-404 voor Christus), baanbrekend in rigoureuze historische methodologie."
        }
      },
      {
        question: {
          en: "What is 'Discourse on Method' by René Descartes primarily about?",
          es: "¿De qué trata principalmente 'Discurso del método' de René Descartes?",
          de: "Worum geht es hauptsächlich in 'Abhandlung über die Methode' von René Descartes?",
          nl: "Waar gaat 'Discourse on Method' van René Descartes hoofdzakelijk over?"
        },
        options: [
          { en: "Teaching methods", es: "Métodos de enseñanza", de: "Lehrmethoden", nl: "Onderwijsmethoden" },
          { en: "Scientific and philosophical method, including 'I think, therefore I am'", es: "Método científico y filosófico, incluyendo 'Pienso, luego existo'", de: "Wissenschaftliche und philosophische Methode, einschließlich 'Ich denke, also bin ich'", nl: "Wetenschappelijke en filosofische methode, inclusief 'Ik denk, dus ik ben'" },
          { en: "Mathematical proofs", es: "Pruebas matemáticas", de: "Mathematische Beweise", nl: "Wiskundige bewijzen" },
          { en: "Religious practices", es: "Prácticas religiosas", de: "Religiöse Praktiken", nl: "Religieuze praktijken" }
        ],
        correct: 1,
        explanation: {
          en: "Descartes' 1637 work outlines his method for arriving at truth and contains his famous statement 'Cogito, ergo sum' (I think, therefore I am), foundational to modern Western philosophy.",
          es: "La obra de Descartes de 1637 describe su método para llegar a la verdad y contiene su famosa declaración 'Cogito, ergo sum' (Pienso, luego existo), fundamental para la filosofía occidental moderna.",
          de: "Descartes' Werk von 1637 beschreibt seine Methode zur Wahrheitsfindung und enthält seine berühmte Aussage 'Cogito, ergo sum' (Ich denke, also bin ich), grundlegend für die moderne westliche Philosophie.",
          nl: "Descartes' werk uit 1637 schetst zijn methode voor het bereiken van waarheid en bevat zijn beroemde uitspraak 'Cogito, ergo sum' (Ik denk, dus ik ben), fundamenteel voor de moderne westerse filosofie."
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
