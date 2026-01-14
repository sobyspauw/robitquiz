// National Dishes Quiz - Level 1
(function() {
  const level1 = {
    name: {
      en: "National  Dishes Level 1",
      es: "National  Dishes Nivel 1",
      de: "National  Dishes Stufe 1",
      nl: "National  Dishes Level 1"
    },
    questions: [
      {
        question: {
          en: "What is the main ingredient in Italian 'Risotto'?",
          es: "¿Cuál es el ingrediente principal del 'Risotto' italiano?",
          de: "Was ist die Hauptzutat im italienischen 'Risotto'?",
          nl: "Wat is het hoofdingrediënt in Italiaanse 'Risotto'?"
        },
        options: [
          { en: "Pasta", es: "Pasta", de: "Pasta", nl: "Pasta" },
          { en: "Rice", es: "Arroz", de: "Reis", nl: "Rijst" },
          { en: "Barley", es: "Cebada", de: "Gerste", nl: "Gerst" },
          { en: "Quinoa", es: "Quinoa", de: "Quinoa", nl: "Quinoa" }
        ],
        correct: 1,
        explanation: {
          en: "Risotto is made with Arborio rice, slowly cooked with broth until it reaches a creamy consistency.",
          es: "El risotto se hace con arroz Arborio, cocido lentamente con caldo hasta lograr una consistencia cremosa.",
          de: "Risotto wird mit Arborio-Reis zubereitet, der langsam mit Brühe gekocht wird, bis er eine cremige Konsistenz erreicht.",
          nl: "Risotto wordt gemaakt met Arborio rijst, langzaam gekookt met bouillon tot het een romige consistentie krijgt."
        }
      },
      {
        question: {
          en: "Which country is the origin of 'Tacos'?",
          es: "¿Cuál es el país de origen de los 'Tacos'?",
          de: "Welches Land ist der Ursprung von 'Tacos'?",
          nl: "Welk land is de oorsprong van 'Tacos'?"
        },
        options: [
          { en: "Spain", es: "España", de: "Spanien", nl: "Spanje" },
          { en: "Mexico", es: "México", de: "Mexiko", nl: "Mexico" },
          { en: "Argentina", es: "Argentina", de: "Argentinien", nl: "Argentinië" },
          { en: "Peru", es: "Perú", de: "Peru", nl: "Peru" }
        ],
        correct: 1,
        explanation: {
          en: "Tacos originated in Mexico and consist of tortillas filled with various ingredients like meat, vegetables, and salsas.",
          es: "Los tacos se originaron en México y consisten en tortillas rellenas con varios ingredientes como carne, verduras y salsas.",
          de: "Tacos entstanden in Mexiko und bestehen aus Tortillas, die mit verschiedenen Zutaten wie Fleisch, Gemüse und Salsas gefüllt sind.",
          nl: "Taco's zijn ontstaan in Mexico en bestaan uit tortilla's gevuld met verschillende ingrediënten zoals vlees, groenten en salsa's."
        }
      },
      {
        question: {
          en: "What type of bread is traditionally used for French 'Croissants'?",
          es: "¿Qué tipo de pan se usa tradicionalmente para los 'Croissants' franceses?",
          de: "Welche Art von Brot wird traditionell für französische 'Croissants' verwendet?",
          nl: "Welk type brood wordt traditioneel gebruikt voor Franse 'Croissants'?"
        },
        options: [
          { en: "Sourdough", es: "Masa madre", de: "Sauerteig", nl: "Zuurdesem" },
          { en: "Puff pastry", es: "Hojaldre", de: "Blätterteig", nl: "Bladerdeeg" },
          { en: "Whole wheat", es: "Trigo integral", de: "Vollkorn", nl: "Volkoren" },
          { en: "Rye bread", es: "Pan de centeno", de: "Roggenbrot", nl: "Roggebrood" }
        ],
        correct: 1,
        explanation: {
          en: "Croissants are made with puff pastry (pâte feuilletée), which creates the characteristic flaky, buttery layers.",
          es: "Los croissants se hacen con hojaldre (pâte feuilletée), que crea las características capas escamosas y mantecosas.",
          de: "Croissants werden aus Blätterteig (pâte feuilletée) hergestellt, der die charakteristischen blättrigen, buttrigen Schichten erzeugt.",
          nl: "Croissants worden gemaakt van bladerdeeg (pâte feuilletée), wat de karakteristieke brokkelige, boterige lagen creëert."
        }
      },
      {
        question: {
          en: "Which country is famous for 'Fish and Chips'?",
          es: "¿Qué país es famoso por 'Fish and Chips'?",
          de: "Welches Land ist berühmt für 'Fish and Chips'?",
          nl: "Welk land is beroemd om 'Fish and Chips'?"
        },
        options: [
          { en: "Ireland", es: "Irlanda", de: "Irland", nl: "Ierland" },
          { en: "Scotland", es: "Escocia", de: "Schottland", nl: "Schotland" },
          { en: "England", es: "Inglaterra", de: "England", nl: "Engeland" },
          { en: "Wales", es: "Gales", de: "Wales", nl: "Wales" }
        ],
        correct: 2,
        explanation: {
          en: "Fish and chips is a traditional English dish consisting of battered and fried fish served with chips (french fries).",
          es: "Fish and chips es un plato tradicional inglés que consiste en pescado rebozado y frito servido con papas fritas.",
          de: "Fish and Chips ist ein traditionelles englisches Gericht aus paniertem und frittiertem Fisch, serviert mit Pommes frites.",
          nl: "Fish and chips is een traditioneel Engels gerecht bestaande uit gepaneerde en gefrituurde vis geserveerd met friet."
        }
      },
      {
        question: {
          en: "What is the main protein in Greek 'Moussaka'?",
          es: "¿Cuál es la proteína principal en la 'Moussaka' griega?",
          de: "Was ist das Hauptprotein in der griechischen 'Moussaka'?",
          nl: "Wat is het hoofdeiwit in Griekse 'Moussaka'?"
        },
        options: [
          { en: "Chicken", es: "Pollo", de: "Huhn", nl: "Kip" },
          { en: "Lamb", es: "Cordero", de: "Lamm", nl: "Lam" },
          { en: "Beef", es: "Carne de res", de: "Rindfleisch", nl: "Rundvlees" },
          { en: "Pork", es: "Cerdo", de: "Schweinefleisch", nl: "Varkensvlees" }
        ],
        correct: 1,
        explanation: {
          en: "Traditional Greek moussaka is made with layers of eggplant, ground lamb, and béchamel sauce.",
          es: "La moussaka griega tradicional se hace con capas de berenjena, cordero molido y salsa bechamel.",
          de: "Traditionelle griechische Moussaka wird mit Schichten aus Auberginen, Lammhackfleisch und Béchamelsauce zubereitet.",
          nl: "Traditionele Griekse moussaka wordt gemaakt met lagen aubergine, gehakt lamsvlees en bechamelsaus."
        }
      },
      {
        question: {
          en: "Which spice gives Indian 'Curry' its yellow color?",
          es: "¿Qué especia le da al 'Curry' indio su color amarillo?",
          de: "Welches Gewürz verleiht dem indischen 'Curry' seine gelbe Farbe?",
          nl: "Welke specerij geeft Indiase 'Curry' zijn gele kleur?"
        },
        options: [
          { en: "Saffron", es: "Azafrán", de: "Safran", nl: "Saffraan" },
          { en: "Turmeric", es: "Cúrcuma", de: "Kurkuma", nl: "Kurkuma" },
          { en: "Paprika", es: "Pimentón", de: "Paprika", nl: "Paprika" },
          { en: "Cumin", es: "Comino", de: "Kreuzkümmel", nl: "Komijn" }
        ],
        correct: 1,
        explanation: {
          en: "Turmeric is the spice that gives curry its distinctive yellow color and earthy flavor.",
          es: "La cúrcuma es la especia que le da al curry su distintivo color amarillo y sabor terroso.",
          de: "Kurkuma ist das Gewürz, das Curry seine charakteristische gelbe Farbe und erdigen Geschmack verleiht.",
          nl: "Kurkuma is de specerij die curry zijn kenmerkende gele kleur en aardse smaak geeft."
        }
      },
      {
        question: {
          en: "What is the traditional German dish 'Sauerbraten'?",
          es: "¿Qué es el plato tradicional alemán 'Sauerbraten'?",
          de: "Was ist das traditionelle deutsche Gericht 'Sauerbraten'?",
          nl: "Wat is het traditionele Duitse gerecht 'Sauerbraten'?"
        },
        options: [
          { en: "Pickled cabbage", es: "Repollo encurtido", de: "Eingelegter Kohl", nl: "Ingelegde kool" },
          { en: "Marinated roast beef", es: "Carne asada marinada", de: "Marinierter Rinderbraten", nl: "Gemarineerde rosbief" },
          { en: "Fermented bread", es: "Pan fermentado", de: "Fermentiertes Brot", nl: "Gefermenteerd brood" },
          { en: "Sour soup", es: "Sopa agria", de: "Saure Suppe", nl: "Zure soep" }
        ],
        correct: 1,
        explanation: {
          en: "Sauerbraten is a traditional German pot roast made from marinated beef that's been soaked in vinegar and spices.",
          es: "Sauerbraten es un asado tradicional alemán hecho de carne marinada que se ha remojado en vinagre y especias.",
          de: "Sauerbraten ist ein traditioneller deutscher Schmorbraten aus mariniertem Rindfleisch, das in Essig und Gewürzen eingelegt wurde.",
          nl: "Sauerbraten is een traditionele Duitse stoofschotel gemaakt van gemarineerd rundvlees dat in azijn en kruiden is gemarineerd."
        }
      },
      {
        question: {
          en: "Which country is the birthplace of 'Paella'?",
          es: "¿Cuál es el país de origen de la 'Paella'?",
          de: "Welches Land ist der Geburtsort der 'Paella'?",
          nl: "Welk land is de geboorteplaats van 'Paella'?"
        },
        options: [
          { en: "Portugal", es: "Portugal", de: "Portugal", nl: "Portugal" },
          { en: "Spain", es: "España", de: "Spanien", nl: "Spanje" },
          { en: "Italy", es: "Italia", de: "Italien", nl: "Italië" },
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" }
        ],
        correct: 1,
        explanation: {
          en: "Paella originated in Valencia, Spain, and is a rice dish traditionally cooked with saffron, vegetables, and various proteins.",
          es: "La paella se originó en Valencia, España, y es un plato de arroz tradicionalmente cocinado con azafrán, verduras y varias proteínas.",
          de: "Paella stammt aus Valencia, Spanien, und ist ein Reisgericht, das traditionell mit Safran, Gemüse und verschiedenen Proteinen gekocht wird.",
          nl: "Paella is ontstaan in Valencia, Spanje, en is een rijstgerecht dat traditioneel wordt gekookt met saffraan, groenten en verschillende eiwitten."
        }
      },
      {
        question: {
          en: "What is the main ingredient in Middle Eastern 'Hummus'?",
          es: "¿Cuál es el ingrediente principal del 'Hummus' de Oriente Medio?",
          de: "Was ist die Hauptzutat im nahöstlichen 'Hummus'?",
          nl: "Wat is het hoofdingrediënt in Midden-Oosterse 'Hummus'?"
        },
        options: [
          { en: "Lentils", es: "Lentejas", de: "Linsen", nl: "Linzen" },
          { en: "Chickpeas", es: "Garbanzos", de: "Kichererbsen", nl: "Kikkererwten" },
          { en: "Black beans", es: "Frijoles negros", de: "Schwarze Bohnen", nl: "Zwarte bonen" },
          { en: "White beans", es: "Frijoles blancos", de: "Weiße Bohnen", nl: "Witte bonen" }
        ],
        correct: 1,
        explanation: {
          en: "Hummus is made primarily from cooked chickpeas blended with tahini, olive oil, lemon juice, and garlic.",
          es: "El hummus se hace principalmente de garbanzos cocidos mezclados con tahini, aceite de oliva, jugo de limón y ajo.",
          de: "Hummus wird hauptsächlich aus gekochten Kichererbsen hergestellt, die mit Tahini, Olivenöl, Zitronensaft und Knoblauch vermischt werden.",
          nl: "Hummus wordt voornamelijk gemaakt van gekookte kikkererwten gemengd met tahini, olijfolie, citroensap en knoflook."
        }
      },
      {
        question: {
          en: "Which country is famous for 'Kimchi'?",
          es: "¿Qué país es famoso por el 'Kimchi'?",
          de: "Welches Land ist berühmt für 'Kimchi'?",
          nl: "Welk land is beroemd om 'Kimchi'?"
        },
        options: [
          { en: "Japan", es: "Japón", de: "Japan", nl: "Japan" },
          { en: "China", es: "China", de: "China", nl: "China" },
          { en: "South Korea", es: "Corea del Sur", de: "Südkorea", nl: "Zuid-Korea" },
          { en: "Thailand", es: "Tailandia", de: "Thailand", nl: "Thailand" }
        ],
        correct: 2,
        explanation: {
          en: "Kimchi is a traditional Korean fermented vegetable dish, usually made with napa cabbage and Korean chili pepper.",
          es: "El kimchi es un plato tradicional coreano de verduras fermentadas, generalmente hecho con repollo napa y chile coreano.",
          de: "Kimchi ist ein traditionelles koreanisches fermentiertes Gemüsegericht, das normalerweise aus Chinakohl und koreanischem Chili hergestellt wird.",
          nl: "Kimchi is een traditioneel Koreaans gefermenteerd groentegerecht, meestal gemaakt met Chinese kool en Koreaanse chilipepers."
        }
      },
      {
        question: {
          en: "What type of pasta is used in traditional Italian 'Carbonara'?",
          es: "¿Qué tipo de pasta se usa en la 'Carbonara' italiana tradicional?",
          de: "Welche Art von Pasta wird in der traditionellen italienischen 'Carbonara' verwendet?",
          nl: "Welk type pasta wordt gebruikt in traditionele Italiaanse 'Carbonara'?"
        },
        options: [
          { en: "Penne", es: "Penne", de: "Penne", nl: "Penne" },
          { en: "Spaghetti", es: "Espaguetis", de: "Spaghetti", nl: "Spaghetti" },
          { en: "Fettuccine", es: "Fettuccine", de: "Fettuccine", nl: "Fettuccine" },
          { en: "Rigatoni", es: "Rigatoni", de: "Rigatoni", nl: "Rigatoni" }
        ],
        correct: 1,
        explanation: {
          en: "Traditional carbonara is made with spaghetti, eggs, pecorino cheese, guanciale (or pancetta), and black pepper.",
          es: "La carbonara tradicional se hace con espaguetis, huevos, queso pecorino, guanciale (o panceta) y pimienta negra.",
          de: "Traditionelle Carbonara wird mit Spaghetti, Eiern, Pecorino-Käse, Guanciale (oder Pancetta) und schwarzem Pfeffer zubereitet.",
          nl: "Traditionele carbonara wordt gemaakt met spaghetti, eieren, pecorino kaas, guanciale (of pancetta) en zwarte peper."
        }
      },
      {
        question: {
          en: "What is the main meat used in Argentinian 'Asado'?",
          es: "¿Cuál es la carne principal utilizada en el 'Asado' argentino?",
          de: "Was ist das Hauptfleisch im argentinischen 'Asado'?",
          nl: "Wat is het hoofdvlees dat wordt gebruikt in Argentijnse 'Asado'?"
        },
        options: [
          { en: "Pork", es: "Cerdo", de: "Schweinefleisch", nl: "Varkensvlees" },
          { en: "Chicken", es: "Pollo", de: "Huhn", nl: "Kip" },
          { en: "Beef", es: "Carne de res", de: "Rindfleisch", nl: "Rundvlees" },
          { en: "Lamb", es: "Cordero", de: "Lamm", nl: "Lam" }
        ],
        correct: 2,
        explanation: {
          en: "Asado is a traditional Argentine barbecue featuring various cuts of beef grilled over an open flame or coals.",
          es: "El asado es una barbacoa tradicional argentina que presenta varios cortes de carne de res a la parrilla sobre fuego abierto o carbón.",
          de: "Asado ist ein traditionelles argentinisches Barbecue mit verschiedenen Rindfleischstücken, die über offenem Feuer oder Kohlen gegrillt werden.",
          nl: "Asado is een traditionele Argentijnse barbecue met verschillende stukken rundvlees gegrild op open vuur of kolen."
        }
      },
      {
        question: {
          en: "Which vegetable is the main ingredient in Russian 'Borscht'?",
          es: "¿Qué verdura es el ingrediente principal en el 'Borscht' ruso?",
          de: "Welches Gemüse ist die Hauptzutat im russischen 'Borscht'?",
          nl: "Welke groente is het hoofdingrediënt in Russische 'Borscht'?"
        },
        options: [
          { en: "Cabbage", es: "Repollo", de: "Kohl", nl: "Kool" },
          { en: "Carrots", es: "Zanahorias", de: "Karotten", nl: "Wortelen" },
          { en: "Beetroot", es: "Remolacha", de: "Rote Bete", nl: "Rode biet" },
          { en: "Potatoes", es: "Papas", de: "Kartoffeln", nl: "Aardappelen" }
        ],
        correct: 2,
        explanation: {
          en: "Borscht is a traditional Eastern European soup made primarily with beetroot, which gives it its distinctive red color.",
          es: "El borscht es una sopa tradicional de Europa del Este hecha principalmente con remolacha, que le da su distintivo color rojo.",
          de: "Borscht ist eine traditionelle osteuropäische Suppe, die hauptsächlich aus roter Bete hergestellt wird, die ihr ihre charakteristische rote Farbe verleiht.",
          nl: "Borscht is een traditionele Oost-Europese soep gemaakt voornamelijk met rode biet, wat de kenmerkende rode kleur geeft."
        }
      },
      {
        question: {
          en: "What is the traditional cooking method for Chinese 'Peking Duck'?",
          es: "¿Cuál es el método de cocción tradicional para el 'Pato Pekín' chino?",
          de: "Was ist die traditionelle Garmethode für chinesische 'Peking-Ente'?",
          nl: "Wat is de traditionele kookmethode voor Chinese 'Peking Eend'?"
        },
        options: [
          { en: "Steaming", es: "Al vapor", de: "Dämpfen", nl: "Stomen" },
          { en: "Roasting", es: "Asado", de: "Braten", nl: "Braden" },
          { en: "Frying", es: "Freír", de: "Braten", nl: "Frituren" },
          { en: "Boiling", es: "Hervir", de: "Kochen", nl: "Koken" }
        ],
        correct: 1,
        explanation: {
          en: "Peking duck is traditionally roasted in a closed oven until the skin becomes crispy and golden brown.",
          es: "El pato Pekín se asa tradicionalmente en un horno cerrado hasta que la piel se vuelve crujiente y dorada.",
          de: "Peking-Ente wird traditionell in einem geschlossenen Ofen gebraten, bis die Haut knusprig und goldbraun wird.",
          nl: "Peking eend wordt traditioneel geroosterd in een gesloten oven tot de huid knapperig en goudbruin wordt."
        }
      },
      {
        question: {
          en: "Which country is famous for 'Falafel'?",
          es: "¿Qué país es famoso por el 'Falafel'?",
          de: "Welches Land ist berühmt für 'Falafel'?",
          nl: "Welk land is beroemd om 'Falafel'?"
        },
        options: [
          { en: "Turkey", es: "Turquía", de: "Türkei", nl: "Turkije" },
          { en: "Lebanon", es: "Líbano", de: "Libanon", nl: "Libanon" },
          { en: "Greece", es: "Grecia", de: "Griechenland", nl: "Griekenland" },
          { en: "Egypt", es: "Egipto", de: "Ägypten", nl: "Egypte" }
        ],
        correct: 1,
        explanation: {
          en: "Falafel is a traditional Middle Eastern dish, particularly popular in Lebanon, made from ground chickpeas or fava beans.",
          es: "El falafel es un plato tradicional de Oriente Medio, particularmente popular en Líbano, hecho de garbanzos o habas molidas.",
          de: "Falafel ist ein traditionelles nahöstliches Gericht, besonders beliebt im Libanon, aus gemahlenen Kichererbsen oder Saubohnen.",
          nl: "Falafel is een traditioneel Midden-Oosters gerecht, vooral populair in Libanon, gemaakt van gemalen kikkererwten of tuinbonen."
        }
      },
      {
        question: {
          en: "What sauce is traditionally served with British 'Bangers and Mash'?",
          es: "¿Qué salsa se sirve tradicionalmente con 'Bangers and Mash' británico?",
          de: "Welche Sauce wird traditionell mit britischen 'Bangers and Mash' serviert?",
          nl: "Welke saus wordt traditioneel geserveerd bij Britse 'Bangers and Mash'?"
        },
        options: [
          { en: "Mint sauce", es: "Salsa de menta", de: "Minzsauce", nl: "Muntsaus" },
          { en: "Onion gravy", es: "Salsa de cebolla", de: "Zwiebelsoße", nl: "Uienjus" },
          { en: "HP sauce", es: "Salsa HP", de: "HP-Sauce", nl: "HP saus" },
          { en: "Hollandaise", es: "Holandesa", de: "Hollandaise", nl: "Hollandaise" }
        ],
        correct: 1,
        explanation: {
          en: "Bangers and mash (sausages and mashed potatoes) is traditionally served with onion gravy in British cuisine.",
          es: "Bangers and mash (salchichas y puré de papas) se sirve tradicionalmente con salsa de cebolla en la cocina británica.",
          de: "Bangers and Mash (Würstchen und Kartoffelpüree) wird in der britischen Küche traditionell mit Zwiebelsoße serviert.",
          nl: "Bangers and mash (worstjes en aardappelpuree) wordt traditioneel geserveerd met uienjus in de Britse keuken."
        }
      },
      {
        question: {
          en: "What is the main grain used in traditional Ethiopian 'Injera'?",
          es: "¿Cuál es el grano principal utilizado en el 'Injera' etíope tradicional?",
          de: "Was ist das Hauptgetreide im traditionellen äthiopischen 'Injera'?",
          nl: "Wat is het hoofdgraan dat wordt gebruikt in traditionele Ethiopische 'Injera'?"
        },
        options: [
          { en: "Wheat", es: "Trigo", de: "Weizen", nl: "Tarwe" },
          { en: "Rice", es: "Arroz", de: "Reis", nl: "Rijst" },
          { en: "Teff", es: "Teff", de: "Teff", nl: "Teff" },
          { en: "Barley", es: "Cebada", de: "Gerste", nl: "Gerst" }
        ],
        correct: 2,
        explanation: {
          en: "Injera is a traditional Ethiopian flatbread made from teff flour, which is naturally gluten-free and high in nutrients.",
          es: "La injera es un pan plano tradicional etíope hecho de harina de teff, que es naturalmente libre de gluten y rica en nutrientes.",
          de: "Injera ist ein traditionelles äthiopisches Fladenbrot aus Teff-Mehl, das von Natur aus glutenfrei und nährstoffreich ist.",
          nl: "Injera is een traditioneel Ethiopisch platbrood gemaakt van teff meel, dat van nature glutenvrij en rijk aan voedingsstoffen is."
        }
      },
      {
        question: {
          en: "Which cooking technique is used for French 'Coq au Vin'?",
          es: "¿Qué técnica de cocción se utiliza para el 'Coq au Vin' francés?",
          de: "Welche Kochtechnik wird für französisches 'Coq au Vin' verwendet?",
          nl: "Welke kooktechniek wordt gebruikt voor Franse 'Coq au Vin'?"
        },
        options: [
          { en: "Grilling", es: "A la parrilla", de: "Grillen", nl: "Grillen" },
          { en: "Braising", es: "Estofado", de: "Schmoren", nl: "Sudderen" },
          { en: "Poaching", es: "Escalfado", de: "Pochieren", nl: "Pocheren" },
          { en: "Roasting", es: "Asado", de: "Braten", nl: "Braden" }
        ],
        correct: 1,
        explanation: {
          en: "Coq au Vin is made by braising chicken slowly in wine with vegetables and herbs until tender.",
          es: "El Coq au Vin se hace estofando pollo lentamente en vino con verduras y hierbas hasta que esté tierno.",
          de: "Coq au Vin wird hergestellt, indem Huhn langsam in Wein mit Gemüse und Kräutern geschmort wird, bis es zart ist.",
          nl: "Coq au Vin wordt gemaakt door kip langzaam te sudderen in wijn met groenten en kruiden tot het mals is."
        }
      },
      {
        question: {
          en: "What is the national dish of Hungary?",
          es: "¿Cuál es el plato nacional de Hungría?",
          de: "Was ist das Nationalgericht Ungarns?",
          nl: "Wat is het nationale gerecht van Hongarije?"
        },
        options: [
          { en: "Chicken Paprikash", es: "Pollo al Pimentón", de: "Hühnerpaprika", nl: "Kip Paprikash" },
          { en: "Goulash", es: "Gulash", de: "Gulasch", nl: "Goulash" },
          { en: "Schnitzel", es: "Escalope", de: "Schnitzel", nl: "Schnitzel" },
          { en: "Stuffed Cabbage", es: "Repollo Relleno", de: "Gefüllter Kohl", nl: "Gevulde Kool" }
        ],
        correct: 1,
        explanation: {
          en: "Goulash is Hungary's national dish, a hearty stew made with beef, onions, paprika, and vegetables.",
          es: "El gulash es el plato nacional de Hungría, un guiso abundante hecho con carne de res, cebollas, pimentón y verduras.",
          de: "Gulasch ist Ungarns Nationalgericht, ein herzhafter Eintopf aus Rindfleisch, Zwiebeln, Paprika und Gemüse.",
          nl: "Goulash is het nationale gerecht van Hongarije, een stevige stoofpot gemaakt met rundvlees, uien, paprika en groenten."
        }
      },
      {
        question: {
          en: "Which country is known for 'Pad Thai'?",
          es: "¿Qué país es conocido por el 'Pad Thai'?",
          de: "Welches Land ist bekannt für 'Pad Thai'?",
          nl: "Welk land is bekend om 'Pad Thai'?"
        },
        options: [
          { en: "Vietnam", es: "Vietnam", de: "Vietnam", nl: "Vietnam" },
          { en: "Thailand", es: "Tailandia", de: "Thailand", nl: "Thailand" },
          { en: "Malaysia", es: "Malasia", de: "Malaysia", nl: "Maleisië" },
          { en: "Indonesia", es: "Indonesia", de: "Indonesien", nl: "Indonesië" }
        ],
        correct: 1,
        explanation: {
          en: "Pad Thai is Thailand's famous stir-fried rice noodle dish with eggs, tofu, peanuts, and tamarind sauce.",
          es: "Pad Thai es el famoso plato tailandés de fideos de arroz salteados con huevos, tofu, cacahuetes y salsa de tamarindo.",
          de: "Pad Thai ist Thailands berühmtes gebratenes Reisnudelgericht mit Eiern, Tofu, Erdnüssen und Tamarindensauce.",
          nl: "Pad Thai is het beroemde Thaise roergebakken rijstnoedelgerecht met eieren, tofu, pinda's en tamarindesaus."
        }
      },
      {
        question: {
          en: "What is 'Haggis', a traditional Scottish dish?",
          es: "¿Qué es el 'Haggis', un plato tradicional escocés?",
          de: "Was ist 'Haggis', ein traditionelles schottisches Gericht?",
          nl: "Wat is 'Haggis', een traditioneel Schots gerecht?"
        },
        options: [
          { en: "Fish pie", es: "Pastel de pescado", de: "Fischkuchen", nl: "Vistaart" },
          { en: "Savory pudding made from sheep organs", es: "Pudín salado hecho de órganos de oveja", de: "Herzhafter Pudding aus Schafsinnereien", nl: "Hartige pudding gemaakt van schapenorganen" },
          { en: "Porridge", es: "Gachas", de: "Haferbrei", nl: "Havermout" },
          { en: "Bread pudding", es: "Budín de pan", de: "Brotpudding", nl: "Broodpudding" }
        ],
        correct: 1,
        explanation: {
          en: "Haggis is a savory pudding made from sheep's heart, liver, and lungs, mixed with oats, onions, and spices, traditionally cooked in a sheep's stomach.",
          es: "El haggis es un pudín salado hecho con corazón, hígado y pulmones de oveja, mezclado con avena, cebollas y especias, tradicionalmente cocinado en el estómago de una oveja.",
          de: "Haggis ist ein herzhafter Pudding aus Schafsherz, -leber und -lunge, gemischt mit Hafer, Zwiebeln und Gewürzen, traditionell im Schafsmagen gekocht.",
          nl: "Haggis is een hartige pudding gemaakt van schapenhart, -lever en -longen, gemengd met haver, uien en kruiden, traditioneel gekookt in een schapenmaag."
        }
      },
      {
        question: {
          en: "What is the main ingredient in Vietnamese 'Pho'?",
          es: "¿Cuál es el ingrediente principal del 'Pho' vietnamita?",
          de: "Was ist die Hauptzutat in vietnamesischem 'Pho'?",
          nl: "Wat is het hoofdingrediënt in Vietnamese 'Pho'?"
        },
        options: [
          { en: "Egg noodles", es: "Fideos de huevo", de: "Eiernudeln", nl: "Eiernoodels" },
          { en: "Rice noodles", es: "Fideos de arroz", de: "Reisnudeln", nl: "Rijstnoodels" },
          { en: "Wheat noodles", es: "Fideos de trigo", de: "Weizennudeln", nl: "Tarwenoodels" },
          { en: "Glass noodles", es: "Fideos de cristal", de: "Glasnudeln", nl: "Glasnoodels" }
        ],
        correct: 1,
        explanation: {
          en: "Pho is a Vietnamese soup made with rice noodles in a flavorful broth, typically served with beef or chicken and fresh herbs.",
          es: "El pho es una sopa vietnamita hecha con fideos de arroz en un caldo sabroso, típicamente servido con carne de res o pollo y hierbas frescas.",
          de: "Pho ist eine vietnamesische Suppe aus Reisnudeln in einer aromatischen Brühe, typischerweise mit Rindfleisch oder Huhn und frischen Kräutern serviert.",
          nl: "Pho is een Vietnamese soep gemaakt met rijstnoodels in een smaakvolle bouillon, meestal geserveerd met rundvlees of kip en verse kruiden."
        }
      },
      {
        question: {
          en: "Which country's national dish is 'Ceviche'?",
          es: "¿De qué país es el plato nacional el 'Ceviche'?",
          de: "Welches Landes Nationalgericht ist 'Ceviche'?",
          nl: "Van welk land is 'Ceviche' het nationale gerecht?"
        },
        options: [
          { en: "Mexico", es: "México", de: "Mexiko", nl: "Mexico" },
          { en: "Peru", es: "Perú", de: "Peru", nl: "Peru" },
          { en: "Chile", es: "Chile", de: "Chile", nl: "Chili" },
          { en: "Ecuador", es: "Ecuador", de: "Ecuador", nl: "Ecuador" }
        ],
        correct: 1,
        explanation: {
          en: "Ceviche is Peru's national dish, made from raw fish cured in citrus juices and mixed with onions, chili peppers, and cilantro.",
          es: "El ceviche es el plato nacional de Perú, hecho de pescado crudo curado en jugos cítricos y mezclado con cebollas, chiles y cilantro.",
          de: "Ceviche ist Perus Nationalgericht, aus rohem Fisch, der in Zitrusäften gegart und mit Zwiebeln, Chilischoten und Koriander gemischt wird.",
          nl: "Ceviche is het nationale gerecht van Peru, gemaakt van rauwe vis gerijpt in citrusvruchtensappen en gemengd met uien, chilipepers en koriander."
        }
      },
      {
        question: {
          en: "What is the traditional Polish dumpling called?",
          es: "¿Cómo se llama la albóndiga tradicional polaca?",
          de: "Wie heißt die traditionelle polnische Teigtasche?",
          nl: "Hoe heet de traditionele Poolse knoedel?"
        },
        options: [
          { en: "Pierogi", es: "Pierogi", de: "Pierogi", nl: "Pierogi" },
          { en: "Gnocchi", es: "Ñoquis", de: "Gnocchi", nl: "Gnocchi" },
          { en: "Ravioli", es: "Ravioles", de: "Ravioli", nl: "Ravioli" },
          { en: "Dumplings", es: "Albóndigas", de: "Klöße", nl: "Knoedels" }
        ],
        correct: 0,
        explanation: {
          en: "Pierogi are traditional Polish dumplings filled with various ingredients like potatoes, cheese, meat, or fruit.",
          es: "Los pierogi son albóndigas tradicionales polacas rellenas con varios ingredientes como papas, queso, carne o fruta.",
          de: "Pierogi sind traditionelle polnische Teigtaschen, gefüllt mit verschiedenen Zutaten wie Kartoffeln, Käse, Fleisch oder Obst.",
          nl: "Pierogi zijn traditionele Poolse knoedels gevuld met verschillende ingrediënten zoals aardappelen, kaas, vlees of fruit."
        }
      },
      {
        question: {
          en: "Which country is famous for 'Wiener Schnitzel'?",
          es: "¿Qué país es famoso por el 'Wiener Schnitzel'?",
          de: "Welches Land ist berühmt für 'Wiener Schnitzel'?",
          nl: "Welk land is beroemd om 'Wiener Schnitzel'?"
        },
        options: [
          { en: "Germany", es: "Alemania", de: "Deutschland", nl: "Duitsland" },
          { en: "Austria", es: "Austria", de: "Österreich", nl: "Oostenrijk" },
          { en: "Switzerland", es: "Suiza", de: "Schweiz", nl: "Zwitserland" },
          { en: "Czech Republic", es: "República Checa", de: "Tschechien", nl: "Tsjechië" }
        ],
        correct: 1,
        explanation: {
          en: "Wiener Schnitzel is Austria's famous breaded and fried veal cutlet, traditionally served with lemon and parsley potatoes.",
          es: "El Wiener Schnitzel es el famoso escalope de ternera empanado y frito de Austria, tradicionalmente servido con limón y papas perejil.",
          de: "Wiener Schnitzel ist Österreichs berühmtes paniertes und gebratenes Kalbsschnitzel, traditionell mit Zitrone und Petersilienkartoffeln serviert.",
          nl: "Wiener Schnitzel is Oostenrijks beroemde gepaneerde en gefrituurde kalfscotelet, traditioneel geserveerd met citroen en peterselieaardappelen."
        }
      },
      {
        question: {
          en: "What is 'Bibimbap' from South Korea?",
          es: "¿Qué es el 'Bibimbap' de Corea del Sur?",
          de: "Was ist 'Bibimbap' aus Südkorea?",
          nl: "Wat is 'Bibimbap' uit Zuid-Korea?"
        },
        options: [
          { en: "Rice bowl with mixed vegetables and egg", es: "Tazón de arroz con verduras mixtas y huevo", de: "Reisschale mit gemischtem Gemüse und Ei", nl: "Rijstkom met gemengde groenten en ei" },
          { en: "Noodle soup", es: "Sopa de fideos", de: "Nudelsuppe", nl: "Noedelsoep" },
          { en: "Grilled meat", es: "Carne a la parrilla", de: "Gegrilltes Fleisch", nl: "Gegrild vlees" },
          { en: "Fried pancake", es: "Panqueque frito", de: "Gebratener Pfannkuchen", nl: "Gebakken pannenkoek" }
        ],
        correct: 0,
        explanation: {
          en: "Bibimbap is a Korean rice dish topped with assorted vegetables, meat, a fried egg, and gochujang (chili pepper paste).",
          es: "El bibimbap es un plato coreano de arroz cubierto con verduras variadas, carne, un huevo frito y gochujang (pasta de chile).",
          de: "Bibimbap ist ein koreanisches Reisgericht mit verschiedenem Gemüse, Fleisch, einem Spiegelei und Gochujang (Chilipaste).",
          nl: "Bibimbap is een Koreaans rijstgerecht met diverse groenten, vlees, een gebakken ei en gochujang (chilipepers pasta)."
        }
      },
      {
        question: {
          en: "What is the main cheese used in traditional Greek Salad?",
          es: "¿Cuál es el queso principal utilizado en la Ensalada Griega tradicional?",
          de: "Welcher Käse wird hauptsächlich im traditionellen griechischen Salat verwendet?",
          nl: "Welke kaas wordt voornamelijk gebruikt in traditionele Griekse Salade?"
        },
        options: [
          { en: "Mozzarella", es: "Mozzarella", de: "Mozzarella", nl: "Mozzarella" },
          { en: "Cheddar", es: "Cheddar", de: "Cheddar", nl: "Cheddar" },
          { en: "Feta", es: "Feta", de: "Feta", nl: "Feta" },
          { en: "Parmesan", es: "Parmesano", de: "Parmesan", nl: "Parmezaan" }
        ],
        correct: 2,
        explanation: {
          en: "Traditional Greek salad features feta cheese along with tomatoes, cucumbers, olives, onions, and olive oil.",
          es: "La ensalada griega tradicional presenta queso feta junto con tomates, pepinos, aceitunas, cebollas y aceite de oliva.",
          de: "Traditioneller griechischer Salat enthält Feta-Käse zusammen mit Tomaten, Gurken, Oliven, Zwiebeln und Olivenöl.",
          nl: "Traditionele Griekse salade bevat feta kaas samen met tomaten, komkommers, olijven, uien en olijfolie."
        }
      },
      {
        question: {
          en: "Which country is the origin of 'Butter Chicken'?",
          es: "¿Cuál es el país de origen del 'Pollo con Mantequilla'?",
          de: "Welches Land ist der Ursprung von 'Butter Chicken'?",
          nl: "Welk land is de oorsprong van 'Boter Kip'?"
        },
        options: [
          { en: "Pakistan", es: "Pakistán", de: "Pakistan", nl: "Pakistan" },
          { en: "India", es: "India", de: "Indien", nl: "India" },
          { en: "Bangladesh", es: "Bangladesh", de: "Bangladesch", nl: "Bangladesh" },
          { en: "Sri Lanka", es: "Sri Lanka", de: "Sri Lanka", nl: "Sri Lanka" }
        ],
        correct: 1,
        explanation: {
          en: "Butter Chicken originated in India, specifically in Delhi, and features tender chicken in a creamy tomato-based sauce.",
          es: "El Pollo con Mantequilla se originó en India, específicamente en Delhi, y presenta pollo tierno en una salsa cremosa a base de tomate.",
          de: "Butter Chicken stammt aus Indien, speziell aus Delhi, und enthält zartes Huhn in einer cremigen Tomatensauce.",
          nl: "Boter Kip is ontstaan in India, specifiek in Delhi, en bevat mals kip in een romige tomatensaus."
        }
      },
      {
        question: {
          en: "What is 'Poutine' from Canada?",
          es: "¿Qué es la 'Poutine' de Canadá?",
          de: "Was ist 'Poutine' aus Kanada?",
          nl: "Wat is 'Poutine' uit Canada?"
        },
        options: [
          { en: "Maple syrup dessert", es: "Postre de jarabe de arce", de: "Ahornsirup-Dessert", nl: "Ahornsirop dessert" },
          { en: "French fries with cheese curds and gravy", es: "Papas fritas con queso en grano y salsa", de: "Pommes frites mit Käsebruch und Soße", nl: "Frietjes met kaaskorrels en jus" },
          { en: "Smoked salmon", es: "Salmón ahumado", de: "Geräucherter Lachs", nl: "Gerookte zalm" },
          { en: "Meat pie", es: "Pastel de carne", de: "Fleischpastete", nl: "Vleespastei" }
        ],
        correct: 1,
        explanation: {
          en: "Poutine is a Canadian dish from Quebec consisting of french fries topped with cheese curds and smothered in gravy.",
          es: "La poutine es un plato canadiense de Quebec que consiste en papas fritas cubiertas con queso en grano y bañadas en salsa.",
          de: "Poutine ist ein kanadisches Gericht aus Quebec, bestehend aus Pommes frites mit Käsebruch und Soße übergossen.",
          nl: "Poutine is een Canadees gerecht uit Quebec bestaande uit frietjes bedekt met kaaskorrels en overgoten met jus."
        }
      },
      {
        question: {
          en: "What is the national dish of Jamaica?",
          es: "¿Cuál es el plato nacional de Jamaica?",
          de: "Was ist das Nationalgericht Jamaikas?",
          nl: "Wat is het nationale gerecht van Jamaica?"
        },
        options: [
          { en: "Curry goat", es: "Cabra al curry", de: "Curry-Ziege", nl: "Curry geit" },
          { en: "Ackee and saltfish", es: "Ackee y pescado salado", de: "Ackee und Salzfisch", nl: "Ackee en zoutvis" },
          { en: "Jerk chicken", es: "Pollo jerk", de: "Jerk-Huhn", nl: "Jerk kip" },
          { en: "Rice and peas", es: "Arroz con guisantes", de: "Reis mit Erbsen", nl: "Rijst en erwten" }
        ],
        correct: 1,
        explanation: {
          en: "Ackee and saltfish is Jamaica's national dish, made with ackee fruit and salted codfish, typically served with breadfruit or dumplings.",
          es: "Ackee y pescado salado es el plato nacional de Jamaica, hecho con fruta ackee y bacalao salado, típicamente servido con fruta de pan o albóndigas.",
          de: "Ackee und Salzfisch ist Jamaikas Nationalgericht, aus Ackee-Frucht und gesalzenem Kabeljau, typischerweise mit Brotfrucht oder Klößen serviert.",
          nl: "Ackee en zoutvis is het nationale gerecht van Jamaica, gemaakt met ackee vrucht en gezouten kabeljauw, meestal geserveerd met broodvrucht of knoedels."
        }
      },
      {
        question: {
          en: "Which country is famous for 'Nasi Goreng'?",
          es: "¿Qué país es famoso por el 'Nasi Goreng'?",
          de: "Welches Land ist berühmt für 'Nasi Goreng'?",
          nl: "Welk land is beroemd om 'Nasi Goreng'?"
        },
        options: [
          { en: "Malaysia", es: "Malasia", de: "Malaysia", nl: "Maleisië" },
          { en: "Indonesia", es: "Indonesia", de: "Indonesien", nl: "Indonesië" },
          { en: "Singapore", es: "Singapur", de: "Singapur", nl: "Singapore" },
          { en: "Philippines", es: "Filipinas", de: "Philippinen", nl: "Filipijnen" }
        ],
        correct: 1,
        explanation: {
          en: "Nasi Goreng is Indonesia's national dish, a fried rice dish flavored with sweet soy sauce, shallots, garlic, and chili.",
          es: "Nasi Goreng es el plato nacional de Indonesia, un plato de arroz frito condimentado con salsa de soja dulce, chalotes, ajo y chile.",
          de: "Nasi Goreng ist Indonesiens Nationalgericht, ein gebratenes Reisgericht mit süßer Sojasoße, Schalotten, Knoblauch und Chili.",
          nl: "Nasi Goreng is het nationale gerecht van Indonesië, een gebakken rijstgerecht gekruid met zoete sojasaus, sjalotten, knoflook en chili."
        }
      },
      {
        question: {
          en: "What is the traditional Brazilian stew 'Feijoada' made with?",
          es: "¿Con qué se hace el guiso tradicional brasileño 'Feijoada'?",
          de: "Womit wird der traditionelle brasilianische Eintopf 'Feijoada' zubereitet?",
          nl: "Waarmee wordt de traditionele Braziliaanse stoofpot 'Feijoada' gemaakt?"
        },
        options: [
          { en: "Lentils and vegetables", es: "Lentejas y verduras", de: "Linsen und Gemüse", nl: "Linzen en groenten" },
          { en: "Black beans and pork", es: "Frijoles negros y cerdo", de: "Schwarze Bohnen und Schweinefleisch", nl: "Zwarte bonen en varkensvlees" },
          { en: "Chickpeas and chicken", es: "Garbanzos y pollo", de: "Kichererbsen und Huhn", nl: "Kikkererwten en kip" },
          { en: "White beans and beef", es: "Frijoles blancos y carne de res", de: "Weiße Bohnen und Rindfleisch", nl: "Witte bonen en rundvlees" }
        ],
        correct: 1,
        explanation: {
          en: "Feijoada is Brazil's national dish, a hearty stew made with black beans and various cuts of pork, served with rice, orange slices, and farofa.",
          es: "La feijoada es el plato nacional de Brasil, un guiso abundante hecho con frijoles negros y varios cortes de cerdo, servido con arroz, rodajas de naranja y farofa.",
          de: "Feijoada ist Brasiliens Nationalgericht, ein herzhafter Eintopf aus schwarzen Bohnen und verschiedenen Schweinefleischstücken, serviert mit Reis, Orangenscheiben und Farofa.",
          nl: "Feijoada is het nationale gerecht van Brazilië, een stevige stoofpot gemaakt met zwarte bonen en verschillende stukken varkensvlees, geserveerd met rijst, sinaasappelschijfjes en farofa."
        }
      },
      {
        question: {
          en: "What is 'Shakshuka' commonly eaten for?",
          es: "¿Para qué se come comúnmente el 'Shakshuka'?",
          de: "Wofür wird 'Shakshuka' üblicherweise gegessen?",
          nl: "Waarvoor wordt 'Shakshuka' meestal gegeten?"
        },
        options: [
          { en: "Breakfast", es: "Desayuno", de: "Frühstück", nl: "Ontbijt" },
          { en: "Lunch", es: "Almuerzo", de: "Mittagessen", nl: "Lunch" },
          { en: "Dinner", es: "Cena", de: "Abendessen", nl: "Diner" },
          { en: "Dessert", es: "Postre", de: "Dessert", nl: "Dessert" }
        ],
        correct: 0,
        explanation: {
          en: "Shakshuka is a Middle Eastern/North African dish of poached eggs in tomato sauce with peppers and spices, typically eaten for breakfast or brunch.",
          es: "Shakshuka es un plato de Oriente Medio/Norte de África de huevos escalfados en salsa de tomate con pimientos y especias, típicamente comido para el desayuno o brunch.",
          de: "Shakshuka ist ein nahöstliches/nordafrikanisches Gericht aus pochierten Eiern in Tomatensauce mit Paprika und Gewürzen, typischerweise zum Frühstück oder Brunch gegessen.",
          nl: "Shakshuka is een Midden-Oosters/Noord-Afrikaans gerecht van gepocheerde eieren in tomatensaus met paprika's en kruiden, meestal gegeten als ontbijt of brunch."
        }
      },
      {
        question: {
          en: "Which country is famous for 'Fondue'?",
          es: "¿Qué país es famoso por la 'Fondue'?",
          de: "Welches Land ist berühmt für 'Fondue'?",
          nl: "Welk land is beroemd om 'Fondue'?"
        },
        options: [
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "Switzerland", es: "Suiza", de: "Schweiz", nl: "Zwitserland" },
          { en: "Italy", es: "Italia", de: "Italien", nl: "Italië" },
          { en: "Austria", es: "Austria", de: "Österreich", nl: "Oostenrijk" }
        ],
        correct: 1,
        explanation: {
          en: "Fondue is a traditional Swiss dish of melted cheese served in a communal pot, with bread cubes dipped into it.",
          es: "La fondue es un plato tradicional suizo de queso derretido servido en una olla comunal, con cubos de pan sumergidos en él.",
          de: "Fondue ist ein traditionelles Schweizer Gericht aus geschmolzenem Käse, das in einem gemeinsamen Topf serviert wird, mit Brotwürfeln zum Eintauchen.",
          nl: "Fondue is een traditioneel Zwitsers gerecht van gesmolten kaas geserveerd in een gemeenschappelijke pot, met broodblokjes om erin te dopen."
        }
      },
      {
        question: {
          en: "What is the main ingredient in Spanish 'Gazpacho'?",
          es: "¿Cuál es el ingrediente principal del 'Gazpacho' español?",
          de: "Was ist die Hauptzutat in spanischem 'Gazpacho'?",
          nl: "Wat is het hoofdingrediënt in Spaanse 'Gazpacho'?"
        },
        options: [
          { en: "Potatoes", es: "Papas", de: "Kartoffeln", nl: "Aardappelen" },
          { en: "Tomatoes", es: "Tomates", de: "Tomaten", nl: "Tomaten" },
          { en: "Peppers", es: "Pimientos", de: "Paprika", nl: "Paprika's" },
          { en: "Cucumbers", es: "Pepinos", de: "Gurken", nl: "Komkommers" }
        ],
        correct: 1,
        explanation: {
          en: "Gazpacho is a traditional Spanish cold soup made primarily from tomatoes, cucumbers, peppers, onions, garlic, and olive oil.",
          es: "El gazpacho es una sopa fría tradicional española hecha principalmente de tomates, pepinos, pimientos, cebollas, ajo y aceite de oliva.",
          de: "Gazpacho ist eine traditionelle spanische kalte Suppe, hauptsächlich aus Tomaten, Gurken, Paprika, Zwiebeln, Knoblauch und Olivenöl.",
          nl: "Gazpacho is een traditionele Spaanse koude soep gemaakt voornamelijk van tomaten, komkommers, paprika's, uien, knoflook en olijfolie."
        }
      },
      {
        question: {
          en: "What is 'Schnitzel' typically made from?",
          es: "¿De qué se hace típicamente el 'Schnitzel'?",
          de: "Woraus wird 'Schnitzel' typischerweise hergestellt?",
          nl: "Waar wordt 'Schnitzel' meestal van gemaakt?"
        },
        options: [
          { en: "Fish", es: "Pescado", de: "Fisch", nl: "Vis" },
          { en: "Chicken", es: "Pollo", de: "Huhn", nl: "Kip" },
          { en: "Veal or pork", es: "Ternera o cerdo", de: "Kalb oder Schwein", nl: "Kalfsvlees of varkensvlees" },
          { en: "Lamb", es: "Cordero", de: "Lamm", nl: "Lam" }
        ],
        correct: 2,
        explanation: {
          en: "Traditional schnitzel is made from thin slices of veal or pork that are breaded and fried until golden and crispy.",
          es: "El schnitzel tradicional se hace con rodajas finas de ternera o cerdo que se empanan y fríen hasta que estén doradas y crujientes.",
          de: "Traditionelles Schnitzel wird aus dünnen Scheiben von Kalb oder Schwein hergestellt, die paniert und goldbraun und knusprig gebraten werden.",
          nl: "Traditionele schnitzel wordt gemaakt van dunne plakjes kalfsvlees of varkensvlees die gepaneerd en goudbruin en knapperig gebakken worden."
        }
      },
      {
        question: {
          en: "Which country is the origin of 'Biryani'?",
          es: "¿Cuál es el país de origen del 'Biryani'?",
          de: "Welches Land ist der Ursprung von 'Biryani'?",
          nl: "Welk land is de oorsprong van 'Biryani'?"
        },
        options: [
          { en: "India", es: "India", de: "Indien", nl: "India" },
          { en: "Iran", es: "Irán", de: "Iran", nl: "Iran" },
          { en: "Pakistan", es: "Pakistán", de: "Pakistan", nl: "Pakistan" },
          { en: "Afghanistan", es: "Afganistán", de: "Afghanistan", nl: "Afghanistan" }
        ],
        correct: 0,
        explanation: {
          en: "Biryani originated in India, specifically during the Mughal era, and is a spiced rice dish layered with meat or vegetables.",
          es: "El biryani se originó en India, específicamente durante la era mogol, y es un plato de arroz especiado en capas con carne o verduras.",
          de: "Biryani stammt aus Indien, speziell aus der Mogul-Ära, und ist ein gewürztes Reisgericht mit Fleisch oder Gemüse in Schichten.",
          nl: "Biryani is ontstaan in India, specifiek tijdens het Mogol-tijdperk, en is een gekruid rijstgerecht met lagen vlees of groenten."
        }
      },
      {
        question: {
          en: "What type of meat is traditionally used in Turkish 'Döner Kebab'?",
          es: "¿Qué tipo de carne se usa tradicionalmente en el 'Döner Kebab' turco?",
          de: "Welche Fleischsorte wird traditionell im türkischen 'Döner Kebab' verwendet?",
          nl: "Welk type vlees wordt traditioneel gebruikt in Turkse 'Döner Kebab'?"
        },
        options: [
          { en: "Chicken", es: "Pollo", de: "Huhn", nl: "Kip" },
          { en: "Lamb or beef", es: "Cordero o carne de res", de: "Lamm oder Rind", nl: "Lam of rundvlees" },
          { en: "Pork", es: "Cerdo", de: "Schweinefleisch", nl: "Varkensvlees" },
          { en: "Fish", es: "Pescado", de: "Fisch", nl: "Vis" }
        ],
        correct: 1,
        explanation: {
          en: "Traditional Turkish döner kebab is made with lamb or beef that's been marinated with spices and slow-roasted on a vertical rotisserie.",
          es: "El döner kebab turco tradicional se hace con cordero o carne de res que ha sido marinado con especias y asado lentamente en un asador vertical.",
          de: "Traditioneller türkischer Döner Kebab wird aus Lamm oder Rind hergestellt, das mit Gewürzen mariniert und langsam am vertikalen Spieß gebraten wird.",
          nl: "Traditionele Turkse döner kebab wordt gemaakt met lam of rundvlees dat gemarineerdis met kruiden en langzaam geroosterd op een verticale spit."
        }
      },
      {
        question: {
          en: "What is 'Ramen' originally from?",
          es: "¿De dónde es originalmente el 'Ramen'?",
          de: "Woher stammt 'Ramen' ursprünglich?",
          nl: "Waar komt 'Ramen' oorspronkelijk vandaan?"
        },
        options: [
          { en: "Japan", es: "Japón", de: "Japan", nl: "Japan" },
          { en: "China", es: "China", de: "China", nl: "China" },
          { en: "Korea", es: "Corea", de: "Korea", nl: "Korea" },
          { en: "Vietnam", es: "Vietnam", de: "Vietnam", nl: "Vietnam" }
        ],
        correct: 1,
        explanation: {
          en: "Ramen originated in China and was later adapted and popularized in Japan, becoming a staple of Japanese cuisine.",
          es: "El ramen se originó en China y luego fue adaptado y popularizado en Japón, convirtiéndose en un elemento básico de la cocina japonesa.",
          de: "Ramen stammt aus China und wurde später in Japan adaptiert und popularisiert, wo es zu einem Grundnahrungsmittel der japanischen Küche wurde.",
          nl: "Ramen is ontstaan in China en werd later aangepast en populair gemaakt in Japan, waar het een hoofdbestanddeel van de Japanse keuken werd."
        }
      },
      {
        question: {
          en: "What is the national dish of South Africa?",
          es: "¿Cuál es el plato nacional de Sudáfrica?",
          de: "Was ist das Nationalgericht Südafrikas?",
          nl: "Wat is het nationale gerecht van Zuid-Afrika?"
        },
        options: [
          { en: "Bunny chow", es: "Bunny chow", de: "Bunny Chow", nl: "Bunny chow" },
          { en: "Bobotie", es: "Bobotie", de: "Bobotie", nl: "Bobotie" },
          { en: "Boerewors", es: "Boerewors", de: "Boerewors", nl: "Boerewors" },
          { en: "Biltong", es: "Biltong", de: "Biltong", nl: "Biltong" }
        ],
        correct: 1,
        explanation: {
          en: "Bobotie is South Africa's national dish, a spiced minced meat baked with an egg-based topping, influenced by Cape Malay cuisine.",
          es: "Bobotie es el plato nacional de Sudáfrica, carne picada especiada horneada con un topping a base de huevo, influenciado por la cocina Cape Malay.",
          de: "Bobotie ist Südafrikas Nationalgericht, gewürztes Hackfleisch, das mit einer Eiermasse überbacken wird, beeinflusst von der Cape-Malay-Küche.",
          nl: "Bobotie is het nationale gerecht van Zuid-Afrika, gekruid gehakt gebakken met een topping op basis van ei, beïnvloed door de Kaapse Maleisische keuken."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();
