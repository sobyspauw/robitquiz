// Vegetarian Dishes Quiz - Level 8: Plant-Based Meat Alternatives
(function() {
  "use strict";
  const level8 = {
    name: {
      en: "Vegetarian Level 8",
      es: "Vegetariano Nivel 8",
      de: "Vegetarisch Stufe 8",
      nl: "Vegetarisch Level 8"
    },
    questions: [
      {
        question: {
          en: "What protein is the main ingredient in Beyond Meat products?",
          es: "¿Qué proteína es el ingrediente principal en los productos Beyond Meat?",
          de: "Welches Protein ist die Hauptzutat in Beyond Meat Produkten?",
          nl: "Welk eiwit is het hoofdingrediënt in Beyond Meat producten?"
        },
        options: [
          { en: "Pea protein", es: "Proteína de guisante", de: "Erbsenprotein", nl: "Erwten eiwit" },
          { en: "Soy protein", es: "Proteína de soja", de: "Soja-Protein", nl: "Soja eiwit" },
          { en: "Wheat protein", es: "Proteína de trigo", de: "Weizenprotein", nl: "Tarwe eiwit" },
          { en: "Rice protein", es: "Proteína de arroz", de: "Reisprotein", nl: "Rijst eiwit" }
        ],
        correct: 0,
        explanation: {
          en: "Beyond Meat primarily uses pea protein isolate as its protein base, along with other plant ingredients to create meat-like texture and flavor.",
          es: "Beyond Meat usa principalmente aislado de proteína de guisante como su base proteica, junto con otros ingredientes vegetales para crear textura y sabor similar a la carne.",
          de: "Beyond Meat verwendet hauptsächlich Erbsenprotein-Isolat als Proteinbasis, zusammen mit anderen pflanzlichen Zutaten, um fleischähnliche Textur und Geschmack zu schaffen.",
          nl: "Beyond Meat gebruikt voornamelijk erwtenproteïne-isolaat als eiwitbasis, samen met andere plantaardige ingrediënten om vleesachtige textuur en smaak te creëren."
        }
      },
      {
        question: {
          en: "What gives some plant-based burgers their 'bleeding' effect?",
          es: "¿Qué da a algunas hamburguesas vegetales su efecto de 'sangrado'?",
          de: "Was verleiht manchen pflanzlichen Burgern ihren 'Blutungs'-Effekt?",
          nl: "Wat geeft sommige plantaardige burgers hun 'bloedend' effect?"
        },
        options: [
          { en: "Heme iron from soy leghemoglobin", es: "Hierro hemo de la leghemoglobina de soja", de: "Häm-Eisen aus Soja-Leghemoglobin", nl: "Heem ijzer uit soja leghemoglobine" },
          { en: "Red food coloring", es: "Colorante rojo alimentario", de: "Rote Lebensmittelfarbe", nl: "Rode voedselkleuring" },
          { en: "Beet juice", es: "Jugo de remolacha", de: "Rote-Bete-Saft", nl: "Bietensap" },
          { en: "Tomato paste", es: "Pasta de tomate", de: "Tomatenmark", nl: "Tomatenpuree" }
        ],
        correct: 0,
        explanation: {
          en: "Impossible Foods uses genetically engineered yeast to produce soy leghemoglobin, which contains heme iron that gives their burgers a meat-like appearance and taste when cooked.",
          es: "Impossible Foods usa levadura genéticamente modificada para producir leghemoglobina de soja, que contiene hierro hemo que da a sus hamburguesas apariencia y sabor similar a la carne cuando se cocinan.",
          de: "Impossible Foods verwendet gentechnisch veränderte Hefe, um Soja-Leghemoglobin zu produzieren, das Häm-Eisen enthält, das ihren Burgern beim Kochen ein fleischähnliches Aussehen und Geschmack verleiht.",
          nl: "Impossible Foods gebruikt genetisch gemodificeerde gist om soja leghemoglobine te produceren, dat heem ijzer bevat dat hun burgers een vleesachtig uiterlijk en smaak geeft bij het koken."
        }
      },
      {
        question: {
          en: "Which traditional Asian ingredient is commonly used to create meat-like texture?",
          es: "¿Qué ingrediente asiático tradicional se usa comúnmente para crear textura similar a la carne?",
          de: "Welche traditionelle asiatische Zutat wird häufig verwendet, um fleischähnliche Textur zu schaffen?",
          nl: "Welk traditioneel Aziatisch ingrediënt wordt vaak gebruikt om vleesachtige textuur te creëren?"
        },
        options: [
          { en: "Textured vegetable protein (TVP)", es: "Proteína vegetal texturizada (PVT)", de: "Texturiertes Pflanzenprotein (TVP)", nl: "Getextureerd plantaardig eiwit (TVP)" },
          { en: "Rice noodles", es: "Fideos de arroz", de: "Reisnudeln", nl: "Rijstnoedels" },
          { en: "Seaweed", es: "Algas marinas", de: "Seetang", nl: "Zeewier" },
          { en: "Bamboo shoots", es: "Brotes de bambú", de: "Bambussprossen", nl: "Bamboe scheuten" }
        ],
        correct: 0,
        explanation: {
          en: "TVP (Textured Vegetable Protein) is made from defatted soy flour and has been used in Asian cuisines for decades to create meat-like textures in vegetarian dishes.",
          es: "La PVT (Proteína Vegetal Texturizada) se hace de harina de soja desgrasada y se ha usado en cocinas asiáticas por décadas para crear texturas similares a la carne en platos vegetarianos.",
          de: "TVP (Texturiertes Pflanzenprotein) wird aus entfettetem Sojamehl hergestellt und wird seit Jahrzehnten in der asiatischen Küche verwendet, um fleischähnliche Texturen in vegetarischen Gerichten zu schaffen.",
          nl: "TVP (Getextureerd Plantaardig Eiwit) wordt gemaakt van ontvette sojameel en wordt al tientallen jaren gebruikt in Aziatische keukens om vleesachtige texturen in vegetarische gerechten te creëren."
        }
      },
      {
        question: {
          en: "What is jackfruit particularly good at mimicking?",
          es: "¿Qué es particularmente bueno imitando la jaca?",
          de: "Was ist Jackfruit besonders gut darin nachzuahmen?",
          nl: "Wat is jackfruit bijzonder goed in nabootsen?"
        },
        options: [
          { en: "Pulled pork texture", es: "Textura de cerdo desmenuzado", de: "Pulled-Pork-Textur", nl: "Pulled pork textuur" },
          { en: "Beef steak", es: "Bistec de res", de: "Rindersteak", nl: "Rundersteak" },
          { en: "Ground meat", es: "Carne molida", de: "Hackfleisch", nl: "Gehakt" },
          { en: "Fish fillets", es: "Filetes de pescado", de: "Fischfilets", nl: "Visfilets" }
        ],
        correct: 0,
        explanation: {
          en: "Young green jackfruit has a naturally stringy, fibrous texture that closely mimics pulled pork when seasoned and cooked properly, making it popular in BBQ dishes.",
          es: "La jaca verde joven tiene una textura naturalmente fibrosa y fibrosa que imita de cerca el cerdo desmenuzado cuando se sazona y cocina apropiadamente, haciéndola popular en platos de BBQ.",
          de: "Junge grüne Jackfruit hat eine natürlich faserige Textur, die Pulled Pork sehr ähnlich ist, wenn sie richtig gewürzt und gekocht wird, was sie in BBQ-Gerichten beliebt macht.",
          nl: "Jonge groene jackfruit heeft een natuurlijk vezelige, draadachtige textuur die pulled pork nauwkeurig nabootst wanneer goed gekruid en gekookt, waardoor het populair is in BBQ gerechten."
        }
      },
      {
        question: {
          en: "What ingredient helps bind plant-based meat alternatives together?",
          es: "¿Qué ingrediente ayuda a unir las alternativas de carne vegetal?",
          de: "Welche Zutat hilft, pflanzliche Fleischalternativen zusammenzuhalten?",
          nl: "Welk ingrediënt helpt plantaardige vleesvervanger samen te binden?"
        },
        options: [
          { en: "Methylcellulose", es: "Metilcelulosa", de: "Methylcellulose", nl: "Methylcellulose" },
          { en: "Sugar", es: "Azúcar", de: "Zucker", nl: "Suiker" },
          { en: "Salt", es: "Sal", de: "Salz", nl: "Zout" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" }
        ],
        correct: 0,
        explanation: {
          en: "Methylcellulose is a plant-derived binding agent that helps hold plant-based meat alternatives together while providing the right texture and mouthfeel during cooking.",
          es: "La metilcelulosa es un agente aglutinante derivado de plantas que ayuda a mantener unidas las alternativas de carne vegetal mientras proporciona la textura correcta y sensación en boca durante la cocción.",
          de: "Methylcellulose ist ein pflanzliches Bindemittel, das hilft, pflanzliche Fleischalternativen zusammenzuhalten, während es die richtige Textur und das richtige Mundgefühl beim Kochen bietet.",
          nl: "Methylcellulose is een plantaardig bindmiddel dat helpt plantaardige vleesvervanger samen te houden terwijl het de juiste textuur en mondgevoel biedt tijdens het koken."
        }
      },
      {
        question: {
          en: "Which mushroom variety is often used to create meat-like texture?",
          es: "¿Qué variedad de hongo se usa a menudo para crear textura similar a la carne?",
          de: "Welche Pilzsorte wird oft verwendet, um fleischähnliche Textur zu schaffen?",
          nl: "Welke paddenstoelsoort wordt vaak gebruikt om vleesachtige textuur te creëren?"
        },
        options: [
          { en: "King oyster mushrooms", es: "Hongos ostra rey", de: "Königsausternpilze", nl: "Koning oesterzwammen" },
          { en: "Button mushrooms", es: "Champiñones", de: "Champignons", nl: "Champignons" },
          { en: "Shiitake mushrooms", es: "Hongos shiitake", de: "Shiitake-Pilze", nl: "Shiitake paddestoelen" },
          { en: "Enoki mushrooms", es: "Hongos enoki", de: "Enoki-Pilze", nl: "Enoki paddestoelen" }
        ],
        correct: 0,
        explanation: {
          en: "King oyster mushrooms have thick, meaty stems that can be shredded or sliced to mimic various meat textures. They absorb flavors well and have a satisfying bite.",
          es: "Los hongos ostra rey tienen tallos gruesos y carnosos que se pueden desmenuzar o rebanar para imitar varias texturas de carne. Absorben bien los sabores y tienen una mordida satisfactoria.",
          de: "Königsausternpilze haben dicke, fleischige Stiele, die zerkleinert oder geschnitten werden können, um verschiedene Fleischtexturen nachzuahmen. Sie absorbieren Aromen gut und haben einen zufriedenstellenden Biss.",
          nl: "Koning oesterzwammen hebben dikke, vleesachtige stelen die kunnen worden geschredd of gesneden om verschillende vleestexturen na te bootsen. Ze absorberen smaken goed en hebben een bevredigende bite."
        }
      },
      {
        question: {
          en: "What is the main protein source in Quorn products?",
          es: "¿Cuál es la principal fuente de proteína en los productos Quorn?",
          de: "Was ist die Hauptproteinquelle in Quorn-Produkten?",
          nl: "Wat is de belangrijkste eiwitbron in Quorn producten?"
        },
        options: [
          { en: "Mycoprotein from fungi", es: "Micoproteína de hongos", de: "Mycoprotein aus Pilzen", nl: "Mycoproteine uit schimmels" },
          { en: "Soy protein", es: "Proteína de soja", de: "Soja-Protein", nl: "Soja eiwit" },
          { en: "Wheat protein", es: "Proteína de trigo", de: "Weizenprotein", nl: "Tarwe eiwit" },
          { en: "Pea protein", es: "Proteína de guisante", de: "Erbsenprotein", nl: "Erwten eiwit" }
        ],
        correct: 0,
        explanation: {
          en: "Quorn is made from mycoprotein, which is derived from a fungus called Fusarium venenatum. It's grown in fermentation tanks and has a naturally meat-like fibrous texture.",
          es: "Quorn está hecho de micoproteína, que se deriva de un hongo llamado Fusarium venenatum. Se cultiva en tanques de fermentación y tiene una textura fibrosa naturalmente similar a la carne.",
          de: "Quorn wird aus Mycoprotein hergestellt, das aus einem Pilz namens Fusarium venenatum gewonnen wird. Es wird in Fermentationstanks gezüchtet und hat eine natürlich fleischähnliche faserige Textur.",
          nl: "Quorn wordt gemaakt van mycoproteine, afgeleid van een schimmel genaamd Fusarium venenatum. Het wordt gekweekt in fermentatietanks en heeft een natuurlijk vleesachtige vezelige textuur."
        }
      },
      {
        question: {
          en: "What cooking technique is important when preparing seitan to achieve the right texture?",
          es: "¿Qué técnica de cocción es importante al preparar seitán para lograr la textura correcta?",
          de: "Welche Kochtechnik ist wichtig bei der Zubereitung von Seitan, um die richtige Textur zu erreichen?",
          nl: "Welke kooktechniek is belangrijk bij het bereiden van seitan om de juiste textuur te krijgen?"
        },
        options: [
          { en: "Kneading the dough thoroughly to develop gluten", es: "Amasar la masa completamente para desarrollar gluten", de: "Den Teig gründlich kneten, um Gluten zu entwickeln", nl: "Het deeg grondig kneden om gluten te ontwikkelen" },
          { en: "Adding lots of water", es: "Añadir mucha agua", de: "Viel Wasser hinzufügen", nl: "Veel water toevoegen" },
          { en: "Freezing before cooking", es: "Congelar antes de cocinar", de: "Vor dem Kochen einfrieren", nl: "Invriezen voor het koken" },
          { en: "Cooking at very high temperature", es: "Cocinar a temperatura muy alta", de: "Bei sehr hoher Temperatur kochen", nl: "Koken op zeer hoge temperatuur" }
        ],
        correct: 0,
        explanation: {
          en: "Kneading develops the gluten network in seitan, creating the chewy, meat-like texture. The more you knead, the firmer and more elastic the final product becomes.",
          es: "Amasar desarrolla la red de gluten en el seitán, creando la textura masticable similar a la carne. Cuanto más amases, más firme y elástico se vuelve el producto final.",
          de: "Kneten entwickelt das Glutennetzwerk in Seitan und schafft die zähe, fleischähnliche Textur. Je mehr Sie kneten, desto fester und elastischer wird das Endprodukt.",
          nl: "Kneden ontwikkelt het glutennetwerk in seitan, wat de taaie, vleesachtige textuur creëert. Hoe meer je kneedt, hoe steviger en elastischer het eindproduct wordt."
        }
      },
      {
        question: {
          en: "Which plant-based ingredient can replicate the umami flavor found in meat?",
          es: "¿Qué ingrediente vegetal puede replicar el sabor umami encontrado en la carne?",
          de: "Welche pflanzliche Zutat kann den in Fleisch gefundenen Umami-Geschmack replizieren?",
          nl: "Welk plantaardig ingrediënt kan de umami smaak uit vlees repliceren?"
        },
        options: [
          { en: "Mushroom powder or soy sauce", es: "Polvo de hongos o salsa de soja", de: "Pilzpulver oder Sojasoße", nl: "Paddenstoelen poeder of sojasaus" },
          { en: "Sugar", es: "Azúcar", de: "Zucker", nl: "Suiker" },
          { en: "Lemon juice", es: "Jugo de limón", de: "Zitronensaft", nl: "Citroensap" },
          { en: "Vanilla extract", es: "Extracto de vainilla", de: "Vanilleextrakt", nl: "Vanille extract" }
        ],
        correct: 0,
        explanation: {
          en: "Mushrooms are naturally high in glutamates, which provide umami flavor. Soy sauce, miso, and nutritional yeast also contribute savory, meat-like tastes to plant-based alternatives.",
          es: "Los hongos son naturalmente altos en glutamatos, que proporcionan sabor umami. La salsa de soja, miso y levadura nutricional también contribuyen sabores salados similares a la carne a las alternativas vegetales.",
          de: "Pilze sind natürlich reich an Glutamaten, die Umami-Geschmack bieten. Sojasoße, Miso und Nährhefe tragen ebenfalls herzhafte, fleischähnliche Geschmäcker zu pflanzlichen Alternativen bei.",
          nl: "Paddenstoelen zijn van nature rijk aan glutamaten, die umami smaak geven. Sojasaus, miso en voedingsgist dragen ook bij aan hartige, vleesachtige smaken in plantaardige alternatieven."
        }
      },
      {
        question: {
          en: "What is the purpose of adding beet juice to some plant-based meat products?",
          es: "¿Cuál es el propósito de añadir jugo de remolacha a algunos productos de carne vegetal?",
          de: "Was ist der Zweck des Hinzufügens von Rote-Bete-Saft zu manchen pflanzlichen Fleischprodukten?",
          nl: "Wat is het doel van het toevoegen van bietensap aan sommige plantaardige vleesproducten?"
        },
        options: [
          { en: "To provide natural red coloring", es: "Para proporcionar coloración roja natural", de: "Um natürliche rote Färbung zu bieten", nl: "Om natuurlijke rode kleuring te bieden" },
          { en: "To add sweetness", es: "Para añadir dulzura", de: "Um Süße hinzuzufügen", nl: "Om zoetheid toe te voegen" },
          { en: "To improve texture", es: "Para mejorar la textura", de: "Um die Textur zu verbessern", nl: "Om de textuur te verbeteren" },
          { en: "To add vitamins", es: "Para añadir vitaminas", de: "Um Vitamine hinzuzufügen", nl: "Om vitamines toe te voegen" }
        ],
        correct: 0,
        explanation: {
          en: "Beet juice provides natural red coloring to make plant-based meat look more like traditional meat, especially when raw. It's a natural alternative to artificial food coloring.",
          es: "El jugo de remolacha proporciona coloración roja natural para hacer que la carne vegetal se vea más como carne tradicional, especialmente cuando está cruda. Es una alternativa natural a la coloración artificial de alimentos.",
          de: "Rote-Bete-Saft bietet natürliche rote Färbung, um pflanzliches Fleisch mehr wie traditionelles Fleisch aussehen zu lassen, besonders wenn roh. Es ist eine natürliche Alternative zu künstlicher Lebensmittelfarbe.",
          nl: "Bietensap biedt natuurlijke rode kleuring om plantaardig vlees meer op traditioneel vlees te laten lijken, vooral wanneer rauw. Het is een natuurlijk alternatief voor kunstmatige voedselkleuring."
        }
      },
      {
        question: {
          en: "What texture modifier is commonly used in commercial plant-based sausages?",
          es: "¿Qué modificador de textura se usa comúnmente en salchichas vegetales comerciales?",
          de: "Welcher Texturmodifikator wird häufig in kommerziellen pflanzlichen Würsten verwendet?",
          nl: "Welke textuurmodificator wordt vaak gebruikt in commerciële plantaardige worsten?"
        },
        options: [
          { en: "Potato starch", es: "Almidón de papa", de: "Kartoffelstärke", nl: "Aardappelzetmeel" },
          { en: "Corn syrup", es: "Jarabe de maíz", de: "Maissirup", nl: "Maïssiroop" },
          { en: "Vegetable oil", es: "Aceite vegetal", de: "Pflanzenöl", nl: "Plantaardige olie" },
          { en: "Vinegar", es: "Vinagre", de: "Essig", nl: "Azijn" }
        ],
        correct: 0,
        explanation: {
          en: "Potato starch helps create the firm, bouncy texture characteristic of sausages. It also helps bind ingredients and retain moisture during cooking.",
          es: "El almidón de papa ayuda a crear la textura firme y elástica característica de las salchichas. También ayuda a unir ingredientes y retener humedad durante la cocción.",
          de: "Kartoffelstärke hilft, die feste, elastische Textur zu schaffen, die charakteristisch für Würste ist. Sie hilft auch, Zutaten zu binden und Feuchtigkeit während des Kochens zu bewahren.",
          nl: "Aardappelzetmeel helpt de stevige, veerkrachtige textuur te creëren die karakteristiek is voor worsten. Het helpt ook ingrediënten te binden en vocht te behouden tijdens het koken."
        }
      },
      {
        question: {
          en: "Which technique is used to create 'marbling' in plant-based steaks?",
          es: "¿Qué técnica se usa para crear 'marmoleo' en bistecs vegetales?",
          de: "Welche Technik wird verwendet, um 'Marmorierung' in pflanzlichen Steaks zu schaffen?",
          nl: "Welke techniek wordt gebruikt om 'marmering' in plantaardige steaks te creëren?"
        },
        options: [
          { en: "Layering different plant fats and proteins", es: "Superponer diferentes grasas y proteínas vegetales", de: "Schichtung verschiedener Pflanzenfette und Proteine", nl: "Het lagen van verschillende plantaardige vetten en eiwitten" },
          { en: "Adding food coloring", es: "Añadir colorante alimentario", de: "Lebensmittelfarbe hinzufügen", nl: "Voedselkleuring toevoegen" },
          { en: "Using only one ingredient", es: "Usar solo un ingrediente", de: "Nur eine Zutat verwenden", nl: "Slechts één ingrediënt gebruiken" },
          { en: "Freezing and thawing", es: "Congelar y descongelar", de: "Einfrieren und Auftauen", nl: "Invriezen en ontdooien" }
        ],
        correct: 0,
        explanation: {
          en: "Companies like Juicy Marbles create marbling by strategically layering different plant-based fats (like coconut oil) with proteins to mimic the appearance and mouthfeel of marbled meat.",
          es: "Empresas como Juicy Marbles crean marmoleo estratégicamente superponiendo diferentes grasas vegetales (como aceite de coco) con proteínas para imitar la apariencia y sensación en boca de la carne marmoleada.",
          de: "Unternehmen wie Juicy Marbles schaffen Marmorierung durch strategisches Schichten verschiedener pflanzlicher Fette (wie Kokosöl) mit Proteinen, um Aussehen und Mundgefühl von marmoriertem Fleisch nachzuahmen.",
          nl: "Bedrijven zoals Juicy Marbles creëren marmering door strategisch verschillende plantaardige vetten (zoals kokosolie) met eiwitten te lagen om het uiterlijk en mondgevoel van gemarmerd vlees na te bootsen."
        }
      },
      {
        question: {
          en: "What is the benefit of using aquafaba in plant-based meat alternatives?",
          es: "¿Cuál es el beneficio de usar aquafaba en alternativas de carne vegetal?",
          de: "Was ist der Nutzen der Verwendung von Aquafaba in pflanzlichen Fleischalternativen?",
          nl: "Wat is het voordeel van het gebruik van aquafaba in plantaardige vleesvervanger?"
        },
        options: [
          { en: "It acts as a natural binder and emulsifier", es: "Actúa como aglutinante natural y emulsificante", de: "Es wirkt als natürlicher Binder und Emulgator", nl: "Het werkt als een natuurlijk bindmiddel en emulgator" },
          { en: "It adds protein", es: "Añade proteína", de: "Es fügt Protein hinzu", nl: "Het voegt eiwit toe" },
          { en: "It provides flavor", es: "Proporciona sabor", de: "Es bietet Geschmack", nl: "Het biedt smaak" },
          { en: "It changes color", es: "Cambia el color", de: "Es ändert die Farbe", nl: "Het verandert de kleur" }
        ],
        correct: 0,
        explanation: {
          en: "Aquafaba (bean liquid) has similar properties to eggs, helping bind ingredients together and creating emulsions between fats and water-based components in plant-based meats.",
          es: "El aquafaba (líquido de frijoles) tiene propiedades similares a los huevos, ayudando a unir ingredientes y creando emulsiones entre grasas y componentes a base de agua en carnes vegetales.",
          de: "Aquafaba (Bohnenflüssigkeit) hat ähnliche Eigenschaften wie Eier und hilft, Zutaten zu binden und Emulsionen zwischen Fetten und wasserbasierten Komponenten in pflanzlichen Fleischwaren zu schaffen.",
          nl: "Aquafaba (bonenvloeistof) heeft vergelijkbare eigenschappen als eieren, helpt ingrediënten samen te binden en emulsies te creëren tussen vetten en op water gebaseerde componenten in plantaardige vleesproducten."
        }
      },
      {
        question: {
          en: "Which processing technique helps create the fibrous texture in plant-based chicken?",
          es: "¿Qué técnica de procesamiento ayuda a crear la textura fibrosa en pollo vegetal?",
          de: "Welche Verarbeitungstechnik hilft, die faserige Textur in pflanzlichem Hühnchen zu schaffen?",
          nl: "Welke verwerkingstechniek helpt de vezelige textuur in plantaardige kip te creëren?"
        },
        options: [
          { en: "High-moisture extrusion", es: "Extrusión de alta humedad", de: "Hochfeuchtigkeits-Extrusion", nl: "Hoge vochtigheids extrusie" },
          { en: "Simple mixing", es: "Mezcla simple", de: "Einfaches Mischen", nl: "Eenvoudig mengen" },
          { en: "Freezing", es: "Congelación", de: "Einfrieren", nl: "Invriezen" },
          { en: "Fermentation", es: "Fermentación", de: "Fermentation", nl: "Fermentatie" }
        ],
        correct: 0,
        explanation: {
          en: "High-moisture extrusion forces plant proteins through machines under heat and pressure, aligning them into fibrous structures that mimic muscle fibers in chicken meat.",
          es: "La extrusión de alta humedad fuerza las proteínas vegetales a través de máquinas bajo calor y presión, alineándolas en estructuras fibrosas que imitan las fibras musculares en la carne de pollo.",
          de: "Hochfeuchtigkeits-Extrusion presst Pflanzenproteine durch Maschinen unter Hitze und Druck und richtet sie in faserige Strukturen aus, die Muskelfasern in Hühnerfleisch nachahmen.",
          nl: "Hoge vochtigheids extrusie duwt plantaardige eiwitten door machines onder hitte en druk, ze uitlijnend in vezelige structuren die spiervezels in kippenvlees nabootsen."
        }
      },
      {
        question: {
          en: "What role does coconut oil play in many plant-based meat products?",
          es: "¿Qué papel juega el aceite de coco en muchos productos de carne vegetal?",
          de: "Welche Rolle spielt Kokosöl in vielen pflanzlichen Fleischprodukten?",
          nl: "Welke rol speelt kokosolie in vele plantaardige vleesproducten?"
        },
        options: [
          { en: "Provides saturated fat for mouthfeel and cooking properties", es: "Proporciona grasa saturada para sensación en boca y propiedades de cocción", de: "Bietet gesättigte Fette für Mundgefühl und Kocheigenschaften", nl: "Biedt verzadigde vetten voor mondgevoel en kookeigenschappen" },
          { en: "Adds sweetness", es: "Añade dulzura", de: "Fügt Süße hinzu", nl: "Voegt zoetheid toe" },
          { en: "Provides protein", es: "Proporciona proteína", de: "Bietet Protein", nl: "Biedt eiwit" },
          { en: "Acts as a preservative", es: "Actúa como conservante", de: "Wirkt als Konservierungsstoff", nl: "Werkt als conserveermiddel" }
        ],
        correct: 0,
        explanation: {
          en: "Coconut oil is solid at room temperature and melts when heated, similar to animal fat. This provides the right mouthfeel and helps plant-based meats cook and brown properly.",
          es: "El aceite de coco es sólido a temperatura ambiente y se derrite cuando se calienta, similar a la grasa animal. Esto proporciona la sensación en boca correcta y ayuda a que las carnes vegetales se cocinen y doren apropiadamente.",
          de: "Kokosöl ist bei Raumtemperatur fest und schmilzt beim Erhitzen, ähnlich wie tierisches Fett. Dies bietet das richtige Mundgefühl und hilft pflanzlichen Fleischprodukten, richtig zu kochen und zu bräunen.",
          nl: "Kokosolie is vast bij kamertemperatuur en smelt bij verhitting, vergelijkbaar met dierlijk vet. Dit biedt het juiste mondgevoel en helpt plantaardige vleesproducten goed te koken en te bruinen."
        }
      },
      {
        question: {
          en: "Which plant-based ingredient is commonly used to replicate the chewiness of meat?",
          es: "¿Qué ingrediente vegetal se usa comúnmente para replicar la masticabilidad de la carne?",
          de: "Welche pflanzliche Zutat wird häufig verwendet, um die Zähigkeit von Fleisch zu replizieren?",
          nl: "Welk plantaardig ingrediënt wordt vaak gebruikt om de taaiheid van vlees te repliceren?"
        },
        options: [
          { en: "Konjac root (glucomannan)", es: "Raíz de konjac (glucomanano)", de: "Konjak-Wurzel (Glucomannan)", nl: "Konjac wortel (glucomannan)" },
          { en: "Corn starch", es: "Almidón de maíz", de: "Maisstärke", nl: "Maïszetmeel" },
          { en: "Rice flour", es: "Harina de arroz", de: "Reismehl", nl: "Rijstmeel" },
          { en: "Oat bran", es: "Salvado de avena", de: "Haferkleie", nl: "Haver zemelen" }
        ],
        correct: 0,
        explanation: {
          en: "Konjac root contains glucomannan, a soluble fiber that creates a gel-like, chewy texture when hydrated. It's commonly used in Asian plant-based meat alternatives.",
          es: "La raíz de konjac contiene glucomanano, una fibra soluble que crea una textura gelatinosa y masticable cuando se hidrata. Se usa comúnmente en alternativas de carne vegetal asiáticas.",
          de: "Konjak-Wurzel enthält Glucomannan, eine lösliche Faser, die eine gelartige, zähe Textur schafft, wenn sie hydratisiert wird. Sie wird häufig in asiatischen pflanzlichen Fleischalternativen verwendet.",
          nl: "Konjac wortel bevat glucomannan, een oplosbare vezel die een gelachtige, taaie textuur creëert wanneer gehydrateerd. Het wordt vaak gebruikt in Aziatische plantaardige vleesvervanger."
        }
      },
      {
        question: {
          en: "What is 'cellular agriculture' in the context of meat alternatives?",
          es: "¿Qué es la 'agricultura celular' en el contexto de alternativas de carne?",
          de: "Was ist 'zelluläre Landwirtschaft' im Kontext von Fleischalternativen?",
          nl: "Wat is 'cellulaire landbouw' in de context van vleesvervanger?"
        },
        options: [
          { en: "Growing animal cells in labs without raising animals", es: "Cultivar células animales en laboratorios sin criar animales", de: "Tierzellen in Laboren züchten ohne Tiere zu halten", nl: "Dierlijke cellen kweken in labs zonder dieren te houden" },
          { en: "Growing plants in cells", es: "Cultivar plantas en células", de: "Pflanzen in Zellen züchten", nl: "Planten kweken in cellen" },
          { en: "Traditional farming methods", es: "Métodos agrícolas tradicionales", de: "Traditionelle Anbaumethoden", nl: "Traditionele landbouwmethoden" },
          { en: "Genetic modification of crops", es: "Modificación genética de cultivos", de: "Gentechnische Veränderung von Pflanzen", nl: "Genetische modificatie van gewassen" }
        ],
        correct: 0,
        explanation: {
          en: "Cellular agriculture involves cultivating animal cells in bioreactors to produce real meat without raising and slaughtering animals. This creates lab-grown or cultured meat.",
          es: "La agricultura celular implica cultivar células animales en bioreactores para producir carne real sin criar y sacrificar animales. Esto crea carne cultivada en laboratorio o carne de cultivo.",
          de: "Zelluläre Landwirtschaft beinhaltet die Kultivierung von Tierzellen in Bioreaktoren, um echtes Fleisch zu produzieren, ohne Tiere zu halten und zu schlachten. Dies schafft im Labor gezüchtetes oder kultiviertes Fleisch.",
          nl: "Cellulaire landbouw houdt het kweken van dierlijke cellen in bioreactors in om echt vlees te produceren zonder dieren te houden en te slachten. Dit creëert in lab gekweekt of gecultiveerd vlees."
        }
      },
      {
        question: {
          en: "Which processing technique is used to remove beany flavors from soy protein?",
          es: "¿Qué técnica de procesamiento se usa para eliminar sabores de frijol de la proteína de soja?",
          de: "Welche Verarbeitungstechnik wird verwendet, um bohnige Geschmäcker aus Sojaprotein zu entfernen?",
          nl: "Welke verwerkingstechniek wordt gebruikt om bonerige smaken uit soja-eiwit te verwijderen?"
        },
        options: [
          { en: "Alcohol washing", es: "Lavado con alcohol", de: "Alkoholwaschung", nl: "Alcohol wassen" },
          { en: "Salt curing", es: "Curado con sal", de: "Salzhärtung", nl: "Zout uitharden" },
          { en: "Sugar coating", es: "Recubrimiento de azúcar", de: "Zuckerbeschichtung", nl: "Suiker coating" },
          { en: "Oil pressing", es: "Prensado de aceite", de: "Ölpressen", nl: "Olie persen" }
        ],
        correct: 0,
        explanation: {
          en: "Alcohol washing removes the compounds responsible for beany, off-flavors in soy protein, creating a more neutral-tasting base for meat alternatives.",
          es: "El lavado con alcohol elimina los compuestos responsables de sabores desagradables y de frijol en la proteína de soja, creando una base de sabor más neutral para alternativas de carne.",
          de: "Alkoholwaschung entfernt die für bohnige, unangenehme Geschmäcker in Sojaprotein verantwortlichen Verbindungen und schafft eine geschmacksneutralere Basis für Fleischalternativen.",
          nl: "Alcohol wassen verwijdert de verbindingen verantwoordelijk voor bonerige, onaangename smaken in soja-eiwit, wat een neutraler smakende basis creëert voor vleesvervanger."
        }
      },
      {
        question: {
          en: "What is the purpose of using transglutaminase in some plant-based meat products?",
          es: "¿Cuál es el propósito de usar transglutaminasa en algunos productos de carne vegetal?",
          de: "Was ist der Zweck der Verwendung von Transglutaminase in manchen pflanzlichen Fleischprodukten?",
          nl: "Wat is het doel van het gebruik van transglutaminase in sommige plantaardige vleesproducten?"
        },
        options: [
          { en: "To bind proteins together and improve texture", es: "Para unir proteínas y mejorar la textura", de: "Um Proteine zu verbinden und die Textur zu verbessern", nl: "Om eiwitten samen te binden en textuur te verbeteren" },
          { en: "To add color", es: "Para añadir color", de: "Um Farbe hinzuzufügen", nl: "Om kleur toe te voegen" },
          { en: "To add flavor", es: "Para añadir sabor", de: "Um Geschmack hinzuzufügen", nl: "Om smaak toe te voegen" },
          { en: "To preserve the product", es: "Para preservar el producto", de: "Um das Produkt zu konservieren", nl: "Om het product te bewaren" }
        ],
        correct: 0,
        explanation: {
          en: "Transglutaminase, also called 'meat glue,' is an enzyme that creates bonds between proteins, helping plant-based meat products hold together and achieve a more meat-like texture.",
          es: "La transglutaminasa, también llamada 'pegamento de carne,' es una enzima que crea enlaces entre proteínas, ayudando a que los productos de carne vegetal se mantengan unidos y logren una textura más similar a la carne.",
          de: "Transglutaminase, auch 'Fleischkleber' genannt, ist ein Enzym, das Bindungen zwischen Proteinen schafft und pflanzlichen Fleischprodukten hilft, zusammenzuhalten und eine fleischähnlichere Textur zu erreichen.",
          nl: "Transglutaminase, ook 'vleeslijm' genoemd, is een enzym dat bindingen creëert tussen eiwitten, helpend plantaardige vleesproducten samen te houden en een meer vleesachtige textuur te bereiken."
        }
      },
      {
        question: {
          en: "What protein is the main ingredient in Beyond Meat products?",
          es: "¿Qué proteína es el ingrediente principal en los productos Beyond Meat?",
          de: "Welches Protein ist die Hauptzutat in Beyond Meat Produkten?",
          nl: "Welk eiwit is het hoofdingrediënt in Beyond Meat producten?"
        },
        options: [
          { en: "Pea protein", es: "Proteína de guisante", de: "Erbsenprotein", nl: "Erwten eiwit" },
          { en: "Soy protein", es: "Proteína de soja", de: "Soja-Protein", nl: "Soja eiwit" },
          { en: "Wheat protein", es: "Proteína de trigo", de: "Weizenprotein", nl: "Tarwe eiwit" },
          { en: "Rice protein", es: "Proteína de arroz", de: "Reisprotein", nl: "Rijst eiwit" }
        ],
        correct: 0,
        explanation: {
          en: "Beyond Meat primarily uses pea protein isolate as its protein base, along with other plant ingredients to create meat-like texture and flavor.",
          es: "Beyond Meat usa principalmente aislado de proteína de guisante como su base proteica, junto con otros ingredientes vegetales para crear textura y sabor similar a la carne.",
          de: "Beyond Meat verwendet hauptsächlich Erbsenprotein-Isolat als Proteinbasis, zusammen mit anderen pflanzlichen Zutaten, um fleischähnliche Textur und Geschmack zu schaffen.",
          nl: "Beyond Meat gebruikt voornamelijk erwtenproteïne-isolaat als eiwitbasis, samen met andere plantaardige ingrediënten om vleesachtige textuur en smaak te creëren."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  }
  return level8;
})();