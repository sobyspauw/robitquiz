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
          de: "Joseph Priestley entdeckte 1774 Sauerstoff, obwohl Carl Wilhelm Scheele ihn früher entdeckt, aber später veröffentlicht hatte. Priestley nannte es 'dephlogistisierte Lucht', während Lavoisier es später Sauerstoff nannte und seine Rolle bei der Verbrennung erklärte.",
          nl: "Joseph Priestley ontdekte zuurstof in 1774, hoewel Carl Wilhelm Scheele het eerder had ontdekt maar later publiceerde. Priestley noemde het 'gedephlogistiseerde lucht', terwijl Lavoisier het later zuurstof noemde en zijn rol bij verbranding uitlegde."
        }
      },
      {
        question: {
          en: "Who invented the World Wide Web in 1989?",
          es: "¿Quién inventó la World Wide Web en 1989?",
          de: "Wer erfand 1989 das World Wide Web?",
          nl: "Wie vond in 1989 het World Wide Web uit?"
        },
        options: [
          { en: "Tim Berners-Lee", es: "Tim Berners-Lee", de: "Tim Berners-Lee", nl: "Tim Berners-Lee" },
          { en: "Bill Gates", es: "Bill Gates", de: "Bill Gates", nl: "Bill Gates" },
          { en: "Steve Jobs", es: "Steve Jobs", de: "Steve Jobs", nl: "Steve Jobs" },
          { en: "Vint Cerf", es: "Vint Cerf", de: "Vint Cerf", nl: "Vint Cerf" }
        ],
        correct: 0,
        explanation: {
          en: "Tim Berners-Lee invented the World Wide Web at CERN in 1989, creating the first web browser, web server, and HTML. He made it freely available without patents, enabling the internet revolution we know today.",
          es: "Tim Berners-Lee inventó la World Wide Web en el CERN en 1989, creando el primer navegador web, servidor web y HTML. Lo hizo libremente disponible sin patentes, permitiendo la revolución de internet que conocemos hoy.",
          de: "Tim Berners-Lee erfand 1989 am CERN das World Wide Web und schuf den ersten Webbrowser, Webserver und HTML. Er stellte es frei ohne Patente zur Verfügung und ermöglichte damit die Internetrevolution, die wir heute kennen.",
          nl: "Tim Berners-Lee vond het World Wide Web uit bij CERN in 1989, waarbij hij de eerste webbrowser, webserver en HTML creëerde. Hij maakte het vrij beschikbaar zonder patenten, wat de internetrevolutie mogelijk maakte die we vandaag kennen."
        }
      },
      {
        question: {
          en: "Which scientist discovered the neutron in 1932?",
          es: "¿Qué científico descubrió el neutrón en 1932?",
          de: "Welcher Wissenschaftler entdeckte 1932 das Neutron?",
          nl: "Welke wetenschapper ontdekte in 1932 het neutron?"
        },
        options: [
          { en: "James Chadwick", es: "James Chadwick", de: "James Chadwick", nl: "James Chadwick" },
          { en: "Ernest Rutherford", es: "Ernest Rutherford", de: "Ernest Rutherford", nl: "Ernest Rutherford" },
          { en: "Niels Bohr", es: "Niels Bohr", de: "Niels Bohr", nl: "Niels Bohr" },
          { en: "Wolfgang Pauli", es: "Wolfgang Pauli", de: "Wolfgang Pauli", nl: "Wolfgang Pauli" }
        ],
        correct: 0,
        explanation: {
          en: "James Chadwick discovered the neutron in 1932 by bombarding beryllium with alpha particles. This completed our understanding of atomic structure and earned him the Nobel Prize in Physics in 1935.",
          es: "James Chadwick descubrió el neutrón en 1932 bombardeando berilio con partículas alfa. Esto completó nuestra comprensión de la estructura atómica y le valió el Premio Nobel de Física en 1935.",
          de: "James Chadwick entdeckte 1932 das Neutron durch Beschuss von Beryllium mit Alphateilchen. Dies vervollständigte unser Verständnis der Atomstruktur und brachte ihm 1935 den Nobelpreis für Physik ein.",
          nl: "James Chadwick ontdekte het neutron in 1932 door beryllium te bombarderen met alfadeeltjes. Dit completeerde ons begrip van de atoomstructuur en leverde hem in 1935 de Nobelprijs voor Natuurkunde op."
        }
      },
      {
        question: {
          en: "Who formulated the laws of thermodynamics in the 19th century?",
          es: "¿Quién formuló las leyes de la termodinámica en el siglo XIX?",
          de: "Wer formulierte im 19. Jahrhundert die Gesetze der Thermodynamik?",
          nl: "Wie formuleerde in de 19e eeuw de wetten van de thermodynamica?"
        },
        options: [
          { en: "Rudolf Clausius", es: "Rudolf Clausius", de: "Rudolf Clausius", nl: "Rudolf Clausius" },
          { en: "Lord Kelvin", es: "Lord Kelvin", de: "Lord Kelvin", nl: "Lord Kelvin" },
          { en: "James Joule", es: "James Joule", de: "James Joule", nl: "James Joule" },
          { en: "Sadi Carnot", es: "Sadi Carnot", de: "Sadi Carnot", nl: "Sadi Carnot" }
        ],
        correct: 0,
        explanation: {
          en: "Rudolf Clausius formulated the second law of thermodynamics and introduced the concept of entropy in 1850. He stated that heat cannot spontaneously flow from cold to hot bodies, fundamental to understanding energy systems.",
          es: "Rudolf Clausius formuló la segunda ley de la termodinámica e introdujo el concepto de entropía en 1850. Afirmó que el calor no puede fluir espontáneamente de cuerpos fríos a calientes, fundamental para entender los sistemas de energía.",
          de: "Rudolf Clausius formulierte 1850 den zweiten Hauptsatz der Thermodynamik und führte das Konzept der Entropie ein. Er stellte fest, dass Wärme nicht spontan von kalten zu heißen Körpern fließen kann, grundlegend für das Verständnis von Energiesystemen.",
          nl: "Rudolf Clausius formuleerde de tweede wet van de thermodynamica en introduceerde het concept van entropie in 1850. Hij stelde dat warmte niet spontaan kan stromen van koude naar warme lichamen, fundamenteel voor het begrijpen van energiesystemen."
        }
      },
      {
        question: {
          en: "Which scientist proposed the continental drift theory in 1912?",
          es: "¿Qué científico propuso la teoría de la deriva continental en 1912?",
          de: "Welcher Wissenschaftler schlug 1912 die Kontinentaldrifttheorie vor?",
          nl: "Welke wetenschapper stelde in 1912 de continentale drifttheorie voor?"
        },
        options: [
          { en: "Alfred Wegener", es: "Alfred Wegener", de: "Alfred Wegener", nl: "Alfred Wegener" },
          { en: "Harry Hess", es: "Harry Hess", de: "Harry Hess", nl: "Harry Hess" },
          { en: "Charles Lyell", es: "Charles Lyell", de: "Charles Lyell", nl: "Charles Lyell" },
          { en: "James Hutton", es: "James Hutton", de: "James Hutton", nl: "James Hutton" }
        ],
        correct: 0,
        explanation: {
          en: "Alfred Wegener proposed continental drift in 1912, suggesting that continents were once joined and had drifted apart. Though initially rejected, his theory was later validated and became the foundation for plate tectonics.",
          es: "Alfred Wegener propuso la deriva continental en 1912, sugiriendo que los continentes estuvieron unidos y se separaron. Aunque inicialmente rechazada, su teoría fue posteriormente validada y se convirtió en la base de la tectónica de placas.",
          de: "Alfred Wegener schlug 1912 die Kontinentaldrift vor und vermutete, dass Kontinente einst verbunden waren und auseinanderdrifteten. Obwohl zunächst abgelehnt, wurde seine Theorie später bestätigt und zur Grundlage der Plattentektonik.",
          nl: "Alfred Wegener stelde continentale drift voor in 1912, suggerend dat continenten ooit verbonden waren en uit elkaar gedreven. Hoewel aanvankelijk verworpen, werd zijn theorie later gevalideerd en werd de basis voor platentektoniek."
        }
      },
      {
        question: {
          en: "Who developed the rabies vaccine in the 1880s?",
          es: "¿Quién desarrolló la vacuna contra la rabia en la década de 1880?",
          de: "Wer entwickelte in den 1880er Jahren den Tollwutimpfstoff?",
          nl: "Wie ontwikkelde in de jaren 1880 het hondsdolheidsvaccin?"
        },
        options: [
          { en: "Louis Pasteur", es: "Louis Pasteur", de: "Louis Pasteur", nl: "Louis Pasteur" },
          { en: "Robert Koch", es: "Robert Koch", de: "Robert Koch", nl: "Robert Koch" },
          { en: "Edward Jenner", es: "Edward Jenner", de: "Edward Jenner", nl: "Edward Jenner" },
          { en: "Paul Ehrlich", es: "Paul Ehrlich", de: "Paul Ehrlich", nl: "Paul Ehrlich" }
        ],
        correct: 0,
        explanation: {
          en: "Louis Pasteur developed the rabies vaccine in 1885, successfully using it to save a young boy bitten by a rabid dog. This demonstrated the principle of vaccination for diseases beyond smallpox and founded modern microbiology.",
          es: "Louis Pasteur desarrolló la vacuna contra la rabia en 1885, usándola exitosamente para salvar a un niño mordido por un perro rabioso. Esto demostró el principio de vacunación para enfermedades más allá de la viruela y fundó la microbiología moderna.",
          de: "Louis Pasteur entwickelte 1885 den Tollwutimpfstoff und verwendete ihn erfolgreich, um einen von einem tollwütigen Hund gebissenen Jungen zu retten. Dies demonstrierte das Impfprinzip für Krankheiten jenseits der Pocken und begründete die moderne Mikrobiologie.",
          nl: "Louis Pasteur ontwikkelde in 1885 het hondsdolheidsvaccin, waarbij hij het succesvol gebruikte om een jongen te redden die was gebeten door een dolle hond. Dit toonde het principe van vaccinatie voor ziekten naast pokken en stichtte de moderne microbiologie."
        }
      },
      {
        question: {
          en: "Which physicist developed the quantum theory in 1900?",
          es: "¿Qué físico desarrolló la teoría cuántica en 1900?",
          de: "Welcher Physiker entwickelte 1900 die Quantentheorie?",
          nl: "Welke natuurkundige ontwikkelde in 1900 de kwantumtheorie?"
        },
        options: [
          { en: "Max Planck", es: "Max Planck", de: "Max Planck", nl: "Max Planck" },
          { en: "Niels Bohr", es: "Niels Bohr", de: "Niels Bohr", nl: "Niels Bohr" },
          { en: "Werner Heisenberg", es: "Werner Heisenberg", de: "Werner Heisenberg", nl: "Werner Heisenberg" },
          { en: "Albert Einstein", es: "Albert Einstein", de: "Albert Einstein", nl: "Albert Einstein" }
        ],
        correct: 0,
        explanation: {
          en: "Max Planck introduced quantum theory in 1900, proposing that energy is quantized in discrete packets. This revolutionary idea solved the black body radiation problem and earned him the Nobel Prize in Physics in 1918.",
          es: "Max Planck introdujo la teoría cuántica en 1900, proponiendo que la energía está cuantizada en paquetes discretos. Esta idea revolucionaria resolvió el problema de la radiación del cuerpo negro y le valió el Premio Nobel de Física en 1918.",
          de: "Max Planck führte 1900 die Quantentheorie ein und schlug vor, dass Energie in diskreten Paketen quantisiert ist. Diese revolutionäre Idee löste das Schwarzkörperstrahlungsproblem und brachte ihm 1918 den Nobelpreis für Physik ein.",
          nl: "Max Planck introduceerde de kwantumtheorie in 1900, waarbij hij voorstelde dat energie is gekwantiseerd in discrete pakketten. Dit revolutionaire idee loste het zwarte lichaamsstralingsprobleem op en leverde hem in 1918 de Nobelprijs voor Natuurkunde op."
        }
      },
      {
        question: {
          en: "Who discovered electromagnetic induction in 1831?",
          es: "¿Quién descubrió la inducción electromagnética en 1831?",
          de: "Wer entdeckte 1831 die elektromagnetische Induktion?",
          nl: "Wie ontdekte in 1831 elektromagnetische inductie?"
        },
        options: [
          { en: "Michael Faraday", es: "Michael Faraday", de: "Michael Faraday", nl: "Michael Faraday" },
          { en: "James Clerk Maxwell", es: "James Clerk Maxwell", de: "James Clerk Maxwell", nl: "James Clerk Maxwell" },
          { en: "André-Marie Ampère", es: "André-Marie Ampère", de: "André-Marie Ampère", nl: "André-Marie Ampère" },
          { en: "Georg Ohm", es: "Georg Ohm", de: "Georg Ohm", nl: "Georg Ohm" }
        ],
        correct: 0,
        explanation: {
          en: "Michael Faraday discovered electromagnetic induction in 1831, showing that a changing magnetic field creates an electric current. This principle is fundamental to electric generators, transformers, and motors.",
          es: "Michael Faraday descubrió la inducción electromagnética en 1831, mostrando que un campo magnético cambiante crea una corriente eléctrica. Este principio es fundamental para generadores eléctricos, transformadores y motores.",
          de: "Michael Faraday entdeckte 1831 die elektromagnetische Induktion und zeigte, dass ein sich änderndes Magnetfeld einen elektrischen Strom erzeugt. Dieses Prinzip ist grundlegend für elektrische Generatoren, Transformatoren und Motoren.",
          nl: "Michael Faraday ontdekte elektromagnetische inductie in 1831, waarbij hij aantoonde dat een veranderend magnetisch veld een elektrische stroom creëert. Dit principe is fundamenteel voor elektrische generatoren, transformatoren en motoren."
        }
      },
      {
        question: {
          en: "Which scientist developed the first successful steam engine?",
          es: "¿Qué científico desarrolló la primera máquina de vapor exitosa?",
          de: "Welcher Wissenschaftler entwickelte die erste erfolgreiche Dampfmaschine?",
          nl: "Welke wetenschapper ontwikkelde de eerste succesvolle stoommachine?"
        },
        options: [
          { en: "James Watt", es: "James Watt", de: "James Watt", nl: "James Watt" },
          { en: "Thomas Newcomen", es: "Thomas Newcomen", de: "Thomas Newcomen", nl: "Thomas Newcomen" },
          { en: "George Stephenson", es: "George Stephenson", de: "George Stephenson", nl: "George Stephenson" },
          { en: "Richard Trevithick", es: "Richard Trevithick", de: "Richard Trevithick", nl: "Richard Trevithick" }
        ],
        correct: 0,
        explanation: {
          en: "James Watt greatly improved the steam engine in 1769, making it efficient enough for widespread industrial use. His innovations, including the separate condenser, powered the Industrial Revolution.",
          es: "James Watt mejoró enormemente la máquina de vapor en 1769, haciéndola lo suficientemente eficiente para uso industrial generalizado. Sus innovaciones, incluido el condensador separado, impulsaron la Revolución Industrial.",
          de: "James Watt verbesserte 1769 die Dampfmaschine erheblich und machte sie effizient genug für den breiten industriellen Einsatz. Seine Innovationen, einschließlich des separaten Kondensators, trieben die Industrielle Revolution an.",
          nl: "James Watt verbeterde de stoommachine aanzienlijk in 1769, waardoor het efficiënt genoeg werd voor wijdverbreid industrieel gebruik. Zijn innovaties, waaronder de aparte condensor, dreven de Industriële Revolutie aan."
        }
      },
      {
        question: {
          en: "Who discovered the circulation of blood in the human body?",
          es: "¿Quién descubrió la circulación de la sangre en el cuerpo humano?",
          de: "Wer entdeckte den Blutkreislauf im menschlichen Körper?",
          nl: "Wie ontdekte de bloedsomloop in het menselijk lichaam?"
        },
        options: [
          { en: "William Harvey", es: "William Harvey", de: "William Harvey", nl: "William Harvey" },
          { en: "Andreas Vesalius", es: "Andreas Vesalio", de: "Andreas Vesalius", nl: "Andreas Vesalius" },
          { en: "Galen", es: "Galeno", de: "Galen", nl: "Galenus" },
          { en: "Ibn al-Nafis", es: "Ibn al-Nafis", de: "Ibn al-Nafis", nl: "Ibn al-Nafis" }
        ],
        correct: 0,
        explanation: {
          en: "William Harvey published his theory of blood circulation in 1628, demonstrating that the heart pumps blood through arteries and veins in a closed circuit. This overturned 1,400 years of Galenic theory.",
          es: "William Harvey publicó su teoría de la circulación sanguínea en 1628, demostrando que el corazón bombea sangre a través de arterias y venas en un circuito cerrado. Esto derrocó 1,400 años de teoría galénica.",
          de: "William Harvey veröffentlichte 1628 seine Theorie des Blutkreislaufs und demonstrierte, dass das Herz Blut durch Arterien und Venen in einem geschlossenen Kreislauf pumpt. Dies stürzte 1.400 Jahre galenische Theorie.",
          nl: "William Harvey publiceerde zijn theorie van de bloedsomloop in 1628, waarbij hij aantoonde dat het hart bloed door slagaders en aderen pompt in een gesloten circuit. Dit keerde 1.400 jaar Galenische theorie om."
        }
      },
      {
        question: {
          en: "Which mathematician developed calculus independently of Isaac Newton?",
          es: "¿Qué matemático desarrolló el cálculo independientemente de Isaac Newton?",
          de: "Welcher Mathematiker entwickelte unabhängig von Isaac Newton die Infinitesimalrechnung?",
          nl: "Welke wiskundige ontwikkelde calculus onafhankelijk van Isaac Newton?"
        },
        options: [
          { en: "Gottfried Wilhelm Leibniz", es: "Gottfried Wilhelm Leibniz", de: "Gottfried Wilhelm Leibniz", nl: "Gottfried Wilhelm Leibniz" },
          { en: "René Descartes", es: "René Descartes", de: "René Descartes", nl: "René Descartes" },
          { en: "Leonhard Euler", es: "Leonhard Euler", de: "Leonhard Euler", nl: "Leonhard Euler" },
          { en: "Pierre de Fermat", es: "Pierre de Fermat", de: "Pierre de Fermat", nl: "Pierre de Fermat" }
        ],
        correct: 0,
        explanation: {
          en: "Gottfried Wilhelm Leibniz developed calculus independently in the 1670s, using different notation than Newton. His notation (dx, dy, ∫) is still used today and proved more practical for most applications.",
          es: "Gottfried Wilhelm Leibniz desarrolló el cálculo independientemente en la década de 1670, usando notación diferente a la de Newton. Su notación (dx, dy, ∫) todavía se usa hoy y resultó más práctica para la mayoría de aplicaciones.",
          de: "Gottfried Wilhelm Leibniz entwickelte in den 1670er Jahren unabhängig die Infinitesimalrechnung mit einer anderen Notation als Newton. Seine Notation (dx, dy, ∫) wird heute noch verwendet und erwies sich für die meisten Anwendungen als praktischer.",
          nl: "Gottfried Wilhelm Leibniz ontwikkelde calculus onafhankelijk in de jaren 1670, met een andere notatie dan Newton. Zijn notatie (dx, dy, ∫) wordt nog steeds gebruikt en bleek praktischer voor de meeste toepassingen."
        }
      },
      {
        question: {
          en: "Who proposed that light behaves as both a wave and a particle?",
          es: "¿Quién propuso que la luz se comporta tanto como onda como partícula?",
          de: "Wer schlug vor, dass Licht sich sowohl als Welle als auch als Teilchen verhält?",
          nl: "Wie stelde voor dat licht zich zowel als golf als deeltje gedraagt?"
        },
        options: [
          { en: "Albert Einstein", es: "Albert Einstein", de: "Albert Einstein", nl: "Albert Einstein" },
          { en: "Max Planck", es: "Max Planck", de: "Max Planck", nl: "Max Planck" },
          { en: "Louis de Broglie", es: "Louis de Broglie", de: "Louis de Broglie", nl: "Louis de Broglie" },
          { en: "Niels Bohr", es: "Niels Bohr", de: "Niels Bohr", nl: "Niels Bohr" }
        ],
        correct: 0,
        explanation: {
          en: "Albert Einstein proposed the photon theory in 1905, explaining the photoelectric effect by suggesting light consists of discrete energy packets (photons). This demonstrated wave-particle duality and earned him the 1921 Nobel Prize.",
          es: "Albert Einstein propuso la teoría del fotón en 1905, explicando el efecto fotoeléctrico al sugerir que la luz consiste en paquetes discretos de energía (fotones). Esto demostró la dualidad onda-partícula y le valió el Premio Nobel de 1921.",
          de: "Albert Einstein schlug 1905 die Photonentheorie vor und erklärte den photoelektrischen Effekt, indem er vorschlug, dass Licht aus diskreten Energiepaketen (Photonen) besteht. Dies demonstrierte die Welle-Teilchen-Dualität und brachte ihm 1921 den Nobelpreis ein.",
          nl: "Albert Einstein stelde de fotontheorie voor in 1905, waarbij hij het foto-elektrisch effect verklaarde door te suggereren dat licht bestaat uit discrete energiepakketten (fotonen). Dit toonde golf-deeltje dualiteit aan en leverde hem de Nobelprijs van 1921 op."
        }
      },
      {
        question: {
          en: "Which scientist discovered the principle of buoyancy?",
          es: "¿Qué científico descubrió el principio de flotabilidad?",
          de: "Welcher Wissenschaftler entdeckte das Prinzip des Auftriebs?",
          nl: "Welke wetenschapper ontdekte het principe van drijfvermogen?"
        },
        options: [
          { en: "Archimedes", es: "Arquímedes", de: "Archimedes", nl: "Archimedes" },
          { en: "Galileo Galilei", es: "Galileo Galilei", de: "Galileo Galilei", nl: "Galileo Galilei" },
          { en: "Isaac Newton", es: "Isaac Newton", de: "Isaac Newton", nl: "Isaac Newton" },
          { en: "Blaise Pascal", es: "Blaise Pascal", de: "Blaise Pascal", nl: "Blaise Pascal" }
        ],
        correct: 0,
        explanation: {
          en: "Archimedes discovered the principle of buoyancy around 250 BC, stating that a body immersed in fluid experiences an upward force equal to the weight of displaced fluid. Legend says he discovered this while bathing.",
          es: "Arquímedes descubrió el principio de flotabilidad alrededor del 250 a.C., estableciendo que un cuerpo sumergido en fluido experimenta una fuerza hacia arriba igual al peso del fluido desplazado. La leyenda dice que lo descubrió mientras se bañaba.",
          de: "Archimedes entdeckte um 250 v. Chr. das Prinzip des Auftriebs und stellte fest, dass ein in Flüssigkeit eingetauchter Körper eine Aufwärtskraft erfährt, die dem Gewicht der verdrängten Flüssigkeit entspricht. Der Legende nach entdeckte er dies beim Baden.",
          nl: "Archimedes ontdekte het principe van drijfvermogen rond 250 v.Chr., waarbij hij stelde dat een lichaam ondergedompeld in vloeistof een opwaartse kracht ervaart gelijk aan het gewicht van de verplaatste vloeistof. De legende zegt dat hij dit ontdekte tijdens het baden."
        }
      },
      {
        question: {
          en: "Who discovered that cells come from pre-existing cells?",
          es: "¿Quién descubrió que las células provienen de células preexistentes?",
          de: "Wer entdeckte, dass Zellen von bereits existierenden Zellen stammen?",
          nl: "Wie ontdekte dat cellen afkomstig zijn van reeds bestaande cellen?"
        },
        options: [
          { en: "Rudolf Virchow", es: "Rudolf Virchow", de: "Rudolf Virchow", nl: "Rudolf Virchow" },
          { en: "Robert Hooke", es: "Robert Hooke", de: "Robert Hooke", nl: "Robert Hooke" },
          { en: "Theodor Schwann", es: "Theodor Schwann", de: "Theodor Schwann", nl: "Theodor Schwann" },
          { en: "Matthias Schleiden", es: "Matthias Schleiden", de: "Matthias Schleiden", nl: "Matthias Schleiden" }
        ],
        correct: 0,
        explanation: {
          en: "Rudolf Virchow formulated the principle 'omnis cellula e cellula' (every cell from a cell) in 1855, establishing that all cells arise from pre-existing cells through division. This completed cell theory.",
          es: "Rudolf Virchow formuló el principio 'omnis cellula e cellula' (toda célula de una célula) en 1855, estableciendo que todas las células surgen de células preexistentes por división. Esto completó la teoría celular.",
          de: "Rudolf Virchow formulierte 1855 das Prinzip 'omnis cellula e cellula' (jede Zelle aus einer Zelle) und stellte fest, dass alle Zellen durch Teilung aus bereits existierenden Zellen entstehen. Dies vervollständigte die Zelltheorie.",
          nl: "Rudolf Virchow formuleerde het principe 'omnis cellula e cellula' (elke cel uit een cel) in 1855, waarbij hij vaststelde dat alle cellen ontstaan uit reeds bestaande cellen door deling. Dit completeerde de celtheorie."
        }
      },
      {
        question: {
          en: "Which astronomer discovered that the universe is expanding?",
          es: "¿Qué astrónomo descubrió que el universo se está expandiendo?",
          de: "Welcher Astronom entdeckte, dass sich das Universum ausdehnt?",
          nl: "Welke astronoom ontdekte dat het universum uitdijt?"
        },
        options: [
          { en: "Edwin Hubble", es: "Edwin Hubble", de: "Edwin Hubble", nl: "Edwin Hubble" },
          { en: "Georges Lemaître", es: "Georges Lemaître", de: "Georges Lemaître", nl: "Georges Lemaître" },
          { en: "Albert Einstein", es: "Albert Einstein", de: "Albert Einstein", nl: "Albert Einstein" },
          { en: "Harlow Shapley", es: "Harlow Shapley", de: "Harlow Shapley", nl: "Harlow Shapley" }
        ],
        correct: 0,
        explanation: {
          en: "Edwin Hubble discovered in 1929 that galaxies are moving away from us, with velocity proportional to distance (Hubble's Law). This observation provided evidence for the expanding universe and the Big Bang theory.",
          es: "Edwin Hubble descubrió en 1929 que las galaxias se alejan de nosotros, con velocidad proporcional a la distancia (Ley de Hubble). Esta observación proporcionó evidencia del universo en expansión y la teoría del Big Bang.",
          de: "Edwin Hubble entdeckte 1929, dass sich Galaxien von uns entfernen, mit einer Geschwindigkeit proportional zur Entfernung (Hubble-Gesetz). Diese Beobachtung lieferte Beweise für das expandierende Universum und die Urknalltheorie.",
          nl: "Edwin Hubble ontdekte in 1929 dat sterrenstelsels van ons weg bewegen, met een snelheid evenredig aan de afstand (Wet van Hubble). Deze waarneming leverde bewijs voor het expanderende universum en de oerknaltheorie."
        }
      },
      {
        question: {
          en: "Who discovered the process of photosynthesis?",
          es: "¿Quién descubrió el proceso de la fotosíntesis?",
          de: "Wer entdeckte den Prozess der Photosynthese?",
          nl: "Wie ontdekte het proces van fotosynthese?"
        },
        options: [
          { en: "Jan Ingenhousz", es: "Jan Ingenhousz", de: "Jan Ingenhousz", nl: "Jan Ingenhousz" },
          { en: "Joseph Priestley", es: "Joseph Priestley", de: "Joseph Priestley", nl: "Joseph Priestley" },
          { en: "Julius von Sachs", es: "Julius von Sachs", de: "Julius von Sachs", nl: "Julius von Sachs" },
          { en: "Melvin Calvin", es: "Melvin Calvin", de: "Melvin Calvin", nl: "Melvin Calvin" }
        ],
        correct: 0,
        explanation: {
          en: "Jan Ingenhousz discovered in 1779 that plants produce oxygen in sunlight through photosynthesis. Building on Priestley's work, he showed that only green parts of plants in light could restore air quality.",
          es: "Jan Ingenhousz descubrió en 1779 que las plantas producen oxígeno bajo la luz solar mediante la fotosíntesis. Basándose en el trabajo de Priestley, demostró que solo las partes verdes de las plantas en luz podían restaurar la calidad del aire.",
          de: "Jan Ingenhousz entdeckte 1779, dass Pflanzen im Sonnenlicht durch Photosynthese Sauerstoff produzieren. Aufbauend auf Priestleys Arbeit zeigte er, dass nur grüne Pflanzenteile im Licht die Luftqualität wiederherstellen können.",
          nl: "Jan Ingenhousz ontdekte in 1779 dat planten zuurstof produceren in zonlicht door fotosynthese. Voortbouwend op Priestleys werk toonde hij aan dat alleen groene delen van planten in licht de luchtkwaliteit konden herstellen."
        }
      },
      {
        question: {
          en: "Which scientist developed the first airplane in 1903?",
          es: "¿Qué científico desarrolló el primer avión en 1903?",
          de: "Welcher Wissenschaftler entwickelte 1903 das erste Flugzeug?",
          nl: "Welke wetenschapper ontwikkelde in 1903 het eerste vliegtuig?"
        },
        options: [
          { en: "Wright Brothers", es: "Hermanos Wright", de: "Gebrüder Wright", nl: "Gebroeders Wright" },
          { en: "Otto Lilienthal", es: "Otto Lilienthal", de: "Otto Lilienthal", nl: "Otto Lilienthal" },
          { en: "Samuel Langley", es: "Samuel Langley", de: "Samuel Langley", nl: "Samuel Langley" },
          { en: "Alberto Santos-Dumont", es: "Alberto Santos-Dumont", de: "Alberto Santos-Dumont", nl: "Alberto Santos-Dumont" }
        ],
        correct: 0,
        explanation: {
          en: "The Wright Brothers (Orville and Wilbur) achieved the first powered, controlled airplane flight on December 17, 1903, in Kitty Hawk, North Carolina. Their innovations in control systems made sustained flight possible.",
          es: "Los Hermanos Wright (Orville y Wilbur) lograron el primer vuelo controlado y motorizado de avión el 17 de diciembre de 1903, en Kitty Hawk, Carolina del Norte. Sus innovaciones en sistemas de control hicieron posible el vuelo sostenido.",
          de: "Die Gebrüder Wright (Orville und Wilbur) erreichten am 17. Dezember 1903 in Kitty Hawk, North Carolina, den ersten motorisierten, kontrollierten Flugzeugflug. Ihre Innovationen bei Steuerungssystemen machten anhaltenden Flug möglich.",
          nl: "De Gebroeders Wright (Orville en Wilbur) bereikten de eerste gemotoriseerde, gecontroleerde vliegtuigvlucht op 17 december 1903 in Kitty Hawk, North Carolina. Hun innovaties in besturingssystemen maakten volgehouden vlucht mogelijk."
        }
      },
      {
        question: {
          en: "Who discovered the proton in 1917?",
          es: "¿Quién descubrió el protón en 1917?",
          de: "Wer entdeckte 1917 das Proton?",
          nl: "Wie ontdekte in 1917 het proton?"
        },
        options: [
          { en: "Ernest Rutherford", es: "Ernest Rutherford", de: "Ernest Rutherford", nl: "Ernest Rutherford" },
          { en: "J.J. Thomson", es: "J.J. Thomson", de: "J.J. Thomson", nl: "J.J. Thomson" },
          { en: "James Chadwick", es: "James Chadwick", de: "James Chadwick", nl: "James Chadwick" },
          { en: "Niels Bohr", es: "Niels Bohr", de: "Niels Bohr", nl: "Niels Bohr" }
        ],
        correct: 0,
        explanation: {
          en: "Ernest Rutherford discovered the proton in 1917 during experiments bombarding nitrogen with alpha particles. He identified the hydrogen nucleus as a fundamental particle, later named the proton.",
          es: "Ernest Rutherford descubrió el protón en 1917 durante experimentos bombardeando nitrógeno con partículas alfa. Identificó el núcleo de hidrógeno como una partícula fundamental, posteriormente nombrada protón.",
          de: "Ernest Rutherford entdeckte 1917 das Proton bei Experimenten, bei denen er Stickstoff mit Alphateilchen beschoss. Er identifizierte den Wasserstoffkern als fundamentales Teilchen, später Proton genannt.",
          nl: "Ernest Rutherford ontdekte het proton in 1917 tijdens experimenten waarbij hij stikstof bombardeerde met alfadeeltjes. Hij identificeerde de waterstofkern als een fundamenteel deeltje, later proton genoemd."
        }
      },
      {
        question: {
          en: "Which scientist discovered that DNA carries genetic information?",
          es: "¿Qué científico descubrió que el ADN porta información genética?",
          de: "Welcher Wissenschaftler entdeckte, dass DNA genetische Information trägt?",
          nl: "Welke wetenschapper ontdekte dat DNA genetische informatie draagt?"
        },
        options: [
          { en: "Oswald Avery", es: "Oswald Avery", de: "Oswald Avery", nl: "Oswald Avery" },
          { en: "Gregor Mendel", es: "Gregor Mendel", de: "Gregor Mendel", nl: "Gregor Mendel" },
          { en: "James Watson", es: "James Watson", de: "James Watson", nl: "James Watson" },
          { en: "Friedrich Miescher", es: "Friedrich Miescher", de: "Friedrich Miescher", nl: "Friedrich Miescher" }
        ],
        correct: 0,
        explanation: {
          en: "Oswald Avery demonstrated in 1944 that DNA, not protein, is the molecule that carries genetic information. His experiments with pneumonia bacteria transformed our understanding of heredity.",
          es: "Oswald Avery demostró en 1944 que el ADN, no la proteína, es la molécula que porta información genética. Sus experimentos con bacterias de neumonía transformaron nuestra comprensión de la herencia.",
          de: "Oswald Avery bewies 1944, dass DNA, nicht Protein, das Molekül ist, das genetische Information trägt. Seine Experimente mit Pneumonie-Bakterien veränderten unser Verständnis der Vererbung.",
          nl: "Oswald Avery toonde in 1944 aan dat DNA, niet eiwit, het molecuul is dat genetische informatie draagt. Zijn experimenten met longontsteking bacteriën transformeerden ons begrip van erfelijkheid."
        }
      },
      {
        question: {
          en: "Who formulated the three laws of robotics?",
          es: "¿Quién formuló las tres leyes de la robótica?",
          de: "Wer formulierte die drei Gesetze der Robotik?",
          nl: "Wie formuleerde de drie wetten van robotica?"
        },
        options: [
          { en: "Isaac Asimov", es: "Isaac Asimov", de: "Isaac Asimov", nl: "Isaac Asimov" },
          { en: "Alan Turing", es: "Alan Turing", de: "Alan Turing", nl: "Alan Turing" },
          { en: "Norbert Wiener", es: "Norbert Wiener", de: "Norbert Wiener", nl: "Norbert Wiener" },
          { en: "John McCarthy", es: "John McCarthy", de: "John McCarthy", nl: "John McCarthy" }
        ],
        correct: 0,
        explanation: {
          en: "Isaac Asimov formulated the Three Laws of Robotics in his 1942 story 'Runaround': robots must not harm humans, must obey orders, and must protect themselves. Though fictional, these laws influenced real robotics ethics.",
          es: "Isaac Asimov formuló las Tres Leyes de la Robótica en su historia de 1942 'Runaround': los robots no deben dañar a los humanos, deben obedecer órdenes y deben protegerse. Aunque ficticias, estas leyes influyeron en la ética robótica real.",
          de: "Isaac Asimov formulierte die drei Gesetze der Robotik in seiner Geschichte 'Runaround' von 1942: Roboter dürfen Menschen nicht schaden, müssen Befehlen gehorchen und müssen sich selbst schützen. Obwohl fiktiv, beeinflussten diese Gesetze die echte Robotikethik.",
          nl: "Isaac Asimov formuleerde de Drie Wetten van Robotica in zijn verhaal 'Runaround' uit 1942: robots mogen mensen geen kwaad doen, moeten bevelen gehoorzamen en moeten zichzelf beschermen. Hoewel fictief, beïnvloedden deze wetten echte robotica-ethiek."
        }
      ,
      {
        question: {
                  "en": "When was this scientist born?",
                  "es": "When was este/a scientist born?",
                  "de": "When was diese(r) scientist born?",
                  "nl": "When was deze scientist born?"
        },
        options: [
          {
                    "en": "Correct year",
                    "es": "Correct year",
                    "de": "Correct year",
                    "nl": "Correct year"
          },
          {
                    "en": "5 years earlier",
                    "es": "5 years earlier",
                    "de": "5 years earlier",
                    "nl": "5 years earlier"
          },
          {
                    "en": "5 years later",
                    "es": "5 years later",
                    "de": "5 years later",
                    "nl": "5 years later"
          },
          {
                    "en": "10 years later",
                    "es": "10 years later",
                    "de": "10 years later",
                    "nl": "10 years later"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about this scientist is historically accurate and well-documented.",
                  "es": "Este hecho sobre this scientist es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über this scientist ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over this scientist is historisch accuraat en goed gedocumenteerd."
        }
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
