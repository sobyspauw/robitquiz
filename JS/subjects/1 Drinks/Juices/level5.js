// Quiz Level 5: Drinken - Sappen (Juice Production & Health)
(function() {
  const level5 = {
    name: {
      en: "Juice Production & Health",
      es: "Producción de Jugos y Salud",
      de: "Saftproduktion und Gesundheit",
      nl: "Sapproductie en Gezondheid"
    },
    questions: [
      {
        question: {
          en: "What is pasteurization and why is it used in juice production?",
          es: "¿Qué es la pasteurización y por qué se usa en la producción de jugos?",
          de: "Was ist Pasteurisierung und warum wird sie in der Saftproduktion verwendet?",
          nl: "Wat is pasteurisatie en waarom wordt het gebruikt bij sapproductie?"
        },
        options: [
          { en: "Heating juice to kill harmful bacteria", es: "Calentar el jugo para matar bacterias dañinas", de: "Saft erhitzen um schädliche Bakterien abzutöten", nl: "Sap verwarmen om schadelijke bacteriën te doden" },
          { en: "Adding sugar to juice", es: "Añadir azúcar al jugo", de: "Zucker zum Saft hinzufügen", nl: "Suiker toevoegen aan sap" },
          { en: "Freezing juice for storage", es: "Congelar jugo para almacenamiento", de: "Saft zum Lagern einfrieren", nl: "Sap invriezen voor opslag" },
          { en: "Adding artificial colors", es: "Añadir colores artificiales", de: "Künstliche Farben hinzufügen", nl: "Kunstmatige kleuren toevoegen" }
        ],
        correct: 0,
        explanation: {
          en: "Pasteurization heats juice to about 75°C for a short time to kill harmful bacteria while preserving most nutrients and flavor.",
          es: "La pasteurización calienta el jugo a unos 75°C por poco tiempo para matar bacterias dañinas mientras preserva la mayoría de nutrientes y sabor.",
          de: "Pasteurisierung erhitzt Saft auf etwa 75°C für kurze Zeit, um schädliche Bakterien abzutöten und dabei die meisten Nährstoffe und den Geschmack zu erhalten.",
          nl: "Pasteurisatie verwarmt sap tot ongeveer 75°C voor korte tijd om schadelijke bacteriën te doden terwijl de meeste voedingsstoffen en smaak behouden blijven."
        }
      },
      {
        question: {
          en: "What vitamin is orange juice most famous for containing?",
          es: "¿Por qué vitamina es más famoso el jugo de naranja?",
          de: "Für welches Vitamin ist Orangensaft am berühmtesten?",
          nl: "Voor welke vitamine staat sinaasappelsap het meest bekend?"
        },
        options: [
          { en: "Vitamin C", es: "Vitamina C", de: "Vitamin C", nl: "Vitamine C" },
          { en: "Vitamin A", es: "Vitamina A", de: "Vitamin A", nl: "Vitamine A" },
          { en: "Vitamin D", es: "Vitamina D", de: "Vitamin D", nl: "Vitamine D" },
          { en: "Vitamin K", es: "Vitamina K", de: "Vitamin K", nl: "Vitamine K" }
        ],
        correct: 0,
        explanation: {
          en: "Orange juice is particularly rich in Vitamin C, which supports immune system function and helps the body absorb iron.",
          es: "El jugo de naranja es particularmente rico en Vitamina C, que apoya la función del sistema inmune y ayuda al cuerpo a absorber hierro.",
          de: "Orangensaft ist besonders reich an Vitamin C, das die Immunsystemfunktion unterstützt und dem Körper hilft, Eisen zu absorbieren.",
          nl: "Sinaasappelsap is bijzonder rijk aan Vitamine C, die de immuunsysteemfunctie ondersteunt en het lichaam helpt ijzer op te nemen."
        }
      },
      {
        question: {
          en: "What does 'from concentrate' mean on juice labels?",
          es: "¿Qué significa 'from concentrate' en las etiquetas de jugos?",
          de: "Was bedeutet 'aus Konzentrat' auf Saftetiketten?",
          nl: "Wat betekent 'uit concentraat' op saplabels?"
        },
        options: [
          { en: "Water was removed then added back", es: "Se removió agua y luego se añadió de vuelta", de: "Wasser wurde entfernt und dann wieder hinzugefügt", nl: "Water werd weggenomen en daarna weer toegevoegd" },
          { en: "Made with extra vitamins", es: "Hecho con vitaminas extra", de: "Mit extra Vitaminen hergestellt", nl: "Gemaakt met extra vitamines" },
          { en: "Contains no sugar", es: "No contiene azúcar", de: "Enthält keinen Zucker", nl: "Bevat geen suiker" },
          { en: "Made from frozen fruit", es: "Hecho de fruta congelada", de: "Aus gefrorenen Früchten hergestellt", nl: "Gemaakt van bevroren fruit" }
        ],
        correct: 0,
        explanation: {
          en: "Concentrate is made by removing water from juice for easier transport, then water is added back before packaging.",
          es: "El concentrado se hace removiendo agua del jugo para transporte más fácil, luego se añade agua de vuelta antes del empaque.",
          de: "Konzentrat wird hergestellt, indem Wasser aus dem Saft für einfacheren Transport entfernt wird, dann wird vor der Verpackung Wasser wieder hinzugefügt.",
          nl: "Concentraat wordt gemaakt door water uit sap te halen voor gemakkelijker transport, daarna wordt water weer toegevoegd voor verpakking."
        }
      },
      {
        question: {
          en: "Which processing method keeps more vitamins in juice?",
          es: "¿Qué método de procesamiento mantiene más vitaminas en el jugo?",
          de: "Welche Verarbeitungsmethode erhält mehr Vitamine im Saft?",
          nl: "Welke verwerkingsmethode behoudt meer vitamines in sap?"
        },
        options: [
          { en: "Cold pressing", es: "Prensado en frío", de: "Kaltpressung", nl: "Koudpersen" },
          { en: "High heat treatment", es: "Tratamiento de alto calor", de: "Hochtemperaturbehandlung", nl: "Hoge warmtebehandeling" },
          { en: "Chemical extraction", es: "Extracción química", de: "Chemische Extraktion", nl: "Chemische extractie" },
          { en: "Microwave processing", es: "Procesamiento por microondas", de: "Mikrowellenverarbeitung", nl: "Magnetronverwerking" }
        ],
        correct: 0,
        explanation: {
          en: "Cold pressing uses pressure instead of heat to extract juice, which helps preserve heat-sensitive vitamins like Vitamin C.",
          es: "El prensado en frío usa presión en lugar de calor para extraer jugo, lo que ayuda a preservar vitaminas sensibles al calor como la Vitamina C.",
          de: "Kaltpressung verwendet Druck statt Hitze zur Saftextraktion, was hilft, hitzeempfindliche Vitamine wie Vitamin C zu erhalten.",
          nl: "Koudpersen gebruikt druk in plaats van warmte om sap te extraheren, wat helpt warmtegevoelige vitamines zoals Vitamine C te behouden."
        }
      },
      {
        question: {
          en: "What are antioxidants in fruit juices good for?",
          es: "¿Para qué son buenos los antioxidantes en los jugos de frutas?",
          de: "Wofür sind Antioxidantien in Fruchtsäften gut?",
          nl: "Waar zijn antioxidanten in vruchtensappen goed voor?"
        },
        options: [
          { en: "Protecting cells from damage", es: "Proteger las células del daño", de: "Zellen vor Schäden schützen", nl: "Cellen beschermen tegen schade" },
          { en: "Making juice taste sweeter", es: "Hacer que el jugo sepa más dulce", de: "Saft süßer schmecken lassen", nl: "Sap zoeter laten smaken" },
          { en: "Changing juice color", es: "Cambiar el color del jugo", de: "Saftfarbe verändern", nl: "Sapkleur veranderen" },
          { en: "Making juice last longer", es: "Hacer que el jugo dure más", de: "Saft länger haltbar machen", nl: "Sap langer houdbaar maken" }
        ],
        correct: 0,
        explanation: {
          en: "Antioxidants help protect our body cells from damage caused by free radicals, which may help prevent various diseases.",
          es: "Los antioxidantes ayudan a proteger las células de nuestro cuerpo del daño causado por radicales libres, lo que puede ayudar a prevenir varias enfermedades.",
          de: "Antioxidantien helfen dabei, unsere Körperzellen vor Schäden durch freie Radikale zu schützen, was bei der Vorbeugung verschiedener Krankheiten helfen kann.",
          nl: "Antioxidanten helpen onze lichaamscellen te beschermen tegen schade veroorzaakt door vrije radicalen, wat kan helpen verschillende ziekten te voorkomen."
        }
      },
      {
        question: {
          en: "Why might fresh juice need to be consumed quickly?",
          es: "¿Por qué podría necesitar consumirse el jugo fresco rápidamente?",
          de: "Warum sollte frischer Saft schnell konsumiert werden?",
          nl: "Waarom moet vers sap misschien snel geconsumeerd worden?"
        },
        options: [
          { en: "Vitamins break down over time", es: "Las vitaminas se descomponen con el tiempo", de: "Vitamine bauen sich mit der Zeit ab", nl: "Vitamines breken af na verloop van tijd" },
          { en: "It becomes too sweet", es: "Se vuelve demasiado dulce", de: "Es wird zu süß", nl: "Het wordt te zoet" },
          { en: "The color changes", es: "El color cambia", de: "Die Farbe ändert sich", nl: "De kleur verandert" },
          { en: "It becomes thicker", es: "Se vuelve más espeso", de: "Es wird dicker", nl: "Het wordt dikker" }
        ],
        correct: 0,
        explanation: {
          en: "Fresh juice loses vitamins over time, especially when exposed to light and air. Vitamin C is particularly sensitive and breaks down quickly.",
          es: "El jugo fresco pierde vitaminas con el tiempo, especialmente cuando se expone a la luz y al aire. La Vitamina C es particularmente sensible y se descompone rápidamente.",
          de: "Frischer Saft verliert mit der Zeit Vitamine, besonders wenn er Licht und Luft ausgesetzt ist. Vitamin C ist besonders empfindlich und baut sich schnell ab.",
          nl: "Vers sap verliest vitamines na verloop van tijd, vooral wanneer het wordt blootgesteld aan licht en lucht. Vitamine C is bijzonder gevoelig en breekt snel af."
        }
      },
      {
        question: {
          en: "What is pulp in orange juice?",
          es: "¿Qué es la pulpa en el jugo de naranja?",
          de: "Was ist Fruchtfleisch im Orangensaft?",
          nl: "Wat is pulp in sinaasappelsap?"
        },
        options: [
          { en: "Small pieces of fruit flesh", es: "Pequeños pedazos de pulpa de fruta", de: "Kleine Stücke Fruchtfleisch", nl: "Kleine stukjes vruchtvlees" },
          { en: "Added sugar", es: "Azúcar añadido", de: "Zugesetzter Zucker", nl: "Toegevoegde suiker" },
          { en: "Artificial flavoring", es: "Saborizante artificial", de: "Künstliches Aroma", nl: "Kunstmatige smaakstof" },
          { en: "Preservative chemicals", es: "Químicos conservantes", de: "Konservierungschemikalien", nl: "Conserveermiddelen" }
        ],
        correct: 0,
        explanation: {
          en: "Pulp consists of small pieces of the orange's flesh that remain in the juice, providing fiber and texture.",
          es: "La pulpa consiste en pequeños pedazos de la pulpa de la naranja que permanecen en el jugo, proporcionando fibra y textura.",
          de: "Fruchtfleisch besteht aus kleinen Stücken des Orangenfleisches, die im Saft verbleiben und Ballaststoffe und Textur liefern.",
          nl: "Pulp bestaat uit kleine stukjes van het vruchtvlees van de sinaasappel die in het sap blijven, wat vezels en textuur geeft."
        }
      },
      {
        question: {
          en: "Which juice is highest in natural sugar content?",
          es: "¿Qué jugo tiene el mayor contenido de azúcar natural?",
          de: "Welcher Saft hat den höchsten natürlichen Zuckergehalt?",
          nl: "Welk sap heeft het hoogste natuurlijke suikergehalte?"
        },
        options: [
          { en: "Grape juice", es: "Jugo de uva", de: "Traubensaft", nl: "Druivensap" },
          { en: "Tomato juice", es: "Jugo de tomate", de: "Tomatensaft", nl: "Tomatensap" },
          { en: "Vegetable juice", es: "Jugo de vegetales", de: "Gemüsesaft", nl: "Groentensap" },
          { en: "Pickle juice", es: "Jugo de pepinillos", de: "Gurkensaft", nl: "Augurkensap" }
        ],
        correct: 0,
        explanation: {
          en: "Grape juice naturally contains high levels of fructose and glucose, making it one of the sweetest fruit juices.",
          es: "El jugo de uva contiene naturalmente altos niveles de fructosa y glucosa, haciéndolo uno de los jugos de fruta más dulces.",
          de: "Traubensaft enthält natürlich hohe Mengen an Fruktose und Glukose, was ihn zu einem der süßesten Fruchtsäfte macht.",
          nl: "Druivensap bevat van nature hoge niveaus fructose en glucose, waardoor het een van de zoetste vruchtensappen is."
        }
      },
      {
        question: {
          en: "What is the benefit of drinking vegetable juice?",
          es: "¿Cuál es el beneficio de beber jugo de vegetales?",
          de: "Was ist der Vorteil des Trinkens von Gemüsesaft?",
          nl: "Wat is het voordeel van het drinken van groentensap?"
        },
        options: [
          { en: "More vitamins and minerals, less sugar", es: "Más vitaminas y minerales, menos azúcar", de: "Mehr Vitamine und Mineralien, weniger Zucker", nl: "Meer vitamines en mineralen, minder suiker" },
          { en: "Always tastes better", es: "Siempre sabe mejor", de: "Schmeckt immer besser", nl: "Smaakt altijd beter" },
          { en: "Contains more calories", es: "Contiene más calorías", de: "Enthält mehr Kalorien", nl: "Bevat meer calorieën" },
          { en: "Lasts longer without refrigeration", es: "Dura más sin refrigeración", de: "Hält länger ohne Kühlung", nl: "Blijft langer goed zonder koeling" }
        ],
        correct: 0,
        explanation: {
          en: "Vegetable juices typically contain more vitamins, minerals, and nutrients while having less natural sugar than fruit juices.",
          es: "Los jugos de vegetales típicamente contienen más vitaminas, minerales y nutrientes mientras tienen menos azúcar natural que los jugos de frutas.",
          de: "Gemüsesäfte enthalten typisch mehr Vitamine, Mineralien und Nährstoffe bei weniger natürlichem Zucker als Fruchtsäfte.",
          nl: "Groentensappen bevatten typisch meer vitamines, mineralen en voedingsstoffen terwijl ze minder natuurlijke suiker hebben dan vruchtensappen."
        }
      },
      {
        question: {
          en: "Why do some juices contain added fiber?",
          es: "¿Por qué algunos jugos contienen fibra añadida?",
          de: "Warum enthalten manche Säfte zugesetzte Ballaststoffe?",
          nl: "Waarom bevatten sommige sappen toegevoegde vezels?"
        },
        options: [
          { en: "To help with digestion and make you feel full", es: "Para ayudar con la digestión y hacerte sentir lleno", de: "Um bei der Verdauung zu helfen und satt zu machen", nl: "Om te helpen met vertering en je vol te laten voelen" },
          { en: "To change the color", es: "Para cambiar el color", de: "Um die Farbe zu ändern", nl: "Om de kleur te veranderen" },
          { en: "To make it taste sweeter", es: "Para hacerlo saber más dulce", de: "Um es süßer schmecken zu lassen", nl: "Om het zoeter te laten smaken" },
          { en: "To preserve it longer", es: "Para preservarlo más tiempo", de: "Um es länger zu konservieren", nl: "Om het langer te bewaren" }
        ],
        correct: 0,
        explanation: {
          en: "Added fiber helps with digestion, can make you feel fuller for longer, and helps slow down sugar absorption into the bloodstream.",
          es: "La fibra añadida ayuda con la digestión, puede hacerte sentir lleno por más tiempo, y ayuda a ralentizar la absorción de azúcar en el torrente sanguíneo.",
          de: "Zugesetzte Ballaststoffe helfen bei der Verdauung, können länger satt machen und helfen dabei, die Zuckeraufnahme ins Blut zu verlangsamen.",
          nl: "Toegevoegde vezels helpen met vertering, kunnen je langer vol laten voelen, en helpen de suikeropname in de bloedbaan te vertragen."
        }
      },
      {
        question: {
          en: "What is 'juice essence' or 'essence recovery'?",
          es: "¿Qué es la 'esencia de jugo' o 'recuperación de esencia'?",
          de: "Was ist 'Saftessenz' oder 'Essenzrückgewinnung'?",
          nl: "Wat is 'sapessence' of 'essence terugwinning'?"
        },
        options: [
          { en: "Capturing and re-adding volatile aroma compounds lost during processing", es: "Capturar y volver a añadir compuestos aromáticos volátiles perdidos durante el procesamiento", de: "Einfangen und Wiederhinzufügen flüchtiger Aromaverbindungen, die während der Verarbeitung verloren gehen", nl: "Opvangen en opnieuw toevoegen van vluchtige aromaverbindingen verloren tijdens verwerking" },
          { en: "The most important ingredient", es: "El ingrediente más importante", de: "Die wichtigste Zutat", nl: "Het belangrijkste ingrediënt" },
          { en: "Artificial flavoring", es: "Saborizante artificial", de: "Künstliches Aroma", nl: "Kunstmatige smaakstof" },
          { en: "The core of the fruit", es: "El núcleo de la fruta", de: "Der Kern der Frucht", nl: "De kern van de vrucht" }
        ],
        correct: 0,
        explanation: {
          en: "During concentration, volatile aroma compounds evaporate. These are captured as 'essence' and added back to reconstituted juice to restore natural flavor and aroma.",
          es: "Durante la concentración, compuestos aromáticos volátiles se evaporan. Estos se capturan como 'esencia' y se añaden de vuelta al jugo reconstituido para restaurar el sabor y aroma naturales.",
          de: "Während der Konzentration verdampfen flüchtige Aromaverbindungen. Diese werden als 'Essenz' eingefangen und rekonstituiertem Saft wieder hinzugefügt, um natürlichen Geschmack und Aroma wiederherzustellen.",
          nl: "Tijdens concentratie verdampen vluchtige aromaverbindingen. Deze worden opgevangen als 'essence' en toegevoegd aan gereconstitueerd sap om natuurlijke smaak en aroma te herstellen."
        }
      },
      {
        question: {
          en: "What is the purpose of 'deaeration' in juice processing?",
          es: "¿Cuál es el propósito de la 'desaireación' en el procesamiento de jugos?",
          de: "Was ist der Zweck der 'Entlüftung' in der Saftverarbeitung?",
          nl: "Wat is het doel van 'ontluchting' in sapverwerking?"
        },
        options: [
          { en: "Removing dissolved oxygen to prevent oxidation and extend shelf life", es: "Remover oxígeno disuelto para prevenir oxidación y extender vida útil", de: "Gelösten Sauerstoff entfernen, um Oxidation zu verhindern und Haltbarkeit zu verlängern", nl: "Opgelost zuurstof verwijderen om oxidatie te voorkomen en houdbaarheid te verlengen" },
          { en: "Adding bubbles to juice", es: "Añadir burbujas al jugo", de: "Blasen zum Saft hinzufügen", nl: "Bubbels toevoegen aan sap" },
          { en: "Removing pulp", es: "Remover pulpa", de: "Fruchtfleisch entfernen", nl: "Pulp verwijderen" },
          { en: "Heating the juice", es: "Calentar el jugo", de: "Saft erhitzen", nl: "Sap verhitten" }
        ],
        correct: 0,
        explanation: {
          en: "Deaeration removes dissolved oxygen from juice, which prevents oxidation, browning, vitamin degradation, and off-flavors, significantly extending shelf life.",
          es: "La desaireación remueve oxígeno disuelto del jugo, lo que previene oxidación, pardeamiento, degradación de vitaminas y sabores desagradables, extendiendo significativamente la vida útil.",
          de: "Entlüftung entfernt gelösten Sauerstoff aus Saft, was Oxidation, Bräunung, Vitaminabbau und Fehlaromen verhindert und die Haltbarkeit erheblich verlängert.",
          nl: "Ontluchting verwijdert opgelost zuurstof uit sap, wat oxidatie, bruining, vitamineafbraak en off-smaken voorkomt, wat de houdbaarheid aanzienlijk verlengt."
        }
      },
      {
        question: {
          en: "What causes 'ropiness' or slime formation in some fruit juices?",
          es: "¿Qué causa la 'viscosidad' o formación de limo en algunos jugos de frutas?",
          de: "Was verursacht 'Schleimigkeit' oder Schleimbildung in manchen Fruchtsäften?",
          nl: "Wat veroorzaakt 'slijmerigheid' of slijmvorming in sommige vruchtensappen?"
        },
        options: [
          { en: "Bacterial contamination producing polysaccharides", es: "Contaminación bacteriana produciendo polisacáridos", de: "Bakterielle Kontamination, die Polysaccharide produziert", nl: "Bacteriële besmetting die polysachariden produceert" },
          { en: "Too much sugar added", es: "Demasiada azúcar añadida", de: "Zu viel Zucker hinzugefügt", nl: "Te veel suiker toegevoegd" },
          { en: "Normal aging process", es: "Proceso normal de envejecimiento", de: "Normaler Alterungsprozess", nl: "Normaal verouderingsproces" },
          { en: "Freezing and thawing", es: "Congelación y descongelación", de: "Einfrieren und Auftauen", nl: "Bevriezen en ontdooien" }
        ],
        correct: 0,
        explanation: {
          en: "Ropiness is caused by lactic acid bacteria that produce slimy polysaccharides (dextran), making juice thick and rope-like. Proper pasteurization and hygiene prevent this spoilage.",
          es: "La viscosidad es causada por bacterias de ácido láctico que producen polisacáridos viscosos (dextrano), haciendo el jugo espeso y como una cuerda. La pasteurización adecuada y la higiene previenen este deterioro.",
          de: "Schleimigkeit wird durch Milchsäurebakterien verursacht, die schleimige Polysaccharide (Dextran) produzieren und Saft dick und seilartig machen. Richtige Pasteurisierung und Hygiene verhindern diesen Verderb.",
          nl: "Slijmerigheid wordt veroorzaakt door melkzuurbacteriën die slijmerige polysachariden (dextraan) produceren, waardoor sap dik en touwachtig wordt. Juiste pasteurisatie en hygiëne voorkomen dit bederf."
        }
      },
      {
        question: {
          en: "What is 'ultrafiltration' in juice processing?",
          es: "¿Qué es la 'ultrafiltración' en el procesamiento de jugos?",
          de: "Was ist 'Ultrafiltration' in der Saftverarbeitung?",
          nl: "Wat is 'ultrafiltratie' in sapverwerking?"
        },
        options: [
          { en: "Using membrane filters to clarify juice by removing large molecules", es: "Usar filtros de membrana para clarificar jugo removiendo moléculas grandes", de: "Membranfilter verwenden, um Saft durch Entfernen großer Moleküle zu klären", nl: "Membraanfilters gebruiken om sap te klaren door grote moleculen te verwijderen" },
          { en: "Filtering with very fine cloth", es: "Filtrar con tela muy fina", de: "Mit sehr feinem Stoff filtern", nl: "Filteren met zeer fijne stof" },
          { en: "Using UV light to sterilize", es: "Usar luz UV para esterilizar", de: "UV-Licht zur Sterilisation verwenden", nl: "UV-licht gebruiken om te steriliseren" },
          { en: "Super fast centrifugation", es: "Centrifugación super rápida", de: "Super schnelle Zentrifugation", nl: "Super snelle centrifugatie" }
        ],
        correct: 0,
        explanation: {
          en: "Ultrafiltration uses semi-permeable membranes with tiny pores to separate and remove particles, pectin, and microorganisms while retaining flavor compounds and nutrients.",
          es: "La ultrafiltración usa membranas semipermeables con poros diminutos para separar y remover partículas, pectina y microorganismos mientras retiene compuestos de sabor y nutrientes.",
          de: "Ultrafiltration verwendet halbdurchlässige Membranen mit winzigen Poren, um Partikel, Pektin und Mikroorganismen zu trennen und zu entfernen, während Geschmacksverbindungen und Nährstoffe erhalten bleiben.",
          nl: "Ultrafiltratie gebruikt semi-permeabele membranen met kleine poriën om deeltjes, pectine en micro-organismen te scheiden en verwijderen terwijl smaakverbindingen en voedingsstoffen behouden blijven."
        }
      },
      {
        question: {
          en: "What are 'carotenoids' in carrot and orange juices?",
          es: "¿Qué son los 'carotenoides' en los jugos de zanahoria y naranja?",
          de: "Was sind 'Carotinoide' in Karotten- und Orangensäften?",
          nl: "Wat zijn 'carotenoïden' in wortel- en sinaasappelsappen?"
        },
        options: [
          { en: "Orange-yellow pigments with antioxidant properties and vitamin A precursors", es: "Pigmentos naranja-amarillos con propiedades antioxidantes y precursores de vitamina A", de: "Orange-gelbe Pigmente mit antioxidativen Eigenschaften und Vitamin-A-Vorstufen", nl: "Oranje-gele pigmenten met antioxidante eigenschappen en vitamine A voorlopers" },
          { en: "Added artificial colors", es: "Colores artificiales añadidos", de: "Zugesetzte künstliche Farben", nl: "Toegevoegde kunstmatige kleuren" },
          { en: "Natural sugars", es: "Azúcares naturales", de: "Natürliche Zucker", nl: "Natuurlijke suikers" },
          { en: "Preservative chemicals", es: "Químicos conservantes", de: "Konservierungschemikalien", nl: "Conserverende chemicaliën" }
        ],
        correct: 0,
        explanation: {
          en: "Carotenoids like beta-carotene are natural orange-yellow pigments found in many fruits and vegetables. They're powerful antioxidants and convert to vitamin A in the body.",
          es: "Los carotenoides como el beta-caroteno son pigmentos naturales naranja-amarillos encontrados en muchas frutas y vegetales. Son antioxidantes poderosos y se convierten en vitamina A en el cuerpo.",
          de: "Carotinoide wie Beta-Carotin sind natürliche orange-gelbe Pigmente, die in vielen Früchten und Gemüsen vorkommen. Sie sind starke Antioxidantien und werden im Körper zu Vitamin A umgewandelt.",
          nl: "Carotenoïden zoals bèta-caroteen zijn natuurlijke oranje-gele pigmenten gevonden in veel vruchten en groenten. Ze zijn krachtige antioxidanten en worden omgezet in vitamine A in het lichaam."
        }
      },
      {
        question: {
          en: "What is the 'titratable acidity' of juice?",
          es: "¿Qué es la 'acidez titulable' del jugo?",
          de: "Was ist die 'titrierbare Säure' von Saft?",
          nl: "Wat is de 'titreerbare zuurgraad' van sap?"
        },
        options: [
          { en: "Total amount of acid measured by neutralization with base", es: "Cantidad total de ácido medida por neutralización con base", de: "Gesamtmenge an Säure gemessen durch Neutralisation mit Base", nl: "Totale hoeveelheid zuur gemeten door neutralisatie met base" },
          { en: "The pH level only", es: "Solo el nivel de pH", de: "Nur der pH-Wert", nl: "Alleen het pH-niveau" },
          { en: "How sour it tastes", es: "Qué tan agrio sabe", de: "Wie sauer es schmeckt", nl: "Hoe zuur het smaakt" },
          { en: "The color intensity", es: "La intensidad del color", de: "Die Farbintensität", nl: "De kleurintensiteit" }
        ],
        correct: 0,
        explanation: {
          en: "Titratable acidity measures the total amount of acids present in juice by adding base solution until neutralization. It's expressed as percentage of citric, malic, or tartaric acid equivalent.",
          es: "La acidez titulable mide la cantidad total de ácidos presentes en el jugo añadiendo solución base hasta la neutralización. Se expresa como porcentaje de equivalente de ácido cítrico, málico o tartárico.",
          de: "Titrierbare Säure misst die Gesamtmenge an Säuren im Saft durch Zugabe von Basenlösung bis zur Neutralisation. Sie wird als Prozentsatz von Zitronen-, Apfel- oder Weinsäure-Äquivalent ausgedrückt.",
          nl: "Titreerbare zuurgraad meet de totale hoeveelheid zuren aanwezig in sap door base oplossing toe te voegen tot neutralisatie. Het wordt uitgedrukt als percentage citroen-, appel- of wijnsteenzuur equivalent."
        }
      },
      {
        question: {
          en: "What causes 'protein haze' in fruit juices?",
          es: "¿Qué causa la 'turbidez de proteína' en los jugos de frutas?",
          de: "Was verursacht 'Proteintrübung' in Fruchtsäften?",
          nl: "Wat veroorzaakt 'eiwit waas' in vruchtensappen?"
        },
        options: [
          { en: "Proteins binding with tannins creating cloudiness", es: "Proteínas uniéndose con taninos creando turbidez", de: "Proteine binden mit Tanninen und erzeugen Trübung", nl: "Eiwitten binden met tannines waardoor troebeling ontstaat" },
          { en: "Too much fruit pulp", es: "Demasiada pulpa de fruta", de: "Zu viel Fruchtfleisch", nl: "Te veel vruchtpulp" },
          { en: "Added milk products", es: "Productos lácteos añadidos", de: "Zugesetzte Milchprodukte", nl: "Toegevoegde zuivelproducten" },
          { en: "Bacterial contamination", es: "Contaminación bacteriana", de: "Bakterielle Kontamination", nl: "Bacteriële besmetting" }
        ],
        correct: 0,
        explanation: {
          en: "Protein haze forms when proteins naturally present in juice react with polyphenols (tannins), creating insoluble complexes. Bentonite clay or enzyme treatments are used to remove proteins and prevent haze.",
          es: "La turbidez de proteína se forma cuando las proteínas naturalmente presentes en el jugo reaccionan con polifenoles (taninos), creando complejos insolubles. La arcilla bentonita o tratamientos enzimáticos se usan para remover proteínas y prevenir turbidez.",
          de: "Proteintrübung entsteht, wenn natürlich im Saft vorhandene Proteine mit Polyphenolen (Tanninen) reagieren und unlösliche Komplexe bilden. Bentonit-Ton oder Enzymbehandlungen werden verwendet, um Proteine zu entfernen und Trübung zu verhindern.",
          nl: "Eiwit waas vormt wanneer eiwitten natuurlijk aanwezig in sap reageren met polyfenolen (tannines), waardoor onoplosbare complexen ontstaan. Bentoniet klei of enzymbehandelingen worden gebruikt om eiwitten te verwijderen en waas te voorkomen."
        }
      },
      {
        question: {
          en: "What is 'refractometer reading' used for in juice industry?",
          es: "¿Para qué se usa la 'lectura del refractómetro' en la industria de jugos?",
          de: "Wofür wird die 'Refraktometer-Messung' in der Saftindustrie verwendet?",
          nl: "Waarvoor wordt 'refractometer meting' gebruikt in de sapindustrie?"
        },
        options: [
          { en: "Measuring sugar content (Brix) by light refraction", es: "Medir contenido de azúcar (Brix) por refracción de luz", de: "Zuckergehalt (Brix) durch Lichtbrechung messen", nl: "Suikergehalte (Brix) meten door lichtbreking" },
          { en: "Testing for bacteria", es: "Probar bacterias", de: "Auf Bakterien testen", nl: "Testen op bacteriën" },
          { en: "Measuring juice color", es: "Medir color del jugo", de: "Saftfarbe messen", nl: "Sapkleur meten" },
          { en: "Checking temperature", es: "Verificar temperatura", de: "Temperatur prüfen", nl: "Temperatuur controleren" }
        ],
        correct: 0,
        explanation: {
          en: "A refractometer measures how much light bends (refracts) when passing through juice. This correlates directly with dissolved solids (mainly sugars), giving an accurate Brix reading.",
          es: "Un refractómetro mide cuánto se dobla (refracta) la luz al pasar por el jugo. Esto se correlaciona directamente con sólidos disueltos (principalmente azúcares), dando una lectura Brix precisa.",
          de: "Ein Refraktometer misst, wie stark sich Licht beim Durchgang durch Saft bricht. Dies korreliert direkt mit gelösten Feststoffen (hauptsächlich Zucker) und liefert eine genaue Brix-Messung.",
          nl: "Een refractometer meet hoeveel licht buigt (breekt) bij het passeren door sap. Dit correleert direct met opgeloste stoffen (voornamelijk suikers), wat een nauwkeurige Brix-meting geeft."
        }
      },
      {
        question: {
          en: "What is 'enzymatic depectinization'?",
          es: "¿Qué es la 'depectinización enzimática'?",
          de: "Was ist 'enzymatische Depektinisierung'?",
          nl: "Wat is 'enzymatische depectinisatie'?"
        },
        options: [
          { en: "Using pectinase enzymes to break down pectin for juice clarification", es: "Usar enzimas pectinasa para descomponer pectina para clarificación de jugo", de: "Pektinase-Enzyme verwenden, um Pektin für Saftklärängerung abzubauen", nl: "Pectinase enzymen gebruiken om pectine af te breken voor sapklaring" },
          { en: "Removing fruit skins", es: "Remover cáscaras de fruta", de: "Fruchtschalen entfernen", nl: "Vruchtschillen verwijderen" },
          { en: "Adding pectin to juice", es: "Añadir pectina al jugo", de: "Pektin zum Saft hinzufügen", nl: "Pectine toevoegen aan sap" },
          { en: "Heating to destroy enzymes", es: "Calentar para destruir enzimas", de: "Erhitzen um Enzyme zu zerstören", nl: "Verhitten om enzymen te vernietigen" }
        ],
        correct: 0,
        explanation: {
          en: "Depectinization uses pectinase enzymes to break down pectin molecules that cause cloudiness and high viscosity. This improves juice clarity, filterability, and yield during extraction.",
          es: "La depectinización usa enzimas pectinasa para descomponer moléculas de pectina que causan turbidez y alta viscosidad. Esto mejora la claridad del jugo, filtrabilidad y rendimiento durante la extracción.",
          de: "Depektinisierung verwendet Pektinase-Enzyme, um Pektinmoleküle abzubauen, die Trübung und hohe Viskosität verursachen. Dies verbessert Saftklarheit, Filterbarkeit und Ausbeute bei der Extraktion.",
          nl: "Depectinisatie gebruikt pectinase enzymen om pectinemoleculen af te breken die troebeling en hoge viscositeit veroorzaken. Dit verbetert saphelderheid, filtreerbaarheid en opbrengst tijdens extractie."
        }
      },
      {
        question: {
          en: "What is 'juice yield' and how is it improved?",
          es: "¿Qué es el 'rendimiento de jugo' y cómo se mejora?",
          de: "Was ist 'Saftausbeute' und wie wird sie verbessert?",
          nl: "Wat is 'sapopbrengst' en hoe wordt het verbeterd?"
        },
        options: [
          { en: "Amount of juice extracted from fruit; improved by enzyme treatment and pressing techniques", es: "Cantidad de jugo extraído de fruta; mejorado por tratamiento enzimático y técnicas de prensado", de: "Menge an Saft aus Frucht extrahiert; verbessert durch Enzymbehandlung und Presstechniken", nl: "Hoeveelheid sap geëxtraheerd uit vrucht; verbeterd door enzymbehandeling en perstechnieken" },
          { en: "Profit margin on juice sales", es: "Margen de ganancia en ventas de jugo", de: "Gewinnspanne bei Saftverkäufen", nl: "Winstmarge op sapverkoop" },
          { en: "Juice concentration level", es: "Nivel de concentración del jugo", de: "Saftkonzentrationsniveau", nl: "Sapconcentratieniveau" },
          { en: "Number of bottles produced", es: "Número de botellas producidas", de: "Anzahl produzierter Flaschen", nl: "Aantal geproduceerde flessen" }
        ],
        correct: 0,
        explanation: {
          en: "Juice yield is the percentage of juice extracted from raw fruit. It's improved using pectinase enzymes to break down cell walls, proper maceration, optimized pressing pressure, and temperature control.",
          es: "El rendimiento de jugo es el porcentaje de jugo extraído de fruta cruda. Se mejora usando enzimas pectinasa para descomponer paredes celulares, maceración adecuada, presión de prensado optimizada y control de temperatura.",
          de: "Saftausbeute ist der Prozentsatz an Saft, der aus roher Frucht extrahiert wird. Sie wird durch Pektinase-Enzyme zum Abbau von Zellwänden, richtige Mazeration, optimierten Pressdruck und Temperaturkontrolle verbessert.",
          nl: "Sapopbrengst is het percentage sap geëxtraheerd uit rauwe vrucht. Het wordt verbeterd door pectinase enzymen te gebruiken om celwanden af te breken, juiste maceratie, geoptimaliseerde persdruk en temperatuurcontrole."
        }
      },
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  } else if (typeof window !== 'undefined') {
    window.level5 = level5;
  }
})();
