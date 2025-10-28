(function() {
  const level1 = {
    name: {
      en: "Historical Figures - Beginner",
      es: "Figuras Históricas - Principiante",
      de: "Historische Figuren - Anfänger",
      nl: "Historische Figuren - Beginner"
    },
    questions: [
      {
        question: {
          en: "Who was the first person to walk on the moon?",
          es: "¿Quién fue la primera persona en caminar sobre la luna?",
          de: "Wer war die erste Person die auf dem Mond gelaufen ist?",
          nl: "Wie was de eerste persoon die op de maan liep?"
        },
        options: [
          { en: "Neil Armstrong", es: "Neil Armstrong", de: "Neil Armstrong", nl: "Neil Armstrong" },
          { en: "Buzz Aldrin", es: "Buzz Aldrin", de: "Buzz Aldrin", nl: "Buzz Aldrin" },
          { en: "Yuri Gagarin", es: "Yuri Gagarin", de: "Juri Gagarin", nl: "Yuri Gagarin" },
          { en: "John Glenn", es: "John Glenn", de: "John Glenn", nl: "John Glenn" }
        ],
        correct: 0,
        explanation: {
          en: "Neil Armstrong was the commander of Apollo 11 and became the first human to step on the lunar surface on July 20, 1969.",
          es: "Neil Armstrong fue el comandante del Apolo 11 y se convirtió en el primer humano en pisar la superficie lunar el 20 de julio de 1969.",
          de: "Neil Armstrong war der Kommandant von Apollo 11 und wurde am 20. Juli 1969 der erste Mensch, der die Mondoberfläche betrat.",
          nl: "Neil Armstrong was de commandant van Apollo 11 en werd de eerste mens die op 20 juli 1969 voet op het maanoppervlak zette."
        }
      },
      {
        question: {
          en: "Which ancient Egyptian queen is famous for her beauty and relationships with Roman leaders?",
          es: "¿Qué reina del antiguo Egipto es famosa por su belleza y relaciones con líderes romanos?",
          de: "Welche altägyptische Königin ist berühmt für ihre Schönheit und Beziehungen zu römischen Führern?",
          nl: "Welke oude Egyptische koningin is beroemd om haar schoonheid en relaties met Romeinse leiders?"
        },
        options: [
          { en: "Cleopatra", es: "Cleopatra", de: "Kleopatra", nl: "Cleopatra" },
          { en: "Nefertiti", es: "Nefertiti", de: "Nofretete", nl: "Nefertiti" },
          { en: "Hatshepsut", es: "Hatshepsut", de: "Hatschepsut", nl: "Hatshepsut" },
          { en: "Ankhesenamun", es: "Ankhesenamun", de: "Anchesenamun", nl: "Ankhesenamun" }
        ],
        correct: 0,
        explanation: {
          en: "Cleopatra VII was the last pharaoh of Egypt, known for her intelligence, political skills, and famous relationships with Julius Caesar and Mark Antony.",
          es: "Cleopatra VII fue la última faraón de Egipto, conocida por su inteligencia, habilidades políticas y famosas relaciones con Julio César y Marco Antonio.",
          de: "Kleopatra VII war die letzte Pharaonin Ägyptens, bekannt für ihre Intelligenz, politischen Fähigkeiten und berühmten Beziehungen zu Julius Caesar und Marcus Antonius.",
          nl: "Cleopatra VII was de laatste farao van Egypte, bekend om haar intelligentie, politieke vaardigheden en beroemde relaties met Julius Caesar en Marcus Antonius."
        }
      },
      {
        question: {
          en: "Who was the first President of the United States?",
          es: "¿Quién fue el primer Presidente de los Estados Unidos?",
          de: "Wer war der erste Präsident der Vereinigten Staaten?",
          nl: "Wie was de eerste President van de Verenigde Staten?"
        },
        options: [
          { en: "George Washington", es: "George Washington", de: "George Washington", nl: "George Washington" },
          { en: "Thomas Jefferson", es: "Thomas Jefferson", de: "Thomas Jefferson", nl: "Thomas Jefferson" },
          { en: "John Adams", es: "John Adams", de: "John Adams", nl: "John Adams" },
          { en: "Benjamin Franklin", es: "Benjamin Franklin", de: "Benjamin Franklin", nl: "Benjamin Franklin" }
        ],
        correct: 0,
        explanation: {
          en: "George Washington served as the first President of the United States from 1789 to 1797 and is known as the 'Father of His Country'.",
          es: "George Washington sirvió como el primer Presidente de los Estados Unidos de 1789 a 1797 y es conocido como el 'Padre de su País'.",
          de: "George Washington diente von 1789 bis 1797 als erster Präsident der Vereinigten Staaten und ist als 'Vater seines Landes' bekannt.",
          nl: "George Washington diende als de eerste President van de Verenigde Staten van 1789 tot 1797 en staat bekend als de 'Vader van zijn Land'."
        }
      },
      {
        question: {
          en: "Which historical figure is famous for saying 'I have a dream'?",
          es: "¿Qué figura histórica es famosa por decir 'Tengo un sueño'?",
          de: "Welche historische Figur ist berühmt für den Ausspruch 'Ich habe einen Traum'?",
          nl: "Welke historische figuur is beroemd om de woorden 'Ik heb een droom'?"
        },
        options: [
          { en: "Martin Luther King Jr.", es: "Martin Luther King Jr.", de: "Martin Luther King Jr.", nl: "Martin Luther King Jr." },
          { en: "Malcolm X", es: "Malcolm X", de: "Malcolm X", nl: "Malcolm X" },
          { en: "John F. Kennedy", es: "John F. Kennedy", de: "John F. Kennedy", nl: "John F. Kennedy" },
          { en: "Abraham Lincoln", es: "Abraham Lincoln", de: "Abraham Lincoln", nl: "Abraham Lincoln" }
        ],
        correct: 0,
        explanation: {
          en: "Martin Luther King Jr. delivered his famous 'I Have a Dream' speech during the March on Washington for Jobs and Freedom on August 28, 1963.",
          es: "Martin Luther King Jr. pronunció su famoso discurso 'Tengo un sueño' durante la Marcha en Washington por el Trabajo y la Libertad el 28 de agosto de 1963.",
          de: "Martin Luther King Jr. hielt seine berühmte 'Ich habe einen Traum'-Rede während des Marsches auf Washington für Arbeit und Freiheit am 28. August 1963.",
          nl: "Martin Luther King Jr. hield zijn beroemde 'Ik heb een droom' toespraak tijdens de Mars op Washington voor Werk en Vrijheid op 28 augustus 1963."
        }
      },
      {
        question: {
          en: "Who was the famous French military leader who became Emperor of France?",
          es: "¿Quién fue el famoso líder militar francés que se convirtió en Emperador de Francia?",
          de: "Wer war der berühmte französische Militärführer, der Kaiser von Frankreich wurde?",
          nl: "Wie was de beroemde Franse militaire leider die Keizer van Frankrijk werd?"
        },
        options: [
          { en: "Napoleon Bonaparte", es: "Napoleón Bonaparte", de: "Napoleon Bonaparte", nl: "Napoleon Bonaparte" },
          { en: "Louis XIV", es: "Luis XIV", de: "Ludwig XIV", nl: "Lodewijk XIV" },
          { en: "Charles de Gaulle", es: "Charles de Gaulle", de: "Charles de Gaulle", nl: "Charles de Gaulle" },
          { en: "Joan of Arc", es: "Juana de Arco", de: "Jeanne d'Arc", nl: "Jeanne d'Arc" }
        ],
        correct: 0,
        explanation: {
          en: "Napoleon Bonaparte was a French military general who rose to power and became Emperor of France from 1804 to 1814, known for his military campaigns across Europe.",
          es: "Napoleón Bonaparte fue un general militar francés que ascendió al poder y se convirtió en Emperador de Francia de 1804 a 1814, conocido por sus campañas militares en Europa.",
          de: "Napoleon Bonaparte war ein französischer Militärgeneral, der an die Macht kam und von 1804 bis 1814 Kaiser von Frankreich wurde, bekannt für seine Militärkampagnen in Europa.",
          nl: "Napoleon Bonaparte was een Franse militaire generaal die aan de macht kwam en van 1804 tot 1814 Keizer van Frankrijk werd, bekend om zijn militaire campagnes door Europa."
        }
      },
      {
        question: {
          en: "Which ancient Greek philosopher taught Alexander the Great?",
          es: "¿Qué filósofo griego antiguo enseñó a Alejandro Magno?",
          de: "Welcher antike griechische Philosoph lehrte Alexander den Großen?",
          nl: "Welke oude Griekse filosoof gaf les aan Alexander de Grote?"
        },
        options: [
          { en: "Aristotle", es: "Aristóteles", de: "Aristoteles", nl: "Aristoteles" },
          { en: "Plato", es: "Platón", de: "Platon", nl: "Plato" },
          { en: "Socrates", es: "Sócrates", de: "Sokrates", nl: "Socrates" },
          { en: "Homer", es: "Homero", de: "Homer", nl: "Homerus" }
        ],
        correct: 0,
        explanation: {
          en: "Aristotle was hired by King Philip II of Macedon to tutor his son Alexander, who later became Alexander the Great, one of history's most successful military commanders.",
          es: "Aristóteles fue contratado por el Rey Felipe II de Macedonia para enseñar a su hijo Alejandro, quien más tarde se convirtió en Alejandro Magno, uno de los comandantes militares más exitosos de la historia.",
          de: "Aristoteles wurde von König Philipp II von Makedonien beauftragt, seinen Sohn Alexander zu unterrichten, der später zu Alexander dem Großen wurde, einem der erfolgreichsten Militärkommandeure der Geschichte.",
          nl: "Aristoteles werd ingehuurd door Koning Philippus II van Macedonië om zijn zoon Alexander te onderwijzen, die later Alexander de Grote werd, een van de meest succesvolle militaire commandanten uit de geschiedenis."
        }
      },
      {
        question: {
          en: "Who discovered America in 1492?",
          es: "¿Quién descubrió América en 1492?",
          de: "Wer entdeckte Amerika im Jahr 1492?",
          nl: "Wie ontdekte Amerika in 1492?"
        },
        options: [
          { en: "Christopher Columbus", es: "Cristóbal Colón", de: "Christoph Kolumbus", nl: "Christoffel Columbus" },
          { en: "Vasco da Gama", es: "Vasco da Gama", de: "Vasco da Gama", nl: "Vasco da Gama" },
          { en: "Ferdinand Magellan", es: "Fernando de Magallanes", de: "Ferdinand Magellan", nl: "Ferdinand Magellaan" },
          { en: "Marco Polo", es: "Marco Polo", de: "Marco Polo", nl: "Marco Polo" }
        ],
        correct: 0,
        explanation: {
          en: "Christopher Columbus, an Italian explorer sailing for Spain, reached the Americas on October 12, 1492, beginning widespread European exploration and colonization.",
          es: "Cristóbal Colón, un explorador italiano navegando para España, llegó a las Américas el 12 de octubre de 1492, comenzando la exploración y colonización europea generalizada.",
          de: "Christoph Kolumbus, ein italienischer Entdecker im Dienste Spaniens, erreichte Amerika am 12. Oktober 1492 und begann die weit verbreitete europäische Erforschung und Kolonisierung.",
          nl: "Christoffel Columbus, een Italiaanse ontdekkingsreiziger die voor Spanje zeilde, bereikte Amerika op 12 oktober 1492, wat het begin was van wijdverspreide Europese verkenning en kolonisatie."
        }
      },
      {
        question: {
          en: "Which Roman general and politician was assassinated on the Ides of March?",
          es: "¿Qué general y político romano fue asesinado en los Idus de Marzo?",
          de: "Welcher römische General und Politiker wurde an den Iden des März ermordet?",
          nl: "Welke Romeinse generaal en politicus werd vermoord op de Iden van Maart?"
        },
        options: [
          { en: "Julius Caesar", es: "Julio César", de: "Julius Caesar", nl: "Julius Caesar" },
          { en: "Augustus", es: "Augusto", de: "Augustus", nl: "Augustus" },
          { en: "Mark Antony", es: "Marco Antonio", de: "Marcus Antonius", nl: "Marcus Antonius" },
          { en: "Pompey", es: "Pompeyo", de: "Pompeius", nl: "Pompeius" }
        ],
        correct: 0,
        explanation: {
          en: "Julius Caesar was assassinated on March 15, 44 BC (the Ides of March) by a group of Roman senators led by Brutus and Cassius in the Theatre of Pompey.",
          es: "Julio César fue asesinado el 15 de marzo del 44 a.C. (los Idus de Marzo) por un grupo de senadores romanos liderados por Bruto y Casio en el Teatro de Pompeyo.",
          de: "Julius Caesar wurde am 15. März 44 v.Chr. (den Iden des März) von einer Gruppe römischer Senatoren unter Führung von Brutus und Cassius im Theater des Pompeius ermordet.",
          nl: "Julius Caesar werd vermoord op 15 maart 44 v.Chr. (de Iden van Maart) door een groep Romeinse senatoren onder leiding van Brutus en Cassius in het Theater van Pompeius."
        }
      },
      {
        question: {
          en: "Who was the first woman to win a Nobel Prize?",
          es: "¿Quién fue la primera mujer en ganar un Premio Nobel?",
          de: "Wer war die erste Frau, die einen Nobelpreis gewann?",
          nl: "Wie was de eerste vrouw die een Nobelprijs won?"
        },
        options: [
          { en: "Marie Curie", es: "Marie Curie", de: "Marie Curie", nl: "Marie Curie" },
          { en: "Mother Teresa", es: "Madre Teresa", de: "Mutter Teresa", nl: "Moeder Teresa" },
          { en: "Jane Addams", es: "Jane Addams", de: "Jane Addams", nl: "Jane Addams" },
          { en: "Pearl S. Buck", es: "Pearl S. Buck", de: "Pearl S. Buck", nl: "Pearl S. Buck" }
        ],
        correct: 0,
        explanation: {
          en: "Marie Curie was the first woman to win a Nobel Prize, receiving the Nobel Prize in Physics in 1903, and later won the Nobel Prize in Chemistry in 1911.",
          es: "Marie Curie fue la primera mujer en ganar un Premio Nobel, recibiendo el Premio Nobel de Física en 1903, y luego ganó el Premio Nobel de Química en 1911.",
          de: "Marie Curie war die erste Frau, die einen Nobelpreis gewann, sie erhielt 1903 den Nobelpreis für Physik und später 1911 den Nobelpreis für Chemie.",
          nl: "Marie Curie was de eerste vrouw die een Nobelprijs won, ze ontving de Nobelprijs voor Natuurkunde in 1903 en won later de Nobelprijs voor Scheikunde in 1911."
        }
      },
      {
        question: {
          en: "Which British Prime Minister led the country during most of World War II?",
          es: "¿Qué Primer Ministro británico dirigió el país durante la mayor parte de la Segunda Guerra Mundial?",
          de: "Welcher britische Premierminister führte das Land während des größten Teils des Zweiten Weltkriegs?",
          nl: "Welke Britse Premier leidde het land tijdens het grootste deel van de Tweede Wereldoorlog?"
        },
        options: [
          { en: "Winston Churchill", es: "Winston Churchill", de: "Winston Churchill", nl: "Winston Churchill" },
          { en: "Neville Chamberlain", es: "Neville Chamberlain", de: "Neville Chamberlain", nl: "Neville Chamberlain" },
          { en: "Margaret Thatcher", es: "Margaret Thatcher", de: "Margaret Thatcher", nl: "Margaret Thatcher" },
          { en: "Tony Blair", es: "Tony Blair", de: "Tony Blair", nl: "Tony Blair" }
        ],
        correct: 0,
        explanation: {
          en: "Winston Churchill served as Prime Minister of the United Kingdom from 1940 to 1945, leading Britain through most of World War II with his inspiring speeches and determination.",
          es: "Winston Churchill sirvió como Primer Ministro del Reino Unido de 1940 a 1945, liderando a Gran Bretaña durante la mayor parte de la Segunda Guerra Mundial con sus discursos inspiradores y determinación.",
          de: "Winston Churchill diente von 1940 bis 1945 als Premierminister des Vereinigten Königreichs und führte Großbritannien durch den größten Teil des Zweiten Weltkriegs mit seinen inspirierenden Reden und Entschlossenheit.",
          nl: "Winston Churchill diende als Premier van het Verenigd Koninkrijk van 1940 tot 1945, leidde Groot-Brittannië door het grootste deel van de Tweede Wereldoorlog met zijn inspirerende toespraken en vastberadenheid."
        }
      },
      {
        question: {
          en: "Who was known as the 'Iron Lady'?",
          es: "¿Quién era conocida como la 'Dama de Hierro'?",
          de: "Wer war als die 'Eiserne Lady' bekannt?",
          nl: "Wie stond bekend als de 'IJzeren Dame'?"
        },
        options: [
          { en: "Margaret Thatcher", es: "Margaret Thatcher", de: "Margaret Thatcher", nl: "Margaret Thatcher" },
          { en: "Queen Elizabeth II", es: "Reina Isabel II", de: "Königin Elizabeth II", nl: "Koningin Elizabeth II" },
          { en: "Golda Meir", es: "Golda Meir", de: "Golda Meir", nl: "Golda Meir" },
          { en: "Indira Gandhi", es: "Indira Gandhi", de: "Indira Gandhi", nl: "Indira Gandhi" }
        ],
        correct: 0,
        explanation: {
          en: "Margaret Thatcher, the first female Prime Minister of the United Kingdom (1979-1990), was nicknamed the 'Iron Lady' for her uncompromising politics and strong leadership style.",
          es: "Margaret Thatcher, la primera Primera Ministra del Reino Unido (1979-1990), fue apodada la 'Dama de Hierro' por su política inflexible y estilo de liderazgo fuerte.",
          de: "Margaret Thatcher, die erste weibliche Premierministerin des Vereinigten Königreichs (1979-1990), wurde wegen ihrer kompromisslosen Politik und ihres starken Führungsstils die 'Eiserne Lady' genannt.",
          nl: "Margaret Thatcher, de eerste vrouwelijke Premier van het Verenigd Koninkrijk (1979-1990), kreeg de bijnaam 'IJzeren Dame' vanwege haar compromisloze politiek en sterke leiderschapsstijl."
        }
      },
      {
        question: {
          en: "Which explorer led the first expedition to circumnavigate the globe?",
          es: "¿Qué explorador dirigió la primera expedición para circunnavegar el globo?",
          de: "Welcher Entdecker führte die erste Expedition zur Umsegelung der Welt?",
          nl: "Welke ontdekkingsreiziger leidde de eerste expeditie om de wereld rond te zeilen?"
        },
        options: [
          { en: "Ferdinand Magellan", es: "Fernando de Magallanes", de: "Ferdinand Magellan", nl: "Ferdinand Magellaan" },
          { en: "Vasco da Gama", es: "Vasco da Gama", de: "Vasco da Gama", nl: "Vasco da Gama" },
          { en: "James Cook", es: "James Cook", de: "James Cook", nl: "James Cook" },
          { en: "Francis Drake", es: "Francis Drake", de: "Francis Drake", nl: "Francis Drake" }
        ],
        correct: 0,
        explanation: {
          en: "Ferdinand Magellan led the first expedition to circumnavigate the globe in 1519, though he died in the Philippines and Juan Sebastián Elcano completed the journey in 1522.",
          es: "Fernando de Magallanes dirigió la primera expedición para circunnavegar el globo en 1519, aunque murió en Filipinas y Juan Sebastián Elcano completó el viaje en 1522.",
          de: "Ferdinand Magellan führte 1519 die erste Expedition zur Umsegelung der Welt, obwohl er auf den Philippinen starb und Juan Sebastián Elcano die Reise 1522 vollendete.",
          nl: "Ferdinand Magellaan leidde de eerste expeditie om de wereld rond te zeilen in 1519, hoewel hij stierf in de Filipijnen en Juan Sebastián Elcano de reis voltooide in 1522."
        }
      },
      {
        question: {
          en: "Who was the leader of the Soviet Union during World War II?",
          es: "¿Quién fue el líder de la Unión Soviética durante la Segunda Guerra Mundial?",
          de: "Wer war der Führer der Sowjetunion während des Zweiten Weltkriegs?",
          nl: "Wie was de leider van de Sovjet-Unie tijdens de Tweede Wereldoorlog?"
        },
        options: [
          { en: "Joseph Stalin", es: "Iósif Stalin", de: "Josef Stalin", nl: "Jozef Stalin" },
          { en: "Vladimir Lenin", es: "Vladimir Lenin", de: "Wladimir Lenin", nl: "Vladimir Lenin" },
          { en: "Nikita Khrushchev", es: "Nikita Jrushchov", de: "Nikita Chruschtschow", nl: "Nikita Chroesjtsjov" },
          { en: "Leonid Brezhnev", es: "Leonid Brézhnev", de: "Leonid Breschnew", nl: "Leonid Brezjnev" }
        ],
        correct: 0,
        explanation: {
          en: "Joseph Stalin led the Soviet Union from 1924 until his death in 1953, including throughout World War II where he was one of the 'Big Three' Allied leaders.",
          es: "Iósif Stalin dirigió la Unión Soviética desde 1924 hasta su muerte en 1953, incluyendo toda la Segunda Guerra Mundial donde fue uno de los 'Tres Grandes' líderes Aliados.",
          de: "Josef Stalin führte die Sowjetunion von 1924 bis zu seinem Tod 1953, einschließlich des gesamten Zweiten Weltkriegs, wo er einer der 'Großen Drei' alliierten Führer war.",
          nl: "Jozef Stalin leidde de Sovjet-Unie van 1924 tot zijn dood in 1953, inclusief tijdens de hele Tweede Wereldoorlog waar hij een van de 'Grote Drie' geallieerde leiders was."
        }
      },
      {
        question: {
          en: "Which ancient Egyptian structure is one of the Seven Wonders of the Ancient World?",
          es: "¿Qué estructura egipcia antigua es una de las Siete Maravillas del Mundo Antiguo?",
          de: "Welches altägyptische Bauwerk ist eines der Sieben Weltwunder der Antike?",
          nl: "Welke oude Egyptische structuur is een van de Zeven Wereldwonderen van de Antieke Wereld?"
        },
        options: [
          { en: "Great Pyramid of Giza", es: "Gran Pirámide de Giza", de: "Große Pyramide von Gizeh", nl: "Grote Piramide van Gizeh" },
          { en: "Sphinx", es: "Esfinge", de: "Sphinx", nl: "Sfinx" },
          { en: "Temple of Karnak", es: "Templo de Karnak", de: "Tempel von Karnak", nl: "Tempel van Karnak" },
          { en: "Valley of the Kings", es: "Valle de los Reyes", de: "Tal der Könige", nl: "Vallei der Koningen" }
        ],
        correct: 0,
        explanation: {
          en: "The Great Pyramid of Giza, built for Pharaoh Khufu around 2580 BC, is the only surviving wonder of the Seven Wonders of the Ancient World.",
          es: "La Gran Pirámide de Giza, construida para el Faraón Keops alrededor del 2580 a.C., es la única maravilla superviviente de las Siete Maravillas del Mundo Antiguo.",
          de: "Die Große Pyramide von Gizeh, um 2580 v.Chr. für Pharao Cheops erbaut, ist das einzige überlebende Weltwunder der Sieben Weltwunder der Antike.",
          nl: "De Grote Piramide van Gizeh, gebouwd voor Farao Cheops rond 2580 v.Chr., is het enige overlevende wonder van de Zeven Wereldwonderen van de Antieke Wereld."
        }
      },
      {
        question: {
          en: "Who was the famous nurse during the Crimean War known as 'The Lady with the Lamp'?",
          es: "¿Quién fue la famosa enfermera durante la Guerra de Crimea conocida como 'La Dama de la Lámpara'?",
          de: "Wer war die berühmte Krankenschwester während des Krimkriegs, bekannt als 'Die Dame mit der Lampe'?",
          nl: "Wie was de beroemde verpleegster tijdens de Krimoorlog bekend als 'De Dame met de Lamp'?"
        },
        options: [
          { en: "Florence Nightingale", es: "Florence Nightingale", de: "Florence Nightingale", nl: "Florence Nightingale" },
          { en: "Clara Barton", es: "Clara Barton", de: "Clara Barton", nl: "Clara Barton" },
          { en: "Mary Seacole", es: "Mary Seacole", de: "Mary Seacole", nl: "Mary Seacole" },
          { en: "Dorothea Dix", es: "Dorothea Dix", de: "Dorothea Dix", nl: "Dorothea Dix" }
        ],
        correct: 0,
        explanation: {
          en: "Florence Nightingale was a British nurse who tended to wounded soldiers during the Crimean War and is considered the founder of modern nursing practices.",
          es: "Florence Nightingale fue una enfermera británica que atendió a soldados heridos durante la Guerra de Crimea y es considerada la fundadora de las prácticas modernas de enfermería.",
          de: "Florence Nightingale war eine britische Krankenschwester, die während des Krimkriegs verwundete Soldaten versorgte und als Begründerin der modernen Krankenpflege gilt.",
          nl: "Florence Nightingale was een Britse verpleegster die gewonde soldaten verzorgde tijdens de Krimoorlog en wordt beschouwd als de grondlegger van moderne verpleegkundige praktijken."
        }
      },
      {
        question: {
          en: "Which German scientist developed the theory of relativity?",
          es: "¿Qué científico alemán desarrolló la teoría de la relatividad?",
          de: "Welcher deutsche Wissenschaftler entwickelte die Relativitätstheorie?",
          nl: "Welke Duitse wetenschapper ontwikkelde de relativiteitstheorie?"
        },
        options: [
          { en: "Albert Einstein", es: "Albert Einstein", de: "Albert Einstein", nl: "Albert Einstein" },
          { en: "Max Planck", es: "Max Planck", de: "Max Planck", nl: "Max Planck" },
          { en: "Werner Heisenberg", es: "Werner Heisenberg", de: "Werner Heisenberg", nl: "Werner Heisenberg" },
          { en: "Niels Bohr", es: "Niels Bohr", de: "Niels Bohr", nl: "Niels Bohr" }
        ],
        correct: 0,
        explanation: {
          en: "Albert Einstein developed both the special theory of relativity (1905) and general theory of relativity (1915), revolutionizing our understanding of space, time, and gravity.",
          es: "Albert Einstein desarrolló tanto la teoría especial de la relatividad (1905) como la teoría general de la relatividad (1915), revolucionando nuestra comprensión del espacio, tiempo y gravedad.",
          de: "Albert Einstein entwickelte sowohl die spezielle Relativitätstheorie (1905) als auch die allgemeine Relativitätstheorie (1915) und revolutionierte unser Verständnis von Raum, Zeit und Schwerkraft.",
          nl: "Albert Einstein ontwikkelde zowel de speciale relativiteitstheorie (1905) als de algemene relativiteitstheorie (1915), wat ons begrip van ruimte, tijd en zwaartekracht revolutioneerde."
        }
      },
      {
        question: {
          en: "Who was the last Pharaoh of Egypt?",
          es: "¿Quién fue el último Faraón de Egipto?",
          de: "Wer war der letzte Pharao Ägyptens?",
          nl: "Wie was de laatste Farao van Egypte?"
        },
        options: [
          { en: "Cleopatra VII", es: "Cleopatra VII", de: "Kleopatra VII", nl: "Cleopatra VII" },
          { en: "Tutankhamun", es: "Tutankamón", de: "Tutanchamun", nl: "Toetanchamon" },
          { en: "Ramesses II", es: "Ramsés II", de: "Ramses II", nl: "Ramses II" },
          { en: "Akhenaten", es: "Akenatón", de: "Echnaton", nl: "Achnaton" }
        ],
        correct: 0,
        explanation: {
          en: "Cleopatra VII was the last active pharaoh of Ptolemaic Egypt, ruling from 51 to 30 BC until Egypt became a province of the Roman Empire.",
          es: "Cleopatra VII fue la última faraón activa del Egipto ptolemaico, gobernando del 51 al 30 a.C. hasta que Egipto se convirtió en una provincia del Imperio Romano.",
          de: "Kleopatra VII war die letzte aktive Pharaonin des ptolemäischen Ägyptens, sie regierte von 51 bis 30 v.Chr., bis Ägypten eine Provinz des Römischen Reiches wurde.",
          nl: "Cleopatra VII was de laatste actieve farao van het Ptolemaeïsche Egypte, ze regeerde van 51 tot 30 v.Chr. totdat Egypte een provincie van het Romeinse Rijk werd."
        }
      },
      {
        question: {
          en: "Who led the Indian independence movement through non-violent resistance?",
          es: "¿Quién lideró el movimiento de independencia de la India a través de la resistencia no violenta?",
          de: "Wer führte die indische Unabhängigkeitsbewegung durch gewaltlosen Widerstand?",
          nl: "Wie leidde de Indiase onafhankelijkheidsbeweging door geweldloos verzet?"
        },
        options: [
          { en: "Mahatma Gandhi", es: "Mahatma Gandhi", de: "Mahatma Gandhi", nl: "Mahatma Gandhi" },
          { en: "Jawaharlal Nehru", es: "Jawaharlal Nehru", de: "Jawaharlal Nehru", nl: "Jawaharlal Nehru" },
          { en: "Subhas Chandra Bose", es: "Subhas Chandra Bose", de: "Subhas Chandra Bose", nl: "Subhas Chandra Bose" },
          { en: "Sardar Patel", es: "Sardar Patel", de: "Sardar Patel", nl: "Sardar Patel" }
        ],
        correct: 0,
        explanation: {
          en: "Mahatma Gandhi led India's independence movement through his philosophy of non-violent resistance (satyagraha), ultimately achieving independence from British rule in 1947.",
          es: "Mahatma Gandhi lideró el movimiento de independencia de la India a través de su filosofía de resistencia no violenta (satyagraha), logrando finalmente la independencia del dominio británico en 1947.",
          de: "Mahatma Gandhi führte Indiens Unabhängigkeitsbewegung durch seine Philosophie des gewaltlosen Widerstands (Satyagraha) und erreichte schließlich 1947 die Unabhängigkeit von der britischen Herrschaft.",
          nl: "Mahatma Gandhi leidde India's onafhankelijkheidsbeweging door zijn filosofie van geweldloos verzet (satyagraha), en bereikte uiteindelijk de onafhankelijkheid van de Britse overheersing in 1947."
        }
      },
      {
        question: {
          en: "Who led the Mongol Empire and conquered much of Asia and Europe?",
          es: "¿Quién lideró el Imperio Mongol y conquistó gran parte de Asia y Europa?",
          de: "Wer führte das Mongolische Reich und eroberte große Teile Asiens und Europas?",
          nl: "Wie leidde het Mongoolse Rijk en veroverde veel van Azië en Europa?"
        },
        options: [
          { en: "Genghis Khan", es: "Genghis Khan", de: "Dschingis Khan", nl: "Genghis Khan" },
          { en: "Kublai Khan", es: "Kublai Khan", de: "Kublai Khan", nl: "Kublai Khan" },
          { en: "Attila the Hun", es: "Atila el Huno", de: "Attila der Hunne", nl: "Attila de Hun" },
          { en: "Tamerlane", es: "Tamerlán", de: "Timur", nl: "Timoer" }
        ],
        correct: 0,
        explanation: {
          en: "Genghis Khan founded and led the Mongol Empire from 1206 until his death in 1227, creating the largest contiguous land empire in history.",
          es: "Genghis Khan fundó y lideró el Imperio Mongol desde 1206 hasta su muerte en 1227, creando el imperio terrestre contiguo más grande de la historia.",
          de: "Dschingis Khan gründete und führte das Mongolische Reich von 1206 bis zu seinem Tod 1227 und schuf das größte zusammenhängende Landreich der Geschichte.",
          nl: "Genghis Khan stichtte en leidde het Mongoolse Rijk van 1206 tot zijn dood in 1227, waarbij hij het grootste aaneengesloten landrijk in de geschiedenis creëerde."
        }
      },
      {
        question: {
          en: "Which explorer is credited with 'discovering' the Americas for Europe in 1492?",
          es: "¿Qué explorador es acreditado con 'descubrir' las Américas para Europa en 1492?",
          de: "Welcher Entdecker wird damit betraut, 1492 Amerika für Europa 'entdeckt' zu haben?",
          nl: "Welke ontdekkingsreiziger wordt gecrediteerd met het 'ontdekken' van Amerika voor Europa in 1492?"
        },
        options: [
          { en: "Christopher Columbus", es: "Cristóbal Colón", de: "Christoph Kolumbus", nl: "Christoffel Columbus" },
          { en: "Amerigo Vespucci", es: "Amerigo Vespucci", de: "Amerigo Vespucci", nl: "Amerigo Vespucci" },
          { en: "Leif Erikson", es: "Leif Erikson", de: "Leif Erikson", nl: "Leif Erikson" },
          { en: "John Cabot", es: "John Cabot", de: "John Cabot", nl: "John Cabot" }
        ],
        correct: 0,
        explanation: {
          en: "Christopher Columbus reached the Americas on October 12, 1492, while searching for a western route to Asia. His voyages initiated widespread European exploration and colonization.",
          es: "Cristóbal Colón llegó a las Américas el 12 de octubre de 1492, mientras buscaba una ruta occidental hacia Asia. Sus viajes iniciaron la exploración y colonización europea generalizada.",
          de: "Christoph Kolumbus erreichte Amerika am 12. Oktober 1492, während er nach einer westlichen Route nach Asien suchte. Seine Reisen leiteten die weit verbreitete europäische Erforschung und Kolonisierung ein.",
          nl: "Christoffel Columbus bereikte Amerika op 12 oktober 1492, terwijl hij zocht naar een westelijke route naar Azië. Zijn reizen begonnen wijdverspreide Europese verkenning en kolonisatie."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  }
})();