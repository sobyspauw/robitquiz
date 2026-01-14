// National Dishes Quiz - Level 3
(function() {
  const level3 = {
    name: {
      en: "National  Dishes Level 3",
      es: "National  Dishes Nivel 3",
      de: "National  Dishes Stufe 3",
      nl: "National  Dishes Level 3"
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
          en: "What microorganism is primarily responsible for fermenting Korean kimchi?",
          es: "¿Qué microorganismo es principalmente responsable de fermentar el kimchi coreano?",
          de: "Welcher Mikroorganismus ist hauptsächlich für die Fermentation von koreanischem Kimchi verantwortlich?",
          nl: "Welk micro-organisme is voornamelijk verantwoordelijk voor het fermenteren van Koreaanse kimchi?"
        },
        options: [
          { en: "Commercial yeast", es: "Levadura comercial", de: "Kommerzielle Hefe", nl: "Commerciële gist" },
          { en: "Wild lactic acid bacteria", es: "Bacterias de ácido láctico silvestres", de: "Wilde Milchsäurebakterien", nl: "Wilde melkzuurbacteriën" },
          { en: "Koji mold", es: "Moho koji", de: "Koji-Schimmel", nl: "Koji schimmel" },
          { en: "Acetobacter", es: "Acetobacter", de: "Acetobacter", nl: "Acetobacter" }
        ],
        correct: 1,
        explanation: {
          en: "Kimchi fermentation relies on naturally occurring wild lactic acid bacteria (primarily Leuconostoc and Lactobacillus species) that create the characteristic tangy flavor.",
          es: "La fermentación del kimchi se basa en bacterias de ácido láctico silvestres naturales (principalmente especies Leuconostoc y Lactobacillus) que crean el sabor ácido característico.",
          de: "Die Kimchi-Fermentation beruht auf natürlich vorkommenden wilden Milchsäurebakterien (hauptsächlich Leuconostoc- und Lactobacillus-Arten), die den charakteristischen säuerlichen Geschmack erzeugen.",
          nl: "Kimchi fermentatie is afhankelijk van natuurlijk voorkomende wilde melkzuurbacteriën (voornamelijk Leuconostoc en Lactobacillus soorten) die de karakteristieke zure smaak creëren."
        }
      },
      {
        question: {
          en: "What part of the veal is used in traditional Italian 'Osso Buco'?",
          es: "¿Qué parte de la ternera se usa en el 'Osso Buco' italiano tradicional?",
          de: "Welcher Teil des Kalbfleischs wird im traditionellen italienischen 'Osso Buco' verwendet?",
          nl: "Welk deel van het kalfsvlees wordt gebruikt in traditionele Italiaanse 'Osso Buco'?"
        },
        options: [
          { en: "Shoulder", es: "Paletilla", de: "Schulter", nl: "Schouder" },
          { en: "Shanks with bone marrow", es: "Jarrete con médula ósea", de: "Haxen mit Knochenmark", nl: "Schenkels met beenmerg" },
          { en: "Tenderloin", es: "Solomillo", de: "Filet", nl: "Ossenhaas" },
          { en: "Ribs", es: "Costillas", de: "Rippen", nl: "Ribben" }
        ],
        correct: 1,
        explanation: {
          en: "Osso Buco ('bone with a hole') uses cross-cut veal shanks braised with the bone marrow intact, which adds richness to the dish.",
          es: "Osso Buco ('hueso con un agujero') usa jarrete de ternera cortado transversalmente estofado con la médula ósea intacta, que añade riqueza al plato.",
          de: "Osso Buco ('Knochen mit einem Loch') verwendet quer geschnittene Kalbshaxen, die mit intaktem Knochenmark geschmort werden, was dem Gericht Reichhaltigkeit verleiht.",
          nl: "Osso Buco ('bot met een gat') gebruikt dwars gesneden kalfschenkels gesuddered met het beenmerg intact, wat rijkdom aan het gerecht toevoegt."
        }
      },
      {
        question: {
          en: "What is the correct technique for preparing dashi, the Japanese stock?",
          es: "¿Cuál es la técnica correcta para preparar dashi, el caldo japonés?",
          de: "Was ist die richtige Technik zur Zubereitung von Dashi, der japanischen Brühe?",
          nl: "Wat is de juiste techniek voor het bereiden van dashi, de Japanse bouillon?"
        },
        options: [
          { en: "Boiling kombu and bonito for 2 hours", es: "Hervir kombu y bonito durante 2 horas", de: "Kombu und Bonito 2 Stunden kochen", nl: "Kombu en bonito 2 uur koken" },
          { en: "Steeping kombu then bonito briefly below boiling", es: "Remojar kombu y luego bonito brevemente bajo ebullición", de: "Kombu einweichen, dann Bonito kurz unter dem Siedepunkt", nl: "Kombu trekken dan bonito kort onder kookpunt" },
          { en: "Pressure cooking all ingredients", es: "Cocinar a presión todos los ingredientes", de: "Druckkochen aller Zutaten", nl: "Alle ingrediënten snelkoken" },
          { en: "Roasting then simmering overnight", es: "Tostar y luego hervir a fuego lento toda la noche", de: "Rösten und dann über Nacht köcheln", nl: "Roosteren en dan de hele nacht sudderen" }
        ],
        correct: 1,
        explanation: {
          en: "Proper dashi is made by steeping kombu (kelp) in water just below boiling, removing it, then briefly steeping katsuobushi (bonito flakes). Boiling would make it bitter.",
          es: "El dashi adecuado se hace remojando kombu (alga) en agua justo por debajo del punto de ebullición, retirándolo, luego remojando brevemente katsuobushi (hojuelas de bonito). Hervir lo haría amargo.",
          de: "Richtiges Dashi wird hergestellt, indem man Kombu (Seetang) in Wasser knapp unter dem Siedepunkt einweicht, es entfernt und dann kurz Katsuobushi (Bonito-Flocken) einweicht. Kochen würde es bitter machen.",
          nl: "Proper dashi wordt gemaakt door kombu (zeewier) te laten trekken in water net onder het kookpunt, het te verwijderen en vervolgens kort katsuobushi (bonitoschilfers) te laten trekken. Koken zou het bitter maken."
        }
      },
      {
        question: {
          en: "What is the traditional fruit-to-wine ratio in authentic Spanish sangria?",
          es: "¿Cuál es la proporción tradicional de fruta a vino en la sangría española auténtica?",
          de: "Was ist das traditionelle Frucht-zu-Wein-Verhältnis in authentischer spanischer Sangria?",
          nl: "Wat is de traditionele verhouding fruit-wijn in authentieke Spaanse sangria?"
        },
        options: [
          { en: "Equal parts fruit and wine", es: "Partes iguales de fruta y vino", de: "Gleiche Teile Frucht und Wein", nl: "Gelijke delen fruit en wijn" },
          { en: "Mostly fruit with a splash of wine", es: "Principalmente fruta con un chorrito de vino", de: "Hauptsächlich Frucht mit einem Spritzer Wein", nl: "Voornamelijk fruit met een scheutje wijn" },
          { en: "Minimal fruit, primarily wine", es: "Fruta mínima, principalmente vino", de: "Minimale Frucht, hauptsächlich Wein", nl: "Minimaal fruit, voornamelijk wijn" },
          { en: "No fruit, only wine and spices", es: "Sin fruta, solo vino y especias", de: "Keine Frucht, nur Wein und Gewürze", nl: "Geen fruit, alleen wijn en kruiden" }
        ],
        correct: 2,
        explanation: {
          en: "Traditional Spanish sangria is primarily wine with minimal fresh fruit as garnish. Tourist versions often add excessive fruit, which dilutes the wine and isn't authentic.",
          es: "La sangría española tradicional es principalmente vino con fruta fresca mínima como guarnición. Las versiones turísticas a menudo añaden fruta excesiva, lo que diluye el vino y no es auténtico.",
          de: "Traditionelle spanische Sangria ist hauptsächlich Wein mit minimaler frischer Frucht als Garnitur. Touristenversionen fügen oft übermäßig Frucht hinzu, was den Wein verdünnt und nicht authentisch ist.",
          nl: "Traditionele Spaanse sangria is voornamelijk wijn met minimaal vers fruit als garnering. Toeristische versies voegen vaak overmatig fruit toe, wat de wijn verdunt en niet authentiek is."
        }
      },
      {
        question: {
          en: "What distinguishes Thai 'Tom Yum' soup's cooking method from other broths?",
          es: "¿Qué distingue el método de cocción de la sopa 'Tom Yum' tailandesa de otros caldos?",
          de: "Was unterscheidet die Kochmethode der thailändischen 'Tom Yum'-Suppe von anderen Brühen?",
          nl: "Wat onderscheidt de kookmethode van Thaise 'Tom Yum' soep van andere bouillons?"
        },
        options: [
          { en: "Ingredients are never boiled, only steeped", es: "Los ingredientes nunca se hierven, solo se remojan", de: "Zutaten werden nie gekocht, nur eingeweicht", nl: "Ingrediënten worden nooit gekookt, alleen getrokken" },
          { en: "Aromatics are bruised and simmered briefly, not pureed", es: "Los aromáticos se machacan y hierven brevemente, no se hacen puré", de: "Aromaten werden gequetscht und kurz geköchelt, nicht püriert", nl: "Aromaten worden gekneusd en kort gesuddered, niet gepureerd" },
          { en: "All ingredients are fermented first", es: "Todos los ingredientes se fermentan primero", de: "Alle Zutaten werden zuerst fermentiert", nl: "Alle ingrediënten worden eerst gefermenteerd" },
          { en: "Stock is reduced until thick like gravy", es: "El caldo se reduce hasta espesarse como salsa", de: "Brühe wird reduziert bis dick wie Soße", nl: "Bouillon wordt ingedikt tot het dik is als jus" }
        ],
        correct: 1,
        explanation: {
          en: "Tom Yum uses bruised (not minced) lemongrass, galangal, and kaffir lime leaves that are simmered briefly to infuse flavor but remain whole and are typically not eaten.",
          es: "Tom Yum usa hierba de limón, galanga y hojas de lima kaffir machacadas (no picadas) que se hierven brevemente para infundir sabor pero permanecen enteras y típicamente no se comen.",
          de: "Tom Yum verwendet gequetschtes (nicht gehacktes) Zitronengras, Galgant und Kaffir-Limettenblätter, die kurz geköchelt werden, um Geschmack zu verleihen, aber ganz bleiben und normalerweise nicht gegessen werden.",
          nl: "Tom Yum gebruikt gekneusd (niet gehakt) citroengras, galanga en kaffir limoenbladeren die kort worden gesuddered om smaak te geven maar heel blijven en meestal niet worden gegeten."
        }
      },
      {
        question: {
          en: "What makes French cassoulet authentic in terms of meat variety?",
          es: "¿Qué hace auténtico el cassoulet francés en términos de variedad de carne?",
          de: "Was macht französisches Cassoulet in Bezug auf Fleischvielfalt authentisch?",
          nl: "Wat maakt Franse cassoulet authentiek qua vleesvariëteit?"
        },
        options: [
          { en: "Only one type of meat per region", es: "Solo un tipo de carne por región", de: "Nur eine Fleischsorte pro Region", nl: "Slechts één type vlees per regio" },
          { en: "Multiple meats including duck confit and sausage, with breadcrumb crust", es: "Múltiples carnes incluyendo confit de pato y salchicha, con costra de pan rallado", de: "Mehrere Fleischsorten einschließlich Entenconfit und Wurst, mit Brotkrumenkruste", nl: "Meerdere vleessoorten inclusief eendenconfit en worst, met broodkruimelkorst" },
          { en: "Strictly vegetarian with no meat", es: "Estrictamente vegetariano sin carne", de: "Streng vegetarisch ohne Fleisch", nl: "Strikt vegetarisch zonder vlees" },
          { en: "Fish only, never land animals", es: "Solo pescado, nunca animales terrestres", de: "Nur Fisch, nie Landtiere", nl: "Alleen vis, nooit landdieren" }
        ],
        correct: 1,
        explanation: {
          en: "Authentic cassoulet combines multiple meats (duck or goose confit, pork sausage, sometimes lamb) with white beans, slow-cooked until a crust forms and is broken multiple times.",
          es: "El cassoulet auténtico combina múltiples carnes (confit de pato o ganso, salchicha de cerdo, a veces cordero) con alubias blancas, cocinadas lentamente hasta que se forma una costra y se rompe varias veces.",
          de: "Authentisches Cassoulet kombiniert mehrere Fleischsorten (Enten- oder Gänseconfit, Schweinewurst, manchmal Lamm) mit weißen Bohnen, langsam gekocht, bis sich eine Kruste bildet und mehrmals gebrochen wird.",
          nl: "Authentieke cassoulet combineert meerdere vleessoorten (eenden- of ganzenconfit, varkensworst, soms lam) met witte bonen, langzaam gekookt tot er een korst vormt die meerdere keren wordt gebroken."
        }
      },
      {
        question: {
          en: "What pepper gives Peruvian 'Aji de Gallina' its distinctive yellow color and mild heat?",
          es: "¿Qué pimiento le da al 'Ají de Gallina' peruano su distintivo color amarillo y calor suave?",
          de: "Welcher Pfeffer verleiht dem peruanischen 'Aji de Gallina' seine charakteristische gelbe Farbe und milde Schärfe?",
          nl: "Welke peper geeft Peruaanse 'Aji de Gallina' zijn kenmerkende gele kleur en milde hitte?"
        },
        options: [
          { en: "Jalapeño", es: "Jalapeño", de: "Jalapeño", nl: "Jalapeño" },
          { en: "Aji amarillo", es: "Aji amarillo", de: "Aji Amarillo", nl: "Aji amarillo" },
          { en: "Habanero", es: "Habanero", de: "Habanero", nl: "Habanero" },
          { en: "Poblano", es: "Poblano", de: "Poblano", nl: "Poblano" }
        ],
        correct: 1,
        explanation: {
          en: "Aji amarillo is a Peruvian yellow chili pepper essential to many national dishes. It provides moderate heat (30,000-50,000 Scoville) with fruity, slightly sweet notes.",
          es: "El ají amarillo es un chile amarillo peruano esencial para muchos platos nacionales. Proporciona calor moderado (30,000-50,000 Scoville) con notas afrutadas y ligeramente dulces.",
          de: "Aji Amarillo ist eine peruanische gelbe Chilischote, die für viele Nationalgerichte unerlässlich ist. Sie bietet mäßige Schärfe (30.000-50.000 Scoville) mit fruchtigen, leicht süßen Noten.",
          nl: "Aji amarillo is een Peruaanse gele chilipeper die essentieel is voor veel nationale gerechten. Het biedt matige hitte (30.000-50.000 Scoville) met fruitige, licht zoete tonen."
        }
      },
      {
        question: {
          en: "What distinguishes proper Japanese tempura batter from regular frying batter?",
          es: "¿Qué distingue la masa de tempura japonesa adecuada de la masa de freír regular?",
          de: "Was unterscheidet richtigen japanischen Tempura-Teig von normalem Frittierteil?",
          nl: "Wat onderscheidt proper Japanse tempura beslag van normaal frituurbeslag?"
        },
        options: [
          { en: "Uses eggs and milk for richness", es: "Usa huevos y leche para riqueza", de: "Verwendet Eier und Milch für Reichhaltigkeit", nl: "Gebruikt eieren en melk voor rijkdom" },
          { en: "Ice-cold water, minimal mixing, lumpy texture", es: "Agua helada, mezcla mínima, textura grumosa", de: "Eiskaltes Wasser, minimales Mischen, klumpige Textur", nl: "IJskoud water, minimaal mengen, klonterige textuur" },
          { en: "Long fermentation like bread dough", es: "Fermentación larga como masa de pan", de: "Lange Fermentation wie Brotteig", nl: "Lange fermentatie zoals brooddeeg" },
          { en: "Thick, heavy coating similar to cornmeal crust", es: "Recubrimiento grueso y pesado similar a la corteza de harina de maíz", de: "Dicke, schwere Beschichtung ähnlich wie Maismehlkruste", nl: "Dikke, zware coating vergelijkbaar met maismeel korst" }
        ],
        correct: 1,
        explanation: {
          en: "Authentic tempura uses ice-cold water (often with ice cubes), is barely mixed (lumps are fine), and uses low-gluten flour. Overmixing develops gluten and makes it heavy instead of light and crispy.",
          es: "El tempura auténtico usa agua helada (a menudo con cubitos de hielo), apenas se mezcla (los grumos están bien) y usa harina baja en gluten. Mezclar demasiado desarrolla el gluten y lo hace pesado en lugar de ligero y crujiente.",
          de: "Authentisches Tempura verwendet eiskaltes Wasser (oft mit Eiswürfeln), wird kaum gemischt (Klumpen sind in Ordnung) und verwendet glutenarmes Mehl. Übermäßiges Mischen entwickelt Gluten und macht es schwer statt leicht und knusprig.",
          nl: "Authentieke tempura gebruikt ijskoud water (vaak met ijsblokjes), wordt nauwelijks gemengd (klontjes zijn prima) en gebruikt glutenarm meel. Te veel mengen ontwikkelt gluten en maakt het zwaar in plaats van licht en knapperig."
        }
      },
      {
        question: {
          en: "What type of fish must authentic French 'Bouillabaisse' from Marseille traditionally include?",
          es: "¿Qué tipo de pescado debe incluir tradicionalmente la auténtica 'Bouillabaisse' francesa de Marsella?",
          de: "Welche Art von Fisch muss authentisches französisches 'Bouillabaisse' aus Marseille traditionell enthalten?",
          nl: "Welk type vis moet authentieke Franse 'Bouillabaisse' uit Marseille traditioneel bevatten?"
        },
        options: [
          { en: "Salmon and tuna", es: "Salmón y atún", de: "Lachs und Thunfisch", nl: "Zalm en tonijn" },
          { en: "Mediterranean rockfish (rascasse) and other local fish", es: "Cabracho mediterráneo (rascasse) y otros pescados locales", de: "Mittelmeer-Drachenkopf (Rascasse) und andere lokale Fische", nl: "Mediterrane schorpioenvis (rascasse) en andere lokale vis" },
          { en: "Only shellfish, no fin fish", es: "Solo mariscos, sin pescado con aletas", de: "Nur Schalentiere, keine Flossenfische", nl: "Alleen schaaldieren, geen vinvis" },
          { en: "Freshwater fish like trout", es: "Pescado de agua dulce como trucha", de: "Süßwasserfisch wie Forelle", nl: "Zoetwatervis zoals forel" }
        ],
        correct: 1,
        explanation: {
          en: "Traditional Marseille bouillabaisse must include at least four types of Mediterranean fish, typically including rascasse (scorpionfish), plus saffron, fennel, and is served with rouille (garlic mayonnaise).",
          es: "La bouillabaisse tradicional de Marsella debe incluir al menos cuatro tipos de pescado mediterráneo, típicamente incluyendo rascasse (pez escorpión), más azafrán, hinojo, y se sirve con rouille (mayonesa de ajo).",
          de: "Traditionelle Marseiller Bouillabaisse muss mindestens vier Arten mediterraner Fische enthalten, typischerweise einschließlich Rascasse (Skorpionfisch), plus Safran, Fenchel, und wird mit Rouille (Knoblauchmayonnaise) serviert.",
          nl: "Traditionele Marseille bouillabaisse moet minstens vier soorten mediterrane vis bevatten, meestal inclusief rascasse (schorpioenvis), plus saffraan, venkel, en wordt geserveerd met rouille (knoflookmayonaise)."
        }
      },
      {
        question: {
          en: "What makes Lebanese tabbouleh different from most Western versions?",
          es: "¿Qué hace que el tabulé libanés sea diferente de la mayoría de las versiones occidentales?",
          de: "Was macht libanesischen Taboulé anders als die meisten westlichen Versionen?",
          nl: "Wat maakt Libanese tabbouleh anders dan de meeste westerse versies?"
        },
        options: [
          { en: "It's primarily bulgur wheat with some herbs", es: "Es principalmente trigo bulgur con algunas hierbas", de: "Es ist hauptsächlich Bulgurweizen mit einigen Kräutern", nl: "Het is voornamelijk bulgur tarwe met wat kruiden" },
          { en: "Mostly fresh parsley with minimal bulgur", es: "Principalmente perejil fresco con bulgur mínimo", de: "Hauptsächlich frische Petersilie mit minimalem Bulgur", nl: "Voornamelijk verse peterselie met minimale bulgur" },
          { en: "No vegetables, only grains", es: "Sin verduras, solo granos", de: "Kein Gemüse, nur Getreide", nl: "Geen groenten, alleen granen" },
          { en: "Always includes chicken or lamb", es: "Siempre incluye pollo o cordero", de: "Enthält immer Huhn oder Lamm", nl: "Bevat altijd kip of lam" }
        ],
        correct: 1,
        explanation: {
          en: "Authentic Lebanese tabbouleh is predominantly chopped fresh parsley (and mint) with small amounts of bulgur, tomatoes, onion, lemon, and olive oil. Western versions often reverse the ratio.",
          es: "El tabulé libanés auténtico es predominantemente perejil fresco picado (y menta) con pequeñas cantidades de bulgur, tomates, cebolla, limón y aceite de oliva. Las versiones occidentales a menudo invierten la proporción.",
          de: "Authentischer libanesischer Taboulé besteht überwiegend aus gehackter frischer Petersilie (und Minze) mit kleinen Mengen Bulgur, Tomaten, Zwiebeln, Zitrone und Olivenöl. Westliche Versionen kehren oft das Verhältnis um.",
          nl: "Authentieke Libanese tabbouleh bestaat voornamelijk uit gehakte verse peterselie (en munt) met kleine hoeveelheden bulgur, tomaten, ui, citroen en olijfolie. Westerse versies keren vaak de verhouding om."
        }
      },
      {
        question: {
          en: "What is the traditional temperature and oven type for cooking Indian tandoori dishes?",
          es: "¿Cuál es la temperatura tradicional y el tipo de horno para cocinar platos tandoori indios?",
          de: "Was ist die traditionelle Temperatur und Ofenart zum Kochen indischer Tandoori-Gerichte?",
          nl: "Wat is de traditionele temperatuur en oventype voor het koken van Indiase tandoori gerechten?"
        },
        options: [
          { en: "Electric oven at 180°C", es: "Horno eléctrico a 180°C", de: "Elektroherd bei 180°C", nl: "Elektrische oven op 180°C" },
          { en: "Clay tandoor oven at 480°C+", es: "Horno tandoor de arcilla a 480°C+", de: "Lehm-Tandoor-Ofen bei 480°C+", nl: "Klei tandoor oven op 480°C+" },
          { en: "Slow cooker for 8 hours", es: "Olla de cocción lenta durante 8 horas", de: "Schongarer für 8 Stunden", nl: "Slowcooker voor 8 uur" },
          { en: "Microwave on high", es: "Microondas a alta potencia", de: "Mikrowelle auf hoher Stufe", nl: "Magnetron op hoog" }
        ],
        correct: 1,
        explanation: {
          en: "Traditional tandoori cooking uses a cylindrical clay oven (tandoor) that reaches extremely high temperatures (480-500°C), giving the characteristic char and smoky flavor impossible to replicate in conventional ovens.",
          es: "La cocina tandoori tradicional usa un horno de arcilla cilíndrico (tandoor) que alcanza temperaturas extremadamente altas (480-500°C), dando el carbonizado característico y el sabor ahumado imposible de replicar en hornos convencionales.",
          de: "Traditionelles Tandoori-Kochen verwendet einen zylindrischen Lehmofen (Tandoor), der extrem hohe Temperaturen (480-500°C) erreicht und die charakteristische Verkohlung und den rauchigen Geschmack verleiht, die in herkömmlichen Öfen nicht zu reproduzieren sind.",
          nl: "Traditioneel tandoori koken gebruikt een cilindrische kleiofen (tandoor) die extreem hoge temperaturen bereikt (480-500°C), wat de karakteristieke verkoling en rokerige smaak geeft die onmogelijk te repliceren is in conventionele ovens."
        }
      },
      {
        question: {
          en: "What distinguishes 'Penne all'Arrabbiata' from regular marinara sauce?",
          es: "¿Qué distingue 'Penne all'Arrabbiata' de la salsa marinara regular?",
          de: "Was unterscheidet 'Penne all'Arrabbiata' von normaler Marinara-Sauce?",
          nl: "Wat onderscheidt 'Penne all'Arrabbiata' van gewone marinara saus?"
        },
        options: [
          { en: "Addition of cream and butter", es: "Adición de crema y mantequilla", de: "Zugabe von Sahne und Butter", nl: "Toevoeging van room en boter" },
          { en: "Generous amount of dried red chili peppers", es: "Cantidad generosa de chiles rojos secos", de: "Großzügige Menge getrockneter roter Chilischoten", nl: "Royale hoeveelheid gedroogde rode chilipepers" },
          { en: "Use of green peppers instead of tomatoes", es: "Uso de pimientos verdes en lugar de tomates", de: "Verwendung von grünen Paprika anstelle von Tomaten", nl: "Gebruik van groene paprika in plaats van tomaten" },
          { en: "Long cooking time of 8+ hours", es: "Tiempo de cocción largo de 8+ horas", de: "Lange Garzeit von 8+ Stunden", nl: "Lange kooktijd van 8+ uur" }
        ],
        correct: 1,
        explanation: {
          en: "Arrabbiata ('angry') sauce is characterized by generous amounts of dried red chili peppers (peperoncino) that give it significant heat, distinguishing it from the milder marinara.",
          es: "La salsa arrabbiata ('enojada') se caracteriza por cantidades generosas de chiles rojos secos (peperoncino) que le dan un calor significativo, distinguiéndola de la marinara más suave.",
          de: "Arrabbiata-Sauce ('wütend') zeichnet sich durch großzügige Mengen getrockneter roter Chilischoten (Peperoncino) aus, die ihr deutliche Schärfe verleihen und sie von der milderen Marinara unterscheiden.",
          nl: "Arrabbiata ('boos') saus wordt gekenmerkt door royale hoeveelheden gedroogde rode chilipepers (peperoncino) die het aanzienlijke hitte geven, wat het onderscheidt van de mildere marinara."
        }
      },
      {
        question: {
          en: "What is the proper serving temperature for Japanese sake in traditional settings?",
          es: "¿Cuál es la temperatura de servicio adecuada para el sake japonés en entornos tradicionales?",
          de: "Was ist die richtige Serviertemperatur für japanischen Sake in traditionellen Umgebungen?",
          nl: "Wat is de juiste serveertemperatuur voor Japanse sake in traditionele settings?"
        },
        options: [
          { en: "Always ice-cold like beer", es: "Siempre helado como cerveza", de: "Immer eiskalt wie Bier", nl: "Altijd ijskoud zoals bier" },
          { en: "Varies by sake quality: premium chilled, standard warm", es: "Varía según la calidad del sake: premium frío, estándar caliente", de: "Variiert nach Sake-Qualität: Premium gekühlt, Standard warm", nl: "Varieert per sake kwaliteit: premium gekoeld, standaard warm" },
          { en: "Room temperature only", es: "Solo temperatura ambiente", de: "Nur Raumtemperatur", nl: "Alleen kamertemperatuur" },
          { en: "Boiling hot", es: "Hirviendo caliente", de: "Kochend heiß", nl: "Kokend heet" }
        ],
        correct: 1,
        explanation: {
          en: "High-quality premium sake (like daiginjo) is served chilled to preserve delicate flavors, while lower-grade sake is often served warm (40-55°C) to mask imperfections and enhance umami.",
          es: "El sake premium de alta calidad (como daiginjo) se sirve frío para preservar sabores delicados, mientras que el sake de grado inferior a menudo se sirve caliente (40-55°C) para enmascarar imperfecciones y realzar el umami.",
          de: "Hochwertiger Premium-Sake (wie Daiginjo) wird gekühlt serviert, um zarte Aromen zu bewahren, während minderwertiger Sake oft warm (40-55°C) serviert wird, um Unvollkommenheiten zu maskieren und Umami zu verstärken.",
          nl: "Hoogwaardige premium sake (zoals daiginjo) wordt gekoeld geserveerd om delicate smaken te behouden, terwijl sake van lagere kwaliteit vaak warm wordt geserveerd (40-55°C) om imperfecties te maskeren en umami te versterken."
        }
      },
      {
        question: {
          en: "What makes Mexican 'Mole Poblano' one of the most complex sauces in world cuisine?",
          es: "¿Qué hace que el 'Mole Poblano' mexicano sea una de las salsas más complejas de la cocina mundial?",
          de: "Was macht mexikanisches 'Mole Poblano' zu einer der komplexesten Saucen der Weltküche?",
          nl: "Wat maakt Mexicaanse 'Mole Poblano' een van de meest complexe sauzen in de wereldkeuken?"
        },
        options: [
          { en: "Contains only three ingredients", es: "Contiene solo tres ingredientes", de: "Enthält nur drei Zutaten", nl: "Bevat slechts drie ingrediënten" },
          { en: "20+ ingredients including chocolate and multiple chilies", es: "20+ ingredientes incluyendo chocolate y múltiples chiles", de: "20+ Zutaten einschließlich Schokolade und mehreren Chilis", nl: "20+ ingrediënten inclusief chocolade en meerdere chilis" },
          { en: "Made exclusively from fermented fish", es: "Hecho exclusivamente de pescado fermentado", de: "Ausschließlich aus fermentiertem Fisch hergestellt", nl: "Uitsluitend gemaakt van gefermenteerde vis" },
          { en: "Requires no cooking", es: "No requiere cocción", de: "Erfordert kein Kochen", nl: "Vereist geen koken" }
        ],
        correct: 1,
        explanation: {
          en: "Authentic mole poblano contains 20+ ingredients including multiple types of dried chilies, chocolate, nuts, seeds, spices, and aromatics, requiring hours of preparation and toasting each component separately.",
          es: "El auténtico mole poblano contiene más de 20 ingredientes incluyendo múltiples tipos de chiles secos, chocolate, nueces, semillas, especias y aromáticos, requiriendo horas de preparación y tostando cada componente por separado.",
          de: "Authentisches Mole Poblano enthält über 20 Zutaten, darunter mehrere Arten getrockneter Chilis, Schokolade, Nüsse, Samen, Gewürze und Aromaten, was stundenlange Vorbereitung und separates Rösten jeder Komponente erfordert.",
          nl: "Authentieke mole poblano bevat 20+ ingrediënten waaronder meerdere soorten gedroogde chilis, chocolade, noten, zaden, kruiden en aromaten, wat uren voorbereiding vereist en elk component afzonderlijk roosteren."
        }
      },
      {
        question: {
          en: "What is the traditional stirring technique for making 'Risotto alla Milanese'?",
          es: "¿Cuál es la técnica de agitación tradicional para hacer 'Risotto alla Milanese'?",
          de: "Was ist die traditionelle Rührtechnik zur Herstellung von 'Risotto alla Milanese'?",
          nl: "Wat is de traditionele roertechniek voor het maken van 'Risotto alla Milanese'?"
        },
        options: [
          { en: "Never stir once liquid is added", es: "Nunca revolver una vez que se agrega el líquido", de: "Niemals rühren, sobald Flüssigkeit hinzugefügt wird", nl: "Nooit roeren zodra vloeistof is toegevoegd" },
          { en: "Constant stirring while adding broth gradually", es: "Agitación constante mientras se agrega caldo gradualmente", de: "Ständiges Rühren bei allmählicher Brühezugabe", nl: "Constant roeren terwijl bouillon geleidelijk wordt toegevoegd" },
          { en: "Stir vigorously only at the end", es: "Revolver vigorosamente solo al final", de: "Nur am Ende kräftig rühren", nl: "Alleen aan het einde krachtig roeren" },
          { en: "Use a blender instead of stirring", es: "Usar una licuadora en lugar de revolver", de: "Mixer verwenden statt rühren", nl: "Gebruik een blender in plaats van roeren" }
        ],
        correct: 1,
        explanation: {
          en: "Authentic risotto requires constant gentle stirring while adding warm broth in small increments (one ladle at a time). This releases the rice's starch gradually, creating the signature creamy texture without cream.",
          es: "El risotto auténtico requiere agitación constante y suave mientras se agrega caldo tibio en pequeños incrementos (un cucharón a la vez). Esto libera el almidón del arroz gradualmente, creando la textura cremosa característica sin crema.",
          de: "Authentisches Risotto erfordert ständiges sanftes Rühren, während warme Brühe in kleinen Schritten (eine Kelle auf einmal) hinzugefügt wird. Dies setzt die Stärke des Reises allmählich frei und erzeugt die charakteristische cremige Textur ohne Sahne.",
          nl: "Authentieke risotto vereist constant zacht roeren terwijl warme bouillon in kleine hoeveelheden wordt toegevoegd (een pollepel tegelijk). Dit geeft het zetmeel van de rijst geleidelijk vrij, waardoor de kenmerkende romige textuur ontstaat zonder room."
        }
      },
      {
        question: {
          en: "What distinguishes Vietnamese 'Bun Bo Hue' from the more famous 'Pho'?",
          es: "¿Qué distingue el 'Bun Bo Hue' vietnamita del más famoso 'Pho'?",
          de: "Was unterscheidet vietnamesisches 'Bun Bo Hue' vom bekannteren 'Pho'?",
          nl: "Wat onderscheidt Vietnamese 'Bun Bo Hue' van de beroemdere 'Pho'?"
        },
        options: [
          { en: "Uses thick round rice noodles and spicier lemongrass broth", es: "Usa fideos de arroz redondos gruesos y caldo de hierba de limón más picante", de: "Verwendet dicke runde Reisnudeln und schärfere Zitronengrasbrühe", nl: "Gebruikt dikke ronde rijstnoedels en pikantere citroengras bouillon" },
          { en: "Contains no meat, only vegetables", es: "No contiene carne, solo verduras", de: "Enthält kein Fleisch, nur Gemüse", nl: "Bevat geen vlees, alleen groenten" },
          { en: "Served cold instead of hot", es: "Se sirve frío en lugar de caliente", de: "Kalt statt heiß serviert", nl: "Koud geserveerd in plaats van warm" },
          { en: "Made with chicken broth exclusively", es: "Hecho exclusivamente con caldo de pollo", de: "Ausschließlich mit Hühnerbrühe hergestellt", nl: "Uitsluitend gemaakt met kippenbouillon" }
        ],
        correct: 0,
        explanation: {
          en: "Bun Bo Hue uses thicker, round rice noodles (bun) instead of flat (banh pho), a spicier beef and pork broth flavored with lemongrass and shrimp paste, and often includes pig's blood cake and pork knuckle.",
          es: "Bun Bo Hue usa fideos de arroz más gruesos y redondos (bun) en lugar de planos (banh pho), un caldo de carne de res y cerdo más picante con sabor a hierba de limón y pasta de camarones, y a menudo incluye pastel de sangre de cerdo y codillo de cerdo.",
          de: "Bun Bo Hue verwendet dickere, runde Reisnudeln (Bun) anstelle von flachen (Banh Pho), eine schärfere Rind- und Schweinefleischbrühe mit Zitronengras- und Garnelenpasten-Geschmack, und enthält oft Schweineblut-Kuchen und Schweinshaxe.",
          nl: "Bun Bo Hue gebruikt dikkere, ronde rijstnoedels (bun) in plaats van platte (banh pho), een pikantere rund- en varkensvleesbouillon op smaak gebracht met citroengras en garnalenpasta, en bevat vaak varkensbloed cake en varkensknokkel."
        }
      },
      {
        question: {
          en: "What is the traditional Georgian cheese-filled bread called 'Khachapuri' shaped like?",
          es: "¿Qué forma tiene tradicionalmente el pan georgiano relleno de queso llamado 'Khachapuri'?",
          de: "Welche Form hat das traditionelle georgische mit Käse gefüllte Brot 'Khachapuri'?",
          nl: "Welke vorm heeft het traditionele Georgische met kaas gevulde brood genaamd 'Khachapuri'?"
        },
        options: [
          { en: "A closed sphere", es: "Una esfera cerrada", de: "Eine geschlossene Kugel", nl: "Een gesloten bol" },
          { en: "A boat with egg and butter in the center", es: "Un barco con huevo y mantequilla en el centro", de: "Ein Boot mit Ei und Butter in der Mitte", nl: "Een boot met ei en boter in het midden" },
          { en: "A flat rectangle", es: "Un rectángulo plano", de: "Ein flaches Rechteck", nl: "Een platte rechthoek" },
          { en: "A twisted spiral", es: "Una espiral retorcida", de: "Eine gedrehte Spirale", nl: "Een gedraaide spiraal" }
        ],
        correct: 1,
        explanation: {
          en: "Acharuli khachapuri (the most famous version) is shaped like a boat with cheese baked inside, then topped with a raw egg and butter that cooks from the heat of the bread.",
          es: "El acharuli khachapuri (la versión más famosa) tiene forma de barco con queso horneado dentro, luego cubierto con un huevo crudo y mantequilla que se cocina con el calor del pan.",
          de: "Acharuli Khachapuri (die berühmteste Version) hat die Form eines Bootes mit Käse darin gebacken, dann mit einem rohen Ei und Butter belegt, die durch die Hitze des Brotes kochen.",
          nl: "Acharuli khachapuri (de meest beroemde versie) heeft de vorm van een boot met kaas erin gebakken, dan bedekt met een rauw ei en boter die kookt door de warmte van het brood."
        }
      },
      {
        question: {
          en: "What makes Australian 'Vegemite' fundamentally different from British 'Marmite'?",
          es: "¿Qué hace que el 'Vegemite' australiano sea fundamentalmente diferente del 'Marmite' británico?",
          de: "Was macht australisches 'Vegemite' grundsätzlich anders als britisches 'Marmite'?",
          nl: "Wat maakt Australische 'Vegemite' fundamenteel anders dan Britse 'Marmite'?"
        },
        options: [
          { en: "Vegemite is sweet, Marmite is savory", es: "Vegemite es dulce, Marmite es salado", de: "Vegemite ist süß, Marmite ist herzhaft", nl: "Vegemite is zoet, Marmite is hartig" },
          { en: "Vegemite contains vegetable extracts, Marmite doesn't", es: "Vegemite contiene extractos vegetales, Marmite no", de: "Vegemite enthält Gemüseextrakte, Marmite nicht", nl: "Vegemite bevat groente-extracten, Marmite niet" },
          { en: "They're identical products with different names", es: "Son productos idénticos con nombres diferentes", de: "Sie sind identische Produkte mit unterschiedlichen Namen", nl: "Het zijn identieke producten met verschillende namen" },
          { en: "Marmite is chocolate-based", es: "Marmite está basado en chocolate", de: "Marmite ist auf Schokoladenbasis", nl: "Marmite is op chocoladebasis" }
        ],
        correct: 1,
        explanation: {
          en: "While both are yeast extract spreads, Vegemite includes vegetable extracts and has a slightly milder, less sticky consistency. Marmite is purely yeast extract with a stronger, more bitter taste.",
          es: "Aunque ambos son pastas de extracto de levadura, Vegemite incluye extractos vegetales y tiene una consistencia ligeramente más suave y menos pegajosa. Marmite es puramente extracto de levadura con un sabor más fuerte y amargo.",
          de: "Obwohl beide Hefeextrakt-Brotaufstriche sind, enthält Vegemite Gemüseextrakte und hat eine etwas mildere, weniger klebrige Konsistenz. Marmite ist reiner Hefeextrakt mit einem stärkeren, bittereren Geschmack.",
          nl: "Hoewel beide gistextract smeersel zijn, bevat Vegemite groente-extracten en heeft het een iets mildere, minder plakkerige consistentie. Marmite is puur gistextract met een sterkere, bitterdere smaak."
        }
      },
      {
        question: {
          en: "What is the traditional Ethiopian communal eating custom using injera?",
          es: "¿Cuál es la costumbre tradicional etíope de comer comunalmente usando injera?",
          de: "Was ist die traditionelle äthiopische gemeinsame Essgewohnheit mit Injera?",
          nl: "Wat is de traditionele Ethiopische gemeenschappelijke eetgewoonte met injera?"
        },
        options: [
          { en: "Everyone eats from individual plates", es: "Todos comen de platos individuales", de: "Jeder isst von einzelnen Tellern", nl: "Iedereen eet van individuele borden" },
          { en: "Sharing from one large platter using right hand only", es: "Compartir de un plato grande usando solo la mano derecha", de: "Teilen von einer großen Platte nur mit der rechten Hand", nl: "Delen van één grote schaal alleen met de rechterhand" },
          { en: "Using chopsticks exclusively", es: "Usando palillos exclusivamente", de: "Ausschließlich Stäbchen verwenden", nl: "Uitsluitend eetstokjes gebruiken" },
          { en: "Soup served in individual bowls", es: "Sopa servida en tazones individuales", de: "Suppe in einzelnen Schüsseln serviert", nl: "Soep geserveerd in individuele kommen" }
        ],
        correct: 1,
        explanation: {
          en: "Traditional Ethiopian dining involves everyone eating from one large shared platter (mesob), tearing pieces of injera with the right hand only to scoop up stews (wots). The left hand is considered unclean.",
          es: "La comida tradicional etíope involucra a todos comiendo de un gran plato compartido (mesob), rasgando pedazos de injera solo con la mano derecha para recoger guisos (wots). La mano izquierda se considera impura.",
          de: "Traditionelles äthiopisches Essen beinhaltet, dass alle von einer großen gemeinsamen Platte (Mesob) essen und Stücke von Injera nur mit der rechten Hand abreißen, um Eintöpfe (Wots) aufzunehmen. Die linke Hand gilt als unrein.",
          nl: "Traditioneel Ethiopisch dineren houdt in dat iedereen eet van één grote gedeelde schaal (mesob), stukken injera afscheurt met alleen de rechterhand om stoofschotels (wots) op te scheppen. De linkerhand wordt als onrein beschouwd."
        }
      },
      {
        question: {
          en: "What is the key difference between 'Hollandaise' and 'Béarnaise' sauce?",
          es: "¿Cuál es la diferencia clave entre la salsa 'Holandesa' y 'Bearnesa'?",
          de: "Was ist der Hauptunterschied zwischen 'Hollandaise'- und 'Béarnaise'-Sauce?",
          nl: "Wat is het belangrijkste verschil tussen 'Hollandaise' en 'Béarnaise' saus?"
        },
        options: [
          { en: "Hollandaise uses butter, Béarnaise uses oil", es: "Holandesa usa mantequilla, Bearnesa usa aceite", de: "Hollandaise verwendet Butter, Béarnaise verwendet Öl", nl: "Hollandaise gebruikt boter, Béarnaise gebruikt olie" },
          { en: "Béarnaise adds tarragon and shallot reduction", es: "Bearnesa añade reducción de estragón y chalota", de: "Béarnaise fügt Estragon- und Schalottenreduktion hinzu", nl: "Béarnaise voegt dragon en sjalot reductie toe" },
          { en: "Hollandaise is cold, Béarnaise is hot", es: "Holandesa es fría, Bearnesa es caliente", de: "Hollandaise ist kalt, Béarnaise ist heiß", nl: "Hollandaise is koud, Béarnaise is warm" },
          { en: "They are exactly the same sauce", es: "Son exactamente la misma salsa", de: "Sie sind genau die gleiche Sauce", nl: "Het is exact dezelfde saus" }
        ],
        correct: 1,
        explanation: {
          en: "Both are egg yolk and butter emulsions, but Béarnaise adds a reduction of white wine vinegar, shallots, and tarragon, giving it a more herbaceous flavor. Hollandaise uses lemon juice for acidity.",
          es: "Ambas son emulsiones de yema de huevo y mantequilla, pero la Bearnesa añade una reducción de vinagre de vino blanco, chalotas y estragón, dándole un sabor más herbáceo. La Holandesa usa jugo de limón para acidez.",
          de: "Beide sind Eigelb- und Butter-Emulsionen, aber Béarnaise fügt eine Reduktion aus Weißweinessig, Schalotten und Estragon hinzu, was ihr ein würzigeres Aroma verleiht. Hollandaise verwendet Zitronensaft für Säure.",
          nl: "Beide zijn eidooier en boter emulsies, maar Béarnaise voegt een reductie toe van witte wijnazijn, sjalotten en dragon, wat het een meer kruidig aroma geeft. Hollandaise gebruikt citroensap voor zuurgraad."
        }
      },
      {
        question: {
          en: "What is the traditional preservation method for Moroccan 'Preserved Lemons'?",
          es: "¿Cuál es el método tradicional de conservación para los 'Limones Conservados' marroquíes?",
          de: "Was ist die traditionelle Konservierungsmethode für marokkanische 'Eingelegte Zitronen'?",
          nl: "Wat is de traditionele conserveringsmethode voor Marokkaanse 'Ingelegde citroenen'?"
        },
        options: [
          { en: "Freezing in ice blocks", es: "Congelación en bloques de hielo", de: "Einfrieren in Eisblöcken", nl: "Invriezen in ijsblokken" },
          { en: "Salt fermentation for weeks", es: "Fermentación en sal durante semanas", de: "Salzfermentation über Wochen", nl: "Zoutfermentatie voor weken" },
          { en: "Smoking over wood chips", es: "Ahumar sobre astillas de madera", de: "Räuchern über Holzspänen", nl: "Roken over houtspaanders" },
          { en: "Drying in direct sunlight", es: "Secar al sol directo", de: "Trocknen in direktem Sonnenlicht", nl: "Drogen in direct zonlicht" }
        ],
        correct: 1,
        explanation: {
          en: "Moroccan preserved lemons are made by packing quartered lemons tightly in jars with copious salt and their own juice, fermenting for 3-4 weeks. The rind becomes soft and loses bitterness.",
          es: "Los limones conservados marroquíes se hacen empacando limones en cuartos apretadamente en frascos con abundante sal y su propio jugo, fermentando durante 3-4 semanas. La cáscara se vuelve suave y pierde amargura.",
          de: "Marokkanische eingelegte Zitronen werden hergestellt, indem geviertelten Zitronen fest in Gläser mit reichlich Salz und ihrem eigenen Saft gepackt werden, und 3-4 Wochen fermentieren. Die Schale wird weich und verliert Bitterkeit.",
          nl: "Marokkaanse ingelegde citroenen worden gemaakt door gevierde citroenen stevig in potten te pakken met ruim zout en hun eigen sap, fermenteren voor 3-4 weken. De schil wordt zacht en verliest bitterheid."
        }
      },
      {
        question: {
          en: "What is the traditional Argentinian 'Provoleta' served with at an asado?",
          es: "¿Con qué se sirve tradicionalmente la 'Provoleta' argentina en un asado?",
          de: "Womit wird traditionelles argentinisches 'Provoleta' bei einem Asado serviert?",
          nl: "Waarmee wordt traditionele Argentijnse 'Provoleta' bij een asado geserveerd?"
        },
        options: [
          { en: "Grilled provolone cheese with oregano and chili flakes", es: "Queso provolone a la parrilla con orégano y hojuelas de chile", de: "Gegrillter Provolone-Käse mit Oregano und Chiliflocken", nl: "Gegrilde provolone kaas met oregano en chilivlokken" },
          { en: "A cold cheese soup", es: "Una sopa de queso fría", de: "Eine kalte Käsesuppe", nl: "Een koude kaassoep" },
          { en: "Fried mozzarella sticks", es: "Palitos de mozzarella fritos", de: "Frittierte Mozzarella-Sticks", nl: "Gefrituurde mozzarella sticks" },
          { en: "Whipped cream dessert", es: "Postre de crema batida", de: "Schlagsahne-Dessert", nl: "Slagroom dessert" }
        ],
        correct: 0,
        explanation: {
          en: "Provoleta is a thick slice of provolone cheese grilled directly on the asado grill until the outside is crispy and inside melted, seasoned with oregano, chili flakes, and olive oil, served as an appetizer.",
          es: "Provoleta es una rebanada gruesa de queso provolone a la parrilla directamente en la parrilla del asado hasta que el exterior esté crujiente y el interior derretido, sazonado con orégano, hojuelas de chile y aceite de oliva, servido como aperitivo.",
          de: "Provoleta ist eine dicke Scheibe Provolone-Käse, die direkt auf dem Asado-Grill gegrillt wird, bis die Außenseite knusprig und die Innenseite geschmolzen ist, gewürzt mit Oregano, Chiliflocken und Olivenöl, als Vorspeise serviert.",
          nl: "Provoleta is een dikke plak provolone kaas gegrild direct op de asado grill tot de buitenkant knapperig is en de binnenkant gesmolten, gekruid met oregano, chilivlokken en olijfolie, geserveerd als voorgerecht."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();
