// Coffee Quiz - Level 1: Basic Coffee Knowledge
(function() {
  const level1 = {
    name: {
      en: "Coffee Level 1",
      es: "Café Nivel 1",
      de: "Kaffee Stufe 1",
      nl: "Koffie Level 1"
    },
    questions: [
      {
        question: {
          en: "What color is coffee usually?",
          es: "¿De qué color es normalmente el café?",
          de: "Welche Farbe hat Kaffee normalerweise?",
          nl: "Welke kleur heeft koffie meestal?"
        },
        options: [
          { en: "Brown", es: "Marrón", de: "Braun", nl: "Bruin" },
          { en: "Blue", es: "Azul", de: "Blau", nl: "Blauw" },
          { en: "Green", es: "Verde", de: "Grün", nl: "Groen" },
          { en: "Purple", es: "Morado", de: "Lila", nl: "Paars" }
        ],
        correct: 0,
        explanation: {
          en: "Coffee is brown because the coffee beans are roasted, which turns them from green to brown.",
          es: "El café es marrón porque los granos de café se tuestan, lo que los convierte de verde a marrón.",
          de: "Kaffee ist braun, weil die Kaffeebohnen geröstet werden, wodurch sie von grün zu braun werden.",
          nl: "Koffie is bruin omdat de koffiebonen worden gebrand, waardoor ze van groen naar bruin worden."
        }
      },
      {
        question: {
          en: "Is coffee a hot or cold drink?",
          es: "¿El café es una bebida caliente o fría?",
          de: "Ist Kaffee ein heißes oder kaltes Getränk?",
          nl: "Is koffie een warm of koud drankje?"
        },
        options: [
          { en: "It can be both hot or cold", es: "Puede ser caliente o frío", de: "Es kann beides sein, heiß oder kalt", nl: "Het kan beide, warm of koud" },
          { en: "Only hot", es: "Solo caliente", de: "Nur heiß", nl: "Alleen warm" },
          { en: "Only cold", es: "Solo frío", de: "Nur kalt", nl: "Alleen koud" },
          { en: "Neither hot nor cold", es: "Ni caliente ni frío", de: "Weder heiß noch kalt", nl: "Noch warm noch koud" }
        ],
        correct: 0,
        explanation: {
          en: "Coffee can be served hot or cold. Hot coffee is the most common, but iced coffee is also very popular, especially in summer!",
          es: "El café se puede servir caliente o frío. El café caliente es el más común, pero el café helado también es muy popular, ¡especialmente en verano!",
          de: "Kaffee kann heiß oder kalt serviert werden. Heißer Kaffee ist am häufigsten, aber Eiskaffee ist auch sehr beliebt, besonders im Sommer!",
          nl: "Koffie kan warm of koud worden geserveerd. Warme koffie is het meest gebruikelijk, maar ijskoffie is ook erg populair, vooral in de zomer!"
        }
      },
      {
        question: {
          en: "What does coffee come from?",
          es: "¿De dónde viene el café?",
          de: "Woher kommt Kaffee?",
          nl: "Waar komt koffie vandaan?"
        },
        options: [
          { en: "Coffee beans", es: "Granos de café", de: "Kaffeebohnen", nl: "Koffiebonen" },
          { en: "Tea leaves", es: "Hojas de té", de: "Teeblätter", nl: "Theebladeren" },
          { en: "Orange juice", es: "Jugo de naranja", de: "Orangensaft", nl: "Sinaasappelsap" },
          { en: "Milk", es: "Leche", de: "Milch", nl: "Melk" }
        ],
        correct: 0,
        explanation: {
          en: "Coffee is made from coffee beans, which grow on coffee plants. The beans are roasted and then ground up to make coffee.",
          es: "El café se hace de granos de café, que crecen en plantas de café. Los granos se tuestan y luego se muelen para hacer café.",
          de: "Kaffee wird aus Kaffeebohnen hergestellt, die auf Kaffeepflanzen wachsen. Die Bohnen werden geröstet und dann gemahlen, um Kaffee zu machen.",
          nl: "Koffie wordt gemaakt van koffiebonen, die groeien aan koffieplanten. De bonen worden gebrand en dan gemalen om koffie te maken."
        }
      },
      {
        question: {
          en: "Do children usually drink coffee?",
          es: "¿Los niños suelen tomar café?",
          de: "Trinken Kinder normalerweise Kaffee?",
          nl: "Drinken kinderen meestal koffie?"
        },
        options: [
          { en: "No, usually adults drink coffee", es: "No, normalmente los adultos toman café", de: "Nein, normalerweise trinken Erwachsene Kaffee", nl: "Nee, meestal drinken volwassenen koffie" },
          { en: "Yes, everyone drinks coffee", es: "Sí, todos toman café", de: "Ja, jeder trinkt Kaffee", nl: "Ja, iedereen drinkt koffie" },
          { en: "Only babies drink coffee", es: "Solo los bebés toman café", de: "Nur Babys trinken Kaffee", nl: "Alleen baby's drinken koffie" },
          { en: "Coffee is only for cats", es: "El café es solo para gatos", de: "Kaffee ist nur für Katzen", nl: "Koffie is alleen voor katten" }
        ],
        correct: 0,
        explanation: {
          en: "Coffee is usually a drink for adults because it contains caffeine, which can make you feel more awake. Children usually drink milk, juice, or water instead.",
          es: "El café suele ser una bebida para adultos porque contiene cafeína, que puede hacerte sentir más despierto. Los niños generalmente toman leche, jugo o agua en su lugar.",
          de: "Kaffee ist normalerweise ein Getränk für Erwachsene, weil er Koffein enthält, das dich wacher fühlen lässt. Kinder trinken normalerweise stattdessen Milch, Saft oder Wasser.",
          nl: "Koffie is meestal een drankje voor volwassenen omdat het cafeïne bevat, wat je wakkerder kan maken. Kinderen drinken meestal melk, sap of water in plaats daarvan."
        }
      },
      {
        question: {
          en: "What do many people add to their coffee?",
          es: "¿Qué añade mucha gente a su café?",
          de: "Was geben viele Leute in ihren Kaffee?",
          nl: "Wat voegen veel mensen toe aan hun koffie?"
        },
        options: [
          { en: "Milk and sugar", es: "Leche y azúcar", de: "Milch und Zucker", nl: "Melk en suiker" },
          { en: "Salt and pepper", es: "Sal y pimienta", de: "Salz und Pfeffer", nl: "Zout en peper" },
          { en: "Ketchup", es: "Ketchup", de: "Ketchup", nl: "Ketchup" },
          { en: "Ice cream and cake", es: "Helado y pastel", de: "Eis und Kuchen", nl: "IJs en taart" }
        ],
        correct: 0,
        explanation: {
          en: "Many people like to add milk to make coffee lighter and creamier, and sugar to make it sweeter. Some people drink it black without anything added.",
          es: "A mucha gente le gusta añadir leche para hacer el café más claro y cremoso, y azúcar para hacerlo más dulce. Algunas personas lo toman negro sin añadir nada.",
          de: "Viele Leute geben gerne Milch hinzu, um Kaffee heller und cremiger zu machen, und Zucker, um ihn süßer zu machen. Manche Leute trinken ihn schwarz ohne Zusätze.",
          nl: "Veel mensen voegen graag melk toe om koffie lichter en romiger te maken, en suiker om het zoeter te maken. Sommige mensen drinken het zwart zonder iets toegevoegd."
        }
      },
      {
        question: {
          en: "When do most people drink coffee?",
          es: "¿Cuándo toma la mayoría de la gente café?",
          de: "Wann trinken die meisten Leute Kaffee?",
          nl: "Wanneer drinken de meeste mensen koffie?"
        },
        options: [
          { en: "In the morning", es: "Por la mañana", de: "Am Morgen", nl: "'s Ochtends" },
          { en: "Only at midnight", es: "Solo a medianoche", de: "Nur um Mitternacht", nl: "Alleen om middernacht" },
          { en: "During sleep", es: "Durante el sueño", de: "Während des Schlafens", nl: "Tijdens het slapen" },
          { en: "Never", es: "Nunca", de: "Niemals", nl: "Nooit" }
        ],
        correct: 0,
        explanation: {
          en: "Most people drink coffee in the morning to help them wake up and start their day. Coffee helps people feel more alert and energetic.",
          es: "La mayoría de la gente toma café por la mañana para ayudarles a despertarse y comenzar su día. El café ayuda a las personas a sentirse más alertas y enérgicas.",
          de: "Die meisten Leute trinken Kaffee am Morgen, um ihnen beim Aufwachen zu helfen und ihren Tag zu beginnen. Kaffee hilft Menschen, sich wacher und energiegeladener zu fühlen.",
          nl: "De meeste mensen drinken koffie 's ochtends om hen te helpen wakker te worden en hun dag te beginnen. Koffie helpt mensen zich alerter en energieker te voelen."
        }
      },
      {
        question: {
          en: "What does coffee smell like?",
          es: "¿A qué huele el café?",
          de: "Wie riecht Kaffee?",
          nl: "Hoe ruikt koffie?"
        },
        options: [
          { en: "Strong and nice", es: "Fuerte y agradable", de: "Stark und angenehm", nl: "Sterk en lekker" },
          { en: "Like flowers", es: "Como flores", de: "Wie Blumen", nl: "Naar bloemen" },
          { en: "Like fish", es: "Como pescado", de: "Wie Fisch", nl: "Naar vis" },
          { en: "Like nothing", es: "Como nada", de: "Nach nichts", nl: "Naar niets" }
        ],
        correct: 0,
        explanation: {
          en: "Coffee has a strong, pleasant smell that many people love. The smell of fresh coffee in the morning is very popular!",
          es: "El café tiene un olor fuerte y agradable que a mucha gente le encanta. ¡El olor del café fresco por la mañana es muy popular!",
          de: "Kaffee hat einen starken, angenehmen Geruch, den viele Menschen lieben. Der Geruch von frischem Kaffee am Morgen ist sehr beliebt!",
          nl: "Koffie heeft een sterke, aangename geur waar veel mensen van houden. De geur van verse koffie in de ochtend is erg populair!"
        }
      },
      {
        question: {
          en: "What is a cappuccino?",
          es: "¿Qué es un capuchino?",
          de: "Was ist ein Cappuccino?",
          nl: "Wat is een cappuccino?"
        },
        options: [
          { en: "Coffee with foamy milk", es: "Café con leche espumosa", de: "Kaffee mit schaumiger Milch", nl: "Koffie met schuimige melk" },
          { en: "A type of cake", es: "Un tipo de pastel", de: "Eine Art Kuchen", nl: "Een soort taart" },
          { en: "Orange juice", es: "Jugo de naranja", de: "Orangensaft", nl: "Sinaasappelsap" },
          { en: "A sandwich", es: "Un sándwich", de: "Ein Sandwich", nl: "Een broodje" }
        ],
        correct: 0,
        explanation: {
          en: "A cappuccino is a special kind of coffee drink made with espresso and steamed milk topped with foam. The foam on top looks like a white cloud!",
          es: "Un capuchino es un tipo especial de café hecho con espresso y leche al vapor cubierta con espuma. ¡La espuma en la parte superior parece una nube blanca!",
          de: "Ein Cappuccino ist eine besondere Art von Kaffeegetränk aus Espresso und aufgeschäumter Milch mit Schaum obendrauf. Der Schaum oben sieht aus wie eine weiße Wolke!",
          nl: "Een cappuccino is een speciaal soort koffiedrankje gemaakt met espresso en gestoomde melk bedekt met schuim. Het schuim bovenop lijkt op een witte wolk!"
        }
      },
      {
        question: {
          en: "Where do coffee plants grow?",
          es: "¿Dónde crecen las plantas de café?",
          de: "Wo wachsen Kaffeepflanzen?",
          nl: "Waar groeien koffieplanten?"
        },
        options: [
          { en: "In warm countries", es: "En países cálidos", de: "In warmen Ländern", nl: "In warme landen" },
          { en: "At the North Pole", es: "En el Polo Norte", de: "Am Nordpol", nl: "Op de Noordpool" },
          { en: "Under the ocean", es: "Bajo el océano", de: "Unter dem Ozean", nl: "Onder de oceaan" },
          { en: "In outer space", es: "En el espacio exterior", de: "Im Weltraum", nl: "In de ruimte" }
        ],
        correct: 0,
        explanation: {
          en: "Coffee plants need warm weather and rain to grow well, so they grow in countries near the equator like Brazil, Colombia, and Ethiopia.",
          es: "Las plantas de café necesitan clima cálido y lluvia para crecer bien, por lo que crecen en países cerca del ecuador como Brasil, Colombia y Etiopía.",
          de: "Kaffeepflanzen brauchen warmes Wetter und Regen, um gut zu wachsen, deshalb wachsen sie in Ländern in der Nähe des Äquators wie Brasilien, Kolumbien und Äthiopien.",
          nl: "Koffieplanten hebben warm weer en regen nodig om goed te groeien, dus groeien ze in landen bij de evenaar zoals Brazilië, Colombia en Ethiopië."
        }
      },
      {
        question: {
          en: "What is espresso?",
          es: "¿Qué es el espresso?",
          de: "Was ist Espresso?",
          nl: "Wat is espresso?"
        },
        options: [
          { en: "Very strong, small coffee", es: "Café muy fuerte y pequeño", de: "Sehr starker, kleiner Kaffee", nl: "Zeer sterke, kleine koffie" },
          { en: "A type of train", es: "Un tipo de tren", de: "Eine Art Zug", nl: "Een soort trein" },
          { en: "Chocolate milk", es: "Leche con chocolate", de: "Schokoladenmilch", nl: "Chocolademelk" },
          { en: "A big glass of water", es: "Un vaso grande de agua", de: "Ein großes Glas Wasser", nl: "Een groot glas water" }
        ],
        correct: 0,
        explanation: {
          en: "Espresso is a very strong coffee served in a tiny cup. It's made by forcing hot water through finely ground coffee beans very quickly.",
          es: "El espresso es un café muy fuerte servido en una taza pequeña. Se hace forzando agua caliente a través de granos de café finamente molidos muy rápidamente.",
          de: "Espresso ist ein sehr starker Kaffee, der in einer winzigen Tasse serviert wird. Er wird hergestellt, indem heißes Wasser sehr schnell durch fein gemahlene Kaffeebohnen gepresst wird.",
          nl: "Espresso is een zeer sterke koffie geserveerd in een klein kopje. Het wordt gemaakt door heet water heel snel door fijngemalen koffiebonen te persen."
        }
      },
      {
        question: {
          en: "Where do you usually drink coffee?",
          es: "¿Dónde sueles tomar café?",
          de: "Wo trinkt man normalerweise Kaffee?",
          nl: "Waar drink je meestal koffie?"
        },
        options: [
          { en: "In a cup or mug", es: "En una taza", de: "In einer Tasse", nl: "In een kopje of mok" },
          { en: "In a bowl", es: "En un tazón", de: "In einer Schüssel", nl: "In een kom" },
          { en: "In a bottle", es: "En una botella", de: "In einer Flasche", nl: "In een fles" },
          { en: "On a plate", es: "En un plato", de: "Auf einem Teller", nl: "Op een bord" }
        ],
        correct: 0,
        explanation: {
          en: "Coffee is usually served in a cup or mug. This makes it easy to hold and drink while it's still warm!",
          es: "El café generalmente se sirve en una taza. ¡Esto hace que sea fácil de sostener y beber mientras aún está caliente!",
          de: "Kaffee wird normalerweise in einer Tasse serviert. Das macht es einfach zu halten und zu trinken, während er noch warm ist!",
          nl: "Koffie wordt meestal geserveerd in een kopje of mok. Dit maakt het gemakkelijk om vast te houden en te drinken terwijl het nog warm is!"
        }
      },
      {
        question: {
          en: "What machine is often used to make coffee at home?",
          es: "¿Qué máquina se usa a menudo para hacer café en casa?",
          de: "Welche Maschine wird oft verwendet, um zu Hause Kaffee zu machen?",
          nl: "Welke machine wordt vaak gebruikt om thuis koffie te maken?"
        },
        options: [
          { en: "A coffee maker", es: "Una cafetera", de: "Eine Kaffeemaschine", nl: "Een koffiezetapparaat" },
          { en: "A washing machine", es: "Una lavadora", de: "Eine Waschmaschine", nl: "Een wasmachine" },
          { en: "A vacuum cleaner", es: "Una aspiradora", de: "Ein Staubsauger", nl: "Een stofzuiger" },
          { en: "A blender", es: "Una licuadora", de: "Ein Mixer", nl: "Een blender" }
        ],
        correct: 0,
        explanation: {
          en: "A coffee maker is a special machine that heats water and passes it through coffee grounds to make coffee.",
          es: "Una cafetera es una máquina especial que calienta el agua y la pasa a través del café molido para hacer café.",
          de: "Eine Kaffeemaschine ist ein spezielles Gerät, das Wasser erhitzt und durch Kaffeepulver leitet, um Kaffee zu machen.",
          nl: "Een koffiezetapparaat is een speciale machine die water verwarmt en door koffiepoeder laat lopen om koffie te maken."
        }
      },
      {
        question: {
          en: "Is coffee sweet or bitter?",
          es: "¿El café es dulce o amargo?",
          de: "Ist Kaffee süß oder bitter?",
          nl: "Is koffie zoet of bitter?"
        },
        options: [
          { en: "Usually bitter, but people add sugar to make it sweet", es: "Generalmente amargo, pero la gente añade azúcar para hacerlo dulce", de: "Normalerweise bitter, aber Leute fügen Zucker hinzu, um es süß zu machen", nl: "Meestal bitter, maar mensen voegen suiker toe om het zoet te maken" },
          { en: "Always very sweet", es: "Siempre muy dulce", de: "Immer sehr süß", nl: "Altijd heel zoet" },
          { en: "It tastes like chocolate", es: "Sabe a chocolate", de: "Es schmeckt wie Schokolade", nl: "Het smaakt naar chocolade" },
          { en: "It has no taste", es: "No tiene sabor", de: "Es hat keinen Geschmack", nl: "Het heeft geen smaak" }
        ],
        correct: 0,
        explanation: {
          en: "Coffee naturally has a bitter taste, which is why many people like to add sugar or honey to make it sweeter and easier to drink.",
          es: "El café naturalmente tiene un sabor amargo, por eso a mucha gente le gusta añadir azúcar o miel para hacerlo más dulce y fácil de beber.",
          de: "Kaffee hat von Natur aus einen bitteren Geschmack, deshalb fügen viele Leute gerne Zucker oder Honig hinzu, um ihn süßer und leichter zu trinken zu machen.",
          nl: "Koffie heeft van nature een bittere smaak, daarom voegen veel mensen graag suiker of honing toe om het zoeter en makkelijker te drinken te maken."
        }
      },
      {
        question: {
          en: "What color are coffee beans before they are roasted?",
          es: "¿De qué color son los granos de café antes de ser tostados?",
          de: "Welche Farbe haben Kaffeebohnen, bevor sie geröstet werden?",
          nl: "Welke kleur hebben koffiebonen voordat ze worden gebrand?"
        },
        options: [
          { en: "Green", es: "Verde", de: "Grün", nl: "Groen" },
          { en: "Brown", es: "Marrón", de: "Braun", nl: "Bruin" },
          { en: "Black", es: "Negro", de: "Schwarz", nl: "Zwart" },
          { en: "Yellow", es: "Amarillo", de: "Gelb", nl: "Geel" }
        ],
        correct: 0,
        explanation: {
          en: "Coffee beans are green before they are roasted! The roasting process turns them brown and gives them that delicious coffee smell and flavor.",
          es: "¡Los granos de café son verdes antes de ser tostados! El proceso de tostado los vuelve marrones y les da ese delicioso olor y sabor a café.",
          de: "Kaffeebohnen sind grün, bevor sie geröstet werden! Der Röstprozess macht sie braun und gibt ihnen diesen köstlichen Kaffeegeruch und -geschmack.",
          nl: "Koffiebonen zijn groen voordat ze worden gebrand! Het brandproces maakt ze bruin en geeft ze die heerlijke koffiegeur en smaak."
        }
      },
      {
        question: {
          en: "Can you make pictures or designs in coffee?",
          es: "¿Puedes hacer dibujos o diseños en el café?",
          de: "Kann man Bilder oder Designs in Kaffee machen?",
          nl: "Kun je plaatjes of ontwerpen maken in koffie?"
        },
        options: [
          { en: "Yes, with milk foam on top", es: "Sí, con espuma de leche encima", de: "Ja, mit Milchschaum obendrauf", nl: "Ja, met melkschuim erop" },
          { en: "No, that's impossible", es: "No, eso es imposible", de: "Nein, das ist unmöglich", nl: "Nee, dat is onmogelijk" },
          { en: "Only with food coloring", es: "Solo con colorante alimentario", de: "Nur mit Lebensmittelfarbe", nl: "Alleen met voedselkleuring" },
          { en: "Only in tea, not coffee", es: "Solo en té, no en café", de: "Nur in Tee, nicht in Kaffee", nl: "Alleen in thee, niet in koffie" }
        ],
        correct: 0,
        explanation: {
          en: "Baristas can make beautiful pictures and designs on coffee using steamed milk foam. This art is called 'latte art' and can include hearts, leaves, and other pretty patterns!",
          es: "Los baristas pueden hacer hermosos dibujos y diseños en el café usando espuma de leche al vapor. Este arte se llama 'arte latte' y puede incluir corazones, hojas y otros patrones bonitos!",
          de: "Baristas können schöne Bilder und Designs auf Kaffee mit aufgeschäumter Milch machen. Diese Kunst heißt 'Latte Art' und kann Herzen, Blätter und andere hübsche Muster umfassen!",
          nl: "Barista's kunnen mooie plaatjes en ontwerpen op koffie maken met gestoomde melkschuim. Deze kunst heet 'latte art' en kan harten, blaadjes en andere mooie patronen bevatten!"
        }
      },
      {
        question: {
          en: "What do coffee shops sell besides coffee?",
          es: "¿Qué venden las cafeterías además de café?",
          de: "Was verkaufen Cafés außer Kaffee?",
          nl: "Wat verkopen coffeeshops naast koffie?"
        },
        options: [
          { en: "Cakes, cookies, and other treats", es: "Pasteles, galletas y otras golosinas", de: "Kuchen, Kekse und andere Leckereien", nl: "Taarten, koekjes en andere lekkernijen" },
          { en: "Only coffee, nothing else", es: "Solo café, nada más", de: "Nur Kaffee, nichts anderes", nl: "Alleen koffie, niets anders" },
          { en: "Toys and games", es: "Juguetes y juegos", de: "Spielzeug und Spiele", nl: "Speelgoed en spelletjes" },
          { en: "Clothes and shoes", es: "Ropa y zapatos", de: "Kleidung und Schuhe", nl: "Kleding en schoenen" }
        ],
        correct: 0,
        explanation: {
          en: "Coffee shops often sell delicious treats like cakes, cookies, muffins, and sandwiches to go along with coffee. These tasty snacks are perfect with a warm cup of coffee!",
          es: "Las cafeterías a menudo venden delicias como pasteles, galletas, muffins y sándwiches para acompañar el café. ¡Estos sabrosos bocadillos son perfectos con una taza caliente de café!",
          de: "Cafés verkaufen oft leckere Leckereien wie Kuchen, Kekse, Muffins und Sandwiches zum Kaffee. Diese köstlichen Snacks passen perfekt zu einer warmen Tasse Kaffee!",
          nl: "Coffeeshops verkopen vaak heerlijke lekkernijen zoals taarten, koekjes, muffins en broodjes om bij koffie te eten. Deze lekkere snacks zijn perfect bij een warme kop koffie!"
        }
      },
      {
        question: {
          en: "How does coffee make people feel?",
          es: "¿Cómo hace sentir el café a las personas?",
          de: "Wie lässt Kaffee Menschen fühlen?",
          nl: "Hoe laat koffie mensen zich voelen?"
        },
        options: [
          { en: "More awake and energetic", es: "Más despiertos y enérgicos", de: "Wacher und energiegeladener", nl: "Wakkerder en energieker" },
          { en: "Very sleepy", es: "Muy somnolientos", de: "Sehr schläfrig", nl: "Heel slaperig" },
          { en: "Cold and shivery", es: "Fríos y temblorosos", de: "Kalt und zitternd", nl: "Koud en rillerig" },
          { en: "Sad and unhappy", es: "Tristes e infelices", de: "Traurig und unglücklich", nl: "Verdrietig en ongelukkig" }
        ],
        correct: 0,
        explanation: {
          en: "Coffee contains caffeine, which helps people feel more awake, alert, and energetic. That's why many people drink it in the morning to help them start their day!",
          es: "El café contiene cafeína, que ayuda a las personas a sentirse más despiertas, alertas y enérgicas. ¡Por eso mucha gente lo toma por la mañana para ayudarles a comenzar su día!",
          de: "Kaffee enthält Koffein, das Menschen hilft, sich wacher, aufmerksamer und energiegeladener zu fühlen. Deshalb trinken viele Leute ihn am Morgen, um ihnen zu helfen, ihren Tag zu beginnen!",
          nl: "Koffie bevat cafeïne, wat mensen helpt zich wakkerder, alerter en energieker te voelen. Daarom drinken veel mensen het 's ochtends om hen te helpen hun dag te beginnen!"
        }
      },
      {
        question: {
          en: "What shape are most coffee beans?",
          es: "¿Qué forma tienen la mayoría de los granos de café?",
          de: "Welche Form haben die meisten Kaffeebohnen?",
          nl: "Welke vorm hebben de meeste koffiebonen?"
        },
        options: [
          { en: "Oval with a line down the middle", es: "Ovalados con una línea en el medio", de: "Oval mit einer Linie in der Mitte", nl: "Ovaal met een lijn in het midden" },
          { en: "Perfectly round like a ball", es: "Perfectamente redondos como una pelota", de: "Perfekt rund wie ein Ball", nl: "Perfect rond zoals een bal" },
          { en: "Square like a box", es: "Cuadrados como una caja", de: "Quadratisch wie eine Box", nl: "Vierkant zoals een doos" },
          { en: "Triangle shaped", es: "En forma de triángulo", de: "Dreieckig geformt", nl: "Driehoekig gevormd" }
        ],
        correct: 0,
        explanation: {
          en: "Coffee beans are oval-shaped with a line or groove down the middle where the two halves of the bean meet. This makes them look a bit like tiny footballs!",
          es: "Los granos de café tienen forma ovalada con una línea o surco en el medio donde se encuentran las dos mitades del grano. ¡Esto los hace parecer pequeños balones de fútbol!",
          de: "Kaffeebohnen sind oval geformt mit einer Linie oder Rille in der Mitte, wo sich die beiden Hälften der Bohne treffen. Dies lässt sie wie kleine Fußbälle aussehen!",
          nl: "Koffiebonen zijn ovaal gevormd met een lijn of groef in het midden waar de twee helften van de boon elkaar ontmoeten. Dit laat ze eruit zien als kleine voetballen!"
        }
      },
      {
        question: {
          en: "Can coffee be made without a machine?",
          es: "¿Se puede hacer café sin una máquina?",
          de: "Kann Kaffee ohne Maschine gemacht werden?",
          nl: "Kan koffie worden gemaakt zonder machine?"
        },
        options: [
          { en: "Yes, by mixing coffee with hot water", es: "Sí, mezclando café con agua caliente", de: "Ja, indem man Kaffee mit heißem Wasser mischt", nl: "Ja, door koffie te mengen met heet water" },
          { en: "No, you always need a machine", es: "No, siempre necesitas una máquina", de: "Nein, man braucht immer eine Maschine", nl: "Nee, je hebt altijd een machine nodig" },
          { en: "Only robots can make coffee", es: "Solo los robots pueden hacer café", de: "Nur Roboter können Kaffee machen", nl: "Alleen robots kunnen koffie maken" },
          { en: "Coffee grows already made", es: "El café crece ya hecho", de: "Kaffee wächst schon fertig", nl: "Koffie groeit al klaar" }
        ],
        correct: 0,
        explanation: {
          en: "You can make simple coffee by just adding hot water to coffee grounds. This is how people made coffee long ago before coffee machines were invented!",
          es: "Puedes hacer café simple simplemente añadiendo agua caliente al café molido. ¡Así es como la gente hacía café hace mucho tiempo antes de que se inventaran las cafeteras!",
          de: "Man kann einfachen Kaffee machen, indem man einfach heißes Wasser zu Kaffeepulver hinzufügt. So machten die Leute Kaffee vor langer Zeit, bevor Kaffeemaschinen erfunden wurden!",
          nl: "Je kunt eenvoudige koffie maken door gewoon heet water toe te voegen aan koffiepoeder. Zo maakten mensen lang geleden koffie voordat koffiezetapparaten werden uitgevonden!"
        }
      },
      {
        question: {
          en: "What do people often do while drinking coffee?",
          es: "¿Qué suele hacer la gente mientras toma café?",
          de: "Was machen Leute oft beim Kaffeetrinken?",
          nl: "Wat doen mensen vaak tijdens het koffiedrinken?"
        },
        options: [
          { en: "Talk with friends, read, or work", es: "Hablar con amigos, leer o trabajar", de: "Mit Freunden reden, lesen oder arbeiten", nl: "Praten met vrienden, lezen of werken" },
          { en: "Run very fast", es: "Correr muy rápido", de: "Sehr schnell rennen", nl: "Heel snel rennen" },
          { en: "Sleep", es: "Dormir", de: "Schlafen", nl: "Slapen" },
          { en: "Swim", es: "Nadar", de: "Schwimmen", nl: "Zwemmen" }
        ],
        correct: 0,
        explanation: {
          en: "Coffee is often enjoyed during social times with friends, while reading a book, working, or just relaxing. Coffee shops are popular places where people meet and spend time together!",
          es: "El café a menudo se disfruta durante momentos sociales con amigos, mientras se lee un libro, se trabaja o simplemente se relaja. ¡Las cafeterías son lugares populares donde la gente se reúne y pasa tiempo juntos!",
          de: "Kaffee wird oft in geselligen Momenten mit Freunden genossen, beim Lesen eines Buches, beim Arbeiten oder einfach beim Entspannen. Cafés sind beliebte Orte, wo sich Menschen treffen und Zeit miteinander verbringen!",
          nl: "Koffie wordt vaak genoten tijdens sociale momenten met vrienden, tijdens het lezen van een boek, werken of gewoon ontspannen. Coffeeshops zijn populaire plekken waar mensen elkaar ontmoeten en tijd samen doorbrengen!"
        }
      },
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();
