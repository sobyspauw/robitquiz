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
      },
      {
        question: {
          en: "Which Russian emperor modernized Russia and founded St. Petersburg?",
          es: "¿Qué emperador ruso modernizó Rusia y fundó San Petersburgo?",
          de: "Welcher russische Kaiser modernisierte Russland und gründete St. Petersburg?",
          nl: "Welke Russische keizer moderniseerde Rusland en stichtte St. Petersburg?"
        },
        options: [
          { en: "Peter the Great", es: "Pedro el Grande", de: "Peter der Große", nl: "Peter de Grote" },
          { en: "Ivan the Terrible", es: "Iván el Terrible", de: "Iwan der Schreckliche", nl: "Ivan de Verschrikkelijke" },
          { en: "Nicholas II", es: "Nicolás II", de: "Nikolaus II", nl: "Nicolaas II" },
          { en: "Alexander II", es: "Alejandro II", de: "Alexander II", nl: "Alexander II" }
        ],
        correct: 0,
        explanation: {
          en: "Peter the Great (1682-1725) westernized Russia and built St. Petersburg as a 'window to the West.' His reforms transformed Russia into a major European power.",
          es: "Pedro el Grande (1682-1725) occidentalizó Rusia y construyó San Petersburgo como una 'ventana a Occidente.' Sus reformas transformaron Rusia en una potencia europea importante.",
          de: "Peter der Große (1682-1725) verwestlichte Russland und baute St. Petersburg als 'Fenster zum Westen.' Seine Reformen verwandelten Russland in eine europäische Großmacht.",
          nl: "Peter de Grote (1682-1725) verwesterde Rusland en bouwde St. Petersburg als een 'venster naar het Westen.' Zijn hervormingen transformeerden Rusland tot een Europese grootmacht."
        }
      },
      {
        question: {
          en: "Who was the English naturalist who voyaged on the HMS Beagle?",
          es: "¿Quién fue el naturalista inglés que viajó en el HMS Beagle?",
          de: "Wer war der englische Naturforscher, der auf der HMS Beagle reiste?",
          nl: "Wie was de Engelse naturalist die reisde op de HMS Beagle?"
        },
        options: [
          { en: "Charles Darwin", es: "Charles Darwin", de: "Charles Darwin", nl: "Charles Darwin" },
          { en: "Alfred Russel Wallace", es: "Alfred Russel Wallace", de: "Alfred Russel Wallace", nl: "Alfred Russel Wallace" },
          { en: "Thomas Huxley", es: "Thomas Huxley", de: "Thomas Huxley", nl: "Thomas Huxley" },
          { en: "Gregor Mendel", es: "Gregor Mendel", de: "Gregor Mendel", nl: "Gregor Mendel" }
        ],
        correct: 0,
        explanation: {
          en: "Charles Darwin's voyage on HMS Beagle (1831-1836) provided crucial observations that led to his theory of evolution by natural selection, published in 'On the Origin of Species.'",
          es: "El viaje de Charles Darwin en el HMS Beagle (1831-1836) proporcionó observaciones cruciales que llevaron a su teoría de la evolución por selección natural, publicada en 'El Origen de las Especies.'",
          de: "Charles Darwins Reise auf der HMS Beagle (1831-1836) lieferte entscheidende Beobachtungen, die zu seiner Evolutionstheorie durch natürliche Selektion führten, veröffentlicht in 'Über die Entstehung der Arten.'",
          nl: "Charles Darwins reis op de HMS Beagle (1831-1836) leverde cruciale observaties die leidden tot zijn evolutietheorie door natuurlijke selectie, gepubliceerd in 'Over het ontstaan der soorten.'"
        }
      },
      {
        question: {
          en: "Which Macedonian king conquered Persia and much of the known world?",
          es: "¿Qué rey macedonio conquistó Persia y gran parte del mundo conocido?",
          de: "Welcher makedonische König eroberte Persien und einen Großteil der bekannten Welt?",
          nl: "Welke Macedonische koning veroverde Perzië en een groot deel van de bekende wereld?"
        },
        options: [
          { en: "Alexander the Great", es: "Alejandro Magno", de: "Alexander der Große", nl: "Alexander de Grote" },
          { en: "Philip II", es: "Felipe II", de: "Philipp II", nl: "Philippus II" },
          { en: "Darius III", es: "Darío III", de: "Darius III", nl: "Darius III" },
          { en: "Cyrus the Great", es: "Ciro el Grande", de: "Kyros der Große", nl: "Cyrus de Grote" }
        ],
        correct: 0,
        explanation: {
          en: "Alexander the Great (356-323 BCE) created one of the largest empires in history by age 30, stretching from Greece to India, spreading Greek culture throughout the ancient world.",
          es: "Alejandro Magno (356-323 a.C.) creó uno de los imperios más grandes de la historia a los 30 años, extendiéndose desde Grecia hasta India, difundiendo la cultura griega por todo el mundo antiguo.",
          de: "Alexander der Große (356-323 v.Chr.) schuf mit 30 Jahren eines der größten Reiche der Geschichte, das sich von Griechenland bis Indien erstreckte und die griechische Kultur in der antiken Welt verbreitete.",
          nl: "Alexander de Grote (356-323 v.Chr.) creëerde een van de grootste rijken in de geschiedenis toen hij 30 was, zich uitstrekkend van Griekenland tot India, en verspreidde de Griekse cultuur door de antieke wereld."
        }
      },
      {
        question: {
          en: "Who was the Florentine political philosopher who wrote 'The Prince'?",
          es: "¿Quién fue el filósofo político florentino que escribió 'El Príncipe'?",
          de: "Wer war der florentinische politische Philosoph, der 'Der Fürst' schrieb?",
          nl: "Wie was de Florentijnse politieke filosoof die 'De Vorst' schreef?"
        },
        options: [
          { en: "Niccolò Machiavelli", es: "Nicolás Maquiavelo", de: "Niccolò Machiavelli", nl: "Niccolò Machiavelli" },
          { en: "Dante Alighieri", es: "Dante Alighieri", de: "Dante Alighieri", nl: "Dante Alighieri" },
          { en: "Thomas Aquinas", es: "Tomás de Aquino", de: "Thomas von Aquin", nl: "Thomas van Aquino" },
          { en: "Giovanni Boccaccio", es: "Giovanni Boccaccio", de: "Giovanni Boccaccio", nl: "Giovanni Boccaccio" }
        ],
        correct: 0,
        explanation: {
          en: "Niccolò Machiavelli wrote 'The Prince' in 1513, a political treatise that became one of the most influential works in political philosophy, introducing the concept of realpolitik.",
          es: "Nicolás Maquiavelo escribió 'El Príncipe' en 1513, un tratado político que se convirtió en una de las obras más influyentes de la filosofía política, introduciendo el concepto de realpolitik.",
          de: "Niccolò Machiavelli schrieb 1513 'Der Fürst', eine politische Abhandlung, die zu einem der einflussreichsten Werke der politischen Philosophie wurde und das Konzept der Realpolitik einführte.",
          nl: "Niccolò Machiavelli schreef 'De Vorst' in 1513, een politiek traktaat dat een van de meest invloedrijke werken in de politieke filosofie werd, en het concept van realpolitik introduceerde."
        }
      },
      {
        question: {
          en: "Which Polish astronomer proposed that the Earth revolves around the Sun?",
          es: "¿Qué astrónomo polaco propuso que la Tierra gira alrededor del Sol?",
          de: "Welcher polnische Astronom schlug vor, dass sich die Erde um die Sonne dreht?",
          nl: "Welke Poolse astronoom stelde voor dat de Aarde om de Zon draait?"
        },
        options: [
          { en: "Nicolaus Copernicus", es: "Nicolás Copérnico", de: "Nikolaus Kopernikus", nl: "Nicolaas Copernicus" },
          { en: "Galileo Galilei", es: "Galileo Galilei", de: "Galileo Galilei", nl: "Galileo Galilei" },
          { en: "Johannes Kepler", es: "Johannes Kepler", de: "Johannes Kepler", nl: "Johannes Kepler" },
          { en: "Tycho Brahe", es: "Tycho Brahe", de: "Tycho Brahe", nl: "Tycho Brahe" }
        ],
        correct: 0,
        explanation: {
          en: "Nicolaus Copernicus published his heliocentric model in 1543, revolutionizing astronomy by placing the Sun at the center of the solar system instead of Earth.",
          es: "Nicolás Copérnico publicó su modelo heliocéntrico en 1543, revolucionando la astronomía al colocar al Sol en el centro del sistema solar en lugar de la Tierra.",
          de: "Nikolaus Kopernikus veröffentlichte 1543 sein heliozentrisches Modell und revolutionierte die Astronomie, indem er die Sonne statt der Erde in das Zentrum des Sonnensystems stellte.",
          nl: "Nicolaas Copernicus publiceerde zijn heliocentrisch model in 1543, wat de astronomie revolutioneerde door de Zon in het centrum van het zonnestelsel te plaatsen in plaats van de Aarde."
        }
      },
      {
        question: {
          en: "Who was the Carthaginian general who crossed the Alps with elephants?",
          es: "¿Quién fue el general cartaginés que cruzó los Alpes con elefantes?",
          de: "Wer war der karthagische General, der mit Elefanten die Alpen überquerte?",
          nl: "Wie was de Carthaagse generaal die de Alpen overstak met olifanten?"
        },
        options: [
          { en: "Hannibal", es: "Aníbal", de: "Hannibal", nl: "Hannibal" },
          { en: "Scipio Africanus", es: "Escipión el Africano", de: "Scipio Africanus", nl: "Scipio Africanus" },
          { en: "Hamilcar Barca", es: "Amílcar Barca", de: "Hamilkar Barkas", nl: "Hamilcar Barca" },
          { en: "Hasdrubal", es: "Asdrúbal", de: "Hasdrubal", nl: "Hasdrubal" }
        ],
        correct: 0,
        explanation: {
          en: "Hannibal Barca crossed the Alps with war elephants in 218 BCE during the Second Punic War, achieving one of the most famous military feats in history despite ultimately losing the war.",
          es: "Aníbal Barca cruzó los Alpes con elefantes de guerra en 218 a.C. durante la Segunda Guerra Púnica, logrando una de las hazañas militares más famosas de la historia a pesar de perder finalmente la guerra.",
          de: "Hannibal Barkas überquerte 218 v.Chr. während des Zweiten Punischen Krieges die Alpen mit Kriegselefanten und vollbrachte eine der berühmtesten militärischen Leistungen der Geschichte, obwohl er den Krieg letztendlich verlor.",
          nl: "Hannibal Barca stak in 218 v.Chr. de Alpen over met oorlogsolifanten tijdens de Tweede Punische Oorlog, en volbracht een van de beroemdste militaire prestaties in de geschiedenis, ondanks dat hij uiteindelijk de oorlog verloor."
        }
      },
      {
        question: {
          en: "Which English king signed the Magna Carta in 1215?",
          es: "¿Qué rey inglés firmó la Carta Magna en 1215?",
          de: "Welcher englische König unterzeichnete 1215 die Magna Carta?",
          nl: "Welke Engelse koning ondertekende de Magna Carta in 1215?"
        },
        options: [
          { en: "King John", es: "Rey Juan", de: "König Johann", nl: "Koning Jan" },
          { en: "King Henry III", es: "Rey Enrique III", de: "König Heinrich III", nl: "Koning Hendrik III" },
          { en: "King Richard I", es: "Rey Ricardo I", de: "König Richard I", nl: "Koning Richard I" },
          { en: "King Edward I", es: "Rey Eduardo I", de: "König Eduard I", nl: "Koning Edward I" }
        ],
        correct: 0,
        explanation: {
          en: "King John signed the Magna Carta at Runnymede in 1215, establishing the principle that the king was not above the law and laying foundations for constitutional government.",
          es: "El Rey Juan firmó la Carta Magna en Runnymede en 1215, estableciendo el principio de que el rey no estaba por encima de la ley y sentando las bases para el gobierno constitucional.",
          de: "König Johann unterzeichnete 1215 in Runnymede die Magna Carta und etablierte das Prinzip, dass der König nicht über dem Gesetz steht, und legte damit Grundlagen für konstitutionelle Regierung.",
          nl: "Koning Jan ondertekende de Magna Carta in Runnymede in 1215, waarmee het principe werd gevestigd dat de koning niet boven de wet stond en de grondslagen werden gelegd voor constitutionele regering."
        }
      },
      {
        question: {
          en: "Who was the founder of psychoanalysis?",
          es: "¿Quién fue el fundador del psicoanálisis?",
          de: "Wer war der Begründer der Psychoanalyse?",
          nl: "Wie was de grondlegger van de psychoanalyse?"
        },
        options: [
          { en: "Sigmund Freud", es: "Sigmund Freud", de: "Sigmund Freud", nl: "Sigmund Freud" },
          { en: "Carl Jung", es: "Carl Jung", de: "Carl Jung", nl: "Carl Jung" },
          { en: "B.F. Skinner", es: "B.F. Skinner", de: "B.F. Skinner", nl: "B.F. Skinner" },
          { en: "Wilhelm Wundt", es: "Wilhelm Wundt", de: "Wilhelm Wundt", nl: "Wilhelm Wundt" }
        ],
        correct: 0,
        explanation: {
          en: "Sigmund Freud (1856-1939) founded psychoanalysis, developing revolutionary theories about the unconscious mind, dreams, and the structure of personality.",
          es: "Sigmund Freud (1856-1939) fundó el psicoanálisis, desarrollando teorías revolucionarias sobre la mente inconsciente, los sueños y la estructura de la personalidad.",
          de: "Sigmund Freud (1856-1939) begründete die Psychoanalyse und entwickelte revolutionäre Theorien über das Unbewusste, Träume und die Struktur der Persönlichkeit.",
          nl: "Sigmund Freud (1856-1939) stichtte de psychoanalyse en ontwikkelde revolutionaire theorieën over het onbewuste, dromen en de structuur van de persoonlijkheid."
        }
      },
      {
        question: {
          en: "Which inventor is credited with developing the first practical incandescent light bulb?",
          es: "¿Qué inventor es acreditado con desarrollar la primera bombilla incandescente práctica?",
          de: "Welchem Erfinder wird die Entwicklung der ersten praktischen Glühbirne zugeschrieben?",
          nl: "Welke uitvinder wordt gecrediteerd met het ontwikkelen van de eerste praktische gloeilamp?"
        },
        options: [
          { en: "Thomas Edison", es: "Thomas Edison", de: "Thomas Edison", nl: "Thomas Edison" },
          { en: "Nikola Tesla", es: "Nikola Tesla", de: "Nikola Tesla", nl: "Nikola Tesla" },
          { en: "Alexander Graham Bell", es: "Alexander Graham Bell", de: "Alexander Graham Bell", nl: "Alexander Graham Bell" },
          { en: "George Westinghouse", es: "George Westinghouse", de: "George Westinghouse", nl: "George Westinghouse" }
        ],
        correct: 0,
        explanation: {
          en: "Thomas Edison developed the first commercially practical incandescent light bulb in 1879, though many inventors contributed to its development. His design could last for hours, making electric lighting practical.",
          es: "Thomas Edison desarrolló la primera bombilla incandescente comercialmente práctica en 1879, aunque muchos inventores contribuyeron a su desarrollo. Su diseño podía durar horas, haciendo la iluminación eléctrica práctica.",
          de: "Thomas Edison entwickelte 1879 die erste kommerziell praktische Glühbirne, obwohl viele Erfinder zu ihrer Entwicklung beitrugen. Sein Design konnte stundenlang halten und machte elektrische Beleuchtung praktisch.",
          nl: "Thomas Edison ontwikkelde de eerste commercieel praktische gloeilamp in 1879, hoewel veel uitvinders bijdroegen aan de ontwikkeling ervan. Zijn ontwerp kon urenlang branden, waardoor elektrische verlichting praktisch werd."
        }
      },
      {
        question: {
          en: "Who was the Roman emperor during the height of the Roman Empire's territorial expansion?",
          es: "¿Quién fue el emperador romano durante el apogeo de la expansión territorial del Imperio Romano?",
          de: "Wer war der römische Kaiser während des Höhepunkts der territorialen Expansion des Römischen Reiches?",
          nl: "Wie was de Romeinse keizer tijdens het hoogtepunt van de territoriale expansie van het Romeinse Rijk?"
        },
        options: [
          { en: "Trajan", es: "Trajano", de: "Trajan", nl: "Trajanus" },
          { en: "Augustus", es: "Augusto", de: "Augustus", nl: "Augustus" },
          { en: "Hadrian", es: "Adriano", de: "Hadrian", nl: "Hadrianus" },
          { en: "Marcus Aurelius", es: "Marco Aurelio", de: "Marcus Aurelius", nl: "Marcus Aurelius" }
        ],
        correct: 0,
        explanation: {
          en: "Emperor Trajan (98-117 CE) expanded the Roman Empire to its greatest territorial extent, conquering Dacia and reaching the Persian Gulf.",
          es: "El emperador Trajano (98-117 d.C.) expandió el Imperio Romano a su mayor extensión territorial, conquistando Dacia y llegando al Golfo Pérsico.",
          de: "Kaiser Trajan (98-117 n.Chr.) erweiterte das Römische Reich auf seine größte territoriale Ausdehnung, eroberte Dakien und erreichte den Persischen Golf.",
          nl: "Keizer Trajanus (98-117 n.Chr.) breidde het Romeinse Rijk uit tot zijn grootste territoriale omvang, veroverde Dacië en bereikte de Perzische Golf."
        }
      },
      {
        question: {
          en: "Which queen of Egypt allied with Julius Caesar and Mark Antony?",
          es: "¿Qué reina de Egipto se alió con Julio César y Marco Antonio?",
          de: "Welche Königin von Ägypten verbündete sich mit Julius Caesar und Marcus Antonius?",
          nl: "Welke koningin van Egypte sloot een alliantie met Julius Caesar en Marcus Antonius?"
        },
        options: [
          { en: "Cleopatra VII", es: "Cleopatra VII", de: "Kleopatra VII", nl: "Cleopatra VII" },
          { en: "Nefertiti", es: "Nefertiti", de: "Nofretete", nl: "Nefertiti" },
          { en: "Hatshepsut", es: "Hatshepsut", de: "Hatschepsut", nl: "Hatshepsut" },
          { en: "Cleopatra I", es: "Cleopatra I", de: "Kleopatra I", nl: "Cleopatra I" }
        ],
        correct: 0,
        explanation: {
          en: "Cleopatra VII was the last active pharaoh of Egypt, forming political and romantic alliances with both Julius Caesar and Mark Antony in attempts to preserve Egypt's independence.",
          es: "Cleopatra VII fue la última faraona activa de Egipto, formando alianzas políticas y románticas con Julio César y Marco Antonio en intentos de preservar la independencia de Egipto.",
          de: "Kleopatra VII war die letzte aktive Pharaonin Ägyptens und ging politische und romantische Allianzen mit Julius Caesar und Marcus Antonius ein, um Ägyptens Unabhängigkeit zu bewahren.",
          nl: "Cleopatra VII was de laatste actieve farao van Egypte, en vormde politieke en romantische allianties met zowel Julius Caesar als Marcus Antonius in pogingen om Egypte's onafhankelijkheid te behouden."
        }
      },
      {
        question: {
          en: "Who was the emperor of France who sold Louisiana to the United States?",
          es: "¿Quién fue el emperador de Francia que vendió Luisiana a los Estados Unidos?",
          de: "Wer war der Kaiser von Frankreich, der Louisiana an die Vereinigten Staaten verkaufte?",
          nl: "Wie was de keizer van Frankrijk die Louisiana verkocht aan de Verenigde Staten?"
        },
        options: [
          { en: "Napoleon Bonaparte", es: "Napoleón Bonaparte", de: "Napoleon Bonaparte", nl: "Napoleon Bonaparte" },
          { en: "Louis XVI", es: "Luis XVI", de: "Ludwig XVI", nl: "Lodewijk XVI" },
          { en: "Charles X", es: "Carlos X", de: "Karl X", nl: "Karel X" },
          { en: "Napoleon III", es: "Napoleón III", de: "Napoleon III", nl: "Napoleon III" }
        ],
        correct: 0,
        explanation: {
          en: "Napoleon Bonaparte sold the Louisiana Territory to the United States in 1803 for $15 million, doubling the size of the young nation.",
          es: "Napoleón Bonaparte vendió el Territorio de Luisiana a los Estados Unidos en 1803 por 15 millones de dólares, duplicando el tamaño de la joven nación.",
          de: "Napoleon Bonaparte verkaufte 1803 das Louisiana-Territorium für 15 Millionen Dollar an die Vereinigten Staaten und verdoppelte damit die Größe der jungen Nation.",
          nl: "Napoleon Bonaparte verkocht het Louisiana Territory in 1803 voor $15 miljoen aan de Verenigde Staten, waardoor de omvang van de jonge natie verdubbelde."
        }
      },
      {
        question: {
          en: "Which Italian explorer gave his name to America?",
          es: "¿Qué explorador italiano dio su nombre a América?",
          de: "Welcher italienische Entdecker gab Amerika seinen Namen?",
          nl: "Welke Italiaanse ontdekkingsreiziger gaf zijn naam aan Amerika?"
        },
        options: [
          { en: "Amerigo Vespucci", es: "Américo Vespucio", de: "Amerigo Vespucci", nl: "Amerigo Vespucci" },
          { en: "Christopher Columbus", es: "Cristóbal Colón", de: "Christoph Kolumbus", nl: "Christoffel Columbus" },
          { en: "John Cabot", es: "John Cabot", de: "John Cabot", nl: "John Cabot" },
          { en: "Marco Polo", es: "Marco Polo", de: "Marco Polo", nl: "Marco Polo" }
        ],
        correct: 0,
        explanation: {
          en: "Amerigo Vespucci was the first to recognize that the lands discovered by Columbus were a new continent, not Asia. The Americas were named in his honor.",
          es: "Américo Vespucio fue el primero en reconocer que las tierras descubiertas por Colón eran un nuevo continente, no Asia. Las Américas fueron nombradas en su honor.",
          de: "Amerigo Vespucci war der erste, der erkannte, dass die von Kolumbus entdeckten Länder ein neuer Kontinent und nicht Asien waren. Amerika wurde ihm zu Ehren benannt.",
          nl: "Amerigo Vespucci was de eerste die erkende dat de landen die door Columbus werden ontdekt een nieuw continent waren, niet Azië. Amerika werd naar hem vernoemd."
        }
      },
      {
        question: {
          en: "Who was the German monk who started the Protestant Reformation?",
          es: "¿Quién fue el monje alemán que inició la Reforma Protestante?",
          de: "Wer war der deutsche Mönch, der die protestantische Reformation begann?",
          nl: "Wie was de Duitse monnik die de Protestantse Reformatie begon?"
        },
        options: [
          { en: "Martin Luther", es: "Martín Lutero", de: "Martin Luther", nl: "Maarten Luther" },
          { en: "John Calvin", es: "Juan Calvino", de: "Johannes Calvin", nl: "Johannes Calvijn" },
          { en: "Huldrych Zwingli", es: "Ulrico Zuinglio", de: "Huldrych Zwingli", nl: "Huldrych Zwingli" },
          { en: "John Wycliffe", es: "John Wycliffe", de: "John Wycliffe", nl: "John Wycliffe" }
        ],
        correct: 0,
        explanation: {
          en: "Martin Luther posted his 95 Theses in 1517, challenging the Catholic Church's sale of indulgences and sparking the Protestant Reformation that split Western Christianity.",
          es: "Martín Lutero clavó sus 95 Tesis en 1517, desafiando la venta de indulgencias de la Iglesia Católica e iniciando la Reforma Protestante que dividió el cristianismo occidental.",
          de: "Martin Luther schlug 1517 seine 95 Thesen an, stellte den Ablasshandel der katholischen Kirche in Frage und löste die protestantische Reformation aus, die das westliche Christentum spaltete.",
          nl: "Maarten Luther sloeg zijn 95 stellingen aan in 1517, daagde de verkoop van aflaten door de Katholieke Kerk uit en zette de Protestantse Reformatie in gang die het westerse christendom splitste."
        }
      },
      {
        question: {
          en: "Which ancient Greek physician is known as the 'Father of Medicine'?",
          es: "¿Qué médico griego antiguo es conocido como el 'Padre de la Medicina'?",
          de: "Welcher antike griechische Arzt ist als 'Vater der Medizin' bekannt?",
          nl: "Welke oude Griekse arts staat bekend als de 'Vader van de Geneeskunde'?"
        },
        options: [
          { en: "Hippocrates", es: "Hipócrates", de: "Hippokrates", nl: "Hippocrates" },
          { en: "Galen", es: "Galeno", de: "Galen", nl: "Galenus" },
          { en: "Aristotle", es: "Aristóteles", de: "Aristoteles", nl: "Aristoteles" },
          { en: "Asclepius", es: "Asclepio", de: "Asklepios", nl: "Asclepius" }
        ],
        correct: 0,
        explanation: {
          en: "Hippocrates (c. 460-370 BCE) revolutionized medicine by separating it from superstition and establishing it as a science. The Hippocratic Oath is still sworn by doctors today.",
          es: "Hipócrates (c. 460-370 a.C.) revolucionó la medicina al separarla de la superstición y establecerla como una ciencia. El Juramento Hipocrático todavía es jurado por los médicos hoy.",
          de: "Hippokrates (ca. 460-370 v.Chr.) revolutionierte die Medizin, indem er sie von Aberglauben trennte und als Wissenschaft etablierte. Der Hippokratische Eid wird heute noch von Ärzten geschworen.",
          nl: "Hippocrates (ca. 460-370 v.Chr.) revolutioneerde de geneeskunde door het te scheiden van bijgeloof en het te vestigen als wetenschap. De eed van Hippocrates wordt vandaag nog steeds door artsen afgelegd."
        }
      },
      {
        question: {
          en: "Who was the queen consort of King Louis XVI who was executed during the French Revolution?",
          es: "¿Quién fue la reina consorte del rey Luis XVI que fue ejecutada durante la Revolución Francesa?",
          de: "Wer war die Königsgemahlin von König Ludwig XVI, die während der Französischen Revolution hingerichtet wurde?",
          nl: "Wie was de koningin-gemaal van koning Lodewijk XVI die werd geëxecuteerd tijdens de Franse Revolutie?"
        },
        options: [
          { en: "Marie Antoinette", es: "María Antonieta", de: "Marie Antoinette", nl: "Marie Antoinette" },
          { en: "Madame de Pompadour", es: "Madame de Pompadour", de: "Madame de Pompadour", nl: "Madame de Pompadour" },
          { en: "Catherine de' Medici", es: "Catalina de Médici", de: "Katharina von Medici", nl: "Catharina de' Medici" },
          { en: "Anne of Austria", es: "Ana de Austria", de: "Anna von Österreich", nl: "Anna van Oostenrijk" }
        ],
        correct: 0,
        explanation: {
          en: "Marie Antoinette, the Austrian-born queen of France, was guillotined in October 1793 during the Reign of Terror, nine months after her husband King Louis XVI.",
          es: "María Antonieta, la reina de Francia nacida en Austria, fue guillotinada en octubre de 1793 durante el Reino del Terror, nueve meses después de su esposo el rey Luis XVI.",
          de: "Marie Antoinette, die in Österreich geborene Königin von Frankreich, wurde im Oktober 1793 während der Schreckensherrschaft guillotiniert, neun Monate nach ihrem Ehemann König Ludwig XVI.",
          nl: "Marie Antoinette, de in Oostenrijk geboren koningin van Frankrijk, werd in oktober 1793 geguillotineerd tijdens de Terreur, negen maanden na haar echtgenoot koning Lodewijk XVI."
        }
      },
      {
        question: {
          en: "Which scientist formulated the laws of motion and universal gravitation?",
          es: "¿Qué científico formuló las leyes del movimiento y la gravitación universal?",
          de: "Welcher Wissenschaftler formulierte die Bewegungsgesetze und die universelle Gravitation?",
          nl: "Welke wetenschapper formuleerde de bewegingswetten en universele zwaartekracht?"
        },
        options: [
          { en: "Isaac Newton", es: "Isaac Newton", de: "Isaac Newton", nl: "Isaac Newton" },
          { en: "Albert Einstein", es: "Albert Einstein", de: "Albert Einstein", nl: "Albert Einstein" },
          { en: "Galileo Galilei", es: "Galileo Galilei", de: "Galileo Galilei", nl: "Galileo Galilei" },
          { en: "Johannes Kepler", es: "Johannes Kepler", de: "Johannes Kepler", nl: "Johannes Kepler" }
        ],
        correct: 0,
        explanation: {
          en: "Isaac Newton published his 'Principia Mathematica' in 1687, presenting his three laws of motion and law of universal gravitation, revolutionizing physics and mathematics.",
          es: "Isaac Newton publicó su 'Principia Mathematica' en 1687, presentando sus tres leyes del movimiento y la ley de gravitación universal, revolucionando la física y las matemáticas.",
          de: "Isaac Newton veröffentlichte 1687 seine 'Principia Mathematica', präsentierte seine drei Bewegungsgesetze und das Gravitationsgesetz und revolutionierte Physik und Mathematik.",
          nl: "Isaac Newton publiceerde zijn 'Principia Mathematica' in 1687, presenteerde zijn drie bewegingswetten en wet van universele zwaartekracht, wat de natuurkunde en wiskunde revolutioneerde."
        }
      },
      {
        question: {
          en: "Who was the Spartan king who led 300 warriors at the Battle of Thermopylae?",
          es: "¿Quién fue el rey espartano que lideró a 300 guerreros en la Batalla de las Termópilas?",
          de: "Wer war der spartanische König, der 300 Krieger in der Schlacht bei den Thermopylen führte?",
          nl: "Wie was de Spartaanse koning die 300 krijgers leidde bij de Slag bij Thermopylae?"
        },
        options: [
          { en: "Leonidas I", es: "Leónidas I", de: "Leonidas I", nl: "Leonidas I" },
          { en: "Pericles", es: "Pericles", de: "Perikles", nl: "Pericles" },
          { en: "Themistocles", es: "Temístocles", de: "Themistokles", nl: "Themistocles" },
          { en: "Alcibiades", es: "Alcibíades", de: "Alkibiades", nl: "Alcibiades" }
        ],
        correct: 0,
        explanation: {
          en: "King Leonidas I led a small Greek force of about 7,000 men, including his famous 300 Spartans, against the massive Persian army at Thermopylae in 480 BCE, fighting to the last man.",
          es: "El rey Leónidas I lideró una pequeña fuerza griega de unos 7,000 hombres, incluyendo sus famosos 300 espartanos, contra el masivo ejército persa en las Termópilas en 480 a.C., luchando hasta el último hombre.",
          de: "König Leonidas I führte eine kleine griechische Streitmacht von etwa 7.000 Mann, darunter seine berühmten 300 Spartaner, gegen die massive persische Armee bei den Thermopylen im Jahr 480 v.Chr. und kämpfte bis zum letzten Mann.",
          nl: "Koning Leonidas I leidde een kleine Griekse strijdmacht van ongeveer 7.000 man, inclusief zijn beroemde 300 Spartanen, tegen het massale Perzische leger bij Thermopylae in 480 v.Chr., vechtend tot de laatste man."
        }
      },
      {
        question: {
          en: "Which Founding Father wrote most of the Federalist Papers?",
          es: "¿Qué Padre Fundador escribió la mayoría de los Artículos Federalistas?",
          de: "Welcher Gründervater schrieb die meisten Federalist Papers?",
          nl: "Welke Founding Father schreef de meeste Federalist Papers?"
        },
        options: [
          { en: "Alexander Hamilton", es: "Alexander Hamilton", de: "Alexander Hamilton", nl: "Alexander Hamilton" },
          { en: "James Madison", es: "James Madison", de: "James Madison", nl: "James Madison" },
          { en: "John Jay", es: "John Jay", de: "John Jay", nl: "John Jay" },
          { en: "Thomas Jefferson", es: "Thomas Jefferson", de: "Thomas Jefferson", nl: "Thomas Jefferson" }
        ],
        correct: 0,
        explanation: {
          en: "Alexander Hamilton wrote 51 of the 85 Federalist Papers, with James Madison writing 29 and John Jay writing 5. These essays promoted the ratification of the U.S. Constitution.",
          es: "Alexander Hamilton escribió 51 de los 85 Artículos Federalistas, con James Madison escribiendo 29 y John Jay escribiendo 5. Estos ensayos promovieron la ratificación de la Constitución de EE.UU.",
          de: "Alexander Hamilton schrieb 51 der 85 Federalist Papers, James Madison schrieb 29 und John Jay schrieb 5. Diese Essays förderten die Ratifizierung der US-Verfassung.",
          nl: "Alexander Hamilton schreef 51 van de 85 Federalist Papers, met James Madison die er 29 schreef en John Jay die er 5 schreef. Deze essays bevorderden de ratificatie van de Amerikaanse Grondwet."
        }
      },
      {
        question: {
          en: "Who was the first woman elected head of government in the modern world?",
          es: "¿Quién fue la primera mujer elegida jefa de gobierno en el mundo moderno?",
          de: "Wer war die erste gewählte Regierungschefin der modernen Welt?",
          nl: "Wie was de eerste vrouw die gekozen werd als regeringsleider in de moderne wereld?"
        },
        options: [
          { en: "Sirimavo Bandaranaike", es: "Sirimavo Bandaranaike", de: "Sirimavo Bandaranaike", nl: "Sirimavo Bandaranaike" },
          { en: "Indira Gandhi", es: "Indira Gandhi", de: "Indira Gandhi", nl: "Indira Gandhi" },
          { en: "Golda Meir", es: "Golda Meir", de: "Golda Meir", nl: "Golda Meir" },
          { en: "Margaret Thatcher", es: "Margaret Thatcher", de: "Margaret Thatcher", nl: "Margaret Thatcher" }
        ],
        correct: 0,
        explanation: {
          en: "Sirimavo Bandaranaike of Sri Lanka became the world's first elected female head of government in 1960, serving as Prime Minister three times.",
          es: "Sirimavo Bandaranaike de Sri Lanka se convirtió en la primera jefa de gobierno elegida del mundo en 1960, sirviendo como Primera Ministra tres veces.",
          de: "Sirimavo Bandaranaike aus Sri Lanka wurde 1960 die weltweit erste gewählte weibliche Regierungschefin und diente dreimal als Premierministerin.",
          nl: "Sirimavo Bandaranaike van Sri Lanka werd in 1960 's werelds eerste gekozen vrouwelijke regeringsleider en diende drie keer als Eerste Minister."
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