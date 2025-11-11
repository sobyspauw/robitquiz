// Barbecue Quiz - Level 2: Intermediate Techniques and Equipment
(function() {
  const level2 = {
    name: {
      en: "Barbecue Level 2",
      es: "Barbacoa Nivel 2",
      de: "Grillen Stufe 2",
      nl: "Barbecue Level 2"
    },
    questions: [
      {
        question: {
          en: "What is the difference between direct and indirect grilling?",
          es: "¿Cuál es la diferencia entre asado directo e indirecto?",
          de: "Was ist der Unterschied zwischen direktem und indirektem Grillen?",
          nl: "Wat is het verschil tussen direct en indirect grillen?"
        },
        options: [
          { en: "Direct places food over heat source, indirect places food away from heat", es: "Directo coloca comida sobre fuente de calor, indirecto la coloca lejos del calor", de: "Direkt platziert Essen über Wärmequelle, indirekt platziert Essen weg von der Hitze", nl: "Direct plaatst voedsel boven warmtebron, indirect plaatst voedsel weg van warmte" },
          { en: "Direct uses charcoal, indirect uses gas", es: "Directo usa carbón, indirecto usa gas", de: "Direkt nutzt Holzkohle, indirekt nutzt Gas", nl: "Direct gebruikt houtskool, indirect gebruikt gas" },
          { en: "Direct is faster, indirect is slower", es: "Directo es más rápido, indirecto es más lento", de: "Direkt ist schneller, indirekt ist langsamer", nl: "Direct is sneller, indirect is langzamer" },
          { en: "They are the same method", es: "Son el mismo método", de: "Sie sind dieselbe Methode", nl: "Ze zijn dezelfde methode" }
        ],
        correct: 0,
        explanation: {
          en: "Direct grilling cooks food directly over the heat source for searing and quick cooking. Indirect grilling uses reflected heat, like an outdoor oven, for slow roasting.",
          es: "El asado directo cocina comida directamente sobre la fuente de calor para sellar y cocción rápida. El asado indirecto usa calor reflejado, como un horno al aire libre, para asado lento.",
          de: "Direktes Grillen kocht Essen direkt über der Wärmequelle zum Anbraten und schnellen Kochen. Indirektes Grillen nutzt reflektierte Hitze, wie ein Outdoor-Ofen, zum langsamen Braten.",
          nl: "Direct grillen kookt voedsel direct boven de warmtebron voor dichtschroeien en snel koken. Indirect grillen gebruikt gereflecteerde warmte, zoals een buitenoven, voor langzaam braden."
        }
      },
      {
        question: {
          en: "What wood gives a mild, sweet flavor that's good for poultry and pork?",
          es: "¿Qué madera da un sabor suave y dulce que es bueno para aves y cerdo?",
          de: "Welches Holz gibt einen milden, süßen Geschmack, der gut für Geflügel und Schweinefleisch ist?",
          nl: "Welk hout geeft een milde, zoete smaak die goed is voor gevogelte en varkensvlees?"
        },
        options: [
          { en: "Apple", es: "Manzana", de: "Apfel", nl: "Appel" },
          { en: "Mesquite", es: "Mezquite", de: "Mesquite", nl: "Mesquite" },
          { en: "Hickory", es: "Nogal americano", de: "Hickory", nl: "Hickory" },
          { en: "Oak", es: "Roble", de: "Eiche", nl: "Eik" }
        ],
        correct: 0,
        explanation: {
          en: "Apple wood provides a mild, sweet, fruity flavor that complements lighter meats like chicken, turkey, and pork without overwhelming them.",
          es: "La madera de manzana proporciona un sabor suave, dulce y afrutado que complementa carnes más ligeras como pollo, pavo y cerdo sin abrumarlas.",
          de: "Apfelholz bietet einen milden, süßen, fruchtigen Geschmack, der leichtere Fleischsorten wie Hähnchen, Truthahn und Schweinefleisch ergänzt, ohne sie zu überwältigen.",
          nl: "Appelhout biedt een milde, zoete, fruitige smaak die lichter vlees zoals kip, kalkoen en varkensvlees aanvult zonder het te overheersen."
        }
      },
      {
        question: {
          en: "What is the purpose of a water pan in a smoker?",
          es: "¿Cuál es el propósito de una bandeja de agua en un ahumador?",
          de: "Was ist der Zweck einer Wasserpfanne in einem Räucherofen?",
          nl: "Wat is het doel van een waterpan in een smoker?"
        },
        options: [
          { en: "To maintain moisture and stabilize temperature", es: "Para mantener humedad y estabilizar temperatura", de: "Um Feuchtigkeit zu erhalten und Temperatur zu stabilisieren", nl: "Om vocht te behouden en temperatuur te stabiliseren" },
          { en: "To put out fires", es: "Para apagar fuegos", de: "Um Feuer zu löschen", nl: "Om branden te blussen" },
          { en: "To clean the smoker", es: "Para limpiar el ahumador", de: "Um den Räucherofen zu reinigen", nl: "Om de smoker schoon te maken" },
          { en: "To cool down the meat", es: "Para enfriar la carne", de: "Um das Fleisch abzukühlen", nl: "Om het vlees af te koelen" }
        ],
        correct: 0,
        explanation: {
          en: "A water pan creates humidity in the cooking chamber, prevents meat from drying out, and acts as a heat sink to stabilize cooking temperatures.",
          es: "Una bandeja de agua crea humedad en la cámara de cocción, previene que la carne se seque y actúa como disipador de calor para estabilizar temperaturas de cocción.",
          de: "Eine Wasserpfanne erzeugt Feuchtigkeit in der Kochkammer, verhindert das Austrocknen des Fleisches und wirkt als Wärmespeicher zur Stabilisierung der Kochtemperaturen.",
          nl: "Een waterpan creëert vochtigheid in de kookkamer, voorkomt dat vlees uitdroogt en werkt als warmteput om kooktemperaturen te stabiliseren."
        }
      },
      {
        question: {
          en: "What does it mean to 'kiss of smoke' the meat?",
          es: "¿Qué significa dar un 'beso de humo' a la carne?",
          de: "Was bedeutet es, dem Fleisch einen 'Rauchkuss' zu geben?",
          nl: "Wat betekent het om het vlees een 'rookkus' te geven?"
        },
        options: [
          { en: "Light smoking to add subtle flavor without overpowering", es: "Ahumado ligero para añadir sabor sutil sin abrumar", de: "Leichtes Räuchern um subtilen Geschmack zu verleihen ohne zu überwältigen", nl: "Licht roken om subtiele smaak toe te voegen zonder te overheersen" },
          { en: "Using only fruit woods", es: "Usar solo maderas de frutas", de: "Nur Obsthölzer verwenden", nl: "Alleen fruithouten gebruiken" },
          { en: "Smoking for exactly one hour", es: "Ahumar por exactamente una hora", de: "Genau eine Stunde räuchern", nl: "Precies een uur roken" },
          { en: "Adding sauce while smoking", es: "Añadir salsa mientras se ahuma", de: "Sauce beim Räuchern hinzufügen", nl: "Saus toevoegen tijdens het roken" }
        ],
        correct: 0,
        explanation: {
          en: "A 'kiss of smoke' refers to light, delicate smoking that enhances rather than dominates the natural flavor of the meat, perfect for fish and poultry.",
          es: "Un 'beso de humo' se refiere a un ahumado ligero y delicado que realza en lugar de dominar el sabor natural de la carne, perfecto para pescado y aves.",
          de: "Ein 'Rauchkuss' bezieht sich auf leichtes, zartes Räuchern, das den natürlichen Geschmack des Fleisches verstärkt statt zu dominieren, perfekt für Fisch und Geflügel.",
          nl: "Een 'rookkus' verwijst naar licht, delicaat roken dat de natuurlijke smaak van het vlees versterkt in plaats van overheerst, perfect voor vis en gevogelte."
        }
      },
      {
        question: {
          en: "What is the 2-zone method in grilling?",
          es: "¿Qué es el método de 2 zonas en el asado?",
          de: "Was ist die 2-Zonen-Methode beim Grillen?",
          nl: "Wat is de 2-zone methode bij grillen?"
        },
        options: [
          { en: "Creating hot and cool areas on the grill for different cooking stages", es: "Crear áreas calientes y frías en la parrilla para diferentes etapas de cocción", de: "Heiße und kühle Bereiche auf dem Grill für verschiedene Kochstufen schaffen", nl: "Warme en koele gebieden op de grill creëren voor verschillende kookfasen" },
          { en: "Using two different types of fuel", es: "Usar dos tipos diferentes de combustible", de: "Zwei verschiedene Brennstoffarten verwenden", nl: "Twee verschillende brandstofsoorten gebruiken" },
          { en: "Cooking for two hours exactly", es: "Cocinar por exactamente dos horas", de: "Genau zwei Stunden kochen", nl: "Precies twee uur koken" },
          { en: "Having two grills running", es: "Tener dos parrillas funcionando", de: "Zwei Grills laufen lassen", nl: "Twee grills laten draaien" }
        ],
        correct: 0,
        explanation: {
          en: "The 2-zone method creates a hot zone for searing and a cooler zone for gentle cooking, allowing you to move food between areas as needed.",
          es: "El método de 2 zonas crea una zona caliente para sellar y una zona más fría para cocción suave, permitiendo mover comida entre áreas según sea necesario.",
          de: "Die 2-Zonen-Methode schafft eine heiße Zone zum Anbraten und eine kühlere Zone zum sanften Kochen, so dass man Essen zwischen den Bereichen nach Bedarf bewegen kann.",
          nl: "De 2-zone methode creëert een hete zone voor dichtschroeien en een koelere zone voor zacht koken, waardoor je voedsel tussen gebieden kunt verplaatsen zoals nodig."
        }
      },
      {
        question: {
          en: "What does 'rendering' mean when barbecuing fatty cuts?",
          es: "¿Qué significa 'rendering' al hacer barbacoa con cortes grasos?",
          de: "Was bedeutet 'Rendering' beim Barbecue von fetten Fleischstücken?",
          nl: "Wat betekent 'rendering' bij het barbecueën van vette stukken?"
        },
        options: [
          { en: "Slowly melting fat to make meat tender and flavorful", es: "Derretir grasa lentamente para hacer la carne tierna y sabrosa", de: "Fett langsam schmelzen um Fleisch zart und geschmackvoll zu machen", nl: "Langzaam vet smelten om vlees mals en smaakvol te maken" },
          { en: "Cutting the meat into pieces", es: "Cortar la carne en pedazos", de: "Das Fleisch in Stücke schneiden", nl: "Het vlees in stukken snijden" },
          { en: "Adding sauce to the surface", es: "Añadir salsa a la superficie", de: "Sauce auf die Oberfläche geben", nl: "Saus op het oppervlak aanbrengen" },
          { en: "Cooking at high temperature", es: "Cocinar a alta temperatura", de: "Bei hoher Temperatur kochen", nl: "Koken op hoge temperatuur" }
        ],
        correct: 0,
        explanation: {
          en: "Rendering is the process of slowly cooking fatty cuts to melt intramuscular fat, which bastes the meat from within and creates incredible tenderness and flavor.",
          es: "El rendering es el proceso de cocinar lentamente cortes grasos para derretir grasa intramuscular, que rocía la carne desde adentro y crea increíble ternura y sabor.",
          de: "Rendering ist der Prozess des langsamen Kochens fetter Fleischstücke um intramuskuläres Fett zu schmelzen, was das Fleisch von innen übergießt und unglaubliche Zartheit und Geschmack schafft.",
          nl: "Rendering is het proces van langzaam koken van vette stukken om intramusculair vet te smelten, wat het vlees van binnenuit begieft en ongelooflijke malheid en smaak creëert."
        }
      },
      {
        question: {
          en: "What temperature range is ideal for most barbecue smoking?",
          es: "¿Qué rango de temperatura es ideal para la mayoría del ahumado de barbacoa?",
          de: "Welcher Temperaturbereich ist ideal für die meisten Barbecue-Räuchervorgänge?",
          nl: "Welk temperatuurbereik is ideaal voor de meeste barbecue rookprocessen?"
        },
        options: [
          { en: "225-275°F (107-135°C)", es: "225-275°F (107-135°C)", de: "225-275°F (107-135°C)", nl: "225-275°F (107-135°C)" },
          { en: "300-350°F (149-177°C)", es: "300-350°F (149-177°C)", de: "300-350°F (149-177°C)", nl: "300-350°F (149-177°C)" },
          { en: "180-200°F (82-93°C)", es: "180-200°F (82-93°C)", de: "180-200°F (82-93°C)", nl: "180-200°F (82-93°C)" },
          { en: "400-450°F (204-232°C)", es: "400-450°F (204-232°C)", de: "400-450°F (204-232°C)", nl: "400-450°F (204-232°C)" }
        ],
        correct: 0,
        explanation: {
          en: "The sweet spot for barbecue smoking is 225-275°F, hot enough to break down tough fibers but cool enough to allow smoke penetration and prevent drying.",
          es: "El punto ideal para ahumar barbacoa es 225-275°F, lo suficientemente caliente para descomponer fibras duras pero lo suficientemente frío para permitir penetración de humo y prevenir secado.",
          de: "Der optimale Bereich für Barbecue-Räuchern ist 225-275°F, heiß genug um zähe Fasern aufzubrechen aber kühl genug um Rauchpenetration zu erlauben und Austrocknung zu verhindern.",
          nl: "Het optimale punt voor barbecue roken is 225-275°F, heet genoeg om taaie vezels af te breken maar koel genoeg om rookpenetratie toe te staan en uitdroging te voorkomen."
        }
      },
      {
        question: {
          en: "What is 'mopping' or 'spritzing' during barbecue?",
          es: "¿Qué es 'mopping' o 'spritzing' durante la barbacoa?",
          de: "Was ist 'Mopping' oder 'Spritzing' während des Barbecues?",
          nl: "Wat is 'mopping' of 'spritzing' tijdens barbecue?"
        },
        options: [
          { en: "Periodically basting meat with liquid to add moisture and flavor", es: "Rociar periódicamente la carne con líquido para añadir humedad y sabor", de: "Fleisch periodisch mit Flüssigkeit übergießen um Feuchtigkeit und Geschmack zu verleihen", nl: "Periodiek vlees begieten met vloeistof om vocht en smaak toe te voegen" },
          { en: "Cleaning the grill grates", es: "Limpiar las rejillas de la parrilla", de: "Die Grillroste reinigen", nl: "De grillroosters schoonmaken" },
          { en: "Adding more charcoal", es: "Añadir más carbón", de: "Mehr Holzkohle hinzufügen", nl: "Meer houtskool toevoegen" },
          { en: "Rotating the meat", es: "Rotar la carne", de: "Das Fleisch drehen", nl: "Het vlees draaien" }
        ],
        correct: 0,
        explanation: {
          en: "Mopping or spritzing involves applying liquid (like apple juice, beer, or vinegar) to keep the surface moist and help develop a better bark.",
          es: "Mopping o spritzing implica aplicar líquido (como jugo de manzana, cerveza o vinagre) para mantener húmeda la superficie y ayudar a desarrollar mejor corteza.",
          de: "Mopping oder Spritzing beinhaltet das Auftragen von Flüssigkeit (wie Apfelsaft, Bier oder Essig) um die Oberfläche feucht zu halten und eine bessere Rinde zu entwickeln.",
          nl: "Mopping of spritzing houdt het aanbrengen van vloeistof (zoals appelsap, bier of azijn) in om het oppervlak vochtig te houden en een betere korst te ontwikkelen."
        }
      },
      {
        question: {
          en: "What cut of beef is known as the 'holy grail' of barbecue?",
          es: "¿Qué corte de res es conocido como el 'santo grial' de la barbacoa?",
          de: "Welcher Rindfleischstück ist als der 'heilige Gral' des Barbecues bekannt?",
          nl: "Welk stuk rundvlees staat bekend als de 'heilige graal' van barbecue?"
        },
        options: [
          { en: "Brisket", es: "Pecho", de: "Rinderbrust", nl: "Brisket" },
          { en: "Ribeye", es: "Ribeye", de: "Ribeye", nl: "Ribeye" },
          { en: "Sirloin", es: "Solomillo", de: "Roastbeef", nl: "Biefstuk" },
          { en: "Chuck roast", es: "Asado de paleta", de: "Schultersteak", nl: "Schouderbraad" }
        ],
        correct: 0,
        explanation: {
          en: "Brisket is considered the ultimate test of barbecue skill due to its tough connective tissue that requires perfect time, temperature, and technique to transform into tender perfection.",
          es: "El pecho es considerado la prueba suprema de habilidad en barbacoa debido a su tejido conectivo duro que requiere tiempo, temperatura y técnica perfectos para transformarse en perfección tierna.",
          de: "Rinderbrust gilt als ultimativer Test der Barbecue-Fähigkeiten aufgrund ihres zähen Bindegewebes, das perfekte Zeit, Temperatur und Technik erfordert um in zarte Perfektion verwandelt zu werden.",
          nl: "Brisket wordt beschouwd als de ultieme test van barbecue vaardigheid vanwege het taaie bindweefsel dat perfecte tijd, temperatuur en techniek vereist om te transformeren tot malse perfectie."
        }
      },
      {
        question: {
          en: "What is the purpose of a chimney starter?",
          es: "¿Cuál es el propósito de un encendedor de chimenea?",
          de: "Was ist der Zweck eines Kaminanzünders?",
          nl: "Wat is het doel van een schoorsteenaansteker?"
        },
        options: [
          { en: "To light charcoal evenly without lighter fluid", es: "Para encender carbón uniformemente sin líquido encendedor", de: "Um Holzkohle gleichmäßig ohne Grillanzünder zu entzünden", nl: "Om houtskool gelijkmatig aan te steken zonder aanmaakblokjes" },
          { en: "To control smoke output", es: "Para controlar la salida de humo", de: "Um die Rauchausgabe zu kontrollieren", nl: "Om rookuitstoot te controleren" },
          { en: "To add wood chips", es: "Para añadir astillas de madera", de: "Um Holzspäne hinzuzufügen", nl: "Om houten chips toe te voegen" },
          { en: "To measure temperature", es: "Para medir temperatura", de: "Um Temperatur zu messen", nl: "Om temperatuur te meten" }
        ],
        correct: 0,
        explanation: {
          en: "A chimney starter uses newspaper and airflow to ignite charcoal quickly and evenly without chemicals, producing clean-burning coals ready for cooking.",
          es: "Un encendedor de chimenea usa periódico y flujo de aire para encender carbón rápida y uniformemente sin químicos, produciendo carbones de quema limpia listos para cocinar.",
          de: "Ein Kaminanzünder nutzt Zeitungspapier und Luftstrom um Holzkohle schnell und gleichmäßig ohne Chemikalien zu entzünden und sauber brennende Kohlen für das Kochen zu produzieren.",
          nl: "Een schoorsteenaansteker gebruikt krant en luchtstroom om houtskool snel en gelijkmatig aan te steken zonder chemicaliën, wat schoon brandende kolen oplevert die klaar zijn om te koken."
        }
      },
      {
        question: {
          en: "What does 'pulling' pork mean?",
          es: "¿Qué significa 'pulling' el cerdo?",
          de: "Was bedeutet Schweinefleisch 'pullen'?",
          nl: "Wat betekent varkensvlees 'pullen'?"
        },
        options: [
          { en: "Shredding cooked pork shoulder into bite-sized pieces", es: "Desmenuzar paleta de cerdo cocida en pedazos del tamaño de un bocado", de: "Gekochte Schweineschulter in mundgerechte Stücke zerkleinern", nl: "Gekookte varkensschouder in hapklare stukjes verdelen" },
          { en: "Removing fat from raw meat", es: "Quitar grasa de carne cruda", de: "Fett von rohem Fleisch entfernen", nl: "Vet van rauw vlees verwijderen" },
          { en: "Marinating the meat", es: "Marinar la carne", de: "Das Fleisch marinieren", nl: "Het vlees marineren" },
          { en: "Taking meat off the grill", es: "Sacar carne de la parrilla", de: "Fleisch vom Grill nehmen", nl: "Vlees van de grill halen" }
        ],
        correct: 0,
        explanation: {
          en: "Pulling pork refers to shredding properly cooked pork shoulder that's so tender it easily separates into strands with just forks or hands.",
          es: "Pulling pork se refiere a desmenuzar paleta de cerdo cocida correctamente que está tan tierna que fácilmente se separa en hebras solo con tenedores o manos.",
          de: "Pork pullen bezieht sich auf das Zerkleinern richtig gekochter Schweineschulter, die so zart ist, dass sie leicht mit nur Gabeln oder Händen in Streifen getrennt werden kann.",
          nl: "Pork pullen verwijst naar het verdelen van goed gekookte varkensschouder die zo mals is dat het gemakkelijk in draden scheidt met alleen vorken of handen."
        }
      },
      {
        question: {
          en: "What is the benefit of using a meat thermometer with a probe?",
          es: "¿Cuál es el beneficio de usar un termómetro de carne con sonda?",
          de: "Was ist der Vorteil eines Fleischthermometers mit Sonde?",
          nl: "Wat is het voordeel van het gebruik van een vleesthermometer met sonde?"
        },
        options: [
          { en: "Monitor internal temperature without opening the cooker", es: "Monitorear temperatura interna sin abrir el cocinero", de: "Innentemperatur überwachen ohne den Kocher zu öffnen", nl: "Interne temperatuur monitoren zonder de kooktoestel te openen" },
          { en: "It cooks the meat faster", es: "Cocina la carne más rápido", de: "Es kocht das Fleisch schneller", nl: "Het kookt het vlees sneller" },
          { en: "It adds flavor to the meat", es: "Añade sabor a la carne", de: "Es verleiht dem Fleisch Geschmack", nl: "Het voegt smaak toe aan het vlees" },
          { en: "It tenderizes tough cuts", es: "Ablanda cortes duros", de: "Es macht zähe Stücke zart", nl: "Het maakt taaie stukken mals" }
        ],
        correct: 0,
        explanation: {
          en: "A probe thermometer allows continuous monitoring of internal meat temperature without lifting the lid, which would release heat and smoke.",
          es: "Un termómetro de sonda permite monitoreo continuo de la temperatura interna de la carne sin levantar la tapa, lo que liberaría calor y humo.",
          de: "Ein Sondenthermometer ermöglicht kontinuierliche Überwachung der inneren Fleischtemperatur ohne den Deckel zu heben, was Hitze und Rauch freisetzen würde.",
          nl: "Een sondethermometer maakt continue monitoring van de interne vleestemperatuur mogelijk zonder het deksel op te tillen, wat warmte en rook zou vrijgeven."
        }
      },
      {
        question: {
          en: "What type of ribs are 'baby back ribs'?",
          es: "¿Qué tipo de costillas son las 'baby back ribs'?",
          de: "Was für Rippen sind 'Baby Back Ribs'?",
          nl: "Wat voor ribs zijn 'baby back ribs'?"
        },
        options: [
          { en: "Pork ribs from the back/loin area", es: "Costillas de cerdo del área de la espalda/lomo", de: "Schweinerippchen aus dem Rücken-/Lendenbereich", nl: "Varkensribbetjes uit het rug-/lendegebied" },
          { en: "Ribs from young pigs only", es: "Costillas solo de cerdos jóvenes", de: "Rippen nur von jungen Schweinen", nl: "Ribs alleen van jonge varkens" },
          { en: "The smallest ribs on any animal", es: "Las costillas más pequeñas de cualquier animal", de: "Die kleinsten Rippen an jedem Tier", nl: "De kleinste ribs van elk dier" },
          { en: "Beef ribs from calves", es: "Costillas de res de terneros", de: "Rinderrippen von Kälbern", nl: "Rundvleesribs van kalveren" }
        ],
        correct: 0,
        explanation: {
          en: "Baby back ribs come from the back and loin section of the pig, are shorter and more tender than spare ribs, with meat between the bones.",
          es: "Las baby back ribs vienen de la sección de espalda y lomo del cerdo, son más cortas y tiernas que las spare ribs, con carne entre los huesos.",
          de: "Baby Back Ribs kommen aus dem Rücken- und Lendenbereich des Schweins, sind kürzer und zarter als Spare Ribs, mit Fleisch zwischen den Knochen.",
          nl: "Baby back ribs komen uit het rug- en lendegedeelte van het varken, zijn korter en malser dan spare ribs, met vlees tussen de botten."
        }
      },
      {
        question: {
          en: "What is 'bark' formation dependent on?",
          es: "¿De qué depende la formación de 'bark'?",
          de: "Wovon ist die 'Bark'-Bildung abhängig?",
          nl: "Waar is 'bark' vorming afhankelijk van?"
        },
        options: [
          { en: "Rub ingredients, time, and proper airflow", es: "Ingredientes del rub, tiempo y flujo de aire adecuado", de: "Rub-Zutaten, Zeit und richtige Luftströmung", nl: "Rub ingrediënten, tijd en juiste luchtstroom" },
          { en: "Only high temperatures", es: "Solo altas temperaturas", de: "Nur hohe Temperaturen", nl: "Alleen hoge temperaturen" },
          { en: "Type of wood used", es: "Tipo de madera usada", de: "Art des verwendeten Holzes", nl: "Type hout dat wordt gebruikt" },
          { en: "Amount of sauce applied", es: "Cantidad de salsa aplicada", de: "Menge der aufgetragenen Sauce", nl: "Hoeveelheid toegepaste saus" }
        ],
        correct: 0,
        explanation: {
          en: "Good bark formation requires the right rub (salt and sugar), adequate cooking time for Maillard reactions, and proper airflow to create the desired crust.",
          es: "Una buena formación de bark requiere el rub correcto (sal y azúcar), tiempo de cocción adecuado para reacciones de Maillard, y flujo de aire apropiado para crear la corteza deseada.",
          de: "Gute Bark-Bildung erfordert das richtige Rub (Salz und Zucker), angemessene Kochzeit für Maillard-Reaktionen und richtige Luftströmung um die gewünschte Kruste zu erzeugen.",
          nl: "Goede bark vorming vereist de juiste rub (zout en suiker), voldoende kooktijd voor Maillard reacties, en juiste luchtstroom om de gewenste korst te creëren."
        }
      },
      {
        question: {
          en: "What is the 3-2-1 method for ribs?",
          es: "¿Qué es el método 3-2-1 para costillas?",
          de: "Was ist die 3-2-1-Methode für Rippen?",
          nl: "Wat is de 3-2-1 methode voor ribs?"
        },
        options: [
          { en: "3 hours uncovered, 2 hours wrapped, 1 hour uncovered", es: "3 horas descubiertas, 2 horas envueltas, 1 hora descubierta", de: "3 Stunden unbedeckt, 2 Stunden eingewickelt, 1 Stunde unbedeckt", nl: "3 uur onbedekt, 2 uur ingepakt, 1 uur onbedekt" },
          { en: "3 different rubs, 2 wood types, 1 sauce", es: "3 rubs diferentes, 2 tipos de madera, 1 salsa", de: "3 verschiedene Rubs, 2 Holzarten, 1 Sauce", nl: "3 verschillende rubs, 2 houtsoorten, 1 saus" },
          { en: "3 pounds of ribs, 2 hours cooking, 1 hour resting", es: "3 libras de costillas, 2 horas cocinando, 1 hora reposando", de: "3 Pfund Rippen, 2 Stunden kochen, 1 Stunde ruhen", nl: "3 pond ribs, 2 uur koken, 1 uur rusten" },
          { en: "3 temperature zones, 2 types of fuel, 1 thermometer", es: "3 zonas de temperatura, 2 tipos de combustible, 1 termómetro", de: "3 Temperaturzonen, 2 Brennstoffarten, 1 Thermometer", nl: "3 temperatuurzones, 2 brandstofsoorten, 1 thermometer" }
        ],
        correct: 0,
        explanation: {
          en: "The 3-2-1 method is a popular rib-cooking technique: 3 hours unwrapped for bark development, 2 hours wrapped for tenderness, 1 hour unwrapped to firm up the bark.",
          es: "El método 3-2-1 es una técnica popular para cocinar costillas: 3 horas sin envolver para desarrollo de bark, 2 horas envueltas para ternura, 1 hora sin envolver para firmar el bark.",
          de: "Die 3-2-1-Methode ist eine beliebte Rippen-Koch-Technik: 3 Stunden uneingewickelt für Bark-Entwicklung, 2 Stunden eingewickelt für Zartheit, 1 Stunde uneingewickelt um die Bark zu festigen.",
          nl: "De 3-2-1 methode is een populaire rib-kooktechniek: 3 uur onverpakt voor bark ontwikkeling, 2 uur verpakt voor malheid, 1 uur onverpakt om de bark te verstevigen."
        }
      },
      {
        question: {
          en: "What does it mean when meat is 'probe tender'?",
          es: "¿Qué significa cuando la carne está 'probe tender'?",
          de: "Was bedeutet es wenn Fleisch 'probe tender' ist?",
          nl: "Wat betekent het wanneer vlees 'probe tender' is?"
        },
        options: [
          { en: "A probe slides in and out like soft butter", es: "Una sonda se desliza dentro y fuera como mantequilla suave", de: "Eine Sonde gleitet hinein und heraus wie weiche Butter", nl: "Een sonde glijdt erin en eruit als zachte boter" },
          { en: "The meat reaches exactly 200°F", es: "La carne alcanza exactamente 200°F", de: "Das Fleisch erreicht genau 200°F", nl: "Het vlees bereikt precies 200°F" },
          { en: "The probe thermometer beeps", es: "El termómetro de sonda pita", de: "Das Sondenthermometer piept", nl: "De sondethermometer piept" },
          { en: "You can see through the meat", es: "Puedes ver a través de la carne", de: "Man kann durch das Fleisch sehen", nl: "Je kunt door het vlees heen kijken" }
        ],
        correct: 0,
        explanation: {
          en: "Probe tender describes perfectly cooked barbecue where a thermometer probe meets no resistance when inserted, indicating collagen has fully converted to gelatin.",
          es: "Probe tender describe barbacoa perfectamente cocinada donde una sonda de termómetro no encuentra resistencia al insertarse, indicando que el colágeno se ha convertido completamente en gelatina.",
          de: "Probe tender beschreibt perfekt gekochtes Barbecue, wo eine Thermometersonde keinen Widerstand beim Einführen trifft, was anzeigt dass Kollagen vollständig zu Gelatine umgewandelt wurde.",
          nl: "Probe tender beschrijft perfect gekookte barbecue waar een thermometersonde geen weerstand ontmoet bij het inbrengen, wat aangeeft dat collageen volledig is omgezet naar gelatine."
        }
      },
      {
        question: {
          en: "What is the advantage of using butcher paper over foil for wrapping?",
          es: "¿Cuál es la ventaja de usar papel de carnicero sobre papel aluminio para envolver?",
          de: "Was ist der Vorteil von Metzgerpapier gegenüber Folie zum Einwickeln?",
          nl: "Wat is het voordeel van slagerspapier ten opzichte van folie voor het inpakken?"
        },
        options: [
          { en: "It's breathable and helps maintain bark texture", es: "Es transpirable y ayuda a mantener la textura del bark", de: "Es ist atmungsaktiv und hilft die Bark-Textur zu erhalten", nl: "Het is ademend en helpt de bark textuur te behouden" },
          { en: "It's cheaper than foil", es: "Es más barato que el papel aluminio", de: "Es ist billiger als Folie", nl: "Het is goedkoper dan folie" },
          { en: "It cooks faster", es: "Cocina más rápido", de: "Es kocht schneller", nl: "Het kookt sneller" },
          { en: "It adds flavor to the meat", es: "Añade sabor a la carne", de: "Es verleiht dem Fleisch Geschmack", nl: "Het voegt smaak toe aan het vlees" }
        ],
        correct: 0,
        explanation: {
          en: "Butcher paper is porous, allowing some moisture to escape while still protecting the meat, helping preserve the bark's texture better than non-porous foil.",
          es: "El papel de carnicero es poroso, permitiendo que escape algo de humedad mientras protege la carne, ayudando a preservar la textura del bark mejor que el papel aluminio no poroso.",
          de: "Metzgerpapier ist porös und lässt etwas Feuchtigkeit entweichen während es das Fleisch schützt, hilft die Bark-Textur besser zu bewahren als nicht-poröse Folie.",
          nl: "Slagerspapier is poreus en laat wat vocht ontsnappen terwijl het het vlees beschermt, wat helpt de bark textuur beter te behouden dan niet-poreuze folie."
        }
      },
      {
        question: {
          en: "What should you look for when buying a good brisket?",
          es: "¿Qué debes buscar al comprar un buen brisket?",
          de: "Worauf solltest du beim Kauf einer guten Rinderbrust achten?",
          nl: "Waar moet je op letten bij het kopen van een goede brisket?"
        },
        options: [
          { en: "Good marbling and a thick flat section", es: "Buen marmoleo y una sección plana gruesa", de: "Gute Marmorierung und einen dicken flachen Bereich", nl: "Goede marmerering en een dikke platte sectie" },
          { en: "The cheapest price available", es: "El precio más barato disponible", de: "Der günstigste verfügbare Preis", nl: "De goedkoopste prijs beschikbaar" },
          { en: "The largest size possible", es: "El tamaño más grande posible", de: "Die größtmögliche Größe", nl: "De grootst mogelijke maat" },
          { en: "Bright red color only", es: "Solo color rojo brillante", de: "Nur hellrote Farbe", nl: "Alleen helderrode kleur" }
        ],
        correct: 0,
        explanation: {
          en: "A good brisket should have visible marbling (fat streaks), a thick flat section for even cooking, and good fat cap thickness for moisture retention.",
          es: "Un buen brisket debe tener marmoleo visible (vetas de grasa), una sección plana gruesa para cocción uniforme, y buen grosor de capa de grasa para retención de humedad.",
          de: "Eine gute Rinderbrust sollte sichtbare Marmorierung (Fettstreifen) haben, einen dicken flachen Bereich für gleichmäßiges Kochen, und gute Fettkappendicke für Feuchtigkeitserhaltung.",
          nl: "Een goede brisket moet zichtbare marmerering (vetstrepen) hebben, een dikke platte sectie voor gelijkmatig koken, en goede vetlaagdikte voor vochtbehoud."
        }
      },
      {
        question: {
          en: "What is the 'snake method' for charcoal arrangement?",
          es: "¿Qué es el 'método de serpiente' para arreglo de carbón?",
          de: "Was ist die 'Schlangenmethode' für Kohleanordnung?",
          nl: "Wat is de 'slangmethode' voor houtskoolschikking?"
        },
        options: [
          { en: "Arranging coals in a C-shape around perimeter for slow, even heat 6-8 hours", es: "Arreglar carbones en forma de C alrededor del perímetro para calor lento y uniforme 6-8 horas", de: "Kohlen in C-Form um den Umfang anordnen für langsame, gleichmäßige Hitze 6-8 Stunden", nl: "Kolen in C-vorm rond de omtrek schikken voor langzame, gelijkmatige warmte 6-8 uur" },
          { en: "Stacking coals in a spiral pyramid", es: "Apilar carbones en pirámide espiral", de: "Kohlen in Spiralpyramide stapeln", nl: "Kolen stapelen in spiraal piramide" },
          { en: "Placing coals only in the center", es: "Colocar carbones solo en el centro", de: "Kohlen nur in der Mitte platzieren", nl: "Kolen alleen in het midden plaatsen" },
          { en: "Alternating hot and cold coal zones", es: "Alternar zonas de carbón caliente y frío", de: "Heiße und kalte Kohlezonen abwechseln", nl: "Warme en koude kolenzones afwisselen" }
        ],
        correct: 0,
        explanation: {
          en: "The snake method involves arranging unlit charcoal in a C-shape or semicircle around the perimeter of the grill. You light one end, and it burns slowly around the circle, providing consistent low heat for 6-8 hours perfect for smoking.",
          es: "El método de serpiente implica arreglar carbón sin encender en forma de C o semicírculo alrededor del perímetro de la parrilla. Enciendes un extremo y quema lentamente alrededor del círculo, proporcionando calor bajo consistente durante 6-8 horas perfecto para ahumar.",
          de: "Die Schlangenmethode beinhaltet das Anordnen von unangezündeter Kohle in C-Form oder Halbkreis um den Umfang des Grills. Du zündest ein Ende an und es brennt langsam um den Kreis, bietet konstante niedrige Hitze für 6-8 Stunden perfekt zum Räuchern.",
          nl: "De slangmethode houdt het schikken van niet aangestoken houtskool in C-vorm of halve cirkel rond de omtrek van de grill in. Je steekt één kant aan en het brandt langzaam rond de cirkel, biedt consistente lage warmte voor 6-8 uur perfect voor roken."
        }
      },
      {
        question: {
          en: "What is the 'minion method' for charcoal smoking?",
          es: "¿Qué es el 'método minion' para ahumar con carbón?",
          de: "Was ist die 'Minion-Methode' für Kohleräuchern?",
          nl: "Wat is de 'minion methode' voor houtskool roken?"
        },
        options: [
          { en: "Placing unlit coals on top of lit ones for gradual ignition and long burn time", es: "Colocar carbones sin encender encima de los encendidos para ignición gradual y tiempo de quema largo", de: "Unangezündete Kohlen auf angezündete legen für allmähliches Anzünden und lange Brennzeit", nl: "Niet aangestoken kolen bovenop aangestoken kolen plaatsen voor geleidelijke ontsteking en lange brandtijd" },
          { en: "Using only small amounts of charcoal", es: "Usar solo pequeñas cantidades de carbón", de: "Nur kleine Mengen Kohle verwenden", nl: "Alleen kleine hoeveelheden houtskool gebruiken" },
          { en: "Arranging coals in tiny piles", es: "Arreglar carbones en montones pequeños", de: "Kohlen in kleinen Haufen anordnen", nl: "Kolen in kleine stapeltjes schikken" },
          { en: "Mixing wood chips with every charcoal piece", es: "Mezclar astillas de madera con cada pieza de carbón", de: "Holzspäne mit jedem Kohlestück mischen", nl: "Houtsnippers met elk stuk houtskool mengen" }
        ],
        correct: 0,
        explanation: {
          en: "The minion method, named after Jim Minion, involves filling the charcoal basket with unlit coals, then placing a small amount of lit coals on top. The lit coals gradually ignite the unlit ones below, providing steady, long-lasting heat perfect for extended smoking sessions.",
          es: "El método minion, nombrado por Jim Minion, implica llenar la cesta de carbón con carbones sin encender, luego colocar pequeña cantidad de carbones encendidos encima. Los carbones encendidos gradualmente encienden los de abajo, proporcionando calor estable y duradero perfecto para sesiones extendidas de ahumado.",
          de: "Die Minion-Methode, benannt nach Jim Minion, beinhaltet das Füllen des Kohlekorbs mit unangezündeter Kohle, dann eine kleine Menge angezündeter Kohle darauf legen. Die angezündete Kohle entzündet allmählich die unangezündete darunter, bietet stabile, langanhaltende Hitze perfekt für verlängerte Räuchersitzungen.",
          nl: "De minion methode, genoemd naar Jim Minion, houdt het vullen van de houtskoolmand met niet aangestoken kolen in, dan een kleine hoeveelheid aangestoken kolen bovenop plaatsen. De aangestoken kolen ontsteken geleidelijk de niet aangestoken eronder, biedt stabiele, langdurige warmte perfect voor verlengde rooksessies."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  } else if (typeof window !== 'undefined') {
    window.level2 = level2;
  }
})();
