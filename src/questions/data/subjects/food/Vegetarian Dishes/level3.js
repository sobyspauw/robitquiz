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
          en: "What is the Vietnamese noodle soup with rice noodles and vegetables called?",
          es: "¿Cómo se llama la sopa de fideos vietnamita con fideos de arroz y verduras?",
          de: "Wie heißt die vietnamesische Nudelsuppe mit Reisnudeln und Gemüse?",
          nl: "Hoe heet de Vietnamese noedelsoep met rijstnoedels en groenten?"
        },
        options: [
          { en: "Pho", es: "Pho", de: "Pho", nl: "Pho" },
          { en: "Ramen", es: "Ramen", de: "Ramen", nl: "Ramen" },
          { en: "Udon", es: "Udon", de: "Udon", nl: "Udon" },
          { en: "Pad Thai", es: "Pad Thai", de: "Pad Thai", nl: "Pad Thai" }
        ],
        correct: 0,
        explanation: {
          en: "Vegetarian pho uses aromatic vegetable broth with rice noodles, fresh herbs, bean sprouts, and vegetables. The broth is traditionally flavored with star anise, cinnamon, and charred aromatics.",
          es: "El pho vegetariano usa caldo aromático de verduras con fideos de arroz, hierbas frescas, brotes de soja y verduras. El caldo se aromatiza tradicionalmente con anís estrellado, canela y aromáticos carbonizados.",
          de: "Vegetarisches Pho verwendet aromatische Gemüsebrühe mit Reisnudeln, frischen Kräutern, Sojasprossen und Gemüse. Die Brühe wird traditionell mit Sternanis, Zimt und verkohlten Aromastoffen gewürzt.",
          nl: "Vegetarische pho gebruikt aromatische groentebouillon met rijstnoedels, verse kruiden, taugé en groenten. De bouillon wordt traditioneel op smaak gebracht met steranijs, kaneel en geblakerde aromaten."
        }
      },
      {
        question: {
          en: "What is the Italian rice dish cooked with vegetables and saffron called?",
          es: "¿Cómo se llama el plato italiano de arroz cocido con verduras y azafrán?",
          de: "Wie heißt das italienische Reisgericht, das mit Gemüse und Safran gekocht wird?",
          nl: "Hoe heet het Italiaanse rijstgerecht gekookt met groenten en saffraan?"
        },
        options: [
          { en: "Risotto", es: "Risotto", de: "Risotto", nl: "Risotto" },
          { en: "Paella", es: "Paella", de: "Paella", nl: "Paella" },
          { en: "Biryani", es: "Biryani", de: "Biryani", nl: "Biryani" },
          { en: "Pilaf", es: "Pilaf", de: "Pilaf", nl: "Pilaf" }
        ],
        correct: 0,
        explanation: {
          en: "Risotto is an Italian rice dish using Arborio rice, gradually adding broth while stirring to create a creamy texture. Vegetarian versions include mushroom, asparagus, or primavera styles.",
          es: "El risotto es un plato italiano de arroz usando arroz Arborio, añadiendo gradualmente caldo mientras se revuelve para crear una textura cremosa. Las versiones vegetarianas incluyen estilos de hongos, espárragos o primavera.",
          de: "Risotto ist ein italienisches Reisgericht aus Arborio-Reis, bei dem nach und nach Brühe unter Rühren hinzugefügt wird, um eine cremige Textur zu erzeugen. Vegetarische Versionen umfassen Pilz-, Spargel- oder Primavera-Varianten.",
          nl: "Risotto is een Italiaans rijstgerecht met Arborio rijst, geleidelijk bouillon toevoegend terwijl roerend om een romige textuur te creëren. Vegetarische versies omvatten paddenstoel, asperge of primavera stijlen."
        }
      },
      {
        question: {
          en: "Which Southeast Asian country is famous for its vegetarian Buddhist cuisine called 'jay'?",
          es: "¿Qué país del sudeste asiático es famoso por su cocina budista vegetariana llamada 'jay'?",
          de: "Welches südostasiatische Land ist berühmt für seine vegetarische buddhistische Küche namens 'Jay'?",
          nl: "Welk Zuidoost-Aziatisch land is beroemd om zijn vegetarische boeddhistische keuken genaamd 'jay'?"
        },
        options: [
          { en: "Thailand", es: "Tailandia", de: "Thailand", nl: "Thailand" },
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "Mexico", es: "México", de: "Mexiko", nl: "Mexico" },
          { en: "Canada", es: "Canadá", de: "Kanada", nl: "Canada" }
        ],
        correct: 0,
        explanation: {
          en: "Thai 'jay' food follows Buddhist principles, avoiding all animal products, pungent herbs (garlic, onions), and using creative meat substitutes from mushrooms, tofu, and wheat gluten.",
          es: "La comida tailandesa 'jay' sigue principios budistas, evitando todos los productos animales, hierbas pungentes (ajo, cebollas), y usando sustitutos creativos de carne de hongos, tofu y gluten de trigo.",
          de: "Thailändisches 'Jay'-Essen folgt buddhistischen Prinzipien, vermeidet alle tierischen Produkte, scharfe Kräuter (Knoblauch, Zwiebeln) und verwendet kreative Fleischersatzstoffe aus Pilzen, Tofu und Weizengluten.",
          nl: "Thais 'jay' voedsel volgt boeddhistische principes, vermijdt alle dierlijke producten, scherpe kruiden (knoflook, uien), en gebruikt creatieve vleesvervang vangers van paddenstoelen, tofu en tarwegluten."
        }
      },
      {
        question: {
          en: "What is the Caribbean stew made with green bananas, vegetables, and dumplings called?",
          es: "¿Cómo se llama el guiso caribeño hecho con plátanos verdes, verduras y albóndigas?",
          de: "Wie heißt der karibische Eintopf aus grünen Bananen, Gemüse und Klößen?",
          nl: "Hoe heet de Caribische stoofschotel gemaakt met groene bananen, groenten en dumplings?"
        },
        options: [
          { en: "Callaloo", es: "Callaloo", de: "Callaloo", nl: "Callaloo" },
          { en: "Gumbo", es: "Gumbo", de: "Gumbo", nl: "Gumbo" },
          { en: "Chowder", es: "Chowder", de: "Chowder", nl: "Chowder" },
          { en: "Bisque", es: "Bisque", de: "Bisque", nl: "Bisque" }
        ],
        correct: 0,
        explanation: {
          en: "Callaloo is a popular Caribbean dish featuring leafy greens, okra, coconut milk, and various vegetables. Each island has its own variation, with some versions being completely vegetarian.",
          es: "El callaloo es un plato caribeño popular con verduras de hoja verde, quingombó, leche de coco y varias verduras. Cada isla tiene su propia variación, con algunas versiones completamente vegetarianas.",
          de: "Callaloo ist ein beliebtes karibisches Gericht mit Blattgrün, Okra, Kokosmilch und verschiedenem Gemüse. Jede Insel hat ihre eigene Variation, wobei einige Versionen vollständig vegetarisch sind.",
          nl: "Callaloo is een populair Caribisch gerecht met bladgroenten, okra, kokosmelk en verschillende groenten. Elk eiland heeft zijn eigen variatie, met sommige versies volledig vegetarisch."
        }
      },
      {
        question: {
          en: "Which Polish dish consists of dumplings filled with potatoes and cheese?",
          es: "¿Qué plato polaco consiste en albóndigas rellenas de papas y queso?",
          de: "Welches polnische Gericht besteht aus Klößen gefüllt mit Kartoffeln und Käse?",
          nl: "Welk Pools gerecht bestaat uit dumplings gevuld met aardappels en kaas?"
        },
        options: [
          { en: "Pierogi", es: "Pierogi", de: "Pierogi", nl: "Pierogi" },
          { en: "Goulash", es: "Goulash", de: "Gulasch", nl: "Goulash" },
          { en: "Schnitzel", es: "Schnitzel", de: "Schnitzel", nl: "Schnitzel" },
          { en: "Strudel", es: "Strudel", de: "Strudel", nl: "Strudel" }
        ],
        correct: 0,
        explanation: {
          en: "Pierogi are boiled or fried dumplings with various fillings. The ruskie version (with potatoes and cheese) is the most popular vegetarian option, often served with sour cream and fried onions.",
          es: "Los pierogi son albóndigas hervidas o fritas con varios rellenos. La versión ruskie (con papas y queso) es la opción vegetariana más popular, a menudo servida con crema agria y cebollas fritas.",
          de: "Pierogi sind gekochte oder gebratene Klöße mit verschiedenen Füllungen. Die Ruskie-Version (mit Kartoffeln und Käse) ist die beliebteste vegetarische Option, oft mit saurer Sahne und gebratenen Zwiebeln serviert.",
          nl: "Pierogi zijn gekookte of gebakken dumplings met verschillende vullingen. De ruskie versie (met aardappels en kaas) is de populairste vegetarische optie, vaak geserveerd met zure room en gebakken uien."
        }
      },
      {
        question: {
          en: "What is the Lebanese dish of finely chopped parsley, tomatoes, and bulgur called?",
          es: "¿Cómo se llama el plato libanés de perejil finamente picado, tomates y bulgur?",
          de: "Wie heißt das libanesische Gericht aus fein gehackter Petersilie, Tomaten und Bulgur?",
          nl: "Hoe heet het Libanese gerecht van fijn gehakte peterselie, tomaten en bulgur?"
        },
        options: [
          { en: "Tabbouleh", es: "Tabbouleh", de: "Tabouleh", nl: "Tabbouleh" },
          { en: "Hummus", es: "Hummus", de: "Hummus", nl: "Hummus" },
          { en: "Baba ganoush", es: "Baba ganoush", de: "Baba Ganoush", nl: "Baba ganoush" },
          { en: "Falafel", es: "Falafel", de: "Falafel", nl: "Falafel" }
        ],
        correct: 0,
        explanation: {
          en: "Tabbouleh is a refreshing Middle Eastern salad with more parsley than bulgur, mixed with tomatoes, mint, lemon juice, and olive oil. It's traditionally served as part of a mezze platter.",
          es: "El tabbouleh es una ensalada refrescante del Medio Oriente con más perejil que bulgur, mezclado con tomates, menta, jugo de limón y aceite de oliva. Tradicionalmente se sirve como parte de una bandeja de mezze.",
          de: "Tabouleh ist ein erfrischender nahöstlicher Salat mit mehr Petersilie als Bulgur, gemischt mit Tomaten, Minze, Zitronensaft und Olivenöl. Es wird traditionell als Teil einer Mezze-Platte serviert.",
          nl: "Tabbouleh is een verfrissende Midden-Oosterse salade met meer peterselie dan bulgur, gemengd met tomaten, munt, citroensap en olijfolie. Het wordt traditioneel geserveerd als deel van een mezze plateau."
        }
      },
      {
        question: {
          en: "Which Indonesian fried rice dish is traditionally vegetarian and uses sweet soy sauce?",
          es: "¿Qué plato indonesio de arroz frito es tradicionalmente vegetariano y usa salsa de soja dulce?",
          de: "Welches indonesische gebratene Reisgericht ist traditionell vegetarisch und verwendet süße Sojasoße?",
          nl: "Welk Indonesisch gebakken rijstgerecht is traditioneel vegetarisch en gebruikt zoete sojasaus?"
        },
        options: [
          { en: "Nasi goreng", es: "Nasi goreng", de: "Nasi Goreng", nl: "Nasi goreng" },
          { en: "Pad Thai", es: "Pad Thai", de: "Pad Thai", nl: "Pad Thai" },
          { en: "Fried rice", es: "Arroz frito", de: "Gebratener Reis", nl: "Gebakken rijst" },
          { en: "Biryani", es: "Biryani", de: "Biryani", nl: "Biryani" }
        ],
        correct: 0,
        explanation: {
          en: "Nasi goreng uses kecap manis (sweet soy sauce), vegetables, and aromatic spices. Vegetarian versions include egg, tofu, tempeh, and vegetables, topped with fried shallots and cucumber slices.",
          es: "El nasi goreng usa kecap manis (salsa de soja dulce), verduras y especias aromáticas. Las versiones vegetarianas incluyen huevo, tofu, tempeh y verduras, coronadas con chalotes fritos y rodajas de pepino.",
          de: "Nasi Goreng verwendet Kecap Manis (süße Sojasoße), Gemüse und aromatische Gewürze. Vegetarische Versionen enthalten Ei, Tofu, Tempeh und Gemüse, garniert mit gebratenen Schalotten und Gurkenscheiben.",
          nl: "Nasi goreng gebruikt kecap manis (zoete sojasaus), groenten en aromatische kruiden. Vegetarische versies bevatten ei, tofu, tempeh en groenten, gegarneerd met gebakken sjalotten en komkommerschijfjes."
        }
      },
      {
        question: {
          en: "What is the Tunisian chickpea sandwich wrapped in flatbread called?",
          es: "¿Cómo se llama el sándwich tunecino de garbanzos envuelto en pan plano?",
          de: "Wie heißt das tunesische Kichererbsen-Sandwich in Fladenbrot?",
          nl: "Hoe heet de Tunesische kikkererwten sandwich gewikkeld in platbrood?"
        },
        options: [
          { en: "Fricassé", es: "Fricassé", de: "Fricassé", nl: "Fricassé" },
          { en: "Shawarma", es: "Shawarma", de: "Shawarma", nl: "Shawarma" },
          { en: "Kebab", es: "Kebab", de: "Kebab", nl: "Kebab" },
          { en: "Gyro", es: "Gyro", de: "Gyro", nl: "Gyro" }
        ],
        correct: 0,
        explanation: {
          en: "Fricassé is a deep-fried bread pocket filled with tuna, boiled eggs, chickpeas, harissa, and olive oil. Vegetarian versions use only chickpeas, potatoes, olives, and vegetables.",
          es: "El fricassé es un pan frito relleno de atún, huevos cocidos, garbanzos, harissa y aceite de oliva. Las versiones vegetarianas usan solo garbanzos, papas, aceitunas y verduras.",
          de: "Fricassé ist eine frittierte Brottasche gefüllt mit Thunfisch, gekochten Eiern, Kichererbsen, Harissa und Olivenöl. Vegetarische Versionen verwenden nur Kichererbsen, Kartoffeln, Oliven und Gemüse.",
          nl: "Fricassé is een gefrituurde broodje gevuld met tonijn, gekookte eieren, kikkererwten, harissa en olijfolie. Vegetarische versies gebruiken alleen kikkererwten, aardappels, olijven en groenten."
        }
      },
      {
        question: {
          en: "Which Nepalese/Tibetan dumpling is similar to momo and can be vegetarian?",
          es: "¿Qué albóndiga nepalí/tibetana es similar al momo y puede ser vegetariana?",
          de: "Welcher nepalesische/tibetische Kloß ist ähnlich wie Momo und kann vegetarisch sein?",
          nl: "Welke Nepalese/Tibetaanse dumpling is vergelijkbaar met momo en kan vegetarisch zijn?"
        },
        options: [
          { en: "Momo", es: "Momo", de: "Momo", nl: "Momo" },
          { en: "Ravioli", es: "Ravioli", de: "Ravioli", nl: "Ravioli" },
          { en: "Wonton", es: "Wonton", de: "Wonton", nl: "Wonton" },
          { en: "Potsticker", es: "Potsticker", de: "Potsticker", nl: "Potsticker" }
        ],
        correct: 0,
        explanation: {
          en: "Momo are steamed dumplings filled with vegetables (cabbage, spinach, mushrooms), served with spicy tomato-sesame sauce. They're a staple in Nepali and Tibetan cuisine.",
          es: "Los momo son albóndigas al vapor rellenas de verduras (repollo, espinacas, hongos), servidas con salsa picante de tomate y sésamo. Son un básico en la cocina nepalí y tibetana.",
          de: "Momo sind gedämpfte Klöße gefüllt mit Gemüse (Kohl, Spinat, Pilze), serviert mit scharfer Tomaten-Sesam-Sauce. Sie sind ein Grundnahrungsmittel in der nepalesischen und tibetischen Küche.",
          nl: "Momo zijn gestoomde dumplings gevuld met groenten (kool, spinazie, paddenstoelen), geserveerd met pittige tomaat-sesamsaus. Ze zijn een basisvoedsel in de Nepalese en Tibetaanse keuken."
        }
      },
      {
        question: {
          en: "What is the Hungarian vegetable stew seasoned with paprika called?",
          es: "¿Cómo se llama el guiso húngaro de verduras sazonado con pimentón?",
          de: "Wie heißt der ungarische Gemüseeintopf gewürzt mit Paprika?",
          nl: "Hoe heet de Hongaarse groentenstoofschotel gekruid met paprika?"
        },
        options: [
          { en: "Lecsó", es: "Lecsó", de: "Lecsó", nl: "Lecsó" },
          { en: "Goulash", es: "Goulash", de: "Gulasch", nl: "Goulash" },
          { en: "Pörkölt", es: "Pörkölt", de: "Pörkölt", nl: "Pörkölt" },
          { en: "Paprikash", es: "Paprikash", de: "Paprikasch", nl: "Paprikash" }
        ],
        correct: 0,
        explanation: {
          en: "Lecsó is a Hungarian vegetable stew made with peppers, tomatoes, onions, and paprika. It's often served with bread or used as a sauce for pasta or eggs.",
          es: "El lecsó es un guiso húngaro de verduras hecho con pimientos, tomates, cebollas y pimentón. A menudo se sirve con pan o se usa como salsa para pasta o huevos.",
          de: "Lecsó ist ein ungarischer Gemüseeintopf aus Paprika, Tomaten, Zwiebeln und Paprika. Es wird oft mit Brot serviert oder als Sauce für Nudeln oder Eier verwendet.",
          nl: "Lecsó is een Hongaarse groentenstoofschotel gemaakt met paprika's, tomaten, uien en paprika. Het wordt vaak geserveerd met brood of gebruikt als saus voor pasta of eieren."
        }
      },
      {
        question: {
          en: "Which Belgian dish consists of mashed potatoes and vegetables, often with endives?",
          es: "¿Qué plato belga consiste en puré de papas y verduras, a menudo con endivias?",
          de: "Welches belgische Gericht besteht aus Kartoffelpüree und Gemüse, oft mit Endivien?",
          nl: "Welk Belgisch gerecht bestaat uit aardappelpuree en groenten, vaak met andijvie?"
        },
        options: [
          { en: "Stoemp", es: "Stoemp", de: "Stoemp", nl: "Stoemp" },
          { en: "Stamppot", es: "Stamppot", de: "Stampf", nl: "Stamppot" },
          { en: "Colcannon", es: "Colcannon", de: "Colcannon", nl: "Colcannon" },
          { en: "Bubble and squeak", es: "Bubble and squeak", de: "Bubble and Squeak", nl: "Bubble and squeak" }
        ],
        correct: 0,
        explanation: {
          en: "Stoemp is a traditional Belgian dish of mashed potatoes mixed with vegetables like carrots, leeks, Brussels sprouts, or endives. It's comfort food similar to Dutch stamppot.",
          es: "El stoemp es un plato tradicional belga de puré de papas mezclado con verduras como zanahorias, puerros, coles de Bruselas o endivias. Es comida reconfortante similar al stamppot holandés.",
          de: "Stoemp ist ein traditionelles belgisches Gericht aus Kartoffelpüree gemischt mit Gemüse wie Karotten, Lauch, Rosenkohl oder Endivien. Es ist Wohlfühlessen ähnlich wie niederländischer Stamppot.",
          nl: "Stoemp is een traditioneel Belgisch gerecht van aardappelpuree gemengd met groenten zoals wortelen, prei, spruitjes of andijvie. Het is comfortvoedsel vergelijkbaar met Nederlands stamppot."
        }
      },
      {
        question: {
          en: "What is the South African cornmeal porridge that can be served as a vegetarian staple called?",
          es: "¿Cómo se llama la papilla sudafricana de harina de maíz que puede servirse como básico vegetariano?",
          de: "Wie heißt der südafrikanische Maisbrei, der als vegetarisches Grundnahrungsmittel serviert werden kann?",
          nl: "Hoe heet de Zuid-Afrikaanse maïsmeelpap die als vegetarisch basisvoedsel kan worden geserveerd?"
        },
        options: [
          { en: "Pap", es: "Pap", de: "Pap", nl: "Pap" },
          { en: "Polenta", es: "Polenta", de: "Polenta", nl: "Polenta" },
          { en: "Grits", es: "Grits", de: "Grütze", nl: "Grits" },
          { en: "Fufu", es: "Fufu", de: "Fufu", nl: "Fufu" }
        ],
        correct: 0,
        explanation: {
          en: "Pap (or mealie pap) is a porridge made from milled white maize. It can be served soft or stiff, often accompanied by chakalaka (spicy vegetable relish) or tomato and onion sauce.",
          es: "El pap (o mealie pap) es una papilla hecha de maíz blanco molido. Puede servirse suave o firme, a menudo acompañado de chakalaka (condimento picante de verduras) o salsa de tomate y cebolla.",
          de: "Pap (oder Mealie Pap) ist ein Brei aus gemahlenem weißen Mais. Es kann weich oder fest serviert werden, oft begleitet von Chakalaka (würziger Gemüserelish) oder Tomaten-Zwiebel-Sauce.",
          nl: "Pap (of mealie pap) is een pap gemaakt van gemalen witte maïs. Het kan zacht of stevig worden geserveerd, vaak vergezeld van chakalaka (pittige groenterelish) of tomaat-uiensaus."
        }
      },
      {
        question: {
          en: "Which Georgian dish consists of cheese-filled bread boat?",
          es: "¿Qué plato georgiano consiste en un bote de pan relleno de queso?",
          de: "Welches georgische Gericht besteht aus einem käsegefüllten Brotboot?",
          nl: "Welk Georgisch gerecht bestaat uit een kaasgevulde broodboot?"
        },
        options: [
          { en: "Khachapuri", es: "Khachapuri", de: "Chatschapuri", nl: "Khachapuri" },
          { en: "Pide", es: "Pide", de: "Pide", nl: "Pide" },
          { en: "Lavash", es: "Lavash", de: "Lawasch", nl: "Lavash" },
          { en: "Focaccia", es: "Focaccia", de: "Focaccia", nl: "Focaccia" }
        ],
        correct: 0,
        explanation: {
          en: "Khachapuri is a traditional Georgian cheese bread with various regional styles. The Adjarian version is boat-shaped, filled with cheese, topped with egg and butter - a beloved vegetarian comfort food.",
          es: "El khachapuri es un pan georgiano tradicional de queso con varios estilos regionales. La versión adjariana tiene forma de bote, rellena de queso, coronada con huevo y mantequilla - una querida comida reconfortante vegetariana.",
          de: "Chatschapuri ist ein traditionelles georgisches Käsebrot mit verschiedenen regionalen Stilen. Die adjarische Version ist bootförmig, gefüllt mit Käse, belegt mit Ei und Butter - ein beliebtes vegetarisches Wohlfühlessen.",
          nl: "Khachapuri is een traditioneel Georgisch kaasbrood met verschillende regionale stijlen. De Adjarische versie is bootvormig, gevuld met kaas, bedekt met ei en boter - een geliefd vegetarisch comfortvoedsel."
        }
      },
      {
        question: {
          en: "What is the Colombian corn cake that is often served at breakfast called?",
          es: "¿Cómo se llama la torta de maíz colombiana que a menudo se sirve en el desayuno?",
          de: "Wie heißt der kolumbianische Maiskuchen, der oft zum Frühstück serviert wird?",
          nl: "Hoe heet de Colombiaanse maïskoek die vaak bij het ontbijt wordt geserveerd?"
        },
        options: [
          { en: "Arepa", es: "Arepa", de: "Arepa", nl: "Arepa" },
          { en: "Tortilla", es: "Tortilla", de: "Tortilla", nl: "Tortilla" },
          { en: "Empanada", es: "Empanada", de: "Empanada", nl: "Empanada" },
          { en: "Tamale", es: "Tamal", de: "Tamale", nl: "Tamale" }
        ],
        correct: 0,
        explanation: {
          en: "Arepas are round, flat corn cakes that can be grilled, baked, or fried. They can be split and filled with cheese, avocado, black beans, or vegetables for a vegetarian meal.",
          es: "Las arepas son tortas de maíz redondas y planas que pueden asarse, hornearse o freírse. Pueden abrirse y rellenarse con queso, aguacate, frijoles negros o verduras para una comida vegetariana.",
          de: "Arepas sind runde, flache Maiskuchen, die gegrillt, gebacken oder gebraten werden können. Sie können aufgeschnitten und mit Käse, Avocado, schwarzen Bohnen oder Gemüse für eine vegetarische Mahlzeit gefüllt werden.",
          nl: "Arepas zijn ronde, platte maïskoeken die kunnen worden gegrild, gebakken of gebakken. Ze kunnen worden gesplitst en gevuld met kaas, avocado, zwarte bonen of groenten voor een vegetarische maaltijd."
        }
      },
      {
        question: {
          en: "Which Swedish vegetarian dish consists of mashed yellow peas?",
          es: "¿Qué plato vegetariano sueco consiste en puré de guisantes amarillos?",
          de: "Welches schwedische vegetarische Gericht besteht aus gestampften gelben Erbsen?",
          nl: "Welk Zweeds vegetarisch gerecht bestaat uit gepureerde gele erwten?"
        },
        options: [
          { en: "Ärtsoppa", es: "Ärtsoppa", de: "Ärtsoppa", nl: "Ärtsoppa" },
          { en: "Surströmming", es: "Surströmming", de: "Surströmming", nl: "Surströmming" },
          { en: "Köttbullar", es: "Köttbullar", de: "Köttbullar", nl: "Köttbullar" },
          { en: "Gravlax", es: "Gravlax", de: "Gravlax", nl: "Gravlax" }
        ],
        correct: 0,
        explanation: {
          en: "Ärtsoppa is a traditional Swedish yellow pea soup flavored with onions, thyme, and marjoram. The vegetarian version omits pork and is traditionally served on Thursdays with pancakes for dessert.",
          es: "La ärtsoppa es una sopa sueca tradicional de guisantes amarillos sazonada con cebollas, tomillo y mejorana. La versión vegetariana omite la carne de cerdo y tradicionalmente se sirve los jueves con panqueques de postre.",
          de: "Ärtsoppa ist eine traditionelle schwedische Gelberbsensuppe gewürzt mit Zwiebeln, Thymian und Majoran. Die vegetarische Version lässt Schweinefleisch weg und wird traditionell donnerstags mit Pfannkuchen als Dessert serviert.",
          nl: "Ärtsoppa is een traditionele Zweedse gele erwtensoep op smaak gebracht met uien, tijm en marjolein. De vegetarische versie laat varkensvlees weg en wordt traditioneel op donderdagen geserveerd met pannenkoeken als dessert."
        }
      },
      {
        question: {
          en: "What is the Afghan flatbread often topped with sesame or nigella seeds called?",
          es: "¿Cómo se llama el pan plano afgano a menudo cubierto con semillas de sésamo o nigella?",
          de: "Wie heißt das afghanische Fladenbrot, oft belegt mit Sesam- oder Schwarzkümmelsamen?",
          nl: "Hoe heet het Afghaanse platbrood vaak bedekt met sesam of nigellapitten?"
        },
        options: [
          { en: "Naan", es: "Naan", de: "Naan", nl: "Naan" },
          { en: "Pita", es: "Pita", de: "Pita", nl: "Pita" },
          { en: "Lavash", es: "Lavash", de: "Lawasch", nl: "Lavash" },
          { en: "Injera", es: "Injera", de: "Injera", nl: "Injera" }
        ],
        correct: 0,
        explanation: {
          en: "Afghan naan is a leavened flatbread baked in a tandoor oven, often topped with sesame or nigella seeds. It's typically vegetarian and serves as the foundation for many Afghan meals.",
          es: "El naan afgano es un pan plano leudado horneado en un horno tandoor, a menudo cubierto con semillas de sésamo o nigella. Típicamente es vegetariano y sirve como base para muchas comidas afganas.",
          de: "Afghanisches Naan ist ein gesäuertes Fladenbrot, das im Tandoor-Ofen gebacken wird, oft belegt mit Sesam- oder Schwarzkümmelsamen. Es ist typischerweise vegetarisch und dient als Grundlage für viele afghanische Mahlzeiten.",
          nl: "Afghaanse naan is een gerezen platbrood gebakken in een tandooroven, vaak bedekt met sesam of nigellapitten. Het is typisch vegetarisch en dient als basis voor veel Afghaanse maaltijden."
        }
      },
      {
        question: {
          en: "Which Australian spread made from yeast extract is popular on toast?",
          es: "¿Qué pasta australiana hecha de extracto de levadura es popular en tostadas?",
          de: "Welcher australische Aufstrich aus Hefeextrakt ist beliebt auf Toast?",
          nl: "Welke Australische spread gemaakt van gistextract is populair op toast?"
        },
        options: [
          { en: "Vegemite", es: "Vegemite", de: "Vegemite", nl: "Vegemite" },
          { en: "Marmite", es: "Marmite", de: "Marmite", nl: "Marmite" },
          { en: "Nutella", es: "Nutella", de: "Nutella", nl: "Nutella" },
          { en: "Peanut butter", es: "Mantequilla de maní", de: "Erdnussbutter", nl: "Pindakaas" }
        ],
        correct: 0,
        explanation: {
          en: "Vegemite is a thick, salty, B-vitamin-rich spread made from yeast extract. It's completely vegetarian and is an Australian cultural icon, typically spread thinly on buttered toast.",
          es: "El vegemite es una pasta espesa, salada y rica en vitaminas B hecha de extracto de levadura. Es completamente vegetariano y es un ícono cultural australiano, típicamente untado finamente en tostadas con mantequilla.",
          de: "Vegemite ist ein dicker, salziger, B-Vitamin-reicher Aufstrich aus Hefeextrakt. Er ist vollständig vegetarisch und ein australisches Kultursymbol, typischerweise dünn auf gebuttertem Toast gestrichen.",
          nl: "Vegemite is een dikke, zoute, B-vitamine-rijke spread gemaakt van gistextract. Het is volledig vegetarisch en is een Australisch cultureel icoon, typisch dun gesmeerd op geboter de toast."
        }
      },
      {
        question: {
          en: "What is the Iranian rice dish with crispy bottom layer called tahdig?",
          es: "¿Cómo se llama el plato iraní de arroz con capa inferior crujiente llamado tahdig?",
          de: "Wie heißt das iranische Reisgericht mit knuspriger Bodenschicht namens Tahdig?",
          nl: "Hoe heet het Iraanse rijstgerecht met knapperige onderste laag genaamd tahdig?"
        },
        options: [
          { en: "Persian rice (Chelo)", es: "Arroz persa (Chelo)", de: "Persischer Reis (Chelo)", nl: "Perzische rijst (Chelo)" },
          { en: "Fried rice", es: "Arroz frito", de: "Gebratener Reis", nl: "Gebakken rijst" },
          { en: "Risotto", es: "Risotto", de: "Risotto", nl: "Risotto" },
          { en: "Pilaf", es: "Pilaf", de: "Pilaf", nl: "Pilaf" }
        ],
        correct: 0,
        explanation: {
          en: "Chelo is steamed Persian rice with a prized crispy bottom layer (tahdig) made with oil and yogurt. The vegetarian version is often flavored with saffron and served with herbs and vegetables.",
          es: "El chelo es arroz persa al vapor con una preciada capa inferior crujiente (tahdig) hecha con aceite y yogur. La versión vegetariana a menudo se aromatiza con azafrán y se sirve con hierbas y verduras.",
          de: "Chelo ist gedämpfter persischer Reis mit einer geschätzten knusprigen Bodenschicht (Tahdig) aus Öl und Joghurt. Die vegetarische Version wird oft mit Safran gewürzt und mit Kräutern und Gemüse serviert.",
          nl: "Chelo is gestoomde Perzische rijst met een geprezen knapperige onderste laag (tahdig) gemaakt met olie en yoghurt. De vegetarische versie wordt vaak op smaak gebracht met saffraan en geserveerd met kruiden en groenten."
        }
      },
      {
        question: {
          en: "Which Filipino dish consists of vegetables cooked in coconut milk with shrimp paste (vegetarian version uses mushrooms)?",
          es: "¿Qué plato filipino consiste en verduras cocidas en leche de coco con pasta de camarones (la versión vegetariana usa hongos)?",
          de: "Welches philippinische Gericht besteht aus Gemüse in Kokosmilch gekocht mit Garnelenpaste (vegetarische Version verwendet Pilze)?",
          nl: "Welk Filipijns gerecht bestaat uit groenten gekookt in kokosmelk met garnalenpasta (vegetarische versie gebruikt paddenstoelen)?"
        },
        options: [
          { en: "Laing", es: "Laing", de: "Laing", nl: "Laing" },
          { en: "Adobo", es: "Adobo", de: "Adobo", nl: "Adobo" },
          { en: "Sinigang", es: "Sinigang", de: "Sinigang", nl: "Sinigang" },
          { en: "Kare-kare", es: "Kare-kare", de: "Kare-Kare", nl: "Kare-kare" }
        ],
        correct: 0,
        explanation: {
          en: "Laing is a Bicolano dish of taro leaves cooked in coconut milk with chili peppers and garlic. Vegetarian versions replace shrimp paste with mushrooms or omit it, maintaining the creamy, spicy profile.",
          es: "El laing es un plato bicolano de hojas de taro cocidas en leche de coco con chiles y ajo. Las versiones vegetarianas reemplazan la pasta de camarones con hongos o la omiten, manteniendo el perfil cremoso y picante.",
          de: "Laing ist ein Bicolano-Gericht aus Taro-Blättern in Kokosmilch gekocht mit Chilischoten und Knoblauch. Vegetarische Versionen ersetzen Garnelenpaste durch Pilze oder lassen sie weg, wobei das cremige, würzige Profil erhalten bleibt.",
          nl: "Laing is een Bicolano gerecht van tarobladeren gekookt in kokosmelk met chilipepers en knoflook. Vegetarische versies vervangen garnalenpasta door paddenstoelen of laten het weg, behoudend het romige, pittige profiel."
        }
      },
      {
        question: {
          en: "What is the Portuguese bread soup made with garlic, cilantro, and poached eggs called?",
          es: "¿Cómo se llama la sopa de pan portuguesa hecha con ajo, cilantro y huevos escalfados?",
          de: "Wie heißt die portugiesische Brotsuppe aus Knoblauch, Koriander und pochierten Eiern?",
          nl: "Hoe heet de Portugese broodsoep gemaakt met knoflook, koriander en gepocheerde eieren?"
        },
        options: [
          { en: "Açorda", es: "Açorda", de: "Açorda", nl: "Açorda" },
          { en: "Gazpacho", es: "Gazpacho", de: "Gazpacho", nl: "Gazpacho" },
          { en: "Pappa al pomodoro", es: "Pappa al pomodoro", de: "Pappa al Pomodoro", nl: "Pappa al pomodoro" },
          { en: "Ribollita", es: "Ribollita", de: "Ribollita", nl: "Ribollita" }
        ],
        correct: 0,
        explanation: {
          en: "Açorda is a traditional Portuguese bread soup thickened with bread, flavored with garlic, olive oil, and cilantro, topped with poached eggs. It's a comforting vegetarian dish from the Alentejo region.",
          es: "La açorda es una sopa de pan portuguesa tradicional espesada con pan, aromatizada con ajo, aceite de oliva y cilantro, coronada con huevos escalfados. Es un plato vegetariano reconfortante de la región de Alentejo.",
          de: "Açorda ist eine traditionelle portugiesische Brotsuppe eingedickt mit Brot, gewürzt mit Knoblauch, Olivenöl und Koriander, belegt mit pochierten Eiern. Es ist ein wohltuendes vegetarisches Gericht aus der Region Alentejo.",
          nl: "Açorda is een traditionele Portugese broodsoep verdikt met brood, op smaak gebracht met knoflook, olijfolie en koriander, bedekt met gepocheerde eieren. Het is een troostend vegetarisch gerecht uit de Alentejo regio."
        }
      },
      {
        question: {
          en: "Which New Zealand dessert is made with meringue, cream, and fruit?",
          es: "¿Qué postre neozelandés está hecho con merengue, crema y frutas?",
          de: "Welches neuseeländische Dessert wird aus Baiser, Sahne und Obst gemacht?",
          nl: "Welk Nieuw-Zeelands dessert wordt gemaakt met meringue, room en fruit?"
        },
        options: [
          { en: "Pavlova", es: "Pavlova", de: "Pavlova", nl: "Pavlova" },
          { en: "Eton mess", es: "Eton mess", de: "Eton Mess", nl: "Eton mess" },
          { en: "Trifle", es: "Trifle", de: "Trifle", nl: "Trifle" },
          { en: "Tiramisu", es: "Tiramisú", de: "Tiramisu", nl: "Tiramisu" }
        ],
        correct: 0,
        explanation: {
          en: "Pavlova is a meringue-based dessert with a crispy crust and soft interior, topped with whipped cream and fresh fruit like kiwi, strawberries, or passionfruit. It's a classic vegetarian dessert from New Zealand.",
          es: "La pavlova es un postre a base de merengue con corteza crujiente e interior suave, cubierto con crema batida y frutas frescas como kiwi, fresas o maracuyá. Es un clásico postre vegetariano de Nueva Zelanda.",
          de: "Pavlova ist ein Baiser-Dessert mit knuspriger Kruste und weichem Inneren, belegt mit Schlagsahne und frischen Früchten wie Kiwi, Erdbeeren oder Passionsfrucht. Es ist ein klassisches vegetarisches Dessert aus Neuseeland.",
          nl: "Pavlova is een meringue-gebaseerd dessert met een knapperige korst en zacht interieur, bedekt met slagroom en vers fruit zoals kiwi, aardbeien of passievrucht. Het is een klassiek vegetarisch dessert uit Nieuw-Zeeland."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  }
  return level3;
})();