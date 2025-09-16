// October Daily Challenges - 31 days × 5 questions each = 155 total questions
(function() {
  
  const octoberChallenges = {
    name: {
      en: "October Daily Challenges",
      es: "Desafíos Diarios de Octubre", 
      de: "Oktober Tägliche Herausforderungen",
      nl: "Oktober Dagelijkse Uitdagingen"
    },
    
    // Day 1 - October 1st: Fall Month
    day1: [
      {
        question: {
          en: "What season is October in?",
          es: "¿En qué estación está octubre?",
          de: "In welcher Jahreszeit ist Oktober?",
          nl: "In welk seizoen valt oktober?"
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
          en: "What colors do leaves turn in October?",
          es: "¿De qué colores se vuelven las hojas en octubre?",
          de: "Welche Farben bekommen die Blätter im Oktober?",
          nl: "Welke kleuren krijgen bladeren in oktober?"
        },
        options: [
          { en: "Red, orange, yellow", es: "Rojo, naranja, amarillo", de: "Rot, orange, gelb", nl: "Rood, oranje, geel" },
          { en: "Blue, purple, pink", es: "Azul, morado, rosa", de: "Blau, lila, rosa", nl: "Blauw, paars, roze" },
          { en: "Black, white, gray", es: "Negro, blanco, gris", de: "Schwarz, weiß, grau", nl: "Zwart, wit, grijs" },
          { en: "They stay green", es: "Siguen verdes", de: "Sie bleiben grün", nl: "Ze blijven groen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many days are in October?",
          es: "¿Cuántos días tiene octubre?",
          de: "Wie viele Tage hat der Oktober?",
          nl: "Hoeveel dagen heeft oktober?"
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
          en: "What birthstone belongs to October?",
          es: "¿Qué piedra de nacimiento pertenece a octubre?",
          de: "Welcher Geburtsstein gehört zum Oktober?",
          nl: "Welke geboortesteen hoort bij oktober?"
        },
        options: [
          { en: "Opal", es: "Ópalo", de: "Opal", nl: "Opaal" },
          { en: "Ruby", es: "Rubí", de: "Rubin", nl: "Robijn" },
          { en: "Emerald", es: "Esmeralda", de: "Smaragd", nl: "Smaragd" },
          { en: "Diamond", es: "Diamante", de: "Diamant", nl: "Diamant" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do people often pick in October?",
          es: "¿Qué suele recoger la gente en octubre?",
          de: "Was pflücken Menschen oft im Oktober?",
          nl: "Wat plukken mensen vaak in oktober?"
        },
        options: [
          { en: "Pumpkins", es: "Calabazas", de: "Kürbisse", nl: "Pompoenen" },
          { en: "Strawberries", es: "Fresas", de: "Erdbeeren", nl: "Aardbeien" },
          { en: "Flowers", es: "Flores", de: "Blumen", nl: "Bloemen" },
          { en: "Snow", es: "Nieve", de: "Schnee", nl: "Sneeuw" }
        ],
        correctIndex: 0
      }
    ],

    // Day 2 - October 2nd: Changing Leaves
    day2: [
      {
        question: {
          en: "What process causes leaves to change color in autumn?",
          es: "¿Qué proceso hace que las hojas cambien de color en otoño?",
          de: "Welcher Prozess bewirkt, dass Blätter im Herbst ihre Farbe ändern?",
          nl: "Welk proces zorgt ervoor dat bladeren van kleur veranderen in de herfst?"
        },
        options: [
          { en: "Chlorophyll breaks down", es: "Se descompone la clorofila", de: "Chlorophyll baut sich ab", nl: "Chlorofyl breekt af" },
          { en: "Water freezes", es: "El agua se congela", de: "Wasser gefriert", nl: "Water bevriest" },
          { en: "Sun gets brighter", es: "El sol se vuelve más brillante", de: "Die Sonne wird heller", nl: "De zon wordt helderder" },
          { en: "Wind blows harder", es: "El viento sopla más fuerte", de: "Der Wind weht stärker", nl: "De wind waait harder" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which tree keeps its leaves green all year?",
          es: "¿Qué árbol mantiene sus hojas verdes todo el año?",
          de: "Welcher Baum behält seine Blätter das ganze Jahr grün?",
          nl: "Welke boom houdt zijn bladeren het hele jaar groen?"
        },
        options: [
          { en: "Pine tree", es: "Pino", de: "Kiefer", nl: "Dennenboom" },
          { en: "Oak tree", es: "Roble", de: "Eiche", nl: "Eikenboom" },
          { en: "Maple tree", es: "Arce", de: "Ahorn", nl: "Esdoornboom" },
          { en: "Birch tree", es: "Abedul", de: "Birke", nl: "Berkenboom" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is a group of falling leaves called?",
          es: "¿Cómo se llama un grupo de hojas que caen?",
          de: "Wie nennt man eine Gruppe fallender Blätter?",
          nl: "Hoe heet een groep vallende bladeren?"
        },
        options: [
          { en: "Leaf litter", es: "Hojarasca", de: "Laubstreu", nl: "Bladafval" },
          { en: "Leaf storm", es: "Tormenta de hojas", de: "Blattsturm", nl: "Bladstorm" },
          { en: "Leaf pile", es: "Montón de hojas", de: "Blatthaufen", nl: "Bladhoop" },
          { en: "Leaf shower", es: "Lluvia de hojas", de: "Blattregen", nl: "Bladregen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which country is famous for its autumn maple leaves?",
          es: "¿Qué país es famoso por sus hojas de arce otoñales?",
          de: "Welches Land ist berühmt für seine Herbst-Ahornblätter?",
          nl: "Welk land staat bekend om zijn herfst esdoornbladeren?"
        },
        options: [
          { en: "Canada", es: "Canadá", de: "Kanada", nl: "Canada" },
          { en: "Brazil", es: "Brasil", de: "Brasilien", nl: "Brazilië" },
          { en: "Egypt", es: "Egipto", de: "Ägypten", nl: "Egypte" },
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What activity do children enjoy with fallen leaves?",
          es: "¿Qué actividad disfrutan los niños con las hojas caídas?",
          de: "Welche Aktivität genießen Kinder mit gefallenen Blättern?",
          nl: "Welke activiteit genieten kinderen met gevallen bladeren?"
        },
        options: [
          { en: "Jumping in leaf piles", es: "Saltar en montones de hojas", de: "In Laubhaufen springen", nl: "Springen in bladhopen" },
          { en: "Eating them", es: "Comérselas", de: "Sie essen", nl: "Ze opeten" },
          { en: "Painting them blue", es: "Pintarlas de azul", de: "Sie blau anmalen", nl: "Ze blauw verven" },
          { en: "Throwing them away", es: "Tirarlas", de: "Sie wegwerfen", nl: "Ze weggooien" }
        ],
        correctIndex: 0
      }
    ],

    // Day 3 - October 3rd: Harvest Season
    day3: [
      {
        question: {
          en: "What is harvest season?",
          es: "¿Qué es la temporada de cosecha?",
          de: "Was ist die Erntezeit?",
          nl: "Wat is het oogstseizoen?"
        },
        options: [
          { en: "Time to gather crops", es: "Tiempo de recoger cultivos", de: "Zeit zum Ernten der Feldfrüchte", nl: "Tijd om gewassen te oogsten" },
          { en: "Time to plant seeds", es: "Tiempo de plantar semillas", de: "Zeit zum Säen", nl: "Tijd om zaden te planten" },
          { en: "Time to water plants", es: "Tiempo de regar plantas", de: "Zeit zum Gießen", nl: "Tijd om planten water te geven" },
          { en: "Time to rest", es: "Tiempo de descansar", de: "Zeit zum Ausruhen", nl: "Tijd om te rusten" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which vegetable is commonly harvested in October?",
          es: "¿Qué verdura se cosecha comúnmente en octubre?",
          de: "Welches Gemüse wird im Oktober häufig geerntet?",
          nl: "Welke groente wordt vaak geoogst in oktober?"
        },
        options: [
          { en: "Corn", es: "Maíz", de: "Mais", nl: "Maïs" },
          { en: "Tomatoes", es: "Tomates", de: "Tomaten", nl: "Tomaten" },
          { en: "Lettuce", es: "Lechuga", de: "Salat", nl: "Sla" },
          { en: "Cucumbers", es: "Pepinos", de: "Gurken", nl: "Komkommers" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What fruit is harvested to make cider in October?",
          es: "¿Qué fruta se cosecha para hacer sidra en octubre?",
          de: "Welche Frucht wird im Oktober für Apfelwein geerntet?",
          nl: "Welke vrucht wordt geoogst om cider te maken in oktober?"
        },
        options: [
          { en: "Apples", es: "Manzanas", de: "Äpfel", nl: "Appels" },
          { en: "Oranges", es: "Naranjas", de: "Orangen", nl: "Sinaasappels" },
          { en: "Bananas", es: "Plátanos", de: "Bananen", nl: "Bananen" },
          { en: "Grapes", es: "Uvas", de: "Trauben", nl: "Druiven" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do farmers use to harvest large fields of grain?",
          es: "¿Qué usan los agricultores para cosechar grandes campos de grano?",
          de: "Was verwenden Landwirte zum Ernten großer Getreidefelder?",
          nl: "Wat gebruiken boeren om grote graanvelden te oogsten?"
        },
        options: [
          { en: "Combine harvester", es: "Cosechadora", de: "Mähdrescher", nl: "Maaidorser" },
          { en: "Shovel", es: "Pala", de: "Schaufel", nl: "Schep" },
          { en: "Scissors", es: "Tijeras", de: "Schere", nl: "Schaar" },
          { en: "Rake", es: "Rastrillo", de: "Rechen", nl: "Hark" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which grain is commonly harvested in October?",
          es: "¿Qué grano se cosecha comúnmente en octubre?",
          de: "Welches Getreide wird im Oktober häufig geerntet?",
          nl: "Welk graan wordt vaak geoogst in oktober?"
        },
        options: [
          { en: "Wheat", es: "Trigo", de: "Weizen", nl: "Tarwe" },
          { en: "Ice", es: "Hielo", de: "Eis", nl: "Ijs" },
          { en: "Plastic", es: "Plástico", de: "Plastik", nl: "Plastic" },
          { en: "Metal", es: "Metal", de: "Metall", nl: "Metaal" }
        ],
        correctIndex: 0
      }
    ],

    // Day 4 - October 4th: Autumn Animals
    day4: [
      {
        question: {
          en: "Which animals migrate south in October?",
          es: "¿Qué animales migran al sur en octubre?",
          de: "Welche Tiere wandern im Oktober nach Süden?",
          nl: "Welke dieren migreren naar het zuiden in oktober?"
        },
        options: [
          { en: "Birds", es: "Aves", de: "Vögel", nl: "Vogels" },
          { en: "Fish", es: "Peces", de: "Fische", nl: "Vissen" },
          { en: "Cats", es: "Gatos", de: "Katzen", nl: "Katten" },
          { en: "Dogs", es: "Perros", de: "Hunde", nl: "Honden" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do squirrels do in October to prepare for winter?",
          es: "¿Qué hacen las ardillas en octubre para prepararse para el invierno?",
          de: "Was machen Eichhörnchen im Oktober zur Vorbereitung auf den Winter?",
          nl: "Wat doen eekhoorns in oktober om zich voor te bereiden op de winter?"
        },
        options: [
          { en: "Collect nuts", es: "Recoger nueces", de: "Nüsse sammeln", nl: "Noten verzamelen" },
          { en: "Build houses", es: "Construir casas", de: "Häuser bauen", nl: "Huizen bouwen" },
          { en: "Go swimming", es: "Ir a nadar", de: "Schwimmen gehen", nl: "Gaan zwemmen" },
          { en: "Plant flowers", es: "Plantar flores", de: "Blumen pflanzen", nl: "Bloemen planten" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which animal is known for changing its fur color in autumn?",
          es: "¿Qué animal es conocido por cambiar el color de su pelaje en otoño?",
          de: "Welches Tier ist dafür bekannt, im Herbst seine Fellfarbe zu ändern?",
          nl: "Welk dier staat bekend om het veranderen van zijn vachtkleur in de herfst?"
        },
        options: [
          { en: "Arctic fox", es: "Zorro ártico", de: "Polarfuchs", nl: "Poolvos" },
          { en: "Elephant", es: "Elefante", de: "Elefant", nl: "Olifant" },
          { en: "Lion", es: "León", de: "Löwe", nl: "Leeuw" },
          { en: "Giraffe", es: "Jirafa", de: "Giraffe", nl: "Giraf" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do bears do in October to prepare for winter?",
          es: "¿Qué hacen los osos en octubre para prepararse para el invierno?",
          de: "Was machen Bären im Oktober zur Vorbereitung auf den Winter?",
          nl: "Wat doen beren in oktober om zich voor te bereiden op de winter?"
        },
        options: [
          { en: "Eat extra food", es: "Comer comida extra", de: "Extra Nahrung fressen", nl: "Extra voedsel eten" },
          { en: "Learn to fly", es: "Aprender a volar", de: "Fliegen lernen", nl: "Leren vliegen" },
          { en: "Change colors", es: "Cambiar de colores", de: "Farbe wechseln", nl: "Van kleur veranderen" },
          { en: "Build nests", es: "Construir nidos", de: "Nester bauen", nl: "Nesten bouwen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which bird is famous for its V-shaped flying formation during migration?",
          es: "¿Qué ave es famosa por su formación de vuelo en V durante la migración?",
          de: "Welcher Vogel ist berühmt für seine V-förmige Flugformation während der Migration?",
          nl: "Welke vogel staat bekend om zijn V-vormige vliegformatie tijdens migratie?"
        },
        options: [
          { en: "Geese", es: "Gansos", de: "Gänse", nl: "Ganzen" },
          { en: "Chickens", es: "Pollos", de: "Hühner", nl: "Kippen" },
          { en: "Penguins", es: "Pingüinos", de: "Pinguine", nl: "Pinguïns" },
          { en: "Ostriches", es: "Avestruces", de: "Strauße", nl: "Struisvogels" }
        ],
        correctIndex: 0
      }
    ],

    // Day 5 - October 5th: Autumn Weather
    day5: [
      {
        question: {
          en: "What type of weather is common in October?",
          es: "¿Qué tipo de clima es común en octubre?",
          de: "Welches Wetter ist im Oktober üblich?",
          nl: "Welk type weer is gebruikelijk in oktober?"
        },
        options: [
          { en: "Cool and crisp", es: "Fresco y frío", de: "Kühl und frisch", nl: "Koel en fris" },
          { en: "Hot and humid", es: "Caliente y húmedo", de: "Heiß und feucht", nl: "Heet en vochtig" },
          { en: "Freezing cold", es: "Muy frío", de: "Eisig kalt", nl: "IJskoud" },
          { en: "Tropical warm", es: "Cálido tropical", de: "Tropisch warm", nl: "Tropisch warm" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What happens to daylight hours in October?",
          es: "¿Qué pasa con las horas de luz en octubre?",
          de: "Was passiert mit den Tageslichtstunden im Oktober?",
          nl: "Wat gebeurt er met de daglichturen in oktober?"
        },
        options: [
          { en: "They get shorter", es: "Se vuelven más cortas", de: "Sie werden kürzer", nl: "Ze worden korter" },
          { en: "They get longer", es: "Se vuelven más largas", de: "Sie werden länger", nl: "Ze worden langer" },
          { en: "They stay the same", es: "Siguen igual", de: "Sie bleiben gleich", nl: "Ze blijven hetzelfde" },
          { en: "They disappear", es: "Desaparecen", de: "Sie verschwinden", nl: "Ze verdwijnen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is morning dew?",
          es: "¿Qué es el rocío matutino?",
          de: "Was ist Morgentau?",
          nl: "Wat is ochtenddauw?"
        },
        options: [
          { en: "Water droplets on grass", es: "Gotas de agua en la hierba", de: "Wassertröpfchen auf Gras", nl: "Waterdruppels op gras" },
          { en: "Morning snow", es: "Nieve matutina", de: "Morgenschnee", nl: "Ochtendsneeuw" },
          { en: "Early bird sounds", es: "Sonidos de pájaros temprano", de: "Frühe Vogelgeräusche", nl: "Vroege vogelgeluiden" },
          { en: "Sunrise colors", es: "Colores del amanecer", de: "Sonnenaufgangsfarben", nl: "Zonsopgangkleuren" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Why do we see our breath in cold October mornings?",
          es: "¿Por qué vemos nuestro aliento en las mañanas frías de octubre?",
          de: "Warum sehen wir unseren Atem an kalten Oktobermorgen?",
          nl: "Waarom zien we onze adem op koude oktoberochtenden?"
        },
        options: [
          { en: "Water vapor condenses", es: "El vapor de agua se condensa", de: "Wasserdampf kondensiert", nl: "Waterdamp condenseert" },
          { en: "Air turns blue", es: "El aire se vuelve azul", de: "Die Luft wird blau", nl: "De lucht wordt blauw" },
          { en: "We breathe faster", es: "Respiramos más rápido", de: "Wir atmen schneller", nl: "We ademen sneller" },
          { en: "Lungs get bigger", es: "Los pulmones se agrandan", de: "Die Lungen werden größer", nl: "Longen worden groter" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What type of clouds often bring autumn rain?",
          es: "¿Qué tipo de nubes suelen traer lluvia otoñal?",
          de: "Welche Art von Wolken bringen oft Herbstregen?",
          nl: "Welk type wolken brengen vaak herfstregen?"
        },
        options: [
          { en: "Gray clouds", es: "Nubes grises", de: "Graue Wolken", nl: "Grijze wolken" },
          { en: "Pink clouds", es: "Nubes rosadas", de: "Rosa Wolken", nl: "Roze wolken" },
          { en: "Green clouds", es: "Nubes verdes", de: "Grüne Wolken", nl: "Groene wolken" },
          { en: "Purple clouds", es: "Nubes moradas", de: "Lila Wolken", nl: "Paarse wolken" }
        ],
        correctIndex: 0
      }
    ],

    // Day 6 - October 6th: Fall Foods
    day6: [
      {
        question: {
          en: "What spice is commonly used in autumn desserts?",
          es: "¿Qué especia se usa comúnmente en postres otoñales?",
          de: "Welches Gewürz wird häufig in Herbstdesserts verwendet?",
          nl: "Welke specerij wordt vaak gebruikt in herfstnagerechten?"
        },
        options: [
          { en: "Cinnamon", es: "Canela", de: "Zimt", nl: "Kaneel" },
          { en: "Salt", es: "Sal", de: "Salz", nl: "Zout" },
          { en: "Mustard", es: "Mostaza", de: "Senf", nl: "Mosterd" },
          { en: "Pepper", es: "Pimienta", de: "Pfeffer", nl: "Peper" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which drink is popular in autumn?",
          es: "¿Qué bebida es popular en otoño?",
          de: "Welches Getränk ist im Herbst beliebt?",
          nl: "Welke drank is populair in de herfst?"
        },
        options: [
          { en: "Hot chocolate", es: "Chocolate caliente", de: "Heiße Schokolade", nl: "Warme chocolademelk" },
          { en: "Iced tea", es: "Té helado", de: "Eistee", nl: "IJsthee" },
          { en: "Cold soda", es: "Refresco frío", de: "Kalte Limonade", nl: "Koude frisdrank" },
          { en: "Frozen juice", es: "Jugo congelado", de: "Gefrorener Saft", nl: "Bevroren sap" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What type of soup is perfect for cool October days?",
          es: "¿Qué tipo de sopa es perfecta para los días frescos de octubre?",
          de: "Welche Art von Suppe ist perfekt für kühle Oktobertage?",
          nl: "Welk type soep is perfect voor koele oktoberdagen?"
        },
        options: [
          { en: "Pumpkin soup", es: "Sopa de calabaza", de: "Kürbissuppe", nl: "Pompoensoep" },
          { en: "Ice cream soup", es: "Sopa de helado", de: "Eiscreme-Suppe", nl: "Ijssoep" },
          { en: "Cold cucumber soup", es: "Sopa fría de pepino", de: "Kalte Gurkensuppe", nl: "Koude komkommersoep" },
          { en: "Frozen tomato soup", es: "Sopa de tomate congelada", de: "Gefrorene Tomatensuppe", nl: "Bevroren tomatensoep" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which nut is commonly gathered in October?",
          es: "¿Qué nuez se recolecta comúnmente en octubre?",
          de: "Welche Nuss wird im Oktober häufig gesammelt?",
          nl: "Welke noot wordt vaak verzameld in oktober?"
        },
        options: [
          { en: "Acorns", es: "Bellotas", de: "Eicheln", nl: "Eikels" },
          { en: "Coconuts", es: "Cocos", de: "Kokosnüsse", nl: "Kokosnoten" },
          { en: "Peanuts", es: "Cacahuetes", de: "Erdnüsse", nl: "Pinda's" },
          { en: "Cashews", es: "Anacardos", de: "Cashewnüsse", nl: "Cashewnoten" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What dessert is made with autumn apples?",
          es: "¿Qué postre se hace con manzanas otoñales?",
          de: "Welches Dessert wird mit Herbstäpfeln gemacht?",
          nl: "Welk nagerecht wordt gemaakt met herfstappels?"
        },
        options: [
          { en: "Apple pie", es: "Tarta de manzana", de: "Apfelkuchen", nl: "Appeltaart" },
          { en: "Ice cream", es: "Helado", de: "Eiscreme", nl: "IJs" },
          { en: "Chocolate cake", es: "Pastel de chocolate", de: "Schokoladenkuchen", nl: "Chocoladetaart" },
          { en: "Candy", es: "Dulces", de: "Süßigkeiten", nl: "Snoep" }
        ],
        correctIndex: 0
      }
    ],

    // Day 7 - October 7th: World Geography
    day7: [
      {
        question: {
          en: "Which continent has countries experiencing spring in October?",
          es: "¿Qué continente tiene países que experimentan primavera en octubre?",
          de: "Welcher Kontinent hat Länder, die im Oktober Frühling erleben?",
          nl: "Welk continent heeft landen die lente ervaren in oktober?"
        },
        options: [
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" },
          { en: "Europe", es: "Europa", de: "Europa", nl: "Europa" },
          { en: "North America", es: "América del Norte", de: "Nordamerika", nl: "Noord-Amerika" },
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" }
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
          en: "Which mountain range is the longest in the world?",
          es: "¿Qué cordillera es la más larga del mundo?",
          de: "Welche Gebirgskette ist die längste der Welt?",
          nl: "Welke bergketen is de langste ter wereld?"
        },
        options: [
          { en: "Andes Mountains", es: "Cordillera de los Andes", de: "Anden", nl: "Andes" },
          { en: "Rocky Mountains", es: "Montañas Rocosas", de: "Rocky Mountains", nl: "Rocky Mountains" },
          { en: "Himalayas", es: "Himalaya", de: "Himalaya", nl: "Himalaya" },
          { en: "Alps", es: "Alpes", de: "Alpen", nl: "Alpen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which desert is the largest in the world?",
          es: "¿Qué desierto es el más grande del mundo?",
          de: "Welche Wüste ist die größte der Welt?",
          nl: "Welke woestijn is de grootste ter wereld?"
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
          en: "Which river is the longest in the world?",
          es: "¿Qué río es el más largo del mundo?",
          de: "Welcher Fluss ist der längste der Welt?",
          nl: "Welke rivier is de langste ter wereld?"
        },
        options: [
          { en: "Nile River", es: "Río Nilo", de: "Nil", nl: "Nijl" },
          { en: "Amazon River", es: "Río Amazonas", de: "Amazonas", nl: "Amazone" },
          { en: "Mississippi River", es: "Río Mississippi", de: "Mississippi", nl: "Mississippi" },
          { en: "Yangtze River", es: "Río Yangtze", de: "Jangtse", nl: "Yangtze" }
        ],
        correctIndex: 0
      }
    ],

    // Day 8 - October 8th: Science & Nature
    day8: [
      {
        question: {
          en: "What gas do plants release during photosynthesis?",
          es: "¿Qué gas liberan las plantas durante la fotosíntesis?",
          de: "Welches Gas geben Pflanzen bei der Photosynthese ab?",
          nl: "Welk gas geven planten af tijdens fotosynthese?"
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
          en: "How many bones are in an adult human body?",
          es: "¿Cuántos huesos hay en el cuerpo humano adulto?",
          de: "Wie viele Knochen hat ein erwachsener menschlicher Körper?",
          nl: "Hoeveel botten heeft een volwassen menselijk lichaam?"
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
          en: "What force pulls objects toward Earth?",
          es: "¿Qué fuerza atrae los objetos hacia la Tierra?",
          de: "Welche Kraft zieht Objekte zur Erde?",
          nl: "Welke kracht trekt objecten naar de aarde?"
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
      }
    ],

    // Day 9 - October 9th: History
    day9: [
      {
        question: {
          en: "In what year did Christopher Columbus first reach the Americas?",
          es: "¿En qué año llegó Cristóbal Colón por primera vez a las Américas?",
          de: "In welchem Jahr erreichte Christoph Kolumbus erstmals Amerika?",
          nl: "In welk jaar bereikte Christoffel Columbus voor het eerst Amerika?"
        },
        options: [
          { en: "1492", es: "1492", de: "1492", nl: "1492" },
          { en: "1500", es: "1500", de: "1500", nl: "1500" },
          { en: "1485", es: "1485", de: "1485", nl: "1485" },
          { en: "1510", es: "1510", de: "1510", nl: "1510" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which ancient wonder of the world was located in Egypt?",
          es: "¿Cuál antigua maravilla del mundo se encontraba en Egipto?",
          de: "Welches antike Weltwunder befand sich in Ägypten?",
          nl: "Welk oud wereldwonder bevond zich in Egypte?"
        },
        options: [
          { en: "Great Pyramid of Giza", es: "Gran Pirámide de Giza", de: "Große Pyramide von Gizeh", nl: "Grote Piramide van Gizeh" },
          { en: "Colosseum", es: "Coliseo", de: "Kolosseum", nl: "Colosseum" },
          { en: "Stonehenge", es: "Stonehenge", de: "Stonehenge", nl: "Stonehenge" },
          { en: "Great Wall", es: "Gran Muralla", de: "Große Mauer", nl: "Chinese Muur" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Who was the first person to walk on the moon?",
          es: "¿Quién fue la primera persona en caminar sobre la luna?",
          de: "Wer war die erste Person, die auf dem Mond gelaufen ist?",
          nl: "Wie was de eerste persoon die op de maan liep?"
        },
        options: [
          { en: "Neil Armstrong", es: "Neil Armstrong", de: "Neil Armstrong", nl: "Neil Armstrong" },
          { en: "Buzz Aldrin", es: "Buzz Aldrin", de: "Buzz Aldrin", nl: "Buzz Aldrin" },
          { en: "John Glenn", es: "John Glenn", de: "John Glenn", nl: "John Glenn" },
          { en: "Yuri Gagarin", es: "Yuri Gagarin", de: "Juri Gagarin", nl: "Joeri Gagarin" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which empire was ruled by Julius Caesar?",
          es: "¿Qué imperio fue gobernado por Julio César?",
          de: "Welches Reich wurde von Julius Caesar regiert?",
          nl: "Welk rijk werd bestuurd door Julius Caesar?"
        },
        options: [
          { en: "Roman Empire", es: "Imperio Romano", de: "Römisches Reich", nl: "Romeinse Rijk" },
          { en: "Greek Empire", es: "Imperio Griego", de: "Griechisches Reich", nl: "Griekse Rijk" },
          { en: "Egyptian Empire", es: "Imperio Egipcio", de: "Ägyptisches Reich", nl: "Egyptische Rijk" },
          { en: "Persian Empire", es: "Imperio Persa", de: "Persisches Reich", nl: "Perzische Rijk" }
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
          { en: "1943", es: "1943", de: "1943", nl: "1943" },
          { en: "1947", es: "1947", de: "1947", nl: "1947" },
          { en: "1944", es: "1944", de: "1944", nl: "1944" }
        ],
        correctIndex: 0
      }
    ],

    // Day 10 - October 10th: Culture & Arts
    day10: [
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
          en: "Which instrument has 88 keys?",
          es: "¿Qué instrumento tiene 88 teclas?",
          de: "Welches Instrument hat 88 Tasten?",
          nl: "Welk instrument heeft 88 toetsen?"
        },
        options: [
          { en: "Piano", es: "Piano", de: "Klavier", nl: "Piano" },
          { en: "Guitar", es: "Guitarra", de: "Gitarre", nl: "Gitaar" },
          { en: "Violin", es: "Violín", de: "Violine", nl: "Viool" },
          { en: "Flute", es: "Flauta", de: "Flöte", nl: "Fluit" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What type of dance is associated with Spain?",
          es: "¿Qué tipo de baile está asociado con España?",
          de: "Welche Art von Tanz wird mit Spanien assoziiert?",
          nl: "Welk type dans wordt geassocieerd met Spanje?"
        },
        options: [
          { en: "Flamenco", es: "Flamenco", de: "Flamenco", nl: "Flamenco" },
          { en: "Ballet", es: "Ballet", de: "Ballett", nl: "Ballet" },
          { en: "Tango", es: "Tango", de: "Tango", nl: "Tango" },
          { en: "Waltz", es: "Vals", de: "Walzer", nl: "Wals" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which Shakespeare play features Romeo and Juliet?",
          es: "¿Qué obra de Shakespeare presenta a Romeo y Julieta?",
          de: "Welches Shakespeare-Stück zeigt Romeo und Julia?",
          nl: "Welk Shakespeare-toneelstuk toont Romeo en Julia?"
        },
        options: [
          { en: "Romeo and Juliet", es: "Romeo y Julieta", de: "Romeo und Julia", nl: "Romeo en Julia" },
          { en: "Hamlet", es: "Hamlet", de: "Hamlet", nl: "Hamlet" },
          { en: "Macbeth", es: "Macbeth", de: "Macbeth", nl: "Macbeth" },
          { en: "Othello", es: "Otelo", de: "Othello", nl: "Othello" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which country is famous for originating ballet?",
          es: "¿Qué país es famoso por originar el ballet?",
          de: "Welches Land ist berühmt dafür, das Ballett zu schaffen?",
          nl: "Welk land staat bekend om het ontstaan van ballet?"
        },
        options: [
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "Italy", es: "Italia", de: "Italien", nl: "Italië" },
          { en: "Russia", es: "Rusia", de: "Russland", nl: "Rusland" },
          { en: "Germany", es: "Alemania", de: "Deutschland", nl: "Duitsland" }
        ],
        correctIndex: 0
      }
    ],

    // Day 11 - October 11th: World Sports
    day11: [
      {
        question: {
          en: "How many players are on a soccer team on the field at one time?",
          es: "¿Cuántos jugadores hay en un equipo de fútbol en el campo al mismo tiempo?",
          de: "Wie viele Spieler sind gleichzeitig auf dem Fußballfeld in einem Team?",
          nl: "Hoeveel spelers zijn er tegelijk op het voetbalveld in een team?"
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
          en: "In which sport do players try to hit a home run?",
          es: "¿En qué deporte los jugadores tratan de hacer un jonrón?",
          de: "In welchem Sport versuchen Spieler einen Homerun zu erzielen?",
          nl: "In welke sport proberen spelers een homerun te slaan?"
        },
        options: [
          { en: "Baseball", es: "Béisbol", de: "Baseball", nl: "Honkbal" },
          { en: "Basketball", es: "Baloncesto", de: "Basketball", nl: "Basketbal" },
          { en: "Tennis", es: "Tenis", de: "Tennis", nl: "Tennis" },
          { en: "Golf", es: "Golf", de: "Golf", nl: "Golf" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the maximum score in ten-pin bowling?",
          es: "¿Cuál es la puntuación máxima en bolos de diez pines?",
          de: "Was ist die Höchstpunktzahl beim Bowling?",
          nl: "Wat is de maximale score bij bowlen?"
        },
        options: [
          { en: "300", es: "300", de: "300", nl: "300" },
          { en: "250", es: "250", de: "250", nl: "250" },
          { en: "200", es: "200", de: "200", nl: "200" },
          { en: "100", es: "100", de: "100", nl: "100" }
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
          en: "Which sport is played at Wimbledon?",
          es: "¿Qué deporte se juega en Wimbledon?",
          de: "Welcher Sport wird in Wimbledon gespielt?",
          nl: "Welke sport wordt gespeeld in Wimbledon?"
        },
        options: [
          { en: "Tennis", es: "Tenis", de: "Tennis", nl: "Tennis" },
          { en: "Soccer", es: "Fútbol", de: "Fußball", nl: "Voetbal" },
          { en: "Cricket", es: "Cricket", de: "Cricket", nl: "Cricket" },
          { en: "Rugby", es: "Rugby", de: "Rugby", nl: "Rugby" }
        ],
        correctIndex: 0
      }
    ],

    // Day 12 - October 12th: Mathematics
    day12: [
      {
        question: {
          en: "What is 12 × 12?",
          es: "¿Cuánto es 12 × 12?",
          de: "Was ist 12 × 12?",
          nl: "Wat is 12 × 12?"
        },
        options: [
          { en: "144", es: "144", de: "144", nl: "144" },
          { en: "124", es: "124", de: "124", nl: "124" },
          { en: "132", es: "132", de: "132", nl: "132" },
          { en: "148", es: "148", de: "148", nl: "148" }
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
          en: "What is the value of π (pi) rounded to two decimal places?",
          es: "¿Cuál es el valor de π (pi) redondeado a dos decimales?",
          de: "Was ist der Wert von π (Pi) auf zwei Dezimalstellen gerundet?",
          nl: "Wat is de waarde van π (pi) afgerond op twee decimalen?"
        },
        options: [
          { en: "3.14", es: "3.14", de: "3,14", nl: "3,14" },
          { en: "3.12", es: "3.12", de: "3,12", nl: "3,12" },
          { en: "3.16", es: "3.16", de: "3,16", nl: "3,16" },
          { en: "3.18", es: "3.18", de: "3,18", nl: "3,18" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 50% of 200?",
          es: "¿Cuánto es el 50% de 200?",
          de: "Was sind 50% von 200?",
          nl: "Wat is 50% van 200?"
        },
        options: [
          { en: "100", es: "100", de: "100", nl: "100" },
          { en: "50", es: "50", de: "50", nl: "50" },
          { en: "150", es: "150", de: "150", nl: "150" },
          { en: "250", es: "250", de: "250", nl: "250" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "In a right triangle, what is the longest side called?",
          es: "En un triángulo rectángulo, ¿cómo se llama el lado más largo?",
          de: "Wie heißt die längste Seite in einem rechtwinkligen Dreieck?",
          nl: "Hoe heet de langste zijde in een rechthoekige driehoek?"
        },
        options: [
          { en: "Hypotenuse", es: "Hipotenusa", de: "Hypotenuse", nl: "Hypotenusa" },
          { en: "Base", es: "Base", de: "Basis", nl: "Basis" },
          { en: "Height", es: "Altura", de: "Höhe", nl: "Hoogte" },
          { en: "Side", es: "Lado", de: "Seite", nl: "Zijde" }
        ],
        correctIndex: 0
      }
    ],

    // Day 13 - October 13th: Technology
    day13: [
      {
        question: {
          en: "What does WWW stand for?",
          es: "¿Qué significa WWW?",
          de: "Wofür steht WWW?",
          nl: "Waar staat WWW voor?"
        },
        options: [
          { en: "World Wide Web", es: "World Wide Web", de: "World Wide Web", nl: "World Wide Web" },
          { en: "World Wide Wire", es: "World Wide Wire", de: "World Wide Wire", nl: "World Wide Wire" },
          { en: "Wide World Web", es: "Wide World Web", de: "Wide World Web", nl: "Wide World Web" },
          { en: "World Web Wide", es: "World Web Wide", de: "World Web Wide", nl: "World Web Wide" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which company created the iPhone?",
          es: "¿Qué empresa creó el iPhone?",
          de: "Welches Unternehmen hat das iPhone entwickelt?",
          nl: "Welk bedrijf heeft de iPhone gemaakt?"
        },
        options: [
          { en: "Apple", es: "Apple", de: "Apple", nl: "Apple" },
          { en: "Samsung", es: "Samsung", de: "Samsung", nl: "Samsung" },
          { en: "Google", es: "Google", de: "Google", nl: "Google" },
          { en: "Microsoft", es: "Microsoft", de: "Microsoft", nl: "Microsoft" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What does CPU stand for in computers?",
          es: "¿Qué significa CPU en computadoras?",
          de: "Wofür steht CPU bei Computern?",
          nl: "Waar staat CPU voor bij computers?"
        },
        options: [
          { en: "Central Processing Unit", es: "Unidad Central de Procesamiento", de: "Zentrale Verarbeitungseinheit", nl: "Centrale Verwerkingseenheid" },
          { en: "Computer Processing Unit", es: "Unidad de Procesamiento de Computadora", de: "Computer-Verarbeitungseinheit", nl: "Computer Verwerkingseenheid" },
          { en: "Central Program Unit", es: "Unidad Central de Programa", de: "Zentrale Programmeinheit", nl: "Centrale Programma-eenheid" },
          { en: "Computer Program Unit", es: "Unidad de Programa de Computadora", de: "Computer-Programmeinheit", nl: "Computer Programma-eenheid" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which social media platform is known for 280-character messages?",
          es: "¿Qué plataforma de redes sociales es conocida por mensajes de 280 caracteres?",
          de: "Welche Social-Media-Plattform ist für 280-Zeichen-Nachrichten bekannt?",
          nl: "Welk sociale media platform staat bekend om berichten van 280 tekens?"
        },
        options: [
          { en: "Twitter", es: "Twitter", de: "Twitter", nl: "Twitter" },
          { en: "Facebook", es: "Facebook", de: "Facebook", nl: "Facebook" },
          { en: "Instagram", es: "Instagram", de: "Instagram", nl: "Instagram" },
          { en: "YouTube", es: "YouTube", de: "YouTube", nl: "YouTube" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What does USB stand for?",
          es: "¿Qué significa USB?",
          de: "Wofür steht USB?",
          nl: "Waar staat USB voor?"
        },
        options: [
          { en: "Universal Serial Bus", es: "Bus Serie Universal", de: "Universal Serial Bus", nl: "Universal Serial Bus" },
          { en: "United Serial Bus", es: "Bus Serie Unido", de: "United Serial Bus", nl: "United Serial Bus" },
          { en: "Universal System Bus", es: "Bus Sistema Universal", de: "Universal System Bus", nl: "Universal System Bus" },
          { en: "United System Bus", es: "Bus Sistema Unido", de: "United System Bus", nl: "United System Bus" }
        ],
        correctIndex: 0
      }
    ],

    // Day 14 - October 14th: Food & Cooking
    day14: [
      {
        question: {
          en: "What ingredient makes bread rise?",
          es: "¿Qué ingrediente hace que suba el pan?",
          de: "Welche Zutat lässt Brot aufgehen?",
          nl: "Welk ingrediënt zorgt ervoor dat brood rijst?"
        },
        options: [
          { en: "Yeast", es: "Levadura", de: "Hefe", nl: "Gist" },
          { en: "Sugar", es: "Azúcar", de: "Zucker", nl: "Suiker" },
          { en: "Salt", es: "Sal", de: "Salz", nl: "Zout" },
          { en: "Flour", es: "Harina", de: "Mehl", nl: "Meel" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "At what temperature does water boil at sea level?",
          es: "¿A qué temperatura hierve el agua al nivel del mar?",
          de: "Bei welcher Temperatur kocht Wasser auf Meereshöhe?",
          nl: "Bij welke temperatuur kookt water op zeeniveau?"
        },
        options: [
          { en: "100°C", es: "100°C", de: "100°C", nl: "100°C" },
          { en: "90°C", es: "90°C", de: "90°C", nl: "90°C" },
          { en: "110°C", es: "110°C", de: "110°C", nl: "110°C" },
          { en: "95°C", es: "95°C", de: "95°C", nl: "95°C" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which herb is commonly used in Italian pasta dishes?",
          es: "¿Qué hierba se usa comúnmente en platos de pasta italiana?",
          de: "Welches Kraut wird häufig in italienischen Nudgerichten verwendet?",
          nl: "Welk kruid wordt vaak gebruikt in Italiaanse pastagerechten?"
        },
        options: [
          { en: "Basil", es: "Albahaca", de: "Basilikum", nl: "Basilicum" },
          { en: "Mint", es: "Menta", de: "Minze", nl: "Munt" },
          { en: "Rosemary", es: "Romero", de: "Rosmarin", nl: "Rozemarijn" },
          { en: "Thyme", es: "Tomillo", de: "Thymian", nl: "Tijm" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What type of pastry is used to make éclairs?",
          es: "¿Qué tipo de masa se usa para hacer éclairs?",
          de: "Welcher Teig wird zur Herstellung von Éclairs verwendet?",
          nl: "Welk type deeg wordt gebruikt om éclairs te maken?"
        },
        options: [
          { en: "Choux pastry", es: "Masa choux", de: "Brandteig", nl: "Soesjesdeeg" },
          { en: "Puff pastry", es: "Masa hojaldre", de: "Blätterteig", nl: "Bladerdeeg" },
          { en: "Shortcrust pastry", es: "Masa quebrada", de: "Mürbeteig", nl: "Kruimeldeeg" },
          { en: "Filo pastry", es: "Masa filo", de: "Filoteig", nl: "Filodeeg" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which country is famous for inventing pizza?",
          es: "¿Qué país es famoso por inventar la pizza?",
          de: "Welches Land ist berühmt für die Erfindung der Pizza?",
          nl: "Welk land staat bekend om de uitvinding van pizza?"
        },
        options: [
          { en: "Italy", es: "Italia", de: "Italien", nl: "Italië" },
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "Greece", es: "Grecia", de: "Griechenland", nl: "Griekenland" },
          { en: "Spain", es: "España", de: "Spanien", nl: "Spanje" }
        ],
        correctIndex: 0
      }
    ],

    // Day 15 - October 15th: Literature
    day15: [
      {
        question: {
          en: "Who wrote the novel '1984'?",
          es: "¿Quién escribió la novela '1984'?",
          de: "Wer schrieb den Roman '1984'?",
          nl: "Wie schreef de roman '1984'?"
        },
        options: [
          { en: "George Orwell", es: "George Orwell", de: "George Orwell", nl: "George Orwell" },
          { en: "Aldous Huxley", es: "Aldous Huxley", de: "Aldous Huxley", nl: "Aldous Huxley" },
          { en: "Ray Bradbury", es: "Ray Bradbury", de: "Ray Bradbury", nl: "Ray Bradbury" },
          { en: "H.G. Wells", es: "H.G. Wells", de: "H.G. Wells", nl: "H.G. Wells" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the first book in the Harry Potter series?",
          es: "¿Cuál es el primer libro de la serie Harry Potter?",
          de: "Was ist das erste Buch der Harry Potter-Serie?",
          nl: "Wat is het eerste boek in de Harry Potter-serie?"
        },
        options: [
          { en: "The Philosopher's Stone", es: "La Piedra Filosofal", de: "Der Stein der Weisen", nl: "De Steen der Wijzen" },
          { en: "The Chamber of Secrets", es: "La Cámara Secreta", de: "Die Kammer des Schreckens", nl: "De Geheime Kamer" },
          { en: "The Prisoner of Azkaban", es: "El Prisionero de Azkaban", de: "Der Gefangene von Askaban", nl: "De Gevangene van Azkaban" },
          { en: "The Goblet of Fire", es: "El Cáliz de Fuego", de: "Der Feuerkelch", nl: "De Vuurbeker" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which poet wrote 'The Road Not Taken'?",
          es: "¿Qué poeta escribió 'The Road Not Taken'?",
          de: "Welcher Dichter schrieb 'The Road Not Taken'?",
          nl: "Welke dichter schreef 'The Road Not Taken'?"
        },
        options: [
          { en: "Robert Frost", es: "Robert Frost", de: "Robert Frost", nl: "Robert Frost" },
          { en: "Walt Whitman", es: "Walt Whitman", de: "Walt Whitman", nl: "Walt Whitman" },
          { en: "Emily Dickinson", es: "Emily Dickinson", de: "Emily Dickinson", nl: "Emily Dickinson" },
          { en: "Edgar Allan Poe", es: "Edgar Allan Poe", de: "Edgar Allan Poe", nl: "Edgar Allan Poe" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is a haiku?",
          es: "¿Qué es un haiku?",
          de: "Was ist ein Haiku?",
          nl: "Wat is een haiku?"
        },
        options: [
          { en: "A three-line Japanese poem", es: "Un poema japonés de tres líneas", de: "Ein dreizeiliges japanisches Gedicht", nl: "Een drieregelig Japans gedicht" },
          { en: "A four-line English poem", es: "Un poema inglés de cuatro líneas", de: "Ein vierzeiliges englisches Gedicht", nl: "Een vierregelig Engels gedicht" },
          { en: "A five-line French poem", es: "Un poema francés de cinco líneas", de: "Ein fünfzeiliges französisches Gedicht", nl: "Een vijfregelig Frans gedicht" },
          { en: "A six-line Italian poem", es: "Un poema italiano de seis líneas", de: "Ein sechszeiliges italienisches Gedicht", nl: "Een zesregelig Italiaans gedicht" }
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
          { en: "Charlotte Brontë", es: "Charlotte Brontë", de: "Charlotte Brontë", nl: "Charlotte Brontë" },
          { en: "Emily Brontë", es: "Emily Brontë", de: "Emily Brontë", nl: "Emily Brontë" },
          { en: "George Eliot", es: "George Eliot", de: "George Eliot", nl: "George Eliot" }
        ],
        correctIndex: 0
      }
    ],

    // Day 16 - October 16th: Music
    day16: [
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
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "7", es: "7", de: "7", nl: "7" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which composer wrote 'The Four Seasons'?",
          es: "¿Qué compositor escribió 'Las Cuatro Estaciones'?",
          de: "Welcher Komponist schrieb 'Die vier Jahreszeiten'?",
          nl: "Welke componist schreef 'De Vier Seizoenen'?"
        },
        options: [
          { en: "Antonio Vivaldi", es: "Antonio Vivaldi", de: "Antonio Vivaldi", nl: "Antonio Vivaldi" },
          { en: "Mozart", es: "Mozart", de: "Mozart", nl: "Mozart" },
          { en: "Beethoven", es: "Beethoven", de: "Beethoven", nl: "Beethoven" },
          { en: "Bach", es: "Bach", de: "Bach", nl: "Bach" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What does 'forte' mean in music?",
          es: "¿Qué significa 'forte' en música?",
          de: "Was bedeutet 'forte' in der Musik?",
          nl: "Wat betekent 'forte' in muziek?"
        },
        options: [
          { en: "Play loudly", es: "Tocar fuerte", de: "Laut spielen", nl: "Luid spelen" },
          { en: "Play softly", es: "Tocar suave", de: "Leise spielen", nl: "Zacht spelen" },
          { en: "Play fast", es: "Tocar rápido", de: "Schnell spielen", nl: "Snel spelen" },
          { en: "Play slow", es: "Tocar lento", de: "Langsam spielen", nl: "Langzaam spelen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which instrument family does the trumpet belong to?",
          es: "¿A qué familia de instrumentos pertenece la trompeta?",
          de: "Zu welcher Instrumentenfamilie gehört die Trompete?",
          nl: "Tot welke instrumentenfamilie behoort de trompet?"
        },
        options: [
          { en: "Brass", es: "Viento metal", de: "Blechbläser", nl: "Koperblazers" },
          { en: "Woodwind", es: "Viento madera", de: "Holzbläser", nl: "Houtblazers" },
          { en: "Percussion", es: "Percusión", de: "Schlagzeug", nl: "Slagwerk" },
          { en: "Strings", es: "Cuerdas", de: "Streicher", nl: "Snaarinstrumenten" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many keys are there on a full-size piano?",
          es: "¿Cuántas teclas hay en un piano de tamaño completo?",
          de: "Wie viele Tasten hat ein Klavier in voller Größe?",
          nl: "Hoeveel toetsen heeft een piano op ware grootte?"
        },
        options: [
          { en: "88", es: "88", de: "88", nl: "88" },
          { en: "76", es: "76", de: "76", nl: "76" },
          { en: "61", es: "61", de: "61", nl: "61" },
          { en: "100", es: "100", de: "100", nl: "100" }
        ],
        correctIndex: 0
      }
    ],

    // Day 17 - October 17th: World Languages
    day17: [
      {
        question: {
          en: "Which language has the most native speakers worldwide?",
          es: "¿Qué idioma tiene más hablantes nativos en el mundo?",
          de: "Welche Sprache hat weltweit die meisten Muttersprachler?",
          nl: "Welke taal heeft wereldwijd de meeste moedertaalsprekers?"
        },
        options: [
          { en: "Mandarin Chinese", es: "Chino mandarín", de: "Mandarin-Chinesisch", nl: "Mandarijn Chinees" },
          { en: "English", es: "Inglés", de: "Englisch", nl: "Engels" },
          { en: "Spanish", es: "Español", de: "Spanisch", nl: "Spaans" },
          { en: "Hindi", es: "Hindi", de: "Hindi", nl: "Hindi" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How do you say 'hello' in French?",
          es: "¿Cómo se dice 'hola' en francés?",
          de: "Wie sagt man 'hallo' auf Französisch?",
          nl: "Hoe zeg je 'hallo' in het Frans?"
        },
        options: [
          { en: "Bonjour", es: "Bonjour", de: "Bonjour", nl: "Bonjour" },
          { en: "Hola", es: "Hola", de: "Hola", nl: "Hola" },
          { en: "Guten Tag", es: "Guten Tag", de: "Guten Tag", nl: "Guten Tag" },
          { en: "Ciao", es: "Ciao", de: "Ciao", nl: "Ciao" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which language uses Cyrillic alphabet?",
          es: "¿Qué idioma usa el alfabeto cirílico?",
          de: "Welche Sprache verwendet das kyrillische Alphabet?",
          nl: "Welke taal gebruikt het cyrillische alfabet?"
        },
        options: [
          { en: "Russian", es: "Ruso", de: "Russisch", nl: "Russisch" },
          { en: "Greek", es: "Griego", de: "Griechisch", nl: "Grieks" },
          { en: "Arabic", es: "Árabe", de: "Arabisch", nl: "Arabisch" },
          { en: "Hebrew", es: "Hebreo", de: "Hebräisch", nl: "Hebreeuws" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What does 'gracias' mean in English?",
          es: "¿Qué significa 'gracias' en inglés?",
          de: "Was bedeutet 'gracias' auf Englisch?",
          nl: "Wat betekent 'gracias' in het Engels?"
        },
        options: [
          { en: "Thank you", es: "Gracias", de: "Danke", nl: "Dank je wel" },
          { en: "Hello", es: "Hola", de: "Hallo", nl: "Hallo" },
          { en: "Goodbye", es: "Adiós", de: "Auf Wiedersehen", nl: "Tot ziens" },
          { en: "Please", es: "Por favor", de: "Bitte", nl: "Alsjeblieft" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which country has four official languages?",
          es: "¿Qué país tiene cuatro idiomas oficiales?",
          de: "Welches Land hat vier Amtssprachen?",
          nl: "Welk land heeft vier officiële talen?"
        },
        options: [
          { en: "Switzerland", es: "Suiza", de: "Schweiz", nl: "Zwitserland" },
          { en: "Canada", es: "Canadá", de: "Kanada", nl: "Canada" },
          { en: "Belgium", es: "Bélgica", de: "Belgien", nl: "België" },
          { en: "India", es: "India", de: "Indien", nl: "India" }
        ],
        correctIndex: 0
      }
    ],

    // Day 18 - October 18th: Transportation
    day18: [
      {
        question: {
          en: "What was the first type of car engine commonly used?",
          es: "¿Cuál fue el primer tipo de motor de automóvil comúnmente utilizado?",
          de: "Was war die erste Art von Automotor, die häufig verwendet wurde?",
          nl: "Wat was het eerste type automotor dat veel werd gebruikt?"
        },
        options: [
          { en: "Steam engine", es: "Motor de vapor", de: "Dampfmaschine", nl: "Stoommachine" },
          { en: "Electric motor", es: "Motor eléctrico", de: "Elektromotor", nl: "Elektromotor" },
          { en: "Gasoline engine", es: "Motor de gasolina", de: "Benzinmotor", nl: "Benzinemotor" },
          { en: "Diesel engine", es: "Motor diésel", de: "Dieselmotor", nl: "Dieselmotor" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which brothers are credited with inventing the airplane?",
          es: "¿Qué hermanos son reconocidos por inventar el avión?",
          de: "Welche Brüder werden mit der Erfindung des Flugzeugs gutgeschrieben?",
          nl: "Welke broers worden gecrediteerd met de uitvinding van het vliegtuig?"
        },
        options: [
          { en: "Wright Brothers", es: "Hermanos Wright", de: "Gebrüder Wright", nl: "Gebroeders Wright" },
          { en: "Smith Brothers", es: "Hermanos Smith", de: "Gebrüder Smith", nl: "Gebroeders Smith" },
          { en: "Johnson Brothers", es: "Hermanos Johnson", de: "Gebrüder Johnson", nl: "Gebroeders Johnson" },
          { en: "Brown Brothers", es: "Hermanos Brown", de: "Gebrüder Brown", nl: "Gebroeders Brown" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What type of fuel do most modern rockets use?",
          es: "¿Qué tipo de combustible usan la mayoría de los cohetes modernos?",
          de: "Welche Art von Kraftstoff verwenden die meisten modernen Raketen?",
          nl: "Welk type brandstof gebruiken de meeste moderne raketten?"
        },
        options: [
          { en: "Liquid fuel", es: "Combustible líquido", de: "Flüssiger Kraftstoff", nl: "Vloeibare brandstof" },
          { en: "Coal", es: "Carbón", de: "Kohle", nl: "Kolen" },
          { en: "Wood", es: "Madera", de: "Holz", nl: "Hout" },
          { en: "Solar power", es: "Energía solar", de: "Solarenergie", nl: "Zonne-energie" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What does mph stand for?",
          es: "¿Qué significa mph?",
          de: "Wofür steht mph?",
          nl: "Waar staat mph voor?"
        },
        options: [
          { en: "Miles per hour", es: "Millas por hora", de: "Meilen pro Stunde", nl: "Mijlen per uur" },
          { en: "Meters per hour", es: "Metros por hora", de: "Meter pro Stunde", nl: "Meters per uur" },
          { en: "Minutes per hour", es: "Minutos por hora", de: "Minuten pro Stunde", nl: "Minuten per uur" },
          { en: "Mass per hour", es: "Masa por hora", de: "Masse pro Stunde", nl: "Massa per uur" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which vehicle runs on tracks?",
          es: "¿Qué vehículo funciona sobre rieles?",
          de: "Welches Fahrzeug fährt auf Gleisen?",
          nl: "Welk voertuig rijdt op rails?"
        },
        options: [
          { en: "Train", es: "Tren", de: "Zug", nl: "Trein" },
          { en: "Car", es: "Coche", de: "Auto", nl: "Auto" },
          { en: "Bus", es: "Autobús", de: "Bus", nl: "Bus" },
          { en: "Motorcycle", es: "Motocicleta", de: "Motorrad", nl: "Motorfiets" }
        ],
        correctIndex: 0
      }
    ],

    // Day 19 - October 19th: Environment & Climate
    day19: [
      {
        question: {
          en: "What gas is primarily responsible for global warming?",
          es: "¿Qué gas es principalmente responsable del calentamiento global?",
          de: "Welches Gas ist hauptsächlich für die globale Erwärmung verantwortlich?",
          nl: "Welk gas is hoofdzakelijk verantwoordelijk voor de opwarming van de aarde?"
        },
        options: [
          { en: "Carbon dioxide", es: "Dióxido de carbono", de: "Kohlendioxid", nl: "Koolstofdioxide" },
          { en: "Oxygen", es: "Oxígeno", de: "Sauerstoff", nl: "Zuurstof" },
          { en: "Nitrogen", es: "Nitrógeno", de: "Stickstoff", nl: "Stikstof" },
          { en: "Helium", es: "Helio", de: "Helium", nl: "Helium" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What are the three Rs of environmental conservation?",
          es: "¿Cuáles son las tres R de la conservación ambiental?",
          de: "Was sind die drei R des Umweltschutzes?",
          nl: "Wat zijn de drie R's van milieubehoud?"
        },
        options: [
          { en: "Reduce, Reuse, Recycle", es: "Reducir, Reutilizar, Reciclar", de: "Reduzieren, Wiederverwenden, Recyceln", nl: "Verminderen, Hergebruiken, Recyclen" },
          { en: "Read, Write, Review", es: "Leer, Escribir, Revisar", de: "Lesen, Schreiben, Überprüfen", nl: "Lezen, Schrijven, Herzien" },
          { en: "Run, Rest, Repeat", es: "Correr, Descansar, Repetir", de: "Laufen, Ruhen, Wiederholen", nl: "Rennen, Rusten, Herhalen" },
          { en: "Reach, Relax, Reflect", es: "Alcanzar, Relajar, Reflexionar", de: "Erreichen, Entspannen, Reflektieren", nl: "Bereiken, Ontspannen, Reflecteren" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which type of energy is considered renewable?",
          es: "¿Qué tipo de energía se considera renovable?",
          de: "Welche Art von Energie gilt als erneuerbar?",
          nl: "Welk type energie wordt beschouwd als hernieuwbaar?"
        },
        options: [
          { en: "Solar energy", es: "Energía solar", de: "Solarenergie", nl: "Zonne-energie" },
          { en: "Coal energy", es: "Energía del carbón", de: "Kohleenergie", nl: "Kolenenergie" },
          { en: "Oil energy", es: "Energía del petróleo", de: "Ölenergie", nl: "Olie-energie" },
          { en: "Gas energy", es: "Energía del gas", de: "Gasenergie", nl: "Gasenergie" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the ozone layer?",
          es: "¿Qué es la capa de ozono?",
          de: "Was ist die Ozonschicht?",
          nl: "Wat is de ozonlaag?"
        },
        options: [
          { en: "A protective layer around Earth", es: "Una capa protectora alrededor de la Tierra", de: "Eine Schutzschicht um die Erde", nl: "Een beschermende laag rond de aarde" },
          { en: "A type of cloud", es: "Un tipo de nube", de: "Eine Art von Wolke", nl: "Een type wolk" },
          { en: "Ocean water", es: "Agua del océano", de: "Ozeanwasser", nl: "Oceaanwater" },
          { en: "Underground rock", es: "Roca subterránea", de: "Unterirdisches Gestein", nl: "Ondergrondse steen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What happens during photosynthesis?",
          es: "¿Qué sucede durante la fotosíntesis?",
          de: "Was passiert bei der Photosynthese?",
          nl: "Wat gebeurt er tijdens fotosynthese?"
        },
        options: [
          { en: "Plants make oxygen from sunlight", es: "Las plantas producen oxígeno a partir de la luz solar", de: "Pflanzen produzieren Sauerstoff aus Sonnenlicht", nl: "Planten maken zuurstof uit zonlicht" },
          { en: "Plants eat insects", es: "Las plantas comen insectos", de: "Pflanzen fressen Insekten", nl: "Planten eten insecten" },
          { en: "Plants grow roots", es: "Las plantas crecen raíces", de: "Pflanzen wachsen Wurzeln", nl: "Planten groeien wortels" },
          { en: "Plants change colors", es: "Las plantas cambian de color", de: "Pflanzen wechseln die Farbe", nl: "Planten veranderen van kleur" }
        ],
        correctIndex: 0
      }
    ],

    // Day 20 - October 20th: Human Body
    day20: [
      {
        question: {
          en: "What is the largest organ in the human body?",
          es: "¿Cuál es el órgano más grande del cuerpo humano?",
          de: "Was ist das größte Organ im menschlichen Körper?",
          nl: "Wat is het grootste orgaan in het menselijke lichaam?"
        },
        options: [
          { en: "Skin", es: "Piel", de: "Haut", nl: "Huid" },
          { en: "Liver", es: "Hígado", de: "Leber", nl: "Lever" },
          { en: "Heart", es: "Corazón", de: "Herz", nl: "Hart" },
          { en: "Brain", es: "Cerebro", de: "Gehirn", nl: "Hersenen" }
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
          en: "Which part of the eye controls how much light enters?",
          es: "¿Qué parte del ojo controla cuánta luz entra?",
          de: "Welcher Teil des Auges kontrolliert, wie viel Licht eintritt?",
          nl: "Welk deel van het oog regelt hoeveel licht er binnenkomt?"
        },
        options: [
          { en: "Pupil", es: "Pupila", de: "Pupille", nl: "Pupil" },
          { en: "Cornea", es: "Córnea", de: "Hornhaut", nl: "Hoornvlies" },
          { en: "Retina", es: "Retina", de: "Netzhaut", nl: "Netvlies" },
          { en: "Lens", es: "Cristalino", de: "Linse", nl: "Lens" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What connects muscles to bones?",
          es: "¿Qué conecta los músculos con los huesos?",
          de: "Was verbindet Muskeln mit Knochen?",
          nl: "Wat verbindt spieren met botten?"
        },
        options: [
          { en: "Tendons", es: "Tendones", de: "Sehnen", nl: "Pezen" },
          { en: "Ligaments", es: "Ligamentos", de: "Bänder", nl: "Ligamenten" },
          { en: "Cartilage", es: "Cartílago", de: "Knorpel", nl: "Kraakbeen" },
          { en: "Nerves", es: "Nervios", de: "Nerven", nl: "Zenuwen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many lungs do humans have?",
          es: "¿Cuántos pulmones tienen los humanos?",
          de: "Wie viele Lungen haben Menschen?",
          nl: "Hoeveel longen hebben mensen?"
        },
        options: [
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "1", es: "1", de: "1", nl: "1" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" }
        ],
        correctIndex: 0
      }
    ],

    // Day 21 - October 21st: Halloween Preparations  
    day21: [
      {
        question: {
          en: "What is traditionally carved for Halloween?",
          es: "¿Qué se talla tradicionalmente para Halloween?",
          de: "Was wird traditionell zu Halloween geschnitzt?",
          nl: "Wat wordt traditioneel uitgehold voor Halloween?"
        },
        options: [
          { en: "Pumpkins", es: "Calabazas", de: "Kürbisse", nl: "Pompoenen" },
          { en: "Apples", es: "Manzanas", de: "Äpfel", nl: "Appels" },
          { en: "Carrots", es: "Zanahorias", de: "Karotten", nl: "Wortels" },
          { en: "Potatoes", es: "Patatas", de: "Kartoffeln", nl: "Aardappels" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do children say when trick-or-treating?",
          es: "¿Qué dicen los niños cuando van de puerta en puerta pidiendo dulces?",
          de: "Was sagen Kinder beim Trick-or-Treating?",
          nl: "Wat zeggen kinderen bij trick-or-treat?"
        },
        options: [
          { en: "Trick or treat", es: "Truco o trato", de: "Süßes oder Saures", nl: "Snoep of je leven" },
          { en: "Happy Halloween", es: "Feliz Halloween", de: "Fröhliches Halloween", nl: "Fijne Halloween" },
          { en: "Give me candy", es: "Dame dulces", de: "Gib mir Süßigkeiten", nl: "Geef me snoep" },
          { en: "Hello there", es: "Hola", de: "Hallo", nl: "Hallo daar" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What color are Halloween pumpkins usually?",
          es: "¿De qué color son normalmente las calabazas de Halloween?",
          de: "Welche Farbe haben Halloween-Kürbisse normalerweise?",
          nl: "Welke kleur hebben Halloween pompoenen meestal?"
        },
        options: [
          { en: "Orange", es: "Naranja", de: "Orange", nl: "Oranje" },
          { en: "Green", es: "Verde", de: "Grün", nl: "Groen" },
          { en: "Purple", es: "Morado", de: "Lila", nl: "Paars" },
          { en: "Blue", es: "Azul", de: "Blau", nl: "Blauw" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do you call a carved pumpkin with a light inside?",
          es: "¿Cómo se llama una calabaza tallada con una luz adentro?",
          de: "Wie nennt man einen geschnitzten Kürbis mit einem Licht darin?",
          nl: "Hoe noem je een uitgeholde pompoen met een lichtje erin?"
        },
        options: [
          { en: "Jack-o'-lantern", es: "Jack-o'-lantern", de: "Jack-o'-lantern", nl: "Jack-o'-lantern" },
          { en: "Pumpkin light", es: "Luz de calabaza", de: "Kürbislicht", nl: "Pompoenlicht" },
          { en: "Halloween lamp", es: "Lámpara de Halloween", de: "Halloween-Lampe", nl: "Halloween lamp" },
          { en: "Spooky gourd", es: "Calabaza espeluznante", de: "Gruseliger Kürbis", nl: "Griezelige kalebas" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do people wear on Halloween?",
          es: "¿Qué llevan puestas las personas en Halloween?",
          de: "Was tragen Menschen zu Halloween?",
          nl: "Wat dragen mensen met Halloween?"
        },
        options: [
          { en: "Costumes", es: "Disfraces", de: "Kostüme", nl: "Kostuums" },
          { en: "Pajamas", es: "Pijamas", de: "Pyjamas", nl: "Pyjama's" },
          { en: "School uniforms", es: "Uniformes escolares", de: "Schuluniformen", nl: "Schooluniformen" },
          { en: "Work clothes", es: "Ropa de trabajo", de: "Arbeitskleidung", nl: "Werkkleding" }
        ],
        correctIndex: 0
      }
    ],

    // Day 22 - October 22nd: Spooky Creatures
    day22: [
      {
        question: {
          en: "What creature is associated with Halloween and flies at night?",
          es: "¿Qué criatura se asocia con Halloween y vuela por la noche?",
          de: "Welche Kreatur wird mit Halloween assoziiert und fliegt nachts?",
          nl: "Welk wezen wordt geassocieerd met Halloween en vliegt 's nachts?"
        },
        options: [
          { en: "Bat", es: "Murciélago", de: "Fledermaus", nl: "Vleermuis" },
          { en: "Bird", es: "Pájaro", de: "Vogel", nl: "Vogel" },
          { en: "Butterfly", es: "Mariposa", de: "Schmetterling", nl: "Vlinder" },
          { en: "Bee", es: "Abeja", de: "Biene", nl: "Bij" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do witches traditionally ride?",
          es: "¿En qué montan tradicionalmente las brujas?",
          de: "Worauf reiten Hexen traditionell?",
          nl: "Waarop rijden heksen traditioneel?"
        },
        options: [
          { en: "Broomsticks", es: "Escobas", de: "Besenstiele", nl: "Bezems" },
          { en: "Bicycles", es: "Bicicletas", de: "Fahrräder", nl: "Fietsen" },
          { en: "Cars", es: "Coches", de: "Autos", nl: "Auto's" },
          { en: "Horses", es: "Caballos", de: "Pferde", nl: "Paarden" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What creature is said to turn into a bat?",
          es: "¿Qué criatura se dice que se convierte en murciélago?",
          de: "Welche Kreatur soll sich in eine Fledermaus verwandeln?",
          nl: "Welk wezen zou zich in een vleermuis veranderen?"
        },
        options: [
          { en: "Vampire", es: "Vampiro", de: "Vampir", nl: "Vampier" },
          { en: "Ghost", es: "Fantasma", de: "Geist", nl: "Geest" },
          { en: "Witch", es: "Bruja", de: "Hexe", nl: "Heks" },
          { en: "Zombie", es: "Zombie", de: "Zombie", nl: "Zombie" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is a ghost usually portrayed as being?",
          es: "¿Cómo suele representarse a un fantasma?",
          de: "Als was wird ein Geist normalerweise dargestellt?",
          nl: "Hoe wordt een geest meestal afgebeeld?"
        },
        options: [
          { en: "White and transparent", es: "Blanco y transparente", de: "Weiß und durchsichtig", nl: "Wit en doorzichtig" },
          { en: "Red and solid", es: "Rojo y sólido", de: "Rot und fest", nl: "Rood en solide" },
          { en: "Green and fuzzy", es: "Verde y peludo", de: "Grün und fuzzig", nl: "Groen en pluizig" },
          { en: "Blue and shiny", es: "Azul y brillante", de: "Blau und glänzend", nl: "Blauw en glanzend" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What animal is often associated with witches?",
          es: "¿Qué animal se asocia a menudo con las brujas?",
          de: "Welches Tier wird oft mit Hexen assoziiert?",
          nl: "Welk dier wordt vaak geassocieerd met heksen?"
        },
        options: [
          { en: "Black cat", es: "Gato negro", de: "Schwarze Katze", nl: "Zwarte kat" },
          { en: "White dog", es: "Perro blanco", de: "Weißer Hund", nl: "Witte hond" },
          { en: "Brown bear", es: "Oso pardo", de: "Braunbär", nl: "Bruine beer" },
          { en: "Gray mouse", es: "Ratón gris", de: "Graue Maus", nl: "Grijze muis" }
        ],
        correctIndex: 0
      }
    ],

    // Day 23 - October 23rd: Halloween Colors & Symbols
    day23: [
      {
        question: {
          en: "What are the traditional Halloween colors?",
          es: "¿Cuáles son los colores tradicionales de Halloween?",
          de: "Was sind die traditionellen Halloween-Farben?",
          nl: "Wat zijn de traditionele Halloween kleuren?"
        },
        options: [
          { en: "Orange and black", es: "Naranja y negro", de: "Orange und schwarz", nl: "Oranje en zwart" },
          { en: "Red and green", es: "Rojo y verde", de: "Rot und grün", nl: "Rood en groen" },
          { en: "Blue and yellow", es: "Azul y amarillo", de: "Blau und gelb", nl: "Blauw en geel" },
          { en: "Pink and purple", es: "Rosa y morado", de: "Rosa und lila", nl: "Roze en paars" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What type of web do spiders make?",
          es: "¿Qué tipo de telaraña hacen las arañas?",
          de: "Welche Art von Netz spinnen Spinnen?",
          nl: "Welk type web maken spinnen?"
        },
        options: [
          { en: "Spider web", es: "Telaraña", de: "Spinnennetz", nl: "Spinnenweb" },
          { en: "Fish net", es: "Red de pesca", de: "Fischernetz", nl: "Visnet" },
          { en: "Safety net", es: "Red de seguridad", de: "Sicherheitsnetz", nl: "Veiligheidsnet" },
          { en: "Tennis net", es: "Red de tenis", de: "Tennisnetz", nl: "Tennisnet" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What shape is commonly associated with Halloween?",
          es: "¿Qué forma se asocia comúnmente con Halloween?",
          de: "Welche Form wird häufig mit Halloween assoziiert?",
          nl: "Welke vorm wordt vaak geassocieerd met Halloween?"
        },
        options: [
          { en: "Crescent moon", es: "Luna creciente", de: "Halbmond", nl: "Halve maan" },
          { en: "Square", es: "Cuadrado", de: "Quadrat", nl: "Vierkant" },
          { en: "Triangle", es: "Triángulo", de: "Dreieck", nl: "Driehoek" },
          { en: "Circle", es: "Círculo", de: "Kreis", nl: "Cirkel" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What grows in a spooky Halloween garden?",
          es: "¿Qué crece en un jardín espeluznante de Halloween?",
          de: "Was wächst in einem gruseligen Halloween-Garten?",
          nl: "Wat groeit er in een enge Halloween tuin?"
        },
        options: [
          { en: "Dead plants", es: "Plantas muertas", de: "Tote Pflanzen", nl: "Dode planten" },
          { en: "Colorful flowers", es: "Flores coloridas", de: "Bunte Blumen", nl: "Kleurrijke bloemen" },
          { en: "Green grass", es: "Hierba verde", de: "Grünes Gras", nl: "Groen gras" },
          { en: "Fresh vegetables", es: "Verduras frescas", de: "Frisches Gemüse", nl: "Verse groenten" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do you call a group of witches?",
          es: "¿Cómo se llama a un grupo de brujas?",
          de: "Wie nennt man eine Gruppe von Hexen?",
          nl: "Hoe noem je een groep heksen?"
        },
        options: [
          { en: "Coven", es: "Aquelarre", de: "Hexenzirkel", nl: "Heksenkring" },
          { en: "Team", es: "Equipo", de: "Team", nl: "Team" },
          { en: "Club", es: "Club", de: "Verein", nl: "Club" },
          { en: "Gang", es: "Pandilla", de: "Bande", nl: "Bende" }
        ],
        correctIndex: 0
      }
    ],

    // Day 24 - October 24th: Halloween Traditions
    day24: [
      {
        question: {
          en: "When is Halloween celebrated?",
          es: "¿Cuándo se celebra Halloween?",
          de: "Wann wird Halloween gefeiert?",
          nl: "Wanneer wordt Halloween gevierd?"
        },
        options: [
          { en: "October 31st", es: "31 de octubre", de: "31. Oktober", nl: "31 oktober" },
          { en: "October 1st", es: "1 de octubre", de: "1. Oktober", nl: "1 oktober" },
          { en: "October 15th", es: "15 de octubre", de: "15. Oktober", nl: "15 oktober" },
          { en: "November 1st", es: "1 de noviembre", de: "1. November", nl: "1 november" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do children collect while trick-or-treating?",
          es: "¿Qué recogen los niños mientras van de puerta en puerta?",
          de: "Was sammeln Kinder beim Trick-or-Treating?",
          nl: "Wat verzamelen kinderen tijdens trick-or-treat?"
        },
        options: [
          { en: "Candy", es: "Dulces", de: "Süßigkeiten", nl: "Snoep" },
          { en: "Flowers", es: "Flores", de: "Blumen", nl: "Bloemen" },
          { en: "Leaves", es: "Hojas", de: "Blätter", nl: "Bladeren" },
          { en: "Toys", es: "Juguetes", de: "Spielzeug", nl: "Speelgoed" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the original name for Halloween?",
          es: "¿Cuál es el nombre original de Halloween?",
          de: "Wie ist der ursprüngliche Name für Halloween?",
          nl: "Wat is de oorspronkelijke naam voor Halloween?"
        },
        options: [
          { en: "All Hallows' Eve", es: "Víspera de Todos los Santos", de: "Allerheiligenabend", nl: "Allerheiligenavond" },
          { en: "Pumpkin Night", es: "Noche de Calabaza", de: "Kürbis-Nacht", nl: "Pompoennacht" },
          { en: "Ghost Day", es: "Día de Fantasmas", de: "Geistertag", nl: "Geestendag" },
          { en: "Candy Festival", es: "Festival de Dulces", de: "Süßigkeiten-Festival", nl: "Snoepfestival" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do people put in their windows for Halloween?",
          es: "¿Qué ponen las personas en sus ventanas para Halloween?",
          de: "Was stellen Menschen zu Halloween in ihre Fenster?",
          nl: "Wat zetten mensen in hun ramen voor Halloween?"
        },
        options: [
          { en: "Decorations", es: "Decoraciones", de: "Dekorationen", nl: "Versieringen" },
          { en: "Books", es: "Libros", de: "Bücher", nl: "Boeken" },
          { en: "Plants", es: "Plantas", de: "Pflanzen", nl: "Planten" },
          { en: "Food", es: "Comida", de: "Essen", nl: "Voedsel" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What sound do ghosts make?",
          es: "¿Qué sonido hacen los fantasmas?",
          de: "Welches Geräusch machen Geister?",
          nl: "Welk geluid maken geesten?"
        },
        options: [
          { en: "Boo!", es: "¡Bu!", de: "Buh!", nl: "Boe!" },
          { en: "Meow!", es: "¡Miau!", de: "Miau!", nl: "Miauw!" },
          { en: "Woof!", es: "¡Guau!", de: "Wau!", nl: "Woef!" },
          { en: "Hello!", es: "¡Hola!", de: "Hallo!", nl: "Hallo!" }
        ],
        correctIndex: 0
      }
    ],

    // Day 25 - October 25th: Haunted Places
    day25: [
      {
        question: {
          en: "Where do ghosts supposedly live?",
          es: "¿Dónde supuestamente viven los fantasmas?",
          de: "Wo leben angeblich Geister?",
          nl: "Waar zouden geesten wonen?"
        },
        options: [
          { en: "Haunted houses", es: "Casas embrujadas", de: "Spukhäuser", nl: "Spookhuizen" },
          { en: "Shopping malls", es: "Centros comerciales", de: "Einkaufszentren", nl: "Winkelcentra" },
          { en: "Schools", es: "Escuelas", de: "Schulen", nl: "Scholen" },
          { en: "Hospitals", es: "Hospitales", de: "Krankenhäuser", nl: "Ziekenhuizen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What makes a house 'haunted'?",
          es: "¿Qué hace que una casa esté 'embrujada'?",
          de: "Was macht ein Haus zu einem 'Spukhaus'?",
          nl: "Wat maakt een huis 'spookachtig'?"
        },
        options: [
          { en: "Supernatural activity", es: "Actividad sobrenatural", de: "Übernatürliche Aktivität", nl: "Bovennatuurlijke activiteit" },
          { en: "Old furniture", es: "Muebles viejos", de: "Alte Möbel", nl: "Oude meubels" },
          { en: "Bright lights", es: "Luces brillantes", de: "Helle Lichter", nl: "Felle lichten" },
          { en: "New paint", es: "Pintura nueva", de: "Neue Farbe", nl: "Nieuwe verf" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What typically happens in a haunted house?",
          es: "¿Qué suele pasar en una casa embrujada?",
          de: "Was passiert normalerweise in einem Spukhaus?",
          nl: "Wat gebeurt er meestal in een spookhuis?"
        },
        options: [
          { en: "Strange noises and movements", es: "Ruidos y movimientos extraños", de: "Seltsame Geräusche und Bewegungen", nl: "Vreemde geluiden en bewegingen" },
          { en: "Cooking and cleaning", es: "Cocinar y limpiar", de: "Kochen und Putzen", nl: "Koken en schoonmaken" },
          { en: "Parties and celebrations", es: "Fiestas y celebraciones", de: "Partys und Feiern", nl: "Feesten en vieringen" },
          { en: "Sleeping and resting", es: "Dormir y descansar", de: "Schlafen und Ruhen", nl: "Slapen en rusten" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What kind of building might be haunted?",
          es: "¿Qué tipo de edificio podría estar embrujado?",
          de: "Welche Art von Gebäude könnte spuken?",
          nl: "Welk soort gebouw zou kunnen spoken?"
        },
        options: [
          { en: "Old castle", es: "Castillo antiguo", de: "Altes Schloss", nl: "Oud kasteel" },
          { en: "New office", es: "Oficina nueva", de: "Neues Büro", nl: "Nieuw kantoor" },
          { en: "Fresh bakery", es: "Panadería fresca", de: "Frische Bäckerei", nl: "Verse bakkerij" },
          { en: "Modern gym", es: "Gimnasio moderno", de: "Modernes Fitnessstudio", nl: "Moderne sportschool" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What time are ghosts most active?",
          es: "¿A qué hora son más activos los fantasmas?",
          de: "Zu welcher Zeit sind Geister am aktivsten?",
          nl: "Op welk tijdstip zijn geesten het meest actief?"
        },
        options: [
          { en: "At night", es: "Por la noche", de: "Nachts", nl: "'s Nachts" },
          { en: "In the morning", es: "Por la mañana", de: "Morgens", nl: "'s Ochtends" },
          { en: "At lunch time", es: "A la hora del almuerzo", de: "Zur Mittagszeit", nl: "Tijdens de lunch" },
          { en: "In the afternoon", es: "Por la tarde", de: "Nachmittags", nl: "'s Middags" }
        ],
        correctIndex: 0
      }
    ],

    // Day 26 - October 26th: Halloween Treats
    day26: [
      {
        question: {
          en: "What is the most popular Halloween candy?",
          es: "¿Cuál es el dulce más popular de Halloween?",
          de: "Was ist die beliebteste Halloween-Süßigkeit?",
          nl: "Wat is het populairste Halloween snoepje?"
        },
        options: [
          { en: "Chocolate", es: "Chocolate", de: "Schokolade", nl: "Chocolade" },
          { en: "Vegetables", es: "Verduras", de: "Gemüse", nl: "Groenten" },
          { en: "Fruits", es: "Frutas", de: "Früchte", nl: "Fruit" },
          { en: "Bread", es: "Pan", de: "Brot", nl: "Brood" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What candy is shaped like corn?",
          es: "¿Qué dulce tiene forma de maíz?",
          de: "Welche Süßigkeit hat die Form von Mais?",
          nl: "Welke snoep heeft de vorm van maïs?"
        },
        options: [
          { en: "Candy corn", es: "Mazorca de dulce", de: "Candy Corn", nl: "Candy corn" },
          { en: "Gummy bears", es: "Ositos de goma", de: "Gummibärchen", nl: "Gummiberen" },
          { en: "Lollipops", es: "Piruletas", de: "Lutscher", nl: "Lollies" },
          { en: "Chocolate bars", es: "Barras de chocolate", de: "Schokoladenriegel", nl: "Chocoladerepen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do children use to collect Halloween candy?",
          es: "¿Qué usan los niños para recoger dulces de Halloween?",
          de: "Was verwenden Kinder zum Sammeln von Halloween-Süßigkeiten?",
          nl: "Wat gebruiken kinderen om Halloween snoep te verzamelen?"
        },
        options: [
          { en: "Bags or buckets", es: "Bolsas o cubos", de: "Taschen oder Eimer", nl: "Zakken of emmers" },
          { en: "Pockets", es: "Bolsillos", de: "Taschen", nl: "Zakken" },
          { en: "Hands", es: "Manos", de: "Hände", nl: "Handen" },
          { en: "Shoes", es: "Zapatos", de: "Schuhe", nl: "Schoenen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What Halloween treat is made with apples?",
          es: "¿Qué golosina de Halloween se hace con manzanas?",
          de: "Welche Halloween-Leckerei wird mit Äpfeln gemacht?",
          nl: "Welke Halloween traktatie wordt gemaakt met appels?"
        },
        options: [
          { en: "Caramel apples", es: "Manzanas con caramelo", de: "Karamell-Äpfel", nl: "Karamel appels" },
          { en: "Apple juice", es: "Jugo de manzana", de: "Apfelsaft", nl: "Appelsap" },
          { en: "Apple chips", es: "Chips de manzana", de: "Apfelchips", nl: "Appelchips" },
          { en: "Apple sauce", es: "Salsa de manzana", de: "Apfelsauce", nl: "Appelmoes" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do people give to trick-or-treaters?",
          es: "¿Qué dan las personas a los niños que van de puerta en puerta?",
          de: "Was geben Menschen an Trick-or-Treater?",
          nl: "Wat geven mensen aan trick-or-treaters?"
        },
        options: [
          { en: "Halloween candy", es: "Dulces de Halloween", de: "Halloween-Süßigkeiten", nl: "Halloween snoep" },
          { en: "Money", es: "Dinero", de: "Geld", nl: "Geld" },
          { en: "Books", es: "Libros", de: "Bücher", nl: "Boeken" },
          { en: "Clothes", es: "Ropa", de: "Kleidung", nl: "Kleren" }
        ],
        correctIndex: 0
      }
    ],

    // Day 27 - October 27th: Spooky Sounds
    day27: [
      {
        question: {
          en: "What sound do owls make at night?",
          es: "¿Qué sonido hacen los búhos por la noche?",
          de: "Welches Geräusch machen Eulen nachts?",
          nl: "Welk geluid maken uilen 's nachts?"
        },
        options: [
          { en: "Hoot", es: "Ululato", de: "Huh", nl: "Oehoe" },
          { en: "Bark", es: "Ladrido", de: "Bellen", nl: "Blaffen" },
          { en: "Meow", es: "Miau", de: "Miau", nl: "Miauw" },
          { en: "Chirp", es: "Pío", de: "Zwitschern", nl: "Tjilpen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What sound do chains make in horror movies?",
          es: "¿Qué sonido hacen las cadenas en las películas de terror?",
          de: "Welches Geräusch machen Ketten in Horrorfilmen?",
          nl: "Welk geluid maken kettingen in horrorfilms?"
        },
        options: [
          { en: "Clank and rattle", es: "Clang y traqueteo", de: "Klirren und Rasseln", nl: "Rammelen en ratelen" },
          { en: "Whistle", es: "Silbido", de: "Pfeifen", nl: "Fluiten" },
          { en: "Ring", es: "Timbre", de: "Klingeln", nl: "Rinkelen" },
          { en: "Hum", es: "Tarareo", de: "Summen", nl: "Zoemen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What does a wolf do at the full moon?",
          es: "¿Qué hace un lobo en luna llena?",
          de: "Was macht ein Wolf bei Vollmond?",
          nl: "Wat doet een wolf bij volle maan?"
        },
        options: [
          { en: "Howl", es: "Aullar", de: "Heulen", nl: "Huilen" },
          { en: "Sing", es: "Cantar", de: "Singen", nl: "Zingen" },
          { en: "Laugh", es: "Reír", de: "Lachen", nl: "Lachen" },
          { en: "Whisper", es: "Susurrar", de: "Flüstern", nl: "Fluisteren" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What sound do doors make in haunted houses?",
          es: "¿Qué sonido hacen las puertas en casas embrujadas?",
          de: "Welches Geräusch machen Türen in Spukhäusern?",
          nl: "Welk geluid maken deuren in spookhuizen?"
        },
        options: [
          { en: "Creak", es: "Crujido", de: "Knarren", nl: "Kraken" },
          { en: "Ring", es: "Timbre", de: "Klingeln", nl: "Rinkelen" },
          { en: "Buzz", es: "Zumbido", de: "Summen", nl: "Zoemen" },
          { en: "Click", es: "Clic", de: "Klicken", nl: "Klikken" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What creates thunder during storms?",
          es: "¿Qué crea el trueno durante las tormentas?",
          de: "Was erzeugt Donner während Stürmen?",
          nl: "Wat veroorzaakt donder tijdens onweer?"
        },
        options: [
          { en: "Lightning", es: "Rayo", de: "Blitz", nl: "Bliksem" },
          { en: "Wind", es: "Viento", de: "Wind", nl: "Wind" },
          { en: "Rain", es: "Lluvia", de: "Regen", nl: "Regen" },
          { en: "Clouds", es: "Nubes", de: "Wolken", nl: "Wolken" }
        ],
        correctIndex: 0
      }
    ],

    // Day 28 - October 28th: Halloween Movies & Stories
    day28: [
      {
        question: {
          en: "What type of stories are popular during Halloween?",
          es: "¿Qué tipo de historias son populares durante Halloween?",
          de: "Welche Art von Geschichten sind zu Halloween beliebt?",
          nl: "Welk type verhalen zijn populair tijdens Halloween?"
        },
        options: [
          { en: "Scary stories", es: "Historias de miedo", de: "Gruselgeschichten", nl: "Enge verhalen" },
          { en: "Love stories", es: "Historias de amor", de: "Liebesgeschichten", nl: "Liefdesverhalen" },
          { en: "Cooking stories", es: "Historias de cocina", de: "Kochgeschichten", nl: "Kookverhalen" },
          { en: "Travel stories", es: "Historias de viajes", de: "Reisegeschichten", nl: "Reisverhalen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do horror movies try to make people feel?",
          es: "¿Qué tratan de hacer sentir las películas de terror?",
          de: "Was versuchen Horrorfilme bei Menschen zu bewirken?",
          nl: "Wat proberen horrorfilms mensen te laten voelen?"
        },
        options: [
          { en: "Scared", es: "Asustado", de: "Ängstlich", nl: "Bang" },
          { en: "Happy", es: "Feliz", de: "Glücklich", nl: "Blij" },
          { en: "Hungry", es: "Hambriento", de: "Hungrig", nl: "Hongerig" },
          { en: "Sleepy", es: "Somnoliento", de: "Schläfrig", nl: "Slaperig" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is a common setting for Halloween stories?",
          es: "¿Cuál es un escenario común para las historias de Halloween?",
          de: "Was ist ein häufiger Schauplatz für Halloween-Geschichten?",
          nl: "Wat is een veelvoorkomende setting voor Halloween verhalen?"
        },
        options: [
          { en: "Dark, spooky places", es: "Lugares oscuros y espeluznantes", de: "Dunkle, gruselige Orte", nl: "Donkere, enge plaatsen" },
          { en: "Bright beaches", es: "Playas brillantes", de: "Helle Strände", nl: "Heldere stranden" },
          { en: "Busy markets", es: "Mercados ocupados", de: "Belebte Märkte", nl: "Drukke markten" },
          { en: "Sunny parks", es: "Parques soleados", de: "Sonnige Parks", nl: "Zonnige parken" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do people often watch on Halloween night?",
          es: "¿Qué suele ver la gente la noche de Halloween?",
          de: "Was schauen Menschen oft in der Halloween-Nacht?",
          nl: "Wat kijken mensen vaak op Halloween avond?"
        },
        options: [
          { en: "Horror movies", es: "Películas de terror", de: "Horrorfilme", nl: "Horrorfilms" },
          { en: "Cooking shows", es: "Programas de cocina", de: "Kochshows", nl: "Kookprogramma's" },
          { en: "News programs", es: "Programas de noticias", de: "Nachrichtensendungen", nl: "Nieuwsprogramma's" },
          { en: "Sports games", es: "Juegos deportivos", de: "Sportspiele", nl: "Sportwedstrijden" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What makes a story 'spooky'?",
          es: "¿Qué hace que una historia sea 'espeluznante'?",
          de: "Was macht eine Geschichte 'gruselig'?",
          nl: "Wat maakt een verhaal 'eng'?"
        },
        options: [
          { en: "Mysterious and frightening elements", es: "Elementos misteriosos y aterradores", de: "Mysteriöse und erschreckende Elemente", nl: "Mysterieuze en beangstigende elementen" },
          { en: "Funny jokes", es: "Chistes graciosos", de: "Lustige Witze", nl: "Grappige grappen" },
          { en: "Beautiful scenery", es: "Paisajes hermosos", de: "Schöne Landschaften", nl: "Prachtige landschappen" },
          { en: "Happy endings", es: "Finales felices", de: "Glückliche Enden", nl: "Gelukkige eindes" }
        ],
        correctIndex: 0
      }
    ],

    // Day 29 - October 29th: Halloween Safety
    day29: [
      {
        question: {
          en: "What should children carry while trick-or-treating at night?",
          es: "¿Qué deben llevar los niños mientras van de puerta en puerta por la noche?",
          de: "Was sollten Kinder beim nächtlichen Trick-or-Treating dabei haben?",
          nl: "Wat moeten kinderen bij zich dragen tijdens trick-or-treat 's nachts?"
        },
        options: [
          { en: "Flashlight", es: "Linterna", de: "Taschenlampe", nl: "Zaklamp" },
          { en: "Umbrella", es: "Paraguas", de: "Regenschirm", nl: "Paraplu" },
          { en: "Backpack", es: "Mochila", de: "Rucksack", nl: "Rugzak" },
          { en: "Camera", es: "Cámara", de: "Kamera", nl: "Camera" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What should you do before eating Halloween candy?",
          es: "¿Qué debes hacer antes de comer dulces de Halloween?",
          de: "Was solltest du vor dem Essen von Halloween-Süßigkeiten tun?",
          nl: "Wat moet je doen voordat je Halloween snoep eet?"
        },
        options: [
          { en: "Check it with parents", es: "Revisarlo con los padres", de: "Mit Eltern überprüfen", nl: "Controleren met ouders" },
          { en: "Share with friends", es: "Compartir con amigos", de: "Mit Freunden teilen", nl: "Delen met vrienden" },
          { en: "Hide it away", es: "Esconderlo", de: "Verstecken", nl: "Wegverstopppn" },
          { en: "Count all pieces", es: "Contar todas las piezas", de: "Alle Stücke zählen", nl: "Alle stukjes tellen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What should you wear to be visible while trick-or-treating?",
          es: "¿Qué debes usar para ser visible mientras vas de puerta en puerta?",
          de: "Was solltest du tragen, um beim Trick-or-Treating sichtbar zu sein?",
          nl: "Wat moet je dragen om zichtbaar te zijn tijdens trick-or-treat?"
        },
        options: [
          { en: "Reflective materials", es: "Materiales reflectantes", de: "Reflektierende Materialien", nl: "Reflecterende materialen" },
          { en: "Dark clothing", es: "Ropa oscura", de: "Dunkle Kleidung", nl: "Donkere kleding" },
          { en: "Regular clothes", es: "Ropa normal", de: "Normale Kleidung", nl: "Gewone kleren" },
          { en: "Heavy coats", es: "Abrigos pesados", de: "Schwere Mäntel", nl: "Zware jassen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Who should accompany young children while trick-or-treating?",
          es: "¿Quién debe acompañar a los niños pequeños mientras van de puerta en puerta?",
          de: "Wer sollte kleine Kinder beim Trick-or-Treating begleiten?",
          nl: "Wie moet jonge kinderen begeleiden tijdens trick-or-treat?"
        },
        options: [
          { en: "An adult", es: "Un adulto", de: "Ein Erwachsener", nl: "Een volwassene" },
          { en: "A pet", es: "Una mascota", de: "Ein Haustier", nl: "Een huisdier" },
          { en: "No one", es: "Nadie", de: "Niemand", nl: "Niemand" },
          { en: "Other children", es: "Otros niños", de: "Andere Kinder", nl: "Andere kinderen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What should you avoid when choosing a Halloween costume?",
          es: "¿Qué debes evitar al elegir un disfraz de Halloween?",
          de: "Was solltest du bei der Wahl eines Halloween-Kostüms vermeiden?",
          nl: "Wat moet je vermijden bij het kiezen van een Halloween kostuum?"
        },
        options: [
          { en: "Long trailing parts that can trip you", es: "Partes largas que pueden hacerte tropezar", de: "Lange schleppende Teile, über die man stolpern kann", nl: "Lange slepende delen waar je over kunt struikelen" },
          { en: "Bright colors", es: "Colores brillantes", de: "Helle Farben", nl: "Felle kleuren" },
          { en: "Comfortable shoes", es: "Zapatos cómodos", de: "Bequeme Schuhe", nl: "Comfortabele schoenen" },
          { en: "Weather-appropriate fabric", es: "Tela apropiada para el clima", de: "Wettergerechter Stoff", nl: "Weer-geschikte stof" }
        ],
        correctIndex: 0
      }
    ],

    // Day 30 - October 30th: Mischief Night
    day30: [
      {
        question: {
          en: "What is October 30th sometimes called?",
          es: "¿Cómo se llama a veces el 30 de octubre?",
          de: "Wie wird der 30. Oktober manchmal genannt?",
          nl: "Hoe wordt 30 oktober soms genoemd?"
        },
        options: [
          { en: "Mischief Night", es: "Noche de travesuras", de: "Schabernack-Nacht", nl: "Kattenkwaad nacht" },
          { en: "Candy Night", es: "Noche de dulces", de: "Süßigkeiten-Nacht", nl: "Snoep nacht" },
          { en: "Ghost Night", es: "Noche de fantasmas", de: "Geister-Nacht", nl: "Geesten nacht" },
          { en: "Pumpkin Night", es: "Noche de calabaza", de: "Kürbis-Nacht", nl: "Pompoen nacht" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do some people do on Mischief Night?",
          es: "¿Qué hace alguna gente en la Noche de travesuras?",
          de: "Was machen manche Leute in der Schabernack-Nacht?",
          nl: "Wat doen sommige mensen op Kattenkwaad nacht?"
        },
        options: [
          { en: "Harmless pranks", es: "Bromas inofensivas", de: "Harmlose Streiche", nl: "Onschuldige grappen" },
          { en: "Serious crimes", es: "Delitos graves", de: "Schwere Verbrechen", nl: "Ernstige misdaden" },
          { en: "Study for exams", es: "Estudiar para exámenes", de: "Für Prüfungen lernen", nl: "Studeren voor examens" },
          { en: "Go to bed early", es: "Acostarse temprano", de: "Früh ins Bett gehen", nl: "Vroeg naar bed gaan" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What should pranks on Mischief Night be?",
          es: "¿Cómo deben ser las bromas en la Noche de travesuras?",
          de: "Wie sollten Streiche in der Schabernack-Nacht sein?",
          nl: "Hoe moeten grappen zijn op Kattenkwaad nacht?"
        },
        options: [
          { en: "Safe and harmless", es: "Seguras e inofensivas", de: "Sicher und harmlos", nl: "Veilig en onschuldig" },
          { en: "Dangerous and scary", es: "Peligrosas y aterradoras", de: "Gefährlich und beängstigend", nl: "Gevaarlijk en eng" },
          { en: "Expensive and wasteful", es: "Caras y desperdiciantes", de: "Teuer und verschwenderisch", nl: "Duur en verspillend" },
          { en: "Mean and hurtful", es: "Crueles y hirientes", de: "Gemein und verletzend", nl: "Gemeen en kwetsend" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the night before Halloween called in some places?",
          es: "¿Cómo se llama la noche antes de Halloween en algunos lugares?",
          de: "Wie wird die Nacht vor Halloween an manchen Orten genannt?",
          nl: "Hoe wordt de nacht voor Halloween op sommige plaatsen genoemd?"
        },
        options: [
          { en: "Devil's Night", es: "Noche del Diablo", de: "Teufelsnacht", nl: "Duivelsnacht" },
          { en: "Angel's Night", es: "Noche del Ángel", de: "Engelsnacht", nl: "Engelennacht" },
          { en: "Happy Night", es: "Noche Feliz", de: "Glückliche Nacht", nl: "Vrolijke nacht" },
          { en: "Quiet Night", es: "Noche Silenciosa", de: "Stille Nacht", nl: "Stille nacht" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What should you remember about Mischief Night activities?",
          es: "¿Qué debes recordar sobre las actividades de la Noche de travesuras?",
          de: "Was solltest du über Aktivitäten in der Schabernack-Nacht bedenken?",
          nl: "Wat moet je onthouden over Kattenkwaad nacht activiteiten?"
        },
        options: [
          { en: "Respect others and their property", es: "Respetar a otros y su propiedad", de: "Respektiere andere und ihr Eigentum", nl: "Respecteer anderen en hun eigendom" },
          { en: "Do whatever you want", es: "Hacer lo que quieras", de: "Tu was du willst", nl: "Doe wat je wilt" },
          { en: "Be as loud as possible", es: "Ser lo más ruidoso posible", de: "So laut wie möglich sein", nl: "Zo luid mogelijk zijn" },
          { en: "Stay out all night", es: "Quedarse fuera toda la noche", de: "Die ganze Nacht draußen bleiben", nl: "De hele nacht wegblijven" }
        ],
        correctIndex: 0
      }
    ],

    // Day 31 - October 31st: Halloween Day
    day31: [
      {
        question: {
          en: "What date is Halloween?",
          es: "¿En qué fecha es Halloween?",
          de: "An welchem Datum ist Halloween?",
          nl: "Op welke datum is Halloween?"
        },
        options: [
          { en: "October 31st", es: "31 de octubre", de: "31. Oktober", nl: "31 oktober" },
          { en: "November 1st", es: "1 de noviembre", de: "1. November", nl: "1 november" },
          { en: "October 30th", es: "30 de octubre", de: "30. Oktober", nl: "30 oktober" },
          { en: "December 31st", es: "31 de diciembre", de: "31. Dezember", nl: "31 december" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is Halloween also known as?",
          es: "¿Cómo también se conoce Halloween?",
          de: "Als was ist Halloween auch bekannt?",
          nl: "Hoe staat Halloween ook bekend?"
        },
        options: [
          { en: "All Hallows' Eve", es: "Víspera de Todos los Santos", de: "Allerheiligenabend", nl: "Allerheiligenavond" },
          { en: "Christmas Eve", es: "Nochebuena", de: "Heiligabend", nl: "Kerstavond" },
          { en: "New Year's Eve", es: "Nochevieja", de: "Silvester", nl: "Oudejaarsavond" },
          { en: "Valentine's Day", es: "Día de San Valentín", de: "Valentinstag", nl: "Valentijnsdag" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What phrase is most associated with Halloween?",
          es: "¿Qué frase se asocia más con Halloween?",
          de: "Welcher Spruch wird am meisten mit Halloween assoziiert?",
          nl: "Welke uitspraak wordt het meest geassocieerd met Halloween?"
        },
        options: [
          { en: "Trick or treat!", es: "¡Truco o trato!", de: "Süßes oder Saures!", nl: "Snoep of je leven!" },
          { en: "Happy Birthday!", es: "¡Feliz cumpleaños!", de: "Alles Gute zum Geburtstag!", nl: "Gefeliciteerd!" },
          { en: "Merry Christmas!", es: "¡Feliz Navidad!", de: "Frohe Weihnachten!", nl: "Vrolijk Kerstfeest!" },
          { en: "Good luck!", es: "¡Buena suerte!", de: "Viel Glück!", nl: "Veel succes!" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the main symbol of Halloween?",
          es: "¿Cuál es el símbolo principal de Halloween?",
          de: "Was ist das Hauptsymbol von Halloween?",
          nl: "Wat is het belangrijkste symbool van Halloween?"
        },
        options: [
          { en: "Jack-o'-lantern", es: "Jack-o'-lantern", de: "Jack-o'-lantern", nl: "Jack-o'-lantern" },
          { en: "Christmas tree", es: "Árbol de Navidad", de: "Weihnachtsbaum", nl: "Kerstboom" },
          { en: "Easter egg", es: "Huevo de Pascua", de: "Osterei", nl: "Paasei" },
          { en: "Birthday cake", es: "Pastel de cumpleaños", de: "Geburtstagskuchen", nl: "Verjaardagstaart" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What makes October 31st special?",
          es: "¿Qué hace especial al 31 de octubre?",
          de: "Was macht den 31. Oktober besonders?",
          nl: "Wat maakt 31 oktober speciaal?"
        },
        options: [
          { en: "It's the spookiest night of the year", es: "Es la noche más espeluznante del año", de: "Es ist die gruseligste Nacht des Jahres", nl: "Het is de engste nacht van het jaar" },
          { en: "It's the last day of school", es: "Es el último día de clases", de: "Es ist der letzte Schultag", nl: "Het is de laatste schooldag" },
          { en: "It's a national holiday", es: "Es un día festivo nacional", de: "Es ist ein nationaler Feiertag", nl: "Het is een nationale feestdag" },
          { en: "It's the start of winter", es: "Es el comienzo del invierno", de: "Es ist der Winterbeginn", nl: "Het is het begin van de winter" }
        ],
        correctIndex: 0
      }
    ]
  };

  // Export October challenges
  if (typeof window.addMonthChallenges === 'function') {
    window.addMonthChallenges('october', octoberChallenges);
  }

})();