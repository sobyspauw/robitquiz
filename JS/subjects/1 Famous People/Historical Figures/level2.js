// Historical Figures Quiz - Level 2: Basic-Medium Historical Knowledge
(function() {
  const level2 = {
    name: {
      en: "Historical Figures Level 2",
      es: "Figuras Históricas Nivel 2",
      de: "Historische Figuren Stufe 2",
      nl: "Historische Figuren Level 2"
    },
    questions: [
      {
        question: {
          en: "Which French military leader was exiled to the island of Elba?",
          es: "¿Qué líder militar francés fue exiliado a la isla de Elba?",
          de: "Welcher französische Militärführer wurde auf die Insel Elba verbannt?",
          nl: "Welke Franse militaire leider werd verbannen naar het eiland Elba?"
        },
        options: [
          { en: "Napoleon Bonaparte", es: "Napoleón Bonaparte", de: "Napoleon Bonaparte", nl: "Napoleon Bonaparte" },
          { en: "Joan of Arc", es: "Juana de Arco", de: "Jeanne d'Arc", nl: "Jeanne d'Arc" },
          { en: "Louis XIV", es: "Luis XIV", de: "Ludwig XIV", nl: "Lodewijk XIV" },
          { en: "Charles de Gaulle", es: "Charles de Gaulle", de: "Charles de Gaulle", nl: "Charles de Gaulle" }
        ],
        correct: 0,
        explanation: {
          en: "Napoleon was first exiled to Elba in 1814 after his defeat, but he escaped and returned for the famous 'Hundred Days' before his final exile to St. Helena.",
          es: "Napoleón fue exiliado por primera vez a Elba en 1814 tras su derrota, pero escapó y regresó para los famosos 'Cien Días' antes de su exilio final a Santa Elena.",
          de: "Napoleon wurde 1814 nach seiner Niederlage erstmals nach Elba verbannt, aber er entkam und kehrte für die berühmten 'Hundert Tage' zurück, bevor er endgültig nach St. Helena verbannt wurde.",
          nl: "Napoleon werd in 1814 na zijn nederlaag voor het eerst naar Elba verbannen, maar hij ontsnapte en keerde terug voor de beroemde 'Honderd Dagen' voor zijn definitieve verbanning naar St. Helena."
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
          { en: "Rosa Parks", es: "Rosa Parks", de: "Rosa Parks", nl: "Rosa Parks" },
          { en: "Florence Nightingale", es: "Florence Nightingale", de: "Florence Nightingale", nl: "Florence Nightingale" },
          { en: "Amelia Earhart", es: "Amelia Earhart", de: "Amelia Earhart", nl: "Amelia Earhart" }
        ],
        correct: 0,
        explanation: {
          en: "Marie Curie won the Nobel Prize in Physics in 1903 (shared with her husband Pierre and Henri Becquerel) and later won the Nobel Prize in Chemistry in 1911.",
          es: "Marie Curie ganó el Premio Nobel de Física en 1903 (compartido con su esposo Pierre y Henri Becquerel) y luego ganó el Premio Nobel de Química en 1911.",
          de: "Marie Curie gewann 1903 den Nobelpreis für Physik (geteilt mit ihrem Mann Pierre und Henri Becquerel) und später 1911 den Nobelpreis für Chemie.",
          nl: "Marie Curie won de Nobelprijs voor Natuurkunde in 1903 (gedeeld met haar echtgenoot Pierre en Henri Becquerel) en later de Nobelprijs voor Scheikunde in 1911."
        }
      },
      {
        question: {
          en: "Which American president was assassinated at Ford's Theatre?",
          es: "¿Qué presidente estadounidense fue asesinado en el Teatro Ford?",
          de: "Welcher amerikanische Präsident wurde im Ford's Theatre ermordet?",
          nl: "Welke Amerikaanse president werd vermoord in Ford's Theatre?"
        },
        options: [
          { en: "Abraham Lincoln", es: "Abraham Lincoln", de: "Abraham Lincoln", nl: "Abraham Lincoln" },
          { en: "John F. Kennedy", es: "John F. Kennedy", de: "John F. Kennedy", nl: "John F. Kennedy" },
          { en: "James A. Garfield", es: "James A. Garfield", de: "James A. Garfield", nl: "James A. Garfield" },
          { en: "William McKinley", es: "William McKinley", de: "William McKinley", nl: "William McKinley" }
        ],
        correct: 0,
        explanation: {
          en: "Abraham Lincoln was shot by John Wilkes Booth at Ford's Theatre in Washington, D.C. on April 14, 1865, while watching the play 'Our American Cousin'.",
          es: "Abraham Lincoln fue disparado por John Wilkes Booth en el Teatro Ford en Washington, D.C. el 14 de abril de 1865, mientras veía la obra 'Our American Cousin'.",
          de: "Abraham Lincoln wurde von John Wilkes Booth am 14. April 1865 im Ford's Theatre in Washington, D.C. erschossen, während er das Theaterstück 'Our American Cousin' ansah.",
          nl: "Abraham Lincoln werd neergeschoten door John Wilkes Booth in Ford's Theatre in Washington, D.C. op 14 april 1865, terwijl hij naar het toneelstuk 'Our American Cousin' keek."
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
          { en: "Queen Victoria", es: "Reina Victoria", de: "Königin Victoria", nl: "Koningin Victoria" },
          { en: "Golda Meir", es: "Golda Meir", de: "Golda Meir", nl: "Golda Meir" },
          { en: "Indira Gandhi", es: "Indira Gandhi", de: "Indira Gandhi", nl: "Indira Gandhi" }
        ],
        correct: 0,
        explanation: {
          en: "Margaret Thatcher, the UK's first female Prime Minister (1979-1990), earned this nickname for her uncompromising politics and strong leadership style during the Cold War era.",
          es: "Margaret Thatcher, la primera mujer Primera Ministra del Reino Unido (1979-1990), se ganó este apodo por su política intransigente y su fuerte estilo de liderazgo durante la era de la Guerra Fría.",
          de: "Margaret Thatcher, die erste weibliche Premierministerin Großbritanniens (1979-1990), erhielt diesen Spitznamen für ihre kompromisslose Politik und ihren starken Führungsstil während der Zeit des Kalten Krieges.",
          nl: "Margaret Thatcher, de eerste vrouwelijke Premier van het VK (1979-1990), kreeg deze bijnaam vanwege haar compromisloze politiek en sterke leiderschapsstijl tijdens het tijdperk van de Koude Oorlog."
        }
      },
      {
        question: {
          en: "Which explorer is credited with discovering America in 1492?",
          es: "¿Qué explorador es acreditado con el descubrimiento de América en 1492?",
          de: "Welcher Entdecker wird mit der Entdeckung Amerikas im Jahr 1492 in Verbindung gebracht?",
          nl: "Welke ontdekkingsreiziger wordt gecrediteerd met de ontdekking van Amerika in 1492?"
        },
        options: [
          { en: "Christopher Columbus", es: "Cristóbal Colón", de: "Christoph Kolumbus", nl: "Christoffel Columbus" },
          { en: "Vasco da Gama", es: "Vasco da Gama", de: "Vasco da Gama", nl: "Vasco da Gama" },
          { en: "Ferdinand Magellan", es: "Fernando de Magallanes", de: "Ferdinand Magellan", nl: "Ferdinand Magellaan" },
          { en: "Amerigo Vespucci", es: "Américo Vespucio", de: "Amerigo Vespucci", nl: "Amerigo Vespucci" }
        ],
        correct: 0,
        explanation: {
          en: "Christopher Columbus reached the Americas on October 12, 1492, though he believed he had reached the Indies. His voyages opened the Americas to European colonization.",
          es: "Cristóbal Colón llegó a las Américas el 12 de octubre de 1492, aunque creía que había llegado a las Indias. Sus viajes abrieron las Américas a la colonización europea.",
          de: "Christoph Kolumbus erreichte Amerika am 12. Oktober 1492, obwohl er glaubte, Indien erreicht zu haben. Seine Reisen öffneten Amerika für die europäische Kolonisierung.",
          nl: "Christoffel Columbus bereikte Amerika op 12 oktober 1492, hoewel hij dacht dat hij Indië had bereikt. Zijn reizen openden Amerika voor Europese kolonisatie."
        }
      },
      {
        question: {
          en: "Who painted the ceiling of the Sistine Chapel?",
          es: "¿Quién pintó el techo de la Capilla Sixtina?",
          de: "Wer malte die Decke der Sixtinischen Kapelle?",
          nl: "Wie schilderde het plafond van de Sixtijnse Kapel?"
        },
        options: [
          { en: "Michelangelo", es: "Miguel Ángel", de: "Michelangelo", nl: "Michelangelo" },
          { en: "Leonardo da Vinci", es: "Leonardo da Vinci", de: "Leonardo da Vinci", nl: "Leonardo da Vinci" },
          { en: "Raphael", es: "Rafael", de: "Raffael", nl: "Rafaël" },
          { en: "Donatello", es: "Donatello", de: "Donatello", nl: "Donatello" }
        ],
        correct: 0,
        explanation: {
          en: "Michelangelo painted the Sistine Chapel ceiling from 1508 to 1512, creating one of the most famous artworks in history, including the iconic 'Creation of Adam' scene.",
          es: "Miguel Ángel pintó el techo de la Capilla Sixtina de 1508 a 1512, creando una de las obras de arte más famosas de la historia, incluyendo la icónica escena de la 'Creación de Adán'.",
          de: "Michelangelo malte die Decke der Sixtinischen Kapelle von 1508 bis 1512 und schuf eines der berühmtesten Kunstwerke der Geschichte, einschließlich der ikonischen Szene der 'Erschaffung Adams'.",
          nl: "Michelangelo schilderde het plafond van de Sixtijnse Kapel van 1508 tot 1512, en creëerde een van de beroemdste kunstwerken in de geschiedenis, inclusief de iconische scène van de 'Schepping van Adam'."
        }
      },
      {
        question: {
          en: "Which ancient Greek philosopher taught Alexander the Great?",
          es: "¿Qué filósofo griego antiguo enseñó a Alejandro Magno?",
          de: "Welcher antike griechische Philosoph unterrichtete Alexander den Großen?",
          nl: "Welke oude Griekse filosoof leerde Alexander de Grote?"
        },
        options: [
          { en: "Aristotle", es: "Aristóteles", de: "Aristoteles", nl: "Aristoteles" },
          { en: "Plato", es: "Platón", de: "Platon", nl: "Plato" },
          { en: "Socrates", es: "Sócrates", de: "Sokrates", nl: "Socrates" },
          { en: "Pythagoras", es: "Pitágoras", de: "Pythagoras", nl: "Pythagoras" }
        ],
        correct: 0,
        explanation: {
          en: "Aristotle tutored Alexander the Great from 343 to 340 BCE when Alexander was 13-16 years old. This education greatly influenced Alexander's later conquests and cultural policies.",
          es: "Aristóteles fue tutor de Alejandro Magno desde 343 hasta 340 a.C. cuando Alejandro tenía 13-16 años. Esta educación influyó mucho en las posteriores conquistas y políticas culturales de Alejandro.",
          de: "Aristoteles unterrichtete Alexander den Großen von 343 bis 340 v.Chr., als Alexander 13-16 Jahre alt war. Diese Bildung beeinflusste Alexanders spätere Eroberungen und Kulturpolitik stark.",
          nl: "Aristoteles was de leraar van Alexander de Grote van 343 tot 340 v.Chr. toen Alexander 13-16 jaar oud was. Deze opleiding beïnvloedde Alexanders latere veroveringen en culturele beleid sterk."
        }
      },
      {
        question: {
          en: "Who was the last Tsar of Russia?",
          es: "¿Quién fue el último zar de Rusia?",
          de: "Wer war der letzte Zar von Russland?",
          nl: "Wie was de laatste tsaar van Rusland?"
        },
        options: [
          { en: "Nicholas II", es: "Nicolás II", de: "Nikolaus II", nl: "Nicolaas II" },
          { en: "Alexander III", es: "Alejandro III", de: "Alexander III", nl: "Alexander III" },
          { en: "Peter the Great", es: "Pedro el Grande", de: "Peter der Große", nl: "Peter de Grote" },
          { en: "Ivan the Terrible", es: "Iván el Terrible", de: "Iwan der Schreckliche", nl: "Ivan de Verschrikkelijke" }
        ],
        correct: 0,
        explanation: {
          en: "Nicholas II ruled from 1894 until his abdication in 1917 during the Russian Revolution. He and his family were executed by the Bolsheviks in 1918.",
          es: "Nicolás II gobernó desde 1894 hasta su abdicación en 1917 durante la Revolución Rusa. Él y su familia fueron ejecutados por los bolcheviques en 1918.",
          de: "Nikolaus II. herrschte von 1894 bis zu seiner Abdankung 1917 während der Russischen Revolution. Er und seine Familie wurden 1918 von den Bolschewiki hingerichtet.",
          nl: "Nicolaas II regeerde van 1894 tot zijn troonsafstand in 1917 tijdens de Russische Revolutie. Hij en zijn familie werden in 1918 geëxecuteerd door de Bolsjewieken."
        }
      },
      {
        question: {
          en: "Which Egyptian queen was known for her relationships with Julius Caesar and Mark Antony?",
          es: "¿Qué reina egipcia era conocida por sus relaciones con Julio César y Marco Antonio?",
          de: "Welche ägyptische Königin war für ihre Beziehungen zu Julius Caesar und Marcus Antonius bekannt?",
          nl: "Welke Egyptische koningin stond bekend om haar relaties met Julius Caesar en Marcus Antonius?"
        },
        options: [
          { en: "Cleopatra VII", es: "Cleopatra VII", de: "Kleopatra VII", nl: "Cleopatra VII" },
          { en: "Nefertiti", es: "Nefertiti", de: "Nofretete", nl: "Nefertiti" },
          { en: "Hatshepsut", es: "Hatshepsut", de: "Hatschepsut", nl: "Hatshepsut" },
          { en: "Ankhesenamun", es: "Ankhesenamun", de: "Anchesenamun", nl: "Ankhesenamun" }
        ],
        correct: 0,
        explanation: {
          en: "Cleopatra VII, the last pharaoh of Egypt, had famous relationships with these Roman leaders in attempts to preserve Egypt's independence and her own power.",
          es: "Cleopatra VII, la última faraona de Egipto, tuvo relaciones famosas con estos líderes romanos en intentos de preservar la independencia de Egipto y su propio poder.",
          de: "Kleopatra VII., die letzte Pharaonin Ägyptens, hatte berühmte Beziehungen zu diesen römischen Führern in Versuchen, Ägyptens Unabhängigkeit und ihre eigene Macht zu bewahren.",
          nl: "Cleopatra VII, de laatste farao van Egypte, had beroemde relaties met deze Romeinse leiders in pogingen om Egypte's onafhankelijkheid en haar eigen macht te behouden."
        }
      },
      {
        question: {
          en: "Who wrote 'The Communist Manifesto'?",
          es: "¿Quién escribió 'El Manifiesto Comunista'?",
          de: "Wer schrieb 'Das Kommunistische Manifest'?",
          nl: "Wie schreef 'Het Communistische Manifest'?"
        },
        options: [
          { en: "Karl Marx and Friedrich Engels", es: "Karl Marx y Friedrich Engels", de: "Karl Marx und Friedrich Engels", nl: "Karl Marx en Friedrich Engels" },
          { en: "Vladimir Lenin", es: "Vladimir Lenin", de: "Wladimir Lenin", nl: "Vladimir Lenin" },
          { en: "Leon Trotsky", es: "León Trotsky", de: "Leo Trotzki", nl: "Leon Trotski" },
          { en: "Joseph Stalin", es: "José Stalin", de: "Josef Stalin", nl: "Jozef Stalin" }
        ],
        correct: 0,
        explanation: {
          en: "Karl Marx and Friedrich Engels co-authored 'The Communist Manifesto' in 1848, which became one of the most influential political documents in history.",
          es: "Karl Marx y Friedrich Engels fueron coautores de 'El Manifiesto Comunista' en 1848, que se convirtió en uno de los documentos políticos más influyentes de la historia.",
          de: "Karl Marx und Friedrich Engels verfassten gemeinsam 'Das Kommunistische Manifest' im Jahr 1848, das zu einem der einflussreichsten politischen Dokumente der Geschichte wurde.",
          nl: "Karl Marx en Friedrich Engels schreven samen 'Het Communistische Manifest' in 1848, dat een van de meest invloedrijke politieke documenten in de geschiedenis werd."
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
          { en: "Clement Attlee", es: "Clement Attlee", de: "Clement Attlee", nl: "Clement Attlee" },
          { en: "Anthony Eden", es: "Anthony Eden", de: "Anthony Eden", nl: "Anthony Eden" }
        ],
        correct: 0,
        explanation: {
          en: "Winston Churchill served as Prime Minister from 1940 to 1945, leading Britain through its darkest hours and inspiring the nation with his speeches and determination.",
          es: "Winston Churchill sirvió como Primer Ministro de 1940 a 1945, dirigiendo a Gran Bretaña a través de sus horas más oscuras e inspirando a la nación con sus discursos y determinación.",
          de: "Winston Churchill diente von 1940 bis 1945 als Premierminister und führte Großbritannien durch seine dunkelsten Stunden, inspirierte die Nation mit seinen Reden und seiner Entschlossenheit.",
          nl: "Winston Churchill diende van 1940 tot 1945 als Premier en leidde Groot-Brittannië door zijn donkerste uren, inspireerde de natie met zijn toespraken en vastberadenheid."
        }
      },
      {
        question: {
          en: "Who was the first person to walk on the moon?",
          es: "¿Quién fue la primera persona en caminar en la luna?",
          de: "Wer war die erste Person, die auf dem Mond ging?",
          nl: "Wie was de eerste persoon die op de maan liep?"
        },
        options: [
          { en: "Neil Armstrong", es: "Neil Armstrong", de: "Neil Armstrong", nl: "Neil Armstrong" },
          { en: "Buzz Aldrin", es: "Buzz Aldrin", de: "Buzz Aldrin", nl: "Buzz Aldrin" },
          { en: "John Glenn", es: "John Glenn", de: "John Glenn", nl: "John Glenn" },
          { en: "Yuri Gagarin", es: "Yuri Gagarin", de: "Juri Gagarin", nl: "Yuri Gagarin" }
        ],
        correct: 0,
        explanation: {
          en: "Neil Armstrong became the first human to walk on the moon on July 20, 1969, during the Apollo 11 mission, famously saying 'That's one small step for man, one giant leap for mankind.'",
          es: "Neil Armstrong se convirtió en el primer humano en caminar en la luna el 20 de julio de 1969, durante la misión Apollo 11, diciendo famosamente 'Ese es un pequeño paso para el hombre, un salto gigante para la humanidad.'",
          de: "Neil Armstrong wurde am 20. Juli 1969 während der Apollo 11-Mission der erste Mensch, der auf dem Mond ging, und sagte berühmt: 'Das ist ein kleiner Schritt für einen Menschen, ein riesiger Sprung für die Menschheit.'",
          nl: "Neil Armstrong werd de eerste mens die op de maan liep op 20 juli 1969, tijdens de Apollo 11-missie, en zei beroemd: 'Dat is een kleine stap voor een mens, een reuzensprong voor de mensheid.'"
        }
      },
      {
        question: {
          en: "Which reformer is known for his 95 Theses that sparked the Protestant Reformation?",
          es: "¿Qué reformador es conocido por sus 95 Tesis que iniciaron la Reforma Protestante?",
          de: "Welcher Reformator ist für seine 95 Thesen bekannt, die die protestantische Reformation auslösten?",
          nl: "Welke hervormer staat bekend om zijn 95 stellingen die de Protestantse Reformatie op gang brachten?"
        },
        options: [
          { en: "Martin Luther", es: "Martín Lutero", de: "Martin Luther", nl: "Maarten Luther" },
          { en: "John Calvin", es: "Juan Calvino", de: "Johannes Calvin", nl: "Johannes Calvijn" },
          { en: "Henry VIII", es: "Enrique VIII", de: "Heinrich VIII", nl: "Hendrik VIII" },
          { en: "Thomas More", es: "Tomás Moro", de: "Thomas Morus", nl: "Thomas More" }
        ],
        correct: 0,
        explanation: {
          en: "Martin Luther posted his 95 Theses on the door of the Castle Church in Wittenberg in 1517, challenging the Catholic Church's practices and sparking the Protestant Reformation.",
          es: "Martín Lutero clavó sus 95 Tesis en la puerta de la Iglesia del Castillo en Wittenberg en 1517, desafiando las prácticas de la Iglesia Católica e iniciando la Reforma Protestante.",
          de: "Martin Luther schlug seine 95 Thesen 1517 an die Tür der Schlosskirche in Wittenberg an, stellte die Praktiken der katholischen Kirche in Frage und löste die protestantische Reformation aus.",
          nl: "Maarten Luther sloeg zijn 95 stellingen in 1517 aan de deur van de Slotkerk in Wittenberg, daagde de praktijken van de Katholieke Kerk uit en zette de Protestantse Reformatie in gang."
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
          en: "George Washington served as the first President from 1789 to 1797, setting many precedents for the office and earning the title 'Father of His Country.'",
          es: "George Washington sirvió como el primer Presidente de 1789 a 1797, estableciendo muchos precedentes para el cargo y ganándose el título de 'Padre de su País.'",
          de: "George Washington diente von 1789 bis 1797 als erster Präsident, setzte viele Präzedenzfälle für das Amt und erhielt den Titel 'Vater seines Landes.'",
          nl: "George Washington diende van 1789 tot 1797 als de eerste President, zette vele precedenten voor het ambt en verdiende de titel 'Vader van zijn Land.'"
        }
      },
      {
        question: {
          en: "Which Indian leader used non-violent resistance to help gain independence from Britain?",
          es: "¿Qué líder indio usó la resistencia no violenta para ayudar a ganar la independencia de Gran Bretaña?",
          de: "Welcher indische Führer nutzte gewaltlosen Widerstand, um die Unabhängigkeit von Großbritannien zu erlangen?",
          nl: "Welke Indiase leider gebruikte geweldloos verzet om onafhankelijkheid van Groot-Brittannië te helpen verkrijgen?"
        },
        options: [
          { en: "Mahatma Gandhi", es: "Mahatma Gandhi", de: "Mahatma Gandhi", nl: "Mahatma Gandhi" },
          { en: "Jawaharlal Nehru", es: "Jawaharlal Nehru", de: "Jawaharlal Nehru", nl: "Jawaharlal Nehru" },
          { en: "Subhas Chandra Bose", es: "Subhas Chandra Bose", de: "Subhas Chandra Bose", nl: "Subhas Chandra Bose" },
          { en: "Bal Gangadhar Tilak", es: "Bal Gangadhar Tilak", de: "Bal Gangadhar Tilak", nl: "Bal Gangadhar Tilak" }
        ],
        correct: 0,
        explanation: {
          en: "Mahatma Gandhi pioneered the use of non-violent civil disobedience and became the father of the Indian independence movement, inspiring civil rights movements worldwide.",
          es: "Mahatma Gandhi fue pionero en el uso de la desobediencia civil no violenta y se convirtió en el padre del movimiento de independencia de India, inspirando movimientos de derechos civiles en todo el mundo.",
          de: "Mahatma Gandhi war Pionier im Einsatz gewaltlosen zivilen Ungehorsams und wurde der Vater der indischen Unabhängigkeitsbewegung, inspirierte Bürgerrechtsbewegungen weltweit.",
          nl: "Mahatma Gandhi was een pionier in het gebruik van geweldloze burgerlijke ongehoorzaamheid en werd de vader van de Indiase onafhankelijkheidsbeweging, inspireerde burgerrechtenbeweging wereldwijd."
        }
      },
      {
        question: {
          en: "Who was the Roman general who crossed the Rubicon?",
          es: "¿Quién fue el general romano que cruzó el Rubicón?",
          de: "Wer war der römische General, der den Rubikon überschritt?",
          nl: "Wie was de Romeinse generaal die de Rubicon overstak?"
        },
        options: [
          { en: "Julius Caesar", es: "Julio César", de: "Julius Caesar", nl: "Julius Caesar" },
          { en: "Marcus Antonius", es: "Marco Antonio", de: "Marcus Antonius", nl: "Marcus Antonius" },
          { en: "Pompey", es: "Pompeyo", de: "Pompejus", nl: "Pompeius" },
          { en: "Augustus", es: "Augusto", de: "Augustus", nl: "Augustus" }
        ],
        correct: 0,
        explanation: {
          en: "Julius Caesar crossed the Rubicon River in 49 BCE with his army, defying the Roman Senate and starting a civil war. This act gave us the phrase 'crossing the Rubicon.'",
          es: "Julio César cruzó el río Rubicón en 49 a.C. con su ejército, desafiando al Senado Romano e iniciando una guerra civil. Este acto nos dio la frase 'cruzar el Rubicón.'",
          de: "Julius Caesar überquerte 49 v.Chr. mit seiner Armee den Rubikon, trotzte dem römischen Senat und begann einen Bürgerkrieg. Diese Tat gab uns den Ausdruck 'den Rubikon überschreiten.'",
          nl: "Julius Caesar stak in 49 v.Chr. met zijn leger de Rubicon over, tartte de Romeinse Senaat en begon een burgeroorlog. Deze daad gaf ons de uitdrukking 'de Rubicon oversteken.'"
        }
      },
      {
        question: {
          en: "Which scientist developed the theory of evolution by natural selection?",
          es: "¿Qué científico desarrolló la teoría de la evolución por selección natural?",
          de: "Welcher Wissenschaftler entwickelte die Evolutionstheorie durch natürliche Selektion?",
          nl: "Welke wetenschapper ontwikkelde de evolutietheorie door natuurlijke selectie?"
        },
        options: [
          { en: "Charles Darwin", es: "Charles Darwin", de: "Charles Darwin", nl: "Charles Darwin" },
          { en: "Gregor Mendel", es: "Gregor Mendel", de: "Gregor Mendel", nl: "Gregor Mendel" },
          { en: "Louis Pasteur", es: "Louis Pasteur", de: "Louis Pasteur", nl: "Louis Pasteur" },
          { en: "Alfred Russel Wallace", es: "Alfred Russel Wallace", de: "Alfred Russel Wallace", nl: "Alfred Russel Wallace" }
        ],
        correct: 0,
        explanation: {
          en: "Charles Darwin published 'On the Origin of Species' in 1859, presenting comprehensive evidence for evolution through natural selection, revolutionizing biology.",
          es: "Charles Darwin publicó 'El Origen de las Especies' en 1859, presentando evidencia comprehensiva para la evolución a través de la selección natural, revolucionando la biología.",
          de: "Charles Darwin veröffentlichte 1859 'Über die Entstehung der Arten' und präsentierte umfassende Beweise für die Evolution durch natürliche Selektion, revolutionierte die Biologie.",
          nl: "Charles Darwin publiceerde 'Over het ontstaan der soorten' in 1859, presenteerde uitgebreid bewijs voor evolutie door natuurlijke selectie, revolutioneerde de biologie."
        }
      },
      {
        question: {
          en: "Who was the youngest elected President of the United States?",
          es: "¿Quién fue el presidente electo más joven de los Estados Unidos?",
          de: "Wer war der jüngste gewählte Präsident der Vereinigten Staaten?",
          nl: "Wie was de jongst gekozen President van de Verenigde Staten?"
        },
        options: [
          { en: "John F. Kennedy", es: "John F. Kennedy", de: "John F. Kennedy", nl: "John F. Kennedy" },
          { en: "Bill Clinton", es: "Bill Clinton", de: "Bill Clinton", nl: "Bill Clinton" },
          { en: "Barack Obama", es: "Barack Obama", de: "Barack Obama", nl: "Barack Obama" },
          { en: "Theodore Roosevelt", es: "Theodore Roosevelt", de: "Theodore Roosevelt", nl: "Theodore Roosevelt" }
        ],
        correct: 0,
        explanation: {
          en: "John F. Kennedy was elected president at age 43 in 1960. Note that Theodore Roosevelt was younger when he became president, but he succeeded to the office rather than being elected.",
          es: "John F. Kennedy fue elegido presidente a los 43 años en 1960. Note que Theodore Roosevelt era más joven cuando se convirtió en presidente, pero sucedió al cargo en lugar de ser elegido.",
          de: "John F. Kennedy wurde 1960 im Alter von 43 Jahren zum Präsidenten gewählt. Beachten Sie, dass Theodore Roosevelt jünger war, als er Präsident wurde, aber er folgte dem Amt nach, anstatt gewählt zu werden.",
          nl: "John F. Kennedy werd gekozen tot president op 43-jarige leeftijd in 1960. Merk op dat Theodore Roosevelt jonger was toen hij president werd, maar hij volgde het ambt op in plaats van gekozen te worden."
        }
      },
      {
        question: {
          en: "Which nurse became famous for her work during the Crimean War?",
          es: "¿Qué enfermera se hizo famosa por su trabajo durante la Guerra de Crimea?",
          de: "Welche Krankenschwester wurde für ihre Arbeit während des Krimkrieges berühmt?",
          nl: "Welke verpleegster werd beroemd om haar werk tijdens de Krimoorlog?"
        },
        options: [
          { en: "Florence Nightingale", es: "Florence Nightingale", de: "Florence Nightingale", nl: "Florence Nightingale" },
          { en: "Clara Barton", es: "Clara Barton", de: "Clara Barton", nl: "Clara Barton" },
          { en: "Mary Seacole", es: "Mary Seacole", de: "Mary Seacole", nl: "Mary Seacole" },
          { en: "Dorothea Dix", es: "Dorothea Dix", de: "Dorothea Dix", nl: "Dorothea Dix" }
        ],
        correct: 0,
        explanation: {
          en: "Florence Nightingale revolutionized nursing during the Crimean War (1854-1856), dramatically reducing death rates through improved sanitation and earning the nickname 'The Lady with the Lamp.'",
          es: "Florence Nightingale revolucionó la enfermería durante la Guerra de Crimea (1854-1856), reduciendo dramáticamente las tasas de mortalidad a través de una mejor sanitización y ganándose el apodo de 'La Dama de la Lámpara.'",
          de: "Florence Nightingale revolutionierte die Krankenpflege während des Krimkrieges (1854-1856), reduzierte die Sterblichkeitsraten dramatisch durch verbesserte Hygiene und erhielt den Spitznamen 'Die Dame mit der Lampe.'",
          nl: "Florence Nightingale revolutioneerde de verpleging tijdens de Krimoorlog (1854-1856), verminderde dramatisch de sterftecijfers door verbeterde sanitatie en kreeg de bijnaam 'De Dame met de Lamp.'"
        }
      },
      {
        question: {
          en: "Who was the South African leader who fought against apartheid and became the country's first Black president?",
          es: "¿Quién fue el líder sudafricano que luchó contra el apartheid y se convirtió en el primer presidente negro del país?",
          de: "Wer war der südafrikanische Führer, der gegen die Apartheid kämpfte und der erste schwarze Präsident des Landes wurde?",
          nl: "Wie was de Zuid-Afrikaanse leider die vocht tegen apartheid en de eerste zwarte president van het land werd?"
        },
        options: [
          { en: "Nelson Mandela", es: "Nelson Mandela", de: "Nelson Mandela", nl: "Nelson Mandela" },
          { en: "Desmond Tutu", es: "Desmond Tutu", de: "Desmond Tutu", nl: "Desmond Tutu" },
          { en: "Steve Biko", es: "Steve Biko", de: "Steve Biko", nl: "Steve Biko" },
          { en: "Thabo Mbeki", es: "Thabo Mbeki", de: "Thabo Mbeki", nl: "Thabo Mbeki" }
        ],
        correct: 0,
        explanation: {
          en: "Nelson Mandela spent 27 years in prison for his anti-apartheid activism before being released in 1990. He became South Africa's first Black president in 1994 and won the Nobel Peace Prize in 1993 for his work in peacefully ending apartheid.",
          es: "Nelson Mandela pasó 27 años en prisión por su activismo anti-apartheid antes de ser liberado en 1990. Se convirtió en el primer presidente negro de Sudáfrica en 1994 y ganó el Premio Nobel de la Paz en 1993 por su trabajo en terminar pacíficamente el apartheid.",
          de: "Nelson Mandela verbrachte 27 Jahre im Gefängnis für seinen Anti-Apartheid-Aktivismus, bevor er 1990 freigelassen wurde. Er wurde 1994 Südafrikas erster schwarzer Präsident und gewann 1993 den Friedensnobelpreis für seine Arbeit zur friedlichen Beendigung der Apartheid.",
          nl: "Nelson Mandela bracht 27 jaar in de gevangenis door voor zijn anti-apartheid activisme voordat hij in 1990 werd vrijgelaten. Hij werd in 1994 Zuid-Afrika's eerste zwarte president en won in 1993 de Nobelprijs voor de Vrede voor zijn werk aan het vreedzaam beëindigen van apartheid."
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