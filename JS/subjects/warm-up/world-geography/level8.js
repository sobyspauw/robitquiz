// World Geography - Level 8: Islands, Cities, and Urban Geography
(function() {
  const level8 = {
    name: {
      en: "Islands, Cities, and Urban Geography",
      es: "Islas, Ciudades y Geografía Urbana",
      de: "Inseln, Städte und Stadtgeografie",
      nl: "Eilanden, Steden en Stedelijke Geografie"
    },
    questions: [
      {
        question: {
          en: "Which is the largest island in the world?",
          es: "¿Cuál es la isla más grande del mundo?",
          de: "Was ist die größte Insel der Welt?",
          nl: "Wat is het grootste eiland ter wereld?"
        },
        options: [
          { en: "Greenland", es: "Groenlandia", de: "Grönland", nl: "Groenland" },
          { en: "New Guinea", es: "Nueva Guinea", de: "Neuguinea", nl: "Nieuw-Guinea" },
          { en: "Borneo", es: "Borneo", de: "Borneo", nl: "Borneo" },
          { en: "Madagascar", es: "Madagascar", de: "Madagaskar", nl: "Madagaskar" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the most populous city in the world?",
          es: "¿Cuál es la ciudad más poblada del mundo?",
          de: "Was ist die bevölkerungsreichste Stadt der Welt?",
          nl: "Wat is de meest bevolkte stad ter wereld?"
        },
        options: [
          { en: "Tokyo", es: "Tokio", de: "Tokio", nl: "Tokio" },
          { en: "Delhi", es: "Delhi", de: "Delhi", nl: "Delhi" },
          { en: "Shanghai", es: "Shanghái", de: "Shanghai", nl: "Shanghai" },
          { en: "São Paulo", es: "São Paulo", de: "São Paulo", nl: "São Paulo" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which city is known as the 'Big Apple'?",
          es: "¿Qué ciudad es conocida como la 'Gran Manzana'?",
          de: "Welche Stadt ist als 'Big Apple' bekannt?",
          nl: "Welke stad staat bekend als de 'Big Apple'?"
        },
        options: [
          { en: "New York City", es: "Nueva York", de: "New York City", nl: "New York City" },
          { en: "Los Angeles", es: "Los Ángeles", de: "Los Angeles", nl: "Los Angeles" },
          { en: "Chicago", es: "Chicago", de: "Chicago", nl: "Chicago" },
          { en: "San Francisco", es: "San Francisco", de: "San Francisco", nl: "San Francisco" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which island nation consists of over 7,000 islands?",
          es: "¿Qué nación insular consta de más de 7,000 islas?",
          de: "Welche Inselnation besteht aus über 7.000 Inseln?",
          nl: "Welke eilandnatie bestaat uit meer dan 7.000 eilanden?"
        },
        options: [
          { en: "Philippines", es: "Filipinas", de: "Philippinen", nl: "Filipijnen" },
          { en: "Indonesia", es: "Indonesia", de: "Indonesien", nl: "Indonesië" },
          { en: "Japan", es: "Japón", de: "Japan", nl: "Japan" },
          { en: "Greece", es: "Grecia", de: "Griechenland", nl: "Griekenland" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which city is built on seven hills?",
          es: "¿Qué ciudad está construida sobre siete colinas?",
          de: "Welche Stadt ist auf sieben Hügeln gebaut?",
          nl: "Welke stad is gebouwd op zeven heuvels?"
        },
        options: [
          { en: "Rome", es: "Roma", de: "Rom", nl: "Rome" },
          { en: "Athens", es: "Atenas", de: "Athen", nl: "Athene" },
          { en: "Istanbul", es: "Estambul", de: "Istanbul", nl: "Istanbul" },
          { en: "Lisbon", es: "Lisboa", de: "Lissabon", nl: "Lissabon" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the largest city in Australia?",
          es: "¿Cuál es la ciudad más grande de Australia?",
          de: "Was ist die größte Stadt in Australien?",
          nl: "Wat is de grootste stad in Australië?"
        },
        options: [
          { en: "Sydney", es: "Sídney", de: "Sydney", nl: "Sydney" },
          { en: "Melbourne", es: "Melbourne", de: "Melbourne", nl: "Melbourne" },
          { en: "Brisbane", es: "Brisbane", de: "Brisbane", nl: "Brisbane" },
          { en: "Perth", es: "Perth", de: "Perth", nl: "Perth" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which Mediterranean island is divided between two countries?",
          es: "¿Qué isla mediterránea está dividida entre dos países?",
          de: "Welche Mittelmeerinsel ist zwischen zwei Ländern geteilt?",
          nl: "Welk Middellandse Zee eiland is verdeeld tussen twee landen?"
        },
        options: [
          { en: "Cyprus", es: "Chipre", de: "Zypern", nl: "Cyprus" },
          { en: "Sicily", es: "Sicilia", de: "Sizilien", nl: "Sicilië" },
          { en: "Sardinia", es: "Cerdeña", de: "Sardinien", nl: "Sardinië" },
          { en: "Corsica", es: "Córcega", de: "Korsika", nl: "Corsica" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which city is known as the 'City of Love'?",
          es: "¿Qué ciudad es conocida como la 'Ciudad del Amor'?",
          de: "Welche Stadt ist als 'Stadt der Liebe' bekannt?",
          nl: "Welke stad staat bekend als de 'Stad van de Liefde'?"
        },
        options: [
          { en: "Paris", es: "París", de: "Paris", nl: "Parijs" },
          { en: "Rome", es: "Roma", de: "Rom", nl: "Rome" },
          { en: "Venice", es: "Venecia", de: "Venedig", nl: "Venetië" },
          { en: "Vienna", es: "Viena", de: "Wien", nl: "Wenen" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the largest island in the Caribbean?",
          es: "¿Cuál es la isla más grande del Caribe?",
          de: "Was ist die größte Insel in der Karibik?",
          nl: "Wat is het grootste eiland in de Caribische Zee?"
        },
        options: [
          { en: "Cuba", es: "Cuba", de: "Kuba", nl: "Cuba" },
          { en: "Hispaniola", es: "La Española", de: "Hispaniola", nl: "Hispaniola" },
          { en: "Jamaica", es: "Jamaica", de: "Jamaika", nl: "Jamaica" },
          { en: "Puerto Rico", es: "Puerto Rico", de: "Puerto Rico", nl: "Puerto Rico" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which city is famous for its canals and gondolas?",
          es: "¿Qué ciudad es famosa por sus canales y góndolas?",
          de: "Welche Stadt ist berühmt für ihre Kanäle und Gondeln?",
          nl: "Welke stad is beroemd om zijn kanalen en gondels?"
        },
        options: [
          { en: "Venice", es: "Venecia", de: "Venedig", nl: "Venetië" },
          { en: "Amsterdam", es: "Ámsterdam", de: "Amsterdam", nl: "Amsterdam" },
          { en: "Bruges", es: "Brujas", de: "Brügge", nl: "Brugge" },
          { en: "Stockholm", es: "Estocolmo", de: "Stockholm", nl: "Stockholm" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the highest city in the world?",
          es: "¿Cuál es la ciudad más alta del mundo?",
          de: "Was ist die höchstgelegene Stadt der Welt?",
          nl: "Wat is de hoogstgelegen stad ter wereld?"
        },
        options: [
          { en: "La Paz, Bolivia", es: "La Paz, Bolivia", de: "La Paz, Bolivien", nl: "La Paz, Bolivia" },
          { en: "Cusco, Peru", es: "Cusco, Perú", de: "Cusco, Peru", nl: "Cusco, Peru" },
          { en: "Quito, Ecuador", es: "Quito, Ecuador", de: "Quito, Ecuador", nl: "Quito, Ecuador" },
          { en: "Bogotá, Colombia", es: "Bogotá, Colombia", de: "Bogotá, Kolumbien", nl: "Bogotá, Colombia" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which Japanese island is home to Tokyo?",
          es: "¿En qué isla japonesa se encuentra Tokio?",
          de: "Auf welcher japanischen Insel liegt Tokio?",
          nl: "Op welk Japans eiland ligt Tokio?"
        },
        options: [
          { en: "Honshu", es: "Honshū", de: "Honshū", nl: "Honshu" },
          { en: "Kyushu", es: "Kyūshū", de: "Kyūshū", nl: "Kyushu" },
          { en: "Shikoku", es: "Shikoku", de: "Shikoku", nl: "Shikoku" },
          { en: "Hokkaido", es: "Hokkaidō", de: "Hokkaidō", nl: "Hokkaido" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which city is known as the 'Eternal City'?",
          es: "¿Qué ciudad es conocida como la 'Ciudad Eterna'?",
          de: "Welche Stadt ist als 'Ewige Stadt' bekannt?",
          nl: "Welke stad staat bekend als de 'Eeuwige Stad'?"
        },
        options: [
          { en: "Rome", es: "Roma", de: "Rom", nl: "Rome" },
          { en: "Athens", es: "Atenas", de: "Athen", nl: "Athene" },
          { en: "Cairo", es: "El Cairo", de: "Kairo", nl: "Caïro" },
          { en: "Jerusalem", es: "Jerusalén", de: "Jerusalem", nl: "Jeruzalem" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the largest island in the Mediterranean Sea?",
          es: "¿Cuál es la isla más grande del Mar Mediterráneo?",
          de: "Was ist die größte Insel im Mittelmeer?",
          nl: "Wat is het grootste eiland in de Middellandse Zee?"
        },
        options: [
          { en: "Sicily", es: "Sicilia", de: "Sizilien", nl: "Sicilië" },
          { en: "Sardinia", es: "Cerdeña", de: "Sardinien", nl: "Sardinië" },
          { en: "Cyprus", es: "Chipre", de: "Zypern", nl: "Cyprus" },
          { en: "Corsica", es: "Córcega", de: "Korsika", nl: "Corsica" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which city is home to the ancient Colosseum?",
          es: "¿Qué ciudad alberga el antiguo Coliseo?",
          de: "Welche Stadt beherbergt das antike Kolosseum?",
          nl: "Welke stad herbergt het oude Colosseum?"
        },
        options: [
          { en: "Rome", es: "Roma", de: "Rom", nl: "Rome" },
          { en: "Athens", es: "Atenas", de: "Athen", nl: "Athene" },
          { en: "Naples", es: "Nápoles", de: "Neapel", nl: "Napels" },
          { en: "Florence", es: "Florencia", de: "Florenz", nl: "Florence" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the most densely populated city in the world?",
          es: "¿Cuál es la ciudad más densamente poblada del mundo?",
          de: "Was ist die am dichtesten besiedelte Stadt der Welt?",
          nl: "Wat is de dichtstbevolkte stad ter wereld?"
        },
        options: [
          { en: "Manila", es: "Manila", de: "Manila", nl: "Manila" },
          { en: "Hong Kong", es: "Hong Kong", de: "Hongkong", nl: "Hong Kong" },
          { en: "Singapore", es: "Singapur", de: "Singapur", nl: "Singapore" },
          { en: "Tokyo", es: "Tokio", de: "Tokio", nl: "Tokio" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which island country is located southeast of India?",
          es: "¿Qué país insular está ubicado al sureste de la India?",
          de: "Welches Inselland liegt südöstlich von Indien?",
          nl: "Welk eilandland ligt ten zuidoosten van India?"
        },
        options: [
          { en: "Sri Lanka", es: "Sri Lanka", de: "Sri Lanka", nl: "Sri Lanka" },
          { en: "Maldives", es: "Maldivas", de: "Malediven", nl: "Malediven" },
          { en: "Mauritius", es: "Mauricio", de: "Mauritius", nl: "Mauritius" },
          { en: "Seychelles", es: "Seychelles", de: "Seychellen", nl: "Seychellen" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which city is known as the 'City of Angels'?",
          es: "¿Qué ciudad es conocida como la 'Ciudad de los Ángeles'?",
          de: "Welche Stadt ist als 'Stadt der Engel' bekannt?",
          nl: "Welke stad staat bekend als de 'Stad van de Engelen'?"
        },
        options: [
          { en: "Los Angeles", es: "Los Ángeles", de: "Los Angeles", nl: "Los Angeles" },
          { en: "San Francisco", es: "San Francisco", de: "San Francisco", nl: "San Francisco" },
          { en: "Las Vegas", es: "Las Vegas", de: "Las Vegas", nl: "Las Vegas" },
          { en: "San Diego", es: "San Diego", de: "San Diego", nl: "San Diego" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the largest man-made island in the world?",
          es: "¿Cuál es la isla artificial más grande del mundo?",
          de: "Was ist die größte künstliche Insel der Welt?",
          nl: "Wat is het grootste kunstmatige eiland ter wereld?"
        },
        options: [
          { en: "Palm Jumeirah", es: "Palm Jumeirah", de: "Palm Jumeirah", nl: "Palm Jumeirah" },
          { en: "The World Islands", es: "Las Islas del Mundo", de: "The World Islands", nl: "The World Islands" },
          { en: "Flevoland", es: "Flevoland", de: "Flevoland", nl: "Flevoland" },
          { en: "Kansai Airport Island", es: "Isla del Aeropuerto Kansai", de: "Kansai-Flughafen-Insel", nl: "Kansai Airport Island" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which city is famous for its tango dancing?",
          es: "¿Qué ciudad es famosa por su baile de tango?",
          de: "Welche Stadt ist berühmt für ihren Tango-Tanz?",
          nl: "Welke stad is beroemd om zijn tangodansen?"
        },
        options: [
          { en: "Buenos Aires", es: "Buenos Aires", de: "Buenos Aires", nl: "Buenos Aires" },
          { en: "Montevideo", es: "Montevideo", de: "Montevideo", nl: "Montevideo" },
          { en: "São Paulo", es: "São Paulo", de: "São Paulo", nl: "São Paulo" },
          { en: "Rio de Janeiro", es: "Río de Janeiro", de: "Rio de Janeiro", nl: "Rio de Janeiro" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which island nation has the capital Male?",
          es: "¿Qué nación insular tiene la capital Malé?",
          de: "Welche Inselnation hat die Hauptstadt Malé?",
          nl: "Welke eilandnatie heeft de hoofdstad Malé?"
        },
        options: [
          { en: "Maldives", es: "Maldivas", de: "Malediven", nl: "Malediven" },
          { en: "Seychelles", es: "Seychelles", de: "Seychellen", nl: "Seychellen" },
          { en: "Mauritius", es: "Mauricio", de: "Mauritius", nl: "Mauritius" },
          { en: "Comoros", es: "Comoras", de: "Komoren", nl: "Comoren" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which city is known as the 'Pearl of the Orient'?",
          es: "¿Qué ciudad es conocida como la 'Perla de Oriente'?",
          de: "Welche Stadt ist als 'Perle des Orients' bekannt?",
          nl: "Welke stad staat bekend als de 'Parel van het Oosten'?"
        },
        options: [
          { en: "Hong Kong", es: "Hong Kong", de: "Hongkong", nl: "Hong Kong" },
          { en: "Shanghai", es: "Shanghái", de: "Shanghai", nl: "Shanghai" },
          { en: "Singapore", es: "Singapur", de: "Singapur", nl: "Singapore" },
          { en: "Bangkok", es: "Bangkok", de: "Bangkok", nl: "Bangkok" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the largest island in Europe?",
          es: "¿Cuál es la isla más grande de Europa?",
          de: "Was ist die größte Insel in Europa?",
          nl: "Wat is het grootste eiland in Europa?"
        },
        options: [
          { en: "Great Britain", es: "Gran Bretaña", de: "Großbritannien", nl: "Groot-Brittannië" },
          { en: "Iceland", es: "Islandia", de: "Island", nl: "IJsland" },
          { en: "Ireland", es: "Irlanda", de: "Irland", nl: "Ierland" },
          { en: "Sicily", es: "Sicilia", de: "Sizilien", nl: "Sicilië" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which city is home to the Christ the Redeemer statue?",
          es: "¿Qué ciudad alberga la estatua del Cristo Redentor?",
          de: "Welche Stadt beherbergt die Christus-Erlöser-Statue?",
          nl: "Welke stad herbergt het Christus de Verlosser beeld?"
        },
        options: [
          { en: "Rio de Janeiro", es: "Río de Janeiro", de: "Rio de Janeiro", nl: "Rio de Janeiro" },
          { en: "São Paulo", es: "São Paulo", de: "São Paulo", nl: "São Paulo" },
          { en: "Salvador", es: "Salvador", de: "Salvador", nl: "Salvador" },
          { en: "Brasília", es: "Brasilia", de: "Brasília", nl: "Brasília" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the smallest inhabited island country in the world?",
          es: "¿Cuál es el país insular habitado más pequeño del mundo?",
          de: "Was ist das kleinste bewohnte Inselland der Welt?",
          nl: "Wat is het kleinste bewoonde eilandland ter wereld?"
        },
        options: [
          { en: "Nauru", es: "Nauru", de: "Nauru", nl: "Nauru" },
          { en: "Tuvalu", es: "Tuvalu", de: "Tuvalu", nl: "Tuvalu" },
          { en: "San Marino", es: "San Marino", de: "San Marino", nl: "San Marino" },
          { en: "Monaco", es: "Mónaco", de: "Monaco", nl: "Monaco" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which city is famous for its Golden Gate Bridge?",
          es: "¿Qué ciudad es famosa por su Puente Golden Gate?",
          de: "Welche Stadt ist berühmt für ihre Golden Gate Bridge?",
          nl: "Welke stad is beroemd om zijn Golden Gate Bridge?"
        },
        options: [
          { en: "San Francisco", es: "San Francisco", de: "San Francisco", nl: "San Francisco" },
          { en: "Los Angeles", es: "Los Ángeles", de: "Los Angeles", nl: "Los Angeles" },
          { en: "Seattle", es: "Seattle", de: "Seattle", nl: "Seattle" },
          { en: "Portland", es: "Portland", de: "Portland", nl: "Portland" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which island is home to the Statue of Liberty?",
          es: "¿En qué isla se encuentra la Estatua de la Libertad?",
          de: "Auf welcher Insel steht die Freiheitsstatue?",
          nl: "Op welk eiland staat het Vrijheidsbeeld?"
        },
        options: [
          { en: "Liberty Island", es: "Isla de la Libertad", de: "Liberty Island", nl: "Liberty Island" },
          { en: "Ellis Island", es: "Isla Ellis", de: "Ellis Island", nl: "Ellis Island" },
          { en: "Staten Island", es: "Staten Island", de: "Staten Island", nl: "Staten Island" },
          { en: "Manhattan Island", es: "Isla de Manhattan", de: "Manhattan Island", nl: "Manhattan Island" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which city is known as the 'Garden City'?",
          es: "¿Qué ciudad es conocida como la 'Ciudad Jardín'?",
          de: "Welche Stadt ist als 'Gartenstadt' bekannt?",
          nl: "Welke stad staat bekend als de 'Tuinstad'?"
        },
        options: [
          { en: "Singapore", es: "Singapur", de: "Singapur", nl: "Singapore" },
          { en: "Bangalore", es: "Bangalore", de: "Bangalore", nl: "Bangalore" },
          { en: "Victoria", es: "Victoria", de: "Victoria", nl: "Victoria" },
          { en: "Adelaide", es: "Adelaida", de: "Adelaide", nl: "Adelaide" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the largest volcanic island in the world?",
          es: "¿Cuál es la isla volcánica más grande del mundo?",
          de: "Was ist die größte Vulkaninsel der Welt?",
          nl: "Wat is het grootste vulkanische eiland ter wereld?"
        },
        options: [
          { en: "Iceland", es: "Islandia", de: "Island", nl: "IJsland" },
          { en: "Java", es: "Java", de: "Java", nl: "Java" },
          { en: "Hawaii", es: "Hawái", de: "Hawaii", nl: "Hawaii" },
          { en: "Sicily", es: "Sicilia", de: "Sizilien", nl: "Sicilië" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which city is built on 14 islands?",
          es: "¿Qué ciudad está construida sobre 14 islas?",
          de: "Welche Stadt ist auf 14 Inseln gebaut?",
          nl: "Welke stad is gebouwd op 14 eilanden?"
        },
        options: [
          { en: "Stockholm", es: "Estocolmo", de: "Stockholm", nl: "Stockholm" },
          { en: "Venice", es: "Venecia", de: "Venedig", nl: "Venetië" },
          { en: "Amsterdam", es: "Ámsterdam", de: "Amsterdam", nl: "Amsterdam" },
          { en: "Copenhagen", es: "Copenhague", de: "Kopenhagen", nl: "Kopenhagen" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which is the largest island in Indonesia?",
          es: "¿Cuál es la isla más grande de Indonesia?",
          de: "Was ist die größte Insel in Indonesien?",
          nl: "Wat is het grootste eiland in Indonesië?"
        },
        options: [
          { en: "Sumatra", es: "Sumatra", de: "Sumatra", nl: "Sumatra" },
          { en: "Java", es: "Java", de: "Java", nl: "Java" },
          { en: "Borneo", es: "Borneo", de: "Borneo", nl: "Borneo" },
          { en: "Sulawesi", es: "Sulawesi", de: "Sulawesi", nl: "Sulawesi" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which city is famous for its Space Needle?",
          es: "¿Qué ciudad es famosa por su Space Needle?",
          de: "Welche Stadt ist berühmt für ihre Space Needle?",
          nl: "Welke stad is beroemd om zijn Space Needle?"
        },
        options: [
          { en: "Seattle", es: "Seattle", de: "Seattle", nl: "Seattle" },
          { en: "Portland", es: "Portland", de: "Portland", nl: "Portland" },
          { en: "San Francisco", es: "San Francisco", de: "San Francisco", nl: "San Francisco" },
          { en: "Vancouver", es: "Vancouver", de: "Vancouver", nl: "Vancouver" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which island nation is famous for Easter Island?",
          es: "¿Qué nación insular es famosa por la Isla de Pascua?",
          de: "Welche Inselnation ist berühmt für die Osterinsel?",
          nl: "Welke eilandnatie is beroemd om Paaseiland?"
        },
        options: [
          { en: "Chile", es: "Chile", de: "Chile", nl: "Chili" },
          { en: "Peru", es: "Perú", de: "Peru", nl: "Peru" },
          { en: "Ecuador", es: "Ecuador", de: "Ecuador", nl: "Ecuador" },
          { en: "Colombia", es: "Colombia", de: "Kolumbien", nl: "Colombia" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which city is known as the 'Windy City'?",
          es: "¿Qué ciudad es conocida como la 'Ciudad del Viento'?",
          de: "Welche Stadt ist als 'Windy City' bekannt?",
          nl: "Welke stad staat bekend als de 'Winderige Stad'?"
        },
        options: [
          { en: "Chicago", es: "Chicago", de: "Chicago", nl: "Chicago" },
          { en: "San Francisco", es: "San Francisco", de: "San Francisco", nl: "San Francisco" },
          { en: "Boston", es: "Boston", de: "Boston", nl: "Boston" },
          { en: "Milwaukee", es: "Milwaukee", de: "Milwaukee", nl: "Milwaukee" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the most isolated populated island in the world?",
          es: "¿Cuál es la isla poblada más aislada del mundo?",
          de: "Was ist die isolierteste bewohnte Insel der Welt?",
          nl: "Wat is het meest geïsoleerde bewoonde eiland ter wereld?"
        },
        options: [
          { en: "Tristan da Cunha", es: "Tristán de Acuña", de: "Tristan da Cunha", nl: "Tristan da Cunha" },
          { en: "Easter Island", es: "Isla de Pascua", de: "Osterinsel", nl: "Paaseiland" },
          { en: "St. Helena", es: "Santa Elena", de: "St. Helena", nl: "Sint-Helena" },
          { en: "Pitcairn Island", es: "Isla Pitcairn", de: "Pitcairninseln", nl: "Pitcairneilanden" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which city is famous for its Hollywood sign?",
          es: "¿Qué ciudad es famosa por su letrero de Hollywood?",
          de: "Welche Stadt ist berühmt für ihr Hollywood-Schild?",
          nl: "Welke stad is beroemd om zijn Hollywood-bord?"
        },
        options: [
          { en: "Los Angeles", es: "Los Ángeles", de: "Los Angeles", nl: "Los Angeles" },
          { en: "San Francisco", es: "San Francisco", de: "San Francisco", nl: "San Francisco" },
          { en: "San Diego", es: "San Diego", de: "San Diego", nl: "San Diego" },
          { en: "Las Vegas", es: "Las Vegas", de: "Las Vegas", nl: "Las Vegas" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which island group includes Tahiti?",
          es: "¿Qué grupo de islas incluye Tahití?",
          de: "Welche Inselgruppe umfasst Tahiti?",
          nl: "Welke eilandengroep omvat Tahiti?"
        },
        options: [
          { en: "Society Islands", es: "Islas de la Sociedad", de: "Gesellschaftsinseln", nl: "Societyeilanden" },
          { en: "Cook Islands", es: "Islas Cook", de: "Cookinseln", nl: "Cookeilanden" },
          { en: "Marquesas Islands", es: "Islas Marquesas", de: "Marquesas-Inseln", nl: "Marquesaseilanden" },
          { en: "Tuamotu Islands", es: "Islas Tuamotu", de: "Tuamotu-Inseln", nl: "Tuamotu-eilanden" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which city is known as the 'Lion City'?",
          es: "¿Qué ciudad es conocida como la 'Ciudad del León'?",
          de: "Welche Stadt ist als 'Löwenstadt' bekannt?",
          nl: "Welke stad staat bekend als de 'Leeuwenstad'?"
        },
        options: [
          { en: "Singapore", es: "Singapur", de: "Singapur", nl: "Singapore" },
          { en: "Hong Kong", es: "Hong Kong", de: "Hongkong", nl: "Hong Kong" },
          { en: "Kuala Lumpur", es: "Kuala Lumpur", de: "Kuala Lumpur", nl: "Kuala Lumpur" },
          { en: "Bangkok", es: "Bangkok", de: "Bangkok", nl: "Bangkok" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the largest island in the Indian Ocean?",
          es: "¿Cuál es la isla más grande del Océano Índico?",
          de: "Was ist die größte Insel im Indischen Ozean?",
          nl: "Wat is het grootste eiland in de Indische Oceaan?"
        },
        options: [
          { en: "Madagascar", es: "Madagascar", de: "Madagaskar", nl: "Madagaskar" },
          { en: "Sri Lanka", es: "Sri Lanka", de: "Sri Lanka", nl: "Sri Lanka" },
          { en: "Mauritius", es: "Mauricio", de: "Mauritius", nl: "Mauritius" },
          { en: "Socotra", es: "Socotra", de: "Sokotra", nl: "Socotra" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which city is home to the Petronas Twin Towers?",
          es: "¿Qué ciudad alberga las Torres Petronas?",
          de: "Welche Stadt beherbergt die Petronas Twin Towers?",
          nl: "Welke stad herbergt de Petronas Twin Towers?"
        },
        options: [
          { en: "Kuala Lumpur", es: "Kuala Lumpur", de: "Kuala Lumpur", nl: "Kuala Lumpur" },
          { en: "Singapore", es: "Singapur", de: "Singapur", nl: "Singapore" },
          { en: "Bangkok", es: "Bangkok", de: "Bangkok", nl: "Bangkok" },
          { en: "Jakarta", es: "Yakarta", de: "Jakarta", nl: "Jakarta" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which island is shared by Indonesia, Malaysia, and Brunei?",
          es: "¿Qué isla comparten Indonesia, Malasia y Brunéi?",
          de: "Welche Insel teilen sich Indonesien, Malaysia und Brunei?",
          nl: "Welk eiland wordt gedeeld door Indonesië, Maleisië en Brunei?"
        },
        options: [
          { en: "Borneo", es: "Borneo", de: "Borneo", nl: "Borneo" },
          { en: "Sumatra", es: "Sumatra", de: "Sumatra", nl: "Sumatra" },
          { en: "Java", es: "Java", de: "Java", nl: "Java" },
          { en: "Sulawesi", es: "Sulawesi", de: "Sulawesi", nl: "Sulawesi" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which city is famous for its Blue Mosque?",
          es: "¿Qué ciudad es famosa por su Mezquita Azul?",
          de: "Welche Stadt ist berühmt für ihre Blaue Moschee?",
          nl: "Welke stad is beroemd om zijn Blauwe Moskee?"
        },
        options: [
          { en: "Istanbul", es: "Estambul", de: "Istanbul", nl: "Istanbul" },
          { en: "Ankara", es: "Ankara", de: "Ankara", nl: "Ankara" },
          { en: "Bursa", es: "Bursa", de: "Bursa", nl: "Bursa" },
          { en: "Izmir", es: "Esmirna", de: "Izmir", nl: "Izmir" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the northernmost capital city in the world?",
          es: "¿Cuál es la capital más al norte del mundo?",
          de: "Was ist die nördlichste Hauptstadt der Welt?",
          nl: "Wat is de noordelijkste hoofdstad ter wereld?"
        },
        options: [
          { en: "Reykjavik", es: "Reikiavik", de: "Reykjavik", nl: "Reykjavik" },
          { en: "Helsinki", es: "Helsinki", de: "Helsinki", nl: "Helsinki" },
          { en: "Stockholm", es: "Estocolmo", de: "Stockholm", nl: "Stockholm" },
          { en: "Oslo", es: "Oslo", de: "Oslo", nl: "Oslo" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which island nation has Port Louis as its capital?",
          es: "¿Qué nación insular tiene Port Louis como capital?",
          de: "Welche Inselnation hat Port Louis als Hauptstadt?",
          nl: "Welke eilandnatie heeft Port Louis als hoofdstad?"
        },
        options: [
          { en: "Mauritius", es: "Mauricio", de: "Mauritius", nl: "Mauritius" },
          { en: "Seychelles", es: "Seychelles", de: "Seychellen", nl: "Seychellen" },
          { en: "Madagascar", es: "Madagascar", de: "Madagaskar", nl: "Madagaskar" },
          { en: "Comoros", es: "Comoras", de: "Komoren", nl: "Comoren" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which city is known as the 'City of Brotherly Love'?",
          es: "¿Qué ciudad es conocida como la 'Ciudad del Amor Fraternal'?",
          de: "Welche Stadt ist als 'Stadt der Bruderliebe' bekannt?",
          nl: "Welke stad staat bekend als de 'Stad van Broederlijke Liefde'?"
        },
        options: [
          { en: "Philadelphia", es: "Filadelfia", de: "Philadelphia", nl: "Philadelphia" },
          { en: "Boston", es: "Boston", de: "Boston", nl: "Boston" },
          { en: "Baltimore", es: "Baltimore", de: "Baltimore", nl: "Baltimore" },
          { en: "Washington D.C.", es: "Washington D.C.", de: "Washington D.C.", nl: "Washington D.C." }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which island chain includes the Big Island?",
          es: "¿Qué cadena de islas incluye la Isla Grande?",
          de: "Welche Inselkette umfasst die Big Island?",
          nl: "Welke eilandenketen omvat het Big Island?"
        },
        options: [
          { en: "Hawaiian Islands", es: "Islas Hawaianas", de: "Hawaii-Inseln", nl: "Hawaiiaanse eilanden" },
          { en: "Aleutian Islands", es: "Islas Aleutianas", de: "Aleuten", nl: "Aleoeten" },
          { en: "Channel Islands", es: "Islas del Canal", de: "Kanalinseln", nl: "Kanaaleilanden" },
          { en: "Virgin Islands", es: "Islas Vírgenes", de: "Jungferninseln", nl: "Maagdeneilanden" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which city is famous for its cable cars?",
          es: "¿Qué ciudad es famosa por sus funiculares?",
          de: "Welche Stadt ist berühmt für ihre Cable Cars?",
          nl: "Welke stad is beroemd om zijn kabelwagens?"
        },
        options: [
          { en: "San Francisco", es: "San Francisco", de: "San Francisco", nl: "San Francisco" },
          { en: "Seattle", es: "Seattle", de: "Seattle", nl: "Seattle" },
          { en: "Portland", es: "Portland", de: "Portland", nl: "Portland" },
          { en: "Los Angeles", es: "Los Ángeles", de: "Los Angeles", nl: "Los Angeles" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the largest coral atoll in the world?",
          es: "¿Cuál es el atolón de coral más grande del mundo?",
          de: "Was ist das größte Korallenatoll der Welt?",
          nl: "Wat is het grootste koraalatol ter wereld?"
        },
        options: [
          { en: "Kwajalein Atoll", es: "Atolón Kwajalein", de: "Kwajalein-Atoll", nl: "Kwajalein-atol" },
          { en: "Bikini Atoll", es: "Atolón Bikini", de: "Bikini-Atoll", nl: "Bikini-atol" },
          { en: "Majuro Atoll", es: "Atolón Majuro", de: "Majuro-Atoll", nl: "Majuro-atol" },
          { en: "Enewetak Atoll", es: "Atolón Enewetak", de: "Enewetak-Atoll", nl: "Enewetak-atol" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which city is known as the 'Motor City'?",
          es: "¿Qué ciudad es conocida como la 'Ciudad del Motor'?",
          de: "Welche Stadt ist als 'Motor City' bekannt?",
          nl: "Welke stad staat bekend als de 'Motor City'?"
        },
        options: [
          { en: "Detroit", es: "Detroit", de: "Detroit", nl: "Detroit" },
          { en: "Chicago", es: "Chicago", de: "Chicago", nl: "Chicago" },
          { en: "Cleveland", es: "Cleveland", de: "Cleveland", nl: "Cleveland" },
          { en: "Milwaukee", es: "Milwaukee", de: "Milwaukee", nl: "Milwaukee" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which island nation is known for its unique biodiversity and lemurs?",
          es: "¿Qué nación insular es conocida por su biodiversidad única y lémures?",
          de: "Welche Inselnation ist für ihre einzigartige Biodiversität und Lemuren bekannt?",
          nl: "Welke eilandnatie staat bekend om zijn unieke biodiversiteit en lemuren?"
        },
        options: [
          { en: "Madagascar", es: "Madagascar", de: "Madagaskar", nl: "Madagaskar" },
          { en: "Mauritius", es: "Mauricio", de: "Mauritius", nl: "Mauritius" },
          { en: "Seychelles", es: "Seychelles", de: "Seychellen", nl: "Seychellen" },
          { en: "Comoros", es: "Comoras", de: "Komoren", nl: "Comoren" }
        ],
        correct: 0
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('warm-up/world-geography', level8);
  }
})();