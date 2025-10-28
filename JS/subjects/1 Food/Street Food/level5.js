// Quiz Level 5: Street Food - European Street Food Traditions
(function() {
  "use strict";

  const level5 = {
    name: {
      en: "European Street Food Traditions",
      es: "Tradiciones Europeas de Comida Callejera",
      de: "Europäische Straßenessen-Traditionen",
      nl: "Europese Straatvoedsel Tradities"
    },
    questions: [
      {
        question: {
          en: "Which British street food is fish and chips traditionally wrapped in?",
          es: "¿En qué se envuelve tradicionalmente el fish and chips británico?",
          de: "In was wird Fish and Chips traditionell in Großbritannien eingewickelt?",
          nl: "In wat wordt fish and chips traditioneel in Groot-Brittannië verpakt?"
        },
        options: [
          { en: "Plastic containers", es: "Envases de plástico", de: "Plastikbehälter", nl: "Plastic bakjes" },
          { en: "Newspaper (historically)", es: "Periódico (históricamente)", de: "Zeitung (historisch)", nl: "Krant (historisch)" },
          { en: "Aluminum foil", es: "Papel de aluminio", de: "Aluminiumfolie", nl: "Aluminiumfolie" },
          { en: "Paper plates", es: "Platos de papel", de: "Pappteller", nl: "Papieren borden" }
        ],
        correct: 1,
        explanation: {
          en: "Traditionally, British fish and chips were wrapped in newspaper, which kept them warm and was readily available. Modern vendors now use food-safe paper for hygiene reasons.",
          es: "Tradicionalmente, el fish and chips británico se envolvía en periódico, lo que los mantenía calientes y estaba fácilmente disponible. Los vendedores modernos ahora usan papel seguro para alimentos por razones de higiene.",
          de: "Traditionell wurde britisches Fish and Chips in Zeitung eingewickelt, was sie warm hielt und leicht verfügbar war. Moderne Verkäufer verwenden jetzt lebensmittelsicheres Papier aus hygienischen Gründen.",
          nl: "Traditioneel werd Britse fish and chips verpakt in krant, wat ze warm hield en gemakkelijk beschikbaar was. Moderne verkopers gebruiken nu voedselveilig papier om hygiënische redenen."
        }
      },
      {
        question: {
          en: "What is the traditional German street food 'leberkäse'?",
          es: "¿Qué es el 'leberkäse' tradicional alemán de comida callejera?",
          de: "Was ist der traditionelle deutsche Straßensnack 'Leberkäse'?",
          nl: "Wat is de traditionele Duitse straatvoedsel 'leberkäse'?"
        },
        options: [
          { en: "A type of liver cheese", es: "Un tipo de queso de hígado", de: "Eine Art Leberkäse", nl: "Een soort leverkaas" },
          { en: "Baked meat loaf (contains no liver or cheese)", es: "Pan de carne horneado (no contiene hígado ni queso)", de: "Gebackener Fleischkäse (enthält weder Leber noch Käse)", nl: "Gebakken gehaktbrood (bevat geen lever of kaas)" },
          { en: "Vegetable soup", es: "Sopa de verduras", de: "Gemüsesuppe", nl: "Groentesoep" },
          { en: "Sweet pastry", es: "Pastelería dulce", de: "Süßes Gebäck", nl: "Zoet gebak" }
        ],
        correct: 1,
        explanation: {
          en: "Despite its name, Leberkäse is a baked meat loaf made from finely ground corned beef, pork, and bacon, containing neither liver nor cheese. It's served hot in slices, often in a roll.",
          es: "A pesar de su nombre, Leberkäse es un pan de carne horneado hecho de carne en conserva finamente molida, cerdo y tocino, que no contiene hígado ni queso. Se sirve caliente en rebanadas, a menudo en un panecillo.",
          de: "Trotz seines Namens ist Leberkäse ein gebackener Fleischkäse aus fein gehacktem Rindfleisch, Schweinefleisch und Speck, der weder Leber noch Käse enthält. Er wird heiß in Scheiben serviert, oft im Brötchen.",
          nl: "Ondanks de naam is Leberkäse een gebakken gehaktbrood gemaakt van fijn gehakt rundvlees, varkensvlees en spek, dat noch lever noch kaas bevat. Het wordt warm geserveerd in plakjes, vaak op een broodje."
        }
      },
      {
        question: {
          en: "Which French street food consists of a long sandwich filled with various ingredients?",
          es: "¿Qué comida callejera francesa consiste en un sándwich largo relleno de varios ingredientes?",
          de: "Welches französische Straßenessen besteht aus einem langen Sandwich gefüllt mit verschiedenen Zutaten?",
          nl: "Welk Frans straatvoedsel bestaat uit een lange sandwich gevuld met verschillende ingrediënten?"
        },
        options: [
          { en: "Croissant", es: "Croissant", de: "Croissant", nl: "Croissant" },
          { en: "Baguette sandwich/jambon-beurre", es: "Sándwich de baguette/jambon-beurre", de: "Baguette-Sandwich/Jambon-Beurre", nl: "Baguette sandwich/jambon-beurre" },
          { en: "Éclair", es: "Éclair", de: "Éclair", nl: "Éclair" },
          { en: "Tarte tatin", es: "Tarte tatin", de: "Tarte Tatin", nl: "Tarte tatin" }
        ],
        correct: 1,
        explanation: {
          en: "The jambon-beurre (ham and butter baguette) is France's most popular sandwich, made with a crispy baguette filled with ham, butter, and sometimes cheese, sold at bakeries and street vendors.",
          es: "El jambon-beurre (baguette de jamón y mantequilla) es el sándwich más popular de Francia, hecho con una baguette crujiente rellena de jamón, mantequilla y a veces queso, vendido en panaderías y vendedores callejeros.",
          de: "Das Jambon-Beurre (Schinken-Butter-Baguette) ist Frankreichs beliebtestes Sandwich, hergestellt mit einem knusprigen Baguette gefüllt mit Schinken, Butter und manchmal Käse, verkauft in Bäckereien und von Straßenhändlern.",
          nl: "De jambon-beurre (ham en boter baguette) is Frankrijk's populairste sandwich, gemaakt met een knapperige baguette gevuld met ham, boter en soms kaas, verkocht bij bakkerijen en straatverkopers."
        }
      },
      {
        question: {
          en: "What is 'porchetta' and from which Italian region does it originate?",
          es: "¿Qué es 'porchetta' y de qué región italiana se origina?",
          de: "Was ist 'Porchetta' und aus welcher italienischen Region stammt es?",
          nl: "Wat is 'porchetta' en uit welke Italiaanse regio komt het?"
        },
        options: [
          { en: "Roman-style roasted pork", es: "Cerdo asado estilo romano", de: "Römisch gebratenes Schweinefleisch", nl: "Romeins geroosterd varkensvlees" },
          { en: "Neapolitan pizza", es: "Pizza napolitana", de: "Neapolitanische Pizza", nl: "Napolitaanse pizza" },
          { en: "Venetian seafood dish", es: "Plato de mariscos veneciano", de: "Venezianisches Meeresfrüchte-Gericht", nl: "Venetiaans zeevruchten gerecht" },
          { en: "Tuscan soup", es: "Sopa toscana", de: "Toskanische Suppe", nl: "Toscaanse soep" }
        ],
        correct: 0,
        explanation: {
          en: "Porchetta is a traditional Roman street food consisting of a whole deboned pig seasoned with herbs like rosemary and fennel, slow-roasted and served in slices, often in a sandwich.",
          es: "Porchetta es una comida callejera tradicional romana que consiste en un cerdo entero deshuesado condimentado con hierbas como romero e hinojo, asado lentamente y servido en rebanadas, a menudo en un sándwich.",
          de: "Porchetta ist ein traditionelles römisches Straßenessen bestehend aus einem ganzen entbeinten Schwein, gewürzt mit Kräutern wie Rosmarin und Fenchel, langsam geröstet und in Scheiben serviert, oft im Sandwich.",
          nl: "Porchetta is een traditioneel Romeins straatvoedsel bestaande uit een heel uitgebeend varken gekruid met kruiden zoals rozemarijn en venkel, langzaam geroosterd en geserveerd in plakjes, vaak in een sandwich."
        }
      },
      {
        question: {
          en: "Which Scandinavian street food consists of hot dogs with various toppings?",
          es: "¿Qué comida callejera escandinava consiste en hot dogs con varios ingredientes?",
          de: "Welches skandinavische Straßenessen besteht aus Hot Dogs mit verschiedenen Belägen?",
          nl: "Welk Scandinavisch straatvoedsel bestaat uit hotdogs met verschillende toppings?"
        },
        options: [
          { en: "Smörgåsbord", es: "Smörgåsbord", de: "Smörgåsbord", nl: "Smörgåsbord" },
          { en: "Pølse (Danish hot dog)", es: "Pølse (hot dog danés)", de: "Pölse (dänischer Hot Dog)", nl: "Pølse (Deense hotdog)" },
          { en: "Gravlax", es: "Gravlax", de: "Gravlax", nl: "Gravlax" },
          { en: "Lefse", es: "Lefse", de: "Lefse", nl: "Lefse" }
        ],
        correct: 1,
        explanation: {
          en: "Pølse is the Danish hot dog, typically served with remoulade, mustard, ketchup, crispy onions, and pickles. Danish hot dog stands are iconic street food vendors throughout Denmark.",
          es: "Pølse es el hot dog danés, típicamente servido con remoulade, mostaza, ketchup, cebollas crujientes y pepinillos. Los puestos de hot dogs daneses son vendedores icónicos de comida callejera en toda Dinamarca.",
          de: "Pölse ist der dänische Hot Dog, normalerweise serviert mit Remoulade, Senf, Ketchup, knusprigen Zwiebeln und Essiggurken. Dänische Hot-Dog-Stände sind ikonische Straßenessen-Verkäufer in ganz Dänemark.",
          nl: "Pølse is de Deense hotdog, meestal geserveerd met remoulade, mosterd, ketchup, knapperige uien en augurken. Deense hotdog kraampjes zijn iconische straatvoedselverkopers door heel Denemarken."
        }
      },
      {
        question: {
          en: "What is 'gyros' and from which European country does it originate?",
          es: "¿Qué es 'gyros' y de qué país europeo se origina?",
          de: "Was ist 'Gyros' und aus welchem europäischen Land stammt es?",
          nl: "Wat is 'gyros' en uit welk Europees land komt het?"
        },
        options: [
          { en: "Greek rotisserie meat in pita", es: "Carne griega de asador en pita", de: "Griechisches Grillfleisch im Pita", nl: "Grieks grill vlees in pita" },
          { en: "Italian pasta dish", es: "Plato de pasta italiana", de: "Italienisches Nudelgericht", nl: "Italiaans pasta gerecht" },
          { en: "Spanish tapas", es: "Tapas españolas", de: "Spanische Tapas", nl: "Spaanse tapas" },
          { en: "French crepe", es: "Crepe francesa", de: "Französischer Crêpe", nl: "Franse crêpe" }
        ],
        correct: 0,
        explanation: {
          en: "Gyros is Greek street food consisting of meat cooked on a vertical rotisserie, served in pita bread with tomatoes, onions, and tzatziki sauce, similar to Turkish döner kebab.",
          es: "Gyros es comida callejera griega que consiste en carne cocida en un asador vertical, servida en pan pita con tomates, cebollas y salsa tzatziki, similar al döner kebab turco.",
          de: "Gyros ist griechisches Straßenessen bestehend aus Fleisch, das an einem vertikalen Drehspieß gekocht wird, serviert im Pita-Brot mit Tomaten, Zwiebeln und Tzatziki-Sauce, ähnlich dem türkischen Döner Kebab.",
          nl: "Gyros is Grieks straatvoedsel bestaande uit vlees gekookt op een verticale grillspit, geserveerd in pita brood met tomaten, uien en tzatziki saus, vergelijkbaar met Turkse döner kebab."
        }
      },
      {
        question: {
          en: "Which traditional Belgian street food is served in paper cones?",
          es: "¿Qué comida callejera tradicional belga se sirve en conos de papel?",
          de: "Welches traditionelle belgische Straßenessen wird in Papiertüten serviert?",
          nl: "Welk traditioneel Belgisch straatvoedsel wordt geserveerd in papieren zakjes?"
        },
        options: [
          { en: "Waffles", es: "Gofres", de: "Waffeln", nl: "Wafels" },
          { en: "Frites/Belgian fries", es: "Frites/papas fritas belgas", de: "Frites/belgische Pommes", nl: "Friet/Belgische patat" },
          { en: "Chocolate", es: "Chocolate", de: "Schokolade", nl: "Chocolade" },
          { en: "Mussels", es: "Mejillones", de: "Muscheln", nl: "Mosselen" }
        ],
        correct: 1,
        explanation: {
          en: "Belgian frites (fries) are traditionally served in paper cones with various sauces like mayonnaise, and are considered some of the world's best street food fries due to their double-frying technique.",
          es: "Las frites belgas (papas fritas) se sirven tradicionalmente en conos de papel con varias salsas como mayonesa, y se consideran algunas de las mejores papas fritas de comida callejera del mundo debido a su técnica de doble fritura.",
          de: "Belgische Frites (Pommes) werden traditionell in Papiertüten mit verschiedenen Saucen wie Mayonnaise serviert und gelten aufgrund ihrer Doppel-Frittiertechnik als einige der weltbesten Straßenessen-Pommes.",
          nl: "Belgische friet wordt traditioneel geserveerd in papieren zakjes met verschillende sauzen zoals mayonaise, en wordt beschouwd als een van 's werelds beste straatvoedsel friet vanwege de dubbel-bak techniek."
        }
      },
      {
        question: {
          en: "What is 'bratwurst' and how is it typically served as German street food?",
          es: "¿Qué es 'bratwurst' y cómo se sirve típicamente como comida callejera alemana?",
          de: "Was ist 'Bratwurst' und wie wird sie normalerweise als deutsches Straßenessen serviert?",
          nl: "Wat is 'bratwurst' en hoe wordt het meestal geserveerd als Duits straatvoedsel?"
        },
        options: [
          { en: "Grilled sausage in a roll with mustard", es: "Salchicha a la parrilla en un panecillo con mostaza", de: "Gegrillte Wurst im Brötchen mit Senf", nl: "Gegrilde worst in een broodje met mosterd" },
          { en: "Sweet pastry with cream", es: "Pastelería dulce con crema", de: "Süßes Gebäck mit Sahne", nl: "Zoet gebak met room" },
          { en: "Cold soup", es: "Sopa fría", de: "Kalte Suppe", nl: "Koude soep" },
          { en: "Vegetable salad", es: "Ensalada de verduras", de: "Gemüsesalat", nl: "Groentesalade" }
        ],
        correct: 0,
        explanation: {
          en: "Bratwurst is a German grilled sausage typically served in a roll (Brötchen) with mustard, often accompanied by sauerkraut, and is one of Germany's most popular street foods.",
          es: "Bratwurst es una salchicha alemana a la parrilla típicamente servida en un panecillo (Brötchen) con mostaza, a menudo acompañada de chucrut, y es una de las comidas callejeras más populares de Alemania.",
          de: "Bratwurst ist eine deutsche gegrillte Wurst, die normalerweise im Brötchen mit Senf serviert wird, oft begleitet von Sauerkraut, und ist eines der beliebtesten deutschen Straßenessen.",
          nl: "Bratwurst is een Duitse gegrilde worst die meestal wordt geserveerd in een broodje met mosterd, vaak vergezeld van zuurkool, en is een van Duitsland's populairste straatvoedsel."
        }
      },
      {
        question: {
          en: "Which Portuguese street food consists of a sandwich with various meats and cheese, covered in sauce?",
          es: "¿Qué comida callejera portuguesa consiste en un sándwich con varias carnes y queso, cubierto en salsa?",
          de: "Welches portugiesische Straßenessen besteht aus einem Sandwich mit verschiedenen Fleischsorten und Käse, bedeckt mit Sauce?",
          nl: "Welk Portugees straatvoedsel bestaat uit een sandwich met verschillende vleessoorten en kaas, bedekt met saus?"
        },
        options: [
          { en: "Pastéis de nata", es: "Pastéis de nata", de: "Pastéis de Nata", nl: "Pastéis de nata" },
          { en: "Francesinha", es: "Francesinha", de: "Francesinha", nl: "Francesinha" },
          { en: "Bifana", es: "Bifana", de: "Bifana", nl: "Bifana" },
          { en: "Caldo verde", es: "Caldo verde", de: "Caldo Verde", nl: "Caldo verde" }
        ],
        correct: 1,
        explanation: {
          en: "Francesinha is a Portuguese sandwich from Porto filled with ham, sausage, and steak, covered with melted cheese and a beer-based tomato sauce, often served with fries and a fried egg on top.",
          es: "Francesinha es un sándwich portugués de Oporto relleno de jamón, salchicha y bistec, cubierto con queso derretido y una salsa de tomate a base de cerveza, a menudo servido con papas fritas y un huevo frito encima.",
          de: "Francesinha ist ein portugiesisches Sandwich aus Porto gefüllt mit Schinken, Wurst und Steak, bedeckt mit geschmolzenem Käse und einer biergetränkten Tomatensauce, oft mit Pommes und einem Spiegelei obendrauf serviert.",
          nl: "Francesinha is een Portugese sandwich uit Porto gevuld met ham, worst en biefstuk, bedekt met gesmolten kaas en een op bier gebaseerde tomatensaus, vaak geserveerd met friet en een gebakken ei erop."
        }
      },
      {
        question: {
          en: "What is 'borscht' as served by Eastern European street vendors?",
          es: "¿Qué es 'borscht' como lo sirven los vendedores callejeros de Europa del Este?",
          de: "Was ist 'Borschtsch', wie es von osteuropäischen Straßenhändlern serviert wird?",
          nl: "Wat is 'borscht' zoals geserveerd door Oost-Europese straatverkopers?"
        },
        options: [
          { en: "Cold beetroot soup served with sour cream", es: "Sopa fría de remolacha servida con crema agria", de: "Kalte Rote-Bete-Suppe serviert mit saurer Sahne", nl: "Koude bietensoep geserveerd met zure room" },
          { en: "Grilled meat skewers", es: "Brochetas de carne a la parrilla", de: "Gegrillte Fleischspieße", nl: "Gegrilde vlees spiesjes" },
          { en: "Fried dough pastry", es: "Masa frita", de: "Frittiertes Teiggebäck", nl: "Gefrituurde deeg gebak" },
          { en: "Pickled vegetables", es: "Verduras encurtidas", de: "Eingelegtes Gemüse", nl: "Ingelegde groenten" }
        ],
        correct: 0,
        explanation: {
          en: "Borscht is a traditional Eastern European soup made primarily from beetroots, often served cold by street vendors with sour cream, hard-boiled eggs, and sometimes cucumber or dill.",
          es: "Borscht es una sopa tradicional de Europa del Este hecha principalmente de remolachas, a menudo servida fría por vendedores callejeros con crema agria, huevos duros y a veces pepino o eneldo.",
          de: "Borschtsch ist eine traditionelle osteuropäische Suppe, die hauptsächlich aus Roten Beten besteht, oft kalt von Straßenhändlern mit saurer Sahne, hartgekochten Eiern und manchmal Gurke oder Dill serviert.",
          nl: "Borscht is een traditionele Oost-Europese soep gemaakt voornamelijk van bieten, vaak koud geserveerd door straatverkopers met zure room, hardgekookte eieren en soms komkommer of dille."
        }
      },
      {
        question: {
          en: "Which Swiss street food consists of melted cheese served with accompaniments?",
          es: "¿Qué comida callejera suiza consiste en queso derretido servido con acompañamientos?",
          de: "Welches schweizerische Straßenessen besteht aus geschmolzenem Käse serviert mit Beilagen?",
          nl: "Welk Zwitsers straatvoedsel bestaat uit gesmolten kaas geserveerd met bijgerechten?"
        },
        options: [
          { en: "Raclette", es: "Raclette", de: "Raclette", nl: "Raclette" },
          { en: "Chocolate fondue", es: "Fondue de chocolate", de: "Schokoladen-Fondue", nl: "Chocolade fondue" },
          { en: "Muesli", es: "Muesli", de: "Müsli", nl: "Muesli" },
          { en: "Rösti", es: "Rösti", de: "Rösti", nl: "Rösti" }
        ],
        correct: 0,
        explanation: {
          en: "Raclette is melted Swiss cheese scraped onto boiled potatoes, pickled onions, and cornichons. Street vendors use special raclette machines to melt the cheese and serve it hot.",
          es: "Raclette es queso suizo derretido raspado sobre papas hervidas, cebollas encurtidas y pepinillos. Los vendedores callejeros usan máquinas especiales de raclette para derretir el queso y servirlo caliente.",
          de: "Raclette ist geschmolzener Schweizer Käse, der auf gekochte Kartoffeln, eingelegte Zwiebeln und Cornichons geschabt wird. Straßenhändler verwenden spezielle Raclette-Maschinen, um den Käse zu schmelzen und heiß zu servieren.",
          nl: "Raclette is gesmolten Zwitserse kaas geschraapt over gekookte aardappelen, ingelegde uien en augurken. Straatverkopers gebruiken speciale raclette machines om de kaas te smelten en warm te serveren."
        }
      },
      {
        question: {
          en: "What is 'crêpe' and how is it commonly served as French street food?",
          es: "¿Qué es 'crêpe' y cómo se sirve comúnmente como comida callejera francesa?",
          de: "Was ist ein 'Crêpe' und wie wird er üblicherweise als französisches Straßenessen serviert?",
          nl: "Wat is een 'crêpe' en hoe wordt het meestal geserveerd als Frans straatvoedsel?"
        },
        options: [
          { en: "Thick pancake with syrup", es: "Panqueque grueso con jarabe", de: "Dicker Pfannkuchen mit Sirup", nl: "Dikke pannenkoek met siroop" },
          { en: "Thin pancake with sweet or savory fillings, folded", es: "Panqueque delgado con rellenos dulces o salados, doblado", de: "Dünner Pfannkuchen mit süßen oder herzhaften Füllungen, gefaltet", nl: "Dunne pannenkoek met zoete of hartige vullingen, gevouwen" },
          { en: "Deep-fried dough balls", es: "Bolas de masa frita", de: "Frittierte Teigbällchen", nl: "Diepgefrituurd deeg balletjes" },
          { en: "Puff pastry with cream", es: "Masa de hojaldre con crema", de: "Blätterteig mit Sahne", nl: "Bladerdeeg met room" }
        ],
        correct: 1,
        explanation: {
          en: "French crêpes are thin pancakes made from simple batter, served folded with various fillings - sweet versions with Nutella, jam, or sugar, and savory versions (galettes) with cheese, ham, or eggs.",
          es: "Los crêpes franceses son panqueques delgados hechos de masa simple, servidos doblados con varios rellenos - versiones dulces con Nutella, mermelada o azúcar, y versiones saladas (galettes) con queso, jamón o huevos.",
          de: "Französische Crêpes sind dünne Pfannkuchen aus einfachem Teig, gefaltet serviert mit verschiedenen Füllungen - süße Versionen mit Nutella, Marmelade oder Zucker, und herzhafte Versionen (Galettes) mit Käse, Schinken oder Eiern.",
          nl: "Franse crêpes zijn dunne pannenkoeken gemaakt van eenvoudig beslag, gevouwen geserveerd met verschillende vullingen - zoete versies met Nutella, jam of suiker, en hartige versies (galettes) met kaas, ham of eieren."
        }
      },
      {
        question: {
          en: "Which Austrian street food is a breaded and fried cutlet?",
          es: "¿Qué comida callejera austriaca es una chuleta empanizada y frita?",
          de: "Welches österreichische Straßenessen ist ein paniertes und frittiertes Schnitzel?",
          nl: "Welk Oostenrijks straatvoedsel is een gepaneerde en gebakken schnitzel?"
        },
        options: [
          { en: "Wiener Schnitzel", es: "Wiener Schnitzel", de: "Wiener Schnitzel", nl: "Wiener Schnitzel" },
          { en: "Apfelstrudel", es: "Apfelstrudel", de: "Apfelstrudel", nl: "Apfelstrudel" },
          { en: "Sachertorte", es: "Sachertorte", de: "Sachertorte", nl: "Sachertorte" },
          { en: "Kaiserschmarrn", es: "Kaiserschmarrn", de: "Kaiserschmarrn", nl: "Kaiserschmarrn" }
        ],
        correct: 0,
        explanation: {
          en: "Wiener Schnitzel is Austria's famous breaded and pan-fried veal cutlet, traditionally made very thin and served with lemon. Street vendors often serve it in smaller portions or sandwiches.",
          es: "Wiener Schnitzel es la famosa chuleta de ternera empanizada y frita en sartén de Austria, tradicionalmente hecha muy delgada y servida with limón. Los vendedores callejeros a menudo la sirven en porciones más pequeñas o sándwiches.",
          de: "Wiener Schnitzel ist Österreichs berühmtes paniertes und gebratenes Kalbsschnitzel, traditionell sehr dünn gemacht und mit Zitrone serviert. Straßenhändler servieren es oft in kleineren Portionen oder Sandwiches.",
          nl: "Wiener Schnitzel is Oostenrijk's beroemde gepaneerde en gebakken kalfsvlees schnitzel, traditioneel zeer dun gemaakt en geserveerd met citroen. Straatverkopers serveren het vaak in kleinere porties of sandwiches."
        }
      },
      {
        question: {
          en: "What is 'churros con chocolate' and where is it popular in Europe?",
          es: "¿Qué es 'churros con chocolate' y dónde es popular en Europa?",
          de: "Was sind 'Churros con Chocolate' und wo sind sie in Europa beliebt?",
          nl: "Wat is 'churros con chocolate' en waar is het populair in Europa?"
        },
        options: [
          { en: "Spanish fried dough sticks with hot chocolate for dipping", es: "Palitos de masa frita españoles con chocolate caliente para mojar", de: "Spanische frittierte Teigstangen mit heißer Schokolade zum Dippen", nl: "Spaanse gefrituurde deegstokjes met warme chocolade om in te dippen" },
          { en: "French pastries with coffee", es: "Pasteles franceses con café", de: "Französische Gebäcke mit Kaffee", nl: "Franse gebakjes met koffie" },
          { en: "Italian gelato flavors", es: "Sabores de gelato italiano", de: "Italienische Gelato-Geschmäcker", nl: "Italiaanse gelato smaken" },
          { en: "German chocolate bars", es: "Barras de chocolate alemanas", de: "Deutsche Schokoladenriegel", nl: "Duitse chocoladerepen" }
        ],
        correct: 0,
        explanation: {
          en: "Churros con chocolate is a traditional Spanish street food consisting of fried choux pastry sticks dusted with sugar, served with thick hot chocolate for dipping, popular throughout Spain and spreading across Europe.",
          es: "Churros con chocolate es una comida callejera tradicional española que consiste en palitos de masa choux fritos espolvoreados con azúcar, servidos con chocolate caliente espeso para mojar, popular en toda España y extendiéndose por Europa.",
          de: "Churros con Chocolate ist ein traditionelles spanisches Straßenessen bestehend aus frittierten Brandteigstangen bestäubt mit Zucker, serviert mit dicker heißer Schokolade zum Dippen, beliebt in ganz Spanien und sich über Europa ausbreitend.",
          nl: "Churros con chocolate is een traditioneel Spaans straatvoedsel bestaande uit gefrituurde soesdeeg stokjes bestrooid met suiker, geserveerd met dikke warme chocolade om in te dippen, populair door heel Spanje en verspreidend door Europa."
        }
      },
      {
        question: {
          en: "Which traditional Dutch street snack is served from a wall vending machine?",
          es: "¿Qué bocadillo callejero tradicional holandés se sirve desde una máquina expendedora de pared?",
          de: "Welcher traditionelle niederländische Straßensnack wird aus einem Wandautomaten serviert?",
          nl: "Welke traditionele Nederlandse straatsnack wordt geserveerd uit een muurautomaat?"
        },
        options: [
          { en: "Stroopwafel", es: "Stroopwafel", de: "Stroopwafel", nl: "Stroopwafel" },
          { en: "Kroket from an Automatiek", es: "Kroket de un Automatiek", de: "Kroket aus einem Automatiek", nl: "Kroket uit een Automatiek" },
          { en: "Poffertjes", es: "Poffertjes", de: "Poffertjes", nl: "Poffertjes" },
          { en: "Oliebollen", es: "Oliebollen", de: "Oliebollen", nl: "Oliebollen" }
        ],
        correct: 1,
        explanation: {
          en: "Dutch kroket (croquette) is famously served from Automatiek vending machines with windowed compartments, containing deep-fried rolls filled with ragout, a unique Dutch fast-food experience.",
          es: "El kroket holandés (croqueta) se sirve famosamente desde máquinas expendedoras Automatiek con compartimentos con ventanas, conteniendo rollos fritos rellenos de ragú, una experiencia única de comida rápida holandesa.",
          de: "Niederländische Kroket (Krokette) wird berühmt aus Automatiek-Verkaufsautomaten mit Fensterfächern serviert, die frittierte Rollen gefüllt mit Ragout enthalten, ein einzigartiges niederländisches Fast-Food-Erlebnis.",
          nl: "Nederlandse kroket wordt beroemd geserveerd uit Automatiek verkoopautomaten met geramde vakjes, bevattende gefrituurde rolletjes gevuld met ragout, een unieke Nederlandse fastfood ervaring."
        }
      },
      {
        question: {
          en: "What characterizes traditional European Christmas market street food?",
          es: "¿Qué caracteriza la comida callejera tradicional de los mercados navideños europeos?",
          de: "Was charakterisiert traditionelles europäisches Weihnachtsmarkt-Straßenessen?",
          nl: "Wat kenmerkt traditioneel Europees kerstmarkt straatvoedsel?"
        },
        options: [
          { en: "Cold summer drinks and ice cream", es: "Bebidas frías de verano y helado", de: "Kalte Sommergetränke und Eis", nl: "Koude zomerdranken en ijs" },
          { en: "Warm, spiced foods like Glühwein, roasted nuts, and gingerbread", es: "Comidas calientes y especiadas como Glühwein, nueces tostadas y pan de jengibre", de: "Warme, gewürzte Speisen wie Glühwein, geröstete Nüsse und Lebkuchen", nl: "Warme, gekruide gerechten zoals Glühwein, geroosterde noten en peperkoek" },
          { en: "Fresh salads and raw vegetables", es: "Ensaladas frescas y verduras crudas", de: "Frische Salate und rohes Gemüse", nl: "Verse salades en rauwe groenten" },
          { en: "Seafood and sushi", es: "Mariscos y sushi", de: "Meeresfrüchte und Sushi", nl: "Zeevruchten en sushi" }
        ],
        correct: 1,
        explanation: {
          en: "European Christmas market street food features warm, comforting dishes perfect for winter weather, including mulled wine (Glühwein), roasted chestnuts, gingerbread, and other spiced seasonal treats.",
          es: "La comida callejera de los mercados navideños europeos presenta platos calientes y reconfortantes perfectos para el clima invernal, incluyendo vino caliente (Glühwein), castañas asadas, pan de jengibre y otros dulces especiados de temporada.",
          de: "Europäisches Weihnachtsmarkt-Straßenessen bietet warme, tröstende Gerichte perfekt für winterliches Wetter, einschließlich Glühwein, geröstete Kastanien, Lebkuchen und andere gewürzte saisonale Leckereien.",
          nl: "Europees kerstmarkt straatvoedsel biedt warme, troostende gerechten perfect voor winterweer, inclusief glühwein, geroosterde kastanjes, peperkoek en andere gekruide seizoenslekkernijen."
        }
      },
      {
        question: {
          en: "Which factor most influences European street food traditions?",
          es: "¿Qué factor influye más en las tradiciones de comida callejera europea?",
          de: "Welcher Faktor beeinflusst europäische Straßenessen-Traditionen am meisten?",
          nl: "Welke factor beïnvloedt Europese straatvoedsel tradities het meest?"
        },
        options: [
          { en: "Global fast food chains only", es: "Solo cadenas globales de comida rápida", de: "Nur globale Fast-Food-Ketten", nl: "Alleen mondiale fastfood ketens" },
          { en: "Regional ingredients, climate, and historical trade routes", es: "Ingredientes regionales, clima y rutas comerciales históricas", de: "Regionale Zutaten, Klima und historische Handelsrouten", nl: "Regionale ingrediënten, klimaat en historische handelsroutes" },
          { en: "Modern technology only", es: "Solo tecnología moderna", de: "Nur moderne Technologie", nl: "Alleen moderne technologie" },
          { en: "Tourist preferences exclusively", es: "Exclusivamente preferencias turísticas", de: "Ausschließlich Touristenvorlieben", nl: "Uitsluitend toeristische voorkeuren" }
        ],
        correct: 1,
        explanation: {
          en: "European street food traditions are deeply influenced by regional ingredients, local climate conditions, and historical trade routes that brought spices and techniques, creating distinct regional specialties.",
          es: "Las tradiciones de comida callejera europea están profundamente influenciadas por ingredientes regionales, condiciones climáticas locales y rutas comerciales históricas que trajeron especias y técnicas, creando especialidades regionales distintivas.",
          de: "Europäische Straßenessen-Traditionen sind tief von regionalen Zutaten, lokalen Klimabedingungen und historischen Handelsrouten beeinflusst, die Gewürze und Techniken brachten und so unverwechselbare regionale Spezialitäten schufen.",
          nl: "Europese straatvoedsel tradities zijn diep beïnvloed door regionale ingrediënten, lokale klimaatomstandigheden en historische handelsroutes die kruiden en technieken brachten, waardoor onderscheidende regionale specialiteiten ontstonden."
        }
      },
      {
        question: {
          en: "How do European street food regulations typically differ from other continents?",
          es: "¿Cómo difieren típicamente las regulaciones de comida callejera europea de otros continentes?",
          de: "Wie unterscheiden sich europäische Straßenessen-Vorschriften typischerweise von anderen Kontinenten?",
          nl: "Hoe verschillen Europese straatvoedsel regelgeving meestal van andere continenten?"
        },
        options: [
          { en: "No regulations exist", es: "No existen regulaciones", de: "Keine Vorschriften existieren", nl: "Er bestaan geen regelgeving" },
          { en: "Stricter hygiene standards and licensing requirements", es: "Estándares de higiene más estrictos y requisitos de licencias", de: "Strengere Hygienestandards und Lizenzanforderungen", nl: "Striktere hygiëne normen en licentievereiesten" },
          { en: "Completely unregulated markets", es: "Mercados completamente sin regular", de: "Völlig unregulierte Märkte", nl: "Volledig ongereguleerde markten" },
          { en: "Only seasonal restrictions", es: "Solo restricciones estacionales", de: "Nur saisonale Beschränkungen", nl: "Alleen seizoensgebonden beperkingen" }
        ],
        correct: 1,
        explanation: {
          en: "European countries typically have stricter food safety regulations, hygiene standards, and licensing requirements for street food vendors compared to many other regions, ensuring higher food safety standards.",
          es: "Los países europeos típicamente tienen regulaciones de seguridad alimentaria más estrictas, estándares de higiene y requisitos de licencias para vendedores de comida callejera comparado con muchas otras regiones, asegurando estándares más altos de seguridad alimentaria.",
          de: "Europäische Länder haben normalerweise strengere Lebensmittelsicherheitsvorschriften, Hygienestandards und Lizenzanforderungen für Straßenessen-Verkäufer im Vergleich zu vielen anderen Regionen, was höhere Lebensmittelsicherheitsstandards gewährleistet.",
          nl: "Europese landen hebben meestal striktere voedselveiligheidsregelgeving, hygiëne normen en licentievereiesten voor straatvoedselverkopers vergeleken met veel andere regio's, wat hogere voedselveiligheidsnormen garandeert."
        }
      },
      {
        question: {
          en: "Which British street food is fish and chips traditionally wrapped in?",
          es: "¿En qué se envuelve tradicionalmente el fish and chips británico?",
          de: "In was wird Fish and Chips traditionell in Großbritannien eingewickelt?",
          nl: "In wat wordt fish and chips traditioneel in Groot-Brittannië verpakt?"
        },
        options: [
          { en: "Plastic containers", es: "Envases de plástico", de: "Plastikbehälter", nl: "Plastic bakjes" },
          { en: "Newspaper (historically)", es: "Periódico (históricamente)", de: "Zeitung (historisch)", nl: "Krant (historisch)" },
          { en: "Aluminum foil", es: "Papel de aluminio", de: "Aluminiumfolie", nl: "Aluminiumfolie" },
          { en: "Paper plates", es: "Platos de papel", de: "Pappteller", nl: "Papieren borden" }
        ],
        correct: 1,
        explanation: {
          en: "Traditionally, British fish and chips were wrapped in newspaper, which kept them warm and was readily available. Modern vendors now use food-safe paper for hygiene reasons.",
          es: "Tradicionalmente, el fish and chips británico se envolvía en periódico, lo que los mantenía calientes y estaba fácilmente disponible. Los vendedores modernos ahora usan papel seguro para alimentos por razones de higiene.",
          de: "Traditionell wurde britisches Fish and Chips in Zeitung eingewickelt, was sie warm hielt und leicht verfügbar war. Moderne Verkäufer verwenden jetzt lebensmittelsicheres Papier aus hygienischen Gründen.",
          nl: "Traditioneel werd Britse fish and chips verpakt in krant, wat ze warm hield en gemakkelijk beschikbaar was. Moderne verkopers gebruiken nu voedselveilig papier om hygiënische redenen."
        }
      },
      {
        question: {
          en: "What is the traditional German street food 'leberkäse'?",
          es: "¿Qué es el 'leberkäse' tradicional alemán de comida callejera?",
          de: "Was ist der traditionelle deutsche Straßensnack 'Leberkäse'?",
          nl: "Wat is de traditionele Duitse straatvoedsel 'leberkäse'?"
        },
        options: [
          { en: "A type of liver cheese", es: "Un tipo de queso de hígado", de: "Eine Art Leberkäse", nl: "Een soort leverkaas" },
          { en: "Baked meat loaf (contains no liver or cheese)", es: "Pan de carne horneado (no contiene hígado ni queso)", de: "Gebackener Fleischkäse (enthält weder Leber noch Käse)", nl: "Gebakken gehaktbrood (bevat geen lever of kaas)" },
          { en: "Vegetable soup", es: "Sopa de verduras", de: "Gemüsesuppe", nl: "Groentesoep" },
          { en: "Sweet pastry", es: "Pastelería dulce", de: "Süßes Gebäck", nl: "Zoet gebak" }
        ],
        correct: 1,
        explanation: {
          en: "Despite its name, Leberkäse is a baked meat loaf made from finely ground corned beef, pork, and bacon, containing neither liver nor cheese. It's served hot in slices, often in a roll.",
          es: "A pesar de su nombre, Leberkäse es un pan de carne horneado hecho de carne en conserva finamente molida, cerdo y tocino, que no contiene hígado ni queso. Se sirve caliente en rebanadas, a menudo en un panecillo.",
          de: "Trotz seines Namens ist Leberkäse ein gebackener Fleischkäse aus fein gehacktem Rindfleisch, Schweinefleisch und Speck, der weder Leber noch Käse enthält. Er wird heiß in Scheiben serviert, oft im Brötchen.",
          nl: "Ondanks de naam is Leberkäse een gebakken gehaktbrood gemaakt van fijn gehakt rundvlees, varkensvlees en spek, dat noch lever noch kaas bevat. Het wordt warm geserveerd in plakjes, vaak op een broodje."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  }

  return level5;
})();