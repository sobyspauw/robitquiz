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
      {
        question: {
          en: "Which juice has the highest natural sugar content?",
          es: "¿Qué jugo tiene el mayor contenido de azúcar natural?",
          de: "Welcher Saft hat den höchsten natürlichen Zuckergehalt?",
          nl: "Welk sap heeft het hoogste natuurlijke suikergehalte?"
        },
        options: [
          { en: "Grape juice", es: "Jugo de uva", de: "Traubensaft", nl: "Druivensap" },
          { en: "Lemon juice", es: "Jugo de limón", de: "Zitronensaft", nl: "Citroensap" },
          { en: "Tomato juice", es: "Jugo de tomate", de: "Tomatensaft", nl: "Tomatensap" },
          { en: "Cucumber juice", es: "Jugo de pepino", de: "Gurkensaft", nl: "Komkommersap" }
        ],
        correct: 0,
        explanation: {
          en: "Grape juice has one of the highest natural sugar contents among fruit juices, which is why it tastes very sweet.",
          es: "El jugo de uva tiene uno de los contenidos de azúcar natural más altos entre los jugos de frutas, por eso sabe muy dulce.",
          de: "Traubensaft hat einen der höchsten natürlichen Zuckergehalte unter Fruchtsäften, weshalb er sehr süß schmeckt.",
          nl: "Druivensap heeft een van de hoogste natuurlijke suikergehaltes onder vruchtensappen, daarom smaakt het zeer zoet."
        }
      },
      {
        question: {
          en: "What does 'cold-pressed' juice mean?",
          es: "¿Qué significa jugo 'prensado en frío'?",
          de: "Was bedeutet 'kaltgepresster' Saft?",
          nl: "Wat betekent 'koudgeperst' sap?"
        },
        options: [
          { en: "Juice extracted without heat to preserve nutrients", es: "Jugo extraído sin calor para preservar nutrientes", de: "Saft ohne Hitze extrahiert, um Nährstoffe zu erhalten", nl: "Sap geëxtraheerd zonder warmte om voedingsstoffen te behouden" },
          { en: "Juice stored in a refrigerator", es: "Jugo almacenado en refrigerador", de: "Saft im Kühlschrank gelagert", nl: "Sap bewaard in koelkast" },
          { en: "Frozen juice", es: "Jugo congelado", de: "Gefrorener Saft", nl: "Bevroren sap" },
          { en: "Juice with ice added", es: "Jugo con hielo añadido", de: "Saft mit Eis", nl: "Sap met ijs toegevoegd" }
        ],
        correct: 0,
        explanation: {
          en: "Cold-pressed juice is extracted using hydraulic pressure without heat, which helps preserve more vitamins, enzymes, and nutrients compared to traditional juicing methods.",
          es: "El jugo prensado en frío se extrae usando presión hidráulica sin calor, lo que ayuda a preservar más vitaminas, enzimas y nutrientes en comparación con métodos tradicionales de extracción.",
          de: "Kaltgepresster Saft wird mit hydraulischem Druck ohne Hitze extrahiert, was hilft, mehr Vitamine, Enzyme und Nährstoffe zu erhalten im Vergleich zu traditionellen Entsaftungsmethoden.",
          nl: "Koudgeperst sap wordt geëxtraheerd met hydraulische druk zonder warmte, wat helpt meer vitamines, enzymen en voedingsstoffen te behouden vergeleken met traditionele persmethoden."
        }
      },
      {
        question: {
          en: "Why is cranberry juice often mixed with other juices?",
          es: "¿Por qué el jugo de arándano a menudo se mezcla con otros jugos?",
          de: "Warum wird Cranberrysaft oft mit anderen Säften gemischt?",
          nl: "Waarom wordt veenbessensap vaak gemengd met andere sappen?"
        },
        options: [
          { en: "Pure cranberry juice is very tart and sour", es: "El jugo puro de arándano es muy ácido y agrio", de: "Reiner Cranberrysaft ist sehr herb und sauer", nl: "Puur veenbessensap is zeer wrang en zuur" },
          { en: "It's too expensive alone", es: "Es demasiado caro solo", de: "Es ist allein zu teuer", nl: "Het is te duur alleen" },
          { en: "It's illegal to sell pure cranberry juice", es: "Es ilegal vender jugo puro de arándano", de: "Es ist illegal, reinen Cranberrysaft zu verkaufen", nl: "Het is illegaal om puur veenbessensap te verkopen" },
          { en: "It spoils too quickly", es: "Se echa a perder demasiado rápido", de: "Es verdirbt zu schnell", nl: "Het bederft te snel" }
        ],
        correct: 0,
        explanation: {
          en: "Pure cranberry juice is extremely tart and sour, so it's commonly mixed with sweeter juices like apple or grape, or sweetened with sugar to make it more palatable.",
          es: "El jugo puro de arándano es extremadamente ácido y agrio, por lo que comúnmente se mezcla con jugos más dulces como manzana o uva, o se endulza con azúcar para hacerlo más agradable al paladar.",
          de: "Reiner Cranberrysaft ist extrem herb und sauer, daher wird er häufig mit süßeren Säften wie Apfel oder Traube gemischt oder mit Zucker gesüßt, um ihn schmackhafter zu machen.",
          nl: "Puur veenbessensap is extreem wrang en zuur, dus wordt het vaak gemengd met zoetere sappen zoals appel of druif, of gezoet met suiker om het aangenamer te maken."
        }
      },
      {
        question: {
          en: "What is the difference between apple juice and apple cider?",
          es: "¿Cuál es la diferencia entre jugo de manzana y sidra de manzana?",
          de: "Was ist der Unterschied zwischen Apfelsaft und Apfelwein?",
          nl: "Wat is het verschil tussen appelsap en appelcider?"
        },
        options: [
          { en: "Apple juice is filtered and clear, cider is unfiltered and cloudy", es: "El jugo de manzana es filtrado y claro, la sidra no está filtrada y es turbia", de: "Apfelsaft ist gefiltert und klar, Apfelwein ist ungefiltert und trüb", nl: "Appelsap is gefilterd en helder, cider is ongefilterd en troebel" },
          { en: "They are exactly the same", es: "Son exactamente lo mismo", de: "Sie sind genau gleich", nl: "Ze zijn precies hetzelfde" },
          { en: "Cider always contains alcohol", es: "La sidra siempre contiene alcohol", de: "Apfelwein enthält immer Alkohol", nl: "Cider bevat altijd alcohol" },
          { en: "Apple juice is carbonated", es: "El jugo de manzana está carbonatado", de: "Apfelsaft ist kohlensäurehaltig", nl: "Appelsap is koolzuurhoudend" }
        ],
        correct: 0,
        explanation: {
          en: "Apple juice is typically filtered to remove pulp and sediment, making it clear, while apple cider is unfiltered or lightly filtered, giving it a cloudy appearance and more robust flavor.",
          es: "El jugo de manzana típicamente se filtra para remover pulpa y sedimento, haciéndolo claro, mientras que la sidra de manzana no se filtra o se filtra ligeramente, dándole una apariencia turbia y un sabor más robusto.",
          de: "Apfelsaft wird typischerweise gefiltert, um Fruchtfleisch und Sediment zu entfernen und klar zu machen, während Apfelwein ungefiltert oder leicht gefiltert ist, was ihm ein trübes Aussehen und robusteren Geschmack verleiht.",
          nl: "Appelsap wordt meestal gefilterd om pulp en sediment te verwijderen, waardoor het helder wordt, terwijl appelcider ongefilterd of licht gefilterd is, wat het een troebel uiterlijk en robuustere smaak geeft."
        }
      },
      {
        question: {
          en: "Which mineral is often added to fortified orange juice?",
          es: "¿Qué mineral se añade a menudo al jugo de naranja fortificado?",
          de: "Welches Mineral wird häufig zu angereichertem Orangensaft hinzugefügt?",
          nl: "Welk mineraal wordt vaak toegevoegd aan verrijkt sinaasappelsap?"
        },
        options: [
          { en: "Calcium", es: "Calcio", de: "Kalzium", nl: "Calcium" },
          { en: "Copper", es: "Cobre", de: "Kupfer", nl: "Koper" },
          { en: "Silver", es: "Plata", de: "Silber", nl: "Zilver" },
          { en: "Lead", es: "Plomo", de: "Blei", nl: "Lood" }
        ],
        correct: 0,
        explanation: {
          en: "Calcium is frequently added to orange juice to boost bone health benefits, making it a good source of this essential mineral along with Vitamin C.",
          es: "El calcio se añade frecuentemente al jugo de naranja para aumentar los beneficios para la salud ósea, convirtiéndolo en una buena fuente de este mineral esencial junto con la Vitamina C.",
          de: "Kalzium wird häufig zu Orangensaft hinzugefügt, um die Vorteile für die Knochengesundheit zu steigern und ihn zu einer guten Quelle dieses essentiellen Minerals neben Vitamin C zu machen.",
          nl: "Calcium wordt vaak toegevoegd aan sinaasappelsap om de voordelen voor botgezondheid te vergroten, waardoor het een goede bron van dit essentiële mineraal wordt naast vitamine C."
        }
      },
      {
        question: {
          en: "What gives carrot juice its orange color?",
          es: "¿Qué le da al jugo de zanahoria su color naranja?",
          de: "Was gibt Karottensaft seine orange Farbe?",
          nl: "Wat geeft wortelsap zijn oranje kleur?"
        },
        options: [
          { en: "Beta-carotene", es: "Betacaroteno", de: "Beta-Carotin", nl: "Bètacaroteen" },
          { en: "Food coloring", es: "Colorante alimentario", de: "Lebensmittelfarbe", nl: "Voedselkleurstof" },
          { en: "Vitamin C", es: "Vitamina C", de: "Vitamin C", nl: "Vitamine C" },
          { en: "Orange juice added", es: "Jugo de naranja añadido", de: "Zugesetzter Orangensaft", nl: "Toegevoegd sinaasappelsap" }
        ],
        correct: 0,
        explanation: {
          en: "Beta-carotene, a powerful antioxidant that the body converts to Vitamin A, gives carrots and carrot juice their distinctive orange color.",
          es: "El betacaroteno, un poderoso antioxidante que el cuerpo convierte en Vitamina A, le da a las zanahorias y al jugo de zanahoria su distintivo color naranja.",
          de: "Beta-Carotin, ein starkes Antioxidans, das der Körper in Vitamin A umwandelt, gibt Karotten und Karottensaft ihre charakteristische orange Farbe.",
          nl: "Bètacaroteen, een krachtige antioxidant die het lichaam omzet in vitamine A, geeft wortels en wortelsap hun kenmerkende oranje kleur."
        }
      },
      {
        question: {
          en: "How long does fresh-squeezed orange juice typically last in the refrigerator?",
          es: "¿Cuánto tiempo dura típicamente el jugo de naranja recién exprimido en el refrigerador?",
          de: "Wie lange hält sich frisch gepresster Orangensaft typischerweise im Kühlschrank?",
          nl: "Hoe lang blijft vers geperst sinaasappelsap meestal goed in de koelkast?"
        },
        options: [
          { en: "2-3 days", es: "2-3 días", de: "2-3 Tage", nl: "2-3 dagen" },
          { en: "2-3 weeks", es: "2-3 semanas", de: "2-3 Wochen", nl: "2-3 weken" },
          { en: "2-3 months", es: "2-3 meses", de: "2-3 Monate", nl: "2-3 maanden" },
          { en: "1 year", es: "1 año", de: "1 Jahr", nl: "1 jaar" }
        ],
        correct: 0,
        explanation: {
          en: "Fresh-squeezed orange juice without preservatives typically lasts only 2-3 days in the refrigerator before starting to lose quality and freshness.",
          es: "El jugo de naranja recién exprimido sin conservantes típicamente dura solo 2-3 días en el refrigerador antes de comenzar a perder calidad y frescura.",
          de: "Frisch gepresster Orangensaft ohne Konservierungsstoffe hält sich typischerweise nur 2-3 Tage im Kühlschrank, bevor er an Qualität und Frische zu verlieren beginnt.",
          nl: "Vers geperst sinaasappelsap zonder conserveermiddelen blijft meestal slechts 2-3 dagen goed in de koelkast voordat het kwaliteit en versheid begint te verliezen."
        }
      },
      {
        question: {
          en: "What is the main health benefit of drinking beet juice?",
          es: "¿Cuál es el principal beneficio de salud de beber jugo de remolacha?",
          de: "Was ist der Hauptgesundheitsvorteil des Trinkens von Rote-Bete-Saft?",
          nl: "Wat is het belangrijkste gezondheidsvoordeel van het drinken van bietensap?"
        },
        options: [
          { en: "Improves blood flow and lowers blood pressure", es: "Mejora el flujo sanguíneo y reduce la presión arterial", de: "Verbessert die Durchblutung und senkt den Blutdruck", nl: "Verbetert de bloedstroom en verlaagt bloeddruk" },
          { en: "Whitens teeth", es: "Blanquea los dientes", de: "Bleicht die Zähne", nl: "Maakt tanden witter" },
          { en: "Grows hair faster", es: "Hace crecer el cabello más rápido", de: "Lässt Haare schneller wachsen", nl: "Laat haar sneller groeien" },
          { en: "Improves eyesight at night", es: "Mejora la visión nocturna", de: "Verbessert die Nachtsicht", nl: "Verbetert nachtzicht" }
        ],
        correct: 0,
        explanation: {
          en: "Beet juice is rich in nitrates that the body converts to nitric oxide, which helps dilate blood vessels, improve blood flow, and lower blood pressure.",
          es: "El jugo de remolacha es rico en nitratos que el cuerpo convierte en óxido nítrico, lo que ayuda a dilatar los vasos sanguíneos, mejorar el flujo sanguíneo y reducir la presión arterial.",
          de: "Rote-Bete-Saft ist reich an Nitraten, die der Körper in Stickstoffmonoxid umwandelt, was hilft, Blutgefäße zu erweitern, die Durchblutung zu verbessern und den Blutdruck zu senken.",
          nl: "Bietensap is rijk aan nitraten die het lichaam omzet in stikstofmonoxide, wat helpt bloedvaten te verwijden, de bloedstroom te verbeteren en de bloeddruk te verlagen."
        }
      },
      {
        question: {
          en: "Which juice brand is known for its 'No Pulp, Some Pulp, Lots of Pulp' options?",
          es: "¿Qué marca de jugo es conocida por sus opciones 'Sin Pulpa, Algo de Pulpa, Mucha Pulpa'?",
          de: "Welche Saftmarke ist bekannt für ihre 'Kein Fruchtfleisch, Etwas Fruchtfleisch, Viel Fruchtfleisch' Optionen?",
          nl: "Welk sapmerk staat bekend om zijn 'Geen Vruchtvlees, Wat Vruchtvlees, Veel Vruchtvlees' opties?"
        },
        options: [
          { en: "Tropicana", es: "Tropicana", de: "Tropicana", nl: "Tropicana" },
          { en: "Minute Maid", es: "Minute Maid", de: "Minute Maid", nl: "Minute Maid" },
          { en: "Dole", es: "Dole", de: "Dole", nl: "Dole" },
          { en: "V8", es: "V8", de: "V8", nl: "V8" }
        ],
        correct: 0,
        explanation: {
          en: "Tropicana is famous for offering orange juice with different pulp levels: No Pulp, Some Pulp, and Lots of Pulp, allowing consumers to choose their preferred texture.",
          es: "Tropicana es famosa por ofrecer jugo de naranja con diferentes niveles de pulpa: Sin Pulpa, Algo de Pulpa y Mucha Pulpa, permitiendo a los consumidores elegir su textura preferida.",
          de: "Tropicana ist berühmt dafür, Orangensaft mit verschiedenen Fruchtfleischstufen anzubieten: Kein Fruchtfleisch, Etwas Fruchtfleisch und Viel Fruchtfleisch, damit Verbraucher ihre bevorzugte Textur wählen können.",
          nl: "Tropicana is beroemd om het aanbieden van sinaasappelsap met verschillende vruchtvleesniveaus: Geen Vruchtvlees, Wat Vruchtvlees en Veel Vruchtvlees, waardoor consumenten hun voorkeurstextuur kunnen kiezen."
        }
      },
      {
        question: {
          en: "Why does grapefruit juice interact with some medications?",
          es: "¿Por qué el jugo de toronja interactúa con algunos medicamentos?",
          de: "Warum interagiert Grapefruitsaft mit einigen Medikamenten?",
          nl: "Waarom interacteert grapefruitsap met sommige medicijnen?"
        },
        options: [
          { en: "It contains compounds that affect drug metabolism", es: "Contiene compuestos que afectan el metabolismo de medicamentos", de: "Es enthält Verbindungen, die den Arzneimittelstoffwechsel beeinflussen", nl: "Het bevat stoffen die de medicijnafbraak beïnvloeden" },
          { en: "It's too acidic", es: "Es demasiado ácido", de: "Es ist zu sauer", nl: "Het is te zuur" },
          { en: "It has too much sugar", es: "Tiene demasiada azúcar", de: "Es hat zu viel Zucker", nl: "Het heeft te veel suiker" },
          { en: "It dilutes the medication", es: "Diluye el medicamento", de: "Es verdünnt das Medikament", nl: "Het verdunt het medicijn" }
        ],
        correct: 0,
        explanation: {
          en: "Grapefruit juice contains compounds called furanocoumarins that can interfere with enzymes in the liver and intestines that metabolize medications, potentially leading to dangerous drug levels.",
          es: "El jugo de toronja contiene compuestos llamados furanocumarinas que pueden interferir con las enzimas en el hígado e intestinos que metabolizan medicamentos, potencialmente llevando a niveles peligrosos de medicamentos.",
          de: "Grapefruitsaft enthält Verbindungen namens Furanocumarine, die Enzyme in Leber und Darm stören können, die Medikamente metabolisieren, was potenziell zu gefährlichen Arzneimittelspiegeln führen kann.",
          nl: "Grapefruitsap bevat stoffen genaamd furanocoumarines die enzymen in de lever en darmen kunnen verstoren die medicijnen afbreken, wat mogelijk tot gevaarlijke medicijnspiegels kan leiden."
        }
      },
      {
        question: {
          en: "What type of juice is V8 known for?",
          es: "¿Por qué tipo de jugo es conocido V8?",
          de: "Für welche Art von Saft ist V8 bekannt?",
          nl: "Voor welk type sap staat V8 bekend?"
        },
        options: [
          { en: "Vegetable juice blend", es: "Mezcla de jugos de vegetales", de: "Gemüsesaftmischung", nl: "Groentensapmengsel" },
          { en: "Pure orange juice", es: "Jugo de naranja puro", de: "Reiner Orangensaft", nl: "Puur sinaasappelsap" },
          { en: "Apple juice", es: "Jugo de manzana", de: "Apfelsaft", nl: "Appelsap" },
          { en: "Grape juice", es: "Jugo de uva", de: "Traubensaft", nl: "Druivensap" }
        ],
        correct: 0,
        explanation: {
          en: "V8 is famous for its vegetable juice blend containing 8 vegetables: tomatoes, carrots, celery, beets, parsley, lettuce, watercress, and spinach.",
          es: "V8 es famoso por su mezcla de jugos de vegetales que contiene 8 vegetales: tomates, zanahorias, apio, remolachas, perejil, lechuga, berro y espinaca.",
          de: "V8 ist berühmt für seine Gemüsesaftmischung, die 8 Gemüse enthält: Tomaten, Karotten, Sellerie, Rüben, Petersilie, Salat, Brunnenkresse und Spinat.",
          nl: "V8 is beroemd om zijn groentensapmengsel dat 8 groenten bevat: tomaten, wortels, selderij, bieten, peterselie, sla, waterkers en spinazie."
        }
      },
      {
        question: {
          en: "What is the process called when juice is heated briefly to kill bacteria?",
          es: "¿Cómo se llama el proceso cuando el jugo se calienta brevemente para matar bacterias?",
          de: "Wie heißt der Prozess, wenn Saft kurz erhitzt wird, um Bakterien abzutöten?",
          nl: "Hoe heet het proces waarbij sap kort wordt verhit om bacteriën te doden?"
        },
        options: [
          { en: "Pasteurization", es: "Pasteurización", de: "Pasteurisierung", nl: "Pasteurisatie" },
          { en: "Carbonation", es: "Carbonatación", de: "Karbonisierung", nl: "Koolzuurtoevoeging" },
          { en: "Fermentation", es: "Fermentación", de: "Fermentation", nl: "Fermentatie" },
          { en: "Filtration", es: "Filtración", de: "Filtration", nl: "Filtratie" }
        ],
        correct: 0,
        explanation: {
          en: "Pasteurization is the process of heating juice briefly to a specific temperature to kill harmful bacteria and extend shelf life while preserving most nutrients.",
          es: "La pasteurización es el proceso de calentar el jugo brevemente a una temperatura específica para matar bacterias dañinas y extender la vida útil mientras se preservan la mayoría de los nutrientes.",
          de: "Pasteurisierung ist der Prozess des kurzen Erhitzens von Saft auf eine bestimmte Temperatur, um schädliche Bakterien abzutöten und die Haltbarkeit zu verlängern, während die meisten Nährstoffe erhalten bleiben.",
          nl: "Pasteurisatie is het proces van het kort verhitten van sap tot een specifieke temperatuur om schadelijke bacteriën te doden en de houdbaarheid te verlengen terwijl de meeste voedingsstoffen behouden blijven."
        }
      },
      {
        question: {
          en: "Which juice is commonly recommended for urinary tract health?",
          es: "¿Qué jugo se recomienda comúnmente para la salud del tracto urinario?",
          de: "Welcher Saft wird häufig für die Gesundheit der Harnwege empfohlen?",
          nl: "Welk sap wordt vaak aanbevolen voor de gezondheid van de urinewegen?"
        },
        options: [
          { en: "Cranberry juice", es: "Jugo de arándano", de: "Cranberrysaft", nl: "Veenbessensap" },
          { en: "Orange juice", es: "Jugo de naranja", de: "Orangensaft", nl: "Sinaasappelsap" },
          { en: "Apple juice", es: "Jugo de manzana", de: "Apfelsaft", nl: "Appelsap" },
          { en: "Pineapple juice", es: "Jugo de piña", de: "Ananassaft", nl: "Ananassap" }
        ],
        correct: 0,
        explanation: {
          en: "Cranberry juice is often recommended for urinary tract health because it contains compounds that may help prevent bacteria from adhering to the urinary tract walls.",
          es: "El jugo de arándano se recomienda a menudo para la salud del tracto urinario porque contiene compuestos que pueden ayudar a prevenir que las bacterias se adhieran a las paredes del tracto urinario.",
          de: "Cranberrysaft wird oft für die Gesundheit der Harnwege empfohlen, weil er Verbindungen enthält, die helfen können, zu verhindern, dass Bakterien an den Harnwegswänden haften.",
          nl: "Veenbessensap wordt vaak aanbevolen voor de gezondheid van de urinewegen omdat het stoffen bevat die kunnen helpen voorkomen dat bacteriën aan de wanden van de urinewegen hechten."
        }
      },
      {
        question: {
          en: "What does HPP stand for in juice processing?",
          es: "¿Qué significa HPP en el procesamiento de jugos?",
          de: "Wofür steht HPP in der Saftverarbeitung?",
          nl: "Waar staat HPP voor bij sapverwerking?"
        },
        options: [
          { en: "High Pressure Processing", es: "Procesamiento de Alta Presión", de: "Hochdruckverarbeitung", nl: "Hoge Druk Verwerking" },
          { en: "Hot Pulp Pressing", es: "Prensado de Pulpa Caliente", de: "Heißes Fruchtfleischpressen", nl: "Hete Pulp Persing" },
          { en: "Healthy Pure Product", es: "Producto Puro Saludable", de: "Gesundes Reines Produkt", nl: "Gezond Puur Product" },
          { en: "Hand Picked Premium", es: "Premium Recogido a Mano", de: "Handverlesenes Premium", nl: "Handgeplukt Premium" }
        ],
        correct: 0,
        explanation: {
          en: "HPP (High Pressure Processing) is a method that uses extreme pressure instead of heat to kill bacteria in juice, preserving more nutrients and fresh flavor.",
          es: "HPP (Procesamiento de Alta Presión) es un método que usa presión extrema en lugar de calor para matar bacterias en el jugo, preservando más nutrientes y sabor fresco.",
          de: "HPP (Hochdruckverarbeitung) ist eine Methode, die extremen Druck statt Hitze verwendet, um Bakterien im Saft abzutöten und dabei mehr Nährstoffe und frischen Geschmack zu erhalten.",
          nl: "HPP (Hoge Druk Verwerking) is een methode die extreme druk in plaats van warmte gebruikt om bacteriën in sap te doden, waarbij meer voedingsstoffen en verse smaak behouden blijven."
        }
      },
      {
        question: {
          en: "Why does lemon juice prevent cut apples from browning?",
          es: "¿Por qué el jugo de limón previene que las manzanas cortadas se pongan marrones?",
          de: "Warum verhindert Zitronensaft, dass geschnittene Äpfel braun werden?",
          nl: "Waarom voorkomt citroensap dat gesneden appels bruin worden?"
        },
        options: [
          { en: "The acid and vitamin C slow oxidation", es: "El ácido y la vitamina C ralentizan la oxidación", de: "Die Säure und Vitamin C verlangsamen die Oxidation", nl: "Het zuur en vitamine C vertragen oxidatie" },
          { en: "It changes the apple's color", es: "Cambia el color de la manzana", de: "Es ändert die Farbe des Apfels", nl: "Het verandert de kleur van de appel" },
          { en: "It adds a protective coating", es: "Añade una capa protectora", de: "Es fügt eine Schutzschicht hinzu", nl: "Het voegt een beschermende laag toe" },
          { en: "It kills the apple cells", es: "Mata las células de la manzana", de: "Es tötet die Apfelzellen", nl: "Het doodt de appelcellen" }
        ],
        correct: 0,
        explanation: {
          en: "Lemon juice contains citric acid and vitamin C (ascorbic acid) which act as antioxidants, slowing down the oxidation process that causes apples to turn brown when exposed to air.",
          es: "El jugo de limón contiene ácido cítrico y vitamina C (ácido ascórbico) que actúan como antioxidantes, ralentizando el proceso de oxidación que hace que las manzanas se pongan marrones cuando se exponen al aire.",
          de: "Zitronensaft enthält Zitronensäure und Vitamin C (Ascorbinsäure), die als Antioxidantien wirken und den Oxidationsprozess verlangsamen, der Äpfel braun werden lässt, wenn sie der Luft ausgesetzt sind.",
          nl: "Citroensap bevat citroenzuur en vitamine C (ascorbinezuur) die als antioxidanten werken, waardoor het oxidatieproces wordt vertraagd dat appels bruin laat worden wanneer ze aan lucht worden blootgesteld."
        }
      },
      {
        question: {
          en: "What is the typical shelf life of unopened pasteurized orange juice?",
          es: "¿Cuál es la vida útil típica del jugo de naranja pasteurizado sin abrir?",
          de: "Was ist die typische Haltbarkeit von ungeöffnetem pasteurisiertem Orangensaft?",
          nl: "Wat is de typische houdbaarheid van ongeopend gepasteuriseerd sinaasappelsap?"
        },
        options: [
          { en: "1-2 weeks refrigerated", es: "1-2 semanas refrigerado", de: "1-2 Wochen gekühlt", nl: "1-2 weken gekoeld" },
          { en: "1-2 days", es: "1-2 días", de: "1-2 Tage", nl: "1-2 dagen" },
          { en: "6 months at room temperature", es: "6 meses a temperatura ambiente", de: "6 Monate bei Raumtemperatur", nl: "6 maanden bij kamertemperatuur" },
          { en: "Several years", es: "Varios años", de: "Mehrere Jahre", nl: "Meerdere jaren" }
        ],
        correct: 0,
        explanation: {
          en: "Unopened pasteurized orange juice stored in the refrigerator typically lasts 1-2 weeks. Once opened, it should be consumed within 7-10 days.",
          es: "El jugo de naranja pasteurizado sin abrir almacenado en el refrigerador típicamente dura 1-2 semanas. Una vez abierto, debe consumirse dentro de 7-10 días.",
          de: "Ungeöffneter pasteurisierter Orangensaft im Kühlschrank hält sich typischerweise 1-2 Wochen. Nach dem Öffnen sollte er innerhalb von 7-10 Tagen verbraucht werden.",
          nl: "Ongeopend gepasteuriseerd sinaasappelsap bewaard in de koelkast blijft meestal 1-2 weken goed. Eenmaal geopend moet het binnen 7-10 dagen worden geconsumeerd."
        }
      },
      {
        question: {
          en: "Which juice contains bromelain, an enzyme that can tenderize meat?",
          es: "¿Qué jugo contiene bromelina, una enzima que puede ablandar la carne?",
          de: "Welcher Saft enthält Bromelain, ein Enzym, das Fleisch zart machen kann?",
          nl: "Welk sap bevat bromelaïne, een enzym dat vlees mals kan maken?"
        },
        options: [
          { en: "Pineapple juice", es: "Jugo de piña", de: "Ananassaft", nl: "Ananassap" },
          { en: "Orange juice", es: "Jugo de naranja", de: "Orangensaft", nl: "Sinaasappelsap" },
          { en: "Apple juice", es: "Jugo de manzana", de: "Apfelsaft", nl: "Appelsap" },
          { en: "Grape juice", es: "Jugo de uva", de: "Traubensaft", nl: "Druivensap" }
        ],
        correct: 0,
        explanation: {
          en: "Pineapple juice contains bromelain, a proteolytic enzyme that breaks down protein, making it useful for tenderizing meat in marinades.",
          es: "El jugo de piña contiene bromelina, una enzima proteolítica que descompone las proteínas, haciéndola útil para ablandar la carne en adobos.",
          de: "Ananassaft enthält Bromelain, ein proteolytisches Enzym, das Protein abbaut und es nützlich macht, um Fleisch in Marinaden zart zu machen.",
          nl: "Ananassap bevat bromelaïne, een proteolytisch enzym dat eiwit afbreekt, waardoor het nuttig is voor het mals maken van vlees in marinades."
        }
      },
      {
        question: {
          en: "What is the difference between juice and juice drink?",
          es: "¿Cuál es la diferencia entre jugo y bebida de jugo?",
          de: "Was ist der Unterschied zwischen Saft und Saftgetränk?",
          nl: "Wat is het verschil tussen sap en sapdrank?"
        },
        options: [
          { en: "Juice is 100% fruit, juice drink contains added water and sugar", es: "El jugo es 100% fruta, la bebida de jugo contiene agua y azúcar añadidos", de: "Saft ist 100% Frucht, Saftgetränk enthält zugesetztes Wasser und Zucker", nl: "Sap is 100% vrucht, sapdrank bevat toegevoegd water en suiker" },
          { en: "They are exactly the same", es: "Son exactamente lo mismo", de: "Sie sind genau gleich", nl: "Ze zijn precies hetzelfde" },
          { en: "Juice drink is healthier", es: "La bebida de jugo es más saludable", de: "Saftgetränk ist gesünder", nl: "Sapdrank is gezonder" },
          { en: "Juice is always carbonated", es: "El jugo siempre está carbonatado", de: "Saft ist immer kohlensäurehaltig", nl: "Sap is altijd koolzuurhoudend" }
        ],
        correct: 0,
        explanation: {
          en: "True juice is 100% fruit or vegetable juice, while a 'juice drink' or 'juice cocktail' typically contains only 5-95% juice with added water, sugar, and flavoring.",
          es: "El jugo verdadero es 100% jugo de fruta o vegetal, mientras que una 'bebida de jugo' o 'cóctel de jugo' típicamente contiene solo 5-95% de jugo con agua, azúcar y saborizantes añadidos.",
          de: "Echter Saft ist 100% Frucht- oder Gemüsesaft, während ein 'Saftgetränk' oder 'Saftcocktail' typischerweise nur 5-95% Saft mit zugesetztem Wasser, Zucker und Aromen enthält.",
          nl: "Echt sap is 100% vrucht- of groentensap, terwijl een 'sapdrank' of 'sapcocktail' meestal slechts 5-95% sap bevat met toegevoegd water, suiker en smaakstoffen."
        }
      },
      {
        question: {
          en: "Why is fresh-squeezed juice considered healthier than store-bought?",
          es: "¿Por qué el jugo recién exprimido se considera más saludable que el comprado en tienda?",
          de: "Warum gilt frisch gepresster Saft als gesünder als im Laden gekaufter?",
          nl: "Waarom wordt vers geperst sap als gezonder beschouwd dan in de winkel gekocht sap?"
        },
        options: [
          { en: "Higher vitamin content and no preservatives", es: "Mayor contenido de vitaminas y sin conservantes", de: "Höherer Vitamingehalt und keine Konservierungsstoffe", nl: "Hoger vitaminegehalte en geen conserveermiddelen" },
          { en: "It has more sugar", es: "Tiene más azúcar", de: "Es hat mehr Zucker", nl: "Het heeft meer suiker" },
          { en: "It's more expensive", es: "Es más caro", de: "Es ist teurer", nl: "Het is duurder" },
          { en: "It comes in fancy bottles", es: "Viene en botellas elegantes", de: "Es kommt in schicken Flaschen", nl: "Het komt in mooie flessen" }
        ],
        correct: 0,
        explanation: {
          en: "Fresh-squeezed juice retains more vitamins and enzymes because it hasn't been pasteurized or had preservatives added, though it spoils faster than store-bought juice.",
          es: "El jugo recién exprimido retiene más vitaminas y enzimas porque no ha sido pasteurizado ni tiene conservantes añadidos, aunque se echa a perder más rápido que el jugo comprado en tienda.",
          de: "Frisch gepresster Saft behält mehr Vitamine und Enzyme, weil er nicht pasteurisiert wurde und keine Konservierungsstoffe enthält, obwohl er schneller verdirbt als im Laden gekaufter Saft.",
          nl: "Vers geperst sap behoudt meer vitamines en enzymen omdat het niet is gepasteuriseerd of conserveermiddelen toegevoegd heeft, hoewel het sneller bederft dan in de winkel gekocht sap."
        }
      },
      {
        question: {
          en: "What gives prune juice its natural laxative effect?",
          es: "¿Qué le da al jugo de ciruela pasa su efecto laxante natural?",
          de: "Was gibt Pflaumensaft seine natürliche abführende Wirkung?",
          nl: "Wat geeft pruimedantensap zijn natuurlijke laxerende effect?"
        },
        options: [
          { en: "High fiber and sorbitol content", es: "Alto contenido de fibra y sorbitol", de: "Hoher Ballaststoff- und Sorbitolgehalt", nl: "Hoog vezel- en sorbitolgehalte" },
          { en: "Added chemicals", es: "Químicos añadidos", de: "Zugesetzte Chemikalien", nl: "Toegevoegde chemicaliën" },
          { en: "Carbonation", es: "Carbonatación", de: "Karbonisierung", nl: "Koolzuur" },
          { en: "Extra water", es: "Agua extra", de: "Extra Wasser", nl: "Extra water" }
        ],
        correct: 0,
        explanation: {
          en: "Prune juice is naturally high in fiber and sorbitol (a sugar alcohol), both of which help promote digestive movement and relieve constipation.",
          es: "El jugo de ciruela pasa es naturalmente alto en fibra y sorbitol (un alcohol de azúcar), ambos ayudan a promover el movimiento digestivo y aliviar el estreñimiento.",
          de: "Pflaumensaft ist natürlicherweise reich an Ballaststoffen und Sorbitol (ein Zuckeralkohol), die beide helfen, die Verdauung zu fördern und Verstopfung zu lindern.",
          nl: "Pruimedantensap is van nature rijk aan vezels en sorbitol (een suikeralcohol), die beide helpen de spijsvertering te bevorderen en obstipatie te verlichten."
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
