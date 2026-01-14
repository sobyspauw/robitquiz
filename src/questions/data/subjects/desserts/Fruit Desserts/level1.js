// Fruit Desserts Quiz - Level 1
(function() {
  const level1 = {
    name: {
          "en": "Fruit Desserts - Level 1",
          "es": "Postres de Fruta - Nivel 1",
          "de": "Fruchtdesserts - Level 1",
          "nl": "Fruitdesserts - Level 1"
    },
    questions: [
      {
        question: {
                  "en": "What is the main thickening agent in traditional fruit pies?",
                  "es": "¿Cuál es el agente espesante principal en las tartas de fruta tradicionales?",
                  "de": "Was ist das Hauptverdickungsmittel in traditionellen Obstkuchen?",
                  "nl": "Wat is het hoofdverdikkingsmiddel in traditionele fruittaarten?"
        },
        options: [
        {
                  "en": "Eggs",
                  "es": "Huevos",
                  "de": "Eier",
                  "nl": "Eieren"
        },
        {
                  "en": "Butter",
                  "es": "Mantequilla",
                  "de": "Butter",
                  "nl": "Boter"
        },
        {
                  "en": "Gelatin",
                  "es": "Gelatina",
                  "de": "Gelatine",
                  "nl": "Gelatine"
        },
        {
                  "en": "Cornstarch",
                  "es": "Maicena",
                  "de": "Maisstärke",
                  "nl": "Maïzena"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Cornstarch is the most common thickening agent for fruit pies, helping to set the fruit juices without making the filling too heavy or masking the fruit flavor.",
                  "es": "La maicena es el agente espesante más común para las tartas de fruta, ayudando a cuajar los jugos de fruta sin hacer el relleno muy pesado o enmascarar el sabor de la fruta.",
                  "de": "Maisstärke ist das häufigste Verdickungsmittel für Obstkuchen und hilft, die Fruchtsäfte zu binden, ohne die Füllung zu schwer zu machen oder den Fruchtgeschmack zu überdecken.",
                  "nl": "Maïzena is het meest gebruikte verdikkingsmiddel voor fruittaarten, wat helpt om de vruchtensappen te binden zonder de vulling te zwaar te maken of de fruitmaak te overschaduwen."
        }
      },
      {
        question: {
                  "en": "Which fruit is traditionally used in a classic apple crisp?",
                  "es": "¿Qué fruta se usa tradicionalmente en un apple crisp clásico?",
                  "de": "Welche Frucht wird traditionell in einem klassischen Apple Crisp verwendet?",
                  "nl": "Welke vrucht wordt traditioneel gebruikt in een klassieke apple crisp?"
        },
        options: [
        {
                  "en": "Any tart cooking apple",
                  "es": "Cualquier manzana ácida para cocinar",
                  "de": "Jeder säuerliche Kochapfel",
                  "nl": "Elke zure kookappel"
        },
        {
                  "en": "Only sweet apples",
                  "es": "Solo manzanas dulces",
                  "de": "Nur süße Äpfel",
                  "nl": "Alleen zoete appels"
        },
        {
                  "en": "Red Delicious apples",
                  "es": "Manzanas Red Delicious",
                  "de": "Red Delicious Äpfel",
                  "nl": "Red Delicious appels"
        },
        {
                  "en": "Granny Smith apples",
                  "es": "Manzanas Granny Smith",
                  "de": "Granny Smith Äpfel",
                  "nl": "Granny Smith appels"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Apple crisp works best with tart cooking apples that hold their shape when baked, such as Granny Smith, Honeycrisp, or Braeburn varieties.",
                  "es": "El apple crisp funciona mejor con manzanas ácidas para cocinar que mantienen su forma al hornear, como las variedades Granny Smith, Honeycrisp o Braeburn.",
                  "de": "Apple Crisp funktioniert am besten mit säuerlichen Kochäpfeln, die beim Backen ihre Form behalten, wie Granny Smith, Honeycrisp oder Braeburn Sorten.",
                  "nl": "Apple crisp werkt het beste met zure kookappels die hun vorm behouden bij het bakken, zoals Granny Smith, Honeycrisp of Braeburn variëteiten."
        }
      },
      {
        question: {
                  "en": "What is the difference between a cobbler and a crisp?",
                  "es": "¿Cuál es la diferencia entre un cobbler y un crisp?",
                  "de": "Was ist der Unterschied zwischen einem Cobbler und einem Crisp?",
                  "nl": "Wat is het verschil tussen een cobbler en een crisp?"
        },
        options: [
        {
                  "en": "The baking temperature",
                  "es": "La temperatura de horneado",
                  "de": "Die Backtemperatur",
                  "nl": "De baktemperatuur"
        },
        {
                  "en": "The type of fruit used",
                  "es": "El tipo de fruta utilizada",
                  "de": "Die verwendete Obstsorte",
                  "nl": "Het type fruit dat gebruikt wordt"
        },
        {
                  "en": "The topping style",
                  "es": "El estilo de cobertura",
                  "de": "Der Belag-Stil",
                  "nl": "De toppingstijl"
        },
        {
                  "en": "The serving size",
                  "es": "El tamaño de la porción",
                  "de": "Die Portionsgröße",
                  "nl": "De portiegrootte"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "A cobbler has a biscuit or cake-like topping, while a crisp has a crumbly streusel topping made with oats, flour, butter, and sugar.",
                  "es": "Un cobbler tiene una cobertura tipo bizcocho o pastel, mientras que un crisp tiene una cobertura desmenuzable de streusel hecha con avena, harina, mantequilla y azúcar.",
                  "de": "Ein Cobbler hat einen keks- oder kuchenartigen Belag, während ein Crisp einen krümeligen Streusel-Belag aus Hafer, Mehl, Butter und Zucker hat.",
                  "nl": "Een cobbler heeft een koekje- of cakeachtige topping, terwijl een crisp een kruimelige streusel topping heeft gemaakt met haver, meel, boter en suiker."
        }
      },
      {
        question: {
                  "en": "What prevents cut apples from browning in fruit salads?",
                  "es": "¿Qué evita que las manzanas cortadas se oscurezcan en las ensaladas de fruta?",
                  "de": "Was verhindert, dass geschnittene Äpfel in Obstsalaten braun werden?",
                  "nl": "Wat voorkomt dat gesneden appels bruin worden in fruitsalades?"
        },
        options: [
        {
                  "en": "Cold water",
                  "es": "Agua fría",
                  "de": "Kaltes Wasser",
                  "nl": "Koud water"
        },
        {
                  "en": "Lemon juice",
                  "es": "Jugo de limón",
                  "de": "Zitronensaft",
                  "nl": "Citroensap"
        },
        {
                  "en": "Sugar water",
                  "es": "Agua azucarada",
                  "de": "Zuckerwasser",
                  "nl": "Suiker water"
        },
        {
                  "en": "Salt water",
                  "es": "Agua salada",
                  "de": "Salzwasser",
                  "nl": "Zout water"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Lemon juice's acid prevents enzymatic browning by lowering the pH and creating an acidic environment that inhibits the browning enzymes.",
                  "es": "El ácido del jugo de limón previene el oscurecimiento enzimático al bajar el pH y crear un ambiente ácido que inhibe las enzimas de oscurecimiento.",
                  "de": "Die Säure des Zitronensafts verhindert enzymatische Bräunung, indem sie den pH-Wert senkt und eine saure Umgebung schafft, die die Bräunungsenzyme hemmt.",
                  "nl": "Het zuur in citroensap voorkomt enzymatische verbruining door de pH te verlagen en een zure omgeving te creëren die de verbruiningsenzymen remt."
        }
      },
      {
        question: {
                  "en": "What is a fool in terms of fruit desserts?",
                  "es": "¿Qué es un 'fool' en términos de postres de fruta?",
                  "de": "Was ist ein 'Fool' in Bezug auf Fruchtdesserts?",
                  "nl": "Wat is een 'fool' in termen van fruitdesserts?"
        },
        options: [
        {
                  "en": "A layered fruit parfait",
                  "es": "Un parfait de fruta en capas",
                  "de": "Ein geschichtetes Fruchtparfait",
                  "nl": "Een gelaagd fruitparfait"
        },
        {
                  "en": "Fruit puree mixed with whipped cream",
                  "es": "Puré de fruta mezclado con nata montada",
                  "de": "Fruchtpüree gemischt mit Schlagsahne",
                  "nl": "Fruitpuree gemengd met slagroom"
        },
        {
                  "en": "A baked fruit compote",
                  "es": "Una compota de fruta horneada",
                  "de": "Ein gebackenes Fruchtkompott",
                  "nl": "Een gebakken fruitcompote"
        },
        {
                  "en": "A fruit tart with pastry",
                  "es": "Una tarta de fruta con masa",
                  "de": "Eine Obsttorte mit Teig",
                  "nl": "Een fruittaart met deeg"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "A fool is a traditional British dessert made by folding fruit puree (often gooseberry or strawberry) into whipped cream, creating a light, creamy dessert.",
                  "es": "Un fool es un postre británico tradicional hecho plegando puré de fruta (a menudo grosella espinosa o fresa) en nata montada, creando un postre ligero y cremoso.",
                  "de": "Ein Fool ist ein traditionelles britisches Dessert, bei dem Fruchtpüree (oft Stachelbeere oder Erdbeere) in Schlagsahne eingefaltet wird, wodurch ein leichtes, cremiges Dessert entsteht.",
                  "nl": "Een fool is een traditioneel Brits dessert gemaakt door fruitpuree (vaak kruisbes of aardbei) door slagroom te vouwen, waardoor een licht, romig dessert ontstaat."
        }
      },
      {
        question: {
                  "en": "What is the best way to prepare strawberries for desserts?",
                  "es": "¿Cuál es la mejor manera de preparar fresas para postres?",
                  "de": "Was ist der beste Weg, Erdbeeren für Desserts vorzubereiten?",
                  "nl": "Wat is de beste manier om aardbeien voor desserts voor te bereiden?"
        },
        options: [
        {
                  "en": "Remove tops before washing",
                  "es": "Quitar las hojas antes de lavar",
                  "de": "Spitzen vor dem Waschen entfernen",
                  "nl": "Groen verwijderen voor het wassen"
        },
        {
                  "en": "Don't wash at all",
                  "es": "No lavar en absoluto",
                  "de": "Gar nicht waschen",
                  "nl": "Helemaal niet wassen"
        },
        {
                  "en": "Wash before removing tops",
                  "es": "Lavar antes de quitar las hojas",
                  "de": "Waschen vor dem Entfernen der Spitzen",
                  "nl": "Wassen voor het verwijderen van het groen"
        },
        {
                  "en": "Soak in salt water first",
                  "es": "Remojar en agua salada primero",
                  "de": "Zuerst in Salzwasser einweichen",
                  "nl": "Eerst in zout water weken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Always wash strawberries before removing the tops to prevent water from entering the berry and making it soggy or diluting the flavor.",
                  "es": "Siempre lava las fresas antes de quitar las hojas para evitar que entre agua en la baya y la haga empapada o diluya el sabor.",
                  "de": "Waschen Sie Erdbeeren immer vor dem Entfernen der Spitzen, um zu verhindern, dass Wasser in die Beere eindringt und sie matschig macht oder den Geschmack verwässert.",
                  "nl": "Was aardbeien altijd voor het verwijderen van het groen om te voorkomen dat water in de bes komt en deze week maakt of de smaak verdunt."
        }
      },
      {
        question: {
                  "en": "What makes a fruit compote different from jam?",
                  "es": "¿Qué hace que una compota de fruta sea diferente de la mermelada?",
                  "de": "Was macht ein Fruchtkompott anders als Marmelade?",
                  "nl": "Wat maakt een fruitcompote anders dan jam?"
        },
        options: [
        {
                  "en": "Storage method",
                  "es": "Método de almacenamiento",
                  "de": "Lagerungsmethode",
                  "nl": "Bewaarmethode"
        },
        {
                  "en": "Cooking time",
                  "es": "Tiempo de cocción",
                  "de": "Kochzeit",
                  "nl": "Kooktijd"
        },
        {
                  "en": "Sugar content and texture",
                  "es": "Contenido de azúcar y textura",
                  "de": "Zuckergehalt und Textur",
                  "nl": "Suikergehalte en textuur"
        },
        {
                  "en": "Type of fruit used",
                  "es": "Tipo de fruta utilizada",
                  "de": "Verwendete Obstsorte",
                  "nl": "Type fruit gebruikt"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Compote has less sugar and maintains more fruit texture with distinct pieces, while jam is cooked longer with more sugar until it reaches a spreadable, gel-like consistency.",
                  "es": "La compota tiene menos azúcar y mantiene más textura de fruta con trozos distintos, mientras que la mermelada se cocina más tiempo con más azúcar hasta alcanzar una consistencia untable tipo gel.",
                  "de": "Kompott hat weniger Zucker und behält mehr Fruchttextur mit deutlichen Stücken, während Marmelade länger mit mehr Zucker gekocht wird, bis sie eine streichbare, gelartige Konsistenz erreicht.",
                  "nl": "Compote heeft minder suiker en behoudt meer fruittextuur met duidelijke stukjes, terwijl jam langer gekookt wordt met meer suiker tot het een smeerbare, gelachtige consistentie bereikt."
        }
      },
      {
        question: {
                  "en": "Which technique is used to make fruit leather?",
                  "es": "¿Qué técnica se usa para hacer cuero de fruta?",
                  "de": "Welche Technik wird verwendet, um Fruchtleder herzustellen?",
                  "nl": "Welke techniek wordt gebruikt om fruitleer te maken?"
        },
        options: [
        {
                  "en": "Dehydration",
                  "es": "Deshidratación",
                  "de": "Dehydration",
                  "nl": "Dehydratie"
        },
        {
                  "en": "Caramelization",
                  "es": "Caramelización",
                  "de": "Karamelisierung",
                  "nl": "Karamelisatie"
        },
        {
                  "en": "Fermentation",
                  "es": "Fermentación",
                  "de": "Fermentation",
                  "nl": "Fermentatie"
        },
        {
                  "en": "Freezing",
                  "es": "Congelación",
                  "de": "Einfrieren",
                  "nl": "Invriezen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Fruit leather is made by dehydrating fruit puree until it forms a flexible, chewy sheet that can be peeled and eaten like leather.",
                  "es": "El cuero de fruta se hace deshidratando puré de fruta hasta que forme una lámina flexible y masticable que se puede pelar y comer como cuero.",
                  "de": "Fruchtleder wird hergestellt, indem Fruchtpüree dehydriert wird, bis es eine flexible, zähe Schicht bildet, die wie Leder abgezogen und gegessen werden kann.",
                  "nl": "Fruitleer wordt gemaakt door fruitpuree te dehydrateren tot het een flexibele, chewy laag vormt die zoals leer afgepeld en gegeten kan worden."
        }
      },
      {
        question: {
                  "en": "What is the purpose of macerating fruit?",
                  "es": "¿Cuál es el propósito de macerar la fruta?",
                  "de": "Was ist der Zweck des Mazerierens von Obst?",
                  "nl": "Wat is het doel van het macereren van fruit?"
        },
        options: [
        {
                  "en": "To change the color",
                  "es": "Para cambiar el color",
                  "de": "Um die Farbe zu ändern",
                  "nl": "Om de kleur te veranderen"
        },
        {
                  "en": "To extract juices and soften",
                  "es": "Para extraer jugos y ablandar",
                  "de": "Um Säfte zu extrahieren und zu erweichen",
                  "nl": "Om sappen te extraheren en te verzachten"
        },
        {
                  "en": "To preserve it longer",
                  "es": "Para preservarla más tiempo",
                  "de": "Um es länger zu konservieren",
                  "nl": "Om het langer te bewaren"
        },
        {
                  "en": "To remove seeds",
                  "es": "Para quitar las semillas",
                  "de": "Um Kerne zu entfernen",
                  "nl": "Om zaden te verwijderen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Macerating fruit with sugar or liquid extracts natural juices, softens the fruit, and creates a syrup that enhances flavor and texture in desserts.",
                  "es": "Macerar la fruta con azúcar o líquido extrae jugos naturales, ablanda la fruta y crea un jarabe que mejora el sabor y la textura en los postres.",
                  "de": "Das Mazerieren von Obst mit Zucker oder Flüssigkeit extrahiert natürliche Säfte, erweicht das Obst und erzeugt einen Sirup, der Geschmack und Textur in Desserts verbessert.",
                  "nl": "Het macereren van fruit met suiker of vloeistof extraheert natuurlijke sappen, verzacht het fruit en creëert een siroop die smaak en textuur in desserts verbetert."
        }
      },
      {
        question: {
                  "en": "What is a clafoutis?",
                  "es": "¿Qué es un clafoutis?",
                  "de": "Was ist ein Clafoutis?",
                  "nl": "Wat is een clafoutis?"
        },
        options: [
        {
                  "en": "A French fruit tart",
                  "es": "Una tarta de fruta francesa",
                  "de": "Eine französische Obsttorte",
                  "nl": "Een Franse fruittaart"
        },
        {
                  "en": "A fruit ice cream",
                  "es": "Un helado de fruta",
                  "de": "Ein Fruchteis",
                  "nl": "Een fruitijs"
        },
        {
                  "en": "A layered fruit cake",
                  "es": "Un pastel de fruta en capas",
                  "de": "Ein geschichteter Obstkuchen",
                  "nl": "Een gelaagde fruitcake"
        },
        {
                  "en": "A baked fruit custard",
                  "es": "Una natilla de fruta horneada",
                  "de": "Ein gebackener Obstpudding",
                  "nl": "Een gebakken fruitcustard"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Clafoutis is a French baked dessert where fruit (traditionally cherries) is covered with a thick, custard-like batter and baked until set.",
                  "es": "Clafoutis es un postre francés horneado donde la fruta (tradicionalmente cerezas) se cubre con una masa espesa tipo natillas y se hornea hasta cuajar.",
                  "de": "Clafoutis ist ein französisches gebackenes Dessert, bei dem Obst (traditionell Kirschen) mit einem dicken, puddingartigen Teig bedeckt und gebacken wird, bis es fest ist.",
                  "nl": "Clafoutis is een Frans gebakken dessert waarbij fruit (traditioneel kersen) bedekt wordt met een dik, custardachtig beslag en gebakken wordt tot het gestold is."
        }
      },
      {
        question: {
                  "en": "Which fruit is traditional in a tarte tatin?",
                  "es": "¿Qué fruta es tradicional en una tarte tatin?",
                  "de": "Welche Frucht ist traditionell in einer Tarte Tatin?",
                  "nl": "Welke vrucht is traditioneel in een tarte tatin?"
        },
        options: [
        {
                  "en": "Apples",
                  "es": "Manzanas",
                  "de": "Äpfel",
                  "nl": "Appels"
        },
        {
                  "en": "Peaches",
                  "es": "Duraznos",
                  "de": "Pfirsiche",
                  "nl": "Perziken"
        },
        {
                  "en": "Pears",
                  "es": "Peras",
                  "de": "Birnen",
                  "nl": "Peren"
        },
        {
                  "en": "Plums",
                  "es": "Ciruelas",
                  "de": "Pflaumen",
                  "nl": "Pruimen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Tarte tatin is a traditional French upside-down apple tart where apples are caramelized in butter and sugar before being topped with pastry and baked.",
                  "es": "Tarte tatin es una tarta de manzana francesa tradicional al revés donde las manzanas se caramelizan en mantequilla y azúcar antes de cubrirse con masa y hornear.",
                  "de": "Tarte Tatin ist eine traditionelle französische umgekehrte Apfeltorte, bei der Äpfel in Butter und Zucker karamelisiert werden, bevor sie mit Teig bedeckt und gebacken werden.",
                  "nl": "Tarte tatin is een traditionele Franse omgekeerde appeltaart waarbij appels gekarameliseerd worden in boter en suiker voordat ze bedekt worden met deeg en gebakken."
        }
      },
      {
        question: {
                  "en": "What is the ideal ripeness for baking with pears?",
                  "es": "¿Cuál es la madurez ideal para hornear con peras?",
                  "de": "Was ist die ideale Reife zum Backen mit Birnen?",
                  "nl": "Wat is de ideale rijpheid voor bakken met peren?"
        },
        options: [
        {
                  "en": "Completely green",
                  "es": "Completamente verdes",
                  "de": "Völlig grün",
                  "nl": "Volledig groen"
        },
        {
                  "en": "Overripe",
                  "es": "Demasiado maduras",
                  "de": "Überreif",
                  "nl": "Overrijp"
        },
        {
                  "en": "Very ripe and soft",
                  "es": "Muy maduras y suaves",
                  "de": "Sehr reif und weich",
                  "nl": "Zeer rijp en zacht"
        },
        {
                  "en": "Slightly underripe and firm",
                  "es": "Ligeramente verdes y firmes",
                  "de": "Leicht unreif und fest",
                  "nl": "Iets onderrijp en stevig"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Slightly underripe, firm pears hold their shape better during baking and won't become mushy, while still developing sweetness and flavor when cooked.",
                  "es": "Las peras ligeramente verdes y firmes mantienen mejor su forma durante el horneado y no se vuelven pastosas, mientras desarrollan dulzura y sabor al cocinarse.",
                  "de": "Leicht unreife, feste Birnen behalten ihre Form beim Backen besser und werden nicht matschig, während sie beim Kochen trotzdem Süße und Geschmack entwickeln.",
                  "nl": "Iets onderrijpe, stevige peren behouden hun vorm beter tijdens het bakken en worden niet papperig, terwijl ze nog steeds zoetheid en smaak ontwikkelen bij het koken."
        }
      },
      {
        question: {
                  "en": "What causes fruit to release juice when mixed with sugar?",
                  "es": "¿Qué causa que la fruta libere jugo cuando se mezcla con azúcar?",
                  "de": "Was bewirkt, dass Obst Saft abgibt, wenn es mit Zucker gemischt wird?",
                  "nl": "Wat zorgt ervoor dat fruit sap afgeeft wanneer het gemengd wordt met suiker?"
        },
        options: [
        {
                  "en": "Heat generation",
                  "es": "Generación de calor",
                  "de": "Wärmeerzeugung",
                  "nl": "Warmtegeneratie"
        },
        {
                  "en": "Fermentation",
                  "es": "Fermentación",
                  "de": "Fermentation",
                  "nl": "Fermentatie"
        },
        {
                  "en": "Chemical reaction",
                  "es": "Reacción química",
                  "de": "Chemische Reaktion",
                  "nl": "Chemische reactie"
        },
        {
                  "en": "Osmosis",
                  "es": "Ósmosis",
                  "de": "Osmose",
                  "nl": "Osmose"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Osmosis draws water from the fruit cells when sugar is added, as water moves from low sugar concentration (inside fruit) to high sugar concentration (outside).",
                  "es": "La ósmosis extrae agua de las células de la fruta cuando se añade azúcar, ya que el agua se mueve de baja concentración de azúcar (dentro de la fruta) a alta concentración de azúcar (fuera).",
                  "de": "Osmose zieht Wasser aus den Fruchtzellen, wenn Zucker hinzugefügt wird, da Wasser von niedriger Zuckerkonzentration (in der Frucht) zu hoher Zuckerkonzentration (außen) wandert.",
                  "nl": "Osmose trekt water uit de fruitcellen wanneer suiker wordt toegevoegd, omdat water beweegt van lage suikerconcentratie (binnen fruit) naar hoge suikerconcentratie (buiten)."
        }
      },
      {
        question: {
                  "en": "What is a galette?",
                  "es": "¿Qué es una galette?",
                  "de": "Was ist eine Galette?",
                  "nl": "Wat is een galette?"
        },
        options: [
        {
                  "en": "A layered fruit parfait",
                  "es": "Un parfait de fruta en capas",
                  "de": "Ein geschichtetes Fruchtparfait",
                  "nl": "Een gelaagd fruitparfait"
        },
        {
                  "en": "A free-form rustic tart",
                  "es": "Una tarta rústica de forma libre",
                  "de": "Eine formfreie rustikale Torte",
                  "nl": "Een vrijgevormde rustieke taart"
        },
        {
                  "en": "A molded fruit dessert",
                  "es": "Un postre de fruta moldeado",
                  "de": "Ein geformtes Fruchtdessert",
                  "nl": "Een gevormde fruitdessert"
        },
        {
                  "en": "A frozen fruit dessert",
                  "es": "Un postre de fruta congelado",
                  "de": "Ein gefrorenes Fruchtdessert",
                  "nl": "Een bevroren fruitdessert"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "A galette is a free-form, rustic tart where pastry dough is rolled out flat, filled with fruit, and the edges are folded up around the filling.",
                  "es": "Una galette es una tarta rústica de forma libre donde la masa se extiende plana, se rellena con fruta y los bordes se doblan alrededor del relleno.",
                  "de": "Eine Galette ist eine formfreie, rustikale Torte, bei der Teig flach ausgerollt, mit Obst gefüllt und die Ränder um die Füllung hochgefaltet werden.",
                  "nl": "Een galette is een vrijgevormde, rustieke taart waarbij deeg plat wordt uitgerold, gevuld met fruit en de randen omhoog gevouwen worden rond de vulling."
        }
      },
      {
        question: {
                  "en": "Which spice pairs best with baked apples?",
                  "es": "¿Qué especia combina mejor con manzanas horneadas?",
                  "de": "Welches Gewürz passt am besten zu gebackenen Äpfeln?",
                  "nl": "Welke specerij past het beste bij gebakken appels?"
        },
        options: [
        {
                  "en": "Oregano",
                  "es": "Orégano",
                  "de": "Oregano",
                  "nl": "Oregano"
        },
        {
                  "en": "Cinnamon",
                  "es": "Canela",
                  "de": "Zimt",
                  "nl": "Kaneel"
        },
        {
                  "en": "Basil",
                  "es": "Albahaca",
                  "de": "Basilikum",
                  "nl": "Basilicum"
        },
        {
                  "en": "Thyme",
                  "es": "Tomillo",
                  "de": "Thymian",
                  "nl": "Tijm"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Cinnamon is the classic spice pairing with baked apples, complementing their sweetness and adding warmth and depth to the flavor profile.",
                  "es": "La canela es la especia clásica que se combina con manzanas horneadas, complementando su dulzura y añadiendo calidez y profundidad al perfil de sabor.",
                  "de": "Zimt ist die klassische Gewürzkombination mit gebackenen Äpfeln, ergänzt ihre Süße und fügt Wärme und Tiefe zum Geschmacksprofil hinzu.",
                  "nl": "Kaneel is de klassieke specerij combinatie met gebakken appels, vult hun zoetheid aan en voegt warmte en diepte toe aan het smaakprofiel."
        }
      },
      {
        question: {
                  "en": "What is the purpose of blind baking when making fruit tarts?",
                  "es": "¿Cuál es el propósito de hornear a ciegas al hacer tartas de fruta?",
                  "de": "Was ist der Zweck des Blindbackens bei der Herstellung von Obsttorten?",
                  "nl": "Wat is het doel van blind bakken bij het maken van fruittaarten?"
        },
        options: [
        {
                  "en": "To change the color",
                  "es": "Para cambiar el color",
                  "de": "Um die Farbe zu ändern",
                  "nl": "Om de kleur te veranderen"
        },
        {
                  "en": "To add flavor to the crust",
                  "es": "Para añadir sabor a la corteza",
                  "de": "Um der Kruste Geschmack zu verleihen",
                  "nl": "Om smaak toe te voegen aan de korst"
        },
        {
                  "en": "To prevent soggy bottom crust",
                  "es": "Para prevenir una base empapada",
                  "de": "Um einen durchweichten Boden zu verhindern",
                  "nl": "Om een doorweekte bodem te voorkomen"
        },
        {
                  "en": "To save baking time",
                  "es": "Para ahorrar tiempo de horneado",
                  "de": "Um Backzeit zu sparen",
                  "nl": "Om baktijd te besparen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Blind baking pre-cooks the pastry shell to create a barrier that prevents fruit juices from making the bottom crust soggy and ensures even cooking.",
                  "es": "Hornear a ciegas pre-cocina la base de masa para crear una barrera que evita que los jugos de fruta hagan la base empapada y asegura una cocción uniforme.",
                  "de": "Blindbacken kocht die Teigschale vor, um eine Barriere zu schaffen, die verhindert, dass Fruchtsäfte den Boden durchweichen und sorgt für gleichmäßiges Garen.",
                  "nl": "Blind bakken kookt de deegschaal voor om een barrière te creëren die voorkomt dat vruchtensappen de bodem doorweekt maken en zorgt voor gelijkmatige garing."
        }
      },
      {
        question: {
                  "en": "Which technique helps prevent fruit from sinking in muffins and cakes?",
                  "es": "¿Qué técnica ayuda a prevenir que la fruta se hunda en muffins y pasteles?",
                  "de": "Welche Technik hilft zu verhindern, dass Obst in Muffins und Kuchen absinkt?",
                  "nl": "Welke techniek helpt voorkomen dat fruit in muffins en taarten zakt?"
        },
        options: [
        {
                  "en": "Cutting fruit larger",
                  "es": "Cortar la fruta más grande",
                  "de": "Obst größer schneiden",
                  "nl": "Fruit groter snijden"
        },
        {
                  "en": "Tossing fruit in flour",
                  "es": "Mezclar la fruta con harina",
                  "de": "Obst in Mehl wenden",
                  "nl": "Fruit mengen met meel"
        },
        {
                  "en": "Adding more liquid",
                  "es": "Añadir más líquido",
                  "de": "Mehr Flüssigkeit hinzufügen",
                  "nl": "Meer vloeistof toevoegen"
        },
        {
                  "en": "Using frozen fruit",
                  "es": "Usar fruta congelada",
                  "de": "Gefrorenes Obst verwenden",
                  "nl": "Bevroren fruit gebruiken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Tossing fruit pieces in a small amount of flour before folding them into batter helps them stay suspended and prevents sinking during baking.",
                  "es": "Mezclar los trozos de fruta con una pequeña cantidad de harina antes de incorporarlos al batido ayuda a que se mantengan suspendidos y evita que se hundan durante el horneado.",
                  "de": "Das Wenden von Obststücken in wenig Mehl vor dem Einfalten in den Teig hilft ihnen, in der Schwebe zu bleiben und verhindert das Absinken beim Backen.",
                  "nl": "Het mengen van fruitstukjes met een kleine hoeveelheid meel voordat ze in het beslag gevouwen worden helpt ze gesuspendeerd te blijven en voorkomt zakken tijdens het bakken."
        }
      },
      {
        question: {
                  "en": "What is the main characteristic of a summer pudding?",
                  "es": "¿Cuál es la característica principal de un summer pudding?",
                  "de": "Was ist das Hauptmerkmal eines Summer Puddings?",
                  "nl": "Wat is de hoofdeigenschap van een summer pudding?"
        },
        options: [
        {
                  "en": "It's served hot",
                  "es": "Se sirve caliente",
                  "de": "Es wird heiß serviert",
                  "nl": "Het wordt warm geserveerd"
        },
        {
                  "en": "It's frozen before serving",
                  "es": "Se congela antes de servir",
                  "de": "Es wird vor dem Servieren gefroren",
                  "nl": "Het wordt bevroren voor het serveren"
        },
        {
                  "en": "It uses bread as a mold",
                  "es": "Usa pan como molde",
                  "de": "Es verwendet Brot als Form",
                  "nl": "Het gebruikt brood als vorm"
        },
        {
                  "en": "It contains no fruit",
                  "es": "No contiene fruta",
                  "de": "Es enthält kein Obst",
                  "nl": "Het bevat geen fruit"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Summer pudding is made by lining a bowl with bread slices, filling it with cooked summer berries, and using the bread as a mold that absorbs the fruit juices.",
                  "es": "El summer pudding se hace forrando un tazón con rebanadas de pan, llenándolo con bayas de verano cocidas y usando el pan como molde que absorbe los jugos de la fruta.",
                  "de": "Summer Pudding wird hergestellt, indem eine Schüssel mit Brotscheiben ausgekleidet, mit gekochten Sommerbeeren gefüllt und das Brot als Form verwendet wird, die die Fruchtsäfte absorbiert.",
                  "nl": "Summer pudding wordt gemaakt door een kom te bekleden met broodplakken, deze te vullen met gekookte zomerbessen en het brood als vorm te gebruiken die de vruchtensappen absorbeert."
        }
      },
      {
        question: {
                  "en": "Which fruit is best for making traditional jam?",
                  "es": "¿Qué fruta es mejor para hacer mermelada tradicional?",
                  "de": "Welche Frucht ist am besten für traditionelle Marmelade?",
                  "nl": "Welke vrucht is het beste voor het maken van traditionele jam?"
        },
        options: [
        {
                  "en": "Unripe, green fruits",
                  "es": "Frutas verdes no maduras",
                  "de": "Unreife, grüne Früchte",
                  "nl": "Onrijpe, groene vruchten"
        },
        {
                  "en": "High-pectin fruits like apples",
                  "es": "Frutas altas en pectina como manzanas",
                  "de": "Pektinreiche Früchte wie Äpfel",
                  "nl": "Hoge-pectine vruchten zoals appels"
        },
        {
                  "en": "Very ripe, soft fruits",
                  "es": "Frutas muy maduras y suaves",
                  "de": "Sehr reife, weiche Früchte",
                  "nl": "Zeer rijpe, zachte vruchten"
        },
        {
                  "en": "Frozen fruits only",
                  "es": "Solo frutas congeladas",
                  "de": "Nur gefrorene Früchte",
                  "nl": "Alleen bevroren vruchten"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "High-pectin fruits like apples, citrus fruits, and cranberries naturally gel better when making jam, though pectin can be added to low-pectin fruits.",
                  "es": "Las frutas altas en pectina como manzanas, cítricos y arándanos agrios gelifican mejor naturalmente al hacer mermelada, aunque se puede añadir pectina a frutas bajas en pectina.",
                  "de": "Pektinreiche Früchte wie Äpfel, Zitrusfrüchte und Cranberries gelieren natürlich besser bei der Marmeladenherstellung, obwohl Pektin zu pektinarmen Früchten hinzugefügt werden kann.",
                  "nl": "Hoge-pectine vruchten zoals appels, citrusvruchten en veenbessen geleren natuurlijk beter bij het maken van jam, hoewel pectine toegevoegd kan worden aan lage-pectine vruchten."
        }
      },
      {
        question: {
                  "en": "What is the best storage method for fresh berries to maintain their quality?",
                  "es": "¿Cuál es el mejor método de almacenamiento para bayas frescas para mantener su calidad?",
                  "de": "Was ist die beste Lagerungsmethode für frische Beeren, um ihre Qualität zu erhalten?",
                  "nl": "Wat is de beste bewaarmethode voor verse bessen om hun kwaliteit te behouden?"
        },
        options: [
        {
                  "en": "In the freezer immediately",
                  "es": "En el congelador inmediatamente",
                  "de": "Sofort im Gefrierschrank",
                  "nl": "Onmiddellijk in de vriezer"
        },
        {
                  "en": "At room temperature",
                  "es": "A temperatura ambiente",
                  "de": "Bei Raumtemperatur",
                  "nl": "Op kamertemperatuur"
        },
        {
                  "en": "In water",
                  "es": "En agua",
                  "de": "In Wasser",
                  "nl": "In water"
        },
        {
                  "en": "In the refrigerator, unwashed",
                  "es": "En el refrigerador, sin lavar",
                  "de": "Im Kühlschrank, ungewaschen",
                  "nl": "In de koelkast, ongewassen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Fresh berries should be stored in the refrigerator unwashed to prevent moisture from causing mold and decay. Wash them just before eating or using.",
                  "es": "Las bayas frescas deben almacenarse en el refrigerador sin lavar para evitar que la humedad cause moho y descomposición. Lávalas justo antes de comer o usar.",
                  "de": "Frische Beeren sollten ungewaschen im Kühlschrank gelagert werden, um zu verhindern, dass Feuchtigkeit Schimmel und Verfall verursacht. Waschen Sie sie erst kurz vor dem Verzehr oder der Verwendung.",
                  "nl": "Verse bessen moeten ongewassen in de koelkast bewaard worden om te voorkomen dat vocht schimmel en bederf veroorzaakt. Was ze net voor het eten of gebruiken."
        }
      },
      {
        question: {
                  "en": "What is a cobbler?",
                  "es": "What is a cobbler?",
                  "de": "What is a cobbler?",
                  "nl": "What is a cobbler?"
        },
        options: [
        {
                  "en": "Fruit pie with two crusts",
                  "es": "Fruit pie with two crusts",
                  "de": "Fruit pie with two crusts",
                  "nl": "Fruit pie with two crusts"
        },
        {
                  "en": "Fruit with biscuit-like topping",
                  "es": "Fruit with biscuit-like topping",
                  "de": "Fruit with biscuit-like topping",
                  "nl": "Fruit with biscuit-like topping"
        },
        {
                  "en": "Layered fruit dessert",
                  "es": "Layered fruit dessert",
                  "de": "Layered fruit dessert",
                  "nl": "Layered fruit dessert"
        },
        {
                  "en": "Fruit with ice cream",
                  "es": "Fruit with ice cream",
                  "de": "Fruit with ice cream",
                  "nl": "Fruit with ice cream"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Cobbler consists of fruit topped with a biscuit-like dough that resembles a cobblestone street when baked.",
                  "es": "Cobbler consists of fruit topped with a biscuit-like dough that resembles a cobblestone street when baked.",
                  "de": "Cobbler consists of fruit topped with a biscuit-like dough that resembles a cobblestone street when baked.",
                  "nl": "Cobbler consists of fruit topped with a biscuit-like dough that resembles a cobblestone street when baked."
        }
      },
      {
        question: {
                  "en": "What is a crisp (or crumble)?",
                  "es": "What is a crisp (or crumble)?",
                  "de": "What is a crisp (or crumble)?",
                  "nl": "What is a crisp (or crumble)?"
        },
        options: [
        {
                  "en": "Fruit with streusel topping",
                  "es": "Fruit with streusel topping",
                  "de": "Fruit with streusel topping",
                  "nl": "Fruit with streusel topping"
        },
        {
                  "en": "Fruit with cake",
                  "es": "Fruit with cake",
                  "de": "Fruit with cake",
                  "nl": "Fruit with cake"
        },
        {
                  "en": "Fruit with meringue",
                  "es": "Fruit with meringue",
                  "de": "Fruit with meringue",
                  "nl": "Fruit with meringue"
        },
        {
                  "en": "Fruit with pastry crust",
                  "es": "Fruit with pastry crust",
                  "de": "Fruit with pastry crust",
                  "nl": "Fruit with pastry crust"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A crisp or crumble features fruit topped with a streusel-like mixture of butter, sugar, flour, and sometimes oats.",
                  "es": "A crisp or crumble features fruit topped with a streusel-like mixture of butter, sugar, flour, and sometimes oats.",
                  "de": "A crisp or crumble features fruit topped with a streusel-like mixture of butter, sugar, flour, and sometimes oats.",
                  "nl": "A crisp or crumble features fruit topped with a streusel-like mixture of butter, sugar, flour, and sometimes oats."
        }
      },
      {
        question: {
                  "en": "What is a fruit fool?",
                  "es": "What is a fruit fool?",
                  "de": "What is a fruit fool?",
                  "nl": "What is a fruit fool?"
        },
        options: [
        {
                  "en": "Fruit tart",
                  "es": "Fruit tart",
                  "de": "Fruit tart",
                  "nl": "Fruit tart"
        },
        {
                  "en": "Fruit cake",
                  "es": "Fruit cake",
                  "de": "Fruit cake",
                  "nl": "Fruit cake"
        },
        {
                  "en": "Pureed fruit mixed with whipped cream",
                  "es": "Pureed fruit mixed with whipped cream",
                  "de": "Pureed fruit mixed with whipped cream",
                  "nl": "Pureed fruit mixed with whipped cream"
        },
        {
                  "en": "Fruit pie",
                  "es": "Fruit pie",
                  "de": "Fruit pie",
                  "nl": "Fruit pie"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "A fruit fool is a traditional British dessert of pureed or stewed fruit folded into whipped cream.",
                  "es": "A fruit fool is a traditional British dessert of pureed or stewed fruit folded into whipped cream.",
                  "de": "A fruit fool is a traditional British dessert of pureed or stewed fruit folded into whipped cream.",
                  "nl": "A fruit fool is a traditional British dessert of pureed or stewed fruit folded into whipped cream."
        }
      },
      {
        question: {
                  "en": "What is poached fruit?",
                  "es": "What is poached fruit?",
                  "de": "What is poached fruit?",
                  "nl": "What is poached fruit?"
        },
        options: [
        {
                  "en": "Fruit gently simmered in liquid",
                  "es": "Fruit gently simmered in liquid",
                  "de": "Fruit gently simmered in liquid",
                  "nl": "Fruit gently simmered in liquid"
        },
        {
                  "en": "Grilled fruit",
                  "es": "Grilled fruit",
                  "de": "Grilled fruit",
                  "nl": "Grilled fruit"
        },
        {
                  "en": "Raw fruit",
                  "es": "Raw fruit",
                  "de": "Raw fruit",
                  "nl": "Raw fruit"
        },
        {
                  "en": "Baked fruit",
                  "es": "Baked fruit",
                  "de": "Baked fruit",
                  "nl": "Baked fruit"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Poached fruit is gently cooked by simmering in liquid such as wine, syrup, or juice until tender.",
                  "es": "Poached fruit is gently cooked by simmering in liquid such as wine, syrup, or juice until tender.",
                  "de": "Poached fruit is gently cooked by simmering in liquid such as wine, syrup, or juice until tender.",
                  "nl": "Poached fruit is gently cooked by simmering in liquid such as wine, syrup, or juice until tender."
        }
      },
      {
        question: {
                  "en": "What is a clafoutis?",
                  "es": "What is a clafoutis?",
                  "de": "What is a clafoutis?",
                  "nl": "What is a clafoutis?"
        },
        options: [
        {
                  "en": "French baked fruit dessert with custard",
                  "es": "French baked fruit dessert with custard",
                  "de": "French baked fruit dessert with custard",
                  "nl": "French baked fruit dessert with custard"
        },
        {
                  "en": "Fruit tart",
                  "es": "Fruit tart",
                  "de": "Fruit tart",
                  "nl": "Fruit tart"
        },
        {
                  "en": "Fruit pie",
                  "es": "Fruit pie",
                  "de": "Fruit pie",
                  "nl": "Fruit pie"
        },
        {
                  "en": "Fruit compote",
                  "es": "Fruit compote",
                  "de": "Fruit compote",
                  "nl": "Fruit compote"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Clafoutis is a French dessert with fruit (traditionally cherries) covered with a thick custard-like batter and baked.",
                  "es": "Clafoutis is a French dessert with fruit (traditionally cherries) covered with a thick custard-like batter and baked.",
                  "de": "Clafoutis is a French dessert with fruit (traditionally cherries) covered with a thick custard-like batter and baked.",
                  "nl": "Clafoutis is a French dessert with fruit (traditionally cherries) covered with a thick custard-like batter and baked."
        }
      },
      {
        question: {
                  "en": "What is a fruit compote?",
                  "es": "What is a fruit compote?",
                  "de": "What is a fruit compote?",
                  "nl": "What is a fruit compote?"
        },
        options: [
        {
                  "en": "Dried fruit",
                  "es": "Dried fruit",
                  "de": "Dried fruit",
                  "nl": "Dried fruit"
        },
        {
                  "en": "Fruit stewed in sugar syrup",
                  "es": "Fruit stewed in sugar syrup",
                  "de": "Fruit stewed in sugar syrup",
                  "nl": "Fruit stewed in sugar syrup"
        },
        {
                  "en": "Raw fruit salad",
                  "es": "Raw fruit salad",
                  "de": "Raw fruit salad",
                  "nl": "Raw fruit salad"
        },
        {
                  "en": "Fruit pie",
                  "es": "Fruit pie",
                  "de": "Fruit pie",
                  "nl": "Fruit pie"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Compote is fruit slowly cooked in sugar syrup, creating a chunky, syrupy fruit mixture.",
                  "es": "Compote is fruit slowly cooked in sugar syrup, creating a chunky, syrupy fruit mixture.",
                  "de": "Compote is fruit slowly cooked in sugar syrup, creating a chunky, syrupy fruit mixture.",
                  "nl": "Compote is fruit slowly cooked in sugar syrup, creating a chunky, syrupy fruit mixture."
        }
      },
      {
        question: {
                  "en": "What is Pavlova?",
                  "es": "What is Pavlova?",
                  "de": "What is Pavlova?",
                  "nl": "What is Pavlova?"
        },
        options: [
        {
                  "en": "Fruit cake",
                  "es": "Fruit cake",
                  "de": "Fruit cake",
                  "nl": "Fruit cake"
        },
        {
                  "en": "Fruit tart",
                  "es": "Fruit tart",
                  "de": "Fruit tart",
                  "nl": "Fruit tart"
        },
        {
                  "en": "Meringue dessert topped with fruit and cream",
                  "es": "Meringue dessert topped with fruit and cream",
                  "de": "Meringue dessert topped with fruit and cream",
                  "nl": "Meringue dessert topped with fruit and cream"
        },
        {
                  "en": "Fruit ice cream",
                  "es": "Fruit ice cream",
                  "de": "Fruit ice cream",
                  "nl": "Fruit ice cream"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Pavlova is a meringue-based dessert with a crisp crust and soft inside, topped with whipped cream and fresh fruit.",
                  "es": "Pavlova is a meringue-based dessert with a crisp crust and soft inside, topped with whipped cream and fresh fruit.",
                  "de": "Pavlova is a meringue-based dessert with a crisp crust and soft inside, topped with whipped cream and fresh fruit.",
                  "nl": "Pavlova is a meringue-based dessert with a crisp crust and soft inside, topped with whipped cream and fresh fruit."
        }
      },
      {
        question: {
                  "en": "What is a fruit tart?",
                  "es": "What is a fruit tart?",
                  "de": "What is a fruit tart?",
                  "nl": "What is a fruit tart?"
        },
        options: [
        {
                  "en": "Fruit pudding",
                  "es": "Fruit pudding",
                  "de": "Fruit pudding",
                  "nl": "Fruit pudding"
        },
        {
                  "en": "Pastry shell filled with custard and fruit",
                  "es": "Pastry shell filled with custard and fruit",
                  "de": "Pastry shell filled with custard and fruit",
                  "nl": "Pastry shell filled with custard and fruit"
        },
        {
                  "en": "Fruit pie",
                  "es": "Fruit pie",
                  "de": "Fruit pie",
                  "nl": "Fruit pie"
        },
        {
                  "en": "Fruit cake",
                  "es": "Fruit cake",
                  "de": "Fruit cake",
                  "nl": "Fruit cake"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "A fruit tart has a pastry shell filled with pastry cream or custard and topped with fresh fruit, often glazed.",
                  "es": "A fruit tart has a pastry shell filled with pastry cream or custard and topped with fresh fruit, often glazed.",
                  "de": "A fruit tart has a pastry shell filled with pastry cream or custard and topped with fresh fruit, often glazed.",
                  "nl": "A fruit tart has a pastry shell filled with pastry cream or custard and topped with fresh fruit, often glazed."
        }
      },
      {
        question: {
                  "en": "What is bananas Foster?",
                  "es": "What is bananas Foster?",
                  "de": "What is bananas Foster?",
                  "nl": "What is bananas Foster?"
        },
        options: [
        {
                  "en": "Banana split",
                  "es": "Banana split",
                  "de": "Banana split",
                  "nl": "Banana split"
        },
        {
                  "en": "Banana cream pie",
                  "es": "Banana cream pie",
                  "de": "Banana cream pie",
                  "nl": "Banana cream pie"
        },
        {
                  "en": "Bananas in caramel rum sauce, often flambéed",
                  "es": "Bananas in caramel rum sauce, often flambéed",
                  "de": "Bananas in caramel rum sauce, often flambéed",
                  "nl": "Bananas in caramel rum sauce, often flambéed"
        },
        {
                  "en": "Banana bread",
                  "es": "Banana bread",
                  "de": "Banana bread",
                  "nl": "Banana bread"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Bananas Foster features bananas cooked in butter, brown sugar, cinnamon, and rum sauce, often flambéed tableside.",
                  "es": "Bananas Foster features bananas cooked in butter, brown sugar, cinnamon, and rum sauce, often flambéed tableside.",
                  "de": "Bananas Foster features bananas cooked in butter, brown sugar, cinnamon, and rum sauce, often flambéed tableside.",
                  "nl": "Bananas Foster features bananas cooked in butter, brown sugar, cinnamon, and rum sauce, often flambéed tableside."
        }
      },
      {
        question: {
                  "en": "What is a buckle?",
                  "es": "What is a buckle?",
                  "de": "What is a buckle?",
                  "nl": "What is a buckle?"
        },
        options: [
        {
                  "en": "Fruit pie",
                  "es": "Fruit pie",
                  "de": "Fruit pie",
                  "nl": "Fruit pie"
        },
        {
                  "en": "Fruit cobbler",
                  "es": "Fruit cobbler",
                  "de": "Fruit cobbler",
                  "nl": "Fruit cobbler"
        },
        {
                  "en": "Cake with fruit mixed in, streusel topping",
                  "es": "Cake with fruit mixed in, streusel topping",
                  "de": "Cake with fruit mixed in, streusel topping",
                  "nl": "Cake with fruit mixed in, streusel topping"
        },
        {
                  "en": "Fruit tart",
                  "es": "Fruit tart",
                  "de": "Fruit tart",
                  "nl": "Fruit tart"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "A buckle is a cake with fruit mixed into the batter and a streusel topping that 'buckles' as it bakes.",
                  "es": "A buckle is a cake with fruit mixed into the batter and a streusel topping that 'buckles' as it bakes.",
                  "de": "A buckle is a cake with fruit mixed into the batter and a streusel topping that 'buckles' as it bakes.",
                  "nl": "A buckle is a cake with fruit mixed into the batter and a streusel topping that 'buckles' as it bakes."
        }
      },
      {
        question: {
                  "en": "What is a grunt or slump?",
                  "es": "What is a grunt or slump?",
                  "de": "What is a grunt or slump?",
                  "nl": "What is a grunt or slump?"
        },
        options: [
        {
                  "en": "Fruit tart",
                  "es": "Fruit tart",
                  "de": "Fruit tart",
                  "nl": "Fruit tart"
        },
        {
                  "en": "Fruit pie",
                  "es": "Fruit pie",
                  "de": "Fruit pie",
                  "nl": "Fruit pie"
        },
        {
                  "en": "Fruit cake",
                  "es": "Fruit cake",
                  "de": "Fruit cake",
                  "nl": "Fruit cake"
        },
        {
                  "en": "Fruit stewed with dumpling topping",
                  "es": "Fruit stewed with dumpling topping",
                  "de": "Fruit stewed with dumpling topping",
                  "nl": "Fruit stewed with dumpling topping"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A grunt (or slump) is fruit stewed on the stovetop with biscuit-like dumplings steamed on top.",
                  "es": "A grunt (or slump) is fruit stewed on the stovetop with biscuit-like dumplings steamed on top.",
                  "de": "A grunt (or slump) is fruit stewed on the stovetop with biscuit-like dumplings steamed on top.",
                  "nl": "A grunt (or slump) is fruit stewed on the stovetop with biscuit-like dumplings steamed on top."
        }
      },
      {
        question: {
                  "en": "What is Eton mess?",
                  "es": "What is Eton mess?",
                  "de": "What is Eton mess?",
                  "nl": "What is Eton mess?"
        },
        options: [
        {
                  "en": "Fruit pie",
                  "es": "Fruit pie",
                  "de": "Fruit pie",
                  "nl": "Fruit pie"
        },
        {
                  "en": "Fruit tart",
                  "es": "Fruit tart",
                  "de": "Fruit tart",
                  "nl": "Fruit tart"
        },
        {
                  "en": "Fruit cake",
                  "es": "Fruit cake",
                  "de": "Fruit cake",
                  "nl": "Fruit cake"
        },
        {
                  "en": "Meringue, cream, and berries mixed together",
                  "es": "Meringue, cream, and berries mixed together",
                  "de": "Meringue, cream, and berries mixed together",
                  "nl": "Meringue, cream, and berries mixed together"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Eton mess is a British dessert of crushed meringue, whipped cream, and strawberries mixed together.",
                  "es": "Eton mess is a British dessert of crushed meringue, whipped cream, and strawberries mixed together.",
                  "de": "Eton mess is a British dessert of crushed meringue, whipped cream, and strawberries mixed together.",
                  "nl": "Eton mess is a British dessert of crushed meringue, whipped cream, and strawberries mixed together."
        }
      },
      {
        question: {
                  "en": "What is a fruit galette?",
                  "es": "What is a fruit galette?",
                  "de": "What is a fruit galette?",
                  "nl": "What is a fruit galette?"
        },
        options: [
        {
                  "en": "Fruit pie",
                  "es": "Fruit pie",
                  "de": "Fruit pie",
                  "nl": "Fruit pie"
        },
        {
                  "en": "Layered fruit cake",
                  "es": "Layered fruit cake",
                  "de": "Layered fruit cake",
                  "nl": "Layered fruit cake"
        },
        {
                  "en": "Free-form rustic fruit tart",
                  "es": "Free-form rustic fruit tart",
                  "de": "Free-form rustic fruit tart",
                  "nl": "Free-form rustic fruit tart"
        },
        {
                  "en": "Fruit pudding",
                  "es": "Fruit pudding",
                  "de": "Fruit pudding",
                  "nl": "Fruit pudding"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "A galette is a free-form tart with fruit in the center and pastry edges folded over, more rustic than a traditional tart.",
                  "es": "A galette is a free-form tart with fruit in the center and pastry edges folded over, more rustic than a traditional tart.",
                  "de": "A galette is a free-form tart with fruit in the center and pastry edges folded over, more rustic than a traditional tart.",
                  "nl": "A galette is a free-form tart with fruit in the center and pastry edges folded over, more rustic than a traditional tart."
        }
      },
      {
        question: {
                  "en": "What is flambé?",
                  "es": "What is flambé?",
                  "de": "What is flambé?",
                  "nl": "What is flambé?"
        },
        options: [
        {
                  "en": "Caramelizing sugar",
                  "es": "Caramelizing sugar",
                  "de": "Caramelizing sugar",
                  "nl": "Caramelizing sugar"
        },
        {
                  "en": "Setting alcohol-soaked dessert on fire",
                  "es": "Setting alcohol-soaked dessert on fire",
                  "de": "Setting alcohol-soaked dessert on fire",
                  "nl": "Setting alcohol-soaked dessert on fire"
        },
        {
                  "en": "Grilling fruit",
                  "es": "Grilling fruit",
                  "de": "Grilling fruit",
                  "nl": "Grilling fruit"
        },
        {
                  "en": "Freezing dessert",
                  "es": "Freezing dessert",
                  "de": "Freezing dessert",
                  "nl": "Freezing dessert"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Flambé involves pouring liquor over a dessert and igniting it, creating dramatic flames and enhancing flavor.",
                  "es": "Flambé involves pouring liquor over a dessert and igniting it, creating dramatic flames and enhancing flavor.",
                  "de": "Flambé involves pouring liquor over a dessert and igniting it, creating dramatic flames and enhancing flavor.",
                  "nl": "Flambé involves pouring liquor over a dessert and igniting it, creating dramatic flames and enhancing flavor."
        }
      },
      {
        question: {
                  "en": "What is a brown Betty?",
                  "es": "What is a brown Betty?",
                  "de": "What is a brown Betty?",
                  "nl": "What is a brown Betty?"
        },
        options: [
        {
                  "en": "Fruit dessert with buttered breadcrumb layers",
                  "es": "Fruit dessert with buttered breadcrumb layers",
                  "de": "Fruit dessert with buttered breadcrumb layers",
                  "nl": "Fruit dessert with buttered breadcrumb layers"
        },
        {
                  "en": "Fruit pie",
                  "es": "Fruit pie",
                  "de": "Fruit pie",
                  "nl": "Fruit pie"
        },
        {
                  "en": "Fruit tart",
                  "es": "Fruit tart",
                  "de": "Fruit tart",
                  "nl": "Fruit tart"
        },
        {
                  "en": "Fruit cake",
                  "es": "Fruit cake",
                  "de": "Fruit cake",
                  "nl": "Fruit cake"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Brown Betty is a fruit dessert made with layers of spiced fruit and buttered breadcrumbs.",
                  "es": "Brown Betty is a fruit dessert made with layers of spiced fruit and buttered breadcrumbs.",
                  "de": "Brown Betty is a fruit dessert made with layers of spiced fruit and buttered breadcrumbs.",
                  "nl": "Brown Betty is a fruit dessert made with layers of spiced fruit and buttered breadcrumbs."
        }
      },
      {
        question: {
                  "en": "What is macerated fruit?",
                  "es": "What is macerated fruit?",
                  "de": "What is macerated fruit?",
                  "nl": "What is macerated fruit?"
        },
        options: [
        {
                  "en": "Grilled fruit",
                  "es": "Grilled fruit",
                  "de": "Grilled fruit",
                  "nl": "Grilled fruit"
        },
        {
                  "en": "Dried fruit",
                  "es": "Dried fruit",
                  "de": "Dried fruit",
                  "nl": "Dried fruit"
        },
        {
                  "en": "Fruit soaked in liquid and sugar",
                  "es": "Fruit soaked in liquid and sugar",
                  "de": "Fruit soaked in liquid and sugar",
                  "nl": "Fruit soaked in liquid and sugar"
        },
        {
                  "en": "Pureed fruit",
                  "es": "Pureed fruit",
                  "de": "Pureed fruit",
                  "nl": "Pureed fruit"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Macerated fruit is soaked in liquid (wine, liqueur, juice) with sugar, which draws out juices and creates a syrup.",
                  "es": "Macerated fruit is soaked in liquid (wine, liqueur, juice) with sugar, which draws out juices and creates a syrup.",
                  "de": "Macerated fruit is soaked in liquid (wine, liqueur, juice) with sugar, which draws out juices and creates a syrup.",
                  "nl": "Macerated fruit is soaked in liquid (wine, liqueur, juice) with sugar, which draws out juices and creates a syrup."
        }
      },
      {
        question: {
                  "en": "What is the best way to prevent fruit pies from becoming soggy?",
                  "es": "What is the best way to prevent fruit pies from becoming soggy?",
                  "de": "What is the best way to prevent fruit pies from becoming soggy?",
                  "nl": "What is the best way to prevent fruit pies from becoming soggy?"
        },
        options: [
        {
                  "en": "Bake at low temperature",
                  "es": "Bake at low temperature",
                  "de": "Bake at low temperature",
                  "nl": "Bake at low temperature"
        },
        {
                  "en": "Blind bake crust and use thickener",
                  "es": "Blind bake crust and use thickener",
                  "de": "Blind bake crust and use thickener",
                  "nl": "Blind bake crust and use thickener"
        },
        {
                  "en": "Add extra sugar",
                  "es": "Add extra sugar",
                  "de": "Add extra sugar",
                  "nl": "Add extra sugar"
        },
        {
                  "en": "Use less fruit",
                  "es": "Use less fruit",
                  "de": "Use less fruit",
                  "nl": "Use less fruit"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Blind baking the bottom crust and using proper thickener (cornstarch, tapioca) prevents soggy fruit pie bottoms.",
                  "es": "Blind baking the bottom crust and using proper thickener (cornstarch, tapioca) prevents soggy fruit pie bottoms.",
                  "de": "Blind baking the bottom crust and using proper thickener (cornstarch, tapioca) prevents soggy fruit pie bottoms.",
                  "nl": "Blind baking the bottom crust and using proper thickener (cornstarch, tapioca) prevents soggy fruit pie bottoms."
        }
      },
      {
        question: {
                  "en": "What is a summer pudding?",
                  "es": "What is a summer pudding?",
                  "de": "What is a summer pudding?",
                  "nl": "What is a summer pudding?"
        },
        options: [
        {
                  "en": "Fruit ice cream",
                  "es": "Fruit ice cream",
                  "de": "Fruit ice cream",
                  "nl": "Fruit ice cream"
        },
        {
                  "en": "Bread-lined mold filled with stewed berries",
                  "es": "Bread-lined mold filled with stewed berries",
                  "de": "Bread-lined mold filled with stewed berries",
                  "nl": "Bread-lined mold filled with stewed berries"
        },
        {
                  "en": "Fruit pie",
                  "es": "Fruit pie",
                  "de": "Fruit pie",
                  "nl": "Fruit pie"
        },
        {
                  "en": "Fruit tart",
                  "es": "Fruit tart",
                  "de": "Fruit tart",
                  "nl": "Fruit tart"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Summer pudding is a British dessert of bread slices lining a mold, filled with stewed summer berries, then weighted and chilled.",
                  "es": "Summer pudding is a British dessert of bread slices lining a mold, filled with stewed summer berries, then weighted and chilled.",
                  "de": "Summer pudding is a British dessert of bread slices lining a mold, filled with stewed summer berries, then weighted and chilled.",
                  "nl": "Summer pudding is a British dessert of bread slices lining a mold, filled with stewed summer berries, then weighted and chilled."
        }
      },
      {
        question: {
                  "en": "What is a fruit charlotte?",
                  "es": "What is a fruit charlotte?",
                  "de": "What is a fruit charlotte?",
                  "nl": "What is a fruit charlotte?"
        },
        options: [
        {
                  "en": "Fruit tart",
                  "es": "Fruit tart",
                  "de": "Fruit tart",
                  "nl": "Fruit tart"
        },
        {
                  "en": "Fruit cake",
                  "es": "Fruit cake",
                  "de": "Fruit cake",
                  "nl": "Fruit cake"
        },
        {
                  "en": "Dessert with bread/ladyfingers lining mold, filled with fruit",
                  "es": "Dessert with bread/ladyfingers lining mold, filled with fruit",
                  "de": "Dessert with bread/ladyfingers lining mold, filled with fruit",
                  "nl": "Dessert with bread/ladyfingers lining mold, filled with fruit"
        },
        {
                  "en": "Fruit pie",
                  "es": "Fruit pie",
                  "de": "Fruit pie",
                  "nl": "Fruit pie"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "A charlotte features bread slices or ladyfingers lining a mold, filled with fruit and custard or mousse.",
                  "es": "A charlotte features bread slices or ladyfingers lining a mold, filled with fruit and custard or mousse.",
                  "de": "A charlotte features bread slices or ladyfingers lining a mold, filled with fruit and custard or mousse.",
                  "nl": "A charlotte features bread slices or ladyfingers lining a mold, filled with fruit and custard or mousse."
        }
      },
      {
        question: {
                  "en": "What is ambrosia?",
                  "es": "What is ambrosia?",
                  "de": "What is ambrosia?",
                  "nl": "What is ambrosia?"
        },
        options: [
        {
                  "en": "Fruit salad with coconut and marshmallows",
                  "es": "Fruit salad with coconut and marshmallows",
                  "de": "Fruit salad with coconut and marshmallows",
                  "nl": "Fruit salad with coconut and marshmallows"
        },
        {
                  "en": "Fruit tart",
                  "es": "Fruit tart",
                  "de": "Fruit tart",
                  "nl": "Fruit tart"
        },
        {
                  "en": "Fruit cake",
                  "es": "Fruit cake",
                  "de": "Fruit cake",
                  "nl": "Fruit cake"
        },
        {
                  "en": "Fruit pie",
                  "es": "Fruit pie",
                  "de": "Fruit pie",
                  "nl": "Fruit pie"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Ambrosia is an American fruit salad typically made with oranges, pineapple, coconut, marshmallows, and sometimes whipped cream.",
                  "es": "Ambrosia is an American fruit salad typically made with oranges, pineapple, coconut, marshmallows, and sometimes whipped cream.",
                  "de": "Ambrosia is an American fruit salad typically made with oranges, pineapple, coconut, marshmallows, and sometimes whipped cream.",
                  "nl": "Ambrosia is an American fruit salad typically made with oranges, pineapple, coconut, marshmallows, and sometimes whipped cream."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  }
})();