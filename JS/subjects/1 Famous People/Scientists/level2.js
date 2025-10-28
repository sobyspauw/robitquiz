// Scientists Quiz - Level 2: Advanced Knowledge
(function() {
  const level2 = {
    name: {
      en: "Scientists Level 2",
      es: "Científicos Nivel 2",
      de: "Wissenschaftler Stufe 2",
      nl: "Wetenschappers Level 2"
    },
    questions: [
      {
        question: {
          en: "Which scientist discovered penicillin in 1928, revolutionizing medicine?",
          es: "¿Qué científico descubrió la penicilina en 1928, revolucionando la medicina?",
          de: "Welcher Wissenschaftler entdeckte 1928 Penicillin und revolutionierte die Medizin?",
          nl: "Welke wetenschapper ontdekte in 1928 penicilline en revolutioneerde de geneeskunde?"
        },
        options: [
          { en: "Alexander Fleming", es: "Alexander Fleming", de: "Alexander Fleming", nl: "Alexander Fleming" },
          { en: "Louis Pasteur", es: "Louis Pasteur", de: "Louis Pasteur", nl: "Louis Pasteur" },
          { en: "Robert Koch", es: "Robert Koch", de: "Robert Koch", nl: "Robert Koch" },
          { en: "Joseph Lister", es: "Joseph Lister", de: "Joseph Lister", nl: "Joseph Lister" }
        ],
        correct: 0,
        explanation: {
          en: "Alexander Fleming discovered penicillin accidentally when mold contaminated his bacterial cultures. This discovery led to the development of antibiotics, saving millions of lives. He won the Nobel Prize in Physiology or Medicine in 1945.",
          es: "Alexander Fleming descubrió la penicilina accidentalmente cuando el moho contaminó sus cultivos bacterianos. Este descubrimiento llevó al desarrollo de antibióticos, salvando millones de vidas. Ganó el Premio Nobel de Fisiología o Medicina en 1945.",
          de: "Alexander Fleming entdeckte Penicillin zufällig, als Schimmel seine Bakterienkulturen kontaminierte. Diese Entdeckung führte zur Entwicklung von Antibiotika und rettete Millionen von Leben. Er gewann 1945 den Nobelpreis für Physiologie oder Medizin.",
          nl: "Alexander Fleming ontdekte penicilline per ongeluk toen schimmel zijn bacterieculturen besmette. Deze ontdekking leidde tot de ontwikkeling van antibiotica en redde miljoenen levens. Hij won de Nobelprijs voor Fysiologie of Geneeskunde in 1945."
        }
      },
      {
        question: {
          en: "Which physicist developed the general theory of relativity?",
          es: "¿Qué físico desarrolló la teoría general de la relatividad?",
          de: "Welcher Physiker entwickelte die allgemeine Relativitätstheorie?",
          nl: "Welke natuurkundige ontwikkelde de algemene relativiteitstheorie?"
        },
        options: [
          { en: "Albert Einstein", es: "Albert Einstein", de: "Albert Einstein", nl: "Albert Einstein" },
          { en: "Isaac Newton", es: "Isaac Newton", de: "Isaac Newton", nl: "Isaac Newton" },
          { en: "Niels Bohr", es: "Niels Bohr", de: "Niels Bohr", nl: "Niels Bohr" },
          { en: "Max Planck", es: "Max Planck", de: "Max Planck", nl: "Max Planck" }
        ],
        correct: 0,
        explanation: {
          en: "Albert Einstein published his general theory of relativity in 1915, describing gravity as the curvature of spacetime. This theory has been confirmed by numerous experiments and is fundamental to modern physics and cosmology.",
          es: "Albert Einstein publicó su teoría general de la relatividad en 1915, describiendo la gravedad como la curvatura del espacio-tiempo. Esta teoría ha sido confirmada por numerosos experimentos y es fundamental para la física y cosmología modernas.",
          de: "Albert Einstein veröffentlichte 1915 seine allgemeine Relativitätstheorie, die Gravitation als Krümmung der Raumzeit beschreibt. Diese Theorie wurde durch zahlreiche Experimente bestätigt und ist grundlegend für moderne Physik und Kosmologie.",
          nl: "Albert Einstein publiceerde zijn algemene relativiteitstheorie in 1915, waarin hij zwaartekracht beschrijft als de kromming van ruimtetijd. Deze theorie is bevestigd door talrijke experimenten en is fundamenteel voor moderne natuurkunde en kosmologie."
        }
      },
      {
        question: {
          en: "Who is known as the father of modern chemistry for establishing the law of conservation of mass?",
          es: "¿Quién es conocido como el padre de la química moderna por establecer la ley de conservación de la masa?",
          de: "Wer gilt als Vater der modernen Chemie für die Aufstellung des Massenerhaltungssatzes?",
          nl: "Wie staat bekend als de vader van de moderne scheikunde voor het vaststellen van de wet van behoud van massa?"
        },
        options: [
          { en: "Antoine Lavoisier", es: "Antoine Lavoisier", de: "Antoine Lavoisier", nl: "Antoine Lavoisier" },
          { en: "Robert Boyle", es: "Robert Boyle", de: "Robert Boyle", nl: "Robert Boyle" },
          { en: "John Dalton", es: "John Dalton", de: "John Dalton", nl: "John Dalton" },
          { en: "Dmitri Mendeleev", es: "Dmitri Mendeléyev", de: "Dmitri Mendelejew", nl: "Dmitri Mendelejev" }
        ],
        correct: 0,
        explanation: {
          en: "Antoine Lavoisier established the law of conservation of mass, stating that matter is neither created nor destroyed in chemical reactions. He also helped develop a system for naming chemical compounds and discovered the role of oxygen in combustion.",
          es: "Antoine Lavoisier estableció la ley de conservación de la masa, afirmando que la materia no se crea ni se destruye en reacciones químicas. También ayudó a desarrollar un sistema para nombrar compuestos químicos y descubrió el papel del oxígeno en la combustión.",
          de: "Antoine Lavoisier stellte den Massenerhaltungssatz auf, der besagt, dass Materie in chemischen Reaktionen weder erzeugt noch zerstört wird. Er half auch, ein System zur Benennung chemischer Verbindungen zu entwickeln und entdeckte die Rolle von Sauerstoff bei der Verbrennung.",
          nl: "Antoine Lavoisier stelde de wet van behoud van massa vast, die stelt dat materie in chemische reacties niet wordt gecreëerd of vernietigd. Hij hielp ook een systeem te ontwikkelen voor het benoemen van chemische verbindingen en ontdekte de rol van zuurstof bij verbranding."
        }
      },
      {
        question: {
          en: "Which scientist proposed the heliocentric model of the solar system?",
          es: "¿Qué científico propuso el modelo heliocéntrico del sistema solar?",
          de: "Welcher Wissenschaftler schlug das heliozentrische Modell des Sonnensystems vor?",
          nl: "Welke wetenschapper stelde het heliocentrische model van het zonnestelsel voor?"
        },
        options: [
          { en: "Nicolaus Copernicus", es: "Nicolás Copérnico", de: "Nikolaus Kopernikus", nl: "Nicolaas Copernicus" },
          { en: "Galileo Galilei", es: "Galileo Galilei", de: "Galileo Galilei", nl: "Galileo Galilei" },
          { en: "Johannes Kepler", es: "Johannes Kepler", de: "Johannes Kepler", nl: "Johannes Kepler" },
          { en: "Tycho Brahe", es: "Tycho Brahe", de: "Tycho Brahe", nl: "Tycho Brahe" }
        ],
        correct: 0,
        explanation: {
          en: "Nicolaus Copernicus proposed the heliocentric model in his book 'De revolutionibus orbium coelestium' (1543), placing the Sun at the center of the solar system rather than Earth. This revolutionary idea challenged the prevailing geocentric model.",
          es: "Nicolás Copérnico propuso el modelo heliocéntrico en su libro 'De revolutionibus orbium coelestium' (1543), colocando al Sol en el centro del sistema solar en lugar de la Tierra. Esta idea revolucionaria desafió el modelo geocéntrico predominante.",
          de: "Nikolaus Kopernikus schlug das heliozentrische Modell in seinem Buch 'De revolutionibus orbium coelestium' (1543) vor und platzierte die Sonne im Zentrum des Sonnensystems statt der Erde. Diese revolutionäre Idee stellte das vorherrschende geozentrische Modell in Frage.",
          nl: "Nicolaas Copernicus stelde het heliocentrische model voor in zijn boek 'De revolutionibus orbium coelestium' (1543), waarbij hij de zon in het centrum van het zonnestelsel plaatste in plaats van de aarde. Dit revolutionaire idee daagde het heersende geocentrische model uit."
        }
      },
      {
        question: {
          en: "Who discovered radioactivity and won two Nobel Prizes in different sciences?",
          es: "¿Quién descubrió la radiactividad y ganó dos Premios Nobel en diferentes ciencias?",
          de: "Wer entdeckte die Radioaktivität und gewann zwei Nobelpreise in verschiedenen Wissenschaften?",
          nl: "Wie ontdekte radioactiviteit en won twee Nobelprijzen in verschillende wetenschappen?"
        },
        options: [
          { en: "Marie Curie", es: "Marie Curie", de: "Marie Curie", nl: "Marie Curie" },
          { en: "Ernest Rutherford", es: "Ernest Rutherford", de: "Ernest Rutherford", nl: "Ernest Rutherford" },
          { en: "Henri Becquerel", es: "Henri Becquerel", de: "Henri Becquerel", nl: "Henri Becquerel" },
          { en: "Lise Meitner", es: "Lise Meitner", de: "Lise Meitner", nl: "Lise Meitner" }
        ],
        correct: 0,
        explanation: {
          en: "Marie Curie discovered radium and polonium, pioneering research on radioactivity. She won the Nobel Prize in Physics (1903) and Chemistry (1911), becoming the first person to win Nobel Prizes in two different sciences and the first woman to win a Nobel Prize.",
          es: "Marie Curie descubrió el radio y el polonio, siendo pionera en la investigación sobre radiactividad. Ganó el Premio Nobel de Física (1903) y Química (1911), convirtiéndose en la primera persona en ganar Premios Nobel en dos ciencias diferentes y la primera mujer en ganar un Premio Nobel.",
          de: "Marie Curie entdeckte Radium und Polonium und war Pionierin der Radioaktivitätsforschung. Sie gewann den Nobelpreis für Physik (1903) und Chemie (1911), wurde die erste Person, die Nobelpreise in zwei verschiedenen Wissenschaften gewann, und die erste Frau, die einen Nobelpreis gewann.",
          nl: "Marie Curie ontdekte radium en polonium en was een pionier in radioactiviteitsonderzoek. Ze won de Nobelprijs voor Natuurkunde (1903) en Scheikunde (1911), werd de eerste persoon die Nobelprijzen won in twee verschillende wetenschappen en de eerste vrouw die een Nobelprijs won."
        }
      },
      {
        question: {
          en: "Which scientist is famous for his laws of planetary motion?",
          es: "¿Qué científico es famoso por sus leyes del movimiento planetario?",
          de: "Welcher Wissenschaftler ist berühmt für seine Gesetze der Planetenbewegung?",
          nl: "Welke wetenschapper is beroemd om zijn wetten van planetaire beweging?"
        },
        options: [
          { en: "Johannes Kepler", es: "Johannes Kepler", de: "Johannes Kepler", nl: "Johannes Kepler" },
          { en: "Galileo Galilei", es: "Galileo Galilei", de: "Galileo Galilei", nl: "Galileo Galilei" },
          { en: "Isaac Newton", es: "Isaac Newton", de: "Isaac Newton", nl: "Isaac Newton" },
          { en: "Edmund Halley", es: "Edmund Halley", de: "Edmund Halley", nl: "Edmund Halley" }
        ],
        correct: 0,
        explanation: {
          en: "Johannes Kepler formulated three laws of planetary motion: planets orbit the Sun in ellipses, they sweep equal areas in equal times, and the square of orbital period is proportional to the cube of orbital radius. These laws were crucial for Newton's theory of gravity.",
          es: "Johannes Kepler formuló tres leyes del movimiento planetario: los planetas orbitan el Sol en elipses, barren áreas iguales en tiempos iguales, y el cuadrado del período orbital es proporcional al cubo del radio orbital. Estas leyes fueron cruciales para la teoría de la gravedad de Newton.",
          de: "Johannes Kepler formulierte drei Gesetze der Planetenbewegung: Planeten umkreisen die Sonne in Ellipsen, sie überstreichen gleiche Flächen in gleichen Zeiten, und das Quadrat der Umlaufzeit ist proportional zum Kubus des Bahnradius. Diese Gesetze waren entscheidend für Newtons Gravitationstheorie.",
          nl: "Johannes Kepler formuleerde drie wetten van planetaire beweging: planeten draaien in ellipsen om de zon, ze bestrijken gelijke gebieden in gelijke tijden, en het kwadraat van de omlooptijd is evenredig met de derde macht van de baanstraal. Deze wetten waren cruciaal voor Newtons zwaartekrachttheorie."
        }
      },
      {
        question: {
          en: "Who developed the first successful polio vaccine?",
          es: "¿Quién desarrolló la primera vacuna exitosa contra la polio?",
          de: "Wer entwickelte den ersten erfolgreichen Polio-Impfstoff?",
          nl: "Wie ontwikkelde het eerste succesvolle poliovaccin?"
        },
        options: [
          { en: "Jonas Salk", es: "Jonas Salk", de: "Jonas Salk", nl: "Jonas Salk" },
          { en: "Albert Sabin", es: "Albert Sabin", de: "Albert Sabin", nl: "Albert Sabin" },
          { en: "Edward Jenner", es: "Edward Jenner", de: "Edward Jenner", nl: "Edward Jenner" },
          { en: "Louis Pasteur", es: "Louis Pasteur", de: "Louis Pasteur", nl: "Louis Pasteur" }
        ],
        correct: 0,
        explanation: {
          en: "Jonas Salk developed the first successful inactivated polio vaccine in 1952, which was widely used starting in 1955. His vaccine dramatically reduced polio cases worldwide and he famously refused to patent it, saying 'Could you patent the sun?'",
          es: "Jonas Salk desarrolló la primera vacuna inactivada contra la polio exitosa en 1952, que se usó ampliamente a partir de 1955. Su vacuna redujo dramáticamente los casos de polio en todo el mundo y famosamente se negó a patentarla, diciendo '¿Podrías patentar el sol?'",
          de: "Jonas Salk entwickelte 1952 den ersten erfolgreichen inaktivierten Polio-Impfstoff, der ab 1955 weit verbreitet eingesetzt wurde. Sein Impfstoff reduzierte die Polio-Fälle weltweit dramatisch und er weigerte sich berühmt, ihn zu patentieren, mit den Worten 'Könnten Sie die Sonne patentieren?'",
          nl: "Jonas Salk ontwikkelde in 1952 het eerste succesvolle geïnactiveerde poliovaccin, dat vanaf 1955 op grote schaal werd gebruikt. Zijn vaccin verminderde polio-gevallen wereldwijd dramatisch en hij weigerde beroemd om het te patenteren, zeggende 'Kun je de zon patenteren?'"
        }
      },
      {
        question: {
          en: "Which naturalist proposed the theory of evolution by natural selection?",
          es: "¿Qué naturalista propuso la teoría de la evolución por selección natural?",
          de: "Welcher Naturforscher schlug die Evolutionstheorie durch natürliche Selektion vor?",
          nl: "Welke natuuronderzoeker stelde de evolutietheorie door natuurlijke selectie voor?"
        },
        options: [
          { en: "Charles Darwin", es: "Charles Darwin", de: "Charles Darwin", nl: "Charles Darwin" },
          { en: "Alfred Russel Wallace", es: "Alfred Russel Wallace", de: "Alfred Russel Wallace", nl: "Alfred Russel Wallace" },
          { en: "Jean-Baptiste Lamarck", es: "Jean-Baptiste Lamarck", de: "Jean-Baptiste Lamarck", nl: "Jean-Baptiste Lamarck" },
          { en: "Gregor Mendel", es: "Gregor Mendel", de: "Gregor Mendel", nl: "Gregor Mendel" }
        ],
        correct: 0,
        explanation: {
          en: "Charles Darwin published 'On the Origin of Species' in 1859, proposing that species evolve through natural selection. His theory, developed over decades of observation, revolutionized biology and our understanding of life on Earth.",
          es: "Charles Darwin publicó 'El origen de las especies' en 1859, proponiendo que las especies evolucionan a través de la selección natural. Su teoría, desarrollada durante décadas de observación, revolucionó la biología y nuestra comprensión de la vida en la Tierra.",
          de: "Charles Darwin veröffentlichte 1859 'Über die Entstehung der Arten' und schlug vor, dass Arten sich durch natürliche Selektion entwickeln. Seine über Jahrzehnte der Beobachtung entwickelte Theorie revolutionierte die Biologie und unser Verständnis des Lebens auf der Erde.",
          nl: "Charles Darwin publiceerde in 1859 'Over het ontstaan der soorten', waarin hij voorstelde dat soorten evolueren door natuurlijke selectie. Zijn theorie, ontwikkeld over decennia van observatie, revolutioneerde de biologie en ons begrip van het leven op aarde."
        }
      },
      {
        question: {
          en: "Who invented the telephone in 1876?",
          es: "¿Quién inventó el teléfono en 1876?",
          de: "Wer erfand 1876 das Telefon?",
          nl: "Wie vond in 1876 de telefoon uit?"
        },
        options: [
          { en: "Alexander Graham Bell", es: "Alexander Graham Bell", de: "Alexander Graham Bell", nl: "Alexander Graham Bell" },
          { en: "Thomas Edison", es: "Thomas Edison", de: "Thomas Edison", nl: "Thomas Edison" },
          { en: "Nikola Tesla", es: "Nikola Tesla", de: "Nikola Tesla", nl: "Nikola Tesla" },
          { en: "Guglielmo Marconi", es: "Guglielmo Marconi", de: "Guglielmo Marconi", nl: "Guglielmo Marconi" }
        ],
        correct: 0,
        explanation: {
          en: "Alexander Graham Bell was awarded the first US patent for the telephone in 1876. His famous first words transmitted were 'Mr. Watson, come here, I want to see you.' The invention revolutionized communication worldwide.",
          es: "Alexander Graham Bell recibió la primera patente estadounidense del teléfono en 1876. Sus famosas primeras palabras transmitidas fueron 'Sr. Watson, venga aquí, quiero verlo.' La invención revolucionó la comunicación mundial.",
          de: "Alexander Graham Bell erhielt 1876 das erste US-Patent für das Telefon. Seine berühmten ersten übertragenen Worte waren 'Herr Watson, kommen Sie her, ich möchte Sie sehen.' Die Erfindung revolutionierte die Kommunikation weltweit.",
          nl: "Alexander Graham Bell kreeg in 1876 het eerste Amerikaanse patent voor de telefoon. Zijn beroemde eerste overgedragen woorden waren 'Meneer Watson, kom hier, ik wil u zien.' De uitvinding revolutioneerde de communicatie wereldwijd."
        }
      },
      {
        question: {
          en: "Which scientist discovered the structure of DNA along with Francis Crick?",
          es: "¿Qué científico descubrió la estructura del ADN junto con Francis Crick?",
          de: "Welcher Wissenschaftler entdeckte zusammen mit Francis Crick die DNA-Struktur?",
          nl: "Welke wetenschapper ontdekte samen met Francis Crick de structuur van DNA?"
        },
        options: [
          { en: "James Watson", es: "James Watson", de: "James Watson", nl: "James Watson" },
          { en: "Rosalind Franklin", es: "Rosalind Franklin", de: "Rosalind Franklin", nl: "Rosalind Franklin" },
          { en: "Linus Pauling", es: "Linus Pauling", de: "Linus Pauling", nl: "Linus Pauling" },
          { en: "Maurice Wilkins", es: "Maurice Wilkins", de: "Maurice Wilkins", nl: "Maurice Wilkins" }
        ],
        correct: 0,
        explanation: {
          en: "James Watson and Francis Crick discovered the double helix structure of DNA in 1953, using X-ray crystallography data from Rosalind Franklin. This discovery was fundamental to understanding genetics and earned them the Nobel Prize in 1962.",
          es: "James Watson y Francis Crick descubrieron la estructura de doble hélice del ADN en 1953, utilizando datos de cristalografía de rayos X de Rosalind Franklin. Este descubrimiento fue fundamental para entender la genética y les valió el Premio Nobel en 1962.",
          de: "James Watson und Francis Crick entdeckten 1953 die Doppelhelixstruktur der DNA unter Verwendung von Röntgenkristallographiedaten von Rosalind Franklin. Diese Entdeckung war grundlegend für das Verständnis der Genetik und brachte ihnen 1962 den Nobelpreis ein.",
          nl: "James Watson en Francis Crick ontdekten in 1953 de dubbele helixstructuur van DNA, gebruikmakend van röntgenkristallografiegegevens van Rosalind Franklin. Deze ontdekking was fundamenteel voor het begrip van genetica en leverde hen in 1962 de Nobelprijs op."
        }
      },
      {
        question: {
          en: "Who formulated the periodic table of elements?",
          es: "¿Quién formuló la tabla periódica de los elementos?",
          de: "Wer formulierte das Periodensystem der Elemente?",
          nl: "Wie formuleerde het periodiek systeem der elementen?"
        },
        options: [
          { en: "Dmitri Mendeleev", es: "Dmitri Mendeléyev", de: "Dmitri Mendelejew", nl: "Dmitri Mendelejev" },
          { en: "Antoine Lavoisier", es: "Antoine Lavoisier", de: "Antoine Lavoisier", nl: "Antoine Lavoisier" },
          { en: "John Dalton", es: "John Dalton", de: "John Dalton", nl: "John Dalton" },
          { en: "J.J. Thomson", es: "J.J. Thomson", de: "J.J. Thomson", nl: "J.J. Thomson" }
        ],
        correct: 0,
        explanation: {
          en: "Dmitri Mendeleev created the periodic table in 1869, organizing elements by atomic weight and properties. He even predicted the existence and properties of undiscovered elements, which were later found, validating his system.",
          es: "Dmitri Mendeléyev creó la tabla periódica en 1869, organizando elementos por peso atómico y propiedades. Incluso predijo la existencia y propiedades de elementos no descubiertos, que luego se encontraron, validando su sistema.",
          de: "Dmitri Mendelejew erstellte 1869 das Periodensystem und ordnete Elemente nach Atomgewicht und Eigenschaften. Er sagte sogar die Existenz und Eigenschaften nicht entdeckter Elemente voraus, die später gefunden wurden und sein System bestätigten.",
          nl: "Dmitri Mendelejev creëerde in 1869 het periodiek systeem, waarbij hij elementen ordende op atoomgewicht en eigenschappen. Hij voorspelde zelfs het bestaan en de eigenschappen van onontdekte elementen, die later werden gevonden en zijn systeem valideerden."
        }
      },
      {
        question: {
          en: "Which physicist is known for the uncertainty principle in quantum mechanics?",
          es: "¿Qué físico es conocido por el principio de incertidumbre en mecánica cuántica?",
          de: "Welcher Physiker ist für die Unschärferelation in der Quantenmechanik bekannt?",
          nl: "Welke natuurkundige staat bekend om het onzekerheidsprincipe in de kwantummechanica?"
        },
        options: [
          { en: "Werner Heisenberg", es: "Werner Heisenberg", de: "Werner Heisenberg", nl: "Werner Heisenberg" },
          { en: "Erwin Schrödinger", es: "Erwin Schrödinger", de: "Erwin Schrödinger", nl: "Erwin Schrödinger" },
          { en: "Niels Bohr", es: "Niels Bohr", de: "Niels Bohr", nl: "Niels Bohr" },
          { en: "Paul Dirac", es: "Paul Dirac", de: "Paul Dirac", nl: "Paul Dirac" }
        ],
        correct: 0,
        explanation: {
          en: "Werner Heisenberg formulated the uncertainty principle in 1927, stating that the position and momentum of a particle cannot be simultaneously measured with arbitrary precision. This principle is fundamental to quantum mechanics.",
          es: "Werner Heisenberg formuló el principio de incertidumbre en 1927, estableciendo que la posición y el momento de una partícula no pueden medirse simultáneamente con precisión arbitraria. Este principio es fundamental para la mecánica cuántica.",
          de: "Werner Heisenberg formulierte 1927 die Unschärferelation, die besagt, dass Position und Impuls eines Teilchens nicht gleichzeitig mit beliebiger Genauigkeit gemessen werden können. Dieses Prinzip ist grundlegend für die Quantenmechanik.",
          nl: "Werner Heisenberg formuleerde in 1927 het onzekerheidsprincipe, dat stelt dat de positie en het momentum van een deeltje niet tegelijkertijd met willekeurige precisie kunnen worden gemeten. Dit principe is fundamenteel voor de kwantummechanica."
        }
      },
      {
        question: {
          en: "Who discovered the electron in 1897?",
          es: "¿Quién descubrió el electrón en 1897?",
          de: "Wer entdeckte 1897 das Elektron?",
          nl: "Wie ontdekte in 1897 het elektron?"
        },
        options: [
          { en: "J.J. Thomson", es: "J.J. Thomson", de: "J.J. Thomson", nl: "J.J. Thomson" },
          { en: "Ernest Rutherford", es: "Ernest Rutherford", de: "Ernest Rutherford", nl: "Ernest Rutherford" },
          { en: "Robert Millikan", es: "Robert Millikan", de: "Robert Millikan", nl: "Robert Millikan" },
          { en: "James Chadwick", es: "James Chadwick", de: "James Chadwick", nl: "James Chadwick" }
        ],
        correct: 0,
        explanation: {
          en: "J.J. Thomson discovered the electron through cathode ray tube experiments in 1897. This discovery showed that atoms are not indivisible and led to the development of atomic theory. He won the Nobel Prize in Physics in 1906.",
          es: "J.J. Thomson descubrió el electrón a través de experimentos con tubos de rayos catódicos en 1897. Este descubrimiento mostró que los átomos no son indivisibles y llevó al desarrollo de la teoría atómica. Ganó el Premio Nobel de Física en 1906.",
          de: "J.J. Thomson entdeckte das Elektron 1897 durch Kathodenstrahlröhrenexperimente. Diese Entdeckung zeigte, dass Atome nicht unteilbar sind, und führte zur Entwicklung der Atomtheorie. Er gewann 1906 den Nobelpreis für Physik.",
          nl: "J.J. Thomson ontdekte het elektron in 1897 door experimenten met kathodestralenbuizen. Deze ontdekking toonde aan dat atomen niet ondeelbaar zijn en leidde tot de ontwikkeling van de atoomtheorie. Hij won in 1906 de Nobelprijs voor Natuurkunde."
        }
      },
      {
        question: {
          en: "Which scientist developed the smallpox vaccine, the world's first vaccine?",
          es: "¿Qué científico desarrolló la vacuna contra la viruela, la primera vacuna del mundo?",
          de: "Welcher Wissenschaftler entwickelte den Pockenimpfstoff, den weltweit ersten Impfstoff?",
          nl: "Welke wetenschapper ontwikkelde het pokkenvaccin, 's werelds eerste vaccin?"
        },
        options: [
          { en: "Edward Jenner", es: "Edward Jenner", de: "Edward Jenner", nl: "Edward Jenner" },
          { en: "Louis Pasteur", es: "Louis Pasteur", de: "Louis Pasteur", nl: "Louis Pasteur" },
          { en: "Jonas Salk", es: "Jonas Salk", de: "Jonas Salk", nl: "Jonas Salk" },
          { en: "Robert Koch", es: "Robert Koch", de: "Robert Koch", nl: "Robert Koch" }
        ],
        correct: 0,
        explanation: {
          en: "Edward Jenner developed the smallpox vaccine in 1796, using cowpox to create immunity. This pioneering work founded the field of immunology and eventually led to the complete eradication of smallpox in 1980.",
          es: "Edward Jenner desarrolló la vacuna contra la viruela en 1796, usando la viruela vacuna para crear inmunidad. Este trabajo pionero fundó el campo de la inmunología y finalmente llevó a la erradicación completa de la viruela en 1980.",
          de: "Edward Jenner entwickelte 1796 den Pockenimpfstoff und verwendete Kuhpocken zur Schaffung von Immunität. Diese bahnbrechende Arbeit begründete das Feld der Immunologie und führte schließlich 1980 zur vollständigen Ausrottung der Pocken.",
          nl: "Edward Jenner ontwikkelde in 1796 het pokkenvaccin, waarbij hij koepokken gebruikte om immuniteit te creëren. Dit baanbrekende werk stichtte het vakgebied immunologie en leidde uiteindelijk in 1980 tot de volledige uitroeiing van pokken."
        }
      },
      {
        question: {
          en: "Who proposed the Big Bang theory of the universe's origin?",
          es: "¿Quién propuso la teoría del Big Bang sobre el origen del universo?",
          de: "Wer schlug die Urknalltheorie über den Ursprung des Universums vor?",
          nl: "Wie stelde de oerknaltheorie over het ontstaan van het universum voor?"
        },
        options: [
          { en: "Georges Lemaître", es: "Georges Lemaître", de: "Georges Lemaître", nl: "Georges Lemaître" },
          { en: "Edwin Hubble", es: "Edwin Hubble", de: "Edwin Hubble", nl: "Edwin Hubble" },
          { en: "Stephen Hawking", es: "Stephen Hawking", de: "Stephen Hawking", nl: "Stephen Hawking" },
          { en: "Fred Hoyle", es: "Fred Hoyle", de: "Fred Hoyle", nl: "Fred Hoyle" }
        ],
        correct: 0,
        explanation: {
          en: "Georges Lemaître, a Belgian priest and physicist, proposed the Big Bang theory in 1927, suggesting the universe began from a 'primeval atom.' Edwin Hubble's observations of cosmic expansion later supported this theory.",
          es: "Georges Lemaître, un sacerdote y físico belga, propuso la teoría del Big Bang en 1927, sugiriendo que el universo comenzó desde un 'átomo primordial.' Las observaciones de la expansión cósmica de Edwin Hubble apoyaron posteriormente esta teoría.",
          de: "Georges Lemaître, ein belgischer Priester und Physiker, schlug 1927 die Urknalltheorie vor und vermutete, das Universum habe mit einem 'Uratom' begonnen. Edwin Hubbles Beobachtungen der kosmischen Expansion unterstützten später diese Theorie.",
          nl: "Georges Lemaître, een Belgische priester en natuurkundige, stelde in 1927 de oerknaltheorie voor, suggerend dat het universum begon vanuit een 'oer-atoom.' Edwin Hubbles waarnemingen van kosmische expansie ondersteunden later deze theorie."
        }
      },
      {
        question: {
          en: "Which scientist discovered X-rays in 1895?",
          es: "¿Qué científico descubrió los rayos X en 1895?",
          de: "Welcher Wissenschaftler entdeckte 1895 Röntgenstrahlen?",
          nl: "Welke wetenschapper ontdekte in 1895 röntgenstralen?"
        },
        options: [
          { en: "Wilhelm Röntgen", es: "Wilhelm Röntgen", de: "Wilhelm Röntgen", nl: "Wilhelm Röntgen" },
          { en: "Henri Becquerel", es: "Henri Becquerel", de: "Henri Becquerel", nl: "Henri Becquerel" },
          { en: "Marie Curie", es: "Marie Curie", de: "Marie Curie", nl: "Marie Curie" },
          { en: "Max von Laue", es: "Max von Laue", de: "Max von Laue", nl: "Max von Laue" }
        ],
        correct: 0,
        explanation: {
          en: "Wilhelm Röntgen discovered X-rays in 1895 while experimenting with cathode rays. His discovery revolutionized medical diagnostics and earned him the first Nobel Prize in Physics in 1901.",
          es: "Wilhelm Röntgen descubrió los rayos X en 1895 mientras experimentaba con rayos catódicos. Su descubrimiento revolucionó el diagnóstico médico y le valió el primer Premio Nobel de Física en 1901.",
          de: "Wilhelm Röntgen entdeckte 1895 Röntgenstrahlen bei Experimenten mit Kathodenstrahlen. Seine Entdeckung revolutionierte die medizinische Diagnostik und brachte ihm 1901 den ersten Nobelpreis für Physik ein.",
          nl: "Wilhelm Röntgen ontdekte in 1895 röntgenstralen tijdens experimenten met kathodestralen. Zijn ontdekking revolutioneerde medische diagnostiek en leverde hem in 1901 de eerste Nobelprijs voor Natuurkunde op."
        }
      },
      {
        question: {
          en: "Who discovered the laws of heredity through pea plant experiments?",
          es: "¿Quién descubrió las leyes de la herencia a través de experimentos con plantas de guisante?",
          de: "Wer entdeckte die Vererbungsgesetze durch Erbsenexperimente?",
          nl: "Wie ontdekte de wetten van erfelijkheid door erwtenplantexperimenten?"
        },
        options: [
          { en: "Gregor Mendel", es: "Gregor Mendel", de: "Gregor Mendel", nl: "Gregor Mendel" },
          { en: "Charles Darwin", es: "Charles Darwin", de: "Charles Darwin", nl: "Charles Darwin" },
          { en: "Hugo de Vries", es: "Hugo de Vries", de: "Hugo de Vries", nl: "Hugo de Vries" },
          { en: "Thomas Hunt Morgan", es: "Thomas Hunt Morgan", de: "Thomas Hunt Morgan", nl: "Thomas Hunt Morgan" }
        ],
        correct: 0,
        explanation: {
          en: "Gregor Mendel discovered the fundamental laws of inheritance through systematic pea plant experiments in the 1860s. His work, initially overlooked, became the foundation of modern genetics when rediscovered in 1900.",
          es: "Gregor Mendel descubrió las leyes fundamentales de la herencia a través de experimentos sistemáticos con plantas de guisante en la década de 1860. Su trabajo, inicialmente pasado por alto, se convirtió en la base de la genética moderna cuando fue redescubierto en 1900.",
          de: "Gregor Mendel entdeckte die grundlegenden Vererbungsgesetze durch systematische Erbsenexperimente in den 1860er Jahren. Seine zunächst übersehene Arbeit wurde zur Grundlage der modernen Genetik, als sie 1900 wiederentdeckt wurde.",
          nl: "Gregor Mendel ontdekte de fundamentele wetten van erfelijkheid door systematische erwtenplantexperimenten in de jaren 1860. Zijn werk, aanvankelijk over het hoofd gezien, werd de basis van moderne genetica toen het in 1900 werd herontdekt."
        }
      },
      {
        question: {
          en: "Which physicist developed the atomic model with a nucleus surrounded by electrons?",
          es: "¿Qué físico desarrolló el modelo atómico con un núcleo rodeado de electrones?",
          de: "Welcher Physiker entwickelte das Atommodell mit einem von Elektronen umgebenen Kern?",
          nl: "Welke natuurkundige ontwikkelde het atoommodel met een kern omringd door elektronen?"
        },
        options: [
          { en: "Ernest Rutherford", es: "Ernest Rutherford", de: "Ernest Rutherford", nl: "Ernest Rutherford" },
          { en: "Niels Bohr", es: "Niels Bohr", de: "Niels Bohr", nl: "Niels Bohr" },
          { en: "J.J. Thomson", es: "J.J. Thomson", de: "J.J. Thomson", nl: "J.J. Thomson" },
          { en: "John Dalton", es: "John Dalton", de: "John Dalton", nl: "John Dalton" }
        ],
        correct: 0,
        explanation: {
          en: "Ernest Rutherford discovered the atomic nucleus through his gold foil experiment in 1911, proposing that atoms have a dense, positively charged nucleus surrounded by electrons. This replaced the 'plum pudding' model of the atom.",
          es: "Ernest Rutherford descubrió el núcleo atómico a través de su experimento de lámina de oro en 1911, proponiendo que los átomos tienen un núcleo denso con carga positiva rodeado de electrones. Esto reemplazó el modelo de 'pudín de pasas' del átomo.",
          de: "Ernest Rutherford entdeckte den Atomkern durch sein Goldfolienexperiment 1911 und schlug vor, dass Atome einen dichten, positiv geladenen Kern haben, der von Elektronen umgeben ist. Dies ersetzte das 'Rosinenkuchenmodell' des Atoms.",
          nl: "Ernest Rutherford ontdekte de atoomkern door zijn goudfolieëxperiment in 1911 en stelde voor dat atomen een dichte, positief geladen kern hebben omringd door elektronen. Dit verving het 'rozijnencakemodel' van het atoom."
        }
      },
      {
        question: {
          en: "Who invented the first practical incandescent light bulb?",
          es: "¿Quién inventó la primera bombilla incandescente práctica?",
          de: "Wer erfand die erste praktische Glühlampe?",
          nl: "Wie vond de eerste praktische gloeilamp uit?"
        },
        options: [
          { en: "Thomas Edison", es: "Thomas Edison", de: "Thomas Edison", nl: "Thomas Edison" },
          { en: "Nikola Tesla", es: "Nikola Tesla", de: "Nikola Tesla", nl: "Nikola Tesla" },
          { en: "Joseph Swan", es: "Joseph Swan", de: "Joseph Swan", nl: "Joseph Swan" },
          { en: "George Westinghouse", es: "George Westinghouse", de: "George Westinghouse", nl: "George Westinghouse" }
        ],
        correct: 0,
        explanation: {
          en: "Thomas Edison developed the first commercially practical incandescent light bulb in 1879, using a carbon filament. While others had created earlier versions, Edison's design was longer-lasting and economically viable for widespread use.",
          es: "Thomas Edison desarrolló la primera bombilla incandescente comercialmente práctica en 1879, usando un filamento de carbono. Aunque otros habían creado versiones anteriores, el diseño de Edison era más duradero y económicamente viable para uso generalizado.",
          de: "Thomas Edison entwickelte 1879 die erste kommerziell praktische Glühlampe mit einem Kohlefaden. Während andere frühere Versionen geschaffen hatten, war Edisons Design langlebiger und wirtschaftlich für den breiten Einsatz geeignet.",
          nl: "Thomas Edison ontwikkelde in 1879 de eerste commercieel praktische gloeilamp, met een koolstofgloeidraad. Hoewel anderen eerdere versies hadden gemaakt, was Edisons ontwerp langer meegaand en economisch haalbaar voor wijdverbreid gebruik."
        }
      },
      {
        question: {
          en: "Which chemist discovered oxygen independently in the 1770s?",
          es: "¿Qué químico descubrió el oxígeno independientemente en la década de 1770?",
          de: "Welcher Chemiker entdeckte in den 1770er Jahren unabhängig Sauerstoff?",
          nl: "Welke scheikundige ontdekte in de jaren 1770 onafhankelijk zuurstof?"
        },
        options: [
          { en: "Joseph Priestley", es: "Joseph Priestley", de: "Joseph Priestley", nl: "Joseph Priestley" },
          { en: "Antoine Lavoisier", es: "Antoine Lavoisier", de: "Antoine Lavoisier", nl: "Antoine Lavoisier" },
          { en: "Henry Cavendish", es: "Henry Cavendish", de: "Henry Cavendish", nl: "Henry Cavendish" },
          { en: "Robert Boyle", es: "Robert Boyle", de: "Robert Boyle", nl: "Robert Boyle" }
        ],
        correct: 0,
        explanation: {
          en: "Joseph Priestley discovered oxygen in 1774, though Carl Wilhelm Scheele had discovered it earlier but published later. Priestley called it 'dephlogisticated air,' while Lavoisier later named it oxygen and explained its role in combustion.",
          es: "Joseph Priestley descubrió el oxígeno en 1774, aunque Carl Wilhelm Scheele lo había descubierto antes pero publicó más tarde. Priestley lo llamó 'aire desflogistizado', mientras que Lavoisier más tarde lo nombró oxígeno y explicó su papel en la combustión.",
          de: "Joseph Priestley entdeckte 1774 Sauerstoff, obwohl Carl Wilhelm Scheele ihn früher entdeckt, aber später veröffentlicht hatte. Priestley nannte es 'dephlogistisierte Luft', während Lavoisier es später Sauerstoff nannte und seine Rolle bei der Verbrennung erklärte.",
          nl: "Joseph Priestley ontdekte zuurstof in 1774, hoewel Carl Wilhelm Scheele het eerder had ontdekt maar later publiceerde. Priestley noemde het 'gedephlogistiseerde lucht', terwijl Lavoisier het later zuurstof noemde en zijn rol bij verbranding uitlegde."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  } else if (typeof window !== 'undefined') {
    window.level2 = level2;
  }
})();
