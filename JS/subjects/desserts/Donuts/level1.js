// Quiz Level 1: Dessert - Donuts
(function() {
  const level1 = {
    name: {
      en: "Donuts - Level 1",
      es: "Donas - Nivel 1",
      de: "Donuts - Level 1",
      nl: "Donuts - Level 1"
    },
    questions: [
      {
        question: {
          en: "What is the main difference between yeast donuts and cake donuts?",
          es: "¿Cuál es la principal diferencia entre donas de levadura y donas de pastel?",
          de: "Was ist der Hauptunterschied zwischen Hefe-Donuts und Kuchen-Donuts?",
          nl: "Wat is het hoofdverschil tussen gist donuts en cake donuts?"
        },
        options: [
          { en: "Leavening agent used", es: "Agente leudante utilizado", de: "Verwendetes Triebmittel", nl: "Gebruikte rijsmiddel" },
          { en: "Shape only", es: "Solo la forma", de: "Nur die Form", nl: "Alleen de vorm" },
          { en: "Cooking temperature", es: "Temperatura de cocción", de: "Kochtemperatur", nl: "Kooktemperatuur" },
          { en: "Sugar content", es: "Contenido de azúcar", de: "Zuckergehalt", nl: "Suikergehalte" }
        ],
        correct: 0,
        explanation: {
          en: "Yeast donuts use yeast as a leavening agent and require rising time, while cake donuts use baking powder or baking soda for quick leavening.",
          es: "Las donas de levadura usan levadura como agente leudante y requieren tiempo de fermentación, mientras que las donas de pastel usan polvo para hornear o bicarbonato para leudado rápido.",
          de: "Hefe-Donuts verwenden Hefe als Triebmittel und benötigen Gehzeit, während Kuchen-Donuts Backpulver oder Natron für schnelles Treiben verwenden.",
          nl: "Gist donuts gebruiken gist als rijsmiddel en hebben rijstijd nodig, terwijl cake donuts bakpoeder of zuiveringszout gebruiken voor snelle rijzing."
        }
      },
      {
        question: {
          en: "At what temperature should oil be heated for frying donuts?",
          es: "¿A qué temperatura debe calentarse el aceite para freír donas?",
          de: "Auf welche Temperatur sollte Öl zum Frittieren von Donuts erhitzt werden?",
          nl: "Op welke temperatuur moet olie verhit worden voor het frituren van donuts?"
        },
        options: [
          { en: "300°F (150°C)", es: "300°F (150°C)", de: "300°F (150°C)", nl: "150°C" },
          { en: "375°F (190°C)", es: "375°F (190°C)", de: "375°F (190°C)", nl: "190°C" },
          { en: "425°F (220°C)", es: "425°F (220°C)", de: "425°F (220°C)", nl: "220°C" },
          { en: "500°F (260°C)", es: "500°F (260°C)", de: "500°F (260°C)", nl: "260°C" }
        ],
        correct: 1,
        explanation: {
          en: "The ideal frying temperature for donuts is 375°F (190°C). This ensures proper cooking inside while achieving a golden exterior without burning.",
          es: "La temperatura ideal para freír donas es 375°F (190°C). Esto asegura una cocción adecuada por dentro mientras se logra un exterior dorado sin quemarse.",
          de: "Die ideale Frittiertemperatur für Donuts ist 375°F (190°C). Dies gewährleistet richtiges Garen innen bei goldener Außenseite ohne Verbrennen.",
          nl: "De ideale frituurtemperatuur voor donuts is 190°C. Dit zorgt voor goede garing vanbinnen terwijl een gouden buitenkant wordt bereikt zonder verbranden."
        }
      },
      {
        question: {
          en: "What is a 'donut hole' also called?",
          es: "¿Cómo se llama también un 'agujero de dona'?",
          de: "Wie wird ein 'Donut-Loch' auch genannt?",
          nl: "Hoe wordt een 'donut gaatje' ook wel genoemd?"
        },
        options: [
          { en: "Donut bite", es: "Mordida de dona", de: "Donut-Bissen", nl: "Donut hapje" },
          { en: "Donut ball", es: "Bola de dona", de: "Donut-Ball", nl: "Donut bal" },
          { en: "Munchkin", es: "Munchkin", de: "Munchkin", nl: "Munchkin" },
          { en: "Mini donut", es: "Mini dona", de: "Mini-Donut", nl: "Mini donut" }
        ],
        correct: 2,
        explanation: {
          en: "Donut holes are commonly called 'Munchkins,' a term popularized by Dunkin' Donuts. They're the small rounds cut from the center of ring donuts.",
          es: "Los agujeros de dona se llaman comúnmente 'Munchkins,' un término popularizado por Dunkin' Donuts. Son los pequeños círculos cortados del centro de las donas de anillo.",
          de: "Donut-Löcher werden allgemein 'Munchkins' genannt, ein Begriff, der von Dunkin' Donuts populär gemacht wurde. Es sind die kleinen Runden, die aus der Mitte von Ring-Donuts geschnitten werden.",
          nl: "Donut gaatjes worden vaak 'Munchkins' genoemd, een term die populair werd gemaakt door Dunkin' Donuts. Het zijn de kleine rondjes die uit het midden van ring donuts gesneden worden."
        }
      },
      {
        question: {
          en: "What makes a donut 'glazed'?",
          es: "¿Qué hace que una dona esté 'glaseada'?",
          de: "Was macht einen Donut 'glasiert'?",
          nl: "Wat maakt een donut 'geglazuurd'?"
        },
        options: [
          { en: "Sugar coating while hot", es: "Cobertura de azúcar mientras está caliente", de: "Zuckerbeschichtung im heißen Zustand", nl: "Suiker coating terwijl heet" },
          { en: "Chocolate dipping", es: "Sumergir en chocolate", de: "Schokoladen-Tauchung", nl: "Chocolade dompeling" },
          { en: "Powdered sugar dusting", es: "Espolvorear azúcar en polvo", de: "Puderzucker-Bestäubung", nl: "Poedersuiker bestuiving" },
          { en: "Icing or sugar syrup coating", es: "Cobertura de glaseado o jarabe de azúcar", de: "Glasur- oder Zuckersirp-Beschichtung", nl: "Glazuur of suikersiroop coating" }
        ],
        correct: 3,
        explanation: {
          en: "A glazed donut is coated with a sweet icing or sugar syrup glaze that creates a shiny, sweet outer layer, typically applied while the donut is still warm.",
          es: "Una dona glaseada está cubierta con un glaseado dulce o jarabe de azúcar que crea una capa exterior brillante y dulce, típicamente aplicado mientras la dona aún está tibia.",
          de: "Ein glasierter Donut ist mit einer süßen Glasur oder Zuckersirp überzogen, die eine glänzende, süße Außenschicht bildet, typischerweise aufgetragen, während der Donut noch warm ist.",
          nl: "Een geglazuurde donut is bedekt met een zoet glazuur of suikersiroop dat een glanzende, zoete buitenlaag creëert, meestal aangebracht terwijl de donut nog warm is."
        }
      },
      {
        question: {
          en: "Which country is often credited with creating the modern donut?",
          es: "¿Qué país se considera a menudo como creador de la dona moderna?",
          de: "Welches Land wird oft mit der Erfindung des modernen Donuts in Verbindung gebracht?",
          nl: "Welk land wordt vaak gecrediteerd met het creëren van de moderne donut?"
        },
        options: [
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "Germany", es: "Alemania", de: "Deutschland", nl: "Duitsland" },
          { en: "Netherlands", es: "Países Bajos", de: "Niederlande", nl: "Nederland" },
          { en: "United States", es: "Estados Unidos", de: "Vereinigte Staaten", nl: "Verenigde Staten" }
        ],
        correct: 2,
        explanation: {
          en: "The Netherlands is credited with creating the precursor to modern donuts called 'olykoeks' (oily cakes), which Dutch settlers brought to America.",
          es: "A los Países Bajos se les atribuye la creación del precursor de las donas modernas llamado 'olykoeks' (pasteles aceitosos), que los colonos holandeses trajeron a América.",
          de: "Den Niederlanden wird die Erfindung des Vorläufers moderner Donuts namens 'olykoeks' (ölige Kuchen) zugeschrieben, die niederländische Siedler nach Amerika brachten.",
          nl: "Nederland wordt gecrediteerd met het creëren van de voorloper van moderne donuts genaamd 'olykoeks' (oliekoeken), die Nederlandse kolonisten naar Amerika brachten."
        }
      },
      {
        question: {
          en: "What causes donuts to become greasy when frying?",
          es: "¿Qué causa que las donas se vuelvan grasosas al freír?",
          de: "Was verursacht, dass Donuts beim Frittieren fettig werden?",
          nl: "Wat zorgt ervoor dat donuts vettig worden bij het frituren?"
        },
        options: [
          { en: "Too much sugar in the dough", es: "Demasiada azúcar en la masa", de: "Zu viel Zucker im Teig", nl: "Te veel suiker in het deeg" },
          { en: "Oil temperature too low", es: "Temperatura del aceite muy baja", de: "Öltemperatur zu niedrig", nl: "Olie temperatuur te laag" },
          { en: "Frying too long", es: "Freír demasiado tiempo", de: "Zu lange frittieren", nl: "Te lang frituren" },
          { en: "Wrong type of flour", es: "Tipo incorrecto de harina", de: "Falsche Mehlsorte", nl: "Verkeerde type meel" }
        ],
        correct: 1,
        explanation: {
          en: "When oil temperature is too low, donuts absorb more oil because they cook slowly and have more time to soak up the fat, resulting in greasy donuts.",
          es: "Cuando la temperatura del aceite es muy baja, las donas absorben más aceite porque se cocinan lentamente y tienen más tiempo para absorber la grasa, resultando en donas grasosas.",
          de: "Wenn die Öltemperatur zu niedrig ist, nehmen Donuts mehr Öl auf, weil sie langsam garen und mehr Zeit haben, das Fett aufzusaugen, was zu fettigen Donuts führt.",
          nl: "Wanneer de olietemperatuur te laag is, absorberen donuts meer olie omdat ze langzaam koken en meer tijd hebben om het vet op te nemen, wat resulteert in vette donuts."
        }
      },
      {
        question: {
          en: "What is a 'cruller'?",
          es: "¿Qué es un 'cruller'?",
          de: "Was ist ein 'Cruller'?",
          nl: "Wat is een 'cruller'?"
        },
        options: [
          { en: "A filled donut", es: "Una dona rellena", de: "Ein gefüllter Donut", nl: "Een gevulde donut" },
          { en: "A twisted, braided donut", es: "Una dona trenzada y retorcida", de: "Ein gedrehter, geflochtener Donut", nl: "Een gedraaide, gevlochten donut" },
          { en: "A square donut", es: "Una dona cuadrada", de: "Ein quadratischer Donut", nl: "Een vierkante donut" },
          { en: "A mini donut", es: "Una mini dona", de: "Ein Mini-Donut", nl: "Een mini donut" }
        ],
        correct: 1,
        explanation: {
          en: "A cruller is a twisted or braided donut, often made from choux pastry, with a distinctive rope-like or twisted appearance.",
          es: "Un cruller es una dona trenzada o retorcida, a menudo hecha de masa choux, con una apariencia distintiva similar a una cuerda o retorcida.",
          de: "Ein Cruller ist ein gedrehter oder geflochtener Donut, oft aus Brandteig gemacht, mit einem charakteristischen seilartigen oder gedrehten Aussehen.",
          nl: "Een cruller is een gedraaide of gevlochten donut, vaak gemaakt van choux deeg, met een kenmerkend touwachtig of gedraaid uiterlijk."
        }
      },
      {
        question: {
          en: "How long should yeast donut dough typically rise?",
          es: "¿Cuánto tiempo debe fermentar típicamente la masa de donas de levadura?",
          de: "Wie lange sollte Hefe-Donut-Teig typischerweise gehen?",
          nl: "Hoe lang moet gist donut deeg typisch rijzen?"
        },
        options: [
          { en: "15-30 min", es: "15-30 minutos", de: "15-30 Minuten", nl: "15-30 minuten" },
          { en: "1-2 hours", es: "1-2 horas", de: "1-2 Stunden", nl: "1-2 uur" },
          { en: "4-6 hours", es: "4-6 horas", de: "4-6 Stunden", nl: "4-6 uur" },
          { en: "Overnight", es: "Durante la noche", de: "Über Nacht", nl: "Gedurende de nacht" }
        ],
        correct: 1,
        explanation: {
          en: "Yeast donut dough typically needs 1-2 hours to rise properly, allowing the yeast to create the light, airy texture characteristic of yeast donuts.",
          es: "La masa de donas de levadura típicamente necesita 1-2 horas para fermentar correctamente, permitiendo que la levadura cree la textura ligera y aireada característica de las donas de levadura.",
          de: "Hefe-Donut-Teig benötigt typischerweise 1-2 Stunden zum richtigen Gehen, damit die Hefe die leichte, luftige Textur charakteristisch für Hefe-Donuts erzeugen kann.",
          nl: "Gist donut deeg heeft typisch 1-2 uur nodig om goed te rijzen, waardoor de gist de lichte, luchtige textuur kan creëren die kenmerkend is voor gist donuts."
        }
      },
      {
        question: {
          en: "What is the traditional filling for a Boston Cream donut?",
          es: "¿Cuál es el relleno tradicional para una dona Boston Cream?",
          de: "Was ist die traditionelle Füllung für einen Boston Cream Donut?",
          nl: "Wat is de traditionele vulling voor een Boston Cream donut?"
        },
        options: [
          { en: "Whipped cream", es: "Nata montada", de: "Schlagsahne", nl: "Slagroom" },
          { en: "Custard or pastry cream", es: "Natillas o crema pastelera", de: "Pudding oder Konditorcreme", nl: "Custard of banketbakkersroom" },
          { en: "Jam", es: "Mermelada", de: "Marmelade", nl: "Jam" },
          { en: "Chocolate ganache", es: "Ganache de chocolate", de: "Schokoladenganache", nl: "Chocolade ganache" }
        ],
        correct: 1,
        explanation: {
          en: "Boston Cream donuts are traditionally filled with vanilla custard or pastry cream and topped with chocolate glaze, resembling Boston Cream Pie.",
          es: "Las donas Boston Cream se rellenan tradicionalmente con natillas de vainilla o crema pastelera y se cubren con glaseado de chocolate, pareciéndose al Boston Cream Pie.",
          de: "Boston Cream Donuts werden traditionell mit Vanillepudding oder Konditorcreme gefüllt und mit Schokoladenglasur überzogen, ähnlich dem Boston Cream Pie.",
          nl: "Boston Cream donuts worden traditioneel gevuld met vanille custard of banketbakkersroom en bedekt met chocolade glazuur, vergelijkbaar met Boston Cream Pie."
        }
      },
      {
        question: {
          en: "What makes a 'beignet' different from a regular donut?",
          es: "¿Qué hace que un 'beignet' sea diferente de una dona regular?",
          de: "Was macht einen 'Beignet' anders als einen normalen Donut?",
          nl: "Wat maakt een 'beignet' anders dan een gewone donut?"
        },
        options: [
          { en: "It's square-shaped", es: "Tiene forma cuadrada", de: "Es ist quadratisch", nl: "Het is vierkant" },
          { en: "It uses different oil", es: "Usa aceite diferente", de: "Es verwendet anderes Öl", nl: "Het gebruikt andere olie" },
          { en: "It's served cold", es: "Se sirve frío", de: "Es wird kalt serviert", nl: "Het wordt koud geserveerd" },
          { en: "It's made with chocolate", es: "Está hecho con chocolate", de: "Es wird mit Schokolade gemacht", nl: "Het is gemaakt met chocolade" }
        ],
        correct: 0,
        explanation: {
          en: "Beignets are square-shaped fried pastries, traditionally dusted with powdered sugar, originating from French cuisine and popular in New Orleans.",
          es: "Los beignets son pasteles fritos de forma cuadrada, tradicionalmente espolvoreados con azúcar en polvo, originarios de la cocina francesa y populares en Nueva Orleans.",
          de: "Beignets sind quadratische frittierte Gebäckstücke, traditionell mit Puderzucker bestäubt, aus der französischen Küche stammend und in New Orleans beliebt.",
          nl: "Beignets zijn vierkante gefrituurde gebakjes, traditioneel bestoven met poedersuiker, afkomstig uit de Franse keuken en populair in New Orleans."
        }
      },
      {
        question: {
          en: "What tool is traditionally used to cut donut shapes?",
          es: "¿Qué herramienta se usa tradicionalmente para cortar formas de donas?",
          de: "Welches Werkzeug wird traditionell zum Schneiden von Donut-Formen verwendet?",
          nl: "Welk gereedschap wordt traditioneel gebruikt om donut vormen te snijden?"
        },
        options: [
          { en: "Cookie cutter", es: "Cortador de galletas", de: "Keksausstecher", nl: "Koekjes uitsteker" },
          { en: "Donut cutter", es: "Cortador de donas", de: "Donut-Schneider", nl: "Donut snijder" },
          { en: "Knife", es: "Cuchillo", de: "Messer", nl: "Mes" },
          { en: "Glass", es: "Vaso", de: "Glas", nl: "Glas" }
        ],
        correct: 1,
        explanation: {
          en: "A donut cutter is a specialized tool with two circular cutting edges - a larger outer circle and smaller inner circle to create the characteristic ring shape.",
          es: "Un cortador de donas es una herramienta especializada con dos bordes de corte circulares - un círculo exterior más grande y un círculo interior más pequeño para crear la forma de anillo característica.",
          de: "Ein Donut-Schneider ist ein spezielles Werkzeug mit zwei kreisförmigen Schneidkanten - einem größeren äußeren Kreis und kleineren inneren Kreis zur Erzeugung der charakteristischen Ringform.",
          nl: "Een donut snijder is een gespecialiseerd gereedschap met twee cirkelvormige snijranden - een grotere buitencirkel en kleinere binnencirkel om de karakteristieke ringvorm te creëren."
        }
      },
      {
        question: {
          en: "What happens if you overmix donut dough?",
          es: "¿Qué pasa si mezclas demasiado la masa de donas?",
          de: "Was passiert, wenn man Donut-Teig zu stark mischt?",
          nl: "Wat gebeurt er als je donut deeg te veel mengt?"
        },
        options: [
          { en: "It becomes too sweet", es: "Se vuelve demasiado dulce", de: "Es wird zu süß", nl: "Het wordt te zoet" },
          { en: "It becomes tough and dense", es: "Se vuelve duro y denso", de: "Es wird zäh und dicht", nl: "Het wordt taai en dicht" },
          { en: "It won't hold its shape", es: "No mantendrá su forma", de: "Es behält seine Form nicht", nl: "Het houdt zijn vorm niet" },
          { en: "It changes color", es: "Cambia de color", de: "Es ändert die Farbe", nl: "Het verandert van kleur" }
        ],
        correct: 1,
        explanation: {
          en: "Overmixing develops too much gluten in the dough, resulting in tough, dense donuts instead of light and fluffy ones. Gentle mixing is key.",
          es: "Mezclar demasiado desarrolla mucho gluten en la masa, resultando en donas duras y densas en lugar de ligeras y esponjosas. La mezcla suave es clave.",
          de: "Übermischen entwickelt zu viel Gluten im Teig, was zu zähen, dichten Donuts anstatt leichten und fluffigen führt. Sanftes Mischen ist der Schlüssel.",
          nl: "Te veel mengen ontwikkelt teveel gluten in het deeg, wat resulteert in taaie, dichte donuts in plaats van lichte en luchtige. Zacht mengen is de sleutel."
        }
      },
      {
        question: {
          en: "Which type of donut is typically baked rather than fried?",
          es: "¿Qué tipo de dona se hornea típicamente en lugar de freírse?",
          de: "Welche Art von Donut wird typischerweise gebacken anstatt frittiert?",
          nl: "Welk type donut wordt typisch gebakken in plaats van gefrituurd?"
        },
        options: [
          { en: "Glazed donuts", es: "Donas glaseadas", de: "Glasierte Donuts", nl: "Geglazuurde donuts" },
          { en: "Cake donuts", es: "Donas de pastel", de: "Kuchen-Donuts", nl: "Cake donuts" },
          { en: "Old-fashioned donuts", es: "Donas tradicionales", de: "Altmodische Donuts", nl: "Ouderwetse donuts" },
          { en: "Yeast donuts", es: "Donas de levadura", de: "Hefe-Donuts", nl: "Gist donuts" }
        ],
        correct: 1,
        explanation: {
          en: "Some cake donuts can be baked in special donut pans rather than fried, creating a healthier alternative with similar taste and texture.",
          es: "Algunas donas de pastel pueden hornearse en moldes especiales para donas en lugar de freírse, creando una alternativa más saludable con sabor y textura similares.",
          de: "Manche Kuchen-Donuts können in speziellen Donut-Formen gebacken anstatt frittiert werden, was eine gesündere Alternative mit ähnlichem Geschmack und Textur schafft.",
          nl: "Sommige cake donuts kunnen gebakken worden in speciale donut pannen in plaats van gefrituurd, wat een gezonder alternatief creëert met vergelijkbare smaak en textuur."
        }
      },
      {
        question: {
          en: "What is the purpose of the hole in the center of a donut?",
          es: "¿Cuál es el propósito del agujero en el centro de una dona?",
          de: "Was ist der Zweck des Lochs in der Mitte eines Donuts?",
          nl: "Wat is het doel van het gat in het midden van een donut?"
        },
        options: [
          { en: "Decoration only", es: "Solo decoración", de: "Nur Dekoration", nl: "Alleen decoratie" },
          { en: "Even cooking throughout", es: "Cocción uniforme", de: "Gleichmäßiges Garen", nl: "Gelijkmatige garing" },
          { en: "Easier to hold", es: "Más fácil de sostener", de: "Einfacher zu halten", nl: "Makkelijker vast te houden" },
          { en: "Traditional design", es: "Diseño tradicional", de: "Traditionelles Design", nl: "Traditioneel ontwerp" }
        ],
        correct: 1,
        explanation: {
          en: "The hole ensures even cooking by allowing hot oil to reach all parts of the donut equally, preventing raw centers while avoiding overcooking the outside.",
          es: "El agujero asegura una cocción uniforme permitiendo que el aceite caliente llegue a todas las partes de la dona por igual, previniendo centros crudos mientras evita sobrecocinar el exterior.",
          de: "Das Loch gewährleistet gleichmäßiges Garen, indem heißes Öl alle Teile des Donuts gleich erreichen kann, wodurch rohe Zentren verhindert und Überkochen außen vermieden wird.",
          nl: "Het gat zorgt voor gelijkmatige garing door hete olie alle delen van de donut gelijk te laten bereiken, waardoor rauwe centra worden voorkomen terwijl overkoken van de buitenkant wordt vermeden."
        }
      },
      {
        question: {
          en: "What topping is traditionally used on 'old-fashioned' donuts?",
          es: "¿Qué cobertura se usa tradicionalmente en las donas 'tradicionales'?",
          de: "Welcher Belag wird traditionell auf 'altmodischen' Donuts verwendet?",
          nl: "Welke topping wordt traditioneel gebruikt op 'ouderwetse' donuts?"
        },
        options: [
          { en: "Chocolate glaze", es: "Glaseado de chocolate", de: "Schokoladenglasur", nl: "Chocolade glazuur" },
          { en: "Simple sugar glaze", es: "Glaseado simple de azúcar", de: "Einfache Zuckerglasur", nl: "Eenvoudig suiker glazuur" },
          { en: "Powdered sugar", es: "Azúcar en polvo", de: "Puderzucker", nl: "Poedersuiker" },
          { en: "Cinnamon sugar", es: "Azúcar con canela", de: "Zimt-Zucker", nl: "Kaneel suiker" }
        ],
        correct: 1,
        explanation: {
          en: "Old-fashioned donuts are traditionally topped with a simple sugar glaze that complements their slightly tangy, cake-like texture and rustic appearance.",
          es: "Las donas tradicionales se cubren tradicionalmente con un glaseado simple de azúcar que complementa su textura ligeramente ácida, similar a un pastel y apariencia rústica.",
          de: "Altmodische Donuts werden traditionell mit einer einfachen Zuckerglasur überzogen, die ihre leicht säuerliche, kuchenähnliche Textur und rustikale Erscheinung ergänzt.",
          nl: "Ouderwetse donuts worden traditioneel bedekt met een eenvoudig suiker glazuur dat hun licht zurige, cakeachtige textuur en rustieke uiterlijk complementeert."
        }
      },
      {
        question: {
          en: "What causes the 'cracked' appearance in old-fashioned donuts?",
          es: "¿Qué causa la apariencia 'agrietada' en las donas tradicionales?",
          de: "Was verursacht das 'rissige' Aussehen bei altmodischen Donuts?",
          nl: "Wat veroorzaakt het 'gescheurde' uiterlijk bij ouderwetse donuts?"
        },
        options: [
          { en: "High oil temperature", es: "Alta temperatura del aceite", de: "Hohe Öltemperatur", nl: "Hoge olietemperatuur" },
          { en: "Special cutting technique", es: "Técnica de corte especial", de: "Spezielle Schneidetechnik", nl: "Speciale snijdtechniek" },
          { en: "Baking soda reaction", es: "Reacción del bicarbonato", de: "Natron-Reaktion", nl: "Zuiveringszout reactie" },
          { en: "Overmixing the batter", es: "Mezclar demasiado la masa", de: "Übermischen des Teigs", nl: "Te veel mengen van het beslag" }
        ],
        correct: 2,
        explanation: {
          en: "The cracked, rustic appearance comes from the baking soda reacting during frying, causing the surface to split and create the characteristic irregular texture.",
          es: "La apariencia agrietada y rústica proviene de la reacción del bicarbonato durante la fritura, causando que la superficie se divida y cree la textura irregular característica.",
          de: "Das rissige, rustikale Aussehen entsteht durch die Natron-Reaktion beim Frittieren, wodurch die Oberfläche aufbricht und die charakteristische unregelmäßige Textur entsteht.",
          nl: "Het gescheurde, rustieke uiterlijk komt van de zuiveringszout reactie tijdens het frituren, waardoor het oppervlak splijt en de karakteristieke onregelmatige textuur ontstaat."
        }
      },
      {
        question: {
          en: "How should donuts be stored to maintain freshness?",
          es: "¿Cómo deben almacenarse las donas para mantener la frescura?",
          de: "Wie sollten Donuts gelagert werden, um Frische zu erhalten?",
          nl: "Hoe moeten donuts bewaard worden om versheid te behouden?"
        },
        options: [
          { en: "In the refrigerator", es: "En el refrigerador", de: "Im Kühlschrank", nl: "In de koelkast" },
          { en: "In an airtight container at room temperature", es: "En un recipiente hermético a temperatura ambiente", de: "In einem luftdichten Behälter bei Raumtemperatur", nl: "In een luchtdichte container op kamertemperatuur" },
          { en: "In the freezer", es: "En el congelador", de: "Im Gefrierschrank", nl: "In de vriezer" },
          { en: "Uncovered on the counter", es: "Descubiertas en el mostrador", de: "Unbedeckt auf der Theke", nl: "Onbedekt op het aanrecht" }
        ],
        correct: 1,
        explanation: {
          en: "Donuts stay freshest when stored in an airtight container at room temperature for 1-2 days. Refrigeration can make them stale faster.",
          es: "Las donas se mantienen más frescas cuando se almacenan en un recipiente hermético a temperatura ambiente por 1-2 días. La refrigeración puede hacer que se pongan rancias más rápido.",
          de: "Donuts bleiben am frischesten, wenn sie in einem luftdichten Behälter bei Raumtemperatur für 1-2 Tage gelagert werden. Kühlung kann sie schneller altbacken machen.",
          nl: "Donuts blijven het meest vers wanneer bewaard in een luchtdichte container op kamertemperatuur voor 1-2 dagen. Koeling kan ze sneller droog maken."
        }
      },
      {
        question: {
          en: "What makes a 'jelly donut' different from other filled donuts?",
          es: "¿Qué hace que una 'dona de mermelada' sea diferente de otras donas rellenas?",
          de: "Was macht einen 'Marmeladen-Donut' anders als andere gefüllte Donuts?",
          nl: "Wat maakt een 'jam donut' anders dan andere gevulde donuts?"
        },
        options: [
          { en: "It's not fried", es: "No se fríe", de: "Es wird nicht frittiert", nl: "Het wordt niet gefrituurd" },
          { en: "It contains fruit preserves", es: "Contiene conservas de fruta", de: "Es enthält Fruchtkonserven", nl: "Het bevat vruchtenconserven" },
          { en: "It's smaller in size", es: "Es más pequeño en tamaño", de: "Es ist kleiner", nl: "Het is kleiner van formaat" },
          { en: "It has no hole", es: "No tiene agujero", de: "Es hat kein Loch", nl: "Het heeft geen gat" }
        ],
        correct: 1,
        explanation: {
          en: "Jelly donuts are filled with fruit preserves, jam, or jelly, distinguishing them from donuts filled with cream, custard, or other fillings.",
          es: "Las donas de mermelada se rellenan con conservas de fruta, mermelada o jalea, distinguiéndolas de las donas rellenas con crema, natillas u otros rellenos.",
          de: "Marmeladen-Donuts sind mit Fruchtkonserven, Marmelade oder Gelee gefüllt, was sie von Donuts mit Sahne-, Pudding- oder anderen Füllungen unterscheidet.",
          nl: "Jam donuts zijn gevuld met vruchtenconserven, jam of gelei, wat hen onderscheidt van donuts gevuld met room, custard of andere vullingen."
        }
      },
      {
        question: {
          en: "What is a 'Long John' donut?",
          es: "¿Qué es una dona 'Long John'?",
          de: "Was ist ein 'Long John' Donut?",
          nl: "Wat is een 'Long John' donut?"
        },
        options: [
          { en: "A very large round donut", es: "Una dona redonda muy grande", de: "Ein sehr großer runder Donut", nl: "Een zeer grote ronde donut" },
          { en: "An elongated, rectangular donut", es: "Una dona alargada y rectangular", de: "Ein länglicher, rechteckiger Donut", nl: "Een langwerpige, rechthoekige donut" },
          { en: "A twisted donut", es: "Una dona retorcida", de: "Ein gedrehter Donut", nl: "Een gedraaide donut" },
          { en: "A mini donut", es: "Una mini dona", de: "Ein Mini-Donut", nl: "Een mini donut" }
        ],
        correct: 1,
        explanation: {
          en: "A Long John is an elongated, rectangular yeast donut, often filled with cream or custard and topped with chocolate or maple glaze.",
          es: "Un Long John es una dona de levadura alargada y rectangular, a menudo rellena con crema o natillas y cubierta con glaseado de chocolate o arce.",
          de: "Ein Long John ist ein länglicher, rechteckiger Hefe-Donut, oft mit Sahne oder Pudding gefüllt und mit Schokoladen- oder Ahornglasur überzogen.",
          nl: "Een Long John is een langwerpige, rechthoekige gist donut, vaak gevuld met room of custard en bedekt met chocolade of ahorn glazuur."
        }
      },
      {
        question: {
          en: "What makes donuts sweet?",
          es: "¿Qué hace que las donas sean dulces?",
          de: "Was macht Donuts süß?",
          nl: "Wat maakt donuts zoet?"
        },
        options: [
          { en: "Sugar in the dough and glazes", es: "Azúcar en la masa y glaseados", de: "Zucker im Teig und Glasuren", nl: "Suiker in het deeg en glazuren" },
          { en: "Salt only", es: "Solo sal", de: "Nur Salz", nl: "Alleen zout" },
          { en: "Flour", es: "Harina", de: "Mehl", nl: "Meel" },
          { en: "Oil for frying", es: "Aceite para freír", de: "Öl zum Frittieren", nl: "Olie voor frituren" }
        ],
        correct: 0,
        explanation: {
          en: "Donuts get their sweetness from sugar added to the dough and from sweet toppings like glazes, powdered sugar, or icing.",
          es: "Las donas obtienen su dulzura del azúcar añadido a la masa y de coberturas dulces como glaseados, azúcar en polvo o betún.",
          de: "Donuts erhalten ihre Süße vom Zucker im Teig und von süßen Belägen wie Glasuren, Puderzucker oder Zuckerguss.",
          nl: "Donuts krijgen hun zoetheid van suiker toegevoegd aan het deeg en van zoete toppings zoals glazuren, poedersuiker of glazuur."
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
