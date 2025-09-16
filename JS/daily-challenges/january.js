// January Daily Challenges - 31 days × 5 questions each = 155 total questions
(function() {
  
  const januaryChallenges = {
    name: {
      en: "January Daily Challenges",
      es: "Desafíos Diarios de Enero", 
      de: "Januar Tägliche Herausforderungen",
      nl: "Januari Dagelijkse Uitdagingen"
    },
    
    // Day 1 - January 1st: New Year's Day
    day1: [
      {
        question: {
          en: "What do people celebrate on January 1st?",
          es: "¿Qué celebra la gente el 1 de enero?",
          de: "Was feiern Menschen am 1. Januar?",
          nl: "Wat vieren mensen op 1 januari?"
        },
        options: [
          { en: "New Year", es: "Año Nuevo", de: "Neujahr", nl: "Nieuwjaar" },
          { en: "Christmas", es: "Navidad", de: "Weihnachten", nl: "Kerstmis" },
          { en: "Halloween", es: "Halloween", de: "Halloween", nl: "Halloween" },
          { en: "Easter", es: "Pascua", de: "Ostern", nl: "Pasen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What season is January in?",
          es: "¿En qué estación está enero?",
          de: "In welcher Jahreszeit ist Januar?",
          nl: "In welk seizoen valt januari?"
        },
        options: [
          { en: "Winter", es: "Invierno", de: "Winter", nl: "Winter" },
          { en: "Spring", es: "Primavera", de: "Frühling", nl: "Lente" },
          { en: "Summer", es: "Verano", de: "Sommer", nl: "Zomer" },
          { en: "Fall", es: "Otoño", de: "Herbst", nl: "Herfst" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many days are in January?",
          es: "¿Cuántos días tiene enero?",
          de: "Wie viele Tage hat der Januar?",
          nl: "Hoeveel dagen heeft januari?"
        },
        options: [
          { en: "31", es: "31", de: "31", nl: "31" },
          { en: "30", es: "30", de: "30", nl: "30" },
          { en: "28", es: "28", de: "28", nl: "28" },
          { en: "29", es: "29", de: "29", nl: "29" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What birthstone belongs to January?",
          es: "¿Qué piedra de nacimiento pertenece a enero?",
          de: "Welcher Geburtsstein gehört zum Januar?",
          nl: "Welke geboortesteen hoort bij januari?"
        },
        options: [
          { en: "Garnet", es: "Granate", de: "Granat", nl: "Granaat" },
          { en: "Ruby", es: "Rubí", de: "Rubin", nl: "Robijn" },
          { en: "Diamond", es: "Diamante", de: "Diamant", nl: "Diamant" },
          { en: "Pearl", es: "Perla", de: "Perle", nl: "Parel" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What month comes after January?",
          es: "¿Qué mes viene después de enero?",
          de: "Welcher Monat kommt nach Januar?",
          nl: "Welke maand komt na januari?"
        },
        options: [
          { en: "February", es: "Febrero", de: "Februar", nl: "Februari" },
          { en: "March", es: "Marzo", de: "März", nl: "Maart" },
          { en: "December", es: "Diciembre", de: "Dezember", nl: "December" },
          { en: "April", es: "Abril", de: "April", nl: "April" }
        ],
        correctIndex: 0
      }
    ]

,
    
    // Day 2 - January 2nd
    day2: [
      {
        question: {
          en: "Which planet is closest to the Sun?",
          es: "¿Qué planeta está más cerca del Sol?",
          de: "Welcher Planet ist der Sonne am nächsten?",
          nl: "Welke planeet staat het dichtst bij de Zon?"
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
          en: "What is the capital of France?",
          es: "¿Cuál es la capital de Francia?",
          de: "Was ist die Hauptstadt von Frankreich?",
          nl: "Wat is de hoofdstad van Frankrijk?"
        },
        options: [
          { en: "Paris", es: "París", de: "Paris", nl: "Parijs" },
          { en: "London", es: "Londres", de: "London", nl: "Londen" },
          { en: "Berlin", es: "Berlín", de: "Berlin", nl: "Berlijn" },
          { en: "Madrid", es: "Madrid", de: "Madrid", nl: "Madrid" }
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
      },
      {
        question: {
          en: "What gas do plants absorb from the air?",
          es: "¿Qué gas absorben las plantas del aire?",
          de: "Welches Gas nehmen Pflanzen aus der Luft auf?",
          nl: "Welk gas nemen planten op uit de lucht?"
        },
        options: [
          { en: "Carbon Dioxide", es: "Dióxido de Carbono", de: "Kohlendioxid", nl: "Koolstofdioxide" },
          { en: "Oxygen", es: "Oxígeno", de: "Sauerstoff", nl: "Zuurstof" },
          { en: "Nitrogen", es: "Nitrógeno", de: "Stickstoff", nl: "Stikstof" },
          { en: "Hydrogen", es: "Hidrógeno", de: "Wasserstoff", nl: "Waterstof" }
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
          { en: "Pacific", es: "Pacífico", de: "Pazifik", nl: "Stille Oceaan" },
          { en: "Atlantic", es: "Atlántico", de: "Atlantik", nl: "Atlantische Oceaan" },
          { en: "Indian", es: "Índico", de: "Indik", nl: "Indische Oceaan" },
          { en: "Arctic", es: "Ártico", de: "Arktis", nl: "Noordelijke IJszee" }
        ],
        correctIndex: 0
      }
    ],

    // Day 3 - January 3rd
    day3: [
      {
        question: {
          en: "What is the largest mammal in the world?",
          es: "¿Cuál es el mamífero más grande del mundo?",
          de: "Was ist das größte Säugetier der Welt?",
          nl: "Wat is het grootste zoogdier ter wereld?"
        },
        options: [
          { en: "Blue Whale", es: "Ballena Azul", de: "Blauwal", nl: "Blauwe Vinvis" },
          { en: "Elephant", es: "Elefante", de: "Elefant", nl: "Olifant" },
          { en: "Giraffe", es: "Jirafa", de: "Giraffe", nl: "Giraf" },
          { en: "Hippopotamus", es: "Hipopótamo", de: "Nilpferd", nl: "Nijlpaard" }
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
          en: "What is the chemical symbol for gold?",
          es: "¿Cuál es el símbolo químico del oro?",
          de: "Was ist das chemische Symbol für Gold?",
          nl: "Wat is het chemische symbool voor goud?"
        },
        options: [
          { en: "Au", es: "Au", de: "Au", nl: "Au" },
          { en: "Go", es: "Go", de: "Go", nl: "Go" },
          { en: "Ag", es: "Ag", de: "Ag", nl: "Ag" },
          { en: "Gd", es: "Gd", de: "Gd", nl: "Gd" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which instrument measures earthquakes?",
          es: "¿Qué instrumento mide los terremotos?",
          de: "Welches Instrument misst Erdbeben?",
          nl: "Welk instrument meet aardbevingen?"
        },
        options: [
          { en: "Seismograph", es: "Sismógrafo", de: "Seismograph", nl: "Seismograaf" },
          { en: "Thermometer", es: "Termómetro", de: "Thermometer", nl: "Thermometer" },
          { en: "Barometer", es: "Barómetro", de: "Barometer", nl: "Barometer" },
          { en: "Telescope", es: "Telescopio", de: "Teleskop", nl: "Telescoop" }
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

    // Day 4 - January 4th
    day4: [
      {
        question: {
          en: "Who painted the Mona Lisa?",
          es: "¿Quién pintó la Mona Lisa?",
          de: "Wer malte die Mona Lisa?",
          nl: "Wie schilderde de Mona Lisa?"
        },
        options: [
          { en: "Leonardo da Vinci", es: "Leonardo da Vinci", de: "Leonardo da Vinci", nl: "Leonardo da Vinci" },
          { en: "Michelangelo", es: "Miguel Ángel", de: "Michelangelo", nl: "Michelangelo" },
          { en: "Picasso", es: "Picasso", de: "Picasso", nl: "Picasso" },
          { en: "Van Gogh", es: "Van Gogh", de: "Van Gogh", nl: "Van Gogh" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the fastest land animal?",
          es: "¿Cuál es el animal terrestre más rápido?",
          de: "Was ist das schnellste Landtier?",
          nl: "Wat is het snelste landdier?"
        },
        options: [
          { en: "Cheetah", es: "Guepardo", de: "Gepard", nl: "Jachtluipaard" },
          { en: "Lion", es: "León", de: "Löwe", nl: "Leeuw" },
          { en: "Horse", es: "Caballo", de: "Pferd", nl: "Paard" },
          { en: "Leopard", es: "Leopardo", de: "Leopard", nl: "Luipaard" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which is the longest river in the world?",
          es: "¿Cuál es el río más largo del mundo?",
          de: "Welcher ist der längste Fluss der Welt?",
          nl: "Welke is de langste rivier ter wereld?"
        },
        options: [
          { en: "Nile", es: "Nilo", de: "Nil", nl: "Nijl" },
          { en: "Amazon", es: "Amazonas", de: "Amazonas", nl: "Amazone" },
          { en: "Mississippi", es: "Misisipi", de: "Mississippi", nl: "Mississippi" },
          { en: "Yangtze", es: "Yangtsé", de: "Jangtse", nl: "Yangtze" }
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
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "8", es: "8", de: "8", nl: "8" }
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
          { en: "Steel", es: "Acero", de: "Stahl", nl: "Staal" },
          { en: "Iron", es: "Hierro", de: "Eisen", nl: "IJzer" },
          { en: "Granite", es: "Granito", de: "Granit", nl: "Graniet" }
        ],
        correctIndex: 0
      }
    ],

    // Day 5 - January 5th
    day5: [
      {
        question: {
          en: "What is the capital of Italy?",
          es: "¿Cuál es la capital de Italia?",
          de: "Was ist die Hauptstadt von Italien?",
          nl: "Wat is de hoofdstad van Italië?"
        },
        options: [
          { en: "Rome", es: "Roma", de: "Rom", nl: "Rome" },
          { en: "Milan", es: "Milán", de: "Mailand", nl: "Milaan" },
          { en: "Venice", es: "Venecia", de: "Venedig", nl: "Venetië" },
          { en: "Florence", es: "Florencia", de: "Florenz", nl: "Florence" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which organ pumps blood through the body?",
          es: "¿Qué órgano bombea sangre por el cuerpo?",
          de: "Welches Organ pumpt Blut durch den Körper?",
          nl: "Welk orgaan pompt bloed door het lichaam?"
        },
        options: [
          { en: "Heart", es: "Corazón", de: "Herz", nl: "Hart" },
          { en: "Brain", es: "Cerebro", de: "Gehirn", nl: "Hersenen" },
          { en: "Liver", es: "Hígado", de: "Leber", nl: "Lever" },
          { en: "Lungs", es: "Pulmones", de: "Lungen", nl: "Longen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the freezing point of water?",
          es: "¿Cuál es el punto de congelación del agua?",
          de: "Was ist der Gefrierpunkt von Wasser?",
          nl: "Wat is het vriespunt van water?"
        },
        options: [
          { en: "0°C", es: "0°C", de: "0°C", nl: "0°C" },
          { en: "32°C", es: "32°C", de: "32°C", nl: "32°C" },
          { en: "100°C", es: "100°C", de: "100°C", nl: "100°C" },
          { en: "-10°C", es: "-10°C", de: "-10°C", nl: "-10°C" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which country is famous for tulips?",
          es: "¿Qué país es famoso por los tulipanes?",
          de: "Welches Land ist berühmt für Tulpen?",
          nl: "Welk land staat bekend om tulpen?"
        },
        options: [
          { en: "Netherlands", es: "Países Bajos", de: "Niederlande", nl: "Nederland" },
          { en: "Germany", es: "Alemania", de: "Deutschland", nl: "Duitsland" },
          { en: "Belgium", es: "Bélgica", de: "Belgien", nl: "België" },
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" }
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

    // Day 6 - January 6th: Three Kings Day
    day6: [
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
          { en: "Mount Kilimanjaro", es: "Monte Kilimanjaro", de: "Kilimandscharo", nl: "Kilimanjaro" },
          { en: "Mount Fuji", es: "Monte Fuji", de: "Fujisan", nl: "Mount Fuji" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which language is spoken in Brazil?",
          es: "¿Qué idioma se habla en Brasil?",
          de: "Welche Sprache wird in Brasilien gesprochen?",
          nl: "Welke taal wordt er gesproken in Brazilië?"
        },
        options: [
          { en: "Portuguese", es: "Portugués", de: "Portugiesisch", nl: "Portugees" },
          { en: "Spanish", es: "Español", de: "Spanisch", nl: "Spaans" },
          { en: "Italian", es: "Italiano", de: "Italienisch", nl: "Italiaans" },
          { en: "French", es: "Francés", de: "Französisch", nl: "Frans" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do bees make?",
          es: "¿Qué hacen las abejas?",
          de: "Was stellen Bienen her?",
          nl: "Wat maken bijen?"
        },
        options: [
          { en: "Honey", es: "Miel", de: "Honig", nl: "Honing" },
          { en: "Milk", es: "Leche", de: "Milch", nl: "Melk" },
          { en: "Butter", es: "Mantequilla", de: "Butter", nl: "Boter" },
          { en: "Cheese", es: "Queso", de: "Käse", nl: "Kaas" }
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
          en: "What is the currency of Japan?",
          es: "¿Cuál es la moneda de Japón?",
          de: "Was ist die Währung von Japan?",
          nl: "Wat is de munteenheid van Japan?"
        },
        options: [
          { en: "Yen", es: "Yen", de: "Yen", nl: "Yen" },
          { en: "Dollar", es: "Dólar", de: "Dollar", nl: "Dollar" },
          { en: "Euro", es: "Euro", de: "Euro", nl: "Euro" },
          { en: "Pound", es: "Libra", de: "Pfund", nl: "Pond" }
        ],
        correctIndex: 0
      }
    ],

    // Day 7 - January 7th
    day7: [
      {
        question: {
          en: "Which is the hottest planet in our solar system?",
          es: "¿Cuál es el planeta más caliente de nuestro sistema solar?",
          de: "Welcher ist der heißeste Planet unseres Sonnensystems?",
          nl: "Welke is de heetste planeet in ons zonnestelsel?"
        },
        options: [
          { en: "Venus", es: "Venus", de: "Venus", nl: "Venus" },
          { en: "Mercury", es: "Mercurio", de: "Merkur", nl: "Mercurius" },
          { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" },
          { en: "Jupiter", es: "Júpiter", de: "Jupiter", nl: "Jupiter" }
        ],
        correctIndex: 0
      },
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
          { en: "Mark Twain", es: "Mark Twain", de: "Mark Twain", nl: "Mark Twain" },
          { en: "Jane Austen", es: "Jane Austen", de: "Jane Austen", nl: "Jane Austen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the largest desert in the world?",
          es: "¿Cuál es el desierto más grande del mundo?",
          de: "Was ist die größte Wüste der Welt?",
          nl: "Wat is de grootste woestijn ter wereld?"
        },
        options: [
          { en: "Antarctic Desert", es: "Desierto Antártico", de: "Antarktische Wüste", nl: "Antarctische Woestijn" },
          { en: "Sahara", es: "Sahara", de: "Sahara", nl: "Sahara" },
          { en: "Gobi", es: "Gobi", de: "Gobi", nl: "Gobi" },
          { en: "Kalahari", es: "Kalahari", de: "Kalahari", nl: "Kalahari" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many bones are in the human body?",
          es: "¿Cuántos huesos hay en el cuerpo humano?",
          de: "Wie viele Knochen hat der menschliche Körper?",
          nl: "Hoeveel botten zitten er in het menselijk lichaam?"
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
          en: "What is the most spoken language in the world?",
          es: "¿Cuál es el idioma más hablado del mundo?",
          de: "Was ist die meistgesprochene Sprache der Welt?",
          nl: "Wat is de meest gesproken taal ter wereld?"
        },
        options: [
          { en: "Mandarin Chinese", es: "Chino Mandarín", de: "Mandarin-Chinesisch", nl: "Mandarijn Chinees" },
          { en: "English", es: "Inglés", de: "Englisch", nl: "Engels" },
          { en: "Spanish", es: "Español", de: "Spanisch", nl: "Spaans" },
          { en: "Hindi", es: "Hindi", de: "Hindi", nl: "Hindi" }
        ],
        correctIndex: 0
      }
    ],

    // Day 8 - January 8th
    day8: [
      {
        question: {
          en: "What is the chemical symbol for water?",
          es: "¿Cuál es el símbolo químico del agua?",
          de: "Was ist das chemische Symbol für Wasser?",
          nl: "Wat is het chemische symbool voor water?"
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
          en: "Which country invented pizza?",
          es: "¿Qué país inventó la pizza?",
          de: "Welches Land hat Pizza erfunden?",
          nl: "Welk land heeft pizza uitgevonden?"
        },
        options: [
          { en: "Italy", es: "Italia", de: "Italien", nl: "Italië" },
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "Greece", es: "Grecia", de: "Griechenland", nl: "Griekenland" },
          { en: "Spain", es: "España", de: "Spanien", nl: "Spanje" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the speed of light?",
          es: "¿Cuál es la velocidad de la luz?",
          de: "Wie hoch ist die Lichtgeschwindigkeit?",
          nl: "Wat is de snelheid van het licht?"
        },
        options: [
          { en: "299,792,458 m/s", es: "299,792,458 m/s", de: "299,792,458 m/s", nl: "299,792,458 m/s" },
          { en: "150,000,000 m/s", es: "150,000,000 m/s", de: "150,000,000 m/s", nl: "150,000,000 m/s" },
          { en: "400,000,000 m/s", es: "400,000,000 m/s", de: "400,000,000 m/s", nl: "400,000,000 m/s" },
          { en: "200,000,000 m/s", es: "200,000,000 m/s", de: "200,000,000 m/s", nl: "200,000,000 m/s" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which animal is known as the 'King of the Jungle'?",
          es: "¿Qué animal es conocido como el 'Rey de la Selva'?",
          de: "Welches Tier ist als 'König des Dschungels' bekannt?",
          nl: "Welk dier staat bekend als de 'Koning van de Jungle'?"
        },
        options: [
          { en: "Lion", es: "León", de: "Löwe", nl: "Leeuw" },
          { en: "Tiger", es: "Tigre", de: "Tiger", nl: "Tijger" },
          { en: "Elephant", es: "Elefante", de: "Elefant", nl: "Olifant" },
          { en: "Gorilla", es: "Gorila", de: "Gorilla", nl: "Gorilla" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the main ingredient in guacamole?",
          es: "¿Cuál es el ingrediente principal del guacamole?",
          de: "Was ist die Hauptzutat von Guacamole?",
          nl: "Wat is het hoofdingrediënt van guacamole?"
        },
        options: [
          { en: "Avocado", es: "Aguacate", de: "Avocado", nl: "Avocado" },
          { en: "Tomato", es: "Tomate", de: "Tomate", nl: "Tomaat" },
          { en: "Onion", es: "Cebolla", de: "Zwiebel", nl: "Ui" },
          { en: "Pepper", es: "Pimiento", de: "Paprika", nl: "Paprika" }
        ],
        correctIndex: 0
      }
    ],

    // Day 9 - January 9th
    day9: [
      {
        question: {
          en: "Which ocean surrounds Antarctica?",
          es: "¿Qué océano rodea la Antártida?",
          de: "Welcher Ozean umgibt die Antarktis?",
          nl: "Welke oceaan omringt Antarctica?"
        },
        options: [
          { en: "Southern Ocean", es: "Océano Antártico", de: "Südlicher Ozean", nl: "Zuidelijke Oceaan" },
          { en: "Pacific Ocean", es: "Océano Pacífico", de: "Pazifischer Ozean", nl: "Stille Oceaan" },
          { en: "Atlantic Ocean", es: "Océano Atlántico", de: "Atlantischer Ozean", nl: "Atlantische Oceaan" },
          { en: "Indian Ocean", es: "Océano Índico", de: "Indischer Ozean", nl: "Indische Oceaan" }
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
          { en: "Lungs", es: "Pulmones", de: "Lungen", nl: "Longen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which year was the first iPhone released?",
          es: "¿En qué año se lanzó el primer iPhone?",
          de: "In welchem Jahr wurde das erste iPhone veröffentlicht?",
          nl: "In welk jaar werd de eerste iPhone uitgebracht?"
        },
        options: [
          { en: "2007", es: "2007", de: "2007", nl: "2007" },
          { en: "2008", es: "2008", de: "2008", nl: "2008" },
          { en: "2006", es: "2006", de: "2006", nl: "2006" },
          { en: "2009", es: "2009", de: "2009", nl: "2009" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the capital of Australia?",
          es: "¿Cuál es la capital de Australia?",
          de: "Was ist die Hauptstadt von Australien?",
          nl: "Wat is de hoofdstad van Australië?"
        },
        options: [
          { en: "Canberra", es: "Canberra", de: "Canberra", nl: "Canberra" },
          { en: "Sydney", es: "Sídney", de: "Sydney", nl: "Sydney" },
          { en: "Melbourne", es: "Melbourne", de: "Melbourne", nl: "Melbourne" },
          { en: "Perth", es: "Perth", de: "Perth", nl: "Perth" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many strings does a standard guitar have?",
          es: "¿Cuántas cuerdas tiene una guitarra estándar?",
          de: "Wie viele Saiten hat eine Standard-Gitarre?",
          nl: "Hoeveel snaren heeft een standaard gitaar?"
        },
        options: [
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "7", es: "7", de: "7", nl: "7" }
        ],
        correctIndex: 0
      }
    ],

    // Day 10 - January 10th
    day10: [
      {
        question: {
          en: "What is the process by which plants make food?",
          es: "¿Cuál es el proceso por el cual las plantas hacen comida?",
          de: "Was ist der Prozess, durch den Pflanzen Nahrung herstellen?",
          nl: "Wat is het proces waarbij planten voedsel maken?"
        },
        options: [
          { en: "Photosynthesis", es: "Fotosíntesis", de: "Photosynthese", nl: "Fotosynthese" },
          { en: "Respiration", es: "Respiración", de: "Atmung", nl: "Ademhaling" },
          { en: "Digestion", es: "Digestión", de: "Verdauung", nl: "Vertering" },
          { en: "Fermentation", es: "Fermentación", de: "Fermentation", nl: "Fermentatie" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Who composed 'The Four Seasons'?",
          es: "¿Quién compuso 'Las Cuatro Estaciones'?",
          de: "Wer komponierte 'Die vier Jahreszeiten'?",
          nl: "Wie componeerde 'De Vier Seizoenen'?"
        },
        options: [
          { en: "Antonio Vivaldi", es: "Antonio Vivaldi", de: "Antonio Vivaldi", nl: "Antonio Vivaldi" },
          { en: "Johann Sebastian Bach", es: "Johann Sebastian Bach", de: "Johann Sebastian Bach", nl: "Johann Sebastian Bach" },
          { en: "Wolfgang Mozart", es: "Wolfgang Mozart", de: "Wolfgang Mozart", nl: "Wolfgang Mozart" },
          { en: "Ludwig van Beethoven", es: "Ludwig van Beethoven", de: "Ludwig van Beethoven", nl: "Ludwig van Beethoven" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the smallest unit of matter?",
          es: "¿Cuál es la unidad más pequeña de materia?",
          de: "Was ist die kleinste Einheit der Materie?",
          nl: "Wat is de kleinste eenheid van materie?"
        },
        options: [
          { en: "Atom", es: "Átomo", de: "Atom", nl: "Atoom" },
          { en: "Molecule", es: "Molécula", de: "Molekül", nl: "Molecuul" },
          { en: "Cell", es: "Célula", de: "Zelle", nl: "Cel" },
          { en: "Proton", es: "Protón", de: "Proton", nl: "Proton" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which country has the most time zones?",
          es: "¿Qué país tiene más zonas horarias?",
          de: "Welches Land hat die meisten Zeitzonen?",
          nl: "Welk land heeft de meeste tijdzones?"
        },
        options: [
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "Russia", es: "Rusia", de: "Russland", nl: "Rusland" },
          { en: "United States", es: "Estados Unidos", de: "Vereinigte Staaten", nl: "Verenigde Staten" },
          { en: "China", es: "China", de: "China", nl: "China" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the boiling point of water at sea level?",
          es: "¿Cuál es el punto de ebullición del agua a nivel del mar?",
          de: "Was ist der Siedepunkt von Wasser auf Meereshöhe?",
          nl: "Wat is het kookpunt van water op zeeniveau?"
        },
        options: [
          { en: "100°C", es: "100°C", de: "100°C", nl: "100°C" },
          { en: "90°C", es: "90°C", de: "90°C", nl: "90°C" },
          { en: "110°C", es: "110°C", de: "110°C", nl: "110°C" },
          { en: "0°C", es: "0°C", de: "0°C", nl: "0°C" }
        ],
        correctIndex: 0
      }
    ],

    // Day 11 - January 11th
    day11: [
      {
        question: {
          en: "Which vitamin is produced when skin is exposed to sunlight?",
          es: "¿Qué vitamina se produce cuando la piel se expone a la luz solar?",
          de: "Welches Vitamin wird produziert, wenn Haut dem Sonnenlicht ausgesetzt wird?",
          nl: "Welke vitamine wordt geproduceerd wanneer de huid wordt blootgesteld aan zonlicht?"
        },
        options: [
          { en: "Vitamin D", es: "Vitamina D", de: "Vitamin D", nl: "Vitamine D" },
          { en: "Vitamin C", es: "Vitamina C", de: "Vitamin C", nl: "Vitamine C" },
          { en: "Vitamin A", es: "Vitamina A", de: "Vitamin A", nl: "Vitamine A" },
          { en: "Vitamin B", es: "Vitamina B", de: "Vitamin B", nl: "Vitamine B" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the most abundant gas in Earth's atmosphere?",
          es: "¿Cuál es el gas más abundante en la atmósfera terrestre?",
          de: "Was ist das häufigste Gas in der Erdatmosphäre?",
          nl: "Wat is het meest voorkomende gas in de atmosfeer van de aarde?"
        },
        options: [
          { en: "Nitrogen", es: "Nitrógeno", de: "Stickstoff", nl: "Stikstof" },
          { en: "Oxygen", es: "Oxígeno", de: "Sauerstoff", nl: "Zuurstof" },
          { en: "Carbon Dioxide", es: "Dióxido de Carbono", de: "Kohlendioxid", nl: "Koolstofdioxide" },
          { en: "Argon", es: "Argón", de: "Argon", nl: "Argon" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which ancient wonder of the world was located in Alexandria?",
          es: "¿Cuál maravilla antigua del mundo se encontraba en Alejandría?",
          de: "Welches antike Weltwunder befand sich in Alexandria?",
          nl: "Welk oud wereldwonder bevond zich in Alexandrië?"
        },
        options: [
          { en: "Lighthouse of Alexandria", es: "Faro de Alejandría", de: "Leuchtturm von Alexandria", nl: "Vuurtoren van Alexandrië" },
          { en: "Pyramids of Giza", es: "Pirámides de Giza", de: "Pyramiden von Gizeh", nl: "Piramides van Gizeh" },
          { en: "Colossus of Rhodes", es: "Coloso de Rodas", de: "Koloss von Rhodos", nl: "Kolossus van Rhodos" },
          { en: "Statue of Zeus", es: "Estatua de Zeus", de: "Zeusstatue", nl: "Standbeeld van Zeus" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the largest mammal on Earth?",
          es: "¿Cuál es el mamífero más grande de la Tierra?",
          de: "Was ist das größte Säugetier der Erde?",
          nl: "Wat is het grootste zoogdier op aarde?"
        },
        options: [
          { en: "Blue Whale", es: "Ballena Azul", de: "Blauwal", nl: "Blauwe Vinvis" },
          { en: "African Elephant", es: "Elefante Africano", de: "Afrikanischer Elefant", nl: "Afrikaanse Olifant" },
          { en: "Sperm Whale", es: "Cachalote", de: "Pottwal", nl: "Potvis" },
          { en: "Giraffe", es: "Jirafa", de: "Giraffe", nl: "Giraf" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "In which year did the Berlin Wall fall?",
          es: "¿En qué año cayó el Muro de Berlín?",
          de: "In welchem Jahr fiel die Berliner Mauer?",
          nl: "In welk jaar viel de Berlijnse Muur?"
        },
        options: [
          { en: "1989", es: "1989", de: "1989", nl: "1989" },
          { en: "1990", es: "1990", de: "1990", nl: "1990" },
          { en: "1988", es: "1988", de: "1988", nl: "1988" },
          { en: "1991", es: "1991", de: "1991", nl: "1991" }
        ],
        correctIndex: 0
      }
    ],

    // Day 12 - January 12th
    day12: [
      {
        question: {
          en: "What is the hardest rock?",
          es: "¿Cuál es la roca más dura?",
          de: "Was ist das härteste Gestein?",
          nl: "Wat is de hardste steen?"
        },
        options: [
          { en: "Diamond", es: "Diamante", de: "Diamant", nl: "Diamant" },
          { en: "Granite", es: "Granito", de: "Granit", nl: "Graniet" },
          { en: "Quartz", es: "Cuarzo", de: "Quarz", nl: "Kwarts" },
          { en: "Marble", es: "Mármol", de: "Marmor", nl: "Marmer" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which country is known as the Land of the Rising Sun?",
          es: "¿Qué país es conocido como la Tierra del Sol Naciente?",
          de: "Welches Land ist als Land der aufgehenden Sonne bekannt?",
          nl: "Welk land staat bekend als het Land van de Rijzende Zon?"
        },
        options: [
          { en: "Japan", es: "Japón", de: "Japan", nl: "Japan" },
          { en: "China", es: "China", de: "China", nl: "China" },
          { en: "South Korea", es: "Corea del Sur", de: "Südkorea", nl: "Zuid-Korea" },
          { en: "Thailand", es: "Tailandia", de: "Thailand", nl: "Thailand" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many chambers does a human heart have?",
          es: "¿Cuántas cámaras tiene un corazón humano?",
          de: "Wie viele Kammern hat ein menschliches Herz?",
          nl: "Hoeveel kamers heeft een menselijk hart?"
        },
        options: [
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "5", es: "5", de: "5", nl: "5" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the study of earthquakes called?",
          es: "¿Cómo se llama el estudio de los terremotos?",
          de: "Wie nennt man die Wissenschaft der Erdbeben?",
          nl: "Hoe heet de studie van aardbevingen?"
        },
        options: [
          { en: "Seismology", es: "Sismología", de: "Seismologie", nl: "Seismologie" },
          { en: "Geology", es: "Geología", de: "Geologie", nl: "Geologie" },
          { en: "Meteorology", es: "Meteorología", de: "Meteorologie", nl: "Meteorologie" },
          { en: "Volcanology", es: "Vulcanología", de: "Vulkanologie", nl: "Vulkanologie" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which element has the chemical symbol 'Fe'?",
          es: "¿Qué elemento tiene el símbolo químico 'Fe'?",
          de: "Welches Element hat das chemische Symbol 'Fe'?",
          nl: "Welk element heeft het chemische symbool 'Fe'?"
        },
        options: [
          { en: "Iron", es: "Hierro", de: "Eisen", nl: "IJzer" },
          { en: "Fluorine", es: "Flúor", de: "Fluor", nl: "Fluor" },
          { en: "Francium", es: "Francio", de: "Francium", nl: "Francium" },
          { en: "Fermium", es: "Fermio", de: "Fermium", nl: "Fermium" }
        ],
        correctIndex: 0
      }
    ],

    // Day 13 - January 13th
    day13: [
      {
        question: {
          en: "What is the largest country by land area?",
          es: "¿Cuál es el país más grande por área terrestre?",
          de: "Was ist das größte Land nach Landfläche?",
          nl: "Wat is het grootste land qua landoppervlakte?"
        },
        options: [
          { en: "Russia", es: "Rusia", de: "Russland", nl: "Rusland" },
          { en: "Canada", es: "Canadá", de: "Kanada", nl: "Canada" },
          { en: "China", es: "China", de: "China", nl: "China" },
          { en: "United States", es: "Estados Unidos", de: "Vereinigte Staaten", nl: "Verenigde Staten" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which blood type is known as the universal donor?",
          es: "¿Qué tipo de sangre es conocido como donante universal?",
          de: "Welche Blutgruppe ist als Universalspender bekannt?",
          nl: "Welke bloedgroep staat bekend als universele donor?"
        },
        options: [
          { en: "O negative", es: "O negativo", de: "O negativ", nl: "O negatief" },
          { en: "AB positive", es: "AB positivo", de: "AB positiv", nl: "AB positief" },
          { en: "A positive", es: "A positivo", de: "A positiv", nl: "A positief" },
          { en: "B negative", es: "B negativo", de: "B negativ", nl: "B negatief" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the currency of the United Kingdom?",
          es: "¿Cuál es la moneda del Reino Unido?",
          de: "Was ist die Währung des Vereinigten Königreichs?",
          nl: "Wat is de munteenheid van het Verenigd Koninkrijk?"
        },
        options: [
          { en: "Pound Sterling", es: "Libra Esterlina", de: "Pfund Sterling", nl: "Pond Sterling" },
          { en: "Euro", es: "Euro", de: "Euro", nl: "Euro" },
          { en: "Dollar", es: "Dólar", de: "Dollar", nl: "Dollar" },
          { en: "Franc", es: "Franco", de: "Franken", nl: "Frank" }
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
          { en: "2", es: "2", de: "2", nl: "2" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which planet is known as the Red Planet?",
          es: "¿Qué planeta es conocido como el Planeta Rojo?",
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
      }
    ],

    // Day 14 - January 14th
    day14: [
      {
        question: {
          en: "What is the smallest bone in the human body?",
          es: "¿Cuál es el hueso más pequeño del cuerpo humano?",
          de: "Was ist der kleinste Knochen im menschlichen Körper?",
          nl: "Wat is het kleinste bot in het menselijk lichaam?"
        },
        options: [
          { en: "Stapes", es: "Estribo", de: "Steigbügel", nl: "Stijgbeugel" },
          { en: "Incus", es: "Yunque", de: "Amboss", nl: "Aambeeld" },
          { en: "Malleus", es: "Martillo", de: "Hammer", nl: "Hamer" },
          { en: "Patella", es: "Rótula", de: "Kniescheibe", nl: "Knieschijf" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which ocean is the Bermuda Triangle located in?",
          es: "¿En qué océano se encuentra el Triángulo de las Bermudas?",
          de: "In welchem Ozean liegt das Bermuda-Dreieck?",
          nl: "In welke oceaan ligt de Bermuda Driehoek?"
        },
        options: [
          { en: "Atlantic Ocean", es: "Océano Atlántico", de: "Atlantischer Ozean", nl: "Atlantische Oceaan" },
          { en: "Pacific Ocean", es: "Océano Pacífico", de: "Pazifischer Ozean", nl: "Stille Oceaan" },
          { en: "Indian Ocean", es: "Océano Índico", de: "Indischer Ozean", nl: "Indische Oceaan" },
          { en: "Arctic Ocean", es: "Océano Ártico", de: "Arktischer Ozean", nl: "Noordelijke IJszee" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the main component of natural gas?",
          es: "¿Cuál es el componente principal del gas natural?",
          de: "Was ist der Hauptbestandteil von Erdgas?",
          nl: "Wat is de hoofdcomponent van aardgas?"
        },
        options: [
          { en: "Methane", es: "Metano", de: "Methan", nl: "Methaan" },
          { en: "Propane", es: "Propano", de: "Propan", nl: "Propaan" },
          { en: "Butane", es: "Butano", de: "Butan", nl: "Butaan" },
          { en: "Ethane", es: "Etano", de: "Ethan", nl: "Ethaan" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Who painted 'The Starry Night'?",
          es: "¿Quién pintó 'La Noche Estrellada'?",
          de: "Wer malte 'Die Sternennacht'?",
          nl: "Wie schilderde 'De Sterrennacht'?"
        },
        options: [
          { en: "Vincent van Gogh", es: "Vincent van Gogh", de: "Vincent van Gogh", nl: "Vincent van Gogh" },
          { en: "Pablo Picasso", es: "Pablo Picasso", de: "Pablo Picasso", nl: "Pablo Picasso" },
          { en: "Claude Monet", es: "Claude Monet", de: "Claude Monet", nl: "Claude Monet" },
          { en: "Salvador Dalí", es: "Salvador Dalí", de: "Salvador Dalí", nl: "Salvador Dalí" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many legs does an insect have?",
          es: "¿Cuántas patas tiene un insecto?",
          de: "Wie viele Beine hat ein Insekt?",
          nl: "Hoeveel poten heeft een insect?"
        },
        options: [
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "10", es: "10", de: "10", nl: "10" }
        ],
        correctIndex: 0
      }
    ],

    // Day 15 - January 15th (Martin Luther King Jr. Day)
    day15: [
      {
        question: {
          en: "What is the capital of Egypt?",
          es: "¿Cuál es la capital de Egipto?",
          de: "Was ist die Hauptstadt von Ägypten?",
          nl: "Wat is de hoofdstad van Egypte?"
        },
        options: [
          { en: "Cairo", es: "El Cairo", de: "Kairo", nl: "Caïro" },
          { en: "Alexandria", es: "Alejandría", de: "Alexandria", nl: "Alexandrië" },
          { en: "Giza", es: "Giza", de: "Gizeh", nl: "Gizeh" },
          { en: "Luxor", es: "Lúxor", de: "Luxor", nl: "Luxor" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which gas makes up about 21% of the atmosphere?",
          es: "¿Qué gas compone aproximadamente el 21% de la atmósfera?",
          de: "Welches Gas macht etwa 21% der Atmosphäre aus?",
          nl: "Welk gas vormt ongeveer 21% van de atmosfeer?"
        },
        options: [
          { en: "Oxygen", es: "Oxígeno", de: "Sauerstoff", nl: "Zuurstof" },
          { en: "Nitrogen", es: "Nitrógeno", de: "Stickstoff", nl: "Stikstof" },
          { en: "Carbon Dioxide", es: "Dióxido de Carbono", de: "Kohlendioxid", nl: "Koolstofdioxide" },
          { en: "Argon", es: "Argón", de: "Argon", nl: "Argon" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the fastest bird in the world?",
          es: "¿Cuál es el ave más rápida del mundo?",
          de: "Was ist der schnellste Vogel der Welt?",
          nl: "Wat is de snelste vogel ter wereld?"
        },
        options: [
          { en: "Peregrine Falcon", es: "Halcón Peregrino", de: "Wanderfalke", nl: "Slechtvalk" },
          { en: "Golden Eagle", es: "Águila Real", de: "Steinadler", nl: "Steenarend" },
          { en: "Sparrowhawk", es: "Gavilán", de: "Sperber", nl: "Sperwer" },
          { en: "Gyrfalcon", es: "Halcón Gerifalte", de: "Gerfalke", nl: "Giervalk" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "In which continent is the Sahara Desert?",
          es: "¿En qué continente está el Desierto del Sahara?",
          de: "Auf welchem Kontinent liegt die Sahara-Wüste?",
          nl: "Op welk continent ligt de Sahara woestijn?"
        },
        options: [
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" },
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" },
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" },
          { en: "South America", es: "América del Sur", de: "Südamerika", nl: "Zuid-Amerika" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many players are on a basketball team on the court?",
          es: "¿Cuántos jugadores hay en un equipo de baloncesto en la cancha?",
          de: "Wie viele Spieler sind in einem Basketballteam auf dem Feld?",
          nl: "Hoeveel spelers staan er van een basketbalteam op het veld?"
        },
        options: [
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "11", es: "11", de: "11", nl: "11" }
        ],
        correctIndex: 0
      }
    ],

    // Day 16 - January 16th
    day16: [
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
          { en: "Kangchenjunga", es: "Kangchenjunga", de: "Kangchenjunga", nl: "Kangchenjunga" },
          { en: "Lhotse", es: "Lhotse", de: "Lhotse", nl: "Lhotse" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which instrument is used to measure blood pressure?",
          es: "¿Qué instrumento se usa para medir la presión arterial?",
          de: "Welches Instrument wird zur Messung des Blutdrucks verwendet?",
          nl: "Welk instrument wordt gebruikt om bloeddruk te meten?"
        },
        options: [
          { en: "Sphygmomanometer", es: "Esfigmomanómetro", de: "Blutdruckmessgerät", nl: "Bloeddrukmeter" },
          { en: "Stethoscope", es: "Estetoscopio", de: "Stethoskop", nl: "Stethoscoop" },
          { en: "Thermometer", es: "Termómetro", de: "Thermometer", nl: "Thermometer" },
          { en: "Otoscope", es: "Otoscopio", de: "Otoskop", nl: "Otoscoop" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the chemical symbol for silver?",
          es: "¿Cuál es el símbolo químico de la plata?",
          de: "Was ist das chemische Symbol für Silber?",
          nl: "Wat is het chemische symbool voor zilver?"
        },
        options: [
          { en: "Ag", es: "Ag", de: "Ag", nl: "Ag" },
          { en: "Si", es: "Si", de: "Si", nl: "Si" },
          { en: "Sr", es: "Sr", de: "Sr", nl: "Sr" },
          { en: "Sv", es: "Sv", de: "Sv", nl: "Sv" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which country is home to Machu Picchu?",
          es: "¿Qué país alberga Machu Picchu?",
          de: "Welches Land ist die Heimat von Machu Picchu?",
          nl: "Welk land herbergt Machu Picchu?"
        },
        options: [
          { en: "Peru", es: "Perú", de: "Peru", nl: "Peru" },
          { en: "Bolivia", es: "Bolivia", de: "Bolivien", nl: "Bolivia" },
          { en: "Ecuador", es: "Ecuador", de: "Ecuador", nl: "Ecuador" },
          { en: "Chile", es: "Chile", de: "Chile", nl: "Chili" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many days are in a leap year?",
          es: "¿Cuántos días tiene un año bisiesto?",
          de: "Wie viele Tage hat ein Schaltjahr?",
          nl: "Hoeveel dagen heeft een schrikkeljaar?"
        },
        options: [
          { en: "366", es: "366", de: "366", nl: "366" },
          { en: "365", es: "365", de: "365", nl: "365" },
          { en: "364", es: "364", de: "364", nl: "364" },
          { en: "367", es: "367", de: "367", nl: "367" }
        ],
        correctIndex: 0
      }
    ],

    // Day 17 - January 17th
    day17: [
      {
        question: {
          en: "What is the longest bone in the human body?",
          es: "¿Cuál es el hueso más largo del cuerpo humano?",
          de: "Was ist der längste Knochen im menschlichen Körper?",
          nl: "Wat is het langste bot in het menselijk lichaam?"
        },
        options: [
          { en: "Femur", es: "Fémur", de: "Oberschenkelknochen", nl: "Dijbeen" },
          { en: "Tibia", es: "Tibia", de: "Schienbein", nl: "Scheenbeen" },
          { en: "Humerus", es: "Húmero", de: "Oberarmknochen", nl: "Opperarmbot" },
          { en: "Radius", es: "Radio", de: "Speiche", nl: "Spaakbeen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which river flows through Paris?",
          es: "¿Qué río fluye por París?",
          de: "Welcher Fluss fließt durch Paris?",
          nl: "Welke rivier stroomt door Parijs?"
        },
        options: [
          { en: "Seine", es: "Sena", de: "Seine", nl: "Seine" },
          { en: "Thames", es: "Támesis", de: "Themse", nl: "Theems" },
          { en: "Rhine", es: "Rin", de: "Rhein", nl: "Rijn" },
          { en: "Loire", es: "Loira", de: "Loire", nl: "Loire" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the study of stars called?",
          es: "¿Cómo se llama el estudio de las estrellas?",
          de: "Wie nennt man die Wissenschaft der Sterne?",
          nl: "Hoe heet de studie van sterren?"
        },
        options: [
          { en: "Astronomy", es: "Astronomía", de: "Astronomie", nl: "Astronomie" },
          { en: "Astrology", es: "Astrología", de: "Astrologie", nl: "Astrologie" },
          { en: "Astrophysics", es: "Astrofísica", de: "Astrophysik", nl: "Astrofysica" },
          { en: "Cosmology", es: "Cosmología", de: "Kosmologie", nl: "Kosmologie" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which mammal is known to have the most powerful bite?",
          es: "¿Qué mamífero es conocido por tener la mordida más poderosa?",
          de: "Welches Säugetier hat den kräftigsten Biss?",
          nl: "Welk zoogdier staat bekend om de krachtigste beet?"
        },
        options: [
          { en: "Hippopotamus", es: "Hipopótamo", de: "Nilpferd", nl: "Nijlpaard" },
          { en: "Lion", es: "León", de: "Löwe", nl: "Leeuw" },
          { en: "Tiger", es: "Tigre", de: "Tiger", nl: "Tijger" },
          { en: "Bear", es: "Oso", de: "Bär", nl: "Beer" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the smallest planet in our solar system?",
          es: "¿Cuál es el planeta más pequeño de nuestro sistema solar?",
          de: "Was ist der kleinste Planet unseres Sonnensystems?",
          nl: "Wat is de kleinste planeet in ons zonnestelsel?"
        },
        options: [
          { en: "Mercury", es: "Mercurio", de: "Merkur", nl: "Mercurius" },
          { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" },
          { en: "Venus", es: "Venus", de: "Venus", nl: "Venus" },
          { en: "Pluto", es: "Plutón", de: "Pluto", nl: "Pluto" }
        ],
        correctIndex: 0
      }
    ],

    // Day 18 - January 18th
    day18: [
      {
        question: {
          en: "Which metal is liquid at room temperature?",
          es: "¿Qué metal es líquido a temperatura ambiente?",
          de: "Welches Metall ist bei Raumtemperatur flüssig?",
          nl: "Welk metaal is vloeibaar bij kamertemperatuur?"
        },
        options: [
          { en: "Mercury", es: "Mercurio", de: "Quecksilber", nl: "Kwik" },
          { en: "Lead", es: "Plomo", de: "Blei", nl: "Lood" },
          { en: "Tin", es: "Estaño", de: "Zinn", nl: "Tin" },
          { en: "Aluminum", es: "Aluminio", de: "Aluminium", nl: "Aluminium" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the capital of Canada?",
          es: "¿Cuál es la capital de Canadá?",
          de: "Was ist die Hauptstadt von Kanada?",
          nl: "Wat is de hoofdstad van Canada?"
        },
        options: [
          { en: "Ottawa", es: "Ottawa", de: "Ottawa", nl: "Ottawa" },
          { en: "Toronto", es: "Toronto", de: "Toronto", nl: "Toronto" },
          { en: "Montreal", es: "Montreal", de: "Montreal", nl: "Montreal" },
          { en: "Vancouver", es: "Vancouver", de: "Vancouver", nl: "Vancouver" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which organ is responsible for producing insulin?",
          es: "¿Qué órgano es responsable de producir insulina?",
          de: "Welches Organ ist für die Insulinproduktion verantwortlich?",
          nl: "Welk orgaan is verantwoordelijk voor het produceren van insuline?"
        },
        options: [
          { en: "Pancreas", es: "Páncreas", de: "Bauchspeicheldrüse", nl: "Alvleesklier" },
          { en: "Liver", es: "Hígado", de: "Leber", nl: "Lever" },
          { en: "Kidney", es: "Riñón", de: "Niere", nl: "Nier" },
          { en: "Spleen", es: "Bazo", de: "Milz", nl: "Milt" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many strings does a violin have?",
          es: "¿Cuántas cuerdas tiene un violín?",
          de: "Wie viele Saiten hat eine Geige?",
          nl: "Hoeveel snaren heeft een viool?"
        },
        options: [
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "3", es: "3", de: "3", nl: "3" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which country gifted the Statue of Liberty to the United States?",
          es: "¿Qué país regaló la Estatua de la Libertad a Estados Unidos?",
          de: "Welches Land schenkte den USA die Freiheitsstatue?",
          nl: "Welk land schonk het Vrijheidsbeeld aan de Verenigde Staten?"
        },
        options: [
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "England", es: "Inglaterra", de: "England", nl: "Engeland" },
          { en: "Spain", es: "España", de: "Spanien", nl: "Spanje" },
          { en: "Italy", es: "Italia", de: "Italien", nl: "Italië" }
        ],
        correctIndex: 0
      }
    ],

    // Day 19 - January 19th
    day19: [
      {
        question: {
          en: "What is the deepest part of the ocean?",
          es: "¿Cuál es la parte más profunda del océano?",
          de: "Was ist der tiefste Teil des Ozeans?",
          nl: "Wat is het diepste deel van de oceaan?"
        },
        options: [
          { en: "Mariana Trench", es: "Fosa de las Marianas", de: "Marianengraben", nl: "Marianagraben" },
          { en: "Puerto Rico Trench", es: "Fosa de Puerto Rico", de: "Puerto-Rico-Graben", nl: "Puerto Rico Trog" },
          { en: "Java Trench", es: "Fosa de Java", de: "Sundagraben", nl: "Java Trog" },
          { en: "Peru-Chile Trench", es: "Fosa Perú-Chile", de: "Peru-Chile-Graben", nl: "Peru-Chili Trog" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which vitamin is essential for blood clotting?",
          es: "¿Qué vitamina es esencial para la coagulación de la sangre?",
          de: "Welches Vitamin ist für die Blutgerinnung wichtig?",
          nl: "Welke vitamine is essentieel voor bloedstolling?"
        },
        options: [
          { en: "Vitamin K", es: "Vitamina K", de: "Vitamin K", nl: "Vitamine K" },
          { en: "Vitamin C", es: "Vitamina C", de: "Vitamin C", nl: "Vitamine C" },
          { en: "Vitamin D", es: "Vitamina D", de: "Vitamin D", nl: "Vitamine D" },
          { en: "Vitamin A", es: "Vitamina A", de: "Vitamin A", nl: "Vitamine A" }
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
          { en: "Angel Falls", es: "Salto Ángel", de: "Engelsfälle", nl: "Angel Falls" },
          { en: "Niagara Falls", es: "Cataratas del Niágara", de: "Niagarafälle", nl: "Niagarawatervallen" },
          { en: "Victoria Falls", es: "Cataratas Victoria", de: "Victoriafälle", nl: "Victoriawatervallen" },
          { en: "Iguazu Falls", es: "Cataratas del Iguazú", de: "Iguazú-Wasserfälle", nl: "Iguazu watervallen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many chambers does a bird's heart have?",
          es: "¿Cuántas cámaras tiene el corazón de un ave?",
          de: "Wie viele Kammern hat das Herz eines Vogels?",
          nl: "Hoeveel kamers heeft het hart van een vogel?"
        },
        options: [
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "5", es: "5", de: "5", nl: "5" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which country is known for the ancient city of Petra?",
          es: "¿Qué país es conocido por la antigua ciudad de Petra?",
          de: "Welches Land ist für die antike Stadt Petra bekannt?",
          nl: "Welk land staat bekend om de oude stad Petra?"
        },
        options: [
          { en: "Jordan", es: "Jordania", de: "Jordanien", nl: "Jordanië" },
          { en: "Egypt", es: "Egipto", de: "Ägypten", nl: "Egypte" },
          { en: "Lebanon", es: "Líbano", de: "Libanon", nl: "Libanon" },
          { en: "Syria", es: "Siria", de: "Syrien", nl: "Syrië" }
        ],
        correctIndex: 0
      }
    ],

    // Day 20 - January 20th (Inauguration Day in US)
    day20: [
      {
        question: {
          en: "What is the chemical formula for table salt?",
          es: "¿Cuál es la fórmula química de la sal de mesa?",
          de: "Was ist die chemische Formel für Kochsalz?",
          nl: "Wat is de chemische formule voor keukenzout?"
        },
        options: [
          { en: "NaCl", es: "NaCl", de: "NaCl", nl: "NaCl" },
          { en: "KCl", es: "KCl", de: "KCl", nl: "KCl" },
          { en: "CaCl2", es: "CaCl2", de: "CaCl2", nl: "CaCl2" },
          { en: "MgCl2", es: "MgCl2", de: "MgCl2", nl: "MgCl2" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which continent has the most countries?",
          es: "¿Qué continente tiene más países?",
          de: "Welcher Kontinent hat die meisten Länder?",
          nl: "Welk continent heeft de meeste landen?"
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
          en: "What is the largest mammal that ever lived?",
          es: "¿Cuál es el mamífero más grande que jamás haya vivido?",
          de: "Was ist das größte Säugetier, das je gelebt hat?",
          nl: "Wat is het grootste zoogdier dat ooit geleefd heeft?"
        },
        options: [
          { en: "Blue Whale", es: "Ballena Azul", de: "Blauwal", nl: "Blauwe Vinvis" },
          { en: "Woolly Mammoth", es: "Mamut Lanudo", de: "Wollmammut", nl: "Wolharige Mammoet" },
          { en: "African Elephant", es: "Elefante Africano", de: "Afrikanischer Elefant", nl: "Afrikaanse Olifant" },
          { en: "Megalodon", es: "Megalodón", de: "Megalodon", nl: "Megalodon" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which planet has the most moons?",
          es: "¿Qué planeta tiene más lunas?",
          de: "Welcher Planet hat die meisten Monde?",
          nl: "Welke planeet heeft de meeste manen?"
        },
        options: [
          { en: "Saturn", es: "Saturno", de: "Saturn", nl: "Saturnus" },
          { en: "Jupiter", es: "Júpiter", de: "Jupiter", nl: "Jupiter" },
          { en: "Uranus", es: "Urano", de: "Uranus", nl: "Uranus" },
          { en: "Neptune", es: "Neptuno", de: "Neptun", nl: "Neptunus" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the most common blood type?",
          es: "¿Cuál es el tipo de sangre más común?",
          de: "Was ist die häufigste Blutgruppe?",
          nl: "Wat is de meest voorkomende bloedgroep?"
        },
        options: [
          { en: "O positive", es: "O positivo", de: "O positiv", nl: "O positief" },
          { en: "A positive", es: "A positivo", de: "A positiv", nl: "A positief" },
          { en: "B positive", es: "B positivo", de: "B positiv", nl: "B positief" },
          { en: "AB positive", es: "AB positivo", de: "AB positiv", nl: "AB positief" }
        ],
        correctIndex: 0
      }
    ],

    // Day 21 - January 21st
    day21: [
      {
        question: {
          en: "What is the hardest natural substance on Earth?",
          es: "¿Cuál es la sustancia natural más dura de la Tierra?",
          de: "Was ist die härteste natürliche Substanz der Erde?",
          nl: "Wat is de hardste natuurlijke stof op aarde?"
        },
        options: [
          { en: "Diamond", es: "Diamante", de: "Diamant", nl: "Diamant" },
          { en: "Quartz", es: "Cuarzo", de: "Quarz", nl: "Kwarts" },
          { en: "Topaz", es: "Topacio", de: "Topas", nl: "Topaas" },
          { en: "Sapphire", es: "Zafiro", de: "Saphir", nl: "Saffier" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which sea is the saltiest natural water body?",
          es: "¿Cuál es el cuerpo de agua natural más salado?",
          de: "Welches Meer ist das salzigste natürliche Gewässer?",
          nl: "Welke zee is het zoutste natuurlijke water?"
        },
        options: [
          { en: "Dead Sea", es: "Mar Muerto", de: "Totes Meer", nl: "Dode Zee" },
          { en: "Red Sea", es: "Mar Rojo", de: "Rotes Meer", nl: "Rode Zee" },
          { en: "Mediterranean Sea", es: "Mar Mediterráneo", de: "Mittelmeer", nl: "Middellandse Zee" },
          { en: "Black Sea", es: "Mar Negro", de: "Schwarzes Meer", nl: "Zwarte Zee" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many teeth does an adult human normally have?",
          es: "¿Cuántos dientes tiene normalmente un adulto humano?",
          de: "Wie viele Zähne hat ein erwachsener Mensch normalerweise?",
          nl: "Hoeveel tanden heeft een volwassen mens normaal gesproken?"
        },
        options: [
          { en: "32", es: "32", de: "32", nl: "32" },
          { en: "28", es: "28", de: "28", nl: "28" },
          { en: "30", es: "30", de: "30", nl: "30" },
          { en: "36", es: "36", de: "36", nl: "36" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which element is the most abundant in the universe?",
          es: "¿Qué elemento es el más abundante en el universo?",
          de: "Welches Element ist das häufigste im Universum?",
          nl: "Welk element komt het meest voor in het universum?"
        },
        options: [
          { en: "Hydrogen", es: "Hidrógeno", de: "Wasserstoff", nl: "Waterstof" },
          { en: "Helium", es: "Helio", de: "Helium", nl: "Helium" },
          { en: "Oxygen", es: "Oxígeno", de: "Sauerstoff", nl: "Zuurstof" },
          { en: "Carbon", es: "Carbono", de: "Kohlenstoff", nl: "Koolstof" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the currency of India?",
          es: "¿Cuál es la moneda de India?",
          de: "Was ist die Währung von Indien?",
          nl: "Wat is de munteenheid van India?"
        },
        options: [
          { en: "Rupee", es: "Rupia", de: "Rupie", nl: "Roepie" },
          { en: "Dollar", es: "Dólar", de: "Dollar", nl: "Dollar" },
          { en: "Yuan", es: "Yuan", de: "Yuan", nl: "Yuan" },
          { en: "Yen", es: "Yen", de: "Yen", nl: "Yen" }
        ],
        correctIndex: 0
      }
    ],

    // Day 22 - January 22nd
    day22: [
      {
        question: {
          en: "What is the largest internal organ in the human body?",
          es: "¿Cuál es el órgano interno más grande del cuerpo humano?",
          de: "Was ist das größte innere Organ im menschlichen Körper?",
          nl: "Wat is het grootste inwendige orgaan in het menselijk lichaam?"
        },
        options: [
          { en: "Liver", es: "Hígado", de: "Leber", nl: "Lever" },
          { en: "Brain", es: "Cerebro", de: "Gehirn", nl: "Hersenen" },
          { en: "Lungs", es: "Pulmones", de: "Lungen", nl: "Longen" },
          { en: "Heart", es: "Corazón", de: "Herz", nl: "Hart" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which country is shaped like a boot?",
          es: "¿Qué país tiene forma de bota?",
          de: "Welches Land ist wie ein Stiefel geformt?",
          nl: "Welk land heeft de vorm van een laars?"
        },
        options: [
          { en: "Italy", es: "Italia", de: "Italien", nl: "Italië" },
          { en: "Spain", es: "España", de: "Spanien", nl: "Spanje" },
          { en: "Greece", es: "Grecia", de: "Griechenland", nl: "Griekenland" },
          { en: "Portugal", es: "Portugal", de: "Portugal", nl: "Portugal" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the process of water turning into vapor called?",
          es: "¿Cómo se llama el proceso de conversión del agua en vapor?",
          de: "Wie nennt man den Prozess, bei dem Wasser zu Dampf wird?",
          nl: "Hoe heet het proces waarbij water in damp verandert?"
        },
        options: [
          { en: "Evaporation", es: "Evaporación", de: "Verdunstung", nl: "Verdamping" },
          { en: "Condensation", es: "Condensación", de: "Kondensation", nl: "Condensatie" },
          { en: "Precipitation", es: "Precipitación", de: "Niederschlag", nl: "Neerslag" },
          { en: "Sublimation", es: "Sublimación", de: "Sublimation", nl: "Sublimatie" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which planet is known for having prominent rings?",
          es: "¿Qué planeta es conocido por tener anillos prominentes?",
          de: "Welcher Planet ist für seine ausgeprägten Ringe bekannt?",
          nl: "Welke planeet staat bekend om zijn prominente ringen?"
        },
        options: [
          { en: "Saturn", es: "Saturno", de: "Saturn", nl: "Saturnus" },
          { en: "Jupiter", es: "Júpiter", de: "Jupiter", nl: "Jupiter" },
          { en: "Uranus", es: "Urano", de: "Uranus", nl: "Uranus" },
          { en: "Neptune", es: "Neptuno", de: "Neptun", nl: "Neptunus" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the most spoken native language in the world?",
          es: "¿Cuál es el idioma nativo más hablado del mundo?",
          de: "Was ist die meist gesprochene Muttersprache der Welt?",
          nl: "Wat is de meest gesproken moedertaal ter wereld?"
        },
        options: [
          { en: "Mandarin Chinese", es: "Chino Mandarín", de: "Mandarin-Chinesisch", nl: "Mandarijn Chinees" },
          { en: "Spanish", es: "Español", de: "Spanisch", nl: "Spaans" },
          { en: "English", es: "Inglés", de: "Englisch", nl: "Engels" },
          { en: "Hindi", es: "Hindi", de: "Hindi", nl: "Hindi" }
        ],
        correctIndex: 0
      }
    ],

    // Day 23 - January 23rd
    day23: [
      {
        question: {
          en: "Which bone protects the brain?",
          es: "¿Qué hueso protege el cerebro?",
          de: "Welcher Knochen schützt das Gehirn?",
          nl: "Welk bot beschermt de hersenen?"
        },
        options: [
          { en: "Skull", es: "Cráneo", de: "Schädel", nl: "Schedel" },
          { en: "Spine", es: "Columna", de: "Wirbelsäule", nl: "Wervelkolom" },
          { en: "Ribs", es: "Costillas", de: "Rippen", nl: "Ribben" },
          { en: "Sternum", es: "Esternón", de: "Brustbein", nl: "Borstbeen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the largest fish in the world?",
          es: "¿Cuál es el pez más grande del mundo?",
          de: "Was ist der größte Fisch der Welt?",
          nl: "Wat is de grootste vis ter wereld?"
        },
        options: [
          { en: "Whale Shark", es: "Tiburón Ballena", de: "Walhai", nl: "Walvishaai" },
          { en: "Great White Shark", es: "Gran Tiburón Blanco", de: "Weißer Hai", nl: "Witte Haai" },
          { en: "Bluefin Tuna", es: "Atún Rojo", de: "Blauflossenthunfisch", nl: "Blauwvintonijn" },
          { en: "Manta Ray", es: "Mantarraya", de: "Mantarochen", nl: "Reuzenmanta" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which gas is most abundant in Earth's atmosphere?",
          es: "¿Qué gas es más abundante en la atmósfera terrestre?",
          de: "Welches Gas ist am häufigsten in der Erdatmosphäre?",
          nl: "Welk gas komt het meest voor in de atmosfeer van de aarde?"
        },
        options: [
          { en: "Nitrogen", es: "Nitrógeno", de: "Stickstoff", nl: "Stikstof" },
          { en: "Oxygen", es: "Oxígeno", de: "Sauerstoff", nl: "Zuurstof" },
          { en: "Carbon Dioxide", es: "Dióxido de Carbono", de: "Kohlendioxid", nl: "Koolstofdioxide" },
          { en: "Argon", es: "Argón", de: "Argon", nl: "Argon" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the capital of Russia?",
          es: "¿Cuál es la capital de Rusia?",
          de: "Was ist die Hauptstadt von Russland?",
          nl: "Wat is de hoofdstad van Rusland?"
        },
        options: [
          { en: "Moscow", es: "Moscú", de: "Moskau", nl: "Moskou" },
          { en: "St. Petersburg", es: "San Petersburgo", de: "Sankt Petersburg", nl: "Sint-Petersburg" },
          { en: "Kiev", es: "Kiev", de: "Kiew", nl: "Kiev" },
          { en: "Volgograd", es: "Volgogrado", de: "Wolgograd", nl: "Wolgograd" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many sides does an octagon have?",
          es: "¿Cuántos lados tiene un octágono?",
          de: "Wie viele Seiten hat ein Achteck?",
          nl: "Hoeveel zijden heeft een achthoek?"
        },
        options: [
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "7", es: "7", de: "7", nl: "7" }
        ],
        correctIndex: 0
      }
    ],

    // Day 24 - January 24th
    day24: [
      {
        question: {
          en: "Which vitamin is known as the 'sunshine vitamin'?",
          es: "¿Qué vitamina es conocida como la 'vitamina del sol'?",
          de: "Welches Vitamin ist als 'Sonnenvitamin' bekannt?",
          nl: "Welke vitamine staat bekend als de 'zonneschijnvitamine'?"
        },
        options: [
          { en: "Vitamin D", es: "Vitamina D", de: "Vitamin D", nl: "Vitamine D" },
          { en: "Vitamin C", es: "Vitamina C", de: "Vitamin C", nl: "Vitamine C" },
          { en: "Vitamin A", es: "Vitamina A", de: "Vitamin A", nl: "Vitamine A" },
          { en: "Vitamin E", es: "Vitamina E", de: "Vitamin E", nl: "Vitamine E" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the largest bone in the human body?",
          es: "¿Cuál es el hueso más grande del cuerpo humano?",
          de: "Was ist der größte Knochen im menschlichen Körper?",
          nl: "Wat is het grootste bot in het menselijk lichaam?"
        },
        options: [
          { en: "Femur", es: "Fémur", de: "Oberschenkelknochen", nl: "Dijbeen" },
          { en: "Tibia", es: "Tibia", de: "Schienbein", nl: "Scheenbeen" },
          { en: "Humerus", es: "Húmero", de: "Oberarmknochen", nl: "Opperarmbot" },
          { en: "Pelvis", es: "Pelvis", de: "Becken", nl: "Bekken" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which country is home to the ancient city of Troy?",
          es: "¿Qué país alberga la antigua ciudad de Troya?",
          de: "Welches Land beherbergt die antike Stadt Troja?",
          nl: "Welk land herbergt de oude stad Troje?"
        },
        options: [
          { en: "Turkey", es: "Turquía", de: "Türkei", nl: "Turkije" },
          { en: "Greece", es: "Grecia", de: "Griechenland", nl: "Griekenland" },
          { en: "Italy", es: "Italia", de: "Italien", nl: "Italië" },
          { en: "Bulgaria", es: "Bulgaria", de: "Bulgarien", nl: "Bulgarije" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the hardest part of the human body?",
          es: "¿Cuál es la parte más dura del cuerpo humano?",
          de: "Was ist der härteste Teil des menschlichen Körpers?",
          nl: "Wat is het hardste deel van het menselijk lichaam?"
        },
        options: [
          { en: "Tooth enamel", es: "Esmalte dental", de: "Zahnschmelz", nl: "Tandglazuur" },
          { en: "Bone", es: "Hueso", de: "Knochen", nl: "Bot" },
          { en: "Cartilage", es: "Cartílago", de: "Knorpel", nl: "Kraakbeen" },
          { en: "Nail", es: "Uña", de: "Nagel", nl: "Nagel" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which ocean is between Europe and America?",
          es: "¿Qué océano está entre Europa y América?",
          de: "Welcher Ozean liegt zwischen Europa und Amerika?",
          nl: "Welke oceaan ligt tussen Europa en Amerika?"
        },
        options: [
          { en: "Atlantic Ocean", es: "Océano Atlántico", de: "Atlantischer Ozean", nl: "Atlantische Oceaan" },
          { en: "Pacific Ocean", es: "Océano Pacífico", de: "Pazifischer Ozean", nl: "Stille Oceaan" },
          { en: "Indian Ocean", es: "Océano Índico", de: "Indischer Ozean", nl: "Indische Oceaan" },
          { en: "Arctic Ocean", es: "Océano Ártico", de: "Arktischer Ozean", nl: "Noordelijke IJszee" }
        ],
        correctIndex: 0
      }
    ],

    // Day 25 - January 25th
    day25: [
      {
        question: {
          en: "What is the study of weather called?",
          es: "¿Cómo se llama el estudio del clima?",
          de: "Wie nennt man die Wissenschaft des Wetters?",
          nl: "Hoe heet de studie van het weer?"
        },
        options: [
          { en: "Meteorology", es: "Meteorología", de: "Meteorologie", nl: "Meteorologie" },
          { en: "Geology", es: "Geología", de: "Geologie", nl: "Geologie" },
          { en: "Astronomy", es: "Astronomía", de: "Astronomie", nl: "Astronomie" },
          { en: "Climatology", es: "Climatología", de: "Klimatologie", nl: "Klimatologie" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which animal is known for changing its color?",
          es: "¿Qué animal es conocido por cambiar de color?",
          de: "Welches Tier ist dafür bekannt, seine Farbe zu ändern?",
          nl: "Welk dier staat bekend om het veranderen van kleur?"
        },
        options: [
          { en: "Chameleon", es: "Camaleón", de: "Chamäleon", nl: "Kameleon" },
          { en: "Lizard", es: "Lagarto", de: "Echse", nl: "Hagedis" },
          { en: "Snake", es: "Serpiente", de: "Schlange", nl: "Slang" },
          { en: "Turtle", es: "Tortuga", de: "Schildkröte", nl: "Schildpad" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the chemical symbol for oxygen?",
          es: "¿Cuál es el símbolo químico del oxígeno?",
          de: "Was ist das chemische Symbol für Sauerstoff?",
          nl: "Wat is het chemische symbool voor zuurstof?"
        },
        options: [
          { en: "O", es: "O", de: "O", nl: "O" },
          { en: "Ox", es: "Ox", de: "Ox", nl: "Ox" },
          { en: "Oy", es: "Oy", de: "Oy", nl: "Oy" },
          { en: "H", es: "H", de: "H", nl: "H" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which country has the most natural lakes?",
          es: "¿Qué país tiene más lagos naturales?",
          de: "Welches Land hat die meisten natürlichen Seen?",
          nl: "Welk land heeft de meeste natuurlijke meren?"
        },
        options: [
          { en: "Canada", es: "Canadá", de: "Kanada", nl: "Canada" },
          { en: "Finland", es: "Finlandia", de: "Finnland", nl: "Finland" },
          { en: "Sweden", es: "Suecia", de: "Schweden", nl: "Zweden" },
          { en: "Russia", es: "Rusia", de: "Russland", nl: "Rusland" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many legs does a lobster have?",
          es: "¿Cuántas patas tiene una langosta?",
          de: "Wie viele Beine hat ein Hummer?",
          nl: "Hoeveel poten heeft een kreeft?"
        },
        options: [
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "12", es: "12", de: "12", nl: "12" }
        ],
        correctIndex: 0
      }
    ],

    // Day 26 - January 26th (Australia Day)
    day26: [
      {
        question: {
          en: "What is the smallest continent by land area?",
          es: "¿Cuál es el continente más pequeño por área terrestre?",
          de: "Was ist der kleinste Kontinent nach Landfläche?",
          nl: "Wat is het kleinste continent qua landoppervlakte?"
        },
        options: [
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" },
          { en: "Europe", es: "Europa", de: "Europa", nl: "Europa" },
          { en: "Antarctica", es: "Antártida", de: "Antarktis", nl: "Antarctica" },
          { en: "South America", es: "América del Sur", de: "Südamerika", nl: "Zuid-Amerika" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which blood vessels carry blood away from the heart?",
          es: "¿Qué vasos sanguíneos transportan sangre lejos del corazón?",
          de: "Welche Blutgefäße transportieren Blut vom Herzen weg?",
          nl: "Welke bloedvaten voeren bloed weg van het hart?"
        },
        options: [
          { en: "Arteries", es: "Arterias", de: "Arterien", nl: "Slagaders" },
          { en: "Veins", es: "Venas", de: "Venen", nl: "Aders" },
          { en: "Capillaries", es: "Capilares", de: "Kapillaren", nl: "Haarvaten" },
          { en: "Valves", es: "Válvulas", de: "Klappen", nl: "Kleppen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the largest bird in the world?",
          es: "¿Cuál es el ave más grande del mundo?",
          de: "Was ist der größte Vogel der Welt?",
          nl: "Wat is de grootste vogel ter wereld?"
        },
        options: [
          { en: "Ostrich", es: "Avestruz", de: "Strauß", nl: "Struisvogel" },
          { en: "Eagle", es: "Águila", de: "Adler", nl: "Arend" },
          { en: "Albatross", es: "Albatros", de: "Albatros", nl: "Albatros" },
          { en: "Condor", es: "Cóndor", de: "Kondor", nl: "Condor" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which planet is tilted on its side?",
          es: "¿Qué planeta está inclinado de lado?",
          de: "Welcher Planet ist auf die Seite geneigt?",
          nl: "Welke planeet helt opzij?"
        },
        options: [
          { en: "Uranus", es: "Urano", de: "Uranus", nl: "Uranus" },
          { en: "Neptune", es: "Neptuno", de: "Neptun", nl: "Neptunus" },
          { en: "Saturn", es: "Saturno", de: "Saturn", nl: "Saturnus" },
          { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the unit of electrical resistance?",
          es: "¿Cuál es la unidad de resistencia eléctrica?",
          de: "Was ist die Einheit des elektrischen Widerstands?",
          nl: "Wat is de eenheid van elektrische weerstand?"
        },
        options: [
          { en: "Ohm", es: "Ohmio", de: "Ohm", nl: "Ohm" },
          { en: "Volt", es: "Voltio", de: "Volt", nl: "Volt" },
          { en: "Ampere", es: "Amperio", de: "Ampere", nl: "Ampère" },
          { en: "Watt", es: "Vatio", de: "Watt", nl: "Watt" }
        ],
        correctIndex: 0
      }
    ],

    // Day 27 - January 27th
    day27: [
      {
        question: {
          en: "What is the primary component of natural pearls?",
          es: "¿Cuál es el componente principal de las perlas naturales?",
          de: "Was ist der Hauptbestandteil natürlicher Perlen?",
          nl: "Wat is de hoofdcomponent van natuurlijke parels?"
        },
        options: [
          { en: "Calcium carbonate", es: "Carbonato de calcio", de: "Kalziumkarbonat", nl: "Calciumcarbonaat" },
          { en: "Silicon dioxide", es: "Dióxido de silicio", de: "Siliziumdioxid", nl: "Siliciumdioxide" },
          { en: "Magnesium sulfate", es: "Sulfato de magnesio", de: "Magnesiumsulfat", nl: "Magnesiumsulfaat" },
          { en: "Sodium chloride", es: "Cloruro de sodio", de: "Natriumchlorid", nl: "Natriumchloride" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which empire was ruled by Julius Caesar?",
          es: "¿Qué imperio fue gobernado por Julio César?",
          de: "Welches Reich wurde von Julius Caesar regiert?",
          nl: "Welk rijk werd geregeerd door Julius Caesar?"
        },
        options: [
          { en: "Roman Empire", es: "Imperio Romano", de: "Römisches Reich", nl: "Romeinse Rijk" },
          { en: "Greek Empire", es: "Imperio Griego", de: "Griechisches Reich", nl: "Griekse Rijk" },
          { en: "Persian Empire", es: "Imperio Persa", de: "Persisches Reich", nl: "Perzische Rijk" },
          { en: "Egyptian Empire", es: "Imperio Egipcio", de: "Ägyptisches Reich", nl: "Egyptische Rijk" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the fastest marine animal?",
          es: "¿Cuál es el animal marino más rápido?",
          de: "Was ist das schnellste Meerestier?",
          nl: "Wat is het snelste zeedier?"
        },
        options: [
          { en: "Sailfish", es: "Pez Vela", de: "Fächerfisch", nl: "Zeilvis" },
          { en: "Dolphin", es: "Delfín", de: "Delphin", nl: "Dolfijn" },
          { en: "Tuna", es: "Atún", de: "Thunfisch", nl: "Tonijn" },
          { en: "Shark", es: "Tiburón", de: "Hai", nl: "Haai" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which gas do plants release during photosynthesis?",
          es: "¿Qué gas liberan las plantas durante la fotosíntesis?",
          de: "Welches Gas geben Pflanzen bei der Photosynthese ab?",
          nl: "Welk gas geven planten af tijdens fotosynthese?"
        },
        options: [
          { en: "Oxygen", es: "Oxígeno", de: "Sauerstoff", nl: "Zuurstof" },
          { en: "Carbon Dioxide", es: "Dióxido de Carbono", de: "Kohlendioxid", nl: "Koolstofdioxide" },
          { en: "Nitrogen", es: "Nitrógeno", de: "Stickstoff", nl: "Stikstof" },
          { en: "Hydrogen", es: "Hidrógeno", de: "Wasserstoff", nl: "Waterstof" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the capital of South Korea?",
          es: "¿Cuál es la capital de Corea del Sur?",
          de: "Was ist die Hauptstadt von Südkorea?",
          nl: "Wat is de hoofdstad van Zuid-Korea?"
        },
        options: [
          { en: "Seoul", es: "Seúl", de: "Seoul", nl: "Seoel" },
          { en: "Busan", es: "Busan", de: "Busan", nl: "Busan" },
          { en: "Pyongyang", es: "Pyongyang", de: "Pjöngjang", nl: "Pyongyang" },
          { en: "Incheon", es: "Incheon", de: "Incheon", nl: "Incheon" }
        ],
        correctIndex: 0
      }
    ],

    // Day 28 - January 28th
    day28: [
      {
        question: {
          en: "How many hearts does an octopus have?",
          es: "¿Cuántos corazones tiene un pulpo?",
          de: "Wie viele Herzen hat ein Oktopus?",
          nl: "Hoeveel harten heeft een octopus?"
        },
        options: [
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "1", es: "1", de: "1", nl: "1" },
          { en: "4", es: "4", de: "4", nl: "4" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which mountain range contains Mount Everest?",
          es: "¿Qué cordillera contiene el Monte Everest?",
          de: "Welches Gebirge enthält den Mount Everest?",
          nl: "Welk gebergte bevat de Mount Everest?"
        },
        options: [
          { en: "Himalayas", es: "Himalayas", de: "Himalaya", nl: "Himalaya" },
          { en: "Andes", es: "Andes", de: "Anden", nl: "Andes" },
          { en: "Alps", es: "Alpes", de: "Alpen", nl: "Alpen" },
          { en: "Rockies", es: "Rocosas", de: "Rocky Mountains", nl: "Rocky Mountains" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the most abundant element in the human body?",
          es: "¿Cuál es el elemento más abundante en el cuerpo humano?",
          de: "Was ist das häufigste Element im menschlichen Körper?",
          nl: "Wat is het meest voorkomende element in het menselijk lichaam?"
        },
        options: [
          { en: "Oxygen", es: "Oxígeno", de: "Sauerstoff", nl: "Zuurstof" },
          { en: "Carbon", es: "Carbono", de: "Kohlenstoff", nl: "Koolstof" },
          { en: "Hydrogen", es: "Hidrógeno", de: "Wasserstoff", nl: "Waterstof" },
          { en: "Nitrogen", es: "Nitrógeno", de: "Stickstoff", nl: "Stikstof" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which instrument measures atmospheric pressure?",
          es: "¿Qué instrumento mide la presión atmosférica?",
          de: "Welches Instrument misst den Luftdruck?",
          nl: "Welk instrument meet de atmosferische druk?"
        },
        options: [
          { en: "Barometer", es: "Barómetro", de: "Barometer", nl: "Barometer" },
          { en: "Thermometer", es: "Termómetro", de: "Thermometer", nl: "Thermometer" },
          { en: "Hygrometer", es: "Higrómetro", de: "Hygrometer", nl: "Hygrometer" },
          { en: "Anemometer", es: "Anemómetro", de: "Anemometer", nl: "Anemometer" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the largest type of penguin?",
          es: "¿Cuál es el tipo de pingüino más grande?",
          de: "Was ist die größte Pinguinart?",
          nl: "Wat is de grootste soort pinguïn?"
        },
        options: [
          { en: "Emperor Penguin", es: "Pingüino Emperador", de: "Kaiserpinguin", nl: "Keizerpinguïn" },
          { en: "King Penguin", es: "Pingüino Rey", de: "Königspinguin", nl: "Koningspinguïn" },
          { en: "Adelie Penguin", es: "Pingüino Adelaida", de: "Adeliepinguin", nl: "Adeliepinguïn" },
          { en: "Chinstrap Penguin", es: "Pingüino Barbijo", de: "Zügelpinguin", nl: "Kinbandpinguïn" }
        ],
        correctIndex: 0
      }
    ],

    // Day 29 - January 29th
    day29: [
      {
        question: {
          en: "What is the most common gas in the air we breathe?",
          es: "¿Cuál es el gas más común en el aire que respiramos?",
          de: "Was ist das häufigste Gas in der Luft, die wir atmen?",
          nl: "Wat is het meest voorkomende gas in de lucht die we inademen?"
        },
        options: [
          { en: "Nitrogen", es: "Nitrógeno", de: "Stickstoff", nl: "Stikstof" },
          { en: "Oxygen", es: "Oxígeno", de: "Sauerstoff", nl: "Zuurstof" },
          { en: "Carbon Dioxide", es: "Dióxido de Carbono", de: "Kohlendioxid", nl: "Koolstofdioxide" },
          { en: "Argon", es: "Argón", de: "Argon", nl: "Argon" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which planet has the Great Red Spot?",
          es: "¿Qué planeta tiene la Gran Mancha Roja?",
          de: "Welcher Planet hat den Großen Roten Fleck?",
          nl: "Welke planeet heeft de Grote Rode Vlek?"
        },
        options: [
          { en: "Jupiter", es: "Júpiter", de: "Jupiter", nl: "Jupiter" },
          { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" },
          { en: "Saturn", es: "Saturno", de: "Saturn", nl: "Saturnus" },
          { en: "Neptune", es: "Neptuno", de: "Neptun", nl: "Neptunus" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the largest organ inside the human body?",
          es: "¿Cuál es el órgano más grande dentro del cuerpo humano?",
          de: "Was ist das größte Organ im menschlichen Körper?",
          nl: "Wat is het grootste orgaan in het menselijk lichaam?"
        },
        options: [
          { en: "Liver", es: "Hígado", de: "Leber", nl: "Lever" },
          { en: "Brain", es: "Cerebro", de: "Gehirn", nl: "Hersenen" },
          { en: "Lungs", es: "Pulmones", de: "Lungen", nl: "Longen" },
          { en: "Heart", es: "Corazón", de: "Herz", nl: "Hart" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which country is famous for the Leaning Tower of Pisa?",
          es: "¿Qué país es famoso por la Torre Inclinada de Pisa?",
          de: "Welches Land ist berühmt für den Schiefen Turm von Pisa?",
          nl: "Welk land staat bekend om de Scheve Toren van Pisa?"
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
          en: "How many chambers does a fish heart have?",
          es: "¿Cuántas cámaras tiene el corazón de un pez?",
          de: "Wie viele Kammern hat das Herz eines Fisches?",
          nl: "Hoeveel kamers heeft het hart van een vis?"
        },
        options: [
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "1", es: "1", de: "1", nl: "1" }
        ],
        correctIndex: 0
      }
    ],

    // Day 30 - January 30th
    day30: [
      {
        question: {
          en: "Which metal is the best conductor of electricity?",
          es: "¿Qué metal es el mejor conductor de electricidad?",
          de: "Welches Metall ist der beste Stromleiter?",
          nl: "Welk metaal is de beste geleider van elektriciteit?"
        },
        options: [
          { en: "Silver", es: "Plata", de: "Silber", nl: "Zilver" },
          { en: "Copper", es: "Cobre", de: "Kupfer", nl: "Koper" },
          { en: "Gold", es: "Oro", de: "Gold", nl: "Goud" },
          { en: "Aluminum", es: "Aluminio", de: "Aluminium", nl: "Aluminium" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the largest island in the world?",
          es: "¿Cuál es la isla más grande del mundo?",
          de: "Was ist die größte Insel der Welt?",
          nl: "Wat is het grootste eiland ter wereld?"
        },
        options: [
          { en: "Greenland", es: "Groenlandia", de: "Grönland", nl: "Groenland" },
          { en: "Madagascar", es: "Madagascar", de: "Madagaskar", nl: "Madagaskar" },
          { en: "Borneo", es: "Borneo", de: "Borneo", nl: "Borneo" },
          { en: "New Guinea", es: "Nueva Guinea", de: "Neuguinea", nl: "Nieuw-Guinea" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which vitamin deficiency causes scurvy?",
          es: "¿La deficiencia de qué vitamina causa escorbuto?",
          de: "Welcher Vitaminmangel verursacht Skorbut?",
          nl: "Welk vitaminetekort veroorzaakt scheurbuik?"
        },
        options: [
          { en: "Vitamin C", es: "Vitamina C", de: "Vitamin C", nl: "Vitamine C" },
          { en: "Vitamin D", es: "Vitamina D", de: "Vitamin D", nl: "Vitamine D" },
          { en: "Vitamin A", es: "Vitamina A", de: "Vitamin A", nl: "Vitamine A" },
          { en: "Vitamin B", es: "Vitamina B", de: "Vitamin B", nl: "Vitamine B" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the hardest rock?",
          es: "¿Cuál es la roca más dura?",
          de: "Was ist das härteste Gestein?",
          nl: "Wat is de hardste steen?"
        },
        options: [
          { en: "Diamond", es: "Diamante", de: "Diamant", nl: "Diamant" },
          { en: "Granite", es: "Granito", de: "Granit", nl: "Graniet" },
          { en: "Quartz", es: "Cuarzo", de: "Quarz", nl: "Kwarts" },
          { en: "Marble", es: "Mármol", de: "Marmor", nl: "Marmer" }
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
          { en: "Sparrow", es: "Gorrión", de: "Spatz", nl: "Mus" },
          { en: "Robin", es: "Petirrojo", de: "Rotkehlchen", nl: "Roodborst" },
          { en: "Eagle", es: "Águila", de: "Adler", nl: "Arend" }
        ],
        correctIndex: 0
      }
    ],

    // Day 31 - January 31st (Final day of January)
    day31: [
      {
        question: {
          en: "What is the process by which caterpillars become butterflies?",
          es: "¿Cuál es el proceso por el cual las orugas se convierten en mariposas?",
          de: "Wie nennt man den Prozess, bei dem Raupen zu Schmetterlingen werden?",
          nl: "Wat is het proces waarbij rupsen vlinders worden?"
        },
        options: [
          { en: "Metamorphosis", es: "Metamorfosis", de: "Metamorphose", nl: "Metamorfose" },
          { en: "Evolution", es: "Evolución", de: "Evolution", nl: "Evolutie" },
          { en: "Transformation", es: "Transformación", de: "Transformation", nl: "Transformatie" },
          { en: "Mutation", es: "Mutación", de: "Mutation", nl: "Mutatie" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which is the driest desert in the world?",
          es: "¿Cuál es el desierto más seco del mundo?",
          de: "Was ist die trockenste Wüste der Welt?",
          nl: "Wat is de droogste woestijn ter wereld?"
        },
        options: [
          { en: "Atacama Desert", es: "Desierto de Atacama", de: "Atacama-Wüste", nl: "Atacama woestijn" },
          { en: "Sahara Desert", es: "Desierto del Sahara", de: "Sahara-Wüste", nl: "Sahara woestijn" },
          { en: "Gobi Desert", es: "Desierto de Gobi", de: "Gobi-Wüste", nl: "Gobi woestijn" },
          { en: "Kalahari Desert", es: "Desierto de Kalahari", de: "Kalahari-Wüste", nl: "Kalahari woestijn" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many bones do sharks have?",
          es: "¿Cuántos huesos tienen los tiburones?",
          de: "Wie viele Knochen haben Haie?",
          nl: "Hoeveel botten hebben haaien?"
        },
        options: [
          { en: "0", es: "0", de: "0", nl: "0" },
          { en: "50", es: "50", de: "50", nl: "50" },
          { en: "100", es: "100", de: "100", nl: "100" },
          { en: "200", es: "200", de: "200", nl: "200" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the capital of New Zealand?",
          es: "¿Cuál es la capital de Nueva Zelanda?",
          de: "Was ist die Hauptstadt von Neuseeland?",
          nl: "Wat is de hoofdstad van Nieuw-Zeeland?"
        },
        options: [
          { en: "Wellington", es: "Wellington", de: "Wellington", nl: "Wellington" },
          { en: "Auckland", es: "Auckland", de: "Auckland", nl: "Auckland" },
          { en: "Christchurch", es: "Christchurch", de: "Christchurch", nl: "Christchurch" },
          { en: "Hamilton", es: "Hamilton", de: "Hamilton", nl: "Hamilton" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What comes after January in the calendar year?",
          es: "¿Qué viene después de enero en el año calendario?",
          de: "Was kommt nach Januar im Kalenderjahr?",
          nl: "Wat komt na januari in het kalenderjaar?"
        },
        options: [
          { en: "February", es: "Febrero", de: "Februar", nl: "Februari" },
          { en: "March", es: "Marzo", de: "März", nl: "Maart" },
          { en: "December", es: "Diciembre", de: "Dezember", nl: "December" },
          { en: "April", es: "Abril", de: "April", nl: "April" }
        ],
        correctIndex: 0
      }
    ]
  };

  // Export January challenges
  if (typeof window.addMonthChallenges === 'function') {
    window.addMonthChallenges('january', januaryChallenges);
  }

})();