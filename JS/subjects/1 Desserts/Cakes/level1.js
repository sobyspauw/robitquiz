// Quiz Level 1: Dessert - Taarten
(function() {
  const level1 = {
    name: {
      en: "Cakes - Beginner",
      es: "Pasteles - Principiante",
      de: "Kuchen - Anfänger",
      nl: "Taarten - Beginner"
    },
    questions: [
      {
        question: {
          en: "What is the main difference between a cake and a pie?",
          es: "¿Cuál es la principal diferencia entre un pastel y una tarta?",
          de: "Was ist der Hauptunterschied zwischen einem Kuchen und einer Torte?",
          nl: "Wat is het hoofdverschil tussen een taart en een cake?"
        },
        options: [
          { en: "Cake is sweet, pie is savory", es: "El pastel es dulce, la tarta es salada", de: "Kuchen ist süß, Torte ist herzhaft", nl: "Taart is zoet, pie is hartig" },
          { en: "Cake has a crust, pie doesn't", es: "El pastel tiene corteza, la tarta no", de: "Kuchen hat eine Kruste, Torte nicht", nl: "Taart heeft een korst, cake niet" },
          { en: "Pie has a crust, cake is made from batter", es: "La tarta tiene corteza, el pastel se hace de masa", de: "Torte hat eine Kruste, Kuchen wird aus Teig gemacht", nl: "Pie heeft een korst, taart wordt van beslag gemaakt" },
          { en: "They are exactly the same", es: "Son exactamente iguales", de: "Sie sind genau gleich", nl: "Ze zijn precies hetzelfde" }
        ],
        correct: 2,
        explanation: {
          en: "A pie typically has a pastry crust and is filled with fruits, custards, or other fillings. A cake is made from a batter that rises during baking and is usually layered or frosted.",
          es: "Una tarta típicamente tiene una corteza de hojaldre y se rellena con frutas, natillas u otros rellenos. Un pastel se hace de una masa que sube durante el horneado y usualmente se hace en capas o se glasea.",
          de: "Eine Torte hat typischerweise eine Teigkruste und wird mit Früchten, Puddings oder anderen Füllungen gefüllt. Ein Kuchen wird aus einem Teig hergestellt, der beim Backen aufgeht und normalerweise geschichtet oder glasiert wird.",
          nl: "Een pie heeft doorgaans een gebakkorst en wordt gevuld met fruit, custard of andere vullingen. Een taart wordt gemaakt van beslag dat rijst tijdens het bakken en wordt meestal gelaagd of geglasuurd."
        }
      },
      {
        question: {
          en: "What is the most basic ingredient needed to make cake batter rise?",
          es: "¿Cuál es el ingrediente más básico necesario para hacer que la masa del pastel suba?",
          de: "Was ist die grundlegendste Zutat, um Kuchenteig aufgehen zu lassen?",
          nl: "Wat is het meest basale ingrediënt om taartbeslag te laten rijzen?"
        },
        options: [
          { en: "Baking powder or baking soda", es: "Polvo de hornear o bicarbonato de sodio", de: "Backpulver oder Natron", nl: "Bakpoeder of zuiveringszout" },
          { en: "Sugar", es: "Azúcar", de: "Zucker", nl: "Suiker" },
          { en: "Vanilla extract", es: "Extracto de vainilla", de: "Vanilleextrakt", nl: "Vanille extract" },
          { en: "Salt", es: "Sal", de: "Salz", nl: "Zout" }
        ],
        correct: 0,
        explanation: {
          en: "Baking powder and baking soda are leavening agents that create carbon dioxide gas when activated, causing the cake batter to rise and become light and fluffy.",
          es: "El polvo de hornear y el bicarbonato de sodio son agentes leudantes que crean gas dióxido de carbono cuando se activan, haciendo que la masa del pastel suba y se vuelva ligera y esponjosa.",
          de: "Backpulver und Natron sind Triebmittel, die Kohlendioxidgas erzeugen, wenn sie aktiviert werden, wodurch der Kuchenteig aufgeht und leicht und fluffig wird.",
          nl: "Bakpoeder en zuiveringszout zijn rijsmiddelen die koolstofdioxide gas creëren wanneer ze geactiveerd worden, waardoor het taartbeslag rijst en licht en luchtig wordt."
        }
      },
      {
        question: {
          en: "What is buttercream frosting?",
          es: "¿Qué es el glaseado de crema de mantequilla?",
          de: "Was ist Buttercreme-Glasur?",
          nl: "Wat is botercrème glazuur?"
        },
        options: [
          { en: "A frosting made with butter, powdered sugar, and flavorings", es: "Un glaseado hecho con mantequilla, azúcar en polvo y saborizantes", de: "Eine Glasur aus Butter, Puderzucker und Aromen", nl: "Een glazuur gemaakt van boter, poedersuiker en smaakstoffen" },
          { en: "A type of cake", es: "Un tipo de pastel", de: "Eine Art Kuchen", nl: "Een soort taart" },
          { en: "A cream filling", es: "Un relleno de crema", de: "Eine Cremefüllung", nl: "Een crème vulling" },
          { en: "A baking technique", es: "Una técnica de horneado", de: "Eine Backtechnik", nl: "Een baktechniek" }
        ],
        correct: 0,
        explanation: {
          en: "Buttercream is a popular frosting made by creaming butter with powdered sugar and adding flavorings like vanilla. It's smooth, pipeable, and perfect for decorating cakes.",
          es: "La crema de mantequilla es un glaseado popular hecho batiendo mantequilla con azúcar en polvo y agregando saborizantes como vainilla. Es suave, se puede decorar y es perfecto para decorar pasteles.",
          de: "Buttercreme ist eine beliebte Glasur, die durch Verrühren von Butter mit Puderzucker und Hinzufügen von Aromen wie Vanille hergestellt wird. Sie ist glatt, spritzfähig und perfekt zum Dekorieren von Kuchen.",
          nl: "Botercrème is een populair glazuur gemaakt door boter te mengen met poedersuiker en smaakstoffen zoals vanille toe te voegen. Het is glad, kan worden gespoten en is perfect voor het decoreren van taarten."
        }
      },
      {
        question: {
          en: "What is a layer cake?",
          es: "¿Qué es un pastel de capas?",
          de: "Was ist ein Schichtkuchen?",
          nl: "Wat is een gelaagde taart?"
        },
        options: [
          { en: "A cake made with multiple layers of cake separated by frosting or filling", es: "Un pastel hecho con múltiples capas de pastel separadas por glaseado o relleno", de: "Ein Kuchen aus mehreren Kuchenschichten, getrennt durch Glasur oder Füllung", nl: "Een taart gemaakt van meerdere lagen taart gescheiden door glazuur of vulling" },
          { en: "A cake baked in layers", es: "Un pastel horneado en capas", de: "Ein in Schichten gebackener Kuchen", nl: "Een taart gebakken in lagen" },
          { en: "A very thin cake", es: "Un pastel muy delgado", de: "Ein sehr dünner Kuchen", nl: "Een heel dunne taart" },
          { en: "A cake with many ingredients", es: "Un pastel con muchos ingredientes", de: "Ein Kuchen mit vielen Zutaten", nl: "Een taart met veel ingrediënten" }
        ],
        correct: 0,
        explanation: {
          en: "A layer cake consists of two or more cake layers stacked on top of each other with frosting, filling, or jam between each layer. It's a classic cake style for celebrations.",
          es: "Un pastel de capas consiste en dos o más capas de pastel apiladas una encima de la otra con glaseado, relleno o mermelada entre cada capa. Es un estilo clásico de pastel para celebraciones.",
          de: "Ein Schichtkuchen besteht aus zwei oder mehr Kuchenschichten, die übereinander gestapelt sind mit Glasur, Füllung oder Marmelade zwischen jeder Schicht. Es ist ein klassischer Kuchenstil für Feierlichkeiten.",
          nl: "Een gelaagde taart bestaat uit twee of meer taartlagen gestapeld op elkaar met glazuur, vulling of jam tussen elke laag. Het is een klassieke taartstijl voor feesten."
        }
      },
      {
        question: {
          en: "What does it mean to 'cream' butter and sugar?",
          es: "¿Qué significa 'batir' mantequilla y azúcar?",
          de: "Was bedeutet es, Butter und Zucker zu 'schaumig rühren'?",
          nl: "Wat betekent het om boter en suiker 'te crèmeren'?"
        },
        options: [
          { en: "To beat them together until light and fluffy", es: "Batirlos juntos hasta que estén ligeros y esponjosos", de: "Sie zusammen schlagen, bis sie hell und fluffig sind", nl: "Ze samen kloppen tot ze licht en luchtig zijn" },
          { en: "To melt them together", es: "Derretirlos juntos", de: "Sie zusammen schmelzen", nl: "Ze samen smelten" },
          { en: "To add cream to them", es: "Agregarles crema", de: "Sahne hinzufügen", nl: "Room toevoegen" },
          { en: "To mix them gently", es: "Mezclarlos suavemente", de: "Sie sanft vermischen", nl: "Ze voorzichtig mengen" }
        ],
        correct: 0,
        explanation: {
          en: "Creaming butter and sugar means beating them together vigorously until the mixture becomes light, fluffy, and pale in color. This incorporates air and creates a tender cake texture.",
          es: "Batir mantequilla y azúcar significa batirlos juntos vigorosamente hasta que la mezcla se vuelva ligera, esponjosa y pálida en color. Esto incorpora aire y crea una textura de pastel tierna.",
          de: "Butter und Zucker schaumig rühren bedeutet, sie kräftig zusammen zu schlagen, bis die Mischung hell, fluffig und blass wird. Dies arbeitet Luft ein und schafft eine zarte Kuchentextur.",
          nl: "Boter en suiker crèmeren betekent ze krachtig samen kloppen tot het mengsel licht, luchtig en bleek van kleur wordt. Dit werkt lucht in en creëert een zachte taart textuur."
        }
      },
      {
        question: {
          en: "What is fondant?",
          es: "¿Qué es el fondant?",
          de: "Was ist Fondant?",
          nl: "Wat is fondant?"
        },
        options: [
          { en: "A smooth, pliable icing used to cover cakes", es: "Un glaseado suave y maleable usado para cubrir pasteles", de: "Eine glatte, formbare Glasur zum Überziehen von Kuchen", nl: "Een gladde, kneedbare glazuur gebruikt om taarten te bedekken" },
          { en: "A type of cake batter", es: "Un tipo de masa para pastel", de: "Eine Art Kuchenteig", nl: "Een soort taartbeslag" },
          { en: "A baking tool", es: "Una herramienta de horneado", de: "Ein Backwerkzeug", nl: "Een bakgereedschap" },
          { en: "A cake filling", es: "Un relleno de pastel", de: "Eine Kuchenfüllung", nl: "Een taart vulling" }
        ],
        correct: 0,
        explanation: {
          en: "Fondant is a sugar-based icing that can be rolled out and draped over cakes for a smooth, professional finish. It's popular for wedding cakes and decorated cakes.",
          es: "El fondant es un glaseado a base de azúcar que se puede extender y cubrir pasteles para un acabado suave y profesional. Es popular para pasteles de boda y pasteles decorados.",
          de: "Fondant ist eine zuckerbasierte Glasur, die ausgerollt und über Kuchen gelegt werden kann für einen glatten, professionellen Abschluss. Es ist beliebt für Hochzeitstorten und dekorierte Kuchen.",
          nl: "Fondant is een suiker-gebaseerd glazuur dat kan worden uitgerold en over taarten gelegd voor een gladde, professionele afwerking. Het is populair voor bruidstaarten en gedecoreerde taarten."
        }
      },
      {
        question: {
          en: "What is the purpose of sifting flour when making cakes?",
          es: "¿Cuál es el propósito de tamizar la harina al hacer pasteles?",
          de: "Was ist der Zweck des Siebens von Mehl beim Kuchenbacken?",
          nl: "Wat is het doel van het zeven van meel bij het maken van taarten?"
        },
        options: [
          { en: "To remove lumps and add air for a lighter texture", es: "Para remover grumos y agregar aire para una textura más ligera", de: "Um Klumpen zu entfernen und Luft für eine leichtere Textur hinzuzufügen", nl: "Om klontjes te verwijderen en lucht toe te voegen voor een lichtere textuur" },
          { en: "To make the flour taste better", es: "Para hacer que la harina sepa mejor", de: "Um das Mehl besser schmecken zu lassen", nl: "Om de meel beter te laten smaken" },
          { en: "To change the color of the flour", es: "Para cambiar el color de la harina", de: "Um die Farbe des Mehls zu ändern", nl: "Om de kleur van de meel te veranderen" },
          { en: "To make the flour last longer", es: "Para hacer que la harina dure más", de: "Um das Mehl länger haltbar zu machen", nl: "Om de meel langer houdbaar te maken" }
        ],
        correct: 0,
        explanation: {
          en: "Sifting flour removes lumps and incorporates air, making it lighter and easier to mix into cake batter. This results in a more tender, fine-textured cake.",
          es: "Tamizar la harina remueve grumos e incorpora aire, haciéndola más ligera y fácil de mezclar en la masa del pastel. Esto resulta en un pastel más tierno y de textura fina.",
          de: "Das Sieben von Mehl entfernt Klumpen und arbeitet Luft ein, macht es leichter und einfacher in den Kuchenteig zu mischen. Dies führt zu einem zarteren Kuchen mit feiner Textur.",
          nl: "Het zeven van meel verwijdert klontjes en werkt lucht in, waardoor het lichter wordt en makkelijker in taartbeslag te mengen is. Dit resulteert in een zachtere taart met fijne textuur."
        }
      },
      {
        question: {
          en: "What is a bundt cake?",
          es: "¿Qué es un pastel bundt?",
          de: "Was ist ein Bundt-Kuchen?",
          nl: "Wat is een bundt cake?"
        },
        options: [
          { en: "A cake baked in a ring-shaped pan with decorative ridges", es: "Un pastel horneado en un molde en forma de anillo con crestas decorativas", de: "Ein Kuchen, der in einer ringförmigen Form mit dekorativen Rillen gebacken wird", nl: "Een taart gebakken in een ringvormige pan met decoratieve ribbels" },
          { en: "A cake with nuts", es: "Un pastel con nueces", de: "Ein Kuchen mit Nüssen", nl: "Een taart met noten" },
          { en: "A German cake", es: "Un pastel alemán", de: "Ein deutscher Kuchen", nl: "Een Duitse taart" },
          { en: "A very small cake", es: "Un pastel muy pequeño", de: "Ein sehr kleiner Kuchen", nl: "Een heel kleine taart" }
        ],
        correct: 0,
        explanation: {
          en: "A bundt cake is baked in a bundt pan, which is a ring-shaped pan with fluted or decorative sides. The pan creates an attractive shape that often doesn't need frosting.",
          es: "Un pastel bundt se hornea en un molde bundt, que es un molde en forma de anillo con lados acanalados o decorativos. El molde crea una forma atractiva que a menudo no necesita glaseado.",
          de: "Ein Bundt-Kuchen wird in einer Bundt-Form gebacken, die eine ringförmige Form mit gerillten oder dekorativen Seiten ist. Die Form schafft eine attraktive Form, die oft keine Glasur benötigt.",
          nl: "Een bundt cake wordt gebakken in een bundt pan, wat een ringvormige pan is met geribbelde of decoratieve zijkanten. De pan creëert een aantrekkelijke vorm die vaak geen glazuur nodig heeft."
        }
      },
      {
        question: {
          en: "What is the difference between a cupcake and a muffin?",
          es: "¿Cuál es la diferencia entre un cupcake y un muffin?",
          de: "Was ist der Unterschied zwischen einem Cupcake und einem Muffin?",
          nl: "Wat is het verschil tussen een cupcake en een muffin?"
        },
        options: [
          { en: "Cupcakes are sweeter and often frosted, muffins are less sweet and more bread-like", es: "Los cupcakes son más dulces y a menudo glaseados, los muffins son menos dulces y más parecidos al pan", de: "Cupcakes sind süßer und oft glasiert, Muffins sind weniger süß und brotähnlicher", nl: "Cupcakes zijn zoeter en vaak geglasuurd, muffins zijn minder zoet en meer broodachtig" },
          { en: "They are exactly the same", es: "Son exactamente iguales", de: "Sie sind genau gleich", nl: "Ze zijn precies hetzelfde" },
          { en: "Cupcakes are smaller", es: "Los cupcakes son más pequeños", de: "Cupcakes sind kleiner", nl: "Cupcakes zijn kleiner" },
          { en: "Muffins are always chocolate", es: "Los muffins son siempre de chocolate", de: "Muffins sind immer Schokolade", nl: "Muffins zijn altijd chocolade" }
        ],
        correct: 0,
        explanation: {
          en: "Cupcakes are essentially small cakes, often sweet and decorated with frosting. Muffins are quick breads that are less sweet, denser, and usually eaten without frosting.",
          es: "Los cupcakes son esencialmente pequeños pasteles, a menudo dulces y decorados con glaseado. Los muffins son panes rápidos que son menos dulces, más densos y usualmente se comen sin glaseado.",
          de: "Cupcakes sind im Wesentlichen kleine Kuchen, oft süß und mit Glasur dekoriert. Muffins sind schnelle Brote, die weniger süß, dichter sind und normalerweise ohne Glasur gegessen werden.",
          nl: "Cupcakes zijn in wezen kleine taarten, vaak zoet en gedecoreerd met glazuur. Muffins zijn snelle broden die minder zoet, dichter zijn en meestal zonder glazuur worden gegeten."
        }
      },
      {
        question: {
          en: "What is ganache used for in cake making?",
          es: "¿Para qué se usa el ganache en la elaboración de pasteles?",
          de: "Wofür wird Ganache beim Kuchenbacken verwendet?",
          nl: "Waarvoor wordt ganache gebruikt bij taart maken?"
        },
        options: [
          { en: "As a rich frosting, filling, or glaze", es: "Como un glaseado rico, relleno o glase", de: "Als reichhaltige Glasur, Füllung oder Glasur", nl: "Als een rijke glazuur, vulling of glans" },
          { en: "To make the cake rise", es: "Para hacer que el pastel suba", de: "Um den Kuchen aufgehen zu lassen", nl: "Om de taart te laten rijzen" },
          { en: "To add color", es: "Para agregar color", de: "Um Farbe hinzuzufügen", nl: "Om kleur toe te voegen" },
          { en: "To preserve the cake", es: "Para preservar el pastel", de: "Um den Kuchen zu konservieren", nl: "Om de taart te bewaren" }
        ],
        correct: 0,
        explanation: {
          en: "Ganache is a mixture of chocolate and cream that can be used as a smooth frosting, rich filling between layers, or poured over cakes as a glossy glaze.",
          es: "El ganache es una mezcla de chocolate y crema que se puede usar como un glaseado suave, relleno rico entre capas, o vertido sobre pasteles como un glase brillante.",
          de: "Ganache ist eine Mischung aus Schokolade und Sahne, die als glatte Glasur, reichhaltige Füllung zwischen Schichten oder als glänzende Glasur über Kuchen verwendet werden kann.",
          nl: "Ganache is een mengsel van chocolade en room dat kan worden gebruikt als gladde glazuur, rijke vulling tussen lagen, of over taarten gegoten als glanzende glans."
        }
      },
      {
        question: {
          en: "What does 'folding' mean in cake baking?",
          es: "¿Qué significa 'doblar' en la elaboración de pasteles?",
          de: "Was bedeutet 'unterheben' beim Kuchenbacken?",
          nl: "Wat betekent 'vouwen' bij taart bakken?"
        },
        options: [
          { en: "A gentle mixing technique to preserve air in the batter", es: "Una técnica de mezcla suave para preservar aire en la masa", de: "Eine sanfte Mischtechnik, um Luft im Teig zu bewahren", nl: "Een zachte mengtechniek om lucht in het beslag te behouden" },
          { en: "Bending the cake in half", es: "Doblar el pastel por la mitad", de: "Den Kuchen in der Hälfte falten", nl: "De taart dubbelvouwen" },
          { en: "Adding ingredients quickly", es: "Agregar ingredientes rápidamente", de: "Zutaten schnell hinzufügen", nl: "Ingrediënten snel toevoegen" },
          { en: "Kneading the dough", es: "Amasar la masa", de: "Den Teig kneten", nl: "Het deeg kneden" }
        ],
        correct: 0,
        explanation: {
          en: "Folding is a gentle mixing technique where ingredients are combined with a cutting and turning motion to preserve air bubbles and keep the batter light and fluffy.",
          es: "Doblar es una técnica de mezcla suave donde los ingredientes se combinan con un movimiento de corte y giro para preservar las burbujas de aire y mantener la masa ligera y esponjosa.",
          de: "Unterheben ist eine sanfte Mischtechnik, bei der Zutaten mit einer schneidenden und drehenden Bewegung kombiniert werden, um Luftblasen zu bewahren und den Teig leicht und fluffig zu halten.",
          nl: "Vouwen is een zachte mengtechniek waarbij ingrediënten worden gecombineerd met een snijdende en draaiende beweging om luchtbellen te behouden en het beslag licht en luchtig te houden."
        }
      },
      {
        question: {
          en: "What is royal icing?",
          es: "¿Qué es el glaseado real?",
          de: "Was ist Royal Icing?",
          nl: "Wat is royal icing?"
        },
        options: [
          { en: "A hard icing made from egg whites and powdered sugar", es: "Un glaseado duro hecho de claras de huevo y azúcar en polvo", de: "Eine harte Glasur aus Eiweiß und Puderzucker", nl: "Een harde glazuur gemaakt van eiwitten en poedersuiker" },
          { en: "A type of cake", es: "Un tipo de pastel", de: "Eine Art Kuchen", nl: "Een soort taart" },
          { en: "A creamy frosting", es: "Un glaseado cremoso", de: "Eine cremige Glasur", nl: "Een romige glazuur" },
          { en: "An icing used only by royalty", es: "Un glaseado usado solo por la realeza", de: "Eine Glasur, die nur von Königen verwendet wird", nl: "Een glazuur alleen gebruikt door royalty" }
        ],
        correct: 0,
        explanation: {
          en: "Royal icing is made from egg whites (or meringue powder) and powdered sugar. It dries hard and smooth, making it perfect for detailed decorating and cookie decorating.",
          es: "El glaseado real está hecho de claras de huevo (o polvo de merengue) y azúcar en polvo. Se seca duro y suave, haciéndolo perfecto para decoración detallada y decoración de galletas.",
          de: "Royal Icing wird aus Eiweiß (oder Baiserfolienpulver) und Puderzucker hergestellt. Es trocknet hart und glatt und ist perfekt für detaillierte Dekoration und Keksdekoration.",
          nl: "Royal icing wordt gemaakt van eiwitten (of schuimpoeder) en poedersuiker. Het droogt hard en glad op, waardoor het perfect is voor gedetailleerde decoratie en koekjesdecoratie."
        }
      },
      {
        question: {
          en: "What is the purpose of preheating an oven before baking a cake?",
          es: "¿Cuál es el propósito de precalentar un horno antes de hornear un pastel?",
          de: "Was ist der Zweck des Vorheizens eines Ofens vor dem Backen eines Kuchens?",
          nl: "Wat is het doel van het voorverwarmen van een oven voordat je een taart bakt?"
        },
        options: [
          { en: "To ensure even baking and proper rising", es: "Para asegurar un horneado uniforme y un levantamiento adecuado", de: "Um gleichmäßiges Backen und ordentliches Aufgehen zu gewährleisten", nl: "Om gelijkmatig bakken en goed rijzen te verzekeren" },
          { en: "To save electricity", es: "Para ahorrar electricidad", de: "Um Strom zu sparen", nl: "Om elektriciteit te besparen" },
          { en: "To make the oven last longer", es: "Para hacer que el horno dure más", de: "Um den Ofen länger haltbar zu machen", nl: "Om de oven langer te laten meegaan" },
          { en: "To clean the oven", es: "Para limpiar el horno", de: "Um den Ofen zu reinigen", nl: "Om de oven schoon te maken" }
        ],
        correct: 0,
        explanation: {
          en: "Preheating ensures the oven reaches the correct temperature before the cake goes in. This provides immediate, even heat for proper rising and prevents uneven baking.",
          es: "Precalentar asegura que el horno alcance la temperatura correcta antes de que entre el pastel. Esto proporciona calor inmediato y uniforme para un levantamiento adecuado y previene el horneado desigual.",
          de: "Vorheizen stellt sicher, dass der Ofen die richtige Temperatur erreicht, bevor der Kuchen hineinkommt. Dies bietet sofortige, gleichmäßige Hitze für ordentliches Aufgehen und verhindert ungleichmäßiges Backen.",
          nl: "Voorverwarmen zorgt ervoor dat de oven de juiste temperatuur bereikt voordat de taart erin gaat. Dit biedt onmiddellijke, gelijkmatige hitte voor goed rijzen en voorkomt ongelijkmatig bakken."
        }
      },
      {
        question: {
          en: "What is a sheet cake?",
          es: "¿Qué es un pastel de bandeja?",
          de: "Was ist ein Blechkuchen?",
          nl: "Wat is een platte taart?"
        },
        options: [
          { en: "A large, flat cake baked in a rectangular pan", es: "Un pastel grande y plano horneado en un molde rectangular", de: "Ein großer, flacher Kuchen, der in einer rechteckigen Form gebacken wird", nl: "Een grote, platte taart gebakken in een rechthoekige pan" },
          { en: "A very thin cake", es: "Un pastel muy delgado", de: "Ein sehr dünner Kuchen", nl: "Een heel dunne taart" },
          { en: "A cake made with sheets of dough", es: "Un pastel hecho con hojas de masa", de: "Ein Kuchen aus Teigplatten", nl: "Een taart gemaakt van deegvellen" },
          { en: "A cake wrapped in paper", es: "Un pastel envuelto en papel", de: "Ein in Papier verpackter Kuchen", nl: "Een taart verpakt in papier" }
        ],
        correct: 0,
        explanation: {
          en: "A sheet cake is a large, single-layer cake baked in a rectangular pan. It's perfect for feeding crowds and is often frosted directly in the pan for easy serving.",
          es: "Un pastel de bandeja es un pastel grande de una sola capa horneado en un molde rectangular. Es perfecto para alimentar multitudes y a menudo se glasea directamente en el molde para servir fácilmente.",
          de: "Ein Blechkuchen ist ein großer, einschichtiger Kuchen, der in einer rechteckigen Form gebacken wird. Er ist perfekt für große Gruppen und wird oft direkt in der Form glasiert für einfaches Servieren.",
          nl: "Een platte taart is een grote, enkellaagse taart gebakken in een rechthoekige pan. Het is perfect voor het voeden van grote groepen en wordt vaak direct in de pan geglasuurd voor gemakkelijk serveren."
        }
      },
      {
        question: {
          en: "What causes a cake to be dense instead of light and fluffy?",
          es: "¿Qué causa que un pastel sea denso en lugar de ligero y esponjoso?",
          de: "Was bewirkt, dass ein Kuchen dicht statt leicht und fluffig wird?",
          nl: "Wat zorgt ervoor dat een taart dicht wordt in plaats van licht en luchtig?"
        },
        options: [
          { en: "Overmixing the batter or incorrect measurements", es: "Mezclar demasiado la masa o medidas incorrectas", de: "Übermischen des Teigs oder falsche Messungen", nl: "Te veel mengen van het beslag of verkeerde metingen" },
          { en: "Using too much vanilla", es: "Usar demasiada vainilla", de: "Zu viel Vanille verwenden", nl: "Te veel vanille gebruiken" },
          { en: "Baking at too low temperature", es: "Hornear a temperatura muy baja", de: "Bei zu niedriger Temperatur backen", nl: "Bakken op te lage temperatuur" },
          { en: "Adding too much frosting", es: "Agregar demasiado glaseado", de: "Zu viel Glasur hinzufügen", nl: "Te veel glazuur toevoegen" }
        ],
        correct: 0,
        explanation: {
          en: "Dense cakes are usually caused by overmixing (which develops gluten), incorrect ingredient ratios, old leavening agents, or not enough air incorporated into the batter.",
          es: "Los pasteles densos usualmente son causados por mezclar demasiado (lo que desarrolla gluten), proporciones incorrectas de ingredientes, agentes leudantes viejos, o no incorporar suficiente aire en la masa.",
          de: "Dichte Kuchen werden normalerweise durch Übermischen (was Gluten entwickelt), falsche Zutatenverhältnisse, alte Triebmittel oder nicht genug eingearbeitete Luft im Teig verursacht.",
          nl: "Dichte taarten worden meestal veroorzaakt door te veel mengen (wat gluten ontwikkelt), verkeerde ingrediëntverhoudingen, oude rijsmiddelen, of niet genoeg lucht in het beslag."
        }
      },
      {
        question: {
          en: "What is a naked cake?",
          es: "¿Qué es un pastel desnudo?",
          de: "Was ist ein nackter Kuchen?",
          nl: "Wat is een naakte taart?"
        },
        options: [
          { en: "A layer cake with minimal or no frosting on the outside", es: "Un pastel de capas con mínimo o sin glaseado en el exterior", de: "Ein Schichtkuchen mit minimaler oder keiner Glasur außen", nl: "Een gelaagde taart met minimaal of geen glazuur aan de buitenkant" },
          { en: "A cake without any decorations", es: "Un pastel sin decoraciones", de: "Ein Kuchen ohne Dekorationen", nl: "Een taart zonder decoraties" },
          { en: "A cake baked without a pan", es: "Un pastel horneado sin molde", de: "Ein ohne Form gebackener Kuchen", nl: "Een taart gebakken zonder pan" },
          { en: "A cake made without flour", es: "Un pastel hecho sin harina", de: "Ein ohne Mehl gemachter Kuchen", nl: "Een taart gemaakt zonder meel" }
        ],
        correct: 0,
        explanation: {
          en: "A naked cake is a trendy style where the cake layers are visible because there's little to no frosting on the outside. The layers and any filling show through for a rustic, natural look.",
          es: "Un pastel desnudo es un estilo moderno donde las capas del pastel son visibles porque hay poco o nada de glaseado en el exterior. Las capas y cualquier relleno se ven a través para una apariencia rústica y natural.",
          de: "Ein nackter Kuchen ist ein trendiger Stil, bei dem die Kuchenschichten sichtbar sind, weil es wenig bis gar keine Glasur außen gibt. Die Schichten und jede Füllung zeigen sich für einen rustikalen, natürlichen Look.",
          nl: "Een naakte taart is een trendy stijl waarbij de taartlagen zichtbaar zijn omdat er weinig tot geen glazuur aan de buitenkant zit. De lagen en eventuele vulling zijn zichtbaar voor een rustieke, natuurlijke uitstraling."
        }
      },
      {
        question: {
          en: "What is the main difference between cake flour and all-purpose flour?",
          es: "¿Cuál es la principal diferencia entre harina para pasteles y harina para todo uso?",
          de: "Was ist der Hauptunterschied zwischen Kuchenmehl und Allzweckmehl?",
          nl: "Wat is het hoofdverschil tussen taartmeel en gewone bloem?"
        },
        options: [
          { en: "Cake flour has less protein, making cakes more tender", es: "La harina para pasteles tiene menos proteína, haciendo los pasteles más tiernos", de: "Kuchenmehl hat weniger Protein, was Kuchen zarter macht", nl: "Taartmeel heeft minder proteïne, waardoor taarten zachter worden" },
          { en: "Cake flour is sweeter", es: "La harina para pasteles es más dulce", de: "Kuchenmehl ist süßer", nl: "Taartmeel is zoeter" },
          { en: "Cake flour is white", es: "La harina para pasteles es blanca", de: "Kuchenmehl ist weiß", nl: "Taartmeel is wit" },
          { en: "Cake flour is more expensive", es: "La harina para pasteles es más cara", de: "Kuchenmehl ist teurer", nl: "Taartmeel is duurder" }
        ],
        correct: 0,
        explanation: {
          en: "Cake flour has a lower protein content (6-8%) compared to all-purpose flour (10-12%). Less protein means less gluten development, resulting in more tender, delicate cakes.",
          es: "La harina para pasteles tiene menor contenido de proteína (6-8%) comparada con la harina para todo uso (10-12%). Menos proteína significa menos desarrollo de gluten, resultando en pasteles más tiernos y delicados.",
          de: "Kuchenmehl hat einen niedrigeren Proteingehalt (6-8%) im Vergleich zu Allzweckmehl (10-12%). Weniger Protein bedeutet weniger Glutenentwicklung, was zu zarteren, delikateren Kuchen führt.",
          nl: "Taartmeel heeft een lager eiwitgehalte (6-8%) vergeleken met gewone bloem (10-12%). Minder eiwit betekent minder glutenontwikkeling, wat resulteert in zachtere, delicatere taarten."
        }
      },
      {
        question: {
          en: "What does it mean when a cake recipe calls for 'room temperature' ingredients?",
          es: "¿Qué significa cuando una receta de pastel pide ingredientes a 'temperatura ambiente'?",
          de: "Was bedeutet es, wenn ein Kuchenrezept 'Raumtemperatur'-Zutaten verlangt?",
          nl: "Wat betekent het wanneer een taartrecept om ingrediënten op 'kamertemperatuur' vraagt?"
        },
        options: [
          { en: "Ingredients should be at about 20-22°C for better mixing", es: "Los ingredientes deben estar a unos 20-22°C para mejor mezcla", de: "Zutaten sollten etwa 20-22°C haben für besseres Mischen", nl: "Ingrediënten moeten ongeveer 20-22°C zijn voor beter mengen" },
          { en: "Ingredients should be heated", es: "Los ingredientes deben ser calentados", de: "Zutaten sollten erhitzt werden", nl: "Ingrediënten moeten verwarmd worden" },
          { en: "Ingredients should be cold", es: "Los ingredientes deben estar fríos", de: "Zutaten sollten kalt sein", nl: "Ingrediënten moeten koud zijn" },
          { en: "It doesn't matter what temperature", es: "No importa qué temperatura", de: "Die Temperatur ist egal", nl: "De temperatuur maakt niet uit" }
        ],
        correct: 0,
        explanation: {
          en: "Room temperature ingredients (around 20-22°C) mix together more easily and evenly, creating better emulsification and a smoother batter, which results in better cake texture.",
          es: "Los ingredientes a temperatura ambiente (alrededor de 20-22°C) se mezclan más fácilmente y uniformemente, creando mejor emulsificación y una masa más suave, lo que resulta en mejor textura del pastel.",
          de: "Zutaten bei Raumtemperatur (etwa 20-22°C) mischen sich leichter und gleichmäßiger, schaffen bessere Emulgierung und einen glatteren Teig, was zu besserer Kuchentextur führt.",
          nl: "Ingrediënten op kamertemperatuur (rond 20-22°C) mengen gemakkelijker en gelijkmatiger, waardoor betere emulgering en een gladder beslag ontstaat, wat resulteert in betere taart textuur."
        }
      },
      {
        question: {
          en: "What is the purpose of using parchment paper in cake baking?",
          es: "¿Cuál es el propósito de usar papel pergamino en la elaboración de pasteles?",
          de: "Was ist der Zweck der Verwendung von Backpapier beim Kuchenbacken?",
          nl: "Wat is het doel van het gebruik van bakpapier bij taart bakken?"
        },
        options: [
          { en: "To prevent sticking and make removal easier", es: "Para prevenir que se pegue y hacer la remoción más fácil", de: "Um Anhaften zu verhindern und das Herausnehmen zu erleichtern", nl: "Om plakken te voorkomen en verwijdering gemakkelijker te maken" },
          { en: "To make the cake taste better", es: "Para hacer que el pastel sepa mejor", de: "Um den Kuchen besser schmecken zu lassen", nl: "Om de taart beter te laten smaken" },
          { en: "To speed up baking", es: "Para acelerar el horneado", de: "Um das Backen zu beschleunigen", nl: "Om het bakken te versnellen" },
          { en: "To add decoration", es: "Para agregar decoración", de: "Um Dekoration hinzuzufügen", nl: "Om decoratie toe te voegen" }
        ],
        correct: 0,
        explanation: {
          en: "Parchment paper creates a non-stick surface between the cake and pan, making it much easier to remove the cake cleanly without breaking or sticking to the pan.",
          es: "El papel pergamino crea una superficie antiadherente entre el pastel y el molde, haciendo mucho más fácil remover el pastel limpiamente sin romperlo o que se pegue al molde.",
          de: "Backpapier schafft eine antihaftende Oberfläche zwischen Kuchen und Form, wodurch es viel einfacher wird, den Kuchen sauber herauszunehmen, ohne dass er bricht oder an der Form klebt.",
          nl: "Bakpapier creëert een anti-kleef oppervlak tussen de taart en pan, waardoor het veel makkelijker wordt om de taart netjes te verwijderen zonder breken of plakken aan de pan."
        }
      },
      {
        question: {
          en: "What type of cake is traditionally served at weddings?",
          es: "¿Qué tipo de pastel se sirve tradicionalmente en las bodas?",
          de: "Welche Art von Kuchen wird traditionell bei Hochzeiten serviert?",
          nl: "Welk type taart wordt traditioneel op bruiloften geserveerd?"
        },
        options: [
          { en: "Wedding cake (white cake with white frosting)", es: "Pastel de boda (pastel blanco con glaseado blanco)", de: "Hochzeitstorte (weißer Kuchen mit weißer Glasur)", nl: "Bruidstaart (witte taart met witte glazuur)" },
          { en: "Chocolate cake", es: "Pastel de chocolate", de: "Schokoladenkuchen", nl: "Chocoladetaart" },
          { en: "Fruit tart", es: "Tarta de frutas", de: "Obstkuchen", nl: "Fruittaart" },
          { en: "Cheesecake", es: "Tarta de queso", de: "Käsekuchen", nl: "Cheesecake" }
        ],
        correct: 0,
        explanation: {
          en: "Traditional wedding cakes are typically multi-tiered white or vanilla cakes with white buttercream or fondant frosting, symbolizing purity and new beginnings.",
          es: "Los pasteles de boda tradicionales son típicamente pasteles blancos o de vainilla de múltiples niveles con glaseado de mantequilla blanco o fondant, simbolizando pureza y nuevos comienzos.",
          de: "Traditionelle Hochzeitstorten sind typischerweise mehrstöckige weiße oder Vanillekuchen mit weißer Buttercreme oder Fondant-Glasur, die Reinheit und Neuanfänge symbolisieren.",
          nl: "Traditionele bruidstaarten zijn doorgaans meerlaagse witte of vanille taarten met witte botercrème of fondant glazuur, die zuiverheid en nieuwe begin symboliseren."
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