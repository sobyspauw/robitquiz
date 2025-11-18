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
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();
