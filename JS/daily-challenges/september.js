// September Daily Challenges - 30 days × 5 questions each = 150 total questions
(function() {
  
  const septemberChallenges = {
    name: {
      en: "September Daily Challenges",
      es: "Desafíos Diarios de Septiembre", 
      de: "September Tägliche Herausforderungen",
      nl: "September Dagelijkse Uitdagingen"
    },
    
    // Day 1 - September 1st: Back to School
    day1: [
      {
        question: {
          en: "What season begins in September?",
          es: "¿Qué estación comienza en septiembre?",
          de: "Welche Jahreszeit beginnt im September?",
          nl: "Welk seizoen begint in september?"
        },
        options: [
          { en: "Fall", es: "Otoño", de: "Herbst", nl: "Herfst" },
          { en: "Summer", es: "Verano", de: "Sommer", nl: "Zomer" },
          { en: "Winter", es: "Invierno", de: "Winter", nl: "Winter" },
          { en: "Spring", es: "Primavera", de: "Frühling", nl: "Lente" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do many kids do in September?",
          es: "¿Qué hacen muchos niños en septiembre?",
          de: "Was machen viele Kinder im September?",
          nl: "Wat doen veel kinderen in september?"
        },
        options: [
          { en: "Go back to school", es: "Volver a la escuela", de: "Zurück zur Schule gehen", nl: "Terug naar school gaan" },
          { en: "Go swimming", es: "Ir a nadar", de: "Schwimmen gehen", nl: "Gaan zwemmen" },
          { en: "Build snowmen", es: "Hacer muñecos de nieve", de: "Schneemänner bauen", nl: "Sneeuwpoppen maken" },
          { en: "Plant flowers", es: "Plantar flores", de: "Blumen pflanzen", nl: "Bloemen planten" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many days are in September?",
          es: "¿Cuántos días tiene septiembre?",
          de: "Wie viele Tage hat der September?",
          nl: "Hoeveel dagen heeft september?"
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
          en: "What birthstone belongs to September?",
          es: "¿Qué piedra de nacimiento pertenece a septiembre?",
          de: "Welcher Geburtsstein gehört zum September?",
          nl: "Welke geboortesteen hoort bij september?"
        },
        options: [
          { en: "Sapphire", es: "Zafiro", de: "Saphir", nl: "Saffier" },
          { en: "Ruby", es: "Rubí", de: "Rubin", nl: "Robijn" },
          { en: "Diamond", es: "Diamante", de: "Diamant", nl: "Diamant" },
          { en: "Pearl", es: "Perla", de: "Perle", nl: "Parel" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What starts to happen to leaves in September?",
          es: "¿Qué empieza a pasar con las hojas en septiembre?",
          de: "Was passiert mit den Blättern im September?",
          nl: "Wat begint er te gebeuren met bladeren in september?"
        },
        options: [
          { en: "They change colors", es: "Cambian de colores", de: "Sie verfärben sich", nl: "Ze veranderen van kleur" },
          { en: "They grow bigger", es: "Crecen más", de: "Sie werden größer", nl: "Ze worden groter" },
          { en: "They turn white", es: "Se vuelven blancas", de: "Sie werden weiß", nl: "Ze worden wit" },
          { en: "They glow at night", es: "Brillan en la noche", de: "Sie leuchten nachts", nl: "Ze gloeien 's nachts" }
        ],
        correctIndex: 0
      }
    ],

    // Day 2 - September 2nd
    day2: [
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
          en: "How many sides does an octagon have?",
          es: "¿Cuántos lados tiene un octágono?",
          de: "Wie viele Seiten hat ein Oktagon?",
          nl: "Hoeveel zijden heeft een achthoek?"
        },
        options: [
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "7", es: "7", de: "7", nl: "7" }
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
          en: "Which school subject involves studying numbers?",
          es: "¿Qué materia escolar involucra el estudio de números?",
          de: "Welches Schulfach beschäftigt sich mit Zahlen?",
          nl: "Welk schoolvak houdt zich bezig met getallen?"
        },
        options: [
          { en: "Mathematics", es: "Matemáticas", de: "Mathematik", nl: "Wiskunde" },
          { en: "History", es: "Historia", de: "Geschichte", nl: "Geschiedenis" },
          { en: "Art", es: "Arte", de: "Kunst", nl: "Kunst" },
          { en: "Music", es: "Música", de: "Musik", nl: "Muziek" }
        ],
        correctIndex: 0
      }
    ],

    // Day 3 - September 3rd
    day3: [
      {
        question: {
          en: "What is the smallest continent?",
          es: "¿Cuál es el continente más pequeño?",
          de: "Was ist der kleinste Kontinent?",
          nl: "Wat is het kleinste continent?"
        },
        options: [
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" },
          { en: "Europe", es: "Europa", de: "Europa", nl: "Europa" },
          { en: "Antarctica", es: "Antártida", de: "Antarktis", nl: "Antarctica" },
          { en: "South America", es: "Sudamérica", de: "Südamerika", nl: "Zuid-Amerika" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do you call the sound a cat makes?",
          es: "¿Cómo se llama el sonido que hace un gato?",
          de: "Wie nennt man das Geräusch, das eine Katze macht?",
          nl: "Hoe noem je het geluid dat een kat maakt?"
        },
        options: [
          { en: "Meow", es: "Miau", de: "Miau", nl: "Miauw" },
          { en: "Bark", es: "Ladrido", de: "Bellen", nl: "Blaffen" },
          { en: "Moo", es: "Mu", de: "Muh", nl: "Boe" },
          { en: "Roar", es: "Rugido", de: "Brüllen", nl: "Brullen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which planet is known for its rings?",
          es: "¿Qué planeta es conocido por sus anillos?",
          de: "Welcher Planet ist für seine Ringe bekannt?",
          nl: "Welke planeet staat bekend om zijn ringen?"
        },
        options: [
          { en: "Saturn", es: "Saturno", de: "Saturn", nl: "Saturnus" },
          { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" },
          { en: "Venus", es: "Venus", de: "Venus", nl: "Venus" },
          { en: "Mercury", es: "Mercurio", de: "Merkur", nl: "Mercurius" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What color do you get when you mix red and yellow?",
          es: "¿Qué color obtienes cuando mezclas rojo y amarillo?",
          de: "Welche Farbe erhält man, wenn man Rot und Gelb mischt?",
          nl: "Welke kleur krijg je als je rood en geel mengt?"
        },
        options: [
          { en: "Orange", es: "Naranja", de: "Orange", nl: "Oranje" },
          { en: "Purple", es: "Morado", de: "Lila", nl: "Paars" },
          { en: "Green", es: "Verde", de: "Grün", nl: "Groen" },
          { en: "Blue", es: "Azul", de: "Blau", nl: "Blauw" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do we use to measure temperature?",
          es: "¿Qué usamos para medir la temperatura?",
          de: "Womit messen wir die Temperatur?",
          nl: "Wat gebruiken we om temperatuur te meten?"
        },
        options: [
          { en: "Thermometer", es: "Termómetro", de: "Thermometer", nl: "Thermometer" },
          { en: "Scale", es: "Balanza", de: "Waage", nl: "Weegschaal" },
          { en: "Ruler", es: "Regla", de: "Lineal", nl: "Liniaal" },
          { en: "Clock", es: "Reloj", de: "Uhr", nl: "Klok" }
        ],
        correctIndex: 0
      }
    ],

    // Day 4 - September 4th
    day4: [
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
          { en: "Naples", es: "Nápoles", de: "Neapel", nl: "Napels" },
          { en: "Florence", es: "Florencia", de: "Florenz", nl: "Florence" }
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
          en: "What do leaves need to make food?",
          es: "¿Qué necesitan las hojas para hacer comida?",
          de: "Was brauchen Blätter, um Nahrung zu produzieren?",
          nl: "Wat hebben bladeren nodig om voedsel te maken?"
        },
        options: [
          { en: "Sunlight", es: "Luz solar", de: "Sonnenlicht", nl: "Zonlicht" },
          { en: "Darkness", es: "Oscuridad", de: "Dunkelheit", nl: "Duisternis" },
          { en: "Snow", es: "Nieve", de: "Schnee", nl: "Sneeuw" },
          { en: "Wind", es: "Viento", de: "Wind", nl: "Wind" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which animal is known as man's best friend?",
          es: "¿Qué animal es conocido como el mejor amigo del hombre?",
          de: "Welches Tier ist als der beste Freund des Menschen bekannt?",
          nl: "Welk dier staat bekend als de beste vriend van de mens?"
        },
        options: [
          { en: "Dog", es: "Perro", de: "Hund", nl: "Hond" },
          { en: "Cat", es: "Gato", de: "Katze", nl: "Kat" },
          { en: "Horse", es: "Caballo", de: "Pferd", nl: "Paard" },
          { en: "Bird", es: "Pájaro", de: "Vogel", nl: "Vogel" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What school supply do you write with?",
          es: "¿Con qué suministro escolar escribes?",
          de: "Mit welchem Schulbedarf schreibst du?",
          nl: "Met welk schoolbenodigdheden schrijf je?"
        },
        options: [
          { en: "Pencil", es: "Lápiz", de: "Bleistift", nl: "Potlood" },
          { en: "Eraser", es: "Borrador", de: "Radiergummi", nl: "Gum" },
          { en: "Ruler", es: "Regla", de: "Lineal", nl: "Liniaal" },
          { en: "Scissors", es: "Tijeras", de: "Schere", nl: "Schaar" }
        ],
        correctIndex: 0
      }
    ],

    // Day 5 - September 5th
    day5: [
      {
        question: {
          en: "What is 5 + 3?",
          es: "¿Cuánto es 5 + 3?",
          de: "Was ist 5 + 3?",
          nl: "Hoeveel is 5 + 3?"
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
          en: "Which fruit is typically harvested in autumn?",
          es: "¿Qué fruta se cosecha típicamente en otoño?",
          de: "Welche Frucht wird typischerweise im Herbst geerntet?",
          nl: "Welk fruit wordt meestal in de herfst geoogst?"
        },
        options: [
          { en: "Apple", es: "Manzana", de: "Apfel", nl: "Appel" },
          { en: "Strawberry", es: "Fresa", de: "Erdbeere", nl: "Aardbei" },
          { en: "Watermelon", es: "Sandía", de: "Wassermelone", nl: "Watermeloen" },
          { en: "Cherry", es: "Cereza", de: "Kirsche", nl: "Kers" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the largest land animal?",
          es: "¿Cuál es el animal terrestre más grande?",
          de: "Was ist das größte Landtier?",
          nl: "Wat is het grootste landdier?"
        },
        options: [
          { en: "Elephant", es: "Elefante", de: "Elefant", nl: "Olifant" },
          { en: "Giraffe", es: "Jirafa", de: "Giraffe", nl: "Giraf" },
          { en: "Hippo", es: "Hipopótamo", de: "Flusspferd", nl: "Nijlpaard" },
          { en: "Rhino", es: "Rinoceronte", de: "Nashorn", nl: "Neushoorn" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do we call water that falls from clouds?",
          es: "¿Cómo llamamos al agua que cae de las nubes?",
          de: "Wie nennen wir Wasser, das aus Wolken fällt?",
          nl: "Hoe noemen we water dat uit wolken valt?"
        },
        options: [
          { en: "Rain", es: "Lluvia", de: "Regen", nl: "Regen" },
          { en: "Steam", es: "Vapor", de: "Dampf", nl: "Stoom" },
          { en: "Ice", es: "Hielo", de: "Eis", nl: "IJs" },
          { en: "Snow", es: "Nieve", de: "Schnee", nl: "Sneeuw" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which subject teaches about the past?",
          es: "¿Qué materia enseña sobre el pasado?",
          de: "Welches Fach lehrt über die Vergangenheit?",
          nl: "Welk vak leert over het verleden?"
        },
        options: [
          { en: "History", es: "Historia", de: "Geschichte", nl: "Geschiedenis" },
          { en: "Science", es: "Ciencia", de: "Wissenschaft", nl: "Wetenschap" },
          { en: "Art", es: "Arte", de: "Kunst", nl: "Kunst" },
          { en: "Music", es: "Música", de: "Musik", nl: "Muziek" }
        ],
        correctIndex: 0
      }
    ],

    // Day 6 - September 6th
    day6: [
      {
        question: {
          en: "What is the main gas in Earth's atmosphere?",
          es: "¿Cuál es el gas principal en la atmósfera de la Tierra?",
          de: "Was ist das Hauptgas in der Erdatmosphäre?",
          nl: "Wat is het hoofdgas in de atmosfeer van de aarde?"
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
          en: "Which instrument has black and white keys?",
          es: "¿Qué instrumento tiene teclas blancas y negras?",
          de: "Welches Instrument hat schwarze und weiße Tasten?",
          nl: "Welk instrument heeft zwarte en witte toetsen?"
        },
        options: [
          { en: "Piano", es: "Piano", de: "Klavier", nl: "Piano" },
          { en: "Guitar", es: "Guitarra", de: "Gitarre", nl: "Gitaar" },
          { en: "Drum", es: "Tambor", de: "Trommel", nl: "Trommel" },
          { en: "Flute", es: "Flauta", de: "Flöte", nl: "Fluit" }
        ],
        correctIndex: 0
      },
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
          en: "How many months have 31 days?",
          es: "¿Cuántos meses tienen 31 días?",
          de: "Wie viele Monate haben 31 Tage?",
          nl: "Hoeveel maanden hebben 31 dagen?"
        },
        options: [
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "5", es: "5", de: "5", nl: "5" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do we use to erase pencil marks?",
          es: "¿Qué usamos para borrar las marcas de lápiz?",
          de: "Was verwenden wir, um Bleistiftmarkierungen zu löschen?",
          nl: "Wat gebruiken we om potloodstrepen uit te gummen?"
        },
        options: [
          { en: "Eraser", es: "Borrador", de: "Radiergummi", nl: "Gum" },
          { en: "Pencil", es: "Lápiz", de: "Bleistift", nl: "Potlood" },
          { en: "Ruler", es: "Regla", de: "Lineal", nl: "Liniaal" },
          { en: "Scissors", es: "Tijeras", de: "Schere", nl: "Schaar" }
        ],
        correctIndex: 0
      }
    ],

    // Day 7 - September 7th
    day7: [
      {
        question: {
          en: "Which vegetable is commonly harvested in fall?",
          es: "¿Qué verdura se cosecha comúnmente en otoño?",
          de: "Welches Gemüse wird im Herbst häufig geerntet?",
          nl: "Welke groente wordt gewoonlijk in de herfst geoogst?"
        },
        options: [
          { en: "Pumpkin", es: "Calabaza", de: "Kürbis", nl: "Pompoen" },
          { en: "Tomato", es: "Tomate", de: "Tomate", nl: "Tomaat" },
          { en: "Cucumber", es: "Pepino", de: "Gurke", nl: "Komkommer" },
          { en: "Lettuce", es: "Lechuga", de: "Salat", nl: "Sla" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 12 - 7?",
          es: "¿Cuánto es 12 - 7?",
          de: "Was ist 12 - 7?",
          nl: "Hoeveel is 12 - 7?"
        },
        options: [
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "7", es: "7", de: "7", nl: "7" }
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
          en: "What is the capital of Germany?",
          es: "¿Cuál es la capital de Alemania?",
          de: "Was ist die Hauptstadt von Deutschland?",
          nl: "Wat is de hoofdstad van Duitsland?"
        },
        options: [
          { en: "Berlin", es: "Berlín", de: "Berlin", nl: "Berlijn" },
          { en: "Munich", es: "Múnich", de: "München", nl: "München" },
          { en: "Hamburg", es: "Hamburgo", de: "Hamburg", nl: "Hamburg" },
          { en: "Cologne", es: "Colonia", de: "Köln", nl: "Keulen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "In which subject do you learn about living things?",
          es: "¿En qué materia aprendes sobre los seres vivos?",
          de: "In welchem Fach lernt man über Lebewesen?",
          nl: "In welk vak leer je over levende wezens?"
        },
        options: [
          { en: "Biology", es: "Biología", de: "Biologie", nl: "Biologie" },
          { en: "Physics", es: "Física", de: "Physik", nl: "Natuurkunde" },
          { en: "Chemistry", es: "Química", de: "Chemie", nl: "Scheikunde" },
          { en: "Geography", es: "Geografía", de: "Geographie", nl: "Aardrijkskunde" }
        ],
        correctIndex: 0
      }
    ],

    // Day 8 - September 8th
    day8: [
      {
        question: {
          en: "What do bears do in winter?",
          es: "¿Qué hacen los osos en invierno?",
          de: "Was machen Bären im Winter?",
          nl: "Wat doen beren in de winter?"
        },
        options: [
          { en: "Hibernate", es: "Hibernar", de: "Winterschlaf halten", nl: "Winterslaap houden" },
          { en: "Swim", es: "Nadar", de: "Schwimmen", nl: "Zwemmen" },
          { en: "Fly", es: "Volar", de: "Fliegen", nl: "Vliegen" },
          { en: "Dance", es: "Bailar", de: "Tanzen", nl: "Dansen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which ancient civilization built the pyramids?",
          es: "¿Qué civilización antigua construyó las pirámides?",
          de: "Welche alte Zivilisation baute die Pyramiden?",
          nl: "Welke oude beschaving bouwde de piramides?"
        },
        options: [
          { en: "Egyptians", es: "Egipcios", de: "Ägypter", nl: "Egyptenaren" },
          { en: "Romans", es: "Romanos", de: "Römer", nl: "Romeinen" },
          { en: "Greeks", es: "Griegos", de: "Griechen", nl: "Grieken" },
          { en: "Chinese", es: "Chinos", de: "Chinesen", nl: "Chinezen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is H2O commonly known as?",
          es: "¿Cómo se conoce comúnmente el H2O?",
          de: "Wie ist H2O allgemein bekannt?",
          nl: "Hoe staat H2O algemeen bekend?"
        },
        options: [
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Air", es: "Aire", de: "Luft", nl: "Lucht" },
          { en: "Fire", es: "Fuego", de: "Feuer", nl: "Vuur" },
          { en: "Sand", es: "Arena", de: "Sand", nl: "Zand" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which tool helps you draw straight lines?",
          es: "¿Qué herramienta te ayuda a dibujar líneas rectas?",
          de: "Welches Werkzeug hilft dir, gerade Linien zu zeichnen?",
          nl: "Welk gereedschap helpt je rechte lijnen te tekenen?"
        },
        options: [
          { en: "Ruler", es: "Regla", de: "Lineal", nl: "Liniaal" },
          { en: "Compass", es: "Brújula", de: "Kompass", nl: "Kompas" },
          { en: "Scissors", es: "Tijeras", de: "Schere", nl: "Schaar" },
          { en: "Glue", es: "Pegamento", de: "Kleber", nl: "Lijm" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 6 × 4?",
          es: "¿Cuánto es 6 × 4?",
          de: "Was ist 6 × 4?",
          nl: "Hoeveel is 6 × 4?"
        },
        options: [
          { en: "24", es: "24", de: "24", nl: "24" },
          { en: "20", es: "20", de: "20", nl: "20" },
          { en: "28", es: "28", de: "28", nl: "28" },
          { en: "18", es: "18", de: "18", nl: "18" }
        ],
        correctIndex: 0
      }
    ],

    // Day 9 - September 9th
    day9: [
      {
        question: {
          en: "Which tree loses its leaves in autumn?",
          es: "¿Qué árbol pierde sus hojas en otoño?",
          de: "Welcher Baum verliert im Herbst seine Blätter?",
          nl: "Welke boom verliest zijn bladeren in de herfst?"
        },
        options: [
          { en: "Oak tree", es: "Roble", de: "Eiche", nl: "Eikenboom" },
          { en: "Pine tree", es: "Pino", de: "Kiefer", nl: "Dennenboom" },
          { en: "Fir tree", es: "Abeto", de: "Tanne", nl: "Dennenboom" },
          { en: "Cedar tree", es: "Cedro", de: "Zeder", nl: "Cederboom" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the largest country in the world?",
          es: "¿Cuál es el país más grande del mundo?",
          de: "Was ist das größte Land der Welt?",
          nl: "Wat is het grootste land ter wereld?"
        },
        options: [
          { en: "Russia", es: "Rusia", de: "Russland", nl: "Rusland" },
          { en: "China", es: "China", de: "China", nl: "China" },
          { en: "USA", es: "Estados Unidos", de: "USA", nl: "Verenigde Staten" },
          { en: "Canada", es: "Canadá", de: "Kanada", nl: "Canada" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do we call a baby horse?",
          es: "¿Cómo llamamos a un caballo bebé?",
          de: "Wie nennen wir ein Pferdebaby?",
          nl: "Hoe noemen we een baby paard?"
        },
        options: [
          { en: "Foal", es: "Potro", de: "Fohlen", nl: "Veulen" },
          { en: "Calf", es: "Ternero", de: "Kalb", nl: "Kalf" },
          { en: "Lamb", es: "Cordero", de: "Lamm", nl: "Lam" },
          { en: "Puppy", es: "Cachorro", de: "Welpe", nl: "Puppy" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "In which school subject do you learn about maps?",
          es: "¿En qué materia escolar aprendes sobre mapas?",
          de: "In welchem Schulfach lernt man über Karten?",
          nl: "In welk schoolvak leer je over kaarten?"
        },
        options: [
          { en: "Geography", es: "Geografía", de: "Geographie", nl: "Aardrijkskunde" },
          { en: "Mathematics", es: "Matemáticas", de: "Mathematik", nl: "Wiskunde" },
          { en: "Literature", es: "Literatura", de: "Literatur", nl: "Literatuur" },
          { en: "Music", es: "Música", de: "Musik", nl: "Muziek" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the process by which plants make food?",
          es: "¿Cuál es el proceso por el cual las plantas hacen comida?",
          de: "Was ist der Prozess, durch den Pflanzen Nahrung herstellen?",
          nl: "Wat is het proces waardoor planten voedsel maken?"
        },
        options: [
          { en: "Photosynthesis", es: "Fotosíntesis", de: "Photosynthese", nl: "Fotosynthese" },
          { en: "Respiration", es: "Respiración", de: "Atmung", nl: "Ademhaling" },
          { en: "Digestion", es: "Digestión", de: "Verdauung", nl: "Vertering" },
          { en: "Circulation", es: "Circulación", de: "Kreislauf", nl: "Bloedsomloop" }
        ],
        correctIndex: 0
      }
    ],

    // Day 10 - September 10th
    day10: [
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
          en: "Which season comes after summer?",
          es: "¿Qué estación viene después del verano?",
          de: "Welche Jahreszeit kommt nach dem Sommer?",
          nl: "Welk seizoen komt na de zomer?"
        },
        options: [
          { en: "Autumn", es: "Otoño", de: "Herbst", nl: "Herfst" },
          { en: "Winter", es: "Invierno", de: "Winter", nl: "Winter" },
          { en: "Spring", es: "Primavera", de: "Frühling", nl: "Lente" },
          { en: "Summer", es: "Verano", de: "Sommer", nl: "Zomer" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do we call the study of stars and planets?",
          es: "¿Cómo llamamos al estudio de las estrellas y planetas?",
          de: "Wie nennen wir das Studium der Sterne und Planeten?",
          nl: "Hoe noemen we de studie van sterren en planeten?"
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
          en: "Who wrote Romeo and Juliet?",
          es: "¿Quién escribió Romeo y Julieta?",
          de: "Wer schrieb Romeo und Julia?",
          nl: "Wie schreef Romeo en Julia?"
        },
        options: [
          { en: "Shakespeare", es: "Shakespeare", de: "Shakespeare", nl: "Shakespeare" },
          { en: "Dickens", es: "Dickens", de: "Dickens", nl: "Dickens" },
          { en: "Tolkien", es: "Tolkien", de: "Tolkien", nl: "Tolkien" },
          { en: "Hemingway", es: "Hemingway", de: "Hemingway", nl: "Hemingway" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which grain is commonly used to make bread?",
          es: "¿Qué grano se usa comúnmente para hacer pan?",
          de: "Welches Getreide wird häufig zur Brotherstellung verwendet?",
          nl: "Welk graan wordt gewoonlijk gebruikt om brood te maken?"
        },
        options: [
          { en: "Wheat", es: "Trigo", de: "Weizen", nl: "Tarwe" },
          { en: "Rice", es: "Arroz", de: "Reis", nl: "Rijst" },
          { en: "Corn", es: "Maíz", de: "Mais", nl: "Maïs" },
          { en: "Oats", es: "Avena", de: "Hafer", nl: "Haver" }
        ],
        correctIndex: 0
      }
    ],

    // Day 11 - September 11th
    day11: [
      {
        question: {
          en: "What is the tallest mountain in the world?",
          es: "¿Cuál es la montaña más alta del mundo?",
          de: "Was ist der höchste Berg der Welt?",
          nl: "Wat is de hoogste berg ter wereld?"
        },
        options: [
          { en: "Mount Everest", es: "Monte Everest", de: "Mount Everest", nl: "Mount Everest" },
          { en: "Mount Fuji", es: "Monte Fuji", de: "Fuji", nl: "Mount Fuji" },
          { en: "Mount Kilimanjaro", es: "Monte Kilimanjaro", de: "Kilimandscharo", nl: "Mount Kilimanjaro" },
          { en: "Mount McKinley", es: "Monte McKinley", de: "Mount McKinley", nl: "Mount McKinley" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which tool do you use to cut paper?",
          es: "¿Qué herramienta usas para cortar papel?",
          de: "Mit welchem Werkzeug schneidest du Papier?",
          nl: "Welk gereedschap gebruik je om papier te knippen?"
        },
        options: [
          { en: "Scissors", es: "Tijeras", de: "Schere", nl: "Schaar" },
          { en: "Hammer", es: "Martillo", de: "Hammer", nl: "Hamer" },
          { en: "Spoon", es: "Cuchara", de: "Löffel", nl: "Lepel" },
          { en: "Fork", es: "Tenedor", de: "Gabel", nl: "Vork" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What happens to the length of days in autumn?",
          es: "¿Qué pasa con la duración de los días en otoño?",
          de: "Was passiert mit der Tageslänge im Herbst?",
          nl: "Wat gebeurt er met de lengte van dagen in de herfst?"
        },
        options: [
          { en: "They get shorter", es: "Se hacen más cortos", de: "Sie werden kürzer", nl: "Ze worden korter" },
          { en: "They get longer", es: "Se hacen más largos", de: "Sie werden länger", nl: "Ze worden langer" },
          { en: "They stay the same", es: "Se quedan igual", de: "Sie bleiben gleich", nl: "Ze blijven hetzelfde" },
          { en: "They disappear", es: "Desaparecen", de: "Sie verschwinden", nl: "Ze verdwijnen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 9 + 6?",
          es: "¿Cuánto es 9 + 6?",
          de: "Was ist 9 + 6?",
          nl: "Hoeveel is 9 + 6?"
        },
        options: [
          { en: "15", es: "15", de: "15", nl: "15" },
          { en: "14", es: "14", de: "14", nl: "14" },
          { en: "16", es: "16", de: "16", nl: "16" },
          { en: "13", es: "13", de: "13", nl: "13" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which war ended in 1945?",
          es: "¿Qué guerra terminó en 1945?",
          de: "Welcher Krieg endete 1945?",
          nl: "Welke oorlog eindigde in 1945?"
        },
        options: [
          { en: "World War II", es: "Segunda Guerra Mundial", de: "Zweiter Weltkrieg", nl: "Tweede Wereldoorlog" },
          { en: "World War I", es: "Primera Guerra Mundial", de: "Erster Weltkrieg", nl: "Eerste Wereldoorlog" },
          { en: "Civil War", es: "Guerra Civil", de: "Bürgerkrieg", nl: "Burgeroorlog" },
          { en: "Cold War", es: "Guerra Fría", de: "Kalter Krieg", nl: "Koude Oorlog" }
        ],
        correctIndex: 0
      }
    ],

    // Day 12 - September 12th
    day12: [
      {
        question: {
          en: "What do farmers harvest in autumn?",
          es: "¿Qué cosechan los agricultores en otoño?",
          de: "Was ernten Bauern im Herbst?",
          nl: "Wat oogsten boeren in de herfst?"
        },
        options: [
          { en: "Crops", es: "Cultivos", de: "Ernten", nl: "Gewassen" },
          { en: "Flowers", es: "Flores", de: "Blumen", nl: "Bloemen" },
          { en: "Rocks", es: "Piedras", de: "Steine", nl: "Stenen" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which organ pumps blood through your body?",
          es: "¿Qué órgano bombea sangre por tu cuerpo?",
          de: "Welches Organ pumpt Blut durch deinen Körper?",
          nl: "Welk orgaan pompt bloed door je lichaam?"
        },
        options: [
          { en: "Heart", es: "Corazón", de: "Herz", nl: "Hart" },
          { en: "Lungs", es: "Pulmones", de: "Lungen", nl: "Longen" },
          { en: "Brain", es: "Cerebro", de: "Gehirn", nl: "Brein" },
          { en: "Stomach", es: "Estómago", de: "Magen", nl: "Maag" }
        ],
        correctIndex: 0
      },
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
          { en: "Seville", es: "Sevilla", de: "Sevilla", nl: "Sevilla" },
          { en: "Valencia", es: "Valencia", de: "Valencia", nl: "Valencia" }
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
          en: "Which subject teaches you about chemicals?",
          es: "¿Qué materia te enseña sobre químicos?",
          de: "Welches Fach lehrt über Chemikalien?",
          nl: "Welk vak leert je over chemicaliën?"
        },
        options: [
          { en: "Chemistry", es: "Química", de: "Chemie", nl: "Scheikunde" },
          { en: "History", es: "Historia", de: "Geschichte", nl: "Geschiedenis" },
          { en: "Art", es: "Arte", de: "Kunst", nl: "Kunst" },
          { en: "Literature", es: "Literatura", de: "Literatur", nl: "Literatuur" }
        ],
        correctIndex: 0
      }
    ],

    // Day 13 - September 13th
    day13: [
      {
        question: {
          en: "What is 4 × 7?",
          es: "¿Cuánto es 4 × 7?",
          de: "Was ist 4 × 7?",
          nl: "Hoeveel is 4 × 7?"
        },
        options: [
          { en: "28", es: "28", de: "28", nl: "28" },
          { en: "24", es: "24", de: "24", nl: "24" },
          { en: "32", es: "32", de: "32", nl: "32" },
          { en: "21", es: "21", de: "21", nl: "21" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which bird flies south for the winter?",
          es: "¿Qué ave vuela al sur para el invierno?",
          de: "Welcher Vogel fliegt für den Winter nach Süden?",
          nl: "Welke vogel vliegt naar het zuiden voor de winter?"
        },
        options: [
          { en: "Geese", es: "Gansos", de: "Gänse", nl: "Ganzen" },
          { en: "Sparrows", es: "Gorriones", de: "Sperlinge", nl: "Mussen" },
          { en: "Owls", es: "Búhos", de: "Eulen", nl: "Uilen" },
          { en: "Eagles", es: "Águilas", de: "Adler", nl: "Adelaars" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What force keeps us on the ground?",
          es: "¿Qué fuerza nos mantiene en el suelo?",
          de: "Welche Kraft hält uns am Boden?",
          nl: "Welke kracht houdt ons op de grond?"
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
          en: "Who discovered America in 1492?",
          es: "¿Quién descubrió América en 1492?",
          de: "Wer entdeckte Amerika 1492?",
          nl: "Wie ontdekte Amerika in 1492?"
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
          en: "Which school subject involves reading stories?",
          es: "¿Qué materia escolar involucra leer historias?",
          de: "Welches Schulfach beinhaltet das Lesen von Geschichten?",
          nl: "Welk schoolvak houdt het lezen van verhalen in?"
        },
        options: [
          { en: "Literature", es: "Literatura", de: "Literatur", nl: "Literatuur" },
          { en: "Mathematics", es: "Matemáticas", de: "Mathematik", nl: "Wiskunde" },
          { en: "Physics", es: "Física", de: "Physik", nl: "Natuurkunde" },
          { en: "Chemistry", es: "Química", de: "Chemie", nl: "Scheikunde" }
        ],
        correctIndex: 0
      }
    ],

    // Day 14 - September 14th
    day14: [
      {
        question: {
          en: "What color do leaves often turn in autumn?",
          es: "¿De qué color se vuelven las hojas en otoño?",
          de: "Welche Farbe bekommen Blätter oft im Herbst?",
          nl: "Welke kleur krijgen bladeren vaak in de herfst?"
        },
        options: [
          { en: "Orange", es: "Naranja", de: "Orange", nl: "Oranje" },
          { en: "Blue", es: "Azul", de: "Blau", nl: "Blauw" },
          { en: "Purple", es: "Morado", de: "Lila", nl: "Paars" },
          { en: "Pink", es: "Rosa", de: "Rosa", nl: "Roze" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which continent is home to kangaroos?",
          es: "¿Qué continente es hogar de los canguros?",
          de: "Welcher Kontinent ist die Heimat von Kängurus?",
          nl: "Welk continent is de thuisbasis van kangoeroes?"
        },
        options: [
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" },
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" },
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" },
          { en: "Europe", es: "Europa", de: "Europa", nl: "Europa" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 20 - 8?",
          es: "¿Cuánto es 20 - 8?",
          de: "Was ist 20 - 8?",
          nl: "Hoeveel is 20 - 8?"
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
          en: "What do we call molten rock from a volcano?",
          es: "¿Cómo llamamos a la roca fundida de un volcán?",
          de: "Wie nennen wir geschmolzenes Gestein aus einem Vulkan?",
          nl: "Hoe noemen we gesmolten gesteente uit een vulkaan?"
        },
        options: [
          { en: "Lava", es: "Lava", de: "Lava", nl: "Lava" },
          { en: "Ice", es: "Hielo", de: "Eis", nl: "IJs" },
          { en: "Sand", es: "Arena", de: "Sand", nl: "Zand" },
          { en: "Clay", es: "Arcilla", de: "Lehm", nl: "Klei" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which ancient wonder was in Egypt?",
          es: "¿Qué maravilla antigua estaba en Egipto?",
          de: "Welches antike Weltwunder befand sich in Ägypten?",
          nl: "Welk oud wereldwonder bevond zich in Egypte?"
        },
        options: [
          { en: "Great Pyramid", es: "Gran Pirámide", de: "Große Pyramide", nl: "Grote Piramide" },
          { en: "Colosseum", es: "Coliseo", de: "Kolosseum", nl: "Colosseum" },
          { en: "Stonehenge", es: "Stonehenge", de: "Stonehenge", nl: "Stonehenge" },
          { en: "Great Wall", es: "Gran Muralla", de: "Große Mauer", nl: "Chinese Muur" }
        ],
        correctIndex: 0
      }
    ],

    // Day 15 - September 15th
    day15: [
      {
        question: {
          en: "What do we call a group of books?",
          es: "¿Cómo llamamos a un grupo de libros?",
          de: "Wie nennen wir eine Gruppe von Büchern?",
          nl: "Hoe noemen we een groep boeken?"
        },
        options: [
          { en: "Library", es: "Biblioteca", de: "Bibliothek", nl: "Bibliotheek" },
          { en: "School", es: "Escuela", de: "Schule", nl: "School" },
          { en: "Store", es: "Tienda", de: "Laden", nl: "Winkel" },
          { en: "House", es: "Casa", de: "Haus", nl: "Huis" }
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
      },
      {
        question: {
          en: "What happens to animals that hibernate?",
          es: "¿Qué pasa con los animales que hibernan?",
          de: "Was passiert mit Tieren, die Winterschlaf halten?",
          nl: "Wat gebeurt er met dieren die een winterslaap houden?"
        },
        options: [
          { en: "They sleep through winter", es: "Duermen durante el invierno", de: "Sie schlafen den Winter über", nl: "Ze slapen de winter door" },
          { en: "They fly away", es: "Se van volando", de: "Sie fliegen weg", nl: "Ze vliegen weg" },
          { en: "They change color", es: "Cambian de color", de: "Sie wechseln die Farbe", nl: "Ze veranderen van kleur" },
          { en: "They grow bigger", es: "Crecen más", de: "Sie werden größer", nl: "Ze worden groter" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 8 × 3?",
          es: "¿Cuánto es 8 × 3?",
          de: "Was ist 8 × 3?",
          nl: "Hoeveel is 8 × 3?"
        },
        options: [
          { en: "24", es: "24", de: "24", nl: "24" },
          { en: "21", es: "21", de: "21", nl: "21" },
          { en: "27", es: "27", de: "27", nl: "27" },
          { en: "18", es: "18", de: "18", nl: "18" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which subject teaches about the human body?",
          es: "¿Qué materia enseña sobre el cuerpo humano?",
          de: "Welches Fach lehrt über den menschlichen Körper?",
          nl: "Welk vak leert over het menselijk lichaam?"
        },
        options: [
          { en: "Biology", es: "Biología", de: "Biologie", nl: "Biologie" },
          { en: "Geography", es: "Geografía", de: "Geographie", nl: "Aardrijkskunde" },
          { en: "Mathematics", es: "Matemáticas", de: "Mathematik", nl: "Wiskunde" },
          { en: "Art", es: "Arte", de: "Kunst", nl: "Kunst" }
        ],
        correctIndex: 0
      }
    ],

    // Day 16 - September 16th
    day16: [
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
          { en: "Thames River", es: "Río Támesis", de: "Themse", nl: "Theems" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which fruit is harvested from trees in orchards during fall?",
          es: "¿Qué fruta se cosecha de los árboles en huertos durante el otoño?",
          de: "Welche Frucht wird im Herbst in Obstgärten von Bäumen geerntet?",
          nl: "Welk fruit wordt in de herfst geoogst van bomen in boomgaarden?"
        },
        options: [
          { en: "Apples", es: "Manzanas", de: "Äpfel", nl: "Appels" },
          { en: "Bananas", es: "Plátanos", de: "Bananen", nl: "Bananen" },
          { en: "Pineapples", es: "Piñas", de: "Ananas", nl: "Ananassen" },
          { en: "Mangoes", es: "Mangos", de: "Mangos", nl: "Mango's" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 18 ÷ 6?",
          es: "¿Cuánto es 18 ÷ 6?",
          de: "Was ist 18 ÷ 6?",
          nl: "Hoeveel is 18 ÷ 6?"
        },
        options: [
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "6", es: "6", de: "6", nl: "6" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do we call the center of an atom?",
          es: "¿Cómo llamamos al centro de un átomo?",
          de: "Wie nennen wir das Zentrum eines Atoms?",
          nl: "Hoe noemen we het centrum van een atoom?"
        },
        options: [
          { en: "Nucleus", es: "Núcleo", de: "Kern", nl: "Kern" },
          { en: "Electron", es: "Electrón", de: "Elektron", nl: "Elektron" },
          { en: "Proton", es: "Protón", de: "Proton", nl: "Proton" },
          { en: "Neutron", es: "Neutrón", de: "Neutron", nl: "Neutron" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "In which century did the Renaissance begin?",
          es: "¿En qué siglo comenzó el Renacimiento?",
          de: "In welchem Jahrhundert begann die Renaissance?",
          nl: "In welke eeuw begon de Renaissance?"
        },
        options: [
          { en: "14th century", es: "Siglo XIV", de: "14. Jahrhundert", nl: "14e eeuw" },
          { en: "12th century", es: "Siglo XII", de: "12. Jahrhundert", nl: "12e eeuw" },
          { en: "16th century", es: "Siglo XVI", de: "16. Jahrhundert", nl: "16e eeuw" },
          { en: "18th century", es: "Siglo XVIII", de: "18. Jahrhundert", nl: "18e eeuw" }
        ],
        correctIndex: 0
      }
    ],

    // Day 17 - September 17th
    day17: [
      {
        question: {
          en: "What do farmers use to cut grain crops?",
          es: "¿Qué usan los agricultores para cortar cultivos de granos?",
          de: "Was verwenden Bauern zum Schneiden von Getreide?",
          nl: "Wat gebruiken boeren om graangewassen te maaien?"
        },
        options: [
          { en: "Combine harvester", es: "Cosechadora", de: "Mähdrescher", nl: "Maaidorser" },
          { en: "Scissors", es: "Tijeras", de: "Schere", nl: "Schaar" },
          { en: "Spoon", es: "Cuchara", de: "Löffel", nl: "Lepel" },
          { en: "Hammer", es: "Martillo", de: "Hammer", nl: "Hamer" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which school subject involves learning about countries?",
          es: "¿Qué materia escolar involucra aprender sobre países?",
          de: "Welches Schulfach beinhaltet das Lernen über Länder?",
          nl: "Welk schoolvak houdt het leren over landen in?"
        },
        options: [
          { en: "Geography", es: "Geografía", de: "Geographie", nl: "Aardrijkskunde" },
          { en: "Mathematics", es: "Matemáticas", de: "Mathematik", nl: "Wiskunde" },
          { en: "Art", es: "Arte", de: "Kunst", nl: "Kunst" },
          { en: "Music", es: "Música", de: "Musik", nl: "Muziek" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 7 + 8?",
          es: "¿Cuánto es 7 + 8?",
          de: "Was ist 7 + 8?",
          nl: "Hoeveel is 7 + 8?"
        },
        options: [
          { en: "15", es: "15", de: "15", nl: "15" },
          { en: "14", es: "14", de: "14", nl: "14" },
          { en: "16", es: "16", de: "16", nl: "16" },
          { en: "13", es: "13", de: "13", nl: "13" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do we call animals that eat only plants?",
          es: "¿Cómo llamamos a los animales que solo comen plantas?",
          de: "Wie nennen wir Tiere, die nur Pflanzen fressen?",
          nl: "Hoe noemen we dieren die alleen planten eten?"
        },
        options: [
          { en: "Herbivores", es: "Herbívoros", de: "Pflanzenfresser", nl: "Planteneters" },
          { en: "Carnivores", es: "Carnívoros", de: "Fleischfresser", nl: "Vleeseters" },
          { en: "Omnivores", es: "Omnívoros", de: "Allesfresser", nl: "Alleseters" },
          { en: "Predators", es: "Depredadores", de: "Raubtiere", nl: "Roofdieren" }
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
          { en: "Michelangelo", es: "Miguel Ángel", de: "Michelangelo", nl: "Michelangelo" },
          { en: "Picasso", es: "Picasso", de: "Picasso", nl: "Picasso" },
          { en: "Van Gogh", es: "Van Gogh", de: "Van Gogh", nl: "Van Gogh" }
        ],
        correctIndex: 0
      }
    ],

    // Day 18 - September 18th
    day18: [
      {
        question: {
          en: "What do leaves do for a tree?",
          es: "¿Qué hacen las hojas por un árbol?",
          de: "Was tun Blätter für einen Baum?",
          nl: "Wat doen bladeren voor een boom?"
        },
        options: [
          { en: "Make food", es: "Hacen comida", de: "Nahrung herstellen", nl: "Voedsel maken" },
          { en: "Make noise", es: "Hacen ruido", de: "Lärm machen", nl: "Geluid maken" },
          { en: "Dig holes", es: "Cavan hoyos", de: "Löcher graben", nl: "Gaten graven" },
          { en: "Swim", es: "Nadar", de: "Schwimmen", nl: "Zwemmen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the capital of the United Kingdom?",
          es: "¿Cuál es la capital del Reino Unido?",
          de: "Was ist die Hauptstadt des Vereinigten Königreichs?",
          nl: "Wat is de hoofdstad van het Verenigd Koninkrijk?"
        },
        options: [
          { en: "London", es: "Londres", de: "London", nl: "Londen" },
          { en: "Manchester", es: "Manchester", de: "Manchester", nl: "Manchester" },
          { en: "Edinburgh", es: "Edimburgo", de: "Edinburgh", nl: "Edinburgh" },
          { en: "Liverpool", es: "Liverpool", de: "Liverpool", nl: "Liverpool" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 5 × 9?",
          es: "¿Cuánto es 5 × 9?",
          de: "Was ist 5 × 9?",
          nl: "Hoeveel is 5 × 9?"
        },
        options: [
          { en: "45", es: "45", de: "45", nl: "45" },
          { en: "40", es: "40", de: "40", nl: "40" },
          { en: "50", es: "50", de: "50", nl: "50" },
          { en: "35", es: "35", de: "35", nl: "35" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do we call the study of earthquakes?",
          es: "¿Cómo llamamos al estudio de los terremotos?",
          de: "Wie nennen wir das Studium von Erdbeben?",
          nl: "Hoe noemen we de studie van aardbevingen?"
        },
        options: [
          { en: "Seismology", es: "Sismología", de: "Seismologie", nl: "Seismologie" },
          { en: "Geology", es: "Geología", de: "Geologie", nl: "Geologie" },
          { en: "Biology", es: "Biología", de: "Biologie", nl: "Biologie" },
          { en: "Astronomy", es: "Astronomía", de: "Astronomie", nl: "Astronomie" }
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
          { en: "Egyptian Empire", es: "Imperio Egipcio", de: "Ägyptisches Reich", nl: "Egyptische Rijk" },
          { en: "Persian Empire", es: "Imperio Persa", de: "Persisches Reich", nl: "Perzische Rijk" }
        ],
        correctIndex: 0
      }
    ],

    // Day 19 - September 19th
    day19: [
      {
        question: {
          en: "What do we call the first meal of the day?",
          es: "¿Cómo llamamos a la primera comida del día?",
          de: "Wie nennen wir die erste Mahlzeit des Tages?",
          nl: "Hoe noemen we de eerste maaltijd van de dag?"
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
          en: "Which season has the autumn equinox?",
          es: "¿Qué estación tiene el equinoccio de otoño?",
          de: "Welche Jahreszeit hat die Herbst-Tagundnachtgleiche?",
          nl: "Welk seizoen heeft de herfstevening?"
        },
        options: [
          { en: "Fall", es: "Otoño", de: "Herbst", nl: "Herfst" },
          { en: "Spring", es: "Primavera", de: "Frühling", nl: "Lente" },
          { en: "Summer", es: "Verano", de: "Sommer", nl: "Zomer" },
          { en: "Winter", es: "Invierno", de: "Winter", nl: "Winter" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 25 - 9?",
          es: "¿Cuánto es 25 - 9?",
          de: "Was ist 25 - 9?",
          nl: "Hoeveel is 25 - 9?"
        },
        options: [
          { en: "16", es: "16", de: "16", nl: "16" },
          { en: "15", es: "15", de: "15", nl: "15" },
          { en: "17", es: "17", de: "17", nl: "17" },
          { en: "14", es: "14", de: "14", nl: "14" }
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
          en: "Which subject teaches about forces and motion?",
          es: "¿Qué materia enseña sobre fuerzas y movimiento?",
          de: "Welches Fach lehrt über Kräfte und Bewegung?",
          nl: "Welk vak leert over krachten en beweging?"
        },
        options: [
          { en: "Physics", es: "Física", de: "Physik", nl: "Natuurkunde" },
          { en: "Chemistry", es: "Química", de: "Chemie", nl: "Scheikunde" },
          { en: "Biology", es: "Biología", de: "Biologie", nl: "Biologie" },
          { en: "History", es: "Historia", de: "Geschichte", nl: "Geschiedenis" }
        ],
        correctIndex: 0
      }
    ],

    // Day 20 - September 20th
    day20: [
      {
        question: {
          en: "What do we call a place where apples grow?",
          es: "¿Cómo llamamos a un lugar donde crecen manzanas?",
          de: "Wie nennen wir einen Ort, wo Äpfel wachsen?",
          nl: "Hoe noemen we een plek waar appels groeien?"
        },
        options: [
          { en: "Orchard", es: "Huerto", de: "Obstgarten", nl: "Boomgaard" },
          { en: "Forest", es: "Bosque", de: "Wald", nl: "Bos" },
          { en: "Desert", es: "Desierto", de: "Wüste", nl: "Woestijn" },
          { en: "Ocean", es: "Océano", de: "Ozean", nl: "Oceaan" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which planet is largest in our solar system?",
          es: "¿Qué planeta es el más grande de nuestro sistema solar?",
          de: "Welcher Planet ist der größte in unserem Sonnensystem?",
          nl: "Welke planeet is de grootste in ons zonnestelsel?"
        },
        options: [
          { en: "Jupiter", es: "Júpiter", de: "Jupiter", nl: "Jupiter" },
          { en: "Saturn", es: "Saturno", de: "Saturn", nl: "Saturnus" },
          { en: "Neptune", es: "Neptuno", de: "Neptun", nl: "Neptunus" },
          { en: "Uranus", es: "Urano", de: "Uranus", nl: "Uranus" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 6 × 6?",
          es: "¿Cuánto es 6 × 6?",
          de: "Was ist 6 × 6?",
          nl: "Hoeveel is 6 × 6?"
        },
        options: [
          { en: "36", es: "36", de: "36", nl: "36" },
          { en: "30", es: "30", de: "30", nl: "30" },
          { en: "42", es: "42", de: "42", nl: "42" },
          { en: "24", es: "24", de: "24", nl: "24" }
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
          en: "Who wrote the play Hamlet?",
          es: "¿Quién escribió la obra Hamlet?",
          de: "Wer schrieb das Theaterstück Hamlet?",
          nl: "Wie schreef het toneelstuk Hamlet?"
        },
        options: [
          { en: "Shakespeare", es: "Shakespeare", de: "Shakespeare", nl: "Shakespeare" },
          { en: "Dickens", es: "Dickens", de: "Dickens", nl: "Dickens" },
          { en: "Chaucer", es: "Chaucer", de: "Chaucer", nl: "Chaucer" },
          { en: "Milton", es: "Milton", de: "Milton", nl: "Milton" }
        ],
        correctIndex: 0
      }
    ],

    // Day 21 - September 21st
    day21: [
      {
        question: {
          en: "What do we call animals that are active at night?",
          es: "¿Cómo llamamos a los animales que están activos en la noche?",
          de: "Wie nennen wir Tiere, die nachts aktiv sind?",
          nl: "Hoe noemen we dieren die 's nachts actief zijn?"
        },
        options: [
          { en: "Nocturnal", es: "Nocturnos", de: "Nachtaktiv", nl: "Nachtdieren" },
          { en: "Diurnal", es: "Diurnos", de: "Tagaktiv", nl: "Dagdieren" },
          { en: "Hibernating", es: "Hibernando", de: "Winterschlaf haltend", nl: "Winterslaper" },
          { en: "Migrating", es: "Migrando", de: "Wandernd", nl: "Trekkend" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 32 ÷ 8?",
          es: "¿Cuánto es 32 ÷ 8?",
          de: "Was ist 32 ÷ 8?",
          nl: "Hoeveel is 32 ÷ 8?"
        },
        options: [
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "6", es: "6", de: "6", nl: "6" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which day marks the first day of autumn in the Northern Hemisphere?",
          es: "¿Qué día marca el primer día de otoño en el Hemisferio Norte?",
          de: "Welcher Tag markiert den ersten Tag des Herbstes auf der Nordhalbkugel?",
          nl: "Welke dag markeert de eerste dag van de herfst op het noordelijk halfrond?"
        },
        options: [
          { en: "September 21st", es: "21 de septiembre", de: "21. September", nl: "21 september" },
          { en: "September 1st", es: "1 de septiembre", de: "1. September", nl: "1 september" },
          { en: "October 1st", es: "1 de octubre", de: "1. Oktober", nl: "1 oktober" },
          { en: "August 21st", es: "21 de agosto", de: "21. August", nl: "21 augustus" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do we call the boundary between two countries?",
          es: "¿Cómo llamamos al límite entre dos países?",
          de: "Wie nennen wir die Grenze zwischen zwei Ländern?",
          nl: "Hoe noemen we de grens tussen twee landen?"
        },
        options: [
          { en: "Border", es: "Frontera", de: "Grenze", nl: "Grens" },
          { en: "River", es: "Río", de: "Fluss", nl: "Rivier" },
          { en: "Mountain", es: "Montaña", de: "Berg", nl: "Berg" },
          { en: "Ocean", es: "Océano", de: "Ozean", nl: "Oceaan" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which ancient city was destroyed by a volcano in 79 AD?",
          es: "¿Qué ciudad antigua fue destruida por un volcán en el 79 d.C.?",
          de: "Welche antike Stadt wurde 79 n.Chr. von einem Vulkan zerstört?",
          nl: "Welke oude stad werd in 79 na Christus vernietigd door een vulkaan?"
        },
        options: [
          { en: "Pompeii", es: "Pompeya", de: "Pompeji", nl: "Pompeii" },
          { en: "Rome", es: "Roma", de: "Rom", nl: "Rome" },
          { en: "Athens", es: "Atenas", de: "Athen", nl: "Athene" },
          { en: "Troy", es: "Troya", de: "Troja", nl: "Troje" }
        ],
        correctIndex: 0
      }
    ],

    // Day 22 - September 22nd
    day22: [
      {
        question: {
          en: "What do we call the outer layer of a tree?",
          es: "¿Cómo llamamos a la capa exterior de un árbol?",
          de: "Wie nennen wir die äußere Schicht eines Baumes?",
          nl: "Hoe noemen we de buitenlaag van een boom?"
        },
        options: [
          { en: "Bark", es: "Corteza", de: "Rinde", nl: "Schors" },
          { en: "Leaves", es: "Hojas", de: "Blätter", nl: "Bladeren" },
          { en: "Roots", es: "Raíces", de: "Wurzeln", nl: "Wortels" },
          { en: "Trunk", es: "Tronco", de: "Stamm", nl: "Stam" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 11 + 14?",
          es: "¿Cuánto es 11 + 14?",
          de: "Was ist 11 + 14?",
          nl: "Hoeveel is 11 + 14?"
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
          en: "Which instrument measures atmospheric pressure?",
          es: "¿Qué instrumento mide la presión atmosférica?",
          de: "Welches Instrument misst den Luftdruck?",
          nl: "Welk instrument meet de luchtdruk?"
        },
        options: [
          { en: "Barometer", es: "Barómetro", de: "Barometer", nl: "Barometer" },
          { en: "Thermometer", es: "Termómetro", de: "Thermometer", nl: "Thermometer" },
          { en: "Compass", es: "Brújula", de: "Kompass", nl: "Kompas" },
          { en: "Scale", es: "Balanza", de: "Waage", nl: "Weegschaal" }
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
          en: "In which subject do you learn about paintings and sculptures?",
          es: "¿En qué materia aprendes sobre pinturas y esculturas?",
          de: "In welchem Fach lernt man über Gemälde und Skulpturen?",
          nl: "In welk vak leer je over schilderijen en beeldhouwwerken?"
        },
        options: [
          { en: "Art", es: "Arte", de: "Kunst", nl: "Kunst" },
          { en: "Science", es: "Ciencia", de: "Wissenschaft", nl: "Wetenschap" },
          { en: "Mathematics", es: "Matemáticas", de: "Mathematik", nl: "Wiskunde" },
          { en: "Geography", es: "Geografía", de: "Geographie", nl: "Aardrijkskunde" }
        ],
        correctIndex: 0
      }
    ],

    // Day 23 - September 23rd
    day23: [
      {
        question: {
          en: "What do we call the time of year when farmers gather crops?",
          es: "¿Cómo llamamos a la época del año cuando los agricultores recogen cultivos?",
          de: "Wie nennen wir die Zeit des Jahres, in der Bauern Ernten einbringen?",
          nl: "Hoe noemen we de tijd van het jaar waarin boeren gewassen oogsten?"
        },
        options: [
          { en: "Harvest time", es: "Tiempo de cosecha", de: "Erntezeit", nl: "Oogsttijd" },
          { en: "Planting time", es: "Tiempo de siembra", de: "Pflanzzeit", nl: "Planttijd" },
          { en: "Winter time", es: "Tiempo de invierno", de: "Winterzeit", nl: "Wintertijd" },
          { en: "Summer time", es: "Tiempo de verano", de: "Sommerzeit", nl: "Zomertijd" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 9 × 4?",
          es: "¿Cuánto es 9 × 4?",
          de: "Was ist 9 × 4?",
          nl: "Hoeveel is 9 × 4?"
        },
        options: [
          { en: "36", es: "36", de: "36", nl: "36" },
          { en: "32", es: "32", de: "32", nl: "32" },
          { en: "40", es: "40", de: "40", nl: "40" },
          { en: "28", es: "28", de: "28", nl: "28" }
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
          { en: "Prime Meridian", es: "Meridiano Principal", de: "Nullmeridian", nl: "Nulmeridiaan" },
          { en: "Tropic", es: "Trópico", de: "Wendekreis", nl: "Keerkring" },
          { en: "Pole", es: "Polo", de: "Pol", nl: "Pool" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which gas makes up most of the air we breathe?",
          es: "¿Qué gas constituye la mayor parte del aire que respiramos?",
          de: "Welches Gas macht den größten Teil der Luft aus, die wir atmen?",
          nl: "Welk gas vormt het grootste deel van de lucht die we inademen?"
        },
        options: [
          { en: "Nitrogen", es: "Nitrógeno", de: "Stickstoff", nl: "Stikstof" },
          { en: "Oxygen", es: "Oxígeno", de: "Sauerstoff", nl: "Zuurstof" },
          { en: "Carbon dioxide", es: "Dióxido de carbono", de: "Kohlendioxid", nl: "Koolstofdioxide" },
          { en: "Helium", es: "Helio", de: "Helium", nl: "Helium" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which civilization built Machu Picchu?",
          es: "¿Qué civilización construyó Machu Picchu?",
          de: "Welche Zivilisation baute Machu Picchu?",
          nl: "Welke beschaving bouwde Machu Picchu?"
        },
        options: [
          { en: "Incas", es: "Incas", de: "Inka", nl: "Inca's" },
          { en: "Mayans", es: "Mayas", de: "Maya", nl: "Maya's" },
          { en: "Aztecs", es: "Aztecas", de: "Azteken", nl: "Azteken" },
          { en: "Egyptians", es: "Egipcios", de: "Ägypter", nl: "Egyptenaren" }
        ],
        correctIndex: 0
      }
    ],

    // Day 24 - September 24th
    day24: [
      {
        question: {
          en: "What do we call animals that eat both plants and meat?",
          es: "¿Cómo llamamos a los animales que comen plantas y carne?",
          de: "Wie nennen wir Tiere, die sowohl Pflanzen als auch Fleisch fressen?",
          nl: "Hoe noemen we dieren die zowel planten als vlees eten?"
        },
        options: [
          { en: "Omnivores", es: "Omnívoros", de: "Allesfresser", nl: "Alleseters" },
          { en: "Herbivores", es: "Herbívoros", de: "Pflanzenfresser", nl: "Planteneters" },
          { en: "Carnivores", es: "Carnívoros", de: "Fleischfresser", nl: "Vleeseters" },
          { en: "Insectivores", es: "Insectívoros", de: "Insektenfresser", nl: "Insecteneters" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 30 - 12?",
          es: "¿Cuánto es 30 - 12?",
          de: "Was ist 30 - 12?",
          nl: "Hoeveel is 30 - 12?"
        },
        options: [
          { en: "18", es: "18", de: "18", nl: "18" },
          { en: "17", es: "17", de: "17", nl: "17" },
          { en: "19", es: "19", de: "19", nl: "19" },
          { en: "16", es: "16", de: "16", nl: "16" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which tool do farmers use to prepare soil for planting?",
          es: "¿Qué herramienta usan los agricultores para preparar el suelo para plantar?",
          de: "Welches Werkzeug verwenden Bauern zur Bodenvorbereitung für die Aussaat?",
          nl: "Welk gereedschap gebruiken boeren om de grond voor te bereiden voor het planten?"
        },
        options: [
          { en: "Plow", es: "Arado", de: "Pflug", nl: "Ploeg" },
          { en: "Hammer", es: "Martillo", de: "Hammer", nl: "Hamer" },
          { en: "Scissors", es: "Tijeras", de: "Schere", nl: "Schaar" },
          { en: "Ruler", es: "Regla", de: "Lineal", nl: "Liniaal" }
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
          { en: "Brisbane", es: "Brisbane", de: "Brisbane", nl: "Brisbane" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which subject teaches you about music notes and rhythm?",
          es: "¿Qué materia te enseña sobre notas musicales y ritmo?",
          de: "Welches Fach lehrt über Musiknoten und Rhythmus?",
          nl: "Welk vak leert je over muzieknoten en ritme?"
        },
        options: [
          { en: "Music", es: "Música", de: "Musik", nl: "Muziek" },
          { en: "Mathematics", es: "Matemáticas", de: "Mathematik", nl: "Wiskunde" },
          { en: "Science", es: "Ciencia", de: "Wissenschaft", nl: "Wetenschap" },
          { en: "Geography", es: "Geografía", de: "Geographie", nl: "Aardrijkskunde" }
        ],
        correctIndex: 0
      }
    ],

    // Day 25 - September 25th
    day25: [
      {
        question: {
          en: "What do we call water vapor in the sky?",
          es: "¿Cómo llamamos al vapor de agua en el cielo?",
          de: "Wie nennen wir Wasserdampf am Himmel?",
          nl: "Hoe noemen we waterdamp in de lucht?"
        },
        options: [
          { en: "Clouds", es: "Nubes", de: "Wolken", nl: "Wolken" },
          { en: "Stars", es: "Estrellas", de: "Sterne", nl: "Sterren" },
          { en: "Sun", es: "Sol", de: "Sonne", nl: "Zon" },
          { en: "Moon", es: "Luna", de: "Mond", nl: "Maan" }
        ],
        correctIndex: 0
      },
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
          { en: "58", es: "58", de: "58", nl: "58" },
          { en: "48", es: "48", de: "48", nl: "48" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which season comes before autumn?",
          es: "¿Qué estación viene antes del otoño?",
          de: "Welche Jahreszeit kommt vor dem Herbst?",
          nl: "Welk seizoen komt voor de herfst?"
        },
        options: [
          { en: "Summer", es: "Verano", de: "Sommer", nl: "Zomer" },
          { en: "Spring", es: "Primavera", de: "Frühling", nl: "Lente" },
          { en: "Winter", es: "Invierno", de: "Winter", nl: "Winter" },
          { en: "Fall", es: "Otoño", de: "Herbst", nl: "Herfst" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do we call the study of the Earth's surface?",
          es: "¿Cómo llamamos al estudio de la superficie de la Tierra?",
          de: "Wie nennen wir das Studium der Erdoberfläche?",
          nl: "Hoe noemen we de studie van het aardoppervlak?"
        },
        options: [
          { en: "Geography", es: "Geografía", de: "Geographie", nl: "Aardrijkskunde" },
          { en: "Biology", es: "Biología", de: "Biologie", nl: "Biologie" },
          { en: "Chemistry", es: "Química", de: "Chemie", nl: "Scheikunde" },
          { en: "Physics", es: "Física", de: "Physik", nl: "Natuurkunde" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which famous wall was built in China?",
          es: "¿Qué famosa muralla fue construida en China?",
          de: "Welche berühmte Mauer wurde in China gebaut?",
          nl: "Welke beroemde muur werd gebouwd in China?"
        },
        options: [
          { en: "Great Wall of China", es: "Gran Muralla China", de: "Chinesische Mauer", nl: "Chinese Muur" },
          { en: "Berlin Wall", es: "Muro de Berlín", de: "Berliner Mauer", nl: "Berlijnse Muur" },
          { en: "Hadrian's Wall", es: "Muro de Adriano", de: "Hadrianswall", nl: "Hadrianus Muur" },
          { en: "Western Wall", es: "Muro Occidental", de: "Klagemauer", nl: "Klaagmuur" }
        ],
        correctIndex: 0
      }
    ],

    // Day 26 - September 26th
    day26: [
      {
        question: {
          en: "What do we call a baby cow?",
          es: "¿Cómo llamamos a un bebé de vaca?",
          de: "Wie nennen wir ein Kuhbaby?",
          nl: "Hoe noemen we een baby koe?"
        },
        options: [
          { en: "Calf", es: "Ternero", de: "Kalb", nl: "Kalf" },
          { en: "Foal", es: "Potro", de: "Fohlen", nl: "Veulen" },
          { en: "Lamb", es: "Cordero", de: "Lamm", nl: "Lam" },
          { en: "Puppy", es: "Cachorro", de: "Welpe", nl: "Puppy" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 42 ÷ 7?",
          es: "¿Cuánto es 42 ÷ 7?",
          de: "Was ist 42 ÷ 7?",
          nl: "Hoeveel is 42 ÷ 7?"
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
          en: "Which crop is commonly harvested to make flour?",
          es: "¿Qué cultivo se cosecha comúnmente para hacer harina?",
          de: "Welche Pflanze wird häufig zur Mehlherstellung geerntet?",
          nl: "Welk gewas wordt gewoonlijk geoogst om meel te maken?"
        },
        options: [
          { en: "Wheat", es: "Trigo", de: "Weizen", nl: "Tarwe" },
          { en: "Apple", es: "Manzana", de: "Apfel", nl: "Appel" },
          { en: "Carrot", es: "Zanahoria", de: "Karotte", nl: "Wortel" },
          { en: "Lettuce", es: "Lechuga", de: "Salat", nl: "Sla" }
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
          en: "Who was the first person to walk on the moon?",
          es: "¿Quién fue la primera persona en caminar en la luna?",
          de: "Wer war die erste Person, die auf dem Mond gelaufen ist?",
          nl: "Wie was de eerste persoon die op de maan liep?"
        },
        options: [
          { en: "Neil Armstrong", es: "Neil Armstrong", de: "Neil Armstrong", nl: "Neil Armstrong" },
          { en: "Buzz Aldrin", es: "Buzz Aldrin", de: "Buzz Aldrin", nl: "Buzz Aldrin" },
          { en: "John Glenn", es: "John Glenn", de: "John Glenn", nl: "John Glenn" },
          { en: "Yuri Gagarin", es: "Yuri Gagarin", de: "Juri Gagarin", nl: "Yuri Gagarin" }
        ],
        correctIndex: 0
      }
    ],

    // Day 27 - September 27th
    day27: [
      {
        question: {
          en: "What do we call a group of wolves?",
          es: "¿Cómo llamamos a un grupo de lobos?",
          de: "Wie nennen wir eine Gruppe von Wölfen?",
          nl: "Hoe noemen we een groep wolven?"
        },
        options: [
          { en: "Pack", es: "Manada", de: "Rudel", nl: "Roedel" },
          { en: "Herd", es: "Rebaño", de: "Herde", nl: "Kudde" },
          { en: "Flock", es: "Bandada", de: "Schwarm", nl: "Zwerm" },
          { en: "School", es: "Cardumen", de: "Schwarm", nl: "School" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 13 + 17?",
          es: "¿Cuánto es 13 + 17?",
          de: "Was ist 13 + 17?",
          nl: "Hoeveel is 13 + 17?"
        },
        options: [
          { en: "30", es: "30", de: "30", nl: "30" },
          { en: "29", es: "29", de: "29", nl: "29" },
          { en: "31", es: "31", de: "31", nl: "31" },
          { en: "28", es: "28", de: "28", nl: "28" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do migrating birds do in autumn?",
          es: "¿Qué hacen las aves migratorias en otoño?",
          de: "Was machen Zugvögel im Herbst?",
          nl: "Wat doen trekvogels in de herfst?"
        },
        options: [
          { en: "Fly to warmer places", es: "Vuelan a lugares más cálidos", de: "Fliegen zu wärmeren Orten", nl: "Vliegen naar warmere plekken" },
          { en: "Build nests", es: "Construyen nidos", de: "Bauen Nester", nl: "Bouwen nesten" },
          { en: "Change color", es: "Cambian de color", de: "Wechseln die Farbe", nl: "Veranderen van kleur" },
          { en: "Sleep all day", es: "Duermen todo el día", de: "Schlafen den ganzen Tag", nl: "Slapen de hele dag" }
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
          { en: "Arctic Ocean", es: "Océano Ártico", de: "Arktischer Ozean", nl: "Arctische Oceaan" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which period came before the Middle Ages?",
          es: "¿Qué período vino antes de la Edad Media?",
          de: "Welche Epoche kam vor dem Mittelalter?",
          nl: "Welke periode kwam voor de Middeleeuwen?"
        },
        options: [
          { en: "Ancient times", es: "Tiempos antiguos", de: "Antike", nl: "Oudheid" },
          { en: "Renaissance", es: "Renacimiento", de: "Renaissance", nl: "Renaissance" },
          { en: "Industrial Age", es: "Era Industrial", de: "Industriezeitalter", nl: "Industriële Revolutie" },
          { en: "Modern times", es: "Tiempos modernos", de: "Moderne Zeit", nl: "Moderne tijd" }
        ],
        correctIndex: 0
      }
    ],

    // Day 28 - September 28th
    day28: [
      {
        question: {
          en: "What do we call the process of water changing to ice?",
          es: "¿Cómo llamamos al proceso de cambio del agua a hielo?",
          de: "Wie nennen wir den Prozess, bei dem Wasser zu Eis wird?",
          nl: "Hoe noemen we het proces van water dat verandert in ijs?"
        },
        options: [
          { en: "Freezing", es: "Congelación", de: "Gefrieren", nl: "Vriezen" },
          { en: "Melting", es: "Derretimiento", de: "Schmelzen", nl: "Smelten" },
          { en: "Boiling", es: "Hervir", de: "Kochen", nl: "Koken" },
          { en: "Evaporation", es: "Evaporación", de: "Verdunstung", nl: "Verdamping" }
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
          { en: "58", es: "58", de: "58", nl: "58" },
          { en: "49", es: "49", de: "49", nl: "49" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which vegetable is orange and grows underground?",
          es: "¿Qué verdura es naranja y crece bajo tierra?",
          de: "Welches Gemüse ist orange und wächst unterirdisch?",
          nl: "Welke groente is oranje en groeit ondergronds?"
        },
        options: [
          { en: "Carrot", es: "Zanahoria", de: "Karotte", nl: "Wortel" },
          { en: "Pumpkin", es: "Calabaza", de: "Kürbis", nl: "Pompoen" },
          { en: "Orange", es: "Naranja", de: "Orange", nl: "Sinaasappel" },
          { en: "Tomato", es: "Tomate", de: "Tomate", nl: "Tomaat" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do we call a tool used to see distant objects?",
          es: "¿Cómo llamamos a una herramienta usada para ver objetos distantes?",
          de: "Wie nennen wir ein Werkzeug zum Sehen entfernter Objekte?",
          nl: "Hoe noemen we een instrument om verre objecten te zien?"
        },
        options: [
          { en: "Telescope", es: "Telescopio", de: "Teleskop", nl: "Telescoop" },
          { en: "Microscope", es: "Microscopio", de: "Mikroskop", nl: "Microscoop" },
          { en: "Compass", es: "Brújula", de: "Kompass", nl: "Kompas" },
          { en: "Calculator", es: "Calculadora", de: "Taschenrechner", nl: "Rekenmachine" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which subject teaches you how to write essays?",
          es: "¿Qué materia te enseña cómo escribir ensayos?",
          de: "Welches Fach lehrt dir, wie man Aufsätze schreibt?",
          nl: "Welk vak leert je hoe je opstellen schrijft?"
        },
        options: [
          { en: "Language arts", es: "Artes del lenguaje", de: "Sprachkunst", nl: "Taalonderwijs" },
          { en: "Mathematics", es: "Matemáticas", de: "Mathematik", nl: "Wiskunde" },
          { en: "Science", es: "Ciencia", de: "Wissenschaft", nl: "Wetenschap" },
          { en: "Physical education", es: "Educación física", de: "Sport", nl: "Lichamelijke opvoeding" }
        ],
        correctIndex: 0
      }
    ],

    // Day 29 - September 29th
    day29: [
      {
        question: {
          en: "What happens to most trees in deciduous forests during autumn?",
          es: "¿Qué pasa con la mayoría de árboles en bosques caducifolios durante el otoño?",
          de: "Was passiert mit den meisten Bäumen in Laubwäldern während des Herbstes?",
          nl: "Wat gebeurt er met de meeste bomen in loofbossen tijdens de herfst?"
        },
        options: [
          { en: "They lose their leaves", es: "Pierden sus hojas", de: "Sie verlieren ihre Blätter", nl: "Ze verliezen hun bladeren" },
          { en: "They grow taller", es: "Crecen más alto", de: "Sie wachsen höher", nl: "Ze groeien hoger" },
          { en: "They change into flowers", es: "Se convierten en flores", de: "Sie verwandeln sich in Blumen", nl: "Ze veranderen in bloemen" },
          { en: "They turn purple", es: "Se vuelven púrpura", de: "Sie werden lila", nl: "Ze worden paars" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 45 ÷ 9?",
          es: "¿Cuánto es 45 ÷ 9?",
          de: "Was ist 45 ÷ 9?",
          nl: "Hoeveel is 45 ÷ 9?"
        },
        options: [
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "7", es: "7", de: "7", nl: "7" }
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
          en: "Which river flows through London?",
          es: "¿Qué río fluye por Londres?",
          de: "Welcher Fluss fließt durch London?",
          nl: "Welke rivier stroomt door Londen?"
        },
        options: [
          { en: "Thames", es: "Támesis", de: "Themse", nl: "Theems" },
          { en: "Seine", es: "Sena", de: "Seine", nl: "Seine" },
          { en: "Rhine", es: "Rin", de: "Rhein", nl: "Rijn" },
          { en: "Danube", es: "Danubio", de: "Donau", nl: "Donau" }
        ],
        correctIndex: 0
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
          { en: "Benjamin Franklin", es: "Benjamin Franklin", de: "Benjamin Franklin", nl: "Benjamin Franklin" }
        ],
        correctIndex: 0
      }
    ],

    // Day 30 - September 30th
    day30: [
      {
        question: {
          en: "What is the last day of September?",
          es: "¿Cuál es el último día de septiembre?",
          de: "Was ist der letzte Tag im September?",
          nl: "Wat is de laatste dag van september?"
        },
        options: [
          { en: "September 30th", es: "30 de septiembre", de: "30. September", nl: "30 september" },
          { en: "September 31st", es: "31 de septiembre", de: "31. September", nl: "31 september" },
          { en: "September 29th", es: "29 de septiembre", de: "29. September", nl: "29 september" },
          { en: "October 1st", es: "1 de octubre", de: "1. Oktober", nl: "1 oktober" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 10 × 10?",
          es: "¿Cuánto es 10 × 10?",
          de: "Was ist 10 × 10?",
          nl: "Hoeveel is 10 × 10?"
        },
        options: [
          { en: "100", es: "100", de: "100", nl: "100" },
          { en: "90", es: "90", de: "90", nl: "90" },
          { en: "110", es: "110", de: "110", nl: "110" },
          { en: "200", es: "200", de: "200", nl: "200" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do farmers do with crops after harvest?",
          es: "¿Qué hacen los agricultores con los cultivos después de la cosecha?",
          de: "Was machen Bauern nach der Ernte mit den Feldfrüchten?",
          nl: "Wat doen boeren met gewassen na de oogst?"
        },
        options: [
          { en: "Store or sell them", es: "Los almacenan o venden", de: "Lagern oder verkaufen sie", nl: "Opslaan of verkopen" },
          { en: "Plant them again", es: "Los plantan otra vez", de: "Pflanzen sie wieder", nl: "Planten ze opnieuw" },
          { en: "Throw them away", es: "Los tiran", de: "Werfen sie weg", nl: "Gooien ze weg" },
          { en: "Leave them in the field", es: "Los dejan en el campo", de: "Lassen sie auf dem Feld", nl: "Laten ze in het veld" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which month comes after September?",
          es: "¿Qué mes viene después de septiembre?",
          de: "Welcher Monat kommt nach September?",
          nl: "Welke maand komt na september?"
        },
        options: [
          { en: "October", es: "Octubre", de: "Oktober", nl: "Oktober" },
          { en: "August", es: "Agosto", de: "August", nl: "Augustus" },
          { en: "November", es: "Noviembre", de: "November", nl: "November" },
          { en: "December", es: "Diciembre", de: "Dezember", nl: "December" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do we call the study of past events?",
          es: "¿Cómo llamamos al estudio de eventos pasados?",
          de: "Wie nennen wir das Studium vergangener Ereignisse?",
          nl: "Hoe noemen we de studie van gebeurtenissen uit het verleden?"
        },
        options: [
          { en: "History", es: "Historia", de: "Geschichte", nl: "Geschiedenis" },
          { en: "Geography", es: "Geografía", de: "Geographie", nl: "Aardrijkskunde" },
          { en: "Biology", es: "Biología", de: "Biologie", nl: "Biologie" },
          { en: "Chemistry", es: "Química", de: "Chemie", nl: "Scheikunde" }
        ],
        correctIndex: 0
      }
    ]
  };

  // Export September challenges
  if (typeof window.addMonthChallenges === 'function') {
    window.addMonthChallenges('september', septemberChallenges);
  }

})();