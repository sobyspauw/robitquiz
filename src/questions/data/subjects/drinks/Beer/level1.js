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
        }    },
    {
      question: {
        en: "What is mashing in beer brewing?",
        es: "¿Qué es el macerado en la elaboración de cerveza?",
        de: "Was ist Maischen beim Bierbrauen?",
        nl: "Wat is maischen bij het brouwen van bier?"
      },
      options: [
        { en: "Mixing crushed malt with hot water to extract sugars", es: "Mezclar malta triturada con agua caliente para extraer azúcares", de: "Gemälztes Getreide mit heißem Wasser mischen, um Zucker zu extrahieren", nl: "Gemalen mout mengen met heet water om suikers te extraheren" },
        { en: "Crushing the grains", es: "Triturar los granos", de: "Die Körner zerkleinern", nl: "De granen vermalen" },
        { en: "Boiling the beer", es: "Hervir la cerveza", de: "Das Bier kochen", nl: "Het bier koken" },
        { en: "Adding carbonation", es: "Añadir carbonatación", de: "Kohlensäure hinzufügen", nl: "Koolzuur toevoegen" }
      ],
      correct: 0,
      explanation: {
        en: "Mashing is the process of mixing crushed malt with hot water to convert starches into fermentable sugars, creating the sweet liquid called wort.",
        es: "El macerado es el proceso de mezclar malta triturada con agua caliente para convertir almidones en azúcares fermentables, creando el líquido dulce llamado mosto.",
        de: "Maischen ist der Prozess, bei dem gemälztes Getreide mit heißem Wasser gemischt wird, um Stärke in fermentierbare Zucker umzuwandeln und die süße Flüssigkeit namens Würze zu erzeugen.",
        nl: "Maischen is het proces waarbij gemalen mout wordt gemengd met heet water om zetmeel om te zetten in fermenteerbare suikers, waardoor de zoete vloeistof wort ontstaat."
      }
    },
    {
      question: {
        en: "What does 'craft beer' typically refer to?",
        es: "¿A qué se refiere típicamente 'cerveza artesanal'?",
        de: "Was bezeichnet typischerweise 'Craft-Bier'?",
        nl: "Waar verwijst 'craft bier' meestal naar?"
      },
      options: [
        { en: "Beer from small, independent breweries with traditional methods", es: "Cerveza de pequeñas cervecerías independientes con métodos tradicionales", de: "Bier von kleinen, unabhängigen Brauereien mit traditionellen Methoden", nl: "Bier van kleine, onafhankelijke brouwerijen met traditionele methoden" },
        { en: "Beer made by hand only", es: "Cerveza hecha solo a mano", de: "Nur handgemachtes Bier", nl: "Bier alleen met de hand gemaakt" },
        { en: "Beer with special packaging", es: "Cerveza con empaque especial", de: "Bier mit besonderer Verpackung", nl: "Bier met speciale verpakking" },
        { en: "Low-alcohol beer", es: "Cerveza baja en alcohol", de: "Alkoholarmes Bier", nl: "Laag-alcohol bier" }
      ],
      correct: 0,
      explanation: {
        en: "Craft beer refers to beer produced by small, independent breweries using traditional brewing methods and often emphasizing quality, flavor, and brewing technique over mass production.",
        es: "La cerveza artesanal se refiere a la cerveza producida por pequeñas cervecerías independientes que utilizan métodos de elaboración tradicionales y a menudo enfatizan la calidad, el sabor y la técnica de elaboración sobre la producción en masa.",
        de: "Craft-Bier bezieht sich auf Bier, das von kleinen, unabhängigen Brauereien mit traditionellen Braumethoden hergestellt wird und oft Qualität, Geschmack und Brautechnik über Massenproduktion stellt.",
        nl: "Craft bier verwijst naar bier geproduceerd door kleine, onafhankelijke brouwerijen die traditionele brouwmethoden gebruiken en vaak kwaliteit, smaak en brouwtechniek benadrukken boven massaproductie."
      }
    },
    {
      question: {
        en: "What is a 'hoppy' beer?",
        es: "¿Qué es una cerveza 'lupulada'?",
        de: "Was ist ein 'hopfiges' Bier?",
        nl: "Wat is een 'hoppig' bier?"
      },
      options: [
        { en: "Beer with prominent hop flavors and aromas", es: "Cerveza con sabores y aromas prominentes de lúpulo", de: "Bier mit ausgeprägten Hopfenaromen und -geschmack", nl: "Bier met prominente hop smaken en aroma's" },
        { en: "Beer that makes you hop", es: "Cerveza que te hace saltar", de: "Bier das einen hüpfen lässt", nl: "Bier dat je laat huppelen" },
        { en: "Beer with extra carbonation", es: "Cerveza con carbonatación extra", de: "Bier mit extra Kohlensäure", nl: "Bier met extra koolzuur" },
        { en: "Beer served cold", es: "Cerveza servida fría", de: "Kalt serviertes Bier", nl: "Koud geserveerd bier" }
      ],
      correct: 0,
      explanation: {
        en: "A hoppy beer has pronounced hop character with strong bitter, floral, citrus, or piney flavors and aromas. IPAs are typically very hoppy beers.",
        es: "Una cerveza lupulada tiene un carácter de lúpulo pronunciado con sabores y aromas fuertes amargos, florales, cítricos o de pino. Las IPAs son típicamente cervezas muy lupuladas.",
        de: "Ein hopfiges Bier hat ausgeprägten Hopfencharakter mit starken bitteren, blumigen, zitrusartigen oder harzigen Aromen und Geschmack. IPAs sind typischerweise sehr hopfige Biere.",
        nl: "Een hoppig bier heeft een uitgesproken hop karakter met sterke bittere, bloem-, citrus- of dennensmaak en aroma's. IPA's zijn meestal zeer hoppige bieren."
      }
    },
    {
      question: {
        en: "What is the purpose of the 'boil' in beer brewing?",
        es: "¿Cuál es el propósito del 'hervido' en la elaboración de cerveza?",
        de: "Was ist der Zweck des 'Kochens' beim Bierbrauen?",
        nl: "Wat is het doel van het 'koken' bij het brouwen van bier?"
      },
      options: [
        { en: "Sterilize wort, extract hop flavors, and concentrate sugars", es: "Esterilizar el mosto, extraer sabores de lúpulo y concentrar azúcares", de: "Würze sterilisieren, Hopfenaromen extrahieren und Zucker konzentrieren", nl: "Wort steriliseren, hop smaken extraheren en suikers concentreren" },
        { en: "Make beer hotter", es: "Hacer la cerveza más caliente", de: "Bier heißer machen", nl: "Bier heter maken" },
        { en: "Add color to beer", es: "Agregar color a la cerveza", de: "Bier Farbe geben", nl: "Kleur toevoegen aan bier" },
        { en: "Remove alcohol", es: "Eliminar alcohol", de: "Alkohol entfernen", nl: "Alcohol verwijderen" }
      ],
      correct: 0,
      explanation: {
        en: "Boiling the wort sterilizes it, extracts bitterness and flavors from hops, concentrates the sugars, and drives off unwanted volatile compounds.",
        es: "Hervir el mosto lo esteriliza, extrae amargor y sabores del lúpulo, concentra los azúcares y elimina compuestos volátiles no deseados.",
        de: "Das Kochen der Würze sterilisiert sie, extrahiert Bitterkeit und Aromen aus dem Hopfen, konzentriert die Zucker und treibt unerwünschte flüchtige Verbindungen aus.",
        nl: "Het koken van de wort steriliseert het, extraheert bitterheid en smaken van hop, concentreert de suikers en verwijdert ongewenste vluchtige stoffen."
      }
    },
    {
      question: {
        en: "What is a 'blonde ale'?",
        es: "¿Qué es una 'ale rubia'?",
        de: "Was ist ein 'Blonde Ale'?",
        nl: "Wat is een 'blonde ale'?"
      },
      options: [
        { en: "Light-colored, mild ale with balanced malt and hop flavor", es: "Ale de color claro y suave con sabor equilibrado de malta y lúpulo", de: "Helles, mildes Ale mit ausgewogenem Malz- und Hopfengeschmack", nl: "Lichtgekleurde, milde ale met gebalanceerde mout en hop smaak" },
        { en: "Beer made by blonde brewers", es: "Cerveza hecha por cerveceros rubios", de: "Bier von blonden Brauern", nl: "Bier gemaakt door blonde brouwers" },
        { en: "Very dark ale", es: "Ale muy oscura", de: "Sehr dunkles Ale", nl: "Zeer donkere ale" },
        { en: "Non-alcoholic beer", es: "Cerveza sin alcohol", de: "Alkoholfreies Bier", nl: "Alcoholvrij bier" }
      ],
      correct: 0,
      explanation: {
        en: "A blonde ale is a light-colored, easy-drinking ale with a balanced flavor profile featuring mild malt sweetness and moderate hop bitterness.",
        es: "Una ale rubia es una ale de color claro y fácil de beber con un perfil de sabor equilibrado que presenta dulzura de malta suave y amargor de lúpulo moderado.",
        de: "Ein Blonde Ale ist ein helles, leicht trinkbares Ale mit ausgewogenem Geschmacksprofil mit milder Malzsüße und moderater Hopfenbitterkeit.",
        nl: "Een blonde ale is een lichtgekleurde, gemakkelijk drinkbare ale met een gebalanceerd smaakprofiel met milde moutzoetheid en gematigde hop bitterheid."
      }
    },
    {
      question: {
        en: "What is 'wort' in beer brewing?",
        es: "¿Qué es el 'mosto' en la elaboración de cerveza?",
        de: "Was ist 'Würze' beim Bierbrauen?",
        nl: "Wat is 'wort' bij het brouwen van bier?"
      },
      options: [
        { en: "Sweet liquid extracted from mashed grains before fermentation", es: "Líquido dulce extraído de granos macerados antes de la fermentación", de: "Süße Flüssigkeit aus gemälztem Getreide vor der Fermentation", nl: "Zoete vloeistof geëxtraheerd uit gemalen granen voor fermentatie" },
        { en: "Yeast residue", es: "Residuo de levadura", de: "Hefereste", nl: "Gist residu" },
        { en: "Hop flowers", es: "Flores de lúpulo", de: "Hopfenblüten", nl: "Hop bloemen" },
        { en: "Fermented beer", es: "Cerveza fermentada", de: "Fermentiertes Bier", nl: "Gefermenteerd bier" }
      ],
      correct: 0,
      explanation: {
        en: "Wort is the sweet liquid produced from mashing grain that contains the sugars that will be fermented by yeast to create beer.",
        es: "El mosto es el líquido dulce producido del macerado de grano que contiene los azúcares que serán fermentados por la levadura para crear cerveza.",
        de: "Würze ist die süße Flüssigkeit, die beim Maischen von Getreide entsteht und die Zucker enthält, die von Hefe zu Bier vergoren werden.",
        nl: "Wort is de zoete vloeistof geproduceerd door het maischen van graan die de suikers bevat die door gist zullen worden gefermenteerd om bier te creëren."
      }
    },
    {
      question: {
        en: "What is a 'saison' beer?",
        es: "¿Qué es una cerveza 'saison'?",
        de: "Was ist ein 'Saison'-Bier?",
        nl: "Wat is een 'saison' bier?"
      },
      options: [
        { en: "Belgian farmhouse ale, pale and refreshing", es: "Ale de granja belga, pálida y refrescante", de: "Belgisches Farmhouse Ale, hell und erfrischend", nl: "Belgische boerderij ale, bleek en verfrissend" },
        { en: "Seasonal beer only available in winter", es: "Cerveza estacional solo disponible en invierno", de: "Saisonbier nur im Winter erhältlich", nl: "Seizoensbier alleen verkrijgbaar in de winter" },
        { en: "Dark German lager", es: "Lager alemana oscura", de: "Dunkles deutsches Lager", nl: "Donkere Duitse lager" },
        { en: "Fruit-flavored beer", es: "Cerveza con sabor a frutas", de: "Fruchtbier", nl: "Fruitbier" }
      ],
      correct: 0,
      explanation: {
        en: "Saison is a Belgian farmhouse ale style that's typically pale, refreshing, and highly carbonated with fruity and spicy yeast characteristics. Originally brewed in winter for summer consumption by farmworkers.",
        es: "Saison es un estilo de ale de granja belga que es típicamente pálida, refrescante y altamente carbonatada con características de levadura afrutadas y especiadas. Originalmente elaborada en invierno para consumo de verano por trabajadores agrícolas.",
        de: "Saison ist ein belgischer Farmhouse-Ale-Stil, der typischerweise hell, erfrischend und stark kohlensäurehaltig ist mit fruchtigen und würzigen Hefecharakteristiken. Ursprünglich im Winter für den Sommerkonsum durch Landarbeiter gebraut.",
        nl: "Saison is een Belgische boerderij ale stijl die meestal bleek, verfrissend en sterk koolzuurhoudend is met fruitige en kruidige gist kenmerken. Oorspronkelijk gebrouwen in de winter voor zomerconsumptie door boerderijwerkers."
      }
    },
    {
      question: {
        en: "What is a 'trappist beer'?",
        es: "¿Qué es una 'cerveza trapense'?",
        de: "Was ist ein 'Trappisten-Bier'?",
        nl: "Wat is een 'trappistenbier'?"
      },
      options: [
        { en: "Beer brewed by or under supervision of Trappist monks", es: "Cerveza elaborada por o bajo supervisión de monjes trapenses", de: "Bier von oder unter Aufsicht von Trappistenmönchen gebraut", nl: "Bier gebrouwen door of onder toezicht van trappisten monniken" },
        { en: "Beer served in monasteries", es: "Cerveza servida en monasterios", de: "Bier das in Klöstern serviert wird", nl: "Bier geserveerd in kloosters" },
        { en: "Beer with religious symbols", es: "Cerveza con símbolos religiosos", de: "Bier mit religiösen Symbolen", nl: "Bier met religieuze symbolen" },
        { en: "Beer aged in churches", es: "Cerveza envejecida en iglesias", de: "Bier das in Kirchen gereift ist", nl: "Bier gerijpt in kerken" }
      ],
      correct: 0,
      explanation: {
        en: "Trappist beer is brewed by or under supervision of Trappist monks within monastery walls, with proceeds supporting the monastery and charitable causes. There are only a few certified Trappist breweries worldwide.",
        es: "La cerveza trapense es elaborada por o bajo supervisión de monjes trapenses dentro de las paredes del monasterio, con ganancias que apoyan al monasterio y causas caritativas. Solo hay unas pocas cervecerías trapenses certificadas en el mundo.",
        de: "Trappisten-Bier wird von oder unter Aufsicht von Trappistenmönchen innerhalb von Klostermauern gebraut, wobei die Erlöse das Kloster und wohltätige Zwecke unterstützen. Es gibt weltweit nur wenige zertifizierte Trappisten-Brauereien.",
        nl: "Trappistenbier wordt gebrouwen door of onder toezicht van trappisten monniken binnen kloostermuren, waarbij de opbrengsten het klooster en goede doelen ondersteunen. Er zijn wereldwijd slechts enkele gecertificeerde trappisten brouwerijen."
      }
    },
    {
      question: {
        en: "What does 'bottled-conditioned' mean?",
        es: "¿Qué significa 'acondicionado en botella'?",
        de: "Was bedeutet 'flaschenkonditioniert'?",
        nl: "Wat betekent 'fles-geconditioneerd'?"
      },
      options: [
        { en: "Beer that continues fermenting in the bottle creating natural carbonation", es: "Cerveza que continúa fermentando en la botella creando carbonatación natural", de: "Bier das in der Flasche weitergärt und natürliche Kohlensäure erzeugt", nl: "Bier dat blijft fermenteren in de fles waardoor natuurlijk koolzuur ontstaat" },
        { en: "Beer stored in cold bottles", es: "Cerveza almacenada en botellas frías", de: "Bier in kalten Flaschen gelagert", nl: "Bier opgeslagen in koude flessen" },
        { en: "Beer in special bottles", es: "Cerveza en botellas especiales", de: "Bier in speziellen Flaschen", nl: "Bier in speciale flessen" },
        { en: "Beer with added sugar", es: "Cerveza con azúcar añadido", de: "Bier mit zugesetztem Zucker", nl: "Bier met toegevoegde suiker" }
      ],
      correct: 0,
      explanation: {
        en: "Bottle-conditioned beer undergoes a secondary fermentation in the bottle where yeast and sugar are added, creating natural carbonation and often improving with age.",
        es: "La cerveza acondicionada en botella experimenta una fermentación secundaria en la botella donde se añaden levadura y azúcar, creando carbonatación natural y a menudo mejorando con la edad.",
        de: "Flaschenkonditioniertes Bier durchläuft eine sekundäre Gärung in der Flasche, bei der Hefe und Zucker hinzugefügt werden, wodurch natürliche Kohlensäure entsteht und es oft mit dem Alter besser wird.",
        nl: "Fles-geconditioneerd bier ondergaat een secundaire fermentatie in de fles waarbij gist en suiker worden toegevoegd, waardoor natuurlijk koolzuur ontstaat en het vaak verbetert met de leeftijd."
      }
    },
    {
      question: {
        en: "What is a 'growler' in beer terminology?",
        es: "¿Qué es un 'growler' en terminología cervecera?",
        de: "Was ist ein 'Growler' in der Bierterminologie?",
        nl: "Wat is een 'growler' in biertermen?"
      },
      options: [
        { en: "Large bottle or jug for transporting draft beer", es: "Botella o jarra grande para transportar cerveza de barril", de: "Große Flasche oder Krug für den Transport von Fassbier", nl: "Grote fles of kan voor het transporteren van tapbier" },
        { en: "Beer with strong carbonation", es: "Cerveza con carbonatación fuerte", de: "Bier mit starker Kohlensäure", nl: "Bier met sterke koolzuur" },
        { en: "Type of beer glass", es: "Tipo de vaso de cerveza", de: "Art von Bierglas", nl: "Type bierglas" },
        { en: "Beer brewing equipment", es: "Equipo de elaboración de cerveza", de: "Bierbrau-Ausrüstung", nl: "Bierbrouw apparatuur" }
      ],
      correct: 0,
      explanation: {
        en: "A growler is a large container (typically 64 oz or 2 liters) used to transport draft beer from a brewery or taproom for consumption at home.",
        es: "Un growler es un recipiente grande (típicamente 64 oz o 2 litros) utilizado para transportar cerveza de barril desde una cervecería o sala de grifos para consumo en casa.",
        de: "Ein Growler ist ein großer Behälter (typischerweise 64 oz oder 2 Liter), der verwendet wird, um Fassbier von einer Brauerei oder Schankraum für den Konsum zu Hause zu transportieren.",
        nl: "Een growler is een grote container (meestal 64 oz of 2 liter) gebruikt om tapbier van een brouwerij of taproom te transporteren voor consumptie thuis."
      }
    },
    {
      question: {
        en: "What causes beer to become 'skunky' or 'lightstruck'?",
        es: "¿Qué hace que la cerveza se vuelva 'desagradable' o 'golpeada por la luz'?",
        de: "Was verursacht, dass Bier 'skunky' oder 'lichtgeschädigt' wird?",
        nl: "Wat zorgt ervoor dat bier 'skunky' of 'lichtgetroffen' wordt?"
      },
      options: [
        { en: "UV light breaking down hop compounds", es: "Luz UV que descompone los compuestos del lúpulo", de: "UV-Licht zersetzt Hopfenverbindungen", nl: "UV-licht breekt hop verbindingen af" },
        { en: "Beer getting too cold", es: "Cerveza demasiado fría", de: "Bier wird zu kalt", nl: "Bier wordt te koud" },
        { en: "Too much carbonation", es: "Demasiada carbonatación", de: "Zu viel Kohlensäure", nl: "Te veel koolzuur" },
        { en: "Expired yeast", es: "Levadura caducada", de: "Abgelaufene Hefe", nl: "Verlopen gist" }
      ],
      correct: 0,
      explanation: {
        en: "When beer is exposed to UV light, it causes a chemical reaction with hop compounds that creates a sulfur compound similar to skunk spray, hence the term 'skunky'. This is why many beers use brown bottles for UV protection.",
        es: "Cuando la cerveza se expone a la luz UV, causa una reacción química con los compuestos del lúpulo que crea un compuesto de azufre similar al spray de zorrillo, de ahí el término 'desagradable'. Por eso muchas cervezas usan botellas marrones para protección UV.",
        de: "Wenn Bier UV-Licht ausgesetzt ist, verursacht es eine chemische Reaktion mit Hopfenverbindungen, die eine Schwefelverbindung ähnlich wie Skunk-Spray erzeugt, daher der Begriff 'skunky'. Deshalb verwenden viele Biere braune Flaschen für UV-Schutz.",
        nl: "Wanneer bier wordt blootgesteld aan UV-licht, veroorzaakt het een chemische reactie met hop verbindingen die een zwavelverbinding creëert vergelijkbaar met stinkdier spray, vandaar de term 'skunky'. Daarom gebruiken veel bieren bruine flessen voor UV-bescherming."
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
