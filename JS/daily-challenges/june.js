// June Daily Challenges - 30 days × 5 questions each = 150 total questions
(function() {
  
  const juneChallenges = {
    name: {
      en: "June Daily Challenges",
      es: "Desafíos Diarios de Junio", 
      de: "Juni Tägliche Herausforderungen",
      nl: "Juni Dagelijkse Uitdagingen"
    },
    
    // Day 1 - June 1st: Start of Summer
    day1: [
      {
        question: {
          en: "What season begins in June?",
          es: "¿Qué estación comienza en junio?",
          de: "Welche Jahreszeit beginnt im Juni?",
          nl: "Welk seizoen begint in juni?"
        },
        options: [
          { en: "Summer", es: "Verano", de: "Sommer", nl: "Zomer" },
          { en: "Spring", es: "Primavera", de: "Frühling", nl: "Lente" },
          { en: "Winter", es: "Invierno", de: "Winter", nl: "Winter" },
          { en: "Autumn", es: "Otoño", de: "Herbst", nl: "Herfst" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the sixth month of the year?",
          es: "¿Cuál es el sexto mes del año?",
          de: "Was ist der sechste Monat des Jahres?",
          nl: "Wat is de zesde maand van het jaar?"
        },
        options: [
          { en: "June", es: "Junio", de: "Juni", nl: "Juni" },
          { en: "May", es: "Mayo", de: "Mai", nl: "Mei" },
          { en: "July", es: "Julio", de: "Juli", nl: "Juli" },
          { en: "April", es: "Abril", de: "April", nl: "April" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many days are in June?",
          es: "¿Cuántos días tiene junio?",
          de: "Wie viele Tage hat der Juni?",
          nl: "Hoeveel dagen heeft juni?"
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
          en: "What birthstone is associated with June?",
          es: "¿Qué piedra de nacimiento se asocia con junio?",
          de: "Welcher Geburtsstein wird mit dem Juni verbunden?",
          nl: "Welke geboortesteen wordt geassocieerd met juni?"
        },
        options: [
          { en: "Pearl", es: "Perla", de: "Perle", nl: "Parel" },
          { en: "Ruby", es: "Rubí", de: "Rubin", nl: "Robijn" },
          { en: "Emerald", es: "Esmeralda", de: "Smaragd", nl: "Smaragd" },
          { en: "Sapphire", es: "Zafiro", de: "Saphir", nl: "Saffier" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What happens to daylight hours in June in the Northern Hemisphere?",
          es: "¿Qué pasa con las horas de luz en junio en el hemisferio norte?",
          de: "Was passiert mit den Tagesstunden im Juni auf der Nordhalbkugel?",
          nl: "Wat gebeurt er met de daglichturen in juni op het noordelijk halfrond?"
        },
        options: [
          { en: "They reach their longest", es: "Alcanzan su máxima duración", de: "Sie erreichen ihre längste Dauer", nl: "Ze bereiken hun langste duur" },
          { en: "They get shorter", es: "Se vuelven más cortas", de: "Sie werden kürzer", nl: "Ze worden korter" },
          { en: "They stay the same", es: "Permanecen igual", de: "Sie bleiben gleich", nl: "Ze blijven hetzelfde" },
          { en: "They disappear", es: "Desaparecen", de: "Sie verschwinden", nl: "Ze verdwijnen" }
        ],
        correctIndex: 0
      }
    ],

    // Day 2 - June 2nd: Summer Weather
    day2: [
      {
        question: {
          en: "What type of weather is typical in June?",
          es: "¿Qué tipo de clima es típico en junio?",
          de: "Welche Art von Wetter ist typisch im Juni?",
          nl: "Wat voor weer is typisch in juni?"
        },
        options: [
          { en: "Warm and sunny", es: "Cálido y soleado", de: "Warm und sonnig", nl: "Warm en zonnig" },
          { en: "Cold and snowy", es: "Frío y nevado", de: "Kalt und schneereich", nl: "Koud en sneeuwachtig" },
          { en: "Always raining", es: "Siempre lloviendo", de: "Immer regnerisch", nl: "Altijd regenachtig" },
          { en: "Freezing temperatures", es: "Temperaturas heladas", de: "Eisige Temperaturen", nl: "Vriestemperaturen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What should you wear to protect yourself from the sun?",
          es: "¿Qué debes ponerte para protegerte del sol?",
          de: "Was solltest du tragen, um dich vor der Sonne zu schützen?",
          nl: "Wat moet je dragen om jezelf tegen de zon te beschermen?"
        },
        options: [
          { en: "Sunscreen and hat", es: "Protector solar y sombrero", de: "Sonnencreme und Hut", nl: "Zonnebrandcrème en hoed" },
          { en: "Heavy winter coat", es: "Abrigo pesado de invierno", de: "Schwerer Wintermantel", nl: "Zware winterjas" },
          { en: "Thick boots", es: "Botas gruesas", de: "Dicke Stiefel", nl: "Dikke laarzen" },
          { en: "Warm scarf", es: "Bufanda caliente", de: "Warmer Schal", nl: "Warme sjaal" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What happens to plants in warm June weather?",
          es: "¿Qué pasa con las plantas en el clima cálido de junio?",
          de: "Was passiert mit Pflanzen bei warmem Juni-Wetter?",
          nl: "Wat gebeurt er met planten in het warme juni weer?"
        },
        options: [
          { en: "They grow quickly", es: "Crecen rápidamente", de: "Sie wachsen schnell", nl: "Ze groeien snel" },
          { en: "They stop growing", es: "Dejan de crecer", de: "Sie hören auf zu wachsen", nl: "Ze stoppen met groeien" },
          { en: "They turn white", es: "Se vuelven blancas", de: "Sie werden weiß", nl: "Ze worden wit" },
          { en: "They fall asleep", es: "Se duermen", de: "Sie schlafen ein", nl: "Ze vallen in slaap" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do people like to drink on hot June days?",
          es: "¿Qué les gusta beber a las personas en los días calurosos de junio?",
          de: "Was trinken Menschen gerne an heißen Juni-Tagen?",
          nl: "Wat drinken mensen graag op warme juni dagen?"
        },
        options: [
          { en: "Cold beverages", es: "Bebidas frías", de: "Kalte Getränke", nl: "Koude dranken" },
          { en: "Hot coffee", es: "Café caliente", de: "Heißer Kaffee", nl: "Hete koffie" },
          { en: "Hot tea", es: "Té caliente", de: "Heißer Tee", nl: "Hete thee" },
          { en: "Warm milk", es: "Leche tibia", de: "Warme Milch", nl: "Warme melk" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What time of day is usually hottest in June?",
          es: "¿Qué hora del día suele ser la más calurosa en junio?",
          de: "Welche Tageszeit ist normalerweise am heißesten im Juni?",
          nl: "Welk tijdstip van de dag is meestal het heetst in juni?"
        },
        options: [
          { en: "Afternoon", es: "Tarde", de: "Nachmittag", nl: "Middag" },
          { en: "Early morning", es: "Madrugada", de: "Früh am Morgen", nl: "Vroege ochtend" },
          { en: "Midnight", es: "Medianoche", de: "Mitternacht", nl: "Middernacht" },
          { en: "Late evening", es: "Tarde noche", de: "Später Abend", nl: "Late avond" }
        ],
        correctIndex: 0
      }
    ],

    // Day 3 - June 3rd: Summer Solstice Preparation
    day3: [
      {
        question: {
          en: "Around what date is the summer solstice?",
          es: "¿Alrededor de qué fecha es el solsticio de verano?",
          de: "Um welches Datum ist die Sommersonnenwende?",
          nl: "Rond welke datum is de zomerzonnewende?"
        },
        options: [
          { en: "June 21st", es: "21 de junio", de: "21. Juni", nl: "21 juni" },
          { en: "June 1st", es: "1 de junio", de: "1. Juni", nl: "1 juni" },
          { en: "July 1st", es: "1 de julio", de: "1. Juli", nl: "1 juli" },
          { en: "May 21st", es: "21 de mayo", de: "21. Mai", nl: "21 mei" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is special about the summer solstice?",
          es: "¿Qué es especial sobre el solsticio de verano?",
          de: "Was ist besonders an der Sommersonnenwende?",
          nl: "Wat is bijzonder aan de zomerzonnewende?"
        },
        options: [
          { en: "It's the longest day of the year", es: "Es el día más largo del año", de: "Es ist der längste Tag des Jahres", nl: "Het is de langste dag van het jaar" },
          { en: "It's the shortest day of the year", es: "Es el día más corto del año", de: "Es ist der kürzeste Tag des Jahres", nl: "Het is de kortste dag van het jaar" },
          { en: "Day and night are equal", es: "El día y la noche son iguales", de: "Tag und Nacht sind gleich", nl: "Dag en nacht zijn gelijk" },
          { en: "There is no sun", es: "No hay sol", de: "Es gibt keine Sonne", nl: "Er is geen zon" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What happens to daylight hours after the summer solstice?",
          es: "¿Qué pasa con las horas de luz después del solsticio de verano?",
          de: "Was passiert mit den Tagesstunden nach der Sommersonnenwende?",
          nl: "Wat gebeurt er met de daglichturen na de zomerzonnewende?"
        },
        options: [
          { en: "They slowly start getting shorter", es: "Lentamente empiezan a acortarse", de: "Sie werden langsam kürzer", nl: "Ze worden langzaam korter" },
          { en: "They get longer", es: "Se vuelven más largas", de: "Sie werden länger", nl: "Ze worden langer" },
          { en: "They stay exactly the same", es: "Permanecen exactamente igual", de: "Sie bleiben genau gleich", nl: "Ze blijven precies hetzelfde" },
          { en: "They disappear completely", es: "Desaparecen completamente", de: "Sie verschwinden völlig", nl: "Ze verdwijnen volledig" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "In which hemisphere does June have the summer solstice?",
          es: "¿En qué hemisferio junio tiene el solsticio de verano?",
          de: "In welcher Hemisphäre hat Juni die Sommersonnenwende?",
          nl: "Op welk halfrond heeft juni de zomerzonnewende?"
        },
        options: [
          { en: "Northern Hemisphere", es: "Hemisferio Norte", de: "Nördliche Hemisphäre", nl: "Noordelijk halfrond" },
          { en: "Southern Hemisphere", es: "Hemisferio Sur", de: "Südliche Hemisphäre", nl: "Zuidelijk halfrond" },
          { en: "Both hemispheres", es: "Ambos hemisferios", de: "Beide Hemisphären", nl: "Beide halfronden" },
          { en: "Neither hemisphere", es: "Ningún hemisferio", de: "Keine Hemisphäre", nl: "Geen halfrond" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How do many cultures celebrate the summer solstice?",
          es: "¿Cómo celebran muchas culturas el solsticio de verano?",
          de: "Wie feiern viele Kulturen die Sommersonnenwende?",
          nl: "Hoe vieren veel culturen de zomerzonnewende?"
        },
        options: [
          { en: "With festivals and outdoor gatherings", es: "Con festivales y reuniones al aire libre", de: "Mit Festivals und Treffen im Freien", nl: "Met festivals en buitenbijeenkomsten" },
          { en: "By staying indoors all day", es: "Quedándose adentro todo el día", de: "Indem sie den ganzen Tag drinnen bleiben", nl: "Door de hele dag binnen te blijven" },
          { en: "By sleeping all day", es: "Durmiendo todo el día", de: "Indem sie den ganzen Tag schlafen", nl: "Door de hele dag te slapen" },
          { en: "By not eating", es: "No comiendo", de: "Indem sie nicht essen", nl: "Door niet te eten" }
        ],
        correctIndex: 0
      }
    ],

    // Days 4-30 continue with summer themes...
    // Adding key days for June themes: Father's Day, summer activities, graduation, etc.

    // Day 4 - June 4th: Summer Flowers
    day4: [
      { question: { en: "What flowers commonly bloom in June?", es: "¿Qué flores florecen comúnmente en junio?", de: "Welche Blumen blühen häufig im Juni?", nl: "Welke bloemen bloeien vaak in juni?" }, options: [{ en: "Roses and lilies", es: "Rosas y lirios", de: "Rosen und Lilien", nl: "Rozen en lelies" }, { en: "Snowdrops", es: "Campanillas de invierno", de: "Schneeglöckchen", nl: "Sneeuwklokjes" }, { en: "Autumn leaves", es: "Hojas de otoño", de: "Herbstblätter", nl: "Herfstbladeren" }, { en: "Pine cones", es: "Piñas", de: "Tannenzapfen", nl: "Dennenappels" }], correctIndex: 0 },
      { question: { en: "What color are most roses?", es: "¿De qué color son la mayoría de las rosas?", de: "Welche Farbe haben die meisten Rosen?", nl: "Welke kleur hebben de meeste rozen?" }, options: [{ en: "Red, pink, or white", es: "Rojas, rosadas o blancas", de: "Rot, rosa oder weiß", nl: "Rood, roze of wit" }, { en: "Blue or green", es: "Azules o verdes", de: "Blau oder grün", nl: "Blauw of groen" }, { en: "Black or gray", es: "Negras o grises", de: "Schwarz oder grau", nl: "Zwart of grijs" }, { en: "Purple or orange", es: "Moradas o naranjas", de: "Lila oder orange", nl: "Paars of oranje" }], correctIndex: 0 },
      { question: { en: "Why do flowers bloom more in summer?", es: "¿Por qué florecen más las flores en verano?", de: "Warum blühen Blumen mehr im Sommer?", nl: "Waarom bloeien bloemen meer in de zomer?" }, options: [{ en: "More sunlight and warm weather", es: "Más luz solar y clima cálido", de: "Mehr Sonnenlicht und warmes Wetter", nl: "Meer zonlicht en warm weer" }, { en: "Less water available", es: "Menos agua disponible", de: "Weniger Wasser verfügbar", nl: "Minder water beschikbaar" }, { en: "Colder temperatures", es: "Temperaturas más frías", de: "Kältere Temperaturen", nl: "Koudere temperaturen" }, { en: "Shorter days", es: "Días más cortos", de: "Kürzere Tage", nl: "Kortere dagen" }], correctIndex: 0 },
      { question: { en: "What do bees do with summer flowers?", es: "¿Qué hacen las abejas con las flores de verano?", de: "Was machen Bienen mit Sommerblumen?", nl: "Wat doen bijen met zomerbloemen?" }, options: [{ en: "Collect nectar to make honey", es: "Recolectan néctar para hacer miel", de: "Sammeln Nektar um Honig zu machen", nl: "Verzamelen nectar om honing te maken" }, { en: "Eat the petals", es: "Comen los pétalos", de: "Fressen die Blütenblätter", nl: "Eten de bloemblaadjes" }, { en: "Build nests in them", es: "Construyen nidos en ellas", de: "Bauen Nester darin", nl: "Bouwen nesten erin" }, { en: "Sleep on them", es: "Duermen en ellas", de: "Schlafen darauf", nl: "Slapen erop" }], correctIndex: 0 },
      { question: { en: "Where do roses grow best?", es: "¿Dónde crecen mejor las rosas?", de: "Wo wachsen Rosen am besten?", nl: "Waar groeien rozen het beste?" }, options: [{ en: "In sunny gardens with good soil", es: "En jardines soleados con buena tierra", de: "In sonnigen Gärten mit gutem Boden", nl: "In zonnige tuinen met goede grond" }, { en: "In dark caves", es: "En cuevas oscuras", de: "In dunklen Höhlen", nl: "In donkere grotten" }, { en: "Under water", es: "Bajo el agua", de: "Unter Wasser", nl: "Onder water" }, { en: "In freezing snow", es: "En nieve helada", de: "In gefrierendem Schnee", nl: "In bevriezende sneeuw" }], correctIndex: 0 }
    ],

    // Days 5-14: Adding missing days
    day5: [
      { question: { en: "What outdoor activities become popular in June?", es: "¿Qué actividades al aire libre se vuelven populares en junio?", de: "Welche Outdoor-Aktivitäten werden im Juni beliebt?", nl: "Welke buitenactiviteiten worden populair in juni?" }, options: [{ en: "Picnics and barbecues", es: "Picnics y parrilladas", de: "Picknicks und Grillpartys", nl: "Picknicks en barbecues" }, { en: "Snow sports", es: "Deportes de nieve", de: "Schneesport", nl: "Sneeuwsporten" }, { en: "Indoor activities only", es: "Solo actividades en interiores", de: "Nur Indoor-Aktivitäten", nl: "Alleen binnenactiviteiten" }, { en: "Hibernation", es: "Hibernación", de: "Winterschlaf", nl: "Winterslaap" }], correctIndex: 0 },
      { question: { en: "Why are picnics enjoyable in June?", es: "¿Por qué son agradables los picnics en junio?", de: "Warum sind Picknicks im Juni angenehm?", nl: "Waarom zijn picknicks leuk in juni?" }, options: [{ en: "Pleasant warm weather", es: "Clima cálido agradable", de: "Angenehm warmes Wetter", nl: "Aangenaam warm weer" }, { en: "Cold temperatures", es: "Temperaturas frías", de: "Kalte Temperaturen", nl: "Koude temperaturen" }, { en: "Constant rain", es: "Lluvia constante", de: "Ständiger Regen", nl: "Constante regen" }, { en: "Strong winds", es: "Vientos fuertes", de: "Starke Winde", nl: "Sterke winden" }], correctIndex: 0 },
      { question: { en: "What should you bring to a summer picnic?", es: "¿Qué debes llevar a un picnic de verano?", de: "Was solltest du zu einem Sommerpicknick mitbringen?", nl: "Wat moet je meenemen naar een zomerpicknick?" }, options: [{ en: "Cool food, drinks, and sunscreen", es: "Comida fresca, bebidas y protector solar", de: "Kühle Speisen, Getränke und Sonnencreme", nl: "Koel eten, drinken en zonnebrandcrème" }, { en: "Hot soup and warm clothes", es: "Sopa caliente y ropa abrigada", de: "Heiße Suppe und warme Kleidung", nl: "Warme soep en warme kleren" }, { en: "Ice skates", es: "Patines de hielo", de: "Schlittschuhe", nl: "Schaatsen" }, { en: "Winter gear", es: "Equipo de invierno", de: "Winterausrüstung", nl: "Winterspullen" }], correctIndex: 0 },
      { question: { en: "What makes June perfect for outdoor dining?", es: "¿Qué hace que junio sea perfecto para cenar al aire libre?", de: "Was macht Juni perfekt zum Essen im Freien?", nl: "Wat maakt juni perfect om buiten te eten?" }, options: [{ en: "Long daylight hours and comfortable temperatures", es: "Largas horas de luz y temperaturas cómodas", de: "Lange Tagesstunden und angenehme Temperaturen", nl: "Lange daglichturen en comfortabele temperaturen" }, { en: "Short days and cold weather", es: "Días cortos y clima frío", de: "Kurze Tage und kaltes Wetter", nl: "Korte dagen en koud weer" }, { en: "No sunlight", es: "Sin luz solar", de: "Kein Sonnenlicht", nl: "Geen zonlicht" }, { en: "Freezing temperatures", es: "Temperaturas heladas", de: "Eisige Temperaturen", nl: "Vriestemperaturen" }], correctIndex: 0 },
      { question: { en: "What insects might you see at summer picnics?", es: "¿Qué insectos podrías ver en los picnics de verano?", de: "Welche Insekten könnte man bei Sommerpicknicks sehen?", nl: "Welke insecten kun je zien bij zomerpicknicks?" }, options: [{ en: "Ants, bees, and flies", es: "Hormigas, abejas y moscas", de: "Ameisen, Bienen und Fliegen", nl: "Mieren, bijen en vliegen" }, { en: "Penguins", es: "Pingüinos", de: "Pinguine", nl: "Pinguïns" }, { en: "Polar bears", es: "Osos polares", de: "Eisbären", nl: "IJsberen" }, { en: "No insects at all", es: "Ningún insecto", de: "Gar keine Insekten", nl: "Helemaal geen insecten" }], correctIndex: 0 }
    ],

    day6: [
      { question: { en: "What happens to school in many places during June?", es: "¿Qué pasa con la escuela en muchos lugares durante junio?", de: "Was passiert mit der Schule an vielen Orten im Juni?", nl: "Wat gebeurt er met school op veel plaatsen in juni?" }, options: [{ en: "School year ends", es: "El año escolar termina", de: "Das Schuljahr endet", nl: "Het schooljaar eindigt" }, { en: "School year begins", es: "El año escolar comienza", de: "Das Schuljahr beginnt", nl: "Het schooljaar begint" }, { en: "Nothing changes", es: "Nada cambia", de: "Nichts ändert sich", nl: "Er verandert niets" }, { en: "School is only on weekends", es: "La escuela es solo los fines de semana", de: "Schule ist nur am Wochenende", nl: "School is alleen in het weekend" }], correctIndex: 0 },
      { question: { en: "What do students often have at the end of the school year?", es: "¿Qué tienen a menudo los estudiantes al final del año escolar?", de: "Was haben Schüler oft am Ende des Schuljahres?", nl: "Wat hebben studenten vaak aan het eind van het schooljaar?" }, options: [{ en: "Graduation ceremonies", es: "Ceremonias de graduación", de: "Abschlussfeiern", nl: "Diploma-uitreikingen" }, { en: "More homework", es: "Más tareas", de: "Mehr Hausaufgaben", nl: "Meer huiswerk" }, { en: "Longer school days", es: "Días escolares más largos", de: "Längere Schultage", nl: "Langere schooldagen" }, { en: "Winter break", es: "Vacaciones de invierno", de: "Winterferien", nl: "Wintervakantie" }], correctIndex: 0 },
      { question: { en: "What do families often do to celebrate graduation?", es: "¿Qué hacen a menudo las familias para celebrar la graduación?", de: "Was machen Familien oft, um den Abschluss zu feiern?", nl: "Wat doen gezinnen vaak om afstuderen te vieren?" }, options: [{ en: "Have parties and take photos", es: "Hacer fiestas y tomar fotos", de: "Partys feiern und Fotos machen", nl: "Feestjes houden en foto's maken" }, { en: "Go to sleep early", es: "Irse a dormir temprano", de: "Früh schlafen gehen", nl: "Vroeg naar bed gaan" }, { en: "Do more schoolwork", es: "Hacer más trabajo escolar", de: "Mehr Schularbeiten machen", nl: "Meer schoolwerk doen" }, { en: "Stay inside all day", es: "Quedarse adentro todo el día", de: "Den ganzen Tag drinnen bleiben", nl: "De hele dag binnen blijven" }], correctIndex: 0 },
      { question: { en: "What do graduates often wear during ceremonies?", es: "¿Qué suelen usar los graduados durante las ceremonias?", de: "Was tragen Absolventen oft bei den Zeremonien?", nl: "Wat dragen afgestudeerden vaak tijdens ceremonies?" }, options: [{ en: "Caps and gowns", es: "Birretes y togas", de: "Kappen und Roben", nl: "Petten en toga's" }, { en: "Swimming suits", es: "Trajes de baño", de: "Badeanzüge", nl: "Zwempakken" }, { en: "Winter coats", es: "Abrigos de invierno", de: "Wintermäntel", nl: "Winterjassen" }, { en: "Pajamas", es: "Pijamas", de: "Schlafanzüge", nl: "Pyjama's" }], correctIndex: 0 },
      { question: { en: "What do students look forward to after graduation?", es: "¿Qué esperan los estudiantes después de la graduación?", de: "Worauf freuen sich Schüler nach dem Abschluss?", nl: "Waar kijken studenten naar uit na het afstuderen?" }, options: [{ en: "Summer vacation", es: "Vacaciones de verano", de: "Sommerferien", nl: "Zomervakantie" }, { en: "More tests", es: "Más exámenes", de: "Mehr Tests", nl: "Meer toetsen" }, { en: "Starting immediately the next day", es: "Empezar inmediatamente al día siguiente", de: "Am nächsten Tag sofort anfangen", nl: "De volgende dag meteen beginnen" }, { en: "Winter activities", es: "Actividades de invierno", de: "Winteraktivitäten", nl: "Winteractiviteiten" }], correctIndex: 0 }
    ],

    // Continue adding days 7-14, then day 15...
    day7: [
      { question: { en: "What sport is very popular in June?", es: "¿Qué deporte es muy popular en junio?", de: "Welcher Sport ist im Juni sehr beliebt?", nl: "Welke sport is heel populair in juni?" }, options: [{ en: "Baseball", es: "Béisbol", de: "Baseball", nl: "Honkbal" }, { en: "Ice hockey", es: "Hockey sobre hielo", de: "Eishockey", nl: "IJshockey" }, { en: "Skiing", es: "Esquí", de: "Skifahren", nl: "Skiën" }, { en: "Snowboarding", es: "Snowboard", de: "Snowboarden", nl: "Snowboarden" }], correctIndex: 0 },
      { question: { en: "Why is baseball called a summer sport?", es: "¿Por qué se llama al béisbol un deporte de verano?", de: "Warum wird Baseball ein Sommersport genannt?", nl: "Waarom wordt honkbal een zomersport genoemd?" }, options: [{ en: "It's played in warm weather", es: "Se juega en clima cálido", de: "Es wird bei warmem Wetter gespielt", nl: "Het wordt gespeeld bij warm weer" }, { en: "It's played indoors", es: "Se juega en interiores", de: "Es wird drinnen gespielt", nl: "Het wordt binnen gespeeld" }, { en: "It requires snow", es: "Requiere nieve", de: "Es braucht Schnee", nl: "Het vereist sneeuw" }, { en: "It's only played at night", es: "Solo se juega de noche", de: "Es wird nur nachts gespielt", nl: "Het wordt alleen 's nachts gespeeld" }], correctIndex: 0 },
      { question: { en: "What do baseball players wear to protect from the sun?", es: "¿Qué usan los jugadores de béisbol para protegerse del sol?", de: "Was tragen Baseballspieler zum Schutz vor der Sonne?", nl: "Wat dragen honballers om zich tegen de zon te beschermen?" }, options: [{ en: "Baseball caps", es: "Gorras de béisbol", de: "Baseballkappen", nl: "Baseballpetten" }, { en: "Winter hats", es: "Sombreros de invierno", de: "Wintermützen", nl: "Wintermutsen" }, { en: "No protection needed", es: "No necesitan protección", de: "Kein Schutz nötig", nl: "Geen bescherming nodig" }, { en: "Swimming goggles", es: "Gafas de natación", de: "Schwimmbrille", nl: "Zwembril" }], correctIndex: 0 },
      { question: { en: "When do baseball games often take place?", es: "¿Cuándo suelen tener lugar los juegos de béisbol?", de: "Wann finden Baseballspiele oft statt?", nl: "Wanneer vinden honkbalwedstrijden vaak plaats?" }, options: [{ en: "During long summer evenings", es: "Durante las largas tardes de verano", de: "Während langen Sommerabenden", nl: "Tijdens lange zomeravonden" }, { en: "Only in winter", es: "Solo en invierno", de: "Nur im Winter", nl: "Alleen in de winter" }, { en: "Before sunrise", es: "Antes del amanecer", de: "Vor Sonnenaufgang", nl: "Voor zonsopgang" }, { en: "During snowstorms", es: "Durante tormentas de nieve", de: "Während Schneestürmen", nl: "Tijdens sneeuwstormen" }], correctIndex: 0 },
      { question: { en: "What makes June perfect for outdoor sports?", es: "¿Qué hace que junio sea perfecto para los deportes al aire libre?", de: "Was macht Juni perfekt für Outdoor-Sport?", nl: "Wat maakt juni perfect voor buitensporten?" }, options: [{ en: "Warm temperatures and long days", es: "Temperaturas cálidas y días largos", de: "Warme Temperaturen und lange Tage", nl: "Warme temperaturen en lange dagen" }, { en: "Cold weather and short days", es: "Clima frío y días cortos", de: "Kaltes Wetter und kurze Tage", nl: "Koud weer en korte dagen" }, { en: "Constant rain", es: "Lluvia constante", de: "Ständiger Regen", nl: "Constante regen" }, { en: "Freezing temperatures", es: "Temperaturas heladas", de: "Eisige Temperaturen", nl: "Vriestemperaturen" }], correctIndex: 0 }
    ],

    // Adding more days to complete the month...
    day8: [
      { question: { en: "What do people often do in their yards during June?", es: "¿Qué suele hacer la gente en sus patios durante junio?", de: "Was machen Menschen oft in ihren Gärten im Juni?", nl: "Wat doen mensen vaak in hun tuinen tijdens juni?" }, options: [{ en: "Mow the lawn and tend gardens", es: "Cortar el césped y cuidar jardines", de: "Rasen mähen und Gärten pflegen", nl: "Het gazon maaien en tuinen verzorgen" }, { en: "Build snow forts", es: "Construir fuertes de nieve", de: "Schneefestungen bauen", nl: "Sneeuwforten bouwen" }, { en: "Shovel snow", es: "Palear nieve", de: "Schnee schaufeln", nl: "Sneeuw scheppen" }, { en: "Stay inside only", es: "Solo quedarse adentro", de: "Nur drinnen bleiben", nl: "Alleen binnen blijven" }], correctIndex: 0 },
      { question: { en: "Why does grass grow quickly in June?", es: "¿Por qué crece rápidamente la hierba en junio?", de: "Warum wächst Gras im Juni schnell?", nl: "Waarom groeit gras snel in juni?" }, options: [{ en: "Warm weather and regular rain", es: "Clima cálido y lluvia regular", de: "Warmes Wetter und regelmäßiger Regen", nl: "Warm weer en regelmatige regen" }, { en: "Cold temperatures", es: "Temperaturas frías", de: "Kalte Temperaturen", nl: "Koude temperaturen" }, { en: "No water at all", es: "Sin agua en absoluto", de: "Gar kein Wasser", nl: "Helemaal geen water" }, { en: "Constant darkness", es: "Oscuridad constante", de: "Ständige Dunkelheit", nl: "Constante duisternis" }], correctIndex: 0 },
      { question: { en: "What garden vegetables are ready to harvest in June?", es: "¿Qué vegetales del jardín están listos para cosechar en junio?", de: "Welches Gartengemüse ist im Juni erntereif?", nl: "Welke tuingroenten zijn klaar voor de oogst in juni?" }, options: [{ en: "Early lettuce and radishes", es: "Lechuga temprana y rábanos", de: "Früher Salat und Radieschen", nl: "Vroege sla en radijsjes" }, { en: "Winter squash", es: "Calabaza de invierno", de: "Winterkürbis", nl: "Winterpompoen" }, { en: "Nothing grows in summer", es: "Nada crece en verano", de: "Im Sommer wächst nichts", nl: "Er groeit niets in de zomer" }, { en: "Only flowers, no vegetables", es: "Solo flores, no vegetales", de: "Nur Blumen, kein Gemüse", nl: "Alleen bloemen, geen groenten" }], correctIndex: 0 },
      { question: { en: "When is the best time to water gardens in June?", es: "¿Cuándo es el mejor momento para regar los jardines en junio?", de: "Wann ist die beste Zeit, Gärten im Juni zu bewässern?", nl: "Wanneer is de beste tijd om tuinen water te geven in juni?" }, options: [{ en: "Early morning or evening", es: "Temprano en la mañana o en la tarde", de: "Früh am Morgen oder am Abend", nl: "Vroeg in de ochtend of 's avonds" }, { en: "During the hottest part of the day", es: "Durante la parte más calurosa del día", de: "Während der heißesten Tageszeit", nl: "Tijdens het heetste deel van de dag" }, { en: "Never water them", es: "Nunca regarlos", de: "Sie nie bewässern", nl: "Ze nooit water geven" }, { en: "Only during thunderstorms", es: "Solo durante tormentas eléctricas", de: "Nur während Gewittern", nl: "Alleen tijdens onweersbuien" }], correctIndex: 0 },
      { question: { en: "What tools are commonly used for yard work in June?", es: "¿Qué herramientas se usan comúnmente para el trabajo de jardín en junio?", de: "Welche Werkzeuge werden häufig für Gartenarbeit im Juni verwendet?", nl: "Welke gereedschappen worden vaak gebruikt voor tuinwerk in juni?" }, options: [{ en: "Lawn mower, hose, and pruning shears", es: "Cortacésped, manguera y tijeras de podar", de: "Rasenmäher, Schlauch und Gartenschere", nl: "Grasmaaier, tuinslang en snoeischaar" }, { en: "Snow shovel", es: "Pala para nieve", de: "Schneeschaufel", nl: "Sneeuwschep" }, { en: "Ice scraper", es: "Raspador de hielo", de: "Eiskratzer", nl: "IJskrabber" }, { en: "Winter clothes only", es: "Solo ropa de invierno", de: "Nur Winterkleidung", nl: "Alleen winterkleding" }], correctIndex: 0 }
    ],

    day9: [
      { question: { en: "What happens to days in June compared to other months?", es: "¿Qué pasa con los días en junio comparado con otros meses?", de: "Was passiert mit den Tagen im Juni im Vergleich zu anderen Monaten?", nl: "Wat gebeurt er met dagen in juni vergeleken met andere maanden?" }, options: [{ en: "They are the longest of the year", es: "Son los más largos del año", de: "Sie sind die längsten des Jahres", nl: "Ze zijn de langste van het jaar" }, { en: "They are the shortest", es: "Son los más cortos", de: "Sie sind die kürzesten", nl: "Ze zijn de kortste" }, { en: "They are exactly 12 hours", es: "Son exactamente 12 horas", de: "Sie sind genau 12 Stunden", nl: "Ze zijn precies 12 uur" }, { en: "There is no daylight", es: "No hay luz del día", de: "Es gibt kein Tageslicht", nl: "Er is geen daglicht" }], correctIndex: 0 },
      { question: { en: "How many hours of daylight can there be on June 21st?", es: "¿Cuántas horas de luz puede haber el 21 de junio?", de: "Wie viele Stunden Tageslicht kann es am 21. Juni geben?", nl: "Hoeveel uren daglicht kunnen er zijn op 21 juni?" }, options: [{ en: "Up to 15 hours or more in some places", es: "Hasta 15 horas o más en algunos lugares", de: "Bis zu 15 Stunden oder mehr an manchen Orten", nl: "Tot 15 uur of meer op sommige plaatsen" }, { en: "Only 6 hours", es: "Solo 6 horas", de: "Nur 6 Stunden", nl: "Alleen 6 uur" }, { en: "No daylight at all", es: "Sin luz del día", de: "Gar kein Tageslicht", nl: "Helemaal geen daglicht" }, { en: "Exactly 8 hours", es: "Exactamente 8 horas", de: "Genau 8 Stunden", nl: "Precies 8 uur" }], correctIndex: 0 },
      { question: { en: "What do people often do with the extra daylight hours?", es: "¿Qué suele hacer la gente con las horas extra de luz?", de: "Was machen Menschen oft mit den zusätzlichen Tagesstunden?", nl: "Wat doen mensen vaak met de extra daglichturen?" }, options: [{ en: "Spend more time outdoors", es: "Pasar más tiempo al aire libre", de: "Mehr Zeit draußen verbringen", nl: "Meer tijd buiten doorbrengen" }, { en: "Sleep all day", es: "Dormir todo el día", de: "Den ganzen Tag schlafen", nl: "De hele dag slapen" }, { en: "Stay inside with curtains closed", es: "Quedarse adentro con cortinas cerradas", de: "Drinnen bleiben mit geschlossenen Vorhängen", nl: "Binnen blijven met gesloten gordijnen" }, { en: "Work only at night", es: "Trabajar solo de noche", de: "Nur nachts arbeiten", nl: "Alleen 's nachts werken" }], correctIndex: 0 },
      { question: { en: "When does the sun set in June?", es: "¿Cuándo se pone el sol en junio?", de: "Wann geht die Sonne im Juni unter?", nl: "Wanneer gaat de zon onder in juni?" }, options: [{ en: "Very late in the evening", es: "Muy tarde en la noche", de: "Sehr spät am Abend", nl: "Heel laat op de avond" }, { en: "Very early in the morning", es: "Muy temprano en la mañana", de: "Sehr früh am Morgen", nl: "Heel vroeg in de ochtend" }, { en: "At noon", es: "Al mediodía", de: "Mittags", nl: "Tegen de middag" }, { en: "The sun never sets", es: "El sol nunca se pone", de: "Die Sonne geht nie unter", nl: "De zon gaat nooit onder" }], correctIndex: 0 },
      { question: { en: "Why do some people have trouble sleeping in June?", es: "¿Por qué algunas personas tienen problemas para dormir en junio?", de: "Warum haben manche Menschen im Juni Schlafprobleme?", nl: "Waarom hebben sommige mensen problemen met slapen in juni?" }, options: [{ en: "It stays light very late", es: "Se mantiene la luz muy tarde", de: "Es bleibt sehr spät hell", nl: "Het blijft heel laat licht" }, { en: "It's completely dark", es: "Está completamente oscuro", de: "Es ist völlig dunkel", nl: "Het is volledig donker" }, { en: "There are no clocks", es: "No hay relojes", de: "Es gibt keine Uhren", nl: "Er zijn geen klokken" }, { en: "They sleep too much", es: "Duermen demasiado", de: "Sie schlafen zu viel", nl: "Ze slapen te veel" }], correctIndex: 0 }
    ],

    day10: [
      { question: { en: "What fruit begins to ripen in June?", es: "¿Qué fruta empieza a madurar en junio?", de: "Welche Frucht beginnt im Juni zu reifen?", nl: "Welk fruit begint te rijpen in juni?" }, options: [{ en: "Strawberries", es: "Fresas", de: "Erdbeeren", nl: "Aardbeien" }, { en: "Apples", es: "Manzanas", de: "Äpfel", nl: "Appels" }, { en: "Pumpkins", es: "Calabazas", de: "Kürbisse", nl: "Pompoenen" }, { en: "Winter berries", es: "Bayas de invierno", de: "Winterbeeren", nl: "Winterbessen" }], correctIndex: 0 },
      { question: { en: "Where do strawberries grow?", es: "¿Dónde crecen las fresas?", de: "Wo wachsen Erdbeeren?", nl: "Waar groeien aardbeien?" }, options: [{ en: "Low to the ground on plants", es: "Cerca del suelo en plantas", de: "Niedrig am Boden auf Pflanzen", nl: "Laag bij de grond op planten" }, { en: "High up in trees", es: "Alto en los árboles", de: "Hoch oben in Bäumen", nl: "Hoog in bomen" }, { en: "Underground like potatoes", es: "Bajo tierra como papas", de: "Unterirdisch wie Kartoffeln", nl: "Ondergronds zoals aardappels" }, { en: "Floating on water", es: "Flotando en el agua", de: "Schwimmend auf Wasser", nl: "Drijvend op water" }], correctIndex: 0 },
      { question: { en: "What color are ripe strawberries?", es: "¿De qué color son las fresas maduras?", de: "Welche Farbe haben reife Erdbeeren?", nl: "Welke kleur hebben rijpe aardbeien?" }, options: [{ en: "Bright red", es: "Rojo brillante", de: "Leuchtend rot", nl: "Fel rood" }, { en: "Blue", es: "Azul", de: "Blau", nl: "Blauw" }, { en: "Purple", es: "Morado", de: "Lila", nl: "Paars" }, { en: "Green", es: "Verde", de: "Grün", nl: "Groen" }], correctIndex: 0 },
      { question: { en: "What do people often do with fresh strawberries?", es: "¿Qué suele hacer la gente con las fresas frescas?", de: "Was machen Menschen oft mit frischen Erdbeeren?", nl: "Wat doen mensen vaak met verse aardbeien?" }, options: [{ en: "Eat them fresh or make jam", es: "Comerlas frescas o hacer mermelada", de: "Sie frisch essen oder Marmelade machen", nl: "Ze vers eten of jam maken" }, { en: "Plant them in winter", es: "Plantarlas en invierno", de: "Sie im Winter pflanzen", nl: "Ze in de winter planten" }, { en: "Use them as decorations only", es: "Usarlas solo como decoraciones", de: "Sie nur als Dekoration verwenden", nl: "Ze alleen als decoratie gebruiken" }, { en: "Throw them away", es: "Tirarlas a la basura", de: "Sie wegwerfen", nl: "Ze weggooien" }], correctIndex: 0 },
      { question: { en: "Why are June strawberries especially sweet?", es: "¿Por qué las fresas de junio son especialmente dulces?", de: "Warum sind Juni-Erdbeeren besonders süß?", nl: "Waarom zijn juni aardbeien vooral zoet?" }, options: [{ en: "They ripen in warm sunshine", es: "Maduran bajo el sol cálido", de: "Sie reifen in warmer Sonne", nl: "Ze rijpen in warme zonneschijn" }, { en: "They grow in cold weather", es: "Crecen en clima frío", de: "Sie wachsen bei kaltem Wetter", nl: "Ze groeien bij koud weer" }, { en: "They never get sunlight", es: "Nunca reciben luz solar", de: "Sie bekommen nie Sonnenlicht", nl: "Ze krijgen nooit zonlicht" }, { en: "They are picked too early", es: "Se recogen demasiado temprano", de: "Sie werden zu früh gepflückt", nl: "Ze worden te vroeg geplukt" }], correctIndex: 0 }
    ],

    day11: [
      { question: { en: "What do many animals do with their babies in June?", es: "¿Qué hacen muchos animales con sus crías en junio?", de: "Was machen viele Tiere mit ihren Jungen im Juni?", nl: "Wat doen veel dieren met hun jongen in juni?" }, options: [{ en: "Teach them to find food and survive", es: "Enseñarles a encontrar comida y sobrevivir", de: "Ihnen beibringen, Nahrung zu finden und zu überleben", nl: "Ze leren voedsel te vinden en te overleven" }, { en: "Leave them alone immediately", es: "Dejarlos solos inmediatamente", de: "Sie sofort allein lassen", nl: "Ze meteen alleen laten" }, { en: "Hide them underground", es: "Esconderlos bajo tierra", de: "Sie unterirdisch verstecken", nl: "Ze ondergronds verstoppen" }, { en: "Take them to school", es: "Llevarlos a la escuela", de: "Sie zur Schule bringen", nl: "Ze naar school brengen" }], correctIndex: 0 },
      { question: { en: "What birds are commonly seen with their young in June?", es: "¿Qué pájaros se ven comúnmente con sus crías en junio?", de: "Welche Vögel sieht man häufig mit ihren Jungen im Juni?", nl: "Welke vogels worden vaak met hun jongen gezien in juni?" }, options: [{ en: "Robins, sparrows, and cardinals", es: "Petirrojos, gorriones y cardenales", de: "Rotkehlchen, Spatzen und Kardinäle", nl: "Roodborstjes, mussen en kardinalen" }, { en: "Penguins", es: "Pingüinos", de: "Pinguine", nl: "Pinguïns" }, { en: "Polar birds", es: "Aves polares", de: "Polare Vögel", nl: "Polaire vogels" }, { en: "No birds have babies", es: "Ningún pájaro tiene crías", de: "Keine Vögel haben Junge", nl: "Geen vogels hebben jongen" }], correctIndex: 0 },
      { question: { en: "Where do baby birds learn to fly?", es: "¿Dónde aprenden a volar los pájaros bebé?", de: "Wo lernen Vogeljunge zu fliegen?", nl: "Waar leren vogeltjes vliegen?" }, options: [{ en: "Near their nest with parents nearby", es: "Cerca de su nido con los padres cerca", de: "In der Nähe ihres Nests mit Eltern in der Nähe", nl: "Nabij hun nest met ouders in de buurt" }, { en: "Far away from their parents", es: "Lejos de sus padres", de: "Weit weg von ihren Eltern", nl: "Ver weg van hun ouders" }, { en: "Underwater", es: "Bajo el agua", de: "Unter Wasser", nl: "Onder water" }, { en: "In caves only", es: "Solo en cuevas", de: "Nur in Höhlen", nl: "Alleen in grotten" }], correctIndex: 0 },
      { question: { en: "What should you do if you find a baby bird on the ground?", es: "¿Qué debes hacer si encuentras un pájaro bebé en el suelo?", de: "Was solltest du tun, wenn du ein Vogeljunges am Boden findest?", nl: "Wat moet je doen als je een vogeltje op de grond vindt?" }, options: [{ en: "Leave it alone; parents are usually nearby", es: "Dejarlo solo; los padres suelen estar cerca", de: "Es in Ruhe lassen; Eltern sind meist in der Nähe", nl: "Het met rust laten; ouders zijn meestal in de buurt" }, { en: "Take it home immediately", es: "Llevárselo a casa inmediatamente", de: "Es sofort mit nach Hause nehmen", nl: "Het meteen mee naar huis nemen" }, { en: "Put it in a cage", es: "Ponerlo en una jaula", de: "Es in einen Käfig setzen", nl: "Het in een kooi zetten" }, { en: "Feed it candy", es: "Darle dulces", de: "Ihm Süßigkeiten geben", nl: "Het snoep geven" }], correctIndex: 0 },
      { question: { en: "Why is June a good time for young animals to learn?", es: "¿Por qué es junio un buen momento para que los animales jóvenes aprendan?", de: "Warum ist Juni eine gute Zeit für junge Tiere zum Lernen?", nl: "Waarom is juni een goede tijd voor jonge dieren om te leren?" }, options: [{ en: "Plenty of food and warm weather", es: "Mucha comida y clima cálido", de: "Viel Nahrung und warmes Wetter", nl: "Veel voedsel en warm weer" }, { en: "No food available", es: "No hay comida disponible", de: "Keine Nahrung verfügbar", nl: "Geen voedsel beschikbaar" }, { en: "Cold, harsh weather", es: "Clima frío y duro", de: "Kaltes, hartes Wetter", nl: "Koud, hard weer" }, { en: "Animals don't learn in summer", es: "Los animales no aprenden en verano", de: "Tiere lernen nicht im Sommer", nl: "Dieren leren niet in de zomer" }], correctIndex: 0 }
    ],

    day12: [
      { question: { en: "What water activities become popular in June?", es: "¿Qué actividades acuáticas se vuelven populares en junio?", de: "Welche Wasseraktivitäten werden im Juni beliebt?", nl: "Welke wateractiviteiten worden populair in juni?" }, options: [{ en: "Swimming, boating, and water games", es: "Natación, navegación y juegos acuáticos", de: "Schwimmen, Bootfahren und Wasserspiele", nl: "Zwemmen, varen en waterspellen" }, { en: "Ice fishing", es: "Pesca en hielo", de: "Eisfischen", nl: "IJsvissen" }, { en: "Ice skating", es: "Patinaje sobre hielo", de: "Schlittschuhlaufen", nl: "Schaatsen" }, { en: "Building ice sculptures", es: "Construir esculturas de hielo", de: "Eisskulpturen bauen", nl: "IJsbeelden maken" }], correctIndex: 0 },
      { question: { en: "Why do people enjoy water activities in summer?", es: "¿Por qué disfruta la gente de las actividades acuáticas en verano?", de: "Warum genießen Menschen Wasseraktivitäten im Sommer?", nl: "Waarom genieten mensen van wateractiviteiten in de zomer?" }, options: [{ en: "Water helps cool them down", es: "El agua ayuda a refrescarlos", de: "Wasser hilft ihnen, sich abzukühlen", nl: "Water helpt ze af te koelen" }, { en: "Water is warmer than air", es: "El agua está más caliente que el aire", de: "Wasser ist wärmer als Luft", nl: "Water is warmer dan lucht" }, { en: "They want to get wet in winter", es: "Quieren mojarse en invierno", de: "Sie wollen im Winter nass werden", nl: "Ze willen nat worden in de winter" }, { en: "Water activities are boring", es: "Las actividades acuáticas son aburridas", de: "Wasseraktivitäten sind langweilig", nl: "Wateractiviteiten zijn saai" }], correctIndex: 0 },
      { question: { en: "What safety equipment is important for water activities?", es: "¿Qué equipo de seguridad es importante para las actividades acuáticas?", de: "Welche Sicherheitsausrüstung ist wichtig für Wasseraktivitäten?", nl: "Welke veiligheidsuitrusting is belangrijk voor wateractiviteiten?" }, options: [{ en: "Life jackets and floaties", es: "Chalecos salvavidas y flotadores", de: "Schwimmwesten und Schwimmhilfen", nl: "Reddingsvesten en drijvende hulpmiddelen" }, { en: "Winter coats", es: "Abrigos de invierno", de: "Wintermäntel", nl: "Winterjassen" }, { en: "Heavy boots", es: "Botas pesadas", de: "Schwere Stiefel", nl: "Zware laarzen" }, { en: "No safety equipment needed", es: "No se necesita equipo de seguridad", de: "Keine Sicherheitsausrüstung nötig", nl: "Geen veiligheidsuitrusting nodig" }], correctIndex: 0 },
      { question: { en: "Where can families safely enjoy water activities?", es: "¿Dónde pueden las familias disfrutar con seguridad de actividades acuáticas?", de: "Wo können Familien sicher Wasseraktivitäten genießen?", nl: "Waar kunnen gezinnen veilig van wateractiviteiten genieten?" }, options: [{ en: "Supervised pools, lakes, or beaches", es: "Piscinas supervisadas, lagos o playas", de: "Überwachte Schwimmbäder, Seen oder Strände", nl: "Bewaakte zwembaden, meren of stranden" }, { en: "Any body of water", es: "Cualquier cuerpo de agua", de: "Jedes Gewässer", nl: "Elk water" }, { en: "Only in bathtubs", es: "Solo en bañeras", de: "Nur in Badewannen", nl: "Alleen in badkuipen" }, { en: "During storms only", es: "Solo durante tormentas", de: "Nur während Stürmen", nl: "Alleen tijdens stormen" }], correctIndex: 0 },
      { question: { en: "What should you always do before swimming?", es: "¿Qué debes hacer siempre antes de nadar?", de: "Was solltest du immer vor dem Schwimmen tun?", nl: "Wat moet je altijd doen voor het zwemmen?" }, options: [{ en: "Check that an adult is watching", es: "Verificar que un adulto esté mirando", de: "Prüfen, dass ein Erwachsener zuschaut", nl: "Controleren dat een volwassene kijkt" }, { en: "Jump in without looking", es: "Saltar sin mirar", de: "Hineinspringen ohne zu schauen", nl: "Erin springen zonder te kijken" }, { en: "Swim alone", es: "Nadar solo", de: "Alleine schwimmen", nl: "Alleen zwemmen" }, { en: "Ignore all rules", es: "Ignorar todas las reglas", de: "Alle Regeln ignorieren", nl: "Alle regels negeren" }], correctIndex: 0 }
    ],

    day13: [
      { question: { en: "What type of camps do many kids attend in June?", es: "¿Qué tipo de campamentos asisten muchos niños en junio?", de: "Welche Art von Camps besuchen viele Kinder im Juni?", nl: "Wat voor kampen bezoeken veel kinderen in juni?" }, options: [{ en: "Summer day camps", es: "Campamentos de día de verano", de: "Sommer-Tagescamps", nl: "Zomer dagkampen" }, { en: "Winter snow camps", es: "Campamentos de nieve de invierno", de: "Winter-Schneecamps", nl: "Winter sneeuwkampen" }, { en: "Indoor computer camps only", es: "Solo campamentos de computación en interiores", de: "Nur Indoor-Computer-Camps", nl: "Alleen binnen computerkampen" }, { en: "No camps in summer", es: "No hay campamentos en verano", de: "Keine Camps im Sommer", nl: "Geen kampen in de zomer" }], correctIndex: 0 },
      { question: { en: "What activities do kids do at summer camps?", es: "¿Qué actividades hacen los niños en los campamentos de verano?", de: "Welche Aktivitäten machen Kinder in Sommercamps?", nl: "Welke activiteiten doen kinderen op zomerkampen?" }, options: [{ en: "Arts, crafts, games, and outdoor activities", es: "Artes, manualidades, juegos y actividades al aire libre", de: "Kunst, Handwerk, Spiele und Outdoor-Aktivitäten", nl: "Kunst, knutselen, spellen en buitenactiviteiten" }, { en: "Only homework", es: "Solo tareas", de: "Nur Hausaufgaben", nl: "Alleen huiswerk" }, { en: "Sleeping all day", es: "Dormir todo el día", de: "Den ganzen Tag schlafen", nl: "De hele dag slapen" }, { en: "Watching TV only", es: "Solo ver televisión", de: "Nur fernsehen", nl: "Alleen tv kijken" }], correctIndex: 0 },
      { question: { en: "Why do parents send kids to summer camps?", es: "¿Por qué envían los padres a los niños a campamentos de verano?", de: "Warum schicken Eltern Kinder in Sommercamps?", nl: "Waarom sturen ouders kinderen naar zomerkampen?" }, options: [{ en: "To learn new skills and make friends", es: "Para aprender nuevas habilidades y hacer amigos", de: "Um neue Fähigkeiten zu lernen und Freunde zu finden", nl: "Om nieuwe vaardigheden te leren en vrienden te maken" }, { en: "To avoid having fun", es: "Para evitar divertirse", de: "Um Spaß zu vermeiden", nl: "Om plezier te vermijden" }, { en: "To stay indoors all summer", es: "Para quedarse adentro todo el verano", de: "Um den ganzen Sommer drinnen zu bleiben", nl: "Om de hele zomer binnen te blijven" }, { en: "To do more schoolwork", es: "Para hacer más trabajo escolar", de: "Um mehr Schularbeiten zu machen", nl: "Om meer schoolwerk te doen" }], correctIndex: 0 },
      { question: { en: "What do kids often make at summer camp?", es: "¿Qué hacen a menudo los niños en el campamento de verano?", de: "Was basteln Kinder oft im Sommercamp?", nl: "Wat maken kinderen vaak op zomerkamp?" }, options: [{ en: "Arts and crafts projects", es: "Proyectos de artes y manualidades", de: "Kunst- und Handwerksprojekte", nl: "Kunst- en knutselprojecten" }, { en: "Nothing at all", es: "Nada en absoluto", de: "Gar nichts", nl: "Helemaal niets" }, { en: "Only food", es: "Solo comida", de: "Nur Essen", nl: "Alleen eten" }, { en: "Homework assignments", es: "Tareas escolares", de: "Hausaufgaben", nl: "Huiswerkopdrachten" }], correctIndex: 0 },
      { question: { en: "What memories do kids often have from summer camp?", es: "¿Qué recuerdos suelen tener los niños del campamento de verano?", de: "Welche Erinnerungen haben Kinder oft an Sommercamps?", nl: "Welke herinneringen hebben kinderen vaak aan zomerkamp?" }, options: [{ en: "Fun activities and new friendships", es: "Actividades divertidas y nuevas amistades", de: "Spaßige Aktivitäten und neue Freundschaften", nl: "Leuke activiteiten en nieuwe vriendschappen" }, { en: "Being bored all the time", es: "Estar aburridos todo el tiempo", de: "Die ganze Zeit gelangweilt sein", nl: "Zich de hele tijd vervelen" }, { en: "Doing chores", es: "Hacer quehaceres", de: "Hausarbeit machen", nl: "Klusjes doen" }, { en: "Staying inside", es: "Quedarse adentro", de: "Drinnen bleiben", nl: "Binnen blijven" }], correctIndex: 0 }
    ],

    day14: [
      { question: { en: "What is the weather typically like in mid-June?", es: "¿Cómo es típicamente el clima a mediados de junio?", de: "Wie ist das Wetter typischerweise Mitte Juni?", nl: "Hoe is het weer meestal medio juni?" }, options: [{ en: "Warm and pleasant", es: "Cálido y agradable", de: "Warm und angenehm", nl: "Warm en aangenaam" }, { en: "Cold and snowy", es: "Frío y nevado", de: "Kalt und schneereich", nl: "Koud en sneeuwachtig" }, { en: "Freezing temperatures", es: "Temperaturas heladas", de: "Eisige Temperaturen", nl: "Vriestemperaturen" }, { en: "Always stormy", es: "Siempre tormentoso", de: "Immer stürmisch", nl: "Altijd stormachtig" }], correctIndex: 0 },
      { question: { en: "What do people wear in June weather?", es: "¿Qué se pone la gente en el clima de junio?", de: "Was tragen Menschen bei Juni-Wetter?", nl: "Wat dragen mensen bij juni weer?" }, options: [{ en: "Light, comfortable clothing", es: "Ropa ligera y cómoda", de: "Leichte, bequeme Kleidung", nl: "Lichte, comfortabele kleding" }, { en: "Heavy winter coats", es: "Abrigos pesados de invierno", de: "Schwere Wintermäntel", nl: "Zware winterjassen" }, { en: "Multiple thick layers", es: "Múltiples capas gruesas", de: "Mehrere dicke Schichten", nl: "Meerdere dikke lagen" }, { en: "Only formal wear", es: "Solo ropa formal", de: "Nur formelle Kleidung", nl: "Alleen formele kleding" }], correctIndex: 0 },
      { question: { en: "What should you remember about sun protection in June?", es: "¿Qué debes recordar sobre la protección solar en junio?", de: "Was solltest du über Sonnenschutz im Juni beachten?", nl: "Wat moet je onthouden over zonbescherming in juni?" }, options: [{ en: "The sun is strong, so use sunscreen", es: "El sol es fuerte, así que usa protector solar", de: "Die Sonne ist stark, also verwende Sonnencreme", nl: "De zon is sterk, dus gebruik zonnebrandcrème" }, { en: "The sun is weak in summer", es: "El sol es débil en verano", de: "Die Sonne ist schwach im Sommer", nl: "De zon is zwak in de zomer" }, { en: "No sun protection needed", es: "No se necesita protección solar", de: "Kein Sonnenschutz nötig", nl: "Geen zonbescherming nodig" }, { en: "Only protect yourself indoors", es: "Solo protégete en interiores", de: "Nur drinnen schützen", nl: "Alleen binnen beschermen" }], correctIndex: 0 },
      { question: { en: "How do people stay comfortable in June heat?", es: "¿Cómo se mantiene cómoda la gente en el calor de junio?", de: "Wie bleiben Menschen bei der Juni-Hitze komfortabel?", nl: "Hoe blijven mensen comfortabel in de juni hitte?" }, options: [{ en: "Seek shade, drink water, and use fans", es: "Buscar sombra, beber agua y usar ventiladores", de: "Schatten suchen, Wasser trinken und Ventilatoren nutzen", nl: "Schaduw zoeken, water drinken en ventilatoren gebruiken" }, { en: "Wear heavy clothing", es: "Usar ropa pesada", de: "Schwere Kleidung tragen", nl: "Zware kleding dragen" }, { en: "Stay in the sun all day", es: "Quedarse al sol todo el día", de: "Den ganzen Tag in der Sonne bleiben", nl: "De hele dag in de zon blijven" }, { en: "Drink hot beverages only", es: "Solo beber bebidas calientes", de: "Nur heiße Getränke trinken", nl: "Alleen warme dranken drinken" }], correctIndex: 0 },
      { question: { en: "What time of day is usually coolest in June?", es: "¿Qué hora del día suele ser la más fresca en junio?", de: "Welche Tageszeit ist normalerweise am kühlsten im Juni?", nl: "Welk tijdstip van de dag is meestal het koelst in juni?" }, options: [{ en: "Early morning", es: "Temprano en la mañana", de: "Früh am Morgen", nl: "Vroeg in de ochtend" }, { en: "Noon", es: "Mediodía", de: "Mittag", nl: "Middag" }, { en: "Mid-afternoon", es: "Media tarde", de: "Mitte des Nachmittags", nl: "Midden van de middag" }, { en: "All times are the same", es: "Todos los momentos son iguales", de: "Alle Zeiten sind gleich", nl: "Alle tijden zijn hetzelfde" }], correctIndex: 0 }
    ],

    // Day 15 - June 15th: Father's Day Preparation (Third Sunday in June)
    day15: [
      { question: { en: "When is Father's Day usually celebrated?", es: "¿Cuándo se celebra generalmente el Día del Padre?", de: "Wann wird normalerweise der Vatertag gefeiert?", nl: "Wanneer wordt Vaderdag meestal gevierd?" }, options: [{ en: "Third Sunday in June", es: "Tercer domingo de junio", de: "Dritter Sonntag im Juni", nl: "Derde zondag in juni" }, { en: "First Monday in June", es: "Primer lunes de junio", de: "Erster Montag im Juni", nl: "Eerste maandag in juni" }, { en: "Last day of June", es: "Último día de junio", de: "Letzter Tag im Juni", nl: "Laatste dag van juni" }, { en: "June 1st every year", es: "1 de junio cada año", de: "1. Juni jedes Jahr", nl: "1 juni elk jaar" }], correctIndex: 0 },
      { question: { en: "What do children often give their fathers?", es: "¿Qué suelen dar los niños a sus padres?", de: "Was geben Kinder oft ihren Vätern?", nl: "Wat geven kinderen vaak aan hun vaders?" }, options: [{ en: "Cards, gifts, or special time together", es: "Tarjetas, regalos o tiempo especial juntos", de: "Karten, Geschenke oder besondere Zeit zusammen", nl: "Kaarten, cadeaus of speciale tijd samen" }, { en: "Homework to do", es: "Tarea que hacer", de: "Hausaufgaben zu erledigen", nl: "Huiswerk om te maken" }, { en: "Chores to complete", es: "Tareas que completar", de: "Aufgaben zu erledigen", nl: "Klusjes om te voltooien" }, { en: "Problems to solve", es: "Problemas que resolver", de: "Probleme zu lösen", nl: "Problemen om op te lossen" }], correctIndex: 0 },
      { question: { en: "What activities do families often do on Father's Day?", es: "¿Qué actividades suelen hacer las familias en el Día del Padre?", de: "Welche Aktivitäten machen Familien oft am Vatertag?", nl: "Welke activiteiten doen gezinnen vaak op Vaderdag?" }, options: [{ en: "Outdoor activities like barbecues or sports", es: "Actividades al aire libre como parrilladas o deportes", de: "Outdoor-Aktivitäten wie Grillen oder Sport", nl: "Buitenactiviteiten zoals barbecues of sport" }, { en: "Staying in bed all day", es: "Quedarse en cama todo el día", de: "Den ganzen Tag im Bett bleiben", nl: "De hele dag in bed blijven" }, { en: "Doing schoolwork", es: "Hacer tareas escolares", de: "Schularbeiten machen", nl: "Schoolwerk doen" }, { en: "Cleaning the house", es: "Limpiar la casa", de: "Das Haus putzen", nl: "Het huis schoonmaken" }], correctIndex: 0 },
      { question: { en: "What makes Father's Day special?", es: "¿Qué hace especial el Día del Padre?", de: "Was macht den Vatertag besonders?", nl: "Wat maakt Vaderdag speciaal?" }, options: [{ en: "It's a day to appreciate fathers and father figures", es: "Es un día para apreciar a los padres y figuras paternas", de: "Es ist ein Tag, um Väter und Vaterfiguren zu schätzen", nl: "Het is een dag om vaders en vaderfiguren te waarderen" }, { en: "It's the longest day of the year", es: "Es el día más largo del año", de: "Es ist der längste Tag des Jahres", nl: "Het is de langste dag van het jaar" }, { en: "It's the hottest day of summer", es: "Es el día más caluroso del verano", de: "Es ist der heißeste Tag des Sommers", nl: "Het is de heetste dag van de zomer" }, { en: "It's the first day of vacation", es: "Es el primer día de vacaciones", de: "Es ist der erste Urlaubstag", nl: "Het is de eerste dag van vakantie" }], correctIndex: 0 },
      { question: { en: "How can you show appreciation for fathers?", es: "¿Cómo puedes mostrar aprecio por los padres?", de: "Wie kann man Wertschätzung für Väter zeigen?", nl: "Hoe kun je waardering tonen voor vaders?" }, options: [{ en: "Spend quality time and express gratitude", es: "Pasar tiempo de calidad y expresar gratitud", de: "Qualitätszeit verbringen und Dankbarkeit ausdrücken", nl: "Kwaliteitstijd doorbrengen en dankbaarheid uiten" }, { en: "Ignore them completely", es: "Ignorarlos completamente", de: "Sie völlig ignorieren", nl: "Ze volledig negeren" }, { en: "Give them more work to do", es: "Darles más trabajo que hacer", de: "Ihnen mehr Arbeit geben", nl: "Ze meer werk geven" }, { en: "Ask them for money", es: "Pedirles dinero", de: "Sie um Geld bitten", nl: "Ze om geld vragen" }], correctIndex: 0 }
    ],

    // Day 21 - June 21st: Summer Solstice
    day21: [
      { question: { en: "What is June 21st known as?", es: "¿Cómo se conoce el 21 de junio?", de: "Als was ist der 21. Juni bekannt?", nl: "Waardoor staat 21 juni bekend?" }, options: [{ en: "Summer solstice", es: "Solsticio de verano", de: "Sommersonnenwende", nl: "Zomerzonnewende" }, { en: "Winter solstice", es: "Solsticio de invierno", de: "Wintersonnenwende", nl: "Winterzonnewende" }, { en: "Spring equinox", es: "Equinoccio de primavera", de: "Frühlingsäquinoktium", nl: "Lente-equinox" }, { en: "Fall equinox", es: "Equinoccio de otoño", de: "Herbstäquinoktium", nl: "Herfst-equinox" }], correctIndex: 0 },
      { question: { en: "How many hours of daylight are there on the longest day?", es: "¿Cuántas horas de luz hay en el día más largo?", de: "Wie viele Stunden Tageslicht gibt es am längsten Tag?", nl: "Hoeveel uren daglicht zijn er op de langste dag?" }, options: [{ en: "The most of any day in the year", es: "La mayor cantidad de cualquier día del año", de: "Die meisten von jedem Tag im Jahr", nl: "De meeste van elke dag in het jaar" }, { en: "Exactly 12 hours", es: "Exactamente 12 horas", de: "Genau 12 Stunden", nl: "Precies 12 uur" }, { en: "The least of any day", es: "La menor cantidad de cualquier día", de: "Die wenigsten von jedem Tag", nl: "De minste van elke dag" }, { en: "No daylight at all", es: "Sin luz del día en absoluto", de: "Gar kein Tageslicht", nl: "Helemaal geen daglicht" }], correctIndex: 0 },
      { question: { en: "What happens to the sun on the summer solstice?", es: "¿Qué pasa con el sol en el solsticio de verano?", de: "Was passiert mit der Sonne zur Sommersonnenwende?", nl: "Wat gebeurt er met de zon op de zomerzonnewende?" }, options: [{ en: "It reaches its highest point in the sky", es: "Alcanza su punto más alto en el cielo", de: "Sie erreicht ihren höchsten Punkt am Himmel", nl: "Het bereikt zijn hoogste punt aan de hemel" }, { en: "It disappears completely", es: "Desaparece completamente", de: "Sie verschwindet völlig", nl: "Het verdwijnt volledig" }, { en: "It stays at the horizon all day", es: "Permanece en el horizonte todo el día", de: "Sie bleibt den ganzen Tag am Horizont", nl: "Het blijft de hele dag aan de horizon" }, { en: "It moves backwards", es: "Se mueve hacia atrás", de: "Sie bewegt sich rückwärts", nl: "Het beweegt achteruit" }], correctIndex: 0 },
      { question: { en: "What season officially begins on the summer solstice?", es: "¿Qué estación comienza oficialmente en el solsticio de verano?", de: "Welche Jahreszeit beginnt offiziell zur Sommersonnenwende?", nl: "Welk seizoen begint officieel op de zomerzonnewende?" }, options: [{ en: "Summer", es: "Verano", de: "Sommer", nl: "Zomer" }, { en: "Spring", es: "Primavera", de: "Frühling", nl: "Lente" }, { en: "Fall", es: "Otoño", de: "Herbst", nl: "Herfst" }, { en: "Winter", es: "Invierno", de: "Winter", nl: "Winter" }], correctIndex: 0 },
      { question: { en: "How do people often celebrate the summer solstice?", es: "¿Cómo suele celebrar la gente el solsticio de verano?", de: "Wie feiern Menschen oft die Sommersonnenwende?", nl: "Hoe vieren mensen vaak de zomerzonnewende?" }, options: [{ en: "With outdoor festivals and gatherings", es: "Con festivales y reuniones al aire libre", de: "Mit Outdoor-Festivals und Versammlungen", nl: "Met buitenfestivals en bijeenkomsten" }, { en: "By staying indoors all day", es: "Quedándose adentro todo el día", de: "Indem sie den ganzen Tag drinnen bleiben", nl: "Door de hele dag binnen te blijven" }, { en: "By sleeping through the day", es: "Durmiendo durante el día", de: "Indem sie den Tag verschlafen", nl: "Door de dag door te slapen" }, { en: "By avoiding the sun completely", es: "Evitando completamente el sol", de: "Indem sie die Sonne völlig meiden", nl: "Door de zon volledig te mijden" }], correctIndex: 0 }
    ],

    // Adding final days to complete June (days 26-30)
    day26: [
      { question: { en: "What summer activity becomes very popular in late June?", es: "¿Qué actividad de verano se vuelve muy popular a finales de junio?", de: "Welche Sommeraktivität wird Ende Juni sehr beliebt?", nl: "Welke zomeractiviteit wordt heel populair eind juni?" }, options: [{ en: "Swimming and water activities", es: "Natación y actividades acuáticas", de: "Schwimmen und Wasseraktivitäten", nl: "Zwemmen en wateractiviteiten" }, { en: "Building snowmen", es: "Hacer muñecos de nieve", de: "Schneemänner bauen", nl: "Sneeuwpoppen maken" }, { en: "Ice skating", es: "Patinar sobre hielo", de: "Schlittschuhlaufen", nl: "Schaatsen" }, { en: "Raking leaves", es: "Rastrillar hojas", de: "Blätter harken", nl: "Bladeren harken" }], correctIndex: 0 },
      { question: { en: "What should you always do before swimming?", es: "¿Qué debes hacer siempre antes de nadar?", de: "Was solltest du immer vor dem Schwimmen tun?", nl: "Wat moet je altijd doen voor het zwemmen?" }, options: [{ en: "Make sure an adult is present and the area is safe", es: "Asegurarte de que haya un adulto presente y el área sea segura", de: "Sicherstellen, dass ein Erwachsener anwesend ist und der Bereich sicher ist", nl: "Ervoor zorgen dat een volwassene aanwezig is en het gebied veilig is" }, { en: "Jump in immediately without looking", es: "Saltar inmediatamente sin mirar", de: "Sofort hineinspringen ohne zu schauen", nl: "Onmiddellijk erin springen zonder te kijken" }, { en: "Swim alone in unknown water", es: "Nadar solo en agua desconocida", de: "Alleine in unbekanntem Wasser schwimmen", nl: "Alleen zwemmen in onbekend water" }, { en: "Ignore all safety rules", es: "Ignorar todas las reglas de seguridad", de: "Alle Sicherheitsregeln ignorieren", nl: "Alle veiligheidregels negeren" }], correctIndex: 0 },
      { question: { en: "What helps keep you cool while swimming?", es: "¿Qué te ayuda a mantenerte fresco mientras nadas?", de: "Was hilft dir, beim Schwimmen kühl zu bleiben?", nl: "Wat helpt je koel te blijven tijdens het zwemmen?" }, options: [{ en: "The water temperature", es: "La temperatura del agua", de: "Die Wassertemperatur", nl: "De watertemperatuur" }, { en: "Wearing a winter coat", es: "Usar un abrigo de invierno", de: "Einen Wintermantel tragen", nl: "Een winterjas dragen" }, { en: "Drinking hot beverages", es: "Beber bebidas calientes", de: "Heiße Getränke trinken", nl: "Warme dranken drinken" }, { en: "Standing in the sun", es: "Estar de pie al sol", de: "In der Sonne stehen", nl: "In de zon staan" }], correctIndex: 0 },
      { question: { en: "Where can people swim safely?", es: "¿Dónde pueden nadar las personas de manera segura?", de: "Wo können Menschen sicher schwimmen?", nl: "Waar kunnen mensen veilig zwemmen?" }, options: [{ en: "Pools, lakes with lifeguards, or supervised beaches", es: "Piscinas, lagos con salvavidas o playas supervisadas", de: "Schwimmbäder, Seen mit Bademeistern oder überwachte Strände", nl: "Zwembaden, meren met badmeesters of bewaakte stranden" }, { en: "Any water they find", es: "Cualquier agua que encuentren", de: "Jedes Wasser, das sie finden", nl: "Elk water dat ze vinden" }, { en: "Only in bathtubs", es: "Solo en bañeras", de: "Nur in Badewannen", nl: "Alleen in badkuipen" }, { en: "In frozen ponds", es: "En estanques congelados", de: "In gefrorenen Teichen", nl: "In bevroren vijvers" }], correctIndex: 0 },
      { question: { en: "What should you wear to protect your skin while swimming outdoors?", es: "¿Qué debes usar para proteger tu piel mientras nadas al aire libre?", de: "Was solltest du tragen, um deine Haut beim Schwimmen im Freien zu schützen?", nl: "Wat moet je dragen om je huid te beschermen tijdens het zwemmen buiten?" }, options: [{ en: "Sunscreen", es: "Protector solar", de: "Sonnencreme", nl: "Zonnebrandcrème" }, { en: "Heavy clothing", es: "Ropa pesada", de: "Schwere Kleidung", nl: "Zware kleding" }, { en: "Nothing special", es: "Nada especial", de: "Nichts Besonderes", nl: "Niets bijzonders" }, { en: "Winter boots", es: "Botas de invierno", de: "Winterstiefel", nl: "Winterlaarzen" }], correctIndex: 0 }
    ],

    day27: [
      { question: { en: "What do many families start planning in late June?", es: "¿Qué empiezan a planificar muchas familias a finales de junio?", de: "Was fangen viele Familien Ende Juni an zu planen?", nl: "Wat gaan veel gezinnen plannen eind juni?" }, options: [{ en: "Summer vacations", es: "Vacaciones de verano", de: "Sommerferien", nl: "Zomervakanties" }, { en: "Winter holidays", es: "Fiestas de invierno", de: "Winterfeiertage", nl: "Winterfeesten" }, { en: "School shopping", es: "Compras escolares", de: "Schuleinkäufe", nl: "Schoolinkopen" }, { en: "Halloween costumes", es: "Disfraces de Halloween", de: "Halloween-Kostüme", nl: "Halloween kostuums" }], correctIndex: 0 },
      { question: { en: "What are popular summer vacation destinations?", es: "¿Cuáles son destinos populares de vacaciones de verano?", de: "Was sind beliebte Sommerurlaubsziele?", nl: "Wat zijn populaire zomervakantiebstemmingen?" }, options: [{ en: "Beaches, mountains, and national parks", es: "Playas, montañas y parques nacionales", de: "Strände, Berge und Nationalparks", nl: "Stranden, bergen en nationale parken" }, { en: "Only shopping malls", es: "Solo centros comerciales", de: "Nur Einkaufszentren", nl: "Alleen winkelcentra" }, { en: "Abandoned buildings", es: "Edificios abandonados", de: "Verlassene Gebäude", nl: "Verlaten gebouwen" }, { en: "Underground caves only", es: "Solo cuevas subterráneas", de: "Nur unterirdische Höhlen", nl: "Alleen ondergrondse grotten" }], correctIndex: 0 },
      { question: { en: "What should families pack for summer vacations?", es: "¿Qué deben empacar las familias para las vacaciones de verano?", de: "Was sollten Familien für Sommerferien einpacken?", nl: "Wat moeten gezinnen inpakken voor zomervakanties?" }, options: [{ en: "Light clothing, sunscreen, and comfortable shoes", es: "Ropa ligera, protector solar y zapatos cómodos", de: "Leichte Kleidung, Sonnencreme und bequeme Schuhe", nl: "Lichte kleding, zonnebrandcrème en comfortabele schoenen" }, { en: "Only winter coats", es: "Solo abrigos de invierno", de: "Nur Wintermäntel", nl: "Alleen winterjassen" }, { en: "Heavy boots and scarves", es: "Botas pesadas y bufandas", de: "Schwere Stiefel und Schals", nl: "Zware laarzen en sjaals" }, { en: "Nothing at all", es: "Nada en absoluto", de: "Gar nichts", nl: "Helemaal niets" }], correctIndex: 0 },
      { question: { en: "Why do people like to travel in summer?", es: "¿Por qué a la gente le gusta viajar en verano?", de: "Warum reisen Menschen gerne im Sommer?", nl: "Waarom reizen mensen graag in de zomer?" }, options: [{ en: "Good weather and more daylight hours", es: "Buen clima y más horas de luz", de: "Gutes Wetter und mehr Tagesstunden", nl: "Goed weer en meer daglichturen" }, { en: "It's always raining", es: "Siempre está lloviendo", de: "Es regnet immer", nl: "Het regent altijd" }, { en: "Days are very short", es: "Los días son muy cortos", de: "Die Tage sind sehr kurz", nl: "De dagen zijn erg kort" }, { en: "Everything is closed", es: "Todo está cerrado", de: "Alles ist geschlossen", nl: "Alles is gesloten" }], correctIndex: 0 },
      { question: { en: "What activities can families do on summer vacations?", es: "¿Qué actividades pueden hacer las familias en las vacaciones de verano?", de: "Welche Aktivitäten können Familien im Sommerurlaub machen?", nl: "Welke activiteiten kunnen gezinnen doen tijdens zomervakanties?" }, options: [{ en: "Hiking, swimming, sightseeing, and outdoor games", es: "Senderismo, natación, turismo y juegos al aire libre", de: "Wandern, Schwimmen, Sightseeing und Outdoor-Spiele", nl: "Wandelen, zwemmen, sightseeing en buitenspellen" }, { en: "Only sleeping indoors", es: "Solo dormir adentro", de: "Nur drinnen schlafen", nl: "Alleen binnen slapen" }, { en: "Watching TV all day", es: "Ver televisión todo el día", de: "Den ganzen Tag fernsehen", nl: "De hele dag tv kijken" }, { en: "Doing homework", es: "Hacer tareas", de: "Hausaufgaben machen", nl: "Huiswerk maken" }], correctIndex: 0 }
    ],

    day28: [
      { question: { en: "What do gardens need most during hot June days?", es: "¿Qué necesitan más los jardines durante los días calurosos de junio?", de: "Was brauchen Gärten am meisten während heißer Juni-Tage?", nl: "Wat hebben tuinen het meest nodig tijdens warme juni dagen?" }, options: [{ en: "Regular watering", es: "Riego regular", de: "Regelmäßiges Bewässern", nl: "Regelmatig water geven" }, { en: "More fertilizer", es: "Más fertilizante", de: "Mehr Dünger", nl: "Meer meststof" }, { en: "Less sunlight", es: "Menos luz solar", de: "Weniger Sonnenlicht", nl: "Minder zonlicht" }, { en: "Cold temperatures", es: "Temperaturas frías", de: "Kalte Temperaturen", nl: "Koude temperaturen" }], correctIndex: 0 },
      { question: { en: "When is the best time to water plants in summer?", es: "¿Cuándo es el mejor momento para regar las plantas en verano?", de: "Wann ist die beste Zeit, Pflanzen im Sommer zu gießen?", nl: "Wanneer is de beste tijd om planten water te geven in de zomer?" }, options: [{ en: "Early morning or evening", es: "Temprano en la mañana o en la tarde", de: "Früh am Morgen oder am Abend", nl: "Vroeg in de ochtend of 's avonds" }, { en: "During the hottest part of the day", es: "Durante la parte más calurosa del día", de: "Während der heißesten Tageszeit", nl: "Tijdens het heetste deel van de dag" }, { en: "Only at midnight", es: "Solo a medianoche", de: "Nur um Mitternacht", nl: "Alleen om middernacht" }, { en: "Never water them", es: "Nunca regarlas", de: "Sie nie gießen", nl: "Ze nooit water geven" }], correctIndex: 0 },
      { question: { en: "What vegetables can be harvested in June?", es: "¿Qué vegetales se pueden cosechar en junio?", de: "Welches Gemüse kann im Juni geerntet werden?", nl: "Welke groenten kunnen in juni worden geoogst?" }, options: [{ en: "Lettuce, peas, and early tomatoes", es: "Lechuga, guisantes y tomates tempranos", de: "Salat, Erbsen und frühe Tomaten", nl: "Sla, erwten en vroege tomaten" }, { en: "Only winter vegetables", es: "Solo vegetales de invierno", de: "Nur Wintergemüse", nl: "Alleen wintergroenten" }, { en: "No vegetables grow in summer", es: "No crecen vegetales en verano", de: "Im Sommer wächst kein Gemüse", nl: "Er groeien geen groenten in de zomer" }, { en: "Only root vegetables", es: "Solo vegetales de raíz", de: "Nur Wurzelgemüse", nl: "Alleen wortelgroenten" }], correctIndex: 0 },
      { question: { en: "How can gardeners protect plants from extreme heat?", es: "¿Cómo pueden los jardineros proteger las plantas del calor extremo?", de: "Wie können Gärtner Pflanzen vor extremer Hitze schützen?", nl: "Hoe kunnen tuiniers planten beschermen tegen extreme hitte?" }, options: [{ en: "Provide shade and mulch around plants", es: "Proporcionar sombra y mulch alrededor de las plantas", de: "Schatten und Mulch um die Pflanzen bereitstellen", nl: "Schaduw en mulch rond planten voorzien" }, { en: "Remove all water", es: "Quitar toda el agua", de: "Alles Wasser entfernen", nl: "Al het water wegdoen" }, { en: "Plant them in full sun", es: "Plantarlas a pleno sol", de: "Sie in voller Sonne pflanzen", nl: "Ze in volle zon planten" }, { en: "Never check on them", es: "Nunca revisarlas", de: "Sie nie kontrollieren", nl: "Ze nooit controleren" }], correctIndex: 0 },
      { question: { en: "What attracts beneficial insects to summer gardens?", es: "¿Qué atrae insectos beneficiosos a los jardines de verano?", de: "Was lockt nützliche Insekten in Sommergärten?", nl: "Wat trekt nuttige insecten aan naar zomertuinen?" }, options: [{ en: "Colorful flowers and herbs", es: "Flores coloridas y hierbas", de: "Bunte Blumen und Kräuter", nl: "Kleurrijke bloemen en kruiden" }, { en: "Plastic decorations", es: "Decoraciones de plástico", de: "Plastikdekorationen", nl: "Plastic decoraties" }, { en: "Loud noises", es: "Ruidos fuertes", de: "Laute Geräusche", nl: "Harde geluiden" }, { en: "Bright artificial lights", es: "Luces artificiales brillantes", de: "Helle künstliche Lichter", nl: "Felle kunstlichten" }], correctIndex: 0 }
    ],

    day29: [
      { question: { en: "What do many families do to stay cool in late June?", es: "¿Qué hacen muchas familias para mantenerse frescas a finales de junio?", de: "Was machen viele Familien, um Ende Juni kühl zu bleiben?", nl: "Wat doen veel gezinnen om koel te blijven eind juni?" }, options: [{ en: "Use air conditioning, fans, or visit cool places", es: "Usan aire acondicionado, ventiladores o visitan lugares frescos", de: "Klimaanlage, Ventilatoren nutzen oder kühle Orte besuchen", nl: "Airconditioning, ventilatoren gebruiken of koele plaatsen bezoeken" }, { en: "Wear heavy winter clothes", es: "Usan ropa pesada de invierno", de: "Schwere Winterkleidung tragen", nl: "Zware winterkleding dragen" }, { en: "Stay in the sun all day", es: "Quedarse al sol todo el día", de: "Den ganzen Tag in der Sonne bleiben", nl: "De hele dag in de zon blijven" }, { en: "Drink hot beverages only", es: "Solo beber bebidas calientes", de: "Nur heiße Getränke trinken", nl: "Alleen warme dranken drinken" }], correctIndex: 0 },
      { question: { en: "What are signs that you might be getting too hot?", es: "¿Cuáles son las señales de que podrías estar calentándote demasiado?", de: "Was sind Anzeichen dafür, dass dir zu heiß werden könnte?", nl: "Wat zijn tekenen dat je misschien te warm wordt?" }, options: [{ en: "Feeling dizzy, tired, or very thirsty", es: "Sentirse mareado, cansado o muy sediento", de: "Schwindelig, müde oder sehr durstig fühlen", nl: "Je duizelig, moe of erg dorstig voelen" }, { en: "Feeling perfectly comfortable", es: "Sentirse perfectamente cómodo", de: "Sich völlig wohl fühlen", nl: "Je perfect comfortabel voelen" }, { en: "Wanting to exercise more", es: "Querer ejercitarse más", de: "Mehr trainieren wollen", nl: "Meer willen sporten" }, { en: "Feeling very cold", es: "Sentir mucho frío", de: "Sich sehr kalt fühlen", nl: "Je erg koud voelen" }], correctIndex: 0 },
      { question: { en: "What should you drink more of in hot weather?", es: "¿Qué debes beber más en clima caluroso?", de: "Was solltest du bei heißem Wetter mehr trinken?", nl: "Wat moet je meer drinken bij warm weer?" }, options: [{ en: "Water", es: "Agua", de: "Wasser", nl: "Water" }, { en: "Hot coffee", es: "Café caliente", de: "Heißer Kaffee", nl: "Hete koffie" }, { en: "Warm milk", es: "Leche tibia", de: "Warme Milch", nl: "Warme melk" }, { en: "Hot chocolate", es: "Chocolate caliente", de: "Heiße Schokolade", nl: "Warme chocolademelk" }], correctIndex: 0 },
      { question: { en: "What clothing is best for very hot days?", es: "¿Qué ropa es mejor para días muy calurosos?", de: "Welche Kleidung ist am besten für sehr heiße Tage?", nl: "Welke kleding is het beste voor zeer warme dagen?" }, options: [{ en: "Light-colored, loose-fitting clothes", es: "Ropa de colores claros y holgada", de: "Hellfarben, locker sitzende Kleidung", nl: "Lichtgekleurde, loszittende kleding" }, { en: "Dark, heavy clothing", es: "Ropa oscura y pesada", de: "Dunkle, schwere Kleidung", nl: "Donkere, zware kleding" }, { en: "Multiple thick layers", es: "Múltiples capas gruesas", de: "Mehrere dicke Schichten", nl: "Meerdere dikke lagen" }, { en: "Plastic or rubber clothes", es: "Ropa de plástico o goma", de: "Plastik- oder Gummikleidung", nl: "Plastic of rubber kleding" }], correctIndex: 0 },
      { question: { en: "Where can you go to cool off on a very hot day?", es: "¿Dónde puedes ir a refrescarte en un día muy caluroso?", de: "Wo kannst du dich an einem sehr heißen Tag abkühlen?", nl: "Waar kun je naartoe gaan om af te koelen op een zeer warme dag?" }, options: [{ en: "Air-conditioned buildings, pools, or shaded areas", es: "Edificios con aire acondicionado, piscinas o áreas sombreadas", de: "Klimatisierte Gebäude, Schwimmbäder oder schattige Bereiche", nl: "Gebouwen met airconditioning, zwembaden of schaduwrijke gebieden" }, { en: "Hot parking lots", es: "Estacionamientos calientes", de: "Heiße Parkplätze", nl: "Hete parkeerplaatsen" }, { en: "Direct sunlight", es: "Luz solar directa", de: "Direktes Sonnenlicht", nl: "Direct zonlicht" }, { en: "Closed cars", es: "Autos cerrados", de: "Geschlossene Autos", nl: "Gesloten auto's" }], correctIndex: 0 }
    ],

    day30: [
      {
        question: {
          en: "What is special about the end of June?",
          es: "¿Qué es especial sobre el final de junio?",
          de: "Was ist besonders am Ende des Juni?",
          nl: "Wat is bijzonder aan het einde van juni?"
        },
        options: [
          { en: "Summer is in full swing", es: "El verano está en pleno apogeo", de: "Der Sommer ist in vollem Gange", nl: "De zomer is in volle gang" },
          { en: "Winter is beginning", es: "El invierno está comenzando", de: "Der Winter beginnt", nl: "De winter begint" },
          { en: "It's the coldest time of year", es: "Es la época más fría del año", de: "Es ist die kälteste Zeit des Jahres", nl: "Het is de koudste tijd van het jaar" },
          { en: "Leaves are falling", es: "Las hojas están cayendo", de: "Blätter fallen", nl: "Bladeren vallen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What can you look forward to in July after June ends?",
          es: "¿Qué puedes esperar en julio después de que termine junio?",
          de: "Worauf kannst du dich im Juli freuen, nachdem Juni vorbei ist?",
          nl: "Waar kun je naar uitkijken in juli nadat juni eindigt?"
        },
        options: [
          { en: "More summer activities and warm weather", es: "Más actividades de verano y clima cálido", de: "Mehr Sommeraktivitäten und warmes Wetter", nl: "Meer zomeractiviteiten en warm weer" },
          { en: "Winter sports", es: "Deportes de invierno", de: "Wintersport", nl: "Wintersporten" },
          { en: "Back to school", es: "Vuelta a la escuela", de: "Zurück zur Schule", nl: "Terug naar school" },
          { en: "Shorter days", es: "Días más cortos", de: "Kürzere Tage", nl: "Kortere dagen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How do the longest days of the year affect people's activities?",
          es: "¿Cómo afectan los días más largos del año a las actividades de las personas?",
          de: "Wie beeinflussen die längsten Tage des Jahres die Aktivitäten der Menschen?",
          nl: "Hoe beïnvloeden de langste dagen van het jaar de activiteiten van mensen?"
        },
        options: [
          { en: "People spend more time outdoors", es: "La gente pasa más tiempo al aire libre", de: "Menschen verbringen mehr Zeit draußen", nl: "Mensen brengen meer tijd buiten door" },
          { en: "Everyone stays inside", es: "Todos se quedan adentro", de: "Alle bleiben drinnen", nl: "Iedereen blijft binnen" },
          { en: "People sleep all day", es: "La gente duerme todo el día", de: "Menschen schlafen den ganzen Tag", nl: "Mensen slapen de hele dag" },
          { en: "No one does any activities", es: "Nadie hace ninguna actividad", de: "Niemand macht Aktivitäten", nl: "Niemand doet activiteiten" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What summer preparations should be completed by the end of June?",
          es: "¿Qué preparaciones de verano deberían completarse a finales de junio?",
          de: "Welche Sommervorbereitungen sollten bis Ende Juni abgeschlossen sein?",
          nl: "Welke zomervoorbereidingen zouden tegen het einde van juni klaar moeten zijn?"
        },
        options: [
          { en: "Vacation planning and summer gear ready", es: "Planificación de vacaciones y equipo de verano listo", de: "Urlaubsplanung und Sommerausrüstung bereit", nl: "Vakantieplanning en zomerspullen klaar" },
          { en: "Winter coat shopping", es: "Compras de abrigos de invierno", de: "Wintermantel-Shopping", nl: "Winterjassen kopen" },
          { en: "Heating system maintenance", es: "Mantenimiento del sistema de calefacción", de: "Wartung des Heizsystems", nl: "Onderhoud van het verwarmingssysteem" },
          { en: "Snow removal equipment", es: "Equipo para quitar nieve", de: "Schneeräumungsausrüstung", nl: "Sneeuwruimapparatuur" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is a good way to celebrate the end of June?",
          es: "¿Cuál es una buena manera de celebrar el final de junio?",
          de: "Was ist ein guter Weg, das Ende des Juni zu feiern?",
          nl: "Wat is een goede manier om het einde van juni te vieren?"
        },
        options: [
          { en: "Having outdoor gatherings with family and friends", es: "Tener reuniones al aire libre con familia y amigos", de: "Outdoor-Versammlungen mit Familie und Freunden haben", nl: "Buitenbijeenkomsten hebben met familie en vrienden" },
          { en: "Staying indoors alone", es: "Quedarse adentro solo", de: "Alleine drinnen bleiben", nl: "Alleen binnen blijven" },
          { en: "Preparing for winter", es: "Preparándose para el invierno", de: "Sich auf den Winter vorbereiten", nl: "Zich voorbereiden op de winter" },
          { en: "Avoiding all celebrations", es: "Evitando todas las celebraciones", de: "Alle Feiern vermeiden", nl: "Alle vieringen vermijden" }
        ],
        correctIndex: 0
      }
    ]
  };

  // Export June challenges
  if (typeof window.addMonthChallenges === 'function') {
    window.addMonthChallenges('june', juneChallenges);
  }

})();