// Vegetarian Dishes Quiz - Level 3: International Vegetarian Cuisines
(function() {
  "use strict";
  const level3 = {
    name: {
      en: "Vegetarian Level 3",
      es: "Vegetariano Nivel 3",
      de: "Vegetarisch Stufe 3",
      nl: "Vegetarisch Level 3"
    },
    questions: [
      {
        question: {
          en: "What is the main ingredient in traditional Greek spanakopita?",
          es: "¿Cuál es el ingrediente principal en la spanakopita griega tradicional?",
          de: "Was ist die Hauptzutat in traditioneller griechischer Spanakopita?",
          nl: "Wat is het hoofdingrediënt in traditionele Griekse spanakopita?"
        },
        options: [
          { en: "Spinach", es: "Espinacas", de: "Spinat", nl: "Spinazie" },
          { en: "Cabbage", es: "Repollo", de: "Kohl", nl: "Kool" },
          { en: "Eggplant", es: "Berenjena", de: "Aubergine", nl: "Aubergine" },
          { en: "Zucchini", es: "Calabacín", de: "Zucchini", nl: "Courgette" }
        ],
        correct: 0,
        explanation: {
          en: "Spanakopita is a traditional Greek pie made with spinach, feta cheese, herbs, and phyllo pastry. It's a popular vegetarian dish throughout the Mediterranean.",
          es: "La spanakopita es una tarta griega tradicional hecha con espinacas, queso feta, hierbas y masa filo. Es un plato vegetariano popular en todo el Mediterráneo.",
          de: "Spanakopita ist ein traditioneller griechischer Kuchen aus Spinat, Fetakäse, Kräutern und Filoteig. Es ist ein beliebtes vegetarisches Gericht im gesamten Mittelmeerraum.",
          nl: "Spanakopita is een traditionele Griekse taart gemaakt met spinazie, fetakaas, kruiden en filodeeg. Het is een populair vegetarisch gerecht in het hele Middellandse Zeegebied."
        }
      },
      {
        question: {
          en: "What is the traditional Japanese soup made with fermented soybean paste called?",
          es: "¿Cómo se llama la sopa japonesa tradicional hecha con pasta de soja fermentada?",
          de: "Wie heißt die traditionelle japanische Suppe aus fermentierter Sojabohnenpaste?",
          nl: "Hoe heet de traditionele Japanse soep gemaakt van gefermenteerde sojabonenpasta?"
        },
        options: [
          { en: "Miso soup", es: "Sopa miso", de: "Miso-Suppe", nl: "Miso soep" },
          { en: "Ramen", es: "Ramen", de: "Ramen", nl: "Ramen" },
          { en: "Udon", es: "Udon", de: "Udon", nl: "Udon" },
          { en: "Soba", es: "Soba", de: "Soba", nl: "Soba" }
        ],
        correct: 0,
        explanation: {
          en: "Miso soup is made with miso paste (fermented soybeans), dashi broth, and often contains tofu, seaweed, and green onions. It's a staple in Japanese cuisine.",
          es: "La sopa miso se hace con pasta miso (soja fermentada), caldo dashi, y a menudo contiene tofu, algas y cebolletas. Es un básico en la cocina japonesa.",
          de: "Miso-Suppe wird mit Miso-Paste (fermentierte Sojabohnen), Dashi-Brühe gemacht und enthält oft Tofu, Seetang und grüne Zwiebeln. Es ist ein Grundnahrungsmittel in der japanischen Küche.",
          nl: "Miso soep wordt gemaakt met miso pasta (gefermenteerde sojabonen), dashi bouillon, en bevat vaak tofu, zeewier en lente-uitjes. Het is een basisvoedsel in de Japanse keuken."
        }
      },
      {
        question: {
          en: "Which Indian bread is typically stuffed with spiced potatoes?",
          es: "¿Qué pan indio se rellena típicamente con papas especiadas?",
          de: "Welches indische Brot wird normalerweise mit gewürzten Kartoffeln gefüllt?",
          nl: "Welk Indiaas brood wordt typisch gevuld met gekruide aardappels?"
        },
        options: [
          { en: "Aloo Paratha", es: "Aloo Paratha", de: "Aloo Paratha", nl: "Aloo Paratha" },
          { en: "Naan", es: "Naan", de: "Naan", nl: "Naan" },
          { en: "Chapati", es: "Chapati", de: "Chapati", nl: "Chapati" },
          { en: "Poori", es: "Poori", de: "Poori", nl: "Poori" }
        ],
        correct: 0,
        explanation: {
          en: "Aloo Paratha is a popular North Indian flatbread stuffed with spiced mashed potatoes. 'Aloo' means potato in Hindi, making it a hearty vegetarian meal.",
          es: "Aloo Paratha es un pan plano popular del norte de India relleno con puré de papas especiadas. 'Aloo' significa papa en hindi, haciéndolo una comida vegetariana abundante.",
          de: "Aloo Paratha ist ein beliebtes nordindisches Fladenbrot, gefüllt mit gewürztem Kartoffelpüree. 'Aloo' bedeutet Kartoffel auf Hindi, was es zu einer herzhaften vegetarischen Mahlzeit macht.",
          nl: "Aloo Paratha is een populair Noord-Indiaas platbrood gevuld met gekruide aardappelpuree. 'Aloo' betekent aardappel in het Hindi, waardoor het een stevige vegetarische maaltijd is."
        }
      },
      {
        question: {
          en: "What is the main vegetable in the Middle Eastern dish baba ganoush?",
          es: "¿Cuál es la verdura principal en el plato de Medio Oriente baba ganoush?",
          de: "Was ist das Hauptgemüse im nahöstlichen Gericht Baba Ganoush?",
          nl: "Wat is de hoofdgroente in het Midden-Oosterse gerecht baba ganoush?"
        },
        options: [
          { en: "Eggplant", es: "Berenjena", de: "Aubergine", nl: "Aubergine" },
          { en: "Chickpeas", es: "Garbanzos", de: "Kichererbsen", nl: "Kikkererwten" },
          { en: "Bell peppers", es: "Pimientos", de: "Paprika", nl: "Paprika's" },
          { en: "Tomatoes", es: "Tomates", de: "Tomaten", nl: "Tomaten" }
        ],
        correct: 0,
        explanation: {
          en: "Baba ganoush is made from roasted eggplant blended with tahini, olive oil, lemon juice, and garlic. The eggplant is typically charred to give a smoky flavor.",
          es: "El baba ganoush se hace con berenjena asada mezclada con tahini, aceite de oliva, jugo de limón y ajo. La berenjena típicamente se carboniza para dar un sabor ahumado.",
          de: "Baba Ganoush wird aus gerösteter Aubergine mit Tahini, Olivenöl, Zitronensaft und Knoblauch gemacht. Die Aubergine wird typischerweise verkohlt, um einen rauchigen Geschmack zu geben.",
          nl: "Baba ganoush wordt gemaakt van geroosterde aubergine gemengd met tahini, olijfolie, citroensap en knoflook. De aubergine wordt meestal geblakerd voor een rokerige smaak."
        }
      },
      {
        question: {
          en: "Which Mexican dish consists of poblano peppers stuffed with cheese?",
          es: "¿Qué plato mexicano consiste en chiles poblanos rellenos de queso?",
          de: "Welches mexikanische Gericht besteht aus Poblano-Paprika gefüllt mit Käse?",
          nl: "Welk Mexicaans gerecht bestaat uit poblano pepers gevuld met kaas?"
        },
        options: [
          { en: "Chiles Rellenos", es: "Chiles Rellenos", de: "Chiles Rellenos", nl: "Chiles Rellenos" },
          { en: "Tacos", es: "Tacos", de: "Tacos", nl: "Tacos" },
          { en: "Enchiladas", es: "Enchiladas", de: "Enchiladas", nl: "Enchiladas" },
          { en: "Quesadillas", es: "Quesadillas", de: "Quesadillas", nl: "Quesadillas" }
        ],
        correct: 0,
        explanation: {
          en: "Chiles Rellenos are poblano peppers stuffed with cheese (often Oaxaca or Monterey Jack), coated in egg batter, and fried until golden. It's a classic Mexican vegetarian dish.",
          es: "Los Chiles Rellenos son chiles poblanos rellenos de queso (a menudo Oaxaca o Monterey Jack), cubiertos con masa de huevo, y fritos hasta dorar. Es un clásico plato vegetariano mexicano.",
          de: "Chiles Rellenos sind Poblano-Paprika gefüllt mit Käse (oft Oaxaca oder Monterey Jack), in Eierteig getaucht und goldbraun gebraten. Es ist ein klassisches mexikanisches vegetarisches Gericht.",
          nl: "Chiles Rellenos zijn poblano pepers gevuld met kaas (vaak Oaxaca of Monterey Jack), bedekt met eierbeslag, en goudbruin gebakken. Het is een klassiek Mexicaans vegetarisch gerecht."
        }
      },
      {
        question: {
          en: "What is the Italian pasta sauce made primarily with basil called?",
          es: "¿Cómo se llama la salsa italiana para pasta hecha principalmente con albahaca?",
          de: "Wie heißt die italienische Nudelsoße, die hauptsächlich aus Basilikum gemacht wird?",
          nl: "Hoe heet de Italiaanse pastasaus die hoofdzakelijk van basilicum wordt gemaakt?"
        },
        options: [
          { en: "Pesto", es: "Pesto", de: "Pesto", nl: "Pesto" },
          { en: "Marinara", es: "Marinara", de: "Marinara", nl: "Marinara" },
          { en: "Alfredo", es: "Alfredo", de: "Alfredo", nl: "Alfredo" },
          { en: "Arrabbiata", es: "Arrabbiata", de: "Arrabbiata", nl: "Arrabbiata" }
        ],
        correct: 0,
        explanation: {
          en: "Pesto Genovese is made with fresh basil, garlic, pine nuts, olive oil, and Parmesan cheese. It originates from Liguria, Italy, and is completely vegetarian.",
          es: "El Pesto Genovese se hace con albahaca fresca, ajo, piñones, aceite de oliva y queso parmesano. Origina de Liguria, Italia, y es completamente vegetariano.",
          de: "Pesto Genovese wird aus frischem Basilikum, Knoblauch, Pinienkernen, Olivenöl und Parmesan gemacht. Es stammt aus Ligurien, Italien, und ist vollständig vegetarisch.",
          nl: "Pesto Genovese wordt gemaakt met verse basilicum, knoflook, pijnboompitjes, olijfolie en Parmezaanse kaas. Het komt uit Ligurië, Italië, en is volledig vegetarisch."
        }
      },
      {
        question: {
          en: "Which Ethiopian stew is made with red lentils and berbere spice?",
          es: "¿Qué guiso etíope se hace con lentejas rojas y especias berbere?",
          de: "Welcher äthiopische Eintopf wird mit roten Linsen und Berbere-Gewürz gemacht?",
          nl: "Welke Ethiopische stoofschotel wordt gemaakt met rode linzen en berbere kruiden?"
        },
        options: [
          { en: "Misir Wot", es: "Misir Wot", de: "Misir Wot", nl: "Misir Wot" },
          { en: "Doro Wot", es: "Doro Wot", de: "Doro Wot", nl: "Doro Wot" },
          { en: "Kitfo", es: "Kitfo", de: "Kitfo", nl: "Kitfo" },
          { en: "Tibs", es: "Tibs", de: "Tibs", nl: "Tibs" }
        ],
        correct: 0,
        explanation: {
          en: "Misir Wot is a spicy Ethiopian red lentil stew made with berbere spice blend. It's traditionally served on injera bread and is a staple vegetarian dish during fasting periods.",
          es: "Misir Wot es un guiso etíope picante de lentejas rojas hecho con mezcla de especias berbere. Tradicionalmente se sirve sobre pan injera y es un plato vegetariano básico durante períodos de ayuno.",
          de: "Misir Wot ist ein würziger äthiopischer roter Linseneintopf mit Berbere-Gewürzmischung. Es wird traditionell auf Injera-Brot serviert und ist ein vegetarisches Grundgericht während Fastenzeiten.",
          nl: "Misir Wot is een pittige Ethiopische rode linzenstoofschotel gemaakt met berbere kruidenmengsel. Het wordt traditioneel geserveerd op injera brood en is een basis vegetarisch gerecht tijdens vastenperiodes."
        }
      },
      {
        question: {
          en: "What is the French vegetable stew from Provence called?",
          es: "¿Cómo se llama el guiso de verduras francés de Provenza?",
          de: "Wie heißt der französische Gemüseeintopf aus der Provence?",
          nl: "Hoe heet de Franse groentenstoofschotel uit de Provence?"
        },
        options: [
          { en: "Ratatouille", es: "Ratatouille", de: "Ratatouille", nl: "Ratatouille" },
          { en: "Bouillabaisse", es: "Bouillabaisse", de: "Bouillabaisse", nl: "Bouillabaisse" },
          { en: "Cassoulet", es: "Cassoulet", de: "Cassoulet", nl: "Cassoulet" },
          { en: "Coq au Vin", es: "Coq au Vin", de: "Coq au Vin", nl: "Coq au Vin" }
        ],
        correct: 0,
        explanation: {
          en: "Ratatouille is a traditional French vegetable stew from Nice, made with eggplant, zucchini, bell peppers, tomatoes, onions, and herbs de Provence. It's completely vegetarian.",
          es: "Ratatouille es un guiso tradicional francés de verduras de Niza, hecho con berenjena, calabacín, pimientos, tomates, cebollas y hierbas de Provenza. Es completamente vegetariano.",
          de: "Ratatouille ist ein traditioneller französischer Gemüseeintopf aus Nizza, gemacht mit Auberginen, Zucchini, Paprika, Tomaten, Zwiebeln und Kräutern der Provence. Es ist vollständig vegetarisch.",
          nl: "Ratatouille is een traditionele Franse groentenstoofschotel uit Nice, gemaakt met aubergine, courgette, paprika, tomaten, uien en kruiden de Provence. Het is volledig vegetarisch."
        }
      },
      {
        question: {
          en: "Which Korean fermented vegetable dish is considered a national dish?",
          es: "¿Qué plato coreano de verduras fermentadas se considera un plato nacional?",
          de: "Welches koreanische fermentierte Gemüsegericht gilt als Nationalgericht?",
          nl: "Welk Koreaans gefermenteerd groentegerecht wordt beschouwd als een nationaal gerecht?"
        },
        options: [
          { en: "Kimchi", es: "Kimchi", de: "Kimchi", nl: "Kimchi" },
          { en: "Bulgogi", es: "Bulgogi", de: "Bulgogi", nl: "Bulgogi" },
          { en: "Bibimbap", es: "Bibimbap", de: "Bibimbap", nl: "Bibimbap" },
          { en: "Japchae", es: "Japchae", de: "Japchae", nl: "Japchae" }
        ],
        correct: 0,
        explanation: {
          en: "Kimchi is fermented cabbage (and sometimes other vegetables) seasoned with chili peppers, garlic, and ginger. It's rich in probiotics and considered Korea's national dish.",
          es: "El kimchi es repollo fermentado (y a veces otras verduras) sazonado con chiles, ajo y jengibre. Es rico en probióticos y considerado el plato nacional de Corea.",
          de: "Kimchi ist fermentierter Kohl (und manchmal anderes Gemüse) gewürzt mit Chilischoten, Knoblauch und Ingwer. Es ist reich an Probiotika und gilt als Koreas Nationalgericht.",
          nl: "Kimchi is gefermenteerde kool (en soms andere groenten) gekruid met chilipepers, knoflook en gember. Het is rijk aan probiotica en wordt beschouwd als Korea's nationale gerecht."
        }
      },
      {
        question: {
          en: "What is the Turkish dish of stuffed grape leaves called?",
          es: "¿Cómo se llama el plato turco de hojas de parra rellenas?",
          de: "Wie heißt das türkische Gericht aus gefüllten Weinblättern?",
          nl: "Hoe heet het Turkse gerecht van gevulde druivenbladeren?"
        },
        options: [
          { en: "Dolma", es: "Dolma", de: "Dolma", nl: "Dolma" },
          { en: "Kebab", es: "Kebab", de: "Kebab", nl: "Kebab" },
          { en: "Baklava", es: "Baklava", de: "Baklava", nl: "Baklava" },
          { en: "Pilaf", es: "Pilaf", de: "Pilaf", nl: "Pilaf" }
        ],
        correct: 0,
        explanation: {
          en: "Dolma are grape leaves stuffed with a mixture of rice, herbs, pine nuts, and spices. The vegetarian version (without meat) is particularly popular and healthy.",
          es: "Dolma son hojas de parra rellenas con una mezcla de arroz, hierbas, piñones y especias. La versión vegetariana (sin carne) es particularmente popular y saludable.",
          de: "Dolma sind Weinblätter gefüllt mit einer Mischung aus Reis, Kräutern, Pinienkernen und Gewürzen. Die vegetarische Version (ohne Fleisch) ist besonders beliebt und gesund.",
          nl: "Dolma zijn druivenbladeren gevuld met een mengsel van rijst, kruiden, pijnboompitjes en specerijen. De vegetarische versie (zonder vlees) is bijzonder populair en gezond."
        }
      },
      {
        question: {
          en: "Which Moroccan dish is traditionally cooked in a cone-shaped pot?",
          es: "¿Qué plato marroquí se cocina tradicionalmente en una olla en forma de cono?",
          de: "Welches marokkanische Gericht wird traditionell in einem kegelförmigen Topf gekocht?",
          nl: "Welk Marokkaans gerecht wordt traditioneel gekookt in een kegelvormige pot?"
        },
        options: [
          { en: "Tagine", es: "Tagine", de: "Tagine", nl: "Tagine" },
          { en: "Couscous", es: "Cuscús", de: "Couscous", nl: "Couscous" },
          { en: "Harira", es: "Harira", de: "Harira", nl: "Harira" },
          { en: "Pastilla", es: "Pastilla", de: "Pastilla", nl: "Pastilla" }
        ],
        correct: 0,
        explanation: {
          en: "Tagine is both the name of the cone-shaped cooking pot and the slow-cooked stew made in it. Vegetable tagines with preserved lemons and olives are very popular.",
          es: "Tagine es tanto el nombre de la olla de cocción en forma de cono como el guiso cocido lentamente hecho en ella. Los tagines de verduras con limones preservados y aceitunas son muy populares.",
          de: "Tagine ist sowohl der Name des kegelförmigen Kochtopfs als auch des darin langsam gekochten Eintopfs. Gemüse-Tagines mit eingelegten Zitronen und Oliven sind sehr beliebt.",
          nl: "Tagine is zowel de naam van de kegelvormige kookpot als de langzaam gekookte stoofschotel die erin wordt gemaakt. Groente tagines met gepreserveerde citroenen en olijven zijn zeer populair."
        }
      },
      {
        question: {
          en: "What is the main ingredient in the Israeli dish falafel?",
          es: "¿Cuál es el ingrediente principal en el plato israelí falafel?",
          de: "Was ist die Hauptzutat im israelischen Gericht Falafel?",
          nl: "Wat is het hoofdingrediënt in het Israëlische gerecht falafel?"
        },
        options: [
          { en: "Chickpeas", es: "Garbanzos", de: "Kichererbsen", nl: "Kikkererwten" },
          { en: "Lentils", es: "Lentejas", de: "Linsen", nl: "Linzen" },
          { en: "Black beans", es: "Frijoles negros", de: "Schwarze Bohnen", nl: "Zwarte bonen" },
          { en: "White beans", es: "Frijoles blancos", de: "Weiße Bohnen", nl: "Witte bonen" }
        ],
        correct: 0,
        explanation: {
          en: "Falafel are deep-fried balls made from ground chickpeas (or sometimes fava beans), herbs, and spices. They're a popular Middle Eastern street food and completely vegetarian.",
          es: "Los falafel son bolas fritas hechas de garbanzos molidos (o a veces habas), hierbas y especias. Son una comida callejera popular del Medio Oriente y completamente vegetariana.",
          de: "Falafel sind frittierte Bällchen aus gemahlenen Kichererbsen (oder manchmal Favabohnen), Kräutern und Gewürzen. Sie sind ein beliebtes nahöstliches Straßenessen und vollständig vegetarisch.",
          nl: "Falafel zijn gefrituurde balletjes gemaakt van gemalen kikkererwten (of soms tuinbonen), kruiden en specerijen. Ze zijn een populair Midden-Oosters straatvoedsel en volledig vegetarisch."
        }
      },
      {
        question: {
          en: "Which Thai curry is typically made with green chilies and coconut milk?",
          es: "¿Qué curry tailandés se hace típicamente con chiles verdes y leche de coco?",
          de: "Welches thailändische Curry wird normalerweise mit grünen Chilischoten und Kokosmilch gemacht?",
          nl: "Welke Thaise curry wordt typisch gemaakt met groene pepers en kokosmelk?"
        },
        options: [
          { en: "Green curry", es: "Curry verde", de: "Grünes Curry", nl: "Groene curry" },
          { en: "Red curry", es: "Curry rojo", de: "Rotes Curry", nl: "Rode curry" },
          { en: "Yellow curry", es: "Curry amarillo", de: "Gelbes Curry", nl: "Gele curry" },
          { en: "Massaman curry", es: "Curry Massaman", de: "Massaman-Curry", nl: "Massaman curry" }
        ],
        correct: 0,
        explanation: {
          en: "Green curry gets its color and heat from green chilies, and often includes vegetables like Thai eggplant, bamboo shoots, and basil in coconut milk.",
          es: "El curry verde obtiene su color y picor de los chiles verdes, y a menudo incluye verduras como berenjena tailandesa, brotes de bambú y albahaca en leche de coco.",
          de: "Grünes Curry erhält seine Farbe und Schärfe von grünen Chilischoten und enthält oft Gemüse wie thailändische Auberginen, Bambussprossen und Basilikum in Kokosmilch.",
          nl: "Groene curry krijgt zijn kleur en scherpte van groene pepers, en bevat vaak groenten zoals Thaise aubergine, bamboe scheuten en basilicum in kokosmelk."
        }
      },
      {
        question: {
          en: "What is the traditional Russian soup made with beets called?",
          es: "¿Cómo se llama la sopa rusa tradicional hecha con remolachas?",
          de: "Wie heißt die traditionelle russische Suppe aus Rüben?",
          nl: "Hoe heet de traditionele Russische soep gemaakt met bieten?"
        },
        options: [
          { en: "Borscht", es: "Borscht", de: "Borschtsch", nl: "Borscht" },
          { en: "Solyanka", es: "Solyanka", de: "Solyanka", nl: "Solyanka" },
          { en: "Okroshka", es: "Okroshka", de: "Okroschka", nl: "Okroshka" },
          { en: "Shchi", es: "Shchi", de: "Schtschi", nl: "Shchi" }
        ],
        correct: 0,
        explanation: {
          en: "Borscht is a beet soup that can be served hot or cold. The vegetarian version often includes cabbage, carrots, onions, and is served with sour cream.",
          es: "El borscht es una sopa de remolacha que se puede servir caliente o fría. La versión vegetariana a menudo incluye repollo, zanahorias, cebollas, y se sirve con crema agria.",
          de: "Borschtsch ist eine Rübensuppe, die heiß oder kalt serviert werden kann. Die vegetarische Version enthält oft Kohl, Karotten, Zwiebeln und wird mit saurer Sahne serviert.",
          nl: "Borscht is een bietensoep die warm of koud kan worden geserveerd. De vegetarische versie bevat vaak kool, wortelen, uien, en wordt geserveerd met zure room."
        }
      },
      {
        question: {
          en: "Which Chinese dish consists of tofu in a spicy Sichuan sauce?",
          es: "¿Qué plato chino consiste en tofu en una salsa picante de Sichuan?",
          de: "Welches chinesische Gericht besteht aus Tofu in einer würzigen Sichuan-Sauce?",
          nl: "Welk Chinees gerecht bestaat uit tofu in een pittige Sichuan saus?"
        },
        options: [
          { en: "Mapo Tofu", es: "Mapo Tofu", de: "Mapo Tofu", nl: "Mapo Tofu" },
          { en: "Kung Pao Chicken", es: "Pollo Kung Pao", de: "Kung Pao Huhn", nl: "Kung Pao Kip" },
          { en: "Sweet and Sour Pork", es: "Cerdo Agridulce", de: "Süß-saures Schweinefleisch", nl: "Zoetzuur Varkensvlees" },
          { en: "General Tso's Chicken", es: "Pollo General Tso", de: "General Tsos Huhn", nl: "Generaal Tso's Kip" }
        ],
        correct: 0,
        explanation: {
          en: "Mapo Tofu is a classic Sichuan dish featuring soft tofu in a spicy, savory sauce with Sichuan peppercorns. The vegetarian version omits the traditional ground meat.",
          es: "Mapo Tofu es un plato clásico de Sichuan que presenta tofu suave en una salsa picante y sabrosa con pimienta de Sichuan. La versión vegetariana omite la carne molida tradicional.",
          de: "Mapo Tofu ist ein klassisches Sichuan-Gericht mit weichem Tofu in einer würzigen, herzhaften Sauce mit Sichuan-Pfefferkörnern. Die vegetarische Version lässt das traditionelle Hackfleisch weg.",
          nl: "Mapo Tofu is een klassiek Sichuan gerecht met zachte tofu in een pittige, hartige saus met Sichuan peperbollen. De vegetarische versie laat het traditionele gehakt weg."
        }
      },
      {
        question: {
          en: "What is the Brazilian black bean stew traditionally served with rice called?",
          es: "¿Cómo se llama el guiso brasileño de frijoles negros tradicionalmente servido con arroz?",
          de: "Wie heißt der brasilianische schwarze Bohneneintopf, der traditionell mit Reis serviert wird?",
          nl: "Hoe heet de Braziliaanse zwarte bonenstoofschotel die traditioneel met rijst wordt geserveerd?"
        },
        options: [
          { en: "Feijoada", es: "Feijoada", de: "Feijoada", nl: "Feijoada" },
          { en: "Moqueca", es: "Moqueca", de: "Moqueca", nl: "Moqueca" },
          { en: "Vatapá", es: "Vatapá", de: "Vatapá", nl: "Vatapá" },
          { en: "Acarajé", es: "Acarajé", de: "Acarajé", nl: "Acarajé" }
        ],
        correct: 0,
        explanation: {
          en: "Feijoada is Brazil's national dish. While traditionally made with various meats, vegetarian versions use only black beans, vegetables, and spices, served with rice, collard greens, and orange slices.",
          es: "La Feijoada es el plato nacional de Brasil. Aunque tradicionalmente se hace con varias carnes, las versiones vegetarianas usan solo frijoles negros, verduras y especias, servidas con arroz, col rizada y rodajas de naranja.",
          de: "Feijoada ist Brasiliens Nationalgericht. Obwohl traditionell mit verschiedenen Fleischsorten gemacht, verwenden vegetarische Versionen nur schwarze Bohnen, Gemüse und Gewürze, serviert mit Reis, Grünkohl und Orangenscheiben.",
          nl: "Feijoada is Brazilië's nationale gerecht. Hoewel traditioneel gemaakt met verschillende vleessoorten, gebruiken vegetarische versies alleen zwarte bonen, groenten en kruiden, geserveerd met rijst, boerenkool en sinaasappelschijfjes."
        }
      },
      {
        question: {
          en: "Which Peruvian grain is considered sacred by the Incas?",
          es: "¿Qué grano peruano era considerado sagrado por los incas?",
          de: "Welches peruanische Getreide wurde von den Inkas als heilig betrachtet?",
          nl: "Welk Peruaans graan werd door de Inca's als heilig beschouwd?"
        },
        options: [
          { en: "Quinoa", es: "Quinoa", de: "Quinoa", nl: "Quinoa" },
          { en: "Corn", es: "Maíz", de: "Mais", nl: "Maïs" },
          { en: "Rice", es: "Arroz", de: "Reis", nl: "Rijst" },
          { en: "Wheat", es: "Trigo", de: "Weizen", nl: "Tarwe" }
        ],
        correct: 0,
        explanation: {
          en: "Quinoa was called 'chisaya mama' or 'mother of all grains' by the Incas and was considered sacred. It's a complete protein and was a staple food in the Andes.",
          es: "La quinoa era llamada 'chisaya mama' o 'madre de todos los granos' por los incas y era considerada sagrada. Es una proteína completa y era un alimento básico en los Andes.",
          de: "Quinoa wurde von den Inkas 'chisaya mama' oder 'Mutter aller Körner' genannt und als heilig betrachtet. Es ist ein vollständiges Protein und war ein Grundnahrungsmittel in den Anden.",
          nl: "Quinoa werd door de Inca's 'chisaya mama' of 'moeder van alle granen' genoemd en werd als heilig beschouwd. Het is een compleet eiwit en was een basisvoedsel in de Andes."
        }
      },
      {
        question: {
          en: "What is the German fermented cabbage dish called?",
          es: "¿Cómo se llama el plato alemán de repollo fermentado?",
          de: "Wie heißt das deutsche fermentierte Kohlgericht?",
          nl: "Hoe heet het Duitse gefermenteerde koolgerecht?"
        },
        options: [
          { en: "Sauerkraut", es: "Sauerkraut", de: "Sauerkraut", nl: "Zuurkool" },
          { en: "Bratwurst", es: "Bratwurst", de: "Bratwurst", nl: "Bratwurst" },
          { en: "Schnitzel", es: "Schnitzel", de: "Schnitzel", nl: "Schnitzel" },
          { en: "Strudel", es: "Strudel", de: "Strudel", nl: "Strudel" }
        ],
        correct: 0,
        explanation: {
          en: "Sauerkraut is finely chopped fermented cabbage that's rich in probiotics and vitamin C. It's a traditional German side dish that aids digestion and provides healthy bacteria.",
          es: "El sauerkraut es repollo fermentado finamente picado que es rico en probióticos y vitamina C. Es un acompañamiento alemán tradicional que ayuda a la digestión y proporciona bacterias saludables.",
          de: "Sauerkraut ist fein gehackter fermentierter Kohl, der reich an Probiotika und Vitamin C ist. Es ist eine traditionelle deutsche Beilage, die die Verdauung unterstützt und gesunde Bakterien liefert.",
          nl: "Zuurkool is fijn gehakte gefermenteerde kool die rijk is aan probiotica en vitamine C. Het is een traditioneel Duits bijgerecht dat de spijsvertering bevordert en gezonde bacteriën levert."
        }
      },
      {
        question: {
          en: "Which Spanish rice dish can be made vegetarian with vegetables and saffron?",
          es: "¿Qué plato español de arroz se puede hacer vegetariano con verduras y azafrán?",
          de: "Welches spanische Reisgericht kann mit Gemüse und Safran vegetarisch gemacht werden?",
          nl: "Welk Spaans rijstgerecht kan vegetarisch worden gemaakt met groenten en saffraan?"
        },
        options: [
          { en: "Paella", es: "Paella", de: "Paella", nl: "Paella" },
          { en: "Risotto", es: "Risotto", de: "Risotto", nl: "Risotto" },
          { en: "Jambalaya", es: "Jambalaya", de: "Jambalaya", nl: "Jambalaya" },
          { en: "Biryani", es: "Biryani", de: "Biryani", nl: "Biryani" }
        ],
        correct: 0,
        explanation: {
          en: "Vegetarian paella (paella de verduras) uses saffron-scented rice with vegetables like artichokes, green beans, peppers, and sometimes beans, instead of seafood or meat.",
          es: "La paella vegetariana (paella de verduras) usa arroz perfumado con azafrán con verduras como alcachofas, judías verdes, pimientos, ya veces frijoles, en lugar de mariscos o carne.",
          de: "Vegetarische Paella (Paella de Verduras) verwendet safranduftenden Reis mit Gemüse wie Artischocken, grünen Bohnen, Paprika und manchmal Bohnen, anstatt Meeresfrüchten oder Fleisch.",
          nl: "Vegetarische paella (paella de verduras) gebruikt saffraan geurende rijst met groenten zoals artisjokken, sperziebonen, paprika's, en soms bonen, in plaats van zeevruchten of vlees."
        }
      },
      {
        question: {
          en: "What is the main ingredient in traditional Greek spanakopita?",
          es: "¿Cuál es el ingrediente principal en la spanakopita griega tradicional?",
          de: "Was ist die Hauptzutat in traditioneller griechischer Spanakopita?",
          nl: "Wat is het hoofdingrediënt in traditionele Griekse spanakopita?"
        },
        options: [
          { en: "Spinach", es: "Espinacas", de: "Spinat", nl: "Spinazie" },
          { en: "Cabbage", es: "Repollo", de: "Kohl", nl: "Kool" },
          { en: "Eggplant", es: "Berenjena", de: "Aubergine", nl: "Aubergine" },
          { en: "Zucchini", es: "Calabacín", de: "Zucchini", nl: "Courgette" }
        ],
        correct: 0,
        explanation: {
          en: "Spanakopita is a traditional Greek pie made with spinach, feta cheese, herbs, and phyllo pastry. It's a popular vegetarian dish throughout the Mediterranean.",
          es: "La spanakopita es una tarta griega tradicional hecha con espinacas, queso feta, hierbas y masa filo. Es un plato vegetariano popular en todo el Mediterráneo.",
          de: "Spanakopita ist ein traditioneller griechischer Kuchen aus Spinat, Fetakäse, Kräutern und Filoteig. Es ist ein beliebtes vegetarisches Gericht im gesamten Mittelmeerraum.",
          nl: "Spanakopita is een traditionele Griekse taart gemaakt met spinazie, fetakaas, kruiden en filodeeg. Het is een populair vegetarisch gerecht in het hele Middellandse Zeegebied."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  }
  return level3;
})();