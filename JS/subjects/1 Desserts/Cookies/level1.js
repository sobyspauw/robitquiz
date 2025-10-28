// Quiz Level 1: Dessert - Koekjes
(function() {
  const level1 = {
    name: {
      en: "Cookies - Level 1",
      es: "Galletas - Nivel 1",
      de: "Kekse - Level 1",
      nl: "Koekjes - Level 1"
    },
    questions: [
      {
        question: {
          en: "What is the main difference between cookies and biscuits?",
          es: "¿Cuál es la principal diferencia entre cookies y biscuits?",
          de: "Was ist der Hauptunterschied zwischen Cookies und Keksen?",
          nl: "Wat is het hoofdverschil tussen cookies en koekjes?"
        },
        options: [
          { en: "Regional terminology", es: "Terminología regional", de: "Regionale Terminologie", nl: "Regionale terminologie" },
          { en: "Size difference", es: "Diferencia de tamaño", de: "Größenunterschied", nl: "Grootteverschil" },
          { en: "Sugar content", es: "Contenido de azúcar", de: "Zuckergehalt", nl: "Suikergehalte" },
          { en: "Baking temperature", es: "Temperatura de horneado", de: "Backtemperatur", nl: "Baktemperatuur" }
        ],
        correct: 0,
        explanation: {
          en: "The terms 'cookies' and 'biscuits' refer to the same baked goods but vary by region - Americans say 'cookies' while British say 'biscuits'.",
          es: "Los términos 'cookies' y 'biscuits' se refieren a los mismos productos horneados pero varían según la región - los americanos dicen 'cookies' mientras los británicos dicen 'biscuits'.",
          de: "Die Begriffe 'Cookies' und 'Kekse' beziehen sich auf dieselben Backwaren, variieren aber je nach Region - Amerikaner sagen 'Cookies', Briten sagen 'Biscuits'.",
          nl: "De termen 'cookies' en 'koekjes' verwijzen naar dezelfde bakproducten maar variëren per regio - Amerikanen zeggen 'cookies' terwijl Britten 'biscuits' zeggen."
        }
      },
      {
        question: {
          en: "What ingredient makes cookies chewy rather than crispy?",
          es: "¿Qué ingrediente hace que las galletas sean masticables en lugar de crujientes?",
          de: "Welche Zutat macht Kekse zäh anstatt knusprig?",
          nl: "Welk ingrediënt maakt koekjes chewy in plaats van knapperig?"
        },
        options: [
          { en: "Extra flour", es: "Harina extra", de: "Extra Mehl", nl: "Extra meel" },
          { en: "Brown sugar", es: "Azúcar moreno", de: "Brauner Zucker", nl: "Bruine suiker" },
          { en: "Baking soda", es: "Bicarbonato de sodio", de: "Natron", nl: "Zuiveringszout" },
          { en: "Vanilla extract", es: "Extracto de vainilla", de: "Vanilleextrakt", nl: "Vanille-extract" }
        ],
        correct: 1,
        explanation: {
          en: "Brown sugar contains molasses which retains moisture, creating a chewy texture. White sugar creates crispier cookies.",
          es: "El azúcar moreno contiene melaza que retiene la humedad, creando una textura masticable. El azúcar blanco crea galletas más crujientes.",
          de: "Brauner Zucker enthält Melasse, die Feuchtigkeit speichert und eine zähe Textur erzeugt. Weißer Zucker macht Kekse knuspriger.",
          nl: "Bruine suiker bevat melasse die vocht vasthoudt, waardoor een chewy textuur ontstaat. Witte suiker maakt koekjes knapperiger."
        }
      },
      {
        question: {
          en: "Which cookie is traditionally left for Santa Claus?",
          es: "¿Qué galleta se deja tradicionalmente para Santa Claus?",
          de: "Welcher Keks wird traditionell für den Weihnachtsmann gelassen?",
          nl: "Welk koekje wordt traditioneel achtergelaten voor de Kerstman?"
        },
        options: [
          { en: "Chocolate chip cookie", es: "Galleta con chispas de chocolate", de: "Schokoladenkeks", nl: "Chocoladechip koekje" },
          { en: "Oatmeal cookie", es: "Galleta de avena", de: "Haferkeks", nl: "Havermout koekje" },
          { en: "Sugar cookie", es: "Galleta de azúcar", de: "Zuckerkeks", nl: "Suiker koekje" },
          { en: "Gingerbread cookie", es: "Galleta de jengibre", de: "Lebkuchen", nl: "Peperkoek" }
        ],
        correct: 0,
        explanation: {
          en: "Chocolate chip cookies are the traditional choice for Santa in American culture, often served with a glass of milk.",
          es: "Las galletas con chispas de chocolate son la elección tradicional para Santa en la cultura americana, a menudo servidas con un vaso de leche.",
          de: "Schokoladenkekse sind die traditionelle Wahl für den Weihnachtsmann in der amerikanischen Kultur, oft mit einem Glas Milch serviert.",
          nl: "Chocoladechip koekjes zijn de traditionele keuze voor de Kerstman in de Amerikaanse cultuur, vaak geserveerd met een glas melk."
        }
      },
      {
        question: {
          en: "What does 'creaming' butter and sugar mean in cookie making?",
          es: "¿Qué significa 'creaming' mantequilla y azúcar en la elaboración de galletas?",
          de: "Was bedeutet 'Aufschlagen' von Butter und Zucker beim Keksbacken?",
          nl: "Wat betekent 'opromen' van boter en suiker bij het maken van koekjes?"
        },
        options: [
          { en: "Melting them together", es: "Derretirlos juntos", de: "Zusammenschmelzen", nl: "Samen smelten" },
          { en: "Beating until light and fluffy", es: "Batir hasta que esté ligero y esponjoso", de: "Schlagen bis hell und luftig", nl: "Kloppen tot licht en luchtig" },
          { en: "Mixing slowly", es: "Mezclar lentamente", de: "Langsam mischen", nl: "Langzaam mengen" },
          { en: "Adding cream", es: "Añadir nata", de: "Sahne hinzufügen", nl: "Room toevoegen" }
        ],
        correct: 1,
        explanation: {
          en: "Creaming means beating butter and sugar together until the mixture becomes light, fluffy, and pale, incorporating air for tender cookies.",
          es: "Creaming significa batir mantequilla y azúcar juntos hasta que la mezcla se vuelva ligera, esponjosa y pálida, incorporando aire para galletas tiernas.",
          de: "Aufschlagen bedeutet Butter und Zucker zusammen zu schlagen, bis die Mischung hell, luftig und blass wird, wobei Luft für zarte Kekse eingearbeitet wird.",
          nl: "Opromen betekent boter en suiker samen kloppen tot het mengsel licht, luchtig en bleek wordt, waarbij lucht wordt ingewerkt voor malse koekjes."
        }
      },
      {
        question: {
          en: "Which type of flour is best for making tender cookies?",
          es: "¿Qué tipo de harina es mejor para hacer galletas tiernas?",
          de: "Welche Art von Mehl ist am besten für zarte Kekse?",
          nl: "Welk type meel is het beste voor het maken van malse koekjes?"
        },
        options: [
          { en: "Bread flour", es: "Harina de pan", de: "Brotmehl", nl: "Broodmeel" },
          { en: "All-purpose flour", es: "Harina común", de: "Allzweckmehl", nl: "Gewone bloem" },
          { en: "Cake flour", es: "Harina para pasteles", de: "Kuchenmehl", nl: "Cakemeel" },
          { en: "Whole wheat flour", es: "Harina integral", de: "Vollkornmehl", nl: "Volkoren meel" }
        ],
        correct: 2,
        explanation: {
          en: "Cake flour has lower protein content, resulting in less gluten development and more tender, delicate cookies.",
          es: "La harina para pasteles tiene menor contenido de proteína, resultando en menos desarrollo de gluten y galletas más tiernas y delicadas.",
          de: "Kuchenmehl hat einen niedrigeren Proteingehalt, was zu weniger Glutenentwicklung und zarteren, delikateren Keksen führt.",
          nl: "Cakemeel heeft een lager eiwitgehalte, wat resulteert in minder glutenontwikkeling en malse, delicate koekjes."
        }
      },
      {
        question: {
          en: "What is the purpose of chilling cookie dough before baking?",
          es: "¿Cuál es el propósito de enfriar la masa de galletas antes de hornear?",
          de: "Was ist der Zweck des Kühlens von Keksteig vor dem Backen?",
          nl: "Wat is het doel van het koelen van koekjesdeeg voor het bakken?"
        },
        options: [
          { en: "To save time", es: "Para ahorrar tiempo", de: "Um Zeit zu sparen", nl: "Om tijd te besparen" },
          { en: "To prevent spreading", es: "Para prevenir que se extiendan", de: "Um das Ausbreiten zu verhindern", nl: "Om uitlopen te voorkomen" },
          { en: "To add flavor", es: "Para añadir sabor", de: "Um Geschmack hinzuzufügen", nl: "Om smaak toe te voegen" },
          { en: "To change color", es: "Para cambiar el color", de: "Um die Farbe zu ändern", nl: "Om kleur te veranderen" }
        ],
        correct: 1,
        explanation: {
          en: "Chilling cookie dough firms up the fat, preventing cookies from spreading too much during baking and helping them maintain their shape.",
          es: "Enfriar la masa de galletas endurece la grasa, evitando que las galletas se extiendan demasiado durante el horneado y ayudándolas a mantener su forma.",
          de: "Das Kühlen von Keksteig härtet das Fett aus, verhindert, dass sich Kekse beim Backen zu stark ausbreiten und hilft ihnen, ihre Form zu behalten.",
          nl: "Het koelen van koekjesdeeg maakt het vet steviger, voorkomt dat koekjes te veel uitlopen tijdens het bakken en helpt ze hun vorm te behouden."
        }
      },
      {
        question: {
          en: "Which spice is essential in traditional gingerbread cookies?",
          es: "¿Qué especia es esencial en las galletas de jengibre tradicionales?",
          de: "Welches Gewürz ist unverzichtbar in traditionellen Lebkuchen?",
          nl: "Welke specerij is essentieel in traditionele peperkoek koekjes?"
        },
        options: [
          { en: "Cinnamon", es: "Canela", de: "Zimt", nl: "Kaneel" },
          { en: "Ginger", es: "Jengibre", de: "Ingwer", nl: "Gember" },
          { en: "Nutmeg", es: "Nuez moscada", de: "Muskatnuss", nl: "Nootmuskaat" },
          { en: "Cloves", es: "Clavos de olor", de: "Nelken", nl: "Kruidnagel" }
        ],
        correct: 1,
        explanation: {
          en: "Ginger is the defining spice in gingerbread cookies, giving them their characteristic warm, spicy flavor and name.",
          es: "El jengibre es la especia definitoria en las galletas de jengibre, dándoles su sabor característico cálido y picante y su nombre.",
          de: "Ingwer ist das definierende Gewürz in Lebkuchen und verleiht ihnen ihren charakteristischen warmen, würzigen Geschmack und Namen.",
          nl: "Gember is de bepalende specerij in peperkoek koekjes, die hen hun karakteristieke warme, kruidige smaak en naam geeft."
        }
      },
      {
        question: {
          en: "What makes snickerdoodles unique among cookies?",
          es: "¿Qué hace únicos a los snickerdoodles entre las galletas?",
          de: "Was macht Snickerdoodles unter den Keksen einzigartig?",
          nl: "Wat maakt snickerdoodles uniek onder de koekjes?"
        },
        options: [
          { en: "Chocolate chips", es: "Chispas de chocolate", de: "Schokoladenstückchen", nl: "Chocoladeschilfers" },
          { en: "Cinnamon sugar coating", es: "Cobertura de azúcar y canela", de: "Zimt-Zucker-Beschichtung", nl: "Kaneel-suiker coating" },
          { en: "Nuts", es: "Frutos secos", de: "Nüsse", nl: "Noten" },
          { en: "Cream filling", es: "Relleno de crema", de: "Cremefüllung", nl: "Roomvulling" }
        ],
        correct: 1,
        explanation: {
          en: "Snickerdoodles are rolled in cinnamon sugar before baking, creating their distinctive sweet and spicy coating with a soft, chewy texture.",
          es: "Los snickerdoodles se enrollan en azúcar y canela antes de hornear, creando su distintiva cobertura dulce y picante con textura suave y masticable.",
          de: "Snickerdoodles werden vor dem Backen in Zimt-Zucker gewälzt, wodurch ihre charakteristische süße und würzige Beschichtung mit weicher, zäher Textur entsteht.",
          nl: "Snickerdoodles worden voor het bakken gerold in kaneel-suiker, waardoor hun kenmerkende zoete en kruidige coating ontstaat met een zachte, chewy textuur."
        }
      },
      {
        question: {
          en: "Which ingredient helps cookies brown during baking?",
          es: "¿Qué ingrediente ayuda a que las galletas se doren durante el horneado?",
          de: "Welche Zutat hilft Keksen beim Backen zu bräunen?",
          nl: "Welk ingrediënt helpt koekjes bruin te worden tijdens het bakken?"
        },
        options: [
          { en: "Salt", es: "Sal", de: "Salz", nl: "Zout" },
          { en: "Sugar", es: "Azúcar", de: "Zucker", nl: "Suiker" },
          { en: "Flour", es: "Harina", de: "Mehl", nl: "Meel" },
          { en: "Baking powder", es: "Polvo para hornear", de: "Backpulver", nl: "Bakpoeder" }
        ],
        correct: 1,
        explanation: {
          en: "Sugar caramelizes during baking, creating the golden-brown color and contributing to the cookies' flavor and texture.",
          es: "El azúcar se carameliza durante el horneado, creando el color dorado-marrón y contribuyendo al sabor y textura de las galletas.",
          de: "Zucker karamelisiert beim Backen und erzeugt die goldbraune Farbe sowie Geschmack und Textur der Kekse.",
          nl: "Suiker karameliseert tijdens het bakken, waardoor de goudbruine kleur ontstaat en bijdraagt aan de smaak en textuur van de koekjes."
        }
      },
      {
        question: {
          en: "What is the traditional shape for sugar cookies during holidays?",
          es: "¿Cuál es la forma tradicional para las galletas de azúcar durante las fiestas?",
          de: "Was ist die traditionelle Form für Zuckerkekse während der Feiertage?",
          nl: "Wat is de traditionele vorm voor suiker koekjes tijdens feestdagen?"
        },
        options: [
          { en: "Round", es: "Redonda", de: "Rund", nl: "Rond" },
          { en: "Square", es: "Cuadrada", de: "Quadratisch", nl: "Vierkant" },
          { en: "Cut-out shapes", es: "Formas recortadas", de: "Ausgestochene Formen", nl: "Uitgesneden vormen" },
          { en: "Oval", es: "Ovalada", de: "Oval", nl: "Ovaal" }
        ],
        correct: 2,
        explanation: {
          en: "Sugar cookies are traditionally rolled out and cut into festive shapes like stars, trees, or hearts, then decorated with icing.",
          es: "Las galletas de azúcar se extienden tradicionalmente y se cortan en formas festivas como estrellas, árboles o corazones, luego se decoran con glaseado.",
          de: "Zuckerkekse werden traditionell ausgerollt und in festliche Formen wie Sterne, Bäume oder Herzen geschnitten, dann mit Glasur dekoriert.",
          nl: "Suiker koekjes worden traditioneel uitgerold en uitgesneden in feestelijke vormen zoals sterren, bomen of harten, daarna gedecoreerd met glazuur."
        }
      },
      {
        question: {
          en: "What type of cookie is an Oreo?",
          es: "¿Qué tipo de galleta es una Oreo?",
          de: "Was für ein Keks ist ein Oreo?",
          nl: "Wat voor soort koekje is een Oreo?"
        },
        options: [
          { en: "Drop cookie", es: "Galleta de masa blanda", de: "Tropfkeks", nl: "Druppel koekje" },
          { en: "Sandwich cookie", es: "Galleta sándwich", de: "Sandwich-Keks", nl: "Sandwich koekje" },
          { en: "Bar cookie", es: "Galleta en barra", de: "Riegelkeks", nl: "Reep koekje" },
          { en: "Rolled cookie", es: "Galleta enrollada", de: "Rollkeks", nl: "Gerold koekje" }
        ],
        correct: 1,
        explanation: {
          en: "Oreos are sandwich cookies consisting of two chocolate wafers with a sweet cream filling in between.",
          es: "Las Oreos son galletas sándwich que consisten en dos obleas de chocolate con un relleno de crema dulce en el medio.",
          de: "Oreos sind Sandwich-Kekse, die aus zwei Schokoladenwaffeln mit einer süßen Cremefüllung dazwischen bestehen.",
          nl: "Oreos zijn sandwich koekjes bestaande uit twee chocoladewafels met een zoete roomvulling ertussen."
        }
      },
      {
        question: {
          en: "Which leavening agent is commonly used in cookies?",
          es: "¿Qué agente leudante se usa comúnmente en las galletas?",
          de: "Welches Triebmittel wird häufig in Keksen verwendet?",
          nl: "Welk rijsmiddel wordt vaak gebruikt in koekjes?"
        },
        options: [
          { en: "Yeast", es: "Levadura", de: "Hefe", nl: "Gist" },
          { en: "Baking soda", es: "Bicarbonato de sodio", de: "Natron", nl: "Zuiveringszout" },
          { en: "Egg whites", es: "Claras de huevo", de: "Eiweiß", nl: "Eiwitten" },
          { en: "Steam", es: "Vapor", de: "Dampf", nl: "Stoom" }
        ],
        correct: 1,
        explanation: {
          en: "Baking soda is the most common leavening agent in cookies, helping them rise slightly and creating a tender texture.",
          es: "El bicarbonato de sodio es el agente leudante más común en las galletas, ayudándolas a subir ligeramente y creando una textura tierna.",
          de: "Natron ist das häufigste Triebmittel in Keksen und hilft ihnen, leicht aufzugehen und eine zarte Textur zu schaffen.",
          nl: "Zuiveringszout is het meest gebruikte rijsmiddel in koekjes, wat hen helpt licht te rijzen en een malse textuur te creëren."
        }
      },
      {
        question: {
          en: "What causes cookies to spread too much during baking?",
          es: "¿Qué causa que las galletas se extiendan demasiado durante el horneado?",
          de: "Was verursacht, dass sich Kekse beim Backen zu stark ausbreiten?",
          nl: "Wat zorgt ervoor dat koekjes te veel uitlopen tijdens het bakken?"
        },
        options: [
          { en: "Too much flour", es: "Demasiada harina", de: "Zu viel Mehl", nl: "Te veel meel" },
          { en: "Warm dough or butter", es: "Masa tibia o mantequilla", de: "Warmer Teig oder Butter", nl: "Warm deeg of boter" },
          { en: "Cold oven", es: "Horno frío", de: "Kalter Ofen", nl: "Koude oven" },
          { en: "Too much baking powder", es: "Demasiado polvo para hornear", de: "Zu viel Backpulver", nl: "Te veel bakpoeder" }
        ],
        correct: 1,
        explanation: {
          en: "Warm dough or butter melts quickly in the oven, causing cookies to spread excessively before they set. Chilled dough prevents this.",
          es: "La masa tibia o mantequilla se derrite rápidamente en el horno, causando que las galletas se extiendan excesivamente antes de cuajar. La masa fría previene esto.",
          de: "Warmer Teig oder Butter schmilzt schnell im Ofen, wodurch sich Kekse übermäßig ausbreiten, bevor sie fest werden. Gekühlter Teig verhindert dies.",
          nl: "Warm deeg of boter smelt snel in de oven, waardoor koekjes overdreven uitlopen voordat ze stevig worden. Gekoeld deeg voorkomt dit."
        }
      },
      {
        question: {
          en: "Which cookie originated in the Netherlands?",
          es: "¿Qué galleta se originó en los Países Bajos?",
          de: "Welcher Keks stammt aus den Niederlanden?",
          nl: "Welk koekje komt oorspronkelijk uit Nederland?"
        },
        options: [
          { en: "Chocolate chip cookie", es: "Galleta con chispas de chocolate", de: "Schokoladenkeks", nl: "Chocoladechip koekje" },
          { en: "Stroopwafel", es: "Stroopwafel", de: "Stroopwafel", nl: "Stroopwafel" },
          { en: "Macaroon", es: "Macarrón", de: "Makrone", nl: "Bitterkoekje" },
          { en: "Shortbread", es: "Shortbread", de: "Shortbread", nl: "Shortbread" }
        ],
        correct: 1,
        explanation: {
          en: "Stroopwafels originated in the Netherlands in the 18th century - thin waffle cookies with caramel syrup filling between two layers.",
          es: "Los stroopwafels se originaron en los Países Bajos en el siglo XVIII - galletas de waffle delgadas con relleno de jarabe de caramelo entre dos capas.",
          de: "Stroopwafels entstanden im 18. Jahrhundert in den Niederlanden - dünne Waffelkekse mit Karamellsirupfüllung zwischen zwei Schichten.",
          nl: "Stroopwafels zijn in de 18e eeuw ontstaan in Nederland - dunne wafelkoekjes met karamelsiroop vulling tussen twee lagen."
        }
      },
      {
        question: {
          en: "What is the key to making perfect chocolate chip cookies?",
          es: "¿Cuál es la clave para hacer galletas perfectas con chispas de chocolate?",
          de: "Was ist der Schlüssel für perfekte Schokoladenkekse?",
          nl: "Wat is de sleutel tot het maken van perfecte chocoladechip koekjes?"
        },
        options: [
          { en: "Using expensive chocolate", es: "Usar chocolate caro", de: "Teure Schokolade verwenden", nl: "Dure chocolade gebruiken" },
          { en: "Proper butter temperature", es: "Temperatura correcta de la mantequilla", de: "Richtige Buttertemperatur", nl: "Juiste botertemperatuur" },
          { en: "Adding extra eggs", es: "Añadir huevos extra", de: "Extra Eier hinzufügen", nl: "Extra eieren toevoegen" },
          { en: "Long baking time", es: "Tiempo de horneado largo", de: "Lange Backzeit", nl: "Lange baktijd" }
        ],
        correct: 1,
        explanation: {
          en: "Room temperature butter creams properly with sugar, creating the ideal texture. Too cold or warm butter affects the final cookie texture.",
          es: "La mantequilla a temperatura ambiente se bate correctamente con azúcar, creando la textura ideal. Mantequilla muy fría o tibia afecta la textura final de la galleta.",
          de: "Butter bei Raumtemperatur lässt sich richtig mit Zucker aufschlagen und erzeugt die ideale Textur. Zu kalte oder warme Butter beeinflusst die finale Kekstextur.",
          nl: "Boter op kamertemperatuur romt goed op met suiker, waardoor de ideale textuur ontstaat. Te koude of warme boter beïnvloedt de uiteindelijke koekjestextuur."
        }
      },
      {
        question: {
          en: "What gives oatmeal cookies their distinctive texture?",
          es: "¿Qué da a las galletas de avena su textura distintiva?",
          de: "Was verleiht Haferkeksen ihre charakteristische Textur?",
          nl: "Wat geeft havermout koekjes hun kenmerkende textuur?"
        },
        options: [
          { en: "The oats themselves", es: "La avena misma", de: "Der Hafer selbst", nl: "De haver zelf" },
          { en: "Extra butter", es: "Mantequilla extra", de: "Extra Butter", nl: "Extra boter" },
          { en: "More flour", es: "Más harina", de: "Mehr Mehl", nl: "Meer meel" },
          { en: "Double baking", es: "Doble horneado", de: "Doppeltes Backen", nl: "Dubbel bakken" }
        ],
        correct: 0,
        explanation: {
          en: "The rolled oats provide a chewy, hearty texture that distinguishes oatmeal cookies from other varieties, along with a nutty flavor.",
          es: "La avena arrollada proporciona una textura masticable y sustanciosa que distingue las galletas de avena de otras variedades, junto con un sabor a nuez.",
          de: "Die Haferflocken verleihen eine zähe, herzhafte Textur, die Haferkekse von anderen Sorten unterscheidet, zusammen mit einem nussigen Geschmack.",
          nl: "De havervlokken zorgen voor een chewy, stevige textuur die havermout koekjes onderscheidt van andere variëteiten, samen met een nootachtige smaak."
        }
      },
      {
        question: {
          en: "Which technique prevents cookies from sticking to the baking sheet?",
          es: "¿Qué técnica evita que las galletas se peguen a la bandeja de horneado?",
          de: "Welche Technik verhindert, dass Kekse am Backblech kleben?",
          nl: "Welke techniek voorkomt dat koekjes aan de bakplaat plakken?"
        },
        options: [
          { en: "Using parchment paper", es: "Usar papel pergamino", de: "Backpapier verwenden", nl: "Bakpapier gebruiken" },
          { en: "Higher temperature", es: "Temperatura más alta", de: "Höhere Temperatur", nl: "Hogere temperatuur" },
          { en: "Longer baking time", es: "Tiempo de horneado más largo", de: "Längere Backzeit", nl: "Langere baktijd" },
          { en: "Adding more sugar", es: "Añadir más azúcar", de: "Mehr Zucker hinzufügen", nl: "Meer suiker toevoegen" }
        ],
        correct: 0,
        explanation: {
          en: "Parchment paper creates a non-stick surface between cookies and the baking sheet, making removal easy and preventing burning on the bottom.",
          es: "El papel pergamino crea una superficie antiadherente entre las galletas y la bandeja de horneado, facilitando la remoción y previniendo que se quemen en el fondo.",
          de: "Backpapier schafft eine Antihaft-Oberfläche zwischen Keksen und Backblech, erleichtert das Entfernen und verhindert Anbrennen am Boden.",
          nl: "Bakpapier creëert een anti-aanbaklaag tussen koekjes en de bakplaat, maakt verwijderen gemakkelijk en voorkomt aanbranden aan de onderkant."
        }
      },
      {
        question: {
          en: "What is the traditional accompaniment to tea biscuits in Britain?",
          es: "¿Cuál es el acompañamiento tradicional para las galletas de té en Gran Bretaña?",
          de: "Was ist die traditionelle Begleitung zu Teekeksen in Großbritannien?",
          nl: "Wat is de traditionele begeleiding bij thee koekjes in Groot-Brittannië?"
        },
        options: [
          { en: "Coffee", es: "Café", de: "Kaffee", nl: "Koffie" },
          { en: "Hot tea", es: "Té caliente", de: "Heißer Tee", nl: "Warme thee" },
          { en: "Cold milk", es: "Leche fría", de: "Kalte Milch", nl: "Koude melk" },
          { en: "Hot chocolate", es: "Chocolate caliente", de: "Heiße Schokolade", nl: "Warme chocolademelk" }
        ],
        correct: 1,
        explanation: {
          en: "Tea biscuits are traditionally served with hot tea in British culture, often dunked into the tea before eating.",
          es: "Las galletas de té se sirven tradicionalmente con té caliente en la cultura británica, a menudo se mojan en el té antes de comer.",
          de: "Teekekse werden traditionell mit heißem Tee in der britischen Kultur serviert, oft vor dem Essen in den Tee getunkt.",
          nl: "Thee koekjes worden traditioneel geserveerd met warme thee in de Britse cultuur, vaak gedoopt in de thee voor het eten."
        }
      },
      {
        question: {
          en: "What makes madeleines different from regular cookies?",
          es: "¿Qué hace que las madeleines sean diferentes de las galletas regulares?",
          de: "Was macht Madeleines anders als normale Kekse?",
          nl: "Wat maakt madeleines anders dan gewone koekjes?"
        },
        options: [
          { en: "They're baked in special molds", es: "Se hornean en moldes especiales", de: "Sie werden in speziellen Formen gebacken", nl: "Ze worden gebakken in speciale vormen" },
          { en: "They contain no sugar", es: "No contienen azúcar", de: "Sie enthalten keinen Zucker", nl: "Ze bevatten geen suiker" },
          { en: "They're served frozen", es: "Se sirven congeladas", de: "Sie werden gefroren serviert", nl: "Ze worden bevroren geserveerd" },
          { en: "They have holes", es: "Tienen agujeros", de: "Sie haben Löcher", nl: "Ze hebben gaten" }
        ],
        correct: 0,
        explanation: {
          en: "Madeleines are baked in shell-shaped molds that give them their distinctive scalloped appearance, making them more like small cakes than cookies.",
          es: "Las madeleines se hornean en moldes con forma de concha que les dan su apariencia distintiva festoneada, haciéndolas más como pequeños pasteles que galletas.",
          de: "Madeleines werden in muschelförmigen Formen gebacken, die ihnen ihr charakteristisches gerilltes Aussehen verleihen und sie eher wie kleine Kuchen als Kekse machen.",
          nl: "Madeleines worden gebakken in schelpvormige vormen die hun kenmerkende geribde uiterlijk geven, waardoor ze meer lijken op kleine cakejes dan koekjes."
        }
      },
      {
        question: {
          en: "What is the most common shape for sugar cookies?",
          es: "¿Cuál es la forma más común para las galletas de azúcar?",
          de: "Was ist die häufigste Form für Zuckerkekse?",
          nl: "Wat is de meest voorkomende vorm voor suikerkoekjes?"
        },
        options: [
          { en: "Round", es: "Redonda", de: "Rund", nl: "Rond" },
          { en: "Square", es: "Cuadrada", de: "Quadratisch", nl: "Vierkant" },
          { en: "Star", es: "Estrella", de: "Stern", nl: "Ster" },
          { en: "Heart", es: "Corazón", de: "Herz", nl: "Hart" }
        ],
        correct: 0,
        explanation: {
          en: "Round sugar cookies are the most common shape, often made using a cookie cutter or simply rolled into balls and flattened.",
          es: "Las galletas de azúcar redondas son la forma más común, a menudo hechas usando un cortador de galletas o simplemente enrolladas en bolas y aplanadas.",
          de: "Runde Zuckerkekse sind die häufigste Form, oft mit einem Keksausstecher gemacht oder einfach zu Bällen gerollt und flach gedrückt.",
          nl: "Ronde suikerkoekjes zijn de meest voorkomende vorm, vaak gemaakt met een koekjessnijder of gewoon gerold in balletjes en platgedrukt."
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
