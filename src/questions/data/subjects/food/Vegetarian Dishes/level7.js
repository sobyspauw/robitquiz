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
      },
      {
        question: {
          en: "What is the Maillard reaction and why is it important in vegetable cooking?",
          es: "¿Qué es la reacción de Maillard y por qué es importante en la cocina de verduras?",
          de: "Was ist die Maillard-Reaktion und warum ist sie beim Gemüsekochen wichtig?",
          nl: "Wat is de Maillard reactie en waarom is het belangrijk bij het koken van groenten?"
        },
        options: [
          { en: "Caramelization of sugars only", es: "Solo caramelización de azúcares", de: "Nur Karamellisierung von Zuckern", nl: "Alleen caramelisatie van suikers" },
          { en: "Chemical reaction between amino acids and reducing sugars that creates complex flavors and browning", es: "Reacción química entre aminoácidos y azúcares reductores que crea sabores complejos y dorado", de: "Chemische Reaktion zwischen Aminosäuren und reduzierenden Zuckern, die komplexe Aromen und Bräunung schafft", nl: "Chemische reactie tussen aminozuren en reducerende suikers die complexe smaken en bruining creëert" },
          { en: "A fermentation process", es: "Un proceso de fermentación", de: "Ein Fermentationsprozess", nl: "Een fermentatie proces" },
          { en: "Boiling vegetables", es: "Hervir verduras", de: "Gemüse kochen", nl: "Groenten koken" }
        ],
        correct: 1,
        explanation: {
          en: "The Maillard reaction occurs when amino acids and reducing sugars react under heat (typically above 285°F/140°C), creating hundreds of flavor compounds and brown pigments. This adds depth, complexity, and umami to roasted or sautéed vegetables.",
          es: "La reacción de Maillard ocurre cuando aminoácidos y azúcares reductores reaccionan bajo calor (típicamente por encima de 285°F/140°C), creando cientos de compuestos de sabor y pigmentos marrones. Esto añade profundidad, complejidad y umami a verduras asadas o salteadas.",
          de: "Die Maillard-Reaktion tritt auf, wenn Aminosäuren und reduzierende Zucker unter Hitze reagieren (typischerweise über 140°C), wodurch Hunderte von Geschmacksverbindungen und braune Pigmente entstehen. Dies fügt gebratenem oder sautiertem Gemüse Tiefe, Komplexität und Umami hinzu.",
          nl: "De Maillard reactie treedt op wanneer aminozuren en reducerende suikers reageren onder hitte (meestal boven 140°C), waarbij honderden smaakverbindingen en bruine pigmenten ontstaan. Dit voegt diepte, complexiteit en umami toe aan geroosterde of gesauteerde groenten."
        }
      },
      {
        question: {
          en: "What is the difference between tempering and blooming spices?",
          es: "¿Cuál es la diferencia entre templar y florecer especias?",
          de: "Was ist der Unterschied zwischen dem Temperieren und Blühen von Gewürzen?",
          nl: "Wat is het verschil tussen temperen en bloeien van kruiden?"
        },
        options: [
          { en: "There is no difference", es: "No hay diferencia", de: "Es gibt keinen Unterschied", nl: "Er is geen verschil" },
          { en: "Tempering uses hot oil/ghee with whole spices; blooming uses cold oil heated with ground spices", es: "Templar usa aceite/ghee caliente con especias enteras; florecer usa aceite frío calentado con especias molidas", de: "Temperieren verwendet heißes Öl/Ghee mit ganzen Gewürzen; Blühen verwendet kaltes Öl, das mit gemahlenen Gewürzen erhitzt wird", nl: "Temperen gebruikt hete olie/ghee met hele kruiden; bloeien gebruikt koude olie verhit met gemalen kruiden" },
          { en: "Both are the same process", es: "Ambos son el mismo proceso", de: "Beides ist derselbe Prozess", nl: "Beide zijn hetzelfde proces" },
          { en: "Only used for baking", es: "Solo usado para hornear", de: "Nur zum Backen verwendet", nl: "Alleen gebruikt voor bakken" }
        ],
        correct: 1,
        explanation: {
          en: "Tempering (tadka) involves adding whole spices to hot oil or ghee to release aromatic compounds quickly. Blooming involves heating ground spices in cold oil that's gradually warmed, which extracts oil-soluble flavor compounds more gently and prevents burning.",
          es: "Templar (tadka) implica añadir especias enteras a aceite o ghee caliente para liberar compuestos aromáticos rápidamente. Florecer implica calentar especias molidas en aceite frío que se calienta gradualmente, lo que extrae compuestos de sabor solubles en aceite más suavemente y previene quemaduras.",
          de: "Temperieren (Tadka) beinhaltet das Hinzufügen ganzer Gewürze zu heißem Öl oder Ghee, um aromatische Verbindungen schnell freizusetzen. Blühen beinhaltet das Erhitzen gemahlener Gewürze in kaltem Öl, das allmählich erwärmt wird, was öllösliche Geschmacksverbindungen sanfter extrahiert und Verbrennen verhindert.",
          nl: "Temperen (tadka) houdt in dat hele kruiden worden toegevoegd aan hete olie of ghee om aromatische verbindingen snel vrij te maken. Bloeien houdt in dat gemalen kruiden worden verhit in koude olie die geleidelijk wordt verwarmd, wat olie-oplosbare smaakverbindingen zachter extraheert en verbranden voorkomt."
        }
      },
      {
        question: {
          en: "What is the purpose of using a bain-marie (water bath) for delicate dishes?",
          es: "¿Cuál es el propósito de usar un baño María para platos delicados?",
          de: "Was ist der Zweck der Verwendung eines Wasserbads für empfindliche Gerichte?",
          nl: "Wat is het doel van het gebruik van een bain-marie (waterbad) voor delicate gerechten?"
        },
        options: [
          { en: "To cook food faster", es: "Para cocinar alimentos más rápido", de: "Um Essen schneller zu kochen", nl: "Om voedsel sneller te koken" },
          { en: "To provide gentle, indirect heat and prevent curdling or cracking", es: "Para proporcionar calor suave e indirecto y prevenir cuajado o agrietamiento", de: "Um sanfte, indirekte Hitze bereitzustellen und Gerinnen oder Rissbildung zu verhindern", nl: "Om zachte, indirecte hitte te bieden en stremming of barsten te voorkomen" },
          { en: "To add moisture to dry foods", es: "Para añadir humedad a alimentos secos", de: "Um trockenen Lebensmitteln Feuchtigkeit hinzuzufügen", nl: "Om vocht toe te voegen aan droge voedingsmiddelen" },
          { en: "To freeze desserts", es: "Para congelar postres", de: "Um Desserts einzufrieren", nl: "Om desserts te bevriezen" }
        ],
        correct: 1,
        explanation: {
          en: "A bain-marie provides gentle, even heat by placing a cooking vessel in hot water, which moderates temperature and prevents delicate items like custards, cheesecakes, or sauces from overheating, curdling, or cracking. The water cannot exceed 212°F/100°C, providing a safety buffer.",
          es: "Un baño María proporciona calor suave y uniforme colocando un recipiente de cocción en agua caliente, lo que modera la temperatura y previene que artículos delicados como natillas, cheesecakes o salsas se sobrecalienten, cuajen o agrieten. El agua no puede exceder 100°C, proporcionando un margen de seguridad.",
          de: "Ein Wasserbad bietet sanfte, gleichmäßige Hitze, indem ein Kochgefäß in heißes Wasser gestellt wird, was die Temperatur mäßigt und verhindert, dass empfindliche Artikel wie Pudding, Käsekuchen oder Saucen überhitzen, gerinnen oder reißen. Das Wasser kann 100°C nicht überschreiten und bietet einen Sicherheitspuffer.",
          nl: "Een bain-marie biedt zachte, gelijkmatige hitte door een kookpan in heet water te plaatsen, wat de temperatuur modereert en voorkomt dat delicate items zoals vla, cheesecakes of sauzen oververhit raken, stremmen of barsten. Het water kan 100°C niet overschrijden, wat een veiligheidsbuffer biedt."
        }
      },
      {
        question: {
          en: "What is the technique called when you cut vegetables into uniform matchstick-sized pieces?",
          es: "¿Cómo se llama la técnica cuando cortas verduras en trozos uniformes del tamaño de cerillas?",
          de: "Wie nennt man die Technik, wenn man Gemüse in gleichmäßige streichholzgroße Stücke schneidet?",
          nl: "Hoe heet de techniek wanneer je groenten snijdt in uniforme lucifer-grote stukken?"
        },
        options: [
          { en: "Brunoise", es: "Brunoise", de: "Brunoise", nl: "Brunoise" },
          { en: "Julienne", es: "Juliana", de: "Julienne", nl: "Julienne" },
          { en: "Chiffonade", es: "Chiffonade", de: "Chiffonade", nl: "Chiffonade" },
          { en: "Mirepoix", es: "Mirepoix", de: "Mirepoix", nl: "Mirepoix" }
        ],
        correct: 1,
        explanation: {
          en: "Julienne is a knife cut that produces thin matchstick-sized pieces, typically 1/8 inch × 1/8 inch × 2-2.5 inches. Brunoise is tiny dice (1/8 inch cubes), chiffonade is ribbon-like strips of herbs/greens, and mirepoix is a mixture of diced aromatics, not a cut.",
          es: "Juliana es un corte de cuchillo que produce trozos delgados del tamaño de cerillas, típicamente 1/8 pulgada × 1/8 pulgada × 2-2.5 pulgadas. Brunoise son dados diminutos (cubos de 1/8 pulgada), chiffonade son tiras similares a cintas de hierbas/verduras, y mirepoix es una mezcla de aromáticos cortados en dados, no un corte.",
          de: "Julienne ist ein Messerschnitt, der dünne streichholzgroße Stücke erzeugt, typischerweise 3mm × 3mm × 5-6cm. Brunoise sind winzige Würfel (3mm Würfel), Chiffonade sind bandartige Streifen von Kräutern/Blattgemüse, und Mirepoix ist eine Mischung gewürfelter Aromaten, kein Schnitt.",
          nl: "Julienne is een mes snede die dunne lucifer-grote stukken produceert, meestal 3mm × 3mm × 5-6cm. Brunoise zijn kleine dobbelstenen (3mm kubussen), chiffonade zijn lint-achtige stroken van kruiden/bladgroenten, en mirepoix is een mengsel van in blokjes gesneden aromaten, geen snede."
        }
      },
      {
        question: {
          en: "What is the purpose of 'shocking' vegetables in ice water after blanching?",
          es: "¿Cuál es el propósito de 'impactar' verduras en agua helada después de escaldar?",
          de: "Was ist der Zweck des 'Schockens' von Gemüse in Eiswasser nach dem Blanchieren?",
          nl: "Wat is het doel van het 'schokken' van groenten in ijswater na blancheren?"
        },
        options: [
          { en: "To add flavor", es: "Para añadir sabor", de: "Um Geschmack hinzuzufügen", nl: "Om smaak toe te voegen" },
          { en: "To stop the cooking process immediately and preserve color, texture, and nutrients", es: "Para detener el proceso de cocción inmediatamente y preservar color, textura y nutrientes", de: "Um den Kochvorgang sofort zu stoppen und Farbe, Textur und Nährstoffe zu bewahren", nl: "Om het kookproces onmiddellijk te stoppen en kleur, textuur en voedingsstoffen te behouden" },
          { en: "To remove salt", es: "Para eliminar sal", de: "Um Salz zu entfernen", nl: "Om zout te verwijderen" },
          { en: "To make vegetables crispy", es: "Para hacer las verduras crujientes", de: "Um Gemüse knusprig zu machen", nl: "Om groenten knapperig te maken" }
        ],
        correct: 1,
        explanation: {
          en: "Shocking vegetables in ice water after blanching halts the cooking process instantly by rapidly dropping the temperature. This preserves vibrant color, maintains crisp-tender texture, and stops enzyme activity that would continue breaking down nutrients and color compounds.",
          es: "Impactar verduras en agua helada después de escaldar detiene el proceso de cocción instantáneamente al bajar rápidamente la temperatura. Esto preserva el color vibrante, mantiene la textura crujiente-tierna y detiene la actividad enzimática que continuaría descomponiendo nutrientes y compuestos de color.",
          de: "Das Schocken von Gemüse in Eiswasser nach dem Blanchieren stoppt den Kochvorgang sofort durch schnelles Absenken der Temperatur. Dies bewahrt lebendige Farbe, erhält bissfeste Textur und stoppt Enzymaktivität, die weiterhin Nährstoffe und Farbverbindungen abbauen würde.",
          nl: "Groenten schokken in ijswater na blancheren stopt het kookproces onmiddellijk door de temperatuur snel te verlagen. Dit behoudt levendige kleur, handhaaft knapperig-zachte textuur en stopt enzym activiteit die voedingsstoffen en kleurverbindingen zou blijven afbreken."
        }
      },
      {
        question: {
          en: "What is confit cooking and can it be applied to vegetables?",
          es: "¿Qué es la cocina confit y se puede aplicar a verduras?",
          de: "Was ist Confit-Kochen und kann es auf Gemüse angewendet werden?",
          nl: "Wat is confit koken en kan het worden toegepast op groenten?"
        },
        options: [
          { en: "Only used for duck, not vegetables", es: "Solo usado para pato, no verduras", de: "Nur für Ente verwendet, nicht für Gemüse", nl: "Alleen gebruikt voor eend, niet groenten" },
          { en: "Slow-cooking in fat at low temperature; yes, works beautifully with garlic, tomatoes, and other vegetables", es: "Cocción lenta en grasa a baja temperatura; sí, funciona maravillosamente con ajo, tomates y otras verduras", de: "Langsames Garen in Fett bei niedriger Temperatur; ja, funktioniert wunderbar mit Knoblauch, Tomaten und anderem Gemüse", nl: "Langzaam koken in vet op lage temperatuur; ja, werkt prachtig met knoflook, tomaten en andere groenten" },
          { en: "A baking technique only", es: "Solo una técnica de horneado", de: "Nur eine Backtechnik", nl: "Alleen een baktechniek" },
          { en: "Grilling at high heat", es: "Asar a alta temperatura", de: "Grillen bei hoher Hitze", nl: "Grillen op hoge hitte" }
        ],
        correct: 1,
        explanation: {
          en: "Confit is a slow-cooking method where food is submerged in fat (traditionally duck fat, but olive oil works for vegetables) and cooked at low temperature (around 200-250°F/93-121°C). Vegetable confit, especially garlic or tomato, becomes incredibly tender and develops deep, concentrated flavors.",
          es: "Confit es un método de cocción lenta donde los alimentos se sumergen en grasa (tradicionalmente grasa de pato, pero aceite de oliva funciona para verduras) y se cocinan a baja temperatura (alrededor de 93-121°C). El confit de verduras, especialmente ajo o tomate, se vuelve increíblemente tierno y desarrolla sabores profundos y concentrados.",
          de: "Confit ist eine Langsammethode, bei der Lebensmittel in Fett eingetaucht (traditionell Entenfett, aber Olivenöl funktioniert für Gemüse) und bei niedriger Temperatur (etwa 93-121°C) gegart werden. Gemüse-Confit, besonders Knoblauch oder Tomate, wird unglaublich zart und entwickelt tiefe, konzentrierte Aromen.",
          nl: "Confit is een langzaam kook methode waarbij voedsel wordt ondergedompeld in vet (traditioneel eendenvet, maar olijfolie werkt voor groenten) en gekookt op lage temperatuur (rond 93-121°C). Groente confit, vooral knoflook of tomaat, wordt ongelooflijk zacht en ontwikkelt diepe, geconcentreerde smaken."
        }
      },
      {
        question: {
          en: "What is the 'mother sauce' concept in classical French cuisine?",
          es: "¿Qué es el concepto de 'salsa madre' en la cocina francesa clásica?",
          de: "Was ist das Konzept der 'Muttersauce' in der klassischen französischen Küche?",
          nl: "Wat is het 'moedersaus' concept in klassieke Franse keuken?"
        },
        options: [
          { en: "Sauces made by mothers only", es: "Salsas hechas solo por madres", de: "Saucen nur von Müttern gemacht", nl: "Sauzen alleen gemaakt door moeders" },
          { en: "Five foundational sauces (béchamel, velouté, espagnole, hollandaise, tomato) from which others derive", es: "Cinco salsas fundamentales (bechamel, velouté, española, holandesa, tomate) de las cuales se derivan otras", de: "Fünf grundlegende Saucen (Béchamel, Velouté, Espagnole, Hollandaise, Tomate) von denen andere abgeleitet werden", nl: "Vijf fundamentele sauzen (béchamel, velouté, espagnole, hollandaise, tomaat) waaruit anderen worden afgeleid" },
          { en: "The first sauce you learn", es: "La primera salsa que aprendes", de: "Die erste Sauce, die man lernt", nl: "De eerste saus die je leert" },
          { en: "Traditional family recipes", es: "Recetas familiares tradicionales", de: "Traditionelle Familienrezepte", nl: "Traditionele familie recepten" }
        ],
        correct: 1,
        explanation: {
          en: "The five mother sauces codified by Auguste Escoffier are béchamel (milk-based), velouté (light stock-based), espagnole (brown stock-based), hollandaise (butter/egg-based), and tomato. Countless derivative sauces are built from these foundations. Béchamel, hollandaise, and tomato are commonly used in vegetarian cooking.",
          es: "Las cinco salsas madre codificadas por Auguste Escoffier son bechamel (a base de leche), velouté (a base de caldo ligero), española (a base de caldo oscuro), holandesa (a base de mantequilla/huevo) y tomate. Innumerables salsas derivadas se construyen a partir de estas bases. Bechamel, holandesa y tomate se usan comúnmente en cocina vegetariana.",
          de: "Die fünf Muttersaucen, kodifiziert von Auguste Escoffier, sind Béchamel (milchbasiert), Velouté (leichte Brühe), Espagnole (dunkle Brühe), Hollandaise (Butter/Ei) und Tomate. Unzählige abgeleitete Saucen basieren auf diesen Grundlagen. Béchamel, Hollandaise und Tomate werden häufig in der vegetarischen Küche verwendet.",
          nl: "De vijf moedersauzen gecodificeerd door Auguste Escoffier zijn béchamel (melk-gebaseerd), velouté (lichte bouillon), espagnole (bruine bouillon), hollandaise (boter/ei), en tomaat. Talloze afgeleide sauzen zijn gebouwd op deze fundamenten. Béchamel, hollandaise en tomaat worden vaak gebruikt in vegetarisch koken."
        }
      },
      {
        question: {
          en: "What is the difference between a roux and a slurry for thickening sauces?",
          es: "¿Cuál es la diferencia entre un roux y una mezcla líquida para espesar salsas?",
          de: "Was ist der Unterschied zwischen einer Mehlschwitze und einer Aufschlämmung zum Andicken von Saucen?",
          nl: "Wat is het verschil tussen een roux en een brij voor het verdikken van sauzen?"
        },
        options: [
          { en: "No difference, same technique", es: "Sin diferencia, misma técnica", de: "Kein Unterschied, gleiche Technik", nl: "Geen verschil, zelfde techniek" },
          { en: "Roux is flour cooked in fat; slurry is flour/starch mixed with cold liquid", es: "Roux es harina cocida en grasa; mezcla líquida es harina/almidón mezclado con líquido frío", de: "Mehlschwitze ist in Fett gekochtes Mehl; Aufschlämmung ist Mehl/Stärke mit kalter Flüssigkeit gemischt", nl: "Roux is meel gekookt in vet; brij is meel/zetmeel gemengd met koude vloeistof" },
          { en: "Both use only cornstarch", es: "Ambos usan solo maicena", de: "Beide verwenden nur Maisstärke", nl: "Beide gebruiken alleen maïszetmeel" },
          { en: "Roux is cold, slurry is hot", es: "Roux es frío, mezcla líquida es caliente", de: "Mehlschwitze ist kalt, Aufschlämmung ist heiß", nl: "Roux is koud, brij is heet" }
        ],
        correct: 1,
        explanation: {
          en: "A roux is made by cooking flour in fat (butter/oil) before adding liquid, which eliminates raw flour taste and creates a stable thickener. A slurry is flour or starch (cornstarch, arrowroot) mixed with cold liquid then added to hot sauce. Roux provides more flavor complexity; slurry is quicker but can taste starchy.",
          es: "Un roux se hace cocinando harina en grasa (mantequilla/aceite) antes de añadir líquido, lo que elimina el sabor a harina cruda y crea un espesante estable. Una mezcla líquida es harina o almidón (maicena, arrurruz) mezclado con líquido frío luego añadido a salsa caliente. Roux proporciona más complejidad de sabor; mezcla líquida es más rápida pero puede saber a almidón.",
          de: "Eine Mehlschwitze wird hergestellt, indem Mehl in Fett (Butter/Öl) gekocht wird, bevor Flüssigkeit hinzugefügt wird, was rohen Mehlgeschmack eliminiert und ein stabiles Verdickungsmittel schafft. Eine Aufschlämmung ist Mehl oder Stärke (Maisstärke, Pfeilwurz) mit kalter Flüssigkeit gemischt, dann zu heißer Sauce hinzugefügt. Mehlschwitze bietet mehr Geschmackskomplexität; Aufschlämmung ist schneller, kann aber stärkehaltig schmecken.",
          nl: "Een roux wordt gemaakt door meel in vet (boter/olie) te koken voordat vloeistof wordt toegevoegd, wat rauwe meel smaak elimineert en een stabiel verdikkingsmiddel creëert. Een brij is meel of zetmeel (maïszetmeel, pijlwortel) gemengd met koude vloeistof dan toegevoegd aan hete saus. Roux biedt meer smaak complexiteit; brij is sneller maar kan zetmeelachtig smaken."
        }
      },
      {
        question: {
          en: "What is umami and which vegetarian ingredients are rich in it?",
          es: "¿Qué es umami y qué ingredientes vegetarianos son ricos en él?",
          de: "Was ist Umami und welche vegetarischen Zutaten sind reich daran?",
          nl: "Wat is umami en welke vegetarische ingrediënten zijn er rijk aan?"
        },
        options: [
          { en: "A type of seaweed only", es: "Solo un tipo de alga", de: "Nur eine Algenart", nl: "Alleen een type zeewier" },
          { en: "The fifth taste (savory), found in tomatoes, mushrooms, aged cheese, soy sauce, miso, nutritional yeast", es: "El quinto sabor (sabroso), encontrado en tomates, hongos, queso añejo, salsa de soya, miso, levadura nutricional", de: "Der fünfte Geschmack (herzhaft), gefunden in Tomaten, Pilzen, gereiftem Käse, Sojasauce, Miso, Nährhefe", nl: "De vijfde smaak (hartig), gevonden in tomaten, paddenstoelen, oude kaas, sojasaus, miso, voedingsgist" },
          { en: "A cooking technique", es: "Una técnica de cocción", de: "Eine Kochtechnik", nl: "Een kooktechniek" },
          { en: "A Japanese restaurant", es: "Un restaurante japonés", de: "Ein japanisches Restaurant", nl: "Een Japans restaurant" }
        },
        correct: 1,
        explanation: {
          en: "Umami is the savory, meaty fifth basic taste (alongside sweet, sour, salty, bitter) caused by glutamates and nucleotides. Vegetarian umami sources include mushrooms (especially shiitake, porcini), tomatoes, aged cheeses (parmesan), soy sauce, miso, nutritional yeast, seaweed, and fermented foods.",
          es: "Umami es el quinto sabor básico sabroso y carnoso (junto con dulce, ácido, salado, amargo) causado por glutamatos y nucleótidos. Fuentes vegetarianas de umami incluyen hongos (especialmente shiitake, porcini), tomates, quesos añejos (parmesano), salsa de soya, miso, levadura nutricional, algas y alimentos fermentados.",
          de: "Umami ist der herzhafte, fleischige fünfte Grundgeschmack (neben süß, sauer, salzig, bitter) verursacht durch Glutamate und Nukleotide. Vegetarische Umami-Quellen umfassen Pilze (besonders Shiitake, Steinpilze), Tomaten, gereiften Käse (Parmesan), Sojasauce, Miso, Nährhefe, Algen und fermentierte Lebensmittel.",
          nl: "Umami is de hartige, vleesachtige vijfde basis smaak (naast zoet, zuur, zout, bitter) veroorzaakt door glutamaten en nucleotiden. Vegetarische umami bronnen omvatten paddenstoelen (vooral shiitake, porcini), tomaten, oude kazen (parmezaan), sojasaus, miso, voedingsgist, zeewier en gefermenteerde voedingsmiddelen."
        }
      },
      {
        question: {
          en: "What is the smoking point of an oil and why is it important?",
          es: "¿Qué es el punto de humeo de un aceite y por qué es importante?",
          de: "Was ist der Rauchpunkt eines Öls und warum ist er wichtig?",
          nl: "Wat is het rookpunt van een olie en waarom is het belangrijk?"
        },
        options: [
          { en: "When oil starts to smell", es: "Cuando el aceite comienza a oler", de: "Wenn Öl anfängt zu riechen", nl: "Wanneer olie begint te ruiken" },
          { en: "Temperature at which oil breaks down, producing smoke and harmful compounds; determines cooking method suitability", es: "Temperatura a la cual el aceite se descompone, produciendo humo y compuestos dañinos; determina la idoneidad del método de cocción", de: "Temperatur, bei der Öl zerfällt, Rauch und schädliche Verbindungen erzeugt; bestimmt Eignung der Kochmethode", nl: "Temperatuur waarbij olie afbreekt, rook en schadelijke verbindingen produceert; bepaalt geschiktheid van kookmethode" },
          { en: "When oil catches fire", es: "Cuando el aceite se prende fuego", de: "Wenn Öl Feuer fängt", nl: "Wanneer olie vlam vat" },
          { en: "The flavor intensity", es: "La intensidad del sabor", de: "Die Geschmacksintensität", nl: "De smaak intensiteit" }
        ],
        correct: 1,
        explanation: {
          en: "The smoking point is the temperature at which oil begins to break down, producing visible smoke and creating harmful free radicals and acrolein. Extra virgin olive oil (325-375°F) is good for low-medium heat; avocado oil (520°F) and refined oils work for high-heat cooking like stir-frying.",
          es: "El punto de humeo es la temperatura a la cual el aceite comienza a descomponerse, produciendo humo visible y creando radicales libres y acroleína dañinos. Aceite de oliva extra virgen (163-190°C) es bueno para calor bajo-medio; aceite de aguacate (271°C) y aceites refinados funcionan para cocción a alta temperatura como salteados.",
          de: "Der Rauchpunkt ist die Temperatur, bei der Öl zu zerfallen beginnt, sichtbaren Rauch produziert und schädliche freie Radikale und Acrolein erzeugt. Extra natives Olivenöl (163-190°C) ist gut für niedrig-mittlere Hitze; Avocadoöl (271°C) und raffinierte Öle funktionieren für Hochhitze-Kochen wie Pfannenrühren.",
          nl: "Het rookpunt is de temperatuur waarbij olie begint af te breken, zichtbare rook produceert en schadelijke vrije radicalen en acroleïne creëert. Extra vierge olijfolie (163-190°C) is goed voor laag-middelhoge hitte; avocado olie (271°C) en geraffineerde oliën werken voor hoge-hitte koken zoals roerbakken."
        }
      },
      {
        question: {
          en: "What is the purpose of acid (lemon juice, vinegar) in cooking beyond flavor?",
          es: "¿Cuál es el propósito del ácido (jugo de limón, vinagre) en la cocina más allá del sabor?",
          de: "Was ist der Zweck von Säure (Zitronensaft, Essig) beim Kochen jenseits des Geschmacks?",
          nl: "Wat is het doel van zuur (citroensap, azijn) bij het koken naast smaak?"
        },
        options: [
          { en: "Only for taste", es: "Solo para sabor", de: "Nur für Geschmack", nl: "Alleen voor smaak" },
          { en: "Balances flavors, tenderizes proteins, prevents browning, helps emulsify, and brightens colors", es: "Equilibra sabores, ablanda proteínas, previene el pardeamiento, ayuda a emulsionar y aviva colores", de: "Gleicht Geschmäcker aus, macht Proteine zart, verhindert Bräunung, hilft emulgieren und hellt Farben auf", nl: "Balanceert smaken, maakt eiwitten mals, voorkomt bruining, helpt emulgeren en verheldert kleuren" },
          { en: "Makes food spicy", es: "Hace que la comida sea picante", de: "Macht Essen scharf", nl: "Maakt voedsel pittig" },
          { en: "Adds sweetness", es: "Añade dulzura", de: "Fügt Süße hinzu", nl: "Voegt zoetheid toe" }
        ],
        correct: 1,
        explanation: {
          en: "Acid serves multiple functions: balances rich/fatty flavors, denatures and tenderizes proteins (marinades), prevents enzymatic browning in cut fruits/vegetables, helps create stable emulsions (vinaigrettes), preserves bright green colors in vegetables (if added at the right time), and enhances overall flavor perception.",
          es: "El ácido sirve múltiples funciones: equilibra sabores ricos/grasos, desnaturaliza y ablanda proteínas (adobos), previene el pardeamiento enzimático en frutas/verduras cortadas, ayuda a crear emulsiones estables (vinagretas), preserva colores verdes brillantes en verduras (si se añade en el momento correcto) y mejora la percepción general del sabor.",
          de: "Säure erfüllt mehrere Funktionen: gleicht reiche/fettige Geschmäcker aus, denaturiert und macht Proteine zart (Marinaden), verhindert enzymatische Bräunung in geschnittenen Früchten/Gemüse, hilft stabile Emulsionen zu schaffen (Vinaigrettes), bewahrt leuchtend grüne Farben in Gemüse (wenn zur richtigen Zeit hinzugefügt) und verbessert die allgemeine Geschmackswahrnehmung.",
          nl: "Zuur dient meerdere functies: balanceert rijke/vette smaken, denatureert en maakt eiwitten mals (marinades), voorkomt enzymatische bruining in gesneden fruit/groenten, helpt stabiele emulsies te creëren (vinaigrettes), behoudt heldere groene kleuren in groenten (indien op het juiste moment toegevoegd) en verbetert de algehele smaakperceptie."
        }
      },
      {
        question: {
          en: "What is the principle behind pressure cooking and why does it cook faster?",
          es: "¿Cuál es el principio detrás de la cocción a presión y por qué cocina más rápido?",
          de: "Was ist das Prinzip hinter dem Druckkochen und warum kocht es schneller?",
          nl: "Wat is het principe achter snelkoken en waarom kookt het sneller?"
        },
        options: [
          { en: "Uses more water", es: "Usa más agua", de: "Verwendet mehr Wasser", nl: "Gebruikt meer water" },
          { en: "Increases pressure which raises water's boiling point above 212°F/100°C, cooking food faster at higher temperature", es: "Aumenta la presión lo que eleva el punto de ebullición del agua por encima de 100°C, cocinando alimentos más rápido a mayor temperatura", de: "Erhöht den Druck, was den Siedepunkt von Wasser über 100°C anhebt und Essen bei höherer Temperatur schneller kocht", nl: "Verhoogt druk wat het kookpunt van water boven 100°C verhoogt, voedsel sneller kookt op hogere temperatuur" },
          { en: "Uses less heat", es: "Usa menos calor", de: "Verwendet weniger Hitze", nl: "Gebruikt minder hitte" },
          { en: "Removes all moisture", es: "Elimina toda la humedad", de: "Entfernt alle Feuchtigkeit", nl: "Verwijdert alle vocht" }
        ],
        correct: 1,
        explanation: {
          en: "Pressure cookers trap steam, increasing internal pressure to about 15 psi above atmospheric pressure. This raises the boiling point of water to approximately 250°F/121°C instead of 212°F/100°C, allowing food to cook at higher temperatures and therefore much faster. Reduces cooking time by 50-70% for beans, grains, and tough vegetables.",
          es: "Las ollas a presión atrapan vapor, aumentando la presión interna a aproximadamente 15 psi por encima de la presión atmosférica. Esto eleva el punto de ebullición del agua a aproximadamente 121°C en lugar de 100°C, permitiendo que los alimentos se cocinen a temperaturas más altas y por lo tanto mucho más rápido. Reduce el tiempo de cocción en 50-70% para frijoles, granos y verduras duras.",
          de: "Schnellkochtöpfe fangen Dampf ein und erhöhen den Innendruck auf etwa 1 bar über atmosphärischem Druck. Dies hebt den Siedepunkt von Wasser auf etwa 121°C statt 100°C an, was es ermöglicht, Essen bei höheren Temperaturen und daher viel schneller zu kochen. Reduziert Kochzeit um 50-70% für Bohnen, Getreide und hartes Gemüse.",
          nl: "Snelkookpannen vangen stoom op, verhogen interne druk tot ongeveer 1 bar boven atmosferische druk. Dit verhoogt het kookpunt van water tot ongeveer 121°C in plaats van 100°C, waardoor voedsel op hogere temperaturen en daarom veel sneller kan koken. Vermindert kooktijd met 50-70% voor bonen, granen en harde groenten."
        }
      },
      {
        question: {
          en: "What is sous vide cooking and what are its advantages for vegetables?",
          es: "¿Qué es la cocción sous vide y cuáles son sus ventajas para las verduras?",
          de: "Was ist Sous-Vide-Kochen und welche Vorteile hat es für Gemüse?",
          nl: "Wat is sous vide koken en wat zijn de voordelen voor groenten?"
        },
        options: [
          { en: "Cooking without water", es: "Cocinar sin agua", de: "Kochen ohne Wasser", nl: "Koken zonder water" },
          { en: "Vacuum-sealing food in bags and cooking in precisely controlled water bath; ensures even cooking, preserves nutrients, intensifies flavors", es: "Sellar al vacío alimentos en bolsas y cocinar en baño de agua controlado con precisión; asegura cocción uniforme, preserva nutrientes, intensifica sabores", de: "Vakuumversiegeln von Lebensmitteln in Beuteln und Kochen in präzise kontrolliertem Wasserbad; gewährleistet gleichmäßiges Garen, bewahrt Nährstoffe, intensiviert Aromen", nl: "Vacuüm verzegelen van voedsel in zakken en koken in nauwkeurig gecontroleerd waterbad; zorgt voor gelijkmatig koken, behoudt voedingsstoffen, intensiveert smaken" },
          { en: "Deep frying in oil", es: "Freír en aceite profundo", de: "Frittieren in Öl", nl: "Frituren in olie" },
          { en: "Grilling over charcoal", es: "Asar sobre carbón", de: "Grillen über Holzkohle", nl: "Grillen over houtskool" }
        ],
        correct: 1,
        explanation: {
          en: "Sous vide ('under vacuum') involves vacuum-sealing food in plastic bags and cooking in a temperature-controlled water bath. For vegetables, benefits include precise texture control, enhanced flavor retention (vegetables cook in their own juices), nutrient preservation, even cooking throughout, and ability to infuse flavors from herbs/oils sealed with the vegetables.",
          es: "Sous vide ('al vacío') implica sellar al vacío alimentos en bolsas de plástico y cocinar en un baño de agua con temperatura controlada. Para verduras, los beneficios incluyen control preciso de textura, retención mejorada de sabor (verduras se cocinan en sus propios jugos), preservación de nutrientes, cocción uniforme y capacidad de infundir sabores de hierbas/aceites sellados con las verduras.",
          de: "Sous Vide ('unter Vakuum') beinhaltet Vakuumversiegeln von Lebensmitteln in Plastikbeuteln und Kochen in einem temperaturkontrollierten Wasserbad. Für Gemüse umfassen Vorteile präzise Texturkontrolle, verbesserte Geschmacksretention (Gemüse kocht in eigenen Säften), Nährstoffbewahrung, gleichmäßiges Garen und Fähigkeit, Aromen von Kräutern/Ölen zu infundieren, die mit dem Gemüse versiegelt sind.",
          nl: "Sous vide ('onder vacuüm') houdt in dat voedsel vacuüm wordt verzegeld in plastic zakken en wordt gekookt in een temperatuur-gecontroleerd waterbad. Voor groenten omvatten voordelen precieze textuur controle, verbeterde smaak retentie (groenten koken in eigen sappen), voedingsstof behoud, gelijkmatig koken en vermogen om smaken van kruiden/oliën te infuseren die met de groenten zijn verzegeld."
        }
      },
      {
        question: {
          en: "What is the purpose of salting eggplant or zucchini before cooking?",
          es: "¿Cuál es el propósito de salar berenjena o calabacín antes de cocinar?",
          de: "Was ist der Zweck des Salzens von Auberginen oder Zucchini vor dem Kochen?",
          nl: "Wat is het doel van het zouten van aubergine of courgette voor het koken?"
        },
        options: [
          { en: "To add more sodium", es: "Para añadir más sodio", de: "Um mehr Natrium hinzuzufügen", nl: "Om meer natrium toe te voegen" },
          { en: "Draws out moisture and bitter compounds, prevents sogginess, improves browning and texture", es: "Extrae humedad y compuestos amargos, previene empapamiento, mejora dorado y textura", de: "Entzieht Feuchtigkeit und bittere Verbindungen, verhindert Durchweichen, verbessert Bräunung und Textur", nl: "Trekt vocht en bittere verbindingen eruit, voorkomt doordrenking, verbetert bruining en textuur" },
          { en: "Makes them sweeter", es: "Los hace más dulces", de: "Macht sie süßer", nl: "Maakt ze zoeter" },
          { en: "Changes the color", es: "Cambia el color", de: "Ändert die Farbe", nl: "Verandert de kleur" }
        ],
        correct: 1,
        explanation: {
          en: "Salting eggplant or zucchini (called 'purging' or 'degorging') draws out excess moisture through osmosis, which prevents sogginess when cooking, allows better browning, improves texture, and in older eggplant varieties, removes bitter compounds. Modern eggplants are less bitter but salting still improves texture, especially for frying or grilling.",
          es: "Salar berenjena o calabacín (llamado 'purgar' o 'desgorgar') extrae el exceso de humedad mediante ósmosis, lo que previene empapamiento al cocinar, permite mejor dorado, mejora textura y en variedades antiguas de berenjena, elimina compuestos amargos. Las berenjenas modernas son menos amargas pero salar aún mejora la textura, especialmente para freír o asar.",
          de: "Das Salzen von Auberginen oder Zucchini (genannt 'Entfernen' oder 'Entgorgen') entzieht überschüssige Feuchtigkeit durch Osmose, was Durchweichen beim Kochen verhindert, bessere Bräunung ermöglicht, Textur verbessert und bei älteren Auberginensorten bittere Verbindungen entfernt. Moderne Auberginen sind weniger bitter, aber Salzen verbessert immer noch die Textur, besonders zum Braten oder Grillen.",
          nl: "Het zouten van aubergine of courgette (genoemd 'zuiveren' of 'ontgorgen') trekt overtollig vocht eruit door osmose, wat doordrenking voorkomt bij het koken, betere bruining mogelijk maakt, textuur verbetert en bij oudere aubergine variëteiten bittere verbindingen verwijdert. Moderne aubergines zijn minder bitter maar zouten verbetert nog steeds de textuur, vooral voor bakken of grillen."
        }
      },
      {
        question: {
          en: "What is mise en place and why is it important in cooking?",
          es: "¿Qué es mise en place y por qué es importante en la cocina?",
          de: "Was ist Mise en Place und warum ist es beim Kochen wichtig?",
          nl: "Wat is mise en place en waarom is het belangrijk bij het koken?"
        },
        options: [
          { en: "A type of French dish", es: "Un tipo de plato francés", de: "Eine Art französisches Gericht", nl: "Een type Frans gerecht" },
          { en: "'Everything in its place' - preparing and organizing all ingredients and equipment before cooking begins", es: "'Todo en su lugar' - preparar y organizar todos los ingredientes y equipos antes de que comience la cocción", de: "'Alles an seinem Platz' - Vorbereiten und Organisieren aller Zutaten und Ausrüstung bevor das Kochen beginnt", nl: "'Alles op zijn plaats' - voorbereiden en organiseren van alle ingrediënten en apparatuur voordat het koken begint" },
          { en: "The final presentation of a dish", es: "La presentación final de un plato", de: "Die finale Präsentation eines Gerichts", nl: "De finale presentatie van een gerecht" },
          { en: "A cooking competition", es: "Una competencia de cocina", de: "Ein Kochwettbewerb", nl: "Een kook competitie" }
        ],
        correct: 1,
        explanation: {
          en: "Mise en place ('everything in its place') is the practice of preparing and organizing all ingredients, tools, and equipment before cooking begins. This includes chopping vegetables, measuring ingredients, preheating pans, and arranging everything within easy reach. It ensures smooth workflow, prevents mistakes, reduces stress, and allows you to focus on cooking technique rather than scrambling for ingredients.",
          es: "Mise en place ('todo en su lugar') es la práctica de preparar y organizar todos los ingredientes, herramientas y equipos antes de que comience la cocción. Esto incluye picar verduras, medir ingredientes, precalentar sartenes y organizar todo al alcance. Asegura un flujo de trabajo suave, previene errores, reduce estrés y permite enfocarse en la técnica de cocción en lugar de buscar ingredientes apresuradamente.",
          de: "Mise en Place ('alles an seinem Platz') ist die Praxis, alle Zutaten, Werkzeuge und Ausrüstung vorzubereiten und zu organisieren, bevor das Kochen beginnt. Dies umfasst Gemüse schneiden, Zutaten abmessen, Pfannen vorheizen und alles in Reichweite anordnen. Es gewährleistet reibungslosen Arbeitsablauf, verhindert Fehler, reduziert Stress und ermöglicht Konzentration auf Kochtechnik statt auf Suche nach Zutaten.",
          nl: "Mise en place ('alles op zijn plaats') is de praktijk van het voorbereiden en organiseren van alle ingrediënten, gereedschap en apparatuur voordat het koken begint. Dit omvat groenten snijden, ingrediënten afmeten, pannen voorverwarmen en alles binnen handbereik rangschikken. Het zorgt voor soepele workflow, voorkomt fouten, vermindert stress en maakt het mogelijk om te focussen op kooktechniek in plaats van haastig zoeken naar ingrediënten."
        }
      },
      {
        question: {
          en: "What is the difference between braising and stewing?",
          es: "¿Cuál es la diferencia entre estofar y guisar?",
          de: "Was ist der Unterschied zwischen Schmoren und Eintopf kochen?",
          nl: "Wat is het verschil tussen stoven en sudderen?"
        },
        options: [
          { en: "No difference", es: "Sin diferencia", de: "Kein Unterschied", nl: "Geen verschil" },
          { en: "Braising uses larger pieces partially submerged in liquid; stewing uses smaller pieces fully submerged", es: "Estofar usa trozos más grandes parcialmente sumergidos en líquido; guisar usa trozos más pequeños completamente sumergidos", de: "Schmoren verwendet größere Stücke teilweise in Flüssigkeit eingetaucht; Eintopf verwendet kleinere Stücke vollständig eingetaucht", nl: "Stoven gebruikt grotere stukken gedeeltelijk ondergedompeld in vloeistof; sudderen gebruikt kleinere stukken volledig ondergedompeld" },
          { en: "Braising is only for meat", es: "Estofar es solo para carne", de: "Schmoren ist nur für Fleisch", nl: "Stoven is alleen voor vlees" },
          { en: "Stewing is always faster", es: "Guisar es siempre más rápido", de: "Eintopf kochen ist immer schneller", nl: "Sudderen is altijd sneller" }
        ],
        correct: 1,
        explanation: {
          en: "Braising cooks larger pieces of food (vegetables like artichokes, cabbage wedges, root vegetables) partially submerged in liquid in a covered pot, using low heat for extended time. Stewing cooks smaller, uniform pieces fully submerged in more liquid. Both use moist heat but differ in cut size, liquid amount, and resulting dish consistency.",
          es: "Estofar cocina trozos más grandes de alimentos (verduras como alcachofas, cuñas de repollo, verduras de raíz) parcialmente sumergidos en líquido en una olla cubierta, usando calor bajo por tiempo extendido. Guisar cocina trozos más pequeños y uniformes completamente sumergidos en más líquido. Ambos usan calor húmedo pero difieren en tamaño de corte, cantidad de líquido y consistencia del plato resultante.",
          de: "Schmoren kocht größere Stücke Lebensmittel (Gemüse wie Artischocken, Kohlkeile, Wurzelgemüse) teilweise in Flüssigkeit eingetaucht in einem abgedeckten Topf bei niedriger Hitze für längere Zeit. Eintopf kocht kleinere, gleichmäßige Stücke vollständig in mehr Flüssigkeit eingetaucht. Beide verwenden feuchte Hitze, unterscheiden sich aber in Schnittgröße, Flüssigkeitsmenge und resultierender Gerichtkonsistenz.",
          nl: "Stoven kookt grotere stukken voedsel (groenten zoals artisjokken, kool wiggen, wortelgroenten) gedeeltelijk ondergedompeld in vloeistof in een afgedekte pan, met lage hitte voor langere tijd. Sudderen kookt kleinere, uniforme stukken volledig ondergedompeld in meer vloeistof. Beide gebruiken vochtige hitte maar verschillen in snijgrootte, vloeistof hoeveelheid en resulterende gerecht consistentie."
        }
      },
      {
        question: {
          en: "What is the function of adding pasta cooking water to sauce?",
          es: "¿Cuál es la función de añadir agua de cocción de pasta a la salsa?",
          de: "Was ist die Funktion des Hinzufügens von Nudelkochwasser zur Sauce?",
          nl: "Wat is de functie van het toevoegen van pasta kookwater aan saus?"
        },
        options: [
          { en: "Just to thin the sauce", es: "Solo para diluir la salsa", de: "Nur um die Sauce zu verdünnen", nl: "Alleen om de saus te verdunnen" },
          { en: "The starchy water helps emulsify and bind sauce to pasta while adding body and seasoning", es: "El agua con almidón ayuda a emulsionar y unir la salsa a la pasta mientras añade cuerpo y sazón", de: "Das stärkehaltige Wasser hilft Sauce zu emulgieren und an Nudeln zu binden während es Körper und Würze hinzufügt", nl: "Het zetmeelrijke water helpt saus te emulgeren en te binden aan pasta terwijl het body en kruiding toevoegt" },
          { en: "To cool down the sauce", es: "Para enfriar la salsa", de: "Um die Sauce abzukühlen", nl: "Om de saus af te koelen" },
          { en: "It has no purpose", es: "No tiene propósito", de: "Es hat keinen Zweck", nl: "Het heeft geen doel" }
        ],
        correct: 1,
        explanation: {
          en: "Pasta cooking water contains dissolved starch that acts as an emulsifier, helping oil-based and water-based components in sauce bind together. It also helps sauce cling to pasta rather than pooling at the bottom, adds body without diluting flavor (since it's already salted), and adjusts consistency perfectly. Professional chefs always reserve pasta water for finishing dishes.",
          es: "El agua de cocción de pasta contiene almidón disuelto que actúa como emulsionante, ayudando a componentes a base de aceite y agua en la salsa a unirse. También ayuda a que la salsa se adhiera a la pasta en lugar de acumularse en el fondo, añade cuerpo sin diluir el sabor (ya que ya está salada) y ajusta la consistencia perfectamente. Los chefs profesionales siempre reservan agua de pasta para terminar platos.",
          de: "Nudelkochwasser enthält gelöste Stärke, die als Emulgator wirkt und hilft, öl- und wasserbasierte Komponenten in der Sauce zu verbinden. Es hilft auch, dass Sauce an Nudeln haftet statt am Boden zu sammeln, fügt Körper hinzu ohne Geschmack zu verdünnen (da es bereits gesalzen ist) und passt Konsistenz perfekt an. Professionelle Köche reservieren immer Nudelwasser zum Abschluss von Gerichten.",
          nl: "Pasta kookwater bevat opgeloste zetmeel dat werkt als emulgator, helpt olie-gebaseerde en water-gebaseerde componenten in saus te binden. Het helpt ook saus aan pasta te kleven in plaats van op de bodem te verzamelen, voegt body toe zonder smaak te verdunnen (omdat het al gezouten is) en past consistentie perfect aan. Professionele koks reserveren altijd pasta water voor het afwerken van gerechten."
        }
      },
      {
        question: {
          en: "What is the 'bloom' phase when making custards or puddings?",
          es: "¿Qué es la fase de 'floración' al hacer natillas o pudines?",
          de: "Was ist die 'Bloom'-Phase beim Herstellen von Pudding oder Desserts?",
          nl: "Wat is de 'bloei' fase bij het maken van vla of pudding?"
        },
        options: [
          { en: "When custard turns brown", es: "Cuando la natilla se vuelve marrón", de: "Wenn Pudding braun wird", nl: "Wanneer vla bruin wordt" },
          { en: "Allowing gelatin to absorb liquid and swell before heating, ensuring smooth texture without lumps", es: "Permitir que la gelatina absorba líquido y se hinche antes de calentar, asegurando textura suave sin grumos", de: "Gelatine Flüssigkeit absorbieren und quellen lassen vor dem Erhitzen, um glatte Textur ohne Klumpen zu gewährleisten", nl: "Gelatine vloeistof laten absorberen en zwellen voor verhitting, zorgt voor gladde textuur zonder klonten" },
          { en: "Adding flower petals", es: "Añadir pétalos de flores", de: "Blütenblätter hinzufügen", nl: "Bloemblaadjes toevoegen" },
          { en: "The fermentation process", es: "El proceso de fermentación", de: "Der Fermentationsprozess", nl: "Het fermentatie proces" }
        ],
        correct: 1,
        explanation: {
          en: "Blooming gelatin involves sprinkling powdered gelatin over cold liquid and letting it sit for 5-10 minutes to absorb moisture and swell. This prevents lumps and ensures even dissolution when heated. The hydrated gelatin then melts smoothly into warm liquid, creating silky custards, panna cotta, or mousses. Skipping this step results in grainy, clumpy texture.",
          es: "Florecer gelatina implica espolvorear gelatina en polvo sobre líquido frío y dejarla reposar durante 5-10 minutos para absorber humedad e hincharse. Esto previene grumos y asegura disolución uniforme al calentar. La gelatina hidratada luego se derrite suavemente en líquido tibio, creando natillas sedosas, panna cotta o mousses. Omitir este paso resulta en textura granulosa y grumosa.",
          de: "Gelatine blühen lassen bedeutet, pulverförmige Gelatine über kalte Flüssigkeit zu streuen und 5-10 Minuten stehen zu lassen, um Feuchtigkeit zu absorbieren und zu quellen. Dies verhindert Klumpen und gewährleistet gleichmäßiges Auflösen beim Erhitzen. Die hydratisierte Gelatine schmilzt dann glatt in warme Flüssigkeit und schafft seidige Puddings, Panna Cotta oder Mousses. Das Überspringen dieses Schritts führt zu körniger, klumpiger Textur.",
          nl: "Gelatine laten bloeien houdt in dat poeder gelatine wordt gestrooid over koude vloeistof en 5-10 minuten laten staan om vocht te absorberen en te zwellen. Dit voorkomt klonten en zorgt voor gelijkmatige oplossing bij verhitting. De gehydrateerde gelatine smelt dan glad in warme vloeistof, creëert zijdezachte vla, panna cotta of mousses. Deze stap overslaan resulteert in korrelige, klonterige textuur."
        }
      },
      {
        question: {
          en: "What is the purpose of scoring or crosshatching vegetables like eggplant before cooking?",
          es: "¿Cuál es el propósito de marcar o rayar verduras como la berenjena antes de cocinar?",
          de: "Was ist der Zweck des Einschneidens oder Kreuzschraffierens von Gemüse wie Auberginen vor dem Kochen?",
          nl: "Wat is het doel van het insnijden of kruislings inkepen van groenten zoals aubergine voor het koken?"
        },
        options: [
          { en: "For decoration only", es: "Solo para decoración", de: "Nur zur Dekoration", nl: "Alleen voor decoratie" },
          { en: "Increases surface area for better seasoning penetration, promotes even cooking, and creates attractive presentation", es: "Aumenta el área de superficie para mejor penetración de condimentos, promueve cocción uniforme y crea presentación atractiva", de: "Erhöht Oberfläche für bessere Würzdurchdringung, fördert gleichmäßiges Garen und schafft attraktive Präsentation", nl: "Vergroot oppervlakte voor betere kruiding penetratie, bevordert gelijkmatig koken en creëert aantrekkelijke presentatie" },
          { en: "Makes it cook slower", es: "Hace que cocine más lento", de: "Lässt es langsamer kochen", nl: "Maakt het langzamer koken" },
          { en: "Removes the skin", es: "Elimina la piel", de: "Entfernt die Schale", nl: "Verwijdert de schil" }
        ],
        correct: 1,
        explanation: {
          en: "Scoring or crosshatching vegetables (making shallow cuts in a diamond or crosshatch pattern) increases surface area, allowing marinades, oils, and seasonings to penetrate deeper. It also helps vegetables cook more evenly by allowing heat to reach interior faster, releases steam to prevent sogginess, and creates an attractive presentation. Particularly effective for eggplant, zucchini, and squash.",
          es: "Marcar o rayar verduras (hacer cortes superficiales en patrón de diamante o rayado cruzado) aumenta el área de superficie, permitiendo que adobos, aceites y condimentos penetren más profundo. También ayuda a las verduras a cocinarse más uniformemente permitiendo que el calor llegue al interior más rápido, libera vapor para prevenir empapamiento y crea una presentación atractiva. Particularmente efectivo para berenjena, calabacín y calabaza.",
          de: "Einschneiden oder Kreuzschraffieren von Gemüse (flache Schnitte in Rauten- oder Kreuzschraffur-Muster machen) erhöht die Oberfläche und ermöglicht Marinaden, Ölen und Gewürzen, tiefer einzudringen. Es hilft auch Gemüse gleichmäßiger zu garen, indem Hitze schneller ins Innere gelangt, setzt Dampf frei um Durchweichen zu verhindern und schafft attraktive Präsentation. Besonders effektiv für Auberginen, Zucchini und Kürbis.",
          nl: "Groenten insnijden of kruislings inkepen (ondiepe sneden maken in diamant of kruislings patroon) vergroot oppervlakte, waardoor marinades, oliën en kruiden dieper kunnen doordringen. Het helpt ook groenten gelijkmatiger te koken door hitte sneller het binnenste te laten bereiken, geeft stoom vrij om doordrenking te voorkomen en creëert aantrekkelijke presentatie. Bijzonder effectief voor aubergine, courgette en pompoen."
        }
      },
      {
        question: {
          en: "What is the difference between simmering and boiling?",
          es: "¿Cuál es la diferencia entre hervir a fuego lento y hervir?",
          de: "Was ist der Unterschied zwischen Köcheln und Kochen?",
          nl: "Wat is het verschil tussen sudderen en koken?"
        },
        options: [
          { en: "No difference, same temperature", es: "Sin diferencia, misma temperatura", de: "Kein Unterschied, gleiche Temperatur", nl: "Geen verschil, zelfde temperatuur" },
          { en: "Simmering is gentler (180-205°F) with small bubbles; boiling is vigorous (212°F) with large rolling bubbles", es: "Hervir a fuego lento es más suave (82-96°C) con burbujas pequeñas; hervir es vigoroso (100°C) con burbujas grandes rodantes", de: "Köcheln ist sanfter (82-96°C) mit kleinen Blasen; Kochen ist kräftig (100°C) mit großen rollenden Blasen", nl: "Sudderen is zachter (82-96°C) met kleine bubbels; koken is krachtig (100°C) met grote rollende bubbels" },
          { en: "Simmering is hotter", es: "Hervir a fuego lento es más caliente", de: "Köcheln ist heißer", nl: "Sudderen is heter" },
          { en: "Only boiling uses water", es: "Solo hervir usa agua", de: "Nur Kochen verwendet Wasser", nl: "Alleen koken gebruikt water" }
        ],
        correct: 1,
        explanation: {
          en: "Simmering occurs at 180-205°F (82-96°C) with gentle, small bubbles occasionally breaking the surface, ideal for delicate vegetables, soups, and sauces to develop flavors without agitation. Boiling occurs at 212°F (100°C) at sea level with large, vigorous bubbles constantly breaking the surface, suitable for pasta, potatoes, and blanching vegetables. Aggressive boiling can break apart delicate foods and cause cloudy stocks.",
          es: "Hervir a fuego lento ocurre a 82-96°C con burbujas suaves y pequeñas que rompen ocasionalmente la superficie, ideal para verduras delicadas, sopas y salsas para desarrollar sabores sin agitación. Hervir ocurre a 100°C al nivel del mar con burbujas grandes y vigorosas que rompen constantemente la superficie, adecuado para pasta, papas y escaldar verduras. Hervir agresivamente puede deshacer alimentos delicados y causar caldos turbios.",
          de: "Köcheln tritt bei 82-96°C auf mit sanften, kleinen Blasen, die gelegentlich die Oberfläche durchbrechen, ideal für empfindliches Gemüse, Suppen und Saucen um Aromen ohne Bewegung zu entwickeln. Kochen tritt bei 100°C auf Meereshöhe auf mit großen, kräftigen Blasen, die ständig die Oberfläche durchbrechen, geeignet für Nudeln, Kartoffeln und Blanchieren von Gemüse. Aggressives Kochen kann empfindliche Lebensmittel zerbrechen und trübe Brühen verursachen.",
          nl: "Sudderen vindt plaats bij 82-96°C met zachte, kleine bubbels die af en toe het oppervlak doorbreken, ideaal voor delicate groenten, soepen en sauzen om smaken te ontwikkelen zonder roeren. Koken vindt plaats bij 100°C op zeeniveau met grote, krachtige bubbels die constant het oppervlak doorbreken, geschikt voor pasta, aardappelen en blancheren van groenten. Agressief koken kan delicate voedingsmiddelen uit elkaar breken en troebele bouillons veroorzaken."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  }
  return level7;
})();