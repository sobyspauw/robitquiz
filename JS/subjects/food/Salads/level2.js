// Salads Quiz - Level 2: Salad Types & Popular Recipes
(function() {
  const level2 = {
    name: {
      en: "Salads Level 2",
      es: "Ensaladas Nivel 2",
      de: "Salate Stufe 2",
      nl: "Salades Level 2"
    },
    questions: [
      {
        question: {
          en: "What are the main ingredients in a traditional Greek salad?",
          es: "¿Cuáles son los ingredientes principales en una ensalada griega tradicional?",
          de: "Was sind die Hauptzutaten in einem traditionellen griechischen Salat?",
          nl: "Wat zijn de hoofdingrediënten in een traditionele Griekse salade?"
        },
        options: [
          { en: "Tomatoes, cucumbers, olives, onions, feta cheese, olive oil", es: "Tomates, pepinos, aceitunas, cebollas, queso feta, aceite de oliva", de: "Tomaten, Gurken, Oliven, Zwiebeln, Feta-Käse, Olivenöl", nl: "Tomaten, komkommers, olijven, uien, fetakaas, olijfolie" },
          { en: "Lettuce, tomatoes, carrots, ranch dressing", es: "Lechuga, tomates, zanahorias, aderezo ranch", de: "Kopfsalat, Tomaten, Karotten, Ranch-Dressing", nl: "Sla, tomaten, wortels, ranch dressing" },
          { en: "Spinach, strawberries, pecans, goat cheese", es: "Espinaca, fresas, nueces pecanas, queso de cabra", de: "Spinat, Erdbeeren, Pekannüsse, Ziegenkäse", nl: "Spinazie, aardbeien, pecannoten, geitenkaas" },
          { en: "Cabbage, carrots, mayonnaise", es: "Col, zanahorias, mayonesa", de: "Kohl, Karotten, Mayonnaise", nl: "Kool, wortels, mayonaise" }
        ],
        correct: 0,
        explanation: {
          en: "Traditional Greek salad (horiatiki) consists of tomatoes, cucumbers, Kalamata olives, red onions, feta cheese, and olive oil with oregano. It typically doesn't include lettuce, despite common misconceptions in Western adaptations.",
          es: "La ensalada griega tradicional (horiatiki) consiste en tomates, pepinos, aceitunas Kalamata, cebollas rojas, queso feta y aceite de oliva con orégano. Típicamente no incluye lechuga, a pesar de concepciones erróneas comunes en adaptaciones occidentales.",
          de: "Traditioneller griechischer Salat (Horiatiki) besteht aus Tomaten, Gurken, Kalamata-Oliven, roten Zwiebeln, Feta-Käse und Olivenöl mit Oregano. Er enthält typischerweise keinen Kopfsalat, trotz häufiger Missverständnisse in westlichen Adaptionen.",
          nl: "Traditionele Griekse salade (horiatiki) bestaat uit tomaten, komkommers, Kalamata olijven, rode uien, fetakaas en olijfolie met oregano. Het bevat meestal geen sla, ondanks veelvoorkomende misverstanden in westerse aanpassingen."
        }
      },
      {
        question: {
          en: "What type of salad is a Caprese salad?",
          es: "¿Qué tipo de ensalada es una ensalada Caprese?",
          de: "Was für ein Salat ist ein Caprese-Salat?",
          nl: "Wat voor soort salade is een Caprese salade?"
        },
        options: [
          { en: "A composed salad featuring tomatoes, mozzarella, and basil", es: "Una ensalada compuesta con tomates, mozzarella y albahaca", de: "Ein komponierter Salat mit Tomaten, Mozzarella und Basilikum", nl: "Een samengestelde salade met tomaten, mozzarella en basilicum" },
          { en: "A green salad with mixed lettuces", es: "Una ensalada verde con lechugas mixtas", de: "Ein grüner Salat mit gemischten Salaten", nl: "Een groene salade met gemengde sla" },
          { en: "A pasta salad with vegetables", es: "Una ensalada de pasta con verduras", de: "Ein Nudelsalat mit Gemüse", nl: "Een pastasalade met groenten" },
          { en: "A fruit salad with citrus", es: "Una ensalada de frutas con cítricos", de: "Ein Obstsalat mit Zitrusfrüchten", nl: "Een fruitsalade met citrusvruchten" }
        ],
        correct: 0,
        explanation: {
          en: "Caprese salad is a composed salad from Italy featuring sliced tomatoes, fresh mozzarella cheese, and basil leaves, typically drizzled with olive oil and balsamic vinegar. The colors represent the Italian flag: red (tomatoes), white (mozzarella), and green (basil).",
          es: "La ensalada Caprese es una ensalada compuesta de Italia con tomates en rodajas, queso mozzarella fresco y hojas de albahaca, típicamente rociada con aceite de oliva y vinagre balsámico. Los colores representan la bandera italiana: rojo (tomates), blanco (mozzarella) y verde (albahaca).",
          de: "Caprese-Salat ist ein komponierter Salat aus Italien mit geschnittenen Tomaten, frischem Mozzarella-Käse und Basilikumblättern, typischerweise mit Olivenöl und Balsamico-Essig beträufelt. Die Farben repräsentieren die italienische Flagge: rot (Tomaten), weiß (Mozzarella) und grün (Basilikum).",
          nl: "Caprese salade is een samengestelde salade uit Italië met gesneden tomaten, verse mozzarellakaas en basilicumbladeren, meestal besprenkeld met olijfolie en balsamico azijn. De kleuren vertegenwoordigen de Italiaanse vlag: rood (tomaten), wit (mozzarella) en groen (basilicum)."
        }
      },
      {
        question: {
          en: "What distinguishes a Waldorf salad from other fruit salads?",
          es: "¿Qué distingue una ensalada Waldorf de otras ensaladas de frutas?",
          de: "Was unterscheidet einen Waldorf-Salat von anderen Obstsalaten?",
          nl: "Wat onderscheidt een Waldorf salade van andere fruitsalades?"
        },
        options: [
          { en: "It contains apples, celery, walnuts, and mayonnaise-based dressing", es: "Contiene manzanas, apio, nueces y aderezo a base de mayonesa", de: "Er enthält Äpfel, Sellerie, Walnüsse und Mayonnaise-basiertes Dressing", nl: "Het bevat appels, selderij, walnoten en mayonaise-gebaseerde dressing" },
          { en: "It only uses tropical fruits", es: "Solo usa frutas tropicales", de: "Er verwendet nur tropische Früchte", nl: "Het gebruikt alleen tropische vruchten" },
          { en: "It's served warm", es: "Se sirve caliente", de: "Er wird warm serviert", nl: "Het wordt warm geserveerd" },
          { en: "It contains no dressing", es: "No contiene aderezo", de: "Er enthält kein Dressing", nl: "Het bevat geen dressing" }
        ],
        correct: 0,
        explanation: {
          en: "Waldorf salad, created at the Waldorf Hotel in New York, traditionally contains diced apples, celery, and walnuts mixed with mayonnaise. The combination of fruit, vegetable, nuts, and creamy dressing makes it unique among fruit salads.",
          es: "La ensalada Waldorf, creada en el Hotel Waldorf en Nueva York, tradicionalmente contiene manzanas cortadas en cubitos, apio y nueces mezcladas con mayonesa. La combinación de fruta, verdura, nueces y aderezo cremoso la hace única entre las ensaladas de frutas.",
          de: "Waldorf-Salat, kreiert im Waldorf Hotel in New York, enthält traditionell gewürfelte Äpfel, Sellerie und Walnüsse, gemischt mit Mayonnaise. Die Kombination aus Obst, Gemüse, Nüssen und cremigem Dressing macht ihn einzigartig unter den Obstsalaten.",
          nl: "Waldorf salade, gecreëerd in het Waldorf Hotel in New York, bevat traditioneel blokjes appel, selderij en walnoten gemengd met mayonaise. De combinatie van fruit, groente, noten en romige dressing maakt het uniek onder fruitsalades."
        }
      },
      {
        question: {
          en: "What is the main protein in a traditional Niçoise salad?",
          es: "¿Cuál es la proteína principal en una ensalada Niçoise tradicional?",
          de: "Was ist das Hauptprotein in einem traditionellen Niçoise-Salat?",
          nl: "Wat is het hoofdeiwit in een traditionele Niçoise salade?"
        },
        options: [
          { en: "Chicken breast", es: "Pechuga de pollo", de: "Hähnchenbrust", nl: "Kipfilet" },
          { en: "Tuna", es: "Atún", de: "Thunfisch", nl: "Tonijn" },
          { en: "Salmon", es: "Salmón", de: "Lachs", nl: "Zalm" },
          { en: "Shrimp", es: "Camarones", de: "Garnelen", nl: "Garnalen" }
        ],
        correct: 1,
        explanation: {
          en: "Traditional Niçoise salad from Nice, France, features tuna as the main protein, along with hard-boiled eggs, olives, anchovies, tomatoes, and green beans. It's typically made with high-quality canned tuna or fresh tuna when available.",
          es: "La ensalada Niçoise tradicional de Niza, Francia, presenta atún como la proteína principal, junto con huevos duros, aceitunas, anchoas, tomates y judías verdes. Típicamente se hace con atún enlatado de alta calidad o atún fresco cuando está disponible.",
          de: "Traditioneller Niçoise-Salat aus Nizza, Frankreich, enthält Thunfisch als Hauptprotein, zusammen mit hartgekochten Eiern, Oliven, Sardellen, Tomaten und grünen Bohnen. Er wird typischerweise mit hochwertigem Dosenthunfisch oder frischem Thunfisch zubereitet, wenn verfügbar.",
          nl: "Traditionele Niçoise salade uit Nice, Frankrijk, bevat tonijn als hoofdeiwit, samen met hardgekookte eieren, olijven, ansjovis, tomaten en sperziebonen. Het wordt meestal gemaakt met hoogwaardige ingeblikte tonijn of verse tonijn wanneer beschikbaar."
        }
      },
      {
        question: {
          en: "What is the key characteristic of a chef's salad?",
          es: "¿Cuál es la característica clave de una ensalada del chef?",
          de: "Was ist das Hauptmerkmal eines Chef's Salad?",
          nl: "Wat is het belangrijkste kenmerk van een chef's salade?"
        },
        options: [
          { en: "It's made only by professional chefs", es: "Solo la hacen chefs profesionales", de: "Er wird nur von professionellen Köchen zubereitet", nl: "Het wordt alleen gemaakt door professionele koks" },
          { en: "It contains multiple proteins like ham, turkey, and cheese arranged on greens", es: "Contiene múltiples proteínas como jamón, pavo y queso organizados sobre hojas verdes", de: "Er enthält mehrere Proteine wie Schinken, Truthahn und Käse, angeordnet auf Grüns", nl: "Het bevat meerdere eiwitten zoals ham, kalkoen en kaas gerangschikt op groenten" },
          { en: "It's served hot", es: "Se sirve caliente", de: "Er wird heiß serviert", nl: "Het wordt warm geserveerd" },
          { en: "It only contains vegetables", es: "Solo contiene verduras", de: "Er enthält nur Gemüse", nl: "Het bevat alleen groenten" }
        ],
        correct: 1,
        explanation: {
          en: "A chef's salad is characterized by having multiple proteins (typically ham, turkey, and cheese) artfully arranged on a bed of mixed greens, along with other vegetables like tomatoes and hard-boiled eggs. It's designed to be a complete, filling meal.",
          es: "Una ensalada del chef se caracteriza por tener múltiples proteínas (típicamente jamón, pavo y queso) artísticamente organizadas sobre una cama de hojas verdes mixtas, junto con otras verduras como tomates y huevos duros. Está diseñada para ser una comida completa y abundante.",
          de: "Ein Chef's Salad zeichnet sich dadurch aus, dass er mehrere Proteine (typischerweise Schinken, Truthahn und Käse) kunstvoll auf einem Bett aus gemischten Grüns angeordnet hat, zusammen mit anderem Gemüse wie Tomaten und hartgekochten Eiern. Er ist als vollständige, sättigende Mahlzeit konzipiert.",
          nl: "Een chef's salade wordt gekenmerkt door meerdere eiwitten (meestal ham, kalkoen en kaas) kunstig gerangschikt op een bed van gemengde groenten, samen met andere groenten zoals tomaten en hardgekookte eieren. Het is ontworpen als een complete, vullende maaltijd."
        }
      },
      {
        question: {
          en: "What type of pasta is traditionally used in pasta salad?",
          es: "¿Qué tipo de pasta se usa tradicionalmente en ensalada de pasta?",
          de: "Welche Art von Pasta wird traditionell in Nudelsalat verwendet?",
          nl: "Welk type pasta wordt traditioneel gebruikt in pastasalade?"
        },
        options: [
          { en: "Long pasta like spaghetti or linguine", es: "Pasta larga como espaguetis o linguine", de: "Lange Pasta wie Spaghetti oder Linguine", nl: "Lange pasta zoals spaghetti of linguine" },
          { en: "Short, shaped pasta like rotini, penne, or fusilli", es: "Pasta corta con forma como rotini, penne o fusilli", de: "Kurze, geformte Pasta wie Rotini, Penne oder Fusilli", nl: "Korte, gevormde pasta zoals rotini, penne of fusilli" },
          { en: "Fresh pasta only", es: "Solo pasta fresca", de: "Nur frische Pasta", nl: "Alleen verse pasta" },
          { en: "Rice noodles", es: "Fideos de arroz", de: "Reisnudeln", nl: "Rijstnoedels" }
        ],
        correct: 1,
        explanation: {
          en: "Short, shaped pasta like rotini, penne, or fusilli is preferred for pasta salads because the shapes hold dressing better and are easier to eat with a fork. The curves and ridges in these pasta shapes help trap the dressing and other ingredients.",
          es: "La pasta corta con forma como rotini, penne o fusilli se prefiere para ensaladas de pasta porque las formas retienen mejor el aderezo y son más fáciles de comer con tenedor. Las curvas y crestas en estas formas de pasta ayudan a atrapar el aderezo y otros ingredientes.",
          de: "Kurze, geformte Pasta wie Rotini, Penne oder Fusilli wird für Nudelsalate bevorzugt, weil die Formen Dressing besser halten und mit einer Gabel leichter zu essen sind. Die Kurven und Rillen in diesen Pastaformen helfen dabei, Dressing und andere Zutaten zu fangen.",
          nl: "Korte, gevormde pasta zoals rotini, penne of fusilli heeft de voorkeur voor pastasalades omdat de vormen dressing beter vasthouden en gemakkelijker te eten zijn met een vork. De krommingen en ribbels in deze pastavormen helpen de dressing en andere ingrediënten vast te houden."
        }
      },
      {
        question: {
          en: "What is the main leafy green in a traditional Caesar salad?",
          es: "¿Cuál es la hoja verde principal en una ensalada César tradicional?",
          de: "Was ist das Hauptblattgrün in einem traditionellen Caesar-Salat?",
          nl: "Wat is de hoofdbladgroente in een traditionele Caesar salade?"
        },
        options: [
          { en: "Spinach", es: "Espinaca", de: "Spinat", nl: "Spinazie" },
          { en: "Romaine lettuce", es: "Lechuga romana", de: "Römersalat", nl: "Romeinse sla" },
          { en: "Iceberg lettuce", es: "Lechuga iceberg", de: "Eisbergsalat", nl: "IJsbergsla" },
          { en: "Arugula", es: "Rúcula", de: "Rucola", nl: "Rucola" }
        ],
        correct: 1,
        explanation: {
          en: "Romaine lettuce is the traditional and preferred leafy green for Caesar salad. Its sturdy leaves and slightly bitter flavor hold up well to the bold Caesar dressing, and the crisp texture provides the perfect contrast to the creamy dressing and crunchy croutons.",
          es: "La lechuga romana es la hoja verde tradicional y preferida para la ensalada César. Sus hojas resistentes y sabor ligeramente amargo se mantienen bien con el audaz aderezo César, y la textura crujiente proporciona el contraste perfecto con el aderezo cremoso y los picatostes crujientes.",
          de: "Römersalat ist das traditionelle und bevorzugte Blattgrün für Caesar-Salat. Seine robusten Blätter und leicht bittere Geschmack halten dem kräftigen Caesar-Dressing gut stand, und die knackige Textur bietet den perfekten Kontrast zum cremigen Dressing und knusprigen Croutons.",
          nl: "Romeinse sla is de traditionele en geprefereerde bladgroente voor Caesar salade. De stevige bladeren en licht bittere smaak houden goed stand tegen de krachtige Caesar dressing, en de knapperige textuur biedt het perfecte contrast met de romige dressing en knapperige croutons."
        }
      },
      {
        question: {
          en: "What is the defining characteristic of a Cobb salad?",
          es: "¿Cuál es la característica definitoria de una ensalada Cobb?",
          de: "Was ist das definierende Merkmal eines Cobb-Salats?",
          nl: "Wat is het bepalende kenmerk van een Cobb salade?"
        },
        options: [
          { en: "It's served in rows of different ingredients arranged on lettuce", es: "Se sirve en filas de diferentes ingredientes organizados sobre lechuga", de: "Er wird in Reihen verschiedener Zutaten serviert, die auf Kopfsalat angeordnet sind", nl: "Het wordt geserveerd in rijen van verschillende ingrediënten gerangschikt op sla" },
          { en: "It only contains corn", es: "Solo contiene maíz", de: "Er enthält nur Mais", nl: "Het bevat alleen maïs" },
          { en: "It's served hot", es: "Se sirve caliente", de: "Er wird heiß serviert", nl: "Het wordt warm geserveerd" },
          { en: "It contains only seafood", es: "Solo contiene mariscos", de: "Er enthält nur Meeresfrüchte", nl: "Het bevat alleen zeevruchten" }
        ],
        correct: 0,
        explanation: {
          en: "A Cobb salad is characterized by its neat rows of ingredients arranged on a bed of lettuce, typically including bacon, chicken, hard-boiled eggs, blue cheese, tomatoes, and avocado. This orderly presentation allows diners to see all ingredients clearly and mix them as desired.",
          es: "Una ensalada Cobb se caracteriza por sus filas ordenadas de ingredientes dispuestos sobre una cama de lechuga, típicamente incluyendo tocino, pollo, huevos duros, queso azul, tomates y aguacate. Esta presentación ordenada permite a los comensales ver todos los ingredientes claramente y mezclarlos como deseen.",
          de: "Ein Cobb-Salat zeichnet sich durch seine ordentlichen Reihen von Zutaten aus, die auf einem Bett aus Kopfsalat angeordnet sind, typischerweise mit Speck, Hähnchen, hartgekochten Eiern, Blauschimmelkäse, Tomaten und Avocado. Diese ordentliche Präsentation ermöglicht es den Gästen, alle Zutaten klar zu sehen und sie nach Wunsch zu mischen.",
          nl: "Een Cobb salade wordt gekenmerkt door zijn nette rijen ingrediënten gerangschikt op een bed van sla, meestal inclusief spek, kip, hardgekookte eieren, blauwe kaas, tomaten en avocado. Deze ordelijke presentatie stelt gasten in staat alle ingrediënten duidelijk te zien en ze naar wens te mengen."
        }
      },
      {
        question: {
          en: "What is the main ingredient that gives tabbouleh its distinctive flavor?",
          es: "¿Cuál es el ingrediente principal que le da al tabbouleh su sabor distintivo?",
          de: "Was ist die Hauptzutat, die Tabbouleh seinen charakteristischen Geschmack verleiht?",
          nl: "Wat is het hoofdingrediënt dat tabbouleh zijn kenmerkende smaak geeft?"
        },
        options: [
          { en: "Bulgur wheat", es: "Trigo bulgur", de: "Bulgurweizen", nl: "Bulgur tarwe" },
          { en: "Fresh parsley", es: "Perejil fresco", de: "Frische Petersilie", nl: "Verse peterselie" },
          { en: "Lemon juice", es: "Jugo de limón", de: "Zitronensaft", nl: "Citroensap" },
          { en: "Olive oil", es: "Aceite de oliva", de: "Olivenöl", nl: "Olijfolie" }
        ],
        correct: 1,
        explanation: {
          en: "Fresh parsley is the dominant ingredient in traditional tabbouleh, making up the majority of the salad. While bulgur wheat, lemon juice, and olive oil are important components, the abundant fresh parsley gives tabbouleh its distinctive bright, herbaceous flavor and green color.",
          es: "El perejil fresco es el ingrediente dominante en el tabbouleh tradicional, constituyendo la mayoría de la ensalada. Aunque el trigo bulgur, jugo de limón y aceite de oliva son componentes importantes, el abundante perejil fresco le da al tabbouleh su distintivo sabor brillante y herbáceo y color verde.",
          de: "Frische Petersilie ist die dominante Zutat in traditionellem Tabbouleh und macht den Großteil des Salats aus. Während Bulgurweizen, Zitronensaft und Olivenöl wichtige Komponenten sind, verleiht die reichliche frische Petersilie Tabbouleh seinen charakteristischen hellen, krautigen Geschmack und die grüne Farbe.",
          nl: "Verse peterselie is het dominante ingrediënt in traditionele tabbouleh en vormt het grootste deel van de salade. Hoewel bulgur tarwe, citroensap en olijfolie belangrijke componenten zijn, geeft de overvloedige verse peterselie tabbouleh zijn kenmerkende heldere, kruidachtige smaak en groene kleur."
        }
      },
      {
        question: {
          en: "What type of salad is a fattoush?",
          es: "¿Qué tipo de ensalada es un fattoush?",
          de: "Was für ein Salat ist Fattoush?",
          nl: "Wat voor soort salade is een fattoush?"
        },
        options: [
          { en: "A Middle Eastern bread salad with mixed vegetables and herbs", es: "Una ensalada de pan del Medio Oriente con verduras mixtas y hierbas", de: "Ein nahöstlicher Brotsalat mit gemischtem Gemüse und Kräutern", nl: "Een Midden-Oosterse broodsalade met gemengde groenten en kruiden" },
          { en: "A French potato salad", es: "Una ensalada de papa francesa", de: "Ein französischer Kartoffelsalat", nl: "Een Franse aardappelsalade" },
          { en: "An Italian pasta salad", es: "Una ensalada de pasta italiana", de: "Ein italienischer Nudelsalat", nl: "Een Italiaanse pastasalade" },
          { en: "A Mexican corn salad", es: "Una ensalada de maíz mexicana", de: "Ein mexikanischer Maissalat", nl: "Een Mexicaanse maïssalade" }
        ],
        correct: 0,
        explanation: {
          en: "Fattoush is a traditional Middle Eastern bread salad made with mixed vegetables, herbs, and pieces of toasted or fried flatbread (pita). The bread adds texture and substance, while vegetables like tomatoes, cucumbers, and herbs like mint and parsley provide freshness.",
          es: "Fattoush es una ensalada de pan tradicional del Medio Oriente hecha con verduras mixtas, hierbas y pedazos de pan plano tostado o frito (pita). El pan agrega textura y sustancia, mientras que verduras como tomates, pepinos y hierbas como menta y perejil proporcionan frescura.",
          de: "Fattoush ist ein traditioneller nahöstlicher Brotsalat aus gemischtem Gemüse, Kräutern und Stücken von geröstetem oder gebratenem Fladenbrot (Pita). Das Brot fügt Textur und Substanz hinzu, während Gemüse wie Tomaten, Gurken und Kräuter wie Minze und Petersilie für Frische sorgen.",
          nl: "Fattoush is een traditionele Midden-Oosterse broodsalade gemaakt met gemengde groenten, kruiden en stukjes geroosterd of gebakken platbrood (pita). Het brood voegt textuur en substantie toe, terwijl groenten zoals tomaten, komkommers en kruiden zoals munt en peterselie frisheid bieden."
        }
      },
      {
        question: {
          en: "What distinguishes a composed salad from a tossed salad?",
          es: "¿Qué distingue una ensalada compuesta de una ensalada mixta?",
          de: "Was unterscheidet einen komponierten Salat von einem gemischten Salat?",
          nl: "Wat onderscheidt een samengestelde salade van een gemengde salade?"
        },
        options: [
          { en: "Composed salads have ingredients arranged separately, tossed salads have mixed ingredients", es: "Las ensaladas compuestas tienen ingredientes organizados por separado, las ensaladas mixtas tienen ingredientes mezclados", de: "Komponierte Salate haben separat angeordnete Zutaten, gemischte Salate haben vermischte Zutaten", nl: "Samengestelde salades hebben ingrediënten apart gerangschikt, gemengde salades hebben gemixte ingrediënten" },
          { en: "Composed salads are hot, tossed salads are cold", es: "Las ensaladas compuestas están calientes, las ensaladas mixtas están frías", de: "Komponierte Salate sind heiß, gemischte Salate sind kalt", nl: "Samengestelde salades zijn warm, gemengde salades zijn koud" },
          { en: "Composed salads use only vegetables, tossed salads include fruits", es: "Las ensaladas compuestas usan solo verduras, las ensaladas mixtas incluyen frutas", de: "Komponierte Salate verwenden nur Gemüse, gemischte Salate enthalten Früchte", nl: "Samengestelde salades gebruiken alleen groenten, gemengde salades bevatten fruit" },
          { en: "There is no difference", es: "No hay diferencia", de: "Es gibt keinen Unterschied", nl: "Er is geen verschil" }
        ],
        correct: 0,
        explanation: {
          en: "Composed salads have ingredients artfully arranged in separate sections or patterns on the plate, allowing each component to be appreciated individually. Tossed salads have all ingredients mixed together with dressing, creating a uniform distribution throughout.",
          es: "Las ensaladas compuestas tienen ingredientes artísticamente organizados en secciones o patrones separados en el plato, permitiendo que cada componente sea apreciado individualmente. Las ensaladas mixtas tienen todos los ingredientes mezclados con aderezo, creando una distribución uniforme en toda la ensalada.",
          de: "Komponierte Salate haben kunstvoll in separaten Abschnitten oder Mustern auf dem Teller angeordnete Zutaten, wodurch jede Komponente einzeln geschätzt werden kann. Gemischte Salate haben alle Zutaten mit Dressing vermischt, wodurch eine gleichmäßige Verteilung entsteht.",
          nl: "Samengestelde salades hebben ingrediënten kunstzinnig gerangschikt in aparte secties of patronen op het bord, waardoor elke component individueel gewaardeerd kan worden. Gemengde salades hebben alle ingrediënten vermengd met dressing, wat een uniforme verdeling creëert."
        }
      },
      {
        question: {
          en: "What is the traditional dressing for a spinach salad?",
          es: "¿Cuál es el aderezo tradicional para una ensalada de espinaca?",
          de: "Was ist das traditionelle Dressing für einen Spinatsalat?",
          nl: "Wat is de traditionele dressing voor een spinaziesalade?"
        },
        options: [
          { en: "Ranch dressing", es: "Aderezo ranch", de: "Ranch-Dressing", nl: "Ranch dressing" },
          { en: "Warm bacon vinaigrette", es: "Vinagreta tibia de tocino", de: "Warme Speck-Vinaigrette", nl: "Warme spek vinaigrette" },
          { en: "Caesar dressing", es: "Aderezo César", de: "Caesar-Dressing", nl: "Caesar dressing" },
          { en: "Italian dressing", es: "Aderezo italiano", de: "Italienisches Dressing", nl: "Italiaanse dressing" }
        ],
        correct: 1,
        explanation: {
          en: "Traditional spinach salad is typically served with warm bacon vinaigrette, which slightly wilts the spinach leaves and complements ingredients like hard-boiled eggs, mushrooms, and red onions. The warm dressing helps balance the sometimes bitter taste of raw spinach.",
          es: "La ensalada de espinaca tradicional típicamente se sirve con vinagreta tibia de tocino, que marchita ligeramente las hojas de espinaca y complementa ingredientes como huevos duros, hongos y cebollas rojas. El aderezo tibio ayuda a equilibrar el sabor a veces amargo de la espinaca cruda.",
          de: "Traditioneller Spinatsalat wird typischerweise mit warmer Speck-Vinaigrette serviert, die die Spinatblätter leicht welken lässt und Zutaten wie hartgekochte Eier, Pilze und rote Zwiebeln ergänzt. Das warme Dressing hilft, den manchmal bitteren Geschmack von rohem Spinat auszugleichen.",
          nl: "Traditionele spinaziesalade wordt meestal geserveerd met warme spek vinaigrette, die de spinaziebladeren licht laat verwelken en ingrediënten zoals hardgekookte eieren, champignons en rode uien aanvult. De warme dressing helpt de soms bittere smaak van rauwe spinazie te balanceren."
        }
      },
      {
        question: {
          en: "What makes a three-bean salad different from other legume salads?",
          es: "¿Qué hace que una ensalada de tres frijoles sea diferente de otras ensaladas de legumbres?",
          de: "Was macht einen Drei-Bohnen-Salat anders als andere Hülsenfrucht-Salate?",
          nl: "Wat maakt een driebonensalade anders dan andere peulvruchtensalades?"
        },
        options: [
          { en: "It contains exactly three different types of beans", es: "Contiene exactamente tres tipos diferentes de frijoles", de: "Er enthält genau drei verschiedene Arten von Bohnen", nl: "Het bevat precies drie verschillende soorten bonen" },
          { en: "It's served at three different temperatures", es: "Se sirve a tres temperaturas diferentes", de: "Er wird bei drei verschiedenen Temperaturen serviert", nl: "Het wordt bij drie verschillende temperaturen geserveerd" },
          { en: "It takes three hours to prepare", es: "Toma tres horas preparar", de: "Er braucht drei Stunden zur Vorbereitung", nl: "Het duurt drie uur om te bereiden" },
          { en: "It's only eaten three times a year", es: "Solo se come tres veces al año", de: "Er wird nur dreimal im Jahr gegessen", nl: "Het wordt slechts drie keer per jaar gegeten" }
        ],
        correct: 0,
        explanation: {
          en: "Three-bean salad traditionally contains three different varieties of beans, commonly green beans, yellow wax beans, and kidney beans, dressed with a vinegar-based marinade. This combination provides variety in color, texture, and flavor while maintaining nutritional balance.",
          es: "La ensalada de tres frijoles tradicionalmente contiene tres variedades diferentes de frijoles, comúnmente judías verdes, judías amarillas y frijoles rojos, aderezadas con una marinada a base de vinagre. Esta combinación proporciona variedad en color, textura y sabor mientras mantiene el equilibrio nutricional.",
          de: "Drei-Bohnen-Salat enthält traditionell drei verschiedene Bohnensorten, üblicherweise grüne Bohnen, gelbe Wachsbohnen und Kidneybohnen, die mit einer Essig-basierten Marinade angemacht werden. Diese Kombination bietet Vielfalt in Farbe, Textur und Geschmack bei gleichzeitiger Aufrechterhaltung des Nährstoffgleichgewichts.",
          nl: "Driebonensalade bevat traditioneel drie verschillende soorten bonen, meestal sperziebonen, gele wasbonen en kidneybonen, aangekleed met een azijn-gebaseerde marinade. Deze combinatie biedt variatie in kleur, textuur en smaak terwijl de voedingsbalans behouden blijft."
        }
      },
      {
        question: {
          en: "What is the signature ingredient in an antipasto salad?",
          es: "¿Cuál es el ingrediente característico en una ensalada antipasto?",
          de: "Was ist die charakteristische Zutat in einem Antipasto-Salat?",
          nl: "Wat is het kenmerkende ingrediënt in een antipasto salade?"
        },
        options: [
          { en: "A variety of Italian cured meats and cheeses", es: "Una variedad de carnes curadas italianas y quesos", de: "Eine Vielfalt italienischer geräucherter Fleischwaren und Käse", nl: "Een verscheidenheid aan Italiaanse gedroogde vleeswaren en kazen" },
          { en: "Only fresh vegetables", es: "Solo verduras frescas", de: "Nur frisches Gemüse", nl: "Alleen verse groenten" },
          { en: "Seafood only", es: "Solo mariscos", de: "Nur Meeresfrüchte", nl: "Alleen zeevruchten" },
          { en: "Pasta", es: "Pasta", de: "Pasta", nl: "Pasta" }
        ],
        correct: 0,
        explanation: {
          en: "Antipasto salad is characterized by its variety of Italian cured meats (like salami, prosciutto), cheeses (like mozzarella, provolone), olives, and marinated vegetables. 'Antipasto' means 'before the meal' in Italian, and this salad represents the traditional Italian appetizer course.",
          es: "La ensalada antipasto se caracteriza por su variedad de carnes curadas italianas (como salami, prosciutto), quesos (como mozzarella, provolone), aceitunas y verduras marinadas. 'Antipasto' significa 'antes de la comida' en italiano, y esta ensalada representa el curso tradicional italiano de aperitivo.",
          de: "Antipasto-Salat zeichnet sich durch seine Vielfalt italienischer geräucherter Fleischwaren (wie Salami, Prosciutto), Käse (wie Mozzarella, Provolone), Oliven und marinierten Gemüse aus. 'Antipasto' bedeutet 'vor dem Essen' auf Italienisch, und dieser Salat repräsentiert den traditionellen italienischen Vorspeisengang.",
          nl: "Antipasto salade wordt gekenmerkt door zijn verscheidenheid aan Italiaanse gedroogde vleeswaren (zoals salami, prosciutto), kazen (zoals mozzarella, provolone), olijven en gemarineerde groenten. 'Antipasto' betekent 'voor de maaltijd' in het Italiaans, en deze salade vertegenwoordigt de traditionele Italiaanse voorgerechtengang."
        }
      },
      {
        question: {
          en: "What is the main grain used in quinoa salad?",
          es: "¿Cuál es el grano principal usado en la ensalada de quinoa?",
          de: "Was ist das Hauptgetreide in Quinoa-Salat?",
          nl: "Wat is het hoofdgraan gebruikt in quinoa salade?"
        },
        options: [
          { en: "Rice", es: "Arroz", de: "Reis", nl: "Rijst" },
          { en: "Barley", es: "Cebada", de: "Gerste", nl: "Gerst" },
          { en: "Quinoa (which is actually a seed, not a grain)", es: "Quinoa (que en realidad es una semilla, no un grano)", de: "Quinoa (was eigentlich ein Samen ist, kein Getreide)", nl: "Quinoa (wat eigenlijk een zaad is, geen graan)" },
          { en: "Wheat", es: "Trigo", de: "Weizen", nl: "Tarwe" }
        ],
        correct: 2,
        explanation: {
          en: "Quinoa salad uses quinoa as its base, which is technically a seed rather than a grain, though it's often treated as a grain in cooking. Quinoa is prized for being a complete protein and having a light, fluffy texture that works well in cold salads.",
          es: "La ensalada de quinoa usa quinoa como su base, que técnicamente es una semilla en lugar de un grano, aunque a menudo se trata como un grano en la cocina. La quinoa es valorada por ser una proteína completa y tener una textura ligera y esponjosa que funciona bien en ensaladas frías.",
          de: "Quinoa-Salat verwendet Quinoa als Basis, was technisch gesehen eher ein Samen als ein Getreide ist, obwohl es beim Kochen oft als Getreide behandelt wird. Quinoa wird geschätzt, weil es ein vollständiges Protein ist und eine leichte, fluffige Textur hat, die gut in kalten Salaten funktioniert.",
          nl: "Quinoa salade gebruikt quinoa als basis, wat technisch gezien een zaad is in plaats van een graan, hoewel het vaak als graan behandeld wordt bij het koken. Quinoa wordt gewaardeerd omdat het een compleet eiwit is en een lichte, luchtige textuur heeft die goed werkt in koude salades."
        }
      },
      {
        question: {
          en: "What cooking method is typically used for vegetables in a German potato salad?",
          es: "¿Qué método de cocción se usa típicamente para las verduras en una ensalada de papa alemana?",
          de: "Welche Kochmethode wird typischerweise für Gemüse in einem deutschen Kartoffelsalat verwendet?",
          nl: "Welke kookmethode wordt meestal gebruikt voor groenten in een Duitse aardappelsalade?"
        },
        options: [
          { en: "Raw vegetables only", es: "Solo verduras crudas", de: "Nur rohes Gemüse", nl: "Alleen rauwe groenten" },
          { en: "Boiling", es: "Hervir", de: "Kochen", nl: "Koken" },
          { en: "Grilling", es: "Asar a la parrilla", de: "Grillen", nl: "Grillen" },
          { en: "Frying", es: "Freír", de: "Braten", nl: "Bakken" }
        ],
        correct: 1,
        explanation: {
          en: "German potato salad typically uses boiled potatoes as the base, and the vegetables are usually cooked (boiled). The warm potatoes are often dressed while still hot with a vinegar-based dressing, which helps them absorb the flavors better than cold potatoes would.",
          es: "La ensalada de papa alemana típicamente usa papas hervidas como base, y las verduras usualmente están cocidas (hervidas). Las papas tibias a menudo se aderezan mientras aún están calientes con un aderezo a base de vinagre, lo que les ayuda a absorber los sabores mejor que las papas frías.",
          de: "Deutscher Kartoffelsalat verwendet typischerweise gekochte Kartoffeln als Basis, und das Gemüse ist meist gekocht (gekocht). Die warmen Kartoffeln werden oft noch heiß mit einem Essig-basierten Dressing angemacht, was ihnen hilft, die Aromen besser zu absorbieren als kalte Kartoffeln.",
          nl: "Duitse aardappelsalade gebruikt meestal gekookte aardappelen als basis, en de groenten zijn meestal gekookt (gekookt). De warme aardappelen worden vaak nog heet aangekleed met een azijn-gebaseerde dressing, wat hen helpt de smaken beter te absorberen dan koude aardappelen zouden doen."
        }
      },
      {
        question: {
          en: "What distinguishes a fruit salad from other types of salads?",
          es: "¿Qué distingue una ensalada de frutas de otros tipos de ensaladas?",
          de: "Was unterscheidet einen Obstsalat von anderen Salatarten?",
          nl: "Wat onderscheidt een fruitsalade van andere soorten salades?"
        },
        options: [
          { en: "It consists primarily or entirely of fruits", es: "Consiste principalmente o completamente de frutas", de: "Er besteht hauptsächlich oder ganz aus Früchten", nl: "Het bestaat voornamelijk of geheel uit fruit" },
          { en: "It's only served for dessert", es: "Solo se sirve como postre", de: "Er wird nur als Dessert serviert", nl: "Het wordt alleen als dessert geserveerd" },
          { en: "It must contain citrus fruits", es: "Debe contener frutas cítricas", de: "Er muss Zitrusfrüchte enthalten", nl: "Het moet citrusvruchten bevatten" },
          { en: "It's always sweet", es: "Siempre es dulce", de: "Er ist immer süß", nl: "Het is altijd zoet" }
        ],
        correct: 0,
        explanation: {
          en: "Fruit salad is distinguished by consisting primarily or entirely of fruits, which can be fresh, dried, or a combination. While often served as dessert or a sweet side dish, fruit salads can also be savory and served as appetizers or light meals with appropriate dressings.",
          es: "La ensalada de frutas se distingue por consistir principalmente o completamente de frutas, que pueden ser frescas, secas o una combinación. Aunque a menudo se sirve como postre o acompañamiento dulce, las ensaladas de frutas también pueden ser saladas y servirse como aperitivos o comidas ligeras con aderezos apropiados.",
          de: "Obstsalat unterscheidet sich dadurch, dass er hauptsächlich oder ganz aus Früchten besteht, die frisch, getrocknet oder eine Kombination sein können. Während er oft als Dessert oder süße Beilage serviert wird, können Obstsalate auch herzhaft sein und als Vorspeisen oder leichte Mahlzeiten mit entsprechenden Dressings serviert werden.",
          nl: "Fruitsalade onderscheidt zich door voornamelijk of geheel uit fruit te bestaan, wat vers, gedroogd of een combinatie kan zijn. Hoewel vaak geserveerd als dessert of zoete bijgerecht, kunnen fruitsalades ook hartig zijn en geserveerd worden als voorgerechten of lichte maaltijden met passende dressings."
        }
      },
      {
        question: {
          en: "What is the key preparation step for making a successful macaroni salad?",
          es: "¿Cuál es el paso clave de preparación para hacer una ensalada de macarrones exitosa?",
          de: "Was ist der wichtigste Zubereitungsschritt für einen erfolgreichen Makkaroni-Salat?",
          nl: "Wat is de belangrijkste bereidingsstap voor het maken van een succesvolle macaroni salade?"
        },
        options: [
          { en: "Using only fresh pasta", es: "Usar solo pasta fresca", de: "Nur frische Pasta verwenden", nl: "Alleen verse pasta gebruiken" },
          { en: "Cooking pasta until very soft", es: "Cocinar la pasta hasta que esté muy suave", de: "Pasta sehr weich kochen", nl: "Pasta koken tot zeer zacht" },
          { en: "Cooling the pasta completely and dressing it while cool", es: "Enfriar la pasta completamente y aderezarla mientras está fría", de: "Die Pasta vollständig abkühlen und im kalten Zustand anmachen", nl: "De pasta volledig afkoelen en aankleden terwijl koel" },
          { en: "Adding dressing while pasta is hot", es: "Agregar aderezo mientras la pasta está caliente", de: "Dressing hinzufügen während die Pasta heiß ist", nl: "Dressing toevoegen terwijl pasta heet is" }
        ],
        correct: 2,
        explanation: {
          en: "The key to successful macaroni salad is cooling the pasta completely before adding the dressing. Hot pasta will cause mayonnaise-based dressings to break down and become oily. Properly cooled pasta maintains the right texture and allows the dressing to coat evenly.",
          es: "La clave para una ensalada de macarrones exitosa es enfriar la pasta completamente antes de agregar el aderezo. La pasta caliente causará que los aderezos a base de mayonesa se descompongan y se vuelvan aceitosos. La pasta apropiadamente enfriada mantiene la textura correcta y permite que el aderezo cubra uniformemente.",
          de: "Der Schlüssel zu erfolgreichem Makkaroni-Salat ist, die Pasta vollständig abzukühlen, bevor das Dressing hinzugefügt wird. Heiße Pasta wird dazu führen, dass Mayonnaise-basierte Dressings zerfallen und ölig werden. Richtig abgekühlte Pasta behält die richtige Textur und ermöglicht es dem Dressing, gleichmäßig zu umhüllen.",
          nl: "De sleutel tot succesvolle macaroni salade is de pasta volledig afkoelen voordat de dressing wordt toegevoegd. Hete pasta zal ervoor zorgen dat mayonaise-gebaseerde dressings afbreken en olieachtig worden. Goed afgekoelde pasta behoudt de juiste textuur en zorgt ervoor dat de dressing gelijkmatig bedekt."
        }
      },
      {
        question: {
          en: "What makes a panzanella salad unique among bread salads?",
          es: "¿Qué hace única a una ensalada panzanella entre las ensaladas de pan?",
          de: "Was macht einen Panzanella-Salat einzigartig unter den Brotsalaten?",
          nl: "Wat maakt een panzanella salade uniek onder broodsalades?"
        },
        options: [
          { en: "It uses stale bread soaked in tomato juices and olive oil", es: "Usa pan duro empapado en jugos de tomate y aceite de oliva", de: "Er verwendet altbackenes Brot, das in Tomatensäften und Olivenöl eingeweicht wird", nl: "Het gebruikt oud brood gedrenkt in tomatensappen en olijfolie" },
          { en: "It only uses fresh bread", es: "Solo usa pan fresco", de: "Er verwendet nur frisches Brot", nl: "Het gebruikt alleen vers brood" },
          { en: "It contains no vegetables", es: "No contiene verduras", de: "Er enthält kein Gemüse", nl: "Het bevat geen groenten" },
          { en: "It's served hot", es: "Se sirve caliente", de: "Er wird heiß serviert", nl: "Het wordt warm geserveerd" }
        ],
        correct: 0,
        explanation: {
          en: "Panzanella is a traditional Italian bread salad that uniquely uses day-old or stale bread that's soaked in the natural juices from ripe tomatoes and olive oil. This creates a wonderful texture where the bread absorbs flavors while maintaining some structure, distinguishing it from other bread salads.",
          es: "Panzanella es una ensalada de pan italiana tradicional que únicamente usa pan de un día o pan duro que se empapa en los jugos naturales de tomates maduros y aceite de oliva. Esto crea una textura maravillosa donde el pan absorbe sabores mientras mantiene algo de estructura, distinguiéndola de otras ensaladas de pan.",
          de: "Panzanella ist ein traditioneller italienischer Brotsalat, der einzigartig einen Tag altes oder altbackenes Brot verwendet, das in den natürlichen Säften von reifen Tomaten und Olivenöl eingeweicht wird. Dies schafft eine wunderbare Textur, bei der das Brot Aromen absorbiert, während es etwas Struktur behält, was ihn von anderen Brotsalaten unterscheidet.",
          nl: "Panzanella is een traditionele Italiaanse broodsalade die uniek een dag oud of oud brood gebruikt dat gedrenkt wordt in de natuurlijke sappen van rijpe tomaten en olijfolie. Dit creëert een prachtige textuur waarbij het brood smaken absorbeert terwijl het wat structuur behoudt, wat het onderscheidt van andere broodsalades."
        }
      },
      {
        question: {
          en: "What are the main ingredients in a traditional Greek salad?",
          es: "¿Cuáles son los ingredientes principales en una ensalada griega tradicional?",
          de: "Was sind die Hauptzutaten in einem traditionellen griechischen Salat?",
          nl: "Wat zijn de hoofdingrediënten in een traditionele Griekse salade?"
        },
        options: [
          { en: "Tomatoes, cucumbers, olives, onions, feta cheese, olive oil", es: "Tomates, pepinos, aceitunas, cebollas, queso feta, aceite de oliva", de: "Tomaten, Gurken, Oliven, Zwiebeln, Feta-Käse, Olivenöl", nl: "Tomaten, komkommers, olijven, uien, fetakaas, olijfolie" },
          { en: "Lettuce, tomatoes, carrots, ranch dressing", es: "Lechuga, tomates, zanahorias, aderezo ranch", de: "Kopfsalat, Tomaten, Karotten, Ranch-Dressing", nl: "Sla, tomaten, wortels, ranch dressing" },
          { en: "Spinach, strawberries, pecans, goat cheese", es: "Espinaca, fresas, nueces pecanas, queso de cabra", de: "Spinat, Erdbeeren, Pekannüsse, Ziegenkäse", nl: "Spinazie, aardbeien, pecannoten, geitenkaas" },
          { en: "Cabbage, carrots, mayonnaise", es: "Col, zanahorias, mayonesa", de: "Kohl, Karotten, Mayonnaise", nl: "Kool, wortels, mayonaise" }
        ],
        correct: 0,
        explanation: {
          en: "Traditional Greek salad (horiatiki) consists of tomatoes, cucumbers, Kalamata olives, red onions, feta cheese, and olive oil with oregano. It typically doesn't include lettuce, despite common misconceptions in Western adaptations.",
          es: "La ensalada griega tradicional (horiatiki) consiste en tomates, pepinos, aceitunas Kalamata, cebollas rojas, queso feta y aceite de oliva con orégano. Típicamente no incluye lechuga, a pesar de concepciones erróneas comunes en adaptaciones occidentales.",
          de: "Traditioneller griechischer Salat (Horiatiki) besteht aus Tomaten, Gurken, Kalamata-Oliven, roten Zwiebeln, Feta-Käse und Olivenöl mit Oregano. Er enthält typischerweise keinen Kopfsalat, trotz häufiger Missverständnisse in westlichen Adaptionen.",
          nl: "Traditionele Griekse salade (horiatiki) bestaat uit tomaten, komkommers, Kalamata olijven, rode uien, fetakaas en olijfolie met oregano. Het bevat meestal geen sla, ondanks veelvoorkomende misverstanden in westerse aanpassingen."
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