// July Daily Challenges - 31 days × 5 questions each = 155 total questions
(function() {
  
  const julyChallenges = {
    name: {
      en: "July Daily Challenges",
      es: "Desafíos Diarios de Julio", 
      de: "Juli Tägliche Herausforderungen",
      nl: "Juli Dagelijkse Uitdagingen"
    },
    
    // Day 1 - July 1st: Middle of Summer
    day1: [
      {
        question: {
          en: "What is the hottest month in many places?",
          es: "¿Cuál es el mes más caluroso en muchos lugares?",
          de: "Was ist der heißeste Monat an vielen Orten?",
          nl: "Wat is de heetste maand op veel plaatsen?"
        },
        options: [
          { en: "July", es: "Julio", de: "Juli", nl: "Juli" },
          { en: "January", es: "Enero", de: "Januar", nl: "Januari" },
          { en: "March", es: "Marzo", de: "März", nl: "Maart" },
          { en: "October", es: "Octubre", de: "Oktober", nl: "Oktober" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do many families do in July?",
          es: "¿Qué hacen muchas familias en julio?",
          de: "Was machen viele Familien im Juli?",
          nl: "Wat doen veel families in juli?"
        },
        options: [
          { en: "Go on vacation", es: "Van de vacaciones", de: "In den Urlaub fahren", nl: "Op vakantie gaan" },
          { en: "Stay inside", es: "Quedarse adentro", de: "Drinnen bleiben", nl: "Binnen blijven" },
          { en: "Plant flowers", es: "Plantar flores", de: "Blumen pflanzen", nl: "Bloemen planten" },
          { en: "Build snowmen", es: "Hacer muñecos de nieve", de: "Schneemänner bauen", nl: "Sneeuwpoppen maken" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What birthstone belongs to July?",
          es: "¿Qué piedra de nacimiento pertenece a julio?",
          de: "Welcher Geburtsstein gehört zum Juli?",
          nl: "Welke geboortesteen hoort bij juli?"
        },
        options: [
          { en: "Ruby", es: "Rubí", de: "Rubin", nl: "Robijn" },
          { en: "Diamond", es: "Diamante", de: "Diamant", nl: "Diamant" },
          { en: "Pearl", es: "Perla", de: "Perle", nl: "Parel" },
          { en: "Emerald", es: "Esmeralda", de: "Smaragd", nl: "Smaragd" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many days are in July?",
          es: "¿Cuántos días tiene julio?",
          de: "Wie viele Tage hat der Juli?",
          nl: "Hoeveel dagen heeft juli?"
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
          en: "What holiday is celebrated on July 4th in America?",
          es: "¿Qué feriado se celebra el 4 de julio en América?",
          de: "Welcher Feiertag wird am 4. Juli in Amerika gefeiert?",
          nl: "Welke feestdag wordt op 4 juli gevierd in Amerika?"
        },
        options: [
          { en: "Independence Day", es: "Día de la Independencia", de: "Unabhängigkeitstag", nl: "Onafhankelijkheidsdag" },
          { en: "Christmas", es: "Navidad", de: "Weihnachten", nl: "Kerstmis" },
          { en: "Halloween", es: "Halloween", de: "Halloween", nl: "Halloween" },
          { en: "New Year", es: "Año Nuevo", de: "Neujahr", nl: "Nieuwjaar" }
        ],
        correctIndex: 0
      }
    ],

    // Day 2 - July 2nd: Summer Activities  
    day2: [
      {
        question: {
          en: "What is a popular summer activity at the beach?",
          es: "¿Cuál es una actividad popular de verano en la playa?",
          de: "Was ist eine beliebte Sommeraktivität am Strand?",
          nl: "Wat is een populaire zomeractiviteit op het strand?"
        },
        options: [
          { en: "Swimming", es: "Nadar", de: "Schwimmen", nl: "Zwemmen" },
          { en: "Ice skating", es: "Patinar sobre hielo", de: "Schlittschuhlaufen", nl: "Schaatsen" },
          { en: "Skiing", es: "Esquiar", de: "Skifahren", nl: "Skiën" },
          { en: "Making snow angels", es: "Hacer ángeles de nieve", de: "Schneeengel machen", nl: "Sneeuwengelen maken" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do people eat to cool down in summer?",
          es: "¿Qué comen las personas para refrescarse en verano?",
          de: "Was essen Menschen, um sich im Sommer abzukühlen?",
          nl: "Wat eten mensen om af te koelen in de zomer?"
        },
        options: [
          { en: "Ice cream", es: "Helado", de: "Eis", nl: "IJs" },
          { en: "Hot soup", es: "Sopa caliente", de: "Heiße Suppe", nl: "Hete soep" },
          { en: "Hot coffee", es: "Café caliente", de: "Heißer Kaffee", nl: "Hete koffie" },
          { en: "Warm bread", es: "Pan caliente", de: "Warmes Brot", nl: "Warm brood" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do people wear on sunny days?",
          es: "¿Qué se pone la gente en los días soleados?",
          de: "Was tragen Menschen an sonnigen Tagen?",
          nl: "Wat dragen mensen op zonnige dagen?"
        },
        options: [
          { en: "Sunglasses", es: "Gafas de sol", de: "Sonnenbrille", nl: "Zonnebril" },
          { en: "Winter coat", es: "Abrigo de invierno", de: "Wintermantel", nl: "Winterjas" },
          { en: "Warm hat", es: "Sombrero caliente", de: "Warme Mütze", nl: "Warme muts" },
          { en: "Snow boots", es: "Botas de nieve", de: "Schneestiefel", nl: "Snowboots" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What sport is often played in summer?",
          es: "¿Qué deporte se juega a menudo en verano?",
          de: "Welcher Sport wird oft im Sommer gespielt?",
          nl: "Welke sport wordt vaak in de zomer gespeeld?"
        },
        options: [
          { en: "Baseball", es: "Béisbol", de: "Baseball", nl: "Honkbal" },
          { en: "Ice hockey", es: "Hockey sobre hielo", de: "Eishockey", nl: "IJshockey" },
          { en: "Skiing", es: "Esquí", de: "Skifahren", nl: "Skiën" },
          { en: "Snowboarding", es: "Snowboard", de: "Snowboarden", nl: "Snowboarden" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do many people do in their gardens in July?",
          es: "¿Qué hacen muchas personas en sus jardines en julio?",
          de: "Was machen viele Menschen im Juli in ihren Gärten?",
          nl: "Wat doen veel mensen in hun tuinen in juli?"
        },
        options: [
          { en: "Water plants", es: "Regar plantas", de: "Pflanzen gießen", nl: "Planten water geven" },
          { en: "Plant seeds", es: "Plantar semillas", de: "Samen pflanzen", nl: "Zaden planten" },
          { en: "Rake leaves", es: "Rastrillar hojas", de: "Blätter harken", nl: "Bladeren harken" },
          { en: "Shovel snow", es: "Palear nieve", de: "Schnee schaufeln", nl: "Sneeuw scheppen" }
        ],
        correctIndex: 0
      }
    ],

    // Day 3 - July 3rd
    day3: [
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
          en: "Which gas do we breathe to stay alive?",
          es: "¿Qué gas respiramos para mantenernos vivos?",
          de: "Welches Gas atmen wir ein, um am Leben zu bleiben?",
          nl: "Welk gas ademen we in om te blijven leven?"
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
          en: "What is the largest continent?",
          es: "¿Cuál es el continente más grande?",
          de: "Was ist der größte Kontinent?",
          nl: "Wat is het grootste continent?"
        },
        options: [
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" },
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" },
          { en: "Europe", es: "Europa", de: "Europa", nl: "Europa" },
          { en: "North America", es: "América del Norte", de: "Nordamerika", nl: "Noord-Amerika" }
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
          en: "What do we call frozen water?",
          es: "¿Cómo llamamos al agua congelada?",
          de: "Wie nennen wir gefrorenes Wasser?",
          nl: "Hoe noemen we bevroren water?"
        },
        options: [
          { en: "Ice", es: "Hielo", de: "Eis", nl: "IJs" },
          { en: "Steam", es: "Vapor", de: "Dampf", nl: "Stoom" },
          { en: "Snow", es: "Nieve", de: "Schnee", nl: "Sneeuw" },
          { en: "Rain", es: "Lluvia", de: "Regen", nl: "Regen" }
        ],
        correctIndex: 0
      }
    ],

    // Day 4 - July 4th: Independence Day (USA)
    day4: [
      {
        question: {
          en: "What do Americans celebrate on July 4th?",
          es: "¿Qué celebran los estadounidenses el 4 de julio?",
          de: "Was feiern die Amerikaner am 4. Juli?",
          nl: "Wat vieren Amerikanen op 4 juli?"
        },
        options: [
          { en: "Independence from Britain", es: "Independencia de Gran Bretaña", de: "Unabhängigkeit von Großbritannien", nl: "Onafhankelijkheid van Groot-Brittannië" },
          { en: "Christmas", es: "Navidad", de: "Weihnachten", nl: "Kerstmis" },
          { en: "New Year", es: "Año Nuevo", de: "Neujahr", nl: "Nieuwjaar" },
          { en: "Halloween", es: "Halloween", de: "Halloween", nl: "Halloween" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "In which year did America declare independence?",
          es: "¿En qué año declaró América su independencia?",
          de: "In welchem Jahr erklärte Amerika seine Unabhängigkeit?",
          nl: "In welk jaar verklaarde Amerika zijn onafhankelijkheid?"
        },
        options: [
          { en: "1776", es: "1776", de: "1776", nl: "1776" },
          { en: "1775", es: "1775", de: "1775", nl: "1775" },
          { en: "1777", es: "1777", de: "1777", nl: "1777" },
          { en: "1778", es: "1778", de: "1778", nl: "1778" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What are the colors of the American flag?",
          es: "¿Cuáles son los colores de la bandera estadounidense?",
          de: "Was sind die Farben der amerikanischen Flagge?",
          nl: "Wat zijn de kleuren van de Amerikaanse vlag?"
        },
        options: [
          { en: "Red, white, and blue", es: "Rojo, blanco y azul", de: "Rot, weiß und blau", nl: "Rood, wit en blauw" },
          { en: "Red, white, and green", es: "Rojo, blanco y verde", de: "Rot, weiß und grün", nl: "Rood, wit en groen" },
          { en: "Blue, yellow, and red", es: "Azul, amarillo y rojo", de: "Blau, gelb und rot", nl: "Blauw, geel en rood" },
          { en: "Black, white, and red", es: "Negro, blanco y rojo", de: "Schwarz, weiß und rot", nl: "Zwart, wit en rood" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is commonly seen in the sky on July 4th?",
          es: "¿Qué se ve comúnmente en el cielo el 4 de julio?",
          de: "Was sieht man am 4. Juli häufig am Himmel?",
          nl: "Wat zie je vaak aan de hemel op 4 juli?"
        },
        options: [
          { en: "Fireworks", es: "Fuegos artificiales", de: "Feuerwerk", nl: "Vuurwerk" },
          { en: "Snow", es: "Nieve", de: "Schnee", nl: "Sneeuw" },
          { en: "Leaves falling", es: "Hojas cayendo", de: "Fallende Blätter", nl: "Vallende bladeren" },
          { en: "Ice crystals", es: "Cristales de hielo", de: "Eiskristalle", nl: "IJs kristallen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What food is traditionally eaten at July 4th celebrations?",
          es: "¿Qué comida se come tradicionalmente en las celebraciones del 4 de julio?",
          de: "Welches Essen wird traditionell bei den Feiern am 4. Juli gegessen?",
          nl: "Welk eten wordt traditioneel gegeten bij 4 juli vieringen?"
        },
        options: [
          { en: "Hamburgers and hot dogs", es: "Hamburguesas y perros calientes", de: "Hamburger und Hot Dogs", nl: "Hamburgers en hotdogs" },
          { en: "Turkey and stuffing", es: "Pavo y relleno", de: "Truthahn und Füllung", nl: "Kalkoen en vulling" },
          { en: "Candy and chocolate", es: "Dulces y chocolate", de: "Süßigkeiten und Schokolade", nl: "Snoep en chocolade" },
          { en: "Soup and bread", es: "Sopa y pan", de: "Suppe und Brot", nl: "Soep en brood" }
        ],
        correctIndex: 0
      }
    ],

    // Day 5 - July 5th
    day5: [
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
          { en: "Arctic Ocean", es: "Océano Ártico", de: "Arktischer Ozean", nl: "Noordelijke IJszee" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which planet is known as the 'Red Planet'?",
          es: "¿Qué planeta se conoce como el 'Planeta Rojo'?",
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
          en: "What is the fastest land animal?",
          es: "¿Cuál es el animal terrestre más rápido?",
          de: "Was ist das schnellste Landtier?",
          nl: "Wat is het snelste landdier?"
        },
        options: [
          { en: "Cheetah", es: "Guepardo", de: "Gepard", nl: "Jachtluipaard" },
          { en: "Lion", es: "León", de: "Löwe", nl: "Leeuw" },
          { en: "Horse", es: "Caballo", de: "Pferd", nl: "Paard" },
          { en: "Elephant", es: "Elefante", de: "Elefant", nl: "Olifant" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many bones are in the adult human body?",
          es: "¿Cuántos huesos hay en el cuerpo humano adulto?",
          de: "Wie viele Knochen hat der erwachsene menschliche Körper?",
          nl: "Hoeveel botten heeft het volwassen menselijk lichaam?"
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
          en: "What is the chemical symbol for iron?",
          es: "¿Cuál es el símbolo químico del hierro?",
          de: "Was ist das chemische Symbol für Eisen?",
          nl: "Wat is het chemische symbool voor ijzer?"
        },
        options: [
          { en: "Fe", es: "Fe", de: "Fe", nl: "Fe" },
          { en: "Ir", es: "Ir", de: "Ir", nl: "Ir" },
          { en: "In", es: "In", de: "In", nl: "In" },
          { en: "I", es: "I", de: "I", nl: "I" }
        ],
        correctIndex: 0
      }
    ],

    // Day 6 - July 6th: Animals and Nature
    day6: [
      {
        question: {
          en: "What is the tallest animal in the world?",
          es: "¿Cuál es el animal más alto del mundo?",
          de: "Was ist das größte Tier der Welt?",
          nl: "Wat is het langste dier ter wereld?"
        },
        options: [
          { en: "Giraffe", es: "Jirafa", de: "Giraffe", nl: "Giraffe" },
          { en: "Elephant", es: "Elefante", de: "Elefant", nl: "Olifant" },
          { en: "Horse", es: "Caballo", de: "Pferd", nl: "Paard" },
          { en: "Bear", es: "Oso", de: "Bär", nl: "Beer" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which flower is often associated with summer?",
          es: "¿Qué flor se asocia a menudo con el verano?",
          de: "Welche Blume wird oft mit dem Sommer in Verbindung gebracht?",
          nl: "Welke bloem wordt vaak geassocieerd met de zomer?"
        },
        options: [
          { en: "Sunflower", es: "Girasol", de: "Sonnenblume", nl: "Zonnebloem" },
          { en: "Rose", es: "Rosa", de: "Rose", nl: "Roos" },
          { en: "Tulip", es: "Tulipán", de: "Tulpe", nl: "Tulp" },
          { en: "Daisy", es: "Margarita", de: "Gänseblümchen", nl: "Madeliefje" }
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
      },
      {
        question: {
          en: "Which tree keeps its leaves all year round?",
          es: "¿Qué árbol mantiene sus hojas todo el año?",
          de: "Welcher Baum behält seine Blätter das ganze Jahr über?",
          nl: "Welke boom houdt zijn bladeren het hele jaar door?"
        },
        options: [
          { en: "Pine tree", es: "Pino", de: "Kiefer", nl: "Dennenboom" },
          { en: "Oak tree", es: "Roble", de: "Eiche", nl: "Eikenboom" },
          { en: "Maple tree", es: "Arce", de: "Ahorn", nl: "Esdoorn" },
          { en: "Birch tree", es: "Abedul", de: "Birke", nl: "Berkenboom" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What sound do frogs make?",
          es: "¿Qué sonido hacen las ranas?",
          de: "Welches Geräusch machen Frösche?",
          nl: "Welk geluid maken kikkers?"
        },
        options: [
          { en: "Croak", es: "Croar", de: "Quaken", nl: "Kwaken" },
          { en: "Bark", es: "Ladrar", de: "Bellen", nl: "Blaffen" },
          { en: "Meow", es: "Maullar", de: "Miauen", nl: "Miauwen" },
          { en: "Chirp", es: "Piar", de: "Zwitschern", nl: "Tsjilpen" }
        ],
        correctIndex: 0
      }
    ],

    // Day 7 - July 7th: World Geography
    day7: [
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
          en: "Which continent is Egypt in?",
          es: "¿En qué continente está Egipto?",
          de: "Auf welchem Kontinent liegt Ägypten?",
          nl: "Op welk continent ligt Egypte?"
        },
        options: [
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" },
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" },
          { en: "Europe", es: "Europa", de: "Europa", nl: "Europa" },
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" }
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
          { en: "Luxembourg", es: "Luxemburgo", de: "Luxemburg", nl: "Luxemburg" }
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
          { en: "Alps", es: "Alpes", de: "Alpen", nl: "Alpen" },
          { en: "Andes", es: "Andes", de: "Anden", nl: "Andes" },
          { en: "Rocky Mountains", es: "Montañas Rocosas", de: "Rocky Mountains", nl: "Rocky Mountains" }
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
      }
    ],

    // Day 8 - July 8th: Science and Space
    day8: [
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
          en: "What is the closest star to Earth?",
          es: "¿Cuál es la estrella más cercana a la Tierra?",
          de: "Was ist der nächste Stern zur Erde?",
          nl: "Wat is de dichtstbijzijnde ster bij de Aarde?"
        },
        options: [
          { en: "The Sun", es: "El Sol", de: "Die Sonne", nl: "De Zon" },
          { en: "The Moon", es: "La Luna", de: "Der Mond", nl: "De Maan" },
          { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" },
          { en: "Venus", es: "Venus", de: "Venus", nl: "Venus" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do plants need to make their own food?",
          es: "¿Qué necesitan las plantas para hacer su propia comida?",
          de: "Was brauchen Pflanzen, um ihre eigene Nahrung zu produzieren?",
          nl: "Wat hebben planten nodig om hun eigen voedsel te maken?"
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
          en: "What is the center of an atom called?",
          es: "¿Cómo se llama el centro de un átomo?",
          de: "Wie heißt das Zentrum eines Atoms?",
          nl: "Hoe heet het centrum van een atoom?"
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
          en: "Which force keeps us on the ground?",
          es: "¿Qué fuerza nos mantiene en el suelo?",
          de: "Welche Kraft hält uns am Boden?",
          nl: "Welke kracht houdt ons op de grond?"
        },
        options: [
          { en: "Gravity", es: "Gravedad", de: "Schwerkraft", nl: "Zwaartekracht" },
          { en: "Magnetism", es: "Magnetismo", de: "Magnetismus", nl: "Magnetisme" },
          { en: "Electricity", es: "Electricidad", de: "Elektrizität", nl: "Elektriciteit" },
          { en: "Light", es: "Luz", de: "Licht", nl: "Licht" }
        ],
        correctIndex: 0
      }
    ],

    // Day 9 - July 9th: Summer Sports and Activities
    day9: [
      {
        question: {
          en: "What popular summer activity involves hitting a ball over a net?",
          es: "¿Qué actividad popular de verano implica golpear una pelota por encima de una red?",
          de: "Welche beliebte Sommeraktivität beinhaltet das Schlagen eines Balls über ein Netz?",
          nl: "Welke populaire zomeractiviteit houdt in dat je een bal over een net slaat?"
        },
        options: [
          { en: "Tennis", es: "Tenis", de: "Tennis", nl: "Tennis" },
          { en: "Swimming", es: "Nadar", de: "Schwimmen", nl: "Zwemmen" },
          { en: "Running", es: "Correr", de: "Laufen", nl: "Rennen" },
          { en: "Cycling", es: "Ciclismo", de: "Radfahren", nl: "Fietsen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do you use to catch a fish?",
          es: "¿Qué usas para pescar un pez?",
          de: "Was benutzt man, um einen Fisch zu fangen?",
          nl: "Wat gebruik je om een vis te vangen?"
        },
        options: [
          { en: "Fishing rod", es: "Caña de pescar", de: "Angelrute", nl: "Hengel" },
          { en: "Tennis racket", es: "Raqueta de tenis", de: "Tennisschläger", nl: "Tennisracket" },
          { en: "Baseball bat", es: "Bate de béisbol", de: "Baseballschläger", nl: "Honkbalknuppel" },
          { en: "Golf club", es: "Palo de golf", de: "Golfschläger", nl: "Golfclub" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What activity involves sleeping outdoors in a tent?",
          es: "¿Qué actividad implica dormir al aire libre en una tienda?",
          de: "Welche Aktivität beinhaltet das Schlafen im Freien in einem Zelt?",
          nl: "Welke activiteit houdt in dat je buiten slaapt in een tent?"
        },
        options: [
          { en: "Camping", es: "Acampar", de: "Zelten", nl: "Kamperen" },
          { en: "Shopping", es: "Comprar", de: "Einkaufen", nl: "Winkelen" },
          { en: "Cooking", es: "Cocinar", de: "Kochen", nl: "Koken" },
          { en: "Reading", es: "Leer", de: "Lesen", nl: "Lezen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What safety item should you wear when riding a bicycle?",
          es: "¿Qué elemento de seguridad debes usar al andar en bicicleta?",
          de: "Welchen Sicherheitsgegenstand sollte man beim Fahrradfahren tragen?",
          nl: "Welk veiligheidsitem moet je dragen bij het fietsen?"
        },
        options: [
          { en: "Helmet", es: "Casco", de: "Helm", nl: "Helm" },
          { en: "Sunglasses", es: "Gafas de sol", de: "Sonnenbrille", nl: "Zonnebril" },
          { en: "Hat", es: "Sombrero", de: "Hut", nl: "Hoed" },
          { en: "Scarf", es: "Bufanda", de: "Schal", nl: "Sjaal" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do you need to play beach volleyball?",
          es: "¿Qué necesitas para jugar voleibol de playa?",
          de: "Was braucht man zum Beach-Volleyball spielen?",
          nl: "Wat heb je nodig om beachvolleybal te spelen?"
        },
        options: [
          { en: "A ball and net", es: "Una pelota y una red", de: "Einen Ball und ein Netz", nl: "Een bal en een net" },
          { en: "Ice skates", es: "Patines de hielo", de: "Schlittschuhe", nl: "Schaatsen" },
          { en: "Snow boots", es: "Botas de nieve", de: "Schneestiefel", nl: "Snowboots" },
          { en: "A winter coat", es: "Un abrigo de invierno", de: "Ein Wintermantel", nl: "Een winterjas" }
        ],
        correctIndex: 0
      }
    ],

    // Day 10 - July 10th: Food and Cooking
    day10: [
      {
        question: {
          en: "What fruit is red and often used to make juice in summer?",
          es: "¿Qué fruta es roja y se usa a menudo para hacer jugo en verano?",
          de: "Welche Frucht ist rot und wird oft zur Saftherstellung im Sommer verwendet?",
          nl: "Welk fruit is rood en wordt vaak gebruikt om sap te maken in de zomer?"
        },
        options: [
          { en: "Strawberry", es: "Fresa", de: "Erdbeere", nl: "Aardbei" },
          { en: "Banana", es: "Plátano", de: "Banane", nl: "Banaan" },
          { en: "Orange", es: "Naranja", de: "Orange", nl: "Sinaasappel" },
          { en: "Apple", es: "Manzana", de: "Apfel", nl: "Appel" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do you call cooking food over an open fire outdoors?",
          es: "¿Cómo se llama cocinar comida sobre un fuego abierto al aire libre?",
          de: "Wie nennt man das Kochen von Essen über offenem Feuer im Freien?",
          nl: "Hoe noem je het koken van eten boven een open vuur buiten?"
        },
        options: [
          { en: "Barbecue", es: "Barbacoa", de: "Grillen", nl: "Barbecue" },
          { en: "Baking", es: "Hornear", de: "Backen", nl: "Bakken" },
          { en: "Boiling", es: "Hervir", de: "Kochen", nl: "Koken" },
          { en: "Frying", es: "Freír", de: "Braten", nl: "Bakken" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which vegetable is long, green, and crunchy?",
          es: "¿Qué verdura es larga, verde y crujiente?",
          de: "Welches Gemüse ist lang, grün und knackig?",
          nl: "Welke groente is lang, groen en knapperig?"
        },
        options: [
          { en: "Cucumber", es: "Pepino", de: "Gurke", nl: "Komkommer" },
          { en: "Carrot", es: "Zanahoria", de: "Karotte", nl: "Wortel" },
          { en: "Potato", es: "Papa", de: "Kartoffel", nl: "Aardappel" },
          { en: "Onion", es: "Cebolla", de: "Zwiebel", nl: "Ui" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do you add to water to make tea?",
          es: "¿Qué añades al agua para hacer té?",
          de: "Was fügt man Wasser hinzu, um Tee zu machen?",
          nl: "Wat voeg je toe aan water om thee te maken?"
        },
        options: [
          { en: "Tea leaves", es: "Hojas de té", de: "Teeblätter", nl: "Theeblaadjes" },
          { en: "Sugar", es: "Azúcar", de: "Zucker", nl: "Suiker" },
          { en: "Salt", es: "Sal", de: "Salz", nl: "Zout" },
          { en: "Oil", es: "Aceite", de: "Öl", nl: "Olie" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What kitchen tool is used to flip pancakes?",
          es: "¿Qué herramienta de cocina se usa para voltear panqueques?",
          de: "Welches Küchengerät wird verwendet, um Pfannkuchen zu wenden?",
          nl: "Welk keukengereedschap wordt gebruikt om pannenkoeken om te draaien?"
        },
        options: [
          { en: "Spatula", es: "Espátula", de: "Pfannenwender", nl: "Spatel" },
          { en: "Spoon", es: "Cuchara", de: "Löffel", nl: "Lepel" },
          { en: "Fork", es: "Tenedor", de: "Gabel", nl: "Vork" },
          { en: "Knife", es: "Cuchillo", de: "Messer", nl: "Mes" }
        ],
        correctIndex: 0
      }
    ],

    // Day 11 - July 11th: History and Culture
    day11: [
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
          en: "In which country are the pyramids of Giza located?",
          es: "¿En qué país se encuentran las pirámides de Giza?",
          de: "In welchem Land befinden sich die Pyramiden von Gizeh?",
          nl: "In welk land bevinden zich de piramides van Gizeh?"
        },
        options: [
          { en: "Egypt", es: "Egipto", de: "Ägypten", nl: "Egypte" },
          { en: "Mexico", es: "México", de: "Mexiko", nl: "Mexico" },
          { en: "India", es: "India", de: "Indien", nl: "India" },
          { en: "China", es: "China", de: "China", nl: "China" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What ancient wonder of the world was in Alexandria, Egypt?",
          es: "¿Qué maravilla antigua del mundo estaba en Alejandría, Egipto?",
          de: "Welches antike Weltwunder befand sich in Alexandria, Ägypten?",
          nl: "Welk oud wereldwonder bevond zich in Alexandrië, Egypte?"
        },
        options: [
          { en: "Lighthouse of Alexandria", es: "Faro de Alejandría", de: "Leuchtturm von Alexandria", nl: "Vuurtoren van Alexandrië" },
          { en: "Colossus of Rhodes", es: "Coloso de Rodas", de: "Koloss von Rhodos", nl: "Kolossus van Rhodos" },
          { en: "Hanging Gardens", es: "Jardines Colgantes", de: "Hängende Gärten", nl: "Hangende Tuinen" },
          { en: "Statue of Zeus", es: "Estatua de Zeus", de: "Statue des Zeus", nl: "Standbeeld van Zeus" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which instrument did Mozart famously play?",
          es: "¿Qué instrumento tocaba famosamente Mozart?",
          de: "Welches Instrument spielte Mozart berühmt?",
          nl: "Welk instrument speelde Mozart beroemd?"
        },
        options: [
          { en: "Piano", es: "Piano", de: "Klavier", nl: "Piano" },
          { en: "Guitar", es: "Guitarra", de: "Gitarre", nl: "Gitaar" },
          { en: "Drums", es: "Batería", de: "Schlagzeug", nl: "Drums" },
          { en: "Trumpet", es: "Trompeta", de: "Trompete", nl: "Trompet" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the traditional Japanese art of paper folding called?",
          es: "¿Cómo se llama el arte tradicional japonés de doblar papel?",
          de: "Wie heißt die traditionelle japanische Kunst des Papierfaltens?",
          nl: "Hoe heet de traditionele Japanse kunst van het vouwen van papier?"
        },
        options: [
          { en: "Origami", es: "Origami", de: "Origami", nl: "Origami" },
          { en: "Karate", es: "Karate", de: "Karate", nl: "Karate" },
          { en: "Sushi", es: "Sushi", de: "Sushi", nl: "Sushi" },
          { en: "Bonsai", es: "Bonsái", de: "Bonsai", nl: "Bonsai" }
        ],
        correctIndex: 0
      }
    ],

    // Day 12 - July 12th: Ocean and Marine Life
    day12: [
      {
        question: {
          en: "What is the largest mammal in the ocean?",
          es: "¿Cuál es el mamífero más grande del océano?",
          de: "Was ist das größte Säugetier im Ozean?",
          nl: "Wat is het grootste zoogdier in de oceaan?"
        },
        options: [
          { en: "Blue whale", es: "Ballena azul", de: "Blauwal", nl: "Blauwe vinvis" },
          { en: "Shark", es: "Tiburón", de: "Hai", nl: "Haai" },
          { en: "Dolphin", es: "Delfín", de: "Delfin", nl: "Dolfijn" },
          { en: "Octopus", es: "Pulpo", de: "Krake", nl: "Octopus" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many arms does an octopus have?",
          es: "¿Cuántos brazos tiene un pulpo?",
          de: "Wie viele Arme hat ein Krake?",
          nl: "Hoeveel armen heeft een octopus?"
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
          en: "What do fish use to breathe underwater?",
          es: "¿Qué usan los peces para respirar bajo el agua?",
          de: "Was benutzen Fische zum Atmen unter Wasser?",
          nl: "Wat gebruiken vissen om onder water te ademen?"
        },
        options: [
          { en: "Gills", es: "Branquias", de: "Kiemen", nl: "Kieuwen" },
          { en: "Lungs", es: "Pulmones", de: "Lungen", nl: "Longen" },
          { en: "Nose", es: "Nariz", de: "Nase", nl: "Neus" },
          { en: "Mouth", es: "Boca", de: "Mund", nl: "Mond" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What are baby whales called?",
          es: "¿Cómo se llaman las crías de ballena?",
          de: "Wie heißen Walkalb?",
          nl: "Hoe heten walvisjongeren?"
        },
        options: [
          { en: "Calves", es: "Crías", de: "Kälber", nl: "Kalveren" },
          { en: "Puppies", es: "Cachorros", de: "Welpen", nl: "Puppy's" },
          { en: "Kittens", es: "Gatitos", de: "Kätzchen", nl: "Katjes" },
          { en: "Cubs", es: "Oseznos", de: "Junge", nl: "Welpen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What color can starfish be found in most commonly?",
          es: "¿En qué color se encuentran más comúnmente las estrellas de mar?",
          de: "In welcher Farbe findet man Seesterne am häufigsten?",
          nl: "In welke kleur worden zeesterren het meest aangetroffen?"
        },
        options: [
          { en: "Orange", es: "Naranja", de: "Orange", nl: "Oranje" },
          { en: "Blue", es: "Azul", de: "Blau", nl: "Blauw" },
          { en: "Green", es: "Verde", de: "Grün", nl: "Groen" },
          { en: "Black", es: "Negro", de: "Schwarz", nl: "Zwart" }
        ],
        correctIndex: 0
      }
    ],

    // Day 13 - July 13th: Technology and Innovation
    day13: [
      {
        question: {
          en: "What does 'www' stand for in website addresses?",
          es: "¿Qué significa 'www' en las direcciones de sitios web?",
          de: "Wofür steht 'www' in Webadressen?",
          nl: "Waar staat 'www' voor in websiteadressen?"
        },
        options: [
          { en: "World Wide Web", es: "Red Mundial", de: "World Wide Web", nl: "World Wide Web" },
          { en: "Wide World Web", es: "Web Mundial Amplio", de: "Wide World Web", nl: "Wide World Web" },
          { en: "World Web Wide", es: "Mundo Web Amplio", de: "World Web Wide", nl: "World Web Wide" },
          { en: "Web World Wide", es: "Web Mundo Amplio", de: "Web World Wide", nl: "Web World Wide" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Who invented the light bulb?",
          es: "¿Quién inventó la bombilla?",
          de: "Wer erfand die Glühbirne?",
          nl: "Wie vond de gloeilamp uit?"
        },
        options: [
          { en: "Thomas Edison", es: "Thomas Edison", de: "Thomas Edison", nl: "Thomas Edison" },
          { en: "Albert Einstein", es: "Albert Einstein", de: "Albert Einstein", nl: "Albert Einstein" },
          { en: "Benjamin Franklin", es: "Benjamin Franklin", de: "Benjamin Franklin", nl: "Benjamin Franklin" },
          { en: "Isaac Newton", es: "Isaac Newton", de: "Isaac Newton", nl: "Isaac Newton" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do you use to type on a computer?",
          es: "¿Qué usas para escribir en una computadora?",
          de: "Was benutzt man zum Tippen am Computer?",
          nl: "Wat gebruik je om te typen op een computer?"
        },
        options: [
          { en: "Keyboard", es: "Teclado", de: "Tastatur", nl: "Toetsenbord" },
          { en: "Monitor", es: "Monitor", de: "Monitor", nl: "Monitor" },
          { en: "Speaker", es: "Altavoz", de: "Lautsprecher", nl: "Luidspreker" },
          { en: "Camera", es: "Cámara", de: "Kamera", nl: "Camera" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What invention allows us to see things far away?",
          es: "¿Qué invento nos permite ver cosas lejanas?",
          de: "Welche Erfindung ermöglicht es uns, Dinge in der Ferne zu sehen?",
          nl: "Welke uitvinding stelt ons in staat om dingen ver weg te zien?"
        },
        options: [
          { en: "Telescope", es: "Telescopio", de: "Teleskop", nl: "Telescoop" },
          { en: "Microscope", es: "Microscopio", de: "Mikroskop", nl: "Microscoop" },
          { en: "Calculator", es: "Calculadora", de: "Taschenrechner", nl: "Rekenmachine" },
          { en: "Radio", es: "Radio", de: "Radio", nl: "Radio" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do robots need to function?",
          es: "¿Qué necesitan los robots para funcionar?",
          de: "Was brauchen Roboter zum Funktionieren?",
          nl: "Wat hebben robots nodig om te functioneren?"
        },
        options: [
          { en: "Electricity", es: "Electricidad", de: "Elektrizität", nl: "Elektriciteit" },
          { en: "Food", es: "Comida", de: "Essen", nl: "Voedsel" },
          { en: "Sleep", es: "Sueño", de: "Schlaf", nl: "Slaap" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" }
        ],
        correctIndex: 0
      }
    ],

    // Day 14 - July 14th: Travel and Transportation
    day14: [
      {
        question: {
          en: "What do airplanes need to take off?",
          es: "¿Qué necesitan los aviones para despegar?",
          de: "Was brauchen Flugzeuge zum Abheben?",
          nl: "Wat hebben vliegtuigen nodig om op te stijgen?"
        },
        options: [
          { en: "A runway", es: "Una pista", de: "Eine Start- und Landebahn", nl: "Een startbaan" },
          { en: "A road", es: "Una carretera", de: "Eine Straße", nl: "Een weg" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Snow", es: "Nieve", de: "Schnee", nl: "Sneeuw" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What transportation moves on tracks?",
          es: "¿Qué transporte se mueve sobre rieles?",
          de: "Welches Verkehrsmittel bewegt sich auf Schienen?",
          nl: "Welk vervoermiddel beweegt over rails?"
        },
        options: [
          { en: "Train", es: "Tren", de: "Zug", nl: "Trein" },
          { en: "Car", es: "Coche", de: "Auto", nl: "Auto" },
          { en: "Boat", es: "Barco", de: "Boot", nl: "Boot" },
          { en: "Bicycle", es: "Bicicleta", de: "Fahrrad", nl: "Fiets" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do you need to show when traveling to another country?",
          es: "¿Qué necesitas mostrar al viajar a otro país?",
          de: "Was muss man zeigen, wenn man in ein anderes Land reist?",
          nl: "Wat moet je tonen bij reizen naar een ander land?"
        },
        options: [
          { en: "Passport", es: "Pasaporte", de: "Reisepass", nl: "Paspoort" },
          { en: "Backpack", es: "Mochila", de: "Rucksack", nl: "Rugzak" },
          { en: "Camera", es: "Cámara", de: "Kamera", nl: "Camera" },
          { en: "Sunglasses", es: "Gafas de sol", de: "Sonnenbrille", nl: "Zonnebril" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many wheels does a typical bicycle have?",
          es: "¿Cuántas ruedas tiene una bicicleta típica?",
          de: "Wie viele Räder hat ein typisches Fahrrad?",
          nl: "Hoeveel wielen heeft een typische fiets?"
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
          en: "What vehicle is used to travel on water?",
          es: "¿Qué vehículo se usa para viajar en agua?",
          de: "Welches Fahrzeug wird für Reisen auf dem Wasser verwendet?",
          nl: "Welk voertuig wordt gebruikt om over water te reizen?"
        },
        options: [
          { en: "Boat", es: "Barco", de: "Boot", nl: "Boot" },
          { en: "Car", es: "Coche", de: "Auto", nl: "Auto" },
          { en: "Bus", es: "Autobús", de: "Bus", nl: "Bus" },
          { en: "Train", es: "Tren", de: "Zug", nl: "Trein" }
        ],
        correctIndex: 0
      }
    ],

    // Day 15 - July 15th: Mathematics and Numbers
    day15: [
      {
        question: {
          en: "What is 5 + 3?",
          es: "¿Cuánto es 5 + 3?",
          de: "Was ist 5 + 3?",
          nl: "Wat is 5 + 3?"
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
          en: "What is 10 - 4?",
          es: "¿Cuánto es 10 - 4?",
          de: "Was ist 10 - 4?",
          nl: "Wat is 10 - 4?"
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
          en: "Which shape has four equal sides?",
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
          en: "What is 3 × 2?",
          es: "¿Cuánto es 3 × 2?",
          de: "Was ist 3 × 2?",
          nl: "Wat is 3 × 2?"
        },
        options: [
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "4", es: "4", de: "4", nl: "4" }
        ],
        correctIndex: 0
      }
    ],

    // Day 16 - July 16th: Weather and Climate
    day16: [
      {
        question: {
          en: "What do you see in the sky when it rains?",
          es: "¿Qué ves en el cielo cuando llueve?",
          de: "Was sieht man am Himmel, wenn es regnet?",
          nl: "Wat zie je aan de hemel als het regent?"
        },
        options: [
          { en: "Clouds", es: "Nubes", de: "Wolken", nl: "Wolken" },
          { en: "Stars", es: "Estrellas", de: "Sterne", nl: "Sterren" },
          { en: "Airplanes", es: "Aviones", de: "Flugzeuge", nl: "Vliegtuigen" },
          { en: "Birds", es: "Pájaros", de: "Vögel", nl: "Vogels" }
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
          { en: "Clock", es: "Reloj", de: "Uhr", nl: "Klok" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What happens to water when it gets very cold?",
          es: "¿Qué le pasa al agua cuando se pone muy fría?",
          de: "Was passiert mit Wasser, wenn es sehr kalt wird?",
          nl: "Wat gebeurt er met water als het erg koud wordt?"
        },
        options: [
          { en: "It freezes", es: "Se congela", de: "Es friert", nl: "Het bevriest" },
          { en: "It boils", es: "Hierve", de: "Es kocht", nl: "Het kookt" },
          { en: "It disappears", es: "Desaparece", de: "Es verschwindet", nl: "Het verdwijnt" },
          { en: "It turns red", es: "Se vuelve rojo", de: "Es wird rot", nl: "Het wordt rood" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do we call a very strong wind storm?",
          es: "¿Cómo llamamos a una tormenta de viento muy fuerte?",
          de: "Wie nennen wir einen sehr starken Windsturm?",
          nl: "Hoe noemen we een zeer sterke windstorm?"
        },
        options: [
          { en: "Hurricane", es: "Huracán", de: "Hurrikan", nl: "Orkaan" },
          { en: "Drizzle", es: "Llovizna", de: "Nieselregen", nl: "Motregen" },
          { en: "Fog", es: "Niebla", de: "Nebel", nl: "Mist" },
          { en: "Snow", es: "Nieve", de: "Schnee", nl: "Sneeuw" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "In which season is July in the Northern Hemisphere?",
          es: "¿En qué estación está julio en el Hemisferio Norte?",
          de: "In welcher Jahreszeit ist Juli in der nördlichen Hemisphäre?",
          nl: "In welk seizoen valt juli op het noordelijk halfrond?"
        },
        options: [
          { en: "Summer", es: "Verano", de: "Sommer", nl: "Zomer" },
          { en: "Winter", es: "Invierno", de: "Winter", nl: "Winter" },
          { en: "Spring", es: "Primavera", de: "Frühling", nl: "Lente" },
          { en: "Fall", es: "Otoño", de: "Herbst", nl: "Herfst" }
        ],
        correctIndex: 0
      }
    ],

    // Day 17 - July 17th: Music and Arts
    day17: [
      {
        question: {
          en: "How many strings does a guitar typically have?",
          es: "¿Cuántas cuerdas tiene típicamente una guitarra?",
          de: "Wie viele Saiten hat eine Gitarre normalerweise?",
          nl: "Hoeveel snaren heeft een gitaar meestal?"
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
          en: "What do you use to paint a picture?",
          es: "¿Qué usas para pintar un cuadro?",
          de: "Was benutzt man zum Malen eines Bildes?",
          nl: "Wat gebruik je om een schilderij te maken?"
        },
        options: [
          { en: "Paint brush", es: "Pincel", de: "Pinsel", nl: "Kwast" },
          { en: "Spoon", es: "Cuchara", de: "Löffel", nl: "Lepel" },
          { en: "Hammer", es: "Martillo", de: "Hammer", nl: "Hamer" },
          { en: "Scissors", es: "Tijeras", de: "Schere", nl: "Schaar" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What are the three primary colors?",
          es: "¿Cuáles son los tres colores primarios?",
          de: "Was sind die drei Grundfarben?",
          nl: "Wat zijn de drie primaire kleuren?"
        },
        options: [
          { en: "Red, blue, yellow", es: "Rojo, azul, amarillo", de: "Rot, blau, gelb", nl: "Rood, blauw, geel" },
          { en: "Green, orange, purple", es: "Verde, naranja, morado", de: "Grün, orange, lila", nl: "Groen, oranje, paars" },
          { en: "Black, white, gray", es: "Negro, blanco, gris", de: "Schwarz, weiß, grau", nl: "Zwart, wit, grijs" },
          { en: "Pink, brown, tan", es: "Rosa, marrón, tostado", de: "Rosa, braun, beige", nl: "Roze, bruin, beige" }
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
          { en: "Violin", es: "Violín", de: "Geige", nl: "Viool" },
          { en: "Drum", es: "Tambor", de: "Trommel", nl: "Trommel" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do we call a person who creates sculptures?",
          es: "¿Cómo llamamos a una persona que crea esculturas?",
          de: "Wie nennen wir eine Person, die Skulpturen erschafft?",
          nl: "Hoe noemen we iemand die beeldhouwwerken maakt?"
        },
        options: [
          { en: "Sculptor", es: "Escultor", de: "Bildhauer", nl: "Beeldhouwer" },
          { en: "Dancer", es: "Bailarín", de: "Tänzer", nl: "Danser" },
          { en: "Singer", es: "Cantante", de: "Sänger", nl: "Zanger" },
          { en: "Writer", es: "Escritor", de: "Schriftsteller", nl: "Schrijver" }
        ],
        correctIndex: 0
      }
    ],

    // Day 18 - July 18th: Body and Health
    day18: [
      {
        question: {
          en: "How many eyes do humans normally have?",
          es: "¿Cuántos ojos tienen normalmente los humanos?",
          de: "Wie viele Augen haben Menschen normalerweise?",
          nl: "Hoeveel ogen hebben mensen normaal?"
        },
        options: [
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "1", es: "1", de: "1", nl: "1" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What should you do before eating?",
          es: "¿Qué debes hacer antes de comer?",
          de: "Was sollte man vor dem Essen tun?",
          nl: "Wat moet je doen voordat je gaat eten?"
        },
        options: [
          { en: "Wash hands", es: "Lavarse las manos", de: "Hände waschen", nl: "Handen wassen" },
          { en: "Take a nap", es: "Tomar una siesta", de: "Ein Nickerchen machen", nl: "Een dutje doen" },
          { en: "Watch TV", es: "Ver televisión", de: "Fernsehen", nl: "TV kijken" },
          { en: "Play games", es: "Jugar juegos", de: "Spiele spielen", nl: "Spelletjes spelen" }
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
          { en: "Brain", es: "Cerebro", de: "Gehirn", nl: "Hersenen" },
          { en: "Stomach", es: "Estómago", de: "Magen", nl: "Maag" },
          { en: "Liver", es: "Hígado", de: "Leber", nl: "Lever" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many teeth do adults typically have?",
          es: "¿Cuántos dientes tienen típicamente los adultos?",
          de: "Wie viele Zähne haben Erwachsene normalerweise?",
          nl: "Hoeveel tanden hebben volwassenen meestal?"
        },
        options: [
          { en: "32", es: "32", de: "32", nl: "32" },
          { en: "28", es: "28", de: "28", nl: "28" },
          { en: "24", es: "24", de: "24", nl: "24" },
          { en: "20", es: "20", de: "20", nl: "20" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What vitamin do we get from sunlight?",
          es: "¿Qué vitamina obtenemos de la luz solar?",
          de: "Welches Vitamin bekommen wir vom Sonnenlicht?",
          nl: "Welke vitamine krijgen we van zonlicht?"
        },
        options: [
          { en: "Vitamin D", es: "Vitamina D", de: "Vitamin D", nl: "Vitamine D" },
          { en: "Vitamin C", es: "Vitamina C", de: "Vitamin C", nl: "Vitamine C" },
          { en: "Vitamin A", es: "Vitamina A", de: "Vitamin A", nl: "Vitamine A" },
          { en: "Vitamin B", es: "Vitamina B", de: "Vitamin B", nl: "Vitamine B" }
        ],
        correctIndex: 0
      }
    ],

    // Day 19 - July 19th: Books and Literature
    day19: [
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
          en: "What do we call a book of maps?",
          es: "¿Cómo llamamos a un libro de mapas?",
          de: "Wie nennen wir ein Buch mit Landkarten?",
          nl: "Hoe noemen we een boek met kaarten?"
        },
        options: [
          { en: "Atlas", es: "Atlas", de: "Atlas", nl: "Atlas" },
          { en: "Dictionary", es: "Diccionario", de: "Wörterbuch", nl: "Woordenboek" },
          { en: "Encyclopedia", es: "Enciclopedia", de: "Enzyklopädie", nl: "Encyclopedie" },
          { en: "Novel", es: "Novela", de: "Roman", nl: "Roman" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the first letter of the alphabet?",
          es: "¿Cuál es la primera letra del alfabeto?",
          de: "Was ist der erste Buchstabe des Alphabets?",
          nl: "Wat is de eerste letter van het alfabet?"
        },
        options: [
          { en: "A", es: "A", de: "A", nl: "A" },
          { en: "B", es: "B", de: "B", nl: "B" },
          { en: "C", es: "C", de: "C", nl: "C" },
          { en: "D", es: "D", de: "D", nl: "D" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "In fairy tales, what do you kiss to turn into a prince?",
          es: "En los cuentos de hadas, ¿qué besas para convertirte en príncipe?",
          de: "In Märchen, was küsst man, um sich in einen Prinzen zu verwandeln?",
          nl: "In sprookjes, wat kus je om in een prins te veranderen?"
        },
        options: [
          { en: "A frog", es: "Una rana", de: "Einen Frosch", nl: "Een kikker" },
          { en: "A tree", es: "Un árbol", de: "Einen Baum", nl: "Een boom" },
          { en: "A rock", es: "Una roca", de: "Einen Stein", nl: "Een steen" },
          { en: "A flower", es: "Una flor", de: "Eine Blume", nl: "Een bloem" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do we call a story that is not real?",
          es: "¿Cómo llamamos a una historia que no es real?",
          de: "Wie nennen wir eine Geschichte, die nicht real ist?",
          nl: "Hoe noemen we een verhaal dat niet echt is?"
        },
        options: [
          { en: "Fiction", es: "Ficción", de: "Fiktion", nl: "Fictie" },
          { en: "Biography", es: "Biografía", de: "Biografie", nl: "Biografie" },
          { en: "History", es: "Historia", de: "Geschichte", nl: "Geschiedenis" },
          { en: "News", es: "Noticias", de: "Nachrichten", nl: "Nieuws" }
        ],
        correctIndex: 0
      }
    ],

    // Day 20 - July 20th: Space Exploration
    day20: [
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
          { en: "Alan Shepard", es: "Alan Shepard", de: "Alan Shepard", nl: "Alan Shepard" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do we call people who travel to space?",
          es: "¿Cómo llamamos a las personas que viajan al espacio?",
          de: "Wie nennen wir Menschen, die ins All reisen?",
          nl: "Hoe noemen we mensen die naar de ruimte reizen?"
        },
        options: [
          { en: "Astronauts", es: "Astronautas", de: "Astronauten", nl: "Astronauten" },
          { en: "Pilots", es: "Pilotos", de: "Piloten", nl: "Piloten" },
          { en: "Sailors", es: "Marineros", de: "Matrosen", nl: "Zeelieden" },
          { en: "Drivers", es: "Conductores", de: "Fahrer", nl: "Chauffeurs" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the name of our galaxy?",
          es: "¿Cuál es el nombre de nuestra galaxia?",
          de: "Wie heißt unsere Galaxie?",
          nl: "Wat is de naam van onze melkweg?"
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
          en: "How long does it take Earth to orbit the Sun?",
          es: "¿Cuánto tiempo tarda la Tierra en orbitar el Sol?",
          de: "Wie lange braucht die Erde, um die Sonne zu umkreisen?",
          nl: "Hoelang doet de Aarde erover om de Zon te omcirkelen?"
        },
        options: [
          { en: "One year", es: "Un año", de: "Ein Jahr", nl: "Een jaar" },
          { en: "One month", es: "Un mes", de: "Ein Monat", nl: "Een maand" },
          { en: "One day", es: "Un día", de: "Ein Tag", nl: "Een dag" },
          { en: "One week", es: "Una semana", de: "Eine Woche", nl: "Een week" }
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
          { en: "Nile River", es: "Río Nilo", de: "Nil", nl: "Nijl" },
          { en: "Amazon River", es: "Río Amazonas", de: "Amazonas", nl: "Amazone" },
          { en: "Yangtze River", es: "Río Yangtsé", de: "Jangtsekiang", nl: "Yangtzerivier" },
          { en: "Mississippi River", es: "Río Misisipi", de: "Mississippi", nl: "Mississippi" }
        ],
        correctIndex: 0
      }
    ],

    // Day 21 - July 21st: Games and Sports
    day21: [
      {
        question: {
          en: "In which sport do you use a racket and a shuttlecock?",
          es: "¿En qué deporte usas una raqueta y un volante?",
          de: "In welchem Sport benutzt man einen Schläger und einen Federball?",
          nl: "In welke sport gebruik je een racket en een shuttle?"
        },
        options: [
          { en: "Badminton", es: "Bádminton", de: "Badminton", nl: "Badminton" },
          { en: "Tennis", es: "Tenis", de: "Tennis", nl: "Tennis" },
          { en: "Basketball", es: "Baloncesto", de: "Basketball", nl: "Basketbal" },
          { en: "Soccer", es: "Fútbol", de: "Fußball", nl: "Voetbal" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many players are on a soccer team on the field?",
          es: "¿Cuántos jugadores hay en un equipo de fútbol en el campo?",
          de: "Wie viele Spieler sind in einem Fußballteam auf dem Feld?",
          nl: "Hoeveel spelers staan er van een voetbalteam op het veld?"
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
          en: "What game uses a board with 64 squares?",
          es: "¿Qué juego usa un tablero con 64 cuadrados?",
          de: "Welches Spiel verwendet ein Brett mit 64 Feldern?",
          nl: "Welk spel gebruikt een bord met 64 vakjes?"
        },
        options: [
          { en: "Chess", es: "Ajedrez", de: "Schach", nl: "Schaak" },
          { en: "Checkers", es: "Damas", de: "Dame", nl: "Dammen" },
          { en: "Monopoly", es: "Monopoly", de: "Monopoly", nl: "Monopoly" },
          { en: "Scrabble", es: "Scrabble", de: "Scrabble", nl: "Scrabble" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "In basketball, how many points is a free throw worth?",
          es: "En baloncesto, ¿cuántos puntos vale un tiro libre?",
          de: "Wie viele Punkte ist ein Freiwurf im Basketball wert?",
          nl: "Hoeveel punten is een vrije worp waard in basketbal?"
        },
        options: [
          { en: "1", es: "1", de: "1", nl: "1" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" }
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
          { en: "Soccer", es: "Fútbol", de: "Fußball", nl: "Voetbal" },
          { en: "Cricket", es: "Cricket", de: "Cricket", nl: "Cricket" }
        ],
        correctIndex: 0
      }
    ],

    // Day 22 - July 22nd: Inventions and Discoveries
    day22: [
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
          { en: "Benjamin Franklin", es: "Benjamin Franklin", de: "Benjamin Franklin", nl: "Benjamin Franklin" },
          { en: "Nikola Tesla", es: "Nikola Tesla", de: "Nikola Tesla", nl: "Nikola Tesla" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What did the Wright brothers invent?",
          es: "¿Qué inventaron los hermanos Wright?",
          de: "Was erfanden die Gebrüder Wright?",
          nl: "Wat vonden de gebroeders Wright uit?"
        },
        options: [
          { en: "Airplane", es: "Avión", de: "Flugzeug", nl: "Vliegtuig" },
          { en: "Car", es: "Coche", de: "Auto", nl: "Auto" },
          { en: "Bicycle", es: "Bicicleta", de: "Fahrrad", nl: "Fiets" },
          { en: "Train", es: "Tren", de: "Zug", nl: "Trein" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What material was first used to make tools in the Stone Age?",
          es: "¿Qué material se usó primero para hacer herramientas en la Edad de Piedra?",
          de: "Welches Material wurde zuerst zur Herstellung von Werkzeugen in der Steinzeit verwendet?",
          nl: "Welk materiaal werd eerst gebruikt om gereedschap te maken in de Steentijd?"
        },
        options: [
          { en: "Stone", es: "Piedra", de: "Stein", nl: "Steen" },
          { en: "Metal", es: "Metal", de: "Metall", nl: "Metaal" },
          { en: "Plastic", es: "Plástico", de: "Plastik", nl: "Plastic" },
          { en: "Wood", es: "Madera", de: "Holz", nl: "Hout" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What important discovery did Marie Curie make?",
          es: "¿Qué descubrimiento importante hizo Marie Curie?",
          de: "Welche wichtige Entdeckung machte Marie Curie?",
          nl: "Welke belangrijke ontdekking deed Marie Curie?"
        },
        options: [
          { en: "Radioactivity", es: "Radiactividad", de: "Radioaktivität", nl: "Radioactiviteit" },
          { en: "Gravity", es: "Gravedad", de: "Schwerkraft", nl: "Zwaartekracht" },
          { en: "Electricity", es: "Electricidad", de: "Elektrizität", nl: "Elektriciteit" },
          { en: "Magnetism", es: "Magnetismo", de: "Magnetismus", nl: "Magnetisme" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What invention helps us see very small things?",
          es: "¿Qué invento nos ayuda a ver cosas muy pequeñas?",
          de: "Welche Erfindung hilft uns, sehr kleine Dinge zu sehen?",
          nl: "Welke uitvinding helpt ons om hele kleine dingen te zien?"
        },
        options: [
          { en: "Microscope", es: "Microscopio", de: "Mikroskop", nl: "Microscoop" },
          { en: "Telescope", es: "Telescopio", de: "Teleskop", nl: "Telescoop" },
          { en: "Camera", es: "Cámara", de: "Kamera", nl: "Camera" },
          { en: "Binoculars", es: "Binoculares", de: "Fernglas", nl: "Verrekijker" }
        ],
        correctIndex: 0
      }
    ],

    // Day 23 - July 23rd: Festivals and Celebrations
    day23: [
      {
        question: {
          en: "What do people traditionally eat on their birthday?",
          es: "¿Qué comen tradicionalmente las personas en su cumpleaños?",
          de: "Was essen Menschen traditionell an ihrem Geburtstag?",
          nl: "Wat eten mensen traditioneel op hun verjaardag?"
        },
        options: [
          { en: "Birthday cake", es: "Pastel de cumpleaños", de: "Geburtstagskuchen", nl: "Verjaardagstaart" },
          { en: "Pizza", es: "Pizza", de: "Pizza", nl: "Pizza" },
          { en: "Salad", es: "Ensalada", de: "Salat", nl: "Salade" },
          { en: "Soup", es: "Sopa", de: "Suppe", nl: "Soep" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What holiday celebrates the harvest in autumn?",
          es: "¿Qué feriado celebra la cosecha en otoño?",
          de: "Welcher Feiertag feiert die Ernte im Herbst?",
          nl: "Welke feestdag viert de oogst in de herfst?"
        },
        options: [
          { en: "Thanksgiving", es: "Acción de Gracias", de: "Erntedankfest", nl: "Dankzegging" },
          { en: "Christmas", es: "Navidad", de: "Weihnachten", nl: "Kerstmis" },
          { en: "Easter", es: "Pascua", de: "Ostern", nl: "Pasen" },
          { en: "Halloween", es: "Halloween", de: "Halloween", nl: "Halloween" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "On which holiday do children go trick-or-treating?",
          es: "¿En qué feriado van los niños a pedir dulces?",
          de: "An welchem Feiertag gehen Kinder um Süßigkeiten betteln?",
          nl: "Op welke feestdag gaan kinderen langs de deuren voor snoep?"
        },
        options: [
          { en: "Halloween", es: "Halloween", de: "Halloween", nl: "Halloween" },
          { en: "Christmas", es: "Navidad", de: "Weihnachten", nl: "Kerstmis" },
          { en: "Easter", es: "Pascua", de: "Ostern", nl: "Pasen" },
          { en: "New Year", es: "Año Nuevo", de: "Neujahr", nl: "Nieuwjaar" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do people make resolutions for?",
          es: "¿Para qué hacen resoluciones las personas?",
          de: "Wofür machen Menschen Vorsätze?",
          nl: "Waarvoor maken mensen voornemens?"
        },
        options: [
          { en: "New Year", es: "Año Nuevo", de: "Neujahr", nl: "Nieuwjaar" },
          { en: "Summer vacation", es: "Vacaciones de verano", de: "Sommerferien", nl: "Zomervakantie" },
          { en: "Winter", es: "Invierno", de: "Winter", nl: "Winter" },
          { en: "School", es: "Escuela", de: "Schule", nl: "School" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What festival is known for colorful powder throwing?",
          es: "¿Qué festival es conocido por lanzar polvo colorido?",
          de: "Welches Festival ist für das Werfen bunter Farben bekannt?",
          nl: "Welk festival staat bekend om het gooien van kleurrijk poeder?"
        },
        options: [
          { en: "Holi", es: "Holi", de: "Holi", nl: "Holi" },
          { en: "Christmas", es: "Navidad", de: "Weihnachten", nl: "Kerstmis" },
          { en: "Easter", es: "Pascua", de: "Ostern", nl: "Pasen" },
          { en: "Halloween", es: "Halloween", de: "Halloween", nl: "Halloween" }
        ],
        correctIndex: 0
      }
    ],

    // Day 24 - July 24th: Money and Economics
    day24: [
      {
        question: {
          en: "How many cents make one dollar?",
          es: "¿Cuántos centavos hacen un dólar?",
          de: "Wie viele Cent ergeben einen Dollar?",
          nl: "Hoeveel cent maken één dollar?"
        },
        options: [
          { en: "100", es: "100", de: "100", nl: "100" },
          { en: "50", es: "50", de: "50", nl: "50" },
          { en: "25", es: "25", de: "25", nl: "25" },
          { en: "10", es: "10", de: "10", nl: "10" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do you call money that you save?",
          es: "¿Cómo llamas al dinero que ahorras?",
          de: "Wie nennt man Geld, das man spart?",
          nl: "Hoe noem je geld dat je opzij legt?"
        },
        options: [
          { en: "Savings", es: "Ahorros", de: "Ersparnisse", nl: "Spaargeld" },
          { en: "Spending", es: "Gastos", de: "Ausgaben", nl: "Uitgaven" },
          { en: "Borrowing", es: "Préstamos", de: "Ausleihen", nl: "Lenen" },
          { en: "Losing", es: "Perdidas", de: "Verlieren", nl: "Verliezen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Where do people typically keep their money safe?",
          es: "¿Dónde suele la gente mantener su dinero seguro?",
          de: "Wo bewahren Menschen normalerweise ihr Geld sicher auf?",
          nl: "Waar bewaren mensen meestal hun geld veilig?"
        },
        options: [
          { en: "Bank", es: "Banco", de: "Bank", nl: "Bank" },
          { en: "School", es: "Escuela", de: "Schule", nl: "School" },
          { en: "Park", es: "Parque", de: "Park", nl: "Park" },
          { en: "Store", es: "Tienda", de: "Laden", nl: "Winkel" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do you give to a store when you buy something?",
          es: "¿Qué le das a una tienda cuando compras algo?",
          de: "Was gibt man einem Geschäft, wenn man etwas kauft?",
          nl: "Wat geef je aan een winkel als je iets koopt?"
        },
        options: [
          { en: "Money", es: "Dinero", de: "Geld", nl: "Geld" },
          { en: "Food", es: "Comida", de: "Essen", nl: "Eten" },
          { en: "Books", es: "Libros", de: "Bücher", nl: "Boeken" },
          { en: "Toys", es: "Juguetes", de: "Spielzeug", nl: "Speelgoed" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the name for coins and paper money together?",
          es: "¿Cuál es el nombre para monedas y billetes juntos?",
          de: "Wie heißen Münzen und Banknoten zusammen?",
          nl: "Wat is de naam voor munten en papiergeld samen?"
        },
        options: [
          { en: "Currency", es: "Moneda", de: "Währung", nl: "Valuta" },
          { en: "Treasure", es: "Tesoro", de: "Schatz", nl: "Schat" },
          { en: "Jewelry", es: "Joyería", de: "Schmuck", nl: "Sieraden" },
          { en: "Gifts", es: "Regalos", de: "Geschenke", nl: "Cadeaus" }
        ],
        correctIndex: 0
      }
    ],

    // Day 25 - July 25th: Time and Calendars
    day25: [
      {
        question: {
          en: "How many minutes are in an hour?",
          es: "¿Cuántos minutos hay en una hora?",
          de: "Wie viele Minuten sind in einer Stunde?",
          nl: "Hoeveel minuten zitten er in een uur?"
        },
        options: [
          { en: "60", es: "60", de: "60", nl: "60" },
          { en: "30", es: "30", de: "30", nl: "30" },
          { en: "100", es: "100", de: "100", nl: "100" },
          { en: "24", es: "24", de: "24", nl: "24" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many days are in a week?",
          es: "¿Cuántos días hay en una semana?",
          de: "Wie viele Tage hat eine Woche?",
          nl: "Hoeveel dagen zitten er in een week?"
        },
        options: [
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "6", es: "6", de: "6", nl: "6" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the last month of the year?",
          es: "¿Cuál es el último mes del año?",
          de: "Was ist der letzte Monat des Jahres?",
          nl: "Wat is de laatste maand van het jaar?"
        },
        options: [
          { en: "December", es: "Diciembre", de: "Dezember", nl: "December" },
          { en: "November", es: "Noviembre", de: "November", nl: "November" },
          { en: "January", es: "Enero", de: "Januar", nl: "Januari" },
          { en: "October", es: "Octubre", de: "Oktober", nl: "Oktober" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What instrument tells time?",
          es: "¿Qué instrumento indica la hora?",
          de: "Welches Instrument zeigt die Zeit an?",
          nl: "Welk instrument geeft de tijd aan?"
        },
        options: [
          { en: "Clock", es: "Reloj", de: "Uhr", nl: "Klok" },
          { en: "Ruler", es: "Regla", de: "Lineal", nl: "Liniaal" },
          { en: "Scale", es: "Balanza", de: "Waage", nl: "Weegschaal" },
          { en: "Compass", es: "Brújula", de: "Kompass", nl: "Kompas" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many seasons are there in a year?",
          es: "¿Cuántas estaciones hay en un año?",
          de: "Wie viele Jahreszeiten gibt es in einem Jahr?",
          nl: "Hoeveel seizoenen zijn er in een jaar?"
        },
        options: [
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "12", es: "12", de: "12", nl: "12" }
        ],
        correctIndex: 0
      }
    ],

    // Day 26 - July 26th: Family and Relationships
    day26: [
      {
        question: {
          en: "What do you call your father's brother?",
          es: "¿Cómo llamas al hermano de tu padre?",
          de: "Wie nennt man den Bruder des Vaters?",
          nl: "Hoe noem je de broer van je vader?"
        },
        options: [
          { en: "Uncle", es: "Tío", de: "Onkel", nl: "Oom" },
          { en: "Cousin", es: "Primo", de: "Cousin", nl: "Neef" },
          { en: "Brother", es: "Hermano", de: "Bruder", nl: "Broer" },
          { en: "Grandfather", es: "Abuelo", de: "Großvater", nl: "Grootvader" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do you call your mother's mother?",
          es: "¿Cómo llamas a la madre de tu madre?",
          de: "Wie nennt man die Mutter der Mutter?",
          nl: "Hoe noem je de moeder van je moeder?"
        },
        options: [
          { en: "Grandmother", es: "Abuela", de: "Großmutter", nl: "Grootmoeder" },
          { en: "Aunt", es: "Tía", de: "Tante", nl: "Tante" },
          { en: "Sister", es: "Hermana", de: "Schwester", nl: "Zus" },
          { en: "Mother", es: "Madre", de: "Mutter", nl: "Moeder" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do you call your uncle's children?",
          es: "¿Cómo llamas a los hijos de tu tío?",
          de: "Wie nennt man die Kinder des Onkels?",
          nl: "Hoe noem je de kinderen van je oom?"
        },
        options: [
          { en: "Cousins", es: "Primos", de: "Cousins", nl: "Neven/nichten" },
          { en: "Brothers", es: "Hermanos", de: "Brüder", nl: "Broers" },
          { en: "Friends", es: "Amigos", de: "Freunde", nl: "Vrienden" },
          { en: "Neighbors", es: "Vecinos", de: "Nachbarn", nl: "Buren" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many parents does a child typically have?",
          es: "¿Cuántos padres tiene típicamente un niño?",
          de: "Wie viele Eltern hat ein Kind normalerweise?",
          nl: "Hoeveel ouders heeft een kind meestal?"
        },
        options: [
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "1", es: "1", de: "1", nl: "1" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What celebration happens when two people get married?",
          es: "¿Qué celebración ocurre cuando dos personas se casan?",
          de: "Welche Feier findet statt, wenn zwei Menschen heiraten?",
          nl: "Welke viering vindt plaats als twee mensen trouwen?"
        },
        options: [
          { en: "Wedding", es: "Boda", de: "Hochzeit", nl: "Bruiloft" },
          { en: "Birthday", es: "Cumpleaños", de: "Geburtstag", nl: "Verjaardag" },
          { en: "Graduation", es: "Graduación", de: "Abschluss", nl: "Afstuderen" },
          { en: "Party", es: "Fiesta", de: "Party", nl: "Feestje" }
        ],
        correctIndex: 0
      }
    ],

    // Day 27 - July 27th: Hobbies and Interests
    day27: [
      {
        question: {
          en: "What hobby involves taking pictures?",
          es: "¿Qué pasatiempo implica tomar fotos?",
          de: "Welches Hobby beinhaltet das Aufnehmen von Bildern?",
          nl: "Welke hobby houdt in dat je foto's maakt?"
        },
        options: [
          { en: "Photography", es: "Fotografía", de: "Fotografie", nl: "Fotografie" },
          { en: "Reading", es: "Lectura", de: "Lesen", nl: "Lezen" },
          { en: "Cooking", es: "Cocinar", de: "Kochen", nl: "Koken" },
          { en: "Swimming", es: "Natación", de: "Schwimmen", nl: "Zwemmen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do you need to go fishing?",
          es: "¿Qué necesitas para ir a pescar?",
          de: "Was braucht man zum Angeln?",
          nl: "Wat heb je nodig om te gaan vissen?"
        },
        options: [
          { en: "Fishing rod and bait", es: "Caña de pescar y cebo", de: "Angelrute und Köder", nl: "Hengel en aas" },
          { en: "Tennis racket", es: "Raqueta de tenis", de: "Tennisschläger", nl: "Tennisracket" },
          { en: "Basketball", es: "Baloncesto", de: "Basketball", nl: "Basketbal" },
          { en: "Paint brushes", es: "Pinceles", de: "Pinsel", nl: "Kwasten" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What hobby involves growing plants?",
          es: "¿Qué pasatiempo implica cultivar plantas?",
          de: "Welches Hobby beinhaltet das Züchten von Pflanzen?",
          nl: "Welke hobby houdt in dat je planten kweekt?"
        },
        options: [
          { en: "Gardening", es: "Jardinería", de: "Gärtnern", nl: "Tuinieren" },
          { en: "Dancing", es: "Baile", de: "Tanzen", nl: "Dansen" },
          { en: "Singing", es: "Cantar", de: "Singen", nl: "Zingen" },
          { en: "Drawing", es: "Dibujar", de: "Zeichnen", nl: "Tekenen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do you collect in the hobby of stamp collecting?",
          es: "¿Qué coleccionas en el pasatiempo de coleccionar sellos?",
          de: "Was sammelt man beim Briefmarkensammeln?",
          nl: "Wat verzamel je bij de hobby postzegels verzamelen?"
        },
        options: [
          { en: "Stamps", es: "Sellos", de: "Briefmarken", nl: "Postzegels" },
          { en: "Coins", es: "Monedas", de: "Münzen", nl: "Munten" },
          { en: "Rocks", es: "Rocas", de: "Steine", nl: "Stenen" },
          { en: "Books", es: "Libros", de: "Bücher", nl: "Boeken" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What activity involves moving to music?",
          es: "¿Qué actividad implica moverse con la música?",
          de: "Welche Aktivität beinhaltet das Bewegen zur Musik?",
          nl: "Welke activiteit houdt in dat je beweegt op muziek?"
        },
        options: [
          { en: "Dancing", es: "Baile", de: "Tanzen", nl: "Dansen" },
          { en: "Sleeping", es: "Dormir", de: "Schlafen", nl: "Slapen" },
          { en: "Eating", es: "Comer", de: "Essen", nl: "Eten" },
          { en: "Reading", es: "Leer", de: "Lesen", nl: "Lezen" }
        ],
        correctIndex: 0
      }
    ],

    // Day 28 - July 28th: Colors and Art
    day28: [
      {
        question: {
          en: "What color do you get when you mix red and white?",
          es: "¿Qué color obtienes cuando mezclas rojo y blanco?",
          de: "Welche Farbe bekommt man, wenn man Rot und Weiß mischt?",
          nl: "Welke kleur krijg je als je rood en wit mengt?"
        },
        options: [
          { en: "Pink", es: "Rosa", de: "Rosa", nl: "Roze" },
          { en: "Purple", es: "Morado", de: "Lila", nl: "Paars" },
          { en: "Orange", es: "Naranja", de: "Orange", nl: "Oranje" },
          { en: "Green", es: "Verde", de: "Grün", nl: "Groen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What color do you get when you mix blue and yellow?",
          es: "¿Qué color obtienes cuando mezclas azul y amarillo?",
          de: "Welche Farbe bekommt man, wenn man Blau und Gelb mischt?",
          nl: "Welke kleur krijg je als je blauw en geel mengt?"
        },
        options: [
          { en: "Green", es: "Verde", de: "Grün", nl: "Groen" },
          { en: "Purple", es: "Morado", de: "Lila", nl: "Paars" },
          { en: "Orange", es: "Naranja", de: "Orange", nl: "Oranje" },
          { en: "Brown", es: "Marrón", de: "Braun", nl: "Bruin" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What tool do artists use to apply paint to canvas?",
          es: "¿Qué herramienta usan los artistas para aplicar pintura al lienzo?",
          de: "Welches Werkzeug verwenden Künstler, um Farbe auf die Leinwand aufzutragen?",
          nl: "Welk gereedschap gebruiken kunstenaars om verf op canvas aan te brengen?"
        },
        options: [
          { en: "Paintbrush", es: "Pincel", de: "Pinsel", nl: "Kwast" },
          { en: "Spoon", es: "Cuchara", de: "Löffel", nl: "Lepel" },
          { en: "Fork", es: "Tenedor", de: "Gabel", nl: "Vork" },
          { en: "Knife", es: "Cuchillo", de: "Messer", nl: "Mes" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is a sculpture made of stone called?",
          es: "¿Cómo se llama una escultura hecha de piedra?",
          de: "Wie nennt man eine Skulptur aus Stein?",
          nl: "Hoe heet een sculptuur gemaakt van steen?"
        },
        options: [
          { en: "Stone sculpture", es: "Escultura de piedra", de: "Steinskulptur", nl: "Stenen sculptuur" },
          { en: "Paper art", es: "Arte de papel", de: "Papierkunst", nl: "Papierkunst" },
          { en: "Water painting", es: "Pintura al agua", de: "Wassermalerei", nl: "Waterschildering" },
          { en: "Digital art", es: "Arte digital", de: "Digitale Kunst", nl: "Digitale kunst" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do we call the art of beautiful handwriting?",
          es: "¿Cómo llamamos al arte de la escritura hermosa a mano?",
          de: "Wie nennen wir die Kunst des schönen Handschreibens?",
          nl: "Hoe noemen we de kunst van mooi handschrift?"
        },
        options: [
          { en: "Calligraphy", es: "Caligrafía", de: "Kalligrafie", nl: "Kalligrafie" },
          { en: "Typing", es: "Mecanografía", de: "Tippen", nl: "Typen" },
          { en: "Printing", es: "Imprimir", de: "Drucken", nl: "Printen" },
          { en: "Copying", es: "Copiar", de: "Kopieren", nl: "Kopiëren" }
        ],
        correctIndex: 0
      }
    ],

    // Day 29 - July 29th: Buildings and Architecture
    day29: [
      {
        question: {
          en: "What is the tallest type of building called?",
          es: "¿Cómo se llama el tipo de edificio más alto?",
          de: "Wie nennt man die höchste Art von Gebäude?",
          nl: "Hoe heet het hoogste type gebouw?"
        },
        options: [
          { en: "Skyscraper", es: "Rascacielos", de: "Wolkenkratzer", nl: "Wolkenkrabber" },
          { en: "House", es: "Casa", de: "Haus", nl: "Huis" },
          { en: "Shop", es: "Tienda", de: "Laden", nl: "Winkel" },
          { en: "Garage", es: "Garaje", de: "Garage", nl: "Garage" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What famous tower is in Paris, France?",
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
          en: "What do you call the entrance to a building?",
          es: "¿Cómo llamas a la entrada de un edificio?",
          de: "Wie nennt man den Eingang zu einem Gebäude?",
          nl: "Hoe noem je de ingang van een gebouw?"
        },
        options: [
          { en: "Door", es: "Puerta", de: "Tür", nl: "Deur" },
          { en: "Window", es: "Ventana", de: "Fenster", nl: "Raam" },
          { en: "Roof", es: "Techo", de: "Dach", nl: "Dak" },
          { en: "Wall", es: "Pared", de: "Wand", nl: "Muur" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What covers the top of a building?",
          es: "¿Qué cubre la parte superior de un edificio?",
          de: "Was bedeckt die Oberseite eines Gebäudes?",
          nl: "Wat bedekt de bovenkant van een gebouw?"
        },
        options: [
          { en: "Roof", es: "Techo", de: "Dach", nl: "Dak" },
          { en: "Floor", es: "Piso", de: "Boden", nl: "Vloer" },
          { en: "Wall", es: "Pared", de: "Wand", nl: "Muur" },
          { en: "Door", es: "Puerta", de: "Tür", nl: "Deur" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What structure helps you get from one floor to another?",
          es: "¿Qué estructura te ayuda a ir de un piso a otro?",
          de: "Welche Struktur hilft dir, von einem Stockwerk zu einem anderen zu gelangen?",
          nl: "Welke structuur helpt je om van de ene verdieping naar de andere te gaan?"
        },
        options: [
          { en: "Stairs", es: "Escaleras", de: "Treppen", nl: "Trap" },
          { en: "Window", es: "Ventana", de: "Fenster", nl: "Raam" },
          { en: "Door", es: "Puerta", de: "Tür", nl: "Deur" },
          { en: "Wall", es: "Pared", de: "Wand", nl: "Muur" }
        ],
        correctIndex: 0
      }
    ],

    // Day 30 - July 30th: Summer Fun and Beach
    day30: [
      {
        question: {
          en: "What do you build in sand at the beach?",
          es: "¿Qué construyes en la arena en la playa?",
          de: "Was baut man im Sand am Strand?",
          nl: "Wat bouw je in het zand op het strand?"
        },
        options: [
          { en: "Sandcastle", es: "Castillo de arena", de: "Sandburg", nl: "Zandkasteel" },
          { en: "Snowman", es: "Muñeco de nieve", de: "Schneemann", nl: "Sneeuwpop" },
          { en: "House", es: "Casa", de: "Haus", nl: "Huis" },
          { en: "Car", es: "Coche", de: "Auto", nl: "Auto" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do you use to protect your skin from the sun?",
          es: "¿Qué usas para proteger tu piel del sol?",
          de: "Was benutzt man zum Schutz der Haut vor der Sonne?",
          nl: "Wat gebruik je om je huid te beschermen tegen de zon?"
        },
        options: [
          { en: "Sunscreen", es: "Protector solar", de: "Sonnencreme", nl: "Zonnebrandcrème" },
          { en: "Soap", es: "Jabón", de: "Seife", nl: "Zeep" },
          { en: "Shampoo", es: "Champú", de: "Shampoo", nl: "Shampoo" },
          { en: "Lotion", es: "Loción", de: "Lotion", nl: "Lotion" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do you wear on your feet at the beach?",
          es: "¿Qué te pones en los pies en la playa?",
          de: "Was trägt man an den Füßen am Strand?",
          nl: "Wat draag je aan je voeten op het strand?"
        },
        options: [
          { en: "Flip-flops", es: "Chancletas", de: "Flip-Flops", nl: "Slippers" },
          { en: "Snow boots", es: "Botas de nieve", de: "Schneestiefel", nl: "Snowboots" },
          { en: "High heels", es: "Tacones altos", de: "High Heels", nl: "Hoge hakken" },
          { en: "Ice skates", es: "Patines de hielo", de: "Schlittschuhe", nl: "Schaatsen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What activity do you do in the water at the beach?",
          es: "¿Qué actividad haces en el agua en la playa?",
          de: "Welche Aktivität macht man im Wasser am Strand?",
          nl: "Welke activiteit doe je in het water op het strand?"
        },
        options: [
          { en: "Swimming", es: "Nadar", de: "Schwimmen", nl: "Zwemmen" },
          { en: "Skiing", es: "Esquiar", de: "Skifahren", nl: "Skiën" },
          { en: "Ice skating", es: "Patinar sobre hielo", de: "Schlittschuhlaufen", nl: "Schaatsen" },
          { en: "Sledding", es: "Trineo", de: "Schlittenfahren", nl: "Sleeën" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do you collect on the beach?",
          es: "¿Qué coleccionas en la playa?",
          de: "Was sammelt man am Strand?",
          nl: "Wat verzamel je op het strand?"
        },
        options: [
          { en: "Seashells", es: "Caracolas", de: "Muscheln", nl: "Schelpen" },
          { en: "Snow", es: "Nieve", de: "Schnee", nl: "Sneeuw" },
          { en: "Leaves", es: "Hojas", de: "Blätter", nl: "Bladeren" },
          { en: "Ice", es: "Hielo", de: "Eis", nl: "IJs" }
        ],
        correctIndex: 0
      }
    ],

    // Day 31 - July 31st: End of Summer Month
    day31: [
      {
        question: {
          en: "What comes after July?",
          es: "¿Qué viene después de julio?",
          de: "Was kommt nach Juli?",
          nl: "Wat komt na juli?"
        },
        options: [
          { en: "August", es: "Agosto", de: "August", nl: "Augustus" },
          { en: "June", es: "Junio", de: "Juni", nl: "Juni" },
          { en: "September", es: "Septiembre", de: "September", nl: "September" },
          { en: "May", es: "Mayo", de: "Mai", nl: "Mei" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do students often do during summer break?",
          es: "¿Qué hacen a menudo los estudiantes durante las vacaciones de verano?",
          de: "Was machen Schüler oft während der Sommerferien?",
          nl: "Wat doen studenten vaak tijdens de zomervakantie?"
        },
        options: [
          { en: "Go on vacation", es: "Van de vacaciones", de: "In den Urlaub fahren", nl: "Op vakantie gaan" },
          { en: "Study for exams", es: "Estudiar para exámenes", de: "Für Prüfungen lernen", nl: "Studeren voor examens" },
          { en: "Attend classes", es: "Asistir a clases", de: "Am Unterricht teilnehmen", nl: "Naar de les gaan" },
          { en: "Do homework", es: "Hacer tarea", de: "Hausaufgaben machen", nl: "Huiswerk maken" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What type of weather is typical for July in many places?",
          es: "¿Qué tipo de clima es típico de julio en muchos lugares?",
          de: "Welche Art von Wetter ist typisch für Juli an vielen Orten?",
          nl: "Wat voor weer is typisch voor juli op veel plaatsen?"
        },
        options: [
          { en: "Hot and sunny", es: "Caliente y soleado", de: "Heiß und sonnig", nl: "Heet en zonnig" },
          { en: "Cold and snowy", es: "Frío y nevado", de: "Kalt und schneereich", nl: "Koud en sneeuwachtig" },
          { en: "Cool and rainy", es: "Fresco y lluvioso", de: "Kühl und regnerisch", nl: "Koel en regenachtig" },
          { en: "Windy and gray", es: "Ventoso y gris", de: "Windig und grau", nl: "Winderig en grijs" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What summer activity involves cooking outdoors?",
          es: "¿Qué actividad de verano implica cocinar al aire libre?",
          de: "Welche Sommeraktivität beinhaltet das Kochen im Freien?",
          nl: "Welke zomeractiviteit houdt koken buiten in?"
        },
        options: [
          { en: "Barbecue", es: "Barbacoa", de: "Grillen", nl: "Barbecue" },
          { en: "Ice skating", es: "Patinar sobre hielo", de: "Schlittschuhlaufen", nl: "Schaatsen" },
          { en: "Sledding", es: "Trineo", de: "Schlittenfahren", nl: "Sleeën" },
          { en: "Skiing", es: "Esquiar", de: "Skifahren", nl: "Skiën" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What should you always remember to do before going swimming?",
          es: "¿Qué debes recordar siempre hacer antes de ir a nadar?",
          de: "Was sollte man immer daran denken zu tun, bevor man schwimmen geht?",
          nl: "Wat moet je altijd onthouden te doen voordat je gaat zwemmen?"
        },
        options: [
          { en: "Apply sunscreen", es: "Aplicar protector solar", de: "Sonnencreme auftragen", nl: "Zonnebrandcrème aanbrengen" },
          { en: "Eat a big meal", es: "Comer una comida abundante", de: "Eine große Mahlzeit essen", nl: "Een grote maaltijd eten" },
          { en: "Take a nap", es: "Tomar una siesta", de: "Ein Nickerchen machen", nl: "Een dutje doen" },
          { en: "Wear winter clothes", es: "Usar ropa de invierno", de: "Winterkleidung tragen", nl: "Winterkleding dragen" }
        ],
        correctIndex: 0
      }
    ]
  };

  // Export July challenges
  if (typeof window.addMonthChallenges === 'function') {
    window.addMonthChallenges('july', julyChallenges);
  }

})();