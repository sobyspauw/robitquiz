// Barbecue Quiz - Level 1: Basic Barbecue Knowledge
(function() {
  const level1 = {
    name: {
      en: "Barbecue Level 1",
      es: "Barbacoa Nivel 1",
      de: "Grillen Stufe 1",
      nl: "Barbecue Level 1"
    },
    questions: [
      {
        question: {
          en: "What is the main difference between grilling and barbecuing?",
          es: "¿Cuál es la principal diferencia entre asar a la parrilla y hacer barbacoa?",
          de: "Was ist der Hauptunterschied zwischen Grillen und Barbecue?",
          nl: "Wat is het belangrijkste verschil tussen grillen en barbecueën?"
        },
        options: [
          { en: "Barbecue uses low heat and slow cooking, grilling uses high heat and fast cooking", es: "La barbacoa usa calor bajo y cocción lenta, asar usa calor alto y cocción rápida", de: "Barbecue nutzt niedrige Hitze und langsames Kochen, Grillen nutzt hohe Hitze und schnelles Kochen", nl: "Barbecue gebruikt lage hitte en langzaam koken, grillen gebruikt hoge hitte en snel koken" },
          { en: "They are exactly the same thing", es: "Son exactamente lo mismo", de: "Sie sind genau dasselbe", nl: "Ze zijn precies hetzelfde" },
          { en: "Barbecue is only for meat, grilling is for vegetables", es: "La barbacoa es solo para carne, asar es para verduras", de: "Barbecue ist nur für Fleisch, Grillen ist für Gemüse", nl: "Barbecue is alleen voor vlees, grillen is voor groenten" },
          { en: "Barbecue uses electricity, grilling uses gas", es: "La barbacoa usa electricidad, asar usa gas", de: "Barbecue nutzt Elektrizität, Grillen nutzt Gas", nl: "Barbecue gebruikt elektriciteit, grillen gebruikt gas" }
        ],
        correct: 0,
        explanation: {
          en: "True barbecue involves slow cooking at low temperatures (225-275°F) for hours, while grilling is quick cooking at high heat (400°F+) for minutes.",
          es: "La verdadera barbacoa implica cocción lenta a temperaturas bajas (107-135°C) durante horas, mientras que asar es cocción rápida a calor alto (200°C+) durante minutos.",
          de: "Echtes Barbecue beinhaltet langsames Kochen bei niedrigen Temperaturen (107-135°C) für Stunden, während Grillen schnelles Kochen bei hoher Hitze (200°C+) für Minuten ist.",
          nl: "Echte barbecue houdt langzaam koken bij lage temperaturen (107-135°C) gedurende uren in, terwijl grillen snel koken bij hoge hitte (200°C+) gedurende minuten is."
        }
      },
      {
        question: {
          en: "What type of wood is commonly used for smoking barbecue?",
          es: "¿Qué tipo de madera se usa comúnmente para ahumar barbacoa?",
          de: "Welche Art von Holz wird häufig zum Räuchern von Barbecue verwendet?",
          nl: "Welk type hout wordt vaak gebruikt voor het roken van barbecue?"
        },
        options: [
          { en: "Hickory", es: "Nogal americano", de: "Hickory", nl: "Hickory" },
          { en: "Pine", es: "Pino", de: "Kiefer", nl: "Den" },
          { en: "Eucalyptus", es: "Eucalipto", de: "Eukalyptus", nl: "Eucalyptus" },
          { en: "Bamboo", es: "Bambú", de: "Bambus", nl: "Bamboe" }
        ],
        correct: 0,
        explanation: {
          en: "Hickory is one of the most popular smoking woods, providing a strong, bacon-like flavor. Pine and other resinous woods should never be used as they can be toxic.",
          es: "El nogal americano es una de las maderas de ahumado más populares, proporcionando un sabor fuerte similar al tocino. El pino y otras maderas resinosas nunca deben usarse ya que pueden ser tóxicas.",
          de: "Hickory ist eines der beliebtesten Räucherhölzer und verleiht einen starken, speckähnlichen Geschmack. Kiefer und andere harzige Hölzer sollten niemals verwendet werden, da sie giftig sein können.",
          nl: "Hickory is een van de populairste rookhoutsoorten en geeft een sterke, spekachtige smaak. Den en andere harsrijke houtsoorten mogen nooit worden gebruikt omdat ze giftig kunnen zijn."
        }
      },
      {
        question: {
          en: "What does 'low and slow' mean in barbecue cooking?",
          es: "¿Qué significa 'bajo y lento' en la cocción de barbacoa?",
          de: "Was bedeutet 'niedrig und langsam' beim Barbecue-Kochen?",
          nl: "Wat betekent 'laag en langzaam' bij barbecue koken?"
        },
        options: [
          { en: "Cooking at low temperature for a long time", es: "Cocinar a baja temperatura durante mucho tiempo", de: "Bei niedriger Temperatur für lange Zeit kochen", nl: "Koken op lage temperatuur gedurende lange tijd" },
          { en: "Cooking very quickly at high heat", es: "Cocinar muy rápido a fuego alto", de: "Sehr schnell bei hoher Hitze kochen", nl: "Heel snel koken op hoge hitte" },
          { en: "Using less seasoning", es: "Usar menos condimentos", de: "Weniger Gewürze verwenden", nl: "Minder kruiden gebruiken" },
          { en: "Cooking underground", es: "Cocinar bajo tierra", de: "Unterirdisch kochen", nl: "Ondergronds koken" }
        ],
        correct: 0,
        explanation: {
          en: "'Low and slow' is the fundamental principle of barbecue - cooking tough cuts of meat at temperatures around 225-275°F for several hours to break down connective tissues.",
          es: "'Bajo y lento' es el principio fundamental de la barbacoa - cocinar cortes duros de carne a temperaturas alrededor de 107-135°C durante varias horas para descomponer los tejidos conectivos.",
          de: "'Niedrig und langsam' ist das Grundprinzip des Barbecue - das Kochen zäher Fleischstücke bei Temperaturen um 107-135°C für mehrere Stunden, um Bindegewebe abzubauen.",
          nl: "'Laag en langzaam' is het fundamentele principe van barbecue - het koken van taai vlees op temperaturen rond 107-135°C gedurende enkele uren om bindweefsel af te breken."
        }
      },
      {
        question: {
          en: "What is a dry rub in barbecue?",
          es: "¿Qué es un dry rub en barbacoa?",
          de: "Was ist ein Dry Rub beim Barbecue?",
          nl: "Wat is een dry rub bij barbecue?"
        },
        options: [
          { en: "A mixture of spices and herbs applied to meat before cooking", es: "Una mezcla de especias y hierbas aplicada a la carne antes de cocinar", de: "Eine Mischung aus Gewürzen und Kräutern, die vor dem Kochen auf Fleisch aufgetragen wird", nl: "Een mengsel van kruiden en specerijen dat voor het koken op vlees wordt aangebracht" },
          { en: "A way to clean the grill", es: "Una forma de limpiar la parrilla", de: "Eine Methode zum Reinigen des Grills", nl: "Een manier om de grill schoon te maken" },
          { en: "A type of barbecue sauce", es: "Un tipo de salsa barbacoa", de: "Eine Art Barbecue-Sauce", nl: "Een soort barbecuesaus" },
          { en: "A cooking technique without oil", es: "Una técnica de cocción sin aceite", de: "Eine Kochtechnik ohne Öl", nl: "Een kooktechniek zonder olie" }
        ],
        correct: 0,
        explanation: {
          en: "A dry rub is a blend of salt, sugar, spices, and herbs that is massaged into meat before cooking. It forms a flavorful crust and helps preserve moisture.",
          es: "Un dry rub es una mezcla de sal, azúcar, especias y hierbas que se masajea en la carne antes de cocinar. Forma una costra sabrosa y ayuda a preservar la humedad.",
          de: "Ein Dry Rub ist eine Mischung aus Salz, Zucker, Gewürzen und Kräutern, die vor dem Kochen in das Fleisch einmassiert wird. Es bildet eine geschmackvolle Kruste und hilft, Feuchtigkeit zu bewahren.",
          nl: "Een dry rub is een mengsel van zout, suiker, kruiden en specerijen dat voor het koken in het vlees wordt gemasseerd. Het vormt een smaakvolle korst en helpt vocht te behouden."
        }
      },
      {
        question: {
          en: "What is the 'danger zone' temperature range for food safety?",
          es: "¿Cuál es el rango de temperatura de 'zona peligrosa' para la seguridad alimentaria?",
          de: "Was ist der 'Gefahrenzone'-Temperaturbereich für Lebensmittelsicherheit?",
          nl: "Wat is het 'gevaarzone' temperatuurbereik voor voedselveiligheid?"
        },
        options: [
          { en: "40°F to 140°F (4°C to 60°C)", es: "40°F a 140°F (4°C a 60°C)", de: "40°F bis 140°F (4°C bis 60°C)", nl: "40°F tot 140°F (4°C tot 60°C)" },
          { en: "32°F to 100°F (0°C to 38°C)", es: "32°F a 100°F (0°C a 38°C)", de: "32°F bis 100°F (0°C bis 38°C)", nl: "32°F tot 100°F (0°C tot 38°C)" },
          { en: "60°F to 180°F (16°C to 82°C)", es: "60°F a 180°F (16°C a 82°C)", de: "60°F bis 180°F (16°C bis 82°C)", nl: "60°F tot 180°F (16°C tot 82°C)" },
          { en: "100°F to 200°F (38°C to 93°C)", es: "100°F a 200°F (38°C a 93°C)", de: "100°F bis 200°F (38°C bis 93°C)", nl: "100°F tot 200°F (38°C tot 93°C)" }
        ],
        correct: 0,
        explanation: {
          en: "The danger zone is 40°F to 140°F (4°C to 60°C) where bacteria multiply rapidly. Food should not be kept in this temperature range for more than 2 hours.",
          es: "La zona peligrosa es de 40°F a 140°F (4°C a 60°C) donde las bacterias se multiplican rápidamente. La comida no debe mantenerse en este rango de temperatura por más de 2 horas.",
          de: "Die Gefahrenzone ist 40°F bis 140°F (4°C bis 60°C), wo sich Bakterien schnell vermehren. Lebensmittel sollten nicht länger als 2 Stunden in diesem Temperaturbereich gehalten werden.",
          nl: "De gevaarzone is 40°F tot 140°F (4°C tot 60°C) waar bacteriën zich snel vermenigvuldigen. Voedsel moet niet langer dan 2 uur in dit temperatuurbereik worden gehouden."
        }
      },
      {
        question: {
          en: "What is the best cut of meat for barbecue beginners?",
          es: "¿Cuál es el mejor corte de carne para principiantes en barbacoa?",
          de: "Was ist der beste Fleischstück für Barbecue-Anfänger?",
          nl: "Wat is het beste stuk vlees voor barbecue beginners?"
        },
        options: [
          { en: "Pork shoulder/Boston butt", es: "Paleta de cerdo/Boston butt", de: "Schweineschulter/Boston Butt", nl: "Varkensschouder/Boston butt" },
          { en: "Beef tenderloin", es: "Solomillo de res", de: "Rinderfilet", nl: "Ossenhaas" },
          { en: "Lamb chops", es: "Chuletas de cordero", de: "Lammkoteletts", nl: "Lamskoteletjes" },
          { en: "Whole chicken", es: "Pollo entero", de: "Ganzes Huhn", nl: "Hele kip" }
        ],
        correct: 0,
        explanation: {
          en: "Pork shoulder is very forgiving due to its high fat content and connective tissue. It's hard to overcook and becomes tender even if cooking time or temperature varies.",
          es: "La paleta de cerdo es muy tolerante debido a su alto contenido de grasa y tejido conectivo. Es difícil de sobrecocinar y se vuelve tierna incluso si el tiempo de cocción o la temperatura varía.",
          de: "Schweineschulter ist sehr verzeihend aufgrund ihres hohen Fettgehalts und Bindegewebes. Sie ist schwer zu überkochen und wird zart, auch wenn Kochzeit oder Temperatur variiert.",
          nl: "Varkensschouder is zeer vergevingsgezind vanwege het hoge vetgehalte en bindweefsel. Het is moeilijk te overbereiden en wordt mals zelfs als kooktijd of temperatuur varieert."
        }
      },
      {
        question: {
          en: "What is the purpose of wrapping meat in foil during barbecue?",
          es: "¿Cuál es el propósito de envolver la carne en papel aluminio durante la barbacoa?",
          de: "Was ist der Zweck des Einwickelns von Fleisch in Folie während des Barbecues?",
          nl: "Wat is het doel van het inwikkelen van vlees in folie tijdens barbecue?"
        },
        options: [
          { en: "To speed up cooking and keep meat moist", es: "Para acelerar la cocción y mantener la carne húmeda", de: "Um das Kochen zu beschleunigen und das Fleisch feucht zu halten", nl: "Om het koken te versnellen en vlees vochtig te houden" },
          { en: "To make the meat taste better", es: "Para hacer que la carne sepa mejor", de: "Um das Fleisch besser schmecken zu lassen", nl: "Om het vlees beter te laten smaken" },
          { en: "To prevent the meat from burning", es: "Para evitar que la carne se queme", de: "Um zu verhindern, dass das Fleisch verbrennt", nl: "Om te voorkomen dat het vlees verbrandt" },
          { en: "To make cleaning easier", es: "Para facilitar la limpieza", de: "Um die Reinigung zu erleichtern", nl: "Om het schoonmaken makkelijker te maken" }
        ],
        correct: 0,
        explanation: {
          en: "Wrapping (called 'Texas Crutch') helps meat power through the 'stall' - a period where internal temperature plateaus. It speeds cooking and prevents moisture loss.",
          es: "Envolver (llamado 'Texas Crutch') ayuda a la carne a superar el 'estancamiento' - un período donde la temperatura interna se estabiliza. Acelera la cocción y previene la pérdida de humedad.",
          de: "Das Einwickeln (genannt 'Texas Crutch') hilft dem Fleisch durch den 'Stall' - eine Periode, in der die Innentemperatur stagniert. Es beschleunigt das Kochen und verhindert Feuchtigkeitsverlust.",
          nl: "Inwikkelen (genaamd 'Texas Crutch') helpt vlees door de 'stall' - een periode waarin de interne temperatuur stagneert. Het versnelt het koken en voorkomt vochtverlies."
        }
      },
      {
        question: {
          en: "What temperature should pork be cooked to for food safety?",
          es: "¿A qué temperatura debe cocinarse el cerdo para la seguridad alimentaria?",
          de: "Auf welche Temperatur sollte Schweinefleisch für Lebensmittelsicherheit gekocht werden?",
          nl: "Op welke temperatuur moet varkensvlees worden gekookt voor voedselveiligheid?"
        },
        options: [
          { en: "145°F (63°C) for whole cuts", es: "145°F (63°C) para cortes enteros", de: "145°F (63°C) für ganze Stücke", nl: "145°F (63°C) voor hele stukken" },
          { en: "180°F (82°C)", es: "180°F (82°C)", de: "180°F (82°C)", nl: "180°F (82°C)" },
          { en: "200°F (93°C)", es: "200°F (93°C)", de: "200°F (93°C)", nl: "200°F (93°C)" },
          { en: "120°F (49°C)", es: "120°F (49°C)", de: "120°F (49°C)", nl: "120°F (49°C)" }
        ],
        correct: 0,
        explanation: {
          en: "The USDA recommends cooking whole pork cuts to 145°F (63°C) with a 3-minute rest. However, barbecue pork shoulder is often cooked to 195-205°F for tenderness.",
          es: "El USDA recomienda cocinar cortes enteros de cerdo a 145°F (63°C) con un descanso de 3 minutos. Sin embargo, la paleta de cerdo barbacoa a menudo se cocina a 195-205°F para suavidad.",
          de: "Das USDA empfiehlt, ganze Schweinefleischstücke auf 145°F (63°C) mit 3-minütiger Ruhe zu kochen. Jedoch wird Barbecue-Schweineschulter oft auf 195-205°F für Zartheit gekocht.",
          nl: "De USDA beveelt aan hele varkensstukken te koken tot 145°F (63°C) met 3 minuten rust. Echter, barbecue varkensschouder wordt vaak gekookt tot 195-205°F voor malheid."
        }
      },
      {
        question: {
          en: "What is the main ingredient in most barbecue rubs?",
          es: "¿Cuál es el ingrediente principal en la mayoría de los aderezos para barbacoa?",
          de: "Was ist die Hauptzutat in den meisten Barbecue-Rubs?",
          nl: "Wat is het hoofdingrediënt in de meeste barbecue rubs?"
        },
        options: [
          { en: "Salt", es: "Sal", de: "Salz", nl: "Zout" },
          { en: "Pepper", es: "Pimienta", de: "Pfeffer", nl: "Peper" },
          { en: "Sugar", es: "Azúcar", de: "Zucker", nl: "Suiker" },
          { en: "Paprika", es: "Pimentón", de: "Paprika", nl: "Paprika" }
        ],
        correct: 0,
        explanation: {
          en: "Salt is the foundation of most rubs as it draws out moisture, concentrates flavors, and helps create the bark (crust) during cooking.",
          es: "La sal es la base de la mayoría de los aderezos ya que extrae humedad, concentra sabores y ayuda a crear la corteza durante la cocción.",
          de: "Salz ist die Grundlage der meisten Rubs, da es Feuchtigkeit entzieht, Aromen konzentriert und hilft, die Rinde (Kruste) während des Kochens zu bilden.",
          nl: "Zout is de basis van de meeste rubs omdat het vocht onttrekt, smaken concentreert en helpt de korst te vormen tijdens het koken."
        }
      },
      {
        question: {
          en: "What is 'bark' in barbecue terminology?",
          es: "¿Qué es 'bark' en terminología de barbacoa?",
          de: "Was ist 'Bark' in der Barbecue-Terminologie?",
          nl: "Wat is 'bark' in barbecue terminologie?"
        },
        options: [
          { en: "The dark, flavorful crust that forms on the outside of smoked meat", es: "La corteza oscura y sabrosa que se forma en el exterior de la carne ahumada", de: "Die dunkle, geschmackvolle Kruste, die sich auf der Außenseite von geräuchertem Fleisch bildet", nl: "De donkere, smaakvolle korst die zich vormt aan de buitenkant van gerookt vlees" },
          { en: "The wood used for smoking", es: "La madera usada para ahumar", de: "Das zum Räuchern verwendete Holz", nl: "Het hout dat wordt gebruikt voor het roken" },
          { en: "The sound meat makes when cooking", es: "El sonido que hace la carne al cocinar", de: "Das Geräusch, das Fleisch beim Kochen macht", nl: "Het geluid dat vlees maakt tijdens het koken" },
          { en: "A type of barbecue sauce", es: "Un tipo de salsa barbacoa", de: "Eine Art Barbecue-Sauce", nl: "Een soort barbecuesaus" }
        ],
        correct: 0,
        explanation: {
          en: "Bark is the dark, caramelized exterior crust that develops on smoked meat from the Maillard reaction and spice rub. It's highly prized for its intense flavor and texture.",
          es: "La bark es la corteza exterior oscura y caramelizada que se desarrolla en la carne ahumada por la reacción de Maillard y el aderezo de especias. Es muy valorada por su sabor intenso y textura.",
          de: "Bark ist die dunkle, karamelisierte äußere Kruste, die sich auf geräuchertem Fleisch durch die Maillard-Reaktion und Gewürzrub entwickelt. Sie ist sehr geschätzt für ihren intensiven Geschmack und ihre Textur.",
          nl: "Bark is de donkere, gekarameliseerde buitenkorst die zich ontwikkelt op gerookt vlees door de Maillard-reactie en kruidenrub. Het wordt zeer gewaardeerd om zijn intense smaak en textuur."
        }
      },
      {
        question: {
          en: "What type of charcoal burns hotter and cleaner?",
          es: "¿Qué tipo de carbón quema más caliente y limpio?",
          de: "Welche Art von Holzkohle brennt heißer und sauberer?",
          nl: "Welk type houtskool brandt heter en schoner?"
        },
        options: [
          { en: "Lump charcoal", es: "Carbón en trozos", de: "Stückkohle", nl: "Klomp houtskool" },
          { en: "Briquettes", es: "Briquetas", de: "Briketts", nl: "Briketten" },
          { en: "Gas", es: "Gas", de: "Gas", nl: "Gas" },
          { en: "Electric coils", es: "Bobinas eléctricas", de: "Elektrische Spulen", nl: "Elektrische spoelen" }
        ],
        correct: 0,
        explanation: {
          en: "Lump charcoal is made from pure wood with no additives, burns hotter, lights faster, and produces less ash than briquettes, which contain fillers and binders.",
          es: "El carbón en trozos está hecho de madera pura sin aditivos, quema más caliente, se enciende más rápido y produce menos ceniza que las briquetas, que contienen rellenos y aglutinantes.",
          de: "Stückkohle wird aus reinem Holz ohne Zusätze hergestellt, brennt heißer, entzündet sich schneller und produziert weniger Asche als Briketts, die Füllstoffe und Bindemittel enthalten.",
          nl: "Klomp houtskool is gemaakt van puur hout zonder toevoegingen, brandt heter, ontsteekt sneller en produceert minder as dan briketten, die vullers en bindmiddelen bevatten."
        }
      },
      {
        question: {
          en: "What is the 'stall' in barbecue cooking?",
          es: "¿Qué es el 'estancamiento' en la cocción de barbacoa?",
          de: "Was ist der 'Stall' beim Barbecue-Kochen?",
          nl: "Wat is de 'stall' bij barbecue koken?"
        },
        options: [
          { en: "When the internal temperature stops rising for hours", es: "Cuando la temperatura interna deja de subir durante horas", de: "Wenn die Innentemperatur stundenlang nicht mehr steigt", nl: "Wanneer de interne temperatuur urenlang niet meer stijgt" },
          { en: "When the fire goes out", es: "Cuando el fuego se apaga", de: "Wenn das Feuer ausgeht", nl: "Wanneer het vuur uitgaat" },
          { en: "When you run out of wood", es: "Cuando se acaba la madera", de: "Wenn das Holz ausgeht", nl: "Wanneer je geen hout meer hebt" },
          { en: "When the meat is overcooked", es: "Cuando la carne está sobrecocida", de: "Wenn das Fleisch überkocht ist", nl: "Wanneer het vlees overbakken is" }
        ],
        correct: 0,
        explanation: {
          en: "The stall occurs when evaporative cooling from moisture on the meat's surface balances the heat input, causing temperature to plateau around 150-170°F.",
          es: "El estancamiento ocurre cuando el enfriamiento evaporativo de la humedad en la superficie de la carne equilibra la entrada de calor, causando que la temperatura se estabilice alrededor de 150-170°F.",
          de: "Der Stall tritt auf, wenn die Verdunstungskühlung von Feuchtigkeit auf der Fleischoberfläche die Wärmezufuhr ausgleicht, wodurch die Temperatur um 150-170°F stagniert.",
          nl: "De stall treedt op wanneer verdampingskoeling van vocht op het vleeoppervlak de warmte-inbreng balanceert, waardoor de temperatuur stagneert rond 150-170°F."
        }
      },
      {
        question: {
          en: "What is the 'Texas Crutch' method?",
          es: "¿Qué es el método 'Texas Crutch'?",
          de: "Was ist die 'Texas Crutch'-Methode?",
          nl: "Wat is de 'Texas Crutch' methode?"
        },
        options: [
          { en: "Wrapping meat in foil or paper to power through the stall", es: "Envolver la carne en papel aluminio o papel para superar el estancamiento", de: "Fleisch in Folie oder Papier wickeln, um durch den Stall zu kommen", nl: "Vlees inwikkelen in folie of papier om door de stall heen te komen" },
          { en: "Using a special Texas-made grill", es: "Usar una parrilla especial hecha en Texas", de: "Einen speziellen Texas-Grill verwenden", nl: "Een speciale Texas-gemaakte grill gebruiken" },
          { en: "A way of seasoning meat", es: "Una forma de sazonar la carne", de: "Eine Art, Fleisch zu würzen", nl: "Een manier om vlees te kruiden" },
          { en: "Cooking only with mesquite wood", es: "Cocinar solo con madera de mezquite", de: "Nur mit Mesquite-Holz kochen", nl: "Alleen koken met mesquite hout" }
        ],
        correct: 0,
        explanation: {
          en: "The Texas Crutch involves wrapping meat in foil or butcher paper when it hits the stall, creating a steam environment that speeds up cooking and maintains moisture.",
          es: "El Texas Crutch implica envolver la carne en papel aluminio o papel de carnicero cuando golpea el estancamiento, creando un ambiente de vapor que acelera la cocción y mantiene la humedad.",
          de: "Die Texas Crutch beinhaltet das Einwickeln von Fleisch in Folie oder Metzgerpapier, wenn es den Stall erreicht, wodurch eine Dampfumgebung entsteht, die das Kochen beschleunigt und Feuchtigkeit bewahrt.",
          nl: "De Texas Crutch houdt in dat vlees wordt ingepakt in folie of slagerspapier wanneer het de stall bereikt, waardoor een stoomomgeving ontstaat die het koken versnelt en vocht behoudt."
        }
      },
      {
        question: {
          en: "What should you do first when setting up a charcoal grill for barbecue?",
          es: "¿Qué debes hacer primero al configurar una parrilla de carbón para barbacoa?",
          de: "Was solltest du zuerst tun, wenn du einen Holzkohlegrill für Barbecue aufstellst?",
          nl: "Wat moet je eerst doen bij het opzetten van een houtskoolbarbecue?"
        },
        options: [
          { en: "Clean the grill grates", es: "Limpiar las rejillas de la parrilla", de: "Die Grillroste reinigen", nl: "De grillroosters schoonmaken" },
          { en: "Light the charcoal immediately", es: "Encender el carbón inmediatamente", de: "Die Holzkohle sofort anzünden", nl: "De houtskool onmiddellijk aansteken" },
          { en: "Add wood chips", es: "Añadir astillas de madera", de: "Holzspäne hinzufügen", nl: "Houten chips toevoegen" },
          { en: "Put the meat on", es: "Poner la carne", de: "Das Fleisch auflegen", nl: "Het vlees erop leggen" }
        ],
        correct: 0,
        explanation: {
          en: "Always clean the grill grates first to remove old food residue and grease, which can cause flare-ups and impart off-flavors to your food.",
          es: "Siempre limpia las rejillas de la parrilla primero para eliminar residuos de comida vieja y grasa, que pueden causar llamaradas e impartir sabores desagradables a tu comida.",
          de: "Reinige immer zuerst die Grillroste, um alte Speisereste und Fett zu entfernen, die Stichflammen verursachen und unerwünschte Geschmäcker auf dein Essen übertragen können.",
          nl: "Maak altijd eerst de grillroosters schoon om oude voedselresten en vet te verwijderen, wat vlammen kan veroorzaken en vieze smaken aan je eten kan geven."
        }
      },
      {
        question: {
          en: "What is the ideal internal temperature for smoked brisket?",
          es: "¿Cuál es la temperatura interna ideal para el brisket ahumado?",
          de: "Was ist die ideale Innentemperatur für geräucherte Rinderbrust?",
          nl: "Wat is de ideale interne temperatuur voor gerookte brisket?"
        },
        options: [
          { en: "195-205°F (90-96°C)", es: "195-205°F (90-96°C)", de: "195-205°F (90-96°C)", nl: "195-205°F (90-96°C)" },
          { en: "145°F (63°C)", es: "145°F (63°C)", de: "145°F (63°C)", nl: "145°F (63°C)" },
          { en: "160°F (71°C)", es: "160°F (71°C)", de: "160°F (71°C)", nl: "160°F (71°C)" },
          { en: "220°F (104°C)", es: "220°F (104°C)", de: "220°F (104°C)", nl: "220°F (104°C)" }
        ],
        correct: 0,
        explanation: {
          en: "Brisket needs to reach 195-205°F internally to break down the tough connective tissues into gelatin, making it tender enough to slice or pull apart.",
          es: "El brisket necesita alcanzar 195-205°F internamente para descomponer los tejidos conectivos duros en gelatina, haciéndolo lo suficientemente tierno para cortar o desmenuzar.",
          de: "Rinderbrust muss innen 195-205°F erreichen, um die zähen Bindegewebe in Gelatine zu zerlegen, wodurch sie zart genug wird zum Schneiden oder Auseinanderziehen.",
          nl: "Brisket moet intern 195-205°F bereiken om het taaie bindweefsel af te breken tot gelatine, waardoor het mals genoeg wordt om te snijden of uit elkaar te trekken."
        }
      },
      {
        question: {
          en: "How long should you let meat rest after barbecuing?",
          es: "¿Cuánto tiempo debes dejar reposar la carne después de la barbacoa?",
          de: "Wie lange solltest du Fleisch nach dem Barbecue ruhen lassen?",
          nl: "Hoe lang moet je vlees laten rusten na het barbecueën?"
        },
        options: [
          { en: "10-30 minutes depending on the size", es: "10-30 minutos dependiendo del tamaño", de: "10-30 Minuten je nach Größe", nl: "10-30 minuten afhankelijk van de grootte" },
          { en: "1 hour minimum", es: "1 hora mínimo", de: "Mindestens 1 Stunde", nl: "Minimaal 1 uur" },
          { en: "No resting needed", es: "No necesita reposo", de: "Keine Ruhe erforderlich", nl: "Geen rust nodig" },
          { en: "2-3 hours", es: "2-3 horas", de: "2-3 Stunden", nl: "2-3 uur" }
        ],
        correct: 0,
        explanation: {
          en: "Resting allows juices to redistribute throughout the meat. Small cuts need 10-15 minutes, while large roasts may need 30 minutes or more.",
          es: "El reposo permite que los jugos se redistribuyan por toda la carne. Los cortes pequeños necesitan 10-15 minutos, mientras que los asados grandes pueden necesitar 30 minutos o más.",
          de: "Das Ruhen ermöglicht es den Säften, sich im ganzen Fleisch zu verteilen. Kleine Stücke brauchen 10-15 Minuten, während große Braten 30 Minuten oder mehr brauchen können.",
          nl: "Rusten stelt sappen in staat zich door het vlees te herverdelen. Kleine stukken hebben 10-15 minuten nodig, terwijl grote braadstukken 30 minuten of meer nodig kunnen hebben."
        }
      },
      {
        question: {
          en: "What is the best way to check if charcoal is ready for cooking?",
          es: "¿Cuál es la mejor manera de verificar si el carbón está listo para cocinar?",
          de: "Was ist der beste Weg zu prüfen, ob die Holzkohle zum Kochen bereit ist?",
          nl: "Wat is de beste manier om te controleren of houtskool klaar is om te koken?"
        },
        options: [
          { en: "When coals are covered with white ash", es: "Cuando los carbones están cubiertos de ceniza blanca", de: "Wenn die Kohlen mit weißer Asche bedeckt sind", nl: "Wanneer de kolen bedekt zijn met witte as" },
          { en: "When flames are still visible", es: "Cuando las llamas aún son visibles", de: "Wenn Flammen noch sichtbar sind", nl: "Wanneer vlammen nog zichtbaar zijn" },
          { en: "After 5 minutes of lighting", es: "Después de 5 minutos de encendido", de: "Nach 5 Minuten Anzünden", nl: "Na 5 minuten aansteken" },
          { en: "When they turn black", es: "Cuando se vuelven negros", de: "Wenn sie schwarz werden", nl: "Wanneer ze zwart worden" }
        ],
        correct: 0,
        explanation: {
          en: "Charcoal is ready when the flames die down and the coals are covered with a thin layer of white ash. This indicates they're burning at a consistent temperature.",
          es: "El carbón está listo cuando las llamas se apagan y los carbones están cubiertos con una capa delgada de ceniza blanca. Esto indica que están quemando a una temperatura consistente.",
          de: "Holzkohle ist bereit, wenn die Flammen nachlassen und die Kohlen mit einer dünnen Schicht weißer Asche bedeckt sind. Dies zeigt an, dass sie bei einer konstanten Temperatur brennen.",
          nl: "Houtskool is klaar wanneer de vlammen doven en de kolen bedekt zijn met een dunne laag witte as. Dit geeft aan dat ze op een consistente temperatuur branden."
        }
      },
      {
        question: {
          en: "What makes barbecue different from other cooking methods?",
          es: "¿Qué hace que la barbacoa sea diferente de otros métodos de cocción?",
          de: "Was macht Barbecue anders als andere Kochmethoden?",
          nl: "Wat maakt barbecue anders dan andere kookmethoden?"
        },
        options: [
          { en: "The combination of smoke, low temperature, and long cooking time", es: "La combinación de humo, baja temperatura y largo tiempo de cocción", de: "Die Kombination aus Rauch, niedriger Temperatur und langer Kochzeit", nl: "De combinatie van rook, lage temperatuur en lange kooktijd" },
          { en: "It only uses expensive cuts of meat", es: "Solo usa cortes caros de carne", de: "Es verwendet nur teure Fleischstücke", nl: "Het gebruikt alleen dure stukken vlees" },
          { en: "It requires special equipment", es: "Requiere equipo especial", de: "Es erfordert spezielle Ausrüstung", nl: "Het vereist speciale apparatuur" },
          { en: "It's always done outdoors", es: "Siempre se hace al aire libre", de: "Es wird immer im Freien gemacht", nl: "Het wordt altijd buiten gedaan" }
        ],
        correct: 0,
        explanation: {
          en: "Barbecue's unique character comes from the 'holy trinity' of smoke for flavor, low heat to break down tough fibers, and time to allow chemical reactions that create tenderness.",
          es: "El carácter único de la barbacoa proviene de la 'trinidad sagrada' de humo para sabor, calor bajo para descomponer fibras duras, y tiempo para permitir reacciones químicas que crean ternura.",
          de: "Barbecues einzigartiger Charakter kommt von der 'heiligen Dreifaltigkeit' aus Rauch für Geschmack, niedriger Hitze zum Aufbrechen zäher Fasern, und Zeit für chemische Reaktionen, die Zartheit schaffen.",
          nl: "Barbecue's unieke karakter komt van de 'heilige drie-eenheid' van rook voor smaak, lage hitte om taaie vezels af te breken, en tijd om chemische reacties mogelijk te maken die malheid creëren."
        }
      },
      {
        question: {
          en: "Why should you always clean your grill grates before cooking?",
          es: "¿Por qué siempre debes limpiar las rejillas de la parrilla antes de cocinar?",
          de: "Warum solltest du die Grillroste vor dem Kochen immer reinigen?",
          nl: "Waarom moet je de grillroosters altijd schoonmaken voor het koken?"
        },
        options: [
          { en: "Prevents sticking and removes old food residue that can cause flare-ups", es: "Previene que se pegue y elimina residuos de comida vieja que pueden causar llamaradas", de: "Verhindert Ankleben und entfernt alte Speisereste, die Stichflammen verursachen können", nl: "Voorkomt aanbakken en verwijdert oude voedselresten die vlammen kunnen veroorzaken" },
          { en: "Makes the grill look better", es: "Hace que la parrilla se vea mejor", de: "Lässt den Grill besser aussehen", nl: "Maakt de grill er beter uitzien" },
          { en: "It's required by health regulations", es: "Es requerido por regulaciones de salud", de: "Es ist durch Gesundheitsvorschriften erforderlich", nl: "Het is vereist door gezondheidsregels" },
          { en: "To make the grates last longer", es: "Para hacer que las rejillas duren más", de: "Damit die Roste länger halten", nl: "Om de roosters langer mee te laten gaan" }
        ],
        correct: 0,
        explanation: {
          en: "Clean grill grates prevent food from sticking and remove old food residue and grease that can cause dangerous flare-ups and impart off-flavors to your food.",
          es: "Las rejillas de parrilla limpias previenen que la comida se pegue y eliminan residuos de comida vieja y grasa que pueden causar llamaradas peligrosas e impartir sabores desagradables a tu comida.",
          de: "Saubere Grillroste verhindern das Ankleben von Lebensmitteln und entfernen alte Speisereste und Fett, die gefährliche Stichflammen verursachen und unerwünschte Aromen auf Ihr Essen übertragen können.",
          nl: "Schone grillroosters voorkomen dat voedsel aanbakt en verwijderen oude voedselresten en vet die gevaarlijke vlammen kunnen veroorzaken en vieze smaken aan je eten kunnen geven."
        }
      },
      {
        question: {
          en: "How long should meat rest after coming off the grill?",
          es: "¿Cuánto tiempo debe reposar la carne después de salir de la parrilla?",
          de: "Wie lange sollte Fleisch nach dem Grillen ruhen?",
          nl: "Hoe lang moet vlees rusten na het van de grill komen?"
        },
        options: [
          { en: "5-10 minutes for steaks, 15-20 for larger cuts", es: "5-10 minutos para bistecs, 15-20 para cortes grandes", de: "5-10 Minuten für Steaks, 15-20 für größere Stücke", nl: "5-10 minuten voor steaks, 15-20 voor grotere stukken" },
          { en: "30 seconds is enough", es: "30 segundos es suficiente", de: "30 Sekunden reichen", nl: "30 seconden is genoeg" },
          { en: "No resting needed, serve immediately", es: "No se necesita reposo, servir inmediatamente", de: "Keine Ruhe nötig, sofort servieren", nl: "Geen rust nodig, direct serveren" },
          { en: "Always rest for exactly 30 minutes", es: "Siempre reposar exactamente 30 minutos", de: "Immer genau 30 Minuten ruhen lassen", nl: "Altijd precies 30 minuten laten rusten" }
        ],
        correct: 0,
        explanation: {
          en: "Resting allows juices to redistribute throughout the meat. Small cuts like steaks need 5-10 minutes, while larger roasts and briskets may need 15-20 minutes or more to achieve optimal juiciness.",
          es: "El reposo permite que los jugos se redistribuyan por toda la carne. Cortes pequeños como bistecs necesitan 5-10 minutos, mientras que asados grandes y briskets pueden necesitan 15-20 minutos o más para lograr jugosidad óptima.",
          de: "Das Ruhen ermöglicht es den Säften, sich im ganzen Fleisch zu verteilen. Kleine Stücke wie Steaks brauchen 5-10 Minuten, während größere Braten und Briskets 15-20 Minuten oder mehr brauchen können für optimale Saftigkeit.",
          nl: "Rusten stelt sappen in staat zich door het vlees te herverdelen. Kleine stukken zoals steaks hebben 5-10 minuten nodig, terwijl grotere braadstukken en briskets 15-20 minuten of meer nodig kunnen hebben voor optimale sappigheid."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();
