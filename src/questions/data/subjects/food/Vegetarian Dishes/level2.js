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
      },
      {
        question: {
          en: "How much protein does tempeh contain per 3-ounce serving?",
          es: "¿Cuánta proteína contiene el tempeh por porción de 3 onzas?",
          de: "Wie viel Protein enthält Tempeh pro 3-Unzen-Portion?",
          nl: "Hoeveel eiwit bevat tempeh per 85 gram portie?"
        },
        options: [
          { en: "About 15 grams", es: "Aproximadamente 15 gramos", de: "Etwa 15 Gramm", nl: "Ongeveer 15 gram" },
          { en: "About 5 grams", es: "Aproximadamente 5 gramos", de: "Etwa 5 Gramm", nl: "Ongeveer 5 gram" },
          { en: "About 25 grams", es: "Aproximadamente 25 gramos", de: "Etwa 25 Gramm", nl: "Ongeveer 25 gram" },
          { en: "About 30 grams", es: "Aproximadamente 30 gramos", de: "Etwa 30 Gramm", nl: "Ongeveer 30 gram" }
        ],
        correct: 0,
        explanation: {
          en: "Tempeh, made from fermented soybeans, contains about 15 grams of protein per 3-ounce serving, plus probiotics from fermentation and more fiber than tofu.",
          es: "El tempeh, hecho de soja fermentada, contiene aproximadamente 15 gramos de proteína por porción de 3 onzas, además de probióticos de la fermentación y más fibra que el tofu.",
          de: "Tempeh, aus fermentierten Sojabohnen hergestellt, enthält etwa 15 Gramm Protein pro 3-Unzen-Portion, plus Probiotika aus der Fermentation und mehr Ballaststoffe als Tofu.",
          nl: "Tempeh, gemaakt van gefermenteerde sojabonen, bevat ongeveer 15 gram eiwit per 85 gram portie, plus probiotica van fermentatie en meer vezels dan tofu."
        }
      },
      {
        question: {
          en: "Which type of iron is found in plant-based foods?",
          es: "¿Qué tipo de hierro se encuentra en alimentos de origen vegetal?",
          de: "Welche Art von Eisen findet sich in pflanzlichen Lebensmitteln?",
          nl: "Welk type ijzer wordt gevonden in plantaardige voeding?"
        },
        options: [
          { en: "Non-heme iron", es: "Hierro no hemo", de: "Nicht-Häm-Eisen", nl: "Non-heem ijzer" },
          { en: "Heme iron", es: "Hierro hemo", de: "Häm-Eisen", nl: "Heem ijzer" },
          { en: "Metallic iron", es: "Hierro metálico", de: "Metallisches Eisen", nl: "Metaal ijzer" },
          { en: "Organic iron", es: "Hierro orgánico", de: "Organisches Eisen", nl: "Organisch ijzer" }
        ],
        correct: 0,
        explanation: {
          en: "Plant-based foods contain non-heme iron, which is less readily absorbed than heme iron from meat. Pairing with vitamin C significantly improves absorption.",
          es: "Los alimentos de origen vegetal contienen hierro no hemo, que se absorbe menos fácilmente que el hierro hemo de la carne. Combinar con vitamina C mejora significativamente la absorción.",
          de: "Pflanzliche Lebensmittel enthalten Nicht-Häm-Eisen, das weniger leicht aufgenommen wird als Häm-Eisen aus Fleisch. Die Kombination mit Vitamin C verbessert die Aufnahme erheblich.",
          nl: "Plantaardige voeding bevat non-heem ijzer, dat minder gemakkelijk wordt opgenomen dan heem ijzer uit vlees. Combineren met vitamine C verbetert de opname aanzienlijk."
        }
      },
      {
        question: {
          en: "What is seitan primarily made from?",
          es: "¿De qué está hecho principalmente el seitán?",
          de: "Woraus wird Seitan hauptsächlich hergestellt?",
          nl: "Waar is seitan voornamelijk van gemaakt?"
        },
        options: [
          { en: "Wheat gluten", es: "Gluten de trigo", de: "Weizengluten", nl: "Tarwegluten" },
          { en: "Soybeans", es: "Soja", de: "Sojabohnen", nl: "Sojabonen" },
          { en: "Rice flour", es: "Harina de arroz", de: "Reismehl", nl: "Rijstmeel" },
          { en: "Chickpeas", es: "Garbanzos", de: "Kichererbsen", nl: "Kikkererwten" }
        ],
        correct: 0,
        explanation: {
          en: "Seitan is made from wheat gluten, the protein in wheat. It contains about 25 grams of protein per 3.5 ounces and has a meat-like texture, but is unsuitable for those with celiac disease.",
          es: "El seitán está hecho de gluten de trigo, la proteína del trigo. Contiene aproximadamente 25 gramos de proteína por 100 gramos y tiene una textura similar a la carne, pero no es adecuado para personas con enfermedad celíaca.",
          de: "Seitan wird aus Weizengluten, dem Protein in Weizen, hergestellt. Es enthält etwa 25 Gramm Protein pro 100 Gramm und hat eine fleischähnliche Textur, ist aber für Menschen mit Zöliakie ungeeignet.",
          nl: "Seitan is gemaakt van tarwegluten, het eiwit in tarwe. Het bevat ongeveer 25 gram eiwit per 100 gram en heeft een vleesachtige textuur, maar is ongeschikt voor mensen met coeliakie."
        }
      },
      {
        question: {
          en: "Which nut has the highest protein content?",
          es: "¿Qué nuez tiene el contenido de proteína más alto?",
          de: "Welche Nuss hat den höchsten Proteingehalt?",
          nl: "Welke noot heeft het hoogste eiwitgehalte?"
        },
        options: [
          { en: "Almonds", es: "Almendras", de: "Mandeln", nl: "Amandelen" },
          { en: "Cashews", es: "Anacardos", de: "Cashewnüsse", nl: "Cashewnoten" },
          { en: "Walnuts", es: "Nueces", de: "Walnüsse", nl: "Walnoten" },
          { en: "Pecans", es: "Pacanas", de: "Pekannüsse", nl: "Pecannoten" }
        ],
        correct: 0,
        explanation: {
          en: "Almonds contain about 6 grams of protein per ounce, making them the highest protein nut. They're also rich in vitamin E, magnesium, and healthy fats.",
          es: "Las almendras contienen aproximadamente 6 gramos de proteína por onza, haciéndolas la nuez con más proteína. También son ricas en vitamina E, magnesio y grasas saludables.",
          de: "Mandeln enthalten etwa 6 Gramm Protein pro Unze, was sie zur proteinreichsten Nuss macht. Sie sind auch reich an Vitamin E, Magnesium und gesunden Fetten.",
          nl: "Amandelen bevatten ongeveer 6 gram eiwit per ons, waardoor ze de eiwitrijkste noot zijn. Ze zijn ook rijk aan vitamine E, magnesium en gezonde vetten."
        }
      },
      {
        question: {
          en: "What is the main benefit of fermented soy products like miso and tempeh?",
          es: "¿Cuál es el principal beneficio de los productos de soja fermentados como miso y tempeh?",
          de: "Was ist der Hauptnutzen fermentierter Sojaprodukte wie Miso und Tempeh?",
          nl: "Wat is het belangrijkste voordeel van gefermenteerde sojaproducten zoals miso en tempeh?"
        },
        options: [
          { en: "Improved digestibility and probiotic content", es: "Mejor digestibilidad y contenido probiótico", de: "Verbesserte Verdaulichkeit und probiotischer Gehalt", nl: "Verbeterde verteerbaarheid en probiotische inhoud" },
          { en: "Higher sugar content", es: "Mayor contenido de azúcar", de: "Höherer Zuckergehalt", nl: "Hoger suikergehalte" },
          { en: "More calories", es: "Más calorías", de: "Mehr Kalorien", nl: "Meer calorieën" },
          { en: "Less protein", es: "Menos proteína", de: "Weniger Protein", nl: "Minder eiwit" }
        ],
        correct: 0,
        explanation: {
          en: "Fermentation breaks down anti-nutrients in soy, making it easier to digest, while adding beneficial probiotics that support gut health and nutrient absorption.",
          es: "La fermentación descompone los anti-nutrientes en la soja, haciéndola más fácil de digerir, mientras añade probióticos beneficiosos que apoyan la salud intestinal y la absorción de nutrientes.",
          de: "Fermentation baut Anti-Nährstoffe in Soja ab, macht es leichter verdaulich und fügt nützliche Probiotika hinzu, die die Darmgesundheit und Nährstoffaufnahme unterstützen.",
          nl: "Fermentatie breekt anti-nutriënten in soja af, maakt het gemakkelijker verteerbaar, terwijl het gunstige probiotica toevoegt die darmgezondheid en nutriëntopname ondersteunen."
        }
      },
      {
        question: {
          en: "Which grain is highest in protein?",
          es: "¿Qué grano tiene más proteína?",
          de: "Welches Getreide hat den höchsten Proteingehalt?",
          nl: "Welk graan heeft het hoogste eiwitgehalte?"
        },
        options: [
          { en: "Amaranth", es: "Amaranto", de: "Amaranth", nl: "Amarant" },
          { en: "White rice", es: "Arroz blanco", de: "Weißer Reis", nl: "Witte rijst" },
          { en: "Corn", es: "Maíz", de: "Mais", nl: "Maïs" },
          { en: "Barley", es: "Cebada", de: "Gerste", nl: "Gerst" }
        ],
        correct: 0,
        explanation: {
          en: "Amaranth contains about 9 grams of protein per cooked cup and is a complete protein. It's also high in iron, magnesium, and phosphorus.",
          es: "El amaranto contiene aproximadamente 9 gramos de proteína por taza cocida y es una proteína completa. También es alto en hierro, magnesio y fósforo.",
          de: "Amaranth enthält etwa 9 Gramm Protein pro gekochter Tasse und ist ein vollständiges Protein. Es ist auch reich an Eisen, Magnesium und Phosphor.",
          nl: "Amarant bevat ongeveer 9 gram eiwit per gekookte kop en is een compleet eiwit. Het is ook rijk aan ijzer, magnesium en fosfor."
        }
      },
      {
        question: {
          en: "What vitamin do mushrooms provide when exposed to sunlight?",
          es: "¿Qué vitamina proporcionan los hongos cuando se exponen a la luz solar?",
          de: "Welches Vitamin liefern Pilze, wenn sie dem Sonnenlicht ausgesetzt sind?",
          nl: "Welke vitamine leveren paddenstoelen wanneer ze aan zonlicht worden blootgesteld?"
        },
        options: [
          { en: "Vitamin D", es: "Vitamina D", de: "Vitamin D", nl: "Vitamine D" },
          { en: "Vitamin C", es: "Vitamina C", de: "Vitamin C", nl: "Vitamine C" },
          { en: "Vitamin A", es: "Vitamina A", de: "Vitamin A", nl: "Vitamine A" },
          { en: "Vitamin K", es: "Vitamina K", de: "Vitamin K", nl: "Vitamine K" }
        ],
        correct: 0,
        explanation: {
          en: "Mushrooms exposed to UV light produce vitamin D, just like human skin in sunlight. This makes them one of the few plant-based sources of vitamin D.",
          es: "Los hongos expuestos a luz UV producen vitamina D, igual que la piel humana bajo la luz solar. Esto los hace una de las pocas fuentes vegetales de vitamina D.",
          de: "Pilze, die UV-Licht ausgesetzt sind, produzieren Vitamin D, genau wie menschliche Haut im Sonnenlicht. Dies macht sie zu einer der wenigen pflanzlichen Vitamin-D-Quellen.",
          nl: "Paddenstoelen blootgesteld aan UV-licht produceren vitamine D, net als menselijke huid in zonlicht. Dit maakt ze een van de weinige plantaardige bronnen van vitamine D."
        }
      },
      {
        question: {
          en: "Which legume is richest in folate?",
          es: "¿Qué legumbre es más rica en folato?",
          de: "Welche Hülsenfrucht ist am reichsten an Folsäure?",
          nl: "Welke peulvrucht is het rijkst aan foliumzuur?"
        },
        options: [
          { en: "Lentils", es: "Lentejas", de: "Linsen", nl: "Linzen" },
          { en: "Green beans", es: "Judías verdes", de: "Grüne Bohnen", nl: "Sperziebonen" },
          { en: "Peanuts", es: "Cacahuetes", de: "Erdnüsse", nl: "Pinda's" },
          { en: "Soybeans", es: "Soja", de: "Sojabohnen", nl: "Sojabonen" }
        ],
        correct: 0,
        explanation: {
          en: "Lentils provide about 90% of daily folate needs per cooked cup. Folate is essential for cell growth, DNA synthesis, and is particularly important during pregnancy.",
          es: "Las lentejas proporcionan aproximadamente el 90% de las necesidades diarias de folato por taza cocida. El folato es esencial para el crecimiento celular, la síntesis de ADN, y es particularmente importante durante el embarazo.",
          de: "Linsen liefern etwa 90% des täglichen Folsäurebedarfs pro gekochter Tasse. Folsäure ist essentiell für Zellwachstum, DNA-Synthese und besonders wichtig während der Schwangerschaft.",
          nl: "Linzen leveren ongeveer 90% van de dagelijkse folaatbehoefte per gekookte kop. Foliumzuur is essentieel voor celgroei, DNA-synthese, en is bijzonder belangrijk tijdens zwangerschap."
        }
      },
      {
        question: {
          en: "What is the protein quality measurement called?",
          es: "¿Cómo se llama la medición de calidad de proteína?",
          de: "Wie heißt die Proteinqualitätsmessung?",
          nl: "Hoe heet de eiwitkwaliteitsmeting?"
        },
        options: [
          { en: "PDCAAS (Protein Digestibility Corrected Amino Acid Score)", es: "PDCAAS (Puntuación de aminoácidos corregida por digestibilidad de proteína)", de: "PDCAAS (Protein Digestibility Corrected Amino Acid Score)", nl: "PDCAAS (Protein Digestibility Corrected Amino Acid Score)" },
          { en: "BMI (Body Mass Index)", es: "IMC (Índice de masa corporal)", de: "BMI (Body-Mass-Index)", nl: "BMI (Body Mass Index)" },
          { en: "RDA (Recommended Daily Allowance)", es: "CDR (Cantidad diaria recomendada)", de: "RDA (Empfohlene Tagesdosis)", nl: "ADH (Aanbevolen dagelijkse hoeveelheid)" },
          { en: "HDL (High Density Lipoprotein)", es: "HDL (Lipoproteína de alta densidad)", de: "HDL (High Density Lipoprotein)", nl: "HDL (High Density Lipoprotein)" }
        ],
        correct: 0,
        explanation: {
          en: "PDCAAS measures protein quality based on amino acid composition and digestibility. A score of 1.0 indicates perfect protein quality, which soy protein achieves.",
          es: "El PDCAAS mide la calidad de la proteína basándose en la composición de aminoácidos y la digestibilidad. Una puntuación de 1.0 indica calidad de proteína perfecta, que la proteína de soja alcanza.",
          de: "PDCAAS misst die Proteinqualität basierend auf Aminosäurezusammensetzung und Verdaulichkeit. Ein Score von 1,0 zeigt perfekte Proteinqualität an, die Sojaprotein erreicht.",
          nl: "PDCAAS meet eiwitkwaliteit gebaseerd op aminozuursamenstelling en verteerbaarheid. Een score van 1,0 geeft perfecte eiwitkwaliteit aan, die sojaproteïne bereikt."
        }
      },
      {
        question: {
          en: "Which vegetarian protein source is highest in leucine?",
          es: "¿Qué fuente de proteína vegetariana tiene más leucina?",
          de: "Welche vegetarische Proteinquelle hat den höchsten Leucingehalt?",
          nl: "Welke vegetarische eiwitbron heeft het hoogste leucinegehalte?"
        },
        options: [
          { en: "Soy protein isolate", es: "Aislado de proteína de soja", de: "Sojaproteinisolat", nl: "Soja-eiwitisolaat" },
          { en: "White bread", es: "Pan blanco", de: "Weißbrot", nl: "Wit brood" },
          { en: "Lettuce", es: "Lechuga", de: "Salat", nl: "Sla" },
          { en: "Cucumber", es: "Pepino", de: "Gurke", nl: "Komkommer" }
        ],
        correct: 0,
        explanation: {
          en: "Soy protein isolate contains about 8% leucine, an essential branched-chain amino acid important for muscle protein synthesis and recovery.",
          es: "El aislado de proteína de soja contiene aproximadamente 8% de leucina, un aminoácido esencial de cadena ramificada importante para la síntesis de proteína muscular y recuperación.",
          de: "Sojaproteinisolat enthält etwa 8% Leucin, eine essentielle verzweigtkettige Aminosäure, die wichtig für Muskelproteinsynthese und Erholung ist.",
          nl: "Soja-eiwitisolaat bevat ongeveer 8% leucine, een essentieel vertakt-keten aminozuur belangrijk voor spiereiwirsynthese en herstel."
        }
      },
      {
        question: {
          en: "What nutrient is found abundantly in dark leafy greens?",
          es: "¿Qué nutriente se encuentra abundantemente en las verduras de hoja verde oscura?",
          de: "Welcher Nährstoff ist reichlich in dunklem Blattgrün enthalten?",
          nl: "Welke voedingsstof wordt overvloedig aangetroffen in donkere bladgroenten?"
        },
        options: [
          { en: "Vitamin K", es: "Vitamina K", de: "Vitamin K", nl: "Vitamine K" },
          { en: "Vitamin D", es: "Vitamina D", de: "Vitamin D", nl: "Vitamine D" },
          { en: "Vitamin B12", es: "Vitamina B12", de: "Vitamin B12", nl: "Vitamine B12" },
          { en: "Vitamin B6", es: "Vitamina B6", de: "Vitamin B6", nl: "Vitamine B6" }
        ],
        correct: 0,
        explanation: {
          en: "Dark leafy greens like kale and spinach are extremely high in vitamin K, which is essential for blood clotting and bone health. One cup can provide over 100% of daily needs.",
          es: "Las verduras de hoja verde oscura como la col rizada y las espinacas son extremadamente altas en vitamina K, que es esencial para la coagulación sanguínea y la salud ósea. Una taza puede proporcionar más del 100% de las necesidades diarias.",
          de: "Dunkles Blattgrün wie Grünkohl und Spinat ist extrem reich an Vitamin K, das für die Blutgerinnung und Knochengesundheit unerlässlich ist. Eine Tasse kann über 100% des täglichen Bedarfs liefern.",
          nl: "Donkere bladgroenten zoals boerenkool en spinazie zijn extreem rijk aan vitamine K, wat essentieel is voor bloedstolling en botgezondheid. Een kop kan meer dan 100% van de dagelijkse behoefte leveren."
        }
      },
      {
        question: {
          en: "Which pseudo-cereal contains all nine essential amino acids?",
          es: "¿Qué pseudo-cereal contiene los nueve aminoácidos esenciales?",
          de: "Welches Pseudogetreide enthält alle neun essentiellen Aminosäuren?",
          nl: "Welk pseudo-graan bevat alle negen essentiële aminozuren?"
        },
        options: [
          { en: "Buckwheat", es: "Trigo sarraceno", de: "Buchweizen", nl: "Boekweit" },
          { en: "White rice", es: "Arroz blanco", de: "Weißer Reis", nl: "Witte rijst" },
          { en: "Corn", es: "Maíz", de: "Mais", nl: "Maïs" },
          { en: "Wheat", es: "Trigo", de: "Weizen", nl: "Tarwe" }
        ],
        correct: 0,
        explanation: {
          en: "Buckwheat is a complete protein containing all essential amino acids. Despite its name, it's gluten-free and unrelated to wheat, making it suitable for celiac diets.",
          es: "El trigo sarraceno es una proteína completa que contiene todos los aminoácidos esenciales. A pesar de su nombre, no contiene gluten y no está relacionado con el trigo, haciéndolo adecuado para dietas celíacas.",
          de: "Buchweizen ist ein vollständiges Protein, das alle essentiellen Aminosäuren enthält. Trotz seines Namens ist es glutenfrei und nicht mit Weizen verwandt, was es für Zöliakiediäten geeignet macht.",
          nl: "Boekweit is een compleet eiwit dat alle essentiële aminozuren bevat. Ondanks de naam is het glutenvrij en niet gerelateerd aan tarwe, waardoor het geschikt is voor coeliakie diëten."
        }
      },
      {
        question: {
          en: "What is the bioavailability of calcium from fortified plant milks compared to dairy milk?",
          es: "¿Cuál es la biodisponibilidad del calcio de las leches vegetales fortificadas comparada con la leche de vaca?",
          de: "Wie ist die Bioverfügbarkeit von Kalzium aus angereicherten Pflanzenmilchen im Vergleich zu Kuhmilch?",
          nl: "Wat is de biobeschikbaarheid van calcium uit verrijkte plantenmek vergeleken met koemelk?"
        },
        options: [
          { en: "Similar when properly fortified and shaken well", es: "Similar cuando está bien fortificada y se agita bien", de: "Ähnlich wenn richtig angereichert und gut geschüttelt", nl: "Vergelijkbaar wanneer goed verrijkt en goed geschud" },
          { en: "Much lower regardless of fortification", es: "Mucho más baja independientemente de la fortificación", de: "Viel niedriger unabhängig von der Anreicherung", nl: "Veel lager ongeacht verrijking" },
          { en: "Plant milk has no calcium", es: "La leche vegetal no tiene calcio", de: "Pflanzenmilch hat kein Kalzium", nl: "Plantenmek heeft geen calcium" },
          { en: "Ten times higher than dairy", es: "Diez veces más alto que lácteos", de: "Zehnmal höher als Milchprodukte", nl: "Tien keer hoger dan zuivel" }
        ],
        correct: 0,
        explanation: {
          en: "Properly fortified plant milks provide similar calcium absorption to dairy milk when shaken well (calcium settles at the bottom). Choose products fortified with calcium carbonate or tricalcium phosphate.",
          es: "Las leches vegetales bien fortificadas proporcionan una absorción de calcio similar a la leche de vaca cuando se agitan bien (el calcio se asienta en el fondo). Elija productos fortificados con carbonato de calcio o fosfato tricálcico.",
          de: "Richtig angereicherte Pflanzenmilchen bieten ähnliche Kalziumaufnahme wie Kuhmilch, wenn sie gut geschüttelt werden (Kalzium setzt sich am Boden ab). Wählen Sie Produkte, die mit Kalziumkarbonat oder Trikalziumphosphat angereichert sind.",
          nl: "Goed verrijkte plantenmek levert vergelijkbare calciumopname als koemelk wanneer goed geschud (calcium zakt naar de bodem). Kies producten verrijkt met calciumcarbonaat of tricalciumfosfaat."
        }
      },
      {
        question: {
          en: "Which vegetarian food is highest in omega-3 ALA content?",
          es: "¿Qué alimento vegetariano tiene el contenido más alto de omega-3 ALA?",
          de: "Welches vegetarische Lebensmittel hat den höchsten Omega-3-ALA-Gehalt?",
          nl: "Welk vegetarisch voedsel heeft het hoogste omega-3 ALA gehalte?"
        },
        options: [
          { en: "Chia seeds", es: "Semillas de chía", de: "Chiasamen", nl: "Chiazaadjes" },
          { en: "White bread", es: "Pan blanco", de: "Weißbrot", nl: "Wit brood" },
          { en: "Iceberg lettuce", es: "Lechuga iceberg", de: "Eisbergsalat", nl: "IJsbergsla" },
          { en: "White potatoes", es: "Papas blancas", de: "Weiße Kartoffeln", nl: "Witte aardappels" }
        ],
        correct: 0,
        explanation: {
          en: "Chia seeds contain about 5 grams of ALA omega-3 per ounce, the highest among common foods. They also provide protein, fiber, and calcium.",
          es: "Las semillas de chía contienen aproximadamente 5 gramos de omega-3 ALA por onza, el más alto entre los alimentos comunes. También proporcionan proteína, fibra y calcio.",
          de: "Chiasamen enthalten etwa 5 Gramm ALA-Omega-3 pro Unze, am höchsten unter gängigen Lebensmitteln. Sie liefern auch Protein, Ballaststoffe und Kalzium.",
          nl: "Chiazaadjes bevatten ongeveer 5 gram ALA omega-3 per ons, het hoogste onder gewone voedingsmiddelen. Ze leveren ook eiwit, vezels en calcium."
        }
      },
      {
        question: {
          en: "What percentage of protein should vegetarian athletes aim for in their diet?",
          es: "¿Qué porcentaje de proteína deben apuntar los atletas vegetarianos en su dieta?",
          de: "Wie viel Prozent Protein sollten vegetarische Sportler in ihrer Ernährung anstreben?",
          nl: "Welk percentage eiwit moeten vegetarische sporters nastreven in hun dieet?"
        },
        options: [
          { en: "1.2-2.0 grams per kg body weight", es: "1.2-2.0 gramos por kg de peso corporal", de: "1,2-2,0 Gramm pro kg Körpergewicht", nl: "1,2-2,0 gram per kg lichaamsgewicht" },
          { en: "0.2 grams per kg body weight", es: "0.2 gramos por kg de peso corporal", de: "0,2 Gramm pro kg Körpergewicht", nl: "0,2 gram per kg lichaamsgewicht" },
          { en: "5.0 grams per kg body weight", es: "5.0 gramos por kg de peso corporal", de: "5,0 Gramm pro kg Körpergewicht", nl: "5,0 gram per kg lichaamsgewicht" },
          { en: "10 grams total per day", es: "10 gramos totales por día", de: "10 Gramm gesamt pro Tag", nl: "10 gram totaal per dag" }
        ],
        correct: 0,
        explanation: {
          en: "Vegetarian athletes need 1.2-2.0 grams of protein per kg body weight, slightly higher than omnivores, to account for lower digestibility and support training demands.",
          es: "Los atletas vegetarianos necesitan 1.2-2.0 gramos de proteína por kg de peso corporal, ligeramente más alto que los omnívoros, para compensar la menor digestibilidad y apoyar las demandas de entrenamiento.",
          de: "Vegetarische Sportler benötigen 1,2-2,0 Gramm Protein pro kg Körpergewicht, etwas höher als Omnivoren, um die geringere Verdaulichkeit auszugleichen und Trainingsanforderungen zu unterstützen.",
          nl: "Vegetarische sporters hebben 1,2-2,0 gram eiwit per kg lichaamsgewicht nodig, iets hoger dan omnivoren, om te compenseren voor lagere verteerbaarheid en trainingseisen te ondersteunen."
        }
      },
      {
        question: {
          en: "Which bean variety has the highest fiber content?",
          es: "¿Qué variedad de frijol tiene el contenido de fibra más alto?",
          de: "Welche Bohnensorte hat den höchsten Ballaststoffgehalt?",
          nl: "Welke bonenvariant heeft het hoogste vezelgehalte?"
        },
        options: [
          { en: "Navy beans", es: "Frijoles blancos pequeños", de: "Weiße Bohnen", nl: "Witte bonen" },
          { en: "Green beans", es: "Judías verdes", de: "Grüne Bohnen", nl: "Sperziebonen" },
          { en: "Wax beans", es: "Judías de cera", de: "Wachsbohnen", nl: "Wasbonen" },
          { en: "Snap peas", es: "Guisantes", de: "Zuckerschoten", nl: "Peultjes" }
        ],
        correct: 0,
        explanation: {
          en: "Navy beans contain about 19 grams of fiber per cooked cup, providing excellent digestive health benefits and helping maintain steady blood sugar levels.",
          es: "Los frijoles blancos pequeños contienen aproximadamente 19 gramos de fibra por taza cocida, proporcionando excelentes beneficios para la salud digestiva y ayudando a mantener niveles estables de azúcar en sangre.",
          de: "Weiße Bohnen enthalten etwa 19 Gramm Ballaststoffe pro gekochter Tasse und bieten ausgezeichnete Vorteile für die Verdauungsgesundheit und helfen, stabile Blutzuckerspiegel aufrechtzuerhalten.",
          nl: "Witte bonen bevatten ongeveer 19 gram vezels per gekookte kop, leveren uitstekende voordelen voor spijsverteringsgezondheid en helpen stabiele bloedsuikerspiegels te handhaven."
        }
      },
      {
        question: {
          en: "What is the recommended intake of ALA omega-3 for vegetarians?",
          es: "¿Cuál es la ingesta recomendada de omega-3 ALA para vegetarianos?",
          de: "Wie ist die empfohlene Aufnahme von ALA-Omega-3 für Vegetarier?",
          nl: "Wat is de aanbevolen inname van ALA omega-3 voor vegetariërs?"
        },
        options: [
          { en: "2-4 grams per day for conversion to EPA/DHA", es: "2-4 gramos por día para conversión a EPA/DHA", de: "2-4 Gramm pro Tag zur Umwandlung in EPA/DHA", nl: "2-4 gram per dag voor conversie naar EPA/DHA" },
          { en: "0.1 grams per day", es: "0.1 gramos por día", de: "0,1 Gramm pro Tag", nl: "0,1 gram per dag" },
          { en: "20 grams per day", es: "20 gramos por día", de: "20 Gramm pro Tag", nl: "20 gram per dag" },
          { en: "Omega-3 is not needed", es: "El omega-3 no es necesario", de: "Omega-3 wird nicht benötigt", nl: "Omega-3 is niet nodig" }
        ],
        correct: 0,
        explanation: {
          en: "Vegetarians should consume 2-4 grams of ALA daily since the body converts only 5-10% to EPA and DHA. Good sources include flaxseeds, chia seeds, and walnuts.",
          es: "Los vegetarianos deben consumir 2-4 gramos de ALA diariamente ya que el cuerpo convierte solo el 5-10% a EPA y DHA. Buenas fuentes incluyen linaza, semillas de chía y nueces.",
          de: "Vegetarier sollten täglich 2-4 Gramm ALA konsumieren, da der Körper nur 5-10% in EPA und DHA umwandelt. Gute Quellen sind Leinsamen, Chiasamen und Walnüsse.",
          nl: "Vegetariërs moeten 2-4 gram ALA dagelijks consumeren omdat het lichaam slechts 5-10% omzet naar EPA en DHA. Goede bronnen zijn lijnzaadjes, chiazaadjes en walnoten."
        }
      },
      {
        question: {
          en: "Which cooking method best retains water-soluble vitamins in vegetables?",
          es: "¿Qué método de cocción retiene mejor las vitaminas hidrosolubles en las verduras?",
          de: "Welche Kochmethode bewahrt wasserlösliche Vitamine in Gemüse am besten?",
          nl: "Welke kookmethode behoudt wateroplosbare vitamines in groenten het beste?"
        },
        options: [
          { en: "Steaming or microwaving", es: "Cocinar al vapor o en microondas", de: "Dämpfen oder Mikrowelle", nl: "Stomen of magnetron" },
          { en: "Boiling for 30 minutes", es: "Hervir por 30 minutos", de: "30 Minuten kochen", nl: "30 minuten koken" },
          { en: "Soaking in water overnight", es: "Remojar en agua toda la noche", de: "Über Nacht in Wasser einweichen", nl: "Een nacht in water weken" },
          { en: "Deep frying", es: "Freír en aceite abundante", de: "Frittieren", nl: "Frituren" }
        ],
        correct: 0,
        explanation: {
          en: "Steaming and microwaving use minimal water and shorter cooking times, preserving heat-sensitive vitamins like vitamin C and B vitamins that leach into boiling water.",
          es: "Cocinar al vapor y en microondas usan agua mínima y tiempos de cocción más cortos, preservando vitaminas sensibles al calor como la vitamina C y vitaminas B que se filtran en agua hirviendo.",
          de: "Dämpfen und Mikrowelle verwenden minimales Wasser und kürzere Garzeiten, bewahren hitzeempfindliche Vitamine wie Vitamin C und B-Vitamine, die ins kochende Wasser auslaugen.",
          nl: "Stomen en magnetron gebruiken minimaal water en kortere kooktijden, behouden hittegevoelige vitamines zoals vitamine C en B-vitamines die in kokend water lekken."
        }
      },
      {
        question: {
          en: "What mineral assists in converting ALA omega-3 to EPA and DHA?",
          es: "¿Qué mineral ayuda a convertir el omega-3 ALA en EPA y DHA?",
          de: "Welches Mineral hilft bei der Umwandlung von ALA-Omega-3 in EPA und DHA?",
          nl: "Welk mineraal helpt bij het omzetten van ALA omega-3 naar EPA en DHA?"
        },
        options: [
          { en: "Zinc", es: "Zinc", de: "Zink", nl: "Zink" },
          { en: "Sodium", es: "Sodio", de: "Natrium", nl: "Natrium" },
          { en: "Chloride", es: "Cloruro", de: "Chlorid", nl: "Chloride" },
          { en: "Fluoride", es: "Fluoruro", de: "Fluorid", nl: "Fluoride" }
        ],
        correct: 0,
        explanation: {
          en: "Zinc, along with vitamins B6 and B7, is necessary for the enzymes that convert plant-based ALA to the more bioavailable EPA and DHA omega-3 fatty acids.",
          es: "El zinc, junto con las vitaminas B6 y B7, es necesario para las enzimas que convierten el ALA de origen vegetal a los ácidos grasos omega-3 EPA y DHA más biodisponibles.",
          de: "Zink ist zusammen mit den Vitaminen B6 und B7 für die Enzyme erforderlich, die pflanzliches ALA in die bioverfügbareren EPA- und DHA-Omega-3-Fettsäuren umwandeln.",
          nl: "Zink is, samen met vitamines B6 en B7, noodzakelijk voor de enzymen die plantaardig ALA omzetten naar de meer biobeschikbare EPA en DHA omega-3 vetzuren."
        }
      },
      {
        question: {
          en: "Which pulse has the lowest glycemic index?",
          es: "¿Qué legumbre tiene el índice glucémico más bajo?",
          de: "Welche Hülsenfrucht hat den niedrigsten glykämischen Index?",
          nl: "Welke peulvrucht heeft de laagste glycemische index?"
        },
        options: [
          { en: "Lentils", es: "Lentejas", de: "Linsen", nl: "Linzen" },
          { en: "White potatoes", es: "Papas blancas", de: "Weiße Kartoffeln", nl: "Witte aardappels" },
          { en: "White bread", es: "Pan blanco", de: "Weißbrot", nl: "Wit brood" },
          { en: "White rice", es: "Arroz blanco", de: "Weißer Reis", nl: "Witte rijst" }
        ],
        correct: 0,
        explanation: {
          en: "Lentils have a glycemic index of about 29, making them excellent for blood sugar control. Their high fiber and protein content slows glucose absorption.",
          es: "Las lentejas tienen un índice glucémico de aproximadamente 29, haciéndolas excelentes para el control del azúcar en sangre. Su alto contenido de fibra y proteína ralentiza la absorción de glucosa.",
          de: "Linsen haben einen glykämischen Index von etwa 29, was sie ausgezeichnet für die Blutzuckerkontrolle macht. Ihr hoher Ballaststoff- und Proteingehalt verlangsamt die Glukoseaufnahme.",
          nl: "Linzen hebben een glycemische index van ongeveer 29, waardoor ze uitstekend zijn voor bloedsuikercontrole. Hun hoge vezel- en eiwitgehalte vertraagt glucoseopname."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  }
  return level2;
})();