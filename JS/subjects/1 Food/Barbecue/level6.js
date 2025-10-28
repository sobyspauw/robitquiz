// Barbecue Quiz - Level 6: Regional BBQ Styles & International Techniques
(function() {
  const level6 = {
    name: {
      en: "Barbecue Level 6",
      es: "Barbacoa Nivel 6",
      de: "Grillen Stufe 6",
      nl: "Barbecue Level 6"
    },
    questions: [
      {
        question: {
          en: "What distinguishes Texas Central BBQ style from other Texas regions?",
          es: "¿Qué distingue el estilo BBQ de Texas Central de otras regiones de Texas?",
          de: "Was unterscheidet den zentraltexanischen BBQ-Stil von anderen texanischen Regionen?",
          nl: "Wat onderscheidt de Texas Central BBQ-stijl van andere Texaanse regio's?"
        },
        options: [
          { en: "Brisket focus, post oak wood, no sauce", es: "Enfoque en brisket, madera de roble post, sin salsa", de: "Brisket-Fokus, Post Oak-Holz, keine Sauce", nl: "Brisket focus, post oak hout, geen saus" },
          { en: "Pork ribs with thick tomato sauce", es: "Costillas de cerdo con salsa de tomate espesa", de: "Schweinerippchen mit dicker Tomatensauce", nl: "Varkensribbetjes met dikke tomatensaus" },
          { en: "Whole hog with vinegar sauce", es: "Cerdo entero con salsa de vinagre", de: "Ganzes Schwein mit Essigsauce", nl: "Heel varken met azijnsaus" },
          { en: "Chicken with mustard-based sauce", es: "Pollo con salsa a base de mostaza", de: "Hähnchen mit senfbasierter Sauce", nl: "Kip met mosterd-gebaseerde saus" }
        ],
        correct: 0,
        explanation: {
          en: "Texas Central BBQ, centered around Lockhart and Austin, focuses on beef brisket smoked over post oak wood with minimal seasoning (salt and pepper) and traditionally no sauce, letting the meat speak for itself.",
          es: "El BBQ de Texas Central, centrado en Lockhart y Austin, se enfoca en brisket de res ahumado sobre madera de roble post con condimentos mínimos (sal y pimienta) y tradicionalmente sin salsa, dejando que la carne hable por sí misma.",
          de: "Texas Central BBQ, zentriert um Lockhart und Austin, konzentriert sich auf Rinderbrust, geräuchert über Post Oak-Holz mit minimaler Würzung (Salz und Pfeffer) und traditionell ohne Sauce, wobei das Fleisch für sich selbst spricht.",
          nl: "Texas Central BBQ, gecentreerd rond Lockhart en Austin, richt zich op runderbrisket gerookt boven post oak hout met minimale kruiding (zout en peper) en traditioneel geen saus, waarbij het vlees voor zich spreekt."
        }
      },
      {
        question: {
          en: "What is the traditional Korean BBQ cut called 'galbi'?",
          es: "¿Cuál es el corte tradicional de BBQ coreano llamado 'galbi'?",
          de: "Was ist der traditionelle koreanische BBQ-Schnitt namens 'galbi'?",
          nl: "Wat is het traditionele Koreaanse BBQ-stuk genaamd 'galbi'?"
        },
        options: [
          { en: "Short ribs, often marinated in soy-based sauce", es: "Costillas cortas, a menudo marinadas en salsa a base de soja", de: "Kurze Rippen, oft in sojasaucenbasierter Marinade", nl: "Korte ribben, vaak gemarineerd in sojasaus-gebaseerde saus" },
          { en: "Pork belly strips", es: "Tiras de panceta de cerdo", de: "Schweinebauch-Streifen", nl: "Varkensbuik strips" },
          { en: "Beef brisket", es: "Pechuga de res", de: "Rinderbrust", nl: "Runderbrisket" },
          { en: "Chicken thighs", es: "Muslos de pollo", de: "Hähnchenschenkel", nl: "Kippendijen" }
        ],
        correct: 0,
        explanation: {
          en: "Galbi (or kalbi) are Korean short ribs, typically marinated in a sweet-savory mixture of soy sauce, sugar, garlic, sesame oil, and pear juice, then grilled over high heat. The marinade tenderizes the meat and creates delicious caramelization.",
          es: "Galbi (o kalbi) son costillas cortas coreanas, típicamente marinadas en una mezcla dulce-salada de salsa de soja, azúcar, ajo, aceite de sésamo y jugo de pera, luego asadas a fuego alto. La marinada ablanda la carne y crea una deliciosa caramelización.",
          de: "Galbi (oder Kalbi) sind koreanische kurze Rippen, typischerweise mariniert in einer süß-herzhaften Mischung aus Sojasauce, Zucker, Knoblauch, Sesamöl und Birnensaft, dann über hoher Hitze gegrillt. Die Marinade macht das Fleisch zart und schafft köstliche Karamellisierung.",
          nl: "Galbi (of kalbi) zijn Koreaanse korte ribben, meestal gemarineerd in een zoet-hartig mengsel van sojasaus, suiker, knoflook, sesamolie en perensap, daarna gegrild op hoog vuur. De marinade maakt het vlees mals en creëert heerlijke karamelisatie."
        }
      },
      {
        question: {
          en: "What is the main difference between Eastern and Western North Carolina BBQ sauce?",
          es: "¿Cuál es la principal diferencia entre la salsa BBQ de Carolina del Norte Oriental y Occidental?",
          de: "Was ist der Hauptunterschied zwischen ost- und westnorthcarolinischer BBQ-Sauce?",
          nl: "Wat is het belangrijkste verschil tussen Oostelijke en Westelijke Noord-Carolina BBQ-saus?"
        },
        options: [
          { en: "Eastern uses vinegar-pepper, Western adds tomato/ketchup", es: "Oriental usa vinagre-pimienta, Occidental añade tomate/ketchup", de: "Östlich nutzt Essig-Pfeffer, Westlich fügt Tomate/Ketchup hinzu", nl: "Oostelijk gebruikt azijn-peper, Westelijk voegt tomaat/ketchup toe" },
          { en: "Eastern uses mustard, Western uses vinegar", es: "Oriental usa mostaza, Occidental usa vinagre", de: "Östlich nutzt Senf, Westlich nutzt Essig", nl: "Oostelijk gebruikt mosterd, Westelijk gebruikt azijn" },
          { en: "Eastern is sweet, Western is spicy", es: "Oriental es dulce, Occidental es picante", de: "Östlich ist süß, Westlich ist würzig", nl: "Oostelijk is zoet, Westelijk is pittig" },
          { en: "Eastern uses soy sauce, Western uses Worcester", es: "Oriental usa salsa de soja, Occidental usa Worcester", de: "Östlich nutzt Sojasauce, Westlich nutzt Worcester", nl: "Oostelijk gebruikt sojasaus, Westelijk gebruikt Worcester" }
        ],
        correct: 0,
        explanation: {
          en: "Eastern North Carolina sauce is a simple vinegar-based mixture with red pepper flakes, used on whole hog. Western NC (Lexington-style) adds tomato paste or ketchup to the vinegar base, creating a slightly thicker, tangier sauce used primarily on pork shoulder.",
          es: "La salsa de Carolina del Norte Oriental es una mezcla simple a base de vinagre con hojuelas de pimiento rojo, usada en cerdo entero. Carolina del Norte Occidental (estilo Lexington) añade pasta de tomate o ketchup a la base de vinagre, creando una salsa ligeramente más espesa y ácida usada principalmente en paleta de cerdo.",
          de: "Ostnorthcarolinische Sauce ist eine einfache essigbasierte Mischung mit roten Pfefferflocken, verwendet für ganzes Schwein. Westnorthcarolina (Lexington-Stil) fügt Tomatenpaste oder Ketchup zur Essigbasis hinzu, was eine etwas dickere, würzigere Sauce ergibt, die hauptsächlich für Schweineschulter verwendet wird.",
          nl: "Oostelijke Noord-Carolina saus is een eenvoudig azijn-gebaseerd mengsel met rode pepervlokken, gebruikt op heel varken. Westelijke NC (Lexington-stijl) voegt tomatenpuree of ketchup toe aan de azijnbasis, wat een iets dikkere, pittigere saus creëert die voornamelijk wordt gebruikt op varkensschouder."
        }
      },
      {
        question: {
          en: "What is 'chimichurri' in Argentine asado tradition?",
          es: "¿Qué es 'chimichurri' en la tradición del asado argentino?",
          de: "Was ist 'Chimichurri' in der argentinischen Asado-Tradition?",
          nl: "Wat is 'chimichurri' in de Argentijnse asado traditie?"
        },
        options: [
          { en: "Herb sauce with parsley, garlic, vinegar, and oil", es: "Salsa de hierbas con perejil, ajo, vinagre y aceite", de: "Kräutersauce mit Petersilie, Knoblauch, Essig und Öl", nl: "Kruidensaus met peterselie, knoflook, azijn en olie" },
          { en: "A type of beef cut from the ribs", es: "Un tipo de corte de res de las costillas", de: "Eine Art Rindfleisch-Schnitt von den Rippen", nl: "Een soort rundvleessnit van de ribben" },
          { en: "A special grilling technique", es: "Una técnica especial de asado", de: "Eine spezielle Grilltechnik", nl: "Een speciale grilltechniek" },
          { en: "A traditional Argentine wine", es: "Un vino argentino tradicional", de: "Ein traditioneller argentinischer Wein", nl: "Een traditionele Argentijnse wijn" }
        ],
        correct: 0,
        explanation: {
          en: "Chimichurri is Argentina's iconic green sauce made with finely chopped parsley, garlic, olive oil, red wine vinegar, and oregano. It's served alongside grilled meats at asados, adding bright, herbaceous flavor that cuts through the richness of beef.",
          es: "El chimichurri es la icónica salsa verde de Argentina hecha con perejil finamente picado, ajo, aceite de oliva, vinagre de vino tinto y orégano. Se sirve junto a carnes asadas en los asados, añadiendo un sabor brillante y herbáceo que corta la riqueza de la carne.",
          de: "Chimichurri ist Argentiniens ikonische grüne Sauce aus fein gehackter Petersilie, Knoblauch, Olivenöl, Rotweinessig und Oregano. Sie wird neben gegrilltem Fleisch bei Asados serviert und fügt einen hellen, krautigen Geschmack hinzu, der die Fülle des Rindfleischs durchschneidet.",
          nl: "Chimichurri is de iconische groene saus van Argentinië, gemaakt van fijn gehakte peterselie, knoflook, olijfolie, rode wijnazijn en oregano. Het wordt geserveerd naast gegrild vlees bij asados, en voegt een heldere, kruidachtige smaak toe die door de rijkdom van rundvlees snijdt."
        }
      },
      {
        question: {
          en: "What is Brazilian 'picanha' and how is it typically prepared at churrascarias?",
          es: "¿Qué es la 'picanha' brasileña y cómo se prepara típicamente en las churrasquerías?",
          de: "Was ist brasilianische 'Picanha' und wie wird sie typischerweise in Churrascarias zubereitet?",
          nl: "Wat is Braziliaanse 'picanha' en hoe wordt het typisch bereid in churrascarias?"
        },
        options: [
          { en: "Top sirloin cap, skewered in C-shape with fat cap, grilled over open flame", es: "Tapa de solomillo superior, ensartada en forma de C con capa de grasa, asada sobre llama abierta", de: "Obere Hüftdeckel, C-förmig aufgespießt mit Fettdeckel, über offener Flamme gegrillt", nl: "Bovenlende deksel, gespiest in C-vorm met vetlaag, gegrild boven open vuur" },
          { en: "Beef ribs marinated in garlic butter", es: "Costillas de res marinadas en mantequilla de ajo", de: "Rinderrippen mariniert in Knoblauchbutter", nl: "Runderribben gemarineerd in knoflookboter" },
          { en: "Pork shoulder slow-roasted underground", es: "Paleta de cerdo asada lentamente bajo tierra", de: "Schweineschulter langsam unter der Erde gebraten", nl: "Varkensschouder langzaam ondergronds gebraden" },
          { en: "Chicken hearts grilled on small skewers", es: "Corazones de pollo asados en brochetas pequeñas", de: "Hühnerherzen auf kleinen Spießen gegrillt", nl: "Kippenharten gegrild op kleine spiesen" }
        ],
        correct: 0,
        explanation: {
          en: "Picanha is the top sirloin cap, prized in Brazil for its fat cap that bastes the meat during grilling. It's cut thick, curved into a C-shape on skewers (espetos), seasoned simply with coarse salt, and rotisserie-grilled. Slices are carved tableside in rodizio service.",
          es: "La picanha es la tapa del solomillo superior, valorada en Brasil por su capa de grasa que rocía la carne durante el asado. Se corta gruesa, curvada en forma de C en brochetas (espetos), sazonada simplemente con sal gruesa y asada en rotisserie. Las rebanadas se tallan en la mesa en el servicio rodizio.",
          de: "Picanha ist der obere Hüftdeckel, in Brasilien geschätzt für seinen Fettdeckel, der das Fleisch während des Grillens begießt. Er wird dick geschnitten, C-förmig auf Spießen (Espetos) gebogen, einfach mit grobem Salz gewürzt und am Drehspießgrill gegrillt. Scheiben werden am Tisch im Rodizio-Service geschnitten.",
          nl: "Picanha is het bovenlende deksel, geprezen in Brazilië om zijn vetlaag die het vlees tijdens het grillen druppelt. Het wordt dik gesneden, gebogen in C-vorm op spiesen (espetos), eenvoudig gekruid met grof zout en geroosterd op een draaispit. Plakken worden aan tafel gesneden in rodizio service."
        }
      },
      {
        question: {
          en: "What distinguishes yakitori 'tare' from 'shio' seasoning?",
          es: "¿Qué distingue el condimento 'tare' del 'shio' en yakitori?",
          de: "Was unterscheidet Yakitori 'Tare' von 'Shio'-Würzung?",
          nl: "Wat onderscheidt yakitori 'tare' van 'shio' kruiding?"
        },
        options: [
          { en: "Tare is sweet soy-based glaze, shio is simple salt", es: "Tare es glaseado dulce a base de soja, shio es sal simple", de: "Tare ist süße sojabasierte Glasur, Shio ist einfaches Salz", nl: "Tare is zoete soja-gebaseerde glazuur, shio is eenvoudig zout" },
          { en: "Tare uses vinegar, shio uses mirin", es: "Tare usa vinagre, shio usa mirin", de: "Tare nutzt Essig, Shio nutzt Mirin", nl: "Tare gebruikt azijn, shio gebruikt mirin" },
          { en: "Tare is spicy, shio is mild", es: "Tare es picante, shio es suave", de: "Tare ist würzig, Shio ist mild", nl: "Tare is pittig, shio is mild" },
          { en: "Tare is for pork, shio is for chicken", es: "Tare es para cerdo, shio es para pollo", de: "Tare ist für Schwein, Shio ist für Huhn", nl: "Tare is voor varken, shio is voor kip" }
        ],
        correct: 0,
        explanation: {
          en: "Tare is a sweet-savory glaze made from soy sauce, mirin, sake, and sugar, brushed on yakitori during grilling for glossy caramelization. Shio (salt) seasoning is simply sea salt, allowing the pure flavor of high-quality chicken and binchotan charcoal smoke to shine through.",
          es: "Tare es un glaseado dulce-salado hecho de salsa de soja, mirin, sake y azúcar, aplicado al yakitori durante el asado para una caramelización brillante. El condimento shio (sal) es simplemente sal marina, permitiendo que el sabor puro del pollo de alta calidad y el humo del carbón binchotan brillen.",
          de: "Tare ist eine süß-herzhafte Glasur aus Sojasauce, Mirin, Sake und Zucker, während des Grillens auf Yakitori aufgetragen für glänzende Karamellisierung. Shio (Salz)-Würzung ist einfach Meersalz, wodurch der reine Geschmack von hochwertigem Huhn und Binchotan-Holzkohlerauch durchscheinen kann.",
          nl: "Tare is een zoet-hartige glazuur gemaakt van sojasaus, mirin, sake en suiker, aangebracht op yakitori tijdens het grillen voor glanzende karamelisatie. Shio (zout) kruiding is simpelweg zeezout, waardoor de pure smaak van hoogwaardige kip en binchotan houtskoolrook kan doorschijnen."
        }
      },
      {
        question: {
          en: "What is the key ingredient in Indonesian satay peanut sauce?",
          es: "¿Cuál es el ingrediente clave en la salsa de maní satay indonesia?",
          de: "Was ist die Schlüsselzutat in der indonesischen Satay-Erdnusssauce?",
          nl: "Wat is het belangrijkste ingrediënt in Indonesische satay pindasus?"
        },
        options: [
          { en: "Ground roasted peanuts with palm sugar and tamarind", es: "Maní tostado molido con azúcar de palma y tamarindo", de: "Gemahlene geröstete Erdnüsse mit Palmzucker und Tamarinde", nl: "Gemalen geroosterde pinda's met palmsuiker en tamarinde" },
          { en: "Cashews with soy sauce", es: "Anacardos con salsa de soja", de: "Cashewnüsse mit Sojasauce", nl: "Cashewnoten met sojasaus" },
          { en: "Almond butter with honey", es: "Mantequilla de almendra con miel", de: "Mandelbutter mit Honig", nl: "Amandelboter met honing" },
          { en: "Sesame paste with vinegar", es: "Pasta de sésamo con vinagre", de: "Sesampaste mit Essig", nl: "Sesampasta met azijn" }
        ],
        correct: 0,
        explanation: {
          en: "Indonesian satay sauce (bumbu kacang) combines freshly ground roasted peanuts with palm sugar for sweetness, tamarind for tanginess, kecap manis (sweet soy sauce), garlic, chilies, and shallots. This creates a complex sweet-savory-spicy sauce perfect for grilled meat skewers.",
          es: "La salsa satay indonesia (bumbu kacang) combina maní tostado recién molido con azúcar de palma para dulzura, tamarindo para acidez, kecap manis (salsa de soja dulce), ajo, chiles y chalotes. Esto crea una salsa compleja dulce-salada-picante perfecta para brochetas de carne asada.",
          de: "Indonesische Satay-Sauce (Bumbu Kacang) kombiniert frisch gemahlene geröstete Erdnüsse mit Palmzucker für Süße, Tamarinde für Säure, Kecap Manis (süße Sojasauce), Knoblauch, Chilis und Schalotten. Dies erzeugt eine komplexe süß-herzhafte-würzige Sauce, perfekt für gegrillte Fleischspieße.",
          nl: "Indonesische satay saus (bumbu kacang) combineert vers gemalen geroosterde pinda's met palmsuiker voor zoetheid, tamarinde voor pittigheid, kecap manis (zoete sojasaus), knoflook, pepers en sjalotten. Dit creëert een complexe zoet-hartige-pittige saus perfect voor gegrilde vleesspiezen."
        }
      },
      {
        question: {
          en: "What is 'boerewors' in South African braai culture?",
          es: "¿Qué es 'boerewors' en la cultura braai sudafricana?",
          de: "Was ist 'Boerewors' in der südafrikanischen Braai-Kultur?",
          nl: "Wat is 'boerewors' in de Zuid-Afrikaanse braai cultuur?"
        },
        options: [
          { en: "Coiled beef/pork sausage spiced with coriander and other spices", es: "Salchicha enrollada de res/cerdo especiada con cilantro y otras especias", de: "Gerollte Rind-/Schweinewurst gewürzt mit Koriander und anderen Gewürzen", nl: "Opgerolde rundvlees/varkensvlees worst gekruid met koriander en andere kruiden" },
          { en: "Marinated lamb skewers", es: "Brochetas de cordero marinadas", de: "Marinierte Lammspieße", nl: "Gemarineerde lamsspiezen" },
          { en: "Grilled corn on the cob", es: "Mazorca de maíz asada", de: "Gegrillter Maiskolben", nl: "Gegrilde maïskolf" },
          { en: "Beef brisket with dry rub", es: "Brisket de res con condimento seco", de: "Rinderbrust mit Trockenrub", nl: "Runderbrisket met droge rub" }
        ],
        correct: 0,
        explanation: {
          en: "Boerewors ('farmer's sausage') is a traditional South African sausage made from coarsely ground beef and pork (at least 90% meat), seasoned with coriander, black pepper, nutmeg, and cloves. It's formed into a continuous coil and grilled over wood fire at braais.",
          es: "Boerewors ('salchicha del granjero') es una salchicha sudafricana tradicional hecha de res y cerdo molidos gruesos (al menos 90% carne), sazonada con cilantro, pimienta negra, nuez moscada y clavos. Se forma en una espiral continua y se asa sobre fuego de leña en braais.",
          de: "Boerewors ('Bauernwurst') ist eine traditionelle südafrikanische Wurst aus grob gemahlenem Rind- und Schweinefleisch (mindestens 90% Fleisch), gewürzt mit Koriander, schwarzem Pfeffer, Muskatnuss und Nelken. Sie wird zu einer durchgehenden Spirale geformt und über Holzfeuer bei Braais gegrillt.",
          nl: "Boerewors ('boerenwurst') is een traditionele Zuid-Afrikaanse worst gemaakt van grof gemalen rundvlees en varkensvlees (minstens 90% vlees), gekruid met koriander, zwarte peper, nootmuskaat en kruidnagel. Het wordt gevormd tot een continue spiraal en gegrild boven houtvuur bij braais."
        }
      },
      {
        question: {
          en: "What makes Jamaican jerk seasoning distinctive?",
          es: "¿Qué hace distintivo el condimento jerk jamaicano?",
          de: "Was macht jamaikanische Jerk-Würzung besonders?",
          nl: "Wat maakt Jamaicaanse jerk kruiding onderscheidend?"
        },
        options: [
          { en: "Scotch bonnet peppers, allspice (pimento), and thyme", es: "Pimientos scotch bonnet, pimienta de Jamaica (pimento) y tomillo", de: "Scotch Bonnet-Paprika, Piment und Thymian", nl: "Scotch bonnet pepers, piment (allspice) en tijm" },
          { en: "Paprika, cumin, and oregano", es: "Pimentón, comino y orégano", de: "Paprika, Kreuzkümmel und Oregano", nl: "Paprika, komijn en oregano" },
          { en: "Soy sauce, ginger, and garlic", es: "Salsa de soja, jengibre y ajo", de: "Sojasauce, Ingwer und Knoblauch", nl: "Sojasaus, gember en knoflook" },
          { en: "Mustard, brown sugar, and black pepper", es: "Mostaza, azúcar morena y pimienta negra", de: "Senf, brauner Zucker und schwarzer Pfeffer", nl: "Mosterd, bruine suiker en zwarte peper" }
        ],
        correct: 0,
        explanation: {
          en: "Jamaican jerk features fiery Scotch bonnet peppers, aromatic allspice berries (called pimento in Jamaica), fresh thyme, scallions, and garlic. Traditional jerk is smoked over pimento wood, which adds distinctive flavor. The combination creates intense heat balanced with warm, complex spices.",
          es: "El jerk jamaicano presenta pimientos scotch bonnet ardientes, bayas de pimienta de Jamaica aromáticas (llamadas pimento en Jamaica), tomillo fresco, cebollines y ajo. El jerk tradicional se ahuma sobre madera de pimento, que añade sabor distintivo. La combinación crea calor intenso equilibrado con especias cálidas y complejas.",
          de: "Jamaikanisches Jerk enthält feurige Scotch Bonnet-Paprika, aromatische Pimentbeeren (in Jamaika Pimento genannt), frischen Thymian, Frühlingszwiebeln und Knoblauch. Traditionelles Jerk wird über Pimentoholz geräuchert, was einen unverwechselbaren Geschmack verleiht. Die Kombination erzeugt intensive Schärfe, ausgewogen mit warmen, komplexen Gewürzen.",
          nl: "Jamaicaanse jerk bevat vurige Scotch bonnet pepers, aromatische pimentbessen (in Jamaica pimento genoemd), verse tijm, bosuitjes en knoflook. Traditionele jerk wordt gerookt boven pimentohout, wat een onderscheidende smaak toevoegt. De combinatie creëert intense hitte gebalanceerd met warme, complexe kruiden."
        }
      },
      {
        question: {
          en: "What are 'sosaties' in South African braai tradition?",
          es: "¿Qué son las 'sosaties' en la tradición braai sudafricana?",
          de: "Was sind 'Sosaties' in der südafrikanischen Braai-Tradition?",
          nl: "Wat zijn 'sosaties' in de Zuid-Afrikaanse braai traditie?"
        },
        options: [
          { en: "Marinated lamb or mutton skewers with dried apricots", es: "Brochetas de cordero o carnero marinadas con albaricoques secos", de: "Marinierte Lamm- oder Hammelspieße mit getrockneten Aprikosen", nl: "Gemarineerde lam- of schapenspiezen met gedroogde abrikozen" },
          { en: "Grilled vegetable medley", es: "Mezcla de verduras asadas", de: "Gegrillte Gemüsemischung", nl: "Gegrilde groentenmix" },
          { en: "Beef ribs with barbecue sauce", es: "Costillas de res con salsa barbacoa", de: "Rinderrippen mit Barbecue-Sauce", nl: "Runderribben met barbecuesaus" },
          { en: "Spicy chicken wings", es: "Alitas de pollo picantes", de: "Würzige Hähnchenflügel", nl: "Pittige kippenvleugels" }
        ],
        correct: 0,
        explanation: {
          en: "Sosaties are Cape Malay-influenced kebabs made with cubed lamb or mutton marinated in curry spices, garlic, tamarind, and apricot jam, then threaded onto skewers with dried apricots and onions. They're grilled over coals at braais, showing South Africa's fusion of cultures.",
          es: "Las sosaties son kebabs influenciados por los malayos del Cabo hechas con cubos de cordero o carnero marinados en especias curry, ajo, tamarindo y mermelada de albaricoque, luego ensartados en brochetas con albaricoques secos y cebollas. Se asan sobre brasas en braais, mostrando la fusión de culturas de Sudáfrica.",
          de: "Sosaties sind kapmalaiisch beeinflusste Kebabs aus gewürfeltem Lamm- oder Hammelfleisch, mariniert in Currygewürzen, Knoblauch, Tamarinde und Aprikosenmarmelade, dann auf Spieße mit getrockneten Aprikosen und Zwiebeln aufgereiht. Sie werden über Kohlen bei Braais gegrillt und zeigen Südafrikas Kulturfusion.",
          nl: "Sosaties zijn Kaaps-Maleise beïnvloede kebabs gemaakt van blokjes lam of schaap gemarineerd in kerrie kruiden, knoflook, tamarinde en abrikozenjam, daarna geregen op spiezen met gedroogde abrikozen en uien. Ze worden gegrild boven kolen bij braais, wat de culturele fusie van Zuid-Afrika toont."
        }
      },
      {
        question: {
          en: "What type of charcoal is traditionally used for yakitori in Japan?",
          es: "¿Qué tipo de carbón se usa tradicionalmente para yakitori en Japón?",
          de: "Welche Art von Holzkohle wird traditionell für Yakitori in Japan verwendet?",
          nl: "Welk type houtskool wordt traditioneel gebruikt voor yakitori in Japan?"
        },
        options: [
          { en: "Binchotan (white charcoal from oak)", es: "Binchotan (carbón blanco de roble)", de: "Binchotan (weiße Holzkohle aus Eiche)", nl: "Binchotan (witte houtskool van eik)" },
          { en: "Mesquite wood chips", es: "Astillas de madera de mezquite", de: "Mesquite-Holzspäne", nl: "Mesquite houtspaanders" },
          { en: "Standard charcoal briquettes", es: "Briquetas de carbón estándar", de: "Standard-Holzkohlebriketts", nl: "Standaard houtskoolbriketten" },
          { en: "Hickory lump charcoal", es: "Carbón en trozos de nogal", de: "Hickory-Stückkohle", nl: "Hickory klomp houtskool" }
        ],
        correct: 0,
        explanation: {
          en: "Binchotan is premium Japanese white charcoal made from ubame oak through a slow carbonization process reaching 1000°C. It burns extremely hot (up to 1832°F), produces almost no smoke or odor, and radiates consistent infrared heat perfect for quickly searing yakitori while keeping interiors juicy.",
          es: "Binchotan es carbón blanco japonés premium hecho de roble ubame a través de un proceso de carbonización lenta alcanzando 1000°C. Quema extremadamente caliente (hasta 1832°F), produce casi sin humo ni olor, y irradia calor infrarrojo consistente perfecto para sellar rápidamente yakitori manteniendo interiores jugosos.",
          de: "Binchotan ist Premium-japanische weiße Holzkohle aus Ubame-Eiche durch einen langsamen Karbonisierungsprozess bei 1000°C. Sie brennt extrem heiß (bis zu 1000°C), produziert fast keinen Rauch oder Geruch und strahlt gleichmäßige Infrarotwärme aus, perfekt zum schnellen Anbraten von Yakitori bei saftigem Inneren.",
          nl: "Binchotan is premium Japanse witte houtskool gemaakt van ubame eik via een langzaam verkolingsproces tot 1000°C. Het brandt extreem heet (tot 1000°C), produceert bijna geen rook of geur, en straalt consistente infraroodwarmte uit perfect voor snel aanbraden van yakitori terwijl de binnenkant sappig blijft."
        }
      },
      {
        question: {
          en: "What is 'bulgogi' in Korean BBQ cuisine?",
          es: "¿Qué es 'bulgogi' en la cocina BBQ coreana?",
          de: "Was ist 'Bulgogi' in der koreanischen BBQ-Küche?",
          nl: "Wat is 'bulgogi' in de Koreaanse BBQ-keuken?"
        },
        options: [
          { en: "Thinly sliced marinated beef grilled quickly", es: "Carne de res finamente rebanada marinada y asada rápidamente", de: "Dünn geschnittenes mariniertes Rindfleisch schnell gegrillt", nl: "Dun gesneden gemarineerd rundvlees snel gegrild" },
          { en: "Thick pork belly strips", es: "Tiras gruesas de panceta de cerdo", de: "Dicke Schweinebauch-Streifen", nl: "Dikke varkensbuik strips" },
          { en: "Spicy chicken soup", es: "Sopa picante de pollo", de: "Würzige Hühnersuppe", nl: "Pittige kippensoep" },
          { en: "Fermented vegetable side dish", es: "Guarnición de verduras fermentadas", de: "Fermentiertes Gemüse-Beilagengericht", nl: "Gefermenteerd groente bijgerecht" }
        ],
        correct: 0,
        explanation: {
          en: "Bulgogi ('fire meat') is thinly sliced beef (usually ribeye or sirloin) marinated in soy sauce, sugar, sesame oil, garlic, and pear/kiwi (for tenderizing), then grilled quickly over high heat. The thin slices cook in seconds, developing caramelized edges while staying tender.",
          es: "Bulgogi ('carne de fuego') es carne de res finamente rebanada (usualmente ribeye o solomillo) marinada en salsa de soja, azúcar, aceite de sésamo, ajo y pera/kiwi (para ablandar), luego asada rápidamente a fuego alto. Las rebanadas delgadas se cocinan en segundos, desarrollando bordes caramelizados mientras permanecen tiernas.",
          de: "Bulgogi ('Feuerfleisch') ist dünn geschnittenes Rindfleisch (normalerweise Ribeye oder Sirloin), mariniert in Sojasauce, Zucker, Sesamöl, Knoblauch und Birne/Kiwi (zum Zartmachen), dann schnell über hoher Hitze gegrillt. Die dünnen Scheiben garen in Sekunden und entwickeln karamellisierte Kanten bei zartem Inneren.",
          nl: "Bulgogi ('vuurvlees') is dun gesneden rundvlees (meestal ribeye of sirloin) gemarineerd in sojasaus, suiker, sesamolie, knoflook en peer/kiwi (voor het malsen), daarna snel gegrild op hoog vuur. De dunne plakken koken in seconden, ontwikkelen gekarameliseerde randen terwijl ze mals blijven."
        }
      },
      {
        question: {
          en: "What wood is traditional for South African braai?",
          es: "¿Qué madera es tradicional para el braai sudafricano?",
          de: "Welches Holz ist traditionell für südafrikanisches Braai?",
          nl: "Welk hout is traditioneel voor Zuid-Afrikaanse braai?"
        },
        options: [
          { en: "Kameeldoring (camel thorn) or mopane", es: "Kameeldoring (espina de camello) o mopane", de: "Kameeldoring (Kameldorn) oder Mopane", nl: "Kameeldoring (kameeldoorn) of mopane" },
          { en: "Hickory and oak", es: "Nogal y roble", de: "Hickory und Eiche", nl: "Hickory en eik" },
          { en: "Cedar and pine", es: "Cedro y pino", de: "Zeder und Kiefer", nl: "Ceder en den" },
          { en: "Mesquite and cherry", es: "Mezquite y cerezo", de: "Mesquite und Kirsche", nl: "Mesquite en kers" }
        ],
        correct: 0,
        explanation: {
          en: "Traditional South African braai uses indigenous hardwoods like kameeldoring (camel thorn acacia) and mopane, which burn extremely hot and long with minimal smoke. These woods impart subtle flavor while creating the intense coals needed for proper braai. Using wood (not charcoal) is considered essential to authentic braai.",
          es: "El braai sudafricano tradicional usa maderas duras indígenas como kameeldoring (acacia de espina de camello) y mopane, que queman extremadamente caliente y largo con humo mínimo. Estas maderas imparten sabor sutil mientras crean las brasas intensas necesarias para un braai apropiado. Usar madera (no carbón) se considera esencial para el braai auténtico.",
          de: "Traditionelles südafrikanisches Braai verwendet einheimische Harthölzer wie Kameeldoring (Kameldorn-Akazie) und Mopane, die extrem heiß und lange mit minimalem Rauch brennen. Diese Hölzer verleihen subtilen Geschmack, während sie die intensiven Kohlen erzeugen, die für richtiges Braai benötigt werden. Holz (nicht Holzkohle) zu verwenden gilt als wesentlich für authentisches Braai.",
          nl: "Traditionele Zuid-Afrikaanse braai gebruikt inheemse hardhoutsoorten zoals kameeldoring (kameeldoorn acacia) en mopane, die extreem heet en lang branden met minimale rook. Deze houtsoorten geven subtiele smaak terwijl ze de intense kolen creëren die nodig zijn voor goede braai. Het gebruik van hout (geen houtskool) wordt als essentieel beschouwd voor authentieke braai."
        }
      },
      {
        question: {
          en: "What are the four main categories judged in KCBS BBQ competitions?",
          es: "¿Cuáles son las cuatro categorías principales juzgadas en las competencias BBQ de KCBS?",
          de: "Was sind die vier Hauptkategorien, die bei KCBS-BBQ-Wettbewerben bewertet werden?",
          nl: "Wat zijn de vier hoofdcategorieën die beoordeeld worden in KCBS BBQ-wedstrijden?"
        },
        options: [
          { en: "Chicken, ribs, pork, brisket", es: "Pollo, costillas, cerdo, brisket", de: "Hähnchen, Rippen, Schwein, Brisket", nl: "Kip, ribben, varken, brisket" },
          { en: "Beef, pork, lamb, fish", es: "Res, cerdo, cordero, pescado", de: "Rind, Schwein, Lamm, Fisch", nl: "Rundvlees, varken, lam, vis" },
          { en: "Burgers, hot dogs, steaks, sausages", es: "Hamburguesas, hot dogs, filetes, salchichas", de: "Burger, Hot Dogs, Steaks, Würste", nl: "Burgers, hotdogs, steaks, worsten" },
          { en: "Wings, drumsticks, thighs, breast", es: "Alitas, muslos, muslos, pechuga", de: "Flügel, Keulen, Schenkel, Brust", nl: "Vleugels, drumsticks, dijen, borst" }
        ],
        correct: 0,
        explanation: {
          en: "Kansas City Barbecue Society (KCBS) competitions judge four meat categories in order: chicken, ribs (pork), pork (shoulder/butt), and brisket. Each is scored on appearance (first impression when box opens), taste, and tenderness. These became the standard categories defining American competition BBQ.",
          es: "Las competencias de la Kansas City Barbecue Society (KCBS) juzgan cuatro categorías de carne en orden: pollo, costillas (cerdo), cerdo (paleta/butt) y brisket. Cada una se califica por apariencia (primera impresión cuando se abre la caja), sabor y ternura. Estas se convirtieron en las categorías estándar que definen el BBQ de competencia americano.",
          de: "Kansas City Barbecue Society (KCBS)-Wettbewerbe bewerten vier Fleischkategorien in Reihenfolge: Hähnchen, Rippen (Schwein), Schwein (Schulter/Butt) und Brisket. Jede wird nach Aussehen (erster Eindruck beim Öffnen der Box), Geschmack und Zartheit bewertet. Diese wurden die Standardkategorien, die amerikanisches Wettbewerbs-BBQ definieren.",
          nl: "Kansas City Barbecue Society (KCBS) wedstrijden beoordelen vier vlees categorieën in volgorde: kip, ribben (varken), varken (schouder/butt) en brisket. Elk wordt gescoord op uiterlijk (eerste indruk wanneer de doos opent), smaak en malheid. Deze werden de standaard categorieën die Amerikaans wedstrijd-BBQ definiëren."
        }
      },
      {
        question: {
          en: "What is 'gochujang' in Korean BBQ?",
          es: "¿Qué es 'gochujang' en el BBQ coreano?",
          de: "Was ist 'Gochujang' im koreanischen BBQ?",
          nl: "Wat is 'gochujang' in Koreaanse BBQ?"
        },
        options: [
          { en: "Fermented red chili paste used in marinades", es: "Pasta de chile rojo fermentada usada en marinadas", de: "Fermentierte rote Chilipaste in Marinaden verwendet", nl: "Gefermenteerde rode chilipasta gebruikt in marinades" },
          { en: "Pickled radish side dish", es: "Guarnición de rábano encurtido", de: "Eingelegtes Rettich-Beilagengericht", nl: "Ingelegde radijs bijgerecht" },
          { en: "Sweet soy dipping sauce", es: "Salsa dulce de soja para mojar", de: "Süße Soja-Dip-Sauce", nl: "Zoete soja dipsaus" },
          { en: "Sesame oil seasoning", es: "Condimento de aceite de sésamo", de: "Sesamöl-Würzung", nl: "Sesamolie kruiding" }
        ],
        correct: 0,
        explanation: {
          en: "Gochujang is a thick, fermented Korean chili paste made from red chili powder, glutinous rice, fermented soybeans, and salt. It has complex flavor - spicy, sweet, savory, and umami. It's used in BBQ marinades, dipping sauces, and is essential to Korean cuisine's characteristic heat and depth.",
          es: "Gochujang es una pasta de chile coreana espesa y fermentada hecha de polvo de chile rojo, arroz glutinoso, soja fermentada y sal. Tiene sabor complejo - picante, dulce, salado y umami. Se usa en marinadas BBQ, salsas para mojar, y es esencial para el calor y profundidad característicos de la cocina coreana.",
          de: "Gochujang ist eine dicke, fermentierte koreanische Chilipaste aus rotem Chilipulver, Klebreis, fermentierten Sojabohnen und Salz. Sie hat komplexen Geschmack - würzig, süß, herzhaft und umami. Sie wird in BBQ-Marinaden und Dip-Saucen verwendet und ist wesentlich für die charakteristische Schärfe und Tiefe der koreanischen Küche.",
          nl: "Gochujang is een dikke, gefermenteerde Koreaanse chilipasta gemaakt van rode chilipoeder, kleverige rijst, gefermenteerde sojabonen en zout. Het heeft een complexe smaak - pittig, zoet, hartig en umami. Het wordt gebruikt in BBQ-marinades, dipsauzen en is essentieel voor de karakteristieke hitte en diepte van de Koreaanse keuken."
        }
      },
      {
        question: {
          en: "What is 'farofa' served with Brazilian churrasco?",
          es: "¿Qué es la 'farofa' servida con el churrasco brasileño?",
          de: "Was ist 'Farofa', das mit brasilianischem Churrasco serviert wird?",
          nl: "Wat is 'farofa' geserveerd met Braziliaanse churrasco?"
        },
        options: [
          { en: "Toasted cassava flour mixture with butter and seasonings", es: "Mezcla de harina de yuca tostada con mantequilla y condimentos", de: "Geröstete Maniokmehl-Mischung mit Butter und Gewürzen", nl: "Geroosterd cassavemeel mengsel met boter en kruiden" },
          { en: "Black bean and rice dish", es: "Plato de frijoles negros y arroz", de: "Schwarze Bohnen und Reisgericht", nl: "Zwarte bonen en rijstgerecht" },
          { en: "Chimichurri-style herb sauce", es: "Salsa de hierbas estilo chimichurri", de: "Chimichurri-artige Kräutersauce", nl: "Chimichurri-achtige kruidensaus" },
          { en: "Grilled vegetable salad", es: "Ensalada de verduras asadas", de: "Gegrillter Gemüsesalat", nl: "Gegrilde groentesalade" }
        ],
        correct: 0,
        explanation: {
          en: "Farofa is a traditional Brazilian side dish made from toasted cassava (manioc) flour mixed with butter, salt, and often additions like bacon, onions, eggs, or olives. Its crunchy, nutty texture absorbs meat juices and adds substance to churrasco meals. It's an essential part of Brazilian BBQ tradition.",
          es: "La farofa es un acompañamiento brasileño tradicional hecho de harina de yuca tostada (mandioca) mezclada con mantequilla, sal y a menudo adiciones como tocino, cebollas, huevos u olivas. Su textura crujiente y a nuez absorbe los jugos de la carne y añade sustancia a las comidas de churrasco. Es una parte esencial de la tradición BBQ brasileña.",
          de: "Farofa ist eine traditionelle brasilianische Beilage aus geröstetem Maniokmehl (Cassava), gemischt mit Butter, Salz und oft Zusätzen wie Speck, Zwiebeln, Eiern oder Oliven. Ihre knusprige, nussige Textur absorbiert Fleischsäfte und fügt Churrasco-Mahlzeiten Substanz hinzu. Sie ist ein wesentlicher Teil der brasilianischen BBQ-Tradition.",
          nl: "Farofa is een traditioneel Braziliaans bijgerecht gemaakt van geroosterd cassavemeel (maniok) gemengd met boter, zout en vaak toevoegingen zoals spek, uien, eieren of olijven. De knapperige, nootachtige textuur absorbeert vlees sappen en voegt substantie toe aan churrasco maaltijden. Het is een essentieel onderdeel van de Braziliaanse BBQ-traditie."
        }
      },
      {
        question: {
          en: "What is 'tira de asado' in Argentine BBQ?",
          es: "¿Qué es 'tira de asado' en el BBQ argentino?",
          de: "Was ist 'Tira de Asado' im argentinischen BBQ?",
          nl: "Wat is 'tira de asado' in Argentijnse BBQ?"
        },
        options: [
          { en: "Cross-cut beef short ribs", es: "Costillas cortas de res cortadas transversalmente", de: "Quer geschnittene Rindfleisch-Short Ribs", nl: "Dwars gesneden rundvlees short ribs" },
          { en: "Skirt steak", es: "Falda de res", de: "Skirt Steak", nl: "Skirt steak" },
          { en: "Tenderloin strips", es: "Tiras de solomillo", de: "Filet-Streifen", nl: "Ossenhaas strips" },
          { en: "Ground beef patties", es: "Hamburguesas de carne molida", de: "Hackfleisch-Patties", nl: "Gehakt burgers" }
        ],
        correct: 0,
        explanation: {
          en: "Tira de asado are beef short ribs cut across the bone into strips, creating pieces with 3-4 bone cross-sections. This Argentine cut is grilled over wood coals, allowing quick cooking while the bones add flavor and prevent overcooking. It's a staple at asados, prized for its rich, beefy flavor.",
          es: "Tira de asado son costillas cortas de res cortadas a través del hueso en tiras, creando piezas con 3-4 secciones transversales de hueso. Este corte argentino se asa sobre brasas de leña, permitiendo cocción rápida mientras los huesos añaden sabor y previenen el sobrecocido. Es un básico en asados, valorado por su sabor rico a carne.",
          de: "Tira de Asado sind Rindfleisch-Short Ribs, die quer durch den Knochen in Streifen geschnitten werden, wodurch Stücke mit 3-4 Knochenquerschnitten entstehen. Dieser argentinische Schnitt wird über Holzkohlen gegrillt, was schnelles Garen ermöglicht, während die Knochen Geschmack hinzufügen und Überkochen verhindern. Es ist ein Grundnahrungsmittel bei Asados, geschätzt für seinen reichen, fleischigen Geschmack.",
          nl: "Tira de asado zijn rundvlees short ribs die dwars door het bot in repen zijn gesneden, waardoor stukken ontstaan met 3-4 botdoorsneden. Dit Argentijnse stuk wordt gegrild boven houtskoolvuur, wat snel koken mogelijk maakt terwijl de botten smaak toevoegen en overkoken voorkomen. Het is een basis bij asados, gewaardeerd om zijn rijke, vleesachtige smaak."
        }
      },
      {
        question: {
          en: "What are 'banchan' in Korean BBQ restaurants?",
          es: "¿Qué son 'banchan' en los restaurantes de BBQ coreano?",
          de: "Was sind 'Banchan' in koreanischen BBQ-Restaurants?",
          nl: "Wat zijn 'banchan' in Koreaanse BBQ-restaurants?"
        },
        options: [
          { en: "Small side dishes like kimchi, pickles, and vegetables served complimentary", es: "Pequeños platos de acompañamiento como kimchi, encurtidos y verduras servidos de cortesía", de: "Kleine Beilagengerichte wie Kimchi, Pickles und Gemüse kostenlos serviert", nl: "Kleine bijgerechten zoals kimchi, augurken en groenten gratis geserveerd" },
          { en: "The metal grill plates for cooking", es: "Las placas de parrilla de metal para cocinar", de: "Die Metallgrillplatten zum Kochen", nl: "De metalen grillplaten voor koken" },
          { en: "Dipping sauces for meat", es: "Salsas para mojar la carne", de: "Dip-Saucen für Fleisch", nl: "Dipsauzen voor vlees" },
          { en: "Lettuce wraps for meat", es: "Envolturas de lechuga para carne", de: "Salatblatt-Wraps für Fleisch", nl: "Slawraps voor vlees" }
        ],
        correct: 0,
        explanation: {
          en: "Banchan are the array of small side dishes served complimentary at Korean restaurants, especially BBQ. They include kimchi (fermented vegetables), namul (seasoned vegetables), pickles, and other items. They're refilled for free and provide contrasting flavors/textures to complement grilled meats.",
          es: "Banchan son la variedad de pequeños platos de acompañamiento servidos de cortesía en restaurantes coreanos, especialmente BBQ. Incluyen kimchi (verduras fermentadas), namul (verduras sazonadas), encurtidos y otros artículos. Se rellenan gratis y proporcionan sabores/texturas contrastantes para complementar carnes asadas.",
          de: "Banchan sind die Reihe kleiner Beilagengerichte, die kostenlos in koreanischen Restaurants serviert werden, besonders beim BBQ. Sie umfassen Kimchi (fermentiertes Gemüse), Namul (gewürztes Gemüse), Pickles und andere Artikel. Sie werden kostenlos nachgefüllt und bieten kontrastierende Aromen/Texturen zur Ergänzung von gegrilltem Fleisch.",
          nl: "Banchan zijn de reeks kleine bijgerechten die gratis worden geserveerd in Koreaanse restaurants, vooral BBQ. Ze omvatten kimchi (gefermenteerde groenten), namul (gekruide groenten), augurken en andere items. Ze worden gratis bijgevuld en bieden contrasterende smaken/texturen om gegrild vlees aan te vullen."
        }
      },
      {
        question: {
          en: "What is the 'parrilla' in Argentine asado?",
          es: "¿Qué es la 'parrilla' en el asado argentino?",
          de: "Was ist die 'Parrilla' beim argentinischen Asado?",
          nl: "Wat is de 'parrilla' in Argentijnse asado?"
        },
        options: [
          { en: "V-shaped or flat iron grill placed over wood coals", es: "Parrilla de hierro en forma de V o plana colocada sobre brasas de leña", de: "V-förmiger oder flacher Eisengrill über Holzkohlen platziert", nl: "V-vormige of platte ijzeren grill geplaatst boven houtskoolvuur" },
          { en: "Special cut of beef sirloin", es: "Corte especial de solomillo de res", de: "Spezieller Schnitt vom Rinderfilet", nl: "Speciale snit van runderlende" },
          { en: "Chimichurri sauce recipe", es: "Receta de salsa chimichurri", de: "Chimichurri-Sauce-Rezept", nl: "Chimichurri saus recept" },
          { en: "Type of Argentine wine", es: "Tipo de vino argentino", de: "Art argentinischen Weins", nl: "Type Argentijnse wijn" }
        ],
        correct: 0,
        explanation: {
          en: "A parrilla is the traditional Argentine grill - a heavy iron grate (flat or V-shaped) placed over a fire pit filled with wood coals. The grate height is adjustable to control heat. This setup allows even cooking of large cuts while fat drips away. The term also refers to restaurants specializing in grilled meats.",
          es: "Una parrilla es la parrilla argentina tradicional - una rejilla de hierro pesada (plana o en forma de V) colocada sobre un pozo de fuego lleno de brasas de leña. La altura de la rejilla es ajustable para controlar el calor. Esta configuración permite cocción uniforme de cortes grandes mientras la grasa gotea. El término también se refiere a restaurantes especializados en carnes asadas.",
          de: "Eine Parrilla ist der traditionelle argentinische Grill - ein schwerer Eisenrost (flach oder V-förmig) über einer Feuerstelle mit Holzkohlen platziert. Die Rosthöhe ist einstellbar, um die Hitze zu kontrollieren. Dieser Aufbau ermöglicht gleichmäßiges Garen großer Stücke, während Fett abtropft. Der Begriff bezieht sich auch auf Restaurants, die auf gegrilltes Fleisch spezialisiert sind.",
          nl: "Een parrilla is de traditionele Argentijnse grill - een zwaar ijzeren rooster (plat of V-vormig) geplaatst boven een vuurput gevuld met houtskoolvuur. De roosterhoogte is verstelbaar om de hitte te controleren. Deze opstelling maakt gelijkmatig garen van grote stukken mogelijk terwijl vet wegdruppelt. De term verwijst ook naar restaurants gespecialiseerd in gegrild vlees."
        }
      },
      {
        question: {
          en: "What makes Texas East BBQ different from Central Texas style?",
          es: "¿Qué hace diferente el BBQ de Texas Este del estilo de Texas Central?",
          de: "Was macht East Texas BBQ anders als der Central Texas Stil?",
          nl: "Wat maakt Texas East BBQ anders dan Central Texas stijl?"
        },
        options: [
          { en: "Focus on pork, hickory wood, tomato-based sauce", es: "Enfoque en cerdo, madera de nogal, salsa a base de tomate", de: "Fokus auf Schwein, Hickory-Holz, tomatenbasierte Sauce", nl: "Focus op varken, hickory hout, tomaat-gebaseerde saus" },
          { en: "Only brisket with no sauce", es: "Solo brisket sin salsa", de: "Nur Brisket ohne Sauce", nl: "Alleen brisket zonder saus" },
          { en: "Lamb with mustard sauce", es: "Cordero con salsa de mostaza", de: "Lamm mit Senfsauce", nl: "Lam met mosterdsaus" },
          { en: "Whole hog with vinegar", es: "Cerdo entero con vinagre", de: "Ganzes Schwein mit Essig", nl: "Heel varken met azijn" }
        ],
        correct: 0,
        explanation: {
          en: "East Texas BBQ, influenced by proximity to the Deep South, focuses more on pork (ribs and shoulder) than Central Texas's beef. It uses hickory wood instead of post oak and features sweet, tomato-based sauces similar to Memphis style, contrasting with Central Texas's dry, beef-centric tradition.",
          es: "El BBQ de Texas Este, influenciado por la proximidad al Sur Profundo, se enfoca más en cerdo (costillas y paleta) que en la res de Texas Central. Usa madera de nogal en lugar de roble post y presenta salsas dulces a base de tomate similares al estilo Memphis, contrastando con la tradición seca y centrada en res de Texas Central.",
          de: "East Texas BBQ, beeinflusst durch die Nähe zum tiefen Süden, konzentriert sich mehr auf Schwein (Rippen und Schulter) als auf das Rindfleisch von Central Texas. Es verwendet Hickory-Holz statt Post Oak und bietet süße, tomatenbasierte Saucen ähnlich dem Memphis-Stil, im Gegensatz zur trockenen, rindfleischzentrierten Tradition von Central Texas.",
          nl: "East Texas BBQ, beïnvloed door de nabijheid van het Diepe Zuiden, richt zich meer op varken (ribben en schouder) dan op het rundvlees van Central Texas. Het gebruikt hickory hout in plaats van post oak en bevat zoete, tomaat-gebaseerde sauzen vergelijkbaar met Memphis stijl, in contrast met Central Texas's droge, rundvlees-gerichte traditie."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  } else if (typeof window !== 'undefined') {
    window.level6 = level6;
  }
})();
