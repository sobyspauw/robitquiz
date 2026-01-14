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
          en: "What distinguishes Thousand Island dressing from other creamy dressings?",
          es: "¿Qué distingue al aderezo Thousand Island de otros aderezos cremosos?",
          de: "Was unterscheidet Thousand Island Dressing von anderen cremigen Dressings?",
          nl: "Wat onderscheidt Thousand Island dressing van andere romige dressings?"
        },
        options: [
          { en: "Its pink color from ketchup and pickles", es: "Su color rosa del ketchup y pepinillos", de: "Seine rosa Farbe von Ketchup und Essiggurken", nl: "Zijn roze kleur van ketchup en augurken" },
          { en: "It contains only mustard", es: "Solo contiene mostaza", de: "Es enthält nur Senf", nl: "Het bevat alleen mosterd" },
          { en: "It has no mayonnaise", es: "No tiene mayonesa", de: "Es hat keine Mayonnaise", nl: "Het heeft geen mayonaise" },
          { en: "It's always spicy hot", es: "Siempre es picante", de: "Es ist immer scharf", nl: "Het is altijd pittig" }
        ],
        correct: 0,
        explanation: {
          en: "Thousand Island dressing is distinguished by its pinkish color and chunky texture from a mixture of mayonnaise, ketchup, and finely chopped pickles or relish. Some versions also include hard-boiled eggs, onions, or hot sauce for extra flavor complexity.",
          es: "El aderezo Thousand Island se distingue por su color rosado y textura grumosa de una mezcla de mayonesa, ketchup y pepinillos finamente picados o relish. Algunas versiones también incluyen huevos duros, cebollas o salsa picante para complejidad de sabor adicional.",
          de: "Thousand Island Dressing zeichnet sich durch seine rosa Farbe und stückige Textur aus einer Mischung von Mayonnaise, Ketchup und fein gehackten Essiggurken oder Relish aus. Einige Versionen enthalten auch hartgekochte Eier, Zwiebeln oder scharfe Sauce für zusätzliche Geschmackskomplexität.",
          nl: "Thousand Island dressing onderscheidt zich door zijn roze kleur en klonterige textuur van een mengsel van mayonaise, ketchup en fijn gehakte augurken of relish. Sommige versies bevatten ook hardgekookte eieren, uien of hete saus voor extra smaakcomplexiteit."
        }
      },
      {
        question: {
          en: "What makes Blue Cheese dressing unique among salad dressings?",
          es: "¿Qué hace único al aderezo de queso azul entre los aderezos para ensalada?",
          de: "Was macht Blue Cheese Dressing unter den Salatdressings einzigartig?",
          nl: "Wat maakt Blue Cheese dressing uniek onder saladedressings?"
        },
        options: [
          { en: "It contains crumbled blue cheese for a tangy, savory flavor", es: "Contiene queso azul desmenuzado para un sabor salado y ácido", de: "Es enthält zerbröckelten Blauschimmelkäse für einen würzigen, herzhaften Geschmack", nl: "Het bevat verkruimelde blauwe kaas voor een pittige, hartige smaak" },
          { en: "It's always sweet and fruity", es: "Siempre es dulce y afrutado", de: "Es ist immer süß und fruchtig", nl: "Het is altijd zoet en fruitig" },
          { en: "It contains no dairy products", es: "No contiene productos lácteos", de: "Es enthält keine Milchprodukte", nl: "Het bevat geen zuivelproducten" },
          { en: "It's made only with olive oil", es: "Se hace solo con aceite de oliva", de: "Es wird nur mit Olivenöl gemacht", nl: "Het wordt alleen gemaakt met olijfolie" }
        ],
        correct: 0,
        explanation: {
          en: "Blue Cheese dressing is unique for its bold, tangy flavor from crumbled blue cheese mixed into a base of mayonnaise, sour cream, or buttermilk. The characteristic blue-veined cheese provides a strong, savory taste with pungent notes that pairs especially well with crisp greens and buffalo wings.",
          es: "El aderezo de queso azul es único por su sabor audaz y ácido del queso azul desmenuzado mezclado en una base de mayonesa, crema agria o suero de leche. El característico queso con vetas azules proporciona un sabor fuerte y salado con notas punzantes que combina especialmente bien con verduras crujientes y alitas buffalo.",
          de: "Blue Cheese Dressing ist einzigartig für seinen kräftigen, würzigen Geschmack von zerbröckeltem Blauschimmelkäse, gemischt in eine Basis aus Mayonnaise, saurer Sahne oder Buttermilch. Der charakteristische blaugeaderte Käse bietet einen starken, herzhaften Geschmack mit scharfen Noten, der besonders gut zu knackigem Grün und Buffalo Wings passt.",
          nl: "Blue Cheese dressing is uniek vanwege zijn gedurfde, pittige smaak van verkruimelde blauwe kaas gemengd in een basis van mayonaise, zure room of karnemelk. De karakteristieke blauwgeaderde kaas biedt een sterke, hartige smaak met scherpe tonen die vooral goed samengaat met knapperige groenten en buffalo wings."
        }
      },
      {
        question: {
          en: "What is the key ingredient in Asian sesame ginger dressing?",
          es: "¿Cuál es el ingrediente clave en el aderezo asiático de sésamo y jengibre?",
          de: "Was ist die Hauptzutat in asiatischem Sesam-Ingwer-Dressing?",
          nl: "Wat is het belangrijkste ingrediënt in Aziatische sesam gember dressing?"
        },
        options: [
          { en: "Toasted sesame oil and fresh ginger", es: "Aceite de sésamo tostado y jengibre fresco", de: "Geröstetes Sesamöl und frischer Ingwer", nl: "Geroosterde sesamolie en verse gember" },
          { en: "Olive oil and basil", es: "Aceite de oliva y albahaca", de: "Olivenöl und Basilikum", nl: "Olijfolie en basilicum" },
          { en: "Mayonnaise and mustard", es: "Mayonesa y mostaza", de: "Mayonnaise und Senf", nl: "Mayonaise en mosterd" },
          { en: "Cream and garlic", es: "Crema y ajo", de: "Sahne und Knoblauch", nl: "Room en knoflook" }
        ],
        correct: 0,
        explanation: {
          en: "Asian sesame ginger dressing features toasted sesame oil for its nutty, aromatic flavor and fresh ginger for its spicy, warm notes. Often combined with rice vinegar, soy sauce, and sometimes honey, this dressing brings bold Asian flavors to salads with a perfect balance of savory, sweet, and tangy.",
          es: "El aderezo asiático de sésamo y jengibre presenta aceite de sésamo tostado por su sabor aromático a nuez y jengibre fresco por sus notas picantes y cálidas. A menudo combinado con vinagre de arroz, salsa de soja y a veces miel, este aderezo aporta sabores asiáticos audaces a las ensaladas con un equilibrio perfecto de salado, dulce y ácido.",
          de: "Asiatisches Sesam-Ingwer-Dressing enthält geröstetes Sesamöl für seinen nussigen, aromatischen Geschmack und frischen Ingwer für seine würzigen, warmen Noten. Oft kombiniert mit Reisessig, Sojasauce und manchmal Honig, bringt dieses Dressing kräftige asiatische Aromen zu Salaten mit einer perfekten Balance aus herzhaft, süß und würzig.",
          nl: "Aziatische sesam gember dressing bevat geroosterde sesamolie voor zijn nootachtige, aromatische smaak en verse gember voor zijn pittige, warme tonen. Vaak gecombineerd met rijstazijn, sojasaus en soms honing, brengt deze dressing gedurfde Aziatische smaken naar salades met een perfecte balans van hartig, zoet en pittig."
        }
      },
      {
        question: {
          en: "What is the main difference between French dressing and vinaigrette?",
          es: "¿Cuál es la diferencia principal entre el aderezo francés y la vinagreta?",
          de: "Was ist der Hauptunterschied zwischen French Dressing und Vinaigrette?",
          nl: "Wat is het belangrijkste verschil tussen French dressing en vinaigrette?"
        },
        options: [
          { en: "French dressing contains tomato paste and is sweeter", es: "El aderezo francés contiene pasta de tomate y es más dulce", de: "French Dressing enthält Tomatenmark und ist süßer", nl: "French dressing bevat tomatenpuree en is zoeter" },
          { en: "They are exactly the same", es: "Son exactamente iguales", de: "Sie sind genau dasselbe", nl: "Ze zijn precies hetzelfde" },
          { en: "Vinaigrette is always creamy", es: "La vinagreta siempre es cremosa", de: "Vinaigrette ist immer cremig", nl: "Vinaigrette is altijd romig" },
          { en: "French dressing has no oil", es: "El aderezo francés no tiene aceite", de: "French Dressing hat kein Öl", nl: "French dressing heeft geen olie" }
        ],
        correct: 0,
        explanation: {
          en: "American-style French dressing typically contains tomato paste or ketchup, making it orange-red in color and sweeter than traditional vinaigrette. It's creamier and often includes paprika, while classic French vinaigrette is simply oil, vinegar, and seasonings without tomato products.",
          es: "El aderezo francés al estilo americano típicamente contiene pasta de tomate o ketchup, haciéndolo de color naranja-rojo y más dulce que la vinagreta tradicional. Es más cremoso y a menudo incluye pimentón, mientras que la vinagreta francesa clásica es simplemente aceite, vinagre y condimentos sin productos de tomate.",
          de: "French Dressing im amerikanischen Stil enthält typischerweise Tomatenmark oder Ketchup, was es orange-rot färbt und süßer macht als traditionelle Vinaigrette. Es ist cremiger und enthält oft Paprika, während klassische französische Vinaigrette einfach Öl, Essig und Gewürze ohne Tomatenprodukte ist.",
          nl: "Amerikaanse French dressing bevat meestal tomatenpuree of ketchup, waardoor het oranje-rood van kleur is en zoeter dan traditionele vinaigrette. Het is romiger en bevat vaak paprika, terwijl klassieke Franse vinaigrette eenvoudig olie, azijn en kruiden zonder tomatenproducten is."
        }
      },
      {
        question: {
          en: "What gives Russian dressing its characteristic pink color?",
          es: "¿Qué le da al aderezo ruso su color rosa característico?",
          de: "Was gibt Russian Dressing seine charakteristische rosa Farbe?",
          nl: "Wat geeft Russian dressing zijn karakteristieke roze kleur?"
        },
        options: [
          { en: "Chili sauce or ketchup mixed with mayonnaise", es: "Salsa de chile o ketchup mezclado con mayonesa", de: "Chilisauce oder Ketchup gemischt mit Mayonnaise", nl: "Chilisaus of ketchup gemengd met mayonaise" },
          { en: "Strawberry puree", es: "Puré de fresa", de: "Erdbeerpüree", nl: "Aardbeipuree" },
          { en: "Red food coloring", es: "Colorante alimentario rojo", de: "Rote Lebensmittelfarbe", nl: "Rode voedselkleurstof" },
          { en: "Tomato juice only", es: "Solo jugo de tomate", de: "Nur Tomatensaft", nl: "Alleen tomatensap" }
        ],
        correct: 0,
        explanation: {
          en: "Russian dressing gets its distinctive pink-orange color from chili sauce or ketchup mixed with mayonnaise. It also typically includes horseradish for a spicy kick and chopped pickles or relish. This dressing is famous as a key ingredient in Reuben sandwiches.",
          es: "El aderezo ruso obtiene su distintivo color rosa-naranja de la salsa de chile o ketchup mezclado con mayonesa. También típicamente incluye rábano picante para un toque picante y pepinillos picados o relish. Este aderezo es famoso como ingrediente clave en los sándwiches Reuben.",
          de: "Russian Dressing erhält seine charakteristische rosa-orange Farbe von Chilisauce oder Ketchup gemischt mit Mayonnaise. Es enthält typischerweise auch Meerrettich für eine würzige Note und gehackte Essiggurken oder Relish. Dieses Dressing ist berühmt als Hauptzutat in Reuben-Sandwiches.",
          nl: "Russian dressing krijgt zijn kenmerkende roze-oranje kleur van chilisaus of ketchup gemengd met mayonaise. Het bevat ook meestal mierikswortel voor een pittige kick en gehakte augurken of relish. Deze dressing is beroemd als belangrijk ingrediënt in Reuben sandwiches."
        }
      },
      {
        question: {
          en: "What is the purpose of using shallots instead of onions in vinaigrette?",
          es: "¿Cuál es el propósito de usar chalotas en lugar de cebollas en la vinagreta?",
          de: "Was ist der Zweck, Schalotten statt Zwiebeln in Vinaigrette zu verwenden?",
          nl: "Wat is het doel van het gebruik van sjalotten in plaats van uien in vinaigrette?"
        },
        options: [
          { en: "Shallots provide a milder, more delicate onion flavor", es: "Las chalotas proporcionan un sabor a cebolla más suave y delicado", de: "Schalotten bieten einen milderen, zarteren Zwiebelgeschmack", nl: "Sjalotten bieden een mildere, meer delicate uiensmaak" },
          { en: "Shallots are always cheaper", es: "Las chalotas siempre son más baratas", de: "Schalotten sind immer billiger", nl: "Sjalotten zijn altijd goedkoper" },
          { en: "Shallots make the dressing thicker", es: "Las chalotas hacen el aderezo más espeso", de: "Schalotten machen das Dressing dicker", nl: "Sjalotten maken de dressing dikker" },
          { en: "There is no difference", es: "No hay diferencia", de: "Es gibt keinen Unterschied", nl: "Er is geen verschil" }
        ],
        correct: 0,
        explanation: {
          en: "Shallots are preferred in many vinaigrettes because they have a milder, sweeter, more delicate flavor than regular onions. They add subtle onion notes without overwhelming other ingredients. Shallots also break down more smoothly when minced finely, creating a better texture in the dressing.",
          es: "Las chalotas se prefieren en muchas vinagretas porque tienen un sabor más suave, dulce y delicado que las cebollas regulares. Añaden notas sutiles de cebolla sin abrumar otros ingredientes. Las chalotas también se descomponen más suavemente cuando se pican finamente, creando una mejor textura en el aderezo.",
          de: "Schalotten werden in vielen Vinaigrettes bevorzugt, weil sie einen milderen, süßeren, zarteren Geschmack als normale Zwiebeln haben. Sie fügen subtile Zwiebelnoten hinzu, ohne andere Zutaten zu überwältigen. Schalotten zerfallen auch glatter, wenn sie fein gehackt werden, was eine bessere Textur im Dressing schafft.",
          nl: "Sjalotten hebben de voorkeur in veel vinaigrettes omdat ze een mildere, zoetere, meer delicate smaak hebben dan gewone uien. Ze voegen subtiele uientonen toe zonder andere ingrediënten te overheersen. Sjalotten breken ook gladder af wanneer ze fijn gehakt worden, waardoor een betere textuur in de dressing ontstaat."
        }
      },
      {
        question: {
          en: "What is the role of egg yolk in traditional Caesar dressing?",
          es: "¿Cuál es el papel de la yema de huevo en el aderezo César tradicional?",
          de: "Was ist die Rolle von Eigelb in traditionellem Caesar-Dressing?",
          nl: "Wat is de rol van eidooier in traditionele Caesar dressing?"
        },
        options: [
          { en: "It acts as an emulsifier and adds richness", es: "Actúa como emulsificante y añade riqueza", de: "Es wirkt als Emulgator und fügt Reichhaltigkeit hinzu", nl: "Het werkt als emulgator en voegt rijkheid toe" },
          { en: "It provides color only", es: "Solo proporciona color", de: "Es bietet nur Farbe", nl: "Het biedt alleen kleur" },
          { en: "It makes the dressing sour", es: "Hace el aderezo agrio", de: "Es macht das Dressing sauer", nl: "Het maakt de dressing zuur" },
          { en: "It has no function", es: "No tiene función", de: "Es hat keine Funktion", nl: "Het heeft geen functie" }
        ],
        correct: 0,
        explanation: {
          en: "Egg yolk in traditional Caesar dressing serves as a natural emulsifier, helping to bind the oil and acidic ingredients into a smooth, creamy texture. It also adds richness and body to the dressing. Modern versions often use mayonnaise instead, which already contains emulsified egg yolk.",
          es: "La yema de huevo en el aderezo César tradicional sirve como emulsificante natural, ayudando a unir el aceite y los ingredientes ácidos en una textura suave y cremosa. También añade riqueza y cuerpo al aderezo. Las versiones modernas a menudo usan mayonesa en su lugar, que ya contiene yema de huevo emulsificada.",
          de: "Eigelb in traditionellem Caesar-Dressing dient als natürlicher Emulgator und hilft, Öl und saure Zutaten zu einer glatten, cremigen Textur zu verbinden. Es fügt auch Reichhaltigkeit und Körper zum Dressing hinzu. Moderne Versionen verwenden oft Mayonnaise stattdessen, die bereits emulgiertes Eigelb enthält.",
          nl: "Eidooier in traditionele Caesar dressing dient als natuurlijke emulgator, die helpt olie en zure ingrediënten te binden tot een gladde, romige textuur. Het voegt ook rijkheid en body toe aan de dressing. Moderne versies gebruiken vaak mayonaise in plaats daarvan, die al geëmulgeerde eidooier bevat."
        }
      },
      {
        question: {
          en: "What makes a Goddess dressing different from ranch dressing?",
          es: "¿Qué hace diferente al aderezo Goddess del aderezo ranch?",
          de: "Was macht Goddess Dressing anders als Ranch-Dressing?",
          nl: "Wat maakt Goddess dressing anders dan ranch dressing?"
        },
        options: [
          { en: "Goddess dressing contains tarragon and anchovies", es: "El aderezo Goddess contiene estragón y anchoas", de: "Goddess Dressing enthält Estragon und Sardellen", nl: "Goddess dressing bevat dragon en ansjovis" },
          { en: "They are exactly the same", es: "Son exactamente iguales", de: "Sie sind genau dasselbe", nl: "Ze zijn precies hetzelfde" },
          { en: "Goddess dressing has no herbs", es: "El aderezo Goddess no tiene hierbas", de: "Goddess Dressing hat keine Kräuter", nl: "Goddess dressing heeft geen kruiden" },
          { en: "Ranch is always green", es: "Ranch siempre es verde", de: "Ranch ist immer grün", nl: "Ranch is altijd groen" }
        ],
        correct: 0,
        explanation: {
          en: "Green Goddess dressing differs from ranch primarily by including tarragon and anchovies, which give it a distinctive herbal and umami flavor. While both are herb-based creamy dressings, Goddess has a more complex, sophisticated taste profile with its unique combination of tarragon, parsley, chives, and anchovy.",
          es: "El aderezo Green Goddess difiere del ranch principalmente por incluir estragón y anchoas, que le dan un sabor herbal y umami distintivo. Aunque ambos son aderezos cremosos a base de hierbas, Goddess tiene un perfil de sabor más complejo y sofisticado con su combinación única de estragón, perejil, cebollinos y anchoa.",
          de: "Green Goddess Dressing unterscheidet sich von Ranch hauptsächlich durch Estragon und Sardellen, die ihm einen charakteristischen Kräuter- und Umami-Geschmack verleihen. Während beide kräuterbasierte cremige Dressings sind, hat Goddess ein komplexeres, raffinierteres Geschmacksprofil mit seiner einzigartigen Kombination aus Estragon, Petersilie, Schnittlauch und Sardelle.",
          nl: "Green Goddess dressing verschilt van ranch voornamelijk door het opnemen van dragon en ansjovis, die het een kenmerkende kruiden- en umami-smaak geven. Hoewel beide kruidengebaseerde romige dressings zijn, heeft Goddess een complexer, verfijnder smaakprofiel met zijn unieke combinatie van dragon, peterselie, bieslook en ansjovis."
        }
      },
      {
        question: {
          en: "What is the traditional purpose of Worcestershire sauce in salad dressings?",
          es: "¿Cuál es el propósito tradicional de la salsa Worcestershire en aderezos para ensalada?",
          de: "Was ist der traditionelle Zweck von Worcestershire-Sauce in Salatdressings?",
          de: "Wat is het traditionele doel van Worcestershire saus in saladedressings?"
        },
        options: [
          { en: "To add umami depth and savory complexity", es: "Para añadir profundidad umami y complejidad salada", de: "Um Umami-Tiefe und herzhafte Komplexität hinzuzufügen", nl: "Om umami diepte en hartige complexiteit toe te voegen" },
          { en: "To make the dressing sweet", es: "Para hacer el aderezo dulce", de: "Um das Dressing süß zu machen", nl: "Om de dressing zoet te maken" },
          { en: "To thicken the dressing", es: "Para espesar el aderezo", de: "Um das Dressing zu verdicken", nl: "Om de dressing te verdikken" },
          { en: "To change the color to red", es: "Para cambiar el color a rojo", de: "Um die Farbe zu rot zu ändern", nl: "Om de kleur rood te maken" }
        ],
        correct: 0,
        explanation: {
          en: "Worcestershire sauce adds umami depth and savory complexity to salad dressings with its blend of fermented ingredients including anchovies, tamarind, vinegar, and spices. It's especially important in Caesar dressing and other savory dressings, providing a rich, layered flavor that enhances the overall taste.",
          es: "La salsa Worcestershire añade profundidad umami y complejidad salada a los aderezos para ensalada con su mezcla de ingredientes fermentados incluyendo anchoas, tamarindo, vinagre y especias. Es especialmente importante en el aderezo César y otros aderezos salados, proporcionando un sabor rico y estratificado que mejora el sabor general.",
          de: "Worcestershire-Sauce fügt Salatdressings Umami-Tiefe und herzhafte Komplexität hinzu mit ihrer Mischung aus fermentierten Zutaten einschließlich Sardellen, Tamarinde, Essig und Gewürzen. Sie ist besonders wichtig in Caesar-Dressing und anderen herzhaften Dressings und bietet einen reichen, geschichteten Geschmack, der den Gesamtgeschmack verbessert.",
          nl: "Worcestershire saus voegt umami diepte en hartige complexiteit toe aan saladedressings met zijn mengsel van gefermenteerde ingrediënten waaronder ansjovis, tamarinde, azijn en specerijen. Het is vooral belangrijk in Caesar dressing en andere hartige dressings, en biedt een rijke, gelaagde smaak die de algehele smaak verbetert."
        }
      },
      {
        question: {
          en: "What is the main difference between a cooked dressing and a raw dressing?",
          es: "¿Cuál es la diferencia principal entre un aderezo cocido y un aderezo crudo?",
          de: "Was ist der Hauptunterschied zwischen einem gekochten und einem rohen Dressing?",
          nl: "Wat is het belangrijkste verschil tussen een gekookte en een rauwe dressing?"
        },
        options: [
          { en: "Cooked dressings are heated to thicken with eggs or flour", es: "Los aderezos cocidos se calientan para espesar con huevos o harina", de: "Gekochte Dressings werden erhitzt um mit Eiern oder Mehl zu verdicken", nl: "Gekookte dressings worden verwarmd om te verdikken met eieren of bloem" },
          { en: "Raw dressings always contain meat", es: "Los aderezos crudos siempre contienen carne", de: "Rohe Dressings enthalten immer Fleisch", nl: "Rauwe dressings bevatten altijd vlees" },
          { en: "Cooked dressings have no flavor", es: "Los aderezos cocidos no tienen sabor", de: "Gekochte Dressings haben keinen Geschmack", nl: "Gekookte dressings hebben geen smaak" },
          { en: "There is no difference", es: "No hay diferencia", de: "Es gibt keinen Unterschied", nl: "Er is geen verschil" }
        ],
        correct: 0,
        explanation: {
          en: "Cooked salad dressings are heated to thicken them using eggs, flour, or cornstarch, creating a custard-like consistency. This technique was more common in traditional American cooking. Raw dressings are simply whisked or blended together without heat, relying on emulsification or thick ingredients like mayonnaise for body.",
          es: "Los aderezos para ensalada cocidos se calientan para espesarlos usando huevos, harina o maicena, creando una consistencia similar a la natilla. Esta técnica era más común en la cocina tradicional americana. Los aderezos crudos simplemente se baten o mezclan sin calor, dependiendo de la emulsificación o ingredientes espesos como mayonesa para el cuerpo.",
          de: "Gekochte Salatdressings werden erhitzt, um sie mit Eiern, Mehl oder Maisstärke zu verdicken und eine puddingartige Konsistenz zu schaffen. Diese Technik war in der traditionellen amerikanischen Küche häufiger. Rohe Dressings werden einfach ohne Hitze geschlagen oder gemischt und verlassen sich auf Emulgierung oder dicke Zutaten wie Mayonnaise für Körper.",
          nl: "Gekookte saladedressings worden verwarmd om ze te verdikken met eieren, bloem of maïzena, waardoor een vla-achtige consistentie ontstaat. Deze techniek was gebruikelijker in de traditionele Amerikaanse keuken. Rauwe dressings worden eenvoudig geklopt of gemengd zonder warmte, vertrouwend op emulgatie of dikke ingrediënten zoals mayonaise voor body."
        }
      },
      {
        question: {
          en: "What gives poppy seed dressing its distinctive appearance and texture?",
          es: "¿Qué le da al aderezo de semillas de amapola su apariencia y textura distintiva?",
          de: "Was gibt Mohnsamen-Dressing sein charakteristisches Aussehen und Textur?",
          nl: "Wat geeft maanzaad dressing zijn kenmerkende uiterlijk en textuur?"
        },
        options: [
          { en: "Tiny black poppy seeds suspended throughout", es: "Pequeñas semillas de amapola negras suspendidas por todas partes", de: "Winzige schwarze Mohnsamen durchgehend suspendiert", nl: "Kleine zwarte maanzaden overal verspreid" },
          { en: "Ground coffee beans", es: "Granos de café molidos", de: "Gemahlene Kaffeebohnen", nl: "Gemalen koffiebonen" },
          { en: "Black pepper only", es: "Solo pimienta negra", de: "Nur schwarzer Pfeffer", nl: "Alleen zwarte peper" },
          { en: "Food coloring", es: "Colorante alimentario", de: "Lebensmittelfarbe", nl: "Voedselkleurstof" }
        ],
        correct: 0,
        explanation: {
          en: "Poppy seed dressing is characterized by tiny black poppy seeds suspended throughout a sweet, creamy base typically made with mayonnaise, vinegar, sugar, and sometimes onion. The poppy seeds provide a subtle nutty flavor and distinctive speckled appearance, making it popular for fruit and spinach salads.",
          es: "El aderezo de semillas de amapola se caracteriza por pequeñas semillas de amapola negras suspendidas en toda una base dulce y cremosa típicamente hecha con mayonesa, vinagre, azúcar y a veces cebolla. Las semillas de amapola proporcionan un sabor sutil a nuez y apariencia moteada distintiva, haciéndolo popular para ensaladas de frutas y espinacas.",
          de: "Mohnsamen-Dressing ist durch winzige schwarze Mohnsamen charakterisiert, die in einer süßen, cremigen Basis suspendiert sind, die typischerweise aus Mayonnaise, Essig, Zucker und manchmal Zwiebeln besteht. Die Mohnsamen bieten einen subtilen nussigen Geschmack und ein charakteristisches geflecktes Aussehen, was es für Obst- und Spinatsalate beliebt macht.",
          nl: "Maanzaad dressing wordt gekenmerkt door kleine zwarte maanzaden verspreid door een zoete, romige basis die meestal gemaakt is met mayonaise, azijn, suiker en soms ui. De maanzaden bieden een subtiele nootachtige smaak en kenmerkend gespikkeld uiterlijk, waardoor het populair is voor fruit en spinaziesalades."
        }
      },
      {
        question: {
          en: "What is the purpose of adding a pinch of sugar to vinaigrette?",
          es: "¿Cuál es el propósito de agregar una pizca de azúcar a la vinagreta?",
          de: "Was ist der Zweck, eine Prise Zucker zur Vinaigrette hinzuzufügen?",
          nl: "Wat is het doel van het toevoegen van een snufje suiker aan vinaigrette?"
        },
        options: [
          { en: "To round out and balance the acidity", es: "Para redondear y equilibrar la acidez", de: "Um die Säure abzurunden und auszugleichen", nl: "Om de zuurheid af te ronden en in balans te brengen" },
          { en: "To make it a dessert dressing", es: "Para hacerlo un aderezo de postre", de: "Um es zu einem Dessert-Dressing zu machen", nl: "Om het een dessertdressing te maken" },
          { en: "To change the color", es: "Para cambiar el color", de: "Um die Farbe zu ändern", nl: "Om de kleur te veranderen" },
          { en: "Sugar has no purpose in vinaigrette", es: "El azúcar no tiene propósito en la vinagreta", de: "Zucker hat keinen Zweck in Vinaigrette", nl: "Suiker heeft geen doel in vinaigrette" }
        ],
        correct: 0,
        explanation: {
          en: "A small amount of sugar in vinaigrette helps round out and balance the acidity from the vinegar or citrus juice. It doesn't make the dressing sweet, but rather creates a more harmonious flavor profile by softening harsh acidic notes. Even in savory vinaigrettes, a pinch of sugar enhances overall taste balance.",
          es: "Una pequeña cantidad de azúcar en la vinagreta ayuda a redondear y equilibrar la acidez del vinagre o jugo cítrico. No hace el aderezo dulce, sino que crea un perfil de sabor más armonioso suavizando las notas ácidas ásperas. Incluso en vinagretas saladas, una pizca de azúcar mejora el equilibrio de sabor general.",
          de: "Eine kleine Menge Zucker in Vinaigrette hilft, die Säure von Essig oder Zitronensaft abzurunden und auszugleichen. Es macht das Dressing nicht süß, sondern schafft ein harmonischeres Geschmacksprofil, indem es harte saure Noten mildert. Selbst in herzhaften Vinaigrettes verbessert eine Prise Zucker die Gesamtgeschmacksbalance.",
          nl: "Een kleine hoeveelheid suiker in vinaigrette helpt de zuurheid van azijn of citroensap af te ronden en in balans te brengen. Het maakt de dressing niet zoet, maar creëert eerder een harmonieus smaakprofiel door harde zure tonen te verzachten. Zelfs in hartige vinaigrettes verbetert een snufje suiker de algehele smaakbalans."
        }
      },
      {
        question: {
          en: "What makes a lemon vinaigrette different from other vinaigrettes?",
          es: "¿Qué hace diferente a una vinagreta de limón de otras vinagretas?",
          de: "Was macht eine Zitronen-Vinaigrette anders als andere Vinaigrettes?",
          nl: "Wat maakt een citroen vinaigrette anders dan andere vinaigrettes?"
        },
        options: [
          { en: "Uses lemon juice instead of vinegar as the acid", es: "Usa jugo de limón en lugar de vinagre como el ácido", de: "Verwendet Zitronensaft statt Essig als Säure", nl: "Gebruikt citroensap in plaats van azijn als het zuur" },
          { en: "Contains no oil", es: "No contiene aceite", de: "Enthält kein Öl", nl: "Bevat geen olie" },
          { en: "Is always bright yellow in color", es: "Siempre es de color amarillo brillante", de: "Ist immer leuchtend gelb", nl: "Is altijd helgeel van kleur" },
          { en: "Can only be used on fruit salads", es: "Solo se puede usar en ensaladas de frutas", de: "Kann nur für Obstsalate verwendet werden", nl: "Kan alleen gebruikt worden op fruitsalades" }
        ],
        correct: 0,
        explanation: {
          en: "Lemon vinaigrette uses fresh lemon juice as the acidic component instead of vinegar, giving it a brighter, fresher, more citrusy flavor profile. The lemon's natural oils and zest can also be incorporated for enhanced flavor. This type of vinaigrette pairs especially well with fish, chicken, and delicate greens.",
          es: "La vinagreta de limón usa jugo de limón fresco como componente ácido en lugar de vinagre, dándole un perfil de sabor más brillante, fresco y cítrico. Los aceites naturales y la ralladura del limón también pueden incorporarse para un sabor mejorado. Este tipo de vinagreta combina especialmente bien con pescado, pollo y verduras delicadas.",
          de: "Zitronen-Vinaigrette verwendet frischen Zitronensaft als säurehaltige Komponente anstelle von Essig, was ihr ein helleres, frischeres, zitrischeres Geschmacksprofil verleiht. Die natürlichen Öle und Schale der Zitrone können auch für verstärkten Geschmack eingearbeitet werden. Diese Art von Vinaigrette passt besonders gut zu Fisch, Huhn und zarten Grüns.",
          nl: "Citroen vinaigrette gebruikt vers citroensap als zure component in plaats van azijn, wat het een helderder, verser, meer citrusachtig smaakprofiel geeft. De natuurlijke oliën en schil van de citroen kunnen ook verwerkt worden voor verbeterde smaak. Dit type vinaigrette past vooral goed bij vis, kip en delicate groenten."
        }
      },
      {
        question: {
          en: "What characterizes a Mediterranean-style salad dressing?",
          es: "¿Qué caracteriza a un aderezo para ensalada de estilo mediterráneo?",
          de: "Was charakterisiert ein mediterranes Salatdressing?",
          nl: "Wat kenmerkt een mediterrane stijl saladedressing?"
        },
        options: [
          { en: "Olive oil, lemon, garlic, and herbs like oregano", es: "Aceite de oliva, limón, ajo y hierbas como orégano", de: "Olivenöl, Zitrone, Knoblauch und Kräuter wie Oregano", nl: "Olijfolie, citroen, knoflook en kruiden zoals oregano" },
          { en: "Heavy cream and butter", es: "Crema espesa y mantequilla", de: "Schwere Sahne und Butter", nl: "Zware room en boter" },
          { en: "Soy sauce and ginger", es: "Salsa de soja y jengibre", de: "Sojasauce und Ingwer", nl: "Sojasaus en gember" },
          { en: "Mayonnaise and ketchup", es: "Mayonesa y ketchup", de: "Mayonnaise und Ketchup", nl: "Mayonaise en ketchup" }
        ],
        correct: 0,
        explanation: {
          en: "Mediterranean-style dressings typically feature extra virgin olive oil as the base, combined with lemon juice or wine vinegar, fresh garlic, and herbs like oregano, basil, or thyme. They emphasize fresh, bright flavors and healthy ingredients typical of Mediterranean cuisine, often with minimal processing.",
          es: "Los aderezos de estilo mediterráneo típicamente presentan aceite de oliva extra virgen como base, combinado con jugo de limón o vinagre de vino, ajo fresco y hierbas como orégano, albahaca o tomillo. Enfatizan sabores frescos y brillantes e ingredientes saludables típicos de la cocina mediterránea, a menudo con procesamiento mínimo.",
          de: "Mediterrane Dressings haben typischerweise natives Olivenöl extra als Basis, kombiniert mit Zitronensaft oder Weinessig, frischem Knoblauch und Kräutern wie Oregano, Basilikum oder Thymian. Sie betonen frische, helle Aromen und gesunde Zutaten, die für die mediterrane Küche typisch sind, oft mit minimaler Verarbeitung.",
          nl: "Mediterrane stijl dressings hebben meestal extra vierge olijfolie als basis, gecombineerd met citroensap of wijnazijn, verse knoflook en kruiden zoals oregano, basilicum of tijm. Ze benadrukken verse, heldere smaken en gezonde ingrediënten typisch voor de mediterrane keuken, vaak met minimale verwerking."
        }
      },
      {
        question: {
          en: "What gives tahini dressing its unique creamy texture without dairy?",
          es: "¿Qué le da al aderezo de tahini su textura cremosa única sin lácteos?",
          de: "Was gibt Tahini-Dressing seine einzigartige cremige Textur ohne Milchprodukte?",
          nl: "Wat geeft tahini dressing zijn unieke romige textuur zonder zuivel?"
        },
        options: [
          { en: "Ground sesame seeds (tahini paste)", es: "Semillas de sésamo molidas (pasta de tahini)", de: "Gemahlene Sesamsamen (Tahini-Paste)", nl: "Gemalen sesamzaden (tahini pasta)" },
          { en: "Coconut cream", es: "Crema de coco", de: "Kokosnusscreme", nl: "Kokosroom" },
          { en: "Blended cashews only", es: "Solo anacardos mezclados", de: "Nur gemischte Cashews", nl: "Alleen gemengde cashewnoten" },
          { en: "Silken tofu", es: "Tofu sedoso", de: "Seidentofu", nl: "Zijdetofu" }
        ],
        correct: 0,
        explanation: {
          en: "Tahini dressing gets its unique creamy, rich texture from tahini paste, which is made from ground sesame seeds. When mixed with lemon juice, garlic, and water, tahini creates a smooth, dairy-free dressing with a nutty flavor. It's popular in Middle Eastern cuisine and excellent for grain bowls and roasted vegetables.",
          es: "El aderezo de tahini obtiene su textura cremosa y rica única de la pasta de tahini, que está hecha de semillas de sésamo molidas. Cuando se mezcla con jugo de limón, ajo y agua, el tahini crea un aderezo suave sin lácteos con sabor a nuez. Es popular en la cocina de Medio Oriente y excelente para bowls de granos y verduras asadas.",
          de: "Tahini-Dressing erhält seine einzigartige cremige, reichhaltige Textur von Tahini-Paste, die aus gemahlenen Sesamsamen hergestellt wird. Wenn es mit Zitronensaft, Knoblauch und Wasser gemischt wird, entsteht ein glattes, milchfreies Dressing mit nussigem Geschmack. Es ist in der nahöstlichen Küche beliebt und ausgezeichnet für Grain Bowls und geröstetes Gemüse.",
          nl: "Tahini dressing krijgt zijn unieke romige, rijke textuur van tahini pasta, die gemaakt is van gemalen sesamzaden. Wanneer gemengd met citroensap, knoflook en water, creëert tahini een gladde, zuivelvrije dressing met een nootachtige smaak. Het is populair in de Midden-Oosterse keuken en uitstekend voor graankommen en geroosterde groenten."
        }
      },
      {
        question: {
          en: "What is the primary advantage of making homemade vinaigrette over store-bought?",
          es: "¿Cuál es la ventaja principal de hacer vinagreta casera sobre la comprada en tienda?",
          de: "Was ist der Hauptvorteil von hausgemachter Vinaigrette gegenüber gekaufter?",
          nl: "Wat is het belangrijkste voordeel van het maken van zelfgemaakte vinaigrette boven kant-en-klare?"
        },
        options: [
          { en: "Control over ingredients, freshness, and customization to taste", es: "Control sobre ingredientes, frescura y personalización al gusto", de: "Kontrolle über Zutaten, Frische und Anpassung nach Geschmack", nl: "Controle over ingrediënten, versheid en aanpassing aan smaak" },
          { en: "It's always significantly cheaper", es: "Siempre es significativamente más barato", de: "Es ist immer wesentlich billiger", nl: "Het is altijd aanzienlijk goedkoper" },
          { en: "It lasts longer than store-bought", es: "Dura más que la comprada en tienda", de: "Es hält länger als gekaufte", nl: "Het blijft langer goed dan kant-en-klare" },
          { en: "There is no advantage", es: "No hay ventaja", de: "Es gibt keinen Vorteil", nl: "Er is geen voordeel" }
        ],
        correct: 0,
        explanation: {
          en: "The primary advantage of homemade vinaigrette is complete control over ingredients, allowing you to avoid preservatives, adjust flavors to your preference, and ensure freshness. You can customize the oil-to-acid ratio, select quality ingredients, and create unique flavor combinations that match your specific salad or dietary needs.",
          es: "La ventaja principal de la vinagreta casera es el control completo sobre los ingredientes, permitiéndole evitar conservantes, ajustar sabores a su preferencia y asegurar frescura. Puede personalizar la proporción aceite-ácido, seleccionar ingredientes de calidad y crear combinaciones de sabor únicas que coincidan con su ensalada específica o necesidades dietéticas.",
          de: "Der Hauptvorteil hausgemachter Vinaigrette ist die vollständige Kontrolle über Zutaten, sodass Sie Konservierungsstoffe vermeiden, Aromen nach Ihrem Geschmack anpassen und Frische gewährleisten können. Sie können das Öl-zu-Säure-Verhältnis anpassen, hochwertige Zutaten auswählen und einzigartige Geschmackskombinationen kreieren, die zu Ihrem spezifischen Salat oder Ernährungsbedürfnissen passen.",
          nl: "Het belangrijkste voordeel van zelfgemaakte vinaigrette is volledige controle over ingrediënten, waardoor u conserveringsmiddelen kunt vermijden, smaken kunt aanpassen aan uw voorkeur en versheid kunt garanderen. U kunt de olie-tot-zuur verhouding aanpassen, kwaliteitsingrediënten selecteren en unieke smaakcombinaties creëren die passen bij uw specifieke salade of dieetbehoeften."
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
