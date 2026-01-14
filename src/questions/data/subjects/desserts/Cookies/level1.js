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
        }    },
    {
      question: {
        en: "What makes cookies crispy vs. chewy?",
        es: "What makes cookies crispy vs. chewy?",
        de: "What makes cookies crispy vs. chewy?",
        nl: "What makes cookies crispy vs. chewy?"
      },
      options: [
        { en: "Fat type and baking time", es: "Fat type and baking time", de: "Fat type and baking time", nl: "Fat type and baking time" },
        { en: "Sugar amount", es: "Sugar amount", de: "Sugar amount", nl: "Sugar amount" },
        { en: "Flour type", es: "Flour type", de: "Flour type", nl: "Flour type" },
        { en: "Egg amount", es: "Egg amount", de: "Egg amount", nl: "Egg amount" }
      ],
      correct: 0,
      explanation: {
        en: "Butter creates crispy cookies while shortening makes them chewy; longer baking also increases crispness.",
        es: "Butter creates crispy cookies while shortening makes them chewy; longer baking also increases crispness.",
        de: "Butter creates crispy cookies while shortening makes them chewy; longer baking also increases crispness.",
        nl: "Butter creates crispy cookies while shortening makes them chewy; longer baking also increases crispness."
      }
    },
    {
      question: {
        en: "What is a snickerdoodle?",
        es: "What is a snickerdoodle?",
        de: "What is a snickerdoodle?",
        nl: "What is a snickerdoodle?"
      },
      options: [
        { en: "Cinnamon sugar cookie", es: "Cinnamon sugar cookie", de: "Cinnamon sugar cookie", nl: "Cinnamon sugar cookie" },
        { en: "Chocolate chip cookie", es: "Chocolate chip cookie", de: "Chocolate chip cookie", nl: "Chocolate chip cookie" },
        { en: "Peanut butter cookie", es: "Peanut butter cookie", de: "Peanut butter cookie", nl: "Peanut butter cookie" },
        { en: "Oatmeal cookie", es: "Oatmeal cookie", de: "Oatmeal cookie", nl: "Oatmeal cookie" }
      ],
      correct: 0,
      explanation: {
        en: "Snickerdoodles are sugar cookies rolled in cinnamon-sugar before baking, creating a distinctive crackled surface.",
        es: "Snickerdoodles are sugar cookies rolled in cinnamon-sugar before baking, creating a distinctive crackled surface.",
        de: "Snickerdoodles are sugar cookies rolled in cinnamon-sugar before baking, creating a distinctive crackled surface.",
        nl: "Snickerdoodles are sugar cookies rolled in cinnamon-sugar before baking, creating a distinctive crackled surface."
      }
    },
    {
      question: {
        en: "What is the key ingredient in macarons?",
        es: "What is the key ingredient in macarons?",
        de: "What is the key ingredient in macarons?",
        nl: "What is the key ingredient in macarons?"
      },
      options: [
        { en: "Almond flour", es: "Almond flour", de: "Almond flour", nl: "Almond flour" },
        { en: "Coconut", es: "Coconut", de: "Coconut", nl: "Coconut" },
        { en: "Hazelnuts", es: "Hazelnuts", de: "Hazelnuts", nl: "Hazelnuts" },
        { en: "Walnuts", es: "Walnuts", de: "Walnuts", nl: "Walnuts" }
      ],
      correct: 0,
      explanation: {
        en: "Macarons are made with almond flour (ground almonds), egg whites, and sugar, creating their distinctive texture.",
        es: "Macarons are made with almond flour (ground almonds), egg whites, and sugar, creating their distinctive texture.",
        de: "Macarons are made with almond flour (ground almonds), egg whites, and sugar, creating their distinctive texture.",
        nl: "Macarons are made with almond flour (ground almonds), egg whites, and sugar, creating their distinctive texture."
      }
    },
    {
      question: {
        en: "What are biscotti?",
        es: "What are biscotti?",
        de: "What are biscotti?",
        nl: "What are biscotti?"
      },
      options: [
        { en: "Twice-baked Italian cookies", es: "Twice-baked Italian cookies", de: "Twice-baked Italian cookies", nl: "Twice-baked Italian cookies" },
        { en: "Chocolate cookies", es: "Chocolate cookies", de: "Chocolate cookies", nl: "Chocolate cookies" },
        { en: "Butter cookies", es: "Butter cookies", de: "Butter cookies", nl: "Butter cookies" },
        { en: "Iced cookies", es: "Iced cookies", de: "Iced cookies", nl: "Iced cookies" }
      ],
      correct: 0,
      explanation: {
        en: "Biscotti are Italian cookies baked twice - first as a loaf, then sliced and baked again until crispy.",
        es: "Biscotti are Italian cookies baked twice - first as a loaf, then sliced and baked again until crispy.",
        de: "Biscotti are Italian cookies baked twice - first as a loaf, then sliced and baked again until crispy.",
        nl: "Biscotti are Italian cookies baked twice - first as a loaf, then sliced and baked again until crispy."
      }
    },
    {
      question: {
        en: "What cookie is shaped with a cookie press?",
        es: "What cookie is shaped with a cookie press?",
        de: "What cookie is shaped with a cookie press?",
        nl: "What cookie is shaped with a cookie press?"
      },
      options: [
        { en: "Spritz cookies", es: "Spritz cookies", de: "Spritz cookies", nl: "Spritz cookies" },
        { en: "Sugar cookies", es: "Sugar cookies", de: "Sugar cookies", nl: "Sugar cookies" },
        { en: "Gingerbread cookies", es: "Gingerbread cookies", de: "Gingerbread cookies", nl: "Gingerbread cookies" },
        { en: "Shortbread", es: "Shortbread", de: "Shortbread", nl: "Shortbread" }
      ],
      correct: 0,
      explanation: {
        en: "Spritz cookies are made from dough pressed through a cookie press or pastry bag to create decorative shapes.",
        es: "Spritz cookies are made from dough pressed through a cookie press or pastry bag to create decorative shapes.",
        de: "Spritz cookies are made from dough pressed through a cookie press or pastry bag to create decorative shapes.",
        nl: "Spritz cookies are made from dough pressed through a cookie press or pastry bag to create decorative shapes."
      }
    },
    {
      question: {
        en: "What is the difference between cookies and biscuits?",
        es: "What is the difference between cookies and biscuits?",
        de: "What is the difference between cookies and biscuits?",
        nl: "What is the difference between cookies and biscuits?"
      },
      options: [
        { en: "Regional terminology; biscuits are drier in UK", es: "Regional terminology; biscuits are drier in UK", de: "Regional terminology; biscuits are drier in UK", nl: "Regional terminology; biscuits are drier in UK" },
        { en: "Size difference", es: "Size difference", de: "Size difference", nl: "Size difference" },
        { en: "Ingredient difference", es: "Ingredient difference", de: "Ingredient difference", nl: "Ingredient difference" },
        { en: "No difference", es: "No difference", de: "No difference", nl: "No difference" }
      ],
      correct: 0,
      explanation: {
        en: "In the UK, 'biscuits' are typically drier and harder; in the US, 'cookies' can be soft or crispy while 'biscuits' are bread-like.",
        es: "In the UK, 'biscuits' are typically drier and harder; in the US, 'cookies' can be soft or crispy while 'biscuits' are bread-like.",
        de: "In the UK, 'biscuits' are typically drier and harder; in the US, 'cookies' can be soft or crispy while 'biscuits' are bread-like.",
        nl: "In the UK, 'biscuits' are typically drier and harder; in the US, 'cookies' can be soft or crispy while 'biscuits' are bread-like."
      }
    },
    {
      question: {
        en: "What are thumbprint cookies?",
        es: "What are thumbprint cookies?",
        de: "What are thumbprint cookies?",
        nl: "What are thumbprint cookies?"
      },
      options: [
        { en: "Cookies with jam-filled indentation", es: "Cookies with jam-filled indentation", de: "Cookies with jam-filled indentation", nl: "Cookies with jam-filled indentation" },
        { en: "Chocolate cookies", es: "Chocolate cookies", de: "Chocolate cookies", nl: "Chocolate cookies" },
        { en: "Sandwich cookies", es: "Sandwich cookies", de: "Sandwich cookies", nl: "Sandwich cookies" },
        { en: "Giant cookies", es: "Giant cookies", de: "Giant cookies", nl: "Giant cookies" }
      ],
      correct: 0,
      explanation: {
        en: "Thumbprint cookies have an indentation (traditionally made with a thumb) filled with jam, chocolate, or other fillings.",
        es: "Thumbprint cookies have an indentation (traditionally made with a thumb) filled with jam, chocolate, or other fillings.",
        de: "Thumbprint cookies have an indentation (traditionally made with a thumb) filled with jam, chocolate, or other fillings.",
        nl: "Thumbprint cookies have an indentation (traditionally made with a thumb) filled with jam, chocolate, or other fillings."
      }
    },
    {
      question: {
        en: "What is shortbread?",
        es: "What is shortbread?",
        de: "What is shortbread?",
        nl: "What is shortbread?"
      },
      options: [
        { en: "Scottish butter cookie with 3 ingredients", es: "Scottish butter cookie with 3 ingredients", de: "Scottish butter cookie with 3 ingredients", nl: "Scottish butter cookie with 3 ingredients" },
        { en: "Fruit cookie", es: "Fruit cookie", de: "Fruit cookie", nl: "Fruit cookie" },
        { en: "Chocolate cookie", es: "Chocolate cookie", de: "Chocolate cookie", nl: "Chocolate cookie" },
        { en: "Coconut cookie", es: "Coconut cookie", de: "Coconut cookie", nl: "Coconut cookie" }
      ],
      correct: 0,
      explanation: {
        en: "Shortbread is a traditional Scottish cookie made simply from butter, sugar, and flour in a 1:2:3 ratio.",
        es: "Shortbread is a traditional Scottish cookie made simply from butter, sugar, and flour in a 1:2:3 ratio.",
        de: "Shortbread is a traditional Scottish cookie made simply from butter, sugar, and flour in a 1:2:3 ratio.",
        nl: "Shortbread is a traditional Scottish cookie made simply from butter, sugar, and flour in a 1:2:3 ratio."
      }
    },
    {
      question: {
        en: "What are pfeffernüsse?",
        es: "What are pfeffernüsse?",
        de: "What are pfeffernüsse?",
        nl: "What are pfeffernüsse?"
      },
      options: [
        { en: "German spiced cookies", es: "German spiced cookies", de: "German spiced cookies", nl: "German spiced cookies" },
        { en: "Italian nut cookies", es: "Italian nut cookies", de: "Italian nut cookies", nl: "Italian nut cookies" },
        { en: "French butter cookies", es: "French butter cookies", de: "French butter cookies", nl: "French butter cookies" },
        { en: "American chocolate cookies", es: "American chocolate cookies", de: "American chocolate cookies", nl: "American chocolate cookies" }
      ],
      correct: 0,
      explanation: {
        en: "Pfeffernüsse are traditional German spiced cookies, often made during Christmas with pepper, cinnamon, and other spices.",
        es: "Pfeffernüsse are traditional German spiced cookies, often made during Christmas with pepper, cinnamon, and other spices.",
        de: "Pfeffernüsse are traditional German spiced cookies, often made during Christmas with pepper, cinnamon, and other spices.",
        nl: "Pfeffernüsse are traditional German spiced cookies, often made during Christmas with pepper, cinnamon, and other spices."
      }
    },
    {
      question: {
        en: "What makes oatmeal cookies chewy?",
        es: "What makes oatmeal cookies chewy?",
        de: "What makes oatmeal cookies chewy?",
        nl: "What makes oatmeal cookies chewy?"
      },
      options: [
        { en: "Brown sugar and slightly underbaking", es: "Brown sugar and slightly underbaking", de: "Brown sugar and slightly underbaking", nl: "Brown sugar and slightly underbaking" },
        { en: "White sugar", es: "White sugar", de: "White sugar", nl: "White sugar" },
        { en: "Overbaking", es: "Overbaking", de: "Overbaking", nl: "Overbaking" },
        { en: "Extra flour", es: "Extra flour", de: "Extra flour", nl: "Extra flour" }
      ],
      correct: 0,
      explanation: {
        en: "Brown sugar's moisture and slight underbaking keep oatmeal cookies chewy; the oats also contribute to texture.",
        es: "Brown sugar's moisture and slight underbaking keep oatmeal cookies chewy; the oats also contribute to texture.",
        de: "Brown sugar's moisture and slight underbaking keep oatmeal cookies chewy; the oats also contribute to texture.",
        nl: "Brown sugar's moisture and slight underbaking keep oatmeal cookies chewy; the oats also contribute to texture."
      }
    },
    {
      question: {
        en: "What is a florentine cookie?",
        es: "What is a florentine cookie?",
        de: "What is a florentine cookie?",
        nl: "What is a florentine cookie?"
      },
      options: [
        { en: "Thin cookie with nuts and dried fruit, often chocolate-backed", es: "Thin cookie with nuts and dried fruit, often chocolate-backed", de: "Thin cookie with nuts and dried fruit, often chocolate-backed", nl: "Thin cookie with nuts and dried fruit, often chocolate-backed" },
        { en: "Chocolate chip cookie", es: "Chocolate chip cookie", de: "Chocolate chip cookie", nl: "Chocolate chip cookie" },
        { en: "Sugar cookie", es: "Sugar cookie", de: "Sugar cookie", nl: "Sugar cookie" },
        { en: "Gingerbread cookie", es: "Gingerbread cookie", de: "Gingerbread cookie", nl: "Gingerbread cookie" }
      ],
      correct: 0,
      explanation: {
        en: "Florentines are thin, crispy Italian cookies made with nuts and candied fruit, traditionally with chocolate on one side.",
        es: "Florentines are thin, crispy Italian cookies made with nuts and candied fruit, traditionally with chocolate on one side.",
        de: "Florentines are thin, crispy Italian cookies made with nuts and candied fruit, traditionally with chocolate on one side.",
        nl: "Florentines are thin, crispy Italian cookies made with nuts and candied fruit, traditionally with chocolate on one side."
      }
    },
    {
      question: {
        en: "What are Russian tea cakes?",
        es: "What are Russian tea cakes?",
        de: "What are Russian tea cakes?",
        nl: "What are Russian tea cakes?"
      },
      options: [
        { en: "Buttery nut cookies rolled in powdered sugar", es: "Buttery nut cookies rolled in powdered sugar", de: "Buttery nut cookies rolled in powdered sugar", nl: "Buttery nut cookies rolled in powdered sugar" },
        { en: "Tea-flavored cookies", es: "Tea-flavored cookies", de: "Tea-flavored cookies", nl: "Tea-flavored cookies" },
        { en: "Layered cookies", es: "Layered cookies", de: "Layered cookies", nl: "Layered cookies" },
        { en: "Fruit cookies", es: "Fruit cookies", de: "Fruit cookies", nl: "Fruit cookies" }
      ],
      correct: 0,
      explanation: {
        en: "Russian tea cakes (or Mexican wedding cookies) are buttery cookies with finely chopped nuts, rolled in powdered sugar.",
        es: "Russian tea cakes (or Mexican wedding cookies) are buttery cookies with finely chopped nuts, rolled in powdered sugar.",
        de: "Russian tea cakes (or Mexican wedding cookies) are buttery cookies with finely chopped nuts, rolled in powdered sugar.",
        nl: "Russian tea cakes (or Mexican wedding cookies) are buttery cookies with finely chopped nuts, rolled in powdered sugar."
      }
    },
    {
      question: {
        en: "What is a linzer cookie?",
        es: "What is a linzer cookie?",
        de: "What is a linzer cookie?",
        nl: "What is a linzer cookie?"
      },
      options: [
        { en: "Sandwich cookie with jam filling and cutout top", es: "Sandwich cookie with jam filling and cutout top", de: "Sandwich cookie with jam filling and cutout top", nl: "Sandwich cookie with jam filling and cutout top" },
        { en: "Chocolate cookie", es: "Chocolate cookie", de: "Chocolate cookie", nl: "Chocolate cookie" },
        { en: "Iced cookie", es: "Iced cookie", de: "Iced cookie", nl: "Iced cookie" },
        { en: "Bar cookie", es: "Bar cookie", de: "Bar cookie", nl: "Bar cookie" }
      ],
      correct: 0,
      explanation: {
        en: "Linzer cookies are sandwich cookies filled with jam, with a cutout in the top cookie revealing the jam filling.",
        es: "Linzer cookies are sandwich cookies filled with jam, with a cutout in the top cookie revealing the jam filling.",
        de: "Linzer cookies are sandwich cookies filled with jam, with a cutout in the top cookie revealing the jam filling.",
        nl: "Linzer cookies are sandwich cookies filled with jam, with a cutout in the top cookie revealing the jam filling."
      }
    },
    {
      question: {
        en: "What are meringue cookies?",
        es: "What are meringue cookies?",
        de: "What are meringue cookies?",
        nl: "What are meringue cookies?"
      },
      options: [
        { en: "Cookies made from whipped egg whites and sugar", es: "Cookies made from whipped egg whites and sugar", de: "Cookies made from whipped egg whites and sugar", nl: "Cookies made from whipped egg whites and sugar" },
        { en: "Butter cookies", es: "Butter cookies", de: "Butter cookies", nl: "Butter cookies" },
        { en: "Chocolate cookies", es: "Chocolate cookies", de: "Chocolate cookies", nl: "Chocolate cookies" },
        { en: "Oatmeal cookies", es: "Oatmeal cookies", de: "Oatmeal cookies", nl: "Oatmeal cookies" }
      ],
      correct: 0,
      explanation: {
        en: "Meringue cookies are light, crispy cookies made primarily from whipped egg whites and sugar, baked at low temperature.",
        es: "Meringue cookies are light, crispy cookies made primarily from whipped egg whites and sugar, baked at low temperature.",
        de: "Meringue cookies are light, crispy cookies made primarily from whipped egg whites and sugar, baked at low temperature.",
        nl: "Meringue cookies are light, crispy cookies made primarily from whipped egg whites and sugar, baked at low temperature."
      }
    },
    {
      question: {
        en: "What is the purpose of chilling cookie dough?",
        es: "What is the purpose of chilling cookie dough?",
        de: "What is the purpose of chilling cookie dough?",
        nl: "What is the purpose of chilling cookie dough?"
      },
      options: [
        { en: "Prevent spreading and enhance flavor", es: "Prevent spreading and enhance flavor", de: "Prevent spreading and enhance flavor", nl: "Prevent spreading and enhance flavor" },
        { en: "Make it easier to mix", es: "Make it easier to mix", de: "Make it easier to mix", nl: "Make it easier to mix" },
        { en: "Add moisture", es: "Add moisture", de: "Add moisture", nl: "Add moisture" },
        { en: "Speed up baking", es: "Speed up baking", de: "Speed up baking", nl: "Speed up baking" }
      ],
      correct: 0,
      explanation: {
        en: "Chilling cookie dough prevents excessive spreading during baking and allows flavors to develop.",
        es: "Chilling cookie dough prevents excessive spreading during baking and allows flavors to develop.",
        de: "Chilling cookie dough prevents excessive spreading during baking and allows flavors to develop.",
        nl: "Chilling cookie dough prevents excessive spreading during baking and allows flavors to develop."
      }
    },
    {
      question: {
        en: "What are Anzac biscuits?",
        es: "What are Anzac biscuits?",
        de: "What are Anzac biscuits?",
        nl: "What are Anzac biscuits?"
      },
      options: [
        { en: "Australian/New Zealand oat cookies", es: "Australian/New Zealand oat cookies", de: "Australian/New Zealand oat cookies", nl: "Australian/New Zealand oat cookies" },
        { en: "British digestive biscuits", es: "British digestive biscuits", de: "British digestive biscuits", nl: "British digestive biscuits" },
        { en: "American graham crackers", es: "American graham crackers", de: "American graham crackers", nl: "American graham crackers" },
        { en: "Scottish shortbread", es: "Scottish shortbread", de: "Scottish shortbread", nl: "Scottish shortbread" }
      ],
      correct: 0,
      explanation: {
        en: "Anzac biscuits are crispy oat cookies from Australia and New Zealand, traditionally made with golden syrup and coconut.",
        es: "Anzac biscuits are crispy oat cookies from Australia and New Zealand, traditionally made with golden syrup and coconut.",
        de: "Anzac biscuits are crispy oat cookies from Australia and New Zealand, traditionally made with golden syrup and coconut.",
        nl: "Anzac biscuits are crispy oat cookies from Australia and New Zealand, traditionally made with golden syrup and coconut."
      }
    },
    {
      question: {
        en: "What is a whoopie pie?",
        es: "What is a whoopie pie?",
        de: "What is a whoopie pie?",
        nl: "What is a whoopie pie?"
      },
      options: [
        { en: "Two cake-like cookies with cream filling", es: "Two cake-like cookies with cream filling", de: "Two cake-like cookies with cream filling", nl: "Two cake-like cookies with cream filling" },
        { en: "Chocolate chip cookie", es: "Chocolate chip cookie", de: "Chocolate chip cookie", nl: "Chocolate chip cookie" },
        { en: "Pie-shaped cookie", es: "Pie-shaped cookie", de: "Pie-shaped cookie", nl: "Pie-shaped cookie" },
        { en: "Fruit-filled cookie", es: "Fruit-filled cookie", de: "Fruit-filled cookie", nl: "Fruit-filled cookie" }
      ],
      correct: 0,
      explanation: {
        en: "Whoopie pies consist of two soft, cake-like cookies with a creamy filling sandwiched between them.",
        es: "Whoopie pies consist of two soft, cake-like cookies with a creamy filling sandwiched between them.",
        de: "Whoopie pies consist of two soft, cake-like cookies with a creamy filling sandwiched between them.",
        nl: "Whoopie pies consist of two soft, cake-like cookies with a creamy filling sandwiched between them."
      }
    },
    {
      question: {
        en: "What makes gingersnaps 'snap'?",
        es: "What makes gingersnaps 'snap'?",
        de: "What makes gingersnaps 'snap'?",
        nl: "What makes gingersnaps 'snap'?"
      },
      options: [
        { en: "High molasses content and baking until crisp", es: "High molasses content and baking until crisp", de: "High molasses content and baking until crisp", nl: "High molasses content and baking until crisp" },
        { en: "Ginger amount", es: "Ginger amount", de: "Ginger amount", nl: "Ginger amount" },
        { en: "Flour type", es: "Flour type", de: "Flour type", nl: "Flour type" },
        { en: "Size", es: "Size", de: "Size", nl: "Size" }
      ],
      correct: 0,
      explanation: {
        en: "Gingersnaps are crispy due to molasses and baking until fully crisp, creating their distinctive 'snap' when broken.",
        es: "Gingersnaps are crispy due to molasses and baking until fully crisp, creating their distinctive 'snap' when broken.",
        de: "Gingersnaps are crispy due to molasses and baking until fully crisp, creating their distinctive 'snap' when broken.",
        nl: "Gingersnaps are crispy due to molasses and baking until fully crisp, creating their distinctive 'snap' when broken."
      }
    },
    {
      question: {
        en: "What is a Moravian cookie?",
        es: "What is a Moravian cookie?",
        de: "What is a Moravian cookie?",
        nl: "What is a Moravian cookie?"
      },
      options: [
        { en: "Very thin, crispy spiced cookie", es: "Very thin, crispy spiced cookie", de: "Very thin, crispy spiced cookie", nl: "Very thin, crispy spiced cookie" },
        { en: "Thick soft cookie", es: "Thick soft cookie", de: "Thick soft cookie", nl: "Thick soft cookie" },
        { en: "Sandwich cookie", es: "Sandwich cookie", de: "Sandwich cookie", nl: "Sandwich cookie" },
        { en: "No-bake cookie", es: "No-bake cookie", de: "No-bake cookie", nl: "No-bake cookie" }
      ],
      correct: 0,
      explanation: {
        en: "Moravian cookies are paper-thin, crispy spiced cookies traditional to the Moravian communities of North Carolina.",
        es: "Moravian cookies are paper-thin, crispy spiced cookies traditional to the Moravian communities of North Carolina.",
        de: "Moravian cookies are paper-thin, crispy spiced cookies traditional to the Moravian communities of North Carolina.",
        nl: "Moravian cookies are paper-thin, crispy spiced cookies traditional to the Moravian communities of North Carolina."
      }
    },
    {
      question: {
        en: "What are ladyfingers?",
        es: "What are ladyfingers?",
        de: "What are ladyfingers?",
        nl: "What are ladyfingers?"
      },
      options: [
        { en: "Light, finger-shaped sponge cookies", es: "Light, finger-shaped sponge cookies", de: "Light, finger-shaped sponge cookies", nl: "Light, finger-shaped sponge cookies" },
        { en: "Cookies shaped like hands", es: "Cookies shaped like hands", de: "Cookies shaped like hands", nl: "Cookies shaped like hands" },
        { en: "Almond cookies", es: "Almond cookies", de: "Almond cookies", nl: "Almond cookies" },
        { en: "Chocolate cookies", es: "Chocolate cookies", de: "Chocolate cookies", nl: "Chocolate cookies" }
      ],
      correct: 0,
      explanation: {
        en: "Ladyfingers are light, dry, finger-shaped sponge cookies often used in tiramisu and charlottes.",
        es: "Ladyfingers are light, dry, finger-shaped sponge cookies often used in tiramisu and charlottes.",
        de: "Ladyfingers are light, dry, finger-shaped sponge cookies often used in tiramisu and charlottes.",
        nl: "Ladyfingers are light, dry, finger-shaped sponge cookies often used in tiramisu and charlottes."
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
