// Quiz Level 3: Street Food - Cooking Methods & Equipment
(function() {
  "use strict";

  const level3 = {
    name: {
      en: "Street Food Cooking Methods & Equipment",
      es: "Métodos de Cocina y Equipo de Comida Callejera",
      de: "Straßenessen Kochmethoden & Ausrüstung",
      nl: "Straatvoedsel Kookmethoden & Uitrusting"
    },
    questions: [
      {
        question: {
          en: "What type of grill is commonly used for satay and kebabs?",
          es: "¿Qué tipo de parrilla se usa comúnmente para satay y kebabs?",
          de: "Welche Art von Grill wird häufig für Satay und Kebabs verwendet?",
          nl: "Welk type grill wordt vaak gebruikt voor saté en kebabs?"
        },
        options: [
          { en: "Electric induction cooktop", es: "Placa de inducción eléctrica", de: "Elektrische Induktionskochplatte", nl: "Elektrische inductiekookplaat" },
          { en: "Charcoal brazier or portable grill", es: "Brasero de carbón o parrilla portátil", de: "Holzkohlebecken oder tragbarer Grill", nl: "Houtskool komfoor of draagbare grill" },
          { en: "Gas oven", es: "Horno de gas", de: "Gasofen", nl: "Gasoven" },
          { en: "Microwave oven", es: "Horno microondas", de: "Mikrowellenofen", nl: "Magnetron" }
        ],
        correct: 1,
        explanation: {
          en: "Charcoal braziers and portable grills are ideal for satay and kebabs because they provide high heat and impart a smoky flavor while being portable for street vendors.",
          es: "Los braseros de carbón y las parrillas portátiles son ideales para satay y kebabs porque proporcionan alto calor e imparten un sabor ahumado mientras son portátiles para vendedores callejeros.",
          de: "Holzkohlebecken und tragbare Grills sind ideal für Satay und Kebabs, weil sie hohe Hitze liefern und einen rauchigen Geschmack verleihen, während sie für Straßenhändler tragbar sind.",
          nl: "Houtskool komfoors en draagbare grills zijn ideaal voor saté en kebabs omdat ze hoge hitte leveren en een rokerige smaak geven terwijl ze draagbaar zijn voor straatverkopers."
        }
      },
      {
        question: {
          en: "Which cooking method is essential for making proper crispy spring rolls?",
          es: "¿Qué método de cocina es esencial para hacer rollos de primavera crujientes adecuados?",
          de: "Welche Kochmethode ist für die Herstellung von knusprigen Frühlingsrollen unerlässlich?",
          nl: "Welke kookmethode is essentieel voor het maken van goede knapperige loempia's?"
        },
        options: [
          { en: "Steaming", es: "Vapor", de: "Dämpfen", nl: "Stomen" },
          { en: "Deep frying at 350-375°F (175-190°C)", es: "Fritura profunda a 175-190°C", de: "Frittieren bei 175-190°C", nl: "Diep frituren op 175-190°C" },
          { en: "Boiling", es: "Hervir", de: "Kochen", nl: "Koken" },
          { en: "Raw preparation", es: "Preparación cruda", de: "Rohe Zubereitung", nl: "Rauwe bereiding" }
        ],
        correct: 1,
        explanation: {
          en: "Deep frying at the correct temperature (350-375°F/175-190°C) is crucial for spring rolls to achieve the characteristic crispy exterior while cooking the filling properly.",
          es: "La fritura profunda a la temperatura correcta (175-190°C) es crucial para que los rollos de primavera logren el exterior crujiente característico mientras se cocina el relleno adecuadamente.",
          de: "Frittieren bei der richtigen Temperatur (175-190°C) ist entscheidend für Frühlingsrollen, um die charakteristische knusprige Außenseite zu erreichen, während die Füllung richtig gekocht wird.",
          nl: "Diep frituren op de juiste temperatuur (175-190°C) is cruciaal voor loempia's om de karakteristieke knapperige buitenkant te bereiken terwijl de vulling goed wordt gekookt."
        }
      },
      {
        question: {
          en: "What is a comal and what is it used for in street food preparation?",
          es: "¿Qué es un comal y para qué se usa en la preparación de comida callejera?",
          de: "Was ist ein Comal und wofür wird es bei der Straßenessen-Zubereitung verwendet?",
          nl: "Wat is een comal en waarvoor wordt het gebruikt bij de bereiding van straatvoedsel?"
        },
        options: [
          { en: "A deep fryer for churros", es: "Una freidora profunda para churros", de: "Eine Fritteuse für Churros", nl: "Een diepe friteuse voor churros" },
          { en: "A flat griddle for tortillas and flatbreads", es: "Una plancha plana para tortillas y panes planos", de: "Eine flache Grillplatte für Tortillas und Fladenbrot", nl: "Een platte grillplaat voor tortilla's en platbrood" },
          { en: "A steamer for dumplings", es: "Una vaporera para dumplings", de: "Ein Dampfgarer für Teigtaschen", nl: "Een stomer voor dumplings" },
          { en: "A soup pot", es: "Una olla para sopa", de: "Ein Suppentopf", nl: "Een soeppan" }
        ],
        correct: 1,
        explanation: {
          en: "A comal is a traditional flat, round griddle used primarily in Mexico and Central America for cooking tortillas, flatbreads, and other street foods that require even heat distribution.",
          es: "Un comal es una plancha plana y redonda tradicional usada principalmente en México y América Central para cocinar tortillas, panes planos y otras comidas callejeras que requieren distribución uniforme del calor.",
          de: "Ein Comal ist eine traditionelle flache, runde Grillplatte, die hauptsächlich in Mexiko und Mittelamerika zum Kochen von Tortillas, Fladenbrot und anderen Straßenessen verwendet wird, die eine gleichmäßige Wärmeverteilung erfordern.",
          nl: "Een comal is een traditionele platte, ronde grillplaat die voornamelijk wordt gebruikt in Mexico en Midden-Amerika voor het koken van tortilla's, platbrood en ander straatvoedsel dat gelijkmatige warmteverdeling vereist."
        }
      },
      {
        question: {
          en: "Which equipment is most suitable for making fresh fruit juices at street stalls?",
          es: "¿Qué equipo es más adecuado para hacer jugos de fruta fresca en puestos callejeros?",
          de: "Welche Ausrüstung ist am besten für die Herstellung von frischen Fruchtsäften an Straßenständen geeignet?",
          nl: "Welke uitrusting is het meest geschikt voor het maken van verse vruchtensappen bij straatkramen?"
        },
        options: [
          { en: "Electric blender or manual citrus press", es: "Licuadora eléctrica o prensa manual de cítricos", de: "Elektrischer Mixer oder manuelle Zitruspresse", nl: "Elektrische blender of handmatige citruspers" },
          { en: "Pizza oven", es: "Horno de pizza", de: "Pizzaofen", nl: "Pizza-oven" },
          { en: "Pressure cooker", es: "Olla a presión", de: "Schnellkochtopf", nl: "Snelkookpan" },
          { en: "Wok burner", es: "Quemador de wok", de: "Wok-Brenner", nl: "Wok brander" }
        ],
        correct: 0,
        explanation: {
          en: "Electric blenders and manual citrus presses are portable, efficient tools for making fresh juices at street stalls, allowing vendors to extract juice quickly while maintaining freshness.",
          es: "Las licuadoras eléctricas y las prensas manuales de cítricos son herramientas portátiles y eficientes para hacer jugos frescos en puestos callejeros, permitiendo a los vendedores extraer jugo rápidamente mientras mantienen la frescura.",
          de: "Elektrische Mixer und manuelle Zitruspressen sind tragbare, effiziente Werkzeuge für die Herstellung von frischen Säften an Straßenständen, die es Verkäufern ermöglichen, Saft schnell zu extrahieren und dabei die Frische zu erhalten.",
          nl: "Elektrische blenders en handmatige citruspersen zijn draagbare, efficiënte gereedschappen voor het maken van verse sappen bij straatkramen, waardoor verkopers snel sap kunnen extraheren terwijl ze de versheid behouden."
        }
      },
      {
        question: {
          en: "What cooking technique creates the 'wok hei' flavor in stir-fried street food?",
          es: "¿Qué técnica de cocina crea el sabor 'wok hei' en la comida callejera salteada?",
          de: "Welche Kochtechnik erzeugt den 'Wok Hei'-Geschmack in gebratenem Straßenessen?",
          nl: "Welke kooktechniek creëert de 'wok hei' smaak in geroerde straatvoedsel?"
        },
        options: [
          { en: "Low heat slow cooking", es: "Cocina lenta a fuego bajo", de: "Langsames Kochen bei niedriger Hitze", nl: "Langzaam koken op laag vuur" },
          { en: "High heat rapid stir-frying with constant movement", es: "Salteado rápido a fuego alto con movimiento constante", de: "Schnelles Anbraten bei hoher Hitze mit ständiger Bewegung", nl: "Snel roerbakken op hoog vuur met constante beweging" },
          { en: "Steaming without oil", es: "Cocinar al vapor sin aceite", de: "Dämpfen ohne Öl", nl: "Stomen zonder olie" },
          { en: "Cold mixing", es: "Mezcla fría", de: "Kaltes Mischen", nl: "Koud mengen" }
        ],
        correct: 1,
        explanation: {
          en: "'Wok hei' (breath of the wok) is achieved through high-heat stir-frying with constant movement, creating a distinct smoky flavor that comes from the food briefly charring at extreme temperatures.",
          es: "'Wok hei' (aliento del wok) se logra mediante salteado a fuego alto con movimiento constante, creando un sabor ahumado distintivo que proviene de que la comida se carbonice brevemente a temperaturas extremas.",
          de: "'Wok Hei' (Atem des Woks) wird durch Anbraten bei hoher Hitze mit ständiger Bewegung erreicht und erzeugt einen unverwechselbaren rauchigen Geschmack, der entsteht, wenn das Essen kurz bei extremen Temperaturen anbrennt.",
          nl: "'Wok hei' (adem van de wok) wordt bereikt door roerbakken op hoog vuur met constante beweging, wat een onderscheidende rokerige smaak creëert die ontstaat doordat het voedsel kort verschroeit bij extreme temperaturen."
        }
      },
      {
        question: {
          en: "Which type of oil is best for high-temperature deep frying in street food?",
          es: "¿Qué tipo de aceite es mejor para fritura profunda a alta temperatura en comida callejera?",
          de: "Welche Art von Öl ist am besten für Frittieren bei hoher Temperatur beim Straßenessen?",
          nl: "Welk type olie is het beste voor diep frituren op hoge temperatuur bij straatvoedsel?"
        },
        options: [
          { en: "Extra virgin olive oil", es: "Aceite de oliva extra virgen", de: "Natives Olivenöl extra", nl: "Extra vergine olijfolie" },
          { en: "High smoke point oils like peanut or sunflower oil", es: "Aceites con alto punto de humo como aceite de maní o girasol", de: "Öle mit hohem Rauchpunkt wie Erdnuss- oder Sonnenblumenöl", nl: "Oliën met hoog rookpunt zoals pinda- of zonnebloemolie" },
          { en: "Butter", es: "Mantequilla", de: "Butter", nl: "Boter" },
          { en: "Coconut oil", es: "Aceite de coco", de: "Kokosöl", nl: "Kokosolie" }
        ],
        correct: 1,
        explanation: {
          en: "High smoke point oils like peanut, sunflower, or canola oil are ideal for deep frying because they remain stable at high temperatures without breaking down or producing harmful compounds.",
          es: "Los aceites con alto punto de humo como el de maní, girasol o canola son ideales para fritura profunda porque permanecen estables a altas temperaturas sin descomponerse o producir compuestos dañinos.",
          de: "Öle mit hohem Rauchpunkt wie Erdnuss-, Sonnenblumen- oder Rapsöl sind ideal zum Frittieren, weil sie bei hohen Temperaturen stabil bleiben, ohne zu zerfallen oder schädliche Verbindungen zu produzieren.",
          nl: "Oliën met hoog rookpunt zoals pinda-, zonnebloem- of koolzaadolie zijn ideaal voor diep frituren omdat ze stabiel blijven bij hoge temperaturen zonder af te breken of schadelijke verbindingen te produceren."
        }
      },
      {
        question: {
          en: "What is the purpose of a tandoor oven in street food preparation?",
          es: "¿Cuál es el propósito de un horno tandoor en la preparación de comida callejera?",
          de: "Was ist der Zweck eines Tandoor-Ofens bei der Straßenessen-Zubereitung?",
          nl: "Wat is het doel van een tandoor oven bij de bereiding van straatvoedsel?"
        },
        options: [
          { en: "Cold food storage", es: "Almacenamiento de comida fría", de: "Kalte Lebensmittellagerung", nl: "Koude voedselopslag" },
          { en: "High-heat cooking for naan, kebabs, and roasted meats", es: "Cocina a alta temperatura para naan, kebabs y carnes asadas", de: "Hochtemperatur-Kochen für Naan, Kebabs und geröstete Fleischsorten", nl: "Hoge temperatuur koken voor naan, kebabs en geroosterd vlees" },
          { en: "Mixing ingredients", es: "Mezclar ingredientes", de: "Zutaten mischen", nl: "Ingrediënten mengen" },
          { en: "Washing dishes", es: "Lavar platos", de: "Geschirr spülen", nl: "Afwas doen" }
        ],
        correct: 1,
        explanation: {
          en: "A tandoor is a cylindrical clay oven that reaches very high temperatures (900°F/480°C), perfect for quickly cooking naan bread, kebabs, and other foods that benefit from intense radiant heat.",
          es: "Un tandoor es un horno cilíndrico de arcilla que alcanza temperaturas muy altas (480°C), perfecto para cocinar rápidamente pan naan, kebabs y otros alimentos que se benefician del calor radiante intenso.",
          de: "Ein Tandoor ist ein zylindrischer Lehmofen, der sehr hohe Temperaturen (480°C) erreicht, perfekt für das schnelle Kochen von Naan-Brot, Kebabs und anderen Lebensmitteln, die von intensiver Strahlungswärme profitieren.",
          nl: "Een tandoor is een cilindrische kleioven die zeer hoge temperaturen (480°C) bereikt, perfect voor het snel koken van naan brood, kebabs en ander voedsel dat profiteert van intense stralende hitte."
        }
      },
      {
        question: {
          en: "Which tool is essential for making takoyaki (octopus balls)?",
          es: "¿Qué herramienta es esencial para hacer takoyaki (bolas de pulpo)?",
          de: "Welches Werkzeug ist für die Herstellung von Takoyaki (Oktopus-Bällchen) unerlässlich?",
          nl: "Welk gereedschap is essentieel voor het maken van takoyaki (octopus balletjes)?"
        },
        options: [
          { en: "Regular frying pan", es: "Sartén regular", de: "Normale Bratpfanne", nl: "Gewone koekenpan" },
          { en: "Special takoyaki pan with round molds", es: "Sartén especial para takoyaki con moldes redondos", de: "Spezielle Takoyaki-Pfanne mit runden Formen", nl: "Speciale takoyaki pan met ronde vormen" },
          { en: "Rice cooker", es: "Arrocera", de: "Reiskocher", nl: "Rijstkoker" },
          { en: "Steamer basket", es: "Canasta vaporera", de: "Dampfkorb", nl: "Stoommand" }
        ],
        correct: 1,
        explanation: {
          en: "Takoyaki requires a special cast iron or aluminum pan with hemispherical molds to create the characteristic round shape, along with special picks to turn the balls during cooking.",
          es: "El takoyaki requiere una sartén especial de hierro fundido o aluminio con moldes hemisféricos para crear la forma redonda característica, junto con palillos especiales para voltear las bolas durante la cocción.",
          de: "Takoyaki erfordert eine spezielle Gusseisen- oder Aluminiumpfanne mit halbkugelförmigen Formen, um die charakteristische runde Form zu schaffen, zusammen mit speziellen Spießen zum Wenden der Bällchen während des Kochens.",
          nl: "Takoyaki vereist een speciale gietijzeren of aluminium pan met halfronde vormen om de karakteristieke ronde vorm te creëren, samen met speciale prikkers om de balletjes tijdens het koken om te draaien."
        }
      },
      {
        question: {
          en: "What cooking method is used for traditional Chinese dumplings sold at street stalls?",
          es: "¿Qué método de cocina se usa para los dumplings chinos tradicionales vendidos en puestos callejeros?",
          de: "Welche Kochmethode wird für traditionelle chinesische Teigtaschen verwendet, die an Straßenständen verkauft werden?",
          nl: "Welke kookmethode wordt gebruikt voor traditionele Chinese dumplings verkocht bij straatkramen?"
        },
        options: [
          { en: "Only grilling", es: "Solo a la parrilla", de: "Nur grillen", nl: "Alleen grillen" },
          { en: "Steaming, pan-frying, or boiling", es: "Vapor, fritura en sartén o hervir", de: "Dämpfen, Anbraten oder Kochen", nl: "Stomen, bakken in de pan of koken" },
          { en: "Deep frying only", es: "Solo fritura profunda", de: "Nur frittieren", nl: "Alleen diep frituren" },
          { en: "Raw preparation", es: "Preparación cruda", de: "Rohe Zubereitung", nl: "Rauwe bereiding" }
        ],
        correct: 1,
        explanation: {
          en: "Chinese dumplings can be prepared using multiple methods: steamed (zhēng), pan-fried (jiān), or boiled (shuǐ), each creating different textures and flavors suitable for street food service.",
          es: "Los dumplings chinos pueden prepararse usando múltiples métodos: al vapor (zhēng), fritos en sartén (jiān) o hervidos (shuǐ), cada uno creando diferentes texturas y sabores adecuados para el servicio de comida callejera.",
          de: "Chinesische Teigtaschen können mit mehreren Methoden zubereitet werden: gedämpft (zhēng), angebraten (jiān) oder gekocht (shuǐ), wobei jede Methode verschiedene Texturen und Geschmäcker schafft, die für Straßenessen-Service geeignet sind.",
          nl: "Chinese dumplings kunnen bereid worden met meerdere methoden: gestoomd (zhēng), gebakken in de pan (jiān) of gekookt (shuǐ), waarbij elke methode verschillende texturen en smaken creëert geschikt voor straatvoedsel service."
        }
      },
      {
        question: {
          en: "Which heating source is most portable for street food vendors?",
          es: "¿Qué fuente de calor es más portátil para los vendedores de comida callejera?",
          de: "Welche Wärmequelle ist für Straßenessen-Verkäufer am tragbarsten?",
          nl: "Welke warmtebron is het meest draagbaar voor straatvoedselverkopers?"
        },
        options: [
          { en: "Natural gas pipeline connection", es: "Conexión de tubería de gas natural", de: "Erdgas-Pipeline-Anschluss", nl: "Aardgas pijpleiding verbinding" },
          { en: "Propane/butane portable gas burners", es: "Quemadores de gas portátiles de propano/butano", de: "Tragbare Propan/Butan-Gasbrenner", nl: "Draagbare propaan/butaan gasbranders" },
          { en: "Electric grid connection", es: "Conexión a la red eléctrica", de: "Elektrischer Netzanschluss", nl: "Elektrische netaansluiting" },
          { en: "Wood-fired ovens", es: "Hornos de leña", de: "Holzöfen", nl: "Houtgestookte ovens" }
        ],
        correct: 1,
        explanation: {
          en: "Portable propane or butane gas burners are ideal for street vendors because they're lightweight, provide consistent heat control, and don't require fixed connections to utilities.",
          es: "Los quemadores de gas portátiles de propano o butano son ideales para vendedores callejeros porque son ligeros, proporcionan control consistente del calor y no requieren conexiones fijas a servicios públicos.",
          de: "Tragbare Propan- oder Butan-Gasbrenner sind ideal für Straßenhändler, weil sie leicht sind, konsistente Hitzeregelung bieten und keine festen Anschlüsse an Versorgungsunternehmen benötigen.",
          nl: "Draagbare propaan of butaan gasbranders zijn ideaal voor straatverkopers omdat ze lichtgewicht zijn, consistente warmtecontrole bieden en geen vaste verbindingen met nutsvoorzieningen vereisen."
        }
      },
      {
        question: {
          en: "What equipment is needed for making fresh pasta at a street food stall?",
          es: "¿Qué equipo se necesita para hacer pasta fresca en un puesto de comida callejera?",
          de: "Welche Ausrüstung wird für die Herstellung von frischer Pasta an einem Straßenessen-Stand benötigt?",
          nl: "Welke uitrusting is nodig voor het maken van verse pasta bij een straatvoedselkraam?"
        },
        options: [
          { en: "Pasta machine, large pot for boiling, and colander", es: "Máquina de pasta, olla grande para hervir y colador", de: "Pasta-Maschine, großer Topf zum Kochen und Sieb", nl: "Pasta machine, grote pot om te koken en vergiet" },
          { en: "Only a microwave", es: "Solo un microondas", de: "Nur eine Mikrowelle", nl: "Alleen een magnetron" },
          { en: "Just mixing bowls", es: "Solo tazones para mezclar", de: "Nur Rührschüsseln", nl: "Alleen mengkommen" },
          { en: "Food processor only", es: "Solo procesador de alimentos", de: "Nur Küchenmaschine", nl: "Alleen keukenmachine" }
        ],
        correct: 0,
        explanation: {
          en: "Making fresh pasta requires a pasta machine to roll and cut the dough, a large pot to boil water, and a colander to drain the cooked pasta efficiently at a street stall.",
          es: "Hacer pasta fresca requiere una máquina de pasta para enrollar y cortar la masa, una olla grande para hervir agua y un colador para escurrir la pasta cocida eficientemente en un puesto callejero.",
          de: "Frische Pasta herzustellen erfordert eine Pasta-Maschine zum Ausrollen und Schneiden des Teiges, einen großen Topf zum Kochen von Wasser und ein Sieb zum effizienten Abtropfen der gekochten Pasta an einem Straßenstand.",
          nl: "Verse pasta maken vereist een pasta machine om het deeg uit te rollen en te snijden, een grote pot om water te koken, en een vergiet om de gekookte pasta efficiënt af te gieten bij een straatkraam."
        }
      },
      {
        question: {
          en: "Which technique is crucial for achieving the right texture in hand-pulled noodles?",
          es: "¿Qué técnica es crucial para lograr la textura correcta en fideos estirados a mano?",
          de: "Welche Technik ist entscheidend für die richtige Textur bei handgezogenen Nudeln?",
          nl: "Welke techniek is cruciaal voor het bereiken van de juiste textuur in met de hand getrokken noedels?"
        },
        options: [
          { en: "Using a machine to cut the dough", es: "Usar una máquina para cortar la masa", de: "Eine Maschine zum Schneiden des Teiges verwenden", nl: "Een machine gebruiken om het deeg te snijden" },
          { en: "Proper gluten development and stretching technique", es: "Desarrollo adecuado del gluten y técnica de estiramiento", de: "Richtige Glutenentwicklung und Dehnungstechnik", nl: "Goede glutenontwikkeling en rektechniek" },
          { en: "Adding lots of oil to the dough", es: "Agregar mucho aceite a la masa", de: "Viel Öl zum Teig hinzufügen", nl: "Veel olie toevoegen aan het deeg" },
          { en: "Freezing the dough before stretching", es: "Congelar la masa antes de estirar", de: "Den Teig vor dem Dehnen einfrieren", nl: "Het deeg invriezen voor het uitrekken" }
        ],
        correct: 1,
        explanation: {
          en: "Hand-pulled noodles require proper gluten development through kneading and resting, followed by skilled stretching techniques to create long, even strands without breaking.",
          es: "Los fideos estirados a mano requieren un desarrollo adecuado del gluten a través del amasado y reposo, seguido de técnicas hábiles de estiramiento para crear hebras largas y uniformes sin romperse.",
          de: "Handgezogene Nudeln erfordern eine ordnungsgemäße Glutenentwicklung durch Kneten und Ruhen, gefolgt von geschickten Dehnungstechniken, um lange, gleichmäßige Stränge zu schaffen, ohne zu reißen.",
          nl: "Met de hand getrokken noedels vereisen goede glutenontwikkeling door kneden en rusten, gevolgd door vaardige rektechnieken om lange, gelijkmatige strengen te creëren zonder te breken."
        }
      },
      {
        question: {
          en: "What type of surface is best for hand-kneading dough in street food preparation?",
          es: "¿Qué tipo de superficie es mejor para amasar masa a mano en la preparación de comida callejera?",
          de: "Welche Art von Oberfläche ist am besten für das Handkneten von Teig bei der Straßenessen-Zubereitung?",
          nl: "Welk type oppervlak is het beste voor het met de hand kneden van deeg bij de bereiding van straatvoedsel?"
        },
        options: [
          { en: "Rough concrete surface", es: "Superficie de concreto rugosa", de: "Raue Betonoberfläche", nl: "Ruwe betonnen ondergrond" },
          { en: "Clean marble or steel work surface", es: "Superficie de trabajo de mármol o acero limpia", de: "Saubere Marmor- oder Stahlarbeitsoberfläche", nl: "Schoon marmer of staal werkoppervlak" },
          { en: "Cardboard", es: "Cartón", de: "Karton", nl: "Karton" },
          { en: "Wooden cutting board only", es: "Solo tabla de cortar de madera", de: "Nur Holzschneidebrett", nl: "Alleen houten snijplank" }
        ],
        correct: 1,
        explanation: {
          en: "Clean marble or stainless steel surfaces are ideal for dough preparation because they're non-porous, easy to sanitize, stay cool, and provide a smooth surface for kneading.",
          es: "Las superficies de mármol limpio o acero inoxidable son ideales para la preparación de masa porque son no porosas, fáciles de desinfectar, se mantienen frías y proporcionan una superficie lisa para amasar.",
          de: "Saubere Marmor- oder Edelstahloberflächen sind ideal für die Teigvorbereitung, weil sie nicht porös sind, leicht zu desinfizieren, kühl bleiben und eine glatte Oberfläche zum Kneten bieten.",
          nl: "Schone marmer of roestvrijstalen oppervlakken zijn ideaal voor deegbereiding omdat ze niet-poreus zijn, gemakkelijk te desinfecteren, koel blijven en een glad oppervlak bieden voor kneden."
        }
      },
      {
        question: {
          en: "Which type of knife is most versatile for street food preparation?",
          es: "¿Qué tipo de cuchillo es más versátil para la preparación de comida callejera?",
          de: "Welche Art von Messer ist am vielseitigsten für die Straßenessen-Zubereitung?",
          nl: "Welk type mes is het meest veelzijdig voor de bereiding van straatvoedsel?"
        },
        options: [
          { en: "Butter knife", es: "Cuchillo de mantequilla", de: "Buttermesser", nl: "Botermes" },
          { en: "Sharp chef's knife or cleaver", es: "Cuchillo de chef afilado o cuchilla", de: "Scharfes Kochmesser oder Hackmesser", nl: "Scherp koksmes of hakmes" },
          { en: "Plastic knife", es: "Cuchillo de plástico", de: "Plastikmesser", nl: "Plastic mes" },
          { en: "Serrated bread knife only", es: "Solo cuchillo de pan serrado", de: "Nur gezacktes Brotmesser", nl: "Alleen gezaagd broodmes" }
        ],
        correct: 1,
        explanation: {
          en: "A sharp chef's knife or cleaver is essential for street food preparation as it can handle chopping vegetables, slicing meat, and various cutting tasks efficiently and safely.",
          es: "Un cuchillo de chef afilado o cuchilla es esencial para la preparación de comida callejera ya que puede manejar picar verduras, rebanar carne y varias tareas de corte de manera eficiente y segura.",
          de: "Ein scharfes Kochmesser oder Hackmesser ist für die Straßenessen-Zubereitung unerlässlich, da es Gemüse hacken, Fleisch schneiden und verschiedene Schneidaufgaben effizient und sicher bewältigen kann.",
          nl: "Een scherp koksmes of hakmes is essentieel voor straatvoedselvoorbereiding omdat het groenten kan hakken, vlees snijden en verschillende snijdtaken efficiënt en veilig kan uitvoeren."
        }
      },
      {
        question: {
          en: "What is the ideal temperature for serving hot street food safely?",
          es: "¿Cuál es la temperatura ideal para servir comida callejera caliente de forma segura?",
          de: "Was ist die ideale Temperatur zum sicheren Servieren von heißem Straßenessen?",
          nl: "Wat is de ideale temperatuur voor het veilig serveren van warm straatvoedsel?"
        },
        options: [
          { en: "Room temperature (70°F/21°C)", es: "Temperatura ambiente (21°C)", de: "Raumtemperatur (21°C)", nl: "Kamertemperatuur (21°C)" },
          { en: "Above 140°F (60°C) to prevent bacterial growth", es: "Por encima de 60°C para prevenir crecimiento bacteriano", de: "Über 60°C um Bakterienwachstum zu verhindern", nl: "Boven 60°C om bacteriegroei te voorkomen" },
          { en: "Lukewarm (100°F/38°C)", es: "Tibio (38°C)", de: "Lauwarm (38°C)", nl: "Lauwwarm (38°C)" },
          { en: "Cold (below 40°F/4°C)", es: "Frío (debajo de 4°C)", de: "Kalt (unter 4°C)", nl: "Koud (onder 4°C)" }
        ],
        correct: 1,
        explanation: {
          en: "Hot street food should be maintained above 140°F (60°C) to stay in the safe temperature zone and prevent bacterial growth that can cause foodborne illness.",
          es: "La comida callejera caliente debe mantenerse por encima de 60°C para permanecer en la zona de temperatura segura y prevenir el crecimiento bacteriano que puede causar enfermedades transmitidas por alimentos.",
          de: "Heißes Straßenessen sollte über 60°C gehalten werden, um in der sicheren Temperaturzone zu bleiben und Bakterienwachstum zu verhindern, das lebensmittelbedingte Krankheiten verursachen kann.",
          nl: "Warm straatvoedsel moet boven 60°C worden gehouden om in de veilige temperatuurzone te blijven en bacteriegroei te voorkomen die voedselgerelateerde ziekten kan veroorzaken."
        }
      },
      {
        question: {
          en: "Which cooking vessel is traditional for making paella at street festivals?",
          es: "¿Qué recipiente de cocina es tradicional para hacer paella en festivales callejeros?",
          de: "Welches Kochgefäß ist traditionell für die Herstellung von Paella bei Straßenfesten?",
          nl: "Welk kookgerei is traditioneel voor het maken van paella bij straatfestivals?"
        },
        options: [
          { en: "Deep stockpot", es: "Olla profunda", de: "Tiefer Suppentopf", nl: "Diepe voorraadpan" },
          { en: "Wide, shallow paellera pan", es: "Sartén paellera ancha y poco profunda", de: "Breite, flache Paellera-Pfanne", nl: "Brede, ondiepe paellera pan" },
          { en: "Wok", es: "Wok", de: "Wok", nl: "Wok" },
          { en: "Pressure cooker", es: "Olla a presión", de: "Schnellkochtopf", nl: "Snelkookpan" }
        ],
        correct: 1,
        explanation: {
          en: "A paellera is a wide, shallow pan specifically designed for making paella, allowing the rice to form a thin layer that cooks evenly and develops the desired texture and socarrat (crispy bottom).",
          es: "Una paellera es una sartén ancha y poco profunda específicamente diseñada para hacer paella, permitiendo que el arroz forme una capa delgada que se cocina uniformemente y desarrolla la textura deseada y el socarrat (fondo crujiente).",
          de: "Eine Paellera ist eine breite, flache Pfanne, die speziell für die Paella-Herstellung entwickelt wurde und es dem Reis ermöglicht, eine dünne Schicht zu bilden, die gleichmäßig kocht und die gewünschte Textur und Socarrat (knusprigen Boden) entwickelt.",
          nl: "Een paellera is een brede, ondiepe pan specifiek ontworpen voor het maken van paella, waardoor de rijst een dunne laag kan vormen die gelijkmatig kookt en de gewenste textuur en socarrat (knapperige bodem) ontwikkelt."
        }
      },
      {
        question: {
          en: "What safety equipment is essential for street food vendors working with hot oil?",
          es: "¿Qué equipo de seguridad es esencial para vendedores de comida callejera que trabajan con aceite caliente?",
          de: "Welche Sicherheitsausrüstung ist für Straßenessen-Verkäufer, die mit heißem Öl arbeiten, unerlässlich?",
          nl: "Welke veiligheidsuitrusting is essentieel voor straatvoedselverkopers die met hete olie werken?"
        },
        options: [
          { en: "Sunglasses and shorts", es: "Gafas de sol y pantalones cortos", de: "Sonnenbrille und Shorts", nl: "Zonnebril en korte broek" },
          { en: "Heat-resistant gloves, apron, and fire extinguisher", es: "Guantes resistentes al calor, delantal y extintor", de: "Hitzebeständige Handschuhe, Schürze und Feuerlöscher", nl: "Hittebestendige handschoenen, schort en brandblusser" },
          { en: "Baseball cap only", es: "Solo gorra de béisbol", de: "Nur Baseballmütze", nl: "Alleen baseballpet" },
          { en: "Flip-flops and tank top", es: "Chanclas y camiseta sin mangas", de: "Flip-Flops und Tank-Top", nl: "Slippers en tanktop" }
        ],
        correct: 1,
        explanation: {
          en: "Working with hot oil requires proper protective equipment including heat-resistant gloves, protective clothing like aprons, and fire safety equipment like extinguishers to prevent burns and handle emergencies.",
          es: "Trabajar with aceite caliente requiere equipo de protección adecuado incluyendo guantes resistentes al calor, ropa protectora como delantales y equipo de seguridad contra incendios como extintores para prevenir quemaduras y manejar emergencias.",
          de: "Die Arbeit mit heißem Öl erfordert angemessene Schutzausrüstung einschließlich hitzebeständiger Handschuhe, Schutzkleidung wie Schürzen und Brandsicherheitsausrüstung wie Löscher, um Verbrennungen zu verhindern und Notfälle zu bewältigen.",
          nl: "Werken met hete olie vereist goede beschermende uitrusting inclusief hittebestendige handschoenen, beschermende kleding zoals schorten, en brandveiligheiduitrusting zoals blussers om brandwonden te voorkomen en noodsituaties aan te pakken."
        }
      },
      {
        question: {
          en: "Which factor most affects the quality of grilled street food?",
          es: "¿Qué factor afecta más la calidad de la comida callejera a la parrilla?",
          de: "Welcher Faktor beeinflusst die Qualität von gegrilltem Straßenessen am meisten?",
          nl: "Welke factor beïnvloedt de kwaliteit van gegrild straatvoedsel het meest?"
        },
        options: [
          { en: "The color of the grill", es: "El color de la parrilla", de: "Die Farbe des Grills", nl: "De kleur van de grill" },
          { en: "Proper heat control and timing", es: "Control adecuado del calor y tiempo", de: "Richtige Hitzekontrolle und Timing", nl: "Goede warmtecontrole en timing" },
          { en: "The size of the vendor's cart", es: "El tamaño del carrito del vendedor", de: "Die Größe des Verkäuferwagens", nl: "De grootte van de kar van de verkoper" },
          { en: "The time of day", es: "La hora del día", de: "Die Tageszeit", nl: "Het tijdstip van de dag" }
        ],
        correct: 1,
        explanation: {
          en: "Proper heat control and timing are crucial for grilled street food quality, ensuring food is cooked thoroughly while maintaining moisture, flavor, and preventing burning or undercooking.",
          es: "El control adecuado del calor y el tiempo son cruciales para la calidad de la comida callejera a la parrilla, asegurando que la comida esté bien cocida mientras mantiene la humedad, el sabor y previene que se queme o esté poco cocida.",
          de: "Richtige Hitzekontrolle und Timing sind entscheidend für die Qualität von gegrilltem Straßenessen und stellen sicher, dass das Essen gründlich gekocht wird, während Feuchtigkeit und Geschmack erhalten bleiben und Verbrennen oder Unterkochen vermieden wird.",
          nl: "Goede warmtecontrole en timing zijn cruciaal voor de kwaliteit van gegrild straatvoedsel, waarbij wordt gegarandeerd dat voedsel grondig wordt gekookt terwijl vocht en smaak behouden blijven en verbranden of onderkoking wordt voorkomen."
        }
      },
      {
        question: {
          en: "What type of grill is commonly used for satay and kebabs?",
          es: "¿Qué tipo de parrilla se usa comúnmente para satay y kebabs?",
          de: "Welche Art von Grill wird häufig für Satay und Kebabs verwendet?",
          nl: "Welk type grill wordt vaak gebruikt voor saté en kebabs?"
        },
        options: [
          { en: "Electric induction cooktop", es: "Placa de inducción eléctrica", de: "Elektrische Induktionskochplatte", nl: "Elektrische inductiekookplaat" },
          { en: "Charcoal brazier or portable grill", es: "Brasero de carbón o parrilla portátil", de: "Holzkohlebecken oder tragbarer Grill", nl: "Houtskool komfoor of draagbare grill" },
          { en: "Gas oven", es: "Horno de gas", de: "Gasofen", nl: "Gasoven" },
          { en: "Microwave oven", es: "Horno microondas", de: "Mikrowellenofen", nl: "Magnetron" }
        ],
        correct: 1,
        explanation: {
          en: "Charcoal braziers and portable grills are ideal for satay and kebabs because they provide high heat and impart a smoky flavor while being portable for street vendors.",
          es: "Los braseros de carbón y las parrillas portátiles son ideales para satay y kebabs porque proporcionan alto calor e imparten un sabor ahumado mientras son portátiles para vendedores callejeros.",
          de: "Holzkohlebecken und tragbare Grills sind ideal für Satay und Kebabs, weil sie hohe Hitze liefern und einen rauchigen Geschmack verleihen, während sie für Straßenhändler tragbar sind.",
          nl: "Houtskool komfoors en draagbare grills zijn ideaal voor saté en kebabs omdat ze hoge hitte leveren en een rokerige smaak geven terwijl ze draagbaar zijn voor straatverkopers."
        }
      },
      {
        question: {
          en: "Which cooking method is essential for making proper crispy spring rolls?",
          es: "¿Qué método de cocina es esencial para hacer rollos de primavera crujientes adecuados?",
          de: "Welche Kochmethode ist für die Herstellung von knusprigen Frühlingsrollen unerlässlich?",
          nl: "Welke kookmethode is essentieel voor het maken van goede knapperige loempia's?"
        },
        options: [
          { en: "Steaming", es: "Vapor", de: "Dämpfen", nl: "Stomen" },
          { en: "Deep frying at 350-375°F (175-190°C)", es: "Fritura profunda a 175-190°C", de: "Frittieren bei 175-190°C", nl: "Diep frituren op 175-190°C" },
          { en: "Boiling", es: "Hervir", de: "Kochen", nl: "Koken" },
          { en: "Raw preparation", es: "Preparación cruda", de: "Rohe Zubereitung", nl: "Rauwe bereiding" }
        ],
        correct: 1,
        explanation: {
          en: "Deep frying at the correct temperature (350-375°F/175-190°C) is crucial for spring rolls to achieve the characteristic crispy exterior while cooking the filling properly.",
          es: "La fritura profunda a la temperatura correcta (175-190°C) es crucial para que los rollos de primavera logren el exterior crujiente característico mientras se cocina el relleno adecuadamente.",
          de: "Frittieren bei der richtigen Temperatur (175-190°C) ist entscheidend für Frühlingsrollen, um die charakteristische knusprige Außenseite zu erreichen, während die Füllung richtig gekocht wird.",
          nl: "Diep frituren op de juiste temperatuur (175-190°C) is cruciaal voor loempia's om de karakteristieke knapperige buitenkant te bereiken terwijl de vulling goed wordt gekookt."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  }

  return level3;
})();