// Quiz Level 3: Drinken - Sterke drank (Intermediate - Production Basics)
(function() {
  const level3 = {
    name: {
      en: "Intermediate - Production Basics",
      es: "Intermedio - Fundamentos de Producción",
      de: "Mittelstufe - Produktionsgrundlagen",
      nl: "Gemiddeld - Productie Grondbeginselen"
    },
    questions: [
      {
        question: {
          en: "What is the purpose of fermentation in spirit production?",
          es: "¿Cuál es el propósito de la fermentación en la producción de licores?",
          de: "Was ist der Zweck der Fermentation bei der Spirituosenherstellung?",
          nl: "Wat is het doel van fermentatie in de productie van sterke dranken?"
        },
        options: [
          { en: "To add color to the spirit", es: "Para añadir color al licor", de: "Um dem Schnaps Farbe zu verleihen", nl: "Om kleur toe te voegen aan de spirit" },
          { en: "To convert sugars into alcohol", es: "Para convertir azúcares en alcohol", de: "Um Zucker in Alkohol umzuwandeln", nl: "Om suikers om te zetten in alcohol" },
          { en: "To filter impurities", es: "Para filtrar impurezas", de: "Um Verunreinigungen zu filtern", nl: "Om onzuiverheden te filteren" },
          { en: "To increase the proof", es: "Para aumentar la graduación", de: "Um den Alkoholgehalt zu erhöhen", nl: "Om het alcoholpercentage te verhogen" }
        ],
        correct: 1,
        explanation: {
          en: "Fermentation is the biological process where yeast converts sugars (from grains, fruits, or other sources) into alcohol and carbon dioxide. This creates the alcoholic base that will later be distilled to make spirits.",
          es: "La fermentación es el proceso biológico donde la levadura convierte los azúcares (de granos, frutas, u otras fuentes) en alcohol y dióxido de carbono. Esto crea la base alcohólica que luego será destilada para hacer licores.",
          de: "Fermentation ist der biologische Prozess, bei dem Hefe Zucker (aus Getreide, Früchten oder anderen Quellen) in Alkohol und Kohlendioxid umwandelt. Dies erzeugt die alkoholische Basis, die später destilliert wird, um Spirituosen herzustellen.",
          nl: "Fermentatie is het biologische proces waarbij gist suikers (van granen, vruchten, of andere bronnen) omzet in alcohol en koolstofdioxide. Dit creëert de alcoholische basis die later gedestilleerd wordt om sterke dranken te maken."
        }
      },
      {
        question: {
          en: "What are the two main products of distillation?",
          es: "¿Cuáles son los dos productos principales de la destilación?",
          de: "Was sind die beiden Hauptprodukte der Destillation?",
          nl: "Wat zijn de twee hoofdproducten van destillatie?"
        },
        options: [
          { en: "Alcohol and water", es: "Alcohol y agua", de: "Alkohol und Wasser", nl: "Alcohol en water" },
          { en: "Sugar and yeast", es: "Azúcar y levadura", de: "Zucker und Hefe", nl: "Suiker en gist" },
          { en: "Concentrated alcohol and waste water", es: "Alcohol concentrado y agua residual", de: "Konzentrierter Alkohol und Abwasser", nl: "Geconcentreerde alcohol en afvalwater" },
          { en: "Flavor compounds and ethanol", es: "Compuestos de sabor y etanol", de: "Geschmacksverbindungen und Ethanol", nl: "Smaakverbindingen en ethanol" }
        ],
        correct: 2,
        explanation: {
          en: "Distillation separates the fermented liquid into concentrated alcohol (the 'hearts' containing ethanol and flavor compounds) and waste water (containing water, impurities, and undesirable compounds). The concentrated alcohol becomes the spirit.",
          es: "La destilación separa el líquido fermentado en alcohol concentrado (los 'corazones' que contienen etanol y compuestos de sabor) y agua residual (que contiene agua, impurezas, y compuestos indeseables). El alcohol concentrado se convierte en el licor.",
          de: "Die Destillation trennt die fermentierte Flüssigkeit in konzentrierten Alkohol (die 'Herzen' mit Ethanol und Geschmacksverbindungen) und Abwasser (mit Wasser, Verunreinigungen und unerwünschten Verbindungen). Der konzentrierte Alkohol wird zur Spirituose.",
          nl: "Destillatie scheidt de gefermenteerde vloeistof in geconcentreerde alcohol (de 'harten' met ethanol en smaakverbindingen) en afvalwater (met water, onzuiverheden, en ongewenste verbindingen). De geconcentreerde alcohol wordt de spirit."
        }
      },
      {
        question: {
          en: "Which grains are commonly used to make whiskey?",
          es: "¿Qué granos se usan comúnmente para hacer whisky?",
          de: "Welche Getreidearten werden häufig für die Whisky-Herstellung verwendet?",
          nl: "Welke granen worden vaak gebruikt om whisky te maken?"
        },
        options: [
          { en: "Rice and quinoa", es: "Arroz y quinoa", de: "Reis und Quinoa", nl: "Rijst en quinoa" },
          { en: "Corn, wheat, barley, and rye", es: "Maíz, trigo, cebada, y centeno", de: "Mais, Weizen, Gerste und Roggen", nl: "Maïs, tarwe, gerst, en rogge" },
          { en: "Oats and buckwheat", es: "Avena y trigo sarraceno", de: "Hafer und Buchweizen", nl: "Haver en boekweit" },
          { en: "Millet and sorghum", es: "Mijo y sorgo", de: "Hirse und Sorghum", nl: "Gierst en sorghum" }
        ],
        correct: 1,
        explanation: {
          en: "Whiskey is primarily made from corn, wheat, barley, and rye. Different combinations create different whiskey styles: bourbon uses at least 51% corn, rye whiskey uses at least 51% rye, and many whiskies use barley for enzymes that convert starches to sugars.",
          es: "El whisky se hace principalmente de maíz, trigo, cebada, y centeno. Diferentes combinaciones crean diferentes estilos de whisky: el bourbon usa al menos 51% de maíz, el whisky de centeno usa al menos 51% de centeno, y muchos whiskies usan cebada para enzimas que convierten almidones en azúcares.",
          de: "Whisky wird hauptsächlich aus Mais, Weizen, Gerste und Roggen hergestellt. Verschiedene Kombinationen erzeugen verschiedene Whisky-Stile: Bourbon verwendet mindestens 51% Mais, Rye Whiskey mindestens 51% Roggen, und viele Whiskys verwenden Gerste für Enzyme, die Stärke in Zucker umwandeln.",
          nl: "Whisky wordt voornamelijk gemaakt van maïs, tarwe, gerst, en rogge. Verschillende combinaties creëren verschillende whisky stijlen: bourbon gebruikt minstens 51% maïs, rogge whisky gebruikt minstens 51% rogge, en veel whiskies gebruiken gerst voor enzymen die zetmelen omzetten in suikers."
        }
      },
      {
        question: {
          en: "What is a 'mash bill' in spirit production?",
          es: "¿Qué es un 'mash bill' en la producción de licores?",
          de: "Was ist eine 'Mash Bill' bei der Spirituosenherstellung?",
          nl: "Wat is een 'mash bill' in de productie van sterke dranken?"
        },
        options: [
          { en: "The cost of ingredients", es: "El costo de los ingredientes", de: "Die Kosten der Zutaten", nl: "De kosten van ingrediënten" },
          { en: "The recipe of grains used", es: "La receta de granos utilizados", de: "Das Rezept der verwendeten Getreide", nl: "Het recept van gebruikte granen" },
          { en: "The fermentation time", es: "El tiempo de fermentación", de: "Die Fermentationszeit", nl: "De fermentatietijd" },
          { en: "The distillation temperature", es: "La temperatura de destilación", de: "Die Destillationstemperatur", nl: "De destilatietemperatuur" }
        ],
        correct: 1,
        explanation: {
          en: "A mash bill is the recipe that specifies the percentage of different grains used in making a spirit. For example, a bourbon mash bill might be 60% corn, 30% wheat, and 10% malted barley. This recipe significantly affects the final flavor profile.",
          es: "Un mash bill es la receta que especifica el porcentaje de diferentes granos usados para hacer un licor. Por ejemplo, un mash bill de bourbon podría ser 60% maíz, 30% trigo, y 10% cebada malteada. Esta receta afecta significativamente el perfil de sabor final.",
          de: "Eine Mash Bill ist das Rezept, das den Prozentsatz verschiedener Getreidearten für die Spirituosenherstellung angibt. Zum Beispiel könnte eine Bourbon Mash Bill 60% Mais, 30% Weizen und 10% gemälzte Gerste enthalten. Dieses Rezept beeinflusst das finale Geschmacksprofil erheblich.",
          nl: "Een mash bill is het recept dat het percentage van verschillende granen specificeert die gebruikt worden bij het maken van een spirit. Bijvoorbeeld, een bourbon mash bill zou 60% maïs, 30% tarwe, en 10% gemout gerst kunnen zijn. Dit recept beïnvloedt het uiteindelijke smaakprofiel aanzienlijk."
        }
      },
      {
        question: {
          en: "What happens during the malting process?",
          es: "¿Qué sucede durante el proceso de malteado?",
          de: "Was passiert während des Mälzungsprozesses?",
          nl: "Wat gebeurt er tijdens het moutproces?"
        },
        options: [
          { en: "Grains are dried and stored", es: "Los granos se secan y almacenan", de: "Getreide wird getrocknet und gelagert", nl: "Granen worden gedroogd en opgeslagen" },
          { en: "Grains are soaked, germinated, then dried to create enzymes", es: "Los granos se remojan, germinan, luego se secan para crear enzimas", de: "Getreide wird eingeweicht, gekeimt, dann getrocknet, um Enzyme zu erzeugen", nl: "Granen worden geweekt, gekiemd, dan gedroogd om enzymen te creëren" },
          { en: "Grains are ground into flour", es: "Los granos se muelen en harina", de: "Getreide wird zu Mehl gemahlen", nl: "Granen worden gemalen tot meel" },
          { en: "Grains are fermented with yeast", es: "Los granos se fermentan con levadura", de: "Getreide wird mit Hefe fermentiert", nl: "Granen worden gefermenteerd met gist" }
        ],
        correct: 1,
        explanation: {
          en: "Malting is the process where grains (usually barley) are soaked in water to start germination, which produces enzymes that convert starches to sugars. The grains are then dried to stop germination while preserving the enzymes needed for fermentation.",
          es: "El malteado es el proceso donde los granos (usualmente cebada) se remojan en agua para iniciar la germinación, que produce enzimas que convierten almidones en azúcares. Los granos luego se secan para detener la germinación mientras se preservan las enzimas necesarias para la fermentación.",
          de: "Mälzung ist der Prozess, bei dem Getreide (meist Gerste) in Wasser eingeweicht wird, um die Keimung zu starten, die Enzyme produziert, die Stärke in Zucker umwandeln. Das Getreide wird dann getrocknet, um die Keimung zu stoppen, während die für die Fermentation benötigten Enzyme erhalten bleiben.",
          nl: "Mouten is het proces waarbij granen (meestal gerst) in water geweekt worden om kieming te starten, wat enzymen produceert die zetmelen omzetten in suikers. De granen worden dan gedroogd om kieming te stoppen terwijl de enzymen die nodig zijn voor fermentatie behouden blijven."
        }
      },
      {
        question: {
          en: "What is the difference between pot stills and column stills?",
          es: "¿Cuál es la diferencia entre alambiques de olla y alambiques de columna?",
          de: "Was ist der Unterschied zwischen Pot Stills und Column Stills?",
          nl: "Wat is het verschil tussen pot stills en kolom stills?"
        },
        options: [
          { en: "Pot stills are electric, column stills use gas", es: "Los alambiques de olla son eléctricos, los de columna usan gas", de: "Pot Stills sind elektrisch, Column Stills verwenden Gas", nl: "Pot stills zijn elektrisch, kolom stills gebruiken gas" },
          { en: "Pot stills produce higher proof, column stills lower proof", es: "Los alambiques de olla producen mayor graduación, los de columna menor graduación", de: "Pot Stills produzieren höheren Alkoholgehalt, Column Stills niedrigeren", nl: "Pot stills produceren hoger alcoholpercentage, kolom stills lager" },
          { en: "Pot stills batch distill with more flavor, column stills continuous distill with more purity", es: "Los alambiques de olla destilan por lotes con más sabor, los de columna destilan continuamente con más pureza", de: "Pot Stills destillieren chargenweise mit mehr Geschmack, Column Stills kontinuierlich mit mehr Reinheit", nl: "Pot stills destilleren in batches met meer smaak, kolom stills continu destilleren met meer zuiverheid" },
          { en: "There is no difference", es: "No hay diferencia", de: "Es gibt keinen Unterschied", nl: "Er is geen verschil" }
        ],
        correct: 2,
        explanation: {
          en: "Pot stills operate in batches, producing spirits with more flavor compounds and character but lower efficiency. Column stills operate continuously, producing cleaner, more neutral spirits at higher proof and greater efficiency. Most whiskeys use pot stills, while vodka typically uses column stills.",
          es: "Los alambiques de olla operan por lotes, produciendo licores con más compuestos de sabor y carácter pero menor eficiencia. Los alambiques de columna operan continuamente, produciendo licores más limpios y neutros con mayor graduación y eficiencia. La mayoría de whiskies usan alambiques de olla, mientras que el vodka típicamente usa alambiques de columna.",
          de: "Pot Stills arbeiten chargenweise und produzieren Spirituosen mit mehr Geschmacksverbindungen und Charakter, aber geringerer Effizienz. Column Stills arbeiten kontinuierlich und produzieren sauberere, neutralere Spirituosen mit höherem Alkoholgehalt und größerer Effizienz. Die meisten Whiskys verwenden Pot Stills, während Wodka typischerweise Column Stills verwendet.",
          nl: "Pot stills werken in batches en produceren sterke dranken met meer smaakverbindingen en karakter maar lagere efficiëntie. Kolom stills werken continu en produceren schonere, meer neutrale sterke dranken met hoger alcoholpercentage en grotere efficiëntie. De meeste whiskies gebruiken pot stills, terwijl vodka typisch kolom stills gebruikt."
        }
      },
      {
        question: {
          en: "What are 'heads', 'hearts', and 'tails' in distillation?",
          es: "¿Qué son las 'cabezas', 'corazones', y 'colas' en la destilación?",
          de: "Was sind 'Heads', 'Hearts' und 'Tails' bei der Destillation?",
          nl: "Wat zijn 'heads', 'hearts', en 'tails' bij destillatie?"
        },
        options: [
          { en: "Different types of stills", es: "Diferentes tipos de alambiques", de: "Verschiedene Arten von Brennblasen", nl: "Verschillende soorten stills" },
          { en: "Parts of the distillation apparatus", es: "Partes del aparato de destilación", de: "Teile der Destillationsapparatur", nl: "Onderdelen van het destillatieapparaat" },
          { en: "Different fractions of distillate collected at different times", es: "Diferentes fracciones de destilado recolectadas en diferentes momentos", de: "Verschiedene Destillatfraktionen, die zu verschiedenen Zeiten gesammelt werden", nl: "Verschillende fracties van destillaat verzameld op verschillende tijden" },
          { en: "Different grain types", es: "Diferentes tipos de granos", de: "Verschiedene Getreidearten", nl: "Verschillende graansoorten" }
        ],
        correct: 2,
        explanation: {
          en: "During distillation, different compounds vaporize at different temperatures. 'Heads' are the first vapors (containing harsh compounds), 'hearts' are the middle portion (containing desirable ethanol and flavors), and 'tails' are the last vapors (containing heavy, oily compounds). Only the hearts are typically kept for the final spirit.",
          es: "Durante la destilación, diferentes compuestos se vaporizan a diferentes temperaturas. Las 'cabezas' son los primeros vapores (que contienen compuestos ásperos), los 'corazones' son la porción media (que contiene etanol deseable y sabores), y las 'colas' son los últimos vapores (que contienen compuestos pesados y aceitosos). Solo los corazones se mantienen típicamente para el licor final.",
          de: "Während der Destillation verdampfen verschiedene Verbindungen bei verschiedenen Temperaturen. 'Heads' sind die ersten Dämpfe (mit scharfen Verbindungen), 'Hearts' sind der mittlere Teil (mit erwünschtem Ethanol und Aromen), und 'Tails' sind die letzten Dämpfe (mit schweren, öligen Verbindungen). Normalerweise werden nur die Hearts für die finale Spirituose behalten.",
          nl: "Tijdens destillatie verdampen verschillende verbindingen bij verschillende temperaturen. 'Heads' zijn de eerste dampen (met scherpe verbindingen), 'hearts' zijn het middelste gedeelte (met gewenste ethanol en smaken), en 'tails' zijn de laatste dampen (met zware, olieachtige verbindingen). Alleen de hearts worden typisch behouden voor de uiteindelijke spirit."
        }
      },
      {
        question: {
          en: "Why is aging important for many spirits?",
          es: "¿Por qué es importante el envejecimiento para muchos licores?",
          de: "Warum ist die Reifung für viele Spirituosen wichtig?",
          nl: "Waarom is rijping belangrijk voor veel sterke dranken?"
        },
        options: [
          { en: "To increase alcohol content", es: "Para aumentar el contenido de alcohol", de: "Um den Alkoholgehalt zu erhöhen", nl: "Om het alcoholgehalte te verhogen" },
          { en: "To reduce production costs", es: "Para reducir costos de producción", de: "Um Produktionskosten zu senken", nl: "Om productiekosten te verlagen" },
          { en: "To develop flavor, color, and smoothness", es: "Para desarrollar sabor, color, y suavidad", de: "Um Geschmack, Farbe und Geschmeidigkeit zu entwickeln", nl: "Om smaak, kleur, en zachtheid te ontwikkelen" },
          { en: "To remove impurities", es: "Para remover impurezas", de: "Um Verunreinigungen zu entfernen", nl: "Om onzuiverheden te verwijderen" }
        ],
        correct: 2,
        explanation: {
          en: "Aging allows spirits to interact with wood (usually oak), which imparts flavors like vanilla, caramel, and spice. It also allows harsh compounds to mellow, creates complex flavor interactions, and develops the amber color typical of aged spirits. The longer aging typically produces smoother, more complex spirits.",
          es: "El envejecimiento permite que los licores interactúen con la madera (usualmente roble), que imparte sabores como vainilla, caramelo, y especias. También permite que los compuestos ásperos se suavicen, crea interacciones de sabor complejas, y desarrolla el color ámbar típico de licores envejecidos. El envejecimiento más largo típicamente produce licores más suaves y complejos.",
          de: "Die Reifung ermöglicht es Spirituosen, mit Holz (meist Eiche) zu interagieren, was Aromen wie Vanille, Karamell und Gewürze verleiht. Es ermöglicht auch das Mildern scharfer Verbindungen, schafft komplexe Geschmacksinteraktionen und entwickelt die bernsteinfarbene Farbe typischer gereifter Spirituosen. Längere Reifung produziert typischerweise glattere, komplexere Spirituosen.",
          nl: "Rijping zorgt ervoor dat sterke dranken kunnen interacteren met hout (meestal eiken), wat smaken zoals vanille, karamel, en specerijen geeft. Het zorgt ook dat scherpe verbindingen zachter worden, creëert complexe smaakinteracties, en ontwikkelt de amber kleur typisch voor gerijpte sterke dranken. Langere rijping produceert typisch zachtere, meer complexe sterke dranken."
        }
      },
      {
        question: {
          en: "What is the purpose of charring oak barrels?",
          es: "¿Cuál es el propósito de carbonizar barriles de roble?",
          de: "Was ist der Zweck des Ankohlens von Eichenfässern?",
          nl: "Wat is het doel van het verkolen van eiken vaten?"
        },
        options: [
          { en: "To sterilize the barrel", es: "Para esterilizar el barril", de: "Um das Fass zu sterilisieren", nl: "Om het vat te steriliseren" },
          { en: "To create flavor compounds and filter the spirit", es: "Para crear compuestos de sabor y filtrar el licor", de: "Um Geschmacksverbindungen zu erzeugen und die Spirituose zu filtern", nl: "Om smaakverbindingen te creëren en de spirit te filteren" },
          { en: "To make the barrel waterproof", es: "Para hacer el barril impermeable", de: "Um das Fass wasserdicht zu machen", nl: "Om het vat waterdicht te maken" },
          { en: "To reduce the barrel size", es: "Para reducir el tamaño del barril", de: "Um die Fassgröße zu reduzieren", nl: "Om de vatgrootte te verkleinen" }
        ],
        correct: 1,
        explanation: {
          en: "Charring the inside of oak barrels creates a layer of charcoal that acts as a natural filter, removing harsh compounds from the spirit. The heat also caramelizes wood sugars, creating flavor compounds like vanilla, caramel, and smoke that enhance the spirit's taste and aroma.",
          es: "Carbonizar el interior de los barriles de roble crea una capa de carbón que actúa como filtro natural, removiendo compuestos ásperos del licor. El calor también carameliza los azúcares de la madera, creando compuestos de sabor como vainilla, caramelo, y humo que mejoran el sabor y aroma del licor.",
          de: "Das Ankohlen der Innenseite von Eichenfässern erzeugt eine Kohleschicht, die als natürlicher Filter wirkt und scharfe Verbindungen aus der Spirituose entfernt. Die Hitze karamellisiert auch Holzzucker und erzeugt Geschmacksverbindungen wie Vanille, Karamell und Rauch, die Geschmack und Aroma der Spirituose verbessern.",
          nl: "Het verkolen van de binnenkant van eiken vaten creëert een laag houtskool die werkt als een natuurlijk filter, dat scherpe verbindingen uit de spirit haalt. De hitte karamelliseert ook houtsuikers, waardoor smaakverbindingen zoals vanille, karamel, en rook ontstaan die de smaak en het aroma van de spirit verbeteren."
        }
      },
      {
        question: {
          en: "What is a 'wash' in spirit production?",
          es: "¿Qué es un 'wash' en la producción de licores?",
          de: "Was ist eine 'Wash' bei der Spirituosenherstellung?",
          nl: "Wat is een 'wash' in de productie van sterke dranken?"
        },
        options: [
          { en: "The cleaning process for equipment", es: "El proceso de limpieza del equipo", de: "Der Reinigungsprozess für Ausrüstung", nl: "Het schoonmaakproces voor apparatuur" },
          { en: "The fermented liquid before distillation", es: "El líquido fermentado antes de la destilación", de: "Die fermentierte Flüssigkeit vor der Destillation", nl: "De gefermenteerde vloeistof voor destillatie" },
          { en: "The water used to dilute spirits", es: "El agua usada para diluir licores", de: "Das Wasser zum Verdünnen von Spirituosen", nl: "Het water gebruikt om sterke dranken te verdunnen" },
          { en: "The final product after aging", es: "El producto final después del envejecimiento", de: "Das Endprodukt nach der Reifung", nl: "Het eindproduct na rijping" }
        ],
        correct: 1,
        explanation: {
          en: "A wash is the fermented liquid that results from yeast converting sugars into alcohol. It typically has an alcohol content of 7-10% ABV and resembles a strong beer or wine. This wash is then distilled to concentrate the alcohol and create the spirit.",
          es: "Un wash es el líquido fermentado que resulta de la levadura convirtiendo azúcares en alcohol. Típicamente tiene un contenido de alcohol de 7-10% ABV y se parece a una cerveza fuerte o vino. Este wash luego se destila para concentrar el alcohol y crear el licor.",
          de: "Eine Wash ist die fermentierte Flüssigkeit, die entsteht, wenn Hefe Zucker in Alkohol umwandelt. Sie hat typischerweise einen Alkoholgehalt von 7-10% ABV und ähnelt einem starken Bier oder Wein. Diese Wash wird dann destilliert, um den Alkohol zu konzentrieren und die Spirituose zu erzeugen.",
          nl: "Een wash is de gefermenteerde vloeistof die ontstaat wanneer gist suikers omzet in alcohol. Het heeft typisch een alcoholgehalte van 7-10% ABV en lijkt op een sterk bier of wijn. Deze wash wordt dan gedestilleerd om de alcohol te concentreren en de spirit te maken."
        }
      },
      {
        question: {
          en: "What is the main ingredient in rum?",
          es: "¿Cuál es el ingrediente principal del ron?",
          de: "Was ist die Hauptzutat in Rum?",
          nl: "Wat is het hoofdingrediënt in rum?"
        },
        options: [
          { en: "Agave", es: "Agave", de: "Agave", nl: "Agave" },
          { en: "Sugar cane or molasses", es: "Caña de azúcar o melaza", de: "Zuckerrohr oder Melasse", nl: "Suikerriet of melasse" },
          { en: "Grapes", es: "Uvas", de: "Trauben", nl: "Druiven" },
          { en: "Potatoes", es: "Papas", de: "Kartoffeln", nl: "Aardappelen" }
        ],
        correct: 1,
        explanation: {
          en: "Rum is made from sugar cane juice or molasses (a byproduct of sugar production). The sugar is fermented and then distilled to create rum.",
          es: "El ron se hace de jugo de caña de azúcar o melaza (un subproducto de la producción de azúcar). El azúcar se fermenta y luego se destila para crear ron.",
          de: "Rum wird aus Zuckerrohrsaft oder Melasse (einem Nebenprodukt der Zuckerproduktion) hergestellt. Der Zucker wird fermentiert und dann destilliert.",
          nl: "Rum wordt gemaakt van suikerriet sap of melasse (een bijproduct van suikerproductie). De suiker wordt gefermenteerd en dan gedestilleerd."
        }
      },
      {
        question: {
          en: "Which spirit is made from juniper berries?",
          es: "¿Qué licor se hace de bayas de enebro?",
          de: "Welche Spirituose wird aus Wacholderbeeren hergestellt?",
          nl: "Welke sterke drank wordt gemaakt van jeneverbessen?"
        },
        options: [
          { en: "Vodka", es: "Vodka", de: "Wodka", nl: "Vodka" },
          { en: "Gin", es: "Ginebra", de: "Gin", nl: "Gin" },
          { en: "Rum", es: "Ron", de: "Rum", nl: "Rum" },
          { en: "Tequila", es: "Tequila", de: "Tequila", nl: "Tequila" }
        ],
        correct: 1,
        explanation: {
          en: "Gin is defined by its primary flavoring of juniper berries, which give it a distinctive piney, botanical character.",
          es: "La ginebra se define por su sabor principal de bayas de enebro, que le dan un carácter distintivo de pino y botánico.",
          de: "Gin ist durch seine primäre Aromatisierung mit Wacholderbeeren definiert, die ihm einen charakteristischen kiefernartigen Charakter verleihen.",
          nl: "Gin wordt gedefinieerd door zijn primaire smaak van jeneverbessen, die het een kenmerkend dennenboom-achtig karakter geven."
        }
      },
      {
        question: {
          en: "Why must bourbon be aged in new barrels?",
          es: "¿Por qué el bourbon debe envejecerse en barriles nuevos?",
          de: "Warum muss Bourbon in neuen Fässern gereift werden?",
          nl: "Waarom moet bourbon gerijpt worden in nieuwe vaten?"
        },
        options: [
          { en: "To maximize flavor extraction from fresh wood", es: "Para maximizar la extracción de sabor de madera fresca", de: "Um die Geschmacksextraktion aus frischem Holz zu maximieren", nl: "Om smaakextractie uit vers hout te maximaliseren" },
          { en: "Used barrels are too expensive", es: "Los barriles usados son demasiado caros", de: "Gebrauchte Fässer sind zu teuer", nl: "Gebruikte vaten zijn te duur" },
          { en: "New barrels age faster", es: "Los barriles nuevos envejecen más rápido", de: "Neue Fässer reifen schneller", nl: "Nieuwe vaten rijpen sneller" },
          { en: "It's only a suggestion", es: "Es solo una sugerencia", de: "Es ist nur ein Vorschlag", nl: "Het is slechts een suggestie" }
        ],
        correct: 0,
        explanation: {
          en: "By law, bourbon must be aged in new, charred American oak barrels to ensure maximum extraction of vanilla, caramel, and oak flavors.",
          es: "Por ley, el bourbon debe envejecerse en barriles nuevos de roble americano carbonizado para asegurar la máxima extracción de sabores.",
          de: "Laut Gesetz muss Bourbon in neuen, verkohlten amerikanischen Eichenfässern gereift werden um maximale Extraktion zu gewährleisten.",
          nl: "Volgens de wet moet bourbon gerijpt worden in nieuwe, verkoold Amerikaanse eiken vaten voor maximale extractie."
        }
      },
      {
        question: {
          en: "What is the difference between single malt and blended whisky?",
          es: "¿Cuál es la diferencia entre whisky de malta y whisky mezclado?",
          de: "Was ist der Unterschied zwischen Single Malt und Blended Whisky?",
          nl: "Wat is het verschil tussen single malt en blended whisky?"
        },
        options: [
          { en: "Single malt is from one distillery using only malted barley", es: "El single malt es de una destilería usando solo cebada malteada", de: "Single Malt stammt aus einer Brennerei mit nur gemälzter Gerste", nl: "Single malt is van één distilleerderij met alleen gemout gerst" },
          { en: "Blended is always superior", es: "El mezclado siempre es superior", de: "Blended ist immer überlegen", nl: "Blended is altijd superieur" },
          { en: "They use different aging processes", es: "Usan diferentes procesos de envejecimiento", de: "Sie verwenden unterschiedliche Reifungsprozesse", nl: "Ze gebruiken verschillende rijpingsprocessen" },
          { en: "Single malt contains no malt", es: "El single malt no contiene malta", de: "Single Malt enthält kein Malz", nl: "Single malt bevat geen mout" }
        ],
        correct: 0,
        explanation: {
          en: "Single malt whisky is produced at a single distillery using only malted barley. Blended whisky combines multiple whiskies.",
          es: "El whisky single malt se produce en una sola destilería usando solo cebada malteada. El whisky mezclado combina múltiples whiskies.",
          de: "Single Malt Whisky wird in einer einzigen Brennerei nur aus gemälzter Gerste hergestellt. Blended Whisky kombiniert mehrere Whiskys.",
          nl: "Single malt whisky wordt geproduceerd in één distilleerderij met alleen gemout gerst. Blended whisky combineert meerdere whiskies."
        }
      },
      {
        question: {
          en: "What does 'ABV' stand for in spirits labeling?",
          es: "¿Qué significa 'ABV' en el etiquetado de licores?",
          de: "Wofür steht 'ABV' auf Spirituosen-Etiketten?",
          nl: "Wat betekent 'ABV' op sterke drank etiketten?"
        },
        options: [
          { en: "Alcohol By Volume", es: "Alcohol por Volumen", de: "Alkohol nach Volumen", nl: "Alcohol By Volume" },
          { en: "Aged Barrel Vintage", es: "Barril Envejecido Vintage", de: "Gereiftes Fass Jahrgang", nl: "Aged Barrel Vintage" },
          { en: "American Bourbon Verification", es: "Verificación de Bourbon", de: "Bourbon Verifizierung", nl: "Bourbon Verificatie" },
          { en: "Alcohol Beverage Value", es: "Valor de Bebida", de: "Getränk Wert", nl: "Drank Waarde" }
        ],
        correct: 0,
        explanation: {
          en: "ABV stands for Alcohol By Volume, which measures the percentage of alcohol in a beverage.",
          es: "ABV significa Alcohol por Volumen, que mide el porcentaje de alcohol en una bebida.",
          de: "ABV steht für Alkohol nach Volumen und misst den Prozentsatz des Alkohols in einem Getränk.",
          nl: "ABV staat voor Alcohol By Volume, wat het percentage alcohol in een drankje meet."
        }
      },
      {
        question: {
          en: "What role does yeast play in spirit production?",
          es: "¿Qué papel juega la levadura en la producción de licores?",
          de: "Welche Rolle spielt Hefe bei der Spirituosenherstellung?",
          nl: "Welke rol speelt gist in de productie van sterke drank?"
        },
        options: [
          { en: "Yeast converts sugars into alcohol during fermentation", es: "La levadura convierte azúcares en alcohol", de: "Hefe wandelt Zucker in Alkohol um", nl: "Gist zet suikers om in alcohol" },
          { en: "Yeast adds color", es: "La levadura añade color", de: "Hefe fügt Farbe hinzu", nl: "Gist voegt kleur toe" },
          { en: "Yeast is used for filtration", es: "La levadura se usa para filtración", de: "Hefe wird zur Filtration verwendet", nl: "Gist wordt gebruikt voor filtratie" },
          { en: "Yeast increases proof", es: "La levadura aumenta la graduación", de: "Hefe erhöht den Alkoholgehalt", nl: "Gist verhoogt het percentage" }
        ],
        correct: 0,
        explanation: {
          en: "Yeast performs fermentation - consuming sugars and converting them into ethanol and carbon dioxide.",
          es: "La levadura realiza la fermentación - consumiendo azúcares y convirtiéndolos en etanol y dióxido de carbono.",
          de: "Hefe führt die Fermentation durch - konsumiert Zucker und wandelt sie in Ethanol und Kohlendioxid um.",
          nl: "Gist voert fermentatie uit - consumeert suikers en zet deze om in ethanol en kooldioxide."
        }
      },
      {
        question: {
          en: "Why is copper commonly used in pot stills?",
          es: "¿Por qué se usa comúnmente el cobre en alambiques?",
          de: "Warum wird Kupfer häufig in Brennblasen verwendet?",
          nl: "Waarom wordt koper vaak gebruikt in pot stills?"
        },
        options: [
          { en: "Copper removes sulfur compounds", es: "El cobre elimina compuestos de azufre", de: "Kupfer entfernt Schwefelverbindungen", nl: "Koper verwijdert zwavelverbindingen" },
          { en: "Copper is cheapest", es: "El cobre es más barato", de: "Kupfer ist am billigsten", nl: "Koper is goedkoopst" },
          { en: "Copper makes distillation faster", es: "El cobre hace la destilación más rápida", de: "Kupfer macht die Destillation schneller", nl: "Koper maakt destillatie sneller" },
          { en: "Copper is easier to clean", es: "El cobre es más fácil de limpiar", de: "Kupfer ist leichter zu reinigen", nl: "Koper is makkelijker schoon" }
        ],
        correct: 0,
        explanation: {
          en: "Copper reacts with and removes unpleasant sulfur compounds that would otherwise create off-flavors.",
          es: "El cobre reacciona y elimina compuestos de azufre desagradables que de otro modo crearían sabores extraños.",
          de: "Kupfer reagiert mit unangenehmen Schwefelverbindungen und entfernt diese, die sonst Fehlaromen erzeugen würden.",
          nl: "Koper reageert met en verwijdert onaangename zwavelverbindingen die anders off-smaken zouden creëren."
        }
      },
      {
        question: {
          en: "What is the primary difference between white and dark rum?",
          es: "¿Cuál es la principal diferencia entre ron blanco y oscuro?",
          de: "Was ist der Hauptunterschied zwischen weißem und dunklem Rum?",
          nl: "Wat is het belangrijkste verschil tussen witte en donkere rum?"
        },
        options: [
          { en: "Dark rum is aged longer in barrels", es: "El ron oscuro se envejece más tiempo", de: "Dunkler Rum wird länger gereift", nl: "Donkere rum wordt langer gerijpt" },
          { en: "They come from different plants", es: "Provienen de plantas diferentes", de: "Sie stammen von verschiedenen Pflanzen", nl: "Ze komen van verschillende planten" },
          { en: "White rum has higher alcohol", es: "El ron blanco tiene más alcohol", de: "Weißer Rum hat mehr Alkohol", nl: "Witte rum heeft meer alcohol" },
          { en: "Dark rum is artificially colored", es: "El ron oscuro está coloreado", de: "Dunkler Rum ist gefärbt", nl: "Donkere rum is gekleurd" }
        ],
        correct: 0,
        explanation: {
          en: "Dark rum typically spends more time aging in oak barrels, which imparts color and rich flavors.",
          es: "El ron oscuro típicamente pasa más tiempo envejeciendo en barriles de roble, lo que imparte color y sabores ricos.",
          de: "Dunkler Rum verbringt typischerweise mehr Zeit in Eichenfässern, was Farbe und reiche Aromen verleiht.",
          nl: "Donkere rum brengt typisch meer tijd door met rijpen in eiken vaten, wat kleur en rijke smaken geeft."
        }
      },
      {
        question: {
          en: "What does 'cask strength' mean on a whiskey bottle?",
          es: "¿Qué significa 'cask strength' en una botella de whiskey?",
          de: "Was bedeutet 'Cask Strength' auf einer Whiskey-Flasche?",
          nl: "Wat betekent 'cask strength' op een whiskey fles?"
        },
        options: [
          { en: "Bottled at barrel alcohol level without dilution", es: "Embotellado al nivel del barril sin dilución", de: "In Fassstärke abgefüllt ohne Verdünnung", nl: "Gebotteld op vatniveau zonder verdunning" },
          { en: "Made from stronger barrels", es: "Hecho de barriles más fuertes", de: "Aus stärkeren Fässern", nl: "Gemaakt van sterkere vaten" },
          { en: "Aged in multiple casks", es: "Envejecido en múltiples barriles", de: "In mehreren Fässern gereift", nl: "Gerijpt in meerdere vaten" },
          { en: "Always 50% alcohol", es: "Siempre 50% alcohol", de: "Immer 50% Alkohol", nl: "Altijd 50% alcohol" }
        ],
        correct: 0,
        explanation: {
          en: "Cask strength whiskey is bottled directly from the barrel without adding water, typically resulting in 55-65% ABV.",
          es: "El whiskey cask strength se embotella directamente del barril sin añadir agua, típicamente 55-65% ABV.",
          de: "Cask Strength Whiskey wird direkt aus dem Fass abgefüllt ohne Wasserzugabe, typischerweise 55-65% ABV.",
          nl: "Cask strength whiskey wordt direct uit het vat gebotteld zonder water, typisch 55-65% ABV."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();
