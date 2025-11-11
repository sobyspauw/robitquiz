// Quiz - Level 1: Drinken - Wijn (Wijn basiskennis)
(function() {
  const level1 = {
    name: {
      en: "Wine Basics",
      es: "Conceptos Básicos del Vino",
      de: "Wein Grundlagen",
      nl: "Wijn Basiskennis"
    },
    questions: [
      {
        question: {
          en: "What is the main ingredient in wine?",
          es: "¿Cuál es el ingrediente principal del vino?",
          de: "Was ist die Hauptzutat im Wein?",
          nl: "Wat is het hoofdingrediënt in wijn?"
        },
        options: [
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Grapes", es: "Uvas", de: "Trauben", nl: "Druiven" },
          { en: "Sugar", es: "Azúcar", de: "Zucker", nl: "Suiker" },
          { en: "Alcohol", es: "Alcohol", de: "Alkohol", nl: "Alcohol" }
        ],
        correct: 1,
        explanation: {
          en: "Wine is primarily made from fermented grapes, though the alcohol and water content are also significant.",
          es: "El vino se hace principalmente de uvas fermentadas, aunque el contenido de alcohol y agua también es significativo.",
          de: "Wein wird hauptsächlich aus fermentierten Trauben hergestellt, obwohl der Alkohol- und Wassergehalt ebenfalls bedeutend ist.",
          nl: "Wijn wordt voornamelijk gemaakt van gefermenteerde druiven, hoewel het alcohol- en watergehalte ook significant is."
        }
      },
      {
        question: {
          en: "What are the three main types of wine?",
          es: "¿Cuáles son los tres tipos principales de vino?",
          de: "Was sind die drei Hauptarten von Wein?",
          nl: "Wat zijn de drie hoofdtypes wijn?"
        },
        options: [
          { en: "Sweet, dry, medium", es: "Dulce, seco, medio", de: "Süß, trocken, mittel", nl: "Zoet, droog, medium" },
          { en: "Red, white, rosé", es: "Tinto, blanco, rosado", de: "Rot, weiß, rosé", nl: "Rood, wit, rosé" },
          { en: "Young, aged, vintage", es: "Joven, añejado, vintage", de: "Jung, gereift, Jahrgang", nl: "Jong, gerijpt, vintage" },
          { en: "French, Italian, Spanish", es: "Francés, italiano, español", de: "Französisch, italienisch, spanisch", nl: "Frans, Italiaans, Spaans" }
        ],
        correct: 1,
        explanation: {
          en: "The three main types of wine are red, white, and rosé, distinguished by color and production method.",
          es: "Los tres tipos principales de vino son tinto, blanco y rosado, distinguidos por color y método de producción.",
          de: "Die drei Hauptarten von Wein sind rot, weiß und rosé, unterschieden durch Farbe und Produktionsmethode.",
          nl: "De drie hoofdtypes wijn zijn rood, wit en rosé, onderscheiden door kleur en productiemethode."
        }
      },
      {
        question: {
          en: "What process converts grape juice into wine?",
          es: "¿Qué proceso convierte el jugo de uva en vino?",
          de: "Welcher Prozess verwandelt Traubensaft in Wein?",
          nl: "Welk proces zet druivensap om in wijn?"
        },
        options: [
          { en: "Distillation", es: "Destilación", de: "Destillation", nl: "Destillatie" },
          { en: "Fermentation", es: "Fermentación", de: "Gärung", nl: "Fermentatie" },
          { en: "Filtration", es: "Filtración", de: "Filtration", nl: "Filtratie" },
          { en: "Pasteurization", es: "Pasteurización", de: "Pasteurisierung", nl: "Pasteurisatie" }
        ],
        correct: 1,
        explanation: {
          en: "Fermentation is the process where yeast converts the sugars in grape juice into alcohol and carbon dioxide.",
          es: "La fermentación es el proceso donde la levadura convierte los azúcares del jugo de uva en alcohol y dióxido de carbono.",
          de: "Gärung ist der Prozess, bei dem Hefe den Zucker im Traubensaft in Alkohol und Kohlendioxid umwandelt.",
          nl: "Fermentatie is het proces waarbij gist de suikers in druivensap omzet in alcohol en koolstofdioxide."
        }
      },
      {
        question: {
          en: "What gives red wine its color?",
          es: "¿Qué le da su color al vino tinto?",
          de: "Was verleiht Rotwein seine Farbe?",
          nl: "Wat geeft rode wijn zijn kleur?"
        },
        options: [
          { en: "Red grape juice", es: "Jugo de uva roja", de: "Roter Traubensaft", nl: "Rood druivensap" },
          { en: "Added coloring", es: "Colorante añadido", de: "Zugesetzte Farbstoffe", nl: "Toegevoegde kleurstoffen" },
          { en: "Grape skins", es: "Pieles de uva", de: "Traubenschalen", nl: "Druivenschillen" },
          { en: "Oak barrels", es: "Barricas de roble", de: "Eichenfässer", nl: "Eiken vaten" }
        ],
        correct: 2,
        explanation: {
          en: "Red wine gets its color from grape skins that remain in contact with the juice during fermentation.",
          es: "El vino tinto obtiene su color de las pieles de uva que permanecen en contacto con el jugo durante la fermentación.",
          de: "Rotwein erhält seine Farbe von Traubenschalen, die während der Gärung in Kontakt mit dem Saft bleiben.",
          nl: "Rode wijn krijgt zijn kleur van druivenschillen die tijdens de fermentatie in contact blijven met het sap."
        }
      },
      {
        question: {
          en: "What is the typical alcohol content of wine?",
          es: "¿Cuál es el contenido típico de alcohol del vino?",
          de: "Was ist der typische Alkoholgehalt von Wein?",
          nl: "Wat is het typische alcoholgehalte van wijn?"
        },
        options: [
          { en: "5-8%", es: "5-8%", de: "5-8%", nl: "5-8%" },
          { en: "12-15%", es: "12-15%", de: "12-15%", nl: "12-15%" },
          { en: "18-22%", es: "18-22%", de: "18-22%", nl: "18-22%" },
          { en: "25-30%", es: "25-30%", de: "25-30%", nl: "25-30%" }
        ],
        correct: 1,
        explanation: {
          en: "Most wines have an alcohol content between 12-15%, though this can vary depending on style and region.",
          es: "La mayoría de los vinos tienen un contenido de alcohol entre 12-15%, aunque esto puede variar según el estilo y la región.",
          de: "Die meisten Weine haben einen Alkoholgehalt zwischen 12-15%, obwohl dies je nach Stil und Region variieren kann.",
          nl: "De meeste wijnen hebben een alcoholgehalte tussen 12-15%, hoewel dit kan variëren afhankelijk van stijl en regio."
        }
      },
      {
        question: {
          en: "What is a vintage wine?",
          es: "¿Qué es un vino vintage?",
          de: "Was ist ein Vintage-Wein?",
          nl: "Wat is een vintage wijn?"
        },
        options: [
          { en: "A very old wine", es: "Un vino muy viejo", de: "Ein sehr alter Wein", nl: "Een zeer oude wijn" },
          { en: "Wine from a specific year", es: "Vino de un año específico", de: "Wein aus einem bestimmten Jahr", nl: "Wijn uit een specifiek jaar" },
          { en: "Expensive wine", es: "Vino caro", de: "Teurer Wein", nl: "Dure wijn" },
          { en: "French wine only", es: "Solo vino francés", de: "Nur französischer Wein", nl: "Alleen Franse wijn" }
        ],
        correct: 1,
        explanation: {
          en: "A vintage wine is made from grapes harvested in a specific year, which is indicated on the label.",
          es: "Un vino vintage está hecho de uvas cosechadas en un año específico, que se indica en la etiqueta.",
          de: "Ein Vintage-Wein wird aus Trauben hergestellt, die in einem bestimmten Jahr geerntet wurden, was auf dem Etikett angegeben ist.",
          nl: "Een vintage wijn is gemaakt van druiven geoogst in een specifiek jaar, wat op het etiket staat aangegeven."
        }
      },
      {
        question: {
          en: "What is the cork in wine bottles made from?",
          es: "¿De qué está hecha la corcha en las botellas de vino?",
          de: "Woraus besteht der Korken in Weinflaschen?",
          nl: "Waarvan is de kurk in wijnflessen gemaakt?"
        },
        options: [
          { en: "Plastic", es: "Plástico", de: "Kunststoff", nl: "Plastic" },
          { en: "Cork oak bark", es: "Corteza de alcornoque", de: "Korkeichenrinde", nl: "Kurkeikenbasb" },
          { en: "Rubber", es: "Goma", de: "Gummi", nl: "Rubber" },
          { en: "Wood pulp", es: "Pulpa de madera", de: "Holzfasern", nl: "Houtpulp" }
        ],
        correct: 1,
        explanation: {
          en: "Traditional wine corks are made from the bark of cork oak trees, primarily harvested in Portugal and Spain.",
          es: "Los corchos tradicionales de vino están hechos de la corteza de los alcornoques, cosechados principalmente en Portugal y España.",
          de: "Traditionelle Weinkorken werden aus der Rinde von Korkeichen hergestellt, die hauptsächlich in Portugal und Spanien geerntet werden.",
          nl: "Traditionele wijkkurken zijn gemaakt van de bast van kurkeiken, voornamelijk geoogst in Portugal en Spanje."
        }
      },
      {
        question: {
          en: "What is tannin in wine?",
          es: "¿Qué es el tanino en el vino?",
          de: "Was ist Tannin im Wein?",
          nl: "Wat is tannine in wijn?"
        },
        options: [
          { en: "A type of sugar", es: "Un tipo de azúcar", de: "Eine Art Zucker", nl: "Een soort suiker" },
          { en: "A natural compound that adds dryness", es: "Un compuesto natural que añade sequedad", de: "Eine natürliche Verbindung, die Trockenheit verleiht", nl: "Een natuurlijke verbinding die droogheid toevoegt" },
          { en: "An artificial preservative", es: "Un conservante artificial", de: "Ein künstliches Konservierungsmittel", nl: "Een kunstmatig conserveermiddel" },
          { en: "A type of acid", es: "Un tipo de ácido", de: "Eine Art Säure", nl: "Een soort zuur" }
        ],
        correct: 1,
        explanation: {
          en: "Tannins are natural compounds found in grape skins, seeds, and stems that give wine structure and a dry, astringent feeling.",
          es: "Los taninos son compuestos naturales encontrados en las pieles, semillas y tallos de las uvas que dan estructura al vino y una sensación seca y astringente.",
          de: "Tannine sind natürliche Verbindungen in Traubenschalen, -kernen und -stielen, die dem Wein Struktur und ein trockenes, zusammenziehendes Gefühl verleihen.",
          nl: "Tannines zijn natuurlijke verbindingen in druivenschillen, -pitten en -stengels die wijn structuur geven en een droog, samentrekkend gevoel."
        }
      },
      {
        question: {
          en: "What does 'dry' mean when describing wine?",
          es: "¿Qué significa 'seco' al describir el vino?",
          de: "Was bedeutet 'trocken' bei der Beschreibung von Wein?",
          nl: "Wat betekent 'droog' bij het beschrijven van wijn?"
        },
        options: [
          { en: "Low alcohol content", es: "Bajo contenido de alcohol", de: "Niedriger Alkoholgehalt", nl: "Laag alcoholgehalte" },
          { en: "No residual sugar", es: "Sin azúcar residual", de: "Kein Restzucker", nl: "Geen restsuiker" },
          { en: "Aged for a long time", es: "Envejecido por mucho tiempo", de: "Lange gereift", nl: "Lang gerijpt" },
          { en: "High acidity", es: "Alta acidez", de: "Hohe Säure", nl: "Hoge zuurgraad" }
        ],
        correct: 1,
        explanation: {
          en: "A 'dry' wine has little to no residual sugar, meaning the yeast consumed most of the grape sugars during fermentation.",
          es: "Un vino 'seco' tiene poco o nada de azúcar residual, lo que significa que la levadura consumió la mayoría de los azúcares de la uva durante la fermentación.",
          de: "Ein 'trockener' Wein hat wenig bis keinen Restzucker, was bedeutet, dass die Hefe die meisten Traubenzucker während der Gärung verbraucht hat.",
          nl: "Een 'droge' wijn heeft weinig tot geen restsuiker, wat betekent dat de gist de meeste druivensuikers tijdens fermentatie heeft verbruikt."
        }
      },
      {
        question: {
          en: "What is the ideal serving temperature for red wine?",
          es: "¿Cuál es la temperatura ideal para servir vino tinto?",
          de: "Was ist die ideale Serviertemperatur für Rotwein?",
          nl: "Wat is de ideale serveertemperatuur voor rode wijn?"
        },
        options: [
          { en: "Ice cold (5-8°C)", es: "Muy frío (5-8°C)", de: "Eiskalt (5-8°C)", nl: "IJskoud (5-8°C)" },
          { en: "Cellar temperature (10-13°C)", es: "Temperatura de bodega (10-13°C)", de: "Kellertemperatur (10-13°C)", nl: "Keldertemperatuur (10-13°C)" },
          { en: "Room temperature (16-18°C)", es: "Temperatura ambiente (16-18°C)", de: "Zimmertemperatur (16-18°C)", nl: "Kamertemperatuur (16-18°C)" },
          { en: "Very warm (25-30°C)", es: "Muy caliente (25-30°C)", de: "Sehr warm (25-30°C)", nl: "Zeer warm (25-30°C)" }
        ],
        correct: 2,
        explanation: {
          en: "Red wine is best served at room temperature (16-18°C) to allow its flavors and aromas to fully develop.",
          es: "El vino tinto se sirve mejor a temperatura ambiente (16-18°C) para permitir que sus sabores y aromas se desarrollen completamente.",
          de: "Rotwein wird am besten bei Zimmertemperatur (16-18°C) serviert, damit sich seine Aromen und Geschmäcker voll entfalten können.",
          nl: "Rode wijn wordt het best geserveerd op kamertemperatuur (16-18°C) om zijn smaken en aroma's volledig te laten ontwikkelen."
        }
      },
      {
        question: {
          en: "Which wine is typically served chilled?",
          es: "¿Qué vino se sirve típicamente frío?",
          de: "Welcher Wein wird typischerweise gekühlt serviert?",
          nl: "Welke wijn wordt typisch gekoeld geserveerd?"
        },
        options: [
          { en: "Red wine", es: "Vino tinto", de: "Rotwein", nl: "Rode wijn" },
          { en: "White wine", es: "Vino blanco", de: "Weißwein", nl: "Witte wijn" },
          { en: "Both equally", es: "Ambos por igual", de: "Beide gleich", nl: "Beide even" },
          { en: "Neither", es: "Ninguno", de: "Keiner", nl: "Geen van beide" }
        ],
        correct: 1,
        explanation: {
          en: "White wine is typically served chilled (8-12°C) to preserve its fresh, crisp flavors and aromas.",
          es: "El vino blanco se sirve típicamente frío (8-12°C) para preservar sus sabores y aromas frescos y crujientes.",
          de: "Weißwein wird typischerweise gekühlt (8-12°C) serviert, um seine frischen, knackigen Aromen und Geschmäcker zu bewahren.",
          nl: "Witte wijn wordt typisch gekoeld (8-12°C) geserveerd om zijn frisse, knapperige smaken en aroma's te behouden."
        }
      },
      {
        question: {
          en: "What shape is a standard wine bottle?",
          es: "¿Qué forma tiene una botella de vino estándar?",
          de: "Welche Form hat eine Standard-Weinflasche?",
          nl: "Welke vorm heeft een standaard wijnfles?"
        },
        options: [
          { en: "Square", es: "Cuadrada", de: "Quadratisch", nl: "Vierkant" },
          { en: "Cylindrical", es: "Cilíndrica", de: "Zylindrisch", nl: "Cilindrisch" },
          { en: "Spherical", es: "Esférica", de: "Kugelförmig", nl: "Bolvormig" },
          { en: "Flat", es: "Plana", de: "Flach", nl: "Plat" }
        ],
        correct: 1,
        explanation: {
          en: "Standard wine bottles are cylindrical in shape, making them easy to store horizontally and stack efficiently.",
          es: "Las botellas de vino estándar son de forma cilíndrica, lo que facilita su almacenamiento horizontal y apilamiento eficiente.",
          de: "Standard-Weinflaschen sind zylindrisch geformt, was eine horizontale Lagerung und effizientes Stapeln erleichtert.",
          nl: "Standaard wijnflessen zijn cilindrisch van vorm, waardoor ze gemakkelijk horizontaal op te slaan en efficiënt te stapelen zijn."
        }
      },
      {
        question: {
          en: "What does 'rosé' wine look like?",
          es: "¿Cómo se ve el vino rosado?",
          de: "Wie sieht Roséwein aus?",
          nl: "Hoe ziet rosé wijn eruit?"
        },
        options: [
          { en: "Deep red", es: "Rojo profundo", de: "Tiefrot", nl: "Dieprood" },
          { en: "Pink or light red", es: "Rosa o rojo claro", de: "Rosa oder hellrot", nl: "Roze of lichtrood" },
          { en: "Golden yellow", es: "Amarillo dorado", de: "Goldgelb", nl: "Goudgeel" },
          { en: "Clear like water", es: "Transparente como agua", de: "Klar wie Wasser", nl: "Helder als water" }
        ],
        correct: 1,
        explanation: {
          en: "Rosé wine has a pink or light red color, achieved by brief contact between grape juice and red grape skins.",
          es: "El vino rosado tiene un color rosa o rojo claro, logrado por contacto breve entre el jugo de uva y las pieles de uva roja.",
          de: "Roséwein hat eine rosa oder hellrote Farbe, die durch kurzen Kontakt zwischen Traubensaft und roten Traubenschalen erreicht wird.",
          nl: "Rosé wijn heeft een roze of lichtrode kleur, bereikt door kort contact tussen druivensap en rode druivenschillen."
        }
      },
      {
        question: {
          en: "How much wine is in a standard bottle?",
          es: "¿Cuánto vino hay en una botella estándar?",
          de: "Wie viel Wein ist in einer Standardflasche?",
          nl: "Hoeveel wijn zit er in een standaard fles?"
        },
        options: [
          { en: "500 ml", es: "500 ml", de: "500 ml", nl: "500 ml" },
          { en: "750 ml", es: "750 ml", de: "750 ml", nl: "750 ml" },
          { en: "1000 ml", es: "1000 ml", de: "1000 ml", nl: "1000 ml" },
          { en: "1500 ml", es: "1500 ml", de: "1500 ml", nl: "1500 ml" }
        ],
        correct: 1,
        explanation: {
          en: "A standard wine bottle contains 750 milliliters (75 centiliters), which equals approximately 5 glasses of wine.",
          es: "Una botella de vino estándar contiene 750 mililitros (75 centilitros), lo que equivale a aproximadamente 5 copas de vino.",
          de: "Eine Standard-Weinflasche enthält 750 Milliliter (75 Zentiliter), was ungefähr 5 Gläsern Wein entspricht.",
          nl: "Een standaard wijnfles bevat 750 milliliter (75 centiliter), wat ongeveer 5 glazen wijn is."
        }
      },
      {
        question: {
          en: "What is sparkling wine?",
          es: "¿Qué es el vino espumoso?",
          de: "Was ist Schaumwein?",
          nl: "Wat is mousserende wijn?"
        },
        options: [
          { en: "Wine with bubbles", es: "Vino con burbujas", de: "Wein mit Blasen", nl: "Wijn met bubbels" },
          { en: "Very clear wine", es: "Vino muy claro", de: "Sehr klarer Wein", nl: "Zeer heldere wijn" },
          { en: "Sweet wine", es: "Vino dulce", de: "Süßer Wein", nl: "Zoete wijn" },
          { en: "Shiny wine", es: "Vino brillante", de: "Glänzender Wein", nl: "Glanzende wijn" }
        ],
        correct: 0,
        explanation: {
          en: "Sparkling wine is wine with bubbles created by carbon dioxide, produced through secondary fermentation.",
          es: "El vino espumoso es vino con burbujas creadas por dióxido de carbono, producidas a través de fermentación secundaria.",
          de: "Schaumwein ist Wein mit Blasen, die durch Kohlendioxid entstehen, produziert durch sekundäre Gärung.",
          nl: "Mousserende wijn is wijn met bubbels die worden gemaakt door koolstofdioxide, geproduceerd door secundaire fermentatie."
        }
      },
      {
        question: {
          en: "Where should wine be stored?",
          es: "¿Dónde debe almacenarse el vino?",
          de: "Wo sollte Wein gelagert werden?",
          nl: "Waar moet wijn worden opgeslagen?"
        },
        options: [
          { en: "In direct sunlight", es: "Bajo luz solar directa", de: "In direktem Sonnenlicht", nl: "In direct zonlicht" },
          { en: "In a warm kitchen", es: "En una cocina caliente", de: "In einer warmen Küche", nl: "In een warme keuken" },
          { en: "Cool, dark place", es: "Lugar fresco y oscuro", de: "Kühler, dunkler Ort", nl: "Koele, donkere plaats" },
          { en: "In the freezer", es: "En el congelador", de: "Im Gefrierschrank", nl: "In de vriezer" }
        ],
        correct: 2,
        explanation: {
          en: "Wine should be stored in a cool, dark place with stable temperature (12-15°C) to preserve its quality.",
          es: "El vino debe almacenarse en un lugar fresco y oscuro con temperatura estable (12-15°C) para preservar su calidad.",
          de: "Wein sollte an einem kühlen, dunklen Ort mit stabiler Temperatur (12-15°C) gelagert werden, um seine Qualität zu bewahren.",
          nl: "Wijn moet worden opgeslagen op een koele, donkere plaats met stabiele temperatuur (12-15°C) om zijn kwaliteit te behouden."
        }
      },
      {
        question: {
          en: "What is dessert wine?",
          es: "¿Qué es el vino de postre?",
          de: "Was ist Dessertwein?",
          nl: "Wat is dessertwijn?"
        },
        options: [
          { en: "Wine served with dessert", es: "Vino servido con postre", de: "Wein zum Nachtisch serviert", nl: "Wijn geserveerd bij dessert" },
          { en: "Sweet wine", es: "Vino dulce", de: "Süßer Wein", nl: "Zoete wijn" },
          { en: "Both are correct", es: "Ambos son correctos", de: "Beides ist richtig", nl: "Beide zijn correct" },
          { en: "Wine made from desserts", es: "Vino hecho de postres", de: "Wein aus Desserts hergestellt", nl: "Wijn gemaakt van desserts" }
        ],
        correct: 2,
        explanation: {
          en: "Dessert wine is sweet wine typically served with or as dessert, containing higher residual sugar levels.",
          es: "El vino de postre es vino dulce típicamente servido con o como postre, conteniendo niveles más altos de azúcar residual.",
          de: "Dessertwein ist süßer Wein, der typischerweise zum oder als Nachtisch serviert wird und höhere Restzuckerwerte enthält.",
          nl: "Dessertwijn is zoete wijn die typisch bij of als dessert wordt geserveerd, met hogere restsuikerniveaus."
        }
      },
      {
        question: {
          en: "Why are wine bottles usually dark colored?",
          es: "¿Por qué las botellas de vino suelen ser de color oscuro?",
          de: "Warum sind Weinflaschen normalerweise dunkel gefärbt?",
          nl: "Waarom zijn wijnflessen meestal donker gekleurd?"
        },
        options: [
          { en: "To look elegant", es: "Para verse elegante", de: "Um elegant auszusehen", nl: "Om elegant te lijken" },
          { en: "To protect from light", es: "Para proteger de la luz", de: "Um vor Licht zu schützen", nl: "Om te beschermen tegen licht" },
          { en: "To hide sediment", es: "Para ocultar sedimento", de: "Um Sediment zu verbergen", nl: "Om sediment te verbergen" },
          { en: "They are cheaper", es: "Son más baratos", de: "Sie sind billiger", nl: "Ze zijn goedkoper" }
        ],
        correct: 1,
        explanation: {
          en: "Dark colored bottles protect wine from harmful UV light, which can cause premature aging and off-flavors.",
          es: "Las botellas de color oscuro protegen el vino de la luz UV dañina, que puede causar envejecimiento prematuro y sabores desagradables.",
          de: "Dunkel gefärbte Flaschen schützen Wein vor schädlichem UV-Licht, das vorzeitiges Altern und Fehlaromen verursachen kann.",
          nl: "Donker gekleurde flessen beschermen wijn tegen schadelijk UV-licht, dat voortijdige veroudering en ongewenste smaken kan veroorzaken."
        }
      },
      {
        question: {
          en: "What does 'sec' mean on a wine label?",
          es: "¿Qué significa 'sec' en una etiqueta de vino?",
          de: "Was bedeutet 'sec' auf einem Weinetikett?",
          nl: "Wat betekent 'sec' op een wijnetiket?"
        },
        options: [
          { en: "Sweet", es: "Dulce", de: "Süß", nl: "Zoet" },
          { en: "Dry", es: "Seco", de: "Trocken", nl: "Droog" },
          { en: "Old", es: "Viejo", de: "Alt", nl: "Oud" },
          { en: "Red", es: "Tinto", de: "Rot", nl: "Rood" }
        ],
        correct: 1,
        explanation: {
          en: "'Sec' is French for 'dry', indicating the wine has little to no residual sugar.",
          es: "'Sec' es francés para 'seco', indicando que el vino tiene poco o nada de azúcar residual.",
          de: "'Sec' ist Französisch für 'trocken' und zeigt an, dass der Wein wenig bis keinen Restzucker hat.",
          nl: "'Sec' is Frans voor 'droog', wat aangeeft dat de wijn weinig tot geen restsuiker heeft."
        }
      },
      {
        question: {
          en: "What is a wine glass stem for?",
          es: "¿Para qué sirve el tallo de una copa de vino?",
          de: "Wofür ist der Stiel eines Weinglases?",
          nl: "Waarvoor is een wijnglas steel?"
        },
        options: [
          { en: "Decoration only", es: "Solo decoración", de: "Nur Dekoration", nl: "Alleen decoratie" },
          { en: "To hold without warming wine", es: "Para sostener sin calentar el vino", de: "Zum Halten ohne den Wein zu erwärmen", nl: "Om vast te houden zonder wijn te verwarmen" },
          { en: "To make glass taller", es: "Para hacer el vaso más alto", de: "Um das Glas höher zu machen", nl: "Om het glas hoger te maken" },
          { en: "To prevent spilling", es: "Para evitar derrames", de: "Um Verschütten zu verhindern", nl: "Om morsen te voorkomen" }
        ],
        correct: 1,
        explanation: {
          en: "The stem allows you to hold the glass without warming the wine with your hand, maintaining proper serving temperature.",
          es: "El tallo le permite sostener la copa sin calentar el vino con la mano, manteniendo la temperatura de servicio adecuada.",
          de: "Der Stiel ermöglicht es, das Glas zu halten, ohne den Wein mit der Hand zu erwärmen und so die richtige Serviertemperatur beizubehalten.",
          nl: "De steel stelt je in staat het glas vast te houden zonder de wijn met je hand te verwarmen, waardoor de juiste serveertemperatuur behouden blijft."
        }
      },
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();
