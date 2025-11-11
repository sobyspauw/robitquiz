// Quiz Template - Level 1: Drinken - Bier
(function() {
  const level1 = {
    name: {
      en: "Beer Basics",
      es: "Conceptos Básicos de Cerveza",
      de: "Bier Grundlagen",
      nl: "Bier Basiskennis"
    },
    questions: [
      {
        question: {
          en: "What are the four main ingredients of beer?",
          es: "¿Cuáles son los cuatro ingredientes principales de la cerveza?",
          de: "Was sind die vier Hauptzutaten von Bier?",
          nl: "Wat zijn de vier hoofdingrediënten van bier?"
        },
        options: [
          { en: "Water, hops, malt, yeast", es: "Agua, lúpulo, malta, levadura", de: "Wasser, Hopfen, Malz, Hefe", nl: "Water, hop, mout, gist" },
          { en: "Water, hops, sugar, yeast", es: "Agua, lúpulo, azúcar, levadura", de: "Wasser, Hopfen, Zucker, Hefe", nl: "Water, hop, suiker, gist" },
          { en: "Water, barley, wheat, corn", es: "Agua, cebada, trigo, maíz", de: "Wasser, Gerste, Weizen, Mais", nl: "Water, gerst, tarwe, maïs" },
          { en: "Water, malt, rice, alcohol", es: "Agua, malta, arroz, alcohol", de: "Wasser, Malz, Reis, Alkohol", nl: "Water, mout, rijst, alcohol" }
        ],
        correct: 0,
        explanation: {
          en: "The four main ingredients of beer are water, hops, malt (usually from barley), and yeast. These form the foundation of all beer production.",
          es: "Los cuatro ingredientes principales de la cerveza son agua, lúpulo, malta (generalmente de cebada) y levadura. Estos forman la base de toda la producción de cerveza.",
          de: "Die vier Hauptzutaten von Bier sind Wasser, Hopfen, Malz (meist aus Gerste) und Hefe. Diese bilden die Grundlage aller Bierproduktion.",
          nl: "De vier hoofdingrediënten van bier zijn water, hop, mout (meestal van gerst) en gist. Deze vormen de basis van alle bierproductie."
        }
      },
      {
        question: {
          en: "What gives beer its bitter taste?",
          es: "¿Qué le da a la cerveza su sabor amargo?",
          de: "Was verleiht Bier seinen bitteren Geschmack?",
          nl: "Wat geeft bier zijn bittere smaak?"
        },
        options: [
          { en: "Malt", es: "Malta", de: "Malz", nl: "Mout" },
          { en: "Hops", es: "Lúpulo", de: "Hopfen", nl: "Hop" },
          { en: "Yeast", es: "Levadura", de: "Hefe", nl: "Gist" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" }
        ],
        correct: 1,
        explanation: {
          en: "Hops provide the bitter taste in beer and also act as a natural preservative. The amount of hops used determines how bitter the beer will be.",
          es: "El lúpulo proporciona el sabor amargo en la cerveza y también actúa como conservante natural. La cantidad de lúpulo utilizada determina qué tan amarga será la cerveza.",
          de: "Hopfen verleiht Bier den bitteren Geschmack und wirkt auch als natürliches Konservierungsmittel. Die verwendete Hopfenmenge bestimmt, wie bitter das Bier wird.",
          nl: "Hop geeft bier zijn bittere smaak en werkt ook als natuurlijk conserveermiddel. De hoeveelheid hop bepaalt hoe bitter het bier wordt."
        }
      },
      {
        question: {
          en: "At what temperature should most beers be served?",
          es: "¿A qué temperatura se debe servir la mayoría de las cervezas?",
          de: "Bei welcher Temperatur sollten die meisten Biere serviert werden?",
          nl: "Op welke temperatuur moeten de meeste bieren geserveerd worden?"
        },
        options: [
          { en: "0-2°C (32-36°F)", es: "0-2°C (32-36°F)", de: "0-2°C (32-36°F)", nl: "0-2°C (32-36°F)" },
          { en: "3-7°C (38-45°F)", es: "3-7°C (38-45°F)", de: "3-7°C (38-45°F)", nl: "3-7°C (38-45°F)" },
          { en: "8-12°C (46-54°F)", es: "8-12°C (46-54°F)", de: "8-12°C (46-54°F)", nl: "8-12°C (46-54°F)" },
          { en: "15-20°C (59-68°F)", es: "15-20°C (59-68°F)", de: "15-20°C (59-68°F)", nl: "15-20°C (59-68°F)" }
        ],
        correct: 1,
        explanation: {
          en: "Most beers are best served at 3-7°C (38-45°F). This temperature range allows the flavors to be properly appreciated while maintaining refreshment.",
          es: "La mayoría de las cervezas se sirven mejor a 3-7°C (38-45°F). Este rango de temperatura permite que los sabores se aprecien adecuadamente mientras mantiene el refrescante.",
          de: "Die meisten Biere werden am besten bei 3-7°C (38-45°F) serviert. Dieser Temperaturbereich ermöglicht es, die Aromen richtig zu schätzen und gleichzeitig die Erfrischung zu bewahren.",
          nl: "De meeste bieren worden het best geserveerd op 3-7°C (38-45°F). Dit temperatuurbereik zorgt ervoor dat de smaken goed gewaardeerd kunnen worden terwijl de verfrissing behouden blijft."
        }
      },
      {
        question: {
          en: "What is the alcohol content range of most regular beers?",
          es: "¿Cuál es el rango de contenido de alcohol de la mayoría de las cervezas regulares?",
          de: "Wie hoch ist der Alkoholgehalt der meisten normalen Biere?",
          nl: "Wat is het alcoholpercentage van de meeste gewone bieren?"
        },
        options: [
          { en: "1-2%", es: "1-2%", de: "1-2%", nl: "1-2%" },
          { en: "3-6%", es: "3-6%", de: "3-6%", nl: "3-6%" },
          { en: "7-10%", es: "7-10%", de: "7-10%", nl: "7-10%" },
          { en: "11-15%", es: "11-15%", de: "11-15%", nl: "11-15%" }
        ],
        correct: 1,
        explanation: {
          en: "Most regular beers have an alcohol content between 3-6% ABV (Alcohol by Volume). Light beers are typically on the lower end, while stronger ales may reach the higher end.",
          es: "La mayoría de las cervezas regulares tienen un contenido de alcohol entre 3-6% ABV (Alcohol por Volumen). Las cervezas ligeras están típicamente en el extremo inferior, mientras que las ales más fuertes pueden alcanzar el extremo superior.",
          de: "Die meisten normalen Biere haben einen Alkoholgehalt zwischen 3-6% Vol. (Alkohol nach Volumen). Leichte Biere liegen typischerweise am unteren Ende, während stärkere Ales das obere Ende erreichen können.",
          nl: "De meeste gewone bieren hebben een alcoholpercentage tussen 3-6% ABV (Alcohol by Volume). Lichte bieren zitten meestal aan de onderkant, terwijl sterkere ales de bovenkant kunnen bereiken."
        }
      },
      {
        question: {
          en: "Which ingredient is responsible for the color of beer?",
          es: "¿Qué ingrediente es responsable del color de la cerveza?",
          de: "Welche Zutat ist für die Farbe des Bieres verantwortlich?",
          nl: "Welk ingrediënt is verantwoordelijk voor de kleur van bier?"
        },
        options: [
          { en: "Hops", es: "Lúpulo", de: "Hopfen", nl: "Hop" },
          { en: "Malt", es: "Malta", de: "Malz", nl: "Mout" },
          { en: "Yeast", es: "Levadura", de: "Hefe", nl: "Gist" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" }
        ],
        correct: 1,
        explanation: {
          en: "Malt is responsible for beer's color. Different roasting levels of malt create colors ranging from pale golden to deep black.",
          es: "La malta es responsable del color de la cerveza. Diferentes niveles de tostado de la malta crean colores que van desde dorado pálido hasta negro profundo.",
          de: "Malz ist für die Farbe des Bieres verantwortlich. Verschiedene Röstgrade des Malzes erzeugen Farben von hellem Gold bis zu tiefem Schwarz.",
          nl: "Mout is verantwoordelijk voor de kleur van bier. Verschillende roostingsniveaus van mout creëren kleuren variërend van lichtgouden tot diepzwart."
        }
      },
      {
        question: {
          en: "What is the main purpose of yeast in beer brewing?",
          es: "¿Cuál es el propósito principal de la levadura en la elaboración de cerveza?",
          de: "Was ist der Hauptzweck von Hefe beim Bierbrauen?",
          nl: "Wat is het hoofddoel van gist bij het brouwen van bier?"
        },
        options: [
          { en: "To add flavor", es: "Para agregar sabor", de: "Um Geschmack hinzuzufügen", nl: "Om smaak toe te voegen" },
          { en: "To create alcohol", es: "Para crear alcohol", de: "Um Alkohol zu erzeugen", nl: "Om alcohol te creëren" },
          { en: "To add color", es: "Para agregar color", de: "Um Farbe hinzuzufügen", nl: "Om kleur toe te voegen" },
          { en: "To preserve the beer", es: "Para conservar la cerveza", de: "Um das Bier zu konservieren", nl: "Om het bier te bewaren" }
        ],
        correct: 1,
        explanation: {
          en: "Yeast's main purpose is to ferment sugars from the malt, converting them into alcohol and carbon dioxide, which creates the alcoholic content of beer.",
          es: "El propósito principal de la levadura es fermentar los azúcares de la malta, convirtiéndolos en alcohol y dióxido de carbono, lo que crea el contenido alcohólico de la cerveza.",
          de: "Der Hauptzweck der Hefe ist es, Zucker aus dem Malz zu fermentieren und sie in Alkohol und Kohlendioxid umzuwandeln, wodurch der Alkoholgehalt des Bieres entsteht.",
          nl: "Het hoofddoel van gist is het fermenteren van suikers uit de mout, waarbij deze worden omgezet in alcohol en koolstofdioxide, wat het alcoholgehalte van bier creëert."
        }
      },
      {
        question: {
          en: "What is the foam on top of beer called?",
          es: "¿Cómo se llama la espuma en la parte superior de la cerveza?",
          de: "Wie nennt man den Schaum oben auf dem Bier?",
          nl: "Hoe heet het schuim bovenop bier?"
        },
        options: [
          { en: "Crown", es: "Corona", de: "Krone", nl: "Kroon" },
          { en: "Head", es: "Cabeza", de: "Kopf", nl: "Hoofd" },
          { en: "Cap", es: "Tapa", de: "Kappe", nl: "Dop" },
          { en: "Froth", es: "Espuma", de: "Schaum", nl: "Schuim" }
        ],
        correct: 1,
        explanation: {
          en: "The foam on top of beer is called the 'head'. A good head indicates proper carbonation and freshness of the beer.",
          es: "La espuma en la parte superior de la cerveza se llama 'cabeza'. Una buena cabeza indica carbonatación adecuada y frescura de la cerveza.",
          de: "Der Schaum oben auf dem Bier wird 'Kopf' genannt. Ein guter Kopf zeigt ordentliche Kohlensäure und Frische des Bieres an.",
          nl: "Het schuim bovenop bier wordt het 'hoofd' genoemd. Een goed hoofd duidt op juiste koolzuur en versheid van het bier."
        }
      },
      {
        question: {
          en: "Which type of glass is best for most beers?",
          es: "¿Qué tipo de vaso es mejor para la mayoría de las cervezas?",
          de: "Welche Art von Glas ist am besten für die meisten Biere?",
          nl: "Welk type glas is het beste voor de meeste bieren?"
        },
        options: [
          { en: "Wine glass", es: "Copa de vino", de: "Weinglas", nl: "Wijnglas" },
          { en: "Pint glass", es: "Vaso de pinta", de: "Pintglas", nl: "Pintglas" },
          { en: "Shot glass", es: "Vaso de chupito", de: "Schnapsglas", nl: "Shotglas" },
          { en: "Coffee mug", es: "Taza de café", de: "Kaffeetasse", nl: "Koffiemok" }
        ],
        correct: 1,
        explanation: {
          en: "A pint glass is ideal for most beers as it allows proper aeration, showcases the beer's color, and provides space for the head to form.",
          es: "Un vaso de pinta es ideal para la mayoría de las cervezas ya que permite la aireación adecuada, muestra el color de la cerveza y proporciona espacio para que se forme la cabeza.",
          de: "Ein Pintglas ist ideal für die meisten Biere, da es ordentliche Belüftung ermöglicht, die Farbe des Bieres zeigt und Platz für die Kopfbildung bietet.",
          nl: "Een pintglas is ideaal voor de meeste bieren omdat het juiste beluchting mogelijk maakt, de kleur van het bier toont en ruimte biedt voor het hoofd om te vormen."
        }
      },
      {
        question: {
          en: "What does 'ABV' stand for in beer terminology?",
          es: "¿Qué significa 'ABV' en la terminología cervecera?",
          de: "Wofür steht 'ABV' in der Bierterminologie?",
          nl: "Waar staat 'ABV' voor in biertermen?"
        },
        options: [
          { en: "Alcohol By Volume", es: "Alcohol Por Volumen", de: "Alkohol nach Volumen", nl: "Alcohol per Volume" },
          { en: "Aged Beer Vintage", es: "Cerveza Añejada Vintage", de: "Gereiftes Bier Jahrgang", nl: "Gerijpte Bier Vintage" },
          { en: "American Beer Variety", es: "Variedad de Cerveza Americana", de: "Amerikanische Biersorte", nl: "Amerikaanse Biersoort" },
          { en: "Alcohol Brewing Value", es: "Valor de Elaboración de Alcohol", de: "Alkohol-Brauwert", nl: "Alcohol Brouwwaarde" }
        ],
        correct: 0,
        explanation: {
          en: "ABV stands for 'Alcohol By Volume', which indicates the percentage of alcohol content in the beer by volume.",
          es: "ABV significa 'Alcohol Por Volumen', que indica el porcentaje de contenido de alcohol en la cerveza por volumen.",
          de: "ABV steht für 'Alkohol nach Volumen', was den Prozentsatz des Alkoholgehalts im Bier nach Volumen angibt.",
          nl: "ABV staat voor 'Alcohol per Volume', wat het percentage alcoholgehalte in het bier per volume aangeeft."
        }
      },
      {
        question: {
          en: "What is the primary grain used in most beers?",
          es: "¿Cuál es el grano principal utilizado en la mayoría de las cervezas?",
          de: "Was ist das Hauptgetreide, das in den meisten Bieren verwendet wird?",
          nl: "Wat is het hoofdgraan dat in de meeste bieren wordt gebruikt?"
        },
        options: [
          { en: "Wheat", es: "Trigo", de: "Weizen", nl: "Tarwe" },
          { en: "Rice", es: "Arroz", de: "Reis", nl: "Rijst" },
          { en: "Barley", es: "Cebada", de: "Gerste", nl: "Gerst" },
          { en: "Corn", es: "Maíz", de: "Mais", nl: "Maïs" }
        ],
        correct: 2,
        explanation: {
          en: "Barley is the primary grain used in most beers. It is malted (germinated and dried) to convert starches into fermentable sugars.",
          es: "La cebada es el grano principal utilizado en la mayoría de las cervezas. Se maltea (germina y seca) para convertir los almidones en azúcares fermentables.",
          de: "Gerste ist das Hauptgetreide, das in den meisten Bieren verwendet wird. Sie wird gemälzt (gekeimt und getrocknet), um Stärke in fermentierbare Zucker umzuwandeln.",
          nl: "Gerst is het hoofdgraan dat in de meeste bieren wordt gebruikt. Het wordt gemout (ontkiemd en gedroogd) om zetmeel om te zetten in fermenteerbare suikers."
        }
      },
      {
        question: {
          en: "What are the two main categories of beer?",
          es: "¿Cuáles son las dos categorías principales de cerveza?",
          de: "Was sind die zwei Hauptkategorien von Bier?",
          nl: "Wat zijn de twee hoofdcategorieën van bier?"
        },
        options: [
          { en: "Light and dark", es: "Clara y oscura", de: "Hell und dunkel", nl: "Licht en donker" },
          { en: "Ale and lager", es: "Ale y lager", de: "Ale und Lager", nl: "Ale en lager" },
          { en: "Sweet and bitter", es: "Dulce y amarga", de: "Süß und bitter", nl: "Zoet en bitter" },
          { en: "Strong and weak", es: "Fuerte y débil", de: "Stark und schwach", nl: "Sterk en zwak" }
        ],
        correct: 1,
        explanation: {
          en: "The two main categories of beer are ale and lager, distinguished primarily by the type of yeast used and fermentation temperature.",
          es: "Las dos categorías principales de cerveza son ale y lager, distinguidas principalmente por el tipo de levadura utilizada y la temperatura de fermentación.",
          de: "Die zwei Hauptkategorien von Bier sind Ale und Lager, hauptsächlich unterschieden durch die Art der verwendeten Hefe und die Fermentationstemperatur.",
          nl: "De twee hoofdcategorieën van bier zijn ale en lager, voornamelijk onderscheiden door het type gist dat wordt gebruikt en de fermentatietemperatuur."
        }
      },
      {
        question: {
          en: "How long does beer typically stay fresh?",
          es: "¿Cuánto tiempo suele permanecer fresca la cerveza?",
          de: "Wie lange bleibt Bier normalerweise frisch?",
          nl: "Hoe lang blijft bier meestal vers?"
        },
        options: [
          { en: "1-2 weeks", es: "1-2 semanas", de: "1-2 Wochen", nl: "1-2 weken" },
          { en: "1-3 months", es: "1-3 meses", de: "1-3 Monate", nl: "1-3 maanden" },
          { en: "3-6 months", es: "3-6 meses", de: "3-6 Monate", nl: "3-6 maanden" },
          { en: "1-2 yrs", es: "1-2 años", de: "1-2 Jahre", nl: "1-2 jaar" }
        ],
        correct: 2,
        explanation: {
          en: "Most beers stay fresh for 3-6 months when stored properly. Some styles like IPAs are best consumed fresh, while others like barley wines can age longer.",
          es: "La mayoría de las cervezas permanecen frescas durante 3-6 meses cuando se almacenan correctamente. Algunos estilos como las IPAs se consumen mejor frescas, mientras que otras como los vinos de cebada pueden envejecer más tiempo.",
          de: "Die meisten Biere bleiben 3-6 Monate frisch, wenn sie richtig gelagert werden. Einige Stile wie IPAs werden am besten frisch konsumiert, während andere wie Gerstenweine länger reifen können.",
          nl: "De meeste bieren blijven 3-6 maanden vers wanneer ze goed worden bewaard. Sommige stijlen zoals IPA's worden het best vers geconsumeerd, terwijl anderen zoals gerstwijnen langer kunnen rijpen."
        }
      },
      {
        question: {
          en: "What does 'draught' or 'draft' beer mean?",
          es: "¿Qué significa cerveza 'de barril' o 'draft'?",
          de: "Was bedeutet 'Fassbier' oder 'Draft'-Bier?",
          nl: "Wat betekent 'tap' of 'draft' bier?"
        },
        options: [
          { en: "Beer served from a keg", es: "Cerveza servida de un barril", de: "Bier aus einem Fass serviert", nl: "Bier getapt uit een vat" },
          { en: "Beer with low alcohol", es: "Cerveza con bajo alcohol", de: "Bier mit niedrigem Alkohol", nl: "Bier met laag alcohol" },
          { en: "Beer in cans", es: "Cerveza en latas", de: "Bier in Dosen", nl: "Bier in blikjes" },
          { en: "Unfinished beer", es: "Cerveza sin terminar", de: "Unfertiges Bier", nl: "Onafgemaakt bier" }
        ],
        correct: 0,
        explanation: {
          en: "Draught or draft beer refers to beer served from a keg or cask rather than from a bottle or can. It's typically fresher and has different carbonation.",
          es: "La cerveza de barril o draft se refiere a la cerveza servida de un barril en lugar de una botella o lata. Suele ser más fresca y tiene una carbonatación diferente.",
          de: "Fassbier oder Draft-Bier bezieht sich auf Bier, das aus einem Fass statt aus einer Flasche oder Dose serviert wird. Es ist normalerweise frischer und hat eine andere Kohlensäure.",
          nl: "Tap of draft bier verwijst naar bier dat uit een vat wordt getapt in plaats van uit een fles of blik. Het is meestal verser en heeft een andere koolzuur."
        }
      },
      {
        question: {
          en: "What is 'IBU' in beer terminology?",
          es: "¿Qué es 'IBU' en la terminología cervecera?",
          de: "Was ist 'IBU' in der Bierterminologie?",
          nl: "Wat is 'IBU' in biertermen?"
        },
        options: [
          { en: "International Beer Union", es: "Unión Internacional de Cerveza", de: "Internationale Bier Union", nl: "Internationale Bier Unie" },
          { en: "International Bitterness Units", es: "Unidades Internacionales de Amargor", de: "Internationale Bittereinheiten", nl: "Internationale Bitterheidseenheden" },
          { en: "Irish Beer University", es: "Universidad Irlandesa de Cerveza", de: "Irische Bier Universität", nl: "Ierse Bier Universiteit" },
          { en: "Imported Beer Usage", es: "Uso de Cerveza Importada", de: "Importierte Bier Nutzung", nl: "Geïmporteerd Bier Gebruik" }
        ],
        correct: 1,
        explanation: {
          en: "IBU stands for International Bitterness Units, which measures the bitterness of beer from hops. Higher IBU means more bitter beer.",
          es: "IBU significa Unidades Internacionales de Amargor, que mide el amargor de la cerveza del lúpulo. Un IBU más alto significa cerveza más amarga.",
          de: "IBU steht für Internationale Bittereinheiten, die die Bitterkeit von Bier aus Hopfen messen. Höhere IBU bedeutet bittereres Bier.",
          nl: "IBU staat voor Internationale Bitterheidseenheden, die de bitterheid van bier van hop meet. Hogere IBU betekent bitterder bier."
        }
      },
      {
        question: {
          en: "Why should beer be stored away from light?",
          es: "¿Por qué debe almacenarse la cerveza lejos de la luz?",
          de: "Warum sollte Bier vor Licht geschützt gelagert werden?",
          nl: "Waarom moet bier uit het licht bewaard worden?"
        },
        options: [
          { en: "Light makes beer warm", es: "La luz calienta la cerveza", de: "Licht erwärmt das Bier", nl: "Licht maakt bier warm" },
          { en: "Light can cause skunky flavors", es: "La luz puede causar sabores desagradables", de: "Licht kann unangenehme Aromen verursachen", nl: "Licht kan vieze smaken veroorzaken" },
          { en: "Light reduces alcohol content", es: "La luz reduce el contenido de alcohol", de: "Licht reduziert den Alkoholgehalt", nl: "Licht vermindert het alcoholgehalte" },
          { en: "Light changes the color", es: "La luz cambia el color", de: "Licht verändert die Farbe", nl: "Licht verandert de kleur" }
        ],
        correct: 1,
        explanation: {
          en: "Light exposure, especially UV light, can cause beer to develop 'skunky' or 'light-struck' flavors due to a chemical reaction with hop compounds. This is why many beers come in dark bottles.",
          es: "La exposición a la luz, especialmente la luz UV, puede hacer que la cerveza desarrolle sabores 'desagradables' o 'golpeados por la luz' debido a una reacción química con los compuestos del lúpulo. Por eso muchas cervezas vienen en botellas oscuras.",
          de: "Lichteinwirkung, besonders UV-Licht, kann dazu führen, dass Bier 'unangenehme' oder 'lichtgeschädigte' Aromen entwickelt aufgrund einer chemischen Reaktion mit Hopfenverbindungen. Deshalb kommen viele Biere in dunklen Flaschen.",
          nl: "Blootstelling aan licht, vooral UV-licht, kan ervoor zorgen dat bier 'vieze' of 'lichtgetroffen' smaken ontwikkelt door een chemische reactie met hopverbindingen. Daarom komen veel bieren in donkere flessen."
        }
      },
      {
        question: {
          en: "What is a 'session beer'?",
          es: "¿Qué es una 'cerveza de sesión'?",
          de: "Was ist ein 'Session-Bier'?",
          nl: "Wat is een 'sessie bier'?"
        },
        options: [
          { en: "A beer brewed in sessions", es: "Una cerveza elaborada en sesiones", de: "Ein Bier das in Sitzungen gebraut wird", nl: "Een bier gebrouwen in sessies" },
          { en: "A low-alcohol beer for extended drinking", es: "Una cerveza baja en alcohol para beber prolongado", de: "Ein alkoholarmes Bier für längeres Trinken", nl: "Een laag-alcohol bier voor langdurig drinken" },
          { en: "A beer served in winter", es: "Una cerveza servida en invierno", de: "Ein Bier das im Winter serviert wird", nl: "Een bier geserveerd in de winter" },
          { en: "A beer with special ingredients", es: "Una cerveza con ingredientes especiales", de: "Ein Bier mit besonderen Zutaten", nl: "Een bier met speciale ingrediënten" }
        ],
        correct: 1,
        explanation: {
          en: "A session beer is a low-alcohol beer (typically 3-5% ABV) designed to be consumed over an extended drinking session without causing excessive intoxication.",
          es: "Una cerveza de sesión es una cerveza baja en alcohol (típicamente 3-5% ABV) diseñada para consumirse durante una sesión de bebida prolongada sin causar intoxicación excesiva.",
          de: "Ein Session-Bier ist ein alkoholarmes Bier (typischerweise 3-5% Vol.), das für längere Trinksitzungen gedacht ist, ohne übermäßige Trunkenheit zu verursachen.",
          nl: "Een sessie bier is een laag-alcohol bier (meestal 3-5% ABV) ontworpen om gedurende een langere drinksessie geconsumeerd te worden zonder overmatige dronkenschap te veroorzaken."
        }
      },
      {
        question: {
          en: "What is the 'body' of a beer?",
          es: "¿Qué es el 'cuerpo' de una cerveza?",
          de: "Was ist der 'Körper' eines Bieres?",
          nl: "Wat is het 'body' van een bier?"
        },
        options: [
          { en: "The bottle shape", es: "La forma de la botella", de: "Die Flaschenform", nl: "De flesvorm" },
          { en: "The mouthfeel and thickness", es: "La sensación en boca y espesor", de: "Das Mundgefühl und die Dicke", nl: "Het mondgevoel en de dikte" },
          { en: "The alcohol content", es: "El contenido de alcohol", de: "Der Alkoholgehalt", nl: "Het alcoholgehalte" },
          { en: "The color intensity", es: "La intensidad del color", de: "Die Farbintensität", nl: "De kleurintensiteit" }
        ],
        correct: 1,
        explanation: {
          en: "The body of a beer refers to its mouthfeel and thickness, ranging from light and thin to full and creamy. It's influenced by proteins, residual sugars, and alcohol content.",
          es: "El cuerpo de una cerveza se refiere a su sensación en boca y espesor, que va desde ligero y delgado hasta completo y cremoso. Está influenciado por proteínas, azúcares residuales y contenido de alcohol.",
          de: "Der Körper eines Bieres bezieht sich auf sein Mundgefühl und seine Dicke, von leicht und dünn bis voll und cremig. Er wird von Proteinen, Restzuckern und Alkoholgehalt beeinflusst.",
          nl: "Het body van een bier verwijst naar het mondgevoel en de dikte, variërend van licht en dun tot vol en romig. Het wordt beïnvloed door eiwitten, restsuikers en alcoholgehalte."
        }
      },
      {
        question: {
          en: "What does 'conditioning' mean in beer production?",
          es: "¿Qué significa 'acondicionamiento' en la producción de cerveza?",
          de: "Was bedeutet 'Konditionierung' in der Bierproduktion?",
          nl: "Wat betekent 'conditionering' in de bierproductie?"
        },
        options: [
          { en: "Cooling the beer", es: "Enfriar la cerveza", de: "Das Bier kühlen", nl: "Het bier koelen" },
          { en: "Adding carbonation and allowing flavors to develop", es: "Añadir carbonatación y permitir que se desarrollen los sabores", de: "Kohlensäure hinzufügen und Aromen entwickeln lassen", nl: "Koolzuur toevoegen en smaken laten ontwikkelen" },
          { en: "Filtering impurities", es: "Filtrar impurezas", de: "Verunreinigungen filtern", nl: "Onzuiverheden filteren" },
          { en: "Packaging the beer", es: "Empacar la cerveza", de: "Das Bier verpacken", nl: "Het bier verpakken" }
        ],
        correct: 1,
        explanation: {
          en: "Conditioning is the process where beer develops carbonation and flavors mature. It can happen in the bottle (bottle-conditioned) or in tanks (force-conditioned).",
          es: "El acondicionamiento es el proceso donde la cerveza desarrolla carbonatación y los sabores maduran. Puede ocurrir en la botella (acondicionado en botella) o en tanques (acondicionado por fuerza).",
          de: "Konditionierung ist der Prozess, bei dem Bier Kohlensäure entwickelt und Aromen reifen. Es kann in der Flasche (flaschenkonditioniert) oder in Tanks (zwangskonditioniert) geschehen.",
          nl: "Conditionering is het proces waarbij bier koolzuur ontwikkelt en smaken rijpen. Het kan in de fles gebeuren (fles-geconditioneerd) of in tanks (geforceerd-geconditioneerd)."
        }
      },
      {
        question: {
          en: "What temperature should beer be stored at?",
          es: "¿A qué temperatura debe almacenarse la cerveza?",
          de: "Bei welcher Temperatur sollte Bier gelagert werden?",
          nl: "Op welke temperatuur moet bier bewaard worden?"
        },
        options: [
          { en: "Below freezing", es: "Por debajo del punto de congelación", de: "Unter dem Gefrierpunkt", nl: "Onder het vriespunt" },
          { en: "Room temperature (20-25°C)", es: "Temperatura ambiente (20-25°C)", de: "Raumtemperatur (20-25°C)", nl: "Kamertemperatuur (20-25°C)" },
          { en: "Cool and constant (10-15°C)", es: "Fresco y constante (10-15°C)", de: "Kühl und konstant (10-15°C)", nl: "Koel en constant (10-15°C)" },
          { en: "Very cold (0-3°C)", es: "Muy frío (0-3°C)", de: "Sehr kalt (0-3°C)", nl: "Zeer koud (0-3°C)" }
        ],
        correct: 2,
        explanation: {
          en: "Beer should be stored at a cool, constant temperature around 10-15°C (50-59°F). Avoid temperature fluctuations which can affect flavor and quality.",
          es: "La cerveza debe almacenarse a una temperatura fresca y constante alrededor de 10-15°C (50-59°F). Evite las fluctuaciones de temperatura que pueden afectar el sabor y la calidad.",
          de: "Bier sollte bei einer kühlen, konstanten Temperatur um 10-15°C (50-59°F) gelagert werden. Vermeiden Sie Temperaturschwankungen, die Geschmack und Qualität beeinträchtigen können.",
          nl: "Bier moet bewaard worden op een koele, constante temperatuur rond 10-15°C (50-59°F). Vermijd temperatuurschommelingen die smaak en kwaliteit kunnen beïnvloeden."
        }
      },
      {
        question: {
          en: "What is the purpose of the bubbles in beer?",
          es: "¿Cuál es el propósito de las burbujas en la cerveza?",
          de: "Was ist der Zweck der Blasen im Bier?",
          nl: "Wat is het doel van de bubbels in bier?"
        },
        options: [
          { en: "To make it look appealing", es: "Para que se vea atractiva", de: "Um es ansprechend aussehen zu lassen", nl: "Om het er aantrekkelijk uit te laten zien" },
          { en: "To carry flavor and aroma compounds", es: "Para transportar compuestos de sabor y aroma", de: "Um Geschmacks- und Aromastoffe zu transportieren", nl: "Om smaak- en aromastoffen te dragen" },
          { en: "To increase alcohol content", es: "Para aumentar el contenido de alcohol", de: "Um den Alkoholgehalt zu erhöhen", nl: "Om het alcoholgehalte te verhogen" },
          { en: "To preserve the beer longer", es: "Para conservar la cerveza más tiempo", de: "Um das Bier länger zu konservieren", nl: "Om het bier langer te bewaren" }
        ],
        correct: 1,
        explanation: {
          en: "The bubbles (carbonation) in beer carry flavor and aroma compounds to your nose and palate, enhancing the drinking experience. They also provide mouthfeel and help release volatiles.",
          es: "Las burbujas (carbonatación) en la cerveza transportan compuestos de sabor y aroma a tu nariz y paladar, mejorando la experiencia de bebida. También proporcionan sensación en boca y ayudan a liberar volátiles.",
          de: "Die Blasen (Kohlensäure) im Bier transportieren Geschmacks- und Aromastoffe zu Ihrer Nase und Ihrem Gaumen und verbessern das Trinkerlebnis. Sie sorgen auch für Mundgefühl und helfen, Flüchtige freizusetzen.",
          nl: "De bubbels (koolzuur) in bier dragen smaak- en aromastoffen naar je neus en gehemelte, wat de drinkervaring verbetert. Ze zorgen ook voor mondgevoel en helpen vluchtige stoffen vrij te maken."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();
