// May Daily Challenges - Complete with all 31 days × 5 questions each = 155 total questions
(function() {
  
  const mayChallenges = {
    name: {
      en: "May Daily Challenges",
      es: "Desafíos Diarios de Mayo", 
      de: "Mai Tägliche Herausforderungen",
      nl: "Mei Dagelijkse Uitdagingen"
    },
    
    // Day 1 - May 1st: May Day & Spring
    day1: [
      {
        question: {
          en: "What season is May in?",
          es: "¿En qué estación está mayo?",
          de: "In welcher Jahreszeit ist Mai?",
          nl: "In welk seizoen valt mei?"
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
          en: "How many days are in May?",
          es: "¿Cuántos días tiene mayo?",
          de: "Wie viele Tage hat der Mai?",
          nl: "Hoeveel dagen heeft mei?"
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
          en: "What birthstone belongs to May?",
          es: "¿Qué piedra de nacimiento pertenece a mayo?",
          de: "Welcher Geburtsstein gehört zum Mai?",
          nl: "Welke geboortesteen hoort bij mei?"
        },
        options: [
          { en: "Emerald", es: "Esmeralda", de: "Smaragd", nl: "Smaragd" },
          { en: "Ruby", es: "Rubí", de: "Rubin", nl: "Robijn" },
          { en: "Diamond", es: "Diamante", de: "Diamant", nl: "Diamant" },
          { en: "Sapphire", es: "Zafiro", de: "Saphir", nl: "Saffier" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What holiday do many countries celebrate on May 1st?",
          es: "¿Qué feriado celebran muchos países el 1 de mayo?",
          de: "Welchen Feiertag feiern viele Länder am 1. Mai?",
          nl: "Welke feestdag vieren veel landen op 1 mei?"
        },
        options: [
          { en: "May Day", es: "Día del Trabajador", de: "Maifeiertag", nl: "Dag van de Arbeid" },
          { en: "Christmas", es: "Navidad", de: "Weihnachten", nl: "Kerstmis" },
          { en: "Halloween", es: "Halloween", de: "Halloween", nl: "Halloween" },
          { en: "New Year", es: "Año Nuevo", de: "Neujahr", nl: "Nieuwjaar" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What flowers are popular gifts on Mother's Day in May?",
          es: "¿Qué flores son regalos populares en el Día de la Madre en mayo?",
          de: "Welche Blumen sind am Muttertag im Mai beliebte Geschenke?",
          nl: "Welke bloemen zijn populaire cadeaus op Moederdag in mei?"
        },
        options: [
          { en: "Roses and carnations", es: "Rosas y claveles", de: "Rosen und Nelken", nl: "Rozen en anjers" },
          { en: "Weeds", es: "Malas hierbas", de: "Unkraut", nl: "Onkruid" },
          { en: "Dead plants", es: "Plantas muertas", de: "Tote Pflanzen", nl: "Dode planten" },
          { en: "Plastic flowers", es: "Flores de plástico", de: "Plastikblumen", nl: "Plastic bloemen" }
        ],
        correctIndex: 0
      }
    ],

    // Day 2 - May 2nd: Mother's Day Preparation
    day2: [
      {
        question: {
          en: "When is Mother's Day usually celebrated in many countries?",
          es: "¿Cuándo se celebra generalmente el Día de la Madre en muchos países?",
          de: "Wann wird der Muttertag in vielen Ländern normalerweise gefeiert?",
          nl: "Wanneer wordt Moederdag meestal gevierd in veel landen?"
        },
        options: [
          { en: "Second Sunday in May", es: "Segundo domingo de mayo", de: "Zweiter Sonntag im Mai", nl: "Tweede zondag in mei" },
          { en: "First Monday in May", es: "Primer lunes de mayo", de: "Erster Montag im Mai", nl: "Eerste maandag in mei" },
          { en: "Last Friday in May", es: "Último viernes de mayo", de: "Letzter Freitag im Mai", nl: "Laatste vrijdag in mei" },
          { en: "Any random day", es: "Cualquier día al azar", de: "Ein beliebiger Tag", nl: "Een willekeurige dag" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do children often make for their mothers?",
          es: "¿Qué hacen a menudo los niños para sus madres?",
          de: "Was machen Kinder oft für ihre Mütter?",
          nl: "Wat maken kinderen vaak voor hun moeders?"
        },
        options: [
          { en: "Handmade cards", es: "Tarjetas hechas a mano", de: "Handgemachte Karten", nl: "Zelfgemaakte kaarten" },
          { en: "Homework", es: "Tarea", de: "Hausaufgaben", nl: "Huiswerk" },
          { en: "Mess", es: "Desorden", de: "Unordnung", nl: "Rommel" },
          { en: "Noise", es: "Ruido", de: "Lärm", nl: "Lawaai" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What color is often associated with Mother's Day?",
          es: "¿Qué color se asocia a menudo con el Día de la Madre?",
          de: "Welche Farbe wird oft mit dem Muttertag verbunden?",
          nl: "Welke kleur wordt vaak geassocieerd met Moederdag?"
        },
        options: [
          { en: "Pink", es: "Rosa", de: "Rosa", nl: "Roze" },
          { en: "Black", es: "Negro", de: "Schwarz", nl: "Zwart" },
          { en: "Gray", es: "Gris", de: "Grau", nl: "Grijs" },
          { en: "Brown", es: "Marrón", de: "Braun", nl: "Bruin" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do families often do together on Mother's Day?",
          es: "¿Qué hacen a menudo las familias juntas en el Día de la Madre?",
          de: "Was machen Familien oft zusammen am Muttertag?",
          nl: "Wat doen families vaak samen op Moederdag?"
        },
        options: [
          { en: "Have a special meal", es: "Tener una comida especial", de: "Ein besonderes Essen haben", nl: "Een speciale maaltijd hebben" },
          { en: "Go to work", es: "Ir a trabajar", de: "Zur Arbeit gehen", nl: "Naar het werk gaan" },
          { en: "Sleep all day", es: "Dormir todo el día", de: "Den ganzen Tag schlafen", nl: "De hele dag slapen" },
          { en: "Argue", es: "Discutir", de: "Streiten", nl: "Ruziemaken" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the main purpose of Mother's Day?",
          es: "¿Cuál es el propósito principal del Día de la Madre?",
          de: "Was ist der Hauptzweck des Muttertags?",
          nl: "Wat is het hoofddoel van Moederdag?"
        },
        options: [
          { en: "To honor mothers", es: "Honrar a las madres", de: "Mütter zu ehren", nl: "Moeders eren" },
          { en: "To sell things", es: "Vender cosas", de: "Dinge zu verkaufen", nl: "Dingen verkopen" },
          { en: "To make noise", es: "Hacer ruido", de: "Lärm zu machen", nl: "Lawaai maken" },
          { en: "To stay busy", es: "Mantenerse ocupado", de: "Beschäftigt zu bleiben", nl: "Druk blijven" }
        ],
        correctIndex: 0
      }
    ],

    // Day 3 - May 3rd: Spring Weather
    day3: [
      {
        question: {
          en: "What kind of weather is common in May?",
          es: "¿Qué tipo de clima es común en mayo?",
          de: "Welches Wetter ist im Mai üblich?",
          nl: "Wat voor weer is gewoon in mei?"
        },
        options: [
          { en: "Mild and warm", es: "Suave y cálido", de: "Mild und warm", nl: "Zacht en warm" },
          { en: "Very cold", es: "Muy frío", de: "Sehr kalt", nl: "Erg koud" },
          { en: "Always snowing", es: "Siempre nevando", de: "Immer schneit", nl: "Altijd sneeuw" },
          { en: "Always stormy", es: "Siempre tormentoso", de: "Immer stürmisch", nl: "Altijd stormachtig" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do people start doing more in May?",
          es: "¿Qué empiezan a hacer más las personas en mayo?",
          de: "Was fangen Menschen im Mai mehr an zu tun?",
          nl: "Wat beginnen mensen meer te doen in mei?"
        },
        options: [
          { en: "Going outside", es: "Salir afuera", de: "Nach draußen gehen", nl: "Naar buiten gaan" },
          { en: "Hiding indoors", es: "Esconderse adentro", de: "Sich drinnen verstecken", nl: "Binnen verstoppen" },
          { en: "Wearing thick coats", es: "Usar abrigos gruesos", de: "Dicke Mäntel tragen", nl: "Dikke jassen dragen" },
          { en: "Turning on heaters", es: "Encender calentadores", de: "Heizungen anmachen", nl: "Kachels aanzetten" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do people often do in their gardens in May?",
          es: "¿Qué hacen a menudo las personas en sus jardines en mayo?",
          de: "Was machen Menschen oft in ihren Gärten im Mai?",
          nl: "Wat doen mensen vaak in hun tuinen in mei?"
        },
        options: [
          { en: "Plant flowers and vegetables", es: "Plantar flores y verduras", de: "Blumen und Gemüse pflanzen", nl: "Bloemen en groenten planten" },
          { en: "Remove all plants", es: "Quitar todas las plantas", de: "Alle Pflanzen entfernen", nl: "Alle planten verwijderen" },
          { en: "Cover everything", es: "Cubrir todo", de: "Alles abdecken", nl: "Alles bedekken" },
          { en: "Do nothing", es: "No hacer nada", de: "Nichts tun", nl: "Niets doen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What clothes do people wear in May?",
          es: "¿Qué ropa usan las personas en mayo?",
          de: "Welche Kleidung tragen Menschen im Mai?",
          nl: "Welke kleding dragen mensen in mei?"
        },
        options: [
          { en: "Light jackets or sweaters", es: "Chaquetas ligeras o suéteres", de: "Leichte Jacken oder Pullover", nl: "Lichte jasjes of truien" },
          { en: "Heavy winter coats", es: "Abrigos pesados de invierno", de: "Schwere Wintermäntel", nl: "Zware winterjassen" },
          { en: "Only swimsuits", es: "Solo trajes de baño", de: "Nur Badeanzüge", nl: "Alleen zwempakken" },
          { en: "Nothing at all", es: "Nada en absoluto", de: "Gar nichts", nl: "Helemaal niets" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What happens to daylight in May?",
          es: "¿Qué pasa con la luz del día en mayo?",
          de: "Was passiert mit dem Tageslicht im Mai?",
          nl: "Wat gebeurt er met het daglicht in mei?"
        },
        options: [
          { en: "Days get longer", es: "Los días se hacen más largos", de: "Die Tage werden länger", nl: "Dagen worden langer" },
          { en: "Days get shorter", es: "Los días se hacen más cortos", de: "Die Tage werden kürzer", nl: "Dagen worden korter" },
          { en: "No sun at all", es: "No hay sol en absoluto", de: "Gar keine Sonne", nl: "Helemaal geen zon" },
          { en: "Always dark", es: "Siempre oscuro", de: "Immer dunkel", nl: "Altijd donker" }
        ],
        correctIndex: 0
      }
    ],

    // Day 4 - May 4th: Gardening & Nature
    day4: [
      {
        question: {
          en: "What tool is commonly used for digging in gardens?",
          es: "¿Qué herramienta se usa comúnmente para cavar en jardines?",
          de: "Welches Werkzeug wird häufig zum Graben in Gärten verwendet?",
          nl: "Welk gereedschap wordt vaak gebruikt voor graven in tuinen?"
        },
        options: [
          { en: "Shovel", es: "Pala", de: "Schaufel", nl: "Schop" },
          { en: "Fork", es: "Tenedor", de: "Gabel", nl: "Vork" },
          { en: "Spoon", es: "Cuchara", de: "Löffel", nl: "Lepel" },
          { en: "Knife", es: "Cuchillo", de: "Messer", nl: "Mes" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which flowers are known for blooming in late spring?",
          es: "¿Qué flores son conocidas por florecer a finales de primavera?",
          de: "Welche Blumen sind dafür bekannt, im Spätfrühling zu blühen?",
          nl: "Welke bloemen staan bekend om hun bloei in de late lente?"
        },
        options: [
          { en: "Tulips and daffodils", es: "Tulipanes y narcisos", de: "Tulpen und Narzissen", nl: "Tulpen en narcissen" },
          { en: "Poinsettias", es: "Flor de Pascua", de: "Weihnachtssterne", nl: "Kerststerren" },
          { en: "Pine cones", es: "Piñas", de: "Tannenzapfen", nl: "Dennenappels" },
          { en: "Cacti", es: "Cactus", de: "Kakteen", nl: "Cactussen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do seeds need to germinate?",
          es: "¿Qué necesitan las semillas para germinar?",
          de: "Was brauchen Samen zum Keimen?",
          nl: "Wat hebben zaden nodig om te kiemen?"
        },
        options: [
          { en: "Water, warmth, and sunlight", es: "Agua, calor y luz solar", de: "Wasser, Wärme und Sonnenlicht", nl: "Water, warmte en zonlicht" },
          { en: "Ice and snow", es: "Hielo y nieve", de: "Eis und Schnee", nl: "Ijs en sneeuw" },
          { en: "Only darkness", es: "Solo oscuridad", de: "Nur Dunkelheit", nl: "Alleen duisternis" },
          { en: "Television", es: "Televisión", de: "Fernsehen", nl: "Televisie" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What insects are helpful in gardens?",
          es: "¿Qué insectos son útiles en los jardines?",
          de: "Welche Insekten sind hilfreich in Gärten?",
          nl: "Welke insecten zijn nuttig in tuinen?"
        },
        options: [
          { en: "Bees and ladybugs", es: "Abejas y mariquitas", de: "Bienen und Marienkäfer", nl: "Bijen en lieveheersbeestjes" },
          { en: "Mosquitoes", es: "Mosquitos", de: "Mücken", nl: "Muggen" },
          { en: "Wasps", es: "Avispas", de: "Wespen", nl: "Wespen" },
          { en: "Flies", es: "Moscas", de: "Fliegen", nl: "Vliegen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "When is the best time to plant most vegetables?",
          es: "¿Cuándo es el mejor momento para plantar la mayoría de las verduras?",
          de: "Wann ist die beste Zeit, um die meisten Gemüsesorten zu pflanzen?",
          nl: "Wanneer is de beste tijd om de meeste groenten te planten?"
        },
        options: [
          { en: "After the last frost", es: "Después de la última helada", de: "Nach dem letzten Frost", nl: "Na de laatste vorst" },
          { en: "During winter", es: "Durante el invierno", de: "Im Winter", nl: "Tijdens de winter" },
          { en: "Never", es: "Nunca", de: "Niemals", nl: "Nooit" },
          { en: "Only at night", es: "Solo por la noche", de: "Nur nachts", nl: "Alleen 's nachts" }
        ],
        correctIndex: 0
      }
    ],

    // Day 5 - May 5th: Cinco de Mayo & Mexican Culture
    day5: [
      {
        question: {
          en: "What does 'Cinco de Mayo' mean in English?",
          es: "¿Qué significa 'Cinco de Mayo' en inglés?",
          de: "Was bedeutet 'Cinco de Mayo' auf Englisch?",
          nl: "Wat betekent 'Cinco de Mayo' in het Engels?"
        },
        options: [
          { en: "Fifth of May", es: "Cinco de mayo", de: "Fünfter Mai", nl: "Vijfde mei" },
          { en: "May Day", es: "Día de Mayo", de: "Maifeiertag", nl: "Meidag" },
          { en: "Five mayos", es: "Cinco mayos", de: "Fünf Mayos", nl: "Vijf mayo's" },
          { en: "May Festival", es: "Festival de Mayo", de: "Mai-Festival", nl: "Mei Festival" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Cinco de Mayo commemorates which historical event?",
          es: "El Cinco de Mayo conmemora qué evento histórico?",
          de: "Cinco de Mayo gedenkt welchem historischen Ereignis?",
          nl: "Cinco de Mayo herdenkt welke historische gebeurtenis?"
        },
        options: [
          { en: "Battle of Puebla", es: "Batalla de Puebla", de: "Schlacht von Puebla", nl: "Slag bij Puebla" },
          { en: "Mexican Independence", es: "Independencia Mexicana", de: "Mexikanische Unabhängigkeit", nl: "Mexicaanse Onafhankelijkheid" },
          { en: "Spanish arrival", es: "Llegada española", de: "Spanische Ankunft", nl: "Spaanse aankomst" },
          { en: "Aztec celebration", es: "Celebración azteca", de: "Aztekische Feier", nl: "Azteekse viering" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is a traditional Mexican food often eaten on Cinco de Mayo?",
          es: "¿Cuál es una comida tradicional mexicana que se come a menudo en Cinco de Mayo?",
          de: "Was ist ein traditionelles mexikanisches Essen, das oft am Cinco de Mayo gegessen wird?",
          nl: "Wat is een traditioneel Mexicaans gerecht dat vaak gegeten wordt op Cinco de Mayo?"
        },
        options: [
          { en: "Tacos", es: "Tacos", de: "Tacos", nl: "Taco's" },
          { en: "Pizza", es: "Pizza", de: "Pizza", nl: "Pizza" },
          { en: "Hamburgers", es: "Hamburguesas", de: "Hamburger", nl: "Hamburgers" },
          { en: "Sushi", es: "Sushi", de: "Sushi", nl: "Sushi" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What colors are on the Mexican flag?",
          es: "¿Qué colores tiene la bandera mexicana?",
          de: "Welche Farben hat die mexikanische Flagge?",
          nl: "Welke kleuren heeft de Mexicaanse vlag?"
        },
        options: [
          { en: "Green, white, and red", es: "Verde, blanco y rojo", de: "Grün, weiß und rot", nl: "Groen, wit en rood" },
          { en: "Blue, yellow, and red", es: "Azul, amarillo y rojo", de: "Blau, gelb und rot", nl: "Blauw, geel en rood" },
          { en: "Black, white, and green", es: "Negro, blanco y verde", de: "Schwarz, weiß und grün", nl: "Zwart, wit en groen" },
          { en: "Purple, pink, and orange", es: "Morado, rosa y naranja", de: "Lila, rosa und orange", nl: "Paars, roze en oranje" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the capital of Mexico?",
          es: "¿Cuál es la capital de México?",
          de: "Was ist die Hauptstadt von Mexiko?",
          nl: "Wat is de hoofdstad van Mexico?"
        },
        options: [
          { en: "Mexico City", es: "Ciudad de México", de: "Mexiko-Stadt", nl: "Mexico-Stad" },
          { en: "Guadalajara", es: "Guadalajara", de: "Guadalajara", nl: "Guadalajara" },
          { en: "Cancun", es: "Cancún", de: "Cancún", nl: "Cancún" },
          { en: "Tijuana", es: "Tijuana", de: "Tijuana", nl: "Tijuana" }
        ],
        correctIndex: 0
      }
    ],

    // Day 6 - May 6th: Animals & Spring Migration
    day6: [
      {
        question: {
          en: "Which birds often return in spring?",
          es: "¿Qué aves a menudo regresan en primavera?",
          de: "Welche Vögel kehren oft im Frühling zurück?",
          nl: "Welke vogels keren vaak terug in de lente?"
        },
        options: [
          { en: "Migratory birds", es: "Aves migratorias", de: "Zugvögel", nl: "Trekvogels" },
          { en: "Penguins", es: "Pingüinos", de: "Pinguine", nl: "Pinguïns" },
          { en: "Ostriches", es: "Avestruces", de: "Strauße", nl: "Struisvogels" },
          { en: "Chickens", es: "Pollos", de: "Hühner", nl: "Kippen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do many animals do in spring?",
          es: "¿Qué hacen muchos animales en primavera?",
          de: "Was machen viele Tiere im Frühling?",
          nl: "Wat doen veel dieren in de lente?"
        },
        options: [
          { en: "Have babies", es: "Tienen bebés", de: "Bekommen Babies", nl: "Krijgen baby's" },
          { en: "Hibernate", es: "Hibernan", de: "Winterschlaf halten", nl: "Winterslapen" },
          { en: "Fly to warmer places", es: "Vuelan a lugares más cálidos", de: "Fliegen an wärmere Orte", nl: "Vliegen naar warmere plaatsen" },
          { en: "Build igloos", es: "Construyen iglús", de: "Bauen Iglus", nl: "Bouwen iglo's" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What sound do baby birds make?",
          es: "¿Qué sonido hacen los pájaros bebé?",
          de: "Welchen Laut machen Vogelbabies?",
          nl: "Welk geluid maken baby vogels?"
        },
        options: [
          { en: "Chirping", es: "Piar", de: "Zwitschern", nl: "Tjilpen" },
          { en: "Barking", es: "Ladrar", de: "Bellen", nl: "Blaffen" },
          { en: "Mooing", es: "Mugir", de: "Muhen", nl: "Loeien" },
          { en: "Roaring", es: "Rugir", de: "Brüllen", nl: "Brullen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Where do birds build their nests?",
          es: "¿Dónde construyen sus nidos las aves?",
          de: "Wo bauen Vögel ihre Nester?",
          nl: "Waar bouwen vogels hun nesten?"
        },
        options: [
          { en: "In trees and bushes", es: "En árboles y arbustos", de: "In Bäumen und Sträuchern", nl: "In bomen en struiken" },
          { en: "In water", es: "En el agua", de: "Im Wasser", nl: "In water" },
          { en: "Underground", es: "Bajo tierra", de: "Unterirdisch", nl: "Ondergronds" },
          { en: "On the moon", es: "En la luna", de: "Auf dem Mond", nl: "Op de maan" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do butterflies emerge from?",
          es: "¿De qué emergen las mariposas?",
          de: "Woraus schlüpfen Schmetterlinge?",
          nl: "Waar komen vlinders uit tevoorschijn?"
        },
        options: [
          { en: "Cocoons", es: "Capullos", de: "Kokons", nl: "Cocons" },
          { en: "Eggs directly", es: "Directamente de huevos", de: "Direkt aus Eiern", nl: "Direct uit eieren" },
          { en: "Flowers", es: "Flores", de: "Blumen", nl: "Bloemen" },
          { en: "Rocks", es: "Rocas", de: "Felsen", nl: "Rotsen" }
        ],
        correctIndex: 0
      }
    ],

    // Day 7 - May 7th: Science & Weather
    day7: [
      {
        question: {
          en: "What happens to ice when it gets warm?",
          es: "¿Qué pasa con el hielo cuando se calienta?",
          de: "Was passiert mit Eis, wenn es warm wird?",
          nl: "Wat gebeurt er met ijs als het warm wordt?"
        },
        options: [
          { en: "It melts", es: "Se derrite", de: "Es schmilzt", nl: "Het smelt" },
          { en: "It gets bigger", es: "Se hace más grande", de: "Es wird größer", nl: "Het wordt groter" },
          { en: "It turns purple", es: "Se vuelve morado", de: "Es wird lila", nl: "Het wordt paars" },
          { en: "It flies away", es: "Vuela", de: "Es fliegt weg", nl: "Het vliegt weg" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What creates thunder during a storm?",
          es: "¿Qué crea el trueno durante una tormenta?",
          de: "Was erzeugt Donner während eines Sturms?",
          nl: "Wat veroorzaakt donder tijdens een storm?"
        },
        options: [
          { en: "Lightning", es: "Relámpago", de: "Blitz", nl: "Bliksem" },
          { en: "Wind", es: "Viento", de: "Wind", nl: "Wind" },
          { en: "Rain", es: "Lluvia", de: "Regen", nl: "Regen" },
          { en: "Clouds bumping", es: "Nubes chocando", de: "Wolken stoßen zusammen", nl: "Wolken botsen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do plants need from the sun?",
          es: "¿Qué necesitan las plantas del sol?",
          de: "Was brauchen Pflanzen von der Sonne?",
          nl: "Wat hebben planten van de zon nodig?"
        },
        options: [
          { en: "Light energy", es: "Energía luminosa", de: "Lichtenergie", nl: "Lichtenergie" },
          { en: "Loud noises", es: "Ruidos fuertes", de: "Laute Geräusche", nl: "Harde geluiden" },
          { en: "Television signals", es: "Señales de televisión", de: "Fernsehsignale", nl: "Televisiesignalen" },
          { en: "Nothing", es: "Nada", de: "Nichts", nl: "Niets" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What forms when water vapor cools in the sky?",
          es: "¿Qué se forma cuando el vapor de agua se enfría en el cielo?",
          de: "Was bildet sich, wenn Wasserdampf in der Luft abkühlt?",
          nl: "Wat vormt zich wanneer waterdamp afkoelt in de lucht?"
        },
        options: [
          { en: "Clouds", es: "Nubes", de: "Wolken", nl: "Wolken" },
          { en: "Stars", es: "Estrellas", de: "Sterne", nl: "Sterren" },
          { en: "Airplanes", es: "Aviones", de: "Flugzeuge", nl: "Vliegtuigen" },
          { en: "Mountains", es: "Montañas", de: "Berge", nl: "Bergen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What tool measures temperature?",
          es: "¿Qué instrumento mide la temperatura?",
          de: "Welches Werkzeug misst die Temperatur?",
          nl: "Welk gereedschap meet temperatuur?"
        },
        options: [
          { en: "Thermometer", es: "Termómetro", de: "Thermometer", nl: "Thermometer" },
          { en: "Ruler", es: "Regla", de: "Lineal", nl: "Liniaal" },
          { en: "Scale", es: "Báscula", de: "Waage", nl: "Weegschaal" },
          { en: "Clock", es: "Reloj", de: "Uhr", nl: "Klok" }
        ],
        correctIndex: 0
      }
    ],

    // Day 8 - May 8th: Geography & World
    day8: [
      {
        question: {
          en: "Which continent is Spain in?",
          es: "¿En qué continente está España?",
          de: "Auf welchem Kontinent liegt Spanien?",
          nl: "Op welk continent ligt Spanje?"
        },
        options: [
          { en: "Europe", es: "Europa", de: "Europa", nl: "Europa" },
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" },
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" },
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" }
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
          { en: "Arctic Ocean", es: "Océano Ártico", de: "Arktischer Ozean", nl: "Noordelijke IJszee" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the highest mountain in the world?",
          es: "¿Cuál es la montaña más alta del mundo?",
          de: "Was ist der höchste Berg der Welt?",
          nl: "Wat is de hoogste berg ter wereld?"
        },
        options: [
          { en: "Mount Everest", es: "Monte Everest", de: "Mount Everest", nl: "Mount Everest" },
          { en: "Mount Kilimanjaro", es: "Monte Kilimanjaro", de: "Kilimandscharo", nl: "Kilimanjaro" },
          { en: "Mount Fuji", es: "Monte Fuji", de: "Mount Fuji", nl: "Mount Fuji" },
          { en: "Mount McKinley", es: "Monte McKinley", de: "Mount McKinley", nl: "Mount McKinley" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which country is famous for tulips and windmills?",
          es: "¿Qué país es famoso por los tulipanes y molinos de viento?",
          de: "Welches Land ist berühmt für Tulpen und Windmühlen?",
          nl: "Welk land is beroemd om tulpen en windmolens?"
        },
        options: [
          { en: "Netherlands", es: "Países Bajos", de: "Niederlande", nl: "Nederland" },
          { en: "Germany", es: "Alemania", de: "Deutschland", nl: "Duitsland" },
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "Italy", es: "Italia", de: "Italien", nl: "Italië" }
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
          { en: "Thames River", es: "Río Támesis", de: "Themse", nl: "Theems" }
        ],
        correctIndex: 0
      }
    ],

    // Day 9 - May 9th: Food & Nutrition
    day9: [
      {
        question: {
          en: "What vitamin do we get from sunlight?",
          es: "¿Qué vitamina obtenemos de la luz solar?",
          de: "Welches Vitamin bekommen wir vom Sonnenlicht?",
          nl: "Welke vitamine krijgen we van zonlicht?"
        },
        options: [
          { en: "Vitamin D", es: "Vitamina D", de: "Vitamin D", nl: "Vitamine D" },
          { en: "Vitamin A", es: "Vitamina A", de: "Vitamin A", nl: "Vitamine A" },
          { en: "Vitamin B", es: "Vitamina B", de: "Vitamin B", nl: "Vitamine B" },
          { en: "Vitamin E", es: "Vitamina E", de: "Vitamin E", nl: "Vitamine E" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which food group do apples belong to?",
          es: "¿A qué grupo de alimentos pertenecen las manzanas?",
          de: "Zu welcher Lebensmittelgruppe gehören Äpfel?",
          nl: "Tot welke voedselgroep behoren appels?"
        },
        options: [
          { en: "Fruits", es: "Frutas", de: "Obst", nl: "Fruit" },
          { en: "Vegetables", es: "Verduras", de: "Gemüse", nl: "Groenten" },
          { en: "Grains", es: "Granos", de: "Getreide", nl: "Granen" },
          { en: "Dairy", es: "Lácteos", de: "Milchprodukte", nl: "Zuivel" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do we call the main meal of the day?",
          es: "¿Cómo llamamos a la comida principal del día?",
          de: "Wie nennen wir die Hauptmahlzeit des Tages?",
          nl: "Hoe noemen we de hoofdmaaltijd van de dag?"
        },
        options: [
          { en: "Dinner", es: "Cena", de: "Abendessen", nl: "Avondeten" },
          { en: "Snack", es: "Merienda", de: "Snack", nl: "Snack" },
          { en: "Dessert", es: "Postre", de: "Nachtisch", nl: "Dessert" },
          { en: "Appetizer", es: "Aperitivo", de: "Vorspeise", nl: "Voorgerecht" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What nutrient is pasta rich in?",
          es: "¿En qué nutriente es rica la pasta?",
          de: "Welcher Nährstoff ist in Nudeln reichlich vorhanden?",
          nl: "Welke voedingsstof zit er veel in pasta?"
        },
        options: [
          { en: "Carbohydrates", es: "Carbohidratos", de: "Kohlenhydrate", nl: "Koolhydraten" },
          { en: "Protein", es: "Proteína", de: "Protein", nl: "Eiwit" },
          { en: "Fat", es: "Grasa", de: "Fett", nl: "Vet" },
          { en: "Fiber", es: "Fibra", de: "Ballaststoffe", nl: "Vezels" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many glasses of water should we drink daily?",
          es: "¿Cuántos vasos de agua debemos beber diariamente?",
          de: "Wie viele Gläser Wasser sollten wir täglich trinken?",
          nl: "Hoeveel glazen water moeten we dagelijks drinken?"
        },
        options: [
          { en: "8 glasses", es: "8 vasos", de: "8 Gläser", nl: "8 glazen" },
          { en: "1 glass", es: "1 vaso", de: "1 Glas", nl: "1 glas" },
          { en: "20 glasses", es: "20 vasos", de: "20 Gläser", nl: "20 glazen" },
          { en: "No water needed", es: "No se necesita agua", de: "Kein Wasser nötig", nl: "Geen water nodig" }
        ],
        correctIndex: 0
      }
    ],

    // Day 10 - May 10th: Sports & Exercise
    day10: [
      {
        question: {
          en: "How many players are on a basketball team on the court?",
          es: "¿Cuántos jugadores hay en un equipo de baloncesto en la cancha?",
          de: "Wie viele Spieler sind in einem Basketballteam auf dem Platz?",
          nl: "Hoeveel spelers zitten er in een basketbalteam op het veld?"
        },
        options: [
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "11", es: "11", de: "11", nl: "11" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "9", es: "9", de: "9", nl: "9" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What sport uses a net and is played with hands?",
          es: "¿Qué deporte usa una red y se juega con las manos?",
          de: "Welcher Sport verwendet ein Netz und wird mit den Händen gespielt?",
          nl: "Welke sport gebruikt een net en wordt gespeeld met handen?"
        },
        options: [
          { en: "Volleyball", es: "Voleibol", de: "Volleyball", nl: "Volleybal" },
          { en: "Soccer", es: "Fútbol", de: "Fußball", nl: "Voetbal" },
          { en: "Hockey", es: "Hockey", de: "Hockey", nl: "Hockey" },
          { en: "Golf", es: "Golf", de: "Golf", nl: "Golf" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the most popular sport worldwide?",
          es: "¿Cuál es el deporte más popular del mundo?",
          de: "Was ist die beliebteste Sportart weltweit?",
          nl: "Wat is de populairste sport wereldwijd?"
        },
        options: [
          { en: "Soccer/Football", es: "Fútbol", de: "Fußball", nl: "Voetbal" },
          { en: "Basketball", es: "Baloncesto", de: "Basketball", nl: "Basketbal" },
          { en: "Tennis", es: "Tenis", de: "Tennis", nl: "Tennis" },
          { en: "Swimming", es: "Natación", de: "Schwimmen", nl: "Zwemmen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How often should children exercise each day?",
          es: "¿Con qué frecuencia deben hacer ejercicio los niños cada día?",
          de: "Wie oft sollten Kinder täglich Sport treiben?",
          nl: "Hoe vaak moeten kinderen elke dag sporten?"
        },
        options: [
          { en: "60 minutes", es: "60 minutos", de: "60 Minuten", nl: "60 minuten" },
          { en: "10 minutes", es: "10 minutos", de: "10 Minuten", nl: "10 minuten" },
          { en: "5 hours", es: "5 horas", de: "5 Stunden", nl: "5 uur" },
          { en: "Never", es: "Nunca", de: "Niemals", nl: "Nooit" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What equipment do you need to play tennis?",
          es: "¿Qué equipo necesitas para jugar tenis?",
          de: "Welche Ausrüstung brauchst du zum Tennisspielen?",
          nl: "Welke uitrusting heb je nodig om tennis te spelen?"
        },
        options: [
          { en: "Racket and ball", es: "Raqueta y pelota", de: "Schläger und Ball", nl: "Racket en bal" },
          { en: "Just a ball", es: "Solo una pelota", de: "Nur ein Ball", nl: "Alleen een bal" },
          { en: "Gloves", es: "Guantes", de: "Handschuhe", nl: "Handschoenen" },
          { en: "Helmet", es: "Casco", de: "Helm", nl: "Helm" }
        ],
        correctIndex: 0
      }
    ],

    // Day 11 - May 11th: History & Culture
    day11: [
      {
        question: {
          en: "Who was the first president of the United States?",
          es: "¿Quién fue el primer presidente de los Estados Unidos?",
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
          en: "Which ancient wonder was located in Egypt?",
          es: "¿Qué maravilla antigua se ubicaba en Egipto?",
          de: "Welches antike Wunder befand sich in Ägypten?",
          nl: "Welk oud wonder bevond zich in Egypte?"
        },
        options: [
          { en: "Great Pyramid of Giza", es: "Gran Pirámide de Giza", de: "Große Pyramide von Gizeh", nl: "Grote Piramide van Gizeh" },
          { en: "Colossus of Rhodes", es: "Coloso de Rodas", de: "Koloss von Rhodos", nl: "Kolossus van Rhodos" },
          { en: "Hanging Gardens", es: "Jardines Colgantes", de: "Hängende Gärten", nl: "Hangende Tuinen" },
          { en: "Lighthouse of Alexandria", es: "Faro de Alejandría", de: "Leuchtturm von Alexandria", nl: "Vuurtoren van Alexandrië" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What language did the ancient Romans speak?",
          es: "¿Qué idioma hablaban los antiguos romanos?",
          de: "Welche Sprache sprachen die alten Römer?",
          nl: "Welke taal spraken de oude Romeinen?"
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
          en: "Which civilization built Machu Picchu?",
          es: "¿Qué civilización construyó Machu Picchu?",
          de: "Welche Zivilisation baute Machu Picchu?",
          nl: "Welke beschaving bouwde Machu Picchu?"
        },
        options: [
          { en: "Incas", es: "Incas", de: "Inkas", nl: "Inca's" },
          { en: "Mayans", es: "Mayas", de: "Mayas", nl: "Maya's" },
          { en: "Aztecs", es: "Aztecas", de: "Azteken", nl: "Azteken" },
          { en: "Romans", es: "Romanos", de: "Römer", nl: "Romeinen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "In which century did Christopher Columbus reach America?",
          es: "¿En qué siglo llegó Cristóbal Colón a América?",
          de: "In welchem Jahrhundert erreichte Christoph Kolumbus Amerika?",
          nl: "In welke eeuw bereikte Christoffel Columbus Amerika?"
        },
        options: [
          { en: "15th century", es: "Siglo XV", de: "15. Jahrhundert", nl: "15e eeuw" },
          { en: "16th century", es: "Siglo XVI", de: "16. Jahrhundert", nl: "16e eeuw" },
          { en: "14th century", es: "Siglo XIV", de: "14. Jahrhundert", nl: "14e eeuw" },
          { en: "17th century", es: "Siglo XVII", de: "17. Jahrhundert", nl: "17e eeuw" }
        ],
        correctIndex: 0
      }
    ],

    // Day 12 - May 12th: Mother's Day Weekend
    day12: [
      {
        question: {
          en: "What is a popular Mother's Day gift?",
          es: "¿Cuál es un regalo popular para el Día de la Madre?",
          de: "Was ist ein beliebtes Muttertagsgeschenk?",
          nl: "Wat is een populair Moederdag cadeau?"
        },
        options: [
          { en: "Flowers", es: "Flores", de: "Blumen", nl: "Bloemen" },
          { en: "Tools", es: "Herramientas", de: "Werkzeug", nl: "Gereedschap" },
          { en: "Homework", es: "Tarea", de: "Hausaufgaben", nl: "Huiswerk" },
          { en: "Vegetables", es: "Verduras", de: "Gemüse", nl: "Groenten" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Who started Mother's Day in the United States?",
          es: "¿Quién comenzó el Día de la Madre en Estados Unidos?",
          de: "Wer hat den Muttertag in den Vereinigten Staaten begonnen?",
          nl: "Wie begon Moederdag in de Verenigde Staten?"
        },
        options: [
          { en: "Anna Jarvis", es: "Anna Jarvis", de: "Anna Jarvis", nl: "Anna Jarvis" },
          { en: "Mary Smith", es: "Mary Smith", de: "Mary Smith", nl: "Mary Smith" },
          { en: "Susan Anthony", es: "Susan Anthony", de: "Susan Anthony", nl: "Susan Anthony" },
          { en: "Jane Doe", es: "Jane Doe", de: "Jane Doe", nl: "Jane Doe" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do children often do for mothers on Mother's Day?",
          es: "¿Qué hacen a menudo los niños por las madres en el Día de la Madre?",
          de: "Was machen Kinder oft für Mütter am Muttertag?",
          nl: "Wat doen kinderen vaak voor moeders op Moederdag?"
        },
        options: [
          { en: "Make breakfast in bed", es: "Preparar desayuno en la cama", de: "Frühstück im Bett machen", nl: "Ontbijt op bed maken" },
          { en: "Clean the house", es: "Limpiar la casa", de: "Das Haus putzen", nl: "Het huis schoonmaken" },
          { en: "Go to work", es: "Ir a trabajar", de: "Zur Arbeit gehen", nl: "Naar het werk gaan" },
          { en: "Sleep all day", es: "Dormir todo el día", de: "Den ganzen Tag schlafen", nl: "De hele dag slapen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What flower is most commonly given on Mother's Day?",
          es: "¿Qué flor se da más comúnmente en el Día de la Madre?",
          de: "Welche Blume wird am häufigsten am Muttertag geschenkt?",
          nl: "Welke bloem wordt het vaakst gegeven op Moederdag?"
        },
        options: [
          { en: "Carnation", es: "Clavel", de: "Nelke", nl: "Anjer" },
          { en: "Dandelion", es: "Diente de león", de: "Löwenzahn", nl: "Paardenbloem" },
          { en: "Sunflower", es: "Girasol", de: "Sonnenblume", nl: "Zonnebloem" },
          { en: "Cactus flower", es: "Flor de cactus", de: "Kaktusblüte", nl: "Cactusbloem" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "In which month do most countries celebrate Mother's Day?",
          es: "¿En qué mes celebran el Día de la Madre la mayoría de los países?",
          de: "In welchem Monat feiern die meisten Länder den Muttertag?",
          nl: "In welke maand vieren de meeste landen Moederdag?"
        },
        options: [
          { en: "May", es: "Mayo", de: "Mai", nl: "Mei" },
          { en: "January", es: "Enero", de: "Januar", nl: "Januari" },
          { en: "December", es: "Diciembre", de: "Dezember", nl: "December" },
          { en: "August", es: "Agosto", de: "August", nl: "Augustus" }
        ],
        correctIndex: 0
      }
    ],

    // Day 13 - May 13th: Arts & Creativity
    day13: [
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
          { en: "Pink, brown, tan", es: "Rosa, marrón, beige", de: "Rosa, braun, beige", nl: "Roze, bruin, beige" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do you get when you mix red and yellow?",
          es: "¿Qué obtienes cuando mezclas rojo y amarillo?",
          de: "Was bekommst du, wenn du rot und gelb mischst?",
          nl: "Wat krijg je als je rood en geel mengt?"
        },
        options: [
          { en: "Orange", es: "Naranja", de: "Orange", nl: "Oranje" },
          { en: "Green", es: "Verde", de: "Grün", nl: "Groen" },
          { en: "Purple", es: "Morado", de: "Lila", nl: "Paars" },
          { en: "Brown", es: "Marrón", de: "Braun", nl: "Bruin" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is a sculpture made of?",
          es: "¿De qué está hecha una escultura?",
          de: "Woraus wird eine Skulptur gemacht?",
          nl: "Waarvan wordt een beeldhouwwerk gemaakt?"
        },
        options: [
          { en: "Stone, clay, or metal", es: "Piedra, arcilla o metal", de: "Stein, Ton oder Metall", nl: "Steen, klei of metaal" },
          { en: "Only paper", es: "Solo papel", de: "Nur Papier", nl: "Alleen papier" },
          { en: "Only water", es: "Solo agua", de: "Nur Wasser", nl: "Alleen water" },
          { en: "Only air", es: "Solo aire", de: "Nur Luft", nl: "Alleen lucht" }
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
          { en: "Claude Monet", es: "Claude Monet", de: "Claude Monet", nl: "Claude Monet" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What tool do artists use to paint?",
          es: "¿Qué herramienta usan los artistas para pintar?",
          de: "Welches Werkzeug verwenden Künstler zum Malen?",
          nl: "Welk gereedschap gebruiken kunstenaars om te schilderen?"
        },
        options: [
          { en: "Paintbrush", es: "Pincel", de: "Pinsel", nl: "Penseel" },
          { en: "Hammer", es: "Martillo", de: "Hammer", nl: "Hamer" },
          { en: "Spoon", es: "Cuchara", de: "Löffel", nl: "Lepel" },
          { en: "Scissors", es: "Tijeras", de: "Schere", nl: "Schaar" }
        ],
        correctIndex: 0
      }
    ],

    // Day 14 - May 14th: Technology & Innovation
    day14: [
      {
        question: {
          en: "What does WWW stand for?",
          es: "¿Qué significa WWW?",
          de: "Wofür steht WWW?",
          nl: "Waar staat WWW voor?"
        },
        options: [
          { en: "World Wide Web", es: "Red Mundial", de: "World Wide Web", nl: "World Wide Web" },
          { en: "Wide World Wrestling", es: "Lucha Mundial Amplia", de: "Wide World Wrestling", nl: "Wide World Wrestling" },
          { en: "We Want Water", es: "Queremos Agua", de: "Wir wollen Wasser", nl: "We Willen Water" },
          { en: "What We Want", es: "Lo Que Queremos", de: "Was wir wollen", nl: "Wat We Willen" }
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
      },
      {
        question: {
          en: "What does a computer use to store information?",
          es: "¿Qué usa una computadora para almacenar información?",
          de: "Was verwendet ein Computer zum Speichern von Informationen?",
          nl: "Wat gebruikt een computer om informatie op te slaan?"
        },
        options: [
          { en: "Memory", es: "Memoria", de: "Speicher", nl: "Geheugen" },
          { en: "Wheels", es: "Ruedas", de: "Räder", nl: "Wielen" },
          { en: "Wings", es: "Alas", de: "Flügel", nl: "Vleugels" },
          { en: "Legs", es: "Piernas", de: "Beine", nl: "Benen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What device helps us see things far away?",
          es: "¿Qué dispositivo nos ayuda a ver cosas lejanas?",
          de: "Welches Gerät hilft uns, weit entfernte Dinge zu sehen?",
          nl: "Welk apparaat helpt ons dingen ver weg te zien?"
        },
        options: [
          { en: "Telescope", es: "Telescopio", de: "Teleskop", nl: "Telescoop" },
          { en: "Spoon", es: "Cuchara", de: "Löffel", nl: "Lepel" },
          { en: "Book", es: "Libro", de: "Buch", nl: "Boek" },
          { en: "Shoe", es: "Zapato", de: "Schuh", nl: "Schoen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What powers most modern cars?",
          es: "¿Qué alimenta la mayoría de los autos modernos?",
          de: "Was treibt die meisten modernen Autos an?",
          nl: "Wat drijft de meeste moderne auto's aan?"
        },
        options: [
          { en: "Gasoline or electricity", es: "Gasolina o electricidad", de: "Benzin oder Elektrizität", nl: "Benzine of elektriciteit" },
          { en: "Wind power", es: "Energía eólica", de: "Windkraft", nl: "Windkracht" },
          { en: "Human power", es: "Fuerza humana", de: "Menschenkraft", nl: "Menselijke kracht" },
          { en: "Magic", es: "Magia", de: "Magie", nl: "Magie" }
        ],
        correctIndex: 0
      }
    ],

    // Day 15 - May 15th: Space & Universe
    day15: [
      {
        question: {
          en: "What is the closest star to Earth?",
          es: "¿Cuál es la estrella más cercana a la Tierra?",
          de: "Was ist der nächste Stern zur Erde?",
          nl: "Wat is de dichtstbijzijnde ster bij de aarde?"
        },
        options: [
          { en: "The Sun", es: "El Sol", de: "Die Sonne", nl: "De zon" },
          { en: "The Moon", es: "La Luna", de: "Der Mond", nl: "De maan" },
          { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" },
          { en: "Jupiter", es: "Júpiter", de: "Jupiter", nl: "Jupiter" }
        ],
        correctIndex: 0
      },
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
          en: "What do astronauts wear in space?",
          es: "¿Qué usan los astronautas en el espacio?",
          de: "Was tragen Astronauten im Weltraum?",
          nl: "Wat dragen astronauten in de ruimte?"
        },
        options: [
          { en: "Space suits", es: "Trajes espaciales", de: "Raumanzüge", nl: "Ruimtepakken" },
          { en: "Swimming suits", es: "Trajes de baño", de: "Badeanzüge", nl: "Zwempakken" },
          { en: "Regular clothes", es: "Ropa normal", de: "Normale Kleidung", nl: "Gewone kleding" },
          { en: "Nothing", es: "Nada", de: "Nichts", nl: "Niets" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What causes day and night on Earth?",
          es: "¿Qué causa el día y la noche en la Tierra?",
          de: "Was verursacht Tag und Nacht auf der Erde?",
          nl: "Wat veroorzaakt dag en nacht op aarde?"
        },
        options: [
          { en: "Earth's rotation", es: "Rotación de la Tierra", de: "Erdrotation", nl: "Aardrotatie" },
          { en: "The Moon moving", es: "El movimiento de la Luna", de: "Die Mondbewegung", nl: "De maanbeweging" },
          { en: "Clouds covering the sun", es: "Nubes cubriendo el sol", de: "Wolken bedecken die Sonne", nl: "Wolken bedekken de zon" },
          { en: "The Sun turning off", es: "El Sol apagándose", de: "Die Sonne geht aus", nl: "De zon gaat uit" }
        ],
        correctIndex: 0
      }
    ],

    // Day 16 - May 16th: Music & Sound
    day16: [
      {
        question: {
          en: "How many strings does a standard guitar have?",
          es: "¿Cuántas cuerdas tiene una guitarra estándar?",
          de: "Wie viele Saiten hat eine Standardgitarre?",
          nl: "Hoeveel snaren heeft een standaard gitaar?"
        },
        options: [
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "12", es: "12", de: "12", nl: "12" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do we call a group of musicians playing together?",
          es: "¿Cómo llamamos a un grupo de músicos tocando juntos?",
          de: "Wie nennen wir eine Gruppe von Musikern, die zusammen spielen?",
          nl: "Hoe noemen we een groep muzikanten die samen spelen?"
        },
        options: [
          { en: "Band or orchestra", es: "Banda u orquesta", de: "Band oder Orchester", nl: "Band of orkest" },
          { en: "Team", es: "Equipo", de: "Team", nl: "Team" },
          { en: "Club", es: "Club", de: "Klub", nl: "Club" },
          { en: "Class", es: "Clase", de: "Klasse", nl: "Klas" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What are the black and white keys on called?",
          es: "¿Cómo se llaman las teclas blancas y negras?",
          de: "Wie heißen die schwarzen und weißen Tasten?",
          nl: "Hoe heten de zwarte en witte toetsen?"
        },
        options: [
          { en: "Piano keys", es: "Teclas de piano", de: "Klaviertasten", nl: "Pianotoetsen" },
          { en: "Computer keys", es: "Teclas de computadora", de: "Computertasten", nl: "Computertoetsen" },
          { en: "House keys", es: "Llaves de casa", de: "Hausschlüssel", nl: "Huissleutels" },
          { en: "Car keys", es: "Llaves de auto", de: "Autoschlüssel", nl: "Autosleutels" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What travels faster: sound or light?",
          es: "¿Qué viaja más rápido: el sonido o la luz?",
          de: "Was bewegt sich schneller: Schall oder Licht?",
          nl: "Wat reist sneller: geluid of licht?"
        },
        options: [
          { en: "Light", es: "Luz", de: "Licht", nl: "Licht" },
          { en: "Sound", es: "Sonido", de: "Schall", nl: "Geluid" },
          { en: "They're the same", es: "Son iguales", de: "Sie sind gleich", nl: "Ze zijn hetzelfde" },
          { en: "Neither moves", es: "Ninguno se mueve", de: "Keines bewegt sich", nl: "Geen van beide beweegt" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What part of your body do you use to hear?",
          es: "¿Qué parte de tu cuerpo usas para escuchar?",
          de: "Welchen Körperteil benutzt du zum Hören?",
          nl: "Welk lichaamsdeel gebruik je om te horen?"
        },
        options: [
          { en: "Ears", es: "Orejas", de: "Ohren", nl: "Oren" },
          { en: "Eyes", es: "Ojos", de: "Augen", nl: "Ogen" },
          { en: "Nose", es: "Nariz", de: "Nase", nl: "Neus" },
          { en: "Mouth", es: "Boca", de: "Mund", nl: "Mond" }
        ],
        correctIndex: 0
      }
    ],

    // Day 17 - May 17th: Literature & Reading
    day17: [
      {
        question: {
          en: "What is a story that isn't real called?",
          es: "¿Cómo se llama una historia que no es real?",
          de: "Wie nennt man eine Geschichte, die nicht wahr ist?",
          nl: "Hoe noem je een verhaal dat niet echt is?"
        },
        options: [
          { en: "Fiction", es: "Ficción", de: "Fiktion", nl: "Fictie" },
          { en: "Biography", es: "Biografía", de: "Biographie", nl: "Biografie" },
          { en: "News", es: "Noticias", de: "Nachrichten", nl: "Nieuws" },
          { en: "History", es: "Historia", de: "Geschichte", nl: "Geschiedenis" }
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
          { en: "Dr. Seuss", es: "Dr. Seuss", de: "Dr. Seuss", nl: "Dr. Seuss" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do we call a book of someone's life story?",
          es: "¿Cómo llamamos a un libro sobre la historia de la vida de alguien?",
          de: "Wie nennen wir ein Buch über jemandes Lebensgeschichte?",
          nl: "Hoe noemen we een boek over iemands levensverhaal?"
        },
        options: [
          { en: "Biography", es: "Biografía", de: "Biographie", nl: "Biografie" },
          { en: "Dictionary", es: "Diccionario", de: "Wörterbuch", nl: "Woordenboek" },
          { en: "Recipe book", es: "Libro de recetas", de: "Kochbuch", nl: "Receptenboek" },
          { en: "Comic book", es: "Cómic", de: "Comic", nl: "Stripboek" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is a short story with a moral lesson called?",
          es: "¿Cómo se llama una historia corta con una lección moral?",
          de: "Wie nennt man eine kurze Geschichte mit einer moralischen Lehre?",
          nl: "Hoe noem je een kort verhaal met een morele les?"
        },
        options: [
          { en: "Fable", es: "Fábula", de: "Fabel", nl: "Fabel" },
          { en: "Recipe", es: "Receta", de: "Rezept", nl: "Recept" },
          { en: "News article", es: "Artículo de noticias", de: "Nachrichtenartikel", nl: "Nieuwsartikel" },
          { en: "Phone book", es: "Guía telefónica", de: "Telefonbuch", nl: "Telefoonboek" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Where do you typically find many books together?",
          es: "¿Dónde encuentras típicamente muchos libros juntos?",
          de: "Wo findest du typischerweise viele Bücher zusammen?",
          nl: "Waar vind je meestal veel boeken bij elkaar?"
        },
        options: [
          { en: "Library", es: "Biblioteca", de: "Bibliothek", nl: "Bibliotheek" },
          { en: "Kitchen", es: "Cocina", de: "Küche", nl: "Keuken" },
          { en: "Garage", es: "Garaje", de: "Garage", nl: "Garage" },
          { en: "Swimming pool", es: "Piscina", de: "Schwimmbad", nl: "Zwembad" }
        ],
        correctIndex: 0
      }
    ],

    // Day 18 - May 18th: Ocean & Marine Life
    day18: [
      {
        question: {
          en: "What is the largest animal in the ocean?",
          es: "¿Cuál es el animal más grande del océano?",
          de: "Was ist das größte Tier im Ozean?",
          nl: "Wat is het grootste dier in de oceaan?"
        },
        options: [
          { en: "Blue whale", es: "Ballena azul", de: "Blauwal", nl: "Blauwe walvis" },
          { en: "Shark", es: "Tiburón", de: "Hai", nl: "Haai" },
          { en: "Octopus", es: "Pulpo", de: "Krake", nl: "Octopus" },
          { en: "Dolphin", es: "Delfín", de: "Delphin", nl: "Dolfijn" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do fish use to breathe underwater?",
          es: "¿Qué usan los peces para respirar bajo el agua?",
          de: "Was verwenden Fische zum Atmen unter Wasser?",
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
          en: "What covers most of Earth's surface?",
          es: "¿Qué cubre la mayor parte de la superficie de la Tierra?",
          de: "Was bedeckt den größten Teil der Erdoberfläche?",
          nl: "Wat bedekt het grootste deel van het aardoppervlak?"
        },
        options: [
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Sand", es: "Arena", de: "Sand", nl: "Zand" },
          { en: "Grass", es: "Hierba", de: "Gras", nl: "Gras" },
          { en: "Ice", es: "Hielo", de: "Eis", nl: "Ijs" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which sea creature has eight arms?",
          es: "¿Qué criatura marina tiene ocho brazos?",
          de: "Welches Meerestier hat acht Arme?",
          nl: "Welk zeedier heeft acht armen?"
        },
        options: [
          { en: "Octopus", es: "Pulpo", de: "Krake", nl: "Octopus" },
          { en: "Starfish", es: "Estrella de mar", de: "Seestern", nl: "Zeester" },
          { en: "Crab", es: "Cangrejo", de: "Krebs", nl: "Krab" },
          { en: "Fish", es: "Pez", de: "Fisch", nl: "Vis" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do we call the rise and fall of ocean water?",
          es: "¿Cómo llamamos al subir y bajar del agua del océano?",
          de: "Wie nennen wir das Steigen und Fallen des Ozeanwassers?",
          nl: "Hoe noemen we het stijgen en dalen van oceaanwater?"
        },
        options: [
          { en: "Tides", es: "Mareas", de: "Gezeiten", nl: "Getijden" },
          { en: "Waves", es: "Olas", de: "Wellen", nl: "Golven" },
          { en: "Currents", es: "Corrientes", de: "Strömungen", nl: "Stromingen" },
          { en: "Storms", es: "Tormentas", de: "Stürme", nl: "Stormen" }
        ],
        correctIndex: 0
      }
    ],

    // Day 19 - May 19th: Transportation & Travel
    day19: [
      {
        question: {
          en: "What vehicle flies in the sky?",
          es: "¿Qué vehículo vuela en el cielo?",
          de: "Welches Fahrzeug fliegt am Himmel?",
          nl: "Welk voertuig vliegt in de lucht?"
        },
        options: [
          { en: "Airplane", es: "Avión", de: "Flugzeug", nl: "Vliegtuig" },
          { en: "Car", es: "Coche", de: "Auto", nl: "Auto" },
          { en: "Boat", es: "Barco", de: "Boot", nl: "Boot" },
          { en: "Bicycle", es: "Bicicleta", de: "Fahrrad", nl: "Fiets" }
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
          en: "What do you need to drive a car legally?",
          es: "¿Qué necesitas para conducir un coche legalmente?",
          de: "Was brauchst du, um legal Auto zu fahren?",
          nl: "Wat heb je nodig om legaal auto te rijden?"
        },
        options: [
          { en: "Driver's license", es: "Licencia de conducir", de: "Führerschein", nl: "Rijbewijs" },
          { en: "Passport", es: "Pasaporte", de: "Reisepass", nl: "Paspoort" },
          { en: "Library card", es: "Tarjeta de biblioteca", de: "Bibliotheksausweis", nl: "Bibliotheekpas" },
          { en: "Nothing", es: "Nada", de: "Nichts", nl: "Niets" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which vehicle travels on railroad tracks?",
          es: "¿Qué vehículo viaja por vías férreas?",
          de: "Welches Fahrzeug fährt auf Eisenbahnschienen?",
          nl: "Welk voertuig rijdt op spoorwegsporen?"
        },
        options: [
          { en: "Train", es: "Tren", de: "Zug", nl: "Trein" },
          { en: "Bus", es: "Autobús", de: "Bus", nl: "Bus" },
          { en: "Truck", es: "Camión", de: "Lastwagen", nl: "Vrachtwagen" },
          { en: "Motorcycle", es: "Motocicleta", de: "Motorrad", nl: "Motorfiets" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What powers most boats?",
          es: "¿Qué alimenta la mayoría de los barcos?",
          de: "Was treibt die meisten Boote an?",
          nl: "Wat drijft de meeste boten aan?"
        },
        options: [
          { en: "Engine or sails", es: "Motor o velas", de: "Motor oder Segel", nl: "Motor of zeilen" },
          { en: "Pedals", es: "Pedales", de: "Pedale", nl: "Pedalen" },
          { en: "Wings", es: "Alas", de: "Flügel", nl: "Vleugels" },
          { en: "Legs", es: "Piernas", de: "Beine", nl: "Benen" }
        ],
        correctIndex: 0
      }
    ],

    // Day 20 - May 20th: Mathematics & Numbers
    day20: [
      {
        question: {
          en: "What is 5 + 3?",
          es: "¿Cuánto es 5 + 3?",
          de: "Was ist 5 + 3?",
          nl: "Hoeveel is 5 + 3?"
        },
        options: [
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "15", es: "15", de: "15", nl: "15" },
          { en: "53", es: "53", de: "53", nl: "53" }
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
          en: "What is half of 10?",
          es: "¿Cuál es la mitad de 10?",
          de: "Was ist die Hälfte von 10?",
          nl: "Wat is de helft van 10?"
        },
        options: [
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "20", es: "20", de: "20", nl: "20" },
          { en: "15", es: "15", de: "15", nl: "15" }
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
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "8", es: "8", de: "8", nl: "8" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What comes after the number 9?",
          es: "¿Qué viene después del número 9?",
          de: "Was kommt nach der Zahl 9?",
          nl: "Wat komt na het getal 9?"
        },
        options: [
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "11", es: "11", de: "11", nl: "11" },
          { en: "0", es: "0", de: "0", nl: "0" }
        ],
        correctIndex: 0
      }
    ],

    // Day 21 - May 21st: Health & Human Body
    day21: [
      {
        question: {
          en: "How many bones are in an adult human body?",
          es: "¿Cuántos huesos hay en el cuerpo de un adulto?",
          de: "Wie viele Knochen hat ein erwachsener menschlicher Körper?",
          nl: "Hoeveel botten heeft een volwassen menselijk lichaam?"
        },
        options: [
          { en: "206", es: "206", de: "206", nl: "206" },
          { en: "100", es: "100", de: "100", nl: "100" },
          { en: "500", es: "500", de: "500", nl: "500" },
          { en: "50", es: "50", de: "50", nl: "50" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the strongest muscle in the human body?",
          es: "¿Cuál es el músculo más fuerte del cuerpo humano?",
          de: "Was ist der stärkste Muskel im menschlichen Körper?",
          nl: "Wat is de sterkste spier in het menselijk lichaam?"
        },
        options: [
          { en: "Jaw muscle", es: "Músculo de la mandíbula", de: "Kiefermuskel", nl: "Kaakspier" },
          { en: "Arm muscle", es: "Músculo del brazo", de: "Armmuskel", nl: "Armspier" },
          { en: "Leg muscle", es: "Músculo de la pierna", de: "Beinmuskel", nl: "Beenspier" },
          { en: "Back muscle", es: "Músculo de la espalda", de: "Rückenmuskel", nl: "Rugspier" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What organ pumps blood through your body?",
          es: "¿Qué órgano bombea sangre por tu cuerpo?",
          de: "Welches Organ pumpt Blut durch deinen Körper?",
          nl: "Welk orgaan pompt bloed door je lichaam?"
        },
        options: [
          { en: "Heart", es: "Corazón", de: "Herz", nl: "Hart" },
          { en: "Liver", es: "Hígado", de: "Leber", nl: "Lever" },
          { en: "Stomach", es: "Estómago", de: "Magen", nl: "Maag" },
          { en: "Brain", es: "Cerebro", de: "Gehirn", nl: "Hersenen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many teeth does an adult typically have?",
          es: "¿Cuántos dientes tiene típicamente un adulto?",
          de: "Wie viele Zähne hat ein Erwachsener normalerweise?",
          nl: "Hoeveel tanden heeft een volwassene meestal?"
        },
        options: [
          { en: "32", es: "32", de: "32", nl: "32" },
          { en: "20", es: "20", de: "20", nl: "20" },
          { en: "50", es: "50", de: "50", nl: "50" },
          { en: "100", es: "100", de: "100", nl: "100" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which part of your body helps you think?",
          es: "¿Qué parte de tu cuerpo te ayuda a pensar?",
          de: "Welcher Körperteil hilft dir beim Denken?",
          nl: "Welk lichaamsdeel helpt je bij het denken?"
        },
        options: [
          { en: "Brain", es: "Cerebro", de: "Gehirn", nl: "Hersenen" },
          { en: "Stomach", es: "Estómago", de: "Magen", nl: "Maag" },
          { en: "Foot", es: "Pie", de: "Fuß", nl: "Voet" },
          { en: "Hand", es: "Mano", de: "Hand", nl: "Hand" }
        ],
        correctIndex: 0
      }
    ],

    // Day 22 - May 22nd: Holidays & Celebrations
    day22: [
      {
        question: {
          en: "What do people celebrate on their birthday?",
          es: "¿Qué celebra la gente en su cumpleaños?",
          de: "Was feiern Menschen an ihrem Geburtstag?",
          nl: "Wat vieren mensen op hun verjaardag?"
        },
        options: [
          { en: "The day they were born", es: "El día que nacieron", de: "Den Tag ihrer Geburt", nl: "De dag dat ze geboren werden" },
          { en: "The day they got married", es: "El día que se casaron", de: "Den Tag ihrer Hochzeit", nl: "De dag dat ze trouwden" },
          { en: "The day they started school", es: "El día que empezaron la escuela", de: "Den Tag des Schulbeginns", nl: "De dag dat ze naar school gingen" },
          { en: "Nothing special", es: "Nada especial", de: "Nichts Besonderes", nl: "Niets bijzonders" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do you blow out on a birthday cake?",
          es: "¿Qué soplas en un pastel de cumpleaños?",
          de: "Was pustest du auf einem Geburtstagskuchen aus?",
          nl: "Wat blaas je uit op een verjaardagstaart?"
        },
        options: [
          { en: "Candles", es: "Velas", de: "Kerzen", nl: "Kaarsen" },
          { en: "Balloons", es: "Globos", de: "Ballons", nl: "Ballonnen" },
          { en: "Flowers", es: "Flores", de: "Blumen", nl: "Bloemen" },
          { en: "Leaves", es: "Hojas", de: "Blätter", nl: "Bladeren" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What holiday celebrates the end of the year?",
          es: "¿Qué feriado celebra el fin del año?",
          de: "Welcher Feiertag feiert das Ende des Jahres?",
          nl: "Welke feestdag viert het einde van het jaar?"
        },
        options: [
          { en: "New Year's Eve", es: "Nochevieja", de: "Silvester", nl: "Oudejaarsavond" },
          { en: "Christmas", es: "Navidad", de: "Weihnachten", nl: "Kerstmis" },
          { en: "Easter", es: "Pascua", de: "Ostern", nl: "Pasen" },
          { en: "Halloween", es: "Halloween", de: "Halloween", nl: "Halloween" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do people often do at weddings?",
          es: "¿Qué hace a menudo la gente en las bodas?",
          de: "Was machen Menschen oft bei Hochzeiten?",
          nl: "Wat doen mensen vaak op bruiloften?"
        },
        options: [
          { en: "Celebrate love", es: "Celebrar el amor", de: "Die Liebe feiern", nl: "Liefde vieren" },
          { en: "Study math", es: "Estudiar matemáticas", de: "Mathe lernen", nl: "Wiskunde studeren" },
          { en: "Fix cars", es: "Arreglar coches", de: "Autos reparieren", nl: "Auto's repareren" },
          { en: "Clean houses", es: "Limpiar casas", de: "Häuser putzen", nl: "Huizen schoonmaken" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What season do many people celebrate graduations?",
          es: "¿En qué estación celebra mucha gente las graduaciones?",
          de: "In welcher Jahreszeit feiern viele Menschen Abschlüsse?",
          nl: "In welk seizoen vieren veel mensen hun afstuderen?"
        },
        options: [
          { en: "Spring", es: "Primavera", de: "Frühling", nl: "Lente" },
          { en: "Winter", es: "Invierno", de: "Winter", nl: "Winter" },
          { en: "Never", es: "Nunca", de: "Niemals", nl: "Nooit" },
          { en: "Every day", es: "Todos los días", de: "Jeden Tag", nl: "Elke dag" }
        ],
        correctIndex: 0
      }
    ],

    // Day 23 - May 23rd: Time & Calendar
    day23: [
      {
        question: {
          en: "How many months are in a year?",
          es: "¿Cuántos meses hay en un año?",
          de: "Wie viele Monate hat ein Jahr?",
          nl: "Hoeveel maanden zitten er in een jaar?"
        },
        options: [
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "24", es: "24", de: "24", nl: "24" },
          { en: "7", es: "7", de: "7", nl: "7" }
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
          { en: "30", es: "30", de: "30", nl: "30" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What comes after Wednesday?",
          es: "¿Qué viene después del miércoles?",
          de: "Was kommt nach Mittwoch?",
          nl: "Wat komt na woensdag?"
        },
        options: [
          { en: "Thursday", es: "Jueves", de: "Donnerstag", nl: "Donderdag" },
          { en: "Tuesday", es: "Martes", de: "Dienstag", nl: "Dinsdag" },
          { en: "Friday", es: "Viernes", de: "Freitag", nl: "Vrijdag" },
          { en: "Sunday", es: "Domingo", de: "Sonntag", nl: "Zondag" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many hours are in a day?",
          es: "¿Cuántas horas hay en un día?",
          de: "Wie viele Stunden hat ein Tag?",
          nl: "Hoeveel uur zitten er in een dag?"
        },
        options: [
          { en: "24", es: "24", de: "24", nl: "24" },
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "60", es: "60", de: "60", nl: "60" },
          { en: "10", es: "10", de: "10", nl: "10" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the first month of the year?",
          es: "¿Cuál es el primer mes del año?",
          de: "Was ist der erste Monat des Jahres?",
          nl: "Wat is de eerste maand van het jaar?"
        },
        options: [
          { en: "January", es: "Enero", de: "Januar", nl: "Januari" },
          { en: "March", es: "Marzo", de: "März", nl: "Maart" },
          { en: "May", es: "Mayo", de: "Mai", nl: "Mei" },
          { en: "December", es: "Diciembre", de: "Dezember", nl: "December" }
        ],
        correctIndex: 0
      }
    ],

    // Day 24 - May 24th: Emotions & Feelings
    day24: [
      {
        question: {
          en: "What emotion do you feel when something good happens?",
          es: "¿Qué emoción sientes cuando algo bueno sucede?",
          de: "Welche Emotion fühlst du, wenn etwas Gutes passiert?",
          nl: "Welke emotie voel je als er iets goeds gebeurt?"
        },
        options: [
          { en: "Happy", es: "Feliz", de: "Glücklich", nl: "Blij" },
          { en: "Sad", es: "Triste", de: "Traurig", nl: "Verdrietig" },
          { en: "Angry", es: "Enojado", de: "Wütend", nl: "Boos" },
          { en: "Scared", es: "Asustado", de: "Ängstlich", nl: "Bang" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do you feel when you lose something important?",
          es: "¿Qué sientes cuando pierdes algo importante?",
          de: "Was fühlst du, wenn du etwas Wichtiges verlierst?",
          nl: "Wat voel je als je iets belangrijks verliest?"
        },
        options: [
          { en: "Sad", es: "Triste", de: "Traurig", nl: "Verdrietig" },
          { en: "Excited", es: "Emocionado", de: "Aufgeregt", nl: "Opgewonden" },
          { en: "Proud", es: "Orgulloso", de: "Stolz", nl: "Trots" },
          { en: "Sleepy", es: "Somnoliento", de: "Schläfrig", nl: "Slaperig" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What emotion helps you when you're in danger?",
          es: "¿Qué emoción te ayuda cuando estás en peligro?",
          de: "Welche Emotion hilft dir, wenn du in Gefahr bist?",
          nl: "Welke emotie helpt je als je in gevaar bent?"
        },
        options: [
          { en: "Fear", es: "Miedo", de: "Angst", nl: "Angst" },
          { en: "Boredom", es: "Aburrimiento", de: "Langeweile", nl: "Verveling" },
          { en: "Confusion", es: "Confusión", de: "Verwirrung", nl: "Verwarring" },
          { en: "Hunger", es: "Hambre", de: "Hunger", nl: "Honger" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do you feel when someone is kind to you?",
          es: "¿Qué sientes cuando alguien es amable contigo?",
          de: "Was fühlst du, wenn jemand nett zu dir ist?",
          nl: "Wat voel je als iemand aardig tegen je is?"
        },
        options: [
          { en: "Grateful", es: "Agradecido", de: "Dankbar", nl: "Dankbaar" },
          { en: "Angry", es: "Enojado", de: "Wütend", nl: "Boos" },
          { en: "Worried", es: "Preocupado", de: "Besorgt", nl: "Bezorgd" },
          { en: "Tired", es: "Cansado", de: "Müde", nl: "Moe" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How do you usually show you're happy?",
          es: "¿Cómo muestras normalmente que estás feliz?",
          de: "Wie zeigst du normalerweise, dass du glücklich bist?",
          nl: "Hoe laat je meestal zien dat je blij bent?"
        },
        options: [
          { en: "Smile", es: "Sonreír", de: "Lächeln", nl: "Glimlachen" },
          { en: "Cry", es: "Llorar", de: "Weinen", nl: "Huilen" },
          { en: "Frown", es: "Fruncir el ceño", de: "Die Stirn runzeln", nl: "Fronsen" },
          { en: "Hide", es: "Esconderse", de: "Sich verstecken", nl: "Verstoppen" }
        ],
        correctIndex: 0
      }
    ],

    // Day 25 - May 25th: World Languages
    day25: [
      {
        question: {
          en: "What language is spoken in France?",
          es: "¿Qué idioma se habla en Francia?",
          de: "Welche Sprache wird in Frankreich gesprochen?",
          nl: "Welke taal wordt er gesproken in Frankrijk?"
        },
        options: [
          { en: "French", es: "Francés", de: "Französisch", nl: "Frans" },
          { en: "German", es: "Alemán", de: "Deutsch", nl: "Duits" },
          { en: "Spanish", es: "Español", de: "Spanisch", nl: "Spaans" },
          { en: "English", es: "Inglés", de: "Englisch", nl: "Engels" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How do you say 'hello' in Spanish?",
          es: "¿Cómo se dice 'hello' en español?",
          de: "Wie sagt man 'hello' auf Spanisch?",
          nl: "Hoe zeg je 'hello' in het Spaans?"
        },
        options: [
          { en: "Hola", es: "Hola", de: "Hola", nl: "Hola" },
          { en: "Bonjour", es: "Bonjour", de: "Bonjour", nl: "Bonjour" },
          { en: "Guten Tag", es: "Guten Tag", de: "Guten Tag", nl: "Guten Tag" },
          { en: "Ciao", es: "Ciao", de: "Ciao", nl: "Ciao" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do we call words that sound the same but mean different things?",
          es: "¿Cómo llamamos a las palabras que suenan igual pero significan cosas diferentes?",
          de: "Wie nennen wir Wörter, die gleich klingen, aber verschiedene Dinge bedeuten?",
          nl: "Hoe noemen we woorden die hetzelfde klinken maar verschillende dingen betekenen?"
        },
        options: [
          { en: "Homophones", es: "Homófonos", de: "Homophone", nl: "Homofonen" },
          { en: "Synonyms", es: "Sinónimos", de: "Synonyme", nl: "Synoniemen" },
          { en: "Antonyms", es: "Antónimos", de: "Antonyme", nl: "Antoniemen" },
          { en: "Adjectives", es: "Adjetivos", de: "Adjektive", nl: "Bijvoeglijke naamwoorden" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the most widely spoken language in the world?",
          es: "¿Cuál es el idioma más hablado del mundo?",
          de: "Was ist die am weitesten verbreitete Sprache der Welt?",
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
          en: "What do we call a person who speaks multiple languages?",
          es: "¿Cómo llamamos a una persona que habla varios idiomas?",
          de: "Wie nennen wir eine Person, die mehrere Sprachen spricht?",
          nl: "Hoe noemen we iemand die meerdere talen spreekt?"
        },
        options: [
          { en: "Multilingual", es: "Multilingüe", de: "Mehrsprachig", nl: "Meertalig" },
          { en: "Monolingual", es: "Monolingüe", de: "Einsprachig", nl: "Eentalig" },
          { en: "Bilingual only", es: "Solo bilingüe", de: "Nur zweisprachig", nl: "Alleen tweetalig" },
          { en: "Language teacher", es: "Profesor de idiomas", de: "Sprachlehrer", nl: "Taalleraar" }
        ],
        correctIndex: 0
      }
    ],

    // Day 26 - May 26th: Inventions & Innovations
    day26: [
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
          { en: "Isaac Newton", es: "Isaac Newton", de: "Isaac Newton", nl: "Isaac Newton" },
          { en: "Leonardo da Vinci", es: "Leonardo da Vinci", de: "Leonardo da Vinci", nl: "Leonardo da Vinci" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What was invented first?",
          es: "¿Qué se inventó primero?",
          de: "Was wurde zuerst erfunden?",
          nl: "Wat werd het eerst uitgevonden?"
        },
        options: [
          { en: "The wheel", es: "La rueda", de: "Das Rad", nl: "Het wiel" },
          { en: "The car", es: "El coche", de: "Das Auto", nl: "De auto" },
          { en: "The airplane", es: "El avión", de: "Das Flugzeug", nl: "Het vliegtuig" },
          { en: "The computer", es: "La computadora", de: "Der Computer", nl: "De computer" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What invention helps us communicate over long distances instantly?",
          es: "¿Qué invención nos ayuda a comunicarnos a larga distancia instantáneamente?",
          de: "Welche Erfindung hilft uns, sofort über große Entfernungen zu kommunizieren?",
          nl: "Welke uitvinding helpt ons om direct over lange afstanden te communiceren?"
        },
        options: [
          { en: "Telephone", es: "Teléfono", de: "Telefon", nl: "Telefoon" },
          { en: "Bicycle", es: "Bicicleta", de: "Fahrrad", nl: "Fiets" },
          { en: "Umbrella", es: "Paraguas", de: "Regenschirm", nl: "Paraplu" },
          { en: "Chair", es: "Silla", de: "Stuhl", nl: "Stoel" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What invention allows us to preserve food for longer?",
          es: "¿Qué invención nos permite conservar los alimentos por más tiempo?",
          de: "Welche Erfindung ermöglicht es uns, Lebensmittel länger zu konservieren?",
          nl: "Welke uitvinding stelt ons in staat om voedsel langer te bewaren?"
        },
        options: [
          { en: "Refrigerator", es: "Refrigerador", de: "Kühlschrank", nl: "Koelkast" },
          { en: "Television", es: "Televisión", de: "Fernsehen", nl: "Televisie" },
          { en: "Radio", es: "Radio", de: "Radio", nl: "Radio" },
          { en: "Camera", es: "Cámara", de: "Kamera", nl: "Camera" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Who is credited with inventing the printing press?",
          es: "¿A quién se le atribuye la invención de la imprenta?",
          de: "Wem wird die Erfindung der Druckerpresse zugeschrieben?",
          nl: "Aan wie wordt de uitvinding van de drukpers toegeschreven?"
        },
        options: [
          { en: "Johannes Gutenberg", es: "Johannes Gutenberg", de: "Johannes Gutenberg", nl: "Johannes Gutenberg" },
          { en: "Benjamin Franklin", es: "Benjamin Franklin", de: "Benjamin Franklin", nl: "Benjamin Franklin" },
          { en: "Alexander Bell", es: "Alexander Bell", de: "Alexander Bell", nl: "Alexander Bell" },
          { en: "Wright Brothers", es: "Hermanos Wright", de: "Gebrüder Wright", nl: "Gebroeders Wright" }
        ],
        correctIndex: 0
      }
    ],

    // Day 27 - May 27th: Memorial Day Weekend (US)
    day27: [
      {
        question: {
          en: "When is Memorial Day observed in the United States?",
          es: "¿Cuándo se observa el Memorial Day en Estados Unidos?",
          de: "Wann wird der Memorial Day in den Vereinigten Staaten begangen?",
          nl: "Wanneer wordt Memorial Day gevierd in de Verenigde Staten?"
        },
        options: [
          { en: "Last Monday of May", es: "Último lunes de mayo", de: "Letzter Montag im Mai", nl: "Laatste maandag van mei" },
          { en: "First Monday of May", es: "Primer lunes de mayo", de: "Erster Montag im Mai", nl: "Eerste maandag van mei" },
          { en: "May 27th always", es: "Siempre el 27 de mayo", de: "Immer am 27. Mai", nl: "Altijd op 27 mei" },
          { en: "Memorial Day is not in May", es: "Memorial Day no es en mayo", de: "Memorial Day ist nicht im Mai", nl: "Memorial Day is niet in mei" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What does Memorial Day honor?",
          es: "¿Qué honra el Memorial Day?",
          de: "Was ehrt der Memorial Day?",
          nl: "Wat eert Memorial Day?"
        },
        options: [
          { en: "Military personnel who died in service", es: "Personal militar que murió en servicio", de: "Militärpersonal, das im Dienst starb", nl: "Militair personeel dat stierf in dienst" },
          { en: "Living veterans only", es: "Solo veteranos vivos", de: "Nur lebende Veteranen", nl: "Alleen levende veteranen" },
          { en: "All workers", es: "Todos los trabajadores", de: "Alle Arbeiter", nl: "Alle werknemers" },
          { en: "Teachers", es: "Maestros", de: "Lehrer", nl: "Leraren" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What flowers are traditionally placed on graves on Memorial Day?",
          es: "¿Qué flores se colocan tradicionalmente en las tumbas el Memorial Day?",
          de: "Welche Blumen werden traditionell am Memorial Day auf Gräber gelegt?",
          nl: "Welke bloemen worden traditioneel op graven gelegd op Memorial Day?"
        },
        options: [
          { en: "Poppies or flags", es: "Amapolas o banderas", de: "Mohnblumen oder Flaggen", nl: "Klaprozen of vlaggen" },
          { en: "Roses only", es: "Solo rosas", de: "Nur Rosen", nl: "Alleen rozen" },
          { en: "Plastic flowers", es: "Flores de plástico", de: "Plastikblumen", nl: "Plastic bloemen" },
          { en: "No flowers", es: "Sin flores", de: "Keine Blumen", nl: "Geen bloemen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Memorial Day marks the unofficial start of which season?",
          es: "El Memorial Day marca el comienzo no oficial de qué estación?",
          de: "Der Memorial Day markiert den inoffiziellen Beginn welcher Jahreszeit?",
          nl: "Memorial Day markeert het onofficiële begin van welk seizoen?"
        },
        options: [
          { en: "Summer", es: "Verano", de: "Sommer", nl: "Zomer" },
          { en: "Fall", es: "Otoño", de: "Herbst", nl: "Herfst" },
          { en: "Winter", es: "Invierno", de: "Winter", nl: "Winter" },
          { en: "Spring", es: "Primavera", de: "Frühling", nl: "Lente" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What time is the National Moment of Remembrance observed?",
          es: "¿A qué hora se observa el Momento Nacional de Recuerdo?",
          de: "Zu welcher Zeit wird der Nationale Moment des Gedenkens begangen?",
          nl: "Hoe laat wordt het Nationale Moment van Herdenking gehouden?"
        },
        options: [
          { en: "3:00 PM", es: "3:00 PM", de: "15:00 Uhr", nl: "15:00" },
          { en: "12:00 PM", es: "12:00 PM", de: "12:00 Uhr", nl: "12:00" },
          { en: "9:00 AM", es: "9:00 AM", de: "9:00 Uhr", nl: "09:00" },
          { en: "There is no specific time", es: "No hay hora específica", de: "Es gibt keine bestimmte Zeit", nl: "Er is geen specifieke tijd" }
        ],
        correctIndex: 0
      }
    ],

    // Day 28 - May 28th: Friendship & Social Skills
    day28: [
      {
        question: {
          en: "What makes a good friend?",
          es: "¿Qué hace a un buen amigo?",
          de: "Was macht einen guten Freund aus?",
          nl: "Wat maakt een goede vriend?"
        },
        options: [
          { en: "Being kind and trustworthy", es: "Ser amable y confiable", de: "Freundlich und vertrauenswürdig sein", nl: "Aardig en betrouwbaar zijn" },
          { en: "Being mean", es: "Ser malo", de: "Gemein sein", nl: "Gemeen zijn" },
          { en: "Never talking", es: "Nunca hablar", de: "Niemals sprechen", nl: "Nooit praten" },
          { en: "Always arguing", es: "Siempre discutir", de: "Immer streiten", nl: "Altijd ruziemaken" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How should you treat someone who is different from you?",
          es: "¿Cómo debes tratar a alguien que es diferente de ti?",
          de: "Wie solltest du jemanden behandeln, der anders ist als du?",
          nl: "Hoe moet je iemand behandelen die anders is dan jij?"
        },
        options: [
          { en: "With respect and kindness", es: "Con respeto y amabilidad", de: "Mit Respekt und Freundlichkeit", nl: "Met respect en vriendelijkheid" },
          { en: "Ignore them", es: "Ignorarlos", de: "Sie ignorieren", nl: "Negeer ze" },
          { en: "Make fun of them", es: "Burlarse de ellos", de: "Sich über sie lustig machen", nl: "Maak grappen over ze" },
          { en: "Avoid them completely", es: "Evitarlos completamente", de: "Sie völlig meiden", nl: "Vermijd ze volledig" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What should you do if you hurt someone's feelings?",
          es: "¿Qué debes hacer si hieres los sentimientos de alguien?",
          de: "Was solltest du tun, wenn du jemandes Gefühle verletzt?",
          nl: "Wat moet je doen als je iemands gevoelens hebt gekwetst?"
        },
        options: [
          { en: "Apologize sincerely", es: "Disculparse sinceramente", de: "Sich aufrichtig entschuldigen", nl: "Oprecht je verontschuldigen" },
          { en: "Pretend it didn't happen", es: "Fingir que no pasó", de: "So tun, als wäre nichts passiert", nl: "Doen alsof het niet gebeurd is" },
          { en: "Blame them", es: "Culparlos", de: "Ihnen die Schuld geben", nl: "Geef ze de schuld" },
          { en: "Laugh about it", es: "Reírse de eso", de: "Darüber lachen", nl: "Erom lachen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How do you show you're listening to someone?",
          es: "¿Cómo muestras que estás escuchando a alguien?",
          de: "Wie zeigst du, dass du jemandem zuhörst?",
          nl: "Hoe laat je zien dat je naar iemand luistert?"
        },
        options: [
          { en: "Look at them and pay attention", es: "Míralos y presta atención", de: "Sie ansehen und aufmerksam sein", nl: "Kijk naar ze en let op" },
          { en: "Look at your phone", es: "Mira tu teléfono", de: "Auf dein Handy schauen", nl: "Kijk naar je telefoon" },
          { en: "Talk about yourself instead", es: "Habla de ti mismo", de: "Stattdessen über sich selbst sprechen", nl: "Praat in plaats daarvan over jezelf" },
          { en: "Interrupt them", es: "Interrumpirlos", de: "Sie unterbrechen", nl: "Onderbreek ze" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What's a good way to make new friends?",
          es: "¿Cuál es una buena manera de hacer nuevos amigos?",
          de: "Was ist ein guter Weg, neue Freunde zu finden?",
          nl: "Wat is een goede manier om nieuwe vrienden te maken?"
        },
        options: [
          { en: "Be friendly and show interest in others", es: "Ser amigable y mostrar interés en otros", de: "Freundlich sein und Interesse an anderen zeigen", nl: "Vriendelijk zijn en interesse tonen in anderen" },
          { en: "Only talk about yourself", es: "Solo hablar de ti mismo", de: "Nur über sich selbst sprechen", nl: "Alleen over jezelf praten" },
          { en: "Be rude to everyone", es: "Ser grosero con todos", de: "Zu allen unhöflich sein", nl: "Grof zijn tegen iedereen" },
          { en: "Never smile", es: "Nunca sonreír", de: "Niemals lächeln", nl: "Nooit glimlachen" }
        ],
        correctIndex: 0
      }
    ],

    // Day 29 - May 29th: Environment & Conservation
    day29: [
      {
        question: {
          en: "What can you do to help the environment?",
          es: "¿Qué puedes hacer para ayudar al medio ambiente?",
          de: "Was kannst du tun, um der Umwelt zu helfen?",
          nl: "Wat kun je doen om het milieu te helpen?"
        },
        options: [
          { en: "Recycle and reduce waste", es: "Reciclar y reducir desperdicios", de: "Recyceln und Abfall reduzieren", nl: "Recyclen en afval verminderen" },
          { en: "Litter everywhere", es: "Tirar basura en todas partes", de: "Überall Müll wegwerfen", nl: "Overal afval weggooien" },
          { en: "Waste water", es: "Desperdiciar agua", de: "Wasser verschwenden", nl: "Water verspillen" },
          { en: "Cut down all trees", es: "Cortar todos los árboles", de: "Alle Bäume fällen", nl: "Alle bomen omhakken" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do trees produce that we need to breathe?",
          es: "¿Qué producen los árboles que necesitamos para respirar?",
          de: "Was produzieren Bäume, das wir zum Atmen brauchen?",
          nl: "Wat produceren bomen dat we nodig hebben om te ademen?"
        },
        options: [
          { en: "Oxygen", es: "Oxígeno", de: "Sauerstoff", nl: "Zuurstof" },
          { en: "Carbon dioxide", es: "Dióxido de carbono", de: "Kohlendioxid", nl: "Koolstofdioxide" },
          { en: "Nitrogen", es: "Nitrógeno", de: "Stickstoff", nl: "Stikstof" },
          { en: "Helium", es: "Helio", de: "Helium", nl: "Helium" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What happens when we put trash in the ocean?",
          es: "¿Qué pasa cuando ponemos basura en el océano?",
          de: "Was passiert, wenn wir Müll in den Ozean werfen?",
          nl: "Wat gebeurt er als we afval in de oceaan gooien?"
        },
        options: [
          { en: "It harms marine animals", es: "Daña a los animales marinos", de: "Es schadet Meerestieren", nl: "Het schaadt zeedieren" },
          { en: "Fish become stronger", es: "Los peces se vuelven más fuertes", de: "Fische werden stärker", nl: "Vissen worden sterker" },
          { en: "Water becomes cleaner", es: "El agua se vuelve más limpia", de: "Das Wasser wird sauberer", nl: "Water wordt schoner" },
          { en: "Nothing happens", es: "No pasa nada", de: "Nichts passiert", nl: "Er gebeurt niets" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Why is it important to save energy?",
          es: "¿Por qué es importante ahorrar energía?",
          de: "Warum ist es wichtig, Energie zu sparen?",
          nl: "Waarom is het belangrijk om energie te besparen?"
        },
        options: [
          { en: "To protect the planet", es: "Para proteger el planeta", de: "Um den Planeten zu schützen", nl: "Om de planeet te beschermen" },
          { en: "To use more electricity", es: "Para usar más electricidad", de: "Um mehr Strom zu verbrauchen", nl: "Om meer elektriciteit te gebruiken" },
          { en: "Energy is unlimited", es: "La energía es ilimitada", de: "Energie ist unbegrenzt", nl: "Energie is onbeperkt" },
          { en: "It's not important", es: "No es importante", de: "Es ist nicht wichtig", nl: "Het is niet belangrijk" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is one way to save water?",
          es: "¿Cuál es una manera de ahorrar agua?",
          de: "Was ist ein Weg, Wasser zu sparen?",
          nl: "Wat is een manier om water te besparen?"
        },
        options: [
          { en: "Turn off taps when not using", es: "Cerrar grifos cuando no se usen", de: "Wasserhähne zudrehen, wenn nicht in Gebrauch", nl: "Kranen dichtdraaien als je ze niet gebruikt" },
          { en: "Leave taps running", es: "Dejar grifos abiertos", de: "Wasserhähne laufen lassen", nl: "Kranen open laten staan" },
          { en: "Take very long showers", es: "Tomar duchas muy largas", de: "Sehr lange duschen", nl: "Heel lange douches nemen" },
          { en: "Water is not limited", es: "El agua no es limitada", de: "Wasser ist nicht begrenzt", nl: "Water is niet beperkt" }
        ],
        correctIndex: 0
      }
    ],

    // Day 30 - May 30th: Dreams & Goals
    day30: [
      {
        question: {
          en: "What is a goal?",
          es: "¿Qué es una meta?",
          de: "Was ist ein Ziel?",
          nl: "Wat is een doel?"
        },
        options: [
          { en: "Something you want to achieve", es: "Algo que quieres lograr", de: "Etwas, das du erreichen möchtest", nl: "Iets wat je wilt bereiken" },
          { en: "A type of food", es: "Un tipo de comida", de: "Eine Art von Essen", nl: "Een soort voedsel" },
          { en: "A place to sleep", es: "Un lugar para dormir", de: "Ein Ort zum Schlafen", nl: "Een plek om te slapen" },
          { en: "A game", es: "Un juego", de: "Ein Spiel", nl: "Een spel" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How do you achieve a goal?",
          es: "¿Cómo logras una meta?",
          de: "Wie erreichst du ein Ziel?",
          nl: "Hoe bereik je een doel?"
        },
        options: [
          { en: "Work hard and practice", es: "Trabajar duro y practicar", de: "Hart arbeiten und üben", nl: "Hard werken en oefenen" },
          { en: "Give up immediately", es: "Rendirse inmediatamente", de: "Sofort aufgeben", nl: "Meteen opgeven" },
          { en: "Wait for magic", es: "Esperar magia", de: "Auf Magie warten", nl: "Wachten op magie" },
          { en: "Only dream about it", es: "Solo soñar con eso", de: "Nur davon träumen", nl: "Er alleen van dromen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What should you do when facing a challenge?",
          es: "¿Qué debes hacer cuando enfrentas un desafío?",
          de: "Was solltest du tun, wenn du vor einer Herausforderung stehst?",
          nl: "Wat moet je doen als je voor een uitdaging staat?"
        },
        options: [
          { en: "Keep trying and learn from mistakes", es: "Seguir intentando y aprender de los errores", de: "Weiter versuchen und aus Fehlern lernen", nl: "Blijven proberen en leren van fouten" },
          { en: "Give up right away", es: "Rendirse de inmediato", de: "Sofort aufgeben", nl: "Meteen opgeven" },
          { en: "Get angry and quit", es: "Enojarse y renunciar", de: "Wütend werden und aufhören", nl: "Boos worden en stoppen" },
          { en: "Ignore the challenge", es: "Ignorar el desafío", de: "Die Herausforderung ignorieren", nl: "De uitdaging negeren" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What helps you stay motivated?",
          es: "¿Qué te ayuda a mantenerte motivado?",
          de: "Was hilft dir, motiviert zu bleiben?",
          nl: "Wat helpt je om gemotiveerd te blijven?"
        },
        options: [
          { en: "Remembering why the goal is important", es: "Recordar por qué la meta es importante", de: "Sich daran erinnern, warum das Ziel wichtig ist", nl: "Onthouden waarom het doel belangrijk is" },
          { en: "Thinking about giving up", es: "Pensar en rendirse", de: "An Aufgeben denken", nl: "Denken aan opgeven" },
          { en: "Comparing yourself negatively to others", es: "Compararte negativamente con otros", de: "Sich negativ mit anderen vergleichen", nl: "Je negatief vergelijken met anderen" },
          { en: "Focusing on failures only", es: "Enfocarse solo en los fracasos", de: "Sich nur auf Misserfolge konzentrieren", nl: "Alleen focussen op mislukkingen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Why is it good to have dreams and goals?",
          es: "¿Por qué es bueno tener sueños y metas?",
          de: "Warum ist es gut, Träume und Ziele zu haben?",
          nl: "Waarom is het goed om dromen en doelen te hebben?"
        },
        options: [
          { en: "They give your life direction and purpose", es: "Le dan dirección y propósito a tu vida", de: "Sie geben deinem Leben Richtung und Zweck", nl: "Ze geven je leven richting en doel" },
          { en: "They make you worry constantly", es: "Te hacen preocupar constantemente", de: "Sie lassen dich ständig sorgen", nl: "Ze maken je constant bezorgd" },
          { en: "They are impossible to achieve", es: "Son imposibles de lograr", de: "Sie sind unmöglich zu erreichen", nl: "Ze zijn onmogelijk te bereiken" },
          { en: "They don't matter at all", es: "No importan en absoluto", de: "Sie sind völlig unwichtig", nl: "Ze zijn helemaal niet belangrijk" }
        ],
        correctIndex: 0
      }
    ],

    // Day 31 - May 31st: Summer Preparation
    day31: [
      {
        question: {
          en: "What month comes after May?",
          es: "¿Qué mes viene después de mayo?",
          de: "Welcher Monat kommt nach Mai?",
          nl: "Welke maand komt na mei?"
        },
        options: [
          { en: "June", es: "Junio", de: "Juni", nl: "Juni" },
          { en: "April", es: "Abril", de: "April", nl: "April" },
          { en: "July", es: "Julio", de: "Juli", nl: "Juli" },
          { en: "March", es: "Marzo", de: "März", nl: "Maart" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do people often do during summer vacation?",
          es: "¿Qué hace a menudo la gente durante las vacaciones de verano?",
          de: "Was machen Menschen oft während der Sommerferien?",
          nl: "Wat doen mensen vaak tijdens de zomervakantie?"
        },
        options: [
          { en: "Travel and spend time outdoors", es: "Viajar y pasar tiempo al aire libre", de: "Reisen und Zeit im Freien verbringen", nl: "Reizen en tijd buitenshuis doorbrengen" },
          { en: "Stay inside all day", es: "Quedarse adentro todo el día", de: "Den ganzen Tag drinnen bleiben", nl: "De hele dag binnen blijven" },
          { en: "Wear heavy coats", es: "Usar abrigos pesados", de: "Schwere Mäntel tragen", nl: "Zware jassen dragen" },
          { en: "Hibernate", es: "Hibernar", de: "Winterschlaf halten", nl: "Winterslapen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What should you always wear when it's sunny?",
          es: "¿Qué debes usar siempre cuando hace sol?",
          de: "Was solltest du immer tragen, wenn es sonnig ist?",
          nl: "Wat moet je altijd dragen als het zonnig is?"
        },
        options: [
          { en: "Sunscreen", es: "Protector solar", de: "Sonnencreme", nl: "Zonnebrandcrème" },
          { en: "Winter hat", es: "Gorro de invierno", de: "Wintermütze", nl: "Wintermuts" },
          { en: "Heavy boots", es: "Botas pesadas", de: "Schwere Stiefel", nl: "Zware laarzen" },
          { en: "Thick gloves", es: "Guantes gruesos", de: "Dicke Handschuhe", nl: "Dikke handschoenen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What popular summer activity involves water?",
          es: "¿Qué actividad popular de verano involucra agua?",
          de: "Welche beliebte Sommeraktivität beinhaltet Wasser?",
          nl: "Welke populaire zomeractiviteit heeft water nodig?"
        },
        options: [
          { en: "Swimming", es: "Nadar", de: "Schwimmen", nl: "Zwemmen" },
          { en: "Building snowmen", es: "Construir muñecos de nieve", de: "Schneemänner bauen", nl: "Sneeuwpoppen bouwen" },
          { en: "Ice skating", es: "Patinaje sobre hielo", de: "Schlittschuhlaufen", nl: "Schaatsen" },
          { en: "Skiing", es: "Esquiar", de: "Skifahren", nl: "Skiën" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "As we finish May, what can we look forward to in summer?",
          es: "Al terminar mayo, ¿qué podemos esperar del verano?",
          de: "Wenn Mai endet, worauf können wir uns im Sommer freuen?",
          nl: "Terwijl mei eindigt, waar kunnen we naar uitkijken in de zomer?"
        },
        options: [
          { en: "Warm weather and long days", es: "Clima cálido y días largos", de: "Warmes Wetter und lange Tage", nl: "Warm weer en lange dagen" },
          { en: "Snow and ice", es: "Nieve y hielo", de: "Schnee und Eis", nl: "Sneeuw en ijs" },
          { en: "Falling leaves", es: "Hojas cayendo", de: "Fallende Blätter", nl: "Vallende bladeren" },
          { en: "Very short days", es: "Días muy cortos", de: "Sehr kurze Tage", nl: "Heel korte dagen" }
        ],
        correctIndex: 0
      }
    ]
  };

  // Export May challenges
  if (typeof window.addMonthChallenges === 'function') {
    window.addMonthChallenges('may', mayChallenges);
  }

})();