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
      },
      {
        question: {
          en: "Which queen ruled England for 63 years during the Victorian Era?",
          es: "¿Qué reina gobernó Inglaterra durante 63 años durante la Era Victoriana?",
          de: "Welche Königin regierte England 63 Jahre lang während der viktorianischen Ära?",
          nl: "Welke koningin regeerde Engeland 63 jaar lang tijdens het Victoriaanse Tijdperk?"
        },
        options: [
          { en: "Queen Victoria", es: "Reina Victoria", de: "Königin Victoria", nl: "Koningin Victoria" },
          { en: "Queen Elizabeth I", es: "Reina Isabel I", de: "Königin Elizabeth I", nl: "Koningin Elizabeth I" },
          { en: "Queen Anne", es: "Reina Ana", de: "Königin Anne", nl: "Koningin Anne" },
          { en: "Queen Mary", es: "Reina María", de: "Königin Mary", nl: "Koningin Mary" }
        ],
        correct: 0,
        explanation: {
          en: "Queen Victoria ruled the United Kingdom from 1837 to 1901, giving her name to the Victorian Era, a period of industrial, cultural, and political change.",
          es: "La Reina Victoria gobernó el Reino Unido de 1837 a 1901, dando su nombre a la Era Victoriana, un período de cambio industrial, cultural y político.",
          de: "Königin Victoria regierte das Vereinigte Königreich von 1837 bis 1901 und gab der viktorianischen Ära ihren Namen, einer Zeit des industriellen, kulturellen und politischen Wandels.",
          nl: "Koningin Victoria regeerde het Verenigd Koninkrijk van 1837 tot 1901, en gaf haar naam aan het Victoriaanse Tijdperk, een periode van industriële, culturele en politieke verandering."
        }
      },
      {
        question: {
          en: "Who was the first black President of the United States?",
          es: "¿Quién fue el primer presidente negro de los Estados Unidos?",
          de: "Wer war der erste schwarze Präsident der Vereinigten Staaten?",
          nl: "Wie was de eerste zwarte President van de Verenigde Staten?"
        },
        options: [
          { en: "Barack Obama", es: "Barack Obama", de: "Barack Obama", nl: "Barack Obama" },
          { en: "Martin Luther King Jr.", es: "Martin Luther King Jr.", de: "Martin Luther King Jr.", nl: "Martin Luther King Jr." },
          { en: "Nelson Mandela", es: "Nelson Mandela", de: "Nelson Mandela", nl: "Nelson Mandela" },
          { en: "Jesse Jackson", es: "Jesse Jackson", de: "Jesse Jackson", nl: "Jesse Jackson" }
        ],
        correct: 0,
        explanation: {
          en: "Barack Obama was elected as the 44th President of the United States in 2008, becoming the first African American to hold the office.",
          es: "Barack Obama fue elegido como el 44º Presidente de los Estados Unidos en 2008, convirtiéndose en el primer afroamericano en ocupar el cargo.",
          de: "Barack Obama wurde 2008 als 44. Präsident der Vereinigten Staaten gewählt und war der erste Afroamerikaner in diesem Amt.",
          nl: "Barack Obama werd in 2008 gekozen als de 44e President van de Verenigde Staten en werd de eerste Afro-Amerikaan die het ambt bekleedde."
        }
      },
      {
        question: {
          en: "Which famous artist painted the Mona Lisa?",
          es: "¿Qué famoso artista pintó la Mona Lisa?",
          de: "Welcher berühmte Künstler malte die Mona Lisa?",
          nl: "Welke beroemde kunstenaar schilderde de Mona Lisa?"
        },
        options: [
          { en: "Leonardo da Vinci", es: "Leonardo da Vinci", de: "Leonardo da Vinci", nl: "Leonardo da Vinci" },
          { en: "Michelangelo", es: "Miguel Ángel", de: "Michelangelo", nl: "Michelangelo" },
          { en: "Raphael", es: "Rafael", de: "Raffael", nl: "Rafaël" },
          { en: "Vincent van Gogh", es: "Vincent van Gogh", de: "Vincent van Gogh", nl: "Vincent van Gogh" }
        ],
        correct: 0,
        explanation: {
          en: "Leonardo da Vinci painted the Mona Lisa between 1503 and 1519. It is now one of the most famous paintings in the world, housed in the Louvre Museum in Paris.",
          es: "Leonardo da Vinci pintó la Mona Lisa entre 1503 y 1519. Es ahora una de las pinturas más famosas del mundo, alojada en el Museo del Louvre en París.",
          de: "Leonardo da Vinci malte die Mona Lisa zwischen 1503 und 1519. Sie ist heute eines der berühmtesten Gemälde der Welt und befindet sich im Louvre-Museum in Paris.",
          nl: "Leonardo da Vinci schilderde de Mona Lisa tussen 1503 en 1519. Het is nu een van de beroemdste schilderijen ter wereld, te zien in het Louvre Museum in Parijs."
        }
      },
      {
        question: {
          en: "Who wrote the plays 'Romeo and Juliet' and 'Hamlet'?",
          es: "¿Quién escribió las obras 'Romeo y Julieta' y 'Hamlet'?",
          de: "Wer schrieb die Theaterstücke 'Romeo und Julia' und 'Hamlet'?",
          nl: "Wie schreef de toneelstukken 'Romeo en Julia' en 'Hamlet'?"
        },
        options: [
          { en: "William Shakespeare", es: "William Shakespeare", de: "William Shakespeare", nl: "William Shakespeare" },
          { en: "Charles Dickens", es: "Charles Dickens", de: "Charles Dickens", nl: "Charles Dickens" },
          { en: "Mark Twain", es: "Mark Twain", de: "Mark Twain", nl: "Mark Twain" },
          { en: "Oscar Wilde", es: "Oscar Wilde", de: "Oscar Wilde", nl: "Oscar Wilde" }
        ],
        correct: 0,
        explanation: {
          en: "William Shakespeare (1564-1616) was an English playwright and poet, widely regarded as the greatest writer in the English language and the world's greatest dramatist.",
          es: "William Shakespeare (1564-1616) fue un dramaturgo y poeta inglés, ampliamente considerado como el mejor escritor en lengua inglesa y el mayor dramaturgo del mundo.",
          de: "William Shakespeare (1564-1616) war ein englischer Dramatiker und Dichter, der weithin als der größte Schriftsteller der englischen Sprache und der größte Dramatiker der Welt gilt.",
          nl: "William Shakespeare (1564-1616) was een Engelse toneelschrijver en dichter, algemeen beschouwd als de grootste schrijver in de Engelse taal en 's werelds grootste dramaturg."
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
          { en: "Guglielmo Marconi", es: "Guglielmo Marconi", de: "Guglielmo Marconi", nl: "Guglielmo Marconi" }
        ],
        correct: 0,
        explanation: {
          en: "Alexander Graham Bell was awarded the first U.S. patent for the telephone in 1876, revolutionizing long-distance communication.",
          es: "Alexander Graham Bell recibió la primera patente estadounidense para el teléfono en 1876, revolucionando la comunicación a larga distancia.",
          de: "Alexander Graham Bell erhielt 1876 das erste US-Patent für das Telefon und revolutionierte die Fernkommunikation.",
          nl: "Alexander Graham Bell kreeg het eerste Amerikaanse patent voor de telefoon in 1876, wat de communicatie op afstand revolutioneerde."
        }
      },
      {
        question: {
          en: "Who was the famous female pilot who disappeared over the Pacific Ocean in 1937?",
          es: "¿Quién fue la famosa piloto que desapareció sobre el Océano Pacífico en 1937?",
          de: "Wer war die berühmte Pilotin, die 1937 über dem Pazifischen Ozean verschwand?",
          nl: "Wie was de beroemde vrouwelijke piloot die in 1937 over de Stille Oceaan verdween?"
        },
        options: [
          { en: "Amelia Earhart", es: "Amelia Earhart", de: "Amelia Earhart", nl: "Amelia Earhart" },
          { en: "Sally Ride", es: "Sally Ride", de: "Sally Ride", nl: "Sally Ride" },
          { en: "Valentina Tereshkova", es: "Valentina Tereshkova", de: "Valentina Tereschkowa", nl: "Valentina Tereshkova" },
          { en: "Bessie Coleman", es: "Bessie Coleman", de: "Bessie Coleman", nl: "Bessie Coleman" }
        ],
        correct: 0,
        explanation: {
          en: "Amelia Earhart was a pioneering American aviator who disappeared in 1937 while attempting to fly around the world. Her fate remains one of aviation's greatest mysteries.",
          es: "Amelia Earhart fue una aviadora estadounidense pionera que desapareció en 1937 mientras intentaba volar alrededor del mundo. Su destino sigue siendo uno de los mayores misterios de la aviación.",
          de: "Amelia Earhart war eine amerikanische Pionierin der Luftfahrt, die 1937 beim Versuch, um die Welt zu fliegen, verschwand. Ihr Schicksal bleibt eines der größten Rätsel der Luftfahrt.",
          nl: "Amelia Earhart was een pionierende Amerikaanse vliegenierster die in 1937 verdween tijdens een poging om de wereld rond te vliegen. Haar lot blijft een van de grootste mysteries van de luchtvaart."
        }
      },
      {
        question: {
          en: "Who was the ancient Greek warrior king who fought in the Trojan War?",
          es: "¿Quién fue el antiguo rey guerrero griego que luchó en la Guerra de Troya?",
          de: "Wer war der antike griechische Kriegerkönig, der im Trojanischen Krieg kämpfte?",
          nl: "Wie was de oude Griekse krijgerskoning die vocht in de Trojaanse Oorlog?"
        },
        options: [
          { en: "Achilles", es: "Aquiles", de: "Achilles", nl: "Achilles" },
          { en: "Odysseus", es: "Odiseo", de: "Odysseus", nl: "Odysseus" },
          { en: "Leonidas", es: "Leónidas", de: "Leonidas", nl: "Leonidas" },
          { en: "Perseus", es: "Perseo", de: "Perseus", nl: "Perseus" }
        ],
        correct: 0,
        explanation: {
          en: "Achilles was the greatest Greek warrior in the Trojan War, known for his strength and his vulnerable heel. His story is told in Homer's epic poem, the Iliad.",
          es: "Aquiles fue el mayor guerrero griego en la Guerra de Troya, conocido por su fuerza y su talón vulnerable. Su historia se cuenta en el poema épico de Homero, la Ilíada.",
          de: "Achilles war der größte griechische Krieger im Trojanischen Krieg, bekannt für seine Stärke und seine verwundbare Ferse. Seine Geschichte wird in Homers Epos, der Ilias, erzählt.",
          nl: "Achilles was de grootste Griekse krijger in de Trojaanse Oorlog, bekend om zijn kracht en zijn kwetsbare hiel. Zijn verhaal wordt verteld in Homerus' episch gedicht, de Ilias."
        }
      },
      {
        question: {
          en: "Which civil rights activist refused to give up her bus seat in 1955?",
          es: "¿Qué activista de derechos civiles se negó a ceder su asiento en el autobús en 1955?",
          de: "Welche Bürgerrechtsaktivistin weigerte sich 1955, ihren Bussitz aufzugeben?",
          nl: "Welke burgerrechtenactiviste weigerde in 1955 haar busstoeltje af te staan?"
        },
        options: [
          { en: "Rosa Parks", es: "Rosa Parks", de: "Rosa Parks", nl: "Rosa Parks" },
          { en: "Harriet Tubman", es: "Harriet Tubman", de: "Harriet Tubman", nl: "Harriet Tubman" },
          { en: "Sojourner Truth", es: "Sojourner Truth", de: "Sojourner Truth", nl: "Sojourner Truth" },
          { en: "Maya Angelou", es: "Maya Angelou", de: "Maya Angelou", nl: "Maya Angelou" }
        ],
        correct: 0,
        explanation: {
          en: "Rosa Parks' refusal to give up her bus seat to a white passenger in Montgomery, Alabama, sparked the Montgomery Bus Boycott and became a pivotal moment in the Civil Rights Movement.",
          es: "La negativa de Rosa Parks a ceder su asiento en el autobús a un pasajero blanco en Montgomery, Alabama, desencadenó el Boicot de Autobuses de Montgomery y se convirtió en un momento crucial del Movimiento de Derechos Civiles.",
          de: "Rosa Parks' Weigerung, ihren Bussitz einem weißen Fahrgast in Montgomery, Alabama, zu überlassen, löste den Montgomery-Busboykott aus und wurde zu einem entscheidenden Moment der Bürgerrechtsbewegung.",
          nl: "Rosa Parks' weigering om haar busstoeltje af te staan aan een blanke passagier in Montgomery, Alabama, leidde tot de Montgomery Bus Boycott en werd een cruciaal moment in de Burgerrechtenbeweging."
        }
      },
      {
        question: {
          en: "Who was the king of England who had six wives?",
          es: "¿Quién fue el rey de Inglaterra que tuvo seis esposas?",
          de: "Wer war der König von England, der sechs Ehefrauen hatte?",
          nl: "Wie was de koning van Engeland die zes vrouwen had?"
        },
        options: [
          { en: "Henry VIII", es: "Enrique VIII", de: "Heinrich VIII", nl: "Hendrik VIII" },
          { en: "Henry V", es: "Enrique V", de: "Heinrich V", nl: "Hendrik V" },
          { en: "Edward VI", es: "Eduardo VI", de: "Eduard VI", nl: "Eduard VI" },
          { en: "Richard III", es: "Ricardo III", de: "Richard III", nl: "Richard III" }
        ],
        correct: 0,
        explanation: {
          en: "Henry VIII (1491-1547) is famous for having six wives and for breaking with the Catholic Church to establish the Church of England, partly so he could divorce his first wife.",
          es: "Enrique VIII (1491-1547) es famoso por tener seis esposas y por romper con la Iglesia Católica para establecer la Iglesia de Inglaterra, en parte para poder divorciarse de su primera esposa.",
          de: "Heinrich VIII (1491-1547) ist berühmt dafür, sechs Ehefrauen gehabt zu haben und für den Bruch mit der katholischen Kirche, um die Kirche von England zu gründen, teilweise um sich von seiner ersten Frau scheiden lassen zu können.",
          nl: "Hendrik VIII (1491-1547) staat bekend om zijn zes vrouwen en om zijn breuk met de Katholieke Kerk om de Kerk van Engeland op te richten, deels om van zijn eerste vrouw te kunnen scheiden."
        }
      },
      {
        question: {
          en: "Who was the first person in space?",
          es: "¿Quién fue la primera persona en el espacio?",
          de: "Wer war die erste Person im Weltraum?",
          nl: "Wie was de eerste persoon in de ruimte?"
        },
        options: [
          { en: "Yuri Gagarin", es: "Yuri Gagarin", de: "Juri Gagarin", nl: "Yuri Gagarin" },
          { en: "Neil Armstrong", es: "Neil Armstrong", de: "Neil Armstrong", nl: "Neil Armstrong" },
          { en: "Alan Shepard", es: "Alan Shepard", de: "Alan Shepard", nl: "Alan Shepard" },
          { en: "John Glenn", es: "John Glenn", de: "John Glenn", nl: "John Glenn" }
        ],
        correct: 0,
        explanation: {
          en: "Soviet cosmonaut Yuri Gagarin became the first human in space on April 12, 1961, completing one orbit of Earth aboard Vostok 1.",
          es: "El cosmonauta soviético Yuri Gagarin se convirtió en el primer humano en el espacio el 12 de abril de 1961, completando una órbita de la Tierra a bordo del Vostok 1.",
          de: "Der sowjetische Kosmonaut Juri Gagarin wurde am 12. April 1961 der erste Mensch im Weltraum und umkreiste die Erde einmal an Bord von Wostok 1.",
          nl: "De Sovjet-kosmonaut Yuri Gagarin werd de eerste mens in de ruimte op 12 april 1961, en voltooide één omwenteling om de aarde aan boord van Vostok 1."
        }
      },
      {
        question: {
          en: "Which woman became the Prime Minister of Israel in 1969?",
          es: "¿Qué mujer se convirtió en Primera Ministra de Israel en 1969?",
          de: "Welche Frau wurde 1969 Premierministerin von Israel?",
          nl: "Welke vrouw werd in 1969 Eerste Minister van Israël?"
        },
        options: [
          { en: "Golda Meir", es: "Golda Meir", de: "Golda Meir", nl: "Golda Meir" },
          { en: "Margaret Thatcher", es: "Margaret Thatcher", de: "Margaret Thatcher", nl: "Margaret Thatcher" },
          { en: "Indira Gandhi", es: "Indira Gandhi", de: "Indira Gandhi", nl: "Indira Gandhi" },
          { en: "Benazir Bhutto", es: "Benazir Bhutto", de: "Benazir Bhutto", nl: "Benazir Bhutto" }
        ],
        correct: 0,
        explanation: {
          en: "Golda Meir served as the Prime Minister of Israel from 1969 to 1974, becoming Israel's first and only female head of government.",
          es: "Golda Meir sirvió como Primera Ministra de Israel de 1969 a 1974, convirtiéndose en la primera y única jefa de gobierno femenina de Israel.",
          de: "Golda Meir diente von 1969 bis 1974 als Premierministerin von Israel und wurde Israels erste und einzige weibliche Regierungschefin.",
          nl: "Golda Meir diende van 1969 tot 1974 als Eerste Minister van Israël en werd Israëls eerste en enige vrouwelijke regeringsleider."
        }
      },
      {
        question: {
          en: "Who was the French military leader who became famous for his short stature?",
          es: "¿Quién fue el líder militar francés que se hizo famoso por su baja estatura?",
          de: "Wer war der französische Militärführer, der für seine geringe Körpergröße berühmt wurde?",
          nl: "Wie was de Franse militaire leider die beroemd werd om zijn kleine gestalte?"
        },
        options: [
          { en: "Napoleon Bonaparte", es: "Napoleón Bonaparte", de: "Napoleon Bonaparte", nl: "Napoleon Bonaparte" },
          { en: "Joan of Arc", es: "Juana de Arco", de: "Jeanne d'Arc", nl: "Jeanne d'Arc" },
          { en: "Louis XVI", es: "Luis XVI", de: "Ludwig XVI", nl: "Lodewijk XVI" },
          { en: "Marquis de Lafayette", es: "Marqués de Lafayette", de: "Marquis de Lafayette", nl: "Markies de Lafayette" }
        ],
        correct: 0,
        explanation: {
          en: "Napoleon Bonaparte was actually of average height for his time, but British propaganda portrayed him as short. He rose from obscurity to become Emperor of France and one of history's greatest military commanders.",
          es: "Napoleón Bonaparte en realidad tenía una altura promedio para su época, pero la propaganda británica lo retrató como bajo. Se elevó desde la oscuridad para convertirse en Emperador de Francia y uno de los mejores comandantes militares de la historia.",
          de: "Napoleon Bonaparte war für seine Zeit durchschnittlich groß, aber britische Propaganda stellte ihn als klein dar. Er stieg aus der Dunkelheit auf, um Kaiser von Frankreich und einer der größten Militärkommandanten der Geschichte zu werden.",
          nl: "Napoleon Bonaparte was eigenlijk van gemiddelde lengte voor zijn tijd, maar Britse propaganda portretteerde hem als klein. Hij steeg op uit het onbekende om Keizer van Frankrijk en een van de grootste militaire commandanten uit de geschiedenis te worden."
        }
      },
      {
        question: {
          en: "Who was the famous nurse known for founding modern nursing practices?",
          es: "¿Quién fue la famosa enfermera conocida por fundar las prácticas modernas de enfermería?",
          de: "Wer war die berühmte Krankenschwester, die für die Gründung moderner Pflegepraktiken bekannt ist?",
          nl: "Wie was de beroemde verpleegster die bekend staat om het oprichten van moderne verpleegkundige praktijken?"
        },
        options: [
          { en: "Florence Nightingale", es: "Florence Nightingale", de: "Florence Nightingale", nl: "Florence Nightingale" },
          { en: "Clara Barton", es: "Clara Barton", de: "Clara Barton", nl: "Clara Barton" },
          { en: "Mary Seacole", es: "Mary Seacole", de: "Mary Seacole", nl: "Mary Seacole" },
          { en: "Mother Teresa", es: "Madre Teresa", de: "Mutter Teresa", nl: "Moeder Teresa" }
        ],
        correct: 0,
        explanation: {
          en: "Florence Nightingale revolutionized nursing during the Crimean War and established the first scientifically based nursing school at St. Thomas' Hospital in London in 1860.",
          es: "Florence Nightingale revolucionó la enfermería durante la Guerra de Crimea y estableció la primera escuela de enfermería con base científica en el Hospital St. Thomas en Londres en 1860.",
          de: "Florence Nightingale revolutionierte die Krankenpflege während des Krimkrieges und gründete 1860 die erste wissenschaftlich fundierte Krankenpflegeschule am St. Thomas' Hospital in London.",
          nl: "Florence Nightingale revolutioneerde de verpleging tijdens de Krimoorlog en richtte in 1860 de eerste wetenschappelijk gebaseerde verpleegkundige school op in St. Thomas' Hospital in Londen."
        }
      },
      {
        question: {
          en: "Who was the famous abolitionist who helped slaves escape via the Underground Railroad?",
          es: "¿Quién fue la famosa abolicionista que ayudó a los esclavos a escapar a través del Ferrocarril Subterráneo?",
          de: "Wer war die berühmte Abolitionistin, die Sklaven half, über die Underground Railroad zu entkommen?",
          nl: "Wie was de beroemde afschaffingsstrijder die slaven hielp ontsnappen via de Underground Railroad?"
        },
        options: [
          { en: "Harriet Tubman", es: "Harriet Tubman", de: "Harriet Tubman", nl: "Harriet Tubman" },
          { en: "Frederick Douglass", es: "Frederick Douglass", de: "Frederick Douglass", nl: "Frederick Douglass" },
          { en: "Sojourner Truth", es: "Sojourner Truth", de: "Sojourner Truth", nl: "Sojourner Truth" },
          { en: "John Brown", es: "John Brown", de: "John Brown", nl: "John Brown" }
        ],
        correct: 0,
        explanation: {
          en: "Harriet Tubman escaped slavery herself and then made about 13 missions to rescue approximately 70 enslaved people using the Underground Railroad network.",
          es: "Harriet Tubman escapó de la esclavitud y luego realizó unas 13 misiones para rescatar a aproximadamente 70 personas esclavizadas utilizando la red del Ferrocarril Subterráneo.",
          de: "Harriet Tubman entkam selbst der Sklaverei und unternahm dann etwa 13 Missionen, um etwa 70 versklavte Menschen über das Netzwerk der Underground Railroad zu retten.",
          nl: "Harriet Tubman ontsnapte zelf uit de slavernij en ondernam vervolgens ongeveer 13 missies om ongeveer 70 tot slaaf gemaakte mensen te redden via het Underground Railroad-netwerk."
        }
      },
      {
        question: {
          en: "Which ancient philosopher drank poison after being sentenced to death in Athens?",
          es: "¿Qué filósofo antiguo bebió veneno después de ser condenado a muerte en Atenas?",
          de: "Welcher antike Philosoph trank Gift, nachdem er in Athen zum Tode verurteilt worden war?",
          nl: "Welke oude filosoof dronk gif nadat hij ter dood was veroordeeld in Athene?"
        },
        options: [
          { en: "Socrates", es: "Sócrates", de: "Sokrates", nl: "Socrates" },
          { en: "Plato", es: "Platón", de: "Platon", nl: "Plato" },
          { en: "Aristotle", es: "Aristóteles", de: "Aristoteles", nl: "Aristoteles" },
          { en: "Pythagoras", es: "Pitágoras", de: "Pythagoras", nl: "Pythagoras" }
        ],
        correct: 0,
        explanation: {
          en: "Socrates was sentenced to death in 399 BCE for allegedly corrupting the youth of Athens. He accepted his sentence and drank hemlock poison surrounded by his students.",
          es: "Sócrates fue condenado a muerte en 399 a.C. por supuestamente corromper a la juventud de Atenas. Aceptó su sentencia y bebió veneno de cicuta rodeado de sus estudiantes.",
          de: "Sokrates wurde 399 v.Chr. zum Tode verurteilt, weil er angeblich die Jugend Athens verdorben hatte. Er akzeptierte sein Urteil und trank Schierlingsbecher, umgeben von seinen Schülern.",
          nl: "Socrates werd in 399 v.Chr. ter dood veroordeeld omdat hij vermeend de jeugd van Athene had gecorrumpeerd. Hij accepteerde zijn vonnis en dronk gif van scheerling, omringd door zijn leerlingen."
        }
      },
      {
        question: {
          en: "Who was the longest-reigning British monarch before Queen Elizabeth II?",
          es: "¿Quién fue el monarca británico con el reinado más largo antes de la Reina Isabel II?",
          de: "Wer war der am längsten regierende britische Monarch vor Königin Elizabeth II?",
          nl: "Wie was de langst regerende Britse monarch vóór Koningin Elizabeth II?"
        },
        options: [
          { en: "Queen Victoria", es: "Reina Victoria", de: "Königin Victoria", nl: "Koningin Victoria" },
          { en: "King George III", es: "Rey Jorge III", de: "König Georg III", nl: "Koning George III" },
          { en: "King Edward VII", es: "Rey Eduardo VII", de: "König Eduard VII", nl: "Koning Edward VII" },
          { en: "King Henry VIII", es: "Rey Enrique VIII", de: "König Heinrich VIII", nl: "Koning Hendrik VIII" }
        ],
        correct: 0,
        explanation: {
          en: "Queen Victoria reigned for 63 years and 216 days (1837-1901), making her the longest-reigning monarch until Queen Elizabeth II surpassed her record in 2015.",
          es: "La Reina Victoria reinó durante 63 años y 216 días (1837-1901), convirtiéndola en la monarca con el reinado más largo hasta que la Reina Isabel II superó su récord en 2015.",
          de: "Königin Victoria regierte 63 Jahre und 216 Tage (1837-1901) und war damit die am längsten regierende Monarchin, bis Königin Elizabeth II 2015 ihren Rekord übertraf.",
          nl: "Koningin Victoria regeerde 63 jaar en 216 dagen (1837-1901), waardoor zij de langst regerende monarch was totdat Koningin Elizabeth II haar record in 2015 verbrak."
        }
      },
      {
        question: {
          en: "Who was the famous composer who became deaf but continued to create masterpieces?",
          es: "¿Quién fue el famoso compositor que se volvió sordo pero continuó creando obras maestras?",
          de: "Wer war der berühmte Komponist, der taub wurde, aber weiterhin Meisterwerke schuf?",
          nl: "Wie was de beroemde componist die doof werd maar bleef meesterwerken creëren?"
        },
        options: [
          { en: "Ludwig van Beethoven", es: "Ludwig van Beethoven", de: "Ludwig van Beethoven", nl: "Ludwig van Beethoven" },
          { en: "Wolfgang Amadeus Mozart", es: "Wolfgang Amadeus Mozart", de: "Wolfgang Amadeus Mozart", nl: "Wolfgang Amadeus Mozart" },
          { en: "Johann Sebastian Bach", es: "Johann Sebastian Bach", de: "Johann Sebastian Bach", nl: "Johann Sebastian Bach" },
          { en: "Franz Schubert", es: "Franz Schubert", de: "Franz Schubert", nl: "Franz Schubert" }
        ],
        correct: 0,
        explanation: {
          en: "Ludwig van Beethoven began losing his hearing in his late 20s and was almost completely deaf by his mid-40s, yet he composed some of his greatest works including his Ninth Symphony while deaf.",
          es: "Ludwig van Beethoven comenzó a perder la audición a finales de sus 20 años y estaba casi completamente sordo a mediados de sus 40 años, sin embargo compuso algunas de sus mejores obras incluyendo su Novena Sinfonía mientras estaba sordo.",
          de: "Ludwig van Beethoven begann Ende 20 sein Gehör zu verlieren und war Mitte 40 fast völlig taub, dennoch komponierte er einige seiner größten Werke, einschließlich seiner Neunten Symphonie, während er taub war.",
          nl: "Ludwig van Beethoven begon eind 20 zijn gehoor te verliezen en was tegen zijn midden 40 bijna volledig doof, toch componeerde hij enkele van zijn grootste werken waaronder zijn Negende Symfonie terwijl hij doof was."
        }
      },
      {
        question: {
          en: "Who was the young French woman who led French forces during the Hundred Years' War?",
          es: "¿Quién fue la joven francesa que lideró las fuerzas francesas durante la Guerra de los Cien Años?",
          de: "Wer war die junge Französin, die während des Hundertjährigen Krieges französische Streitkräfte anführte?",
          nl: "Wie was de jonge Franse vrouw die Franse troepen leidde tijdens de Honderdjarige Oorlog?"
        },
        options: [
          { en: "Joan of Arc", es: "Juana de Arco", de: "Jeanne d'Arc", nl: "Jeanne d'Arc" },
          { en: "Marie Antoinette", es: "María Antonieta", de: "Marie Antoinette", nl: "Marie Antoinette" },
          { en: "Catherine de' Medici", es: "Catalina de Médici", de: "Katharina von Medici", nl: "Catharina de' Medici" },
          { en: "Eleanor of Aquitaine", es: "Leonor de Aquitania", de: "Eleonore von Aquitanien", nl: "Eleonora van Aquitanië" }
        ],
        correct: 0,
        explanation: {
          en: "Joan of Arc claimed divine guidance and led French forces to several important victories during the Hundred Years' War before being captured and burned at the stake at age 19 in 1431.",
          es: "Juana de Arco afirmó tener guía divina y lideró las fuerzas francesas a varias victorias importantes durante la Guerra de los Cien Años antes de ser capturada y quemada en la hoguera a los 19 años en 1431.",
          de: "Jeanne d'Arc behauptete göttliche Führung zu haben und führte französische Streitkräfte zu mehreren wichtigen Siegen während des Hundertjährigen Krieges, bevor sie gefangen genommen und 1431 im Alter von 19 Jahren auf dem Scheiterhaufen verbrannt wurde.",
          nl: "Jeanne d'Arc beweerde goddelijke leiding te hebben en leidde Franse troepen naar verschillende belangrijke overwinningen tijdens de Honderdjarige Oorlog voordat ze werd gevangen genomen en op de brandstapel gezet op 19-jarige leeftijd in 1431."
        }
      },
      {
        question: {
          en: "Who wrote 'The Diary of a Young Girl' while hiding from the Nazis?",
          es: "¿Quién escribió 'El Diario de una Niña' mientras se escondía de los nazis?",
          de: "Wer schrieb 'Das Tagebuch eines jungen Mädchens', während sie sich vor den Nazis versteckte?",
          nl: "Wie schreef 'Het Dagboek van een Jong Meisje' terwijl ze zich verstopte voor de nazi's?"
        },
        options: [
          { en: "Anne Frank", es: "Anne Frank", de: "Anne Frank", nl: "Anne Frank" },
          { en: "Corrie ten Boom", es: "Corrie ten Boom", de: "Corrie ten Boom", nl: "Corrie ten Boom" },
          { en: "Sophie Scholl", es: "Sophie Scholl", de: "Sophie Scholl", nl: "Sophie Scholl" },
          { en: "Edith Stein", es: "Edith Stein", de: "Edith Stein", nl: "Edith Stein" }
        ],
        correct: 0,
        explanation: {
          en: "Anne Frank wrote her famous diary while hiding in a secret annex in Amsterdam from 1942 to 1944. She died in Bergen-Belsen concentration camp in 1945, but her diary survived and was published by her father.",
          es: "Anne Frank escribió su famoso diario mientras se escondía en un anexo secreto en Ámsterdam de 1942 a 1944. Murió en el campo de concentración de Bergen-Belsen en 1945, pero su diario sobrevivió y fue publicado por su padre.",
          de: "Anne Frank schrieb ihr berühmtes Tagebuch, während sie sich von 1942 bis 1944 in einem geheimen Anbau in Amsterdam versteckte. Sie starb 1945 im Konzentrationslager Bergen-Belsen, aber ihr Tagebuch überlebte und wurde von ihrem Vater veröffentlicht.",
          nl: "Anne Frank schreef haar beroemde dagboek terwijl ze van 1942 tot 1944 verborgen zat in een geheim achterhuis in Amsterdam. Ze stierf in 1945 in concentratiekamp Bergen-Belsen, maar haar dagboek overleefde en werd gepubliceerd door haar vader."
        }
      },
      {
        question: {
          en: "Who was the first President of South Africa elected after apartheid ended?",
          es: "¿Quién fue el primer Presidente de Sudáfrica elegido después de que terminó el apartheid?",
          de: "Wer war der erste Präsident Südafrikas, der nach dem Ende der Apartheid gewählt wurde?",
          nl: "Wie was de eerste President van Zuid-Afrika die werd gekozen na het einde van de apartheid?"
        },
        options: [
          { en: "Nelson Mandela", es: "Nelson Mandela", de: "Nelson Mandela", nl: "Nelson Mandela" },
          { en: "Desmond Tutu", es: "Desmond Tutu", de: "Desmond Tutu", nl: "Desmond Tutu" },
          { en: "F.W. de Klerk", es: "F.W. de Klerk", de: "F.W. de Klerk", nl: "F.W. de Klerk" },
          { en: "Thabo Mbeki", es: "Thabo Mbeki", de: "Thabo Mbeki", nl: "Thabo Mbeki" }
        ],
        correct: 0,
        explanation: {
          en: "Nelson Mandela became South Africa's first black president in 1994 after spending 27 years in prison. He worked to end apartheid and promote reconciliation between races.",
          es: "Nelson Mandela se convirtió en el primer presidente negro de Sudáfrica en 1994 después de pasar 27 años en prisión. Trabajó para poner fin al apartheid y promover la reconciliación entre razas.",
          de: "Nelson Mandela wurde 1994 Südafrikas erster schwarzer Präsident, nachdem er 27 Jahre im Gefängnis verbracht hatte. Er arbeitete daran, die Apartheid zu beenden und die Versöhnung zwischen den Rassen zu fördern.",
          nl: "Nelson Mandela werd in 1994 Zuid-Afrika's eerste zwarte president nadat hij 27 jaar in de gevangenis had gezeten. Hij werkte aan het beëindigen van de apartheid en het bevorderen van verzoening tussen de rassen."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  }
})();