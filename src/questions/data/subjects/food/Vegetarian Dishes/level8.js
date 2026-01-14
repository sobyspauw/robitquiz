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
          en: "What is precision fermentation in the context of plant-based foods?",
          es: "¿Qué es la fermentación de precisión en el contexto de alimentos vegetales?",
          de: "Was ist Präzisionsfermentation im Kontext pflanzlicher Lebensmittel?",
          nl: "Wat is precisie fermentatie in de context van plantaardig voedsel?"
        },
        options: [
          { en: "Using microorganisms to produce specific proteins like dairy proteins without animals", es: "Usar microorganismos para producir proteínas específicas como proteínas lácteas sin animales", de: "Verwendung von Mikroorganismen zur Herstellung spezifischer Proteine wie Milchproteine ohne Tiere", nl: "Gebruik van micro-organismen om specifieke eiwitten zoals zuiveleiwitten te produceren zonder dieren" },
          { en: "Fermenting vegetables precisely", es: "Fermentar verduras con precisión", de: "Gemüse präzise fermentieren", nl: "Groenten precies fermenteren" },
          { en: "Measuring fermentation time exactly", es: "Medir el tiempo de fermentación exactamente", de: "Fermentationszeit genau messen", nl: "Fermentatie tijd exact meten" },
          { en: "Traditional pickling methods", es: "Métodos tradicionales de encurtido", de: "Traditionelle Einlegemethoden", nl: "Traditionele inmaakmethoden" }
        ],
        correct: 0,
        explanation: {
          en: "Precision fermentation uses genetically programmed microorganisms to produce specific proteins (like casein, whey) identical to animal proteins, enabling authentic dairy-free cheese and other products.",
          es: "La fermentación de precisión usa microorganismos genéticamente programados para producir proteínas específicas (como caseína, suero) idénticas a proteínas animales, permitiendo queso auténtico sin lácteos y otros productos.",
          de: "Präzisionsfermentation verwendet genetisch programmierte Mikroorganismen zur Herstellung spezifischer Proteine (wie Kasein, Molke), die mit tierischen Proteinen identisch sind, und ermöglicht authentischen milchfreien Käse und andere Produkte.",
          nl: "Precisie fermentatie gebruikt genetisch geprogrammeerde micro-organismen om specifieke eiwitten (zoals caseïne, wei) te produceren die identiek zijn aan dierlijke eiwitten, waardoor authentieke zuivelvrije kaas en andere producten mogelijk zijn."
        }
      },
      {
        question: {
          en: "Which technology is used by companies like Redefine Meat to create whole-cut steaks?",
          es: "¿Qué tecnología usan empresas como Redefine Meat para crear bistecs enteros?",
          de: "Welche Technologie verwenden Unternehmen wie Redefine Meat, um ganze Steaks zu schaffen?",
          nl: "Welke technologie wordt gebruikt door bedrijven zoals Redefine Meat om hele steaks te creëren?"
        },
        options: [
          { en: "3D printing with multiple plant-based 'inks'", es: "Impresión 3D con múltiples 'tintas' vegetales", de: "3D-Druck mit mehreren pflanzlichen 'Tinten'", nl: "3D printen met meerdere plantaardige 'inkten'" },
          { en: "Traditional molding", es: "Moldeado tradicional", de: "Traditionelles Formen", nl: "Traditioneel vormen" },
          { en: "Hand-shaping", es: "Modelado a mano", de: "Handformung", nl: "Handmatig vormen" },
          { en: "Freezing techniques", es: "Técnicas de congelación", de: "Gefriertechniken", nl: "Vriestechnieken" }
        ],
        correct: 0,
        explanation: {
          en: "Redefine Meat uses proprietary 3D printing technology that layers different plant-based materials (proteins, fats, water) to create complex structures mimicking muscle fiber, fat marbling, and connective tissue.",
          es: "Redefine Meat usa tecnología de impresión 3D patentada que superpone diferentes materiales vegetales (proteínas, grasas, agua) para crear estructuras complejas que imitan fibra muscular, marmoleo de grasa y tejido conectivo.",
          de: "Redefine Meat verwendet proprietäre 3D-Drucktechnologie, die verschiedene pflanzliche Materialien (Proteine, Fette, Wasser) schichtet, um komplexe Strukturen zu schaffen, die Muskelfasern, Fettmarmorierung und Bindegewebe nachahmen.",
          nl: "Redefine Meat gebruikt gepatenteerde 3D-printtechnologie die verschillende plantaardige materialen (eiwitten, vetten, water) laagt om complexe structuren te creëren die spiervezels, vetmarmering en bindweefsel nabootsen."
        }
      },
      {
        question: {
          en: "What is the main challenge in replicating the texture of whole-cut meats compared to ground meat alternatives?",
          es: "¿Cuál es el desafío principal al replicar la textura de carnes enteras en comparación con alternativas de carne molida?",
          de: "Was ist die Hauptherausforderung beim Replizieren der Textur von ganzen Fleischstücken im Vergleich zu Hackfleisch-Alternativen?",
          nl: "Wat is de grootste uitdaging bij het repliceren van de textuur van hele stukken vlees vergeleken met gehakt alternatieven?"
        },
        options: [
          { en: "Creating aligned fibrous structures that mimic muscle grain and directional bite", es: "Crear estructuras fibrosas alineadas que imiten el grano muscular y mordida direccional", de: "Ausgerichtete faserige Strukturen schaffen, die Muskelmaserung und gerichteten Biss nachahmen", nl: "Uitgelijnde vezelige structuren creëren die spiernerf en richtingsgebonden bite nabootsen" },
          { en: "Adding flavor", es: "Añadir sabor", de: "Geschmack hinzufügen", nl: "Smaak toevoegen" },
          { en: "Changing color", es: "Cambiar color", de: "Farbe ändern", nl: "Kleur veranderen" },
          { en: "Reducing cost", es: "Reducir costo", de: "Kosten senken", nl: "Kosten verlagen" }
        ],
        correct: 0,
        explanation: {
          en: "Ground meat can hide texture imperfections, but whole-cut steaks require recreating the aligned muscle fiber structure, fat marbling patterns, and anisotropic (directional) chewing experience of real meat.",
          es: "La carne molida puede ocultar imperfecciones de textura, pero los bistecs enteros requieren recrear la estructura de fibra muscular alineada, patrones de marmoleo de grasa y experiencia de masticación anisotrópica (direccional) de carne real.",
          de: "Hackfleisch kann Texturunvollkommenheiten verbergen, aber ganze Steaks erfordern die Nachbildung der ausgerichteten Muskelfaserstruktur, Fettmarmorierungsmuster und anisotropen (gerichteten) Kauerlebnis von echtem Fleisch.",
          nl: "Gehakt kan textuuronvolkomenheden verbergen, maar hele steaks vereisen het recreëren van de uitgelijnde spiervezelstructuur, vetmarmeringspatronen en anisotrope (richtingsgebonden) kauwervaring van echt vlees."
        }
      },
      {
        question: {
          en: "Which plant-based ingredient is gaining popularity for its high protein and low environmental impact?",
          es: "¿Qué ingrediente vegetal está ganando popularidad por su alto contenido de proteína y bajo impacto ambiental?",
          de: "Welche pflanzliche Zutat gewinnt an Popularität aufgrund ihres hohen Proteingehalts und geringen Umweltauswirkungen?",
          nl: "Welk plantaardig ingrediënt wint aan populariteit vanwege het hoge eiwitgehalte en lage milieueffect?"
        },
        options: [
          { en: "Duckweed (water lentils)", es: "Lenteja de agua", de: "Wasserlinsen", nl: "Eendenkroos (waterlinzen)" },
          { en: "Corn", es: "Maíz", de: "Mais", nl: "Maïs" },
          { en: "Wheat", es: "Trigo", de: "Weizen", nl: "Tarwe" },
          { en: "Potatoes", es: "Papas", de: "Kartoffeln", nl: "Aardappelen" }
        ],
        correct: 0,
        explanation: {
          en: "Duckweed contains 40-45% protein by dry weight, grows extremely fast with minimal water and land, and is being explored as a sustainable protein source for meat alternatives by companies like Plantible Foods.",
          es: "La lenteja de agua contiene 40-45% de proteína por peso seco, crece extremadamente rápido con mínima agua y tierra, y está siendo explorada como fuente de proteína sostenible para alternativas de carne por empresas como Plantible Foods.",
          de: "Wasserlinsen enthalten 40-45% Protein im Trockengewicht, wachsen extrem schnell mit minimalem Wasser- und Landbedarf und werden von Unternehmen wie Plantible Foods als nachhaltige Proteinquelle für Fleischalternativen erforscht.",
          nl: "Eendenkroos bevat 40-45% eiwit per drooggewicht, groeit extreem snel met minimaal water en land, en wordt onderzocht als duurzame eiwitbron voor vleesvervanger door bedrijven zoals Plantible Foods."
        }
      },
      {
        question: {
          en: "What is the function of adding smoke flavoring to plant-based meats?",
          es: "¿Cuál es la función de añadir sabor ahumado a carnes vegetales?",
          de: "Was ist die Funktion des Hinzufügens von Raucharoma zu pflanzlichen Fleischprodukten?",
          nl: "Wat is de functie van het toevoegen van rooksmaak aan plantaardig vlees?"
        },
        options: [
          { en: "To replicate the flavor compounds created during grilling and provide char notes", es: "Para replicar los compuestos de sabor creados durante el asado y proporcionar notas carbonizadas", de: "Um die während des Grillens entstehenden Geschmacksverbindungen zu replizieren und Röstaromen zu bieten", nl: "Om de smaakverbindingen die tijdens het grillen ontstaan te repliceren en geroosterde noten te bieden" },
          { en: "To preserve the product", es: "Para preservar el producto", de: "Um das Produkt zu konservieren", nl: "Om het product te bewaren" },
          { en: "To add protein", es: "Para añadir proteína", de: "Um Protein hinzuzufügen", nl: "Om eiwit toe te voegen" },
          { en: "To change texture", es: "Para cambiar textura", de: "Um Textur zu ändern", nl: "Om textuur te veranderen" }
        ],
        correct: 0,
        explanation: {
          en: "Smoke flavoring contains phenolic compounds and other aromatic molecules that mimic the complex flavors created when meat is grilled or smoked, enhancing the sensory experience of plant-based products.",
          es: "El sabor ahumado contiene compuestos fenólicos y otras moléculas aromáticas que imitan los sabores complejos creados cuando la carne se asa o ahuma, mejorando la experiencia sensorial de productos vegetales.",
          de: "Raucharoma enthält phenolische Verbindungen und andere aromatische Moleküle, die die komplexen Aromen nachahmen, die beim Grillen oder Räuchern von Fleisch entstehen, und verbessert das sensorische Erlebnis pflanzlicher Produkte.",
          nl: "Rooksmaak bevat fenolische verbindingen en andere aromatische moleculen die de complexe smaken nabootsen die ontstaan wanneer vlees wordt gegrild of gerookt, wat de zintuiglijke ervaring van plantaardige producten verbetert."
        }
      },
      {
        question: {
          en: "What is the purpose of using sunflower oil in many plant-based burgers?",
          es: "¿Cuál es el propósito de usar aceite de girasol en muchas hamburguesas vegetales?",
          de: "Was ist der Zweck der Verwendung von Sonnenblumenöl in vielen pflanzlichen Burgern?",
          nl: "Wat is het doel van het gebruik van zonnebloemolie in vele plantaardige burgers?"
        },
        options: [
          { en: "To provide fat for juiciness and to help with browning during cooking", es: "Para proporcionar grasa para jugosidad y ayudar con el dorado durante la cocción", de: "Um Fett für Saftigkeit zu bieten und beim Bräunen während des Kochens zu helfen", nl: "Om vet te bieden voor sappigheid en te helpen met bruinen tijdens het koken" },
          { en: "To add flavor", es: "Para añadir sabor", de: "Um Geschmack hinzuzufügen", nl: "Om smaak toe te voegen" },
          { en: "To increase protein", es: "Para aumentar proteína", de: "Um Protein zu erhöhen", nl: "Om eiwit te verhogen" },
          { en: "To preserve color", es: "Para preservar color", de: "Um Farbe zu bewahren", nl: "Om kleur te behouden" }
        ],
        correct: 0,
        explanation: {
          en: "Sunflower oil provides the fat content that creates juiciness and helps achieve the Maillard reaction for browning, mimicking how fat in ground beef behaves during cooking.",
          es: "El aceite de girasol proporciona el contenido de grasa que crea jugosidad y ayuda a lograr la reacción de Maillard para dorado, imitando cómo se comporta la grasa en carne molida de res durante la cocción.",
          de: "Sonnenblumenöl bietet den Fettgehalt, der Saftigkeit schafft und hilft, die Maillard-Reaktion für Bräunung zu erreichen, und ahmt nach, wie Fett in Rinderhackfleisch beim Kochen verhält.",
          nl: "Zonnebloemolie biedt het vetgehalte dat sappigheid creëert en helpt de Maillard-reactie voor bruining te bereiken, wat nabootst hoe vet in rundergehakt zich gedraagt tijdens het koken."
        }
      },
      {
        question: {
          en: "Which emerging protein source is derived from single-cell organisms grown in bioreactors?",
          es: "¿Qué fuente emergente de proteína se deriva de organismos unicelulares cultivados en biorreactores?",
          de: "Welche aufkommende Proteinquelle wird aus Einzellern gewonnen, die in Bioreaktoren gezüchtet werden?",
          nl: "Welke opkomende eiwitbron wordt afgeleid van eencellige organismen gekweekt in bioreactors?"
        },
        options: [
          { en: "Microbial protein (from bacteria, algae, or fungi)", es: "Proteína microbiana (de bacterias, algas o hongos)", de: "Mikrobielle Proteine (aus Bakterien, Algen oder Pilzen)", nl: "Microbiële eiwitten (van bacteriën, algen of schimmels)" },
          { en: "Beef protein", es: "Proteína de res", de: "Rindfleischprotein", nl: "Rundvlees eiwit" },
          { en: "Chicken protein", es: "Proteína de pollo", de: "Hühnerprotein", nl: "Kippeneiwit" },
          { en: "Pork protein", es: "Proteína de cerdo", de: "Schweineprotein", nl: "Varkensvlees eiwit" }
        ],
        correct: 0,
        explanation: {
          en: "Companies like Solar Foods and Nature's Fynd grow bacteria, algae, or fungi in bioreactors to produce protein-rich biomass for meat alternatives, using minimal land and water.",
          es: "Empresas como Solar Foods y Nature's Fynd cultivan bacterias, algas o hongos en biorreactores para producir biomasa rica en proteínas para alternativas de carne, usando mínima tierra y agua.",
          de: "Unternehmen wie Solar Foods und Nature's Fynd züchten Bakterien, Algen oder Pilze in Bioreaktoren, um proteinreiche Biomasse für Fleischalternativen zu produzieren, mit minimalem Land- und Wasserverbrauch.",
          nl: "Bedrijven zoals Solar Foods en Nature's Fynd kweken bacteriën, algen of schimmels in bioreactors om eiwitrijke biomassa te produceren voor vleesvervanger, met minimaal land en water gebruik."
        }
      },
      {
        question: {
          en: "What is the role of potato protein in some plant-based meat formulations?",
          es: "¿Cuál es el papel de la proteína de papa en algunas formulaciones de carne vegetal?",
          de: "Was ist die Rolle von Kartoffelprotein in manchen pflanzlichen Fleischformulierungen?",
          nl: "Wat is de rol van aardappel eiwit in sommige plantaardige vleesformuleringen?"
        },
        options: [
          { en: "To provide allergen-friendly protein with good binding properties", es: "Para proporcionar proteína hipoalergénica con buenas propiedades aglutinantes", de: "Um allergenfreundliches Protein mit guten Bindungseigenschaften zu bieten", nl: "Om allergeen-vriendelijk eiwit te bieden met goede bindingseigenschappen" },
          { en: "To add sweetness", es: "Para añadir dulzura", de: "Um Süße hinzuzufügen", nl: "Om zoetheid toe te voegen" },
          { en: "To add color", es: "Para añadir color", de: "Um Farbe hinzuzufügen", nl: "Om kleur toe te voegen" },
          { en: "To reduce cost only", es: "Solo para reducir costo", de: "Nur um Kosten zu senken", nl: "Alleen om kosten te verlagen" }
        ],
        correct: 0,
        explanation: {
          en: "Potato protein is hypoallergenic (safe for those with soy, gluten allergies), has excellent emulsification properties, and helps bind ingredients while providing complete amino acid profile.",
          es: "La proteína de papa es hipoalergénica (segura para aquellos con alergias a soja, gluten), tiene excelentes propiedades de emulsificación y ayuda a unir ingredientes mientras proporciona perfil completo de aminoácidos.",
          de: "Kartoffelprotein ist hypoallergen (sicher für Menschen mit Soja-, Glutenallergien), hat ausgezeichnete Emulgiereigenschaften und hilft, Zutaten zu binden, während es ein vollständiges Aminosäureprofil bietet.",
          nl: "Aardappel eiwit is hypoallergeen (veilig voor mensen met soja-, glutenallergieën), heeft uitstekende emulsie eigenschappen en helpt ingrediënten te binden terwijl het een compleet aminozuurprofiel biedt."
        }
      },
      {
        question: {
          en: "Which technique is used to create the 'snap' texture in plant-based hot dogs?",
          es: "¿Qué técnica se usa para crear la textura 'crujiente' en hot dogs vegetales?",
          de: "Welche Technik wird verwendet, um die 'Knack'-Textur in pflanzlichen Hot Dogs zu schaffen?",
          nl: "Welke techniek wordt gebruikt om de 'knapperige' textuur in plantaardige hotdogs te creëren?"
        },
        options: [
          { en: "Using alginate or carrageenan casings that create a firm outer layer", es: "Usar tripas de alginato o carragenina que crean una capa exterior firme", de: "Verwendung von Alginat- oder Carrageenan-Hüllen, die eine feste Außenschicht schaffen", nl: "Gebruik van alginaat of carrageen omhulsels die een stevige buitenlaag creëren" },
          { en: "Freezing the product", es: "Congelar el producto", de: "Das Produkt einfrieren", nl: "Het product invriezen" },
          { en: "Adding sugar coating", es: "Añadir recubrimiento de azúcar", de: "Zuckerbeschichtung hinzufügen", nl: "Suiker coating toevoegen" },
          { en: "Using only one protein", es: "Usar solo una proteína", de: "Nur ein Protein verwenden", nl: "Slechts één eiwit gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Alginate (from seaweed) and carrageenan form gel-like casings that provide structural integrity and the characteristic 'snap' when bitten, similar to natural or collagen casings in meat hot dogs.",
          es: "El alginato (de algas marinas) y carragenina forman tripas gelatinosas que proporcionan integridad estructural y el 'crujido' característico al morder, similar a tripas naturales o de colágeno en hot dogs de carne.",
          de: "Alginat (aus Seetang) und Carrageenan bilden gelartige Hüllen, die strukturelle Integrität und das charakteristische 'Knacken' beim Beißen bieten, ähnlich wie natürliche oder Kollagenhüllen in Fleisch-Hot Dogs.",
          nl: "Alginaat (van zeewier) en carrageen vormen gelachtige omhulsels die structurele integriteit bieden en het karakteristieke 'knapperen' bij bijten, vergelijkbaar met natuurlijke of collageen omhulsels in vlees hotdogs."
        }
      },
      {
        question: {
          en: "What is the purpose of using rice protein in plant-based meat blends?",
          es: "¿Cuál es el propósito de usar proteína de arroz en mezclas de carne vegetal?",
          de: "Was ist der Zweck der Verwendung von Reisprotein in pflanzlichen Fleischmischungen?",
          nl: "Wat is het doel van het gebruik van rijst eiwit in plantaardige vleesmengsels?"
        },
        options: [
          { en: "To complement other proteins and create a complete amino acid profile", es: "Para complementar otras proteínas y crear un perfil completo de aminoácidos", de: "Um andere Proteine zu ergänzen und ein vollständiges Aminosäureprofil zu schaffen", nl: "Om andere eiwitten aan te vullen en een compleet aminozuurprofiel te creëren" },
          { en: "To add color", es: "Para añadir color", de: "Um Farbe hinzuzufügen", nl: "Om kleur toe te voegen" },
          { en: "To add sugar", es: "Para añadir azúcar", de: "Um Zucker hinzuzufügen", nl: "Om suiker toe te voegen" },
          { en: "To preserve the product", es: "Para preservar el producto", de: "Um das Produkt zu konservieren", nl: "Om het product te bewaren" }
        ],
        correct: 0,
        explanation: {
          en: "Rice protein is often blended with pea protein because rice is high in methionine (amino acid) while peas are high in lysine, together creating a nutritionally complete protein similar to animal protein.",
          es: "La proteína de arroz a menudo se mezcla con proteína de guisante porque el arroz es alto en metionina (aminoácido) mientras que los guisantes son altos en lisina, juntos creando una proteína nutricionalmente completa similar a la proteína animal.",
          de: "Reisprotein wird oft mit Erbsenprotein gemischt, da Reis reich an Methionin (Aminosäure) ist, während Erbsen reich an Lysin sind, zusammen ein ernährungsphysiologisch vollständiges Protein schaffen, das tierischem Protein ähnlich ist.",
          nl: "Rijst eiwit wordt vaak gemengd met erwten eiwit omdat rijst rijk is aan methionine (aminozuur) terwijl erwten rijk zijn aan lysine, samen creërend een voedingskundig compleet eiwit vergelijkbaar met dierlijk eiwit."
        }
      },
      {
        question: {
          en: "Which plant-based ingredient helps replicate the iron content and metallic taste of meat?",
          es: "¿Qué ingrediente vegetal ayuda a replicar el contenido de hierro y sabor metálico de la carne?",
          de: "Welche pflanzliche Zutat hilft, den Eisengehalt und metallischen Geschmack von Fleisch zu replizieren?",
          nl: "Welk plantaardig ingrediënt helpt het ijzergehalte en metaalachtige smaak van vlees te repliceren?"
        },
        options: [
          { en: "Soy leghemoglobin or spirulina", es: "Leghemoglobina de soja o espirulina", de: "Soja-Leghämoglobin oder Spirulina", nl: "Soja leghemoglobine of spirulina" },
          { en: "Sugar", es: "Azúcar", de: "Zucker", nl: "Suiker" },
          { en: "Lemon juice", es: "Jugo de limón", de: "Zitronensaft", nl: "Citroensap" },
          { en: "Vanilla", es: "Vainilla", de: "Vanille", nl: "Vanille" }
        ],
        correct: 0,
        explanation: {
          en: "Soy leghemoglobin (used by Impossible Foods) contains heme iron that provides the metallic, blood-like taste of meat. Spirulina also contains iron and adds similar mineral notes.",
          es: "La leghemoglobina de soja (usada por Impossible Foods) contiene hierro hemo que proporciona el sabor metálico similar a sangre de la carne. La espirulina también contiene hierro y añade notas minerales similares.",
          de: "Soja-Leghämoglobin (verwendet von Impossible Foods) enthält Häm-Eisen, das den metallischen, blutähnlichen Geschmack von Fleisch bietet. Spirulina enthält auch Eisen und fügt ähnliche Mineralnoten hinzu.",
          nl: "Soja leghemoglobine (gebruikt door Impossible Foods) bevat heem ijzer dat de metaalachtige, bloedachtige smaak van vlees biedt. Spirulina bevat ook ijzer en voegt vergelijkbare minerale noten toe."
        }
      },
      {
        question: {
          en: "What is the environmental advantage of plant-based meat alternatives compared to conventional meat?",
          es: "¿Cuál es la ventaja ambiental de alternativas de carne vegetal en comparación con carne convencional?",
          de: "Was ist der Umweltvorteil pflanzlicher Fleischalternativen im Vergleich zu konventionellem Fleisch?",
          nl: "Wat is het milieu voordeel van plantaardige vleesvervanger vergeleken met conventioneel vlees?"
        },
        options: [
          { en: "Significantly lower greenhouse gas emissions, land use, and water consumption", es: "Emisiones de gases de efecto invernadero, uso de tierra y consumo de agua significativamente menores", de: "Deutlich geringere Treibhausgasemissionen, Landnutzung und Wasserverbrauch", nl: "Aanzienlijk lagere broeikasgasemissies, landgebruik en waterverbruik" },
          { en: "No environmental benefits", es: "Sin beneficios ambientales", de: "Keine Umweltvorteile", nl: "Geen milieu voordelen" },
          { en: "Only cheaper to produce", es: "Solo más barato de producir", de: "Nur billiger zu produzieren", nl: "Alleen goedkoper te produceren" },
          { en: "Same impact as conventional meat", es: "Mismo impacto que carne convencional", de: "Gleiche Auswirkung wie konventionelles Fleisch", nl: "Zelfde impact als conventioneel vlees" }
        ],
        correct: 0,
        explanation: {
          en: "Studies show plant-based meats typically require 47-99% less land, emit 30-90% less greenhouse gases, and use 72-99% less water than conventional beef production, depending on the product.",
          es: "Estudios muestran que las carnes vegetales típicamente requieren 47-99% menos tierra, emiten 30-90% menos gases de efecto invernadero y usan 72-99% menos agua que la producción de carne de res convencional, dependiendo del producto.",
          de: "Studien zeigen, dass pflanzliche Fleischprodukte typischerweise 47-99% weniger Land benötigen, 30-90% weniger Treibhausgase ausstoßen und 72-99% weniger Wasser verbrauchen als konventionelle Rindfleischproduktion, je nach Produkt.",
          nl: "Studies tonen aan dat plantaardig vlees doorgaans 47-99% minder land vereist, 30-90% minder broeikasgassen uitstoot en 72-99% minder water gebruikt dan conventionele rundvleesproductie, afhankelijk van het product."
        }
      },
      {
        question: {
          en: "Which sensory technique is used to ensure plant-based meats mimic real meat?",
          es: "¿Qué técnica sensorial se usa para asegurar que las carnes vegetales imiten carne real?",
          de: "Welche sensorische Technik wird verwendet, um sicherzustellen, dass pflanzliche Fleischprodukte echtes Fleisch nachahmen?",
          nl: "Welke zintuiglijke techniek wordt gebruikt om ervoor te zorgen dat plantaardig vlees echt vlees nabootst?"
        },
        options: [
          { en: "Trained sensory panels conducting descriptive analysis and triangle tests comparing texture, flavor, aroma, and appearance", es: "Paneles sensoriales entrenados realizando análisis descriptivo y pruebas triangulares comparando textura, sabor, aroma y apariencia", de: "Geschulte Sensorik-Panels, die deskriptive Analysen und Dreieckstests durchführen, die Textur, Geschmack, Aroma und Aussehen vergleichen", nl: "Getrainde sensorische panels die beschrijvende analyses en driehoekstests uitvoeren die textuur, smaak, aroma en uiterlijk vergelijken" },
          { en: "Only visual inspection", es: "Solo inspección visual", de: "Nur visuelle Inspektion", nl: "Alleen visuele inspectie" },
          { en: "Random tasting", es: "Degustación aleatoria", de: "Zufällige Verkostung", nl: "Willekeurige proeverij" },
          { en: "No testing needed", es: "No se necesitan pruebas", de: "Keine Tests erforderlich", nl: "Geen testen nodig" }
        ],
        correct: 0,
        explanation: {
          en: "Food scientists use trained panels to systematically evaluate all sensory attributes against real meat benchmarks, identifying gaps and guiding formulation improvements through quantitative descriptive analysis.",
          es: "Los científicos alimentarios usan paneles entrenados para evaluar sistemáticamente todos los atributos sensoriales contra puntos de referencia de carne real, identificando brechas y guiando mejoras de formulación a través de análisis descriptivo cuantitativo.",
          de: "Lebensmittelwissenschaftler verwenden geschulte Panels, um systematisch alle sensorischen Attribute gegen echte Fleisch-Benchmarks zu bewerten, Lücken zu identifizieren und Formulierungsverbesserungen durch quantitative deskriptive Analyse zu leiten.",
          nl: "Voedselwetenschappers gebruiken getrainde panels om systematisch alle zintuiglijke kenmerken te evalueren tegen echte vlees benchmarks, lacunes te identificeren en formulering verbeteringen te begeleiden door kwantitatieve beschrijvende analyse."
        }
      },
      {
        question: {
          en: "What future trend is expected to revolutionize plant-based meat production?",
          es: "¿Qué tendencia futura se espera que revolucione la producción de carne vegetal?",
          de: "Welcher zukünftige Trend wird die Produktion pflanzlicher Fleischprodukte voraussichtlich revolutionieren?",
          nl: "Welke toekomstige trend zal naar verwachting de productie van plantaardig vlees revolutioneren?"
        },
        options: [
          { en: "Hybrid products combining plant proteins with cultured animal cells for authentic taste at scale", es: "Productos híbridos combinando proteínas vegetales con células animales cultivadas para sabor auténtico a escala", de: "Hybridprodukte, die Pflanzenproteine mit kultivierten Tierzellen für authentischen Geschmack im großen Maßstab kombinieren", nl: "Hybride producten die plantaardige eiwitten combineren met gekweekte dierlijke cellen voor authentieke smaak op schaal" },
          { en: "Using only traditional farming", es: "Usar solo agricultura tradicional", de: "Nur traditionelle Landwirtschaft verwenden", nl: "Alleen traditionele landbouw gebruiken" },
          { en: "Abandoning innovation", es: "Abandonar la innovación", de: "Innovation aufgeben", nl: "Innovatie opgeven" },
          { en: "Focusing only on cost reduction", es: "Enfocarse solo en reducción de costos", de: "Sich nur auf Kostenreduzierung konzentrieren", nl: "Zich alleen richten op kostenreductie" }
        ],
        correct: 0,
        explanation: {
          en: "The future may see hybrid products that blend plant proteins (for sustainability and cost) with small amounts of cultured animal cells (for authentic taste/texture), creating products that balance environmental benefits with sensory accuracy.",
          es: "El futuro puede ver productos híbridos que mezclan proteínas vegetales (para sostenibilidad y costo) con pequeñas cantidades de células animales cultivadas (para sabor/textura auténticos), creando productos que equilibran beneficios ambientales con precisión sensorial.",
          de: "Die Zukunft könnte Hybridprodukte sehen, die Pflanzenproteine (für Nachhaltigkeit und Kosten) mit kleinen Mengen kultivierter Tierzellen (für authentischen Geschmack/Textur) mischen und Produkte schaffen, die Umweltvorteile mit sensorischer Genauigkeit ausbalancieren.",
          nl: "De toekomst kan hybride producten zien die plantaardige eiwitten (voor duurzaamheid en kosten) mengen met kleine hoeveelheden gekweekte dierlijke cellen (voor authentieke smaak/textuur), producten creërend die milieu voordelen balanceren met zintuiglijke nauwkeurigheid."
        }
      },
      {
        question: {
          en: "What is the function of adding yeast extract to plant-based meat products?",
          es: "¿Cuál es la función de añadir extracto de levadura a productos de carne vegetal?",
          de: "Was ist die Funktion des Hinzufügens von Hefeextrakt zu pflanzlichen Fleischprodukten?",
          nl: "Wat is de functie van het toevoegen van gistextract aan plantaardige vleesproducten?"
        },
        options: [
          { en: "To provide savory, umami-rich flavors and enhance overall taste complexity", es: "Para proporcionar sabores salados ricos en umami y mejorar la complejidad general del sabor", de: "Um herzhafte, umamireiche Aromen zu bieten und die Gesamtgeschmackskomplexität zu verbessern", nl: "Om hartige, umami-rijke smaken te bieden en de algehele smaak complexiteit te verbeteren" },
          { en: "To add protein only", es: "Solo para añadir proteína", de: "Nur um Protein hinzuzufügen", nl: "Alleen om eiwit toe te voegen" },
          { en: "To preserve the product", es: "Para preservar el producto", de: "Um das Produkt zu konservieren", nl: "Om het product te bewaren" },
          { en: "To add sweetness", es: "Para añadir dulzura", de: "Um Süße hinzuzufügen", nl: "Om zoetheid toe te voegen" }
        ],
        correct: 0,
        explanation: {
          en: "Yeast extract contains glutamates and nucleotides that provide rich umami flavors, creating depth and savory notes that make plant-based meats taste more complex and meat-like.",
          es: "El extracto de levadura contiene glutamatos y nucleótidos que proporcionan ricos sabores umami, creando profundidad y notas saladas que hacen que las carnes vegetales tengan un sabor más complejo y similar a la carne.",
          de: "Hefeextrakt enthält Glutamate und Nukleotide, die reichhaltige Umami-Aromen bieten und Tiefe und herzhafte Noten schaffen, die pflanzliche Fleischprodukte komplexer und fleischähnlicher schmecken lassen.",
          nl: "Gistextract bevat glutamaten en nucleotiden die rijke umami smaken bieden, diepte en hartige noten creërend die plantaardig vlees complexer en vleesachtiger laten smaken."
        }
      },
      {
        question: {
          en: "Which processing method is used to create plant-based bacon with crispy texture?",
          es: "¿Qué método de procesamiento se usa para crear tocino vegetal con textura crujiente?",
          de: "Welche Verarbeitungsmethode wird verwendet, um pflanzlichen Speck mit knuspriger Textur zu schaffen?",
          nl: "Welke verwerkingsmethode wordt gebruikt om plantaardige bacon met knapperige textuur te creëren?"
        },
        options: [
          { en: "Thin slicing of protein sheets followed by marinating and dehydration", es: "Rebanado fino de hojas de proteína seguido de marinado y deshidratación", de: "Dünnes Schneiden von Proteinblättern gefolgt von Marinieren und Dehydrierung", nl: "Dun snijden van eiwitbladen gevolgd door marineren en dehydratie" },
          { en: "Freezing thick chunks", es: "Congelar trozos gruesos", de: "Dicke Stücke einfrieren", nl: "Dikke stukken invriezen" },
          { en: "Boiling in water", es: "Hervir en agua", de: "In Wasser kochen", nl: "Koken in water" },
          { en: "Pressure cooking only", es: "Solo cocción a presión", de: "Nur Druckkochen", nl: "Alleen snelkoken" }
        ],
        correct: 0,
        explanation: {
          en: "Plant-based bacon is typically made by thinly slicing pressed protein (often soy or tempeh), marinating in smoky seasonings, and then dehydrating to create a texture that crisps up when cooked.",
          es: "El tocino vegetal típicamente se hace rebanando finamente proteína prensada (a menudo soja o tempeh), marinando en condimentos ahumados, y luego deshidratando para crear una textura que se vuelve crujiente al cocinar.",
          de: "Pflanzlicher Speck wird typischerweise hergestellt, indem gepresstes Protein (oft Soja oder Tempeh) dünn geschnitten, in rauchigen Gewürzen mariniert und dann dehydriert wird, um eine Textur zu schaffen, die beim Kochen knusprig wird.",
          nl: "Plantaardige bacon wordt doorgaans gemaakt door geperst eiwit (vaak soja of tempeh) dun te snijden, te marineren in rokerige kruiden, en vervolgens te dehydrateren om een textuur te creëren die knapperig wordt bij koken."
        }
      },
      {
        question: {
          en: "What is the role of tapioca starch in plant-based cheese alternatives?",
          es: "¿Cuál es el papel del almidón de tapioca en alternativas de queso vegetal?",
          de: "Was ist die Rolle von Tapiokastärke in pflanzlichen Käsealternativen?",
          nl: "Wat is de rol van tapioca zetmeel in plantaardige kaasalternatieven?"
        },
        options: [
          { en: "To create stretchy, melty texture similar to dairy cheese when heated", es: "Para crear textura elástica y derretible similar al queso lácteo cuando se calienta", de: "Um dehnbare, schmelzende Textur ähnlich Milchkäse beim Erhitzen zu schaffen", nl: "Om rekbare, smeltende textuur vergelijkbaar met zuivelkaas te creëren bij verhitting" },
          { en: "To add protein", es: "Para añadir proteína", de: "Um Protein hinzuzufügen", nl: "Om eiwit toe te voegen" },
          { en: "To add flavor", es: "Para añadir sabor", de: "Um Geschmack hinzuzufügen", nl: "Om smaak toe te voegen" },
          { en: "To preserve freshness", es: "Para preservar frescura", de: "Um Frische zu bewahren", nl: "Om versheid te behouden" }
        ],
        correct: 0,
        explanation: {
          en: "Tapioca starch gelatinizes when heated, creating elastic, stretchy properties that mimic the melt and pull of dairy cheese. It's crucial for achieving pizza cheese-like behavior.",
          es: "El almidón de tapioca se gelatiniza cuando se calienta, creando propiedades elásticas y elásticas que imitan el derretimiento y estiramiento del queso lácteo. Es crucial para lograr un comportamiento similar al queso de pizza.",
          de: "Tapiokastärke gelatiniert beim Erhitzen und schafft elastische, dehnbare Eigenschaften, die das Schmelzen und Ziehen von Milchkäse nachahmen. Es ist entscheidend für das Erreichen von pizzakäseähnlichem Verhalten.",
          nl: "Tapioca zetmeel gelateert bij verhitting, elastische, rekbare eigenschappen creërend die het smelten en trekken van zuivelkaas nabootsen. Het is cruciaal voor het bereiken van pizza kaas-achtig gedrag."
        }
      },
      {
        question: {
          en: "Which plant-based protein is considered the most sustainable due to nitrogen fixation?",
          es: "¿Qué proteína vegetal se considera la más sostenible debido a la fijación de nitrógeno?",
          de: "Welches pflanzliche Protein gilt aufgrund der Stickstofffixierung als am nachhaltigsten?",
          nl: "Welk plantaardig eiwit wordt beschouwd als het meest duurzaam vanwege stikstoffixatie?"
        },
        options: [
          { en: "Legume proteins (peas, lentils, beans) that add nitrogen to soil naturally", es: "Proteínas de legumbres (guisantes, lentejas, frijoles) que añaden nitrógeno al suelo naturalmente", de: "Hülsenfruchtproteine (Erbsen, Linsen, Bohnen), die natürlich Stickstoff in den Boden bringen", nl: "Peulvruchten eiwitten (erwten, linzen, bonen) die natuurlijk stikstof aan de bodem toevoegen" },
          { en: "Wheat protein", es: "Proteína de trigo", de: "Weizenprotein", nl: "Tarwe eiwit" },
          { en: "Rice protein", es: "Proteína de arroz", de: "Reisprotein", nl: "Rijst eiwit" },
          { en: "Corn protein", es: "Proteína de maíz", de: "Maisprotein", nl: "Maïs eiwit" }
        ],
        correct: 0,
        explanation: {
          en: "Legumes form symbiotic relationships with nitrogen-fixing bacteria in their roots, enriching soil naturally and reducing the need for synthetic fertilizers, making them highly sustainable protein sources.",
          es: "Las legumbres forman relaciones simbióticas con bacterias fijadoras de nitrógeno en sus raíces, enriqueciendo el suelo naturalmente y reduciendo la necesidad de fertilizantes sintéticos, haciéndolas fuentes de proteína altamente sostenibles.",
          de: "Hülsenfrüchte bilden symbiotische Beziehungen mit stickstofffixierenden Bakterien in ihren Wurzeln, bereichern den Boden natürlich und reduzieren den Bedarf an synthetischen Düngemitteln, was sie zu hochnachhaltigen Proteinquellen macht.",
          nl: "Peulvruchten vormen symbiotische relaties met stikstoffixerende bacteriën in hun wortels, de bodem natuurlijk verrijkend en de behoefte aan synthetische meststoffen verminderend, waardoor ze zeer duurzame eiwitbronnen zijn."
        }
      },
      {
        question: {
          en: "What technique is used to create plant-based fish alternatives that flake like real fish?",
          es: "¿Qué técnica se usa para crear alternativas de pescado vegetal que se desmenucen como pescado real?",
          de: "Welche Technik wird verwendet, um pflanzliche Fischalternativen zu schaffen, die wie echter Fisch abblättern?",
          nl: "Welke techniek wordt gebruikt om plantaardige visalternatieven te creëren die afbladderen zoals echte vis?"
        },
        options: [
          { en: "Layering and compressing protein sheets, then cutting against the grain", es: "Superponer y comprimir hojas de proteína, luego cortar contra el grano", de: "Schichten und Komprimieren von Proteinblättern, dann gegen die Faser schneiden", nl: "Lagen en comprimeren van eiwitbladen, vervolgens snijden tegen de nerf" },
          { en: "Freezing only", es: "Solo congelar", de: "Nur einfrieren", nl: "Alleen invriezen" },
          { en: "Blending smooth", es: "Mezclar suave", de: "Glatt mischen", nl: "Glad mengen" },
          { en: "Adding sugar", es: "Añadir azúcar", de: "Zucker hinzufügen", nl: "Suiker toevoegen" }
        ],
        correct: 0,
        explanation: {
          en: "Companies create fish-like flaking by layering protein sheets (often pea or soy) under pressure, then cutting perpendicular to the layers, mimicking the muscle fiber structure of fish that naturally flakes.",
          es: "Las empresas crean desmenuzamiento similar al pescado superponiendo hojas de proteína (a menudo guisante o soja) bajo presión, luego cortando perpendicular a las capas, imitando la estructura de fibra muscular del pescado que naturalmente se desmenuza.",
          de: "Unternehmen schaffen fischähnliches Abblättern durch Schichten von Proteinblättern (oft Erbsen oder Soja) unter Druck, dann Schneiden senkrecht zu den Schichten, wodurch die Muskelfaserstruktur von Fisch nachgeahmt wird, die natürlich abblättert.",
          nl: "Bedrijven creëren visachtig afbladderen door eiwitbladen (vaak erwten of soja) onder druk te lagen, vervolgens loodrecht op de lagen te snijden, de spiervezelstructuur van vis nabootsend die natuurlijk afbladdert."
        }
      },
      {
        question: {
          en: "Which ingredient is commonly added to plant-based ground meat to replicate the 'fatty' mouthfeel?",
          es: "¿Qué ingrediente se añade comúnmente a carne molida vegetal para replicar la sensación en boca 'grasa'?",
          de: "Welche Zutat wird häufig zu pflanzlichem Hackfleisch hinzugefügt, um das 'fettige' Mundgefühl zu replizieren?",
          nl: "Welk ingrediënt wordt vaak toegevoegd aan plantaardig gehakt om het 'vette' mondgevoel te repliceren?"
        },
        options: [
          { en: "Refined coconut or canola oil mixed into the protein matrix", es: "Aceite de coco refinado o aceite de canola mezclado en la matriz de proteína", de: "Raffiniertes Kokos- oder Rapsöl, das in die Proteinmatrix eingemischt wird", nl: "Geraffineerde kokos- of koolzaadolie gemengd in de eiwitmatrix" },
          { en: "Water only", es: "Solo agua", de: "Nur Wasser", nl: "Alleen water" },
          { en: "Sugar syrup", es: "Jarabe de azúcar", de: "Zuckersirup", nl: "Suikersiroop" },
          { en: "Vinegar", es: "Vinagre", de: "Essig", nl: "Azijn" }
        ],
        correct: 0,
        explanation: {
          en: "Plant oils (typically 10-20% by weight) are incorporated into the protein structure to mimic the juiciness and rich mouthfeel of animal fat, creating a similar eating experience when cooked.",
          es: "Los aceites vegetales (típicamente 10-20% por peso) se incorporan en la estructura de proteína para imitar la jugosidad y rica sensación en boca de la grasa animal, creando una experiencia de comida similar al cocinar.",
          de: "Pflanzenöle (typischerweise 10-20% nach Gewicht) werden in die Proteinstruktur eingearbeitet, um die Saftigkeit und das reichhaltige Mundgefühl von tierischem Fett nachzuahmen und beim Kochen ein ähnliches Esserlebnis zu schaffen.",
          nl: "Plantaardige oliën (doorgaans 10-20% per gewicht) worden opgenomen in de eiwitstructuur om de sappigheid en rijke mondgevoel van dierlijk vet na te bootsen, een vergelijkbare eetervaring creërend bij koken."
        }
      },
      {
        question: {
          en: "What is the main regulatory challenge facing cultured meat production?",
          es: "¿Cuál es el desafío regulatorio principal que enfrenta la producción de carne cultivada?",
          de: "Was ist die Hauptregulierungsherausforderung für die Produktion von kultiviertem Fleisch?",
          nl: "Wat is de belangrijkste regelgevende uitdaging voor de productie van gekweekt vlees?"
        },
        options: [
          { en: "Establishing safety standards, labeling requirements, and approval processes for novel cell-cultured foods", es: "Establecer estándares de seguridad, requisitos de etiquetado y procesos de aprobación para alimentos novedosos cultivados en células", de: "Festlegung von Sicherheitsstandards, Kennzeichnungsanforderungen und Genehmigungsverfahren für neuartige zellkultivierte Lebensmittel", nl: "Vaststellen van veiligheidsnormen, etiketteringseisen en goedkeuringsprocedures voor nieuwe celgekweekte voedingsmiddelen" },
          { en: "No challenges exist", es: "No existen desafíos", de: "Keine Herausforderungen existieren", nl: "Geen uitdagingen bestaan" },
          { en: "Only marketing concerns", es: "Solo preocupaciones de marketing", de: "Nur Marketingbedenken", nl: "Alleen marketing zorgen" },
          { en: "Packaging issues only", es: "Solo problemas de empaque", de: "Nur Verpackungsprobleme", nl: "Alleen verpakkingsproblemen" }
        ],
        correct: 0,
        explanation: {
          en: "Cultured meat faces complex regulatory approval because it's a novel food requiring new frameworks for safety assessment, facility inspections, and consumer labeling distinct from traditional meat or plant foods.",
          es: "La carne cultivada enfrenta aprobación regulatoria compleja porque es un alimento novedoso que requiere nuevos marcos para evaluación de seguridad, inspecciones de instalaciones y etiquetado para consumidores distinto de carne tradicional o alimentos vegetales.",
          de: "Kultiviertes Fleisch steht vor komplexer regulatorischer Genehmigung, da es ein neuartiges Lebensmittel ist, das neue Rahmen für Sicherheitsbewertung, Anlagenkontrollen und Verbraucherkennzeichnung erfordert, die sich von traditionellem Fleisch oder pflanzlichen Lebensmitteln unterscheiden.",
          nl: "Gekweekt vlees staat voor complexe regelgevende goedkeuring omdat het een nieuw voedingsmiddel is dat nieuwe kaders vereist voor veiligheidsbeoordeling, faciliteit inspecties en consumentenetikettering onderscheiden van traditioneel vlees of plantaardig voedsel."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  }
  return level8;
})();