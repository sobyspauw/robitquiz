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
          en: "What is 'arancini' and from which Italian region does it originate?",
          es: "¿Qué es 'arancini' y de qué región italiana se origina?",
          de: "Was sind 'Arancini' und aus welcher italienischen Region stammen sie?",
          nl: "Wat is 'arancini' en uit welke Italiaanse regio komt het?"
        },
        options: [
          { en: "Sicilian fried rice balls", es: "Bolas de arroz fritas sicilianas", de: "Sizilianische frittierte Reisbällchen", nl: "Siciliaanse gefrituurde rijstballetjes" },
          { en: "Roman pasta dish", es: "Plato de pasta romano", de: "Römisches Nudelgericht", nl: "Romeins pasta gerecht" },
          { en: "Venetian seafood salad", es: "Ensalada de mariscos veneciana", de: "Venezianischer Meeresfrüchtesalat", nl: "Venetiaanse zeevruchten salade" },
          { en: "Florentine steak", es: "Bistec florentino", de: "Florentiner Steak", nl: "Florentijnse biefstuk" }
        ],
        correct: 0,
        explanation: {
          en: "Arancini are Sicilian fried rice balls typically filled with ragù, mozzarella, and peas, coated in breadcrumbs and deep-fried. They're named after their orange-like shape (arancia means orange).",
          es: "Arancini son bolas de arroz fritas sicilianas típicamente rellenas de ragú, mozzarella y guisantes, cubiertas con pan rallado y fritas. Se llaman así por su forma parecida a una naranja (arancia significa naranja).",
          de: "Arancini sind sizilianische frittierte Reisbällchen, typischerweise gefüllt mit Ragù, Mozzarella und Erbsen, paniert und frittiert. Sie sind nach ihrer orangenähnlichen Form benannt (arancia bedeutet Orange).",
          nl: "Arancini zijn Siciliaanse gefrituurde rijstballetjes meestal gevuld met ragù, mozzarella en erwten, bedekt met paneermeel en diepgefrituurd. Ze zijn vernoemd naar hun sinaasappelvorm (arancia betekent sinaasappel)."
        }
      },
      {
        question: {
          en: "Which Spanish street food consists of small breaded and fried pieces?",
          es: "¿Qué comida callejera española consiste en pequeños trozos empanizados y fritos?",
          de: "Welches spanische Straßenessen besteht aus kleinen panierten und frittierten Stücken?",
          nl: "Welk Spaans straatvoedsel bestaat uit kleine gepaneerde en gebakken stukjes?"
        },
        options: [
          { en: "Paella", es: "Paella", de: "Paella", nl: "Paella" },
          { en: "Gazpacho", es: "Gazpacho", de: "Gazpacho", nl: "Gazpacho" },
          { en: "Croquetas", es: "Croquetas", de: "Croquetas", nl: "Croquetas" },
          { en: "Tortilla", es: "Tortilla", de: "Tortilla", nl: "Tortilla" }
        ],
        correct: 2,
        explanation: {
          en: "Croquetas are popular Spanish street food made from béchamel sauce mixed with ham, chicken, or fish, shaped into small cylinders, breaded, and deep-fried until golden and crispy.",
          es: "Las croquetas son una comida callejera española popular hecha de salsa bechamel mezclada con jamón, pollo o pescado, moldeadas en pequeños cilindros, empanizadas y fritas hasta que estén doradas y crujientes.",
          de: "Croquetas sind beliebtes spanisches Straßenessen aus Béchamelsauce gemischt mit Schinken, Hähnchen oder Fisch, zu kleinen Zylindern geformt, paniert und goldbraun frittiert.",
          nl: "Croquetas zijn populair Spaans straatvoedsel gemaakt van bechamelsaus gemengd met ham, kip of vis, gevormd tot kleine cilinders, gepaneerd en diepgefrituurd tot goudbruin en knapperig."
        }
      },
      {
        question: {
          en: "What is 'langos' and from which European country does it originate?",
          es: "¿Qué es 'langos' y de qué país europeo se origina?",
          de: "Was ist 'Lángos' und aus welchem europäischen Land stammt es?",
          nl: "Wat is 'langos' en uit welk Europees land komt het?"
        },
        options: [
          { en: "Hungarian fried bread topped with sour cream and cheese", es: "Pan frito húngaro con crema agria y queso", de: "Ungarisches frittiertes Brot mit saurer Sahne und Käse", nl: "Hongaars gefrituurd brood met zure room en kaas" },
          { en: "Polish dumpling", es: "Empanadilla polaca", de: "Polnische Teigtasche", nl: "Poolse pierogi" },
          { en: "Czech pastry", es: "Pastelería checa", de: "Tschechisches Gebäck", nl: "Tsjechisch gebak" },
          { en: "Romanian soup", es: "Sopa rumana", de: "Rumänische Suppe", nl: "Roemeense soep" }
        ],
        correct: 0,
        explanation: {
          en: "Lángos is Hungarian deep-fried flatbread traditionally topped with sour cream, cheese, and sometimes garlic. It's a popular street food at markets and festivals throughout Hungary.",
          es: "Lángos es pan plano frito húngaro tradicionalmente cubierto con crema agria, queso y a veces ajo. Es una comida callejera popular en mercados y festivales en toda Hungría.",
          de: "Lángos ist ungarisches frittiertes Fladenbrot, traditionell mit saurer Sahne, Käse und manchmal Knoblauch belegt. Es ist ein beliebtes Straßenessen auf Märkten und Festivals in ganz Ungarn.",
          nl: "Lángos is Hongaars diepgefrituurd platbrood traditioneel bedekt met zure room, kaas en soms knoflook. Het is populair straatvoedsel op markten en festivals door heel Hongarije."
        }
      },
      {
        question: {
          en: "Which Turkish-influenced street food is now popular throughout Germany?",
          es: "¿Qué comida callejera de influencia turca es ahora popular en toda Alemania?",
          de: "Welches türkisch beeinflusste Straßenessen ist jetzt in ganz Deutschland beliebt?",
          nl: "Welk Turks beïnvloed straatvoedsel is nu populair door heel Duitsland?"
        },
        options: [
          { en: "Döner kebab", es: "Döner kebab", de: "Döner Kebab", nl: "Döner kebab" },
          { en: "Sushi", es: "Sushi", de: "Sushi", nl: "Sushi" },
          { en: "Burrito", es: "Burrito", de: "Burrito", nl: "Burrito" },
          { en: "Spring rolls", es: "Rollitos primavera", de: "Frühlingsrollen", nl: "Loempia's" }
        ],
        correct: 0,
        explanation: {
          en: "Döner kebab, brought to Germany by Turkish immigrants, has become one of Germany's most popular street foods. It consists of sliced meat from a vertical rotisserie served in bread with vegetables and sauce.",
          es: "Döner kebab, traído a Alemania por inmigrantes turcos, se ha convertido en una de las comidas callejeras más populares de Alemania. Consiste en carne en rodajas de un asador vertical servida en pan con verduras y salsa.",
          de: "Döner Kebab, von türkischen Einwanderern nach Deutschland gebracht, ist eines der beliebtesten deutschen Straßenessen geworden. Er besteht aus geschnittenem Fleisch vom vertikalen Drehspieß serviert im Brot mit Gemüse und Sauce.",
          nl: "Döner kebab, naar Duitsland gebracht door Turkse immigranten, is een van Duitsland's populairste straatvoedsel geworden. Het bestaat uit gesneden vlees van een verticale grillspit geserveerd in brood met groenten en saus."
        }
      },
      {
        question: {
          en: "What is 'socca' and from which French region does it originate?",
          es: "¿Qué es 'socca' y de qué región francesa se origina?",
          de: "Was ist 'Socca' und aus welcher französischen Region stammt es?",
          de: "Wat is 'socca' en uit welke Franse regio komt het?"
        },
        options: [
          { en: "Nice chickpea flour pancake", es: "Panqueque de harina de garbanzo de Niza", de: "Nizza-Kichererbsenmehl-Pfannkuchen", nl: "Nice kikkererwten meel pannenkoek" },
          { en: "Lyon sausage", es: "Salchicha de Lyon", de: "Lyoner Wurst", nl: "Lyon worst" },
          { en: "Marseille fish stew", es: "Estofado de pescado de Marsella", de: "Marseille-Fischeintopf", nl: "Marseille vis stoofpot" },
          { en: "Paris pastry", es: "Pastelería parisina", de: "Pariser Gebäck", nl: "Parijs gebak" }
        ],
        correct: 0,
        explanation: {
          en: "Socca is a traditional street food from Nice made from chickpea flour, water, and olive oil, cooked in a large flat pan and cut into pieces. It's crispy on the edges and soft in the center.",
          es: "Socca es una comida callejera tradicional de Niza hecha de harina de garbanzo, agua y aceite de oliva, cocida en una sartén grande y plana y cortada en trozos. Es crujiente en los bordes y suave en el centro.",
          de: "Socca ist ein traditionelles Straßenessen aus Nizza aus Kichererbsenmehl, Wasser und Olivenöl, in einer großen flachen Pfanne gekocht und in Stücke geschnitten. Es ist an den Rändern knusprig und in der Mitte weich.",
          nl: "Socca is een traditioneel straatvoedsel uit Nice gemaakt van kikkererwtenmeel, water en olijfolie, gekookt in een grote platte pan en in stukken gesneden. Het is knapperig aan de randen en zacht in het midden."
        }
      },
      {
        question: {
          en: "Which Polish street food consists of boiled dumplings with various fillings?",
          es: "¿Qué comida callejera polaca consiste en empanadillas hervidas con varios rellenos?",
          de: "Welches polnische Straßenessen besteht aus gekochten Teigtaschen mit verschiedenen Füllungen?",
          nl: "Welk Pools straatvoedsel bestaat uit gekookte dumplings met verschillende vullingen?"
        },
        options: [
          { en: "Kielbasa", es: "Kielbasa", de: "Kielbasa", nl: "Kielbasa" },
          { en: "Pierogi", es: "Pierogi", de: "Pierogi", nl: "Pierogi" },
          { en: "Bigos", es: "Bigos", de: "Bigos", nl: "Bigos" },
          { en: "Zurek", es: "Zurek", de: "Zurek", nl: "Zurek" }
        ],
        correct: 1,
        explanation: {
          en: "Pierogi are Polish dumplings filled with various ingredients like potato, cheese, meat, or fruit. They're boiled and often pan-fried, served as popular street food at markets and festivals.",
          es: "Pierogi son empanadillas polacas rellenas de varios ingredientes como papa, queso, carne o fruta. Se hierven y a menudo se fríen en sartén, servidas como comida callejera popular en mercados y festivales.",
          de: "Pierogi sind polnische Teigtaschen gefüllt mit verschiedenen Zutaten wie Kartoffeln, Käse, Fleisch oder Obst. Sie werden gekocht und oft in der Pfanne gebraten, als beliebtes Straßenessen auf Märkten und Festivals serviert.",
          nl: "Pierogi zijn Poolse dumplings gevuld met verschillende ingrediënten zoals aardappel, kaas, vlees of fruit. Ze worden gekookt en vaak gebakken in de pan, geserveerd als populair straatvoedsel op markten en festivals."
        }
      },
      {
        question: {
          en: "What is 'pretzel' called in German and how is it traditionally served?",
          es: "¿Cómo se llama 'pretzel' en alemán y cómo se sirve tradicionalmente?",
          de: "Wie heißt 'Pretzel' auf Deutsch und wie wird es traditionell serviert?",
          nl: "Hoe heet 'pretzel' in het Duits en hoe wordt het traditioneel geserveerd?"
        },
        options: [
          { en: "Brezel, with coarse salt and sometimes butter", es: "Brezel, con sal gruesa y a veces mantequilla", de: "Brezel, mit grobem Salz und manchmal Butter", nl: "Brezel, met grof zout en soms boter" },
          { en: "Strudel, with sugar glaze", es: "Strudel, con glaseado de azúcar", de: "Strudel, mit Zuckerglasur", nl: "Strudel, met suikerglazuur" },
          { en: "Kuchen, with chocolate", es: "Kuchen, con chocolate", de: "Kuchen, mit Schokolade", nl: "Kuchen, met chocolade" },
          { en: "Brot, with jam", es: "Brot, con mermelada", de: "Brot, mit Marmelade", nl: "Brot, met jam" }
        ],
        correct: 0,
        explanation: {
          en: "Brezel (pretzel) is a traditional German baked bread product with a distinctive knot shape, topped with coarse salt. It's often served with butter or as an accompaniment to beer at street vendors and beer gardens.",
          es: "Brezel (pretzel) es un producto tradicional alemán de pan horneado con forma de nudo distintiva, cubierto con sal gruesa. A menudo se sirve con mantequilla o como acompañamiento de cerveza en vendedores callejeros y jardines de cerveza.",
          de: "Brezel ist ein traditionelles deutsches Backprodukt mit charakteristischer Knotenform, belegt mit grobem Salz. Es wird oft mit Butter oder als Begleitung zu Bier bei Straßenhändlern und Biergärten serviert.",
          nl: "Brezel (pretzel) is een traditioneel Duits gebakken broodproduct met een kenmerkende knoop vorm, bedekt met grof zout. Het wordt vaak geserveerd met boter of als begeleiding bij bier bij straatverkopers en biertuinen."
        }
      },
      {
        question: {
          en: "Which Irish street food consists of battered and fried seafood?",
          es: "¿Qué comida callejera irlandesa consiste en mariscos empanizados y fritos?",
          de: "Welches irische Straßenessen besteht aus panierten und frittierten Meeresfrüchten?",
          nl: "Welk Iers straatvoedsel bestaat uit gepaneerde en gebakken zeevruchten?"
        },
        options: [
          { en: "Boxty", es: "Boxty", de: "Boxty", nl: "Boxty" },
          { en: "Colcannon", es: "Colcannon", de: "Colcannon", nl: "Colcannon" },
          { en: "Fish and chips (Irish style)", es: "Fish and chips (estilo irlandés)", de: "Fish and Chips (irischer Stil)", nl: "Fish and chips (Ierse stijl)" },
          { en: "Soda bread", es: "Pan de soda", de: "Sodabrot", nl: "Soda brood" }
        ],
        correct: 2,
        explanation: {
          en: "Irish fish and chips, similar to the British version but often using local fish like haddock or cod, is a popular street food served with tartar sauce and malt vinegar in paper wrappings.",
          es: "Fish and chips irlandés, similar a la versión británica pero a menudo usando pescado local como eglefino o bacalao, es una comida callejera popular servida con salsa tártara y vinagre de malta en envoltorios de papel.",
          de: "Irisches Fish and Chips, ähnlich der britischen Version aber oft mit lokalem Fisch wie Schellfisch oder Kabeljau, ist ein beliebtes Straßenessen serviert mit Tartarsauce und Malzessig in Papierverpackungen.",
          nl: "Ierse fish and chips, vergelijkbaar met de Britse versie maar vaak met lokale vis zoals schelvis of kabeljauw, is populair straatvoedsel geserveerd met tartaarsaus en moutazijn in papieren verpakkingen."
        }
      },
      {
        question: {
          en: "What is 'borek' and in which European regions is it popular?",
          es: "¿Qué es 'borek' y en qué regiones europeas es popular?",
          de: "Was ist 'Börek' und in welchen europäischen Regionen ist es beliebt?",
          nl: "Wat is 'borek' en in welke Europese regio's is het populair?"
        },
        options: [
          { en: "Balkan/Turkish flaky pastry filled with cheese or meat", es: "Masa hojaldrada balcánica/turca rellena de queso o carne", de: "Balkan/türkisches Blätterteiggebäck gefüllt mit Käse oder Fleisch", nl: "Balkan/Turks bladerdeeg gebak gevuld met kaas of vlees" },
          { en: "Nordic fish soup", es: "Sopa de pescado nórdica", de: "Nordische Fischsuppe", nl: "Scandinavische vis soep" },
          { en: "Italian pasta", es: "Pasta italiana", de: "Italienische Nudeln", nl: "Italiaanse pasta" },
          { en: "French dessert", es: "Postre francés", de: "Französisches Dessert", nl: "Frans dessert" }
        ],
        correct: 0,
        explanation: {
          en: "Börek is a filled pastry popular in Balkan countries and Turkey, made from thin phyllo dough filled with cheese, spinach, or meat. It's baked or fried and sold as street food throughout the region.",
          es: "Börek es una masa rellena popular en países balcánicos y Turquía, hecha de masa phyllo delgada rellena de queso, espinacas o carne. Se hornea o fríe y se vende como comida callejera en toda la región.",
          de: "Börek ist ein gefülltes Gebäck, beliebt in Balkanländern und der Türkei, aus dünnem Filoteig gefüllt mit Käse, Spinat oder Fleisch. Es wird gebacken oder frittiert und als Straßenessen in der Region verkauft.",
          nl: "Börek is een gevuld gebak populair in Balkanlanden en Turkije, gemaakt van dunne filo deeg gevuld met kaas, spinazie of vlees. Het wordt gebakken of gefrituurd en verkocht als straatvoedsel door de hele regio."
        }
      },
      {
        question: {
          en: "Which Czech street food is a rolled pastry grilled on a spit?",
          es: "¿Qué comida callejera checa es una masa enrollada asada en un asador?",
          de: "Welches tschechische Straßenessen ist ein gerolltes Gebäck auf einem Spieß gegrillt?",
          nl: "Welk Tsjechisch straatvoedsel is een opgerolde gebak gegrild op een spit?"
        },
        options: [
          { en: "Kolache", es: "Kolache", de: "Kolatschen", nl: "Kolache" },
          { en: "Trdelník", es: "Trdelník", de: "Trdelník", nl: "Trdelník" },
          { en: "Knedlíky", es: "Knedlíky", de: "Knedlíky", nl: "Knedlíky" },
          { en: "Svíčková", es: "Svíčková", de: "Svíčková", nl: "Svíčková" }
        ],
        correct: 1,
        explanation: {
          en: "Trdelník is a traditional Czech street food made from rolled dough grilled on a rotating spit, coated with sugar and cinnamon. It's crispy outside, soft inside, and often filled with ice cream or Nutella.",
          es: "Trdelník es una comida callejera tradicional checa hecha de masa enrollada asada en un asador giratorio, cubierta con azúcar y canela. Es crujiente por fuera, suave por dentro, y a menudo rellena con helado o Nutella.",
          de: "Trdelník ist ein traditionelles tschechisches Straßenessen aus gerolltem Teig gegrillt auf einem rotierenden Spieß, bedeckt mit Zucker und Zimt. Es ist außen knusprig, innen weich, und oft mit Eis oder Nutella gefüllt.",
          nl: "Trdelník is een traditioneel Tsjechisch straatvoedsel gemaakt van opgerolde deeg gegrild op een roterende spit, bedekt met suiker en kaneel. Het is knapperig buiten, zacht binnen, en vaak gevuld met ijs of Nutella."
        }
      },
      {
        question: {
          en: "What distinguishes Belgian waffles sold as street food from regular waffles?",
          es: "¿Qué distingue los gofres belgas vendidos como comida callejera de los gofres regulares?",
          de: "Was unterscheidet belgische Waffeln als Straßenessen von normalen Waffeln?",
          nl: "Wat onderscheidt Belgische wafels verkocht als straatvoedsel van gewone wafels?"
        },
        options: [
          { en: "Thinner and crispier texture", es: "Textura más delgada y crujiente", de: "Dünnere und knusprigere Textur", nl: "Dunnere en knapperigere textuur" },
          { en: "Thicker with deep pockets, often topped with powdered sugar or fruit", es: "Más gruesos con bolsillos profundos, a menudo cubiertos con azúcar glas o fruta", de: "Dicker mit tiefen Taschen, oft mit Puderzucker oder Obst belegt", nl: "Dikker met diepe zakken, vaak bedekt met poedersuiker of fruit" },
          { en: "Always savory, never sweet", es: "Siempre salados, nunca dulces", de: "Immer herzhaft, nie süß", nl: "Altijd hartig, nooit zoet" },
          { en: "Made without eggs", es: "Hechos sin huevos", de: "Ohne Eier gemacht", nl: "Gemaakt zonder eieren" }
        ],
        correct: 1,
        explanation: {
          en: "Belgian street waffles (Liège or Brussels style) are thicker with deep pockets to hold toppings, often served hot with powdered sugar, whipped cream, chocolate, or fresh fruit, creating an indulgent street snack.",
          es: "Los gofres callejeros belgas (estilo Lieja o Bruselas) son más gruesos con bolsillos profundos para contener ingredientes, a menudo servidos calientes con azúcar glas, crema batida, chocolate o fruta fresca, creando un bocadillo callejero indulgente.",
          de: "Belgische Straßenwaffeln (Lütticher oder Brüsseler Stil) sind dicker mit tiefen Taschen für Beläge, oft heiß serviert mit Puderzucker, Schlagsahne, Schokolade oder frischem Obst, was einen verwöhnenden Straßensnack ergibt.",
          nl: "Belgische straatwafels (Luikse of Brusselse stijl) zijn dikker met diepe zakken voor toppings, vaak warm geserveerd met poedersuiker, slagroom, chocolade of vers fruit, wat een verwennende straatsnack creëert."
        }
      },
      {
        question: {
          en: "Which Nordic street food consists of open-faced sandwiches?",
          es: "¿Qué comida callejera nórdica consiste en sándwiches abiertos?",
          de: "Welches nordische Straßenessen besteht aus offenen Sandwiches?",
          nl: "Welk Scandinavisch straatvoedsel bestaat uit open sandwiches?"
        },
        options: [
          { en: "Smørrebrød", es: "Smørrebrød", de: "Smørrebrød", nl: "Smørrebrød" },
          { en: "Lutefisk", es: "Lutefisk", de: "Lutefisk", nl: "Lutefisk" },
          { en: "Surströmming", es: "Surströmming", de: "Surströmming", nl: "Surströmming" },
          { en: "Rakfisk", es: "Rakfisk", de: "Rakfisk", nl: "Rakfisk" }
        ],
        correct: 0,
        explanation: {
          en: "Smørrebrød is traditional Danish open-faced sandwich on rye bread, topped with various ingredients like herring, egg, roast beef, or shrimp. Street vendors serve simpler versions of this Nordic classic.",
          es: "Smørrebrød es el tradicional sándwich abierto danés sobre pan de centeno, cubierto con varios ingredientes como arenque, huevo, rosbif o camarones. Los vendedores callejeros sirven versiones más simples de este clásico nórdico.",
          de: "Smørrebrød ist traditionelles dänisches offenes Sandwich auf Roggenbrot, belegt mit verschiedenen Zutaten wie Hering, Ei, Roastbeef oder Garnelen. Straßenhändler servieren einfachere Versionen dieses nordischen Klassikers.",
          nl: "Smørrebrød is traditionele Deense open sandwich op roggebrood, bedekt met verschillende ingrediënten zoals haring, ei, rosbief of garnalen. Straatverkopers serveren eenvoudigere versies van deze Scandinavische klassieker."
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
