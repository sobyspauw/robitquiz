// Vegetarian Dishes Quiz - Level 7: Advanced Vegetarian Techniques
(function() {
  "use strict";
  const level7 = {
    name: {
      en: "Vegetarian Level 7",
      es: "Vegetariano Nivel 7",
      de: "Vegetarisch Stufe 7",
      nl: "Vegetarisch Level 7"
    },
    questions: [
      {
        question: {
          en: "What is the purpose of 'sweating' vegetables in cooking?",
          es: "¿Cuál es el propósito de 'sudar' verduras en la cocina?",
          de: "Was ist der Zweck des 'Schwitzens' von Gemüse beim Kochen?",
          nl: "Wat is het doel van het 'zweten' van groenten bij het koken?"
        },
        options: [
          { en: "To draw out moisture and concentrate flavors gently", es: "Para extraer humedad y concentrar sabores suavemente", de: "Um Feuchtigkeit zu entziehen und Aromen sanft zu konzentrieren", nl: "Om vocht te onttrekken en smaken zachtjes te concentreren" },
          { en: "To make vegetables crispy", es: "Para hacer las verduras crujientes", de: "Um Gemüse knusprig zu machen", nl: "Om groenten knapperig te maken" },
          { en: "To add salt to vegetables", es: "Para añadir sal a las verduras", de: "Um Gemüse Salz hinzuzufügen", nl: "Om zout aan groenten toe te voegen" },
          { en: "To cool down vegetables", es: "Para enfriar las verduras", de: "Um Gemüse abzukühlen", nl: "Om groenten af te koelen" }
        ],
        correct: 0,
        explanation: {
          en: "Sweating vegetables involves cooking them gently over low heat, often covered, to draw out moisture and concentrate flavors without browning. This technique builds flavor foundations in dishes.",
          es: "Sudar verduras implica cocinarlas suavemente a fuego bajo, a menudo cubiertas, para extraer humedad y concentrar sabores sin dorar. Esta técnica construye bases de sabor en los platos.",
          de: "Das Schwitzen von Gemüse beinhaltet sanftes Kochen bei niedriger Hitze, oft abgedeckt, um Feuchtigkeit zu entziehen und Aromen zu konzentrieren ohne zu bräunen. Diese Technik baut Geschmacksfundamente in Gerichten auf.",
          nl: "Groenten zweten houdt in dat ze zachtjes worden gekookt op lage hitte, vaak afgedekt, om vocht te onttrekken en smaken te concentreren zonder te bruinen. Deze techniek bouwt smaakreserves op in gerechten."
        }
      },
      {
        question: {
          en: "What is the 'maillard reaction' and why is it important in vegetarian cooking?",
          es: "¿Qué es la 'reacción de Maillard' y por qué es importante en la cocina vegetariana?",
          de: "Was ist die 'Maillard-Reaktion' und warum ist sie wichtig beim vegetarischen Kochen?",
          nl: "Wat is de 'Maillard reactie' en waarom is het belangrijk bij vegetarisch koken?"
        },
        options: [
          { en: "Chemical reaction that creates browning and complex flavors when proteins and sugars are heated", es: "Reacción química que crea dorado y sabores complejos cuando proteínas y azúcares se calientan", de: "Chemische Reaktion, die Bräunung und komplexe Aromen schafft, wenn Proteine und Zucker erhitzt werden", nl: "Chemische reactie die bruining en complexe smaken creëert wanneer eiwitten en suikers verhit worden" },
          { en: "A way to remove bitterness", es: "Una forma de eliminar amargura", de: "Ein Weg, Bitterkeit zu entfernen", nl: "Een manier om bitterheid te verwijderen" },
          { en: "A fermentation process", es: "Un proceso de fermentación", de: "Ein Fermentationsprozess", nl: "Een fermentatieproces" },
          { en: "A cooling technique", es: "Una técnica de enfriamiento", de: "Eine Abkühltechnik", nl: "Een koeltechniek" }
        ],
        correct: 0,
        explanation: {
          en: "The Maillard reaction occurs when amino acids and reducing sugars react under heat, creating hundreds of flavor compounds and appealing browning. It's crucial for developing savory, umami-rich flavors in vegetables.",
          es: "La reacción de Maillard ocurre cuando aminoácidos y azúcares reductores reaccionan bajo calor, creando cientos de compuestos de sabor y dorado atractivo. Es crucial para desarrollar sabores salados ricos en umami en verduras.",
          de: "Die Maillard-Reaktion tritt auf, wenn Aminosäuren und reduzierende Zucker unter Hitze reagieren und Hunderte von Geschmacksverbindungen und ansprechende Bräunung schaffen. Sie ist entscheidend für die Entwicklung herzhafter, umami-reicher Aromen in Gemüse.",
          nl: "De Maillard reactie treedt op wanneer aminozuren en reducerende suikers reageren onder hitte, honderden smaakstoffen en aantrekkelijke bruining creërend. Het is cruciaal voor het ontwikkelen van hartige, umami-rijke smaken in groenten."
        }
      },
      {
        question: {
          en: "What technique involves cooking vegetables in their own juices with minimal added liquid?",
          es: "¿Qué técnica implica cocinar verduras en sus propios jugos con mínimo líquido añadido?",
          de: "Welche Technik beinhaltet das Kochen von Gemüse in ihren eigenen Säften mit minimal zugesetzter Flüssigkeit?",
          nl: "Welke techniek houdt in dat groenten worden gekookt in hun eigen sappen met minimaal toegevoegde vloeistof?"
        },
        options: [
          { en: "Braising", es: "Brasear", de: "Schmoren", nl: "Sudderen" },
          { en: "Deep frying", es: "Freír en aceite abundante", de: "Frittieren", nl: "Frituren" },
          { en: "Boiling", es: "Hervir", de: "Kochen", nl: "Koken" },
          { en: "Grilling", es: "Asar a la parrilla", de: "Grillen", nl: "Grillen" }
        ],
        correct: 0,
        explanation: {
          en: "Braising involves cooking vegetables slowly in a small amount of liquid, often in a covered pot, allowing them to cook in their own released juices while developing concentrated flavors.",
          es: "Brasear implica cocinar verduras lentamente en una pequeña cantidad de líquido, a menudo en una olla cubierta, permitiéndoles cocinar en sus propios jugos liberados mientras desarrollan sabores concentrados.",
          de: "Schmoren beinhaltet das langsame Kochen von Gemüse in einer kleinen Menge Flüssigkeit, oft in einem abgedeckten Topf, wodurch es in seinen eigenen freigesetzten Säften kocht und konzentrierte Aromen entwickelt.",
          nl: "Sudderen houdt in dat groenten langzaam worden gekookt in een kleine hoeveelheid vloeistof, vaak in een bedekte pot, waardoor ze koken in hun eigen vrijgekomen sappen terwijl ze geconcentreerde smaken ontwikkelen."
        }
      },
      {
        question: {
          en: "What is 'confit' technique and how can it be applied to vegetables?",
          es: "¿Qué es la técnica 'confit' y cómo se puede aplicar a las verduras?",
          de: "Was ist die 'Confit'-Technik und wie kann sie auf Gemüse angewendet werden?",
          nl: "Wat is de 'confit' techniek en hoe kan het worden toegepast op groenten?"
        },
        options: [
          { en: "Slow cooking vegetables in fat at low temperature for tender texture", es: "Cocinar verduras lentamente en grasa a baja temperatura para textura tierna", de: "Langsames Kochen von Gemüse in Fett bei niedriger Temperatur für zarte Textur", nl: "Langzaam koken van groenten in vet op lage temperatuur voor zachte textuur" },
          { en: "Quick grilling at high heat", es: "Asar rápido a alta temperatura", de: "Schnelles Grillen bei hoher Hitze", nl: "Snel grillen op hoge temperatuur" },
          { en: "Freezing vegetables", es: "Congelar verduras", de: "Gemüse einfrieren", nl: "Groenten invriezen" },
          { en: "Fermenting in salt", es: "Fermentar en sal", de: "In Salz fermentieren", nl: "Fermenteren in zout" }
        ],
        correct: 0,
        explanation: {
          en: "Vegetable confit involves slowly cooking vegetables like garlic, tomatoes, or leeks in oil at low temperature (200-250°F) until fork-tender, creating intensely flavored, preserved vegetables.",
          es: "El confit de verduras implica cocinar lentamente verduras como ajo, tomates o puerros en aceite a baja temperatura (93-121°C) hasta que estén tiernas al tenedor, creando verduras intensamente sabrosas y preservadas.",
          de: "Gemüse-Confit beinhaltet das langsame Kochen von Gemüse wie Knoblauch, Tomaten oder Lauch in Öl bei niedriger Temperatur (93-121°C) bis zur Gabelzartheit, wodurch intensiv aromatisches, konserviertes Gemüse entsteht.",
          nl: "Groenten confit houdt in dat groenten zoals knoflook, tomaten of prei langzaam worden gekookt in olie op lage temperatuur (93-121°C) tot ze vorkzacht zijn, waardoor intens smaakvolle, geconserveerde groenten ontstaan."
        }
      },
      {
        question: {
          en: "What is the purpose of 'deglazing' a pan in vegetarian cooking?",
          es: "¿Cuál es el propósito de 'deglasear' una sartén en la cocina vegetariana?",
          de: "Was ist der Zweck des 'Ablöschens' einer Pfanne beim vegetarischen Kochen?",
          nl: "Wat is het doel van het 'deglazeren' van een pan bij vegetarisch koken?"
        },
        options: [
          { en: "To capture and incorporate browned bits (fond) into sauces for flavor", es: "Para capturar e incorporar trocitos dorados (fond) en salsas para sabor", de: "Um gebräunte Stückchen (Fond) zu erfassen und für Geschmack in Saucen einzuarbeiten", nl: "Om gebruinde stukjes (fond) op te vangen en in sauzen te verwerken voor smaak" },
          { en: "To clean the pan", es: "Para limpiar la sartén", de: "Um die Pfanne zu reinigen", nl: "Om de pan schoon te maken" },
          { en: "To cool down the pan", es: "Para enfriar la sartén", de: "Um die Pfanne abzukühlen", nl: "Om de pan af te koelen" },
          { en: "To add oil to the pan", es: "Para añadir aceite a la sartén", de: "Um Öl zur Pfanne hinzuzufügen", nl: "Om olie aan de pan toe te voegen" }
        ],
        correct: 0,
        explanation: {
          en: "Deglazing involves adding liquid (wine, broth, water) to a hot pan to dissolve the fond (browned bits stuck to the bottom), incorporating these concentrated flavors into sauces and gravies.",
          es: "Deglasear implica añadir líquido (vino, caldo, agua) a una sartén caliente para disolver el fond (trocitos dorados pegados al fondo), incorporando estos sabores concentrados en salsas y gravies.",
          de: "Ablöschen beinhaltet das Hinzufügen von Flüssigkeit (Wein, Brühe, Wasser) zu einer heißen Pfanne, um den Fond (am Boden haftende gebräunte Stückchen) aufzulösen und diese konzentrierten Aromen in Saucen und Bratensäfte einzuarbeiten.",
          nl: "Deglazeren houdt in dat vloeistof (wijn, bouillon, water) wordt toegevoegd aan een hete pan om de fond (gebruinde stukjes die aan de bodem kleven) op te lossen, deze geconcentreerde smaken verwerkend in sauzen en jus."
        }
      },
      {
        question: {
          en: "What is 'mise en place' and why is it crucial for advanced vegetarian cooking?",
          es: "¿Qué es 'mise en place' y por qué es crucial para la cocina vegetariana avanzada?",
          de: "Was ist 'Mise en Place' und warum ist es entscheidend für fortgeschrittenes vegetarisches Kochen?",
          nl: "Wat is 'mise en place' en waarom is het cruciaal voor gevorderd vegetarisch koken?"
        },
        options: [
          { en: "Preparing and organizing all ingredients before cooking begins", es: "Preparar y organizar todos los ingredientes antes de comenzar a cocinar", de: "Alle Zutaten vorbereiten und organisieren, bevor das Kochen beginnt", nl: "Alle ingrediënten voorbereiden en organiseren voordat het koken begint" },
          { en: "A French cooking technique", es: "Una técnica de cocina francesa", de: "Eine französische Kochtechnik", nl: "Een Franse kooktechniek" },
          { en: "A type of sauce", es: "Un tipo de salsa", de: "Eine Art Sauce", nl: "Een soort saus" },
          { en: "A knife cutting method", es: "Un método de corte con cuchillo", de: "Eine Messerschneidmethode", nl: "Een messnijmethode" }
        ],
        correct: 0,
        explanation: {
          en: "Mise en place means 'everything in its place' - having all ingredients prepped, measured, and organized before cooking. This is essential for complex vegetarian dishes with multiple components and timing requirements.",
          es: "Mise en place significa 'cada cosa en su lugar' - tener todos los ingredientes preparados, medidos y organizados antes de cocinar. Esto es esencial para platos vegetarianos complejos con múltiples componentes y requisitos de tiempo.",
          de: "Mise en Place bedeutet 'alles an seinem Platz' - alle Zutaten vorbereitet, abgemessen und organisiert, bevor gekocht wird. Dies ist essentiell für komplexe vegetarische Gerichte mit mehreren Komponenten und Timing-Anforderungen.",
          nl: "Mise en place betekent 'alles op zijn plaats' - alle ingrediënten bereid, afgemeten en georganiseerd voordat het koken begint. Dit is essentieel voor complexe vegetarische gerechten met meerdere componenten en timing vereisten."
        }
      },
      {
        question: {
          en: "What is the technique called when you cook vegetables covered in parchment paper?",
          es: "¿Cómo se llama la técnica cuando cocinas verduras cubiertas en papel pergamino?",
          de: "Wie heißt die Technik, wenn man Gemüse in Pergamentpapier eingehüllt kocht?",
          nl: "Hoe heet de techniek wanneer je groenten kookt bedekt in bakpapier?"
        },
        options: [
          { en: "En papillote", es: "En papillote", de: "En Papillote", nl: "En papillote" },
          { en: "Sous vide", es: "Sous vide", de: "Sous Vide", nl: "Sous vide" },
          { en: "Flambé", es: "Flambé", de: "Flambé", nl: "Flambé" },
          { en: "Julienne", es: "Juliana", de: "Julienne", nl: "Julienne" }
        ],
        correct: 0,
        explanation: {
          en: "En papillote is a method where food is wrapped in parchment paper and baked, creating a steam pocket that gently cooks vegetables while retaining moisture and concentrating flavors.",
          es: "En papillote es un método donde la comida se envuelve en papel pergamino y se hornea, creando un bolsillo de vapor que cocina suavemente las verduras mientras retiene humedad y concentra sabores.",
          de: "En Papillote ist eine Methode, bei der Essen in Pergamentpapier eingewickelt und gebacken wird, wodurch eine Dampftasche entsteht, die Gemüse sanft kocht, während Feuchtigkeit erhalten und Aromen konzentriert werden.",
          nl: "En papillote is een methode waarbij voedsel wordt ingepakt in bakpapier en gebakken, wat een stoomzakje creëert dat groenten zachtjes kookt terwijl vocht wordt behouden en smaken worden geconcentreerd."
        }
      },
      {
        question: {
          en: "What is the difference between a brunoise and a julienne cut?",
          es: "¿Cuál es la diferencia entre un corte brunoise y un corte juliana?",
          de: "Was ist der Unterschied zwischen einem Brunoise- und einem Julienne-Schnitt?",
          nl: "Wat is het verschil tussen een brunoise en een julienne snijmethode?"
        },
        options: [
          { en: "Brunoise is fine dice (1/8 inch), julienne is thin strips (1/8 x 1/8 x 2 inches)", es: "Brunoise es dado fino (3mm), juliana son tiras delgadas (3mm x 3mm x 5cm)", de: "Brunoise ist feiner Würfel (3mm), Julienne sind dünne Streifen (3mm x 3mm x 5cm)", nl: "Brunoise is fijne dobbelsteentjes (3mm), julienne zijn dunne reepjes (3mm x 3mm x 5cm)" },
          { en: "They are exactly the same cut", es: "Son exactamente el mismo corte", de: "Sie sind genau derselbe Schnitt", nl: "Het zijn precies dezelfde snijmethoden" },
          { en: "Brunoise is for meat only", es: "Brunoise es solo para carne", de: "Brunoise ist nur für Fleisch", nl: "Brunoise is alleen voor vlees" },
          { en: "Julienne is larger pieces", es: "Juliana son piezas más grandes", de: "Julienne sind größere Stücke", nl: "Julienne zijn grotere stukken" }
        ],
        correct: 0,
        explanation: {
          en: "Brunoise is a precise knife cut creating tiny, uniform cubes about 1/8 inch. Julienne creates thin, uniform strips. Both cuts ensure even cooking and professional presentation.",
          es: "Brunoise es un corte de cuchillo preciso que crea cubos diminutos y uniformes de aproximadamente 3mm. Juliana crea tiras delgadas y uniformes. Ambos cortes aseguran cocción pareja y presentación profesional.",
          de: "Brunoise ist ein präziser Messerschnitt, der winzige, gleichmäßige Würfel von etwa 3mm schafft. Julienne schafft dünne, gleichmäßige Streifen. Beide Schnitte gewährleisten gleichmäßiges Garen und professionelle Präsentation.",
          nl: "Brunoise is een precieze messnede die kleine, uniforme kubusjes van ongeveer 3mm creëert. Julienne creëert dunne, uniforme reepjes. Beide snijmethoden zorgen voor gelijkmatig koken en professionele presentatie."
        }
      },
      {
        question: {
          en: "What technique involves repeatedly folding and pressing dough to create layers?",
          es: "¿Qué técnica implica doblar y prensar repetidamente la masa para crear capas?",
          de: "Welche Technik beinhaltet wiederholtes Falten und Drücken von Teig, um Schichten zu schaffen?",
          nl: "Welke techniek houdt herhaaldelijk vouwen en drukken van deeg in om lagen te creëren?"
        },
        options: [
          { en: "Lamination", es: "Laminación", de: "Laminierung", nl: "Laminering" },
          { en: "Kneading", es: "Amasado", de: "Kneten", nl: "Kneden" },
          { en: "Proofing", es: "Fermentación", de: "Gehen lassen", nl: "Rijzen" },
          { en: "Scoring", es: "Marcado", de: "Einschneiden", nl: "Inkerven" }
        ],
        correct: 0,
        explanation: {
          en: "Lamination involves folding butter or fat into dough repeatedly to create distinct layers, essential for making puff pastry, croissants, and other flaky, layered vegetarian pastries.",
          es: "La laminación implica doblar mantequilla o grasa en la masa repetidamente para crear capas distintas, esencial para hacer hojaldre, croissants y otras masas hojaldradas vegetarianas.",
          de: "Laminierung beinhaltet das wiederholte Einfalten von Butter oder Fett in Teig, um deutliche Schichten zu schaffen, essentiell für die Herstellung von Blätterteig, Croissants und anderen blättrigen, geschichteten vegetarischen Backwaren.",
          nl: "Laminering houdt het herhaaldelijk invouwen van boter of vet in deeg in om verschillende lagen te creëren, essentieel voor het maken van bladerdeeg, croissants en ander bladerig, gelaagd vegetarisch gebak."
        }
      },
      {
        question: {
          en: "What is 'tempering' in the context of cooking with eggs and dairy?",
          es: "¿Qué es 'temperar' en el contexto de cocinar con huevos y lácteos?",
          de: "Was ist 'Temperieren' im Kontext des Kochens mit Eiern und Milchprodukten?",
          nl: "Wat is 'tempereren' in de context van koken met eieren en zuivel?"
        },
        options: [
          { en: "Gradually warming eggs/dairy to prevent curdling when adding to hot mixtures", es: "Calentar gradualmente huevos/lácteos para prevenir cuajado al añadir a mezclas calientes", de: "Allmähliches Erwärmen von Eiern/Milchprodukten, um Gerinnung beim Hinzufügen zu heißen Mischungen zu verhindern", nl: "Geleidelijk opwarmen van eieren/zuivel om stremming te voorkomen bij toevoegen aan hete mengsels" },
          { en: "Cooling ingredients quickly", es: "Enfriar ingredientes rápidamente", de: "Zutaten schnell abkühlen", nl: "Ingrediënten snel afkoelen" },
          { en: "Adding spices", es: "Añadir especias", de: "Gewürze hinzufügen", nl: "Kruiden toevoegen" },
          { en: "Whipping to peaks", es: "Batir hasta formar picos", de: "Zu Spitzen schlagen", nl: "Opkloppen tot pieken" }
        ],
        correct: 0,
        explanation: {
          en: "Tempering prevents shock by gradually warming cold ingredients before adding them to hot mixtures. This technique prevents curdling in custards, sauces, and cream soups.",
          es: "Temperar previene el shock calentando gradualmente ingredientes fríos antes de añadirlos a mezclas calientes. Esta técnica previene cuajado en cremas, salsas y sopas cremosas.",
          de: "Temperieren verhindert Schock durch allmähliches Erwärmen kalter Zutaten, bevor sie zu heißen Mischungen hinzugefügt werden. Diese Technik verhindert Gerinnung in Cremes, Saucen und Sahnesuppen.",
          nl: "Tempereren voorkomt schok door koude ingrediënten geleidelijk op te warmen voordat ze aan hete mengsels worden toegevoegd. Deze techniek voorkomt stremming in custards, sauzen en roomsoepen."
        }
      },
      {
        question: {
          en: "What is the 'mother sauce' concept in classical cooking?",
          es: "¿Qué es el concepto de 'salsa madre' en la cocina clásica?",
          de: "Was ist das 'Grundsaucen'-Konzept in der klassischen Küche?",
          nl: "Wat is het 'moedersaus' concept in de klassieke kookkunst?"
        },
        options: [
          { en: "Five basic sauces that serve as foundations for hundreds of derivative sauces", es: "Cinco salsas básicas que sirven como fundaciones para cientos de salsas derivadas", de: "Fünf Grundsaucen, die als Fundamente für Hunderte von abgeleiteten Saucen dienen", nl: "Vijf basissauzen die dienen als fundamenten voor honderden afgeleide sauzen" },
          { en: "Sauces made by mothers", es: "Salsas hechas por madres", de: "Von Müttern gemachte Saucen", nl: "Sauzen gemaakt door moeders" },
          { en: "The first sauce ever invented", es: "La primera salsa jamás inventada", de: "Die erste jemals erfundene Sauce", nl: "De eerste saus die ooit werd uitgevonden" },
          { en: "Sauces from maternal family recipes", es: "Salsas de recetas familiares maternas", de: "Saucen aus mütterlichen Familienrezepten", nl: "Sauzen uit moederlijke familie recepten" }
        ],
        correct: 0,
        explanation: {
          en: "The five mother sauces are béchamel, velouté, hollandaise, tomato, and brown sauce (espagnole). Vegetarians can use the first four, with variations creating hundreds of derivative sauces.",
          es: "Las cinco salsas madre son bechamel, velouté, holandesa, tomate y salsa parda (española). Los vegetarianos pueden usar las primeras cuatro, con variaciones creando cientos de salsas derivadas.",
          de: "Die fünf Grundsaucen sind Béchamel, Velouté, Hollandaise, Tomaten- und braune Sauce (Espagnole). Vegetarier können die ersten vier verwenden, mit Variationen, die Hunderte von abgeleiteten Saucen schaffen.",
          nl: "De vijf moedersauzen zijn béchamel, velouté, hollandaise, tomaat, en bruine saus (espagnole). Vegetariërs kunnen de eerste vier gebruiken, met variaties die honderden afgeleide sauzen creëren."
        }
      },
      {
        question: {
          en: "What is 'chiffonade' technique used for?",
          es: "¿Para qué se usa la técnica 'chiffonade'?",
          de: "Wofür wird die 'Chiffonade'-Technik verwendet?",
          nl: "Waarvoor wordt de 'chiffonade' techniek gebruikt?"
        },
        options: [
          { en: "Cutting leafy herbs and vegetables into thin ribbons", es: "Cortar hierbas y verduras de hoja en cintas delgadas", de: "Blattgemüse und Kräuter in dünne Bänder schneiden", nl: "Bladgroenten en kruiden snijden in dunne linten" },
          { en: "Dicing onions", es: "Cortar cebollas en dados", de: "Zwiebeln würfeln", nl: "Uien in blokjes snijden" },
          { en: "Peeling vegetables", es: "Pelar verduras", de: "Gemüse schälen", nl: "Groenten schillen" },
          { en: "Chopping nuts", es: "Picar nueces", de: "Nüsse hacken", nl: "Noten hakken" }
        ],
        correct: 0,
        explanation: {
          en: "Chiffonade involves stacking leafy herbs or vegetables, rolling them tightly, then slicing into thin ribbons. It's commonly used for basil, spinach, lettuce, and other greens as garnish.",
          es: "Chiffonade implica apilar hierbas o verduras de hoja, enrollarlas firmemente, luego cortarlas en cintas delgadas. Se usa comúnmente para albahaca, espinacas, lechuga y otras verduras como guarnición.",
          de: "Chiffonade beinhaltet das Stapeln von Blattgemüse oder Kräutern, festes Aufrollen und dann Schneiden in dünne Bänder. Es wird häufig für Basilikum, Spinat, Salat und anderes Grünzeug als Garnitur verwendet.",
          nl: "Chiffonade houdt het stapelen van bladkruiden of groenten in, ze strak oprollen, dan snijden in dunne linten. Het wordt vaak gebruikt voor basilicum, spinazie, sla en ander blad als garnering."
        }
      },
      {
        question: {
          en: "What is the purpose of using a 'bain-marie' or double boiler?",
          es: "¿Cuál es el propósito de usar un 'bain-marie' o baño maría?",
          de: "Was ist der Zweck der Verwendung eines 'Bain-Marie' oder Wasserbads?",
          nl: "Wat is het doel van het gebruik van een 'bain-marie' of au-bain-marie?"
        },
        options: [
          { en: "To provide gentle, indirect heat for delicate cooking processes", es: "Para proporcionar calor suave e indirecto para procesos de cocción delicados", de: "Um sanfte, indirekte Hitze für empfindliche Kochprozesse zu bieten", nl: "Om zachte, indirecte hitte te bieden voor delicate kookprocessen" },
          { en: "To boil water faster", es: "Para hervir agua más rápido", de: "Um Wasser schneller zu kochen", nl: "Om water sneller te koken" },
          { en: "To cool food quickly", es: "Para enfriar comida rápidamente", de: "Um Essen schnell abzukühlen", nl: "Om voedsel snel af te koelen" },
          { en: "To add flavor to food", es: "Para añadir sabor a la comida", de: "Um Essen Geschmack hinzuzufügen", nl: "Om smaak aan voedsel toe te voegen" }
        ],
        correct: 0,
        explanation: {
          en: "A bain-marie uses steam and gentle heat to cook delicate items like custards, chocolate, and sauces without direct heat, preventing overcooking, curdling, or scorching.",
          es: "Un bain-marie usa vapor y calor suave para cocinar elementos delicados como cremas, chocolate y salsas sin calor directo, previniendo sobrecocción, cuajado o quemado.",
          de: "Ein Bain-Marie verwendet Dampf und sanfte Hitze, um empfindliche Artikel wie Cremes, Schokolade und Saucen ohne direkte Hitze zu kochen und Überkochen, Gerinnung oder Anbrennen zu verhindern.",
          nl: "Een bain-marie gebruikt stoom en zachte hitte om delicate items zoals custards, chocolade en sauzen te koken zonder directe hitte, waardoor overkoken, stremmen of aanbranden wordt voorkomen."
        }
      },
      {
        question: {
          en: "What is 'emulsification' and why is it important in sauce making?",
          es: "¿Qué es 'emulsificación' y por qué es importante en la preparación de salsas?",
          de: "Was ist 'Emulgierung' und warum ist sie wichtig bei der Saucenherstellung?",
          nl: "Wat is 'emulsificatie' en waarom is het belangrijk bij het maken van sauzen?"
        },
        options: [
          { en: "Combining oil and water-based ingredients into a stable mixture", es: "Combinar ingredientes a base de aceite y agua en una mezcla estable", de: "Öl- und wasserbasierte Zutaten zu einer stabilen Mischung kombinieren", nl: "Olie en op water gebaseerde ingrediënten combineren in een stabiel mengsel" },
          { en: "Heating ingredients to high temperatures", es: "Calentar ingredientes a altas temperaturas", de: "Zutaten auf hohe Temperaturen erhitzen", nl: "Ingrediënten verhitten tot hoge temperaturen" },
          { en: "Adding salt to preserve food", es: "Añadir sal para preservar comida", de: "Salz hinzufügen, um Essen zu konservieren", nl: "Zout toevoegen om voedsel te bewaren" },
          { en: "Mixing dry ingredients only", es: "Mezclar solo ingredientes secos", de: "Nur trockene Zutaten mischen", nl: "Alleen droge ingrediënten mengen" }
        ],
        correct: 0,
        explanation: {
          en: "Emulsification creates stable mixtures of oil and water using emulsifiers like egg yolks or mustard. This is essential for mayonnaise, hollandaise, vinaigrettes, and many other sauces.",
          es: "La emulsificación crea mezclas estables de aceite y agua usando emulsificantes como yemas de huevo o mostaza. Esto es esencial para mayonesa, holandesa, vinagretas y muchas otras salsas.",
          de: "Emulgierung schafft stabile Mischungen aus Öl und Wasser mit Hilfe von Emulgatoren wie Eigelb oder Senf. Dies ist essentiell für Mayonnaise, Hollandaise, Vinaigrettes und viele andere Saucen.",
          nl: "Emulsificatie creëert stabiele mengsels van olie en water met behulp van emulgatoren zoals eidooiers of mosterd. Dit is essentieel voor mayonaise, hollandaise, vinaigrettes en vele andere sauzen."
        }
      },
      {
        question: {
          en: "What cooking technique involves submerging vegetables in boiling water briefly, then ice water?",
          es: "¿Qué técnica de cocina implica sumergir verduras en agua hirviendo brevemente, luego agua helada?",
          de: "Welche Kochtechnik beinhaltet das kurze Eintauchen von Gemüse in kochendes Wasser, dann Eiswasser?",
          nl: "Welke kooktechniek houdt het kort onderdompelen van groenten in kokend water in, daarna ijswater?"
        },
        options: [
          { en: "Blanching and shocking", es: "Blanquear y chocar", de: "Blanchieren und Abschrecken", nl: "Blancheren en schokken" },
          { en: "Poaching", es: "Escalfar", de: "Pochieren", nl: "Pocheren" },
          { en: "Braising", es: "Brasear", de: "Schmoren", nl: "Sudderen" },
          { en: "Sautéing", es: "Saltear", de: "Anbraten", nl: "Sauteren" }
        ],
        correct: 0,
        explanation: {
          en: "Blanching and shocking (ice bath) stops the cooking process immediately, preserving color, texture, and nutrients. This technique is used for par-cooking vegetables or preparing them for freezing.",
          es: "Blanquear y chocar (baño de hielo) detiene el proceso de cocción inmediatamente, preservando color, textura y nutrientes. Esta técnica se usa para precocinar verduras o prepararlas para congelar.",
          de: "Blanchieren und Abschrecken (Eisbad) stoppt den Kochvorgang sofort und bewahrt Farbe, Textur und Nährstoffe. Diese Technik wird zum Vorkochen von Gemüse oder zur Vorbereitung zum Einfrieren verwendet.",
          nl: "Blancheren en schokken (ijsbad) stopt het kookproces onmiddellijk, behoudt kleur, textuur en voedingsstoffen. Deze techniek wordt gebruikt voor het voorbereiden van groenten of het voorbereiden voor invriezen."
        }
      },
      {
        question: {
          en: "What is 'reduction' in sauce making?",
          es: "¿Qué es 'reducción' en la preparación de salsas?",
          de: "Was ist 'Reduktion' bei der Saucenherstellung?",
          nl: "Wat is 'reductie' bij het maken van sauzen?"
        },
        options: [
          { en: "Concentrating flavors by evaporating liquid through simmering", es: "Concentrar sabores evaporando líquido a través de hervor suave", de: "Aromen durch Verdampfung von Flüssigkeit beim Köcheln konzentrieren", nl: "Smaken concentreren door vloeistof te verdampen door zacht koken" },
          { en: "Adding more liquid to thin the sauce", es: "Añadir más líquido para adelgazar la salsa", de: "Mehr Flüssigkeit hinzufügen, um die Sauce zu verdünnen", nl: "Meer vloeistof toevoegen om de saus te verdunnen" },
          { en: "Cooling the sauce down", es: "Enfriar la salsa", de: "Die Sauce abkühlen", nl: "De saus afkoelen" },
          { en: "Straining out solids", es: "Colar sólidos", de: "Feststoffe abseihen", nl: "Vaste stoffen wegzeven" }
        ],
        correct: 0,
        explanation: {
          en: "Reduction involves simmering liquids to evaporate water content, concentrating flavors and creating thicker, more intense sauces. This technique is fundamental in sauce making.",
          es: "La reducción implica hervir a fuego lento líquidos para evaporar contenido de agua, concentrando sabores y creando salsas más espesas e intensas. Esta técnica es fundamental en la preparación de salsas.",
          de: "Reduktion beinhaltet das Köcheln von Flüssigkeiten, um Wassergehalt zu verdampfen, Aromen zu konzentrieren und dickere, intensivere Saucen zu schaffen. Diese Technik ist grundlegend bei der Saucenherstellung.",
          nl: "Reductie houdt het zacht koken van vloeistoffen in om waterinhoud te verdampen, smaken te concentreren en dikkere, intensere sauzen te creëren. Deze techniek is fundamenteel bij het maken van sauzen."
        }
      },
      {
        question: {
          en: "What is the 'reverse sear' technique and how can it apply to vegetables?",
          es: "¿Qué es la técnica de 'sellado inverso' y cómo puede aplicarse a las verduras?",
          de: "Was ist die 'Reverse Sear'-Technik und wie kann sie auf Gemüse angewendet werden?",
          nl: "Wat is de 'reverse sear' techniek en hoe kan het toegepast worden op groenten?"
        },
        options: [
          { en: "Slow cooking first at low temperature, then finishing with high heat for color", es: "Cocinar lento primero a baja temperatura, luego terminar con alta temperatura para color", de: "Zuerst langsam bei niedriger Temperatur kochen, dann mit hoher Hitze für Farbe abschließen", nl: "Eerst langzaam koken op lage temperatuur, dan afwerken met hoge hitte voor kleur" },
          { en: "Always cooking at high heat", es: "Siempre cocinar a alta temperatura", de: "Immer bei hoher Hitze kochen", nl: "Altijd koken op hoge hitte" },
          { en: "Cooking only in cold temperatures", es: "Cocinar solo en temperaturas frías", de: "Nur bei kalten Temperaturen kochen", nl: "Alleen koken bij koude temperaturen" },
          { en: "Searing first, then slow cooking", es: "Sellar primero, luego cocción lenta", de: "Zuerst anbraten, dann langsam kochen", nl: "Eerst aanbraden, dan langzaam koken" }
        ],
        correct: 0,
        explanation: {
          en: "Reverse sear involves cooking vegetables slowly at low temperature until nearly done, then finishing with high heat to develop color and texture. This ensures even cooking throughout.",
          es: "El sellado inverso implica cocinar verduras lentamente a baja temperatura hasta casi terminar, luego acabar con alta temperatura para desarrollar color y textura. Esto asegura cocción pareja por completo.",
          de: "Reverse Sear beinhaltet langsames Kochen von Gemüse bei niedriger Temperatur, bis es fast fertig ist, dann Abschluss mit hoher Hitze, um Farbe und Textur zu entwickeln. Dies gewährleistet gleichmäßiges Garen.",
          nl: "Reverse sear houdt langzaam koken van groenten op lage temperatuur in tot bijna gaar, dan afwerken met hoge hitte om kleur en textuur te ontwikkelen. Dit zorgt voor gelijkmatig koken door en door."
        }
      },
      {
        question: {
          en: "What is the importance of 'resting' certain cooked vegetable dishes?",
          es: "¿Cuál es la importancia de 'reposar' ciertos platos de verduras cocidas?",
          de: "Was ist die Wichtigkeit des 'Ruhens' bestimmter gekochter Gemüsegerichte?",
          nl: "Wat is het belang van het 'laten rusten' van bepaalde gekookte groentegerechten?"
        },
        options: [
          { en: "Allows flavors to meld and textures to settle for optimal taste", es: "Permite que los sabores se mezclen y las texturas se asienten para sabor óptimo", de: "Ermöglicht es Aromen zu verschmelzen und Texturen sich zu setzen für optimalen Geschmack", nl: "Laat smaken versmelten en texturen bezinken voor optimale smaak" },
          { en: "Cools food to room temperature", es: "Enfría la comida a temperatura ambiente", de: "Kühlt Essen auf Raumtemperatur ab", nl: "Koelt voedsel af tot kamertemperatuur" },
          { en: "Adds more seasoning", es: "Añade más condimento", de: "Fügt mehr Gewürze hinzu", nl: "Voegt meer kruiden toe" },
          { en: "Makes food last longer", es: "Hace que la comida dure más", de: "Macht Essen haltbarer", nl: "Maakt voedsel langer houdbaar" }
        ],
        correct: 0,
        explanation: {
          en: "Resting allows complex dishes like layered casseroles, gratins, and braised vegetables to settle, letting flavors integrate and achieve the proper texture and temperature for serving.",
          es: "Reposar permite que platos complejos como cazuelas en capas, gratinados y verduras braseadas se asienten, dejando que los sabores se integren y logren la textura y temperatura adecuadas para servir.",
          de: "Ruhen ermöglicht es komplexen Gerichten wie geschichteten Aufläufen, Gratins und geschmorten Gemüse sich zu setzen, sodass Aromen integrieren und die richtige Textur und Temperatur zum Servieren erreicht werden.",
          nl: "Rusten stelt complexe gerechten zoals gelaagde ovenschotels, gratins en gesuderde groenten in staat te bezinken, smaken te integreren en de juiste textuur en temperatuur voor serveren te bereiken."
        }
      },
      {
        question: {
          en: "What advanced technique can create 'caviar' from vegetable juices?",
          es: "¿Qué técnica avanzada puede crear 'caviar' de jugos de verduras?",
          de: "Welche fortgeschrittene Technik kann 'Kaviar' aus Gemüsesäften schaffen?",
          nl: "Welke geavanceerde techniek kan 'kaviaar' creëren uit groentesappen?"
        },
        options: [
          { en: "Spherification using sodium alginate", es: "Esferificación usando alginato de sodio", de: "Spherifikation mit Natriumalginat", nl: "Spherificatie met natriumalginaat" },
          { en: "Simple freezing", es: "Congelación simple", de: "Einfaches Einfrieren", nl: "Eenvoudig invriezen" },
          { en: "Boiling at high temperature", es: "Hervir a alta temperatura", de: "Bei hoher Temperatur kochen", nl: "Koken op hoge temperatuur" },
          { en: "Adding gelatin", es: "Añadir gelatina", de: "Gelatine hinzufügen", nl: "Gelatine toevoegen" }
        ],
        correct: 0,
        explanation: {
          en: "Spherification is a molecular gastronomy technique that creates caviar-like spheres from vegetable juices using sodium alginate and calcium chloride, forming edible membranes around liquid centers.",
          es: "La esferificación es una técnica de gastronomía molecular que crea esferas similares al caviar de jugos de verduras usando alginato de sodio y cloruro de calcio, formando membranas comestibles alrededor de centros líquidos.",
          de: "Spherifikation ist eine Molekulargastronomie-Technik, die kaviarähnliche Kugeln aus Gemüsesäften mit Natriumalginat und Calciumchlorid schafft und essbare Membranen um flüssige Zentren bildet.",
          nl: "Spherificatie is een moleculaire gastronomie techniek die kaviaar-achtige bollen creëert uit groentesappen met natriumalginaat en calciumchloride, eetbare membranen vormend rond vloeibare centra."
        }
      },
      {
        question: {
          en: "What is the purpose of 'sweating' vegetables in cooking?",
          es: "¿Cuál es el propósito de 'sudar' verduras en la cocina?",
          de: "Was ist der Zweck des 'Schwitzens' von Gemüse beim Kochen?",
          nl: "Wat is het doel van het 'zweten' van groenten bij het koken?"
        },
        options: [
          { en: "To draw out moisture and concentrate flavors gently", es: "Para extraer humedad y concentrar sabores suavemente", de: "Um Feuchtigkeit zu entziehen und Aromen sanft zu konzentrieren", nl: "Om vocht te onttrekken en smaken zachtjes te concentreren" },
          { en: "To make vegetables crispy", es: "Para hacer las verduras crujientes", de: "Um Gemüse knusprig zu machen", nl: "Om groenten knapperig te maken" },
          { en: "To add salt to vegetables", es: "Para añadir sal a las verduras", de: "Um Gemüse Salz hinzuzufügen", nl: "Om zout aan groenten toe te voegen" },
          { en: "To cool down vegetables", es: "Para enfriar las verduras", de: "Um Gemüse abzukühlen", nl: "Om groenten af te koelen" }
        ],
        correct: 0,
        explanation: {
          en: "Sweating vegetables involves cooking them gently over low heat, often covered, to draw out moisture and concentrate flavors without browning. This technique builds flavor foundations in dishes.",
          es: "Sudar verduras implica cocinarlas suavemente a fuego bajo, a menudo cubiertas, para extraer humedad y concentrar sabores sin dorar. Esta técnica construye bases de sabor en los platos.",
          de: "Das Schwitzen von Gemüse beinhaltet sanftes Kochen bei niedriger Hitze, oft abgedeckt, um Feuchtigkeit zu entziehen und Aromen zu konzentrieren ohne zu bräunen. Diese Technik baut Geschmacksfundamente in Gerichten auf.",
          nl: "Groenten zweten houdt in dat ze zachtjes worden gekookt op lage hitte, vaak afgedekt, om vocht te onttrekken en smaken te concentreren zonder te bruinen. Deze techniek bouwt smaakreserves op in gerechten."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  }
  return level7;
})();