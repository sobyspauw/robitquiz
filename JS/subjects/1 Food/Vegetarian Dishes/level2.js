// Vegetarian Dishes Quiz - Level 2: Vegetarian Protein Sources & Nutrition
(function() {
  "use strict";
  const level2 = {
    name: {
      en: "Vegetarian Level 2",
      es: "Vegetariano Nivel 2",
      de: "Vegetarisch Stufe 2",
      nl: "Vegetarisch Level 2"
    },
    questions: [
      {
        question: {
          en: "Which vegetarian food combination creates a complete protein?",
          es: "¿Qué combinación de alimentos vegetarianos crea una proteína completa?",
          de: "Welche vegetarische Lebensmittelkombination schafft ein vollständiges Protein?",
          nl: "Welke vegetarische voedselcombinatie creëert een compleet eiwit?"
        },
        options: [
          { en: "Rice and beans", es: "Arroz y frijoles", de: "Reis und Bohnen", nl: "Rijst en bonen" },
          { en: "Bread and butter", es: "Pan y mantequilla", de: "Brot und Butter", nl: "Brood en boter" },
          { en: "Pasta and cheese", es: "Pasta y queso", de: "Nudeln und Käse", nl: "Pasta en kaas" },
          { en: "Salad and dressing", es: "Ensalada y aderezo", de: "Salat und Dressing", nl: "Salade en dressing" }
        ],
        correct: 0,
        explanation: {
          en: "Rice and beans complement each other perfectly - rice provides methionine while beans provide lysine, together forming a complete protein with all essential amino acids.",
          es: "El arroz y los frijoles se complementan perfectamente - el arroz proporciona metionina mientras los frijoles proporcionan lisina, juntos formando una proteína completa con todos los aminoácidos esenciales.",
          de: "Reis und Bohnen ergänzen sich perfekt - Reis liefert Methionin, während Bohnen Lysin liefern, zusammen bilden sie ein vollständiges Protein mit allen essentiellen Aminosäuren.",
          nl: "Rijst en bonen vullen elkaar perfect aan - rijst levert methionine terwijl bonen lysine leveren, samen vormen ze een compleet eiwit met alle essentiële aminozuren."
        }
      },
      {
        question: {
          en: "Which vitamin is commonly deficient in vegetarian diets?",
          es: "¿Qué vitamina es comúnmente deficiente en las dietas vegetarianas?",
          de: "Welches Vitamin ist häufig in vegetarischen Diäten mangelhaft?",
          nl: "Welke vitamine is vaak tekort in vegetarische diëten?"
        },
        options: [
          { en: "Vitamin B12", es: "Vitamina B12", de: "Vitamin B12", nl: "Vitamine B12" },
          { en: "Vitamin C", es: "Vitamina C", de: "Vitamin C", nl: "Vitamine C" },
          { en: "Vitamin A", es: "Vitamina A", de: "Vitamin A", nl: "Vitamine A" },
          { en: "Vitamin K", es: "Vitamina K", de: "Vitamin K", nl: "Vitamine K" }
        ],
        correct: 0,
        explanation: {
          en: "Vitamin B12 is primarily found in animal products, so vegetarians need to consume fortified foods or supplements to prevent deficiency, which can cause anemia and neurological problems.",
          es: "La vitamina B12 se encuentra principalmente en productos animales, por lo que los vegetarianos necesitan consumir alimentos fortificados o suplementos para prevenir deficiencia, que puede causar anemia y problemas neurológicos.",
          de: "Vitamin B12 findet sich hauptsächlich in tierischen Produkten, daher müssen Vegetarier angereicherte Lebensmittel oder Nahrungsergänzungsmittel konsumieren, um Mangel zu verhindern, der Anämie und neurologische Probleme verursachen kann.",
          nl: "Vitamine B12 komt hoofdzakelijk voor in dierlijke producten, dus vegetariërs moeten verrijkte voedingsmiddelen of supplementen consumeren om tekort te voorkomen, wat bloedarmoede en neurologische problemen kan veroorzaken."
        }
      },
      {
        question: {
          en: "How much protein do hemp seeds contain per ounce?",
          es: "¿Cuánta proteína contienen las semillas de cáñamo por onza?",
          de: "Wie viel Protein enthalten Hanfsamen pro Unze?",
          nl: "Hoeveel eiwit bevatten hennepzaadjes per ons?"
        },
        options: [
          { en: "About 10 grams", es: "Aproximadamente 10 gramos", de: "Etwa 10 Gramm", nl: "Ongeveer 10 gram" },
          { en: "About 5 grams", es: "Aproximadamente 5 gramos", de: "Etwa 5 Gramm", nl: "Ongeveer 5 gram" },
          { en: "About 15 grams", es: "Aproximadamente 15 gramos", de: "Etwa 15 Gramm", nl: "Ongeveer 15 gram" },
          { en: "About 20 grams", es: "Aproximadamente 20 gramos", de: "Etwa 20 Gramm", nl: "Ongeveer 20 gram" }
        ],
        correct: 0,
        explanation: {
          en: "Hemp seeds contain approximately 10 grams of complete protein per ounce, making them an excellent protein source that also provides healthy omega-3 fatty acids.",
          es: "Las semillas de cáñamo contienen aproximadamente 10 gramos de proteína completa por onza, haciéndolas una excelente fuente de proteína que también proporciona ácidos grasos omega-3 saludables.",
          de: "Hanfsamen enthalten etwa 10 Gramm vollständiges Protein pro Unze, was sie zu einer ausgezeichneten Proteinquelle macht, die auch gesunde Omega-3-Fettsäuren liefert.",
          nl: "Hennepzaadjes bevatten ongeveer 10 gram compleet eiwit per ons, waardoor ze een uitstekende eiwitbron zijn die ook gezonde omega-3 vetzuren levert."
        }
      },
      {
        question: {
          en: "Which legume has the highest protein content?",
          es: "¿Qué legumbre tiene el contenido de proteína más alto?",
          de: "Welche Hülsenfrucht hat den höchsten Proteingehalt?",
          nl: "Welke peulvrucht heeft het hoogste eiwitgehalte?"
        },
        options: [
          { en: "Lupini beans", es: "Habas lupini", de: "Lupinenbohnen", nl: "Lupinebonen" },
          { en: "Green peas", es: "Guisantes verdes", de: "Grüne Erbsen", nl: "Groene erwten" },
          { en: "Green beans", es: "Judías verdes", de: "Grüne Bohnen", nl: "Sperziebonen" },
          { en: "Lima beans", es: "Habas lima", de: "Limabohnen", nl: "Limabonen" }
        ],
        correct: 0,
        explanation: {
          en: "Lupini beans contain about 26 grams of protein per cup cooked, making them one of the highest protein legumes. They're popular in Mediterranean cuisine.",
          es: "Las habas lupini contienen aproximadamente 26 gramos de proteína por taza cocida, haciéndolas una de las legumbres con más proteína. Son populares en la cocina mediterránea.",
          de: "Lupinenbohnen enthalten etwa 26 Gramm Protein pro gekochte Tasse, was sie zu einer der proteinreichsten Hülsenfrüchte macht. Sie sind in der mediterranen Küche beliebt.",
          nl: "Lupinebonen bevatten ongeveer 26 gram eiwit per gekookte kop, waardoor ze een van de eiwitrijkste peulvruchten zijn. Ze zijn populair in de mediterrane keuken."
        }
      },
      {
        question: {
          en: "Which mineral is important for vegetarians to monitor for bone health?",
          es: "¿Qué mineral es importante que los vegetarianos monitoreen para la salud ósea?",
          de: "Welches Mineral ist für Vegetarier wichtig zu überwachen für die Knochengesundheit?",
          nl: "Welk mineraal is belangrijk voor vegetariërs om te monitoren voor botgezondheid?"
        },
        options: [
          { en: "Calcium", es: "Calcio", de: "Kalzium", nl: "Calcium" },
          { en: "Sodium", es: "Sodio", de: "Natrium", nl: "Natrium" },
          { en: "Potassium", es: "Potasio", de: "Kalium", nl: "Kalium" },
          { en: "Chloride", es: "Cloruro", de: "Chlorid", nl: "Chloride" }
        ],
        correct: 0,
        explanation: {
          en: "Calcium is crucial for bone health. Vegetarians should include calcium-rich foods like leafy greens, sesame seeds, almonds, and fortified plant milks in their diet.",
          es: "El calcio es crucial para la salud ósea. Los vegetarianos deben incluir alimentos ricos en calcio como verduras de hoja verde, semillas de sésamo, almendras y leches vegetales fortificadas en su dieta.",
          de: "Kalzium ist entscheidend für die Knochengesundheit. Vegetarier sollten kalziumreiche Lebensmittel wie Blattgemüse, Sesamsamen, Mandeln und angereicherte Pflanzenmilch in ihre Ernährung einbeziehen.",
          nl: "Calcium is cruciaal voor botgezondheid. Vegetariërs moeten calciumrijke voedingsmiddelen zoals bladgroenten, sesamzaadjes, amandelen en verrijkte plantenmek in hun dieet opnemen."
        }
      },
      {
        question: {
          en: "What is the protein content of spirulina per tablespoon?",
          es: "¿Cuál es el contenido de proteína de la spirulina por cucharada?",
          de: "Wie ist der Proteingehalt von Spirulina pro Esslöffel?",
          nl: "Wat is het eiwitgehalte van spirulina per eetlepel?"
        },
        options: [
          { en: "About 4 grams", es: "Aproximadamente 4 gramos", de: "Etwa 4 Gramm", nl: "Ongeveer 4 gram" },
          { en: "About 8 grams", es: "Aproximadamente 8 gramos", de: "Etwa 8 Gramm", nl: "Ongeveer 8 gram" },
          { en: "About 2 grams", es: "Aproximadamente 2 gramos", de: "Etwa 2 Gramm", nl: "Ongeveer 2 gram" },
          { en: "About 10 grams", es: "Aproximadamente 10 gramos", de: "Etwa 10 Gramm", nl: "Ongeveer 10 gram" }
        ],
        correct: 0,
        explanation: {
          en: "Spirulina contains about 4 grams of high-quality complete protein per tablespoon, plus iron, B vitamins, and antioxidants, making it a nutritious superfood supplement.",
          es: "La spirulina contiene aproximadamente 4 gramos de proteína completa de alta calidad por cucharada, además de hierro, vitaminas B y antioxidantes, haciéndola un suplemento nutritivo de superalimento.",
          de: "Spirulina enthält etwa 4 Gramm hochwertiges vollständiges Protein pro Esslöffel, plus Eisen, B-Vitamine und Antioxidantien, was es zu einem nahrhaften Superfood-Ergänzungsmittel macht.",
          nl: "Spirulina bevat ongeveer 4 gram hoogwaardig compleet eiwit per eetlepel, plus ijzer, B-vitamines en antioxidanten, waardoor het een voedzaam superfood supplement is."
        }
      },
      {
        question: {
          en: "Which seed is considered a complete protein?",
          es: "¿Qué semilla se considera una proteína completa?",
          de: "Welcher Samen gilt als vollständiges Protein?",
          nl: "Welk zaad wordt beschouwd als een compleet eiwit?"
        },
        options: [
          { en: "Chia seeds", es: "Semillas de chía", de: "Chiasamen", nl: "Chiazaadjes" },
          { en: "Sunflower seeds", es: "Semillas de girasol", de: "Sonnenblumenkerne", nl: "Zonnebloempitten" },
          { en: "Pumpkin seeds", es: "Semillas de calabaza", de: "Kürbiskerne", nl: "Pompoenpitten" },
          { en: "Sesame seeds", es: "Semillas de sésamo", de: "Sesamsamen", nl: "Sesamzaadjes" }
        ],
        correct: 0,
        explanation: {
          en: "Chia seeds are a complete protein containing all essential amino acids. They also provide omega-3 fatty acids, fiber, and calcium.",
          es: "Las semillas de chía son una proteína completa que contiene todos los aminoácidos esenciales. También proporcionan ácidos grasos omega-3, fibra y calcio.",
          de: "Chiasamen sind ein vollständiges Protein, das alle essentiellen Aminosäuren enthält. Sie liefern auch Omega-3-Fettsäuren, Ballaststoffe und Kalzium.",
          nl: "Chiazaadjes zijn een compleet eiwit dat alle essentiële aminozuren bevat. Ze leveren ook omega-3 vetzuren, vezels en calcium."
        }
      },
      {
        question: {
          en: "What is the main nutritional benefit of nutritional yeast?",
          es: "¿Cuál es el principal beneficio nutricional de la levadura nutricional?",
          de: "Was ist der Haupternährungsnutzen von Nährhefe?",
          nl: "Wat is het belangrijkste voedingsvoordeel van voedingsgist?"
        },
        options: [
          { en: "High in B vitamins, especially B12", es: "Alta en vitaminas B, especialmente B12", de: "Reich an B-Vitaminen, besonders B12", nl: "Rijk aan B-vitamines, vooral B12" },
          { en: "High in vitamin C", es: "Alta en vitamina C", de: "Reich an Vitamin C", nl: "Rijk aan vitamine C" },
          { en: "High in calcium", es: "Alta en calcio", de: "Reich an Kalzium", nl: "Rijk aan calcium" },
          { en: "High in iron", es: "Alta en hierro", de: "Reich an Eisen", nl: "Rijk aan ijzer" }
        ],
        correct: 0,
        explanation: {
          en: "Nutritional yeast is an excellent source of B vitamins, particularly B12, which is crucial for vegetarians. It also provides complete protein and has a cheesy flavor.",
          es: "La levadura nutricional es una excelente fuente de vitaminas B, particularmente B12, que es crucial para los vegetarianos. También proporciona proteína completa y tiene un sabor a queso.",
          de: "Nährhefe ist eine ausgezeichnete Quelle für B-Vitamine, besonders B12, was für Vegetarier entscheidend ist. Sie liefert auch vollständiges Protein und hat einen käsigen Geschmack.",
          nl: "Voedingsgist is een uitstekende bron van B-vitamines, vooral B12, wat cruciaal is voor vegetariërs. Het levert ook compleet eiwit en heeft een kaasachtige smaak."
        }
      },
      {
        question: {
          en: "Which vegetarian food has the highest iron content per serving?",
          es: "¿Qué alimento vegetariano tiene el contenido de hierro más alto por porción?",
          de: "Welches vegetarische Lebensmittel hat den höchsten Eisengehalt pro Portion?",
          nl: "Welk vegetarisch voedsel heeft het hoogste ijzergehalte per portie?"
        },
        options: [
          { en: "White beans", es: "Frijoles blancos", de: "Weiße Bohnen", nl: "Witte bonen" },
          { en: "Broccoli", es: "Brócoli", de: "Brokkoli", nl: "Broccoli" },
          { en: "Carrots", es: "Zanahorias", de: "Karotten", nl: "Wortelen" },
          { en: "Apples", es: "Manzanas", de: "Äpfel", nl: "Appels" }
        ],
        correct: 0,
        explanation: {
          en: "White beans provide about 8mg of iron per cup cooked, making them one of the richest plant-based iron sources. Combining with vitamin C enhances absorption.",
          es: "Los frijoles blancos proporcionan aproximadamente 8mg de hierro por taza cocida, haciéndolos una de las fuentes vegetales de hierro más ricas. Combinar con vitamina C mejora la absorción.",
          de: "Weiße Bohnen liefern etwa 8mg Eisen pro gekochte Tasse, was sie zu einer der reichsten pflanzlichen Eisenquellen macht. Die Kombination mit Vitamin C verbessert die Aufnahme.",
          nl: "Witte bonen leveren ongeveer 8mg ijzer per gekookte kop, waardoor ze een van de rijkste plantaardige ijzerbronnen zijn. Combineren met vitamine C verbetert de opname."
        }
      },
      {
        question: {
          en: "What enhances iron absorption from plant foods?",
          es: "¿Qué mejora la absorción de hierro de los alimentos vegetales?",
          de: "Was verbessert die Eisenaufnahme aus pflanzlichen Lebensmitteln?",
          nl: "Wat verbetert ijzeropname uit plantaardig voedsel?"
        },
        options: [
          { en: "Vitamin C", es: "Vitamina C", de: "Vitamin C", nl: "Vitamine C" },
          { en: "Calcium", es: "Calcio", de: "Kalzium", nl: "Calcium" },
          { en: "Coffee", es: "Café", de: "Kaffee", nl: "Koffie" },
          { en: "Tea", es: "Té", de: "Tee", nl: "Thee" }
        ],
        correct: 0,
        explanation: {
          en: "Vitamin C significantly enhances non-heme iron absorption from plant foods. Eating citrus fruits, bell peppers, or tomatoes with iron-rich foods improves absorption.",
          es: "La vitamina C mejora significativamente la absorción de hierro no hemo de los alimentos vegetales. Comer cítricos, pimientos o tomates con alimentos ricos en hierro mejora la absorción.",
          de: "Vitamin C verbessert die Aufnahme von Nicht-Häm-Eisen aus pflanzlichen Lebensmitteln erheblich. Das Essen von Zitrusfrüchten, Paprika oder Tomaten mit eisenreichen Lebensmitteln verbessert die Aufnahme.",
          nl: "Vitamine C verbetert de opname van non-heme ijzer uit plantaardig voedsel aanzienlijk. Citrusvruchten, paprika's of tomaten eten met ijzerrijke voeding verbetert de opname."
        }
      },
      {
        question: {
          en: "Which amino acid is often limiting in plant proteins?",
          es: "¿Qué aminoácido suele ser limitante en las proteínas vegetales?",
          de: "Welche Aminosäure ist oft limitierend in pflanzlichen Proteinen?",
          nl: "Welk aminozuur is vaak limiterend in plantaardige eiwitten?"
        },
        options: [
          { en: "Lysine", es: "Lisina", de: "Lysin", nl: "Lysine" },
          { en: "Alanine", es: "Alanina", de: "Alanin", nl: "Alanine" },
          { en: "Glycine", es: "Glicina", de: "Glycin", nl: "Glycine" },
          { en: "Serine", es: "Serina", de: "Serin", nl: "Serine" }
        ],
        correct: 0,
        explanation: {
          en: "Lysine is often the limiting amino acid in plant proteins, especially grains. This is why combining grains with legumes creates complete proteins.",
          es: "La lisina es a menudo el aminoácido limitante en las proteínas vegetales, especialmente granos. Por eso combinar granos con legumbres crea proteínas completas.",
          de: "Lysin ist oft die limitierende Aminosäure in pflanzlichen Proteinen, besonders Getreide. Deshalb schafft die Kombination von Getreide mit Hülsenfrüchten vollständige Proteine.",
          nl: "Lysine is vaak het limiterende aminozuur in plantaardige eiwitten, vooral granen. Daarom creëert het combineren van granen met peulvruchten complete eiwitten."
        }
      },
      {
        question: {
          en: "What is the protein content of edamame per cup?",
          es: "¿Cuál es el contenido de proteína del edamame por taza?",
          de: "Wie ist der Proteingehalt von Edamame pro Tasse?",
          nl: "Wat is het eiwitgehalte van edamame per kop?"
        },
        options: [
          { en: "About 17 grams", es: "Aproximadamente 17 gramos", de: "Etwa 17 Gramm", nl: "Ongeveer 17 gram" },
          { en: "About 8 grams", es: "Aproximadamente 8 gramos", de: "Etwa 8 Gramm", nl: "Ongeveer 8 gram" },
          { en: "About 25 grams", es: "Aproximadamente 25 gramos", de: "Etwa 25 Gramm", nl: "Ongeveer 25 gram" },
          { en: "About 12 grams", es: "Aproximadamente 12 gramos", de: "Etwa 12 Gramm", nl: "Ongeveer 12 gram" }
        ],
        correct: 0,
        explanation: {
          en: "Edamame (young soybeans) contains about 17 grams of complete protein per cup, along with fiber, folate, and isoflavones that may have health benefits.",
          es: "El edamame (soja joven) contiene aproximadamente 17 gramos de proteína completa por taza, junto con fibra, folato e isoflavonas que pueden tener beneficios para la salud.",
          de: "Edamame (junge Sojabohnen) enthalten etwa 17 Gramm vollständiges Protein pro Tasse, zusammen mit Ballaststoffen, Folsäure und Isoflavonen, die gesundheitliche Vorteile haben können.",
          nl: "Edamame (jonge sojabonen) bevat ongeveer 17 gram compleet eiwit per kop, samen met vezels, folaat en isoflavonen die gezondheidsvoordelen kunnen hebben."
        }
      },
      {
        question: {
          en: "Which vegetarian food is highest in zinc?",
          es: "¿Qué alimento vegetariano tiene más zinc?",
          de: "Welches vegetarische Lebensmittel hat den höchsten Zinkgehalt?",
          nl: "Welk vegetarisch voedsel heeft het hoogste zinkgehalte?"
        },
        options: [
          { en: "Pumpkin seeds", es: "Semillas de calabaza", de: "Kürbiskerne", nl: "Pompoenpitten" },
          { en: "Lettuce", es: "Lechuga", de: "Salat", nl: "Sla" },
          { en: "Watermelon", es: "Sandía", de: "Wassermelone", nl: "Watermeloen" },
          { en: "Celery", es: "Apio", de: "Sellerie", nl: "Selderij" }
        ],
        correct: 0,
        explanation: {
          en: "Pumpkin seeds are one of the best plant sources of zinc, providing about 2.2mg per ounce. Zinc is important for immune function and wound healing.",
          es: "Las semillas de calabaza son una de las mejores fuentes vegetales de zinc, proporcionando aproximadamente 2.2mg por onza. El zinc es importante para la función inmune y la cicatrización de heridas.",
          de: "Kürbiskerne sind eine der besten pflanzlichen Zinkquellen und liefern etwa 2,2 mg pro Unze. Zink ist wichtig für die Immunfunktion und Wundheilung.",
          nl: "Pompoenpitten zijn een van de beste plantaardige zinkbronnen en leveren ongeveer 2,2 mg per ons. Zink is belangrijk voor immuunfunctie en wondgenezing."
        }
      },
      {
        question: {
          en: "What is the recommended daily protein intake for vegetarians?",
          es: "¿Cuál es la ingesta diaria recomendada de proteína para vegetarianos?",
          de: "Wie ist die empfohlene tägliche Proteinzufuhr für Vegetarier?",
          nl: "Wat is de aanbevolen dagelijkse eiwitinname voor vegetariërs?"
        },
        options: [
          { en: "10-15% higher than omnivores due to lower digestibility", es: "10-15% más alto que omnívoros debido a menor digestibilidad", de: "10-15% höher als bei Omnivoren aufgrund geringerer Verdaulichkeit", nl: "10-15% hoger dan omnivoren vanwege lagere verteerbaarheid" },
          { en: "Same as omnivores", es: "Igual que omnívoros", de: "Gleich wie bei Omnivoren", nl: "Hetzelfde als omnivoren" },
          { en: "50% higher than omnivores", es: "50% más alto que omnívoros", de: "50% höher als bei Omnivoren", nl: "50% hoger dan omnivoren" },
          { en: "Half of what omnivores need", es: "La mitad de lo que necesitan los omnívoros", de: "Die Hälfte dessen, was Omnivoren brauchen", nl: "De helft van wat omnivoren nodig hebben" }
        ],
        correct: 0,
        explanation: {
          en: "Vegetarians should aim for 10-15% higher protein intake than omnivores because plant proteins are generally less digestible than animal proteins.",
          es: "Los vegetarianos deben apuntar a una ingesta de proteína 10-15% más alta que los omnívoros porque las proteínas vegetales son generalmente menos digeribles que las proteínas animales.",
          de: "Vegetarier sollten eine 10-15% höhere Proteinzufuhr als Omnivoren anstreben, da pflanzliche Proteine im Allgemeinen weniger verdaulich sind als tierische Proteine.",
          nl: "Vegetariërs zouden moeten streven naar 10-15% hogere eiwitinname dan omnivoren omdat plantaardige eiwitten over het algemeen minder verteerbaar zijn dan dierlijke eiwitten."
        }
      },
      {
        question: {
          en: "Which cooking method can reduce anti-nutrients in legumes?",
          es: "¿Qué método de cocción puede reducir los anti-nutrientes en las legumbres?",
          de: "Welche Kochmethode kann Anti-Nährstoffe in Hülsenfrüchten reduzieren?",
          nl: "Welke kookmethode kan anti-nutriënten in peulvruchten verminderen?"
        },
        options: [
          { en: "Soaking and cooking thoroughly", es: "Remojar y cocinar completamente", de: "Einweichen und gründlich kochen", nl: "Weken en grondig koken" },
          { en: "Eating them raw", es: "Comerlas crudas", de: "Roh essen", nl: "Rauw eten" },
          { en: "Adding more salt", es: "Añadir más sal", de: "Mehr Salz hinzufügen", nl: "Meer zout toevoegen" },
          { en: "Storing in the freezer", es: "Guardar en el congelador", de: "Im Gefrierschrank lagern", nl: "Bewaren in de vriezer" }
        ],
        correct: 0,
        explanation: {
          en: "Soaking legumes for several hours and cooking them thoroughly reduces phytates and lectins, improving nutrient absorption and digestibility.",
          es: "Remojar las legumbres por varias horas y cocinarlas completamente reduce fitatos y lectinas, mejorando la absorción de nutrientes y la digestibilidad.",
          de: "Das Einweichen von Hülsenfrüchten für mehrere Stunden und gründliches Kochen reduziert Phytate und Lektine, verbessert die Nährstoffaufnahme und Verdaulichkeit.",
          nl: "Peulvruchten enkele uren weken en grondig koken vermindert fytaten en lectines, verbetert nutriëntopname en verteerbaarheid."
        }
      },
      {
        question: {
          en: "What is the main protein in wheat that some people cannot digest?",
          es: "¿Cuál es la proteína principal en el trigo que algunas personas no pueden digerir?",
          de: "Was ist das Hauptprotein im Weizen, das manche Menschen nicht verdauen können?",
          nl: "Wat is het hoofdeiwit in tarwe dat sommige mensen niet kunnen verteren?"
        },
        options: [
          { en: "Gluten", es: "Gluten", de: "Gluten", nl: "Gluten" },
          { en: "Casein", es: "Caseína", de: "Kasein", nl: "Caseïne" },
          { en: "Albumin", es: "Albúmina", de: "Albumin", nl: "Albumine" },
          { en: "Keratin", es: "Queratina", de: "Keratin", nl: "Keratine" }
        ],
        correct: 0,
        explanation: {
          en: "Gluten is the main protein complex in wheat, barley, and rye. People with celiac disease or gluten sensitivity must avoid gluten-containing foods.",
          es: "El gluten es el complejo proteico principal en trigo, cebada y centeno. Las personas con enfermedad celíaca o sensibilidad al gluten deben evitar alimentos que contengan gluten.",
          de: "Gluten ist der Hauptproteinkomplex in Weizen, Gerste und Roggen. Menschen mit Zöliakie oder Glutensensitivität müssen glutenhaltige Lebensmittel meiden.",
          nl: "Gluten is het hoofdeiwitcomplex in tarwe, gerst en rogge. Mensen met coeliakie of glutengevoeligheid moeten glutenbevattende voedingsmiddelen vermijden."
        }
      },
      {
        question: {
          en: "Which vegetarian food provides the most omega-3 fatty acids?",
          es: "¿Qué alimento vegetariano proporciona más ácidos grasos omega-3?",
          de: "Welches vegetarische Lebensmittel liefert die meisten Omega-3-Fettsäuren?",
          nl: "Welk vegetarisch voedsel levert de meeste omega-3 vetzuren?"
        },
        options: [
          { en: "Flaxseeds", es: "Semillas de linaza", de: "Leinsamen", nl: "Lijnzaadjes" },
          { en: "White rice", es: "Arroz blanco", de: "Weißer Reis", nl: "Witte rijst" },
          { en: "White bread", es: "Pan blanco", de: "Weißbrot", nl: "Wit brood" },
          { en: "Regular pasta", es: "Pasta regular", de: "Normale Nudeln", nl: "Gewone pasta" }
        ],
        correct: 0,
        explanation: {
          en: "Flaxseeds are one of the richest plant sources of alpha-linolenic acid (ALA), an omega-3 fatty acid. Ground flaxseeds are better absorbed than whole seeds.",
          es: "Las semillas de linaza son una de las fuentes vegetales más ricas en ácido alfa-linolénico (ALA), un ácido graso omega-3. La linaza molida se absorbe mejor que las semillas enteras.",
          de: "Leinsamen sind eine der reichsten pflanzlichen Quellen für Alpha-Linolensäure (ALA), eine Omega-3-Fettsäure. Geschrotete Leinsamen werden besser aufgenommen als ganze Samen.",
          nl: "Lijnzaadjes zijn een van de rijkste plantaardige bronnen van alfa-linoleenzuur (ALA), een omega-3 vetzuur. Gemalen lijnzaadjes worden beter opgenomen dan hele zaadjes."
        }
      },
      {
        question: {
          en: "What is the benefit of combining different plant proteins in the same meal?",
          es: "¿Cuál es el beneficio de combinar diferentes proteínas vegetales en la misma comida?",
          de: "Was ist der Nutzen der Kombination verschiedener pflanzlicher Proteine in derselben Mahlzeit?",
          nl: "Wat is het voordeel van het combineren van verschillende plantaardige eiwitten in dezelfde maaltijd?"
        },
        options: [
          { en: "Creates a complete amino acid profile", es: "Crea un perfil completo de aminoácidos", de: "Schafft ein vollständiges Aminosäureprofil", nl: "Creëert een compleet aminozuurprofiel" },
          { en: "Reduces calories", es: "Reduce calorías", de: "Reduziert Kalorien", nl: "Vermindert calorieën" },
          { en: "Increases fiber only", es: "Solo aumenta la fibra", de: "Erhöht nur Ballaststoffe", nl: "Verhoogt alleen vezels" },
          { en: "Makes food taste better", es: "Hace que la comida sepa mejor", de: "Macht das Essen schmackhafter", nl: "Maakt voedsel lekkerder" }
        ],
        correct: 0,
        explanation: {
          en: "Combining different plant proteins ensures you get all essential amino acids. For example, grains provide methionine while legumes provide lysine.",
          es: "Combinar diferentes proteínas vegetales asegura que obtengas todos los aminoácidos esenciales. Por ejemplo, los granos proporcionan metionina mientras las legumbres proporcionan lisina.",
          de: "Die Kombination verschiedener pflanzlicher Proteine stellt sicher, dass Sie alle essentiellen Aminosäuren erhalten. Zum Beispiel liefern Getreide Methionin, während Hülsenfrüchte Lysin liefern.",
          nl: "Het combineren van verschillende plantaardige eiwitten zorgt ervoor dat je alle essentiële aminozuren krijgt. Bijvoorbeeld, granen leveren methionine terwijl peulvruchten lysine leveren."
        }
      },
      {
        question: {
          en: "Which vegetarian food is considered a superfood due to its complete nutrition profile?",
          es: "¿Qué alimento vegetariano se considera un superalimento debido a su perfil nutricional completo?",
          de: "Welches vegetarische Lebensmittel gilt aufgrund seines vollständigen Ernährungsprofils als Superfood?",
          nl: "Welk vegetarisch voedsel wordt beschouwd als een superfood vanwege zijn complete voedingsprofiel?"
        },
        options: [
          { en: "Quinoa", es: "Quinoa", de: "Quinoa", nl: "Quinoa" },
          { en: "White rice", es: "Arroz blanco", de: "Weißer Reis", nl: "Witte rijst" },
          { en: "Iceberg lettuce", es: "Lechuga iceberg", de: "Eisbergsalat", nl: "IJsbergsla" },
          { en: "White pasta", es: "Pasta blanca", de: "Weiße Nudeln", nl: "Witte pasta" }
        ],
        correct: 0,
        explanation: {
          en: "Quinoa is considered a superfood because it's a complete protein, gluten-free, high in fiber, and contains minerals like iron, magnesium, and phosphorus.",
          es: "La quinoa se considera un superalimento porque es una proteína completa, libre de gluten, alta en fibra y contiene minerales como hierro, magnesio y fósforo.",
          de: "Quinoa gilt als Superfood, weil es ein vollständiges Protein ist, glutenfrei, ballaststoffreich und Mineralien wie Eisen, Magnesium und Phosphor enthält.",
          nl: "Quinoa wordt beschouwd als een superfood omdat het een compleet eiwit is, glutenvrij, rijk aan vezels en mineralen bevat zoals ijzer, magnesium en fosfor."
        }
      },
      {
        question: {
          en: "Which vegetarian food combination creates a complete protein?",
          es: "¿Qué combinación de alimentos vegetarianos crea una proteína completa?",
          de: "Welche vegetarische Lebensmittelkombination schafft ein vollständiges Protein?",
          nl: "Welke vegetarische voedselcombinatie creëert een compleet eiwit?"
        },
        options: [
          { en: "Rice and beans", es: "Arroz y frijoles", de: "Reis und Bohnen", nl: "Rijst en bonen" },
          { en: "Bread and butter", es: "Pan y mantequilla", de: "Brot und Butter", nl: "Brood en boter" },
          { en: "Pasta and cheese", es: "Pasta y queso", de: "Nudeln und Käse", nl: "Pasta en kaas" },
          { en: "Salad and dressing", es: "Ensalada y aderezo", de: "Salat und Dressing", nl: "Salade en dressing" }
        ],
        correct: 0,
        explanation: {
          en: "Rice and beans complement each other perfectly - rice provides methionine while beans provide lysine, together forming a complete protein with all essential amino acids.",
          es: "El arroz y los frijoles se complementan perfectamente - el arroz proporciona metionina mientras los frijoles proporcionan lisina, juntos formando una proteína completa con todos los aminoácidos esenciales.",
          de: "Reis und Bohnen ergänzen sich perfekt - Reis liefert Methionin, während Bohnen Lysin liefern, zusammen bilden sie ein vollständiges Protein mit allen essentiellen Aminosäuren.",
          nl: "Rijst en bonen vullen elkaar perfect aan - rijst levert methionine terwijl bonen lysine leveren, samen vormen ze een compleet eiwit met alle essentiële aminozuren."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  }
  return level2;
})();