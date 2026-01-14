// Bread Types Quiz - Level 2
(function() {
  const level2 = {
    name: {
      en: "Bread  Types Level 2",
      es: "Bread  Types Nivel 2",
      de: "Bread  Types Stufe 2",
      nl: "Bread  Types Level 2"
    },
    questions: [
      {
        question: {
          en: "What is the main ingredient that makes bread rise?",
          es: "¿Cuál es el ingrediente principal que hace que el pan suba?",
          de: "Was ist die Hauptzutat, die Brot aufgehen lässt?",
          nl: "Wat is het hoofdingrediënt dat brood doet rijzen?"
        },
        options: [
          { en: "Yeast", es: "Levadura", de: "Hefe", nl: "Gist" },
          { en: "Salt", es: "Sal", de: "Salz", nl: "Zout" },
          { en: "Sugar", es: "Azúcar", de: "Zucker", nl: "Suiker" },
          { en: "Oil", es: "Aceite", de: "Öl", nl: "Olie" }
        ],
        correct: 0,
        explanation: {
          en: "Yeast is a living microorganism that ferments sugars in flour, producing carbon dioxide gas that creates bubbles and makes bread rise.",
          es: "La levadura es un microorganismo vivo que fermenta azúcares en la harina, produciendo gas dióxido de carbono que crea burbujas y hace que el pan suba.",
          de: "Hefe ist ein lebender Mikroorganismus, der Zucker im Mehl fermentiert und Kohlendioxidgas produziert, das Blasen bildet und Brot aufgehen lässt.",
          nl: "Gist is een levend micro-organisme dat suikers in meel fermenteert, koolstofdioxide gas produceert dat bellen creëert en brood doet rijzen."
        }
      },
      {
        question: {
          en: "Which type of flour is most commonly used for white bread?",
          es: "¿Qué tipo de harina se usa más comúnmente para el pan blanco?",
          de: "Welche Art von Mehl wird am häufigsten für Weißbrot verwendet?",
          nl: "Welk type meel wordt het meest gebruikt voor wit brood?"
        },
        options: [
          { en: "All-purpose wheat flour", es: "Harina de trigo multiuso", de: "Allzweck-Weizenmehl", nl: "Bloem van tarwe" },
          { en: "Rice flour", es: "Harina de arroz", de: "Reismehl", nl: "Rijstmeel" },
          { en: "Corn flour", es: "Harina de maíz", de: "Maismehl", nl: "Maïsmeel" },
          { en: "Almond flour", es: "Harina de almendra", de: "Mandelmehl", nl: "Amandelmeel" }
        ],
        correct: 0,
        explanation: {
          en: "All-purpose wheat flour contains gluten proteins that provide structure and elasticity to bread dough, making it ideal for most bread recipes.",
          es: "La harina de trigo multiuso contiene proteínas de gluten que proporcionan estructura y elasticidad a la masa del pan, haciéndola ideal para la mayoría de recetas de pan.",
          de: "Allzweck-Weizenmehl enthält Glutenproteine, die dem Brotteig Struktur und Elastizität verleihen und es ideal für die meisten Brotrezepte machen.",
          nl: "Bloem van tarwe bevat glutenproteïnen die structuur en elasticiteit aan brooddeeg geven, waardoor het ideaal is voor de meeste broodrecepten."
        }
      },
      {
        question: {
          en: "What is sourdough bread characterized by?",
          es: "¿Por qué se caracteriza el pan de masa madre?",
          de: "Wodurch ist Sauerteigbrot charakterisiert?",
          nl: "Waar wordt zuurdesembrood door gekenmerkt?"
        },
        options: [
          { en: "Tangy flavor from natural fermentation", es: "Sabor ácido de fermentación natural", de: "Säuerlicher Geschmack durch natürliche Fermentation", nl: "Zure smaak door natuurlijke fermentatie" },
          { en: "Sweet taste from added sugar", es: "Sabor dulce de azúcar añadido", de: "Süßer Geschmack durch zugesetzten Zucker", nl: "Zoete smaak door toegevoegde suiker" },
          { en: "Very dry texture", es: "Textura muy seca", de: "Sehr trockene Textur", nl: "Zeer droge textuur" },
          { en: "Bright white color", es: "Color blanco brillante", de: "Leuchtend weiße Farbe", nl: "Helderwitte kleur" }
        ],
        correct: 0,
        explanation: {
          en: "Sourdough bread gets its distinctive tangy flavor from wild yeast and bacteria in the starter that ferment naturally over several days.",
          es: "El pan de masa madre obtiene su sabor ácido distintivo de levadura salvaje y bacterias en el iniciador que fermentan naturalmente durante varios días.",
          de: "Sauerteigbrot erhält seinen charakteristischen säuerlichen Geschmack von wilden Hefen und Bakterien im Starter, die über mehrere Tage natürlich fermentieren.",
          nl: "Zuurdesembrood krijgt zijn kenmerkende zure smaak van wilde gist en bacteriën in de starter die natuurlijk fermenteren gedurende meerdere dagen."
        }
      },
      {
        question: {
          en: "What gives whole wheat bread its brown color?",
          es: "¿Qué le da al pan integral su color marrón?",
          de: "Was verleiht Vollkornbrot seine braune Farbe?",
          nl: "Wat geeft volkorenbrood zijn bruine kleur?"
        },
        options: [
          { en: "Wheat bran and germ in the flour", es: "Salvado de trigo y germen en la harina", de: "Weizenkleie und Keim im Mehl", nl: "Tarwezemelen en kiem in het meel" },
          { en: "Added brown sugar", es: "Azúcar moreno añadido", de: "Zugesetzter brauner Zucker", nl: "Toegevoegde bruine suiker" },
          { en: "Chocolate powder", es: "Polvo de chocolate", de: "Schokoladenpulver", nl: "Chocoladepoeder" },
          { en: "Food coloring", es: "Colorante alimentario", de: "Lebensmittelfarbe", nl: "Voedingskleurstof" }
        ],
        correct: 0,
        explanation: {
          en: "Whole wheat flour includes the bran (outer layer) and germ (embryo) of the wheat kernel, which contain nutrients and give the characteristic brown color.",
          es: "La harina integral incluye el salvado (capa exterior) y germen (embrión) del grano de trigo, que contienen nutrientes y dan el color marrón característico.",
          de: "Vollkornmehl enthält die Kleie (äußere Schicht) und den Keim (Embryo) des Weizenkorns, die Nährstoffe enthalten und die charakteristische braune Farbe verleihen.",
          nl: "Volkoren tarwemeel bevat de zemelen (buitenlaag) en kiem (embryo) van de tarwekorrel, die voedingsstoffen bevatten en de karakteristieke bruine kleur geven."
        }
      },
      {
        question: {
          en: "What is a baguette?",
          es: "¿Qué es una baguette?",
          de: "Was ist ein Baguette?",
          nl: "Wat is een stokbrood?"
        },
        options: [
          { en: "A long, thin French bread with a crispy crust", es: "Un pan francés largo y delgado con corteza crujiente", de: "Ein langes, dünnes französisches Brot mit knuspriger Kruste", nl: "Een lang, dun Frans brood met een knapperige korst" },
          { en: "A sweet cake from Germany", es: "Un pastel dulce de Alemania", de: "Ein süßer Kuchen aus Deutschland", nl: "Een zoete cake uit Duitsland" },
          { en: "A type of pasta from Italy", es: "Un tipo de pasta de Italia", de: "Eine Art Pasta aus Italien", nl: "Een soort pasta uit Italië" },
          { en: "A round flatbread from Greece", es: "Un pan plano redondo de Grecia", de: "Ein rundes Fladenbrot aus Griechenland", nl: "Een rond platbrood uit Griekenland" }
        ],
        correct: 0,
        explanation: {
          en: "A baguette is a traditional French bread known for its long, thin shape and golden, crispy crust with a soft interior.",
          es: "Una baguette es un pan francés tradicional conocido por su forma larga y delgada y corteza dorada y crujiente con interior suave.",
          de: "Ein Baguette ist ein traditionelles französisches Brot, bekannt für seine lange, dünne Form und goldene, knusprige Kruste mit weichem Inneren.",
          nl: "Een stokbrood is een traditioneel Frans brood bekend om zijn lange, dunne vorm en gouden, knapperige korst met zachte binnenkant."
        }
      },
      {
        question: {
          en: "What is the purpose of kneading bread dough?",
          es: "¿Cuál es el propósito de amasar la masa del pan?",
          de: "Was ist der Zweck des Knetens von Brotteig?",
          nl: "Wat is het doel van het kneden van brooddeeg?"
        },
        options: [
          { en: "To develop gluten for structure and elasticity", es: "Para desarrollar gluten para estructura y elasticidad", de: "Um Gluten für Struktur und Elastizität zu entwickeln", nl: "Om gluten te ontwikkelen voor structuur en elasticiteit" },
          { en: "To add more flavor", es: "Para añadir más sabor", de: "Um mehr Geschmack hinzuzufügen", nl: "Om meer smaak toe te voegen" },
          { en: "To change the color", es: "Para cambiar el color", de: "Um die Farbe zu ändern", nl: "Om de kleur te veranderen" },
          { en: "To remove moisture", es: "Para eliminar humedad", de: "Um Feuchtigkeit zu entfernen", nl: "Om vocht te verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "Kneading develops gluten proteins in the flour, creating a strong, elastic network that traps gas bubbles and gives bread its structure.",
          es: "Amasar desarrolla proteínas de gluten en la harina, creando una red fuerte y elástica que atrapa burbujas de gas y da estructura al pan.",
          de: "Kneten entwickelt Glutenproteine im Mehl und schafft ein starkes, elastisches Netzwerk, das Gasblasen einfängt und dem Brot seine Struktur gibt.",
          nl: "Kneden ontwikkelt glutenproteïnen in het meel, wat een sterk, elastisch netwerk creëert dat gasbellen vangt en brood zijn structuur geeft."
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
          { en: "A round, flat Middle Eastern bread that forms a pocket", es: "Un pan plano y redondo del Medio Oriente que forma un bolsillo", de: "Ein rundes, flaches nahöstliches Brot, das eine Tasche bildet", nl: "Een rond, plat Midden-Oosters brood dat een zakje vormt" },
          { en: "A sweet Danish pastry", es: "Un pastel dulce danés", de: "Ein süßes dänisches Gebäck", nl: "Een zoet Deens gebak" },
          { en: "A German pretzel", es: "Un pretzel alemán", de: "Eine deutsche Brezel", nl: "Een Duitse pretzel" },
          { en: "An Indian flatbread", es: "Un pan plano indio", de: "Ein indisches Fladenbrot", nl: "Een Indiaas platbrood" }
        ],
        correct: 0,
        explanation: {
          en: "Pita bread is a traditional Middle Eastern bread that puffs up during baking, creating a pocket that can be filled with various ingredients.",
          es: "El pan pita es un pan tradicional del Medio Oriente que se infla durante el horneado, creando un bolsillo que puede llenarse con varios ingredientes.",
          de: "Pitabrot ist ein traditionelles nahöstliches Brot, das beim Backen aufgeht und eine Tasche bildet, die mit verschiedenen Zutaten gefüllt werden kann.",
          nl: "Pitabrood is een traditioneel Midden-Oosters brood dat opzwelt tijdens het bakken, waardoor een zakje ontstaat dat gevuld kan worden met verschillende ingrediënten."
        }
      },
      {
        question: {
          en: "What type of bread is focaccia?",
          es: "¿Qué tipo de pan es la focaccia?",
          de: "Was für eine Art Brot ist Focaccia?",
          nl: "Wat voor soort brood is focaccia?"
        },
        options: [
          { en: "An Italian flatbread with olive oil and herbs", es: "Un pan plano italiano con aceite de oliva y hierbas", de: "Ein italienisches Fladenbrot mit Olivenöl und Kräutern", nl: "Een Italiaans platbrood met olijfolie en kruiden" },
          { en: "A French croissant", es: "Un croissant francés", de: "Ein französisches Croissant", nl: "Een Franse croissant" },
          { en: "A Mexican tortilla", es: "Una tortilla mexicana", de: "Eine mexikanische Tortilla", nl: "Een Mexicaanse tortilla" },
          { en: "A British scone", es: "Un scone británico", de: "Ein britischer Scone", nl: "Een Britse scone" }
        ],
        correct: 0,
        explanation: {
          en: "Focaccia is a traditional Italian flatbread topped with olive oil, salt, and often herbs or vegetables before baking.",
          es: "La focaccia es un pan plano tradicional italiano cubierto con aceite de oliva, sal, y a menudo hierbas o verduras antes del horneado.",
          de: "Focaccia ist ein traditionelles italienisches Fladenbrot, das vor dem Backen mit Olivenöl, Salz und oft Kräutern oder Gemüse belegt wird.",
          nl: "Focaccia is een traditioneel Italiaans platbrood bedekt met olijfolie, zout, en vaak kruiden of groenten voor het bakken."
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
          { en: "It's made with rye flour instead of wheat flour", es: "Está hecho con harina de centeno en lugar de harina de trigo", de: "Es wird mit Roggenmehl anstatt Weizenmehl hergestellt", nl: "Het is gemaakt met roggenmeel in plaats van tarwemeel" },
          { en: "It contains more sugar", es: "Contiene más azúcar", de: "Es enthält mehr Zucker", nl: "Het bevat meer suiker" },
          { en: "It's always sweet", es: "Siempre es dulce", de: "Es ist immer süß", nl: "Het is altijd zoet" },
          { en: "It's baked at a higher temperature", es: "Se hornea a mayor temperatura", de: "Es wird bei höherer Temperatur gebacken", nl: "Het wordt op hogere temperatuur gebakken" }
        ],
        correct: 0,
        explanation: {
          en: "Rye bread is made with rye flour, which has less gluten than wheat flour and gives the bread a denser texture and distinctive earthy flavor.",
          es: "El pan de centeno está hecho con harina de centeno, que tiene menos gluten que la harina de trigo y da al pan una textura más densa y sabor terroso distintivo.",
          de: "Roggenbrot wird mit Roggenmehl hergestellt, das weniger Gluten als Weizenmehl hat und dem Brot eine dichtere Textur und einen charakteristischen erdigen Geschmack verleiht.",
          nl: "Roggebrood is gemaakt met roggenmeel, dat minder gluten heeft dan tarwemeel en het brood een dichtere textuur en kenmerkende aardse smaak geeft."
        }
      },
      {
        question: {
          en: "What is a pretzel traditionally shaped like?",
          es: "¿Cómo tiene forma tradicionalmente un pretzel?",
          de: "Wie ist eine Brezel traditionell geformt?",
          nl: "Welke vorm heeft een pretzel traditioneel?"
        },
        options: [
          { en: "A twisted knot", es: "Un nudo retorcido", de: "Ein verdrehter Knoten", nl: "Een gedraaide knoop" },
          { en: "A perfect circle", es: "Un círculo perfecto", de: "Ein perfekter Kreis", nl: "Een perfecte cirkel" },
          { en: "A square", es: "Un cuadrado", de: "Ein Quadrat", nl: "Een vierkant" },
          { en: "A triangle", es: "Un triángulo", de: "Ein Dreieck", nl: "Een driehoek" }
        ],
        correct: 0,
        explanation: {
          en: "Traditional pretzels are shaped like a twisted knot, often said to resemble arms crossed in prayer, dating back to ancient European traditions.",
          es: "Los pretzels tradicionales tienen forma de nudo retorcido, a menudo se dice que se asemejan a brazos cruzados en oración, datando de antiguas tradiciones europeas.",
          de: "Traditionelle Brezeln sind wie ein verdrehter Knoten geformt, oft gesagt, dass sie gekreuzte Arme im Gebet ähneln, was auf alte europäische Traditionen zurückgeht.",
          nl: "Traditionele pretzels hebben de vorm van een gedraaide knoop, vaak gezegd dat ze lijken op gekruiste armen in gebed, daterend uit oude Europese tradities."
        }
      },
      {
        question: {
          en: "What gives bagels their chewy texture?",
          es: "¿Qué le da a los bagels su textura masticable?",
          de: "Was verleiht Bagels ihre zähe Textur?",
          nl: "Wat geeft bagels hun kauwbare textuur?"
        },
        options: [
          { en: "Boiling before baking", es: "Hervir antes de hornear", de: "Kochen vor dem Backen", nl: "Koken voor het bakken" },
          { en: "Adding extra sugar", es: "Añadir azúcar extra", de: "Extra Zucker hinzufügen", nl: "Extra suiker toevoegen" },
          { en: "Freezing the dough", es: "Congelar la masa", de: "Den Teig einfrieren", nl: "Het deeg bevriezen" },
          { en: "Using only egg whites", es: "Usar solo claras de huevo", de: "Nur Eiweiß verwenden", nl: "Alleen eiwitten gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Bagels are boiled in water before baking, which gelatinizes the surface starches and creates their characteristic dense, chewy texture.",
          es: "Los bagels se hierven en agua antes de hornear, lo que gelatiniza los almidones de la superficie y crea su textura densa y masticable característica.",
          de: "Bagels werden vor dem Backen in Wasser gekocht, was die Oberflächenstärken gelatiniert und ihre charakteristische dichte, zähe Textur schafft.",
          nl: "Bagels worden gekookt in water voor het bakken, wat de oppervlakte zetmelen gelatineert en hun karakteristieke dichte, kauwbare textuur creëert."
        }
      },
      {
        question: {
          en: "What is ciabatta bread known for?",
          es: "¿Por qué es conocido el pan ciabatta?",
          de: "Wofür ist Ciabattabrot bekannt?",
          nl: "Waar staat ciabattabrood om bekend?"
        },
        options: [
          { en: "Its open, airy texture with large holes", es: "Su textura abierta y aireada con agujeros grandes", de: "Seine offene, luftige Textur mit großen Löchern", nl: "Zijn open, luchtige textuur met grote gaten" },
          { en: "Being perfectly round", es: "Ser perfectamente redondo", de: "Perfekt rund zu sein", nl: "Perfect rond zijn" },
          { en: "Having a very sweet taste", es: "Tener un sabor muy dulce", de: "Einen sehr süßen Geschmack zu haben", nl: "Een zeer zoete smaak hebben" },
          { en: "Being very dense", es: "Ser muy denso", de: "Sehr dicht zu sein", nl: "Zeer dicht zijn" }
        ],
        correct: 0,
        explanation: {
          en: "Ciabatta is an Italian bread characterized by its rustic appearance and open crumb structure with irregular holes, created by high hydration dough.",
          es: "La ciabatta es un pan italiano caracterizado por su apariencia rústica y estructura de miga abierta con agujeros irregulares, creado por masa de alta hidratación.",
          de: "Ciabatta ist ein italienisches Brot, charakterisiert durch sein rustikales Aussehen und offene Krumenstruktur mit unregelmäßigen Löchern, erzeugt durch hochhydrierten Teig.",
          nl: "Ciabatta is een Italiaans brood gekenmerkt door zijn rustieke verschijning en open kruimstructuur met onregelmatige gaten, gecreëerd door hoog gehydrateerd deeg."
        }
      },
      {
        question: {
          en: "What is naan bread traditionally cooked in?",
          es: "¿En qué se cocina tradicionalmente el pan naan?",
          de: "Worin wird Naanbrot traditionell gekocht?",
          nl: "Waarin wordt naanbrood traditioneel gekookt?"
        },
        options: [
          { en: "A tandoor oven", es: "Un horno tandoor", de: "Ein Tandoor-Ofen", nl: "Een tandooroven" },
          { en: "A microwave", es: "Un microondas", de: "Eine Mikrowelle", nl: "Een magnetron" },
          { en: "Cold water", es: "Agua fría", de: "Kaltes Wasser", nl: "Koud water" },
          { en: "A refrigerator", es: "Un refrigerador", de: "Ein Kühlschrank", nl: "Een koelkast" }
        ],
        correct: 0,
        explanation: {
          en: "Naan is traditionally cooked in a tandoor, a cylindrical clay oven that reaches very high temperatures and gives the bread its characteristic texture and flavor.",
          es: "El naan se cocina tradicionalmente en un tandoor, un horno cilíndrico de arcilla que alcanza temperaturas muy altas y le da al pan su textura y sabor característicos.",
          de: "Naan wird traditionell in einem Tandoor gekocht, einem zylindrischen Lehmofen, der sehr hohe Temperaturen erreicht und dem Brot seine charakteristische Textur und Geschmack verleiht.",
          nl: "Naan wordt traditioneel gekookt in een tandoor, een cilindrische kleioven die zeer hoge temperaturen bereikt en het brood zijn karakteristieke textuur en smaak geeft."
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
          { en: "The outer layer that forms during baking", es: "La capa exterior que se forma durante el horneado", de: "Die äußere Schicht, die beim Backen entsteht", nl: "De buitenlaag die ontstaat tijdens het bakken" },
          { en: "The center of the bread", es: "El centro del pan", de: "Die Mitte des Brotes", nl: "Het midden van het brood" },
          { en: "The yeast used in bread", es: "La levadura usada en el pan", de: "Die in Brot verwendete Hefe", nl: "De gist gebruikt in brood" },
          { en: "The flour before mixing", es: "La harina antes de mezclar", de: "Das Mehl vor dem Mischen", nl: "Het meel voor het mengen" }
        ],
        correct: 0,
        explanation: {
          en: "The crust is the outer layer of bread that forms when the surface is exposed to high heat during baking, creating a firmer, often golden-brown exterior.",
          es: "La corteza es la capa exterior del pan que se forma cuando la superficie se expone a calor alto durante el horneado, creando un exterior más firme, a menudo dorado-marrón.",
          de: "Die Kruste ist die äußere Schicht des Brotes, die entsteht, wenn die Oberfläche beim Backen hoher Hitze ausgesetzt wird und ein festeres, oft goldbraunes Äußeres bildet.",
          nl: "De korst is de buitenlaag van brood die ontstaat wanneer het oppervlak wordt blootgesteld aan hoge hitte tijdens het bakken, wat een steviger, vaak goudbruin buitenkant creëert."
        }
      },
      {
        question: {
          en: "What is the soft inside part of bread called?",
          es: "¿Cómo se llama la parte suave interior del pan?",
          de: "Wie heißt der weiche innere Teil des Brotes?",
          nl: "Hoe heet het zachte binnenste deel van brood?"
        },
        options: [
          { en: "Crumb", es: "Miga", de: "Krume", nl: "Kruim" },
          { en: "Crust", es: "Corteza", de: "Kruste", nl: "Korst" },
          { en: "Core", es: "Núcleo", de: "Kern", nl: "Kern" },
          { en: "Shell", es: "Cáscara", de: "Schale", nl: "Schaal" }
        ],
        correct: 0,
        explanation: {
          en: "The crumb refers to the soft, spongy interior of bread, which has a different texture and structure from the outer crust.",
          es: "La miga se refiere al interior suave y esponjoso del pan, que tiene una textura y estructura diferente de la corteza exterior.",
          de: "Die Krume bezieht sich auf das weiche, schwammige Innere des Brotes, das eine andere Textur und Struktur als die äußere Kruste hat.",
          nl: "De kruim verwijst naar het zachte, sponsachtige binnenste van brood, dat een andere textuur en structuur heeft dan de buitenkorst."
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
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "Italy", es: "Italia", de: "Italien", nl: "Italië" },
          { en: "Spain", es: "España", de: "Spanien", nl: "Spanje" },
          { en: "England", es: "Inglaterra", de: "England", nl: "Engeland" }
        ],
        correct: 0,
        explanation: {
          en: "France is famous for croissants, though they were originally inspired by Austrian kipferl. French bakers perfected the layered, buttery pastry we know today.",
          es: "Francia es famosa por los croissants, aunque originalmente se inspiraron en el kipferl austriaco. Los panaderos franceses perfeccionaron el pastel en capas y mantecoso que conocemos hoy.",
          de: "Frankreich ist berühmt für Croissants, obwohl sie ursprünglich vom österreichischen Kipferl inspiriert wurden. Französische Bäcker perfektionierten das geschichtete, butterige Gebäck, das wir heute kennen.",
          nl: "Frankrijk is beroemd om croissants, hoewel ze oorspronkelijk geïnspireerd waren door Oostenrijkse kipferl. Franse bakkers perfectioneerden het gelaagde, boterige gebak dat we vandaag kennen."
        }
      },
      {
        question: {
          en: "What makes bread dough sticky?",
          es: "¿Qué hace que la masa del pan sea pegajosa?",
          de: "Was macht Brotteig klebrig?",
          nl: "Wat maakt brooddeeg plakkerig?"
        },
        options: [
          { en: "High water content", es: "Alto contenido de agua", de: "Hoher Wassergehalt", nl: "Hoog watergehalte" },
          { en: "Too much salt", es: "Demasiada sal", de: "Zu viel Salz", nl: "Te veel zout" },
          { en: "Not enough yeast", es: "No suficiente levadura", de: "Nicht genug Hefe", nl: "Niet genoeg gist" },
          { en: "Cold temperature", es: "Temperatura fría", de: "Kalte Temperatur", nl: "Koude temperatuur" }
        ],
        correct: 0,
        explanation: {
          en: "High water content in bread dough makes it sticky because the flour hasn't fully absorbed all the moisture, creating a wet, adhesive texture.",
          es: "El alto contenido de agua en la masa del pan la hace pegajosa porque la harina no ha absorbido completamente toda la humedad, creando una textura húmeda y adhesiva.",
          de: "Hoher Wassergehalt im Brotteig macht ihn klebrig, weil das Mehl nicht die gesamte Feuchtigkeit vollständig absorbiert hat und eine feuchte, klebrige Textur entsteht.",
          nl: "Hoog watergehalte in brooddeeg maakt het plakkerig omdat het meel niet al het vocht volledig heeft geabsorbeerd, wat een natte, kleefachtige textuur creëert."
        }
      },
      {
        question: {
          en: "What happens if you add too much salt to bread dough?",
          es: "¿Qué pasa si añades demasiada sal a la masa del pan?",
          de: "Was passiert, wenn du zu viel Salz zum Brotteig hinzufügst?",
          nl: "Wat gebeurt er als je te veel zout aan brooddeeg toevoegt?"
        },
        options: [
          { en: "It slows down or kills the yeast", es: "Reduce la velocidad o mata la levadura", de: "Es verlangsamt oder tötet die Hefe", nl: "Het vertraagt of doodt de gist" },
          { en: "It makes the bread sweeter", es: "Hace que el pan sea más dulce", de: "Es macht das Brot süßer", nl: "Het maakt het brood zoeter" },
          { en: "It makes the bread rise faster", es: "Hace que el pan suba más rápido", de: "Es lässt das Brot schneller aufgehen", nl: "Het laat het brood sneller rijzen" },
          { en: "It changes the color to green", es: "Cambia el color a verde", de: "Es ändert die Farbe zu grün", nl: "Het verandert de kleur naar groen" }
        ],
        correct: 0,
        explanation: {
          en: "Too much salt inhibits yeast activity by drawing moisture from yeast cells, which slows fermentation or can kill the yeast entirely.",
          es: "Demasiada sal inhibe la actividad de la levadura al extraer humedad de las células de levadura, lo que reduce la fermentación o puede matar la levadura completamente.",
          de: "Zu viel Salz hemmt die Hefeaktivität, indem es Feuchtigkeit aus den Hefezellen zieht, was die Fermentation verlangsamt oder die Hefe vollständig töten kann.",
          nl: "Te veel zout remt gistactiviteit door vocht uit gistcellen te trekken, wat fermentatie vertraagt of de gist volledig kan doden."
        }
      },
      {
        question: {
          en: "What is the difference between baking powder and yeast in bread making?",
          es: "¿Cuál es la diferencia entre polvo de hornear y levadura en la elaboración del pan?",
          de: "Was ist der Unterschied zwischen Backpulver und Hefe beim Brotbacken?",
          nl: "Wat is het verschil tussen bakpoeder en gist bij het maken van brood?"
        },
        options: [
          { en: "Yeast is alive and ferments, baking powder is a chemical leavener", es: "La levadura está viva y fermenta, el polvo de hornear es un leudante químico", de: "Hefe ist lebendig und fermentiert, Backpulver ist ein chemisches Triebmittel", nl: "Gist is levend en fermenteert, bakpoeder is een chemisch rijsmiddel" },
          { en: "They are exactly the same thing", es: "Son exactamente lo mismo", de: "Sie sind genau dasselbe", nl: "Ze zijn precies hetzelfde" },
          { en: "Baking powder is stronger than yeast", es: "El polvo de hornear es más fuerte que la levadura", de: "Backpulver ist stärker als Hefe", nl: "Bakpoeder is sterker dan gist" },
          { en: "Yeast only works in cold temperatures", es: "La levadura solo funciona en temperaturas frías", de: "Hefe funktioniert nur bei kalten Temperaturen", nl: "Gist werkt alleen bij koude temperaturen" }
        ],
        correct: 0,
        explanation: {
          en: "Yeast is a living organism that ferments sugars to produce carbon dioxide gas, while baking powder is a chemical mixture that releases gas when activated by moisture and heat.",
          es: "La levadura es un organismo vivo que fermenta azúcares para producir gas dióxido de carbono, mientras que el polvo de hornear es una mezcla química que libera gas cuando se activa por humedad y calor.",
          de: "Hefe ist ein lebender Organismus, der Zucker fermentiert um Kohlendioxidgas zu produzieren, während Backpulver eine chemische Mischung ist, die Gas freisetzt, wenn sie durch Feuchtigkeit und Hitze aktiviert wird.",
          nl: "Gist is een levend organisme dat suikers fermenteert om koolstofdioxide gas te produceren, terwijl bakpoeder een chemische mengeling is die gas vrijgeeft wanneer geactiveerd door vocht en warmte."
        }
      },
      {
        question: {
          en: "What is the purpose of 'proofing' bread dough?",
          es: "¿Cuál es el propósito de 'leudar' la masa de pan?",
          de: "Was ist der Zweck des 'Gehenlassens' von Brotteig?",
          nl: "Wat is het doel van 'rijzen' van brooddeeg?"
        },
        options: [
          { en: "Allowing yeast to ferment and dough to rise", es: "Permitir que la levadura fermente y la masa suba", de: "Die Hefe fermentieren und den Teig aufgehen lassen", nl: "Gist laten fermenteren en deeg laten rijzen" },
          { en: "Checking if the bread is waterproof", es: "Verificar si el pan es impermeable", de: "Prüfen, ob das Brot wasserdicht ist", nl: "Controleren of het brood waterdicht is" },
          { en: "Freezing the dough", es: "Congelar la masa", de: "Den Teig einfrieren", nl: "Het deeg bevriezen" },
          { en: "Adding extra ingredients", es: "Añadir ingredientes extra", de: "Zusätzliche Zutaten hinzufügen", nl: "Extra ingrediënten toevoegen" }
        ],
        correct: 0,
        explanation: {
          en: "Proofing is the final rise of shaped bread dough before baking. During this time, yeast continues fermenting, producing gas that makes the dough expand and develop flavor.",
          es: "Leudar es la subida final de la masa de pan formada antes de hornear. Durante este tiempo, la levadura continúa fermentando, produciendo gas que hace que la masa se expanda y desarrolle sabor.",
          de: "Gehen lassen ist der letzte Aufgang des geformten Brotteigs vor dem Backen. Während dieser Zeit fermentiert die Hefe weiter und produziert Gas, das den Teig expandieren und Geschmack entwickeln lässt.",
          nl: "Rijzen is de laatste rijs van gevormd brooddeeg voor het bakken. Tijdens deze tijd blijft gist fermenteren, produceert gas dat het deeg laat uitzetten en smaak ontwikkelt."
        }
      },
      {
        question: {
          en: "What is a 'banneton' used for in bread making?",
          es: "¿Para qué se usa un 'banneton' en la elaboración del pan?",
          de: "Wofür wird ein 'Gärkorb' beim Brotbacken verwendet?",
          nl: "Waarvoor wordt een 'banneton' gebruikt bij het maken van brood?"
        },
        options: [
          { en: "A basket for supporting dough during final proofing", es: "Una canasta para sostener la masa durante el leudado final", de: "Ein Korb zum Stützen des Teigs während des letzten Gehenlassens", nl: "Een mand om deeg te ondersteunen tijdens het laatste rijzen" },
          { en: "A special oven for baking", es: "Un horno especial para hornear", de: "Ein spezieller Ofen zum Backen", nl: "Een speciale oven om te bakken" },
          { en: "A knife for scoring bread", es: "Un cuchillo para cortar pan", de: "Ein Messer zum Einschneiden von Brot", nl: "Een mes om brood te scoren" },
          { en: "A tool for kneading dough", es: "Una herramienta para amasar masa", de: "Ein Werkzeug zum Kneten von Teig", nl: "Een gereedschap om deeg te kneden" }
        ],
        correct: 0,
        explanation: {
          en: "A banneton is a woven basket, usually made from rattan or cane, used to hold bread dough during its final rise. It helps the dough maintain its shape and creates decorative patterns on the crust.",
          es: "Un banneton es una canasta tejida, generalmente hecha de ratán o caña, utilizada para sostener la masa de pan durante su subida final. Ayuda a la masa a mantener su forma y crea patrones decorativos en la corteza.",
          de: "Ein Gärkorb ist ein geflochtener Korb, normalerweise aus Rattan oder Rohr, der verwendet wird, um Brotteig während seines letzten Aufgangs zu halten. Er hilft dem Teig, seine Form zu behalten und erzeugt dekorative Muster auf der Kruste.",
          nl: "Een banneton is een gevlochten mand, meestal gemaakt van rotan of riet, gebruikt om brooddeeg vast te houden tijdens zijn laatste rijs. Het helpt het deeg zijn vorm te behouden en creëert decoratieve patronen op de korst."
        }
      },
      {
        question: {
          en: "What does 'autolyse' mean in bread making?",
          es: "¿Qué significa 'autólisis' en la elaboración del pan?",
          de: "Was bedeutet 'Autolyse' beim Brotbacken?",
          nl: "Wat betekent 'autolyse' bij het maken van brood?"
        },
        options: [
          { en: "Resting flour and water mixture before adding other ingredients", es: "Reposar la mezcla de harina y agua antes de añadir otros ingredientes", de: "Mehl-Wasser-Mischung ruhen lassen bevor andere Zutaten hinzugefügt werden", nl: "Meel-watermengsel laten rusten voor het toevoegen van andere ingrediënten" },
          { en: "Heating the oven to maximum temperature", es: "Calentar el horno a temperatura máxima", de: "Den Ofen auf Höchsttemperatur erhitzen", nl: "De oven op maximale temperatuur verwarmen" },
          { en: "Cutting the bread after baking", es: "Cortar el pan después de hornear", de: "Das Brot nach dem Backen schneiden", nl: "Het brood snijden na het bakken" },
          { en: "Adding yeast to cold water", es: "Añadir levadura al agua fría", de: "Hefe zu kaltem Wasser hinzufügen", nl: "Gist toevoegen aan koud water" }
        ],
        correct: 0,
        explanation: {
          en: "Autolyse is a resting period where flour and water are mixed and left to sit (usually 20-60 minutes) before adding salt and yeast. This allows enzymes to break down proteins, improving dough extensibility and flavor.",
          es: "La autólisis es un período de reposo donde la harina y el agua se mezclan y se dejan reposar (generalmente 20-60 minutos) antes de añadir sal y levadura. Esto permite que las enzimas descompongan las proteínas, mejorando la extensibilidad y el sabor de la masa.",
          de: "Autolyse ist eine Ruhezeit, bei der Mehl und Wasser gemischt und ruhen gelassen werden (normalerweise 20-60 Minuten), bevor Salz und Hefe hinzugefügt werden. Dies ermöglicht Enzymen, Proteine abzubauen, was die Teigdehnbarkeit und den Geschmack verbessert.",
          nl: "Autolyse is een rustperiode waarbij meel en water gemengd worden en gelaten worden rusten (meestal 20-60 minuten) voordat zout en gist worden toegevoegd. Dit stelt enzymen in staat eiwitten af te breken, wat de deegrekbaarheid en smaak verbetert."
        }
      },
      {
        question: {
          en: "What is the 'windowpane test' for bread dough?",
          es: "¿Qué es la 'prueba de la ventana' para la masa de pan?",
          de: "Was ist der 'Fensterscheibentest' für Brotteig?",
          nl: "Wat is de 'vensterruit test' voor brooddeeg?"
        },
        options: [
          { en: "Stretching dough thin to check gluten development", es: "Estirar la masa fina para verificar el desarrollo del gluten", de: "Teig dünn dehnen um Glutenentwicklung zu prüfen", nl: "Deeg dun uitrekken om glutenontwikkeling te controleren" },
          { en: "Holding bread up to a window to check color", es: "Sostener el pan frente a una ventana para verificar el color", de: "Brot ans Fenster halten um die Farbe zu prüfen", nl: "Brood voor een raam houden om kleur te controleren" },
          { en: "Baking bread near a window", es: "Hornear pan cerca de una ventana", de: "Brot in der Nähe eines Fensters backen", nl: "Brood bij een raam bakken" },
          { en: "Testing if dough sticks to glass", es: "Probar si la masa se pega al vidrio", de: "Testen, ob Teig an Glas klebt", nl: "Testen of deeg aan glas plakt" }
        ],
        correct: 0,
        explanation: {
          en: "The windowpane test checks if dough is properly kneaded. You stretch a small piece of dough thin - if it stretches into a translucent membrane without tearing (like a windowpane), gluten is well-developed.",
          es: "La prueba de la ventana verifica si la masa está bien amasada. Estiras un pequeño pedazo de masa fino - si se estira en una membrana traslúcida sin romperse (como una ventana), el gluten está bien desarrollado.",
          de: "Der Fensterscheibentest prüft, ob Teig richtig geknetet ist. Man dehnt ein kleines Stück Teig dünn - wenn es sich zu einer durchscheinenden Membran dehnt ohne zu reißen (wie eine Fensterscheibe), ist Gluten gut entwickelt.",
          nl: "De vensterruit test controleert of deeg goed gekneed is. Je rekt een klein stukje deeg dun uit - als het uitrekt tot een doorschijnend membraan zonder te scheuren (zoals een vensterruit), is gluten goed ontwikkeld."
        }
      },
      {
        question: {
          en: "What is 'enriched' bread?",
          es: "¿Qué es el pan 'enriquecido'?",
          de: "Was ist 'angereichertes' Brot?",
          nl: "Wat is 'verrijkt' brood?"
        },
        options: [
          { en: "Bread with added fats, eggs, sugar, or milk", es: "Pan con grasas, huevos, azúcar o leche añadidos", de: "Brot mit zugesetzten Fetten, Eiern, Zucker oder Milch", nl: "Brood met toegevoegde vetten, eieren, suiker of melk" },
          { en: "Bread baked by rich people", es: "Pan horneado por gente rica", de: "Brot gebacken von reichen Leuten", nl: "Brood gebakken door rijke mensen" },
          { en: "Bread with added vitamins only", es: "Pan solo con vitaminas añadidas", de: "Brot nur mit zugesetzten Vitaminen", nl: "Brood alleen met toegevoegde vitamines" },
          { en: "Expensive artisan bread", es: "Pan artesanal caro", de: "Teures handwerkliches Brot", nl: "Duur ambachtelijk brood" }
        ],
        correct: 0,
        explanation: {
          en: "Enriched bread contains added ingredients like butter, eggs, milk, or sugar beyond basic flour, water, salt, and yeast. These additions make bread richer, softer, and often sweeter. Examples include brioche and challah.",
          es: "El pan enriquecido contiene ingredientes añadidos como mantequilla, huevos, leche o azúcar más allá de harina básica, agua, sal y levadura. Estas adiciones hacen que el pan sea más rico, suave y a menudo más dulce. Ejemplos incluyen brioche y challah.",
          de: "Angereichertes Brot enthält zugesetzte Zutaten wie Butter, Eier, Milch oder Zucker über grundlegendes Mehl, Wasser, Salz und Hefe hinaus. Diese Zusätze machen Brot reicher, weicher und oft süßer. Beispiele sind Brioche und Challah.",
          nl: "Verrijkt brood bevat toegevoegde ingrediënten zoals boter, eieren, melk of suiker naast basismeel, water, zout en gist. Deze toevoegingen maken brood rijker, zachter en vaak zoeter. Voorbeelden zijn brioche en challah."
        }
      },
      {
        question: {
          en: "What is the difference between 'lean' and 'rich' bread dough?",
          es: "¿Cuál es la diferencia entre masa de pan 'magra' y 'rica'?",
          de: "Was ist der Unterschied zwischen 'magerem' und 'reichem' Brotteig?",
          nl: "Wat is het verschil tussen 'mager' en 'rijk' brooddeeg?"
        },
        options: [
          { en: "Lean has minimal fat/sugar, rich has butter/eggs/milk", es: "Magra tiene grasa/azúcar mínimos, rica tiene mantequilla/huevos/leche", de: "Mager hat minimales Fett/Zucker, reich hat Butter/Eier/Milch", nl: "Mager heeft minimaal vet/suiker, rijk heeft boter/eieren/melk" },
          { en: "Lean bread is healthier than rich bread", es: "El pan magro es más saludable que el pan rico", de: "Mageres Brot ist gesünder als reiches Brot", nl: "Mager brood is gezonder dan rijk brood" },
          { en: "Rich bread costs more money", es: "El pan rico cuesta más dinero", de: "Reiches Brot kostet mehr Geld", nl: "Rijk brood kost meer geld" },
          { en: "Lean bread is made for weight loss", es: "El pan magro se hace para perder peso", de: "Mageres Brot wird zur Gewichtsabnahme gemacht", nl: "Mager brood wordt gemaakt voor gewichtsverlies" }
        ],
        correct: 0,
        explanation: {
          en: "Lean dough contains only basic ingredients (flour, water, salt, yeast) like baguettes and ciabatta. Rich dough includes fats, eggs, milk, or sugar for a tender, softer crumb like brioche or dinner rolls.",
          es: "La masa magra contiene solo ingredientes básicos (harina, agua, sal, levadura) como baguettes y ciabatta. La masa rica incluye grasas, huevos, leche o azúcar para una miga tierna y más suave como brioche o panecillos.",
          de: "Magerer Teig enthält nur grundlegende Zutaten (Mehl, Wasser, Salz, Hefe) wie Baguettes und Ciabatta. Reicher Teig beinhaltet Fette, Eier, Milch oder Zucker für eine zarte, weichere Krume wie Brioche oder Brötchen.",
          nl: "Mager deeg bevat alleen basisingrediënten (meel, water, zout, gist) zoals baguettes en ciabatta. Rijk deeg bevat vetten, eieren, melk of suiker voor een zacht, zachter kruim zoals brioche of broodjes."
        }
      },
      {
        question: {
          en: "What is the purpose of scoring (slashing) bread before baking?",
          es: "¿Cuál es el propósito de cortar (hacer cortes) el pan antes de hornear?",
          de: "Was ist der Zweck des Einschneidens von Brot vor dem Backen?",
          nl: "Wat is het doel van scoren (insnijden) van brood voor het bakken?"
        },
        options: [
          { en: "Controls where bread expands and creates decorative patterns", es: "Controla dónde se expande el pan y crea patrones decorativos", de: "Kontrolliert wo Brot sich ausdehnt und erzeugt dekorative Muster", nl: "Controleert waar brood uitzet en creëert decoratieve patronen" },
          { en: "Makes the bread cook faster", es: "Hace que el pan se cocine más rápido", de: "Lässt das Brot schneller kochen", nl: "Laat het brood sneller koken" },
          { en: "Adds flavor to the crust", es: "Añade sabor a la corteza", de: "Fügt der Kruste Geschmack hinzu", nl: "Voegt smaak toe aan de korst" },
          { en: "Removes excess moisture", es: "Elimina el exceso de humedad", de: "Entfernt überschüssige Feuchtigkeit", nl: "Verwijdert overtollig vocht" }
        ],
        correct: 0,
        explanation: {
          en: "Scoring creates weak points where steam can escape and the bread can expand during baking. Without scoring, bread would burst unpredictably. It also creates attractive patterns on the finished loaf.",
          es: "Cortar crea puntos débiles donde el vapor puede escapar y el pan puede expandirse durante el horneado. Sin cortes, el pan explotaría de manera impredecible. También crea patrones atractivos en la hogaza terminada.",
          de: "Einschneiden erzeugt Schwachstellen, wo Dampf entweichen und das Brot sich während des Backens ausdehnen kann. Ohne Einschneiden würde Brot unvorhersehbar aufplatzen. Es erzeugt auch attraktive Muster auf dem fertigen Laib.",
          nl: "Scoren creëert zwakke punten waar stoom kan ontsnappen en het brood kan uitzetten tijdens het bakken. Zonder scoren zou brood onvoorspelbaar barsten. Het creëert ook aantrekkelijke patronen op het afgewerkte brood."
        }
      },
      {
        question: {
          en: "What is 'steam injection' used for when baking bread?",
          es: "¿Para qué se usa la 'inyección de vapor' al hornear pan?",
          de: "Wofür wird 'Dampfinjektion' beim Brotbacken verwendet?",
          nl: "Waarvoor wordt 'stoominjectie' gebruikt bij het bakken van brood?"
        },
        options: [
          { en: "Creates crispy crust and allows better oven spring", es: "Crea corteza crujiente y permite mejor expansión en el horno", de: "Erzeugt knusprige Kruste und ermöglicht besseren Ofentrieb", nl: "Creëert knapperige korst en staat betere ovenrijs toe" },
          { en: "Makes bread taste sweeter", es: "Hace que el pan sepa más dulce", de: "Lässt Brot süßer schmecken", nl: "Laat brood zoeter smaken" },
          { en: "Speeds up baking time", es: "Acelera el tiempo de horneado", de: "Beschleunigt die Backzeit", nl: "Versnelt baktijd" },
          { en: "Prevents bread from burning", es: "Evita que el pan se queme", de: "Verhindert dass Brot verbrennt", nl: "Voorkomt dat brood verbrandt" }
        ],
        correct: 0,
        explanation: {
          en: "Steam in the oven delays crust formation, allowing the bread to expand fully (oven spring). It also gelatinizes starches on the surface, creating a shiny, crispy crust. Professional bakeries use steam injection; home bakers can use a water pan or spray bottle.",
          es: "El vapor en el horno retrasa la formación de corteza, permitiendo que el pan se expanda completamente (expansión en el horno). También gelatiniza almidones en la superficie, creando una corteza brillante y crujiente. Panaderías profesionales usan inyección de vapor; panaderos caseros pueden usar una bandeja de agua o botella de spray.",
          de: "Dampf im Ofen verzögert die Krustenbildung und ermöglicht dem Brot, sich vollständig auszudehnen (Ofentrieb). Es gelatiniert auch Stärken auf der Oberfläche und erzeugt eine glänzende, knusprige Kruste. Professionelle Bäckereien verwenden Dampfinjektion; Hobbybäcker können eine Wasserpfanne oder Sprühflasche verwenden.",
          nl: "Stoom in de oven vertraagt korstvorming, waardoor het brood volledig kan uitzetten (ovenrijs). Het gelatineert ook zetmeel op het oppervlak, wat een glanzende, knapperige korst creëert. Professionele bakkerijen gebruiken stoominjectie; thuisbakkers kunnen een waterpan of spuitfles gebruiken."
        }
      },
      {
        question: {
          en: "What is a 'poolish' in bread making?",
          es: "¿Qué es un 'poolish' en la elaboración del pan?",
          de: "Was ist ein 'Poolish' beim Brotbacken?",
          nl: "Wat is een 'poolish' bij het maken van brood?"
        },
        options: [
          { en: "A pre-ferment made with equal parts flour and water plus yeast", es: "Un pre-fermento hecho con partes iguales de harina y agua más levadura", de: "Ein Vorteig aus gleichen Teilen Mehl und Wasser plus Hefe", nl: "Een voordeeg gemaakt met gelijke delen meel en water plus gist" },
          { en: "A type of Polish bread", es: "Un tipo de pan polaco", de: "Eine Art polnisches Brot", nl: "Een soort Pools brood" },
          { en: "A special baking tool from Poland", es: "Una herramienta especial de hornear de Polonia", de: "Ein spezielles Backwerkzeug aus Polen", nl: "Een speciaal bakgereedschap uit Polen" },
          { en: "A glaze applied to bread", es: "Un glaseado aplicado al pan", de: "Eine Glasur aufgetragen auf Brot", nl: "Een glazuur aangebracht op brood" }
        ],
        correct: 0,
        explanation: {
          en: "A poolish is a wet pre-ferment (equal weight flour and water, plus a small amount of yeast) that ferments for 3-15 hours. It develops complex flavors and improves bread texture. It's commonly used in French baguettes and Italian breads.",
          es: "Un poolish es un pre-fermento húmedo (peso igual de harina y agua, más una pequeña cantidad de levadura) que fermenta durante 3-15 horas. Desarrolla sabores complejos y mejora la textura del pan. Se usa comúnmente en baguettes francesas y panes italianos.",
          de: "Ein Poolish ist ein nasser Vorteig (gleiches Gewicht Mehl und Wasser, plus eine kleine Menge Hefe), der 3-15 Stunden fermentiert. Es entwickelt komplexe Aromen und verbessert die Brottextur. Es wird häufig in französischen Baguettes und italienischen Broten verwendet.",
          nl: "Een poolish is een nat voordeeg (gelijk gewicht meel en water, plus een kleine hoeveelheid gist) dat 3-15 uur fermenteert. Het ontwikkelt complexe smaken en verbetert broodtextuur. Het wordt vaak gebruikt in Franse baguettes en Italiaanse broden."
        }
      },
      {
        question: {
          en: "What causes bread to have a sour taste?",
          es: "¿Qué causa que el pan tenga un sabor ácido?",
          de: "Was bewirkt, dass Brot einen sauren Geschmack hat?",
          nl: "Wat veroorzaakt dat brood een zure smaak heeft?"
        },
        options: [
          { en: "Lactic acid bacteria during fermentation", es: "Bacterias de ácido láctico durante la fermentación", de: "Milchsäurebakterien während der Fermentation", nl: "Melkzuurbacteriën tijdens fermentatie" },
          { en: "Adding lemon juice", es: "Añadir jugo de limón", de: "Zitronensaft hinzufügen", nl: "Citroensap toevoegen" },
          { en: "Using spoiled flour", es: "Usar harina estropeada", de: "Verdorbenes Mehl verwenden", nl: "Bedorven meel gebruiken" },
          { en: "Baking at too high temperature", es: "Hornear a temperatura demasiado alta", de: "Bei zu hoher Temperatur backen", nl: "Bakken op te hoge temperatuur" }
        ],
        correct: 0,
        explanation: {
          en: "Sour taste in bread comes from lactic acid and acetic acid produced by bacteria during long fermentation, especially in sourdough. The bacteria work alongside yeast, creating the characteristic tangy flavor.",
          es: "El sabor ácido en el pan proviene del ácido láctico y ácido acético producidos por bacterias durante la fermentación larga, especialmente en masa madre. Las bacterias trabajan junto con la levadura, creando el sabor característico ácido.",
          de: "Saurer Geschmack in Brot kommt von Milchsäure und Essigsäure, die von Bakterien während langer Fermentation produziert werden, besonders in Sauerteig. Die Bakterien arbeiten neben Hefe und erzeugen den charakteristischen säuerlichen Geschmack.",
          nl: "Zure smaak in brood komt van melkzuur en azijnzuur geproduceerd door bacteriën tijdens lange fermentatie, vooral in zuurdesem. De bacteriën werken naast gist en creëren de karakteristieke zure smaak."
        }
      },
      {
        question: {
          en: "What is 'oven spring'?",
          es: "¿Qué es la 'expansión en el horno'?",
          de: "Was ist 'Ofentrieb'?",
          nl: "Wat is 'ovenrijs'?"
        },
        options: [
          { en: "The rapid rise of bread in the first minutes of baking", es: "La subida rápida del pan en los primeros minutos de horneado", de: "Das schnelle Aufgehen von Brot in den ersten Minuten des Backens", nl: "De snelle rijs van brood in de eerste minuten van bakken" },
          { en: "A type of spring-loaded oven door", es: "Un tipo de puerta de horno con resorte", de: "Eine Art federbelastete Ofentür", nl: "Een soort verende ovendeur" },
          { en: "Baking bread in springtime", es: "Hornear pan en primavera", de: "Brot im Frühling backen", nl: "Brood bakken in de lente" },
          { en: "The bouncy texture of fresh bread", es: "La textura elástica del pan fresco", de: "Die federnde Textur von frischem Brot", nl: "De veerkrachtige textuur van vers brood" }
        ],
        correct: 0,
        explanation: {
          en: "Oven spring is the final dramatic rise that occurs when bread first enters a hot oven. Heat causes yeast to become very active and gases to expand rapidly before the crust sets, often increasing loaf volume by 10-20%.",
          es: "La expansión en el horno es la subida dramática final que ocurre cuando el pan entra por primera vez en un horno caliente. El calor hace que la levadura se vuelva muy activa y los gases se expandan rápidamente antes de que la corteza se fije, a menudo aumentando el volumen de la hogaza en un 10-20%.",
          de: "Ofentrieb ist der letzte dramatische Aufgang, der auftritt, wenn Brot zuerst in einen heißen Ofen kommt. Hitze macht Hefe sehr aktiv und Gase dehnen sich schnell aus bevor die Kruste sich setzt, oft erhöht sich das Laibvolumen um 10-20%.",
          nl: "Ovenrijs is de laatste dramatische rijs die optreedt wanneer brood voor het eerst in een hete oven komt. Warmte maakt gist zeer actief en gassen zetten snel uit voordat de korst zich zet, vaak verhoogt het broodvolume met 10-20%."
        }
      },
      {
        question: {
          en: "Why do some bread recipes call for milk instead of water?",
          es: "¿Por qué algunas recetas de pan piden leche en lugar de agua?",
          de: "Warum verlangen einige Brotrezepte Milch anstelle von Wasser?",
          nl: "Waarom vragen sommige broodrecepten om melk in plaats van water?"
        },
        options: [
          { en: "Milk creates softer, richer bread with better browning", es: "La leche crea pan más suave y rico con mejor dorado", de: "Milch erzeugt weicheres, reicheres Brot mit besserer Bräunung", nl: "Melk creëert zachter, rijker brood met betere bruining" },
          { en: "Milk makes bread rise higher", es: "La leche hace que el pan suba más alto", de: "Milch lässt Brot höher aufgehen", nl: "Melk laat brood hoger rijzen" },
          { en: "Water is too expensive", es: "El agua es demasiado cara", de: "Wasser ist zu teuer", nl: "Water is te duur" },
          { en: "Milk prevents mold growth", es: "La leche previene el crecimiento de moho", de: "Milch verhindert Schimmelwachstum", nl: "Melk voorkomt schimmelgroei" }
        ],
        correct: 0,
        explanation: {
          en: "Milk adds fat, protein, and sugar (lactose) to bread dough. This creates a softer crumb, richer flavor, and better crust browning due to the Maillard reaction between milk proteins and sugars. Milk bread also stays fresh longer.",
          es: "La leche añade grasa, proteína y azúcar (lactosa) a la masa de pan. Esto crea una miga más suave, sabor más rico y mejor dorado de corteza debido a la reacción de Maillard entre proteínas de leche y azúcares. El pan de leche también se mantiene fresco por más tiempo.",
          de: "Milch fügt Fett, Protein und Zucker (Laktose) zum Brotteig hinzu. Dies erzeugt eine weichere Krume, reicheren Geschmack und bessere Krustenbräunung aufgrund der Maillard-Reaktion zwischen Milchproteinen und Zuckern. Milchbrot bleibt auch länger frisch.",
          nl: "Melk voegt vet, eiwit en suiker (lactose) toe aan brooddeeg. Dit creëert een zachter kruim, rijkere smaak en betere korstbruining door de Maillard-reactie tussen melkeiwitten en suikers. Melkbrood blijft ook langer vers."
        }
      },
      {
        question: {
          en: "What is the difference between active dry yeast and instant yeast?",
          es: "¿Cuál es la diferencia entre levadura seca activa y levadura instantánea?",
          de: "Was ist der Unterschied zwischen aktiver Trockenhefe und Instanthefe?",
          nl: "Wat is het verschil tussen actieve droge gist en instant gist?"
        },
        options: [
          { en: "Active dry needs dissolving in water, instant can be mixed directly with flour", es: "La activa seca necesita disolverse en agua, la instantánea puede mezclarse directamente con harina", de: "Aktive Trockenhefe muss in Wasser aufgelöst werden, Instanthefe kann direkt mit Mehl gemischt werden", nl: "Actieve droge moet opgelost worden in water, instant kan direct gemengd worden met meel" },
          { en: "They are exactly the same product", es: "Son exactamente el mismo producto", de: "Sie sind genau dasselbe Produkt", nl: "Ze zijn precies hetzelfde product" },
          { en: "Instant yeast is always better quality", es: "La levadura instantánea siempre es de mejor calidad", de: "Instanthefe ist immer bessere Qualität", nl: "Instant gist is altijd betere kwaliteit" },
          { en: "Active dry yeast works faster", es: "La levadura seca activa funciona más rápido", de: "Aktive Trockenhefe wirkt schneller", nl: "Actieve droge gist werkt sneller" }
        ],
        correct: 0,
        explanation: {
          en: "Active dry yeast has larger granules and should be dissolved in warm water before use. Instant yeast (also called rapid-rise or bread machine yeast) has finer particles and can be mixed directly into dry ingredients, working slightly faster.",
          es: "La levadura seca activa tiene gránulos más grandes y debe disolverse en agua tibia antes de usar. La levadura instantánea (también llamada levadura de subida rápida o de máquina de pan) tiene partículas más finas y puede mezclarse directamente en ingredientes secos, funcionando ligeramente más rápido.",
          de: "Aktive Trockenhefe hat größere Granulate und sollte vor Gebrauch in warmem Wasser aufgelöst werden. Instanthefe (auch Schnellhefe oder Brotmaschinenhefe genannt) hat feinere Partikel und kann direkt in trockene Zutaten gemischt werden, wirkt etwas schneller.",
          nl: "Actieve droge gist heeft grotere korrels en moet voor gebruik opgelost worden in warm water. Instant gist (ook wel snelrijzende of broodmachinegist genoemd) heeft fijnere deeltjes en kan direct in droge ingrediënten gemengd worden, werkt iets sneller."
        }
      },
      {
        question: {
          en: "What does 'retarding' dough mean?",
          es: "¿Qué significa 'retardar' la masa?",
          de: "Was bedeutet 'Retardieren' von Teig?",
          nl: "Wat betekent 'vertragen' van deeg?"
        },
        options: [
          { en: "Slowing fermentation by refrigerating dough", es: "Ralentizar la fermentación refrigerando la masa", de: "Fermentation durch Kühlen des Teigs verlangsamen", nl: "Fermentatie vertragen door deeg te koelen" },
          { en: "Stopping the dough from rising", es: "Detener que la masa suba", de: "Das Aufgehen des Teigs stoppen", nl: "Het deeg stoppen met rijzen" },
          { en: "Making dough harder to knead", es: "Hacer que la masa sea más difícil de amasar", de: "Teig schwerer zu kneten machen", nl: "Deeg moeilijker te kneden maken" },
          { en: "Removing yeast from dough", es: "Eliminar levadura de la masa", de: "Hefe aus Teig entfernen", nl: "Gist uit deeg verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "Retarding dough means refrigerating it to slow down fermentation. This extends flavor development, improves texture, and allows flexible timing - bakers can prepare dough one day and bake the next. Cold fermentation often produces more complex, flavorful bread.",
          es: "Retardar la masa significa refrigerarla para ralentizar la fermentación. Esto extiende el desarrollo del sabor, mejora la textura y permite un tiempo flexible - los panaderos pueden preparar masa un día y hornear al siguiente. La fermentación fría a menudo produce pan más complejo y sabroso.",
          de: "Retardieren von Teig bedeutet ihn zu kühlen um Fermentation zu verlangsamen. Dies verlängert die Geschmacksentwicklung, verbessert die Textur und ermöglicht flexibles Timing - Bäcker können Teig einen Tag vorbereiten und am nächsten backen. Kalte Fermentation produziert oft komplexeres, geschmackvolleres Brot.",
          nl: "Vertragen van deeg betekent het koelen om fermentatie te vertragen. Dit verlengt smaakontwikkeling, verbetert textuur en staat flexibele timing toe - bakkers kunnen deeg op één dag bereiden en de volgende dag bakken. Koude fermentatie produceert vaak complexer, smaakvoller brood."
        }
      },
      {
        question: {
          en: "What is a 'biga'?",
          es: "¿Qué es una 'biga'?",
          de: "Was ist eine 'Biga'?",
          nl: "Wat is een 'biga'?"
        },
        options: [
          { en: "An Italian pre-ferment using flour, water, and yeast", es: "Un pre-fermento italiano usando harina, agua y levadura", de: "Ein italienischer Vorteig aus Mehl, Wasser und Hefe", nl: "Een Italiaans voordeeg met meel, water en gist" },
          { en: "A large Italian oven", es: "Un horno italiano grande", de: "Ein großer italienischer Ofen", nl: "Een grote Italiaanse oven" },
          { en: "A bread-shaping technique", es: "Una técnica de formar pan", de: "Eine Brotformtechnik", nl: "Een broodvormtechniek" },
          { en: "An Italian bread knife", es: "Un cuchillo de pan italiano", de: "Ein italienisches Brotmesser", nl: "Een Italiaans broodmes" }
        ],
        correct: 0,
        explanation: {
          en: "Biga is an Italian pre-ferment similar to poolish but stiffer (50-60% hydration vs. 100%). It ferments for 12-16 hours, developing flavor and improving texture. Biga is commonly used in ciabatta and other Italian breads for complex flavor and open crumb structure.",
          es: "La biga es un pre-fermento italiano similar al poolish pero más firme (50-60% de hidratación vs. 100%). Fermenta durante 12-16 horas, desarrollando sabor y mejorando la textura. La biga se usa comúnmente en ciabatta y otros panes italianos para sabor complejo y estructura de miga abierta.",
          de: "Biga ist ein italienischer Vorteig ähnlich wie Poolish aber fester (50-60% Hydratation vs. 100%). Es fermentiert 12-16 Stunden, entwickelt Geschmack und verbessert die Textur. Biga wird häufig in Ciabatta und anderen italienischen Broten für komplexen Geschmack und offene Krumenstruktur verwendet.",
          nl: "Biga is een Italiaans voordeeg vergelijkbaar met poolish maar stijver (50-60% hydratatie vs. 100%). Het fermenteert 12-16 uur, ontwikkelt smaak en verbetert textuur. Biga wordt vaak gebruikt in ciabatta en andere Italiaanse broden voor complexe smaak en open kruimstructuur."
        }
      },
      {
        question: {
          en: "Why is salt important in bread making?",
          es: "¿Por qué es importante la sal en la elaboración del pan?",
          de: "Warum ist Salz wichtig beim Brotbacken?",
          nl: "Waarom is zout belangrijk bij het maken van brood?"
        },
        options: [
          { en: "Controls fermentation, strengthens gluten, and adds flavor", es: "Controla la fermentación, fortalece el gluten y añade sabor", de: "Kontrolliert Fermentation, stärkt Gluten und fügt Geschmack hinzu", nl: "Controleert fermentatie, versterkt gluten en voegt smaak toe" },
          { en: "Makes bread rise faster", es: "Hace que el pan suba más rápido", de: "Lässt Brot schneller aufgehen", nl: "Laat brood sneller rijzen" },
          { en: "Only adds flavor, has no other function", es: "Solo añade sabor, no tiene otra función", de: "Fügt nur Geschmack hinzu, hat keine andere Funktion", nl: "Voegt alleen smaak toe, heeft geen andere functie" },
          { en: "Kills bacteria in flour", es: "Mata bacterias en la harina", de: "Tötet Bakterien im Mehl", nl: "Doodt bacteriën in meel" }
        ],
        correct: 0,
        explanation: {
          en: "Salt serves multiple critical functions in bread: (1) controls yeast fermentation rate, preventing over-rising, (2) strengthens gluten structure for better texture, (3) enhances flavor and balances sweetness, (4) extends shelf life. Bread without salt tastes bland and has poor texture.",
          es: "La sal cumple múltiples funciones críticas en el pan: (1) controla la tasa de fermentación de levadura, previniendo sobre-subida, (2) fortalece la estructura del gluten para mejor textura, (3) realza el sabor y equilibra la dulzura, (4) extiende la vida útil. El pan sin sal sabe insípido y tiene mala textura.",
          de: "Salz erfüllt mehrere kritische Funktionen in Brot: (1) kontrolliert Hefe-Fermentationsrate, verhindert Über-Aufgehen, (2) stärkt Glutenstruktur für bessere Textur, (3) verbessert Geschmack und gleicht Süße aus, (4) verlängert Haltbarkeit. Brot ohne Salz schmeckt fade und hat schlechte Textur.",
          nl: "Zout vervult meerdere kritieke functies in brood: (1) controleert gist fermentatiesnelheid, voorkomt over-rijzen, (2) versterkt glutenstructuur voor betere textuur, (3) verbetert smaak en balanceert zoetheid, (4) verlengt houdbaarheid. Brood zonder zout smaakt flauw en heeft slechte textuur."
        }
      },
      {
        question: {
          en: "What causes large holes in bread crumb?",
          es: "¿Qué causa agujeros grandes en la miga del pan?",
          de: "Was verursacht große Löcher in der Brotkrume?",
          nl: "Wat veroorzaakt grote gaten in het broodkruim?"
        },
        options: [
          { en: "High hydration dough and proper fermentation", es: "Masa de alta hidratación y fermentación adecuada", de: "Hochhydratisierter Teig und richtige Fermentation", nl: "Hoge hydratie deeg en juiste fermentatie" },
          { en: "Adding baking soda", es: "Añadir bicarbonato de sodio", de: "Natron hinzufügen", nl: "Zuiveringszout toevoegen" },
          { en: "Baking at very low temperature", es: "Hornear a temperatura muy baja", de: "Bei sehr niedriger Temperatur backen", nl: "Bakken op zeer lage temperatuur" },
          { en: "Using old flour", es: "Usar harina vieja", de: "Altes Mehl verwenden", nl: "Oud meel gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Large, irregular holes (open crumb) result from wetter dough (70-80% hydration), gentle handling that preserves gas bubbles, and proper fermentation. Breads like ciabatta are prized for this texture. Over-kneading or degassing too much creates tight, even crumb instead.",
          es: "Agujeros grandes e irregulares (miga abierta) resultan de masa más húmeda (70-80% hidratación), manejo suave que preserva burbujas de gas y fermentación adecuada. Panes como ciabatta son valorados por esta textura. Sobre-amasar o desgasificar demasiado crea miga apretada y uniforme en su lugar.",
          de: "Große, unregelmäßige Löcher (offene Krume) resultieren aus feuchterem Teig (70-80% Hydratation), sanfter Handhabung die Gasblasen bewahrt, und richtiger Fermentation. Brote wie Ciabatta werden für diese Textur geschätzt. Über-Kneten oder zu viel Entgasen erzeugt stattdessen feste, gleichmäßige Krume.",
          nl: "Grote, onregelmatige gaten (open kruim) resulteren van natter deeg (70-80% hydratatie), zachte behandeling die gasbellen behoudt, en juiste fermentatie. Broden zoals ciabatta worden gewaardeerd voor deze textuur. Over-kneden of te veel ontgassen creëert in plaats daarvan strakke, egale kruim."
        }
      },
      {
        question: {
          en: "What is 'folding' dough?",
          es: "¿Qué es 'plegar' la masa?",
          de: "Was ist 'Falten' von Teig?",
          nl: "Wat is 'vouwen' van deeg?"
        },
        options: [
          { en: "A gentle kneading technique that strengthens dough during bulk fermentation", es: "Una técnica suave de amasado que fortalece la masa durante la fermentación en masa", de: "Eine sanfte Knettechnik die Teig während der Stockgare stärkt", nl: "Een zachte kneedtechniek die deeg versterkt tijdens bulkfermentatie" },
          { en: "Folding dough in half before baking", es: "Doblar la masa por la mitad antes de hornear", de: "Teig vor dem Backen halbieren", nl: "Deeg halveren voor het bakken" },
          { en: "Storing dough in a folded towel", es: "Almacenar masa en una toalla doblada", de: "Teig in einem gefalteten Handtuch lagern", nl: "Deeg bewaren in een gevouwen handdoek" },
          { en: "A decoration technique for bread crust", es: "Una técnica de decoración para corteza de pan", de: "Eine Dekorationstechnik für Brotkruste", nl: "Een decoratietechniek voor broodkorst" }
        ],
        correct: 0,
        explanation: {
          en: "Folding (also called stretch-and-fold) is a technique where dough is gently stretched and folded over itself during bulk fermentation. This builds gluten structure without aggressive kneading, especially useful for wet doughs. Typically done 3-4 times at 30-minute intervals.",
          es: "Plegar (también llamado estirar y doblar) es una técnica donde la masa se estira suavemente y se dobla sobre sí misma durante la fermentación en masa. Esto construye estructura de gluten sin amasado agresivo, especialmente útil para masas húmedas. Típicamente se hace 3-4 veces a intervalos de 30 minutos.",
          de: "Falten (auch Dehnen-und-Falten genannt) ist eine Technik, bei der Teig sanft gedehnt und während der Stockgare über sich selbst gefaltet wird. Dies baut Glutenstruktur auf ohne aggressives Kneten, besonders nützlich für feuchte Teige. Typischerweise 3-4 Mal in 30-Minuten-Intervallen durchgeführt.",
          nl: "Vouwen (ook wel stretch-and-fold genoemd) is een techniek waarbij deeg zacht uitgerekt en over zichzelf gevouwen wordt tijdens bulkfermentatie. Dit bouwt glutenstructuur op zonder agressief kneden, vooral nuttig voor natte degen. Typisch 3-4 keer gedaan met 30-minuten intervallen."
        }
      },
      {
        question: {
          en: "What is 'hydration' in bread making?",
          es: "¿Qué es 'hidratación' en la elaboración del pan?",
          de: "Was ist 'Hydratation' beim Brotbacken?",
          nl: "Wat is 'hydratatie' bij het maken van brood?"
        },
        options: [
          { en: "The ratio of water to flour in dough, expressed as a percentage", es: "La proporción de agua a harina en la masa, expresada como porcentaje", de: "Das Verhältnis von Wasser zu Mehl im Teig, ausgedrückt als Prozentsatz", nl: "De verhouding van water tot meel in deeg, uitgedrukt als percentage" },
          { en: "How much water the baker drinks", es: "Cuánta agua bebe el panadero", de: "Wie viel Wasser der Bäcker trinkt", nl: "Hoeveel water de bakker drinkt" },
          { en: "Adding water to dry bread", es: "Añadir agua a pan seco", de: "Wasser zu trockenem Brot hinzufügen", nl: "Water toevoegen aan droog brood" },
          { en: "Moisture content of finished bread", es: "Contenido de humedad del pan terminado", de: "Feuchtigkeitsgehalt von fertigem Brot", nl: "Vochtgehalte van afgewerkt brood" }
        ],
        correct: 0,
        explanation: {
          en: "Hydration is the baker's percentage of water relative to flour (water weight ÷ flour weight × 100). For example, 500g flour + 350g water = 70% hydration. Low hydration (50-60%) makes stiff dough; high hydration (75-85%) creates wet, sticky dough with open crumb.",
          es: "La hidratación es el porcentaje de panadero de agua relativo a harina (peso de agua ÷ peso de harina × 100). Por ejemplo, 500g de harina + 350g de agua = 70% de hidratación. Baja hidratación (50-60%) hace masa firme; alta hidratación (75-85%) crea masa húmeda y pegajosa con miga abierta.",
          de: "Hydratation ist der Bäckerprozentsatz von Wasser relativ zu Mehl (Wassergewicht ÷ Mehlgewicht × 100). Zum Beispiel 500g Mehl + 350g Wasser = 70% Hydratation. Niedrige Hydratation (50-60%) macht festen Teig; hohe Hydratation (75-85%) erzeugt feuchten, klebrigen Teig mit offener Krume.",
          nl: "Hydratatie is het bakkers percentage van water relatief tot meel (watergewicht ÷ meelgewicht × 100). Bijvoorbeeld 500g meel + 350g water = 70% hydratatie. Lage hydratatie (50-60%) maakt stijf deeg; hoge hydratatie (75-85%) creëert nat, plakkerig deeg met open kruim."
        }
      },
      {
        question: {
          en: "What is the purpose of adding sugar to bread dough?",
          es: "¿Cuál es el propósito de añadir azúcar a la masa de pan?",
          de: "Was ist der Zweck, Zucker zu Brotteig hinzuzufügen?",
          nl: "Wat is het doel van het toevoegen van suiker aan brooddeeg?"
        },
        options: [
          { en: "Feeds yeast, adds flavor, and improves browning", es: "Alimenta la levadura, añade sabor y mejora el dorado", de: "Füttert Hefe, fügt Geschmack hinzu und verbessert Bräunung", nl: "Voedt gist, voegt smaak toe en verbetert bruining" },
          { en: "Makes bread rise higher only", es: "Hace que el pan suba más alto solamente", de: "Lässt Brot nur höher aufgehen", nl: "Laat brood alleen hoger rijzen" },
          { en: "Prevents bread from getting stale", es: "Previene que el pan se ponga duro", de: "Verhindert dass Brot altbacken wird", nl: "Voorkomt dat brood oud wordt" },
          { en: "Strengthens gluten structure", es: "Fortalece la estructura del gluten", de: "Stärkt Glutenstruktur", nl: "Versterkt glutenstructuur" }
        ],
        correct: 0,
        explanation: {
          en: "Sugar serves multiple purposes: (1) provides food for yeast, accelerating fermentation, (2) adds sweetness and flavor, (3) improves crust browning through caramelization, (4) helps bread stay moist and soft longer, (5) creates a tender crumb. Too much sugar can inhibit yeast.",
          es: "El azúcar cumple múltiples propósitos: (1) proporciona alimento para la levadura, acelerando la fermentación, (2) añade dulzura y sabor, (3) mejora el dorado de la corteza a través de caramelización, (4) ayuda al pan a permanecer húmedo y suave por más tiempo, (5) crea una miga tierna. Demasiada azúcar puede inhibir la levadura.",
          de: "Zucker erfüllt mehrere Zwecke: (1) liefert Nahrung für Hefe, beschleunigt Fermentation, (2) fügt Süße und Geschmack hinzu, (3) verbessert Krustenbräunung durch Karamellisierung, (4) hilft Brot länger feucht und weich zu bleiben, (5) erzeugt eine zarte Krume. Zu viel Zucker kann Hefe hemmen.",
          nl: "Suiker dient meerdere doelen: (1) biedt voedsel voor gist, versnelt fermentatie, (2) voegt zoetheid en smaak toe, (3) verbetert korstbruining door karamelisatie, (4) helpt brood langer vochtig en zacht te blijven, (5) creëert een zacht kruim. Te veel suiker kan gist remmen."
        }
      },
      {
        question: {
          en: "What does 'bench rest' mean?",
          es: "¿Qué significa 'reposo en el banco'?",
          de: "Was bedeutet 'Teigruhe'?",
          nl: "Wat betekent 'bank rust'?"
        },
        options: [
          { en: "Letting shaped dough rest on work surface before final shaping", es: "Dejar reposar la masa formada en la superficie de trabajo antes del formado final", de: "Geformten Teig auf Arbeitsfläche ruhen lassen vor endgültigem Formen", nl: "Gevormd deeg laten rusten op werkoppervlak voor laatste vorming" },
          { en: "Resting after kneading dough", es: "Descansar después de amasar masa", de: "Nach dem Kneten von Teig ausruhen", nl: "Rusten na het kneden van deeg" },
          { en: "Taking a break from baking", es: "Tomar un descanso de hornear", de: "Eine Pause vom Backen machen", nl: "Een pauze nemen van bakken" },
          { en: "Cooling bread on a bench", es: "Enfriar pan en un banco", de: "Brot auf einer Bank abkühlen", nl: "Brood afkoelen op een bank" }
        ],
        correct: 0,
        explanation: {
          en: "Bench rest (or intermediate proof) is a short rest period (10-30 minutes) after dividing and pre-shaping dough, before final shaping. This relaxes gluten, making dough easier to shape without tearing and allowing better final shaping and structure.",
          es: "El reposo en el banco (o leudado intermedio) es un período de reposo corto (10-30 minutos) después de dividir y pre-formar la masa, antes del formado final. Esto relaja el gluten, haciendo que la masa sea más fácil de formar sin desgarrarse y permitiendo mejor formado final y estructura.",
          de: "Teigruhe (oder Zwischengare) ist eine kurze Ruhezeit (10-30 Minuten) nach dem Teilen und Vorformen von Teig, vor dem endgültigen Formen. Dies entspannt Gluten, macht Teig leichter formbar ohne zu reißen und ermöglicht besseres endgültiges Formen und Struktur.",
          nl: "Bank rust (of tussenrijzing) is een korte rustperiode (10-30 minuten) na het verdelen en voorvormen van deeg, voor de laatste vorming. Dit ontspant gluten, maakt deeg gemakkelijker te vormen zonder te scheuren en staat betere laatste vorming en structuur toe."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  } else if (typeof window !== 'undefined') {
    window.level2 = level2;
  }
})();
