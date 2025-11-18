// Vegetarian Dishes Quiz - Level 6: Vegan vs Vegetarian Differences
(function() {
  "use strict";
  const level6 = {
    name: {
      en: "Vegetarian Level 6",
      es: "Vegetariano Nivel 6",
      de: "Vegetarisch Stufe 6",
      nl: "Vegetarisch Level 6"
    },
    questions: [
      {
        question: {
          en: "What is the main difference between vegetarian and vegan diets?",
          es: "¿Cuál es la principal diferencia entre las dietas vegetarianas y veganas?",
          de: "Was ist der Hauptunterschied zwischen vegetarischen und veganen Diäten?",
          nl: "Wat is het belangrijkste verschil tussen vegetarische en veganistische diëten?"
        },
        options: [
          { en: "Vegans exclude all animal products, vegetarians may include dairy and eggs", es: "Los veganos excluyen todos los productos animales, los vegetarianos pueden incluir lácteos y huevos", de: "Veganer schließen alle Tierprodukte aus, Vegetarier können Milchprodukte und Eier einschließen", nl: "Veganisten sluiten alle dierlijke producten uit, vegetariërs mogen zuivel en eieren bevatten" },
          { en: "There is no difference", es: "No hay diferencia", de: "Es gibt keinen Unterschied", nl: "Er is geen verschil" },
          { en: "Vegans eat more vegetables", es: "Los veganos comen más verduras", de: "Veganer essen mehr Gemüse", nl: "Veganisten eten meer groenten" },
          { en: "Vegetarians don't eat fruits", es: "Los vegetarianos no comen frutas", de: "Vegetarier essen kein Obst", nl: "Vegetariërs eten geen fruit" }
        ],
        correct: 0,
        explanation: {
          en: "Vegans avoid all animal products including meat, dairy, eggs, honey, and leather. Vegetarians typically avoid meat, fish, and poultry but may consume dairy and eggs.",
          es: "Los veganos evitan todos los productos animales incluyendo carne, lácteos, huevos, miel y cuero. Los vegetarianos típicamente evitan carne, pescado y aves pero pueden consumir lácteos y huevos.",
          de: "Veganer meiden alle Tierprodukte einschließlich Fleisch, Milchprodukte, Eier, Honig und Leder. Vegetarier meiden typischerweise Fleisch, Fisch und Geflügel, können aber Milchprodukte und Eier konsumieren.",
          nl: "Veganisten vermijden alle dierlijke producten inclusief vlees, zuivel, eieren, honing en leer. Vegetariërs vermijden typisch vlees, vis en gevogelte maar kunnen zuivel en eieren consumeren."
        }
      },
      {
        question: {
          en: "Which ingredient would make a dish non-vegan but still vegetarian?",
          es: "¿Qué ingrediente haría que un plato no sea vegano pero sí vegetariano?",
          de: "Welche Zutat würde ein Gericht nicht vegan, aber trotzdem vegetarisch machen?",
          nl: "Welk ingrediënt zou een gerecht niet-veganistisch maar wel vegetarisch maken?"
        },
        options: [
          { en: "Parmesan cheese", es: "Queso parmesano", de: "Parmesankäse", nl: "Parmezaanse kaas" },
          { en: "Chicken broth", es: "Caldo de pollo", de: "Hühnerbrühe", nl: "Kippenbouillon" },
          { en: "Anchovy paste", es: "Pasta de anchoa", de: "Sardellenpaste", nl: "Ansjovisseasta" },
          { en: "Beef stock", es: "Caldo de res", de: "Rinderbrühe", nl: "Runderbouillon" }
        ],
        correct: 0,
        explanation: {
          en: "Parmesan cheese is made with animal-derived rennet and contains dairy, making it non-vegan but acceptable for vegetarians who consume dairy products.",
          es: "El queso parmesano se hace con cuajo derivado de animales y contiene lácteos, haciéndolo no vegano pero aceptable para vegetarianos que consumen productos lácteos.",
          de: "Parmesankäse wird mit tierischem Lab hergestellt und enthält Milchprodukte, was ihn nicht vegan, aber für Vegetarier, die Milchprodukte konsumieren, akzeptabel macht.",
          nl: "Parmezaanse kaas wordt gemaakt met dierlijk stremsel en bevat zuivel, waardoor het niet-veganistisch maar acceptabel is voor vegetariërs die zuivelproducten consumeren."
        }
      },
      {
        question: {
          en: "What is a good vegan substitute for eggs in baking?",
          es: "¿Cuál es un buen sustituto vegano para los huevos en repostería?",
          de: "Was ist ein guter veganer Ersatz für Eier beim Backen?",
          nl: "Wat is een goede veganistische vervanger voor eieren bij het bakken?"
        },
        options: [
          { en: "Flax eggs (ground flaxseed mixed with water)", es: "Huevos de linaza (linaza molida mezclada con agua)", de: "Leinsamen-Eier (gemahlene Leinsamen mit Wasser gemischt)", nl: "Lijnzaad eieren (gemalen lijnzaad gemengd met water)" },
          { en: "More butter", es: "Más mantequilla", de: "Mehr Butter", nl: "Meer boter" },
          { en: "Extra milk", es: "Leche extra", de: "Extra Milch", nl: "Extra melk" },
          { en: "Cream cheese", es: "Queso crema", de: "Frischkäse", nl: "Roomkaas" }
        ],
        correct: 0,
        explanation: {
          en: "Flax eggs (1 Tbsp ground flaxseed + 3 Tbsp water) work as binding agents in baking. Other vegan egg replacers include chia seeds, applesauce, or commercial egg replacers.",
          es: "Los huevos de linaza (1 cucharada de linaza molida + 3 cucharadas de agua) funcionan como agentes aglutinantes en repostería. Otros sustitutos veganos incluyen semillas de chía, puré de manzana o sustitutos comerciales.",
          de: "Leinsamen-Eier (1 EL gemahlene Leinsamen + 3 EL Wasser) wirken als Bindemittel beim Backen. Andere vegane Ei-Ersatzstoffe umfassen Chiasamen, Apfelmus oder kommerzielle Ei-Ersatzstoffe.",
          nl: "Lijnzaad eieren (1 eetlepel gemalen lijnzaad + 3 eetlepels water) werken als bindmiddel bij het bakken. Andere veganistische ei vervangers zijn chiazaadjes, appelmoes of commerciële ei vervangers."
        }
      },
      {
        question: {
          en: "Which type of milk is naturally vegan?",
          es: "¿Qué tipo de leche es naturalmente vegana?",
          de: "Welche Art von Milch ist natürlich vegan?",
          nl: "Welk soort melk is van nature veganistisch?"
        },
        options: [
          { en: "Oat milk", es: "Leche de avena", de: "Hafermilch", nl: "Havermelk" },
          { en: "Cow's milk", es: "Leche de vaca", de: "Kuhmilch", nl: "Koemelk" },
          { en: "Goat milk", es: "Leche de cabra", de: "Ziegenmilch", nl: "Geitenmelk" },
          { en: "Sheep milk", es: "Leche de oveja", de: "Schafsmilch", nl: "Schapenmelk" }
        ],
        correct: 0,
        explanation: {
          en: "Plant-based milks like oat, soy, almond, rice, and coconut milk are all vegan as they're made from plants, not animal sources.",
          es: "Las leches vegetales como avena, soja, almendra, arroz y coco son todas veganas ya que están hechas de plantas, no de fuentes animales.",
          de: "Pflanzliche Milch wie Hafer-, Soja-, Mandel-, Reis- und Kokosmilch sind alle vegan, da sie aus Pflanzen, nicht aus tierischen Quellen hergestellt werden.",
          nl: "Plantaardige melk zoals haver-, soja-, amandel-, rijst- en kokosmelk zijn alle veganistisch omdat ze van planten gemaakt zijn, niet van dierlijke bronnen."
        }
      },
      {
        question: {
          en: "What should vegans be particularly careful to supplement?",
          es: "¿Qué deben tener especial cuidado de suplementar los veganos?",
          de: "Was sollten Veganer besonders sorgfältig ergänzen?",
          nl: "Waar moeten veganisten bijzonder voorzichtig mee zijn om aan te vullen?"
        },
        options: [
          { en: "Vitamin B12", es: "Vitamina B12", de: "Vitamin B12", nl: "Vitamine B12" },
          { en: "Vitamin C", es: "Vitamina C", de: "Vitamin C", nl: "Vitamine C" },
          { en: "Fiber", es: "Fibra", de: "Ballaststoffe", nl: "Vezels" },
          { en: "Carbohydrates", es: "Carbohidratos", de: "Kohlenhydrate", nl: "Koolhydraten" }
        ],
        correct: 0,
        explanation: {
          en: "Vitamin B12 is primarily found in animal products, so vegans should take B12 supplements or consume fortified foods to prevent deficiency and related health issues.",
          es: "La vitamina B12 se encuentra principalmente en productos animales, por lo que los veganos deben tomar suplementos de B12 o consumir alimentos fortificados para prevenir deficiencia y problemas de salud relacionados.",
          de: "Vitamin B12 findet sich hauptsächlich in tierischen Produkten, daher sollten Veganer B12-Nahrungsergänzungsmittel einnehmen oder angereicherte Lebensmittel konsumieren, um Mangel und damit verbundene Gesundheitsprobleme zu verhindern.",
          nl: "Vitamine B12 komt voornamelijk voor in dierlijke producten, dus veganisten moeten B12 supplementen nemen of verrijkte voedingsmiddelen consumeren om tekort en gerelateerde gezondheidsproblemen te voorkomen."
        }
      },
      {
        question: {
          en: "Which of these foods is vegan?",
          es: "¿Cuál de estos alimentos es vegano?",
          de: "Welches dieser Lebensmittel ist vegan?",
          nl: "Welk van deze voedingsmiddelen is veganistisch?"
        },
        options: [
          { en: "Nutritional yeast", es: "Levadura nutricional", de: "Nährhefe", nl: "Voedingsgist" },
          { en: "Milk chocolate", es: "Chocolate con leche", de: "Milchschokolade", nl: "Melkchocolade" },
          { en: "Butter cookies", es: "Galletas de mantequilla", de: "Butterkekse", nl: "Boterkoekjes" },
          { en: "Caesar salad with traditional dressing", es: "Ensalada César con aderezo tradicional", de: "Caesar Salad mit traditionellem Dressing", nl: "Caesar salade met traditionele dressing" }
        ],
        correct: 0,
        explanation: {
          en: "Nutritional yeast is a deactivated yeast that's completely plant-based and provides a cheesy, nutty flavor. It's rich in B vitamins and popular in vegan cooking.",
          es: "La levadura nutricional es una levadura desactivada que es completamente vegetal y proporciona un sabor a queso y nuez. Es rica en vitaminas B y popular en la cocina vegana.",
          de: "Nährhefe ist eine deaktivierte Hefe, die vollständig pflanzlich ist und einen käsigen, nussigen Geschmack bietet. Sie ist reich an B-Vitaminen und beliebt in der veganen Küche.",
          nl: "Voedingsgist is een gedeactiveerde gist die volledig plantaardig is en een kaasachtige, nootachtige smaak geeft. Het is rijk aan B-vitamines en populair in de veganistische keuken."
        }
      },
      {
        question: {
          en: "What is aquafaba and why is it useful for vegans?",
          es: "¿Qué es aquafaba y por qué es útil para los veganos?",
          de: "Was ist Aquafaba und warum ist es nützlich für Veganer?",
          nl: "Wat is aquafaba en waarom is het nuttig voor veganisten?"
        },
        options: [
          { en: "Liquid from canned beans that can replace eggs in recipes", es: "Líquido de frijoles enlatados que puede reemplazar huevos en recetas", de: "Flüssigkeit aus Dosenbohnen, die Eier in Rezepten ersetzen kann", nl: "Vloeistof uit ingeblikte bonen die eieren in recepten kan vervangen" },
          { en: "A type of seaweed", es: "Un tipo de alga marina", de: "Eine Art Seetang", nl: "Een soort zeewier" },
          { en: "Flavored water", es: "Agua saborizata", de: "Aromatisiertes Wasser", nl: "Gearomatiseerd water" },
          { en: "A synthetic protein", es: "Una proteína sintética", de: "Ein synthetisches Protein", nl: "Een synthetisch eiwit" }
        ],
        correct: 0,
        explanation: {
          en: "Aquafaba is the liquid from canned chickpeas or other legumes. It has similar properties to egg whites and can be whipped, used in meringues, or as a binding agent in baking.",
          es: "Aquafaba es el líquido de garbanzos enlatados u otras legumbres. Tiene propiedades similares a las claras de huevo y se puede batir, usar en merengues, o como agente aglutinante en repostería.",
          de: "Aquafaba ist die Flüssigkeit aus Dosenkichererbsen oder anderen Hülsenfrüchten. Es hat ähnliche Eigenschaften wie Eiweiß und kann aufgeschlagen, in Baiser verwendet oder als Bindemittel beim Backen eingesetzt werden.",
          nl: "Aquafaba is de vloeistof uit ingeblikte kikkererwten of andere peulvruchten. Het heeft vergelijkbare eigenschappen als eiwit en kan worden opgeklopt, gebruikt in schuimgebak, of als bindmiddel bij het bakken."
        }
      },
      {
        question: {
          en: "Which cheese-making ingredient is not suitable for vegetarians?",
          es: "¿Qué ingrediente para hacer queso no es adecuado para vegetarianos?",
          de: "Welche Käseherstellungszutat ist nicht für Vegetarier geeignet?",
          nl: "Welk kaasmaakingrediënt is niet geschikt voor vegetariërs?"
        },
        options: [
          { en: "Animal rennet", es: "Cuajo animal", de: "Tierisches Lab", nl: "Dierlijk stremsel" },
          { en: "Salt", es: "Sal", de: "Salz", nl: "Zout" },
          { en: "Bacterial cultures", es: "Cultivos bacterianos", de: "Bakterienkulturen", nl: "Bacterieculturen" },
          { en: "Plant-based rennet", es: "Cuajo vegetal", de: "Pflanzliches Lab", nl: "Plantaardig stremsel" }
        ],
        correct: 0,
        explanation: {
          en: "Animal rennet is extracted from the stomach lining of young calves, making it unsuitable for vegetarians. Vegetarian cheeses use microbial or plant-based rennet instead.",
          es: "El cuajo animal se extrae del revestimiento del estómago de terneros jóvenes, haciéndolo inadecuado para vegetarianos. Los quesos vegetarianos usan cuajo microbiano o vegetal en su lugar.",
          de: "Tierisches Lab wird aus der Magenschleimhaut junger Kälber extrahiert, was es für Vegetarier ungeeignet macht. Vegetarische Käse verwenden stattdessen mikrobielles oder pflanzliches Lab.",
          nl: "Dierlijk stremsel wordt gewonnen uit de maagvoering van jonge kalveren, waardoor het ongeschikt is voor vegetariërs. Vegetarische kazen gebruiken in plaats daarvan microbieel of plantaardig stremsel."
        }
      },
      {
        question: {
          en: "What is the difference between lacto-vegetarian and lacto-ovo vegetarian?",
          es: "¿Cuál es la diferencia entre lacto-vegetariano y lacto-ovo vegetariano?",
          de: "Was ist der Unterschied zwischen lakto-vegetarisch und lakto-ovo-vegetarisch?",
          nl: "Wat is het verschil tussen lacto-vegetarisch en lacto-ovo vegetarisch?"
        },
        options: [
          { en: "Lacto-ovo includes eggs, lacto-vegetarian does not", es: "Lacto-ovo incluye huevos, lacto-vegetariano no", de: "Lakto-ovo schließt Eier ein, lakto-vegetarisch nicht", nl: "Lacto-ovo bevat eieren, lacto-vegetarisch niet" },
          { en: "They are exactly the same", es: "Son exactamente iguales", de: "Sie sind genau gleich", nl: "Ze zijn precies hetzelfde" },
          { en: "Lacto-vegetarian includes fish", es: "Lacto-vegetariano incluye pescado", de: "Lakto-vegetarisch schließt Fisch ein", nl: "Lacto-vegetarisch bevat vis" },
          { en: "Only one includes dairy", es: "Solo uno incluye lácteos", de: "Nur einer schließt Milchprodukte ein", nl: "Slechts één bevat zuivel" }
        ],
        correct: 0,
        explanation: {
          en: "Lacto-ovo vegetarians eat dairy products and eggs but no meat, fish, or poultry. Lacto-vegetarians eat dairy but no eggs, meat, fish, or poultry.",
          es: "Los lacto-ovo vegetarianos comen productos lácteos y huevos pero no carne, pescado o aves. Los lacto-vegetarianos comen lácteos pero no huevos, carne, pescado o aves.",
          de: "Lakto-ovo-Vegetarier essen Milchprodukte und Eier, aber kein Fleisch, Fisch oder Geflügel. Lakto-Vegetarier essen Milchprodukte, aber keine Eier, kein Fleisch, Fisch oder Geflügel.",
          nl: "Lacto-ovo vegetariërs eten zuivelproducten en eieren maar geen vlees, vis of gevogelte. Lacto-vegetariërs eten zuivel maar geen eieren, vlees, vis of gevogelte."
        }
      },
      {
        question: {
          en: "Which hidden ingredient in some wines makes them non-vegan?",
          es: "¿Qué ingrediente oculto en algunos vinos los hace no veganos?",
          de: "Welche versteckte Zutat in manchen Weinen macht sie nicht vegan?",
          nl: "Welk verborgen ingrediënt in sommige wijnen maakt ze niet-veganistisch?"
        },
        options: [
          { en: "Egg whites or gelatin used in clarifying", es: "Claras de huevo o gelatina usadas para clarificar", de: "Eiweiß oder Gelatine zur Klärung verwendet", nl: "Eiwitten of gelatine gebruikt voor klaring" },
          { en: "Grapes", es: "Uvas", de: "Trauben", nl: "Druiven" },
          { en: "Yeast", es: "Levadura", de: "Hefe", nl: "Gist" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" }
        ],
        correct: 0,
        explanation: {
          en: "Some wines use animal-derived fining agents like egg whites, gelatin, or isinglass (fish bladder) to clarify and remove sediments, making them non-vegan.",
          es: "Algunos vinos usan agentes clarificantes derivados de animales como claras de huevo, gelatina, o cola de pescado (vejiga de pescado) para clarificar y remover sedimentos, haciéndolos no veganos.",
          de: "Einige Weine verwenden tierische Schönungsmittel wie Eiweiß, Gelatine oder Hausenblase (Fischblase) zur Klärung und Entfernung von Sedimenten, was sie nicht vegan macht.",
          nl: "Sommige wijnen gebruiken dierlijke klaringsmiddelen zoals eiwitten, gelatine, of vislijm (visblaas) om te klaren en sediment te verwijderen, waardoor ze niet-veganistisch zijn."
        }
      },
      {
        question: {
          en: "What is a common vegan substitute for butter in baking?",
          es: "¿Cuál es un sustituto vegano común para la mantequilla en repostería?",
          de: "Was ist ein häufiger veganer Ersatz für Butter beim Backen?",
          nl: "Wat is een veelvoorkomende veganistische vervanger voor boter bij het bakken?"
        },
        options: [
          { en: "Vegan butter or coconut oil", es: "Mantequilla vegana o aceite de coco", de: "Vegane Butter oder Kokosöl", nl: "Veganistische boter of kokosolie" },
          { en: "Lard", es: "Manteca de cerdo", de: "Schmalz", nl: "Reuzel" },
          { en: "Chicken fat", es: "Grasa de pollo", de: "Hühnerfett", nl: "Kippenvet" },
          { en: "Cream", es: "Crema", de: "Sahne", nl: "Room" }
        ],
        correct: 0,
        explanation: {
          en: "Vegan butter made from plant oils or solid coconut oil can replace dairy butter in most baking recipes, providing similar texture and richness.",
          es: "La mantequilla vegana hecha de aceites vegetales o aceite de coco sólido puede reemplazar la mantequilla láctea en la mayoría de recetas de repostería, proporcionando textura y riqueza similares.",
          de: "Vegane Butter aus Pflanzenölen oder festes Kokosöl kann Milchbutter in den meisten Backrezepten ersetzen und ähnliche Textur und Reichhaltigkeit bieten.",
          nl: "Veganistische boter gemaakt van plantenoliën of vaste kokosolie kan zuivelboter vervangen in de meeste bakrecepten, met vergelijkbare textuur en rijkheid."
        }
      },
      {
        question: {
          en: "Which protein is complete and suitable for vegans?",
          es: "¿Qué proteína es completa y adecuada para veganos?",
          de: "Welches Protein ist vollständig und für Veganer geeignet?",
          nl: "Welk eiwit is compleet en geschikt voor veganisten?"
        },
        options: [
          { en: "Quinoa", es: "Quinoa", de: "Quinoa", nl: "Quinoa" },
          { en: "Whey protein", es: "Proteína de suero", de: "Molkenprotein", nl: "Wei-eiwit" },
          { en: "Casein", es: "Caseína", de: "Kasein", nl: "Caseïne" },
          { en: "Collagen", es: "Colágeno", de: "Kollagen", nl: "Collageen" }
        ],
        correct: 0,
        explanation: {
          en: "Quinoa contains all nine essential amino acids, making it a complete protein. Other vegan complete proteins include hemp seeds, chia seeds, and soy products.",
          es: "La quinoa contiene los nueve aminoácidos esenciales, haciéndola una proteína completa. Otras proteínas veganas completas incluyen semillas de cáñamo, semillas de chía y productos de soja.",
          de: "Quinoa enthält alle neun essentiellen Aminosäuren und ist daher ein vollständiges Protein. Andere vegane vollständige Proteine umfassen Hanfsamen, Chiasamen und Sojaprodukte.",
          nl: "Quinoa bevat alle negen essentiële aminozuren, waardoor het een compleet eiwit is. Andere veganistische complete eiwitten zijn hennepzaadjes, chiazaadjes en sojaproducten."
        }
      },
      {
        question: {
          en: "What makes some sugar non-vegan?",
          es: "¿Qué hace que algún azúcar no sea vegano?",
          de: "Was macht manche Zucker nicht vegan?",
          nl: "Wat maakt sommige suiker niet-veganistisch?"
        },
        options: [
          { en: "Bone char filtering process", es: "Proceso de filtrado con carbón de hueso", de: "Knochenkohle-Filterprozess", nl: "Beenderenkoolfilterproces" },
          { en: "Plant-based processing", es: "Procesamiento vegetal", de: "Pflanzliche Verarbeitung", nl: "Plantaardige verwerking" },
          { en: "Natural crystallization", es: "Cristalización natural", de: "Natürliche Kristallisation", nl: "Natuurlijke kristallisatie" },
          { en: "Steam refining", es: "Refinado al vapor", de: "Dampfraffination", nl: "Stoomraffinatie" }
        ],
        correct: 0,
        explanation: {
          en: "Some white sugar is processed using bone char (charred animal bones) to achieve its white color. Vegans can choose organic sugar, coconut sugar, or other alternatives.",
          es: "Algún azúcar blanco se procesa usando carbón de hueso (huesos de animales carbonizados) para lograr su color blanco. Los veganos pueden elegir azúcar orgánico, azúcar de coco u otras alternativas.",
          de: "Manche weiße Zucker wird mit Knochenkohle (verkohlte Tierknochen) verarbeitet, um seine weiße Farbe zu erzielen. Veganer können Bio-Zucker, Kokoszucker oder andere Alternativen wählen.",
          nl: "Sommige witte suiker wordt verwerkt met beenderenkool (verkoold dierenbeen) om zijn witte kleur te krijgen. Veganisten kunnen biologische suiker, kokossuiker of andere alternatieven kiezen."
        }
      },
      {
        question: {
          en: "Which bread ingredient can make bread non-vegetarian?",
          es: "¿Qué ingrediente del pan puede hacer que el pan no sea vegetariano?",
          de: "Welche Brotzutat kann Brot nicht vegetarisch machen?",
          nl: "Welk broodingrediënt kan brood niet-vegetarisch maken?"
        },
        options: [
          { en: "L-cysteine from human hair or bird feathers", es: "L-cisteína de cabello humano o plumas de ave", de: "L-Cystein aus Menschenhaar oder Vogelfedern", nl: "L-cysteïne uit mensenhaar of vogelveren" },
          { en: "Wheat flour", es: "Harina de trigo", de: "Weizenmehl", nl: "Tarwemeel" },
          { en: "Salt", es: "Sal", de: "Salz", nl: "Zout" },
          { en: "Plant-based yeast", es: "Levadura vegetal", de: "Pflanzliche Hefe", nl: "Plantaardige gist" }
        ],
        correct: 0,
        explanation: {
          en: "L-cysteine, a dough conditioner, can be derived from human hair or bird feathers. Vegetarians should look for bread made with plant-based dough conditioners or enzymes.",
          es: "La L-cisteína, un acondicionador de masa, puede derivarse de cabello humano o plumas de ave. Los vegetarianos deben buscar pan hecho con acondicionadores de masa o enzimas vegetales.",
          de: "L-Cystein, ein Teigverbesserer, kann aus Menschenhaar oder Vogelfedern gewonnen werden. Vegetarier sollten nach Brot suchen, das mit pflanzlichen Teigverbesserern oder Enzymen hergestellt wird.",
          nl: "L-cysteïne, een deegverbeteraar, kan afgeleid zijn van mensenhaar of vogelveren. Vegetariërs zouden moeten zoeken naar brood gemaakt met plantaardige deegverbeteraars of enzymen."
        }
      },
      {
        question: {
          en: "What is seitan not suitable for?",
          es: "¿Para qué no es adecuado el seitán?",
          de: "Wofür ist Seitan nicht geeignet?",
          nl: "Waarvoor is seitan niet geschikt?"
        },
        options: [
          { en: "People with celiac disease or gluten sensitivity", es: "Personas con enfermedad celíaca o sensibilidad al gluten", de: "Menschen mit Zöliakie oder Glutensensitivität", nl: "Mensen met coeliakie of glutengevoeligheid" },
          { en: "Vegans", es: "Veganos", de: "Veganer", nl: "Veganisten" },
          { en: "People avoiding soy", es: "Personas que evitan la soja", de: "Menschen, die Soja meiden", nl: "Mensen die soja vermijden" },
          { en: "High-protein diets", es: "Dietas altas en proteína", de: "Proteinreiche Diäten", nl: "Eiwitrijke diëten" }
        ],
        correct: 0,
        explanation: {
          en: "Seitan is made from wheat gluten, making it unsuitable for anyone with celiac disease or gluten sensitivity. It's otherwise a good vegan protein source.",
          es: "El seitán está hecho de gluten de trigo, haciéndolo inadecuado para cualquiera con enfermedad celíaca o sensibilidad al gluten. Por lo demás, es una buena fuente de proteína vegana.",
          de: "Seitan wird aus Weizengluten hergestellt, was es für jeden mit Zöliakie oder Glutensensitivität ungeeignet macht. Ansonsten ist es eine gute vegane Proteinquelle.",
          nl: "Seitan wordt gemaakt van tarwegluten, waardoor het ongeschikt is voor iedereen met coeliakie of glutengevoeligheid. Het is verder een goede veganistische eiwitbron."
        }
      },
      {
        question: {
          en: "Which cooking fat is suitable for both vegans and vegetarians?",
          es: "¿Qué grasa de cocina es adecuada tanto para veganos como vegetarianos?",
          de: "Welches Kochfett ist sowohl für Veganer als auch Vegetarier geeignet?",
          nl: "Welk kookvet is geschikt voor zowel veganisten als vegetariërs?"
        },
        options: [
          { en: "Olive oil", es: "Aceite de oliva", de: "Olivenöl", nl: "Olijfolie" },
          { en: "Butter", es: "Mantequilla", de: "Butter", nl: "Boter" },
          { en: "Lard", es: "Manteca de cerdo", de: "Schmalz", nl: "Reuzel" },
          { en: "Tallow", es: "Sebo", de: "Talg", nl: "Talk" }
        ],
        correct: 0,
        explanation: {
          en: "Plant-based oils like olive, sunflower, canola, and coconut oil are suitable for both vegans and vegetarians as they contain no animal products.",
          es: "Los aceites vegetales como oliva, girasol, canola y coco son adecuados tanto para veganos como vegetarianos ya que no contienen productos animales.",
          de: "Pflanzliche Öle wie Oliven-, Sonnenblumen-, Raps- und Kokosöl sind sowohl für Veganer als auch Vegetarier geeignet, da sie keine tierischen Produkte enthalten.",
          nl: "Plantaardige oliën zoals olijf-, zonnebloem-, koolzaad- en kokosolie zijn geschikt voor zowel veganisten als vegetariërs omdat ze geen dierlijke producten bevatten."
        }
      },
      {
        question: {
          en: "What should vegans look for when choosing dark chocolate?",
          es: "¿Qué deben buscar los veganos al elegir chocolate negro?",
          de: "Worauf sollten Veganer beim Kauf dunkler Schokolade achten?",
          nl: "Waar moeten veganisten op letten bij het kiezen van pure chocolade?"
        },
        options: [
          { en: "No milk powder or butter fat in ingredients", es: "Sin leche en polvo o grasa de mantequilla en los ingredientes", de: "Keine Milchpulver oder Butterfett in den Zutaten", nl: "Geen melkpoeder of botervet in de ingrediënten" },
          { en: "Higher cocoa percentage only", es: "Solo mayor porcentaje de cacao", de: "Nur höherer Kakaoanteil", nl: "Alleen hoger cacaopercentage" },
          { en: "Organic certification", es: "Certificación orgánica", de: "Bio-Zertifizierung", nl: "Biologische certificering" },
          { en: "Fair trade label", es: "Etiqueta de comercio justo", de: "Fair-Trade-Label", nl: "Fairtrade label" }
        ],
        correct: 0,
        explanation: {
          en: "Even dark chocolate can contain milk powder or milk fat. Vegans should read ingredients carefully and look for explicitly vegan-labeled chocolate or those with no dairy ingredients.",
          es: "Incluso el chocolate negro puede contener leche en polvo o grasa láctea. Los veganos deben leer los ingredientes cuidadosamente y buscar chocolate explícitamente etiquetado como vegano o aquellos sin ingredientes lácteos.",
          de: "Auch dunkle Schokolade kann Milchpulver oder Milchfett enthalten. Veganer sollten die Zutaten sorgfältig lesen und nach explizit als vegan beworbener Schokolade oder solcher ohne Milchzutaten suchen.",
          nl: "Zelfs pure chocolade kan melkpoeder of melkvet bevatten. Veganisten moeten ingrediënten zorgvuldig lezen en zoeken naar expliciet als veganistisch gelabelde chocolade of die zonder zuivelingrediënten."
        }
      },
      {
        question: {
          en: "Which type of gelatin alternative is vegan-friendly?",
          es: "¿Qué tipo de alternativa a la gelatina es amigable para veganos?",
          de: "Welche Art von Gelatine-Alternative ist veganfreundlich?",
          nl: "Welk type gelatine alternatief is veganistisch vriendelijk?"
        },
        options: [
          { en: "Agar-agar from seaweed", es: "Agar-agar de algas marinas", de: "Agar-Agar aus Seetang", nl: "Agar-agar uit zeewier" },
          { en: "Regular gelatin from animals", es: "Gelatina regular de animales", de: "Normale Gelatine aus Tieren", nl: "Gewone gelatine uit dieren" },
          { en: "Fish-based gelatin", es: "Gelatina de pescado", de: "Fischbasierte Gelatine", nl: "Op vis gebaseerde gelatine" },
          { en: "Bone-derived gelatin", es: "Gelatina derivada de hueso", de: "Knochenbasierte Gelatine", nl: "Op bot gebaseerde gelatine" }
        ],
        correct: 0,
        explanation: {
          en: "Agar-agar is a plant-based gelling agent made from red seaweed. Other vegan alternatives include carrageenan, pectin, and commercial vegan gelatin substitutes.",
          es: "El agar-agar es un agente gelificante vegetal hecho de algas rojas. Otras alternativas veganas incluyen carragenano, pectina, y sustitutos comerciales de gelatina vegana.",
          de: "Agar-Agar ist ein pflanzliches Geliermittel aus Rotalgen. Andere vegane Alternativen umfassen Carrageen, Pektin und kommerzielle vegane Gelatine-Ersatzstoffe.",
          nl: "Agar-agar is een plantaardig geleermiddel gemaakt van rode zeewieren. Andere veganistische alternatieven zijn carrageen, pectine, en commerciële veganistische gelatine vervangers."
        }
      },
      {
        question: {
          en: "Why might some vegans avoid certain wines and beers?",
          es: "¿Por qué algunos veganos pueden evitar ciertos vinos y cervezas?",
          de: "Warum könnten manche Veganer bestimmte Weine und Biere meiden?",
          nl: "Waarom zouden sommige veganisten bepaalde wijnen en bieren vermijden?"
        },
        options: [
          { en: "They may be filtered using animal products like isinglass", es: "Pueden estar filtrados usando productos animales como cola de pescado", de: "Sie können mit tierischen Produkten wie Hausenblase gefiltert sein", nl: "Ze kunnen gefilterd zijn met dierlijke producten zoals vislijm" },
          { en: "They contain too much alcohol", es: "Contienen demasiado alcohol", de: "Sie enthalten zu viel Alkohol", nl: "Ze bevatten te veel alcohol" },
          { en: "They are made from grains", es: "Están hechos de granos", de: "Sie werden aus Getreide hergestellt", nl: "Ze zijn gemaakt van granen" },
          { en: "They are fermented", es: "Están fermentados", de: "Sie sind fermentiert", nl: "Ze zijn gefermenteerd" }
        ],
        correct: 0,
        explanation: {
          en: "Some alcoholic beverages use animal-derived fining agents like isinglass (fish bladder), egg whites, or gelatin during production. Vegan-certified options are available.",
          es: "Algunas bebidas alcohólicas usan agentes clarificantes derivados de animales como cola de pescado (vejiga de pescado), claras de huevo, o gelatina durante la producción. Hay opciones certificadas como veganas disponibles.",
          de: "Einige alkoholische Getränke verwenden tierische Schönungsmittel wie Hausenblase (Fischblase), Eiweiß oder Gelatine während der Produktion. Vegan-zertifizierte Optionen sind verfügbar.",
          nl: "Sommige alcoholische dranken gebruiken dierlijke klaringsmiddelen zoals vislijm (visblaas), eiwitten, of gelatine tijdens de productie. Veganistisch gecertificeerde opties zijn beschikbaar."
        }
      },
      {
        question: {
          en: "What is the main difference between vegetarian and vegan diets?",
          es: "¿Cuál es la principal diferencia entre las dietas vegetarianas y veganas?",
          de: "Was ist der Hauptunterschied zwischen vegetarischen und veganen Diäten?",
          nl: "Wat is het belangrijkste verschil tussen vegetarische en veganistische diëten?"
        },
        options: [
          { en: "Vegans exclude all animal products, vegetarians may include dairy and eggs", es: "Los veganos excluyen todos los productos animales, los vegetarianos pueden incluir lácteos y huevos", de: "Veganer schließen alle Tierprodukte aus, Vegetarier können Milchprodukte und Eier einschließen", nl: "Veganisten sluiten alle dierlijke producten uit, vegetariërs mogen zuivel en eieren bevatten" },
          { en: "There is no difference", es: "No hay diferencia", de: "Es gibt keinen Unterschied", nl: "Er is geen verschil" },
          { en: "Vegans eat more vegetables", es: "Los veganos comen más verduras", de: "Veganer essen mehr Gemüse", nl: "Veganisten eten meer groenten" },
          { en: "Vegetarians don't eat fruits", es: "Los vegetarianos no comen frutas", de: "Vegetarier essen kein Obst", nl: "Vegetariërs eten geen fruit" }
        ],
        correct: 0,
        explanation: {
          en: "Vegans avoid all animal products including meat, dairy, eggs, honey, and leather. Vegetarians typically avoid meat, fish, and poultry but may consume dairy and eggs.",
          es: "Los veganos evitan todos los productos animales incluyendo carne, lácteos, huevos, miel y cuero. Los vegetarianos típicamente evitan carne, pescado y aves pero pueden consumir lácteos y huevos.",
          de: "Veganer meiden alle Tierprodukte einschließlich Fleisch, Milchprodukte, Eier, Honig und Leder. Vegetarier meiden typischerweise Fleisch, Fisch und Geflügel, können aber Milchprodukte und Eier konsumieren.",
          nl: "Veganisten vermijden alle dierlijke producten inclusief vlees, zuivel, eieren, honing en leer. Vegetariërs vermijden typisch vlees, vis en gevogelte maar kunnen zuivel en eieren consumeren."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  }
  return level6;
})();