// Salads Quiz - Level 3: Dressings & Vinaigrettes
(function() {
  const level3 = {
    name: {
      en: "Salads Level 3",
      es: "Ensaladas Nivel 3",
      de: "Salate Stufe 3",
      nl: "Salades Level 3"
    },
    questions: [
      {
        question: {
          en: "What is the classic ratio of oil to acid in a basic vinaigrette?",
          es: "¿Cuál es la proporción clásica de aceite a ácido en una vinagreta básica?",
          de: "Was ist das klassische Verhältnis von Öl zu Säure in einer grundlegenden Vinaigrette?",
          nl: "Wat is de klassieke verhouding van olie tot zuur in een basis vinaigrette?"
        },
        options: [
          { en: "1:1 (equal parts)", es: "1:1 (partes iguales)", de: "1:1 (gleiche Teile)", nl: "1:1 (gelijke delen)" },
          { en: "2:1 (oil to acid)", es: "2:1 (aceite a ácido)", de: "2:1 (Öl zu Säure)", nl: "2:1 (olie tot zuur)" },
          { en: "3:1 (oil to acid)", es: "3:1 (aceite a ácido)", de: "3:1 (Öl zu Säure)", nl: "3:1 (olie tot zuur)" },
          { en: "4:1 (oil to acid)", es: "4:1 (aceite a ácido)", de: "4:1 (Öl zu Säure)", nl: "4:1 (olie tot zuur)" }
        ],
        correct: 2,
        explanation: {
          en: "The classic ratio for vinaigrette is 3:1 oil to acid (vinegar or citrus juice). This provides the right balance of richness from oil and brightness from acid without being too oily or too tart. This ratio can be adjusted to personal taste and the specific ingredients used.",
          es: "La proporción clásica para vinagreta es 3:1 aceite a ácido (vinagre o jugo cítrico). Esto proporciona el equilibrio correcto de riqueza del aceite y brillo del ácido sin ser demasiado aceitoso o demasiado ácido. Esta proporción puede ajustarse al gusto personal y los ingredientes específicos utilizados.",
          de: "Das klassische Verhältnis für Vinaigrette ist 3:1 Öl zu Säure (Essig oder Zitronensaft). Dies bietet die richtige Balance von Reichhaltigkeit durch Öl und Helligkeit durch Säure, ohne zu ölig oder zu sauer zu sein. Dieses Verhältnis kann je nach persönlichem Geschmack und den verwendeten Zutaten angepasst werden.",
          nl: "De klassieke verhouding voor vinaigrette is 3:1 olie tot zuur (azijn of citroensap). Dit biedt de juiste balans van rijkheid van olie en helderheid van zuur zonder te olieachtig of te zuur te zijn. Deze verhouding kan aangepast worden aan persoonlijke smaak en de specifieke gebruikte ingrediënten."
        }
      },
      {
        question: {
          en: "What is an emulsification in salad dressing preparation?",
          es: "¿Qué es una emulsificación en la preparación de aderezos para ensalada?",
          de: "Was ist eine Emulgierung bei der Zubereitung von Salatdressing?",
          nl: "Wat is een emulsificatie bij het bereiden van saladedressing?"
        },
        options: [
          { en: "Adding herbs to the dressing", es: "Agregar hierbas al aderezo", de: "Kräuter zum Dressing hinzufügen", nl: "Kruiden toevoegen aan de dressing" },
          { en: "The process of combining oil and water-based ingredients into a stable mixture", es: "El proceso de combinar aceite e ingredientes a base de agua en una mezcla estable", de: "Der Prozess der Kombination von Öl und wasserbasierten Zutaten zu einer stabilen Mischung", nl: "Het proces van het combineren van olie en water-gebaseerde ingrediënten tot een stabiel mengsel" },
          { en: "Heating the dressing", es: "Calentar el aderezo", de: "Das Dressing erhitzen", nl: "De dressing verwarmen" },
          { en: "Straining the dressing", es: "Colar el aderezo", de: "Das Dressing abseihen", nl: "De dressing zeven" }
        ],
        correct: 1,
        explanation: {
          en: "Emulsification is the process of combining oil and water-based ingredients (like vinegar or lemon juice) that naturally don't mix, creating a stable, smooth mixture. This is often achieved through whisking or using emulsifiers like mustard, egg yolk, or honey.",
          es: "La emulsificación es el proceso de combinar aceite e ingredientes a base de agua (como vinagre o jugo de limón) que naturalmente no se mezclan, creando una mezcla estable y suave. Esto a menudo se logra batiendo o usando emulsificantes como mostaza, yema de huevo o miel.",
          de: "Emulgierung ist der Prozess der Kombination von Öl und wasserbasierten Zutaten (wie Essig oder Zitronensaft), die sich natürlich nicht mischen, um eine stabile, glatte Mischung zu schaffen. Dies wird oft durch Rühren oder Verwendung von Emulgatoren wie Senf, Eigelb oder Honig erreicht.",
          nl: "Emulsificatie is het proces van het combineren van olie en water-gebaseerde ingrediënten (zoals azijn of citroensap) die van nature niet mengen, waardoor een stabiel, glad mengsel ontstaat. Dit wordt vaak bereikt door kloppen of het gebruik van emulgatoren zoals mosterd, eidooier of honing."
        }
      },
      {
        question: {
          en: "Which ingredient acts as a natural emulsifier in vinaigrettes?",
          es: "¿Qué ingrediente actúa como emulsificante natural en las vinagretas?",
          de: "Welche Zutat wirkt als natürlicher Emulgator in Vinaigrettes?",
          nl: "Welk ingrediënt werkt als natuurlijke emulgator in vinaigrettes?"
        },
        options: [
          { en: "Salt", es: "Sal", de: "Salz", nl: "Zout" },
          { en: "Dijon mustard", es: "Mostaza Dijon", de: "Dijon-Senf", nl: "Dijon mosterd" },
          { en: "Black pepper", es: "Pimienta negra", de: "Schwarzer Pfeffer", nl: "Zwarte peper" },
          { en: "Garlic", es: "Ajo", de: "Knoblauch", nl: "Knoflook" }
        ],
        correct: 1,
        explanation: {
          en: "Dijon mustard contains natural emulsifiers (lecithin and proteins) that help bind oil and vinegar together, creating a more stable and creamy vinaigrette that won't separate as quickly. It also adds flavor depth and a slight tanginess to the dressing.",
          es: "La mostaza Dijon contiene emulsificantes naturales (lecitina y proteínas) que ayudan a unir aceite y vinagre, creando una vinagreta más estable y cremosa que no se separará tan rápidamente. También agrega profundidad de sabor y un ligero toque ácido al aderezo.",
          de: "Dijon-Senf enthält natürliche Emulgatoren (Lecithin und Proteine), die helfen, Öl und Essig zu verbinden und eine stabilere und cremigere Vinaigrette zu schaffen, die sich nicht so schnell trennt. Er fügt auch Geschmackstiefe und eine leichte Säure zum Dressing hinzu.",
          nl: "Dijon mosterd bevat natuurlijke emulgatoren (lecithine en eiwitten) die helpen olie en azijn te binden, waardoor een stabielere en romigere vinaigrette ontstaat die niet zo snel zal scheiden. Het voegt ook smaakdiepte en een lichte zuurheid toe aan de dressing."
        }
      },
      {
        question: {
          en: "What is the difference between a vinaigrette and a cream-based dressing?",
          es: "¿Cuál es la diferencia entre una vinagreta y un aderezo a base de crema?",
          de: "Was ist der Unterschied zwischen einer Vinaigrette und einem sahnebasierten Dressing?",
          nl: "Wat is het verschil tussen een vinaigrette en een room-gebaseerde dressing?"
        },
        options: [
          { en: "Vinaigrettes are hot, cream-based dressings are cold", es: "Las vinagretas están calientes, los aderezos a base de crema están fríos", de: "Vinaigrettes sind heiß, sahnebasierte Dressings sind kalt", nl: "Vinaigrettes zijn warm, room-gebaseerde dressings zijn koud" },
          { en: "Vinaigrettes are oil and acid based, cream-based dressings use dairy or mayonnaise", es: "Las vinagretas están basadas en aceite y ácido, los aderezos a base de crema usan lácteos o mayonesa", de: "Vinaigrettes sind öl- und säurebasiert, sahnebasierte Dressings verwenden Milchprodukte oder Mayonnaise", nl: "Vinaigrettes zijn olie en zuur gebaseerd, room-gebaseerde dressings gebruiken zuivel of mayonaise" },
          { en: "Vinaigrettes contain herbs, cream-based dressings don't", es: "Las vinagretas contienen hierbas, los aderezos a base de crema no", de: "Vinaigrettes enthalten Kräuter, sahnebasierte Dressings nicht", nl: "Vinaigrettes bevatten kruiden, room-gebaseerde dressings niet" },
          { en: "There is no difference", es: "No hay diferencia", de: "Es gibt keinen Unterschied", nl: "Er is geen verschil" }
        ],
        correct: 1,
        explanation: {
          en: "Vinaigrettes are primarily composed of oil and acid (vinegar or citrus), while cream-based dressings use dairy products like sour cream, buttermilk, or mayonnaise as their base. This gives them different textures, flavors, and nutritional profiles.",
          es: "Las vinagretas están compuestas principalmente de aceite y ácido (vinagre o cítricos), mientras que los aderezos a base de crema usan productos lácteos como crema agria, suero de leche o mayonesa como su base. Esto les da diferentes texturas, sabores y perfiles nutricionales.",
          de: "Vinaigrettes bestehen hauptsächlich aus Öl und Säure (Essig oder Zitrus), während sahnebasierte Dressings Milchprodukte wie saure Sahne, Buttermilch oder Mayonnaise als Basis verwenden. Dies verleiht ihnen unterschiedliche Texturen, Geschmäcker und Nährwertprofile.",
          nl: "Vinaigrettes bestaan voornamelijk uit olie en zuur (azijn of citrus), terwijl room-gebaseerde dressings zuivelproducten zoals zure room, karnemelk of mayonaise als basis gebruiken. Dit geeft ze verschillende texturen, smaken en voedingsprofielen."
        }
      },
      {
        question: {
          en: "What is the best method to combine ingredients for a stable vinaigrette?",
          es: "¿Cuál es el mejor método para combinar ingredientes para una vinagreta estable?",
          de: "Was ist die beste Methode, um Zutaten für eine stabile Vinaigrette zu kombinieren?",
          nl: "Wat is de beste methode om ingrediënten te combineren voor een stabiele vinaigrette?"
        },
        options: [
          { en: "Mix everything together at once", es: "Mezclar todo junto de una vez", de: "Alles auf einmal zusammenmischen", nl: "Alles tegelijk mengen" },
          { en: "Start with acid and seasonings, then slowly whisk in oil", es: "Comenzar con ácido y condimentos, luego batir lentamente el aceite", de: "Mit Säure und Gewürzen beginnen, dann langsam Öl einrühren", nl: "Begin met zuur en kruiden, dan langzaam olie inkloppen" },
          { en: "Start with oil, then add acid", es: "Comenzar con aceite, luego agregar ácido", de: "Mit Öl beginnen, dann Säure hinzufügen", nl: "Begin met olie, voeg dan zuur toe" },
          { en: "Heat all ingredients first", es: "Calentar todos los ingredientes primero", de: "Alle Zutaten zuerst erhitzen", nl: "Alle ingrediënten eerst verwarmen" }
        ],
        correct: 1,
        explanation: {
          en: "The best method is to start with acid (vinegar/citrus) and seasonings in a bowl, then slowly whisk in the oil in a thin stream. This gradual incorporation helps create a better emulsion and more stable vinaigrette that won't separate as quickly.",
          es: "El mejor método es comenzar con ácido (vinagre/cítricos) y condimentos en un tazón, luego batir lentamente el aceite en un chorro delgado. Esta incorporación gradual ayuda a crear una mejor emulsión y vinagreta más estable que no se separará tan rápidamente.",
          de: "Die beste Methode ist, mit Säure (Essig/Zitrus) und Gewürzen in einer Schüssel zu beginnen, dann langsam das Öl in einem dünnen Strahl einzurühren. Diese schrittweise Einarbeitung hilft, eine bessere Emulsion und stabilere Vinaigrette zu schaffen, die sich nicht so schnell trennt.",
          nl: "De beste methode is om te beginnen met zuur (azijn/citrus) en kruiden in een kom, dan langzaam de olie in een dunne straal inkloppen. Deze geleidelijke opname helpt een betere emulsie en stabielere vinaigrette te creëren die niet zo snel zal scheiden."
        }
      },
      {
        question: {
          en: "Which type of vinegar is most commonly used in classic French vinaigrette?",
          es: "¿Qué tipo de vinagre se usa más comúnmente en la vinagreta francesa clásica?",
          de: "Welche Art von Essig wird am häufigsten in klassischer französischer Vinaigrette verwendet?",
          nl: "Welk type azijn wordt het meest gebruikt in klassieke Franse vinaigrette?"
        },
        options: [
          { en: "Balsamic vinegar", es: "Vinagre balsámico", de: "Balsamico-Essig", nl: "Balsamico azijn" },
          { en: "Apple cider vinegar", es: "Vinagre de sidra de manzana", de: "Apfelessig", nl: "Appelciderazijn" },
          { en: "Red wine vinegar", es: "Vinagre de vino tinto", de: "Rotweinessig", nl: "Rode wijnazijn" },
          { en: "Rice vinegar", es: "Vinagre de arroz", de: "Reisessig", nl: "Rijstazijn" }
        ],
        correct: 2,
        explanation: {
          en: "Red wine vinegar is the most traditional choice for classic French vinaigrette. It provides a clean, sharp acidity that doesn't overpower other ingredients and pairs well with olive oil. Its moderate acidity level makes it versatile for various salad types.",
          es: "El vinagre de vino tinto es la opción más tradicional para la vinagreta francesa clásica. Proporciona una acidez limpia y fuerte que no abruma otros ingredientes y se combina bien con aceite de oliva. Su nivel moderado de acidez lo hace versátil para varios tipos de ensalada.",
          de: "Rotweinessig ist die traditionellste Wahl für klassische französische Vinaigrette. Er bietet eine saubere, scharfe Säure, die andere Zutaten nicht überwältigt und gut mit Olivenöl harmoniert. Sein moderater Säuregehalt macht ihn vielseitig für verschiedene Salatarten.",
          nl: "Rode wijnazijn is de meest traditionele keuze voor klassieke Franse vinaigrette. Het biedt een schone, scherpe zuurheid die andere ingrediënten niet overheerst en goed samengaat met olijfolie. Het gematigde zuurgehalte maakt het veelzijdig voor verschillende soorten salades."
        }
      },
      {
        question: {
          en: "What is the primary function of salt in salad dressing?",
          es: "¿Cuál es la función principal de la sal en el aderezo para ensalada?",
          de: "Was ist die Hauptfunktion von Salz in Salatdressing?",
          nl: "Wat is de primaire functie van zout in saladedressing?"
        },
        options: [
          { en: "To preserve the dressing", es: "Para conservar el aderezo", de: "Um das Dressing zu konservieren", nl: "Om de dressing te conserveren" },
          { en: "To enhance and balance all other flavors", es: "Para realzar y equilibrar todos los otros sabores", de: "Um alle anderen Geschmäcker zu verstärken und auszugleichen", nl: "Om alle andere smaken te versterken en in balans te brengen" },
          { en: "To thicken the dressing", es: "Para espesar el aderezo", de: "Um das Dressing zu verdicken", nl: "Om de dressing te verdikken" },
          { en: "To change the color", es: "Para cambiar el color", de: "Um die Farbe zu ändern", nl: "Om de kleur te veranderen" }
        ],
        correct: 1,
        explanation: {
          en: "Salt's primary function in salad dressing is to enhance and balance all the other flavors. It amplifies the taste of acids, oils, herbs, and spices, creating a more complex and satisfying flavor profile. Salt also helps bring out the natural flavors of the salad ingredients.",
          es: "La función principal de la sal en el aderezo para ensalada es realzar y equilibrar todos los otros sabores. Amplifica el sabor de ácidos, aceites, hierbas y especias, creando un perfil de sabor más complejo y satisfactorio. La sal también ayuda a resaltar los sabores naturales de los ingredientes de la ensalada.",
          de: "Die Hauptfunktion von Salz in Salatdressing ist, alle anderen Geschmäcker zu verstärken und auszugleichen. Es verstärkt den Geschmack von Säuren, Ölen, Kräutern und Gewürzen und schafft ein komplexeres und befriedigenderes Geschmacksprofil. Salz hilft auch dabei, die natürlichen Aromen der Salatzutaten hervorzubringen.",
          nl: "De primaire functie van zout in saladedressing is om alle andere smaken te versterken en in balans te brengen. Het versterkt de smaak van zuren, oliën, kruiden en specerijen, waardoor een complexer en bevredigender smaakprofiel ontstaat. Zout helpt ook de natuurlijke smaken van de salade-ingrediënten naar voren te brengen."
        }
      },
      {
        question: {
          en: "What is a Caesar dressing primarily made of?",
          es: "¿De qué está hecho principalmente un aderezo César?",
          de: "Woraus besteht Caesar-Dressing hauptsächlich?",
          nl: "Waar bestaat Caesar dressing voornamelijk uit?"
        },
        options: [
          { en: "Mayonnaise, garlic, anchovies, Parmesan cheese, lemon juice", es: "Mayonesa, ajo, anchoas, queso parmesano, jugo de limón", de: "Mayonnaise, Knoblauch, Sardellen, Parmesan-Käse, Zitronensaft", nl: "Mayonaise, knoflook, ansjovis, Parmezaanse kaas, citroensap" },
          { en: "Olive oil and vinegar only", es: "Solo aceite de oliva y vinagre", de: "Nur Olivenöl und Essig", nl: "Alleen olijfolie en azijn" },
          { en: "Ranch dressing with herbs", es: "Aderezo ranch con hierbas", de: "Ranch-Dressing mit Kräutern", nl: "Ranch dressing met kruiden" },
          { en: "Sour cream and chives", es: "Crema agria y cebollinos", de: "Saure Sahne und Schnittlauch", nl: "Zure room en bieslook" }
        ],
        correct: 0,
        explanation: {
          en: "Traditional Caesar dressing is made with mayonnaise (or egg yolk), garlic, anchovies, Parmesan cheese, lemon juice, and often Worcestershire sauce and black pepper. Some versions use olive oil instead of mayonnaise, but the anchovy and Parmesan combination is essential for the distinctive umami flavor.",
          es: "El aderezo César tradicional se hace con mayonesa (o yema de huevo), ajo, anchoas, queso parmesano, jugo de limón, y a menudo salsa Worcestershire y pimienta negra. Algunas versiones usan aceite de oliva en lugar de mayonesa, pero la combinación de anchoa y parmesano es esencial para el sabor umami distintivo.",
          de: "Traditionelles Caesar-Dressing wird mit Mayonnaise (oder Eigelb), Knoblauch, Sardellen, Parmesan-Käse, Zitronensaft und oft Worcestershire-Sauce und schwarzem Pfeffer zubereitet. Einige Versionen verwenden Olivenöl statt Mayonnaise, aber die Kombination aus Sardellen und Parmesan ist wesentlich für den charakteristischen Umami-Geschmack.",
          nl: "Traditionele Caesar dressing wordt gemaakt met mayonaise (of eidooier), knoflook, ansjovis, Parmezaanse kaas, citroensap en vaak Worcestershire saus en zwarte peper. Sommige versies gebruiken olijfolie in plaats van mayonaise, maar de ansjovis en Parmezaan combinatie is essentieel voor de kenmerkende umami smaak."
        }
      },
      {
        question: {
          en: "What is the key characteristic of a honey mustard dressing?",
          es: "¿Cuál es la característica clave de un aderezo de miel y mostaza?",
          de: "Was ist das Hauptmerkmal eines Honig-Senf-Dressings?",
          nl: "Wat is het belangrijkste kenmerk van een honing-mosterd dressing?"
        },
        options: [
          { en: "It's always served hot", es: "Siempre se sirve caliente", de: "Es wird immer heiß serviert", nl: "Het wordt altijd warm geserveerd" },
          { en: "It balances sweet honey with tangy mustard", es: "Equilibra la miel dulce con mostaza ácida", de: "Es balanciert süßen Honig mit würzigem Senf", nl: "Het balanceert zoete honing met pittige mosterd" },
          { en: "It contains no oil", es: "No contiene aceite", de: "Es enthält kein Öl", nl: "Het bevat geen olie" },
          { en: "It's only used for meat salads", es: "Solo se usa para ensaladas de carne", de: "Es wird nur für Fleischsalate verwendet", nl: "Het wordt alleen gebruikt voor vleessalades" }
        ],
        correct: 1,
        explanation: {
          en: "Honey mustard dressing's key characteristic is the perfect balance between sweet honey and tangy mustard, creating a complex flavor profile that's both sweet and sharp. This combination works well with various salad ingredients and provides natural emulsification properties.",
          es: "La característica clave del aderezo de miel y mostaza es el equilibrio perfecto entre la miel dulce y la mostaza ácida, creando un perfil de sabor complejo que es tanto dulce como fuerte. Esta combinación funciona bien con varios ingredientes de ensalada y proporciona propiedades de emulsificación natural.",
          de: "Das Hauptmerkmal von Honig-Senf-Dressing ist die perfekte Balance zwischen süßem Honig und würzigem Senf, wodurch ein komplexes Geschmacksprofil entsteht, das sowohl süß als auch scharf ist. Diese Kombination funktioniert gut mit verschiedenen Salatzutaten und bietet natürliche Emulgiereigenschaften.",
          nl: "Het belangrijkste kenmerk van honing-mosterd dressing is de perfecte balans tussen zoete honing en pittige mosterd, waardoor een complex smaakprofiel ontstaat dat zowel zoet als scherp is. Deze combinatie werkt goed met verschillende salade-ingrediënten en biedt natuurlijke emulgatie-eigenschappen."
        }
      },
      {
        question: {
          en: "What gives ranch dressing its characteristic flavor?",
          es: "¿Qué le da al aderezo ranch su sabor característico?",
          de: "Was verleiht Ranch-Dressing seinen charakteristischen Geschmack?",
          nl: "Wat geeft ranch dressing zijn karakteristieke smaak?"
        },
        options: [
          { en: "Tomatoes and basil", es: "Tomates y albahaca", de: "Tomaten und Basilikum", nl: "Tomaten en basilicum" },
          { en: "Herbs like dill, chives, and parsley combined with buttermilk and mayonnaise", es: "Hierbas como eneldo, cebollinos y perejil combinadas con suero de leche y mayonesa", de: "Kräuter wie Dill, Schnittlauch und Petersilie kombiniert mit Buttermilch und Mayonnaise", nl: "Kruiden zoals dille, bieslook en peterselie gecombineerd met karnemelk en mayonaise" },
          { en: "Lemon and garlic", es: "Limón y ajo", de: "Zitrone und Knoblauch", nl: "Citroen en knoflook" },
          { en: "Vinegar and oil", es: "Vinagre y aceite", de: "Essig und Öl", nl: "Azijn en olie" }
        ],
        correct: 1,
        explanation: {
          en: "Ranch dressing gets its distinctive flavor from a combination of herbs (typically dill, chives, parsley, and sometimes garlic) mixed with a creamy base of buttermilk and mayonnaise. This herb blend creates the tangy, savory flavor that defines ranch dressing.",
          es: "El aderezo ranch obtiene su sabor distintivo de una combinación de hierbas (típicamente eneldo, cebollinos, perejil y a veces ajo) mezcladas con una base cremosa de suero de leche y mayonesa. Esta mezcla de hierbas crea el sabor ácido y salado que define el aderezo ranch.",
          de: "Ranch-Dressing erhält seinen charakteristischen Geschmack durch eine Kombination von Kräutern (typischerweise Dill, Schnittlauch, Petersilie und manchmal Knoblauch), gemischt mit einer cremigen Basis aus Buttermilch und Mayonnaise. Diese Kräutermischung schafft den würzigen, herzhaften Geschmack, der Ranch-Dressing definiert.",
          nl: "Ranch dressing krijgt zijn kenmerkende smaak van een combinatie van kruiden (meestal dille, bieslook, peterselie en soms knoflook) gemengd met een romige basis van karnemelk en mayonaise. Deze kruidenmix creëert de pittige, hartige smaak die ranch dressing definieert."
        }
      },
      {
        question: {
          en: "What is the difference between balsamic vinegar and regular wine vinegar in dressings?",
          es: "¿Cuál es la diferencia entre vinagre balsámico y vinagre de vino regular en aderezos?",
          de: "Was ist der Unterschied zwischen Balsamico-Essig und normalem Weinessig in Dressings?",
          nl: "Wat is het verschil tussen balsamico azijn en gewone wijnazijn in dressings?"
        },
        options: [
          { en: "Balsamic is sweeter and more complex, wine vinegar is sharper and cleaner", es: "El balsámico es más dulce y complejo, el vinagre de vino es más fuerte y limpio", de: "Balsamico ist süßer und komplexer, Weinessig ist schärfer und sauberer", nl: "Balsamico is zoeter en complexer, wijnazijn is scherper en schoner" },
          { en: "They are exactly the same", es: "Son exactamente iguales", de: "Sie sind genau dasselbe", nl: "Ze zijn precies hetzelfde" },
          { en: "Balsamic is always more expensive", es: "El balsámico siempre es más caro", de: "Balsamico ist immer teurer", nl: "Balsamico is altijd duurder" },
          { en: "Wine vinegar is only made from white wine", es: "El vinagre de vino solo se hace de vino blanco", de: "Weinessig wird nur aus Weißwein hergestellt", nl: "Wijnazijn wordt alleen gemaakt van witte wijn" }
        ],
        correct: 0,
        explanation: {
          en: "Balsamic vinegar is aged grape must with a sweet, complex flavor that can range from mild to very intense, while wine vinegar (red or white) has a sharper, cleaner acidic taste. Balsamic adds sweetness and depth, while wine vinegar provides bright acidity without competing flavors.",
          es: "El vinagre balsámico es mosto de uva envejecido con un sabor dulce y complejo que puede variar de suave a muy intenso, mientras que el vinagre de vino (tinto o blanco) tiene un sabor ácido más fuerte y limpio. El balsámico agrega dulzura y profundidad, mientras que el vinagre de vino proporciona acidez brillante sin sabores que compitan.",
          de: "Balsamico-Essig ist gealterter Traubenmost mit einem süßen, komplexen Geschmack, der von mild bis sehr intensiv reichen kann, während Weinessig (rot oder weiß) einen schärferen, saubereren sauren Geschmack hat. Balsamico fügt Süße und Tiefe hinzu, während Weinessig helle Säure ohne konkurrierende Aromen bietet.",
          nl: "Balsamico azijn is gerijpte druivenmost met een zoete, complexe smaak die kan variëren van mild tot zeer intens, terwijl wijnazijn (rood of wit) een scherpere, schonere zure smaak heeft. Balsamico voegt zoetheid en diepte toe, terwijl wijnazijn heldere zuurheid biedt zonder concurrerende smaken."
        }
      },
      {
        question: {
          en: "What is the purpose of letting a vinaigrette sit before using it?",
          es: "¿Cuál es el propósito de dejar reposar una vinagreta antes de usarla?",
          de: "Was ist der Zweck, eine Vinaigrette vor der Verwendung stehen zu lassen?",
          nl: "Wat is het doel van het laten rusten van een vinaigrette voor gebruik?"
        },
        options: [
          { en: "To allow flavors to meld and develop", es: "Para permitir que los sabores se mezclen y desarrollen", de: "Um Aromen verschmelzen und entwickeln zu lassen", nl: "Om smaken te laten versmelten en ontwikkelen" },
          { en: "To make it colder", es: "Para enfriarla", de: "Um es kälter zu machen", nl: "Om het kouder te maken" },
          { en: "To make it thicker", es: "Para espesarla", de: "Um es dicker zu machen", nl: "Om het dikker te maken" },
          { en: "To change its color", es: "Para cambiar su color", de: "Um die Farbe zu ändern", nl: "Om de kleur te veranderen" }
        ],
        correct: 0,
        explanation: {
          en: "Letting a vinaigrette sit for 10-30 minutes allows the flavors to meld and develop, creating a more harmonious and complex taste. This resting period helps garlic, herbs, and spices infuse into the oil and acid, resulting in a more balanced and flavorful dressing.",
          es: "Dejar reposar una vinagreta por 10-30 minutos permite que los sabores se mezclen y desarrollen, creando un sabor más armonioso y complejo. Este período de reposo ayuda a que el ajo, hierbas y especias se infundan en el aceite y ácido, resultando en un aderezo más equilibrado y sabroso.",
          de: "Eine Vinaigrette 10-30 Minuten stehen zu lassen ermöglicht es den Aromen zu verschmelzen und sich zu entwickeln, wodurch ein harmonischerer und komplexerer Geschmack entsteht. Diese Ruhezeit hilft Knoblauch, Kräutern und Gewürzen, sich in Öl und Säure zu infundieren, was zu einem ausgewogeneren und geschmackvolleren Dressing führt.",
          nl: "Een vinaigrette 10-30 minuten laten rusten zorgt ervoor dat de smaken kunnen versmelten en ontwikkelen, waardoor een harmonieuze en complexere smaak ontstaat. Deze rustperiode helpt knoflook, kruiden en specerijen in de olie en het zuur te trekken, wat resulteert in een meer gebalanceerde en smaakvolle dressing."
        }
      },
      {
        question: {
          en: "What type of oil is best for making a neutral-flavored vinaigrette?",
          es: "¿Qué tipo de aceite es mejor para hacer una vinagreta de sabor neutro?",
          de: "Welche Art von Öl ist am besten für eine neutral schmeckende Vinaigrette?",
          nl: "Welk type olie is het best voor het maken van een neutraal smakende vinaigrette?"
        },
        options: [
          { en: "Extra virgin olive oil", es: "Aceite de oliva extra virgen", de: "Natives Olivenöl extra", nl: "Extra vierge olijfolie" },
          { en: "Canola or vegetable oil", es: "Aceite de canola o vegetal", de: "Raps- oder Pflanzenöl", nl: "Koolzaad- of plantaardige olie" },
          { en: "Sesame oil", es: "Aceite de sésamo", de: "Sesamöl", nl: "Sesamolie" },
          { en: "Coconut oil", es: "Aceite de coco", de: "Kokosöl", nl: "Kokosolie" }
        ],
        correct: 1,
        explanation: {
          en: "Canola or vegetable oil is best for neutral-flavored vinaigrettes because they have very mild tastes that won't compete with other ingredients. Extra virgin olive oil has a strong, distinctive flavor that can overpower delicate ingredients, while sesame and coconut oils have very specific tastes.",
          es: "El aceite de canola o vegetal es mejor para vinagretas de sabor neutro porque tienen sabores muy suaves que no competirán con otros ingredientes. El aceite de oliva extra virgen tiene un sabor fuerte y distintivo que puede abrumar ingredientes delicados, mientras que los aceites de sésamo y coco tienen sabores muy específicos.",
          de: "Raps- oder Pflanzenöl ist am besten für neutral schmeckende Vinaigrettes, weil sie sehr milde Geschmäcker haben, die nicht mit anderen Zutaten konkurrieren. Natives Olivenöl extra hat einen starken, charakteristischen Geschmack, der zarte Zutaten überwältigen kann, während Sesam- und Kokosöl sehr spezifische Geschmäcker haben.",
          nl: "Koolzaad- of plantaardige olie is het best voor neutraal smakende vinaigrettes omdat ze zeer milde smaken hebben die niet concurreren met andere ingrediënten. Extra vierge olijfolie heeft een sterke, kenmerkende smaak die delicate ingrediënten kan overheersen, terwijl sesam- en kokosolie zeer specifieke smaken hebben."
        }
      },
      {
        question: {
          en: "What is the main ingredient in traditional Green Goddess dressing?",
          es: "¿Cuál es el ingrediente principal en el aderezo Green Goddess tradicional?",
          de: "Was ist die Hauptzutat in traditionellem Green Goddess Dressing?",
          nl: "Wat is het hoofdingrediënt in traditionele Green Goddess dressing?"
        },
        options: [
          { en: "Spinach", es: "Espinaca", de: "Spinat", nl: "Spinazie" },
          { en: "Fresh herbs like chives, parsley, and tarragon", es: "Hierbas frescas como cebollinos, perejil y estragón", de: "Frische Kräuter wie Schnittlauch, Petersilie und Estragon", nl: "Verse kruiden zoals bieslook, peterselie en dragon" },
          { en: "Avocado", es: "Aguacate", de: "Avocado", nl: "Avocado" },
          { en: "Green olives", es: "Aceitunas verdes", de: "Grüne Oliven", nl: "Groene olijven" }
        ],
        correct: 1,
        explanation: {
          en: "Traditional Green Goddess dressing gets its name and color from fresh green herbs, particularly chives, parsley, and tarragon, combined with a mayonnaise or sour cream base. The abundance of fresh herbs gives it the distinctive green color and complex herbal flavor.",
          es: "El aderezo Green Goddess tradicional obtiene su nombre y color de hierbas verdes frescas, particularmente cebollinos, perejil y estragón, combinadas con una base de mayonesa o crema agria. La abundancia de hierbas frescas le da el color verde distintivo y sabor herbal complejo.",
          de: "Traditionelles Green Goddess Dressing erhält seinen Namen und seine Farbe von frischen grünen Kräutern, insbesondere Schnittlauch, Petersilie und Estragon, kombiniert mit einer Mayonnaise- oder sauren Sahne-Basis. Die Fülle an frischen Kräutern verleiht ihm die charakteristische grüne Farbe und den komplexen Kräutergeschmack.",
          nl: "Traditionele Green Goddess dressing krijgt zijn naam en kleur van verse groene kruiden, met name bieslook, peterselie en dragon, gecombineerd met een mayonaise of zure room basis. De overvloed aan verse kruiden geeft het de kenmerkende groene kleur en complexe kruidensmaak."
        }
      },
      {
        question: {
          en: "How should vinaigrette be stored and for how long?",
          es: "¿Cómo debe almacenarse la vinagreta y por cuánto tiempo?",
          de: "Wie sollte Vinaigrette gelagert werden und wie lange?",
          nl: "Hoe moet vinaigrette bewaard worden en voor hoe lang?"
        },
        options: [
          { en: "At room temperature for up to 1 month", es: "A temperatura ambiente hasta por 1 mes", de: "Bei Raumtemperatur bis zu 1 Monat", nl: "Bij kamertemperatuur tot 1 maand" },
          { en: "In the refrigerator for up to 1 week", es: "En el refrigerador hasta por 1 semana", de: "Im Kühlschrank bis zu 1 Woche", nl: "In de koelkast tot 1 week" },
          { en: "In the freezer for up to 6 months", es: "En el congelador hasta por 6 meses", de: "Im Gefrierschrank bis zu 6 Monate", nl: "In de vriezer tot 6 maanden" },
          { en: "It cannot be stored", es: "No puede almacenarse", de: "Es kann nicht gelagert werden", nl: "Het kan niet bewaard worden" }
        ],
        correct: 1,
        explanation: {
          en: "Vinaigrette should be stored in the refrigerator in a sealed container for up to 1 week. The cold temperature helps preserve freshness and food safety. Before using stored vinaigrette, it should be brought to room temperature and re-whisked since separation is natural.",
          es: "La vinagreta debe almacenarse en el refrigerador en un recipiente sellado hasta por 1 semana. La temperatura fría ayuda a preservar la frescura y seguridad alimentaria. Antes de usar vinagreta almacenada, debe llevarse a temperatura ambiente y batirse nuevamente ya que la separación es natural.",
          de: "Vinaigrette sollte im Kühlschrank in einem verschlossenen Behälter bis zu 1 Woche gelagert werden. Die kalte Temperatur hilft, Frische und Lebensmittelsicherheit zu bewahren. Vor der Verwendung gelagerter Vinaigrette sollte sie auf Raumtemperatur gebracht und neu geschlagen werden, da Trennung natürlich ist.",
          nl: "Vinaigrette moet in de koelkast bewaard worden in een afgesloten container tot 1 week. De koude temperatuur helpt versheid en voedselveiligheid te behouden. Voor het gebruik van bewaarde vinaigrette moet het op kamertemperatuur gebracht en opnieuw geklopt worden omdat scheiding natuurlijk is."
        }
      },
      {
        question: {
          en: "What is the key to making a creamy dressing without dairy?",
          es: "¿Cuál es la clave para hacer un aderezo cremoso sin lácteos?",
          de: "Was ist der Schlüssel für ein cremiges Dressing ohne Milchprodukte?",
          nl: "Wat is de sleutel tot het maken van een romige dressing zonder zuivel?"
        },
        options: [
          { en: "Adding more oil", es: "Agregar más aceite", de: "Mehr Öl hinzufügen", nl: "Meer olie toevoegen" },
          { en: "Using ingredients like avocado, tahini, or nuts as a base", es: "Usar ingredientes como aguacate, tahini o nueces como base", de: "Zutaten wie Avocado, Tahini oder Nüsse als Basis verwenden", nl: "Ingrediënten zoals avocado, tahini of noten als basis gebruiken" },
          { en: "Adding more vinegar", es: "Agregar más vinagre", de: "Mehr Essig hinzufügen", nl: "Meer azijn toevoegen" },
          { en: "Using only herbs", es: "Usar solo hierbas", de: "Nur Kräuter verwenden", nl: "Alleen kruiden gebruiken" }
        ],
        correct: 1,
        explanation: {
          en: "To create creamy dressings without dairy, use naturally creamy ingredients like avocado, tahini (sesame paste), cashews, or other nuts as a base. These ingredients provide richness and body while maintaining a smooth, creamy texture without any dairy products.",
          es: "Para crear aderezos cremosos sin lácteos, usa ingredientes naturalmente cremosos como aguacate, tahini (pasta de sésamo), anacardos u otras nueces como base. Estos ingredientes proporcionan riqueza y cuerpo mientras mantienen una textura suave y cremosa sin productos lácteos.",
          de: "Um cremige Dressings ohne Milchprodukte zu erstellen, verwenden Sie natürlich cremige Zutaten wie Avocado, Tahini (Sesampaste), Cashews oder andere Nüsse als Basis. Diese Zutaten bieten Reichhaltigkeit und Körper und behalten eine glatte, cremige Textur ohne Milchprodukte bei.",
          nl: "Om romige dressings zonder zuivel te maken, gebruik natuurlijk romige ingrediënten zoals avocado, tahini (sesampasta), cashewnoten of andere noten als basis. Deze ingrediënten bieden rijkheid en body terwijl ze een gladde, romige textuur behouden zonder zuivelproducten."
        }
      },
      {
        question: {
          en: "What is the traditional acid used in a classic Italian vinaigrette?",
          es: "¿Cuál es el ácido tradicional usado en una vinagreta italiana clásica?",
          de: "Was ist die traditionelle Säure in einer klassischen italienischen Vinaigrette?",
          nl: "Wat is het traditionele zuur gebruikt in een klassieke Italiaanse vinaigrette?"
        },
        options: [
          { en: "Lemon juice", es: "Jugo de limón", de: "Zitronensaft", nl: "Citroensap" },
          { en: "White wine vinegar", es: "Vinagre de vino blanco", de: "Weißweinessig", nl: "Witte wijnazijn" },
          { en: "Apple cider vinegar", es: "Vinagre de sidra de manzana", de: "Apfelessig", nl: "Appelciderazijn" },
          { en: "Rice vinegar", es: "Vinagre de arroz", de: "Reisessig", nl: "Rijstazijn" }
        ],
        correct: 1,
        explanation: {
          en: "Traditional Italian vinaigrette typically uses white wine vinegar as the acid component, combined with extra virgin olive oil, salt, and sometimes herbs. White wine vinegar provides a clean, bright acidity that complements the fruity notes of good Italian olive oil without overwhelming the flavor.",
          es: "La vinagreta italiana tradicional típicamente usa vinagre de vino blanco como el componente ácido, combinado con aceite de oliva extra virgen, sal y a veces hierbas. El vinagre de vino blanco proporciona una acidez limpia y brillante que complementa las notas frutales del buen aceite de oliva italiano sin abrumar el sabor.",
          de: "Traditionelle italienische Vinaigrette verwendet typischerweise Weißweinessig als Säurekomponente, kombiniert mit nativem Olivenöl extra, Salz und manchmal Kräutern. Weißweinessig bietet eine saubere, helle Säure, die die fruchtigen Noten von gutem italienischen Olivenöl ergänzt, ohne den Geschmack zu überwältigen.",
          nl: "Traditionele Italiaanse vinaigrette gebruikt meestal witte wijnazijn als zuurcomponent, gecombineerd met extra vierge olijfolie, zout en soms kruiden. Witte wijnazijn biedt een schone, heldere zuurheid die de fruitige tonen van goede Italiaanse olijfolie aanvult zonder de smaak te overheersen."
        }
      },
      {
        question: {
          en: "What causes a vinaigrette to separate, and how can this be prevented?",
          es: "¿Qué causa que una vinagreta se separe, y cómo puede prevenirse esto?",
          de: "Was verursacht die Trennung einer Vinaigrette und wie kann dies verhindert werden?",
          nl: "Wat veroorzaakt dat een vinaigrette scheidt, en hoe kan dit voorkomen worden?"
        },
        options: [
          { en: "Oil and acid naturally don't mix; use emulsifiers and proper technique", es: "Aceite y ácido naturalmente no se mezclan; usar emulsificantes y técnica apropiada", de: "Öl und Säure mischen sich natürlich nicht; Emulgatoren und richtige Technik verwenden", nl: "Olie en zuur mengen van nature niet; gebruik emulgatoren en juiste techniek" },
          { en: "Too much salt causes separation", es: "Demasiada sal causa separación", de: "Zu viel Salz verursacht Trennung", nl: "Te veel zout veroorzaakt scheiding" },
          { en: "Wrong temperature causes separation", es: "Temperatura incorrecta causa separación", de: "Falsche Temperatur verursacht Trennung", nl: "Verkeerde temperatuur veroorzaakt scheiding" },
          { en: "Separation cannot be prevented", es: "La separación no puede prevenirse", de: "Trennung kann nicht verhindert werden", nl: "Scheiding kan niet voorkomen worden" }
        ],
        correct: 0,
        explanation: {
          en: "Vinaigrettes separate because oil and water-based liquids (vinegar/citrus) naturally repel each other. This can be minimized by using emulsifiers like mustard or honey, whisking vigorously while slowly adding oil, and proper storage. Some separation is normal and can be fixed by re-whisking.",
          es: "Las vinagretas se separan porque el aceite y los líquidos a base de agua (vinagre/cítricos) naturalmente se repelen. Esto puede minimizarse usando emulsificantes como mostaza o miel, batiendo vigorosamente mientras se agrega lentamente aceite, y almacenamiento apropiado. Algo de separación es normal y puede arreglarse batiendo nuevamente.",
          de: "Vinaigrettes trennen sich, weil Öl und wasserbasierte Flüssigkeiten (Essig/Zitrus) sich natürlich abstoßen. Dies kann durch Emulgatoren wie Senf oder Honig, kräftiges Rühren bei langsamem Ölzugabe und richtige Lagerung minimiert werden. Etwas Trennung ist normal und kann durch erneutes Rühren behoben werden.",
          nl: "Vinaigrettes scheiden omdat olie en water-gebaseerde vloeistoffen (azijn/citrus) elkaar van nature afstoten. Dit kan geminimaliseerd worden door emulgatoren zoals mosterd of honing te gebruiken, krachtig kloppen terwijl langzaam olie wordt toegevoegd, en juiste opslag. Enige scheiding is normaal en kan opgelost worden door opnieuw kloppen."
        }
      },
      {
        question: {
          en: "What is the purpose of adding sugar or honey to some salad dressings?",
          es: "¿Cuál es el propósito de agregar azúcar o miel a algunos aderezos para ensalada?",
          de: "Was ist der Zweck, Zucker oder Honig zu einigen Salatdressings hinzuzufügen?",
          nl: "Wat is het doel van het toevoegen van suiker of honing aan sommige saladedressings?"
        },
        options: [
          { en: "To make the dressing thicker", es: "Para espesar el aderezo", de: "Um das Dressing dicker zu machen", nl: "Om de dressing dikker te maken" },
          { en: "To balance acidity and add complexity", es: "Para equilibrar la acidez y agregar complejidad", de: "Um Säure auszugleichen und Komplexität hinzuzufügen", nl: "Om zuurheid te balanceren en complexiteit toe te voegen" },
          { en: "To preserve the dressing longer", es: "Para conservar el aderezo más tiempo", de: "Um das Dressing länger zu konservieren", nl: "Om de dressing langer te bewaren" },
          { en: "To change the color", es: "Para cambiar el color", de: "Um die Farbe zu ändern", nl: "Om de kleur te veranderen" }
        ],
        correct: 1,
        explanation: {
          en: "Sugar or honey in salad dressings serves to balance the acidity from vinegar or citrus juice, creating a more complex and rounded flavor profile. The sweetness prevents the dressing from being too sharp or harsh, making it more palatable and versatile for different ingredients.",
          es: "El azúcar o miel en aderezos para ensalada sirve para equilibrar la acidez del vinagre o jugo cítrico, creando un perfil de sabor más complejo y redondeado. La dulzura previene que el aderezo sea demasiado fuerte o áspero, haciéndolo más sabroso y versátil para diferentes ingredientes.",
          de: "Zucker oder Honig in Salatdressings dient dazu, die Säure von Essig oder Zitronensaft auszugleichen und ein komplexeres und runderes Geschmacksprofil zu schaffen. Die Süße verhindert, dass das Dressing zu scharf oder hart wird, macht es schmackhafter und vielseitiger für verschiedene Zutaten.",
          nl: "Suiker of honing in saladedressings dient om de zuurheid van azijn of citroensap te balanceren, waardoor een complexer en afgeronder smaakprofiel ontstaat. De zoetheid voorkomt dat de dressing te scherp of hard wordt, waardoor het smakelijker en veelzijdiger wordt voor verschillende ingrediënten."
        }
      },
      {
        question: {
          en: "What is the classic ratio of oil to acid in a basic vinaigrette?",
          es: "¿Cuál es la proporción clásica de aceite a ácido en una vinagreta básica?",
          de: "Was ist das klassische Verhältnis von Öl zu Säure in einer grundlegenden Vinaigrette?",
          nl: "Wat is de klassieke verhouding van olie tot zuur in een basis vinaigrette?"
        },
        options: [
          { en: "1:1 (equal parts)", es: "1:1 (partes iguales)", de: "1:1 (gleiche Teile)", nl: "1:1 (gelijke delen)" },
          { en: "2:1 (oil to acid)", es: "2:1 (aceite a ácido)", de: "2:1 (Öl zu Säure)", nl: "2:1 (olie tot zuur)" },
          { en: "3:1 (oil to acid)", es: "3:1 (aceite a ácido)", de: "3:1 (Öl zu Säure)", nl: "3:1 (olie tot zuur)" },
          { en: "4:1 (oil to acid)", es: "4:1 (aceite a ácido)", de: "4:1 (Öl zu Säure)", nl: "4:1 (olie tot zuur)" }
        ],
        correct: 2,
        explanation: {
          en: "The classic ratio for vinaigrette is 3:1 oil to acid (vinegar or citrus juice). This provides the right balance of richness from oil and brightness from acid without being too oily or too tart. This ratio can be adjusted to personal taste and the specific ingredients used.",
          es: "La proporción clásica para vinagreta es 3:1 aceite a ácido (vinagre o jugo cítrico). Esto proporciona el equilibrio correcto de riqueza del aceite y brillo del ácido sin ser demasiado aceitoso o demasiado ácido. Esta proporción puede ajustarse al gusto personal y los ingredientes específicos utilizados.",
          de: "Das klassische Verhältnis für Vinaigrette ist 3:1 Öl zu Säure (Essig oder Zitronensaft). Dies bietet die richtige Balance von Reichhaltigkeit durch Öl und Helligkeit durch Säure, ohne zu ölig oder zu sauer zu sein. Dieses Verhältnis kann je nach persönlichem Geschmack und den verwendeten Zutaten angepasst werden.",
          nl: "De klassieke verhouding voor vinaigrette is 3:1 olie tot zuur (azijn of citroensap). Dit biedt de juiste balans van rijkheid van olie en helderheid van zuur zonder te olieachtig of te zuur te zijn. Deze verhouding kan aangepast worden aan persoonlijke smaak en de specifieke gebruikte ingrediënten."
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