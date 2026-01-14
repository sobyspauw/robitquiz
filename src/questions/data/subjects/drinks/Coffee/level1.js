// Coffee Quiz - Level 1
(function() {
  const level1 = {
    name: {
          "en": "Coffee Level 1",
          "es": "Café Nivel 1",
          "de": "Kaffee Stufe 1",
          "nl": "Koffie Level 1"
    },
    questions: [
      {
        question: {
                  "en": "What color is coffee usually?",
                  "es": "¿De qué color es normalmente el café?",
                  "de": "Welche Farbe hat Kaffee normalerweise?",
                  "nl": "Welke kleur heeft koffie meestal?"
        },
        options: [
        {
                  "en": "Green",
                  "es": "Verde",
                  "de": "Grün",
                  "nl": "Groen"
        },
        {
                  "en": "Purple",
                  "es": "Morado",
                  "de": "Lila",
                  "nl": "Paars"
        },
        {
                  "en": "Brown",
                  "es": "Marrón",
                  "de": "Braun",
                  "nl": "Bruin"
        },
        {
                  "en": "Blue",
                  "es": "Azul",
                  "de": "Blau",
                  "nl": "Blauw"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Coffee is brown because the coffee beans are roasted, which turns them from green to brown.",
                  "es": "El café es marrón porque los granos de café se tuestan, lo que los convierte de verde a marrón.",
                  "de": "Kaffee ist braun, weil die Kaffeebohnen geröstet werden, wodurch sie von grün zu braun werden.",
                  "nl": "Koffie is bruin omdat de koffiebonen worden gebrand, waardoor ze van groen naar bruin worden."
        }
      },
      {
        question: {
                  "en": "Is coffee a hot or cold drink?",
                  "es": "¿El café es una bebida caliente o fría?",
                  "de": "Ist Kaffee ein heißes oder kaltes Getränk?",
                  "nl": "Is koffie een warm of koud drankje?"
        },
        options: [
        {
                  "en": "Only hot",
                  "es": "Solo caliente",
                  "de": "Nur heiß",
                  "nl": "Alleen warm"
        },
        {
                  "en": "It can be both hot or cold",
                  "es": "Puede ser caliente o frío",
                  "de": "Es kann beides sein, heiß oder kalt",
                  "nl": "Het kan beide, warm of koud"
        },
        {
                  "en": "Only cold",
                  "es": "Solo frío",
                  "de": "Nur kalt",
                  "nl": "Alleen koud"
        },
        {
                  "en": "Neither hot nor cold",
                  "es": "Ni caliente ni frío",
                  "de": "Weder heiß noch kalt",
                  "nl": "Noch warm noch koud"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Coffee can be served hot or cold. Hot coffee is the most common, but iced coffee is also very popular, especially in summer!",
                  "es": "El café se puede servir caliente o frío. El café caliente es el más común, pero el café helado también es muy popular, ¡especialmente en verano!",
                  "de": "Kaffee kann heiß oder kalt serviert werden. Heißer Kaffee ist am häufigsten, aber Eiskaffee ist auch sehr beliebt, besonders im Sommer!",
                  "nl": "Koffie kan warm of koud worden geserveerd. Warme koffie is het meest gebruikelijk, maar ijskoffie is ook erg populair, vooral in de zomer!"
        }
      },
      {
        question: {
                  "en": "What does coffee come from?",
                  "es": "¿De dónde viene el café?",
                  "de": "Woher kommt Kaffee?",
                  "nl": "Waar komt koffie vandaan?"
        },
        options: [
        {
                  "en": "Coffee beans",
                  "es": "Granos de café",
                  "de": "Kaffeebohnen",
                  "nl": "Koffiebonen"
        },
        {
                  "en": "Tea leaves",
                  "es": "Hojas de té",
                  "de": "Teeblätter",
                  "nl": "Theebladeren"
        },
        {
                  "en": "Orange juice",
                  "es": "Jugo de naranja",
                  "de": "Orangensaft",
                  "nl": "Sinaasappelsap"
        },
        {
                  "en": "Milk",
                  "es": "Leche",
                  "de": "Milch",
                  "nl": "Melk"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Coffee is made from coffee beans, which grow on coffee plants. The beans are roasted and then ground up to make coffee.",
                  "es": "El café se hace de granos de café, que crecen en plantas de café. Los granos se tuestan y luego se muelen para hacer café.",
                  "de": "Kaffee wird aus Kaffeebohnen hergestellt, die auf Kaffeepflanzen wachsen. Die Bohnen werden geröstet und dann gemahlen, um Kaffee zu machen.",
                  "nl": "Koffie wordt gemaakt van koffiebonen, die groeien aan koffieplanten. De bonen worden gebrand en dan gemalen om koffie te maken."
        }
      },
      {
        question: {
                  "en": "Do children usually drink coffee?",
                  "es": "¿Los niños suelen tomar café?",
                  "de": "Trinken Kinder normalerweise Kaffee?",
                  "nl": "Drinken kinderen meestal koffie?"
        },
        options: [
        {
                  "en": "Yes, everyone drinks coffee",
                  "es": "Sí, todos toman café",
                  "de": "Ja, jeder trinkt Kaffee",
                  "nl": "Ja, iedereen drinkt koffie"
        },
        {
                  "en": "No, usually adults drink coffee",
                  "es": "No, normalmente los adultos toman café",
                  "de": "Nein, normalerweise trinken Erwachsene Kaffee",
                  "nl": "Nee, meestal drinken volwassenen koffie"
        },
        {
                  "en": "Only babies drink coffee",
                  "es": "Solo los bebés toman café",
                  "de": "Nur Babys trinken Kaffee",
                  "nl": "Alleen baby's drinken koffie"
        },
        {
                  "en": "Coffee is only for cats",
                  "es": "El café es solo para gatos",
                  "de": "Kaffee ist nur für Katzen",
                  "nl": "Koffie is alleen voor katten"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Coffee is usually a drink for adults because it contains caffeine, which can make you feel more awake. Children usually drink milk, juice, or water instead.",
                  "es": "El café suele ser una bebida para adultos porque contiene cafeína, que puede hacerte sentir más despierto. Los niños generalmente toman leche, jugo o agua en su lugar.",
                  "de": "Kaffee ist normalerweise ein Getränk für Erwachsene, weil er Koffein enthält, das dich wacher fühlen lässt. Kinder trinken normalerweise stattdessen Milch, Saft oder Wasser.",
                  "nl": "Koffie is meestal een drankje voor volwassenen omdat het cafeïne bevat, wat je wakkerder kan maken. Kinderen drinken meestal melk, sap of water in plaats daarvan."
        }
      },
      {
        question: {
                  "en": "What do many people add to their coffee?",
                  "es": "¿Qué añade mucha gente a su café?",
                  "de": "Was geben viele Leute in ihren Kaffee?",
                  "nl": "Wat voegen veel mensen toe aan hun koffie?"
        },
        options: [
        {
                  "en": "Ketchup",
                  "es": "Ketchup",
                  "de": "Ketchup",
                  "nl": "Ketchup"
        },
        {
                  "en": "Ice cream and cake",
                  "es": "Helado y pastel",
                  "de": "Eis und Kuchen",
                  "nl": "IJs en taart"
        },
        {
                  "en": "Milk and sugar",
                  "es": "Leche y azúcar",
                  "de": "Milch und Zucker",
                  "nl": "Melk en suiker"
        },
        {
                  "en": "Salt and pepper",
                  "es": "Sal y pimienta",
                  "de": "Salz und Pfeffer",
                  "nl": "Zout en peper"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Many people like to add milk to make coffee lighter and creamier, and sugar to make it sweeter. Some people drink it black without anything added.",
                  "es": "A mucha gente le gusta añadir leche para hacer el café más claro y cremoso, y azúcar para hacerlo más dulce. Algunas personas lo toman negro sin añadir nada.",
                  "de": "Viele Leute geben gerne Milch hinzu, um Kaffee heller und cremiger zu machen, und Zucker, um ihn süßer zu machen. Manche Leute trinken ihn schwarz ohne Zusätze.",
                  "nl": "Veel mensen voegen graag melk toe om koffie lichter en romiger te maken, en suiker om het zoeter te maken. Sommige mensen drinken het zwart zonder iets toegevoegd."
        }
      },
      {
        question: {
                  "en": "When do most people drink coffee?",
                  "es": "¿Cuándo toma la mayoría de la gente café?",
                  "de": "Wann trinken die meisten Leute Kaffee?",
                  "nl": "Wanneer drinken de meeste mensen koffie?"
        },
        options: [
        {
                  "en": "During sleep",
                  "es": "Durante el sueño",
                  "de": "Während des Schlafens",
                  "nl": "Tijdens het slapen"
        },
        {
                  "en": "Only at midnight",
                  "es": "Solo a medianoche",
                  "de": "Nur um Mitternacht",
                  "nl": "Alleen om middernacht"
        },
        {
                  "en": "In the morning",
                  "es": "Por la mañana",
                  "de": "Am Morgen",
                  "nl": "'s Ochtends"
        },
        {
                  "en": "Never",
                  "es": "Nunca",
                  "de": "Niemals",
                  "nl": "Nooit"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Most people drink coffee in the morning to help them wake up and start their day. Coffee helps people feel more alert and energetic.",
                  "es": "La mayoría de la gente toma café por la mañana para ayudarles a despertarse y comenzar su día. El café ayuda a las personas a sentirse más alertas y enérgicas.",
                  "de": "Die meisten Leute trinken Kaffee am Morgen, um ihnen beim Aufwachen zu helfen und ihren Tag zu beginnen. Kaffee hilft Menschen, sich wacher und energiegeladener zu fühlen.",
                  "nl": "De meeste mensen drinken koffie 's ochtends om hen te helpen wakker te worden en hun dag te beginnen. Koffie helpt mensen zich alerter en energieker te voelen."
        }
      },
      {
        question: {
                  "en": "What does coffee smell like?",
                  "es": "¿A qué huele el café?",
                  "de": "Wie riecht Kaffee?",
                  "nl": "Hoe ruikt koffie?"
        },
        options: [
        {
                  "en": "Like fish",
                  "es": "Como pescado",
                  "de": "Wie Fisch",
                  "nl": "Naar vis"
        },
        {
                  "en": "Strong and nice",
                  "es": "Fuerte y agradable",
                  "de": "Stark und angenehm",
                  "nl": "Sterk en lekker"
        },
        {
                  "en": "Like flowers",
                  "es": "Como flores",
                  "de": "Wie Blumen",
                  "nl": "Naar bloemen"
        },
        {
                  "en": "Like nothing",
                  "es": "Como nada",
                  "de": "Nach nichts",
                  "nl": "Naar niets"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Coffee has a strong, pleasant smell that many people love. The smell of fresh coffee in the morning is very popular!",
                  "es": "El café tiene un olor fuerte y agradable que a mucha gente le encanta. ¡El olor del café fresco por la mañana es muy popular!",
                  "de": "Kaffee hat einen starken, angenehmen Geruch, den viele Menschen lieben. Der Geruch von frischem Kaffee am Morgen ist sehr beliebt!",
                  "nl": "Koffie heeft een sterke, aangename geur waar veel mensen van houden. De geur van verse koffie in de ochtend is erg populair!"
        }
      },
      {
        question: {
                  "en": "What is a cappuccino?",
                  "es": "¿Qué es un capuchino?",
                  "de": "Was ist ein Cappuccino?",
                  "nl": "Wat is een cappuccino?"
        },
        options: [
        {
                  "en": "A type of cake",
                  "es": "Un tipo de pastel",
                  "de": "Eine Art Kuchen",
                  "nl": "Een soort taart"
        },
        {
                  "en": "A sandwich",
                  "es": "Un sándwich",
                  "de": "Ein Sandwich",
                  "nl": "Een broodje"
        },
        {
                  "en": "Orange juice",
                  "es": "Jugo de naranja",
                  "de": "Orangensaft",
                  "nl": "Sinaasappelsap"
        },
        {
                  "en": "Coffee with foamy milk",
                  "es": "Café con leche espumosa",
                  "de": "Kaffee mit schaumiger Milch",
                  "nl": "Koffie met schuimige melk"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A cappuccino is a special kind of coffee drink made with espresso and steamed milk topped with foam. The foam on top looks like a white cloud!",
                  "es": "Un capuchino es un tipo especial de café hecho con espresso y leche al vapor cubierta con espuma. ¡La espuma en la parte superior parece una nube blanca!",
                  "de": "Ein Cappuccino ist eine besondere Art von Kaffeegetränk aus Espresso und aufgeschäumter Milch mit Schaum obendrauf. Der Schaum oben sieht aus wie eine weiße Wolke!",
                  "nl": "Een cappuccino is een speciaal soort koffiedrankje gemaakt met espresso en gestoomde melk bedekt met schuim. Het schuim bovenop lijkt op een witte wolk!"
        }
      },
      {
        question: {
                  "en": "Where do coffee plants grow?",
                  "es": "¿Dónde crecen las plantas de café?",
                  "de": "Wo wachsen Kaffeepflanzen?",
                  "nl": "Waar groeien koffieplanten?"
        },
        options: [
        {
                  "en": "Under the ocean",
                  "es": "Bajo el océano",
                  "de": "Unter dem Ozean",
                  "nl": "Onder de oceaan"
        },
        {
                  "en": "In outer space",
                  "es": "En el espacio exterior",
                  "de": "Im Weltraum",
                  "nl": "In de ruimte"
        },
        {
                  "en": "In warm countries",
                  "es": "En países cálidos",
                  "de": "In warmen Ländern",
                  "nl": "In warme landen"
        },
        {
                  "en": "At the North Pole",
                  "es": "En el Polo Norte",
                  "de": "Am Nordpol",
                  "nl": "Op de Noordpool"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Coffee plants need warm weather and rain to grow well, so they grow in countries near the equator like Brazil, Colombia, and Ethiopia.",
                  "es": "Las plantas de café necesitan clima cálido y lluvia para crecer bien, por lo que crecen en países cerca del ecuador como Brasil, Colombia y Etiopía.",
                  "de": "Kaffeepflanzen brauchen warmes Wetter und Regen, um gut zu wachsen, deshalb wachsen sie in Ländern in der Nähe des Äquators wie Brasilien, Kolumbien und Äthiopien.",
                  "nl": "Koffieplanten hebben warm weer en regen nodig om goed te groeien, dus groeien ze in landen bij de evenaar zoals Brazilië, Colombia en Ethiopië."
        }
      },
      {
        question: {
                  "en": "What is espresso?",
                  "es": "¿Qué es el espresso?",
                  "de": "Was ist Espresso?",
                  "nl": "Wat is espresso?"
        },
        options: [
        {
                  "en": "Very strong, small coffee",
                  "es": "Café muy fuerte y pequeño",
                  "de": "Sehr starker, kleiner Kaffee",
                  "nl": "Zeer sterke, kleine koffie"
        },
        {
                  "en": "Chocolate milk",
                  "es": "Leche con chocolate",
                  "de": "Schokoladenmilch",
                  "nl": "Chocolademelk"
        },
        {
                  "en": "A big glass of water",
                  "es": "Un vaso grande de agua",
                  "de": "Ein großes Glas Wasser",
                  "nl": "Een groot glas water"
        },
        {
                  "en": "A type of train",
                  "es": "Un tipo de tren",
                  "de": "Eine Art Zug",
                  "nl": "Een soort trein"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Espresso is a very strong coffee served in a tiny cup. It's made by forcing hot water through finely ground coffee beans very quickly.",
                  "es": "El espresso es un café muy fuerte servido en una taza pequeña. Se hace forzando agua caliente a través de granos de café finamente molidos muy rápidamente.",
                  "de": "Espresso ist ein sehr starker Kaffee, der in einer winzigen Tasse serviert wird. Er wird hergestellt, indem heißes Wasser sehr schnell durch fein gemahlene Kaffeebohnen gepresst wird.",
                  "nl": "Espresso is een zeer sterke koffie geserveerd in een klein kopje. Het wordt gemaakt door heet water heel snel door fijngemalen koffiebonen te persen."
        }
      },
      {
        question: {
                  "en": "Where do you usually drink coffee?",
                  "es": "¿Dónde sueles tomar café?",
                  "de": "Wo trinkt man normalerweise Kaffee?",
                  "nl": "Waar drink je meestal koffie?"
        },
        options: [
        {
                  "en": "In a bowl",
                  "es": "En un tazón",
                  "de": "In einer Schüssel",
                  "nl": "In een kom"
        },
        {
                  "en": "On a plate",
                  "es": "En un plato",
                  "de": "Auf einem Teller",
                  "nl": "Op een bord"
        },
        {
                  "en": "In a bottle",
                  "es": "En una botella",
                  "de": "In einer Flasche",
                  "nl": "In een fles"
        },
        {
                  "en": "In a cup or mug",
                  "es": "En una taza",
                  "de": "In einer Tasse",
                  "nl": "In een kopje of mok"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Coffee is usually served in a cup or mug. This makes it easy to hold and drink while it's still warm!",
                  "es": "El café generalmente se sirve en una taza. ¡Esto hace que sea fácil de sostener y beber mientras aún está caliente!",
                  "de": "Kaffee wird normalerweise in einer Tasse serviert. Das macht es einfach zu halten und zu trinken, während er noch warm ist!",
                  "nl": "Koffie wordt meestal geserveerd in een kopje of mok. Dit maakt het gemakkelijk om vast te houden en te drinken terwijl het nog warm is!"
        }
      },
      {
        question: {
                  "en": "What machine is often used to make coffee at home?",
                  "es": "¿Qué máquina se usa a menudo para hacer café en casa?",
                  "de": "Welche Maschine wird oft verwendet, um zu Hause Kaffee zu machen?",
                  "nl": "Welke machine wordt vaak gebruikt om thuis koffie te maken?"
        },
        options: [
        {
                  "en": "A vacuum cleaner",
                  "es": "Una aspiradora",
                  "de": "Ein Staubsauger",
                  "nl": "Een stofzuiger"
        },
        {
                  "en": "A washing machine",
                  "es": "Una lavadora",
                  "de": "Eine Waschmaschine",
                  "nl": "Een wasmachine"
        },
        {
                  "en": "A blender",
                  "es": "Una licuadora",
                  "de": "Ein Mixer",
                  "nl": "Een blender"
        },
        {
                  "en": "A coffee maker",
                  "es": "Una cafetera",
                  "de": "Eine Kaffeemaschine",
                  "nl": "Een koffiezetapparaat"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A coffee maker is a special machine that heats water and passes it through coffee grounds to make coffee.",
                  "es": "Una cafetera es una máquina especial que calienta el agua y la pasa a través del café molido para hacer café.",
                  "de": "Eine Kaffeemaschine ist ein spezielles Gerät, das Wasser erhitzt und durch Kaffeepulver leitet, um Kaffee zu machen.",
                  "nl": "Een koffiezetapparaat is een speciale machine die water verwarmt en door koffiepoeder laat lopen om koffie te maken."
        }
      },
      {
        question: {
                  "en": "Is coffee sweet or bitter?",
                  "es": "¿El café es dulce o amargo?",
                  "de": "Ist Kaffee süß oder bitter?",
                  "nl": "Is koffie zoet of bitter?"
        },
        options: [
        {
                  "en": "It tastes like chocolate",
                  "es": "Sabe a chocolate",
                  "de": "Es schmeckt wie Schokolade",
                  "nl": "Het smaakt naar chocolade"
        },
        {
                  "en": "Usually bitter, but people add sugar to make it sweet",
                  "es": "Generalmente amargo, pero la gente añade azúcar para hacerlo dulce",
                  "de": "Normalerweise bitter, aber Leute fügen Zucker hinzu, um es süß zu machen",
                  "nl": "Meestal bitter, maar mensen voegen suiker toe om het zoet te maken"
        },
        {
                  "en": "Always very sweet",
                  "es": "Siempre muy dulce",
                  "de": "Immer sehr süß",
                  "nl": "Altijd heel zoet"
        },
        {
                  "en": "It has no taste",
                  "es": "No tiene sabor",
                  "de": "Es hat keinen Geschmack",
                  "nl": "Het heeft geen smaak"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Coffee naturally has a bitter taste, which is why many people like to add sugar or honey to make it sweeter and easier to drink.",
                  "es": "El café naturalmente tiene un sabor amargo, por eso a mucha gente le gusta añadir azúcar o miel para hacerlo más dulce y fácil de beber.",
                  "de": "Kaffee hat von Natur aus einen bitteren Geschmack, deshalb fügen viele Leute gerne Zucker oder Honig hinzu, um ihn süßer und leichter zu trinken zu machen.",
                  "nl": "Koffie heeft van nature een bittere smaak, daarom voegen veel mensen graag suiker of honing toe om het zoeter en makkelijker te drinken te maken."
        }
      },
      {
        question: {
                  "en": "What color are coffee beans before they are roasted?",
                  "es": "¿De qué color son los granos de café antes de ser tostados?",
                  "de": "Welche Farbe haben Kaffeebohnen, bevor sie geröstet werden?",
                  "nl": "Welke kleur hebben koffiebonen voordat ze worden gebrand?"
        },
        options: [
        {
                  "en": "Brown",
                  "es": "Marrón",
                  "de": "Braun",
                  "nl": "Bruin"
        },
        {
                  "en": "Black",
                  "es": "Negro",
                  "de": "Schwarz",
                  "nl": "Zwart"
        },
        {
                  "en": "Yellow",
                  "es": "Amarillo",
                  "de": "Gelb",
                  "nl": "Geel"
        },
        {
                  "en": "Green",
                  "es": "Verde",
                  "de": "Grün",
                  "nl": "Groen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Coffee beans are green before they are roasted! The roasting process turns them brown and gives them that delicious coffee smell and flavor.",
                  "es": "¡Los granos de café son verdes antes de ser tostados! El proceso de tostado los vuelve marrones y les da ese delicioso olor y sabor a café.",
                  "de": "Kaffeebohnen sind grün, bevor sie geröstet werden! Der Röstprozess macht sie braun und gibt ihnen diesen köstlichen Kaffeegeruch und -geschmack.",
                  "nl": "Koffiebonen zijn groen voordat ze worden gebrand! Het brandproces maakt ze bruin en geeft ze die heerlijke koffiegeur en smaak."
        }
      },
      {
        question: {
                  "en": "Can you make pictures or designs in coffee?",
                  "es": "¿Puedes hacer dibujos o diseños en el café?",
                  "de": "Kann man Bilder oder Designs in Kaffee machen?",
                  "nl": "Kun je plaatjes of ontwerpen maken in koffie?"
        },
        options: [
        {
                  "en": "Only with food coloring",
                  "es": "Solo con colorante alimentario",
                  "de": "Nur mit Lebensmittelfarbe",
                  "nl": "Alleen met voedselkleuring"
        },
        {
                  "en": "Yes, with milk foam on top",
                  "es": "Sí, con espuma de leche encima",
                  "de": "Ja, mit Milchschaum obendrauf",
                  "nl": "Ja, met melkschuim erop"
        },
        {
                  "en": "Only in tea, not coffee",
                  "es": "Solo en té, no en café",
                  "de": "Nur in Tee, nicht in Kaffee",
                  "nl": "Alleen in thee, niet in koffie"
        },
        {
                  "en": "No, that's impossible",
                  "es": "No, eso es imposible",
                  "de": "Nein, das ist unmöglich",
                  "nl": "Nee, dat is onmogelijk"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Baristas can make beautiful pictures and designs on coffee using steamed milk foam. This art is called 'latte art' and can include hearts, leaves, and other pretty patterns!",
                  "es": "Los baristas pueden hacer hermosos dibujos y diseños en el café usando espuma de leche al vapor. Este arte se llama 'arte latte' y puede incluir corazones, hojas y otros patrones bonitos!",
                  "de": "Baristas können schöne Bilder und Designs auf Kaffee mit aufgeschäumter Milch machen. Diese Kunst heißt 'Latte Art' und kann Herzen, Blätter und andere hübsche Muster umfassen!",
                  "nl": "Barista's kunnen mooie plaatjes en ontwerpen op koffie maken met gestoomde melkschuim. Deze kunst heet 'latte art' en kan harten, blaadjes en andere mooie patronen bevatten!"
        }
      },
      {
        question: {
                  "en": "What do coffee shops sell besides coffee?",
                  "es": "¿Qué venden las cafeterías además de café?",
                  "de": "Was verkaufen Cafés außer Kaffee?",
                  "nl": "Wat verkopen coffeeshops naast koffie?"
        },
        options: [
        {
                  "en": "Toys and games",
                  "es": "Juguetes y juegos",
                  "de": "Spielzeug und Spiele",
                  "nl": "Speelgoed en spelletjes"
        },
        {
                  "en": "Only coffee, nothing else",
                  "es": "Solo café, nada más",
                  "de": "Nur Kaffee, nichts anderes",
                  "nl": "Alleen koffie, niets anders"
        },
        {
                  "en": "Clothes and shoes",
                  "es": "Ropa y zapatos",
                  "de": "Kleidung und Schuhe",
                  "nl": "Kleding en schoenen"
        },
        {
                  "en": "Cakes, cookies, and other treats",
                  "es": "Pasteles, galletas y otras golosinas",
                  "de": "Kuchen, Kekse und andere Leckereien",
                  "nl": "Taarten, koekjes en andere lekkernijen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Coffee shops often sell delicious treats like cakes, cookies, muffins, and sandwiches to go along with coffee. These tasty snacks are perfect with a warm cup of coffee!",
                  "es": "Las cafeterías a menudo venden delicias como pasteles, galletas, muffins y sándwiches para acompañar el café. ¡Estos sabrosos bocadillos son perfectos con una taza caliente de café!",
                  "de": "Cafés verkaufen oft leckere Leckereien wie Kuchen, Kekse, Muffins und Sandwiches zum Kaffee. Diese köstlichen Snacks passen perfekt zu einer warmen Tasse Kaffee!",
                  "nl": "Coffeeshops verkopen vaak heerlijke lekkernijen zoals taarten, koekjes, muffins en broodjes om bij koffie te eten. Deze lekkere snacks zijn perfect bij een warme kop koffie!"
        }
      },
      {
        question: {
                  "en": "How does coffee make people feel?",
                  "es": "¿Cómo hace sentir el café a las personas?",
                  "de": "Wie lässt Kaffee Menschen fühlen?",
                  "nl": "Hoe laat koffie mensen zich voelen?"
        },
        options: [
        {
                  "en": "More awake and energetic",
                  "es": "Más despiertos y enérgicos",
                  "de": "Wacher und energiegeladener",
                  "nl": "Wakkerder en energieker"
        },
        {
                  "en": "Sad and unhappy",
                  "es": "Tristes e infelices",
                  "de": "Traurig und unglücklich",
                  "nl": "Verdrietig en ongelukkig"
        },
        {
                  "en": "Very sleepy",
                  "es": "Muy somnolientos",
                  "de": "Sehr schläfrig",
                  "nl": "Heel slaperig"
        },
        {
                  "en": "Cold and shivery",
                  "es": "Fríos y temblorosos",
                  "de": "Kalt und zitternd",
                  "nl": "Koud en rillerig"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Coffee contains caffeine, which helps people feel more awake, alert, and energetic. That's why many people drink it in the morning to help them start their day!",
                  "es": "El café contiene cafeína, que ayuda a las personas a sentirse más despiertas, alertas y enérgicas. ¡Por eso mucha gente lo toma por la mañana para ayudarles a comenzar su día!",
                  "de": "Kaffee enthält Koffein, das Menschen hilft, sich wacher, aufmerksamer und energiegeladener zu fühlen. Deshalb trinken viele Leute ihn am Morgen, um ihnen zu helfen, ihren Tag zu beginnen!",
                  "nl": "Koffie bevat cafeïne, wat mensen helpt zich wakkerder, alerter en energieker te voelen. Daarom drinken veel mensen het 's ochtends om hen te helpen hun dag te beginnen!"
        }
      },
      {
        question: {
                  "en": "What shape are most coffee beans?",
                  "es": "¿Qué forma tienen la mayoría de los granos de café?",
                  "de": "Welche Form haben die meisten Kaffeebohnen?",
                  "nl": "Welke vorm hebben de meeste koffiebonen?"
        },
        options: [
        {
                  "en": "Perfectly round like a ball",
                  "es": "Perfectamente redondos como una pelota",
                  "de": "Perfekt rund wie ein Ball",
                  "nl": "Perfect rond zoals een bal"
        },
        {
                  "en": "Triangle shaped",
                  "es": "En forma de triángulo",
                  "de": "Dreieckig geformt",
                  "nl": "Driehoekig gevormd"
        },
        {
                  "en": "Oval with a line down the middle",
                  "es": "Ovalados con una línea en el medio",
                  "de": "Oval mit einer Linie in der Mitte",
                  "nl": "Ovaal met een lijn in het midden"
        },
        {
                  "en": "Square like a box",
                  "es": "Cuadrados como una caja",
                  "de": "Quadratisch wie eine Box",
                  "nl": "Vierkant zoals een doos"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Coffee beans are oval-shaped with a line or groove down the middle where the two halves of the bean meet. This makes them look a bit like tiny footballs!",
                  "es": "Los granos de café tienen forma ovalada con una línea o surco en el medio donde se encuentran las dos mitades del grano. ¡Esto los hace parecer pequeños balones de fútbol!",
                  "de": "Kaffeebohnen sind oval geformt mit einer Linie oder Rille in der Mitte, wo sich die beiden Hälften der Bohne treffen. Dies lässt sie wie kleine Fußbälle aussehen!",
                  "nl": "Koffiebonen zijn ovaal gevormd met een lijn of groef in het midden waar de twee helften van de boon elkaar ontmoeten. Dit laat ze eruit zien als kleine voetballen!"
        }
      },
      {
        question: {
                  "en": "Can coffee be made without a machine?",
                  "es": "¿Se puede hacer café sin una máquina?",
                  "de": "Kann Kaffee ohne Maschine gemacht werden?",
                  "nl": "Kan koffie worden gemaakt zonder machine?"
        },
        options: [
        {
                  "en": "Yes, by mixing coffee with hot water",
                  "es": "Sí, mezclando café con agua caliente",
                  "de": "Ja, indem man Kaffee mit heißem Wasser mischt",
                  "nl": "Ja, door koffie te mengen met heet water"
        },
        {
                  "en": "No, you always need a machine",
                  "es": "No, siempre necesitas una máquina",
                  "de": "Nein, man braucht immer eine Maschine",
                  "nl": "Nee, je hebt altijd een machine nodig"
        },
        {
                  "en": "Only robots can make coffee",
                  "es": "Solo los robots pueden hacer café",
                  "de": "Nur Roboter können Kaffee machen",
                  "nl": "Alleen robots kunnen koffie maken"
        },
        {
                  "en": "Coffee grows already made",
                  "es": "El café crece ya hecho",
                  "de": "Kaffee wächst schon fertig",
                  "nl": "Koffie groeit al klaar"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "You can make simple coffee by just adding hot water to coffee grounds. This is how people made coffee long ago before coffee machines were invented!",
                  "es": "Puedes hacer café simple simplemente añadiendo agua caliente al café molido. ¡Así es como la gente hacía café hace mucho tiempo antes de que se inventaran las cafeteras!",
                  "de": "Man kann einfachen Kaffee machen, indem man einfach heißes Wasser zu Kaffeepulver hinzufügt. So machten die Leute Kaffee vor langer Zeit, bevor Kaffeemaschinen erfunden wurden!",
                  "nl": "Je kunt eenvoudige koffie maken door gewoon heet water toe te voegen aan koffiepoeder. Zo maakten mensen lang geleden koffie voordat koffiezetapparaten werden uitgevonden!"
        }
      },
      {
        question: {
                  "en": "What do people often do while drinking coffee?",
                  "es": "¿Qué suele hacer la gente mientras toma café?",
                  "de": "Was machen Leute oft beim Kaffeetrinken?",
                  "nl": "Wat doen mensen vaak tijdens het koffiedrinken?"
        },
        options: [
        {
                  "en": "Talk with friends, read, or work",
                  "es": "Hablar con amigos, leer o trabajar",
                  "de": "Mit Freunden reden, lesen oder arbeiten",
                  "nl": "Praten met vrienden, lezen of werken"
        },
        {
                  "en": "Run very fast",
                  "es": "Correr muy rápido",
                  "de": "Sehr schnell rennen",
                  "nl": "Heel snel rennen"
        },
        {
                  "en": "Sleep",
                  "es": "Dormir",
                  "de": "Schlafen",
                  "nl": "Slapen"
        },
        {
                  "en": "Swim",
                  "es": "Nadar",
                  "de": "Schwimmen",
                  "nl": "Zwemmen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Coffee is often enjoyed during social times with friends, while reading a book, working, or just relaxing. Coffee shops are popular places where people meet and spend time together!",
                  "es": "El café a menudo se disfruta durante momentos sociales con amigos, mientras se lee un libro, se trabaja o simplemente se relaja. ¡Las cafeterías son lugares populares donde la gente se reúne y pasa tiempo juntos!",
                  "de": "Kaffee wird oft in geselligen Momenten mit Freunden genossen, beim Lesen eines Buches, beim Arbeiten oder einfach beim Entspannen. Cafés sind beliebte Orte, wo sich Menschen treffen und Zeit miteinander verbringen!",
                  "nl": "Koffie wordt vaak genoten tijdens sociale momenten met vrienden, tijdens het lezen van een boek, werken of gewoon ontspannen. Coffeeshops zijn populaire plekken waar mensen elkaar ontmoeten en tijd samen doorbrengen!"
        }
      },
      {
        question: {
                  "en": "What sound does a coffee maker make?",
                  "es": "¿Qué sonido hace una cafetera?",
                  "de": "Welches Geräusch macht eine Kaffeemaschine?",
                  "nl": "Welk geluid maakt een koffiezetapparaat?"
        },
        options: [
        {
                  "en": "Singing a song",
                  "es": "Cantando una canción",
                  "de": "Ein Lied singen",
                  "nl": "Een liedje zingen"
        },
        {
                  "en": "Barking like a dog",
                  "es": "Ladridos como un perro",
                  "de": "Bellen wie ein Hund",
                  "nl": "Blaffen als een hond"
        },
        {
                  "en": "Bubbling and dripping sounds",
                  "es": "Sonidos de burbujeo y goteo",
                  "de": "Blubbernde und tropfende Geräusche",
                  "nl": "Borrelende en druppelende geluiden"
        },
        {
                  "en": "Ringing like a bell",
                  "es": "Sonando como una campana",
                  "de": "Klingeln wie eine Glocke",
                  "nl": "Rinkelen als een bel"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "A coffee maker makes bubbling sounds as the water heats up and dripping sounds as the coffee comes out. These are normal sounds that tell you the coffee is being made!",
                  "es": "Una cafetera hace sonidos de burbujeo mientras el agua se calienta y sonidos de goteo cuando sale el café. ¡Estos son sonidos normales que te dicen que se está haciendo el café!",
                  "de": "Eine Kaffeemaschine macht blubbernde Geräusche, wenn das Wasser sich erwärmt, und tropfende Geräusche, wenn der Kaffee herauskommt. Das sind normale Geräusche, die dir sagen, dass Kaffee gemacht wird!",
                  "nl": "Een koffiezetapparaat maakt borrelende geluiden als het water opwarmt en druppelende geluiden als de koffie eruit komt. Dit zijn normale geluiden die je vertellen dat de koffie wordt gemaakt!"
        }
      },
      {
        question: {
                  "en": "Do coffee beans grow underground like carrots?",
                  "es": "¿Los granos de café crecen bajo tierra como las zanahorias?",
                  "de": "Wachsen Kaffeebohnen unterirdisch wie Karotten?",
                  "nl": "Groeien koffiebonen ondergronds zoals wortels?"
        },
        options: [
        {
                  "en": "They fall from the sky",
                  "es": "Caen del cielo",
                  "de": "Sie fallen vom Himmel",
                  "nl": "Ze vallen uit de lucht"
        },
        {
                  "en": "They grow on trees in the ocean",
                  "es": "Crecen en árboles en el océano",
                  "de": "Sie wachsen auf Bäumen im Ozean",
                  "nl": "Ze groeien op bomen in de oceaan"
        },
        {
                  "en": "Yes, you dig them up like potatoes",
                  "es": "Sí, las desenterras como patatas",
                  "de": "Ja, man gräbt sie aus wie Kartoffeln",
                  "nl": "Ja, je graaft ze op zoals aardappels"
        },
        {
                  "en": "No, they grow on bushes above ground",
                  "es": "No, crecen en arbustos sobre el suelo",
                  "de": "Nein, sie wachsen auf Büschen über dem Boden",
                  "nl": "Nee, ze groeien op struiken boven de grond"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Coffee beans grow on coffee bushes (small trees) above the ground. The beans are actually seeds inside red or yellow berries called coffee cherries!",
                  "es": "Los granos de café crecen en arbustos de café (árboles pequeños) sobre el suelo. ¡Los granos son en realidad semillas dentro de bayas rojas o amarillas llamadas cerezas de café!",
                  "de": "Kaffeebohnen wachsen auf Kaffeesträuchern (kleine Bäume) über dem Boden. Die Bohnen sind eigentlich Samen in roten oder gelben Beeren, die Kaffeekirschen genannt werden!",
                  "nl": "Koffiebonen groeien op koffiestruiken (kleine bomen) boven de grond. De bonen zijn eigenlijk zaden in rode of gele bessen die koffiebessen worden genoemd!"
        }
      },
      {
        question: {
                  "en": "What happens if you drink too much coffee?",
                  "es": "¿Qué pasa si tomas demasiado café?",
                  "de": "Was passiert, wenn man zu viel Kaffee trinkt?",
                  "nl": "Wat gebeurt er als je te veel koffie drinkt?"
        },
        options: [
        {
                  "en": "You turn into a coffee bean",
                  "es": "Te conviertes en un grano de café",
                  "de": "Du verwandelst dich in eine Kaffeebohne",
                  "nl": "Je verandert in een koffieboon"
        },
        {
                  "en": "You might feel too energetic and shaky",
                  "es": "Podrías sentirte demasiado enérgico y tembloroso",
                  "de": "Du könntest dich zu energiegeladen und zittrig fühlen",
                  "nl": "Je zou je te energiek en trillerig kunnen voelen"
        },
        {
                  "en": "Nothing happens at all",
                  "es": "No pasa nada en absoluto",
                  "de": "Es passiert überhaupt nichts",
                  "nl": "Er gebeurt helemaal niets"
        },
        {
                  "en": "Your hair turns brown",
                  "es": "Tu cabello se vuelve marrón",
                  "de": "Deine Haare werden braun",
                  "nl": "Je haar wordt bruin"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Too much caffeine can make you feel jittery, shaky, or have trouble sleeping. That's why it's important to drink coffee in moderation, and why children shouldn't drink it at all!",
                  "es": "Demasiada cafeína puede hacerte sentir nervioso, tembloroso o tener problemas para dormir. ¡Por eso es importante tomar café con moderación, y por qué los niños no deberían tomarlo en absoluto!",
                  "de": "Zu viel Koffein kann dich nervös, zittrig machen oder Schlafprobleme verursachen. Deshalb ist es wichtig, Kaffee in Maßen zu trinken, und warum Kinder ihn überhaupt nicht trinken sollten!",
                  "nl": "Te veel cafeïne kan je nerveus, trillerig maken of slaapproblemen geven. Daarom is het belangrijk om koffie met mate te drinken, en waarom kinderen het helemaal niet zouden moeten drinken!"
        }
      },
      {
        question: {
                  "en": "Is decaf coffee the same as regular coffee?",
                  "es": "¿El café descafeinado es lo mismo que el café regular?",
                  "de": "Ist koffeinfreier Kaffee dasselbe wie normaler Kaffee?",
                  "nl": "Is cafeïnevrije koffie hetzelfde als gewone koffie?"
        },
        options: [
        {
                  "en": "It's actually tea",
                  "es": "En realidad es té",
                  "de": "Es ist eigentlich Tee",
                  "nl": "Het is eigenlijk thee"
        },
        {
                  "en": "It's just water",
                  "es": "Es solo agua",
                  "de": "Es ist nur Wasser",
                  "nl": "Het is gewoon water"
        },
        {
                  "en": "Completely different drink",
                  "es": "Bebida completamente diferente",
                  "de": "Völlig anderes Getränk",
                  "nl": "Compleet ander drankje"
        },
        {
                  "en": "Similar taste but without caffeine",
                  "es": "Sabor similar pero sin cafeína",
                  "de": "Ähnlicher Geschmack aber ohne Koffein",
                  "nl": "Vergelijkbare smaak maar zonder cafeïne"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Decaf coffee is made from the same coffee beans, but most of the caffeine has been removed. It tastes similar to regular coffee but won't make you feel as awake!",
                  "es": "El café descafeinado está hecho de los mismos granos de café, pero se ha eliminado la mayor parte de la cafeína. ¡Sabe similar al café regular pero no te hará sentir tan despierto!",
                  "de": "Koffeinfreier Kaffee wird aus denselben Kaffeebohnen hergestellt, aber das meiste Koffein wurde entfernt. Er schmeckt ähnlich wie normaler Kaffee, macht dich aber nicht so wach!",
                  "nl": "Cafeïnevrije koffie wordt gemaakt van dezelfde koffiebonen, maar de meeste cafeïne is verwijderd. Het smaakt vergelijkbaar met gewone koffie maar maakt je niet zo wakker!"
        }
      },
      {
        question: {
                  "en": "What is the frothy milk on top of some coffee called?",
                  "es": "¿Cómo se llama la leche espumosa encima de algunos cafés?",
                  "de": "Wie nennt man die schaumige Milch oben auf manchen Kaffees?",
                  "nl": "Hoe heet de schuimige melk bovenop sommige koffie?"
        },
        options: [
        {
                  "en": "Butter",
                  "es": "Mantequilla",
                  "de": "Butter",
                  "nl": "Boter"
        },
        {
                  "en": "Foam or froth",
                  "es": "Espuma",
                  "de": "Schaum",
                  "nl": "Schuim"
        },
        {
                  "en": "Cheese",
                  "es": "Queso",
                  "de": "Käse",
                  "nl": "Kaas"
        },
        {
                  "en": "Whipped cream",
                  "es": "Crema batida",
                  "de": "Schlagsahne",
                  "nl": "Slagroom"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The white, fluffy layer on top of coffee drinks like cappuccinos and lattes is called foam or froth. It's made by steaming and aerating milk to create tiny bubbles!",
                  "es": "La capa blanca y esponjosa encima de bebidas de café como capuchinos y lattes se llama espuma. ¡Se hace vaporizando y aireando la leche para crear pequeñas burbujas!",
                  "de": "Die weiße, flauschige Schicht oben auf Kaffeegetränken wie Cappuccinos und Lattes nennt man Schaum. Sie wird durch Dämpfen und Belüften von Milch hergestellt, um winzige Bläschen zu erzeugen!",
                  "nl": "De witte, luchtige laag bovenop koffiedrankjes zoals cappuccino's en latte's heet schuim. Het wordt gemaakt door melk te stomen en te luchten om kleine belletjes te maken!"
        }
      },
      {
        question: {
                  "en": "Can you add chocolate to coffee?",
                  "es": "¿Puedes añadir chocolate al café?",
                  "de": "Kann man Schokolade zu Kaffee hinzufügen?",
                  "nl": "Kun je chocolade aan koffie toevoegen?"
        },
        options: [
        {
                  "en": "No, never mix them",
                  "es": "No, nunca los mezcles",
                  "de": "Nein, mische sie nie",
                  "nl": "Nee, mix ze nooit"
        },
        {
                  "en": "Only on Tuesdays",
                  "es": "Solo los martes",
                  "de": "Nur dienstags",
                  "nl": "Alleen op dinsdag"
        },
        {
                  "en": "Yes, it's called a mocha",
                  "es": "Sí, se llama mocha",
                  "de": "Ja, das nennt man Mokka",
                  "nl": "Ja, dat heet een mokka"
        },
        {
                  "en": "It's against the law",
                  "es": "Es contra la ley",
                  "de": "Es ist gegen das Gesetz",
                  "nl": "Het is tegen de wet"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Yes! When you add chocolate syrup or powder to coffee with milk, it's called a mocha or café mocha. It's a delicious combination that many people love!",
                  "es": "¡Sí! Cuando añades sirope o polvo de chocolate al café con leche, se llama mocha o café mocha. ¡Es una combinación deliciosa que a mucha gente le encanta!",
                  "de": "Ja! Wenn du Schokoladensirup oder -pulver zu Kaffee mit Milch hinzufügst, nennt man das Mokka oder Café Mokka. Es ist eine köstliche Kombination, die viele Menschen lieben!",
                  "nl": "Ja! Wanneer je chocoladesiroop of poeder toevoegt aan koffie met melk, heet het een mokka of café mokka. Het is een heerlijke combinatie waar veel mensen van houden!"
        }
      },
      {
        question: {
                  "en": "Why do some people drink coffee with breakfast?",
                  "es": "¿Por qué algunas personas toman café con el desayuno?",
                  "de": "Warum trinken manche Leute Kaffee zum Frühstück?",
                  "nl": "Waarom drinken sommige mensen koffie bij het ontbijt?"
        },
        options: [
        {
                  "en": "Because the sun tells them to",
                  "es": "Porque el sol se lo dice",
                  "de": "Weil die Sonne es ihnen sagt",
                  "nl": "Omdat de zon het ze vertelt"
        },
        {
                  "en": "Because it tastes like pancakes",
                  "es": "Porque sabe a panqueques",
                  "de": "Weil es nach Pfannkuchen schmeckt",
                  "nl": "Omdat het naar pannenkoeken smaakt"
        },
        {
                  "en": "To clean their teeth",
                  "es": "Para limpiar sus dientes",
                  "de": "Um ihre Zähne zu putzen",
                  "nl": "Om hun tanden te poetsen"
        },
        {
                  "en": "To help wake up and start the day",
                  "es": "Para ayudar a despertar y comenzar el día",
                  "de": "Um beim Aufwachen zu helfen und den Tag zu beginnen",
                  "nl": "Om te helpen wakker worden en de dag te beginnen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Many people enjoy coffee with breakfast because it helps them feel more alert and energetic to start their day. The caffeine gives them a little boost of energy!",
                  "es": "Muchas personas disfrutan el café con el desayuno porque les ayuda a sentirse más alertas y enérgicos para comenzar su día. ¡La cafeína les da un pequeño impulso de energía!",
                  "de": "Viele Menschen genießen Kaffee zum Frühstück, weil er ihnen hilft, sich wacher und energiegeladener zu fühlen, um ihren Tag zu beginnen. Das Koffein gibt ihnen einen kleinen Energieschub!",
                  "nl": "Veel mensen genieten van koffie bij het ontbijt omdat het hen helpt zich alerter en energieker te voelen om hun dag te beginnen. De cafeïne geeft hen een kleine energieboost!"
        }
      },
      {
        question: {
                  "en": "What happens to coffee grounds after making coffee?",
                  "es": "¿Qué pasa con los posos de café después de hacer café?",
                  "de": "Was passiert mit Kaffeesatz nach dem Kaffeemachen?",
                  "nl": "Wat gebeurt er met koffiedik na het koffiezetten?"
        },
        options: [
        {
                  "en": "They fly away",
                  "es": "Se vuelan",
                  "de": "Sie fliegen weg",
                  "nl": "Ze vliegen weg"
        },
        {
                  "en": "They are thrown away or used as compost",
                  "es": "Se tiran o se usan como compost",
                  "de": "Sie werden weggeworfen oder als Kompost verwendet",
                  "nl": "Ze worden weggegooid of gebruikt als compost"
        },
        {
                  "en": "They become new coffee beans",
                  "es": "Se convierten en nuevos granos de café",
                  "de": "Sie werden zu neuen Kaffeebohnen",
                  "nl": "Ze worden nieuwe koffiebonen"
        },
        {
                  "en": "People eat them like cereal",
                  "es": "La gente los come como cereal",
                  "de": "Die Leute essen sie wie Müsli",
                  "nl": "Mensen eten ze als ontbijtgranen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Used coffee grounds are usually thrown away in the trash or compost bin. Some gardeners even use them to help plants grow because they add nutrients to the soil!",
                  "es": "Los posos de café usados generalmente se tiran a la basura o al contenedor de compost. ¡Algunos jardineros incluso los usan para ayudar a las plantas a crecer porque añaden nutrientes al suelo!",
                  "de": "Benutzter Kaffeesatz wird normalerweise in den Müll oder Kompost geworfen. Manche Gärtner benutzen ihn sogar, um Pflanzen beim Wachsen zu helfen, weil er Nährstoffe zum Boden hinzufügt!",
                  "nl": "Gebruikt koffiedik wordt meestal in de vuilnisbak of compostemmer gegooid. Sommige tuiniers gebruiken het zelfs om planten te helpen groeien omdat het voedingsstoffen aan de grond toevoegt!"
        }
      },
      {
        question: {
                  "en": "Is iced coffee the same as hot coffee poured over ice?",
                  "es": "¿El café helado es lo mismo que café caliente vertido sobre hielo?",
                  "de": "Ist Eiskaffee dasselbe wie heißer Kaffee über Eis gegossen?",
                  "nl": "Is ijskoffie hetzelfde als warme koffie over ijs gegoten?"
        },
        options: [
        {
                  "en": "No, iced coffee comes from Antarctica",
                  "es": "No, el café helado viene de la Antártida",
                  "de": "Nein, Eiskaffee kommt aus der Antarktis",
                  "nl": "Nee, ijskoffie komt uit Antarctica"
        },
        {
                  "en": "It's made from snow",
                  "es": "Está hecho de nieve",
                  "de": "Es wird aus Schnee gemacht",
                  "nl": "Het is gemaakt van sneeuw"
        },
        {
                  "en": "Usually yes, or it can be specially brewed cold",
                  "es": "Generalmente sí, o puede ser preparado especialmente frío",
                  "de": "Normalerweise ja, oder er kann speziell kalt gebrüht werden",
                  "nl": "Meestal wel, of het kan speciaal koud gezet worden"
        },
        {
                  "en": "It's frozen solid like ice cream",
                  "es": "Está congelado sólido como helado",
                  "de": "Es ist fest gefroren wie Eiscreme",
                  "nl": "Het is bevroren zoals ijs"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Iced coffee is usually hot coffee that has been cooled down and poured over ice. Some people also make 'cold brew' coffee which is brewed with cold water over a long time!",
                  "es": "El café helado es usualmente café caliente que se ha enfriado y se vierte sobre hielo. ¡Algunas personas también hacen café 'cold brew' que se prepara con agua fría durante mucho tiempo!",
                  "de": "Eiskaffee ist normalerweise heißer Kaffee, der abgekühlt und über Eis gegossen wurde. Manche Leute machen auch 'Cold Brew' Kaffee, der mit kaltem Wasser über eine lange Zeit gebrüht wird!",
                  "nl": "Ijskoffie is meestal warme koffie die is afgekoeld en over ijs is gegoten. Sommige mensen maken ook 'cold brew' koffie die met koud water over een lange tijd wordt gezet!"
        }
      },
      {
        question: {
                  "en": "What tool do people use to grind coffee beans?",
                  "es": "¿Qué herramienta usan las personas para moler granos de café?",
                  "de": "Welches Werkzeug benutzen Menschen, um Kaffeebohnen zu mahlen?",
                  "nl": "Welk gereedschap gebruiken mensen om koffiebonen te malen?"
        },
        options: [
        {
                  "en": "A coffee grinder",
                  "es": "Un molinillo de café",
                  "de": "Eine Kaffeemühle",
                  "nl": "Een koffiemolen"
        },
        {
                  "en": "Their hands",
                  "es": "Sus manos",
                  "de": "Ihre Hände",
                  "nl": "Hun handen"
        },
        {
                  "en": "A hammer",
                  "es": "Un martillo",
                  "de": "Ein Hammer",
                  "nl": "Een hamer"
        },
        {
                  "en": "Scissors",
                  "es": "Tijeras",
                  "de": "Eine Schere",
                  "nl": "Een schaar"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A coffee grinder is a special machine that crushes whole coffee beans into small pieces (grounds) so they can be used to make coffee. Some are electric and some you turn by hand!",
                  "es": "Un molinillo de café es una máquina especial que tritura granos de café enteros en pedazos pequeños (molido) para que puedan usarse para hacer café. ¡Algunos son eléctricos y otros se giran a mano!",
                  "de": "Eine Kaffeemühle ist eine spezielle Maschine, die ganze Kaffeebohnen in kleine Stücke (Pulver) zerkleinert, damit sie für Kaffee verwendet werden können. Manche sind elektrisch und manche dreht man von Hand!",
                  "nl": "Een koffiemolen is een speciale machine die hele koffiebonen in kleine stukjes (gemalen koffie) vermorzelt zodat ze gebruikt kunnen worden om koffie te maken. Sommige zijn elektrisch en sommige draai je met de hand!"
        }
      },
      {
        question: {
                  "en": "Can you put ice cream in coffee?",
                  "es": "¿Puedes poner helado en el café?",
                  "de": "Kann man Eis in Kaffee tun?",
                  "nl": "Kun je ijs in koffie doen?"
        },
        options: [
        {
                  "en": "That's impossible",
                  "es": "Eso es imposible",
                  "de": "Das ist unmöglich",
                  "nl": "Dat is onmogelijk"
        },
        {
                  "en": "Yes! It's called affogato",
                  "es": "¡Sí! Se llama affogato",
                  "de": "Ja! Das nennt man Affogato",
                  "nl": "Ja! Dat heet affogato"
        },
        {
                  "en": "Only on your birthday",
                  "es": "Solo en tu cumpleaños",
                  "de": "Nur an deinem Geburtstag",
                  "nl": "Alleen op je verjaardag"
        },
        {
                  "en": "No, it will explode",
                  "es": "No, explotará",
                  "de": "Nein, es wird explodieren",
                  "nl": "Nee, het zal exploderen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Yes! An affogato is a delicious Italian dessert where a scoop of vanilla ice cream is 'drowned' in hot espresso coffee. The ice cream melts a little and mixes with the coffee - yum!",
                  "es": "¡Sí! Un affogato es un delicioso postre italiano donde una bola de helado de vainilla se 'ahoga' en café espresso caliente. El helado se derrite un poco y se mezcla con el café - ¡delicioso!",
                  "de": "Ja! Ein Affogato ist ein köstliches italienisches Dessert, bei dem eine Kugel Vanilleeis in heißem Espresso-Kaffee 'ertränkt' wird. Das Eis schmilzt ein wenig und vermischt sich mit dem Kaffee - lecker!",
                  "nl": "Ja! Een affogato is een heerlijk Italiaans dessert waarbij een bolletje vanille-ijs wordt 'verdronken' in hete espresso koffie. Het ijs smelt een beetje en mengt met de koffie - lekker!"
        }
      },
      {
        question: {
                  "en": "Do coffee plants have flowers?",
                  "es": "¿Las plantas de café tienen flores?",
                  "de": "Haben Kaffeepflanzen Blüten?",
                  "nl": "Hebben koffieplanten bloemen?"
        },
        options: [
        {
                  "en": "Yes, white fragrant flowers",
                  "es": "Sí, flores blancas fragantes",
                  "de": "Ja, weiße duftende Blüten",
                  "nl": "Ja, witte geurige bloemen"
        },
        {
                  "en": "Only rainbow colored flowers",
                  "es": "Solo flores de colores del arcoíris",
                  "de": "Nur regenbogenfarbene Blüten",
                  "nl": "Alleen regenboog gekleurde bloemen"
        },
        {
                  "en": "They have leaves but no flowers",
                  "es": "Tienen hojas pero no flores",
                  "de": "Sie haben Blätter aber keine Blüten",
                  "nl": "Ze hebben bladeren maar geen bloemen"
        },
        {
                  "en": "No, they never bloom",
                  "es": "No, nunca florecen",
                  "de": "Nein, sie blühen nie",
                  "nl": "Nee, ze bloeien nooit"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Coffee plants have beautiful white flowers that smell really nice, like jasmine! After the flowers bloom, they turn into the coffee cherries that contain the coffee beans.",
                  "es": "¡Las plantas de café tienen hermosas flores blancas que huelen muy bien, como jazmín! Después de que las flores florecen, se convierten en las cerezas de café que contienen los granos de café.",
                  "de": "Kaffeepflanzen haben schöne weiße Blüten, die wirklich gut riechen, wie Jasmin! Nachdem die Blüten geblüht haben, werden sie zu den Kaffeekirschen, die die Kaffeebohnen enthalten.",
                  "nl": "Koffieplanten hebben mooie witte bloemen die echt lekker ruiken, zoals jasmijn! Nadat de bloemen bloeien, veranderen ze in de koffiebessen die de koffiebonen bevatten."
        }
      },
      {
        question: {
                  "en": "What is a 'barista'?",
                  "es": "¿Qué es un 'barista'?",
                  "de": "Was ist ein 'Barista'?",
                  "nl": "Wat is een 'barista'?"
        },
        options: [
        {
                  "en": "A coffee cup",
                  "es": "Una taza de café",
                  "de": "Eine Kaffeetasse",
                  "nl": "Een koffiekopje"
        },
        {
                  "en": "A type of coffee bean",
                  "es": "Un tipo de grano de café",
                  "de": "Eine Art Kaffeebohne",
                  "nl": "Een soort koffieboon"
        },
        {
                  "en": "A person who makes coffee professionally",
                  "es": "Una persona que hace café profesionalmente",
                  "de": "Eine Person, die professionell Kaffee macht",
                  "nl": "Een persoon die professioneel koffie maakt"
        },
        {
                  "en": "A coffee plant",
                  "es": "Una planta de café",
                  "de": "Eine Kaffeepflanze",
                  "nl": "Een koffieplant"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "A barista is someone who is specially trained to make coffee drinks like espresso, cappuccinos, and lattes. They work in coffee shops and are experts at making delicious coffee!",
                  "es": "Un barista es alguien que está especialmente entrenado para hacer bebidas de café como espresso, capuchinos y lattes. ¡Trabajan en cafeterías y son expertos en hacer café delicioso!",
                  "de": "Ein Barista ist jemand, der speziell darin trainiert ist, Kaffeegetränke wie Espresso, Cappuccinos und Lattes zu machen. Sie arbeiten in Cafés und sind Experten im Kaffeemachen!",
                  "nl": "Een barista is iemand die speciaal getraind is om koffiedrankjes zoals espresso, cappuccino's en latte's te maken. Ze werken in coffeeshops en zijn experts in het maken van heerlijke koffie!"
        }
      },
      {
        question: {
                  "en": "Why is coffee sometimes served in small cups?",
                  "es": "¿Por qué a veces se sirve el café en tazas pequeñas?",
                  "de": "Warum wird Kaffee manchmal in kleinen Tassen serviert?",
                  "nl": "Waarom wordt koffie soms in kleine kopjes geserveerd?"
        },
        options: [
        {
                  "en": "To save money on cups",
                  "es": "Para ahorrar dinero en tazas",
                  "de": "Um Geld für Tassen zu sparen",
                  "nl": "Om geld te besparen op kopjes"
        },
        {
                  "en": "Only tiny people drink from them",
                  "es": "Solo personas pequeñas beben de ellas",
                  "de": "Nur kleine Leute trinken daraus",
                  "nl": "Alleen kleine mensen drinken eruit"
        },
        {
                  "en": "Because big cups are too heavy",
                  "es": "Porque las tazas grandes son demasiado pesadas",
                  "de": "Weil große Tassen zu schwer sind",
                  "nl": "Omdat grote kopjes te zwaar zijn"
        },
        {
                  "en": "Because some coffee is very strong",
                  "es": "Porque algunos cafés son muy fuertes",
                  "de": "Weil manche Kaffees sehr stark sind",
                  "nl": "Omdat sommige koffie heel sterk is"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Strong coffee like espresso is served in small cups because it's very concentrated and you only need a little bit. Drinking a small amount of strong coffee gives you the same effect as a larger cup of weaker coffee!",
                  "es": "El café fuerte como el espresso se sirve en tazas pequeñas porque es muy concentrado y solo necesitas un poquito. ¡Tomar una pequeña cantidad de café fuerte te da el mismo efecto que una taza grande de café más débil!",
                  "de": "Starker Kaffee wie Espresso wird in kleinen Tassen serviert, weil er sehr konzentriert ist und man nur ein wenig braucht. Das Trinken einer kleinen Menge starken Kaffees hat denselben Effekt wie eine größere Tasse schwächeren Kaffees!",
                  "nl": "Sterke koffie zoals espresso wordt in kleine kopjes geserveerd omdat het heel geconcentreerd is en je maar een klein beetje nodig hebt. Het drinken van een kleine hoeveelheid sterke koffie geeft hetzelfde effect als een groter kopje zwakkere koffie!"
        }
      },
      {
        question: {
                  "en": "What country drinks the most coffee per person?",
                  "es": "¿Qué país bebe más café por persona?",
                  "de": "Welches Land trinkt am meisten Kaffee pro Person?",
                  "nl": "Welk land drinkt de meeste koffie per persoon?"
        },
        options: [
        {
                  "en": "Countries like Finland and Norway",
                  "es": "Países como Finlandia y Noruega",
                  "de": "Länder wie Finnland und Norwegen",
                  "nl": "Landen zoals Finland en Noorwegen"
        },
        {
                  "en": "Countries with no rain",
                  "es": "Países sin lluvia",
                  "de": "Länder ohne Regen",
                  "nl": "Landen zonder regen"
        },
        {
                  "en": "Islands in the ocean",
                  "es": "Islas en el océano",
                  "de": "Inseln im Ozean",
                  "nl": "Eilanden in de oceaan"
        },
        {
                  "en": "Countries near the equator only",
                  "es": "Solo países cerca del ecuador",
                  "de": "Nur Länder in der Nähe des Äquators",
                  "nl": "Alleen landen bij de evenaar"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Nordic countries like Finland and Norway drink the most coffee per person in the world! People there love coffee and drink it throughout the day, especially during their cold winters.",
                  "es": "¡Países nórdicos como Finlandia y Noruega beben más café por persona en el mundo! La gente allí ama el café y lo toman durante todo el día, especialmente durante sus inviernos fríos.",
                  "de": "Nordische Länder wie Finnland und Norwegen trinken am meisten Kaffee pro Person in der Welt! Die Menschen dort lieben Kaffee und trinken ihn den ganzen Tag, besonders während ihrer kalten Winter.",
                  "nl": "Noordse landen zoals Finland en Noorwegen drinken de meeste koffie per persoon in de wereld! Mensen daar houden van koffie en drinken het de hele dag door, vooral tijdens hun koude winters."
        }
      },
      {
        question: {
                  "en": "Can you make coffee with cold water instead of hot?",
                  "es": "¿Puedes hacer café con agua fría en lugar de caliente?",
                  "de": "Kann man Kaffee mit kaltem statt heißem Wasser machen?",
                  "nl": "Kun je koffie maken met koud water in plaats van heet?"
        },
        options: [
        {
                  "en": "Only if you freeze it first",
                  "es": "Solo si lo congelas primero",
                  "de": "Nur wenn man es zuerst einfriert",
                  "nl": "Alleen als je het eerst bevriest"
        },
        {
                  "en": "No, it's completely impossible",
                  "es": "No, es completamente imposible",
                  "de": "Nein, es ist völlig unmöglich",
                  "nl": "Nee, het is volledig onmogelijk"
        },
        {
                  "en": "Yes, but it takes much longer",
                  "es": "Sí, pero toma mucho más tiempo",
                  "de": "Ja, aber es dauert viel länger",
                  "nl": "Ja, maar het duurt veel langer"
        },
        {
                  "en": "Yes, and it's faster than hot water",
                  "es": "Sí, y es más rápido que con agua caliente",
                  "de": "Ja, und es ist schneller als mit heißem Wasser",
                  "nl": "Ja, en het is sneller dan met heet water"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "You can make coffee with cold water, called 'cold brew', but it takes 12-24 hours instead of just a few minutes! The cold water extracts the flavor very slowly, making a smooth, less bitter coffee.",
                  "es": "Puedes hacer café con agua fría, llamado 'cold brew', ¡pero toma 12-24 horas en lugar de solo unos minutos! El agua fría extrae el sabor muy lentamente, haciendo un café suave y menos amargo.",
                  "de": "Man kann Kaffee mit kaltem Wasser machen, genannt 'Cold Brew', aber es dauert 12-24 Stunden statt nur wenigen Minuten! Das kalte Wasser extrahiert den Geschmack sehr langsam und macht einen glatten, weniger bitteren Kaffee.",
                  "nl": "Je kunt koffie maken met koud water, genaamd 'cold brew', maar het duurt 12-24 uur in plaats van een paar minuten! Het koude water extraheert de smaak heel langzaam, wat een zachte, minder bittere koffie maakt."
        }
      },
      {
        question: {
                  "en": "What gives coffee its brown color?",
                  "es": "¿Qué le da al café su color marrón?",
                  "de": "Was gibt Kaffee seine braune Farbe?",
                  "nl": "Wat geeft koffie zijn bruine kleur?"
        },
        options: [
        {
                  "en": "Roasting the beans at high heat",
                  "es": "Tostar los granos a alta temperatura",
                  "de": "Rösten der Bohnen bei hoher Hitze",
                  "nl": "Het branden van de bonen bij hoge hitte"
        },
        {
                  "en": "Adding brown food coloring",
                  "es": "Añadir colorante marrón",
                  "de": "Braune Lebensmittelfarbe hinzufügen",
                  "nl": "Bruine voedselkleuring toevoegen"
        },
        {
                  "en": "Mixing it with chocolate",
                  "es": "Mezclarlo con chocolate",
                  "de": "Mit Schokolade mischen",
                  "nl": "Het mengen met chocolade"
        },
        {
                  "en": "Growing in brown soil",
                  "es": "Crecer en tierra marrón",
                  "de": "Wachsen in brauner Erde",
                  "nl": "Groeien in bruine aarde"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Coffee beans turn brown during roasting. When the green beans are heated to high temperatures, chemical changes happen that turn them brown and create that delicious coffee flavor and aroma!",
                  "es": "Los granos de café se vuelven marrones durante el tostado. Cuando los granos verdes se calientan a altas temperaturas, ocurren cambios químicos que los vuelven marrones y crean ese delicioso sabor y aroma de café!",
                  "de": "Kaffeebohnen werden während des Röstens braun. Wenn die grünen Bohnen auf hohe Temperaturen erhitzt werden, passieren chemische Veränderungen, die sie braun machen und diesen köstlichen Kaffeegeschmack und -geruch erzeugen!",
                  "nl": "Koffiebonen worden bruin tijdens het branden. Wanneer de groene bonen worden verhit tot hoge temperaturen, vinden chemische veranderingen plaats die ze bruin maken en die heerlijke koffiesmaak en -geur creëren!"
        }
      },
      {
        question: {
                  "en": "Do all coffee shops sell the same kind of coffee?",
                  "es": "¿Todas las cafeterías venden el mismo tipo de café?",
                  "de": "Verkaufen alle Cafés die gleiche Art von Kaffee?",
                  "nl": "Verkopen alle coffeeshops hetzelfde soort koffie?"
        },
        options: [
        {
                  "en": "Coffee shops don't actually sell coffee",
                  "es": "Las cafeterías en realidad no venden café",
                  "de": "Cafés verkaufen eigentlich keinen Kaffee",
                  "nl": "Coffeeshops verkopen eigenlijk geen koffie"
        },
        {
                  "en": "Yes, all coffee is exactly the same everywhere",
                  "es": "Sí, todo el café es exactamente igual en todas partes",
                  "de": "Ja, aller Kaffee ist überall genau gleich",
                  "nl": "Ja, alle koffie is overal precies hetzelfde"
        },
        {
                  "en": "No, each shop can have different coffee and recipes",
                  "es": "No, cada tienda puede tener café y recetas diferentes",
                  "de": "Nein, jedes Café kann verschiedenen Kaffee und Rezepte haben",
                  "nl": "Nee, elke shop kan verschillende koffie en recepten hebben"
        },
        {
                  "en": "Only on Mondays they sell different coffee",
                  "es": "Solo los lunes venden café diferente",
                  "de": "Nur montags verkaufen sie anderen Kaffee",
                  "nl": "Alleen op maandag verkopen ze andere koffie"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Different coffee shops use different coffee beans from different places in the world, and they each have their own special recipes and ways of making drinks. That's why coffee can taste different at each shop!",
                  "es": "Diferentes cafeterías usan diferentes granos de café de diferentes lugares del mundo, y cada una tiene sus propias recetas especiales y formas de hacer bebidas. ¡Por eso el café puede saber diferente en cada tienda!",
                  "de": "Verschiedene Cafés verwenden verschiedene Kaffeebohnen aus verschiedenen Teilen der Welt, und sie haben jeweils ihre eigenen speziellen Rezepte und Zubereitungsarten. Deshalb kann Kaffee in jedem Café anders schmecken!",
                  "nl": "Verschillende coffeeshops gebruiken verschillende koffiebonen uit verschillende delen van de wereld, en ze hebben elk hun eigen speciale recepten en manieren om drankjes te maken. Daarom kan koffie in elke shop anders smaken!"
        }
      },
      {
        question: {
                  "en": "Why do people sometimes add cinnamon to coffee?",
                  "es": "¿Por qué las personas a veces añaden canela al café?",
                  "de": "Warum fügen Leute manchmal Zimt zu Kaffee hinzu?",
                  "nl": "Waarom voegen mensen soms kaneel toe aan koffie?"
        },
        options: [
        {
                  "en": "To add a sweet, spicy flavor",
                  "es": "Para añadir un sabor dulce y picante",
                  "de": "Um einen süßen, würzigen Geschmack hinzuzufügen",
                  "nl": "Om een zoete, pittige smaak toe te voegen"
        },
        {
                  "en": "To make it turn red",
                  "es": "Para hacerlo volverse rojo",
                  "de": "Um es rot zu machen",
                  "nl": "Om het rood te maken"
        },
        {
                  "en": "Because it makes coffee cold",
                  "es": "Porque hace que el café esté frío",
                  "de": "Weil es Kaffee kalt macht",
                  "nl": "Omdat het koffie koud maakt"
        },
        {
                  "en": "It's required by law",
                  "es": "Es requerido por ley",
                  "de": "Es ist gesetzlich vorgeschrieben",
                  "nl": "Het is wettelijk verplicht"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Adding a sprinkle of cinnamon to coffee gives it a warm, sweet, and slightly spicy taste. Many people love this combination because cinnamon and coffee flavors go really well together!",
                  "es": "Añadir una pizca de canela al café le da un sabor cálido, dulce y ligeramente picante. ¡A muchas personas les encanta esta combinación porque los sabores de canela y café van muy bien juntos!",
                  "de": "Eine Prise Zimt zum Kaffee hinzuzufügen gibt ihm einen warmen, süßen und leicht würzigen Geschmack. Viele Menschen lieben diese Kombination, weil Zimt- und Kaffeearomen wirklich gut zusammenpassen!",
                  "nl": "Het toevoegen van een snufje kaneel aan koffie geeft het een warme, zoete en licht pittige smaak. Veel mensen houden van deze combinatie omdat kaneel en koffiesmaken echt goed bij elkaar passen!"
        }
      },
      {
        question: {
                  "en": "What makes the 'hissing' sound when making espresso?",
                  "es": "¿Qué hace el sonido de 'siseo' al hacer espresso?",
                  "de": "Was macht das 'Zischgeräusch' beim Espresso-Machen?",
                  "nl": "Wat maakt het 'sissende' geluid bij het maken van espresso?"
        },
        options: [
        {
                  "en": "Radio playing static",
                  "es": "Radio reproduciendo estática",
                  "de": "Radio spielt Rauschen",
                  "nl": "Radio die ruis speelt"
        },
        {
                  "en": "A hidden snake in the machine",
                  "es": "Una serpiente escondida en la máquina",
                  "de": "Eine versteckte Schlange in der Maschine",
                  "nl": "Een verborgen slang in de machine"
        },
        {
                  "en": "The machine getting angry",
                  "es": "La máquina enojándose",
                  "de": "Die Maschine wird wütend",
                  "nl": "De machine die boos wordt"
        },
        {
                  "en": "Steam and pressure forcing water through coffee",
                  "es": "Vapor y presión forzando agua a través del café",
                  "de": "Dampf und Druck, der Wasser durch Kaffee presst",
                  "nl": "Stoom en druk die water door koffie duwt"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The hissing sound comes from the espresso machine using very hot steam and high pressure to force water through tightly packed coffee grounds. It's a normal sound that means the machine is working properly!",
                  "es": "El sonido de siseo proviene de la máquina de espresso usando vapor muy caliente y alta presión para forzar agua a través de café molido compacto. ¡Es un sonido normal que significa que la máquina está funcionando correctamente!",
                  "de": "Das Zischgeräusch kommt von der Espressomaschine, die sehr heißen Dampf und hohen Druck verwendet, um Wasser durch dicht gepacktes Kaffeepulver zu pressen. Es ist ein normales Geräusch, das bedeutet, dass die Maschine richtig funktioniert!",
                  "nl": "Het sissende geluid komt van de espressomachine die zeer hete stoom en hoge druk gebruikt om water door dicht verpakt koffiedik te persen. Het is een normaal geluid dat betekent dat de machine goed werkt!"
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  }
})();