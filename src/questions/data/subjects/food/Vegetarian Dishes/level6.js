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
      },
      {
        question: {
          en: "Which vitamin is commonly deficient in vegan diets and requires supplementation?",
          es: "¿Qué vitamina suele ser deficiente en las dietas veganas y requiere suplementación?",
          de: "Welches Vitamin ist in veganen Diäten häufig mangelhaft und erfordert eine Ergänzung?",
          nl: "Welke vitamine is vaak deficiënt in veganistische diëten en vereist supplementatie?"
        },
        options: [
          { en: "Vitamin C", es: "Vitamina C", de: "Vitamin C", nl: "Vitamine C" },
          { en: "Vitamin A", es: "Vitamina A", de: "Vitamin A", nl: "Vitamine A" },
          { en: "Vitamin B12", es: "Vitamina B12", de: "Vitamin B12", nl: "Vitamine B12" },
          { en: "Vitamin E", es: "Vitamina E", de: "Vitamin E", nl: "Vitamine E" }
        ],
        correct: 2,
        explanation: {
          en: "Vitamin B12 is not naturally found in plant foods and must be obtained through fortified foods or supplements. It's essential for nerve function, DNA synthesis, and red blood cell formation.",
          es: "La vitamina B12 no se encuentra naturalmente en alimentos vegetales y debe obtenerse mediante alimentos fortificados o suplementos. Es esencial para la función nerviosa, la síntesis de ADN y la formación de glóbulos rojos.",
          de: "Vitamin B12 kommt natürlicherweise nicht in pflanzlichen Lebensmitteln vor und muss durch angereicherte Lebensmittel oder Nahrungsergänzungsmittel aufgenommen werden. Es ist essentiell für Nervenfunktion, DNA-Synthese und Bildung roter Blutkörperchen.",
          nl: "Vitamine B12 komt van nature niet voor in plantaardig voedsel en moet worden verkregen via verrijkt voedsel of supplementen. Het is essentieel voor zenuwfunctie, DNA-synthese en de vorming van rode bloedcellen."
        }
      },
      {
        question: {
          en: "What is textured vegetable protein (TVP) made from?",
          es: "¿De qué está hecho el proteína vegetal texturizada (TVP)?",
          de: "Woraus besteht texturiertes Pflanzenprotein (TVP)?",
          nl: "Waar is getextureerd plantaardig eiwit (TVP) van gemaakt?"
        },
        options: [
          { en: "Defatted soy flour", es: "Harina de soya desgrasada", de: "Entfettetes Sojamehl", nl: "Ontvet sojameel" },
          { en: "Wheat gluten", es: "Gluten de trigo", de: "Weizengluten", nl: "Tarwegluten" },
          { en: "Mushroom stems", es: "Tallos de hongos", de: "Pilzstiele", nl: "Paddenstoel stelen" },
          { en: "Processed corn", es: "Maíz procesado", de: "Verarbeiteter Mais", nl: "Verwerkte maïs" }
        ],
        correct: 0,
        explanation: {
          en: "TVP is made from defatted soy flour that's been processed and dried. When rehydrated, it has a chewy, meat-like texture and is often used as a ground meat substitute in dishes like chili, tacos, and Bolognese sauce.",
          es: "TVP está hecho de harina de soya desgrasada que ha sido procesada y secada. Cuando se rehidrata, tiene una textura masticable similar a la carne y a menudo se usa como sustituto de carne molida en platos como chili, tacos y salsa boloñesa.",
          de: "TVP wird aus entfettetem Sojamehl hergestellt, das verarbeitet und getrocknet wurde. Bei Rehydrierung hat es eine zähe, fleischähnliche Textur und wird oft als Hackfleischersatz in Gerichten wie Chili, Tacos und Bolognese-Sauce verwendet.",
          nl: "TVP is gemaakt van ontvet sojameel dat is verwerkt en gedroogd. Wanneer gerehydrateerd heeft het een taaie, vleesachtige textuur en wordt vaak gebruikt als gehakt vervanger in gerechten zoals chili, taco's en Bolognese saus."
        }
      },
      {
        question: {
          en: "What is the primary ingredient in traditional Japanese miso paste?",
          es: "¿Cuál es el ingrediente principal en la pasta de miso japonesa tradicional?",
          de: "Was ist die Hauptzutat in traditioneller japanischer Miso-Paste?",
          nl: "Wat is het primaire ingrediënt in traditionele Japanse miso pasta?"
        },
        options: [
          { en: "Rice vinegar", es: "Vinagre de arroz", de: "Reisessig", nl: "Rijstazijn" },
          { en: "Fermented soybeans", es: "Frijoles de soya fermentados", de: "Fermentierte Sojabohnen", nl: "Gefermenteerde sojabonen" },
          { en: "Seaweed extract", es: "Extracto de algas", de: "Algenextrakt", nl: "Zeewier extract" },
          { en: "Mushroom powder", es: "Polvo de hongos", de: "Pilzpulver", nl: "Paddenstoel poeder" }
        ],
        correct: 1,
        explanation: {
          en: "Miso is made from fermented soybeans combined with salt and koji (a type of fungus). It comes in various varieties (white, yellow, red) depending on fermentation time and ingredients, providing umami flavor to soups, marinades, and sauces.",
          es: "Miso está hecho de frijoles de soya fermentados combinados con sal y koji (un tipo de hongo). Viene en varias variedades (blanco, amarillo, rojo) dependiendo del tiempo de fermentación e ingredientes, proporcionando sabor umami a sopas, adobos y salsas.",
          de: "Miso wird aus fermentierten Sojabohnen mit Salz und Koji (eine Pilzart) hergestellt. Es gibt verschiedene Sorten (weiß, gelb, rot) je nach Fermentationszeit und Zutaten, die Umami-Geschmack für Suppen, Marinaden und Saucen liefern.",
          nl: "Miso is gemaakt van gefermenteerde sojabonen gecombineerd met zout en koji (een type schimmel). Het komt in verschillende variëteiten (wit, geel, rood) afhankelijk van fermentatie tijd en ingrediënten, en geeft umami smaak aan soepen, marinades en sauzen."
        }
      },
      {
        question: {
          en: "Which natural food coloring is used to give vegan cheese an orange color?",
          es: "¿Qué colorante alimentario natural se usa para dar al queso vegano un color naranja?",
          de: "Welcher natürliche Lebensmittelfarbstoff wird verwendet, um veganem Käse eine orange Farbe zu verleihen?",
          nl: "Welke natuurlijke voedselkleuring wordt gebruikt om veganistische kaas een oranje kleur te geven?"
        },
        options: [
          { en: "Turmeric", es: "Cúrcuma", de: "Kurkuma", nl: "Kurkuma" },
          { en: "Beetroot juice", es: "Jugo de remolacha", de: "Rote-Bete-Saft", nl: "Bieten sap" },
          { en: "Saffron", es: "Azafrán", de: "Safran", nl: "Saffraan" },
          { en: "Paprika extract", es: "Extracto de pimentón", de: "Paprika-Extrakt", nl: "Paprika extract" }
        ],
        correct: 0,
        explanation: {
          en: "Turmeric is commonly used to give vegan cheese products an orange-yellow color reminiscent of cheddar cheese. It also adds subtle flavor and health benefits. Other colorants like annatto or beta-carotene are also used.",
          es: "La cúrcuma se usa comúnmente para dar a los productos de queso vegano un color amarillo-naranja que recuerda al queso cheddar. También añade sabor sutil y beneficios para la salud. También se usan otros colorantes como annatto o beta-caroteno.",
          de: "Kurkuma wird häufig verwendet, um veganen Käseprodukten eine orange-gelbe Farbe zu verleihen, die an Cheddar-Käse erinnert. Es fügt auch subtilen Geschmack und gesundheitliche Vorteile hinzu. Andere Farbstoffe wie Annatto oder Beta-Carotin werden ebenfalls verwendet.",
          nl: "Kurkuma wordt vaak gebruikt om veganistische kaas producten een oranje-gele kleur te geven die doet denken aan cheddar kaas. Het voegt ook subtiele smaak en gezondheidsvoordelen toe. Andere kleurstoffen zoals annatto of bèta-caroteen worden ook gebruikt."
        }
      },
      {
        question: {
          en: "What is seitan and what gives it its meat-like texture?",
          es: "¿Qué es el seitán y qué le da su textura similar a la carne?",
          de: "Was ist Seitan und was verleiht ihm seine fleischähnliche Textur?",
          nl: "Wat is seitan en wat geeft het zijn vleesachtige textuur?"
        },
        options: [
          { en: "Fermented tofu with added spices", es: "Tofu fermentado con especias añadidas", de: "Fermentierter Tofu mit hinzugefügten Gewürzen", nl: "Gefermenteerde tofu met toegevoegde kruiden" },
          { en: "Wheat gluten protein worked into a dense, chewy mass", es: "Proteína de gluten de trigo trabajada en una masa densa y masticable", de: "Weizengluten-Protein zu einer dichten, zähen Masse verarbeitet", nl: "Tarwegluten eiwit verwerkt tot een dichte, taaie massa" },
          { en: "Compressed mushroom fibers", es: "Fibras de hongos comprimidas", de: "Komprimierte Pilzfasern", nl: "Gecomprimeerde paddenstoel vezels" },
          { en: "Processed soy protein isolate", es: "Aislado de proteína de soya procesado", de: "Verarbeitetes Sojaproteinisolat", nl: "Verwerkt soja-eiwit isolaat" }
        ],
        correct: 1,
        explanation: {
          en: "Seitan is made from wheat gluten (the protein part of wheat) that's been washed to remove starch, then kneaded and cooked. The gluten proteins form elastic strands that create a dense, chewy texture similar to meat. It's high in protein and absorbs flavors well.",
          es: "El seitán está hecho de gluten de trigo (la parte proteica del trigo) que ha sido lavado para eliminar el almidón, luego amasado y cocido. Las proteínas del gluten forman hebras elásticas que crean una textura densa y masticable similar a la carne. Es alto en proteína y absorbe bien los sabores.",
          de: "Seitan wird aus Weizengluten (dem Proteinteil des Weizens) hergestellt, das gewaschen wurde, um Stärke zu entfernen, dann geknetet und gekocht. Die Glutenproteine bilden elastische Stränge, die eine dichte, zähe Textur ähnlich wie Fleisch erzeugen. Es ist proteinreich und nimmt Aromen gut auf.",
          nl: "Seitan is gemaakt van tarwegluten (het eiwit deel van tarwe) dat is gewassen om zetmeel te verwijderen, dan gekneed en gekookt. De gluten eiwitten vormen elastische strengen die een dichte, taaie textuur creëren vergelijkbaar met vlees. Het is hoog in eiwit en absorbeert smaken goed."
        }
      },
      {
        question: {
          en: "Which type of salt is often fortified with iodine to prevent deficiency?",
          es: "¿Qué tipo de sal suele estar fortificada con yodo para prevenir deficiencias?",
          de: "Welche Salzart wird oft mit Jod angereichert, um Mangel vorzubeugen?",
          nl: "Welk type zout is vaak verrijkt met jodium om tekorten te voorkomen?"
        },
        options: [
          { en: "Sea salt", es: "Sal marina", de: "Meersalz", nl: "Zeezout" },
          { en: "Himalayan pink salt", es: "Sal rosa del Himalaya", de: "Rosa Himalaya-Salz", nl: "Himalaya roze zout" },
          { en: "Table salt", es: "Sal de mesa", de: "Tafelsalz", nl: "Tafelzout" },
          { en: "Celtic salt", es: "Sal céltica", de: "Keltisches Salz", nl: "Keltisch zout" }
        ],
        correct: 2,
        explanation: {
          en: "Table salt is commonly fortified with iodine to prevent iodine deficiency disorders. This is especially important for vegans who don't consume iodine-rich seafood or dairy products. Sea salt and specialty salts typically don't contain added iodine.",
          es: "La sal de mesa comúnmente está fortificada con yodo para prevenir trastornos por deficiencia de yodo. Esto es especialmente importante para veganos que no consumen mariscos ricos en yodo o productos lácteos. La sal marina y las sales especiales típicamente no contienen yodo añadido.",
          de: "Tafelsalz wird üblicherweise mit Jod angereichert, um Jodmangelerkrankungen vorzubeugen. Dies ist besonders wichtig für Veganer, die keine jodreichen Meeresfrüchte oder Milchprodukte konsumieren. Meersalz und Spezialsalze enthalten typischerweise kein zugesetztes Jod.",
          nl: "Tafelzout is vaak verrijkt met jodium om jodiumtekort stoornissen te voorkomen. Dit is vooral belangrijk voor veganisten die geen jodium-rijke zeevruchten of zuivelproducten consumeren. Zeezout en speciale zouten bevatten meestal geen toegevoegd jodium."
        }
      },
      {
        question: {
          en: "What gives black salt (kala namak) its distinctive sulfurous, egg-like flavor?",
          es: "¿Qué le da a la sal negra (kala namak) su distintivo sabor sulfuroso similar al huevo?",
          de: "Was verleiht schwarzem Salz (Kala Namak) seinen unverwechselbaren schwefligen, eiähnlichen Geschmack?",
          nl: "Wat geeft zwart zout (kala namak) zijn kenmerkende zwavelachtige, ei-achtige smaak?"
        },
        options: [
          { en: "Iron content", es: "Contenido de hierro", de: "Eisengehalt", nl: "IJzer gehalte" },
          { en: "Sulfur compounds", es: "Compuestos de azufre", de: "Schwefelverbindungen", nl: "Zwavel verbindingen" },
          { en: "Volcanic ash", es: "Ceniza volcánica", de: "Vulkanasche", nl: "Vulkanische as" },
          { en: "Fermented seaweed", es: "Algas fermentadas", de: "Fermentierte Algen", nl: "Gefermenteerd zeewier" }
        ],
        correct: 1,
        explanation: {
          en: "Black salt (kala namak) contains sulfur compounds that give it an egg-like smell and taste, making it popular in vegan egg substitutes like tofu scrambles. It's traditionally made from rock salt heated with charcoal, herbs, and other compounds.",
          es: "La sal negra (kala namak) contiene compuestos de azufre que le dan un olor y sabor similar al huevo, haciéndola popular en sustitutos veganos de huevo como revueltos de tofu. Tradicionalmente se hace de sal de roca calentada con carbón, hierbas y otros compuestos.",
          de: "Schwarzes Salz (Kala Namak) enthält Schwefelverbindungen, die ihm einen eiähnlichen Geruch und Geschmack verleihen, was es in veganen Eiersatzprodukten wie Tofu-Rührei beliebt macht. Es wird traditionell aus Steinsalz hergestellt, das mit Holzkohle, Kräutern und anderen Verbindungen erhitzt wird.",
          nl: "Zwart zout (kala namak) bevat zwavel verbindingen die het een ei-achtige geur en smaak geven, waardoor het populair is in veganistische ei vervangers zoals tofu scrambles. Het wordt traditioneel gemaakt van steenzout verhit met houtskool, kruiden en andere verbindingen."
        }
      },
      {
        question: {
          en: "Which fermented food is made from cabbage and is rich in probiotics?",
          es: "¿Qué alimento fermentado está hecho de repollo y es rico en probióticos?",
          de: "Welches fermentierte Lebensmittel wird aus Kohl hergestellt und ist reich an Probiotika?",
          nl: "Welk gefermenteerd voedsel is gemaakt van kool en is rijk aan probiotica?"
        },
        options: [
          { en: "Kimchi and sauerkraut", es: "Kimchi y chucrut", de: "Kimchi und Sauerkraut", nl: "Kimchi en zuurkool" },
          { en: "Tempeh", es: "Tempeh", de: "Tempeh", nl: "Tempeh" },
          { en: "Miso", es: "Miso", de: "Miso", nl: "Miso" },
          { en: "Kombucha", es: "Kombucha", de: "Kombucha", nl: "Kombucha" }
        ],
        correct: 0,
        explanation: {
          en: "Both kimchi (Korean) and sauerkraut (German) are made from fermented cabbage and contain beneficial probiotics that support digestive health. Kimchi typically includes additional vegetables and spices, while sauerkraut is usually just cabbage and salt.",
          es: "Tanto el kimchi (coreano) como el chucrut (alemán) están hechos de repollo fermentado y contienen probióticos beneficiosos que apoyan la salud digestiva. El kimchi típicamente incluye verduras y especias adicionales, mientras que el chucrut suele ser solo repollo y sal.",
          de: "Sowohl Kimchi (koreanisch) als auch Sauerkraut (deutsch) werden aus fermentiertem Kohl hergestellt und enthalten nützliche Probiotika, die die Verdauungsgesundheit unterstützen. Kimchi enthält normalerweise zusätzliche Gemüse und Gewürze, während Sauerkraut normalerweise nur Kohl und Salz ist.",
          nl: "Zowel kimchi (Koreaans) als zuurkool (Duits) zijn gemaakt van gefermenteerde kool en bevatten nuttige probiotica die de spijsvertering gezondheid ondersteunen. Kimchi bevat meestal extra groenten en kruiden, terwijl zuurkool meestal alleen kool en zout is."
        }
      },
      {
        question: {
          en: "What is the purpose of pressing tofu before cooking?",
          es: "¿Cuál es el propósito de prensar el tofu antes de cocinarlo?",
          de: "Was ist der Zweck des Pressens von Tofu vor dem Kochen?",
          nl: "Wat is het doel van het persen van tofu voor het koken?"
        },
        options: [
          { en: "To make it harder", es: "Para hacerlo más duro", de: "Um es härter zu machen", nl: "Om het harder te maken" },
          { en: "To remove excess water so it can better absorb marinades and achieve crispier texture", es: "Para eliminar el exceso de agua para que pueda absorber mejor los adobos y lograr una textura más crujiente", de: "Um überschüssiges Wasser zu entfernen, damit es Marinaden besser aufnehmen und eine knusprigere Textur erreichen kann", nl: "Om overtollig water te verwijderen zodat het marinades beter kan absorberen en een knapperigere textuur kan bereiken" },
          { en: "To change its color", es: "Para cambiar su color", de: "Um seine Farbe zu ändern", nl: "Om de kleur te veranderen" },
          { en: "To ferment it", es: "Para fermentarlo", de: "Um es zu fermentieren", nl: "Om het te fermenteren" }
        ],
        correct: 1,
        explanation: {
          en: "Pressing tofu removes excess moisture, allowing it to better absorb marinades and flavors. It also helps achieve a firmer, crispier texture when cooking, especially for frying or baking. This is particularly important for firm and extra-firm tofu.",
          es: "Prensar el tofu elimina el exceso de humedad, permitiéndole absorber mejor los adobos y sabores. También ayuda a lograr una textura más firme y crujiente al cocinar, especialmente para freír u hornear. Esto es particularmente importante para el tofu firme y extra firme.",
          de: "Das Pressen von Tofu entfernt überschüssige Feuchtigkeit und ermöglicht es ihm, Marinaden und Aromen besser aufzunehmen. Es hilft auch, beim Kochen eine festere, knusprigere Textur zu erreichen, besonders beim Braten oder Backen. Dies ist besonders wichtig für festen und extra-festen Tofu.",
          nl: "Het persen van tofu verwijdert overtollig vocht, waardoor het marinades en smaken beter kan absorberen. Het helpt ook om een stevigere, knapperigere textuur te bereiken bij het koken, vooral voor bakken of braden. Dit is vooral belangrijk voor stevige en extra-stevige tofu."
        }
      },
      {
        question: {
          en: "Which nut is traditionally used to make dairy-free Parmesan cheese?",
          es: "¿Qué fruto seco se usa tradicionalmente para hacer queso parmesano sin lácteos?",
          de: "Welche Nuss wird traditionell zur Herstellung von milchfreiem Parmesan-Käse verwendet?",
          nl: "Welke noot wordt traditioneel gebruikt om zuivelvrije Parmezaanse kaas te maken?"
        },
        options: [
          { en: "Cashews", es: "Anacardos", de: "Cashewnüsse", nl: "Cashewnoten" },
          { en: "Almonds", es: "Almendras", de: "Mandeln", nl: "Amandelen" },
          { en: "Walnuts", es: "Nueces", de: "Walnüsse", nl: "Walnoten" },
          { en: "Brazil nuts", es: "Nueces de Brasil", de: "Paranüsse", nl: "Paranoten" }
        ],
        correct: 0,
        explanation: {
          en: "Cashews are commonly used to make vegan Parmesan cheese due to their creamy texture and mild flavor. When blended with nutritional yeast, garlic powder, and salt, they create a convincing cheese-like topping for pasta and other dishes.",
          es: "Los anacardos se usan comúnmente para hacer queso parmesano vegano debido a su textura cremosa y sabor suave. Cuando se mezclan con levadura nutricional, ajo en polvo y sal, crean un aderezo convincente similar al queso para pasta y otros platos.",
          de: "Cashewnüsse werden häufig zur Herstellung von veganem Parmesan-Käse verwendet, da sie eine cremige Textur und milden Geschmack haben. Wenn sie mit Nährhefe, Knoblauchpulver und Salz gemischt werden, erzeugen sie ein überzeugendes käseähnliches Topping für Pasta und andere Gerichte.",
          nl: "Cashewnoten worden vaak gebruikt om veganistische Parmezaanse kaas te maken vanwege hun romige textuur en milde smaak. Wanneer gemengd met voedingsgist, knoflookpoeder en zout, creëren ze een overtuigende kaas-achtige topping voor pasta en andere gerechten."
        }
      },
      {
        question: {
          en: "What is the main protein source in traditional Indonesian tempeh?",
          es: "¿Cuál es la principal fuente de proteína en el tempeh indonesio tradicional?",
          de: "Was ist die Hauptproteinquelle in traditionellem indonesischem Tempeh?",
          nl: "Wat is de belangrijkste eiwit bron in traditionele Indonesische tempeh?"
        },
        options: [
          { en: "Fermented soybeans", es: "Frijoles de soya fermentados", de: "Fermentierte Sojabohnen", nl: "Gefermenteerde sojabonen" },
          { en: "Rice", es: "Arroz", de: "Reis", nl: "Rijst" },
          { en: "Wheat", es: "Trigo", de: "Weizen", nl: "Tarwe" },
          { en: "Peanuts", es: "Cacahuetes", de: "Erdnüsse", nl: "Pinda's" }
        ],
        correct: 0,
        explanation: {
          en: "Tempeh is made from whole fermented soybeans bound together by a white mycelium from Rhizopus mold. The fermentation process makes the soybeans more digestible and increases B-vitamin content. Tempeh has a firm texture and nutty flavor, making it versatile for many dishes.",
          es: "El tempeh está hecho de frijoles de soya enteros fermentados unidos por un micelio blanco del moho Rhizopus. El proceso de fermentación hace que los frijoles de soya sean más digeribles y aumenta el contenido de vitamina B. El tempeh tiene una textura firme y sabor a nuez, haciéndolo versátil para muchos platos.",
          de: "Tempeh wird aus ganzen fermentierten Sojabohnen hergestellt, die durch ein weißes Myzel des Rhizopus-Schimmels zusammengebunden sind. Der Fermentationsprozess macht die Sojabohnen verdaulicher und erhöht den B-Vitamin-Gehalt. Tempeh hat eine feste Textur und nussigen Geschmack, was es für viele Gerichte vielseitig macht.",
          nl: "Tempeh is gemaakt van hele gefermenteerde sojabonen samengevoegd door een wit mycelium van Rhizopus schimmel. Het fermentatie proces maakt de sojabonen beter verteerbaar en verhoogt het B-vitamine gehalte. Tempeh heeft een stevige textuur en nootachtige smaak, waardoor het veelzijdig is voor veel gerechten."
        }
      },
      {
        question: {
          en: "Which plant-based milk has the highest protein content comparable to cow's milk?",
          es: "¿Qué leche de origen vegetal tiene el mayor contenido de proteína comparable a la leche de vaca?",
          de: "Welche pflanzliche Milch hat den höchsten Proteingehalt vergleichbar mit Kuhmilch?",
          nl: "Welke plantaardige melk heeft het hoogste eiwit gehalte vergelijkbaar met koemelk?"
        },
        options: [
          { en: "Almond milk", es: "Leche de almendra", de: "Mandelmilch", nl: "Amandelmelk" },
          { en: "Soy milk", es: "Leche de soya", de: "Sojamilch", nl: "Sojamelk" },
          { en: "Coconut milk", es: "Leche de coco", de: "Kokosmilch", nl: "Kokosmelk" },
          { en: "Rice milk", es: "Leche de arroz", de: "Reismilch", nl: "Rijstmelk" }
        ],
        correct: 1,
        explanation: {
          en: "Soy milk has about 7-9 grams of protein per cup, similar to cow's milk, making it the highest protein plant-based milk option. Almond milk typically has only 1-2 grams per cup, while rice and coconut milks have even less protein.",
          es: "La leche de soya tiene alrededor de 7-9 gramos de proteína por taza, similar a la leche de vaca, haciéndola la opción de leche de origen vegetal con más proteína. La leche de almendra típicamente tiene solo 1-2 gramos por taza, mientras que las leches de arroz y coco tienen aún menos proteína.",
          de: "Sojamilch hat etwa 7-9 Gramm Protein pro Tasse, ähnlich wie Kuhmilch, was sie zur proteinreichsten pflanzlichen Milchoption macht. Mandelmilch hat typischerweise nur 1-2 Gramm pro Tasse, während Reis- und Kokosmilch noch weniger Protein haben.",
          nl: "Sojamelk heeft ongeveer 7-9 gram eiwit per kopje, vergelijkbaar met koemelk, waardoor het de hoogste eiwit plantaardige melk optie is. Amandelmelk heeft meestal slechts 1-2 gram per kopje, terwijl rijst- en kokosmelk nog minder eiwit hebben."
        }
      },
      {
        question: {
          en: "What is jackfruit commonly used as a substitute for in vegan cooking?",
          es: "¿Para qué se usa comúnmente la jaca como sustituto en la cocina vegana?",
          de: "Wofür wird Jackfrucht häufig als Ersatz in der veganen Küche verwendet?",
          nl: "Waarvoor wordt jackfruit vaak gebruikt als vervanger in veganistisch koken?"
        },
        options: [
          { en: "Ground beef", es: "Carne molida", de: "Hackfleisch", nl: "Gehakt" },
          { en: "Pulled pork or shredded chicken", es: "Cerdo desmenuzado o pollo desmenuzado", de: "Pulled Pork oder zerkleinertes Hähnchen", nl: "Pulled pork of geschredderde kip" },
          { en: "Fish fillets", es: "Filetes de pescado", de: "Fischfilets", nl: "Visfilets" },
          { en: "Bacon", es: "Tocino", de: "Speck", nl: "Bacon" }
        ],
        correct: 1,
        explanation: {
          en: "Young, unripe jackfruit has a stringy, fibrous texture that mimics pulled pork or shredded chicken when cooked. It's neutral in flavor, making it excellent for absorbing marinades and sauces. It's commonly used in BBQ sandwiches, tacos, and curries.",
          es: "La jaca joven e inmadura tiene una textura fibrosa y fibrosa que imita el cerdo desmenuzado o el pollo desmenuzado cuando se cocina. Tiene sabor neutral, haciéndola excelente para absorber adobos y salsas. Se usa comúnmente en sándwiches BBQ, tacos y curry.",
          de: "Junge, unreife Jackfrucht hat eine faserige Textur, die Pulled Pork oder zerkleinertes Hähnchen beim Kochen nachahmt. Sie hat einen neutralen Geschmack, was sie hervorragend für die Aufnahme von Marinaden und Saucen macht. Sie wird häufig in BBQ-Sandwiches, Tacos und Currys verwendet.",
          nl: "Jonge, onrijpe jackfruit heeft een vezelige textuur die pulled pork of geschredderde kip nabootst wanneer gekookt. Het heeft een neutrale smaak, waardoor het uitstekend is voor het absorberen van marinades en sauzen. Het wordt vaak gebruikt in BBQ sandwiches, taco's en curry's."
        }
      },
      {
        question: {
          en: "Which acid is commonly used to curdle plant milk when making vegan cheese?",
          es: "¿Qué ácido se usa comúnmente para cuajar la leche vegetal al hacer queso vegano?",
          de: "Welche Säure wird häufig verwendet, um Pflanzenmilch bei der Herstellung von veganem Käse gerinnen zu lassen?",
          nl: "Welk zuur wordt vaak gebruikt om plantaardige melk te laten stremmen bij het maken van veganistische kaas?"
        },
        options: [
          { en: "Hydrochloric acid", es: "Ácido clorhídrico", de: "Salzsäure", nl: "Zoutzuur" },
          { en: "Lemon juice or vinegar", es: "Jugo de limón o vinagre", de: "Zitronensaft oder Essig", nl: "Citroensap of azijn" },
          { en: "Sulfuric acid", es: "Ácido sulfúrico", de: "Schwefelsäure", nl: "Zwavelzuur" },
          { en: "Boric acid", es: "Ácido bórico", de: "Borsäure", nl: "Boorzuur" }
        ],
        correct: 1,
        explanation: {
          en: "Lemon juice, vinegar, or other mild food-grade acids are used to curdle plant-based milks (especially soy milk) when making vegan cheese, similar to how rennet or acid curdles dairy milk. The acid causes proteins to coagulate and separate from the liquid.",
          es: "El jugo de limón, vinagre u otros ácidos suaves de grado alimenticio se usan para cuajar leches de origen vegetal (especialmente leche de soya) al hacer queso vegano, similar a cómo el cuajo o ácido cuaja la leche láctea. El ácido hace que las proteínas se coagulen y separen del líquido.",
          de: "Zitronensaft, Essig oder andere milde Lebensmittelsäuren werden verwendet, um pflanzliche Milch (besonders Sojamilch) bei der Herstellung von veganem Käse gerinnen zu lassen, ähnlich wie Lab oder Säure Milchprodukte gerinnen lässt. Die Säure bewirkt, dass Proteine koagulieren und sich von der Flüssigkeit trennen.",
          nl: "Citroensap, azijn of andere milde voedselzuren worden gebruikt om plantaardige melk (vooral sojamelk) te laten stremmen bij het maken van veganistische kaas, vergelijkbaar met hoe stremsel of zuur zuivelmelk laat stremmen. Het zuur zorgt ervoor dat eiwitten coaguleren en scheiden van de vloeistof."
        }
      },
      {
        question: {
          en: "What is the main benefit of soaking and sprouting legumes before eating?",
          es: "¿Cuál es el principal beneficio de remojar y germinar legumbres antes de comerlas?",
          de: "Was ist der Hauptvorteil des Einweichens und Keimens von Hülsenfrüchten vor dem Verzehr?",
          nl: "Wat is het belangrijkste voordeel van het weken en ontkiemen van peulvruchten voor het eten?"
        },
        options: [
          { en: "Makes them sweeter", es: "Las hace más dulces", de: "Macht sie süßer", nl: "Maakt ze zoeter" },
          { en: "Reduces antinutrients and improves digestibility", es: "Reduce antinutrientes y mejora la digestibilidad", de: "Reduziert Antinutrients und verbessert die Verdaulichkeit", nl: "Vermindert antinutriënten en verbetert de verteerbaarheid" },
          { en: "Changes their color", es: "Cambia su color", de: "Ändert ihre Farbe", nl: "Verandert hun kleur" },
          { en: "Increases fat content", es: "Aumenta el contenido de grasa", de: "Erhöht den Fettgehalt", nl: "Verhoogt het vetgehalte" }
        ],
        correct: 1,
        explanation: {
          en: "Soaking and sprouting legumes reduces phytic acid and other antinutrients that can interfere with mineral absorption. It also makes them easier to digest, reduces cooking time, and increases the availability of certain vitamins. This process is especially beneficial for beans, lentils, and chickpeas.",
          es: "Remojar y germinar legumbres reduce el ácido fítico y otros antinutrientes que pueden interferir con la absorción de minerales. También las hace más fáciles de digerir, reduce el tiempo de cocción y aumenta la disponibilidad de ciertas vitaminas. Este proceso es especialmente beneficioso para frijoles, lentejas y garbanzos.",
          de: "Das Einweichen und Keimen von Hülsenfrüchten reduziert Phytinsäure und andere Antinutrients, die die Mineralabsorption beeinträchtigen können. Es macht sie auch leichter verdaulich, verkürzt die Kochzeit und erhöht die Verfügbarkeit bestimmter Vitamine. Dieser Prozess ist besonders vorteilhaft für Bohnen, Linsen und Kichererbsen.",
          nl: "Het weken en ontkiemen van peulvruchten vermindert fytinezuur en andere antinutriënten die de mineraal absorptie kunnen verstoren. Het maakt ze ook gemakkelijker te verteren, vermindert de kooktijd en verhoogt de beschikbaarheid van bepaalde vitamines. Dit proces is vooral gunstig voor bonen, linzen en kikkererwten."
        }
      },
      {
        question: {
          en: "Which mushroom variety is known for its meaty texture and umami flavor?",
          es: "¿Qué variedad de hongo es conocida por su textura carnosa y sabor umami?",
          de: "Welche Pilzsorte ist für ihre fleischige Textur und Umami-Geschmack bekannt?",
          nl: "Welke paddenstoel variëteit staat bekend om zijn vleesachtige textuur en umami smaak?"
        },
        options: [
          { en: "White button mushrooms", es: "Champiñones blancos", de: "Weiße Champignons", nl: "Witte champignons" },
          { en: "Portobello and shiitake mushrooms", es: "Hongos portobello y shiitake", de: "Portobello- und Shiitake-Pilze", nl: "Portobello en shiitake paddenstoelen" },
          { en: "Enoki mushrooms", es: "Hongos enoki", de: "Enoki-Pilze", nl: "Enoki paddenstoelen" },
          { en: "Oyster mushrooms", es: "Hongos ostra", de: "Austernpilze", nl: "Oester paddenstoelen" }
        ],
        correct: 1,
        explanation: {
          en: "Portobello mushrooms have a dense, meaty texture perfect for grilling or as burger patties. Shiitake mushrooms are prized for their rich umami flavor. Both are excellent meat substitutes in vegetarian cooking, providing savory depth to dishes.",
          es: "Los hongos portobello tienen una textura densa y carnosa perfecta para asar o como hamburguesas. Los hongos shiitake son valorados por su rico sabor umami. Ambos son excelentes sustitutos de carne en la cocina vegetariana, proporcionando profundidad sabrosa a los platos.",
          de: "Portobello-Pilze haben eine dichte, fleischige Textur, die sich perfekt zum Grillen oder als Burger-Patties eignet. Shiitake-Pilze werden für ihren reichhaltigen Umami-Geschmack geschätzt. Beide sind ausgezeichnete Fleischersatzstoffe in der vegetarischen Küche und verleihen Gerichten herzhafte Tiefe.",
          nl: "Portobello paddenstoelen hebben een dichte, vleesachtige textuur perfect voor grillen of als burger patties. Shiitake paddenstoelen worden gewaardeerd om hun rijke umami smaak. Beide zijn uitstekende vlees vervangers in vegetarisch koken, die hartige diepte geven aan gerechten."
        }
      },
      {
        question: {
          en: "What is the purpose of nutritional yeast in vegan cooking?",
          es: "¿Cuál es el propósito de la levadura nutricional en la cocina vegana?",
          de: "Was ist der Zweck von Nährhefe in der veganen Küche?",
          nl: "Wat is het doel van voedingsgist in veganistisch koken?"
        },
        options: [
          { en: "To make bread rise", es: "Para hacer que el pan suba", de: "Um Brot aufgehen zu lassen", nl: "Om brood te laten rijzen" },
          { en: "To provide cheesy, umami flavor and B-vitamins", es: "Para proporcionar sabor a queso, umami y vitaminas B", de: "Um käsigen Umami-Geschmack und B-Vitamine zu liefern", nl: "Om kaasachtige, umami smaak en B-vitamines te bieden" },
          { en: "To ferment vegetables", es: "Para fermentar verduras", de: "Um Gemüse zu fermentieren", nl: "Om groenten te fermenteren" },
          { en: "To thicken sauces", es: "Para espesar salsas", de: "Um Saucen zu verdicken", nl: "Om sauzen te verdikken" }
        ],
        correct: 1,
        explanation: {
          en: "Nutritional yeast is an inactive yeast with a savory, cheese-like flavor that adds umami depth to vegan dishes. It's often fortified with B-vitamins, including B12, making it valuable for vegan diets. It's used in vegan cheese sauces, as a topping, and in many recipes.",
          es: "La levadura nutricional es una levadura inactiva con un sabor sabroso similar al queso que añade profundidad umami a los platos veganos. A menudo está fortificada con vitaminas B, incluyendo B12, haciéndola valiosa para dietas veganas. Se usa en salsas de queso veganas, como aderezo y en muchas recetas.",
          de: "Nährhefe ist eine inaktive Hefe mit einem herzhaften, käseähnlichen Geschmack, der veganen Gerichten Umami-Tiefe verleiht. Sie ist oft mit B-Vitaminen, einschließlich B12, angereichert, was sie für vegane Ernährung wertvoll macht. Sie wird in veganen Käsesaucen, als Topping und in vielen Rezepten verwendet.",
          nl: "Voedingsgist is een inactieve gist met een hartige, kaasachtige smaak die umami diepte toevoegt aan veganistische gerechten. Het is vaak verrijkt met B-vitamines, inclusief B12, waardoor het waardevol is voor veganistische diëten. Het wordt gebruikt in veganistische kaas sauzen, als topping en in veel recepten."
        }
      },
      {
        question: {
          en: "Which legume is highest in protein content per cooked cup?",
          es: "¿Qué legumbre tiene el mayor contenido de proteína por taza cocida?",
          de: "Welche Hülsenfrucht hat den höchsten Proteingehalt pro gekochter Tasse?",
          nl: "Welke peulvrucht heeft het hoogste eiwit gehalte per gekookte kop?"
        },
        options: [
          { en: "Chickpeas", es: "Garbanzos", de: "Kichererbsen", nl: "Kikkererwten" },
          { en: "Lentils", es: "Lentejas", de: "Linsen", nl: "Linzen" },
          { en: "Soybeans (edamame)", es: "Frijoles de soya (edamame)", de: "Sojabohnen (Edamame)", nl: "Sojabonen (edamame)" },
          { en: "Black beans", es: "Frijoles negros", de: "Schwarze Bohnen", nl: "Zwarte bonen" }
        ],
        correct: 2,
        explanation: {
          en: "Soybeans (edamame) contain about 18-20 grams of protein per cooked cup, making them the highest protein legume. Lentils have about 18 grams, chickpeas about 15 grams, and black beans about 15 grams per cup. Soybeans are also a complete protein containing all essential amino acids.",
          es: "Los frijoles de soya (edamame) contienen alrededor de 18-20 gramos de proteína por taza cocida, haciéndolos la legumbre con más proteína. Las lentejas tienen alrededor de 18 gramos, los garbanzos alrededor de 15 gramos y los frijoles negros alrededor de 15 gramos por taza. Los frijoles de soya también son una proteína completa que contiene todos los aminoácidos esenciales.",
          de: "Sojabohnen (Edamame) enthalten etwa 18-20 Gramm Protein pro gekochter Tasse, was sie zur proteinreichsten Hülsenfrucht macht. Linsen haben etwa 18 Gramm, Kichererbsen etwa 15 Gramm und schwarze Bohnen etwa 15 Gramm pro Tasse. Sojabohnen sind auch ein vollständiges Protein, das alle essentiellen Aminosäuren enthält.",
          nl: "Sojabonen (edamame) bevatten ongeveer 18-20 gram eiwit per gekookte kop, waardoor ze de hoogste eiwit peulvrucht zijn. Linzen hebben ongeveer 18 gram, kikkererwten ongeveer 15 gram en zwarte bonen ongeveer 15 gram per kop. Sojabonen zijn ook een compleet eiwit dat alle essentiële aminozuren bevat."
        }
      },
      {
        question: {
          en: "What makes a protein \"complete\" versus \"incomplete\"?",
          es: "¿Qué hace que una proteína sea \"completa\" versus \"incompleta\"?",
          de: "Was macht ein Protein \"vollständig\" versus \"unvollständig\"?",
          nl: "Wat maakt een eiwit \"compleet\" versus \"incompleet\"?"
        },
        options: [
          { en: "How much protein it contains", es: "Cuánta proteína contiene", de: "Wie viel Protein es enthält", nl: "Hoeveel eiwit het bevat" },
          { en: "Whether it contains all nine essential amino acids in adequate amounts", es: "Si contiene los nueve aminoácidos esenciales en cantidades adecuadas", de: "Ob es alle neun essentiellen Aminosäuren in ausreichenden Mengen enthält", nl: "Of het alle negen essentiële aminozuren in voldoende hoeveelheden bevat" },
          { en: "Whether it's from animal or plant sources", es: "Si es de fuentes animales o vegetales", de: "Ob es aus tierischen oder pflanzlichen Quellen stammt", nl: "Of het van dierlijke of plantaardige bronnen komt" },
          { en: "How easy it is to digest", es: "Qué tan fácil es de digerir", de: "Wie leicht es verdaulich ist", nl: "Hoe gemakkelijk het te verteren is" }
        ],
        correct: 1,
        explanation: {
          en: "Complete proteins contain all nine essential amino acids that the body cannot produce. Most animal proteins are complete, while most plant proteins are incomplete (except soy, quinoa, buckwheat, and hemp seeds). Vegans can obtain complete protein by combining complementary plant proteins throughout the day.",
          es: "Las proteínas completas contienen los nueve aminoácidos esenciales que el cuerpo no puede producir. La mayoría de las proteínas animales son completas, mientras que la mayoría de las proteínas vegetales son incompletas (excepto soya, quinua, trigo sarraceno y semillas de cáñamo). Los veganos pueden obtener proteína completa combinando proteínas vegetales complementarias a lo largo del día.",
          de: "Vollständige Proteine enthalten alle neun essentiellen Aminosäuren, die der Körper nicht produzieren kann. Die meisten tierischen Proteine sind vollständig, während die meisten pflanzlichen Proteine unvollständig sind (außer Soja, Quinoa, Buchweizen und Hanfsamen). Veganer können vollständige Proteine erhalten, indem sie im Laufe des Tages komplementäre pflanzliche Proteine kombinieren.",
          nl: "Complete eiwitten bevatten alle negen essentiële aminozuren die het lichaam niet kan produceren. De meeste dierlijke eiwitten zijn compleet, terwijl de meeste plantaardige eiwitten incompleet zijn (behalve soja, quinoa, boekweit en hennepzaden). Veganisten kunnen compleet eiwit verkrijgen door aanvullende plantaardige eiwitten gedurende de dag te combineren."
        }
      },
      {
        question: {
          en: "Which cooking method helps preserve the most nutrients in vegetables?",
          es: "¿Qué método de cocción ayuda a preservar la mayoría de los nutrientes en las verduras?",
          de: "Welche Kochmethode hilft, die meisten Nährstoffe in Gemüse zu bewahren?",
          nl: "Welke kookmethode helpt de meeste voedingsstoffen in groenten te bewaren?"
        },
        options: [
          { en: "Boiling in large amounts of water", es: "Hervir en grandes cantidades de agua", de: "Kochen in großen Wassermengen", nl: "Koken in grote hoeveelheden water" },
          { en: "Steaming or quick stir-frying", es: "Cocción al vapor o salteado rápido", de: "Dämpfen oder schnelles Pfannenrühren", nl: "Stomen of snel roerbakken" },
          { en: "Deep frying", es: "Freír en abundante aceite", de: "Frittieren", nl: "Frituren" },
          { en: "Overcooking until very soft", es: "Cocinar en exceso hasta que esté muy blando", de: "Überkochen bis sehr weich", nl: "Overkoken tot zeer zacht" }
        ],
        correct: 1,
        explanation: {
          en: "Steaming and quick stir-frying preserve more nutrients because they use less water and shorter cooking times. Boiling causes water-soluble vitamins (B and C) to leach into the water. Raw consumption is ideal for some vegetables, but light cooking can actually increase the bioavailability of certain nutrients like lycopene and beta-carotene.",
          es: "La cocción al vapor y el salteado rápido preservan más nutrientes porque usan menos agua y tiempos de cocción más cortos. Hervir hace que las vitaminas solubles en agua (B y C) se filtren en el agua. El consumo crudo es ideal para algunas verduras, pero la cocción ligera puede aumentar la biodisponibilidad de ciertos nutrientes como licopeno y beta-caroteno.",
          de: "Dämpfen und schnelles Pfannenrühren bewahren mehr Nährstoffe, da sie weniger Wasser und kürzere Garzeiten verwenden. Kochen führt dazu, dass wasserlösliche Vitamine (B und C) ins Wasser auslaugen. Rohverzehr ist für einige Gemüse ideal, aber leichtes Kochen kann tatsächlich die Bioverfügbarkeit bestimmter Nährstoffe wie Lycopin und Beta-Carotin erhöhen.",
          nl: "Stomen en snel roerbakken behouden meer voedingsstoffen omdat ze minder water en kortere kooktijden gebruiken. Koken zorgt ervoor dat water-oplosbare vitamines (B en C) in het water lekken. Rauwe consumptie is ideaal voor sommige groenten, maar licht koken kan eigenlijk de biologische beschikbaarheid van bepaalde voedingsstoffen zoals lycopeen en bèta-caroteen verhogen."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  }
  return level6;
})();