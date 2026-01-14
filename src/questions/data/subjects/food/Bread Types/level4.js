// Bread Types Quiz - Level 4
(function() {
  const level4 = {
    name: {
      en: "Bread  Types Level 4",
      es: "Bread  Types Nivel 4",
      de: "Bread  Types Stufe 4",
      nl: "Bread  Types Level 4"
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
          en: "What is the 'coil fold' technique and why use it?",
          es: "¿Qué es la técnica de 'pliegue en espiral' y por qué usarla?",
          de: "Was ist die 'Coil Fold' Technik und warum verwendet man sie?",
          nl: "Wat is de 'coil fold' techniek en waarom gebruiken?"
        },
        options: [
          { en: "Gentle folding method for high-hydration doughs that builds strength without degassing - lift center, let ends fold under like a coil", es: "Método de plegado suave para masas de alta hidratación que desarrolla fuerza sin desgasificar - levante el centro, deje que los extremos se doblen debajo como una espiral", de: "Sanfte Falttechnik für hochhydrierte Teige, die Kraft aufbaut ohne zu entgasen - Mitte anheben, Enden falten sich darunter wie eine Spirale", nl: "Zachte vouwmethode voor hoog gehydrateerd deeg die kracht opbouwt zonder te ontgassen - til het midden op, laat uiteinden eronder vouwen als een spiraal" },
          { en: "Aggressive kneading method only for low-hydration bread dough", es: "Método de amasado agresivo solo para masa de pan de baja hidratación", de: "Aggressive Knetmethode nur für niedrig-hydrierten Brotteig", nl: "Agressieve kneedmethode alleen voor laag gehydrateerd brooddeeg" },
          { en: "Technique for shaping baguettes into spiral patterns", es: "Técnica para formar baguettes en patrones espirales", de: "Technik zum Formen von Baguettes in Spiralmuster", nl: "Techniek voor het vormen van stokbroden in spiraalpatronen" },
          { en: "Method of cooling bread by wrapping in metal coils", es: "Método de enfriar pan envolviéndolo en bobinas metálicas", de: "Methode zum Kühlen von Brot durch Einwickeln in Metallspiralen", nl: "Methode om brood af te koelen door in metalen spiralen te wikkelen" }
        ],
        correct: 0,
        explanation: {
          en: "The coil fold is a gentle technique perfect for wet doughs (75%+ hydration) - you lift the dough center and let the ends fold underneath, building gluten structure without pressing out precious gas bubbles.",
          es: "El pliegue en espiral es una técnica suave perfecta para masas húmedas (75%+ hidratación) - levantas el centro de la masa y dejas que los extremos se doblen debajo, desarrollando estructura de gluten sin presionar las preciosas burbujas de gas.",
          de: "Der Coil Fold ist eine sanfte Technik perfekt für nasse Teige (75%+ Hydratation) - man hebt die Teigmitte an und lässt die Enden darunter falten, baut Glutenstruktur auf ohne kostbare Gasblasen herauszudrücken.",
          nl: "De coil fold is een zachte techniek perfect voor natte degen (75%+ hydratatie) - je tilt het deegcentrum op en laat de uiteinden eronder vouwen, bouwt glutenstructuur op zonder kostbare gasbellen eruit te drukken."
        }
      },
      {
        question: {
          en: "What is 'slap and fold' (French fold) technique?",
          es: "¿Qué es la técnica de 'slap and fold' (pliegue francés)?",
          de: "Was ist die 'Slap and Fold' (Französische Falte) Technik?",
          nl: "Wat is de 'slap and fold' (Franse vouw) techniek?"
        },
        options: [
          { en: "Vigorous kneading method - lift wet dough high, slap onto counter, fold over itself repeatedly for 5-10 min to develop gluten quickly", es: "Método de amasado vigoroso - levante la masa húmeda alto, golpee sobre el mostrador, doble sobre sí misma repetidamente durante 5-10 min para desarrollar gluten rápidamente", de: "Kräftige Knetmethode - nassen Teig hochheben, auf Arbeitsfläche schlagen, wiederholt über sich selbst falten für 5-10 Min um Gluten schnell zu entwickeln", nl: "Krachtige kneedmethode - til nat deeg hoog op, sla op aanrecht, vouw herhaaldelijk over zichzelf voor 5-10 min om gluten snel te ontwikkelen" },
          { en: "Gentle resting period where dough is covered with towel for 30 minutes", es: "Período de reposo suave donde la masa se cubre con toalla durante 30 minutos", de: "Sanfte Ruhezeit wo Teig mit Handtuch bedeckt wird für 30 Minuten", nl: "Zachte rustperiode waar deeg bedekt wordt met handdoek voor 30 minuten" },
          { en: "Method of scoring bread with quick slapping motions", es: "Método de marcar pan con movimientos rápidos de golpeteo", de: "Methode zum Einschneiden von Brot mit schnellen Klatschbewegungen", nl: "Methode om brood te scoren met snelle klappende bewegingen" },
          { en: "Technique for shaping only French baguettes", es: "Técnica para formar solo baguettes francesas", de: "Technik nur zum Formen französischer Baguettes", nl: "Techniek alleen voor het vormen van Franse stokbroden" }
        ],
        correct: 0,
        explanation: {
          en: "Slap and fold is an energetic kneading technique where you repeatedly lift very wet dough, slap it forcefully onto the work surface, then fold it - the motion develops strong gluten networks in sticky, high-hydration doughs.",
          es: "Slap and fold es una técnica de amasado enérgica donde repetidamente levantas masa muy húmeda, la golpeas con fuerza sobre la superficie de trabajo, luego la doblas - el movimiento desarrolla redes de gluten fuertes en masas pegajosas de alta hidratación.",
          de: "Slap and Fold ist eine energische Knettechnik, bei der man wiederholt sehr nassen Teig anhebt, ihn kraftvoll auf die Arbeitsfläche schlägt, dann faltet - die Bewegung entwickelt starke Glutennetzwerke in klebrigen, hochhydrierten Teigen.",
          nl: "Slap and fold is een energieke kneedtechniek waarbij je herhaaldelijk zeer nat deeg optilt, het krachtig op het werkoppervlak slaat, dan vouwt - de beweging ontwikkelt sterke glutennetwerken in plakkerige, hoog gehydrateerde degen."
        }
      },
      {
        question: {
          en: "What is 'oven spring' and what factors maximize it?",
          es: "¿Qué es el 'oven spring' y qué factores lo maximizan?",
          de: "Was ist 'Ofentrieb' und welche Faktoren maximieren ihn?",
          nl: "Wat is 'oven spring' en welke factoren maximaliseren het?"
        },
        options: [
          { en: "Rapid rise in first 10-15 min of baking - maximized by: proper proofing (not over/under), steam injection, scoring, and active yeast producing final CO2 burst from heat", es: "Aumento rápido en los primeros 10-15 min de horneado - maximizado por: fermentación adecuada (no sobre/sub), inyección de vapor, marcado, y levadura activa produciendo explosión final de CO2 por calor", de: "Schneller Anstieg in ersten 10-15 Min des Backens - maximiert durch: richtige Gare (nicht über/unter), Dampfeinspritzung, Einschneiden, und aktive Hefe die finalen CO2-Stoß durch Hitze produziert", nl: "Snelle stijging in eerste 10-15 min van bakken - gemaximaliseerd door: juiste rijzing (niet over/onder), stoominjectie, scoren, en actieve gist die laatste CO2-uitbarsting produceert door hitte" },
          { en: "Slow cooling period after baking where bread contracts", es: "Período de enfriamiento lento después del horneado donde el pan se contrae", de: "Langsame Abkühlperiode nach dem Backen wo Brot sich zusammenzieht", nl: "Langzame afkoelperiode na het bakken waar brood samentrekt" },
          { en: "Metal spring inside oven that controls temperature", es: "Resorte metálico dentro del horno que controla la temperatura", de: "Metallfeder im Ofen die Temperatur kontrolliert", nl: "Metalen veer in de oven die temperatuur regelt" },
          { en: "Adding baking powder to dough just before baking", es: "Añadir polvo de hornear a la masa justo antes de hornear", de: "Backpulver zum Teig hinzufügen kurz vor dem Backen", nl: "Bakpoeder toevoegen aan deeg net voor bakken" }
        ],
        correct: 0,
        explanation: {
          en: "Oven spring is the dramatic final rise that happens in the first 10-15 minutes of baking when heat causes yeast's last CO2 production, alcohol expansion, and steam formation - proper proofing, steam, and scoring are critical to maximize it.",
          es: "Oven spring es el dramático aumento final que ocurre en los primeros 10-15 minutos de horneado cuando el calor causa la última producción de CO2 de la levadura, expansión de alcohol, y formación de vapor - fermentación adecuada, vapor, y marcado son críticos para maximizarlo.",
          de: "Ofentrieb ist der dramatische finale Aufgang der in den ersten 10-15 Minuten des Backens passiert wenn Hitze die letzte CO2-Produktion der Hefe, Alkoholexpansion, und Dampfbildung verursacht - richtige Gare, Dampf, und Einschneiden sind kritisch um ihn zu maximieren.",
          nl: "Oven spring is de dramatische finale rijs die plaatsvindt in de eerste 10-15 minuten van bakken wanneer hitte de laatste CO2-productie van gist veroorzaakt, alcoholexpansie, en stoomvorming - juiste rijzing, stoom, en scoren zijn cruciaal om het te maximaliseren."
        }
      },
      {
        question: {
          en: "What is 'stretch and fold' vs traditional kneading?",
          es: "¿Qué es 'stretch and fold' vs amasado tradicional?",
          de: "Was ist 'Stretch and Fold' vs traditionelles Kneten?",
          nl: "Wat is 'stretch and fold' vs traditioneel kneden?"
        },
        options: [
          { en: "Stretch and fold: gentle periodic folding during bulk fermentation (4-6 times over 2-3 hrs) - less work, preserves air, better for wet doughs. Kneading: intensive upfront work (10 min)", es: "Stretch and fold: plegado suave periódico durante fermentación en masa (4-6 veces en 2-3 hrs) - menos trabajo, preserva aire, mejor para masas húmedas. Amasado: trabajo intensivo inicial (10 min)", de: "Stretch and Fold: sanftes periodisches Falten während Stockgare (4-6 Mal über 2-3 Std) - weniger Arbeit, bewahrt Luft, besser für nasse Teige. Kneten: intensive Arbeit im Voraus (10 Min)", nl: "Stretch and fold: zacht periodiek vouwen tijdens bulk fermentatie (4-6 keer over 2-3 uur) - minder werk, behoudt lucht, beter voor natte degen. Kneden: intensief vooraf werk (10 min)" },
          { en: "They are exactly the same technique with different names", es: "Son exactamente la misma técnica con nombres diferentes", de: "Sie sind genau die gleiche Technik mit verschiedenen Namen", nl: "Ze zijn precies dezelfde techniek met verschillende namen" },
          { en: "Stretch and fold is only for pizza dough, kneading is only for sandwich bread", es: "Stretch and fold es solo para masa de pizza, amasado es solo para pan de sándwich", de: "Stretch and Fold ist nur für Pizzateig, Kneten ist nur für Sandwichbrot", nl: "Stretch and fold is alleen voor pizzadeeg, kneden is alleen voor sandwichbrood" },
          { en: "Kneading is gentle, stretch and fold is aggressive machine mixing", es: "Amasado es suave, stretch and fold es mezcla agresiva con máquina", de: "Kneten ist sanft, Stretch and Fold ist aggressives Maschinenmischen", nl: "Kneden is zacht, stretch and fold is agressief machinaal mixen" }
        ],
        correct: 0,
        explanation: {
          en: "Stretch and fold involves gently stretching dough and folding it over itself every 30-60 minutes during bulk fermentation (4-6 times total), building gluten gradually while preserving air bubbles - perfect for high-hydration artisan breads. Traditional kneading is intensive upfront work.",
          es: "Stretch and fold implica estirar suavemente la masa y doblarla sobre sí misma cada 30-60 minutos durante la fermentación en masa (4-6 veces en total), desarrollando gluten gradualmente mientras preserva burbujas de aire - perfecto para panes artesanales de alta hidratación. Amasado tradicional es trabajo intensivo inicial.",
          de: "Stretch and Fold beinhaltet sanftes Dehnen des Teigs und Falten über sich selbst alle 30-60 Minuten während der Stockgare (4-6 Mal insgesamt), baut Gluten schrittweise auf während Luftblasen bewahrt werden - perfekt für hochhydrierte handwerkliche Brote. Traditionelles Kneten ist intensive Arbeit im Voraus.",
          nl: "Stretch and fold houdt in dat deeg zacht wordt uitgerekt en over zichzelf wordt gevouwen elke 30-60 minuten tijdens bulk fermentatie (4-6 keer totaal), bouwt gluten geleidelijk op terwijl luchtbellen behouden blijven - perfect voor hoog gehydrateerde ambachtelijke broden. Traditioneel kneden is intensief vooraf werk."
        }
      },
      {
        question: {
          en: "What is a 'banneton' (brotform) and how does it work?",
          es: "¿Qué es un 'banneton' (brotform) y cómo funciona?",
          de: "Was ist ein 'Banneton' (Gärkorb) und wie funktioniert er?",
          nl: "Wat is een 'banneton' (rijsmandje) en hoe werkt het?"
        },
        options: [
          { en: "Rattan/cane proofing basket that supports shaped dough during final rise, wicks away moisture, creates beautiful spiral pattern on crust", es: "Cesta de fermentación de ratán/caña que soporta masa formada durante el levado final, absorbe humedad, crea hermoso patrón espiral en la corteza", de: "Rattan/Rohr-Gärkorb der geformten Teig während der Endgare stützt, Feuchtigkeit ableitet, schönes Spiralmuster auf Kruste erzeugt", nl: "Rotan/riet rijsmand die gevormd deeg ondersteunt tijdens laatste rijs, trekt vocht weg, creëert mooi spiraalpatroon op korst" },
          { en: "Metal tool for scoring bread before baking", es: "Herramienta metálica para marcar pan antes de hornear", de: "Metallwerkzeug zum Einschneiden von Brot vor dem Backen", nl: "Metalen gereedschap voor het scoren van brood voor bakken" },
          { en: "French bread-slicing machine used in bakeries", es: "Máquina francesa de cortar pan usada en panaderías", de: "Französische Brotschneidemaschine in Bäckereien verwendet", nl: "Franse broodsnijmachine gebruikt in bakkerijen" },
          { en: "Chemical additive that improves bread texture", es: "Aditivo químico que mejora la textura del pan", de: "Chemischer Zusatzstoff der Brottextur verbessert", nl: "Chemische toevoeging die broodtextuur verbetert" }
        ],
        correct: 0,
        explanation: {
          en: "A banneton is a proofing basket made from rattan or cane that supports dough shape during final fermentation, wicks away surface moisture for better crust, and creates distinctive spiral ridges on the bread surface.",
          es: "Un banneton es una cesta de fermentación hecha de ratán o caña que soporta la forma de la masa durante la fermentación final, absorbe la humedad superficial para mejor corteza, y crea distintivas crestas espirales en la superficie del pan.",
          de: "Ein Banneton ist ein Gärkorb aus Rattan oder Rohr der die Teigform während der Endgare stützt, Oberflächenfeuchtigkeit ableitet für bessere Kruste, und charakteristische Spiralrillen auf der Brotoberfläche erzeugt.",
          nl: "Een banneton is een rijsmand gemaakt van rotan of riet die deegvorm ondersteunt tijdens finale fermentatie, oppervlaktevocht afvoert voor betere korst, en kenmerkende spiraalrichels op het broodoppervlak creëert."
        }
      },
      {
        question: {
          en: "What is 'retarding' dough and why do bakers do it?",
          es: "¿Qué es 'retardar' la masa y por qué lo hacen los panaderos?",
          de: "Was ist 'Verzögern' von Teig und warum machen Bäcker das?",
          nl: "Wat is deeg 'vertragen' en waarom doen bakkers dat?"
        },
        options: [
          { en: "Cold fermentation in fridge (4-24+ hrs) - slows yeast, allows enzyme/bacterial flavor development, fits baking schedule, improves digestibility", es: "Fermentación fría en refrigerador (4-24+ hrs) - reduce levadura, permite desarrollo de sabor enzimático/bacteriano, se ajusta al horario de horneado, mejora digestibilidad", de: "Kalte Fermentation im Kühlschrank (4-24+ Std) - verlangsamt Hefe, erlaubt Enzym/Bakterien-Geschmacksentwicklung, passt Backplan, verbessert Verdaulichkeit", nl: "Koude fermentatie in koelkast (4-24+ uur) - vertraagt gist, staat enzym/bacteriële smaakontwikkeling toe, past bakschema, verbetert verteerbaarheid" },
          { en: "Adding chemicals to slow down yeast permanently", es: "Añadir químicos para reducir permanentemente la levadura", de: "Chemikalien hinzufügen um Hefe dauerhaft zu verlangsamen", nl: "Chemicaliën toevoegen om gist permanent te vertragen" },
          { en: "Kneading dough backwards to reverse gluten development", es: "Amasar masa hacia atrás para revertir el desarrollo de gluten", de: "Teig rückwärts kneten um Glutenentwicklung umzukehren", nl: "Deeg achteruit kneden om glutenontwikkeling om te keren" },
          { en: "Technique only used for sweet dessert breads", es: "Técnica solo usada para panes dulces de postre", de: "Technik nur für süße Dessertbrote verwendet", nl: "Techniek alleen gebruikt voor zoete dessertbroden" }
        ],
        correct: 0,
        explanation: {
          en: "Retarding means cold-fermenting dough in the refrigerator (typically overnight or 12-72 hours) which dramatically slows yeast activity but allows enzymes and bacteria to develop complex flavors, improves crust color, and gives bakers scheduling flexibility.",
          es: "Retardar significa fermentar en frío la masa en el refrigerador (típicamente durante la noche o 12-72 horas) lo que reduce dramáticamente la actividad de la levadura pero permite a enzimas y bacterias desarrollar sabores complejos, mejora el color de la corteza, y da flexibilidad de horario a los panaderos.",
          de: "Verzögern bedeutet kalte Fermentation des Teigs im Kühlschrank (typischerweise über Nacht oder 12-72 Stunden) was die Hefeaktivität dramatisch verlangsamt aber Enzymen und Bakterien erlaubt komplexe Aromen zu entwickeln, verbessert Krustenfarbe, und gibt Bäckern Planungsflexibilität.",
          nl: "Vertragen betekent koud fermenteren van deeg in de koelkast (typisch 's nachts of 12-72 uur) wat gistactiviteit dramatisch vertraagt maar enzymen en bacteriën toestaat complexe smaken te ontwikkelen, verbetert korstkleur, en geeft bakkers planningsflexibiliteit."
        }
      },
      {
        question: {
          en: "What causes 'tunneling' or large irregular holes in sandwich bread?",
          es: "¿Qué causa 'tunelización' o grandes agujeros irregulares en el pan de sándwich?",
          de: "Was verursacht 'Tunnelbildung' oder große unregelmäßige Löcher in Sandwichbrot?",
          nl: "Wat veroorzaakt 'tunneling' of grote onregelmatige gaten in sandwichbrood?"
        },
        options: [
          { en: "Improper degassing before shaping - large air pockets remain and expand during baking; also caused by uneven shaping or too-vigorous handling", es: "Desgasificación inadecuada antes de formar - grandes bolsas de aire permanecen y se expanden durante el horneado; también causado por formado desigual o manejo demasiado vigoroso", de: "Unsachgemäßes Entgasen vor dem Formen - große Lufttaschen bleiben und dehnen sich während des Backens aus; auch verursacht durch ungleichmäßiges Formen oder zu kräftige Handhabung", nl: "Onjuiste ontgassing voor het vormen - grote luchtzakken blijven en zetten uit tijdens bakken; ook veroorzaakt door ongelijk vormen of te krachtige behandeling" },
          { en: "Adding too much water makes bread have holes", es: "Añadir demasiada agua hace que el pan tenga agujeros", de: "Zu viel Wasser macht Brot mit Löchern", nl: "Te veel water toevoegen maakt brood met gaten" },
          { en: "Using whole wheat flour always creates tunnels", es: "Usar harina integral siempre crea túneles", de: "Verwendung von Vollkornmehl erzeugt immer Tunnel", nl: "Gebruik van volkoren meel creëert altijd tunnels" },
          { en: "Baking at too low temperature causes tunneling", es: "Hornear a temperatura demasiado baja causa tunelización", de: "Backen bei zu niedriger Temperatur verursacht Tunnelbildung", nl: "Bakken op te lage temperatuur veroorzaakt tunneling" }
        ],
        correct: 0,
        explanation: {
          en: "Tunneling (large irregular holes) in sandwich bread happens when you don't properly degas the dough before shaping - large air pockets stay trapped and expand dramatically during baking, creating unwanted caverns instead of even crumb.",
          es: "La tunelización (grandes agujeros irregulares) en el pan de sándwich ocurre cuando no desgasificas correctamente la masa antes de formar - grandes bolsas de aire quedan atrapadas y se expanden dramáticamente durante el horneado, creando cavernas no deseadas en lugar de miga uniforme.",
          de: "Tunnelbildung (große unregelmäßige Löcher) in Sandwichbrot passiert wenn man den Teig vor dem Formen nicht richtig entgast - große Lufttaschen bleiben gefangen und dehnen sich dramatisch während des Backens aus, erzeugen unerwünschte Hohlräume statt gleichmäßiger Krume.",
          nl: "Tunneling (grote onregelmatige gaten) in sandwichbrood gebeurt wanneer je het deeg niet goed ontgast voor het vormen - grote luchtzakken blijven gevangen en zetten dramatisch uit tijdens bakken, creëren ongewenste holtes in plaats van gelijkmatige kruim."
        }
      },
      {
        question: {
          en: "What is 'dough conditioner' and what does it do?",
          es: "¿Qué es 'acondicionador de masa' y qué hace?",
          de: "Was ist 'Teigverbesserer' und was macht er?",
          nl: "Wat is 'deegverbeteraar' en wat doet het?"
        },
        options: [
          { en: "Commercial blend of enzymes, emulsifiers, acids - strengthens gluten, improves volume, extends shelf life, makes dough easier to handle and more tolerant", es: "Mezcla comercial de enzimas, emulsionantes, ácidos - fortalece gluten, mejora volumen, extiende vida útil, hace masa más fácil de manejar y más tolerante", de: "Kommerzielle Mischung aus Enzymen, Emulgatoren, Säuren - stärkt Gluten, verbessert Volumen, verlängert Haltbarkeit, macht Teig leichter zu handhaben und toleranter", nl: "Commerciële mix van enzymen, emulgatoren, zuren - versterkt gluten, verbetert volume, verlengt houdbaarheid, maakt deeg makkelijker te hanteren en toleranter" },
          { en: "Special refrigerator for storing bread dough", es: "Refrigerador especial para almacenar masa de pan", de: "Spezieller Kühlschrank zum Lagern von Brotteig", nl: "Speciale koelkast voor het bewaren van brooddeeg" },
          { en: "Type of flour only used in professional bakeries", es: "Tipo de harina solo usada en panaderías profesionales", de: "Mehltyp nur in professionellen Bäckereien verwendet", nl: "Type meel alleen gebruikt in professionele bakkerijen" },
          { en: "Massage technique bakers use to relax bread dough", es: "Técnica de masaje que los panaderos usan para relajar la masa de pan", de: "Massagetechnik die Bäcker verwenden um Brotteig zu entspannen", nl: "Massagetechniek die bakkers gebruiken om brooddeeg te ontspannen" }
        ],
        correct: 0,
        explanation: {
          en: "Dough conditioner is a commercial blend containing enzymes (break down proteins/starches), emulsifiers (improve fat distribution), ascorbic acid, and other ingredients that strengthen gluten networks, increase loaf volume, improve texture, extend freshness, and make dough more forgiving.",
          es: "El acondicionador de masa es una mezcla comercial que contiene enzimas (descomponen proteínas/almidones), emulsionantes (mejoran distribución de grasa), ácido ascórbico, y otros ingredientes que fortalecen redes de gluten, aumentan volumen del pan, mejoran textura, extienden frescura, y hacen la masa más tolerante.",
          de: "Teigverbesserer ist eine kommerzielle Mischung mit Enzymen (bauen Proteine/Stärken ab), Emulgatoren (verbessern Fettverteilung), Ascorbinsäure, und anderen Zutaten die Glutennetzwerke stärken, Brotvolumen erhöhen, Textur verbessern, Frische verlängern, und Teig verzeihender machen.",
          nl: "Deegverbeteraar is een commerciële mix met enzymen (breken eiwitten/zetmeel af), emulgatoren (verbeteren vetverdeling), ascorbinezuur, en andere ingrediënten die glutennetwerken versterken, broodvolume verhogen, textuur verbeteren, versheid verlengen, en deeg vergevingsgezinder maken."
        }
      },
      {
        question: {
          en: "What is 'pain de mie' and how does it differ from regular white bread?",
          es: "¿Qué es 'pain de mie' y en qué se diferencia del pan blanco regular?",
          de: "Was ist 'Pain de Mie' und wie unterscheidet es sich von normalem Weißbrot?",
          nl: "Wat is 'pain de mie' en hoe verschilt het van gewoon wit brood?"
        },
        options: [
          { en: "French Pullman loaf - enriched with milk/butter, baked in lidded pan for perfectly square shape, fine even crumb, soft crust - ideal for sandwiches", es: "Pan Pullman francés - enriquecido con leche/mantequilla, horneado en molde con tapa para forma perfectamente cuadrada, miga fina uniforme, corteza suave - ideal para sándwiches", de: "Französisches Kastenbrot - angereichert mit Milch/Butter, in Kastenform mit Deckel gebacken für perfekt quadratische Form, feine gleichmäßige Krume, weiche Kruste - ideal für Sandwiches", nl: "Frans Pullman brood - verrijkt met melk/boter, gebakken in pan met deksel voor perfect vierkante vorm, fijne gelijkmatige kruim, zachte korst - ideaal voor sandwiches" },
          { en: "Italian sourdough bread with very thick crust", es: "Pan de masa madre italiano con corteza muy gruesa", de: "Italienisches Sauerteigbrot mit sehr dicker Kruste", nl: "Italiaans zuurdesembrood met zeer dikke korst" },
          { en: "German rye bread with caraway seeds", es: "Pan de centeno alemán con semillas de alcaravea", de: "Deutsches Roggenbrot mit Kümmel", nl: "Duits roggebrood met komijnzaad" },
          { en: "Spanish flatbread cooked on griddle", es: "Pan plano español cocido en plancha", de: "Spanisches Fladenbrot auf Grillplatte gekocht", nl: "Spaans platbrood gekookt op grillplaat" }
        ],
        correct: 0,
        explanation: {
          en: "Pain de mie (French for 'bread crumb') is a Pullman loaf - enriched white bread baked in a covered pan which prevents crust browning and creates a perfectly square shape with ultra-fine, soft, even crumb ideal for tea sandwiches and canapés.",
          es: "Pain de mie (francés para 'miga de pan') es un pan Pullman - pan blanco enriquecido horneado en molde cubierto que previene dorado de corteza y crea forma perfectamente cuadrada con miga ultra-fina, suave, uniforme ideal para sándwiches de té y canapés.",
          de: "Pain de Mie (Französisch für 'Brotkrume') ist ein Pullman-Brot - angereichertes Weißbrot in bedeckter Form gebacken das Krustenbräunung verhindert und perfekt quadratische Form mit ultra-feiner, weicher, gleichmäßiger Krume erzeugt ideal für Tee-Sandwiches und Canapés.",
          nl: "Pain de mie (Frans voor 'broodkruim') is een Pullman brood - verrijkt wit brood gebakken in bedekte pan die korstbruining voorkomt en perfect vierkante vorm creëert met ultra-fijne, zachte, gelijkmatige kruim ideaal voor thee sandwiches en canapés."
        }
      },
      {
        question: {
          en: "What is 'stiff starter' vs 'liquid starter' in sourdough?",
          es: "¿Qué es 'starter rígido' vs 'starter líquido' en masa madre?",
          de: "Was ist 'steifer Starter' vs 'flüssiger Starter' im Sauerteig?",
          nl: "Wat is 'stijve starter' vs 'vloeibare starter' in zuurdesem?"
        },
        options: [
          { en: "Stiff: 50-60% hydration (1:2 water:flour) - less acidic, milder flavor, slower ferment, better for sweet breads. Liquid: 100%+ hydration (1:1) - more acetic acid, tangy, faster, easier to mix", es: "Rígido: 50-60% hidratación (1:2 agua:harina) - menos ácido, sabor más suave, fermentación más lenta, mejor para panes dulces. Líquido: 100%+ hidratación (1:1) - más ácido acético, ácido, más rápido, más fácil de mezclar", de: "Steif: 50-60% Hydratation (1:2 Wasser:Mehl) - weniger sauer, milderer Geschmack, langsamere Fermentation, besser für süße Brote. Flüssig: 100%+ Hydratation (1:1) - mehr Essigsäure, säuerlich, schneller, leichter zu mischen", nl: "Stijf: 50-60% hydratatie (1:2 water:meel) - minder zuur, mildere smaak, langzamere fermentatie, beter voor zoete broden. Vloeibaar: 100%+ hydratatie (1:1) - meer azijnzuur, zuur, sneller, makkelijker te mengen" },
          { en: "They are the same thing with different names", es: "Son lo mismo con nombres diferentes", de: "Sie sind das Gleiche mit verschiedenen Namen", nl: "Ze zijn hetzelfde met verschillende namen" },
          { en: "Stiff starter is frozen, liquid starter is fresh", es: "Starter rígido es congelado, starter líquido es fresco", de: "Steifer Starter ist gefroren, flüssiger Starter ist frisch", nl: "Stijve starter is bevroren, vloeibare starter is vers" },
          { en: "Liquid starter is only for pizza, stiff is only for baguettes", es: "Starter líquido es solo para pizza, rígido es solo para baguettes", de: "Flüssiger Starter ist nur für Pizza, steifer nur für Baguettes", nl: "Vloeibare starter is alleen voor pizza, stijf is alleen voor stokbroden" }
        ],
        correct: 0,
        explanation: {
          en: "Stiff sourdough starter (50-60% hydration) produces less acetic acid, has milder flavor, ferments slower, and is preferred for sweeter breads like panettone. Liquid starter (100% hydration) ferments faster, develops more tang from acetic acid, and is easier to incorporate into dough.",
          es: "Starter de masa madre rígido (50-60% hidratación) produce menos ácido acético, tiene sabor más suave, fermenta más lento, y es preferido para panes más dulces como panettone. Starter líquido (100% hidratación) fermenta más rápido, desarrolla más acidez del ácido acético, y es más fácil de incorporar en la masa.",
          de: "Steifer Sauerteig-Starter (50-60% Hydratation) produziert weniger Essigsäure, hat milderen Geschmack, fermentiert langsamer, und wird für süßere Brote wie Panettone bevorzugt. Flüssiger Starter (100% Hydratation) fermentiert schneller, entwickelt mehr Säure durch Essigsäure, und ist leichter in Teig einzuarbeiten.",
          nl: "Stijve zuurdesem starter (50-60% hydratatie) produceert minder azijnzuur, heeft mildere smaak, fermenteert langzamer, en heeft voorkeur voor zoetere broden zoals panettone. Vloeibare starter (100% hydratatie) fermenteert sneller, ontwikkelt meer zuurheid van azijnzuur, en is makkelijker in deeg te verwerken."
        }
      },
      {
        question: {
          en: "What is 'scald' method in rye bread baking?",
          es: "¿Qué es el método de 'escaldado' en la elaboración de pan de centeno?",
          de: "Was ist die 'Brühstück' Methode beim Roggenbacken?",
          nl: "Wat is de 'kookstuk' methode bij roggebrood bakken?"
        },
        options: [
          { en: "Pouring boiling water over rye flour/meal to gelatinize starches - creates moist, sweet, dense crumb, extends shelf life, traditional in Baltic/Russian breads", es: "Verter agua hirviendo sobre harina/sémola de centeno para gelatinizar almidones - crea miga húmeda, dulce, densa, extiende vida útil, tradicional en panes bálticos/rusos", de: "Kochendes Wasser über Roggenmehl/-schrot gießen um Stärken zu gelatinieren - erzeugt feuchte, süße, dichte Krume, verlängert Haltbarkeit, traditionell in baltischen/russischen Broten", nl: "Kokend water over roggenmeel/-grof gieten om zetmelen te gelatineren - creëert vochtige, zoete, dichte kruim, verlengt houdbaarheid, traditioneel in Baltische/Russische broden" },
          { en: "Burning the top crust with a torch for flavor", es: "Quemar la corteza superior con un soplete para dar sabor", de: "Obere Kruste mit Brenner abbrennen für Geschmack", nl: "Bovenste korst verbranden met brander voor smaak" },
          { en: "Soaking rye berries in cold water for 24 hours", es: "Remojar bayas de centeno en agua fría durante 24 horas", de: "Roggenkörner 24 Stunden in kaltem Wasser einweichen", nl: "Roggekorrels 24 uur weken in koud water" },
          { en: "Adding hot oil to dough to improve texture", es: "Añadir aceite caliente a la masa para mejorar textura", de: "Heißes Öl zum Teig hinzufügen um Textur zu verbessern", nl: "Hete olie aan deeg toevoegen om textuur te verbeteren" }
        ],
        correct: 0,
        explanation: {
          en: "The scald (or 'brühstück') method involves pouring boiling water over rye flour or meal to gelatinize the starches - this pre-treatment creates incredibly moist, sweet, dense crumb, extends shelf life, and is essential for traditional dark rye breads like Borodinsky.",
          es: "El método de escaldado (o 'brühstück') implica verter agua hirviendo sobre harina o sémola de centeno para gelatinizar los almidones - este pretratamiento crea miga increíblemente húmeda, dulce, densa, extiende vida útil, y es esencial para panes de centeno oscuros tradicionales como Borodinsky.",
          de: "Die Brühstück-Methode beinhaltet kochendes Wasser über Roggenmehl oder -schrot zu gießen um die Stärken zu gelatinieren - diese Vorbehandlung erzeugt unglaublich feuchte, süße, dichte Krume, verlängert Haltbarkeit, und ist wesentlich für traditionelle dunkle Roggenbrote wie Borodinsky.",
          nl: "De kookstuk methode houdt in dat kokend water over roggenmeel of -grof wordt gegoten om de zetmelen te gelatineren - deze voorbehandeling creëert ongelooflijk vochtige, zoete, dichte kruim, verlengt houdbaarheid, en is essentieel voor traditionele donkere roggebroden zoals Borodinsky."
        }
      },
      {
        question: {
          en: "What is 'double hydration' technique in bread making?",
          es: "¿Qué es la técnica de 'doble hidratación' en la elaboración de pan?",
          de: "Was ist die 'Doppelhydratation' Technik beim Brotbacken?",
          nl: "Wat is de 'dubbele hydratatie' techniek bij brood maken?"
        },
        options: [
          { en: "Adding water in 2 stages - mix to shaggy dough with 80% water, rest, then add final 20% - allows easier gluten development in very wet doughs (80%+ hydration)", es: "Añadir agua en 2 etapas - mezclar a masa irregular con 80% agua, reposar, luego añadir 20% final - permite desarrollo de gluten más fácil en masas muy húmedas (80%+ hidratación)", de: "Wasser in 2 Stufen hinzufügen - zu struppigem Teig mit 80% Wasser mischen, ruhen, dann finale 20% hinzufügen - ermöglicht einfachere Glutenentwicklung in sehr nassen Teigen (80%+ Hydratation)", nl: "Water toevoegen in 2 stadia - mengen tot ruig deeg met 80% water, rusten, dan laatste 20% toevoegen - staat makkelijkere glutenontwikkeling toe in zeer natte degen (80%+ hydratatie)" },
          { en: "Using two different types of water (tap and bottled)", es: "Usar dos tipos diferentes de agua (grifo y embotellada)", de: "Zwei verschiedene Wassertypen verwenden (Leitungs- und Flaschenwasser)", nl: "Twee verschillende soorten water gebruiken (kraan en fles)" },
          { en: "Boiling dough twice before baking", es: "Hervir masa dos veces antes de hornear", de: "Teig zweimal kochen vor dem Backen", nl: "Deeg twee keer koken voor bakken" },
          { en: "Adding ice water and hot water simultaneously", es: "Añadir agua helada y agua caliente simultáneamente", de: "Eiswasser und heißes Wasser gleichzeitig hinzufügen", nl: "IJswater en heet water tegelijk toevoegen" }
        ],
        correct: 0,
        explanation: {
          en: "Double hydration means adding water in two stages - first mix with about 80% of total water to form shaggy dough, let rest (flour hydrates), then add remaining 20% water. This makes ultra-high hydration doughs (80-90%) much easier to handle and develop.",
          es: "Doble hidratación significa añadir agua en dos etapas - primero mezclar con aproximadamente 80% del agua total para formar masa irregular, dejar reposar (harina se hidrata), luego añadir 20% restante de agua. Esto hace masas de ultra-alta hidratación (80-90%) mucho más fáciles de manejar y desarrollar.",
          de: "Doppelhydratation bedeutet Wasser in zwei Stufen hinzuzufügen - zuerst mit etwa 80% des gesamten Wassers zu struppigem Teig mischen, ruhen lassen (Mehl hydratiert), dann verbleibendes 20% Wasser hinzufügen. Dies macht ultra-hochhydrierte Teige (80-90%) viel einfacher zu handhaben und entwickeln.",
          nl: "Dubbele hydratatie betekent water toevoegen in twee stadia - eerst mengen met ongeveer 80% van totaal water om ruig deeg te vormen, laten rusten (meel hydrateert), dan resterende 20% water toevoegen. Dit maakt ultra-hoog gehydrateerde degen (80-90%) veel makkelijker te hanteren en ontwikkelen."
        }
      },
      {
        question: {
          en: "What is 'bassinage' technique?",
          es: "¿Qué es la técnica de 'bassinage'?",
          de: "Was ist die 'Bassinage' Technik?",
          nl: "Wat is de 'bassinage' techniek?"
        },
        options: [
          { en: "French method of adding final 5-10% water very gradually while kneading developed dough - allows achieving very high hydration while maintaining dough strength", es: "Método francés de añadir 5-10% final de agua muy gradualmente mientras se amasa masa desarrollada - permite lograr hidratación muy alta manteniendo fuerza de masa", de: "Französische Methode um finale 5-10% Wasser sehr graduell während des Knetens von entwickeltem Teig hinzuzufügen - ermöglicht sehr hohe Hydratation zu erreichen während Teigstärke erhalten bleibt", nl: "Franse methode om laatste 5-10% water zeer geleidelijk toe te voegen tijdens kneden van ontwikkeld deeg - staat toe zeer hoge hydratatie te bereiken terwijl deegsterkte behouden blijft" },
          { en: "Italian technique for making pizza dough crispy", es: "Técnica italiana para hacer masa de pizza crujiente", de: "Italienische Technik um Pizzateig knusprig zu machen", nl: "Italiaanse techniek om pizzadeeg knapperig te maken" },
          { en: "German method of freezing bread after baking", es: "Método alemán de congelar pan después de hornear", de: "Deutsche Methode Brot nach dem Backen einzufrieren", nl: "Duitse methode om brood na bakken in te vriezen" },
          { en: "British way of slicing bread into perfect triangles", es: "Forma británica de cortar pan en triángulos perfectos", de: "Britische Art Brot in perfekte Dreiecke zu schneiden", nl: "Britse manier om brood in perfecte driehoeken te snijden" }
        ],
        correct: 0,
        explanation: {
          en: "Bassinage is a French technique where you develop the dough to near-completion, then slowly incorporate the final 5-10% of water while continuing to knead - this allows you to achieve very high hydration (85%+) while maintaining better dough strength and structure than adding all water upfront.",
          es: "Bassinage es una técnica francesa donde desarrollas la masa casi completamente, luego incorporas lentamente el 5-10% final de agua mientras continúas amasando - esto te permite lograr hidratación muy alta (85%+) mientras mantienes mejor fuerza y estructura de masa que añadiendo toda el agua al inicio.",
          de: "Bassinage ist eine französische Technik wo man den Teig fast vollständig entwickelt, dann langsam die finalen 5-10% Wasser einarbeitet während man weiter knetet - dies ermöglicht sehr hohe Hydratation (85%+) zu erreichen während bessere Teigstärke und Struktur erhalten bleibt als wenn alles Wasser am Anfang hinzugefügt wird.",
          nl: "Bassinage is een Franse techniek waarbij je het deeg bijna volledig ontwikkelt, dan langzaam de laatste 5-10% water verwerkt terwijl je blijft kneden - dit staat toe zeer hoge hydratatie (85%+) te bereiken terwijl betere deegsterkte en structuur behouden blijft dan alle water vooraf toevoegen."
        }
      },
      {
        question: {
          en: "What causes 'flying crust' (crust separation) in bread?",
          es: "¿Qué causa 'corteza voladora' (separación de corteza) en el pan?",
          de: "Was verursacht 'fliegende Kruste' (Krustentrennung) im Brot?",
          nl: "Wat veroorzaakt 'vliegende korst' (korstscheiding) in brood?"
        },
        options: [
          { en: "Skin forms on dough surface during proofing (dried out) - then separates from crumb during baking. Prevented by: covering dough, proper humidity, shorter proof, or misting", es: "Piel se forma en superficie de masa durante fermentación (secada) - luego se separa de miga durante horneado. Prevenido por: cubrir masa, humedad adecuada, fermentación más corta, o rociar", de: "Haut bildet sich auf Teigoberfläche während Gare (ausgetrocknet) - trennt sich dann von Krume während Backen. Verhindert durch: Teig abdecken, richtige Luftfeuchtigkeit, kürzere Gare, oder Besprühen", nl: "Huid vormt op deegoppervlak tijdens rijzing (uitgedroogd) - scheidt dan van kruim tijdens bakken. Voorkomen door: deeg afdekken, juiste vochtigheid, kortere rijs, of benevelen" },
          { en: "Adding too much yeast makes crust float away", es: "Añadir demasiada levadura hace que la corteza flote", de: "Zu viel Hefe lässt Kruste wegfliegen", nl: "Te veel gist toevoegen laat korst wegzweven" },
          { en: "Using metal pans instead of glass causes this", es: "Usar moldes metálicos en lugar de vidrio causa esto", de: "Verwendung von Metallformen statt Glas verursacht dies", nl: "Gebruik van metalen vormen in plaats van glas veroorzaakt dit" },
          { en: "Baking bread during windy weather", es: "Hornear pan durante clima ventoso", de: "Brot backen bei windigem Wetter", nl: "Brood bakken tijdens winderig weer" }
        ],
        correct: 0,
        explanation: {
          en: "Flying crust happens when the dough surface dries out during proofing, forming a skin that doesn't adhere to the expanding crumb during baking. Prevent it by properly covering dough during final proof, maintaining humidity, or lightly misting the surface before baking.",
          es: "La corteza voladora ocurre cuando la superficie de la masa se seca durante la fermentación, formando una piel que no se adhiere a la miga en expansión durante el horneado. Prevénlo cubriendo adecuadamente la masa durante la fermentación final, manteniendo humedad, o rociando ligeramente la superficie antes de hornear.",
          de: "Fliegende Kruste passiert wenn die Teigoberfläche während der Gare austrocknet und eine Haut bildet die nicht an der sich ausdehnenden Krume während des Backens haftet. Verhindern durch richtiges Abdecken des Teigs während Endgare, Aufrechterhaltung der Luftfeuchtigkeit, oder leichtes Besprühen der Oberfläche vor dem Backen.",
          nl: "Vliegende korst gebeurt wanneer het deegoppervlak uitdroogt tijdens rijzing, een huid vormt die niet hecht aan de uitzettende kruim tijdens bakken. Voorkom het door deeg goed af te dekken tijdens laatste rijs, vochtigheid te behouden, of oppervlak licht te benevelen voor bakken."
        }
      },
      {
        question: {
          en: "What is 'rope' in bread and how do you prevent it?",
          es: "¿Qué es 'rope' en el pan y cómo se previene?",
          de: "Was ist 'Fadenzieher' im Brot und wie verhindert man ihn?",
          nl: "Wat is 'rope' in brood en hoe voorkom je het?"
        },
        options: [
          { en: "Bacterial spoilage (Bacillus subtilis) causing sticky, stringy texture and fruity odor in bread - prevented by: lowering pH (add vinegar/citric acid), proper cooling, sanitation", es: "Deterioro bacteriano (Bacillus subtilis) causando textura pegajosa, fibrosa y olor afrutado en pan - prevenido por: bajar pH (añadir vinagre/ácido cítrico), enfriamiento adecuado, sanitización", de: "Bakterieller Verderb (Bacillus subtilis) verursacht klebrige, faserige Textur und fruchtigen Geruch im Brot - verhindert durch: pH senken (Essig/Zitronensäure hinzufügen), richtiges Abkühlen, Hygiene", nl: "Bacterieel bederf (Bacillus subtilis) veroorzaakt plakkerige, draadachtige textuur en fruitige geur in brood - voorkomen door: pH verlagen (azijn/citroenzuur toevoegen), goed afkoelen, hygiëne" },
          { en: "Adding actual rope to dough for decoration", es: "Añadir cuerda real a la masa para decoración", de: "Tatsächliches Seil zum Teig hinzufügen zur Dekoration", nl: "Echt touw aan deeg toevoegen voor decoratie" },
          { en: "Technique of braiding challah bread", es: "Técnica de trenzar pan challah", de: "Technik zum Flechten von Challah-Brot", nl: "Techniek van het vlechten van challahbrood" },
          { en: "Normal aging process that makes bread chewy", es: "Proceso de envejecimiento normal que hace el pan masticable", de: "Normaler Alterungsprozess der Brot zäh macht", nl: "Normaal verouderingsproces dat brood taai maakt" }
        ],
        correct: 0,
        explanation: {
          en: "Rope is a serious bacterial spoilage caused by Bacillus subtilis spores that survive baking, then germinate in warm bread creating sticky, stringy, rope-like texture and disgusting fruity smell. Prevent by acidifying dough (vinegar, sourdough), cooling bread quickly, and maintaining strict bakery sanitation.",
          es: "Rope es un deterioro bacteriano serio causado por esporas de Bacillus subtilis que sobreviven el horneado, luego germinan en pan caliente creando textura pegajosa, fibrosa, como cuerda y olor afrutado desagradable. Prevenir acidificando masa (vinagre, masa madre), enfriando pan rápidamente, y manteniendo estricta sanitización de panadería.",
          de: "Fadenzieher ist ein ernsthafter bakterieller Verderb verursacht durch Bacillus subtilis Sporen die das Backen überleben, dann in warmem Brot keimen und klebrige, faserige, seilartige Textur und ekelhaften fruchtigen Geruch erzeugen. Verhindern durch Ansäuern des Teigs (Essig, Sauerteig), schnelles Abkühlen von Brot, und strikte Bäckereihygiene.",
          nl: "Rope is een ernstig bacterieel bederf veroorzaakt door Bacillus subtilis sporen die bakken overleven, dan ontkiemen in warm brood en plakkerige, draadachtige, touwachtige textuur en walgelijke fruitige geur creëren. Voorkom door deeg aan te zuren (azijn, zuurdesem), brood snel af te koelen, en strikte bakkerij hygiëne te handhaven."
        }
      },
      {
        question: {
          en: "What is 'sponge and dough' method vs straight dough method?",
          es: "¿Qué es el método de 'esponja y masa' vs método de masa directa?",
          de: "Was ist 'Schwamm und Teig' Methode vs direkte Teigmethode?",
          nl: "Wat is 'spons en deeg' methode vs directe deeg methode?"
        },
        options: [
          { en: "Sponge & dough: mix flour, water, yeast first (ferment 3-8 hrs), then add remaining ingredients - better flavor, shelf life, tolerance. Straight: all ingredients mixed at once - faster, simpler", es: "Esponja y masa: mezclar harina, agua, levadura primero (fermentar 3-8 hrs), luego añadir ingredientes restantes - mejor sabor, vida útil, tolerancia. Directa: todos ingredientes mezclados a la vez - más rápido, más simple", de: "Schwamm & Teig: Mehl, Wasser, Hefe zuerst mischen (3-8 Std fermentieren), dann restliche Zutaten hinzufügen - besserer Geschmack, Haltbarkeit, Toleranz. Direkt: alle Zutaten auf einmal gemischt - schneller, einfacher", nl: "Spons & deeg: meel, water, gist eerst mengen (3-8 uur fermenteren), dan resterende ingrediënten toevoegen - betere smaak, houdbaarheid, tolerantie. Direct: alle ingrediënten tegelijk gemengd - sneller, simpeler" },
          { en: "They are exactly the same method", es: "Son exactamente el mismo método", de: "Sie sind genau die gleiche Methode", nl: "Ze zijn precies dezelfde methode" },
          { en: "Sponge method is only for cake, dough method is only for bread", es: "Método de esponja es solo para pastel, método de masa es solo para pan", de: "Schwammmethode ist nur für Kuchen, Teigmethode nur für Brot", nl: "Sponsmethode is alleen voor cake, deegmethode is alleen voor brood" },
          { en: "Straight dough uses more yeast and longer fermentation", es: "Masa directa usa más levadura y fermentación más larga", de: "Direkter Teig verwendet mehr Hefe und längere Fermentation", nl: "Direct deeg gebruikt meer gist en langere fermentatie" }
        ],
        correct: 0,
        explanation: {
          en: "Sponge and dough is a two-stage method: first mix flour, water, and yeast into a 'sponge' that ferments 3-8 hours, then add remaining ingredients. This develops superior flavor, improves shelf life, and makes dough more forgiving. Straight dough mixes everything at once - faster but less complex flavor.",
          es: "Esponja y masa es un método de dos etapas: primero mezclar harina, agua, y levadura en una 'esponja' que fermenta 3-8 horas, luego añadir ingredientes restantes. Esto desarrolla sabor superior, mejora vida útil, y hace masa más tolerante. Masa directa mezcla todo a la vez - más rápido pero sabor menos complejo.",
          de: "Schwamm und Teig ist eine zweistufige Methode: zuerst Mehl, Wasser, und Hefe zu einem 'Schwamm' mischen der 3-8 Stunden fermentiert, dann restliche Zutaten hinzufügen. Dies entwickelt überlegenen Geschmack, verbessert Haltbarkeit, und macht Teig verzeihender. Direkter Teig mischt alles auf einmal - schneller aber weniger komplexer Geschmack.",
          nl: "Spons en deeg is een tweefasige methode: eerst meel, water, en gist mengen tot een 'spons' die 3-8 uur fermenteert, dan resterende ingrediënten toevoegen. Dit ontwikkelt superieure smaak, verbetert houdbaarheid, en maakt deeg vergevingsgezinder. Direct deeg mengt alles tegelijk - sneller maar minder complexe smaak."
        }
      },
      {
        question: {
          en: "What is 'amylase' and its role in bread baking?",
          es: "¿Qué es 'amilasa' y su papel en la elaboración de pan?",
          de: "Was ist 'Amylase' und ihre Rolle beim Brotbacken?",
          nl: "Wat is 'amylase' en zijn rol bij brood bakken?"
        },
        options: [
          { en: "Enzyme that breaks down starches into sugars - provides food for yeast, improves crust color (Maillard), extends shelf life. Found naturally in flour, activated during fermentation", es: "Enzima que descompone almidones en azúcares - proporciona alimento para levadura, mejora color de corteza (Maillard), extiende vida útil. Se encuentra naturalmente en harina, activada durante fermentación", de: "Enzym das Stärken in Zucker abbaut - liefert Nahrung für Hefe, verbessert Krustenfarbe (Maillard), verlängert Haltbarkeit. Natürlich in Mehl vorhanden, während Fermentation aktiviert", nl: "Enzym dat zetmelen afbreekt tot suikers - levert voedsel voor gist, verbetert korstkleur (Maillard), verlengt houdbaarheid. Natuurlijk aanwezig in meel, geactiveerd tijdens fermentatie" },
          { en: "Type of flour only grown in France", es: "Tipo de harina solo cultivada en Francia", de: "Mehltyp nur in Frankreich angebaut", nl: "Type meel alleen geteeld in Frankrijk" },
          { en: "Chemical additive banned in most countries", es: "Aditivo químico prohibido en la mayoría de países", de: "Chemischer Zusatzstoff in den meisten Ländern verboten", nl: "Chemische toevoeging verboden in de meeste landen" },
          { en: "Metal tool used to score artisan bread", es: "Herramienta metálica usada para marcar pan artesanal", de: "Metallwerkzeug zum Einschneiden von handwerklichem Brot", nl: "Metalen gereedschap gebruikt om ambachtelijk brood te scoren" }
        ],
        correct: 0,
        explanation: {
          en: "Amylase is an enzyme naturally present in flour that breaks down complex starches into simple sugars. During fermentation, it provides food for yeast, contributes to crust browning through Maillard reaction, improves volume, and helps bread stay fresh longer by preventing staling.",
          es: "Amilasa es una enzima naturalmente presente en la harina que descompone almidones complejos en azúcares simples. Durante la fermentación, proporciona alimento para la levadura, contribuye al dorado de la corteza a través de la reacción de Maillard, mejora el volumen, y ayuda al pan a mantenerse fresco más tiempo previniendo el envejecimiento.",
          de: "Amylase ist ein Enzym das natürlich in Mehl vorhanden ist und komplexe Stärken in einfache Zucker abbaut. Während der Fermentation liefert es Nahrung für Hefe, trägt zur Krustenbräunung durch Maillard-Reaktion bei, verbessert Volumen, und hilft Brot länger frisch zu bleiben durch Verhinderung von Altbackenwerden.",
          nl: "Amylase is een enzym natuurlijk aanwezig in meel dat complexe zetmelen afbreekt tot eenvoudige suikers. Tijdens fermentatie levert het voedsel voor gist, draagt bij aan korstbruining door Maillard reactie, verbetert volume, en helpt brood langer vers te blijven door veroudering te voorkomen."
        }
      },
      {
        question: {
          en: "What is 'Chorleywood Bread Process' (CBP)?",
          es: "¿Qué es el 'Proceso de Pan Chorleywood' (CBP)?",
          de: "Was ist der 'Chorleywood Brotprozess' (CBP)?",
          nl: "Wat is het 'Chorleywood Brood Proces' (CBP)?"
        },
        options: [
          { en: "Industrial method using high-speed mechanical mixing (intense energy) + dough improvers to make bread in 3.5 hrs (no bulk fermentation) - widely used in UK/commercial bakeries", es: "Método industrial usando mezcla mecánica de alta velocidad (energía intensa) + mejoradores de masa para hacer pan en 3.5 hrs (sin fermentación en masa) - ampliamente usado en UK/panaderías comerciales", de: "Industrielle Methode mit Hochgeschwindigkeits-mechanischem Mischen (intensive Energie) + Teigverbesserer um Brot in 3,5 Std zu machen (keine Stockgare) - weit verbreitet in UK/kommerziellen Bäckereien", nl: "Industriële methode met hoge-snelheid mechanisch mixen (intense energie) + deegverbeteraars om brood te maken in 3,5 uur (geen bulk fermentatie) - breed gebruikt in UK/commerciële bakkerijen" },
          { en: "Traditional hand-kneading technique from medieval England", es: "Técnica tradicional de amasado a mano de la Inglaterra medieval", de: "Traditionelle Handknettechnik aus dem mittelalterlichen England", nl: "Traditionele handkneedtechniek uit middeleeuws Engeland" },
          { en: "Type of sourdough starter cultivated in Chorleywood forest", es: "Tipo de masa madre cultivada en el bosque de Chorleywood", de: "Art von Sauerteig-Starter im Chorleywood-Wald kultiviert", nl: "Type zuurdesem starter gekweekt in Chorleywood bos" },
          { en: "Slow fermentation method taking 48 hours", es: "Método de fermentación lenta que toma 48 horas", de: "Langsame Fermentationsmethode die 48 Stunden dauert", nl: "Langzame fermentatiemethode die 48 uur duurt" }
        ],
        correct: 0,
        explanation: {
          en: "The Chorleywood Bread Process (developed 1961) revolutionized industrial baking by using intense high-speed mechanical mixing to develop gluten in minutes instead of hours of fermentation. Combined with improvers/additives, it produces bread in just 3.5 hours from flour to finished loaf - now used for ~80% of UK bread.",
          es: "El Proceso de Pan Chorleywood (desarrollado en 1961) revolucionó la panadería industrial usando mezcla mecánica intensa de alta velocidad para desarrollar gluten en minutos en lugar de horas de fermentación. Combinado con mejoradores/aditivos, produce pan en solo 3.5 horas desde harina hasta pan terminado - ahora usado para ~80% del pan del Reino Unido.",
          de: "Der Chorleywood Brotprozess (entwickelt 1961) revolutionierte das industrielle Backen durch intensive Hochgeschwindigkeits-mechanische Mischung um Gluten in Minuten statt Stunden Fermentation zu entwickeln. Kombiniert mit Verbesserern/Zusätzen produziert es Brot in nur 3,5 Stunden von Mehl zu fertigem Laib - jetzt für ~80% des UK-Brots verwendet.",
          nl: "Het Chorleywood Brood Proces (ontwikkeld 1961) revolutioneerde industrieel bakken door intensief hoge-snelheid mechanisch mixen te gebruiken om gluten te ontwikkelen in minuten in plaats van uren fermentatie. Gecombineerd met verbeteraars/toevoegingen produceert het brood in slechts 3,5 uur van meel tot voltooid brood - nu gebruikt voor ~80% van UK brood."
        }
      },
      {
        question: {
          en: "What is 'crumb shot' in bread baking community?",
          es: "¿Qué es 'crumb shot' en la comunidad de elaboración de pan?",
          de: "Was ist 'Krumenbild' in der Brotback-Community?",
          nl: "Wat is 'kruimfoto' in de brood bak gemeenschap?"
        },
        options: [
          { en: "Photo showing cross-section of sliced bread to display internal crumb structure - used to judge: hole size/distribution, texture, proper fermentation, gluten development", es: "Foto mostrando sección transversal de pan rebanado para mostrar estructura de miga interna - usado para juzgar: tamaño/distribución de agujeros, textura, fermentación adecuada, desarrollo de gluten", de: "Foto zeigt Querschnitt von geschnittenem Brot um innere Krumenstruktur zu zeigen - verwendet um zu beurteilen: Lochgröße/-verteilung, Textur, richtige Fermentation, Glutenentwicklung", nl: "Foto toont doorsnede van gesneden brood om interne kruimstructuur te tonen - gebruikt om te beoordelen: gatgrootte/-verdeling, textuur, juiste fermentatie, glutenontwikkeling" },
          { en: "Special scoring pattern on top of artisan loaves", es: "Patrón de marcado especial en la parte superior de panes artesanales", de: "Spezielles Einschnittmuster auf handwerklichen Laiben", nl: "Speciaal scorepatroon op bovenkant van ambachtelijke broden" },
          { en: "Type of camera specifically designed for food photography", es: "Tipo de cámara específicamente diseñada para fotografía de comida", de: "Kameratyp speziell für Food-Fotografie entwickelt", nl: "Type camera speciaal ontworpen voor foodfotografie" },
          { en: "Technique for creating holes in ciabatta using tools", es: "Técnica para crear agujeros en ciabatta usando herramientas", de: "Technik zum Erzeugen von Löchern in Ciabatta mit Werkzeugen", nl: "Techniek voor het creëren van gaten in ciabatta met gereedschap" }
        ],
        correct: 0,
        explanation: {
          en: "A 'crumb shot' is a photo of sliced bread showing the internal structure - the holy grail of bread bakers. It reveals everything: hole structure (open vs tight crumb), fermentation quality, gluten development, proper shaping. Bakers share crumb shots online to showcase their work and diagnose problems.",
          es: "Un 'crumb shot' es una foto de pan rebanado mostrando la estructura interna - el santo grial de los panaderos. Revela todo: estructura de agujeros (miga abierta vs apretada), calidad de fermentación, desarrollo de gluten, formado adecuado. Los panaderos comparten crumb shots en línea para mostrar su trabajo y diagnosticar problemas.",
          de: "Ein 'Krumenbild' ist ein Foto von geschnittenem Brot das die innere Struktur zeigt - der heilige Gral der Brotbäcker. Es offenbart alles: Lochstruktur (offene vs enge Krume), Fermentationsqualität, Glutenentwicklung, richtiges Formen. Bäcker teilen Krumenbilder online um ihre Arbeit zu präsentieren und Probleme zu diagnostizieren.",
          nl: "Een 'kruimfoto' is een foto van gesneden brood die de interne structuur toont - de heilige graal van broodbakkers. Het onthult alles: gatstructuur (open vs dichte kruim), fermentatiekwaliteit, glutenontwikkeling, juist vormen. Bakkers delen kruimfoto's online om hun werk te tonen en problemen te diagnosticeren."
        }
      },
      {
        question: {
          en: "What is 'ropiness' vs 'mold' in bread spoilage?",
          es: "¿Qué es 'ropiness' vs 'moho' en el deterioro del pan?",
          de: "Was ist 'Fadenzieher' vs 'Schimmel' beim Brotverderb?",
          nl: "Wat is 'ropiness' vs 'schimmel' bij broodbederf?"
        },
        options: [
          { en: "Ropiness: bacterial (Bacillus), sticky/stringy inside, fruity smell, happens in fresh warm bread. Mold: fungal growth on surface, fuzzy appearance, happens after several days in moisture", es: "Ropiness: bacteriano (Bacillus), pegajoso/fibroso dentro, olor afrutado, ocurre en pan fresco caliente. Moho: crecimiento fúngico en superficie, apariencia peluda, ocurre después de varios días en humedad", de: "Fadenzieher: bakteriell (Bacillus), klebrig/faserig innen, fruchtiger Geruch, passiert in frischem warmem Brot. Schimmel: Pilzwachstum auf Oberfläche, flaumiges Aussehen, passiert nach mehreren Tagen in Feuchtigkeit", nl: "Ropiness: bacterieel (Bacillus), plakkerig/draadachtig binnen, fruitige geur, gebeurt in vers warm brood. Schimmel: schimmelgroei op oppervlak, pluizig uiterlijk, gebeurt na meerdere dagen in vochtigheid" },
          { en: "They are exactly the same thing", es: "Son exactamente lo mismo", de: "Sie sind genau dasselbe", nl: "Ze zijn precies hetzelfde" },
          { en: "Ropiness is safe to eat, mold is dangerous", es: "Ropiness es seguro para comer, moho es peligroso", de: "Fadenzieher ist sicher zu essen, Schimmel ist gefährlich", nl: "Ropiness is veilig om te eten, schimmel is gevaarlijk" },
          { en: "Mold happens in dry conditions, ropiness in wet", es: "Moho ocurre en condiciones secas, ropiness en húmedas", de: "Schimmel passiert in trockenen Bedingungen, Fadenzieher in nassen", nl: "Schimmel gebeurt in droge omstandigheden, ropiness in natte" }
        ],
        correct: 0,
        explanation: {
          en: "Ropiness is bacterial spoilage from Bacillus species creating sticky, stringy texture inside fresh bread with fruity odor - spores survive baking. Mold is fungal growth appearing as fuzzy spots on bread surface after several days in humid conditions. Both require disposal but have different causes and timelines.",
          es: "Ropiness es deterioro bacteriano de especies Bacillus creando textura pegajosa, fibrosa dentro de pan fresco con olor afrutado - esporas sobreviven el horneado. Moho es crecimiento fúngico apareciendo como manchas peludas en superficie de pan después de varios días en condiciones húmedas. Ambos requieren eliminación pero tienen diferentes causas y cronologías.",
          de: "Fadenzieher ist bakterieller Verderb von Bacillus-Arten der klebrige, faserige Textur in frischem Brot mit fruchtigem Geruch erzeugt - Sporen überleben das Backen. Schimmel ist Pilzwachstum das als flaumige Flecken auf Brotoberfläche nach mehreren Tagen in feuchten Bedingungen erscheint. Beide erfordern Entsorgung aber haben verschiedene Ursachen und Zeitrahmen.",
          nl: "Ropiness is bacterieel bederf van Bacillus soorten die plakkerige, draadachtige textuur in vers brood creëren met fruitige geur - sporen overleven bakken. Schimmel is schimmelgroei die verschijnt als pluizige vlekken op broodoppervlak na meerdere dagen in vochtige omstandigheden. Beide vereisen verwijdering maar hebben verschillende oorzaken en tijdlijnen."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  } else if (typeof window !== 'undefined') {
    window.level4 = level4;
  }
})();
