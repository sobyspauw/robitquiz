// Cakes Quiz - Level 1
(function() {
  const level1 = {
    name: {
          "en": "Cakes - Beginner",
          "es": "Pasteles - Principiante",
          "de": "Kuchen - Anfänger",
          "nl": "Taarten - Beginner"
    },
    questions: [
      {
        question: {
                  "en": "What is the main difference between a cake and a pie?",
                  "es": "¿Cuál es la principal diferencia entre un pastel y una tarta?",
                  "de": "Was ist der Hauptunterschied zwischen einem Kuchen und einer Torte?",
                  "nl": "Wat is het hoofdverschil tussen een taart en een cake?"
        },
        options: [
        {
                  "en": "They are exactly the same",
                  "es": "Son exactamente iguales",
                  "de": "Sie sind genau gleich",
                  "nl": "Ze zijn precies hetzelfde"
        },
        {
                  "en": "Cake has a crust, pie doesn't",
                  "es": "El pastel tiene corteza, la tarta no",
                  "de": "Kuchen hat eine Kruste, Torte nicht",
                  "nl": "Taart heeft een korst, cake niet"
        },
        {
                  "en": "Pie has a crust, cake is made from batter",
                  "es": "La tarta tiene corteza, el pastel se hace de masa",
                  "de": "Torte hat eine Kruste, Kuchen wird aus Teig gemacht",
                  "nl": "Pie heeft een korst, taart wordt van beslag gemaakt"
        },
        {
                  "en": "Cake is sweet, pie is savory",
                  "es": "El pastel es dulce, la tarta es salada",
                  "de": "Kuchen ist süß, Torte ist herzhaft",
                  "nl": "Taart is zoet, pie is hartig"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "A pie typically has a pastry crust and is filled with fruits, custards, or other fillings. A cake is made from a batter that rises during baking and is usually layered or frosted.",
                  "es": "Una tarta típicamente tiene una corteza de hojaldre y se rellena con frutas, natillas u otros rellenos. Un pastel se hace de una masa que sube durante el horneado y usualmente se hace en capas o se glasea.",
                  "de": "Eine Torte hat typischerweise eine Teigkruste und wird mit Früchten, Puddings oder anderen Füllungen gefüllt. Ein Kuchen wird aus einem Teig hergestellt, der beim Backen aufgeht und normalerweise geschichtet oder glasiert wird.",
                  "nl": "Een pie heeft doorgaans een gebakkorst en wordt gevuld met fruit, custard of andere vullingen. Een taart wordt gemaakt van beslag dat rijst tijdens het bakken en wordt meestal gelaagd of geglasuurd."
        }
      },
      {
        question: {
                  "en": "What is the most basic ingredient needed to make cake batter rise?",
                  "es": "¿Cuál es el ingrediente más básico necesario para hacer que la masa del pastel suba?",
                  "de": "Was ist die grundlegendste Zutat, um Kuchenteig aufgehen zu lassen?",
                  "nl": "Wat is het meest basale ingrediënt om taartbeslag te laten rijzen?"
        },
        options: [
        {
                  "en": "Baking powder or baking soda",
                  "es": "Polvo de hornear o bicarbonato de sodio",
                  "de": "Backpulver oder Natron",
                  "nl": "Bakpoeder of zuiveringszout"
        },
        {
                  "en": "Vanilla extract",
                  "es": "Extracto de vainilla",
                  "de": "Vanilleextrakt",
                  "nl": "Vanille extract"
        },
        {
                  "en": "Salt",
                  "es": "Sal",
                  "de": "Salz",
                  "nl": "Zout"
        },
        {
                  "en": "Sugar",
                  "es": "Azúcar",
                  "de": "Zucker",
                  "nl": "Suiker"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Baking powder and baking soda are leavening agents that create carbon dioxide gas when activated, causing the cake batter to rise and become light and fluffy.",
                  "es": "El polvo de hornear y el bicarbonato de sodio son agentes leudantes que crean gas dióxido de carbono cuando se activan, haciendo que la masa del pastel suba y se vuelva ligera y esponjosa.",
                  "de": "Backpulver und Natron sind Triebmittel, die Kohlendioxidgas erzeugen, wenn sie aktiviert werden, wodurch der Kuchenteig aufgeht und leicht und fluffig wird.",
                  "nl": "Bakpoeder en zuiveringszout zijn rijsmiddelen die koolstofdioxide gas creëren wanneer ze geactiveerd worden, waardoor het taartbeslag rijst en licht en luchtig wordt."
        }
      },
      {
        question: {
                  "en": "What is buttercream frosting?",
                  "es": "¿Qué es el glaseado de crema de mantequilla?",
                  "de": "Was ist Buttercreme-Glasur?",
                  "nl": "Wat is botercrème glazuur?"
        },
        options: [
        {
                  "en": "A type of cake",
                  "es": "Un tipo de pastel",
                  "de": "Eine Art Kuchen",
                  "nl": "Een soort taart"
        },
        {
                  "en": "A frosting made with butter, powdered sugar, and flavorings",
                  "es": "Un glaseado hecho con mantequilla, azúcar en polvo y saborizantes",
                  "de": "Eine Glasur aus Butter, Puderzucker und Aromen",
                  "nl": "Een glazuur gemaakt van boter, poedersuiker en smaakstoffen"
        },
        {
                  "en": "A cream filling",
                  "es": "Un relleno de crema",
                  "de": "Eine Cremefüllung",
                  "nl": "Een crème vulling"
        },
        {
                  "en": "A baking technique",
                  "es": "Una técnica de horneado",
                  "de": "Eine Backtechnik",
                  "nl": "Een baktechniek"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Buttercream is a popular frosting made by creaming butter with powdered sugar and adding flavorings like vanilla. It's smooth, pipeable, and perfect for decorating cakes.",
                  "es": "La crema de mantequilla es un glaseado popular hecho batiendo mantequilla con azúcar en polvo y agregando saborizantes como vainilla. Es suave, se puede decorar y es perfecto para decorar pasteles.",
                  "de": "Buttercreme ist eine beliebte Glasur, die durch Verrühren von Butter mit Puderzucker und Hinzufügen von Aromen wie Vanille hergestellt wird. Sie ist glatt, spritzfähig und perfekt zum Dekorieren von Kuchen.",
                  "nl": "Botercrème is een populair glazuur gemaakt door boter te mengen met poedersuiker en smaakstoffen zoals vanille toe te voegen. Het is glad, kan worden gespoten en is perfect voor het decoreren van taarten."
        }
      },
      {
        question: {
                  "en": "What is a layer cake?",
                  "es": "¿Qué es un pastel de capas?",
                  "de": "Was ist ein Schichtkuchen?",
                  "nl": "Wat is een gelaagde taart?"
        },
        options: [
        {
                  "en": "A very thin cake",
                  "es": "Un pastel muy delgado",
                  "de": "Ein sehr dünner Kuchen",
                  "nl": "Een heel dunne taart"
        },
        {
                  "en": "A cake baked in layers",
                  "es": "Un pastel horneado en capas",
                  "de": "Ein in Schichten gebackener Kuchen",
                  "nl": "Een taart gebakken in lagen"
        },
        {
                  "en": "A cake made with multiple layers of cake separated by frosting or filling",
                  "es": "Un pastel hecho con múltiples capas de pastel separadas por glaseado o relleno",
                  "de": "Ein Kuchen aus mehreren Kuchenschichten, getrennt durch Glasur oder Füllung",
                  "nl": "Een taart gemaakt van meerdere lagen taart gescheiden door glazuur of vulling"
        },
        {
                  "en": "A cake with many ingredients",
                  "es": "Un pastel con muchos ingredientes",
                  "de": "Ein Kuchen mit vielen Zutaten",
                  "nl": "Een taart met veel ingrediënten"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "A layer cake consists of two or more cake layers stacked on top of each other with frosting, filling, or jam between each layer. It's a classic cake style for celebrations.",
                  "es": "Un pastel de capas consiste en dos o más capas de pastel apiladas una encima de la otra con glaseado, relleno o mermelada entre cada capa. Es un estilo clásico de pastel para celebraciones.",
                  "de": "Ein Schichtkuchen besteht aus zwei oder mehr Kuchenschichten, die übereinander gestapelt sind mit Glasur, Füllung oder Marmelade zwischen jeder Schicht. Es ist ein klassischer Kuchenstil für Feierlichkeiten.",
                  "nl": "Een gelaagde taart bestaat uit twee of meer taartlagen gestapeld op elkaar met glazuur, vulling of jam tussen elke laag. Het is een klassieke taartstijl voor feesten."
        }
      },
      {
        question: {
                  "en": "What does it mean to 'cream' butter and sugar?",
                  "es": "¿Qué significa 'batir' mantequilla y azúcar?",
                  "de": "Was bedeutet es, Butter und Zucker zu 'schaumig rühren'?",
                  "nl": "Wat betekent het om boter en suiker 'te crèmeren'?"
        },
        options: [
        {
                  "en": "To mix them gently",
                  "es": "Mezclarlos suavemente",
                  "de": "Sie sanft vermischen",
                  "nl": "Ze voorzichtig mengen"
        },
        {
                  "en": "To add cream to them",
                  "es": "Agregarles crema",
                  "de": "Sahne hinzufügen",
                  "nl": "Room toevoegen"
        },
        {
                  "en": "To melt them together",
                  "es": "Derretirlos juntos",
                  "de": "Sie zusammen schmelzen",
                  "nl": "Ze samen smelten"
        },
        {
                  "en": "To beat them together until light and fluffy",
                  "es": "Batirlos juntos hasta que estén ligeros y esponjosos",
                  "de": "Sie zusammen schlagen, bis sie hell und fluffig sind",
                  "nl": "Ze samen kloppen tot ze licht en luchtig zijn"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Creaming butter and sugar means beating them together vigorously until the mixture becomes light, fluffy, and pale in color. This incorporates air and creates a tender cake texture.",
                  "es": "Batir mantequilla y azúcar significa batirlos juntos vigorosamente hasta que la mezcla se vuelva ligera, esponjosa y pálida en color. Esto incorpora aire y crea una textura de pastel tierna.",
                  "de": "Butter und Zucker schaumig rühren bedeutet, sie kräftig zusammen zu schlagen, bis die Mischung hell, fluffig und blass wird. Dies arbeitet Luft ein und schafft eine zarte Kuchentextur.",
                  "nl": "Boter en suiker crèmeren betekent ze krachtig samen kloppen tot het mengsel licht, luchtig en bleek van kleur wordt. Dit werkt lucht in en creëert een zachte taart textuur."
        }
      },
      {
        question: {
                  "en": "What is fondant?",
                  "es": "¿Qué es el fondant?",
                  "de": "Was ist Fondant?",
                  "nl": "Wat is fondant?"
        },
        options: [
        {
                  "en": "A baking tool",
                  "es": "Una herramienta de horneado",
                  "de": "Ein Backwerkzeug",
                  "nl": "Een bakgereedschap"
        },
        {
                  "en": "A cake filling",
                  "es": "Un relleno de pastel",
                  "de": "Eine Kuchenfüllung",
                  "nl": "Een taart vulling"
        },
        {
                  "en": "A type of cake batter",
                  "es": "Un tipo de masa para pastel",
                  "de": "Eine Art Kuchenteig",
                  "nl": "Een soort taartbeslag"
        },
        {
                  "en": "A smooth, pliable icing used to cover cakes",
                  "es": "Un glaseado suave y maleable usado para cubrir pasteles",
                  "de": "Eine glatte, formbare Glasur zum Überziehen von Kuchen",
                  "nl": "Een gladde, kneedbare glazuur gebruikt om taarten te bedekken"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Fondant is a sugar-based icing that can be rolled out and draped over cakes for a smooth, professional finish. It's popular for wedding cakes and decorated cakes.",
                  "es": "El fondant es un glaseado a base de azúcar que se puede extender y cubrir pasteles para un acabado suave y profesional. Es popular para pasteles de boda y pasteles decorados.",
                  "de": "Fondant ist eine zuckerbasierte Glasur, die ausgerollt und über Kuchen gelegt werden kann für einen glatten, professionellen Abschluss. Es ist beliebt für Hochzeitstorten und dekorierte Kuchen.",
                  "nl": "Fondant is een suiker-gebaseerd glazuur dat kan worden uitgerold en over taarten gelegd voor een gladde, professionele afwerking. Het is populair voor bruidstaarten en gedecoreerde taarten."
        }
      },
      {
        question: {
                  "en": "What is the purpose of sifting flour when making cakes?",
                  "es": "¿Cuál es el propósito de tamizar la harina al hacer pasteles?",
                  "de": "Was ist der Zweck des Siebens von Mehl beim Kuchenbacken?",
                  "nl": "Wat is het doel van het zeven van meel bij het maken van taarten?"
        },
        options: [
        {
                  "en": "To change the color of the flour",
                  "es": "Para cambiar el color de la harina",
                  "de": "Um die Farbe des Mehls zu ändern",
                  "nl": "Om de kleur van de meel te veranderen"
        },
        {
                  "en": "To make the flour taste better",
                  "es": "Para hacer que la harina sepa mejor",
                  "de": "Um das Mehl besser schmecken zu lassen",
                  "nl": "Om de meel beter te laten smaken"
        },
        {
                  "en": "To make the flour last longer",
                  "es": "Para hacer que la harina dure más",
                  "de": "Um das Mehl länger haltbar zu machen",
                  "nl": "Om de meel langer houdbaar te maken"
        },
        {
                  "en": "To remove lumps and add air for a lighter texture",
                  "es": "Para remover grumos y agregar aire para una textura más ligera",
                  "de": "Um Klumpen zu entfernen und Luft für eine leichtere Textur hinzuzufügen",
                  "nl": "Om klontjes te verwijderen en lucht toe te voegen voor een lichtere textuur"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Sifting flour removes lumps and incorporates air, making it lighter and easier to mix into cake batter. This results in a more tender, fine-textured cake.",
                  "es": "Tamizar la harina remueve grumos e incorpora aire, haciéndola más ligera y fácil de mezclar en la masa del pastel. Esto resulta en un pastel más tierno y de textura fina.",
                  "de": "Das Sieben von Mehl entfernt Klumpen und arbeitet Luft ein, macht es leichter und einfacher in den Kuchenteig zu mischen. Dies führt zu einem zarteren Kuchen mit feiner Textur.",
                  "nl": "Het zeven van meel verwijdert klontjes en werkt lucht in, waardoor het lichter wordt en makkelijker in taartbeslag te mengen is. Dit resulteert in een zachtere taart met fijne textuur."
        }
      },
      {
        question: {
                  "en": "What is a bundt cake?",
                  "es": "¿Qué es un pastel bundt?",
                  "de": "Was ist ein Bundt-Kuchen?",
                  "nl": "Wat is een bundt cake?"
        },
        options: [
        {
                  "en": "A cake baked in a ring-shaped pan with decorative ridges",
                  "es": "Un pastel horneado en un molde en forma de anillo con crestas decorativas",
                  "de": "Ein Kuchen, der in einer ringförmigen Form mit dekorativen Rillen gebacken wird",
                  "nl": "Een taart gebakken in een ringvormige pan met decoratieve ribbels"
        },
        {
                  "en": "A German cake",
                  "es": "Un pastel alemán",
                  "de": "Ein deutscher Kuchen",
                  "nl": "Een Duitse taart"
        },
        {
                  "en": "A very small cake",
                  "es": "Un pastel muy pequeño",
                  "de": "Ein sehr kleiner Kuchen",
                  "nl": "Een heel kleine taart"
        },
        {
                  "en": "A cake with nuts",
                  "es": "Un pastel con nueces",
                  "de": "Ein Kuchen mit Nüssen",
                  "nl": "Een taart met noten"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A bundt cake is baked in a bundt pan, which is a ring-shaped pan with fluted or decorative sides. The pan creates an attractive shape that often doesn't need frosting.",
                  "es": "Un pastel bundt se hornea en un molde bundt, que es un molde en forma de anillo con lados acanalados o decorativos. El molde crea una forma atractiva que a menudo no necesita glaseado.",
                  "de": "Ein Bundt-Kuchen wird in einer Bundt-Form gebacken, die eine ringförmige Form mit gerillten oder dekorativen Seiten ist. Die Form schafft eine attraktive Form, die oft keine Glasur benötigt.",
                  "nl": "Een bundt cake wordt gebakken in een bundt pan, wat een ringvormige pan is met geribbelde of decoratieve zijkanten. De pan creëert een aantrekkelijke vorm die vaak geen glazuur nodig heeft."
        }
      },
      {
        question: {
                  "en": "What is the difference between a cupcake and a muffin?",
                  "es": "¿Cuál es la diferencia entre un cupcake y un muffin?",
                  "de": "Was ist der Unterschied zwischen einem Cupcake und einem Muffin?",
                  "nl": "Wat is het verschil tussen een cupcake en een muffin?"
        },
        options: [
        {
                  "en": "Cupcakes are smaller",
                  "es": "Los cupcakes son más pequeños",
                  "de": "Cupcakes sind kleiner",
                  "nl": "Cupcakes zijn kleiner"
        },
        {
                  "en": "Cupcakes are sweeter and often frosted, muffins are less sweet and more bread-like",
                  "es": "Los cupcakes son más dulces y a menudo glaseados, los muffins son menos dulces y más parecidos al pan",
                  "de": "Cupcakes sind süßer und oft glasiert, Muffins sind weniger süß und brotähnlicher",
                  "nl": "Cupcakes zijn zoeter en vaak geglasuurd, muffins zijn minder zoet en meer broodachtig"
        },
        {
                  "en": "They are exactly the same",
                  "es": "Son exactamente iguales",
                  "de": "Sie sind genau gleich",
                  "nl": "Ze zijn precies hetzelfde"
        },
        {
                  "en": "Muffins are always chocolate",
                  "es": "Los muffins son siempre de chocolate",
                  "de": "Muffins sind immer Schokolade",
                  "nl": "Muffins zijn altijd chocolade"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Cupcakes are essentially small cakes, often sweet and decorated with frosting. Muffins are quick breads that are less sweet, denser, and usually eaten without frosting.",
                  "es": "Los cupcakes son esencialmente pequeños pasteles, a menudo dulces y decorados con glaseado. Los muffins son panes rápidos que son menos dulces, más densos y usualmente se comen sin glaseado.",
                  "de": "Cupcakes sind im Wesentlichen kleine Kuchen, oft süß und mit Glasur dekoriert. Muffins sind schnelle Brote, die weniger süß, dichter sind und normalerweise ohne Glasur gegessen werden.",
                  "nl": "Cupcakes zijn in wezen kleine taarten, vaak zoet en gedecoreerd met glazuur. Muffins zijn snelle broden die minder zoet, dichter zijn en meestal zonder glazuur worden gegeten."
        }
      },
      {
        question: {
                  "en": "What is ganache used for in cake making?",
                  "es": "¿Para qué se usa el ganache en la elaboración de pasteles?",
                  "de": "Wofür wird Ganache beim Kuchenbacken verwendet?",
                  "nl": "Waarvoor wordt ganache gebruikt bij taart maken?"
        },
        options: [
        {
                  "en": "To add color",
                  "es": "Para agregar color",
                  "de": "Um Farbe hinzuzufügen",
                  "nl": "Om kleur toe te voegen"
        },
        {
                  "en": "To make the cake rise",
                  "es": "Para hacer que el pastel suba",
                  "de": "Um den Kuchen aufgehen zu lassen",
                  "nl": "Om de taart te laten rijzen"
        },
        {
                  "en": "To preserve the cake",
                  "es": "Para preservar el pastel",
                  "de": "Um den Kuchen zu konservieren",
                  "nl": "Om de taart te bewaren"
        },
        {
                  "en": "As a rich frosting, filling, or glaze",
                  "es": "Como un glaseado rico, relleno o glase",
                  "de": "Als reichhaltige Glasur, Füllung oder Glasur",
                  "nl": "Als een rijke glazuur, vulling of glans"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Ganache is a mixture of chocolate and cream that can be used as a smooth frosting, rich filling between layers, or poured over cakes as a glossy glaze.",
                  "es": "El ganache es una mezcla de chocolate y crema que se puede usar como un glaseado suave, relleno rico entre capas, o vertido sobre pasteles como un glase brillante.",
                  "de": "Ganache ist eine Mischung aus Schokolade und Sahne, die als glatte Glasur, reichhaltige Füllung zwischen Schichten oder als glänzende Glasur über Kuchen verwendet werden kann.",
                  "nl": "Ganache is een mengsel van chocolade en room dat kan worden gebruikt als gladde glazuur, rijke vulling tussen lagen, of over taarten gegoten als glanzende glans."
        }
      },
      {
        question: {
                  "en": "What does 'folding' mean in cake baking?",
                  "es": "¿Qué significa 'doblar' en la elaboración de pasteles?",
                  "de": "Was bedeutet 'unterheben' beim Kuchenbacken?",
                  "nl": "Wat betekent 'vouwen' bij taart bakken?"
        },
        options: [
        {
                  "en": "A gentle mixing technique to preserve air in the batter",
                  "es": "Una técnica de mezcla suave para preservar aire en la masa",
                  "de": "Eine sanfte Mischtechnik, um Luft im Teig zu bewahren",
                  "nl": "Een zachte mengtechniek om lucht in het beslag te behouden"
        },
        {
                  "en": "Kneading the dough",
                  "es": "Amasar la masa",
                  "de": "Den Teig kneten",
                  "nl": "Het deeg kneden"
        },
        {
                  "en": "Bending the cake in half",
                  "es": "Doblar el pastel por la mitad",
                  "de": "Den Kuchen in der Hälfte falten",
                  "nl": "De taart dubbelvouwen"
        },
        {
                  "en": "Adding ingredients quickly",
                  "es": "Agregar ingredientes rápidamente",
                  "de": "Zutaten schnell hinzufügen",
                  "nl": "Ingrediënten snel toevoegen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Folding is a gentle mixing technique where ingredients are combined with a cutting and turning motion to preserve air bubbles and keep the batter light and fluffy.",
                  "es": "Doblar es una técnica de mezcla suave donde los ingredientes se combinan con un movimiento de corte y giro para preservar las burbujas de aire y mantener la masa ligera y esponjosa.",
                  "de": "Unterheben ist eine sanfte Mischtechnik, bei der Zutaten mit einer schneidenden und drehenden Bewegung kombiniert werden, um Luftblasen zu bewahren und den Teig leicht und fluffig zu halten.",
                  "nl": "Vouwen is een zachte mengtechniek waarbij ingrediënten worden gecombineerd met een snijdende en draaiende beweging om luchtbellen te behouden en het beslag licht en luchtig te houden."
        }
      },
      {
        question: {
                  "en": "What is royal icing?",
                  "es": "¿Qué es el glaseado real?",
                  "de": "Was ist Royal Icing?",
                  "nl": "Wat is royal icing?"
        },
        options: [
        {
                  "en": "A creamy frosting",
                  "es": "Un glaseado cremoso",
                  "de": "Eine cremige Glasur",
                  "nl": "Een romige glazuur"
        },
        {
                  "en": "An icing used only by royalty",
                  "es": "Un glaseado usado solo por la realeza",
                  "de": "Eine Glasur, die nur von Königen verwendet wird",
                  "nl": "Een glazuur alleen gebruikt door royalty"
        },
        {
                  "en": "A hard icing made from egg whites and powdered sugar",
                  "es": "Un glaseado duro hecho de claras de huevo y azúcar en polvo",
                  "de": "Eine harte Glasur aus Eiweiß und Puderzucker",
                  "nl": "Een harde glazuur gemaakt van eiwitten en poedersuiker"
        },
        {
                  "en": "A type of cake",
                  "es": "Un tipo de pastel",
                  "de": "Eine Art Kuchen",
                  "nl": "Een soort taart"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Royal icing is made from egg whites (or meringue powder) and powdered sugar. It dries hard and smooth, making it perfect for detailed decorating and cookie decorating.",
                  "es": "El glaseado real está hecho de claras de huevo (o polvo de merengue) y azúcar en polvo. Se seca duro y suave, haciéndolo perfecto para decoración detallada y decoración de galletas.",
                  "de": "Royal Icing wird aus Eiweiß (oder Baiserfolienpulver) und Puderzucker hergestellt. Es trocknet hart und glatt und ist perfekt für detaillierte Dekoration und Keksdekoration.",
                  "nl": "Royal icing wordt gemaakt van eiwitten (of schuimpoeder) en poedersuiker. Het droogt hard en glad op, waardoor het perfect is voor gedetailleerde decoratie en koekjesdecoratie."
        }
      },
      {
        question: {
                  "en": "What is the purpose of preheating an oven before baking a cake?",
                  "es": "¿Cuál es el propósito de precalentar un horno antes de hornear un pastel?",
                  "de": "Was ist der Zweck des Vorheizens eines Ofens vor dem Backen eines Kuchens?",
                  "nl": "Wat is het doel van het voorverwarmen van een oven voordat je een taart bakt?"
        },
        options: [
        {
                  "en": "To save electricity",
                  "es": "Para ahorrar electricidad",
                  "de": "Um Strom zu sparen",
                  "nl": "Om elektriciteit te besparen"
        },
        {
                  "en": "To make the oven last longer",
                  "es": "Para hacer que el horno dure más",
                  "de": "Um den Ofen länger haltbar zu machen",
                  "nl": "Om de oven langer te laten meegaan"
        },
        {
                  "en": "To clean the oven",
                  "es": "Para limpiar el horno",
                  "de": "Um den Ofen zu reinigen",
                  "nl": "Om de oven schoon te maken"
        },
        {
                  "en": "To ensure even baking and proper rising",
                  "es": "Para asegurar un horneado uniforme y un levantamiento adecuado",
                  "de": "Um gleichmäßiges Backen und ordentliches Aufgehen zu gewährleisten",
                  "nl": "Om gelijkmatig bakken en goed rijzen te verzekeren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Preheating ensures the oven reaches the correct temperature before the cake goes in. This provides immediate, even heat for proper rising and prevents uneven baking.",
                  "es": "Precalentar asegura que el horno alcance la temperatura correcta antes de que entre el pastel. Esto proporciona calor inmediato y uniforme para un levantamiento adecuado y previene el horneado desigual.",
                  "de": "Vorheizen stellt sicher, dass der Ofen die richtige Temperatur erreicht, bevor der Kuchen hineinkommt. Dies bietet sofortige, gleichmäßige Hitze für ordentliches Aufgehen und verhindert ungleichmäßiges Backen.",
                  "nl": "Voorverwarmen zorgt ervoor dat de oven de juiste temperatuur bereikt voordat de taart erin gaat. Dit biedt onmiddellijke, gelijkmatige hitte voor goed rijzen en voorkomt ongelijkmatig bakken."
        }
      },
      {
        question: {
                  "en": "What is a sheet cake?",
                  "es": "¿Qué es un pastel de bandeja?",
                  "de": "Was ist ein Blechkuchen?",
                  "nl": "Wat is een platte taart?"
        },
        options: [
        {
                  "en": "A cake wrapped in paper",
                  "es": "Un pastel envuelto en papel",
                  "de": "Ein in Papier verpackter Kuchen",
                  "nl": "Een taart verpakt in papier"
        },
        {
                  "en": "A large, flat cake baked in a rectangular pan",
                  "es": "Un pastel grande y plano horneado en un molde rectangular",
                  "de": "Ein großer, flacher Kuchen, der in einer rechteckigen Form gebacken wird",
                  "nl": "Een grote, platte taart gebakken in een rechthoekige pan"
        },
        {
                  "en": "A cake made with sheets of dough",
                  "es": "Un pastel hecho con hojas de masa",
                  "de": "Ein Kuchen aus Teigplatten",
                  "nl": "Een taart gemaakt van deegvellen"
        },
        {
                  "en": "A very thin cake",
                  "es": "Un pastel muy delgado",
                  "de": "Ein sehr dünner Kuchen",
                  "nl": "Een heel dunne taart"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "A sheet cake is a large, single-layer cake baked in a rectangular pan. It's perfect for feeding crowds and is often frosted directly in the pan for easy serving.",
                  "es": "Un pastel de bandeja es un pastel grande de una sola capa horneado en un molde rectangular. Es perfecto para alimentar multitudes y a menudo se glasea directamente en el molde para servir fácilmente.",
                  "de": "Ein Blechkuchen ist ein großer, einschichtiger Kuchen, der in einer rechteckigen Form gebacken wird. Er ist perfekt für große Gruppen und wird oft direkt in der Form glasiert für einfaches Servieren.",
                  "nl": "Een platte taart is een grote, enkellaagse taart gebakken in een rechthoekige pan. Het is perfect voor het voeden van grote groepen en wordt vaak direct in de pan geglasuurd voor gemakkelijk serveren."
        }
      },
      {
        question: {
                  "en": "What causes a cake to be dense instead of light and fluffy?",
                  "es": "¿Qué causa que un pastel sea denso en lugar de ligero y esponjoso?",
                  "de": "Was bewirkt, dass ein Kuchen dicht statt leicht und fluffig wird?",
                  "nl": "Wat zorgt ervoor dat een taart dicht wordt in plaats van licht en luchtig?"
        },
        options: [
        {
                  "en": "Overmixing the batter or incorrect measurements",
                  "es": "Mezclar demasiado la masa o medidas incorrectas",
                  "de": "Übermischen des Teigs oder falsche Messungen",
                  "nl": "Te veel mengen van het beslag of verkeerde metingen"
        },
        {
                  "en": "Using too much vanilla",
                  "es": "Usar demasiada vainilla",
                  "de": "Zu viel Vanille verwenden",
                  "nl": "Te veel vanille gebruiken"
        },
        {
                  "en": "Baking at too low temperature",
                  "es": "Hornear a temperatura muy baja",
                  "de": "Bei zu niedriger Temperatur backen",
                  "nl": "Bakken op te lage temperatuur"
        },
        {
                  "en": "Adding too much frosting",
                  "es": "Agregar demasiado glaseado",
                  "de": "Zu viel Glasur hinzufügen",
                  "nl": "Te veel glazuur toevoegen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Dense cakes are usually caused by overmixing (which develops gluten), incorrect ingredient ratios, old leavening agents, or not enough air incorporated into the batter.",
                  "es": "Los pasteles densos usualmente son causados por mezclar demasiado (lo que desarrolla gluten), proporciones incorrectas de ingredientes, agentes leudantes viejos, o no incorporar suficiente aire en la masa.",
                  "de": "Dichte Kuchen werden normalerweise durch Übermischen (was Gluten entwickelt), falsche Zutatenverhältnisse, alte Triebmittel oder nicht genug eingearbeitete Luft im Teig verursacht.",
                  "nl": "Dichte taarten worden meestal veroorzaakt door te veel mengen (wat gluten ontwikkelt), verkeerde ingrediëntverhoudingen, oude rijsmiddelen, of niet genoeg lucht in het beslag."
        }
      },
      {
        question: {
                  "en": "What is a naked cake?",
                  "es": "¿Qué es un pastel desnudo?",
                  "de": "Was ist ein nackter Kuchen?",
                  "nl": "Wat is een naakte taart?"
        },
        options: [
        {
                  "en": "A layer cake with minimal or no frosting on the outside",
                  "es": "Un pastel de capas con mínimo o sin glaseado en el exterior",
                  "de": "Ein Schichtkuchen mit minimaler oder keiner Glasur außen",
                  "nl": "Een gelaagde taart met minimaal of geen glazuur aan de buitenkant"
        },
        {
                  "en": "A cake without any decorations",
                  "es": "Un pastel sin decoraciones",
                  "de": "Ein Kuchen ohne Dekorationen",
                  "nl": "Een taart zonder decoraties"
        },
        {
                  "en": "A cake baked without a pan",
                  "es": "Un pastel horneado sin molde",
                  "de": "Ein ohne Form gebackener Kuchen",
                  "nl": "Een taart gebakken zonder pan"
        },
        {
                  "en": "A cake made without flour",
                  "es": "Un pastel hecho sin harina",
                  "de": "Ein ohne Mehl gemachter Kuchen",
                  "nl": "Een taart gemaakt zonder meel"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A naked cake is a trendy style where the cake layers are visible because there's little to no frosting on the outside. The layers and any filling show through for a rustic, natural look.",
                  "es": "Un pastel desnudo es un estilo moderno donde las capas del pastel son visibles porque hay poco o nada de glaseado en el exterior. Las capas y cualquier relleno se ven a través para una apariencia rústica y natural.",
                  "de": "Ein nackter Kuchen ist ein trendiger Stil, bei dem die Kuchenschichten sichtbar sind, weil es wenig bis gar keine Glasur außen gibt. Die Schichten und jede Füllung zeigen sich für einen rustikalen, natürlichen Look.",
                  "nl": "Een naakte taart is een trendy stijl waarbij de taartlagen zichtbaar zijn omdat er weinig tot geen glazuur aan de buitenkant zit. De lagen en eventuele vulling zijn zichtbaar voor een rustieke, natuurlijke uitstraling."
        }
      },
      {
        question: {
                  "en": "What is the main difference between cake flour and all-purpose flour?",
                  "es": "¿Cuál es la principal diferencia entre harina para pasteles y harina para todo uso?",
                  "de": "Was ist der Hauptunterschied zwischen Kuchenmehl und Allzweckmehl?",
                  "nl": "Wat is het hoofdverschil tussen taartmeel en gewone bloem?"
        },
        options: [
        {
                  "en": "Cake flour has less protein, making cakes more tender",
                  "es": "La harina para pasteles tiene menos proteína, haciendo los pasteles más tiernos",
                  "de": "Kuchenmehl hat weniger Protein, was Kuchen zarter macht",
                  "nl": "Taartmeel heeft minder proteïne, waardoor taarten zachter worden"
        },
        {
                  "en": "Cake flour is sweeter",
                  "es": "La harina para pasteles es más dulce",
                  "de": "Kuchenmehl ist süßer",
                  "nl": "Taartmeel is zoeter"
        },
        {
                  "en": "Cake flour is more expensive",
                  "es": "La harina para pasteles es más cara",
                  "de": "Kuchenmehl ist teurer",
                  "nl": "Taartmeel is duurder"
        },
        {
                  "en": "Cake flour is white",
                  "es": "La harina para pasteles es blanca",
                  "de": "Kuchenmehl ist weiß",
                  "nl": "Taartmeel is wit"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Cake flour has a lower protein content (6-8%) compared to all-purpose flour (10-12%). Less protein means less gluten development, resulting in more tender, delicate cakes.",
                  "es": "La harina para pasteles tiene menor contenido de proteína (6-8%) comparada con la harina para todo uso (10-12%). Menos proteína significa menos desarrollo de gluten, resultando en pasteles más tiernos y delicados.",
                  "de": "Kuchenmehl hat einen niedrigeren Proteingehalt (6-8%) im Vergleich zu Allzweckmehl (10-12%). Weniger Protein bedeutet weniger Glutenentwicklung, was zu zarteren, delikateren Kuchen führt.",
                  "nl": "Taartmeel heeft een lager eiwitgehalte (6-8%) vergeleken met gewone bloem (10-12%). Minder eiwit betekent minder glutenontwikkeling, wat resulteert in zachtere, delicatere taarten."
        }
      },
      {
        question: {
                  "en": "What does it mean when a cake recipe calls for 'room temperature' ingredients?",
                  "es": "¿Qué significa cuando una receta de pastel pide ingredientes a 'temperatura ambiente'?",
                  "de": "Was bedeutet es, wenn ein Kuchenrezept 'Raumtemperatur'-Zutaten verlangt?",
                  "nl": "Wat betekent het wanneer een taartrecept om ingrediënten op 'kamertemperatuur' vraagt?"
        },
        options: [
        {
                  "en": "It doesn't matter what temperature",
                  "es": "No importa qué temperatura",
                  "de": "Die Temperatur ist egal",
                  "nl": "De temperatuur maakt niet uit"
        },
        {
                  "en": "Ingredients should be at about 20-22°C for better mixing",
                  "es": "Los ingredientes deben estar a unos 20-22°C para mejor mezcla",
                  "de": "Zutaten sollten etwa 20-22°C haben für besseres Mischen",
                  "nl": "Ingrediënten moeten ongeveer 20-22°C zijn voor beter mengen"
        },
        {
                  "en": "Ingredients should be cold",
                  "es": "Los ingredientes deben estar fríos",
                  "de": "Zutaten sollten kalt sein",
                  "nl": "Ingrediënten moeten koud zijn"
        },
        {
                  "en": "Ingredients should be heated",
                  "es": "Los ingredientes deben ser calentados",
                  "de": "Zutaten sollten erhitzt werden",
                  "nl": "Ingrediënten moeten verwarmd worden"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Room temperature ingredients (around 20-22°C) mix together more easily and evenly, creating better emulsification and a smoother batter, which results in better cake texture.",
                  "es": "Los ingredientes a temperatura ambiente (alrededor de 20-22°C) se mezclan más fácilmente y uniformemente, creando mejor emulsificación y una masa más suave, lo que resulta en mejor textura del pastel.",
                  "de": "Zutaten bei Raumtemperatur (etwa 20-22°C) mischen sich leichter und gleichmäßiger, schaffen bessere Emulgierung und einen glatteren Teig, was zu besserer Kuchentextur führt.",
                  "nl": "Ingrediënten op kamertemperatuur (rond 20-22°C) mengen gemakkelijker en gelijkmatiger, waardoor betere emulgering en een gladder beslag ontstaat, wat resulteert in betere taart textuur."
        }
      },
      {
        question: {
                  "en": "What is the purpose of using parchment paper in cake baking?",
                  "es": "¿Cuál es el propósito de usar papel pergamino en la elaboración de pasteles?",
                  "de": "Was ist der Zweck der Verwendung von Backpapier beim Kuchenbacken?",
                  "nl": "Wat is het doel van het gebruik van bakpapier bij taart bakken?"
        },
        options: [
        {
                  "en": "To make the cake taste better",
                  "es": "Para hacer que el pastel sepa mejor",
                  "de": "Um den Kuchen besser schmecken zu lassen",
                  "nl": "Om de taart beter te laten smaken"
        },
        {
                  "en": "To add decoration",
                  "es": "Para agregar decoración",
                  "de": "Um Dekoration hinzuzufügen",
                  "nl": "Om decoratie toe te voegen"
        },
        {
                  "en": "To speed up baking",
                  "es": "Para acelerar el horneado",
                  "de": "Um das Backen zu beschleunigen",
                  "nl": "Om het bakken te versnellen"
        },
        {
                  "en": "To prevent sticking and make removal easier",
                  "es": "Para prevenir que se pegue y hacer la remoción más fácil",
                  "de": "Um Anhaften zu verhindern und das Herausnehmen zu erleichtern",
                  "nl": "Om plakken te voorkomen en verwijdering gemakkelijker te maken"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Parchment paper creates a non-stick surface between the cake and pan, making it much easier to remove the cake cleanly without breaking or sticking to the pan.",
                  "es": "El papel pergamino crea una superficie antiadherente entre el pastel y el molde, haciendo mucho más fácil remover el pastel limpiamente sin romperlo o que se pegue al molde.",
                  "de": "Backpapier schafft eine antihaftende Oberfläche zwischen Kuchen und Form, wodurch es viel einfacher wird, den Kuchen sauber herauszunehmen, ohne dass er bricht oder an der Form klebt.",
                  "nl": "Bakpapier creëert een anti-kleef oppervlak tussen de taart en pan, waardoor het veel makkelijker wordt om de taart netjes te verwijderen zonder breken of plakken aan de pan."
        }
      },
      {
        question: {
                  "en": "What type of cake is traditionally served at weddings?",
                  "es": "¿Qué tipo de pastel se sirve tradicionalmente en las bodas?",
                  "de": "Welche Art von Kuchen wird traditionell bei Hochzeiten serviert?",
                  "nl": "Welk type taart wordt traditioneel op bruiloften geserveerd?"
        },
        options: [
        {
                  "en": "Cheesecake",
                  "es": "Tarta de queso",
                  "de": "Käsekuchen",
                  "nl": "Cheesecake"
        },
        {
                  "en": "Chocolate cake",
                  "es": "Pastel de chocolate",
                  "de": "Schokoladenkuchen",
                  "nl": "Chocoladetaart"
        },
        {
                  "en": "Fruit tart",
                  "es": "Tarta de frutas",
                  "de": "Obstkuchen",
                  "nl": "Fruittaart"
        },
        {
                  "en": "Wedding cake (white cake with white frosting)",
                  "es": "Pastel de boda (pastel blanco con glaseado blanco)",
                  "de": "Hochzeitstorte (weißer Kuchen mit weißer Glasur)",
                  "nl": "Bruidstaart (witte taart met witte glazuur)"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Traditional wedding cakes are typically multi-tiered white or vanilla cakes with white buttercream or fondant frosting, symbolizing purity and new beginnings.",
                  "es": "Los pasteles de boda tradicionales son típicamente pasteles blancos o de vainilla de múltiples niveles con glaseado de mantequilla blanco o fondant, simbolizando pureza y nuevos comienzos.",
                  "de": "Traditionelle Hochzeitstorten sind typischerweise mehrstöckige weiße oder Vanillekuchen mit weißer Buttercreme oder Fondant-Glasur, die Reinheit und Neuanfänge symbolisieren.",
                  "nl": "Traditionele bruidstaarten zijn doorgaans meerlaagse witte of vanille taarten met witte botercrème of fondant glazuur, die zuiverheid en nieuwe begin symboliseren."
        }
      },
      {
        question: {
                  "en": "What is the main ingredient in sponge cake?",
                  "es": "What is the main ingredient in sponge cake?",
                  "de": "What is the main ingredient in sponge cake?",
                  "nl": "What is the main ingredient in sponge cake?"
        },
        options: [
        {
                  "en": "Sugar",
                  "es": "Sugar",
                  "de": "Sugar",
                  "nl": "Sugar"
        },
        {
                  "en": "Butter",
                  "es": "Butter",
                  "de": "Butter",
                  "nl": "Butter"
        },
        {
                  "en": "Eggs",
                  "es": "Eggs",
                  "de": "Eggs",
                  "nl": "Eggs"
        },
        {
                  "en": "Flour",
                  "es": "Flour",
                  "de": "Flour",
                  "nl": "Flour"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Eggs are the key ingredient that gives sponge cake its light, airy texture through whipped air incorporation.",
                  "es": "Eggs are the key ingredient that gives sponge cake its light, airy texture through whipped air incorporation.",
                  "de": "Eggs are the key ingredient that gives sponge cake its light, airy texture through whipped air incorporation.",
                  "nl": "Eggs are the key ingredient that gives sponge cake its light, airy texture through whipped air incorporation."
        }
      },
      {
        question: {
                  "en": "What country is the Black Forest cake from?",
                  "es": "What country is the Black Forest cake from?",
                  "de": "What country is the Black Forest cake from?",
                  "nl": "What country is the Black Forest cake from?"
        },
        options: [
        {
                  "en": "France",
                  "es": "France",
                  "de": "France",
                  "nl": "France"
        },
        {
                  "en": "Austria",
                  "es": "Austria",
                  "de": "Austria",
                  "nl": "Austria"
        },
        {
                  "en": "Switzerland",
                  "es": "Switzerland",
                  "de": "Switzerland",
                  "nl": "Switzerland"
        },
        {
                  "en": "Germany",
                  "es": "Germany",
                  "de": "Germany",
                  "nl": "Germany"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Black Forest cake (Schwarzwälder Kirschtorte) originated in the Black Forest region of Germany.",
                  "es": "Black Forest cake (Schwarzwälder Kirschtorte) originated in the Black Forest region of Germany.",
                  "de": "Black Forest cake (Schwarzwälder Kirschtorte) originated in the Black Forest region of Germany.",
                  "nl": "Black Forest cake (Schwarzwälder Kirschtorte) originated in the Black Forest region of Germany."
        }
      },
      {
        question: {
                  "en": "What is a bundt cake?",
                  "es": "What is a bundt cake?",
                  "de": "What is a bundt cake?",
                  "nl": "What is a bundt cake?"
        },
        options: [
        {
                  "en": "Sheet cake",
                  "es": "Sheet cake",
                  "de": "Sheet cake",
                  "nl": "Sheet cake"
        },
        {
                  "en": "Cake baked in a ring-shaped pan",
                  "es": "Cake baked in a ring-shaped pan",
                  "de": "Cake baked in a ring-shaped pan",
                  "nl": "Cake baked in a ring-shaped pan"
        },
        {
                  "en": "Layered cake",
                  "es": "Layered cake",
                  "de": "Layered cake",
                  "nl": "Layered cake"
        },
        {
                  "en": "Cupcake",
                  "es": "Cupcake",
                  "de": "Cupcake",
                  "nl": "Cupcake"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "A bundt cake is baked in a distinctive ring-shaped bundt pan with decorative fluting.",
                  "es": "A bundt cake is baked in a distinctive ring-shaped bundt pan with decorative fluting.",
                  "de": "A bundt cake is baked in a distinctive ring-shaped bundt pan with decorative fluting.",
                  "nl": "A bundt cake is baked in a distinctive ring-shaped bundt pan with decorative fluting."
        }
      },
      {
        question: {
                  "en": "What is angel food cake known for?",
                  "es": "What is angel food cake known for?",
                  "de": "What is angel food cake known for?",
                  "nl": "What is angel food cake known for?"
        },
        options: [
        {
                  "en": "Rich chocolate flavor",
                  "es": "Rich chocolate flavor",
                  "de": "Rich chocolate flavor",
                  "nl": "Rich chocolate flavor"
        },
        {
                  "en": "Being light and fat-free",
                  "es": "Being light and fat-free",
                  "de": "Being light and fat-free",
                  "nl": "Being light and fat-free"
        },
        {
                  "en": "Cream cheese frosting",
                  "es": "Cream cheese frosting",
                  "de": "Cream cheese frosting",
                  "nl": "Cream cheese frosting"
        },
        {
                  "en": "Heavy texture",
                  "es": "Heavy texture",
                  "de": "Heavy texture",
                  "nl": "Heavy texture"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Angel food cake is light, fluffy, and contains no fat - made primarily from egg whites, sugar, and flour.",
                  "es": "Angel food cake is light, fluffy, and contains no fat - made primarily from egg whites, sugar, and flour.",
                  "de": "Angel food cake is light, fluffy, and contains no fat - made primarily from egg whites, sugar, and flour.",
                  "nl": "Angel food cake is light, fluffy, and contains no fat - made primarily from egg whites, sugar, and flour."
        }
      },
      {
        question: {
                  "en": "What is the traditional frosting for red velvet cake?",
                  "es": "What is the traditional frosting for red velvet cake?",
                  "de": "What is the traditional frosting for red velvet cake?",
                  "nl": "What is the traditional frosting for red velvet cake?"
        },
        options: [
        {
                  "en": "Whipped cream",
                  "es": "Whipped cream",
                  "de": "Whipped cream",
                  "nl": "Whipped cream"
        },
        {
                  "en": "Buttercream",
                  "es": "Buttercream",
                  "de": "Buttercream",
                  "nl": "Buttercream"
        },
        {
                  "en": "Cream cheese frosting",
                  "es": "Cream cheese frosting",
                  "de": "Cream cheese frosting",
                  "nl": "Cream cheese frosting"
        },
        {
                  "en": "Ganache",
                  "es": "Ganache",
                  "de": "Ganache",
                  "nl": "Ganache"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Traditional red velvet cake is topped with cream cheese frosting, complementing its subtle cocoa flavor.",
                  "es": "Traditional red velvet cake is topped with cream cheese frosting, complementing its subtle cocoa flavor.",
                  "de": "Traditional red velvet cake is topped with cream cheese frosting, complementing its subtle cocoa flavor.",
                  "nl": "Traditional red velvet cake is topped with cream cheese frosting, complementing its subtle cocoa flavor."
        }
      },
      {
        question: {
                  "en": "What makes a pound cake?",
                  "es": "What makes a pound cake?",
                  "de": "What makes a pound cake?",
                  "nl": "What makes a pound cake?"
        },
        options: [
        {
                  "en": "Served by the pound",
                  "es": "Served by the pound",
                  "de": "Served by the pound",
                  "nl": "Served by the pound"
        },
        {
                  "en": "It weighs one pound",
                  "es": "It weighs one pound",
                  "de": "It weighs one pound",
                  "nl": "It weighs one pound"
        },
        {
                  "en": "Contains a pound of chocolate",
                  "es": "Contains a pound of chocolate",
                  "de": "Contains a pound of chocolate",
                  "nl": "Contains a pound of chocolate"
        },
        {
                  "en": "Equal weights of butter, sugar, eggs, flour",
                  "es": "Equal weights of butter, sugar, eggs, flour",
                  "de": "Equal weights of butter, sugar, eggs, flour",
                  "nl": "Equal weights of butter, sugar, eggs, flour"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Traditional pound cake uses equal weights (originally one pound each) of butter, sugar, eggs, and flour.",
                  "es": "Traditional pound cake uses equal weights (originally one pound each) of butter, sugar, eggs, and flour.",
                  "de": "Traditional pound cake uses equal weights (originally one pound each) of butter, sugar, eggs, and flour.",
                  "nl": "Traditional pound cake uses equal weights (originally one pound each) of butter, sugar, eggs, and flour."
        }
      },
      {
        question: {
                  "en": "What is tres leches cake soaked in?",
                  "es": "What is tres leches cake soaked in?",
                  "de": "What is tres leches cake soaked in?",
                  "nl": "What is tres leches cake soaked in?"
        },
        options: [
        {
                  "en": "Three types of milk",
                  "es": "Three types of milk",
                  "de": "Three types of milk",
                  "nl": "Three types of milk"
        },
        {
                  "en": "Coffee",
                  "es": "Coffee",
                  "de": "Coffee",
                  "nl": "Coffee"
        },
        {
                  "en": "Rum",
                  "es": "Rum",
                  "de": "Rum",
                  "nl": "Rum"
        },
        {
                  "en": "Fruit syrup",
                  "es": "Fruit syrup",
                  "de": "Fruit syrup",
                  "nl": "Fruit syrup"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Tres leches cake is soaked in three milks: evaporated milk, condensed milk, and heavy cream.",
                  "es": "Tres leches cake is soaked in three milks: evaporated milk, condensed milk, and heavy cream.",
                  "de": "Tres leches cake is soaked in three milks: evaporated milk, condensed milk, and heavy cream.",
                  "nl": "Tres leches cake is soaked in three milks: evaporated milk, condensed milk, and heavy cream."
        }
      },
      {
        question: {
                  "en": "What is a chiffon cake?",
                  "es": "What is a chiffon cake?",
                  "de": "What is a chiffon cake?",
                  "nl": "What is a chiffon cake?"
        },
        options: [
        {
                  "en": "Frozen cake",
                  "es": "Frozen cake",
                  "de": "Frozen cake",
                  "nl": "Frozen cake"
        },
        {
                  "en": "Dense butter cake",
                  "es": "Dense butter cake",
                  "de": "Dense butter cake",
                  "nl": "Dense butter cake"
        },
        {
                  "en": "Light cake made with oil",
                  "es": "Light cake made with oil",
                  "de": "Light cake made with oil",
                  "nl": "Light cake made with oil"
        },
        {
                  "en": "Flourless cake",
                  "es": "Flourless cake",
                  "de": "Flourless cake",
                  "nl": "Flourless cake"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Chiffon cake is a light, airy cake made with vegetable oil instead of butter.",
                  "es": "Chiffon cake is a light, airy cake made with vegetable oil instead of butter.",
                  "de": "Chiffon cake is a light, airy cake made with vegetable oil instead of butter.",
                  "nl": "Chiffon cake is a light, airy cake made with vegetable oil instead of butter."
        }
      },
      {
        question: {
                  "en": "What is genoise?",
                  "es": "What is genoise?",
                  "de": "What is genoise?",
                  "nl": "What is genoise?"
        },
        options: [
        {
                  "en": "German fruit cake",
                  "es": "German fruit cake",
                  "de": "German fruit cake",
                  "nl": "German fruit cake"
        },
        {
                  "en": "Austrian nut cake",
                  "es": "Austrian nut cake",
                  "de": "Austrian nut cake",
                  "nl": "Austrian nut cake"
        },
        {
                  "en": "French chocolate cake",
                  "es": "French chocolate cake",
                  "de": "French chocolate cake",
                  "nl": "French chocolate cake"
        },
        {
                  "en": "Italian sponge cake",
                  "es": "Italian sponge cake",
                  "de": "Italian sponge cake",
                  "nl": "Italian sponge cake"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Genoise is a light Italian sponge cake made with whole eggs whipped with sugar.",
                  "es": "Genoise is a light Italian sponge cake made with whole eggs whipped with sugar.",
                  "de": "Genoise is a light Italian sponge cake made with whole eggs whipped with sugar.",
                  "nl": "Genoise is a light Italian sponge cake made with whole eggs whipped with sugar."
        }
      },
      {
        question: {
                  "en": "What is upside-down cake?",
                  "es": "What is upside-down cake?",
                  "de": "What is upside-down cake?",
                  "nl": "What is upside-down cake?"
        },
        options: [
        {
                  "en": "Fruit on bottom, flipped when baked",
                  "es": "Fruit on bottom, flipped when baked",
                  "de": "Fruit on bottom, flipped when baked",
                  "nl": "Fruit on bottom, flipped when baked"
        },
        {
                  "en": "Cake with holes",
                  "es": "Cake with holes",
                  "de": "Cake with holes",
                  "nl": "Cake with holes"
        },
        {
                  "en": "Inverted layers",
                  "es": "Inverted layers",
                  "de": "Inverted layers",
                  "nl": "Inverted layers"
        },
        {
                  "en": "Cake served upside down",
                  "es": "Cake served upside down",
                  "de": "Cake served upside down",
                  "nl": "Cake served upside down"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Upside-down cake has fruit and caramel on the pan bottom, then flipped after baking so fruit is on top.",
                  "es": "Upside-down cake has fruit and caramel on the pan bottom, then flipped after baking so fruit is on top.",
                  "de": "Upside-down cake has fruit and caramel on the pan bottom, then flipped after baking so fruit is on top.",
                  "nl": "Upside-down cake has fruit and caramel on the pan bottom, then flipped after baking so fruit is on top."
        }
      },
      {
        question: {
                  "en": "What is a flourless cake made with?",
                  "es": "What is a flourless cake made with?",
                  "de": "What is a flourless cake made with?",
                  "nl": "What is a flourless cake made with?"
        },
        options: [
        {
                  "en": "Rice flour",
                  "es": "Rice flour",
                  "de": "Rice flour",
                  "nl": "Rice flour"
        },
        {
                  "en": "Cornmeal",
                  "es": "Cornmeal",
                  "de": "Cornmeal",
                  "nl": "Cornmeal"
        },
        {
                  "en": "Ground nuts or chocolate",
                  "es": "Ground nuts or chocolate",
                  "de": "Ground nuts or chocolate",
                  "nl": "Ground nuts or chocolate"
        },
        {
                  "en": "Potato starch",
                  "es": "Potato starch",
                  "de": "Potato starch",
                  "nl": "Potato starch"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Flourless cakes typically use ground almonds, hazelnuts, or pure chocolate as the structure instead of wheat flour.",
                  "es": "Flourless cakes typically use ground almonds, hazelnuts, or pure chocolate as the structure instead of wheat flour.",
                  "de": "Flourless cakes typically use ground almonds, hazelnuts, or pure chocolate as the structure instead of wheat flour.",
                  "nl": "Flourless cakes typically use ground almonds, hazelnuts, or pure chocolate as the structure instead of wheat flour."
        }
      },
      {
        question: {
                  "en": "What is Battenberg cake?",
                  "es": "What is Battenberg cake?",
                  "de": "What is Battenberg cake?",
                  "nl": "What is Battenberg cake?"
        },
        options: [
        {
                  "en": "Fruit cake",
                  "es": "Fruit cake",
                  "de": "Fruit cake",
                  "nl": "Fruit cake"
        },
        {
                  "en": "Sponge roll",
                  "es": "Sponge roll",
                  "de": "Sponge roll",
                  "nl": "Sponge roll"
        },
        {
                  "en": "Pink and yellow checkered cake",
                  "es": "Pink and yellow checkered cake",
                  "de": "Pink and yellow checkered cake",
                  "nl": "Pink and yellow checkered cake"
        },
        {
                  "en": "Chocolate layer cake",
                  "es": "Chocolate layer cake",
                  "de": "Chocolate layer cake",
                  "nl": "Chocolate layer cake"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Battenberg is a light sponge cake with pink and yellow squares arranged in a checkered pattern, wrapped in marzipan.",
                  "es": "Battenberg is a light sponge cake with pink and yellow squares arranged in a checkered pattern, wrapped in marzipan.",
                  "de": "Battenberg is a light sponge cake with pink and yellow squares arranged in a checkered pattern, wrapped in marzipan.",
                  "nl": "Battenberg is a light sponge cake with pink and yellow squares arranged in a checkered pattern, wrapped in marzipan."
        }
      },
      {
        question: {
                  "en": "What is a sheet cake?",
                  "es": "What is a sheet cake?",
                  "de": "What is a sheet cake?",
                  "nl": "What is a sheet cake?"
        },
        options: [
        {
                  "en": "Ring-shaped cake",
                  "es": "Ring-shaped cake",
                  "de": "Ring-shaped cake",
                  "nl": "Ring-shaped cake"
        },
        {
                  "en": "Flat cake baked in a sheet pan",
                  "es": "Flat cake baked in a sheet pan",
                  "de": "Flat cake baked in a sheet pan",
                  "nl": "Flat cake baked in a sheet pan"
        },
        {
                  "en": "Individual cake",
                  "es": "Individual cake",
                  "de": "Individual cake",
                  "nl": "Individual cake"
        },
        {
                  "en": "Layered cake",
                  "es": "Layered cake",
                  "de": "Layered cake",
                  "nl": "Layered cake"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Sheet cake is a flat, single-layer cake baked in a large, shallow rectangular pan.",
                  "es": "Sheet cake is a flat, single-layer cake baked in a large, shallow rectangular pan.",
                  "de": "Sheet cake is a flat, single-layer cake baked in a large, shallow rectangular pan.",
                  "nl": "Sheet cake is a flat, single-layer cake baked in a large, shallow rectangular pan."
        }
      },
      {
        question: {
                  "en": "What is the difference between cake and torte?",
                  "es": "What is the difference between cake and torte?",
                  "de": "What is the difference between cake and torte?",
                  "nl": "What is the difference between cake and torte?"
        },
        options: [
        {
                  "en": "Torte has frosting",
                  "es": "Torte has frosting",
                  "de": "Torte has frosting",
                  "nl": "Torte has frosting"
        },
        {
                  "en": "Torte uses less flour, more eggs/nuts",
                  "es": "Torte uses less flour, more eggs/nuts",
                  "de": "Torte uses less flour, more eggs/nuts",
                  "nl": "Torte uses less flour, more eggs/nuts"
        },
        {
                  "en": "No difference",
                  "es": "No difference",
                  "de": "No difference",
                  "nl": "No difference"
        },
        {
                  "en": "Cake is denser",
                  "es": "Cake is denser",
                  "de": "Cake is denser",
                  "nl": "Cake is denser"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Tortes typically use ground nuts or breadcrumbs instead of much flour, and contain more eggs than traditional cakes.",
                  "es": "Tortes typically use ground nuts or breadcrumbs instead of much flour, and contain more eggs than traditional cakes.",
                  "de": "Tortes typically use ground nuts or breadcrumbs instead of much flour, and contain more eggs than traditional cakes.",
                  "nl": "Tortes typically use ground nuts or breadcrumbs instead of much flour, and contain more eggs than traditional cakes."
        }
      },
      {
        question: {
                  "en": "What is opera cake?",
                  "es": "What is opera cake?",
                  "de": "What is opera cake?",
                  "nl": "What is opera cake?"
        },
        options: [
        {
                  "en": "Austrian apple cake",
                  "es": "Austrian apple cake",
                  "de": "Austrian apple cake",
                  "nl": "Austrian apple cake"
        },
        {
                  "en": "Italian cream cake",
                  "es": "Italian cream cake",
                  "de": "Italian cream cake",
                  "nl": "Italian cream cake"
        },
        {
                  "en": "French almond sponge with coffee buttercream",
                  "es": "French almond sponge with coffee buttercream",
                  "de": "French almond sponge with coffee buttercream",
                  "nl": "French almond sponge with coffee buttercream"
        },
        {
                  "en": "German chocolate cake",
                  "es": "German chocolate cake",
                  "de": "German chocolate cake",
                  "nl": "German chocolate cake"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Opera cake is a French cake with layers of almond sponge soaked in coffee syrup, layered with coffee buttercream and chocolate ganache.",
                  "es": "Opera cake is a French cake with layers of almond sponge soaked in coffee syrup, layered with coffee buttercream and chocolate ganache.",
                  "de": "Opera cake is a French cake with layers of almond sponge soaked in coffee syrup, layered with coffee buttercream and chocolate ganache.",
                  "nl": "Opera cake is a French cake with layers of almond sponge soaked in coffee syrup, layered with coffee buttercream and chocolate ganache."
        }
      },
      {
        question: {
                  "en": "What is devil's food cake?",
                  "es": "What is devil's food cake?",
                  "de": "What is devil's food cake?",
                  "nl": "What is devil's food cake?"
        },
        options: [
        {
                  "en": "Red cake",
                  "es": "Red cake",
                  "de": "Red cake",
                  "nl": "Red cake"
        },
        {
                  "en": "Spicy cake",
                  "es": "Spicy cake",
                  "de": "Spicy cake",
                  "nl": "Spicy cake"
        },
        {
                  "en": "Dark fruit cake",
                  "es": "Dark fruit cake",
                  "de": "Dark fruit cake",
                  "nl": "Dark fruit cake"
        },
        {
                  "en": "Rich chocolate cake",
                  "es": "Rich chocolate cake",
                  "de": "Rich chocolate cake",
                  "nl": "Rich chocolate cake"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Devil's food cake is a rich, moist chocolate cake, often considered the chocolate counterpart to angel food cake.",
                  "es": "Devil's food cake is a rich, moist chocolate cake, often considered the chocolate counterpart to angel food cake.",
                  "de": "Devil's food cake is a rich, moist chocolate cake, often considered the chocolate counterpart to angel food cake.",
                  "nl": "Devil's food cake is a rich, moist chocolate cake, often considered the chocolate counterpart to angel food cake."
        }
      },
      {
        question: {
                  "en": "What is a marble cake?",
                  "es": "What is a marble cake?",
                  "de": "What is a marble cake?",
                  "nl": "What is a marble cake?"
        },
        options: [
        {
                  "en": "Layered cake",
                  "es": "Layered cake",
                  "de": "Layered cake",
                  "nl": "Layered cake"
        },
        {
                  "en": "Glazed cake",
                  "es": "Glazed cake",
                  "de": "Glazed cake",
                  "nl": "Glazed cake"
        },
        {
                  "en": "Cake with nuts",
                  "es": "Cake with nuts",
                  "de": "Cake with nuts",
                  "nl": "Cake with nuts"
        },
        {
                  "en": "Vanilla and chocolate swirled together",
                  "es": "Vanilla and chocolate swirled together",
                  "de": "Vanilla and chocolate swirled together",
                  "nl": "Vanilla and chocolate swirled together"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Marble cake features vanilla and chocolate batters swirled together to create a marbled pattern.",
                  "es": "Marble cake features vanilla and chocolate batters swirled together to create a marbled pattern.",
                  "de": "Marble cake features vanilla and chocolate batters swirled together to create a marbled pattern.",
                  "nl": "Marble cake features vanilla and chocolate batters swirled together to create a marbled pattern."
        }
      },
      {
        question: {
                  "en": "What is a dump cake?",
                  "es": "What is a dump cake?",
                  "de": "What is a dump cake?",
                  "nl": "What is a dump cake?"
        },
        options: [
        {
                  "en": "Cake made by dumping ingredients in pan",
                  "es": "Cake made by dumping ingredients in pan",
                  "de": "Cake made by dumping ingredients in pan",
                  "nl": "Cake made by dumping ingredients in pan"
        },
        {
                  "en": "Layered cake",
                  "es": "Layered cake",
                  "de": "Layered cake",
                  "nl": "Layered cake"
        },
        {
                  "en": "Failed cake",
                  "es": "Failed cake",
                  "de": "Failed cake",
                  "nl": "Failed cake"
        },
        {
                  "en": "Upside down cake",
                  "es": "Upside down cake",
                  "de": "Upside down cake",
                  "nl": "Upside down cake"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Dump cake is made by dumping ingredients directly into the baking pan without mixing - typically fruit, cake mix, and butter.",
                  "es": "Dump cake is made by dumping ingredients directly into the baking pan without mixing - typically fruit, cake mix, and butter.",
                  "de": "Dump cake is made by dumping ingredients directly into the baking pan without mixing - typically fruit, cake mix, and butter.",
                  "nl": "Dump cake is made by dumping ingredients directly into the baking pan without mixing - typically fruit, cake mix, and butter."
        }
      },
      {
        question: {
                  "en": "What is Baumkuchen?",
                  "es": "What is Baumkuchen?",
                  "de": "What is Baumkuchen?",
                  "nl": "What is Baumkuchen?"
        },
        options: [
        {
                  "en": "Austrian chocolate cake",
                  "es": "Austrian chocolate cake",
                  "de": "Austrian chocolate cake",
                  "nl": "Austrian chocolate cake"
        },
        {
                  "en": "German tree ring cake",
                  "es": "German tree ring cake",
                  "de": "German tree ring cake",
                  "nl": "German tree ring cake"
        },
        {
                  "en": "Italian nut cake",
                  "es": "Italian nut cake",
                  "de": "Italian nut cake",
                  "nl": "Italian nut cake"
        },
        {
                  "en": "French sponge cake",
                  "es": "French sponge cake",
                  "de": "French sponge cake",
                  "nl": "French sponge cake"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Baumkuchen is a German cake baked in thin layers on a rotating spit, creating rings that resemble tree rings when sliced.",
                  "es": "Baumkuchen is a German cake baked in thin layers on a rotating spit, creating rings that resemble tree rings when sliced.",
                  "de": "Baumkuchen is a German cake baked in thin layers on a rotating spit, creating rings that resemble tree rings when sliced.",
                  "nl": "Baumkuchen is a German cake baked in thin layers on a rotating spit, creating rings that resemble tree rings when sliced."
        }
      },
      {
        question: {
                  "en": "What is the purpose of creaming butter and sugar?",
                  "es": "What is the purpose of creaming butter and sugar?",
                  "de": "What is the purpose of creaming butter and sugar?",
                  "nl": "What is the purpose of creaming butter and sugar?"
        },
        options: [
        {
                  "en": "Dissolve sugar",
                  "es": "Dissolve sugar",
                  "de": "Dissolve sugar",
                  "nl": "Dissolve sugar"
        },
        {
                  "en": "Add flavor",
                  "es": "Add flavor",
                  "de": "Add flavor",
                  "nl": "Add flavor"
        },
        {
                  "en": "Incorporate air for lightness",
                  "es": "Incorporate air for lightness",
                  "de": "Incorporate air for lightness",
                  "nl": "Incorporate air for lightness"
        },
        {
                  "en": "Melt butter",
                  "es": "Melt butter",
                  "de": "Melt butter",
                  "nl": "Melt butter"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Creaming butter and sugar together incorporates air into the mixture, creating a lighter cake texture.",
                  "es": "Creaming butter and sugar together incorporates air into the mixture, creating a lighter cake texture.",
                  "de": "Creaming butter and sugar together incorporates air into the mixture, creating a lighter cake texture.",
                  "nl": "Creaming butter and sugar together incorporates air into the mixture, creating a lighter cake texture."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  }
})();