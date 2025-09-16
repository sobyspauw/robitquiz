// April Daily Challenges - 30 days × 5 questions each = 150 total questions
(function() {
  
  const aprilChallenges = {
    name: {
      en: "April Daily Challenges",
      es: "Desafíos Diarios de Abril", 
      de: "April Tägliche Herausforderungen",
      nl: "April Dagelijkse Uitdagingen"
    },
    
    // Day 1 - April 1st: Spring Month & April Fools
    day1: [
      {
        question: {
          en: "What season is April in?",
          es: "¿En qué estación está abril?",
          de: "In welcher Jahreszeit ist April?",
          nl: "In welk seizoen valt april?"
        },
        options: [
          { en: "Spring", es: "Primavera", de: "Frühling", nl: "Lente" },
          { en: "Summer", es: "Verano", de: "Sommer", nl: "Zomer" },
          { en: "Fall", es: "Otoño", de: "Herbst", nl: "Herfst" },
          { en: "Winter", es: "Invierno", de: "Winter", nl: "Winter" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many days are in April?",
          es: "¿Cuántos días tiene abril?",
          de: "Wie viele Tage hat der April?",
          nl: "Hoeveel dagen heeft april?"
        },
        options: [
          { en: "30", es: "30", de: "30", nl: "30" },
          { en: "31", es: "31", de: "31", nl: "31" },
          { en: "28", es: "28", de: "28", nl: "28" },
          { en: "29", es: "29", de: "29", nl: "29" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What birthstone belongs to April?",
          es: "¿Qué piedra de nacimiento pertenece a abril?",
          de: "Welcher Geburtsstein gehört zum April?",
          nl: "Welke geboortesteen hoort bij april?"
        },
        options: [
          { en: "Diamond", es: "Diamante", de: "Diamant", nl: "Diamant" },
          { en: "Ruby", es: "Rubí", de: "Rubin", nl: "Robijn" },
          { en: "Emerald", es: "Esmeralda", de: "Smaragd", nl: "Smaragd" },
          { en: "Sapphire", es: "Zafiro", de: "Saphir", nl: "Saffier" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What day is April 1st known for?",
          es: "¿Por qué es conocido el 1 de abril?",
          de: "Wofür ist der 1. April bekannt?",
          nl: "Waarvoor staat 1 april bekend?"
        },
        options: [
          { en: "April Fools' Day", es: "Día de los Inocentes", de: "Aprilscherz", nl: "1 April (grappen dag)" },
          { en: "Christmas", es: "Navidad", de: "Weihnachten", nl: "Kerstmis" },
          { en: "Halloween", es: "Halloween", de: "Halloween", nl: "Halloween" },
          { en: "New Year", es: "Año Nuevo", de: "Neujahr", nl: "Nieuwjaar" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do people celebrate on Easter?",
          es: "¿Qué celebra la gente en Pascua?",
          de: "Was feiern Menschen an Ostern?",
          nl: "Wat vieren mensen met Pasen?"
        },
        options: [
          { en: "Spring and new life", es: "Primavera y nueva vida", de: "Frühling und neues Leben", nl: "Lente en nieuw leven" },
          { en: "Winter weather", es: "Clima invernal", de: "Winterwetter", nl: "Winterweer" },
          { en: "Summer heat", es: "Calor del verano", de: "Sommerhitze", nl: "Zomerwarmte" },
          { en: "Fall leaves", es: "Hojas de otoño", de: "Herbstblätter", nl: "Herfstbladeren" }
        ],
        correctIndex: 0
      }
    ],

    // Day 2 - April 2nd: Spring Flowers
    day2: [
      {
        question: {
          en: "What flowers bloom in spring?",
          es: "¿Qué flores florecen en primavera?",
          de: "Welche Blumen blühen im Frühling?",
          nl: "Welke bloemen bloeien in de lente?"
        },
        options: [
          { en: "Tulips", es: "Tulipanes", de: "Tulpen", nl: "Tulpen" },
          { en: "Snow", es: "Nieve", de: "Schnee", nl: "Sneeuw" },
          { en: "Leaves fall", es: "Las hojas caen", de: "Blätter fallen", nl: "Bladeren vallen" },
          { en: "Ice forms", es: "Se forma hielo", de: "Eis bildet sich", nl: "IJs vormt zich" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What color are most spring flowers?",
          es: "¿De qué color son la mayoría de las flores de primavera?",
          de: "Welche Farbe haben die meisten Frühlingsblumen?",
          nl: "Welke kleur hebben de meeste lentebloemen?"
        },
        options: [
          { en: "Bright colors", es: "Colores brillantes", de: "Helle Farben", nl: "Felle kleuren" },
          { en: "Only black", es: "Solo negro", de: "Nur schwarz", nl: "Alleen zwart" },
          { en: "Only gray", es: "Solo gris", de: "Nur grau", nl: "Alleen grijs" },
          { en: "Only brown", es: "Solo marrón", de: "Nur braun", nl: "Alleen bruin" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do bees collect from flowers?",
          es: "¿Qué recolectan las abejas de las flores?",
          de: "Was sammeln Bienen von Blumen?",
          nl: "Wat verzamelen bijen van bloemen?"
        },
        options: [
          { en: "Nectar", es: "Néctar", de: "Nektar", nl: "Nectar" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Dirt", es: "Tierra", de: "Erde", nl: "Aarde" },
          { en: "Rocks", es: "Piedras", de: "Steine", nl: "Stenen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What happens to trees in spring?",
          es: "¿Qué les pasa a los árboles en primavera?",
          de: "Was passiert mit Bäumen im Frühling?",
          nl: "Wat gebeurt er met bomen in de lente?"
        },
        options: [
          { en: "They grow new leaves", es: "Crecen hojas nuevas", de: "Sie bekommen neue Blätter", nl: "Ze krijgen nieuwe bladeren" },
          { en: "They lose all leaves", es: "Pierden todas las hojas", de: "Sie verlieren alle Blätter", nl: "Ze verliezen alle bladeren" },
          { en: "They turn brown", es: "Se vuelven marrones", de: "Sie werden braun", nl: "Ze worden bruin" },
          { en: "They disappear", es: "Desaparecen", de: "Sie verschwinden", nl: "Ze verdwijnen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do we call baby animals born in spring?",
          es: "¿Cómo llamamos a los animales bebé nacidos en primavera?",
          de: "Wie nennen wir Tierbabys, die im Frühling geboren werden?",
          nl: "Hoe noemen we babydieren die in de lente geboren worden?"
        },
        options: [
          { en: "Spring babies", es: "Bebés de primavera", de: "Frühlingsbabys", nl: "Lentebaby's" },
          { en: "Winter babies", es: "Bebés de invierno", de: "Winterbabys", nl: "Winterbaby's" },
          { en: "Old animals", es: "Animales viejos", de: "Alte Tiere", nl: "Oude dieren" },
          { en: "Sick animals", es: "Animales enfermos", de: "Kranke Tiere", nl: "Zieke dieren" }
        ],
        correctIndex: 0
      }
    ],

    // Day 3 - April 3rd: Easter Traditions
    day3: [
      {
        question: {
          en: "What animal is associated with Easter?",
          es: "¿Qué animal se asocia con la Pascua?",
          de: "Welches Tier wird mit Ostern verbunden?",
          nl: "Welk dier wordt geassocieerd met Pasen?"
        },
        options: [
          { en: "Rabbit", es: "Conejo", de: "Hase", nl: "Konijn" },
          { en: "Lion", es: "León", de: "Löwe", nl: "Leeuw" },
          { en: "Elephant", es: "Elefante", de: "Elefant", nl: "Olifant" },
          { en: "Shark", es: "Tiburón", de: "Hai", nl: "Haai" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do children hunt for on Easter?",
          es: "¿Qué buscan los niños en Pascua?",
          de: "Was suchen Kinder an Ostern?",
          nl: "Wat zoeken kinderen met Pasen?"
        },
        options: [
          { en: "Eggs", es: "Huevos", de: "Eier", nl: "Eieren" },
          { en: "Books", es: "Libros", de: "Bücher", nl: "Boeken" },
          { en: "Shoes", es: "Zapatos", de: "Schuhe", nl: "Schoenen" },
          { en: "Hats", es: "Sombreros", de: "Hüte", nl: "Hoeden" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What color are Easter eggs often painted?",
          es: "¿De qué color se pintan a menudo los huevos de Pascua?",
          de: "In welcher Farbe werden Ostereier oft bemalt?",
          nl: "In welke kleur worden paaseieren vaak geverfd?"
        },
        options: [
          { en: "Bright colors", es: "Colores brillantes", de: "Bunte Farben", nl: "Felle kleuren" },
          { en: "Only black", es: "Solo negro", de: "Nur schwarz", nl: "Alleen zwart" },
          { en: "Only white", es: "Solo blanco", de: "Nur weiß", nl: "Alleen wit" },
          { en: "No colors", es: "Sin colores", de: "Keine Farben", nl: "Geen kleuren" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What sweet treat is popular at Easter?",
          es: "¿Qué dulce es popular en Pascua?",
          de: "Welche Süßigkeit ist an Ostern beliebt?",
          nl: "Welke zoete lekkernij is populair met Pasen?"
        },
        options: [
          { en: "Chocolate", es: "Chocolate", de: "Schokolade", nl: "Chocolade" },
          { en: "Vegetables", es: "Verduras", de: "Gemüse", nl: "Groenten" },
          { en: "Soup", es: "Sopa", de: "Suppe", nl: "Soep" },
          { en: "Bread", es: "Pan", de: "Brot", nl: "Brood" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do families often do together on Easter?",
          es: "¿Qué hacen a menudo las familias juntas en Pascua?",
          de: "Was machen Familien oft zusammen an Ostern?",
          nl: "Wat doen families vaak samen met Pasen?"
        },
        options: [
          { en: "Have a meal together", es: "Comer juntos", de: "Zusammen essen", nl: "Samen eten" },
          { en: "Go to work", es: "Ir a trabajar", de: "Zur Arbeit gehen", nl: "Naar het werk gaan" },
          { en: "Sleep all day", es: "Dormir todo el día", de: "Den ganzen Tag schlafen", nl: "De hele dag slapen" },
          { en: "Stay apart", es: "Mantenerse separados", de: "Getrennt bleiben", nl: "Uit elkaar blijven" }
        ],
        correctIndex: 0
      }
    ],

    // Day 4 - April 4th
    day4: [
      {
        question: {
          en: "What is the capital of Spain?",
          es: "¿Cuál es la capital de España?",
          de: "Was ist die Hauptstadt von Spanien?",
          nl: "Wat is de hoofdstad van Spanje?"
        },
        options: [
          { en: "Madrid", es: "Madrid", de: "Madrid", nl: "Madrid" },
          { en: "Barcelona", es: "Barcelona", de: "Barcelona", nl: "Barcelona" },
          { en: "Valencia", es: "Valencia", de: "Valencia", nl: "Valencia" },
          { en: "Seville", es: "Sevilla", de: "Sevilla", nl: "Sevilla" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which planet is known as the Red Planet?",
          es: "¿Qué planeta se conoce como el Planeta Rojo?",
          de: "Welcher Planet ist als der Rote Planet bekannt?",
          nl: "Welke planeet staat bekend als de Rode Planeet?"
        },
        options: [
          { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" },
          { en: "Venus", es: "Venus", de: "Venus", nl: "Venus" },
          { en: "Jupiter", es: "Júpiter", de: "Jupiter", nl: "Jupiter" },
          { en: "Saturn", es: "Saturno", de: "Saturn", nl: "Saturnus" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the largest organ in the human body?",
          es: "¿Cuál es el órgano más grande del cuerpo humano?",
          de: "Was ist das größte Organ im menschlichen Körper?",
          nl: "Wat is het grootste orgaan in het menselijk lichaam?"
        },
        options: [
          { en: "Skin", es: "Piel", de: "Haut", nl: "Huid" },
          { en: "Liver", es: "Hígado", de: "Leber", nl: "Lever" },
          { en: "Brain", es: "Cerebro", de: "Gehirn", nl: "Hersenen" },
          { en: "Heart", es: "Corazón", de: "Herz", nl: "Hart" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which element has the symbol 'O'?",
          es: "¿Qué elemento tiene el símbolo 'O'?",
          de: "Welches Element hat das Symbol 'O'?",
          nl: "Welk element heeft het symbool 'O'?"
        },
        options: [
          { en: "Oxygen", es: "Oxígeno", de: "Sauerstoff", nl: "Zuurstof" },
          { en: "Gold", es: "Oro", de: "Gold", nl: "Goud" },
          { en: "Silver", es: "Plata", de: "Silber", nl: "Zilver" },
          { en: "Iron", es: "Hierro", de: "Eisen", nl: "IJzer" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the tallest mountain in the world?",
          es: "¿Cuál es la montaña más alta del mundo?",
          de: "Was ist der höchste Berg der Welt?",
          nl: "Wat is de hoogste berg ter wereld?"
        },
        options: [
          { en: "Mount Everest", es: "Monte Everest", de: "Mount Everest", nl: "Mount Everest" },
          { en: "K2", es: "K2", de: "K2", nl: "K2" },
          { en: "Kilimanjaro", es: "Kilimanjaro", de: "Kilimanjaro", nl: "Kilimanjaro" },
          { en: "Mont Blanc", es: "Mont Blanc", de: "Mont Blanc", nl: "Mont Blanc" }
        ],
        correctIndex: 0
      }
    ],

    // Day 5 - April 5th
    day5: [
      {
        question: {
          en: "Who wrote 'Romeo and Juliet'?",
          es: "¿Quién escribió 'Romeo y Julieta'?",
          de: "Wer schrieb 'Romeo und Julia'?",
          nl: "Wie schreef 'Romeo en Julia'?"
        },
        options: [
          { en: "William Shakespeare", es: "William Shakespeare", de: "William Shakespeare", nl: "William Shakespeare" },
          { en: "Charles Dickens", es: "Charles Dickens", de: "Charles Dickens", nl: "Charles Dickens" },
          { en: "Jane Austen", es: "Jane Austen", de: "Jane Austen", nl: "Jane Austen" },
          { en: "Mark Twain", es: "Mark Twain", de: "Mark Twain", nl: "Mark Twain" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the speed of light?",
          es: "¿Cuál es la velocidad de la luz?",
          de: "Wie schnell ist das Licht?",
          nl: "Wat is de lichtsnelheid?"
        },
        options: [
          { en: "300,000 km/s", es: "300,000 km/s", de: "300.000 km/s", nl: "300.000 km/s" },
          { en: "150,000 km/s", es: "150,000 km/s", de: "150.000 km/s", nl: "150.000 km/s" },
          { en: "500,000 km/s", es: "500,000 km/s", de: "500.000 km/s", nl: "500.000 km/s" },
          { en: "100,000 km/s", es: "100,000 km/s", de: "100.000 km/s", nl: "100.000 km/s" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which country is home to the kangaroo?",
          es: "¿Qué país es hogar del canguro?",
          de: "Welches Land ist die Heimat des Kängurus?",
          nl: "Welk land is de thuisbasis van de kangoeroe?"
        },
        options: [
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" },
          { en: "New Zealand", es: "Nueva Zelanda", de: "Neuseeland", nl: "Nieuw-Zeeland" },
          { en: "South Africa", es: "Sudáfrica", de: "Südafrika", nl: "Zuid-Afrika" },
          { en: "Brazil", es: "Brasil", de: "Brasilien", nl: "Brazilië" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the chemical formula for water?",
          es: "¿Cuál es la fórmula química del agua?",
          de: "Was ist die chemische Formel für Wasser?",
          nl: "Wat is de chemische formule voor water?"
        },
        options: [
          { en: "H2O", es: "H2O", de: "H2O", nl: "H2O" },
          { en: "CO2", es: "CO2", de: "CO2", nl: "CO2" },
          { en: "O2", es: "O2", de: "O2", nl: "O2" },
          { en: "H2SO4", es: "H2SO4", de: "H2SO4", nl: "H2SO4" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which ocean is the largest?",
          es: "¿Cuál es el océano más grande?",
          de: "Welcher Ozean ist der größte?",
          nl: "Welke oceaan is de grootste?"
        },
        options: [
          { en: "Pacific Ocean", es: "Océano Pacífico", de: "Pazifischer Ozean", nl: "Grote Oceaan" },
          { en: "Atlantic Ocean", es: "Océano Atlántico", de: "Atlantischer Ozean", nl: "Atlantische Oceaan" },
          { en: "Indian Ocean", es: "Océano Índico", de: "Indischer Ozean", nl: "Indische Oceaan" },
          { en: "Arctic Ocean", es: "Océano Ártico", de: "Arktischer Ozean", nl: "Arctische Oceaan" }
        ],
        correctIndex: 0
      }
    ],

    // Day 6 - April 6th: History and Geography
    day6: [
      {
        question: {
          en: "Which continent is Egypt in?",
          es: "¿En qué continente está Egipto?",
          de: "Auf welchem Kontinent liegt Ägypten?",
          nl: "Op welk continent ligt Egypte?"
        },
        options: [
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" },
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" },
          { en: "Europe", es: "Europa", de: "Europa", nl: "Europa" },
          { en: "South America", es: "América del Sur", de: "Südamerika", nl: "Zuid-Amerika" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Who was the first person to walk on the moon?",
          es: "¿Quién fue la primera persona en caminar sobre la luna?",
          de: "Wer war der erste Mensch, der auf dem Mond gelaufen ist?",
          nl: "Wie was de eerste persoon die op de maan liep?"
        },
        options: [
          { en: "Neil Armstrong", es: "Neil Armstrong", de: "Neil Armstrong", nl: "Neil Armstrong" },
          { en: "Buzz Aldrin", es: "Buzz Aldrin", de: "Buzz Aldrin", nl: "Buzz Aldrin" },
          { en: "John Glenn", es: "John Glenn", de: "John Glenn", nl: "John Glenn" },
          { en: "Alan Shepard", es: "Alan Shepard", de: "Alan Shepard", nl: "Alan Shepard" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the longest river in the world?",
          es: "¿Cuál es el río más largo del mundo?",
          de: "Was ist der längste Fluss der Welt?",
          nl: "Wat is de langste rivier ter wereld?"
        },
        options: [
          { en: "Nile River", es: "Río Nilo", de: "Nil", nl: "Nijl" },
          { en: "Amazon River", es: "Río Amazonas", de: "Amazonas", nl: "Amazone" },
          { en: "Mississippi River", es: "Río Misisipi", de: "Mississippi", nl: "Mississippi" },
          { en: "Yangtze River", es: "Río Yangtze", de: "Jangtse", nl: "Yangtze" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "In which year did World War II end?",
          es: "¿En qué año terminó la Segunda Guerra Mundial?",
          de: "In welchem Jahr endete der Zweite Weltkrieg?",
          nl: "In welk jaar eindigde de Tweede Wereldoorlog?"
        },
        options: [
          { en: "1945", es: "1945", de: "1945", nl: "1945" },
          { en: "1944", es: "1944", de: "1944", nl: "1944" },
          { en: "1946", es: "1946", de: "1946", nl: "1946" },
          { en: "1943", es: "1943", de: "1943", nl: "1943" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the smallest country in the world?",
          es: "¿Cuál es el país más pequeño del mundo?",
          de: "Was ist das kleinste Land der Welt?",
          nl: "Wat is het kleinste land ter wereld?"
        },
        options: [
          { en: "Vatican City", es: "Ciudad del Vaticano", de: "Vatikanstadt", nl: "Vaticaanstad" },
          { en: "Monaco", es: "Mónaco", de: "Monaco", nl: "Monaco" },
          { en: "San Marino", es: "San Marino", de: "San Marino", nl: "San Marino" },
          { en: "Liechtenstein", es: "Liechtenstein", de: "Liechtenstein", nl: "Liechtenstein" }
        ],
        correctIndex: 0
      }
    ],

    // Day 7 - April 7th: Science and Nature
    day7: [
      {
        question: {
          en: "How many bones are in the human body?",
          es: "¿Cuántos huesos hay en el cuerpo humano?",
          de: "Wie viele Knochen hat der menschliche Körper?",
          nl: "Hoeveel botten heeft het menselijk lichaam?"
        },
        options: [
          { en: "206", es: "206", de: "206", nl: "206" },
          { en: "150", es: "150", de: "150", nl: "150" },
          { en: "300", es: "300", de: "300", nl: "300" },
          { en: "100", es: "100", de: "100", nl: "100" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What gas do plants absorb from the atmosphere?",
          es: "¿Qué gas absorben las plantas de la atmósfera?",
          de: "Welches Gas nehmen Pflanzen aus der Atmosphäre auf?",
          nl: "Welk gas nemen planten op uit de atmosfeer?"
        },
        options: [
          { en: "Carbon dioxide", es: "Dióxido de carbono", de: "Kohlendioxid", nl: "Koolstofdioxide" },
          { en: "Oxygen", es: "Oxígeno", de: "Sauerstoff", nl: "Zuurstof" },
          { en: "Nitrogen", es: "Nitrógeno", de: "Stickstoff", nl: "Stikstof" },
          { en: "Hydrogen", es: "Hidrógeno", de: "Wasserstoff", nl: "Waterstof" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the hardest natural substance?",
          es: "¿Cuál es la sustancia natural más dura?",
          de: "Was ist die härteste natürliche Substanz?",
          nl: "Wat is de hardste natuurlijke stof?"
        },
        options: [
          { en: "Diamond", es: "Diamante", de: "Diamant", nl: "Diamant" },
          { en: "Gold", es: "Oro", de: "Gold", nl: "Goud" },
          { en: "Iron", es: "Hierro", de: "Eisen", nl: "IJzer" },
          { en: "Silver", es: "Plata", de: "Silber", nl: "Zilver" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many chambers does a human heart have?",
          es: "¿Cuántas cámaras tiene el corazón humano?",
          de: "Wie viele Kammern hat ein menschliches Herz?",
          nl: "Hoeveel kamers heeft een menselijk hart?"
        },
        options: [
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "8", es: "8", de: "8", nl: "8" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What type of animal is a dolphin?",
          es: "¿Qué tipo de animal es un delfín?",
          de: "Was für ein Tier ist ein Delfin?",
          nl: "Wat voor soort dier is een dolfijn?"
        },
        options: [
          { en: "Mammal", es: "Mamífero", de: "Säugetier", nl: "Zoogdier" },
          { en: "Fish", es: "Pez", de: "Fisch", nl: "Vis" },
          { en: "Reptile", es: "Reptil", de: "Reptil", nl: "Reptiel" },
          { en: "Bird", es: "Ave", de: "Vogel", nl: "Vogel" }
        ],
        correctIndex: 0
      }
    ],

    // Day 8 - April 8th: Literature and Arts
    day8: [
      {
        question: {
          en: "Who painted the Mona Lisa?",
          es: "¿Quién pintó la Mona Lisa?",
          de: "Wer malte die Mona Lisa?",
          nl: "Wie schilderde de Mona Lisa?"
        },
        options: [
          { en: "Leonardo da Vinci", es: "Leonardo da Vinci", de: "Leonardo da Vinci", nl: "Leonardo da Vinci" },
          { en: "Pablo Picasso", es: "Pablo Picasso", de: "Pablo Picasso", nl: "Pablo Picasso" },
          { en: "Vincent van Gogh", es: "Vincent van Gogh", de: "Vincent van Gogh", nl: "Vincent van Gogh" },
          { en: "Michelangelo", es: "Miguel Ángel", de: "Michelangelo", nl: "Michelangelo" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which instrument has 88 keys?",
          es: "¿Qué instrumento tiene 88 teclas?",
          de: "Welches Instrument hat 88 Tasten?",
          nl: "Welk instrument heeft 88 toetsen?"
        },
        options: [
          { en: "Piano", es: "Piano", de: "Klavier", nl: "Piano" },
          { en: "Guitar", es: "Guitarra", de: "Gitarre", nl: "Gitaar" },
          { en: "Violin", es: "Violín", de: "Geige", nl: "Viool" },
          { en: "Drums", es: "Batería", de: "Schlagzeug", nl: "Drums" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Who wrote 'Pride and Prejudice'?",
          es: "¿Quién escribió 'Orgullo y Prejuicio'?",
          de: "Wer schrieb 'Stolz und Vorurteil'?",
          nl: "Wie schreef 'Trots en Vooroordeel'?"
        },
        options: [
          { en: "Jane Austen", es: "Jane Austen", de: "Jane Austen", nl: "Jane Austen" },
          { en: "Emily Bronte", es: "Emily Bronte", de: "Emily Bronte", nl: "Emily Bronte" },
          { en: "Charlotte Bronte", es: "Charlotte Bronte", de: "Charlotte Bronte", nl: "Charlotte Bronte" },
          { en: "George Eliot", es: "George Eliot", de: "George Eliot", nl: "George Eliot" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What colors do you mix to make purple?",
          es: "¿Qué colores mezclas para hacer morado?",
          de: "Welche Farben mischt man, um Lila zu erhalten?",
          nl: "Welke kleuren meng je om paars te maken?"
        },
        options: [
          { en: "Red and blue", es: "Rojo y azul", de: "Rot und blau", nl: "Rood en blauw" },
          { en: "Red and yellow", es: "Rojo y amarillo", de: "Rot und gelb", nl: "Rood en geel" },
          { en: "Blue and yellow", es: "Azul y amarillo", de: "Blau und gelb", nl: "Blauw en geel" },
          { en: "Green and red", es: "Verde y rojo", de: "Grün und rot", nl: "Groen en rood" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "In which city is the Louvre Museum located?",
          es: "¿En qué ciudad se encuentra el Museo del Louvre?",
          de: "In welcher Stadt befindet sich das Louvre-Museum?",
          nl: "In welke stad bevindt zich het Louvre Museum?"
        },
        options: [
          { en: "Paris", es: "París", de: "Paris", nl: "Parijs" },
          { en: "London", es: "Londres", de: "London", nl: "Londen" },
          { en: "Rome", es: "Roma", de: "Rom", nl: "Rome" },
          { en: "Madrid", es: "Madrid", de: "Madrid", nl: "Madrid" }
        ],
        correctIndex: 0
      }
    ],

    // Day 9 - April 9th: Sports and Culture
    day9: [
      {
        question: {
          en: "How many players are on a soccer team on the field?",
          es: "¿Cuántos jugadores hay en un equipo de fútbol en el campo?",
          de: "Wie viele Spieler hat eine Fußballmannschaft auf dem Feld?",
          nl: "Hoeveel spelers staan er van een voetbalteam op het veld?"
        },
        options: [
          { en: "11", es: "11", de: "11", nl: "11" },
          { en: "9", es: "9", de: "9", nl: "9" },
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "12", es: "12", de: "12", nl: "12" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which sport is played at Wimbledon?",
          es: "¿Qué deporte se juega en Wimbledon?",
          de: "Welcher Sport wird in Wimbledon gespielt?",
          nl: "Welke sport wordt gespeeld in Wimbledon?"
        },
        options: [
          { en: "Tennis", es: "Tenis", de: "Tennis", nl: "Tennis" },
          { en: "Football", es: "Fútbol americano", de: "American Football", nl: "American Football" },
          { en: "Basketball", es: "Baloncesto", de: "Basketball", nl: "Basketbal" },
          { en: "Golf", es: "Golf", de: "Golf", nl: "Golf" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the traditional dress worn in Japan?",
          es: "¿Cuál es el vestido tradicional usado en Japón?",
          de: "Was ist die traditionelle Kleidung in Japan?",
          nl: "Wat is de traditionele kleding gedragen in Japan?"
        },
        options: [
          { en: "Kimono", es: "Kimono", de: "Kimono", nl: "Kimono" },
          { en: "Sari", es: "Sari", de: "Sari", nl: "Sari" },
          { en: "Kilt", es: "Falda escocesa", de: "Kilt", nl: "Kilt" },
          { en: "Toga", es: "Toga", de: "Toga", nl: "Toga" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "In which country did the Olympics originate?",
          es: "¿En qué país se originaron los Juegos Olímpicos?",
          de: "In welchem Land entstanden die Olympischen Spiele?",
          nl: "In welk land ontstonden de Olympische Spelen?"
        },
        options: [
          { en: "Greece", es: "Grecia", de: "Griechenland", nl: "Griekenland" },
          { en: "Italy", es: "Italia", de: "Italien", nl: "Italië" },
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "England", es: "Inglaterra", de: "England", nl: "Engeland" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the most popular spice in the world?",
          es: "¿Cuál es la especia más popular del mundo?",
          de: "Was ist das beliebteste Gewürz der Welt?",
          nl: "Wat is de populairste specerij ter wereld?"
        },
        options: [
          { en: "Black pepper", es: "Pimienta negra", de: "Schwarzer Pfeffer", nl: "Zwarte peper" },
          { en: "Salt", es: "Sal", de: "Salz", nl: "Zout" },
          { en: "Cinnamon", es: "Canela", de: "Zimt", nl: "Kaneel" },
          { en: "Paprika", es: "Pimentón", de: "Paprika", nl: "Paprika" }
        ],
        correctIndex: 0
      }
    ],

    // Day 10 - April 10th: Animals and Wildlife
    day10: [
      {
        question: {
          en: "What is the largest animal in the world?",
          es: "¿Cuál es el animal más grande del mundo?",
          de: "Was ist das größte Tier der Welt?",
          nl: "Wat is het grootste dier ter wereld?"
        },
        options: [
          { en: "Blue whale", es: "Ballena azul", de: "Blauwal", nl: "Blauwe vinvis" },
          { en: "Elephant", es: "Elefante", de: "Elefant", nl: "Olifant" },
          { en: "Giraffe", es: "Jirafa", de: "Giraffe", nl: "Giraf" },
          { en: "Shark", es: "Tiburón", de: "Hai", nl: "Haai" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many legs does a spider have?",
          es: "¿Cuántas patas tiene una araña?",
          de: "Wie viele Beine hat eine Spinne?",
          nl: "Hoeveel poten heeft een spin?"
        },
        options: [
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "4", es: "4", de: "4", nl: "4" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do pandas mainly eat?",
          es: "¿Qué comen principalmente los pandas?",
          de: "Was essen Pandas hauptsächlich?",
          nl: "Wat eten panda's hoofdzakelijk?"
        },
        options: [
          { en: "Bamboo", es: "Bambú", de: "Bambus", nl: "Bamboe" },
          { en: "Fish", es: "Pescado", de: "Fisch", nl: "Vis" },
          { en: "Meat", es: "Carne", de: "Fleisch", nl: "Vlees" },
          { en: "Fruits", es: "Frutas", de: "Früchte", nl: "Fruit" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which bird cannot fly?",
          es: "¿Qué ave no puede volar?",
          de: "Welcher Vogel kann nicht fliegen?",
          nl: "Welke vogel kan niet vliegen?"
        },
        options: [
          { en: "Penguin", es: "Pingüino", de: "Pinguin", nl: "Pinguïn" },
          { en: "Eagle", es: "Águila", de: "Adler", nl: "Adelaar" },
          { en: "Sparrow", es: "Gorrión", de: "Spatz", nl: "Mus" },
          { en: "Robin", es: "Petirrojo", de: "Rotkehlchen", nl: "Roodborst" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is a group of lions called?",
          es: "¿Cómo se llama un grupo de leones?",
          de: "Wie nennt man eine Gruppe von Löwen?",
          nl: "Hoe noem je een groep leeuwen?"
        },
        options: [
          { en: "Pride", es: "Manada", de: "Rudel", nl: "Troep" },
          { en: "Pack", es: "Jauría", de: "Meute", nl: "Roedel" },
          { en: "Flock", es: "Rebaño", de: "Herde", nl: "Kudde" },
          { en: "Herd", es: "Rebaño", de: "Herde", nl: "Kudde" }
        ],
        correctIndex: 0
      }
    ],

    // Day 11 - April 11th: Food and Culture
    day11: [
      {
        question: {
          en: "What country is famous for pizza?",
          es: "¿Qué país es famoso por la pizza?",
          de: "Welches Land ist berühmt für Pizza?",
          nl: "Welk land is beroemd om pizza?"
        },
        options: [
          { en: "Italy", es: "Italia", de: "Italien", nl: "Italië" },
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "Spain", es: "España", de: "Spanien", nl: "Spanje" },
          { en: "Greece", es: "Grecia", de: "Griechenland", nl: "Griekenland" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which fruit is known for keeping the doctor away?",
          es: "¿Qué fruta es conocida por alejar al médico?",
          de: "Welche Frucht hält den Arzt fern?",
          nl: "Welk fruit houdt de dokter weg?"
        },
        options: [
          { en: "Apple", es: "Manzana", de: "Apfel", nl: "Appel" },
          { en: "Orange", es: "Naranja", de: "Orange", nl: "Sinaasappel" },
          { en: "Banana", es: "Plátano", de: "Banane", nl: "Banaan" },
          { en: "Grape", es: "Uva", de: "Traube", nl: "Druif" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the main ingredient in bread?",
          es: "¿Cuál es el ingrediente principal del pan?",
          de: "Was ist die Hauptzutat in Brot?",
          nl: "Wat is het hoofdingrediënt van brood?"
        },
        options: [
          { en: "Flour", es: "Harina", de: "Mehl", nl: "Meel" },
          { en: "Sugar", es: "Azúcar", de: "Zucker", nl: "Suiker" },
          { en: "Salt", es: "Sal", de: "Salz", nl: "Zout" },
          { en: "Rice", es: "Arroz", de: "Reis", nl: "Rijst" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which vegetable makes you cry when you cut it?",
          es: "¿Qué verdura te hace llorar cuando la cortas?",
          de: "Welches Gemüse bringt dich zum Weinen, wenn du es schneidest?",
          nl: "Welke groente doet je huilen als je hem snijdt?"
        },
        options: [
          { en: "Onion", es: "Cebolla", de: "Zwiebel", nl: "Ui" },
          { en: "Carrot", es: "Zanahoria", de: "Karotte", nl: "Wortel" },
          { en: "Potato", es: "Papa", de: "Kartoffel", nl: "Aardappel" },
          { en: "Tomato", es: "Tomate", de: "Tomate", nl: "Tomaat" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What drink is made from coffee beans?",
          es: "¿Qué bebida se hace con granos de café?",
          de: "Welches Getränk wird aus Kaffeebohnen hergestellt?",
          nl: "Welke drank wordt gemaakt van koffiebonen?"
        },
        options: [
          { en: "Coffee", es: "Café", de: "Kaffee", nl: "Koffie" },
          { en: "Tea", es: "Té", de: "Tee", nl: "Thee" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Juice", es: "Jugo", de: "Saft", nl: "Sap" }
        ],
        correctIndex: 0
      }
    ],

    // Day 12 - April 12th: Technology and Innovation
    day12: [
      {
        question: {
          en: "What does 'www' stand for in a website address?",
          es: "¿Qué significa 'www' en una dirección web?",
          de: "Wofür steht 'www' in einer Website-Adresse?",
          nl: "Waar staat 'www' voor in een websiteadres?"
        },
        options: [
          { en: "World Wide Web", es: "World Wide Web", de: "World Wide Web", nl: "World Wide Web" },
          { en: "World Web Wide", es: "World Web Wide", de: "World Web Wide", nl: "World Web Wide" },
          { en: "Wide World Web", es: "Wide World Web", de: "Wide World Web", nl: "Wide World Web" },
          { en: "Web Wide World", es: "Web Wide World", de: "Web Wide World", nl: "Web Wide World" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Who invented the telephone?",
          es: "¿Quién inventó el teléfono?",
          de: "Wer erfand das Telefon?",
          nl: "Wie heeft de telefoon uitgevonden?"
        },
        options: [
          { en: "Alexander Graham Bell", es: "Alexander Graham Bell", de: "Alexander Graham Bell", nl: "Alexander Graham Bell" },
          { en: "Thomas Edison", es: "Thomas Edison", de: "Thomas Edison", nl: "Thomas Edison" },
          { en: "Nikola Tesla", es: "Nikola Tesla", de: "Nikola Tesla", nl: "Nikola Tesla" },
          { en: "Benjamin Franklin", es: "Benjamin Franklin", de: "Benjamin Franklin", nl: "Benjamin Franklin" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the brain of a computer called?",
          es: "¿Cómo se llama el cerebro de una computadora?",
          de: "Wie nennt man das Gehirn eines Computers?",
          nl: "Hoe heet de hersenen van een computer?"
        },
        options: [
          { en: "CPU", es: "CPU", de: "CPU", nl: "CPU" },
          { en: "RAM", es: "RAM", de: "RAM", nl: "RAM" },
          { en: "Mouse", es: "Ratón", de: "Maus", nl: "Muis" },
          { en: "Screen", es: "Pantalla", de: "Bildschirm", nl: "Scherm" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do we use to navigate on a computer screen?",
          es: "¿Qué usamos para navegar en una pantalla de computadora?",
          de: "Was verwenden wir, um auf einem Computerbildschirm zu navigieren?",
          nl: "Wat gebruiken we om te navigeren op een computerscherm?"
        },
        options: [
          { en: "Mouse", es: "Ratón", de: "Maus", nl: "Muis" },
          { en: "Spoon", es: "Cuchara", de: "Löffel", nl: "Lepel" },
          { en: "Fork", es: "Tenedor", de: "Gabel", nl: "Vork" },
          { en: "Plate", es: "Plato", de: "Teller", nl: "Bord" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What social media platform is known for short messages called tweets?",
          es: "¿Qué plataforma de redes sociales es conocida por mensajes cortos llamados tweets?",
          de: "Welche Social-Media-Plattform ist für kurze Nachrichten namens Tweets bekannt?",
          nl: "Welk social media platform staat bekend om korte berichten genaamd tweets?"
        },
        options: [
          { en: "Twitter", es: "Twitter", de: "Twitter", nl: "Twitter" },
          { en: "Facebook", es: "Facebook", de: "Facebook", nl: "Facebook" },
          { en: "Instagram", es: "Instagram", de: "Instagram", nl: "Instagram" },
          { en: "YouTube", es: "YouTube", de: "YouTube", nl: "YouTube" }
        ],
        correctIndex: 0
      }
    ],

    // Day 13 - April 13th: World Geography
    day13: [
      {
        question: {
          en: "What is the capital of France?",
          es: "¿Cuál es la capital de Francia?",
          de: "Was ist die Hauptstadt von Frankreich?",
          nl: "Wat is de hoofdstad van Frankrijk?"
        },
        options: [
          { en: "Paris", es: "París", de: "Paris", nl: "Parijs" },
          { en: "London", es: "Londres", de: "London", nl: "Londen" },
          { en: "Berlin", es: "Berlín", de: "Berlin", nl: "Berlijn" },
          { en: "Rome", es: "Roma", de: "Rom", nl: "Rome" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which desert is the largest in the world?",
          es: "¿Cuál es el desierto más grande del mundo?",
          de: "Welche Wüste ist die größte der Welt?",
          nl: "Welke woestijn is de grootste ter wereld?"
        },
        options: [
          { en: "Sahara Desert", es: "Desierto del Sahara", de: "Sahara", nl: "Sahara woestijn" },
          { en: "Gobi Desert", es: "Desierto de Gobi", de: "Wüste Gobi", nl: "Gobi woestijn" },
          { en: "Atacama Desert", es: "Desierto de Atacama", de: "Atacama-Wüste", nl: "Atacama woestijn" },
          { en: "Mojave Desert", es: "Desierto de Mojave", de: "Mojave-Wüste", nl: "Mojave woestijn" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "On which continent is Brazil located?",
          es: "¿En qué continente está ubicado Brasil?",
          de: "Auf welchem Kontinent liegt Brasilien?",
          nl: "Op welk continent ligt Brazilië?"
        },
        options: [
          { en: "South America", es: "América del Sur", de: "Südamerika", nl: "Zuid-Amerika" },
          { en: "North America", es: "América del Norte", de: "Nordamerika", nl: "Noord-Amerika" },
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" },
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the tallest waterfall in the world?",
          es: "¿Cuál es la cascada más alta del mundo?",
          de: "Was ist der höchste Wasserfall der Welt?",
          nl: "Wat is de hoogste waterval ter wereld?"
        },
        options: [
          { en: "Angel Falls", es: "Salto Ángel", de: "Angelfall", nl: "Angel Falls" },
          { en: "Niagara Falls", es: "Cataratas del Niágara", de: "Niagarafälle", nl: "Niagara Falls" },
          { en: "Victoria Falls", es: "Cataratas Victoria", de: "Victoriafälle", nl: "Victoria Falls" },
          { en: "Iguazu Falls", es: "Cataratas del Iguazú", de: "Iguazú-Wasserfälle", nl: "Iguazu Falls" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many continents are there?",
          es: "¿Cuántos continentes hay?",
          de: "Wie viele Kontinente gibt es?",
          nl: "Hoeveel continenten zijn er?"
        },
        options: [
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "8", es: "8", de: "8", nl: "8" }
        ],
        correctIndex: 0
      }
    ],

    // Day 14 - April 14th: Math and Numbers
    day14: [
      {
        question: {
          en: "What is 10 + 5?",
          es: "¿Cuánto es 10 + 5?",
          de: "Was ist 10 + 5?",
          nl: "Hoeveel is 10 + 5?"
        },
        options: [
          { en: "15", es: "15", de: "15", nl: "15" },
          { en: "20", es: "20", de: "20", nl: "20" },
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "8", es: "8", de: "8", nl: "8" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many sides does a triangle have?",
          es: "¿Cuántos lados tiene un triángulo?",
          de: "Wie viele Seiten hat ein Dreieck?",
          nl: "Hoeveel zijden heeft een driehoek?"
        },
        options: [
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "6", es: "6", de: "6", nl: "6" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 100 divided by 10?",
          es: "¿Cuánto es 100 dividido por 10?",
          de: "Was ist 100 geteilt durch 10?",
          nl: "Hoeveel is 100 gedeeld door 10?"
        },
        options: [
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "20", es: "20", de: "20", nl: "20" },
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "15", es: "15", de: "15", nl: "15" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What number comes after 99?",
          es: "¿Qué número viene después del 99?",
          de: "Welche Zahl kommt nach 99?",
          nl: "Welk getal komt na 99?"
        },
        options: [
          { en: "100", es: "100", de: "100", nl: "100" },
          { en: "101", es: "101", de: "101", nl: "101" },
          { en: "98", es: "98", de: "98", nl: "98" },
          { en: "200", es: "200", de: "200", nl: "200" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many minutes are in an hour?",
          es: "¿Cuántos minutos hay en una hora?",
          de: "Wie viele Minuten hat eine Stunde?",
          nl: "Hoeveel minuten zitten er in een uur?"
        },
        options: [
          { en: "60", es: "60", de: "60", nl: "60" },
          { en: "50", es: "50", de: "50", nl: "50" },
          { en: "100", es: "100", de: "100", nl: "100" },
          { en: "30", es: "30", de: "30", nl: "30" }
        ],
        correctIndex: 0
      }
    ],

    // Day 15 - April 15th: Human Body
    day15: [
      {
        question: {
          en: "How many senses do humans have?",
          es: "¿Cuántos sentidos tienen los humanos?",
          de: "Wie viele Sinne haben Menschen?",
          nl: "Hoeveel zintuigen hebben mensen?"
        },
        options: [
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "10", es: "10", de: "10", nl: "10" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What organ pumps blood through your body?",
          es: "¿Qué órgano bombea sangre a través de tu cuerpo?",
          de: "Welches Organ pumpt Blut durch den Körper?",
          nl: "Welk orgaan pompt bloed door je lichaam?"
        },
        options: [
          { en: "Heart", es: "Corazón", de: "Herz", nl: "Hart" },
          { en: "Brain", es: "Cerebro", de: "Gehirn", nl: "Hersenen" },
          { en: "Lungs", es: "Pulmones", de: "Lungen", nl: "Longen" },
          { en: "Stomach", es: "Estómago", de: "Magen", nl: "Maag" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many teeth do adults usually have?",
          es: "¿Cuántos dientes suelen tener los adultos?",
          de: "Wie viele Zähne haben Erwachsene normalerweise?",
          nl: "Hoeveel tanden hebben volwassenen meestal?"
        },
        options: [
          { en: "32", es: "32", de: "32", nl: "32" },
          { en: "20", es: "20", de: "20", nl: "20" },
          { en: "28", es: "28", de: "28", nl: "28" },
          { en: "24", es: "24", de: "24", nl: "24" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do you use to smell?",
          es: "¿Qué usas para oler?",
          de: "Womit riechst du?",
          nl: "Waarmee ruik je?"
        },
        options: [
          { en: "Nose", es: "Nariz", de: "Nase", nl: "Neus" },
          { en: "Eyes", es: "Ojos", de: "Augen", nl: "Ogen" },
          { en: "Ears", es: "Orejas", de: "Ohren", nl: "Oren" },
          { en: "Mouth", es: "Boca", de: "Mund", nl: "Mond" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What part of your body helps you hear?",
          es: "¿Qué parte de tu cuerpo te ayuda a escuchar?",
          de: "Welcher Teil deines Körpers hilft dir beim Hören?",
          nl: "Welk deel van je lichaam helpt je horen?"
        },
        options: [
          { en: "Ears", es: "Orejas", de: "Ohren", nl: "Oren" },
          { en: "Hands", es: "Manos", de: "Hände", nl: "Handen" },
          { en: "Feet", es: "Pies", de: "Füße", nl: "Voeten" },
          { en: "Hair", es: "Cabello", de: "Haare", nl: "Haar" }
        ],
        correctIndex: 0
      }
    ],

    // Day 16 - April 16th: Space and Astronomy
    day16: [
      {
        question: {
          en: "How many planets are in our solar system?",
          es: "¿Cuántos planetas hay en nuestro sistema solar?",
          de: "Wie viele Planeten gibt es in unserem Sonnensystem?",
          nl: "Hoeveel planeten zijn er in ons zonnestelsel?"
        },
        options: [
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "9", es: "9", de: "9", nl: "9" },
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "10", es: "10", de: "10", nl: "10" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which planet is closest to the sun?",
          es: "¿Qué planeta está más cerca del sol?",
          de: "Welcher Planet ist der Sonne am nächsten?",
          nl: "Welke planeet staat het dichtst bij de zon?"
        },
        options: [
          { en: "Mercury", es: "Mercurio", de: "Merkur", nl: "Mercurius" },
          { en: "Venus", es: "Venus", de: "Venus", nl: "Venus" },
          { en: "Earth", es: "Tierra", de: "Erde", nl: "Aarde" },
          { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do we call a person who travels to space?",
          es: "¿Cómo llamamos a una persona que viaja al espacio?",
          de: "Wie nennen wir eine Person, die ins All reist?",
          nl: "Hoe noemen we een persoon die naar de ruimte reist?"
        },
        options: [
          { en: "Astronaut", es: "Astronauta", de: "Astronaut", nl: "Astronaut" },
          { en: "Pilot", es: "Piloto", de: "Pilot", nl: "Piloot" },
          { en: "Driver", es: "Conductor", de: "Fahrer", nl: "Bestuurder" },
          { en: "Sailor", es: "Marinero", de: "Matrose", nl: "Zeeman" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the name of Earth's natural satellite?",
          es: "¿Cuál es el nombre del satélite natural de la Tierra?",
          de: "Wie heißt der natürliche Satellit der Erde?",
          nl: "Wat is de naam van de natuurlijke satelliet van de Aarde?"
        },
        options: [
          { en: "Moon", es: "Luna", de: "Mond", nl: "Maan" },
          { en: "Sun", es: "Sol", de: "Sonne", nl: "Zon" },
          { en: "Star", es: "Estrella", de: "Stern", nl: "Ster" },
          { en: "Comet", es: "Cometa", de: "Komet", nl: "Komeet" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which galaxy do we live in?",
          es: "¿En qué galaxia vivimos?",
          de: "In welcher Galaxie leben wir?",
          nl: "In welke melkweg leven wij?"
        },
        options: [
          { en: "Milky Way", es: "Vía Láctea", de: "Milchstraße", nl: "Melkweg" },
          { en: "Andromeda", es: "Andrómeda", de: "Andromeda", nl: "Andromeda" },
          { en: "Whirlpool", es: "Remolino", de: "Whirlpool", nl: "Whirlpool" },
          { en: "Triangulum", es: "Triángulo", de: "Dreieck", nl: "Driehoek" }
        ],
        correctIndex: 0
      }
    ],

    // Day 17 - April 17th: Ancient History
    day17: [
      {
        question: {
          en: "Which ancient wonder of the world was in Egypt?",
          es: "¿Cuál maravilla antigua del mundo estaba en Egipto?",
          de: "Welches antike Weltwunder befand sich in Ägypten?",
          nl: "Welk antiek wereldwonder bevond zich in Egypte?"
        },
        options: [
          { en: "Great Pyramid of Giza", es: "Gran Pirámide de Giza", de: "Große Pyramide von Gizeh", nl: "Grote Piramide van Gizeh" },
          { en: "Hanging Gardens", es: "Jardines Colgantes", de: "Hängende Gärten", nl: "Hangende Tuinen" },
          { en: "Colossus of Rhodes", es: "Coloso de Rodas", de: "Koloss von Rhodos", nl: "Kolossus van Rhodos" },
          { en: "Lighthouse of Alexandria", es: "Faro de Alejandría", de: "Leuchtturm von Alexandria", nl: "Vuurtoren van Alexandrië" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What was the main language of ancient Rome?",
          es: "¿Cuál era el idioma principal de la antigua Roma?",
          de: "Was war die Hauptsprache des antiken Roms?",
          nl: "Wat was de hoofdtaal van het oude Rome?"
        },
        options: [
          { en: "Latin", es: "Latín", de: "Latein", nl: "Latijn" },
          { en: "Greek", es: "Griego", de: "Griechisch", nl: "Grieks" },
          { en: "Italian", es: "Italiano", de: "Italienisch", nl: "Italiaans" },
          { en: "Spanish", es: "Español", de: "Spanisch", nl: "Spaans" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Who was the famous queen of ancient Egypt?",
          es: "¿Quién fue la famosa reina del antiguo Egipto?",
          de: "Wer war die berühmte Königin des alten Ägypten?",
          nl: "Wie was de beroemde koningin van het oude Egypte?"
        },
        options: [
          { en: "Cleopatra", es: "Cleopatra", de: "Kleopatra", nl: "Cleopatra" },
          { en: "Nefertiti", es: "Nefertiti", de: "Nofretete", nl: "Nefertiti" },
          { en: "Hatshepsut", es: "Hatshepsut", de: "Hatschepsut", nl: "Hatshepsut" },
          { en: "Ankhesenamun", es: "Ankhesenamun", de: "Anchesenamun", nl: "Ankhesenamun" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What were Roman soldiers called?",
          es: "¿Cómo se llamaban los soldados romanos?",
          de: "Wie nannte man römische Soldaten?",
          nl: "Hoe werden Romeinse soldaten genoemd?"
        },
        options: [
          { en: "Legionnaires", es: "Legionarios", de: "Legionäre", nl: "Legionairs" },
          { en: "Knights", es: "Caballeros", de: "Ritter", nl: "Ridders" },
          { en: "Warriors", es: "Guerreros", de: "Krieger", nl: "Krijgers" },
          { en: "Guards", es: "Guardias", de: "Wächter", nl: "Wachters" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which ancient civilization built Machu Picchu?",
          es: "¿Qué civilización antigua construyó Machu Picchu?",
          de: "Welche antike Zivilisation erbaute Machu Picchu?",
          nl: "Welke oude beschaving bouwde Machu Picchu?"
        },
        options: [
          { en: "Incas", es: "Incas", de: "Inkas", nl: "Inca's" },
          { en: "Mayans", es: "Mayas", de: "Maya", nl: "Maya's" },
          { en: "Aztecs", es: "Aztecas", de: "Azteken", nl: "Azteken" },
          { en: "Olmecs", es: "Olmecas", de: "Olmeken", nl: "Olmeken" }
        ],
        correctIndex: 0
      }
    ],

    // Day 18 - April 18th: Famous Inventions
    day18: [
      {
        question: {
          en: "Who invented the light bulb?",
          es: "¿Quién inventó la bombilla?",
          de: "Wer erfand die Glühbirne?",
          nl: "Wie vond de gloeilamp uit?"
        },
        options: [
          { en: "Thomas Edison", es: "Thomas Edison", de: "Thomas Edison", nl: "Thomas Edison" },
          { en: "Nikola Tesla", es: "Nikola Tesla", de: "Nikola Tesla", nl: "Nikola Tesla" },
          { en: "Benjamin Franklin", es: "Benjamin Franklin", de: "Benjamin Franklin", nl: "Benjamin Franklin" },
          { en: "Albert Einstein", es: "Albert Einstein", de: "Albert Einstein", nl: "Albert Einstein" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What did the Wright brothers invent?",
          es: "¿Qué inventaron los hermanos Wright?",
          de: "Was erfanden die Gebrüder Wright?",
          nl: "Wat hebben de gebroeders Wright uitgevonden?"
        },
        options: [
          { en: "Airplane", es: "Avión", de: "Flugzeug", nl: "Vliegtuig" },
          { en: "Car", es: "Carro", de: "Auto", nl: "Auto" },
          { en: "Train", es: "Tren", de: "Zug", nl: "Trein" },
          { en: "Bicycle", es: "Bicicleta", de: "Fahrrad", nl: "Fiets" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Who invented the printing press?",
          es: "¿Quién inventó la imprenta?",
          de: "Wer erfand den Buchdruck?",
          nl: "Wie vond de drukpers uit?"
        },
        options: [
          { en: "Johannes Gutenberg", es: "Johannes Gutenberg", de: "Johannes Gutenberg", nl: "Johannes Gutenberg" },
          { en: "Leonardo da Vinci", es: "Leonardo da Vinci", de: "Leonardo da Vinci", nl: "Leonardo da Vinci" },
          { en: "Isaac Newton", es: "Isaac Newton", de: "Isaac Newton", nl: "Isaac Newton" },
          { en: "Galileo Galilei", es: "Galileo Galilei", de: "Galileo Galilei", nl: "Galileo Galilei" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What device did Alexander Fleming discover by accident?",
          es: "¿Qué dispositivo descubrió Alexander Fleming por accidente?",
          de: "Was entdeckte Alexander Fleming zufällig?",
          nl: "Wat ontdekte Alexander Fleming per ongeluk?"
        },
        options: [
          { en: "Penicillin", es: "Penicilina", de: "Penicillin", nl: "Penicilline" },
          { en: "X-rays", es: "Rayos X", de: "Röntgenstrahlen", nl: "Röntgenstralen" },
          { en: "Microscope", es: "Microscopio", de: "Mikroskop", nl: "Microscoop" },
          { en: "Telescope", es: "Telescopio", de: "Teleskop", nl: "Telescoop" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What machine did Eli Whitney invent?",
          es: "¿Qué máquina inventó Eli Whitney?",
          de: "Welche Maschine erfand Eli Whitney?",
          nl: "Welke machine vond Eli Whitney uit?"
        },
        options: [
          { en: "Cotton gin", es: "Desmotadora de algodón", de: "Baumwoll-Egreniermaschine", nl: "Katoenontpitmachine" },
          { en: "Sewing machine", es: "Máquina de coser", de: "Nähmaschine", nl: "Naaimachine" },
          { en: "Steam engine", es: "Motor de vapor", de: "Dampfmaschine", nl: "Stoommachine" },
          { en: "Spinning wheel", es: "Rueca", de: "Spinnrad", nl: "Spinnewiel" }
        ],
        correctIndex: 0
      }
    ],

    // Day 19 - April 19th: Music and Arts
    day19: [
      {
        question: {
          en: "How many strings does a standard guitar have?",
          es: "¿Cuántas cuerdas tiene una guitarra estándar?",
          de: "Wie viele Saiten hat eine normale Gitarre?",
          nl: "Hoeveel snaren heeft een standaard gitaar?"
        },
        options: [
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "5", es: "5", de: "5", nl: "5" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Who composed 'The Four Seasons'?",
          es: "¿Quién compuso 'Las Cuatro Estaciones'?",
          de: "Wer komponierte 'Die vier Jahreszeiten'?",
          nl: "Wie componeerde 'De Vier Jaargetijden'?"
        },
        options: [
          { en: "Antonio Vivaldi", es: "Antonio Vivaldi", de: "Antonio Vivaldi", nl: "Antonio Vivaldi" },
          { en: "Mozart", es: "Mozart", de: "Mozart", nl: "Mozart" },
          { en: "Bach", es: "Bach", de: "Bach", nl: "Bach" },
          { en: "Beethoven", es: "Beethoven", de: "Beethoven", nl: "Beethoven" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What art movement was Pablo Picasso known for?",
          es: "¿Por qué movimiento artístico era conocido Pablo Picasso?",
          de: "Für welche Kunstrichtung war Pablo Picasso bekannt?",
          nl: "Voor welke kunststroming was Pablo Picasso bekend?"
        },
        options: [
          { en: "Cubism", es: "Cubismo", de: "Kubismus", nl: "Kubisme" },
          { en: "Impressionism", es: "Impresionismo", de: "Impressionismus", nl: "Impressionisme" },
          { en: "Realism", es: "Realismo", de: "Realismus", nl: "Realisme" },
          { en: "Surrealism", es: "Surrealismo", de: "Surrealismus", nl: "Surrealisme" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "In which country was ballet first developed?",
          es: "¿En qué país se desarrolló por primera vez el ballet?",
          de: "In welchem Land wurde das Ballett zuerst entwickelt?",
          nl: "In welk land werd ballet voor het eerst ontwikkeld?"
        },
        options: [
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "Russia", es: "Rusia", de: "Russland", nl: "Rusland" },
          { en: "Italy", es: "Italia", de: "Italien", nl: "Italië" },
          { en: "England", es: "Inglaterra", de: "England", nl: "Engeland" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What material is traditionally used for sculpting?",
          es: "¿Qué material se usa tradicionalmente para esculpir?",
          de: "Welches Material wird traditionell zum Bildhauern verwendet?",
          nl: "Welk materiaal wordt traditioneel gebruikt voor beeldhouwen?"
        },
        options: [
          { en: "Marble", es: "Mármol", de: "Marmor", nl: "Marmer" },
          { en: "Paper", es: "Papel", de: "Papier", nl: "Papier" },
          { en: "Fabric", es: "Tela", de: "Stoff", nl: "Stof" },
          { en: "Glass", es: "Vidrio", de: "Glas", nl: "Glas" }
        ],
        correctIndex: 0
      }
    ],

    // Day 20 - April 20th: World Cultures
    day20: [
      {
        question: {
          en: "What is the greeting 'Namaste' associated with?",
          es: "¿Con qué se asocia el saludo 'Namaste'?",
          de: "Womit wird der Gruß 'Namaste' verbunden?",
          nl: "Waarmee wordt de groet 'Namaste' geassocieerd?"
        },
        options: [
          { en: "Indian culture", es: "Cultura india", de: "Indische Kultur", nl: "Indiase cultuur" },
          { en: "Chinese culture", es: "Cultura china", de: "Chinesische Kultur", nl: "Chinese cultuur" },
          { en: "Japanese culture", es: "Cultura japonesa", de: "Japanische Kultur", nl: "Japanse cultuur" },
          { en: "Korean culture", es: "Cultura coreana", de: "Koreanische Kultur", nl: "Koreaanse cultuur" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which festival is known as the 'Festival of Colors'?",
          es: "¿Qué festival es conocido como el 'Festival de los Colores'?",
          de: "Welches Festival ist als 'Festival der Farben' bekannt?",
          nl: "Welk festival staat bekend als het 'Festival van Kleuren'?"
        },
        options: [
          { en: "Holi", es: "Holi", de: "Holi", nl: "Holi" },
          { en: "Diwali", es: "Diwali", de: "Diwali", nl: "Diwali" },
          { en: "Christmas", es: "Navidad", de: "Weihnachten", nl: "Kerstmis" },
          { en: "Halloween", es: "Halloween", de: "Halloween", nl: "Halloween" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the traditional Mexican hat called?",
          es: "¿Cómo se llama el sombrero tradicional mexicano?",
          de: "Wie heißt der traditionelle mexikanische Hut?",
          nl: "Hoe heet de traditionele Mexicaanse hoed?"
        },
        options: [
          { en: "Sombrero", es: "Sombrero", de: "Sombrero", nl: "Sombrero" },
          { en: "Beret", es: "Boina", de: "Baskenmütze", nl: "Baret" },
          { en: "Fedora", es: "Fedora", de: "Fedora", nl: "Fedora" },
          { en: "Cap", es: "Gorra", de: "Mütze", nl: "Pet" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which dance is traditional in Argentina?",
          es: "¿Qué danza es tradicional en Argentina?",
          de: "Welcher Tanz ist in Argentinien traditionell?",
          nl: "Welke dans is traditioneel in Argentinië?"
        },
        options: [
          { en: "Tango", es: "Tango", de: "Tango", nl: "Tango" },
          { en: "Salsa", es: "Salsa", de: "Salsa", nl: "Salsa" },
          { en: "Flamenco", es: "Flamenco", de: "Flamenco", nl: "Flamenco" },
          { en: "Waltz", es: "Vals", de: "Walzer", nl: "Wals" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the traditional Scottish garment worn by men?",
          es: "¿Cuál es la prenda tradicional escocesa usada por los hombres?",
          de: "Was ist das traditionelle schottische Kleidungsstück für Männer?",
          nl: "Wat is het traditionele Schotse kledingstuk gedragen door mannen?"
        },
        options: [
          { en: "Kilt", es: "Falda escocesa", de: "Kilt", nl: "Kilt" },
          { en: "Toga", es: "Toga", de: "Toga", nl: "Toga" },
          { en: "Kimono", es: "Kimono", de: "Kimono", nl: "Kimono" },
          { en: "Sari", es: "Sari", de: "Sari", nl: "Sari" }
        ],
        correctIndex: 0
      }
    ],

    // Day 21 - April 21st: Ocean Life
    day21: [
      {
        question: {
          en: "What is the largest fish in the ocean?",
          es: "¿Cuál es el pez más grande del océano?",
          de: "Was ist der größte Fisch im Ozean?",
          nl: "Wat is de grootste vis in de oceaan?"
        },
        options: [
          { en: "Whale shark", es: "Tiburón ballena", de: "Walhai", nl: "Walvishaai" },
          { en: "Great white shark", es: "Tiburón blanco", de: "Weißer Hai", nl: "Witte haai" },
          { en: "Tuna", es: "Atún", de: "Thunfisch", nl: "Tonijn" },
          { en: "Swordfish", es: "Pez espada", de: "Schwertfisch", nl: "Zwaardvis" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do coral reefs provide for marine life?",
          es: "¿Qué proporcionan los arrecifes de coral para la vida marina?",
          de: "Was bieten Korallenriffe für das Meeesleben?",
          nl: "Wat bieden koraalriffen voor het zeeleven?"
        },
        options: [
          { en: "Shelter and food", es: "Refugio y comida", de: "Schutz und Nahrung", nl: "Bescherming en voedsel" },
          { en: "Nothing", es: "Nada", de: "Nichts", nl: "Niets" },
          { en: "Only decoration", es: "Solo decoración", de: "Nur Dekoration", nl: "Alleen decoratie" },
          { en: "Pollution", es: "Contaminación", de: "Verschmutzung", nl: "Vervuiling" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which sea creature has eight arms?",
          es: "¿Qué criatura marina tiene ocho brazos?",
          de: "Welche Meereskreatur hat acht Arme?",
          nl: "Welk zeewezen heeft acht armen?"
        },
        options: [
          { en: "Octopus", es: "Pulpo", de: "Krake", nl: "Octopus" },
          { en: "Jellyfish", es: "Medusa", de: "Qualle", nl: "Kwal" },
          { en: "Starfish", es: "Estrella de mar", de: "Seestern", nl: "Zeester" },
          { en: "Crab", es: "Cangrejo", de: "Krabbe", nl: "Krab" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What percentage of Earth is covered by oceans?",
          es: "¿Qué porcentaje de la Tierra está cubierto por océanos?",
          de: "Welcher Prozentsatz der Erde ist von Ozeanen bedeckt?",
          nl: "Welk percentage van de Aarde is bedekt door oceanen?"
        },
        options: [
          { en: "About 70%", es: "Aproximadamente 70%", de: "Etwa 70%", nl: "Ongeveer 70%" },
          { en: "About 50%", es: "Aproximadamente 50%", de: "Etwa 50%", nl: "Ongeveer 50%" },
          { en: "About 30%", es: "Aproximadamente 30%", de: "Etwa 30%", nl: "Ongeveer 30%" },
          { en: "About 90%", es: "Aproximadamente 90%", de: "Etwa 90%", nl: "Ongeveer 90%" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which marine animal is known for its intelligence?",
          es: "¿Qué animal marino es conocido por su inteligencia?",
          de: "Welches Meerestier ist für seine Intelligenz bekannt?",
          nl: "Welk zeedier staat bekend om zijn intelligentie?"
        },
        options: [
          { en: "Dolphin", es: "Delfín", de: "Delfin", nl: "Dolfijn" },
          { en: "Seaweed", es: "Alga marina", de: "Seetang", nl: "Zeewier" },
          { en: "Rock", es: "Roca", de: "Felsen", nl: "Rots" },
          { en: "Sand", es: "Arena", de: "Sand", nl: "Zand" }
        ],
        correctIndex: 0
      }
    ],

    // Day 22 - April 22nd: Earth Day - Environmental Awareness
    day22: [
      {
        question: {
          en: "What do we call the day dedicated to environmental awareness?",
          es: "¿Cómo llamamos al día dedicado a la conciencia ambiental?",
          de: "Wie nennen wir den Tag, der dem Umweltbewusstsein gewidmet ist?",
          nl: "Hoe noemen we de dag gewijd aan milieubewustzijn?"
        },
        options: [
          { en: "Earth Day", es: "Día de la Tierra", de: "Tag der Erde", nl: "Aarde Dag" },
          { en: "Sky Day", es: "Día del Cielo", de: "Himmelstag", nl: "Hemel Dag" },
          { en: "Water Day", es: "Día del Agua", de: "Wassertag", nl: "Water Dag" },
          { en: "Fire Day", es: "Día del Fuego", de: "Feuertag", nl: "Vuur Dag" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What can we do to help reduce pollution?",
          es: "¿Qué podemos hacer para ayudar a reducir la contaminación?",
          de: "Was können wir tun, um die Verschmutzung zu reduzieren?",
          nl: "Wat kunnen we doen om vervuiling te helpen verminderen?"
        },
        options: [
          { en: "Recycle and reuse", es: "Reciclar y reutilizar", de: "Recyceln und wiederverwenden", nl: "Recyclen en hergebruiken" },
          { en: "Use more plastic", es: "Usar más plástico", de: "Mehr Plastik verwenden", nl: "Meer plastic gebruiken" },
          { en: "Throw trash anywhere", es: "Tirar basura en cualquier lugar", de: "Müll überall hinwerfen", nl: "Overal afval gooien" },
          { en: "Waste more energy", es: "Desperdiciar más energía", de: "Mehr Energie verschwenden", nl: "Meer energie verspillen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which energy source is renewable and clean?",
          es: "¿Qué fuente de energía es renovable y limpia?",
          de: "Welche Energiequelle ist erneuerbar und sauber?",
          nl: "Welke energiebron is hernieuwbaar en schoon?"
        },
        options: [
          { en: "Solar power", es: "Energía solar", de: "Solarenergie", nl: "Zonne-energie" },
          { en: "Coal", es: "Carbón", de: "Kohle", nl: "Steenkool" },
          { en: "Oil", es: "Petróleo", de: "Öl", nl: "Olie" },
          { en: "Gas", es: "Gas", de: "Gas", nl: "Gas" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What happens when we plant more trees?",
          es: "¿Qué pasa cuando plantamos más árboles?",
          de: "Was passiert, wenn wir mehr Bäume pflanzen?",
          nl: "Wat gebeurt er als we meer bomen planten?"
        },
        options: [
          { en: "Clean air and oxygen", es: "Aire limpio y oxígeno", de: "Saubere Luft und Sauerstoff", nl: "Schone lucht en zuurstof" },
          { en: "More pollution", es: "Más contaminación", de: "Mehr Verschmutzung", nl: "Meer vervuiling" },
          { en: "Less oxygen", es: "Menos oxígeno", de: "Weniger Sauerstoff", nl: "Minder zuurstof" },
          { en: "Dirty water", es: "Agua sucia", de: "Schmutziges Wasser", nl: "Vuil water" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What should we do to save water?",
          es: "¿Qué debemos hacer para ahorrar agua?",
          de: "Was sollten wir tun, um Wasser zu sparen?",
          nl: "Wat moeten we doen om water te besparen?"
        },
        options: [
          { en: "Turn off taps when not using", es: "Cerrar los grifos cuando no los usemos", de: "Wasserhähne schließen, wenn nicht in Gebrauch", nl: "Kranen dichtdraaien als we ze niet gebruiken" },
          { en: "Leave taps running", es: "Dejar los grifos abiertos", de: "Wasserhähne laufen lassen", nl: "Kranen laten lopen" },
          { en: "Use more water", es: "Usar más agua", de: "Mehr Wasser verwenden", nl: "Meer water gebruiken" },
          { en: "Waste water daily", es: "Desperdiciar agua diariamente", de: "Täglich Wasser verschwenden", nl: "Dagelijks water verspillen" }
        ],
        correctIndex: 0
      }
    ],

    // Day 23 - April 23rd: Weather and Climate
    day23: [
      {
        question: {
          en: "What do we call frozen rain?",
          es: "¿Cómo llamamos a la lluvia congelada?",
          de: "Wie nennen wir gefrorenen Regen?",
          nl: "Hoe noemen we bevroren regen?"
        },
        options: [
          { en: "Hail", es: "Granizo", de: "Hagel", nl: "Hagel" },
          { en: "Snow", es: "Nieve", de: "Schnee", nl: "Sneeuw" },
          { en: "Sleet", es: "Aguanieve", de: "Schneematsch", nl: "Ijzel" },
          { en: "Fog", es: "Niebla", de: "Nebel", nl: "Mist" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What instrument measures temperature?",
          es: "¿Qué instrumento mide la temperatura?",
          de: "Welches Instrument misst die Temperatur?",
          nl: "Welk instrument meet de temperatuur?"
        },
        options: [
          { en: "Thermometer", es: "Termómetro", de: "Thermometer", nl: "Thermometer" },
          { en: "Barometer", es: "Barómetro", de: "Barometer", nl: "Barometer" },
          { en: "Compass", es: "Brújula", de: "Kompass", nl: "Kompas" },
          { en: "Scale", es: "Báscula", de: "Waage", nl: "Weegschaal" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What season comes after winter?",
          es: "¿Qué estación viene después del invierno?",
          de: "Welche Jahreszeit kommt nach dem Winter?",
          nl: "Welk seizoen komt na de winter?"
        },
        options: [
          { en: "Spring", es: "Primavera", de: "Frühling", nl: "Lente" },
          { en: "Summer", es: "Verano", de: "Sommer", nl: "Zomer" },
          { en: "Fall", es: "Otoño", de: "Herbst", nl: "Herfst" },
          { en: "Winter again", es: "Invierno otra vez", de: "Wieder Winter", nl: "Weer winter" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What causes thunder and lightning?",
          es: "¿Qué causa el trueno y el relámpago?",
          de: "Was verursacht Donner und Blitz?",
          nl: "Wat veroorzaakt donder en bliksem?"
        },
        options: [
          { en: "Storm clouds", es: "Nubes de tormenta", de: "Gewitterwolken", nl: "Onweerswolken" },
          { en: "Sunshine", es: "Luz del sol", de: "Sonnenschein", nl: "Zonneschijn" },
          { en: "Clear skies", es: "Cielos despejados", de: "Klarer Himmel", nl: "Heldere luchten" },
          { en: "Calm weather", es: "Clima tranquilo", de: "Ruhiges Wetter", nl: "Kalm weer" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do clouds contain?",
          es: "¿Qué contienen las nubes?",
          de: "Was enthalten Wolken?",
          nl: "Wat bevatten wolken?"
        },
        options: [
          { en: "Water vapor", es: "Vapor de agua", de: "Wasserdampf", nl: "Waterdamp" },
          { en: "Sand", es: "Arena", de: "Sand", nl: "Zand" },
          { en: "Rocks", es: "Rocas", de: "Steine", nl: "Stenen" },
          { en: "Metal", es: "Metal", de: "Metall", nl: "Metaal" }
        ],
        correctIndex: 0
      }
    ],

    // Day 24 - April 24th: Transportation
    day24: [
      {
        question: {
          en: "What vehicle travels on tracks?",
          es: "¿Qué vehículo viaja sobre rieles?",
          de: "Welches Fahrzeug fährt auf Schienen?",
          nl: "Welk voertuig rijdt op rails?"
        },
        options: [
          { en: "Train", es: "Tren", de: "Zug", nl: "Trein" },
          { en: "Car", es: "Carro", de: "Auto", nl: "Auto" },
          { en: "Bicycle", es: "Bicicleta", de: "Fahrrad", nl: "Fiets" },
          { en: "Boat", es: "Barco", de: "Boot", nl: "Boot" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which vehicle can fly in the sky?",
          es: "¿Qué vehículo puede volar en el cielo?",
          de: "Welches Fahrzeug kann am Himmel fliegen?",
          nl: "Welk voertuig kan vliegen in de lucht?"
        },
        options: [
          { en: "Airplane", es: "Avión", de: "Flugzeug", nl: "Vliegtuig" },
          { en: "Bus", es: "Autobús", de: "Bus", nl: "Bus" },
          { en: "Truck", es: "Camión", de: "Lastwagen", nl: "Vrachtwagen" },
          { en: "Motorcycle", es: "Motocicleta", de: "Motorrad", nl: "Motor" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do ships and boats travel on?",
          es: "¿Sobre qué viajan los barcos y botes?",
          de: "Worauf fahren Schiffe und Boote?",
          nl: "Waar varen schepen en boten op?"
        },
        options: [
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Land", es: "Tierra", de: "Land", nl: "Land" },
          { en: "Air", es: "Aire", de: "Luft", nl: "Lucht" },
          { en: "Space", es: "Espacio", de: "Weltraum", nl: "Ruimte" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many wheels does a bicycle have?",
          es: "¿Cuántas ruedas tiene una bicicleta?",
          de: "Wie viele Räder hat ein Fahrrad?",
          nl: "Hoeveel wielen heeft een fiets?"
        },
        options: [
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "1", es: "1", de: "1", nl: "1" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What powers most cars today?",
          es: "¿Qué alimenta a la mayoría de los autos hoy?",
          de: "Was treibt die meisten Autos heute an?",
          nl: "Wat drijft de meeste auto's vandaag aan?"
        },
        options: [
          { en: "Gasoline", es: "Gasolina", de: "Benzin", nl: "Benzine" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Air", es: "Aire", de: "Luft", nl: "Lucht" },
          { en: "Sunlight", es: "Luz del sol", de: "Sonnenlicht", nl: "Zonlicht" }
        ],
        correctIndex: 0
      }
    ],

    // Day 25 - April 25th: Famous Landmarks
    day25: [
      {
        question: {
          en: "Which famous tower is in Paris, France?",
          es: "¿Qué torre famosa está en París, Francia?",
          de: "Welcher berühmte Turm steht in Paris, Frankreich?",
          nl: "Welke beroemde toren staat in Parijs, Frankrijk?"
        },
        options: [
          { en: "Eiffel Tower", es: "Torre Eiffel", de: "Eiffelturm", nl: "Eiffeltoren" },
          { en: "Big Ben", es: "Big Ben", de: "Big Ben", nl: "Big Ben" },
          { en: "Statue of Liberty", es: "Estatua de la Libertad", de: "Freiheitsstatue", nl: "Vrijheidsbeeld" },
          { en: "Leaning Tower", es: "Torre Inclinada", de: "Schiefer Turm", nl: "Scheve Toren" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Where is the Great Wall located?",
          es: "¿Dónde se encuentra la Gran Muralla?",
          de: "Wo befindet sich die Große Mauer?",
          nl: "Waar bevindt zich de Grote Muur?"
        },
        options: [
          { en: "China", es: "China", de: "China", nl: "China" },
          { en: "Japan", es: "Japón", de: "Japan", nl: "Japan" },
          { en: "India", es: "India", de: "Indien", nl: "India" },
          { en: "Korea", es: "Corea", de: "Korea", nl: "Korea" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "In which country can you find Machu Picchu?",
          es: "¿En qué país puedes encontrar Machu Picchu?",
          de: "In welchem Land befindet sich Machu Picchu?",
          nl: "In welk land kun je Machu Picchu vinden?"
        },
        options: [
          { en: "Peru", es: "Perú", de: "Peru", nl: "Peru" },
          { en: "Mexico", es: "México", de: "Mexiko", nl: "Mexico" },
          { en: "Brazil", es: "Brasil", de: "Brasilien", nl: "Brazilië" },
          { en: "Chile", es: "Chile", de: "Chile", nl: "Chili" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the famous statue in New York Harbor?",
          es: "¿Cuál es la famosa estatua en el Puerto de Nueva York?",
          de: "Wie heißt die berühmte Statue im New Yorker Hafen?",
          nl: "Wat is het beroemde standbeeld in de haven van New York?"
        },
        options: [
          { en: "Statue of Liberty", es: "Estatua de la Libertad", de: "Freiheitsstatue", nl: "Vrijheidsbeeld" },
          { en: "Lincoln Memorial", es: "Memorial de Lincoln", de: "Lincoln Memorial", nl: "Lincoln Memorial" },
          { en: "Mount Rushmore", es: "Monte Rushmore", de: "Mount Rushmore", nl: "Mount Rushmore" },
          { en: "Washington Monument", es: "Monumento a Washington", de: "Washington-Denkmal", nl: "Washington Monument" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which ancient structure in Egypt is famous worldwide?",
          es: "¿Qué estructura antigua en Egipto es famosa mundialmente?",
          de: "Welche antike Struktur in Ägypten ist weltweit berühmt?",
          nl: "Welke oude structuur in Egypte is wereldwijd beroemd?"
        },
        options: [
          { en: "Pyramids", es: "Pirámides", de: "Pyramiden", nl: "Piramides" },
          { en: "Castles", es: "Castillos", de: "Schlösser", nl: "Kastelen" },
          { en: "Bridges", es: "Puentes", de: "Brücken", nl: "Bruggen" },
          { en: "Towers", es: "Torres", de: "Türme", nl: "Torens" }
        ],
        correctIndex: 0
      }
    ],

    // Day 26 - April 26th: Sports World
    day26: [
      {
        question: {
          en: "How often are the Summer Olympics held?",
          es: "¿Con qué frecuencia se celebran los Juegos Olímpicos de Verano?",
          de: "Wie oft finden die Olympischen Sommerspiele statt?",
          nl: "Hoe vaak worden de Olympische Zomerspelen gehouden?"
        },
        options: [
          { en: "Every 4 years", es: "Cada 4 años", de: "Alle 4 Jahre", nl: "Elke 4 jaar" },
          { en: "Every year", es: "Cada año", de: "Jedes Jahr", nl: "Elk jaar" },
          { en: "Every 2 years", es: "Cada 2 años", de: "Alle 2 Jahre", nl: "Elke 2 jaar" },
          { en: "Every 10 years", es: "Cada 10 años", de: "Alle 10 Jahre", nl: "Elke 10 jaar" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "In which sport do you use a racket?",
          es: "¿En qué deporte usas una raqueta?",
          de: "In welchem Sport verwendet man einen Schläger?",
          nl: "In welke sport gebruik je een racket?"
        },
        options: [
          { en: "Tennis", es: "Tenis", de: "Tennis", nl: "Tennis" },
          { en: "Football", es: "Fútbol", de: "Fußball", nl: "Voetbal" },
          { en: "Swimming", es: "Natación", de: "Schwimmen", nl: "Zwemmen" },
          { en: "Running", es: "Correr", de: "Laufen", nl: "Hardlopen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the highest score you can get in bowling?",
          es: "¿Cuál es la puntuación más alta que puedes obtener en el boliche?",
          de: "Was ist die höchste Punktzahl, die man beim Bowling erreichen kann?",
          nl: "Wat is de hoogste score die je kunt halen bij bowlen?"
        },
        options: [
          { en: "300", es: "300", de: "300", nl: "300" },
          { en: "200", es: "200", de: "200", nl: "200" },
          { en: "150", es: "150", de: "150", nl: "150" },
          { en: "100", es: "100", de: "100", nl: "100" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "In basketball, how many players are on each team on the court?",
          es: "En baloncesto, ¿cuántos jugadores hay de cada equipo en la cancha?",
          de: "Beim Basketball, wie viele Spieler sind von jedem Team auf dem Spielfeld?",
          nl: "In basketbal, hoeveel spelers zijn er van elk team op het veld?"
        },
        options: [
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "11", es: "11", de: "11", nl: "11" },
          { en: "7", es: "7", de: "7", nl: "7" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which sport is known as 'America's pastime'?",
          es: "¿Qué deporte es conocido como 'el pasatiempo de América'?",
          de: "Welcher Sport ist als 'Amerikas Zeitvertreib' bekannt?",
          nl: "Welke sport staat bekend als 'Amerika's tijdverdrijf'?"
        },
        options: [
          { en: "Baseball", es: "Béisbol", de: "Baseball", nl: "Honkbal" },
          { en: "Basketball", es: "Baloncesto", de: "Basketball", nl: "Basketbal" },
          { en: "American Football", es: "Fútbol americano", de: "American Football", nl: "American Football" },
          { en: "Hockey", es: "Hockey", de: "Hockey", nl: "Hockey" }
        ],
        correctIndex: 0
      }
    ],

    // Day 27 - April 27th: World Languages
    day27: [
      {
        question: {
          en: "What is the most spoken language in the world?",
          es: "¿Cuál es el idioma más hablado del mundo?",
          de: "Was ist die meistgesprochene Sprache der Welt?",
          nl: "Wat is de meest gesproken taal ter wereld?"
        },
        options: [
          { en: "Mandarin Chinese", es: "Chino mandarín", de: "Mandarin-Chinesisch", nl: "Mandarijn Chinees" },
          { en: "English", es: "Inglés", de: "Englisch", nl: "Engels" },
          { en: "Spanish", es: "Español", de: "Spanisch", nl: "Spaans" },
          { en: "French", es: "Francés", de: "Französisch", nl: "Frans" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How do you say 'thank you' in French?",
          es: "¿Cómo se dice 'gracias' en francés?",
          de: "Wie sagt man 'danke' auf Französisch?",
          nl: "Hoe zeg je 'dank je wel' in het Frans?"
        },
        options: [
          { en: "Merci", es: "Merci", de: "Merci", nl: "Merci" },
          { en: "Gracias", es: "Gracias", de: "Gracias", nl: "Gracias" },
          { en: "Danke", es: "Danke", de: "Danke", nl: "Danke" },
          { en: "Arigato", es: "Arigato", de: "Arigato", nl: "Arigato" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What language is spoken in Brazil?",
          es: "¿Qué idioma se habla en Brasil?",
          de: "Welche Sprache wird in Brasilien gesprochen?",
          nl: "Welke taal wordt gesproken in Brazilië?"
        },
        options: [
          { en: "Portuguese", es: "Portugués", de: "Portugiesisch", nl: "Portugees" },
          { en: "Spanish", es: "Español", de: "Spanisch", nl: "Spaans" },
          { en: "French", es: "Francés", de: "Französisch", nl: "Frans" },
          { en: "Italian", es: "Italiano", de: "Italienisch", nl: "Italiaans" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How do you say 'hello' in Spanish?",
          es: "¿Cómo se dice 'hola' en inglés?",
          de: "Wie sagt man 'hallo' auf Spanisch?",
          nl: "Hoe zeg je 'hallo' in het Spaans?"
        },
        options: [
          { en: "Hola", es: "Hello", de: "Hola", nl: "Hola" },
          { en: "Bonjour", es: "Bonjour", de: "Bonjour", nl: "Bonjour" },
          { en: "Ciao", es: "Ciao", de: "Ciao", nl: "Ciao" },
          { en: "Guten Tag", es: "Guten Tag", de: "Guten Tag", nl: "Guten Tag" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which writing system uses characters instead of letters?",
          es: "¿Qué sistema de escritura usa caracteres en lugar de letras?",
          de: "Welches Schriftsystem verwendet Zeichen statt Buchstaben?",
          nl: "Welk schriftsysteem gebruikt karakters in plaats van letters?"
        },
        options: [
          { en: "Chinese", es: "Chino", de: "Chinesisch", nl: "Chinees" },
          { en: "English", es: "Inglés", de: "Englisch", nl: "Engels" },
          { en: "German", es: "Alemán", de: "Deutsch", nl: "Duits" },
          { en: "Spanish", es: "Español", de: "Spanisch", nl: "Spaans" }
        ],
        correctIndex: 0
      }
    ],

    // Day 28 - April 28th: Basic Math
    day28: [
      {
        question: {
          en: "What is 7 × 8?",
          es: "¿Cuánto es 7 × 8?",
          de: "Was ist 7 × 8?",
          nl: "Hoeveel is 7 × 8?"
        },
        options: [
          { en: "56", es: "56", de: "56", nl: "56" },
          { en: "54", es: "54", de: "54", nl: "54" },
          { en: "64", es: "64", de: "64", nl: "64" },
          { en: "48", es: "48", de: "48", nl: "48" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 15 - 9?",
          es: "¿Cuánto es 15 - 9?",
          de: "Was ist 15 - 9?",
          nl: "Hoeveel is 15 - 9?"
        },
        options: [
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "4", es: "4", de: "4", nl: "4" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many sides does a hexagon have?",
          es: "¿Cuántos lados tiene un hexágono?",
          de: "Wie viele Seiten hat ein Sechseck?",
          nl: "Hoeveel zijden heeft een zeshoek?"
        },
        options: [
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "7", es: "7", de: "7", nl: "7" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 12 ÷ 3?",
          es: "¿Cuánto es 12 ÷ 3?",
          de: "Was ist 12 ÷ 3?",
          nl: "Hoeveel is 12 ÷ 3?"
        },
        options: [
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "2", es: "2", de: "2", nl: "2" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do we call a number that can only be divided by 1 and itself?",
          es: "¿Cómo llamamos a un número que solo puede dividirse por 1 y por sí mismo?",
          de: "Wie nennen wir eine Zahl, die nur durch 1 und sich selbst teilbar ist?",
          nl: "Hoe noemen we een getal dat alleen door 1 en zichzelf gedeeld kan worden?"
        },
        options: [
          { en: "Prime number", es: "Número primo", de: "Primzahl", nl: "Priemgetal" },
          { en: "Even number", es: "Número par", de: "Gerade Zahl", nl: "Even getal" },
          { en: "Odd number", es: "Número impar", de: "Ungerade Zahl", nl: "Oneven getal" },
          { en: "Whole number", es: "Número entero", de: "Ganze Zahl", nl: "Geheel getal" }
        ],
        correctIndex: 0
      }
    ],

    // Day 29 - April 29th: Colors and Shapes
    day29: [
      {
        question: {
          en: "What are the three primary colors?",
          es: "¿Cuáles son los tres colores primarios?",
          de: "Was sind die drei Grundfarben?",
          nl: "Wat zijn de drie primaire kleuren?"
        },
        options: [
          { en: "Red, blue, yellow", es: "Rojo, azul, amarillo", de: "Rot, blau, gelb", nl: "Rood, blauw, geel" },
          { en: "Red, green, blue", es: "Rojo, verde, azul", de: "Rot, grün, blau", nl: "Rood, groen, blauw" },
          { en: "Blue, yellow, green", es: "Azul, amarillo, verde", de: "Blau, gelb, grün", nl: "Blauw, geel, groen" },
          { en: "Red, purple, orange", es: "Rojo, morado, naranja", de: "Rot, lila, orange", nl: "Rood, paars, oranje" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What shape has no corners?",
          es: "¿Qué forma no tiene esquinas?",
          de: "Welche Form hat keine Ecken?",
          nl: "Welke vorm heeft geen hoeken?"
        },
        options: [
          { en: "Circle", es: "Círculo", de: "Kreis", nl: "Cirkel" },
          { en: "Square", es: "Cuadrado", de: "Quadrat", nl: "Vierkant" },
          { en: "Triangle", es: "Triángulo", de: "Dreieck", nl: "Driehoek" },
          { en: "Rectangle", es: "Rectángulo", de: "Rechteck", nl: "Rechthoek" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What color do you get when you mix red and white?",
          es: "¿Qué color obtienes cuando mezclas rojo y blanco?",
          de: "Welche Farbe erhältst du, wenn du rot und weiß mischst?",
          nl: "Welke kleur krijg je als je rood en wit mengt?"
        },
        options: [
          { en: "Pink", es: "Rosa", de: "Rosa", nl: "Roze" },
          { en: "Purple", es: "Morado", de: "Lila", nl: "Paars" },
          { en: "Orange", es: "Naranja", de: "Orange", nl: "Oranje" },
          { en: "Brown", es: "Marrón", de: "Braun", nl: "Bruin" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many sides does a square have?",
          es: "¿Cuántos lados tiene un cuadrado?",
          de: "Wie viele Seiten hat ein Quadrat?",
          nl: "Hoeveel zijden heeft een vierkant?"
        },
        options: [
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "5", es: "5", de: "5", nl: "5" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What color is associated with nature and plants?",
          es: "¿Qué color se asocia con la naturaleza y las plantas?",
          de: "Welche Farbe wird mit Natur und Pflanzen assoziiert?",
          nl: "Welke kleur wordt geassocieerd met natuur en planten?"
        },
        options: [
          { en: "Green", es: "Verde", de: "Grün", nl: "Groen" },
          { en: "Red", es: "Rojo", de: "Rot", nl: "Rood" },
          { en: "Blue", es: "Azul", de: "Blau", nl: "Blauw" },
          { en: "Yellow", es: "Amarillo", de: "Gelb", nl: "Geel" }
        ],
        correctIndex: 0
      }
    ],

    // Day 30 - April 30th: Final April Challenge - Mixed Review
    day30: [
      {
        question: {
          en: "April is which month of the year?",
          es: "¿Abril es qué mes del año?",
          de: "April ist welcher Monat des Jahres?",
          nl: "April is welke maand van het jaar?"
        },
        options: [
          { en: "4th", es: "4º", de: "4.", nl: "4e" },
          { en: "3rd", es: "3º", de: "3.", nl: "3e" },
          { en: "5th", es: "5º", de: "5.", nl: "5e" },
          { en: "2nd", es: "2º", de: "2.", nl: "2e" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What holiday celebrates environmental awareness in April?",
          es: "¿Qué feriado celebra la conciencia ambiental en abril?",
          de: "Welcher Feiertag feiert das Umweltbewusstsein im April?",
          nl: "Welke feestdag viert milieubewustzijn in april?"
        },
        options: [
          { en: "Earth Day", es: "Día de la Tierra", de: "Tag der Erde", nl: "Aarde Dag" },
          { en: "Christmas", es: "Navidad", de: "Weihnachten", nl: "Kerstmis" },
          { en: "Halloween", es: "Halloween", de: "Halloween", nl: "Halloween" },
          { en: "New Year", es: "Año Nuevo", de: "Neujahr", nl: "Nieuwjaar" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What season is April in the Northern Hemisphere?",
          es: "¿En qué estación está abril en el Hemisferio Norte?",
          de: "In welcher Jahreszeit ist April auf der Nordhalbkugel?",
          nl: "In welk seizoen valt april op het noordelijk halfrond?"
        },
        options: [
          { en: "Spring", es: "Primavera", de: "Frühling", nl: "Lente" },
          { en: "Summer", es: "Verano", de: "Sommer", nl: "Zomer" },
          { en: "Fall", es: "Otoño", de: "Herbst", nl: "Herfst" },
          { en: "Winter", es: "Invierno", de: "Winter", nl: "Winter" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What symbol represents April Fool's Day?",
          es: "¿Qué símbolo representa el Día de los Inocentes de abril?",
          de: "Welches Symbol steht für den 1. April?",
          nl: "Welk symbool staat voor 1 april?"
        },
        options: [
          { en: "Jokes and pranks", es: "Bromas y travesuras", de: "Scherze und Streiche", nl: "Grappen en streken" },
          { en: "Hearts", es: "Corazones", de: "Herzen", nl: "Harten" },
          { en: "Pumpkins", es: "Calabazas", de: "Kürbisse", nl: "Pompoenen" },
          { en: "Fireworks", es: "Fuegos artificiales", de: "Feuerwerk", nl: "Vuurwerk" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Congratulations! You completed all April challenges! What did you learn?",
          es: "¡Felicidades! ¡Completaste todos los desafíos de abril! ¿Qué aprendiste?",
          de: "Herzlichen Glückwunsch! Du hast alle April-Herausforderungen abgeschlossen! Was hast du gelernt?",
          nl: "Gefeliciteerd! Je hebt alle april-uitdagingen voltooid! Wat heb je geleerd?"
        },
        options: [
          { en: "Many new things!", es: "¡Muchas cosas nuevas!", de: "Viele neue Dinge!", nl: "Veel nieuwe dingen!" },
          { en: "Nothing", es: "Nada", de: "Nichts", nl: "Niets" },
          { en: "Only games", es: "Solo juegos", de: "Nur Spiele", nl: "Alleen spelletjes" },
          { en: "Just numbers", es: "Solo números", de: "Nur Zahlen", nl: "Alleen getallen" }
        ],
        correctIndex: 0
      }
    ]
  };

  // Export April challenges
  if (typeof window.addMonthChallenges === 'function') {
    window.addMonthChallenges('april', aprilChallenges);
  }

})();