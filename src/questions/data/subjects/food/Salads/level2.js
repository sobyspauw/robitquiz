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
      },
      {
        question: {
          en: "What is the classic ratio of oil to vinegar in a traditional vinaigrette?",
          es: "¿Cuál es la proporción clásica de aceite a vinagre en una vinagreta tradicional?",
          de: "Was ist das klassische Verhältnis von Öl zu Essig in einer traditionellen Vinaigrette?",
          nl: "Wat is de klassieke verhouding van olie tot azijn in een traditionele vinaigrette?"
        },
        options: [
          { en: "1:1 (equal parts)", es: "1:1 (partes iguales)", de: "1:1 (gleiche Teile)", nl: "1:1 (gelijke delen)" },
          { en: "2:1 (two parts oil to one part vinegar)", es: "2:1 (dos partes de aceite a una parte de vinagre)", de: "2:1 (zwei Teile Öl zu einem Teil Essig)", nl: "2:1 (twee delen olie op één deel azijn)" },
          { en: "3:1 (three parts oil to one part vinegar)", es: "3:1 (tres partes de aceite a una parte de vinagre)", de: "3:1 (drei Teile Öl zu einem Teil Essig)", nl: "3:1 (drie delen olie op één deel azijn)" },
          { en: "4:1 (four parts oil to one part vinegar)", es: "4:1 (cuatro partes de aceite a una parte de vinagre)", de: "4:1 (vier Teile Öl zu einem Teil Essig)", nl: "4:1 (vier delen olie op één deel azijn)" }
        ],
        correct: 2,
        explanation: {
          en: "The classic vinaigrette ratio is 3:1, meaning three parts oil to one part vinegar or acidic component. This creates a balanced dressing that's neither too oily nor too acidic. However, this ratio can be adjusted to personal taste preferences.",
          es: "La proporción clásica de vinagreta es 3:1, lo que significa tres partes de aceite a una parte de vinagre o componente ácido. Esto crea un aderezo equilibrado que no es ni demasiado aceitoso ni demasiado ácido. Sin embargo, esta proporción puede ajustarse según preferencias personales.",
          de: "Das klassische Vinaigrette-Verhältnis ist 3:1, also drei Teile Öl zu einem Teil Essig oder saurer Komponente. Dies schafft ein ausgewogenes Dressing, das weder zu ölig noch zu sauer ist. Dieses Verhältnis kann jedoch an persönliche Geschmacksvorlieben angepasst werden.",
          nl: "De klassieke vinaigrette verhouding is 3:1, wat betekent drie delen olie op één deel azijn of zure component. Dit creëert een gebalanceerde dressing die noch te olieachtig noch te zuur is. Deze verhouding kan echter worden aangepast aan persoonlijke smaakvoorkeuren."
        }
      },
      {
        question: {
          en: "What gives blue cheese dressing its characteristic flavor?",
          es: "¿Qué le da al aderezo de queso azul su sabor característico?",
          de: "Was gibt Blauschimmelkäse-Dressing seinen charakteristischen Geschmack?",
          nl: "Wat geeft blauwe kaas dressing zijn kenmerkende smaak?"
        },
        options: [
          { en: "Crumbled blue cheese mixed into a creamy base", es: "Queso azul desmenuzado mezclado en una base cremosa", de: "Zerbröckelter Blauschimmelkäse in einer cremigen Basis", nl: "Verkruimelde blauwe kaas gemengd in een romige basis" },
          { en: "Blue food coloring", es: "Colorante alimentario azul", de: "Blaue Lebensmittelfarbe", nl: "Blauwe voedselkleurstof" },
          { en: "Blueberries", es: "Arándanos", de: "Blaubeeren", nl: "Blauwe bessen" },
          { en: "Blue corn", es: "Maíz azul", de: "Blauer Mais", nl: "Blauwe maïs" }
        ],
        correct: 0,
        explanation: {
          en: "Blue cheese dressing gets its distinctive tangy, sharp flavor from crumbled blue cheese (like Roquefort or Gorgonzola) mixed into a creamy base typically made with mayonnaise, sour cream, or buttermilk. The blue veining in the cheese comes from beneficial mold cultures.",
          es: "El aderezo de queso azul obtiene su distintivo sabor ácido y fuerte del queso azul desmenuzado (como Roquefort o Gorgonzola) mezclado en una base cremosa típicamente hecha con mayonesa, crema agria o suero de leche. Las vetas azules en el queso provienen de cultivos de moho beneficiosos.",
          de: "Blauschimmelkäse-Dressing erhält seinen charakteristischen würzigen, scharfen Geschmack durch zerbröckelten Blauschimmelkäse (wie Roquefort oder Gorgonzola), der in eine cremige Basis gemischt wird, die typischerweise aus Mayonnaise, Sauerrahm oder Buttermilch besteht. Die blaue Maserung im Käse stammt von nützlichen Schimmelkulturen.",
          nl: "Blauwe kaas dressing krijgt zijn kenmerkende pittige, scherpe smaak van verkruimelde blauwe kaas (zoals Roquefort of Gorgonzola) gemengd in een romige basis meestal gemaakt met mayonaise, zure room of karnemelk. De blauwe aderen in de kaas komen van gunstige schimmelculturen."
        }
      },
      {
        question: {
          en: "What is the main herb used in ranch dressing?",
          es: "¿Cuál es la hierba principal utilizada en el aderezo ranch?",
          de: "Was ist das Hauptkraut in Ranch-Dressing?",
          nl: "Wat is het belangrijkste kruid gebruikt in ranch dressing?"
        },
        options: [
          { en: "Basil", es: "Albahaca", de: "Basilikum", nl: "Basilicum" },
          { en: "Oregano", es: "Orégano", de: "Oregano", nl: "Oregano" },
          { en: "Dill", es: "Eneldo", de: "Dill", nl: "Dille" },
          { en: "Thyme", es: "Tomillo", de: "Thymian", nl: "Tijm" }
        ],
        correct: 2,
        explanation: {
          en: "Ranch dressing traditionally features dill as its main herb, along with other herbs like parsley and chives. The combination of buttermilk, mayonnaise, and herbs creates the distinctive creamy, tangy flavor that ranch dressing is known for.",
          es: "El aderezo ranch tradicionalmente presenta eneldo como su hierba principal, junto con otras hierbas como perejil y cebollino. La combinación de suero de leche, mayonesa y hierbas crea el distintivo sabor cremoso y ácido por el que es conocido el aderezo ranch.",
          de: "Ranch-Dressing enthält traditionell Dill als Hauptkraut, zusammen mit anderen Kräutern wie Petersilie und Schnittlauch. Die Kombination aus Buttermilch, Mayonnaise und Kräutern schafft den charakteristischen cremigen, würzigen Geschmack, für den Ranch-Dressing bekannt ist.",
          nl: "Ranch dressing bevat traditioneel dille als hoofdkruid, samen met andere kruiden zoals peterselie en bieslook. De combinatie van karnemelk, mayonaise en kruiden creëert de kenmerkende romige, pittige smaak waar ranch dressing om bekend staat."
        }
      },
      {
        question: {
          en: "What is the key ingredient that makes Thousand Island dressing pink?",
          es: "¿Cuál es el ingrediente clave que hace que el aderezo Mil Islas sea rosado?",
          de: "Was ist die Hauptzutat, die Thousand Island Dressing rosa macht?",
          nl: "Wat is het belangrijkste ingrediënt dat Thousand Island dressing roze maakt?"
        },
        options: [
          { en: "Tomato paste", es: "Pasta de tomate", de: "Tomatenmark", nl: "Tomatenpuree" },
          { en: "Ketchup or chili sauce", es: "Ketchup o salsa de chile", de: "Ketchup oder Chilisauce", nl: "Ketchup of chilisaus" },
          { en: "Beet juice", es: "Jugo de remolacha", de: "Rote-Bete-Saft", nl: "Bietensap" },
          { en: "Paprika", es: "Pimentón", de: "Paprika", nl: "Paprika" }
        ],
        correct: 1,
        explanation: {
          en: "Thousand Island dressing gets its distinctive pink color from ketchup or chili sauce mixed with mayonnaise. The dressing also typically includes pickle relish, hard-boiled eggs, and various seasonings, creating a sweet and tangy flavor profile.",
          es: "El aderezo Mil Islas obtiene su distintivo color rosado del ketchup o salsa de chile mezclado con mayonesa. El aderezo también típicamente incluye encurtido dulce, huevos duros y varios condimentos, creando un perfil de sabor dulce y ácido.",
          de: "Thousand Island Dressing erhält seine charakteristische rosa Farbe durch Ketchup oder Chilisauce, die mit Mayonnaise gemischt wird. Das Dressing enthält typischerweise auch Gewürzgurken-Relish, hartgekochte Eier und verschiedene Gewürze, was ein süßes und würziges Geschmacksprofil schafft.",
          nl: "Thousand Island dressing krijgt zijn kenmerkende roze kleur van ketchup of chilisaus gemengd met mayonaise. De dressing bevat meestal ook augurkenrelish, hardgekookte eieren en verschillende kruiden, wat een zoet en pittig smaakprofiel creëert."
        }
      },
      {
        question: {
          en: "What type of vinegar is traditionally used in balsamic vinaigrette?",
          es: "¿Qué tipo de vinagre se usa tradicionalmente en la vinagreta balsámica?",
          de: "Welche Art von Essig wird traditionell in Balsamico-Vinaigrette verwendet?",
          nl: "Welk type azijn wordt traditioneel gebruikt in balsamico vinaigrette?"
        },
        options: [
          { en: "White wine vinegar", es: "Vinagre de vino blanco", de: "Weißweinessig", nl: "Witte wijn azijn" },
          { en: "Apple cider vinegar", es: "Vinagre de sidra de manzana", de: "Apfelessig", nl: "Appelcider azijn" },
          { en: "Balsamic vinegar from Modena, Italy", es: "Vinagre balsámico de Módena, Italia", de: "Balsamico-Essig aus Modena, Italien", nl: "Balsamico azijn uit Modena, Italië" },
          { en: "Rice vinegar", es: "Vinagre de arroz", de: "Reisessig", nl: "Rijstazijn" }
        ],
        correct: 2,
        explanation: {
          en: "Balsamic vinaigrette uses balsamic vinegar, traditionally produced in Modena, Italy. This aged vinegar has a distinctive sweet-tart flavor and dark color. True aged balsamic vinegar is thick, complex, and made from grape must aged in wooden barrels for years.",
          es: "La vinagreta balsámica usa vinagre balsámico, tradicionalmente producido en Módena, Italia. Este vinagre añejado tiene un distintivo sabor agridulce y color oscuro. El verdadero vinagre balsámico añejado es espeso, complejo y hecho de mosto de uva añejado en barriles de madera durante años.",
          de: "Balsamico-Vinaigrette verwendet Balsamico-Essig, traditionell produziert in Modena, Italien. Dieser gealterte Essig hat einen charakteristischen süß-säuerlichen Geschmack und dunkle Farbe. Echter gealterter Balsamico-Essig ist dickflüssig, komplex und wird aus Traubenmost hergestellt, der jahrelang in Holzfässern gereift wird.",
          nl: "Balsamico vinaigrette gebruikt balsamico azijn, traditioneel geproduceerd in Modena, Italië. Deze gerijpte azijn heeft een kenmerkende zoet-zure smaak en donkere kleur. Echte gerijpte balsamico azijn is dik, complex en gemaakt van druivenmost gerijpt in houten vaten gedurende jaren."
        }
      },
      {
        question: {
          en: "What gives honey mustard dressing its distinctive sweet and tangy taste?",
          es: "¿Qué le da al aderezo de miel y mostaza su distintivo sabor dulce y ácido?",
          de: "Was gibt Honig-Senf-Dressing seinen charakteristischen süßen und würzigen Geschmack?",
          nl: "Wat geeft honing mosterd dressing zijn kenmerkende zoete en pittige smaak?"
        },
        options: [
          { en: "The combination of honey and mustard", es: "La combinación de miel y mostaza", de: "Die Kombination aus Honig und Senf", nl: "De combinatie van honing en mosterd" },
          { en: "Sugar and vinegar only", es: "Solo azúcar y vinagre", de: "Nur Zucker und Essig", nl: "Alleen suiker en azijn" },
          { en: "Maple syrup and horseradish", es: "Jarabe de arce y rábano picante", de: "Ahornsirup und Meerrettich", nl: "Esdoornsiroop en mierikswortel" },
          { en: "Brown sugar and soy sauce", es: "Azúcar moreno y salsa de soja", de: "Brauner Zucker und Sojasoße", nl: "Bruine suiker en sojasaus" }
        ],
        correct: 0,
        explanation: {
          en: "Honey mustard dressing gets its signature sweet and tangy flavor from the combination of honey (providing sweetness) and mustard (providing tang and slight heat). This simple but effective pairing creates a versatile dressing popular for both salads and as a dipping sauce.",
          es: "El aderezo de miel y mostaza obtiene su característico sabor dulce y ácido de la combinación de miel (proporcionando dulzura) y mostaza (proporcionando acidez y un ligero picor). Esta combinación simple pero efectiva crea un aderezo versátil popular tanto para ensaladas como para salsa para mojar.",
          de: "Honig-Senf-Dressing erhält seinen charakteristischen süßen und würzigen Geschmack durch die Kombination von Honig (der Süße liefert) und Senf (der Würze und leichte Schärfe liefert). Diese einfache, aber effektive Paarung schafft ein vielseitiges Dressing, das sowohl für Salate als auch als Dip-Sauce beliebt ist.",
          nl: "Honing mosterd dressing krijgt zijn kenmerkende zoete en pittige smaak van de combinatie van honing (die zoetheid biedt) en mosterd (die pittigheid en lichte scherpte biedt). Deze eenvoudige maar effectieve combinatie creëert een veelzijdige dressing populair voor zowel salades als dipsaus."
        }
      },
      {
        question: {
          en: "What is the base ingredient in a traditional Caesar dressing?",
          es: "¿Cuál es el ingrediente base en un aderezo César tradicional?",
          de: "Was ist die Basiszutat in einem traditionellen Caesar-Dressing?",
          nl: "Wat is het basisingrediënt in een traditionele Caesar dressing?"
        },
        options: [
          { en: "Mayonnaise", es: "Mayonesa", de: "Mayonnaise", nl: "Mayonaise" },
          { en: "Raw egg yolk", es: "Yema de huevo cruda", de: "Rohes Eigelb", nl: "Rauwe eidooier" },
          { en: "Yogurt", es: "Yogur", de: "Joghurt", nl: "Yoghurt" },
          { en: "Sour cream", es: "Crema agria", de: "Sauerrahm", nl: "Zure room" }
        ],
        correct: 1,
        explanation: {
          en: "Traditional Caesar dressing is made with raw egg yolk as the base, which is emulsified with oil to create a creamy texture. The dressing also includes anchovies, garlic, lemon juice, Dijon mustard, and Parmesan cheese. Modern versions often use pasteurized eggs for food safety.",
          es: "El aderezo César tradicional se hace con yema de huevo cruda como base, que se emulsiona con aceite para crear una textura cremosa. El aderezo también incluye anchoas, ajo, jugo de limón, mostaza Dijon y queso parmesano. Las versiones modernas a menudo usan huevos pasteurizados por seguridad alimentaria.",
          de: "Traditionelles Caesar-Dressing wird mit rohem Eigelb als Basis hergestellt, das mit Öl emulgiert wird, um eine cremige Textur zu schaffen. Das Dressing enthält auch Sardellen, Knoblauch, Zitronensaft, Dijon-Senf und Parmesan-Käse. Moderne Versionen verwenden oft pasteurisierte Eier aus Gründen der Lebensmittelsicherheit.",
          nl: "Traditionele Caesar dressing wordt gemaakt met rauwe eidooier als basis, die geëmulgeerd wordt met olie om een romige textuur te creëren. De dressing bevat ook ansjovis, knoflook, citroensap, Dijon mosterd en Parmezaanse kaas. Moderne versies gebruiken vaak gepasteuriseerde eieren voor voedselveiligheid."
        }
      },
      {
        question: {
          en: "What type of oil is most commonly used in Italian vinaigrette?",
          es: "¿Qué tipo de aceite se usa más comúnmente en la vinagreta italiana?",
          de: "Welche Art von Öl wird am häufigsten in italienischer Vinaigrette verwendet?",
          nl: "Welk type olie wordt het meest gebruikt in Italiaanse vinaigrette?"
        },
        options: [
          { en: "Canola oil", es: "Aceite de canola", de: "Rapsöl", nl: "Koolzaadolie" },
          { en: "Vegetable oil", es: "Aceite vegetal", de: "Pflanzenöl", nl: "Plantaardige olie" },
          { en: "Extra virgin olive oil", es: "Aceite de oliva extra virgen", de: "Natives Olivenöl extra", nl: "Extra vierge olijfolie" },
          { en: "Peanut oil", es: "Aceite de maní", de: "Erdnussöl", nl: "Pindaolie" }
        ],
        correct: 2,
        explanation: {
          en: "Italian vinaigrette traditionally uses extra virgin olive oil, which provides a fruity, robust flavor characteristic of Italian cuisine. Combined with red wine vinegar, garlic, and Italian herbs like oregano and basil, it creates an authentic Mediterranean taste.",
          es: "La vinagreta italiana tradicionalmente usa aceite de oliva extra virgen, que proporciona un sabor afrutado y robusto característico de la cocina italiana. Combinado con vinagre de vino tinto, ajo y hierbas italianas como orégano y albahaca, crea un auténtico sabor mediterráneo.",
          de: "Italienische Vinaigrette verwendet traditionell natives Olivenöl extra, das einen fruchtigen, robusten Geschmack bietet, der für die italienische Küche charakteristisch ist. Kombiniert mit Rotweinessig, Knoblauch und italienischen Kräutern wie Oregano und Basilikum entsteht ein authentischer mediterraner Geschmack.",
          nl: "Italiaanse vinaigrette gebruikt traditioneel extra vierge olijfolie, die een fruitige, robuuste smaak biedt kenmerkend voor de Italiaanse keuken. Gecombineerd met rode wijn azijn, knoflook en Italiaanse kruiden zoals oregano en basilicum, creëert het een authentieke mediterrane smaak."
        }
      },
      {
        question: {
          en: "What distinguishes a creamy dressing from a vinaigrette?",
          es: "¿Qué distingue un aderezo cremoso de una vinagreta?",
          de: "Was unterscheidet ein cremiges Dressing von einer Vinaigrette?",
          nl: "Wat onderscheidt een romige dressing van een vinaigrette?"
        },
        options: [
          { en: "Creamy dressings contain dairy or mayonnaise, vinaigrettes are oil-based", es: "Los aderezos cremosos contienen lácteos o mayonesa, las vinagretas son a base de aceite", de: "Cremige Dressings enthalten Milchprodukte oder Mayonnaise, Vinaigrettes sind ölbasiert", nl: "Romige dressings bevatten zuivel of mayonaise, vinaigrettes zijn op oliebasis" },
          { en: "Creamy dressings are always sweeter", es: "Los aderezos cremosos son siempre más dulces", de: "Cremige Dressings sind immer süßer", nl: "Romige dressings zijn altijd zoeter" },
          { en: "Creamy dressings contain no acid", es: "Los aderezos cremosos no contienen ácido", de: "Cremige Dressings enthalten keine Säure", nl: "Romige dressings bevatten geen zuur" },
          { en: "There is no real difference", es: "No hay diferencia real", de: "Es gibt keinen wirklichen Unterschied", nl: "Er is geen echt verschil" }
        ],
        correct: 0,
        explanation: {
          en: "Creamy dressings use dairy products like buttermilk, sour cream, yogurt, or mayonnaise as their base, creating a thick, opaque consistency. Vinaigrettes are emulsions of oil and vinegar or citrus juice, typically thinner and translucent. Both types can include various seasonings and flavorings.",
          es: "Los aderezos cremosos usan productos lácteos como suero de leche, crema agria, yogur o mayonesa como su base, creando una consistencia espesa y opaca. Las vinagretas son emulsiones de aceite y vinagre o jugo cítrico, típicamente más delgadas y translúcidas. Ambos tipos pueden incluir varios condimentos y saborizantes.",
          de: "Cremige Dressings verwenden Milchprodukte wie Buttermilch, Sauerrahm, Joghurt oder Mayonnaise als Basis und schaffen eine dicke, undurchsichtige Konsistenz. Vinaigrettes sind Emulsionen aus Öl und Essig oder Zitronensaft, typischerweise dünner und durchscheinend. Beide Typen können verschiedene Gewürze und Aromen enthalten.",
          nl: "Romige dressings gebruiken zuivelproducten zoals karnemelk, zure room, yoghurt of mayonaise als basis, wat een dikke, ondoorzichtige consistentie creëert. Vinaigrettes zijn emulsies van olie en azijn of citroensap, meestal dunner en doorschijnend. Beide typen kunnen verschillende kruiden en smaakmakers bevatten."
        }
      },
      {
        question: {
          en: "What gives Russian dressing its distinctive flavor?",
          es: "¿Qué le da al aderezo ruso su sabor distintivo?",
          de: "Was gibt Russian Dressing seinen charakteristischen Geschmack?",
          nl: "Wat geeft Russische dressing zijn kenmerkende smaak?"
        },
        options: [
          { en: "Horseradish and chili sauce", es: "Rábano picante y salsa de chile", de: "Meerrettich und Chilisauce", nl: "Mierikswortel en chilisaus" },
          { en: "Vodka", es: "Vodka", de: "Wodka", nl: "Wodka" },
          { en: "Caviar", es: "Caviar", de: "Kaviar", nl: "Kaviaar" },
          { en: "Beets", es: "Remolachas", de: "Rote Bete", nl: "Bieten" }
        ],
        correct: 0,
        explanation: {
          en: "Russian dressing gets its distinctive spicy-sweet flavor from horseradish and chili sauce (or ketchup) combined with mayonnaise. Despite its name, the dressing is actually American in origin. It's similar to Thousand Island but typically includes horseradish for extra kick.",
          es: "El aderezo ruso obtiene su distintivo sabor picante-dulce del rábano picante y salsa de chile (o ketchup) combinados con mayonesa. A pesar de su nombre, el aderezo es en realidad de origen americano. Es similar a Mil Islas pero típicamente incluye rábano picante para un toque extra.",
          de: "Russian Dressing erhält seinen charakteristischen würzig-süßen Geschmack durch Meerrettich und Chilisauce (oder Ketchup) kombiniert mit Mayonnaise. Trotz seines Namens ist das Dressing tatsächlich amerikanischen Ursprungs. Es ähnelt Thousand Island, enthält aber typischerweise Meerrettich für zusätzliche Schärfe.",
          nl: "Russische dressing krijgt zijn kenmerkende pittig-zoete smaak van mierikswortel en chilisaus (of ketchup) gecombineerd met mayonaise. Ondanks de naam is de dressing eigenlijk van Amerikaanse oorsprong. Het lijkt op Thousand Island maar bevat meestal mierikswortel voor extra pit."
        }
      },
      {
        question: {
          en: "What is the purpose of using Dijon mustard in vinaigrettes?",
          es: "¿Cuál es el propósito de usar mostaza Dijon en vinagretas?",
          de: "Was ist der Zweck der Verwendung von Dijon-Senf in Vinaigrettes?",
          nl: "Wat is het doel van het gebruik van Dijon mosterd in vinaigrettes?"
        },
        options: [
          { en: "It acts as an emulsifier and adds flavor", es: "Actúa como emulsionante y añade sabor", de: "Es wirkt als Emulgator und fügt Geschmack hinzu", nl: "Het werkt als emulgator en voegt smaak toe" },
          { en: "It makes the dressing sweeter", es: "Hace que el aderezo sea más dulce", de: "Es macht das Dressing süßer", nl: "Het maakt de dressing zoeter" },
          { en: "It adds red color", es: "Añade color rojo", de: "Es fügt rote Farbe hinzu", nl: "Het voegt rode kleur toe" },
          { en: "It thickens the dressing only", es: "Solo espesa el aderezo", de: "Es verdickt nur das Dressing", nl: "Het verdikt alleen de dressing" }
        ],
        correct: 0,
        explanation: {
          en: "Dijon mustard serves two purposes in vinaigrettes: it acts as an emulsifier, helping oil and vinegar stay combined instead of separating, and it adds a tangy, slightly spicy flavor. The mustard contains natural compounds that stabilize the oil-vinegar emulsion.",
          es: "La mostaza Dijon cumple dos propósitos en las vinagretas: actúa como emulsionante, ayudando a que el aceite y el vinagre permanezcan combinados en lugar de separarse, y añade un sabor ácido y ligeramente picante. La mostaza contiene compuestos naturales que estabilizan la emulsión de aceite y vinagre.",
          de: "Dijon-Senf erfüllt zwei Zwecke in Vinaigrettes: Er wirkt als Emulgator und hilft, Öl und Essig zusammenzuhalten, anstatt sich zu trennen, und er fügt einen würzigen, leicht scharfen Geschmack hinzu. Der Senf enthält natürliche Verbindungen, die die Öl-Essig-Emulsion stabilisieren.",
          nl: "Dijon mosterd dient twee doelen in vinaigrettes: het werkt als emulgator, waardoor olie en azijn gecombineerd blijven in plaats van te scheiden, en het voegt een pittige, licht pittige smaak toe. De mosterd bevat natuurlijke verbindingen die de olie-azijn emulsie stabiliseren."
        }
      },
      {
        question: {
          en: "What type of vinegar is used in a traditional Asian sesame dressing?",
          es: "¿Qué tipo de vinagre se usa en un aderezo asiático de sésamo tradicional?",
          de: "Welche Art von Essig wird in einem traditionellen asiatischen Sesam-Dressing verwendet?",
          nl: "Welk type azijn wordt gebruikt in een traditionele Aziatische sesamdressing?"
        },
        options: [
          { en: "Balsamic vinegar", es: "Vinagre balsámico", de: "Balsamico-Essig", nl: "Balsamico azijn" },
          { en: "Apple cider vinegar", es: "Vinagre de sidra de manzana", de: "Apfelessig", nl: "Appelcider azijn" },
          { en: "Rice vinegar", es: "Vinagre de arroz", de: "Reisessig", nl: "Rijstazijn" },
          { en: "Red wine vinegar", es: "Vinagre de vino tinto", de: "Rotweinessig", nl: "Rode wijn azijn" }
        ],
        correct: 2,
        explanation: {
          en: "Traditional Asian sesame dressing uses rice vinegar, which has a milder, slightly sweet flavor compared to Western vinegars. Combined with sesame oil, soy sauce, and sometimes ginger or garlic, it creates the characteristic nutty, umami-rich flavor of Asian-style dressings.",
          es: "El aderezo asiático de sésamo tradicional usa vinagre de arroz, que tiene un sabor más suave y ligeramente dulce comparado con los vinagres occidentales. Combinado con aceite de sésamo, salsa de soja y a veces jengibre o ajo, crea el característico sabor a nuez y rico en umami de los aderezos de estilo asiático.",
          de: "Traditionelles asiatisches Sesam-Dressing verwendet Reisessig, der einen milderen, leicht süßlichen Geschmack im Vergleich zu westlichen Essigen hat. Kombiniert mit Sesamöl, Sojasoße und manchmal Ingwer oder Knoblauch entsteht der charakteristische nussige, umami-reiche Geschmack asiatischer Dressings.",
          nl: "Traditionele Aziatische sesamdressing gebruikt rijstazijn, die een mildere, licht zoete smaak heeft vergeleken met westerse azijnen. Gecombineerd met sesamolie, sojasaus en soms gember of knoflook, creëert het de karakteristieke nootachtige, umami-rijke smaak van Aziatische dressings."
        }
      },
      {
        question: {
          en: "What makes a Green Goddess dressing green?",
          es: "¿Qué hace que el aderezo Green Goddess sea verde?",
          de: "Was macht Green Goddess Dressing grün?",
          nl: "Wat maakt Green Goddess dressing groen?"
        },
        options: [
          { en: "Food coloring", es: "Colorante alimentario", de: "Lebensmittelfarbe", nl: "Voedselkleurstof" },
          { en: "Fresh herbs like parsley, tarragon, and chives", es: "Hierbas frescas como perejil, estragón y cebollino", de: "Frische Kräuter wie Petersilie, Estragon und Schnittlauch", nl: "Verse kruiden zoals peterselie, dragon en bieslook" },
          { en: "Spinach juice", es: "Jugo de espinaca", de: "Spinatsaft", nl: "Spinaziesap" },
          { en: "Matcha powder", es: "Polvo de matcha", de: "Matcha-Pulver", nl: "Matcha poeder" }
        ],
        correct: 1,
        explanation: {
          en: "Green Goddess dressing gets its vibrant green color from fresh herbs, traditionally parsley, tarragon, chives, and sometimes basil or watercress. These herbs are blended into a creamy base of mayonnaise, sour cream, and anchovies, creating both the color and distinctive herbaceous flavor.",
          es: "El aderezo Green Goddess obtiene su vibrante color verde de hierbas frescas, tradicionalmente perejil, estragón, cebollino y a veces albahaca o berro. Estas hierbas se mezclan en una base cremosa de mayonesa, crema agria y anchoas, creando tanto el color como el distintivo sabor herbáceo.",
          de: "Green Goddess Dressing erhält seine lebendige grüne Farbe durch frische Kräuter, traditionell Petersilie, Estragon, Schnittlauch und manchmal Basilikum oder Brunnenkresse. Diese Kräuter werden in eine cremige Basis aus Mayonnaise, Sauerrahm und Sardellen gemischt, wodurch sowohl die Farbe als auch der charakteristische krautige Geschmack entstehen.",
          nl: "Green Goddess dressing krijgt zijn levendige groene kleur van verse kruiden, traditioneel peterselie, dragon, bieslook en soms basilicum of waterkers. Deze kruiden worden gemengd in een romige basis van mayonaise, zure room en ansjovis, wat zowel de kleur als de kenmerkende kruidachtige smaak creëert."
        }
      },
      {
        question: {
          en: "What is the main difference between French vinaigrette and other vinaigrettes?",
          es: "¿Cuál es la principal diferencia entre la vinagreta francesa y otras vinagretas?",
          de: "Was ist der Hauptunterschied zwischen französischer Vinaigrette und anderen Vinaigrettes?",
          nl: "Wat is het belangrijkste verschil tussen Franse vinaigrette en andere vinaigrettes?"
        },
        options: [
          { en: "It often contains ketchup or tomato paste for sweetness and color", es: "A menudo contiene ketchup o pasta de tomate para dulzura y color", de: "Es enthält oft Ketchup oder Tomatenmark für Süße und Farbe", nl: "Het bevat vaak ketchup of tomatenpuree voor zoetheid en kleur" },
          { en: "It uses only white wine", es: "Solo usa vino blanco", de: "Es verwendet nur Weißwein", nl: "Het gebruikt alleen witte wijn" },
          { en: "It contains no oil", es: "No contiene aceite", de: "Es enthält kein Öl", nl: "Het bevat geen olie" },
          { en: "It's always served hot", es: "Siempre se sirve caliente", de: "Es wird immer heiß serviert", nl: "Het wordt altijd warm geserveerd" }
        ],
        correct: 0,
        explanation: {
          en: "What Americans call 'French dressing' typically contains ketchup or tomato paste, giving it a sweet, tangy flavor and reddish-orange color. Interestingly, this style is not actually used in France. True French vinaigrette (vinaigrette française) is simply oil, vinegar, mustard, and seasonings.",
          es: "Lo que los americanos llaman 'aderezo francés' típicamente contiene ketchup o pasta de tomate, dándole un sabor dulce y ácido y color rojo-naranja. Curiosamente, este estilo no se usa realmente en Francia. La verdadera vinagreta francesa (vinaigrette française) es simplemente aceite, vinagre, mostaza y condimentos.",
          de: "Was Amerikaner 'French Dressing' nennen, enthält typischerweise Ketchup oder Tomatenmark, was ihm einen süßen, würzigen Geschmack und eine rötlich-orange Farbe verleiht. Interessanterweise wird dieser Stil in Frankreich nicht verwendet. Echte französische Vinaigrette (vinaigrette française) besteht einfach aus Öl, Essig, Senf und Gewürzen.",
          nl: "Wat Amerikanen 'Franse dressing' noemen bevat meestal ketchup of tomatenpuree, wat het een zoete, pittige smaak en rood-oranje kleur geeft. Interessant genoeg wordt deze stijl niet daadwerkelijk in Frankrijk gebruikt. Echte Franse vinaigrette (vinaigrette française) is simpelweg olie, azijn, mosterd en kruiden."
        }
      },
      {
        question: {
          en: "What ingredient gives tahini dressing its nutty flavor?",
          es: "¿Qué ingrediente le da al aderezo de tahini su sabor a nuez?",
          de: "Welche Zutat gibt Tahini-Dressing seinen nussigen Geschmack?",
          nl: "Welk ingrediënt geeft tahini dressing zijn nootachtige smaak?"
        },
        options: [
          { en: "Peanut butter", es: "Mantequilla de maní", de: "Erdnussbutter", nl: "Pindakaas" },
          { en: "Almond butter", es: "Mantequilla de almendra", de: "Mandelbutter", nl: "Amandelboter" },
          { en: "Ground sesame seeds (tahini paste)", es: "Semillas de sésamo molidas (pasta de tahini)", de: "Gemahlene Sesamsamen (Tahini-Paste)", nl: "Gemalen sesamzaad (tahini pasta)" },
          { en: "Walnuts", es: "Nueces", de: "Walnüsse", nl: "Walnoten" }
        ],
        correct: 2,
        explanation: {
          en: "Tahini dressing gets its distinctive nutty flavor from tahini paste, which is made from ground sesame seeds. Popular in Middle Eastern cuisine, tahini dressing typically combines tahini with lemon juice, garlic, and water or yogurt to create a creamy, flavorful dressing.",
          es: "El aderezo de tahini obtiene su distintivo sabor a nuez de la pasta de tahini, que está hecha de semillas de sésamo molidas. Popular en la cocina del Medio Oriente, el aderezo de tahini típicamente combina tahini con jugo de limón, ajo y agua o yogur para crear un aderezo cremoso y sabroso.",
          de: "Tahini-Dressing erhält seinen charakteristischen nussigen Geschmack durch Tahini-Paste, die aus gemahlenen Sesamsamen hergestellt wird. In der nahöstlichen Küche beliebt, kombiniert Tahini-Dressing typischerweise Tahini mit Zitronensaft, Knoblauch und Wasser oder Joghurt, um ein cremiges, geschmackvolles Dressing zu schaffen.",
          nl: "Tahini dressing krijgt zijn kenmerkende nootachtige smaak van tahini pasta, die gemaakt is van gemalen sesamzaad. Populair in de Midden-Oosterse keuken, combineert tahini dressing meestal tahini met citroensap, knoflook en water of yoghurt om een romige, smaakvolle dressing te creëren."
        }
      },
      {
        question: {
          en: "What is the purpose of adding sugar to some vinaigrettes?",
          es: "¿Cuál es el propósito de agregar azúcar a algunas vinagretas?",
          de: "Was ist der Zweck, Zucker zu einigen Vinaigrettes hinzuzufügen?",
          nl: "Wat is het doel van het toevoegen van suiker aan sommige vinaigrettes?"
        },
        options: [
          { en: "To balance the acidity of the vinegar", es: "Para equilibrar la acidez del vinagre", de: "Um die Säure des Essigs auszugleichen", nl: "Om de zuurgraad van de azijn te balanceren" },
          { en: "To make it more colorful", es: "Para hacerlo más colorido", de: "Um es bunter zu machen", nl: "Om het kleurrijker te maken" },
          { en: "To help it last longer", es: "Para que dure más tiempo", de: "Damit es länger hält", nl: "Om het langer te laten duren" },
          { en: "Sugar is never added to vinaigrettes", es: "El azúcar nunca se agrega a las vinagretas", de: "Zucker wird nie zu Vinaigrettes hinzugefügt", nl: "Suiker wordt nooit toegevoegd aan vinaigrettes" }
        ],
        correct: 0,
        explanation: {
          en: "Sugar is added to vinaigrettes to balance the sharp acidity of vinegar and create a more rounded, harmonious flavor. A small amount of sugar (or honey, maple syrup) helps mellow the tartness without making the dressing noticeably sweet, resulting in a more palatable dressing.",
          es: "Se agrega azúcar a las vinagretas para equilibrar la acidez aguda del vinagre y crear un sabor más redondeado y armonioso. Una pequeña cantidad de azúcar (o miel, jarabe de arce) ayuda a suavizar la acidez sin hacer que el aderezo sea notablemente dulce, resultando en un aderezo más agradable al paladar.",
          de: "Zucker wird zu Vinaigrettes hinzugefügt, um die scharfe Säure des Essigs auszugleichen und einen runderen, harmonischeren Geschmack zu schaffen. Eine kleine Menge Zucker (oder Honig, Ahornsirup) hilft, die Säure zu mildern, ohne das Dressing merklich süß zu machen, was zu einem schmackhafteren Dressing führt.",
          nl: "Suiker wordt toegevoegd aan vinaigrettes om de scherpe zuurgraad van azijn te balanceren en een meer afgeronde, harmonieuze smaak te creëren. Een kleine hoeveelheid suiker (of honing, esdoornsiroop) helpt de zuurheid te verzachten zonder de dressing merkbaar zoet te maken, wat resulteert in een aangenamere dressing."
        }
      },
      {
        question: {
          en: "What makes a poppy seed dressing distinctive?",
          es: "¿Qué hace que un aderezo de semillas de amapola sea distintivo?",
          de: "Was macht ein Mohnsamen-Dressing charakteristisch?",
          nl: "Wat maakt een maanzaad dressing onderscheidend?"
        },
        options: [
          { en: "The visible poppy seeds and slightly sweet flavor", es: "Las semillas de amapola visibles y sabor ligeramente dulce", de: "Die sichtbaren Mohnsamen und leicht süße Geschmack", nl: "De zichtbare maanzaad en licht zoete smaak" },
          { en: "It's bright red in color", es: "Es de color rojo brillante", de: "Es ist leuchtend rot gefärbt", nl: "Het is felrood van kleur" },
          { en: "It contains no oil", es: "No contiene aceite", de: "Es enthält kein Öl", nl: "Het bevat geen olie" },
          { en: "It's served frozen", es: "Se sirve congelado", de: "Es wird gefroren serviert", nl: "Het wordt bevroren geserveerd" }
        ],
        correct: 0,
        explanation: {
          en: "Poppy seed dressing is distinctive for its visible tiny black poppy seeds suspended throughout and its slightly sweet, tangy flavor. The dressing typically combines poppy seeds with a base of mayonnaise or oil and vinegar, sugar, and sometimes onion, creating a unique texture and appearance.",
          es: "El aderezo de semillas de amapola es distintivo por sus diminutas semillas de amapola negras visibles suspendidas en todo el aderezo y su sabor ligeramente dulce y ácido. El aderezo típicamente combina semillas de amapola con una base de mayonesa o aceite y vinagre, azúcar y a veces cebolla, creando una textura y apariencia únicas.",
          de: "Mohnsamen-Dressing ist charakteristisch für seine sichtbaren winzigen schwarzen Mohnsamen, die durchgehend suspendiert sind, und seinen leicht süßen, würzigen Geschmack. Das Dressing kombiniert typischerweise Mohnsamen mit einer Basis aus Mayonnaise oder Öl und Essig, Zucker und manchmal Zwiebeln, wodurch eine einzigartige Textur und Erscheinung entsteht.",
          nl: "Maanzaad dressing is onderscheidend door zijn zichtbare kleine zwarte maanzaadjes die er doorheen zweven en zijn licht zoete, pittige smaak. De dressing combineert meestal maanzaad met een basis van mayonaise of olie en azijn, suiker en soms ui, wat een unieke textuur en uiterlijk creëert."
        }
      },
      {
        question: {
          en: "What is a gastrique and how is it used in salad dressings?",
          es: "¿Qué es un gastrique y cómo se usa en aderezos para ensaladas?",
          de: "Was ist ein Gastrique und wie wird es in Salatdressings verwendet?",
          nl: "Wat is een gastrique en hoe wordt het gebruikt in saladedressings?"
        },
        options: [
          { en: "A caramelized sugar and vinegar reduction used to add sweet-tart flavor", es: "Una reducción de azúcar caramelizado y vinagre usado para añadir sabor agridulce", de: "Eine karamellisierte Zucker- und Essigreduktion, die verwendet wird, um süß-säuerlichen Geschmack hinzuzufügen", nl: "Een gekarameliseerde suiker en azijn reductie gebruikt om zoet-zure smaak toe te voegen" },
          { en: "A type of lettuce", es: "Un tipo de lechuga", de: "Eine Art Kopfsalat", nl: "Een type sla" },
          { en: "A French salad bowl", es: "Un tazón francés para ensalada", de: "Eine französische Salatschüssel", nl: "Een Franse saladekom" },
          { en: "A vinegar made from grapes", es: "Un vinagre hecho de uvas", de: "Ein Essig aus Trauben", nl: "Een azijn gemaakt van druiven" }
        ],
        correct: 0,
        explanation: {
          en: "A gastrique is a French culinary technique involving caramelized sugar deglazed with vinegar, creating a sweet-tart syrup. When used in salad dressings, it adds complex depth and balanced sweetness. This technique is especially popular in fruit-based vinaigrettes and gourmet salad preparations.",
          es: "Un gastrique es una técnica culinaria francesa que involucra azúcar caramelizado deglaseado con vinagre, creando un jarabe agridulce. Cuando se usa en aderezos para ensaladas, añade profundidad compleja y dulzura equilibrada. Esta técnica es especialmente popular en vinagretas a base de frutas y preparaciones de ensaladas gourmet.",
          de: "Ein Gastrique ist eine französische Kochtechnik, bei der karamellisierter Zucker mit Essig abgelöscht wird, wodurch ein süß-säuerlicher Sirup entsteht. Bei Verwendung in Salatdressings fügt es komplexe Tiefe und ausgewogene Süße hinzu. Diese Technik ist besonders beliebt in fruchtbasierten Vinaigrettes und Gourmet-Salatzubereitungen.",
          nl: "Een gastrique is een Franse kooktechniek waarbij gekarameliseerde suiker met azijn wordt gedeglaceerd, wat een zoet-zure siroop creëert. Wanneer gebruikt in saladedressings, voegt het complexe diepte en gebalanceerde zoetheid toe. Deze techniek is vooral populair in fruit-gebaseerde vinaigrettes en gourmet saladebereidingen."
        }
      },
      {
        question: {
          en: "What ingredient distinguishes a buttermilk ranch dressing from regular ranch?",
          es: "¿Qué ingrediente distingue un aderezo ranch de suero de leche del ranch regular?",
          de: "Welche Zutat unterscheidet ein Buttermilch-Ranch-Dressing von normalem Ranch?",
          nl: "Welk ingrediënt onderscheidt een karnemelk ranch dressing van gewone ranch?"
        },
        options: [
          { en: "The use of cultured buttermilk instead of regular milk", es: "El uso de suero de leche cultivado en lugar de leche regular", de: "Die Verwendung von kultivierter Buttermilch statt normaler Milch", nl: "Het gebruik van gekweekte karnemelk in plaats van gewone melk" },
          { en: "Real butter chunks", es: "Trozos de mantequilla real", de: "Echte Butterstücke", nl: "Echte boterklontjes" },
          { en: "Yellow food coloring", es: "Colorante alimentario amarillo", de: "Gelbe Lebensmittelfarbe", nl: "Gele voedselkleurstof" },
          { en: "Extra salt", es: "Sal extra", de: "Extra Salz", nl: "Extra zout" }
        ],
        correct: 0,
        explanation: {
          en: "Buttermilk ranch dressing specifically uses cultured buttermilk, which gives it a tangier, more authentic flavor compared to ranch dressing made with regular milk or sour cream thinned with milk. The buttermilk's natural acidity and thickness contribute to the dressing's characteristic taste and creamy texture.",
          es: "El aderezo ranch de suero de leche usa específicamente suero de leche cultivado, lo que le da un sabor más ácido y auténtico comparado con el aderezo ranch hecho con leche regular o crema agria diluida con leche. La acidez natural y grosor del suero de leche contribuyen al sabor característico y textura cremosa del aderezo.",
          de: "Buttermilch-Ranch-Dressing verwendet speziell kultivierte Buttermilch, die ihm einen würzigeren, authentischeren Geschmack verleiht im Vergleich zu Ranch-Dressing aus normaler Milch oder mit Milch verdünntem Sauerrahm. Die natürliche Säure und Dicke der Buttermilch tragen zum charakteristischen Geschmack und zur cremigen Textur des Dressings bei.",
          nl: "Karnemelk ranch dressing gebruikt specifiek gekweekte karnemelk, wat het een pittigere, meer authentieke smaak geeft vergeleken met ranch dressing gemaakt met gewone melk of zure room verdund met melk. De natuurlijke zuurgraad en dikte van karnemelk dragen bij aan de karakteristieke smaak en romige textuur van de dressing."
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