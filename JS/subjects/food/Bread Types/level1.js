(function() {
    const level1 = {
        en: {
            questions: [
                {
                    question: "What is the main ingredient that makes bread rise?",
                    options: ["Yeast", "Salt", "Sugar", "Butter"],
                    correct: 0,
                    explanation: "Yeast is a living microorganism that ferments sugars in the dough, producing carbon dioxide gas which causes the bread to rise and become fluffy."
                },
                {
                    question: "Which type of flour is most commonly used for white bread?",
                    options: ["Rye flour", "All-purpose wheat flour", "Corn flour", "Rice flour"],
                    correct: 1,
                    explanation: "All-purpose wheat flour is the most common choice for white bread because it has the right protein content to develop gluten and create a good bread structure."
                },
                {
                    question: "What is sourdough bread characterized by?",
                    options: ["Sweet taste from honey", "Tangy flavor from natural fermentation", "Spicy flavor from herbs", "Salty taste from sea salt"],
                    correct: 1,
                    explanation: "Sourdough bread gets its distinctive tangy flavor from natural fermentation by wild yeast and lactic acid bacteria in a sourdough starter."
                },
                {
                    question: "What gives whole wheat bread its brown color?",
                    options: ["Added food coloring", "Molasses", "Wheat bran and germ in the flour", "Caramelized sugar"],
                    correct: 2,
                    explanation: "Whole wheat bread is brown because it's made from whole grain flour that includes the wheat bran (outer layer) and germ (nutrient-rich core), unlike white flour which only uses the endosperm."
                },
                {
                    question: "What is a baguette?",
                    options: ["A sweet German pastry", "A long, thin French bread with a crispy crust", "A round Italian bread", "A flat Middle Eastern bread"],
                    correct: 1,
                    explanation: "A baguette is a traditional French bread known for its long, thin shape and crispy golden crust with a soft, airy interior."
                },
                {
                    question: "What is the purpose of kneading bread dough?",
                    options: ["To make the dough smell better", "To cool down the dough", "To develop gluten for structure and elasticity", "To add air bubbles"],
                    correct: 2,
                    explanation: "Kneading develops gluten proteins in the flour, creating a network that gives bread its structure, elasticity, and ability to trap gas from yeast fermentation."
                },
                {
                    question: "What is pita bread?",
                    options: ["A sweet braided bread", "A round, flat Middle Eastern bread that forms a pocket", "A dense German rye bread", "A crusty French roll"],
                    correct: 1,
                    explanation: "Pita bread is a round, flat Middle Eastern bread that puffs up during baking, creating a hollow pocket inside that's perfect for filling with various ingredients."
                },
                {
                    question: "What type of bread is focaccia?",
                    options: ["A Jewish braided bread", "An Italian flatbread with olive oil and herbs", "A Mexican tortilla", "An Irish soda bread"],
                    correct: 1,
                    explanation: "Focaccia is a traditional Italian flatbread that's dimpled and drizzled with olive oil, often topped with herbs, salt, and sometimes other ingredients."
                },
                {
                    question: "What makes rye bread different from wheat bread?",
                    options: ["It's made with rye flour instead of wheat flour", "It contains chocolate", "It's always sweet", "It has no crust"],
                    correct: 0,
                    explanation: "Rye bread is made primarily from rye flour rather than wheat flour, giving it a denser texture, darker color, and distinctive earthy flavor."
                },
                {
                    question: "What is a pretzel traditionally shaped like?",
                    options: ["A circle", "A square", "A twisted knot", "A star"],
                    correct: 2,
                    explanation: "Pretzels are traditionally shaped into a distinctive twisted knot or loop, which has become an iconic symbol associated with this type of bread."
                },
                {
                    question: "What gives bagels their chewy texture?",
                    options: ["Adding extra sugar", "Freezing the dough", "Boiling before baking", "Using only rye flour"],
                    correct: 2,
                    explanation: "Bagels are boiled in water before baking, which gelatinizes the starch on the surface and creates their characteristic dense, chewy texture and shiny crust."
                },
                {
                    question: "What is ciabatta bread known for?",
                    options: ["Its dark color", "Its sweet taste", "Its open, airy texture with large holes", "Its square shape"],
                    correct: 2,
                    explanation: "Ciabatta, which means 'slipper' in Italian, is known for its open, airy crumb structure with large irregular holes, crispy crust, and soft interior."
                },
                {
                    question: "What is naan bread traditionally cooked in?",
                    options: ["A microwave", "A tandoor oven", "A frying pan", "A steamer"],
                    correct: 1,
                    explanation: "Naan bread is traditionally cooked in a tandoor, a cylindrical clay oven that reaches very high temperatures, giving the bread its characteristic charred spots and fluffy texture."
                },
                {
                    question: "What is the crust of bread?",
                    options: ["The seeds on top", "The outer layer that forms during baking", "The center of the bread", "The yeast culture"],
                    correct: 1,
                    explanation: "The crust is the outer layer of bread that forms during baking when the surface is exposed to high heat, creating a firmer, often golden-brown exterior."
                },
                {
                    question: "What is the soft inside part of bread called?",
                    options: ["Crumb", "Core", "Filling", "Dough"],
                    correct: 0,
                    explanation: "The soft interior of bread is called the crumb, which refers to the texture and structure of the inner part of the bread, distinct from the crust."
                },
                {
                    question: "Which country is famous for croissants?",
                    options: ["Italy", "Spain", "France", "Germany"],
                    correct: 2,
                    explanation: "France is famous for croissants, the buttery, flaky, crescent-shaped pastries that have become an iconic symbol of French baking and cuisine."
                },
                {
                    question: "What makes bread dough sticky?",
                    options: ["Too much flour", "High water content", "Cold temperature", "Adding oil"],
                    correct: 1,
                    explanation: "Bread dough becomes sticky when it has a high water content relative to the flour. The moisture makes the dough wet and difficult to handle without it sticking to surfaces."
                },
                {
                    question: "What happens if you add too much salt to bread dough?",
                    options: ["The bread becomes sweeter", "It slows down or kills the yeast", "The bread rises faster", "Nothing changes"],
                    correct: 1,
                    explanation: "Too much salt can slow down or even kill the yeast by drawing out moisture and creating an environment where yeast cannot function properly, resulting in bread that doesn't rise well."
                },
                {
                    question: "What is the difference between baking powder and yeast in bread making?",
                    options: ["They are exactly the same thing", "Yeast is alive and ferments, baking powder is a chemical leavener", "Baking powder makes bread brown", "Yeast only works in cold temperatures"],
                    correct: 1,
                    explanation: "Yeast is a living organism that ferments sugars and produces carbon dioxide slowly over time, while baking powder is a chemical leavening agent that reacts quickly when mixed with liquid and heat."
                },
                {
                    question: "What are the four basic ingredients needed for simple bread?",
                    options: ["Flour, eggs, milk, butter", "Flour, water, salt, yeast", "Flour, sugar, oil, baking soda", "Flour, cream, salt, sugar"],
                    correct: 1,
                    explanation: "The four essential ingredients for making basic bread are flour (provides structure), water (hydrates the flour), salt (adds flavor and controls fermentation), and yeast (makes the bread rise)."
                }
            ]
        },
        es: {
            questions: [
                {
                    question: "¿Cuál es el ingrediente principal que hace que el pan suba?",
                    options: ["Levadura", "Sal", "Azúcar", "Mantequilla"],
                    correct: 0,
                    explanation: "La levadura es un microorganismo vivo que fermenta los azúcares en la masa, produciendo gas dióxido de carbono que hace que el pan suba y se vuelva esponjoso."
                },
                {
                    question: "¿Qué tipo de harina se usa más comúnmente para el pan blanco?",
                    options: ["Harina de centeno", "Harina de trigo común", "Harina de maíz", "Harina de arroz"],
                    correct: 1,
                    explanation: "La harina de trigo común es la opción más común para el pan blanco porque tiene el contenido de proteína adecuado para desarrollar gluten y crear una buena estructura de pan."
                },
                {
                    question: "¿Por qué se caracteriza el pan de masa madre?",
                    options: ["Sabor dulce de miel", "Sabor ácido de fermentación natural", "Sabor picante de hierbas", "Sabor salado de sal marina"],
                    correct: 1,
                    explanation: "El pan de masa madre obtiene su sabor ácido distintivo de la fermentación natural por levadura silvestre y bacterias de ácido láctico en un iniciador de masa madre."
                },
                {
                    question: "¿Qué le da al pan integral su color marrón?",
                    options: ["Colorante alimentario añadido", "Melaza", "Salvado y germen de trigo en la harina", "Azúcar caramelizado"],
                    correct: 2,
                    explanation: "El pan integral es marrón porque está hecho de harina integral que incluye el salvado de trigo (capa exterior) y el germen (núcleo rico en nutrientes), a diferencia de la harina blanca que solo usa el endospermo."
                },
                {
                    question: "¿Qué es una baguette?",
                    options: ["Un pastel alemán dulce", "Un pan francés largo y delgado con corteza crujiente", "Un pan italiano redondo", "Un pan plano de Oriente Medio"],
                    correct: 1,
                    explanation: "Una baguette es un pan tradicional francés conocido por su forma larga y delgada y su corteza dorada crujiente con un interior suave y aireado."
                },
                {
                    question: "¿Cuál es el propósito de amasar la masa de pan?",
                    options: ["Hacer que la masa huela mejor", "Enfriar la masa", "Desarrollar gluten para estructura y elasticidad", "Agregar burbujas de aire"],
                    correct: 2,
                    explanation: "El amasado desarrolla las proteínas de gluten en la harina, creando una red que le da al pan su estructura, elasticidad y capacidad para atrapar gas de la fermentación de levadura."
                },
                {
                    question: "¿Qué es el pan pita?",
                    options: ["Un pan trenzado dulce", "Un pan plano redondo de Oriente Medio que forma un bolsillo", "Un pan de centeno alemán denso", "Un panecillo francés crujiente"],
                    correct: 1,
                    explanation: "El pan pita es un pan plano redondo de Oriente Medio que se infla durante la cocción, creando un bolsillo hueco en su interior perfecto para rellenar con varios ingredientes."
                },
                {
                    question: "¿Qué tipo de pan es la focaccia?",
                    options: ["Un pan trenzado judío", "Un pan plano italiano con aceite de oliva y hierbas", "Una tortilla mexicana", "Un pan de soda irlandés"],
                    correct: 1,
                    explanation: "La focaccia es un pan plano tradicional italiano que está marcado con hoyuelos y rociado con aceite de oliva, a menudo cubierto con hierbas, sal y a veces otros ingredientes."
                },
                {
                    question: "¿Qué hace que el pan de centeno sea diferente del pan de trigo?",
                    options: ["Está hecho con harina de centeno en lugar de harina de trigo", "Contiene chocolate", "Siempre es dulce", "No tiene corteza"],
                    correct: 0,
                    explanation: "El pan de centeno está hecho principalmente de harina de centeno en lugar de harina de trigo, lo que le da una textura más densa, un color más oscuro y un sabor terroso distintivo."
                },
                {
                    question: "¿Qué forma tradicional tiene un pretzel?",
                    options: ["Un círculo", "Un cuadrado", "Un nudo retorcido", "Una estrella"],
                    correct: 2,
                    explanation: "Los pretzels tradicionalmente tienen forma de nudo o lazo retorcido distintivo, que se ha convertido en un símbolo icónico asociado con este tipo de pan."
                },
                {
                    question: "¿Qué le da a los bagels su textura masticable?",
                    options: ["Agregar azúcar extra", "Congelar la masa", "Hervir antes de hornear", "Usar solo harina de centeno"],
                    correct: 2,
                    explanation: "Los bagels se hierven en agua antes de hornear, lo que gelatiniza el almidón en la superficie y crea su característica textura densa y masticable y corteza brillante."
                },
                {
                    question: "¿Por qué es conocido el pan ciabatta?",
                    options: ["Su color oscuro", "Su sabor dulce", "Su textura abierta y aireada con agujeros grandes", "Su forma cuadrada"],
                    correct: 2,
                    explanation: "La ciabatta, que significa 'zapatilla' en italiano, es conocida por su estructura de miga abierta y aireada con grandes agujeros irregulares, corteza crujiente e interior suave."
                },
                {
                    question: "¿En qué se cocina tradicionalmente el pan naan?",
                    options: ["Un microondas", "Un horno tandoor", "Una sartén", "Una vaporera"],
                    correct: 1,
                    explanation: "El pan naan se cocina tradicionalmente en un tandoor, un horno de arcilla cilíndrico que alcanza temperaturas muy altas, dándole al pan sus manchas carbonizadas características y textura esponjosa."
                },
                {
                    question: "¿Qué es la corteza del pan?",
                    options: ["Las semillas encima", "La capa exterior que se forma durante la cocción", "El centro del pan", "El cultivo de levadura"],
                    correct: 1,
                    explanation: "La corteza es la capa exterior del pan que se forma durante la cocción cuando la superficie se expone al calor alto, creando un exterior más firme, a menudo de color marrón dorado."
                },
                {
                    question: "¿Cómo se llama la parte suave del interior del pan?",
                    options: ["Miga", "Núcleo", "Relleno", "Masa"],
                    correct: 0,
                    explanation: "El interior suave del pan se llama miga, que se refiere a la textura y estructura de la parte interna del pan, distinta de la corteza."
                },
                {
                    question: "¿Qué país es famoso por los croissants?",
                    options: ["Italia", "España", "Francia", "Alemania"],
                    correct: 2,
                    explanation: "Francia es famosa por los croissants, los pasteles mantecosos, hojaldrados y en forma de media luna que se han convertido en un símbolo icónico de la repostería y cocina francesa."
                },
                {
                    question: "¿Qué hace que la masa de pan sea pegajosa?",
                    options: ["Demasiada harina", "Alto contenido de agua", "Temperatura fría", "Agregar aceite"],
                    correct: 1,
                    explanation: "La masa de pan se vuelve pegajosa cuando tiene un alto contenido de agua en relación con la harina. La humedad hace que la masa esté húmeda y sea difícil de manejar sin que se pegue a las superficies."
                },
                {
                    question: "¿Qué sucede si agregas demasiada sal a la masa de pan?",
                    options: ["El pan se vuelve más dulce", "Ralentiza o mata la levadura", "El pan sube más rápido", "Nada cambia"],
                    correct: 1,
                    explanation: "Demasiada sal puede ralentizar o incluso matar la levadura al extraer la humedad y crear un ambiente donde la levadura no puede funcionar correctamente, resultando en pan que no sube bien."
                },
                {
                    question: "¿Cuál es la diferencia entre el polvo de hornear y la levadura en la elaboración del pan?",
                    options: ["Son exactamente lo mismo", "La levadura está viva y fermenta, el polvo de hornear es un leudante químico", "El polvo de hornear hace que el pan sea marrón", "La levadura solo funciona en temperaturas frías"],
                    correct: 1,
                    explanation: "La levadura es un organismo vivo que fermenta azúcares y produce dióxido de carbono lentamente con el tiempo, mientras que el polvo de hornear es un agente leudante químico que reacciona rápidamente cuando se mezcla con líquido y calor."
                },
                {
                    question: "¿Cuáles son los cuatro ingredientes básicos necesarios para el pan simple?",
                    options: ["Harina, huevos, leche, mantequilla", "Harina, agua, sal, levadura", "Harina, azúcar, aceite, bicarbonato de sodio", "Harina, crema, sal, azúcar"],
                    correct: 1,
                    explanation: "Los cuatro ingredientes esenciales para hacer pan básico son harina (proporciona estructura), agua (hidrata la harina), sal (añade sabor y controla la fermentación) y levadura (hace que el pan suba)."
                }
            ]
        },
        de: {
            questions: [
                {
                    question: "Was ist die Hauptzutat, die Brot aufgehen lässt?",
                    options: ["Hefe", "Salz", "Zucker", "Butter"],
                    correct: 0,
                    explanation: "Hefe ist ein lebender Mikroorganismus, der Zucker im Teig fermentiert und dabei Kohlendioxidgas produziert, das das Brot aufgehen und fluffig werden lässt."
                },
                {
                    question: "Welche Art von Mehl wird am häufigsten für Weißbrot verwendet?",
                    options: ["Roggenmehl", "Allzweck-Weizenmehl", "Maismehl", "Reismehl"],
                    correct: 1,
                    explanation: "Allzweck-Weizenmehl ist die häufigste Wahl für Weißbrot, da es den richtigen Proteingehalt hat, um Gluten zu entwickeln und eine gute Brotstruktur zu schaffen."
                },
                {
                    question: "Wodurch zeichnet sich Sauerteigbrot aus?",
                    options: ["Süßer Geschmack von Honig", "Säuerlicher Geschmack durch natürliche Fermentation", "Würziger Geschmack von Kräutern", "Salziger Geschmack von Meersalz"],
                    correct: 1,
                    explanation: "Sauerteigbrot erhält seinen charakteristischen säuerlichen Geschmack durch natürliche Fermentation von Wildhefe und Milchsäurebakterien in einem Sauerteigstarter."
                },
                {
                    question: "Was gibt Vollkornbrot seine braune Farbe?",
                    options: ["Zugesetzte Lebensmittelfarbe", "Melasse", "Weizenkleie und Keim im Mehl", "Karamellisierter Zucker"],
                    correct: 2,
                    explanation: "Vollkornbrot ist braun, weil es aus Vollkornmehl hergestellt wird, das die Weizenkleie (äußere Schicht) und den Keim (nährstoffreicher Kern) enthält, im Gegensatz zu Weißmehl, das nur das Endosperm verwendet."
                },
                {
                    question: "Was ist ein Baguette?",
                    options: ["Ein süßes deutsches Gebäck", "Ein langes, dünnes französisches Brot mit knuspriger Kruste", "Ein rundes italienisches Brot", "Ein flaches nahöstliches Brot"],
                    correct: 1,
                    explanation: "Ein Baguette ist ein traditionelles französisches Brot, das für seine lange, dünne Form und knusprige goldene Kruste mit weichem, luftigem Inneren bekannt ist."
                },
                {
                    question: "Was ist der Zweck des Knetens von Brotteig?",
                    options: ["Den Teig besser riechen lassen", "Den Teig abkühlen", "Gluten für Struktur und Elastizität entwickeln", "Luftblasen hinzufügen"],
                    correct: 2,
                    explanation: "Kneten entwickelt Glutenproteine im Mehl und schafft ein Netzwerk, das dem Brot seine Struktur, Elastizität und Fähigkeit gibt, Gas aus der Hefegärung einzufangen."
                },
                {
                    question: "Was ist Pitabrot?",
                    options: ["Ein süßes geflochtenes Brot", "Ein rundes, flaches nahöstliches Brot, das eine Tasche bildet", "Ein dichtes deutsches Roggenbrot", "Ein knuspriges französisches Brötchen"],
                    correct: 1,
                    explanation: "Pitabrot ist ein rundes, flaches nahöstliches Brot, das beim Backen aufbläht und eine hohle Tasche im Inneren bildet, die sich perfekt zum Füllen mit verschiedenen Zutaten eignet."
                },
                {
                    question: "Welche Art von Brot ist Focaccia?",
                    options: ["Ein jüdisches geflochtenes Brot", "Ein italienisches Fladenbrot mit Olivenöl und Kräutern", "Eine mexikanische Tortilla", "Ein irisches Sodabrot"],
                    correct: 1,
                    explanation: "Focaccia ist ein traditionelles italienisches Fladenbrot, das Vertiefungen hat und mit Olivenöl beträufelt wird, oft mit Kräutern, Salz und manchmal anderen Zutaten belegt."
                },
                {
                    question: "Was macht Roggenbrot anders als Weizenbrot?",
                    options: ["Es wird mit Roggenmehl statt Weizenmehl hergestellt", "Es enthält Schokolade", "Es ist immer süß", "Es hat keine Kruste"],
                    correct: 0,
                    explanation: "Roggenbrot wird hauptsächlich aus Roggenmehl statt aus Weizenmehl hergestellt, was ihm eine dichtere Textur, dunklere Farbe und charakteristischen erdigen Geschmack verleiht."
                },
                {
                    question: "Welche Form hat eine Brezel traditionell?",
                    options: ["Ein Kreis", "Ein Quadrat", "Ein verdrehter Knoten", "Ein Stern"],
                    correct: 2,
                    explanation: "Brezeln haben traditionell die Form eines charakteristischen verdrehten Knotens oder einer Schleife, die zu einem ikonischen Symbol geworden ist, das mit dieser Brotart verbunden ist."
                },
                {
                    question: "Was gibt Bagels ihre zähe Textur?",
                    options: ["Zusätzlichen Zucker hinzufügen", "Den Teig einfrieren", "Vor dem Backen kochen", "Nur Roggenmehl verwenden"],
                    correct: 2,
                    explanation: "Bagels werden vor dem Backen in Wasser gekocht, was die Stärke an der Oberfläche gelatiniert und ihre charakteristische dichte, zähe Textur und glänzende Kruste erzeugt."
                },
                {
                    question: "Wofür ist Ciabatta-Brot bekannt?",
                    options: ["Seine dunkle Farbe", "Seinen süßen Geschmack", "Seine offene, luftige Textur mit großen Löchern", "Seine quadratische Form"],
                    correct: 2,
                    explanation: "Ciabatta, was auf Italienisch 'Pantoffel' bedeutet, ist für seine offene, luftige Krumenstruktur mit großen unregelmäßigen Löchern, knusprige Kruste und weiches Inneres bekannt."
                },
                {
                    question: "Worin wird Naan-Brot traditionell gebacken?",
                    options: ["Einer Mikrowelle", "Einem Tandoor-Ofen", "Einer Bratpfanne", "Einem Dampfgarer"],
                    correct: 1,
                    explanation: "Naan-Brot wird traditionell in einem Tandoor gebacken, einem zylindrischen Tonofen, der sehr hohe Temperaturen erreicht und dem Brot seine charakteristischen verkohlten Flecken und fluffige Textur verleiht."
                },
                {
                    question: "Was ist die Kruste von Brot?",
                    options: ["Die Samen obendrauf", "Die äußere Schicht, die beim Backen entsteht", "Die Mitte des Brotes", "Die Hefekultur"],
                    correct: 1,
                    explanation: "Die Kruste ist die äußere Schicht des Brotes, die beim Backen entsteht, wenn die Oberfläche hoher Hitze ausgesetzt wird und ein festeres, oft goldbraunes Äußeres entsteht."
                },
                {
                    question: "Wie nennt man den weichen inneren Teil des Brotes?",
                    options: ["Krume", "Kern", "Füllung", "Teig"],
                    correct: 0,
                    explanation: "Das weiche Innere des Brotes wird Krume genannt, was sich auf die Textur und Struktur des inneren Teils des Brotes bezieht, im Unterschied zur Kruste."
                },
                {
                    question: "Welches Land ist berühmt für Croissants?",
                    options: ["Italien", "Spanien", "Frankreich", "Deutschland"],
                    correct: 2,
                    explanation: "Frankreich ist berühmt für Croissants, die butterigen, blättrigen, halbmondförmigen Gebäckstücke, die zu einem ikonischen Symbol der französischen Backkunst und Küche geworden sind."
                },
                {
                    question: "Was macht Brotteig klebrig?",
                    options: ["Zu viel Mehl", "Hoher Wassergehalt", "Kalte Temperatur", "Öl hinzufügen"],
                    correct: 1,
                    explanation: "Brotteig wird klebrig, wenn er im Verhältnis zum Mehl einen hohen Wassergehalt hat. Die Feuchtigkeit macht den Teig nass und schwierig zu handhaben, ohne dass er an Oberflächen klebt."
                },
                {
                    question: "Was passiert, wenn man zu viel Salz in den Brotteig gibt?",
                    options: ["Das Brot wird süßer", "Es verlangsamt oder tötet die Hefe", "Das Brot geht schneller auf", "Es ändert sich nichts"],
                    correct: 1,
                    explanation: "Zu viel Salz kann die Hefe verlangsamen oder sogar abtöten, indem es Feuchtigkeit entzieht und eine Umgebung schafft, in der Hefe nicht richtig funktionieren kann, was zu Brot führt, das nicht gut aufgeht."
                },
                {
                    question: "Was ist der Unterschied zwischen Backpulver und Hefe beim Brotbacken?",
                    options: ["Sie sind genau dasselbe", "Hefe ist lebendig und fermentiert, Backpulver ist ein chemisches Treibmittel", "Backpulver macht Brot braun", "Hefe funktioniert nur bei kalten Temperaturen"],
                    correct: 1,
                    explanation: "Hefe ist ein lebender Organismus, der Zucker fermentiert und über Zeit langsam Kohlendioxid produziert, während Backpulver ein chemisches Treibmittel ist, das schnell reagiert, wenn es mit Flüssigkeit und Hitze gemischt wird."
                },
                {
                    question: "Was sind die vier grundlegenden Zutaten für einfaches Brot?",
                    options: ["Mehl, Eier, Milch, Butter", "Mehl, Wasser, Salz, Hefe", "Mehl, Zucker, Öl, Natron", "Mehl, Sahne, Salz, Zucker"],
                    correct: 1,
                    explanation: "Die vier wesentlichen Zutaten für die Herstellung von Grundbrot sind Mehl (liefert Struktur), Wasser (hydratisiert das Mehl), Salz (fügt Geschmack hinzu und kontrolliert die Fermentation) und Hefe (lässt das Brot aufgehen)."
                }
            ]
        },
        nl: {
            questions: [
                {
                    question: "Wat is het hoofdingrediënt dat brood laat rijzen?",
                    options: ["Gist", "Zout", "Suiker", "Boter"],
                    correct: 0,
                    explanation: "Gist is een levend micro-organisme dat suikers in het deeg fermenteert en kooldioxide produceert waardoor het brood rijst en luchtig wordt."
                },
                {
                    question: "Welk type meel wordt het meest gebruikt voor witbrood?",
                    options: ["Roggemeel", "Tarwebloem voor algemeen gebruik", "Maïsmeel", "Rijstmeel"],
                    correct: 1,
                    explanation: "Tarwebloem voor algemeen gebruik is de meest voorkomende keuze voor witbrood omdat het het juiste eiwitgehalte heeft om gluten te ontwikkelen en een goede broodstructuur te creëren."
                },
                {
                    question: "Waar wordt zuurdesembrood gekenmerkt door?",
                    options: ["Zoete smaak van honing", "Zure smaak door natuurlijke fermentatie", "Pittige smaak van kruiden", "Zoute smaak van zeezout"],
                    correct: 1,
                    explanation: "Zuurdesembrood krijgt zijn kenmerkende zure smaak door natuurlijke fermentatie door wilde gist en melkzuurbacteriën in een zuurdesemstarter."
                },
                {
                    question: "Wat geeft volkoren brood zijn bruine kleur?",
                    options: ["Toegevoegde kleurstof", "Melasse", "Tarwezemelen en -kiem in het meel", "Gekarameliseerde suiker"],
                    correct: 2,
                    explanation: "Volkoren brood is bruin omdat het gemaakt is van volkoren meel dat de tarwezemelen (buitenste laag) en kiem (voedingsrijke kern) bevat, in tegenstelling tot wit meel dat alleen het endosperm gebruikt."
                },
                {
                    question: "Wat is een baguette?",
                    options: ["Een zoet Duits gebak", "Een lang, dun Frans brood met een knapperige korst", "Een rond Italiaans brood", "Een plat Midden-Oosters brood"],
                    correct: 1,
                    explanation: "Een baguette is een traditioneel Frans brood dat bekend staat om zijn lange, dunne vorm en knapperige gouden korst met een zachte, luchtige binnenkant."
                },
                {
                    question: "Wat is het doel van het kneden van brooddeeg?",
                    options: ["Het deeg beter laten ruiken", "Het deeg afkoelen", "Gluten ontwikkelen voor structuur en elasticiteit", "Luchtbellen toevoegen"],
                    correct: 2,
                    explanation: "Kneden ontwikkelt gluteneiwitten in het meel en creëert een netwerk dat het brood zijn structuur, elasticiteit en vermogen geeft om gas van gistfermentatie vast te houden."
                },
                {
                    question: "Wat is pitabrood?",
                    options: ["Een zoet gevlochten brood", "Een rond, plat Midden-Oosters brood dat een zak vormt", "Een dicht Duits roggebrood", "Een knapperig Frans broodje"],
                    correct: 1,
                    explanation: "Pitabrood is een rond, plat Midden-Oosters brood dat tijdens het bakken opzwelt en een holle zak binnenin creëert die perfect is om te vullen met verschillende ingrediënten."
                },
                {
                    question: "Wat voor soort brood is focaccia?",
                    options: ["Een Joods gevlochten brood", "Een Italiaans platbrood met olijfolie en kruiden", "Een Mexicaanse tortilla", "Een Iers sodabrood"],
                    correct: 1,
                    explanation: "Focaccia is een traditioneel Italiaans platbrood dat kuiltjes heeft en besprenkeld is met olijfolie, vaak belegd met kruiden, zout en soms andere ingrediënten."
                },
                {
                    question: "Wat maakt roggebrood anders dan tarwebrood?",
                    options: ["Het is gemaakt met roggemeel in plaats van tarwemeel", "Het bevat chocolade", "Het is altijd zoet", "Het heeft geen korst"],
                    correct: 0,
                    explanation: "Roggebrood is voornamelijk gemaakt van roggemeel in plaats van tarwemeel, wat het een dichtere textuur, donkerdere kleur en kenmerkende aardse smaak geeft."
                },
                {
                    question: "Welke vorm heeft een pretzel traditioneel?",
                    options: ["Een cirkel", "Een vierkant", "Een gedraaide knoop", "Een ster"],
                    correct: 2,
                    explanation: "Pretzels hebben traditioneel de vorm van een kenmerkende gedraaide knoop of lus, die een iconisch symbool is geworden dat geassocieerd wordt met dit type brood."
                },
                {
                    question: "Wat geeft bagels hun chewy textuur?",
                    options: ["Extra suiker toevoegen", "Het deeg bevriezen", "Koken voor het bakken", "Alleen roggemeel gebruiken"],
                    correct: 2,
                    explanation: "Bagels worden gekookt in water voordat ze gebakken worden, wat het zetmeel aan het oppervlak gelatineert en hun karakteristieke dichte, chewy textuur en glanzende korst creëert."
                },
                {
                    question: "Waar staat ciabatta brood om bekend?",
                    options: ["Zijn donkere kleur", "Zijn zoete smaak", "Zijn open, luchtige textuur met grote gaten", "Zijn vierkante vorm"],
                    correct: 2,
                    explanation: "Ciabatta, wat 'slipper' betekent in het Italiaans, staat bekend om zijn open, luchtige kruimstructuur met grote onregelmatige gaten, knapperige korst en zachte binnenkant."
                },
                {
                    question: "Waarin wordt naanbrood traditioneel gebakken?",
                    options: ["Een magnetron", "Een tandooroven", "Een koekenpan", "Een stomer"],
                    correct: 1,
                    explanation: "Naanbrood wordt traditioneel gebakken in een tandoor, een cilindrische kleioven die zeer hoge temperaturen bereikt en het brood zijn karakteristieke verbrande plekken en luchtige textuur geeft."
                },
                {
                    question: "Wat is de korst van brood?",
                    options: ["De zaden erop", "De buitenste laag die tijdens het bakken ontstaat", "Het midden van het brood", "De gistcultuur"],
                    correct: 1,
                    explanation: "De korst is de buitenste laag van brood die tijdens het bakken ontstaat wanneer het oppervlak wordt blootgesteld aan hoge hitte, waardoor een stevigere, vaak goudbruine buitenkant ontstaat."
                },
                {
                    question: "Hoe heet het zachte binnenste deel van brood?",
                    options: ["Kruim", "Kern", "Vulling", "Deeg"],
                    correct: 0,
                    explanation: "De zachte binnenkant van brood wordt de kruim genoemd, wat verwijst naar de textuur en structuur van het binnenste deel van het brood, onderscheiden van de korst."
                },
                {
                    question: "Welk land is beroemd om croissants?",
                    options: ["Italië", "Spanje", "Frankrijk", "Duitsland"],
                    correct: 2,
                    explanation: "Frankrijk is beroemd om croissants, de boterige, bladerdeegachtige, halvemaanvormige gebakjes die een iconisch symbool zijn geworden van Franse bakkunst en keuken."
                },
                {
                    question: "Wat maakt brooddeeg plakkerig?",
                    options: ["Te veel meel", "Hoog watergehalte", "Koude temperatuur", "Olie toevoegen"],
                    correct: 1,
                    explanation: "Brooddeeg wordt plakkerig wanneer het een hoog watergehalte heeft ten opzichte van het meel. Het vocht maakt het deeg nat en moeilijk te hanteren zonder dat het aan oppervlakken plakt."
                },
                {
                    question: "Wat gebeurt er als je te veel zout aan brooddeeg toevoegt?",
                    options: ["Het brood wordt zoeter", "Het vertraagt of doodt de gist", "Het brood rijst sneller", "Er verandert niets"],
                    correct: 1,
                    explanation: "Te veel zout kan de gist vertragen of zelfs doden door vocht te onttrekken en een omgeving te creëren waarin gist niet goed kan functioneren, wat resulteert in brood dat niet goed rijst."
                },
                {
                    question: "Wat is het verschil tussen bakpoeder en gist bij het brood bakken?",
                    options: ["Ze zijn precies hetzelfde", "Gist is levend en fermenteert, bakpoeder is een chemisch rijsmiddel", "Bakpoeder maakt brood bruin", "Gist werkt alleen bij koude temperaturen"],
                    correct: 1,
                    explanation: "Gist is een levend organisme dat suikers fermenteert en langzaam kooldioxide produceert, terwijl bakpoeder een chemisch rijsmiddel is dat snel reageert wanneer het gemengd wordt met vloeistof en warmte."
                },
                {
                    question: "Wat zijn de vier basisingrediënten die nodig zijn voor eenvoudig brood?",
                    options: ["Meel, eieren, melk, boter", "Meel, water, zout, gist", "Meel, suiker, olie, zuiveringszout", "Meel, room, zout, suiker"],
                    correct: 1,
                    explanation: "De vier essentiële ingrediënten voor het maken van basisbrood zijn meel (geeft structuur), water (hydrateert het meel), zout (voegt smaak toe en regelt fermentatie) en gist (laat het brood rijzen)."
                }
            ]
        }
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = level1;
    }
    if (typeof window !== 'undefined') {
        window.level1 = level1;
    }
})();
