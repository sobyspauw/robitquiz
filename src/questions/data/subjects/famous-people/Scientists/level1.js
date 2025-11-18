// Scientists Quiz - Level 1: Famous Scientists Beginner
(function() {
  const level1 = {
    name: {
      en: "Famous Scientists - Beginner",
      es: "Científicos Famosos - Principiante",
      de: "Berühmte Wissenschaftler - Anfänger",
      nl: "Beroemde Wetenschappers - Beginner"
    },
    questions: [
      {
        question: {
          en: "Who developed the theory of relativity?",
          es: "¿Quién desarrolló la teoría de la relatividad?",
          de: "Wer entwickelte die Relativitätstheorie?",
          nl: "Wie ontwikkelde de relativiteitstheorie?"
        },
        options: [
          { en: "Albert Einstein", es: "Albert Einstein", de: "Albert Einstein", nl: "Albert Einstein" },
          { en: "Isaac Newton", es: "Isaac Newton", de: "Isaac Newton", nl: "Isaac Newton" },
          { en: "Galileo Galilei", es: "Galileo Galilei", de: "Galileo Galilei", nl: "Galileo Galilei" },
          { en: "Stephen Hawking", es: "Stephen Hawking", de: "Stephen Hawking", nl: "Stephen Hawking" }
        ],
        correct: 0,
        explanation: {
          en: "Albert Einstein published his special theory of relativity in 1905 and general theory of relativity in 1915, revolutionizing our understanding of space and time.",
          es: "Albert Einstein publicó su teoría especial de la relatividad en 1905 y la teoría general de la relatividad en 1915, revolucionando nuestra comprensión del espacio y el tiempo.",
          de: "Albert Einstein veröffentlichte seine spezielle Relativitätstheorie 1905 und die allgemeine Relativitätstheorie 1915, wodurch unser Verständnis von Raum und Zeit revolutioniert wurde.",
          nl: "Albert Einstein publiceerde zijn speciale relativiteitstheorie in 1905 en algemene relativiteitstheorie in 1915, wat ons begrip van ruimte en tijd revolutioneerde."
        }
      },
      {
        question: {
          en: "Which scientist discovered penicillin?",
          es: "¿Qué científico descubrió la penicilina?",
          de: "Welcher Wissenschaftler entdeckte Penicillin?",
          nl: "Welke wetenschapper ontdekte penicilline?"
        },
        options: [
          { en: "Alexander Fleming", es: "Alexander Fleming", de: "Alexander Fleming", nl: "Alexander Fleming" },
          { en: "Louis Pasteur", es: "Louis Pasteur", de: "Louis Pasteur", nl: "Louis Pasteur" },
          { en: "Marie Curie", es: "Marie Curie", de: "Marie Curie", nl: "Marie Curie" },
          { en: "Jonas Salk", es: "Jonas Salk", de: "Jonas Salk", nl: "Jonas Salk" }
        ],
        correct: 0,
        explanation: {
          en: "Alexander Fleming discovered penicillin in 1928 by accident when mold contaminated one of his bacterial cultures, leading to the development of antibiotics.",
          es: "Alexander Fleming descubrió la penicilina en 1928 por accidente cuando el moho contaminó uno de sus cultivos bacterianos, llevando al desarrollo de los antibióticos.",
          de: "Alexander Fleming entdeckte Penicillin 1928 zufällig, als Schimmel eine seiner Bakterienkulturen kontaminierte, was zur Entwicklung von Antibiotika führte.",
          nl: "Alexander Fleming ontdekte penicilline in 1928 per ongeluk toen schimmel een van zijn bacterieculturen besmette, wat leidde tot de ontwikkeling van antibiotica."
        }
      },
      {
        question: {
          en: "Who is famous for the laws of motion and gravity?",
          es: "¿Quién es famoso por las leyes del movimiento y la gravedad?",
          de: "Wer ist berühmt für die Bewegungsgesetze und die Schwerkraft?",
          nl: "Wie is beroemd om de bewegingswetten en zwaartekracht?"
        },
        options: [
          { en: "Isaac Newton", es: "Isaac Newton", de: "Isaac Newton", nl: "Isaac Newton" },
          { en: "Johannes Kepler", es: "Johannes Kepler", de: "Johannes Kepler", nl: "Johannes Kepler" },
          { en: "Copernicus", es: "Copérnico", de: "Kopernikus", nl: "Copernicus" },
          { en: "Archimedes", es: "Arquímedes", de: "Archimedes", nl: "Archimedes" }
        ],
        correct: 0,
        explanation: {
          en: "Isaac Newton formulated the three laws of motion and the law of universal gravitation in his work 'Principia Mathematica' published in 1687.",
          es: "Isaac Newton formuló las tres leyes del movimiento y la ley de gravitación universal en su obra 'Principia Mathematica' publicada en 1687.",
          de: "Isaac Newton formulierte die drei Bewegungsgesetze und das Gesetz der universellen Gravitation in seinem Werk 'Principia Mathematica', das 1687 veröffentlicht wurde.",
          nl: "Isaac Newton formuleerde de drie bewegingswetten en de wet van universele gravitatie in zijn werk 'Principia Mathematica' gepubliceerd in 1687."
        }
      },
      {
        question: {
          en: "Which scientist is known for studying radioactivity and won two Nobel Prizes?",
          es: "¿Qué científico es conocido por estudiar la radioactividad y ganó dos Premios Nobel?",
          de: "Welcher Wissenschaftler ist bekannt für die Erforschung der Radioaktivität und gewann zwei Nobelpreise?",
          nl: "Welke wetenschapper staat bekend om het bestuderen van radioactiviteit en won twee Nobelprijzen?"
        },
        options: [
          { en: "Marie Curie", es: "Marie Curie", de: "Marie Curie", nl: "Marie Curie" },
          { en: "Rosalind Franklin", es: "Rosalind Franklin", de: "Rosalind Franklin", nl: "Rosalind Franklin" },
          { en: "Dorothy Hodgkin", es: "Dorothy Hodgkin", de: "Dorothy Hodgkin", nl: "Dorothy Hodgkin" },
          { en: "Lise Meitner", es: "Lise Meitner", de: "Lise Meitner", nl: "Lise Meitner" }
        ],
        correct: 0,
        explanation: {
          en: "Marie Curie won Nobel Prizes in both Physics (1903) and Chemistry (1911) for her groundbreaking research on radioactivity and discovery of elements polonium and radium.",
          es: "Marie Curie ganó Premios Nobel tanto en Física (1903) como en Química (1911) por su investigación pionera sobre radioactividad y el descubrimiento de los elementos polonio y radio.",
          de: "Marie Curie gewann Nobelpreise sowohl in Physik (1903) als auch in Chemie (1911) für ihre bahnbrechende Forschung zur Radioaktivität und die Entdeckung der Elemente Polonium und Radium.",
          nl: "Marie Curie won Nobelprijzen in zowel Natuurkunde (1903) als Scheikunde (1911) voor haar baanbrekende onderzoek naar radioactiviteit en de ontdekking van de elementen polonium en radium."
        }
      },
      {
        question: {
          en: "Who proposed the heliocentric model of the solar system?",
          es: "¿Quién propuso el modelo heliocéntrico del sistema solar?",
          de: "Wer schlug das heliozentrische Modell des Sonnensystems vor?",
          nl: "Wie stelde het heliocentrische model van het zonnestelsel voor?"
        },
        options: [
          { en: "Nicolaus Copernicus", es: "Nicolás Copérnico", de: "Nikolaus Kopernikus", nl: "Nicolaas Copernicus" },
          { en: "Ptolemy", es: "Ptolomeo", de: "Ptolemäus", nl: "Ptolemaeus" },
          { en: "Tycho Brahe", es: "Tycho Brahe", de: "Tycho Brahe", nl: "Tycho Brahe" },
          { en: "Aristotle", es: "Aristóteles", de: "Aristoteles", nl: "Aristoteles" }
        ],
        correct: 0,
        explanation: {
          en: "Nicolaus Copernicus proposed in 1543 that the Sun, not Earth, was at the center of the solar system, challenging the geocentric model that had dominated for centuries.",
          es: "Nicolás Copérnico propuso en 1543 que el Sol, no la Tierra, estaba en el centro del sistema solar, desafiando el modelo geocéntrico que había dominado por siglos.",
          de: "Nikolaus Kopernikus schlug 1543 vor, dass die Sonne, nicht die Erde, im Zentrum des Sonnensystems steht und stellte damit das geozentrische Modell in Frage, das jahrhundertelang vorherrschte.",
          nl: "Nicolaas Copernicus stelde in 1543 voor dat de Zon, niet de Aarde, in het centrum van het zonnestelsel stond, wat het geocentrische model uitdaagde dat eeuwenlang had gedomineerd."
        }
      },
      {
        question: {
          en: "Which scientist is known for his work on evolution and natural selection?",
          es: "¿Qué científico es conocido por su trabajo sobre evolución y selección natural?",
          de: "Welcher Wissenschaftler ist bekannt für seine Arbeit über Evolution und natürliche Selektion?",
          nl: "Welke wetenschapper staat bekend om zijn werk over evolutie en natuurlijke selectie?"
        },
        options: [
          { en: "Charles Darwin", es: "Charles Darwin", de: "Charles Darwin", nl: "Charles Darwin" },
          { en: "Gregor Mendel", es: "Gregor Mendel", de: "Gregor Mendel", nl: "Gregor Mendel" },
          { en: "Alfred Russel Wallace", es: "Alfred Russel Wallace", de: "Alfred Russel Wallace", nl: "Alfred Russel Wallace" },
          { en: "Jean-Baptiste Lamarck", es: "Jean-Baptiste Lamarck", de: "Jean-Baptiste Lamarck", nl: "Jean-Baptiste Lamarck" }
        ],
        correct: 0,
        explanation: {
          en: "Charles Darwin published 'On the Origin of Species' in 1859, proposing the theory of evolution through natural selection.",
          es: "Charles Darwin publicó 'El Origen de las Especies' en 1859, proponiendo la teoría de la evolución a través de la selección natural.",
          de: "Charles Darwin veröffentlichte 1859 'Über die Entstehung der Arten' und schlug die Evolutionstheorie durch natürliche Selektion vor.",
          nl: "Charles Darwin publiceerde 'Over het ontstaan der soorten' in 1859, waarbij hij de evolutietheorie door natuurlijke selectie voorstelde."
        }
      },
      {
        question: {
          en: "Who invented the telephone?",
          es: "¿Quién inventó el teléfono?",
          de: "Wer erfand das Telefon?",
          nl: "Wie vond de telefoon uit?"
        },
        options: [
          { en: "Alexander Graham Bell", es: "Alexander Graham Bell", de: "Alexander Graham Bell", nl: "Alexander Graham Bell" },
          { en: "Thomas Edison", es: "Thomas Edison", de: "Thomas Edison", nl: "Thomas Edison" },
          { en: "Nikola Tesla", es: "Nikola Tesla", de: "Nikola Tesla", nl: "Nikola Tesla" },
          { en: "Benjamin Franklin", es: "Benjamin Franklin", de: "Benjamin Franklin", nl: "Benjamin Franklin" }
        ],
        correct: 0,
        explanation: {
          en: "Alexander Graham Bell was awarded the first patent for the telephone in 1876, though there were other inventors working on similar devices.",
          es: "Alexander Graham Bell obtuvo la primera patente del teléfono en 1876, aunque había otros inventores trabajando en dispositivos similares.",
          de: "Alexander Graham Bell erhielt 1876 das erste Patent für das Telefon, obwohl andere Erfinder an ähnlichen Geräten arbeiteten.",
          nl: "Alexander Graham Bell kreeg het eerste patent voor de telefoon in 1876, hoewel er andere uitvinders aan vergelijkbare apparaten werkten."
        }
      },
      {
        question: {
          en: "Which scientist developed the polio vaccine?",
          es: "¿Qué científico desarrolló la vacuna contra la polio?",
          de: "Welcher Wissenschaftler entwickelte den Polio-Impfstoff?",
          nl: "Welke wetenschapper ontwikkelde het poliovaccin?"
        },
        options: [
          { en: "Jonas Salk", es: "Jonas Salk", de: "Jonas Salk", nl: "Jonas Salk" },
          { en: "Albert Sabin", es: "Albert Sabin", de: "Albert Sabin", nl: "Albert Sabin" },
          { en: "Edward Jenner", es: "Edward Jenner", de: "Edward Jenner", nl: "Edward Jenner" },
          { en: "Louis Pasteur", es: "Louis Pasteur", de: "Louis Pasteur", nl: "Louis Pasteur" }
        ],
        correct: 0,
        explanation: {
          en: "Jonas Salk developed the first successful inactivated polio vaccine in 1955, which helped virtually eliminate polio in many countries.",
          es: "Jonas Salk desarrolló la primera vacuna inactiva exitosa contra la polio en 1955, que ayudó a eliminar virtualmente la polio en muchos países.",
          de: "Jonas Salk entwickelte 1955 den ersten erfolgreichen inaktivierten Polio-Impfstoff, der half, Polio in vielen Ländern praktisch zu eliminieren.",
          nl: "Jonas Salk ontwikkelde de eerste succesvolle geïnactiveerde poliovaccin in 1955, wat hielp polio in veel landen vrijwel uit te roeien."
        }
      },
      {
        question: {
          en: "Who is known for discovering the structure of DNA?",
          es: "¿Quién es conocido por descubrir la estructura del ADN?",
          de: "Wer ist bekannt für die Entdeckung der DNA-Struktur?",
          nl: "Wie staat bekend om het ontdekken van de DNA-structuur?"
        },
        options: [
          { en: "James Watson and Francis Crick", es: "James Watson y Francis Crick", de: "James Watson und Francis Crick", nl: "James Watson en Francis Crick" },
          { en: "Rosalind Franklin", es: "Rosalind Franklin", de: "Rosalind Franklin", nl: "Rosalind Franklin" },
          { en: "Maurice Wilkins", es: "Maurice Wilkins", de: "Maurice Wilkins", nl: "Maurice Wilkins" },
          { en: "Barbara McClintock", es: "Barbara McClintock", de: "Barbara McClintock", nl: "Barbara McClintock" }
        ],
        correct: 0,
        explanation: {
          en: "James Watson and Francis Crick are credited with discovering the double helix structure of DNA in 1953, building on X-ray crystallography work by Rosalind Franklin.",
          es: "James Watson y Francis Crick son acreditados con descubrir la estructura de doble hélice del ADN en 1953, basándose en el trabajo de cristalografía de rayos X de Rosalind Franklin.",
          de: "James Watson und Francis Crick wird die Entdeckung der Doppelhelix-Struktur der DNA 1953 zugeschrieben, aufbauend auf Röntgenkristallographie-Arbeiten von Rosalind Franklin.",
          nl: "James Watson en Francis Crick worden gecrediteerd met het ontdekken van de dubbele helix structuur van DNA in 1953, voortbouwend op röntgenkristallografie werk van Rosalind Franklin."
        }
      },
      {
        question: {
          en: "Which physicist is famous for his laws of planetary motion?",
          es: "¿Qué físico es famoso por sus leyes del movimiento planetario?",
          de: "Welcher Physiker ist berühmt für seine Gesetze der Planetenbewegung?",
          nl: "Welke natuurkundige is beroemd om zijn wetten van planetaire beweging?"
        },
        options: [
          { en: "Johannes Kepler", es: "Johannes Kepler", de: "Johannes Kepler", nl: "Johannes Kepler" },
          { en: "Galileo Galilei", es: "Galileo Galilei", de: "Galileo Galilei", nl: "Galileo Galilei" },
          { en: "Tycho Brahe", es: "Tycho Brahe", de: "Tycho Brahe", nl: "Tycho Brahe" },
          { en: "Edmund Halley", es: "Edmund Halley", de: "Edmund Halley", nl: "Edmund Halley" }
        ],
        correct: 0,
        explanation: {
          en: "Johannes Kepler formulated three laws of planetary motion in the early 17th century, describing how planets orbit the Sun in elliptical paths.",
          es: "Johannes Kepler formuló tres leyes del movimiento planetario a principios del siglo XVII, describiendo cómo los planetas orbitan el Sol en trayectorias elípticas.",
          de: "Johannes Kepler formulierte Anfang des 17. Jahrhunderts drei Gesetze der Planetenbewegung und beschrieb, wie Planeten die Sonne in elliptischen Bahnen umkreisen.",
          nl: "Johannes Kepler formuleerde drie wetten van planetaire beweging in het begin van de 17e eeuw, waarin hij beschreef hoe planeten de Zon in elliptische banen omcirkelen."
        }
      },
      {
        question: {
          en: "Who developed the periodic table of elements?",
          es: "¿Quién desarrolló la tabla periódica de los elementos?",
          de: "Wer entwickelte das Periodensystem der Elemente?",
          nl: "Wie ontwikkelde het periodiek systeem der elementen?"
        },
        options: [
          { en: "Dmitri Mendeleev", es: "Dmitri Mendeleev", de: "Dmitri Mendelejew", nl: "Dmitri Mendelejev" },
          { en: "Antoine Lavoisier", es: "Antoine Lavoisier", de: "Antoine Lavoisier", nl: "Antoine Lavoisier" },
          { en: "John Dalton", es: "John Dalton", de: "John Dalton", nl: "John Dalton" },
          { en: "Robert Boyle", es: "Robert Boyle", de: "Robert Boyle", nl: "Robert Boyle" }
        ],
        correct: 0,
        explanation: {
          en: "Dmitri Mendeleev published the first periodic table in 1869, organizing elements by atomic weight and predicting the existence of undiscovered elements.",
          es: "Dmitri Mendeleev publicó la primera tabla periódica en 1869, organizando los elementos por peso atómico y prediciendo la existencia de elementos no descubiertos.",
          de: "Dmitri Mendelejew veröffentlichte 1869 das erste Periodensystem und ordnete Elemente nach Atomgewicht, wobei er die Existenz unentdeckter Elemente vorhersagte.",
          nl: "Dmitri Mendelejev publiceerde de eerste periodieke tabel in 1869, waarbij hij elementen ordende op atomair gewicht en het bestaan van onontdekte elementen voorspelde."
        }
      },
      {
        question: {
          en: "Which scientist is known for the principle of buoyancy?",
          es: "¿Qué científico es conocido por el principio de flotabilidad?",
          de: "Welcher Wissenschaftler ist bekannt für das Prinzip des Auftriebs?",
          nl: "Welke wetenschapper staat bekend om het principe van drijfvermogen?"
        },
        options: [
          { en: "Archimedes", es: "Arquímedes", de: "Archimedes", nl: "Archimedes" },
          { en: "Pascal", es: "Pascal", de: "Pascal", nl: "Pascal" },
          { en: "Bernoulli", es: "Bernoulli", de: "Bernoulli", nl: "Bernoulli" },
          { en: "Torricelli", es: "Torricelli", de: "Torricelli", nl: "Torricelli" }
        ],
        correct: 0,
        explanation: {
          en: "Archimedes discovered the principle of buoyancy around 250 BC, which states that a body immersed in fluid experiences an upward force equal to the weight of displaced fluid.",
          es: "Arquímedes descubrió el principio de flotabilidad alrededor del 250 a.C., que establece que un cuerpo sumergido en fluido experimenta una fuerza hacia arriba igual al peso del fluido desplazado.",
          de: "Archimedes entdeckte um 250 v. Chr. das Prinzip des Auftriebs, das besagt, dass ein in Flüssigkeit eingetauchter Körper eine Aufwärtskraft erfährt, die dem Gewicht der verdrängten Flüssigkeit entspricht.",
          nl: "Archimedes ontdekte het principe van drijfvermogen rond 250 v.Chr., dat stelt dat een lichaam ondergedompeld in vloeistof een opwaartse kracht ervaart gelijk aan het gewicht van de verplaatste vloeistof."
        }
      },
      {
        question: {
          en: "Who discovered the electron?",
          es: "¿Quién descubrió el electrón?",
          de: "Wer entdeckte das Elektron?",
          nl: "Wie ontdekte het elektron?"
        },
        options: [
          { en: "J.J. Thomson", es: "J.J. Thomson", de: "J.J. Thomson", nl: "J.J. Thomson" },
          { en: "Ernest Rutherford", es: "Ernest Rutherford", de: "Ernest Rutherford", nl: "Ernest Rutherford" },
          { en: "Niels Bohr", es: "Niels Bohr", de: "Niels Bohr", nl: "Niels Bohr" },
          { en: "Max Planck", es: "Max Planck", de: "Max Planck", nl: "Max Planck" }
        ],
        correct: 0,
        explanation: {
          en: "J.J. Thomson discovered the electron in 1897 through his cathode ray experiments, for which he won the Nobel Prize in Physics in 1906.",
          es: "J.J. Thomson descubrió el electrón en 1897 a través de sus experimentos con rayos catódicos, por lo cual ganó el Premio Nobel de Física en 1906.",
          de: "J.J. Thomson entdeckte 1897 das Elektron durch seine Kathodenstrahlexperimente, wofür er 1906 den Nobelpreis für Physik erhielt.",
          nl: "J.J. Thomson ontdekte het elektron in 1897 door zijn kathodestraalexperimenten, waarvoor hij in 1906 de Nobelprijs voor Natuurkunde won."
        }
      },
      {
        question: {
          en: "Which scientist developed the smallpox vaccine?",
          es: "¿Qué científico desarrolló la vacuna contra la viruela?",
          de: "Welcher Wissenschaftler entwickelte den Pocken-Impfstoff?",
          nl: "Welke wetenschapper ontwikkelde het pokkenvaccin?"
        },
        options: [
          { en: "Edward Jenner", es: "Edward Jenner", de: "Edward Jenner", nl: "Edward Jenner" },
          { en: "Louis Pasteur", es: "Louis Pasteur", de: "Louis Pasteur", nl: "Louis Pasteur" },
          { en: "Robert Koch", es: "Robert Koch", de: "Robert Koch", nl: "Robert Koch" },
          { en: "Paul Ehrlich", es: "Paul Ehrlich", de: "Paul Ehrlich", nl: "Paul Ehrlich" }
        ],
        correct: 0,
        explanation: {
          en: "Edward Jenner developed the first successful smallpox vaccine in 1796, using cowpox to provide immunity against smallpox, founding the science of immunology.",
          es: "Edward Jenner desarrolló la primera vacuna exitosa contra la viruela en 1796, usando viruela bovina para proporcionar inmunidad contra la viruela, fundando la ciencia de la inmunología.",
          de: "Edward Jenner entwickelte 1796 den ersten erfolgreichen Pocken-Impfstoff und verwendete Kuhpocken, um Immunität gegen Pocken zu verleihen, wodurch er die Immunologie begründete.",
          nl: "Edward Jenner ontwikkelde het eerste succesvolle pokkenvaccin in 1796, waarbij hij koepokken gebruikte om immuniteit tegen pokken te bieden, en stichtte de wetenschap van de immunologie."
        }
      },
      {
        question: {
          en: "Who is known for the uncertainty principle in quantum mechanics?",
          es: "¿Quién es conocido por el principio de incertidumbre en mecánica cuántica?",
          de: "Wer ist bekannt für das Unschärfeprinzip in der Quantenmechanik?",
          nl: "Wie staat bekend om het onzekerheidsprincipe in de kwantummechanica?"
        },
        options: [
          { en: "Werner Heisenberg", es: "Werner Heisenberg", de: "Werner Heisenberg", nl: "Werner Heisenberg" },
          { en: "Erwin Schrödinger", es: "Erwin Schrödinger", de: "Erwin Schrödinger", nl: "Erwin Schrödinger" },
          { en: "Wolfgang Pauli", es: "Wolfgang Pauli", de: "Wolfgang Pauli", nl: "Wolfgang Pauli" },
          { en: "Louis de Broglie", es: "Louis de Broglie", de: "Louis de Broglie", nl: "Louis de Broglie" }
        ],
        correct: 0,
        explanation: {
          en: "Werner Heisenberg formulated the uncertainty principle in 1927, which states that certain pairs of physical properties cannot be measured simultaneously with arbitrary precision.",
          es: "Werner Heisenberg formuló el principio de incertidumbre en 1927, que establece que ciertos pares de propiedades físicas no pueden medirse simultáneamente con precisión arbitraria.",
          de: "Werner Heisenberg formulierte 1927 das Unschärfeprinzip, das besagt, dass bestimmte Paare physikalischer Eigenschaften nicht gleichzeitig mit beliebiger Genauigkeit gemessen werden können.",
          nl: "Werner Heisenberg formuleerde het onzekerheidsprincipe in 1927, dat stelt dat bepaalde paren van fysieke eigenschappen niet tegelijkertijd met willekeurige precisie gemeten kunnen worden."
        }
      },
      {
        question: {
          en: "Which scientist proposed the continental drift theory?",
          es: "¿Qué científico propuso la teoría de la deriva continental?",
          de: "Welcher Wissenschaftler schlug die Kontinentaldrift-Theorie vor?",
          nl: "Welke wetenschapper stelde de continentaal drift theorie voor?"
        },
        options: [
          { en: "Alfred Wegener", es: "Alfred Wegener", de: "Alfred Wegener", nl: "Alfred Wegener" },
          { en: "Charles Lyell", es: "Charles Lyell", de: "Charles Lyell", nl: "Charles Lyell" },
          { en: "James Hutton", es: "James Hutton", de: "James Hutton", nl: "James Hutton" },
          { en: "Harry Hess", es: "Harry Hess", de: "Harry Hess", nl: "Harry Hess" }
        ],
        correct: 0,
        explanation: {
          en: "Alfred Wegener proposed the continental drift theory in 1912, suggesting that continents moved across Earth's surface over geological time.",
          es: "Alfred Wegener propuso la teoría de la deriva continental en 1912, sugiriendo que los continentes se movían a través de la superficie terrestre durante el tiempo geológico.",
          de: "Alfred Wegener schlug 1912 die Kontinentaldrift-Theorie vor und vermutete, dass sich Kontinente über geologische Zeiträume über die Erdoberfläche bewegten.",
          nl: "Alfred Wegener stelde de continentaal drift theorie voor in 1912, waarbij hij suggereerde dat continenten zich over geologische tijd over het aardoppervlak bewogen."
        }
      },
      {
        question: {
          en: "Who invented the first practical steam engine?",
          es: "¿Quién inventó la primera máquina de vapor práctica?",
          de: "Wer erfand die erste praktische Dampfmaschine?",
          nl: "Wie vond de eerste praktische stoommachine uit?"
        },
        options: [
          { en: "James Watt", es: "James Watt", de: "James Watt", nl: "James Watt" },
          { en: "Thomas Newcomen", es: "Thomas Newcomen", de: "Thomas Newcomen", nl: "Thomas Newcomen" },
          { en: "Hero of Alexandria", es: "Herón de Alejandría", de: "Heron von Alexandria", nl: "Hero van Alexandrië" },
          { en: "Richard Trevithick", es: "Richard Trevithick", de: "Richard Trevithick", nl: "Richard Trevithick" }
        ],
        correct: 0,
        explanation: {
          en: "James Watt significantly improved the steam engine in 1769, making it much more efficient and practical for industrial use, helping to power the Industrial Revolution.",
          es: "James Watt mejoró significativamente la máquina de vapor en 1769, haciéndola mucho más eficiente y práctica para uso industrial, ayudando a impulsar la Revolución Industrial.",
          de: "James Watt verbesserte 1769 die Dampfmaschine erheblich, machte sie viel effizienter und praktischer für den industriellen Einsatz und half, die Industrielle Revolution anzutreiben.",
          nl: "James Watt verbeterde de stoommachine aanzienlijk in 1769, waardoor het veel efficiënter en praktischer werd voor industrieel gebruik, wat hielp de Industriële Revolutie aan te drijven."
        }
      },
      {
        question: {
          en: "Which scientist discovered the law of electromagnetic induction?",
          es: "¿Qué científico descubrió la ley de inducción electromagnética?",
          de: "Welcher Wissenschaftler entdeckte das Gesetz der elektromagnetischen Induktion?",
          nl: "Welke wetenschapper ontdekte de wet van elektromagnetische inductie?"
        },
        options: [
          { en: "Michael Faraday", es: "Michael Faraday", de: "Michael Faraday", nl: "Michael Faraday" },
          { en: "André-Marie Ampère", es: "André-Marie Ampère", de: "André-Marie Ampère", nl: "André-Marie Ampère" },
          { en: "Georg Ohm", es: "Georg Ohm", de: "Georg Ohm", nl: "Georg Ohm" },
          { en: "Alessandro Volta", es: "Alessandro Volta", de: "Alessandro Volta", nl: "Alessandro Volta" }
        ],
        correct: 0,
        explanation: {
          en: "Michael Faraday discovered electromagnetic induction in 1831, showing that a changing magnetic field can induce an electric current, fundamental to electric generators and transformers.",
          es: "Michael Faraday descubrió la inducción electromagnética en 1831, mostrando que un campo magnético cambiante puede inducir una corriente eléctrica, fundamental para generadores eléctricos y transformadores.",
          de: "Michael Faraday entdeckte 1831 die elektromagnetische Induktion und zeigte, dass ein sich änderndes Magnetfeld einen elektrischen Strom induzieren kann, grundlegend für elektrische Generatoren und Transformatoren.",
          nl: "Michael Faraday ontdekte elektromagnetische inductie in 1831, waarbij hij toonde dat een veranderend magnetisch veld een elektrische stroom kan opwekken, fundamenteel voor elektrische generatoren en transformatoren."
        }
      },
      {
        question: {
          en: "Who developed the first successful airplane?",
          es: "¿Quién desarrolló el primer avión exitoso?",
          de: "Wer entwickelte das erste erfolgreiche Flugzeug?",
          nl: "Wie ontwikkelde het eerste succesvolle vliegtuig?"
        },
        options: [
          { en: "Wright Brothers", es: "Hermanos Wright", de: "Gebrüder Wright", nl: "Gebroeders Wright" },
          { en: "Santos-Dumont", es: "Santos-Dumont", de: "Santos-Dumont", nl: "Santos-Dumont" },
          { en: "Otto Lilienthal", es: "Otto Lilienthal", de: "Otto Lilienthal", nl: "Otto Lilienthal" },
          { en: "Glenn Curtiss", es: "Glenn Curtiss", de: "Glenn Curtiss", nl: "Glenn Curtiss" }
        ],
        correct: 0,
        explanation: {
          en: "Orville and Wilbur Wright achieved the first powered, sustained, and controlled airplane flight on December 17, 1903, at Kitty Hawk, North Carolina.",
          es: "Orville y Wilbur Wright lograron el primer vuelo motorizado, sostenido y controlado de avión el 17 de diciembre de 1903, en Kitty Hawk, Carolina del Norte.",
          de: "Orville und Wilbur Wright erreichten am 17. Dezember 1903 in Kitty Hawk, North Carolina, den ersten motorisierten, anhaltenden und kontrollierten Flugzeugflug.",
          nl: "Orville en Wilbur Wright bereikten de eerste gemotoriseerde, volgehouden en gecontroleerde vliegtuigvlucht op 17 december 1903, in Kitty Hawk, North Carolina."
        }
      },
      {
        question: {
          en: "Who proposed the theory of evolution by natural selection?",
          es: "¿Quién propuso la teoría de la evolución por selección natural?",
          de: "Wer schlug die Evolutionstheorie durch natürliche Selektion vor?",
          nl: "Wie stelde de evolutietheorie door natuurlijke selectie voor?"
        },
        options: [
          { en: "Charles Darwin", es: "Charles Darwin", de: "Charles Darwin", nl: "Charles Darwin" },
          { en: "Gregor Mendel", es: "Gregor Mendel", de: "Gregor Mendel", nl: "Gregor Mendel" },
          { en: "Jean-Baptiste Lamarck", es: "Jean-Baptiste Lamarck", de: "Jean-Baptiste Lamarck", nl: "Jean-Baptiste Lamarck" },
          { en: "Alfred Russel Wallace", es: "Alfred Russel Wallace", de: "Alfred Russel Wallace", nl: "Alfred Russel Wallace" }
        ],
        correct: 0,
        explanation: {
          en: "Charles Darwin published 'On the Origin of Species' in 1859, proposing that all species evolved from common ancestors through natural selection.",
          es: "Charles Darwin publicó 'El Origen de las Especies' en 1859, proponiendo que todas las especies evolucionaron de ancestros comunes a través de la selección natural.",
          de: "Charles Darwin veröffentlichte 1859 'Über die Entstehung der Arten' und schlug vor, dass alle Arten von gemeinsamen Vorfahren durch natürliche Selektion evolvierten.",
          nl: "Charles Darwin publiceerde 'Over het ontstaan der soorten' in 1859, waarbij hij voorstelde dat alle soorten evolueerden van gemeenschappelijke voorouders door natuurlijke selectie."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();