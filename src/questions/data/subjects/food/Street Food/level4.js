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
          en: "What is 'bao' and in which Asian cuisine is it most popular?",
          es: "¿Qué es 'bao' y en qué cocina asiática es más popular?",
          de: "Was ist 'Bao' und in welcher asiatischen Küche ist es am beliebtesten?",
          nl: "Wat is 'bao' en in welke Aziatische keuken is het het populairst?"
        },
        options: [
          { en: "Chinese steamed bun with various fillings", es: "Panecillo chino al vapor con varios rellenos", de: "Chinesisches gedämpftes Brötchen mit verschiedenen Füllungen", nl: "Chinees gestoomd broodje met verschillende vullingen" },
          { en: "Japanese rice cracker", es: "Galleta de arroz japonesa", de: "Japanischer Reiscracker", nl: "Japanse rijstcracker" },
          { en: "Thai coconut dessert", es: "Postre de coco tailandés", de: "Thailändisches Kokosnuss-Dessert", nl: "Thais kokos dessert" },
          { en: "Vietnamese fried pastry", es: "Pastelería frita vietnamita", de: "Vietnamesisches frittiertes Gebäck", nl: "Vietnamese gefrituurde gebak" }
        ],
        correct: 0,
        explanation: {
          en: "Bao are soft, fluffy Chinese steamed buns that can be filled with various ingredients like pork, vegetables, or sweet fillings, popular street food across China and Taiwan.",
          es: "Bao son panecillos chinos al vapor suaves y esponjosos que pueden rellenarse con varios ingredientes como cerdo, verduras o rellenos dulces, comida callejera popular en China y Taiwán.",
          de: "Bao sind weiche, fluffige chinesische gedämpfte Brötchen, die mit verschiedenen Zutaten wie Schweinefleisch, Gemüse oder süßen Füllungen gefüllt werden können, beliebtes Straßenessen in ganz China und Taiwan.",
          nl: "Bao zijn zachte, luchtige Chinese gestoomde broodjes die gevuld kunnen worden met verschillende ingrediënten zoals varkensvlees, groenten of zoete vullingen, populair straatvoedsel in China en Taiwan."
        }
      },
      {
        question: {
          en: "What is 'pad thai' and what are its main ingredients?",
          es: "¿Qué es 'pad thai' y cuáles son sus ingredientes principales?",
          de: "Was ist 'Pad Thai' und was sind seine Hauptzutaten?",
          nl: "Wat is 'pad thai' en wat zijn de belangrijkste ingrediënten?"
        },
        options: [
          { en: "Thai stir-fried rice noodles with tamarind, eggs, and peanuts", es: "Fideos de arroz tailandeses salteados con tamarindo, huevos y maní", de: "Thailändische gebratene Reisnudeln mit Tamarinde, Eiern und Erdnüssen", nl: "Thaise geroerbakte rijstnoedels met tamarinde, eieren en pinda's" },
          { en: "Japanese ramen soup", es: "Sopa de ramen japonesa", de: "Japanische Ramen-Suppe", nl: "Japanse ramen soep" },
          { en: "Korean kimchi fried rice", es: "Arroz frito con kimchi coreano", de: "Koreanischer Kimchi-gebratener Reis", nl: "Koreaanse kimchi gebakken rijst" },
          { en: "Chinese spring rolls", es: "Rollos de primavera chinos", de: "Chinesische Frühlingsrollen", nl: "Chinese loempia's" }
        ],
        correct: 0,
        explanation: {
          en: "Pad Thai is Thailand's signature stir-fried noodle dish made with rice noodles, tamarind paste, fish sauce, eggs, tofu or shrimp, bean sprouts, and topped with crushed peanuts and lime.",
          es: "Pad Thai es el plato emblemático de fideos salteados de Tailandia hecho con fideos de arroz, pasta de tamarindo, salsa de pescado, huevos, tofu o camarones, brotes de soja, y cubierto con maní triturado y lima.",
          de: "Pad Thai ist Thailands charakteristisches gebratenes Nudelgericht aus Reisnudeln, Tamarindenpaste, Fischsauce, Eiern, Tofu oder Garnelen, Bohnensprossen und belegt mit zerkleinerten Erdnüssen und Limette.",
          nl: "Pad Thai is Thailand's kenmerkende geroerbakte noedelgerecht gemaakt met rijstnoedels, tamarindepasta, vissaus, eieren, tofu of garnalen, taugé, en belegd met geplette pinda's en limoen."
        }
      },
      {
        question: {
          en: "What is 'satay' and how is it traditionally prepared?",
          es: "¿Qué es 'satay' y cómo se prepara tradicionalmente?",
          de: "Was ist 'Satay' und wie wird es traditionell zubereitet?",
          nl: "Wat is 'satay' en hoe wordt het traditioneel bereid?"
        },
        options: [
          { en: "Grilled skewered meat served with peanut sauce", es: "Carne ensartada a la parrilla servida con salsa de maní", de: "Gegrilltes Fleisch am Spieß serviert mit Erdnusssauce", nl: "Gegrild vlees aan spiesjes geserveerd met pindasaus" },
          { en: "Steamed dumplings", es: "Dumplings al vapor", de: "Gedämpfte Teigtaschen", nl: "Gestoomde dumplings" },
          { en: "Fried spring rolls", es: "Rollos de primavera fritos", de: "Frittierte Frühlingsrollen", nl: "Gefrituurde loempia's" },
          { en: "Noodle soup", es: "Sopa de fideos", de: "Nudelsuppe", nl: "Noedelsoep" }
        ],
        correct: 0,
        explanation: {
          en: "Satay is marinated meat (chicken, beef, or lamb) grilled on bamboo skewers over charcoal, served with peanut sauce, popular street food in Indonesia, Malaysia, Singapore, and Thailand.",
          es: "Satay es carne marinada (pollo, res o cordero) asada en brochetas de bambú sobre carbón, servida con salsa de maní, comida callejera popular en Indonesia, Malasia, Singapur y Tailandia.",
          de: "Satay ist mariniertes Fleisch (Huhn, Rind oder Lamm), das auf Bambusspießen über Holzkohle gegrillt und mit Erdnusssauce serviert wird, beliebtes Straßenessen in Indonesien, Malaysia, Singapur und Thailand.",
          nl: "Satay is gemarineerd vlees (kip, rund of lam) gegrild op bamboe spiesjes boven houtskool, geserveerd met pindasaus, populair straatvoedsel in Indonesië, Maleisië, Singapore en Thailand."
        }
      },
      {
        question: {
          en: "What is 'takoyaki' and what is its main filling?",
          es: "¿Qué es 'takoyaki' y cuál es su relleno principal?",
          de: "Was ist 'Takoyaki' und was ist seine Hauptfüllung?",
          nl: "Wat is 'takoyaki' en wat is de belangrijkste vulling?"
        },
        options: [
          { en: "Japanese octopus balls made in special molded pans", es: "Bolas de pulpo japonesas hechas en sartenes moldeadas especiales", de: "Japanische Oktopus-Bällchen in speziellen geformten Pfannen gemacht", nl: "Japanse octopus balletjes gemaakt in speciale gevormde pannen" },
          { en: "Korean rice cakes", es: "Pasteles de arroz coreanos", de: "Koreanische Reiskuchen", nl: "Koreaanse rijstcakes" },
          { en: "Chinese dumplings", es: "Dumplings chinos", de: "Chinesische Teigtaschen", nl: "Chinese dumplings" },
          { en: "Thai fish cakes", es: "Pasteles de pescado tailandeses", de: "Thailändische Fischkuchen", nl: "Thaise viskoejes" }
        ],
        correct: 0,
        explanation: {
          en: "Takoyaki are popular Japanese street food balls made from wheat flour batter filled with diced octopus, cooked in special molded pans, topped with takoyaki sauce, mayonnaise, and bonito flakes.",
          es: "Takoyaki son bolas populares de comida callejera japonesa hechas de masa de harina de trigo rellenas con pulpo en cubitos, cocinadas en sartenes moldeadas especiales, cubiertas con salsa takoyaki, mayonesa y hojuelas de bonito.",
          de: "Takoyaki sind beliebte japanische Straßenessen-Bällchen aus Weizenmehlteig gefüllt mit gewürfeltem Oktopus, gekocht in speziellen geformten Pfannen, belegt mit Takoyaki-Sauce, Mayonnaise und Bonito-Flocken.",
          nl: "Takoyaki zijn populaire Japanse straatvoedsel balletjes gemaakt van tarwemeelbeslag gevuld met blokjes octopus, gekookt in speciale gevormde pannen, belegd met takoyaki saus, mayonaise en bonito vlokken."
        }
      },
      {
        question: {
          en: "What is 'banh mi' and what makes it distinctive?",
          es: "¿Qué es 'banh mi' y qué lo hace distintivo?",
          de: "Was ist 'Banh Mi' und was macht es unverwechselbar?",
          nl: "Wat is 'banh mi' en wat maakt het onderscheidend?"
        },
        options: [
          { en: "Vietnamese baguette sandwich with fusion fillings", es: "Sándwich de baguette vietnamita con rellenos de fusión", de: "Vietnamesisches Baguette-Sandwich mit Fusion-Füllungen", nl: "Vietnamese baguette sandwich met fusie vullingen" },
          { en: "Japanese rice ball", es: "Bola de arroz japonesa", de: "Japanischer Reisball", nl: "Japanse rijstbal" },
          { en: "Thai curry dish", es: "Plato de curry tailandés", de: "Thailändisches Curry-Gericht", nl: "Thais curry gerecht" },
          { en: "Chinese steamed bun", es: "Panecillo chino al vapor", de: "Chinesisches gedämpftes Brötchen", nl: "Chinees gestoomd broodje" }
        ],
        correct: 0,
        explanation: {
          en: "Banh mi is a Vietnamese sandwich on a crispy French baguette filled with Vietnamese ingredients like pate, pickled vegetables, cilantro, chili, and various meats, showcasing French-Vietnamese culinary fusion.",
          es: "Banh mi es un sándwich vietnamita en una baguette francesa crujiente rellena con ingredientes vietnamitas como paté, verduras encurtidas, cilantro, chile y varias carnes, mostrando la fusión culinaria franco-vietnamita.",
          de: "Banh Mi ist ein vietnamesisches Sandwich auf einem knusprigen französischen Baguette gefüllt mit vietnamesischen Zutaten wie Pastete, eingelegtem Gemüse, Koriander, Chili und verschiedenen Fleischsorten, was die französisch-vietnamesische kulinarische Fusion zeigt.",
          nl: "Banh mi is een Vietnamese sandwich op een knapperig Frans stokbrood gevuld met Vietnamese ingrediënten zoals paté, ingelegde groenten, koriander, chili en verschillende vleessoorten, een combinatie van Frans-Vietnamese culinaire fusie."
        }
      },
      {
        question: {
          en: "What is 'jianbing' and when is it typically eaten?",
          es: "¿Qué es 'jianbing' y cuándo se come típicamente?",
          de: "Was ist 'Jianbing' und wann wird es normalerweise gegessen?",
          nl: "Wat is 'jianbing' en wanneer wordt het meestal gegeten?"
        },
        options: [
          { en: "Chinese breakfast crepe with egg and crispy crackers", es: "Crepe de desayuno chino con huevo y galletas crujientes", de: "Chinesischer Frühstücks-Crêpe mit Ei und knusprigen Crackern", nl: "Chinese ontbijt crêpe met ei en knapperige crackers" },
          { en: "Japanese dinner soup", es: "Sopa de cena japonesa", de: "Japanische Abendsuppe", nl: "Japanse avondsoep" },
          { en: "Korean lunch box", es: "Caja de almuerzo coreana", de: "Koreanische Lunchbox", nl: "Koreaanse lunchbox" },
          { en: "Thai night snack", es: "Bocadillo nocturno tailandés", de: "Thailändischer Nachtsnack", nl: "Thaise avondsnack" }
        ],
        correct: 0,
        explanation: {
          en: "Jianbing is a popular Chinese breakfast street food - a thin crepe made from wheat and grain flour, spread with egg, filled with crispy wonton crackers, scallions, cilantro, and savory sauces.",
          es: "Jianbing es una comida callejera de desayuno china popular - un crepe delgado hecho de harina de trigo y granos, untado con huevo, relleno con galletas wonton crujientes, cebolletas, cilantro y salsas saladas.",
          de: "Jianbing ist ein beliebtes chinesisches Frühstücks-Straßenessen - ein dünner Crêpe aus Weizen- und Getreidemehl, mit Ei bestrichen, gefüllt mit knusprigen Wonton-Crackern, Frühlingszwiebeln, Koriander und herzhaften Saucen.",
          nl: "Jianbing is een populair Chinees ontbijt straatvoedsel - een dunne crêpe gemaakt van tarwe- en graanmeel, besmeerd met ei, gevuld met knapperige wonton crackers, lente-uitjes, koriander en hartige sauzen."
        }
      },
      {
        question: {
          en: "What is 'pani puri' and how is it eaten?",
          es: "¿Qué es 'pani puri' y cómo se come?",
          de: "Was ist 'Pani Puri' und wie wird es gegessen?",
          nl: "Wat is 'pani puri' en hoe wordt het gegeten?"
        },
        options: [
          { en: "Indian hollow crispy shells filled with spiced water and fillings", es: "Conchas crujientes huecas indias rellenas con agua condimentada y rellenos", de: "Indische hohle knusprige Schalen gefüllt mit gewürztem Wasser und Füllungen", nl: "Indiase holle knapperige schalen gevuld met gekruid water en vullingen" },
          { en: "Japanese sushi roll", es: "Rollo de sushi japonés", de: "Japanische Sushi-Rolle", nl: "Japanse sushi rol" },
          { en: "Chinese dumpling soup", es: "Sopa de dumplings china", de: "Chinesische Teigtaschen-Suppe", nl: "Chinese dumpling soep" },
          { en: "Thai noodle salad", es: "Ensalada de fideos tailandesa", de: "Thailändischer Nudelsalat", nl: "Thaise noedelsalade" }
        ],
        correct: 0,
        explanation: {
          en: "Pani puri (also called gol gappa) are crispy hollow puri shells filled with spiced tamarind water, potatoes, chickpeas, and chutneys, eaten whole in one bite as popular Indian street food.",
          es: "Pani puri (también llamado gol gappa) son conchas puri huecas crujientes rellenas con agua de tamarindo condimentada, papas, garbanzos y chutneys, comidas enteras en un bocado como comida callejera india popular.",
          de: "Pani Puri (auch Gol Gappa genannt) sind knusprige hohle Puri-Schalen gefüllt mit gewürztem Tamarindenwasser, Kartoffeln, Kichererbsen und Chutneys, in einem Bissen ganz gegessen als beliebtes indisches Straßenessen.",
          nl: "Pani puri (ook wel gol gappa genoemd) zijn knapperige holle puri schalen gevuld met gekruid tamarindewater, aardappelen, kikkererwten en chutneys, in één hap heel gegeten als populair Indiaas straatvoedsel."
        }
      },
      {
        question: {
          en: "What is 'kimbap' and how does it differ from sushi?",
          es: "¿Qué es 'kimbap' y en qué se diferencia del sushi?",
          de: "Was ist 'Kimbap' und wie unterscheidet es sich von Sushi?",
          nl: "Wat is 'kimbap' en hoe verschilt het van sushi?"
        },
        options: [
          { en: "Korean seaweed rice roll with cooked ingredients and sesame oil", es: "Rollo de arroz con algas coreano con ingredientes cocidos y aceite de sésamo", de: "Koreanische Seetang-Reisrolle mit gekochten Zutaten und Sesamöl", nl: "Koreaanse zeewier rijstrol met gekookte ingrediënten en sesamolie" },
          { en: "Japanese raw fish roll with wasabi", es: "Rollo de pescado crudo japonés con wasabi", de: "Japanische rohe Fischrolle mit Wasabi", nl: "Japanse rauwe visrol met wasabi" },
          { en: "Chinese spring roll wrapper", es: "Envoltorio de rollo de primavera chino", de: "Chinesische Frühlingsrollen-Hülle", nl: "Chinese loempia wrapper" },
          { en: "Thai rice paper roll", es: "Rollo de papel de arroz tailandés", de: "Thailändische Reispapier-Rolle", nl: "Thaise rijstpapier rol" }
        ],
        correct: 0,
        explanation: {
          en: "Kimbap is Korean rice rolled in seaweed with cooked vegetables, egg, and meat, seasoned with sesame oil. Unlike sushi, it doesn't use raw fish or vinegared rice, making it ideal portable street food.",
          es: "Kimbap es arroz coreano enrollado en algas con verduras cocidas, huevo y carne, sazonado con aceite de sésamo. A diferencia del sushi, no usa pescado crudo ni arroz avinagrado, lo que lo hace ideal como comida callejera portátil.",
          de: "Kimbap ist koreanischer Reis gerollt in Seetang mit gekochtem Gemüse, Ei und Fleisch, gewürzt mit Sesamöl. Im Gegensatz zu Sushi verwendet es keinen rohen Fisch oder Essig-Reis, was es zu idealem tragbaren Straßenessen macht.",
          nl: "Kimbap is Koreaanse rijst gerold in zeewier met gekookte groenten, ei en vlees, gekruid met sesamolie. In tegenstelling tot sushi gebruikt het geen rauwe vis of azijnrijst, waardoor het ideaal draagbaar straatvoedsel is."
        }
      },
      {
        question: {
          en: "What is 'khao man gai' and from which cuisine does it come?",
          es: "¿Qué es 'khao man gai' y de qué cocina proviene?",
          de: "Was ist 'Khao Man Gai' und aus welcher Küche stammt es?",
          nl: "Wat is 'khao man gai' en uit welke keuken komt het?"
        },
        options: [
          { en: "Thai chicken rice with ginger sauce", es: "Arroz con pollo tailandés con salsa de jengibre", de: "Thailändisches Hühnerreis mit Ingwersauce", nl: "Thaise kiprijst met gembersaus" },
          { en: "Japanese teriyaki bowl", es: "Bol de teriyaki japonés", de: "Japanische Teriyaki-Schüssel", nl: "Japanse teriyaki bowl" },
          { en: "Korean bibimbap", es: "Bibimbap coreano", de: "Koreanisches Bibimbap", nl: "Koreaanse bibimbap" },
          { en: "Chinese fried rice", es: "Arroz frito chino", de: "Chinesischer gebratener Reis", nl: "Chinese gebakken rijst" }
        ],
        correct: 0,
        explanation: {
          en: "Khao man gai is Thai chicken rice - tender poached chicken served over fragrant chicken-fat rice with cucumber, cilantro, and a pungent ginger-garlic sauce, popular street food inspired by Hainanese chicken rice.",
          es: "Khao man gai es arroz con pollo tailandés - pollo tierno escalfado servido sobre arroz aromático con grasa de pollo con pepino, cilantro y una salsa picante de jengibre y ajo, comida callejera popular inspirada en el arroz con pollo hainanés.",
          de: "Khao Man Gai ist thailändisches Hühnerreis - zartes pochiertes Huhn serviert über duftendem Hühnerfett-Reis mit Gurke, Koriander und einer scharfen Ingwer-Knoblauch-Sauce, beliebtes Straßenessen inspiriert von hainanesischem Hühnerreis.",
          nl: "Khao man gai is Thaise kiprijst - mals gepocheerd kip geserveerd over geurige kippenvetten rijst met komkommer, koriander en een scherpe gember-knoflook saus, populair straatvoedsel geïnspireerd op Hainanese kiprijst."
        }
      },
      {
        question: {
          en: "What is 'rojak' and what makes it unique?",
          es: "¿Qué es 'rojak' y qué lo hace único?",
          de: "Was ist 'Rojak' und was macht es einzigartig?",
          nl: "Wat is 'rojak' en wat maakt het uniek?"
        },
        options: [
          { en: "Malaysian/Singaporean fruit and vegetable salad with sweet-spicy sauce", es: "Ensalada de frutas y verduras malasia/singapurense con salsa dulce-picante", de: "Malaysischer/singapurischer Obst- und Gemüsesalat mit süß-scharfer Sauce", nl: "Maleisische/Singaporese fruit en groente salade met zoet-pittige saus" },
          { en: "Japanese sashimi platter", es: "Plato de sashimi japonés", de: "Japanische Sashimi-Platte", nl: "Japanse sashimi schotel" },
          { en: "Korean barbecue meat", es: "Carne de barbacoa coreana", de: "Koreanisches Grillfleisch", nl: "Koreaans barbecue vlees" },
          { en: "Thai green curry", es: "Curry verde tailandés", de: "Thailändisches grünes Curry", nl: "Thaise groene curry" }
        ],
        correct: 0,
        explanation: {
          en: "Rojak is a Malaysian and Singaporean salad mixing fruits (pineapple, jicama) and vegetables with fried dough fritters, dressed in thick sweet-spicy sauce made from shrimp paste, sugar, lime, and chili.",
          es: "Rojak es una ensalada malasia y singapurense que mezcla frutas (piña, jícama) y verduras con buñuelos de masa frita, aderezada con salsa espesa dulce-picante hecha de pasta de camarones, azúcar, lima y chile.",
          de: "Rojak ist ein malaysischer und singapurischer Salat, der Früchte (Ananas, Jicama) und Gemüse mit frittierten Teigkrapfen mischt, angemacht mit dicker süß-scharfer Sauce aus Garnelenpaste, Zucker, Limette und Chili.",
          nl: "Rojak is een Maleisische en Singaporese salade die vruchten (ananas, jicama) en groenten mixt met gefrituurde deeg beignets, gedresseerd in dikke zoet-pittige saus gemaakt van garnalenpasta, suiker, limoen en chili."
        }
      },
      {
        question: {
          en: "What is 'tonkatsu' and how is it typically served?",
          es: "¿Qué es 'tonkatsu' y cómo se sirve típicamente?",
          de: "Was ist 'Tonkatsu' und wie wird es normalerweise serviert?",
          nl: "Wat is 'tonkatsu' en hoe wordt het meestal geserveerd?"
        },
        options: [
          { en: "Japanese breaded deep-fried pork cutlet with cabbage", es: "Chuleta de cerdo frita empanizada japonesa con repollo", de: "Japanisches paniertes frittiertes Schweineschnitzel mit Kohl", nl: "Japanse gepaneerde diep gefrituurde varkensschnitzel met kool" },
          { en: "Korean grilled short ribs", es: "Costillas cortas a la parrilla coreanas", de: "Koreanische gegrillte Kurzrippen", nl: "Koreaanse gegrilde short ribs" },
          { en: "Chinese steamed fish", es: "Pescado al vapor chino", de: "Chinesischer gedämpfter Fisch", nl: "Chinese gestoomde vis" },
          { en: "Thai curry chicken", es: "Pollo al curry tailandés", de: "Thailändisches Curry-Huhn", nl: "Thaise curry kip" }
        ],
        correct: 0,
        explanation: {
          en: "Tonkatsu is a Japanese dish of breaded, deep-fried pork cutlet served with shredded cabbage, rice, miso soup, and tonkatsu sauce (thick Worcestershire-based sauce), popular as street food and restaurant dish.",
          es: "Tonkatsu es un plato japonés de chuleta de cerdo empanizada y frita servida con repollo rallado, arroz, sopa de miso y salsa tonkatsu (salsa espesa a base de Worcestershire), popular como comida callejera y plato de restaurante.",
          de: "Tonkatsu ist ein japanisches Gericht aus paniertem, frittiertem Schweineschnitzel serviert mit geschreddertem Kohl, Reis, Miso-Suppe und Tonkatsu-Sauce (dicke Worcestershire-basierte Sauce), beliebt als Straßenessen und Restaurantgericht.",
          nl: "Tonkatsu is een Japans gerecht van gepaneerde, diep gefrituurde varkensschnitzel geserveerd met geraspte kool, rijst, miso soep en tonkatsu saus (dikke Worcestershire-gebaseerde saus), populair als straatvoedsel en restaurantgerecht."
        }
      },
      {
        question: {
          en: "What is 'cendol' and where is it popular?",
          es: "¿Qué es 'cendol' y dónde es popular?",
          de: "Was ist 'Cendol' und wo ist es beliebt?",
          nl: "Wat is 'cendol' en waar is het populair?"
        },
        options: [
          { en: "Southeast Asian dessert with green jelly, coconut milk, and palm sugar", es: "Postre del sudeste asiático con gelatina verde, leche de coco y azúcar de palma", de: "Südostasiatisches Dessert mit grünem Gelee, Kokosmilch und Palmzucker", nl: "Zuidoost-Aziatisch dessert met groene gelei, kokosmelk en palmsuiker" },
          { en: "Japanese mochi cake", es: "Pastel de mochi japonés", de: "Japanischer Mochi-Kuchen", nl: "Japanse mochi cake" },
          { en: "Korean shaved ice", es: "Hielo raspado coreano", de: "Koreanisches geschabtes Eis", nl: "Koreaans geschaafd ijs" },
          { en: "Chinese fortune cookie", es: "Galleta de la fortuna china", de: "Chinesischer Glückskeks", nl: "Chinese gelukskoekje" }
        ],
        correct: 0,
        explanation: {
          en: "Cendol is a popular Southeast Asian iced dessert from Indonesia, Malaysia, and Singapore, featuring green pandan-flavored rice flour jelly, coconut milk, palm sugar syrup, and shaved ice.",
          es: "Cendol es un postre helado popular del sudeste asiático de Indonesia, Malasia y Singapur, que presenta gelatina verde de harina de arroz con sabor a pandan, leche de coco, jarabe de azúcar de palma y hielo raspado.",
          de: "Cendol ist ein beliebtes südostasiatisches Eis-Dessert aus Indonesien, Malaysia und Singapur mit grünem pandan-aromatisiertem Reismehl-Gelee, Kokosmilch, Palmzuckersirup und geschabtem Eis.",
          nl: "Cendol is een populair Zuidoost-Aziatisch ijsdessert uit Indonesië, Maleisië en Singapore, met groene pandan-gesmaakt rijstmeel gelei, kokosmelk, palmsuikersiroop en geschaafd ijs."
        }
      },
      {
        question: {
          en: "What is 'samosa' and what are common fillings?",
          es: "¿Qué es 'samosa' y cuáles son los rellenos comunes?",
          de: "Was ist 'Samosa' und was sind übliche Füllungen?",
          nl: "Wat is 'samosa' en wat zijn veelvoorkomende vullingen?"
        },
        options: [
          { en: "Triangular fried pastry filled with spiced potatoes or meat", es: "Pastelería triangular frita rellena con papas especiadas o carne", de: "Dreieckiges frittiertes Gebäck gefüllt mit gewürzten Kartoffeln oder Fleisch", nl: "Driehoekig gefrituurde gebak gevuld met gekruide aardappelen of vlees" },
          { en: "Japanese rice ball", es: "Bola de arroz japonesa", de: "Japanischer Reisball", nl: "Japanse rijstbal" },
          { en: "Korean pancake", es: "Panqueque coreano", de: "Koreanischer Pfannkuchen", nl: "Koreaanse pannenkoek" },
          { en: "Thai soup dumpling", es: "Dumpling de sopa tailandés", de: "Thailändische Suppen-Teigtasche", nl: "Thaise soep dumpling" }
        ],
        correct: 0,
        explanation: {
          en: "Samosa is a popular Indian and South Asian fried or baked pastry with triangular shape, typically filled with spiced potatoes, peas, onions, or minced meat, served with chutney as street food snack.",
          es: "Samosa es una pastelería frita o horneada popular india y del sur de Asia con forma triangular, típicamente rellena con papas especiadas, guisantes, cebollas o carne picada, servida con chutney como bocadillo de comida callejera.",
          de: "Samosa ist ein beliebtes indisches und südasiatisches frittiertes oder gebackenes Gebäck mit dreieckiger Form, typischerweise gefüllt mit gewürzten Kartoffeln, Erbsen, Zwiebeln oder Hackfleisch, als Straßenessen-Snack mit Chutney serviert.",
          nl: "Samosa is een populair Indiaas en Zuid-Aziatisch gefrituurde of gebakken gebak met driehoekige vorm, meestal gevuld met gekruide aardappelen, erwten, uien of gehakt vlees, geserveerd met chutney als straatvoedsel snack."
        }
      },
      {
        question: {
          en: "What is 'congee' and when is it commonly eaten?",
          es: "¿Qué es 'congee' y cuándo se come comúnmente?",
          de: "Was ist 'Congee' und wann wird es üblicherweise gegessen?",
          nl: "Wat is 'congee' en wanneer wordt het meestal gegeten?"
        },
        options: [
          { en: "Chinese rice porridge eaten for breakfast with various toppings", es: "Gachas de arroz chinas comidas en el desayuno con varios ingredientes", de: "Chinesischer Reisbrei zum Frühstück mit verschiedenen Belägen gegessen", nl: "Chinese rijstepap gegeten bij het ontbijt met verschillende toppings" },
          { en: "Japanese dinner soup", es: "Sopa de cena japonesa", de: "Japanische Abendsuppe", nl: "Japanse avondsoep" },
          { en: "Korean lunch stew", es: "Guiso de almuerzo coreano", de: "Koreanischer Mittagseintopf", nl: "Koreaanse lunch stoofpot" },
          { en: "Thai midnight snack", es: "Bocadillo de medianoche tailandés", de: "Thailändischer Mitternachtssnack", nl: "Thaise middernacht snack" }
        ],
        correct: 0,
        explanation: {
          en: "Congee (also jook or zhou) is Chinese rice porridge cooked until soft and creamy, commonly eaten for breakfast as street food, topped with ingredients like century egg, pork, fish, or preserved vegetables.",
          es: "Congee (también jook o zhou) son gachas de arroz chinas cocidas hasta quedar suaves y cremosas, comúnmente comidas en el desayuno como comida callejera, cubiertas con ingredientes como huevo centenario, cerdo, pescado o verduras conservadas.",
          de: "Congee (auch Jook oder Zhou) ist chinesischer Reisbrei, der weich und cremig gekocht wird, üblicherweise zum Frühstück als Straßenessen gegessen, belegt mit Zutaten wie Jahrhundert-Ei, Schweinefleisch, Fisch oder konserviertem Gemüse.",
          nl: "Congee (ook jook of zhou) is Chinese rijstepap gekookt tot zacht en romig, vaak gegeten bij het ontbijt als straatvoedsel, belegd met ingrediënten zoals eeuwig ei, varkensvlees, vis of geconserveerde groenten."
        }
      },
      {
        question: {
          en: "What is 'halo-halo' and what does its name mean?",
          es: "¿Qué es 'halo-halo' y qué significa su nombre?",
          de: "Was ist 'Halo-Halo' und was bedeutet sein Name?",
          nl: "Wat is 'halo-halo' en wat betekent de naam?"
        },
        options: [
          { en: "Filipino mixed dessert with shaved ice meaning 'mix-mix'", es: "Postre mixto filipino con hielo raspado que significa 'mezcla-mezcla'", de: "Philippinisches gemischtes Dessert mit geschabtem Eis, bedeutet 'Mix-Mix'", nl: "Filipijns gemengd dessert met geschaafd ijs betekent 'mix-mix'" },
          { en: "Japanese noodle soup meaning 'hot-hot'", es: "Sopa de fideos japonesa que significa 'caliente-caliente'", de: "Japanische Nudelsuppe bedeutet 'heiß-heiß'", nl: "Japanse noedelsoep betekent 'heet-heet'" },
          { en: "Korean spicy rice meaning 'fire-fire'", es: "Arroz picante coreano que significa 'fuego-fuego'", de: "Koreanischer scharfer Reis bedeutet 'Feuer-Feuer'", nl: "Koreaanse pittige rijst betekent 'vuur-vuur'" },
          { en: "Thai curry meaning 'sweet-sweet'", es: "Curry tailandés que significa 'dulce-dulce'", de: "Thailändisches Curry bedeutet 'süß-süß'", nl: "Thaise curry betekent 'zoet-zoet'" }
        ],
        correct: 0,
        explanation: {
          en: "Halo-halo is a popular Filipino dessert with shaved ice, evaporated milk, various sweet beans, fruits, jellies, and topped with ice cream and leche flan. Its name means 'mix-mix' in Tagalog, referring to mixing all ingredients.",
          es: "Halo-halo es un postre filipino popular con hielo raspado, leche evaporada, varios frijoles dulces, frutas, gelatinas y cubierto con helado y leche flan. Su nombre significa 'mezcla-mezcla' en tagalo, refiriéndose a mezclar todos los ingredientes.",
          de: "Halo-Halo ist ein beliebtes philippinisches Dessert mit geschabtem Eis, Kondensmilch, verschiedenen süßen Bohnen, Früchten, Gelees und belegt mit Eiscreme und Leche Flan. Sein Name bedeutet 'Mix-Mix' auf Tagalog und bezieht sich auf das Mischen aller Zutaten.",
          nl: "Halo-halo is een populair Filipijns dessert met geschaafd ijs, gecondenseerde melk, verschillende zoete bonen, vruchten, gelei en belegd met ijs en leche flan. De naam betekent 'mix-mix' in Tagalog, verwijzend naar het mengen van alle ingrediënten."
        }
      },
      {
        question: {
          en: "What is 'tempura' and what type of batter is used?",
          es: "¿Qué es 'tempura' y qué tipo de masa se usa?",
          de: "Was ist 'Tempura' und welche Art von Teig wird verwendet?",
          nl: "Wat is 'tempura' en welk type beslag wordt gebruikt?"
        },
        options: [
          { en: "Japanese light battered deep-fried seafood and vegetables", es: "Mariscos y verduras fritos japoneses con masa ligera", de: "Japanisch leicht panierte frittierte Meeresfrüchte und Gemüse", nl: "Japanse licht beslag gefrituurde zeevruchten en groenten" },
          { en: "Korean heavy breaded chicken", es: "Pollo empanizado pesado coreano", de: "Koreanisches schwer paniertes Huhn", nl: "Koreaanse zwaar gepaneerde kip" },
          { en: "Chinese thick-coated pork", es: "Cerdo con capa gruesa china", de: "Chinesisches dick beschichtetes Schweinefleisch", nl: "Chinees dik gecoat varkensvlees" },
          { en: "Thai curry-coated fish", es: "Pescado cubierto con curry tailandés", de: "Thailändischer curry-beschichteter Fisch", nl: "Thaise curry gecoate vis" }
        ],
        correct: 0,
        explanation: {
          en: "Tempura is Japanese cuisine's light, crispy battered and deep-fried seafood (shrimp, fish) and vegetables, using cold water and low-gluten flour batter to create its characteristic delicate, airy texture.",
          es: "Tempura es mariscos (camarones, pescado) y verduras fritos con masa ligera y crujiente de la cocina japonesa, usando agua fría y masa de harina baja en gluten para crear su característica textura delicada y aireada.",
          de: "Tempura ist die leichte, knusprig panierte und frittierte Meeresfrüchte (Garnelen, Fisch) und Gemüse der japanischen Küche, unter Verwendung von kaltem Wasser und glutenarmen Mehlteig, um seine charakteristische zarte, luftige Textur zu erzeugen.",
          nl: "Tempura is Japanse keuken's lichte, knapperige beslag en diep gefrituurde zeevruchten (garnalen, vis) en groenten, gebruik makend van koud water en laag-gluten meelbeslag om de karakteristieke delicate, luchtige textuur te creëren."
        }
      },
      {
        question: {
          en: "What is 'bubble tea' (boba) and where did it originate?",
          es: "¿Qué es 'bubble tea' (boba) y dónde se originó?",
          de: "Was ist 'Bubble Tea' (Boba) und wo entstand es?",
          nl: "Wat is 'bubble tea' (boba) en waar is het ontstaan?"
        },
        options: [
          { en: "Taiwanese tea drink with tapioca pearls", es: "Bebida de té taiwanesa con perlas de tapioca", de: "Taiwanesisches Teegetränk mit Tapioka-Perlen", nl: "Taiwanese thee drank met tapioca parels" },
          { en: "Japanese carbonated soda", es: "Soda carbonatada japonesa", de: "Japanische kohlensäurehaltige Limonade", nl: "Japanse koolzuurhoudende frisdrank" },
          { en: "Korean rice wine", es: "Vino de arroz coreano", de: "Koreanischer Reiswein", nl: "Koreaanse rijstwijn" },
          { en: "Thai coconut water", es: "Agua de coco tailandesa", de: "Thailändisches Kokoswasser", nl: "Thais kokoswater" }
        ],
        correct: 0,
        explanation: {
          en: "Bubble tea (boba) originated in Taiwan in the 1980s - a tea-based drink mixed with milk or fruit flavors and chewy tapioca pearls, now a popular street beverage across Asia and worldwide.",
          es: "Bubble tea (boba) se originó en Taiwán en la década de 1980 - una bebida a base de té mezclada con leche o sabores de frutas y perlas masticables de tapioca, ahora una bebida callejera popular en Asia y en todo el mundo.",
          de: "Bubble Tea (Boba) entstand in Taiwan in den 1980er Jahren - ein teebasiertes Getränk gemischt mit Milch oder Fruchtaromen und kaubare Tapioka-Perlen, jetzt ein beliebtes Straßengetränk in ganz Asien und weltweit.",
          nl: "Bubble tea (boba) ontstond in Taiwan in de jaren 1980 - een op thee gebaseerde drank gemengd met melk of fruit smaken en chewy tapioca parels, nu een populaire straat drank in heel Azië en wereldwijd."
        }
      },
      {
        question: {
          en: "What is 'gyoza' and how does it differ from Chinese dumplings?",
          es: "¿Qué es 'gyoza' y en qué se diferencia de los dumplings chinos?",
          de: "Was ist 'Gyoza' und wie unterscheidet es sich von chinesischen Teigtaschen?",
          nl: "Wat is 'gyoza' en hoe verschilt het van Chinese dumplings?"
        },
        options: [
          { en: "Japanese pan-fried dumplings with thinner wrapper and garlic", es: "Dumplings japoneses fritos en sartén con envoltura más delgada y ajo", de: "Japanische pfannengebratene Teigtaschen mit dünnerer Hülle und Knoblauch", nl: "Japanse pan gebakken dumplings met dunnere wrapper en knoflook" },
          { en: "Korean thick soup dumplings", es: "Dumplings de sopa espesa coreanos", de: "Koreanische dicke Suppen-Teigtaschen", nl: "Koreaanse dikke soep dumplings" },
          { en: "Thai sweet dessert rolls", es: "Rollos de postre dulce tailandeses", de: "Thailändische süße Dessert-Rollen", nl: "Thaise zoete dessert rollen" },
          { en: "Vietnamese steamed rice cakes", es: "Pasteles de arroz al vapor vietnamitas", de: "Vietnamesische gedämpfte Reiskuchen", nl: "Vietnamese gestoomde rijstkoekjes" }
        ],
        correct: 0,
        explanation: {
          en: "Gyoza are Japanese pan-fried dumplings adapted from Chinese jiaozi, featuring thinner, more delicate wrappers, more garlic in the filling, and typically cooked crispy on one side while steamed on the other.",
          es: "Gyoza son dumplings japoneses fritos en sartén adaptados de los jiaozi chinos, con envolturas más delgadas y delicadas, más ajo en el relleno, y típicamente cocidos crujientes en un lado mientras se cocinan al vapor en el otro.",
          de: "Gyoza sind japanische pfannengebratene Teigtaschen, angepasst von chinesischen Jiaozi, mit dünneren, zarteren Hüllen, mehr Knoblauch in der Füllung und typischerweise auf einer Seite knusprig gebraten, während die andere Seite gedämpft wird.",
          nl: "Gyoza zijn Japanse pan gebakken dumplings aangepast van Chinese jiaozi, met dunnere, meer delicate wrappers, meer knoflook in de vulling, en meestal knapperig gebakken aan één kant terwijl gestoomd aan de andere kant."
        }
      },
      {
        question: {
          en: "What is 'fish ball' street food and where is it most popular?",
          es: "¿Qué es la comida callejera 'fish ball' y dónde es más popular?",
          de: "Was ist 'Fischball'-Straßenessen und wo ist es am beliebtesten?",
          nl: "Wat is 'fish ball' straatvoedsel en waar is het het populairst?"
        },
        options: [
          { en: "Hong Kong and Southeast Asian bouncy fish paste balls", es: "Bolas elásticas de pasta de pescado de Hong Kong y el sudeste asiático", de: "Hong Kong und südostasiatische elastische Fischpastenbällchen", nl: "Hong Kong en Zuidoost-Aziatische springerige vispasta balletjes" },
          { en: "Japanese sushi rice balls", es: "Bolas de arroz de sushi japonesas", de: "Japanische Sushi-Reisbällchen", nl: "Japanse sushi rijstballen" },
          { en: "Korean meat patties", es: "Hamburguesas de carne coreanas", de: "Koreanische Fleischpastetchen", nl: "Koreaanse vleespasteitjes" },
          { en: "Thai vegetable fritters", es: "Buñuelos de verduras tailandeses", de: "Thailändische Gemüsekrapfen", nl: "Thaise groente beignets" }
        ],
        correct: 0,
        explanation: {
          en: "Fish balls are popular Hong Kong and Southeast Asian street food made from ground fish paste formed into balls, served on skewers with curry sauce or in noodle soups, known for their bouncy, springy texture.",
          es: "Fish balls son comida callejera popular de Hong Kong y el sudeste asiático hechas de pasta de pescado molido formada en bolas, servidas en brochetas con salsa de curry o en sopas de fideos, conocidas por su textura elástica y saltarina.",
          de: "Fischbällchen sind beliebtes Hong Kong und südostasiatisches Straßenessen aus gemahlenem Fischpaste zu Bällchen geformt, auf Spießen mit Curry-Sauce oder in Nudelsuppen serviert, bekannt für ihre elastische, federnde Textur.",
          nl: "Fish balls zijn populair Hong Kong en Zuidoost-Aziatisch straatvoedsel gemaakt van gemalen vispasta gevormd tot balletjes, geserveerd op spiesjes met curry saus of in noedelsoepen, bekend om hun springerige, elastische textuur."
        }
      },
      {
        question: {
          en: "What distinguishes 'Korean fried chicken' from other fried chicken styles?",
          es: "¿Qué distingue el 'pollo frito coreano' de otros estilos de pollo frito?",
          de: "Was unterscheidet 'koreanisches frittiertes Huhn' von anderen frittierten Hühnerstilen?",
          nl: "Wat onderscheidt 'Koreaanse gefrituurde kip' van andere gefrituurde kip stijlen?"
        },
        options: [
          { en: "Double-fried for extra crispiness with sweet-spicy glaze", es: "Frito dos veces para mayor crujiente con glaseado dulce-picante", de: "Zweimal frittiert für extra Knusprigkeit mit süß-scharfer Glasur", nl: "Dubbel gefrituurd voor extra knapperigheid met zoet-pittige glazuur" },
          { en: "Single fried with only salt", es: "Frito una vez con solo sal", de: "Einmal frittiert nur mit Salz", nl: "Enkel gefrituurd met alleen zout" },
          { en: "Baked instead of fried", es: "Horneado en lugar de frito", de: "Gebacken statt frittiert", nl: "Gebakken in plaats van gefrituurd" },
          { en: "Steamed with no coating", es: "Al vapor sin cobertura", de: "Gedämpft ohne Beschichtung", nl: "Gestoomd zonder coating" }
        ],
        correct: 0,
        explanation: {
          en: "Korean fried chicken (chikin) is distinctive for being double-fried, creating ultra-crispy skin, and coated with various glazes like sweet-spicy gochujang sauce, soy-garlic, or honey butter, served as popular street food.",
          es: "El pollo frito coreano (chikin) es distintivo por ser frito dos veces, creando piel ultra crujiente, y cubierto con varios glaseados como salsa agridulce-picante de gochujang, soja-ajo, o mantequilla de miel, servido como comida callejera popular.",
          de: "Koreanisches frittiertes Huhn (Chikin) ist unverwechselbar dafür, zweimal frittiert zu werden, was ultraknusprige Haut schafft, und mit verschiedenen Glasuren wie süß-scharfer Gochujang-Sauce, Soja-Knoblauch oder Honigbutter beschichtet, als beliebtes Straßenessen serviert.",
          nl: "Koreaanse gefrituurde kip (chikin) is onderscheidend omdat het dubbel gefrituurd wordt, wat een ultra knapperige huid creëert, en gecoat met verschillende glazuren zoals zoet-pittige gochujang saus, soja-knoflook of honing boter, geserveerd als populair straatvoedsel."
        }
      },
      {
        question: {
          en: "What is 'onigiri' and when is it commonly eaten?",
          es: "¿Qué es 'onigiri' y cuándo se come comúnmente?",
          de: "Was ist 'Onigiri' und wann wird es üblicherweise gegessen?",
          nl: "Wat is 'onigiri' en wanneer wordt het meestal gegeten?"
        },
        options: [
          { en: "Japanese rice ball wrapped in seaweed, eaten as snack or lunch", es: "Bola de arroz japonesa envuelta en algas, comida como bocadillo o almuerzo", de: "Japanischer Reisball in Seetang eingewickelt, als Snack oder Mittagessen gegessen", nl: "Japanse rijstbal gewikkeld in zeewier, gegeten als snack of lunch" },
          { en: "Korean soup dumpling for dinner", es: "Dumpling de sopa coreano para cena", de: "Koreanische Suppen-Teigtasche zum Abendessen", nl: "Koreaanse soep dumpling voor diner" },
          { en: "Thai dessert for breakfast", es: "Postre tailandés para desayuno", de: "Thailändisches Dessert zum Frühstück", nl: "Thais dessert voor ontbijt" },
          { en: "Chinese fried pastry for midnight snack", es: "Pastelería frita china para bocadillo de medianoche", de: "Chinesisches frittiertes Gebäck als Mitternachtssnack", nl: "Chinese gefrituurde gebak voor middernacht snack" }
        ],
        correct: 0,
        explanation: {
          en: "Onigiri are Japanese rice balls typically filled with salmon, tuna, or pickled plum, wrapped in nori seaweed, commonly eaten as portable lunch, snack, or convenience store food.",
          es: "Onigiri son bolas de arroz japonesas típicamente rellenas con salmón, atún o ciruela en escabeche, envueltas en algas nori, comúnmente comidas como almuerzo portátil, bocadillo o comida de tienda de conveniencia.",
          de: "Onigiri sind japanische Reisbälle typischerweise gefüllt mit Lachs, Thunfisch oder eingelegter Pflaume, in Nori-Seetang eingewickelt, üblicherweise als tragbares Mittagessen, Snack oder Convenience-Store-Essen gegessen.",
          nl: "Onigiri zijn Japanse rijstballen meestal gevuld met zalm, tonijn of ingelegde pruim, gewikkeld in nori zeewier, vaak gegeten als draagbare lunch, snack of convenience store voedsel."
        }
      },
      {
        question: {
          en: "What is 'gua bao' and from which region does it originate?",
          es: "¿Qué es 'gua bao' y de qué región se origina?",
          de: "Was ist 'Gua Bao' und aus welcher Region stammt es?",
          nl: "Wat is 'gua bao' en uit welke regio komt het?"
        },
        options: [
          { en: "Taiwanese steamed bun sandwich with braised pork belly", es: "Sándwich de panecillo al vapor taiwanés con panceta de cerdo estofada", de: "Taiwanesisches gedämpftes Brötchen-Sandwich mit geschmortem Schweinebauch", nl: "Taiwanese gestoomde broodje sandwich met gestoofde buikspek" },
          { en: "Japanese sushi roll", es: "Rollo de sushi japonés", de: "Japanische Sushi-Rolle", nl: "Japanse sushi rol" },
          { en: "Korean barbecue wrap", es: "Envoltorio de barbacoa coreana", de: "Koreanischer Grill-Wrap", nl: "Koreaanse barbecue wrap" },
          { en: "Thai spring roll", es: "Rollo de primavera tailandés", de: "Thailändische Frühlingsrolle", nl: "Thaise loempia" }
        ],
        correct: 0,
        explanation: {
          en: "Gua bao (also called pork belly buns or Taiwanese hamburger) are folded steamed buns filled with braised pork belly, pickled mustard greens, peanut powder, and cilantro, originating from Taiwan as popular street food.",
          es: "Gua bao (también llamado panecillos de panceta de cerdo o hamburguesa taiwanesa) son panecillos al vapor doblados rellenos con panceta de cerdo estofada, verduras de mostaza encurtidas, polvo de maní y cilantro, originarios de Taiwán como comida callejera popular.",
          de: "Gua Bao (auch Schweinebauch-Brötchen oder taiwanesischer Hamburger genannt) sind gefaltete gedämpfte Brötchen gefüllt mit geschmortem Schweinebauch, eingelegtem Senfgrün, Erdnusspulver und Koriander, stammen aus Taiwan als beliebtes Straßenessen.",
          nl: "Gua bao (ook wel buikspek broodjes of Taiwanese hamburger genoemd) zijn gevouwen gestoomde broodjes gevuld met gestoofde buikspek, ingelegde mosterdgroenten, pindapoeder en koriander, afkomstig uit Taiwan als populair straatvoedsel."
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