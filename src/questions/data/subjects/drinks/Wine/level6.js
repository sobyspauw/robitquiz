// Wine Quiz - Level 6
(function() {
  const level6 = {
    name: {
          "en": "Wine and Food",
          "es": "Vino y Comida",
          "de": "Wein und Essen",
          "nl": "Wijn en Voedsel"
    },
    questions: [
      {
        question: {
                  "en": "What is the basic principle of wine and food pairing?",
                  "es": "¿Cuál es el principio básico del maridaje de vinos y comidas?",
                  "de": "Was ist das Grundprinzip der Wein- und Speisenpaarung?",
                  "nl": "Wat is het basisprincipe van wijn en voedsel pairing?"
        },
        options: [
        {
                  "en": "Opposites attract",
                  "es": "Los opuestos se atraen",
                  "de": "Gegensätze ziehen sich an",
                  "nl": "Tegenpolen trekken elkaar aan"
        },
        {
                  "en": "Always match colors",
                  "es": "Siempre combinar colores",
                  "de": "Immer Farben abstimmen",
                  "nl": "Altijd kleuren matchen"
        },
        {
                  "en": "Price should be equal",
                  "es": "El precio debe ser igual",
                  "de": "Preis sollte gleich sein",
                  "nl": "Prijs moet gelijk zijn"
        },
        {
                  "en": "Complement or contrast harmoniously",
                  "es": "Complementar o contrastar armoniosamente",
                  "de": "Harmonisch ergänzen oder kontrastieren",
                  "nl": "Harmonieus aanvullen of contrasteren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Good wine and food pairing either complements similar characteristics or creates harmonious contrasts, enhancing both elements.",
                  "es": "Un buen maridaje de vino y comida complementa características similares o crea contrastes armoniosos, realzando ambos elementos.",
                  "de": "Eine gute Wein- und Speisenpaarung ergänzt ähnliche Eigenschaften oder schafft harmonische Kontraste und verbessert beide Elemente.",
                  "nl": "Goede wijn en voedsel pairing vult vergelijkbare kenmerken aan of creëert harmonieuze contrasten, waardoor beide elementen worden versterkt."
        }
      },
      {
        question: {
                  "en": "Which wine pairs best with oysters?",
                  "es": "¿Qué vino combina mejor con ostras?",
                  "de": "Welcher Wein passt am besten zu Austern?",
                  "nl": "Welke wijn past het best bij oesters?"
        },
        options: [
        {
                  "en": "Champagne or crisp white wine",
                  "es": "Champagne o vino blanco fresco",
                  "de": "Champagner oder knackiger Weißwein",
                  "nl": "Champagne of frisse witte wijn"
        },
        {
                  "en": "Heavy oaked Chardonnay",
                  "es": "Chardonnay pesado con roble",
                  "de": "Schwerer Chardonnay mit Eiche",
                  "nl": "Zware geëikte Chardonnay"
        },
        {
                  "en": "Full-bodied red wine",
                  "es": "Vino tinto con cuerpo",
                  "de": "Vollmundiger Rotwein",
                  "nl": "Volle rode wijn"
        },
        {
                  "en": "Sweet dessert wine",
                  "es": "Vino dulce de postre",
                  "de": "Süßer Dessertwein",
                  "nl": "Zoete dessert wijn"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Oysters pair beautifully with Champagne or crisp, minerally white wines like Muscadet, Chablis, or Sancerre - the acidity complements the briny sweetness.",
                  "es": "Las ostras combinan hermosamente con Champagne o vinos blancos frescos y minerales como Muscadet, Chablis o Sancerre - la acidez complementa la dulzura salina.",
                  "de": "Austern harmonieren wunderbar mit Champagner oder knackigen, mineralischen Weißweinen wie Muscadet, Chablis oder Sancerre - die Säure ergänzt die salzige Süße.",
                  "nl": "Oesters passen prachtig bij Champagne of frisse, minerale witte wijnen zoals Muscadet, Chablis of Sancerre - de zuurgraad vult de zilte zoetheid aan."
        }
      },
      {
        question: {
                  "en": "What wine traditionally pairs with beef Wellington?",
                  "es": "¿Qué vino tradicionalmente acompaña al Wellington de ternera?",
                  "de": "Welcher Wein passt traditionell zu Beef Wellington?",
                  "nl": "Welke wijn past traditioneel bij beef Wellington?"
        },
        options: [
        {
                  "en": "Rosé wine",
                  "es": "Vino rosado",
                  "de": "Rosé-Wein",
                  "nl": "Rosé wijn"
        },
        {
                  "en": "Riesling",
                  "es": "Riesling",
                  "de": "Riesling",
                  "nl": "Riesling"
        },
        {
                  "en": "Light Pinot Noir",
                  "es": "Pinot Noir ligero",
                  "de": "Leichter Pinot Noir",
                  "nl": "Lichte Pinot Noir"
        },
        {
                  "en": "Full-bodied Bordeaux or Cabernet Sauvignon",
                  "es": "Burdeos con cuerpo o Cabernet Sauvignon",
                  "de": "Vollmundiger Bordeaux oder Cabernet Sauvignon",
                  "nl": "Volle Bordeaux of Cabernet Sauvignon"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Beef Wellington's rich, umami flavors and tender texture pair excellently with full-bodied reds like Bordeaux, Cabernet Sauvignon, or Barolo.",
                  "es": "Los sabores ricos y umami del Wellington de ternera y su textura tierna combinan excelentemente con tintos con cuerpo como Burdeos, Cabernet Sauvignon o Barolo.",
                  "de": "Die reichen Umami-Aromen und die zarte Textur von Beef Wellington harmonieren hervorragend mit vollmundigen Rotweinen wie Bordeaux, Cabernet Sauvignon oder Barolo.",
                  "nl": "Beef Wellington's rijke, umami smaken en zachte textuur passen uitstekend bij volle rode wijnen zoals Bordeaux, Cabernet Sauvignon of Barolo."
        }
      },
      {
        question: {
                  "en": "Which principle explains why Sancerre pairs well with goat cheese?",
                  "es": "¿Qué principio explica por qué Sancerre combina bien con queso de cabra?",
                  "de": "Welches Prinzip erklärt, warum Sancerre gut zu Ziegenkäse passt?",
                  "nl": "Welk principe verklaart waarom Sancerre goed past bij geitenkaas?"
        },
        options: [
        {
                  "en": "Color matching",
                  "es": "Combinación de colores",
                  "de": "Farbabstimmung",
                  "nl": "Kleur matching"
        },
        {
                  "en": "Price similarity",
                  "es": "Similitud de precio",
                  "de": "Preisähnlichkeit",
                  "nl": "Prijsgelijkenis"
        },
        {
                  "en": "Seasonal pairing",
                  "es": "Maridaje estacional",
                  "de": "Saisonale Paarung",
                  "nl": "Seizoen pairing"
        },
        {
                  "en": "Regional pairing",
                  "es": "Maridaje regional",
                  "de": "Regionale Paarung",
                  "nl": "Regionale pairing"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Regional pairing: 'What grows together, goes together.' Sancerre (Loire Valley) and local goat cheeses like Crottin de Chavignol are natural partners.",
                  "es": "Maridaje regional: 'Lo que crece junto, va junto.' Sancerre (Valle del Loira) y quesos de cabra locales como Crottin de Chavignol son compañeros naturales.",
                  "de": "Regionale Paarung: 'Was zusammen wächst, passt zusammen.' Sancerre (Loire-Tal) und lokale Ziegenkäse wie Crottin de Chavignol sind natürliche Partner.",
                  "nl": "Regionale pairing: 'Wat samen groeit, past samen.' Sancerre (Loire-vallei) en lokale geitenkazen zoals Crottin de Chavignol zijn natuurlijke partners."
        }
      },
      {
        question: {
                  "en": "What type of wine pairs best with spicy Thai curry?",
                  "es": "¿Qué tipo de vino combina mejor con curry tailandés picante?",
                  "de": "Welcher Weintyp passt am besten zu scharfem Thai-Curry?",
                  "nl": "Welk type wijn past het best bij pittige Thaise curry?"
        },
        options: [
        {
                  "en": "High-alcohol red wine",
                  "es": "Vino tinto de alto alcohol",
                  "de": "Hochprozentiger Rotwein",
                  "nl": "Hoge alcohol rode wijn"
        },
        {
                  "en": "Tannic Cabernet Sauvignon",
                  "es": "Cabernet Sauvignon tánico",
                  "de": "Tanninreicher Cabernet Sauvignon",
                  "nl": "Tanninerijke Cabernet Sauvignon"
        },
        {
                  "en": "Oaky Chardonnay",
                  "es": "Chardonnay con roble",
                  "de": "Chardonnay mit Eiche",
                  "nl": "Geëikte Chardonnay"
        },
        {
                  "en": "Off-dry Riesling or Gewürztraminer",
                  "es": "Riesling semi-seco o Gewürztraminer",
                  "de": "Halbtrockener Riesling oder Gewürztraminer",
                  "nl": "Half-droge Riesling of Gewürztraminer"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Spicy food pairs best with off-dry wines that have lower alcohol and good acidity. The residual sugar helps cool the heat while acidity cuts through richness.",
                  "es": "La comida picante combina mejor con vinos semi-secos que tienen menor alcohol y buena acidez. El azúcar residual ayuda a enfriar el picante mientras la acidez corta la riqueza.",
                  "de": "Scharfes Essen harmoniert am besten mit halbtrockenen Weinen mit niedrigerem Alkohol und guter Säure. Der Restzucker kühlt die Schärfe, während Säure die Reichhaltigkeit durchschneidet.",
                  "nl": "Pittig eten past het best bij half-droge wijnen met lager alcohol en goede zuurgraad. De restsuiker helpt de hitte te koelen terwijl zuurgraad door rijkdom snijdt."
        }
      },
      {
        question: {
                  "en": "Which wine is the classic pairing for foie gras?",
                  "es": "¿Qué vino es el maridaje clásico para foie gras?",
                  "de": "Welcher Wein ist die klassische Paarung für Foie Gras?",
                  "nl": "Welke wijn is de klassieke pairing voor foie gras?"
        },
        options: [
        {
                  "en": "Chianti",
                  "es": "Chianti",
                  "de": "Chianti",
                  "nl": "Chianti"
        },
        {
                  "en": "Sauternes",
                  "es": "Sauternes",
                  "de": "Sauternes",
                  "nl": "Sauternes"
        },
        {
                  "en": "Muscadet",
                  "es": "Muscadet",
                  "de": "Muscadet",
                  "nl": "Muscadet"
        },
        {
                  "en": "Champagne",
                  "es": "Champagne",
                  "de": "Champagner",
                  "nl": "Champagne"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Sauternes, a sweet Bordeaux dessert wine, is the classic pairing for foie gras. The wine's acidity and sweetness balance the rich, buttery liver.",
                  "es": "Sauternes, un vino dulce de postre de Burdeos, es el maridaje clásico para foie gras. La acidez y dulzura del vino equilibran el hígado rico y mantecoso.",
                  "de": "Sauternes, ein süßer Bordeaux-Dessertwein, ist die klassische Paarung für Foie Gras. Die Säure und Süße des Weins balancieren die reiche, buttrige Leber.",
                  "nl": "Sauternes, een zoete Bordeaux dessert wijn, is de klassieke pairing voor foie gras. De zuurgraad en zoetheid van de wijn balanceert de rijke, boterachtige lever."
        }
      },
      {
        question: {
                  "en": "What is the key to pairing wine with chocolate desserts?",
                  "es": "¿Cuál es la clave para maridar vino con postres de chocolate?",
                  "de": "Was ist der Schlüssel zur Paarung von Wein mit Schokoladendesserts?",
                  "nl": "Wat is de sleutel tot het paren van wijn met chocolade desserts?"
        },
        options: [
        {
                  "en": "Only white wine works",
                  "es": "Solo funciona el vino blanco",
                  "de": "Nur Weißwein funktioniert",
                  "nl": "Alleen witte wijn werkt"
        },
        {
                  "en": "Wine should be sweeter than the chocolate",
                  "es": "El vino debe ser más dulce que el chocolate",
                  "de": "Wein sollte süßer sein als die Schokolade",
                  "nl": "Wijn moet zoeter zijn dan de chocolade"
        },
        {
                  "en": "Wine should be lighter than the chocolate",
                  "es": "El vino debe ser más ligero que el chocolate",
                  "de": "Wein sollte leichter sein als die Schokolade",
                  "nl": "Wijn moet lichter zijn dan de chocolade"
        },
        {
                  "en": "Temperature doesn't matter",
                  "es": "La temperatura no importa",
                  "de": "Temperatur spielt keine Rolle",
                  "nl": "Temperatuur maakt niet uit"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The wine must be sweeter than the dessert, or the wine will taste bitter and unpleasant. Port, late-harvest wines, or sweet reds work well with chocolate.",
                  "es": "El vino debe ser más dulce que el postre, o el vino sabrá amargo y desagradable. Oporto, vinos de cosecha tardía o tintos dulces funcionan bien con chocolate.",
                  "de": "Der Wein muss süßer sein als das Dessert, sonst schmeckt der Wein bitter und unangenehm. Port, Spätlese-Weine oder süße Rotweine harmonieren gut mit Schokolade.",
                  "nl": "De wijn moet zoeter zijn dan het dessert, anders smaakt de wijn bitter en onaangenaam. Port, late oogst wijnen of zoete rode wijnen werken goed met chocolade."
        }
      },
      {
        question: {
                  "en": "Which wine characteristic is most important when pairing with acidic tomato-based dishes?",
                  "es": "¿Qué característica del vino es más importante al maridar con platos ácidos a base de tomate?",
                  "de": "Welche Weineigenschaft ist am wichtigsten bei der Paarung mit säurehaltigen Tomatengerichten?",
                  "nl": "Welke wijneigenschap is het belangrijkst bij het paren met zure tomaat-gebaseerde gerechten?"
        },
        options: [
        {
                  "en": "High acidity",
                  "es": "Alta acidez",
                  "de": "Hohe Säure",
                  "nl": "Hoge zuurgraad"
        },
        {
                  "en": "High alcohol",
                  "es": "Alto alcohol",
                  "de": "Hoher Alkohol",
                  "nl": "Hoog alcohol"
        },
        {
                  "en": "Heavy oak",
                  "es": "Roble pesado",
                  "de": "Schwere Eiche",
                  "nl": "Zwaar eiken"
        },
        {
                  "en": "Low acidity",
                  "es": "Baja acidez",
                  "de": "Niedrige Säure",
                  "nl": "Lage zuurgraad"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Acidic foods need wines with high acidity to match. Italian wines like Chianti or Sangiovese pair perfectly with tomato sauces due to their natural acidity.",
                  "es": "Los alimentos ácidos necesitan vinos con alta acidez para combinar. Vinos italianos como Chianti o Sangiovese combinan perfectamente con salsas de tomate debido a su acidez natural.",
                  "de": "Säurehaltige Speisen brauchen Weine mit hoher Säure als Ergänzung. Italienische Weine wie Chianti oder Sangiovese harmonieren perfekt mit Tomatensaucen aufgrund ihrer natürlichen Säure.",
                  "nl": "Zure voedingsmiddelen hebben wijnen met hoge zuurgraad nodig om te matchen. Italiaanse wijnen zoals Chianti of Sangiovese passen perfect bij tomatensauzen door hun natuurlijke zuurgraad."
        }
      },
      {
        question: {
                  "en": "What is the classic wine pairing for fresh salmon?",
                  "es": "¿Cuál es el maridaje clásico de vino para salmón fresco?",
                  "de": "Was ist die klassische Weinpaarung für frischen Lachs?",
                  "nl": "Wat is de klassieke wijn pairing voor verse zalm?"
        },
        options: [
        {
                  "en": "Heavy red wine",
                  "es": "Vino tinto pesado",
                  "de": "Schwerer Rotwein",
                  "nl": "Zware rode wijn"
        },
        {
                  "en": "No wine pairs with fish",
                  "es": "Ningún vino combina con pescado",
                  "de": "Kein Wein passt zu Fisch",
                  "nl": "Geen wijn past bij vis"
        },
        {
                  "en": "Pinot Noir or rich white wine",
                  "es": "Pinot Noir o vino blanco rico",
                  "de": "Pinot Noir oder reicher Weißwein",
                  "nl": "Pinot Noir of rijke witte wijn"
        },
        {
                  "en": "Sweet wine only",
                  "es": "Solo vino dulce",
                  "de": "Nur süßer Wein",
                  "nl": "Alleen zoete wijn"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Salmon's rich, meaty texture works beautifully with light reds like Pinot Noir or full-bodied whites like oaked Chardonnay or white Burgundy.",
                  "es": "La textura rica y carnosa del salmón funciona hermosamente con tintos ligeros como Pinot Noir o blancos con cuerpo como Chardonnay con roble o Borgoña blanco.",
                  "de": "Lachses reiche, fleischige Textur harmoniert wunderbar mit leichten Rotweinen wie Pinot Noir oder vollmundigen Weißweinen wie Chardonnay mit Eiche oder weißem Burgunder.",
                  "nl": "Zalm's rijke, vlezige textuur werkt prachtig met lichte rode wijnen zoals Pinot Noir of volle witte wijnen zoals geëikte Chardonnay of witte Bourgogne."
        }
      },
      {
        question: {
                  "en": "Which wine pairs best with aged hard cheeses like Parmigiano-Reggiano?",
                  "es": "¿Qué vino combina mejor con quesos duros añejados como Parmigiano-Reggiano?",
                  "de": "Welcher Wein passt am besten zu gereiften Hartkäsen wie Parmigiano-Reggiano?",
                  "nl": "Welke wijn past het best bij gerijpte harde kazen zoals Parmigiano-Reggiano?"
        },
        options: [
        {
                  "en": "Sparkling wine only",
                  "es": "Solo vino espumoso",
                  "de": "Nur Schaumwein",
                  "nl": "Alleen mousserende wijn"
        },
        {
                  "en": "Light white wine",
                  "es": "Vino blanco ligero",
                  "de": "Leichter Weißwein",
                  "nl": "Lichte witte wijn"
        },
        {
                  "en": "Sweet dessert wine",
                  "es": "Vino dulce de postre",
                  "de": "Süßer Dessertwein",
                  "nl": "Zoete dessert wijn"
        },
        {
                  "en": "Aged red wine like Chianti or Barolo",
                  "es": "Vino tinto añejado como Chianti o Barolo",
                  "de": "Gereifter Rotwein wie Chianti oder Barolo",
                  "nl": "Gerijpte rode wijn zoals Chianti of Barolo"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Aged hard cheeses with intense, nutty, salty flavors pair excellently with equally complex aged reds like Chianti Classico, Barolo, or Brunello.",
                  "es": "Los quesos duros añejados con sabores intensos, nueces y salados combinan excelentemente con tintos añejados igualmente complejos como Chianti Classico, Barolo o Brunello.",
                  "de": "Gereifte Hartkäse mit intensiven, nussigen, salzigen Aromen harmonieren hervorragend mit ebenso komplexen gereiften Rotweinen wie Chianti Classico, Barolo oder Brunello.",
                  "nl": "Gerijpte harde kazen met intense, nootachtige, zoute smaken passen uitstekend bij even complexe gerijpte rode wijnen zoals Chianti Classico, Barolo of Brunello."
        }
      },
      {
        question: {
                  "en": "Which wine pairing principle applies when serving Sauternes with Roquefort cheese?",
                  "es": "¿Qué principio de maridaje se aplica al servir Sauternes con queso Roquefort?",
                  "de": "Welches Weinpaarungs-Prinzip gilt beim Servieren von Sauternes mit Roquefort-Käse?",
                  "nl": "Welk wijn pairing principe geldt bij het serveren van Sauternes met Roquefort kaas?"
        },
        options: [
        {
                  "en": "Sweet balances salty and pungent",
                  "es": "Dulce equilibra salado y picante",
                  "de": "Süß balanciert salzig und scharf",
                  "nl": "Zoet balanceert zout en scherp"
        },
        {
                  "en": "Temperature contrast",
                  "es": "Contraste de temperatura",
                  "de": "Temperaturkontrast",
                  "nl": "Temperatuur contrast"
        },
        {
                  "en": "Complement similar flavors",
                  "es": "Complementar sabores similares",
                  "de": "Ähnliche Aromen ergänzen",
                  "nl": "Vergelijkbare smaken aanvullen"
        },
        {
                  "en": "Regional pairing only",
                  "es": "Solo maridaje regional",
                  "de": "Nur regionale Paarung",
                  "nl": "Alleen regionale pairing"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Sweet wines like Sauternes balance the strong salty and pungent flavors of blue cheese like Roquefort, creating a harmonious contrast that enhances both.",
                  "es": "Los vinos dulces como Sauternes equilibran los sabores salados y picantes fuertes del queso azul como Roquefort, creando un contraste armonioso que realza ambos.",
                  "de": "Süße Weine wie Sauternes balancieren die starken salzigen und scharfen Aromen von Blauschimmelkäse wie Roquefort und schaffen einen harmonischen Kontrast, der beide verbessert.",
                  "nl": "Zoete wijnen zoals Sauternes balanceren de sterke zoute en scherpe smaken van blauwe kaas zoals Roquefort, wat een harmonieus contrast creëert dat beide versterkt."
        }
      },
      {
        question: {
                  "en": "What wine characteristic is most important for pairing with fatty meats like duck confit?",
                  "es": "¿Qué característica del vino es más importante para maridar con carnes grasas como el confit de pato?",
                  "de": "Welche Weineigenschaft ist am wichtigsten für die Paarung mit fetten Fleischsorten wie Entenconfit?",
                  "nl": "Welke wijneigenschap is het belangrijkst voor het paren met vette vleessoorten zoals eendenconfit?"
        },
        options: [
        {
                  "en": "High acidity or tannins to cut fat",
                  "es": "Alta acidez o taninos para cortar la grasa",
                  "de": "Hohe Säure oder Tannine zum Fettabbau",
                  "nl": "Hoge zuurgraad of tannines om vet te doorbreken"
        },
        {
                  "en": "Low alcohol",
                  "es": "Bajo alcohol",
                  "de": "Niedriger Alkohol",
                  "nl": "Laag alcohol"
        },
        {
                  "en": "High sweetness",
                  "es": "Alta dulzura",
                  "de": "Hohe Süße",
                  "nl": "Hoge zoetheid"
        },
        {
                  "en": "Light body only",
                  "es": "Solo cuerpo ligero",
                  "de": "Nur leichter Körper",
                  "nl": "Alleen licht body"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "High acidity or tannins cut through fatty richness, cleansing the palate. Wines like Bordeaux, Côtes du Rhône, or aged Rioja work perfectly with duck confit.",
                  "es": "La alta acidez o taninos cortan la riqueza grasa, limpiando el paladar. Vinos como Burdeos, Côtes du Rhône o Rioja añejado funcionan perfectamente con confit de pato.",
                  "de": "Hohe Säure oder Tannine durchschneiden fette Reichhaltigkeit und reinigen den Gaumen. Weine wie Bordeaux, Côtes du Rhône oder gereifter Rioja passen perfekt zu Entenconfit.",
                  "nl": "Hoge zuurgraad of tannines doorbreken vette rijkdom en reinigen het gehemelte. Wijnen zoals Bordeaux, Côtes du Rhône of gerijpte Rioja werken perfect met eendenconfit."
        }
      },
      {
        question: {
                  "en": "Which wine pairs best with earthy dishes like mushroom risotto?",
                  "es": "¿Qué vino combina mejor con platos terrosos como risotto de hongos?",
                  "de": "Welcher Wein passt am besten zu erdigen Gerichten wie Pilzrisotto?",
                  "nl": "Welke wijn past het best bij aardse gerechten zoals paddenstoelenrisotto?"
        },
        options: [
        {
                  "en": "Sweet Moscato",
                  "es": "Moscato dulce",
                  "de": "Süßer Moscato",
                  "nl": "Zoete Moscato"
        },
        {
                  "en": "Fruity Beaujolais",
                  "es": "Beaujolais afrutado",
                  "de": "Fruchtiger Beaujolais",
                  "nl": "Fruitige Beaujolais"
        },
        {
                  "en": "Crisp Sauvignon Blanc",
                  "es": "Sauvignon Blanc fresco",
                  "de": "Knackiger Sauvignon Blanc",
                  "nl": "Frisse Sauvignon Blanc"
        },
        {
                  "en": "Earthy wines like Burgundy or Barolo",
                  "es": "Vinos terrosos como Borgoña o Barolo",
                  "de": "Erdige Weine wie Burgund oder Barolo",
                  "nl": "Aardse wijnen zoals Bourgogne of Barolo"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Earthy wines complement earthy dishes through similar flavor profiles. Burgundy Pinot Noir or Barolo's earthy, truffle-like notes mirror mushroom's umami character.",
                  "es": "Los vinos terrosos complementan platos terrosos a través de perfiles de sabor similares. Las notas terrosas y a trufa del Pinot Noir de Borgoña o Barolo reflejan el carácter umami de los hongos.",
                  "de": "Erdige Weine ergänzen erdige Gerichte durch ähnliche Geschmacksprofile. Burgundischer Pinot Noir oder Barolos erdige, trüffelartige Noten spiegeln den Umami-Charakter von Pilzen wider.",
                  "nl": "Aardse wijnen vullen aardse gerechten aan door vergelijkbare smaakprofielen. Bourgogne Pinot Noir of Barolo's aardse, truffelachtige tonen weerspiegelen paddenstoel's umami karakter."
        }
      },
      {
        question: {
                  "en": "What is the key consideration when pairing wine with Asian cuisine featuring soy sauce?",
                  "es": "¿Cuál es la consideración clave al maridar vino con cocina asiática que presenta salsa de soja?",
                  "de": "Was ist die wichtigste Überlegung bei der Weinpaarung mit asiatischer Küche mit Sojasauce?",
                  "nl": "Wat is de belangrijkste overweging bij het paren van wijn met Aziatische keuken met sojasaus?"
        },
        options: [
        {
                  "en": "Wine should have umami-rich character",
                  "es": "El vino debe tener carácter rico en umami",
                  "de": "Wein sollte umami-reichen Charakter haben",
                  "nl": "Wijn moet umami-rijk karakter hebben"
        },
        {
                  "en": "Match the wine's color to the sauce",
                  "es": "Combinar el color del vino con la salsa",
                  "de": "Die Farbe des Weins zur Sauce abstimmen",
                  "nl": "De kleur van de wijn matchen met de saus"
        },
        {
                  "en": "Only white wines work",
                  "es": "Solo funcionan vinos blancos",
                  "de": "Nur Weißweine funktionieren",
                  "nl": "Alleen witte wijnen werken"
        },
        {
                  "en": "Avoid wine entirely",
                  "es": "Evitar el vino completamente",
                  "de": "Wein ganz vermeiden",
                  "nl": "Wijn volledig vermijden"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Soy sauce is rich in umami, so wines with umami character like aged Bordeaux, Burgundy, or even dry sherry complement these dishes by matching flavor intensity.",
                  "es": "La salsa de soja es rica en umami, por lo que vinos con carácter umami como Burdeos añejado, Borgoña o incluso jerez seco complementan estos platos al igualar la intensidad del sabor.",
                  "de": "Sojasauce ist reich an Umami, daher ergänzen Weine mit Umami-Charakter wie gereifter Bordeaux, Burgund oder sogar trockener Sherry diese Gerichte durch Anpassung der Geschmacksintensität.",
                  "nl": "Sojasaus is rijk aan umami, dus wijnen met umami karakter zoals gerijpte Bordeaux, Bourgogne of zelfs droge sherry vullen deze gerechten aan door smaakintensiteit te matchen."
        }
      },
      {
        question: {
                  "en": "Which wine pairs best with grilled vegetables and herbs?",
                  "es": "¿Qué vino combina mejor con verduras y hierbas a la parrilla?",
                  "de": "Welcher Wein passt am besten zu gegrilltem Gemüse und Kräutern?",
                  "nl": "Welke wijn past het best bij gegrilde groenten en kruiden?"
        },
        options: [
        {
                  "en": "Heavy Cabernet Sauvignon",
                  "es": "Cabernet Sauvignon pesado",
                  "de": "Schwerer Cabernet Sauvignon",
                  "nl": "Zware Cabernet Sauvignon"
        },
        {
                  "en": "Herbaceous wines like Sauvignon Blanc or Grüner Veltliner",
                  "es": "Vinos herbáceos como Sauvignon Blanc o Grüner Veltliner",
                  "de": "Kräuterige Weine wie Sauvignon Blanc oder Grüner Veltliner",
                  "nl": "Kruidachtige wijnen zoals Sauvignon Blanc of Grüner Veltliner"
        },
        {
                  "en": "Sweet Riesling",
                  "es": "Riesling dulce",
                  "de": "Süßer Riesling",
                  "nl": "Zoete Riesling"
        },
        {
                  "en": "Port wine",
                  "es": "Vino de Oporto",
                  "de": "Portwein",
                  "nl": "Port wijn"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Herbaceous wines with green, vegetal notes complement grilled vegetables and herbs beautifully. Sauvignon Blanc, Grüner Veltliner, or Verdejo echo the herb flavors.",
                  "es": "Los vinos herbáceos con notas verdes y vegetales complementan hermosamente las verduras y hierbas a la parrilla. Sauvignon Blanc, Grüner Veltliner o Verdejo hacen eco de los sabores de hierbas.",
                  "de": "Kräuterige Weine mit grünen, pflanzlichen Noten ergänzen gegrilltes Gemüse und Kräuter wunderbar. Sauvignon Blanc, Grüner Veltliner oder Verdejo spiegeln die Kräuteraromen wider.",
                  "nl": "Kruidachtige wijnen met groene, plantaardige tonen vullen gegrilde groenten en kruiden prachtig aan. Sauvignon Blanc, Grüner Veltliner of Verdejo weerspiegelen de kruidensmaken."
        }
      },
      {
        question: {
                  "en": "What wine pairing strategy works best for cream-based pasta dishes?",
                  "es": "¿Qué estrategia de maridaje funciona mejor para platos de pasta con base de crema?",
                  "de": "Welche Weinpaarungs-Strategie funktioniert am besten für Pasta-Gerichte auf Sahne-Basis?",
                  "nl": "Welke wijn pairing strategie werkt het best voor pasta gerechten op room basis?"
        },
        options: [
        {
                  "en": "Heavy tannic reds",
                  "es": "Tintos tánicos pesados",
                  "de": "Schwere tanninreiche Rotweine",
                  "nl": "Zware tanninerijke rode wijnen"
        },
        {
                  "en": "Light, acidic wines to cut through richness",
                  "es": "Vinos ligeros y ácidos para cortar la riqueza",
                  "de": "Leichte, säurehaltige Weine zum Durchschneiden der Reichhaltigkeit",
                  "nl": "Lichte, zure wijnen om door rijkdom te snijden"
        },
        {
                  "en": "No wine pairs with cream sauces",
                  "es": "Ningún vino combina con salsas de crema",
                  "de": "Kein Wein passt zu Sahnesaucen",
                  "nl": "Geen wijn past bij roomsauzen"
        },
        {
                  "en": "Sweet dessert wines",
                  "es": "Vinos dulces de postre",
                  "de": "Süße Dessertsweine",
                  "nl": "Zoete dessert wijnen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Cream-based dishes need light, acidic wines like Pinot Grigio, Soave, or Vermentino to cut through the richness and prevent the palate from becoming coated.",
                  "es": "Los platos a base de crema necesitan vinos ligeros y ácidos como Pinot Grigio, Soave o Vermentino para cortar la riqueza y evitar que el paladar se cubra.",
                  "de": "Gerichte auf Sahne-Basis brauchen leichte, säurehaltige Weine wie Pinot Grigio, Soave oder Vermentino, um die Reichhaltigkeit zu durchschneiden und zu verhindern, dass der Gaumen beschichtet wird.",
                  "nl": "Gerechten op room basis hebben lichte, zure wijnen nodig zoals Pinot Grigio, Soave of Vermentino om door de rijkdom te snijden en te voorkomen dat het gehemelte bedekt raakt."
        }
      },
      {
        question: {
                  "en": "Which wine pairs best with cured meats like prosciutto and salami?",
                  "es": "¿Qué vino combina mejor con carnes curadas como prosciutto y salami?",
                  "de": "Welcher Wein passt am besten zu gepökeltem Fleisch wie Prosciutto und Salami?",
                  "nl": "Welke wijn past het best bij gedroogd vlees zoals prosciutto en salami?"
        },
        options: [
        {
                  "en": "Sparkling wine only",
                  "es": "Solo vino espumoso",
                  "de": "Nur Schaumwein",
                  "nl": "Alleen mousserende wijn"
        },
        {
                  "en": "Sweet Moscato",
                  "es": "Moscato dulce",
                  "de": "Süßer Moscato",
                  "nl": "Zoete Moscato"
        },
        {
                  "en": "Heavy oaked Chardonnay",
                  "es": "Chardonnay pesado con roble",
                  "de": "Schwerer Chardonnay mit Eiche",
                  "nl": "Zware geëikte Chardonnay"
        },
        {
                  "en": "Italian reds like Chianti or Barbera",
                  "es": "Tintos italianos como Chianti o Barbera",
                  "de": "Italienische Rotweine wie Chianti oder Barbera",
                  "nl": "Italiaanse rode wijnen zoals Chianti of Barbera"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Italian cured meats pair naturally with Italian reds like Chianti, Barbera, or Sangiovese. The wines' acidity cuts through the fat while complementing the savory, salty flavors.",
                  "es": "Las carnes curadas italianas combinan naturalmente con tintos italianos como Chianti, Barbera o Sangiovese. La acidez de los vinos corta la grasa mientras complementa los sabores salados y sabrosos.",
                  "de": "Italienisches gepökeltes Fleisch harmoniert natürlich mit italienischen Rotweinen wie Chianti, Barbera oder Sangiovese. Die Säure der Weine durchschneidet das Fett und ergänzt die herzhaften, salzigen Aromen.",
                  "nl": "Italiaans gedroogd vlees past van nature bij Italiaanse rode wijnen zoals Chianti, Barbera of Sangiovese. De zuurgraad van de wijnen snijdt door het vet terwijl de hartige, zoute smaken worden aangevuld."
        }
      },
      {
        question: {
                  "en": "What is the best wine pairing approach for dishes with strong garlic flavors?",
                  "es": "¿Cuál es el mejor enfoque de maridaje para platos con sabores fuertes a ajo?",
                  "de": "Was ist der beste Weinpaarungs-Ansatz für Gerichte mit starken Knoblauch-Aromen?",
                  "nl": "Wat is de beste wijn pairing aanpak voor gerechten met sterke knoflooksmaken?"
        },
        options: [
        {
                  "en": "Only red wines",
                  "es": "Solo vinos tintos",
                  "de": "Nur Rotweine",
                  "nl": "Alleen rode wijnen"
        },
        {
                  "en": "Bold, aromatic wines that can match intensity",
                  "es": "Vinos audaces y aromáticos que pueden igualar la intensidad",
                  "de": "Kräftige, aromatische Weine, die mit der Intensität mithalten können",
                  "nl": "Gedurfde, aromatische wijnen die de intensiteit kunnen evenaren"
        },
        {
                  "en": "Delicate, subtle wines",
                  "es": "Vinos delicados y sutiles",
                  "de": "Delikate, subtile Weine",
                  "nl": "Delicate, subtiele wijnen"
        },
        {
                  "en": "Avoid wine with garlic",
                  "es": "Evitar vino con ajo",
                  "de": "Wein mit Knoblauch vermeiden",
                  "nl": "Wijn met knoflook vermijden"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Garlic's strong flavor needs equally bold wines like Côtes du Rhône, Spanish Garnacha, or aromatic whites like Gewürztraminer that can stand up to the intensity.",
                  "es": "El sabor fuerte del ajo necesita vinos igualmente audaces como Côtes du Rhône, Garnacha española o blancos aromáticos como Gewürztraminer que puedan resistir la intensidad.",
                  "de": "Knoblauchs starkes Aroma braucht ebenso kräftige Weine wie Côtes du Rhône, spanische Garnacha oder aromatische Weißweine wie Gewürztraminer, die der Intensität standhalten können.",
                  "nl": "Knoflook's sterke smaak heeft even gedurfde wijnen nodig zoals Côtes du Rhône, Spaanse Garnacha of aromatische witte wijnen zoals Gewürztraminer die de intensiteit aankunnen."
        }
      },
      {
        question: {
                  "en": "Which wine characteristic helps balance dishes with lemon or citrus?",
                  "es": "¿Qué característica del vino ayuda a equilibrar platos con limón o cítricos?",
                  "de": "Welche Weineigenschaft hilft, Gerichte mit Zitrone oder Zitrusfrüchten auszugleichen?",
                  "nl": "Welke wijneigenschap helpt gerechten met citroen of citrus te balanceren?"
        },
        options: [
        {
                  "en": "Heavy oak influence",
                  "es": "Influencia pesada de roble",
                  "de": "Schwerer Eicheneinfluss",
                  "nl": "Zware eiken invloed"
        },
        {
                  "en": "High acidity to match citrus",
                  "es": "Alta acidez para igualar los cítricos",
                  "de": "Hohe Säure zum Anpassen an Zitrus",
                  "nl": "Hoge zuurgraad om citrus te matchen"
        },
        {
                  "en": "Low acidity to contrast",
                  "es": "Baja acidez para contrastar",
                  "de": "Niedrige Säure zum Kontrastieren",
                  "nl": "Lage zuurgraad om te contrasteren"
        },
        {
                  "en": "High tannins",
                  "es": "Taninos altos",
                  "de": "Hohe Tannine",
                  "nl": "Hoge tannines"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Citrus dishes need wines with high acidity like Albariño, Vermentino, or Vinho Verde. The wine's acidity should match or exceed the dish's acidity to maintain balance.",
                  "es": "Los platos cítricos necesitan vinos con alta acidez como Albariño, Vermentino o Vinho Verde. La acidez del vino debe igualar o superar la acidez del plato para mantener el equilibrio.",
                  "de": "Zitrusgerichte brauchen Weine mit hoher Säure wie Albariño, Vermentino oder Vinho Verde. Die Säure des Weins sollte die Säure des Gerichts erreichen oder übertreffen, um das Gleichgewicht zu bewahren.",
                  "nl": "Citrus gerechten hebben wijnen met hoge zuurgraad nodig zoals Albariño, Vermentino of Vinho Verde. De zuurgraad van de wijn moet de zuurgraad van het gerecht evenaren of overtreffen om balans te behouden."
        }
      },
      {
        question: {
                  "en": "What wine works best with spicy Indian curry featuring coconut milk?",
                  "es": "¿Qué vino funciona mejor con curry indio picante con leche de coco?",
                  "de": "Welcher Wein funktioniert am besten mit scharfem indischem Curry mit Kokosmilch?",
                  "nl": "Welke wijn werkt het best met pittige Indiase curry met kokosmelk?"
        },
        options: [
        {
                  "en": "Off-dry aromatic whites like Gewürztraminer or Viognier",
                  "es": "Blancos aromáticos semi-secos como Gewürztraminer o Viognier",
                  "de": "Halbtrockene aromatische Weißweine wie Gewürztraminer oder Viognier",
                  "nl": "Half-droge aromatische witte wijnen zoals Gewürztraminer of Viognier"
        },
        {
                  "en": "Bone-dry Chablis",
                  "es": "Chablis muy seco",
                  "de": "Knochentrocken Chablis",
                  "nl": "Kurkdroge Chablis"
        },
        {
                  "en": "Heavy Barolo",
                  "es": "Barolo pesado",
                  "de": "Schwerer Barolo",
                  "nl": "Zware Barolo"
        },
        {
                  "en": "Tannic Cabernet Sauvignon",
                  "es": "Cabernet Sauvignon tánico",
                  "de": "Tanninreicher Cabernet Sauvignon",
                  "nl": "Tanninerijke Cabernet Sauvignon"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Coconut-based curries pair well with off-dry aromatic whites. The wine's slight sweetness tames spice, while aromatic character complements complex curry spices.",
                  "es": "Los curries a base de coco combinan bien con blancos aromáticos semi-secos. La ligera dulzura del vino suaviza el picante, mientras que el carácter aromático complementa las especias complejas del curry.",
                  "de": "Curries auf Kokosnussbasis harmonieren gut mit halbtrockenen aromatischen Weißweinen. Die leichte Süße des Weins zähmt die Schärfe, während der aromatische Charakter die komplexen Curry-Gewürze ergänzt.",
                  "nl": "Curry's op kokos basis passen goed bij half-droge aromatische witte wijnen. De lichte zoetheid van de wijn tempert pit, terwijl aromatisch karakter complexe curry kruiden aanvult."
        }
      },
      {
        question: {
                  "en": "Which wine pairs best with grilled salmon?",
                  "es": "¿Qué vino combina mejor con salmón a la parrilla?",
                  "de": "Welcher Wein passt am besten zu gegrilltem Lachs?",
                  "nl": "Welke wijn past het best bij gegrilde zalm?"
        },
        options: [
        {
                  "en": "Tawny Port",
                  "es": "Oporto Tawny",
                  "de": "Tawny Port",
                  "nl": "Tawny Port"
        },
        {
                  "en": "Light Pinot Noir or full Chardonnay",
                  "es": "Pinot Noir ligero o Chardonnay con cuerpo",
                  "de": "Leichter Pinot Noir oder voller Chardonnay",
                  "nl": "Lichte Pinot Noir of volle Chardonnay"
        },
        {
                  "en": "Sweet Moscato",
                  "es": "Moscato dulce",
                  "de": "Süßer Moscato",
                  "nl": "Zoete Moscato"
        },
        {
                  "en": "Heavy Barolo",
                  "es": "Barolo pesado",
                  "de": "Schwerer Barolo",
                  "nl": "Zware Barolo"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Salmon's rich, oily texture pairs wonderfully with light Pinot Noir or full-bodied Chardonnay, which can handle the fish's richness without overpowering it.",
                  "es": "La textura rica y aceitosa del salmón combina maravillosamente con Pinot Noir ligero o Chardonnay con cuerpo, que pueden manejar la riqueza del pescado sin dominarlo.",
                  "de": "Die reiche, ölige Textur von Lachs harmoniert wunderbar mit leichtem Pinot Noir oder vollmundigem Chardonnay, der den Reichtum des Fisches bewältigen kann ohne ihn zu überwältigen.",
                  "nl": "De rijke, olieachtige textuur van zalm past wonderlijk bij lichte Pinot Noir of volle Chardonnay, die de rijkdom van de vis aankunnen zonder te overheersen."
        }
      },
      {
        question: {
                  "en": "What is the traditional wine pairing for foie gras?",
                  "es": "¿Cuál es el maridaje tradicional de vino para foie gras?",
                  "de": "Was ist die traditionelle Weinpaarung für Foie Gras?",
                  "nl": "Wat is de traditionele wijn pairing voor foie gras?"
        },
        options: [
        {
                  "en": "Sparkling Prosecco",
                  "es": "Prosecco espumoso",
                  "de": "Prickelnder Prosecco",
                  "nl": "Mousserende Prosecco"
        },
        {
                  "en": "Light Beaujolais",
                  "es": "Beaujolais ligero",
                  "de": "Leichter Beaujolais",
                  "nl": "Lichte Beaujolais"
        },
        {
                  "en": "Dry Chablis",
                  "es": "Chablis seco",
                  "de": "Trockener Chablis",
                  "nl": "Droge Chablis"
        },
        {
                  "en": "Sauternes or other sweet wines",
                  "es": "Sauternes u otros vinos dulces",
                  "de": "Sauternes oder andere süße Weine",
                  "nl": "Sauternes of andere zoete wijnen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Foie gras traditionally pairs with sweet wines like Sauternes. The wine's sweetness balances the liver's richness, while acidity cuts through the fat.",
                  "es": "El foie gras tradicionalmente combina con vinos dulces como Sauternes. La dulzura del vino equilibra la riqueza del hígado, mientras que la acidez corta la grasa.",
                  "de": "Foie Gras wird traditionell mit süßen Weinen wie Sauternes gepaart. Die Süße des Weins balanciert den Reichtum der Leber, während Säure durch das Fett schneidet.",
                  "nl": "Foie gras wordt traditioneel gecombineerd met zoete wijnen zoals Sauternes. De zoetheid van de wijn balanceert de rijkdom van de lever, terwijl zuurgraad door het vet snijdt."
        }
      },
      {
        question: {
                  "en": "Which wine complements blue cheese best?",
                  "es": "¿Qué vino complementa mejor el queso azul?",
                  "de": "Welcher Wein ergänzt Blauschimmelkäse am besten?",
                  "nl": "Welke wijn vult blauwe kaas het best aan?"
        },
        options: [
        {
                  "en": "Light Pinot Grigio",
                  "es": "Pinot Grigio ligero",
                  "de": "Leichter Pinot Grigio",
                  "nl": "Lichte Pinot Grigio"
        },
        {
                  "en": "Chianti",
                  "es": "Chianti",
                  "de": "Chianti",
                  "nl": "Chianti"
        },
        {
                  "en": "Rosé wine",
                  "es": "Vino rosado",
                  "de": "Roséwein",
                  "nl": "Rosé wijn"
        },
        {
                  "en": "Port or Sauternes",
                  "es": "Oporto o Sauternes",
                  "de": "Port oder Sauternes",
                  "nl": "Port of Sauternes"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Blue cheese's salty, pungent flavor pairs excellently with sweet fortified wines like Port or Sauternes. The sweetness provides beautiful contrast to the cheese's intensity.",
                  "es": "El sabor salado y picante del queso azul combina excelentemente con vinos fortificados dulces como Oporto o Sauternes. La dulzura proporciona un hermoso contraste con la intensidad del queso.",
                  "de": "Der salzige, würzige Geschmack von Blauschimmelkäse harmoniert hervorragend mit süßen Likörweinen wie Port oder Sauternes. Die Süße bietet einen schönen Kontrast zur Intensität des Käses.",
                  "nl": "De zoute, pittige smaak van blauwe kaas past uitstekend bij zoete versterkte wijnen zoals Port of Sauternes. De zoetheid biedt prachtig contrast met de intensiteit van de kaas."
        }
      },
      {
        question: {
                  "en": "What wine pairs well with roasted duck?",
                  "es": "¿Qué vino combina bien con pato asado?",
                  "de": "Welcher Wein passt gut zu gebratenem Ente?",
                  "nl": "Welke wijn past goed bij geroosterde eend?"
        },
        options: [
        {
                  "en": "Light Moscato",
                  "es": "Moscato ligero",
                  "de": "Leichter Moscato",
                  "nl": "Lichte Moscato"
        },
        {
                  "en": "Pinot Noir or Syrah",
                  "es": "Pinot Noir o Syrah",
                  "de": "Pinot Noir oder Syrah",
                  "nl": "Pinot Noir of Syrah"
        },
        {
                  "en": "Sauvignon Blanc",
                  "es": "Sauvignon Blanc",
                  "de": "Sauvignon Blanc",
                  "nl": "Sauvignon Blanc"
        },
        {
                  "en": "Sweet Riesling",
                  "es": "Riesling dulce",
                  "de": "Süßer Riesling",
                  "nl": "Zoete Riesling"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Roasted duck's rich, fatty meat pairs wonderfully with medium-bodied reds like Pinot Noir or Syrah, which complement the meat's richness and cut through the fat.",
                  "es": "La carne rica y grasa del pato asado combina maravillosamente con tintos de cuerpo medio como Pinot Noir o Syrah, que complementan la riqueza de la carne y cortan la grasa.",
                  "de": "Das reiche, fette Fleisch von gebratener Ente harmoniert wunderbar mit mittelschweren Rotweinen wie Pinot Noir oder Syrah, die den Reichtum des Fleisches ergänzen und durch das Fett schneiden.",
                  "nl": "Het rijke, vette vlees van geroosterde eend past wonderlijk bij middel-bodied rode wijnen zoals Pinot Noir of Syrah, die de rijkdom van het vlees aanvullen en door het vet snijden."
        }
      },
      {
        question: {
                  "en": "Which wine works best with spicy Thai food?",
                  "es": "¿Qué vino funciona mejor con comida tailandesa picante?",
                  "de": "Welcher Wein funktioniert am besten mit scharfem thailändischem Essen?",
                  "nl": "Welke wijn werkt het best bij pittig Thais eten?"
        },
        options: [
        {
                  "en": "Off-dry Riesling or Gewürztraminer",
                  "es": "Riesling o Gewürztraminer semi-seco",
                  "de": "Halbtrockener Riesling oder Gewürztraminer",
                  "nl": "Half-droge Riesling of Gewürztraminer"
        },
        {
                  "en": "Oaked Chardonnay",
                  "es": "Chardonnay con roble",
                  "de": "Chardonnay mit Eiche",
                  "nl": "Geëikte Chardonnay"
        },
        {
                  "en": "Heavy Cabernet Sauvignon",
                  "es": "Cabernet Sauvignon pesado",
                  "de": "Schwerer Cabernet Sauvignon",
                  "nl": "Zware Cabernet Sauvignon"
        },
        {
                  "en": "Bone-dry Chablis",
                  "es": "Chablis muy seco",
                  "de": "Knochentrocken Chablis",
                  "nl": "Kurkdroge Chablis"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Spicy Thai food pairs best with off-dry aromatic whites. The slight sweetness tames heat, while high acidity refreshes the palate between bites.",
                  "es": "La comida tailandesa picante combina mejor con blancos aromáticos semi-secos. La ligera dulzura suaviza el picante, mientras que la alta acidez refresca el paladar entre bocados.",
                  "de": "Scharfes thailändisches Essen harmoniert am besten mit halbtrockenen aromatischen Weißweinen. Die leichte Süße zähmt die Schärfe, während hohe Säure den Gaumen zwischen Bissen erfrischt.",
                  "nl": "Pittig Thais eten past het best bij half-droge aromatische witte wijnen. De lichte zoetheid tempert pit, terwijl hoge zuurgraad het gehemelte verfrist tussen happen."
        }
      },
      {
        question: {
                  "en": "What is the best wine pairing for chocolate desserts?",
                  "es": "¿Cuál es el mejor maridaje de vino para postres de chocolate?",
                  "de": "Was ist die beste Weinpaarung für Schokoladendesserts?",
                  "nl": "Wat is de beste wijn pairing voor chocolade desserts?"
        },
        options: [
        {
                  "en": "Dry Sauvignon Blanc",
                  "es": "Sauvignon Blanc seco",
                  "de": "Trockener Sauvignon Blanc",
                  "nl": "Droge Sauvignon Blanc"
        },
        {
                  "en": "Ruby Port or Banyuls",
                  "es": "Oporto Ruby o Banyuls",
                  "de": "Ruby Port oder Banyuls",
                  "nl": "Ruby Port of Banyuls"
        },
        {
                  "en": "Light Pinot Grigio",
                  "es": "Pinot Grigio ligero",
                  "de": "Leichter Pinot Grigio",
                  "nl": "Lichte Pinot Grigio"
        },
        {
                  "en": "Brut Champagne",
                  "es": "Champagne Brut",
                  "de": "Brut Champagner",
                  "nl": "Brut Champagne"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Chocolate desserts pair beautifully with sweet, rich fortified wines like Ruby Port or Banyuls, which can match chocolate's intensity and sweetness.",
                  "es": "Los postres de chocolate combinan hermosamente con vinos fortificados dulces y ricos como Oporto Ruby o Banyuls, que pueden igualar la intensidad y dulzura del chocolate.",
                  "de": "Schokoladendesserts harmonieren wunderbar mit süßen, reichen Likörweinen wie Ruby Port oder Banyuls, die Schokolades Intensität und Süße entsprechen können.",
                  "nl": "Chocolade desserts passen prachtig bij zoete, rijke versterkte wijnen zoals Ruby Port of Banyuls, die de intensiteit en zoetheid van chocolade kunnen evenaren."
        }
      },
      {
        question: {
                  "en": "Which wine complements mushroom risotto best?",
                  "es": "¿Qué vino complementa mejor el risotto de hongos?",
                  "de": "Welcher Wein ergänzt Pilzrisotto am besten?",
                  "nl": "Welke wijn vult paddenstoelen risotto het best aan?"
        },
        options: [
        {
                  "en": "Heavy Malbec",
                  "es": "Malbec pesado",
                  "de": "Schwerer Malbec",
                  "nl": "Zware Malbec"
        },
        {
                  "en": "Crisp Prosecco",
                  "es": "Prosecco fresco",
                  "de": "Knackiger Prosecco",
                  "nl": "Frisse Prosecco"
        },
        {
                  "en": "Sweet Moscato",
                  "es": "Moscato dulce",
                  "de": "Süßer Moscato",
                  "nl": "Zoete Moscato"
        },
        {
                  "en": "Earthy Pinot Noir or aged white Burgundy",
                  "es": "Pinot Noir terroso o Borgoña blanco añejo",
                  "de": "Erdiger Pinot Noir oder gereifter weißer Burgunder",
                  "nl": "Aardse Pinot Noir of gerijpte witte Bourgogne"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Mushroom risotto's earthy, umami-rich flavors pair wonderfully with earthy Pinot Noir or aged white Burgundy, which echo and enhance the dish's earthiness.",
                  "es": "Los sabores terrosos y ricos en umami del risotto de hongos combinan maravillosamente con Pinot Noir terroso o Borgoña blanco añejo, que hacen eco y realzan la terrosidad del plato.",
                  "de": "Die erdigen, umami-reichen Aromen von Pilzrisotto harmonieren wunderbar mit erdigem Pinot Noir oder gereiftem weißem Burgunder, die die Erdigkeit des Gerichts widerspiegeln und verstärken.",
                  "nl": "De aardse, umami-rijke smaken van paddenstoelen risotto passen wonderlijk bij aardse Pinot Noir of gerijpte witte Bourgogne, die de aardsheid van het gerecht weerspiegelen en versterken."
        }
      },
      {
        question: {
                  "en": "What wine pairs best with tomato-based pasta dishes?",
                  "es": "¿Qué vino combina mejor con platos de pasta a base de tomate?",
                  "de": "Welcher Wein passt am besten zu Nudelgerichten auf Tomatenbasis?",
                  "nl": "Welke wijn past het best bij pasta gerechten op tomatenbasis?"
        },
        options: [
        {
                  "en": "Heavy oaked Chardonnay",
                  "es": "Chardonnay pesado con roble",
                  "de": "Schwerer Chardonnay mit Eiche",
                  "nl": "Zware geëikte Chardonnay"
        },
        {
                  "en": "Medium-bodied Italian reds like Chianti or Barbera",
                  "es": "Tintos italianos de cuerpo medio como Chianti o Barbera",
                  "de": "Mittelschwere italienische Rotweine wie Chianti oder Barbera",
                  "nl": "Middel-bodied Italiaanse rode wijnen zoals Chianti of Barbera"
        },
        {
                  "en": "Sweet Port",
                  "es": "Oporto dulce",
                  "de": "Süßer Port",
                  "nl": "Zoete Port"
        },
        {
                  "en": "Dry Riesling",
                  "es": "Riesling seco",
                  "de": "Trockener Riesling",
                  "nl": "Droge Riesling"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Tomato-based pasta dishes pair beautifully with medium-bodied, acidic Italian reds. The wine's acidity matches the tomatoes' acidity, creating harmony.",
                  "es": "Los platos de pasta a base de tomate combinan hermosamente con tintos italianos de cuerpo medio y ácidos. La acidez del vino coincide con la acidez de los tomates, creando armonía.",
                  "de": "Nudelgerichte auf Tomatenbasis harmonieren wunderbar mit mittelschweren, säurehaltigen italienischen Rotweinen. Die Säure des Weins entspricht der Säure der Tomaten und schafft Harmonie.",
                  "nl": "Pasta gerechten op tomatenbasis passen prachtig bij middel-bodied, zure Italiaanse rode wijnen. De zuurgraad van de wijn komt overeen met de zuurgraad van de tomaten, wat harmonie creëert."
        }
      },
      {
        question: {
                  "en": "Which wine works best with sushi and sashimi?",
                  "es": "¿Qué vino funciona mejor con sushi y sashimi?",
                  "de": "Welcher Wein funktioniert am besten mit Sushi und Sashimi?",
                  "nl": "Welke wijn werkt het best bij sushi en sashimi?"
        },
        options: [
        {
                  "en": "Heavy Cabernet",
                  "es": "Cabernet pesado",
                  "de": "Schwerer Cabernet",
                  "nl": "Zware Cabernet"
        },
        {
                  "en": "Sweet Moscato",
                  "es": "Moscato dulce",
                  "de": "Süßer Moscato",
                  "nl": "Zoete Moscato"
        },
        {
                  "en": "Dry sparkling wine or crisp Sancerre",
                  "es": "Vino espumoso seco o Sancerre fresco",
                  "de": "Trockener Schaumwein oder knackiger Sancerre",
                  "nl": "Droge mousserende wijn of frisse Sancerre"
        },
        {
                  "en": "Oaked Chardonnay",
                  "es": "Chardonnay con roble",
                  "de": "Chardonnay mit Eiche",
                  "nl": "Geëikte Chardonnay"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Sushi and sashimi's delicate flavors pair wonderfully with dry sparkling wine or crisp, minerally whites like Sancerre, which don't overpower the subtle fish.",
                  "es": "Los sabores delicados del sushi y sashimi combinan maravillosamente con vino espumoso seco o blancos frescos y minerales como Sancerre, que no dominan el pescado sutil.",
                  "de": "Die delikaten Aromen von Sushi und Sashimi harmonieren wunderbar mit trockenem Schaumwein oder knackigen, mineralischen Weißweinen wie Sancerre, die den subtilen Fisch nicht überwältigen.",
                  "nl": "De delicate smaken van sushi en sashimi passen wonderlijk bij droge mousserende wijn of frisse, minerale witte wijnen zoals Sancerre, die de subtiele vis niet overheersen."
        }
      },
      {
        question: {
                  "en": "What wine pairs well with barbecued ribs?",
                  "es": "¿Qué vino combina bien con costillas a la barbacoa?",
                  "de": "Welcher Wein passt gut zu Grillrippchen?",
                  "nl": "Welke wijn past goed bij barbecue spareribs?"
        },
        options: [
        {
                  "en": "Dry Riesling",
                  "es": "Riesling seco",
                  "de": "Trockener Riesling",
                  "nl": "Droge Riesling"
        },
        {
                  "en": "Light Pinot Grigio",
                  "es": "Pinot Grigio ligero",
                  "de": "Leichter Pinot Grigio",
                  "nl": "Lichte Pinot Grigio"
        },
        {
                  "en": "Bold Zinfandel or Shiraz",
                  "es": "Zinfandel audaz o Shiraz",
                  "de": "Kräftiger Zinfandel oder Shiraz",
                  "nl": "Gedurfde Zinfandel of Shiraz"
        },
        {
                  "en": "Champagne",
                  "es": "Champagne",
                  "de": "Champagner",
                  "nl": "Champagne"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Barbecued ribs' smoky, sweet, spicy flavors pair excellently with bold, fruit-forward reds like Zinfandel or Shiraz, which can match the intensity.",
                  "es": "Los sabores ahumados, dulces y picantes de las costillas a la barbacoa combinan excelentemente con tintos audaces y afrutados como Zinfandel o Shiraz, que pueden igualar la intensidad.",
                  "de": "Die rauchigen, süßen, würzigen Aromen von Grillrippchen harmonieren hervorragend mit kräftigen, fruchtbetonten Rotweinen wie Zinfandel oder Shiraz, die die Intensität entsprechen können.",
                  "nl": "De rokerige, zoete, pittige smaken van barbecue spareribs passen uitstekend bij gedurfde, fruitrijke rode wijnen zoals Zinfandel of Shiraz, die de intensiteit kunnen evenaren."
        }
      },
      {
        question: {
                  "en": "Which wine complements creamy goat cheese best?",
                  "es": "¿Qué vino complementa mejor el queso de cabra cremoso?",
                  "de": "Welcher Wein ergänzt cremigen Ziegenkäse am besten?",
                  "nl": "Welke wijn vult romige geitenkaas het best aan?"
        },
        options: [
        {
                  "en": "Heavy Malbec",
                  "es": "Malbec pesado",
                  "de": "Schwerer Malbec",
                  "nl": "Zware Malbec"
        },
        {
                  "en": "Sweet Port",
                  "es": "Oporto dulce",
                  "de": "Süßer Port",
                  "nl": "Zoete Port"
        },
        {
                  "en": "Sauvignon Blanc or Sancerre",
                  "es": "Sauvignon Blanc o Sancerre",
                  "de": "Sauvignon Blanc oder Sancerre",
                  "nl": "Sauvignon Blanc of Sancerre"
        },
        {
                  "en": "Oaked Chardonnay",
                  "es": "Chardonnay con roble",
                  "de": "Chardonnay mit Eiche",
                  "nl": "Geëikte Chardonnay"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Goat cheese's tangy, creamy character pairs beautifully with Sauvignon Blanc's high acidity and herbaceous notes, which cut through the richness.",
                  "es": "El carácter ácido y cremoso del queso de cabra combina hermosamente con la alta acidez y notas herbáceas del Sauvignon Blanc, que cortan la riqueza.",
                  "de": "Der würzige, cremige Charakter von Ziegenkäse harmoniert wunderbar mit der hohen Säure und kräuterigen Noten von Sauvignon Blanc, die durch den Reichtum schneiden.",
                  "nl": "Het pittige, romige karakter van geitenkaas past prachtig bij de hoge zuurgraad en kruidachtige tonen van Sauvignon Blanc, die door de rijkdom snijden."
        }
      },
      {
        question: {
                  "en": "What wine pairs best with aged Parmesan cheese?",
                  "es": "¿Qué vino combina mejor con queso parmesano añejo?",
                  "de": "Welcher Wein passt am besten zu gereiftem Parmesan?",
                  "nl": "Welke wijn past het best bij gerijpte Parmezaanse kaas?"
        },
        options: [
        {
                  "en": "Light Prosecco",
                  "es": "Prosecco ligero",
                  "de": "Leichter Prosecco",
                  "nl": "Lichte Prosecco"
        },
        {
                  "en": "Sweet Moscato",
                  "es": "Moscato dulce",
                  "de": "Süßer Moscato",
                  "nl": "Zoete Moscato"
        },
        {
                  "en": "Dry Riesling",
                  "es": "Riesling seco",
                  "de": "Trockener Riesling",
                  "nl": "Droge Riesling"
        },
        {
                  "en": "Full-bodied Italian reds like Barolo or Amarone",
                  "es": "Tintos italianos con cuerpo como Barolo o Amarone",
                  "de": "Vollmundige italienische Rotweine wie Barolo oder Amarone",
                  "nl": "Volle Italiaanse rode wijnen zoals Barolo of Amarone"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Aged Parmesan's intense, nutty, crystalline character pairs wonderfully with full-bodied, complex Italian reds that can match its depth and umami.",
                  "es": "El carácter intenso, a nuez y cristalino del parmesano añejo combina maravillosamente con tintos italianos con cuerpo y complejos que pueden igualar su profundidad y umami.",
                  "de": "Der intensive, nussige, kristalline Charakter von gereiftem Parmesan harmoniert wunderbar mit vollmundigen, komplexen italienischen Rotweinen, die seine Tiefe und Umami entsprechen können.",
                  "nl": "Het intense, nootachtige, kristallijne karakter van gerijpte Parmezaanse kaas past wonderlijk bij volle, complexe Italiaanse rode wijnen die zijn diepte en umami kunnen evenaren."
        }
      },
      {
        question: {
                  "en": "Which wine works best with fish and chips?",
                  "es": "¿Qué vino funciona mejor con fish and chips?",
                  "de": "Welcher Wein funktioniert am besten mit Fish and Chips?",
                  "nl": "Welke wijn werkt het best bij fish and chips?"
        },
        options: [
        {
                  "en": "Sparkling wine or crisp Albariño",
                  "es": "Vino espumoso o Albariño fresco",
                  "de": "Schaumwein oder knackiger Albariño",
                  "nl": "Mousserende wijn of frisse Albariño"
        },
        {
                  "en": "Heavy Cabernet",
                  "es": "Cabernet pesado",
                  "de": "Schwerer Cabernet",
                  "nl": "Zware Cabernet"
        },
        {
                  "en": "Sweet Sauternes",
                  "es": "Sauternes dulce",
                  "de": "Süßer Sauternes",
                  "nl": "Zoete Sauternes"
        },
        {
                  "en": "Tawny Port",
                  "es": "Oporto Tawny",
                  "de": "Tawny Port",
                  "nl": "Tawny Port"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Fish and chips' crispy, oily character pairs beautifully with sparkling wine or high-acid whites like Albariño, which cut through the grease and refresh the palate.",
                  "es": "El carácter crujiente y aceitoso del fish and chips combina hermosamente con vino espumoso o blancos de alta acidez como Albariño, que cortan la grasa y refrescan el paladar.",
                  "de": "Der knusprige, ölige Charakter von Fish and Chips harmoniert wunderbar mit Schaumwein oder säurehaltigen Weißweinen wie Albariño, die durch das Fett schneiden und den Gaumen erfrischen.",
                  "nl": "Het knapperige, olieachtige karakter van fish and chips past prachtig bij mousserende wijn of hoge-zuur witte wijnen zoals Albariño, die door het vet snijden en het gehemelte verfrissen."
        }
      },
      {
        question: {
                  "en": "What wine pairs well with roasted lamb?",
                  "es": "¿Qué vino combina bien con cordero asado?",
                  "de": "Welcher Wein passt gut zu gebratenem Lamm?",
                  "nl": "Welke wijn past goed bij geroosterd lam?"
        },
        options: [
        {
                  "en": "Dry Riesling",
                  "es": "Riesling seco",
                  "de": "Trockener Riesling",
                  "nl": "Droge Riesling"
        },
        {
                  "en": "Sweet Moscato",
                  "es": "Moscato dulce",
                  "de": "Süßer Moscato",
                  "nl": "Zoete Moscato"
        },
        {
                  "en": "Bold Bordeaux or Rioja Reserva",
                  "es": "Burdeos audaz o Rioja Reserva",
                  "de": "Kräftiger Bordeaux oder Rioja Reserva",
                  "nl": "Gedurfde Bordeaux of Rioja Reserva"
        },
        {
                  "en": "Light Pinot Grigio",
                  "es": "Pinot Grigio ligero",
                  "de": "Leichter Pinot Grigio",
                  "nl": "Lichte Pinot Grigio"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Roasted lamb's rich, gamy flavors pair wonderfully with bold, structured reds like Bordeaux or Rioja Reserva, which can match the meat's intensity.",
                  "es": "Los sabores ricos y de caza del cordero asado combinan maravillosamente con tintos audaces y estructurados como Burdeos o Rioja Reserva, que pueden igualar la intensidad de la carne.",
                  "de": "Die reichen, wildartigen Aromen von gebratenem Lamm harmonieren wunderbar mit kräftigen, strukturierten Rotweinen wie Bordeaux oder Rioja Reserva, die die Intensität des Fleisches entsprechen können.",
                  "nl": "De rijke, wildachtige smaken van geroosterd lam passen wonderlijk bij gedurfde, gestructureerde rode wijnen zoals Bordeaux of Rioja Reserva, die de intensiteit van het vlees kunnen evenaren."
        }
      },
      {
        question: {
                  "en": "Which wine complements grilled vegetables best?",
                  "es": "¿Qué vino complementa mejor las verduras a la parrilla?",
                  "de": "Welcher Wein ergänzt gegrilltes Gemüse am besten?",
                  "nl": "Welke wijn vult gegrilde groenten het best aan?"
        },
        options: [
        {
                  "en": "Sweet Port",
                  "es": "Oporto dulce",
                  "de": "Süßer Port",
                  "nl": "Zoete Port"
        },
        {
                  "en": "Heavy Cabernet",
                  "es": "Cabernet pesado",
                  "de": "Schwerer Cabernet",
                  "nl": "Zware Cabernet"
        },
        {
                  "en": "Herbaceous Sauvignon Blanc or light Pinot Noir",
                  "es": "Sauvignon Blanc herbáceo o Pinot Noir ligero",
                  "de": "Kräuteriger Sauvignon Blanc oder leichter Pinot Noir",
                  "nl": "Kruidachtige Sauvignon Blanc of lichte Pinot Noir"
        },
        {
                  "en": "Cream Sherry",
                  "es": "Jerez cremoso",
                  "de": "Cream Sherry",
                  "nl": "Cream Sherry"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Grilled vegetables' smoky, charred character pairs well with herbaceous whites like Sauvignon Blanc or light, earthy Pinot Noir, which echo vegetable flavors.",
                  "es": "El carácter ahumado y carbonizado de las verduras a la parrilla combina bien con blancos herbáceos como Sauvignon Blanc o Pinot Noir ligero y terroso, que hacen eco de los sabores vegetales.",
                  "de": "Der rauchige, verkohlte Charakter von gegrilltem Gemüse harmoniert gut mit kräuterigen Weißweinen wie Sauvignon Blanc oder leichtem, erdigem Pinot Noir, die Gemüsearomen widerspiegeln.",
                  "nl": "Het rokerige, verkoold karakter van gegrilde groenten past goed bij kruidachtige witte wijnen zoals Sauvignon Blanc of lichte, aardse Pinot Noir, die groentesmaken weerspiegelen."
        }
      },
      {
        question: {
                  "en": "What wine pairs best with Caesar salad?",
                  "es": "¿Qué vino combina mejor con ensalada César?",
                  "de": "Welcher Wein passt am besten zu Caesar-Salat?",
                  "nl": "Welke wijn past het best bij Caesar salade?"
        },
        options: [
        {
                  "en": "Sweet Moscato",
                  "es": "Moscato dulce",
                  "de": "Süßer Moscato",
                  "nl": "Zoete Moscato"
        },
        {
                  "en": "Port wine",
                  "es": "Vino de Oporto",
                  "de": "Portwein",
                  "nl": "Port wijn"
        },
        {
                  "en": "Crisp Chardonnay or Sauvignon Blanc",
                  "es": "Chardonnay o Sauvignon Blanc fresco",
                  "de": "Knackiger Chardonnay oder Sauvignon Blanc",
                  "nl": "Frisse Chardonnay of Sauvignon Blanc"
        },
        {
                  "en": "Heavy Barolo",
                  "es": "Barolo pesado",
                  "de": "Schwerer Barolo",
                  "nl": "Zware Barolo"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Caesar salad's creamy, anchovy-rich dressing pairs well with crisp, acidic whites like Chardonnay or Sauvignon Blanc, which cut through the richness.",
                  "es": "El aderezo cremoso y rico en anchoas de la ensalada César combina bien con blancos frescos y ácidos como Chardonnay o Sauvignon Blanc, que cortan la riqueza.",
                  "de": "Das cremige, anchovisreiche Dressing von Caesar-Salat harmoniert gut mit knackigen, säurehaltigen Weißweinen wie Chardonnay oder Sauvignon Blanc, die durch den Reichtum schneiden.",
                  "nl": "De romige, ansjovis-rijke dressing van Caesar salade past goed bij frisse, zure witte wijnen zoals Chardonnay of Sauvignon Blanc, die door de rijkdom snijden."
        }
      },
      {
        question: {
                  "en": "Which wine works best with paella?",
                  "es": "¿Qué vino funciona mejor con paella?",
                  "de": "Welcher Wein funktioniert am besten mit Paella?",
                  "nl": "Welke wijn werkt het best bij paella?"
        },
        options: [
        {
                  "en": "Spanish rosé or Albariño",
                  "es": "Rosado español o Albariño",
                  "de": "Spanischer Rosé oder Albariño",
                  "nl": "Spaanse rosé of Albariño"
        },
        {
                  "en": "Tawny Port",
                  "es": "Oporto Tawny",
                  "de": "Tawny Port",
                  "nl": "Tawny Port"
        },
        {
                  "en": "Heavy Barolo",
                  "es": "Barolo pesado",
                  "de": "Schwerer Barolo",
                  "nl": "Zware Barolo"
        },
        {
                  "en": "Sweet Sauternes",
                  "es": "Sauternes dulce",
                  "de": "Süßer Sauternes",
                  "nl": "Zoete Sauternes"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Paella's complex seafood, saffron, and rice flavors pair wonderfully with Spanish rosé or Albariño, which complement without overpowering the delicate dish.",
                  "es": "Los sabores complejos de mariscos, azafrán y arroz de la paella combinan maravillosamente con rosado español o Albariño, que complementan sin dominar el delicado plato.",
                  "de": "Die komplexen Meeresfrüchte-, Safran- und Reisaromen von Paella harmonieren wunderbar mit spanischem Rosé oder Albariño, die ergänzen ohne das delikate Gericht zu überwältigen.",
                  "nl": "De complexe zeevruchten, saffraan en rijst smaken van paella passen wonderlijk bij Spaanse rosé of Albariño, die aanvullen zonder het delicate gerecht te overheersen."
        }
      },
      {
        question: {
                  "en": "What wine pairs well with apple pie or apple tart?",
                  "es": "¿Qué vino combina bien con tarta de manzana?",
                  "de": "Welcher Wein passt gut zu Apfelkuchen oder Apfeltarte?",
                  "nl": "Welke wijn past goed bij appeltaart?"
        },
        options: [
        {
                  "en": "Bone-dry Chablis",
                  "es": "Chablis muy seco",
                  "de": "Knochentrocken Chablis",
                  "nl": "Kurkdroge Chablis"
        },
        {
                  "en": "Light Pinot Grigio",
                  "es": "Pinot Grigio ligero",
                  "de": "Leichter Pinot Grigio",
                  "nl": "Lichte Pinot Grigio"
        },
        {
                  "en": "Dry Cabernet",
                  "es": "Cabernet seco",
                  "de": "Trockener Cabernet",
                  "nl": "Droge Cabernet"
        },
        {
                  "en": "Late harvest Riesling or Calvados",
                  "es": "Riesling de cosecha tardía o Calvados",
                  "de": "Spätlese Riesling oder Calvados",
                  "nl": "Late oogst Riesling of Calvados"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Apple desserts pair beautifully with late harvest Riesling, which has apple notes and sweetness to match the dessert, or apple brandy like Calvados.",
                  "es": "Los postres de manzana combinan hermosamente con Riesling de cosecha tardía, que tiene notas de manzana y dulzura para igualar el postre, o brandy de manzana como Calvados.",
                  "de": "Apfeldesserts harmonieren wunderbar mit Spätlese Riesling, der Apfelnoten und Süße hat um das Dessert zu entsprechen, oder Apfelbrandy wie Calvados.",
                  "nl": "Appeldesserts passen prachtig bij late oogst Riesling, die appeltonen en zoetheid heeft om het dessert te evenaren, of appelbrandy zoals Calvados."
        }
      },
      {
        question: {
                  "en": "Which wine complements smoked salmon best?",
                  "es": "¿Qué vino complementa mejor el salmón ahumado?",
                  "de": "Welcher Wein ergänzt Räucherlachs am besten?",
                  "nl": "Welke wijn vult gerookte zalm het best aan?"
        },
        options: [
        {
                  "en": "Champagne or Chablis",
                  "es": "Champagne o Chablis",
                  "de": "Champagner oder Chablis",
                  "nl": "Champagne of Chablis"
        },
        {
                  "en": "Port wine",
                  "es": "Vino de Oporto",
                  "de": "Portwein",
                  "nl": "Port wijn"
        },
        {
                  "en": "Sweet Moscato",
                  "es": "Moscato dulce",
                  "de": "Süßer Moscato",
                  "nl": "Zoete Moscato"
        },
        {
                  "en": "Heavy Malbec",
                  "es": "Malbec pesado",
                  "de": "Schwerer Malbec",
                  "nl": "Zware Malbec"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Smoked salmon's rich, oily, salty character pairs beautifully with Champagne's bubbles and acidity or Chablis' crisp minerality, which cut through the richness.",
                  "es": "El carácter rico, aceitoso y salado del salmón ahumado combina hermosamente con las burbujas y acidez del Champagne o la mineralidad fresca del Chablis, que cortan la riqueza.",
                  "de": "Der reiche, ölige, salzige Charakter von Räucherlachs harmoniert wunderbar mit den Blasen und Säure von Champagner oder der knackigen Mineralität von Chablis, die durch den Reichtum schneiden.",
                  "nl": "Het rijke, olieachtige, zoute karakter van gerookte zalm past prachtig bij de bubbels en zuurgraad van Champagne of de frisse mineraliteit van Chablis, die door de rijkdom snijden."
        }
      },
      {
        question: {
                  "en": "What wine pairs best with chicken curry?",
                  "es": "¿Qué vino combina mejor con curry de pollo?",
                  "de": "Welcher Wein passt am besten zu Hühnchen-Curry?",
                  "nl": "Welke wijn past het best bij kip curry?"
        },
        options: [
        {
                  "en": "Off-dry Gewürztraminer or Riesling",
                  "es": "Gewürztraminer o Riesling semi-seco",
                  "de": "Halbtrockener Gewürztraminer oder Riesling",
                  "nl": "Half-droge Gewürztraminer of Riesling"
        },
        {
                  "en": "Heavy Barolo",
                  "es": "Barolo pesado",
                  "de": "Schwerer Barolo",
                  "nl": "Zware Barolo"
        },
        {
                  "en": "Tawny Port",
                  "es": "Oporto Tawny",
                  "de": "Tawny Port",
                  "nl": "Tawny Port"
        },
        {
                  "en": "Bone-dry Sauvignon Blanc",
                  "es": "Sauvignon Blanc muy seco",
                  "de": "Knochentrocken Sauvignon Blanc",
                  "nl": "Kurkdroge Sauvignon Blanc"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Chicken curry's complex spices pair wonderfully with off-dry aromatic whites. The slight sweetness tames heat while aromatic character complements the spices.",
                  "es": "Las especias complejas del curry de pollo combinan maravillosamente con blancos aromáticos semi-secos. La ligera dulzura suaviza el picante mientras que el carácter aromático complementa las especias.",
                  "de": "Die komplexen Gewürze von Hühnchen-Curry harmonieren wunderbar mit halbtrockenen aromatischen Weißweinen. Die leichte Süße zähmt die Schärfe während der aromatische Charakter die Gewürze ergänzt.",
                  "nl": "De complexe kruiden van kip curry passen wonderlijk bij half-droge aromatische witte wijnen. De lichte zoetheid tempert pit terwijl aromatisch karakter de kruiden aanvult."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  }
})();