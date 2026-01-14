(function() {
  const level1 = {
    questions: [
      {
        question: {
          en: "What is the main ingredient that makes bread rise?",
          es: "¿Cuál es el ingrediente principal que hace que el pan suba?",
          de: "Was ist die Hauptzutat, die Brot aufgehen lässt?",
          nl: "Wat is het hoofdingrediënt dat brood laat rijzen?"
        },
        options: [
          {
            en: "Yeast",
            es: "Levadura",
            de: "Hefe",
            nl: "Gist"
          },
          {
            en: "Salt",
            es: "Sal",
            de: "Salz",
            nl: "Zout"
          },
          {
            en: "Sugar",
            es: "Azúcar",
            de: "Zucker",
            nl: "Suiker"
          },
          {
            en: "Butter",
            es: "Mantequilla",
            de: "Butter",
            nl: "Boter"
          }
        ],
        correct: 0,
        explanation: {
          en: "Yeast is a living microorganism that ferments sugars in the dough, producing carbon dioxide gas which causes the bread to rise and become fluffy.",
          es: "La levadura es un microorganismo vivo que fermenta los azúcares en la masa, produciendo gas dióxido de carbono que hace que el pan suba y se vuelva esponjoso.",
          de: "Hefe ist ein lebender Mikroorganismus, der Zucker im Teig fermentiert und dabei Kohlendioxidgas produziert, das das Brot aufgehen und fluffig werden lässt.",
          nl: "Gist is een levend micro-organisme dat suikers in het deeg fermenteert en kooldioxide produceert waardoor het brood rijst en luchtig wordt."
        }
      },
      {
        question: {
          en: "Which type of flour is most commonly used for white bread?",
          es: "¿Qué tipo de harina se usa más comúnmente para el pan blanco?",
          de: "Welche Art von Mehl wird am häufigsten für Weißbrot verwendet?",
          nl: "Welk type meel wordt het meest gebruikt voor witbrood?"
        },
        options: [
          {
            en: "Rye flour",
            es: "Harina de centeno",
            de: "Roggenmehl",
            nl: "Roggemeel"
          },
          {
            en: "All-purpose wheat flour",
            es: "Harina de trigo común",
            de: "Allzweck-Weizenmehl",
            nl: "Tarwebloem voor algemeen gebruik"
          },
          {
            en: "Corn flour",
            es: "Harina de maíz",
            de: "Maismehl",
            nl: "Maïsmeel"
          },
          {
            en: "Rice flour",
            es: "Harina de arroz",
            de: "Reismehl",
            nl: "Rijstmeel"
          }
        ],
        correct: 1,
        explanation: {
          en: "All-purpose wheat flour is the most common choice for white bread because it has the right protein content to develop gluten and create a good bread structure.",
          es: "La harina de trigo común es la opción más común para el pan blanco porque tiene el contenido de proteína adecuado para desarrollar gluten y crear una buena estructura de pan.",
          de: "Allzweck-Weizenmehl ist die häufigste Wahl für Weißbrot, da es den richtigen Proteingehalt hat, um Gluten zu entwickeln und eine gute Brotstruktur zu schaffen.",
          nl: "Tarwebloem voor algemeen gebruik is de meest voorkomende keuze voor witbrood omdat het het juiste eiwitgehalte heeft om gluten te ontwikkelen en een goede broodstructuur te creëren."
        }
      },
      {
        question: {
          en: "What is sourdough bread characterized by?",
          es: "¿Por qué se caracteriza el pan de masa madre?",
          de: "Wodurch zeichnet sich Sauerteigbrot aus?",
          nl: "Waar wordt zuurdesembrood gekenmerkt door?"
        },
        options: [
          {
            en: "Sweet taste from honey",
            es: "Sabor dulce de miel",
            de: "Süßer Geschmack von Honig",
            nl: "Zoete smaak van honing"
          },
          {
            en: "Tangy flavor from natural fermentation",
            es: "Sabor ácido de fermentación natural",
            de: "Säuerlicher Geschmack durch natürliche Fermentation",
            nl: "Zure smaak door natuurlijke fermentatie"
          },
          {
            en: "Spicy flavor from herbs",
            es: "Sabor picante de hierbas",
            de: "Würziger Geschmack von Kräutern",
            nl: "Pittige smaak van kruiden"
          },
          {
            en: "Salty taste from sea salt",
            es: "Sabor salado de sal marina",
            de: "Salziger Geschmack von Meersalz",
            nl: "Zoute smaak van zeezout"
          }
        ],
        correct: 1,
        explanation: {
          en: "Sourdough bread gets its distinctive tangy flavor from natural fermentation by wild yeast and lactic acid bacteria in a sourdough starter.",
          es: "El pan de masa madre obtiene su sabor ácido distintivo de la fermentación natural por levadura silvestre y bacterias de ácido láctico en un iniciador de masa madre.",
          de: "Sauerteigbrot erhält seinen charakteristischen säuerlichen Geschmack durch natürliche Fermentation von Wildhefe und Milchsäurebakterien in einem Sauerteigstarter.",
          nl: "Zuurdesembrood krijgt zijn kenmerkende zure smaak door natuurlijke fermentatie door wilde gist en melkzuurbacteriën in een zuurdesemstarter."
        }
      },
      {
        question: {
          en: "What gives whole wheat bread its brown color?",
          es: "¿Qué le da al pan integral su color marrón?",
          de: "Was gibt Vollkornbrot seine braune Farbe?",
          nl: "Wat geeft volkoren brood zijn bruine kleur?"
        },
        options: [
          {
            en: "Added food coloring",
            es: "Colorante alimentario añadido",
            de: "Zugesetzte Lebensmittelfarbe",
            nl: "Toegevoegde kleurstof"
          },
          {
            en: "Molasses",
            es: "Melaza",
            de: "Melasse",
            nl: "Melasse"
          },
          {
            en: "Wheat bran and germ in the flour",
            es: "Salvado y germen de trigo en la harina",
            de: "Weizenkleie und Keim im Mehl",
            nl: "Tarwezemelen en -kiem in het meel"
          },
          {
            en: "Caramelized sugar",
            es: "Azúcar caramelizado",
            de: "Karamellisierter Zucker",
            nl: "Gekarameliseerde suiker"
          }
        ],
        correct: 2,
        explanation: {
          en: "Whole wheat bread is brown because it's made from whole grain flour that includes the wheat bran (outer layer) and germ (nutrient-rich core), unlike white flour which only uses the endosperm.",
          es: "El pan integral es marrón porque está hecho de harina integral que incluye el salvado de trigo (capa exterior) y el germen (núcleo rico en nutrientes), a diferencia de la harina blanca que solo usa el endospermo.",
          de: "Vollkornbrot ist braun, weil es aus Vollkornmehl hergestellt wird, das die Weizenkleie (äußere Schicht) und den Keim (nährstoffreicher Kern) enthält, im Gegensatz zu Weißmehl, das nur das Endosperm verwendet.",
          nl: "Volkoren brood is bruin omdat het gemaakt is van volkoren meel dat de tarwezemelen (buitenste laag) en kiem (voedingsrijke kern) bevat, in tegenstelling tot wit meel dat alleen het endosperm gebruikt."
        }
      },
      {
        question: {
          en: "What is a baguette?",
          es: "¿Qué es una baguette?",
          de: "Was ist ein Baguette?",
          nl: "Wat is een baguette?"
        },
        options: [
          {
            en: "A sweet German pastry",
            es: "Un pastel alemán dulce",
            de: "Ein süßes deutsches Gebäck",
            nl: "Een zoet Duits gebak"
          },
          {
            en: "A long, thin French bread with a crispy crust",
            es: "Un pan francés largo y delgado con corteza crujiente",
            de: "Ein langes, dünnes französisches Brot mit knuspriger Kruste",
            nl: "Een lang, dun Frans brood met een knapperige korst"
          },
          {
            en: "A round Italian bread",
            es: "Un pan italiano redondo",
            de: "Ein rundes italienisches Brot",
            nl: "Een rond Italiaans brood"
          },
          {
            en: "A flat Middle Eastern bread",
            es: "Un pan plano de Oriente Medio",
            de: "Ein flaches nahöstliches Brot",
            nl: "Een plat Midden-Oosters brood"
          }
        ],
        correct: 1,
        explanation: {
          en: "A baguette is a traditional French bread known for its long, thin shape and crispy golden crust with a soft, airy interior.",
          es: "Una baguette es un pan tradicional francés conocido por su forma larga y delgada y su corteza dorada crujiente con un interior suave y aireado.",
          de: "Ein Baguette ist ein traditionelles französisches Brot, das für seine lange, dünne Form und knusprige goldene Kruste mit weichem, luftigem Inneren bekannt ist.",
          nl: "Een baguette is een traditioneel Frans brood dat bekend staat om zijn lange, dunne vorm en knapperige gouden korst met een zachte, luchtige binnenkant."
        }
      },
      {
        question: {
          en: "What is the purpose of kneading bread dough?",
          es: "¿Cuál es el propósito de amasar la masa de pan?",
          de: "Was ist der Zweck des Knetens von Brotteig?",
          nl: "Wat is het doel van het kneden van brooddeeg?"
        },
        options: [
          {
            en: "To make the dough smell better",
            es: "Hacer que la masa huela mejor",
            de: "Den Teig besser riechen lassen",
            nl: "Het deeg beter laten ruiken"
          },
          {
            en: "To cool down the dough",
            es: "Enfriar la masa",
            de: "Den Teig abkühlen",
            nl: "Het deeg afkoelen"
          },
          {
            en: "To develop gluten for structure and elasticity",
            es: "Desarrollar gluten para estructura y elasticidad",
            de: "Gluten für Struktur und Elastizität entwickeln",
            nl: "Gluten ontwikkelen voor structuur en elasticiteit"
          },
          {
            en: "To add air bubbles",
            es: "Agregar burbujas de aire",
            de: "Luftblasen hinzufügen",
            nl: "Luchtbellen toevoegen"
          }
        ],
        correct: 2,
        explanation: {
          en: "Kneading develops gluten proteins in the flour, creating a network that gives bread its structure, elasticity, and ability to trap gas from yeast fermentation.",
          es: "El amasado desarrolla las proteínas de gluten en la harina, creando una red que le da al pan su estructura, elasticidad y capacidad para atrapar gas de la fermentación de levadura.",
          de: "Kneten entwickelt Glutenproteine im Mehl und schafft ein Netzwerk, das dem Brot seine Struktur, Elastizität und Fähigkeit gibt, Gas aus der Hefegärung einzufangen.",
          nl: "Kneden ontwikkelt gluteneiwitten in het meel en creëert een netwerk dat het brood zijn structuur, elasticiteit en vermogen geeft om gas van gistfermentatie vast te houden."
        }
      },
      {
        question: {
          en: "What is pita bread?",
          es: "¿Qué es el pan pita?",
          de: "Was ist Pitabrot?",
          nl: "Wat is pitabrood?"
        },
        options: [
          {
            en: "A sweet braided bread",
            es: "Un pan trenzado dulce",
            de: "Ein süßes geflochtenes Brot",
            nl: "Een zoet gevlochten brood"
          },
          {
            en: "A round, flat Middle Eastern bread that forms a pocket",
            es: "Un pan plano redondo de Oriente Medio que forma un bolsillo",
            de: "Ein rundes, flaches nahöstliches Brot, das eine Tasche bildet",
            nl: "Een rond, plat Midden-Oosters brood dat een zak vormt"
          },
          {
            en: "A dense German rye bread",
            es: "Un pan de centeno alemán denso",
            de: "Ein dichtes deutsches Roggenbrot",
            nl: "Een dicht Duits roggebrood"
          },
          {
            en: "A crusty French roll",
            es: "Un panecillo francés crujiente",
            de: "Ein knuspriges französisches Brötchen",
            nl: "Een knapperig Frans broodje"
          }
        ],
        correct: 1,
        explanation: {
          en: "Pita bread is a round, flat Middle Eastern bread that puffs up during baking, creating a hollow pocket inside that's perfect for filling with various ingredients.",
          es: "El pan pita es un pan plano redondo de Oriente Medio que se infla durante la cocción, creando un bolsillo hueco en su interior perfecto para rellenar con varios ingredientes.",
          de: "Pitabrot ist ein rundes, flaches nahöstliches Brot, das beim Backen aufbläht und eine hohle Tasche im Inneren bildet, die sich perfekt zum Füllen mit verschiedenen Zutaten eignet.",
          nl: "Pitabrood is een rond, plat Midden-Oosters brood dat tijdens het bakken opzwelt en een holle zak binnenin creëert die perfect is om te vullen met verschillende ingrediënten."
        }
      },
      {
        question: {
          en: "What type of bread is focaccia?",
          es: "¿Qué tipo de pan es la focaccia?",
          de: "Welche Art von Brot ist Focaccia?",
          nl: "Wat voor soort brood is focaccia?"
        },
        options: [
          {
            en: "A Jewish braided bread",
            es: "Un pan trenzado judío",
            de: "Ein jüdisches geflochtenes Brot",
            nl: "Een Joods gevlochten brood"
          },
          {
            en: "An Italian flatbread with olive oil and herbs",
            es: "Un pan plano italiano con aceite de oliva y hierbas",
            de: "Ein italienisches Fladenbrot mit Olivenöl und Kräutern",
            nl: "Een Italiaans platbrood met olijfolie en kruiden"
          },
          {
            en: "A Mexican tortilla",
            es: "Una tortilla mexicana",
            de: "Eine mexikanische Tortilla",
            nl: "Een Mexicaanse tortilla"
          },
          {
            en: "An Irish soda bread",
            es: "Un pan de soda irlandés",
            de: "Ein irisches Sodabrot",
            nl: "Een Iers sodabrood"
          }
        ],
        correct: 1,
        explanation: {
          en: "Focaccia is a traditional Italian flatbread that's dimpled and drizzled with olive oil, often topped with herbs, salt, and sometimes other ingredients.",
          es: "La focaccia es un pan plano tradicional italiano que está marcado con hoyuelos y rociado con aceite de oliva, a menudo cubierto con hierbas, sal y a veces otros ingredientes.",
          de: "Focaccia ist ein traditionelles italienisches Fladenbrot, das Vertiefungen hat und mit Olivenöl beträufelt wird, oft mit Kräutern, Salz und manchmal anderen Zutaten belegt.",
          nl: "Focaccia is een traditioneel Italiaans platbrood dat kuiltjes heeft en besprenkeld is met olijfolie, vaak belegd met kruiden, zout en soms andere ingrediënten."
        }
      },
      {
        question: {
          en: "What makes rye bread different from wheat bread?",
          es: "¿Qué hace que el pan de centeno sea diferente del pan de trigo?",
          de: "Was macht Roggenbrot anders als Weizenbrot?",
          nl: "Wat maakt roggebrood anders dan tarwebrood?"
        },
        options: [
          {
            en: "It's made with rye flour instead of wheat flour",
            es: "Está hecho con harina de centeno en lugar de harina de trigo",
            de: "Es wird mit Roggenmehl statt Weizenmehl hergestellt",
            nl: "Het is gemaakt met roggemeel in plaats van tarwemeel"
          },
          {
            en: "It contains chocolate",
            es: "Contiene chocolate",
            de: "Es enthält Schokolade",
            nl: "Het bevat chocolade"
          },
          {
            en: "It's always sweet",
            es: "Siempre es dulce",
            de: "Es ist immer süß",
            nl: "Het is altijd zoet"
          },
          {
            en: "It has no crust",
            es: "No tiene corteza",
            de: "Es hat keine Kruste",
            nl: "Het heeft geen korst"
          }
        ],
        correct: 0,
        explanation: {
          en: "Rye bread is made primarily from rye flour rather than wheat flour, giving it a denser texture, darker color, and distinctive earthy flavor.",
          es: "El pan de centeno está hecho principalmente de harina de centeno en lugar de harina de trigo, lo que le da una textura más densa, un color más oscuro y un sabor terroso distintivo.",
          de: "Roggenbrot wird hauptsächlich aus Roggenmehl statt aus Weizenmehl hergestellt, was ihm eine dichtere Textur, dunklere Farbe und charakteristischen erdigen Geschmack verleiht.",
          nl: "Roggebrood is voornamelijk gemaakt van roggemeel in plaats van tarwemeel, wat het een dichtere textuur, donkerdere kleur en kenmerkende aardse smaak geeft."
        }
      },
      {
        question: {
          en: "What is a pretzel traditionally shaped like?",
          es: "¿Qué forma tradicional tiene un pretzel?",
          de: "Welche Form hat eine Brezel traditionell?",
          nl: "Welke vorm heeft een pretzel traditioneel?"
        },
        options: [
          {
            en: "A circle",
            es: "Un círculo",
            de: "Ein Kreis",
            nl: "Een cirkel"
          },
          {
            en: "A square",
            es: "Un cuadrado",
            de: "Ein Quadrat",
            nl: "Een vierkant"
          },
          {
            en: "A twisted knot",
            es: "Un nudo retorcido",
            de: "Ein verdrehter Knoten",
            nl: "Een gedraaide knoop"
          },
          {
            en: "A star",
            es: "Una estrella",
            de: "Ein Stern",
            nl: "Een ster"
          }
        ],
        correct: 2,
        explanation: {
          en: "Pretzels are traditionally shaped into a distinctive twisted knot or loop, which has become an iconic symbol associated with this type of bread.",
          es: "Los pretzels tradicionalmente tienen forma de nudo o lazo retorcido distintivo, que se ha convertido en un símbolo icónico asociado con este tipo de pan.",
          de: "Brezeln haben traditionell die Form eines charakteristischen verdrehten Knotens oder einer Schleife, die zu einem ikonischen Symbol geworden ist, das mit dieser Brotart verbunden ist.",
          nl: "Pretzels hebben traditioneel de vorm van een kenmerkende gedraaide knoop of lus, die een iconisch symbool is geworden dat geassocieerd wordt met dit type brood."
        }
      },
      {
        question: {
          en: "What gives bagels their chewy texture?",
          es: "¿Qué le da a los bagels su textura masticable?",
          de: "Was gibt Bagels ihre zähe Textur?",
          nl: "Wat geeft bagels hun chewy textuur?"
        },
        options: [
          {
            en: "Adding extra sugar",
            es: "Agregar azúcar extra",
            de: "Zusätzlichen Zucker hinzufügen",
            nl: "Extra suiker toevoegen"
          },
          {
            en: "Freezing the dough",
            es: "Congelar la masa",
            de: "Den Teig einfrieren",
            nl: "Het deeg bevriezen"
          },
          {
            en: "Boiling before baking",
            es: "Hervir antes de hornear",
            de: "Vor dem Backen kochen",
            nl: "Koken voor het bakken"
          },
          {
            en: "Using only rye flour",
            es: "Usar solo harina de centeno",
            de: "Nur Roggenmehl verwenden",
            nl: "Alleen roggemeel gebruiken"
          }
        ],
        correct: 2,
        explanation: {
          en: "Bagels are boiled in water before baking, which gelatinizes the starch on the surface and creates their characteristic dense, chewy texture and shiny crust.",
          es: "Los bagels se hierven en agua antes de hornear, lo que gelatiniza el almidón en la superficie y crea su característica textura densa y masticable y corteza brillante.",
          de: "Bagels werden vor dem Backen in Wasser gekocht, was die Stärke an der Oberfläche gelatiniert und ihre charakteristische dichte, zähe Textur und glänzende Kruste erzeugt.",
          nl: "Bagels worden gekookt in water voordat ze gebakken worden, wat het zetmeel aan het oppervlak gelatineert en hun karakteristieke dichte, chewy textuur en glanzende korst creëert."
        }
      },
      {
        question: {
          en: "What is ciabatta bread known for?",
          es: "¿Por qué es conocido el pan ciabatta?",
          de: "Wofür ist Ciabatta-Brot bekannt?",
          nl: "Waar staat ciabatta brood om bekend?"
        },
        options: [
          {
            en: "Its dark color",
            es: "Su color oscuro",
            de: "Seine dunkle Farbe",
            nl: "Zijn donkere kleur"
          },
          {
            en: "Its sweet taste",
            es: "Su sabor dulce",
            de: "Seinen süßen Geschmack",
            nl: "Zijn zoete smaak"
          },
          {
            en: "Its open, airy texture with large holes",
            es: "Su textura abierta y aireada con agujeros grandes",
            de: "Seine offene, luftige Textur mit großen Löchern",
            nl: "Zijn open, luchtige textuur met grote gaten"
          },
          {
            en: "Its square shape",
            es: "Su forma cuadrada",
            de: "Seine quadratische Form",
            nl: "Zijn vierkante vorm"
          }
        ],
        correct: 2,
        explanation: {
          en: "Ciabatta, which means 'slipper' in Italian, is known for its open, airy crumb structure with large irregular holes, crispy crust, and soft interior.",
          es: "La ciabatta, que significa 'zapatilla' en italiano, es conocida por su estructura de miga abierta y aireada con grandes agujeros irregulares, corteza crujiente e interior suave.",
          de: "Ciabatta, was auf Italienisch 'Pantoffel' bedeutet, ist für seine offene, luftige Krumenstruktur mit großen unregelmäßigen Löchern, knusprige Kruste und weiches Inneres bekannt.",
          nl: "Ciabatta, wat 'slipper' betekent in het Italiaans, staat bekend om zijn open, luchtige kruimstructuur met grote onregelmatige gaten, knapperige korst en zachte binnenkant."
        }
      },
      {
        question: {
          en: "What is naan bread traditionally cooked in?",
          es: "¿En qué se cocina tradicionalmente el pan naan?",
          de: "Worin wird Naan-Brot traditionell gebacken?",
          nl: "Waarin wordt naanbrood traditioneel gebakken?"
        },
        options: [
          {
            en: "A microwave",
            es: "Un microondas",
            de: "Einer Mikrowelle",
            nl: "Een magnetron"
          },
          {
            en: "A tandoor oven",
            es: "Un horno tandoor",
            de: "Einem Tandoor-Ofen",
            nl: "Een tandooroven"
          },
          {
            en: "A frying pan",
            es: "Una sartén",
            de: "Einer Bratpfanne",
            nl: "Een koekenpan"
          },
          {
            en: "A steamer",
            es: "Una vaporera",
            de: "Einem Dampfgarer",
            nl: "Een stomer"
          }
        ],
        correct: 1,
        explanation: {
          en: "Naan bread is traditionally cooked in a tandoor, a cylindrical clay oven that reaches very high temperatures, giving the bread its characteristic charred spots and fluffy texture.",
          es: "El pan naan se cocina tradicionalmente en un tandoor, un horno de arcilla cilíndrico que alcanza temperaturas muy altas, dándole al pan sus manchas carbonizadas características y textura esponjosa.",
          de: "Naan-Brot wird traditionell in einem Tandoor gebacken, einem zylindrischen Tonofen, der sehr hohe Temperaturen erreicht und dem Brot seine charakteristischen verkohlten Flecken und fluffige Textur verleiht.",
          nl: "Naanbrood wordt traditioneel gebakken in een tandoor, een cilindrische kleioven die zeer hoge temperaturen bereikt en het brood zijn karakteristieke verbrande plekken en luchtige textuur geeft."
        }
      },
      {
        question: {
          en: "What is the crust of bread?",
          es: "¿Qué es la corteza del pan?",
          de: "Was ist die Kruste von Brot?",
          nl: "Wat is de korst van brood?"
        },
        options: [
          {
            en: "The seeds on top",
            es: "Las semillas encima",
            de: "Die Samen obendrauf",
            nl: "De zaden erop"
          },
          {
            en: "The outer layer that forms during baking",
            es: "La capa exterior que se forma durante la cocción",
            de: "Die äußere Schicht, die beim Backen entsteht",
            nl: "De buitenste laag die tijdens het bakken ontstaat"
          },
          {
            en: "The center of the bread",
            es: "El centro del pan",
            de: "Die Mitte des Brotes",
            nl: "Het midden van het brood"
          },
          {
            en: "The yeast culture",
            es: "El cultivo de levadura",
            de: "Die Hefekultur",
            nl: "De gistcultuur"
          }
        ],
        correct: 1,
        explanation: {
          en: "The crust is the outer layer of bread that forms during baking when the surface is exposed to high heat, creating a firmer, often golden-brown exterior.",
          es: "La corteza es la capa exterior del pan que se forma durante la cocción cuando la superficie se expone al calor alto, creando un exterior más firme, a menudo de color marrón dorado.",
          de: "Die Kruste ist die äußere Schicht des Brotes, die beim Backen entsteht, wenn die Oberfläche hoher Hitze ausgesetzt wird und ein festeres, oft goldbraunes Äußeres entsteht.",
          nl: "De korst is de buitenste laag van brood die tijdens het bakken ontstaat wanneer het oppervlak wordt blootgesteld aan hoge hitte, waardoor een stevigere, vaak goudbruine buitenkant ontstaat."
        }
      },
      {
        question: {
          en: "What is the soft inside part of bread called?",
          es: "¿Cómo se llama la parte suave del interior del pan?",
          de: "Wie nennt man den weichen inneren Teil des Brotes?",
          nl: "Hoe heet het zachte binnenste deel van brood?"
        },
        options: [
          {
            en: "Crumb",
            es: "Miga",
            de: "Krume",
            nl: "Kruim"
          },
          {
            en: "Core",
            es: "Núcleo",
            de: "Kern",
            nl: "Kern"
          },
          {
            en: "Filling",
            es: "Relleno",
            de: "Füllung",
            nl: "Vulling"
          },
          {
            en: "Dough",
            es: "Masa",
            de: "Teig",
            nl: "Deeg"
          }
        ],
        correct: 0,
        explanation: {
          en: "The soft interior of bread is called the crumb, which refers to the texture and structure of the inner part of the bread, distinct from the crust.",
          es: "El interior suave del pan se llama miga, que se refiere a la textura y estructura de la parte interna del pan, distinta de la corteza.",
          de: "Das weiche Innere des Brotes wird Krume genannt, was sich auf die Textur und Struktur des inneren Teils des Brotes bezieht, im Unterschied zur Kruste.",
          nl: "De zachte binnenkant van brood wordt de kruim genoemd, wat verwijst naar de textuur en structuur van het binnenste deel van het brood, onderscheiden van de korst."
        }
      },
      {
        question: {
          en: "Which country is famous for croissants?",
          es: "¿Qué país es famoso por los croissants?",
          de: "Welches Land ist berühmt für Croissants?",
          nl: "Welk land is beroemd om croissants?"
        },
        options: [
          {
            en: "Italy",
            es: "Italia",
            de: "Italien",
            nl: "Italië"
          },
          {
            en: "Spain",
            es: "España",
            de: "Spanien",
            nl: "Spanje"
          },
          {
            en: "France",
            es: "Francia",
            de: "Frankreich",
            nl: "Frankrijk"
          },
          {
            en: "Germany",
            es: "Alemania",
            de: "Deutschland",
            nl: "Duitsland"
          }
        ],
        correct: 2,
        explanation: {
          en: "France is famous for croissants, the buttery, flaky, crescent-shaped pastries that have become an iconic symbol of French baking and cuisine.",
          es: "Francia es famosa por los croissants, los pasteles mantecosos, hojaldrados y en forma de media luna que se han convertido en un símbolo icónico de la repostería y cocina francesa.",
          de: "Frankreich ist berühmt für Croissants, die butterigen, blättrigen, halbmondförmigen Gebäckstücke, die zu einem ikonischen Symbol der französischen Backkunst und Küche geworden sind.",
          nl: "Frankrijk is beroemd om croissants, de boterige, bladerdeegachtige, halvemaanvormige gebakjes die een iconisch symbool zijn geworden van Franse bakkunst en keuken."
        }
      },
      {
        question: {
          en: "What makes bread dough sticky?",
          es: "¿Qué hace que la masa de pan sea pegajosa?",
          de: "Was macht Brotteig klebrig?",
          nl: "Wat maakt brooddeeg plakkerig?"
        },
        options: [
          {
            en: "Too much flour",
            es: "Demasiada harina",
            de: "Zu viel Mehl",
            nl: "Te veel meel"
          },
          {
            en: "High water content",
            es: "Alto contenido de agua",
            de: "Hoher Wassergehalt",
            nl: "Hoog watergehalte"
          },
          {
            en: "Cold temperature",
            es: "Temperatura fría",
            de: "Kalte Temperatur",
            nl: "Koude temperatuur"
          },
          {
            en: "Adding oil",
            es: "Agregar aceite",
            de: "Öl hinzufügen",
            nl: "Olie toevoegen"
          }
        ],
        correct: 1,
        explanation: {
          en: "Bread dough becomes sticky when it has a high water content relative to the flour. The moisture makes the dough wet and difficult to handle without it sticking to surfaces.",
          es: "La masa de pan se vuelve pegajosa cuando tiene un alto contenido de agua en relación con la harina. La humedad hace que la masa esté húmeda y sea difícil de manejar sin que se pegue a las superficies.",
          de: "Brotteig wird klebrig, wenn er im Verhältnis zum Mehl einen hohen Wassergehalt hat. Die Feuchtigkeit macht den Teig nass und schwierig zu handhaben, ohne dass er an Oberflächen klebt.",
          nl: "Brooddeeg wordt plakkerig wanneer het een hoog watergehalte heeft ten opzichte van het meel. Het vocht maakt het deeg nat en moeilijk te hanteren zonder dat het aan oppervlakken plakt."
        }
      },
      {
        question: {
          en: "What happens if you add too much salt to bread dough?",
          es: "¿Qué sucede si agregas demasiada sal a la masa de pan?",
          de: "Was passiert, wenn man zu viel Salz in den Brotteig gibt?",
          nl: "Wat gebeurt er als je te veel zout aan brooddeeg toevoegt?"
        },
        options: [
          {
            en: "The bread becomes sweeter",
            es: "El pan se vuelve más dulce",
            de: "Das Brot wird süßer",
            nl: "Het brood wordt zoeter"
          },
          {
            en: "It slows down or kills the yeast",
            es: "Ralentiza o mata la levadura",
            de: "Es verlangsamt oder tötet die Hefe",
            nl: "Het vertraagt of doodt de gist"
          },
          {
            en: "The bread rises faster",
            es: "El pan sube más rápido",
            de: "Das Brot geht schneller auf",
            nl: "Het brood rijst sneller"
          },
          {
            en: "Nothing changes",
            es: "Nada cambia",
            de: "Es ändert sich nichts",
            nl: "Er verandert niets"
          }
        ],
        correct: 1,
        explanation: {
          en: "Too much salt can slow down or even kill the yeast by drawing out moisture and creating an environment where yeast cannot function properly, resulting in bread that doesn't rise well.",
          es: "Demasiada sal puede ralentizar o incluso matar la levadura al extraer la humedad y crear un ambiente donde la levadura no puede funcionar correctamente, resultando en pan que no sube bien.",
          de: "Zu viel Salz kann die Hefe verlangsamen oder sogar abtöten, indem es Feuchtigkeit entzieht und eine Umgebung schafft, in der Hefe nicht richtig funktionieren kann, was zu Brot führt, das nicht gut aufgeht.",
          nl: "Te veel zout kan de gist vertragen of zelfs doden door vocht te onttrekken en een omgeving te creëren waarin gist niet goed kan functioneren, wat resulteert in brood dat niet goed rijst."
        }
      },
      {
        question: {
          en: "What is the difference between baking powder and yeast in bread making?",
          es: "¿Cuál es la diferencia entre el polvo de hornear y la levadura en la elaboración del pan?",
          de: "Was ist der Unterschied zwischen Backpulver und Hefe beim Brotbacken?",
          nl: "Wat is het verschil tussen bakpoeder en gist bij het brood bakken?"
        },
        options: [
          {
            en: "They are exactly the same thing",
            es: "Son exactamente lo mismo",
            de: "Sie sind genau dasselbe",
            nl: "Ze zijn precies hetzelfde"
          },
          {
            en: "Yeast is alive and ferments, baking powder is a chemical leavener",
            es: "La levadura está viva y fermenta, el polvo de hornear es un leudante químico",
            de: "Hefe ist lebendig und fermentiert, Backpulver ist ein chemisches Treibmittel",
            nl: "Gist is levend en fermenteert, bakpoeder is een chemisch rijsmiddel"
          },
          {
            en: "Baking powder makes bread brown",
            es: "El polvo de hornear hace que el pan sea marrón",
            de: "Backpulver macht Brot braun",
            nl: "Bakpoeder maakt brood bruin"
          },
          {
            en: "Yeast only works in cold temperatures",
            es: "La levadura solo funciona en temperaturas frías",
            de: "Hefe funktioniert nur bei kalten Temperaturen",
            nl: "Gist werkt alleen bij koude temperaturen"
          }
        ],
        correct: 1,
        explanation: {
          en: "Yeast is a living organism that ferments sugars and produces carbon dioxide slowly over time, while baking powder is a chemical leavening agent that reacts quickly when mixed with liquid and heat.",
          es: "La levadura es un organismo vivo que fermenta azúcares y produce dióxido de carbono lentamente con el tiempo, mientras que el polvo de hornear es un agente leudante químico que reacciona rápidamente cuando se mezcla con líquido y calor.",
          de: "Hefe ist ein lebender Organismus, der Zucker fermentiert und über Zeit langsam Kohlendioxid produziert, während Backpulver ein chemisches Treibmittel ist, das schnell reagiert, wenn es mit Flüssigkeit und Hitze gemischt wird.",
          nl: "Gist is een levend organisme dat suikers fermenteert en langzaam kooldioxide produceert, terwijl bakpoeder een chemisch rijsmiddel is dat snel reageert wanneer het gemengd wordt met vloeistof en warmte."
        }
      },
      {
        question: {
          en: "What are the four basic ingredients needed for simple bread?",
          es: "¿Cuáles son los cuatro ingredientes básicos necesarios para el pan simple?",
          de: "Was sind die vier grundlegenden Zutaten für einfaches Brot?",
          nl: "Wat zijn de vier basisingrediënten die nodig zijn voor eenvoudig brood?"
        },
        options: [
          {
            en: "Flour, eggs, milk, butter",
            es: "Harina, huevos, leche, mantequilla",
            de: "Mehl, Eier, Milch, Butter",
            nl: "Meel, eieren, melk, boter"
          },
          {
            en: "Flour, water, salt, yeast",
            es: "Harina, agua, sal, levadura",
            de: "Mehl, Wasser, Salz, Hefe",
            nl: "Meel, water, zout, gist"
          },
          {
            en: "Flour, sugar, oil, baking soda",
            es: "Harina, azúcar, aceite, bicarbonato de sodio",
            de: "Mehl, Zucker, Öl, Natron",
            nl: "Meel, suiker, olie, zuiveringszout"
          },
          {
            en: "Flour, cream, salt, sugar",
            es: "Harina, crema, sal, azúcar",
            de: "Mehl, Sahne, Salz, Zucker",
            nl: "Meel, room, zout, suiker"
          }
        ],
        correct: 1,
        explanation: {
          en: "The four essential ingredients for making basic bread are flour (provides structure), water (hydrates the flour), salt (adds flavor and controls fermentation), and yeast (makes the bread rise).",
          es: "Los cuatro ingredientes esenciales para hacer pan básico son harina (proporciona estructura), agua (hidrata la harina), sal (añade sabor y controla la fermentación) y levadura (hace que el pan suba).",
          de: "Die vier wesentlichen Zutaten für die Herstellung von Grundbrot sind Mehl (liefert Struktur), Wasser (hydratisiert das Mehl), Salz (fügt Geschmack hinzu und kontrolliert die Fermentation) und Hefe (lässt das Brot aufgehen).",
          nl: "De vier essentiële ingrediënten voor het maken van basisbrood zijn meel (geeft structuur), water (hydrateert het meel), zout (voegt smaak toe en regelt fermentatie) en gist (laat het brood rijzen)."
        }
      },
      {
        question: {
          en: "What type of bread is flatbread?",
          es: "¿Qué tipo de pan es el pan plano?",
          de: "Was ist Fladenbrot?",
          nl: "Wat voor soort brood is platbrood?"
        },
        options: [
          {
            en: "Bread without yeast that doesn't rise much",
            es: "Pan sin levadura que no sube mucho",
            de: "Brot ohne Hefe, das nicht viel aufgeht",
            nl: "Brood zonder gist dat niet veel rijst"
          },
          {
            en: "Bread baked in a flat pan",
            es: "Pan horneado en una sartén plana",
            de: "In einer flachen Pfanne gebackenes Brot",
            nl: "Brood gebakken in een platte pan"
          },
          {
            en: "Bread that's been pressed flat",
            es: "Pan que ha sido prensado plano",
            de: "Brot, das flach gepresst wurde",
            nl: "Brood dat plat is geperst"
          },
          {
            en: "Stale bread",
            es: "Pan duro",
            de: "Altes Brot",
            nl: "Oud brood"
          }
        ],
        correct: 0,
        explanation: {
          en: "Flatbread is unleavened or minimally leavened bread that stays relatively flat. Examples include tortillas, pita, and chapati.",
          es: "El pan plano es pan sin levadura o mínimamente leudado que permanece relativamente plano. Ejemplos incluyen tortillas, pita y chapati.",
          de: "Fladenbrot ist ungesäuertes oder minimal gesäuertes Brot, das relativ flach bleibt. Beispiele sind Tortillas, Pita und Chapati.",
          nl: "Platbrood is ongezuurd of minimaal gerezen brood dat relatief plat blijft. Voorbeelden zijn tortillas, pita en chapati."
        }
      },
      {
        question: {
          en: "What gives pumpernickel bread its dark color?",
          es: "¿Qué le da al pan pumpernickel su color oscuro?",
          de: "Was gibt Pumpernickel seine dunkle Farbe?",
          nl: "Wat geeft pumpernickel brood zijn donkere kleur?"
        },
        options: [
          {
            en: "Dark rye flour and long baking time",
            es: "Harina de centeno oscura y largo tiempo de horneado",
            de: "Dunkles Roggenmehl und lange Backzeit",
            nl: "Donker roggemeel en lange baktijd"
          },
          {
            en: "Food coloring",
            es: "Colorante alimentario",
            de: "Lebensmittelfarbe",
            nl: "Voedselkleuring"
          },
          {
            en: "Black sesame seeds",
            es: "Semillas de sésamo negro",
            de: "Schwarze Sesamsamen",
            nl: "Zwarte sesamzaadjes"
          },
          {
            en: "Chocolate",
            es: "Chocolate",
            de: "Schokolade",
            nl: "Chocolade"
          }
        ],
        correct: 0,
        explanation: {
          en: "Pumpernickel gets its distinctive dark color from rye flour and the Maillard reaction that occurs during very long, slow baking at low temperatures.",
          es: "El pumpernickel obtiene su distintivo color oscuro de la harina de centeno y la reacción de Maillard que ocurre durante el horneado muy largo y lento a temperaturas bajas.",
          de: "Pumpernickel erhält seine charakteristische dunkle Farbe durch Roggenmehl und die Maillard-Reaktion, die während des sehr langen, langsamen Backens bei niedrigen Temperaturen auftritt.",
          nl: "Pumpernickel krijgt zijn kenmerkende donkere kleur van roggemeel en de Maillard-reactie die optreedt tijdens zeer lang, langzaam bakken op lage temperaturen."
        }
      },
      {
        question: {
          en: "Which bread is known for having a long, thin shape?",
          es: "¿Qué pan es conocido por tener una forma larga y delgada?",
          de: "Welches Brot ist für seine lange, dünne Form bekannt?",
          nl: "Welk brood staat bekend om zijn lange, dunne vorm?"
        },
        options: [
          {
            en: "Baguette",
            es: "Baguette",
            de: "Baguette",
            nl: "Baguette"
          },
          {
            en: "Pita",
            es: "Pita",
            de: "Pita",
            nl: "Pita"
          },
          {
            en: "Focaccia",
            es: "Focaccia",
            de: "Focaccia",
            nl: "Focaccia"
          },
          {
            en: "Brioche",
            es: "Brioche",
            de: "Brioche",
            nl: "Brioche"
          }
        ],
        correct: 0,
        explanation: {
          en: "The baguette is a long, thin French bread with a crispy crust and soft interior, traditionally about 65 cm long and 5-6 cm wide.",
          es: "La baguette es un pan francés largo y delgado con corteza crujiente e interior suave, tradicionalmente de unos 65 cm de largo y 5-6 cm de ancho.",
          de: "Das Baguette ist ein langes, dünnes französisches Brot mit knuspriger Kruste und weichem Inneren, traditionell etwa 65 cm lang und 5-6 cm breit.",
          nl: "De baguette is een lang, dun Frans brood met een knapperige korst en zachte binnenkant, traditioneel ongeveer 65 cm lang en 5-6 cm breed."
        }
      },
      {
        question: {
          en: "What is sourdough bread made with instead of commercial yeast?",
          es: "¿Con qué se hace el pan de masa madre en lugar de levadura comercial?",
          de: "Womit wird Sauerteigbrot anstelle von kommerzieller Hefe hergestellt?",
          nl: "Waarmee wordt zuurdesembrood gemaakt in plaats van commerciële gist?"
        },
        options: [
          {
            en: "A starter culture of wild yeast and bacteria",
            es: "Un cultivo iniciador de levadura silvestre y bacterias",
            de: "Eine Starterkultur aus Wildhefe und Bakterien",
            nl: "Een startcultuur van wilde gist en bacteriën"
          },
          {
            en: "Baking soda",
            es: "Bicarbonato de sodio",
            de: "Natron",
            nl: "Zuiveringszout"
          },
          {
            en: "Vinegar",
            es: "Vinagre",
            de: "Essig",
            nl: "Azijn"
          },
          {
            en: "Lemon juice",
            es: "Jugo de limón",
            de: "Zitronensaft",
            nl: "Citroensap"
          }
        ],
        correct: 0,
        explanation: {
          en: "Sourdough bread is leavened using a sourdough starter, which is a fermented mixture of flour and water containing wild yeast and lactic acid bacteria that give it its characteristic tangy flavor.",
          es: "El pan de masa madre se leuda usando un iniciador de masa madre, que es una mezcla fermentada de harina y agua que contiene levadura silvestre y bacterias de ácido láctico que le dan su característico sabor ácido.",
          de: "Sauerteigbrot wird mit einem Sauerteigstarter gesäuert, einer fermentierten Mischung aus Mehl und Wasser, die Wildhefe und Milchsäurebakterien enthält, die ihm seinen charakteristischen säuerlichen Geschmack verleihen.",
          nl: "Zuurdesembrood wordt gerezen met een zuurdesemstarter, een gefermenteerd mengsel van meel en water met wilde gist en melkzuurbacteriën die het zijn karakteristieke zure smaak geven."
        }
      },
      {
        question: {
          en: "What is rye bread made from?",
          es: "¿De qué está hecho el pan de centeno?",
          de: "Woraus wird Roggenbrot hergestellt?",
          nl: "Waar is roggebrood van gemaakt?"
        },
        options: [
          {
            en: "Rye flour",
            es: "Harina de centeno",
            de: "Roggenmehl",
            nl: "Roggemeel"
          },
          {
            en: "Wheat flour only",
            es: "Solo harina de trigo",
            de: "Nur Weizenmehl",
            nl: "Alleen tarwemeel"
          },
          {
            en: "Corn flour",
            es: "Harina de maíz",
            de: "Maismehl",
            nl: "Maïsmeel"
          },
          {
            en: "Rice flour",
            es: "Harina de arroz",
            de: "Reismehl",
            nl: "Rijstmeel"
          }
        ],
        correct: 0,
        explanation: {
          en: "Rye bread is made from rye flour, which gives it a denser texture and darker color than wheat bread. It often has a slightly sour, earthy flavor.",
          es: "El pan de centeno está hecho de harina de centeno, que le da una textura más densa y un color más oscuro que el pan de trigo. A menudo tiene un sabor ligeramente ácido y terroso.",
          de: "Roggenbrot wird aus Roggenmehl hergestellt, was ihm eine dichtere Textur und dunklere Farbe als Weizenbrot verleiht. Es hat oft einen leicht säuerlichen, erdigen Geschmack.",
          nl: "Roggebrood is gemaakt van roggemeel, wat het een dichtere textuur en donkerder kleur geeft dan tarwebrood. Het heeft vaak een licht zure, aardse smaak."
        }
      },
      {
        question: {
          en: "What is a croissant?",
          es: "¿Qué es un croissant?",
          de: "Was ist ein Croissant?",
          nl: "Wat is een croissant?"
        },
        options: [
          {
            en: "A flaky, buttery French pastry bread in a crescent shape",
            es: "Un pan de hojaldre mantecoso francés en forma de media luna",
            de: "Ein blättriges, butteriges französisches Gebäckbrot in Halbmondform",
            nl: "Een bladerdeerachtig, boterig Frans gebakbrood in halvemaanvorm"
          },
          {
            en: "A sweet cake",
            es: "Un pastel dulce",
            de: "Ein süßer Kuchen",
            nl: "Een zoete cake"
          },
          {
            en: "A type of pizza",
            es: "Un tipo de pizza",
            de: "Eine Art Pizza",
            nl: "Een soort pizza"
          },
          {
            en: "A sandwich",
            es: "Un sándwich",
            de: "Ein Sandwich",
            nl: "Een sandwich"
          }
        ],
        correct: 0,
        explanation: {
          en: "A croissant is a buttery, flaky pastry made from laminated dough (butter folded into dough multiple times), typically shaped like a crescent. It's a classic French breakfast item.",
          es: "Un croissant es un hojaldre mantecoso hecho de masa laminada (mantequilla doblada en la masa varias veces), típicamente con forma de media luna. Es un clásico desayuno francés.",
          de: "Ein Croissant ist ein butteriges, blättriges Gebäck aus laminiertem Teig (Butter mehrmals in den Teig gefaltet), typischerweise in Halbmondform. Es ist ein klassisches französisches Frühstücksgebäck.",
          nl: "Een croissant is een boterig, bladerdeerachtig gebak gemaakt van gelamineerd deeg (boter meerdere keren in het deeg gevouwen), meestal halvemaanvormig. Het is een klassiek Frans ontbijtitem."
        }
      },
      {
        question: {
          en: "What is focaccia topped with?",
          es: "¿Con qué se cubre la focaccia?",
          de: "Womit wird Focaccia belegt?",
          nl: "Waarmee wordt focaccia belegd?"
        },
        options: [
          {
            en: "Olive oil and herbs",
            es: "Aceite de oliva y hierbas",
            de: "Olivenöl und Kräuter",
            nl: "Olijfolie en kruiden"
          },
          {
            en: "Chocolate",
            es: "Chocolate",
            de: "Schokolade",
            nl: "Chocolade"
          },
          {
            en: "Jam",
            es: "Mermelada",
            de: "Marmelade",
            nl: "Jam"
          },
          {
            en: "Peanut butter",
            es: "Mantequilla de maní",
            de: "Erdnussbutter",
            nl: "Pindakaas"
          }
        ],
        correct: 0,
        explanation: {
          en: "Focaccia is an Italian flatbread traditionally topped with olive oil, salt, and herbs like rosemary. It can also be topped with tomatoes, olives, or onions.",
          es: "La focaccia es un pan plano italiano tradicionalmente cubierto con aceite de oliva, sal y hierbas como romero. También puede cubrirse con tomates, aceitunas o cebollas.",
          de: "Focaccia ist ein italienisches Fladenbrot, das traditionell mit Olivenöl, Salz und Kräutern wie Rosmarin belegt wird. Es kann auch mit Tomaten, Oliven oder Zwiebeln belegt werden.",
          nl: "Focaccia is een Italiaans platbrood traditioneel belegd met olijfolie, zout en kruiden zoals rozemarijn. Het kan ook belegd worden met tomaten, olijven of uien."
        }
      },
      {
        question: {
          en: "What is challah bread?",
          es: "¿Qué es el pan challah?",
          de: "Was ist Challah-Brot?",
          nl: "Wat is challah brood?"
        },
        options: [
          {
            en: "A braided Jewish bread traditionally eaten on the Sabbath",
            es: "Un pan judío trenzado tradicionalmente comido en el Sabbath",
            de: "Ein geflochtenes jüdisches Brot, das traditionell am Sabbat gegessen wird",
            nl: "Een gevlochten Joods brood traditioneel gegeten op de Sabbat"
          },
          {
            en: "Indian flatbread",
            es: "Pan plano indio",
            de: "Indisches Fladenbrot",
            nl: "Indiaas platbrood"
          },
          {
            en: "Mexican cornbread",
            es: "Pan de maíz mexicano",
            de: "Mexikanisches Maisbrot",
            nl: "Mexicaans maïsbrood"
          },
          {
            en: "Italian garlic bread",
            es: "Pan de ajo italiano",
            de: "Italienisches Knoblauchbrot",
            nl: "Italiaans knoflookbrood"
          }
        ],
        correct: 0,
        explanation: {
          en: "Challah is a traditional Jewish egg bread that is usually braided and eaten on ceremonial occasions like the Sabbath and Jewish holidays. It has a rich, slightly sweet flavor.",
          es: "El challah es un pan de huevo judío tradicional que generalmente está trenzado y se come en ocasiones ceremoniales como el Sabbath y las festividades judías. Tiene un sabor rico y ligeramente dulce.",
          de: "Challah ist ein traditionelles jüdisches Eierbrot, das normalerweise geflochten wird und zu zeremoniellen Anlässen wie dem Sabbat und jüdischen Feiertagen gegessen wird. Es hat einen reichhaltigen, leicht süßlichen Geschmack.",
          nl: "Challah is een traditioneel Joods eierbrood dat meestal gevlochten is en gegeten wordt bij ceremoniële gelegenheden zoals de Sabbat en Joodse feestdagen. Het heeft een rijke, licht zoete smaak."
        }
      },
      {
        question: {
          en: "What is the main characteristic of whole wheat bread?",
          es: "¿Cuál es la característica principal del pan de trigo integral?",
          de: "Was ist das Hauptmerkmal von Vollkornbrot?",
          nl: "Wat is het belangrijkste kenmerk van volkoren brood?"
        },
        options: [
          {
            en: "Made with whole grain flour including the bran and germ",
            es: "Hecho con harina de grano entero incluyendo el salvado y el germen",
            de: "Hergestellt aus Vollkornmehl einschließlich Kleie und Keim",
            nl: "Gemaakt met volkorenmeel inclusief zemelen en kiem"
          },
          {
            en: "Contains wheat straw",
            es: "Contiene paja de trigo",
            de: "Enthält Weizenstroh",
            nl: "Bevat tarwestro"
          },
          {
            en: "Colored with brown dye",
            es: "Coloreado con tinte marrón",
            de: "Mit brauner Farbe gefärbt",
            nl: "Gekleurd met bruine kleurstof"
          },
          {
            en: "Baked for a whole week",
            es: "Horneado durante una semana entera",
            de: "Eine ganze Woche gebacken",
            nl: "Een hele week gebakken"
          }
        ],
        correct: 0,
        explanation: {
          en: "Whole wheat bread is made from flour that uses the entire wheat kernel including the bran (outer layer), germ (nutrient-rich core), and endosperm. This makes it more nutritious and fiber-rich than white bread.",
          es: "El pan de trigo integral está hecho de harina que usa todo el grano de trigo incluyendo el salvado (capa externa), el germen (núcleo rico en nutrientes) y el endospermo. Esto lo hace más nutritivo y rico en fibra que el pan blanco.",
          de: "Vollkornbrot wird aus Mehl hergestellt, das das gesamte Weizenkorn einschließlich der Kleie (äußere Schicht), des Keims (nährstoffreicher Kern) und des Endosperms verwendet. Dies macht es nahrhafter und ballaststoffreicher als Weißbrot.",
          nl: "Volkoren brood is gemaakt van meel dat de hele tarwekorrel gebruikt inclusief de zemelen (buitenste laag), kiem (voedingsrijke kern) en endosperm. Dit maakt het voedzamer en vezelrijker dan witbrood."
        }
      },
      {
        question: {
          en: "What makes pita bread puff up when baking?",
          es: "¿Qué hace que el pan pita se infle al hornear?",
          de: "Was lässt Pita-Brot beim Backen aufblähen?",
          nl: "Wat zorgt ervoor dat pita brood opbolt tijdens het bakken?"
        },
        options: [
          {
            en: "Steam created inside from high heat",
            es: "Vapor creado dentro por el calor alto",
            de: "Dampf, der durch hohe Hitze im Inneren entsteht",
            nl: "Stoom gecreëerd van binnenuit door hoge hitte"
          },
          {
            en: "Air pumped in by machine",
            es: "Aire bombeado por máquina",
            de: "Luft, die von einer Maschine eingepumpt wird",
            nl: "Lucht gepompt door machine"
          },
          {
            en: "Baking soda reaction",
            es: "Reacción del bicarbonato de sodio",
            de: "Natron-Reaktion",
            nl: "Zuiveringszout reactie"
          },
          {
            en: "Chemical additives",
            es: "Aditivos químicos",
            de: "Chemische Zusatzstoffe",
            nl: "Chemische additieven"
          }
        ],
        correct: 0,
        explanation: {
          en: "When pita bread is baked at very high temperatures (around 475°F/245°C), the moisture in the dough quickly turns to steam, causing the bread to puff up and form a pocket in the middle.",
          es: "Cuando el pan pita se hornea a temperaturas muy altas (alrededor de 475°F/245°C), la humedad en la masa se convierte rápidamente en vapor, causando que el pan se infle y forme un bolsillo en el medio.",
          de: "Wenn Pita-Brot bei sehr hohen Temperaturen (etwa 245°C) gebacken wird, verwandelt sich die Feuchtigkeit im Teig schnell in Dampf, wodurch das Brot aufbläht und eine Tasche in der Mitte bildet.",
          nl: "Wanneer pita brood gebakken wordt op zeer hoge temperaturen (ongeveer 245°C), verandert het vocht in het deeg snel in stoom, waardoor het brood opbolt en een zak in het midden vormt."
        }
      },
      {
        question: {
          en: "What is brioche known for?",
          es: "¿Por qué es conocido el brioche?",
          de: "Wofür ist Brioche bekannt?",
          nl: "Waar staat brioche om bekend?"
        },
        options: [
          {
            en: "Being rich in butter and eggs",
            es: "Ser rico en mantequilla y huevos",
            de: "Reich an Butter und Eiern",
            nl: "Rijk zijn aan boter en eieren"
          },
          {
            en: "Having no fat content",
            es: "No tener contenido de grasa",
            de: "Keinen Fettgehalt haben",
            nl: "Geen vetgehalte hebben"
          },
          {
            en: "Being very salty",
            es: "Ser muy salado",
            de: "Sehr salzig sein",
            nl: "Erg zout zijn"
          },
          {
            en: "Being frozen before serving",
            es: "Estar congelado antes de servir",
            de: "Vor dem Servieren gefroren",
            nl: "Bevroren zijn voor serveren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Brioche is a French bread enriched with butter, eggs, and sometimes sugar and milk, giving it a rich, tender, and slightly sweet flavor. It has a golden color and soft, pillowy texture.",
          es: "El brioche es un pan francés enriquecido con mantequilla, huevos y, a veces, azúcar y leche, que le da un sabor rico, tierno y ligeramente dulce. Tiene un color dorado y una textura suave y esponjosa.",
          de: "Brioche ist ein französisches Brot, das mit Butter, Eiern und manchmal Zucker und Milch angereichert ist, was ihm einen reichhaltigen, zarten und leicht süßlichen Geschmack verleiht. Es hat eine goldene Farbe und eine weiche, kissenartige Textur.",
          nl: "Brioche is een Frans brood verrijkt met boter, eieren en soms suiker en melk, wat het een rijke, zachte en licht zoete smaak geeft. Het heeft een gouden kleur en zachte, luchtige textuur."
        }
      },
      {
        question: {
          en: "What is multigrain bread?",
          es: "¿Qué es el pan multigrano?",
          de: "Was ist Mehrkornbrot?",
          nl: "Wat is meergranenbrood?"
        },
        options: [
          {
            en: "Bread made with multiple types of grains and seeds",
            es: "Pan hecho con múltiples tipos de granos y semillas",
            de: "Brot aus mehreren Arten von Getreide und Samen",
            nl: "Brood gemaakt met meerdere soorten granen en zaden"
          },
          {
            en: "Bread baked multiple times",
            es: "Pan horneado varias veces",
            de: "Mehrmals gebackenes Brot",
            nl: "Meerdere keren gebakken brood"
          },
          {
            en: "Bread with multiple colors",
            es: "Pan con múltiples colores",
            de: "Brot mit mehreren Farben",
            nl: "Brood met meerdere kleuren"
          },
          {
            en: "Very large bread loaves",
            es: "Hogazas de pan muy grandes",
            de: "Sehr große Brotlaibe",
            nl: "Zeer grote broodbroden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Multigrain bread contains two or more types of grains such as wheat, oats, barley, millet, or quinoa, often with added seeds like flax, sesame, or sunflower for extra nutrition and texture.",
          es: "El pan multigrano contiene dos o más tipos de granos como trigo, avena, cebada, mijo o quinoa, a menudo con semillas añadidas como linaza, sésamo o girasol para nutrición y textura adicionales.",
          de: "Mehrkornbrot enthält zwei oder mehr Arten von Getreide wie Weizen, Hafer, Gerste, Hirse oder Quinoa, oft mit zugesetzten Samen wie Leinsamen, Sesam oder Sonnenblumenkernen für zusätzliche Ernährung und Textur.",
          nl: "Meergranenbrood bevat twee of meer soorten granen zoals tarwe, haver, gerst, gierst of quinoa, vaak met toegevoegde zaden zoals lijnzaad, sesam of zonnebloempitten voor extra voeding en textuur."
        }
      },
      {
        question: {
          en: "What temperature is best for letting bread dough rise?",
          es: "¿Qué temperatura es mejor para dejar que la masa de pan suba?",
          de: "Welche Temperatur ist am besten, um Brotteig gehen zu lassen?",
          nl: "Welke temperatuur is het beste om brooddeeg te laten rijzen?"
        },
        options: [
          {
            en: "Warm (around 75-80°F / 24-27°C)",
            es: "Cálido (alrededor de 75-80°F / 24-27°C)",
            de: "Warm (etwa 24-27°C)",
            nl: "Warm (ongeveer 24-27°C)"
          },
          {
            en: "Freezing cold",
            es: "Frío congelante",
            de: "Eiskalt",
            nl: "IJskoud"
          },
          {
            en: "Boiling hot",
            es: "Hirviendo",
            de: "Siedend heiß",
            nl: "Kokend heet"
          },
          {
            en: "Room temperature doesn't matter",
            es: "La temperatura ambiente no importa",
            de: "Raumtemperatur ist egal",
            nl: "Kamertemperatuur maakt niet uit"
          }
        ],
        correct: 0,
        explanation: {
          en: "Bread dough rises best in a warm environment around 75-80°F (24-27°C) because yeast is most active at these temperatures. Too cold and it rises slowly; too hot and it can kill the yeast.",
          es: "La masa de pan sube mejor en un ambiente cálido alrededor de 75-80°F (24-27°C) porque la levadura es más activa a estas temperaturas. Demasiado frío y sube lentamente; demasiado caliente y puede matar la levadura.",
          de: "Brotteig geht am besten in einer warmen Umgebung um 24-27°C, weil Hefe bei diesen Temperaturen am aktivsten ist. Zu kalt und es geht langsam; zu heiß und es kann die Hefe töten.",
          nl: "Brooddeeg rijst het beste in een warme omgeving rond 24-27°C omdat gist het meest actief is bij deze temperaturen. Te koud en het rijst langzaam; te heet en het kan de gist doden."
        }
      },
      {
        question: {
          en: "What is a tortilla?",
          es: "¿Qué es una tortilla?",
          de: "Was ist eine Tortilla?",
          nl: "Wat is een tortilla?"
        },
        options: [
          {
            en: "A thin, flat unleavened bread from Mexico",
            es: "Un pan plano y delgado sin levadura de México",
            de: "Ein dünnes, flaches ungesäuertes Brot aus Mexiko",
            nl: "Een dun, plat ongezuurd brood uit Mexico"
          },
          {
            en: "A Spanish egg dish",
            es: "Un plato de huevos español",
            de: "Ein spanisches Eiergericht",
            nl: "Een Spaans ei gerecht"
          },
          {
            en: "An Italian pasta",
            es: "Una pasta italiana",
            de: "Eine italienische Pasta",
            nl: "Een Italiaanse pasta"
          },
          {
            en: "A French pastry",
            es: "Un pastel francés",
            de: "Ein französisches Gebäck",
            nl: "Een Frans gebak"
          }
        ],
        correct: 0,
        explanation: {
          en: "A tortilla is a thin, flat, unleavened bread traditionally made from corn or wheat flour, originating from Mexico. It's used to make tacos, burritos, quesadillas, and more.",
          es: "Una tortilla es un pan plano, delgado y sin levadura tradicionalmente hecho de harina de maíz o trigo, originario de México. Se usa para hacer tacos, burritos, quesadillas y más.",
          de: "Eine Tortilla ist ein dünnes, flaches, ungesäuertes Brot, das traditionell aus Mais- oder Weizenmehl hergestellt wird und aus Mexiko stammt. Es wird verwendet, um Tacos, Burritos, Quesadillas und mehr zu machen.",
          nl: "Een tortilla is een dun, plat, ongezuurd brood traditioneel gemaakt van maïs- of tarwemeel, afkomstig uit Mexico. Het wordt gebruikt om taco's, burrito's, quesadilla's en meer te maken."
        }
      },
      {
        question: {
          en: "What is the crust of bread?",
          es: "¿Qué es la corteza del pan?",
          de: "Was ist die Brotkruste?",
          nl: "Wat is de korst van brood?"
        },
        options: [
          {
            en: "The outer, browned layer that forms during baking",
            es: "La capa externa dorada que se forma durante el horneado",
            de: "Die äußere, gebräunte Schicht, die beim Backen entsteht",
            nl: "De buitenste, gebruinde laag die tijdens het bakken ontstaat"
          },
          {
            en: "The center of the bread",
            es: "El centro del pan",
            de: "Die Mitte des Brotes",
            nl: "Het midden van het brood"
          },
          {
            en: "A topping added after baking",
            es: "Una cobertura añadida después de hornear",
            de: "Ein Belag, der nach dem Backen hinzugefügt wird",
            nl: "Een topping toegevoegd na het bakken"
          },
          {
            en: "The seeds on top",
            es: "Las semillas encima",
            de: "Die Samen obenauf",
            nl: "De zaden bovenop"
          }
        ],
        correct: 0,
        explanation: {
          en: "The crust is the outer layer of bread that becomes brown and firm during baking due to the Maillard reaction and caramelization. It provides texture contrast to the soft interior (crumb).",
          es: "La corteza es la capa externa del pan que se vuelve marrón y firme durante el horneado debido a la reacción de Maillard y la caramelización. Proporciona contraste de textura con el interior suave (miga).",
          de: "Die Kruste ist die äußere Schicht des Brotes, die während des Backens aufgrund der Maillard-Reaktion und Karamellisierung braun und fest wird. Sie bietet einen Texturkontrast zum weichen Inneren (Krume).",
          nl: "De korst is de buitenste laag van brood die bruin en stevig wordt tijdens het bakken door de Maillard-reactie en karamelisatie. Het biedt textuurcontrast met de zachte binnenkant (kruim)."
        }
      },
      {
        question: {
          en: "What is gluten?",
          es: "¿Qué es el gluten?",
          de: "Was ist Gluten?",
          nl: "Wat is gluten?"
        },
        options: [
          {
            en: "A protein in wheat that gives bread structure and elasticity",
            es: "Una proteína en el trigo que da estructura y elasticidad al pan",
            de: "Ein Protein im Weizen, das Brot Struktur und Elastizität verleiht",
            nl: "Een eiwit in tarwe dat brood structuur en elasticiteit geeft"
          },
          {
            en: "A type of yeast",
            es: "Un tipo de levadura",
            de: "Eine Art von Hefe",
            nl: "Een soort gist"
          },
          {
            en: "A sweetener",
            es: "Un edulcorante",
            de: "Ein Süßungsmittel",
            nl: "Een zoetstof"
          },
          {
            en: "Food coloring",
            es: "Colorante alimentario",
            de: "Lebensmittelfarbe",
            nl: "Voedselkleuring"
          }
        ],
        correct: 0,
        explanation: {
          en: "Gluten is a protein found in wheat, barley, and rye that forms when flour is mixed with water and kneaded. It creates an elastic network that traps gas bubbles, allowing bread to rise and hold its shape.",
          es: "El gluten es una proteína que se encuentra en el trigo, la cebada y el centeno que se forma cuando la harina se mezcla con agua y se amasa. Crea una red elástica que atrapa burbujas de gas, permitiendo que el pan suba y mantenga su forma.",
          de: "Gluten ist ein Protein, das in Weizen, Gerste und Roggen vorkommt und sich bildet, wenn Mehl mit Wasser gemischt und geknetet wird. Es bildet ein elastisches Netzwerk, das Gasblasen einfängt und es dem Brot ermöglicht, aufzugehen und seine Form zu behalten.",
          nl: "Gluten is een eiwit dat voorkomt in tarwe, gerst en rogge en zich vormt wanneer meel gemengd wordt met water en gekneed. Het creëert een elastisch netwerk dat gasbellen vasthoudt, waardoor brood kan rijzen en zijn vorm behoudt."
        }
      },
      {
        question: {
          en: "What is cornbread made from?",
          es: "¿De qué está hecho el pan de maíz?",
          de: "Woraus wird Maisbrot hergestellt?",
          nl: "Waar is maïsbrood van gemaakt?"
        },
        options: [
          {
            en: "Cornmeal (ground corn)",
            es: "Harina de maíz (maíz molido)",
            de: "Maismehl (gemahlener Mais)",
            nl: "Maïsmeel (gemalen maïs)"
          },
          {
            en: "Wheat flour only",
            es: "Solo harina de trigo",
            de: "Nur Weizenmehl",
            nl: "Alleen tarwemeel"
          },
          {
            en: "Rice",
            es: "Arroz",
            de: "Reis",
            nl: "Rijst"
          },
          {
            en: "Oats",
            es: "Avena",
            de: "Hafer",
            nl: "Haver"
          }
        ],
        correct: 0,
        explanation: {
          en: "Cornbread is made primarily from cornmeal (ground dried corn), often mixed with flour, eggs, milk or buttermilk, and a leavening agent. It's a traditional bread in American Southern cuisine.",
          es: "El pan de maíz se hace principalmente de harina de maíz (maíz seco molido), a menudo mezclado con harina, huevos, leche o suero de leche y un agente leudante. Es un pan tradicional en la cocina sureña estadounidense.",
          de: "Maisbrot wird hauptsächlich aus Maismehl (gemahlenem getrocknetem Mais) hergestellt, oft gemischt mit Mehl, Eiern, Milch oder Buttermilch und einem Treibmittel. Es ist ein traditionelles Brot in der amerikanischen Südstaatenküche.",
          nl: "Maïsbrood is voornamelijk gemaakt van maïsmeel (gemalen gedroogde maïs), vaak gemengd met meel, eieren, melk of karnemelk en een rijsmiddel. Het is een traditioneel brood in de Amerikaanse zuidelijke keuken."
        }
      },
      {
        question: {
          en: "What does 'artisan bread' typically mean?",
          es: "¿Qué significa típicamente 'pan artesanal'?",
          de: "Was bedeutet typischerweise 'handwerkliches Brot'?",
          nl: "Wat betekent 'ambachtelijk brood' meestal?"
        },
        options: [
          {
            en: "Bread made using traditional methods with high-quality ingredients",
            es: "Pan hecho usando métodos tradicionales con ingredientes de alta calidad",
            de: "Brot, das nach traditionellen Methoden mit hochwertigen Zutaten hergestellt wird",
            nl: "Brood gemaakt volgens traditionele methoden met hoogwaardige ingrediënten"
          },
          {
            en: "Bread shaped like art",
            es: "Pan con forma de arte",
            de: "Brot in Kunstform",
            nl: "Brood in de vorm van kunst"
          },
          {
            en: "Bread made by machines only",
            es: "Pan hecho solo por máquinas",
            de: "Nur maschinell hergestelltes Brot",
            nl: "Alleen machinaal gemaakt brood"
          },
          {
            en: "Very cheap bread",
            es: "Pan muy barato",
            de: "Sehr billiges Brot",
            nl: "Zeer goedkoop brood"
          }
        ],
        correct: 0,
        explanation: {
          en: "Artisan bread refers to bread made using traditional, hands-on methods with minimal processing, high-quality ingredients, and longer fermentation times. It's often baked in small batches rather than mass-produced.",
          es: "El pan artesanal se refiere al pan hecho usando métodos tradicionales manuales con procesamiento mínimo, ingredientes de alta calidad y tiempos de fermentación más largos. A menudo se hornea en lotes pequeños en lugar de producción masiva.",
          de: "Handwerkliches Brot bezieht sich auf Brot, das mit traditionellen, handwerklichen Methoden mit minimaler Verarbeitung, hochwertigen Zutaten und längeren Fermentationszeiten hergestellt wird. Es wird oft in kleinen Chargen gebacken, anstatt massenproduzie zu werden.",
          nl: "Ambachtelijk brood verwijst naar brood gemaakt volgens traditionele, handmatige methoden met minimale verwerking, hoogwaardige ingrediënten en langere fermentatietijden. Het wordt vaak in kleine hoeveelheden gebakken in plaats van massaproductie."
        }
      },
      {
        question: {
          en: "What is the 'crumb' of bread?",
          es: "¿Qué es la 'miga' del pan?",
          de: "Was ist die 'Krume' des Brotes?",
          nl: "Wat is het 'kruim' van brood?"
        },
        options: [
          {
            en: "The soft interior texture and structure of bread",
            es: "La textura y estructura interior suave del pan",
            de: "Die weiche innere Textur und Struktur des Brotes",
            nl: "De zachte binnenste textuur en structuur van brood"
          },
          {
            en: "Small pieces that fall off",
            es: "Pequeños pedazos que se caen",
            de: "Kleine Stücke, die abfallen",
            nl: "Kleine stukjes die afvallen"
          },
          {
            en: "The crust only",
            es: "Solo la corteza",
            de: "Nur die Kruste",
            nl: "Alleen de korst"
          },
          {
            en: "Moldy bread",
            es: "Pan mohoso",
            de: "Schimmeliges Brot",
            nl: "Beschimmeld brood"
          }
        ],
        correct: 0,
        explanation: {
          en: "The crumb refers to the interior texture and structure of bread - the pattern of air pockets and the softness of the bread inside the crust. A good crumb indicates proper fermentation and baking.",
          es: "La miga se refiere a la textura y estructura interior del pan - el patrón de bolsas de aire y la suavidad del pan dentro de la corteza. Una buena miga indica fermentación y horneado adecuados.",
          de: "Die Krume bezieht sich auf die innere Textur und Struktur des Brotes - das Muster der Lufttaschen und die Weichheit des Brotes innerhalb der Kruste. Eine gute Krume zeigt ordnungsgemäße Fermentation und Backen an.",
          nl: "Het kruim verwijst naar de binnenste textuur en structuur van brood - het patroon van luchtzakjes en de zachtheid van het brood binnen de korst. Een goed kruim geeft aan dat de fermentatie en het bakken goed zijn verlopen."
        }
      },
      {
        question: {
          en: "Why is bread kneaded?",
          es: "¿Por qué se amasa el pan?",
          de: "Warum wird Brot geknetet?",
          nl: "Waarom wordt brood gekneed?"
        },
        options: [
          {
            en: "To develop gluten strands that give bread structure",
            es: "Para desarrollar hebras de gluten que dan estructura al pan",
            de: "Um Glutenstränge zu entwickeln, die dem Brot Struktur geben",
            nl: "Om glutendraden te ontwikkelen die brood structuur geven"
          },
          {
            en: "To make it look pretty",
            es: "Para que se vea bonito",
            de: "Um es hübsch aussehen zu lassen",
            nl: "Om het er mooi uit te laten zien"
          },
          {
            en: "To add color",
            es: "Para agregar color",
            de: "Um Farbe hinzuzufügen",
            nl: "Om kleur toe te voegen"
          },
          {
            en: "To remove yeast",
            es: "Para eliminar la levadura",
            de: "Um Hefe zu entfernen",
            nl: "Om gist te verwijderen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Kneading develops gluten by aligning and connecting the protein strands in the dough. This creates an elastic network that can trap gas bubbles produced by yeast, allowing the bread to rise and maintain its shape.",
          es: "El amasado desarrolla el gluten al alinear y conectar las hebras de proteína en la masa. Esto crea una red elástica que puede atrapar burbujas de gas producidas por la levadura, permitiendo que el pan suba y mantenga su forma.",
          de: "Das Kneten entwickelt Gluten, indem es die Proteinstränge im Teig ausrichtet und verbindet. Dies schafft ein elastisches Netzwerk, das Gasblasen einfangen kann, die von der Hefe produziert werden, sodass das Brot aufgehen und seine Form behalten kann.",
          nl: "Kneden ontwikkelt gluten door de eiwitdraden in het deeg uit te lijnen en te verbinden. Dit creëert een elastisch netwerk dat gasbellen kan vasthouden die door gist worden geproduceerd, waardoor het brood kan rijzen en zijn vorm kan behouden."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();
