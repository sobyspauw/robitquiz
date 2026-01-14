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
      {
        question: {
          en: "What are grapes that make wine called?",
          es: "¿Cómo se llaman las uvas que hacen vino?",
          de: "Wie werden Trauben genannt, die Wein machen?",
          nl: "Hoe heten druiven die wijn maken?"
        },
        options: [
          { en: "Table grapes", es: "Uvas de mesa", de: "Tafeltrauben", nl: "Tafeldruiven" },
          { en: "Wine grapes", es: "Uvas viníferas", de: "Weintrauben", nl: "Wijndruiven" },
          { en: "Juice grapes", es: "Uvas de jugo", de: "Safttrauben", nl: "Sapdruiven" },
          { en: "Dessert grapes", es: "Uvas de postre", de: "Desserttrauben", nl: "Dessertdruiven" }
        ],
        correct: 1,
        explanation: {
          en: "Wine grapes (vitis vinifera) are smaller, sweeter, and have thicker skins than table grapes.",
          es: "Las uvas viníferas (vitis vinifera) son más pequeñas, más dulces y tienen pieles más gruesas que las uvas de mesa.",
          de: "Weintrauben (vitis vinifera) sind kleiner, süßer und haben dickere Schalen als Tafeltrauben.",
          nl: "Wijndruiven (vitis vinifera) zijn kleiner, zoeter en hebben dikkere schillen dan tafeldruiven."
        }
      },
      {
        question: {
          en: "Which country produces the most wine?",
          es: "¿Qué país produce más vino?",
          de: "Welches Land produziert den meisten Wein?",
          nl: "Welk land produceert de meeste wijn?"
        },
        options: [
          { en: "Spain", es: "España", de: "Spanien", nl: "Spanje" },
          { en: "United States", es: "Estados Unidos", de: "Vereinigte Staaten", nl: "Verenigde Staten" },
          { en: "Italy", es: "Italia", de: "Italien", nl: "Italië" },
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" }
        ],
        correct: 2,
        explanation: {
          en: "Italy is typically the world's largest wine producer, competing closely with France and Spain.",
          es: "Italia es típicamente el mayor productor de vino del mundo, compitiendo de cerca con Francia y España.",
          de: "Italien ist typischerweise der weltgrößte Weinproduzent und konkurriert eng mit Frankreich und Spanien.",
          nl: "Italië is doorgaans 's werelds grootste wijnproducent, in nauwe concurrentie met Frankrijk en Spanje."
        }
      },
      {
        question: {
          en: "What is a sommelier?",
          es: "¿Qué es un sommelier?",
          de: "Was ist ein Sommelier?",
          nl: "Wat is een sommelier?"
        },
        options: [
          { en: "A wine expert", es: "Un experto en vinos", de: "Ein Weinexperte", nl: "Een wijnexpert" },
          { en: "A grape farmer", es: "Un agricultor de uvas", de: "Ein Traubenbauer", nl: "Een druiventeler" },
          { en: "A bottle maker", es: "Un fabricante de botellas", de: "Ein Flaschenmacher", nl: "Een flessenmaker" },
          { en: "A wine seller", es: "Un vendedor de vino", de: "Ein Weinverkäufer", nl: "Een wijnverkoper" }
        ],
        correct: 0,
        explanation: {
          en: "A sommelier is a trained wine professional who specializes in wine service and food pairing.",
          es: "Un sommelier es un profesional capacitado en vinos que se especializa en servicio de vino y maridaje con comida.",
          de: "Ein Sommelier ist ein ausgebildeter Weinprofi, der sich auf Weinservice und Speisenpaarung spezialisiert.",
          nl: "Een sommelier is een getrainde wijnprofessional die gespecialiseerd is in wijnservice en voedselcombinaties."
        }
      },
      {
        question: {
          en: "What is a vineyard?",
          es: "¿Qué es un viñedo?",
          de: "Was ist ein Weinberg?",
          nl: "Wat is een wijngaard?"
        },
        options: [
          { en: "A wine shop", es: "Una tienda de vinos", de: "Ein Weinladen", nl: "Een wijnwinkel" },
          { en: "A place where grapes are grown", es: "Un lugar donde se cultivan uvas", de: "Ein Ort wo Trauben angebaut werden", nl: "Een plaats waar druiven worden geteeld" },
          { en: "A wine factory", es: "Una fábrica de vino", de: "Eine Weinfabrik", nl: "Een wijnfabriek" },
          { en: "A wine cellar", es: "Una bodega de vino", de: "Ein Weinkeller", nl: "Een wijnkelder" }
        ],
        correct: 1,
        explanation: {
          en: "A vineyard is a plantation of grape-bearing vines grown for winemaking.",
          es: "Un viñedo es una plantación de vides que dan uvas cultivadas para hacer vino.",
          de: "Ein Weinberg ist eine Plantage von traubentragenden Reben, die für die Weinherstellung angebaut werden.",
          nl: "Een wijngaard is een plantage van druivendragende wijnstokken geteeld voor wijnproductie."
        }
      },
      {
        question: {
          en: "What does 'bouquet' mean in wine?",
          es: "¿Qué significa 'bouquet' en el vino?",
          de: "Was bedeutet 'Bouquet' beim Wein?",
          nl: "Wat betekent 'bouquet' bij wijn?"
        },
        options: [
          { en: "The wine's color", es: "El color del vino", de: "Die Farbe des Weins", nl: "De kleur van de wijn" },
          { en: "The wine's smell", es: "El olor del vino", de: "Der Geruch des Weins", nl: "De geur van de wijn" },
          { en: "The wine's taste", es: "El sabor del vino", de: "Der Geschmack des Weins", nl: "De smaak van de wijn" },
          { en: "The wine's price", es: "El precio del vino", de: "Der Preis des Weins", nl: "De prijs van de wijn" }
        ],
        correct: 1,
        explanation: {
          en: "Bouquet refers to the complex aromas that develop in wine as it ages.",
          es: "Bouquet se refiere a los aromas complejos que se desarrollan en el vino a medida que envejece.",
          de: "Bouquet bezieht sich auf die komplexen Aromen, die sich im Wein während der Reifung entwickeln.",
          nl: "Bouquet verwijst naar de complexe aroma's die zich in wijn ontwikkelen naarmate het rijpt."
        }
      },
      {
        question: {
          en: "What is Champagne?",
          es: "¿Qué es el Champagne?",
          de: "Was ist Champagner?",
          nl: "Wat is Champagne?"
        },
        options: [
          { en: "Any sparkling wine", es: "Cualquier vino espumoso", de: "Jeder Schaumwein", nl: "Elke mousserende wijn" },
          { en: "Sparkling wine from Champagne, France", es: "Vino espumoso de Champagne, Francia", de: "Schaumwein aus der Champagne, Frankreich", nl: "Mousserende wijn uit Champagne, Frankrijk" },
          { en: "Sweet white wine", es: "Vino blanco dulce", de: "Süßer Weißwein", nl: "Zoete witte wijn" },
          { en: "A type of grape", es: "Un tipo de uva", de: "Eine Traubensorte", nl: "Een soort druif" }
        ],
        correct: 1,
        explanation: {
          en: "True Champagne only comes from the Champagne region of France; others are called sparkling wine.",
          es: "El verdadero Champagne solo proviene de la región de Champagne de Francia; otros se llaman vino espumoso.",
          de: "Echter Champagner kommt nur aus der Champagne-Region in Frankreich; andere werden Schaumwein genannt.",
          nl: "Echte Champagne komt alleen uit de Champagne-regio van Frankrijk; anderen worden mousserende wijn genoemd."
        }
      },
      {
        question: {
          en: "Why do people swirl wine in a glass?",
          es: "¿Por qué la gente gira el vino en una copa?",
          de: "Warum schwenken Menschen Wein im Glas?",
          nl: "Waarom draaien mensen wijn in een glas?"
        },
        options: [
          { en: "To cool it down", es: "Para enfriarlo", de: "Um ihn abzukühlen", nl: "Om het af te koelen" },
          { en: "To release aromas", es: "Para liberar aromas", de: "Um Aromen freizusetzen", nl: "Om aroma's vrij te maken" },
          { en: "To mix in air bubbles", es: "Para mezclar burbujas de aire", de: "Um Luftblasen einzumischen", nl: "Om luchtbellen te mengen" },
          { en: "Just for show", es: "Solo para presumir", de: "Nur zur Schau", nl: "Alleen voor de show" }
        ],
        correct: 1,
        explanation: {
          en: "Swirling wine aerates it and releases aromatic compounds, enhancing the tasting experience.",
          es: "Girar el vino lo airea y libera compuestos aromáticos, mejorando la experiencia de degustación.",
          de: "Das Schwenken von Wein belüftet ihn und setzt aromatische Verbindungen frei, was das Geschmackserlebnis verbessert.",
          nl: "Wijn draaien belucht het en geeft aromatische verbindingen vrij, wat de proevervaringverbetert."
        }
      },
      {
        question: {
          en: "What is the difference between white and red wine production?",
          es: "¿Cuál es la diferencia entre la producción de vino blanco y tinto?",
          de: "Was ist der Unterschied zwischen Weißwein- und Rotweinproduktion?",
          nl: "Wat is het verschil tussen witte en rode wijnproductie?"
        },
        options: [
          { en: "Temperature only", es: "Solo temperatura", de: "Nur Temperatur", nl: "Alleen temperatuur" },
          { en: "Contact time with grape skins", es: "Tiempo de contacto con pieles de uva", de: "Kontaktzeit mit Traubenschalen", nl: "Contacttijd met druivenschillen" },
          { en: "Type of barrel used", es: "Tipo de barrica usada", de: "Art des verwendeten Fasses", nl: "Type vat gebruikt" },
          { en: "Amount of sugar added", es: "Cantidad de azúcar añadida", de: "Menge des zugesetzten Zuckers", nl: "Hoeveelheid toegevoegde suiker" }
        ],
        correct: 1,
        explanation: {
          en: "Red wine is fermented with grape skins for color and tannins, while white wine skins are removed early.",
          es: "El vino tinto se fermenta con pieles de uva para color y taninos, mientras que las pieles del vino blanco se eliminan temprano.",
          de: "Rotwein wird mit Traubenschalen für Farbe und Tannine fermentiert, während Weißweinschalen früh entfernt werden.",
          nl: "Rode wijn wordt gefermenteerd met druivenschillen voor kleur en tannines, terwijl witte wijnschillen vroeg worden verwijderd."
        }
      },
      {
        question: {
          en: "What does 'body' mean when describing wine?",
          es: "¿Qué significa 'cuerpo' al describir el vino?",
          de: "Was bedeutet 'Körper' bei der Beschreibung von Wein?",
          nl: "Wat betekent 'body' bij het beschrijven van wijn?"
        },
        options: [
          { en: "The weight or thickness of wine", es: "El peso o grosor del vino", de: "Das Gewicht oder die Dicke des Weins", nl: "Het gewicht of de dikte van wijn" },
          { en: "The bottle shape", es: "La forma de la botella", de: "Die Form der Flasche", nl: "De vorm van de fles" },
          { en: "The color intensity", es: "La intensidad del color", de: "Die Farbintensität", nl: "De kleurintensiteit" },
          { en: "The age of wine", es: "La edad del vino", de: "Das Alter des Weins", nl: "De leeftijd van wijn" }
        ],
        correct: 0,
        explanation: {
          en: "Body describes how heavy or light wine feels in your mouth, ranging from light to full-bodied.",
          es: "El cuerpo describe qué tan pesado o ligero se siente el vino en la boca, desde ligero hasta con mucho cuerpo.",
          de: "Körper beschreibt wie schwer oder leicht sich Wein im Mund anfühlt, von leicht bis vollmundig.",
          nl: "Body beschrijft hoe zwaar of licht wijn aanvoelt in je mond, variërend van licht tot volmondig."
        }
      },
      {
        question: {
          en: "What are the legs or tears in wine?",
          es: "¿Qué son las lágrimas en el vino?",
          de: "Was sind die Beine oder Tränen im Wein?",
          nl: "Wat zijn de benen of tranen in wijn?"
        },
        options: [
          { en: "Drops running down glass sides", es: "Gotas que corren por los lados del vaso", de: "Tropfen die am Glas herunterlaufen", nl: "Druppels die langs de glaskant lopen" },
          { en: "Bubbles in sparkling wine", es: "Burbujas en vino espumoso", de: "Blasen im Schaumwein", nl: "Bubbels in mousserende wijn" },
          { en: "Sediment at bottle bottom", es: "Sedimento en el fondo de la botella", de: "Sediment am Flaschenboden", nl: "Sediment op de flesbodem" },
          { en: "Ice crystals in cold wine", es: "Cristales de hielo en vino frío", de: "Eiskristalle in kaltem Wein", nl: "IJskristallen in koude wijn" }
        ],
        correct: 0,
        explanation: {
          en: "Legs or tears are streaks that form on glass sides when wine is swirled, indicating alcohol and glycerin content.",
          es: "Las lágrimas son rayas que se forman en los lados del vaso cuando se gira el vino, indicando contenido de alcohol y glicerina.",
          de: "Beine oder Tränen sind Streifen die sich an Glasseiten bilden wenn Wein geschwenkt wird, zeigen Alkohol- und Glyceringehalt.",
          nl: "Benen of tranen zijn strepen die zich vormen aan de glaskant wanneer wijn wordt gedraaid, wat alcohol- en glycerinegehalte aangeeft."
        }
      },
      {
        question: {
          en: "Why do wine bottles have a punt (indent) at the bottom?",
          es: "¿Por qué las botellas de vino tienen una hendidura en el fondo?",
          de: "Warum haben Weinflaschen eine Vertiefung am Boden?",
          nl: "Waarom hebben wijnflessen een punt (inham) aan de onderkant?"
        },
        options: [
          { en: "Just for decoration", es: "Solo para decoración", de: "Nur zur Dekoration", nl: "Alleen voor decoratie" },
          { en: "Structural strength and sediment collection", es: "Fuerza estructural y recolección de sedimento", de: "Strukturelle Festigkeit und Sedimentsammlung", nl: "Structurele sterkte en sedimentverzameling" },
          { en: "To use less glass", es: "Para usar menos vidrio", de: "Um weniger Glas zu verwenden", nl: "Om minder glas te gebruiken" },
          { en: "To make bottles taller", es: "Para hacer botellas más altas", de: "Um Flaschen höher zu machen", nl: "Om flessen hoger te maken" }
        ],
        correct: 1,
        explanation: {
          en: "The punt strengthens the bottle and helps collect sediment away from the pour.",
          es: "La hendidura fortalece la botella y ayuda a recolectar sedimento lejos del vertido.",
          de: "Die Vertiefung stärkt die Flasche und hilft Sediment vom Ausgießen fernzuhalten.",
          nl: "De punt versterkt de fles en helpt sediment weg te houden van het schenken."
        }
      },
      {
        question: {
          en: "What temperature should white wine be served at?",
          es: "¿A qué temperatura debe servirse el vino blanco?",
          de: "Bei welcher Temperatur sollte Weißwein serviert werden?",
          nl: "Op welke temperatuur moet witte wijn worden geserveerd?"
        },
        options: [
          { en: "8-12°C", es: "8-12°C", de: "8-12°C", nl: "8-12°C" },
          { en: "16-18°C", es: "16-18°C", de: "16-18°C", nl: "16-18°C" },
          { en: "20-25°C", es: "20-25°C", de: "20-25°C", nl: "20-25°C" },
          { en: "0-5°C", es: "0-5°C", de: "0-5°C", nl: "0-5°C" }
        ],
        correct: 0,
        explanation: {
          en: "White wine is best served chilled at 8-12°C to preserve its crisp, fresh characteristics.",
          es: "El vino blanco se sirve mejor frío a 8-12°C para preservar sus características frescas y crujientes.",
          de: "Weißwein wird am besten gekühlt bei 8-12°C serviert, um seine knackigen, frischen Eigenschaften zu bewahren.",
          nl: "Witte wijn wordt het best gekoeld geserveerd op 8-12°C om zijn knapperige, frisse kenmerken te behouden."
        }
      },
      {
        question: {
          en: "What is a wine aerator used for?",
          es: "¿Para qué se usa un aireador de vino?",
          de: "Wofür wird ein Weinbelüfter verwendet?",
          nl: "Waarvoor wordt een wijnbeluchter gebruikt?"
        },
        options: [
          { en: "To cool wine quickly", es: "Para enfriar vino rápidamente", de: "Um Wein schnell zu kühlen", nl: "Om wijn snel te koelen" },
          { en: "To expose wine to air", es: "Para exponer vino al aire", de: "Um Wein der Luft auszusetzen", nl: "Om wijn aan lucht bloot te stellen" },
          { en: "To filter sediment", es: "Para filtrar sedimento", de: "Um Sediment zu filtern", nl: "Om sediment te filteren" },
          { en: "To measure alcohol content", es: "Para medir contenido de alcohol", de: "Um Alkoholgehalt zu messen", nl: "Om alcoholgehalte te meten" }
        ],
        correct: 1,
        explanation: {
          en: "An aerator exposes wine to oxygen, softening tannins and enhancing flavors and aromas.",
          es: "Un aireador expone el vino al oxígeno, suavizando taninos y mejorando sabores y aromas.",
          de: "Ein Belüfter setzt Wein Sauerstoff aus, erweicht Tannine und verbessert Geschmäcker und Aromen.",
          nl: "Een beluchter stelt wijn bloot aan zuurstof, verzacht tannines en verbetert smaken en aroma's."
        }
      },
      {
        question: {
          en: "What is meant by 'full-bodied' wine?",
          es: "¿Qué significa vino 'con mucho cuerpo'?",
          de: "Was bedeutet 'vollmundiger' Wein?",
          nl: "Wat wordt bedoeld met 'volmondige' wijn?"
        },
        options: [
          { en: "Wine with strong flavors and weight", es: "Vino con sabores fuertes y peso", de: "Wein mit starken Aromen und Gewicht", nl: "Wijn met sterke smaken en gewicht" },
          { en: "Wine in a full bottle", es: "Vino en una botella llena", de: "Wein in einer vollen Flasche", nl: "Wijn in een volle fles" },
          { en: "Very old wine", es: "Vino muy viejo", de: "Sehr alter Wein", nl: "Zeer oude wijn" },
          { en: "Dark colored wine", es: "Vino de color oscuro", de: "Dunkel gefärbter Wein", nl: "Donker gekleurde wijn" }
        ],
        correct: 0,
        explanation: {
          en: "Full-bodied wine has rich flavors, higher alcohol, and feels heavier in your mouth.",
          es: "El vino con mucho cuerpo tiene sabores ricos, mayor alcohol y se siente más pesado en la boca.",
          de: "Vollmundiger Wein hat reiche Aromen, höheren Alkohol und fühlt sich schwerer im Mund an.",
          nl: "Volmondige wijn heeft rijke smaken, hoger alcohol en voelt zwaarder aan in je mond."
        }
      },
      {
        question: {
          en: "What does 'corked' wine mean?",
          es: "¿Qué significa vino 'con corcho'?",
          de: "Was bedeutet 'korkiger' Wein?",
          nl: "Wat betekent 'gekurkte' wijn?"
        },
        options: [
          { en: "Wine with a cork closure", es: "Vino con cierre de corcho", de: "Wein mit Korkverschluss", nl: "Wijn met kurksluiting" },
          { en: "Wine spoiled by contaminated cork", es: "Vino estropeado por corcho contaminado", de: "Wein verdorben durch kontaminierten Korken", nl: "Wijn bedorven door gecontamineerde kurk" },
          { en: "Very expensive wine", es: "Vino muy caro", de: "Sehr teurer Wein", nl: "Zeer dure wijn" },
          { en: "Aged wine", es: "Vino añejado", de: "Gereifter Wein", nl: "Gerijpte wijn" }
        ],
        correct: 1,
        explanation: {
          en: "Corked wine is flawed wine contaminated by TCA from the cork, giving it a musty, wet cardboard smell.",
          es: "El vino con corcho es vino defectuoso contaminado por TCA del corcho, dándole un olor a moho y cartón mojado.",
          de: "Korkiger Wein ist fehlerhafter Wein kontaminiert durch TCA aus dem Korken, gibt ihm einen muffigen, nassen Pappgeruch.",
          nl: "Gekurkte wijn is gebrekkige wijn gecontamineerd door TCA uit de kurk, geeft het een muffe, natte kartonnen geur."
        }
      },
      {
        question: {
          en: "What is the purpose of decanting wine?",
          es: "¿Cuál es el propósito de decantar vino?",
          de: "Was ist der Zweck des Dekantierens von Wein?",
          nl: "Wat is het doel van het decanteren van wijn?"
        },
        options: [
          { en: "To separate wine from sediment and aerate", es: "Para separar vino del sedimento y airear", de: "Um Wein vom Sediment zu trennen und zu belüften", nl: "Om wijn te scheiden van sediment en te beluchten" },
          { en: "To cool wine down", es: "Para enfriar el vino", de: "Um Wein abzukühlen", nl: "Om wijn af te koelen" },
          { en: "To add flavors", es: "Para añadir sabores", de: "Um Aromen hinzuzufügen", nl: "Om smaken toe te voegen" },
          { en: "To preserve wine longer", es: "Para preservar vino más tiempo", de: "Um Wein länger zu bewahren", nl: "Om wijn langer te bewaren" }
        ],
        correct: 0,
        explanation: {
          en: "Decanting separates wine from sediment and exposes it to oxygen, improving flavor and aroma.",
          es: "Decantar separa el vino del sedimento y lo expone al oxígeno, mejorando sabor y aroma.",
          de: "Dekantieren trennt Wein vom Sediment und setzt ihn Sauerstoff aus, verbessert Geschmack und Aroma.",
          nl: "Decanteren scheidt wijn van sediment en stelt het bloot aan zuurstof, verbetert smaak en aroma."
        }
      },
      {
        question: {
          en: "What is organic wine?",
          es: "¿Qué es el vino orgánico?",
          de: "Was ist Bio-Wein?",
          nl: "Wat is biologische wijn?"
        },
        options: [
          { en: "Wine made from organic grapes", es: "Vino hecho de uvas orgánicas", de: "Wein aus Bio-Trauben hergestellt", nl: "Wijn gemaakt van biologische druiven" },
          { en: "Wine without alcohol", es: "Vino sin alcohol", de: "Wein ohne Alkohol", nl: "Wijn zonder alcohol" },
          { en: "Very old wine", es: "Vino muy viejo", de: "Sehr alter Wein", nl: "Zeer oude wijn" },
          { en: "Wine without sulfites", es: "Vino sin sulfitos", de: "Wein ohne Sulfite", nl: "Wijn zonder sulfieten" }
        ],
        correct: 0,
        explanation: {
          en: "Organic wine is made from grapes grown without synthetic pesticides, herbicides, or fertilizers.",
          es: "El vino orgánico se hace de uvas cultivadas sin pesticidas sintéticos, herbicidas o fertilizantes.",
          de: "Bio-Wein wird aus Trauben hergestellt, die ohne synthetische Pestizide, Herbizide oder Düngemittel angebaut wurden.",
          nl: "Biologische wijn wordt gemaakt van druiven geteeld zonder synthetische pesticiden, herbiciden of meststoffen."
        }
      },
      {
        question: {
          en: "What does 'finish' mean in wine tasting?",
          es: "¿Qué significa 'final' en la cata de vinos?",
          de: "Was bedeutet 'Abgang' bei der Weinverkostung?",
          nl: "Wat betekent 'afdronk' bij wijnproeven?"
        },
        options: [
          { en: "The taste that remains after swallowing", es: "El sabor que permanece después de tragar", de: "Der Geschmack der nach dem Schlucken bleibt", nl: "De smaak die overblijft na het slikken" },
          { en: "The last sip in the glass", es: "El último sorbo en el vaso", de: "Der letzte Schluck im Glas", nl: "De laatste slok in het glas" },
          { en: "The end of wine production", es: "El fin de la producción de vino", de: "Das Ende der Weinproduktion", nl: "Het einde van de wijnproductie" },
          { en: "When wine bottle is empty", es: "Cuando la botella de vino está vacía", de: "Wenn die Weinflasche leer ist", nl: "Wanneer de wijnfles leeg is" }
        ],
        correct: 0,
        explanation: {
          en: "The finish is the lingering taste and sensations after swallowing wine; a long finish indicates quality.",
          es: "El final es el sabor persistente y sensaciones después de tragar vino; un final largo indica calidad.",
          de: "Der Abgang ist der anhaltende Geschmack und Empfindungen nach dem Schlucken von Wein; ein langer Abgang zeigt Qualität.",
          nl: "De afdronk is de blijvende smaak en sensaties na het slikken van wijn; een lange afdronk duidt op kwaliteit."
        }
      },
      {
        question: {
          en: "What is a wine blend?",
          es: "¿Qué es una mezcla de vinos?",
          de: "Was ist eine Weinmischung?",
          nl: "Wat is een wijnblend?"
        },
        options: [
          { en: "Wine mixed with water", es: "Vino mezclado con agua", de: "Wein gemischt mit Wasser", nl: "Wijn gemengd met water" },
          { en: "Wine from multiple grape varieties", es: "Vino de múltiples variedades de uva", de: "Wein aus mehreren Rebsorten", nl: "Wijn van meerdere druivensoorten" },
          { en: "Sparkling wine", es: "Vino espumoso", de: "Schaumwein", nl: "Mousserende wijn" },
          { en: "Wine mixed with juice", es: "Vino mezclado con jugo", de: "Wein gemischt mit Saft", nl: "Wijn gemengd met sap" }
        ],
        correct: 1,
        explanation: {
          en: "A wine blend combines different grape varieties to create complex flavors and balanced characteristics.",
          es: "Una mezcla de vinos combina diferentes variedades de uva para crear sabores complejos y características equilibradas.",
          de: "Eine Weinmischung kombiniert verschiedene Rebsorten um komplexe Aromen und ausgewogene Eigenschaften zu schaffen.",
          nl: "Een wijnblend combineert verschillende druivensoorten om complexe smaken en gebalanceerde kenmerken te creëren."
        }
      },
      {
        question: {
          en: "Why shouldn't you fill a wine glass completely?",
          es: "¿Por qué no debes llenar una copa de vino completamente?",
          de: "Warum solltest du ein Weinglas nicht komplett füllen?",
          nl: "Waarom moet je een wijnglas niet helemaal vullen?"
        },
        options: [
          { en: "To leave room for swirling and smelling", es: "Para dejar espacio para girar y oler", de: "Um Platz zum Schwenken und Riechen zu lassen", nl: "Om ruimte te laten voor draaien en ruiken" },
          { en: "To save wine", es: "Para ahorrar vino", de: "Um Wein zu sparen", nl: "Om wijn te sparen" },
          { en: "It looks better", es: "Se ve mejor", de: "Es sieht besser aus", nl: "Het ziet er beter uit" },
          { en: "To prevent spilling only", es: "Solo para prevenir derrames", de: "Nur um Verschütten zu verhindern", nl: "Alleen om morsen te voorkomen" }
        ],
        correct: 0,
        explanation: {
          en: "Leaving space allows you to swirl wine and concentrate aromas in the glass for better tasting.",
          es: "Dejar espacio te permite girar el vino y concentrar aromas en el vaso para mejor degustación.",
          de: "Platz lassen ermöglicht Wein zu schwenken und Aromen im Glas zu konzentrieren für besseres Verkosten.",
          nl: "Ruimte laten stelt je in staat wijn te draaien en aroma's in het glas te concentreren voor beter proeven."
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
