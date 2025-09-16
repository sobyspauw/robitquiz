// November Daily Challenges - 30 days × 5 questions each = 150 total questions
(function() {
  
  const novemberChallenges = {
    name: {
      en: "November Daily Challenges",
      es: "Desafíos Diarios de Noviembre", 
      de: "November Tägliche Herausforderungen",
      nl: "November Dagelijkse Uitdagingen"
    },
    
    // Day 1 - November 1st: Late Fall
    day1: [
      {
        question: {
          en: "What season is November in?",
          es: "¿En qué estación está noviembre?",
          de: "In welcher Jahreszeit ist November?",
          nl: "In welk seizoen valt november?"
        },
        options: [
          { en: "Fall", es: "Otoño", de: "Herbst", nl: "Herfst" },
          { en: "Winter", es: "Invierno", de: "Winter", nl: "Winter" },
          { en: "Spring", es: "Primavera", de: "Frühling", nl: "Lente" },
          { en: "Summer", es: "Verano", de: "Sommer", nl: "Zomer" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What happens to most trees in November?",
          es: "¿Qué les pasa a la mayoría de los árboles en noviembre?",
          de: "Was passiert mit den meisten Bäumen im November?",
          nl: "Wat gebeurt er met de meeste bomen in november?"
        },
        options: [
          { en: "They lose their leaves", es: "Pierden sus hojas", de: "Sie verlieren ihre Blätter", nl: "Ze verliezen hun bladeren" },
          { en: "They grow new leaves", es: "Crecen hojas nuevas", de: "Sie bekommen neue Blätter", nl: "Ze krijgen nieuwe bladeren" },
          { en: "They bloom flowers", es: "Florecen", de: "Sie blühen", nl: "Ze bloeien" },
          { en: "They turn blue", es: "Se vuelven azules", de: "Sie werden blau", nl: "Ze worden blauw" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many days are in November?",
          es: "¿Cuántos días tiene noviembre?",
          de: "Wie viele Tage hat der November?",
          nl: "Hoeveel dagen heeft november?"
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
          en: "What birthstone belongs to November?",
          es: "¿Qué piedra de nacimiento pertenece a noviembre?",
          de: "Welcher Geburtsstein gehört zum November?",
          nl: "Welke geboortesteen hoort bij november?"
        },
        options: [
          { en: "Topaz", es: "Topacio", de: "Topas", nl: "Topaas" },
          { en: "Ruby", es: "Rubí", de: "Rubin", nl: "Robijn" },
          { en: "Diamond", es: "Diamante", de: "Diamant", nl: "Diamant" },
          { en: "Pearl", es: "Perla", de: "Perle", nl: "Parel" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do many families celebrate in November in America?",
          es: "¿Qué celebran muchas familias en noviembre en América?",
          de: "Was feiern viele Familien im November in Amerika?",
          nl: "Wat vieren veel families in november in Amerika?"
        },
        options: [
          { en: "Thanksgiving", es: "Día de Acción de Gracias", de: "Thanksgiving", nl: "Thanksgiving" },
          { en: "Christmas", es: "Navidad", de: "Weihnachten", nl: "Kerstmis" },
          { en: "Halloween", es: "Halloween", de: "Halloween", nl: "Halloween" },
          { en: "Easter", es: "Pascua", de: "Ostern", nl: "Pasen" }
        ],
        correctIndex: 0
      }
    ],

    // Day 2 - November 2nd
    day2: [
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
          en: "What do many animals do to prepare for winter?",
          es: "¿Qué hacen muchos animales para prepararse para el invierno?",
          de: "Was machen viele Tiere, um sich auf den Winter vorzubereiten?",
          nl: "Wat doen veel dieren om zich voor te bereiden op de winter?"
        },
        options: [
          { en: "Store food", es: "Almacenar comida", de: "Nahrung sammeln", nl: "Voedsel opslaan" },
          { en: "Sleep all day", es: "Dormir todo el día", de: "Den ganzen Tag schlafen", nl: "De hele dag slapen" },
          { en: "Lose weight", es: "Perder peso", de: "Abnehmen", nl: "Afvallen" },
          { en: "Change colors", es: "Cambiar colores", de: "Farbe wechseln", nl: "Van kleur veranderen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which planet is closest to the Sun?",
          es: "¿Qué planeta está más cerca del Sol?",
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
          en: "What is 10 - 4?",
          es: "¿Cuánto es 10 - 4?",
          de: "Was ist 10 - 4?",
          nl: "Hoeveel is 10 - 4?"
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
          en: "What weather becomes more common in November?",
          es: "¿Qué clima se vuelve más común en noviembre?",
          de: "Welches Wetter wird im November häufiger?",
          nl: "Welk weer wordt vaker in november?"
        },
        options: [
          { en: "Cool and crisp", es: "Fresco y frío", de: "Kühl und frisch", nl: "Koel en fris" },
          { en: "Hot and sunny", es: "Caliente y soleado", de: "Heiß und sonnig", nl: "Warm en zonnig" },
          { en: "Tropical storms", es: "Tormentas tropicales", de: "Tropenstürme", nl: "Tropische stormen" },
          { en: "Spring showers", es: "Lluvias primaverales", de: "Frühlingsregen", nl: "Lenteregens" }
        ],
        correctIndex: 0
      }
    ],

    // Day 3 - November 3rd
    day3: [
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
          en: "What bird is traditionally eaten at Thanksgiving?",
          es: "¿Qué ave se come tradicionalmente en Acción de Gracias?",
          de: "Welcher Vogel wird traditionell zu Thanksgiving gegessen?",
          nl: "Welke vogel wordt traditioneel gegeten met Thanksgiving?"
        },
        options: [
          { en: "Turkey", es: "Pavo", de: "Truthahn", nl: "Kalkoen" },
          { en: "Chicken", es: "Pollo", de: "Huhn", nl: "Kip" },
          { en: "Duck", es: "Pato", de: "Ente", nl: "Eend" },
          { en: "Goose", es: "Ganso", de: "Gans", nl: "Gans" }
        ],
        correctIndex: 0
      },
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
          { en: "H2", es: "H2", de: "H2", nl: "H2" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which continent is Brazil located in?",
          es: "¿En qué continente se encuentra Brasil?",
          de: "Auf welchem Kontinent liegt Brasilien?",
          nl: "Op welk continent ligt Brazilië?"
        },
        options: [
          { en: "South America", es: "Sudamérica", de: "Südamerika", nl: "Zuid-Amerika" },
          { en: "North America", es: "Norteamérica", de: "Nordamerika", nl: "Noord-Amerika" },
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" },
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 7 × 3?",
          es: "¿Cuánto es 7 × 3?",
          de: "Was ist 7 × 3?",
          nl: "Hoeveel is 7 × 3?"
        },
        options: [
          { en: "21", es: "21", de: "21", nl: "21" },
          { en: "18", es: "18", de: "18", nl: "18" },
          { en: "24", es: "24", de: "24", nl: "24" },
          { en: "20", es: "20", de: "20", nl: "20" }
        ],
        correctIndex: 0
      }
    ],

    // Day 4 - November 4th
    day4: [
      {
        question: {
          en: "Which animal hibernates during the winter?",
          es: "¿Qué animal hiberna durante el invierno?",
          de: "Welches Tier hält Winterschlaf?",
          nl: "Welk dier houdt winterslaap?"
        },
        options: [
          { en: "Bear", es: "Oso", de: "Bär", nl: "Beer" },
          { en: "Lion", es: "León", de: "Löwe", nl: "Leeuw" },
          { en: "Giraffe", es: "Jirafa", de: "Giraffe", nl: "Giraf" },
          { en: "Elephant", es: "Elefante", de: "Elefant", nl: "Olifant" }
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
          { en: "Rome", es: "Roma", de: "Rom", nl: "Rome" },
          { en: "Berlin", es: "Berlín", de: "Berlin", nl: "Berlijn" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the result of 12 ÷ 3?",
          es: "¿Cuál es el resultado de 12 ÷ 3?",
          de: "Was ist das Ergebnis von 12 ÷ 3?",
          nl: "Wat is het resultaat van 12 ÷ 3?"
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
          en: "What should you express more of during November?",
          es: "¿Qué deberías expresar más durante noviembre?",
          de: "Was solltest du im November mehr ausdrücken?",
          nl: "Wat zou je meer moeten uitdrukken in november?"
        },
        options: [
          { en: "Gratitude", es: "Gratitud", de: "Dankbarkeit", nl: "Dankbaarheid" },
          { en: "Anger", es: "Ira", de: "Wut", nl: "Woede" },
          { en: "Fear", es: "Miedo", de: "Angst", nl: "Angst" },
          { en: "Worry", es: "Preocupación", de: "Sorge", nl: "Zorgen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which layer of the atmosphere is closest to Earth?",
          es: "¿Qué capa de la atmósfera está más cerca de la Tierra?",
          de: "Welche Schicht der Atmosphäre ist der Erde am nächsten?",
          nl: "Welke laag van de atmosfeer ligt het dichtst bij de aarde?"
        },
        options: [
          { en: "Troposphere", es: "Troposfera", de: "Troposphäre", nl: "Troposfeer" },
          { en: "Stratosphere", es: "Estratosfera", de: "Stratosphäre", nl: "Stratosfeer" },
          { en: "Mesosphere", es: "Mesosfera", de: "Mesosphäre", nl: "Mesosfeer" },
          { en: "Thermosphere", es: "Termosfera", de: "Thermosphäre", nl: "Thermosfeer" }
        ],
        correctIndex: 0
      }
    ],

    // Day 5 - November 5th
    day5: [
      {
        question: {
          en: "What do squirrels collect for winter?",
          es: "¿Qué recolectan las ardillas para el invierno?",
          de: "Was sammeln Eichhörnchen für den Winter?",
          nl: "Wat verzamelen eekhoorns voor de winter?"
        },
        options: [
          { en: "Nuts", es: "Nueces", de: "Nüsse", nl: "Noten" },
          { en: "Flowers", es: "Flores", de: "Blumen", nl: "Bloemen" },
          { en: "Rocks", es: "Piedras", de: "Steine", nl: "Stenen" },
          { en: "Leaves", es: "Hojas", de: "Blätter", nl: "Bladeren" }
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
          { en: "Indian", es: "Índico", de: "Indischer", nl: "Indische Oceaan" },
          { en: "Arctic", es: "Ártico", de: "Arktis", nl: "Noordelijke IJszee" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 15 + 27?",
          es: "¿Cuánto es 15 + 27?",
          de: "Was ist 15 + 27?",
          nl: "Hoeveel is 15 + 27?"
        },
        options: [
          { en: "42", es: "42", de: "42", nl: "42" },
          { en: "41", es: "41", de: "41", nl: "41" },
          { en: "43", es: "43", de: "43", nl: "43" },
          { en: "40", es: "40", de: "40", nl: "40" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Who was the first President of the United States?",
          es: "¿Quién fue el primer Presidente de los Estados Unidos?",
          de: "Wer war der erste Präsident der Vereinigten Staaten?",
          nl: "Wie was de eerste president van de Verenigde Staten?"
        },
        options: [
          { en: "George Washington", es: "George Washington", de: "George Washington", nl: "George Washington" },
          { en: "Abraham Lincoln", es: "Abraham Lincoln", de: "Abraham Lincoln", nl: "Abraham Lincoln" },
          { en: "Thomas Jefferson", es: "Thomas Jefferson", de: "Thomas Jefferson", nl: "Thomas Jefferson" },
          { en: "John Adams", es: "John Adams", de: "John Adams", nl: "John Adams" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What color are fall leaves most commonly?",
          es: "¿De qué color son más comúnmente las hojas de otoño?",
          de: "Welche Farbe haben Herbstblätter am häufigsten?",
          nl: "Welke kleur hebben herfstbladeren meestal?"
        },
        options: [
          { en: "Orange and red", es: "Naranja y rojo", de: "Orange und rot", nl: "Oranje en rood" },
          { en: "Blue and purple", es: "Azul y morado", de: "Blau und lila", nl: "Blauw en paars" },
          { en: "Pink and white", es: "Rosa y blanco", de: "Rosa und weiß", nl: "Roze en wit" },
          { en: "Black and gray", es: "Negro y gris", de: "Schwarz und grau", nl: "Zwart en grijs" }
        ],
        correctIndex: 0
      }
    ],

    // Day 6 - November 6th
    day6: [
      {
        question: {
          en: "What is the process by which plants make their own food?",
          es: "¿Cuál es el proceso por el cual las plantas hacen su propia comida?",
          de: "Wie heißt der Prozess, bei dem Pflanzen ihre eigene Nahrung herstellen?",
          nl: "Wat is het proces waarbij planten hun eigen voedsel maken?"
        },
        options: [
          { en: "Photosynthesis", es: "Fotosíntesis", de: "Photosynthese", nl: "Fotosynthese" },
          { en: "Respiration", es: "Respiración", de: "Atmung", nl: "Ademhaling" },
          { en: "Digestion", es: "Digestión", de: "Verdauung", nl: "Vertering" },
          { en: "Circulation", es: "Circulación", de: "Kreislauf", nl: "Circulatie" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What food is traditionally prepared for Thanksgiving?",
          es: "¿Qué comida se prepara tradicionalmente para Acción de Gracias?",
          de: "Welches Essen wird traditionell zu Thanksgiving zubereitet?",
          nl: "Welk eten wordt traditioneel bereid voor Thanksgiving?"
        },
        options: [
          { en: "Turkey dinner", es: "Cena de pavo", de: "Truthahn-Abendessen", nl: "Kalkoendiner" },
          { en: "Pizza party", es: "Fiesta de pizza", de: "Pizza-Party", nl: "Pizzafeest" },
          { en: "Ice cream", es: "Helado", de: "Eiscreme", nl: "IJs" },
          { en: "Hot dogs", es: "Perros calientes", de: "Hot Dogs", nl: "Hotdogs" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the smallest unit of matter?",
          es: "¿Cuál es la unidad más pequeña de la materia?",
          de: "Was ist die kleinste Einheit der Materie?",
          nl: "Wat is de kleinste eenheid van materie?"
        },
        options: [
          { en: "Atom", es: "Átomo", de: "Atom", nl: "Atoom" },
          { en: "Molecule", es: "Molécula", de: "Molekül", nl: "Molecuul" },
          { en: "Cell", es: "Célula", de: "Zelle", nl: "Cel" },
          { en: "Tissue", es: "Tejido", de: "Gewebe", nl: "Weefsel" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 8 × 9?",
          es: "¿Cuánto es 8 × 9?",
          de: "Was ist 8 × 9?",
          nl: "Hoeveel is 8 × 9?"
        },
        options: [
          { en: "72", es: "72", de: "72", nl: "72" },
          { en: "64", es: "64", de: "64", nl: "64" },
          { en: "81", es: "81", de: "81", nl: "81" },
          { en: "70", es: "70", de: "70", nl: "70" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which country is shaped like a boot?",
          es: "¿Qué país tiene forma de bota?",
          de: "Welches Land hat die Form eines Stiefels?",
          nl: "Welk land heeft de vorm van een laars?"
        },
        options: [
          { en: "Italy", es: "Italia", de: "Italien", nl: "Italië" },
          { en: "Spain", es: "España", de: "Spanien", nl: "Spanje" },
          { en: "Greece", es: "Grecia", de: "Griechenland", nl: "Griekenland" },
          { en: "Portugal", es: "Portugal", de: "Portugal", nl: "Portugal" }
        ],
        correctIndex: 0
      }
    ],

    // Day 7 - November 7th
    day7: [
      {
        question: {
          en: "What do birds often do before winter arrives?",
          es: "¿Qué hacen a menudo los pájaros antes de que llegue el invierno?",
          de: "Was machen Vögel oft, bevor der Winter kommt?",
          nl: "Wat doen vogels vaak voordat de winter komt?"
        },
        options: [
          { en: "Migrate south", es: "Migran al sur", de: "Nach Süden wandern", nl: "Naar het zuiden trekken" },
          { en: "Change color", es: "Cambian de color", de: "Farbe wechseln", nl: "Van kleur veranderen" },
          { en: "Grow bigger", es: "Crecen más", de: "Größer werden", nl: "Groter worden" },
          { en: "Sleep more", es: "Duermen más", de: "Mehr schlafen", nl: "Meer slapen" }
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
          en: "What is 50 - 23?",
          es: "¿Cuánto es 50 - 23?",
          de: "Was ist 50 - 23?",
          nl: "Hoeveel is 50 - 23?"
        },
        options: [
          { en: "27", es: "27", de: "27", nl: "27" },
          { en: "26", es: "26", de: "26", nl: "26" },
          { en: "28", es: "28", de: "28", nl: "28" },
          { en: "25", es: "25", de: "25", nl: "25" }
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
          en: "What month comes before November?",
          es: "¿Qué mes viene antes de noviembre?",
          de: "Welcher Monat kommt vor November?",
          nl: "Welke maand komt voor november?"
        },
        options: [
          { en: "October", es: "Octubre", de: "Oktober", nl: "Oktober" },
          { en: "September", es: "Septiembre", de: "September", nl: "September" },
          { en: "December", es: "Diciembre", de: "Dezember", nl: "December" },
          { en: "January", es: "Enero", de: "Januar", nl: "Januari" }
        ],
        correctIndex: 0
      }
    ],

    // Day 8 - November 8th
    day8: [
      {
        question: {
          en: "Which animal builds dams?",
          es: "¿Qué animal construye represas?",
          de: "Welches Tier baut Dämme?",
          nl: "Welk dier bouwt dammen?"
        },
        options: [
          { en: "Beaver", es: "Castor", de: "Biber", nl: "Bever" },
          { en: "Rabbit", es: "Conejo", de: "Kaninchen", nl: "Konijn" },
          { en: "Fox", es: "Zorro", de: "Fuchs", nl: "Vos" },
          { en: "Deer", es: "Ciervo", de: "Hirsch", nl: "Hert" }
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
          { en: "Mississippi River", es: "Río Mississippi", de: "Mississippi", nl: "Mississippi" },
          { en: "Yangtze River", es: "Río Yangtsé", de: "Jangtse", nl: "Yangtze" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 6 × 7?",
          es: "¿Cuánto es 6 × 7?",
          de: "Was ist 6 × 7?",
          nl: "Hoeveel is 6 × 7?"
        },
        options: [
          { en: "42", es: "42", de: "42", nl: "42" },
          { en: "41", es: "41", de: "41", nl: "41" },
          { en: "48", es: "48", de: "48", nl: "48" },
          { en: "36", es: "36", de: "36", nl: "36" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which holiday celebrates being thankful?",
          es: "¿Qué fiesta celebra estar agradecido?",
          de: "Welcher Feiertag feiert Dankbarkeit?",
          nl: "Welke feestdag viert dankbaarheid?"
        },
        options: [
          { en: "Thanksgiving", es: "Día de Acción de Gracias", de: "Thanksgiving", nl: "Thanksgiving" },
          { en: "Halloween", es: "Halloween", de: "Halloween", nl: "Halloween" },
          { en: "Christmas", es: "Navidad", de: "Weihnachten", nl: "Kerstmis" },
          { en: "New Year", es: "Año Nuevo", de: "Neujahr", nl: "Nieuwjaar" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What gas do plants need to make food?",
          es: "¿Qué gas necesitan las plantas para hacer comida?",
          de: "Welches Gas brauchen Pflanzen zur Nahrungsherstellung?",
          nl: "Welk gas hebben planten nodig om voedsel te maken?"
        },
        options: [
          { en: "Carbon dioxide", es: "Dióxido de carbono", de: "Kohlendioxid", nl: "Koolstofdioxide" },
          { en: "Oxygen", es: "Oxígeno", de: "Sauerstoff", nl: "Zuurstof" },
          { en: "Nitrogen", es: "Nitrógeno", de: "Stickstoff", nl: "Stikstof" },
          { en: "Hydrogen", es: "Hidrógeno", de: "Wasserstoff", nl: "Waterstof" }
        ],
        correctIndex: 0
      }
    ],

    // Day 9 - November 9th
    day9: [
      {
        question: {
          en: "What do many people write during November to practice gratitude?",
          es: "¿Qué escriben muchas personas durante noviembre para practicar la gratitud?",
          de: "Was schreiben viele Menschen im November, um Dankbarkeit zu üben?",
          nl: "Wat schrijven veel mensen in november om dankbaarheid te oefenen?"
        },
        options: [
          { en: "Thank you notes", es: "Notas de agradecimiento", de: "Dankesnotizen", nl: "Dankbriefjes" },
          { en: "Complaints", es: "Quejas", de: "Beschwerden", nl: "Klachten" },
          { en: "Shopping lists", es: "Listas de compras", de: "Einkaufslisten", nl: "Boodschappenlijstjes" },
          { en: "Horror stories", es: "Historias de terror", de: "Horrorgeschichten", nl: "Griezelverhalen" }
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
          { en: "Jupiter", es: "Júpiter", de: "Jupiter", nl: "Jupiter" },
          { en: "Earth", es: "Tierra", de: "Erde", nl: "Aarde" },
          { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" },
          { en: "Venus", es: "Venus", de: "Venus", nl: "Venus" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 100 ÷ 4?",
          es: "¿Cuánto es 100 ÷ 4?",
          de: "Was ist 100 ÷ 4?",
          nl: "Hoeveel is 100 ÷ 4?"
        },
        options: [
          { en: "25", es: "25", de: "25", nl: "25" },
          { en: "20", es: "20", de: "20", nl: "20" },
          { en: "30", es: "30", de: "30", nl: "30" },
          { en: "24", es: "24", de: "24", nl: "24" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Who invented the telephone?",
          es: "¿Quién inventó el teléfono?",
          de: "Wer hat das Telefon erfunden?",
          nl: "Wie heeft de telefoon uitgevonden?"
        },
        options: [
          { en: "Alexander Graham Bell", es: "Alexander Graham Bell", de: "Alexander Graham Bell", nl: "Alexander Graham Bell" },
          { en: "Thomas Edison", es: "Thomas Edison", de: "Thomas Edison", nl: "Thomas Edison" },
          { en: "Albert Einstein", es: "Albert Einstein", de: "Albert Einstein", nl: "Albert Einstein" },
          { en: "Benjamin Franklin", es: "Benjamin Franklin", de: "Benjamin Franklin", nl: "Benjamin Franklin" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What type of tree keeps its leaves all year?",
          es: "¿Qué tipo de árbol mantiene sus hojas todo el año?",
          de: "Welcher Baum behält seine Blätter das ganze Jahr?",
          nl: "Welk type boom houdt zijn bladeren het hele jaar?"
        },
        options: [
          { en: "Evergreen", es: "Perenne", de: "Immergrün", nl: "Groenblijvend" },
          { en: "Deciduous", es: "Caducifolio", de: "Laubabwerfend", nl: "Bladverliezen" },
          { en: "Flowering", es: "Floreciente", de: "Blühend", nl: "Bloeiend" },
          { en: "Fruit", es: "Frutal", de: "Frucht", nl: "Vrucht" }
        ],
        correctIndex: 0
      }
    ],

    // Day 10 - November 10th
    day10: [
      {
        question: {
          en: "What do chipmunks store in their cheeks?",
          es: "¿Qué almacenan las ardillas listadas en sus mejillas?",
          de: "Was speichern Streifenhörnchen in ihren Wangen?",
          nl: "Wat bewaren eekhoorntjes in hun wangen?"
        },
        options: [
          { en: "Food", es: "Comida", de: "Futter", nl: "Voedsel" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Air", es: "Aire", de: "Luft", nl: "Lucht" },
          { en: "Leaves", es: "Hojas", de: "Blätter", nl: "Bladeren" }
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
          { en: "Mount Fuji", es: "Monte Fuji", de: "Mount Fuji", nl: "Mount Fuji" },
          { en: "Mount Kilimanjaro", es: "Monte Kilimanjaro", de: "Kilimandscharo", nl: "Kilimanjaro" },
          { en: "Mount McKinley", es: "Monte McKinley", de: "Mount McKinley", nl: "Mount McKinley" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 9 + 16?",
          es: "¿Cuánto es 9 + 16?",
          de: "Was ist 9 + 16?",
          nl: "Hoeveel is 9 + 16?"
        },
        options: [
          { en: "25", es: "25", de: "25", nl: "25" },
          { en: "24", es: "24", de: "24", nl: "24" },
          { en: "26", es: "26", de: "26", nl: "26" },
          { en: "23", es: "23", de: "23", nl: "23" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the study of stars and space called?",
          es: "¿Cómo se llama el estudio de las estrellas y el espacio?",
          de: "Wie heißt die Wissenschaft von Sternen und Weltraum?",
          nl: "Hoe heet de studie van sterren en ruimte?"
        },
        options: [
          { en: "Astronomy", es: "Astronomía", de: "Astronomie", nl: "Astronomie" },
          { en: "Biology", es: "Biología", de: "Biologie", nl: "Biologie" },
          { en: "Geology", es: "Geología", de: "Geologie", nl: "Geologie" },
          { en: "Chemistry", es: "Química", de: "Chemie", nl: "Scheikunde" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which vegetable is often served at Thanksgiving?",
          es: "¿Qué verdura se sirve a menudo en Acción de Gracias?",
          de: "Welches Gemüse wird oft zu Thanksgiving serviert?",
          nl: "Welke groente wordt vaak geserveerd met Thanksgiving?"
        },
        options: [
          { en: "Sweet potato", es: "Batata", de: "Süßkartoffel", nl: "Zoete aardappel" },
          { en: "Broccoli", es: "Brócoli", de: "Brokkoli", nl: "Broccoli" },
          { en: "Spinach", es: "Espinaca", de: "Spinat", nl: "Spinazie" },
          { en: "Cucumber", es: "Pepino", de: "Gurke", nl: "Komkommer" }
        ],
        correctIndex: 0
      }
    ],

    // Day 11 - November 11th
    day11: [
      {
        question: {
          en: "What special day is November 11th in many countries?",
          es: "¿Qué día especial es el 11 de noviembre en muchos países?",
          de: "Was ist der 11. November in vielen Ländern für ein besonderer Tag?",
          nl: "Welke speciale dag is 11 november in veel landen?"
        },
        options: [
          { en: "Veterans Day", es: "Día de los Veteranos", de: "Veteranentag", nl: "Veteranendag" },
          { en: "Earth Day", es: "Día de la Tierra", de: "Tag der Erde", nl: "Dag van de Aarde" },
          { en: "Labor Day", es: "Día del Trabajo", de: "Tag der Arbeit", nl: "Dag van de Arbeid" },
          { en: "Mother's Day", es: "Día de las Madres", de: "Muttertag", nl: "Moederdag" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which is the smallest country in the world?",
          es: "¿Cuál es el país más pequeño del mundo?",
          de: "Was ist das kleinste Land der Welt?",
          nl: "Wat is het kleinste land ter wereld?"
        },
        options: [
          { en: "Vatican City", es: "Ciudad del Vaticano", de: "Vatikanstadt", nl: "Vaticaanstad" },
          { en: "Monaco", es: "Mónaco", de: "Monaco", nl: "Monaco" },
          { en: "San Marino", es: "San Marino", de: "San Marino", nl: "San Marino" },
          { en: "Luxembourg", es: "Luxemburgo", de: "Luxemburg", nl: "Luxemburg" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 11 × 11?",
          es: "¿Cuánto es 11 × 11?",
          de: "Was ist 11 × 11?",
          nl: "Hoeveel is 11 × 11?"
        },
        options: [
          { en: "121", es: "121", de: "121", nl: "121" },
          { en: "111", es: "111", de: "111", nl: "111" },
          { en: "110", es: "110", de: "110", nl: "110" },
          { en: "122", es: "122", de: "122", nl: "122" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What organ pumps blood through your body?",
          es: "¿Qué órgano bombea sangre por todo tu cuerpo?",
          de: "Welches Organ pumpt Blut durch deinen Körper?",
          nl: "Welk orgaan pompt bloed door je lichaam?"
        },
        options: [
          { en: "Heart", es: "Corazón", de: "Herz", nl: "Hart" },
          { en: "Lungs", es: "Pulmones", de: "Lunge", nl: "Longen" },
          { en: "Brain", es: "Cerebro", de: "Gehirn", nl: "Hersenen" },
          { en: "Stomach", es: "Estómago", de: "Magen", nl: "Maag" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do many animals grow thicker in winter?",
          es: "¿Qué se vuelve más grueso en muchos animales en invierno?",
          de: "Was wird bei vielen Tieren im Winter dicker?",
          nl: "Wat wordt dikker bij veel dieren in de winter?"
        },
        options: [
          { en: "Fur coat", es: "Pelaje", de: "Fell", nl: "Vacht" },
          { en: "Bones", es: "Huesos", de: "Knochen", nl: "Botten" },
          { en: "Teeth", es: "Dientes", de: "Zähne", nl: "Tanden" },
          { en: "Ears", es: "Orejas", de: "Ohren", nl: "Oren" }
        ],
        correctIndex: 0
      }
    ],

    // Day 12 - November 12th
    day12: [
      {
        question: {
          en: "What instrument measures temperature?",
          es: "¿Qué instrumento mide la temperatura?",
          de: "Welches Instrument misst die Temperatur?",
          nl: "Welk instrument meet temperatuur?"
        },
        options: [
          { en: "Thermometer", es: "Termómetro", de: "Thermometer", nl: "Thermometer" },
          { en: "Barometer", es: "Barómetro", de: "Barometer", nl: "Barometer" },
          { en: "Compass", es: "Brújula", de: "Kompass", nl: "Kompas" },
          { en: "Ruler", es: "Regla", de: "Lineal", nl: "Liniaal" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What food do people often make into pie for Thanksgiving?",
          es: "¿Qué comida suele convertirse en pastel para Acción de Gracias?",
          de: "Welches Essen wird oft zu einem Kuchen für Thanksgiving gemacht?",
          nl: "Welk voedsel maken mensen vaak tot taart voor Thanksgiving?"
        },
        options: [
          { en: "Pumpkin", es: "Calabaza", de: "Kürbis", nl: "Pompoen" },
          { en: "Carrot", es: "Zanahoria", de: "Karotte", nl: "Wortel" },
          { en: "Potato", es: "Papa", de: "Kartoffel", nl: "Aardappel" },
          { en: "Onion", es: "Cebolla", de: "Zwiebel", nl: "Ui" }
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
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "13", es: "13", de: "13", nl: "13" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which explorer is credited with discovering America?",
          es: "¿A qué explorador se le atribuye el descubrimiento de América?",
          de: "Welchem Entdecker wird die Entdeckung Amerikas zugeschrieben?",
          nl: "Welke ontdekkingsreiziger wordt gecrediteerd met het ontdekken van Amerika?"
        },
        options: [
          { en: "Christopher Columbus", es: "Cristóbal Colón", de: "Christoph Kolumbus", nl: "Christoffel Columbus" },
          { en: "Marco Polo", es: "Marco Polo", de: "Marco Polo", nl: "Marco Polo" },
          { en: "Vasco da Gama", es: "Vasco da Gama", de: "Vasco da Gama", nl: "Vasco da Gama" },
          { en: "Ferdinand Magellan", es: "Fernando de Magallanes", de: "Ferdinand Magellan", nl: "Ferdinand Magellaan" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What happens to daylight in November in the Northern Hemisphere?",
          es: "¿Qué pasa con la luz del día en noviembre en el Hemisferio Norte?",
          de: "Was passiert mit dem Tageslicht im November auf der Nordhalbkugel?",
          nl: "Wat gebeurt er met het daglicht in november op het noordelijk halfrond?"
        },
        options: [
          { en: "Days get shorter", es: "Los días se acortan", de: "Die Tage werden kürzer", nl: "Dagen worden korter" },
          { en: "Days get longer", es: "Los días se alargan", de: "Die Tage werden länger", nl: "Dagen worden langer" },
          { en: "Days stay the same", es: "Los días siguen igual", de: "Die Tage bleiben gleich", nl: "Dagen blijven hetzelfde" },
          { en: "There is no daylight", es: "No hay luz del día", de: "Es gibt kein Tageslicht", nl: "Er is geen daglicht" }
        ],
        correctIndex: 0
      }
    ],

    // Day 13 - November 13th
    day13: [
      {
        question: {
          en: "What do deer eat to prepare for winter?",
          es: "¿Qué comen los ciervos para prepararse para el invierno?",
          de: "Was fressen Hirsche zur Vorbereitung auf den Winter?",
          nl: "Wat eten herten om zich voor te bereiden op de winter?"
        },
        options: [
          { en: "Extra plants and nuts", es: "Plantas y nueces extra", de: "Extra Pflanzen und Nüsse", nl: "Extra planten en noten" },
          { en: "Only meat", es: "Solo carne", de: "Nur Fleisch", nl: "Alleen vlees" },
          { en: "Ice and snow", es: "Hielo y nieve", de: "Eis und Schnee", nl: "IJs en sneeuw" },
          { en: "Nothing special", es: "Nada especial", de: "Nichts Besonderes", nl: "Niets speciaals" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the currency used in Japan?",
          es: "¿Cuál es la moneda que se usa en Japón?",
          de: "Welche Währung wird in Japan verwendet?",
          nl: "Welke munt wordt gebruikt in Japan?"
        },
        options: [
          { en: "Yen", es: "Yen", de: "Yen", nl: "Yen" },
          { en: "Dollar", es: "Dólar", de: "Dollar", nl: "Dollar" },
          { en: "Euro", es: "Euro", de: "Euro", nl: "Euro" },
          { en: "Pound", es: "Libra", de: "Pfund", nl: "Pond" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 13 + 29?",
          es: "¿Cuánto es 13 + 29?",
          de: "Was ist 13 + 29?",
          nl: "Hoeveel is 13 + 29?"
        },
        options: [
          { en: "42", es: "42", de: "42", nl: "42" },
          { en: "41", es: "41", de: "41", nl: "41" },
          { en: "43", es: "43", de: "43", nl: "43" },
          { en: "40", es: "40", de: "40", nl: "40" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do we call water in its solid form?",
          es: "¿Cómo llamamos al agua en su forma sólida?",
          de: "Wie nennen wir Wasser in seiner festen Form?",
          nl: "Hoe noemen we water in zijn vaste vorm?"
        },
        options: [
          { en: "Ice", es: "Hielo", de: "Eis", nl: "IJs" },
          { en: "Steam", es: "Vapor", de: "Dampf", nl: "Stoom" },
          { en: "Rain", es: "Lluvia", de: "Regen", nl: "Regen" },
          { en: "Snow", es: "Nieve", de: "Schnee", nl: "Sneeuw" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do many families do together during Thanksgiving?",
          es: "¿Qué hacen juntas muchas familias durante Acción de Gracias?",
          de: "Was machen viele Familien zusammen zu Thanksgiving?",
          nl: "Wat doen veel families samen tijdens Thanksgiving?"
        },
        options: [
          { en: "Share a meal", es: "Comparten una comida", de: "Teilen eine Mahlzeit", nl: "Delen een maaltijd" },
          { en: "Go to work", es: "Van al trabajo", de: "Zur Arbeit gehen", nl: "Naar het werk gaan" },
          { en: "Sleep all day", es: "Duermen todo el día", de: "Den ganzen Tag schlafen", nl: "De hele dag slapen" },
          { en: "Go shopping alone", es: "Van de compras solos", de: "Alleine einkaufen gehen", nl: "Alleen gaan winkelen" }
        ],
        correctIndex: 0
      }
    ],

    // Day 14 - November 14th
    day14: [
      {
        question: {
          en: "What do many trees look like in late November?",
          es: "¿Cómo se ven muchos árboles a finales de noviembre?",
          de: "Wie sehen viele Bäume Ende November aus?",
          nl: "Hoe zien veel bomen er uit eind november?"
        },
        options: [
          { en: "Bare branches", es: "Ramas desnudas", de: "Kahle Äste", nl: "Kale takken" },
          { en: "Full of green leaves", es: "Llenos de hojas verdes", de: "Voller grüner Blätter", nl: "Vol groene bladeren" },
          { en: "Covered in flowers", es: "Cubiertos de flores", de: "Voller Blüten", nl: "Vol bloemen" },
          { en: "Growing fruit", es: "Creciendo fruta", de: "Früchte tragend", nl: "Groeiend fruit" }
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
          { en: "Hippopotamus", es: "Hipopótamo", de: "Nilpferd", nl: "Nijlpaard" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 5 × 12?",
          es: "¿Cuánto es 5 × 12?",
          de: "Was ist 5 × 12?",
          nl: "Hoeveel is 5 × 12?"
        },
        options: [
          { en: "60", es: "60", de: "60", nl: "60" },
          { en: "50", es: "50", de: "50", nl: "50" },
          { en: "55", es: "55", de: "55", nl: "55" },
          { en: "65", es: "65", de: "65", nl: "65" }
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
          { en: "Charles Darwin", es: "Charles Darwin", de: "Charles Darwin", nl: "Charles Darwin" },
          { en: "Marie Curie", es: "Marie Curie", de: "Marie Curie", nl: "Marie Curie" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What attitude should we have during November's gratitude season?",
          es: "¿Qué actitud deberíamos tener durante la temporada de gratitud de noviembre?",
          de: "Welche Einstellung sollten wir während der Dankbarkeitszeit im November haben?",
          nl: "Welke houding zouden we moeten hebben tijdens november's dankbaarheidsseizoen?"
        },
        options: [
          { en: "Thankful", es: "Agradecido", de: "Dankbar", nl: "Dankbaar" },
          { en: "Angry", es: "Enojado", de: "Wütend", nl: "Boos" },
          { en: "Selfish", es: "Egoísta", de: "Egoistisch", nl: "Egoïstisch" },
          { en: "Worried", es: "Preocupado", de: "Besorgt", nl: "Bezorgd" }
        ],
        correctIndex: 0
      }
    ],

    // Day 15 - November 15th
    day15: [
      {
        question: {
          en: "What do many animals do with their burrows in late fall?",
          es: "¿Qué hacen muchos animales con sus madrigueras a finales del otoño?",
          de: "Was machen viele Tiere mit ihren Höhlen im Spätherbst?",
          nl: "Wat doen veel dieren met hun holen in de late herfst?"
        },
        options: [
          { en: "Make them warmer", es: "Las hacen más cálidas", de: "Machen sie wärmer", nl: "Maken ze warmer" },
          { en: "Abandon them", es: "Las abandonan", de: "Verlassen sie", nl: "Verlaten ze" },
          { en: "Make them bigger", es: "Las hacen más grandes", de: "Machen sie größer", nl: "Maken ze groter" },
          { en: "Paint them", es: "Las pintan", de: "Streichen sie", nl: "Schilderen ze" }
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
          en: "What is 18 + 17?",
          es: "¿Cuánto es 18 + 17?",
          de: "Was ist 18 + 17?",
          nl: "Hoeveel is 18 + 17?"
        },
        options: [
          { en: "35", es: "35", de: "35", nl: "35" },
          { en: "34", es: "34", de: "34", nl: "34" },
          { en: "36", es: "36", de: "36", nl: "36" },
          { en: "33", es: "33", de: "33", nl: "33" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do we call the force that pulls objects toward Earth?",
          es: "¿Cómo llamamos a la fuerza que atrae los objetos hacia la Tierra?",
          de: "Wie nennen wir die Kraft, die Objekte zur Erde zieht?",
          nl: "Hoe noemen we de kracht die objecten naar de aarde trekt?"
        },
        options: [
          { en: "Gravity", es: "Gravedad", de: "Schwerkraft", nl: "Zwaartekracht" },
          { en: "Magnetism", es: "Magnetismo", de: "Magnetismus", nl: "Magnetisme" },
          { en: "Electricity", es: "Electricidad", de: "Elektrizität", nl: "Elektriciteit" },
          { en: "Wind", es: "Viento", de: "Wind", nl: "Wind" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the traditional color scheme of November decorations?",
          es: "¿Cuál es el esquema de colores tradicional de las decoraciones de noviembre?",
          de: "Was ist das traditionelle Farbschema für November-Dekorationen?",
          nl: "Wat is het traditionele kleurenschema van november decoraties?"
        },
        options: [
          { en: "Orange, brown, and red", es: "Naranja, marrón y rojo", de: "Orange, braun und rot", nl: "Oranje, bruin en rood" },
          { en: "Pink and purple", es: "Rosa y morado", de: "Rosa und lila", nl: "Roze en paars" },
          { en: "Blue and white", es: "Azul y blanco", de: "Blau und weiß", nl: "Blauw en wit" },
          { en: "Black and silver", es: "Negro y plateado", de: "Schwarz und silber", nl: "Zwart en zilver" }
        ],
        correctIndex: 0
      }
    ],

    // Day 16 - November 16th
    day16: [
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
          en: "What do farmers do with corn in late November?",
          es: "¿Qué hacen los agricultores con el maíz a finales de noviembre?",
          de: "Was machen Bauern mit Mais Ende November?",
          nl: "Wat doen boeren met mais eind november?"
        },
        options: [
          { en: "Harvest it", es: "Lo cosechan", de: "Ernten es", nl: "Oogsten het" },
          { en: "Plant new seeds", es: "Plantan nuevas semillas", de: "Säen neue Samen", nl: "Planten nieuwe zaden" },
          { en: "Water it heavily", es: "Lo riegan mucho", de: "Gießen es stark", nl: "Bewateren het veel" },
          { en: "Paint it", es: "Lo pintan", de: "Streichen es", nl: "Verven het" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 16 × 4?",
          es: "¿Cuánto es 16 × 4?",
          de: "Was ist 16 × 4?",
          nl: "Hoeveel is 16 × 4?"
        },
        options: [
          { en: "64", es: "64", de: "64", nl: "64" },
          { en: "60", es: "60", de: "60", nl: "60" },
          { en: "68", es: "68", de: "68", nl: "68" },
          { en: "56", es: "56", de: "56", nl: "56" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the smallest ocean?",
          es: "¿Cuál es el océano más pequeño?",
          de: "Was ist der kleinste Ozean?",
          nl: "Wat is de kleinste oceaan?"
        },
        options: [
          { en: "Arctic Ocean", es: "Océano Ártico", de: "Arktischer Ozean", nl: "Arctische Oceaan" },
          { en: "Atlantic Ocean", es: "Océano Atlántico", de: "Atlantischer Ozean", nl: "Atlantische Oceaan" },
          { en: "Indian Ocean", es: "Océano Índico", de: "Indischer Ozean", nl: "Indische Oceaan" },
          { en: "Pacific Ocean", es: "Océano Pacífico", de: "Pazifischer Ozean", nl: "Stille Oceaan" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do people start preparing for in mid-November?",
          es: "¿Para qué empiezan a prepararse las personas a mediados de noviembre?",
          de: "Wofür bereiten sich die Menschen Mitte November vor?",
          nl: "Waarvoor beginnen mensen zich voor te bereiden half november?"
        },
        options: [
          { en: "Winter season", es: "Temporada de invierno", de: "Wintersaison", nl: "Winterseizoen" },
          { en: "Summer vacation", es: "Vacaciones de verano", de: "Sommerferien", nl: "Zomervakantie" },
          { en: "Spring planting", es: "Plantación de primavera", de: "Frühjahrspflanzung", nl: "Lenteplanten" },
          { en: "Beach season", es: "Temporada de playa", de: "Strand-Saison", nl: "Strandseizoen" }
        ],
        correctIndex: 0
      }
    ],

    // Day 17 - November 17th
    day17: [
      {
        question: {
          en: "What sound do turkeys make?",
          es: "¿Qué sonido hacen los pavos?",
          de: "Welches Geräusch machen Truthähne?",
          nl: "Welk geluid maken kalkoenen?"
        },
        options: [
          { en: "Gobble gobble", es: "Gluglú", de: "Kollern", nl: "Kokkelen" },
          { en: "Moo moo", es: "Mu mu", de: "Muh muh", nl: "Boe boe" },
          { en: "Woof woof", es: "Guau guau", de: "Wau wau", nl: "Woef woef" },
          { en: "Meow meow", es: "Miau miau", de: "Miau miau", nl: "Miauw miauw" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the main ingredient in bread?",
          es: "¿Cuál es el ingrediente principal del pan?",
          de: "Was ist die Hauptzutat von Brot?",
          nl: "Wat is het hoofdingrediënt van brood?"
        },
        options: [
          { en: "Flour", es: "Harina", de: "Mehl", nl: "Bloem" },
          { en: "Sugar", es: "Azúcar", de: "Zucker", nl: "Suiker" },
          { en: "Salt", es: "Sal", de: "Salz", nl: "Zout" },
          { en: "Butter", es: "Mantequilla", de: "Butter", nl: "Boter" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 85 - 28?",
          es: "¿Cuánto es 85 - 28?",
          de: "Was ist 85 - 28?",
          nl: "Hoeveel is 85 - 28?"
        },
        options: [
          { en: "57", es: "57", de: "57", nl: "57" },
          { en: "56", es: "56", de: "56", nl: "56" },
          { en: "58", es: "58", de: "58", nl: "58" },
          { en: "55", es: "55", de: "55", nl: "55" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which layer of Earth do we live on?",
          es: "¿En qué capa de la Tierra vivimos?",
          de: "Auf welcher Erdschicht leben wir?",
          nl: "Op welke laag van de aarde leven we?"
        },
        options: [
          { en: "Crust", es: "Corteza", de: "Kruste", nl: "Korst" },
          { en: "Mantle", es: "Manto", de: "Mantel", nl: "Mantel" },
          { en: "Outer core", es: "Núcleo externo", de: "Äußerer Kern", nl: "Buitenste kern" },
          { en: "Inner core", es: "Núcleo interno", de: "Innerer Kern", nl: "Binnenste kern" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do people collect to make winter crafts in November?",
          es: "¿Qué recolectan las personas para hacer manualidades de invierno en noviembre?",
          de: "Was sammeln die Menschen im November für Winterbasteleien?",
          nl: "Wat verzamelen mensen om winterknutselwerk te maken in november?"
        },
        options: [
          { en: "Pine cones and leaves", es: "Piñas y hojas", de: "Tannenzapfen und Blätter", nl: "Dennenappels en bladeren" },
          { en: "Seashells", es: "Conchas marinas", de: "Muscheln", nl: "Schelpen" },
          { en: "Sand", es: "Arena", de: "Sand", nl: "Zand" },
          { en: "Fresh flowers", es: "Flores frescas", de: "Frische Blumen", nl: "Verse bloemen" }
        ],
        correctIndex: 0
      }
    ],

    // Day 18 - November 18th
    day18: [
      {
        question: {
          en: "What do squirrels use their bushy tails for in winter?",
          es: "¿Para qué usan las ardillas sus colas peludas en invierno?",
          de: "Wofür benutzen Eichhörnchen ihre buschigen Schwänze im Winter?",
          nl: "Waarvoor gebruiken eekhoorns hun pluizige staarten in de winter?"
        },
        options: [
          { en: "To keep warm", es: "Para mantenerse calientes", de: "Um sich warm zu halten", nl: "Om warm te blijven" },
          { en: "To dig holes", es: "Para cavar hoyos", de: "Um Löcher zu graben", nl: "Om gaten te graven" },
          { en: "To swim", es: "Para nadar", de: "Zum Schwimmen", nl: "Om te zwemmen" },
          { en: "To fly", es: "Para volar", de: "Zum Fliegen", nl: "Om te vliegen" }
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
          { en: "Rabbit", es: "Conejo", de: "Kaninchen", nl: "Konijn" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 7 × 9?",
          es: "¿Cuánto es 7 × 9?",
          de: "Was ist 7 × 9?",
          nl: "Hoeveel is 7 × 9?"
        },
        options: [
          { en: "63", es: "63", de: "63", nl: "63" },
          { en: "56", es: "56", de: "56", nl: "56" },
          { en: "72", es: "72", de: "72", nl: "72" },
          { en: "64", es: "64", de: "64", nl: "64" }
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
          en: "What should you check before winter arrives?",
          es: "¿Qué deberías revisar antes de que llegue el invierno?",
          de: "Was solltest du vor dem Winter überprüfen?",
          nl: "Wat zou je moeten controleren voordat de winter komt?"
        },
        options: [
          { en: "Home heating system", es: "Sistema de calefacción del hogar", de: "Hausheizungssystem", nl: "Huisverwarmingssysteem" },
          { en: "Swimming pool", es: "Piscina", de: "Schwimmbecken", nl: "Zwembad" },
          { en: "Beach umbrella", es: "Sombrilla de playa", de: "Sonnenschirm", nl: "Strandparasol" },
          { en: "Sunscreen", es: "Protector solar", de: "Sonnenschutz", nl: "Zonnebrandcrème" }
        ],
        correctIndex: 0
      }
    ],

    // Day 19 - November 19th
    day19: [
      {
        question: {
          en: "What do bees make in their hives?",
          es: "¿Qué hacen las abejas en sus colmenas?",
          de: "Was machen Bienen in ihren Bienenstöcken?",
          nl: "Wat maken bijen in hun bijenkorven?"
        },
        options: [
          { en: "Honey", es: "Miel", de: "Honig", nl: "Honing" },
          { en: "Milk", es: "Leche", de: "Milch", nl: "Melk" },
          { en: "Cheese", es: "Queso", de: "Käse", nl: "Kaas" },
          { en: "Juice", es: "Jugo", de: "Saft", nl: "Sap" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is getting closer as November progresses?",
          es: "¿Qué se acerca a medida que avanza noviembre?",
          de: "Was nähert sich, während der November voranschreitet?",
          nl: "Wat komt dichterbij naarmate november vordert?"
        },
        options: [
          { en: "Thanksgiving holiday", es: "Fiesta de Acción de Gracias", de: "Thanksgiving-Feiertag", nl: "Thanksgiving feestdag" },
          { en: "Summer vacation", es: "Vacaciones de verano", de: "Sommerferien", nl: "Zomervakantie" },
          { en: "Halloween", es: "Halloween", de: "Halloween", nl: "Halloween" },
          { en: "Easter", es: "Pascua", de: "Ostern", nl: "Pasen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 120 ÷ 8?",
          es: "¿Cuánto es 120 ÷ 8?",
          de: "Was ist 120 ÷ 8?",
          nl: "Hoeveel is 120 ÷ 8?"
        },
        options: [
          { en: "15", es: "15", de: "15", nl: "15" },
          { en: "14", es: "14", de: "14", nl: "14" },
          { en: "16", es: "16", de: "16", nl: "16" },
          { en: "12", es: "12", de: "12", nl: "12" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do we call animals that eat both plants and meat?",
          es: "¿Cómo llamamos a los animales que comen tanto plantas como carne?",
          de: "Wie nennen wir Tiere, die sowohl Pflanzen als auch Fleisch fressen?",
          nl: "Hoe noemen we dieren die zowel planten als vlees eten?"
        },
        options: [
          { en: "Omnivores", es: "Omnívoros", de: "Allesfresser", nl: "Omnivoren" },
          { en: "Herbivores", es: "Herbívoros", de: "Pflanzenfresser", nl: "Herbivoren" },
          { en: "Carnivores", es: "Carnívoros", de: "Fleischfresser", nl: "Carnivoren" },
          { en: "Vegetarians", es: "Vegetarianos", de: "Vegetarier", nl: "Vegetariërs" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do many stores start advertising heavily in late November?",
          es: "¿Qué empiezan a anunciar mucho las tiendas a finales de noviembre?",
          de: "Was bewerben viele Geschäfte Ende November stark?",
          nl: "Wat beginnen veel winkels zwaar te adverteren eind november?"
        },
        options: [
          { en: "Holiday sales", es: "Ofertas navideñas", de: "Feiertagsverkäufe", nl: "Feestdagverkopen" },
          { en: "Summer clothing", es: "Ropa de verano", de: "Sommerkleidung", nl: "Zomerkleding" },
          { en: "Beach trips", es: "Viajes a la playa", de: "Strandreisen", nl: "Strandreizen" },
          { en: "Swimming lessons", es: "Lecciones de natación", de: "Schwimmunterricht", nl: "Zwemlessen" }
        ],
        correctIndex: 0
      }
    ],

    // Day 20 - November 20th: Thanksgiving Week Begins
    day20: [
      {
        question: {
          en: "What traditional Thanksgiving side dish is made from bread?",
          es: "¿Qué plato tradicional de Acción de Gracias se hace con pan?",
          de: "Welche traditionelle Thanksgiving-Beilage wird aus Brot gemacht?",
          nl: "Welk traditioneel Thanksgiving bijgerecht wordt gemaakt van brood?"
        },
        options: [
          { en: "Stuffing", es: "Relleno", de: "Füllung", nl: "Vulling" },
          { en: "Mashed potatoes", es: "Puré de papas", de: "Kartoffelpüree", nl: "Aardappelpuree" },
          { en: "Green beans", es: "Judías verdes", de: "Grüne Bohnen", nl: "Sperziebonen" },
          { en: "Corn", es: "Maíz", de: "Mais", nl: "Mais" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What ship brought the Pilgrims to America?",
          es: "¿Qué barco trajo a los Peregrinos a América?",
          de: "Welches Schiff brachte die Pilger nach Amerika?",
          nl: "Welk schip bracht de Pilgrims naar Amerika?"
        },
        options: [
          { en: "Mayflower", es: "Mayflower", de: "Mayflower", nl: "Mayflower" },
          { en: "Santa Maria", es: "Santa María", de: "Santa Maria", nl: "Santa Maria" },
          { en: "Titanic", es: "Titanic", de: "Titanic", nl: "Titanic" },
          { en: "Constitution", es: "Constitution", de: "Constitution", nl: "Constitution" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 14 × 5?",
          es: "¿Cuánto es 14 × 5?",
          de: "Was ist 14 × 5?",
          nl: "Hoeveel is 14 × 5?"
        },
        options: [
          { en: "70", es: "70", de: "70", nl: "70" },
          { en: "65", es: "65", de: "65", nl: "65" },
          { en: "75", es: "75", de: "75", nl: "75" },
          { en: "60", es: "60", de: "60", nl: "60" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What red fruit is traditionally served as sauce at Thanksgiving?",
          es: "¿Qué fruta roja se sirve tradicionalmente como salsa en Acción de Gracias?",
          de: "Welche rote Frucht wird traditionell als Sauce zu Thanksgiving serviert?",
          nl: "Welke rode vrucht wordt traditioneel als saus geserveerd met Thanksgiving?"
        },
        options: [
          { en: "Cranberries", es: "Arándanos rojos", de: "Preiselbeeren", nl: "Veenbessen" },
          { en: "Strawberries", es: "Fresas", de: "Erdbeeren", nl: "Aardbeien" },
          { en: "Cherries", es: "Cerezas", de: "Kirschen", nl: "Kersen" },
          { en: "Apples", es: "Manzanas", de: "Äpfel", nl: "Appels" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the main reason families gather for Thanksgiving?",
          es: "¿Cuál es la razón principal por la que las familias se reúnen para Acción de Gracias?",
          de: "Was ist der Hauptgrund, warum Familien zu Thanksgiving zusammenkommen?",
          nl: "Wat is de hoofdreden waarom families samenkomen voor Thanksgiving?"
        },
        options: [
          { en: "To give thanks", es: "Para dar gracias", de: "Um dankbar zu sein", nl: "Om dankbaar te zijn" },
          { en: "To complain", es: "Para quejarse", de: "Um sich zu beschweren", nl: "Om te klagen" },
          { en: "To argue", es: "Para discutir", de: "Um zu streiten", nl: "Om ruzie te maken" },
          { en: "To work", es: "Para trabajar", de: "Um zu arbeiten", nl: "Om te werken" }
        ],
        correctIndex: 0
      }
    ],

    // Day 21 - November 21st: Thanksgiving Preparations
    day21: [
      {
        question: {
          en: "Where did the Pilgrims first land in America?",
          es: "¿Dónde desembarcaron por primera vez los Peregrinos en América?",
          de: "Wo landeten die Pilger zuerst in Amerika?",
          nl: "Waar landden de Pilgrims voor het eerst in Amerika?"
        },
        options: [
          { en: "Plymouth", es: "Plymouth", de: "Plymouth", nl: "Plymouth" },
          { en: "Boston", es: "Boston", de: "Boston", nl: "Boston" },
          { en: "New York", es: "Nueva York", de: "New York", nl: "New York" },
          { en: "Philadelphia", es: "Filadelfia", de: "Philadelphia", nl: "Philadelphia" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do people often break at the Thanksgiving table for good luck?",
          es: "¿Qué suelen romper las personas en la mesa de Acción de Gracias para la buena suerte?",
          de: "Was zerbrechen die Menschen oft am Thanksgiving-Tisch für Glück?",
          nl: "Wat breken mensen vaak aan de Thanksgiving-tafel voor geluk?"
        },
        options: [
          { en: "Turkey wishbone", es: "Hueso de la suerte del pavo", de: "Truthahn-Wunschknochen", nl: "Kalkoen wensbot" },
          { en: "Dinner plate", es: "Plato de cena", de: "Teller", nl: "Dinerbord" },
          { en: "Wine glass", es: "Copa de vino", de: "Weinglas", nl: "Wijnglas" },
          { en: "Bread roll", es: "Panecillo", de: "Brötchen", nl: "Broodje" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 96 ÷ 12?",
          es: "¿Cuánto es 96 ÷ 12?",
          de: "Was ist 96 ÷ 12?",
          nl: "Hoeveel is 96 ÷ 12?"
        },
        options: [
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "9", es: "9", de: "9", nl: "9" },
          { en: "6", es: "6", de: "6", nl: "6" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the study of weather called?",
          es: "¿Cómo se llama el estudio del clima?",
          de: "Wie heißt die Wissenschaft vom Wetter?",
          nl: "Hoe heet de studie van het weer?"
        },
        options: [
          { en: "Meteorology", es: "Meteorología", de: "Meteorologie", nl: "Meteorologie" },
          { en: "Biology", es: "Biología", de: "Biologie", nl: "Biologie" },
          { en: "Geology", es: "Geología", de: "Geologie", nl: "Geologie" },
          { en: "Psychology", es: "Psicología", de: "Psychologie", nl: "Psychologie" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Who helped the Pilgrims learn to grow crops in America?",
          es: "¿Quién ayudó a los Peregrinos a aprender a cultivar en América?",
          de: "Wer half den Pilgern, in Amerika Feldfrüchte anzubauen?",
          nl: "Wie hielp de Pilgrims leren gewassen te verbouwen in Amerika?"
        },
        options: [
          { en: "Native Americans", es: "Nativos americanos", de: "Indianer", nl: "Inheemse Amerikanen" },
          { en: "Other Europeans", es: "Otros europeos", de: "Andere Europäer", nl: "Andere Europeanen" },
          { en: "Spanish explorers", es: "Exploradores españoles", de: "Spanische Entdecker", nl: "Spaanse ontdekkingsreizigers" },
          { en: "French traders", es: "Comerciantes franceses", de: "Französische Händler", nl: "Franse handelaren" }
        ],
        correctIndex: 0
      }
    ],

    // Day 22 - November 22nd: Thanksgiving Foods
    day22: [
      {
        question: {
          en: "What orange vegetable is popular in Thanksgiving dishes?",
          es: "¿Qué verdura naranja es popular en los platos de Acción de Gracias?",
          de: "Welches orange Gemüse ist beliebt in Thanksgiving-Gerichten?",
          nl: "Welke oranje groente is populair in Thanksgiving gerechten?"
        },
        options: [
          { en: "Pumpkin", es: "Calabaza", de: "Kürbis", nl: "Pompoen" },
          { en: "Carrot", es: "Zanahoria", de: "Karotte", nl: "Wortel" },
          { en: "Orange pepper", es: "Pimiento naranja", de: "Orange Paprika", nl: "Oranje paprika" },
          { en: "Sweet potato", es: "Batata", de: "Süßkartoffel", nl: "Zoete aardappel" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What type of pie is most traditional at Thanksgiving?",
          es: "¿Qué tipo de pastel es más tradicional en Acción de Gracias?",
          de: "Welche Art von Kuchen ist am traditionellsten zu Thanksgiving?",
          nl: "Welk type taart is het meest traditioneel met Thanksgiving?"
        },
        options: [
          { en: "Pumpkin pie", es: "Pastel de calabaza", de: "Kürbiskuchen", nl: "Pompoentaart" },
          { en: "Apple pie", es: "Pastel de manzana", de: "Apfelkuchen", nl: "Appeltaart" },
          { en: "Cherry pie", es: "Pastel de cereza", de: "Kirschkuchen", nl: "Kersentaart" },
          { en: "Chocolate pie", es: "Pastel de chocolate", de: "Schokoladenkuchen", nl: "Chocoladetaart" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 19 + 38?",
          es: "¿Cuánto es 19 + 38?",
          de: "Was ist 19 + 38?",
          nl: "Hoeveel is 19 + 38?"
        },
        options: [
          { en: "57", es: "57", de: "57", nl: "57" },
          { en: "56", es: "56", de: "56", nl: "56" },
          { en: "58", es: "58", de: "58", nl: "58" },
          { en: "55", es: "55", de: "55", nl: "55" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the process of water turning into vapor called?",
          es: "¿Cómo se llama el proceso del agua convirtiéndose en vapor?",
          de: "Wie heißt der Prozess, bei dem Wasser zu Dampf wird?",
          nl: "Hoe heet het proces waarbij water in damp verandert?"
        },
        options: [
          { en: "Evaporation", es: "Evaporación", de: "Verdunstung", nl: "Verdamping" },
          { en: "Condensation", es: "Condensación", de: "Kondensation", nl: "Condensatie" },
          { en: "Freezing", es: "Congelación", de: "Gefrieren", nl: "Bevriezen" },
          { en: "Melting", es: "Derretimiento", de: "Schmelzen", nl: "Smelten" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do families often share around the Thanksgiving table?",
          es: "¿Qué suelen compartir las familias alrededor de la mesa de Acción de Gracias?",
          de: "Was teilen Familien oft am Thanksgiving-Tisch?",
          nl: "Wat delen families vaak rondom de Thanksgiving tafel?"
        },
        options: [
          { en: "What they're grateful for", es: "Por lo que están agradecidos", de: "Wofür sie dankbar sind", nl: "Waarvoor ze dankbaar zijn" },
          { en: "Their problems", es: "Sus problemas", de: "Ihre Probleme", nl: "Hun problemen" },
          { en: "Gossip", es: "Chismes", de: "Klatsch", nl: "Roddels" },
          { en: "Complaints", es: "Quejas", de: "Beschwerden", nl: "Klachten" }
        ],
        correctIndex: 0
      }
    ],

    // Day 23 - November 23rd: Thanksgiving Eve
    day23: [
      {
        question: {
          en: "What season follows fall/autumn?",
          es: "¿Qué estación sigue al otoño?",
          de: "Welche Jahreszeit folgt auf den Herbst?",
          nl: "Welk seizoen volgt op de herfst?"
        },
        options: [
          { en: "Winter", es: "Invierno", de: "Winter", nl: "Winter" },
          { en: "Spring", es: "Primavera", de: "Frühling", nl: "Lente" },
          { en: "Summer", es: "Verano", de: "Sommer", nl: "Zomer" },
          { en: "Fall again", es: "Otoño otra vez", de: "Herbst wieder", nl: "Herfst weer" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do people often travel to do on Thanksgiving?",
          es: "¿Para qué suelen viajar las personas en Acción de Gracias?",
          de: "Wofür reisen Menschen oft zu Thanksgiving?",
          nl: "Waarvoor reizen mensen vaak met Thanksgiving?"
        },
        options: [
          { en: "Visit family", es: "Visitar familia", de: "Familie besuchen", nl: "Familie bezoeken" },
          { en: "Go to work", es: "Ir al trabajo", de: "Zur Arbeit gehen", nl: "Naar het werk gaan" },
          { en: "Stay alone", es: "Quedarse solos", de: "Allein bleiben", nl: "Alleen blijven" },
          { en: "Go shopping", es: "Ir de compras", de: "Einkaufen gehen", nl: "Gaan winkelen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 13 × 6?",
          es: "¿Cuánto es 13 × 6?",
          de: "Was ist 13 × 6?",
          nl: "Hoeveel is 13 × 6?"
        },
        options: [
          { en: "78", es: "78", de: "78", nl: "78" },
          { en: "72", es: "72", de: "72", nl: "72" },
          { en: "84", es: "84", de: "84", nl: "84" },
          { en: "76", es: "76", de: "76", nl: "76" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the first meal of the day called?",
          es: "¿Cómo se llama la primera comida del día?",
          de: "Wie heißt die erste Mahlzeit des Tages?",
          nl: "Hoe heet de eerste maaltijd van de dag?"
        },
        options: [
          { en: "Breakfast", es: "Desayuno", de: "Frühstück", nl: "Ontbijt" },
          { en: "Lunch", es: "Almuerzo", de: "Mittagessen", nl: "Lunch" },
          { en: "Dinner", es: "Cena", de: "Abendessen", nl: "Diner" },
          { en: "Snack", es: "Merienda", de: "Snack", nl: "Tussendoortje" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the harvest celebration that Thanksgiving is based on?",
          es: "¿En qué celebración de cosecha se basa Acción de Gracias?",
          de: "Auf welcher Erntefeier basiert Thanksgiving?",
          nl: "Op welke oogstviering is Thanksgiving gebaseerd?"
        },
        options: [
          { en: "First harvest feast with Native Americans", es: "Primera fiesta de cosecha con nativos americanos", de: "Erstes Erntefest mit Indianern", nl: "Eerste oogstfeest met inheemse Amerikanen" },
          { en: "European winter festival", es: "Festival europeo de invierno", de: "Europäisches Winterfest", nl: "Europees winterfestival" },
          { en: "Spanish celebration", es: "Celebración española", de: "Spanische Feier", nl: "Spaanse viering" },
          { en: "Modern invention", es: "Invención moderna", de: "Moderne Erfindung", nl: "Moderne uitvinding" }
        ],
        correctIndex: 0
      }
    ],

    // Day 24 - November 24th: Thanksgiving Day
    day24: [
      {
        question: {
          en: "What is the main bird traditionally served on Thanksgiving Day?",
          es: "¿Cuál es el ave principal que se sirve tradicionalmente en el Día de Acción de Gracias?",
          de: "Welcher Vogel wird traditionell am Thanksgiving-Tag serviert?",
          nl: "Welke vogel wordt traditioneel geserveerd op Thanksgiving Day?"
        },
        options: [
          { en: "Turkey", es: "Pavo", de: "Truthahn", nl: "Kalkoen" },
          { en: "Chicken", es: "Pollo", de: "Huhn", nl: "Kip" },
          { en: "Duck", es: "Pato", de: "Ente", nl: "Eend" },
          { en: "Goose", es: "Ganso", de: "Gans", nl: "Gans" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What special parade happens on Thanksgiving Day in New York?",
          es: "¿Qué desfile especial sucede en el Día de Acción de Gracias en Nueva York?",
          de: "Welche besondere Parade findet am Thanksgiving-Tag in New York statt?",
          nl: "Welke speciale parade vindt plaats op Thanksgiving Day in New York?"
        },
        options: [
          { en: "Macy's Thanksgiving Parade", es: "Desfile de Acción de Gracias de Macy's", de: "Macy's Thanksgiving Parade", nl: "Macy's Thanksgiving Parade" },
          { en: "Christmas Parade", es: "Desfile de Navidad", de: "Weihnachtsparade", nl: "Kerstparade" },
          { en: "Halloween Parade", es: "Desfile de Halloween", de: "Halloween-Parade", nl: "Halloween Parade" },
          { en: "New Year Parade", es: "Desfile de Año Nuevo", de: "Neujahrsparade", nl: "Nieuwjaarsparade" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 200 ÷ 25?",
          es: "¿Cuánto es 200 ÷ 25?",
          de: "Was ist 200 ÷ 25?",
          nl: "Hoeveel is 200 ÷ 25?"
        },
        options: [
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "9", es: "9", de: "9", nl: "9" },
          { en: "10", es: "10", de: "10", nl: "10" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What feeling is Thanksgiving Day most about celebrating?",
          es: "¿Qué sentimiento es sobre todo lo que celebra el Día de Acción de Gracias?",
          de: "Welches Gefühl wird am Thanksgiving-Tag hauptsächlich gefeiert?",
          nl: "Welk gevoel wordt vooral gevierd op Thanksgiving Day?"
        },
        options: [
          { en: "Gratitude", es: "Gratitud", de: "Dankbarkeit", nl: "Dankbaarheid" },
          { en: "Sadness", es: "Tristeza", de: "Traurigkeit", nl: "Verdriet" },
          { en: "Anger", es: "Ira", de: "Wut", nl: "Woede" },
          { en: "Fear", es: "Miedo", de: "Angst", nl: "Angst" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What did the Pilgrims and Native Americans celebrate together in the first Thanksgiving?",
          es: "¿Qué celebraron juntos los Peregrinos y los Nativos Americanos en la primera Acción de Gracias?",
          de: "Was feierten die Pilger und Indianer zusammen beim ersten Thanksgiving?",
          nl: "Wat vierden de Pilgrims en inheemse Amerikanen samen met de eerste Thanksgiving?"
        },
        options: [
          { en: "A successful harvest", es: "Una cosecha exitosa", de: "Eine erfolgreiche Ernte", nl: "Een succesvolle oogst" },
          { en: "A new war", es: "Una nueva guerra", de: "Ein neuer Krieg", nl: "Een nieuwe oorlog" },
          { en: "The discovery of gold", es: "El descubrimiento de oro", de: "Die Entdeckung von Gold", nl: "De ontdekking van goud" },
          { en: "The building of a city", es: "La construcción de una ciudad", de: "Der Bau einer Stadt", nl: "De bouw van een stad" }
        ],
        correctIndex: 0
      }
    ],

    // Day 25 - November 25th: Day After Thanksgiving
    day25: [
      {
        question: {
          en: "What popular shopping day comes after Thanksgiving?",
          es: "¿Qué día popular de compras viene después de Acción de Gracias?",
          de: "Welcher beliebte Einkaufstag kommt nach Thanksgiving?",
          nl: "Welke populaire winkeldag komt na Thanksgiving?"
        },
        options: [
          { en: "Black Friday", es: "Viernes Negro", de: "Black Friday", nl: "Black Friday" },
          { en: "Blue Monday", es: "Lunes Azul", de: "Blauer Montag", nl: "Blauwe Maandag" },
          { en: "Red Sunday", es: "Domingo Rojo", de: "Roter Sonntag", nl: "Rode Zondag" },
          { en: "Green Tuesday", es: "Martes Verde", de: "Grüner Dienstag", nl: "Groene Dinsdag" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do many families do with Thanksgiving leftovers?",
          es: "¿Qué hacen muchas familias con las sobras de Acción de Gracias?",
          de: "Was machen viele Familien mit Thanksgiving-Resten?",
          nl: "Wat doen veel families met Thanksgiving restjes?"
        },
        options: [
          { en: "Make turkey sandwiches", es: "Hacen sándwiches de pavo", de: "Machen Truthahn-Sandwiches", nl: "Maken kalkoensandwiches" },
          { en: "Throw them away", es: "Los tiran", de: "Werfen sie weg", nl: "Gooien ze weg" },
          { en: "Feed them to pets", es: "Los dan a las mascotas", de: "Füttern sie an Haustiere", nl: "Geven ze aan huisdieren" },
          { en: "Bury them", es: "Los entierran", de: "Vergraben sie", nl: "Begraven ze" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 17 × 4?",
          es: "¿Cuánto es 17 × 4?",
          de: "Was ist 17 × 4?",
          nl: "Hoeveel is 17 × 4?"
        },
        options: [
          { en: "68", es: "68", de: "68", nl: "68" },
          { en: "64", es: "64", de: "64", nl: "64" },
          { en: "72", es: "72", de: "72", nl: "72" },
          { en: "60", es: "60", de: "60", nl: "60" }
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
          { en: "Antarctica", es: "Antártida", de: "Antarktis", nl: "Antarctica" },
          { en: "Sahara", es: "Sahara", de: "Sahara", nl: "Sahara" },
          { en: "Gobi", es: "Gobi", de: "Gobi", nl: "Gobi" },
          { en: "Mojave", es: "Mojave", de: "Mojave", nl: "Mojave" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What traditional values does Thanksgiving teach us to remember?",
          es: "¿Qué valores tradicionales nos enseña Acción de Gracias a recordar?",
          de: "Welche traditionellen Werte lehrt uns Thanksgiving zu erinnern?",
          nl: "Welke traditionele waarden leert Thanksgiving ons om te onthouden?"
        },
        options: [
          { en: "Family and gratitude", es: "Familia y gratitud", de: "Familie und Dankbarkeit", nl: "Familie en dankbaarheid" },
          { en: "Money and power", es: "Dinero y poder", de: "Geld und Macht", nl: "Geld en macht" },
          { en: "Competition and winning", es: "Competencia y ganar", de: "Wettbewerb und Gewinnen", nl: "Competitie en winnen" },
          { en: "Individual success", es: "Éxito individual", de: "Individueller Erfolg", nl: "Individueel succes" }
        ],
        correctIndex: 0
      }
    ],

    // Day 26 - November 26th
    day26: [
      {
        question: {
          en: "What do many trees have shed by late November?",
          es: "¿Qué han perdido muchos árboles a finales de noviembre?",
          de: "Was haben viele Bäume Ende November abgeworfen?",
          nl: "Wat hebben veel bomen afgeworpen eind november?"
        },
        options: [
          { en: "All their leaves", es: "Todas sus hojas", de: "Alle ihre Blätter", nl: "al hun bladeren" },
          { en: "Their bark", es: "Su corteza", de: "Ihre Rinde", nl: "Hun bast" },
          { en: "Their roots", es: "Sus raíces", de: "Ihre Wurzeln", nl: "Hun wortels" },
          { en: "Their branches", es: "Sus ramas", de: "Ihre Äste", nl: "Hun takken" }
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
          { en: "South America", es: "Sudamérica", de: "Südamerika", nl: "Zuid-Amerika" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 45 + 39?",
          es: "¿Cuánto es 45 + 39?",
          de: "Was ist 45 + 39?",
          nl: "Hoeveel is 45 + 39?"
        },
        options: [
          { en: "84", es: "84", de: "84", nl: "84" },
          { en: "83", es: "83", de: "83", nl: "83" },
          { en: "85", es: "85", de: "85", nl: "85" },
          { en: "82", es: "82", de: "82", nl: "82" }
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
          { en: "Organ", es: "Órgano", de: "Organ", nl: "Orgaan" },
          { en: "Tissue", es: "Tejido", de: "Gewebe", nl: "Weefsel" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do people start preparing their homes for after Thanksgiving?",
          es: "¿Para qué empiezan a preparar sus casas las personas después de Acción de Gracias?",
          de: "Wofür bereiten Menschen ihre Häuser nach Thanksgiving vor?",
          nl: "Waarvoor beginnen mensen hun huizen voor te bereiden na Thanksgiving?"
        },
        options: [
          { en: "Winter and holidays", es: "Invierno y fiestas", de: "Winter und Feiertage", nl: "Winter en feestdagen" },
          { en: "Summer vacation", es: "Vacaciones de verano", de: "Sommerferien", nl: "Zomervakantie" },
          { en: "Spring cleaning", es: "Limpieza de primavera", de: "Frühjahrsputz", nl: "Voorjaarsschoonmaak" },
          { en: "Fall gardening", es: "Jardinería de otoño", de: "Herbstgärtnerei", nl: "Herfsttuinieren" }
        ],
        correctIndex: 0
      }
    ],

    // Day 27 - November 27th
    day27: [
      {
        question: {
          en: "What do many animals do to survive the coming winter?",
          es: "¿Qué hacen muchos animales para sobrevivir al invierno que se acerca?",
          de: "Was machen viele Tiere, um den kommenden Winter zu überleben?",
          nl: "Wat doen veel dieren om de komende winter te overleven?"
        },
        options: [
          { en: "Store extra body fat", es: "Almacenan grasa corporal extra", de: "Speichern zusätzliches Körperfett", nl: "Slaan extra lichaamsvet op" },
          { en: "Shed their fur", es: "Pierden su pelaje", de: "Verlieren ihr Fell", nl: "Verliezen hun vacht" },
          { en: "Sleep less", es: "Duermen menos", de: "Schlafen weniger", nl: "Slapen minder" },
          { en: "Eat only plants", es: "Comen solo plantas", de: "Fressen nur Pflanzen", nl: "Eten alleen planten" }
        ],
        correctIndex: 0
      },
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
          { en: "Luxor", es: "Luxor", de: "Luxor", nl: "Luxor" },
          { en: "Giza", es: "Giza", de: "Giza", nl: "Giza" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 11 × 9?",
          es: "¿Cuánto es 11 × 9?",
          de: "Was ist 11 × 9?",
          nl: "Hoeveel is 11 × 9?"
        },
        options: [
          { en: "99", es: "99", de: "99", nl: "99" },
          { en: "90", es: "90", de: "90", nl: "90" },
          { en: "108", es: "108", de: "108", nl: "108" },
          { en: "88", es: "88", de: "88", nl: "88" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do we call the imaginary line around the middle of Earth?",
          es: "¿Cómo llamamos a la línea imaginaria alrededor del medio de la Tierra?",
          de: "Wie nennen wir die imaginäre Linie um die Mitte der Erde?",
          nl: "Hoe noemen we de denkbeeldige lijn rond het midden van de aarde?"
        },
        options: [
          { en: "Equator", es: "Ecuador", de: "Äquator", nl: "Evenaar" },
          { en: "Prime Meridian", es: "Primer Meridiano", de: "Nullmeridian", nl: "Nulmeridiaan" },
          { en: "Tropic of Cancer", es: "Trópico de Cáncer", de: "Wendekreis des Krebses", nl: "Kreeftskeerkring" },
          { en: "Arctic Circle", es: "Círculo Ártico", de: "Polarkreis", nl: "Poolcirkel" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What season is November preparing to transition into?",
          es: "¿A qué estación se prepara para hacer la transición noviembre?",
          de: "In welche Jahreszeit bereitet sich der November vor zu wechseln?",
          nl: "Naar welk seizoen bereidt november zich voor om over te gaan?"
        },
        options: [
          { en: "Winter", es: "Invierno", de: "Winter", nl: "Winter" },
          { en: "Spring", es: "Primavera", de: "Frühling", nl: "Lente" },
          { en: "Summer", es: "Verano", de: "Sommer", nl: "Zomer" },
          { en: "Fall", es: "Otoño", de: "Herbst", nl: "Herfst" }
        ],
        correctIndex: 0
      }
    ],

    // Day 28 - November 28th
    day28: [
      {
        question: {
          en: "What do people often put on their homes to prepare for winter weather?",
          es: "¿Qué suelen poner las personas en sus casas para prepararse para el clima invernal?",
          de: "Was setzen Menschen oft an ihre Häuser, um sich auf das Winterwetter vorzubereiten?",
          nl: "Wat zetten mensen vaak op hun huizen om zich voor te bereiden op winterweer?"
        },
        options: [
          { en: "Storm windows", es: "Ventanas contra tormentas", de: "Sturmfenster", nl: "Stormramen" },
          { en: "Beach umbrellas", es: "Sombrillas de playa", de: "Sonnenschirme", nl: "Strandparasols" },
          { en: "Flower boxes", es: "Jardineras", de: "Blumenkästen", nl: "Bloembakken" },
          { en: "Swimming pools", es: "Piscinas", de: "Schwimmbecken", nl: "Zwembaden" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What instrument is used to measure atmospheric pressure?",
          es: "¿Qué instrumento se usa para medir la presión atmosférica?",
          de: "Welches Instrument wird verwendet, um den Luftdruck zu messen?",
          nl: "Welk instrument wordt gebruikt om atmosferische druk te meten?"
        },
        options: [
          { en: "Barometer", es: "Barómetro", de: "Barometer", nl: "Barometer" },
          { en: "Thermometer", es: "Termómetro", de: "Thermometer", nl: "Thermometer" },
          { en: "Anemometer", es: "Anemómetro", de: "Windmesser", nl: "Windmeter" },
          { en: "Hygrometer", es: "Higrómetro", de: "Hygrometer", nl: "Hygrometer" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 156 ÷ 13?",
          es: "¿Cuánto es 156 ÷ 13?",
          de: "Was ist 156 ÷ 13?",
          nl: "Hoeveel is 156 ÷ 13?"
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
          en: "Which gas makes up most of Earth's atmosphere?",
          es: "¿Qué gas compone la mayor parte de la atmósfera de la Tierra?",
          de: "Welches Gas macht den größten Teil der Erdatmosphäre aus?",
          nl: "Welk gas vormt het grootste deel van de atmosfeer van de aarde?"
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
          en: "What do many gardeners do in late November to protect plants?",
          es: "¿Qué hacen muchos jardineros a finales de noviembre para proteger las plantas?",
          de: "Was machen viele Gärtner Ende November zum Schutz der Pflanzen?",
          nl: "Wat doen veel tuiniers eind november om planten te beschermen?"
        },
        options: [
          { en: "Cover them for winter", es: "Las cubren para el invierno", de: "Decken sie für den Winter ab", nl: "Bedekken ze voor de winter" },
          { en: "Water them more", es: "Las riegan más", de: "Gießen sie mehr", nl: "Bewateren ze meer" },
          { en: "Move them outside", es: "Las mueven afuera", de: "Bewegen sie nach draußen", nl: "Verplaatsen ze naar buiten" },
          { en: "Plant new seeds", es: "Plantan nuevas semillas", de: "Pflanzen neue Samen", nl: "Planten nieuwe zaden" }
        ],
        correctIndex: 0
      }
    ],

    // Day 29 - November 29th
    day29: [
      {
        question: {
          en: "What do many people start planning for as November ends?",
          es: "¿Qué empiezan a planificar muchas personas cuando termina noviembre?",
          de: "Was planen viele Menschen, wenn der November zu Ende geht?",
          nl: "Wat beginnen veel mensen te plannen als november eindigt?"
        },
        options: [
          { en: "Holiday celebrations", es: "Celebraciones navideñas", de: "Feiertagsfeiern", nl: "Feestdagvieringen" },
          { en: "Beach vacations", es: "Vacaciones en la playa", de: "Strandurlaub", nl: "Strandvakanties" },
          { en: "Gardening projects", es: "Proyectos de jardinería", de: "Gartenprojekte", nl: "Tuinprojecten" },
          { en: "Swimming lessons", es: "Clases de natación", de: "Schwimmstunden", nl: "Zwemlessen" }
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
          { en: "Earth", es: "Tierra", de: "Erde", nl: "Aarde" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 23 + 47?",
          es: "¿Cuánto es 23 + 47?",
          de: "Was ist 23 + 47?",
          nl: "Hoeveel is 23 + 47?"
        },
        options: [
          { en: "70", es: "70", de: "70", nl: "70" },
          { en: "69", es: "69", de: "69", nl: "69" },
          { en: "71", es: "71", de: "71", nl: "71" },
          { en: "68", es: "68", de: "68", nl: "68" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the process by which caterpillars become butterflies?",
          es: "¿Cuál es el proceso por el cual las orugas se convierten en mariposas?",
          de: "Wie heißt der Prozess, bei dem Raupen zu Schmetterlingen werden?",
          nl: "Wat is het proces waarbij rupsen vlinders worden?"
        },
        options: [
          { en: "Metamorphosis", es: "Metamorfosis", de: "Metamorphose", nl: "Metamorfose" },
          { en: "Evolution", es: "Evolución", de: "Evolution", nl: "Evolutie" },
          { en: "Hibernation", es: "Hibernación", de: "Winterschlaf", nl: "Winterslaap" },
          { en: "Migration", es: "Migración", de: "Migration", nl: "Migratie" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What important attitude should we carry into December from November's lessons?",
          es: "¿Qué actitud importante deberíamos llevar a diciembre de las lecciones de noviembre?",
          de: "Welche wichtige Einstellung sollten wir aus den November-Lektionen in den Dezember mitnehmen?",
          nl: "Welke belangrijke houding zouden we mee moeten nemen naar december uit november's lessen?"
        },
        options: [
          { en: "Gratitude and thankfulness", es: "Gratitud y agradecimiento", de: "Dankbarkeit und Dankbarkeit", nl: "Dankbaarheid en waardering" },
          { en: "Complaining and worry", es: "Quejas y preocupación", de: "Beschweren und Sorgen", nl: "Klagen en zorgen" },
          { en: "Selfishness", es: "Egoísmo", de: "Egoismus", nl: "Egoïsme" },
          { en: "Impatience", es: "Impaciencia", de: "Ungeduld", nl: "Ongeduld" }
        ],
        correctIndex: 0
      }
    ],

    // Day 30 - November 30th (Final day - no comma)
    day30: [
      {
        question: {
          en: "What month comes after November?",
          es: "¿Qué mes viene después de noviembre?",
          de: "Welcher Monat kommt nach November?",
          nl: "Welke maand komt na november?"
        },
        options: [
          { en: "December", es: "Diciembre", de: "Dezember", nl: "December" },
          { en: "October", es: "Octubre", de: "Oktober", nl: "Oktober" },
          { en: "January", es: "Enero", de: "Januar", nl: "Januari" },
          { en: "September", es: "Septiembre", de: "September", nl: "September" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What happens to the daylight hours by the end of November?",
          es: "¿Qué pasa con las horas de luz solar al final de noviembre?",
          de: "Was passiert mit den Tageslichtstunden Ende November?",
          nl: "Wat gebeurt er met de daglichturen tegen het einde van november?"
        },
        options: [
          { en: "They are much shorter", es: "Son mucho más cortas", de: "Sie sind viel kürzer", nl: "Ze zijn veel korter" },
          { en: "They are much longer", es: "Son mucho más largas", de: "Sie sind viel länger", nl: "Ze zijn veel langer" },
          { en: "They stay the same", es: "Siguen igual", de: "Sie bleiben gleich", nl: "Ze blijven hetzelfde" },
          { en: "There is no daylight", es: "No hay luz del día", de: "Es gibt kein Tageslicht", nl: "Er is geen daglicht" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 15 × 8?",
          es: "¿Cuánto es 15 × 8?",
          de: "Was ist 15 × 8?",
          nl: "Hoeveel is 15 × 8?"
        },
        options: [
          { en: "120", es: "120", de: "120", nl: "120" },
          { en: "110", es: "110", de: "110", nl: "110" },
          { en: "130", es: "130", de: "130", nl: "130" },
          { en: "115", es: "115", de: "115", nl: "115" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the hardest known natural substance on Earth?",
          es: "¿Cuál es la sustancia natural más dura conocida en la Tierra?",
          de: "Was ist die härteste bekannte natürliche Substanz auf der Erde?",
          nl: "Wat is de hardste bekende natuurlijke stof op aarde?"
        },
        options: [
          { en: "Diamond", es: "Diamante", de: "Diamant", nl: "Diamant" },
          { en: "Quartz", es: "Cuarzo", de: "Quarz", nl: "Kwarts" },
          { en: "Steel", es: "Acero", de: "Stahl", nl: "Staal" },
          { en: "Granite", es: "Granito", de: "Granit", nl: "Graniet" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the most important lesson November teaches us?",
          es: "¿Cuál es la lección más importante que nos enseña noviembre?",
          de: "Was ist die wichtigste Lektion, die uns der November lehrt?",
          nl: "Wat is de belangrijkste les die november ons leert?"
        },
        options: [
          { en: "To be grateful for what we have", es: "Estar agradecidos por lo que tenemos", de: "Dankbar für das zu sein, was wir haben", nl: "Dankbaar zijn voor wat we hebben" },
          { en: "To complain about problems", es: "Quejarnos de los problemas", de: "Über Probleme zu klagen", nl: "Klagen over problemen" },
          { en: "To focus on what we lack", es: "Enfocarnos en lo que nos falta", de: "Uns auf das zu konzentrieren, was uns fehlt", nl: "Focussen op wat ons ontbreekt" },
          { en: "To ignore our blessings", es: "Ignorar nuestras bendiciones", de: "Unsere Segnungen zu ignorieren", nl: "Onze zegeningen negeren" }
        ],
        correctIndex: 0
      }
    ]
  };

  // Export November challenges
  if (typeof window.addMonthChallenges === 'function') {
    window.addMonthChallenges('november', novemberChallenges);
  }

})();