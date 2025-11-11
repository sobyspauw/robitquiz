// Quiz Level 4: Street Food - Asian Street Food Varieties
(function() {
  "use strict";

  const level4 = {
    name: {
      en: "Asian Street Food Varieties",
      es: "Variedades de Comida Callejera Asiática",
      de: "Asiatische Straßenessen-Varianten",
      nl: "Aziatische Straatvoedsel Variëteiten"
    },
    questions: [
      {
        question: {
          en: "What is 'som tam' and from which country does it originate?",
          es: "¿Qué es 'som tam' y de qué país se origina?",
          de: "Was ist 'Som Tam' und aus welchem Land stammt es?",
          nl: "Wat is 'som tam' en uit welk land komt het?"
        },
        options: [
          { en: "Thai green papaya salad", es: "Ensalada tailandesa de papaya verde", de: "Thailändischer grüner Papayasalat", nl: "Thaise groene papaja salade" },
          { en: "Vietnamese spring roll", es: "Rollo de primavera vietnamita", de: "Vietnamesische Frühlingsrolle", nl: "Vietnamese loempia" },
          { en: "Korean kimchi", es: "Kimchi coreano", de: "Koreanisches Kimchi", nl: "Koreaanse kimchi" },
          { en: "Japanese miso soup", es: "Sopa de miso japonesa", de: "Japanische Miso-Suppe", nl: "Japanse miso soep" }
        ],
        correct: 0,
        explanation: {
          en: "Som tam is a traditional Thai salad made from shredded green papaya, typically seasoned with lime juice, fish sauce, palm sugar, chili, garlic, and peanuts, popular as street food.",
          es: "Som tam es una ensalada tailandesa tradicional hecha de papaya verde rallada, típicamente sazonada con jugo de lima, salsa de pescado, azúcar de palma, chile, ajo y maní, popular como comida callejera.",
          de: "Som Tam ist ein traditioneller thailändischer Salat aus geraspelter grüner Papaya, normalerweise mit Limettensaft, Fischsauce, Palmzucker, Chili, Knoblauch und Erdnüssen gewürzt, beliebt als Straßenessen.",
          nl: "Som tam is een traditionele Thaise salade gemaakt van geraspte groene papaja, meestal gekruid met limoensap, vissaus, palmsuiker, chili, knoflook en pinda's, populair als straatvoedsel."
        }
      },
      {
        question: {
          en: "Which Korean street food consists of rice cakes in spicy sauce?",
          es: "¿Qué comida callejera coreana consiste en pasteles de arroz en salsa picante?",
          de: "Welches koreanische Straßenessen besteht aus Reiskuchen in scharfer Sauce?",
          nl: "Welk Koreaans straatvoedsel bestaat uit rijstcakes in pittige saus?"
        },
        options: [
          { en: "Bulgogi", es: "Bulgogi", de: "Bulgogi", nl: "Bulgogi" },
          { en: "Tteokbokki", es: "Tteokbokki", de: "Tteokbokki", nl: "Tteokbokki" },
          { en: "Bibimbap", es: "Bibimbap", de: "Bibimbap", nl: "Bibimbap" },
          { en: "Japchae", es: "Japchae", de: "Japchae", nl: "Japchae" }
        ],
        correct: 1,
        explanation: {
          en: "Tteokbokki is a popular Korean street food made of soft rice cakes cooked in a sweet and spicy sauce made from gochujang (Korean chili paste), often served with fish cakes and boiled eggs.",
          es: "Tteokbokki es una comida callejera coreana popular hecha de pasteles de arroz suaves cocidos en una salsa dulce y picante hecha de gochujang (pasta de chile coreana), a menudo servida con pasteles de pescado y huevos hervidos.",
          de: "Tteokbokki ist ein beliebtes koreanisches Straßenessen aus weichen Reiskuchen, die in einer süß-scharfen Sauce aus Gochujang (koreanische Chilipaste) gekocht werden, oft mit Fischkuchen und gekochten Eiern serviert.",
          nl: "Tteokbokki is een populair Koreaans straatvoedsel gemaakt van zachte rijstcakes gekookt in een zoete en pittige saus gemaakt van gochujang (Koreaanse chilipasta), vaak geserveerd met viskoejes en gekookte eieren."
        }
      },
      {
        question: {
          en: "What is 'ramen' as it's traditionally served in Japanese street stalls?",
          es: "¿Qué es 'ramen' como se sirve tradicionalmente en puestos callejeros japoneses?",
          de: "Was ist 'Ramen', wie es traditionell in japanischen Straßenständen serviert wird?",
          nl: "Wat is 'ramen' zoals het traditioneel wordt geserveerd in Japanse straatkramen?"
        },
        options: [
          { en: "Instant noodles from packages", es: "Fideos instantáneos de paquetes", de: "Instantnudeln aus Packungen", nl: "Instantnoedels uit pakketjes" },
          { en: "Fresh noodles in rich broth with toppings", es: "Fideos frescos en caldo rico con ingredientes", de: "Frische Nudeln in reichhaltiger Brühe mit Belägen", nl: "Verse noedels in rijke bouillon met toppings" },
          { en: "Cold noodle salad", es: "Ensalada de fideos fríos", de: "Kalter Nudelsalat", nl: "Koude noedelsalade" },
          { en: "Fried rice dish", es: "Plato de arroz frito", de: "Gebratenes Reisgericht", nl: "Gebakken rijstgerecht" }
        ],
        correct: 1,
        explanation: {
          en: "Traditional Japanese ramen is fresh wheat noodles served in a rich, flavorful broth (tonkotsu, miso, or shoyu-based) with various toppings like chashu pork, green onions, and soft-boiled eggs.",
          es: "El ramen japonés tradicional son fideos de trigo frescos servidos en un caldo rico y sabroso (basado en tonkotsu, miso o shoyu) con varios ingredientes como cerdo chashu, cebolletas y huevos pasados por agua.",
          de: "Traditionelles japanisches Ramen sind frische Weizennudeln, die in einer reichhaltigen, geschmackvollen Brühe (Tonkotsu-, Miso- oder Shoyu-basiert) mit verschiedenen Belägen wie Chashu-Schweinefleisch, grünen Zwiebeln und weichgekochten Eiern serviert werden.",
          nl: "Traditionele Japanse ramen zijn verse tarwenoedels geserveerd in een rijke, smaakvolle bouillon (tonkotsu, miso of shoyu-gebaseerd) met verschillende toppings zoals chashu varkensvlees, lente-uitjes en zachtgekookte eieren."
        }
      },
      {
        question: {
          en: "Which Vietnamese street food is a clear soup with rice noodles and herbs?",
          es: "¿Qué comida callejera vietnamita es una sopa clara con fideos de arroz y hierbas?",
          de: "Welches vietnamesische Straßenessen ist eine klare Suppe mit Reisnudeln und Kräutern?",
          nl: "Welk Vietnamees straatvoedsel is een heldere soep met rijstnoedels en kruiden?"
        },
        options: [
          { en: "Pho", es: "Pho", de: "Pho", nl: "Pho" },
          { en: "Bun bo hue", es: "Bun bo hue", de: "Bun Bo Hue", nl: "Bun bo hue" },
          { en: "Mi quang", es: "Mi quang", de: "Mi Quang", nl: "Mi quang" },
          { en: "Cao lau", es: "Cao lau", de: "Cao Lau", nl: "Cao lau" }
        ],
        correct: 0,
        explanation: {
          en: "Pho is Vietnam's iconic street food soup featuring clear, aromatic broth made from beef or chicken bones, served with rice noodles and fresh herbs like cilantro, Thai basil, and bean sprouts.",
          es: "Pho es la sopa icónica de comida callejera de Vietnam que presenta un caldo claro y aromático hecho de huesos de res o pollo, servido con fideos de arroz y hierbas frescas como cilantro, albahaca tailandesa y brotes de soja.",
          de: "Pho ist Vietnams ikonische Straßenessen-Suppe mit klarer, aromatischer Brühe aus Rind- oder Hühnerknochen, serviert mit Reisnudeln und frischen Kräutern wie Koriander, Thai-Basilikum und Bohnensprossen.",
          nl: "Pho is Vietnam's iconische straatvoedsel soep met heldere, aromatische bouillon gemaakt van rund- of kippenbotten, geserveerd met rijstnoedels en verse kruiden zoals koriander, Thaise basilicum en taugé."
        }
      },
      {
        question: {
          en: "What is 'char kway teow' and where is it popular?",
          es: "¿Qué es 'char kway teow' y dónde es popular?",
          de: "Was ist 'Char Kway Teow' und wo ist es beliebt?",
          nl: "Wat is 'char kway teow' en waar is het populair?"
        },
        options: [
          { en: "Malaysian/Singaporean stir-fried rice noodles", es: "Fideos de arroz salteados malasios/singapurenses", de: "Malaysische/singapurische gebratene Reisnudeln", nl: "Maleisische/Singaporese geroerbakte rijstnoedels" },
          { en: "Thai curry dish", es: "Plato de curry tailandés", de: "Thailändisches Curry-Gericht", nl: "Thais curry gerecht" },
          { en: "Indonesian fried rice", es: "Arroz frito indonesio", de: "Indonesischer gebratener Reis", nl: "Indonesische gebakken rijst" },
          { en: "Filipino noodle soup", es: "Sopa de fideos filipina", de: "Philippinische Nudelsuppe", nl: "Filipijnse noedelsoep" }
        ],
        correct: 0,
        explanation: {
          en: "Char kway teow is a popular Malaysian and Singaporean street food consisting of flat rice noodles stir-fried with soy sauce, chili, prawns, cockles, bean sprouts, and Chinese sausage in high heat.",
          es: "Char kway teow es una comida callejera popular malasia y singapurense que consiste en fideos de arroz planos salteados con salsa de soja, chile, langostinos, berberechos, brotes de soja y salchicha china a fuego alto.",
          de: "Char Kway Teow ist ein beliebtes malaysisches und singapurisches Straßenessen aus flachen Reisnudeln, die mit Sojasauce, Chili, Garnelen, Herzmuscheln, Bohnensprossen und chinesischer Wurst bei hoher Hitze angebraten werden.",
          nl: "Char kway teow is een populair Maleisisch en Singaporees straatvoedsel bestaande uit platte rijstnoedels geroerbakt met sojasaus, chili, garnalen, kokkels, taugé en Chinese worst op hoog vuur."
        }
      },
      {
        question: {
          en: "Which Indian street snack consists of fried lentil donuts in yogurt?",
          es: "¿Qué bocadillo callejero indio consiste en rosquillas de lentejas fritas en yogur?",
          de: "Welcher indische Straßensnack besteht aus frittierten Linsen-Donuts in Joghurt?",
          nl: "Welke Indiase straatsnack bestaat uit gefrituurde linzen donuts in yoghurt?"
        },
        options: [
          { en: "Samosa", es: "Samosa", de: "Samosa", nl: "Samosa" },
          { en: "Pakora", es: "Pakora", de: "Pakora", nl: "Pakora" },
          { en: "Dahi vada", es: "Dahi vada", de: "Dahi Vada", nl: "Dahi vada" },
          { en: "Chaat", es: "Chaat", de: "Chaat", nl: "Chaat" }
        ],
        correct: 2,
        explanation: {
          en: "Dahi vada consists of soft lentil donuts (vada) soaked in seasoned yogurt (dahi) and topped with chutneys, spices, and sometimes pomegranate seeds, popular as Indian street food.",
          es: "Dahi vada consiste en rosquillas suaves de lentejas (vada) empapadas en yogur condimentado (dahi) y cubiertas con chutneys, especias y a veces semillas de granada, popular como comida callejera india.",
          de: "Dahi Vada besteht aus weichen Linsen-Donuts (Vada), die in gewürztem Joghurt (Dahi) eingeweicht und mit Chutneys, Gewürzen und manchmal Granatapfelkernen belegt werden, beliebt als indisches Straßenessen.",
          nl: "Dahi vada bestaat uit zachte linzen donuts (vada) geweekt in gekruide yoghurt (dahi) en belegd met chutneys, kruiden en soms granaatappelpitten, populair als Indiaas straatvoedsel."
        }
      },
      {
        question: {
          en: "What is 'xiaolongbao' and how is it traditionally prepared?",
          es: "¿Qué es 'xiaolongbao' y cómo se prepara tradicionalmente?",
          de: "Was ist 'Xiaolongbao' und wie wird es traditionell zubereitet?",
          nl: "Wat is 'xiaolongbao' en hoe wordt het traditioneel bereid?"
        },
        options: [
          { en: "Chinese steamed soup dumplings", es: "Dumplings de sopa al vapor chinos", de: "Chinesische gedämpfte Suppen-Teigtaschen", nl: "Chinese gestoomde soep dumplings" },
          { en: "Japanese sushi rolls", es: "Rollos de sushi japoneses", de: "Japanische Sushi-Rollen", nl: "Japanse sushi rollen" },
          { en: "Korean pancakes", es: "Panqueques coreanos", de: "Koreanische Pfannkuchen", nl: "Koreaanse pannenkoeken" },
          { en: "Thai spring rolls", es: "Rollos de primavera tailandeses", de: "Thailändische Frühlingsrollen", nl: "Thaise loempia's" }
        ],
        correct: 0,
        explanation: {
          en: "Xiaolongbao are Chinese steamed dumplings filled with seasoned pork and a rich, gelatinous broth that becomes liquid when steamed, creating soup-filled dumplings that must be eaten carefully.",
          es: "Xiaolongbao son dumplings chinos al vapor rellenos con cerdo condimentado y un caldo rico y gelatinoso que se vuelve líquido al cocinarse al vapor, creando dumplings llenos de sopa que deben comerse con cuidado.",
          de: "Xiaolongbao sind chinesische gedämpfte Teigtaschen gefüllt mit gewürztem Schweinefleisch und einer reichhaltigen, gelatinösen Brühe, die beim Dämpfen flüssig wird und suppengetränkte Teigtaschen schafft, die vorsichtig gegessen werden müssen.",
          nl: "Xiaolongbao zijn Chinese gestoomde dumplings gevuld met gekruid varkensvlees en een rijke, geleiachtige bouillon die vloeibaar wordt bij het stomen, waardoor soep-gevulde dumplings ontstaan die voorzichtig gegeten moeten worden."
        }
      },
      {
        question: {
          en: "Which Filipino street food is grilled chicken or pork on skewers?",
          es: "¿Qué comida callejera filipina es pollo o cerdo a la parrilla en pinchos?",
          de: "Welches philippinische Straßenessen ist gegrilltes Huhn oder Schweinefleisch am Spieß?",
          nl: "Welk Filipijns straatvoedsel is gegrilde kip of varkensvlees aan spiesjes?"
        },
        options: [
          { en: "Adobo", es: "Adobo", de: "Adobo", nl: "Adobo" },
          { en: "Barbecue (inihaw)", es: "Barbacoa (inihaw)", de: "Barbecue (Inihaw)", nl: "Barbecue (inihaw)" },
          { en: "Lechon", es: "Lechón", de: "Lechon", nl: "Lechon" },
          { en: "Pancit", es: "Pancit", de: "Pancit", nl: "Pancit" }
        ],
        correct: 1,
        explanation: {
          en: "Filipino barbecue (inihaw) features marinated chicken, pork, or beef skewered and grilled over charcoal, often served with a sweet and savory sauce, very popular as street food.",
          es: "La barbacoa filipina (inihaw) presenta pollo, cerdo o res marinados ensartados y asados sobre carbón, a menudo servidos con una salsa dulce y salada, muy popular como comida callejera.",
          de: "Philippinisches Barbecue (Inihaw) besteht aus mariniertem Huhn, Schweinefleisch oder Rindfleisch am Spieß und über Holzkohle gegrillt, oft mit einer süß-salzigen Sauce serviert, sehr beliebt als Straßenessen.",
          nl: "Filipijnse barbecue (inihaw) bestaat uit gemarineerde kip, varkensvlees of rundvlees aan spiesjes en gegrild over houtskool, vaak geserveerd met een zoete en hartige saus, zeer populair als straatvoedsel."
        }
      },
      {
        question: {
          en: "What is 'okonomiyaki' and from which Japanese city does it originate?",
          es: "¿Qué es 'okonomiyaki' y de qué ciudad japonesa se origina?",
          de: "Was ist 'Okonomiyaki' und aus welcher japanischen Stadt stammt es?",
          nl: "Wat is 'okonomiyaki' en uit welke Japanse stad komt het?"
        },
        options: [
          { en: "Savory pancake from Osaka", es: "Panqueque salado de Osaka", de: "Herzhafter Pfannkuchen aus Osaka", nl: "Hartige pannenkoek uit Osaka" },
          { en: "Sushi roll from Tokyo", es: "Rollo de sushi de Tokio", de: "Sushi-Rolle aus Tokyo", nl: "Sushi rol uit Tokyo" },
          { en: "Noodle soup from Kyoto", es: "Sopa de fideos de Kioto", de: "Nudelsuppe aus Kyoto", nl: "Noedelsoep uit Kyoto" },
          { en: "Rice cake from Hiroshima", es: "Pastel de arroz de Hiroshima", de: "Reiskuchen aus Hiroshima", nl: "Rijstcake uit Hiroshima" }
        ],
        correct: 0,
        explanation: {
          en: "Okonomiyaki is a savory pancake from Osaka made with flour batter, cabbage, and various ingredients like pork or seafood, topped with sauce, mayonnaise, and bonito flakes, cooked on a griddle.",
          es: "Okonomiyaki es un panqueque salado de Osaka hecho con masa de harina, repollo y varios ingredientes como cerdo o mariscos, cubierto con salsa, mayonesa y hojuelas de bonito, cocinado en una plancha.",
          de: "Okonomiyaki ist ein herzhafter Pfannkuchen aus Osaka, der aus Mehlteig, Kohl und verschiedenen Zutaten wie Schweinefleisch oder Meeresfrüchten besteht, mit Sauce, Mayonnaise und Bonito-Flocken belegt und auf einer Grillplatte gekocht wird.",
          nl: "Okonomiyaki is een hartige pannenkoek uit Osaka gemaakt met meelbeslag, kool en verschillende ingrediënten zoals varkensvlees of zeevruchten, belegd met saus, mayonaise en bonito vlokken, gekookt op een grillplaat."
        }
      },
      {
        question: {
          en: "Which Indonesian street food consists of rice cakes with peanut sauce?",
          es: "¿Qué comida callejera indonesia consiste en pasteles de arroz con salsa de maní?",
          de: "Welches indonesische Straßenessen besteht aus Reiskuchen mit Erdnusssauce?",
          nl: "Welk Indonesisch straatvoedsel bestaat uit rijstkoekjes met pindasaus?"
        },
        options: [
          { en: "Nasi goreng", es: "Nasi goreng", de: "Nasi Goreng", nl: "Nasi goreng" },
          { en: "Ketupat with satay sauce", es: "Ketupat con salsa satay", de: "Ketupat mit Satay-Sauce", nl: "Ketupat met saté saus" },
          { en: "Rendang", es: "Rendang", de: "Rendang", nl: "Rendang" },
          { en: "Gado-gado", es: "Gado-gado", de: "Gado-Gado", nl: "Gado-gado" }
        ],
        correct: 1,
        explanation: {
          en: "Ketupat are Indonesian rice cakes wrapped in woven palm leaves and boiled, traditionally served with satay and rich peanut sauce as popular street food, especially during festivals.",
          es: "Ketupat son pasteles de arroz indonesios envueltos en hojas de palma tejidas y hervidos, tradicionalmente servidos con satay y rica salsa de maní como comida callejera popular, especialmente durante festivales.",
          de: "Ketupat sind indonesische Reiskuchen, die in gewebte Palmblätter eingewickelt und gekocht werden, traditionell mit Satay und reichhaltiger Erdnusssauce als beliebtes Straßenessen serviert, besonders während Festivals.",
          nl: "Ketupat zijn Indonesische rijstkoekjes gewikkeld in gevlochten palmbladeren en gekookt, traditioneel geserveerd met saté en rijke pindasaus als populair straatvoedsel, vooral tijdens festivals."
        }
      },
      {
        question: {
          en: "What is 'momo' and in which Asian regions is it popular?",
          es: "¿Qué es 'momo' y en qué regiones asiáticas es popular?",
          de: "Was ist 'Momo' und in welchen asiatischen Regionen ist es beliebt?",
          nl: "Wat is 'momo' en in welke Aziatische regio's is het populair?"
        },
        options: [
          { en: "Tibetan/Nepalese steamed dumplings", es: "Dumplings al vapor tibetanos/nepaleses", de: "Tibetische/nepalesische gedämpfte Teigtaschen", nl: "Tibetaanse/Nepalese gestoomde dumplings" },
          { en: "Japanese rice balls", es: "Bolas de arroz japonesas", de: "Japanische Reisbällchen", nl: "Japanse rijstballen" },
          { en: "Korean fermented vegetables", es: "Verduras fermentadas coreanas", de: "Koreanisches fermentiertes Gemüse", nl: "Koreaanse gefermenteerde groenten" },
          { en: "Thai coconut dessert", es: "Postre de coco tailandés", de: "Thailändisches Kokosnuss-Dessert", nl: "Thais kokos dessert" }
        ],
        correct: 0,
        explanation: {
          en: "Momo are traditional Tibetan and Nepalese steamed dumplings filled with meat or vegetables, popular street food in Tibet, Nepal, Bhutan, and northern Indian regions like Sikkim and Darjeeling.",
          es: "Momo son dumplings tradicionales tibetanos y nepaleses al vapor rellenos de carne o verduras, comida callejera popular en Tíbet, Nepal, Bután y regiones del norte de India como Sikkim y Darjeeling.",
          de: "Momo sind traditionelle tibetische und nepalesische gedämpfte Teigtaschen gefüllt mit Fleisch oder Gemüse, beliebtes Straßenessen in Tibet, Nepal, Bhutan und nordindischen Regionen wie Sikkim und Darjeeling.",
          nl: "Momo zijn traditionele Tibetaanse en Nepalese gestoomde dumplings gevuld met vlees of groenten, populair straatvoedsel in Tibet, Nepal, Bhutan en Noord-Indiase regio's zoals Sikkim en Darjeeling."
        }
      },
      {
        question: {
          en: "Which Thai street dessert is made from coconut milk and rice flour?",
          es: "¿Qué postre callejero tailandés está hecho de leche de coco y harina de arroz?",
          de: "Welches thailändische Straßendessert wird aus Kokosmilch und Reismehl hergestellt?",
          nl: "Welk Thais straatdessert wordt gemaakt van kokosmelk en rijstmeel?"
        },
        options: [
          { en: "Mango sticky rice", es: "Arroz pegajoso con mango", de: "Mango-Klebreis", nl: "Mango kleefrijst" },
          { en: "Khanom krok (coconut pancakes)", es: "Khanom krok (panqueques de coco)", de: "Khanom Krok (Kokosnuss-Pfannkuchen)", nl: "Khanom krok (kokos pannenkoekjes)" },
          { en: "Som tam", es: "Som tam", de: "Som Tam", nl: "Som tam" },
          { en: "Pad thai", es: "Pad thai", de: "Pad Thai", nl: "Pad thai" }
        ],
        correct: 1,
        explanation: {
          en: "Khanom krok are traditional Thai coconut pancakes made from rice flour and coconut milk, cooked in special cast iron pans with round molds, creating crispy bottoms and creamy centers.",
          es: "Khanom krok son panqueques tradicionales tailandeses de coco hechos de harina de arroz y leche de coco, cocinados en sartenes especiales de hierro fundido con moldes redondos, creando fondos crujientes y centros cremosos.",
          de: "Khanom Krok sind traditionelle thailändische Kokosnuss-Pfannkuchen aus Reismehl und Kokosmilch, gekocht in speziellen gusseisernen Pfannen mit runden Formen, die knusprige Böden und cremige Zentren schaffen.",
          nl: "Khanom krok zijn traditionele Thaise kokos pannenkoekjes gemaakt van rijstmeel en kokosmelk, gekookt in speciale gietijzeren pannen met ronde vormen, waardoor knapperige bodems en romige centers ontstaan."
        }
      },
      {
        question: {
          en: "What is 'bánh xèo' and how is it typically served?",
          es: "¿Qué es 'bánh xèo' y cómo se sirve típicamente?",
          de: "Was ist 'Bánh Xèo' und wie wird es normalerweise serviert?",
          nl: "Wat is 'bánh xèo' en hoe wordt het meestal geserveerd?"
        },
        options: [
          { en: "Vietnamese crepe served with lettuce and herbs for wrapping", es: "Crepe vietnamita servido con lechuga y hierbas para envolver", de: "Vietnamesischer Crêpe serviert mit Salat und Kräutern zum Einwickeln", nl: "Vietnamese crêpe geserveerd met sla en kruiden om in te wikkelen" },
          { en: "Chinese dumpling soup", es: "Sopa de dumplings china", de: "Chinesische Teigtaschen-Suppe", nl: "Chinese dumpling soep" },
          { en: "Japanese grilled fish", es: "Pescado a la parrilla japonés", de: "Japanischer gegrillter Fisch", nl: "Japanse gegrilde vis" },
          { en: "Korean rice cake", es: "Pastel de arroz coreano", de: "Koreanischer Reiskuchen", nl: "Koreaanse rijstcake" }
        ],
        correct: 0,
        explanation: {
          en: "Bánh xèo is a Vietnamese crepe made from rice flour and coconut milk with turmeric, filled with shrimp, pork, and bean sprouts, served with fresh lettuce and herbs for diners to wrap and eat.",
          es: "Bánh xèo es un crepe vietnamita hecho de harina de arroz y leche de coco con cúrcuma, relleno con camarones, cerdo y brotes de soja, servido con lechuga fresca y hierbas para que los comensales envuelvan y coman.",
          de: "Bánh Xèo ist ein vietnamesischer Crêpe aus Reismehl und Kokosmilch mit Kurkuma, gefüllt mit Garnelen, Schweinefleisch und Bohnensprossen, serviert mit frischem Salat und Kräutern zum Einwickeln und Essen.",
          nl: "Bánh xèo is een Vietnamese crêpe gemaakt van rijstmeel en kokosmelk met kurkuma, gevuld met garnalen, varkensvlees en taugé, geserveerd met verse sla en kruiden voor gasten om in te wikkelen en te eten."
        }
      },
      {
        question: {
          en: "Which Chinese street snack is made from fermented tofu?",
          es: "¿Qué bocadillo callejero chino está hecho de tofu fermentado?",
          de: "Welcher chinesische Straßensnack wird aus fermentiertem Tofu hergestellt?",
          nl: "Welke Chinese straatsnack wordt gemaakt van gefermenteerde tofu?"
        },
        options: [
          { en: "Spring rolls", es: "Rollos de primavera", de: "Frühlingsrollen", nl: "Loempia's" },
          { en: "Stinky tofu (chou doufu)", es: "Tofu apestoso (chou doufu)", de: "Stinkender Tofu (Chou Doufu)", nl: "Stinkende tofu (chou doufu)" },
          { en: "Wontons", es: "Wontons", de: "Wontons", nl: "Wontons" },
          { en: "Steamed buns", es: "Panecillos al vapor", de: "Gedämpfte Brötchen", nl: "Gestoomde broodjes" }
        ],
        correct: 1,
        explanation: {
          en: "Stinky tofu (chou doufu) is fermented tofu with a strong odor but distinctive flavor, commonly deep-fried and served with spicy or sweet sauces as popular Chinese street food.",
          es: "El tofu apestoso (chou doufu) es tofu fermentado con un olor fuerte pero sabor distintivo, comúnmente frito y servido con salsas picantes o dulces como comida callejera china popular.",
          de: "Stinkender Tofu (Chou Doufu) ist fermentierter Tofu mit einem starken Geruch aber unverwechselbarem Geschmack, häufig frittiert und mit scharfen oder süßen Saucen als beliebtes chinesisches Straßenessen serviert.",
          nl: "Stinkende tofu (chou doufu) is gefermenteerde tofu met een sterke geur maar onderscheidende smaak, vaak diep gefrituurd en geserveerd met pittige of zoete sauzen als populair Chinees straatvoedsel."
        }
      },
      {
        question: {
          en: "What is 'laksa' and which countries commonly serve it as street food?",
          es: "¿Qué es 'laksa' y qué países lo sirven comúnmente como comida callejera?",
          de: "Was ist 'Laksa' und welche Länder servieren es häufig als Straßenessen?",
          nl: "Wat is 'laksa' en welke landen serveren het vaak als straatvoedsel?"
        },
        options: [
          { en: "Spicy noodle soup from Malaysia and Singapore", es: "Sopa de fideos picante de Malasia y Singapur", de: "Scharfe Nudelsuppe aus Malaysia und Singapur", nl: "Pittige noedelsoep uit Maleisië en Singapore" },
          { en: "Japanese sushi type", es: "Tipo de sushi japonés", de: "Japanische Sushi-Art", nl: "Japanse sushi soort" },
          { en: "Korean grilled meat", es: "Carne a la parrilla coreana", de: "Koreanisches gegrilltes Fleisch", nl: "Koreaans gegrild vlees" },
          { en: "Indian curry bread", es: "Pan de curry indio", de: "Indisches Curry-Brot", nl: "Indiaas curry brood" }
        ],
        correct: 0,
        explanation: {
          en: "Laksa is a spicy noodle soup popular in Malaysia and Singapore, made with thick rice noodles or rice vermicelli in rich, spicy broth with coconut milk, often containing shrimp, fish cakes, or chicken.",
          es: "Laksa es una sopa de fideos picante popular en Malasia y Singapur, hecha con fideos gruesos de arroz o vermicelli de arroz en caldo rico y picante con leche de coco, a menudo contiene camarones, pasteles de pescado o pollo.",
          de: "Laksa ist eine scharfe Nudelsuppe, die in Malaysia und Singapur beliebt ist, zubereitet mit dicken Reisnudeln oder Reisvermicelli in reichhaltiger, scharfer Brühe mit Kokosmilch, oft mit Garnelen, Fischkuchen oder Huhn.",
          nl: "Laksa is een pittige noedelsoep populair in Maleisië en Singapore, gemaakt met dikke rijstnoedels of rijstvermicelli in rijke, pittige bouillon met kokosmelk, vaak met garnalen, viskoejes of kip."
        }
      },
      {
        question: {
          en: "Which Japanese street food consists of grilled chicken skewers?",
          es: "¿Qué comida callejera japonesa consiste en brochetas de pollo a la parrilla?",
          de: "Welches japanische Straßenessen besteht aus gegrillten Hühner-Spießen?",
          nl: "Welk Japans straatvoedsel bestaat uit gegrilde kip spiesjes?"
        },
        options: [
          { en: "Sushi", es: "Sushi", de: "Sushi", nl: "Sushi" },
          { en: "Yakitori", es: "Yakitori", de: "Yakitori", nl: "Yakitori" },
          { en: "Tempura", es: "Tempura", de: "Tempura", nl: "Tempura" },
          { en: "Onigiri", es: "Onigiri", de: "Onigiri", nl: "Onigiri" }
        ],
        correct: 1,
        explanation: {
          en: "Yakitori are grilled chicken skewers, a popular Japanese street food where different parts of the chicken are seasoned with tare sauce or salt and grilled over charcoal, served at street stalls and festivals.",
          es: "Yakitori son brochetas de pollo a la parrilla, una comida callejera japonesa popular donde diferentes partes del pollo se sazonan con salsa tare o sal y se asan sobre carbón, servidas en puestos callejeros y festivales.",
          de: "Yakitori sind gegrillte Hühner-Spieße, ein beliebtes japanisches Straßenessen, bei dem verschiedene Teile des Huhns mit Tare-Sauce oder Salz gewürzt und über Holzkohle gegrillt werden, serviert an Straßenständen und Festivals.",
          nl: "Yakitori zijn gegrilde kip spiesjes, een populair Japans straatvoedsel waarbij verschillende delen van de kip worden gekruid met tare saus of zout en gegrild over houtskool, geserveerd bij straatkramen en festivals."
        }
      },
      {
        question: {
          en: "What distinguishes Sichuan street food from other Chinese regional cuisines?",
          es: "¿Qué distingue la comida callejera de Sichuan de otras cocinas regionales chinas?",
          de: "Was unterscheidet Sichuan-Straßenessen von anderen chinesischen Regionalküchen?",
          nl: "Wat onderscheidt Sichuan straatvoedsel van andere Chinese regionale keukens?"
        },
        options: [
          { en: "Mild and sweet flavors", es: "Sabores suaves y dulces", de: "Milde und süße Geschmäcker", nl: "Milde en zoete smaken" },
          { en: "Intense spiciness and numbing Sichuan peppercorns", es: "Picante intenso y granos de pimienta de Sichuan entumecedores", de: "Intensive Schärfe und betäubende Sichuan-Pfefferkörner", nl: "Intense scherpte en verdovende Sichuan peperbollen" },
          { en: "Only cold dishes", es: "Solo platos fríos", de: "Nur kalte Gerichte", nl: "Alleen koude gerechten" },
          { en: "No use of spices", es: "No usa especias", de: "Keine Gewürze", nl: "Geen gebruik van kruiden" }
        ],
        correct: 1,
        explanation: {
          en: "Sichuan street food is characterized by its bold, spicy flavors and the unique numbing sensation from Sichuan peppercorns (málà), creating a distinctive taste profile different from other Chinese regional cuisines.",
          es: "La comida callejera de Sichuan se caracteriza por sus sabores audaces y picantes y la sensación única de entumecimiento de los granos de pimienta de Sichuan (málà), creando un perfil de sabor distintivo diferente de otras cocinas regionales chinas.",
          de: "Sichuan-Straßenessen zeichnet sich durch seine kühnen, scharfen Geschmäcker und das einzigartige betäubende Gefühl von Sichuan-Pfefferkörnern (málà) aus, was ein unverwechselbares Geschmacksprofil schafft, das sich von anderen chinesischen Regionalküchen unterscheidet.",
          nl: "Sichuan straatvoedsel wordt gekenmerkt door zijn gedurfde, pittige smaken en het unieke verdovende gevoel van Sichuan peperbollen (málà), wat een onderscheidend smaakprofiel creëert dat verschilt van andere Chinese regionale keukens."
        }
      },
      {
        question: {
          en: "Which Asian street food culture emphasizes communal eating and sharing small plates?",
          es: "¿Qué cultura de comida callejera asiática enfatiza la comida comunal y compartir platos pequeños?",
          de: "Welche asiatische Straßenessen-Kultur betont gemeinschaftliches Essen und das Teilen kleiner Teller?",
          nl: "Welke Aziatische straatvoedselcultuur benadrukt gemeenschappelijk eten en het delen van kleine bordjes?"
        },
        options: [
          { en: "Only Japanese culture", es: "Solo cultura japonesa", de: "Nur japanische Kultur", nl: "Alleen Japanse cultuur" },
          { en: "Multiple Asian cultures including Chinese dim sum, Korean banchan, and Thai sharing style", es: "Múltiples culturas asiáticas incluyendo dim sum chino, banchan coreano y estilo de compartir tailandés", de: "Mehrere asiatische Kulturen einschließlich chinesischem Dim Sum, koreanischem Banchan und thailändischem Sharing-Stil", nl: "Meerdere Aziatische culturen inclusief Chinese dim sum, Koreaanse banchan en Thaise deel stijl" },
          { en: "Only individual portion cultures", es: "Solo culturas de porciones individuales", de: "Nur Kulturen mit Einzelportionen", nl: "Alleen individuele portie culturen" },
          { en: "Western-style dining only", es: "Solo estilo de cena occidental", de: "Nur westlicher Essensstil", nl: "Alleen westerse eetstijl" }
        ],
        correct: 1,
        explanation: {
          en: "Many Asian street food cultures emphasize communal eating and sharing, including Chinese dim sum culture, Korean banchan (side dishes), Thai family-style sharing, and various other Asian traditions of collective dining experiences.",
          es: "Muchas culturas de comida callejera asiática enfatizan la comida comunal y el compartir, incluyendo la cultura china del dim sum, banchan coreano (platos acompañantes), estilo familiar tailandés de compartir, y varias otras tradiciones asiáticas de experiencias de comida colectiva.",
          de: "Viele asiatische Straßenessen-Kulturen betonen gemeinschaftliches Essen und Teilen, einschließlich der chinesischen Dim-Sum-Kultur, koreanischem Banchan (Beilagen), thailändischem Familienstil-Teilen und verschiedenen anderen asiatischen Traditionen kollektiver Essenserfahrungen.",
          nl: "Veel Aziatische straatvoedselculturen benadrukken gemeenschappelijk eten en delen, inclusief Chinese dim sum cultuur, Koreaanse banchan (bijgerechten), Thaise familie-stijl delen, en verschillende andere Aziatische tradities van collectieve eetervaring."
        }
      },
      {
        question: {
          en: "What is 'som tam' and from which country does it originate?",
          es: "¿Qué es 'som tam' y de qué país se origina?",
          de: "Was ist 'Som Tam' und aus welchem Land stammt es?",
          nl: "Wat is 'som tam' en uit welk land komt het?"
        },
        options: [
          { en: "Thai green papaya salad", es: "Ensalada tailandesa de papaya verde", de: "Thailändischer grüner Papayasalat", nl: "Thaise groene papaja salade" },
          { en: "Vietnamese spring roll", es: "Rollo de primavera vietnamita", de: "Vietnamesische Frühlingsrolle", nl: "Vietnamese loempia" },
          { en: "Korean kimchi", es: "Kimchi coreano", de: "Koreanisches Kimchi", nl: "Koreaanse kimchi" },
          { en: "Japanese miso soup", es: "Sopa de miso japonesa", de: "Japanische Miso-Suppe", nl: "Japanse miso soep" }
        ],
        correct: 0,
        explanation: {
          en: "Som tam is a traditional Thai salad made from shredded green papaya, typically seasoned with lime juice, fish sauce, palm sugar, chili, garlic, and peanuts, popular as street food.",
          es: "Som tam es una ensalada tailandesa tradicional hecha de papaya verde rallada, típicamente sazonada con jugo de lima, salsa de pescado, azúcar de palma, chile, ajo y maní, popular como comida callejera.",
          de: "Som Tam ist ein traditioneller thailändischer Salat aus geraspelter grüner Papaya, normalerweise mit Limettensaft, Fischsauce, Palmzucker, Chili, Knoblauch und Erdnüssen gewürzt, beliebt als Straßenessen.",
          nl: "Som tam is een traditionele Thaise salade gemaakt van geraspte groene papaja, meestal gekruid met limoensap, vissaus, palmsuiker, chili, knoflook en pinda's, populair als straatvoedsel."
        }
      },
      {
        question: {
          en: "Which Korean street food consists of rice cakes in spicy sauce?",
          es: "¿Qué comida callejera coreana consiste en pasteles de arroz en salsa picante?",
          de: "Welches koreanische Straßenessen besteht aus Reiskuchen in scharfer Sauce?",
          nl: "Welk Koreaans straatvoedsel bestaat uit rijstcakes in pittige saus?"
        },
        options: [
          { en: "Bulgogi", es: "Bulgogi", de: "Bulgogi", nl: "Bulgogi" },
          { en: "Tteokbokki", es: "Tteokbokki", de: "Tteokbokki", nl: "Tteokbokki" },
          { en: "Bibimbap", es: "Bibimbap", de: "Bibimbap", nl: "Bibimbap" },
          { en: "Japchae", es: "Japchae", de: "Japchae", nl: "Japchae" }
        ],
        correct: 1,
        explanation: {
          en: "Tteokbokki is a popular Korean street food made of soft rice cakes cooked in a sweet and spicy sauce made from gochujang (Korean chili paste), often served with fish cakes and boiled eggs.",
          es: "Tteokbokki es una comida callejera coreana popular hecha de pasteles de arroz suaves cocidos en una salsa dulce y picante hecha de gochujang (pasta de chile coreana), a menudo servida con pasteles de pescado y huevos hervidos.",
          de: "Tteokbokki ist ein beliebtes koreanisches Straßenessen aus weichen Reiskuchen, die in einer süß-scharfen Sauce aus Gochujang (koreanische Chilipaste) gekocht werden, oft mit Fischkuchen und gekochten Eiern serviert.",
          nl: "Tteokbokki is een populair Koreaans straatvoedsel gemaakt van zachte rijstcakes gekookt in een zoete en pittige saus gemaakt van gochujang (Koreaanse chilipasta), vaak geserveerd met viskoejes en gekookte eieren."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  }

  return level4;
})();