// Seafood Quiz - Level 4
(function() {
  const level4 = {
    name: {
      en: "Seafood Level 4",
      es: "Mariscos Nivel 4",
      de: "Meeresfrüchte Stufe 4",
      nl: "Zeevruchten Level 4"
    },
    questions: [
      {
        question: {
          en: "What is the main difference between white fish and oily fish?",
          es: "¿Cuál es la principal diferencia entre el pescado blanco y el pescado graso?",
          de: "Was ist der Hauptunterschied zwischen Weißfisch und fettem Fisch?",
          nl: "Wat is het belangrijkste verschil tussen witte vis en vette vis?"
        },
        options: [
          { en: "Fat content and distribution in the flesh", es: "Contenido de grasa y distribución en la carne", de: "Fettgehalt und Verteilung im Fleisch", nl: "Vetgehalte en verdeling in het vlees" },
          { en: "Color of the scales", es: "Color de las escamas", de: "Farbe der Schuppen", nl: "Kleur van de schubben" },
          { en: "Size of the fish", es: "Tamaño del pescado", de: "Größe des Fisches", nl: "Grootte van de vis" },
          { en: "Habitat depth", es: "Profundidad del hábitat", de: "Lebensraumtiefe", nl: "Habitat diepte" }
        ],
        correct: 0,
        explanation: {
          en: "White fish store fat in their liver, resulting in lean flesh, while oily fish distribute fat throughout their body, resulting in darker, richer flesh with higher omega-3 content. Examples include cod (white) and salmon (oily).",
          es: "El pescado blanco almacena grasa en su hígado, resultando en carne magra, mientras que el pescado graso distribuye grasa por todo su cuerpo, resultando en carne más oscura y rica con mayor contenido de omega-3. Los ejemplos incluyen bacalao (blanco) y salmón (graso).",
          de: "Weißfisch speichert Fett in seiner Leber, was zu magerem Fleisch führt, während fetter Fisch Fett im ganzen Körper verteilt, was zu dunklerem, reichhaltigerem Fleisch mit höherem Omega-3-Gehalt führt. Beispiele sind Kabeljau (weiß) und Lachs (fett).",
          nl: "Witte vis slaat vet op in de lever, wat resulteert in mager vlees, terwijl vette vis vet door het hele lichaam verspreidt, wat resulteert in donkerder, rijker vlees met een hoger omega-3-gehalte. Voorbeelden zijn kabeljauw (wit) en zalm (vet)."
        }
      },
      {
        question: {
          en: "What cooking method is best for preserving the delicate texture of scallops?",
          es: "¿Qué método de cocción es mejor para preservar la textura delicada de las vieiras?",
          de: "Welche Garmethode eignet sich am besten, um die zarte Textur von Jakobsmuscheln zu bewahren?",
          nl: "Welke kookmethode is het beste om de delicate textuur van sint-jakobsschelpen te behouden?"
        },
        options: [
          { en: "Slow braising for 30 minutes", es: "Estofado lento durante 30 minutos", de: "Langsames Schmoren für 30 Minuten", nl: "Langzaam sudderen voor 30 minuten" },
          { en: "Quick searing at high heat", es: "Sellado rápido a fuego alto", de: "Schnelles Anbraten bei hoher Hitze", nl: "Snel aanbraden op hoge hitte" },
          { en: "Boiling for 15 minutes", es: "Hervir durante 15 minutos", de: "15 Minuten kochen", nl: "15 minuten koken" },
          { en: "Deep frying for 10 minutes", es: "Freír durante 10 minutos", de: "10 Minuten frittieren", nl: "10 minuten frituren" }
        ],
        correct: 1,
        explanation: {
          en: "Scallops have delicate flesh that becomes tough and rubbery when overcooked. The best method is quick searing at high heat for 1-2 minutes per side, creating a golden crust while keeping the interior tender and slightly translucent.",
          es: "Las vieiras tienen carne delicada que se vuelve dura y gomosa cuando se cocina demasiado. El mejor método es sellar rápidamente a fuego alto durante 1-2 minutos por lado, creando una costra dorada mientras mantiene el interior tierno y ligeramente translúcido.",
          de: "Jakobsmuscheln haben zartes Fleisch, das bei Überkochen zäh und gummiartig wird. Die beste Methode ist schnelles Anbraten bei hoher Hitze für 1-2 Minuten pro Seite, wodurch eine goldene Kruste entsteht, während das Innere zart und leicht durchscheinend bleibt.",
          nl: "Sint-jakobsschelpen hebben delicaat vlees dat taai en rubberachtig wordt bij te lang koken. De beste methode is snel aanbraden op hoge hitte gedurende 1-2 minuten per kant, waardoor een gouden korst ontstaat terwijl de binnenkant mals en licht doorschijnend blijft."
        }
      },
      {
        question: {
          en: "What does 'deveining' a shrimp involve?",
          es: "¿Qué implica 'desvenir' un camarón?",
          de: "Was bedeutet das 'Entdarmen' einer Garnele?",
          nl: "Wat houdt het 'ontdarmen' van een garnaal in?"
        },
        options: [
          { en: "Removing the shell", es: "Quitar la cáscara", de: "Die Schale entfernen", nl: "De schaal verwijderen" },
          { en: "Removing the digestive tract", es: "Quitar el tracto digestivo", de: "Den Verdauungstrakt entfernen", nl: "Het spijsverteringskanaal verwijderen" },
          { en: "Removing the head", es: "Quitar la cabeza", de: "Den Kopf entfernen", nl: "Het hoofd verwijderen" },
          { en: "Removing the tail", es: "Quitar la cola", de: "Den Schwanz entfernen", nl: "De staart verwijderen" }
        ],
        correct: 1,
        explanation: {
          en: "Deveining is the process of removing the dark digestive tract (the 'vein') that runs along the back of the shrimp. This is done both for aesthetic reasons and to remove any grit or unpleasant taste, especially in larger shrimp.",
          es: "Desvenir es el proceso de quitar el tracto digestivo oscuro (la 'vena') que corre a lo largo del lomo del camarón. Esto se hace tanto por razones estéticas como para eliminar cualquier arenilla o sabor desagradable, especialmente en camarones más grandes.",
          de: "Entdarmen ist der Prozess des Entfernens des dunklen Verdauungstrakts (der 'Ader'), der entlang des Rückens der Garnele verläuft. Dies geschieht sowohl aus ästhetischen Gründen als auch um Sand oder unangenehmen Geschmack zu entfernen, besonders bei größeren Garnelen.",
          nl: "Ontdarmen is het proces van het verwijderen van het donkere spijsverteringskanaal (de 'ader') dat langs de rug van de garnaal loopt. Dit wordt gedaan om esthetische redenen en om zand of onaangename smaak te verwijderen, vooral bij grotere garnalen."
        }
      },
      {
        question: {
          en: "What is the purpose of brining fish before cooking?",
          es: "¿Cuál es el propósito de salar el pescado antes de cocinarlo?",
          de: "Was ist der Zweck des Einlegens von Fisch in Salzlake vor dem Kochen?",
          nl: "Wat is het doel van het pekelen van vis voor het koken?"
        },
        options: [
          { en: "To enhance moisture retention and flavor", es: "Para mejorar la retención de humedad y el sabor", de: "Um Feuchtigkeitsretention und Geschmack zu verbessern", nl: "Om vochtretentie en smaak te verbeteren" },
          { en: "To remove scales", es: "Para quitar las escamas", de: "Um Schuppen zu entfernen", nl: "Om schubben te verwijderen" },
          { en: "To change the color", es: "Para cambiar el color", de: "Um die Farbe zu ändern", nl: "Om de kleur te veranderen" },
          { en: "To cook the fish partially", es: "Para cocinar el pescado parcialmente", de: "Um den Fisch teilweise zu garen", nl: "Om de vis gedeeltelijk te garen" }
        ],
        correct: 0,
        explanation: {
          en: "Brining fish in a salt-water solution helps the flesh retain moisture during cooking, prevents it from becoming dry, and enhances flavor. The salt changes the protein structure, allowing the fish to hold onto more water when exposed to heat.",
          es: "Salar el pescado en una solución de agua salada ayuda a que la carne retenga humedad durante la cocción, previene que se seque y mejora el sabor. La sal cambia la estructura de las proteínas, permitiendo que el pescado retenga más agua cuando se expone al calor.",
          de: "Das Einlegen von Fisch in Salzlake hilft dem Fleisch, Feuchtigkeit während des Kochens zu bewahren, verhindert Austrocknung und verbessert den Geschmack. Das Salz verändert die Proteinstruktur und ermöglicht es dem Fisch, mehr Wasser zu halten, wenn er Hitze ausgesetzt ist.",
          nl: "Het pekelen van vis in een zoutoplossing helpt het vlees vocht vast te houden tijdens het koken, voorkomt uitdrogen en verbetert de smaak. Het zout verandert de eiwitstructuur, waardoor de vis meer water kan vasthouden bij blootstelling aan hitte."
        }
      },
      {
        question: {
          en: "What should fresh fish smell like?",
          es: "¿A qué debe oler el pescado fresco?",
          de: "Wonach sollte frischer Fisch riechen?",
          nl: "Waarnaar zou verse vis moeten ruiken?"
        },
        options: [
          { en: "Strong fishy odor", es: "Olor fuerte a pescado", de: "Starker Fischgeruch", nl: "Sterke visachtige geur" },
          { en: "Clean ocean or cucumber scent", es: "Olor limpio a océano o pepino", de: "Sauberer Ozean- oder Gurkenduft", nl: "Schone oceaan- of komkommergeur" },
          { en: "Ammonia smell", es: "Olor a amoníaco", de: "Ammoniakgeruch", nl: "Ammoniakgeur" },
          { en: "Sour odor", es: "Olor agrio", de: "Saurer Geruch", nl: "Zure geur" }
        ],
        correct: 1,
        explanation: {
          en: "Fresh fish should smell clean, like the ocean or cucumbers, with no strong fishy odor. A strong fish smell, ammonia scent, or sour odor indicates that the fish is old and beginning to spoil. The eyes should be clear and the flesh should be firm.",
          es: "El pescado fresco debe oler limpio, como el océano o pepinos, sin olor fuerte a pescado. Un olor fuerte a pescado, aroma a amoníaco u olor agrio indica que el pescado es viejo y comienza a echarse a perder. Los ojos deben estar claros y la carne debe estar firme.",
          de: "Frischer Fisch sollte sauber riechen, wie der Ozean oder Gurken, ohne starken Fischgeruch. Ein starker Fischgeruch, Ammoniakgeruch oder saurer Geruch zeigt an, dass der Fisch alt ist und zu verderben beginnt. Die Augen sollten klar sein und das Fleisch sollte fest sein.",
          nl: "Verse vis moet schoon ruiken, naar de oceaan of komkommers, zonder sterke visachtige geur. Een sterke visgeur, ammoniakgeur of zure geur geeft aan dat de vis oud is en begint te bederven. De ogen moeten helder zijn en het vlees moet stevig zijn."
        }
      },
      {
        question: {
          en: "What is the primary benefit of eating fatty fish like salmon and mackerel?",
          es: "¿Cuál es el beneficio principal de comer pescado graso como el salmón y la caballa?",
          de: "Was ist der Hauptvorteil des Verzehrs von fettem Fisch wie Lachs und Makrele?",
          nl: "Wat is het belangrijkste voordeel van het eten van vette vis zoals zalm en makreel?"
        },
        options: [
          { en: "High vitamin C content", es: "Alto contenido de vitamina C", de: "Hoher Vitamin-C-Gehalt", nl: "Hoog vitamine C-gehalte" },
          { en: "High omega-3 fatty acids", es: "Altos ácidos grasos omega-3", de: "Hohe Omega-3-Fettsäuren", nl: "Hoge omega-3 vetzuren" },
          { en: "High carbohydrate content", es: "Alto contenido de carbohidratos", de: "Hoher Kohlenhydratgehalt", nl: "Hoog koolhydraatgehalte" },
          { en: "High fiber content", es: "Alto contenido de fibra", de: "Hoher Ballaststoffgehalt", nl: "Hoog vezelgehalte" }
        ],
        correct: 1,
        explanation: {
          en: "Fatty fish are excellent sources of omega-3 fatty acids (EPA and DHA), which provide numerous health benefits including heart health, brain function, and anti-inflammatory effects. These essential fats cannot be produced by the body and must be obtained through diet.",
          es: "El pescado graso es una excelente fuente de ácidos grasos omega-3 (EPA y DHA), que proporcionan numerosos beneficios para la salud incluyendo salud cardíaca, función cerebral y efectos antiinflamatorios. Estas grasas esenciales no pueden ser producidas por el cuerpo y deben obtenerse a través de la dieta.",
          de: "Fetter Fisch ist eine ausgezeichnete Quelle für Omega-3-Fettsäuren (EPA und DHA), die zahlreiche gesundheitliche Vorteile bieten, darunter Herzgesundheit, Gehirnfunktion und entzündungshemmende Wirkungen. Diese essentiellen Fette können vom Körper nicht produziert werden und müssen über die Nahrung aufgenommen werden.",
          nl: "Vette vis is een uitstekende bron van omega-3 vetzuren (EPA en DHA), die talrijke gezondheidsvoordelen bieden, waaronder hartgezondheid, hersenfunctie en ontstekingsremmende effecten. Deze essentiële vetten kunnen niet door het lichaam worden geproduceerd en moeten via de voeding worden verkregen."
        }
      },
      {
        question: {
          en: "What does 'sushi-grade' fish mean?",
          es: "¿Qué significa pescado 'grado sushi'?",
          de: "Was bedeutet 'Sushi-Qualität' bei Fisch?",
          nl: "Wat betekent vis van 'sushi-kwaliteit'?"
        },
        options: [
          { en: "Fish that has been frozen to kill parasites and is safe to eat raw", es: "Pescado que ha sido congelado para matar parásitos y es seguro para comer crudo", de: "Fisch, der eingefroren wurde, um Parasiten zu töten und sicher roh gegessen werden kann", nl: "Vis die is bevroren om parasieten te doden en veilig rauw kan worden gegeten" },
          { en: "Fish caught in Japan only", es: "Pescado capturado solo en Japón", de: "Nur in Japan gefangener Fisch", nl: "Alleen vis gevangen in Japan" },
          { en: "Fish that is specially colored", es: "Pescado especialmente coloreado", de: "Speziell gefärbter Fisch", nl: "Speciaal gekleurde vis" },
          { en: "Fish with extra salt", es: "Pescado con sal extra", de: "Fisch mit extra Salz", nl: "Vis met extra zout" }
        ],
        correct: 0,
        explanation: {
          en: "Sushi-grade fish has been properly frozen to specific temperatures and durations to kill parasites, making it safe for raw consumption. In the US, FDA guidelines require fish to be frozen at -4°F (-20°C) for 7 days or flash-frozen at -31°F (-35°C) for 15 hours.",
          es: "El pescado grado sushi ha sido congelado apropiadamente a temperaturas y duraciones específicas para matar parásitos, haciéndolo seguro para consumo crudo. En EE.UU., las pautas de la FDA requieren que el pescado se congele a -4°F (-20°C) durante 7 días o se congele rápidamente a -31°F (-35°C) durante 15 horas.",
          de: "Fisch in Sushi-Qualität wurde ordnungsgemäß auf bestimmte Temperaturen und Dauern eingefroren, um Parasiten zu töten und ihn für rohen Verzehr sicher zu machen. In den USA verlangen FDA-Richtlinien, dass Fisch bei -20°C für 7 Tage oder schockgefroren bei -35°C für 15 Stunden eingefroren wird.",
          nl: "Vis van sushi-kwaliteit is op de juiste manier bevroren tot specifieke temperaturen en tijdsduren om parasieten te doden, waardoor het veilig is voor rauw consumptie. In de VS vereisen FDA-richtlijnen dat vis wordt bevroren op -20°C gedurende 7 dagen of shock-bevroren op -35°C gedurende 15 uur."
        }
      },
      {
        question: {
          en: "What is the black ink produced by squid and cuttlefish called?",
          es: "¿Cómo se llama la tinta negra producida por calamares y sepias?",
          de: "Wie heißt die schwarze Tinte, die von Tintenfischen und Sepien produziert wird?",
          nl: "Hoe heet de zwarte inkt die door inktvissen en zeekatten wordt geproduceerd?"
        },
        options: [
          { en: "Sepia", es: "Sepia", de: "Sepia", nl: "Sepia" },
          { en: "Melanin", es: "Melanina", de: "Melanin", nl: "Melanine" },
          { en: "Charcoal", es: "Carbón", de: "Kohle", nl: "Houtskool" },
          { en: "Graphite", es: "Grafito", de: "Graphit", nl: "Grafiet" }
        ],
        correct: 0,
        explanation: {
          en: "The ink is called sepia, which contains melanin and is used as a defense mechanism. In cooking, squid ink (nero di seppia) is prized for adding unique flavor and dramatic black color to dishes like pasta, risotto, and paella.",
          es: "La tinta se llama sepia, que contiene melanina y se usa como mecanismo de defensa. En cocina, la tinta de calamar (nero di seppia) es apreciada por agregar sabor único y color negro dramático a platos como pasta, risotto y paella.",
          de: "Die Tinte heißt Sepia, die Melanin enthält und als Verteidigungsmechanismus verwendet wird. Beim Kochen wird Tintenfischtinte (nero di seppia) für ihren einzigartigen Geschmack und die dramatische schwarze Farbe in Gerichten wie Pasta, Risotto und Paella geschätzt.",
          nl: "De inkt wordt sepia genoemd, die melanine bevat en als verdedigingsmechanisme wordt gebruikt. Bij het koken wordt inktvisinkt (nero di seppia) gewaardeerd om de unieke smaak en dramatische zwarte kleur toe te voegen aan gerechten zoals pasta, risotto en paella."
        }
      },
      {
        question: {
          en: "What is the recommended internal temperature for cooked fish?",
          es: "¿Cuál es la temperatura interna recomendada para el pescado cocido?",
          de: "Was ist die empfohlene Kerntemperatur für gekochten Fisch?",
          nl: "Wat is de aanbevolen kerntemperatuur voor gekookte vis?"
        },
        options: [
          { en: "120°F (49°C)", es: "120°F (49°C)", de: "49°C", nl: "49°C" },
          { en: "145°F (63°C)", es: "145°F (63°C)", de: "63°C", nl: "63°C" },
          { en: "165°F (74°C)", es: "165°F (74°C)", de: "74°C", nl: "74°C" },
          { en: "180°F (82°C)", es: "180°F (82°C)", de: "82°C", nl: "82°C" }
        ],
        correct: 1,
        explanation: {
          en: "The FDA recommends cooking fish to an internal temperature of 145°F (63°C). At this temperature, the flesh should be opaque and separate easily with a fork. Some chefs prefer slightly lower temperatures for tuna and salmon to maintain moisture.",
          es: "La FDA recomienda cocinar el pescado a una temperatura interna de 145°F (63°C). A esta temperatura, la carne debe ser opaca y separarse fácilmente con un tenedor. Algunos chefs prefieren temperaturas ligeramente más bajas para atún y salmón para mantener la humedad.",
          de: "Die FDA empfiehlt, Fisch auf eine Kerntemperatur von 63°C zu garen. Bei dieser Temperatur sollte das Fleisch undurchsichtig sein und sich leicht mit einer Gabel trennen lassen. Einige Köche bevorzugen etwas niedrigere Temperaturen für Thunfisch und Lachs, um die Feuchtigkeit zu erhalten.",
          nl: "De FDA beveelt aan vis te garen tot een kerntemperatuur van 63°C. Bij deze temperatuur moet het vlees ondoorzichtig zijn en gemakkelijk met een vork uit elkaar vallen. Sommige koks geven de voorkeur aan iets lagere temperaturen voor tonijn en zalm om vocht te behouden."
        }
      },
      {
        question: {
          en: "What part of the lobster contains the green 'tomalley'?",
          es: "¿Qué parte de la langosta contiene el 'tomalley' verde?",
          de: "Welcher Teil des Hummers enthält den grünen 'Tomalley'?",
          nl: "Welk deel van de kreeft bevat de groene 'tomalley'?"
        },
        options: [
          { en: "The shell", es: "El caparazón", de: "Die Schale", nl: "De schaal" },
          { en: "The liver and pancreas", es: "El hígado y el páncreas", de: "Die Leber und Bauchspeicheldrüse", nl: "De lever en alvleesklier" },
          { en: "The gills", es: "Las branquias", de: "Die Kiemen", nl: "De kieuwen" },
          { en: "The tail muscle", es: "El músculo de la cola", de: "Der Schwanzmuskel", nl: "De staartspier" }
        ],
        correct: 1,
        explanation: {
          en: "Tomalley is the soft green substance found in the body cavity of lobsters, which is actually the liver and pancreas. It's considered a delicacy by some, with a rich, intense flavor, though health advisories sometimes caution against consumption due to potential toxin accumulation.",
          es: "El tomalley es la sustancia verde suave encontrada en la cavidad corporal de las langostas, que en realidad es el hígado y el páncreas. Es considerado un manjar por algunos, con un sabor rico e intenso, aunque los avisos de salud a veces advierten contra el consumo debido a la posible acumulación de toxinas.",
          de: "Tomalley ist die weiche grüne Substanz, die in der Körperhöhle von Hummern gefunden wird und tatsächlich die Leber und Bauchspeicheldrüse ist. Es wird von einigen als Delikatesse betrachtet, mit einem reichen, intensiven Geschmack, obwohl Gesundheitswarnungen manchmal vor dem Verzehr warnen wegen möglicher Toxinansammlung.",
          nl: "Tomalley is de zachte groene substantie die in de lichaamsholte van kreeften wordt aangetroffen en eigenlijk de lever en alvleesklier is. Het wordt door sommigen als een delicatesse beschouwd, met een rijke, intense smaak, hoewel gezondheidsadviezen soms waarschuwen voor consumptie vanwege mogelijke toxineophoping."
        }
      },
      {
        question: {
          en: "What is the primary difference between prawns and shrimp?",
          es: "¿Cuál es la diferencia principal entre langostinos y camarones?",
          de: "Was ist der Hauptunterschied zwischen Garnelen und Shrimps?",
          nl: "Wat is het belangrijkste verschil tussen garnalen en shrimps?"
        },
        options: [
          { en: "Body structure and gill type", es: "Estructura corporal y tipo de branquias", de: "Körperstruktur und Kiementyp", nl: "Lichaamsstructuur en kieuwen type" },
          { en: "Color only", es: "Solo el color", de: "Nur die Farbe", nl: "Alleen de kleur" },
          { en: "Habitat temperature", es: "Temperatura del hábitat", de: "Lebensraumtemperatur", nl: "Habitat temperatuur" },
          { en: "No difference", es: "Ninguna diferencia", de: "Kein Unterschied", nl: "Geen verschil" }
        ],
        correct: 0,
        explanation: {
          en: "Prawns and shrimp are biologically different: prawns have branching gills, three pairs of claw-like legs, and straighter bodies, while shrimp have lamellar (plate-like) gills, two pairs of claws, and more curved bodies. However, the terms are often used interchangeably in cooking.",
          es: "Los langostinos y camarones son biológicamente diferentes: los langostinos tienen branquias ramificadas, tres pares de patas con garras y cuerpos más rectos, mientras que los camarones tienen branquias lamelares, dos pares de garras y cuerpos más curvos. Sin embargo, los términos a menudo se usan indistintamente en la cocina.",
          de: "Garnelen und Shrimps sind biologisch unterschiedlich: Garnelen haben verzweigte Kiemen, drei Paare klauenartiger Beine und geradere Körper, während Shrimps lamelläre Kiemen, zwei Paare Klauen und gekrümmtere Körper haben. Die Begriffe werden jedoch beim Kochen oft synonym verwendet.",
          nl: "Garnalen en shrimps zijn biologisch verschillend: garnalen hebben vertakte kieuwen, drie paar klauwachtige poten en rechtere lichamen, terwijl shrimps lamellaire kieuwen, twee paar klauwen en meer gebogen lichamen hebben. De termen worden echter vaak door elkaar gebruikt bij het koken."
        }
      },
      {
        question: {
          en: "What is the culinary term for fish eggs?",
          es: "¿Cuál es el término culinario para huevos de pescado?",
          de: "Was ist der kulinarische Begriff für Fischeier?",
          nl: "Wat is de culinaire term voor viseieren?"
        },
        options: [
          { en: "Caviar", es: "Caviar", de: "Kaviar", nl: "Kaviaar" },
          { en: "Roe", es: "Hueva", de: "Rogen", nl: "Kuit" },
          { en: "Pearls", es: "Perlas", de: "Perlen", nl: "Parels" },
          { en: "Ovules", es: "Óvulos", de: "Eizellen", nl: "Eicellen" }
        ],
        correct: 1,
        explanation: {
          en: "Roe is the general term for fish eggs. Caviar specifically refers to salt-cured roe from sturgeon. Other types include salmon roe (ikura), flying fish roe (tobiko), and cod roe (taramasalata when prepared). Roe is prized for its unique texture and briny flavor.",
          es: "Hueva es el término general para huevos de pescado. El caviar se refiere específicamente a hueva curada en sal de esturión. Otros tipos incluyen hueva de salmón (ikura), hueva de pez volador (tobiko) y hueva de bacalao (taramasalata cuando está preparada). La hueva es apreciada por su textura única y sabor salado.",
          de: "Rogen ist der allgemeine Begriff für Fischeier. Kaviar bezieht sich speziell auf gesalzenen Rogen vom Stör. Andere Arten umfassen Lachsrogen (Ikura), Fliegenden Fischrogen (Tobiko) und Kabeljaurogen (Taramasalata bei Zubereitung). Rogen wird für seine einzigartige Textur und salzigen Geschmack geschätzt.",
          nl: "Kuit is de algemene term voor viseieren. Kaviaar verwijst specifiek naar gezouten kuit van steur. Andere soorten zijn zalmkuit (ikura), vliegende viskuit (tobiko) en kabeljauwkuit (taramasalata bij bereiding). Kuit wordt gewaardeerd om zijn unieke textuur en zilte smaak."
        }
      },
      {
        question: {
          en: "What is the purpose of scoring fish skin before cooking?",
          es: "¿Cuál es el propósito de hacer cortes en la piel del pescado antes de cocinarlo?",
          de: "Was ist der Zweck des Einschneidens von Fischhaut vor dem Kochen?",
          nl: "Wat is het doel van het inkerven van vishuid voor het koken?"
        },
        options: [
          { en: "To prevent curling and ensure even cooking", es: "Para prevenir que se enrolle y asegurar cocción uniforme", de: "Um Verbiegen zu verhindern und gleichmäßiges Garen zu gewährleisten", nl: "Om krullen te voorkomen en gelijkmatig garen te waarborgen" },
          { en: "To add decoration only", es: "Solo para agregar decoración", de: "Nur zur Dekoration", nl: "Alleen voor decoratie" },
          { en: "To remove scales", es: "Para quitar las escamas", de: "Um Schuppen zu entfernen", nl: "Om schubben te verwijderen" },
          { en: "To absorb more oil", es: "Para absorber más aceite", de: "Um mehr Öl aufzunehmen", nl: "Om meer olie te absorberen" }
        ],
        correct: 0,
        explanation: {
          en: "Scoring (making shallow cuts) in fish skin prevents it from curling during cooking due to skin contraction. The cuts allow heat to penetrate more evenly, help render fat, and create crispy skin. Score at a 45-degree angle about 1/4 inch apart without cutting into the flesh.",
          es: "Hacer cortes (cortes superficiales) en la piel del pescado previene que se enrolle durante la cocción debido a la contracción de la piel. Los cortes permiten que el calor penetre más uniformemente, ayudan a derretir la grasa y crean piel crujiente. Cortar en ángulo de 45 grados aproximadamente 1/4 de pulgada de distancia sin cortar la carne.",
          de: "Einschneiden (flache Schnitte machen) in Fischhaut verhindert, dass sie sich während des Kochens durch Hautkontraktion zusammenrollt. Die Schnitte ermöglichen es der Hitze, gleichmäßiger einzudringen, helfen Fett auszulassen und erzeugen knusprige Haut. In einem 45-Grad-Winkel etwa 6 mm auseinander schneiden, ohne ins Fleisch zu schneiden.",
          nl: "Inkerven (ondiepe sneden maken) in vishuid voorkomt krullen tijdens het koken door huidkrimping. De sneden zorgen voor gelijkmatigere hittepenetratie, helpen vet te smelten en creëren krokante huid. Kerf in een hoek van 45 graden ongeveer 6 mm uit elkaar zonder in het vlees te snijden."
        }
      },
      {
        question: {
          en: "What type of shellfish are mussels classified as?",
          es: "¿Cómo se clasifican los mejillones como tipo de marisco?",
          de: "Als welche Art von Schalentier werden Muscheln klassifiziert?",
          nl: "Als welk type schaaldier worden mosselen geclassificeerd?"
        },
        options: [
          { en: "Crustaceans", es: "Crustáceos", de: "Krebstiere", nl: "Schaaldieren" },
          { en: "Bivalves", es: "Bivalvos", de: "Muscheln", nl: "Tweekleppigen" },
          { en: "Cephalopods", es: "Cefalópodos", de: "Kopffüßer", nl: "Koppotigen" },
          { en: "Gastropods", es: "Gasterópodos", de: "Schnecken", nl: "Buikpotigen" }
        ],
        correct: 1,
        explanation: {
          en: "Mussels are bivalve mollusks, meaning they have two hinged shells. Other bivalves include clams, oysters, and scallops. They filter feed by drawing water through their shells, which is why they should only be harvested from clean waters.",
          es: "Los mejillones son moluscos bivalvos, lo que significa que tienen dos conchas con bisagras. Otros bivalvos incluyen almejas, ostras y vieiras. Se alimentan por filtración atrayendo agua a través de sus conchas, por lo que solo deben cosecharse de aguas limpias.",
          de: "Muscheln sind Muschel-Weichtiere, was bedeutet, dass sie zwei scharnierte Schalen haben. Andere Muscheln umfassen Venusmuscheln, Austern und Jakobsmuscheln. Sie ernähren sich durch Filtrieren, indem sie Wasser durch ihre Schalen ziehen, weshalb sie nur aus sauberen Gewässern geerntet werden sollten.",
          nl: "Mosselen zijn tweekleppige weekdieren, wat betekent dat ze twee scharnierbare schelpen hebben. Andere tweekleppigen zijn kokkels, oesters en sint-jakobsschelpen. Ze voeden zich door water door hun schelpen te filteren, daarom moeten ze alleen uit schoon water worden geoogst."
        }
      },
      {
        question: {
          en: "What is ceviche?",
          es: "¿Qué es el ceviche?",
          de: "Was ist Ceviche?",
          nl: "Wat is ceviche?"
        },
        options: [
          { en: "Fish cooked by marinating in citrus juice", es: "Pescado cocido marinándolo en jugo cítrico", de: "Fisch gekocht durch Marinieren in Zitronensaft", nl: "Vis gekookt door te marineren in citrusvruchtensap" },
          { en: "Fried fish with spices", es: "Pescado frito con especias", de: "Gebratener Fisch mit Gewürzen", nl: "Gebakken vis met kruiden" },
          { en: "Grilled fish on skewers", es: "Pescado a la parrilla en brochetas", de: "Gegrillter Fisch am Spieß", nl: "Gegrilde vis op spiesjes" },
          { en: "Fish soup", es: "Sopa de pescado", de: "Fischsuppe", nl: "Vissoep" }
        ],
        correct: 0,
        explanation: {
          en: "Ceviche is a Latin American dish where raw fish is 'cooked' by marinating it in citrus juice (usually lime or lemon). The acid denatures the proteins, changing the texture and appearance as if cooked by heat, while maintaining a fresh, bright flavor.",
          es: "El ceviche es un plato latinoamericano donde el pescado crudo se 'cocina' marinándolo en jugo cítrico (usualmente lima o limón). El ácido desnaturaliza las proteínas, cambiando la textura y apariencia como si se cocinara con calor, mientras mantiene un sabor fresco y brillante.",
          de: "Ceviche ist ein lateinamerikanisches Gericht, bei dem roher Fisch durch Marinieren in Zitronensaft (normalerweise Limette oder Zitrone) 'gekocht' wird. Die Säure denaturiert die Proteine und ändert Textur und Aussehen, als wäre er durch Hitze gekocht, während ein frischer, heller Geschmack erhalten bleibt.",
          nl: "Ceviche is een Latijns-Amerikaans gerecht waarbij rauwe vis wordt 'gekookt' door te marineren in citrusvruchtensap (meestal limoen of citroen). Het zuur denatureert de eiwitten, waardoor de textuur en het uiterlijk veranderen alsof het door hitte is gekookt, terwijl een frisse, heldere smaak behouden blijft."
        }
      },
      {
        question: {
          en: "What is the orange substance found in cooked lobster and crab?",
          es: "¿Qué es la sustancia anaranjada encontrada en langosta y cangrejo cocidos?",
          de: "Was ist die orange Substanz, die in gekochtem Hummer und Krabbe gefunden wird?",
          nl: "Wat is de oranje substantie die in gekookte kreeft en krab wordt aangetroffen?"
        },
        options: [
          { en: "Fat deposits", es: "Depósitos de grasa", de: "Fettablagerungen", nl: "Vetafzettingen" },
          { en: "Coral (roe)", es: "Coral (hueva)", de: "Koralle (Rogen)", nl: "Koraal (kuit)" },
          { en: "Digestive fluid", es: "Fluido digestivo", de: "Verdauungsflüssigkeit", nl: "Spijsverteringsvloeistof" },
          { en: "Blood cells", es: "Células sanguíneas", de: "Blutzellen", nl: "Bloedcellen" }
        ],
        correct: 1,
        explanation: {
          en: "The orange substance is called coral and consists of unfertilized eggs (roe). In female lobsters and crabs, this turns bright orange-red when cooked and is considered a delicacy with a rich, slightly sweet flavor. It can be eaten or used to flavor sauces.",
          es: "La sustancia anaranjada se llama coral y consiste en huevos no fertilizados (hueva). En langostas y cangrejos hembras, esto se vuelve rojo-anaranjado brillante cuando se cocina y se considera un manjar con un sabor rico y ligeramente dulce. Se puede comer o usar para dar sabor a salsas.",
          de: "Die orange Substanz wird Koralle genannt und besteht aus unbefruchteten Eiern (Rogen). Bei weiblichen Hummern und Krabben wird dies beim Kochen leuchtend orange-rot und gilt als Delikatesse mit reichem, leicht süßem Geschmack. Es kann gegessen oder zum Würzen von Saucen verwendet werden.",
          nl: "De oranje substantie wordt koraal genoemd en bestaat uit onbevruchte eieren (kuit). Bij vrouwelijke kreeften en krabben wordt dit felrood-oranje bij het koken en wordt beschouwd als een delicatesse met een rijke, licht zoete smaak. Het kan worden gegeten of gebruikt om sauzen op smaak te brengen."
        }
      },
      {
        question: {
          en: "What cooking technique involves cooking fish in parchment paper or foil?",
          es: "¿Qué técnica de cocción implica cocinar pescado en papel pergamino o papel aluminio?",
          de: "Welche Kochtechnik beinhaltet das Kochen von Fisch in Pergamentpapier oder Folie?",
          nl: "Welke kooktechniek houdt in dat vis wordt gekookt in perkamentpapier of folie?"
        },
        options: [
          { en: "En papillote", es: "En papillote", de: "En papillote", nl: "En papillote" },
          { en: "Sous vide", es: "Sous vide", de: "Sous vide", nl: "Sous vide" },
          { en: "Confit", es: "Confit", de: "Confit", nl: "Confit" },
          { en: "Braising", es: "Estofado", de: "Schmoren", nl: "Sudderen" }
        ],
        correct: 0,
        explanation: {
          en: "'En papillote' is a French cooking method where fish (or other foods) is wrapped in parchment paper or foil with aromatics and liquid, then baked. The steam created inside the packet cooks the fish gently, keeping it moist and infusing it with flavors.",
          es: "'En papillote' es un método de cocción francés donde el pescado (u otros alimentos) se envuelve en papel pergamino o papel aluminio con aromáticos y líquido, luego se hornea. El vapor creado dentro del paquete cocina el pescado suavemente, manteniéndolo húmedo e infundiéndolo con sabores.",
          de: "'En papillote' ist eine französische Kochmethode, bei der Fisch (oder andere Lebensmittel) in Pergamentpapier oder Folie mit Aromastoffen und Flüssigkeit eingewickelt und dann gebacken wird. Der im Päckchen erzeugte Dampf gart den Fisch sanft, hält ihn saftig und durchzieht ihn mit Aromen.",
          nl: "'En papillote' is een Franse kookmethode waarbij vis (of ander voedsel) wordt gewikkeld in perkamentpapier of folie met aromaten en vloeistof en vervolgens gebakken. De stoom die in het pakket ontstaat, kookt de vis zachtjes, houdt het vochtig en doordrenkt het met smaken."
        }
      },
      {
        question: {
          en: "What is imitation crab meat (surimi) primarily made from?",
          es: "¿De qué está hecho principalmente la imitación de carne de cangrejo (surimi)?",
          de: "Woraus besteht Krabbenimitat (Surimi) hauptsächlich?",
          nl: "Waar wordt imitatiekrabvlees (surimi) voornamelijk van gemaakt?"
        },
        options: [
          { en: "Processed white fish", es: "Pescado blanco procesado", de: "Verarbeiteter Weißfisch", nl: "Verwerkte witte vis" },
          { en: "Soy protein", es: "Proteína de soja", de: "Sojaprotein", nl: "Soja-eiwit" },
          { en: "Seaweed", es: "Algas marinas", de: "Seetang", nl: "Zeewier" },
          { en: "Shrimp paste", es: "Pasta de camarones", de: "Garnelenpaste", nl: "Garnalenpasta" }
        ],
        correct: 0,
        explanation: {
          en: "Surimi is made from processed white fish (often pollock or whiting) that is deboned, washed, formed into a paste, and flavored to resemble crab meat. It's commonly used in California rolls and seafood salads as a more affordable alternative to real crab.",
          es: "El surimi está hecho de pescado blanco procesado (a menudo abadejo o pescadilla) que se deshuesada, se lava, se forma en pasta y se aromatiza para parecerse a la carne de cangrejo. Se usa comúnmente en rollos California y ensaladas de mariscos como alternativa más asequible al cangrejo real.",
          de: "Surimi wird aus verarbeitetem Weißfisch (oft Seelachs oder Wittling) hergestellt, der entgrätet, gewaschen, zu einer Paste geformt und aromatisiert wird, um Krabben zu ähneln. Es wird häufig in California Rolls und Meeresfrüchtesalaten als günstigere Alternative zu echten Krabben verwendet.",
          nl: "Surimi is gemaakt van verwerkte witte vis (vaak pollak of wijting) die ontgraat, gewassen, tot een pasta gevormd en op smaak gebracht wordt om op krabvlees te lijken. Het wordt vaak gebruikt in California rolls en zeevruchten salades als een betaalbaarder alternatief voor echte krab."
        }
      },
      {
        question: {
          en: "What is the term for the technique of removing pin bones from fish fillets?",
          es: "¿Cuál es el término para la técnica de quitar las espinas de los filetes de pescado?",
          de: "Was ist der Begriff für die Technik zum Entfernen von Gräten aus Fischfilets?",
          nl: "Wat is de term voor de techniek om graten uit visfilets te verwijderen?"
        },
        options: [
          { en: "Deboning", es: "Deshuesado", de: "Entgräten", nl: "Ontgraten" },
          { en: "Filleting", es: "Filetear", de: "Filetieren", nl: "Fileren" },
          { en: "Scaling", es: "Descamar", de: "Entschuppen", nl: "Ontschuppen" },
          { en: "Gutting", es: "Destripar", de: "Ausnehmen", nl: "Ontdarmen" }
        ],
        correct: 0,
        explanation: {
          en: "Deboning (or de-boning) refers to removing bones, particularly the small pin bones that remain in fish fillets after filleting. These are removed with fish tweezers or needle-nose pliers by pulling them out in the direction they naturally lie.",
          es: "Deshuesado se refiere a quitar huesos, particularmente las pequeñas espinas que permanecen en los filetes de pescado después de filetear. Estas se quitan con pinzas para pescado o alicates de punta fina tirándolas en la dirección en que yacen naturalmente.",
          de: "Entgräten bezieht sich auf das Entfernen von Knochen, insbesondere der kleinen Gräten, die nach dem Filetieren in Fischfilets verbleiben. Diese werden mit Fischpinzetten oder Nadelzangen herausgezogen, indem sie in der Richtung gezogen werden, in der sie natürlich liegen.",
          nl: "Ontgraten verwijst naar het verwijderen van botten, met name de kleine graten die in visfilets achterblijven na het fileren. Deze worden verwijderd met vistangen of puntbeugeltangen door ze eruit te trekken in de richting waarin ze natuurlijk liggen."
        }
      },
      {
        question: {
          en: "What is the 'mudline' in a clam?",
          es: "¿Qué es la 'línea de barro' en una almeja?",
          de: "Was ist die 'Schlammlinie' in einer Muschel?",
          nl: "Wat is de 'modderlijn' in een mossel?"
        },
        options: [
          { en: "The dark digestive tract that should be removed", es: "El tracto digestivo oscuro que debe quitarse", de: "Der dunkle Verdauungstrakt, der entfernt werden sollte", nl: "Het donkere spijsverteringskanaal dat verwijderd moet worden" },
          { en: "The outer shell edge", es: "El borde exterior del caparazón", de: "Die äußere Schalenrand", nl: "De buitenste schelp rand" },
          { en: "The muscle that opens the shell", es: "El músculo que abre el caparazón", de: "Der Muskel, der die Schale öffnet", nl: "De spier die de schelp opent" },
          { en: "The water inside the shell", es: "El agua dentro del caparazón", de: "Das Wasser in der Schale", nl: "Het water in de schelp" }
        ],
        correct: 0,
        explanation: {
          en: "The mudline (or sand vein) is the dark digestive tract visible in clams and some other mollusks. It can contain sand and grit, so it's often removed before cooking for better texture and taste, though it's not harmful to eat.",
          es: "La línea de barro (o vena de arena) es el tracto digestivo oscuro visible en almejas y algunos otros moluscos. Puede contener arena y arenilla, por lo que a menudo se quita antes de cocinar para mejor textura y sabor, aunque no es dañino comerlo.",
          de: "Die Schlammlinie (oder Sandader) ist der dunkle Verdauungstrakt, der in Muscheln und einigen anderen Weichtieren sichtbar ist. Sie kann Sand und Grit enthalten, daher wird sie oft vor dem Kochen entfernt für bessere Textur und Geschmack, obwohl sie nicht schädlich zu essen ist.",
          nl: "De modderlijn (of zandader) is het donkere spijsverteringskanaal dat zichtbaar is in mosselen en sommige andere weekdieren. Het kan zand en grit bevatten, dus wordt het vaak verwijderd voor het koken voor betere textuur en smaak, hoewel het niet schadelijk is om te eten."
        }
      },
      {
        question: {
          en: "What is the primary reason for leaving shrimp shells on while grilling?",
          es: "¿Cuál es la razón principal para dejar las cáscaras de los camarones mientras se asan?",
          de: "Was ist der Hauptgrund, Garnelenschalen beim Grillen zu belassen?",
          nl: "Wat is de belangrijkste reden om garnalenschillen aan te laten tijdens het grillen?"
        },
        options: [
          { en: "Protection and flavor enhancement", es: "Protección y mejora del sabor", de: "Schutz und Geschmacksverbesserung", nl: "Bescherming en smaakverbetering" },
          { en: "Easier to eat", es: "Más fácil de comer", de: "Einfacher zu essen", nl: "Gemakkelijker te eten" },
          { en: "Adds color", es: "Agrega color", de: "Fügt Farbe hinzu", nl: "Voegt kleur toe" },
          { en: "Makes them cook slower", es: "Los hace cocinar más lento", de: "Lässt sie langsamer garen", nl: "Laat ze langzamer koken" }
        ],
        correct: 0,
        explanation: {
          en: "Leaving shells on while grilling protects the delicate shrimp meat from direct heat, preventing it from drying out or overcooking. The shells also add flavor as they char and help keep the shrimp juicy. They can be removed before eating or eaten with the shells.",
          es: "Dejar las cáscaras mientras se asa protege la delicada carne de camarón del calor directo, evitando que se seque o se cocine demasiado. Las cáscaras también agregan sabor al chamuscarse y ayudan a mantener los camarones jugosos. Se pueden quitar antes de comer o comer con las cáscaras.",
          de: "Das Belassen der Schalen beim Grillen schützt das zarte Garnelenfleisch vor direkter Hitze und verhindert Austrocknung oder Überkochen. Die Schalen fügen auch Geschmack hinzu, wenn sie verkohlen, und helfen, die Garnelen saftig zu halten. Sie können vor dem Essen entfernt oder mit den Schalen gegessen werden.",
          nl: "Het aanlaten van schillen tijdens het grillen beschermt het delicate garnalenvlees tegen directe hitte en voorkomt uitdrogen of te lang koken. De schillen voegen ook smaak toe terwijl ze verkolen en helpen de garnalen sappig te houden. Ze kunnen voor het eten worden verwijderd of met de schillen worden gegeten."
        }
      },
      {
        question: {
          en: "What is a 'court bouillon'?",
          es: "¿Qué es un 'court bouillon'?",
          de: "Was ist ein 'Court Bouillon'?",
          nl: "Wat is een 'court bouillon'?"
        },
        options: [
          { en: "A flavored liquid for poaching fish", es: "Un líquido aromatizado para escalfar pescado", de: "Eine aromatisierte Flüssigkeit zum Pochieren von Fisch", nl: "Een gearomatiseerde vloeistof voor het pocheren van vis" },
          { en: "A type of fish soup", es: "Un tipo de sopa de pescado", de: "Eine Art Fischsuppe", nl: "Een soort vissoep" },
          { en: "A sauce for grilled fish", es: "Una salsa para pescado a la parrilla", de: "Eine Sauce für gegrillten Fisch", nl: "Een saus voor gegrilde vis" },
          { en: "A marinade for raw fish", es: "Un adobo para pescado crudo", de: "Eine Marinade für rohen Fisch", nl: "Een marinade voor rauwe vis" }
        ],
        correct: 0,
        explanation: {
          en: "Court bouillon is a flavorful poaching liquid made with water, white wine or vinegar, aromatics (onions, carrots, celery), herbs, and spices. It gently infuses fish with flavor while cooking it at low temperatures, resulting in moist, tender seafood.",
          es: "El court bouillon es un líquido de escalfado sabroso hecho con agua, vino blanco o vinagre, aromáticos (cebollas, zanahorias, apio), hierbas y especias. Infunde suavemente el pescado con sabor mientras lo cocina a bajas temperaturas, resultando en mariscos húmedos y tiernos.",
          de: "Court Bouillon ist eine aromatische Pochierflüssigkeit aus Wasser, Weißwein oder Essig, Aromastoffen (Zwiebeln, Karotten, Sellerie), Kräutern und Gewürzen. Es durchzieht Fisch sanft mit Geschmack, während es ihn bei niedrigen Temperaturen gart, was zu saftigem, zartem Meeresfrüchten führt.",
          nl: "Court bouillon is een smaakvolle pocheervloeistof gemaakt met water, witte wijn of azijn, aromaten (uien, wortels, selderij), kruiden en specerijen. Het doordrenkt vis zachtjes met smaak tijdens het koken op lage temperaturen, wat resulteert in vochtige, malse zeevruchten."
        }
      },
      {
        question: {
          en: "What is the correct way to test if an oyster is alive and safe to eat?",
          es: "¿Cuál es la forma correcta de probar si una ostra está viva y es segura para comer?",
          de: "Was ist der richtige Weg, um zu testen, ob eine Auster lebendig und sicher zu essen ist?",
          nl: "Wat is de juiste manier om te testen of een oester levend en veilig is om te eten?"
        },
        options: [
          { en: "The shell should be tightly closed or close when tapped", es: "La concha debe estar bien cerrada o cerrarse al golpearla", de: "Die Schale sollte fest geschlossen sein oder sich beim Klopfen schließen", nl: "De schelp moet stevig gesloten zijn of sluiten bij tikken" },
          { en: "The shell should be wide open", es: "La concha debe estar completamente abierta", de: "Die Schale sollte weit geöffnet sein", nl: "De schelp moet wijd open zijn" },
          { en: "It should smell strongly of fish", es: "Debe oler fuertemente a pescado", de: "Sie sollte stark nach Fisch riechen", nl: "Het moet sterk naar vis ruiken" },
          { en: "The shell should be cracked", es: "La concha debe estar agrietada", de: "Die Schale sollte gesprungen sein", nl: "De schelp moet gebarsten zijn" }
        ],
        correct: 0,
        explanation: {
          en: "Live oysters keep their shells tightly closed to retain moisture. If slightly open, tap the shell - a live oyster will close it. Oysters with shells that won't close, are wide open, or have a strong fishy smell are dead and should be discarded as they can cause food poisoning.",
          es: "Las ostras vivas mantienen sus conchas bien cerradas para retener humedad. Si están ligeramente abiertas, golpea la concha - una ostra viva la cerrará. Las ostras con conchas que no se cierran, están completamente abiertas o tienen un fuerte olor a pescado están muertas y deben desecharse ya que pueden causar intoxicación alimentaria.",
          de: "Lebende Austern halten ihre Schalen fest geschlossen, um Feuchtigkeit zu bewahren. Wenn leicht geöffnet, klopfen Sie an die Schale - eine lebende Auster wird sie schließen. Austern mit Schalen, die sich nicht schließen, weit geöffnet sind oder stark nach Fisch riechen, sind tot und sollten weggeworfen werden, da sie Lebensmittelvergiftung verursachen können.",
          nl: "Levende oesters houden hun schelpen stevig gesloten om vocht vast te houden. Als ze licht open zijn, tik op de schelp - een levende oester zal deze sluiten. Oesters met schelpen die niet sluiten, wijd open zijn of sterk naar vis ruiken zijn dood en moeten worden weggegooid omdat ze voedselvergiftiging kunnen veroorzaken."
        }
      },
      {
        question: {
          en: "What is the difference between hot-smoked and cold-smoked salmon?",
          es: "¿Cuál es la diferencia entre salmón ahumado en caliente y ahumado en frío?",
          de: "Was ist der Unterschied zwischen heißgeräuchertem und kaltgeräuchertem Lachs?",
          nl: "Wat is het verschil tussen heet gerookte en koud gerookte zalm?"
        },
        options: [
          { en: "Hot-smoked is cooked and flaky, cold-smoked is silky and translucent", es: "El ahumado en caliente está cocido y desmenuzable, el ahumado en frío es sedoso y translúcido", de: "Heißgeräuchert ist gekocht und flockig, kaltgeräuchert ist seidig und durchscheinend", nl: "Heet gerookt is gekookt en vlokkerig, koud gerookt is zijdeachtig en doorschijnend" },
          { en: "Only the temperature of the smoke room", es: "Solo la temperatura de la sala de ahumado", de: "Nur die Temperatur des Räucherraums", nl: "Alleen de temperatuur van de rookkamer" },
          { en: "The type of wood used", es: "El tipo de madera utilizada", de: "Die Art des verwendeten Holzes", nl: "Het type hout dat wordt gebruikt" },
          { en: "The color of the fish", es: "El color del pescado", de: "Die Farbe des Fisches", nl: "De kleur van de vis" }
        ],
        correct: 0,
        explanation: {
          en: "Hot-smoked salmon is cooked at 120-180°F, resulting in a firm, flaky texture similar to cooked fish. Cold-smoked salmon is cured then smoked at below 90°F, remaining raw with a silky, translucent texture like lox. Both are preserved but have different textures and uses.",
          es: "El salmón ahumado en caliente se cocina a 120-180°F, resultando en una textura firme y desmenuzable similar al pescado cocido. El salmón ahumado en frío se cura y luego se ahuma a menos de 90°F, permaneciendo crudo con una textura sedosa y translúcida como el lox. Ambos están conservados pero tienen diferentes texturas y usos.",
          de: "Heißgeräucherter Lachs wird bei 50-80°C geräuchert, was zu einer festen, flockigen Textur ähnlich gekochtem Fisch führt. Kaltgeräucherter Lachs wird gepökelt und dann unter 30°C geräuchert, bleibt roh mit einer seidigen, durchscheinenden Textur wie Lox. Beide sind konserviert, haben aber unterschiedliche Texturen und Verwendungen.",
          nl: "Heet gerookte zalm wordt gekookt bij 50-80°C, wat resulteert in een stevige, vlokkerige textuur vergelijkbaar met gekookte vis. Koud gerookte zalm wordt gezouten en vervolgens gerookt onder 30°C, blijft rauw met een zijdeachtige, doorschijnende textuur zoals lox. Beide zijn geconserveerd maar hebben verschillende texturen en toepassingen."
        }
      },
      {
        question: {
          en: "What is the name of the traditional Provençal fish stew?",
          es: "¿Cuál es el nombre del guiso de pescado tradicional de Provenza?",
          de: "Wie heißt der traditionelle provenzalische Fischeintopf?",
          nl: "Wat is de naam van de traditionele Provençaalse visstoofpot?"
        },
        options: [
          { en: "Gumbo", es: "Gumbo", de: "Gumbo", nl: "Gumbo" },
          { en: "Bouillabaisse", es: "Bouillabaisse", de: "Bouillabaisse", nl: "Bouillabaisse" },
          { en: "Cioppino", es: "Cioppino", de: "Cioppino", nl: "Cioppino" },
          { en: "Chowder", es: "Chowder", de: "Chowder", nl: "Chowder" }
        ],
        correct: 1,
        explanation: {
          en: "Bouillabaisse is a traditional Provençal fish stew from Marseille, France, made with various fish, shellfish, tomatoes, saffron, fennel, and other aromatics. It's traditionally served in two courses: first the broth with bread and rouille sauce, then the fish and seafood.",
          es: "La bouillabaisse es un guiso de pescado tradicional provenzal de Marsella, Francia, hecho con varios pescados, mariscos, tomates, azafrán, hinojo y otros aromáticos. Se sirve tradicionalmente en dos platos: primero el caldo con pan y salsa rouille, luego el pescado y los mariscos.",
          de: "Bouillabaisse ist ein traditioneller provenzalischer Fischeintopf aus Marseille, Frankreich, der mit verschiedenen Fischen, Meeresfrüchten, Tomaten, Safran, Fenchel und anderen Aromastoffen zubereitet wird. Er wird traditionell in zwei Gängen serviert: zuerst die Brühe mit Brot und Rouille-Sauce, dann Fisch und Meeresfrüchte.",
          nl: "Bouillabaisse is een traditionele Provençaalse visstoofpot uit Marseille, Frankrijk, gemaakt met verschillende vissen, schaaldieren, tomaten, saffraan, venkel en andere aromaten. Het wordt traditioneel in twee gangen geserveerd: eerst de bouillon met brood en rouille saus, dan de vis en zeevruchten."
        }
      },
      {
        question: {
          en: "What is the purpose of dredging fish in flour before pan-frying?",
          es: "¿Cuál es el propósito de pasar el pescado por harina antes de freír en sartén?",
          de: "Was ist der Zweck, Fisch vor dem Braten in Mehl zu wenden?",
          nl: "Wat is het doel van vis door bloem halen voor het bakken?"
        },
        options: [
          { en: "To create a crispy coating and seal in moisture", es: "Para crear una capa crujiente y sellar la humedad", de: "Um eine knusprige Beschichtung zu erzeugen und Feuchtigkeit einzuschließen", nl: "Om een krokante coating te creëren en vocht in te sluiten" },
          { en: "To add flavor only", es: "Solo para agregar sabor", de: "Nur um Geschmack hinzuzufügen", nl: "Alleen om smaak toe te voegen" },
          { en: "To make it cook slower", es: "Para que se cocine más lento", de: "Damit es langsamer gart", nl: "Om het langzamer te laten koken" },
          { en: "To change the color", es: "Para cambiar el color", de: "Um die Farbe zu ändern", nl: "Om de kleur te veranderen" }
        ],
        correct: 0,
        explanation: {
          en: "Dredging fish in flour creates a light, crispy coating when pan-fried, helps seal in moisture and natural juices, prevents sticking to the pan, and promotes even browning. The flour can be seasoned for additional flavor. Pat fish dry before dredging for best results.",
          es: "Pasar el pescado por harina crea una capa ligera y crujiente al freír en sartén, ayuda a sellar la humedad y jugos naturales, previene que se pegue a la sartén y promueve dorado uniforme. La harina puede sazonarse para sabor adicional. Secar el pescado antes de pasar por harina para mejores resultados.",
          de: "Das Wenden von Fisch in Mehl erzeugt beim Braten eine leichte, knusprige Beschichtung, hilft Feuchtigkeit und natürliche Säfte einzuschließen, verhindert Anhaften an der Pfanne und fördert gleichmäßige Bräunung. Das Mehl kann für zusätzlichen Geschmack gewürzt werden. Fisch vor dem Wenden abtupfen für beste Ergebnisse.",
          nl: "Vis door bloem halen creëert een lichte, krokante coating bij het bakken, helpt vocht en natuurlijke sappen in te sluiten, voorkomt plakken aan de pan en bevordert gelijkmatige bruining. De bloem kan op smaak worden gebracht voor extra smaak. Dep vis droog voor het door bloem halen voor beste resultaten."
        }
      },
      {
        question: {
          en: "What are fish cheeks considered in culinary terms?",
          es: "¿Qué se consideran las mejillas de pescado en términos culinarios?",
          de: "Was gelten Fischbacken in kulinarischen Begriffen?",
          nl: "Wat worden viswangen beschouwd in culinaire termen?"
        },
        options: [
          { en: "A delicacy with tender, sweet meat", es: "Un manjar con carne tierna y dulce", de: "Eine Delikatesse mit zartem, süßem Fleisch", nl: "Een delicatesse met mals, zoet vlees" },
          { en: "Waste product", es: "Producto de desecho", de: "Abfallprodukt", nl: "Afvalproduct" },
          { en: "Only good for stock", es: "Solo bueno para caldo", de: "Nur gut für Brühe", nl: "Alleen goed voor bouillon" },
          { en: "Too tough to eat", es: "Demasiado duro para comer", de: "Zu zäh zum Essen", nl: "Te taai om te eten" }
        ],
        correct: 0,
        explanation: {
          en: "Fish cheeks are considered a delicacy, especially from larger fish like halibut, cod, and swordfish. They're prized for their tender texture and sweet, mild flavor. These small nuggets of meat are often more expensive than regular fillets due to their limited quantity per fish.",
          es: "Las mejillas de pescado se consideran un manjar, especialmente de pescados grandes como halibut, bacalao y pez espada. Son apreciadas por su textura tierna y sabor dulce y suave. Estos pequeños trozos de carne a menudo son más caros que los filetes regulares debido a su cantidad limitada por pescado.",
          de: "Fischbacken gelten als Delikatesse, besonders von größeren Fischen wie Heilbutt, Kabeljau und Schwertfisch. Sie werden für ihre zarte Textur und süßen, milden Geschmack geschätzt. Diese kleinen Fleischstücke sind oft teurer als normale Filets aufgrund ihrer begrenzten Menge pro Fisch.",
          nl: "Viswangen worden beschouwd als een delicatesse, vooral van grotere vissen zoals heilbot, kabeljauw en zwaardvis. Ze worden gewaardeerd om hun malse textuur en zoete, milde smaak. Deze kleine stukjes vlees zijn vaak duurder dan gewone filets vanwege hun beperkte hoeveelheid per vis."
        }
      },
      {
        question: {
          en: "What does 'butterflying' shrimp mean?",
          es: "¿Qué significa 'mariposa' en los camarones?",
          de: "Was bedeutet 'Schmetterlingsschnitt' bei Garnelen?",
          nl: "Wat betekent 'vlinderen' van garnalen?"
        },
        options: [
          { en: "Cutting deeply along the back and opening flat", es: "Cortar profundamente a lo largo de la espalda y abrir plano", de: "Tief entlang des Rückens schneiden und flach öffnen", nl: "Diep langs de rug snijden en plat openen" },
          { en: "Removing the tail", es: "Quitar la cola", de: "Den Schwanz entfernen", nl: "De staart verwijderen" },
          { en: "Coating with butter", es: "Cubrir con mantequilla", de: "Mit Butter überziehen", nl: "Bedekken met boter" },
          { en: "Cutting into small pieces", es: "Cortar en trozos pequeños", de: "In kleine Stücke schneiden", nl: "In kleine stukjes snijden" }
        ],
        correct: 0,
        explanation: {
          en: "Butterflying shrimp involves making a deep cut along the back (while deveining) and opening the shrimp like a book so it lies flat. This increases surface area for better flavor absorption, promotes even cooking, and creates an attractive presentation. The shrimp will curl into a decorative shape when cooked.",
          es: "Mariposa en camarones implica hacer un corte profundo a lo largo de la espalda (mientras se desveina) y abrir el camarón como un libro para que quede plano. Esto aumenta el área de superficie para mejor absorción de sabor, promueve cocción uniforme y crea una presentación atractiva. El camarón se curvará en una forma decorativa cuando se cocine.",
          de: "Schmetterlingsschnitt bei Garnelen bedeutet, einen tiefen Schnitt entlang des Rückens zu machen (beim Entdarmen) und die Garnele wie ein Buch zu öffnen, damit sie flach liegt. Dies erhöht die Oberfläche für bessere Geschmacksaufnahme, fördert gleichmäßiges Garen und schafft eine attraktive Präsentation. Die Garnele wird sich beim Kochen in eine dekorative Form rollen.",
          nl: "Vlinderen van garnalen houdt in dat er een diepe snede langs de rug wordt gemaakt (tijdens het ontdarmen) en de garnaal als een boek wordt geopend zodat het plat ligt. Dit vergroot het oppervlak voor betere smaakopname, bevordert gelijkmatig garen en creëert een aantrekkelijke presentatie. De garnaal zal zich in een decoratieve vorm krullen bij het koken."
        }
      },
      {
        question: {
          en: "What is the main characteristic of Dover sole that makes it prized?",
          es: "¿Cuál es la característica principal del lenguado Dover que lo hace apreciado?",
          de: "Was ist das Hauptmerkmal der Seezunge, das sie wertvoll macht?",
          nl: "Wat is de belangrijkste eigenschap van Dovertong die het waardevol maakt?"
        },
        options: [
          { en: "Delicate, sweet flavor and fine texture", es: "Sabor delicado y dulce y textura fina", de: "Zarter, süßer Geschmack und feine Textur", nl: "Delicate, zoete smaak en fijne textuur" },
          { en: "Very large size", es: "Tamaño muy grande", de: "Sehr große Größe", nl: "Zeer grote maat" },
          { en: "Bright coloring", es: "Coloración brillante", de: "Helle Färbung", nl: "Heldere kleuring" },
          { en: "Long shelf life", es: "Larga vida útil", de: "Lange Haltbarkeit", nl: "Lange houdbaarheid" }
        ],
        correct: 0,
        explanation: {
          en: "Dover sole (European sole) is prized for its exceptionally delicate, sweet flavor and fine, firm texture. It's considered one of the finest flatfish, often prepared simply (meunière style) to showcase its quality. True Dover sole is wild-caught in European waters and commands premium prices.",
          es: "El lenguado Dover (lenguado europeo) es apreciado por su sabor excepcionalmente delicado y dulce y textura fina y firme. Se considera uno de los mejores peces planos, a menudo preparado simplemente (estilo meunière) para mostrar su calidad. El verdadero lenguado Dover se captura salvaje en aguas europeas y alcanza precios premium.",
          de: "Seezunge (Europäische Seezunge) wird für ihren außergewöhnlich zarten, süßen Geschmack und feine, feste Textur geschätzt. Sie gilt als einer der feinsten Plattfische, oft einfach zubereitet (Meunière-Art), um ihre Qualität zu präsentieren. Echte Seezunge wird wild in europäischen Gewässern gefangen und erzielt Premiumpreise.",
          nl: "Dovertong (Europese tong) wordt gewaardeerd om zijn uitzonderlijk delicate, zoete smaak en fijne, stevige textuur. Het wordt beschouwd als een van de beste platvis, vaak eenvoudig bereid (meunière-stijl) om de kwaliteit te tonen. Echte Dovertong wordt wild gevangen in Europese wateren en haalt premium prijzen."
        }
      },
      {
        question: {
          en: "What is the black substance sometimes found inside lobster bodies?",
          es: "¿Qué es la sustancia negra que a veces se encuentra dentro del cuerpo de las langostas?",
          de: "Was ist die schwarze Substanz, die manchmal in Hummerkörpern gefunden wird?",
          nl: "Wat is de zwarte substantie die soms in kreeftlichamen wordt aangetroffen?"
        },
        options: [
          { en: "Uncooked roe (eggs)", es: "Hueva cruda (huevos)", de: "Ungekochter Rogen (Eier)", nl: "Ongekookte kuit (eieren)" },
          { en: "Spoiled meat", es: "Carne estropeada", de: "Verdorbenes Fleisch", nl: "Bedorven vlees" },
          { en: "Poison", es: "Veneno", de: "Gift", nl: "Gif" },
          { en: "Shell fragments", es: "Fragmentos de caparazón", de: "Schalenfragmente", nl: "Schelpfragmenten" }
        ],
        correct: 0,
        explanation: {
          en: "The black substance is uncooked roe (eggs) from female lobsters. When cooked, it turns bright red-orange (coral). The black roe is safe to eat and considered a delicacy by some, though it can be removed if preferred. It has a rich, briny flavor.",
          es: "La sustancia negra es hueva cruda (huevos) de langostas hembras. Cuando se cocina, se vuelve rojo-anaranjado brillante (coral). La hueva negra es segura para comer y considerada un manjar por algunos, aunque puede quitarse si se prefiere. Tiene un sabor rico y salado.",
          de: "Die schwarze Substanz ist ungekochter Rogen (Eier) von weiblichen Hummern. Beim Kochen wird er leuchtend rot-orange (Koralle). Der schwarze Rogen ist sicher zu essen und wird von einigen als Delikatesse betrachtet, kann aber bei Bedarf entfernt werden. Er hat einen reichen, salzigen Geschmack.",
          nl: "De zwarte substantie is ongekookte kuit (eieren) van vrouwelijke kreeften. Bij het koken wordt het felrood-oranje (koraal). De zwarte kuit is veilig om te eten en wordt door sommigen als een delicatesse beschouwd, hoewel het kan worden verwijderd indien gewenst. Het heeft een rijke, zilte smaak."
        }
      },
      {
        question: {
          en: "What is the best indicator that frozen fish has been improperly stored?",
          es: "¿Cuál es el mejor indicador de que el pescado congelado ha sido almacenado inadecuadamente?",
          de: "Was ist der beste Indikator dafür, dass gefrorener Fisch unsachgemäß gelagert wurde?",
          nl: "Wat is de beste indicator dat bevroren vis verkeerd is opgeslagen?"
        },
        options: [
          { en: "Freezer burn and ice crystals", es: "Quemadura por congelación y cristales de hielo", de: "Gefrierbrand und Eiskristalle", nl: "Vriesbrand en ijskristallen" },
          { en: "White color", es: "Color blanco", de: "Weiße Farbe", nl: "Witte kleur" },
          { en: "Firm texture", es: "Textura firme", de: "Feste Textur", nl: "Stevige textuur" },
          { en: "No odor", es: "Sin olor", de: "Kein Geruch", nl: "Geen geur" }
        ],
        correct: 0,
        explanation: {
          en: "Freezer burn (white, dried-out patches) and excessive ice crystals indicate temperature fluctuations or improper packaging, causing moisture loss and oxidation. This degrades quality, texture, and flavor. Properly frozen fish should be solidly frozen with minimal ice crystals and tightly wrapped to prevent air exposure.",
          es: "La quemadura por congelación (parches blancos y secos) y cristales de hielo excesivos indican fluctuaciones de temperatura o empaque inadecuado, causando pérdida de humedad y oxidación. Esto degrada calidad, textura y sabor. El pescado congelado apropiadamente debe estar sólidamente congelado con cristales de hielo mínimos y bien envuelto para prevenir exposición al aire.",
          de: "Gefrierbrand (weiße, ausgetrocknete Flecken) und übermäßige Eiskristalle deuten auf Temperaturschwankungen oder unsachgemäße Verpackung hin, was Feuchtigkeitsverlust und Oxidation verursacht. Dies beeinträchtigt Qualität, Textur und Geschmack. Richtig gefrorener Fisch sollte fest gefroren sein mit minimalen Eiskristallen und fest verpackt, um Luftkontakt zu verhindern.",
          nl: "Vriesbrand (witte, uitgedroogde plekken) en overmatige ijskristallen wijzen op temperatuurschommelingen of onjuiste verpakking, wat vochtverlies en oxidatie veroorzaakt. Dit vermindert kwaliteit, textuur en smaak. Correct bevroren vis moet stevig bevroren zijn met minimale ijskristallen en stevig verpakt om blootstelling aan lucht te voorkomen."
        }
      },
      {
        question: {
          en: "What is the purpose of letting fish rest after cooking?",
          es: "¿Cuál es el propósito de dejar reposar el pescado después de cocinarlo?",
          de: "Was ist der Zweck, Fisch nach dem Kochen ruhen zu lassen?",
          nl: "Wat is het doel van vis te laten rusten na het koken?"
        },
        options: [
          { en: "To allow juices to redistribute evenly", es: "Para permitir que los jugos se redistribuyan uniformemente", de: "Um Säfte gleichmäßig umzuverteilen", nl: "Om sappen gelijkmatig te laten herverdelen" },
          { en: "To cool it down completely", es: "Para enfriarlo completamente", de: "Um es vollständig abzukühlen", nl: "Om het volledig af te koelen" },
          { en: "To make it easier to cut", es: "Para que sea más fácil de cortar", de: "Um es leichter zu schneiden", nl: "Om het gemakkelijker te snijden" },
          { en: "Fish should never rest after cooking", es: "El pescado nunca debe reposar después de cocinar", de: "Fisch sollte nach dem Kochen nie ruhen", nl: "Vis moet nooit rusten na het koken" }
        ],
        correct: 0,
        explanation: {
          en: "Like meat, fish benefits from a brief rest (2-3 minutes) after cooking to allow internal juices to redistribute throughout the flesh, resulting in moister, more evenly textured fish. However, the rest period is much shorter than for meat due to fish's delicate structure.",
          es: "Como la carne, el pescado se beneficia de un breve reposo (2-3 minutos) después de cocinar para permitir que los jugos internos se redistribuyan por toda la carne, resultando en pescado más húmedo y de textura más uniforme. Sin embargo, el período de reposo es mucho más corto que para la carne debido a la estructura delicada del pescado.",
          de: "Wie Fleisch profitiert Fisch von einer kurzen Ruhe (2-3 Minuten) nach dem Kochen, damit sich interne Säfte im ganzen Fleisch verteilen können, was zu saftigerem, gleichmäßiger strukturiertem Fisch führt. Die Ruhezeit ist jedoch viel kürzer als bei Fleisch aufgrund der zarten Struktur des Fisches.",
          nl: "Net als vlees profiteert vis van een korte rust (2-3 minuten) na het koken om interne sappen zich door het vlees te laten herverdelen, wat resulteert in vochtiger, gelijkmatiger gestructureerde vis. De rustperiode is echter veel korter dan voor vlees vanwege de delicate structuur van vis."
        }
      },
      {
        question: {
          en: "What is the culinary difference between calamari and squid?",
          es: "¿Cuál es la diferencia culinaria entre calamares y calamares?",
          de: "Was ist der kulinarische Unterschied zwischen Calamari und Tintenfisch?",
          nl: "Wat is het culinaire verschil tussen calamares en inktvis?"
        },
        options: [
          { en: "They are the same thing, calamari is the Italian name", es: "Son lo mismo, calamari es el nombre italiano", de: "Sie sind dasselbe, Calamari ist der italienische Name", nl: "Het is hetzelfde, calamares is de Italiaanse naam" },
          { en: "Calamari is larger", es: "El calamari es más grande", de: "Calamari ist größer", nl: "Calamares is groter" },
          { en: "They come from different oceans", es: "Vienen de diferentes océanos", de: "Sie kommen aus verschiedenen Ozeanen", nl: "Ze komen uit verschillende oceanen" },
          { en: "Calamari is cooked, squid is raw", es: "El calamari está cocido, el calamar está crudo", de: "Calamari ist gekocht, Tintenfisch ist roh", nl: "Calamares is gekookt, inktvis is rauw" }
        ],
        correct: 0,
        explanation: {
          en: "Calamari and squid refer to the same creature - 'calamari' is simply the Italian word for squid. In culinary contexts, 'calamari' often refers to prepared squid dishes (especially fried rings), while 'squid' may refer to the whole animal or various preparations.",
          es: "Calamari y calamar se refieren a la misma criatura - 'calamari' es simplemente la palabra italiana para calamar. En contextos culinarios, 'calamari' a menudo se refiere a platos de calamares preparados (especialmente anillos fritos), mientras que 'calamar' puede referirse al animal entero o varias preparaciones.",
          de: "Calamari und Tintenfisch beziehen sich auf dasselbe Tier - 'Calamari' ist einfach das italienische Wort für Tintenfisch. In kulinarischen Kontexten bezieht sich 'Calamari' oft auf zubereitete Tintenfischgerichte (besonders frittierte Ringe), während 'Tintenfisch' sich auf das ganze Tier oder verschiedene Zubereitungen beziehen kann.",
          nl: "Calamares en inktvis verwijzen naar hetzelfde dier - 'calamares' is gewoon het Italiaanse woord voor inktvis. In culinaire contexten verwijst 'calamares' vaak naar bereide inktvissen (vooral gefrituurde ringen), terwijl 'inktvis' kan verwijzen naar het hele dier of verschillende bereidingen."
        }
      },
      {
        question: {
          en: "What is the recommended method for thawing frozen fish safely?",
          es: "¿Cuál es el método recomendado para descongelar pescado congelado de manera segura?",
          de: "Was ist die empfohlene Methode zum sicheren Auftauen von gefrorenem Fisch?",
          nl: "Wat is de aanbevolen methode voor het veilig ontdooien van bevroren vis?"
        },
        options: [
          { en: "In the refrigerator overnight", es: "En el refrigerador durante la noche", de: "Über Nacht im Kühlschrank", nl: "In de koelkast gedurende de nacht" },
          { en: "On the kitchen counter at room temperature", es: "En la encimera de la cocina a temperatura ambiente", de: "Auf der Küchentheke bei Raumtemperatur", nl: "Op het aanrecht bij kamertemperatuur" },
          { en: "In hot water", es: "En agua caliente", de: "In heißem Wasser", nl: "In heet water" },
          { en: "In direct sunlight", es: "Bajo luz solar directa", de: "In direktem Sonnenlicht", nl: "In direct zonlicht" }
        ],
        correct: 0,
        explanation: {
          en: "The safest method is thawing fish in the refrigerator overnight, which maintains a safe temperature throughout. For faster thawing, seal fish in plastic and submerge in cold water, changing water every 30 minutes. Never thaw at room temperature, as this promotes bacterial growth in the outer layers.",
          es: "El método más seguro es descongelar el pescado en el refrigerador durante la noche, lo que mantiene una temperatura segura en todo momento. Para descongelar más rápido, selle el pescado en plástico y sumérjalo en agua fría, cambiando el agua cada 30 minutos. Nunca descongele a temperatura ambiente, ya que esto promueve el crecimiento bacteriano en las capas exteriores.",
          de: "Die sicherste Methode ist das Auftauen von Fisch über Nacht im Kühlschrank, wodurch eine sichere Temperatur durchgehend aufrechterhalten wird. Für schnelleres Auftauen Fisch in Plastik versiegeln und in kaltes Wasser tauchen, Wasser alle 30 Minuten wechseln. Niemals bei Raumtemperatur auftauen, da dies Bakterienwachstum in den äußeren Schichten fördert.",
          nl: "De veiligste methode is vis ontdooien in de koelkast gedurende de nacht, wat een veilige temperatuur handhaaft. Voor sneller ontdooien, verzegel vis in plastic en dompel onder in koud water, ververs water elke 30 minuten. Ontdooi nooit bij kamertemperatuur, omdat dit bacteriegroei in de buitenste lagen bevordert."
        }
      },
      {
        question: {
          en: "What type of fish is traditionally used in fish and chips?",
          es: "¿Qué tipo de pescado se usa tradicionalmente en fish and chips?",
          de: "Welche Fischart wird traditionell für Fish and Chips verwendet?",
          nl: "Welk type vis wordt traditioneel gebruikt in fish and chips?"
        },
        options: [
          { en: "Cod or haddock", es: "Bacalao o eglefino", de: "Kabeljau oder Schellfisch", nl: "Kabeljauw of schelvis" },
          { en: "Salmon", es: "Salmón", de: "Lachs", nl: "Zalm" },
          { en: "Tuna", es: "Atún", de: "Thunfisch", nl: "Tonijn" },
          { en: "Mackerel", es: "Caballa", de: "Makrele", nl: "Makreel" }
        ],
        correct: 0,
        explanation: {
          en: "Traditional British fish and chips uses cod or haddock - white fish with mild flavor and flaky texture that holds up well to battering and deep frying. The batter is typically made with flour, beer, and seasonings, creating a crispy coating that contrasts with the tender fish inside.",
          es: "El fish and chips británico tradicional usa bacalao o eglefino - pescado blanco con sabor suave y textura desmenuzable que resiste bien el rebozado y la fritura profunda. El rebozado típicamente se hace con harina, cerveza y condimentos, creando una capa crujiente que contrasta con el pescado tierno en el interior.",
          de: "Traditionelle britische Fish and Chips verwenden Kabeljau oder Schellfisch - Weißfisch mit mildem Geschmack und flockiger Textur, der das Panieren und Frittieren gut übersteht. Der Teig wird typischerweise aus Mehl, Bier und Gewürzen hergestellt und schafft eine knusprige Beschichtung, die mit dem zarten Fisch im Inneren kontrastiert.",
          nl: "Traditionele Britse fish and chips gebruikt kabeljauw of schelvis - witte vis met milde smaak en vlokkerige textuur die goed bestand is tegen beslag en frituren. Het beslag wordt typisch gemaakt met bloem, bier en kruiden, waardoor een krokante coating ontstaat die contrasteert met de malse vis binnenin."
        }
      },
      {
        question: {
          en: "What causes the pink color in salmon flesh?",
          es: "¿Qué causa el color rosa en la carne de salmón?",
          de: "Was verursacht die rosa Farbe im Lachsfleisch?",
          nl: "Wat veroorzaakt de roze kleur in zalmvlees?"
        },
        options: [
          { en: "Astaxanthin from their diet", es: "Astaxantina de su dieta", de: "Astaxanthin aus ihrer Nahrung", nl: "Astaxanthine uit hun dieet" },
          { en: "Blood vessels", es: "Vasos sanguíneos", de: "Blutgefäße", nl: "Bloedvaten" },
          { en: "Natural pigment in all fish", es: "Pigmento natural en todos los peces", de: "Natürliches Pigment in allen Fischen", nl: "Natuurlijk pigment in alle vissen" },
          { en: "Added food coloring", es: "Colorante alimentario añadido", de: "Zugesetzte Lebensmittelfarbe", nl: "Toegevoegde voedselkleuring" }
        ],
        correct: 0,
        explanation: {
          en: "The pink-orange color in salmon comes from astaxanthin, a carotenoid pigment found in krill, shrimp, and other crustaceans that salmon eat. Wild salmon get this from their natural diet, while farmed salmon are often fed astaxanthin supplements to achieve the characteristic color consumers expect.",
          es: "El color rosa-naranja en el salmón proviene de la astaxantina, un pigmento carotenoide encontrado en el krill, camarones y otros crustáceos que el salmón come. El salmón salvaje obtiene esto de su dieta natural, mientras que el salmón de granja a menudo recibe suplementos de astaxantina para lograr el color característico que esperan los consumidores.",
          de: "Die rosa-orange Farbe im Lachs stammt von Astaxanthin, einem Carotinoid-Pigment, das in Krill, Garnelen und anderen Krebstieren vorkommt, die Lachs frisst. Wildlachs erhält dies aus seiner natürlichen Ernährung, während Zuchtlachs oft Astaxanthin-Ergänzungen erhält, um die charakteristische Farbe zu erreichen, die Verbraucher erwarten.",
          nl: "De roze-oranje kleur in zalm komt van astaxanthine, een carotenoïde pigment dat voorkomt in krill, garnalen en andere schaaldieren die zalm eet. Wilde zalm krijgt dit uit hun natuurlijke dieet, terwijl gekweekte zalm vaak astaxanthine supplementen krijgt om de karakteristieke kleur te bereiken die consumenten verwachten."
        }
      },
      {
        question: {
          en: "What is 'gravlax'?",
          es: "¿Qué es 'gravlax'?",
          de: "Was ist 'Gravlax'?",
          nl: "Wat is 'gravlax'?"
        },
        options: [
          { en: "Nordic cured salmon with salt, sugar, and dill", es: "Salmón curado nórdico con sal, azúcar y eneldo", de: "Nordisch gepökelter Lachs mit Salz, Zucker und Dill", nl: "Noordse gezouten zalm met zout, suiker en dille" },
          { en: "Grilled salmon", es: "Salmón a la parrilla", de: "Gegrillter Lachs", nl: "Gegrilde zalm" },
          { en: "Salmon soup", es: "Sopa de salmón", de: "Lachssuppe", nl: "Zalmsoep" },
          { en: "Smoked salmon", es: "Salmón ahumado", de: "Geräucherter Lachs", nl: "Gerookte zalm" }
        ],
        correct: 0,
        explanation: {
          en: "Gravlax is a Nordic dish of raw salmon cured with salt, sugar, and fresh dill. The name means 'buried salmon' referring to the traditional method of burying the fish to ferment. Modern gravlax is pressed and refrigerated for 2-3 days, resulting in silky, flavorful salmon served thinly sliced.",
          es: "Gravlax es un plato nórdico de salmón crudo curado con sal, azúcar y eneldo fresco. El nombre significa 'salmón enterrado' refiriéndose al método tradicional de enterrar el pescado para fermentar. El gravlax moderno se prensa y refrigera durante 2-3 días, resultando en salmón sedoso y sabroso servido finamente rebanado.",
          de: "Gravlax ist ein nordisches Gericht aus rohem Lachs, der mit Salz, Zucker und frischem Dill gepökelt wird. Der Name bedeutet 'begrabener Lachs' und bezieht sich auf die traditionelle Methode, den Fisch zum Fermentieren zu vergraben. Moderner Gravlax wird gepresst und 2-3 Tage gekühlt, was zu seidigem, aromatischem Lachs führt, der dünn geschnitten serviert wird.",
          nl: "Gravlax is een Noordse schotel van rauwe zalm gezouten met zout, suiker en verse dille. De naam betekent 'begraven zalm' verwijzend naar de traditionele methode van het begraven van de vis om te fermenteren. Moderne gravlax wordt geperst en gekoeld gedurende 2-3 dagen, wat resulteert in zijdeachtige, smaakvolle zalm die dun gesneden wordt geserveerd."
        }
      },
      {
        question: {
          en: "What is the white substance that appears on cooked salmon?",
          es: "¿Qué es la sustancia blanca que aparece en el salmón cocido?",
          de: "Was ist die weiße Substanz, die auf gekochtem Lachs erscheint?",
          nl: "Wat is de witte substantie die verschijnt op gekookte zalm?"
        },
        options: [
          { en: "Albumin, a harmless protein", es: "Albúmina, una proteína inofensiva", de: "Albumin, ein harmloses Protein", nl: "Albumine, een onschadelijk eiwit" },
          { en: "Fat deposits", es: "Depósitos de grasa", de: "Fettablagerungen", nl: "Vetafzettingen" },
          { en: "Sign of spoilage", es: "Signo de deterioro", de: "Zeichen von Verderb", nl: "Teken van bederf" },
          { en: "Salt crystals", es: "Cristales de sal", de: "Salzkristalle", nl: "Zoutkristallen" }
        ],
        correct: 0,
        explanation: {
          en: "The white substance is albumin, a protein that's naturally present in salmon. When heated, it coagulates and is pushed out of the muscle fibers. It's completely harmless and edible. To minimize albumin, cook salmon at lower temperatures and avoid overcooking. Brining can also help.",
          es: "La sustancia blanca es albúmina, una proteína que está naturalmente presente en el salmón. Cuando se calienta, se coagula y es expulsada de las fibras musculares. Es completamente inofensiva y comestible. Para minimizar la albúmina, cocine el salmón a temperaturas más bajas y evite cocinar demasiado. El salmuera también puede ayudar.",
          de: "Die weiße Substanz ist Albumin, ein Protein, das natürlich im Lachs vorhanden ist. Bei Erhitzung gerinnt es und wird aus den Muskelfasern gedrückt. Es ist völlig harmlos und essbar. Um Albumin zu minimieren, kochen Sie Lachs bei niedrigeren Temperaturen und vermeiden Sie Überkochen. Pökeln kann auch helfen.",
          nl: "De witte substantie is albumine, een eiwit dat van nature aanwezig is in zalm. Bij verhitting stolt het en wordt uit de spiervezels geduwd. Het is volledig onschadelijk en eetbaar. Om albumine te minimaliseren, kook zalm op lagere temperaturen en vermijd te lang koken. Pekelen kan ook helpen."
        }
      },
      {
        question: {
          en: "What distinguishes langoustines from regular lobsters?",
          es: "¿Qué distingue a las langostinas de las langostas regulares?",
          de: "Was unterscheidet Kaisergranat von normalen Hummern?",
          nl: "Wat onderscheidt langoustines van gewone kreeften?"
        },
        options: [
          { en: "Smaller size and more delicate claws", es: "Tamaño más pequeño y pinzas más delicadas", de: "Kleinere Größe und zartere Scheren", nl: "Kleinere maat en delicatere scharen" },
          { en: "Different color only", es: "Solo color diferente", de: "Nur unterschiedliche Farbe", nl: "Alleen verschillende kleur" },
          { en: "They are freshwater only", es: "Son solo de agua dulce", de: "Nur Süßwasser", nl: "Alleen zoetwater" },
          { en: "No difference", es: "Ninguna diferencia", de: "Kein Unterschied", nl: "Geen verschil" }
        ],
        correct: 0,
        explanation: {
          en: "Langoustines (also called Dublin Bay prawns or scampi) are smaller than lobsters, typically 4-10 inches long, with long, slender claws and orange-pink shells. They have sweeter, more delicate meat than lobster. Despite the name, they're more closely related to lobsters than prawns and are prized in European cuisine.",
          es: "Las langostinas (también llamadas cigalas o scampi) son más pequeñas que las langostas, típicamente de 4-10 pulgadas de largo, con pinzas largas y delgadas y conchas naranja-rosadas. Tienen carne más dulce y delicada que la langosta. A pesar del nombre, están más relacionadas con las langostas que con los langostinos y son apreciadas en la cocina europea.",
          de: "Kaisergranat (auch Dublin Bay Prawns oder Scampi genannt) sind kleiner als Hummer, typischerweise 10-25 cm lang, mit langen, schlanken Scheren und orange-rosa Schalen. Sie haben süßeres, zarteres Fleisch als Hummer. Trotz des Namens sind sie enger mit Hummern als mit Garnelen verwandt und werden in der europäischen Küche geschätzt.",
          nl: "Langoustines (ook wel Noorse kreeft of scampi genoemd) zijn kleiner dan kreeften, typisch 10-25 cm lang, met lange, slanke scharen en oranje-roze schelpen. Ze hebben zoeter, delicater vlees dan kreeft. Ondanks de naam zijn ze nauwer verwant aan kreeften dan aan garnalen en worden gewaardeerd in de Europese keuken."
        }
      },
      {
        question: {
          en: "What is the proper technique for opening an oyster?",
          es: "¿Cuál es la técnica adecuada para abrir una ostra?",
          de: "Was ist die richtige Technik zum Öffnen einer Auster?",
          nl: "Wat is de juiste techniek voor het openen van een oester?"
        },
        options: [
          { en: "Insert knife at hinge, twist, then slide along top shell", es: "Insertar cuchillo en la bisagra, girar, luego deslizar por la concha superior", de: "Messer am Scharnier einführen, drehen, dann entlang der oberen Schale gleiten", nl: "Steek mes in het scharnier, draai en schuif langs de bovenste schelp" },
          { en: "Smash with a hammer", es: "Golpear con un martillo", de: "Mit einem Hammer zertrümmern", nl: "Kapot slaan met een hamer" },
          { en: "Boil until it opens", es: "Hervir hasta que se abra", de: "Kochen bis es sich öffnet", nl: "Koken tot het opengaat" },
          { en: "Pry from the front", es: "Hacer palanca desde el frente", de: "Von vorne aufhebeln", nl: "Wrikken vanaf de voorkant" }
        ],
        correct: 0,
        explanation: {
          en: "To shuck an oyster safely: hold it flat-side up in a towel, insert an oyster knife at the hinge (narrow end), twist to pop the hinge, slide the knife along the inside of the top shell to cut the adductor muscle, remove the top shell, then slide the knife under the oyster to detach it from the bottom shell. Always use an oyster knife and protect your hand with a towel.",
          es: "Para abrir una ostra de forma segura: sosténgala con el lado plano hacia arriba en una toalla, inserte un cuchillo para ostras en la bisagra (extremo estrecho), gire para abrir la bisagra, deslice el cuchillo a lo largo del interior de la concha superior para cortar el músculo aductor, retire la concha superior, luego deslice el cuchillo debajo de la ostra para separarla de la concha inferior. Siempre use un cuchillo para ostras y proteja su mano con una toalla.",
          de: "Um eine Auster sicher zu öffnen: halten Sie sie mit der flachen Seite nach oben in einem Handtuch, führen Sie ein Austernmesser am Scharnier (schmales Ende) ein, drehen Sie, um das Scharnier zu knacken, gleiten Sie mit dem Messer entlang der Innenseite der oberen Schale, um den Schließmuskel zu durchtrennen, entfernen Sie die obere Schale, dann gleiten Sie mit dem Messer unter die Auster, um sie von der unteren Schale zu lösen. Verwenden Sie immer ein Austernmesser und schützen Sie Ihre Hand mit einem Handtuch.",
          nl: "Om een oester veilig te openen: houd het met de platte kant naar boven in een handdoek, steek een oestermes in het scharnier (smalle kant), draai om het scharnier te breken, schuif het mes langs de binnenkant van de bovenste schelp om de sluitspier door te snijden, verwijder de bovenste schelp, schuif dan het mes onder de oester om het los te maken van de onderste schelp. Gebruik altijd een oestermes en bescherm uw hand met een handdoek."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  } else if (typeof window !== 'undefined') {
    window.level4 = level4;
  }
})();
