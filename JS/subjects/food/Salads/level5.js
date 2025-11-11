// Salads Quiz - Level 5: International Salad Specialties
(function() {
  "use strict";

  const level5 = {
    name: {
      en: "Salads Level 5: International Specialties",
      es: "Ensaladas Nivel 5: Especialidades Internacionales",
      de: "Salate Stufe 5: Internationale Spezialitäten",
      nl: "Salades Level 5: Internationale Specialiteiten"
    },
    questions: [
      {
        question: {
          en: "What is the traditional Greek salad (Horiatiki) primarily composed of?",
          es: "¿De qué está compuesta principalmente la ensalada griega tradicional (Horiatiki)?",
          de: "Woraus besteht der traditionelle griechische Salat (Horiatiki) hauptsächlich?",
          nl: "Waar bestaat de traditionele Griekse salade (Horiatiki) voornamelijk uit?"
        },
        options: [
          { en: "Tomatoes, cucumbers, olives, feta cheese, and olive oil", es: "Tomates, pepinos, aceitunas, queso feta y aceite de oliva", de: "Tomaten, Gurken, Oliven, Feta-Käse und Olivenöl", nl: "Tomaten, komkommers, olijven, feta kaas en olijfolie" },
          { en: "Lettuce, croutons, parmesan, and caesar dressing", es: "Lechuga, crutones, parmesano y aderezo césar", de: "Salat, Croutons, Parmesan und Caesar-Dressing", nl: "Sla, croutons, parmezaan en caesar dressing" },
          { en: "Cabbage, carrots, and mayonnaise", es: "Repollo, zanahorias y mayonesa", de: "Kohl, Karotten und Mayonnaise", nl: "Kool, wortels en mayonaise" },
          { en: "Rice, beans, and corn", es: "Arroz, frijoles y maíz", de: "Reis, Bohnen und Mais", nl: "Rijst, bonen en maïs" }
        ],
        correct: 0,
        explanation: {
          en: "Traditional Greek Horiatiki salad consists of tomatoes, cucumbers, red onions, Kalamata olives, feta cheese, dressed with olive oil and vinegar. Notably, authentic Greek salad contains no lettuce.",
          es: "La ensalada griega tradicional Horiatiki consiste en tomates, pepinos, cebollas rojas, aceitunas Kalamata, queso feta, aderezada con aceite de oliva y vinagre. Notablemente, la ensalada griega auténtica no contiene lechuga.",
          de: "Der traditionelle griechische Horiatiki-Salat besteht aus Tomaten, Gurken, roten Zwiebeln, Kalamata-Oliven, Feta-Käse, angemacht mit Olivenöl und Essig. Bemerkenswert ist, dass der authentische griechische Salat keinen Salat enthält.",
          nl: "Traditionele Griekse Horiatiki salade bestaat uit tomaten, komkommers, rode uien, Kalamata olijven, feta kaas, aangekleed met olijfolie en azijn. Opmerkelijk is dat authentieke Griekse salade geen sla bevat."
        }
      },
      {
        question: {
          en: "What makes Italian Caprese salad distinctive?",
          es: "¿Qué hace distintiva a la ensalada Caprese italiana?",
          de: "Was macht den italienischen Caprese-Salat charakteristisch?",
          nl: "Wat maakt de Italiaanse Caprese salade onderscheidend?"
        },
        options: [
          { en: "Complex mixture of 15 different vegetables", es: "Mezcla compleja de 15 verduras diferentes", de: "Komplexe Mischung aus 15 verschiedenen Gemüsesorten", nl: "Complexe mix van 15 verschillende groenten" },
          { en: "Simple combination of tomatoes, mozzarella, basil, and olive oil", es: "Combinación simple de tomates, mozzarella, albahaca y aceite de oliva", de: "Einfache Kombination aus Tomaten, Mozzarella, Basilikum und Olivenöl", nl: "Eenvoudige combinatie van tomaten, mozzarella, basilicum en olijfolie" },
          { en: "Variety of cooked beans and grains", es: "Variedad de frijoles y granos cocidos", de: "Verschiedene gekochte Bohnen und Getreide", nl: "Variëteit van gekookte bonen en granen" },
          { en: "Only green vegetables and herbs", es: "Solo verduras verdes y hierbas", de: "Nur grünes Gemüse und Kräuter", nl: "Alleen groene groenten en kruiden" }
        ],
        correct: 1,
        explanation: {
          en: "Caprese salad is beautifully simple, featuring sliced tomatoes, fresh mozzarella cheese, fresh basil leaves, drizzled with extra virgin olive oil. It represents the colors of the Italian flag and emphasizes quality ingredients.",
          es: "La ensalada Caprese es bellamente simple, con tomates en rodajas, queso mozzarella fresco, hojas de albahaca fresca, rociada con aceite de oliva extra virgen. Representa los colores de la bandera italiana y enfatiza ingredientes de calidad.",
          de: "Caprese-Salat ist wunderschön einfach, mit geschnittenen Tomaten, frischem Mozzarella-Käse, frischen Basilikumblättern, beträufelt mit nativem Olivenöl extra. Er repräsentiert die Farben der italienischen Flagge und betont hochwertige Zutaten.",
          nl: "Caprese salade is prachtig eenvoudig, met gesneden tomaten, verse mozzarella kaas, verse basilicumbladeren, bedruppeld with extra virgin olijfolie. Het vertegenwoordigt de kleuren van de Italiaanse vlag en benadrukt kwaliteit ingrediënten."
        }
      },
      {
        question: {
          en: "What is the key ingredient in traditional Middle Eastern Tabbouleh salad?",
          es: "¿Cuál es el ingrediente clave en la ensalada tradicional de Medio Oriente Tabbouleh?",
          de: "Was ist die Hauptzutat im traditionellen nahöstlichen Tabbouleh-Salat?",
          nl: "Wat is het belangrijkste ingrediënt in traditionele Midden-Oosterse Tabbouleh salade?"
        },
        options: [
          { en: "Rice", es: "Arroz", de: "Reis", nl: "Rijst" },
          { en: "Bulgur wheat", es: "Trigo bulgur", de: "Bulgur-Weizen", nl: "Bulgur tarwe" },
          { en: "Quinoa", es: "Quinoa", de: "Quinoa", nl: "Quinoa" },
          { en: "Couscous", es: "Couscous", de: "Couscous", nl: "Couscous" }
        ],
        correct: 1,
        explanation: {
          en: "Traditional Tabbouleh is made with bulgur wheat as its base, mixed with finely chopped parsley, tomatoes, mint, onions, lemon juice, and olive oil. Parsley is actually the dominant ingredient, not the bulgur.",
          es: "El Tabbouleh tradicional se hace con trigo bulgur como base, mezclado con perejil finamente picado, tomates, menta, cebollas, jugo de limón y aceite de oliva. El perejil es en realidad el ingrediente dominante, no el bulgur.",
          de: "Traditioneller Tabbouleh wird mit Bulgur-Weizen als Basis gemacht, gemischt mit fein gehackter Petersilie, Tomaten, Minze, Zwiebeln, Zitronensaft und Olivenöl. Petersilie ist tatsächlich die dominierende Zutat, nicht der Bulgur.",
          nl: "Traditionele Tabbouleh wordt gemaakt met bulgur tarwe als basis, gemengd met fijn gehakte peterselie, tomaten, munt, uien, citroensap en olijfolie. Peterselie is eigenlijk het dominante ingrediënt, niet de bulgur."
        }
      },
      {
        question: {
          en: "What characterizes the famous French Salade Niçoise?",
          es: "¿Qué caracteriza a la famosa ensalada francesa Salade Niçoise?",
          de: "Was charakterisiert den berühmten französischen Salade Niçoise?",
          nl: "Wat kenmerkt de beroemde Franse Salade Niçoise?"
        },
        options: [
          { en: "Tuna, hard-boiled eggs, olives, anchovies, and vegetables from Nice region", es: "Atún, huevos duros, aceitunas, anchoas y verduras de la región de Niza", de: "Thunfisch, hartgekochte Eier, Oliven, Sardellen und Gemüse aus der Region Nizza", nl: "Tonijn, hardgekookte eieren, olijven, ansjovis en groenten uit de regio Nice" },
          { en: "Only fresh fruits and berries", es: "Solo frutas frescas y bayas", de: "Nur frische Früchte und Beeren", nl: "Alleen verse vruchten en bessen" },
          { en: "Warm roasted vegetables with cheese", es: "Verduras asadas tibias con queso", de: "Warmes geröstetes Gemüse mit Käse", nl: "Warme geroosterde groenten met kaas" },
          { en: "Raw fish and seaweed", es: "Pescado crudo y algas marinas", de: "Roher Fisch und Seetang", nl: "Rauwe vis en zeewier" }
        ],
        correct: 0,
        explanation: {
          en: "Salade Niçoise from Nice, France, traditionally includes tuna, hard-boiled eggs, Niçoise olives, anchovies, tomatoes, green beans, and sometimes potatoes. The authentic version uses no cooked vegetables except eggs.",
          es: "La Salade Niçoise de Niza, Francia, tradicionalmente incluye atún, huevos duros, aceitunas Niçoise, anchoas, tomates, ejotes y a veces papas. La versión auténtica no usa verduras cocidas excepto huevos.",
          de: "Salade Niçoise aus Nizza, Frankreich, enthält traditionell Thunfisch, hartgekochte Eier, Niçoise-Oliven, Sardellen, Tomaten, grüne Bohnen und manchmal Kartoffeln. Die authentische Version verwendet kein gekochtes Gemüse außer Eiern.",
          nl: "Salade Niçoise uit Nice, Frankrijk, bevat traditioneel tonijn, hardgekookte eieren, Niçoise olijven, ansjovis, tomaten, sperziebonen en soms aardappels. De authentieke versie gebruikt geen gekookte groenten behalve eieren."
        }
      },
      {
        question: {
          en: "What is the distinctive feature of German Kartoffelsalat (potato salad)?",
          es: "¿Cuál es la característica distintiva del Kartoffelsalat alemán (ensalada de papa)?",
          de: "Was ist das charakteristische Merkmal des deutschen Kartoffelsalats?",
          nl: "Wat is het onderscheidende kenmerk van Duitse Kartoffelsalat (aardappelsalade)?"
        },
        options: [
          { en: "It's always served cold with heavy mayonnaise", es: "Siempre se sirve frío con mayonesa espesa", de: "Es wird immer kalt mit schwerer Mayonnaise serviert", nl: "Het wordt altijd koud geserveerd met zware mayonaise" },
          { en: "Often served warm with vinegar and oil dressing, sometimes with bacon", es: "A menudo se sirve tibio con aderezo de vinagre y aceite, a veces con tocino", de: "Oft warm serviert mit Essig- und Öl-Dressing, manchmal mit Speck", nl: "Vaak warm geserveerd met azijn en olie dressing, soms met spek" },
          { en: "Contains only raw vegetables", es: "Contiene solo verduras crudas", de: "Enthält nur rohes Gemüse", nl: "Bevat alleen rauwe groenten" },
          { en: "Made exclusively with sweet potatoes", es: "Hecho exclusivamente con batatas", de: "Ausschließlich mit Süßkartoffeln gemacht", nl: "Gemaakt uitsluitend met zoete aardappels" }
        ],
        correct: 1,
        explanation: {
          en: "German Kartoffelsalat is often served warm and dressed with a vinegar and oil mixture rather than mayonnaise. Southern German versions frequently include bacon, and the potatoes are typically waxy varieties that hold their shape.",
          es: "El Kartoffelsalat alemán se sirve a menudo tibio y aderezado con una mezcla de vinagre y aceite en lugar de mayonesa. Las versiones del sur de Alemania frecuentemente incluyen tocino, y las papas son típicamente variedades cerosas que mantienen su forma.",
          de: "Deutscher Kartoffelsalat wird oft warm serviert und mit einer Essig- und Öl-Mischung anstatt Mayonnaise angemacht. Süddeutsche Versionen enthalten häufig Speck, und die Kartoffeln sind typischerweise wachsige Sorten, die ihre Form behalten.",
          nl: "Duitse Kartoffelsalat wordt vaak warm geserveerd en aangekleed met een azijn en olie mengsel in plaats van mayonaise. Zuid-Duitse versies bevatten vaak spek, en de aardappels zijn typisch wasachtige variëteiten die hun vorm behouden."
        }
      },
      {
        question: {
          en: "What is the main characteristic of Thai Som Tam (Green Papaya Salad)?",
          es: "¿Cuál es la característica principal del Som Tam tailandés (Ensalada de Papaya Verde)?",
          de: "Was ist das Hauptmerkmal des thailändischen Som Tam (Grüner Papaya-Salat)?",
          nl: "Wat is het hoofdkenmerk van Thaise Som Tam (Groene Papaja Salade)?"
        },
        options: [
          { en: "Sweet and creamy with coconut", es: "Dulce y cremoso con coco", de: "Süß und cremig mit Kokosnuss", nl: "Zoet en romig met kokos" },
          { en: "Spicy, sour, and refreshing with shredded green papaya", es: "Picante, agrio y refrescante con papaya verde rallada", de: "Scharf, sauer und erfrischend mit geraspelter grüner Papaya", nl: "Pittig, zuur en verfrissend met geraspte groene papaja" },
          { en: "Warm and cooked with meat", es: "Tibio y cocido con carne", de: "Warm und gekocht mit Fleisch", nl: "Warm en gekookt met vlees" },
          { en: "Mild and bland with no seasoning", es: "Suave y soso sin condimentos", de: "Mild und fade ohne Gewürze", nl: "Mild en flauw zonder kruiden" }
        ],
        correct: 1,
        explanation: {
          en: "Som Tam is a vibrant Thai salad made from shredded green (unripe) papaya, dressed with lime juice, fish sauce, chili, garlic, and palm sugar. It's characterized by its perfect balance of spicy, sour, salty, and sweet flavors.",
          es: "Som Tam es una ensalada tailandesa vibrante hecha de papaya verde (inmadura) rallada, aderezada con jugo de lima, salsa de pescado, chile, ajo y azúcar de palma. Se caracteriza por su equilibrio perfecto de sabores picantes, agrios, salados y dulces.",
          de: "Som Tam ist ein lebendiger thailändischer Salat aus geraspelter grüner (unreifer) Papaya, angemacht mit Limettensaft, Fischsauce, Chili, Knoblauch und Palmzucker. Er ist charakterisiert durch sein perfektes Gleichgewicht aus scharfen, sauren, salzigen und süßen Aromen.",
          nl: "Som Tam is een levendige Thaise salade gemaakt van geraspte groene (onrijpe) papaja, aangekleed met limoensap, vissaus, chili, knoflook en palmsuiker. Het wordt gekenmerkt door zijn perfecte balans van pittige, zure, zoute en zoete smaken."
        }
      },
      {
        question: {
          en: "What makes Mexican Ensalada de Nopales unique?",
          es: "¿Qué hace única a la Ensalada de Nopales mexicana?",
          de: "Was macht den mexikanischen Ensalada de Nopales einzigartig?",
          nl: "Wat maakt de Mexicaanse Ensalada de Nopales uniek?"
        },
        options: [
          { en: "It's made with cactus paddles (prickly pear cactus)", es: "Está hecha con pencas de nopal (cactus de higo chumbo)", de: "Es ist mit Kaktuspaddles (Feigenkaktus) gemacht", nl: "Het is gemaakt met cactus paddles (vijgencactus)" },
          { en: "Contains only tropical fruits", es: "Contiene solo frutas tropicales", de: "Enthält nur tropische Früchte", nl: "Bevat alleen tropische vruchten" },
          { en: "Made exclusively with corn and beans", es: "Hecho exclusivamente con maíz y frijoles", de: "Ausschließlich mit Mais und Bohnen gemacht", nl: "Gemaakt uitsluitend met maïs en bonen" },
          { en: "Uses only seafood ingredients", es: "Usa solo ingredientes de mariscos", de: "Verwendet nur Meeresfrüchte-Zutaten", nl: "Gebruikt alleen zeevruchten ingrediënten" }
        ],
        correct: 0,
        explanation: {
          en: "Ensalada de Nopales features tender prickly pear cactus paddles (nopales) that are grilled or boiled, then mixed with onions, tomatoes, cilantro, and lime. The cactus has a unique texture and slightly tart flavor.",
          es: "La Ensalada de Nopales presenta tiernas pencas de nopal (nopales) que se asan o hierven, luego se mezclan con cebollas, tomates, cilantro y lima. El cactus tiene una textura única y un sabor ligeramente agrio.",
          de: "Ensalada de Nopales zeigt zarte Feigenkaktus-Paddles (Nopales), die gegrillt oder gekocht werden, dann mit Zwiebeln, Tomaten, Koriander und Limette gemischt werden. Der Kaktus hat eine einzigartige Textur und einen leicht säuerlichen Geschmack.",
          nl: "Ensalada de Nopales bevat tedere vijgencactus paddles (nopales) die gegrild of gekookt worden zijn, dan gemengd met uien, tomaten, koriander en limoen. De cactus heeft een unieke textuur en licht zure smaak."
        }
      },
      {
        question: {
          en: "What is the traditional Japanese Sunomono salad characterized by?",
          es: "¿Cómo se caracteriza la ensalada japonesa tradicional Sunomono?",
          de: "Wodurch ist der traditionelle japanische Sunomono-Salat charakterisiert?",
          nl: "Waar wordt de traditionele Japanse Sunomono salade door gekenmerkt?"
        },
        options: [
          { en: "Heavy cream and cheese dressing", es: "Aderezo de crema espesa y queso", de: "Schwere Sahne und Käse-Dressing", nl: "Zware room en kaas dressing" },
          { en: "Pickled vegetables in rice vinegar dressing", es: "Verduras encurtidas en aderezo de vinagre de arroz", de: "Eingelegtes Gemüse in Reisessig-Dressing", nl: "Ingelegde groenten in rijstazijn dressing" },
          { en: "Grilled meats and hot spices", es: "Carnes asadas y especias picantes", de: "Gegrilltes Fleisch und scharfe Gewürze", nl: "Gegrild vlees en hete specerijen" },
          { en: "Only raw fish and seaweed", es: "Solo pescado crudo y algas marinas", de: "Nur roher Fisch und Seetang", nl: "Alleen rauwe vis en zeewier" }
        ],
        correct: 1,
        explanation: {
          en: "Sunomono is a Japanese salad of pickled vegetables, most commonly cucumber, dressed with rice vinegar, sugar, and salt. It's light, refreshing, and often served as a palate cleanser or side dish.",
          es: "Sunomono es una ensalada japonesa de verduras encurtidas, más comúnmente pepino, aderezada con vinagre de arroz, azúcar y sal. Es ligera, refrescante y a menudo se sirve como limpiador del paladar o plato de acompañamiento.",
          de: "Sunomono ist ein japanischer Salat aus eingelegtem Gemüse, meist Gurken, angemacht mit Reisessig, Zucker und Salz. Er ist leicht, erfrischend und wird oft als Gaumenreiniger oder Beilage serviert.",
          nl: "Sunomono is een Japanse salade van ingelegde groenten, meestal komkommer, aangekleed met rijstazijn, suiker en zout. Het is licht, verfrissend en wordt vaak geserveerd als smaakmaker of bijgerecht."
        }
      },
      {
        question: {
          en: "What distinguishes the Moroccan Orange and Olive Salad?",
          es: "¿Qué distingue a la Ensalada Marroquí de Naranja y Aceitunas?",
          de: "Was zeichnet den marokkanischen Orangen- und Oliven-Salat aus?",
          nl: "Wat onderscheidt de Marokkaanse Sinaasappel en Olijf Salade?"
        },
        options: [
          { en: "Sweet oranges paired with olives, red onions, and Middle Eastern spices", es: "Naranjas dulces combinadas con aceitunas, cebollas rojas y especias de Medio Oriente", de: "Süße Orangen gepaart mit Oliven, roten Zwiebeln und nahöstlichen Gewürzen", nl: "Zoete sinaasappels gepaard met olijven, rode uien en Midden-Oosterse kruiden" },
          { en: "Only citrus fruits without any vegetables", es: "Solo frutas cítricas sin verduras", de: "Nur Zitrusfrüchte ohne Gemüse", nl: "Alleen citrusvruchten zonder groenten" },
          { en: "Cooked oranges with dairy products", es: "Naranjas cocidas con productos lácteos", de: "Gekochte Orangen mit Milchprodukten", nl: "Gekookte sinaasappels met zuivelproducten" },
          { en: "Spicy oranges with hot peppers only", es: "Naranjas picantes solo con chiles", de: "Scharfe Orangen nur mit scharfen Paprika", nl: "Pittige sinaasappels met alleen hete pepers" }
        ],
        correct: 0,
        explanation: {
          en: "Moroccan Orange and Olive Salad combines sweet oranges with black or green olives, thinly sliced red onions, and is seasoned with cumin, cinnamon, and olive oil. It's a refreshing contrast of sweet, salty, and aromatic flavors.",
          es: "La Ensalada Marroquí de Naranja y Aceitunas combina naranjas dulces con aceitunas negras o verdes, cebollas rojas finamente rebanadas, y se sazona con comino, canela y aceite de oliva. Es un contraste refrescante de sabores dulces, salados y aromáticos.",
          de: "Marokkanischer Orangen- und Oliven-Salat kombiniert süße Orangen mit schwarzen oder grünen Oliven, dünn geschnittenen roten Zwiebeln und wird mit Kreuzkümmel, Zimt und Olivenöl gewürzt. Es ist ein erfrischender Kontrast aus süßen, salzigen und aromatischen Aromen.",
          nl: "Marokkaanse Sinaasappel en Olijf Salade combineert zoete sinaasappels met zwarte of groene olijven, dun gesneden rode uien, en wordt gekruid met komijn, kaneel en olijfolie. Het is een verfrissend contrast van zoete, zoute en aromatische smaken."
        }
      },
      {
        question: {
          en: "What characterizes the traditional Indian Kachumber salad?",
          es: "¿Qué caracteriza a la ensalada tradicional india Kachumber?",
          de: "Was charakterisiert den traditionellen indischen Kachumber-Salat?",
          nl: "Wat kenmerkt de traditionele Indiase Kachumber salade?"
        },
        options: [
          { en: "Finely chopped raw vegetables with lemon juice and spices", es: "Verduras crudas finamente picadas con jugo de limón y especias", de: "Fein gehacktes rohes Gemüse mit Zitronensaft und Gewürzen", nl: "Fijn gehakte rauwe groenten met citroensap en kruiden" },
          { en: "Cooked vegetables in curry sauce", es: "Verduras cocidas en salsa de curry", de: "Gekochtes Gemüse in Curry-Sauce", nl: "Gekookte groenten in curry saus" },
          { en: "Only fruits with yogurt", es: "Solo frutas con yogur", de: "Nur Früchte mit Joghurt", nl: "Alleen vruchten met yoghurt" },
          { en: "Meat-based salad with heavy spices", es: "Ensalada a base de carne con especias fuertes", de: "Fleischbasierter Salat mit schweren Gewürzen", nl: "Op vlees gebaseerde salade met zware kruiden" }
        ],
        correct: 0,
        explanation: {
          en: "Kachumber is a fresh Indian salad made with finely chopped tomatoes, cucumbers, onions, and sometimes radishes, dressed with lemon juice, salt, and spices like chaat masala. It's served as a cooling side dish with spicy meals.",
          es: "Kachumber es una ensalada india fresca hecha con tomates finamente picados, pepinos, cebollas y a veces rábanos, aderezada con jugo de limón, sal y especias como chaat masala. Se sirve como plato de acompañamiento refrescante con comidas picantes.",
          de: "Kachumber ist ein frischer indischer Salat aus fein gehackten Tomaten, Gurken, Zwiebeln und manchmal Radieschen, angemacht mit Zitronensaft, Salz und Gewürzen wie Chaat Masala. Er wird als kühlende Beilage zu scharfen Mahlzeiten serviert.",
          nl: "Kachumber is een verse Indiase salade gemaakt met fijn gehakte tomaten, komkommers, uien en soms radijsjes, aangekleed met citroensap, zout en kruiden zoals chaat masala. Het wordt geserveerd als verkoelend bijgerecht bij pittige maaltijden."
        }
      },
      {
        question: {
          en: "What is unique about Russian Olivier Salad (Russian Potato Salad)?",
          es: "¿Qué es único acerca de la Ensalada Olivier rusa (Ensalada rusa de papa)?",
          de: "Was ist einzigartig am russischen Olivier-Salat (Russischer Kartoffelsalat)?",
          nl: "Wat is uniek aan Russische Olivier Salade (Russische Aardappelsalade)?"
        },
        options: [
          { en: "Contains diced potatoes, carrots, eggs, pickles, and mayonnaise", es: "Contiene papas en cubitos, zanahorias, huevos, pepinillos y mayonesa", de: "Enthält gewürfelte Kartoffeln, Karotten, Eier, Essiggurken und Mayonnaise", nl: "Bevat blokjes aardappels, wortels, eieren, augurken en mayonaise" },
          { en: "Made only with raw vegetables", es: "Hecho solo con verduras crudas", de: "Nur mit rohem Gemüse gemacht", nl: "Gemaakt met alleen rauwe groenten" },
          { en: "Contains exclusively seafood ingredients", es: "Contiene exclusivamente ingredientes de mariscos", de: "Enthält ausschließlich Meeresfrüchte-Zutaten", nl: "Bevat uitsluitend zeevruchten ingrediënten" },
          { en: "Uses only fruits and nuts", es: "Usa solo frutas y nueces", de: "Verwendet nur Früchte und Nüsse", nl: "Gebruikt alleen vruchten en noten" }
        ],
        correct: 0,
        explanation: {
          en: "Olivier Salad, also known as Russian Potato Salad, contains diced boiled potatoes, carrots, hard-boiled eggs, pickles, and sometimes peas or meat, all bound together with mayonnaise. It's a staple at Russian celebrations.",
          es: "La Ensalada Olivier, también conocida como Ensalada Rusa de Papa, contiene papas hervidas en cubitos, zanahorias, huevos duros, pepinillos y a veces guisantes o carne, todo unido con mayonesa. Es básica en celebraciones rusas.",
          de: "Olivier-Salat, auch als Russischer Kartoffelsalat bekannt, enthält gewürfelte gekochte Kartoffeln, Karotten, hartgekochte Eier, Essiggurken und manchmal Erbsen oder Fleisch, alles mit Mayonnaise verbunden. Er ist ein Grundnahrungsmittel bei russischen Feiern.",
          nl: "Olivier Salade, ook bekend als Russische Aardappelsalade, bevat blokjes gekookte aardappels, wortels, hardgekookte eieren, augurken en soms erwten of vlees, allemaal samengehouden met mayonaise. Het is een hoofdbestanddeel bij Russische vieringen."
        }
      },
      {
        question: {
          en: "What makes Brazilian Salpicão different from other mayonnaise-based salads?",
          es: "¿Qué hace diferente al Salpicão brasileño de otras ensaladas a base de mayonesa?",
          de: "Was macht den brasilianischen Salpicão anders als andere Mayonnaise-basierte Salate?",
          nl: "Wat maakt Braziliaanse Salpicão anders dan andere mayonaise-gebaseerde salades?"
        },
        options: [
          { en: "Contains shredded chicken, vegetables, fruits, and potato sticks", es: "Contiene pollo desmenuzado, verduras, frutas y papitas en bastón", de: "Enthält zerkleinertes Huhn, Gemüse, Früchte und Kartoffelsticks", nl: "Bevat geraspte kip, groenten, vruchten en aardappelstokjes" },
          { en: "Made only with seafood and seaweed", es: "Hecho solo con mariscos y algas marinas", de: "Nur mit Meeresfrüchten und Seetang gemacht", nl: "Gemaakt met alleen zeevruchten en zeewier" },
          { en: "Contains exclusively raw vegetables", es: "Contiene exclusivamente verduras crudas", de: "Enthält ausschließlich rohes Gemüse", nl: "Bevat uitsluitend rauwe groenten" },
          { en: "Uses only tropical spices and herbs", es: "Usa solo especias y hierbas tropicales", de: "Verwendet nur tropische Gewürze und Kräuter", nl: "Gebruikt alleen tropische kruiden en specerijen" }
        ],
        correct: 0,
        explanation: {
          en: "Brazilian Salpicão combines shredded chicken with diced vegetables (carrots, peas), fruits (apples, grapes), and crunchy potato sticks, all mixed with mayonnaise. It's a popular dish at Brazilian parties and gatherings.",
          es: "El Salpicão brasileño combina pollo desmenuzado con verduras en cubitos (zanahorias, guisantes), frutas (manzanas, uvas) y papitas crujientes en bastón, todo mezclado con mayonesa. Es un plato popular en fiestas y reuniones brasileñas.",
          de: "Brasilianischer Salpicão kombiniert zerkleinertes Huhn mit gewürfeltem Gemüse (Karotten, Erbsen), Früchten (Äpfel, Trauben) und knusprigen Kartoffelsticks, alles mit Mayonnaise gemischt. Es ist ein beliebtes Gericht bei brasilianischen Partys und Zusammenkünften.",
          nl: "Braziliaanse Salpicão combineert geraspte kip met blokjes groenten (wortels, erwten), vruchten (appels, druiven), en knapperige aardappelstokjes, allemaal gemengd met mayonaise. Het is een populair gerecht bij Braziliaanse feesten en bijeenkomsten."
        }
      },
      {
        question: {
          en: "What is the key element of Korean Banchan salads?",
          es: "¿Cuál es el elemento clave de las ensaladas Banchan coreanas?",
          de: "Was ist das Schlüsselelement koreanischer Banchan-Salate?",
          nl: "Wat is het sleutelelement van Koreaanse Banchan salades?"
        },
        options: [
          { en: "Fermented and pickled vegetables with bold, spicy flavors", es: "Verduras fermentadas y encurtidas con sabores audaces y picantes", de: "Fermentiertes und eingelegtes Gemüse mit kräftigen, scharfen Aromen", nl: "Gefermenteerde en ingelegde groenten met gedurfde, pittige smaken" },
          { en: "Only sweet fruits and cream", es: "Solo frutas dulces y crema", de: "Nur süße Früchte und Sahne", nl: "Alleen zoete vruchten en room" },
          { en: "Raw fish with mild seasonings", es: "Pescado crudo con condimentos suaves", de: "Roher Fisch mit milden Gewürzen", nl: "Rauwe vis met milde kruiden" },
          { en: "Cooked grains without vegetables", es: "Granos cocidos sin verduras", de: "Gekochtes Getreide ohne Gemüse", nl: "Gekookte granen zonder groenten" }
        ],
        correct: 0,
        explanation: {
          en: "Korean Banchan salads feature fermented and pickled vegetables like kimchi, seasoned with ingredients like gochujang (chili paste), sesame oil, and garlic. They're characterized by bold, complex flavors that are spicy, sour, and umami-rich.",
          es: "Las ensaladas Banchan coreanas presentan verduras fermentadas y encurtidas como kimchi, sazonadas con ingredientes como gochujang (pasta de chile), aceite de sésamo y ajo. Se caracterizan por sabores audaces y complejos que son picantes, agrios y ricos en umami.",
          de: "Koreanische Banchan-Salate zeigen fermentiertes und eingelegtes Gemüse wie Kimchi, gewürzt mit Zutaten wie Gochujang (Chili-Paste), Sesamöl und Knoblauch. Sie sind charakterisiert durch kräftige, komplexe Aromen, die scharf, sauer und umami-reich sind.",
          nl: "Koreaanse Banchan salades bevatten gefermenteerde en ingelegde groenten zoals kimchi, gekruid met ingrediënten zoals gochujang (chili pasta), sesamolie en knoflook. Ze worden gekenmerkt door gedurfde, complexe smaken die pittig, zuur en umami-rijk zijn."
        }
      },
      {
        question: {
          en: "What characterizes the traditional Turkish Çoban Salad (Shepherd's Salad)?",
          es: "¿Qué caracteriza a la ensalada tradicional turca Çoban (Ensalada del Pastor)?",
          de: "Was charakterisiert den traditionellen türkischen Çoban-Salat (Hirtensalat)?",
          nl: "Wat kenmerkt de traditionele Turkse Çoban Salade (Herderssalade)?"
        },
        options: [
          { en: "Finely chopped tomatoes, cucumbers, onions, and peppers with olive oil and lemon", es: "Tomates finamente picados, pepinos, cebollas y pimientos con aceite de oliva y limón", de: "Fein gehackte Tomaten, Gurken, Zwiebeln und Paprika mit Olivenöl und Zitrone", nl: "Fijn gehakte tomaten, komkommers, uien en paprika's met olijfolie en citroen" },
          { en: "Cooked lamb with heavy spices", es: "Cordero cocido con especias fuertes", de: "Gekochtes Lamm mit schweren Gewürzen", nl: "Gekookt lamsvlees met zware kruiden" },
          { en: "Only cheese and bread", es: "Solo queso y pan", de: "Nur Käse und Brot", nl: "Alleen kaas en brood" },
          { en: "Sweet fruits with honey dressing", es: "Frutas dulces con aderezo de miel", de: "Süße Früchte mit Honig-Dressing", nl: "Zoete vruchten met honing dressing" }
        ],
        correct: 0,
        explanation: {
          en: "Turkish Çoban Salad is made with very finely diced tomatoes, cucumbers, white onions, green peppers, and fresh herbs like parsley, dressed simply with olive oil, lemon juice, and salt. The vegetables must be cut uniformly small.",
          es: "La Ensalada Çoban turca se hace con tomates muy finamente en cubitos, pepinos, cebollas blancas, pimientos verdes y hierbas frescas como perejil, aderezada simplemente con aceite de oliva, jugo de limón y sal. Las verduras deben cortarse uniformemente pequeñas.",
          de: "Türkischer Çoban-Salat wird mit sehr fein gewürfelten Tomaten, Gurken, weißen Zwiebeln, grünen Paprika und frischen Kräutern wie Petersilie gemacht, einfach mit Olivenöl, Zitronensaft und Salz angemacht. Das Gemüse muss gleichmäßig klein geschnitten werden.",
          nl: "Turkse Çoban Salade wordt gemaakt met zeer fijn gesneden tomaten, komkommers, witte uien, groene paprika's en verse kruiden zoals peterselie, eenvoudig aangekleed met olijfolie, citroensap en zout. De groenten moeten gelijkmatig klein gesneden worden."
        }
      },
      {
        question: {
          en: "What makes Vietnamese Nộm (Green Mango Salad) distinctive?",
          es: "¿Qué hace distintiva a la ensalada vietnamita Nộm (Ensalada de Mango Verde)?",
          de: "Was macht den vietnamesischen Nộm (Grüner Mango-Salat) charakteristisch?",
          nl: "Wat maakt Vietnamese Nộm (Groene Mango Salade) onderscheidend?"
        },
        options: [
          { en: "Shredded green mango with herbs, peanuts, and sweet-sour-spicy dressing", es: "Mango verde rallado con hierbas, cacahuetes y aderezo dulce-agrio-picante", de: "Geraspelte grüne Mango mit Kräutern, Erdnüssen und süß-sauer-scharfem Dressing", nl: "Geraspte groene mango met kruiden, pinda's en zoet-zuur-pittige dressing" },
          { en: "Only ripe sweet mangoes with cream", es: "Solo mangos maduros dulces con crema", de: "Nur reife süße Mangos mit Sahne", nl: "Alleen rijpe zoete mango's met room" },
          { en: "Cooked mango with meat", es: "Mango cocido con carne", de: "Gekochte Mango mit Fleisch", nl: "Gekookte mango met vlees" },
          { en: "Dried mango pieces with nuts", es: "Trozos de mango seco con nueces", de: "Getrocknete Mangostücke mit Nüssen", nl: "Gedroogde mango stukjes met noten" }
        ],
        correct: 0,
        explanation: {
          en: "Vietnamese Nộm features julienned green (unripe) mango mixed with fresh herbs like Vietnamese coriander and mint, roasted peanuts, and a dressing made with lime juice, fish sauce, sugar, and chili - creating a perfect balance of textures and flavors.",
          es: "El Nộm vietnamita presenta mango verde (inmaduro) en juliana mezclado con hierbas frescas como cilantro vietnamita y menta, cacahuetes tostados, y un aderezo hecho con jugo de lima, salsa de pescado, azúcar y chile - creando un equilibrio perfecto de texturas y sabores.",
          de: "Vietnamesischer Nộm zeigt julienned grüne (unreife) Mango gemischt mit frischen Kräutern wie vietnamesischem Koriander und Minze, gerösteten Erdnüssen und einem Dressing aus Limettensaft, Fischsauce, Zucker und Chili - was ein perfektes Gleichgewicht aus Texturen und Aromen schafft.",
          nl: "Vietnamese Nộm bevat julienne gesneden groene (onrijpe) mango gemengd met verse kruiden zoals Vietnamese koriander en munt, geroosterde pinda's, en een dressing gemaakt met limoensap, vissaus, suiker en chili - wat een perfecte balans van texturen en smaken creëert."
        }
      },
      {
        question: {
          en: "What is the traditional preparation method for Italian Panzanella salad?",
          es: "¿Cuál es el método de preparación tradicional para la ensalada italiana Panzanella?",
          de: "Was ist die traditionelle Zubereitungsmethode für den italienischen Panzanella-Salat?",
          nl: "Wat is de traditionele bereidingsmethode voor Italiaanse Panzanella salade?"
        },
        options: [
          { en: "Stale bread soaked and mixed with tomatoes, basil, and olive oil", es: "Pan duro remojado y mezclado con tomates, albahaca y aceite de oliva", de: "Altes Brot eingeweicht und mit Tomaten, Basilikum und Olivenöl gemischt", nl: "Oud brood geweekt en gemengd met tomaten, basilicum en olijfolie" },
          { en: "Only fresh vegetables without any bread", es: "Solo verduras frescas sin pan", de: "Nur frisches Gemüse ohne Brot", nl: "Alleen verse groenten zonder brood" },
          { en: "Hot toasted bread with cold vegetables", es: "Pan tostado caliente con verduras frías", de: "Heißes getoastetes Brot mit kaltem Gemüse", nl: "Heet geroosterd brood met koude groenten" },
          { en: "Bread crumbs mixed with cooked vegetables", es: "Migas de pan mezcladas con verduras cocidas", de: "Brotkrumen mit gekochtem Gemüse gemischt", nl: "Broodkruimels gemengd met gekookte groenten" }
        ],
        correct: 0,
        explanation: {
          en: "Traditional Panzanella uses day-old bread that's soaked in water, squeezed out, and mixed with ripe tomatoes, fresh basil, red onions, and dressed with olive oil and vinegar. It's a clever way to use stale bread and showcase peak summer tomatoes.",
          es: "La Panzanella tradicional usa pan de un día que se remoja en agua, se escurre y se mezcla con tomates maduros, albahaca fresca, cebollas rojas y se adereza con aceite de oliva y vinagre. Es una manera inteligente de usar pan duro y mostrar tomates de verano en su punto.",
          de: "Traditionelle Panzanella verwendet ein Tag altes Brot, das in Wasser eingeweicht, ausgedrückt und mit reifen Tomaten, frischem Basilikum, roten Zwiebeln gemischt und mit Olivenöl und Essig angemacht wird. Es ist ein cleverer Weg, altes Brot zu verwenden und Sommertomaten zu präsentieren.",
          nl: "Traditionele Panzanella gebruikt een dag oud brood dat geweekt wordt in water, uitgeknepen en gemengd met rijpe tomaten, verse basilicum, rode uien en aangekleed met olijfolie en azijn. Het is een slimme manier om oud brood te gebruiken en zomer tomaten te tonen."
        }
      },
      {
        question: {
          en: "What gives Lebanese Fattoush salad its distinctive crunch?",
          es: "¿Qué le da a la ensalada libanesa Fattoush su crujido distintivo?",
          de: "Was gibt dem libanesischen Fattoush-Salat seinen charakteristischen Crunch?",
          nl: "Wat geeft Libanese Fattoush salade zijn kenmerkende knapperigheid?"
        },
        options: [
          { en: "Toasted or fried pieces of pita bread", es: "Trozos tostados o fritos de pan pita", de: "Geröstete oder frittierte Stücke von Pita-Brot", nl: "Geroosterde of gebakken stukjes pita brood" },
          { en: "Crispy fried onions", es: "Cebollas fritas crujientes", de: "Knusprig frittierte Zwiebeln", nl: "Knapperige gebakken uien" },
          { en: "Roasted nuts and seeds", es: "Nueces y semillas tostadas", de: "Geröstete Nüsse und Samen", nl: "Geroosterde noten en zaden" },
          { en: "Crunchy lettuce only", es: "Solo lechuga crujiente", de: "Nur knackiger Salat", nl: "Alleen knapperige sla" }
        ],
        correct: 0,
        explanation: {
          en: "Fattoush gets its characteristic texture from toasted or fried pieces of pita bread mixed with fresh vegetables, herbs, and dressed with sumac and lemon juice. The crispy bread pieces provide a wonderful contrast to the fresh vegetables.",
          es: "Fattoush obtiene su textura característica de trozos tostados o fritos de pan pita mezclados con verduras frescas, hierbas y aderezados con sumac y jugo de limón. Los trozos de pan crujiente proporcionan un contraste maravilloso a las verduras frescas.",
          de: "Fattoush erhält seine charakteristische Textur durch geröstete oder frittierte Stücke von Pita-Brot, gemischt mit frischem Gemüse, Kräutern und angemacht mit Sumach und Zitronensaft. Die knusprigen Brotstücke bieten einen wunderbaren Kontrast zum frischen Gemüse.",
          nl: "Fattoush krijgt zijn karakteristieke textuur van geroosterde of gebakken stukjes pita brood gemengd met verse groenten, kruiden en aangekleed met sumak en citroensap. De knapperige broodstukjes bieden een prachtig contrast met de verse groenten."
        }
      },
      {
        question: {
          en: "What makes Peruvian Solterito salad unique to its region?",
          es: "¿Qué hace única a la ensalada peruana Solterito de su región?",
          de: "Was macht den peruanischen Solterito-Salat einzigartig für seine Region?",
          nl: "Wat maakt Peruaanse Solterito salade uniek voor zijn regio?"
        },
        options: [
          { en: "Contains native ingredients like fresh corn, lima beans, and ají peppers", es: "Contiene ingredientes nativos como maíz fresco, habas y ajíes", de: "Enthält einheimische Zutaten wie frischen Mais, Limabohnen und Ají-Paprika", nl: "Bevat inheemse ingrediënten zoals verse maïs, limabonen en ají pepers" },
          { en: "Made only with imported European vegetables", es: "Hecho solo con verduras europeas importadas", de: "Nur mit importiertem europäischem Gemüse gemacht", nl: "Gemaakt met alleen geïmporteerde Europese groenten" },
          { en: "Contains only seafood from the Pacific", es: "Contiene solo mariscos del Pacífico", de: "Enthält nur Meeresfrüchte aus dem Pazifik", nl: "Bevat alleen zeevruchten uit de Stille Oceaan" },
          { en: "Uses only tropical fruits", es: "Usa solo frutas tropicales", de: "Verwendet nur tropische Früchte", nl: "Gebruikt alleen tropische vruchten" }
        ],
        correct: 0,
        explanation: {
          en: "Solterito de Arequipa features ingredients native to Peru: fresh corn kernels, lima beans (habas), fresh cheese, red onions, and rocoto or ají peppers, dressed with olive oil and lime. It showcases Peru's indigenous agricultural heritage.",
          es: "Solterito de Arequipa presenta ingredientes nativos del Perú: granos de maíz fresco, habas, queso fresco, cebollas rojas y ajíes rocoto, aderezado con aceite de oliva y lima. Muestra el patrimonio agrícola indígena del Perú.",
          de: "Solterito de Arequipa zeigt Zutaten, die in Peru heimisch sind: frische Maiskörner, Limabohnen (Habas), frischer Käse, rote Zwiebeln und Rocoto- oder Ají-Paprika, angemacht mit Olivenöl und Limette. Es zeigt Perus indigenes landwirtschaftliches Erbe.",
          nl: "Solterito de Arequipa bevat ingrediënten die inheems zijn in Peru: verse maïskorrels, limabonen (habas), verse kaas, rode uien en rocoto of ají pepers, aangekleed met olijfolie en limoen. Het toont Peru's inheemse agrarische erfgoed."
        }
      },
      {
        question: {
          en: "What traditional technique is used in making Korean Oi Muchim (Cucumber Salad)?",
          es: "¿Qué técnica tradicional se usa para hacer el Oi Muchim coreano (Ensalada de Pepino)?",
          de: "Welche traditionelle Technik wird beim Herstellen von koreanischem Oi Muchim (Gurkensalat) verwendet?",
          nl: "Welke traditionele techniek wordt gebruikt bij het maken van Koreaanse Oi Muchim (Komkommersalade)?"
        },
        options: [
          { en: "Salting cucumbers to draw out water, then seasoning with sesame and chili", es: "Salar pepinos para extraer agua, luego sazonar con sésamo y chile", de: "Gurken salzen um Wasser zu entziehen, dann mit Sesam und Chili würzen", nl: "Komkommers zouten om water te onttrekken, dan kruiden met sesam en chili" },
          { en: "Cooking cucumbers in hot oil", es: "Cocinar pepinos en aceite caliente", de: "Gurken in heißem Öl kochen", nl: "Komkommers koken in hete olie" },
          { en: "Fermenting cucumbers for weeks", es: "Fermentar pepinos por semanas", de: "Gurken wochenlang fermentieren", nl: "Komkommers weken lang fermenteren" },
          { en: "Only using pickled cucumbers", es: "Solo usar pepinos encurtidos", de: "Nur eingelegte Gurken verwenden", nl: "Alleen ingemaakte komkommers gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Oi Muchim involves slicing cucumbers thin, salting them to draw out excess moisture, then squeezing out the liquid and seasoning with sesame oil, rice vinegar, gochugaru (chili flakes), garlic, and sometimes sesame seeds.",
          es: "Oi Muchim involucra rebanar pepinos finamente, salarlos para extraer exceso de humedad, luego exprimir el líquido y sazonar con aceite de sésamo, vinagre de arroz, gochugaru (hojuelas de chile), ajo y a veces semillas de sésamo.",
          de: "Oi Muchim beinhaltet Gurken dünn zu schneiden, sie zu salzen um überschüssige Feuchtigkeit zu entziehen, dann die Flüssigkeit auszudrücken und mit Sesamöl, Reisessig, Gochugaru (Chiliflocken), Knoblauch und manchmal Sesamsamen zu würzen.",
          nl: "Oi Muchim houdt in dat komkommers dun gesneden worden, gezouten om overtollig vocht te onttrekken, dan het vocht uitgeperst en gekruid met sesamolie, rijstazijn, gochugaru (chili vlokken), knoflook en soms sesamzaden."
        }
      },
      {
        question: {
          en: "What is the traditional Greek salad (Horiatiki) primarily composed of?",
          es: "¿De qué está compuesta principalmente la ensalada griega tradicional (Horiatiki)?",
          de: "Woraus besteht der traditionelle griechische Salat (Horiatiki) hauptsächlich?",
          nl: "Waar bestaat de traditionele Griekse salade (Horiatiki) voornamelijk uit?"
        },
        options: [
          { en: "Tomatoes, cucumbers, olives, feta cheese, and olive oil", es: "Tomates, pepinos, aceitunas, queso feta y aceite de oliva", de: "Tomaten, Gurken, Oliven, Feta-Käse und Olivenöl", nl: "Tomaten, komkommers, olijven, feta kaas en olijfolie" },
          { en: "Lettuce, croutons, parmesan, and caesar dressing", es: "Lechuga, crutones, parmesano y aderezo césar", de: "Salat, Croutons, Parmesan und Caesar-Dressing", nl: "Sla, croutons, parmezaan en caesar dressing" },
          { en: "Cabbage, carrots, and mayonnaise", es: "Repollo, zanahorias y mayonesa", de: "Kohl, Karotten und Mayonnaise", nl: "Kool, wortels en mayonaise" },
          { en: "Rice, beans, and corn", es: "Arroz, frijoles y maíz", de: "Reis, Bohnen und Mais", nl: "Rijst, bonen en maïs" }
        ],
        correct: 0,
        explanation: {
          en: "Traditional Greek Horiatiki salad consists of tomatoes, cucumbers, red onions, Kalamata olives, feta cheese, dressed with olive oil and vinegar. Notably, authentic Greek salad contains no lettuce.",
          es: "La ensalada griega tradicional Horiatiki consiste en tomates, pepinos, cebollas rojas, aceitunas Kalamata, queso feta, aderezada con aceite de oliva y vinagre. Notablemente, la ensalada griega auténtica no contiene lechuga.",
          de: "Der traditionelle griechische Horiatiki-Salat besteht aus Tomaten, Gurken, roten Zwiebeln, Kalamata-Oliven, Feta-Käse, angemacht mit Olivenöl und Essig. Bemerkenswert ist, dass der authentische griechische Salat keinen Salat enthält.",
          nl: "Traditionele Griekse Horiatiki salade bestaat uit tomaten, komkommers, rode uien, Kalamata olijven, feta kaas, aangekleed met olijfolie en azijn. Opmerkelijk is dat authentieke Griekse salade geen sla bevat."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  }
  return level5;
})();