// National Dishes Quiz - Level 2
(function() {
  const level2 = {
    name: {
      en: "National  Dishes Level 2",
      es: "National  Dishes Nivel 2",
      de: "National  Dishes Stufe 2",
      nl: "National  Dishes Level 2"
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
          en: "What type of rice is traditionally used in Spanish Paella?",
          es: "¿Qué tipo de arroz se usa tradicionalmente en la Paella española?",
          de: "Welche Reissorte wird traditionell in spanischer Paella verwendet?",
          nl: "Welk type rijst wordt traditioneel gebruikt in Spaanse Paella?"
        },
        options: [
          { en: "Basmati", es: "Basmati", de: "Basmati", nl: "Basmati" },
          { en: "Jasmine", es: "Jazmín", de: "Jasmin", nl: "Jasmijn" },
          { en: "Bomba or Calasparra", es: "Bomba o Calasparra", de: "Bomba oder Calasparra", nl: "Bomba of Calasparra" },
          { en: "Arborio", es: "Arborio", de: "Arborio", nl: "Arborio" }
        ],
        correct: 2,
        explanation: {
          en: "Authentic paella uses Bomba or Calasparra rice, short-grain varieties that absorb lots of liquid without becoming mushy.",
          es: "La paella auténtica usa arroz Bomba o Calasparra, variedades de grano corto que absorben mucho líquido sin volverse blandas.",
          de: "Authentische Paella verwendet Bomba- oder Calasparra-Reis, kurzkörnige Sorten, die viel Flüssigkeit aufnehmen, ohne matschig zu werden.",
          nl: "Authentieke paella gebruikt Bomba of Calasparra rijst, kortkorrelrassen die veel vloeistof absorberen zonder zacht te worden."
        }
      },
      {
        question: {
          en: "What is the key ingredient that distinguishes 'Tikka Masala' sauce?",
          es: "¿Cuál es el ingrediente clave que distingue la salsa 'Tikka Masala'?",
          de: "Was ist die Hauptzutat, die 'Tikka Masala'-Sauce auszeichnet?",
          nl: "Wat is het belangrijkste ingrediënt dat 'Tikka Masala' saus onderscheidt?"
        },
        options: [
          { en: "Coconut milk", es: "Leche de coco", de: "Kokosmilch", nl: "Kokosmelk" },
          { en: "Cream or yogurt", es: "Crema o yogur", de: "Sahne oder Joghurt", nl: "Room of yoghurt" },
          { en: "Tamarind", es: "Tamarindo", de: "Tamarinde", nl: "Tamarinde" },
          { en: "Ghee", es: "Ghee", de: "Ghee", nl: "Ghee" }
        ],
        correct: 1,
        explanation: {
          en: "Tikka Masala features a creamy tomato-based sauce enriched with cream or yogurt, giving it its signature smooth, rich texture.",
          es: "Tikka Masala presenta una salsa cremosa a base de tomate enriquecida con crema o yogur, dándole su textura suave y rica característica.",
          de: "Tikka Masala hat eine cremige Tomatensauce, die mit Sahne oder Joghurt angereichert ist und ihre charakteristische glatte, reichhaltige Textur erhält.",
          nl: "Tikka Masala heeft een romige tomatensaus verrijkt met room of yoghurt, wat de kenmerkende gladde, rijke textuur geeft."
        }
      },
      {
        question: {
          en: "What is the traditional meat used in Greek Gyros?",
          es: "¿Cuál es la carne tradicional utilizada en los Gyros griegos?",
          de: "Welches Fleisch wird traditionell in griechischem Gyros verwendet?",
          nl: "Wat is het traditionele vlees dat wordt gebruikt in Griekse Gyros?"
        },
        options: [
          { en: "Chicken", es: "Pollo", de: "Huhn", nl: "Kip" },
          { en: "Pork or lamb", es: "Cerdo o cordero", de: "Schwein oder Lamm", nl: "Varkensvlees of lam" },
          { en: "Beef", es: "Carne de res", de: "Rindfleisch", nl: "Rundvlees" },
          { en: "Veal", es: "Ternera", de: "Kalb", nl: "Kalfsvlees" }
        ],
        correct: 1,
        explanation: {
          en: "Traditional Greek gyros uses pork or lamb that's been marinated with herbs and spices, then slow-roasted on a vertical spit.",
          es: "Los gyros griegos tradicionales usan cerdo o cordero que ha sido marinado con hierbas y especias, luego asado lentamente en un asador vertical.",
          de: "Traditionelles griechisches Gyros verwendet Schwein oder Lamm, das mit Kräutern und Gewürzen mariniert und dann langsam am vertikalen Spieß gebraten wird.",
          nl: "Traditionele Griekse gyros gebruikt varkensvlees of lam dat gemarineerd is met kruiden en specerijen, dan langzaam geroosterd op een verticale spit."
        }
      },
      {
        question: {
          en: "What distinguishes 'Marinara' sauce from other Italian tomato sauces?",
          es: "¿Qué distingue la salsa 'Marinara' de otras salsas de tomate italianas?",
          de: "Was unterscheidet 'Marinara'-Sauce von anderen italienischen Tomatensaucen?",
          nl: "Wat onderscheidt 'Marinara' saus van andere Italiaanse tomatensauzen?"
        },
        options: [
          { en: "It contains seafood", es: "Contiene mariscos", de: "Sie enthält Meeresfrüchte", nl: "Het bevat zeevruchten" },
          { en: "It's simple with garlic, herbs, and tomatoes", es: "Es simple con ajo, hierbas y tomates", de: "Sie ist einfach mit Knoblauch, Kräutern und Tomaten", nl: "Het is eenvoudig met knoflook, kruiden en tomaten" },
          { en: "It has cream added", es: "Tiene crema agregada", de: "Sie hat Sahne hinzugefügt", nl: "Het heeft toegevoegde room" },
          { en: "It contains meat", es: "Contiene carne", de: "Sie enthält Fleisch", nl: "Het bevat vlees" }
        ],
        correct: 1,
        explanation: {
          en: "Despite its name ('mariner's sauce'), marinara is a simple, meatless sauce made with tomatoes, garlic, herbs like basil and oregano, and olive oil.",
          es: "A pesar de su nombre ('salsa del marinero'), la marinara es una salsa simple sin carne hecha con tomates, ajo, hierbas como albahaca y orégano, y aceite de oliva.",
          de: "Trotz ihres Namens ('Seemannssauce') ist Marinara eine einfache, fleischlose Sauce aus Tomaten, Knoblauch, Kräutern wie Basilikum und Oregano und Olivenöl.",
          nl: "Ondanks de naam ('zeeman saus'), is marinara een eenvoudige, vleesloze saus gemaakt met tomaten, knoflook, kruiden zoals basilicum en oregano, en olijfolie."
        }
      },
      {
        question: {
          en: "What is the traditional protein in Vietnamese Banh Mi sandwiches?",
          es: "¿Cuál es la proteína tradicional en los sándwiches Banh Mi vietnamitas?",
          de: "Was ist das traditionelle Protein in vietnamesischen Banh-Mi-Sandwiches?",
          nl: "Wat is het traditionele eiwit in Vietnamese Banh Mi sandwiches?"
        },
        options: [
          { en: "Beef", es: "Carne de res", de: "Rindfleisch", nl: "Rundvlees" },
          { en: "Pork (often pâté or cold cuts)", es: "Cerdo (a menudo paté o embutidos)", de: "Schwein (oft Pastete oder Aufschnitt)", nl: "Varkensvlees (vaak paté of vleeswaren)" },
          { en: "Chicken", es: "Pollo", de: "Huhn", nl: "Kip" },
          { en: "Fish", es: "Pescado", de: "Fisch", nl: "Vis" }
        ],
        correct: 1,
        explanation: {
          en: "Traditional banh mi features pork in various forms: pâté, grilled pork, or Vietnamese cold cuts (cha lua), reflecting French colonial influence.",
          es: "El banh mi tradicional presenta cerdo en varias formas: paté, cerdo a la parrilla o embutidos vietnamitas (cha lua), reflejando la influencia colonial francesa.",
          de: "Traditionelles Banh Mi enthält Schweinefleisch in verschiedenen Formen: Pastete, gegrilltes Schwein oder vietnamesischen Aufschnitt (Cha Lua), was den französischen Kolonialeinfluss widerspiegelt.",
          nl: "Traditionele banh mi bevat varkensvlees in verschillende vormen: paté, gegrild varkensvlees of Vietnamese vleeswaren (cha lua), wat Franse koloniale invloed weerspiegelt."
        }
      },
      {
        question: {
          en: "What makes 'Katsu' different from regular schnitzel?",
          es: "¿Qué hace que el 'Katsu' sea diferente del schnitzel regular?",
          de: "Was macht 'Katsu' anders als normales Schnitzel?",
          nl: "Wat maakt 'Katsu' anders dan gewone schnitzel?"
        },
        options: [
          { en: "It uses panko breadcrumbs", es: "Usa pan rallado panko", de: "Es verwendet Panko-Semmelbrösel", nl: "Het gebruikt panko paneermeel" },
          { en: "It's grilled not fried", es: "Se asa a la parrilla no se fríe", de: "Es wird gegrillt nicht gebraten", nl: "Het wordt gegrild niet gebakken" },
          { en: "It contains soy sauce", es: "Contiene salsa de soja", de: "Es enthält Sojasoße", nl: "Het bevat sojasaus" },
          { en: "It's always beef", es: "Siempre es carne de res", de: "Es ist immer Rindfleisch", nl: "Het is altijd rundvlees" }
        ],
        correct: 0,
        explanation: {
          en: "Japanese katsu is breaded with panko (coarse Japanese breadcrumbs) which creates an extra crispy, light coating compared to traditional schnitzel.",
          es: "El katsu japonés se empana con panko (pan rallado japonés grueso) que crea un recubrimiento extra crujiente y ligero en comparación con el schnitzel tradicional.",
          de: "Japanisches Katsu wird mit Panko (grobem japanischem Paniermehl) paniert, was eine extra knusprige, leichte Hülle im Vergleich zu traditionellem Schnitzel erzeugt.",
          nl: "Japanse katsu wordt gepaneerd met panko (grof Japans paneermeel) wat een extra knapperig, lichte coating creëert vergeleken met traditionele schnitzel."
        }
      },
      {
        question: {
          en: "What is the key spice in Indian 'Garam Masala'?",
          es: "¿Cuál es la especia clave en el 'Garam Masala' indio?",
          de: "Was ist das Hauptgewürz im indischen 'Garam Masala'?",
          nl: "Wat is de belangrijkste specerij in Indiase 'Garam Masala'?"
        },
        options: [
          { en: "Turmeric", es: "Cúrcuma", de: "Kurkuma", nl: "Kurkuma" },
          { en: "It's a blend (no single key spice)", es: "Es una mezcla (sin una especia clave única)", de: "Es ist eine Mischung (kein einzelnes Hauptgewürz)", nl: "Het is een mengsel (geen enkele hoofdspecerij)" },
          { en: "Cayenne pepper", es: "Pimienta de cayena", de: "Cayennepfeffer", nl: "Cayennepeper" },
          { en: "Mustard seeds", es: "Semillas de mostaza", de: "Senfsamen", nl: "Mostaardzaad" }
        ],
        correct: 1,
        explanation: {
          en: "Garam masala is a warming spice blend typically containing cumin, coriander, cardamom, black pepper, cinnamon, cloves, and nutmeg. No single spice dominates.",
          es: "Garam masala es una mezcla de especias cálidas que generalmente contiene comino, cilantro, cardamomo, pimienta negra, canela, clavos y nuez moscada. Ninguna especia única domina.",
          de: "Garam Masala ist eine wärmende Gewürzmischung, die typischerweise Kreuzkümmel, Koriander, Kardamom, schwarzen Pfeffer, Zimt, Nelken und Muskatnuss enthält. Kein einzelnes Gewürz dominiert.",
          nl: "Garam masala is een verwarmend specerijen mengsel dat typisch komijn, koriander, kardemom, zwarte peper, kaneel, kruidnagel en nootmuskaat bevat. Geen enkele specerij domineert."
        }
      },
      {
        question: {
          en: "What is the purpose of 'Miso' paste in Japanese cuisine?",
          es: "¿Cuál es el propósito de la pasta 'Miso' en la cocina japonesa?",
          de: "Was ist der Zweck von 'Miso'-Paste in der japanischen Küche?",
          nl: "Wat is het doel van 'Miso' pasta in de Japanse keuken?"
        },
        options: [
          { en: "Thickening agent", es: "Agente espesante", de: "Verdickungsmittel", nl: "Verdikkingsmiddel" },
          { en: "Umami flavoring and fermented seasoning", es: "Saborizante umami y condimento fermentado", de: "Umami-Würze und fermentiertes Gewürz", nl: "Umami smaakmaker en gefermenteerd kruid" },
          { en: "Sweetener", es: "Endulzante", de: "Süßungsmittel", nl: "Zoetstof" },
          { en: "Food coloring", es: "Colorante alimentario", de: "Lebensmittelfarbe", nl: "Voedselkleuring" }
        ],
        correct: 1,
        explanation: {
          en: "Miso is fermented soybean paste that adds deep umami flavor and saltiness to dishes like soups, marinades, and sauces.",
          es: "Miso es una pasta de soja fermentada que agrega un profundo sabor umami y salinidad a platos como sopas, adobos y salsas.",
          de: "Miso ist fermentierte Sojabohnenpaste, die tiefes Umami-Aroma und Salzigkeit zu Gerichten wie Suppen, Marinaden und Saucen hinzufügt.",
          nl: "Miso is gefermenteerde sojabonenpasta die diepe umami smaak en zoutheid toevoegt aan gerechten zoals soepen, marinades en sauzen."
        }
      },
      {
        question: {
          en: "What distinguishes Neapolitan pizza from other pizza styles?",
          es: "¿Qué distingue la pizza napolitana de otros estilos de pizza?",
          de: "Was unterscheidet neapolitanische Pizza von anderen Pizzastilen?",
          nl: "Wat onderscheidt Napolitaanse pizza van andere pizzastijlen?"
        },
        options: [
          { en: "Thick, fluffy crust", es: "Corteza gruesa y esponjosa", de: "Dicker, fluffiger Rand", nl: "Dikke, luchtige korst" },
          { en: "Thin crust with puffy, charred edges", es: "Corteza fina con bordes hinchados y carbonizados", de: "Dünner Teig mit aufgequollenen, verkohlten Rändern", nl: "Dunne bodem met opgezwollen, verkoold randen" },
          { en: "Deep-dish style", es: "Estilo plato hondo", de: "Deep-Dish-Stil", nl: "Deep-dish stijl" },
          { en: "Square shape", es: "Forma cuadrada", de: "Quadratische Form", nl: "Vierkante vorm" }
        ],
        correct: 1,
        explanation: {
          en: "Neapolitan pizza has a thin, soft center with a characteristic puffy, leopard-spotted charred crust (cornicione) from high-heat wood-fired ovens.",
          es: "La pizza napolitana tiene un centro fino y suave con un borde característico hinchado y carbonizado con manchas de leopardo (cornicione) de hornos de leña de alto calor.",
          de: "Neapolitanische Pizza hat eine dünne, weiche Mitte mit einem charakteristischen aufgequollenen, leopardgefleckten verkohlten Rand (Cornicione) aus Holzöfen mit hoher Hitze.",
          nl: "Napolitaanse pizza heeft een dun, zacht midden met een karakteristieke opgezwollen, luipaardgevlekte verkoold korst (cornicione) van hoge-hitte houtgestookte ovens."
        }
      },
      {
        question: {
          en: "What is the traditional fat used in Mexican 'Refried Beans' (Frijoles Refritos)?",
          es: "¿Cuál es la grasa tradicional utilizada en los 'Frijoles Refritos' mexicanos?",
          de: "Welches Fett wird traditionell in mexikanischen 'Refried Beans' (Frijoles Refritos) verwendet?",
          nl: "Wat is het traditionele vet dat wordt gebruikt in Mexicaanse 'Refried Beans' (Frijoles Refritos)?"
        },
        options: [
          { en: "Butter", es: "Mantequilla", de: "Butter", nl: "Boter" },
          { en: "Lard (pork fat)", es: "Manteca (grasa de cerdo)", de: "Schmalz (Schweinefett)", nl: "Reuzel (varkensvet)" },
          { en: "Olive oil", es: "Aceite de oliva", de: "Olivenöl", nl: "Olijfolie" },
          { en: "Coconut oil", es: "Aceite de coco", de: "Kokosöl", nl: "Kokosolie" }
        ],
        correct: 1,
        explanation: {
          en: "Traditional frijoles refritos use lard (manteca) to fry mashed pinto beans, giving them their characteristic rich flavor and creamy texture.",
          es: "Los frijoles refritos tradicionales usan manteca para freír frijoles pintos machacados, dándoles su sabor rico característico y textura cremosa.",
          de: "Traditionelle Frijoles Refritos verwenden Schmalz (Manteca), um zerdrückte Pintobohnen zu braten, was ihnen ihren charakteristischen reichen Geschmack und cremige Textur verleiht.",
          nl: "Traditionele frijoles refritos gebruiken reuzel (manteca) om gepureerde pintobonen te bakken, wat ze hun karakteristieke rijke smaak en romige textuur geeft."
        }
      },
      {
        question: {
          en: "What distinguishes 'Ragu Bolognese' from regular meat sauce?",
          es: "¿Qué distingue el 'Ragu Bolognese' de la salsa de carne regular?",
          de: "Was unterscheidet 'Ragu Bolognese' von normaler Fleischsauce?",
          nl: "Wat onderscheidt 'Ragu Bolognese' van gewone vleessaus?"
        },
        options: [
          { en: "It contains cream or milk", es: "Contiene crema o leche", de: "Es enthält Sahne oder Milch", nl: "Het bevat room of melk" },
          { en: "It's vegetarian", es: "Es vegetariano", de: "Es ist vegetarisch", nl: "Het is vegetarisch" },
          { en: "It has no tomatoes", es: "No tiene tomates", de: "Es hat keine Tomaten", nl: "Het heeft geen tomaten" },
          { en: "It's very spicy", es: "Es muy picante", de: "Es ist sehr scharf", nl: "Het is zeer pittig" }
        ],
        correct: 0,
        explanation: {
          en: "Authentic Bolognese ragu includes milk or cream, which tenderizes the meat and creates a rich, velvety sauce. It's slowly simmered for 3-4 hours.",
          es: "El ragu boloñés auténtico incluye leche o crema, que ablanda la carne y crea una salsa rica y aterciopelada. Se cuece a fuego lento durante 3-4 horas.",
          de: "Authentisches Bolognese Ragu enthält Milch oder Sahne, was das Fleisch zart macht und eine reichhaltige, samtige Sauce erzeugt. Es wird 3-4 Stunden langsam gekocht.",
          nl: "Authentieke Bolognese ragu bevat melk of room, wat het vlees mals maakt en een rijke, fluwelen saus creëert. Het wordt 3-4 uur langzaam gesuderd."
        }
      },
      {
        question: {
          en: "What is the difference between 'Salsa Verde' and 'Salsa Roja' in Mexican cuisine?",
          es: "¿Cuál es la diferencia entre 'Salsa Verde' y 'Salsa Roja' en la cocina mexicana?",
          de: "Was ist der Unterschied zwischen 'Salsa Verde' und 'Salsa Roja' in der mexikanischen Küche?",
          nl: "Wat is het verschil tussen 'Salsa Verde' en 'Salsa Roja' in de Mexicaanse keuken?"
        },
        options: [
          { en: "Verde is spicier", es: "Verde es más picante", de: "Verde ist schärfer", nl: "Verde is pittiger" },
          { en: "Verde uses tomatillos, Roja uses red tomatoes", es: "Verde usa tomatillos, Roja usa tomates rojos", de: "Verde verwendet Tomatillos, Roja verwendet rote Tomaten", nl: "Verde gebruikt tomatillos, Roja gebruikt rode tomaten" },
          { en: "Verde is cooked, Roja is raw", es: "Verde se cocina, Roja es cruda", de: "Verde wird gekocht, Roja ist roh", nl: "Verde wordt gekookt, Roja is rauw" },
          { en: "Verde has avocado, Roja doesn't", es: "Verde tiene aguacate, Roja no", de: "Verde hat Avocado, Roja nicht", nl: "Verde heeft avocado, Roja niet" }
        ],
        correct: 1,
        explanation: {
          en: "Salsa verde (green) is made with tomatillos, while salsa roja (red) uses red tomatoes. Both can vary in spiciness depending on the peppers used.",
          es: "La salsa verde se hace con tomatillos, mientras que la salsa roja usa tomates rojos. Ambas pueden variar en picante dependiendo de los chiles utilizados.",
          de: "Salsa Verde (grün) wird mit Tomatillos hergestellt, während Salsa Roja (rot) rote Tomaten verwendet. Beide können in der Schärfe variieren, je nach verwendeten Paprikaschoten.",
          nl: "Salsa verde (groen) wordt gemaakt met tomatillos, terwijl salsa roja (rood) rode tomaten gebruikt. Beide kunnen variëren in pittigheid afhankelijk van de gebruikte pepers."
        }
      },
      {
        question: {
          en: "What is the traditional cooking vessel for Moroccan 'Tagine'?",
          es: "¿Cuál es el recipiente de cocción tradicional para el 'Tagine' marroquí?",
          de: "Was ist das traditionelle Kochgeschirr für marokkanisches 'Tagine'?",
          nl: "Wat is het traditionele kookgerei voor Marokkaanse 'Tagine'?"
        },
        options: [
          { en: "Wok", es: "Wok", de: "Wok", nl: "Wok" },
          { en: "Cone-shaped clay pot", es: "Olla de barro en forma de cono", de: "Kegelförmiger Tontopf", nl: "Kegelvormige klei pot" },
          { en: "Cast iron skillet", es: "Sartén de hierro fundido", de: "Gusseisenpfanne", nl: "Gietijzeren koekenpan" },
          { en: "Pressure cooker", es: "Olla a presión", de: "Schnellkochtopf", nl: "Snelkookpan" }
        ],
        correct: 1,
        explanation: {
          en: "Tagine is both the name of the dish and the distinctive cone-shaped clay pot it's cooked in. The conical lid traps steam, creating moist, flavorful stews.",
          es: "Tagine es tanto el nombre del plato como la distintiva olla de barro en forma de cono en la que se cocina. La tapa cónica atrapa el vapor, creando guisos húmedos y sabrosos.",
          de: "Tagine ist sowohl der Name des Gerichts als auch der charakteristische kegelförmige Tontopf, in dem es gekocht wird. Der konische Deckel fängt Dampf ein und erzeugt feuchte, aromatische Eintöpfe.",
          nl: "Tagine is zowel de naam van het gerecht als de kenmerkende kegelvormige klei pot waarin het wordt gekookt. Het kegelvormige deksel vangt stoom op, wat vochtige, smaakvolle stoofschotels creëert."
        }
      },
      {
        question: {
          en: "What makes Korean 'Bulgogi' marinade distinctive?",
          es: "¿Qué hace que el adobo del 'Bulgogi' coreano sea distintivo?",
          de: "Was macht die koreanische 'Bulgogi'-Marinade besonders?",
          nl: "Wat maakt Koreaanse 'Bulgogi' marinade onderscheidend?"
        },
        options: [
          { en: "Fish sauce and lime", es: "Salsa de pescado y lima", de: "Fischsauce und Limette", nl: "Vissaus en limoen" },
          { en: "Soy sauce, sugar, pear, garlic, sesame", es: "Salsa de soja, azúcar, pera, ajo, sésamo", de: "Sojasoße, Zucker, Birne, Knoblauch, Sesam", nl: "Sojasaus, suiker, peer, knoflook, sesam" },
          { en: "Vinegar and chili", es: "Vinagre y chile", de: "Essig und Chili", nl: "Azijn en chili" },
          { en: "Yogurt and curry", es: "Yogur y curry", de: "Joghurt und Curry", nl: "Yoghurt en curry" }
        ],
        correct: 1,
        explanation: {
          en: "Bulgogi marinade uses soy sauce, sugar, Asian pear (for tenderness), garlic, ginger, and sesame oil, creating a sweet-savory profile unique to Korean cuisine.",
          es: "El adobo de bulgogi usa salsa de soja, azúcar, pera asiática (para ternura), ajo, jengibre y aceite de sésamo, creando un perfil dulce-salado único de la cocina coreana.",
          de: "Bulgogi-Marinade verwendet Sojasoße, Zucker, asiatische Birne (für Zartheit), Knoblauch, Ingwer und Sesamöl und erzeugt ein süß-herzhaftes Profil, das für die koreanische Küche einzigartig ist.",
          nl: "Bulgogi marinade gebruikt sojasaus, suiker, Aziatische peer (voor malsheid), knoflook, gember en sesamolie, wat een zoet-hartig profiel creëert uniek voor de Koreaanse keuken."
        }
      },
      {
        question: {
          en: "What is the key ingredient in French 'Béarnaise' sauce?",
          es: "¿Cuál es el ingrediente clave en la salsa 'Béarnaise' francesa?",
          de: "Was ist die Hauptzutat in französischer 'Béarnaise'-Sauce?",
          nl: "Wat is het belangrijkste ingrediënt in Franse 'Béarnaise' saus?"
        },
        options: [
          { en: "Mustard", es: "Mostaza", de: "Senf", nl: "Mosterd" },
          { en: "Tarragon", es: "Estragón", de: "Estragon", nl: "Dragon" },
          { en: "Basil", es: "Albahaca", de: "Basilikum", nl: "Basilicum" },
          { en: "Thyme", es: "Tomillo", de: "Thymian", nl: "Tijm" }
        ],
        correct: 1,
        explanation: {
          en: "Béarnaise sauce is distinguished by tarragon, shallots, and white wine vinegar reduction, added to an emulsion of egg yolks and clarified butter.",
          es: "La salsa béarnaise se distingue por el estragón, chalotes y reducción de vinagre de vino blanco, agregados a una emulsión de yemas de huevo y mantequilla clarificada.",
          de: "Béarnaise-Sauce zeichnet sich durch Estragon, Schalotten und Weißweinessig-Reduktion aus, die einer Emulsion aus Eigelb und geklärter Butter hinzugefügt werden.",
          nl: "Béarnaise saus wordt onderscheiden door dragon, sjalotten en witte wijnazijn reductie, toegevoegd aan een emulsie van eigeel en geklaarde boter."
        }
      },
      {
        question: {
          en: "What is the traditional thickener in Louisiana 'Gumbo'?",
          es: "¿Cuál es el espesante tradicional en el 'Gumbo' de Luisiana?",
          de: "Was ist das traditionelle Verdickungsmittel in Louisiana 'Gumbo'?",
          nl: "Wat is het traditionele verdikkingsmiddel in Louisiana 'Gumbo'?"
        },
        options: [
          { en: "Cornstarch", es: "Maicena", de: "Maisstärke", nl: "Maïszetmeel" },
          { en: "Roux and/or okra", es: "Roux y/o okra", de: "Roux und/oder Okra", nl: "Roux en/of okra" },
          { en: "Cream", es: "Crema", de: "Sahne", nl: "Room" },
          { en: "Egg yolks", es: "Yemas de huevo", de: "Eigelb", nl: "Eigeel" }
        ],
        correct: 1,
        explanation: {
          en: "Gumbo is thickened with either dark roux (flour and fat cooked until chocolate-brown), okra (which releases natural mucilage), or sometimes both.",
          es: "El gumbo se espesa con roux oscuro (harina y grasa cocidas hasta marrón chocolate), okra (que libera mucílago natural), o a veces ambos.",
          de: "Gumbo wird mit dunkler Roux (Mehl und Fett gekocht bis schokoladenbraun), Okra (die natürlichen Schleim freisetzt) oder manchmal beidem verdickt.",
          nl: "Gumbo wordt verdikt met donkere roux (meel en vet gekookt tot chocoladebruin), okra (die natuurlijk slijm afgeeft), of soms beide."
        }
      },
      {
        question: {
          en: "What is the traditional meat in Turkish 'Lahmacun' (Turkish pizza)?",
          es: "¿Cuál es la carne tradicional en 'Lahmacun' turco (pizza turca)?",
          de: "Was ist das traditionelle Fleisch in türkischem 'Lahmacun' (türkische Pizza)?",
          nl: "Wat is het traditionele vlees in Turkse 'Lahmacun' (Turkse pizza)?"
        },
        options: [
          { en: "Chicken", es: "Pollo", de: "Huhn", nl: "Kip" },
          { en: "Ground lamb or beef", es: "Cordero o carne de res molida", de: "Lammhackfleisch oder Rinderhackfleisch", nl: "Gemalen lam of rundvlees" },
          { en: "Pork", es: "Cerdo", de: "Schweinefleisch", nl: "Varkensvlees" },
          { en: "Fish", es: "Pescado", de: "Fisch", nl: "Vis" }
        ],
        correct: 1,
        explanation: {
          en: "Lahmacun features a thin crispy flatbread topped with spiced ground lamb or beef mixed with tomatoes, peppers, onions, and herbs.",
          es: "Lahmacun presenta un pan plano fino y crujiente cubierto con cordero o carne de res molida especiada mezclada con tomates, pimientos, cebollas y hierbas.",
          de: "Lahmacun hat ein dünnes knuspriges Fladenbrot mit gewürztem Lammhackfleisch oder Rinderhackfleisch gemischt mit Tomaten, Paprika, Zwiebeln und Kräutern.",
          nl: "Lahmacun heeft een dun knapperig platbrood bedekt met gekruid gemalen lam of rundvlees gemengd met tomaten, paprika's, uien en kruiden."
        }
      },
      {
        question: {
          en: "What makes Ethiopian 'Doro Wat' different from other chicken stews?",
          es: "¿Qué hace que el 'Doro Wat' etíope sea diferente de otros guisos de pollo?",
          de: "Was macht äthiopisches 'Doro Wat' anders als andere Hühnereintöpfe?",
          nl: "Wat maakt Ethiopische 'Doro Wat' anders dan andere kipstoofschotels?"
        },
        options: [
          { en: "It contains hard-boiled eggs and berbere spice", es: "Contiene huevos duros y especias berbere", de: "Es enthält hartgekochte Eier und Berbere-Gewürz", nl: "Het bevat hardgekookte eieren en berbere specerij" },
          { en: "It's always vegetarian", es: "Siempre es vegetariano", de: "Es ist immer vegetarisch", nl: "Het is altijd vegetarisch" },
          { en: "It uses coconut milk", es: "Usa leche de coco", de: "Es verwendet Kokosmilch", nl: "Het gebruikt kokosmelk" },
          { en: "It's served cold", es: "Se sirve frío", de: "Es wird kalt serviert", nl: "Het wordt koud geserveerd" }
        ],
        correct: 0,
        explanation: {
          en: "Doro wat is Ethiopia's signature spicy chicken stew featuring hard-boiled eggs and berbere (a complex Ethiopian spice blend with chili, fenugreek, and more).",
          es: "Doro wat es el guiso de pollo picante característico de Etiopía con huevos duros y berbere (una mezcla compleja de especias etíopes con chile, fenogreco y más).",
          de: "Doro Wat ist Äthiopiens charakteristischer scharfer Hühnereintopf mit hartgekochten Eiern und Berbere (eine komplexe äthiopische Gewürzmischung mit Chili, Bockshornklee und mehr).",
          nl: "Doro wat is Ethiopië's kenmerkende pittige kipstoofschotel met hardgekookte eieren en berbere (een complexe Ethiopische specerijen mix met chili, fenegriek en meer)."
        }
      },
      {
        question: {
          en: "What is the difference between 'Prosciutto' and regular ham?",
          es: "¿Cuál es la diferencia entre 'Prosciutto' y jamón regular?",
          de: "Was ist der Unterschied zwischen 'Prosciutto' und normalem Schinken?",
          nl: "Wat is het verschil tussen 'Prosciutto' en gewone ham?"
        },
        options: [
          { en: "Prosciutto is smoked", es: "El prosciutto es ahumado", de: "Prosciutto ist geräuchert", nl: "Prosciutto is gerookt" },
          { en: "Prosciutto is dry-cured, not cooked", es: "El prosciutto se cura en seco, no se cocina", de: "Prosciutto ist luftgetrocknet, nicht gekocht", nl: "Prosciutto is droog gerijpt, niet gekookt" },
          { en: "Prosciutto is made from beef", es: "El prosciutto está hecho de carne de res", de: "Prosciutto wird aus Rindfleisch hergestellt", nl: "Prosciutto wordt gemaakt van rundvlees" },
          { en: "Prosciutto is always cooked", es: "El prosciutto siempre se cocina", de: "Prosciutto wird immer gekocht", nl: "Prosciutto wordt altijd gekookt" }
        ],
        correct: 1,
        explanation: {
          en: "Prosciutto is Italian dry-cured ham that's salted and aged for months or years, never cooked. Regular ham is typically wet-cured and/or cooked/smoked.",
          es: "El prosciutto es jamón italiano curado en seco que se sala y envejece durante meses o años, nunca se cocina. El jamón regular típicamente se cura en húmedo y/o se cocina/ahuma.",
          de: "Prosciutto ist italienischer luftgetrockneter Schinken, der gesalzen und monatelang oder jahrelang gereift wird, niemals gekocht. Normaler Schinken wird typischerweise nasspökelt und/oder gekocht/geräuchert.",
          nl: "Prosciutto is Italiaanse droog gerijpte ham die gezouten en maanden of jaren gerijpt wordt, nooit gekookt. Gewone ham wordt meestal nat gepekel en/of gekookt/gerookt."
        }
      },
      {
        question: {
          en: "What is the purpose of 'Sofrito' in Caribbean and Latin cooking?",
          es: "¿Cuál es el propósito del 'Sofrito' en la cocina caribeña y latina?",
          de: "Was ist der Zweck von 'Sofrito' in der karibischen und lateinischen Küche?",
          nl: "Wat is het doel van 'Sofrito' in Caribische en Latijnse keuken?"
        },
        options: [
          { en: "Dessert topping", es: "Cobertura de postre", de: "Dessertbelag", nl: "Desserttopping" },
          { en: "Aromatic flavor base for dishes", es: "Base aromática de sabor para platos", de: "Aromatische Geschmacksbasis für Gerichte", nl: "Aromatische smaakbasis voor gerechten" },
          { en: "Thickening agent", es: "Agente espesante", de: "Verdickungsmittel", nl: "Verdikkingsmiddel" },
          { en: "Marinade for meat", es: "Adobo para carne", de: "Marinade für Fleisch", nl: "Marinade voor vlees" }
        ],
        correct: 1,
        explanation: {
          en: "Sofrito is a sautéed aromatic base (onions, peppers, garlic, tomatoes, herbs) that forms the flavor foundation for many Caribbean and Latin American dishes.",
          es: "El sofrito es una base aromática salteada (cebollas, pimientos, ajo, tomates, hierbas) que forma la base de sabor para muchos platos caribeños y latinoamericanos.",
          de: "Sofrito ist eine sautierte aromatische Basis (Zwiebeln, Paprika, Knoblauch, Tomaten, Kräuter), die die Geschmacksgrundlage für viele karibische und lateinamerikanische Gerichte bildet.",
          nl: "Sofrito is een gesauteerde aromatische basis (uien, paprika's, knoflook, tomaten, kruiden) die de smaakbasis vormt voor veel Caribische en Latijns-Amerikaanse gerechten."
        }
      },
      {
        question: {
          en: "What distinguishes 'Confit' from other meat preservation methods?",
          es: "¿Qué distingue el 'Confit' de otros métodos de conservación de carne?",
          de: "Was unterscheidet 'Confit' von anderen Fleischkonservierungsmethoden?",
          nl: "Wat onderscheidt 'Confit' van andere vleesconserveringsmethoden?"
        },
        options: [
          { en: "Meat is dried in the sun", es: "La carne se seca al sol", de: "Fleisch wird in der Sonne getrocknet", nl: "Vlees wordt in de zon gedroogd" },
          { en: "Meat is slow-cooked and preserved in its own fat", es: "La carne se cocina lentamente y se conserva en su propia grasa", de: "Fleisch wird langsam gekocht und in seinem eigenen Fett konserviert", nl: "Vlees wordt langzaam gekookt en geconserveerd in zijn eigen vet" },
          { en: "Meat is pickled in vinegar", es: "La carne se encurte en vinagre", de: "Fleisch wird in Essig eingelegt", nl: "Vlees wordt ingepekeld in azijn" },
          { en: "Meat is smoked", es: "La carne se ahuma", de: "Fleisch wird geräuchert", nl: "Vlees wordt gerookt" }
        ],
        correct: 1,
        explanation: {
          en: "Confit (typically duck or goose) involves salting meat, then slowly cooking it submerged in its own fat at low temperature, and storing it covered in that fat.",
          es: "Confit (típicamente pato o ganso) implica salar la carne, luego cocinarla lentamente sumergida en su propia grasa a baja temperatura, y almacenarla cubierta en esa grasa.",
          de: "Confit (typischerweise Ente oder Gans) beinhaltet das Salzen von Fleisch, dann langsames Kochen in seinem eigenen Fett bei niedriger Temperatur und Lagerung bedeckt in diesem Fett.",
          nl: "Confit (meestal eend of gans) houdt in het zouten van vlees, dan langzaam koken ondergedompeld in zijn eigen vet bij lage temperatuur, en opslaan bedekt in dat vet."
        }
      },
      {
        question: {
          en: "What is the traditional Portuguese dish 'Bacalhau'?",
          es: "¿Qué es el plato portugués tradicional 'Bacalhau'?",
          de: "Was ist das traditionelle portugiesische Gericht 'Bacalhau'?",
          nl: "Wat is het traditionele Portugese gerecht 'Bacalhau'?"
        },
        options: [
          { en: "Fresh sardines", es: "Sardinas frescas", de: "Frische Sardinen", nl: "Verse sardines" },
          { en: "Salt cod", es: "Bacalao salado", de: "Salzkabeljau", nl: "Gezouten kabeljauw" },
          { en: "Grilled octopus", es: "Pulpo a la parrilla", de: "Gegrillter Oktopus", nl: "Gegrilde octopus" },
          { en: "Clam stew", es: "Guiso de almejas", de: "Muscheleintopf", nl: "Mosselstoofpot" }
        ],
        correct: 1,
        explanation: {
          en: "Bacalhau is salt-dried cod fish, a staple of Portuguese cuisine with reportedly 365 ways to prepare it (one for each day of the year).",
          es: "Bacalhau es bacalao seco salado, un elemento básico de la cocina portuguesa con supuestamente 365 formas de prepararlo (una para cada día del año).",
          de: "Bacalhau ist salzgetrockneter Kabeljau, ein Grundnahrungsmittel der portugiesischen Küche mit angeblich 365 Zubereitungsarten (eine für jeden Tag des Jahres).",
          nl: "Bacalhau is gezouten gedroogde kabeljauw, een hoofdbestanddeel van de Portugese keuken met naar verluidt 365 manieren om het te bereiden (één voor elke dag van het jaar)."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  } else if (typeof window !== 'undefined') {
    window.level2 = level2;
  }
})();
