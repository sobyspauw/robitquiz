// Chocolate Desserts Quiz - Level 6: International Chocolate Desserts
(function() {
  const level6 = {
    name: {
      en: "International Chocolate Desserts",
      es: "Postres de Chocolate Internacionales",
      de: "Internationale Schokoladendesserts",
      nl: "Internationale Chocoladedesserts"
    },
    questions: [
      {
        question: {
          en: "What is the French chocolate dessert that translates to 'lightning bolt'?",
          es: "¿Cuál es el postre francés de chocolate que se traduce como 'rayo'?",
          de: "Wie heißt das französische Schokoladendessert, das 'Blitz' bedeutet?",
          nl: "Wat is het Franse chocoladedessert dat 'bliksemschicht' betekent?"
        },
        options: [
          { en: "Éclair", es: "Éclair", de: "Éclair", nl: "Éclair" },
          { en: "Profiterole", es: "Profiterol", de: "Profiterole", nl: "Soesje" },
          { en: "Croquembouche", es: "Croquembouche", de: "Croquembouche", nl: "Croquembouche" },
          { en: "Mille-feuille", es: "Milhojas", de: "Mille-feuille", nl: "Tompouce" }
        ],
        correct: 0,
        explanation: {
          en: "Éclair literally means 'lightning bolt' in French and is a pastry filled with cream and topped with chocolate icing.",
          es: "Éclair literalmente significa 'rayo' en francés y es un pastel relleno de crema y cubierto con glaseado de chocolate.",
          de: "Éclair bedeutet wörtlich 'Blitz' auf Französisch und ist ein Gebäck gefüllt mit Creme und überzogen mit Schokoladenglasur.",
          nl: "Éclair betekent letterlijk 'bliksemschicht' in het Frans en is een gebakje gevuld met crème en bedekt met chocoladeglazuur."
        }
      },
      {
        question: {
          en: "Which Italian chocolate dessert consists of ladyfingers soaked in coffee?",
          es: "¿Qué postre italiano de chocolate consiste en bizcochos de soletilla empapados en café?",
          de: "Welches italienische Schokoladendessert besteht aus in Kaffee getränkten Löffelbiskuits?",
          nl: "Welk Italiaans chocoladedessert bestaat uit lange vingers gedoopt in koffie?"
        },
        options: [
          { en: "Cannoli", es: "Cannoli", de: "Cannoli", nl: "Cannoli" },
          { en: "Tiramisu", es: "Tiramisu", de: "Tiramisu", nl: "Tiramisu" },
          { en: "Panna Cotta", es: "Panna Cotta", de: "Panna Cotta", nl: "Panna Cotta" },
          { en: "Gelato", es: "Gelato", de: "Gelato", nl: "Gelato" }
        ],
        correct: 1,
        explanation: {
          en: "Tiramisu is an Italian dessert made with ladyfingers soaked in coffee, layered with mascarpone cheese and dusted with cocoa powder.",
          es: "Tiramisu es un postre italiano hecho con bizcochos de soletilla empapados en café, en capas con queso mascarpone y espolvoreado con cacao en polvo.",
          de: "Tiramisu ist ein italienisches Dessert aus in Kaffee getränkten Löffelbiskuits, geschichtet mit Mascarpone-Käse und bestäubt mit Kakaopulver.",
          nl: "Tiramisu is een Italiaans dessert gemaakt van lange vingers gedoopt in koffie, gelaagd met mascarpone kaas en bestrooid met cacaopoeder."
        }
      },
      {
        question: {
          en: "What is the Austrian chocolate cake layered with apricot jam called?",
          es: "¿Cómo se llama el pastel austriaco de chocolate en capas con mermelada de albaricoque?",
          de: "Wie heißt der österreichische Schokoladenkuchen mit Aprikosenmarmelade?",
          nl: "Hoe heet de Oostenrijkse chocoladetaart gelaagd met abrikozenjam?"
        },
        options: [
          { en: "Black Forest Cake", es: "Pastel Selva Negra", de: "Schwarzwälder Kirschtorte", nl: "Zwarte Woud Taart" },
          { en: "Sachertorte", es: "Sachertorte", de: "Sachertorte", nl: "Sachertorte" },
          { en: "Strudel", es: "Strudel", de: "Strudel", nl: "Strudel" },
          { en: "Linzer Torte", es: "Linzer Torte", de: "Linzer Torte", nl: "Linzer Torte" }
        ],
        correct: 1,
        explanation: {
          en: "Sachertorte is a famous Austrian chocolate cake consisting of a dense chocolate sponge with a thin layer of apricot jam, covered in dark chocolate icing.",
          es: "Sachertorte es un famoso pastel austriaco de chocolate que consiste en un bizcocho denso de chocolate con una capa fina de mermelada de albaricoque, cubierto con glaseado de chocolate negro.",
          de: "Sachertorte ist ein berühmter österreichischer Schokoladenkuchen aus dichtem Schokoladenbiskuit mit einer dünnen Schicht Aprikosenmarmelade, überzogen mit dunkler Schokoladenglasur.",
          nl: "Sachertorte is een beroemde Oostenrijkse chocoladetaart bestaande uit een dichte chocoladebiscuit met een dunne laag abrikozenjam, bedekt met donkere chocoladeglazuur."
        }
      },
      {
        question: {
          en: "Which Spanish chocolate dessert is traditionally served with churros?",
          es: "¿Qué postre español de chocolate se sirve tradicionalmente con churros?",
          de: "Welches spanische Schokoladendessert wird traditionell mit Churros serviert?",
          nl: "Welk Spaans chocoladedessert wordt traditioneel geserveerd met churros?"
        },
        options: [
          { en: "Chocolate ice cream", es: "Helado de chocolate", de: "Schokoladeneis", nl: "Chocolade-ijs" },
          { en: "Hot chocolate sauce", es: "Salsa de chocolate caliente", de: "Heiße Schokoladensauce", nl: "Warme chocoladesaus" },
          { en: "Chocolate a la taza", es: "Chocolate a la taza", de: "Chocolate a la taza", nl: "Chocolate a la taza" },
          { en: "Chocolate mousse", es: "Mousse de chocolate", de: "Schokoladenmousse", nl: "Chocolademousse" }
        ],
        correct: 2,
        explanation: {
          en: "Chocolate a la taza is a thick, rich Spanish hot chocolate traditionally served as a dip for churros.",
          es: "Chocolate a la taza es un chocolate caliente español espeso y rico que tradicionalmente se sirve como salsa para mojar churros.",
          de: "Chocolate a la taza ist eine dicke, reichhaltige spanische heiße Schokolade, die traditionell als Dip für Churros serviert wird.",
          nl: "Chocolate a la taza is een dikke, rijke Spaanse warme chocolademelk die traditioneel wordt geserveerd als dip voor churros."
        }
      },
      {
        question: {
          en: "What is the German chocolate cake called 'Black Forest' known for?",
          es: "¿Por qué es conocido el pastel alemán de chocolate llamado 'Selva Negra'?",
          de: "Wofür ist die deutsche Schokoladentorte 'Schwarzwälder Kirschtorte' bekannt?",
          nl: "Waarvoor is de Duitse chocoladetaart 'Zwarte Woud' bekend?"
        },
        options: [
          { en: "Apricot filling", es: "Relleno de albaricoque", de: "Aprikosenfüllung", nl: "Abrikozenvulling" },
          { en: "Cherry filling and kirsch", es: "Relleno de cereza y kirsch", de: "Kirschfüllung und Kirsch", nl: "Kersenvulling en kirsch" },
          { en: "Apple filling", es: "Relleno de manzana", de: "Apfelfüllung", nl: "Appelvulling" },
          { en: "Strawberry filling", es: "Relleno de fresa", de: "Erdbeerfüllung", nl: "Aardbeivulling" }
        ],
        correct: 1,
        explanation: {
          en: "Black Forest cake (Schwarzwälder Kirschtorte) is famous for its layers of chocolate sponge cake, cherries, whipped cream, and kirsch (cherry brandy).",
          es: "El pastel Selva Negra (Schwarzwälder Kirschtorte) es famoso por sus capas de bizcocho de chocolate, cerezas, crema batida y kirsch (brandy de cereza).",
          de: "Schwarzwälder Kirschtorte ist berühmt für ihre Schichten aus Schokoladenbiskuit, Kirschen, Schlagsahne und Kirsch (Kirschbrand).",
          nl: "Zwarte Woud taart (Schwarzwälder Kirschtorte) is beroemd om zijn lagen chocoladebiscuit, kersen, slagroom en kirsch (kersenbrandewijn)."
        }
      },
      {
        question: {
          en: "Which Belgian chocolate is known for its shell filled with liquid chocolate?",
          es: "¿Qué chocolate belga es conocido por su cáscara rellena de chocolate líquido?",
          de: "Welche belgische Schokolade ist für ihre Schale gefüllt mit flüssiger Schokolade bekannt?",
          nl: "Welke Belgische chocolade is bekend om zijn schaal gevuld met vloeibare chocolade?"
        },
        options: [
          { en: "Praline", es: "Praliné", de: "Praline", nl: "Praline" },
          { en: "Truffle", es: "Trufa", de: "Trüffel", nl: "Truffel" },
          { en: "Bonbon", es: "Bombón", de: "Bonbon", nl: "Bonbon" },
          { en: "Ganache", es: "Ganache", de: "Ganache", nl: "Ganache" }
        ],
        correct: 0,
        explanation: {
          en: "Belgian pralines are famous chocolate shells filled with liquid chocolate, cream, or other fillings, different from French pralines which are nuts covered in caramelized sugar.",
          es: "Los pralinés belgas son famosas cáscaras de chocolate rellenas de chocolate líquido, crema u otros rellenos, diferentes de los pralinés franceses que son nueces cubiertas de azúcar caramelizado.",
          de: "Belgische Pralinen sind berühmte Schokoladenschalen gefüllt mit flüssiger Schokolade, Creme oder anderen Füllungen, anders als französische Pralinen, die Nüsse mit karamellisiertem Zucker sind.",
          nl: "Belgische pralines zijn beroemde chocoladeschillen gevuld met vloeibare chocolade, room of andere vullingen, anders dan Franse pralines die noten bedekt met gekarameliseerde suiker zijn."
        }
      },
      {
        question: {
          en: "What is the Japanese chocolate treat that resembles bamboo?",
          es: "¿Cuál es el dulce japonés de chocolate que se parece al bambú?",
          de: "Wie heißt die japanische Schokoladenleckerei, die Bambus ähnelt?",
          nl: "Wat is de Japanse chocoladelekkernij die op bamboe lijkt?"
        },
        options: [
          { en: "Pocky", es: "Pocky", de: "Pocky", nl: "Pocky" },
          { en: "Mochi", es: "Mochi", de: "Mochi", nl: "Mochi" },
          { en: "Dorayaki", es: "Dorayaki", de: "Dorayaki", nl: "Dorayaki" },
          { en: "Takenoko no Sato", es: "Takenoko no Sato", de: "Takenoko no Sato", nl: "Takenoko no Sato" }
        ],
        correct: 3,
        explanation: {
          en: "Takenoko no Sato (bamboo shoot village) are Japanese chocolate snacks shaped like bamboo shoots, with a biscuit base and chocolate coating.",
          es: "Takenoko no Sato (pueblo de brotes de bambú) son bocadillos japoneses de chocolate con forma de brotes de bambú, con base de galleta y cobertura de chocolate.",
          de: "Takenoko no Sato (Bambussprossen-Dorf) sind japanische Schokoladensnacks in Form von Bambussprossen, mit Keksbasis und Schokoladenüberzug.",
          nl: "Takenoko no Sato (bamboescheut dorp) zijn Japanse chocoladesnacks gevormd als bamboescheuten, met een koekjesbasis en chocoladelaag."
        }
      },
      {
        question: {
          en: "Which Mexican beverage was one of the earliest forms of chocolate consumption?",
          es: "¿Qué bebida mexicana fue una de las primeras formas de consumo de chocolate?",
          de: "Welches mexikanische Getränk war eine der frühesten Formen des Schokoladenkonsums?",
          nl: "Welke Mexicaanse drank was een van de vroegste vormen van chocoladeconsumptie?"
        },
        options: [
          { en: "Café de olla", es: "Café de olla", de: "Café de olla", nl: "Café de olla" },
          { en: "Xocolatl", es: "Xocolatl", de: "Xocolatl", nl: "Xocolatl" },
          { en: "Horchata", es: "Horchata", de: "Horchata", nl: "Horchata" },
          { en: "Champurrado", es: "Champurrado", de: "Champurrado", nl: "Champurrado" }
        ],
        correct: 1,
        explanation: {
          en: "Xocolatl was the original Aztec chocolate drink, made from cacao beans, water, and spices, consumed long before European contact.",
          es: "Xocolatl era la bebida original azteca de chocolate, hecha de granos de cacao, agua y especias, consumida mucho antes del contacto europeo.",
          de: "Xocolatl war das ursprüngliche aztekische Schokoladengetränk, hergestellt aus Kakaobohnen, Wasser und Gewürzen, konsumiert lange vor dem europäischen Kontakt.",
          nl: "Xocolatl was de oorspronkelijke Azteekse chocoladedrank, gemaakt van cacaobonen, water en kruiden, geconsumeerd lang voor Europees contact."
        }
      },
      {
        question: {
          en: "What is the traditional British chocolate dessert served at Christmas?",
          es: "¿Cuál es el postre británico tradicional de chocolate servido en Navidad?",
          de: "Was ist das traditionelle britische Schokoladendessert, das zu Weihnachten serviert wird?",
          nl: "Wat is het traditionele Britse chocoladedessert dat met Kerstmis wordt geserveerd?"
        },
        options: [
          { en: "Chocolate trifle", es: "Trifle de chocolate", de: "Schokoladen-Trifle", nl: "Chocolade trifle" },
          { en: "Christmas pudding", es: "Pudín navideño", de: "Weihnachtspudding", nl: "Kerstpudding" },
          { en: "Chocolate log", es: "Tronco de chocolate", de: "Schokoladenstamm", nl: "Chocoladestam" },
          { en: "Mince pie", es: "Pastel de carne picada", de: "Hackfleischpastete", nl: "Gehaktpastei" }
        ],
        correct: 2,
        explanation: {
          en: "Chocolate log (Yule log or Bûche de Noël) is a traditional Christmas dessert in Britain, shaped like a log and often decorated with chocolate bark texture.",
          es: "El tronco de chocolate (tronco de Navidad o Bûche de Noël) es un postre navideño tradicional en Gran Bretaña, con forma de tronco y a menudo decorado con textura de corteza de chocolate.",
          de: "Schokoladenstamm (Weihnachtsstamm oder Bûche de Noël) ist ein traditionelles Weihnachtsdessert in Großbritannien, stammförmig und oft mit Schokoladenrinden-Textur dekoriert.",
          nl: "Chocoladestam (kerstblok of Bûche de Noël) is een traditioneel kerstdessert in Groot-Brittannië, gevormd als een stam en vaak versierd met chocoladeschors textuur."
        }
      },
      {
        question: {
          en: "Which South American country is famous for chocolate con churros?",
          es: "¿Qué país sudamericano es famoso por el chocolate con churros?",
          de: "Welches südamerikanische Land ist berühmt für Chocolate con Churros?",
          nl: "Welk Zuid-Amerikaans land is beroemd om chocolate con churros?"
        },
        options: [
          { en: "Brazil", es: "Brasil", de: "Brasilien", nl: "Brazilië" },
          { en: "Argentina", es: "Argentina", de: "Argentinien", nl: "Argentinië" },
          { en: "Colombia", es: "Colombia", de: "Kolumbien", nl: "Colombia" },
          { en: "Peru", es: "Perú", de: "Peru", nl: "Peru" }
        ],
        correct: 1,
        explanation: {
          en: "Argentina is famous for its chocolate con churros tradition, where thick hot chocolate is served with fried pastry churros for dipping.",
          es: "Argentina es famosa por su tradición de chocolate con churros, donde se sirve chocolate caliente espeso con churros de masa frita para mojar.",
          de: "Argentinien ist berühmt für seine Chocolate con Churros-Tradition, wo dicke heiße Schokolade mit frittierten Teig-Churros zum Dippen serviert wird.",
          nl: "Argentinië is beroemd om zijn chocolate con churros traditie, waar dikke warme chocolademelk wordt geserveerd met gefrituurde deeg churros om te dippen."
        }
      },
      {
        question: {
          en: "What is the French chocolate cake without flour called?",
          es: "¿Cómo se llama el pastel francés de chocolate sin harina?",
          de: "Wie heißt der französische Schokoladenkuchen ohne Mehl?",
          nl: "Hoe heet de Franse chocoladetaart zonder meel?"
        },
        options: [
          { en: "Gâteau au chocolat", es: "Gâteau au chocolat", de: "Gâteau au chocolat", nl: "Gâteau au chocolat" },
          { en: "Fondant au chocolat", es: "Fondant au chocolat", de: "Fondant au chocolat", nl: "Fondant au chocolat" },
          { en: "Moelleux au chocolat", es: "Moelleux au chocolat", de: "Moelleux au chocolat", nl: "Moelleux au chocolat" },
          { en: "Marquise au chocolat", es: "Marquise au chocolat", de: "Marquise au chocolat", nl: "Marquise au chocolat" }
        ],
        correct: 3,
        explanation: {
          en: "Marquise au chocolat is a rich French chocolate cake made without flour, consisting mainly of chocolate, butter, eggs, and sugar.",
          es: "Marquise au chocolat es un rico pastel francés de chocolate hecho sin harina, consistiendo principalmente de chocolate, mantequilla, huevos y azúcar.",
          de: "Marquise au chocolat ist ein reichhaltiger französischer Schokoladenkuchen ohne Mehl, bestehend hauptsächlich aus Schokolade, Butter, Eiern und Zucker.",
          nl: "Marquise au chocolat is een rijke Franse chocoladetaart gemaakt zonder meel, bestaande voornamelijk uit chocolade, boter, eieren en suiker."
        }
      },
      {
        question: {
          en: "Which Middle Eastern dessert features chocolate and phyllo pastry?",
          es: "¿Qué postre del Medio Oriente incluye chocolate y masa phyllo?",
          de: "Welches nahöstliche Dessert enthält Schokolade und Phyllo-Teig?",
          nl: "Welk Midden-Oosters dessert bevat chocolade en phyllo deeg?"
        },
        options: [
          { en: "Baklava with chocolate", es: "Baklava con chocolate", de: "Baklava mit Schokolade", nl: "Baklava met chocolade" },
          { en: "Kunafa", es: "Kunafa", de: "Kunafa", nl: "Kunafa" },
          { en: "Ma'amoul", es: "Ma'amoul", de: "Ma'amoul", nl: "Ma'amoul" },
          { en: "Halva", es: "Halva", de: "Halva", nl: "Halva" }
        ],
        correct: 0,
        explanation: {
          en: "Modern variations of baklava include chocolate versions, where chocolate is added to the traditional nut filling or used as a coating.",
          es: "Las variaciones modernas del baklava incluyen versiones de chocolate, donde se agrega chocolate al relleno tradicional de nueces o se usa como cobertura.",
          de: "Moderne Variationen von Baklava umfassen Schokoladenversionen, wo Schokolade zur traditionellen Nussfüllung hinzugefügt oder als Überzug verwendet wird.",
          nl: "Moderne variaties van baklava omvatten chocoladeversies, waar chocolade wordt toegevoegd aan de traditionele notenvulling of gebruikt als coating."
        }
      },
      {
        question: {
          en: "What is the traditional Swiss chocolate fondue pot called?",
          es: "¿Cómo se llama la olla tradicional suiza para fondue de chocolate?",
          de: "Wie heißt der traditionelle Schweizer Schokoladen-Fondue-Topf?",
          nl: "Hoe heet de traditionele Zwitserse chocoladefondue pot?"
        },
        options: [
          { en: "Caquelon", es: "Caquelon", de: "Caquelon", nl: "Caquelon" },
          { en: "Rechaud", es: "Rechaud", de: "Rechaud", nl: "Rechaud" },
          { en: "Caquela", es: "Caquela", de: "Caquela", nl: "Caquela" },
          { en: "Rondeau", es: "Rondeau", de: "Rondeau", nl: "Rondeau" }
        ],
        correct: 0,
        explanation: {
          en: "A caquelon is the traditional Swiss earthenware pot used for cheese fondue, also adapted for chocolate fondue in modern cuisine.",
          es: "Un caquelon es la olla tradicional suiza de barro usada para fondue de queso, también adaptada para fondue de chocolate en la cocina moderna.",
          de: "Ein Caquelon ist der traditionelle Schweizer Steinguttopf für Käsefondue, auch für Schokoladenfondue in der modernen Küche adaptiert.",
          nl: "Een caquelon is de traditionele Zwitserse aardewerk pot gebruikt voor kaasfondue, ook aangepast voor chocoladefondue in moderne keuken."
        }
      },
      {
        question: {
          en: "Which Scandinavian country is known for its chocolate-covered marzipan?",
          es: "¿Qué país escandinavo es conocido por su mazapán cubierto de chocolate?",
          de: "Welches skandinavische Land ist für sein schokoladenüberzogenes Marzipan bekannt?",
          nl: "Welk Scandinavisch land is bekend om zijn met chocolade bedekte marsepein?"
        },
        options: [
          { en: "Sweden", es: "Suecia", de: "Schweden", nl: "Zweden" },
          { en: "Norway", es: "Noruega", de: "Norwegen", nl: "Noorwegen" },
          { en: "Denmark", es: "Dinamarca", de: "Dänemark", nl: "Denemarken" },
          { en: "Finland", es: "Finlandia", de: "Finnland", nl: "Finland" }
        ],
        correct: 2,
        explanation: {
          en: "Denmark is particularly famous for its high-quality marzipan covered in chocolate, often shaped into decorative figures and sold as confections.",
          es: "Dinamarca es particularmente famosa por su mazapán de alta calidad cubierto de chocolate, a menudo moldeado en figuras decorativas y vendido como confites.",
          de: "Dänemark ist besonders berühmt für sein hochwertiges, mit Schokolade überzogenes Marzipan, oft zu dekorativen Figuren geformt und als Süßwaren verkauft.",
          nl: "Denemarken is bijzonder beroemd om zijn hoogwaardige marsepein bedekt met chocolade, vaak gevormd tot decoratieve figuren en verkocht als snoep."
        }
      },
      {
        question: {
          en: "What is the Greek chocolate dessert made with semolina called?",
          es: "¿Cómo se llama el postre griego de chocolate hecho con sémola?",
          de: "Wie heißt das griechische Schokoladendessert aus Grieß?",
          nl: "Hoe heet het Griekse chocoladedessert gemaakt met griesmeel?"
        },
        options: [
          { en: "Galaktoboureko", es: "Galaktoboureko", de: "Galaktoboureko", nl: "Galaktoboureko" },
          { en: "Revani", es: "Revani", de: "Revani", nl: "Revani" },
          { en: "Sokolatina", es: "Sokolatina", de: "Sokolatina", nl: "Sokolatina" },
          { en: "Rizogalo", es: "Rizogalo", de: "Rizogalo", nl: "Rizogalo" }
        ],
        correct: 2,
        explanation: {
          en: "Sokolatina is a Greek chocolate dessert made with semolina, milk, and chocolate, similar to a chocolate pudding or custard.",
          es: "Sokolatina es un postre griego de chocolate hecho con sémola, leche y chocolate, similar a un pudín o natilla de chocolate.",
          de: "Sokolatina ist ein griechisches Schokoladendessert aus Grieß, Milch und Schokolade, ähnlich einem Schokoladenpudding oder einer Creme.",
          nl: "Sokolatina is een Grieks chocoladedessert gemaakt met griesmeel, melk en chocolade, vergelijkbaar met een chocoladepudding of vla."
        }
      },
      {
        question: {
          en: "Which Russian chocolate candy is filled with vodka?",
          es: "¿Qué dulce ruso de chocolate está relleno de vodka?",
          de: "Welche russische Schokoladensüßigkeit ist mit Wodka gefüllt?",
          nl: "Welke Russische chocoladesnoep is gevuld met wodka?"
        },
        options: [
          { en: "Ptichye Moloko", es: "Ptichye Moloko", de: "Ptichye Moloko", nl: "Ptichye Moloko" },
          { en: "Alyonka", es: "Alyonka", de: "Alyonka", nl: "Alyonka" },
          { en: "Vodka Chocolates", es: "Chocolates de Vodka", de: "Wodka-Schokoladen", nl: "Wodka Chocolaatjes" },
          { en: "Rot Front", es: "Rot Front", de: "Rot Front", nl: "Rot Front" }
        ],
        correct: 2,
        explanation: {
          en: "Vodka chocolates are specialty Russian confections with liquid vodka centers, often sold as luxury gifts or souvenirs.",
          es: "Los chocolates de vodka son confecciones rusas especiales con centros de vodka líquido, a menudo vendidos como regalos de lujo o souvenirs.",
          de: "Wodka-Schokoladen sind spezielle russische Süßwaren mit flüssigen Wodka-Zentren, oft als Luxusgeschenke oder Souvenirs verkauft.",
          nl: "Wodka chocolaatjes zijn speciale Russische lekkernijen met vloeibare wodka centra, vaak verkocht als luxe geschenken of souvenirs."
        }
      },
      {
        question: {
          en: "What is the Turkish chocolate dessert served in small glasses called?",
          es: "¿Cómo se llama el postre turco de chocolate servido en vasos pequeños?",
          de: "Wie heißt das türkische Schokoladendessert, das in kleinen Gläsern serviert wird?",
          nl: "Hoe heet het Turkse chocoladedessert geserveerd in kleine glaasjes?"
        },
        options: [
          { en: "Muhallabia", es: "Muhallabia", de: "Muhallabia", nl: "Muhallabia" },
          { en: "Sütlaç", es: "Sütlaç", de: "Sütlaç", nl: "Sütlaç" },
          { en: "Çikolatalı Supangle", es: "Çikolatalı Supangle", de: "Çikolatalı Supangle", nl: "Çikolatalı Supangle" },
          { en: "Tavuk Göğsü", es: "Tavuk Göğsü", de: "Tavuk Göğsü", nl: "Tavuk Göğsü" }
        ],
        correct: 2,
        explanation: {
          en: "Çikolatalı Supangle is a Turkish chocolate pudding dessert traditionally served in small glasses, similar to chocolate mousse.",
          es: "Çikolatalı Supangle es un postre turco de pudín de chocolate tradicionalmente servido en vasos pequeños, similar al mousse de chocolate.",
          de: "Çikolatalı Supangle ist ein türkisches Schokoladenpudding-Dessert, traditionell in kleinen Gläsern serviert, ähnlich Schokoladenmousse.",
          nl: "Çikolatalı Supangle is een Turks chocoladepudding dessert traditioneel geserveerd in kleine glaasjes, vergelijkbaar met chocolademousse."
        }
      },
      {
        question: {
          en: "Which Asian country created chocolate mochi ice cream?",
          es: "¿Qué país asiático creó el helado de mochi de chocolate?",
          de: "Welches asiatische Land erfand Schokoladen-Mochi-Eis?",
          nl: "Welk Aziatisch land creëerde chocolade mochi ijs?"
        },
        options: [
          { en: "China", es: "China", de: "China", nl: "China" },
          { en: "Japan", es: "Japón", de: "Japan", nl: "Japan" },
          { en: "South Korea", es: "Corea del Sur", de: "Südkorea", nl: "Zuid-Korea" },
          { en: "Taiwan", es: "Taiwán", de: "Taiwan", nl: "Taiwan" }
        ],
        correct: 1,
        explanation: {
          en: "Japan created chocolate mochi ice cream, combining traditional mochi (rice cake) with ice cream filling, including chocolate varieties.",
          es: "Japón creó el helado de mochi de chocolate, combinando mochi tradicional (pastel de arroz) con relleno de helado, incluyendo variedades de chocolate.",
          de: "Japan erfand Schokoladen-Mochi-Eis, eine Kombination aus traditionellem Mochi (Reiskuchen) mit Eisfüllung, einschließlich Schokoladenvarianten.",
          nl: "Japan creëerde chocolade mochi ijs, een combinatie van traditionele mochi (rijstcake) met ijsvulling, inclusief chocoladevariëteiten."
        }
      },
      {
        question: {
          en: "What is the traditional Peruvian chocolate drink made with cacao and spices?",
          es: "¿Cuál es la bebida tradicional peruana de chocolate hecha con cacao y especias?",
          de: "Wie heißt das traditionelle peruanische Schokoladengetränk aus Kakao und Gewürzen?",
          nl: "Wat is de traditionele Peruaanse chocoladedrank gemaakt met cacao en kruiden?"
        },
        options: [
          { en: "Chicha morada", es: "Chicha morada", de: "Chicha morada", nl: "Chicha morada" },
          { en: "Chocolate caliente", es: "Chocolate caliente", de: "Chocolate caliente", nl: "Chocolate caliente" },
          { en: "Chocolate de taza peruano", es: "Chocolate de taza peruano", de: "Chocolate de taza peruano", nl: "Chocolate de taza peruano" },
          { en: "Atole de chocolate", es: "Atole de chocolate", de: "Atole de chocolate", nl: "Atole de chocolate" }
        ],
        correct: 2,
        explanation: {
          en: "Chocolate de taza peruano is a traditional Peruvian hot chocolate made with native cacao and spices like cinnamon and cloves.",
          es: "Chocolate de taza peruano es un chocolate caliente tradicional peruano hecho con cacao nativo y especias como canela y clavos.",
          de: "Chocolate de taza peruano ist eine traditionelle peruanische heiße Schokolade aus einheimischem Kakao und Gewürzen wie Zimt und Nelken.",
          nl: "Chocolate de taza peruano is een traditionele Peruaanse warme chocolademelk gemaakt met inheemse cacao en kruiden zoals kaneel en kruidnagel."
        }
      },
      {
        question: {
          en: "What is the optimal temperature range for storing artisanal chocolate truffles?",
          es: "¿Cuál es el rango de temperatura óptimo para almacenar trufas de chocolate artesanales?",
          de: "Was ist der optimale Temperaturbereich für die Lagerung von handwerklichen Schokoladentrüffeln?",
          nl: "Wat is het optimale temperatuurbereik voor het bewaren van ambachtelijke chocoladetruffels?"
        },
        options: [
          { en: "15-18°C (59-64°F)", es: "15-18°C (59-64°F)", de: "15-18°C (59-64°F)", nl: "15-18°C (59-64°F)" },
          { en: "0-5°C (32-41°F)", es: "0-5°C (32-41°F)", de: "0-5°C (32-41°F)", nl: "0-5°C (32-41°F)" },
          { en: "25-30°C (77-86°F)", es: "25-30°C (77-86°F)", de: "25-30°C (77-86°F)", nl: "25-30°C (77-86°F)" },
          { en: "Below freezing", es: "Bajo cero", de: "Unter dem Gefrierpunkt", nl: "Onder het vriespunt" }
        ],
        correct: 0,
        explanation: {
          en: "Chocolate truffles are best stored at 15-18°C (59-64°F) to maintain texture and prevent bloom while preserving delicate flavors and ganache consistency.",
          es: "Las trufas de chocolate se almacenan mejor a 15-18°C (59-64°F) para mantener la textura y prevenir la floración mientras se preservan los sabores delicados y la consistencia del ganache.",
          de: "Schokoladentrüffel werden am besten bei 15-18°C (59-64°F) gelagert, um die Textur zu erhalten und Blüte zu verhindern, während zarte Aromen und Ganache-Konsistenz bewahrt werden.",
          nl: "Chocoladetruffels worden het best bewaard bij 15-18°C (59-64°F) om textuur te behouden en uitslag te voorkomen terwijl delicate smaken en ganache consistentie behouden blijven."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  } else if (typeof window !== 'undefined') {
    window.level6 = level6;
  }
})();