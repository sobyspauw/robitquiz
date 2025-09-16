// December Daily Challenges - 31 days × 5 questions each = 155 total questions
(function() {
  
  const decemberChallenges = {
    name: {
      en: "December Daily Challenges",
      es: "Desafíos Diarios de Diciembre", 
      de: "Dezember Tägliche Herausforderungen",
      nl: "December Dagelijkse Uitdagingen"
    },
    
    // Day 1 - December 1st: Start of Winter
    day1: [
      {
        question: {
          en: "What season begins in December?",
          es: "¿Qué estación comienza en diciembre?",
          de: "Welche Jahreszeit beginnt im Dezember?",
          nl: "Welk seizoen begint in december?"
        },
        options: [
          { en: "Winter", es: "Invierno", de: "Winter", nl: "Winter" },
          { en: "Fall", es: "Otoño", de: "Herbst", nl: "Herfst" },
          { en: "Spring", es: "Primavera", de: "Frühling", nl: "Lente" },
          { en: "Summer", es: "Verano", de: "Sommer", nl: "Zomer" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What holiday do many people celebrate on December 25th?",
          es: "¿Qué feriado celebra mucha gente el 25 de diciembre?",
          de: "Welchen Feiertag feiern viele Menschen am 25. Dezember?",
          nl: "Welke feestdag vieren veel mensen op 25 december?"
        },
        options: [
          { en: "Christmas", es: "Navidad", de: "Weihnachten", nl: "Kerstmis" },
          { en: "Halloween", es: "Halloween", de: "Halloween", nl: "Halloween" },
          { en: "Easter", es: "Pascua", de: "Ostern", nl: "Pasen" },
          { en: "Thanksgiving", es: "Acción de Gracias", de: "Thanksgiving", nl: "Thanksgiving" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many days are in December?",
          es: "¿Cuántos días tiene diciembre?",
          de: "Wie viele Tage hat der Dezember?",
          nl: "Hoeveel dagen heeft december?"
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
          en: "What birthstone belongs to December?",
          es: "¿Qué piedra de nacimiento pertenece a diciembre?",
          de: "Welcher Geburtsstein gehört zum Dezember?",
          nl: "Welke geboortesteen hoort bij december?"
        },
        options: [
          { en: "Turquoise", es: "Turquesa", de: "Türkis", nl: "Turkoois" },
          { en: "Ruby", es: "Rubí", de: "Rubin", nl: "Robijn" },
          { en: "Diamond", es: "Diamante", de: "Diamant", nl: "Diamant" },
          { en: "Emerald", es: "Esmeralda", de: "Smaragd", nl: "Smaragd" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What often falls from the sky in December?",
          es: "¿Qué suele caer del cielo en diciembre?",
          de: "Was fällt oft im Dezember vom Himmel?",
          nl: "Wat valt er vaak uit de lucht in december?"
        },
        options: [
          { en: "Snow", es: "Nieve", de: "Schnee", nl: "Sneeuw" },
          { en: "Leaves", es: "Hojas", de: "Blätter", nl: "Bladeren" },
          { en: "Flowers", es: "Flores", de: "Blumen", nl: "Bloemen" },
          { en: "Candy", es: "Dulces", de: "Süßigkeiten", nl: "Snoep" }
        ],
        correctIndex: 0
      }
    ],

    // Day 2 - December 2nd
    day2: [
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
          { en: "Warsaw", es: "Varsovia", de: "Warschau", nl: "Warschau" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do people often hang on their Christmas tree?",
          es: "¿Qué cuelga la gente a menudo en su árbol de Navidad?",
          de: "Was hängen Menschen oft an ihren Weihnachtsbaum?",
          nl: "Wat hangen mensen vaak in hun kerstboom?"
        },
        options: [
          { en: "Ornaments", es: "Adornos", de: "Schmuck", nl: "Versieringen" },
          { en: "Socks", es: "Calcetines", de: "Socken", nl: "Sokken" },
          { en: "Books", es: "Libros", de: "Bücher", nl: "Boeken" },
          { en: "Shoes", es: "Zapatos", de: "Schuhe", nl: "Schoenen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 15 ÷ 3?",
          es: "¿Cuánto es 15 ÷ 3?",
          de: "Was ist 15 ÷ 3?",
          nl: "Hoeveel is 15 ÷ 3?"
        },
        options: [
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "3", es: "3", de: "3", nl: "3" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What keeps people warm in winter?",
          es: "¿Qué mantiene a la gente caliente en invierno?",
          de: "Was hält Menschen im Winter warm?",
          nl: "Wat houdt mensen warm in de winter?"
        },
        options: [
          { en: "Coats", es: "Abrigos", de: "Mäntel", nl: "Jassen" },
          { en: "Swimsuits", es: "Trajes de baño", de: "Badeanzüge", nl: "Zwempakken" },
          { en: "Sandals", es: "Sandalias", de: "Sandalen", nl: "Sandalen" },
          { en: "Shorts", es: "Pantalones cortos", de: "Shorts", nl: "Korte broeken" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which animal pulls Santa's sleigh?",
          es: "¿Qué animal tira del trineo de Santa?",
          de: "Welches Tier zieht den Schlitten des Weihnachtsmanns?",
          nl: "Welk dier trekt de slee van de Kerstman?"
        },
        options: [
          { en: "Reindeer", es: "Renos", de: "Rentiere", nl: "Rendieren" },
          { en: "Horses", es: "Caballos", de: "Pferde", nl: "Paarden" },
          { en: "Dogs", es: "Perros", de: "Hunde", nl: "Honden" },
          { en: "Cats", es: "Gatos", de: "Katzen", nl: "Katten" }
        ],
        correctIndex: 0
      }
    ],

    // Day 3 - December 3rd: Christmas Preparations
    day3: [
      {
        question: {
          en: "What do people often put on top of a Christmas tree?",
          es: "¿Qué suele poner la gente en la parte superior de un árbol de Navidad?",
          de: "Was setzen Menschen oft auf die Spitze eines Weihnachtsbaums?",
          nl: "Wat zetten mensen vaak op de top van een kerstboom?"
        },
        options: [
          { en: "Star", es: "Estrella", de: "Stern", nl: "Ster" },
          { en: "Hat", es: "Sombrero", de: "Hut", nl: "Hoed" },
          { en: "Ball", es: "Pelota", de: "Ball", nl: "Bal" },
          { en: "Flower", es: "Flor", de: "Blume", nl: "Bloem" }
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
          { en: "Arctic Ocean", es: "Océano Ártico", de: "Arktischer Ozean", nl: "Noordelijke IJszee" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 8 × 7?",
          es: "¿Cuánto es 8 × 7?",
          de: "Was ist 8 × 7?",
          nl: "Hoeveel is 8 × 7?"
        },
        options: [
          { en: "56", es: "56", de: "56", nl: "56" },
          { en: "54", es: "54", de: "54", nl: "54" },
          { en: "63", es: "63", de: "63", nl: "63" },
          { en: "49", es: "49", de: "49", nl: "49" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What color is Santa's suit?",
          es: "¿De qué color es el traje de Santa?",
          de: "Welche Farbe hat der Anzug des Weihnachtsmanns?",
          nl: "Welke kleur heeft het pak van de Kerstman?"
        },
        options: [
          { en: "Red", es: "Rojo", de: "Rot", nl: "Rood" },
          { en: "Blue", es: "Azul", de: "Blau", nl: "Blauw" },
          { en: "Green", es: "Verde", de: "Grün", nl: "Groen" },
          { en: "Yellow", es: "Amarillo", de: "Gelb", nl: "Geel" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do people wear on their feet in the snow?",
          es: "¿Qué se pone la gente en los pies en la nieve?",
          de: "Was tragen Menschen an den Füßen im Schnee?",
          nl: "Wat dragen mensen aan hun voeten in de sneeuw?"
        },
        options: [
          { en: "Boots", es: "Botas", de: "Stiefel", nl: "Laarzen" },
          { en: "Flip-flops", es: "Chanclas", de: "Flip-Flops", nl: "Slippers" },
          { en: "High heels", es: "Tacones altos", de: "High Heels", nl: "Hakken" },
          { en: "Sandals", es: "Sandalias", de: "Sandalen", nl: "Sandalen" }
        ],
        correctIndex: 0
      }
    ],

    // Day 4 - December 4th: Winter Weather
    day4: [
      {
        question: {
          en: "What temperature does water freeze at?",
          es: "¿A qué temperatura se congela el agua?",
          de: "Bei welcher Temperatur gefriert Wasser?",
          nl: "Bij welke temperatuur bevriest water?"
        },
        options: [
          { en: "0°C", es: "0°C", de: "0°C", nl: "0°C" },
          { en: "10°C", es: "10°C", de: "10°C", nl: "10°C" },
          { en: "20°C", es: "20°C", de: "20°C", nl: "20°C" },
          { en: "100°C", es: "100°C", de: "100°C", nl: "100°C" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which continent is the coldest?",
          es: "¿Cuál es el continente más frío?",
          de: "Welcher Kontinent ist der kälteste?",
          nl: "Welk continent is het koudste?"
        },
        options: [
          { en: "Antarctica", es: "Antártida", de: "Antarktis", nl: "Antarctica" },
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" },
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" },
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 12 + 19?",
          es: "¿Cuánto es 12 + 19?",
          de: "Was ist 12 + 19?",
          nl: "Hoeveel is 12 + 19?"
        },
        options: [
          { en: "31", es: "31", de: "31", nl: "31" },
          { en: "30", es: "30", de: "30", nl: "30" },
          { en: "32", es: "32", de: "32", nl: "32" },
          { en: "29", es: "29", de: "29", nl: "29" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What activity can you do on ice?",
          es: "¿Qué actividad puedes hacer sobre hielo?",
          de: "Welche Aktivität kann man auf Eis machen?",
          nl: "Welke activiteit kun je op ijs doen?"
        },
        options: [
          { en: "Ice skating", es: "Patinaje sobre hielo", de: "Eislaufen", nl: "Schaatsen" },
          { en: "Swimming", es: "Natación", de: "Schwimmen", nl: "Zwemmen" },
          { en: "Sunbathing", es: "Tomar el sol", de: "Sonnenbaden", nl: "Zonnebaden" },
          { en: "Gardening", es: "Jardinería", de: "Gärtnern", nl: "Tuinieren" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do children like to build with snow?",
          es: "¿Qué les gusta construir a los niños con nieve?",
          de: "Was bauen Kinder gerne aus Schnee?",
          nl: "Wat bouwen kinderen graag van sneeuw?"
        },
        options: [
          { en: "Snowman", es: "Muñeco de nieve", de: "Schneemann", nl: "Sneeuwpop" },
          { en: "Sandcastle", es: "Castillo de arena", de: "Sandburg", nl: "Zandkasteel" },
          { en: "House", es: "Casa", de: "Haus", nl: "Huis" },
          { en: "Car", es: "Coche", de: "Auto", nl: "Auto" }
        ],
        correctIndex: 0
      }
    ],

    // Day 5 - December 5th: Christmas Stories
    day5: [
      {
        question: {
          en: "Where does Santa Claus live?",
          es: "¿Dónde vive Santa Claus?",
          de: "Wo lebt der Weihnachtsmann?",
          nl: "Waar woont de Kerstman?"
        },
        options: [
          { en: "North Pole", es: "Polo Norte", de: "Nordpol", nl: "Noordpool" },
          { en: "South Pole", es: "Polo Sur", de: "Südpol", nl: "Zuidpool" },
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" },
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the study of space called?",
          es: "¿Cómo se llama el estudio del espacio?",
          de: "Wie nennt man die Erforschung des Weltraums?",
          nl: "Hoe heet de studie van de ruimte?"
        },
        options: [
          { en: "Astronomy", es: "Astronomía", de: "Astronomie", nl: "Astronomie" },
          { en: "Biology", es: "Biología", de: "Biologie", nl: "Biologie" },
          { en: "Chemistry", es: "Química", de: "Chemie", nl: "Scheikunde" },
          { en: "Physics", es: "Física", de: "Physik", nl: "Natuurkunde" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 45 ÷ 5?",
          es: "¿Cuánto es 45 ÷ 5?",
          de: "Was ist 45 ÷ 5?",
          nl: "Hoeveel is 45 ÷ 5?"
        },
        options: [
          { en: "9", es: "9", de: "9", nl: "9" },
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "7", es: "7", de: "7", nl: "7" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do people hang by the fireplace at Christmas?",
          es: "¿Qué cuelga la gente junto a la chimenea en Navidad?",
          de: "Was hängen Menschen zu Weihnachten am Kamin auf?",
          nl: "Wat hangen mensen bij de open haard met Kerstmis?"
        },
        options: [
          { en: "Stockings", es: "Calcetines", de: "Strümpfe", nl: "Kousen" },
          { en: "Pictures", es: "Fotos", de: "Bilder", nl: "Foto's" },
          { en: "Coats", es: "Abrigos", de: "Mäntel", nl: "Jassen" },
          { en: "Books", es: "Libros", de: "Bücher", nl: "Boeken" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What red-nosed reindeer helps guide Santa's sleigh?",
          es: "¿Qué reno de nariz roja ayuda a guiar el trineo de Santa?",
          de: "Welches rotnasige Rentier hilft, den Schlitten des Weihnachtsmanns zu führen?",
          nl: "Welk rendier met een rode neus helpt de slee van de Kerstman te leiden?"
        },
        options: [
          { en: "Rudolph", es: "Rudolph", de: "Rudolph", nl: "Rudolph" },
          { en: "Dasher", es: "Dasher", de: "Dasher", nl: "Dasher" },
          { en: "Comet", es: "Comet", de: "Comet", nl: "Comet" },
          { en: "Prancer", es: "Prancer", de: "Prancer", nl: "Prancer" }
        ],
        correctIndex: 0
      }
    ],

    // Day 6 - December 6th: Holiday Traditions
    day6: [
      {
        question: {
          en: "In which month does winter officially begin in the Northern Hemisphere?",
          es: "¿En qué mes comienza oficialmente el invierno en el Hemisferio Norte?",
          de: "In welchem Monat beginnt offiziell der Winter auf der Nordhalbkugel?",
          nl: "In welke maand begint de winter officieel op het noordelijk halfrond?"
        },
        options: [
          { en: "December", es: "Diciembre", de: "Dezember", nl: "December" },
          { en: "November", es: "Noviembre", de: "November", nl: "November" },
          { en: "January", es: "Enero", de: "Januar", nl: "Januari" },
          { en: "February", es: "Febrero", de: "Februar", nl: "Februari" }
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
          { en: "Vancouver", es: "Vancouver", de: "Vancouver", nl: "Vancouver" },
          { en: "Montreal", es: "Montreal", de: "Montreal", nl: "Montreal" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 6 × 9?",
          es: "¿Cuánto es 6 × 9?",
          de: "Was ist 6 × 9?",
          nl: "Hoeveel is 6 × 9?"
        },
        options: [
          { en: "54", es: "54", de: "54", nl: "54" },
          { en: "56", es: "56", de: "56", nl: "56" },
          { en: "48", es: "48", de: "48", nl: "48" },
          { en: "63", es: "63", de: "63", nl: "63" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What sweet treats are often left for Santa?",
          es: "¿Qué dulces se suelen dejar para Santa?",
          de: "Welche süßen Leckereien werden oft für den Weihnachtsmann hinterlassen?",
          nl: "Welke zoete lekkernijen worden vaak voor de Kerstman achtergelaten?"
        },
        options: [
          { en: "Cookies", es: "Galletas", de: "Kekse", nl: "Koekjes" },
          { en: "Vegetables", es: "Verduras", de: "Gemüse", nl: "Groenten" },
          { en: "Soup", es: "Sopa", de: "Suppe", nl: "Soep" },
          { en: "Salad", es: "Ensalada", de: "Salat", nl: "Salade" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do people often send to friends and family during the holidays?",
          es: "¿Qué suele enviar la gente a amigos y familiares durante las fiestas?",
          de: "Was senden Menschen oft an Freunde und Familie während der Feiertage?",
          nl: "Wat sturen mensen vaak naar vrienden en familie tijdens de feestdagen?"
        },
        options: [
          { en: "Cards", es: "Tarjetas", de: "Karten", nl: "Kaarten" },
          { en: "Rocks", es: "Piedras", de: "Steine", nl: "Stenen" },
          { en: "Leaves", es: "Hojas", de: "Blätter", nl: "Bladeren" },
          { en: "Sticks", es: "Palos", de: "Stöcke", nl: "Stokken" }
        ],
        correctIndex: 0
      }
    ],

    // Day 7 - December 7th: Winter Animals
    day7: [
      {
        question: {
          en: "Which animal has thick white fur to stay warm in cold places?",
          es: "¿Qué animal tiene pelaje blanco y grueso para mantenerse caliente en lugares fríos?",
          de: "Welches Tier hat dickes weißes Fell, um in kalten Orten warm zu bleiben?",
          nl: "Welk dier heeft dikke witte vacht om warm te blijven op koude plaatsen?"
        },
        options: [
          { en: "Polar bear", es: "Oso polar", de: "Eisbär", nl: "IJsbeer" },
          { en: "Lion", es: "León", de: "Löwe", nl: "Leeuw" },
          { en: "Elephant", es: "Elefante", de: "Elefant", nl: "Olifant" },
          { en: "Giraffe", es: "Jirafa", de: "Giraffe", nl: "Giraffe" }
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
          { en: "Malta", es: "Malta", de: "Malta", nl: "Malta" },
          { en: "San Marino", es: "San Marino", de: "San Marino", nl: "San Marino" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 84 ÷ 12?",
          es: "¿Cuánto es 84 ÷ 12?",
          de: "Was ist 84 ÷ 12?",
          nl: "Hoeveel is 84 ÷ 12?"
        },
        options: [
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "9", es: "9", de: "9", nl: "9" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do penguins use to slide on ice?",
          es: "¿Qué usan los pingüinos para deslizarse sobre el hielo?",
          de: "Was benutzen Pinguine, um auf dem Eis zu rutschen?",
          nl: "Wat gebruiken pinguïns om over het ijs te glijden?"
        },
        options: [
          { en: "Their belly", es: "Su vientre", de: "Ihren Bauch", nl: "Hun buik" },
          { en: "Their wings", es: "Sus alas", de: "Ihre Flügel", nl: "Hun vleugels" },
          { en: "Their feet", es: "Sus pies", de: "Ihre Füße", nl: "Hun voeten" },
          { en: "Their head", es: "Su cabeza", de: "Ihren Kopf", nl: "Hun hoofd" }
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
          { en: "Winter", es: "Invierno", de: "Winter", nl: "Winter" }
        ],
        correctIndex: 0
      }
    ],

    // Day 8 - December 8th: Christmas Music and Fun
    day8: [
      {
        question: {
          en: "What instrument is often heard in Christmas songs?",
          es: "¿Qué instrumento se escucha a menudo en las canciones de Navidad?",
          de: "Welches Instrument hört man oft in Weihnachtsliedern?",
          nl: "Welk instrument wordt vaak gehoord in kerstliedjes?"
        },
        options: [
          { en: "Bells", es: "Campanas", de: "Glocken", nl: "Klokken" },
          { en: "Trumpet", es: "Trompeta", de: "Trompete", nl: "Trompet" },
          { en: "Drums", es: "Tambores", de: "Trommeln", nl: "Drums" },
          { en: "Flute", es: "Flauta", de: "Flöte", nl: "Fluit" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which gas do plants need to make their food?",
          es: "¿Qué gas necesitan las plantas para hacer su comida?",
          de: "Welches Gas brauchen Pflanzen, um ihre Nahrung zu produzieren?",
          nl: "Welk gas hebben planten nodig om hun voedsel te maken?"
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
          en: "What is 13 × 4?",
          es: "¿Cuánto es 13 × 4?",
          de: "Was ist 13 × 4?",
          nl: "Hoeveel is 13 × 4?"
        },
        options: [
          { en: "52", es: "52", de: "52", nl: "52" },
          { en: "48", es: "48", de: "48", nl: "48" },
          { en: "56", es: "56", de: "56", nl: "56" },
          { en: "44", es: "44", de: "44", nl: "44" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do carolers do during Christmas time?",
          es: "¿Qué hacen los villancicos durante la época navideña?",
          de: "Was machen Weihnachtssänger zur Weihnachtszeit?",
          nl: "Wat doen kerstzangers tijdens de kersttijd?"
        },
        options: [
          { en: "Sing songs", es: "Cantar canciones", de: "Lieder singen", nl: "Liedjes zingen" },
          { en: "Dance", es: "Bailar", de: "Tanzen", nl: "Dansen" },
          { en: "Sleep", es: "Dormir", de: "Schlafen", nl: "Slapen" },
          { en: "Read books", es: "Leer libros", de: "Bücher lesen", nl: "Boeken lezen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What magical item helps Santa know if children are good or bad?",
          es: "¿Qué objeto mágico ayuda a Santa a saber si los niños son buenos o malos?",
          de: "Welcher magische Gegenstand hilft dem Weihnachtsmann zu wissen, ob Kinder artig oder unartig sind?",
          nl: "Welk magisch voorwerp helpt de Kerstman te weten of kinderen braaf of stout zijn?"
        },
        options: [
          { en: "His list", es: "Su lista", de: "Seine Liste", nl: "Zijn lijst" },
          { en: "His hat", es: "Su sombrero", de: "Sein Hut", nl: "Zijn hoed" },
          { en: "His boots", es: "Sus botas", de: "Seine Stiefel", nl: "Zijn laarzen" },
          { en: "His belt", es: "Su cinturón", de: "Sein Gürtel", nl: "Zijn riem" }
        ],
        correctIndex: 0
      }
    ],

    // Day 9 - December 9th: Winter Sports and Activities
    day9: [
      {
        question: {
          en: "What sport involves sliding down snowy hills?",
          es: "¿Qué deporte implica deslizarse por colinas nevadas?",
          de: "Welcher Sport beinhaltet das Hinunterrutschen verschneiter Hügel?",
          nl: "Welke sport houdt in dat je van besneeuwde heuvels afglijdt?"
        },
        options: [
          { en: "Skiing", es: "Esquí", de: "Skifahren", nl: "Skiën" },
          { en: "Swimming", es: "Natación", de: "Schwimmen", nl: "Zwemmen" },
          { en: "Running", es: "Correr", de: "Laufen", nl: "Rennen" },
          { en: "Basketball", es: "Baloncesto", de: "Basketball", nl: "Basketbal" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the hardest natural substance on Earth?",
          es: "¿Cuál es la sustancia natural más dura de la Tierra?",
          de: "Was ist die härteste natürliche Substanz auf der Erde?",
          nl: "Wat is de hardste natuurlijke stof op aarde?"
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
          en: "What is 72 ÷ 8?",
          es: "¿Cuánto es 72 ÷ 8?",
          de: "Was ist 72 ÷ 8?",
          nl: "Hoeveel is 72 ÷ 8?"
        },
        options: [
          { en: "9", es: "9", de: "9", nl: "9" },
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "7", es: "7", de: "7", nl: "7" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What winter activity involves throwing snowballs?",
          es: "¿Qué actividad de invierno implica lanzar bolas de nieve?",
          de: "Welche Winteraktivität beinhaltet das Werfen von Schneebällen?",
          nl: "Welke winteractiviteit houdt in dat je sneeuwballen gooit?"
        },
        options: [
          { en: "Snowball fight", es: "Pelea de bolas de nieve", de: "Schneeballschlacht", nl: "Sneeuwballengevecht" },
          { en: "Reading", es: "Leer", de: "Lesen", nl: "Lezen" },
          { en: "Cooking", es: "Cocinar", de: "Kochen", nl: "Koken" },
          { en: "Painting", es: "Pintar", de: "Malen", nl: "Schilderen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What frozen water sport can you do on a lake?",
          es: "¿Qué deporte de agua congelada puedes hacer en un lago?",
          de: "Welchen gefrorenen Wassersport kann man auf einem See machen?",
          nl: "Welke bevroren watersport kun je op een meer doen?"
        },
        options: [
          { en: "Ice hockey", es: "Hockey sobre hielo", de: "Eishockey", nl: "IJshockey" },
          { en: "Surfing", es: "Surf", de: "Surfen", nl: "Surfen" },
          { en: "Water skiing", es: "Esquí acuático", de: "Wasserski", nl: "Waterskiën" },
          { en: "Diving", es: "Buceo", de: "Tauchen", nl: "Duiken" }
        ],
        correctIndex: 0
      }
    ],

    // Day 10 - December 10th: Christmas Decorations
    day10: [
      {
        question: {
          en: "What plant do people kiss under during Christmas?",
          es: "¿Bajo qué planta se besan las personas durante la Navidad?",
          de: "Unter welcher Pflanze küssen sich Menschen zu Weihnachten?",
          nl: "Onder welke plant zoenen mensen tijdens Kerstmis?"
        },
        options: [
          { en: "Mistletoe", es: "Muérdago", de: "Mistel", nl: "Maretak" },
          { en: "Rose", es: "Rosa", de: "Rose", nl: "Roos" },
          { en: "Tulip", es: "Tulipán", de: "Tulpe", nl: "Tulp" },
          { en: "Daisy", es: "Margarita", de: "Gänseblümchen", nl: "Madeliefje" }
        ],
        correctIndex: 0
      },
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
          { en: "Hiroshima", es: "Hiroshima", de: "Hiroshima", nl: "Hiroshima" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 11 × 8?",
          es: "¿Cuánto es 11 × 8?",
          de: "Was ist 11 × 8?",
          nl: "Hoeveel is 11 × 8?"
        },
        options: [
          { en: "88", es: "88", de: "88", nl: "88" },
          { en: "89", es: "89", de: "89", nl: "89" },
          { en: "80", es: "80", de: "80", nl: "80" },
          { en: "96", es: "96", de: "96", nl: "96" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What colorful decorations are often strung around Christmas trees?",
          es: "¿Qué decoraciones coloridas se suelen colgar alrededor de los árboles de Navidad?",
          de: "Welche bunten Dekorationen werden oft um Weihnachtsbäume gehängt?",
          nl: "Welke kleurrijke versieringen worden vaak rond kerstbomen gehangen?"
        },
        options: [
          { en: "Lights", es: "Luces", de: "Lichter", nl: "Lichtjes" },
          { en: "Newspapers", es: "Periódicos", de: "Zeitungen", nl: "Kranten" },
          { en: "Rocks", es: "Piedras", de: "Steine", nl: "Stenen" },
          { en: "Leaves", es: "Hojas", de: "Blätter", nl: "Bladeren" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What decoration is often placed at the top of a Christmas tree?",
          es: "¿Qué decoración se suele colocar en la parte superior de un árbol de Navidad?",
          de: "Welche Dekoration wird oft auf die Spitze eines Weihnachtsbaums gesetzt?",
          nl: "Welke versiering wordt vaak op de top van een kerstboom geplaatst?"
        },
        options: [
          { en: "Angel or star", es: "Ángel o estrella", de: "Engel oder Stern", nl: "Engel of ster" },
          { en: "Apple", es: "Manzana", de: "Apfel", nl: "Appel" },
          { en: "Book", es: "Libro", de: "Buch", nl: "Boek" },
          { en: "Shoe", es: "Zapato", de: "Schuh", nl: "Schoen" }
        ],
        correctIndex: 0
      }
    ],

    // Day 11 - December 11th: Holiday Foods
    day11: [
      {
        question: {
          en: "What spiced cookie is often shaped like people during Christmas?",
          es: "¿Qué galleta especiada se suele dar forma de personas durante la Navidad?",
          de: "Welcher gewürzte Keks wird zu Weihnachten oft in Menschenform gebacken?",
          nl: "Welk gekruide koekje wordt vaak in de vorm van mensen gemaakt tijdens Kerstmis?"
        },
        options: [
          { en: "Gingerbread", es: "Pan de jengibre", de: "Lebkuchen", nl: "Peperkoek" },
          { en: "Sugar cookie", es: "Galleta de azúcar", de: "Zuckerkeks", nl: "Suikerkoekje" },
          { en: "Chocolate chip", es: "Chispas de chocolate", de: "Schokoladenkeks", nl: "Chocoladekoekje" },
          { en: "Oatmeal", es: "Avena", de: "Haferkeks", nl: "Havermoutkoekje" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many bones are in the human body?",
          es: "¿Cuántos huesos hay en el cuerpo humano?",
          de: "Wie viele Knochen gibt es im menschlichen Körper?",
          nl: "Hoeveel botten zijn er in het menselijk lichaam?"
        },
        options: [
          { en: "206", es: "206", de: "206", nl: "206" },
          { en: "200", es: "200", de: "200", nl: "200" },
          { en: "220", es: "220", de: "220", nl: "220" },
          { en: "180", es: "180", de: "180", nl: "180" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 17 + 26?",
          es: "¿Cuánto es 17 + 26?",
          de: "Was ist 17 + 26?",
          nl: "Hoeveel is 17 + 26?"
        },
        options: [
          { en: "43", es: "43", de: "43", nl: "43" },
          { en: "42", es: "42", de: "42", nl: "42" },
          { en: "44", es: "44", de: "44", nl: "44" },
          { en: "41", es: "41", de: "41", nl: "41" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What warm drink is popular during winter holidays?",
          es: "¿Qué bebida caliente es popular durante las fiestas de invierno?",
          de: "Welches warme Getränk ist während der Winterfeiertage beliebt?",
          nl: "Welke warme drank is populair tijdens de winterfeestdagen?"
        },
        options: [
          { en: "Hot chocolate", es: "Chocolate caliente", de: "Heiße Schokolade", nl: "Warme chocolademelk" },
          { en: "Ice water", es: "Agua helada", de: "Eiswasser", nl: "IJswater" },
          { en: "Cold juice", es: "Jugo frío", de: "Kalter Saft", nl: "Koud sap" },
          { en: "Soda", es: "Refresco", de: "Limonade", nl: "Frisdrank" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What type of pie is traditionally eaten at Christmas in many countries?",
          es: "¿Qué tipo de pastel se come tradicionalmente en Navidad en muchos países?",
          de: "Welche Art von Kuchen wird traditionell zu Weihnachten in vielen Ländern gegessen?",
          nl: "Welk type taart wordt traditioneel gegeten met Kerstmis in veel landen?"
        },
        options: [
          { en: "Mince pie", es: "Pastel de carne picada", de: "Mince Pie", nl: "Gehaktpastei" },
          { en: "Apple pie", es: "Pastel de manzana", de: "Apfelkuchen", nl: "Appeltaart" },
          { en: "Pumpkin pie", es: "Pastel de calabaza", de: "Kürbiskuchen", nl: "Pompoentaart" },
          { en: "Cherry pie", es: "Pastel de cereza", de: "Kirschkuchen", nl: "Kersentaart" }
        ],
        correctIndex: 0
      }
    ],

    // Day 12 - December 12th: Winter Science
    day12: [
      {
        question: {
          en: "What shape do snowflakes naturally form?",
          es: "¿Qué forma forman naturalmente los copos de nieve?",
          de: "Welche Form bilden Schneeflocken natürlich?",
          nl: "Welke vorm vormen sneeuwvlokken van nature?"
        },
        options: [
          { en: "Six-sided", es: "De seis lados", de: "Sechsseitig", nl: "Zeshoekig" },
          { en: "Four-sided", es: "De cuatro lados", de: "Vierseitig", nl: "Vierhoekig" },
          { en: "Round", es: "Redondo", de: "Rund", nl: "Rond" },
          { en: "Triangle", es: "Triángulo", de: "Dreieck", nl: "Driehoek" }
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
          { en: "Indian", es: "Índico", de: "Indischer Ozean", nl: "Indische Oceaan" },
          { en: "Arctic", es: "Ártico", de: "Arktischer Ozean", nl: "Noordelijke IJszee" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 9 × 7?",
          es: "¿Cuánto es 9 × 7?",
          de: "Was ist 9 × 7?",
          nl: "Hoeveel is 9 × 7?"
        },
        options: [
          { en: "63", es: "63", de: "63", nl: "63" },
          { en: "56", es: "56", de: "56", nl: "56" },
          { en: "72", es: "72", de: "72", nl: "72" },
          { en: "54", es: "54", de: "54", nl: "54" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Why do lakes freeze from the top down?",
          es: "¿Por qué se congelan los lagos de arriba hacia abajo?",
          de: "Warum frieren Seen von oben nach unten zu?",
          nl: "Waarom bevriezen meren van boven naar beneden?"
        },
        options: [
          { en: "Ice is less dense than water", es: "El hielo es menos denso que el agua", de: "Eis ist weniger dicht als Wasser", nl: "Ijs is minder dicht dan water" },
          { en: "Ice is heavier than water", es: "El hielo es más pesado que el agua", de: "Eis ist schwerer als Wasser", nl: "Ijs is zwaarder dan water" },
          { en: "Water never freezes", es: "El agua nunca se congela", de: "Wasser gefriert nie", nl: "Water bevriest nooit" },
          { en: "Ice melts quickly", es: "El hielo se derrite rápido", de: "Eis schmilzt schnell", nl: "Ijs smelt snel" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What causes icicles to form?",
          es: "¿Qué hace que se formen los carámbanos?",
          de: "Was verursacht die Bildung von Eiszapfen?",
          nl: "Wat zorgt ervoor dat ijspegels zich vormen?"
        },
        options: [
          { en: "Melting and refreezing", es: "Derretimiento y recongelación", de: "Schmelzen und Wiedergefrieren", nl: "Smelten en opnieuw bevriezen" },
          { en: "Wind", es: "Viento", de: "Wind", nl: "Wind" },
          { en: "Rain", es: "Lluvia", de: "Regen", nl: "Regen" },
          { en: "Lightning", es: "Relámpago", de: "Blitz", nl: "Bliksem" }
        ],
        correctIndex: 0
      }
    ],

    // Day 13 - December 13th: Christmas Around the World
    day13: [
      {
        question: {
          en: "In which country did the Christmas tree tradition begin?",
          es: "¿En qué país comenzó la tradición del árbol de Navidad?",
          de: "In welchem Land begann die Weihnachtsbaumtradition?",
          nl: "In welk land begon de kerstboom traditie?"
        },
        options: [
          { en: "Germany", es: "Alemania", de: "Deutschland", nl: "Duitsland" },
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "England", es: "Inglaterra", de: "England", nl: "Engeland" },
          { en: "Italy", es: "Italia", de: "Italien", nl: "Italië" }
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
          { en: "Gd", es: "Gd", de: "Gd", nl: "Gd" },
          { en: "Ag", es: "Ag", de: "Ag", nl: "Ag" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 96 ÷ 8?",
          es: "¿Cuánto es 96 ÷ 8?",
          de: "Was ist 96 ÷ 8?",
          nl: "Hoeveel is 96 ÷ 8?"
        },
        options: [
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "11", es: "11", de: "11", nl: "11" },
          { en: "13", es: "13", de: "13", nl: "13" },
          { en: "10", es: "10", de: "10", nl: "10" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do children in some countries put out for Santa's reindeer?",
          es: "¿Qué dejan los niños en algunos países para los renos de Santa?",
          de: "Was stellen Kinder in manchen Ländern für die Rentiere des Weihnachtsmanns raus?",
          nl: "Wat zetten kinderen in sommige landen neer voor de rendieren van de Kerstman?"
        },
        options: [
          { en: "Carrots", es: "Zanahorias", de: "Karotten", nl: "Wortels" },
          { en: "Candy", es: "Dulces", de: "Süßigkeiten", nl: "Snoep" },
          { en: "Toys", es: "Juguetes", de: "Spielzeug", nl: "Speelgoed" },
          { en: "Books", es: "Libros", de: "Bücher", nl: "Boeken" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "In which country do people celebrate Christmas on the beach?",
          es: "¿En qué país la gente celebra la Navidad en la playa?",
          de: "In welchem Land feiern Menschen Weihnachten am Strand?",
          nl: "In welk land vieren mensen Kerstmis op het strand?"
        },
        options: [
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" },
          { en: "Canada", es: "Canadá", de: "Kanada", nl: "Canada" },
          { en: "Norway", es: "Noruega", de: "Norwegen", nl: "Noorwegen" },
          { en: "Russia", es: "Rusia", de: "Russland", nl: "Rusland" }
        ],
        correctIndex: 0
      }
    ],

    // Day 14 - December 14th: Gift Giving and Kindness
    day14: [
      {
        question: {
          en: "What is the spirit of giving during Christmas called?",
          es: "¿Cómo se llama el espíritu de dar durante la Navidad?",
          de: "Wie nennt man den Geist des Gebens zu Weihnachten?",
          nl: "Hoe heet de geest van het geven tijdens Kerstmis?"
        },
        options: [
          { en: "Generosity", es: "Generosidad", de: "Großzügigkeit", nl: "Vrijgevigheid" },
          { en: "Anger", es: "Ira", de: "Wut", nl: "Woede" },
          { en: "Sadness", es: "Tristeza", de: "Traurigkeit", nl: "Verdriet" },
          { en: "Fear", es: "Miedo", de: "Angst", nl: "Angst" }
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
          { en: "Nile", es: "Nilo", de: "Nil", nl: "Nijl" },
          { en: "Amazon", es: "Amazonas", de: "Amazonas", nl: "Amazone" },
          { en: "Mississippi", es: "Misisipi", de: "Mississippi", nl: "Mississippi" },
          { en: "Yangtze", es: "Yangtsé", de: "Jangtse", nl: "Yangtze" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 14 × 6?",
          es: "¿Cuánto es 14 × 6?",
          de: "Was ist 14 × 6?",
          nl: "Hoeveel is 14 × 6?"
        },
        options: [
          { en: "84", es: "84", de: "84", nl: "84" },
          { en: "82", es: "82", de: "82", nl: "82" },
          { en: "86", es: "86", de: "86", nl: "86" },
          { en: "80", es: "80", de: "80", nl: "80" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is a good way to show kindness during the holidays?",
          es: "¿Cuál es una buena manera de mostrar bondad durante las fiestas?",
          de: "Was ist ein guter Weg, Freundlichkeit während der Feiertage zu zeigen?",
          nl: "Wat is een goede manier om vriendelijkheid te tonen tijdens de feestdagen?"
        },
        options: [
          { en: "Helping others", es: "Ayudar a otros", de: "Anderen helfen", nl: "Anderen helpen" },
          { en: "Being mean", es: "Ser malo", de: "Gemein sein", nl: "Gemeen zijn" },
          { en: "Ignoring people", es: "Ignorar a la gente", de: "Menschen ignorieren", nl: "Mensen negeren" },
          { en: "Being selfish", es: "Ser egoísta", de: "Egoistisch sein", nl: "Egoïstisch zijn" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do people often wrap gifts in?",
          es: "¿En qué suelen envolver los regalos las personas?",
          de: "Womit verpacken Menschen oft Geschenke?",
          nl: "Waar wikkelen mensen cadeaus vaak in?"
        },
        options: [
          { en: "Wrapping paper", es: "Papel de regalo", de: "Geschenkpapier", nl: "Cadeaupapier" },
          { en: "Newspaper", es: "Periódico", de: "Zeitung", nl: "Krant" },
          { en: "Plastic bags", es: "Bolsas de plástico", de: "Plastiktüten", nl: "Plastic zakken" },
          { en: "Aluminum foil", es: "Papel de aluminio", de: "Aluminiumfolie", nl: "Aluminiumfolie" }
        ],
        correctIndex: 0
      }
    ],

    // Day 15 - December 15th: Looking Forward to Christmas
    day15: [
      {
        question: {
          en: "How many days until Christmas from December 15th?",
          es: "¿Cuántos días faltan para Navidad desde el 15 de diciembre?",
          de: "Wie viele Tage sind es vom 15. Dezember bis Weihnachten?",
          nl: "Hoeveel dagen zijn het nog tot Kerstmis vanaf 15 december?"
        },
        options: [
          { en: "10 days", es: "10 días", de: "10 Tage", nl: "10 dagen" },
          { en: "15 days", es: "15 días", de: "15 Tage", nl: "15 dagen" },
          { en: "5 days", es: "5 días", de: "5 Tage", nl: "5 dagen" },
          { en: "20 days", es: "20 días", de: "20 Tage", nl: "20 dagen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the speed of light?",
          es: "¿Cuál es la velocidad de la luz?",
          de: "Wie schnell ist die Lichtgeschwindigkeit?",
          nl: "Wat is de lichtsnelheid?"
        },
        options: [
          { en: "300,000 km/s", es: "300.000 km/s", de: "300.000 km/s", nl: "300.000 km/s" },
          { en: "150,000 km/s", es: "150.000 km/s", de: "150.000 km/s", nl: "150.000 km/s" },
          { en: "500,000 km/s", es: "500.000 km/s", de: "500.000 km/s", nl: "500.000 km/s" },
          { en: "100,000 km/s", es: "100.000 km/s", de: "100.000 km/s", nl: "100.000 km/s" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 18 + 37?",
          es: "¿Cuánto es 18 + 37?",
          de: "Was ist 18 + 37?",
          nl: "Hoeveel is 18 + 37?"
        },
        options: [
          { en: "55", es: "55", de: "55", nl: "55" },
          { en: "54", es: "54", de: "54", nl: "54" },
          { en: "56", es: "56", de: "56", nl: "56" },
          { en: "53", es: "53", de: "53", nl: "53" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What feeling do most people have when Christmas is near?",
          es: "¿Qué sentimiento tienen la mayoría de las personas cuando se acerca la Navidad?",
          de: "Welches Gefühl haben die meisten Menschen, wenn Weihnachten naht?",
          nl: "Welk gevoel hebben de meeste mensen als Kerstmis nadert?"
        },
        options: [
          { en: "Excitement", es: "Emoción", de: "Aufregung", nl: "Opwinding" },
          { en: "Boredom", es: "Aburrimiento", de: "Langeweile", nl: "Verveling" },
          { en: "Anger", es: "Ira", de: "Wut", nl: "Woede" },
          { en: "Sadness", es: "Tristeza", de: "Traurigkeit", nl: "Verdriet" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do families often do together during Christmas time?",
          es: "¿Qué suelen hacer las familias juntas durante la época navideña?",
          de: "Was machen Familien oft zusammen zur Weihnachtszeit?",
          nl: "Wat doen families vaak samen tijdens de kersttijd?"
        },
        options: [
          { en: "Spend time together", es: "Pasar tiempo juntos", de: "Zeit miteinander verbringen", nl: "Tijd samen doorbrengen" },
          { en: "Avoid each other", es: "Evitarse", de: "Sich meiden", nl: "Elkaar mijden" },
          { en: "Work separately", es: "Trabajar por separado", de: "Getrennt arbeiten", nl: "Afzonderlijk werken" },
          { en: "Stay silent", es: "Permanecer en silencio", de: "Schweigen", nl: "Stil blijven" }
        ],
        correctIndex: 0
      }
    ],

    // Day 16 - December 16th: Winter Preparations
    day16: [
      {
        question: {
          en: "What do people often put on their houses during Christmas?",
          es: "¿Qué suele poner la gente en sus casas durante la Navidad?",
          de: "Was hängen Menschen oft an ihre Häuser zu Weihnachten?",
          nl: "Wat doen mensen vaak op hun huizen tijdens Kerstmis?"
        },
        options: [
          { en: "Christmas lights", es: "Luces de Navidad", de: "Weihnachtsbeleuchtung", nl: "Kerstverlichting" },
          { en: "Summer decorations", es: "Decoraciones de verano", de: "Sommerdekoration", nl: "Zomerversieringen" },
          { en: "Halloween pumpkins", es: "Calabazas de Halloween", de: "Halloween-Kürbisse", nl: "Halloween pompoenen" },
          { en: "Birthday balloons", es: "Globos de cumpleaños", de: "Geburtstagsballons", nl: "Verjaardagsballonnen" }
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
          { en: "Naples", es: "Nápoles", de: "Neapel", nl: "Napels" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 16 × 5?",
          es: "¿Cuánto es 16 × 5?",
          de: "Was ist 16 × 5?",
          nl: "Hoeveel is 16 × 5?"
        },
        options: [
          { en: "80", es: "80", de: "80", nl: "80" },
          { en: "75", es: "75", de: "75", nl: "75" },
          { en: "85", es: "85", de: "85", nl: "85" },
          { en: "70", es: "70", de: "70", nl: "70" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What winter clothing keeps your hands warm?",
          es: "¿Qué ropa de invierno mantiene las manos calientes?",
          de: "Welche Winterkleidung hält die Hände warm?",
          nl: "Welke winterkleding houdt je handen warm?"
        },
        options: [
          { en: "Gloves", es: "Guantes", de: "Handschuhe", nl: "Handschoenen" },
          { en: "Shorts", es: "Pantalones cortos", de: "Shorts", nl: "Korte broeken" },
          { en: "Sandals", es: "Sandalias", de: "Sandalen", nl: "Sandalen" },
          { en: "T-shirt", es: "Camiseta", de: "T-Shirt", nl: "T-shirt" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What special calendar helps count days until Christmas?",
          es: "¿Qué calendario especial ayuda a contar los días hasta Navidad?",
          de: "Welcher spezielle Kalender hilft beim Zählen der Tage bis Weihnachten?",
          nl: "Welke speciale kalender helpt bij het tellen van dagen tot Kerstmis?"
        },
        options: [
          { en: "Advent calendar", es: "Calendario de Adviento", de: "Adventskalender", nl: "Adventskalender" },
          { en: "Birthday calendar", es: "Calendario de cumpleaños", de: "Geburtstagskalender", nl: "Verjaardagskalender" },
          { en: "School calendar", es: "Calendario escolar", de: "Schulkalender", nl: "Schoolkalender" },
          { en: "Work calendar", es: "Calendario de trabajo", de: "Arbeitskalender", nl: "Werkkalender" }
        ],
        correctIndex: 0
      }
    ],

    // Day 17 - December 17th: Christmas Stories and Legends
    day17: [
      {
        question: {
          en: "What do the three wise men bring to baby Jesus?",
          es: "¿Qué traen los tres reyes magos al niño Jesús?",
          de: "Was bringen die drei Weisen dem Jesuskind?",
          nl: "Wat brengen de drie wijzen aan het kindje Jezus?"
        },
        options: [
          { en: "Gold, frankincense, and myrrh", es: "Oro, incienso y mirra", de: "Gold, Weihrauch und Myrrhe", nl: "Goud, wierook en mirre" },
          { en: "Toys and candy", es: "Juguetes y dulces", de: "Spielzeug und Süßigkeiten", nl: "Speelgoed en snoep" },
          { en: "Food and water", es: "Comida y agua", de: "Essen und Wasser", nl: "Eten en water" },
          { en: "Clothes and shoes", es: "Ropa y zapatos", de: "Kleidung und Schuhe", nl: "Kleding en schoenen" }
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
          en: "What is 144 ÷ 12?",
          es: "¿Cuánto es 144 ÷ 12?",
          de: "Was ist 144 ÷ 12?",
          nl: "Hoeveel is 144 ÷ 12?"
        },
        options: [
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "11", es: "11", de: "11", nl: "11" },
          { en: "13", es: "13", de: "13", nl: "13" },
          { en: "10", es: "10", de: "10", nl: "10" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "In the song 'The Twelve Days of Christmas', what is given on the first day?",
          es: "En la canción 'Los Doce Días de Navidad', ¿qué se da el primer día?",
          de: "In dem Lied 'Die Zwölf Weihnachtstage', was wird am ersten Tag gegeben?",
          nl: "In het lied 'De Twaalf Dagen van Kerstmis', wat wordt er gegeven op de eerste dag?"
        },
        options: [
          { en: "A partridge in a pear tree", es: "Una perdiz en un peral", de: "Ein Rebhuhn in einem Birnbaum", nl: "Een patrijs in een perenboom" },
          { en: "Two turtle doves", es: "Dos tórtolas", de: "Zwei Turteltauben", nl: "Twee tortelduiven" },
          { en: "Three French hens", es: "Tres gallinas francesas", de: "Drei französische Hennen", nl: "Drie Franse hennen" },
          { en: "Four calling birds", es: "Cuatro pájaros cantores", de: "Vier rufende Vögel", nl: "Vier roepende vogels" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What magical creature helps Santa make toys?",
          es: "¿Qué criatura mágica ayuda a Santa a hacer juguetes?",
          de: "Welche magische Kreatur hilft dem Weihnachtsmann beim Spielzeugmachen?",
          nl: "Welk magisch wezen helpt de Kerstman bij het maken van speelgoed?"
        },
        options: [
          { en: "Elves", es: "Duendes", de: "Elfen", nl: "Elfen" },
          { en: "Fairies", es: "Hadas", de: "Feen", nl: "Feeën" },
          { en: "Dragons", es: "Dragones", de: "Drachen", nl: "Draken" },
          { en: "Unicorns", es: "Unicornios", de: "Einhörner", nl: "Eenhoorns" }
        ],
        correctIndex: 0
      }
    ],

    // Day 18 - December 18th: Winter Weather and Science
    day18: [
      {
        question: {
          en: "What causes snow to be white?",
          es: "¿Qué hace que la nieve sea blanca?",
          de: "Was bewirkt, dass Schnee weiß ist?",
          nl: "Wat zorgt ervoor dat sneeuw wit is?"
        },
        options: [
          { en: "Light reflection", es: "Reflexión de la luz", de: "Lichtreflexion", nl: "Lichtreflectie" },
          { en: "Cold temperature", es: "Temperatura fría", de: "Kalte Temperatur", nl: "Koude temperatuur" },
          { en: "Wind", es: "Viento", de: "Wind", nl: "Wind" },
          { en: "Darkness", es: "Oscuridad", de: "Dunkelheit", nl: "Duisternis" }
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
          { en: "Mount Fuji", es: "Monte Fuji", de: "Mount Fuji", nl: "Mount Fuji" },
          { en: "Mount McKinley", es: "Monte McKinley", de: "Mount McKinley", nl: "Mount McKinley" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 23 + 49?",
          es: "¿Cuánto es 23 + 49?",
          de: "Was ist 23 + 49?",
          nl: "Hoeveel is 23 + 49?"
        },
        options: [
          { en: "72", es: "72", de: "72", nl: "72" },
          { en: "71", es: "71", de: "71", nl: "71" },
          { en: "73", es: "73", de: "73", nl: "73" },
          { en: "70", es: "70", de: "70", nl: "70" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What happens to most animals during winter?",
          es: "¿Qué les pasa a la mayoría de los animales durante el invierno?",
          de: "Was passiert mit den meisten Tieren im Winter?",
          nl: "Wat gebeurt er met de meeste dieren tijdens de winter?"
        },
        options: [
          { en: "They adapt or migrate", es: "Se adaptan o migran", de: "Sie passen sich an oder wandern", nl: "Ze passen zich aan of trekken weg" },
          { en: "They disappear forever", es: "Desaparecen para siempre", de: "Sie verschwinden für immer", nl: "Ze verdwijnen voor altijd" },
          { en: "They become bigger", es: "Se vuelven más grandes", de: "Sie werden größer", nl: "Ze worden groter" },
          { en: "They change colors randomly", es: "Cambian de color al azar", de: "Sie wechseln zufällig die Farbe", nl: "Ze veranderen willekeurig van kleur" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many days before Christmas is December 18th?",
          es: "¿Cuántos días antes de Navidad es el 18 de diciembre?",
          de: "Wie viele Tage vor Weihnachten ist der 18. Dezember?",
          nl: "Hoeveel dagen voor Kerstmis is 18 december?"
        },
        options: [
          { en: "7 days", es: "7 días", de: "7 Tage", nl: "7 dagen" },
          { en: "10 days", es: "10 días", de: "10 Tage", nl: "10 dagen" },
          { en: "5 days", es: "5 días", de: "5 Tage", nl: "5 dagen" },
          { en: "14 days", es: "14 días", de: "14 Tage", nl: "14 dagen" }
        ],
        correctIndex: 0
      }
    ],

    // Day 19 - December 19th: Christmas Preparations Intensify
    day19: [
      {
        question: {
          en: "What do people often do the week before Christmas?",
          es: "¿Qué suele hacer la gente la semana antes de Navidad?",
          de: "Was machen Menschen oft in der Woche vor Weihnachten?",
          nl: "Wat doen mensen vaak de week voor Kerstmis?"
        },
        options: [
          { en: "Last-minute shopping", es: "Compras de último momento", de: "Last-Minute-Einkäufe", nl: "Last-minute winkelen" },
          { en: "Plant gardens", es: "Plantar jardines", de: "Gärten pflanzen", nl: "Tuinen aanleggen" },
          { en: "Go swimming", es: "Ir a nadar", de: "Schwimmen gehen", nl: "Gaan zwemmen" },
          { en: "Have picnics", es: "Hacer picnics", de: "Picknicken", nl: "Picknicken" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What gas makes up most of Earth's atmosphere?",
          es: "¿Qué gas compone la mayor parte de la atmósfera terrestre?",
          de: "Welches Gas macht den größten Teil der Erdatmosphäre aus?",
          nl: "Welk gas vormt het grootste deel van de aardse atmosfeer?"
        },
        options: [
          { en: "Nitrogen", es: "Nitrógeno", de: "Stickstoff", nl: "Stikstof" },
          { en: "Oxygen", es: "Oxígeno", de: "Sauerstoff", nl: "Zuurstof" },
          { en: "Carbon dioxide", es: "Dióxido de carbono", de: "Kohlendioxid", nl: "Koolstofdioxide" },
          { en: "Hydrogen", es: "Hidrógeno", de: "Wasserstoff", nl: "Waterstof" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 15 × 7?",
          es: "¿Cuánto es 15 × 7?",
          de: "Was ist 15 × 7?",
          nl: "Hoeveel is 15 × 7?"
        },
        options: [
          { en: "105", es: "105", de: "105", nl: "105" },
          { en: "100", es: "100", de: "100", nl: "100" },
          { en: "110", es: "110", de: "110", nl: "110" },
          { en: "95", es: "95", de: "95", nl: "95" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do children often leave for Santa on Christmas Eve?",
          es: "¿Qué suelen dejar los niños para Santa en Nochebuena?",
          de: "Was lassen Kinder oft für den Weihnachtsmann am Heiligabend da?",
          nl: "Wat laten kinderen vaak achter voor de Kerstman op kerstavond?"
        },
        options: [
          { en: "Milk and cookies", es: "Leche y galletas", de: "Milch und Kekse", nl: "Melk en koekjes" },
          { en: "Pizza and soda", es: "Pizza y refresco", de: "Pizza und Limonade", nl: "Pizza en frisdrank" },
          { en: "Vegetables", es: "Verduras", de: "Gemüse", nl: "Groenten" },
          { en: "Coffee", es: "Café", de: "Kaffee", nl: "Koffie" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What activity helps people get into the Christmas spirit?",
          es: "¿Qué actividad ayuda a las personas a entrar en el espíritu navideño?",
          de: "Welche Aktivität hilft Menschen, in Weihnachtsstimmung zu kommen?",
          nl: "Welke activiteit helpt mensen in de kerstsfeer te komen?"
        },
        options: [
          { en: "Decorating the house", es: "Decorar la casa", de: "Das Haus schmücken", nl: "Het huis versieren" },
          { en: "Cleaning the garage", es: "Limpiar el garaje", de: "Die Garage putzen", nl: "De garage schoonmaken" },
          { en: "Doing homework", es: "Hacer tarea", de: "Hausaufgaben machen", nl: "Huiswerk maken" },
          { en: "Organizing files", es: "Organizar archivos", de: "Dateien ordnen", nl: "Bestanden organiseren" }
        ],
        correctIndex: 0
      }
    ],

    // Day 20 - December 20th: Christmas Magic Begins
    day20: [
      {
        question: {
          en: "What special night comes just before Christmas Day?",
          es: "¿Qué noche especial viene justo antes del día de Navidad?",
          de: "Welche besondere Nacht kommt direkt vor dem Weihnachtstag?",
          nl: "Welke speciale nacht komt vlak voor Kerstmis?"
        },
        options: [
          { en: "Christmas Eve", es: "Nochebuena", de: "Heiligabend", nl: "Kerstavond" },
          { en: "New Year's Eve", es: "Nochevieja", de: "Silvester", nl: "Oudejaarsavond" },
          { en: "Halloween", es: "Halloween", de: "Halloween", nl: "Halloween" },
          { en: "Easter", es: "Pascua", de: "Ostern", nl: "Pasen" }
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
          { en: "Venus", es: "Venus", de: "Venus", nl: "Venus" },
          { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" },
          { en: "Pluto", es: "Plutón", de: "Pluto", nl: "Pluto" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 121 ÷ 11?",
          es: "¿Cuánto es 121 ÷ 11?",
          de: "Was ist 121 ÷ 11?",
          nl: "Hoeveel is 121 ÷ 11?"
        },
        options: [
          { en: "11", es: "11", de: "11", nl: "11" },
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "9", es: "9", de: "9", nl: "9" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What does Santa use to travel around the world on Christmas Eve?",
          es: "¿Qué usa Santa para viajar por el mundo en Nochebuena?",
          de: "Was benutzt der Weihnachtsmann, um am Heiligabend um die Welt zu reisen?",
          nl: "Wat gebruikt de Kerstman om op kerstavond rond de wereld te reizen?"
        },
        options: [
          { en: "A magical sleigh", es: "Un trineo mágico", de: "Ein magischer Schlitten", nl: "Een magische slee" },
          { en: "A car", es: "Un coche", de: "Ein Auto", nl: "Een auto" },
          { en: "A boat", es: "Un barco", de: "Ein Boot", nl: "Een boot" },
          { en: "A bicycle", es: "Una bicicleta", de: "Ein Fahrrad", nl: "Een fiets" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What Christmas decoration is round and often hung on doors?",
          es: "¿Qué decoración navideña es redonda y a menudo se cuelga en las puertas?",
          de: "Welche Weihnachtsdekoration ist rund und wird oft an Türen gehängt?",
          nl: "Welke kerstversiering is rond en wordt vaak aan deuren gehangen?"
        },
        options: [
          { en: "Wreath", es: "Corona", de: "Kranz", nl: "Krans" },
          { en: "Bell", es: "Campana", de: "Glocke", nl: "Bel" },
          { en: "Stocking", es: "Calcetín", de: "Strumpf", nl: "Kous" },
          { en: "Candle", es: "Vela", de: "Kerze", nl: "Kaars" }
        ],
        correctIndex: 0
      }
    ],

    // Day 21 - December 21st: Winter Solstice & Christmas Week
    day21: [
      {
        question: {
          en: "What special day marks the shortest day of the year in the Northern Hemisphere?",
          es: "¿Qué día especial marca el día más corto del año en el Hemisferio Norte?",
          de: "Welcher besondere Tag markiert den kürzesten Tag des Jahres auf der Nordhalbkugel?",
          nl: "Welke speciale dag markeert de kortste dag van het jaar op het noordelijk halfrond?"
        },
        options: [
          { en: "Winter solstice", es: "Solsticio de invierno", de: "Wintersonnenwende", nl: "Winterzonnewende" },
          { en: "Summer solstice", es: "Solsticio de verano", de: "Sommersonnenwende", nl: "Zomerzonnewende" },
          { en: "Spring equinox", es: "Equinoccio de primavera", de: "Frühjahrstagundnachtgleiche", nl: "Lente-equinox" },
          { en: "Autumn equinox", es: "Equinoccio de otoño", de: "Herbsttagundnachtgleiche", nl: "Herfst-equinox" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What organ pumps blood through your body?",
          es: "¿Qué órgano bombea la sangre por tu cuerpo?",
          de: "Welches Organ pumpt Blut durch deinen Körper?",
          nl: "Welk orgaan pompt bloed door je lichaam?"
        },
        options: [
          { en: "Heart", es: "Corazón", de: "Herz", nl: "Hart" },
          { en: "Liver", es: "Hígado", de: "Leber", nl: "Lever" },
          { en: "Kidney", es: "Riñón", de: "Niere", nl: "Nier" },
          { en: "Lung", es: "Pulmón", de: "Lunge", nl: "Long" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 19 × 4?",
          es: "¿Cuánto es 19 × 4?",
          de: "Was ist 19 × 4?",
          nl: "Hoeveel is 19 × 4?"
        },
        options: [
          { en: "76", es: "76", de: "76", nl: "76" },
          { en: "72", es: "72", de: "72", nl: "72" },
          { en: "80", es: "80", de: "80", nl: "80" },
          { en: "68", es: "68", de: "68", nl: "68" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What traditional Christmas plant has red berries and prickly leaves?",
          es: "¿Qué planta tradicional de Navidad tiene bayas rojas y hojas punzantes?",
          de: "Welche traditionelle Weihnachtspflanze hat rote Beeren und stachelige Blätter?",
          nl: "Welke traditionele kerstplant heeft rode bessen en stekelige bladeren?"
        },
        options: [
          { en: "Holly", es: "Acebo", de: "Stechpalme", nl: "Hulst" },
          { en: "Rose", es: "Rosa", de: "Rose", nl: "Roos" },
          { en: "Sunflower", es: "Girasol", de: "Sonnenblume", nl: "Zonnebloem" },
          { en: "Daisy", es: "Margarita", de: "Gänseblümchen", nl: "Madeliefje" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many days until Christmas from December 21st?",
          es: "¿Cuántos días faltan para Navidad desde el 21 de diciembre?",
          de: "Wie viele Tage sind es vom 21. Dezember bis Weihnachten?",
          nl: "Hoeveel dagen is het nog tot Kerstmis vanaf 21 december?"
        },
        options: [
          { en: "4 days", es: "4 días", de: "4 Tage", nl: "4 dagen" },
          { en: "5 days", es: "5 días", de: "5 Tage", nl: "5 dagen" },
          { en: "3 days", es: "3 días", de: "3 Tage", nl: "3 dagen" },
          { en: "6 days", es: "6 días", de: "6 Tage", nl: "6 dagen" }
        ],
        correctIndex: 0
      }
    ],

    // Day 22 - December 22nd: Christmas Excitement Builds
    day22: [
      {
        question: {
          en: "What do children often experience when Christmas is very close?",
          es: "¿Qué suelen experimentar los niños cuando la Navidad está muy cerca?",
          de: "Was empfinden Kinder oft, wenn Weihnachten sehr nahe ist?",
          nl: "Wat ervaren kinderen vaak als Kerstmis heel dichtbij is?"
        },
        options: [
          { en: "Great excitement", es: "Gran emoción", de: "Große Aufregung", nl: "Grote opwinding" },
          { en: "Boredom", es: "Aburrimiento", de: "Langeweile", nl: "Verveling" },
          { en: "Sadness", es: "Tristeza", de: "Traurigkeit", nl: "Verdriet" },
          { en: "Anger", es: "Enojo", de: "Wut", nl: "Woede" }
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
          en: "What is 34 + 28?",
          es: "¿Cuánto es 34 + 28?",
          de: "Was ist 34 + 28?",
          nl: "Hoeveel is 34 + 28?"
        },
        options: [
          { en: "62", es: "62", de: "62", nl: "62" },
          { en: "60", es: "60", de: "60", nl: "60" },
          { en: "64", es: "64", de: "64", nl: "64" },
          { en: "58", es: "58", de: "58", nl: "58" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do families often do together on Christmas Eve?",
          es: "¿Qué suelen hacer las familias juntas en Nochebuena?",
          de: "Was machen Familien oft zusammen am Heiligabend?",
          nl: "Wat doen families vaak samen op kerstavond?"
        },
        options: [
          { en: "Have a special dinner", es: "Cenar especialmente", de: "Ein besonderes Abendessen haben", nl: "Een speciaal diner hebben" },
          { en: "Go to work", es: "Ir a trabajar", de: "Zur Arbeit gehen", nl: "Naar het werk gaan" },
          { en: "Clean the house", es: "Limpiar la casa", de: "Das Haus putzen", nl: "Het huis schoonmaken" },
          { en: "Do homework", es: "Hacer tarea", de: "Hausaufgaben machen", nl: "Huiswerk maken" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What Christmas song mentions 'chestnuts roasting on an open fire'?",
          es: "¿Qué canción navideña menciona 'castañas asándose en un fuego abierto'?",
          de: "Welches Weihnachtslied erwähnt 'Kastanien, die am offenen Feuer rösten'?",
          nl: "Welk kerstlied vermeldt 'kastanjes roosteren op een open vuur'?"
        },
        options: [
          { en: "The Christmas Song", es: "La Canción de Navidad", de: "Das Weihnachtslied", nl: "Het Kerstlied" },
          { en: "Jingle Bells", es: "Cascabeles", de: "Jingle Bells", nl: "Jingle Bells" },
          { en: "Silent Night", es: "Noche Silenciosa", de: "Stille Nacht", nl: "Stille Nacht" },
          { en: "White Christmas", es: "Navidad Blanca", de: "Weiße Weihnachten", nl: "Witte Kerst" }
        ],
        correctIndex: 0
      }
    ],

    // Day 23 - December 23rd: Almost Christmas!
    day23: [
      {
        question: {
          en: "How many days until Christmas from December 23rd?",
          es: "¿Cuántos días faltan para Navidad desde el 23 de diciembre?",
          de: "Wie viele Tage sind es vom 23. Dezember bis Weihnachten?",
          nl: "Hoeveel dagen is het nog tot Kerstmis vanaf 23 december?"
        },
        options: [
          { en: "2 days", es: "2 días", de: "2 Tage", nl: "2 dagen" },
          { en: "3 days", es: "3 días", de: "3 Tage", nl: "3 dagen" },
          { en: "1 day", es: "1 día", de: "1 Tag", nl: "1 dag" },
          { en: "4 days", es: "4 días", de: "4 Tage", nl: "4 dagen" }
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
          { en: "Giraffe", es: "Jirafa", de: "Giraffe", nl: "Giraffe" },
          { en: "Hippopotamus", es: "Hipopótamo", de: "Nilpferd", nl: "Nijlpaard" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 168 ÷ 14?",
          es: "¿Cuánto es 168 ÷ 14?",
          de: "Was ist 168 ÷ 14?",
          nl: "Hoeveel is 168 ÷ 14?"
        },
        options: [
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "11", es: "11", de: "11", nl: "11" },
          { en: "13", es: "13", de: "13", nl: "13" },
          { en: "10", es: "10", de: "10", nl: "10" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do people often wrap and place under the Christmas tree?",
          es: "¿Qué suele envolver la gente y colocar bajo el árbol de Navidad?",
          de: "Was verpacken Menschen oft und legen unter den Weihnachtsbaum?",
          nl: "Wat wikkelen mensen vaak in en leggen onder de kerstboom?"
        },
        options: [
          { en: "Christmas presents", es: "Regalos de Navidad", de: "Weihnachtsgeschenke", nl: "Kerstcadeaus" },
          { en: "Food", es: "Comida", de: "Essen", nl: "Eten" },
          { en: "Books", es: "Libros", de: "Bücher", nl: "Boeken" },
          { en: "Clothes", es: "Ropa", de: "Kleidung", nl: "Kleding" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What traditional Christmas treat is shaped like a shepherd's staff?",
          es: "¿Qué dulce tradicional de Navidad tiene forma de bastón de pastor?",
          de: "Welche traditionelle Weihnachtsleckerei hat die Form eines Hirtenstabs?",
          nl: "Welke traditionele kersttraktatie heeft de vorm van een herdersstaf?"
        },
        options: [
          { en: "Candy cane", es: "Bastón de caramelo", de: "Zuckerstange", nl: "Zuurstok" },
          { en: "Chocolate bar", es: "Barra de chocolate", de: "Schokoladentafel", nl: "Chocoladereep" },
          { en: "Gummy bear", es: "Osito de goma", de: "Gummibärchen", nl: "Gummybeer" },
          { en: "Lollipop", es: "Piruleta", de: "Lutscher", nl: "Lolly" }
        ],
        correctIndex: 0
      }
    ],

    // Day 24 - December 24th: Christmas Eve - The Magic Night
    day24: [
      {
        question: {
          en: "What special night is December 24th?",
          es: "¿Qué noche especial es el 24 de diciembre?",
          de: "Welche besondere Nacht ist der 24. Dezember?",
          nl: "Welke speciale nacht is 24 december?"
        },
        options: [
          { en: "Christmas Eve", es: "Nochebuena", de: "Heiligabend", nl: "Kerstavond" },
          { en: "New Year's Eve", es: "Nochevieja", de: "Silvester", nl: "Oudejaarsavond" },
          { en: "Halloween", es: "Halloween", de: "Halloween", nl: "Halloween" },
          { en: "Valentine's Day", es: "Día de San Valentín", de: "Valentinstag", nl: "Valentijnsdag" }
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
          { en: "48", es: "48", de: "48", nl: "48" },
          { en: "36", es: "36", de: "36", nl: "36" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 17 × 8?",
          es: "¿Cuánto es 17 × 8?",
          de: "Was ist 17 × 8?",
          nl: "Hoeveel is 17 × 8?"
        },
        options: [
          { en: "136", es: "136", de: "136", nl: "136" },
          { en: "128", es: "128", de: "128", nl: "128" },
          { en: "144", es: "144", de: "144", nl: "144" },
          { en: "120", es: "120", de: "120", nl: "120" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do children often do on Christmas Eve night?",
          es: "¿Qué suelen hacer los niños en la noche de Nochebuena?",
          de: "Was machen Kinder oft in der Heiligabend-Nacht?",
          nl: "Wat doen kinderen vaak op kerstavond?"
        },
        options: [
          { en: "Try to sleep early for Santa", es: "Tratar de dormir temprano para Santa", de: "Versuchen früh zu schlafen für den Weihnachtsmann", nl: "Proberen vroeg te slapen voor de Kerstman" },
          { en: "Stay awake all night", es: "Mantenerse despierto toda la noche", de: "Die ganze Nacht wach bleiben", nl: "De hele nacht wakker blijven" },
          { en: "Go to school", es: "Ir a la escuela", de: "Zur Schule gehen", nl: "Naar school gaan" },
          { en: "Do homework", es: "Hacer tarea", de: "Hausaufgaben machen", nl: "Huiswerk maken" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "According to tradition, when does Santa visit houses?",
          es: "Según la tradición, ¿cuándo visita Santa las casas?",
          de: "Der Tradition nach, wann besucht der Weihnachtsmann die Häuser?",
          nl: "Volgens de traditie, wanneer bezoekt de Kerstman huizen?"
        },
        options: [
          { en: "While children are sleeping", es: "Mientras los niños duermen", de: "Während die Kinder schlafen", nl: "Terwijl kinderen slapen" },
          { en: "During the day", es: "Durante el día", de: "Tagsüber", nl: "Overdag" },
          { en: "In the morning", es: "Por la mañana", de: "Am Morgen", nl: "In de ochtend" },
          { en: "At noon", es: "Al mediodía", de: "Mittags", nl: "Rond de middag" }
        ],
        correctIndex: 0
      }
    ],

    // Day 25 - December 25th: Christmas Day - The Magical Day
    day25: [
      {
        question: {
          en: "What special day is celebrated on December 25th?",
          es: "¿Qué día especial se celebra el 25 de diciembre?",
          de: "Welcher besondere Tag wird am 25. Dezember gefeiert?",
          nl: "Welke speciale dag wordt gevierd op 25 december?"
        },
        options: [
          { en: "Christmas Day", es: "Día de Navidad", de: "Weihnachtstag", nl: "Kerstdag" },
          { en: "Easter", es: "Pascua", de: "Ostern", nl: "Pasen" },
          { en: "Halloween", es: "Halloween", de: "Halloween", nl: "Halloween" },
          { en: "Thanksgiving", es: "Acción de Gracias", de: "Thanksgiving", nl: "Thanksgiving" }
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
          en: "What is 25 × 4?",
          es: "¿Cuánto es 25 × 4?",
          de: "Was ist 25 × 4?",
          nl: "Hoeveel is 25 × 4?"
        },
        options: [
          { en: "100", es: "100", de: "100", nl: "100" },
          { en: "96", es: "96", de: "96", nl: "96" },
          { en: "104", es: "104", de: "104", nl: "104" },
          { en: "90", es: "90", de: "90", nl: "90" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do children typically do first thing on Christmas morning?",
          es: "¿Qué suelen hacer los niños lo primero en la mañana de Navidad?",
          de: "Was machen Kinder typischerweise als Erstes am Weihnachtsmorgen?",
          nl: "Wat doen kinderen meestal als eerste op kerst ochtend?"
        },
        options: [
          { en: "Open presents", es: "Abrir regalos", de: "Geschenke öffnen", nl: "Cadeaus openmaken" },
          { en: "Go to school", es: "Ir a la escuela", de: "Zur Schule gehen", nl: "Naar school gaan" },
          { en: "Clean their room", es: "Limpiar su cuarto", de: "Ihr Zimmer aufräumen", nl: "Hun kamer opruimen" },
          { en: "Do homework", es: "Hacer tarea", de: "Hausaufgaben machen", nl: "Huiswerk maken" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the most important message of Christmas?",
          es: "¿Cuál es el mensaje más importante de la Navidad?",
          de: "Was ist die wichtigste Botschaft von Weihnachten?",
          nl: "Wat is de belangrijkste boodschap van Kerstmis?"
        },
        options: [
          { en: "Love and giving", es: "Amor y generosidad", de: "Liebe und Geben", nl: "Liefde en geven" },
          { en: "Getting presents", es: "Recibir regalos", de: "Geschenke bekommen", nl: "Cadeaus krijgen" },
          { en: "Eating lots of food", es: "Comer mucha comida", de: "Viel essen", nl: "Veel eten" },
          { en: "Staying up late", es: "Quedarse despierto hasta tarde", de: "Lange aufbleiben", nl: "Lang opblijven" }
        ],
        correctIndex: 0
      }
    ],

    // Day 26 - December 26th: After Christmas, Looking to New Year
    day26: [
      {
        question: {
          en: "What day comes right after Christmas Day?",
          es: "¿Qué día viene justo después del día de Navidad?",
          de: "Welcher Tag kommt direkt nach dem Weihnachtstag?",
          nl: "Welke dag komt direct na Kerstdag?"
        },
        options: [
          { en: "Boxing Day", es: "Boxing Day", de: "Boxing Day", nl: "Boxing Day" },
          { en: "New Year's Day", es: "Año Nuevo", de: "Neujahrstag", nl: "Nieuwjaarsdag" },
          { en: "Easter", es: "Pascua", de: "Ostern", nl: "Pasen" },
          { en: "Halloween", es: "Halloween", de: "Halloween", nl: "Halloween" }
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
          en: "What is 132 ÷ 11?",
          es: "¿Cuánto es 132 ÷ 11?",
          de: "Was ist 132 ÷ 11?",
          nl: "Hoeveel is 132 ÷ 11?"
        },
        options: [
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "11", es: "11", de: "11", nl: "11" },
          { en: "13", es: "13", de: "13", nl: "13" },
          { en: "10", es: "10", de: "10", nl: "10" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many days are left in the year after December 26th?",
          es: "¿Cuántos días quedan en el año después del 26 de diciembre?",
          de: "Wie viele Tage sind nach dem 26. Dezember noch im Jahr übrig?",
          nl: "Hoeveel dagen zijn er nog over in het jaar na 26 december?"
        },
        options: [
          { en: "5 days", es: "5 días", de: "5 Tage", nl: "5 dagen" },
          { en: "6 days", es: "6 días", de: "6 Tage", nl: "6 dagen" },
          { en: "4 days", es: "4 días", de: "4 Tage", nl: "4 dagen" },
          { en: "7 days", es: "7 días", de: "7 Tage", nl: "7 dagen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do people often start thinking about after Christmas?",
          es: "¿En qué suele empezar a pensar la gente después de Navidad?",
          de: "Woran denken Menschen oft nach Weihnachten?",
          nl: "Waar beginnen mensen vaak aan te denken na Kerstmis?"
        },
        options: [
          { en: "The new year ahead", es: "El nuevo año que viene", de: "Das kommende neue Jahr", nl: "Het nieuwe jaar dat komt" },
          { en: "Summer vacation", es: "Vacaciones de verano", de: "Sommerferien", nl: "Zomervakantie" },
          { en: "Halloween decorations", es: "Decoraciones de Halloween", de: "Halloween-Dekoration", nl: "Halloween versieringen" },
          { en: "Easter eggs", es: "Huevos de Pascua", de: "Ostereier", nl: "Paaseieren" }
        ],
        correctIndex: 0
      }
    ],

    // Day 27 - December 27th: Reflecting on the Year
    day27: [
      {
        question: {
          en: "What is a good thing to do as the year comes to an end?",
          es: "¿Qué es bueno hacer cuando el año llega a su fin?",
          de: "Was ist gut zu tun, wenn das Jahr zu Ende geht?",
          nl: "Wat is goed om te doen als het jaar ten einde loopt?"
        },
        options: [
          { en: "Reflect on memories", es: "Reflexionar sobre los recuerdos", de: "Über Erinnerungen nachdenken", nl: "Nadenken over herinneringen" },
          { en: "Forget everything", es: "Olvidar todo", de: "Alles vergessen", nl: "Alles vergeten" },
          { en: "Be sad", es: "Estar triste", de: "Traurig sein", nl: "Verdrietig zijn" },
          { en: "Complain", es: "Quejarse", de: "Sich beklagen", nl: "Klagen" }
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
          en: "What is 21 × 6?",
          es: "¿Cuánto es 21 × 6?",
          de: "Was ist 21 × 6?",
          nl: "Hoeveel is 21 × 6?"
        },
        options: [
          { en: "126", es: "126", de: "126", nl: "126" },
          { en: "120", es: "120", de: "120", nl: "120" },
          { en: "132", es: "132", de: "132", nl: "132" },
          { en: "114", es: "114", de: "114", nl: "114" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What are some good things people might remember from the year?",
          es: "¿Cuáles son algunas cosas buenas que la gente podría recordar del año?",
          de: "Was sind einige gute Dinge, an die sich Menschen vom Jahr erinnern könnten?",
          nl: "Wat zijn enkele goede dingen die mensen zich van het jaar zouden kunnen herinneren?"
        },
        options: [
          { en: "Fun times with family", es: "Momentos divertidos con la familia", de: "Schöne Zeiten mit der Familie", nl: "Leuke tijden met familie" },
          { en: "Only bad things", es: "Solo cosas malas", de: "Nur schlechte Dinge", nl: "Alleen slechte dingen" },
          { en: "Nothing at all", es: "Nada en absoluto", de: "Überhaupt nichts", nl: "Helemaal niets" },
          { en: "Boring moments", es: "Momentos aburridos", de: "Langweilige Momente", nl: "Saaie momenten" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many days until New Year from December 27th?",
          es: "¿Cuántos días faltan para Año Nuevo desde el 27 de diciembre?",
          de: "Wie viele Tage sind es vom 27. Dezember bis Neujahr?",
          nl: "Hoeveel dagen is het nog tot Nieuwjaar vanaf 27 december?"
        },
        options: [
          { en: "4 days", es: "4 días", de: "4 Tage", nl: "4 dagen" },
          { en: "5 days", es: "5 días", de: "5 Tage", nl: "5 dagen" },
          { en: "3 days", es: "3 días", de: "3 Tage", nl: "3 dagen" },
          { en: "6 days", es: "6 días", de: "6 Tage", nl: "6 dagen" }
        ],
        correctIndex: 0
      }
    ],

    // Day 28 - December 28th: Planning Ahead
    day28: [
      {
        question: {
          en: "What do many people like to make for the new year?",
          es: "¿Qué les gusta hacer a muchas personas para el nuevo año?",
          de: "Was machen viele Menschen gerne für das neue Jahr?",
          nl: "Wat maken veel mensen graag voor het nieuwe jaar?"
        },
        options: [
          { en: "Resolutions", es: "Resoluciones", de: "Vorsätze", nl: "Voornemens" },
          { en: "Cookies", es: "Galletas", de: "Kekse", nl: "Koekjes" },
          { en: "Decorations", es: "Decoraciones", de: "Dekorationen", nl: "Versieringen" },
          { en: "Noise", es: "Ruido", de: "Lärm", nl: "Lawaai" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the process by which plants make their food?",
          es: "¿Cuál es el proceso por el cual las plantas hacen su comida?",
          de: "Was ist der Prozess, durch den Pflanzen ihre Nahrung herstellen?",
          nl: "Wat is het proces waarmee planten hun voedsel maken?"
        },
        options: [
          { en: "Photosynthesis", es: "Fotosíntesis", de: "Photosynthese", nl: "Fotosynthese" },
          { en: "Digestion", es: "Digestión", de: "Verdauung", nl: "Vertering" },
          { en: "Respiration", es: "Respiración", de: "Atmung", nl: "Ademhaling" },
          { en: "Hibernation", es: "Hibernación", de: "Winterschlaf", nl: "Winterslaap" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 42 + 39?",
          es: "¿Cuánto es 42 + 39?",
          de: "Was ist 42 + 39?",
          nl: "Hoeveel is 42 + 39?"
        },
        options: [
          { en: "81", es: "81", de: "81", nl: "81" },
          { en: "80", es: "80", de: "80", nl: "80" },
          { en: "82", es: "82", de: "82", nl: "82" },
          { en: "79", es: "79", de: "79", nl: "79" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is a popular resolution people make for the new year?",
          es: "¿Cuál es una resolución popular que la gente hace para el nuevo año?",
          de: "Was ist ein beliebter Vorsatz, den Menschen für das neue Jahr fassen?",
          nl: "Wat is een populair voornemen dat mensen maken voor het nieuwe jaar?"
        },
        options: [
          { en: "Exercise more", es: "Hacer más ejercicio", de: "Mehr Sport treiben", nl: "Meer sporten" },
          { en: "Sleep all day", es: "Dormir todo el día", de: "Den ganzen Tag schlafen", nl: "De hele dag slapen" },
          { en: "Eat only candy", es: "Comer solo dulces", de: "Nur Süßigkeiten essen", nl: "Alleen snoep eten" },
          { en: "Never learn anything", es: "Nunca aprender nada", de: "Nie etwas lernen", nl: "Nooit iets leren" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What feeling do people often have about starting a new year?",
          es: "¿Qué sentimiento suele tener la gente sobre empezar un nuevo año?",
          de: "Welches Gefühl haben Menschen oft beim Start eines neuen Jahres?",
          nl: "Welk gevoel hebben mensen vaak over het beginnen van een nieuw jaar?"
        },
        options: [
          { en: "Hope and excitement", es: "Esperanza y emoción", de: "Hoffnung und Aufregung", nl: "Hoop en opwinding" },
          { en: "Fear and sadness", es: "Miedo y tristeza", de: "Angst und Traurigkeit", nl: "Angst en verdriet" },
          { en: "Anger", es: "Enojo", de: "Wut", nl: "Woede" },
          { en: "Boredom", es: "Aburrimiento", de: "Langeweile", nl: "Verveling" }
        ],
        correctIndex: 0
      }
    ],

    // Day 29 - December 29th: Almost New Year
    day29: [
      {
        question: {
          en: "How many days until New Year from December 29th?",
          es: "¿Cuántos días faltan para Año Nuevo desde el 29 de diciembre?",
          de: "Wie viele Tage sind es vom 29. Dezember bis Neujahr?",
          nl: "Hoeveel dagen is het nog tot Nieuwjaar vanaf 29 december?"
        },
        options: [
          { en: "2 days", es: "2 días", de: "2 Tage", nl: "2 dagen" },
          { en: "3 days", es: "3 días", de: "3 Tage", nl: "3 dagen" },
          { en: "1 day", es: "1 día", de: "1 Tag", nl: "1 dag" },
          { en: "4 days", es: "4 días", de: "4 Tage", nl: "4 dagen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many minutes are in one hour?",
          es: "¿Cuántos minutos hay en una hora?",
          de: "Wie viele Minuten sind in einer Stunde?",
          nl: "Hoeveel minuten zitten er in een uur?"
        },
        options: [
          { en: "60", es: "60", de: "60", nl: "60" },
          { en: "50", es: "50", de: "50", nl: "50" },
          { en: "100", es: "100", de: "100", nl: "100" },
          { en: "30", es: "30", de: "30", nl: "30" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 18 × 9?",
          es: "¿Cuánto es 18 × 9?",
          de: "Was ist 18 × 9?",
          nl: "Hoeveel is 18 × 9?"
        },
        options: [
          { en: "162", es: "162", de: "162", nl: "162" },
          { en: "156", es: "156", de: "156", nl: "156" },
          { en: "168", es: "168", de: "168", nl: "168" },
          { en: "144", es: "144", de: "144", nl: "144" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do people often do to prepare for New Year celebrations?",
          es: "¿Qué suele hacer la gente para prepararse para las celebraciones de Año Nuevo?",
          de: "Was machen Menschen oft, um sich auf Neujahrsfeierlichkeiten vorzubereiten?",
          nl: "Wat doen mensen vaak om zich voor te bereiden op nieuwjaarsfeesten?"
        },
        options: [
          { en: "Plan parties", es: "Planear fiestas", de: "Partys planen", nl: "Feestjes plannen" },
          { en: "Go to bed early", es: "Irse a la cama temprano", de: "Früh ins Bett gehen", nl: "Vroeg naar bed gaan" },
          { en: "Hide at home", es: "Esconderse en casa", de: "Sich zu Hause verstecken", nl: "Thuis verstoppen" },
          { en: "Work extra hours", es: "Trabajar horas extra", de: "Überstunden arbeiten", nl: "Extra uren werken" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What special feeling often comes with the end of the year?",
          es: "¿Qué sentimiento especial suele venir con el fin del año?",
          de: "Welches besondere Gefühl kommt oft mit dem Jahresende?",
          nl: "Welk speciaal gevoel komt vaak met het einde van het jaar?"
        },
        options: [
          { en: "Anticipation for the future", es: "Expectativa por el futuro", de: "Vorfreude auf die Zukunft", nl: "Verwachting voor de toekomst" },
          { en: "Total despair", es: "Desesperación total", de: "Völlige Verzweiflung", nl: "Totale wanhoop" },
          { en: "Complete boredom", es: "Aburrimiento completo", de: "Völlige Langeweile", nl: "Totale verveling" },
          { en: "Extreme anger", es: "Enojo extremo", de: "Extreme Wut", nl: "Extreme woede" }
        ],
        correctIndex: 0
      }
    ],

    // Day 30 - December 30th: New Year's Eve Preparations
    day30: [
      {
        question: {
          en: "What comes after December 30th?",
          es: "¿Qué viene después del 30 de diciembre?",
          de: "Was kommt nach dem 30. Dezember?",
          nl: "Wat komt er na 30 december?"
        },
        options: [
          { en: "New Year's Eve", es: "Nochevieja", de: "Silvester", nl: "Oudejaarsavond" },
          { en: "Christmas", es: "Navidad", de: "Weihnachten", nl: "Kerstmis" },
          { en: "Halloween", es: "Halloween", de: "Halloween", nl: "Halloween" },
          { en: "Valentine's Day", es: "Día de San Valentín", de: "Valentinstag", nl: "Valentijnsdag" }
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
          { en: "Heart", es: "Corazón", de: "Herz", nl: "Hart" },
          { en: "Brain", es: "Cerebro", de: "Gehirn", nl: "Hersenen" },
          { en: "Liver", es: "Hígado", de: "Leber", nl: "Lever" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 156 ÷ 12?",
          es: "¿Cuánto es 156 ÷ 12?",
          de: "Was ist 156 ÷ 12?",
          nl: "Hoeveel is 156 ÷ 12?"
        },
        options: [
          { en: "13", es: "13", de: "13", nl: "13" },
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "14", es: "14", de: "14", nl: "14" },
          { en: "11", es: "11", de: "11", nl: "11" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do people often buy for New Year's Eve parties?",
          es: "¿Qué suele comprar la gente para las fiestas de Nochevieja?",
          de: "Was kaufen Menschen oft für Silvesterpartys?",
          nl: "Wat kopen mensen vaak voor oudejaarsavond feestjes?"
        },
        options: [
          { en: "Decorations and party supplies", es: "Decoraciones y suministros de fiesta", de: "Dekorationen und Partyzubehör", nl: "Versieringen en feestspullen" },
          { en: "School supplies", es: "Útiles escolares", de: "Schulbedarf", nl: "Schoolspullen" },
          { en: "Halloween costumes", es: "Disfraces de Halloween", de: "Halloween-Kostüme", nl: "Halloween kostuums" },
          { en: "Winter coats", es: "Abrigos de invierno", de: "Wintermäntel", nl: "Winterjassen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How do many people feel the day before New Year's Eve?",
          es: "¿Cómo se siente mucha gente el día antes de Nochevieja?",
          de: "Wie fühlen sich viele Menschen am Tag vor Silvester?",
          nl: "Hoe voelen veel mensen zich de dag voor oudejaarsavond?"
        },
        options: [
          { en: "Excited and ready to celebrate", es: "Emocionados y listos para celebrar", de: "Aufgeregt und bereit zu feiern", nl: "Opgewonden en klaar om te vieren" },
          { en: "Sad and lonely", es: "Tristes y solos", de: "Traurig und einsam", nl: "Verdrietig en eenzaam" },
          { en: "Angry and upset", es: "Enojados y molestos", de: "Wütend und verärgert", nl: "Boos en van streek" },
          { en: "Completely uninterested", es: "Completamente desinteresados", de: "Völlig desinteressiert", nl: "Volledig ongeïnteresseerd" }
        ],
        correctIndex: 0
      }
    ],

    // Day 31 - December 31st: New Year's Eve - The Final Day
    day31: [
      {
        question: {
          en: "What special day is December 31st?",
          es: "¿Qué día especial es el 31 de diciembre?",
          de: "Welcher besondere Tag ist der 31. Dezember?",
          nl: "Welke speciale dag is 31 december?"
        },
        options: [
          { en: "New Year's Eve", es: "Nochevieja", de: "Silvester", nl: "Oudejaarsavond" },
          { en: "Christmas Eve", es: "Nochebuena", de: "Heiligabend", nl: "Kerstavond" },
          { en: "Halloween", es: "Halloween", de: "Halloween", nl: "Halloween" },
          { en: "Easter", es: "Pascua", de: "Ostern", nl: "Pasen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What comes after December 31st?",
          es: "¿Qué viene después del 31 de diciembre?",
          de: "Was kommt nach dem 31. Dezember?",
          nl: "Wat komt er na 31 december?"
        },
        options: [
          { en: "January 1st - New Year's Day", es: "1 de enero - Día de Año Nuevo", de: "1. Januar - Neujahrstag", nl: "1 januari - Nieuwjaarsdag" },
          { en: "February 1st", es: "1 de febrero", de: "1. Februar", nl: "1 februari" },
          { en: "December 32nd", es: "32 de diciembre", de: "32. Dezember", nl: "32 december" },
          { en: "Christmas again", es: "Navidad otra vez", de: "Wieder Weihnachten", nl: "Weer Kerstmis" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 31 × 3?",
          es: "¿Cuánto es 31 × 3?",
          de: "Was ist 31 × 3?",
          nl: "Hoeveel is 31 × 3?"
        },
        options: [
          { en: "93", es: "93", de: "93", nl: "93" },
          { en: "90", es: "90", de: "90", nl: "90" },
          { en: "96", es: "96", de: "96", nl: "96" },
          { en: "87", es: "87", de: "87", nl: "87" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do people traditionally do when the clock strikes midnight on New Year's Eve?",
          es: "¿Qué hace tradicionalmente la gente cuando el reloj marca medianoche en Nochevieja?",
          de: "Was machen Menschen traditionell, wenn die Uhr zu Silvester Mitternacht schlägt?",
          nl: "Wat doen mensen traditioneel als de klok middernacht slaat op oudejaarsavond?"
        },
        options: [
          { en: "Celebrate and make noise", es: "Celebrar y hacer ruido", de: "Feiern und Lärm machen", nl: "Vieren en lawaai maken" },
          { en: "Go to sleep", es: "Irse a dormir", de: "Schlafen gehen", nl: "Gaan slapen" },
          { en: "Clean the house", es: "Limpiar la casa", de: "Das Haus putzen", nl: "Het huis schoonmaken" },
          { en: "Do homework", es: "Hacer tarea", de: "Hausaufgaben machen", nl: "Huiswerk maken" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do people often watch in the sky during New Year's Eve celebrations?",
          es: "¿Qué suele ver la gente en el cielo durante las celebraciones de Nochevieja?",
          de: "Was schauen Menschen oft am Himmel während der Silvesterfeierlichkeiten?",
          nl: "Wat kijken mensen vaak naar de lucht tijdens oudejaarsavond vieringen?"
        },
        options: [
          { en: "Fireworks", es: "Fuegos artificiales", de: "Feuerwerk", nl: "Vuurwerk" },
          { en: "Snowflakes", es: "Copos de nieve", de: "Schneeflocken", nl: "Sneeuwvlokken" },
          { en: "Airplanes", es: "Aviones", de: "Flugzeuge", nl: "Vliegtuigen" },
          { en: "Birds", es: "Pájaros", de: "Vögel", nl: "Vogels" }
        ],
        correctIndex: 0
      }
    ]
  };

  // Export December challenges
  if (typeof window.addMonthChallenges === 'function') {
    window.addMonthChallenges('december', decemberChallenges);
  }

})();