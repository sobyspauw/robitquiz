// Quiz Level 2: Drinken - Sterke drank (Elementary - Basic Spirits Knowledge)
(function() {
  const level2 = {
    name: {
      en: "Elementary - Basic Spirits Knowledge",
      es: "Elemental - Conocimiento Básico de Licores",
      de: "Grundlagen - Grundkenntnisse über Spirituosen",
      nl: "Elementair - Basiskennis van Sterke drank"
    },
    questions: [
      {
        question: {
          en: "What is vodka primarily made from?",
          es: "¿De qué está hecho principalmente el vodka?",
          de: "Woraus wird Wodka hauptsächlich hergestellt?",
          nl: "Waar wordt vodka voornamelijk van gemaakt?"
        },
        options: [
          { en: "Grains or potatoes", es: "Granos o patatas", de: "Getreide oder Kartoffeln", nl: "Granen of aardappelen" },
          { en: "Grapes", es: "Uvas", de: "Trauben", nl: "Druiven" },
          { en: "Sugar cane", es: "Caña de azúcar", de: "Zuckerrohr", nl: "Suikerriet" },
          { en: "Apples", es: "Manzanas", de: "Äpfel", nl: "Appels" }
        ],
        correct: 0,
        explanation: {
          en: "Vodka is typically made from grains like wheat or rye, or from potatoes. These ingredients are fermented and then distilled to create this neutral spirit. Remember: alcohol is only for adults 18+ and should be consumed responsibly.",
          es: "El vodka típicamente se hace de granos como trigo o centeno, o de patatas. Estos ingredientes se fermentan y luego se destilan para crear este licor neutro. Recuerda: el alcohol es solo para adultos de 18+ años y debe consumirse responsablemente.",
          de: "Wodka wird typischerweise aus Getreide wie Weizen oder Roggen oder aus Kartoffeln hergestellt. Diese Zutaten werden fermentiert und dann destilliert, um diesen neutralen Schnaps zu erzeugen. Denk daran: Alkohol ist nur für Erwachsene ab 18 Jahren und sollte verantwortungsbewusst konsumiert werden.",
          nl: "Vodka wordt meestal gemaakt van granen zoals tarwe of rogge, of van aardappelen. Deze ingrediënten worden gefermenteerd en vervolgens gedestilleerd om deze neutrale spirit te maken. Onthoud: alcohol is alleen voor volwassenen van 18+ en moet verantwoordelijk geconsumeerd worden."
        }
      },
      {
        question: {
          en: "Which spirit is traditionally associated with Scotland?",
          es: "¿Qué licor se asocia tradicionalmente con Escocia?",
          de: "Welche Spirituose wird traditionell mit Schottland verbunden?",
          nl: "Welke sterke drank wordt traditioneel geassocieerd met Schotland?"
        },
        options: [
          { en: "Rum", es: "Ron", de: "Rum", nl: "Rum" },
          { en: "Tequila", es: "Tequila", de: "Tequila", nl: "Tequila" },
          { en: "Scotch whisky", es: "Whisky escocés", de: "Schottischer Whisky", nl: "Schotse whisky" },
          { en: "Gin", es: "Ginebra", de: "Gin", nl: "Gin" }
        ],
        correct: 2,
        explanation: {
          en: "Scotch whisky is the spirit traditionally associated with Scotland, with strict legal requirements for production. It must be made in Scotland from specific grains and aged in oak barrels for at least 3 years.",
          es: "El whisky escocés es el licor tradicionalmente asociado con Escocia, con estrictos requisitos legales para la producción. Debe hacerse en Escocia a partir de granos específicos y envejecerse en barriles de roble durante al menos 3 años.",
          de: "Schottischer Whisky ist die Spirituose, die traditionell mit Schottland verbunden wird, mit strengen rechtlichen Anforderungen für die Produktion. Er muss in Schottland aus spezifischen Getreidesorten hergestellt und mindestens 3 Jahre in Eichenfässern gereift werden.",
          nl: "Schotse whisky is de sterke drank die traditioneel geassocieerd wordt met Schotland, met strikte wettelijke eisen voor productie. Het moet gemaakt worden in Schotland van specifieke granen en gerijpt worden in eiken vaten voor minstens 3 jaar."
        }
      },
      {
        question: {
          en: "What plant is gin flavored with?",
          es: "¿Con qué planta se aromatiza la ginebra?",
          de: "Mit welcher Pflanze wird Gin aromatisiert?",
          nl: "Met welke plant wordt gin gearomatiseerd?"
        },
        options: [
          { en: "Juniper berries", es: "Bayas de enebro", de: "Wacholderbeeren", nl: "Jeneverbessen" },
          { en: "Pine needles", es: "Agujas de pino", de: "Kiefernnadeln", nl: "Dennennaalden" },
          { en: "Mint leaves", es: "Hojas de menta", de: "Minzblätter", nl: "Muntbladeren" },
          { en: "Rose petals", es: "Pétalos de rosa", de: "Rosenblätter", nl: "Rozenblaadjes" }
        ],
        correct: 0,
        explanation: {
          en: "Gin is primarily flavored with juniper berries, which give it its distinctive piney, herbal taste. Other botanicals like coriander, angelica root, and citrus peels are often added for complexity.",
          es: "La ginebra se aromatiza principalmente con bayas de enebro, que le dan su distintivo sabor a pino y hierbas. Otros botánicos como cilantro, raíz de angélica y cáscaras de cítricos a menudo se añaden para mayor complejidad.",
          de: "Gin wird hauptsächlich mit Wacholderbeeren aromatisiert, die ihm seinen charakteristischen kiefrig-kräuterigen Geschmack verleihen. Andere Botanicals wie Koriander, Angelikawurzel und Zitrusschalen werden oft für Komplexität hinzugefügt.",
          nl: "Gin wordt voornamelijk gearomatiseerd met jeneverbessen, die het zijn kenmerkende dennensmaak en kruidig karakter geven. Andere botanicals zoals koriander, angelicawortel en citrusschillen worden vaak toegevoegd voor complexiteit."
        }
      },
      {
        question: {
          en: "Rum is traditionally made from what raw material?",
          es: "¿De qué materia prima se hace tradicionalmente el ron?",
          de: "Aus welchem Rohstoff wird Rum traditionell hergestellt?",
          nl: "Rum wordt traditioneel gemaakt van welke grondstof?"
        },
        options: [
          { en: "Corn", es: "Maíz", de: "Mais", nl: "Maïs" },
          { en: "Sugar cane or molasses", es: "Caña de azúcar o melaza", de: "Zuckerrohr oder Melasse", nl: "Suikerriet of melasse" },
          { en: "Barley", es: "Cebada", de: "Gerste", nl: "Gerst" },
          { en: "Rice", es: "Arroz", de: "Reis", nl: "Rijst" }
        ],
        correct: 1,
        explanation: {
          en: "Rum is made from sugar cane byproducts, either directly from sugar cane juice or from molasses (a byproduct of sugar production). This gives rum its characteristic sweetness and tropical flavor profile.",
          es: "El ron se hace de subproductos de la caña de azúcar, ya sea directamente del jugo de caña de azúcar o de melaza (un subproducto de la producción de azúcar). Esto le da al ron su dulzura característica y perfil de sabor tropical.",
          de: "Rum wird aus Zuckerrohr-Nebenprodukten hergestellt, entweder direkt aus Zuckerrohrsaft oder aus Melasse (einem Nebenprodukt der Zuckerproduktion). Dies verleiht dem Rum seine charakteristische Süße und sein tropisches Geschmacksprofil.",
          nl: "Rum wordt gemaakt van suikerriet bijproducten, ofwel direct van suikerriet sap of van melasse (een bijproduct van suikerproductie). Dit geeft rum zijn karakteristieke zoetheid en tropische smaakprofiel."
        }
      },
      {
        question: {
          en: "What is the minimum alcohol content for most spirits?",
          es: "¿Cuál es el contenido mínimo de alcohol para la mayoría de los licores?",
          de: "Was ist der Mindestalkoholgehalt für die meisten Spirituosen?",
          nl: "Wat is het minimale alcoholgehalte voor de meeste sterke dranken?"
        },
        options: [
          { en: "20% ABV", es: "20% ABV", de: "20% ABV", nl: "20% ABV" },
          { en: "30% ABV", es: "30% ABV", de: "30% ABV", nl: "30% ABV" },
          { en: "40% ABV", es: "40% ABV", de: "40% ABV", nl: "40% ABV" },
          { en: "50% ABV", es: "50% ABV", de: "50% ABV", nl: "50% ABV" }
        ],
        correct: 2,
        explanation: {
          en: "Most spirits have a minimum alcohol content of 40% ABV (Alcohol by Volume), which equals 80 proof. This high alcohol content is why spirits are considered strong alcohol and require responsible consumption by adults only.",
          es: "La mayoría de los licores tienen un contenido mínimo de alcohol del 40% ABV (Alcohol por Volumen), que equivale a 80 grados. Este alto contenido de alcohol es por lo que los licores se consideran alcohol fuerte y requieren consumo responsable solo por adultos.",
          de: "Die meisten Spirituosen haben einen Mindestalkoholgehalt von 40% ABV (Alkohol nach Volumen), was 80 Proof entspricht. Dieser hohe Alkoholgehalt ist der Grund, warum Spirituosen als starker Alkohol gelten und nur verantwortungsbewussten Konsum durch Erwachsene erfordern.",
          nl: "De meeste sterke dranken hebben een minimaal alcoholgehalte van 40% ABV (Alcohol by Volume), wat gelijk staat aan 80 proof. Dit hoge alcoholgehalte is waarom sterke dranken als sterke alcohol worden beschouwd en verantwoordelijke consumptie door alleen volwassenen vereisen."
        }
      },
      {
        question: {
          en: "Which country is most famous for producing tequila?",
          es: "¿Qué país es más famoso por producir tequila?",
          de: "Welches Land ist am bekanntesten für die Produktion von Tequila?",
          nl: "Welk land is het meest beroemd voor het produceren van tequila?"
        },
        options: [
          { en: "Spain", es: "España", de: "Spanien", nl: "Spanje" },
          { en: "Mexico", es: "México", de: "Mexiko", nl: "Mexico" },
          { en: "Brazil", es: "Brasil", de: "Brasilien", nl: "Brazilië" },
          { en: "Argentina", es: "Argentina", de: "Argentinien", nl: "Argentinië" }
        ],
        correct: 1,
        explanation: {
          en: "Mexico is famous for producing tequila, specifically in certain regions. By law, tequila can only be made in designated areas of Mexico, primarily in Jalisco state, from the blue agave plant.",
          es: "México es famoso por producir tequila, específicamente en ciertas regiones. Por ley, el tequila solo puede hacerse en áreas designadas de México, principalmente en el estado de Jalisco, de la planta de agave azul.",
          de: "Mexiko ist berühmt für die Produktion von Tequila, speziell in bestimmten Regionen. Gesetzlich darf Tequila nur in bestimmten Gebieten Mexikos hergestellt werden, hauptsächlich im Bundesstaat Jalisco, aus der blauen Agave-Pflanze.",
          nl: "Mexico is beroemd voor het produceren van tequila, specifiek in bepaalde regio's. Volgens de wet mag tequila alleen gemaakt worden in aangewezen gebieden van Mexico, voornamelijk in de staat Jalisco, van de blauwe agave plant."
        }
      },
      {
        question: {
          en: "What is brandy made from?",
          es: "¿De qué está hecho el brandy?",
          de: "Woraus wird Brandy hergestellt?",
          nl: "Waar wordt brandy van gemaakt?"
        },
        options: [
          { en: "Grain mash", es: "Puré de granos", de: "Getreidemaische", nl: "Graan mash" },
          { en: "Fermented fruit juice, usually grapes", es: "Jugo de fruta fermentado, usualmente uvas", de: "Fermentierter Fruchtsaft, meist Trauben", nl: "Gefermenteerd vruchtensap, meestal druiven" },
          { en: "Sugar beet", es: "Remolacha azucarera", de: "Zuckerrübe", nl: "Suikerbiet" },
          { en: "Honey", es: "Miel", de: "Honig", nl: "Honing" }
        ],
        correct: 1,
        explanation: {
          en: "Brandy is made from fermented fruit juice, most commonly grapes (like Cognac), but also apples (Calvados), pears, or other fruits. The fruit wine is then distilled to create the spirit.",
          es: "El brandy se hace de jugo de fruta fermentado, más comúnmente uvas (como el Coñac), pero también manzanas (Calvados), peras, u otras frutas. El vino de fruta luego se destila para crear el licor.",
          de: "Brandy wird aus fermentiertem Fruchtsaft hergestellt, meist aus Trauben (wie Cognac), aber auch aus Äpfeln (Calvados), Birnen oder anderen Früchten. Der Fruchtwein wird dann destilliert, um die Spirituose zu erzeugen.",
          nl: "Brandy wordt gemaakt van gefermenteerd vruchtensap, meestal druiven (zoals Cognac), maar ook appels (Calvados), peren, of andere vruchten. De fruitwijn wordt dan gedestilleerd om de spirit te maken."
        }
      },
      {
        question: {
          en: "What does 'ABV' stand for in alcohol terminology?",
          es: "¿Qué significa 'ABV' en terminología de alcohol?",
          de: "Wofür steht 'ABV' in der Alkohol-Terminologie?",
          nl: "Waar staat 'ABV' voor in alcohol terminologie?"
        },
        options: [
          { en: "Alcohol Before Volume", es: "Alcohol Antes del Volumen", de: "Alkohol Vor Volumen", nl: "Alcohol Voor Volume" },
          { en: "Alcohol by Volume", es: "Alcohol por Volumen", de: "Alkohol nach Volumen", nl: "Alcohol by Volume" },
          { en: "Average Bottle Volume", es: "Volumen Promedio de Botella", de: "Durchschnittliches Flaschenvolumen", nl: "Gemiddeld Fles Volume" },
          { en: "Alcohol Beverage Value", es: "Valor de Bebida Alcohólica", de: "Alkoholischer Getränkewert", nl: "Alcoholische Drank Waarde" }
        ],
        correct: 1,
        explanation: {
          en: "ABV stands for 'Alcohol by Volume' and represents the percentage of a liquid's volume that is alcohol. For example, 40% ABV means 40% of the liquid is pure alcohol by volume.",
          es: "ABV significa 'Alcohol por Volumen' y representa el porcentaje del volumen de un líquido que es alcohol. Por ejemplo, 40% ABV significa que el 40% del líquido es alcohol puro por volumen.",
          de: "ABV steht für 'Alkohol nach Volumen' und repräsentiert den Prozentsatz des Volumens einer Flüssigkeit, der Alkohol ist. Zum Beispiel bedeutet 40% ABV, dass 40% der Flüssigkeit reiner Alkohol nach Volumen ist.",
          nl: "ABV staat voor 'Alcohol by Volume' en vertegenwoordigt het percentage van het volume van een vloeistof dat alcohol is. Bijvoorbeeld, 40% ABV betekent dat 40% van de vloeistof pure alcohol per volume is."
        }
      },
      {
        question: {
          en: "Which spirit is known for being clear and relatively flavorless?",
          es: "¿Qué licor es conocido por ser claro y relativamente sin sabor?",
          de: "Welche Spirituose ist dafür bekannt, klar und relativ geschmacklos zu sein?",
          nl: "Welke sterke drank staat bekend als helder en relatief smakeloos?"
        },
        options: [
          { en: "Whiskey", es: "Whisky", de: "Whiskey", nl: "Whiskey" },
          { en: "Rum", es: "Ron", de: "Rum", nl: "Rum" },
          { en: "Vodka", es: "Vodka", de: "Wodka", nl: "Vodka" },
          { en: "Brandy", es: "Brandy", de: "Brandy", nl: "Brandy" }
        ],
        correct: 2,
        explanation: {
          en: "Vodka is known for being clear and relatively neutral in flavor. It's designed to be a clean, pure spirit that can be used as a base for cocktails without adding strong flavors of its own.",
          es: "El vodka es conocido por ser claro y relativamente neutro en sabor. Está diseñado para ser un licor limpio y puro que puede usarse como base para cócteles sin añadir sabores fuertes propios.",
          de: "Wodka ist dafür bekannt, klar und relativ neutral im Geschmack zu sein. Er ist darauf ausgelegt, eine saubere, reine Spirituose zu sein, die als Basis für Cocktails verwendet werden kann, ohne eigene starke Aromen hinzuzufügen.",
          nl: "Vodka staat bekend als helder en relatief neutraal in smaak. Het is ontworpen om een schone, pure spirit te zijn die gebruikt kan worden als basis voor cocktails zonder eigen sterke smaken toe te voegen."
        }
      },
      {
        question: {
          en: "What is the legal drinking age in most European countries?",
          es: "¿Cuál es la edad legal para beber en la mayoría de países europeos?",
          de: "Was ist das gesetzliche Trinkalter in den meisten europäischen Ländern?",
          nl: "Wat is de wettelijke drinkleeftijd in de meeste Europese landen?"
        },
        options: [
          { en: "16 yrs", es: "16 años", de: "16 Jahre", nl: "16 jaar" },
          { en: "18 yrs", es: "18 años", de: "18 Jahre", nl: "18 jaar" },
          { en: "21 yrs", es: "21 años", de: "21 Jahre", nl: "21 jaar" },
          { en: "25 yrs", es: "25 años", de: "25 Jahre", nl: "25 jaar" }
        ],
        correct: 1,
        explanation: {
          en: "In most European countries, the legal drinking age is 18 years. However, some countries have different ages for different types of alcohol. It's important to always follow local laws and drink responsibly.",
          es: "En la mayoría de países europeos, la edad legal para beber es 18 años. Sin embargo, algunos países tienen diferentes edades para diferentes tipos de alcohol. Es importante siempre seguir las leyes locales y beber responsablemente.",
          de: "In den meisten europäischen Ländern liegt das gesetzliche Trinkalter bei 18 Jahren. Einige Länder haben jedoch unterschiedliche Altersgrenzen für verschiedene Arten von Alkohol. Es ist wichtig, immer die örtlichen Gesetze zu befolgen und verantwortungsbewusst zu trinken.",
          nl: "In de meeste Europese landen is de wettelijke drinkleeftijd 18 jaar. Echter, sommige landen hebben verschillende leeftijden voor verschillende soorten alcohol. Het is belangrijk om altijd lokale wetten te volgen en verantwoordelijk te drinken."
        }
      },
      {
        question: {
          en: "Which type of rum is typically aged in oak barrels?",
          es: "¿Qué tipo de ron se envejece típicamente en barriles de roble?",
          de: "Welche Art von Rum wird typischerweise in Eichenfässern gereift?",
          nl: "Welk type rum wordt meestal gerijpt in eiken vaten?"
        },
        options: [
          { en: "White rum", es: "Ron blanco", de: "Weißer Rum", nl: "Witte rum" },
          { en: "Dark rum", es: "Ron oscuro", de: "Dunkler Rum", nl: "Donkere rum" },
          { en: "Spiced rum", es: "Ron especiado", de: "Gewürzter Rum", nl: "Gekruide rum" },
          { en: "Coconut rum", es: "Ron de coco", de: "Kokosnuss-Rum", nl: "Kokos rum" }
        ],
        correct: 1,
        explanation: {
          en: "Dark rum is typically aged in oak barrels for extended periods, which gives it its rich color, complex flavors, and smooth character. The aging process adds notes of vanilla, caramel, and spice.",
          es: "El ron oscuro típicamente se envejece en barriles de roble durante períodos prolongados, lo que le da su color rico, sabores complejos y carácter suave. El proceso de envejecimiento añade notas de vainilla, caramelo y especias.",
          de: "Dunkler Rum wird typischerweise über längere Zeiträume in Eichenfässern gereift, was ihm seine satte Farbe, komplexe Aromen und seinen weichen Charakter verleiht. Der Reifeprozess fügt Noten von Vanille, Karamell und Gewürzen hinzu.",
          nl: "Donkere rum wordt meestal gerijpt in eiken vaten voor langere perioden, wat het zijn rijke kleur, complexe smaken en zachte karakter geeft. Het rijpingsproces voegt tonen van vanille, karamel en kruiden toe."
        }
      },
      {
        question: {
          en: "What is the main botanical flavor in gin?",
          es: "¿Cuál es el principal sabor botánico en la ginebra?",
          de: "Was ist das Hauptaroma in Gin?",
          nl: "Wat is de belangrijkste botanische smaak in gin?"
        },
        options: [
          { en: "Coriander", es: "Cilantro", de: "Koriander", nl: "Koriander" },
          { en: "Citrus peel", es: "Cáscara de cítricos", de: "Zitrusschale", nl: "Citrusschil" },
          { en: "Juniper", es: "Enebro", de: "Wacholder", nl: "Jeneverbes" },
          { en: "Angelica root", es: "Raíz de angélica", de: "Angelikawurzel", nl: "Angelicawortel" }
        ],
        correct: 2,
        explanation: {
          en: "Juniper is the dominant botanical flavor that must be present in gin by legal definition. Without juniper berries, a spirit cannot be called gin. Other botanicals complement but never overpower the juniper.",
          es: "El enebro es el sabor botánico dominante que debe estar presente en la ginebra por definición legal. Sin bayas de enebro, un licor no puede llamarse ginebra. Otros botánicos complementan pero nunca superan al enebro.",
          de: "Wacholder ist das dominante botanische Aroma, das nach gesetzlicher Definition in Gin vorhanden sein muss. Ohne Wacholderbeeren kann eine Spirituose nicht als Gin bezeichnet werden. Andere Botanicals ergänzen, überwältigen aber niemals den Wacholder.",
          nl: "Jeneverbes is de dominante botanische smaak die volgens wettelijke definitie aanwezig moet zijn in gin. Zonder jeneverbessen kan een spirit niet gin genoemd worden. Andere botanicals vullen aan maar overheersen nooit de jeneverbes."
        }
      },
      {
        question: {
          en: "Which spirit is made from the blue agave plant?",
          es: "¿Qué licor se hace de la planta de agave azul?",
          de: "Welche Spirituose wird aus der blauen Agave-Pflanze hergestellt?",
          nl: "Welke sterke drank wordt gemaakt van de blauwe agave plant?"
        },
        options: [
          { en: "Mezcal", es: "Mezcal", de: "Mezcal", nl: "Mezcal" },
          { en: "Tequila", es: "Tequila", de: "Tequila", nl: "Tequila" },
          { en: "Rum", es: "Ron", de: "Rum", nl: "Rum" },
          { en: "Cachaca", es: "Cachaza", de: "Cachaça", nl: "Cachaca" }
        ],
        correct: 1,
        explanation: {
          en: "Tequila is made specifically from the blue agave plant (Agave tequilana) and must be produced in designated regions of Mexico. Mezcal can be made from various types of agave, but tequila requires blue agave.",
          es: "El tequila se hace específicamente de la planta de agave azul (Agave tequilana) y debe producirse en regiones designadas de México. El mezcal puede hacerse de varios tipos de agave, pero el tequila requiere agave azul.",
          de: "Tequila wird speziell aus der blauen Agave-Pflanze (Agave tequilana) hergestellt und muss in bestimmten Regionen Mexikos produziert werden. Mezcal kann aus verschiedenen Agave-Arten hergestellt werden, aber Tequila erfordert blaue Agave.",
          nl: "Tequila wordt specifiek gemaakt van de blauwe agave plant (Agave tequilana) en moet geproduceerd worden in aangewezen regio's van Mexico. Mezcal kan gemaakt worden van verschillende soorten agave, maar tequila vereist blauwe agave."
        }
      },
      {
        question: {
          en: "What gives vodka its characteristic purity?",
          es: "¿Qué le da al vodka su pureza característica?",
          de: "Was verleiht Wodka seine charakteristische Reinheit?",
          nl: "Wat geeft vodka zijn karakteristieke zuiverheid?"
        },
        options: [
          { en: "Single distillation", es: "Destilación única", de: "Einfache Destillation", nl: "Enkele destillatie" },
          { en: "Multiple distillations and filtration", es: "Múltiples destilaciones y filtración", de: "Mehrfache Destillationen und Filtration", nl: "Meerdere destillaties en filtratie" },
          { en: "Aging in barrels", es: "Envejecimiento en barriles", de: "Reifung in Fässern", nl: "Rijping in vaten" },
          { en: "Adding sugar", es: "Añadiendo azúcar", de: "Zuckerzusatz", nl: "Toevoegen van suiker" }
        ],
        correct: 1,
        explanation: {
          en: "Vodka achieves its purity through multiple distillations (often 3-5 times or more) and extensive filtration, often through charcoal. This process removes impurities and creates the clean, neutral character vodka is known for.",
          es: "El vodka logra su pureza a través de múltiples destilaciones (a menudo 3-5 veces o más) y filtración extensa, a menudo a través de carbón. Este proceso elimina impurezas y crea el carácter limpio y neutro por el que se conoce al vodka.",
          de: "Wodka erreicht seine Reinheit durch mehrfache Destillationen (oft 3-5 Mal oder mehr) und umfangreiche Filtration, oft durch Holzkohle. Dieser Prozess entfernt Verunreinigungen und schafft den sauberen, neutralen Charakter, für den Wodka bekannt ist.",
          nl: "Vodka bereikt zijn zuiverheid door meerdere destillaties (vaak 3-5 keer of meer) en uitgebreide filtratie, vaak door houtskool. Dit proces verwijdert onzuiverheden en creëert het schone, neutrale karakter waarvoor vodka bekend staat."
        }
      },
      {
        question: {
          en: "What is the Caribbean region particularly famous for producing?",
          es: "¿Por qué es particularmente famosa la región del Caribe?",
          de: "Wofür ist die Karibik-Region besonders bekannt?",
          nl: "Waar is het Caribisch gebied bijzonder beroemd om?"
        },
        options: [
          { en: "Whiskey", es: "Whisky", de: "Whiskey", nl: "Whiskey" },
          { en: "Vodka", es: "Vodka", de: "Wodka", nl: "Vodka" },
          { en: "Rum", es: "Ron", de: "Rum", nl: "Rum" },
          { en: "Gin", es: "Ginebra", de: "Gin", nl: "Gin" }
        ],
        correct: 2,
        explanation: {
          en: "The Caribbean is famous for producing rum, thanks to its abundant sugar cane crops. Countries like Jamaica, Barbados, and Cuba are renowned for their distinctive rum styles that reflect local traditions and climate.",
          es: "El Caribe es famoso por producir ron, gracias a sus abundantes cultivos de caña de azúcar. Países como Jamaica, Barbados y Cuba son reconocidos por sus estilos distintivos de ron que reflejan tradiciones locales y clima.",
          de: "Die Karibik ist berühmt für die Produktion von Rum, dank ihrer reichhaltigen Zuckerrohr-Ernten. Länder wie Jamaika, Barbados und Kuba sind bekannt für ihre unverwechselbaren Rum-Stile, die lokale Traditionen und Klima widerspiegeln.",
          nl: "Het Caribisch gebied is beroemd voor het produceren van rum, dankzij de overvloedige suikerriet oogsten. Landen zoals Jamaica, Barbados en Cuba staan bekend om hun kenmerkende rum stijlen die lokale tradities en klimaat weerspiegelen."
        }
      },
      {
        question: {
          en: "What is the traditional base spirit for a Martini cocktail?",
          es: "¿Cuál es el licor base tradicional para un cóctel Martini?",
          de: "Was ist die traditionelle Basis-Spirituose für einen Martini-Cocktail?",
          nl: "Wat is de traditionele basis spirit voor een Martini cocktail?"
        },
        options: [
          { en: "Vodka", es: "Vodka", de: "Wodka", nl: "Vodka" },
          { en: "Gin", es: "Ginebra", de: "Gin", nl: "Gin" },
          { en: "Rum", es: "Ron", de: "Rum", nl: "Rum" },
          { en: "Whiskey", es: "Whisky", de: "Whiskey", nl: "Whiskey" }
        ],
        correct: 1,
        explanation: {
          en: "The traditional Martini is made with gin and dry vermouth. While vodka Martinis became popular later, the classic recipe uses gin, which provides botanical complexity to the drink.",
          es: "El Martini tradicional se hace con ginebra y vermut seco. Aunque los Martinis de vodka se hicieron populares más tarde, la receta clásica usa ginebra, que proporciona complejidad botánica a la bebida.",
          de: "Der traditionelle Martini wird mit Gin und trockenem Wermut hergestellt. Während Wodka-Martinis später populär wurden, verwendet das klassische Rezept Gin, der dem Drink botanische Komplexität verleiht.",
          nl: "De traditionele Martini wordt gemaakt met gin en droge vermouth. Hoewel vodka Martinis later populair werden, gebruikt het klassieke recept gin, wat botanische complexiteit aan de drank geeft."
        }
      },
      {
        question: {
          en: "What color is traditional white rum?",
          es: "¿Qué color tiene el ron blanco tradicional?",
          de: "Welche Farbe hat traditioneller weißer Rum?",
          nl: "Welke kleur heeft traditionele witte rum?"
        },
        options: [
          { en: "Golden yellow", es: "Amarillo dorado", de: "Goldgelb", nl: "Goudgeel" },
          { en: "Clear or colorless", es: "Claro o incoloro", de: "Klar oder farblos", nl: "Helder of kleurloos" },
          { en: "Light brown", es: "Marrón claro", de: "Hellbraun", nl: "Lichtbruin" },
          { en: "Dark amber", es: "Ámbar oscuro", de: "Dunkelbraun", nl: "Donker amber" }
        ],
        correct: 1,
        explanation: {
          en: "White rum (also called light or silver rum) is clear or colorless. It's either unaged or aged briefly then filtered to remove color. This makes it ideal for cocktails where you want a clean rum flavor without color.",
          es: "El ron blanco (también llamado ron ligero o plateado) es claro o incoloro. No se envejece o se envejece brevemente y luego se filtra para eliminar el color. Esto lo hace ideal para cócteles donde quieres un sabor a ron limpio sin color.",
          de: "Weißer Rum (auch heller oder silberner Rum genannt) ist klar oder farblos. Er ist entweder ungereift oder wird kurz gereift und dann gefiltert, um die Farbe zu entfernen. Dies macht ihn ideal für Cocktails, bei denen man einen sauberen Rum-Geschmack ohne Farbe möchte.",
          nl: "Witte rum (ook wel lichte of zilveren rum genoemd) is helder of kleurloos. Het is ofwel ongerijpt of kort gerijpt en daarna gefilterd om kleur te verwijderen. Dit maakt het ideaal voor cocktails waar je een schone rum smaak wilt zonder kleur."
        }
      },
      {
        question: {
          en: "What is the main difference between gin and vodka?",
          es: "¿Cuál es la diferencia principal entre ginebra y vodka?",
          de: "Was ist der Hauptunterschied zwischen Gin und Wodka?",
          nl: "Wat is het belangrijkste verschil tussen gin en vodka?"
        },
        options: [
          { en: "Alcohol content", es: "Contenido de alcohol", de: "Alkoholgehalt", nl: "Alcoholgehalte" },
          { en: "Botanical flavoring", es: "Aromatización botánica", de: "Botanische Aromatisierung", nl: "Botanische aromaten" },
          { en: "Base ingredients", es: "Ingredientes base", de: "Basiszutaten", nl: "Basis ingrediënten" },
          { en: "Production country", es: "País de producción", de: "Produktionsland", nl: "Productie land" }
        ],
        correct: 1,
        explanation: {
          en: "The main difference is botanical flavoring. Both start as neutral spirits, but gin is infused with botanicals (especially juniper), while vodka is designed to be neutral and unflavored. This gives gin its distinctive taste profile.",
          es: "La diferencia principal es la aromatización botánica. Ambos comienzan como licores neutros, pero la ginebra se infunde con botánicos (especialmente enebro), mientras que el vodka está diseñado para ser neutro y sin sabor. Esto le da a la ginebra su perfil de sabor distintivo.",
          de: "Der Hauptunterschied ist die botanische Aromatisierung. Beide beginnen als neutrale Spirituosen, aber Gin wird mit Botanicals (besonders Wacholder) aromatisiert, während Wodka neutral und geschmacksneutral sein soll. Dies verleiht Gin sein charakteristisches Geschmacksprofil.",
          nl: "Het belangrijkste verschil is botanische aromaten. Beide beginnen als neutrale spirits, maar gin wordt geïnfuseerd met botanicals (vooral jeneverbes), terwijl vodka ontworpen is om neutraal en smakeloos te zijn. Dit geeft gin zijn kenmerkende smaakprofiel."
        }
      },
      {
        question: {
          en: "Which spirit typically has the smoothest, most neutral taste?",
          es: "¿Qué licor típicamente tiene el sabor más suave y neutro?",
          de: "Welche Spirituose hat typischerweise den sanftesten, neutralsten Geschmack?",
          nl: "Welke sterke drank heeft typisch de zachtste, meest neutrale smaak?"
        },
        options: [
          { en: "Bourbon", es: "Bourbon", de: "Bourbon", nl: "Bourbon" },
          { en: "Tequila", es: "Tequila", de: "Tequila", nl: "Tequila" },
          { en: "Vodka", es: "Vodka", de: "Wodka", nl: "Vodka" },
          { en: "Rum", es: "Ron", de: "Rum", nl: "Rum" }
        ],
        correct: 2,
        explanation: {
          en: "Vodka typically has the smoothest, most neutral taste because it's specifically designed to be a clean, pure spirit with minimal flavor. The extensive distillation and filtration process removes most taste characteristics, making it versatile for mixing.",
          es: "El vodka típicamente tiene el sabor más suave y neutro porque está específicamente diseñado para ser un licor limpio y puro con sabor mínimo. El extenso proceso de destilación y filtración elimina la mayoría de las características de sabor, haciéndolo versátil para mezclar.",
          de: "Wodka hat typischerweise den sanftesten, neutralsten Geschmack, weil er speziell als saubere, reine Spirituose mit minimalem Geschmack konzipiert ist. Der umfangreiche Destillations- und Filtrationsprozess entfernt die meisten Geschmackseigenschaften und macht ihn vielseitig zum Mischen.",
          nl: "Vodka heeft typisch de zachtste, meest neutrale smaak omdat het specifiek ontworpen is om een schone, pure spirit te zijn met minimale smaak. Het uitgebreide destillatie- en filtratieproces verwijdert de meeste smaakkenmerken, waardoor het veelzijdig is voor het mixen."
        }
      },
      {
        question: {
          en: "What is the purpose of aging spirits in wooden barrels?",
          es: "¿Cuál es el propósito de envejecer licores en barriles de madera?",
          de: "Was ist der Zweck der Reifung von Spirituosen in Holzfässern?",
          nl: "Wat is het doel van het rijpen van sterke drank in houten vaten?"
        },
        options: [
          { en: "To increase alcohol content", es: "Para aumentar el contenido de alcohol", de: "Um den Alkoholgehalt zu erhöhen", nl: "Om het alcoholgehalte te verhogen" },
          { en: "To add color, flavor, and smoothness", es: "Para añadir color, sabor y suavidad", de: "Um Farbe, Geschmack und Weichheit hinzuzufügen", nl: "Om kleur, smaak en zachtheid toe te voegen" },
          { en: "To remove impurities", es: "Para eliminar impurezas", de: "Um Verunreinigungen zu entfernen", nl: "Om onzuiverheden te verwijderen" },
          { en: "To cool the spirit down", es: "Para enfriar el licor", de: "Um die Spirituose abzukühlen", nl: "Om de spirit af te koelen" }
        ],
        correct: 1,
        explanation: {
          en: "Aging spirits in wooden barrels adds color, complex flavors, and smoothness. The wood imparts notes like vanilla, caramel, and spice while the spirit mellows over time. This is why aged spirits like whiskey, rum, and brandy have rich, complex profiles.",
          es: "Envejecer licores en barriles de madera añade color, sabores complejos y suavidad. La madera imparte notas como vainilla, caramelo y especias mientras el licor se suaviza con el tiempo. Por eso los licores envejecidos como whisky, ron y brandy tienen perfiles ricos y complejos.",
          de: "Die Reifung von Spirituosen in Holzfässern fügt Farbe, komplexe Aromen und Weichheit hinzu. Das Holz verleiht Noten wie Vanille, Karamell und Gewürze, während die Spirituose mit der Zeit milder wird. Deshalb haben gereifte Spirituosen wie Whiskey, Rum und Brandy reiche, komplexe Profile.",
          nl: "Het rijpen van sterke drank in houten vaten voegt kleur, complexe smaken en zachtheid toe. Het hout geeft tonen zoals vanille, karamel en kruiden terwijl de spirit in de loop van de tijd milder wordt. Daarom hebben gerijpte spirits zoals whiskey, rum en brandy rijke, complexe profielen."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  } else if (typeof window !== 'undefined') {
    window.level2 = level2;
  }
})();
