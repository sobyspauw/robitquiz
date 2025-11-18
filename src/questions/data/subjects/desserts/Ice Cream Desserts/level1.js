// Quiz Level 1: Dessert - IJsdesserts
(function() {
  const level1 = {
    name: {
      en: "Ice Cream Desserts - Beginner",
      es: "Postres de Helado - Principiante",
      de: "Eisdesserts - Anfänger",
      nl: "IJsdesserts - Beginner"
    },
    questions: [
      {
        question: {
          en: "What are the three main ingredients in basic ice cream?",
          es: "¿Cuáles son los tres ingredientes principales en el helado básico?",
          de: "Was sind die drei Hauptzutaten in einfachem Eis?",
          nl: "Wat zijn de drie hoofdingrediënten in basis ijs?"
        },
        options: [
          { en: "Cream, sugar, and eggs", es: "Crema, azúcar y huevos", de: "Sahne, Zucker und Eier", nl: "Room, suiker en eieren" },
          { en: "Milk, flour, and vanilla", es: "Leche, harina y vainilla", de: "Milch, Mehl und Vanille", nl: "Melk, meel en vanille" },
          { en: "Water, sugar, and fruit", es: "Agua, azúcar y fruta", de: "Wasser, Zucker und Obst", nl: "Water, suiker en fruit" },
          { en: "Butter, cream, and chocolate", es: "Mantequilla, crema y chocolate", de: "Butter, Sahne und Schokolade", nl: "Boter, room en chocolade" }
        ],
        correct: 0,
        explanation: {
          en: "Traditional ice cream is made with cream (or milk), sugar for sweetness, and eggs (often just the yolks) which help create a smooth, rich texture and act as an emulsifier.",
          es: "El helado tradicional se hace con crema (o leche), azúcar para dulzura, y huevos (a menudo solo las yemas) que ayudan a crear una textura suave y rica y actúan como emulsificante.",
          de: "Traditionelles Eis wird mit Sahne (oder Milch), Zucker für Süße und Eiern (oft nur Eigelb) hergestellt, die helfen, eine glatte, reichhaltige Textur zu schaffen und als Emulgator wirken.",
          nl: "Traditioneel ijs wordt gemaakt met room (of melk), suiker voor zoetheid, en eieren (vaak alleen de dooiers) die helpen een gladde, rijke textuur te creëren en als emulgator werken."
        }
      },
      {
        question: {
          en: "What is gelato?",
          es: "¿Qué es gelato?",
          de: "Was ist Gelato?",
          nl: "Wat is gelato?"
        },
        options: [
          { en: "Italian-style ice cream with less air and more intense flavor", es: "Helado de estilo italiano con menos aire y sabor más intenso", de: "Italienisches Eis mit weniger Luft und intensiverem Geschmack", nl: "Italiaans ijs met minder lucht en intensere smaak" },
          { en: "Frozen yogurt", es: "Yogur congelado", de: "Gefrorener Joghurt", nl: "Bevroren yoghurt" },
          { en: "Ice cream with nuts", es: "Helado con nueces", de: "Eis mit Nüssen", nl: "Ijs met noten" },
          { en: "A type of sorbet", es: "Un tipo de sorbete", de: "Eine Art Sorbet", nl: "Een soort sorbet" }
        ],
        correct: 0,
        explanation: {
          en: "Gelato is Italian ice cream that contains less air than regular ice cream (making it denser) and is served at a slightly warmer temperature, which intensifies the flavors.",
          es: "El gelato es helado italiano que contiene menos aire que el helado regular (haciéndolo más denso) y se sirve a una temperatura ligeramente más cálida, lo que intensifica los sabores.",
          de: "Gelato ist italienisches Eis, das weniger Luft als normales Eis enthält (wodurch es dichter wird) und bei einer etwas wärmeren Temperatur serviert wird, was die Aromen intensiviert.",
          nl: "Gelato is Italiaans ijs dat minder lucht bevat dan gewoon ijs (waardoor het dichter wordt) en wordt geserveerd op een iets warmere temperatuur, wat de smaken intensiveert."
        }
      },
      {
        question: {
          en: "What is the difference between sorbet and sherbet?",
          es: "¿Cuál es la diferencia entre sorbete y sherbet?",
          de: "Was ist der Unterschied zwischen Sorbet und Sherbet?",
          nl: "Wat is het verschil tussen sorbet en sherbet?"
        },
        options: [
          { en: "Sorbet contains no dairy, sherbet contains a small amount of dairy", es: "El sorbete no contiene lácteos, el sherbet contiene una pequeña cantidad de lácteos", de: "Sorbet enthält keine Milchprodukte, Sherbet enthält eine kleine Menge Milchprodukte", nl: "Sorbet bevat geen zuivel, sherbet bevat een kleine hoeveelheid zuivel" },
          { en: "They are exactly the same", es: "Son exactamente iguales", de: "Sie sind genau gleich", nl: "Ze zijn precies hetzelfde" },
          { en: "Sorbet is sweeter", es: "El sorbete es más dulce", de: "Sorbet ist süßer", nl: "Sorbet is zoeter" },
          { en: "Sherbet is frozen, sorbet is not", es: "El sherbet está congelado, el sorbete no", de: "Sherbet ist gefroren, Sorbet nicht", nl: "Sherbet is bevroren, sorbet niet" }
        ],
        correct: 0,
        explanation: {
          en: "Sorbet is made only with fruit, sugar, and water - no dairy products. Sherbet contains a small amount of milk or cream, making it slightly creamier than sorbet.",
          es: "El sorbete se hace solo con fruta, azúcar y agua - sin productos lácteos. El sherbet contiene una pequeña cantidad de leche o crema, haciéndolo ligeramente más cremoso que el sorbete.",
          de: "Sorbet wird nur mit Obst, Zucker und Wasser hergestellt - keine Milchprodukte. Sherbet enthält eine kleine Menge Milch oder Sahne, wodurch es etwas cremiger als Sorbet wird.",
          nl: "Sorbet wordt alleen gemaakt met fruit, suiker en water - geen zuivelproducten. Sherbet bevat een kleine hoeveelheid melk of room, waardoor het iets romiger is dan sorbet."
        }
      },
      {
        question: {
          en: "What is a banana split?",
          es: "¿Qué es un banana split?",
          de: "Was ist ein Banana Split?",
          nl: "Wat is een banana split?"
        },
        options: [
          { en: "A dessert with sliced banana, ice cream scoops, and various toppings", es: "Un postre con plátano en rodajas, bolas de helado y varios aderezos", de: "Ein Dessert mit geschnittener Banane, Eiskugeln und verschiedenen Toppings", nl: "Een dessert met gesneden banaan, ijsbolletjes en verschillende toppings" },
          { en: "A type of banana bread", es: "Un tipo de pan de plátano", de: "Eine Art Bananenbrot", nl: "Een soort bananenbrood" },
          { en: "A banana-flavored ice cream", es: "Un helado con sabor a plátano", de: "Ein Bananen-Eis", nl: "Een banaan-gesmaakt ijs" },
          { en: "A way to cut bananas", es: "Una forma de cortar plátanos", de: "Eine Art, Bananen zu schneiden", nl: "Een manier om bananen te snijden" }
        ],
        correct: 0,
        explanation: {
          en: "A banana split is a classic ice cream dessert featuring a banana cut lengthwise, topped with scoops of ice cream (traditionally vanilla, chocolate, and strawberry) and various toppings like whipped cream, nuts, and cherries.",
          es: "Un banana split es un postre clásico de helado que presenta un plátano cortado a lo largo, cubierto con bolas de helado (tradicionalmente vainilla, chocolate y fresa) y varios aderezos como crema batida, nueces y cerezas.",
          de: "Ein Banana Split ist ein klassisches Eisdessert mit einer der Länge nach geschnittenen Banane, belegt mit Eiskugeln (traditionell Vanille, Schokolade und Erdbeere) und verschiedenen Toppings wie Schlagsahne, Nüssen und Kirschen.",
          nl: "Een banana split is een klassiek ijsdessert met een in de lengte gesneden banaan, bedekt met ijsbolletjes (traditioneel vanille, chocolade en aardbei) en verschillende toppings zoals slagroom, noten en kersen."
        }
      },
      {
        question: {
          en: "What does 'tempering' chocolate mean when making ice cream?",
          es: "¿Qué significa 'templar' el chocolate al hacer helado?",
          de: "Was bedeutet 'Temperieren' von Schokolade beim Eismachen?",
          nl: "Wat betekent chocolade 'temperen' bij het maken van ijs?"
        },
        options: [
          { en: "Slowly adding warm chocolate to prevent it from hardening into chunks", es: "Agregar lentamente chocolate tibio para evitar que se endurezca en trozos", de: "Langsam warme Schokolade hinzufügen, um zu verhindern, dass sie zu Stücken erstarrt", nl: "Langzaam warme chocolade toevoegen om te voorkomen dat het hard wordt in stukken" },
          { en: "Making chocolate ice cream", es: "Hacer helado de chocolate", de: "Schokoladeneis machen", nl: "Chocolade-ijs maken" },
          { en: "Melting chocolate completely", es: "Derretir chocolate completamente", de: "Schokolade vollständig schmelzen", nl: "Chocolade volledig smelten" },
          { en: "Adding spices to chocolate", es: "Agregar especias al chocolate", de: "Gewürze zur Schokolade hinzufügen", nl: "Kruiden toevoegen aan chocolade" }
        ],
        correct: 0,
        explanation: {
          en: "When making chocolate ice cream, tempering involves slowly drizzling warm melted chocolate into the cold ice cream base while stirring constantly to prevent the chocolate from seizing and forming hard chunks.",
          es: "Al hacer helado de chocolate, templar implica verter lentamente chocolate derretido tibio en la base fría del helado mientras se revuelve constantemente para evitar que el chocolate se endurezca y forme trozos duros.",
          de: "Beim Schokoladeneismachen beinhaltet Temperieren das langsame Träufeln von warmer geschmolzener Schokolade in die kalte Eisbasis unter ständigem Rühren, um zu verhindern, dass die Schokolade erstarrt und harte Stücke bildet.",
          nl: "Bij het maken van chocolade-ijs houdt temperen in dat je langzaam warme gesmolten chocolade in de koude ijsbasis druppelt terwijl je constant roert om te voorkomen dat de chocolade vastloopt en harde stukken vormt."
        }
      },
      {
        question: {
          en: "What is an ice cream sundae?",
          es: "¿Qué es un sundae de helado?",
          de: "Was ist ein Eissundae?",
          nl: "Wat is een ijssundae?"
        },
        options: [
          { en: "Ice cream served with toppings like sauce, whipped cream, and nuts", es: "Helado servido con aderezos como salsa, crema batida y nueces", de: "Eis serviert mit Toppings wie Sauce, Schlagsahne und Nüssen", nl: "Ijs geserveerd met toppings zoals saus, slagroom en noten" },
          { en: "Ice cream served on Sunday", es: "Helado servido en domingo", de: "Eis serviert am Sonntag", nl: "Ijs geserveerd op zondag" },
          { en: "A type of ice cream flavor", es: "Un tipo de sabor de helado", de: "Eine Art Eisgeschmack", nl: "Een soort ijssmaak" },
          { en: "Frozen ice cream", es: "Helado congelado", de: "Gefrorenes Eis", nl: "Bevroren ijs" }
        ],
        correct: 0,
        explanation: {
          en: "An ice cream sundae is a dessert consisting of one or more scoops of ice cream topped with various sauces (like chocolate or caramel), whipped cream, nuts, cherries, or other toppings.",
          es: "Un sundae de helado es un postre que consiste en una o más bolas de helado cubiertas con varias salsas (como chocolate o caramelo), crema batida, nueces, cerezas u otros aderezos.",
          de: "Ein Eissundae ist ein Dessert bestehend aus einer oder mehreren Eiskugeln, belegt mit verschiedenen Saucen (wie Schokolade oder Karamell), Schlagsahne, Nüssen, Kirschen oder anderen Toppings.",
          nl: "Een ijssundae is een dessert bestaande uit een of meer ijsbolletjes bedekt met verschillende sauzen (zoals chocolade of karamel), slagroom, noten, kersen of andere toppings."
        }
      },
      {
        question: {
          en: "What is the purpose of salt when making homemade ice cream in a traditional ice cream maker?",
          es: "¿Cuál es el propósito de la sal al hacer helado casero en una máquina tradicional de helados?",
          de: "Was ist der Zweck von Salz beim Herstellen von hausgemachtem Eis in einer traditionellen Eismaschine?",
          nl: "Wat is het doel van zout bij het maken van zelfgemaakt ijs in een traditionele ijsmachine?"
        },
        options: [
          { en: "To lower the freezing point of ice and make it colder", es: "Para reducir el punto de congelación del hielo y hacerlo más frío", de: "Um den Gefrierpunkt von Eis zu senken und es kälter zu machen", nl: "Om het vriespunt van ijs te verlagen en het kouder te maken" },
          { en: "To add flavor to the ice cream", es: "Para agregar sabor al helado", de: "Um dem Eis Geschmack zu verleihen", nl: "Om smaak toe te voegen aan het ijs" },
          { en: "To preserve the ice cream", es: "Para preservar el helado", de: "Um das Eis zu konservieren", nl: "Om het ijs te bewaren" },
          { en: "To make the ice cream white", es: "Para hacer el helado blanco", de: "Um das Eis weiß zu machen", nl: "Om het ijs wit te maken" }
        ],
        correct: 0,
        explanation: {
          en: "Salt lowers the freezing point of ice, allowing it to get much colder than 0°C. This super-cold ice mixture surrounding the ice cream container helps freeze the ice cream mixture more effectively.",
          es: "La sal reduce el punto de congelación del hielo, permitiendo que se ponga mucho más frío que 0°C. Esta mezcla de hielo súper fría que rodea el contenedor del helado ayuda a congelar la mezcla de helado más efectivamente.",
          de: "Salz senkt den Gefrierpunkt von Eis und ermöglicht es, viel kälter als 0°C zu werden. Diese superkalte Eismischung um den Eisbehälter hilft, die Eismischung effektiver zu gefrieren.",
          nl: "Zout verlaagt het vriespunt van ijs, waardoor het veel kouder kan worden dan 0°C. Dit superkoud ijsmengsel rond de ijscontainer helpt het ijsmengsel effectiever te bevriezen."
        }
      },
      {
        question: {
          en: "What is soft serve ice cream?",
          es: "¿Qué es el helado soft serve?",
          de: "Was ist Softeis?",
          nl: "Wat is softijs?"
        },
        options: [
          { en: "Ice cream served at a warmer temperature with a softer, creamier texture", es: "Helado servido a una temperatura más cálida con una textura más suave y cremosa", de: "Eis serviert bei wärmerer Temperatur mit weicherer, cremigerer Textur", nl: "Ijs geserveerd op een warmere temperatuur met een zachtere, romige textuur" },
          { en: "Ice cream without sugar", es: "Helado sin azúcar", de: "Eis ohne Zucker", nl: "Ijs zonder suiker" },
          { en: "Melted ice cream", es: "Helado derretido", de: "Geschmolzenes Eis", nl: "Gesmolten ijs" },
          { en: "Ice cream for children", es: "Helado para niños", de: "Eis für Kinder", nl: "Ijs voor kinderen" }
        ],
        correct: 0,
        explanation: {
          en: "Soft serve ice cream is served at a temperature slightly warmer than regular ice cream (around -6°C vs -12°C), giving it a soft, creamy texture that can be dispensed from a machine in swirls.",
          es: "El helado soft serve se sirve a una temperatura ligeramente más cálida que el helado regular (alrededor de -6°C vs -12°C), dándole una textura suave y cremosa que puede dispensarse de una máquina en espirales.",
          de: "Softeis wird bei einer etwas wärmeren Temperatur als normales Eis serviert (etwa -6°C vs -12°C), was ihm eine weiche, cremige Textur verleiht, die aus einer Maschine in Spiralen ausgegeben werden kann.",
          nl: "Softijs wordt geserveerd op een temperatuur die iets warmer is dan gewoon ijs (rond -6°C vs -12°C), wat het een zachte, romige textuur geeft die in krullen uit een machine kan worden gedispenseerd."
        }
      },
      {
        question: {
          en: "What are ice cream sandwiches typically made with?",
          es: "¿Con qué se hacen típicamente los sándwiches de helado?",
          de: "Womit werden Eissandwiches typischerweise gemacht?",
          nl: "Waarmee worden ijssandwiches meestal gemaakt?"
        },
        options: [
          { en: "Two cookies or wafers with ice cream in between", es: "Dos galletas u obleas con helado en el medio", de: "Zwei Kekse oder Waffeln mit Eis dazwischen", nl: "Twee koekjes of wafels met ijs ertussen" },
          { en: "Bread and ice cream", es: "Pan y helado", de: "Brot und Eis", nl: "Brood en ijs" },
          { en: "Cake and ice cream", es: "Pastel y helado", de: "Kuchen und Eis", nl: "Cake en ijs" },
          { en: "Crackers and sorbet", es: "Galletas saladas y sorbete", de: "Cracker und Sorbet", nl: "Crackers en sorbet" }
        ],
        correct: 0,
        explanation: {
          en: "Ice cream sandwiches are made by placing a layer of ice cream between two flat cookies, wafers, or sometimes cake layers. The chocolate wafer cookie version is most common.",
          es: "Los sándwiches de helado se hacen colocando una capa de helado entre dos galletas planas, obleas, o a veces capas de pastel. La versión con galleta de oblea de chocolate es la más común.",
          de: "Eissandwiches werden hergestellt, indem eine Eisschicht zwischen zwei flache Kekse, Waffeln oder manchmal Kuchenschichten gelegt wird. Die Schokoladenwaffel-Version ist am häufigsten.",
          nl: "IJssandwiches worden gemaakt door een laag ijs tussen twee platte koekjes, wafels of soms cakelagen te plaatsen. De chocoladewafel versie is het meest gebruikelijk."
        }
      },
      {
        question: {
          en: "What is gelato typically stored and served at compared to regular ice cream?",
          es: "¿A qué temperatura se almacena y sirve típicamente el gelato comparado con el helado regular?",
          de: "Bei welcher Temperatur wird Gelato typischerweise gelagert und serviert im Vergleich zu normalem Eis?",
          nl: "Op welke temperatuur wordt gelato meestal bewaard en geserveerd vergeleken met gewoon ijs?"
        },
        options: [
          { en: "Slightly warmer temperature", es: "Temperatura ligeramente más cálida", de: "Etwas wärmere Temperatur", nl: "Iets warmere temperatuur" },
          { en: "Much colder temperature", es: "Temperatura mucho más fría", de: "Viel kältere Temperatur", nl: "Veel koudere temperatuur" },
          { en: "Room temperature", es: "Temperatura ambiente", de: "Raumtemperatur", nl: "Kamertemperatuur" },
          { en: "Exactly the same temperature", es: "Exactamente la misma temperatura", de: "Genau die gleiche Temperatur", nl: "Precies dezelfde temperatuur" }
        ],
        correct: 0,
        explanation: {
          en: "Gelato is stored and served at a slightly warmer temperature than regular ice cream (around -12°C vs -18°C). This warmer temperature allows the flavors to be more pronounced and gives gelato its characteristic dense, smooth texture.",
          es: "El gelato se almacena y sirve a una temperatura ligeramente más cálida que el helado regular (alrededor de -12°C vs -18°C). Esta temperatura más cálida permite que los sabores sean más pronunciados y le da al gelato su textura característica densa y suave.",
          de: "Gelato wird bei einer etwas wärmeren Temperatur als normales Eis gelagert und serviert (etwa -12°C vs -18°C). Diese wärmere Temperatur ermöglicht es, dass die Aromen ausgeprägter sind und verleiht Gelato seine charakteristische dichte, glatte Textur.",
          nl: "Gelato wordt bewaard en geserveerd op een iets warmere temperatuur dan gewoon ijs (rond -12°C vs -18°C). Deze warmere temperatuur zorgt ervoor dat de smaken uitgesproken zijn en geeft gelato zijn karakteristieke dichte, gladde textuur."
        }
      },
      {
        question: {
          en: "What is the difference between frozen yogurt and ice cream?",
          es: "¿Cuál es la diferencia entre yogur congelado y helado?",
          de: "Was ist der Unterschied zwischen gefrorenem Joghurt und Eis?",
          nl: "Wat is het verschil tussen bevroren yoghurt en ijs?"
        },
        options: [
          { en: "Frozen yogurt uses yogurt as a base instead of cream", es: "El yogur congelado usa yogur como base en lugar de crema", de: "Gefrorener Joghurt verwendet Joghurt als Basis anstelle von Sahne", nl: "Bevroren yoghurt gebruikt yoghurt als basis in plaats van room" },
          { en: "Frozen yogurt is always sugar-free", es: "El yogur congelado siempre no tiene azúcar", de: "Gefrorener Joghurt ist immer zuckerfrei", nl: "Bevroren yoghurt is altijd suikervrij" },
          { en: "They are exactly the same", es: "Son exactamente iguales", de: "Sie sind genau gleich", nl: "Ze zijn precies hetzelfde" },
          { en: "Frozen yogurt cannot be flavored", es: "El yogur congelado no puede tener sabor", de: "Gefrorener Joghurt kann nicht aromatisiert werden", nl: "Bevroren yoghurt kan niet op smaak gebracht worden" }
        ],
        correct: 0,
        explanation: {
          en: "Frozen yogurt uses cultured yogurt as its base instead of cream or custard like ice cream. This gives it a tangier flavor and often a slightly lower fat content, though it may contain similar amounts of sugar.",
          es: "El yogur congelado usa yogur cultivado como base en lugar de crema o natilla como el helado. Esto le da un sabor más ácido y a menudo un contenido de grasa ligeramente menor, aunque puede contener cantidades similares de azúcar.",
          de: "Gefrorener Joghurt verwendet Kulturjoghurt als Basis anstelle von Sahne oder Pudding wie Eis. Dies verleiht ihm einen säuerlicheren Geschmack und oft einen etwas niedrigeren Fettgehalt, obwohl er ähnliche Mengen an Zucker enthalten kann.",
          nl: "Bevroren yoghurt gebruikt gekweekte yoghurt als basis in plaats van room of custard zoals ijs. Dit geeft het een zuurder smaak en vaak een iets lager vetgehalte, hoewel het vergelijkbare hoeveelheden suiker kan bevatten."
        }
      },
      {
        question: {
          en: "What causes ice crystals to form in homemade ice cream?",
          es: "¿Qué causa que se formen cristales de hielo en el helado casero?",
          de: "Was verursacht die Bildung von Eiskristallen in hausgemachtem Eis?",
          nl: "Wat zorgt ervoor dat ijskristallen vormen in zelfgemaakt ijs?"
        },
        options: [
          { en: "Freezing too slowly or not churning enough", es: "Congelar demasiado lentamente o no batir lo suficiente", de: "Zu langsames Gefrieren oder nicht genügend Rühren", nl: "Te langzaam bevriezen of niet genoeg karnen" },
          { en: "Adding too much sugar", es: "Agregar demasiada azúcar", de: "Zu viel Zucker hinzufügen", nl: "Te veel suiker toevoegen" },
          { en: "Using fresh ingredients", es: "Usar ingredientes frescos", de: "Frische Zutaten verwenden", nl: "Verse ingrediënten gebruiken" },
          { en: "Adding vanilla extract", es: "Agregar extracto de vainilla", de: "Vanilleextrakt hinzufügen", nl: "Vanille extract toevoegen" }
        ],
        correct: 0,
        explanation: {
          en: "Large ice crystals form when ice cream freezes too slowly or isn't churned enough during freezing. Proper churning incorporates air and breaks up ice crystals, creating a smooth, creamy texture.",
          es: "Los cristales de hielo grandes se forman cuando el helado se congela demasiado lentamente o no se bate lo suficiente durante la congelación. El batido adecuado incorpora aire y rompe los cristales de hielo, creando una textura suave y cremosa.",
          de: "Große Eiskristalle bilden sich, wenn Eis zu langsam gefriert oder während des Gefrierens nicht genügend gerührt wird. Ordentliches Rühren arbeitet Luft ein und bricht Eiskristalle auf, wodurch eine glatte, cremige Textur entsteht.",
          nl: "Grote ijskristallen vormen wanneer ijs te langzaam bevriest of niet genoeg wordt gekarnd tijdens het bevriezen. Goed karnen werkt lucht in en breekt ijskristallen op, wat een gladde, romige textuur creëert."
        }
      },
      {
        question: {
          en: "What is a milkshake?",
          es: "¿Qué es un milkshake?",
          de: "Was ist ein Milkshake?",
          nl: "Wat is een milkshake?"
        },
        options: [
          { en: "A blended drink made with ice cream and milk", es: "Una bebida mezclada hecha con helado y leche", de: "Ein gemischtes Getränk aus Eis und Milch", nl: "Een gemixte drank gemaakt van ijs en melk" },
          { en: "Flavored milk", es: "Leche con sabor", de: "Aromatisierte Milch", nl: "Gearomatiseerde melk" },
          { en: "A type of ice cream", es: "Un tipo de helado", de: "Eine Art Eis", nl: "Een soort ijs" },
          { en: "Cold milk", es: "Leche fría", de: "Kalte Milch", nl: "Koude melk" }
        ],
        correct: 0,
        explanation: {
          en: "A milkshake is a sweet drink made by blending ice cream with milk and often flavorings like vanilla, chocolate, or strawberry. It's typically thick and creamy and served cold.",
          es: "Un milkshake es una bebida dulce hecha mezclando helado con leche y a menudo saborizantes como vainilla, chocolate o fresa. Es típicamente espeso y cremoso y se sirve frío.",
          de: "Ein Milkshake ist ein süßes Getränk, das durch Mischen von Eis mit Milch und oft Aromen wie Vanille, Schokolade oder Erdbeere hergestellt wird. Es ist typischerweise dick und cremig und wird kalt serviert.",
          nl: "Een milkshake is een zoete drank gemaakt door ijs te mixen met melk en vaak smaakstoffen zoals vanille, chocolade of aardbei. Het is meestal dik en romig en wordt koud geserveerd."
        }
      },
      {
        question: {
          en: "What is the purpose of sugar in ice cream besides sweetness?",
          es: "¿Cuál es el propósito del azúcar en el helado además de la dulzura?",
          de: "Was ist der Zweck von Zucker in Eis außer Süße?",
          nl: "Wat is het doel van suiker in ijs behalve zoetheid?"
        },
        options: [
          { en: "It lowers the freezing point and affects texture", es: "Reduce el punto de congelación y afecta la textura", de: "Es senkt den Gefrierpunkt und beeinflusst die Textur", nl: "Het verlaagt het vriespunt en beïnvloedt de textuur" },
          { en: "It changes the color", es: "Cambia el color", de: "Es ändert die Farbe", nl: "Het verandert de kleur" },
          { en: "It acts as a preservative only", es: "Solo actúa como conservante", de: "Es wirkt nur als Konservierungsmittel", nl: "Het werkt alleen als conserveermiddel" },
          { en: "It has no other purpose", es: "No tiene otro propósito", de: "Es hat keinen anderen Zweck", nl: "Het heeft geen ander doel" }
        ],
        correct: 0,
        explanation: {
          en: "Sugar not only sweetens ice cream but also lowers the freezing point, which prevents it from freezing solid and helps maintain a scoopable texture. It also affects the smoothness and mouthfeel.",
          es: "El azúcar no solo endulza el helado sino que también reduce el punto de congelación, lo que evita que se congele sólido y ayuda a mantener una textura que se puede servir. También afecta la suavidad y la sensación en la boca.",
          de: "Zucker versüßt nicht nur Eis, sondern senkt auch den Gefrierpunkt, was verhindert, dass es fest gefriert und hilft, eine portionierbare Textur zu erhalten. Es beeinflusst auch die Glätte und das Mundgefühl.",
          nl: "Suiker zoet niet alleen ijs maar verlaagt ook het vriespunt, wat voorkomt dat het steenhard bevriest en helpt een schepbare textuur te behouden. Het beïnvloedt ook de gladheid en mondgevoel."
        }
      },
      {
        question: {
          en: "What are ice pops (popsicles) typically made from?",
          es: "¿De qué están hechas típicamente las paletas heladas?",
          de: "Woraus bestehen Eis am Stiel typischerweise?",
          nl: "Waar worden ijslollies meestal van gemaakt?"
        },
        options: [
          { en: "Flavored liquid frozen on a stick", es: "Líquido con sabor congelado en un palo", de: "Aromatisierte Flüssigkeit gefroren auf einem Stiel", nl: "Gearomatiseerde vloeistof bevroren aan een stokje" },
          { en: "Ice cream shaped into a bar", es: "Helado moldeado en barra", de: "Eis geformt zu einem Riegel", nl: "Ijs gevormd tot een reep" },
          { en: "Frozen cake", es: "Pastel congelado", de: "Gefrorener Kuchen", nl: "Bevroren cake" },
          { en: "Compressed snow", es: "Nieve comprimida", de: "Gepresster Schnee", nl: "Samengeperste sneeuw" }
        ],
        correct: 0,
        explanation: {
          en: "Ice pops or popsicles are made by freezing flavored liquids (like fruit juice, flavored water, or milk-based mixtures) in molds with sticks. They're simpler than ice cream as they don't require churning.",
          es: "Las paletas heladas se hacen congelando líquidos con sabor (como jugo de fruta, agua con sabor, o mezclas a base de leche) en moldes con palos. Son más simples que el helado ya que no requieren batido.",
          de: "Eis am Stiel wird hergestellt, indem aromatisierte Flüssigkeiten (wie Fruchtsaft, aromatisiertes Wasser oder milchbasierte Mischungen) in Formen mit Stielen gefroren werden. Sie sind einfacher als Eis, da sie kein Rühren erfordern.",
          nl: "IJslollies worden gemaakt door gearomatiseerde vloeistoffen (zoals vruchtensap, gearomatiseerd water of op melk gebaseerde mengsels) te bevriezen in vormen met stokjes. Ze zijn eenvoudiger dan ijs omdat ze geen karnen vereisen."
        }
      },
      {
        question: {
          en: "What makes ice cream 'premium' or 'super-premium'?",
          es: "¿Qué hace que el helado sea 'premium' o 'súper premium'?",
          de: "Was macht Eis 'Premium' oder 'Super-Premium'?",
          nl: "Wat maakt ijs 'premium' of 'super-premium'?"
        },
        options: [
          { en: "Higher fat content and less air incorporated", es: "Mayor contenido de grasa y menos aire incorporado", de: "Höherer Fettgehalt und weniger eingearbeitete Luft", nl: "Hoger vetgehalte en minder lucht ingewerkt" },
          { en: "More expensive ingredients only", es: "Solo ingredientes más caros", de: "Nur teurere Zutaten", nl: "Alleen duurdere ingrediënten" },
          { en: "Bigger container size", es: "Tamaño de contenedor más grande", de: "Größere Behältergröße", nl: "Grotere containergrootte" },
          { en: "Special packaging", es: "Empaque especial", de: "Spezialverpackung", nl: "Speciale verpakking" }
        ],
        correct: 0,
        explanation: {
          en: "Premium ice cream has higher fat content (14-18%) and less air whipped in during production, making it denser and creamier. Super-premium has even higher fat content (16-20%) and the least amount of air.",
          es: "El helado premium tiene mayor contenido de grasa (14-18%) y menos aire batido durante la producción, haciéndolo más denso y cremoso. El súper premium tiene contenido de grasa aún mayor (16-20%) y la menor cantidad de aire.",
          de: "Premium-Eis hat einen höheren Fettgehalt (14-18%) und weniger eingeschlagene Luft während der Produktion, wodurch es dichter und cremiger wird. Super-Premium hat sogar höheren Fettgehalt (16-20%) und die geringste Luftmenge.",
          nl: "Premium ijs heeft een hoger vetgehalte (14-18%) en minder lucht ingeklopt tijdens productie, waardoor het dichter en romiger wordt. Super-premium heeft een nog hoger vetgehalte (16-20%) en de minste hoeveelheid lucht."
        }
      },
      {
        question: {
          en: "What is an affogato?",
          es: "¿Qué es un affogato?",
          de: "Was ist ein Affogato?",
          nl: "Wat is een affogato?"
        },
        options: [
          { en: "Vanilla ice cream 'drowned' in hot espresso", es: "Helado de vainilla 'ahogado' en espresso caliente", de: "Vanilleeis 'ertränkt' in heißem Espresso", nl: "Vanille-ijs 'verdronken' in hete espresso" },
          { en: "A type of gelato", es: "Un tipo de gelato", de: "Eine Art Gelato", nl: "Een soort gelato" },
          { en: "Italian ice cream cone", es: "Cono de helado italiano", de: "Italienischer Eistüte", nl: "Italiaans ijshoorntje" },
          { en: "Chocolate-covered ice cream", es: "Helado cubierto de chocolate", de: "Schokoladenüberzogenes Eis", nl: "Met chocolade bedekt ijs" }
        ],
        correct: 0,
        explanation: {
          en: "Affogato is a simple Italian dessert consisting of a scoop of vanilla ice cream or gelato 'drowned' (affogato means 'drowned' in Italian) in a shot of hot espresso coffee.",
          es: "Affogato es un postre italiano simple que consiste en una bola de helado de vainilla o gelato 'ahogado' (affogato significa 'ahogado' en italiano) en un shot de café espresso caliente.",
          de: "Affogato ist ein einfaches italienisches Dessert bestehend aus einer Kugel Vanilleeis oder Gelato, die in einem Schuss heißen Espresso-Kaffee 'ertränkt' (affogato bedeutet 'ertränkt' auf Italienisch) wird.",
          nl: "Affogato is een eenvoudig Italiaans dessert bestaande uit een bolletje vanille-ijs of gelato 'verdronken' (affogato betekent 'verdronken' in het Italiaans) in een shot hete espresso koffie."
        }
      },
      {
        question: {
          en: "What is the ideal serving temperature for most ice creams?",
          es: "¿Cuál es la temperatura ideal de servir para la mayoría de los helados?",
          de: "Was ist die ideale Serviertemperatur für die meisten Eissorten?",
          nl: "Wat is de ideale serveertemperatuur voor de meeste ijssoorten?"
        },
        options: [
          { en: "Around -12°C to -15°C (6°F to 10°F)", es: "Alrededor de -12°C a -15°C (6°F a 10°F)", de: "Etwa -12°C bis -15°C (6°F bis 10°F)", nl: "Rond -12°C tot -15°C (6°F tot 10°F)" },
          { en: "0°C (32°F)", es: "0°C (32°F)", de: "0°C (32°F)", nl: "0°C (32°F)" },
          { en: "Room temperature", es: "Temperatura ambiente", de: "Raumtemperatur", nl: "Kamertemperatuur" },
          { en: "-25°C (-13°F)", es: "-25°C (-13°F)", de: "-25°C (-13°F)", nl: "-25°C (-13°F)" }
        ],
        correct: 0,
        explanation: {
          en: "Ice cream is best served at around -12°C to -15°C (6°F to 10°F). At this temperature, it's firm enough to hold its shape but soft enough to scoop easily and allows flavors to be fully appreciated.",
          es: "El helado se sirve mejor a alrededor de -12°C a -15°C (6°F a 10°F). A esta temperatura, está lo suficientemente firme para mantener su forma pero lo suficientemente suave para servir fácilmente y permite que los sabores sean completamente apreciados.",
          de: "Eis wird am besten bei etwa -12°C bis -15°C (6°F bis 10°F) serviert. Bei dieser Temperatur ist es fest genug, um seine Form zu halten, aber weich genug, um leicht portioniert zu werden und ermöglicht es, Aromen vollständig zu schätzen.",
          nl: "Ijs wordt het beste geserveerd op ongeveer -12°C tot -15°C (6°F tot 10°F). Op deze temperatuur is het stevig genoeg om zijn vorm te behouden maar zacht genoeg om gemakkelijk te scheppen en laat smaken volledig waarderen."
        }
      },
      {
        question: {
          en: "What is a float in ice cream terminology?",
          es: "¿Qué es un float en terminología de helados?",
          de: "Was ist ein Float in der Eisterminologie?",
          nl: "Wat is een float in ijsterminologie?"
        },
        options: [
          { en: "A scoop of ice cream floating in a soft drink", es: "Una bola de helado flotando en un refresco", de: "Eine Eiskugel, die in einem Erfrischungsgetränk schwimmt", nl: "Een bolletje ijs dat drijft in een frisdrank" },
          { en: "Ice cream that has melted", es: "Helado que se ha derretido", de: "Eis, das geschmolzen ist", nl: "Ijs dat gesmolten is" },
          { en: "A type of ice cream cone", es: "Un tipo de cono de helado", de: "Eine Art Eistüte", nl: "Een soort ijshoorntje" },
          { en: "Ice cream with air bubbles", es: "Helado con burbujas de aire", de: "Eis mit Luftblasen", nl: "Ijs met luchtbellen" }
        ],
        correct: 0,
        explanation: {
          en: "A float is a classic American beverage consisting of a scoop of ice cream (usually vanilla) floating in a carbonated soft drink, like root beer or cola. The ice cream slowly melts and mixes with the drink.",
          es: "Un float es una bebida clásica americana que consiste en una bola de helado (usualmente vainilla) flotando en un refresco carbonatado, como cerveza de raíz o cola. El helado se derrite lentamente y se mezcla con la bebida.",
          de: "Ein Float ist ein klassisches amerikanisches Getränk bestehend aus einer Eiskugel (meist Vanille), die in einem kohlensäurehaltigen Erfrischungsgetränk wie Root Beer oder Cola schwimmt. Das Eis schmilzt langsam und vermischt sich mit dem Getränk.",
          nl: "Een float is een klassieke Amerikaanse drank bestaande uit een bolletje ijs (meestal vanille) dat drijft in een koolzuurhoudende frisdrank, zoals root beer of cola. Het ijs smelt langzaam en mengt zich met de drank."
        }
      },
      {
        question: {
          en: "What are the main flavor categories of ice cream?",
          es: "¿Cuáles son las principales categorías de sabores de helado?",
          de: "Was sind die Hauptgeschmackskategorien von Eis?",
          nl: "Wat zijn de hoofdsmaakcategorieën van ijs?"
        },
        options: [
          { en: "Vanilla, chocolate, and fruit-based flavors", es: "Vainilla, chocolate y sabores basados en frutas", de: "Vanille, Schokolade und fruchtbasierte Geschmäcker", nl: "Vanille, chocolade en fruitgebaseerde smaken" },
          { en: "Sweet and salty only", es: "Solo dulce y salado", de: "Nur süß und salzig", nl: "Alleen zoet en zout" },
          { en: "Hot and cold flavors", es: "Sabores calientes y fríos", de: "Heiße und kalte Geschmäcker", nl: "Warme en koude smaken" },
          { en: "Only dairy-based flavors", es: "Solo sabores basados en lácteos", de: "Nur milchbasierte Geschmäcker", nl: "Alleen op zuivel gebaseerde smaken" }
        ],
        correct: 0,
        explanation: {
          en: "The three main categories of ice cream flavors are vanilla (including related flavors like caramel), chocolate (including cocoa-based variations), and fruit-based flavors (strawberry, berry, citrus, etc.). These form the foundation for most ice cream varieties.",
          es: "Las tres categorías principales de sabores de helado son vainilla (incluyendo sabores relacionados como caramelo), chocolate (incluyendo variaciones basadas en cacao), y sabores basados en frutas (fresa, bayas, cítricos, etc.). Estos forman la base de la mayoría de las variedades de helado.",
          de: "Die drei Hauptkategorien von Eisgeschmäckern sind Vanille (einschließlich verwandter Geschmäcker wie Karamell), Schokolade (einschließlich kakaobasierter Variationen) und fruchtbasierte Geschmäcker (Erdbeere, Beeren, Zitrus, usw.). Diese bilden die Grundlage für die meisten Eisvarianten.",
          nl: "De drie hoofdcategorieën van ijssmaken zijn vanille (inclusief gerelateerde smaken zoals karamel), chocolade (inclusief cacaogebaseerde variaties) en fruitgebaseerde smaken (aardbei, bessen, citrus, enz.). Deze vormen de basis voor de meeste ijsvarianten."
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