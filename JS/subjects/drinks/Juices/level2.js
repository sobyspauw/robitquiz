// Quiz Level 2: Drinken - Sappen (Elementary Juices)
(function() {
  const level2 = {
    name: {
      en: "Elementary Juice Knowledge",
      es: "Conocimientos Elementales de Jugos",
      de: "Elementare Saft-Kenntnisse",
      nl: "Elementaire Sappen Kennis"
    },
    questions: [
      {
        question: {
          en: "Which popular juice brand is known for its orange juice in a carton?",
          es: "¿Qué marca popular de jugo es conocida por su jugo de naranja en cartón?",
          de: "Welche beliebte Saftmarke ist für ihren Orangensaft im Karton bekannt?",
          nl: "Welk populair sapmerk staat bekend om zijn sinaasappelsap in een kartonnen verpakking?"
        },
        options: [
          { en: "Tropicana", es: "Tropicana", de: "Tropicana", nl: "Tropicana" },
          { en: "Coca-Cola", es: "Coca-Cola", de: "Coca-Cola", nl: "Coca-Cola" },
          { en: "Pepsi", es: "Pepsi", de: "Pepsi", nl: "Pepsi" },
          { en: "Sprite", es: "Sprite", de: "Sprite", nl: "Sprite" }
        ],
        correct: 0,
        explanation: {
          en: "Tropicana is one of the most well-known brands for orange juice sold in cartons worldwide.",
          es: "Tropicana es una de las marcas más conocidas de jugo de naranja vendido en cartones a nivel mundial.",
          de: "Tropicana ist eine der bekanntesten Marken für Orangensaft, der weltweit in Kartons verkauft wird.",
          nl: "Tropicana is een van de bekendste merken voor sinaasappelsap verkocht in kartonnen verpakkingen wereldwijd."
        }
      },
      {
        question: {
          en: "What is the main vitamin found in orange juice?",
          es: "¿Cuál es la principal vitamina que se encuentra en el jugo de naranja?",
          de: "Was ist das Hauptvitamin, das in Orangensaft zu finden ist?",
          nl: "Wat is de hoofdvitamine die wordt aangetroffen in sinaasappelsap?"
        },
        options: [
          { en: "Vitamin A", es: "Vitamina A", de: "Vitamin A", nl: "Vitamine A" },
          { en: "Vitamin B", es: "Vitamina B", de: "Vitamin B", nl: "Vitamine B" },
          { en: "Vitamin C", es: "Vitamina C", de: "Vitamin C", nl: "Vitamine C" },
          { en: "Vitamin D", es: "Vitamina D", de: "Vitamin D", nl: "Vitamine D" }
        ],
        correct: 2,
        explanation: {
          en: "Orange juice is an excellent source of Vitamin C, which helps boost the immune system.",
          es: "El jugo de naranja es una excelente fuente de Vitamina C, que ayuda a fortalecer el sistema inmunológico.",
          de: "Orangensaft ist eine ausgezeichnete Quelle für Vitamin C, das hilft, das Immunsystem zu stärken.",
          nl: "Sinaasappelsap is een uitstekende bron van Vitamine C, die helpt het immuunsysteem te versterken."
        }
      },
      {
        question: {
          en: "What does 'pulp' mean in orange juice?",
          es: "¿Qué significa 'pulpa' en el jugo de naranja?",
          de: "Was bedeutet 'Fruchtfleisch' in Orangensaft?",
          nl: "Wat betekent 'vruchtvlees' in sinaasappelsap?"
        },
        options: [
          { en: "The seeds", es: "Las semillas", de: "Die Samen", nl: "De pitten" },
          { en: "Small pieces of fruit", es: "Pequeños trozos de fruta", de: "Kleine Fruchtstücke", nl: "Kleine stukjes vrucht" },
          { en: "The color", es: "El color", de: "Die Farbe", nl: "De kleur" },
          { en: "The container", es: "El envase", de: "Der Behälter", nl: "De verpakking" }
        ],
        correct: 1,
        explanation: {
          en: "Pulp refers to the small pieces of orange fruit that remain in the juice, giving it texture.",
          es: "La pulpa se refiere a los pequeños trozos de fruta de naranja que quedan en el jugo, dándole textura.",
          de: "Fruchtfleisch bezieht sich auf die kleinen Stücke der Orangenfrucht, die im Saft verbleiben und ihm Textur verleihen.",
          nl: "Vruchtvlees verwijst naar de kleine stukjes sinaasappelvrucht die in het sap blijven en het textuur geven."
        }
      },
      {
        question: {
          en: "Which juice is commonly recommended when you have a cold?",
          es: "¿Qué jugo se recomienda comúnmente cuando tienes un resfriado?",
          de: "Welcher Saft wird häufig empfohlen, wenn man erkältet ist?",
          nl: "Welk sap wordt vaak aanbevolen als je verkouden bent?"
        },
        options: [
          { en: "Apple juice", es: "Jugo de manzana", de: "Apfelsaft", nl: "Appelsap" },
          { en: "Orange juice", es: "Jugo de naranja", de: "Orangensaft", nl: "Sinaasappelsap" },
          { en: "Grape juice", es: "Jugo de uva", de: "Traubensaft", nl: "Druivensap" },
          { en: "Tomato juice", es: "Jugo de tomate", de: "Tomatensaft", nl: "Tomatensap" }
        ],
        correct: 1,
        explanation: {
          en: "Orange juice is often recommended for colds because of its high Vitamin C content, which supports immune function.",
          es: "El jugo de naranja se recomienda a menudo para los resfriados debido a su alto contenido de Vitamina C, que apoya la función inmunológica.",
          de: "Orangensaft wird oft bei Erkältungen empfohlen wegen seines hohen Vitamin-C-Gehalts, der die Immunfunktion unterstützt.",
          nl: "Sinaasappelsap wordt vaak aanbevolen bij verkoudheid vanwege het hoge vitamine C-gehalte, dat de immuunfunctie ondersteunt."
        }
      },
      {
        question: {
          en: "What ingredient is commonly added to apple juice to preserve it?",
          es: "¿Qué ingrediente se añade comúnmente al jugo de manzana para conservarlo?",
          de: "Welche Zutat wird häufig zu Apfelsaft hinzugefügt, um ihn zu konservieren?",
          nl: "Welk ingrediënt wordt vaak toegevoegd aan appelsap om het te bewaren?"
        },
        options: [
          { en: "Salt", es: "Sal", de: "Salz", nl: "Zout" },
          { en: "Sugar", es: "Azúcar", de: "Zucker", nl: "Suiker" },
          { en: "Citric acid", es: "Ácido cítrico", de: "Zitronensäure", nl: "Citroenzuur" },
          { en: "Milk", es: "Leche", de: "Milch", nl: "Melk" }
        ],
        correct: 2,
        explanation: {
          en: "Citric acid is commonly added to apple juice as a natural preservative to maintain freshness and prevent spoilage.",
          es: "El ácido cítrico se añade comúnmente al jugo de manzana como conservante natural para mantener la frescura y prevenir el deterioro.",
          de: "Zitronensäure wird häufig zu Apfelsaft als natürliches Konservierungsmittel hinzugefügt, um Frische zu erhalten und Verderb zu verhindern.",
          nl: "Citroenzuur wordt vaak toegevoegd aan appelsap als natuurlijk conserveermiddel om versheid te behouden en bederf te voorkomen."
        }
      },
      {
        question: {
          en: "Which juice brand is famous for its slogan 'Simply Orange'?",
          es: "¿Qué marca de jugo es famosa por su eslogan 'Simply Orange'?",
          de: "Welche Saftmarke ist berühmt für ihren Slogan 'Simply Orange'?",
          nl: "Welk sapmerk is beroemd om zijn slogan 'Simply Orange'?"
        },
        options: [
          { en: "Minute Maid", es: "Minute Maid", de: "Minute Maid", nl: "Minute Maid" },
          { en: "Simply Orange", es: "Simply Orange", de: "Simply Orange", nl: "Simply Orange" },
          { en: "Tropicana", es: "Tropicana", de: "Tropicana", nl: "Tropicana" },
          { en: "Ocean Spray", es: "Ocean Spray", de: "Ocean Spray", nl: "Ocean Spray" }
        ],
        correct: 1,
        explanation: {
          en: "Simply Orange is actually the brand name itself, owned by The Coca-Cola Company, known for premium not-from-concentrate juices.",
          es: "Simply Orange es en realidad el nombre de la marca en sí, propiedad de The Coca-Cola Company, conocida por jugos premium no hechos de concentrado.",
          de: "Simply Orange ist tatsächlich der Markenname selbst, im Besitz der Coca-Cola Company, bekannt für Premium-Säfte ohne Konzentrat.",
          nl: "Simply Orange is eigenlijk de merknaam zelf, eigendom van The Coca-Cola Company, bekend om premium niet-uit-concentraat sappen."
        }
      },
      {
        question: {
          en: "What does 'from concentrate' mean on a juice label?",
          es: "¿Qué significa 'de concentrado' en una etiqueta de jugo?",
          de: "Was bedeutet 'aus Konzentrat' auf einem Saftetikett?",
          nl: "Wat betekent 'uit concentraat' op een saplabel?"
        },
        options: [
          { en: "Extra vitamins added", es: "Vitaminas extra añadidas", de: "Extra Vitamine hinzugefügt", nl: "Extra vitamines toegevoegd" },
          { en: "Water was removed and added back", es: "Se quitó agua y se volvió a añadir", de: "Wasser wurde entfernt und wieder hinzugefügt", nl: "Water werd weggenomen en weer toegevoegd" },
          { en: "Made from frozen fruit", es: "Hecho de fruta congelada", de: "Aus gefrorenen Früchten hergestellt", nl: "Gemaakt van bevroren fruit" },
          { en: "Organic ingredients only", es: "Solo ingredientes orgánicos", de: "Nur Bio-Zutaten", nl: "Alleen biologische ingrediënten" }
        ],
        correct: 1,
        explanation: {
          en: "'From concentrate' means water was removed from the juice to make it concentrated, then water was added back before packaging.",
          es: "'De concentrado' significa que se quitó agua del jugo para concentrarlo, luego se volvió a añadir agua antes del empaque.",
          de: "'Aus Konzentrat' bedeutet, dass Wasser aus dem Saft entfernt wurde, um ihn zu konzentrieren, dann wurde vor der Verpackung wieder Wasser hinzugefügt.",
          nl: "'Uit concentraat' betekent dat water uit het sap werd weggenomen om het te concentreren, vervolgens werd water weer toegevoegd voor verpakking."
        }
      },
      {
        question: {
          en: "Which vegetable juice is commonly used in cocktails like Bloody Mary?",
          es: "¿Qué jugo de verdura se usa comúnmente en cócteles como Bloody Mary?",
          de: "Welcher Gemüsesaft wird häufig in Cocktails wie Bloody Mary verwendet?",
          nl: "Welk groentensap wordt vaak gebruikt in cocktails zoals Bloody Mary?"
        },
        options: [
          { en: "Carrot juice", es: "Jugo de zanahoria", de: "Karottensaft", nl: "Wortelsap" },
          { en: "Beet juice", es: "Jugo de remolacha", de: "Rote-Bete-Saft", nl: "Bietensap" },
          { en: "Tomato juice", es: "Jugo de tomate", de: "Tomatensaft", nl: "Tomatensap" },
          { en: "Celery juice", es: "Jugo de apio", de: "Selleriesaft", nl: "Selderijsap" }
        ],
        correct: 2,
        explanation: {
          en: "Tomato juice is the main ingredient in a Bloody Mary cocktail, often mixed with vodka and spices.",
          es: "El jugo de tomate es el ingrediente principal en un cóctel Bloody Mary, a menudo mezclado con vodka y especias.",
          de: "Tomatensaft ist die Hauptzutat in einem Bloody Mary Cocktail, oft gemischt mit Wodka und Gewürzen.",
          nl: "Tomatensap is het hoofdingrediënt in een Bloody Mary cocktail, vaak gemengd met wodka en kruiden."
        }
      },
      {
        question: {
          en: "How much of an orange is typically juice?",
          es: "¿Qué porcentaje de una naranja es típicamente jugo?",
          de: "Wie viel einer Orange ist typischerweise Saft?",
          nl: "Hoeveel van een sinaasappel is typisch sap?"
        },
        options: [
          { en: "About 25%", es: "Aproximadamente 25%", de: "Etwa 25%", nl: "Ongeveer 25%" },
          { en: "About 50%", es: "Aproximadamente 50%", de: "Etwa 50%", nl: "Ongeveer 50%" },
          { en: "About 75%", es: "Aproximadamente 75%", de: "Etwa 75%", nl: "Ongeveer 75%" },
          { en: "About 90%", es: "Aproximadamente 90%", de: "Etwa 90%", nl: "Ongeveer 90%" }
        ],
        correct: 1,
        explanation: {
          en: "A typical orange is about 50% juice by weight, with the rest being pulp, peel, and seeds.",
          es: "Una naranja típica es aproximadamente 50% jugo por peso, siendo el resto pulpa, cáscara y semillas.",
          de: "Eine typische Orange besteht etwa zu 50% aus Saft nach Gewicht, der Rest ist Fruchtfleisch, Schale und Kerne.",
          nl: "Een typische sinaasappel is ongeveer 50% sap naar gewicht, de rest is vruchtvlees, schil en pitten."
        }
      },
      {
        question: {
          en: "Which juice is known for helping with digestion?",
          es: "¿Qué jugo es conocido por ayudar con la digestión?",
          de: "Welcher Saft ist dafür bekannt, bei der Verdauung zu helfen?",
          nl: "Welk sap staat bekend om het helpen bij de spijsvertering?"
        },
        options: [
          { en: "Grape juice", es: "Jugo de uva", de: "Traubensaft", nl: "Druivensap" },
          { en: "Pineapple juice", es: "Jugo de piña", de: "Ananassaft", nl: "Ananassap" },
          { en: "Apple juice", es: "Jugo de manzana", de: "Apfelsaft", nl: "Appelsap" },
          { en: "Orange juice", es: "Jugo de naranja", de: "Orangensaft", nl: "Sinaasappelsap" }
        ],
        correct: 1,
        explanation: {
          en: "Pineapple juice contains enzymes like bromelain that can help break down proteins and aid digestion.",
          es: "El jugo de piña contiene enzimas como la bromelina que pueden ayudar a descomponer las proteínas y ayudar en la digestión.",
          de: "Ananassaft enthält Enzyme wie Bromelain, die helfen können, Proteine abzubauen und die Verdauung zu fördern.",
          nl: "Ananassap bevat enzymen zoals bromelaïne die kunnen helpen eiwitten af te breken en de spijsvertering te bevorderen."
        }
      },
      {
        question: {
          en: "What is nectar in juice terminology?",
          es: "¿Qué es el néctar en terminología de jugos?",
          de: "Was ist Nektar in der Saft-Terminologie?",
          nl: "Wat is nectar in sapterminologie?"
        },
        options: [
          { en: "Juice with added water and sugar", es: "Jugo con agua y azúcar añadidos", de: "Saft mit zugesetztem Wasser und Zucker", nl: "Sap met toegevoegd water en suiker" },
          { en: "Pure concentrated juice", es: "Jugo puro concentrado", de: "Reiner konzentrierter Saft", nl: "Puur geconcentreerd sap" },
          { en: "Carbonated juice", es: "Jugo carbonatado", de: "Kohlensäurehaltiger Saft", nl: "Koolzuurhoudend sap" },
          { en: "Frozen juice", es: "Jugo congelado", de: "Gefrorener Saft", nl: "Bevroren sap" }
        ],
        correct: 0,
        explanation: {
          en: "Nectar is a fruit drink made from fruit juice or pulp with added water and sugar, typically containing 25-99% fruit content.",
          es: "El néctar es una bebida de fruta hecha de jugo de fruta o pulpa con agua y azúcar añadidos, típicamente conteniendo 25-99% de contenido de fruta.",
          de: "Nektar ist ein Fruchtgetränk aus Fruchtsaft oder Fruchtmark mit zugesetztem Wasser und Zucker, das typischerweise 25-99% Fruchtgehalt enthält.",
          nl: "Nectar is een vruchtendrank gemaakt van vruchtensap of pulp met toegevoegd water en suiker, meestal met 25-99% vruchtgehalte."
        }
      },
      {
        question: {
          en: "Why does fresh apple juice turn brown?",
          es: "¿Por qué se vuelve marrón el jugo de manzana fresco?",
          de: "Warum wird frischer Apfelsaft braun?",
          nl: "Waarom wordt vers appelsap bruin?"
        },
        options: [
          { en: "Oxidation when exposed to air", es: "Oxidación cuando se expone al aire", de: "Oxidation bei Luftkontakt", nl: "Oxidatie bij blootstelling aan lucht" },
          { en: "It's spoiled", es: "Está estropeado", de: "Es ist verdorben", nl: "Het is bedorven" },
          { en: "Too much sugar", es: "Demasiado azúcar", de: "Zu viel Zucker", nl: "Te veel suiker" },
          { en: "Wrong temperature", es: "Temperatura incorrecta", de: "Falsche Temperatur", nl: "Verkeerde temperatuur" }
        ],
        correct: 0,
        explanation: {
          en: "Fresh apple juice turns brown due to oxidation - enzymes react with oxygen in the air, changing the color but not necessarily spoiling the juice.",
          es: "El jugo de manzana fresco se vuelve marrón debido a la oxidación - las enzimas reaccionan con el oxígeno en el aire, cambiando el color pero no necesariamente estropeando el jugo.",
          de: "Frischer Apfelsaft wird braun durch Oxidation - Enzyme reagieren mit Sauerstoff in der Luft, ändern die Farbe, aber verderben den Saft nicht unbedingt.",
          nl: "Vers appelsap wordt bruin door oxidatie - enzymen reageren met zuurstof in de lucht, waardoor de kleur verandert maar het sap niet per se bedorven is."
        }
      },
      {
        question: {
          en: "What is the minimum fruit content for a drink to be labeled '100% juice'?",
          es: "¿Cuál es el contenido mínimo de fruta para que una bebida sea etiquetada como '100% jugo'?",
          de: "Was ist der Mindestfruchtgehalt für ein Getränk, um als '100% Saft' bezeichnet zu werden?",
          nl: "Wat is het minimale vruchtgehalte voor een drankje om '100% sap' te worden genoemd?"
        },
        options: [
          { en: "100% fruit", es: "100% fruta", de: "100% Frucht", nl: "100% vrucht" },
          { en: "75% fruit", es: "75% fruta", de: "75% Frucht", nl: "75% vrucht" },
          { en: "50% fruit", es: "50% fruta", de: "50% Frucht", nl: "50% vrucht" },
          { en: "25% fruit", es: "25% fruta", de: "25% Frucht", nl: "25% vrucht" }
        ],
        correct: 0,
        explanation: {
          en: "For juice to be labeled '100% juice', it must contain only juice from fruits or vegetables with no added sugars, water, or preservatives.",
          es: "Para que el jugo sea etiquetado como '100% jugo', debe contener solo jugo de frutas o vegetales sin azúcares añadidos, agua o conservantes.",
          de: "Damit Saft als '100% Saft' bezeichnet werden kann, muss er nur Saft aus Früchten oder Gemüse ohne zugesetzten Zucker, Wasser oder Konservierungsstoffe enthalten.",
          nl: "Voor sap om '100% sap' genoemd te worden, moet het alleen sap van vruchten of groenten bevatten zonder toegevoegde suikers, water of conserveermiddelen."
        }
      },
      {
        question: {
          en: "Which type of juicer is best for leafy greens?",
          es: "¿Qué tipo de exprimidor es mejor para las verduras de hoja?",
          de: "Welcher Entsafter-Typ eignet sich am besten für Blattgemüse?",
          nl: "Welk type sapcentrifuge is het beste voor bladgroenten?"
        },
        options: [
          { en: "Masticating juicer", es: "Exprimidor masticador", de: "Pressentsafter", nl: "Kauwende sapcentrifuge" },
          { en: "Citrus press", es: "Prensa de cítricos", de: "Zitruspresse", nl: "Citruspers" },
          { en: "Manual squeezer", es: "Exprimidor manual", de: "Handpresse", nl: "Handpers" },
          { en: "Coffee grinder", es: "Molinillo de café", de: "Kaffeemühle", nl: "Koffiemolen" }
        ],
        correct: 0,
        explanation: {
          en: "Masticating (slow) juicers are best for leafy greens because they crush and press vegetables slowly, extracting more juice and nutrients than centrifugal juicers.",
          es: "Los exprimidores masticadores (lentos) son mejores para las verduras de hoja porque trituran y prensan las verduras lentamente, extrayendo más jugo y nutrientes que los exprimidores centrífugos.",
          de: "Pressentsafter (langsame Entsafter) eignen sich am besten für Blattgemüse, weil sie Gemüse langsam zerdrücken und pressen und mehr Saft und Nährstoffe extrahieren als Zentrifugalentsafter.",
          nl: "Kauwende (langzame) sapcentrifuges zijn het beste voor bladgroenten omdat ze groenten langzaam verpletteren en persen, waarbij meer sap en voedingsstoffen worden geëxtraheerd dan bij centrifugale sapcentrifuges."
        }
      },
      {
        question: {
          en: "What does 'fortified juice' mean?",
          es: "¿Qué significa 'jugo fortificado'?",
          de: "Was bedeutet 'angereicherter Saft'?",
          nl: "Wat betekent 'verrijkt sap'?"
        },
        options: [
          { en: "Juice with added vitamins and minerals", es: "Jugo con vitaminas y minerales añadidos", de: "Saft mit zugesetzten Vitaminen und Mineralstoffen", nl: "Sap met toegevoegde vitamines en mineralen" },
          { en: "Extra thick juice", es: "Jugo extra espeso", de: "Extra dicker Saft", nl: "Extra dik sap" },
          { en: "Juice in a strong container", es: "Jugo en un contenedor fuerte", de: "Saft in einem starken Behälter", nl: "Sap in een sterke container" },
          { en: "Frozen juice", es: "Jugo congelado", de: "Gefrorener Saft", nl: "Bevroren sap" }
        ],
        correct: 0,
        explanation: {
          en: "Fortified juice has vitamins, minerals, or other nutrients added to it to boost its nutritional value, such as calcium-fortified orange juice.",
          es: "El jugo fortificado tiene vitaminas, minerales u otros nutrientes añadidos para aumentar su valor nutricional, como el jugo de naranja fortificado con calcio.",
          de: "Angereicherter Saft enthält zugesetzte Vitamine, Mineralien oder andere Nährstoffe zur Steigerung des Nährwerts, wie calciumangereicherter Orangensaft.",
          nl: "Verrijkt sap heeft toegevoegde vitamines, mineralen of andere voedingsstoffen om de voedingswaarde te verhogen, zoals met calcium verrijkt sinaasappelsap."
        }
      },
      {
        question: {
          en: "What is a juice 'blend'?",
          es: "¿Qué es una 'mezcla' de jugos?",
          de: "Was ist eine Saft-'Mischung'?",
          nl: "Wat is een sap-'blend'?"
        },
        options: [
          { en: "Juice made from multiple fruits or vegetables", es: "Jugo hecho de múltiples frutas o vegetales", de: "Saft aus mehreren Früchten oder Gemüsen", nl: "Sap gemaakt van meerdere vruchten of groenten" },
          { en: "Diluted juice", es: "Jugo diluido", de: "Verdünnter Saft", nl: "Verdund sap" },
          { en: "Juice mixed with milk", es: "Jugo mezclado con leche", de: "Saft mit Milch gemischt", nl: "Sap gemengd met melk" },
          { en: "Powdered juice mix", es: "Mezcla de jugo en polvo", de: "Pulversaftmischung", nl: "Poedersapmengsel" }
        ],
        correct: 0,
        explanation: {
          en: "A juice blend is made by combining juices from two or more different fruits or vegetables to create unique flavor combinations.",
          es: "Una mezcla de jugos se hace combinando jugos de dos o más frutas o vegetales diferentes para crear combinaciones de sabor únicas.",
          de: "Eine Saftmischung wird hergestellt, indem Säfte von zwei oder mehr verschiedenen Früchten oder Gemüsen kombiniert werden, um einzigartige Geschmackskombinationen zu schaffen.",
          nl: "Een sapblend wordt gemaakt door sappen van twee of meer verschillende vruchten of groenten te combineren om unieke smaakcombinaties te creëren."
        }
      },
      {
        question: {
          en: "Why is pomegranate juice more expensive than apple juice?",
          es: "¿Por qué es el jugo de granada más caro que el jugo de manzana?",
          de: "Warum ist Granatapfelsaft teurer als Apfelsaft?",
          nl: "Waarom is granaatappelsap duurder dan appelsap?"
        },
        options: [
          { en: "More difficult to extract and lower yield per fruit", es: "Más difícil de extraer y menor rendimiento por fruta", de: "Schwieriger zu extrahieren und geringerer Ertrag pro Frucht", nl: "Moeilijker te extraheren en lagere opbrengst per vrucht" },
          { en: "It has gold in it", es: "Tiene oro en él", de: "Es enthält Gold", nl: "Het bevat goud" },
          { en: "Only grows in one country", es: "Solo crece en un país", de: "Wächst nur in einem Land", nl: "Groeit alleen in één land" },
          { en: "Requires special storage", es: "Requiere almacenamiento especial", de: "Erfordert spezielle Lagerung", nl: "Vereist speciale opslag" }
        ],
        correct: 0,
        explanation: {
          en: "Pomegranate juice is more expensive because the seeds must be carefully extracted from the fruit, and each pomegranate yields less juice compared to apples.",
          es: "El jugo de granada es más caro porque las semillas deben extraerse cuidadosamente de la fruta, y cada granada produce menos jugo en comparación con las manzanas.",
          de: "Granatapfelsaft ist teurer, weil die Kerne sorgfältig aus der Frucht extrahiert werden müssen und jeder Granatapfel weniger Saft liefert im Vergleich zu Äpfeln.",
          nl: "Granaatappelsap is duurder omdat de pitten zorgvuldig uit de vrucht moeten worden gehaald, en elke granaatappel minder sap oplevert vergeleken met appels."
        }
      },
      {
        question: {
          en: "What happens when you mix acidic juice with milk?",
          es: "¿Qué pasa cuando mezclas jugo ácido con leche?",
          de: "Was passiert, wenn man sauren Saft mit Milch mischt?",
          nl: "Wat gebeurt er als je zuur sap met melk mengt?"
        },
        options: [
          { en: "The milk can curdle", es: "La leche puede cuajar", de: "Die Milch kann gerinnen", nl: "De melk kan schiften" },
          { en: "It turns green", es: "Se vuelve verde", de: "Es wird grün", nl: "Het wordt groen" },
          { en: "It explodes", es: "Explota", de: "Es explodiert", nl: "Het explodeert" },
          { en: "Nothing happens", es: "No pasa nada", de: "Nichts passiert", nl: "Er gebeurt niets" }
        ],
        correct: 0,
        explanation: {
          en: "When acidic juice (like orange or lemon juice) is mixed with milk, the acid can cause the milk proteins to curdle and separate, creating an unpleasant texture.",
          es: "Cuando el jugo ácido (como jugo de naranja o limón) se mezcla con leche, el ácido puede hacer que las proteínas de la leche se cuajen y separen, creando una textura desagradable.",
          de: "Wenn saurer Saft (wie Orangen- oder Zitronensaft) mit Milch gemischt wird, kann die Säure dazu führen, dass Milchproteine gerinnen und sich trennen, was eine unangenehme Textur erzeugt.",
          nl: "Wanneer zuur sap (zoals sinaasappel- of citroensap) met melk wordt gemengd, kan het zuur ervoor zorgen dat de melkeiwitten schiften en scheiden, wat een onaangename textuur creëert."
        }
      },
      {
        question: {
          en: "What is 'juice concentrate' used for?",
          es: "¿Para qué se usa el 'concentrado de jugo'?",
          de: "Wofür wird 'Saftkonzentrat' verwendet?",
          nl: "Waarvoor wordt 'sapconcentraat' gebruikt?"
        },
        options: [
          { en: "Reconstituting with water to make juice", es: "Reconstituir con agua para hacer jugo", de: "Mit Wasser rekonstituieren, um Saft herzustellen", nl: "Reconstituten met water om sap te maken" },
          { en: "Cleaning surfaces", es: "Limpiar superficies", de: "Oberflächen reinigen", nl: "Oppervlakken reinigen" },
          { en: "Making paint", es: "Hacer pintura", de: "Farbe herstellen", nl: "Verf maken" },
          { en: "Feeding plants", es: "Alimentar plantas", de: "Pflanzen füttern", nl: "Planten voeden" }
        ],
        correct: 0,
        explanation: {
          en: "Juice concentrate is created by removing water from fresh juice, making it easier to transport and store. Water is added back later to reconstitute it into juice.",
          es: "El concentrado de jugo se crea removiendo agua del jugo fresco, haciéndolo más fácil de transportar y almacenar. El agua se añade de vuelta más tarde para reconstituirlo en jugo.",
          de: "Saftkonzentrat wird durch Entfernen von Wasser aus frischem Saft hergestellt, was Transport und Lagerung erleichtert. Wasser wird später hinzugefügt, um es zu Saft zu rekonstituieren.",
          nl: "Sapconcentraat wordt gemaakt door water uit vers sap te verwijderen, waardoor het gemakkelijker te transporteren en op te slaan is. Water wordt later weer toegevoegd om het te reconstitueren tot sap."
        }
      },
      {
        question: {
          en: "What is the white layer on top of fresh orange juice?",
          es: "¿Qué es la capa blanca encima del jugo de naranja fresco?",
          de: "Was ist die weiße Schicht oben auf frischem Orangensaft?",
          nl: "Wat is de witte laag bovenop vers sinaasappelsap?"
        },
        options: [
          { en: "Foam from pulp and pectin", es: "Espuma de pulpa y pectina", de: "Schaum aus Fruchtfleisch und Pektin", nl: "Schuim van pulp en pectine" },
          { en: "Mold", es: "Moho", de: "Schimmel", nl: "Schimmel" },
          { en: "Added preservative", es: "Conservante añadido", de: "Zugesetztes Konservierungsmittel", nl: "Toegevoegd conserveermiddel" },
          { en: "Bacteria", es: "Bacterias", de: "Bakterien", nl: "Bacteriën" }
        ],
        correct: 0,
        explanation: {
          en: "The white foam on fresh orange juice is natural and comes from pulp fibers and pectin that rise to the surface during juicing - it's perfectly safe to drink.",
          es: "La espuma blanca en el jugo de naranja fresco es natural y proviene de las fibras de pulpa y pectina que suben a la superficie durante el exprimido - es perfectamente seguro de beber.",
          de: "Der weiße Schaum auf frischem Orangensaft ist natürlich und stammt von Fruchtfleischfasern und Pektin, die während des Entsaftens an die Oberfläche steigen - er ist völlig sicher zu trinken.",
          nl: "Het witte schuim op vers sinaasappelsap is natuurlijk en komt van pulpvezels en pectine die tijdens het persen naar de oppervlakte stijgen - het is volkomen veilig om te drinken."
        }
      },
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  } else if (typeof window !== 'undefined') {
    window.level2 = level2;
  }
})();
