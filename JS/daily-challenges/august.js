// August Daily Challenges - 31 days × 5 questions each = 155 total questions
(function() {
  
  const augustChallenges = {
    name: {
      en: "August Daily Challenges",
      es: "Desafíos Diarios de Agosto", 
      de: "August Tägliche Herausforderungen",
      nl: "Augustus Dagelijkse Uitdagingen"
    },
    
    // Day 1 - August 1st: Late Summer
    day1: [
      {
        question: {
          en: "What season is August in?",
          es: "¿En qué estación es agosto?",
          de: "In welcher Jahreszeit ist August?",
          nl: "In welk seizoen valt augustus?"
        },
        options: [
          { en: "Summer", es: "Verano", de: "Sommer", nl: "Zomer" },
          { en: "Winter", es: "Invierno", de: "Winter", nl: "Winter" },
          { en: "Spring", es: "Primavera", de: "Frühling", nl: "Lente" },
          { en: "Fall", es: "Otoño", de: "Herbst", nl: "Herfst" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many days are in August?",
          es: "¿Cuántos días tiene agosto?",
          de: "Wie viele Tage hat der August?",
          nl: "Hoeveel dagen heeft augustus?"
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
          en: "What birthstone is for August?",
          es: "¿Cuál es la piedra de nacimiento de agosto?",
          de: "Welcher Geburtsstein ist für August?",
          nl: "Welke geboortesteen hoort bij augustus?"
        },
        options: [
          { en: "Peridot", es: "Peridoto", de: "Peridot", nl: "Peridoot" },
          { en: "Ruby", es: "Rubí", de: "Rubin", nl: "Robijn" },
          { en: "Diamond", es: "Diamante", de: "Diamant", nl: "Diamant" },
          { en: "Sapphire", es: "Zafiro", de: "Saphir", nl: "Saffier" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do many kids do before August ends?",
          es: "¿Qué hacen muchos niños antes de que termine agosto?",
          de: "Was machen viele Kinder, bevor August endet?",
          nl: "Wat doen veel kinderen voordat augustus eindigt?"
        },
        options: [
          { en: "Get ready for school", es: "Se preparan para la escuela", de: "Sich auf die Schule vorbereiten", nl: "Zich voorbereiden op school" },
          { en: "Plant flowers", es: "Plantar flores", de: "Blumen pflanzen", nl: "Bloemen planten" },
          { en: "Build snowmen", es: "Hacer muñecos de nieve", de: "Schneemänner bauen", nl: "Sneeuwpoppen maken" },
          { en: "Go ice skating", es: "Ir a patinar sobre hielo", de: "Schlittschuhlaufen gehen", nl: "Gaan schaatsen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What fruit is often picked in August?",
          es: "¿Qué fruta se suele recoger en agosto?",
          de: "Welche Frucht wird oft im August gepflückt?",
          nl: "Welk fruit wordt vaak in augustus geplukt?"
        },
        options: [
          { en: "Peaches", es: "Duraznos", de: "Pfirsiche", nl: "Perziken" },
          { en: "Snow", es: "Nieve", de: "Schnee", nl: "Sneeuw" },
          { en: "Ice", es: "Hielo", de: "Eis", nl: "IJs" },
          { en: "Leaves", es: "Hojas", de: "Blätter", nl: "Bladeren" }
        ],
        correctIndex: 0
      }
    ],

    // Day 2 - August 2nd
    day2: [
      {
        question: {
          en: "What is the capital of Japan?",
          es: "¿Cuál es la capital de Japón?",
          de: "Was ist die Hauptstadt von Japan?",
          nl: "Wat is de hoofdstad van Japan?"
        },
        options: [
          { en: "Tokyo", es: "Tokio", de: "Tokio", nl: "Tokio" },
          { en: "Kyoto", es: "Kioto", de: "Kyoto", nl: "Kyoto" },
          { en: "Osaka", es: "Osaka", de: "Osaka", nl: "Osaka" },
          { en: "Nagoya", es: "Nagoya", de: "Nagoya", nl: "Nagoya" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which animal is known as the 'King of the Jungle'?",
          es: "¿Qué animal es conocido como el 'Rey de la Selva'?",
          de: "Welches Tier ist als der 'König des Dschungels' bekannt?",
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
          en: "What is the boiling point of water?",
          es: "¿Cuál es el punto de ebullición del agua?",
          de: "Was ist der Siedepunkt von Wasser?",
          nl: "Wat is het kookpunt van water?"
        },
        options: [
          { en: "100°C", es: "100°C", de: "100°C", nl: "100°C" },
          { en: "0°C", es: "0°C", de: "0°C", nl: "0°C" },
          { en: "50°C", es: "50°C", de: "50°C", nl: "50°C" },
          { en: "200°C", es: "200°C", de: "200°C", nl: "200°C" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which continent is Egypt located in?",
          es: "¿En qué continente se encuentra Egipto?",
          de: "Auf welchem Kontinent liegt Ägypten?",
          nl: "Op welk continent ligt Egypte?"
        },
        options: [
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" },
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" },
          { en: "Europe", es: "Europa", de: "Europa", nl: "Europa" },
          { en: "South America", es: "Sudamérica", de: "Südamerika", nl: "Zuid-Amerika" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do bees make?",
          es: "¿Qué hacen las abejas?",
          de: "Was machen Bienen?",
          nl: "Wat maken bijen?"
        },
        options: [
          { en: "Honey", es: "Miel", de: "Honig", nl: "Honing" },
          { en: "Milk", es: "Leche", de: "Milch", nl: "Melk" },
          { en: "Cheese", es: "Queso", de: "Käse", nl: "Kaas" },
          { en: "Butter", es: "Mantequilla", de: "Butter", nl: "Boter" }
        ],
        correctIndex: 0
      }
    ],

    // Day 3 - August 3rd
    day3: [
      {
        question: {
          en: "How many strings does a guitar typically have?",
          es: "¿Cuántas cuerdas tiene típicamente una guitarra?",
          de: "Wie viele Saiten hat eine Gitarre normalerweise?",
          nl: "Hoeveel snaren heeft een gitaar gewoonlijk?"
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
          en: "What is the largest mammal in the world?",
          es: "¿Cuál es el mamífero más grande del mundo?",
          de: "Was ist das größte Säugetier der Welt?",
          nl: "Wat is het grootste zoogdier ter wereld?"
        },
        options: [
          { en: "Blue whale", es: "Ballena azul", de: "Blauwal", nl: "Blauwe vinvis" },
          { en: "Elephant", es: "Elefante", de: "Elefant", nl: "Olifant" },
          { en: "Giraffe", es: "Jirafa", de: "Giraffe", nl: "Giraf" },
          { en: "Hippopotamus", es: "Hipopótamo", de: "Flusspferd", nl: "Nijlpaard" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which planet is closest to Earth?",
          es: "¿Qué planeta está más cerca de la Tierra?",
          de: "Welcher Planet ist der Erde am nächsten?",
          nl: "Welke planeet staat het dichtst bij de Aarde?"
        },
        options: [
          { en: "Venus", es: "Venus", de: "Venus", nl: "Venus" },
          { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" },
          { en: "Mercury", es: "Mercurio", de: "Merkur", nl: "Mercurius" },
          { en: "Jupiter", es: "Júpiter", de: "Jupiter", nl: "Jupiter" }
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
          { en: "Pound", es: "Libra", de: "Pfund", nl: "Pond" },
          { en: "Euro", es: "Euro", de: "Euro", nl: "Euro" },
          { en: "Dollar", es: "Dólar", de: "Dollar", nl: "Dollar" },
          { en: "Yen", es: "Yen", de: "Yen", nl: "Yen" }
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
      }
    ],

    // Day 4 - August 4th
    day4: [
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
          en: "What is the smallest planet in our solar system?",
          es: "¿Cuál es el planeta más pequeño de nuestro sistema solar?",
          de: "Was ist der kleinste Planet in unserem Sonnensystem?",
          nl: "Wat is de kleinste planeet in ons zonnestelsel?"
        },
        options: [
          { en: "Mercury", es: "Mercurio", de: "Merkur", nl: "Mercurius" },
          { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" },
          { en: "Venus", es: "Venus", de: "Venus", nl: "Venus" },
          { en: "Earth", es: "Tierra", de: "Erde", nl: "Aarde" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which ocean is the smallest?",
          es: "¿Cuál es el océano más pequeño?",
          de: "Welcher Ozean ist der kleinste?",
          nl: "Welke oceaan is de kleinste?"
        },
        options: [
          { en: "Arctic Ocean", es: "Océano Ártico", de: "Arktischer Ozean", nl: "Arctische Oceaan" },
          { en: "Indian Ocean", es: "Océano Índico", de: "Indischer Ozean", nl: "Indische Oceaan" },
          { en: "Atlantic Ocean", es: "Océano Atlántico", de: "Atlantischer Ozean", nl: "Atlantische Oceaan" },
          { en: "Pacific Ocean", es: "Océano Pacífico", de: "Pazifischer Ozean", nl: "Stille Oceaan" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do pandas mainly eat?",
          es: "¿Qué comen principalmente los pandas?",
          de: "Was fressen Pandas hauptsächlich?",
          nl: "Wat eten panda's voornamelijk?"
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
          en: "How many days are in a leap year?",
          es: "¿Cuántos días hay en un año bisiesto?",
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

    // Day 5 - August 5th
    day5: [
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
          en: "Which vitamin is produced when skin is exposed to sunlight?",
          es: "¿Qué vitamina se produce cuando la piel se expone a la luz solar?",
          de: "Welches Vitamin wird produziert, wenn die Haut der Sonne ausgesetzt ist?",
          nl: "Welke vitamine wordt geproduceerd wanneer de huid wordt blootgesteld aan zonlicht?"
        },
        options: [
          { en: "Vitamin D", es: "Vitamina D", de: "Vitamin D", nl: "Vitamine D" },
          { en: "Vitamin A", es: "Vitamina A", de: "Vitamin A", nl: "Vitamine A" },
          { en: "Vitamin C", es: "Vitamina C", de: "Vitamin C", nl: "Vitamine C" },
          { en: "Vitamin B", es: "Vitamina B", de: "Vitamin B", nl: "Vitamine B" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the study of earthquakes called?",
          es: "¿Cómo se llama el estudio de los terremotos?",
          de: "Wie nennt man das Studium von Erdbeben?",
          nl: "Hoe noemt men de studie van aardbevingen?"
        },
        options: [
          { en: "Seismology", es: "Sismología", de: "Seismologie", nl: "Seismologie" },
          { en: "Geology", es: "Geología", de: "Geologie", nl: "Geologie" },
          { en: "Biology", es: "Biología", de: "Biologie", nl: "Biologie" },
          { en: "Meteorology", es: "Meteorología", de: "Meteorologie", nl: "Meteorologie" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "In which country would you find Machu Picchu?",
          es: "¿En qué país encontrarías Machu Picchu?",
          de: "In welchem Land würden Sie Machu Picchu finden?",
          nl: "In welk land zou je Machu Picchu vinden?"
        },
        options: [
          { en: "Peru", es: "Perú", de: "Peru", nl: "Peru" },
          { en: "Chile", es: "Chile", de: "Chile", nl: "Chili" },
          { en: "Bolivia", es: "Bolivia", de: "Bolivien", nl: "Bolivia" },
          { en: "Ecuador", es: "Ecuador", de: "Ecuador", nl: "Ecuador" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the main ingredient in chocolate?",
          es: "¿Cuál es el ingrediente principal del chocolate?",
          de: "Was ist die Hauptzutat in Schokolade?",
          nl: "Wat is het hoofdingrediënt in chocolade?"
        },
        options: [
          { en: "Cocoa beans", es: "Granos de cacao", de: "Kakaobohnen", nl: "Cacaobonen" },
          { en: "Sugar", es: "Azúcar", de: "Zucker", nl: "Suiker" },
          { en: "Milk", es: "Leche", de: "Milch", nl: "Melk" },
          { en: "Vanilla", es: "Vainilla", de: "Vanille", nl: "Vanille" }
        ],
        correctIndex: 0
      }
    ],

    // Day 6 - August 6th
    day6: [
      {
        question: {
          en: "What is the largest desert in the world?",
          es: "¿Cuál es el desierto más grande del mundo?",
          de: "Was ist die größte Wüste der Welt?",
          nl: "Wat is de grootste woestijn ter wereld?"
        },
        options: [
          { en: "Sahara Desert", es: "Desierto del Sahara", de: "Sahara-Wüste", nl: "Sahara Woestijn" },
          { en: "Gobi Desert", es: "Desierto de Gobi", de: "Gobi-Wüste", nl: "Gobi Woestijn" },
          { en: "Mojave Desert", es: "Desierto de Mojave", de: "Mojave-Wüste", nl: "Mojave Woestijn" },
          { en: "Atacama Desert", es: "Desierto de Atacama", de: "Atacama-Wüste", nl: "Atacama Woestijn" }
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
          { en: "Flute", es: "Flauta", de: "Flöte", nl: "Fluit" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the chemical symbol for sodium?",
          es: "¿Cuál es el símbolo químico del sodio?",
          de: "Was ist das chemische Symbol für Natrium?",
          nl: "Wat is het chemische symbool voor natrium?"
        },
        options: [
          { en: "Na", es: "Na", de: "Na", nl: "Na" },
          { en: "So", es: "So", de: "So", nl: "So" },
          { en: "S", es: "S", de: "S", nl: "S" },
          { en: "Sd", es: "Sd", de: "Sd", nl: "Sd" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many teeth does an adult human typically have?",
          es: "¿Cuántos dientes tiene típicamente un humano adulto?",
          de: "Wie viele Zähne hat ein erwachsener Mensch normalerweise?",
          nl: "Hoeveel tanden heeft een volwassen mens gewoonlijk?"
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
          en: "Which bird is known for its beautiful tail feathers?",
          es: "¿Qué ave es conocida por sus hermosas plumas de cola?",
          de: "Welcher Vogel ist für seine schönen Schwanzfedern bekannt?",
          nl: "Welke vogel staat bekend om zijn prachtige staartveren?"
        },
        options: [
          { en: "Peacock", es: "Pavo real", de: "Pfau", nl: "Pauw" },
          { en: "Eagle", es: "Águila", de: "Adler", nl: "Adelaar" },
          { en: "Crow", es: "Cuervo", de: "Krähe", nl: "Kraai" },
          { en: "Sparrow", es: "Gorrión", de: "Spatz", nl: "Mus" }
        ],
        correctIndex: 0
      }
    ],

    // Day 7 - August 7th
    day7: [
      {
        question: {
          en: "What is the hardest natural substance on Earth?",
          es: "¿Cuál es la sustancia natural más dura de la Tierra?",
          de: "Was ist die härteste natürliche Substanz der Erde?",
          nl: "Wat is de hardste natuurlijke stof op aarde?"
        },
        options: [
          { en: "Diamond", es: "Diamante", de: "Diamant", nl: "Diamant" },
          { en: "Iron", es: "Hierro", de: "Eisen", nl: "IJzer" },
          { en: "Steel", es: "Acero", de: "Stahl", nl: "Staal" },
          { en: "Granite", es: "Granito", de: "Granit", nl: "Graniet" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which country has the most time zones?",
          es: "¿Qué país tiene más husos horarios?",
          de: "Welches Land hat die meisten Zeitzonen?",
          nl: "Welk land heeft de meeste tijdzones?"
        },
        options: [
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "Russia", es: "Rusia", de: "Russland", nl: "Rusland" },
          { en: "USA", es: "Estados Unidos", de: "USA", nl: "Verenigde Staten" },
          { en: "China", es: "China", de: "China", nl: "China" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the name of the longest river in South America?",
          es: "¿Cómo se llama el río más largo de Sudamérica?",
          de: "Wie heißt der längste Fluss in Südamerika?",
          nl: "Hoe heet de langste rivier in Zuid-Amerika?"
        },
        options: [
          { en: "Amazon River", es: "Río Amazonas", de: "Amazonas", nl: "Amazone rivier" },
          { en: "Nile River", es: "Río Nilo", de: "Nil", nl: "Nijl rivier" },
          { en: "Mississippi River", es: "Río Mississippi", de: "Mississippi", nl: "Mississippi rivier" },
          { en: "Yangtze River", es: "Río Yangtsé", de: "Jangtse", nl: "Yangtze rivier" }
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
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "5", es: "5", de: "5", nl: "5" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do you call a group of lions?",
          es: "¿Cómo se llama un grupo de leones?",
          de: "Wie nennt man eine Gruppe von Löwen?",
          nl: "Hoe noem je een groep leeuwen?"
        },
        options: [
          { en: "Pride", es: "Manada", de: "Rudel", nl: "Troep" },
          { en: "Flock", es: "Bandada", de: "Schwarm", nl: "Kudde" },
          { en: "Herd", es: "Rebaño", de: "Herde", nl: "Kudde" },
          { en: "Pack", es: "Jauría", de: "Rudel", nl: "Roedel" }
        ],
        correctIndex: 0
      }
    ],

    // Day 8 - August 8th
    day8: [
      {
        question: {
          en: "Which planet has the most moons?",
          es: "¿Qué planeta tiene más lunas?",
          de: "Welcher Planet hat die meisten Monde?",
          nl: "Welke planeet heeft de meeste manen?"
        },
        options: [
          { en: "Jupiter", es: "Júpiter", de: "Jupiter", nl: "Jupiter" },
          { en: "Saturn", es: "Saturno", de: "Saturn", nl: "Saturnus" },
          { en: "Earth", es: "Tierra", de: "Erde", nl: "Aarde" },
          { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the currency of Brazil?",
          es: "¿Cuál es la moneda de Brasil?",
          de: "Was ist die Währung Brasiliens?",
          nl: "Wat is de munteenheid van Brazilië?"
        },
        options: [
          { en: "Real", es: "Real", de: "Real", nl: "Real" },
          { en: "Peso", es: "Peso", de: "Peso", nl: "Peso" },
          { en: "Dollar", es: "Dólar", de: "Dollar", nl: "Dollar" },
          { en: "Euro", es: "Euro", de: "Euro", nl: "Euro" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What gas makes up about 78% of Earth's atmosphere?",
          es: "¿Qué gas compone aproximadamente el 78% de la atmósfera terrestre?",
          de: "Welches Gas macht etwa 78% der Erdatmosphäre aus?",
          nl: "Welk gas vormt ongeveer 78% van de aardatmosfeer?"
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
          en: "Who painted 'The Starry Night'?",
          es: "¿Quién pintó 'La Noche Estrellada'?",
          de: "Wer malte 'Die Sternennacht'?",
          nl: "Wie schilderde 'De Sterrennacht'?"
        },
        options: [
          { en: "Vincent van Gogh", es: "Vincent van Gogh", de: "Vincent van Gogh", nl: "Vincent van Gogh" },
          { en: "Leonardo da Vinci", es: "Leonardo da Vinci", de: "Leonardo da Vinci", nl: "Leonardo da Vinci" },
          { en: "Pablo Picasso", es: "Pablo Picasso", de: "Pablo Picasso", nl: "Pablo Picasso" },
          { en: "Claude Monet", es: "Claude Monet", de: "Claude Monet", nl: "Claude Monet" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the smallest bone in the human body?",
          es: "¿Cuál es el hueso más pequeño del cuerpo humano?",
          de: "Was ist der kleinste Knochen im menschlichen Körper?",
          nl: "Wat is het kleinste bot in het menselijk lichaam?"
        },
        options: [
          { en: "Stapes (ear bone)", es: "Estribo (hueso del oído)", de: "Steigbügel (Ohrenknochen)", nl: "Stapes (oorbeentje)" },
          { en: "Finger bone", es: "Hueso del dedo", de: "Fingerknochen", nl: "Vinger bot" },
          { en: "Toe bone", es: "Hueso del dedo del pie", de: "Zehenknochen", nl: "Teen bot" },
          { en: "Wrist bone", es: "Hueso de la muñeca", de: "Handgelenksknochen", nl: "Pols bot" }
        ],
        correctIndex: 0
      }
    ],

    // Day 9 - August 9th
    day9: [
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
          { en: "Giza", es: "Giza", de: "Gizeh", nl: "Giza" },
          { en: "Luxor", es: "Luxor", de: "Luxor", nl: "Luxor" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many players are on a basketball team on the court at one time?",
          es: "¿Cuántos jugadores hay en un equipo de baloncesto en la cancha al mismo tiempo?",
          de: "Wie viele Spieler eines Basketballteams sind gleichzeitig auf dem Platz?",
          nl: "Hoeveel spelers van een basketbalteam staan er tegelijk op het veld?"
        },
        options: [
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "11", es: "11", de: "11", nl: "11" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the most abundant element in the universe?",
          es: "¿Cuál es el elemento más abundante en el universo?",
          de: "Was ist das häufigste Element im Universum?",
          nl: "Wat is het meest voorkomende element in het universum?"
        },
        options: [
          { en: "Hydrogen", es: "Hidrógeno", de: "Wasserstoff", nl: "Waterstof" },
          { en: "Oxygen", es: "Oxígeno", de: "Sauerstoff", nl: "Zuurstof" },
          { en: "Carbon", es: "Carbono", de: "Kohlenstoff", nl: "Koolstof" },
          { en: "Helium", es: "Helio", de: "Helium", nl: "Helium" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which mammal is known to have the most powerful bite?",
          es: "¿Qué mamífero es conocido por tener la mordida más poderosa?",
          de: "Welches Säugetier ist bekannt für den stärksten Biss?",
          nl: "Welk zoogdier staat bekend om de krachtigste beet?"
        },
        options: [
          { en: "Hippopotamus", es: "Hipopótamo", de: "Flusspferd", nl: "Nijlpaard" },
          { en: "Lion", es: "León", de: "Löwe", nl: "Leeuw" },
          { en: "Bear", es: "Oso", de: "Bär", nl: "Beer" },
          { en: "Wolf", es: "Lobo", de: "Wolf", nl: "Wolf" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What type of animal is a Komodo dragon?",
          es: "¿Qué tipo de animal es un dragón de Komodo?",
          de: "Was für ein Tier ist ein Komodowaran?",
          nl: "Wat voor dier is een Komodovaraan?"
        },
        options: [
          { en: "Lizard", es: "Lagarto", de: "Echse", nl: "Hagedis" },
          { en: "Snake", es: "Serpiente", de: "Schlange", nl: "Slang" },
          { en: "Dragon", es: "Dragón", de: "Drache", nl: "Draak" },
          { en: "Crocodile", es: "Cocodrilo", de: "Krokodil", nl: "Krokodil" }
        ],
        correctIndex: 0
      }
    ],

    // Day 10 - August 10th
    day10: [
      {
        question: {
          en: "What is the process by which plants make their food?",
          es: "¿Cuál es el proceso por el cual las plantas hacen su comida?",
          de: "Wie nennt man den Prozess, bei dem Pflanzen ihre Nahrung herstellen?",
          nl: "Wat is het proces waarmee planten hun voedsel maken?"
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
          en: "Which country is famous for the tango dance?",
          es: "¿Qué país es famoso por el baile del tango?",
          de: "Welches Land ist berühmt für den Tango-Tanz?",
          nl: "Welk land staat bekend om de tangodans?"
        },
        options: [
          { en: "Argentina", es: "Argentina", de: "Argentinien", nl: "Argentinië" },
          { en: "Spain", es: "España", de: "Spanien", nl: "Spanje" },
          { en: "Brazil", es: "Brasil", de: "Brasilien", nl: "Brazilië" },
          { en: "Mexico", es: "México", de: "Mexiko", nl: "Mexico" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the largest type of whale?",
          es: "¿Cuál es el tipo de ballena más grande?",
          de: "Was ist die größte Walart?",
          nl: "Wat is de grootste soort walvis?"
        },
        options: [
          { en: "Blue whale", es: "Ballena azul", de: "Blauwal", nl: "Blauwe vinvis" },
          { en: "Sperm whale", es: "Cachalote", de: "Pottwal", nl: "Potvis" },
          { en: "Humpback whale", es: "Ballena jorobada", de: "Buckelwal", nl: "Bultrug" },
          { en: "Gray whale", es: "Ballena gris", de: "Grauwal", nl: "Grijze walvis" }
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
      },
      {
        question: {
          en: "How many degrees are in a circle?",
          es: "¿Cuántos grados hay en un círculo?",
          de: "Wie viele Grad hat ein Kreis?",
          nl: "Hoeveel graden heeft een cirkel?"
        },
        options: [
          { en: "360", es: "360", de: "360", nl: "360" },
          { en: "180", es: "180", de: "180", nl: "180" },
          { en: "90", es: "90", de: "90", nl: "90" },
          { en: "270", es: "270", de: "270", nl: "270" }
        ],
        correctIndex: 0
      }
    ],

    // Day 11 - August 11th
    day11: [
      {
        question: {
          en: "What is the name of the fairy tale character who lost her glass slipper?",
          es: "¿Cómo se llama el personaje de cuento de hadas que perdió su zapato de cristal?",
          de: "Wie heißt die Märchenfigur, die ihren gläsernen Schuh verlor?",
          nl: "Hoe heet het sprookjesfiguur dat haar glazen schoentje verloor?"
        },
        options: [
          { en: "Cinderella", es: "Cenicienta", de: "Aschenputtel", nl: "Assepoester" },
          { en: "Snow White", es: "Blancanieves", de: "Schneewittchen", nl: "Sneeuwwitje" },
          { en: "Sleeping Beauty", es: "Bella Durmiente", de: "Dornröschen", nl: "Doornroosje" },
          { en: "Little Red Riding Hood", es: "Caperucita Roja", de: "Rotkäppchen", nl: "Roodkapje" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which fruit is known as the 'king of fruits'?",
          es: "¿Qué fruta es conocida como el 'rey de las frutas'?",
          de: "Welche Frucht wird als 'König der Früchte' bezeichnet?",
          nl: "Welk fruit staat bekend als de 'koning van de vruchten'?"
        },
        options: [
          { en: "Durian", es: "Durian", de: "Durian", nl: "Doerian" },
          { en: "Mango", es: "Mango", de: "Mango", nl: "Mango" },
          { en: "Pineapple", es: "Piña", de: "Ananas", nl: "Ananas" },
          { en: "Apple", es: "Manzana", de: "Apfel", nl: "Appel" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the main language spoken in Brazil?",
          es: "¿Cuál es el idioma principal hablado en Brasil?",
          de: "Was ist die Hauptsprache in Brasilien?",
          nl: "Wat is de hoofdtaal die wordt gesproken in Brazilië?"
        },
        options: [
          { en: "Portuguese", es: "Portugués", de: "Portugiesisch", nl: "Portugees" },
          { en: "Spanish", es: "Español", de: "Spanisch", nl: "Spaans" },
          { en: "English", es: "Inglés", de: "Englisch", nl: "Engels" },
          { en: "French", es: "Francés", de: "Französisch", nl: "Frans" }
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
          en: "What is the freezing point of water in Celsius?",
          es: "¿Cuál es el punto de congelación del agua en grados Celsius?",
          de: "Was ist der Gefrierpunkt von Wasser in Celsius?",
          nl: "Wat is het vriespunt van water in Celsius?"
        },
        options: [
          { en: "0°C", es: "0°C", de: "0°C", nl: "0°C" },
          { en: "32°C", es: "32°C", de: "32°C", nl: "32°C" },
          { en: "100°C", es: "100°C", de: "100°C", nl: "100°C" },
          { en: "-10°C", es: "-10°C", de: "-10°C", nl: "-10°C" }
        ],
        correctIndex: 0
      }
    ],

    // Day 12 - August 12th
    day12: [
      {
        question: {
          en: "Which ancient wonder of the world was located in Alexandria?",
          es: "¿Cuál de las maravillas del mundo antiguo estaba ubicada en Alejandría?",
          de: "Welches antike Weltwunder befand sich in Alexandria?",
          nl: "Welk oud wereldwonder bevond zich in Alexandrië?"
        },
        options: [
          { en: "Lighthouse of Alexandria", es: "Faro de Alejandría", de: "Leuchtturm von Alexandria", nl: "Vuurtoren van Alexandrië" },
          { en: "Great Pyramid", es: "Gran Pirámide", de: "Große Pyramide", nl: "Grote Piramide" },
          { en: "Hanging Gardens", es: "Jardines Colgantes", de: "Hängende Gärten", nl: "Hangende Tuinen" },
          { en: "Colossus of Rhodes", es: "Coloso de Rodas", de: "Koloss von Rhodos", nl: "Kolossus van Rhodos" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do you call a baby kangaroo?",
          es: "¿Cómo se llama a un bebé canguro?",
          de: "Wie nennt man ein Känguru-Baby?",
          nl: "Hoe noem je een baby kangoeroe?"
        },
        options: [
          { en: "Joey", es: "Joey", de: "Joey", nl: "Joey" },
          { en: "Cub", es: "Cachorro", de: "Junge", nl: "Welp" },
          { en: "Kid", es: "Cabrito", de: "Kitz", nl: "Geitje" },
          { en: "Pup", es: "Cachorro", de: "Welpe", nl: "Pup" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which organ in the human body produces insulin?",
          es: "¿Qué órgano del cuerpo humano produce insulina?",
          de: "Welches Organ im menschlichen Körper produziert Insulin?",
          nl: "Welk orgaan in het menselijk lichaam produceert insuline?"
        },
        options: [
          { en: "Pancreas", es: "Páncreas", de: "Bauchspeicheldrüse", nl: "Alvleesklier" },
          { en: "Liver", es: "Hígado", de: "Leber", nl: "Lever" },
          { en: "Kidney", es: "Riñón", de: "Niere", nl: "Nier" },
          { en: "Heart", es: "Corazón", de: "Herz", nl: "Hart" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the capital of Thailand?",
          es: "¿Cuál es la capital de Tailandia?",
          de: "Was ist die Hauptstadt von Thailand?",
          nl: "Wat is de hoofdstad van Thailand?"
        },
        options: [
          { en: "Bangkok", es: "Bangkok", de: "Bangkok", nl: "Bangkok" },
          { en: "Chiang Mai", es: "Chiang Mai", de: "Chiang Mai", nl: "Chiang Mai" },
          { en: "Phuket", es: "Phuket", de: "Phuket", nl: "Phuket" },
          { en: "Pattaya", es: "Pattaya", de: "Pattaya", nl: "Pattaya" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many hours are there in a day?",
          es: "¿Cuántas horas hay en un día?",
          de: "Wie viele Stunden hat ein Tag?",
          nl: "Hoeveel uren zitten er in een dag?"
        },
        options: [
          { en: "24", es: "24", de: "24", nl: "24" },
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "36", es: "36", de: "36", nl: "36" },
          { en: "48", es: "48", de: "48", nl: "48" }
        ],
        correctIndex: 0
      }
    ],

    // Day 13 - August 13th
    day13: [
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
          { en: "Gd", es: "Gd", de: "Gd", nl: "Gd" },
          { en: "Ag", es: "Ag", de: "Ag", nl: "Ag" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which sport is known as 'America's pastime'?",
          es: "¿Qué deporte es conocido como el 'pasatiempo de América'?",
          de: "Welcher Sport wird als 'Amerikas Zeitvertreib' bezeichnet?",
          nl: "Welke sport staat bekend als 'Amerika's tijdverdrijf'?"
        },
        options: [
          { en: "Baseball", es: "Béisbol", de: "Baseball", nl: "Honkbal" },
          { en: "Football", es: "Fútbol Americano", de: "American Football", nl: "American Football" },
          { en: "Basketball", es: "Baloncesto", de: "Basketball", nl: "Basketbal" },
          { en: "Hockey", es: "Hockey", de: "Hockey", nl: "Hockey" }
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
          { en: "Lungs", es: "Pulmones", de: "Lungen", nl: "Longen" },
          { en: "Brain", es: "Cerebro", de: "Gehirn", nl: "Hersenen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which continent is the Sahara Desert located on?",
          es: "¿En qué continente se encuentra el desierto del Sahara?",
          de: "Auf welchem Kontinent liegt die Sahara-Wüste?",
          nl: "Op welk continent ligt de Sahara woestijn?"
        },
        options: [
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" },
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" },
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" },
          { en: "South America", es: "Sudamérica", de: "Südamerika", nl: "Zuid-Amerika" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do you call the study of stars and planets?",
          es: "¿Cómo se llama el estudio de las estrellas y los planetas?",
          de: "Wie nennt man das Studium von Sternen und Planeten?",
          nl: "Hoe noem je de studie van sterren en planeten?"
        },
        options: [
          { en: "Astronomy", es: "Astronomía", de: "Astronomie", nl: "Astronomie" },
          { en: "Astrology", es: "Astrología", de: "Astrologie", nl: "Astrologie" },
          { en: "Geology", es: "Geología", de: "Geologie", nl: "Geologie" },
          { en: "Biology", es: "Biología", de: "Biologie", nl: "Biologie" }
        ],
        correctIndex: 0
      }
    ],

    // Day 14 - August 14th
    day14: [
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
          { en: "Kangaroo", es: "Canguro", de: "Känguru", nl: "Kangoeroe" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which planet is known as the 'Red Planet'?",
          es: "¿Qué planeta es conocido como el 'Planeta Rojo'?",
          de: "Welcher Planet ist als der 'Rote Planet' bekannt?",
          nl: "Welke planeet staat bekend als de 'Rode Planeet'?"
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
          en: "What is the largest city in the United States?",
          es: "¿Cuál es la ciudad más grande de Estados Unidos?",
          de: "Was ist die größte Stadt in den Vereinigten Staaten?",
          nl: "Wat is de grootste stad van de Verenigde Staten?"
        },
        options: [
          { en: "New York City", es: "Nueva York", de: "New York City", nl: "New York City" },
          { en: "Los Angeles", es: "Los Ángeles", de: "Los Angeles", nl: "Los Angeles" },
          { en: "Chicago", es: "Chicago", de: "Chicago", nl: "Chicago" },
          { en: "Houston", es: "Houston", de: "Houston", nl: "Houston" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many bones are babies born with approximately?",
          es: "¿Con cuántos huesos nacen aproximadamente los bebés?",
          de: "Mit wie vielen Knochen werden Babys ungefähr geboren?",
          nl: "Met hoeveel botten worden baby's ongeveer geboren?"
        },
        options: [
          { en: "270", es: "270", de: "270", nl: "270" },
          { en: "206", es: "206", de: "206", nl: "206" },
          { en: "300", es: "300", de: "300", nl: "300" },
          { en: "150", es: "150", de: "150", nl: "150" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the unit of measurement for electrical resistance?",
          es: "¿Cuál es la unidad de medida para la resistencia eléctrica?",
          de: "Was ist die Maßeinheit für elektrischen Widerstand?",
          nl: "Wat is de meeteenheid voor elektrische weerstand?"
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

    // Day 15 - August 15th
    day15: [
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
          { en: "Vancouver", es: "Vancouver", de: "Vancouver", nl: "Vancouver" },
          { en: "Montreal", es: "Montreal", de: "Montreal", nl: "Montreal" }
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
          { en: "Hawk", es: "Halcón", de: "Falke", nl: "Havik" },
          { en: "Sparrow", es: "Gorrión", de: "Spatz", nl: "Mus" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the study of weather called?",
          es: "¿Cómo se llama el estudio del clima?",
          de: "Wie nennt man das Studium des Wetters?",
          nl: "Hoe noemt men de studie van het weer?"
        },
        options: [
          { en: "Meteorology", es: "Meteorología", de: "Meteorologie", nl: "Meteorologie" },
          { en: "Geology", es: "Geología", de: "Geologie", nl: "Geologie" },
          { en: "Biology", es: "Biología", de: "Biologie", nl: "Biologie" },
          { en: "Oceanography", es: "Oceanografía", de: "Ozeanographie", nl: "Oceanografie" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many sides does a hexagon have?",
          es: "¿Cuántos lados tiene un hexágono?",
          de: "Wie viele Seiten hat ein Hexagon?",
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
          en: "What is the largest bone in the human body?",
          es: "¿Cuál es el hueso más grande del cuerpo humano?",
          de: "Was ist der größte Knochen im menschlichen Körper?",
          nl: "Wat is het grootste bot in het menselijk lichaam?"
        },
        options: [
          { en: "Femur (thigh bone)", es: "Fémur (hueso del muslo)", de: "Oberschenkelknochen", nl: "Dijbeen" },
          { en: "Humerus (arm bone)", es: "Húmero (hueso del brazo)", de: "Oberarmknochen", nl: "Opperarm bot" },
          { en: "Tibia (shin bone)", es: "Tibia (hueso de la espinilla)", de: "Schienbein", nl: "Scheenbeen" },
          { en: "Skull", es: "Cráneo", de: "Schädel", nl: "Schedel" }
        ],
        correctIndex: 0
      }
    ],

    // Day 16 - August 16th: Back to School Prep
    day16: [
      {
        question: {
          en: "What do students typically need to buy before starting school?",
          es: "¿Qué necesitan comprar típicamente los estudiantes antes de comenzar la escuela?",
          de: "Was müssen Schüler normalerweise vor Schulbeginn kaufen?",
          nl: "Wat moeten studenten meestal kopen voordat ze naar school gaan?"
        },
        options: [
          { en: "School supplies", es: "Útiles escolares", de: "Schulsachen", nl: "Schoolspullen" },
          { en: "Winter clothes", es: "Ropa de invierno", de: "Winterkleidung", nl: "Winterkleding" },
          { en: "Garden tools", es: "Herramientas de jardín", de: "Gartenwerkzeuge", nl: "Tuingereedschap" },
          { en: "Swimming gear", es: "Equipo de natación", de: "Schwimmausrüstung", nl: "Zwemspullen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which scientist developed the theory of relativity?",
          es: "¿Qué científico desarrolló la teoría de la relatividad?",
          de: "Welcher Wissenschaftler entwickelte die Relativitätstheorie?",
          nl: "Welke wetenschapper ontwikkelde de relativiteitstheorie?"
        },
        options: [
          { en: "Albert Einstein", es: "Albert Einstein", de: "Albert Einstein", nl: "Albert Einstein" },
          { en: "Isaac Newton", es: "Isaac Newton", de: "Isaac Newton", nl: "Isaac Newton" },
          { en: "Galileo Galilei", es: "Galileo Galilei", de: "Galileo Galilei", nl: "Galileo Galilei" },
          { en: "Stephen Hawking", es: "Stephen Hawking", de: "Stephen Hawking", nl: "Stephen Hawking" }
        ],
        correctIndex: 0
      },
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
          en: "Which flower is typically associated with late summer?",
          es: "¿Qué flor se asocia típicamente con el final del verano?",
          de: "Welche Blume wird typischerweise mit dem Spätsommer verbunden?",
          nl: "Welke bloem wordt meestal geassocieerd met de late zomer?"
        },
        options: [
          { en: "Sunflower", es: "Girasol", de: "Sonnenblume", nl: "Zonnebloem" },
          { en: "Rose", es: "Rosa", de: "Rose", nl: "Roos" },
          { en: "Tulip", es: "Tulipán", de: "Tulpe", nl: "Tulp" },
          { en: "Daffodil", es: "Narciso", de: "Narzisse", nl: "Narcis" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the most common gas in Earth's atmosphere?",
          es: "¿Cuál es el gas más común en la atmósfera terrestre?",
          de: "Was ist das häufigste Gas in der Erdatmosphäre?",
          nl: "Wat is het meest voorkomende gas in de atmosfeer van de aarde?"
        },
        options: [
          { en: "Nitrogen", es: "Nitrógeno", de: "Stickstoff", nl: "Stikstof" },
          { en: "Oxygen", es: "Oxígeno", de: "Sauerstoff", nl: "Zuurstof" },
          { en: "Carbon dioxide", es: "Dióxido de carbono", de: "Kohlendioxid", nl: "Koolstofdioxide" },
          { en: "Helium", es: "Helio", de: "Helium", nl: "Helium" }
        ],
        correctIndex: 0
      }
    ],

    // Day 17 - August 17th: Ancient Civilizations
    day17: [
      {
        question: {
          en: "Which ancient civilization built the pyramids of Giza?",
          es: "¿Qué civilización antigua construyó las pirámides de Giza?",
          de: "Welche antike Zivilisation baute die Pyramiden von Gizeh?",
          nl: "Welke oude beschaving bouwde de piramides van Gizeh?"
        },
        options: [
          { en: "Ancient Egyptians", es: "Antiguos egipcios", de: "Alte Ägypter", nl: "Oude Egyptenaren" },
          { en: "Ancient Greeks", es: "Antiguos griegos", de: "Alte Griechen", nl: "Oude Grieken" },
          { en: "Romans", es: "Romanos", de: "Römer", nl: "Romeinen" },
          { en: "Babylonians", es: "Babilonios", de: "Babylonier", nl: "Babyloniërs" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the smallest prime number?",
          es: "¿Cuál es el número primo más pequeño?",
          de: "Was ist die kleinste Primzahl?",
          nl: "Wat is het kleinste priemgetal?"
        },
        options: [
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "1", es: "1", de: "1", nl: "1" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "0", es: "0", de: "0", nl: "0" }
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
          { en: "Europe", es: "Europa", de: "Europa", nl: "Europa" },
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" },
          { en: "South America", es: "Sudamérica", de: "Südamerika", nl: "Zuid-Amerika" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What type of animal is a dolphin?",
          es: "¿Qué tipo de animal es un delfín?",
          de: "Was für ein Tier ist ein Delfin?",
          nl: "Wat voor dier is een dolfijn?"
        },
        options: [
          { en: "Mammal", es: "Mamífero", de: "Säugetier", nl: "Zoogdier" },
          { en: "Fish", es: "Pez", de: "Fisch", nl: "Vis" },
          { en: "Reptile", es: "Reptil", de: "Reptil", nl: "Reptiel" },
          { en: "Bird", es: "Ave", de: "Vogel", nl: "Vogel" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What activity do many students do in late August?",
          es: "¿Qué actividad hacen muchos estudiantes a finales de agosto?",
          de: "Was machen viele Schüler Ende August?",
          nl: "Welke activiteit doen veel studenten eind augustus?"
        },
        options: [
          { en: "Start new school year", es: "Comenzar el nuevo año escolar", de: "Neues Schuljahr beginnen", nl: "Nieuw schooljaar beginnen" },
          { en: "Go ice skating", es: "Ir a patinar sobre hielo", de: "Schlittschuhlaufen gehen", nl: "Gaan schaatsen" },
          { en: "Plant spring flowers", es: "Plantar flores de primavera", de: "Frühlingsblumen pflanzen", nl: "Lentebloemen planten" },
          { en: "Build snowmen", es: "Hacer muñecos de nieve", de: "Schneemänner bauen", nl: "Sneeuwpoppen maken" }
        ],
        correctIndex: 0
      }
    ],

    // Day 18 - August 18th: Natural Sciences
    day18: [
      {
        question: {
          en: "What do you call the process when a caterpillar becomes a butterfly?",
          es: "¿Cómo se llama el proceso cuando una oruga se convierte en mariposa?",
          de: "Wie nennt man den Prozess, wenn eine Raupe zum Schmetterling wird?",
          nl: "Hoe noem je het proces waarbij een rups een vlinder wordt?"
        },
        options: [
          { en: "Metamorphosis", es: "Metamorfosis", de: "Metamorphose", nl: "Metamorfose" },
          { en: "Evolution", es: "Evolución", de: "Evolution", nl: "Evolutie" },
          { en: "Migration", es: "Migración", de: "Migration", nl: "Migratie" },
          { en: "Hibernation", es: "Hibernación", de: "Winterschlaf", nl: "Winterslaap" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which mountain range contains Mount Everest?",
          es: "¿Qué cordillera contiene el Monte Everest?",
          de: "In welchem Gebirge liegt der Mount Everest?",
          nl: "Welk gebergte bevat de Mount Everest?"
        },
        options: [
          { en: "Himalayas", es: "Himalayas", de: "Himalaya", nl: "Himalaya" },
          { en: "Alps", es: "Alpes", de: "Alpen", nl: "Alpen" },
          { en: "Rockies", es: "Montañas Rocosas", de: "Rocky Mountains", nl: "Rocky Mountains" },
          { en: "Andes", es: "Andes", de: "Anden", nl: "Andes" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the hardest mineral on Earth?",
          es: "¿Cuál es el mineral más duro de la Tierra?",
          de: "Was ist das härteste Mineral der Erde?",
          nl: "Wat is het hardste mineraal op aarde?"
        },
        options: [
          { en: "Diamond", es: "Diamante", de: "Diamant", nl: "Diamant" },
          { en: "Quartz", es: "Cuarzo", de: "Quarz", nl: "Kwarts" },
          { en: "Gold", es: "Oro", de: "Gold", nl: "Goud" },
          { en: "Iron", es: "Hierro", de: "Eisen", nl: "IJzer" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many hearts does an octopus have?",
          es: "¿Cuántos corazones tiene un pulpo?",
          de: "Wie viele Herzen hat ein Oktopus?",
          nl: "Hoeveel harten heeft een octopus?"
        },
        options: [
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "1", es: "1", de: "1", nl: "1" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "4", es: "4", de: "4", nl: "4" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What school subject studies past events and civilizations?",
          es: "¿Qué materia escolar estudia eventos pasados y civilizaciones?",
          de: "Welches Schulfach studiert vergangene Ereignisse und Zivilisationen?",
          nl: "Welk schoolvak bestudeert gebeurtenissen uit het verleden en beschavingen?"
        },
        options: [
          { en: "History", es: "Historia", de: "Geschichte", nl: "Geschiedenis" },
          { en: "Geography", es: "Geografía", de: "Geographie", nl: "Aardrijkskunde" },
          { en: "Mathematics", es: "Matemáticas", de: "Mathematik", nl: "Wiskunde" },
          { en: "Art", es: "Arte", de: "Kunst", nl: "Kunst" }
        ],
        correctIndex: 0
      }
    ],

    // Day 19 - August 19th: World Geography
    day19: [
      {
        question: {
          en: "Which is the longest river in the world?",
          es: "¿Cuál es el río más largo del mundo?",
          de: "Welcher ist der längste Fluss der Welt?",
          nl: "Welke is de langste rivier ter wereld?"
        },
        options: [
          { en: "Nile River", es: "Río Nilo", de: "Nil", nl: "Nijl" },
          { en: "Amazon River", es: "Río Amazonas", de: "Amazonas", nl: "Amazone" },
          { en: "Mississippi River", es: "Río Mississippi", de: "Mississippi", nl: "Mississippi" },
          { en: "Yangtze River", es: "Río Yangtsé", de: "Jangtse", nl: "Yangtze" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the basic unit of life?",
          es: "¿Cuál es la unidad básica de la vida?",
          de: "Was ist die Grundeinheit des Lebens?",
          nl: "Wat is de basiseenheid van het leven?"
        },
        options: [
          { en: "Cell", es: "Célula", de: "Zelle", nl: "Cel" },
          { en: "Atom", es: "Átomo", de: "Atom", nl: "Atoom" },
          { en: "Molecule", es: "Molécula", de: "Molekül", nl: "Molecuul" },
          { en: "Tissue", es: "Tejido", de: "Gewebe", nl: "Weefsel" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which country is famous for the Great Wall?",
          es: "¿Qué país es famoso por la Gran Muralla?",
          de: "Welches Land ist berühmt für die Große Mauer?",
          nl: "Welk land staat bekend om de Grote Muur?"
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
          en: "What type of rock is formed from cooled lava?",
          es: "¿Qué tipo de roca se forma a partir de lava enfriada?",
          de: "Welche Art von Gestein entsteht aus abgekühlter Lava?",
          nl: "Wat voor soort gesteente ontstaat uit afgekoelde lava?"
        },
        options: [
          { en: "Igneous rock", es: "Roca ígnea", de: "Erstarrungsgestein", nl: "Stollingsgesteente" },
          { en: "Sedimentary rock", es: "Roca sedimentaria", de: "Sedimentgestein", nl: "Sedimentair gesteente" },
          { en: "Metamorphic rock", es: "Roca metamórfica", de: "Metamorphes Gestein", nl: "Metamorf gesteente" },
          { en: "Limestone", es: "Piedra caliza", de: "Kalkstein", nl: "Kalksteen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do students usually carry their books in?",
          es: "¿En qué suelen llevar los estudiantes sus libros?",
          de: "Worin tragen Schüler normalerweise ihre Bücher?",
          nl: "Waarin dragen studenten gewoonlijk hun boeken?"
        },
        options: [
          { en: "Backpack", es: "Mochila", de: "Rucksack", nl: "Rugzak" },
          { en: "Suitcase", es: "Maleta", de: "Koffer", nl: "Koffer" },
          { en: "Shopping bag", es: "Bolsa de compras", de: "Einkaufstasche", nl: "Boodschappentas" },
          { en: "Toolbox", es: "Caja de herramientas", de: "Werkzeugkasten", nl: "Gereedschapskist" }
        ],
        correctIndex: 0
      }
    ],

    // Day 20 - August 20th: Arts and Literature
    day20: [
      {
        question: {
          en: "Who wrote the play 'Hamlet'?",
          es: "¿Quién escribió la obra 'Hamlet'?",
          de: "Wer schrieb das Stück 'Hamlet'?",
          nl: "Wie schreef het toneelstuk 'Hamlet'?"
        },
        options: [
          { en: "William Shakespeare", es: "William Shakespeare", de: "William Shakespeare", nl: "William Shakespeare" },
          { en: "Charles Dickens", es: "Charles Dickens", de: "Charles Dickens", nl: "Charles Dickens" },
          { en: "Oscar Wilde", es: "Oscar Wilde", de: "Oscar Wilde", nl: "Oscar Wilde" },
          { en: "Jane Austen", es: "Jane Austen", de: "Jane Austen", nl: "Jane Austen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the largest lake in the world?",
          es: "¿Cuál es el lago más grande del mundo?",
          de: "Was ist der größte See der Welt?",
          nl: "Wat is het grootste meer ter wereld?"
        },
        options: [
          { en: "Caspian Sea", es: "Mar Caspio", de: "Kaspisches Meer", nl: "Kaspische Zee" },
          { en: "Lake Superior", es: "Lago Superior", de: "Oberer See", nl: "Bovenmeer" },
          { en: "Lake Victoria", es: "Lago Victoria", de: "Victoriasee", nl: "Victoriameer" },
          { en: "Lake Baikal", es: "Lago Baikal", de: "Baikalsee", nl: "Baikalmeer" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the study of plants called?",
          es: "¿Cómo se llama el estudio de las plantas?",
          de: "Wie nennt man das Studium der Pflanzen?",
          nl: "Hoe noemt men de studie van planten?"
        },
        options: [
          { en: "Botany", es: "Botánica", de: "Botanik", nl: "Plantkunde" },
          { en: "Zoology", es: "Zoología", de: "Zoologie", nl: "Dierkunde" },
          { en: "Geology", es: "Geología", de: "Geologie", nl: "Geologie" },
          { en: "Chemistry", es: "Química", de: "Chemie", nl: "Scheikunde" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which instrument is Beethoven most famous for composing for?",
          es: "¿Para qué instrumento es más famoso Beethoven por componer?",
          de: "Für welches Instrument ist Beethoven am bekanntesten für seine Kompositionen?",
          nl: "Voor welk instrument is Beethoven het beroemdst voor zijn composities?"
        },
        options: [
          { en: "Piano", es: "Piano", de: "Klavier", nl: "Piano" },
          { en: "Violin", es: "Violín", de: "Geige", nl: "Viool" },
          { en: "Flute", es: "Flauta", de: "Flöte", nl: "Fluit" },
          { en: "Trumpet", es: "Trompeta", de: "Trompete", nl: "Trompet" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What season comes after summer?",
          es: "¿Qué estación viene después del verano?",
          de: "Welche Jahreszeit kommt nach dem Sommer?",
          nl: "Welk seizoen komt na de zomer?"
        },
        options: [
          { en: "Autumn/Fall", es: "Otoño", de: "Herbst", nl: "Herfst" },
          { en: "Winter", es: "Invierno", de: "Winter", nl: "Winter" },
          { en: "Spring", es: "Primavera", de: "Frühling", nl: "Lente" },
          { en: "Summer", es: "Verano", de: "Sommer", nl: "Zomer" }
        ],
        correctIndex: 0
      }
    ],

    // Day 21 - August 21st: Technology and Inventions
    day21: [
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
        correctIndex: 0
      },
      {
        question: {
          en: "What is the currency of Japan?",
          es: "¿Cuál es la moneda de Japón?",
          de: "Was ist die Währung Japans?",
          nl: "Wat is de munteenheid van Japan?"
        },
        options: [
          { en: "Yen", es: "Yen", de: "Yen", nl: "Yen" },
          { en: "Won", es: "Won", de: "Won", nl: "Won" },
          { en: "Yuan", es: "Yuan", de: "Yuan", nl: "Yuan" },
          { en: "Rupee", es: "Rupia", de: "Rupie", nl: "Roepie" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which blood type is known as the universal donor?",
          es: "¿Qué tipo de sangre es conocido como el donante universal?",
          de: "Welche Blutgruppe ist als Universalspender bekannt?",
          nl: "Welke bloedgroep staat bekend als de universele donor?"
        },
        options: [
          { en: "O negative", es: "O negativo", de: "0 negativ", nl: "0 negatief" },
          { en: "A positive", es: "A positivo", de: "A positiv", nl: "A positief" },
          { en: "B negative", es: "B negativo", de: "B negativ", nl: "B negatief" },
          { en: "AB positive", es: "AB positivo", de: "AB positiv", nl: "AB positief" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do you call a group of fish?",
          es: "¿Cómo se llama un grupo de peces?",
          de: "Wie nennt man eine Gruppe von Fischen?",
          nl: "Hoe noem je een groep vissen?"
        },
        options: [
          { en: "School", es: "Cardumen", de: "Schwarm", nl: "School" },
          { en: "Flock", es: "Bandada", de: "Herde", nl: "Kudde" },
          { en: "Pack", es: "Manada", de: "Rudel", nl: "Roedel" },
          { en: "Herd", es: "Rebaño", de: "Herde", nl: "Kudde" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do many students feel when starting a new school year?",
          es: "¿Qué sienten muchos estudiantes al comenzar un nuevo año escolar?",
          de: "Was fühlen viele Schüler beim Beginn eines neuen Schuljahres?",
          nl: "Wat voelen veel studenten bij het begin van een nieuw schooljaar?"
        },
        options: [
          { en: "Excited and nervous", es: "Emocionados y nerviosos", de: "Aufgeregt und nervös", nl: "Opgewonden en zenuwachtig" },
          { en: "Bored and tired", es: "Aburridos y cansados", de: "Gelangweilt und müde", nl: "Verveeld en moe" },
          { en: "Angry and sad", es: "Enojados y tristes", de: "Wütend und traurig", nl: "Boos en verdrietig" },
          { en: "Cold and hungry", es: "Fríos y hambrientos", de: "Kalt und hungrig", nl: "Koud en hongerig" }
        ],
        correctIndex: 0
      }
    ],

    // Day 22 - August 22nd: Sports and Olympics
    day22: [
      {
        question: {
          en: "How many players are on a soccer team on the field at one time?",
          es: "¿Cuántos jugadores hay en un equipo de fútbol en el campo al mismo tiempo?",
          de: "Wie viele Spieler stehen bei einem Fußballteam gleichzeitig auf dem Platz?",
          nl: "Hoeveel spelers staan er van een voetbalteam tegelijk op het veld?"
        },
        options: [
          { en: "11", es: "11", de: "11", nl: "11" },
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "9", es: "9", de: "9", nl: "9" },
          { en: "12", es: "12", de: "12", nl: "12" }
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
          en: "Which is the tallest mountain in North America?",
          es: "¿Cuál es la montaña más alta de América del Norte?",
          de: "Welcher ist der höchste Berg in Nordamerika?",
          nl: "Welke is de hoogste berg in Noord-Amerika?"
        },
        options: [
          { en: "Mount McKinley (Denali)", es: "Monte McKinley (Denali)", de: "Mount McKinley (Denali)", nl: "Mount McKinley (Denali)" },
          { en: "Mount Whitney", es: "Monte Whitney", de: "Mount Whitney", nl: "Mount Whitney" },
          { en: "Mount Washington", es: "Monte Washington", de: "Mount Washington", nl: "Mount Washington" },
          { en: "Mount Rushmore", es: "Monte Rushmore", de: "Mount Rushmore", nl: "Mount Rushmore" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the largest organ of the human body?",
          es: "¿Cuál es el órgano más grande del cuerpo humano?",
          de: "Was ist das größte Organ des menschlichen Körpers?",
          nl: "Wat is het grootste orgaan van het menselijk lichaam?"
        },
        options: [
          { en: "Skin", es: "Piel", de: "Haut", nl: "Huid" },
          { en: "Brain", es: "Cerebro", de: "Gehirn", nl: "Hersenen" },
          { en: "Heart", es: "Corazón", de: "Herz", nl: "Hart" },
          { en: "Liver", es: "Hígado", de: "Leber", nl: "Lever" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What sport is played at Wimbledon?",
          es: "¿Qué deporte se juega en Wimbledon?",
          de: "Welcher Sport wird in Wimbledon gespielt?",
          nl: "Welke sport wordt gespeeld in Wimbledon?"
        },
        options: [
          { en: "Tennis", es: "Tenis", de: "Tennis", nl: "Tennis" },
          { en: "Golf", es: "Golf", de: "Golf", nl: "Golf" },
          { en: "Cricket", es: "Cricket", de: "Cricket", nl: "Cricket" },
          { en: "Rugby", es: "Rugby", de: "Rugby", nl: "Rugby" }
        ],
        correctIndex: 0
      }
    ],

    // Day 23 - August 23rd: Food and Cooking
    day23: [
      {
        question: {
          en: "Which fruit is used to make guacamole?",
          es: "¿Qué fruta se usa para hacer guacamole?",
          de: "Welche Frucht wird für Guacamole verwendet?",
          nl: "Welke vrucht wordt gebruikt om guacamole te maken?"
        },
        options: [
          { en: "Avocado", es: "Aguacate", de: "Avocado", nl: "Avocado" },
          { en: "Tomato", es: "Tomate", de: "Tomate", nl: "Tomaat" },
          { en: "Lime", es: "Lima", de: "Limette", nl: "Limoen" },
          { en: "Onion", es: "Cebolla", de: "Zwiebel", nl: "Ui" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the speed of light in vacuum?",
          es: "¿Cuál es la velocidad de la luz en el vacío?",
          de: "Was ist die Lichtgeschwindigkeit im Vakuum?",
          nl: "Wat is de lichtsnelheid in vacuüm?"
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
          en: "Which country is famous for pasta and pizza?",
          es: "¿Qué país es famoso por la pasta y la pizza?",
          de: "Welches Land ist berühmt für Pasta und Pizza?",
          nl: "Welk land staat bekend om pasta en pizza?"
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
          en: "What is the main ingredient in bread?",
          es: "¿Cuál es el ingrediente principal del pan?",
          de: "Was ist die Hauptzutat in Brot?",
          nl: "Wat is het hoofdingrediënt in brood?"
        },
        options: [
          { en: "Flour", es: "Harina", de: "Mehl", nl: "Meel" },
          { en: "Sugar", es: "Azúcar", de: "Zucker", nl: "Suiker" },
          { en: "Salt", es: "Sal", de: "Salz", nl: "Zout" },
          { en: "Butter", es: "Mantequilla", de: "Butter", nl: "Boter" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do students often pack for school lunch?",
          es: "¿Qué suelen empacar los estudiantes para el almuerzo escolar?",
          de: "Was packen Schüler oft für das Schulessen ein?",
          nl: "Wat pakken studenten vaak in voor schoollunch?"
        },
        options: [
          { en: "Sandwiches", es: "Sándwiches", de: "Sandwiches", nl: "Boterhammen" },
          { en: "Ice cream", es: "Helado", de: "Eiscreme", nl: "IJs" },
          { en: "Hot soup", es: "Sopa caliente", de: "Heiße Suppe", nl: "Warme soep" },
          { en: "Birthday cake", es: "Pastel de cumpleaños", de: "Geburtstagskuchen", nl: "Verjaardagstaart" }
        ],
        correctIndex: 0
      }
    ],

    // Day 24 - August 24th: Ocean and Marine Life
    day24: [
      {
        question: {
          en: "What is the largest ocean on Earth?",
          es: "¿Cuál es el océano más grande de la Tierra?",
          de: "Was ist der größte Ozean der Erde?",
          nl: "Wat is de grootste oceaan op aarde?"
        },
        options: [
          { en: "Pacific Ocean", es: "Océano Pacífico", de: "Pazifischer Ozean", nl: "Stille Oceaan" },
          { en: "Atlantic Ocean", es: "Océano Atlántico", de: "Atlantischer Ozean", nl: "Atlantische Oceaan" },
          { en: "Indian Ocean", es: "Océano Índico", de: "Indischer Ozean", nl: "Indische Oceaan" },
          { en: "Arctic Ocean", es: "Océano Ártico", de: "Arktischer Ozean", nl: "Arctische Oceaan" }
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
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "2", es: "2", de: "2", nl: "2" }
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
          { en: "Octopus", es: "Pulpo", de: "Oktopus", nl: "Octopus" },
          { en: "Jellyfish", es: "Medusa", de: "Qualle", nl: "Kwal" },
          { en: "Starfish", es: "Estrella de mar", de: "Seestern", nl: "Zeester" },
          { en: "Crab", es: "Cangrejo", de: "Krabbe", nl: "Krab" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the deepest part of the ocean called?",
          es: "¿Cómo se llama la parte más profunda del océano?",
          de: "Wie heißt der tiefste Teil des Ozeans?",
          nl: "Hoe heet het diepste deel van de oceaan?"
        },
        options: [
          { en: "Mariana Trench", es: "Fosa de las Marianas", de: "Marianengraben", nl: "Marianentrog" },
          { en: "Pacific Ridge", es: "Dorsal del Pacífico", de: "Pazifikrücken", nl: "Pacifische Rug" },
          { en: "Bermuda Triangle", es: "Triángulo de las Bermudas", de: "Bermudadreieck", nl: "Bermudadriehoek" },
          { en: "Atlantic Basin", es: "Cuenca Atlántica", de: "Atlantikbecken", nl: "Atlantisch Bekken" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do teachers often give students at the beginning of the school year?",
          es: "¿Qué suelen dar los maestros a los estudiantes al comienzo del año escolar?",
          de: "Was geben Lehrer den Schülern oft zu Beginn des Schuljahres?",
          nl: "Wat geven leraren vaak aan studenten aan het begin van het schooljaar?"
        },
        options: [
          { en: "Class syllabus", es: "Programa de clases", de: "Lehrplan", nl: "Lesrooster" },
          { en: "Christmas gifts", es: "Regalos de Navidad", de: "Weihnachtsgeschenke", nl: "Kerstcadeaus" },
          { en: "Summer homework", es: "Tarea de verano", de: "Sommerhausaufgaben", nl: "Zomerhuiswerk" },
          { en: "Snow boots", es: "Botas de nieve", de: "Schneestiefel", nl: "Sneeuwlaarzen" }
        ],
        correctIndex: 0
      }
    ],

    // Day 25 - August 25th: Space and Astronomy
    day25: [
      {
        question: {
          en: "Which planet is known for its beautiful rings?",
          es: "¿Qué planeta es conocido por sus hermosos anillos?",
          de: "Welcher Planet ist für seine schönen Ringe bekannt?",
          nl: "Welke planeet staat bekend om zijn prachtige ringen?"
        },
        options: [
          { en: "Saturn", es: "Saturno", de: "Saturn", nl: "Saturnus" },
          { en: "Jupiter", es: "Júpiter", de: "Jupiter", nl: "Jupiter" },
          { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" },
          { en: "Venus", es: "Venus", de: "Venus", nl: "Venus" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "In which year did humans first land on the Moon?",
          es: "¿En qué año llegaron los humanos por primera vez a la Luna?",
          de: "In welchem Jahr landeten Menschen zum ersten Mal auf dem Mond?",
          nl: "In welk jaar landen mensen voor het eerst op de maan?"
        },
        options: [
          { en: "1969", es: "1969", de: "1969", nl: "1969" },
          { en: "1967", es: "1967", de: "1967", nl: "1967" },
          { en: "1971", es: "1971", de: "1971", nl: "1971" },
          { en: "1965", es: "1965", de: "1965", nl: "1965" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How long does it take Earth to orbit the Sun?",
          es: "¿Cuánto tiempo le toma a la Tierra orbitar el Sol?",
          de: "Wie lange braucht die Erde, um die Sonne zu umkreisen?",
          nl: "Hoe lang duurt het voordat de aarde om de zon draait?"
        },
        options: [
          { en: "365 days (1 year)", es: "365 días (1 año)", de: "365 Tage (1 Jahr)", nl: "365 dagen (1 jaar)" },
          { en: "30 days (1 month)", es: "30 días (1 mes)", de: "30 Tage (1 Monat)", nl: "30 dagen (1 maand)" },
          { en: "24 hours (1 day)", es: "24 horas (1 día)", de: "24 Stunden (1 Tag)", nl: "24 uur (1 dag)" },
          { en: "7 days (1 week)", es: "7 días (1 semana)", de: "7 Tage (1 Woche)", nl: "7 dagen (1 week)" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the name of our galaxy?",
          es: "¿Cuál es el nombre de nuestra galaxia?",
          de: "Wie heißt unsere Galaxie?",
          nl: "Hoe heet onze melkweg?"
        },
        options: [
          { en: "Milky Way", es: "Vía Láctea", de: "Milchstraße", nl: "Melkweg" },
          { en: "Andromeda", es: "Andrómeda", de: "Andromeda", nl: "Andromeda" },
          { en: "Solar System", es: "Sistema Solar", de: "Sonnensystem", nl: "Zonnestelsel" },
          { en: "Big Dipper", es: "Osa Mayor", de: "Großer Wagen", nl: "Grote Beer" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do students typically do before the first day of school?",
          es: "¿Qué hacen típicamente los estudiantes antes del primer día de clases?",
          de: "Was machen Schüler normalerweise vor dem ersten Schultag?",
          nl: "Wat doen studenten meestal voor de eerste schooldag?"
        },
        options: [
          { en: "Shop for school supplies", es: "Comprar útiles escolares", de: "Schulsachen einkaufen", nl: "Schoolspullen kopen" },
          { en: "Plant a garden", es: "Plantar un jardín", de: "Einen Garten anlegen", nl: "Een tuin planten" },
          { en: "Go skiing", es: "Ir a esquiar", de: "Ski fahren gehen", nl: "Gaan skiën" },
          { en: "Build a treehouse", es: "Construir una casa del árbol", de: "Ein Baumhaus bauen", nl: "Een boomhut bouwen" }
        ],
        correctIndex: 0
      }
    ],

    // Day 26 - August 26th: Mathematics and Numbers
    day26: [
      {
        question: {
          en: "What is 7 × 8?",
          es: "¿Cuánto es 7 × 8?",
          de: "Was ist 7 × 8?",
          nl: "Wat is 7 × 8?"
        },
        options: [
          { en: "56", es: "56", de: "56", nl: "56" },
          { en: "48", es: "48", de: "48", nl: "48" },
          { en: "54", es: "54", de: "54", nl: "54" },
          { en: "64", es: "64", de: "64", nl: "64" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What shape has four equal sides?",
          es: "¿Qué forma tiene cuatro lados iguales?",
          de: "Welche Form hat vier gleiche Seiten?",
          nl: "Welke vorm heeft vier gelijke zijden?"
        },
        options: [
          { en: "Square", es: "Cuadrado", de: "Quadrat", nl: "Vierkant" },
          { en: "Triangle", es: "Triángulo", de: "Dreieck", nl: "Driehoek" },
          { en: "Circle", es: "Círculo", de: "Kreis", nl: "Cirkel" },
          { en: "Rectangle", es: "Rectángulo", de: "Rechteck", nl: "Rechthoek" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which ancient civilization built the Colosseum?",
          es: "¿Qué civilización antigua construyó el Coliseo?",
          de: "Welche antike Zivilisation baute das Kolosseum?",
          nl: "Welke oude beschaving bouwde het Colosseum?"
        },
        options: [
          { en: "Romans", es: "Romanos", de: "Römer", nl: "Romeinen" },
          { en: "Greeks", es: "Griegos", de: "Griechen", nl: "Grieken" },
          { en: "Egyptians", es: "Egipcios", de: "Ägypter", nl: "Egyptenaren" },
          { en: "Vikings", es: "Vikingos", de: "Wikinger", nl: "Vikingen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the square root of 64?",
          es: "¿Cuál es la raíz cuadrada de 64?",
          de: "Was ist die Quadratwurzel von 64?",
          nl: "Wat is de vierkantswortel van 64?"
        },
        options: [
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "9", es: "9", de: "9", nl: "9" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What subject involves learning about numbers and equations?",
          es: "¿Qué materia involucra aprender sobre números y ecuaciones?",
          de: "Welches Fach beschäftigt sich mit Zahlen und Gleichungen?",
          nl: "Welk vak houdt zich bezig met het leren van getallen en vergelijkingen?"
        },
        options: [
          { en: "Mathematics", es: "Matemáticas", de: "Mathematik", nl: "Wiskunde" },
          { en: "Art", es: "Arte", de: "Kunst", nl: "Kunst" },
          { en: "Physical Education", es: "Educación Física", de: "Sport", nl: "Lichamelijke Opvoeding" },
          { en: "Music", es: "Música", de: "Musik", nl: "Muziek" }
        ],
        correctIndex: 0
      }
    ],

    // Day 27 - August 27th: Animals Around the World
    day27: [
      {
        question: {
          en: "Which animal is native to Australia and carries its baby in a pouch?",
          es: "¿Qué animal es nativo de Australia y lleva a su bebé en una bolsa?",
          de: "Welches Tier stammt aus Australien und trägt sein Baby in einem Beutel?",
          nl: "Welk dier is inheems in Australië en draagt zijn baby in een buidel?"
        },
        options: [
          { en: "Kangaroo", es: "Canguro", de: "Känguru", nl: "Kangoeroe" },
          { en: "Koala", es: "Koala", de: "Koala", nl: "Koala" },
          { en: "Wombat", es: "Wombat", de: "Wombat", nl: "Wombat" },
          { en: "Platypus", es: "Ornitorrinco", de: "Schnabeltier", nl: "Vogelbekdier" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the tallest animal in the world?",
          es: "¿Cuál es el animal más alto del mundo?",
          de: "Was ist das größte Tier der Welt?",
          nl: "Wat is het langste dier ter wereld?"
        },
        options: [
          { en: "Giraffe", es: "Jirafa", de: "Giraffe", nl: "Giraf" },
          { en: "Elephant", es: "Elefante", de: "Elefant", nl: "Olifant" },
          { en: "Ostrich", es: "Avestruz", de: "Strauß", nl: "Struisvogel" },
          { en: "Horse", es: "Caballo", de: "Pferd", nl: "Paard" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which bird is a symbol of peace?",
          es: "¿Qué ave es un símbolo de paz?",
          de: "Welcher Vogel ist ein Symbol des Friedens?",
          nl: "Welke vogel is een symbool van vrede?"
        },
        options: [
          { en: "Dove", es: "Paloma", de: "Taube", nl: "Duif" },
          { en: "Eagle", es: "Águila", de: "Adler", nl: "Adelaar" },
          { en: "Owl", es: "Búho", de: "Eule", nl: "Uil" },
          { en: "Robin", es: "Petirrojo", de: "Rotkehlchen", nl: "Roodborstje" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do you call a baby cat?",
          es: "¿Cómo se llama un bebé gato?",
          de: "Wie nennt man ein Baby-Kätzchen?",
          nl: "Hoe noem je een baby kat?"
        },
        options: [
          { en: "Kitten", es: "Gatito", de: "Kätzchen", nl: "Kitten" },
          { en: "Puppy", es: "Cachorro", de: "Welpe", nl: "Puppy" },
          { en: "Cub", es: "Cachorro", de: "Junge", nl: "Welp" },
          { en: "Chick", es: "Pollito", de: "Küken", nl: "Kuiken" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do students often need to wake up earlier for when school starts?",
          es: "¿Para qué suelen necesitar despertarse más temprano los estudiantes cuando comienza la escuela?",
          de: "Wofür müssen Schüler oft früher aufstehen, wenn die Schule beginnt?",
          nl: "Waarvoor moeten studenten vaak eerder wakker worden als school begint?"
        },
        options: [
          { en: "School bus", es: "Autobús escolar", de: "Schulbus", nl: "Schoolbus" },
          { en: "Late night TV", es: "TV nocturna", de: "Spätabend-TV", nl: "Late avond TV" },
          { en: "Afternoon nap", es: "Siesta", de: "Nachmittagsschlaf", nl: "Middagslaapje" },
          { en: "Evening dinner", es: "Cena", de: "Abendessen", nl: "Avondeten" }
        ],
        correctIndex: 0
      }
    ],

    // Day 28 - August 28th: Weather and Climate
    day28: [
      {
        question: {
          en: "What weather phenomenon is characterized by rotating winds?",
          es: "¿Qué fenómeno meteorológico se caracteriza por vientos giratorios?",
          de: "Welches Wetterphänomen ist durch rotierende Winde gekennzeichnet?",
          nl: "Welk weerfenomeen wordt gekenmerkt door draaiende winden?"
        },
        options: [
          { en: "Tornado", es: "Tornado", de: "Tornado", nl: "Tornado" },
          { en: "Rainbow", es: "Arcoíris", de: "Regenbogen", nl: "Regenboog" },
          { en: "Fog", es: "Niebla", de: "Nebel", nl: "Mist" },
          { en: "Snow", es: "Nieve", de: "Schnee", nl: "Sneeuw" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What causes thunder?",
          es: "¿Qué causa el trueno?",
          de: "Was verursacht Donner?",
          nl: "Wat veroorzaakt donder?"
        },
        options: [
          { en: "Lightning", es: "Rayo", de: "Blitz", nl: "Bliksem" },
          { en: "Rain", es: "Lluvia", de: "Regen", nl: "Regen" },
          { en: "Wind", es: "Viento", de: "Wind", nl: "Wind" },
          { en: "Clouds", es: "Nubes", de: "Wolken", nl: "Wolken" }
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
          { en: "Telescope", es: "Telescopio", de: "Teleskop", nl: "Telescoop" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What type of cloud is fluffy and white?",
          es: "¿Qué tipo de nube es esponjosa y blanca?",
          de: "Welche Art von Wolke ist flauschig und weiß?",
          nl: "Wat voor soort wolk is pluizig en wit?"
        },
        options: [
          { en: "Cumulus", es: "Cúmulo", de: "Cumulus", nl: "Cumulus" },
          { en: "Stratus", es: "Estrato", de: "Stratus", nl: "Stratus" },
          { en: "Cirrus", es: "Cirro", de: "Cirrus", nl: "Cirrus" },
          { en: "Nimbus", es: "Nimbo", de: "Nimbus", nl: "Nimbus" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What season is ending as August comes to a close?",
          es: "¿Qué estación está terminando cuando agosto llega a su fin?",
          de: "Welche Jahreszeit geht zu Ende, wenn August zu Ende geht?",
          nl: "Welk seizoen eindigt als augustus ten einde loopt?"
        },
        options: [
          { en: "Summer", es: "Verano", de: "Sommer", nl: "Zomer" },
          { en: "Winter", es: "Invierno", de: "Winter", nl: "Winter" },
          { en: "Spring", es: "Primavera", de: "Frühling", nl: "Lente" },
          { en: "Autumn", es: "Otoño", de: "Herbst", nl: "Herfst" }
        ],
        correctIndex: 0
      }
    ],

    // Day 29 - August 29th: Transportation
    day29: [
      {
        question: {
          en: "What vehicle travels on tracks and carries many passengers?",
          es: "¿Qué vehículo viaja sobre rieles y transporta muchos pasajeros?",
          de: "Welches Fahrzeug fährt auf Schienen und befördert viele Passagiere?",
          nl: "Welk voertuig rijdt op rails en vervoert veel passagiers?"
        },
        options: [
          { en: "Train", es: "Tren", de: "Zug", nl: "Trein" },
          { en: "Car", es: "Coche", de: "Auto", nl: "Auto" },
          { en: "Bicycle", es: "Bicicleta", de: "Fahrrad", nl: "Fiets" },
          { en: "Boat", es: "Barco", de: "Boot", nl: "Boot" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do airplanes use to fly?",
          es: "¿Qué usan los aviones para volar?",
          de: "Was benutzen Flugzeuge zum Fliegen?",
          nl: "Wat gebruiken vliegtuigen om te vliegen?"
        },
        options: [
          { en: "Wings", es: "Alas", de: "Flügel", nl: "Vleugels" },
          { en: "Wheels", es: "Ruedas", de: "Räder", nl: "Wielen" },
          { en: "Sails", es: "Velas", de: "Segel", nl: "Zeilen" },
          { en: "Propellers only", es: "Solo hélices", de: "Nur Propeller", nl: "Alleen propellers" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which invention by the Wright brothers changed transportation?",
          es: "¿Qué invención de los hermanos Wright cambió el transporte?",
          de: "Welche Erfindung der Brüder Wright veränderte den Transport?",
          nl: "Welke uitvinding van de gebroeders Wright veranderde het transport?"
        },
        options: [
          { en: "Airplane", es: "Avión", de: "Flugzeug", nl: "Vliegtuig" },
          { en: "Car", es: "Coche", de: "Auto", nl: "Auto" },
          { en: "Train", es: "Tren", de: "Zug", nl: "Trein" },
          { en: "Bicycle", es: "Bicicleta", de: "Fahrrad", nl: "Fiets" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the fastest way to travel across an ocean?",
          es: "¿Cuál es la forma más rápida de viajar a través de un océano?",
          de: "Was ist der schnellste Weg, um über einen Ozean zu reisen?",
          nl: "Wat is de snelste manier om over een oceaan te reizen?"
        },
        options: [
          { en: "Airplane", es: "Avión", de: "Flugzeug", nl: "Vliegtuig" },
          { en: "Ship", es: "Barco", de: "Schiff", nl: "Schip" },
          { en: "Swimming", es: "Nadar", de: "Schwimmen", nl: "Zwemmen" },
          { en: "Submarine", es: "Submarino", de: "U-Boot", nl: "Onderzeeër" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How do most students get to school?",
          es: "¿Cómo llegan la mayoría de los estudiantes a la escuela?",
          de: "Wie kommen die meisten Schüler zur Schule?",
          nl: "Hoe komen de meeste studenten op school?"
        },
        options: [
          { en: "School bus or car", es: "Autobús escolar o coche", de: "Schulbus oder Auto", nl: "Schoolbus of auto" },
          { en: "Helicopter", es: "Helicóptero", de: "Hubschrauber", nl: "Helikopter" },
          { en: "Boat", es: "Barco", de: "Boot", nl: "Boot" },
          { en: "Hot air balloon", es: "Globo aerostático", de: "Heißluftballon", nl: "Luchtballon" }
        ],
        correctIndex: 0
      }
    ],

    // Day 30 - August 30th: Art and Creativity
    day30: [
      {
        question: {
          en: "What are the three primary colors?",
          es: "¿Cuáles son los tres colores primarios?",
          de: "Was sind die drei Grundfarben?",
          nl: "Wat zijn de drie primaire kleuren?"
        },
        options: [
          { en: "Red, blue, yellow", es: "Rojo, azul, amarillo", de: "Rot, blau, gelb", nl: "Rood, blauw, geel" },
          { en: "Green, purple, orange", es: "Verde, púrpura, naranja", de: "Grün, lila, orange", nl: "Groen, paars, oranje" },
          { en: "Black, white, gray", es: "Negro, blanco, gris", de: "Schwarz, weiß, grau", nl: "Zwart, wit, grijs" },
          { en: "Pink, brown, silver", es: "Rosa, marrón, plateado", de: "Rosa, braun, silber", nl: "Roze, bruin, zilver" }
        ],
        correctIndex: 0
      },
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
          en: "What tool is used for sculpting clay?",
          es: "¿Qué herramienta se usa para esculpir arcilla?",
          de: "Welches Werkzeug wird zum Modellieren von Ton verwendet?",
          nl: "Welk gereedschap wordt gebruikt om klei te beeldhouwen?"
        },
        options: [
          { en: "Sculpting tools/hands", es: "Herramientas de escultura/manos", de: "Modellierwerkzeuge/Hände", nl: "Beeldhouwgereedschap/handen" },
          { en: "Paintbrush", es: "Pincel", de: "Pinsel", nl: "Penseel" },
          { en: "Scissors", es: "Tijeras", de: "Schere", nl: "Schaar" },
          { en: "Ruler", es: "Regla", de: "Lineal", nl: "Liniaal" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is a painting on a wall called?",
          es: "¿Cómo se llama una pintura en una pared?",
          de: "Wie nennt man ein Gemälde an einer Wand?",
          nl: "Hoe noem je een schildering op een muur?"
        },
        options: [
          { en: "Mural", es: "Mural", de: "Wandbild", nl: "Muurschildering" },
          { en: "Portrait", es: "Retrato", de: "Porträt", nl: "Portret" },
          { en: "Landscape", es: "Paisaje", de: "Landschaft", nl: "Landschap" },
          { en: "Still life", es: "Naturaleza muerta", de: "Stilleben", nl: "Stilleven" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What creative subject do students often take in school?",
          es: "¿Qué materia creativa suelen tomar los estudiantes en la escuela?",
          de: "Welches kreative Fach nehmen Schüler oft in der Schule?",
          nl: "Welk creatief vak volgen studenten vaak op school?"
        },
        options: [
          { en: "Art class", es: "Clase de arte", de: "Kunstunterricht", nl: "Kunstles" },
          { en: "Mathematics", es: "Matemáticas", de: "Mathematik", nl: "Wiskunde" },
          { en: "Science", es: "Ciencias", de: "Naturwissenschaften", nl: "Natuurwetenschappen" },
          { en: "Geography", es: "Geografía", de: "Geographie", nl: "Aardrijkskunde" }
        ],
        correctIndex: 0
      }
    ],

    // Day 31 - August 31st: End of Summer
    day31: [
      {
        question: {
          en: "What happens on August 31st?",
          es: "¿Qué pasa el 31 de agosto?",
          de: "Was passiert am 31. August?",
          nl: "Wat gebeurt er op 31 augustus?"
        },
        options: [
          { en: "Last day of August", es: "Último día de agosto", de: "Letzter Tag des August", nl: "Laatste dag van augustus" },
          { en: "First day of spring", es: "Primer día de primavera", de: "Erster Frühlingstag", nl: "Eerste dag van de lente" },
          { en: "Christmas Day", es: "Día de Navidad", de: "Weihnachtstag", nl: "Kerstdag" },
          { en: "New Year's Day", es: "Día de Año Nuevo", de: "Neujahrstag", nl: "Nieuwjaarsdag" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many days are there in August?",
          es: "¿Cuántos días hay en agosto?",
          de: "Wie viele Tage hat der August?",
          nl: "Hoeveel dagen heeft augustus?"
        },
        options: [
          { en: "31", es: "31", de: "31", nl: "31" },
          { en: "30", es: "30", de: "30", nl: "30" },
          { en: "28", es: "28", de: "28", nl: "28" },
          { en: "32", es: "32", de: "32", nl: "32" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What month comes after August?",
          es: "¿Qué mes viene después de agosto?",
          de: "Welcher Monat kommt nach August?",
          nl: "Welke maand komt na augustus?"
        },
        options: [
          { en: "September", es: "Septiembre", de: "September", nl: "September" },
          { en: "July", es: "Julio", de: "Juli", nl: "Juli" },
          { en: "October", es: "Octubre", de: "Oktober", nl: "Oktober" },
          { en: "June", es: "Junio", de: "Juni", nl: "Juni" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do many families do at the end of summer?",
          es: "¿Qué hacen muchas familias al final del verano?",
          de: "Was machen viele Familien am Ende des Sommers?",
          nl: "Wat doen veel families aan het einde van de zomer?"
        },
        options: [
          { en: "Prepare for school", es: "Prepararse para la escuela", de: "Sich auf die Schule vorbereiten", nl: "Zich voorbereiden op school" },
          { en: "Plant winter crops", es: "Plantar cultivos de invierno", de: "Winterkulturen pflanzen", nl: "Wintergewassen planten" },
          { en: "Go ice fishing", es: "Ir a pescar en hielo", de: "Eisfischen gehen", nl: "Gaan ijsvissen" },
          { en: "Build snowmen", es: "Hacer muñecos de nieve", de: "Schneemänner bauen", nl: "Sneeuwpoppen maken" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What feeling might students have about starting a new school year?",
          es: "¿Qué sentimiento podrían tener los estudiantes sobre comenzar un nuevo año escolar?",
          de: "Welches Gefühl könnten Schüler beim Beginn eines neuen Schuljahres haben?",
          nl: "Welk gevoel zouden studenten kunnen hebben over het begin van een nieuw schooljaar?"
        },
        options: [
          { en: "Excitement and anticipation", es: "Emoción y expectativa", de: "Aufregung und Vorfreude", nl: "Opwinding en verwachting" },
          { en: "Boredom and indifference", es: "Aburrimiento e indiferencia", de: "Langeweile und Gleichgültigkeit", nl: "Verveling en onverschilligheid" },
          { en: "Anger and frustration", es: "Enojo y frustración", de: "Wut und Frustration", nl: "Woede en frustratie" },
          { en: "Confusion and fear", es: "Confusión y miedo", de: "Verwirrung und Angst", nl: "Verwarring en angst" }
        ],
        correctIndex: 0
      }
    ]
  };

  // Export August challenges
  if (typeof window.addMonthChallenges === 'function') {
    window.addMonthChallenges('august', augustChallenges);
  }

})();