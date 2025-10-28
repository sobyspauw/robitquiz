// Quiz - Level 6: Drinken - Wijn (Wijn en voedsel)
(function() {
  const level6 = {
    name: {
      en: "Wine and Food",
      es: "Vino y Comida",
      de: "Wein und Essen",
      nl: "Wijn en Voedsel"
    },
    questions: [
      {
        question: {
          en: "What is the basic principle of wine and food pairing?",
          es: "¿Cuál es el principio básico del maridaje de vinos y comidas?",
          de: "Was ist das Grundprinzip der Wein- und Speisenpaarung?",
          nl: "Wat is het basisprincipe van wijn en voedsel pairing?"
        },
        options: [
          { en: "Opposites attract", es: "Los opuestos se atraen", de: "Gegensätze ziehen sich an", nl: "Tegenpolen trekken elkaar aan" },
          { en: "Complement or contrast harmoniously", es: "Complementar o contrastar armoniosamente", de: "Harmonisch ergänzen oder kontrastieren", nl: "Harmonieus aanvullen of contrasteren" },
          { en: "Always match colors", es: "Siempre combinar colores", de: "Immer Farben abstimmen", nl: "Altijd kleuren matchen" },
          { en: "Price should be equal", es: "El precio debe ser igual", de: "Preis sollte gleich sein", nl: "Prijs moet gelijk zijn" }
        ],
        correct: 1,
        explanation: {
          en: "Good wine and food pairing either complements similar characteristics or creates harmonious contrasts, enhancing both elements.",
          es: "Un buen maridaje de vino y comida complementa características similares o crea contrastes armoniosos, realzando ambos elementos.",
          de: "Eine gute Wein- und Speisenpaarung ergänzt ähnliche Eigenschaften oder schafft harmonische Kontraste und verbessert beide Elemente.",
          nl: "Goede wijn en voedsel pairing vult vergelijkbare kenmerken aan of creëert harmonieuze contrasten, waardoor beide elementen worden versterkt."
        }
      },
      {
        question: {
          en: "Which wine pairs best with oysters?",
          es: "¿Qué vino combina mejor con ostras?",
          de: "Welcher Wein passt am besten zu Austern?",
          nl: "Welke wijn past het best bij oesters?"
        },
        options: [
          { en: "Full-bodied red wine", es: "Vino tinto con cuerpo", de: "Vollmundiger Rotwein", nl: "Volle rode wijn" },
          { en: "Champagne or crisp white wine", es: "Champagne o vino blanco fresco", de: "Champagner oder knackiger Weißwein", nl: "Champagne of frisse witte wijn" },
          { en: "Sweet dessert wine", es: "Vino dulce de postre", de: "Süßer Dessertwein", nl: "Zoete dessert wijn" },
          { en: "Heavy oaked Chardonnay", es: "Chardonnay pesado con roble", de: "Schwerer Chardonnay mit Eiche", nl: "Zware geëikte Chardonnay" }
        ],
        correct: 1,
        explanation: {
          en: "Oysters pair beautifully with Champagne or crisp, minerally white wines like Muscadet, Chablis, or Sancerre - the acidity complements the briny sweetness.",
          es: "Las ostras combinan hermosamente con Champagne o vinos blancos frescos y minerales como Muscadet, Chablis o Sancerre - la acidez complementa la dulzura salina.",
          de: "Austern harmonieren wunderbar mit Champagner oder knackigen, mineralischen Weißweinen wie Muscadet, Chablis oder Sancerre - die Säure ergänzt die salzige Süße.",
          nl: "Oesters passen prachtig bij Champagne of frisse, minerale witte wijnen zoals Muscadet, Chablis of Sancerre - de zuurgraad vult de zilte zoetheid aan."
        }
      },
      {
        question: {
          en: "What wine traditionally pairs with beef Wellington?",
          es: "¿Qué vino tradicionalmente acompaña al Wellington de ternera?",
          de: "Welcher Wein passt traditionell zu Beef Wellington?",
          nl: "Welke wijn past traditioneel bij beef Wellington?"
        },
        options: [
          { en: "Light Pinot Noir", es: "Pinot Noir ligero", de: "Leichter Pinot Noir", nl: "Lichte Pinot Noir" },
          { en: "Full-bodied Bordeaux or Cabernet Sauvignon", es: "Burdeos con cuerpo o Cabernet Sauvignon", de: "Vollmundiger Bordeaux oder Cabernet Sauvignon", nl: "Volle Bordeaux of Cabernet Sauvignon" },
          { en: "Rosé wine", es: "Vino rosado", de: "Rosé-Wein", nl: "Rosé wijn" },
          { en: "Riesling", es: "Riesling", de: "Riesling", nl: "Riesling" }
        ],
        correct: 1,
        explanation: {
          en: "Beef Wellington's rich, umami flavors and tender texture pair excellently with full-bodied reds like Bordeaux, Cabernet Sauvignon, or Barolo.",
          es: "Los sabores ricos y umami del Wellington de ternera y su textura tierna combinan excelentemente con tintos con cuerpo como Burdeos, Cabernet Sauvignon o Barolo.",
          de: "Die reichen Umami-Aromen und die zarte Textur von Beef Wellington harmonieren hervorragend mit vollmundigen Rotweinen wie Bordeaux, Cabernet Sauvignon oder Barolo.",
          nl: "Beef Wellington's rijke, umami smaken en zachte textuur passen uitstekend bij volle rode wijnen zoals Bordeaux, Cabernet Sauvignon of Barolo."
        }
      },
      {
        question: {
          en: "Which principle explains why Sancerre pairs well with goat cheese?",
          es: "¿Qué principio explica por qué Sancerre combina bien con queso de cabra?",
          de: "Welches Prinzip erklärt, warum Sancerre gut zu Ziegenkäse passt?",
          nl: "Welk principe verklaart waarom Sancerre goed past bij geitenkaas?"
        },
        options: [
          { en: "Regional pairing", es: "Maridaje regional", de: "Regionale Paarung", nl: "Regionale pairing" },
          { en: "Color matching", es: "Combinación de colores", de: "Farbabstimmung", nl: "Kleur matching" },
          { en: "Price similarity", es: "Similitud de precio", de: "Preisähnlichkeit", nl: "Prijsgelijkenis" },
          { en: "Seasonal pairing", es: "Maridaje estacional", de: "Saisonale Paarung", nl: "Seizoen pairing" }
        ],
        correct: 0,
        explanation: {
          en: "Regional pairing: 'What grows together, goes together.' Sancerre (Loire Valley) and local goat cheeses like Crottin de Chavignol are natural partners.",
          es: "Maridaje regional: 'Lo que crece junto, va junto.' Sancerre (Valle del Loira) y quesos de cabra locales como Crottin de Chavignol son compañeros naturales.",
          de: "Regionale Paarung: 'Was zusammen wächst, passt zusammen.' Sancerre (Loire-Tal) und lokale Ziegenkäse wie Crottin de Chavignol sind natürliche Partner.",
          nl: "Regionale pairing: 'Wat samen groeit, past samen.' Sancerre (Loire-vallei) en lokale geitenkazen zoals Crottin de Chavignol zijn natuurlijke partners."
        }
      },
      {
        question: {
          en: "What type of wine pairs best with spicy Thai curry?",
          es: "¿Qué tipo de vino combina mejor con curry tailandés picante?",
          de: "Welcher Weintyp passt am besten zu scharfem Thai-Curry?",
          nl: "Welk type wijn past het best bij pittige Thaise curry?"
        },
        options: [
          { en: "High-alcohol red wine", es: "Vino tinto de alto alcohol", de: "Hochprozentiger Rotwein", nl: "Hoge alcohol rode wijn" },
          { en: "Off-dry Riesling or Gewürztraminer", es: "Riesling semi-seco o Gewürztraminer", de: "Halbtrockener Riesling oder Gewürztraminer", nl: "Half-droge Riesling of Gewürztraminer" },
          { en: "Oaky Chardonnay", es: "Chardonnay con roble", de: "Chardonnay mit Eiche", nl: "Geëikte Chardonnay" },
          { en: "Tannic Cabernet Sauvignon", es: "Cabernet Sauvignon tánico", de: "Tanninreicher Cabernet Sauvignon", nl: "Tanninerijke Cabernet Sauvignon" }
        ],
        correct: 1,
        explanation: {
          en: "Spicy food pairs best with off-dry wines that have lower alcohol and good acidity. The residual sugar helps cool the heat while acidity cuts through richness.",
          es: "La comida picante combina mejor con vinos semi-secos que tienen menor alcohol y buena acidez. El azúcar residual ayuda a enfriar el picante mientras la acidez corta la riqueza.",
          de: "Scharfes Essen harmoniert am besten mit halbtrockenen Weinen mit niedrigerem Alkohol und guter Säure. Der Restzucker kühlt die Schärfe, während Säure die Reichhaltigkeit durchschneidet.",
          nl: "Pittig eten past het best bij half-droge wijnen met lager alcohol en goede zuurgraad. De restsuiker helpt de hitte te koelen terwijl zuurgraad door rijkdom snijdt."
        }
      },
      {
        question: {
          en: "Which wine is the classic pairing for foie gras?",
          es: "¿Qué vino es el maridaje clásico para foie gras?",
          de: "Welcher Wein ist die klassische Paarung für Foie Gras?",
          nl: "Welke wijn is de klassieke pairing voor foie gras?"
        },
        options: [
          { en: "Champagne", es: "Champagne", de: "Champagner", nl: "Champagne" },
          { en: "Sauternes", es: "Sauternes", de: "Sauternes", nl: "Sauternes" },
          { en: "Chianti", es: "Chianti", de: "Chianti", nl: "Chianti" },
          { en: "Muscadet", es: "Muscadet", de: "Muscadet", nl: "Muscadet" }
        ],
        correct: 1,
        explanation: {
          en: "Sauternes, a sweet Bordeaux dessert wine, is the classic pairing for foie gras. The wine's acidity and sweetness balance the rich, buttery liver.",
          es: "Sauternes, un vino dulce de postre de Burdeos, es el maridaje clásico para foie gras. La acidez y dulzura del vino equilibran el hígado rico y mantecoso.",
          de: "Sauternes, ein süßer Bordeaux-Dessertwein, ist die klassische Paarung für Foie Gras. Die Säure und Süße des Weins balancieren die reiche, buttrige Leber.",
          nl: "Sauternes, een zoete Bordeaux dessert wijn, is de klassieke pairing voor foie gras. De zuurgraad en zoetheid van de wijn balanceert de rijke, boterachtige lever."
        }
      },
      {
        question: {
          en: "What is the key to pairing wine with chocolate desserts?",
          es: "¿Cuál es la clave para maridar vino con postres de chocolate?",
          de: "Was ist der Schlüssel zur Paarung von Wein mit Schokoladendesserts?",
          nl: "Wat is de sleutel tot het paren van wijn met chocolade desserts?"
        },
        options: [
          { en: "Wine should be lighter than the chocolate", es: "El vino debe ser más ligero que el chocolate", de: "Wein sollte leichter sein als die Schokolade", nl: "Wijn moet lichter zijn dan de chocolade" },
          { en: "Wine should be sweeter than the chocolate", es: "El vino debe ser más dulce que el chocolate", de: "Wein sollte süßer sein als die Schokolade", nl: "Wijn moet zoeter zijn dan de chocolade" },
          { en: "Only white wine works", es: "Solo funciona el vino blanco", de: "Nur Weißwein funktioniert", nl: "Alleen witte wijn werkt" },
          { en: "Temperature doesn't matter", es: "La temperatura no importa", de: "Temperatur spielt keine Rolle", nl: "Temperatuur maakt niet uit" }
        ],
        correct: 1,
        explanation: {
          en: "The wine must be sweeter than the dessert, or the wine will taste bitter and unpleasant. Port, late-harvest wines, or sweet reds work well with chocolate.",
          es: "El vino debe ser más dulce que el postre, o el vino sabrá amargo y desagradable. Oporto, vinos de cosecha tardía o tintos dulces funcionan bien con chocolate.",
          de: "Der Wein muss süßer sein als das Dessert, sonst schmeckt der Wein bitter und unangenehm. Port, Spätlese-Weine oder süße Rotweine harmonieren gut mit Schokolade.",
          nl: "De wijn moet zoeter zijn dan het dessert, anders smaakt de wijn bitter en onaangenaam. Port, late oogst wijnen of zoete rode wijnen werken goed met chocolade."
        }
      },
      {
        question: {
          en: "Which wine characteristic is most important when pairing with acidic tomato-based dishes?",
          es: "¿Qué característica del vino es más importante al maridar con platos ácidos a base de tomate?",
          de: "Welche Weineigenschaft ist am wichtigsten bei der Paarung mit säurehaltigen Tomatengerichten?",
          nl: "Welke wijneigenschap is het belangrijkst bij het paren met zure tomaat-gebaseerde gerechten?"
        },
        options: [
          { en: "High alcohol", es: "Alto alcohol", de: "Hoher Alkohol", nl: "Hoog alcohol" },
          { en: "High acidity", es: "Alta acidez", de: "Hohe Säure", nl: "Hoge zuurgraad" },
          { en: "Low acidity", es: "Baja acidez", de: "Niedrige Säure", nl: "Lage zuurgraad" },
          { en: "Heavy oak", es: "Roble pesado", de: "Schwere Eiche", nl: "Zwaar eiken" }
        ],
        correct: 1,
        explanation: {
          en: "Acidic foods need wines with high acidity to match. Italian wines like Chianti or Sangiovese pair perfectly with tomato sauces due to their natural acidity.",
          es: "Los alimentos ácidos necesitan vinos con alta acidez para combinar. Vinos italianos como Chianti o Sangiovese combinan perfectamente con salsas de tomate debido a su acidez natural.",
          de: "Säurehaltige Speisen brauchen Weine mit hoher Säure als Ergänzung. Italienische Weine wie Chianti oder Sangiovese harmonieren perfekt mit Tomatensaucen aufgrund ihrer natürlichen Säure.",
          nl: "Zure voedingsmiddelen hebben wijnen met hoge zuurgraad nodig om te matchen. Italiaanse wijnen zoals Chianti of Sangiovese passen perfect bij tomatensauzen door hun natuurlijke zuurgraad."
        }
      },
      {
        question: {
          en: "What is the classic wine pairing for fresh salmon?",
          es: "¿Cuál es el maridaje clásico de vino para salmón fresco?",
          de: "Was ist die klassische Weinpaarung für frischen Lachs?",
          nl: "Wat is de klassieke wijn pairing voor verse zalm?"
        },
        options: [
          { en: "Heavy red wine", es: "Vino tinto pesado", de: "Schwerer Rotwein", nl: "Zware rode wijn" },
          { en: "Pinot Noir or rich white wine", es: "Pinot Noir o vino blanco rico", de: "Pinot Noir oder reicher Weißwein", nl: "Pinot Noir of rijke witte wijn" },
          { en: "Sweet wine only", es: "Solo vino dulce", de: "Nur süßer Wein", nl: "Alleen zoete wijn" },
          { en: "No wine pairs with fish", es: "Ningún vino combina con pescado", de: "Kein Wein passt zu Fisch", nl: "Geen wijn past bij vis" }
        ],
        correct: 1,
        explanation: {
          en: "Salmon's rich, meaty texture works beautifully with light reds like Pinot Noir or full-bodied whites like oaked Chardonnay or white Burgundy.",
          es: "La textura rica y carnosa del salmón funciona hermosamente con tintos ligeros como Pinot Noir o blancos con cuerpo como Chardonnay con roble o Borgoña blanco.",
          de: "Lachses reiche, fleischige Textur harmoniert wunderbar mit leichten Rotweinen wie Pinot Noir oder vollmundigen Weißweinen wie Chardonnay mit Eiche oder weißem Burgunder.",
          nl: "Zalm's rijke, vlezige textuur werkt prachtig met lichte rode wijnen zoals Pinot Noir of volle witte wijnen zoals geëikte Chardonnay of witte Bourgogne."
        }
      },
      {
        question: {
          en: "Which wine pairs best with aged hard cheeses like Parmigiano-Reggiano?",
          es: "¿Qué vino combina mejor con quesos duros añejados como Parmigiano-Reggiano?",
          de: "Welcher Wein passt am besten zu gereiften Hartkäsen wie Parmigiano-Reggiano?",
          nl: "Welke wijn past het best bij gerijpte harde kazen zoals Parmigiano-Reggiano?"
        },
        options: [
          { en: "Light white wine", es: "Vino blanco ligero", de: "Leichter Weißwein", nl: "Lichte witte wijn" },
          { en: "Aged red wine like Chianti or Barolo", es: "Vino tinto añejado como Chianti o Barolo", de: "Gereifter Rotwein wie Chianti oder Barolo", nl: "Gerijpte rode wijn zoals Chianti of Barolo" },
          { en: "Sweet dessert wine", es: "Vino dulce de postre", de: "Süßer Dessertwein", nl: "Zoete dessert wijn" },
          { en: "Sparkling wine only", es: "Solo vino espumoso", de: "Nur Schaumwein", nl: "Alleen mousserende wijn" }
        ],
        correct: 1,
        explanation: {
          en: "Aged hard cheeses with intense, nutty, salty flavors pair excellently with equally complex aged reds like Chianti Classico, Barolo, or Brunello.",
          es: "Los quesos duros añejados con sabores intensos, nueces y salados combinan excelentemente con tintos añejados igualmente complejos como Chianti Classico, Barolo o Brunello.",
          de: "Gereifte Hartkäse mit intensiven, nussigen, salzigen Aromen harmonieren hervorragend mit ebenso komplexen gereiften Rotweinen wie Chianti Classico, Barolo oder Brunello.",
          nl: "Gerijpte harde kazen met intense, nootachtige, zoute smaken passen uitstekend bij even complexe gerijpte rode wijnen zoals Chianti Classico, Barolo of Brunello."
        }
      },
      {
        question: {
          en: "Which wine pairing principle applies when serving Sauternes with Roquefort cheese?",
          es: "¿Qué principio de maridaje se aplica al servir Sauternes con queso Roquefort?",
          de: "Welches Weinpaarungs-Prinzip gilt beim Servieren von Sauternes mit Roquefort-Käse?",
          nl: "Welk wijn pairing principe geldt bij het serveren van Sauternes met Roquefort kaas?"
        },
        options: [
          { en: "Complement similar flavors", es: "Complementar sabores similares", de: "Ähnliche Aromen ergänzen", nl: "Vergelijkbare smaken aanvullen" },
          { en: "Sweet balances salty and pungent", es: "Dulce equilibra salado y picante", de: "Süß balanciert salzig und scharf", nl: "Zoet balanceert zout en scherp" },
          { en: "Regional pairing only", es: "Solo maridaje regional", de: "Nur regionale Paarung", nl: "Alleen regionale pairing" },
          { en: "Temperature contrast", es: "Contraste de temperatura", de: "Temperaturkontrast", nl: "Temperatuur contrast" }
        ],
        correct: 1,
        explanation: {
          en: "Sweet wines like Sauternes balance the strong salty and pungent flavors of blue cheese like Roquefort, creating a harmonious contrast that enhances both.",
          es: "Los vinos dulces como Sauternes equilibran los sabores salados y picantes fuertes del queso azul como Roquefort, creando un contraste armonioso que realza ambos.",
          de: "Süße Weine wie Sauternes balancieren die starken salzigen und scharfen Aromen von Blauschimmelkäse wie Roquefort und schaffen einen harmonischen Kontrast, der beide verbessert.",
          nl: "Zoete wijnen zoals Sauternes balanceren de sterke zoute en scherpe smaken van blauwe kaas zoals Roquefort, wat een harmonieus contrast creëert dat beide versterkt."
        }
      },
      {
        question: {
          en: "What wine characteristic is most important for pairing with fatty meats like duck confit?",
          es: "¿Qué característica del vino es más importante para maridar con carnes grasas como el confit de pato?",
          de: "Welche Weineigenschaft ist am wichtigsten für die Paarung mit fetten Fleischsorten wie Entenconfit?",
          nl: "Welke wijneigenschap is het belangrijkst voor het paren met vette vleessoorten zoals eendenconfit?"
        },
        options: [
          { en: "High sweetness", es: "Alta dulzura", de: "Hohe Süße", nl: "Hoge zoetheid" },
          { en: "High acidity or tannins to cut fat", es: "Alta acidez o taninos para cortar la grasa", de: "Hohe Säure oder Tannine zum Fettabbau", nl: "Hoge zuurgraad of tannines om vet te doorbreken" },
          { en: "Low alcohol", es: "Bajo alcohol", de: "Niedriger Alkohol", nl: "Laag alcohol" },
          { en: "Light body only", es: "Solo cuerpo ligero", de: "Nur leichter Körper", nl: "Alleen licht body" }
        ],
        correct: 1,
        explanation: {
          en: "High acidity or tannins cut through fatty richness, cleansing the palate. Wines like Bordeaux, Côtes du Rhône, or aged Rioja work perfectly with duck confit.",
          es: "La alta acidez o taninos cortan la riqueza grasa, limpiando el paladar. Vinos como Burdeos, Côtes du Rhône o Rioja añejado funcionan perfectamente con confit de pato.",
          de: "Hohe Säure oder Tannine durchschneiden fette Reichhaltigkeit und reinigen den Gaumen. Weine wie Bordeaux, Côtes du Rhône oder gereifter Rioja passen perfekt zu Entenconfit.",
          nl: "Hoge zuurgraad of tannines doorbreken vette rijkdom en reinigen het gehemelte. Wijnen zoals Bordeaux, Côtes du Rhône of gerijpte Rioja werken perfect met eendenconfit."
        }
      },
      {
        question: {
          en: "Which wine pairs best with earthy dishes like mushroom risotto?",
          es: "¿Qué vino combina mejor con platos terrosos como risotto de hongos?",
          de: "Welcher Wein passt am besten zu erdigen Gerichten wie Pilzrisotto?",
          nl: "Welke wijn past het best bij aardse gerechten zoals paddenstoelenrisotto?"
        },
        options: [
          { en: "Fruity Beaujolais", es: "Beaujolais afrutado", de: "Fruchtiger Beaujolais", nl: "Fruitige Beaujolais" },
          { en: "Earthy wines like Burgundy or Barolo", es: "Vinos terrosos como Borgoña o Barolo", de: "Erdige Weine wie Burgund oder Barolo", nl: "Aardse wijnen zoals Bourgogne of Barolo" },
          { en: "Crisp Sauvignon Blanc", es: "Sauvignon Blanc fresco", de: "Knackiger Sauvignon Blanc", nl: "Frisse Sauvignon Blanc" },
          { en: "Sweet Moscato", es: "Moscato dulce", de: "Süßer Moscato", nl: "Zoete Moscato" }
        ],
        correct: 1,
        explanation: {
          en: "Earthy wines complement earthy dishes through similar flavor profiles. Burgundy Pinot Noir or Barolo's earthy, truffle-like notes mirror mushroom's umami character.",
          es: "Los vinos terrosos complementan platos terrosos a través de perfiles de sabor similares. Las notas terrosas y a trufa del Pinot Noir de Borgoña o Barolo reflejan el carácter umami de los hongos.",
          de: "Erdige Weine ergänzen erdige Gerichte durch ähnliche Geschmacksprofile. Burgundischer Pinot Noir oder Barolos erdige, trüffelartige Noten spiegeln den Umami-Charakter von Pilzen wider.",
          nl: "Aardse wijnen vullen aardse gerechten aan door vergelijkbare smaakprofielen. Bourgogne Pinot Noir of Barolo's aardse, truffelachtige tonen weerspiegelen paddenstoel's umami karakter."
        }
      },
      {
        question: {
          en: "What is the key consideration when pairing wine with Asian cuisine featuring soy sauce?",
          es: "¿Cuál es la consideración clave al maridar vino con cocina asiática que presenta salsa de soja?",
          de: "Was ist die wichtigste Überlegung bei der Weinpaarung mit asiatischer Küche mit Sojasauce?",
          nl: "Wat is de belangrijkste overweging bij het paren van wijn met Aziatische keuken met sojasaus?"
        },
        options: [
          { en: "Match the wine's color to the sauce", es: "Combinar el color del vino con la salsa", de: "Die Farbe des Weins zur Sauce abstimmen", nl: "De kleur van de wijn matchen met de saus" },
          { en: "Wine should have umami-rich character", es: "El vino debe tener carácter rico en umami", de: "Wein sollte umami-reichen Charakter haben", nl: "Wijn moet umami-rijk karakter hebben" },
          { en: "Only white wines work", es: "Solo funcionan vinos blancos", de: "Nur Weißweine funktionieren", nl: "Alleen witte wijnen werken" },
          { en: "Avoid wine entirely", es: "Evitar el vino completamente", de: "Wein ganz vermeiden", nl: "Wijn volledig vermijden" }
        ],
        correct: 1,
        explanation: {
          en: "Soy sauce is rich in umami, so wines with umami character like aged Bordeaux, Burgundy, or even dry sherry complement these dishes by matching flavor intensity.",
          es: "La salsa de soja es rica en umami, por lo que vinos con carácter umami como Burdeos añejado, Borgoña o incluso jerez seco complementan estos platos al igualar la intensidad del sabor.",
          de: "Sojasauce ist reich an Umami, daher ergänzen Weine mit Umami-Charakter wie gereifter Bordeaux, Burgund oder sogar trockener Sherry diese Gerichte durch Anpassung der Geschmacksintensität.",
          nl: "Sojasaus is rijk aan umami, dus wijnen met umami karakter zoals gerijpte Bordeaux, Bourgogne of zelfs droge sherry vullen deze gerechten aan door smaakintensiteit te matchen."
        }
      },
      {
        question: {
          en: "Which wine pairs best with grilled vegetables and herbs?",
          es: "¿Qué vino combina mejor con verduras y hierbas a la parrilla?",
          de: "Welcher Wein passt am besten zu gegrilltem Gemüse und Kräutern?",
          nl: "Welke wijn past het best bij gegrilde groenten en kruiden?"
        },
        options: [
          { en: "Heavy Cabernet Sauvignon", es: "Cabernet Sauvignon pesado", de: "Schwerer Cabernet Sauvignon", nl: "Zware Cabernet Sauvignon" },
          { en: "Herbaceous wines like Sauvignon Blanc or Grüner Veltliner", es: "Vinos herbáceos como Sauvignon Blanc o Grüner Veltliner", de: "Kräuterige Weine wie Sauvignon Blanc oder Grüner Veltliner", nl: "Kruidachtige wijnen zoals Sauvignon Blanc of Grüner Veltliner" },
          { en: "Sweet Riesling", es: "Riesling dulce", de: "Süßer Riesling", nl: "Zoete Riesling" },
          { en: "Port wine", es: "Vino de Oporto", de: "Portwein", nl: "Port wijn" }
        ],
        correct: 1,
        explanation: {
          en: "Herbaceous wines with green, vegetal notes complement grilled vegetables and herbs beautifully. Sauvignon Blanc, Grüner Veltliner, or Verdejo echo the herb flavors.",
          es: "Los vinos herbáceos con notas verdes y vegetales complementan hermosamente las verduras y hierbas a la parrilla. Sauvignon Blanc, Grüner Veltliner o Verdejo hacen eco de los sabores de hierbas.",
          de: "Kräuterige Weine mit grünen, pflanzlichen Noten ergänzen gegrilltes Gemüse und Kräuter wunderbar. Sauvignon Blanc, Grüner Veltliner oder Verdejo spiegeln die Kräuteraromen wider.",
          nl: "Kruidachtige wijnen met groene, plantaardige tonen vullen gegrilde groenten en kruiden prachtig aan. Sauvignon Blanc, Grüner Veltliner of Verdejo weerspiegelen de kruidensmaken."
        }
      },
      {
        question: {
          en: "What wine pairing strategy works best for cream-based pasta dishes?",
          es: "¿Qué estrategia de maridaje funciona mejor para platos de pasta con base de crema?",
          de: "Welche Weinpaarungs-Strategie funktioniert am besten für Pasta-Gerichte auf Sahne-Basis?",
          nl: "Welke wijn pairing strategie werkt het best voor pasta gerechten op room basis?"
        },
        options: [
          { en: "Light, acidic wines to cut through richness", es: "Vinos ligeros y ácidos para cortar la riqueza", de: "Leichte, säurehaltige Weine zum Durchschneiden der Reichhaltigkeit", nl: "Lichte, zure wijnen om door rijkdom te snijden" },
          { en: "Heavy tannic reds", es: "Tintos tánicos pesados", de: "Schwere tanninreiche Rotweine", nl: "Zware tanninerijke rode wijnen" },
          { en: "Sweet dessert wines", es: "Vinos dulces de postre", de: "Süße Dessertsweine", nl: "Zoete dessert wijnen" },
          { en: "No wine pairs with cream sauces", es: "Ningún vino combina con salsas de crema", de: "Kein Wein passt zu Sahnesaucen", nl: "Geen wijn past bij roomsauzen" }
        ],
        correct: 0,
        explanation: {
          en: "Cream-based dishes need light, acidic wines like Pinot Grigio, Soave, or Vermentino to cut through the richness and prevent the palate from becoming coated.",
          es: "Los platos a base de crema necesitan vinos ligeros y ácidos como Pinot Grigio, Soave o Vermentino para cortar la riqueza y evitar que el paladar se cubra.",
          de: "Gerichte auf Sahne-Basis brauchen leichte, säurehaltige Weine wie Pinot Grigio, Soave oder Vermentino, um die Reichhaltigkeit zu durchschneiden und zu verhindern, dass der Gaumen beschichtet wird.",
          nl: "Gerechten op room basis hebben lichte, zure wijnen nodig zoals Pinot Grigio, Soave of Vermentino om door de rijkdom te snijden en te voorkomen dat het gehemelte bedekt raakt."
        }
      },
      {
        question: {
          en: "Which wine pairs best with cured meats like prosciutto and salami?",
          es: "¿Qué vino combina mejor con carnes curadas como prosciutto y salami?",
          de: "Welcher Wein passt am besten zu gepökeltem Fleisch wie Prosciutto und Salami?",
          nl: "Welke wijn past het best bij gedroogd vlees zoals prosciutto en salami?"
        },
        options: [
          { en: "Heavy oaked Chardonnay", es: "Chardonnay pesado con roble", de: "Schwerer Chardonnay mit Eiche", nl: "Zware geëikte Chardonnay" },
          { en: "Italian reds like Chianti or Barbera", es: "Tintos italianos como Chianti o Barbera", de: "Italienische Rotweine wie Chianti oder Barbera", nl: "Italiaanse rode wijnen zoals Chianti of Barbera" },
          { en: "Sweet Moscato", es: "Moscato dulce", de: "Süßer Moscato", nl: "Zoete Moscato" },
          { en: "Sparkling wine only", es: "Solo vino espumoso", de: "Nur Schaumwein", nl: "Alleen mousserende wijn" }
        ],
        correct: 1,
        explanation: {
          en: "Italian cured meats pair naturally with Italian reds like Chianti, Barbera, or Sangiovese. The wines' acidity cuts through the fat while complementing the savory, salty flavors.",
          es: "Las carnes curadas italianas combinan naturalmente con tintos italianos como Chianti, Barbera o Sangiovese. La acidez de los vinos corta la grasa mientras complementa los sabores salados y sabrosos.",
          de: "Italienisches gepökeltes Fleisch harmoniert natürlich mit italienischen Rotweinen wie Chianti, Barbera oder Sangiovese. Die Säure der Weine durchschneidet das Fett und ergänzt die herzhaften, salzigen Aromen.",
          nl: "Italiaans gedroogd vlees past van nature bij Italiaanse rode wijnen zoals Chianti, Barbera of Sangiovese. De zuurgraad van de wijnen snijdt door het vet terwijl de hartige, zoute smaken worden aangevuld."
        }
      },
      {
        question: {
          en: "What is the best wine pairing approach for dishes with strong garlic flavors?",
          es: "¿Cuál es el mejor enfoque de maridaje para platos con sabores fuertes a ajo?",
          de: "Was ist der beste Weinpaarungs-Ansatz für Gerichte mit starken Knoblauch-Aromen?",
          nl: "Wat is de beste wijn pairing aanpak voor gerechten met sterke knoflooksmaken?"
        },
        options: [
          { en: "Delicate, subtle wines", es: "Vinos delicados y sutiles", de: "Delikate, subtile Weine", nl: "Delicate, subtiele wijnen" },
          { en: "Bold, aromatic wines that can match intensity", es: "Vinos audaces y aromáticos que pueden igualar la intensidad", de: "Kräftige, aromatische Weine, die mit der Intensität mithalten können", nl: "Gedurfde, aromatische wijnen die de intensiteit kunnen evenaren" },
          { en: "Only red wines", es: "Solo vinos tintos", de: "Nur Rotweine", nl: "Alleen rode wijnen" },
          { en: "Avoid wine with garlic", es: "Evitar vino con ajo", de: "Wein mit Knoblauch vermeiden", nl: "Wijn met knoflook vermijden" }
        ],
        correct: 1,
        explanation: {
          en: "Garlic's strong flavor needs equally bold wines like Côtes du Rhône, Spanish Garnacha, or aromatic whites like Gewürztraminer that can stand up to the intensity.",
          es: "El sabor fuerte del ajo necesita vinos igualmente audaces como Côtes du Rhône, Garnacha española o blancos aromáticos como Gewürztraminer que puedan resistir la intensidad.",
          de: "Knoblauchs starkes Aroma braucht ebenso kräftige Weine wie Côtes du Rhône, spanische Garnacha oder aromatische Weißweine wie Gewürztraminer, die der Intensität standhalten können.",
          nl: "Knoflook's sterke smaak heeft even gedurfde wijnen nodig zoals Côtes du Rhône, Spaanse Garnacha of aromatische witte wijnen zoals Gewürztraminer die de intensiteit aankunnen."
        }
      },
      {
        question: {
          en: "Which wine characteristic helps balance dishes with lemon or citrus?",
          es: "¿Qué característica del vino ayuda a equilibrar platos con limón o cítricos?",
          de: "Welche Weineigenschaft hilft, Gerichte mit Zitrone oder Zitrusfrüchten auszugleichen?",
          nl: "Welke wijneigenschap helpt gerechten met citroen of citrus te balanceren?"
        },
        options: [
          { en: "Low acidity to contrast", es: "Baja acidez para contrastar", de: "Niedrige Säure zum Kontrastieren", nl: "Lage zuurgraad om te contrasteren" },
          { en: "High acidity to match citrus", es: "Alta acidez para igualar los cítricos", de: "Hohe Säure zum Anpassen an Zitrus", nl: "Hoge zuurgraad om citrus te matchen" },
          { en: "High tannins", es: "Taninos altos", de: "Hohe Tannine", nl: "Hoge tannines" },
          { en: "Heavy oak influence", es: "Influencia pesada de roble", de: "Schwerer Eicheneinfluss", nl: "Zware eiken invloed" }
        ],
        correct: 1,
        explanation: {
          en: "Citrus dishes need wines with high acidity like Albariño, Vermentino, or Vinho Verde. The wine's acidity should match or exceed the dish's acidity to maintain balance.",
          es: "Los platos cítricos necesitan vinos con alta acidez como Albariño, Vermentino o Vinho Verde. La acidez del vino debe igualar o superar la acidez del plato para mantener el equilibrio.",
          de: "Zitrusgerichte brauchen Weine mit hoher Säure wie Albariño, Vermentino oder Vinho Verde. Die Säure des Weins sollte die Säure des Gerichts erreichen oder übertreffen, um das Gleichgewicht zu bewahren.",
          nl: "Citrus gerechten hebben wijnen met hoge zuurgraad nodig zoals Albariño, Vermentino of Vinho Verde. De zuurgraad van de wijn moet de zuurgraad van het gerecht evenaren of overtreffen om balans te behouden."
        }
      },
      {
        question: {
          en: "What wine works best with spicy Indian curry featuring coconut milk?",
          es: "¿Qué vino funciona mejor con curry indio picante con leche de coco?",
          de: "Welcher Wein funktioniert am besten mit scharfem indischem Curry mit Kokosmilch?",
          nl: "Welke wijn werkt het best met pittige Indiase curry met kokosmelk?"
        },
        options: [
          { en: "Tannic Cabernet Sauvignon", es: "Cabernet Sauvignon tánico", de: "Tanninreicher Cabernet Sauvignon", nl: "Tanninerijke Cabernet Sauvignon" },
          { en: "Off-dry aromatic whites like Gewürztraminer or Viognier", es: "Blancos aromáticos semi-secos como Gewürztraminer o Viognier", de: "Halbtrockene aromatische Weißweine wie Gewürztraminer oder Viognier", nl: "Half-droge aromatische witte wijnen zoals Gewürztraminer of Viognier" },
          { en: "Bone-dry Chablis", es: "Chablis muy seco", de: "Knochentrocken Chablis", nl: "Kurkdroge Chablis" },
          { en: "Heavy Barolo", es: "Barolo pesado", de: "Schwerer Barolo", nl: "Zware Barolo" }
        ],
        correct: 1,
        explanation: {
          en: "Coconut-based curries pair well with off-dry aromatic whites. The wine's slight sweetness tames spice, while aromatic character complements complex curry spices.",
          es: "Los curries a base de coco combinan bien con blancos aromáticos semi-secos. La ligera dulzura del vino suaviza el picante, mientras que el carácter aromático complementa las especias complejas del curry.",
          de: "Curries auf Kokosnussbasis harmonieren gut mit halbtrockenen aromatischen Weißweinen. Die leichte Süße des Weins zähmt die Schärfe, während der aromatische Charakter die komplexen Curry-Gewürze ergänzt.",
          nl: "Curry's op kokos basis passen goed bij half-droge aromatische witte wijnen. De lichte zoetheid van de wijn tempert pit, terwijl aromatisch karakter complexe curry kruiden aanvult."
        }
      },
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  } else if (typeof window !== 'undefined') {
    window.level6 = level6;
  }
})();
