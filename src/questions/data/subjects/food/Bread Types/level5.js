// Bread Types Quiz - Level 5
(function() {
  const level5 = {
    name: {
      en: "Bread  Types Level 5",
      es: "Bread  Types Nivel 5",
      de: "Bread  Types Stufe 5",
      nl: "Bread  Types Level 5"
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
          en: "What is 'protease' enzyme and why do bakers sometimes avoid it?",
          es: "¿Qué es la enzima 'proteasa' y por qué los panaderos a veces la evitan?",
          de: "Was ist das Enzym 'Protease' und warum vermeiden es Bäcker manchmal?",
          nl: "Wat is het enzym 'protease' en waarom vermijden bakkers het soms?"
        },
        options: [
          { en: "Enzyme that breaks down gluten proteins - excessive protease (from overripe sourdough, pineapple, kiwi, papaya) makes dough sticky, slack, unable to hold shape", es: "Enzima que descompone proteínas de gluten - proteasa excesiva (de masa madre sobre-madura, piña, kiwi, papaya) hace masa pegajosa, floja, incapaz de mantener forma", de: "Enzym das Glutenproteine abbaut - übermäßige Protease (von überreifem Sauerteig, Ananas, Kiwi, Papaya) macht Teig klebrig, schlaff, unfähig Form zu halten", nl: "Enzym dat glutenproteïnen afbreekt - overmatige protease (van overrijpe zuurdesem, ananas, kiwi, papaja) maakt deeg plakkerig, slap, kan vorm niet vasthouden" },
          { en: "Enzyme that only improves bread quality in all cases", es: "Enzima que solo mejora la calidad del pan en todos los casos", de: "Enzym das nur in allen Fällen die Brotqualität verbessert", nl: "Enzym dat alleen broodkwaliteit verbetert in alle gevallen" },
          { en: "Type of yeast used only for sweet breads", es: "Tipo de levadura usada solo para panes dulces", de: "Hefeart nur für süße Brote verwendet", nl: "Type gist alleen gebruikt voor zoete broden" },
          { en: "Chemical additive that speeds up fermentation", es: "Aditivo químico que acelera la fermentación", de: "Chemischer Zusatzstoff der Fermentation beschleunigt", nl: "Chemische toevoeging die fermentatie versnelt" }
        ],
        correct: 0,
        explanation: {
          en: "Protease is an enzyme that breaks down gluten proteins into smaller peptides. While small amounts help with extensibility, excessive protease (from over-fermented sourdough, tropical fruits like pineapple/kiwi, or certain malted flours) weakens gluten structure, making dough impossibly sticky and slack.",
          es: "Proteasa es una enzima que descompone proteínas de gluten en péptidos más pequeños. Mientras que pequeñas cantidades ayudan con la extensibilidad, proteasa excesiva (de masa madre sobre-fermentada, frutas tropicales como piña/kiwi, o ciertas harinas malteadas) debilita la estructura de gluten, haciendo masa imposiblemente pegajosa y floja.",
          de: "Protease ist ein Enzym das Glutenproteine in kleinere Peptide abbaut. Während kleine Mengen bei der Dehnbarkeit helfen, schwächt übermäßige Protease (von überfermentiertem Sauerteig, tropischen Früchten wie Ananas/Kiwi, oder bestimmten Malzmehlen) die Glutenstruktur, macht Teig unmöglich klebrig und schlaff.",
          nl: "Protease is een enzym dat glutenproteïnen afbreekt tot kleinere peptiden. Terwijl kleine hoeveelheden helpen bij rekbaarheid, verzwakt overmatige protease (van overgefermenteerde zuurdesem, tropische vruchten zoals ananas/kiwi, of bepaalde gemout melen) de glutenstructuur, maakt deeg onmogelijk plakkerig en slap."
        }
      },
      {
        question: {
          en: "What is 'blistering' on bread crust and how do you achieve it?",
          es: "¿Qué es el 'ampollamiento' en la corteza del pan y cómo se logra?",
          de: "Was ist 'Blasenbildung' auf Brotkruste und wie erreicht man sie?",
          nl: "Wat is 'blistering' op broodkorst en hoe bereik je het?"
        },
        options: [
          { en: "Beautiful bubbles/blisters on crust surface - achieved by: high hydration (75%+), cold fermentation, light dusting of flour, high-heat baking with steam in first 15 min", es: "Hermosas burbujas/ampollas en superficie de corteza - logrado por: alta hidratación (75%+), fermentación fría, ligero espolvoreado de harina, horneado a alta temperatura con vapor en primeros 15 min", de: "Schöne Blasen auf Krustenoberfläche - erreicht durch: hohe Hydratation (75%+), kalte Fermentation, leichtes Bestäuben mit Mehl, Hochtemperatur-Backen mit Dampf in ersten 15 Min", nl: "Mooie bellen/blaren op korstoppervlak - bereikt door: hoge hydratatie (75%+), koude fermentatie, lichte bestuiving met meel, hoge-temperatuur bakken met stoom in eerste 15 min" },
          { en: "Burnt spots on bread that should be avoided at all costs", es: "Manchas quemadas en pan que deben evitarse a toda costa", de: "Verbrannte Stellen auf Brot die um jeden Preis vermieden werden sollten", nl: "Verbrande plekken op brood die ten koste van alles vermeden moeten worden" },
          { en: "Type of scoring pattern used only for baguettes", es: "Tipo de patrón de marcado usado solo para baguettes", de: "Art von Einschnittmuster nur für Baguettes verwendet", nl: "Type scorepatroon alleen gebruikt voor stokbroden" },
          { en: "Disease that affects bread dough during rising", es: "Enfermedad que afecta la masa de pan durante el levado", de: "Krankheit die Brotteig während des Aufgehens betrifft", nl: "Ziekte die brooddeeg beïnvloedt tijdens rijzen" }
        ],
        correct: 0,
        explanation: {
          en: "Blistering refers to the gorgeous bubbles that form on artisan bread crust. It's achieved through high-hydration dough (75%+ water), cold retarding, light flour dusting (creates moisture pockets), and baking at high heat (450-500°F) with strong steam in the first 15 minutes.",
          es: "Ampollamiento se refiere a las hermosas burbujas que se forman en la corteza del pan artesanal. Se logra a través de masa de alta hidratación (75%+ agua), retardo en frío, ligero espolvoreado de harina (crea bolsas de humedad), y horneado a alta temperatura (232-260°C) con vapor fuerte en los primeros 15 minutos.",
          de: "Blasenbildung bezieht sich auf die wunderschönen Blasen die sich auf handwerklicher Brotkruste bilden. Es wird erreicht durch hochhydrierten Teig (75%+ Wasser), kaltes Verzögern, leichtes Mehlbestäuben (erzeugt Feuchtigkeitstaschen), und Backen bei hoher Hitze (232-260°C) mit starkem Dampf in den ersten 15 Minuten.",
          nl: "Blistering verwijst naar de prachtige bellen die vormen op ambachtelijke broodkorst. Het wordt bereikt door hoog gehydrateerd deeg (75%+ water), koud vertragen, licht meelbestuiven (creëert vochtpockets), en bakken op hoge hitte (232-260°C) met sterke stoom in de eerste 15 minuten."
        }
      },
      {
        question: {
          en: "What is 'lamination' in sourdough (not croissants)?",
          es: "¿Qué es 'laminación' en masa madre (no croissants)?",
          de: "Was ist 'Laminierung' im Sauerteig (nicht Croissants)?",
          nl: "Wat is 'laminatie' in zuurdesem (niet croissants)?"
        },
        options: [
          { en: "Stretching wet dough paper-thin on counter, optionally adding inclusions (seeds, herbs, cheese), then folding into layers - builds strength, incorporates ingredients evenly without mixing", es: "Estirar masa húmeda muy delgada sobre mostrador, opcionalmente añadiendo inclusiones (semillas, hierbas, queso), luego doblar en capas - desarrolla fuerza, incorpora ingredientes uniformemente sin mezclar", de: "Nassen Teig papierdünn auf Arbeitsfläche dehnen, optional Zugaben hinzufügen (Samen, Kräuter, Käse), dann in Schichten falten - baut Stärke auf, integriert Zutaten gleichmäßig ohne Mischen", nl: "Nat deeg papierdun uitrekken op aanrecht, optioneel toevoegingen toevoegen (zaden, kruiden, kaas), dan vouwen in lagen - bouwt kracht op, integreert ingrediënten gelijkmatig zonder mengen" },
          { en: "Adding butter between layers like croissants", es: "Añadir mantequilla entre capas como croissants", de: "Butter zwischen Schichten hinzufügen wie Croissants", nl: "Boter toevoegen tussen lagen zoals croissants" },
          { en: "Baking bread in a laminating machine", es: "Hornear pan en una máquina laminadora", de: "Brot in einer Laminiermaschine backen", nl: "Brood bakken in een lamineer machine" },
          { en: "Coating bread with plastic wrap before proofing", es: "Cubrir pan con envoltura plástica antes de fermentar", de: "Brot vor dem Gehen mit Plastikfolie überziehen", nl: "Brood bedekken met plastic voor rijzen" }
        ],
        correct: 0,
        explanation: {
          en: "Lamination in sourdough is a gentle dough strengthening technique where you stretch very wet dough into a thin sheet on a wet counter, optionally sprinkle inclusions (seeds, olives, cheese), then fold it back into layers like a letter. This builds gluten structure without degassing and evenly distributes add-ins.",
          es: "Laminación en masa madre es una técnica suave de fortalecimiento de masa donde estiras masa muy húmeda en una lámina delgada sobre un mostrador mojado, opcionalmente espolvoreas inclusiones (semillas, aceitunas, queso), luego la doblas de vuelta en capas como una carta. Esto desarrolla estructura de gluten sin desgasificar y distribuye uniformemente los agregados.",
          de: "Laminierung im Sauerteig ist eine sanfte Teigstärkungstechnik wo man sehr nassen Teig in ein dünnes Blatt auf nasser Arbeitsfläche dehnt, optional Zugaben streut (Samen, Oliven, Käse), dann zurück in Schichten wie einen Brief faltet. Dies baut Glutenstruktur auf ohne zu entgasen und verteilt Zusätze gleichmäßig.",
          nl: "Laminatie in zuurdesem is een zachte deegversterkende techniek waarbij je zeer nat deeg uitrekt tot een dun vel op nat aanrecht, optioneel toevoegingen strooit (zaden, olijven, kaas), dan terug vouwt in lagen zoals een brief. Dit bouwt glutenstructuur op zonder te ontgassen en verdeelt toevoegingen gelijkmatig."
        }
      },
      {
        question: {
          en: "What is 'false proof' and how can you tell?",
          es: "¿Qué es 'falso levado' y cómo puedes saberlo?",
          de: "Was ist 'falsche Gare' und wie erkennt man sie?",
          nl: "Wat is 'valse rijs' en hoe kun je het herkennen?"
        },
        options: [
          { en: "Dough looks risen but yeast is dead/inactive - happens from: too-hot water killing yeast, expired yeast, or too much salt. Test: dough won't pass poke test, no oven spring, dense crumb", es: "Masa parece levada pero levadura está muerta/inactiva - ocurre por: agua demasiado caliente matando levadura, levadura vencida, o demasiada sal. Prueba: masa no pasará prueba de poke, sin oven spring, miga densa", de: "Teig sieht aufgegangen aus aber Hefe ist tot/inaktiv - passiert durch: zu heißes Wasser tötet Hefe, abgelaufene Hefe, oder zu viel Salz. Test: Teig besteht Fingertest nicht, kein Ofentrieb, dichte Krume", nl: "Deeg ziet gerezen uit maar gist is dood/inactief - gebeurt door: te heet water doodt gist, verlopen gist, of te veel zout. Test: deeg slaagt poke test niet, geen oven spring, dichte kruim" },
          { en: "When dough rises perfectly but tastes bad", es: "Cuando masa sube perfectamente pero sabe mal", de: "Wenn Teig perfekt aufgeht aber schlecht schmeckt", nl: "Wanneer deeg perfect rijst maar slecht smaakt" },
          { en: "Technique of pretending bread is ready when it isn't", es: "Técnica de pretender que el pan está listo cuando no lo está", de: "Technik vorzutäuschen dass Brot fertig ist wenn es nicht ist", nl: "Techniek van doen alsof brood klaar is terwijl dat niet zo is" },
          { en: "Using fake yeast instead of real yeast", es: "Usar levadura falsa en lugar de levadura real", de: "Falsche Hefe statt echter Hefe verwenden", nl: "Nep gist gebruiken in plaats van echte gist" }
        ],
        correct: 0,
        explanation: {
          en: "False proof occurs when dough appears to rise but yeast is actually dead or inactive - caused by water over 120°F killing yeast, expired yeast, or salt added directly to yeast. The dough won't spring back from poke test, has no oven spring, and bakes dense/gummy.",
          es: "Falso levado ocurre cuando la masa parece subir pero la levadura está en realidad muerta o inactiva - causado por agua sobre 49°C matando levadura, levadura vencida, o sal añadida directamente a levadura. La masa no rebotará de la prueba de poke, no tiene oven spring, y hornea densa/gomosa.",
          de: "Falsche Gare tritt auf wenn Teig aufgegangen zu sein scheint aber Hefe tatsächlich tot oder inaktiv ist - verursacht durch Wasser über 49°C tötet Hefe, abgelaufene Hefe, oder Salz direkt zu Hefe hinzugefügt. Der Teig springt nicht vom Fingertest zurück, hat keinen Ofentrieb, und backt dicht/gummiartig.",
          nl: "Valse rijs treedt op wanneer deeg gerezen lijkt maar gist eigenlijk dood of inactief is - veroorzaakt door water boven 49°C doodt gist, verlopen gist, of zout direct aan gist toegevoegd. Het deeg veert niet terug van poke test, heeft geen oven spring, en bakt dicht/gummiachtig."
        }
      },
      {
        question: {
          en: "What is 'oxygenation' or 'aeration' in bread mixing and why does it matter?",
          es: "¿Qué es 'oxigenación' o 'aireación' en el mezclado de pan y por qué importa?",
          de: "Was ist 'Sauerstoffanreicherung' oder 'Belüftung' beim Brotmischen und warum ist es wichtig?",
          nl: "Wat is 'zuurstoftoevoer' of 'beluchting' in brood mengen en waarom is het belangrijk?"
        },
        options: [
          { en: "Incorporating air during mixing strengthens gluten, speeds fermentation (yeast needs O2 for reproduction), and whitens crumb. Chorleywood process relies heavily on mechanical oxygenation", es: "Incorporar aire durante el mezclado fortalece gluten, acelera fermentación (levadura necesita O2 para reproducción), y blanquea miga. Proceso Chorleywood depende mucho de oxigenación mecánica", de: "Luft während des Mischens einarbeiten stärkt Gluten, beschleunigt Fermentation (Hefe braucht O2 für Vermehrung), und hellt Krume auf. Chorleywood-Prozess basiert stark auf mechanischer Sauerstoffanreicherung", nl: "Lucht verwerken tijdens mengen versterkt gluten, versnelt fermentatie (gist heeft O2 nodig voor voortplanting), en maakt kruim witter. Chorleywood proces is sterk afhankelijk van mechanische zuurstoftoevoer" },
          { en: "Adding hydrogen peroxide to dough to make it rise faster", es: "Añadir peróxido de hidrógeno a masa para hacerla subir más rápido", de: "Wasserstoffperoxid zum Teig hinzufügen um ihn schneller aufgehen zu lassen", nl: "Waterstofperoxide aan deeg toevoegen om het sneller te laten rijzen" },
          { en: "Baking bread in a pressurized oxygen chamber", es: "Hornear pan en una cámara de oxígeno presurizada", de: "Brot in einer Drucksauerstoffkammer backen", nl: "Brood bakken in een drukkamer met zuurstof" },
          { en: "Storing bread in oxygen-free containers for freshness", es: "Almacenar pan en contenedores sin oxígeno para frescura", de: "Brot in sauerstofffreien Behältern lagern für Frische", nl: "Brood bewaren in zuurstofvrije containers voor versheid" }
        ],
        correct: 0,
        explanation: {
          en: "Oxygenation (incorporating air during mixing/kneading) strengthens gluten networks, accelerates fermentation because yeast reproduces aerobically, and oxidizes carotenoid pigments to whiten crumb. Industrial processes like Chorleywood use high-speed mixing for intense mechanical oxygenation, developing dough in minutes instead of hours.",
          es: "Oxigenación (incorporar aire durante mezclado/amasado) fortalece redes de gluten, acelera fermentación porque levadura se reproduce aeróbicamente, y oxida pigmentos carotenoides para blanquear miga. Procesos industriales como Chorleywood usan mezcla de alta velocidad para oxigenación mecánica intensa, desarrollando masa en minutos en lugar de horas.",
          de: "Sauerstoffanreicherung (Luft während Mischen/Kneten einarbeiten) stärkt Glutennetzwerke, beschleunigt Fermentation weil Hefe sich aerob vermehrt, und oxidiert Carotinoid-Pigmente um Krume aufzuhellen. Industrielle Prozesse wie Chorleywood verwenden Hochgeschwindigkeitsmischen für intensive mechanische Sauerstoffanreicherung, entwickeln Teig in Minuten statt Stunden.",
          nl: "Zuurstoftoevoer (lucht verwerken tijdens mengen/kneden) versterkt glutennetwerken, versnelt fermentatie omdat gist zich aëroob voortplant, en oxideert carotenoïde pigmenten om kruim te witten. Industriële processen zoals Chorleywood gebruiken hoge-snelheid mengen voor intense mechanische zuurstoftoevoer, ontwikkelen deeg in minuten in plaats van uren."
        }
      },
      {
        question: {
          en: "What is 'crumb tightness' and what controls it?",
          es: "¿Qué es 'densidad de miga' y qué la controla?",
          de: "Was ist 'Krumendichte' und was kontrolliert sie?",
          nl: "Wat is 'kruimdichtheid' en wat regelt het?"
        },
        options: [
          { en: "Hole size/distribution in bread's interior - controlled by: hydration (higher=more open), degassing (more=tighter), flour protein (higher=more structure for holes), fermentation time, shaping technique", es: "Tamaño/distribución de agujeros en interior de pan - controlado por: hidratación (mayor=más abierta), desgasificación (más=más apretada), proteína de harina (mayor=más estructura para agujeros), tiempo de fermentación, técnica de formado", de: "Lochgröße/-verteilung im Brotinneren - kontrolliert durch: Hydratation (höher=offener), Entgasen (mehr=dichter), Mehlprotein (höher=mehr Struktur für Löcher), Fermentationszeit, Formtechnik", nl: "Gatgrootte/-verdeling in brood binnenste - geregeld door: hydratatie (hoger=opener), ontgassen (meer=dichter), meelproteïne (hoger=meer structuur voor gaten), fermentatietijd, vormtechniek" },
          { en: "How hard you squeeze the bread when testing doneness", es: "Qué tan fuerte aprietas el pan al probar cocción", de: "Wie fest man Brot drückt beim Testen der Gare", nl: "Hoe hard je brood knijpt bij het testen van gaarheid" },
          { en: "Tension in dough surface before baking", es: "Tensión en superficie de masa antes de hornear", de: "Spannung in Teigoberfläche vor dem Backen", nl: "Spanning in deegoppervlak voor bakken" },
          { en: "How tightly bread is wrapped for storage", es: "Qué tan apretado se envuelve el pan para almacenar", de: "Wie fest Brot für Lagerung eingewickelt wird", nl: "Hoe strak brood is ingepakt voor opslag" }
        ],
        correct: 0,
        explanation: {
          en: "Crumb tightness refers to hole size and distribution in bread's interior - from 'tight' (sandwich bread with tiny uniform holes) to 'open' (ciabatta with large irregular holes). Controlled by hydration level, degassing amount, flour protein content, fermentation duration, and shaping/handling technique.",
          es: "Densidad de miga se refiere al tamaño y distribución de agujeros en el interior del pan - desde 'apretada' (pan de sándwich con pequeños agujeros uniformes) hasta 'abierta' (ciabatta con grandes agujeros irregulares). Controlada por nivel de hidratación, cantidad de desgasificación, contenido de proteína de harina, duración de fermentación, y técnica de formado/manejo.",
          de: "Krumendichte bezieht sich auf Lochgröße und -verteilung im Brotinneren - von 'dicht' (Sandwichbrot mit winzigen gleichmäßigen Löchern) bis 'offen' (Ciabatta mit großen unregelmäßigen Löchern). Kontrolliert durch Hydratationsgrad, Entgasungsmenge, Mehlproteingehalt, Fermentationsdauer, und Form-/Handhabungstechnik.",
          nl: "Kruimdichtheid verwijst naar gatgrootte en -verdeling in brood binnenste - van 'dicht' (sandwichbrood met kleine uniforme gaten) tot 'open' (ciabatta met grote onregelmatige gaten). Geregeld door hydratieniveau, ontgassingshoeveelheid, meelproteïnegehalte, fermentatieduur, en vorm-/behandelingstechniek."
        }
      },
      {
        question: {
          en: "What is 'lipase' enzyme and its effect on bread dough?",
          es: "¿Qué es la enzima 'lipasa' y su efecto en la masa de pan?",
          de: "Was ist das Enzym 'Lipase' und seine Wirkung auf Brotteig?",
          nl: "Wat is het enzym 'lipase' en zijn effect op brooddeeg?"
        },
        options: [
          { en: "Enzyme that breaks down fats/lipids - can weaken gluten structure if too active (in whole grain/fresh-milled flour). Also develops flavor in aged cheese-breads and some Italian breads", es: "Enzima que descompone grasas/lípidos - puede debilitar estructura de gluten si demasiado activa (en harina integral/recién molida). También desarrolla sabor en panes añejados con queso y algunos panes italianos", de: "Enzym das Fette/Lipide abbaut - kann Glutenstruktur schwächen wenn zu aktiv (in Vollkorn-/frischgemahlenen Mehl). Entwickelt auch Geschmack in gereiften Käsebroten und einigen italienischen Broten", nl: "Enzym dat vetten/lipiden afbreekt - kan glutenstructuur verzwakken als te actief (in volkoren/vers gemalen meel). Ontwikkelt ook smaak in gerijpte kaasbroden en sommige Italiaanse broden" },
          { en: "Enzyme that only improves bread texture in all cases", es: "Enzima que solo mejora la textura del pan en todos los casos", de: "Enzym das nur in allen Fällen Brottextur verbessert", nl: "Enzym dat alleen broodtextuur verbetert in alle gevallen" },
          { en: "Chemical added to make bread rise faster", es: "Químico añadido para hacer pan subir más rápido", de: "Chemikalie hinzugefügt um Brot schneller aufgehen zu lassen", nl: "Chemische stof toegevoegd om brood sneller te laten rijzen" },
          { en: "Type of fat used only in French bread", es: "Tipo de grasa usada solo en pan francés", de: "Fettart nur in französischem Brot verwendet", nl: "Type vet alleen gebruikt in Frans brood" }
        ],
        correct: 0,
        explanation: {
          en: "Lipase is an enzyme that breaks down fats and lipids. In freshly-milled whole grain flours, excessive lipase activity can damage gluten structure by releasing free fatty acids that interfere with protein bonds. However, controlled lipase activity contributes to flavor development in some traditional Italian breads and cheese-enriched doughs.",
          es: "Lipasa es una enzima que descompone grasas y lípidos. En harinas integrales recién molidas, actividad excesiva de lipasa puede dañar estructura de gluten liberando ácidos grasos libres que interfieren con enlaces de proteína. Sin embargo, actividad controlada de lipasa contribuye al desarrollo de sabor en algunos panes italianos tradicionales y masas enriquecidas con queso.",
          de: "Lipase ist ein Enzym das Fette und Lipide abbaut. In frischgemahlenen Vollkornmehlen kann übermäßige Lipaseaktivität die Glutenstruktur schädigen durch Freisetzung freier Fettsäuren die Proteinbindungen stören. Kontrollierte Lipaseaktivität trägt jedoch zur Geschmacksentwicklung in einigen traditionellen italienischen Broten und käseangereicherten Teigen bei.",
          nl: "Lipase is een enzym dat vetten en lipiden afbreekt. In vers gemalen volkoren melen kan overmatige lipase activiteit glutenstructuur beschadigen door vrije vetzuren vrij te geven die eiwitbindingen verstoren. Gecontroleerde lipase activiteit draagt echter bij aan smaakontwikkeling in sommige traditionele Italiaanse broden en kaasverrijkte degen."
        }
      },
      {
        question: {
          en: "What is 'diastatic malt powder' vs 'non-diastatic malt'?",
          es: "¿Qué es 'polvo de malta diastático' vs 'malta no diastática'?",
          de: "Was ist 'diastatisches Malzpulver' vs 'nicht-diastatisches Malz'?",
          nl: "Wat is 'diastatisch moutpoeder' vs 'niet-diastatisch mout'?"
        },
        options: [
          { en: "Diastatic: contains active enzymes (amylase) that break starches into sugars - improves fermentation, crust color, oven spring. Non-diastatic: enzymes destroyed by heat, adds flavor/color only", es: "Diastático: contiene enzimas activas (amilasa) que descomponen almidones en azúcares - mejora fermentación, color de corteza, oven spring. No diastático: enzimas destruidas por calor, añade solo sabor/color", de: "Diastatisch: enthält aktive Enzyme (Amylase) die Stärken in Zucker abbauen - verbessert Fermentation, Krustenfarbe, Ofentrieb. Nicht-diastatisch: Enzyme durch Hitze zerstört, fügt nur Geschmack/Farbe hinzu", nl: "Diastatisch: bevat actieve enzymen (amylase) die zetmelen afbreken tot suikers - verbetert fermentatie, korstkleur, oven spring. Niet-diastatisch: enzymen vernietigd door hitte, voegt alleen smaak/kleur toe" },
          { en: "They are exactly the same product with different names", es: "Son exactamente el mismo producto con nombres diferentes", de: "Sie sind genau das gleiche Produkt mit verschiedenen Namen", nl: "Ze zijn precies hetzelfde product met verschillende namen" },
          { en: "Diastatic is for sweet breads, non-diastatic is for savory", es: "Diastático es para panes dulces, no diastático es para salados", de: "Diastatisch ist für süße Brote, nicht-diastatisch für herzhafte", nl: "Diastatisch is voor zoete broden, niet-diastatisch voor hartige" },
          { en: "Non-diastatic has more enzymes than diastatic", es: "No diastático tiene más enzimas que diastático", de: "Nicht-diastatisch hat mehr Enzyme als diastatisch", nl: "Niet-diastatisch heeft meer enzymen dan diastatisch" }
        ],
        correct: 0,
        explanation: {
          en: "Diastatic malt powder contains active enzymes (mainly amylase) from sprouted barley that break starches into fermentable sugars - it feeds yeast, improves rise, and enhances crust color. Non-diastatic malt has been heat-treated to destroy enzymes, so it only adds sweet malty flavor and brown color without affecting fermentation.",
          es: "Polvo de malta diastático contiene enzimas activas (principalmente amilasa) de cebada germinada que descomponen almidones en azúcares fermentables - alimenta levadura, mejora subida, y realza color de corteza. Malta no diastática ha sido tratada con calor para destruir enzimas, así que solo añade sabor dulce a malta y color marrón sin afectar fermentación.",
          de: "Diastatisches Malzpulver enthält aktive Enzyme (hauptsächlich Amylase) aus gekeimter Gerste die Stärken in fermentierbare Zucker abbauen - es ernährt Hefe, verbessert Aufgang, und verstärkt Krustenfarbe. Nicht-diastatisches Malz wurde wärmebehandelt um Enzyme zu zerstören, so fügt es nur süßen Malzgeschmack und braune Farbe hinzu ohne Fermentation zu beeinflussen.",
          nl: "Diastatisch moutpoeder bevat actieve enzymen (voornamelijk amylase) van gekiemde gerst die zetmelen afbreken tot fermenteerbare suikers - het voedt gist, verbetert rijs, en versterkt korstkleur. Niet-diastatisch mout is warmtebehandeld om enzymen te vernietigen, dus het voegt alleen zoete moutsmaak en bruine kleur toe zonder fermentatie te beïnvloeden."
        }
      },
      {
        question: {
          en: "What is 'slack dough' vs 'stiff dough'?",
          es: "¿Qué es 'masa floja' vs 'masa rígida'?",
          de: "Was ist 'schlaffer Teig' vs 'steifer Teig'?",
          nl: "Wat is 'slap deeg' vs 'stijf deeg'?"
        },
        options: [
          { en: "Slack: high hydration (75-90%), sticky, flows/spreads easily - needs gentle handling (ciabatta, focaccia). Stiff: low hydration (50-65%), firm, easy to shape - tolerates aggressive handling (bagels, pretzels)", es: "Floja: alta hidratación (75-90%), pegajosa, fluye/se extiende fácilmente - necesita manejo suave (ciabatta, focaccia). Rígida: baja hidratación (50-65%), firme, fácil de formar - tolera manejo agresivo (bagels, pretzels)", de: "Schlaff: hohe Hydratation (75-90%), klebrig, fließt/verteilt sich leicht - braucht sanfte Handhabung (Ciabatta, Focaccia). Steif: niedrige Hydratation (50-65%), fest, leicht zu formen - toleriert aggressive Handhabung (Bagels, Brezeln)", nl: "Slap: hoge hydratatie (75-90%), plakkerig, vloeit/verspreidt gemakkelijk - heeft zachte behandeling nodig (ciabatta, focaccia). Stijf: lage hydratatie (50-65%), stevig, makkelijk te vormen - verdraagt agressieve behandeling (bagels, pretzels)" },
          { en: "Slack dough is underproofed, stiff dough is overproofed", es: "Masa floja está sub-fermentada, masa rígida está sobre-fermentada", de: "Schlaffer Teig ist untergegangen, steifer Teig ist übergegangen", nl: "Slap deeg is ondergerezen, stijf deeg is overgerezen" },
          { en: "They refer to dough temperature, not hydration", es: "Se refieren a temperatura de masa, no hidratación", de: "Sie beziehen sich auf Teigtemperatur, nicht Hydratation", nl: "Ze verwijzen naar deegtemperatuur, niet hydratatie" },
          { en: "Slack means old dough, stiff means fresh dough", es: "Floja significa masa vieja, rígida significa masa fresca", de: "Schlaff bedeutet alter Teig, steif bedeutet frischer Teig", nl: "Slap betekent oud deeg, stijf betekent vers deeg" }
        ],
        correct: 0,
        explanation: {
          en: "Slack dough has high water content (75-90% hydration), making it sticky, extensible, and hard to shape - it flows and spreads easily. Used for ciabatta, focaccia, high-hydration sourdough. Stiff dough has low hydration (50-65%), is firm and easy to handle - used for bagels, pretzels, some enriched breads.",
          es: "Masa floja tiene alto contenido de agua (75-90% hidratación), haciéndola pegajosa, extensible, y difícil de formar - fluye y se extiende fácilmente. Usada para ciabatta, focaccia, masa madre de alta hidratación. Masa rígida tiene baja hidratación (50-65%), es firme y fácil de manejar - usada para bagels, pretzels, algunos panes enriquecidos.",
          de: "Schlaffer Teig hat hohen Wassergehalt (75-90% Hydratation), macht ihn klebrig, dehnbar, und schwer zu formen - er fließt und verteilt sich leicht. Verwendet für Ciabatta, Focaccia, hochhydrierten Sauerteig. Steifer Teig hat niedrige Hydratation (50-65%), ist fest und leicht zu handhaben - verwendet für Bagels, Brezeln, einige angereicherte Brote.",
          nl: "Slap deeg heeft hoog watergehalte (75-90% hydratatie), maakt het plakkerig, rekbaar, en moeilijk te vormen - het vloeit en verspreidt gemakkelijk. Gebruikt voor ciabatta, focaccia, hoog gehydrateerde zuurdesem. Stijf deeg heeft lage hydratatie (50-65%), is stevig en makkelijk te hanteren - gebruikt voor bagels, pretzels, sommige verrijkte broden."
        }
      },
      {
        question: {
          en: "What is 'finger test' or 'poke test' for proofing?",
          es: "¿Qué es 'prueba de dedo' o 'prueba de poke' para fermentación?",
          de: "Was ist 'Fingertest' oder 'Poke-Test' für Gare?",
          nl: "Wat is 'vingertest' of 'poke test' voor rijzing?"
        },
        options: [
          { en: "Gently poke shaped dough ½ inch deep: springs back quickly=underproofed, slowly fills back=ready, stays indented=overproofed. Most accurate doneness test for final proof", es: "Presione suavemente masa formada 1.3 cm de profundidad: rebota rápido=sub-fermentada, se llena lentamente=lista, queda hundida=sobre-fermentada. Prueba más precisa de cocción para fermentación final", de: "Geformten Teig sanft 1.3 cm tief drücken: springt schnell zurück=untergegangen, füllt sich langsam=fertig, bleibt eingedrückt=übergegangen. Genauester Garetest für Endgare", nl: "Druk zacht gevormd deeg 1.3 cm diep in: veert snel terug=ondergerezen, vult langzaam terug=klaar, blijft ingedeukt=overgerezen. Nauwkeurigste gaarheidstest voor laatste rijs" },
          { en: "Using your finger to mix ingredients together", es: "Usar tu dedo para mezclar ingredientes juntos", de: "Finger verwenden um Zutaten zusammenzumischen", nl: "Je vinger gebruiken om ingrediënten samen te mengen" },
          { en: "Testing oven temperature by sticking finger inside", es: "Probar temperatura de horno metiendo dedo adentro", de: "Ofentemperatur testen indem man Finger reinsteckt", nl: "Oventemperatuur testen door vinger erin te steken" },
          { en: "Poking holes in dough to release air bubbles", es: "Hacer agujeros en masa para liberar burbujas de aire", de: "Löcher in Teig stechen um Luftblasen freizusetzen", nl: "Gaten prikken in deeg om luchtbellen vrij te geven" }
        ],
        correct: 0,
        explanation: {
          en: "The poke/finger test is the most reliable way to check if dough is properly proofed: gently press a floured finger ½ inch into shaped dough. If it springs back immediately, it's underproofed; if it slowly fills back halfway, it's perfectly proofed; if the indent stays, it's overproofed.",
          es: "La prueba de poke/dedo es la forma más confiable de verificar si la masa está correctamente fermentada: presione suavemente un dedo enharinado 1.3 cm en la masa formada. Si rebota inmediatamente, está sub-fermentada; si se llena lentamente a la mitad, está perfectamente fermentada; si la hendidura permanece, está sobre-fermentada.",
          de: "Der Poke-/Fingertest ist der zuverlässigste Weg um zu prüfen ob Teig richtig gegangen ist: drücken Sie sanft einen bemehlten Finger 1.3 cm in den geformten Teig. Wenn er sofort zurückspringt, ist er untergegangen; wenn er sich langsam halb füllt, ist er perfekt gegangen; wenn die Delle bleibt, ist er übergegangen.",
          nl: "De poke-/vingertest is de meest betrouwbare manier om te controleren of deeg goed gerezen is: druk zacht een bemeel de vinger 1.3 cm in gevormd deeg. Als het onmiddellijk terugveert, is het ondergerezen; als het langzaam halfvol terugkomt, is het perfect gerezen; als de deuk blijft, is het overgerezen."
        }
      },
      {
        question: {
          en: "What is 'alveograph' test in professional baking?",
          es: "¿Qué es la prueba de 'alvéografo' en panadería profesional?",
          de: "Was ist der 'Alveograph' Test im professionellen Backen?",
          nl: "Wat is de 'alveograaf' test in professioneel bakken?"
        },
        options: [
          { en: "Lab instrument that blows air bubble into dough to measure: P (resistance/tenacity), L (extensibility), W (total strength) - helps millers/bakers select optimal flour for specific bread types", es: "Instrumento de laboratorio que sopla burbuja de aire en masa para medir: P (resistencia/tenacidad), L (extensibilidad), W (fuerza total) - ayuda a molineros/panaderos seleccionar harina óptima para tipos específicos de pan", de: "Laborinstrument das Luftblase in Teig bläst um zu messen: P (Widerstand/Zähigkeit), L (Dehnbarkeit), W (Gesamtstärke) - hilft Müllern/Bäckern optimales Mehl für spezifische Brottypen auszuwählen", nl: "Laboratorium instrument dat luchtbel in deeg blaast om te meten: P (weerstand/taaiheid), L (rekbaarheid), W (totale kracht) - helpt molenaars/bakkers optimaal meel selecteren voor specifieke broodsoorten" },
          { en: "Type of oven thermometer for checking bread temperature", es: "Tipo de termómetro de horno para verificar temperatura de pan", de: "Art von Ofenthermometer zum Prüfen der Brottemperatur", nl: "Type oventhermometer voor het controleren van broodtemperatuur" },
          { en: "Tool for measuring yeast activity in sourdough starter", es: "Herramienta para medir actividad de levadura en masa madre", de: "Werkzeug zum Messen der Hefeaktivität im Sauerteig-Starter", nl: "Gereedschap voor het meten van gistactiviteit in zuurdesem starter" },
          { en: "Machine that scores artisan bread automatically", es: "Máquina que marca pan artesanal automáticamente", de: "Maschine die handwerkliches Brot automatisch einschneidet", nl: "Machine die ambachtelijk brood automatisch scoort" }
        ],
        correct: 0,
        explanation: {
          en: "The alveograph is a laboratory instrument used by professional bakers and millers to test flour quality. It inflates a dough bubble until it bursts, measuring P-value (resistance/strength), L-value (extensibility), and W-value (overall baking strength). This data helps select the right flour for baguettes (high L), sandwich bread (balanced P/L), etc.",
          es: "El alvéografo es un instrumento de laboratorio usado por panaderos profesionales y molineros para probar calidad de harina. Infla una burbuja de masa hasta que estalla, midiendo valor-P (resistencia/fuerza), valor-L (extensibilidad), y valor-W (fuerza de horneado general). Estos datos ayudan a seleccionar la harina correcta para baguettes (L alto), pan de sándwich (P/L equilibrado), etc.",
          de: "Der Alveograph ist ein Laborinstrument das von professionellen Bäckern und Müllern verwendet wird um Mehlqualität zu testen. Es bläst eine Teigblase auf bis sie platzt, misst P-Wert (Widerstand/Stärke), L-Wert (Dehnbarkeit), und W-Wert (gesamte Backstärke). Diese Daten helfen das richtige Mehl für Baguettes (hohes L), Sandwichbrot (ausgewogenes P/L), usw. auszuwählen.",
          nl: "De alveograaf is een laboratorium instrument gebruikt door professionele bakkers en molenaars om meelkwaliteit te testen. Het blaast een deegbel op tot die barst, meet P-waarde (weerstand/kracht), L-waarde (rekbaarheid), en W-waarde (totale bakkracht). Deze gegevens helpen het juiste meel te selecteren voor stokbroden (hoge L), sandwichbrood (gebalanceerde P/L), enz."
        }
      },
      {
        question: {
          en: "What is 'pearling' or 'pearl ash' in historical bread baking?",
          es: "¿Qué es 'pearling' o 'ceniza de perla' en elaboración histórica de pan?",
          de: "Was ist 'Perlenasche' im historischen Brotbacken?",
          nl: "Wat is 'parelasas' of 'pearl ash' in historisch brood bakken?"
        },
        options: [
          { en: "Historical leavening agent (potassium carbonate) - first chemical leavener before baking powder (1790s), extracted from wood ash, used in cookies/quick breads. Precursor to modern baking soda", es: "Agente leudante histórico (carbonato de potasio) - primer leudante químico antes del polvo de hornear (1790s), extraído de ceniza de madera, usado en galletas/panes rápidos. Precursor de bicarbonato moderno", de: "Historisches Treibmittel (Kaliumcarbonat) - erstes chemisches Treibmittel vor Backpulver (1790er), aus Holzasche extrahiert, in Keksen/Schnellbroten verwendet. Vorläufer von modernem Natron", nl: "Historisch rijsmiddel (kaliumcarbonaat) - eerste chemische rijsmiddel voor bakpoeder (1790s), gewonnen uit houtas, gebruikt in koekjes/snelle broden. Voorloper van moderne zuiveringszout" },
          { en: "Type of white flour made only from wheat kernels", es: "Tipo de harina blanca hecha solo de granos de trigo", de: "Mehltyp nur aus Weizenkörnern hergestellt", nl: "Type wit meel alleen gemaakt van tarwekorrels" },
          { en: "Decorative pattern scored on top of artisan loaves", es: "Patrón decorativo marcado en la parte superior de panes artesanales", de: "Dekoratives Muster auf handwerklichen Laiben eingeschnitten", nl: "Decoratief patroon gescoord op bovenkant van ambachtelijke broden" },
          { en: "Process of polishing bread crust with butter", es: "Proceso de pulir corteza de pan con mantequilla", de: "Prozess des Polierens von Brotkruste mit Butter", nl: "Proces van het polijsten van broodkorst met boter" }
        ],
        correct: 0,
        explanation: {
          en: "Pearl ash (potassium carbonate) was the first chemical leavening agent, used from the 1790s before baking powder was invented. Refined from wood ash, it releases CO2 when heated, making dough rise without yeast. It was eventually replaced by baking soda (sodium bicarbonate) and baking powder in the 1800s.",
          es: "Ceniza de perla (carbonato de potasio) fue el primer agente leudante químico, usado desde la década de 1790 antes de que se inventara el polvo de hornear. Refinado de ceniza de madera, libera CO2 cuando se calienta, haciendo que la masa suba sin levadura. Eventualmente fue reemplazado por bicarbonato de sodio y polvo de hornear en el siglo 19.",
          de: "Perlenasche (Kaliumcarbonat) war das erste chemische Treibmittel, verwendet ab den 1790ern bevor Backpulver erfunden wurde. Aus Holzasche raffiniert, setzt es CO2 frei wenn erhitzt, lässt Teig ohne Hefe aufgehen. Es wurde schließlich durch Natron (Natriumbicarbonat) und Backpulver im 19. Jahrhundert ersetzt.",
          nl: "Parelasas (kaliumcarbonaat) was het eerste chemische rijsmiddel, gebruikt vanaf de 1790s voordat bakpoeder werd uitgevonden. Verfijnd uit houtas, geeft het CO2 vrij wanneer verhit, waardoor deeg rijst zonder gist. Het werd uiteindelijk vervangen door zuiveringszout (natriumbicarbonaat) en bakpoeder in de 19e eeuw."
        }
      },
      {
        question: {
          en: "What is 'fermentolyse' technique?",
          es: "¿Qué es la técnica de 'fermentolisis'?",
          de: "Was ist die 'Fermentolyse' Technik?",
          nl: "Wat is de 'fermentolyse' techniek?"
        },
        options: [
          { en: "Modified autolyse - mix flour+water+levain/starter, rest 30-60 min before adding salt - combines benefits of autolyse (gluten development, extensibility) with flavor from early fermentation", es: "Autolisis modificada - mezclar harina+agua+levain/iniciador, reposar 30-60 min antes de añadir sal - combina beneficios de autolisis (desarrollo de gluten, extensibilidad) con sabor de fermentación temprana", de: "Modifizierte Autolyse - Mehl+Wasser+Levain/Starter mischen, 30-60 Min ruhen vor Salzzugabe - kombiniert Vorteile von Autolyse (Glutenentwicklung, Dehnbarkeit) mit Geschmack von früher Fermentation", nl: "Gewijzigde autolyse - meel+water+levain/starter mengen, 30-60 min rusten voor zout toevoegen - combineert voordelen van autolyse (glutenontwikkeling, rekbaarheid) met smaak van vroege fermentatie" },
          { en: "Freezing dough to stop all fermentation permanently", es: "Congelar masa para detener toda fermentación permanentemente", de: "Teig einfrieren um alle Fermentation dauerhaft zu stoppen", nl: "Deeg bevriezen om alle fermentatie permanent te stoppen" },
          { en: "Adding extra yeast at the end of mixing", es: "Añadir levadura extra al final del mezclado", de: "Extra Hefe am Ende des Mischens hinzufügen", nl: "Extra gist toevoegen aan het einde van mengen" },
          { en: "Technique only used for gluten-free breads", es: "Técnica solo usada para panes sin gluten", de: "Technik nur für glutenfreie Brote verwendet", nl: "Techniek alleen gebruikt voor glutenvrije broden" }
        ],
        correct: 0,
        explanation: {
          en: "Fermentolyse is a modified autolyse technique where you mix flour, water, and levain/starter (but no salt), then rest for 30-60 minutes. This combines the gluten-strengthening benefits of traditional autolyse with flavor development from early yeast/bacterial fermentation. Salt is added after the rest period.",
          es: "Fermentolisis es una técnica de autolisis modificada donde mezclas harina, agua, y levain/iniciador (pero sin sal), luego reposas durante 30-60 minutos. Esto combina los beneficios de fortalecimiento de gluten de la autolisis tradicional con desarrollo de sabor de fermentación temprana de levadura/bacteriana. La sal se añade después del período de reposo.",
          de: "Fermentolyse ist eine modifizierte Autolyse-Technik wo man Mehl, Wasser, und Levain/Starter (aber kein Salz) mischt, dann 30-60 Minuten ruhen lässt. Dies kombiniert die glutenstärkenden Vorteile der traditionellen Autolyse mit Geschmacksentwicklung von früher Hefe-/bakterieller Fermentation. Salz wird nach der Ruhezeit hinzugefügt.",
          nl: "Fermentolyse is een gewijzigde autolyse techniek waarbij je meel, water, en levain/starter (maar geen zout) mengt, dan 30-60 minuten laat rusten. Dit combineert de glutenversterkende voordelen van traditionele autolyse met smaakontwikkeling van vroege gist-/bacteriële fermentatie. Zout wordt toegevoegd na de rustperiode."
        }
      },
      {
        question: {
          en: "What is 'crumb rubber' texture and what causes it?",
          es: "¿Qué es la textura de 'goma de miga' y qué la causa?",
          de: "Was ist 'Krumengummi' Textur und was verursacht sie?",
          nl: "Wat is 'kruim rubber' textuur en wat veroorzaakt het?"
        },
        options: [
          { en: "Dense, rubbery, gummy texture in bread - caused by: underbaking (dough not fully set), too much liquid, undermixing (weak gluten), or cutting bread while still hot/steaming", es: "Textura densa, gomosa, pegajosa en pan - causada por: horneado insuficiente (masa no completamente cuajada), demasiado líquido, mezclado insuficiente (gluten débil), o cortar pan mientras aún está caliente/vapor", de: "Dichte, gummiartige, klebrige Textur im Brot - verursacht durch: Unterbacken (Teig nicht vollständig fest), zu viel Flüssigkeit, Untermischen (schwaches Gluten), oder Brot schneiden während noch heiß/dampfend", nl: "Dichte, rubberachtige, kleverige textuur in brood - veroorzaakt door: onderbakken (deeg niet volledig gestold), te veel vloeistof, ondermengen (zwak gluten), of brood snijden terwijl nog heet/dampend" },
          { en: "Desirable light, airy texture that all breads should have", es: "Textura ligera, aireada deseable que todos los panes deberían tener", de: "Wünschenswerte leichte, luftige Textur die alle Brote haben sollten", nl: "Wenselijke lichte, luchtige textuur die alle broden zouden moeten hebben" },
          { en: "Type of coating applied to bread surface before baking", es: "Tipo de recubrimiento aplicado a superficie de pan antes de hornear", de: "Art von Beschichtung auf Brotoberfläche vor dem Backen aufgetragen", nl: "Type coating aangebracht op broodoppervlak voor bakken" },
          { en: "Special ingredient added to improve bread shelf life", es: "Ingrediente especial añadido para mejorar vida útil del pan", de: "Spezielle Zutat hinzugefügt um Brothaltbarkeit zu verbessern", nl: "Speciale ingrediënt toegevoegd om broodhoudbaarheid te verbeteren" }
        ],
        correct: 0,
        explanation: {
          en: "Crumb rubber texture (also called 'gummy crumb') is an undesirable dense, rubbery, sticky texture in bread. Main causes: underbaking (internal temp below 190°F, starches not fully gelatinized), too much liquid, weak gluten development, or slicing bread before it's fully cooled (steam condenses back into crumb).",
          es: "Textura de goma de miga (también llamada 'miga gomosa') es una textura densa, gomosa, pegajosa no deseable en el pan. Causas principales: horneado insuficiente (temp interna debajo de 88°C, almidones no completamente gelatinizados), demasiado líquido, desarrollo de gluten débil, o rebanar pan antes de que esté completamente enfriado (vapor se condensa de vuelta en miga).",
          de: "Krumengummi-Textur (auch 'gummiartige Krume' genannt) ist eine unerwünschte dichte, gummiartige, klebrige Textur im Brot. Hauptursachen: Unterbacken (Innentemperatur unter 88°C, Stärken nicht vollständig gelatiniert), zu viel Flüssigkeit, schwache Glutenentwicklung, oder Brot schneiden bevor es vollständig abgekühlt ist (Dampf kondensiert zurück in Krume).",
          nl: "Kruim rubber textuur (ook wel 'kleverige kruim' genoemd) is een ongewenste dichte, rubberachtige, plakkerige textuur in brood. Belangrijkste oorzaken: onderbakken (interne temp onder 88°C, zetmelen niet volledig gegelatineerd), te veel vloeistof, zwakke glutenontwikkeling, of brood snijden voordat het volledig afgekoeld is (stoom condenseert terug in kruim)."
        }
      },
      {
        question: {
          en: "What is 'desired dough temperature' (DDT) and why calculate it?",
          es: "¿Qué es 'temperatura deseada de masa' (DDT) y por qué calcularla?",
          de: "Was ist 'gewünschte Teigtemperatur' (DDT) und warum berechnen?",
          nl: "Wat is 'gewenste deegtemperatuur' (DDT) en waarom berekenen?"
        },
        options: [
          { en: "Target final dough temp (usually 75-78°F/24-26°C) for optimal fermentation - calculate water temp needed by accounting for: flour temp, room temp, friction from mixing. Ensures consistent fermentation speed", es: "Temperatura final objetivo de masa (usualmente 75-78°F/24-26°C) para fermentación óptima - calcular temp de agua necesaria considerando: temp de harina, temp de habitación, fricción del mezclado. Asegura velocidad de fermentación consistente", de: "Ziel-Endteigtemperatur (üblicherweise 24-26°C) für optimale Fermentation - Wassertemperatur berechnen unter Berücksichtigung von: Mehltemperatur, Raumtemperatur, Reibung vom Mischen. Sichert konstante Fermentationsgeschwindigkeit", nl: "Doel einddeegtemperatuur (meestal 24-26°C) voor optimale fermentatie - bereken benodigde watertemperatuur door rekening te houden met: meeltemperatuur, kamertemperatuur, wrijving van mengen. Zorgt voor consistente fermentatiesnelheid" },
          { en: "Maximum oven temperature for baking bread", es: "Temperatura máxima de horno para hornear pan", de: "Maximale Ofentemperatur zum Brotbacken", nl: "Maximale oventemperatuur voor brood bakken" },
          { en: "Temperature at which yeast dies completely", es: "Temperatura a la cual la levadura muere completamente", de: "Temperatur bei der Hefe vollständig stirbt", nl: "Temperatuur waarbij gist volledig sterft" },
          { en: "Ideal room temperature for storing flour", es: "Temperatura ambiente ideal para almacenar harina", de: "Ideale Raumtemperatur zum Lagern von Mehl", nl: "Ideale kamertemperatuur voor het bewaren van meel" }
        ],
        correct: 0,
        explanation: {
          en: "Desired Dough Temperature (DDT) is the target final temperature for mixed dough (typically 75-78°F/24-26°C) that ensures optimal, consistent fermentation. Professionals calculate the water temperature needed by accounting for flour temp, room temp, and friction factor from mixing. This prevents batch-to-batch variation in fermentation speed.",
          es: "Temperatura Deseada de Masa (DDT) es la temperatura final objetivo para masa mezclada (típicamente 75-78°F/24-26°C) que asegura fermentación óptima y consistente. Los profesionales calculan la temperatura de agua necesaria considerando temp de harina, temp de habitación, y factor de fricción del mezclado. Esto previene variación de lote a lote en velocidad de fermentación.",
          de: "Gewünschte Teigtemperatur (DDT) ist die Ziel-Endtemperatur für gemischten Teig (typischerweise 24-26°C) die optimale, konstante Fermentation sichert. Profis berechnen die benötigte Wassertemperatur unter Berücksichtigung von Mehltemperatur, Raumtemperatur, und Reibungsfaktor vom Mischen. Dies verhindert Charge-zu-Charge Variation in Fermentationsgeschwindigkeit.",
          nl: "Gewenste Deegtemperatuur (DDT) is de doel eindtemperatuur voor gemengd deeg (typisch 24-26°C) die optimale, consistente fermentatie verzekert. Professionals berekenen de benodigde watertemperatuur door rekening te houden met meeltemperatuur, kamertemperatuur, en wrijvingsfactor van mengen. Dit voorkomt batch-tot-batch variatie in fermentatiesnelheid."
        }
      },
      {
        question: {
          en: "What is 'gelatinization' of starch in bread baking?",
          es: "¿Qué es 'gelatinización' de almidón en elaboración de pan?",
          de: "Was ist 'Verkleisterung' von Stärke beim Brotbacken?",
          nl: "Wat is 'gelatinisatie' van zetmeel bij brood bakken?"
        },
        options: [
          { en: "Starch granules absorb water and swell when heated above 140-180°F - transforms dough into set bread structure. Incomplete gelatinization (underbaking) causes gummy texture", es: "Gránulos de almidón absorben agua y se hinchan cuando se calientan sobre 60-82°C - transforma masa en estructura de pan cuajada. Gelatinización incompleta (horneado insuficiente) causa textura gomosa", de: "Stärkegranula absorbieren Wasser und schwellen bei Erhitzen über 60-82°C - verwandelt Teig in feste Brotstruktur. Unvollständige Verkleisterung (Unterbacken) verursacht gummiartige Textur", nl: "Zetmeelkorrels absorberen water en zwellen bij verhitting boven 60-82°C - transformeert deeg in gestolde broodstructuur. Onvolledige gelatinisatie (onderbakken) veroorzaakt kleverige textuur" },
          { en: "Adding gelatin powder to make bread softer", es: "Añadir polvo de gelatina para hacer pan más suave", de: "Gelatinepulver hinzufügen um Brot weicher zu machen", nl: "Gelatine poeder toevoegen om brood zachter te maken" },
          { en: "Process of coating bread with sugar glaze", es: "Proceso de cubrir pan con glaseado de azúcar", de: "Prozess des Beschichtens von Brot mit Zuckerglasur", nl: "Proces van het bedekken van brood met suikerglazuur" },
          { en: "Technique for making transparent bread crust", es: "Técnica para hacer corteza de pan transparente", de: "Technik zum Herstellen transparenter Brotkruste", nl: "Techniek voor het maken van transparante broodkorst" }
        ],
        correct: 0,
        explanation: {
          en: "Starch gelatinization is the critical transformation during baking where starch granules absorb water and irreversibly swell when heated above 140-180°F (60-82°C), changing from crystalline to amorphous state. This sets the bread's structure. If bread is underbaked and starches don't fully gelatinize, the result is gummy, raw-tasting crumb.",
          es: "Gelatinización de almidón es la transformación crítica durante el horneado donde gránulos de almidón absorben agua y se hinchan irreversiblemente cuando se calientan sobre 60-82°C, cambiando de estado cristalino a amorfo. Esto cuaja la estructura del pan. Si el pan está mal horneado y los almidones no se gelatinizan completamente, el resultado es miga gomosa con sabor crudo.",
          de: "Stärkeverkleisterung ist die kritische Transformation während des Backens wo Stärkegranula Wasser absorbieren und irreversibel schwellen wenn über 60-82°C erhitzt, wechseln von kristallinem zu amorphem Zustand. Dies setzt die Brotstruktur. Wenn Brot unterbacken ist und Stärken nicht vollständig verkleistern, ist das Ergebnis gummiartige, roh schmeckende Krume.",
          nl: "Zetmeelgelatinisatie is de kritische transformatie tijdens bakken waarbij zetmeelkorrels water absorberen en onomkeerbaar zwellen bij verhitting boven 60-82°C, veranderen van kristallijne naar amorfe toestand. Dit stolt de broodstructuur. Als brood onderbakken is en zetmelen niet volledig gelatineren, is het resultaat kleverige, rauw smakende kruim."
        }
      },
      {
        question: {
          en: "What is 'falling number' test and why does it matter?",
          es: "¿Qué es la prueba de 'número de caída' y por qué importa?",
          de: "Was ist der 'Fallzahl' Test und warum ist er wichtig?",
          nl: "Wat is de 'valgetal' test en waarom is het belangrijk?"
        },
        options: [
          { en: "Measures amylase enzyme activity in flour - low falling number (high enzyme)=sticky dough, poor bread. High number (low enzyme)=weak fermentation. Optimal: 250-350 seconds for bread flour", es: "Mide actividad de enzima amilasa en harina - número de caída bajo (enzima alta)=masa pegajosa, pan pobre. Número alto (enzima baja)=fermentación débil. Óptimo: 250-350 segundos para harina de pan", de: "Misst Amylase-Enzymaktivität im Mehl - niedrige Fallzahl (hohes Enzym)=klebriger Teig, schlechtes Brot. Hohe Zahl (niedriges Enzym)=schwache Fermentation. Optimal: 250-350 Sekunden für Brotmehl", nl: "Meet amylase enzymactiviteit in meel - laag valgetal (hoog enzym)=plakkerig deeg, slecht brood. Hoog getal (laag enzym)=zwakke fermentatie. Optimaal: 250-350 seconden voor broodmeel" },
          { en: "Test to see how fast bread dough falls when dropped", es: "Prueba para ver qué tan rápido cae la masa de pan cuando se suelta", de: "Test um zu sehen wie schnell Brotteig fällt wenn fallengelassen", nl: "Test om te zien hoe snel brooddeeg valt wanneer losgelaten" },
          { en: "Measurement of how long bread takes to cool after baking", es: "Medición de cuánto tiempo tarda el pan en enfriarse después de hornear", de: "Messung wie lange Brot nach dem Backen zum Abkühlen braucht", nl: "Meting van hoe lang brood nodig heeft om af te koelen na bakken" },
          { en: "Count of how many times dough must be folded", es: "Cuenta de cuántas veces debe doblarse la masa", de: "Zählung wie oft Teig gefaltet werden muss", nl: "Telling van hoe vaak deeg gevouwen moet worden" }
        ],
        correct: 0,
        explanation: {
          en: "The Falling Number test measures alpha-amylase enzyme activity in flour by timing how long a stirrer takes to fall through a flour-water slurry. Low numbers (under 200 sec) indicate excessive enzyme activity from sprouted grain - causes sticky dough and gummy bread. High numbers (over 400 sec) mean insufficient enzymes - weak fermentation. Ideal range: 250-350 seconds.",
          es: "La prueba de Número de Caída mide actividad de enzima alfa-amilasa en harina cronometrando cuánto tarda un agitador en caer a través de una suspensión de harina-agua. Números bajos (bajo 200 seg) indican actividad excesiva de enzima de grano germinado - causa masa pegajosa y pan gomoso. Números altos (sobre 400 seg) significan enzimas insuficientes - fermentación débil. Rango ideal: 250-350 segundos.",
          de: "Der Fallzahl-Test misst Alpha-Amylase-Enzymaktivität im Mehl durch Zeitmessung wie lange ein Rührer braucht um durch eine Mehl-Wasser-Aufschlämmung zu fallen. Niedrige Zahlen (unter 200 Sek) zeigen übermäßige Enzymaktivität von gekeimtem Getreide - verursacht klebrigen Teig und gummiartiges Brot. Hohe Zahlen (über 400 Sek) bedeuten unzureichende Enzyme - schwache Fermentation. Idealbereich: 250-350 Sekunden.",
          nl: "De Valgetal test meet alfa-amylase enzymactiviteit in meel door te timen hoe lang een roerder nodig heeft om te vallen door een meel-water mengsel. Lage getallen (onder 200 sec) duiden op overmatige enzymactiviteit van gekiemd graan - veroorzaakt plakkerig deeg en kleverig brood. Hoge getallen (boven 400 sec) betekenen onvoldoende enzymen - zwakke fermentatie. Ideaal bereik: 250-350 seconden."
        }
      },
      {
        question: {
          en: "What is 'barm' in traditional bread making?",
          es: "¿Qué es 'barm' en elaboración tradicional de pan?",
          de: "Was ist 'Barm' im traditionellen Brotbacken?",
          nl: "Wat is 'barm' in traditioneel brood maken?"
        },
        options: [
          { en: "Foam/froth skimmed from fermenting beer - used as leavening agent before commercial yeast (pre-1800s). Contained wild yeast from beer brewing, gave bread distinctive flavor", es: "Espuma/espuma desnatada de cerveza en fermentación - usada como agente leudante antes de levadura comercial (pre-1800s). Contenía levadura salvaje de elaboración de cerveza, daba sabor distintivo al pan", de: "Schaum von gärendem Bier abgeschöpft - als Treibmittel verwendet vor kommerzieller Hefe (vor 1800). Enthielt wilde Hefe vom Bierbrauen, gab Brot charakteristischen Geschmack", nl: "Schuim afgeroomd van fermenterende bier - gebruikt als rijsmiddel voor commerciële gist (voor 1800). Bevatte wilde gist van bierbrouwen, gaf brood kenmerkende smaak" },
          { en: "Type of whole grain flour from Scotland", es: "Tipo de harina integral de Escocia", de: "Vollkornmehltyp aus Schottland", nl: "Type volkoren meel uit Schotland" },
          { en: "Metal tool for scoring artisan bread", es: "Herramienta metálica para marcar pan artesanal", de: "Metallwerkzeug zum Einschneiden von handwerklichem Brot", nl: "Metalen gereedschap voor het scoren van ambachtelijk brood" },
          { en: "Modern name for active dry yeast", es: "Nombre moderno para levadura seca activa", de: "Moderner Name für aktive Trockenhefe", nl: "Moderne naam voor actieve droge gist" }
        ],
        correct: 0,
        explanation: {
          en: "Barm was the traditional leavening agent used before commercial yeast became available in the 1800s. It was the foam skimmed off fermenting beer, rich in wild Saccharomyces cerevisiae yeast from brewing. Bakers obtained barm from breweries and used it to leaven bread, giving a characteristic beer-like flavor.",
          es: "Barm era el agente leudante tradicional usado antes de que la levadura comercial estuviera disponible en el siglo 19. Era la espuma desnatada de cerveza en fermentación, rica en levadura salvaje Saccharomyces cerevisiae de la elaboración de cerveza. Los panaderos obtenían barm de cervecerías y lo usaban para leudar pan, dando un sabor característico a cerveza.",
          de: "Barm war das traditionelle Treibmittel das verwendet wurde bevor kommerzielle Hefe im 19. Jahrhundert verfügbar wurde. Es war der Schaum der von gärendem Bier abgeschöpft wurde, reich an wilder Saccharomyces cerevisiae Hefe vom Brauen. Bäcker bezogen Barm von Brauereien und verwendeten es um Brot zu treiben, gab charakteristischen bierähnlichen Geschmack.",
          nl: "Barm was het traditionele rijsmiddel gebruikt voordat commerciële gist beschikbaar werd in de 19e eeuw. Het was het schuim afgeroomd van fermenterende bier, rijk aan wilde Saccharomyces cerevisiae gist van brouwen. Bakkers verkregen barm van brouwerijen en gebruikten het om brood te laten rijzen, gaf een karakteristieke bierachtige smaak."
        }
      },
      {
        question: {
          en: "What is 'ropiness' vs normal bread staling?",
          es: "¿Qué es 'ropiness' vs envejecimiento normal de pan?",
          de: "Was ist 'Fadenzieher' vs normales Brotaltbackenwerden?",
          nl: "Wat is 'ropiness' vs normale brood veroudering?"
        },
        options: [
          { en: "Ropiness: bacterial spoilage (Bacillus) causing sticky, rope-like strings and fruity smell within 12-48 hrs. Staling: normal retrogradation of starches over 2-5 days making bread firm/dry", es: "Ropiness: deterioro bacteriano (Bacillus) causando hilos pegajosos tipo cuerda y olor afrutado en 12-48 hrs. Envejecimiento: retrogradación normal de almidones en 2-5 días haciendo pan firme/seco", de: "Fadenzieher: bakterieller Verderb (Bacillus) verursacht klebrige, seilartige Fäden und fruchtigen Geruch innerhalb 12-48 Std. Altbackenwerden: normale Retrogradation von Stärken über 2-5 Tage macht Brot fest/trocken", nl: "Ropiness: bacterieel bederf (Bacillus) veroorzaakt plakkerige, touwachtige draden en fruitige geur binnen 12-48 uur. Veroudering: normale retrogradatie van zetmelen over 2-5 dagen maakt brood stevig/droog" },
          { en: "They are the same process with different names", es: "Son el mismo proceso con nombres diferentes", de: "Sie sind der gleiche Prozess mit verschiedenen Namen", nl: "Ze zijn hetzelfde proces met verschillende namen" },
          { en: "Ropiness is good, staling is bad for bread quality", es: "Ropiness es bueno, envejecimiento es malo para calidad del pan", de: "Fadenzieher ist gut, Altbackenwerden ist schlecht für Brotqualität", nl: "Ropiness is goed, veroudering is slecht voor broodkwaliteit" },
          { en: "Staling happens in 1 hour, ropiness takes 1 week", es: "Envejecimiento ocurre en 1 hora, ropiness toma 1 semana", de: "Altbackenwerden passiert in 1 Stunde, Fadenzieher dauert 1 Woche", nl: "Veroudering gebeurt in 1 uur, ropiness duurt 1 week" }
        ],
        correct: 0,
        explanation: {
          en: "Ropiness is a serious bacterial spoilage from Bacillus subtilis that creates sticky, rope-like strings inside bread with a disgusting fruity odor within 12-48 hours - the bread is unsafe to eat. Normal staling is the natural firming/drying of bread over 2-5 days as starches crystallize (retrogradation) - still safe to eat, just less fresh.",
          es: "Ropiness es un deterioro bacteriano serio de Bacillus subtilis que crea hilos pegajosos tipo cuerda dentro del pan con olor afrutado desagradable en 12-48 horas - el pan no es seguro para comer. Envejecimiento normal es el endurecimiento/secado natural del pan en 2-5 días a medida que los almidones cristalizan (retrogradación) - aún seguro para comer, solo menos fresco.",
          de: "Fadenzieher ist ein ernsthafter bakterieller Verderb von Bacillus subtilis der klebrige, seilartige Fäden im Brot mit ekelhaftem fruchtigen Geruch innerhalb 12-48 Stunden erzeugt - das Brot ist nicht sicher zu essen. Normales Altbackenwerden ist das natürliche Festwerden/Austrocknen von Brot über 2-5 Tage während Stärken kristallisieren (Retrogradation) - noch sicher zu essen, nur weniger frisch.",
          nl: "Ropiness is een ernstig bacterieel bederf van Bacillus subtilis dat plakkerige, touwachtige draden in brood creëert met walgelijke fruitige geur binnen 12-48 uur - het brood is niet veilig om te eten. Normale veroudering is het natuurlijke steviger/droger worden van brood over 2-5 dagen terwijl zetmelen kristalliseren (retrogradatie) - nog steeds veilig om te eten, alleen minder vers."
        }
      },
      {
        question: {
          en: "What is 'volumetric vs gravimetric' measuring in professional baking?",
          es: "¿Qué es medición 'volumétrica vs gravimétrica' en panadería profesional?",
          de: "Was ist 'volumetrisches vs gravimetrisches' Messen im professionellen Backen?",
          nl: "Wat is 'volumetrisch vs gravimetrisch' meten in professioneel bakken?"
        },
        options: [
          { en: "Volumetric: measuring by cups/spoons (inconsistent due to packing/settling). Gravimetric: measuring by weight/scale (accurate, professional standard) - 1 cup flour can weigh 120-150g depending on packing", es: "Volumétrica: medir por tazas/cucharas (inconsistente debido a compactación/asentamiento). Gravimétrica: medir por peso/balanza (precisa, estándar profesional) - 1 taza de harina puede pesar 120-150g dependiendo de compactación", de: "Volumetrisch: Messen mit Tassen/Löffeln (inkonsistent wegen Verdichtung/Absetzen). Gravimetrisch: Messen nach Gewicht/Waage (genau, professioneller Standard) - 1 Tasse Mehl kann 120-150g wiegen je nach Verdichtung", nl: "Volumetrisch: meten met kopjes/lepels (inconsistent door samenpakken/bezinken). Gravimetrisch: meten op gewicht/weegschaal (nauwkeurig, professionele standaard) - 1 kopje meel kan 120-150g wegen afhankelijk van samenpakken" },
          { en: "Volumetric is more accurate than gravimetric for bread", es: "Volumétrica es más precisa que gravimétrica para pan", de: "Volumetrisch ist genauer als gravimetrisch für Brot", nl: "Volumetrisch is nauwkeuriger dan gravimetrisch voor brood" },
          { en: "They are the same measuring technique", es: "Son la misma técnica de medición", de: "Sie sind die gleiche Messtechnik", nl: "Ze zijn dezelfde meettechniek" },
          { en: "Professional bakers always use volumetric measurements", es: "Panaderos profesionales siempre usan mediciones volumétricas", de: "Professionelle Bäcker verwenden immer volumetrische Messungen", nl: "Professionele bakkers gebruiken altijd volumetrische metingen" }
        ],
        correct: 0,
        explanation: {
          en: "Volumetric measuring uses cups/spoons - highly inconsistent because flour can be packed tightly or sit loosely (1 cup flour ranges from 120-150g). Gravimetric measuring uses weight/scales - the professional standard because it's precise and reproducible. This is why professional recipes list ingredients in grams, not cups.",
          es: "Medición volumétrica usa tazas/cucharas - altamente inconsistente porque la harina puede estar compactada o suelta (1 taza de harina varía de 120-150g). Medición gravimétrica usa peso/balanzas - el estándar profesional porque es precisa y reproducible. Por esto las recetas profesionales listan ingredientes en gramos, no tazas.",
          de: "Volumetrisches Messen verwendet Tassen/Löffel - sehr inkonsistent weil Mehl fest gepackt oder locker sitzen kann (1 Tasse Mehl reicht von 120-150g). Gravimetrisches Messen verwendet Gewicht/Waagen - der professionelle Standard weil es präzise und reproduzierbar ist. Deshalb listen professionelle Rezepte Zutaten in Gramm auf, nicht Tassen.",
          nl: "Volumetrisch meten gebruikt kopjes/lepels - zeer inconsistent omdat meel strak kan zijn ingepakt of los kan zitten (1 kopje meel varieert van 120-150g). Gravimetrisch meten gebruikt gewicht/weegschalen - de professionele standaard omdat het nauwkeurig en reproduceerbaar is. Daarom vermelden professionele recepten ingrediënten in grammen, niet kopjes."
        }
      },
      {
        question: {
          en: "What is 'reverse creaming' method in enriched bread doughs?",
          es: "¿Qué es el método de 'cremado inverso' en masas de pan enriquecidas?",
          de: "Was ist die 'umgekehrte Aufrahmung' Methode in angereicherten Brotteigen?",
          nl: "Wat is de 'omgekeerde romige' methode in verrijkte brooddegen?"
        },
        options: [
          { en: "Mix dry ingredients with fat first (coats flour proteins), then add liquids - creates tender crumb by limiting gluten development. Used for brioche, challah, milk bread", es: "Mezclar ingredientes secos con grasa primero (cubre proteínas de harina), luego añadir líquidos - crea miga tierna limitando desarrollo de gluten. Usado para brioche, challah, pan de leche", de: "Trockene Zutaten zuerst mit Fett mischen (beschichtet Mehlproteine), dann Flüssigkeiten hinzufügen - erzeugt zarte Krume durch Begrenzung der Glutenentwicklung. Verwendet für Brioche, Challah, Milchbrot", nl: "Droge ingrediënten eerst met vet mengen (bedekt meelproteïnen), dan vloeistoffen toevoegen - creëert zachte kruim door glutenontwikkeling te beperken. Gebruikt voor brioche, challah, melkbrood" },
          { en: "Beating eggs before adding to dough", es: "Batir huevos antes de añadir a masa", de: "Eier schlagen vor Teigzugabe", nl: "Eieren kloppen voor toevoegen aan deeg" },
          { en: "Kneading dough backwards in reverse direction", es: "Amasar masa hacia atrás en dirección inversa", de: "Teig rückwärts in umgekehrter Richtung kneten", nl: "Deeg achteruit in omgekeerde richting kneden" },
          { en: "Adding yeast at the end instead of beginning", es: "Añadir levadura al final en lugar del principio", de: "Hefe am Ende statt am Anfang hinzufügen", nl: "Gist aan het einde toevoegen in plaats van begin" }
        ],
        correct: 0,
        explanation: {
          en: "Reverse creaming (also called 'blending method') mixes dry ingredients with fat first before adding liquid ingredients. The fat coats flour proteins, limiting gluten development and creating an exceptionally tender, cake-like crumb. This technique is used for enriched breads like brioche, challah, and Japanese milk bread where softness is desired.",
          es: "Cremado inverso (también llamado 'método de mezcla') mezcla ingredientes secos con grasa primero antes de añadir ingredientes líquidos. La grasa cubre proteínas de harina, limitando desarrollo de gluten y creando miga excepcionalmente tierna, tipo pastel. Esta técnica se usa para panes enriquecidos como brioche, challah, y pan de leche japonés donde se desea suavidad.",
          de: "Umgekehrte Aufrahmung (auch 'Mischverfahren' genannt) mischt trockene Zutaten zuerst mit Fett bevor flüssige Zutaten hinzugefügt werden. Das Fett beschichtet Mehlproteine, begrenzt Glutenentwicklung und erzeugt eine außergewöhnlich zarte, kuchenartige Krume. Diese Technik wird für angereicherte Brote wie Brioche, Challah, und japanisches Milchbrot verwendet wo Weichheit gewünscht ist.",
          nl: "Omgekeerde romige methode (ook wel 'mengmethode' genoemd) mengt droge ingrediënten eerst met vet voordat vloeibare ingrediënten worden toegevoegd. Het vet bedekt meelproteïnen, beperkt glutenontwikkeling en creëert een uitzonderlijk zachte, cakeachtige kruim. Deze techniek wordt gebruikt voor verrijkte broden zoals brioche, challah, en Japans melkbrood waar zachtheid gewenst is."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  } else if (typeof window !== 'undefined') {
    window.level5 = level5;
  }
})();
