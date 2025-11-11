// Vegetarian Dishes Quiz - Level 1: Basic Vegetarian Knowledge & Common Dishes
(function() {
  "use strict";
  const level1 = {
    name: {
      en: "Vegetarian Level 1",
      es: "Vegetariano Nivel 1",
      de: "Vegetarisch Stufe 1",
      nl: "Vegetarisch Level 1"
    },
    questions: [
      {
        question: {
          en: "What is a vegetarian diet?",
          es: "¿Qué es una dieta vegetariana?",
          de: "Was ist eine vegetarische Ernährung?",
          nl: "Wat is een vegetarisch dieet?"
        },
        options: [
          { en: "A diet that excludes meat, fish, and poultry", es: "Una dieta que excluye carne, pescado y aves", de: "Eine Ernährung, die Fleisch, Fisch und Geflügel ausschließt", nl: "Een dieet dat vlees, vis en gevogelte uitsluit" },
          { en: "A diet that only includes vegetables", es: "Una dieta que solo incluye verduras", de: "Eine Ernährung, die nur Gemüse enthält", nl: "Een dieet dat alleen groenten bevat" },
          { en: "A diet for weight loss", es: "Una dieta para perder peso", de: "Eine Diät zum Abnehmen", nl: "Een dieet voor gewichtsverlies" },
          { en: "A diet without dairy products", es: "Una dieta sin productos lácteos", de: "Eine Ernährung ohne Milchprodukte", nl: "Een dieet zonder zuivelproducten" }
        ],
        correct: 0,
        explanation: {
          en: "A vegetarian diet excludes meat, fish, and poultry, but may include dairy products and eggs. There are different types of vegetarian diets with varying restrictions.",
          es: "Una dieta vegetariana excluye carne, pescado y aves, pero puede incluir productos lácteos y huevos. Hay diferentes tipos de dietas vegetarianas con diversas restricciones.",
          de: "Eine vegetarische Ernährung schließt Fleisch, Fisch und Geflügel aus, kann aber Milchprodukte und Eier enthalten. Es gibt verschiedene Arten vegetarischer Ernährung mit unterschiedlichen Einschränkungen.",
          nl: "Een vegetarisch dieet sluit vlees, vis en gevogelte uit, maar kan wel zuivelproducten en eieren bevatten. Er zijn verschillende soorten vegetarische diëten met verschillende beperkingen."
        }
      },
      {
        question: {
          en: "Which of these is a common vegetarian protein source?",
          es: "¿Cuál de estos es una fuente común de proteína vegetariana?",
          de: "Welches davon ist eine häufige vegetarische Proteinquelle?",
          nl: "Welke van deze is een veelvoorkomende vegetarische eiwitbron?"
        },
        options: [
          { en: "Lentils", es: "Lentejas", de: "Linsen", nl: "Linzen" },
          { en: "Chicken", es: "Pollo", de: "Huhn", nl: "Kip" },
          { en: "Salmon", es: "Salmón", de: "Lachs", nl: "Zalm" },
          { en: "Beef", es: "Carne de res", de: "Rindfleisch", nl: "Rundvlees" }
        ],
        correct: 0,
        explanation: {
          en: "Lentils are an excellent plant-based protein source, providing about 18 grams of protein per cooked cup. They're also rich in fiber, folate, and iron.",
          es: "Las lentejas son una excelente fuente de proteína vegetal, proporcionando aproximadamente 18 gramos de proteína por taza cocida. También son ricas en fibra, folato y hierro.",
          de: "Linsen sind eine ausgezeichnete pflanzliche Proteinquelle und liefern etwa 18 Gramm Protein pro gekochte Tasse. Sie sind auch reich an Ballaststoffen, Folsäure und Eisen.",
          nl: "Linzen zijn een uitstekende plantaardige eiwitbron en leveren ongeveer 18 gram eiwit per gekookte kop. Ze zijn ook rijk aan vezels, folaat en ijzer."
        }
      },
      {
        question: {
          en: "What is tofu made from?",
          es: "¿De qué está hecho el tofu?",
          de: "Woraus wird Tofu hergestellt?",
          nl: "Waar wordt tofu van gemaakt?"
        },
        options: [
          { en: "Soybeans", es: "Soja", de: "Sojabohnen", nl: "Sojabonen" },
          { en: "Rice", es: "Arroz", de: "Reis", nl: "Rijst" },
          { en: "Wheat", es: "Trigo", de: "Weizen", nl: "Tarwe" },
          { en: "Corn", es: "Maíz", de: "Mais", nl: "Maïs" }
        ],
        correct: 0,
        explanation: {
          en: "Tofu is made from soybeans by coagulating soy milk and pressing the resulting curds into blocks. It's a versatile protein source that absorbs flavors well.",
          es: "El tofu se hace de soja coagulando la leche de soja y prensando los cuajos resultantes en bloques. Es una fuente de proteína versátil que absorbe bien los sabores.",
          de: "Tofu wird aus Sojabohnen hergestellt, indem Sojamilch koaguliert und die entstehenden Quark zu Blöcken gepresst wird. Es ist eine vielseitige Proteinquelle, die Aromen gut aufnimmt.",
          nl: "Tofu wordt gemaakt van sojabonen door sojamelk te coaguleren en de resulterende wrongel in blokken te persen. Het is een veelzijdige eiwitbron die smaken goed opneemt."
        }
      },
      {
        question: {
          en: "Which vegetable is often used as a meat substitute due to its texture?",
          es: "¿Qué verdura se usa a menudo como sustituto de la carne debido a su textura?",
          de: "Welches Gemüse wird aufgrund seiner Textur oft als Fleischersatz verwendet?",
          nl: "Welke groente wordt vaak als vleesvervanger gebruikt vanwege de textuur?"
        },
        options: [
          { en: "Mushrooms", es: "Hongos", de: "Pilze", nl: "Paddenstoelen" },
          { en: "Carrots", es: "Zanahorias", de: "Karotten", nl: "Wortelen" },
          { en: "Lettuce", es: "Lechuga", de: "Salat", nl: "Sla" },
          { en: "Tomatoes", es: "Tomates", de: "Tomaten", nl: "Tomaten" }
        ],
        correct: 0,
        explanation: {
          en: "Mushrooms, especially portobello and shiitake varieties, have a meaty texture and umami flavor that makes them excellent meat substitutes in many dishes.",
          es: "Los hongos, especialmente las variedades portobello y shiitake, tienen una textura carnosa y sabor umami que los hace excelentes sustitutos de la carne en muchos platos.",
          de: "Pilze, besonders Portobello- und Shiitake-Sorten, haben eine fleischige Textur und Umami-Geschmack, die sie zu ausgezeichneten Fleischersatz in vielen Gerichten machen.",
          nl: "Paddenstoelen, vooral portobello en shiitake variëteiten, hebben een vleesachtige textuur en umami smaak die ze uitstekende vleesvervanger maken in veel gerechten."
        }
      },
      {
        question: {
          en: "What is a popular vegetarian pasta dish from Italy?",
          es: "¿Cuál es un plato popular de pasta vegetariana de Italia?",
          de: "Was ist ein beliebtes vegetarisches Nudelgericht aus Italien?",
          nl: "Wat is een populair vegetarisch pastagerecht uit Italië?"
        },
        options: [
          { en: "Pasta Primavera", es: "Pasta Primavera", de: "Pasta Primavera", nl: "Pasta Primavera" },
          { en: "Spaghetti Carbonara", es: "Espagueti Carbonara", de: "Spaghetti Carbonara", nl: "Spaghetti Carbonara" },
          { en: "Pasta Bolognese", es: "Pasta Boloñesa", de: "Pasta Bolognese", nl: "Pasta Bolognese" },
          { en: "Pasta with Clam Sauce", es: "Pasta con Salsa de Almejas", de: "Pasta mit Muschelsoße", nl: "Pasta met Mosselsaus" }
        ],
        correct: 0,
        explanation: {
          en: "Pasta Primavera features fresh seasonal vegetables like bell peppers, zucchini, broccoli, and tomatoes in a light sauce, making it a perfect vegetarian dish.",
          es: "La Pasta Primavera presenta verduras frescas de temporada como pimientos, calabacín, brócoli y tomates en una salsa ligera, haciéndola un plato vegetariano perfecto.",
          de: "Pasta Primavera enthält frisches Saisongemüse wie Paprika, Zucchini, Brokkoli und Tomaten in einer leichten Sauce, was es zu einem perfekten vegetarischen Gericht macht.",
          nl: "Pasta Primavera bevat verse seizoensgroenten zoals paprika's, courgette, broccoli en tomaten in een lichte saus, wat het een perfect vegetarisch gerecht maakt."
        }
      },
      {
        question: {
          en: "Which grain is naturally gluten-free and high in protein?",
          es: "¿Qué grano es naturalmente libre de gluten y alto en proteína?",
          de: "Welches Getreide ist von Natur aus glutenfrei und proteinreich?",
          nl: "Welk graan is van nature glutenvrij en rijk aan eiwit?"
        },
        options: [
          { en: "Quinoa", es: "Quinoa", de: "Quinoa", nl: "Quinoa" },
          { en: "Wheat", es: "Trigo", de: "Weizen", nl: "Tarwe" },
          { en: "Barley", es: "Cebada", de: "Gerste", nl: "Gerst" },
          { en: "Rye", es: "Centeno", de: "Roggen", nl: "Rogge" }
        ],
        correct: 0,
        explanation: {
          en: "Quinoa is a complete protein containing all essential amino acids and is naturally gluten-free. It's technically a seed but used like a grain in cooking.",
          es: "La quinoa es una proteína completa que contiene todos los aminoácidos esenciales y es naturalmente libre de gluten. Técnicamente es una semilla pero se usa como un grano en la cocina.",
          de: "Quinoa ist ein vollständiges Protein, das alle essentiellen Aminosäuren enthält und von Natur aus glutenfrei ist. Technisch ist es ein Samen, wird aber wie Getreide beim Kochen verwendet.",
          nl: "Quinoa is een compleet eiwit dat alle essentiële aminozuren bevat en is van nature glutenvrij. Het is technisch gezien een zaad maar wordt gebruikt als graan bij het koken."
        }
      },
      {
        question: {
          en: "What is a traditional vegetarian dish from India?",
          es: "¿Cuál es un plato vegetariano tradicional de la India?",
          de: "Was ist ein traditionelles vegetarisches Gericht aus Indien?",
          nl: "Wat is een traditioneel vegetarisch gerecht uit India?"
        },
        options: [
          { en: "Dal (lentil curry)", es: "Dal (curry de lentejas)", de: "Dal (Linsencurry)", nl: "Dal (linzencurry)" },
          { en: "Chicken Tikka Masala", es: "Pollo Tikka Masala", de: "Chicken Tikka Masala", nl: "Kip Tikka Masala" },
          { en: "Fish Curry", es: "Curry de Pescado", de: "Fischcurry", nl: "Viscurry" },
          { en: "Lamb Biryani", es: "Biryani de Cordero", de: "Lamm Biryani", nl: "Lamsvlees Biryani" }
        ],
        correct: 0,
        explanation: {
          en: "Dal is a staple dish in Indian cuisine made from various types of lentils, peas, or beans cooked with spices. It's protein-rich and completely vegetarian.",
          es: "El Dal es un plato básico en la cocina india hecho de varios tipos de lentejas, guisantes o frijoles cocidos con especias. Es rico en proteína y completamente vegetariano.",
          de: "Dal ist ein Grundnahrungsmittel der indischen Küche, das aus verschiedenen Arten von Linsen, Erbsen oder Bohnen mit Gewürzen gekocht wird. Es ist proteinreich und vollständig vegetarisch.",
          nl: "Dal is een basisgerecht in de Indiase keuken gemaakt van verschillende soorten linzen, erwten of bonen gekookt met kruiden. Het is eiwitrijk en volledig vegetarisch."
        }
      },
      {
        question: {
          en: "Which of these vegetables is highest in iron?",
          es: "¿Cuál de estas verduras tiene más hierro?",
          de: "Welches dieser Gemüse hat den höchsten Eisengehalt?",
          nl: "Welke van deze groenten heeft het hoogste ijzergehalte?"
        },
        options: [
          { en: "Spinach", es: "Espinacas", de: "Spinat", nl: "Spinazie" },
          { en: "Cucumber", es: "Pepino", de: "Gurke", nl: "Komkommer" },
          { en: "Celery", es: "Apio", de: "Sellerie", nl: "Selderij" },
          { en: "Lettuce", es: "Lechuga", de: "Salat", nl: "Sla" }
        ],
        correct: 0,
        explanation: {
          en: "Spinach is one of the best plant-based sources of iron, providing about 6.4mg per cooked cup. Iron is essential for vegetarians to prevent anemia.",
          es: "Las espinacas son una de las mejores fuentes vegetales de hierro, proporcionando aproximadamente 6.4mg por taza cocida. El hierro es esencial para los vegetarianos para prevenir la anemia.",
          de: "Spinat ist eine der besten pflanzlichen Eisenquellen und liefert etwa 6,4 mg pro gekochte Tasse. Eisen ist für Vegetarier wichtig, um Anämie zu verhindern.",
          nl: "Spinazie is een van de beste plantaardige ijzerbronnen en levert ongeveer 6,4 mg per gekookte kop. IJzer is essentieel voor vegetariërs om bloedarmoede te voorkomen."
        }
      },
      {
        question: {
          en: "What is hummus made from?",
          es: "¿De qué está hecho el hummus?",
          de: "Woraus wird Hummus hergestellt?",
          nl: "Waar wordt hummus van gemaakt?"
        },
        options: [
          { en: "Chickpeas", es: "Garbanzos", de: "Kichererbsen", nl: "Kikkererwten" },
          { en: "White beans", es: "Frijoles blancos", de: "Weiße Bohnen", nl: "Witte bonen" },
          { en: "Black beans", es: "Frijoles negros", de: "Schwarze Bohnen", nl: "Zwarte bonen" },
          { en: "Kidney beans", es: "Frijoles rojos", de: "Kidneybohnen", nl: "Kidneybonen" }
        ],
        correct: 0,
        explanation: {
          en: "Traditional hummus is made from cooked chickpeas blended with tahini, lemon juice, garlic, and olive oil. It's a protein-rich Middle Eastern dip.",
          es: "El hummus tradicional está hecho de garbanzos cocidos mezclados con tahini, jugo de limón, ajo y aceite de oliva. Es un dip del Medio Oriente rico en proteína.",
          de: "Traditioneller Hummus wird aus gekochten Kichererbsen hergestellt, die mit Tahini, Zitronensaft, Knoblauch und Olivenöl vermischt werden. Es ist ein proteinreicher nahöstlicher Dip.",
          nl: "Traditionele hummus wordt gemaakt van gekookte kikkererwten gemengd met tahini, citroensap, knoflook en olijfolie. Het is een eiwitrijke Midden-Oosterse dip."
        }
      },
      {
        question: {
          en: "Which cooking method is best for preserving nutrients in vegetables?",
          es: "¿Qué método de cocción es mejor para preservar los nutrientes en las verduras?",
          de: "Welche Kochmethode ist am besten, um Nährstoffe in Gemüse zu bewahren?",
          nl: "Welke kookmethode is het beste voor het behouden van voedingsstoffen in groenten?"
        },
        options: [
          { en: "Steaming", es: "Cocinar al vapor", de: "Dampfgaren", nl: "Stomen" },
          { en: "Boiling for long periods", es: "Hervir por períodos largos", de: "Langes Kochen", nl: "Lang koken" },
          { en: "Deep frying", es: "Freír en aceite abundante", de: "Frittieren", nl: "Frituren" },
          { en: "Soaking in water", es: "Remojar en agua", de: "In Wasser einweichen", nl: "Weken in water" }
        ],
        correct: 0,
        explanation: {
          en: "Steaming preserves the most nutrients as vegetables don't come in direct contact with water, preventing water-soluble vitamins from leaching out.",
          es: "Cocinar al vapor preserva la mayor cantidad de nutrientes ya que las verduras no entran en contacto directo con agua, evitando que las vitaminas solubles en agua se pierdan.",
          de: "Dampfgaren bewahrt die meisten Nährstoffe, da Gemüse nicht direkt mit Wasser in Kontakt kommt, wodurch das Auslaugen wasserlöslicher Vitamine verhindert wird.",
          nl: "Stomen behoudt de meeste voedingsstoffen omdat groenten niet direct in contact komen met water, waardoor wordt voorkomen dat in water oplosbare vitamines weglekken."
        }
      },
      {
        question: {
          en: "What is tempeh?",
          es: "¿Qué es el tempeh?",
          de: "Was ist Tempeh?",
          nl: "Wat is tempeh?"
        },
        options: [
          { en: "Fermented soybeans", es: "Soja fermentada", de: "Fermentierte Sojabohnen", nl: "Gefermenteerde sojabonen" },
          { en: "Seasoned tofu", es: "Tofu sazonado", de: "Gewürzter Tofu", nl: "Gekruide tofu" },
          { en: "A type of seaweed", es: "Un tipo de alga marina", de: "Eine Art Seetang", nl: "Een soort zeewier" },
          { en: "Wheat gluten", es: "Gluten de trigo", de: "Weizengluten", nl: "Tarwegluten" }
        ],
        correct: 0,
        explanation: {
          en: "Tempeh is a traditional Indonesian food made from fermented soybeans. It has a nutty flavor and firm texture, and is rich in protein and probiotics.",
          es: "El tempeh es un alimento tradicional indonesio hecho de soja fermentada. Tiene un sabor a nuez y textura firme, y es rico en proteína y probióticos.",
          de: "Tempeh ist ein traditionelles indonesisches Lebensmittel aus fermentierten Sojabohnen. Es hat einen nussigen Geschmack und feste Textur und ist reich an Protein und Probiotika.",
          nl: "Tempeh is een traditioneel Indonesisch voedsel gemaakt van gefermenteerde sojabonen. Het heeft een nootachtige smaak en stevige textuur, en is rijk aan eiwit en probiotica."
        }
      },
      {
        question: {
          en: "Which vegetarian cheese is made without animal rennet?",
          es: "¿Qué queso vegetariano se hace sin cuajo animal?",
          de: "Welcher vegetarische Käse wird ohne tierisches Lab hergestellt?",
          nl: "Welke vegetarische kaas wordt gemaakt zonder dierlijke stremsel?"
        },
        options: [
          { en: "Cheese made with microbial or plant-based rennet", es: "Queso hecho con cuajo microbiano o vegetal", de: "Käse mit mikrobiellem oder pflanzlichem Lab", nl: "Kaas gemaakt met microbieel of plantaardig stremsel" },
          { en: "All aged cheeses", es: "Todos los quesos añejos", de: "Alle gereiften Käse", nl: "Alle gerijpte kazen" },
          { en: "Only soft cheeses", es: "Solo quesos blandos", de: "Nur Weichkäse", nl: "Alleen zachte kazen" },
          { en: "Blue cheese varieties", es: "Variedades de queso azul", de: "Blauschimmelkäse-Sorten", nl: "Blauwschimmelkaas variëteiten" }
        ],
        correct: 0,
        explanation: {
          en: "Vegetarian cheeses use microbial or plant-based rennet instead of animal rennet (from calf stomach lining) to coagulate the milk during cheese-making.",
          es: "Los quesos vegetarianos usan cuajo microbiano o vegetal en lugar de cuajo animal (del revestimiento del estómago de ternera) para coagular la leche durante la fabricación del queso.",
          de: "Vegetarische Käse verwenden mikrobielles oder pflanzliches Lab anstelle von tierischem Lab (aus Kalbsmagenschleimhaut) zur Koagulation der Milch bei der Käseherstellung.",
          nl: "Vegetarische kazen gebruiken microbieel of plantaardig stremsel in plaats van dierlijk stremsel (van kalfmaagvoering) om de melk te laten stremmen tijdens het kaasmaken."
        }
      },
      {
        question: {
          en: "What is a complete protein?",
          es: "¿Qué es una proteína completa?",
          de: "Was ist ein vollständiges Protein?",
          nl: "Wat is een compleet eiwit?"
        },
        options: [
          { en: "A protein containing all essential amino acids", es: "Una proteína que contiene todos los aminoácidos esenciales", de: "Ein Protein, das alle essentiellen Aminosäuren enthält", nl: "Een eiwit dat alle essentiële aminozuren bevat" },
          { en: "A protein from animal sources only", es: "Una proteína solo de fuentes animales", de: "Ein Protein nur aus tierischen Quellen", nl: "Een eiwit alleen uit dierlijke bronnen" },
          { en: "A protein that has been cooked", es: "Una proteína que ha sido cocida", de: "Ein gekochtes Protein", nl: "Een eiwit dat is gekookt" },
          { en: "A protein supplement", es: "Un suplemento proteico", de: "Ein Proteinergänzungsmittel", nl: "Een eiwitssupplement" }
        ],
        correct: 0,
        explanation: {
          en: "A complete protein contains all nine essential amino acids that the human body cannot produce on its own. Examples include quinoa, soy, and hemp seeds.",
          es: "Una proteína completa contiene todos los nueve aminoácidos esenciales que el cuerpo humano no puede producir por sí mismo. Ejemplos incluyen quinoa, soja y semillas de cáñamo.",
          de: "Ein vollständiges Protein enthält alle neun essentiellen Aminosäuren, die der menschliche Körper nicht selbst produzieren kann. Beispiele sind Quinoa, Soja und Hanfsamen.",
          nl: "Een compleet eiwit bevat alle negen essentiële aminozuren die het menselijk lichaam niet zelf kan produceren. Voorbeelden zijn quinoa, soja en hennepzaad."
        }
      },
      {
        question: {
          en: "Which vegetable is commonly used to make vegetarian 'meatballs'?",
          es: "¿Qué verdura se usa comúnmente para hacer 'albóndigas' vegetarianas?",
          de: "Welches Gemüse wird häufig für vegetarische 'Fleischbällchen' verwendet?",
          nl: "Welke groente wordt vaak gebruikt om vegetarische 'gehaktballen' te maken?"
        },
        options: [
          { en: "Eggplant", es: "Berenjena", de: "Aubergine", nl: "Aubergine" },
          { en: "Watermelon", es: "Sandía", de: "Wassermelone", nl: "Watermeloen" },
          { en: "Cabbage", es: "Repollo", de: "Kohl", nl: "Kool" },
          { en: "Radish", es: "Rábano", de: "Rettich", nl: "Radijs" }
        ],
        correct: 0,
        explanation: {
          en: "Eggplant has a meaty texture when cooked and is commonly used in vegetarian meatballs, often combined with breadcrumbs, herbs, and binding agents.",
          es: "La berenjena tiene una textura carnosa cuando se cocina y se usa comúnmente en albóndigas vegetarianas, a menudo combinada with pan rallado, hierbas y agentes aglutinantes.",
          de: "Aubergine hat beim Kochen eine fleischige Textur und wird häufig in vegetarischen Fleischbällchen verwendet, oft kombiniert mit Paniermehl, Kräutern und Bindemitteln.",
          nl: "Aubergine heeft een vleesachtige textuur wanneer gekookt en wordt vaak gebruikt in vegetarische gehaktballen, vaak gecombineerd met paneermeel, kruiden en bindmiddelen."
        }
      },
      {
        question: {
          en: "What is the main ingredient in traditional ratatouille?",
          es: "¿Cuál es el ingrediente principal en el ratatouille tradicional?",
          de: "Was ist die Hauptzutat in traditionellem Ratatouille?",
          nl: "Wat is het hoofdingrediënt in traditionele ratatouille?"
        },
        options: [
          { en: "Various summer vegetables", es: "Varias verduras de verano", de: "Verschiedenes Sommergemüse", nl: "Verschillende zomergroenten" },
          { en: "Only tomatoes", es: "Solo tomates", de: "Nur Tomaten", nl: "Alleen tomaten" },
          { en: "Meat and vegetables", es: "Carne y verduras", de: "Fleisch und Gemüse", nl: "Vlees en groenten" },
          { en: "Rice and beans", es: "Arroz y frijoles", de: "Reis und Bohnen", nl: "Rijst en bonen" }
        ],
        correct: 0,
        explanation: {
          en: "Ratatouille is a French vegetarian stew made with summer vegetables like eggplant, zucchini, bell peppers, tomatoes, onions, and herbs de Provence.",
          es: "El ratatouille es un guiso vegetariano francés hecho con verduras de verano como berenjena, calabacín, pimientos, tomates, cebollas y hierbas de Provenza.",
          de: "Ratatouille ist ein französischer vegetarischer Eintopf aus Sommergemüse wie Auberginen, Zucchini, Paprika, Tomaten, Zwiebeln und Kräutern der Provence.",
          nl: "Ratatouille is een Franse vegetarische stoofschotel gemaakt met zomergroenten zoals aubergine, courgette, paprika, tomaten, uien en kruiden de Provence."
        }
      },
      {
        question: {
          en: "Which nut is commonly used to make vegetarian 'cheese' sauces?",
          es: "¿Qué nuez se usa comúnmente para hacer salsas de 'queso' vegetarianas?",
          de: "Welche Nuss wird häufig für vegetarische 'Käse'-Saucen verwendet?",
          nl: "Welke noot wordt vaak gebruikt om vegetarische 'kaas' sauzen te maken?"
        },
        options: [
          { en: "Cashews", es: "Anacardos", de: "Cashewnüsse", nl: "Cashewnoten" },
          { en: "Peanuts", es: "Maní", de: "Erdnüsse", nl: "Pinda's" },
          { en: "Walnuts", es: "Nueces", de: "Walnüsse", nl: "Walnoten" },
          { en: "Hazelnuts", es: "Avellanas", de: "Haselnüsse", nl: "Hazelnoten" }
        ],
        correct: 0,
        explanation: {
          en: "Cashews have a creamy texture when soaked and blended, making them perfect for dairy-free cheese sauces. They're mild in flavor and blend smoothly.",
          es: "Los anacardos tienen una textura cremosa cuando se remojan y se mezclan, haciéndolos perfectos para salsas de queso sin lácteos. Tienen sabor suave y se mezclan fácilmente.",
          de: "Cashewnüsse haben eine cremige Textur, wenn sie eingeweicht und gemixt werden, was sie perfekt für milchfreie Käsesaucen macht. Sie sind mild im Geschmack und mischen sich glatt.",
          nl: "Cashewnoten hebben een romige textuur wanneer geweekt en gemixt, waardoor ze perfect zijn voor zuivelvrije kaassauzen. Ze hebben een milde smaak en mengen glad."
        }
      },
      {
        question: {
          en: "What is seitan made from?",
          es: "¿De qué está hecho el seitán?",
          de: "Woraus wird Seitan hergestellt?",
          nl: "Waar wordt seitan van gemaakt?"
        },
        options: [
          { en: "Wheat gluten", es: "Gluten de trigo", de: "Weizengluten", nl: "Tarwegluten" },
          { en: "Rice flour", es: "Harina de arroz", de: "Reismehl", nl: "Rijstmeel" },
          { en: "Potato starch", es: "Almidón de papa", de: "Kartoffelstärke", nl: "Aardappelzetmeel" },
          { en: "Corn meal", es: "Harina de maíz", de: "Maismehl", nl: "Maismeel" }
        ],
        correct: 0,
        explanation: {
          en: "Seitan is made from vital wheat gluten, the protein component of wheat. It has a chewy, meat-like texture and is high in protein but not suitable for those with gluten intolerance.",
          es: "El seitán está hecho de gluten vital de trigo, el componente proteico del trigo. Tiene una textura masticable similar a la carne y es alto en proteína pero no adecuado para quienes tienen intolerancia al gluten.",
          de: "Seitan wird aus vitalem Weizengluten hergestellt, dem Proteinbestandteil des Weizens. Es hat eine zähe, fleischähnliche Textur und ist proteinreich, aber nicht geeignet für Menschen mit Glutenunverträglichkeit.",
          nl: "Seitan wordt gemaakt van vitale tarwegluten, het eiwitgedeelte van tarwe. Het heeft een taaie, vleesachtige textuur en is rijk aan eiwit maar niet geschikt voor mensen met glutenintolerantie."
        }
      },
      {
        question: {
          en: "Which cooking technique helps enhance the flavor of vegetables without adding calories?",
          es: "¿Qué técnica de cocción ayuda a realzar el sabor de las verduras sin añadir calorías?",
          de: "Welche Kochtechnik hilft, den Geschmack von Gemüse zu verstärken, ohne Kalorien hinzuzufügen?",
          nl: "Welke kooktechniek helpt de smaak van groenten te versterken zonder calorieën toe te voegen?"
        },
        options: [
          { en: "Roasting", es: "Asar", de: "Rösten", nl: "Roosteren" },
          { en: "Deep frying", es: "Freír en aceite abundante", de: "Frittieren", nl: "Frituren" },
          { en: "Adding butter", es: "Añadir mantequilla", de: "Butter hinzufügen", nl: "Boter toevoegen" },
          { en: "Coating with cream", es: "Cubrir con crema", de: "Mit Sahne überziehen", nl: "Bedekken met room" }
        ],
        correct: 0,
        explanation: {
          en: "Roasting caramelizes the natural sugars in vegetables, concentrating flavors and creating appealing textures without requiring added fats or high calories.",
          es: "Asar carameliza los azúcares naturales en las verduras, concentrando sabores y creando texturas atractivas sin requerir grasas añadidas o altas calorías.",
          de: "Rösten karamellisiert die natürlichen Zucker in Gemüse, konzentriert Aromen und schafft ansprechende Texturen ohne zusätzliche Fette oder hohe Kalorien zu benötigen.",
          nl: "Roosteren karameliseert de natuurlijke suikers in groenten, concentreert smaken en creëert aantrekkelijke texturen zonder toegevoegde vetten of hoge calorieën te vereisen."
        }
      },
      {
        question: {
          en: "What is the key to making a good vegetarian burger patty?",
          es: "¿Cuál es la clave para hacer una buena hamburguesa vegetariana?",
          de: "Was ist der Schlüssel für einen guten vegetarischen Burger-Patty?",
          nl: "Wat is de sleutel tot het maken van een goede vegetarische burger?"
        },
        options: [
          { en: "Proper binding and moisture balance", es: "Unión adecuada y equilibrio de humedad", de: "Richtige Bindung und Feuchtigkeitsbalance", nl: "Juiste binding en vochtbalans" },
          { en: "Using only vegetables", es: "Usar solo verduras", de: "Nur Gemüse verwenden", nl: "Alleen groenten gebruiken" },
          { en: "Making it very spicy", es: "Hacerla muy picante", de: "Sehr würzig machen", nl: "Heel pittig maken" },
          { en: "Adding lots of salt", es: "Añadir mucha sal", de: "Viel Salz hinzufügen", nl: "Veel zout toevoegen" }
        ],
        correct: 0,
        explanation: {
          en: "A successful vegetarian burger needs proper binding agents (like eggs, flour, or flax) and balanced moisture to hold together while cooking and provide good texture.",
          es: "Una hamburguesa vegetariana exitosa necesita agentes aglutinantes adecuados (como huevos, harina o linaza) y humedad equilibrada para mantenerse unida mientras se cocina y proporcionar buena textura.",
          de: "Ein erfolgreicher vegetarischer Burger braucht richtige Bindemittel (wie Eier, Mehl oder Leinsamen) und ausgewogene Feuchtigkeit, um beim Kochen zusammenzuhalten und gute Textur zu bieten.",
          nl: "Een succesvolle vegetarische burger heeft juiste bindmiddelen nodig (zoals eieren, meel of lijnzaad) en gebalanceerd vocht om samen te blijven tijdens het koken en goede textuur te bieden."
        }
      },
      {
        question: {
          en: "What is a vegetarian diet?",
          es: "¿Qué es una dieta vegetariana?",
          de: "Was ist eine vegetarische Ernährung?",
          nl: "Wat is een vegetarisch dieet?"
        },
        options: [
          { en: "A diet that excludes meat, fish, and poultry", es: "Una dieta que excluye carne, pescado y aves", de: "Eine Ernährung, die Fleisch, Fisch und Geflügel ausschließt", nl: "Een dieet dat vlees, vis en gevogelte uitsluit" },
          { en: "A diet that only includes vegetables", es: "Una dieta que solo incluye verduras", de: "Eine Ernährung, die nur Gemüse enthält", nl: "Een dieet dat alleen groenten bevat" },
          { en: "A diet for weight loss", es: "Una dieta para perder peso", de: "Eine Diät zum Abnehmen", nl: "Een dieet voor gewichtsverlies" },
          { en: "A diet without dairy products", es: "Una dieta sin productos lácteos", de: "Eine Ernährung ohne Milchprodukte", nl: "Een dieet zonder zuivelproducten" }
        ],
        correct: 0,
        explanation: {
          en: "A vegetarian diet excludes meat, fish, and poultry, but may include dairy products and eggs. There are different types of vegetarian diets with varying restrictions.",
          es: "Una dieta vegetariana excluye carne, pescado y aves, pero puede incluir productos lácteos y huevos. Hay diferentes tipos de dietas vegetarianas con diversas restricciones.",
          de: "Eine vegetarische Ernährung schließt Fleisch, Fisch und Geflügel aus, kann aber Milchprodukte und Eier enthalten. Es gibt verschiedene Arten vegetarischer Ernährung mit unterschiedlichen Einschränkungen.",
          nl: "Een vegetarisch dieet sluit vlees, vis en gevogelte uit, maar kan wel zuivelproducten en eieren bevatten. Er zijn verschillende soorten vegetarische diëten met verschillende beperkingen."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  }
  return level1;
})();