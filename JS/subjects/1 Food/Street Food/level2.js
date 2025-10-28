// Quiz Level 2: Street Food - Regional Street Food Specialties
(function() {
  "use strict";

  const level2 = {
    name: {
      en: "Regional Street Food Specialties",
      es: "Especialidades Regionales de Comida Callejera",
      de: "Regionale Straßenessen-Spezialitäten",
      nl: "Regionale Straatvoedsel Specialiteiten"
    },
    questions: [
      {
        question: {
          en: "Which country is famous for 'pad thai' as street food?",
          es: "¿Qué país es famoso por el 'pad thai' como comida callejera?",
          de: "Welches Land ist für 'Pad Thai' als Straßenessen berühmt?",
          nl: "Welk land is beroemd om 'pad thai' als straatvoedsel?"
        },
        options: [
          { en: "Japan", es: "Japón", de: "Japan", nl: "Japan" },
          { en: "Thailand", es: "Tailandia", de: "Thailand", nl: "Thailand" },
          { en: "India", es: "India", de: "Indien", nl: "India" },
          { en: "China", es: "China", de: "China", nl: "China" }
        ],
        correct: 1,
        explanation: {
          en: "Pad Thai is Thailand's signature street food dish, consisting of stir-fried rice noodles with eggs, tofu or shrimp, bean sprouts, and a sweet-tangy sauce.",
          es: "El Pad Thai es el plato de comida callejera característico de Tailandia, que consiste en fideos de arroz salteados con huevos, tofu o camarones, brotes de soja y una salsa agridulce.",
          de: "Pad Thai ist Thailands charakteristisches Straßenessen-Gericht, bestehend aus gebratenen Reisnudeln mit Eiern, Tofu oder Garnelen, Bohnensprossen und einer süß-sauren Sauce.",
          nl: "Pad Thai is Thailand's kenmerkende straatvoedsel gerecht, bestaande uit gebakken rijstnoedels met eieren, tofu of garnalen, taugé en een zoet-zure saus."
        }
      },
      {
        question: {
          en: "What is 'churros' and where did it originate?",
          es: "¿Qué son los 'churros' y de dónde se originaron?",
          de: "Was sind 'Churros' und wo haben sie ihren Ursprung?",
          nl: "Wat zijn 'churros' en waar komen ze vandaan?"
        },
        options: [
          { en: "French pastry from Paris", es: "Pastelería francesa de París", de: "Französisches Gebäck aus Paris", nl: "Frans gebak uit Parijs" },
          { en: "Spanish fried dough pastry", es: "Masa frita española", de: "Spanisches frittiertes Teiggebäck", nl: "Spaans gefrituurde deeggebak" },
          { en: "Italian gelato dessert", es: "Postre de gelato italiano", de: "Italienisches Gelato-Dessert", nl: "Italiaans gelato dessert" },
          { en: "German pretzel variation", es: "Variación alemana de pretzel", de: "Deutsche Brezel-Variation", nl: "Duitse pretzel variatie" }
        ],
        correct: 1,
        explanation: {
          en: "Churros are traditional Spanish fried dough pastries, often dusted with sugar and cinnamon, popular as street food throughout Spain and Latin America.",
          es: "Los churros son pasteles tradicionales españoles de masa frita, a menudo espolvoreados con azúcar y canela, populares como comida callejera en España y América Latina.",
          de: "Churros sind traditionelle spanische frittierte Teiggebäcke, oft mit Zucker und Zimt bestäubt, beliebt als Straßenessen in ganz Spanien und Lateinamerika.",
          nl: "Churros zijn traditionele Spaanse gefrituurde deeggebakjes, vaak bestrooid met suiker en kaneel, populair als straatvoedsel in heel Spanje en Latijns-Amerika."
        }
      },
      {
        question: {
          en: "Which Indian street food is a hollow crispy shell filled with spiced water?",
          es: "¿Qué comida callejera india es una cáscara crujiente hueca llena de agua condimentada?",
          de: "Welches indische Straßenessen ist eine hohle knusprige Schale gefüllt mit gewürztem Wasser?",
          nl: "Welk Indiaas straatvoedsel is een holle knapperige schaal gevuld met gekruid water?"
        },
        options: [
          { en: "Samosa", es: "Samosa", de: "Samosa", nl: "Samosa" },
          { en: "Pani puri", es: "Pani puri", de: "Pani Puri", nl: "Pani puri" },
          { en: "Dosa", es: "Dosa", de: "Dosa", nl: "Dosa" },
          { en: "Bhel puri", es: "Bhel puri", de: "Bhel Puri", nl: "Bhel puri" }
        ],
        correct: 1,
        explanation: {
          en: "Pani puri (also called gol gappa or puchka) is a popular Indian street snack consisting of a hollow, crispy fried shell filled with flavored water, tamarind chutney, chili, chaat masala, potato, onion, and chickpeas.",
          es: "El pani puri (también llamado gol gappa o puchka) es un bocadillo callejero indio popular que consiste en una cáscara frita hueca y crujiente llena de agua saborizada, chutney de tamarindo, chile, chaat masala, papa, cebolla y garbanzos.",
          de: "Pani Puri (auch Gol Gappa oder Puchka genannt) ist ein beliebter indischer Straßensnack, bestehend aus einer hohlen, knusprigen frittierten Schale gefüllt mit aromatisiertem Wasser, Tamarinden-Chutney, Chili, Chaat Masala, Kartoffeln, Zwiebeln und Kichererbsen.",
          nl: "Pani puri (ook wel gol gappa of puchka genoemd) is een populaire Indiase straatsnack bestaande uit een holle, knapperige gefrituurde schaal gevuld met gearomatiseerd water, tamarinde chutney, chili, chaat masala, aardappel, ui en kikkererwten."
        }
      },
      {
        question: {
          en: "What is 'takoyaki' and where is it from?",
          es: "¿Qué es 'takoyaki' y de dónde es?",
          de: "Was ist 'Takoyaki' und woher kommt es?",
          nl: "Wat is 'takoyaki' en waar komt het vandaan?"
        },
        options: [
          { en: "Korean rice cake", es: "Pastel de arroz coreano", de: "Koreanischer Reiskuchen", nl: "Koreaanse rijstcake" },
          { en: "Japanese octopus balls from Osaka", es: "Bolas de pulpo japonesas de Osaka", de: "Japanische Oktopus-Bällchen aus Osaka", nl: "Japanse octopus balletjes uit Osaka" },
          { en: "Chinese dumpling", es: "Dumpling chino", de: "Chinesischer Dumpling", nl: "Chinese dumpling" },
          { en: "Thai soup noodles", es: "Fideos de sopa tailandesa", de: "Thailändische Suppennudeln", nl: "Thaise soepnoedels" }
        ],
        correct: 1,
        explanation: {
          en: "Takoyaki are ball-shaped Japanese snacks made of wheat flour batter and filled with diced octopus, originating from Osaka and cooked in a special molded pan.",
          es: "El takoyaki son bocadillos japoneses en forma de bola hechos de masa de harina de trigo y rellenos de pulpo cortado en cubitos, originarios de Osaka y cocinados en una sartén especial moldeada.",
          de: "Takoyaki sind kugelförmige japanische Snacks aus Weizenmehlteig und gefüllt mit gewürfeltem Oktopus, stammen aus Osaka und werden in einer speziellen geformten Pfanne gekocht.",
          nl: "Takoyaki zijn bolvormige Japanse snacks gemaakt van tarwebloem beslag en gevuld met blokjes octopus, afkomstig uit Osaka en gekookt in een speciale gevormde pan."
        }
      },
      {
        question: {
          en: "Which Middle Eastern street food consists of deep-fried chickpea balls?",
          es: "¿Qué comida callejera del Medio Oriente consiste en bolas de garbanzos fritos?",
          de: "Welches nahöstliche Straßenessen besteht aus frittierten Kichererbsen-Bällchen?",
          nl: "Welk Midden-Oosterse straatvoedsel bestaat uit diep gefrituurde kikkererwten balletjes?"
        },
        options: [
          { en: "Hummus", es: "Hummus", de: "Hummus", nl: "Hummus" },
          { en: "Shawarma", es: "Shawarma", de: "Shawarma", nl: "Shawarma" },
          { en: "Falafel", es: "Falafel", de: "Falafel", nl: "Falafel" },
          { en: "Kebab", es: "Kebab", de: "Kebab", nl: "Kebab" }
        ],
        correct: 2,
        explanation: {
          en: "Falafel are deep-fried balls made from ground chickpeas or fava beans, popular throughout the Middle East and often served in pita bread with vegetables and tahini sauce.",
          es: "El falafel son bolas fritas hechas de garbanzos molidos o habas, populares en todo el Medio Oriente y a menudo servidas en pan pita con verduras y salsa tahini.",
          de: "Falafel sind frittierte Bällchen aus gemahlenen Kichererbsen oder Saubohnen, beliebt im gesamten Nahen Osten und oft in Pita-Brot mit Gemüse und Tahini-Sauce serviert.",
          nl: "Falafel zijn diep gefrituurde balletjes gemaakt van gemalen kikkererwten of tuinbonen, populair in het hele Midden-Oosten en vaak geserveerd in pita brood met groenten en tahini saus."
        }
      },
      {
        question: {
          en: "What is 'arepas' and which regions are known for them?",
          es: "¿Qué son las 'arepas' y qué regiones son conocidas por ellas?",
          de: "Was sind 'Arepas' und welche Regionen sind für sie bekannt?",
          nl: "Wat zijn 'arepas' en welke regio's staan er om bekend?"
        },
        options: [
          { en: "European bread rolls", es: "Panecillos europeos", de: "Europäische Brötchen", nl: "Europese broodjes" },
          { en: "Venezuelan and Colombian corn cakes", es: "Tortas de maíz venezolanas y colombianas", de: "Venezolanische und kolumbianische Maiskuchen", nl: "Venezolaanse en Colombiaanse maïskoeken" },
          { en: "Mexican tortillas", es: "Tortillas mexicanas", de: "Mexikanische Tortillas", nl: "Mexicaanse tortillas" },
          { en: "Argentine empanadas", es: "Empanadas argentinas", de: "Argentinische Empanadas", nl: "Argentijnse empanadas" }
        ],
        correct: 1,
        explanation: {
          en: "Arepas are round, flat corn cakes popular in Venezuela and Colombia, often split open and stuffed with various fillings like cheese, meat, or beans.",
          es: "Las arepas son tortas de maíz redondas y planas populares en Venezuela y Colombia, a menudo abiertas y rellenas con varios ingredientes como queso, carne o frijoles.",
          de: "Arepas sind runde, flache Maiskuchen, die in Venezuela und Kolumbien beliebt sind, oft aufgeschnitten und mit verschiedenen Füllungen wie Käse, Fleisch oder Bohnen gefüllt.",
          nl: "Arepas zijn ronde, platte maïskoeken populair in Venezuela en Colombia, vaak opengesplitst en gevuld met verschillende vullingen zoals kaas, vlees of bonen."
        }
      },
      {
        question: {
          en: "Which German street food is a currywurst?",
          es: "¿Qué comida callejera alemana es un currywurst?",
          de: "Welches deutsche Straßenessen ist eine Currywurst?",
          nl: "Welk Duits straatvoedsel is een currywurst?"
        },
        options: [
          { en: "Grilled bratwurst with curry ketchup", es: "Bratwurst a la parrilla con ketchup de curry", de: "Gegrillte Bratwurst mit Curry-Ketchup", nl: "Gegrilde bratwurst met curry ketchup" },
          { en: "Indian curry dish", es: "Plato de curry indio", de: "Indisches Curry-Gericht", nl: "Indiaas curry gerecht" },
          { en: "Turkish döner kebab", es: "Döner kebab turco", de: "Türkischer Döner Kebab", nl: "Turkse döner kebab" },
          { en: "Austrian schnitzel", es: "Schnitzel austriaco", de: "Österreichisches Schnitzel", nl: "Oostenrijkse schnitzel" }
        ],
        correct: 0,
        explanation: {
          en: "Currywurst is a popular German street food consisting of sliced bratwurst covered in curry ketchup and sprinkled with curry powder, invented in Berlin in 1949.",
          es: "El currywurst es una comida callejera alemana popular que consiste en bratwurst rebanada cubierta con ketchup de curry y espolvoreada con polvo de curry, inventada en Berlín en 1949.",
          de: "Currywurst ist ein beliebtes deutsches Straßenessen aus geschnittener Bratwurst mit Curry-Ketchup und Currypulver, 1949 in Berlin erfunden.",
          nl: "Currywurst is een populair Duits straatvoedsel bestaande uit gesneden bratwurst bedekt met curry ketchup en bestrooid met curry poeder, uitgevonden in Berlijn in 1949."
        }
      },
      {
        question: {
          en: "What is 'bánh mì' and from which country does it originate?",
          es: "¿Qué es 'bánh mì' y de qué país se origina?",
          de: "Was ist 'Bánh Mì' und aus welchem Land stammt es?",
          nl: "Wat is 'bánh mì' en uit welk land komt het?"
        },
        options: [
          { en: "Vietnamese sandwich in French baguette", es: "Sándwich vietnamita en baguette francesa", de: "Vietnamesisches Sandwich in französischem Baguette", nl: "Vietnamese sandwich in Franse baguette" },
          { en: "Chinese spring roll", es: "Rollo de primavera chino", de: "Chinesische Frühlingsrolle", nl: "Chinese loempia" },
          { en: "Korean rice bowl", es: "Tazón de arroz coreano", de: "Koreanische Reisschale", nl: "Koreaanse rijstkom" },
          { en: "Japanese noodle soup", es: "Sopa de fideos japonesa", de: "Japanische Nudelsuppe", nl: "Japanse noedelsoep" }
        ],
        correct: 0,
        explanation: {
          en: "Bánh mì is a Vietnamese sandwich made with a French baguette filled with various ingredients like pork, pâté, pickled vegetables, and herbs, reflecting Vietnam's colonial history.",
          es: "El bánh mì es un sándwich vietnamita hecho con una baguette francesa rellena de varios ingredientes como cerdo, paté, verduras encurtidas y hierbas, reflejando la historia colonial de Vietnam.",
          de: "Bánh Mì ist ein vietnamesisches Sandwich aus einem französischen Baguette gefüllt mit verschiedenen Zutaten wie Schweinefleisch, Pastete, eingelegtem Gemüse und Kräutern, das Vietnams Kolonialgeschichte widerspiegelt.",
          nl: "Bánh mì is een Vietnamese sandwich gemaakt met een Franse baguette gevuld met verschillende ingrediënten zoals varkensvlees, paté, ingelegde groenten en kruiden, wat Vietnam's koloniale geschiedenis weergeeft."
        }
      },
      {
        question: {
          en: "Which Turkish street food consists of meat cooked on a vertical rotisserie?",
          es: "¿Qué comida callejera turca consiste en carne cocinada en un asador vertical?",
          de: "Welches türkische Straßenessen besteht aus Fleisch, das an einem vertikalen Drehspießgegrillt wird?",
          nl: "Welk Turks straatvoedsel bestaat uit vlees gekookt op een verticale grillspit?"
        },
        options: [
          { en: "Kebab", es: "Kebab", de: "Kebab", nl: "Kebab" },
          { en: "Döner", es: "Döner", de: "Döner", nl: "Döner" },
          { en: "Lahmacun", es: "Lahmacun", de: "Lahmacun", nl: "Lahmacun" },
          { en: "Pide", es: "Pide", de: "Pide", nl: "Pide" }
        ],
        correct: 1,
        explanation: {
          en: "Döner kebab is Turkish street food where seasoned meat is cooked on a vertical rotisserie and carved off in thin slices, typically served in pita bread or lavash with vegetables and sauce.",
          es: "El döner kebab es comida callejera turca donde la carne condimentada se cocina en un asador vertical y se corta en rebanadas delgadas, típicamente servida en pan pita o lavash con verduras y salsa.",
          de: "Döner Kebab ist türkisches Straßenessen, bei dem gewürztes Fleisch an einem vertikalen Drehspieß gekocht und in dünnen Scheiben abgeschnitten wird, normalerweise in Pita-Brot oder Lavash mit Gemüse und Sauce serviert.",
          nl: "Döner kebab is Turks straatvoedsel waarbij gekruid vlees wordt gekookt op een verticale grillspit en in dunne plakjes wordt gesneden, meestal geserveerd in pita brood of lavash met groenten en saus."
        }
      },
      {
        question: {
          en: "What is 'elote' and where is it popular?",
          es: "¿Qué es 'elote' y dónde es popular?",
          de: "Was ist 'Elote' und wo ist es beliebt?",
          nl: "Wat is 'elote' en waar is het populair?"
        },
        options: [
          { en: "Brazilian grilled meat", es: "Carne asada brasileña", de: "Brasilianisches Grillfleisch", nl: "Braziliaans gegrild vlees" },
          { en: "Mexican grilled corn on the cob", es: "Maíz asado mexicano en la mazorca", de: "Mexikanischer gegrillter Maiskolben", nl: "Mexicaanse gegrilde maïskolf" },
          { en: "Peruvian seafood dish", es: "Plato de mariscos peruano", de: "Peruanisches Meeresfrüchte-Gericht", nl: "Peruaans zeevruchten gerecht" },
          { en: "Chilean empanada", es: "Empanada chilena", de: "Chilenische Empanada", nl: "Chileense empanada" }
        ],
        correct: 1,
        explanation: {
          en: "Elote is Mexican street corn, typically grilled corn on the cob covered with mayonnaise, cotija cheese, chili powder, and lime juice, popular throughout Mexico and Mexican communities.",
          es: "El elote es maíz callejero mexicano, típicamente maíz asado en la mazorca cubierto con mayonesa, queso cotija, chile en polvo y jugo de limón, popular en todo México y comunidades mexicanas.",
          de: "Elote ist mexikanischer Straßenmais, normalerweise gegrillter Maiskolben bedeckt mit Mayonnaise, Cotija-Käse, Chilipulver und Limettensaft, beliebt in ganz Mexiko und mexikanischen Gemeinden.",
          nl: "Elote is Mexicaanse straatmaïs, meestal gegrilde maïskolf bedekt met mayonaise, cotija kaas, chilipoeder en limoensap, populair in heel Mexico en Mexicaanse gemeenschappen."
        }
      },
      {
        question: {
          en: "Which Italian street food is a folded pizza from Naples?",
          es: "¿Qué comida callejera italiana es una pizza doblada de Nápoles?",
          de: "Welches italienische Straßenessen ist eine gefaltete Pizza aus Neapel?",
          nl: "Welk Italiaans straatvoedsel is een gevouwen pizza uit Napels?"
        },
        options: [
          { en: "Calzone", es: "Calzone", de: "Calzone", nl: "Calzone" },
          { en: "Focaccia", es: "Focaccia", de: "Focaccia", nl: "Focaccia" },
          { en: "Stromboli", es: "Stromboli", de: "Stromboli", nl: "Stromboli" },
          { en: "Panettone", es: "Panettone", de: "Panettone", nl: "Panettone" }
        ],
        correct: 0,
        explanation: {
          en: "Calzone is an Italian oven-baked folded pizza originating in Naples, typically filled with ricotta, mozzarella, and other ingredients, served as convenient street food.",
          es: "El calzone es una pizza italiana doblada y horneada originaria de Nápoles, típicamente rellena con ricotta, mozzarella y otros ingredientes, servida como comida callejera conveniente.",
          de: "Calzone ist eine italienische im Ofen gebackene gefaltete Pizza aus Neapel, normalerweise gefüllt mit Ricotta, Mozzarella und anderen Zutaten, serviert als bequemes Straßenessen.",
          nl: "Calzone is een Italiaanse in de oven gebakken gevouwen pizza afkomstig uit Napels, meestal gevuld met ricotta, mozzarella en andere ingrediënten, geserveerd als handig straatvoedsel."
        }
      },
      {
        question: {
          en: "What is 'bunny chow' and where is it from?",
          es: "¿Qué es 'bunny chow' y de dónde es?",
          de: "Was ist 'Bunny Chow' und woher kommt es?",
          nl: "Wat is 'bunny chow' en waar komt het vandaan?"
        },
        options: [
          { en: "Australian meat pie", es: "Pastel de carne australiano", de: "Australischer Fleischkuchen", nl: "Australische vleespastei" },
          { en: "South African curry served in hollowed bread", es: "Curry sudafricano servido en pan ahuecado", de: "Südafrikanisches Curry serviert in ausgehöhltem Brot", nl: "Zuid-Afrikaanse curry geserveerd in uitgehold brood" },
          { en: "Canadian poutine variation", es: "Variación canadiense de poutine", de: "Kanadische Poutine-Variation", nl: "Canadese poutine variatie" },
          { en: "New Zealand fish and chips", es: "Fish and chips de Nueva Zelanda", de: "Neuseeländische Fish and Chips", nl: "Nieuw-Zeelandse fish and chips" }
        ],
        correct: 1,
        explanation: {
          en: "Bunny chow is a South African street food consisting of a hollowed-out loaf of bread filled with curry, originating in the Indian community of Durban during apartheid.",
          es: "El bunny chow es una comida callejera sudafricana que consiste en una hogaza de pan ahuecada rellena de curry, originaria de la comunidad india de Durban durante el apartheid.",
          de: "Bunny Chow ist ein südafrikanisches Straßenessen aus einem ausgehöhlten Brotlaib gefüllt mit Curry, entstanden in der indischen Gemeinde von Durban während der Apartheid.",
          nl: "Bunny chow is een Zuid-Afrikaans straatvoedsel bestaande uit een uitgehold brood gevuld met curry, ontstaan in de Indiase gemeenschap van Durban tijdens de apartheid."
        }
      },
      {
        question: {
          en: "Which Filipino street food consists of a duck embryo?",
          es: "¿Qué comida callejera filipina consiste en un embrión de pato?",
          de: "Welches philippinische Straßenessen besteht aus einem Entenembryo?",
          nl: "Welk Filipijns straatvoedsel bestaat uit een eendenembryio?"
        },
        options: [
          { en: "Lumpia", es: "Lumpia", de: "Lumpia", nl: "Lumpia" },
          { en: "Balut", es: "Balut", de: "Balut", nl: "Balut" },
          { en: "Adobo", es: "Adobo", de: "Adobo", nl: "Adobo" },
          { en: "Sisig", es: "Sisig", de: "Sisig", nl: "Sisig" }
        ],
        correct: 1,
        explanation: {
          en: "Balut is a Filipino street food delicacy consisting of a partially developed duck embryo boiled and eaten from the shell, considered a traditional snack and aphrodisiac.",
          es: "El balut es una delicadeza de comida callejera filipina que consiste en un embrión de pato parcialmente desarrollado hervido y comido de la cáscara, considerado un bocadillo tradicional y afrodisíaco.",
          de: "Balut ist eine philippinische Straßenessen-Delikatesse bestehend aus einem teilweise entwickelten Entenembryo, gekocht und aus der Schale gegessen, gilt als traditioneller Snack und Aphrodisiakum.",
          nl: "Balut is een Filipijnse straatvoedsel delicatesse bestaande uit een gedeeltelijk ontwikkeld eendenembryio gekookt en gegeten uit de schaal, beschouwd als een traditionele snack en afrodisiacum."
        }
      },
      {
        question: {
          en: "What is 'jianbing' and where is it popular?",
          es: "¿Qué es 'jianbing' y dónde es popular?",
          de: "Was ist 'Jianbing' und wo ist es beliebt?",
          nl: "Wat is 'jianbing' en waar is het populair?"
        },
        options: [
          { en: "Korean pancake", es: "Panqueque coreano", de: "Koreanischer Pfannkuchen", nl: "Koreaanse pannenkoek" },
          { en: "Chinese savory crepe", es: "Crepe salado chino", de: "Chinesischer herzhafter Crêpe", nl: "Chinese hartige crêpe" },
          { en: "Japanese okonomiyaki", es: "Okonomiyaki japonés", de: "Japanisches Okonomiyaki", nl: "Japanse okonomiyaki" },
          { en: "Thai roti", es: "Roti tailandés", de: "Thailändisches Roti", nl: "Thaise roti" }
        ],
        correct: 1,
        explanation: {
          en: "Jianbing is a traditional Chinese street breakfast food consisting of a thin savory crepe filled with egg, scallions, cilantro, and various sauces, popular throughout China.",
          es: "El jianbing es una comida callejera china tradicional del desayuno que consiste en un crepe salado delgado relleno con huevo, cebolletas, cilantro y varias salsas, popular en toda China.",
          de: "Jianbing ist ein traditionelles chinesisches Straßenfrühstück bestehend aus einem dünnen herzhaften Crêpe gefüllt mit Ei, Frühlingszwiebeln, Koriander und verschiedenen Saucen, beliebt in ganz China.",
          nl: "Jianbing is een traditioneel Chinees straatontbijt bestaande uit een dunne hartige crêpe gevuld met ei, lente-uitjes, koriander en verschillende sauzen, populair in heel China."
        }
      },
      {
        question: {
          en: "Which Mexican street food is a thick tortilla topped with beans and meat?",
          es: "¿Qué comida callejera mexicana es una tortilla gruesa cubierta con frijoles y carne?",
          de: "Welches mexikanische Straßenessen ist eine dicke Tortilla belegt mit Bohnen und Fleisch?",
          nl: "Welk Mexicaans straatvoedsel is een dikke tortilla belegd met bonen en vlees?"
        },
        options: [
          { en: "Quesadilla", es: "Quesadilla", de: "Quesadilla", nl: "Quesadilla" },
          { en: "Sope", es: "Sope", de: "Sope", nl: "Sope" },
          { en: "Enchilada", es: "Enchilada", de: "Enchilada", nl: "Enchilada" },
          { en: "Burrito", es: "Burrito", de: "Burrito", nl: "Burrito" }
        ],
        correct: 1,
        explanation: {
          en: "Sopes are thick, round Mexican corn tortillas with raised edges, typically topped with refried beans, meat, lettuce, cheese, and salsa, popular as street food snacks.",
          es: "Los sopes son tortillas gruesas y redondas de maíz mexicanas con bordes elevados, típicamente cubiertas con frijoles refritos, carne, lechuga, queso y salsa, populares como bocadillos de comida callejera.",
          de: "Sopes sind dicke, runde mexikanische Maistortillas mit erhöhten Rändern, normalerweise belegt mit Bohnenmus, Fleisch, Salat, Käse und Salsa, beliebt als Straßenessen-Snacks.",
          nl: "Sopes zijn dikke, ronde Mexicaanse maïstortillas met verhoogde randen, meestal belegd met gefrituurde bonen, vlees, sla, kaas en salsa, populair als straatvoedsel snacks."
        }
      },
      {
        question: {
          en: "What is 'borscht' and in which regions is it popular as street food?",
          es: "¿Qué es 'borscht' y en qué regiones es popular como comida callejera?",
          de: "Was ist 'Borschtsch' und in welchen Regionen ist es als Straßenessen beliebt?",
          nl: "Wat is 'borscht' en in welke regio's is het populair als straatvoedsel?"
        },
        options: [
          { en: "Italian tomato soup", es: "Sopa de tomate italiana", de: "Italienische Tomatensuppe", nl: "Italiaanse tomatensoep" },
          { en: "Eastern European beetroot soup", es: "Sopa de remolacha de Europa del Este", de: "Osteuropäische Rote-Bete-Suppe", nl: "Oost-Europese bietensoep" },
          { en: "French onion soup", es: "Sopa francesa de cebolla", de: "Französische Zwiebelsuppe", nl: "Franse uiensoep" },
          { en: "German cabbage soup", es: "Sopa alemana de repollo", de: "Deutsche Kohlsuppe", nl: "Duitse koolsoep" }
        ],
        correct: 1,
        explanation: {
          en: "Borscht is a sour soup popular in Eastern European cuisines, made primarily from beetroot, often served hot or cold by street vendors in countries like Ukraine, Russia, and Poland.",
          es: "El borscht es una sopa agria popular en las cocinas de Europa del Este, hecha principalmente de remolacha, a menudo servida caliente o fría por vendedores callejeros en países como Ucrania, Rusia y Polonia.",
          de: "Borschtsch ist eine saure Suppe, die in osteuropäischen Küchen beliebt ist, hauptsächlich aus Roter Bete gemacht, oft heiß oder kalt von Straßenhändlern in Ländern wie der Ukraine, Russland und Polen serviert.",
          nl: "Borscht is een zure soep populair in Oost-Europese keukens, voornamelijk gemaakt van bieten, vaak warm of koud geserveerd door straatverkopers in landen zoals Oekraïne, Rusland en Polen."
        }
      },
      {
        question: {
          en: "Which street food represents the fusion of cultures in Peru?",
          es: "¿Qué comida callejera representa la fusión de culturas en Perú?",
          de: "Welches Straßenessen repräsentiert die Verschmelzung von Kulturen in Peru?",
          nl: "Welk straatvoedsel vertegenwoordigt de fusie van culturen in Peru?"
        },
        options: [
          { en: "Traditional ceviche only", es: "Solo ceviche tradicional", de: "Nur traditionelles Ceviche", nl: "Alleen traditionele ceviche" },
          { en: "Chifa (Chinese-Peruvian fusion)", es: "Chifa (fusión chino-peruana)", de: "Chifa (chinesisch-peruanische Fusion)", nl: "Chifa (Chinees-Peruaanse fusie)" },
          { en: "European pastries only", es: "Solo pasteles europeos", de: "Nur europäische Gebäcke", nl: "Alleen Europese gebakjes" },
          { en: "Pure indigenous foods", es: "Alimentos puramente indígenas", de: "Rein indigene Lebensmittel", nl: "Puur inheemse voedingsmiddelen" }
        ],
        correct: 1,
        explanation: {
          en: "Chifa represents the Chinese-Peruvian fusion cuisine that emerged from Chinese immigration to Peru, creating unique dishes like lomo saltado that blend Chinese cooking techniques with Peruvian ingredients.",
          es: "Chifa representa la cocina de fusión chino-peruana que surgió de la inmigración china a Perú, creando platos únicos como el lomo saltado que mezclan técnicas de cocina china con ingredientes peruanos.",
          de: "Chifa repräsentiert die chinesisch-peruanische Fusionsküche, die aus der chinesischen Einwanderung nach Peru entstand und einzigartige Gerichte wie Lomo Saltado schuf, die chinesische Kochtechniken mit peruanischen Zutaten verbinden.",
          nl: "Chifa vertegenwoordigt de Chinees-Peruaanse fusiekeuken die ontstond uit Chinese immigratie naar Peru, waardoor unieke gerechten zoals lomo saltado ontstonden die Chinese kooktechnieken combineren met Peruaanse ingrediënten."
        }
      },
      {
        question: {
          en: "What distinguishes regional street food from global chains?",
          es: "¿Qué distingue la comida callejera regional de las cadenas globales?",
          de: "Was unterscheidet regionales Straßenessen von globalen Ketten?",
          nl: "Wat onderscheidt regionaal straatvoedsel van mondiale ketens?"
        },
        options: [
          { en: "Higher prices and formal service", es: "Precios más altos y servicio formal", de: "Höhere Preise und formeller Service", nl: "Hogere prijzen en formele service" },
          { en: "Local ingredients, traditional recipes, and cultural significance", es: "Ingredientes locales, recetas tradicionales y significado cultural", de: "Lokale Zutaten, traditionelle Rezepte und kulturelle Bedeutung", nl: "Lokale ingrediënten, traditionele recepten en culturele betekenis" },
          { en: "Standardized menus worldwide", es: "Menús estandarizados mundialmente", de: "Weltweit standardisierte Menüs", nl: "Wereldwijd gestandaardiseerde menu's" },
          { en: "Corporate branding and advertising", es: "Marca corporativa y publicidad", de: "Unternehmens-Branding und Werbung", nl: "Corporate branding en reclame" }
        ],
        correct: 1,
        explanation: {
          en: "Regional street food is distinguished by its use of local ingredients, traditional preparation methods passed down through generations, and deep cultural significance within specific communities.",
          es: "La comida callejera regional se distingue por su uso de ingredientes locales, métodos de preparación tradicionales transmitidos a través de generaciones, y profundo significado cultural dentro de comunidades específicas.",
          de: "Regionales Straßenessen zeichnet sich durch die Verwendung lokaler Zutaten, traditioneller Zubereitungsmethoden, die über Generationen weitergegeben wurden, und tiefe kulturelle Bedeutung in spezifischen Gemeinschaften aus.",
          nl: "Regionaal straatvoedsel onderscheidt zich door het gebruik van lokale ingrediënten, traditionele bereidingsmethoden doorgegeven door generaties, en diepe culturele betekenis binnen specifieke gemeenschappen."
        }
      },
      {
        question: {
          en: "Which country is famous for 'pad thai' as street food?",
          es: "¿Qué país es famoso por el 'pad thai' como comida callejera?",
          de: "Welches Land ist für 'Pad Thai' als Straßenessen berühmt?",
          nl: "Welk land is beroemd om 'pad thai' als straatvoedsel?"
        },
        options: [
          { en: "Japan", es: "Japón", de: "Japan", nl: "Japan" },
          { en: "Thailand", es: "Tailandia", de: "Thailand", nl: "Thailand" },
          { en: "India", es: "India", de: "Indien", nl: "India" },
          { en: "China", es: "China", de: "China", nl: "China" }
        ],
        correct: 1,
        explanation: {
          en: "Pad Thai is Thailand's signature street food dish, consisting of stir-fried rice noodles with eggs, tofu or shrimp, bean sprouts, and a sweet-tangy sauce.",
          es: "El Pad Thai es el plato de comida callejera característico de Tailandia, que consiste en fideos de arroz salteados con huevos, tofu o camarones, brotes de soja y una salsa agridulce.",
          de: "Pad Thai ist Thailands charakteristisches Straßenessen-Gericht, bestehend aus gebratenen Reisnudeln mit Eiern, Tofu oder Garnelen, Bohnensprossen und einer süß-sauren Sauce.",
          nl: "Pad Thai is Thailand's kenmerkende straatvoedsel gerecht, bestaande uit gebakken rijstnoedels met eieren, tofu of garnalen, taugé en een zoet-zure saus."
        }
      },
      {
        question: {
          en: "What is 'churros' and where did it originate?",
          es: "¿Qué son los 'churros' y de dónde se originaron?",
          de: "Was sind 'Churros' und wo haben sie ihren Ursprung?",
          nl: "Wat zijn 'churros' en waar komen ze vandaan?"
        },
        options: [
          { en: "French pastry from Paris", es: "Pastelería francesa de París", de: "Französisches Gebäck aus Paris", nl: "Frans gebak uit Parijs" },
          { en: "Spanish fried dough pastry", es: "Masa frita española", de: "Spanisches frittiertes Teiggebäck", nl: "Spaans gefrituurde deeggebak" },
          { en: "Italian gelato dessert", es: "Postre de gelato italiano", de: "Italienisches Gelato-Dessert", nl: "Italiaans gelato dessert" },
          { en: "German pretzel variation", es: "Variación alemana de pretzel", de: "Deutsche Brezel-Variation", nl: "Duitse pretzel variatie" }
        ],
        correct: 1,
        explanation: {
          en: "Churros are traditional Spanish fried dough pastries, often dusted with sugar and cinnamon, popular as street food throughout Spain and Latin America.",
          es: "Los churros son pasteles tradicionales españoles de masa frita, a menudo espolvoreados con azúcar y canela, populares como comida callejera en España y América Latina.",
          de: "Churros sind traditionelle spanische frittierte Teiggebäcke, oft mit Zucker und Zimt bestäubt, beliebt als Straßenessen in ganz Spanien und Lateinamerika.",
          nl: "Churros zijn traditionele Spaanse gefrituurde deeggebakjes, vaak bestrooid met suiker en kaneel, populair als straatvoedsel in heel Spanje en Latijns-Amerika."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  }

  return level2;
})();