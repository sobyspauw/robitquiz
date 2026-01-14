// Barbecue Quiz - Level 1
(function() {
  const level1 = {
    name: {
          "en": "Barbecue Level 1",
          "es": "Barbacoa Nivel 1",
          "de": "Grillen Stufe 1",
          "nl": "Barbecue Level 1"
    },
    questions: [
      {
        question: {
                  "en": "What is the main difference between grilling and barbecuing?",
                  "es": "¿Cuál es la principal diferencia entre asar a la parrilla y hacer barbacoa?",
                  "de": "Was ist der Hauptunterschied zwischen Grillen und Barbecue?",
                  "nl": "Wat is het belangrijkste verschil tussen grillen en barbecueën?"
        },
        options: [
        {
                  "en": "Barbecue uses low heat and slow cooking, grilling uses high heat and fast cooking",
                  "es": "La barbacoa usa calor bajo y cocción lenta, asar usa calor alto y cocción rápida",
                  "de": "Barbecue nutzt niedrige Hitze und langsames Kochen, Grillen nutzt hohe Hitze und schnelles Kochen",
                  "nl": "Barbecue gebruikt lage hitte en langzaam koken, grillen gebruikt hoge hitte en snel koken"
        },
        {
                  "en": "Barbecue uses electricity, grilling uses gas",
                  "es": "La barbacoa usa electricidad, asar usa gas",
                  "de": "Barbecue nutzt Elektrizität, Grillen nutzt Gas",
                  "nl": "Barbecue gebruikt elektriciteit, grillen gebruikt gas"
        },
        {
                  "en": "They are exactly the same thing",
                  "es": "Son exactamente lo mismo",
                  "de": "Sie sind genau dasselbe",
                  "nl": "Ze zijn precies hetzelfde"
        },
        {
                  "en": "Barbecue is only for meat, grilling is for vegetables",
                  "es": "La barbacoa es solo para carne, asar es para verduras",
                  "de": "Barbecue ist nur für Fleisch, Grillen ist für Gemüse",
                  "nl": "Barbecue is alleen voor vlees, grillen is voor groenten"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "True barbecue involves slow cooking at low temperatures (225-275°F) for hours, while grilling is quick cooking at high heat (400°F+) for minutes.",
                  "es": "La verdadera barbacoa implica cocción lenta a temperaturas bajas (107-135°C) durante horas, mientras que asar es cocción rápida a calor alto (200°C+) durante minutos.",
                  "de": "Echtes Barbecue beinhaltet langsames Kochen bei niedrigen Temperaturen (107-135°C) für Stunden, während Grillen schnelles Kochen bei hoher Hitze (200°C+) für Minuten ist.",
                  "nl": "Echte barbecue houdt langzaam koken bij lage temperaturen (107-135°C) gedurende uren in, terwijl grillen snel koken bij hoge hitte (200°C+) gedurende minuten is."
        }
      },
      {
        question: {
                  "en": "What type of wood is commonly used for smoking barbecue?",
                  "es": "¿Qué tipo de madera se usa comúnmente para ahumar barbacoa?",
                  "de": "Welche Art von Holz wird häufig zum Räuchern von Barbecue verwendet?",
                  "nl": "Welk type hout wordt vaak gebruikt voor het roken van barbecue?"
        },
        options: [
        {
                  "en": "Pine",
                  "es": "Pino",
                  "de": "Kiefer",
                  "nl": "Den"
        },
        {
                  "en": "Bamboo",
                  "es": "Bambú",
                  "de": "Bambus",
                  "nl": "Bamboe"
        },
        {
                  "en": "Hickory",
                  "es": "Nogal americano",
                  "de": "Hickory",
                  "nl": "Hickory"
        },
        {
                  "en": "Eucalyptus",
                  "es": "Eucalipto",
                  "de": "Eukalyptus",
                  "nl": "Eucalyptus"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Hickory is one of the most popular smoking woods, providing a strong, bacon-like flavor. Pine and other resinous woods should never be used as they can be toxic.",
                  "es": "El nogal americano es una de las maderas de ahumado más populares, proporcionando un sabor fuerte similar al tocino. El pino y otras maderas resinosas nunca deben usarse ya que pueden ser tóxicas.",
                  "de": "Hickory ist eines der beliebtesten Räucherhölzer und verleiht einen starken, speckähnlichen Geschmack. Kiefer und andere harzige Hölzer sollten niemals verwendet werden, da sie giftig sein können.",
                  "nl": "Hickory is een van de populairste rookhoutsoorten en geeft een sterke, spekachtige smaak. Den en andere harsrijke houtsoorten mogen nooit worden gebruikt omdat ze giftig kunnen zijn."
        }
      },
      {
        question: {
                  "en": "What does 'low and slow' mean in barbecue cooking?",
                  "es": "¿Qué significa 'bajo y lento' en la cocción de barbacoa?",
                  "de": "Was bedeutet 'niedrig und langsam' beim Barbecue-Kochen?",
                  "nl": "Wat betekent 'laag en langzaam' bij barbecue koken?"
        },
        options: [
        {
                  "en": "Using less seasoning",
                  "es": "Usar menos condimentos",
                  "de": "Weniger Gewürze verwenden",
                  "nl": "Minder kruiden gebruiken"
        },
        {
                  "en": "Cooking at low temperature for a long time",
                  "es": "Cocinar a baja temperatura durante mucho tiempo",
                  "de": "Bei niedriger Temperatur für lange Zeit kochen",
                  "nl": "Koken op lage temperatuur gedurende lange tijd"
        },
        {
                  "en": "Cooking very quickly at high heat",
                  "es": "Cocinar muy rápido a fuego alto",
                  "de": "Sehr schnell bei hoher Hitze kochen",
                  "nl": "Heel snel koken op hoge hitte"
        },
        {
                  "en": "Cooking underground",
                  "es": "Cocinar bajo tierra",
                  "de": "Unterirdisch kochen",
                  "nl": "Ondergronds koken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "'Low and slow' is the fundamental principle of barbecue - cooking tough cuts of meat at temperatures around 225-275°F for several hours to break down connective tissues.",
                  "es": "'Bajo y lento' es el principio fundamental de la barbacoa - cocinar cortes duros de carne a temperaturas alrededor de 107-135°C durante varias horas para descomponer los tejidos conectivos.",
                  "de": "'Niedrig und langsam' ist das Grundprinzip des Barbecue - das Kochen zäher Fleischstücke bei Temperaturen um 107-135°C für mehrere Stunden, um Bindegewebe abzubauen.",
                  "nl": "'Laag en langzaam' is het fundamentele principe van barbecue - het koken van taai vlees op temperaturen rond 107-135°C gedurende enkele uren om bindweefsel af te breken."
        }
      },
      {
        question: {
                  "en": "What is a dry rub in barbecue?",
                  "es": "¿Qué es un dry rub en barbacoa?",
                  "de": "Was ist ein Dry Rub beim Barbecue?",
                  "nl": "Wat is een dry rub bij barbecue?"
        },
        options: [
        {
                  "en": "A type of barbecue sauce",
                  "es": "Un tipo de salsa barbacoa",
                  "de": "Eine Art Barbecue-Sauce",
                  "nl": "Een soort barbecuesaus"
        },
        {
                  "en": "A mixture of spices and herbs applied to meat before cooking",
                  "es": "Una mezcla de especias y hierbas aplicada a la carne antes de cocinar",
                  "de": "Eine Mischung aus Gewürzen und Kräutern, die vor dem Kochen auf Fleisch aufgetragen wird",
                  "nl": "Een mengsel van kruiden en specerijen dat voor het koken op vlees wordt aangebracht"
        },
        {
                  "en": "A cooking technique without oil",
                  "es": "Una técnica de cocción sin aceite",
                  "de": "Eine Kochtechnik ohne Öl",
                  "nl": "Een kooktechniek zonder olie"
        },
        {
                  "en": "A way to clean the grill",
                  "es": "Una forma de limpiar la parrilla",
                  "de": "Eine Methode zum Reinigen des Grills",
                  "nl": "Een manier om de grill schoon te maken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "A dry rub is a blend of salt, sugar, spices, and herbs that is massaged into meat before cooking. It forms a flavorful crust and helps preserve moisture.",
                  "es": "Un dry rub es una mezcla de sal, azúcar, especias y hierbas que se masajea en la carne antes de cocinar. Forma una costra sabrosa y ayuda a preservar la humedad.",
                  "de": "Ein Dry Rub ist eine Mischung aus Salz, Zucker, Gewürzen und Kräutern, die vor dem Kochen in das Fleisch einmassiert wird. Es bildet eine geschmackvolle Kruste und hilft, Feuchtigkeit zu bewahren.",
                  "nl": "Een dry rub is een mengsel van zout, suiker, kruiden en specerijen dat voor het koken in het vlees wordt gemasseerd. Het vormt een smaakvolle korst en helpt vocht te behouden."
        }
      },
      {
        question: {
                  "en": "What is the 'danger zone' temperature range for food safety?",
                  "es": "¿Cuál es el rango de temperatura de 'zona peligrosa' para la seguridad alimentaria?",
                  "de": "Was ist der 'Gefahrenzone'-Temperaturbereich für Lebensmittelsicherheit?",
                  "nl": "Wat is het 'gevaarzone' temperatuurbereik voor voedselveiligheid?"
        },
        options: [
        {
                  "en": "40°F to 140°F (4°C to 60°C)",
                  "es": "40°F a 140°F (4°C a 60°C)",
                  "de": "40°F bis 140°F (4°C bis 60°C)",
                  "nl": "40°F tot 140°F (4°C tot 60°C)"
        },
        {
                  "en": "100°F to 200°F (38°C to 93°C)",
                  "es": "100°F a 200°F (38°C a 93°C)",
                  "de": "100°F bis 200°F (38°C bis 93°C)",
                  "nl": "100°F tot 200°F (38°C tot 93°C)"
        },
        {
                  "en": "60°F to 180°F (16°C to 82°C)",
                  "es": "60°F a 180°F (16°C a 82°C)",
                  "de": "60°F bis 180°F (16°C bis 82°C)",
                  "nl": "60°F tot 180°F (16°C tot 82°C)"
        },
        {
                  "en": "32°F to 100°F (0°C to 38°C)",
                  "es": "32°F a 100°F (0°C a 38°C)",
                  "de": "32°F bis 100°F (0°C bis 38°C)",
                  "nl": "32°F tot 100°F (0°C tot 38°C)"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The danger zone is 40°F to 140°F (4°C to 60°C) where bacteria multiply rapidly. Food should not be kept in this temperature range for more than 2 hours.",
                  "es": "La zona peligrosa es de 40°F a 140°F (4°C a 60°C) donde las bacterias se multiplican rápidamente. La comida no debe mantenerse en este rango de temperatura por más de 2 horas.",
                  "de": "Die Gefahrenzone ist 40°F bis 140°F (4°C bis 60°C), wo sich Bakterien schnell vermehren. Lebensmittel sollten nicht länger als 2 Stunden in diesem Temperaturbereich gehalten werden.",
                  "nl": "De gevaarzone is 40°F tot 140°F (4°C tot 60°C) waar bacteriën zich snel vermenigvuldigen. Voedsel moet niet langer dan 2 uur in dit temperatuurbereik worden gehouden."
        }
      },
      {
        question: {
                  "en": "What is the best cut of meat for barbecue beginners?",
                  "es": "¿Cuál es el mejor corte de carne para principiantes en barbacoa?",
                  "de": "Was ist der beste Fleischstück für Barbecue-Anfänger?",
                  "nl": "Wat is het beste stuk vlees voor barbecue beginners?"
        },
        options: [
        {
                  "en": "Beef tenderloin",
                  "es": "Solomillo de res",
                  "de": "Rinderfilet",
                  "nl": "Ossenhaas"
        },
        {
                  "en": "Pork shoulder/Boston butt",
                  "es": "Paleta de cerdo/Boston butt",
                  "de": "Schweineschulter/Boston Butt",
                  "nl": "Varkensschouder/Boston butt"
        },
        {
                  "en": "Lamb chops",
                  "es": "Chuletas de cordero",
                  "de": "Lammkoteletts",
                  "nl": "Lamskoteletjes"
        },
        {
                  "en": "Whole chicken",
                  "es": "Pollo entero",
                  "de": "Ganzes Huhn",
                  "nl": "Hele kip"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Pork shoulder is very forgiving due to its high fat content and connective tissue. It's hard to overcook and becomes tender even if cooking time or temperature varies.",
                  "es": "La paleta de cerdo es muy tolerante debido a su alto contenido de grasa y tejido conectivo. Es difícil de sobrecocinar y se vuelve tierna incluso si el tiempo de cocción o la temperatura varía.",
                  "de": "Schweineschulter ist sehr verzeihend aufgrund ihres hohen Fettgehalts und Bindegewebes. Sie ist schwer zu überkochen und wird zart, auch wenn Kochzeit oder Temperatur variiert.",
                  "nl": "Varkensschouder is zeer vergevingsgezind vanwege het hoge vetgehalte en bindweefsel. Het is moeilijk te overbereiden en wordt mals zelfs als kooktijd of temperatuur varieert."
        }
      },
      {
        question: {
                  "en": "What is the purpose of wrapping meat in foil during barbecue?",
                  "es": "¿Cuál es el propósito de envolver la carne en papel aluminio durante la barbacoa?",
                  "de": "Was ist der Zweck des Einwickelns von Fleisch in Folie während des Barbecues?",
                  "nl": "Wat is het doel van het inwikkelen van vlees in folie tijdens barbecue?"
        },
        options: [
        {
                  "en": "To speed up cooking and keep meat moist",
                  "es": "Para acelerar la cocción y mantener la carne húmeda",
                  "de": "Um das Kochen zu beschleunigen und das Fleisch feucht zu halten",
                  "nl": "Om het koken te versnellen en vlees vochtig te houden"
        },
        {
                  "en": "To make cleaning easier",
                  "es": "Para facilitar la limpieza",
                  "de": "Um die Reinigung zu erleichtern",
                  "nl": "Om het schoonmaken makkelijker te maken"
        },
        {
                  "en": "To make the meat taste better",
                  "es": "Para hacer que la carne sepa mejor",
                  "de": "Um das Fleisch besser schmecken zu lassen",
                  "nl": "Om het vlees beter te laten smaken"
        },
        {
                  "en": "To prevent the meat from burning",
                  "es": "Para evitar que la carne se queme",
                  "de": "Um zu verhindern, dass das Fleisch verbrennt",
                  "nl": "Om te voorkomen dat het vlees verbrandt"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Wrapping (called 'Texas Crutch') helps meat power through the 'stall' - a period where internal temperature plateaus. It speeds cooking and prevents moisture loss.",
                  "es": "Envolver (llamado 'Texas Crutch') ayuda a la carne a superar el 'estancamiento' - un período donde la temperatura interna se estabiliza. Acelera la cocción y previene la pérdida de humedad.",
                  "de": "Das Einwickeln (genannt 'Texas Crutch') hilft dem Fleisch durch den 'Stall' - eine Periode, in der die Innentemperatur stagniert. Es beschleunigt das Kochen und verhindert Feuchtigkeitsverlust.",
                  "nl": "Inwikkelen (genaamd 'Texas Crutch') helpt vlees door de 'stall' - een periode waarin de interne temperatuur stagneert. Het versnelt het koken en voorkomt vochtverlies."
        }
      },
      {
        question: {
                  "en": "What temperature should pork be cooked to for food safety?",
                  "es": "¿A qué temperatura debe cocinarse el cerdo para la seguridad alimentaria?",
                  "de": "Auf welche Temperatur sollte Schweinefleisch für Lebensmittelsicherheit gekocht werden?",
                  "nl": "Op welke temperatuur moet varkensvlees worden gekookt voor voedselveiligheid?"
        },
        options: [
        {
                  "en": "200°F (93°C)",
                  "es": "200°F (93°C)",
                  "de": "200°F (93°C)",
                  "nl": "200°F (93°C)"
        },
        {
                  "en": "180°F (82°C)",
                  "es": "180°F (82°C)",
                  "de": "180°F (82°C)",
                  "nl": "180°F (82°C)"
        },
        {
                  "en": "120°F (49°C)",
                  "es": "120°F (49°C)",
                  "de": "120°F (49°C)",
                  "nl": "120°F (49°C)"
        },
        {
                  "en": "145°F (63°C) for whole cuts",
                  "es": "145°F (63°C) para cortes enteros",
                  "de": "145°F (63°C) für ganze Stücke",
                  "nl": "145°F (63°C) voor hele stukken"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The USDA recommends cooking whole pork cuts to 145°F (63°C) with a 3-minute rest. However, barbecue pork shoulder is often cooked to 195-205°F for tenderness.",
                  "es": "El USDA recomienda cocinar cortes enteros de cerdo a 145°F (63°C) con un descanso de 3 minutos. Sin embargo, la paleta de cerdo barbacoa a menudo se cocina a 195-205°F para suavidad.",
                  "de": "Das USDA empfiehlt, ganze Schweinefleischstücke auf 145°F (63°C) mit 3-minütiger Ruhe zu kochen. Jedoch wird Barbecue-Schweineschulter oft auf 195-205°F für Zartheit gekocht.",
                  "nl": "De USDA beveelt aan hele varkensstukken te koken tot 145°F (63°C) met 3 minuten rust. Echter, barbecue varkensschouder wordt vaak gekookt tot 195-205°F voor malheid."
        }
      },
      {
        question: {
                  "en": "What is the main ingredient in most barbecue rubs?",
                  "es": "¿Cuál es el ingrediente principal en la mayoría de los aderezos para barbacoa?",
                  "de": "Was ist die Hauptzutat in den meisten Barbecue-Rubs?",
                  "nl": "Wat is het hoofdingrediënt in de meeste barbecue rubs?"
        },
        options: [
        {
                  "en": "Sugar",
                  "es": "Azúcar",
                  "de": "Zucker",
                  "nl": "Suiker"
        },
        {
                  "en": "Pepper",
                  "es": "Pimienta",
                  "de": "Pfeffer",
                  "nl": "Peper"
        },
        {
                  "en": "Salt",
                  "es": "Sal",
                  "de": "Salz",
                  "nl": "Zout"
        },
        {
                  "en": "Paprika",
                  "es": "Pimentón",
                  "de": "Paprika",
                  "nl": "Paprika"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Salt is the foundation of most rubs as it draws out moisture, concentrates flavors, and helps create the bark (crust) during cooking.",
                  "es": "La sal es la base de la mayoría de los aderezos ya que extrae humedad, concentra sabores y ayuda a crear la corteza durante la cocción.",
                  "de": "Salz ist die Grundlage der meisten Rubs, da es Feuchtigkeit entzieht, Aromen konzentriert und hilft, die Rinde (Kruste) während des Kochens zu bilden.",
                  "nl": "Zout is de basis van de meeste rubs omdat het vocht onttrekt, smaken concentreert en helpt de korst te vormen tijdens het koken."
        }
      },
      {
        question: {
                  "en": "What is 'bark' in barbecue terminology?",
                  "es": "¿Qué es 'bark' en terminología de barbacoa?",
                  "de": "Was ist 'Bark' in der Barbecue-Terminologie?",
                  "nl": "Wat is 'bark' in barbecue terminologie?"
        },
        options: [
        {
                  "en": "The sound meat makes when cooking",
                  "es": "El sonido que hace la carne al cocinar",
                  "de": "Das Geräusch, das Fleisch beim Kochen macht",
                  "nl": "Het geluid dat vlees maakt tijdens het koken"
        },
        {
                  "en": "The dark, flavorful crust that forms on the outside of smoked meat",
                  "es": "La corteza oscura y sabrosa que se forma en el exterior de la carne ahumada",
                  "de": "Die dunkle, geschmackvolle Kruste, die sich auf der Außenseite von geräuchertem Fleisch bildet",
                  "nl": "De donkere, smaakvolle korst die zich vormt aan de buitenkant van gerookt vlees"
        },
        {
                  "en": "A type of barbecue sauce",
                  "es": "Un tipo de salsa barbacoa",
                  "de": "Eine Art Barbecue-Sauce",
                  "nl": "Een soort barbecuesaus"
        },
        {
                  "en": "The wood used for smoking",
                  "es": "La madera usada para ahumar",
                  "de": "Das zum Räuchern verwendete Holz",
                  "nl": "Het hout dat wordt gebruikt voor het roken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Bark is the dark, caramelized exterior crust that develops on smoked meat from the Maillard reaction and spice rub. It's highly prized for its intense flavor and texture.",
                  "es": "La bark es la corteza exterior oscura y caramelizada que se desarrolla en la carne ahumada por la reacción de Maillard y el aderezo de especias. Es muy valorada por su sabor intenso y textura.",
                  "de": "Bark ist die dunkle, karamelisierte äußere Kruste, die sich auf geräuchertem Fleisch durch die Maillard-Reaktion und Gewürzrub entwickelt. Sie ist sehr geschätzt für ihren intensiven Geschmack und ihre Textur.",
                  "nl": "Bark is de donkere, gekarameliseerde buitenkorst die zich ontwikkelt op gerookt vlees door de Maillard-reactie en kruidenrub. Het wordt zeer gewaardeerd om zijn intense smaak en textuur."
        }
      },
      {
        question: {
                  "en": "What type of charcoal burns hotter and cleaner?",
                  "es": "¿Qué tipo de carbón quema más caliente y limpio?",
                  "de": "Welche Art von Holzkohle brennt heißer und sauberer?",
                  "nl": "Welk type houtskool brandt heter en schoner?"
        },
        options: [
        {
                  "en": "Briquettes",
                  "es": "Briquetas",
                  "de": "Briketts",
                  "nl": "Briketten"
        },
        {
                  "en": "Electric coils",
                  "es": "Bobinas eléctricas",
                  "de": "Elektrische Spulen",
                  "nl": "Elektrische spoelen"
        },
        {
                  "en": "Lump charcoal",
                  "es": "Carbón en trozos",
                  "de": "Stückkohle",
                  "nl": "Klomp houtskool"
        },
        {
                  "en": "Gas",
                  "es": "Gas",
                  "de": "Gas",
                  "nl": "Gas"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Lump charcoal is made from pure wood with no additives, burns hotter, lights faster, and produces less ash than briquettes, which contain fillers and binders.",
                  "es": "El carbón en trozos está hecho de madera pura sin aditivos, quema más caliente, se enciende más rápido y produce menos ceniza que las briquetas, que contienen rellenos y aglutinantes.",
                  "de": "Stückkohle wird aus reinem Holz ohne Zusätze hergestellt, brennt heißer, entzündet sich schneller und produziert weniger Asche als Briketts, die Füllstoffe und Bindemittel enthalten.",
                  "nl": "Klomp houtskool is gemaakt van puur hout zonder toevoegingen, brandt heter, ontsteekt sneller en produceert minder as dan briketten, die vullers en bindmiddelen bevatten."
        }
      },
      {
        question: {
                  "en": "What is the 'stall' in barbecue cooking?",
                  "es": "¿Qué es el 'estancamiento' en la cocción de barbacoa?",
                  "de": "Was ist der 'Stall' beim Barbecue-Kochen?",
                  "nl": "Wat is de 'stall' bij barbecue koken?"
        },
        options: [
        {
                  "en": "When the fire goes out",
                  "es": "Cuando el fuego se apaga",
                  "de": "Wenn das Feuer ausgeht",
                  "nl": "Wanneer het vuur uitgaat"
        },
        {
                  "en": "When the meat is overcooked",
                  "es": "Cuando la carne está sobrecocida",
                  "de": "Wenn das Fleisch überkocht ist",
                  "nl": "Wanneer het vlees overbakken is"
        },
        {
                  "en": "When the internal temperature stops rising for hours",
                  "es": "Cuando la temperatura interna deja de subir durante horas",
                  "de": "Wenn die Innentemperatur stundenlang nicht mehr steigt",
                  "nl": "Wanneer de interne temperatuur urenlang niet meer stijgt"
        },
        {
                  "en": "When you run out of wood",
                  "es": "Cuando se acaba la madera",
                  "de": "Wenn das Holz ausgeht",
                  "nl": "Wanneer je geen hout meer hebt"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The stall occurs when evaporative cooling from moisture on the meat's surface balances the heat input, causing temperature to plateau around 150-170°F.",
                  "es": "El estancamiento ocurre cuando el enfriamiento evaporativo de la humedad en la superficie de la carne equilibra la entrada de calor, causando que la temperatura se estabilice alrededor de 150-170°F.",
                  "de": "Der Stall tritt auf, wenn die Verdunstungskühlung von Feuchtigkeit auf der Fleischoberfläche die Wärmezufuhr ausgleicht, wodurch die Temperatur um 150-170°F stagniert.",
                  "nl": "De stall treedt op wanneer verdampingskoeling van vocht op het vleeoppervlak de warmte-inbreng balanceert, waardoor de temperatuur stagneert rond 150-170°F."
        }
      },
      {
        question: {
                  "en": "What is the 'Texas Crutch' method?",
                  "es": "¿Qué es el método 'Texas Crutch'?",
                  "de": "Was ist die 'Texas Crutch'-Methode?",
                  "nl": "Wat is de 'Texas Crutch' methode?"
        },
        options: [
        {
                  "en": "A way of seasoning meat",
                  "es": "Una forma de sazonar la carne",
                  "de": "Eine Art, Fleisch zu würzen",
                  "nl": "Een manier om vlees te kruiden"
        },
        {
                  "en": "Cooking only with mesquite wood",
                  "es": "Cocinar solo con madera de mezquite",
                  "de": "Nur mit Mesquite-Holz kochen",
                  "nl": "Alleen koken met mesquite hout"
        },
        {
                  "en": "Wrapping meat in foil or paper to power through the stall",
                  "es": "Envolver la carne en papel aluminio o papel para superar el estancamiento",
                  "de": "Fleisch in Folie oder Papier wickeln, um durch den Stall zu kommen",
                  "nl": "Vlees inwikkelen in folie of papier om door de stall heen te komen"
        },
        {
                  "en": "Using a special Texas-made grill",
                  "es": "Usar una parrilla especial hecha en Texas",
                  "de": "Einen speziellen Texas-Grill verwenden",
                  "nl": "Een speciale Texas-gemaakte grill gebruiken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The Texas Crutch involves wrapping meat in foil or butcher paper when it hits the stall, creating a steam environment that speeds up cooking and maintains moisture.",
                  "es": "El Texas Crutch implica envolver la carne en papel aluminio o papel de carnicero cuando golpea el estancamiento, creando un ambiente de vapor que acelera la cocción y mantiene la humedad.",
                  "de": "Die Texas Crutch beinhaltet das Einwickeln von Fleisch in Folie oder Metzgerpapier, wenn es den Stall erreicht, wodurch eine Dampfumgebung entsteht, die das Kochen beschleunigt und Feuchtigkeit bewahrt.",
                  "nl": "De Texas Crutch houdt in dat vlees wordt ingepakt in folie of slagerspapier wanneer het de stall bereikt, waardoor een stoomomgeving ontstaat die het koken versnelt en vocht behoudt."
        }
      },
      {
        question: {
                  "en": "What should you do first when setting up a charcoal grill for barbecue?",
                  "es": "¿Qué debes hacer primero al configurar una parrilla de carbón para barbacoa?",
                  "de": "Was solltest du zuerst tun, wenn du einen Holzkohlegrill für Barbecue aufstellst?",
                  "nl": "Wat moet je eerst doen bij het opzetten van een houtskoolbarbecue?"
        },
        options: [
        {
                  "en": "Clean the grill grates",
                  "es": "Limpiar las rejillas de la parrilla",
                  "de": "Die Grillroste reinigen",
                  "nl": "De grillroosters schoonmaken"
        },
        {
                  "en": "Light the charcoal immediately",
                  "es": "Encender el carbón inmediatamente",
                  "de": "Die Holzkohle sofort anzünden",
                  "nl": "De houtskool onmiddellijk aansteken"
        },
        {
                  "en": "Put the meat on",
                  "es": "Poner la carne",
                  "de": "Das Fleisch auflegen",
                  "nl": "Het vlees erop leggen"
        },
        {
                  "en": "Add wood chips",
                  "es": "Añadir astillas de madera",
                  "de": "Holzspäne hinzufügen",
                  "nl": "Houten chips toevoegen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Always clean the grill grates first to remove old food residue and grease, which can cause flare-ups and impart off-flavors to your food.",
                  "es": "Siempre limpia las rejillas de la parrilla primero para eliminar residuos de comida vieja y grasa, que pueden causar llamaradas e impartir sabores desagradables a tu comida.",
                  "de": "Reinige immer zuerst die Grillroste, um alte Speisereste und Fett zu entfernen, die Stichflammen verursachen und unerwünschte Geschmäcker auf dein Essen übertragen können.",
                  "nl": "Maak altijd eerst de grillroosters schoon om oude voedselresten en vet te verwijderen, wat vlammen kan veroorzaken en vieze smaken aan je eten kan geven."
        }
      },
      {
        question: {
                  "en": "What is the ideal internal temperature for smoked brisket?",
                  "es": "¿Cuál es la temperatura interna ideal para el brisket ahumado?",
                  "de": "Was ist die ideale Innentemperatur für geräucherte Rinderbrust?",
                  "nl": "Wat is de ideale interne temperatuur voor gerookte brisket?"
        },
        options: [
        {
                  "en": "220°F (104°C)",
                  "es": "220°F (104°C)",
                  "de": "220°F (104°C)",
                  "nl": "220°F (104°C)"
        },
        {
                  "en": "160°F (71°C)",
                  "es": "160°F (71°C)",
                  "de": "160°F (71°C)",
                  "nl": "160°F (71°C)"
        },
        {
                  "en": "195-205°F (90-96°C)",
                  "es": "195-205°F (90-96°C)",
                  "de": "195-205°F (90-96°C)",
                  "nl": "195-205°F (90-96°C)"
        },
        {
                  "en": "145°F (63°C)",
                  "es": "145°F (63°C)",
                  "de": "145°F (63°C)",
                  "nl": "145°F (63°C)"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Brisket needs to reach 195-205°F internally to break down the tough connective tissues into gelatin, making it tender enough to slice or pull apart.",
                  "es": "El brisket necesita alcanzar 195-205°F internamente para descomponer los tejidos conectivos duros en gelatina, haciéndolo lo suficientemente tierno para cortar o desmenuzar.",
                  "de": "Rinderbrust muss innen 195-205°F erreichen, um die zähen Bindegewebe in Gelatine zu zerlegen, wodurch sie zart genug wird zum Schneiden oder Auseinanderziehen.",
                  "nl": "Brisket moet intern 195-205°F bereiken om het taaie bindweefsel af te breken tot gelatine, waardoor het mals genoeg wordt om te snijden of uit elkaar te trekken."
        }
      },
      {
        question: {
                  "en": "How long should you let meat rest after barbecuing?",
                  "es": "¿Cuánto tiempo debes dejar reposar la carne después de la barbacoa?",
                  "de": "Wie lange solltest du Fleisch nach dem Barbecue ruhen lassen?",
                  "nl": "Hoe lang moet je vlees laten rusten na het barbecueën?"
        },
        options: [
        {
                  "en": "10-30 minutes depending on the size",
                  "es": "10-30 minutos dependiendo del tamaño",
                  "de": "10-30 Minuten je nach Größe",
                  "nl": "10-30 minuten afhankelijk van de grootte"
        },
        {
                  "en": "No resting needed",
                  "es": "No necesita reposo",
                  "de": "Keine Ruhe erforderlich",
                  "nl": "Geen rust nodig"
        },
        {
                  "en": "2-3 hours",
                  "es": "2-3 horas",
                  "de": "2-3 Stunden",
                  "nl": "2-3 uur"
        },
        {
                  "en": "1 hour minimum",
                  "es": "1 hora mínimo",
                  "de": "Mindestens 1 Stunde",
                  "nl": "Minimaal 1 uur"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Resting allows juices to redistribute throughout the meat. Small cuts need 10-15 minutes, while large roasts may need 30 minutes or more.",
                  "es": "El reposo permite que los jugos se redistribuyan por toda la carne. Los cortes pequeños necesitan 10-15 minutos, mientras que los asados grandes pueden necesitar 30 minutos o más.",
                  "de": "Das Ruhen ermöglicht es den Säften, sich im ganzen Fleisch zu verteilen. Kleine Stücke brauchen 10-15 Minuten, während große Braten 30 Minuten oder mehr brauchen können.",
                  "nl": "Rusten stelt sappen in staat zich door het vlees te herverdelen. Kleine stukken hebben 10-15 minuten nodig, terwijl grote braadstukken 30 minuten of meer nodig kunnen hebben."
        }
      },
      {
        question: {
                  "en": "What is the best way to check if charcoal is ready for cooking?",
                  "es": "¿Cuál es la mejor manera de verificar si el carbón está listo para cocinar?",
                  "de": "Was ist der beste Weg zu prüfen, ob die Holzkohle zum Kochen bereit ist?",
                  "nl": "Wat is de beste manier om te controleren of houtskool klaar is om te koken?"
        },
        options: [
        {
                  "en": "When they turn black",
                  "es": "Cuando se vuelven negros",
                  "de": "Wenn sie schwarz werden",
                  "nl": "Wanneer ze zwart worden"
        },
        {
                  "en": "When flames are still visible",
                  "es": "Cuando las llamas aún son visibles",
                  "de": "Wenn Flammen noch sichtbar sind",
                  "nl": "Wanneer vlammen nog zichtbaar zijn"
        },
        {
                  "en": "After 5 minutes of lighting",
                  "es": "Después de 5 minutos de encendido",
                  "de": "Nach 5 Minuten Anzünden",
                  "nl": "Na 5 minuten aansteken"
        },
        {
                  "en": "When coals are covered with white ash",
                  "es": "Cuando los carbones están cubiertos de ceniza blanca",
                  "de": "Wenn die Kohlen mit weißer Asche bedeckt sind",
                  "nl": "Wanneer de kolen bedekt zijn met witte as"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Charcoal is ready when the flames die down and the coals are covered with a thin layer of white ash. This indicates they're burning at a consistent temperature.",
                  "es": "El carbón está listo cuando las llamas se apagan y los carbones están cubiertos con una capa delgada de ceniza blanca. Esto indica que están quemando a una temperatura consistente.",
                  "de": "Holzkohle ist bereit, wenn die Flammen nachlassen und die Kohlen mit einer dünnen Schicht weißer Asche bedeckt sind. Dies zeigt an, dass sie bei einer konstanten Temperatur brennen.",
                  "nl": "Houtskool is klaar wanneer de vlammen doven en de kolen bedekt zijn met een dunne laag witte as. Dit geeft aan dat ze op een consistente temperatuur branden."
        }
      },
      {
        question: {
                  "en": "What makes barbecue different from other cooking methods?",
                  "es": "¿Qué hace que la barbacoa sea diferente de otros métodos de cocción?",
                  "de": "Was macht Barbecue anders als andere Kochmethoden?",
                  "nl": "Wat maakt barbecue anders dan andere kookmethoden?"
        },
        options: [
        {
                  "en": "It requires special equipment",
                  "es": "Requiere equipo especial",
                  "de": "Es erfordert spezielle Ausrüstung",
                  "nl": "Het vereist speciale apparatuur"
        },
        {
                  "en": "The combination of smoke, low temperature, and long cooking time",
                  "es": "La combinación de humo, baja temperatura y largo tiempo de cocción",
                  "de": "Die Kombination aus Rauch, niedriger Temperatur und langer Kochzeit",
                  "nl": "De combinatie van rook, lage temperatuur en lange kooktijd"
        },
        {
                  "en": "It only uses expensive cuts of meat",
                  "es": "Solo usa cortes caros de carne",
                  "de": "Es verwendet nur teure Fleischstücke",
                  "nl": "Het gebruikt alleen dure stukken vlees"
        },
        {
                  "en": "It's always done outdoors",
                  "es": "Siempre se hace al aire libre",
                  "de": "Es wird immer im Freien gemacht",
                  "nl": "Het wordt altijd buiten gedaan"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Barbecue's unique character comes from the 'holy trinity' of smoke for flavor, low heat to break down tough fibers, and time to allow chemical reactions that create tenderness.",
                  "es": "El carácter único de la barbacoa proviene de la 'trinidad sagrada' de humo para sabor, calor bajo para descomponer fibras duras, y tiempo para permitir reacciones químicas que crean ternura.",
                  "de": "Barbecues einzigartiger Charakter kommt von der 'heiligen Dreifaltigkeit' aus Rauch für Geschmack, niedriger Hitze zum Aufbrechen zäher Fasern, und Zeit für chemische Reaktionen, die Zartheit schaffen.",
                  "nl": "Barbecue's unieke karakter komt van de 'heilige drie-eenheid' van rook voor smaak, lage hitte om taaie vezels af te breken, en tijd om chemische reacties mogelijk te maken die malheid creëren."
        }
      },
      {
        question: {
                  "en": "Why should you always clean your grill grates before cooking?",
                  "es": "¿Por qué siempre debes limpiar las rejillas de la parrilla antes de cocinar?",
                  "de": "Warum solltest du die Grillroste vor dem Kochen immer reinigen?",
                  "nl": "Waarom moet je de grillroosters altijd schoonmaken voor het koken?"
        },
        options: [
        {
                  "en": "Prevents sticking and removes old food residue that can cause flare-ups",
                  "es": "Previene que se pegue y elimina residuos de comida vieja que pueden causar llamaradas",
                  "de": "Verhindert Ankleben und entfernt alte Speisereste, die Stichflammen verursachen können",
                  "nl": "Voorkomt aanbakken en verwijdert oude voedselresten die vlammen kunnen veroorzaken"
        },
        {
                  "en": "To make the grates last longer",
                  "es": "Para hacer que las rejillas duren más",
                  "de": "Damit die Roste länger halten",
                  "nl": "Om de roosters langer mee te laten gaan"
        },
        {
                  "en": "Makes the grill look better",
                  "es": "Hace que la parrilla se vea mejor",
                  "de": "Lässt den Grill besser aussehen",
                  "nl": "Maakt de grill er beter uitzien"
        },
        {
                  "en": "It's required by health regulations",
                  "es": "Es requerido por regulaciones de salud",
                  "de": "Es ist durch Gesundheitsvorschriften erforderlich",
                  "nl": "Het is vereist door gezondheidsregels"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Clean grill grates prevent food from sticking and remove old food residue and grease that can cause dangerous flare-ups and impart off-flavors to your food.",
                  "es": "Las rejillas de parrilla limpias previenen que la comida se pegue y eliminan residuos de comida vieja y grasa que pueden causar llamaradas peligrosas e impartir sabores desagradables a tu comida.",
                  "de": "Saubere Grillroste verhindern das Ankleben von Lebensmitteln und entfernen alte Speisereste und Fett, die gefährliche Stichflammen verursachen und unerwünschte Aromen auf Ihr Essen übertragen können.",
                  "nl": "Schone grillroosters voorkomen dat voedsel aanbakt en verwijderen oude voedselresten en vet die gevaarlijke vlammen kunnen veroorzaken en vieze smaken aan je eten kunnen geven."
        }
      },
      {
        question: {
                  "en": "What is the main fuel source for traditional barbecue?",
                  "es": "¿Cuál es la principal fuente de combustible para barbacoa tradicional?",
                  "de": "Was ist die Hauptbrennstoffquelle für traditionelles Barbecue?",
                  "nl": "Wat is de belangrijkste brandstofbron voor traditionele barbecue?"
        },
        options: [
        {
                  "en": "Natural gas",
                  "es": "Gas natural",
                  "de": "Erdgas",
                  "nl": "Aardgas"
        },
        {
                  "en": "Wood or charcoal",
                  "es": "Madera o carbón",
                  "de": "Holz oder Holzkohle",
                  "nl": "Hout of houtskool"
        },
        {
                  "en": "Propane only",
                  "es": "Solo propano",
                  "de": "Nur Propan",
                  "nl": "Alleen propaan"
        },
        {
                  "en": "Electricity",
                  "es": "Electricidad",
                  "de": "Elektrizität",
                  "nl": "Elektriciteit"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Traditional barbecue relies on wood or charcoal as fuel. These produce both heat and smoke, which is essential for authentic barbecue flavor.",
                  "es": "La barbacoa tradicional depende de la madera o carbón como combustible. Estos producen tanto calor como humo, que es esencial para el sabor auténtico de barbacoa.",
                  "de": "Traditionelles Barbecue basiert auf Holz oder Holzkohle als Brennstoff. Diese produzieren sowohl Hitze als auch Rauch, der für authentischen Barbecue-Geschmack unerlässlich ist.",
                  "nl": "Traditionele barbecue is afhankelijk van hout of houtskool als brandstof. Deze produceren zowel hitte als rook, wat essentieel is voor authentieke barbecuesmaak."
        }
      },
      {
        question: {
                  "en": "What are baby back ribs?",
                  "es": "¿Qué son las costillas baby back?",
                  "de": "Was sind Baby Back Ribs?",
                  "nl": "Wat zijn baby back ribs?"
        },
        options: [
        {
                  "en": "Ribs from baby pigs",
                  "es": "Costillas de cerdos bebé",
                  "de": "Rippen von Babyschweinchen",
                  "nl": "Ribben van babyvarken"
        },
        {
                  "en": "Small chicken ribs",
                  "es": "Costillas pequeñas de pollo",
                  "de": "Kleine Hühnerrippen",
                  "nl": "Kleine kipribben"
        },
        {
                  "en": "Ribs from young cows",
                  "es": "Costillas de vacas jóvenes",
                  "de": "Rippen von jungen Kühen",
                  "nl": "Ribben van jonge koeien"
        },
        {
                  "en": "Ribs from the upper part of the pork rib cage",
                  "es": "Costillas de la parte superior de la caja torácica del cerdo",
                  "de": "Rippen aus dem oberen Teil des Schweinerippenkäfigs",
                  "nl": "Ribben van het bovenste deel van de varkensribbenkas"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Baby back ribs come from the upper part of the pork rib cage near the spine. They're called 'baby' because they're shorter than spare ribs, not because they come from young pigs.",
                  "es": "Las costillas baby back provienen de la parte superior de la caja torácica del cerdo cerca de la columna. Se llaman 'baby' porque son más cortas que las costillas spare, no porque provengan de cerdos jóvenes.",
                  "de": "Baby Back Ribs stammen aus dem oberen Teil des Schweinerippenkäfigs nahe der Wirbelsäule. Sie heißen 'Baby', weil sie kürzer als Spare Ribs sind, nicht weil sie von jungen Schweinen stammen.",
                  "nl": "Baby back ribs komen van het bovenste deel van de varkensribbenkas bij de ruggengraat. Ze heten 'baby' omdat ze korter zijn dan spare ribs, niet omdat ze van jonge varkens komen."
        }
      },
      {
        question: {
                  "en": "What is smoking in barbecue?",
                  "es": "¿Qué es ahumar en barbacoa?",
                  "de": "Was ist Räuchern beim Barbecue?",
                  "nl": "Wat is roken bij barbecue?"
        },
        options: [
        {
                  "en": "Burning meat until it turns black",
                  "es": "Quemar carne hasta que se vuelva negra",
                  "de": "Fleisch verbrennen bis es schwarz wird",
                  "nl": "Vlees verbranden tot het zwart wordt"
        },
        {
                  "en": "Adding liquid smoke to meat",
                  "es": "Añadir humo líquido a la carne",
                  "de": "Flüssiger Rauch zum Fleisch hinzufügen",
                  "nl": "Vloeibare rook toevoegen aan vlees"
        },
        {
                  "en": "Cooking only with tobacco smoke",
                  "es": "Cocinar solo con humo de tabaco",
                  "de": "Nur mit Tabakrauch kochen",
                  "nl": "Alleen koken met tabaksrook"
        },
        {
                  "en": "Cooking meat slowly with wood smoke for flavor",
                  "es": "Cocinar carne lentamente con humo de madera para sabor",
                  "de": "Fleisch langsam mit Holzrauch für Geschmack kochen",
                  "nl": "Vlees langzaam koken met houtrook voor smaak"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Smoking is a cooking technique where meat is exposed to smoke from burning wood, which adds flavor while cooking slowly at low temperatures.",
                  "es": "Ahumar es una técnica de cocción donde la carne se expone al humo de madera quemada, que añade sabor mientras se cocina lentamente a bajas temperaturas.",
                  "de": "Räuchern ist eine Kochtechnik, bei der Fleisch dem Rauch von brennendem Holz ausgesetzt wird, der Geschmack hinzufügt während langsam bei niedrigen Temperaturen gekocht wird.",
                  "nl": "Roken is een kooktechniek waarbij vlees wordt blootgesteld aan rook van brandend hout, wat smaak toevoegt terwijl langzaam bij lage temperaturen wordt gekookt."
        }
      },
      {
        question: {
                  "en": "What does BBQ stand for?",
                  "es": "¿Qué significa BBQ?",
                  "de": "Wofür steht BBQ?",
                  "nl": "Waar staat BBQ voor?"
        },
        options: [
        {
                  "en": "Burn Before Quick",
                  "es": "Burn Before Quick",
                  "de": "Burn Before Quick",
                  "nl": "Burn Before Quick"
        },
        {
                  "en": "Best Before Quality",
                  "es": "Best Before Quality",
                  "de": "Best Before Quality",
                  "nl": "Best Before Quality"
        },
        {
                  "en": "Barbecue",
                  "es": "Barbacoa",
                  "de": "Barbecue",
                  "nl": "Barbecue"
        },
        {
                  "en": "Beef Bacon Quality",
                  "es": "Beef Bacon Quality",
                  "de": "Beef Bacon Quality",
                  "nl": "Beef Bacon Quality"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "BBQ is simply an abbreviation for barbecue. The 'Q' represents the 'cue' sound in the pronunciation of barbecue.",
                  "es": "BBQ es simplemente una abreviatura de barbacoa (barbecue en inglés). La 'Q' representa el sonido 'cue' en la pronunciación de barbecue.",
                  "de": "BBQ ist einfach eine Abkürzung für Barbecue. Das 'Q' repräsentiert den 'cue'-Klang in der Aussprache von Barbecue.",
                  "nl": "BBQ is simpelweg een afkorting voor barbecue. De 'Q' vertegenwoordigt het 'cue' geluid in de uitspraak van barbecue."
        }
      },
      {
        question: {
                  "en": "What is pulled pork?",
                  "es": "¿Qué es el pulled pork?",
                  "de": "Was ist Pulled Pork?",
                  "nl": "Wat is pulled pork?"
        },
        options: [
        {
                  "en": "Grilled pork chops",
                  "es": "Chuletas de cerdo a la parrilla",
                  "de": "Gegrillte Schweinekoteletts",
                  "nl": "Gegrilde varkenskoteletjes"
        },
        {
                  "en": "Slow-cooked pork shoulder shredded into pieces",
                  "es": "Paleta de cerdo cocinada lentamente y desmenuzada en trozos",
                  "de": "Langsam gekochte Schweineschulter in Stücke gezupft",
                  "nl": "Langzaam gekookte varkensschouder in stukjes getrokken"
        },
        {
                  "en": "Raw pork strips",
                  "es": "Tiras de cerdo crudo",
                  "de": "Rohe Schweinestreifen",
                  "nl": "Rauwe varkensstrips"
        },
        {
                  "en": "Pork that's been marinated",
                  "es": "Cerdo que ha sido marinado",
                  "de": "Mariniertes Schweinefleisch",
                  "nl": "Varkensvlees dat gemarineerd is"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Pulled pork is made by slow-cooking pork shoulder until it's so tender it can be easily pulled apart into shreds. It's a classic barbecue dish often served on sandwiches.",
                  "es": "El pulled pork se hace cocinando lentamente la paleta de cerdo hasta que esté tan tierna que se pueda desmenuzar fácilmente. Es un platillo clásico de barbacoa que a menudo se sirve en sándwiches.",
                  "de": "Pulled Pork wird hergestellt, indem Schweineschulter langsam gekocht wird, bis sie so zart ist, dass sie leicht in Fetzen gezupft werden kann. Es ist ein klassisches Barbecue-Gericht, das oft in Sandwiches serviert wird.",
                  "nl": "Pulled pork wordt gemaakt door varkensschouder langzaam te koken tot het zo mals is dat het gemakkelijk uit elkaar getrokken kan worden. Het is een klassiek barbecue gerecht dat vaak op broodjes wordt geserveerd."
        }
      },
      {
        question: {
                  "en": "What is a chimney starter used for?",
                  "es": "¿Para qué se usa un iniciador de chimenea?",
                  "de": "Wofür wird ein Anzündkamin verwendet?",
                  "nl": "Waarvoor wordt een schoorsteen starter gebruikt?"
        },
        options: [
        {
                  "en": "Adding wood chips to the fire",
                  "es": "Añadir astillas de madera al fuego",
                  "de": "Holzspäne zum Feuer hinzufügen",
                  "nl": "Houten chips aan het vuur toevoegen"
        },
        {
                  "en": "Lighting charcoal quickly and evenly",
                  "es": "Encender carbón rápida y uniformemente",
                  "de": "Holzkohle schnell und gleichmäßig anzünden",
                  "nl": "Houtskool snel en gelijkmatig aansteken"
        },
        {
                  "en": "Cleaning the grill chimney",
                  "es": "Limpiar la chimenea de la parrilla",
                  "de": "Den Grillschornstein reinigen",
                  "nl": "De grill schoorsteen schoonmaken"
        },
        {
                  "en": "Controlling smoke direction",
                  "es": "Controlar la dirección del humo",
                  "de": "Rauchrichtung kontrollieren",
                  "nl": "Rookrichting controleren"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "A chimney starter is a metal cylinder that uses newspaper or fire starters at the bottom to light charcoal quickly and evenly, without the need for lighter fluid.",
                  "es": "Un iniciador de chimenea es un cilindro metálico que usa periódico o iniciadores de fuego en el fondo para encender carbón rápida y uniformemente, sin necesidad de líquido para encender.",
                  "de": "Ein Anzündkamin ist ein Metallzylinder, der Zeitung oder Feueranzünder am Boden verwendet, um Holzkohle schnell und gleichmäßig anzuzünden, ohne die Notwendigkeit von Anzündflüssigkeit.",
                  "nl": "Een schoorsteen starter is een metalen cilinder die krant of aanstekers aan de onderkant gebruikt om houtskool snel en gelijkmatig aan te steken, zonder de noodzaak voor aanmaakbrandstof."
        }
      },
      {
        question: {
                  "en": "What are spare ribs?",
                  "es": "¿Qué son las spare ribs?",
                  "de": "Was sind Spare Ribs?",
                  "nl": "Wat zijn spare ribs?"
        },
        options: [
        {
                  "en": "Ribs used only for emergencies",
                  "es": "Costillas usadas solo para emergencias",
                  "de": "Rippen nur für Notfälle",
                  "nl": "Ribben alleen voor noodgevallen"
        },
        {
                  "en": "Ribs from the belly side of the rib cage",
                  "es": "Costillas del lado del vientre de la caja torácica",
                  "de": "Rippen von der Bauchseite des Brustkorbs",
                  "nl": "Ribben van de buikzijde van de ribbenkas"
        },
        {
                  "en": "Ribs from spare animals",
                  "es": "Costillas de animales de repuesto",
                  "de": "Rippen von Ersatztieren",
                  "nl": "Ribben van reservedieren"
        },
        {
                  "en": "Extra ribs that are left over",
                  "es": "Costillas extra que sobran",
                  "de": "Übrige Rippen die übrig bleiben",
                  "nl": "Extra ribben die over zijn"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Spare ribs come from the lower part of the pork rib cage near the belly. They're larger, flatter, and meatier than baby back ribs.",
                  "es": "Las spare ribs provienen de la parte inferior de la caja torácica del cerdo cerca del vientre. Son más grandes, planas y carnosas que las costillas baby back.",
                  "de": "Spare Ribs stammen aus dem unteren Teil des Schweinerippenkäfigs nahe dem Bauch. Sie sind größer, flacher und fleischiger als Baby Back Ribs.",
                  "nl": "Spare ribs komen van het onderste deel van de varkensribbenkas bij de buik. Ze zijn groter, vlakker en vleesachtiger dan baby back ribs."
        }
      },
      {
        question: {
                  "en": "What is basting in barbecue?",
                  "es": "¿Qué es el basting en barbacoa?",
                  "de": "Was ist Bestreichen beim Barbecue?",
                  "nl": "Wat is besprenkelen bij barbecue?"
        },
        options: [
        {
                  "en": "Wrapping meat in foil",
                  "es": "Envolver carne en papel aluminio",
                  "de": "Fleisch in Folie wickeln",
                  "nl": "Vlees in folie wikkelen"
        },
        {
                  "en": "Seasoning meat before cooking",
                  "es": "Sazonar la carne antes de cocinar",
                  "de": "Fleisch vor dem Kochen würzen",
                  "nl": "Vlees kruiden voor het koken"
        },
        {
                  "en": "Cutting meat into smaller pieces",
                  "es": "Cortar carne en trozos más pequeños",
                  "de": "Fleisch in kleinere Stücke schneiden",
                  "nl": "Vlees in kleinere stukken snijden"
        },
        {
                  "en": "Applying liquid to meat during cooking to keep it moist",
                  "es": "Aplicar líquido a la carne durante la cocción para mantenerla húmeda",
                  "de": "Flüssigkeit während des Kochens auf Fleisch auftragen um es feucht zu halten",
                  "nl": "Vloeistof aanbrengen op vlees tijdens het koken om het vochtig te houden"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Basting involves brushing or mopping meat with liquid (marinade, sauce, or broth) during cooking to add moisture and flavor. It's done periodically throughout the cooking process.",
                  "es": "El basting implica cepillar o trapear la carne con líquido (marinada, salsa o caldo) durante la cocción para añadir humedad y sabor. Se hace periódicamente durante todo el proceso de cocción.",
                  "de": "Bestreichen beinhaltet das Bürsten oder Wischen von Fleisch mit Flüssigkeit (Marinade, Sauce oder Brühe) während des Kochens, um Feuchtigkeit und Geschmack hinzuzufügen. Es wird periodisch während des gesamten Kochprozesses durchgeführt.",
                  "nl": "Besprenkelen houdt in het borstelen of dweilen van vlees met vloeistof (marinade, saus of bouillon) tijdens het koken om vocht en smaak toe te voegen. Het wordt periodiek gedaan tijdens het hele kookproces."
        }
      },
      {
        question: {
                  "en": "What is the purpose of a water pan in a smoker?",
                  "es": "¿Cuál es el propósito de una bandeja de agua en un ahumador?",
                  "de": "Was ist der Zweck einer Wasserpfanne in einem Smoker?",
                  "nl": "Wat is het doel van een waterpan in een roker?"
        },
        options: [
        {
                  "en": "To add water flavor to meat",
                  "es": "Para añadir sabor de agua a la carne",
                  "de": "Um Wassergeschmack zum Fleisch hinzuzufügen",
                  "nl": "Om watersmaak aan vlees toe te voegen"
        },
        {
                  "en": "To clean the smoker",
                  "es": "Para limpiar el ahumador",
                  "de": "Um den Smoker zu reinigen",
                  "nl": "Om de roker schoon te maken"
        },
        {
                  "en": "To put out fires",
                  "es": "Para apagar incendios",
                  "de": "Um Feuer zu löschen",
                  "nl": "Om branden te blussen"
        },
        {
                  "en": "To maintain moisture and stabilize temperature",
                  "es": "Para mantener humedad y estabilizar temperatura",
                  "de": "Um Feuchtigkeit zu erhalten und Temperatur zu stabilisieren",
                  "nl": "Om vocht te behouden en temperatuur te stabiliseren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A water pan helps maintain a moist cooking environment and acts as a heat sink to stabilize temperature fluctuations in the smoker.",
                  "es": "Una bandeja de agua ayuda a mantener un ambiente de cocción húmedo y actúa como disipador de calor para estabilizar fluctuaciones de temperatura en el ahumador.",
                  "de": "Eine Wasserpfanne hilft eine feuchte Kochumgebung zu erhalten und wirkt als Wärmespeicher um Temperaturschwankungen im Smoker zu stabilisieren.",
                  "nl": "Een waterpan helpt een vochtige kookomgeving te behouden en werkt als warmtereservoir om temperatuurschommelingen in de roker te stabiliseren."
        }
      },
      {
        question: {
                  "en": "What is reverse searing?",
                  "es": "¿Qué es el reverse searing?",
                  "de": "Was ist Reverse Searing?",
                  "nl": "Wat is reverse searing?"
        },
        options: [
        {
                  "en": "Slow cooking first, then searing at high heat",
                  "es": "Cocinar lento primero, luego sellar a fuego alto",
                  "de": "Erst langsam kochen, dann bei hoher Hitze anbraten",
                  "nl": "Eerst langzaam koken, dan schroeien op hoge hitte"
        },
        {
                  "en": "Searing meat backwards",
                  "es": "Sellar carne al revés",
                  "de": "Fleisch rückwärts anbraten",
                  "nl": "Vlees achterstevoren schroeien"
        },
        {
                  "en": "Cooking meat from frozen",
                  "es": "Cocinar carne desde congelada",
                  "de": "Fleisch aus gefrorenem Zustand kochen",
                  "nl": "Vlees koken vanuit bevroren"
        },
        {
                  "en": "Using cold smoke instead of hot",
                  "es": "Usar humo frío en lugar de caliente",
                  "de": "Kaltrauch statt Heißrauch verwenden",
                  "nl": "Koude rook gebruiken in plaats van hete"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Reverse searing cooks meat slowly at low temperature first, then finishes with a quick high-heat sear. This produces an even doneness throughout with a crispy exterior.",
                  "es": "El reverse searing cocina la carne lentamente a baja temperatura primero, luego termina con un sellado rápido a fuego alto. Esto produce un punto uniforme en todo con un exterior crujiente.",
                  "de": "Reverse Searing kocht Fleisch zuerst langsam bei niedriger Temperatur, dann beendet es mit einem schnellen Hochtemperatur-Anbraten. Dies produziert eine gleichmäßige Garstufe durchgehend mit einer knusprigen Außenseite.",
                  "nl": "Reverse searing kookt vlees eerst langzaam op lage temperatuur, dan eindigt met een snelle schroeihitte. Dit produceert een gelijkmatige gaarheidgraad overal met een knapperig buitenkant."
        }
      },
      {
        question: {
                  "en": "What is the 'smoke ring' on barbecued meat?",
                  "es": "¿Qué es el 'anillo de humo' en la carne de barbacoa?",
                  "de": "Was ist der 'Rauchring' auf geräuchertem Fleisch?",
                  "nl": "Wat is de 'rookring' op barbecue vlees?"
        },
        options: [
        {
                  "en": "Burnt edges on the meat",
                  "es": "Bordes quemados en la carne",
                  "de": "Verbrannte Kanten am Fleisch",
                  "nl": "Verbrande randen op het vlees"
        },
        {
                  "en": "A pink layer beneath the surface from smoke exposure",
                  "es": "Una capa rosa debajo de la superficie por exposición al humo",
                  "de": "Eine rosa Schicht unter der Oberfläche durch Rauchbelichtung",
                  "nl": "Een roze laag onder het oppervlak door rookblootstelling"
        },
        {
                  "en": "A ring of wood placed around the meat",
                  "es": "Un anillo de madera colocado alrededor de la carne",
                  "de": "Ein Holzring um das Fleisch platziert",
                  "nl": "Een ring van hout geplaatst rond het vlees"
        },
        {
                  "en": "The circular pattern of smoke around the grill",
                  "es": "El patrón circular de humo alrededor de la parrilla",
                  "de": "Das kreisförmige Rauchmuster um den Grill",
                  "nl": "Het cirkelvormige rookpatroon rond de grill"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The smoke ring is a pink/red layer just beneath the surface of smoked meat, caused by a chemical reaction between nitrogen dioxide in smoke and myoglobin in meat.",
                  "es": "El anillo de humo es una capa rosa/roja justo debajo de la superficie de la carne ahumada, causada por una reacción química entre dióxido de nitrógeno en el humo y mioglobina en la carne.",
                  "de": "Der Rauchring ist eine rosa/rote Schicht direkt unter der Oberfläche von geräuchertem Fleisch, verursacht durch eine chemische Reaktion zwischen Stickstoffdioxid im Rauch und Myoglobin im Fleisch.",
                  "nl": "De rookring is een roze/rode laag net onder het oppervlak van gerookt vlees, veroorzaakt door een chemische reactie tussen stikstofdioxide in rook en myoglobine in vlees."
        }
      },
      {
        question: {
                  "en": "What type of ribs are St. Louis style ribs?",
                  "es": "¿Qué tipo de costillas son las costillas estilo St. Louis?",
                  "de": "Was für Rippen sind St. Louis Style Ribs?",
                  "nl": "Wat voor soort ribben zijn St. Louis stijl ribben?"
        },
        options: [
        {
                  "en": "Ribs from cows raised in Missouri",
                  "es": "Costillas de vacas criadas en Missouri",
                  "de": "Rippen von in Missouri aufgezogenen Kühen",
                  "nl": "Ribben van koeien grootgebracht in Missouri"
        },
        {
                  "en": "Spare ribs trimmed to be more rectangular",
                  "es": "Spare ribs recortadas para ser más rectangulares",
                  "de": "Spare Ribs getrimmt um rechteckiger zu sein",
                  "nl": "Spare ribs getrimd om rechthoekiger te zijn"
        },
        {
                  "en": "Very small baby back ribs",
                  "es": "Costillas baby back muy pequeñas",
                  "de": "Sehr kleine Baby Back Ribs",
                  "nl": "Zeer kleine baby back ribs"
        },
        {
                  "en": "Ribs cooked with a special St. Louis sauce",
                  "es": "Costillas cocinadas con una salsa especial de St. Louis",
                  "de": "Rippen gekocht mit einer speziellen St. Louis Sauce",
                  "nl": "Ribben gekookt met een speciale St. Louis saus"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "St. Louis style ribs are spare ribs that have been trimmed to remove the rib tips and sternum, creating a more uniform rectangular shape that cooks evenly.",
                  "es": "Las costillas estilo St. Louis son spare ribs que han sido recortadas para eliminar las puntas de las costillas y el esternón, creando una forma rectangular más uniforme que se cocina uniformemente.",
                  "de": "St. Louis Style Ribs sind Spare Ribs, die getrimmt wurden um die Rippenspitzen und das Brustbein zu entfernen, wodurch eine gleichmäßigere rechteckige Form entsteht, die gleichmäßig kocht.",
                  "nl": "St. Louis stijl ribben zijn spare ribs die getrimd zijn om de ribbenpunten en borstbeen te verwijderen, waardoor een meer uniforme rechthoekige vorm ontstaat die gelijkmatig kookt."
        }
      },
      {
        question: {
                  "en": "What should you look for when buying ribs for barbecue?",
                  "es": "¿Qué debes buscar al comprar costillas para barbacoa?",
                  "de": "Worauf solltest du beim Kauf von Rippen für Barbecue achten?",
                  "nl": "Waar moet je op letten bij het kopen van ribben voor barbecue?"
        },
        options: [
        {
                  "en": "Only the biggest ribs available",
                  "es": "Solo las costillas más grandes disponibles",
                  "de": "Nur die größten verfügbaren Rippen",
                  "nl": "Alleen de grootste beschikbare ribben"
        },
        {
                  "en": "Ribs with no fat at all",
                  "es": "Costillas sin grasa en absoluto",
                  "de": "Rippen ohne Fett überhaupt",
                  "nl": "Ribben zonder vet helemaal"
        },
        {
                  "en": "The cheapest ribs you can find",
                  "es": "Las costillas más baratas que puedas encontrar",
                  "de": "Die billigsten Rippen die du finden kannst",
                  "nl": "De goedkoopste ribben die je kunt vinden"
        },
        {
                  "en": "Good meat coverage with some fat marbling",
                  "es": "Buena cobertura de carne con algo de veteado de grasa",
                  "de": "Gute Fleischabdeckung mit etwas Fettmarmorierung",
                  "nl": "Goede vleesbedekking met wat vet marmerering"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Look for ribs with good meat coverage between the bones and some fat marbling. Avoid ribs that are too lean, as fat helps keep them moist and flavorful during cooking.",
                  "es": "Busca costillas con buena cobertura de carne entre los huesos y algo de veteado de grasa. Evita costillas que sean demasiado magras, ya que la grasa ayuda a mantenerlas húmedas y sabrosas durante la cocción.",
                  "de": "Suche nach Rippen mit guter Fleischabdeckung zwischen den Knochen und etwas Fettmarmorierung. Vermeide zu magere Rippen, da Fett hilft sie feucht und schmackhaft während des Kochens zu halten.",
                  "nl": "Zoek naar ribben met goede vleesbedekking tussen de botten en wat vet marmerering. Vermijd ribben die te mager zijn, omdat vet helpt ze vochtig en smaakvol te houden tijdens het koken."
        }
      },
      {
        question: {
                  "en": "What is the 3-2-1 method for ribs?",
                  "es": "¿Qué es el método 3-2-1 para costillas?",
                  "de": "Was ist die 3-2-1 Methode für Rippen?",
                  "nl": "Wat is de 3-2-1 methode voor ribben?"
        },
        options: [
        {
                  "en": "3 types of wood, 2 temperature zones, 1 marinade",
                  "es": "3 tipos de madera, 2 zonas de temperatura, 1 marinada",
                  "de": "3 Holzarten, 2 Temperaturzonen, 1 Marinade",
                  "nl": "3 soorten hout, 2 temperatuurzones, 1 marinade"
        },
        {
                  "en": "Cook 3 racks, serve 2 people, save 1 for later",
                  "es": "Cocinar 3 costillares, servir 2 personas, guardar 1 para después",
                  "de": "3 Racks kochen, 2 Personen servieren, 1 für später aufheben",
                  "nl": "3 rekken koken, 2 mensen serveren, 1 voor later bewaren"
        },
        {
                  "en": "3 hours smoking, 2 hours wrapped, 1 hour unwrapped",
                  "es": "3 horas ahumando, 2 horas envueltas, 1 hora sin envolver",
                  "de": "3 Stunden räuchern, 2 Stunden eingewickelt, 1 Stunde ausgewickelt",
                  "nl": "3 uur roken, 2 uur ingepakt, 1 uur uitgepakt"
        },
        {
                  "en": "3 pounds ribs, 2 cups sauce, 1 hour cooking",
                  "es": "3 libras de costillas, 2 tazas de salsa, 1 hora cocinando",
                  "de": "3 Pfund Rippen, 2 Tassen Sauce, 1 Stunde kochen",
                  "nl": "3 pond ribben, 2 kopjes saus, 1 uur koken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The 3-2-1 method is a popular technique for spare ribs: 3 hours smoking unwrapped, 2 hours wrapped in foil with liquid, and 1 hour unwrapped with sauce.",
                  "es": "El método 3-2-1 es una técnica popular para spare ribs: 3 horas ahumando sin envolver, 2 horas envueltas en papel aluminio con líquido, y 1 hora sin envolver con salsa.",
                  "de": "Die 3-2-1 Methode ist eine beliebte Technik für Spare Ribs: 3 Stunden Räuchern ohne Verpackung, 2 Stunden in Folie eingewickelt mit Flüssigkeit, und 1 Stunde ausgepackt mit Sauce.",
                  "nl": "De 3-2-1 methode is een populaire techniek voor spare ribs: 3 uur roken ongepakt, 2 uur ingepakt in folie met vloeistof, en 1 uur uitgepakt met saus."
        }
      },
      {
        question: {
                  "en": "Why is it important to trim excess fat from brisket before cooking?",
                  "es": "¿Por qué es importante recortar el exceso de grasa del brisket antes de cocinar?",
                  "de": "Warum ist es wichtig überschüssiges Fett von der Rinderbrust vor dem Kochen zu trimmen?",
                  "nl": "Waarom is het belangrijk om overtollig vet van brisket te trimmen voor het koken?"
        },
        options: [
        {
                  "en": "Fat makes the meat taste bad",
                  "es": "La grasa hace que la carne sepa mal",
                  "de": "Fett lässt das Fleisch schlecht schmecken",
                  "nl": "Vet zorgt ervoor dat het vlees slecht smaakt"
        },
        {
                  "en": "Thick fat won't render and prevents seasoning penetration",
                  "es": "La grasa gruesa no se derrite y evita la penetración del condimento",
                  "de": "Dickes Fett rendert nicht und verhindert Gewürzdurchdringung",
                  "nl": "Dik vet smelt niet en voorkomt kruiden penetratie"
        },
        {
                  "en": "It's only for appearance",
                  "es": "Es solo por apariencia",
                  "de": "Es ist nur für das Aussehen",
                  "nl": "Het is alleen voor de uitstraling"
        },
        {
                  "en": "All fat must be removed completely",
                  "es": "Toda la grasa debe eliminarse completamente",
                  "de": "Alles Fett muss vollständig entfernt werden",
                  "nl": "Al het vet moet volledig verwijderd worden"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Excess fat (over 1/4 inch) won't render properly during cooking and blocks rub from penetrating the meat. Trim to about 1/4 inch for best results.",
                  "es": "El exceso de grasa (más de 1/4 de pulgada) no se derrite adecuadamente durante la cocción y bloquea que el aderezo penetre la carne. Recorta a aproximadamente 1/4 de pulgada para mejores resultados.",
                  "de": "Überschüssiges Fett (über 1/4 Zoll) rendert während des Kochens nicht richtig und blockiert das Eindringen des Rubs in das Fleisch. Auf etwa 1/4 Zoll trimmen für beste Ergebnisse.",
                  "nl": "Overtollig vet (meer dan 1/4 inch) smelt niet goed tijdens het koken en blokkeert rub van het penetreren van het vlees. Trim tot ongeveer 1/4 inch voor beste resultaten."
        }
      },
      {
        question: {
                  "en": "What does it mean when meat is 'probe tender'?",
                  "es": "¿Qué significa cuando la carne está 'probe tender'?",
                  "de": "Was bedeutet es wenn Fleisch 'Sonden-zart' ist?",
                  "nl": "Wat betekent het wanneer vlees 'probe tender' is?"
        },
        options: [
        {
                  "en": "The meat probe makes a beeping sound",
                  "es": "La sonda de carne hace un sonido de pitido",
                  "de": "Die Fleischsonde macht ein Piepgeräusch",
                  "nl": "De vleessonde maakt een piepgeluid"
        },
        {
                  "en": "A thermometer slides in with little resistance",
                  "es": "Un termómetro se desliza con poca resistencia",
                  "de": "Ein Thermometer gleitet mit wenig Widerstand hinein",
                  "nl": "Een thermometer glijdt er met weinig weerstand in"
        },
        {
                  "en": "The meat reaches exactly 165°F",
                  "es": "La carne alcanza exactamente 165°F",
                  "de": "Das Fleisch erreicht genau 165°F",
                  "nl": "Het vlees bereikt precies 165°F"
        },
        {
                  "en": "You can see through the meat with a probe",
                  "es": "Puedes ver a través de la carne con una sonda",
                  "de": "Man kann durch das Fleisch mit einer Sonde sehen",
                  "nl": "Je kunt door het vlees heen kijken met een sonde"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Probe tender means a thermometer or skewer slides into the meat with little resistance, like butter. This indicates the connective tissue has broken down and the meat is perfectly tender.",
                  "es": "Probe tender significa que un termómetro o pincho se desliza en la carne con poca resistencia, como mantequilla. Esto indica que el tejido conectivo se ha descompuesto y la carne está perfectamente tierna.",
                  "de": "Sonden-zart bedeutet ein Thermometer oder Spieß gleitet in das Fleisch mit wenig Widerstand, wie Butter. Dies zeigt an dass das Bindegewebe abgebaut wurde und das Fleisch perfekt zart ist.",
                  "nl": "Probe tender betekent dat een thermometer of spies in het vlees glijdt met weinig weerstand, zoals boter. Dit geeft aan dat het bindweefsel is afgebroken en het vlees perfect mals is."
        }
      },
      {
        question: {
                  "en": "What is a mop sauce in barbecue?",
                  "es": "¿Qué es una mop sauce en barbacoa?",
                  "de": "Was ist eine Mop Sauce beim Barbecue?",
                  "nl": "Wat is een mop saus bij barbecue?"
        },
        options: [
        {
                  "en": "A thin liquid applied during cooking to keep meat moist",
                  "es": "Un líquido delgado aplicado durante la cocción para mantener la carne húmeda",
                  "de": "Eine dünne Flüssigkeit die während des Kochens aufgetragen wird um Fleisch feucht zu halten",
                  "nl": "Een dunne vloeistof aangebracht tijdens het koken om vlees vochtig te houden"
        },
        {
                  "en": "Sauce made with actual mops",
                  "es": "Salsa hecha con trapeadores reales",
                  "de": "Sauce mit echten Mopps gemacht",
                  "nl": "Saus gemaakt met echte dweilen"
        },
        {
                  "en": "Thick barbecue sauce for dipping",
                  "es": "Salsa barbacoa espesa para mojar",
                  "de": "Dicke Barbecue-Sauce zum Dippen",
                  "nl": "Dikke barbecuesaus voor dipping"
        },
        {
                  "en": "Sauce used only for cleaning",
                  "es": "Salsa usada solo para limpiar",
                  "de": "Sauce nur zum Reinigen verwendet",
                  "nl": "Saus alleen gebruikt voor schoonmaken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A mop sauce is a thin, liquid basting sauce applied with a mop or brush during cooking to add moisture and flavor. It's thinner than traditional barbecue sauce.",
                  "es": "Una mop sauce es una salsa líquida delgada aplicada con un trapeador o pincel durante la cocción para añadir humedad y sabor. Es más delgada que la salsa barbacoa tradicional.",
                  "de": "Eine Mop Sauce ist eine dünne, flüssige Bastiersauce die mit einem Mopp oder Pinsel während des Kochens aufgetragen wird um Feuchtigkeit und Geschmack hinzuzufügen. Sie ist dünner als traditionelle Barbecue-Sauce.",
                  "nl": "Een mop saus is een dunne, vloeibare besprenkelsaus aangebracht met een dweil of borstel tijdens het koken om vocht en smaak toe te voegen. Het is dunner dan traditionele barbecuesaus."
        }
      },
      {
        question: {
                  "en": "What is the best way to add wood chips to a charcoal grill?",
                  "es": "¿Cuál es la mejor manera de añadir astillas de madera a una parrilla de carbón?",
                  "de": "Was ist der beste Weg Holzspäne zu einem Holzkohlegrill hinzuzufügen?",
                  "nl": "Wat is de beste manier om houten chips toe te voegen aan een houtskoolbarbecue?"
        },
        options: [
        {
                  "en": "Put dry chips directly in the flame",
                  "es": "Poner chips secas directamente en la llama",
                  "de": "Trockene Chips direkt in die Flamme legen",
                  "nl": "Droge chips direct in de vlam plaatsen"
        },
        {
                  "en": "Chips should never be used with charcoal",
                  "es": "Las chips nunca deben usarse con carbón",
                  "de": "Chips sollten nie mit Holzkohle verwendet werden",
                  "nl": "Chips mogen nooit met houtskool gebruikt worden"
        },
        {
                  "en": "Mix them with the charcoal before lighting",
                  "es": "Mezclarlas con el carbón antes de encender",
                  "de": "Mit der Holzkohle vor dem Anzünden mischen",
                  "nl": "Mengen met de houtskool voor het aansteken"
        },
        {
                  "en": "Soak them in water first, then place on hot coals",
                  "es": "Remojarlas en agua primero, luego colocarlas en carbones calientes",
                  "de": "Erst in Wasser einweichen, dann auf heiße Kohlen legen",
                  "nl": "Eerst in water laten weken, dan op hete kolen plaatsen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Soaking wood chips for 30 minutes to an hour prevents them from burning too quickly. Place soaked chips directly on hot coals to produce smoke gradually.",
                  "es": "Remojar las astillas de madera durante 30 minutos a una hora evita que se quemen demasiado rápido. Coloca las astillas remojadas directamente en carbones calientes para producir humo gradualmente.",
                  "de": "Das Einweichen von Holzspänen für 30 Minuten bis eine Stunde verhindert dass sie zu schnell verbrennen. Lege eingeweichte Späne direkt auf heiße Kohlen um Rauch schrittweise zu produzieren.",
                  "nl": "Het weken van houten chips gedurende 30 minuten tot een uur voorkomt dat ze te snel verbranden. Plaats geweekte chips direct op hete kolen om geleidelijk rook te produceren."
        }
      },
      {
        question: {
                  "en": "What is indirect heat cooking on a grill?",
                  "es": "¿Qué es cocinar con calor indirecto en una parrilla?",
                  "de": "Was ist indirektes Hitze-Kochen auf einem Grill?",
                  "nl": "Wat is indirect hitte koken op een grill?"
        },
        options: [
        {
                  "en": "Cooking with the lid closed only",
                  "es": "Cocinar solo con la tapa cerrada",
                  "de": "Nur mit geschlossenem Deckel kochen",
                  "nl": "Alleen koken met gesloten deksel"
        },
        {
                  "en": "Placing food away from the heat source",
                  "es": "Colocar la comida lejos de la fuente de calor",
                  "de": "Essen von der Hitzequelle entfernt platzieren",
                  "nl": "Voedsel plaatsen weg van de warmtebron"
        },
        {
                  "en": "Never turning the meat",
                  "es": "Nunca voltear la carne",
                  "de": "Fleisch niemals wenden",
                  "nl": "Vlees nooit omdraaien"
        },
        {
                  "en": "Using very low flames",
                  "es": "Usar llamas muy bajas",
                  "de": "Sehr niedrige Flammen verwenden",
                  "nl": "Zeer lage vlammen gebruiken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Indirect heat means placing food to the side of the heat source, not directly over it. This creates an oven-like environment perfect for slow cooking larger cuts.",
                  "es": "Calor indirecto significa colocar la comida al lado de la fuente de calor, no directamente sobre ella. Esto crea un ambiente tipo horno perfecto para cocinar lentamente cortes grandes.",
                  "de": "Indirekte Hitze bedeutet Essen seitlich der Hitzequelle zu platzieren, nicht direkt darüber. Dies schafft eine ofenähnliche Umgebung perfekt für langsames Kochen größerer Stücke.",
                  "nl": "Indirecte hitte betekent voedsel aan de zijkant van de warmtebron plaatsen, niet er direct boven. Dit creëert een ovenachtige omgeving perfect voor langzaam koken van grotere stukken."
        }
      },
      {
        question: {
                  "en": "What does it mean to 'season' a new grill or smoker?",
                  "es": "¿Qué significa 'curar' una parrilla o ahumador nuevo?",
                  "de": "Was bedeutet es einen neuen Grill oder Smoker 'einzubrennen'?",
                  "nl": "Wat betekent het om een nieuwe grill of roker te 'seasonen'?"
        },
        options: [
        {
                  "en": "Coating it with oil and heating to create a protective layer",
                  "es": "Cubrirlo con aceite y calentar para crear una capa protectora",
                  "de": "Mit Öl beschichten und erhitzen um Schutzschicht zu schaffen",
                  "nl": "Bedekken met olie en verhitten om beschermlaag te creëren"
        },
        {
                  "en": "Cleaning it with salt",
                  "es": "Limpiarlo con sal",
                  "de": "Mit Salz reinigen",
                  "nl": "Schoonmaken met zout"
        },
        {
                  "en": "Adding spices to the grill",
                  "es": "Añadir especias a la parrilla",
                  "de": "Gewürze zum Grill hinzufügen",
                  "nl": "Kruiden toevoegen aan de grill"
        },
        {
                  "en": "Using it only in certain seasons",
                  "es": "Usarlo solo en ciertas estaciones",
                  "de": "Nur in bestimmten Jahreszeiten verwenden",
                  "nl": "Het alleen in bepaalde seizoenen gebruiken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Seasoning a new grill means coating the interior surfaces with cooking oil and running it at high heat. This burns off manufacturing residues and creates a non-stick, rust-resistant coating.",
                  "es": "Curar una parrilla nueva significa cubrir las superficies interiores con aceite de cocina y calentarla a fuego alto. Esto quema residuos de fabricación y crea un recubrimiento antiadherente y resistente al óxido.",
                  "de": "Einbrennen eines neuen Grills bedeutet die Innenflächen mit Speiseöl zu beschichten und bei hoher Hitze laufen zu lassen. Dies verbrennt Fertigungsrückstände und schafft eine antihaftende, rostbeständige Beschichtung.",
                  "nl": "Seasonen van een nieuwe grill betekent het bedekken van de binnenoppervlakken met bakolie en op hoge hitte laten lopen. Dit verbrandt fabricageresten en creëert een antiaanbak, roestbestendige coating."
        }
      },
      {
        question: {
                  "en": "What is the 'plateau' or temperature stall most common in?",
                  "es": "¿En qué es más común el 'plateau' o estancamiento de temperatura?",
                  "de": "Wo ist das 'Plateau' oder Temperatur-Stall am häufigsten?",
                  "nl": "Waar is de 'plateau' of temperatuur stall het meest voorkomend in?"
        },
        options: [
        {
                  "en": "Small cuts like chicken wings",
                  "es": "Cortes pequeños como alitas de pollo",
                  "de": "Kleine Stücke wie Hühnerflügel",
                  "nl": "Kleine stukken zoals kippenvleugels"
        },
        {
                  "en": "Large cuts like brisket and pork shoulder",
                  "es": "Cortes grandes como brisket y paleta de cerdo",
                  "de": "Große Stücke wie Brisket und Schweineschulter",
                  "nl": "Grote stukken zoals brisket en varkensschouder"
        },
        {
                  "en": "Vegetables only",
                  "es": "Solo verduras",
                  "de": "Nur Gemüse",
                  "nl": "Alleen groenten"
        },
        {
                  "en": "Fish and seafood",
                  "es": "Pescado y mariscos",
                  "de": "Fisch und Meeresfrüchte",
                  "nl": "Vis en zeevruchten"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The stall occurs most commonly in large, fatty cuts like brisket and pork shoulder. The evaporative cooling effect is strongest in these larger pieces with more surface moisture.",
                  "es": "El estancamiento ocurre más comúnmente en cortes grandes y grasos como brisket y paleta de cerdo. El efecto de enfriamiento evaporativo es más fuerte en estas piezas grandes con más humedad superficial.",
                  "de": "Der Stall tritt am häufigsten bei großen, fettigen Stücken wie Brisket und Schweineschulter auf. Der Verdunstungskühlungseffekt ist bei diesen größeren Stücken mit mehr Oberflächenfeuchtigkeit am stärksten.",
                  "nl": "De stall komt het meest voor in grote, vette stukken zoals brisket en varkensschouder. Het verdampingskoeleffect is het sterkst in deze grotere stukken met meer oppervlaktevocht."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  }
})();