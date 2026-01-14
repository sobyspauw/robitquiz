// Barbecue Quiz - Level 2
(function() {
  const level2 = {
    name: {
          "en": "Barbecue Level 2",
          "es": "Barbacoa Nivel 2",
          "de": "Grillen Stufe 2",
          "nl": "Barbecue Level 2"
    },
    questions: [
      {
        question: {
                  "en": "What is the difference between direct and indirect grilling?",
                  "es": "¿Cuál es la diferencia entre asado directo e indirecto?",
                  "de": "Was ist der Unterschied zwischen direktem und indirektem Grillen?",
                  "nl": "Wat is het verschil tussen direct en indirect grillen?"
        },
        options: [
        {
                  "en": "Direct places food over heat source, indirect places food away from heat",
                  "es": "Directo coloca comida sobre fuente de calor, indirecto la coloca lejos del calor",
                  "de": "Direkt platziert Essen über Wärmequelle, indirekt platziert Essen weg von der Hitze",
                  "nl": "Direct plaatst voedsel boven warmtebron, indirect plaatst voedsel weg van warmte"
        },
        {
                  "en": "They are the same method",
                  "es": "Son el mismo método",
                  "de": "Sie sind dieselbe Methode",
                  "nl": "Ze zijn dezelfde methode"
        },
        {
                  "en": "Direct uses charcoal, indirect uses gas",
                  "es": "Directo usa carbón, indirecto usa gas",
                  "de": "Direkt nutzt Holzkohle, indirekt nutzt Gas",
                  "nl": "Direct gebruikt houtskool, indirect gebruikt gas"
        },
        {
                  "en": "Direct is faster, indirect is slower",
                  "es": "Directo es más rápido, indirecto es más lento",
                  "de": "Direkt ist schneller, indirekt ist langsamer",
                  "nl": "Direct is sneller, indirect is langzamer"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Direct grilling cooks food directly over the heat source for searing and quick cooking. Indirect grilling uses reflected heat, like an outdoor oven, for slow roasting.",
                  "es": "El asado directo cocina comida directamente sobre la fuente de calor para sellar y cocción rápida. El asado indirecto usa calor reflejado, como un horno al aire libre, para asado lento.",
                  "de": "Direktes Grillen kocht Essen direkt über der Wärmequelle zum Anbraten und schnellen Kochen. Indirektes Grillen nutzt reflektierte Hitze, wie ein Outdoor-Ofen, zum langsamen Braten.",
                  "nl": "Direct grillen kookt voedsel direct boven de warmtebron voor dichtschroeien en snel koken. Indirect grillen gebruikt gereflecteerde warmte, zoals een buitenoven, voor langzaam braden."
        }
      },
      {
        question: {
                  "en": "What wood gives a mild, sweet flavor that's good for poultry and pork?",
                  "es": "¿Qué madera da un sabor suave y dulce que es bueno para aves y cerdo?",
                  "de": "Welches Holz gibt einen milden, süßen Geschmack, der gut für Geflügel und Schweinefleisch ist?",
                  "nl": "Welk hout geeft een milde, zoete smaak die goed is voor gevogelte en varkensvlees?"
        },
        options: [
        {
                  "en": "Apple",
                  "es": "Manzana",
                  "de": "Apfel",
                  "nl": "Appel"
        },
        {
                  "en": "Mesquite",
                  "es": "Mezquite",
                  "de": "Mesquite",
                  "nl": "Mesquite"
        },
        {
                  "en": "Hickory",
                  "es": "Nogal americano",
                  "de": "Hickory",
                  "nl": "Hickory"
        },
        {
                  "en": "Oak",
                  "es": "Roble",
                  "de": "Eiche",
                  "nl": "Eik"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Apple wood provides a mild, sweet, fruity flavor that complements lighter meats like chicken, turkey, and pork without overwhelming them.",
                  "es": "La madera de manzana proporciona un sabor suave, dulce y afrutado que complementa carnes más ligeras como pollo, pavo y cerdo sin abrumarlas.",
                  "de": "Apfelholz bietet einen milden, süßen, fruchtigen Geschmack, der leichtere Fleischsorten wie Hähnchen, Truthahn und Schweinefleisch ergänzt, ohne sie zu überwältigen.",
                  "nl": "Appelhout biedt een milde, zoete, fruitige smaak die lichter vlees zoals kip, kalkoen en varkensvlees aanvult zonder het te overheersen."
        }
      },
      {
        question: {
                  "en": "What is the purpose of a water pan in a smoker?",
                  "es": "¿Cuál es el propósito de una bandeja de agua en un ahumador?",
                  "de": "Was ist der Zweck einer Wasserpfanne in einem Räucherofen?",
                  "nl": "Wat is het doel van een waterpan in een smoker?"
        },
        options: [
        {
                  "en": "To maintain moisture and stabilize temperature",
                  "es": "Para mantener humedad y estabilizar temperatura",
                  "de": "Um Feuchtigkeit zu erhalten und Temperatur zu stabilisieren",
                  "nl": "Om vocht te behouden en temperatuur te stabiliseren"
        },
        {
                  "en": "To cool down the meat",
                  "es": "Para enfriar la carne",
                  "de": "Um das Fleisch abzukühlen",
                  "nl": "Om het vlees af te koelen"
        },
        {
                  "en": "To clean the smoker",
                  "es": "Para limpiar el ahumador",
                  "de": "Um den Räucherofen zu reinigen",
                  "nl": "Om de smoker schoon te maken"
        },
        {
                  "en": "To put out fires",
                  "es": "Para apagar fuegos",
                  "de": "Um Feuer zu löschen",
                  "nl": "Om branden te blussen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A water pan creates humidity in the cooking chamber, prevents meat from drying out, and acts as a heat sink to stabilize cooking temperatures.",
                  "es": "Una bandeja de agua crea humedad en la cámara de cocción, previene que la carne se seque y actúa como disipador de calor para estabilizar temperaturas de cocción.",
                  "de": "Eine Wasserpfanne erzeugt Feuchtigkeit in der Kochkammer, verhindert das Austrocknen des Fleisches und wirkt als Wärmespeicher zur Stabilisierung der Kochtemperaturen.",
                  "nl": "Een waterpan creëert vochtigheid in de kookkamer, voorkomt dat vlees uitdroogt en werkt als warmteput om kooktemperaturen te stabiliseren."
        }
      },
      {
        question: {
                  "en": "What does it mean to 'kiss of smoke' the meat?",
                  "es": "¿Qué significa dar un 'beso de humo' a la carne?",
                  "de": "Was bedeutet es, dem Fleisch einen 'Rauchkuss' zu geben?",
                  "nl": "Wat betekent het om het vlees een 'rookkus' te geven?"
        },
        options: [
        {
                  "en": "Light smoking to add subtle flavor without overpowering",
                  "es": "Ahumado ligero para añadir sabor sutil sin abrumar",
                  "de": "Leichtes Räuchern um subtilen Geschmack zu verleihen ohne zu überwältigen",
                  "nl": "Licht roken om subtiele smaak toe te voegen zonder te overheersen"
        },
        {
                  "en": "Using only fruit woods",
                  "es": "Usar solo maderas de frutas",
                  "de": "Nur Obsthölzer verwenden",
                  "nl": "Alleen fruithouten gebruiken"
        },
        {
                  "en": "Smoking for exactly one hour",
                  "es": "Ahumar por exactamente una hora",
                  "de": "Genau eine Stunde räuchern",
                  "nl": "Precies een uur roken"
        },
        {
                  "en": "Adding sauce while smoking",
                  "es": "Añadir salsa mientras se ahuma",
                  "de": "Sauce beim Räuchern hinzufügen",
                  "nl": "Saus toevoegen tijdens het roken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A 'kiss of smoke' refers to light, delicate smoking that enhances rather than dominates the natural flavor of the meat, perfect for fish and poultry.",
                  "es": "Un 'beso de humo' se refiere a un ahumado ligero y delicado que realza en lugar de dominar el sabor natural de la carne, perfecto para pescado y aves.",
                  "de": "Ein 'Rauchkuss' bezieht sich auf leichtes, zartes Räuchern, das den natürlichen Geschmack des Fleisches verstärkt statt zu dominieren, perfekt für Fisch und Geflügel.",
                  "nl": "Een 'rookkus' verwijst naar licht, delicaat roken dat de natuurlijke smaak van het vlees versterkt in plaats van overheerst, perfect voor vis en gevogelte."
        }
      },
      {
        question: {
                  "en": "What is the 2-zone method in grilling?",
                  "es": "¿Qué es el método de 2 zonas en el asado?",
                  "de": "Was ist die 2-Zonen-Methode beim Grillen?",
                  "nl": "Wat is de 2-zone methode bij grillen?"
        },
        options: [
        {
                  "en": "Creating hot and cool areas on the grill for different cooking stages",
                  "es": "Crear áreas calientes y frías en la parrilla para diferentes etapas de cocción",
                  "de": "Heiße und kühle Bereiche auf dem Grill für verschiedene Kochstufen schaffen",
                  "nl": "Warme en koele gebieden op de grill creëren voor verschillende kookfasen"
        },
        {
                  "en": "Having two grills running",
                  "es": "Tener dos parrillas funcionando",
                  "de": "Zwei Grills laufen lassen",
                  "nl": "Twee grills laten draaien"
        },
        {
                  "en": "Cooking for two hours exactly",
                  "es": "Cocinar por exactamente dos horas",
                  "de": "Genau zwei Stunden kochen",
                  "nl": "Precies twee uur koken"
        },
        {
                  "en": "Using two different types of fuel",
                  "es": "Usar dos tipos diferentes de combustible",
                  "de": "Zwei verschiedene Brennstoffarten verwenden",
                  "nl": "Twee verschillende brandstofsoorten gebruiken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The 2-zone method creates a hot zone for searing and a cooler zone for gentle cooking, allowing you to move food between areas as needed.",
                  "es": "El método de 2 zonas crea una zona caliente para sellar y una zona más fría para cocción suave, permitiendo mover comida entre áreas según sea necesario.",
                  "de": "Die 2-Zonen-Methode schafft eine heiße Zone zum Anbraten und eine kühlere Zone zum sanften Kochen, so dass man Essen zwischen den Bereichen nach Bedarf bewegen kann.",
                  "nl": "De 2-zone methode creëert een hete zone voor dichtschroeien en een koelere zone voor zacht koken, waardoor je voedsel tussen gebieden kunt verplaatsen zoals nodig."
        }
      },
      {
        question: {
                  "en": "What does 'rendering' mean when barbecuing fatty cuts?",
                  "es": "¿Qué significa 'rendering' al hacer barbacoa con cortes grasos?",
                  "de": "Was bedeutet 'Rendering' beim Barbecue von fetten Fleischstücken?",
                  "nl": "Wat betekent 'rendering' bij het barbecueën van vette stukken?"
        },
        options: [
        {
                  "en": "Slowly melting fat to make meat tender and flavorful",
                  "es": "Derretir grasa lentamente para hacer la carne tierna y sabrosa",
                  "de": "Fett langsam schmelzen um Fleisch zart und geschmackvoll zu machen",
                  "nl": "Langzaam vet smelten om vlees mals en smaakvol te maken"
        },
        {
                  "en": "Cutting the meat into pieces",
                  "es": "Cortar la carne en pedazos",
                  "de": "Das Fleisch in Stücke schneiden",
                  "nl": "Het vlees in stukken snijden"
        },
        {
                  "en": "Cooking at high temperature",
                  "es": "Cocinar a alta temperatura",
                  "de": "Bei hoher Temperatur kochen",
                  "nl": "Koken op hoge temperatuur"
        },
        {
                  "en": "Adding sauce to the surface",
                  "es": "Añadir salsa a la superficie",
                  "de": "Sauce auf die Oberfläche geben",
                  "nl": "Saus op het oppervlak aanbrengen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Rendering is the process of slowly cooking fatty cuts to melt intramuscular fat, which bastes the meat from within and creates incredible tenderness and flavor.",
                  "es": "El rendering es el proceso de cocinar lentamente cortes grasos para derretir grasa intramuscular, que rocía la carne desde adentro y crea increíble ternura y sabor.",
                  "de": "Rendering ist der Prozess des langsamen Kochens fetter Fleischstücke um intramuskuläres Fett zu schmelzen, was das Fleisch von innen übergießt und unglaubliche Zartheit und Geschmack schafft.",
                  "nl": "Rendering is het proces van langzaam koken van vette stukken om intramusculair vet te smelten, wat het vlees van binnenuit begieft en ongelooflijke malheid en smaak creëert."
        }
      },
      {
        question: {
                  "en": "What temperature range is ideal for most barbecue smoking?",
                  "es": "¿Qué rango de temperatura es ideal para la mayoría del ahumado de barbacoa?",
                  "de": "Welcher Temperaturbereich ist ideal für die meisten Barbecue-Räuchervorgänge?",
                  "nl": "Welk temperatuurbereik is ideaal voor de meeste barbecue rookprocessen?"
        },
        options: [
        {
                  "en": "400-450°F (204-232°C)",
                  "es": "400-450°F (204-232°C)",
                  "de": "400-450°F (204-232°C)",
                  "nl": "400-450°F (204-232°C)"
        },
        {
                  "en": "180-200°F (82-93°C)",
                  "es": "180-200°F (82-93°C)",
                  "de": "180-200°F (82-93°C)",
                  "nl": "180-200°F (82-93°C)"
        },
        {
                  "en": "225-275°F (107-135°C)",
                  "es": "225-275°F (107-135°C)",
                  "de": "225-275°F (107-135°C)",
                  "nl": "225-275°F (107-135°C)"
        },
        {
                  "en": "300-350°F (149-177°C)",
                  "es": "300-350°F (149-177°C)",
                  "de": "300-350°F (149-177°C)",
                  "nl": "300-350°F (149-177°C)"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The sweet spot for barbecue smoking is 225-275°F, hot enough to break down tough fibers but cool enough to allow smoke penetration and prevent drying.",
                  "es": "El punto ideal para ahumar barbacoa es 225-275°F, lo suficientemente caliente para descomponer fibras duras pero lo suficientemente frío para permitir penetración de humo y prevenir secado.",
                  "de": "Der optimale Bereich für Barbecue-Räuchern ist 225-275°F, heiß genug um zähe Fasern aufzubrechen aber kühl genug um Rauchpenetration zu erlauben und Austrocknung zu verhindern.",
                  "nl": "Het optimale punt voor barbecue roken is 225-275°F, heet genoeg om taaie vezels af te breken maar koel genoeg om rookpenetratie toe te staan en uitdroging te voorkomen."
        }
      },
      {
        question: {
                  "en": "What is 'mopping' or 'spritzing' during barbecue?",
                  "es": "¿Qué es 'mopping' o 'spritzing' durante la barbacoa?",
                  "de": "Was ist 'Mopping' oder 'Spritzing' während des Barbecues?",
                  "nl": "Wat is 'mopping' of 'spritzing' tijdens barbecue?"
        },
        options: [
        {
                  "en": "Adding more charcoal",
                  "es": "Añadir más carbón",
                  "de": "Mehr Holzkohle hinzufügen",
                  "nl": "Meer houtskool toevoegen"
        },
        {
                  "en": "Cleaning the grill grates",
                  "es": "Limpiar las rejillas de la parrilla",
                  "de": "Die Grillroste reinigen",
                  "nl": "De grillroosters schoonmaken"
        },
        {
                  "en": "Periodically basting meat with liquid to add moisture and flavor",
                  "es": "Rociar periódicamente la carne con líquido para añadir humedad y sabor",
                  "de": "Fleisch periodisch mit Flüssigkeit übergießen um Feuchtigkeit und Geschmack zu verleihen",
                  "nl": "Periodiek vlees begieten met vloeistof om vocht en smaak toe te voegen"
        },
        {
                  "en": "Rotating the meat",
                  "es": "Rotar la carne",
                  "de": "Das Fleisch drehen",
                  "nl": "Het vlees draaien"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Mopping or spritzing involves applying liquid (like apple juice, beer, or vinegar) to keep the surface moist and help develop a better bark.",
                  "es": "Mopping o spritzing implica aplicar líquido (como jugo de manzana, cerveza o vinagre) para mantener húmeda la superficie y ayudar a desarrollar mejor corteza.",
                  "de": "Mopping oder Spritzing beinhaltet das Auftragen von Flüssigkeit (wie Apfelsaft, Bier oder Essig) um die Oberfläche feucht zu halten und eine bessere Rinde zu entwickeln.",
                  "nl": "Mopping of spritzing houdt het aanbrengen van vloeistof (zoals appelsap, bier of azijn) in om het oppervlak vochtig te houden en een betere korst te ontwikkelen."
        }
      },
      {
        question: {
                  "en": "What cut of beef is known as the 'holy grail' of barbecue?",
                  "es": "¿Qué corte de res es conocido como el 'santo grial' de la barbacoa?",
                  "de": "Welcher Rindfleischstück ist als der 'heilige Gral' des Barbecues bekannt?",
                  "nl": "Welk stuk rundvlees staat bekend als de 'heilige graal' van barbecue?"
        },
        options: [
        {
                  "en": "Brisket",
                  "es": "Pecho",
                  "de": "Rinderbrust",
                  "nl": "Brisket"
        },
        {
                  "en": "Ribeye",
                  "es": "Ribeye",
                  "de": "Ribeye",
                  "nl": "Ribeye"
        },
        {
                  "en": "Chuck roast",
                  "es": "Asado de paleta",
                  "de": "Schultersteak",
                  "nl": "Schouderbraad"
        },
        {
                  "en": "Sirloin",
                  "es": "Solomillo",
                  "de": "Roastbeef",
                  "nl": "Biefstuk"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Brisket is considered the ultimate test of barbecue skill due to its tough connective tissue that requires perfect time, temperature, and technique to transform into tender perfection.",
                  "es": "El pecho es considerado la prueba suprema de habilidad en barbacoa debido a su tejido conectivo duro que requiere tiempo, temperatura y técnica perfectos para transformarse en perfección tierna.",
                  "de": "Rinderbrust gilt als ultimativer Test der Barbecue-Fähigkeiten aufgrund ihres zähen Bindegewebes, das perfekte Zeit, Temperatur und Technik erfordert um in zarte Perfektion verwandelt zu werden.",
                  "nl": "Brisket wordt beschouwd als de ultieme test van barbecue vaardigheid vanwege het taaie bindweefsel dat perfecte tijd, temperatuur en techniek vereist om te transformeren tot malse perfectie."
        }
      },
      {
        question: {
                  "en": "What is the purpose of a chimney starter?",
                  "es": "¿Cuál es el propósito de un encendedor de chimenea?",
                  "de": "Was ist der Zweck eines Kaminanzünders?",
                  "nl": "Wat is het doel van een schoorsteenaansteker?"
        },
        options: [
        {
                  "en": "To measure temperature",
                  "es": "Para medir temperatura",
                  "de": "Um Temperatur zu messen",
                  "nl": "Om temperatuur te meten"
        },
        {
                  "en": "To control smoke output",
                  "es": "Para controlar la salida de humo",
                  "de": "Um die Rauchausgabe zu kontrollieren",
                  "nl": "Om rookuitstoot te controleren"
        },
        {
                  "en": "To add wood chips",
                  "es": "Para añadir astillas de madera",
                  "de": "Um Holzspäne hinzuzufügen",
                  "nl": "Om houten chips toe te voegen"
        },
        {
                  "en": "To light charcoal evenly without lighter fluid",
                  "es": "Para encender carbón uniformemente sin líquido encendedor",
                  "de": "Um Holzkohle gleichmäßig ohne Grillanzünder zu entzünden",
                  "nl": "Om houtskool gelijkmatig aan te steken zonder aanmaakblokjes"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A chimney starter uses newspaper and airflow to ignite charcoal quickly and evenly without chemicals, producing clean-burning coals ready for cooking.",
                  "es": "Un encendedor de chimenea usa periódico y flujo de aire para encender carbón rápida y uniformemente sin químicos, produciendo carbones de quema limpia listos para cocinar.",
                  "de": "Ein Kaminanzünder nutzt Zeitungspapier und Luftstrom um Holzkohle schnell und gleichmäßig ohne Chemikalien zu entzünden und sauber brennende Kohlen für das Kochen zu produzieren.",
                  "nl": "Een schoorsteenaansteker gebruikt krant en luchtstroom om houtskool snel en gelijkmatig aan te steken zonder chemicaliën, wat schoon brandende kolen oplevert die klaar zijn om te koken."
        }
      },
      {
        question: {
                  "en": "What does 'pulling' pork mean?",
                  "es": "¿Qué significa 'pulling' el cerdo?",
                  "de": "Was bedeutet Schweinefleisch 'pullen'?",
                  "nl": "Wat betekent varkensvlees 'pullen'?"
        },
        options: [
        {
                  "en": "Marinating the meat",
                  "es": "Marinar la carne",
                  "de": "Das Fleisch marinieren",
                  "nl": "Het vlees marineren"
        },
        {
                  "en": "Taking meat off the grill",
                  "es": "Sacar carne de la parrilla",
                  "de": "Fleisch vom Grill nehmen",
                  "nl": "Vlees van de grill halen"
        },
        {
                  "en": "Shredding cooked pork shoulder into bite-sized pieces",
                  "es": "Desmenuzar paleta de cerdo cocida en pedazos del tamaño de un bocado",
                  "de": "Gekochte Schweineschulter in mundgerechte Stücke zerkleinern",
                  "nl": "Gekookte varkensschouder in hapklare stukjes verdelen"
        },
        {
                  "en": "Removing fat from raw meat",
                  "es": "Quitar grasa de carne cruda",
                  "de": "Fett von rohem Fleisch entfernen",
                  "nl": "Vet van rauw vlees verwijderen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Pulling pork refers to shredding properly cooked pork shoulder that's so tender it easily separates into strands with just forks or hands.",
                  "es": "Pulling pork se refiere a desmenuzar paleta de cerdo cocida correctamente que está tan tierna que fácilmente se separa en hebras solo con tenedores o manos.",
                  "de": "Pork pullen bezieht sich auf das Zerkleinern richtig gekochter Schweineschulter, die so zart ist, dass sie leicht mit nur Gabeln oder Händen in Streifen getrennt werden kann.",
                  "nl": "Pork pullen verwijst naar het verdelen van goed gekookte varkensschouder die zo mals is dat het gemakkelijk in draden scheidt met alleen vorken of handen."
        }
      },
      {
        question: {
                  "en": "What is the benefit of using a meat thermometer with a probe?",
                  "es": "¿Cuál es el beneficio de usar un termómetro de carne con sonda?",
                  "de": "Was ist der Vorteil eines Fleischthermometers mit Sonde?",
                  "nl": "Wat is het voordeel van het gebruik van een vleesthermometer met sonde?"
        },
        options: [
        {
                  "en": "It adds flavor to the meat",
                  "es": "Añade sabor a la carne",
                  "de": "Es verleiht dem Fleisch Geschmack",
                  "nl": "Het voegt smaak toe aan het vlees"
        },
        {
                  "en": "Monitor internal temperature without opening the cooker",
                  "es": "Monitorear temperatura interna sin abrir el cocinero",
                  "de": "Innentemperatur überwachen ohne den Kocher zu öffnen",
                  "nl": "Interne temperatuur monitoren zonder de kooktoestel te openen"
        },
        {
                  "en": "It cooks the meat faster",
                  "es": "Cocina la carne más rápido",
                  "de": "Es kocht das Fleisch schneller",
                  "nl": "Het kookt het vlees sneller"
        },
        {
                  "en": "It tenderizes tough cuts",
                  "es": "Ablanda cortes duros",
                  "de": "Es macht zähe Stücke zart",
                  "nl": "Het maakt taaie stukken mals"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "A probe thermometer allows continuous monitoring of internal meat temperature without lifting the lid, which would release heat and smoke.",
                  "es": "Un termómetro de sonda permite monitoreo continuo de la temperatura interna de la carne sin levantar la tapa, lo que liberaría calor y humo.",
                  "de": "Ein Sondenthermometer ermöglicht kontinuierliche Überwachung der inneren Fleischtemperatur ohne den Deckel zu heben, was Hitze und Rauch freisetzen würde.",
                  "nl": "Een sondethermometer maakt continue monitoring van de interne vleestemperatuur mogelijk zonder het deksel op te tillen, wat warmte en rook zou vrijgeven."
        }
      },
      {
        question: {
                  "en": "What type of ribs are 'baby back ribs'?",
                  "es": "¿Qué tipo de costillas son las 'baby back ribs'?",
                  "de": "Was für Rippen sind 'Baby Back Ribs'?",
                  "nl": "Wat voor ribs zijn 'baby back ribs'?"
        },
        options: [
        {
                  "en": "The smallest ribs on any animal",
                  "es": "Las costillas más pequeñas de cualquier animal",
                  "de": "Die kleinsten Rippen an jedem Tier",
                  "nl": "De kleinste ribs van elk dier"
        },
        {
                  "en": "Beef ribs from calves",
                  "es": "Costillas de res de terneros",
                  "de": "Rinderrippen von Kälbern",
                  "nl": "Rundvleesribs van kalveren"
        },
        {
                  "en": "Ribs from young pigs only",
                  "es": "Costillas solo de cerdos jóvenes",
                  "de": "Rippen nur von jungen Schweinen",
                  "nl": "Ribs alleen van jonge varkens"
        },
        {
                  "en": "Pork ribs from the back/loin area",
                  "es": "Costillas de cerdo del área de la espalda/lomo",
                  "de": "Schweinerippchen aus dem Rücken-/Lendenbereich",
                  "nl": "Varkensribbetjes uit het rug-/lendegebied"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Baby back ribs come from the back and loin section of the pig, are shorter and more tender than spare ribs, with meat between the bones.",
                  "es": "Las baby back ribs vienen de la sección de espalda y lomo del cerdo, son más cortas y tiernas que las spare ribs, con carne entre los huesos.",
                  "de": "Baby Back Ribs kommen aus dem Rücken- und Lendenbereich des Schweins, sind kürzer und zarter als Spare Ribs, mit Fleisch zwischen den Knochen.",
                  "nl": "Baby back ribs komen uit het rug- en lendegedeelte van het varken, zijn korter en malser dan spare ribs, met vlees tussen de botten."
        }
      },
      {
        question: {
                  "en": "What is 'bark' formation dependent on?",
                  "es": "¿De qué depende la formación de 'bark'?",
                  "de": "Wovon ist die 'Bark'-Bildung abhängig?",
                  "nl": "Waar is 'bark' vorming afhankelijk van?"
        },
        options: [
        {
                  "en": "Rub ingredients, time, and proper airflow",
                  "es": "Ingredientes del rub, tiempo y flujo de aire adecuado",
                  "de": "Rub-Zutaten, Zeit und richtige Luftströmung",
                  "nl": "Rub ingrediënten, tijd en juiste luchtstroom"
        },
        {
                  "en": "Type of wood used",
                  "es": "Tipo de madera usada",
                  "de": "Art des verwendeten Holzes",
                  "nl": "Type hout dat wordt gebruikt"
        },
        {
                  "en": "Amount of sauce applied",
                  "es": "Cantidad de salsa aplicada",
                  "de": "Menge der aufgetragenen Sauce",
                  "nl": "Hoeveelheid toegepaste saus"
        },
        {
                  "en": "Only high temperatures",
                  "es": "Solo altas temperaturas",
                  "de": "Nur hohe Temperaturen",
                  "nl": "Alleen hoge temperaturen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Good bark formation requires the right rub (salt and sugar), adequate cooking time for Maillard reactions, and proper airflow to create the desired crust.",
                  "es": "Una buena formación de bark requiere el rub correcto (sal y azúcar), tiempo de cocción adecuado para reacciones de Maillard, y flujo de aire apropiado para crear la corteza deseada.",
                  "de": "Gute Bark-Bildung erfordert das richtige Rub (Salz und Zucker), angemessene Kochzeit für Maillard-Reaktionen und richtige Luftströmung um die gewünschte Kruste zu erzeugen.",
                  "nl": "Goede bark vorming vereist de juiste rub (zout en suiker), voldoende kooktijd voor Maillard reacties, en juiste luchtstroom om de gewenste korst te creëren."
        }
      },
      {
        question: {
                  "en": "What is the 3-2-1 method for ribs?",
                  "es": "¿Qué es el método 3-2-1 para costillas?",
                  "de": "Was ist die 3-2-1-Methode für Rippen?",
                  "nl": "Wat is de 3-2-1 methode voor ribs?"
        },
        options: [
        {
                  "en": "3 different rubs, 2 wood types, 1 sauce",
                  "es": "3 rubs diferentes, 2 tipos de madera, 1 salsa",
                  "de": "3 verschiedene Rubs, 2 Holzarten, 1 Sauce",
                  "nl": "3 verschillende rubs, 2 houtsoorten, 1 saus"
        },
        {
                  "en": "3 pounds of ribs, 2 hours cooking, 1 hour resting",
                  "es": "3 libras de costillas, 2 horas cocinando, 1 hora reposando",
                  "de": "3 Pfund Rippen, 2 Stunden kochen, 1 Stunde ruhen",
                  "nl": "3 pond ribs, 2 uur koken, 1 uur rusten"
        },
        {
                  "en": "3 hours uncovered, 2 hours wrapped, 1 hour uncovered",
                  "es": "3 horas descubiertas, 2 horas envueltas, 1 hora descubierta",
                  "de": "3 Stunden unbedeckt, 2 Stunden eingewickelt, 1 Stunde unbedeckt",
                  "nl": "3 uur onbedekt, 2 uur ingepakt, 1 uur onbedekt"
        },
        {
                  "en": "3 temperature zones, 2 types of fuel, 1 thermometer",
                  "es": "3 zonas de temperatura, 2 tipos de combustible, 1 termómetro",
                  "de": "3 Temperaturzonen, 2 Brennstoffarten, 1 Thermometer",
                  "nl": "3 temperatuurzones, 2 brandstofsoorten, 1 thermometer"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The 3-2-1 method is a popular rib-cooking technique: 3 hours unwrapped for bark development, 2 hours wrapped for tenderness, 1 hour unwrapped to firm up the bark.",
                  "es": "El método 3-2-1 es una técnica popular para cocinar costillas: 3 horas sin envolver para desarrollo de bark, 2 horas envueltas para ternura, 1 hora sin envolver para firmar el bark.",
                  "de": "Die 3-2-1-Methode ist eine beliebte Rippen-Koch-Technik: 3 Stunden uneingewickelt für Bark-Entwicklung, 2 Stunden eingewickelt für Zartheit, 1 Stunde uneingewickelt um die Bark zu festigen.",
                  "nl": "De 3-2-1 methode is een populaire rib-kooktechniek: 3 uur onverpakt voor bark ontwikkeling, 2 uur verpakt voor malheid, 1 uur onverpakt om de bark te verstevigen."
        }
      },
      {
        question: {
                  "en": "What does it mean when meat is 'probe tender'?",
                  "es": "¿Qué significa cuando la carne está 'probe tender'?",
                  "de": "Was bedeutet es wenn Fleisch 'probe tender' ist?",
                  "nl": "Wat betekent het wanneer vlees 'probe tender' is?"
        },
        options: [
        {
                  "en": "You can see through the meat",
                  "es": "Puedes ver a través de la carne",
                  "de": "Man kann durch das Fleisch sehen",
                  "nl": "Je kunt door het vlees heen kijken"
        },
        {
                  "en": "The meat reaches exactly 200°F",
                  "es": "La carne alcanza exactamente 200°F",
                  "de": "Das Fleisch erreicht genau 200°F",
                  "nl": "Het vlees bereikt precies 200°F"
        },
        {
                  "en": "The probe thermometer beeps",
                  "es": "El termómetro de sonda pita",
                  "de": "Das Sondenthermometer piept",
                  "nl": "De sondethermometer piept"
        },
        {
                  "en": "A probe slides in and out like soft butter",
                  "es": "Una sonda se desliza dentro y fuera como mantequilla suave",
                  "de": "Eine Sonde gleitet hinein und heraus wie weiche Butter",
                  "nl": "Een sonde glijdt erin en eruit als zachte boter"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Probe tender describes perfectly cooked barbecue where a thermometer probe meets no resistance when inserted, indicating collagen has fully converted to gelatin.",
                  "es": "Probe tender describe barbacoa perfectamente cocinada donde una sonda de termómetro no encuentra resistencia al insertarse, indicando que el colágeno se ha convertido completamente en gelatina.",
                  "de": "Probe tender beschreibt perfekt gekochtes Barbecue, wo eine Thermometersonde keinen Widerstand beim Einführen trifft, was anzeigt dass Kollagen vollständig zu Gelatine umgewandelt wurde.",
                  "nl": "Probe tender beschrijft perfect gekookte barbecue waar een thermometersonde geen weerstand ontmoet bij het inbrengen, wat aangeeft dat collageen volledig is omgezet naar gelatine."
        }
      },
      {
        question: {
                  "en": "What is the advantage of using butcher paper over foil for wrapping?",
                  "es": "¿Cuál es la ventaja de usar papel de carnicero sobre papel aluminio para envolver?",
                  "de": "Was ist der Vorteil von Metzgerpapier gegenüber Folie zum Einwickeln?",
                  "nl": "Wat is het voordeel van slagerspapier ten opzichte van folie voor het inpakken?"
        },
        options: [
        {
                  "en": "It's breathable and helps maintain bark texture",
                  "es": "Es transpirable y ayuda a mantener la textura del bark",
                  "de": "Es ist atmungsaktiv und hilft die Bark-Textur zu erhalten",
                  "nl": "Het is ademend en helpt de bark textuur te behouden"
        },
        {
                  "en": "It cooks faster",
                  "es": "Cocina más rápido",
                  "de": "Es kocht schneller",
                  "nl": "Het kookt sneller"
        },
        {
                  "en": "It's cheaper than foil",
                  "es": "Es más barato que el papel aluminio",
                  "de": "Es ist billiger als Folie",
                  "nl": "Het is goedkoper dan folie"
        },
        {
                  "en": "It adds flavor to the meat",
                  "es": "Añade sabor a la carne",
                  "de": "Es verleiht dem Fleisch Geschmack",
                  "nl": "Het voegt smaak toe aan het vlees"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Butcher paper is porous, allowing some moisture to escape while still protecting the meat, helping preserve the bark's texture better than non-porous foil.",
                  "es": "El papel de carnicero es poroso, permitiendo que escape algo de humedad mientras protege la carne, ayudando a preservar la textura del bark mejor que el papel aluminio no poroso.",
                  "de": "Metzgerpapier ist porös und lässt etwas Feuchtigkeit entweichen während es das Fleisch schützt, hilft die Bark-Textur besser zu bewahren als nicht-poröse Folie.",
                  "nl": "Slagerspapier is poreus en laat wat vocht ontsnappen terwijl het het vlees beschermt, wat helpt de bark textuur beter te behouden dan niet-poreuze folie."
        }
      },
      {
        question: {
                  "en": "What should you look for when buying a good brisket?",
                  "es": "¿Qué debes buscar al comprar un buen brisket?",
                  "de": "Worauf solltest du beim Kauf einer guten Rinderbrust achten?",
                  "nl": "Waar moet je op letten bij het kopen van een goede brisket?"
        },
        options: [
        {
                  "en": "The largest size possible",
                  "es": "El tamaño más grande posible",
                  "de": "Die größtmögliche Größe",
                  "nl": "De grootst mogelijke maat"
        },
        {
                  "en": "The cheapest price available",
                  "es": "El precio más barato disponible",
                  "de": "Der günstigste verfügbare Preis",
                  "nl": "De goedkoopste prijs beschikbaar"
        },
        {
                  "en": "Bright red color only",
                  "es": "Solo color rojo brillante",
                  "de": "Nur hellrote Farbe",
                  "nl": "Alleen helderrode kleur"
        },
        {
                  "en": "Good marbling and a thick flat section",
                  "es": "Buen marmoleo y una sección plana gruesa",
                  "de": "Gute Marmorierung und einen dicken flachen Bereich",
                  "nl": "Goede marmerering en een dikke platte sectie"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A good brisket should have visible marbling (fat streaks), a thick flat section for even cooking, and good fat cap thickness for moisture retention.",
                  "es": "Un buen brisket debe tener marmoleo visible (vetas de grasa), una sección plana gruesa para cocción uniforme, y buen grosor de capa de grasa para retención de humedad.",
                  "de": "Eine gute Rinderbrust sollte sichtbare Marmorierung (Fettstreifen) haben, einen dicken flachen Bereich für gleichmäßiges Kochen, und gute Fettkappendicke für Feuchtigkeitserhaltung.",
                  "nl": "Een goede brisket moet zichtbare marmerering (vetstrepen) hebben, een dikke platte sectie voor gelijkmatig koken, en goede vetlaagdikte voor vochtbehoud."
        }
      },
      {
        question: {
                  "en": "What is the 'snake method' for charcoal arrangement?",
                  "es": "¿Qué es el 'método de serpiente' para arreglo de carbón?",
                  "de": "Was ist die 'Schlangenmethode' für Kohleanordnung?",
                  "nl": "Wat is de 'slangmethode' voor houtskoolschikking?"
        },
        options: [
        {
                  "en": "Placing coals only in the center",
                  "es": "Colocar carbones solo en el centro",
                  "de": "Kohlen nur in der Mitte platzieren",
                  "nl": "Kolen alleen in het midden plaatsen"
        },
        {
                  "en": "Stacking coals in a spiral pyramid",
                  "es": "Apilar carbones en pirámide espiral",
                  "de": "Kohlen in Spiralpyramide stapeln",
                  "nl": "Kolen stapelen in spiraal piramide"
        },
        {
                  "en": "Arranging coals in a C-shape around perimeter for slow, even heat 6-8 hours",
                  "es": "Arreglar carbones en forma de C alrededor del perímetro para calor lento y uniforme 6-8 horas",
                  "de": "Kohlen in C-Form um den Umfang anordnen für langsame, gleichmäßige Hitze 6-8 Stunden",
                  "nl": "Kolen in C-vorm rond de omtrek schikken voor langzame, gelijkmatige warmte 6-8 uur"
        },
        {
                  "en": "Alternating hot and cold coal zones",
                  "es": "Alternar zonas de carbón caliente y frío",
                  "de": "Heiße und kalte Kohlezonen abwechseln",
                  "nl": "Warme en koude kolenzones afwisselen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The snake method involves arranging unlit charcoal in a C-shape or semicircle around the perimeter of the grill. You light one end, and it burns slowly around the circle, providing consistent low heat for 6-8 hours perfect for smoking.",
                  "es": "El método de serpiente implica arreglar carbón sin encender en forma de C o semicírculo alrededor del perímetro de la parrilla. Enciendes un extremo y quema lentamente alrededor del círculo, proporcionando calor bajo consistente durante 6-8 horas perfecto para ahumar.",
                  "de": "Die Schlangenmethode beinhaltet das Anordnen von unangezündeter Kohle in C-Form oder Halbkreis um den Umfang des Grills. Du zündest ein Ende an und es brennt langsam um den Kreis, bietet konstante niedrige Hitze für 6-8 Stunden perfekt zum Räuchern.",
                  "nl": "De slangmethode houdt het schikken van niet aangestoken houtskool in C-vorm of halve cirkel rond de omtrek van de grill in. Je steekt één kant aan en het brandt langzaam rond de cirkel, biedt consistente lage warmte voor 6-8 uur perfect voor roken."
        }
      },
      {
        question: {
                  "en": "What is the 'minion method' for charcoal smoking?",
                  "es": "¿Qué es el 'método minion' para ahumar con carbón?",
                  "de": "Was ist die 'Minion-Methode' für Kohleräuchern?",
                  "nl": "Wat is de 'minion methode' voor houtskool roken?"
        },
        options: [
        {
                  "en": "Using only small amounts of charcoal",
                  "es": "Usar solo pequeñas cantidades de carbón",
                  "de": "Nur kleine Mengen Kohle verwenden",
                  "nl": "Alleen kleine hoeveelheden houtskool gebruiken"
        },
        {
                  "en": "Placing unlit coals on top of lit ones for gradual ignition and long burn time",
                  "es": "Colocar carbones sin encender encima de los encendidos para ignición gradual y tiempo de quema largo",
                  "de": "Unangezündete Kohlen auf angezündete legen für allmähliches Anzünden und lange Brennzeit",
                  "nl": "Niet aangestoken kolen bovenop aangestoken kolen plaatsen voor geleidelijke ontsteking en lange brandtijd"
        },
        {
                  "en": "Arranging coals in tiny piles",
                  "es": "Arreglar carbones en montones pequeños",
                  "de": "Kohlen in kleinen Haufen anordnen",
                  "nl": "Kolen in kleine stapeltjes schikken"
        },
        {
                  "en": "Mixing wood chips with every charcoal piece",
                  "es": "Mezclar astillas de madera con cada pieza de carbón",
                  "de": "Holzspäne mit jedem Kohlestück mischen",
                  "nl": "Houtsnippers met elk stuk houtskool mengen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The minion method, named after Jim Minion, involves filling the charcoal basket with unlit coals, then placing a small amount of lit coals on top. The lit coals gradually ignite the unlit ones below, providing steady, long-lasting heat perfect for extended smoking sessions.",
                  "es": "El método minion, nombrado por Jim Minion, implica llenar la cesta de carbón con carbones sin encender, luego colocar pequeña cantidad de carbones encendidos encima. Los carbones encendidos gradualmente encienden los de abajo, proporcionando calor estable y duradero perfecto para sesiones extendidas de ahumado.",
                  "de": "Die Minion-Methode, benannt nach Jim Minion, beinhaltet das Füllen des Kohlekorbs mit unangezündeter Kohle, dann eine kleine Menge angezündeter Kohle darauf legen. Die angezündete Kohle entzündet allmählich die unangezündete darunter, bietet stabile, langanhaltende Hitze perfekt für verlängerte Räuchersitzungen.",
                  "nl": "De minion methode, genoemd naar Jim Minion, houdt het vullen van de houtskoolmand met niet aangestoken kolen in, dan een kleine hoeveelheid aangestoken kolen bovenop plaatsen. De aangestoken kolen ontsteken geleidelijk de niet aangestoken eronder, biedt stabiele, langdurige warmte perfect voor verlengde rooksessies."
        }
      },
      {
        question: {
                  "en": "What is the difference between lump charcoal and briquettes?",
                  "es": "¿Cuál es la diferencia entre carbón en trozos y briquetas?",
                  "de": "Was ist der Unterschied zwischen Holzkohlestücken und Briketts?",
                  "nl": "Wat is het verschil tussen klomp houtskool en briketten?"
        },
        options: [
        {
                  "en": "Lump is for gas grills only",
                  "es": "Trozos es solo para parrillas de gas",
                  "de": "Stücke sind nur für Gasgrills",
                  "nl": "Klomp is alleen voor gasgrills"
        },
        {
                  "en": "Briquettes burn hotter",
                  "es": "Briquetas queman más caliente",
                  "de": "Briketts brennen heißer",
                  "nl": "Briketten branden heter"
        },
        {
                  "en": "Lump is pure carbonized wood, briquettes contain binders and fillers",
                  "es": "Trozos es madera carbonizada pura, briquetas contienen aglutinantes y rellenos",
                  "de": "Stücke sind reine verkohlte Holz, Briketts enthalten Bindemittel und Füllstoffe",
                  "nl": "Klomp is puur verkoold hout, briketten bevatten bindmiddelen en vulstoffen"
        },
        {
                  "en": "They are exactly the same",
                  "es": "Son exactamente iguales",
                  "de": "Sie sind genau gleich",
                  "nl": "Ze zijn precies hetzelfde"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Lump charcoal is pure carbonized hardwood with no additives, burns hotter and cleaner. Briquettes are compressed charcoal with binders and fillers, burn longer and more consistently but may contain chemicals.",
                  "es": "Carbón en trozos es madera dura carbonizada pura sin aditivos, quema más caliente y limpio. Briquetas son carbón comprimido con aglutinantes y rellenos, queman más tiempo y consistentemente pero pueden contener químicos.",
                  "de": "Holzkohlestücke sind reine verkohlt Hartholz ohne Zusätze, brennen heißer und sauberer. Briketts sind gepresste Kohle mit Bindemitteln und Füllstoffen, brennen länger und gleichmäßiger aber können Chemikalien enthalten.",
                  "nl": "Klomp houtskool is puur verkoold hardhout zonder toevoegingen, brandt heter en schoner. Briketten zijn geperste houtskool met bindmiddelen en vulstoffen, branden langer en consistenter maar kunnen chemicaliën bevatten."
        }
      },
      {
        question: {
                  "en": "What wood provides the strongest smoke flavor?",
                  "es": "¿Qué madera proporciona el sabor de humo más fuerte?",
                  "de": "Welches Holz bietet den stärksten Rauchgeschmack?",
                  "nl": "Welk hout biedt de sterkste rooksmaak?"
        },
        options: [
        {
                  "en": "Apple",
                  "es": "Manzana",
                  "de": "Apfel",
                  "nl": "Appel"
        },
        {
                  "en": "Alder",
                  "es": "Aliso",
                  "de": "Erle",
                  "nl": "Els"
        },
        {
                  "en": "Mesquite",
                  "es": "Mezquite",
                  "de": "Mesquite",
                  "nl": "Mesquite"
        },
        {
                  "en": "Cherry",
                  "es": "Cereza",
                  "de": "Kirsche",
                  "nl": "Kers"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Mesquite wood provides the most intense, bold smoke flavor. It's popular in Texas-style barbecue but can be overpowering if used excessively, best used in moderation or mixed with milder woods.",
                  "es": "La madera de mezquite proporciona el sabor de humo más intenso y audaz. Es popular en barbacoa estilo Texas pero puede ser abrumadora si se usa excesivamente, mejor usar con moderación o mezclada con maderas más suaves.",
                  "de": "Mesquite-Holz bietet den intensivsten, kräftigsten Rauchgeschmack. Es ist beliebt in Texas-Stil Barbecue aber kann überwältigend sein wenn übermäßig verwendet, am besten sparsam oder gemischt mit milderen Hölzern verwenden.",
                  "nl": "Mesquite hout biedt de meest intense, gedurfde rooksmaak. Het is populair in Texas-stijl barbecue maar kan overweldigend zijn bij overmatig gebruik, het beste matig gebruiken of gemengd met mildere houten."
        }
      },
      {
        question: {
                  "en": "What is a 'hot and fast' cooking method in barbecue?",
                  "es": "¿Qué es el método de cocción 'caliente y rápido' en barbacoa?",
                  "de": "Was ist eine 'heiß und schnell' Kochmethode beim Barbecue?",
                  "nl": "Wat is een 'heet en snel' kookmethode bij barbecue?"
        },
        options: [
        {
                  "en": "Cooking at 275-325°F to reduce cooking time while maintaining quality",
                  "es": "Cocinar a 275-325°F para reducir tiempo de cocción mientras se mantiene calidad",
                  "de": "Kochen bei 275-325°F um Kochzeit zu reduzieren während Qualität erhalten bleibt",
                  "nl": "Koken op 275-325°F om kooktijd te verminderen terwijl kwaliteit behouden blijft"
        },
        {
                  "en": "Grilling at maximum heat",
                  "es": "Asar a calor máximo",
                  "de": "Grillen bei maximaler Hitze",
                  "nl": "Grillen op maximale hitte"
        },
        {
                  "en": "Using only gas grills",
                  "es": "Usar solo parrillas de gas",
                  "de": "Nur Gasgrills verwenden",
                  "nl": "Alleen gasgrills gebruiken"
        },
        {
                  "en": "Never checking temperature",
                  "es": "Nunca verificar temperatura",
                  "de": "Niemals Temperatur prüfen",
                  "nl": "Nooit temperatuur controleren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Hot and fast barbecue uses higher temperatures (275-325°F) to cook in less time while still breaking down collagen. It's gaining popularity as an alternative to traditional low and slow methods.",
                  "es": "Barbacoa caliente y rápida usa temperaturas más altas (275-325°F) para cocinar en menos tiempo mientras descompone colágeno. Está ganando popularidad como alternativa a métodos tradicionales bajos y lentos.",
                  "de": "Heiß und schnell Barbecue verwendet höhere Temperaturen (275-325°F) um in weniger Zeit zu kochen während immer noch Kollagen abgebaut wird. Es gewinnt an Beliebtheit als Alternative zu traditionellen niedrigen und langsamen Methoden.",
                  "nl": "Heet en snel barbecue gebruikt hogere temperaturen (275-325°F) om in minder tijd te koken terwijl nog steeds collageen wordt afgebroken. Het wint aan populariteit als alternatief voor traditionele lage en langzame methoden."
        }
      },
      {
        question: {
                  "en": "What is the purpose of trimming the fat cap on brisket?",
                  "es": "¿Cuál es el propósito de recortar la capa de grasa del brisket?",
                  "de": "Was ist der Zweck des Trimmens der Fettkappe auf Rinderbrust?",
                  "nl": "Wat is het doel van het trimmen van de vetlaag op brisket?"
        },
        options: [
        {
                  "en": "To allow smoke and rub penetration while keeping enough fat for moisture",
                  "es": "Para permitir penetración de humo y rub mientras se mantiene suficiente grasa para humedad",
                  "de": "Um Rauch- und Rub-Penetration zu ermöglichen während genug Fett für Feuchtigkeit erhalten bleibt",
                  "nl": "Om rook- en rub-penetratie toe te staan terwijl genoeg vet voor vocht behouden blijft"
        },
        {
                  "en": "To make it cook faster",
                  "es": "Para que cocine más rápido",
                  "de": "Um es schneller zu kochen",
                  "nl": "Om het sneller te laten koken"
        },
        {
                  "en": "Fat cap doesn't need trimming",
                  "es": "La capa de grasa no necesita recorte",
                  "de": "Fettkappe braucht kein Trimmen",
                  "nl": "Vetlaag heeft geen trimmen nodig"
        },
        {
                  "en": "To remove all fat completely",
                  "es": "Para eliminar toda la grasa completamente",
                  "de": "Um alles Fett vollständig zu entfernen",
                  "nl": "Om al het vet volledig te verwijderen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Trimming the fat cap to about 1/4 inch allows smoke and seasoning to penetrate while retaining enough fat to baste the meat during cooking. Too much fat won't render and blocks flavor.",
                  "es": "Recortar la capa de grasa a aproximadamente 1/4 pulgada permite que el humo y condimentos penetren mientras se retiene suficiente grasa para rociar la carne durante la cocción. Demasiada grasa no se derrite y bloquea sabor.",
                  "de": "Das Trimmen der Fettkappe auf etwa 1/4 Zoll ermöglicht Rauch und Würze zu penetrieren während genug Fett erhalten bleibt um das Fleisch während des Kochens zu übergießen. Zu viel Fett rendert nicht und blockiert Geschmack.",
                  "nl": "Het trimmen van de vetlaag tot ongeveer 1/4 inch stelt rook en kruiden in staat te penetreren terwijl genoeg vet behouden blijft om het vlees tijdens het koken te begieten. Te veel vet smelt niet en blokkeert smaak."
        }
      },
      {
        question: {
                  "en": "What is a deflector plate or heat shield used for?",
                  "es": "¿Para qué se usa una placa deflectora o escudo de calor?",
                  "de": "Wofür wird eine Deflektorplatte oder Hitzeschild verwendet?",
                  "nl": "Waarvoor wordt een deflectorplaat of hitteschild gebruikt?"
        },
        options: [
        {
                  "en": "To clean the grill easier",
                  "es": "Para limpiar la parrilla más fácil",
                  "de": "Um den Grill einfacher zu reinigen",
                  "nl": "Om de grill makkelijker schoon te maken"
        },
        {
                  "en": "To create indirect heat and prevent flare-ups",
                  "es": "Para crear calor indirecto y prevenir llamaradas",
                  "de": "Um indirekte Hitze zu erzeugen und Stichflammen zu verhindern",
                  "nl": "Om indirecte warmte te creëren en vlammen te voorkomen"
        },
        {
                  "en": "To hold wood chips",
                  "es": "Para sostener astillas de madera",
                  "de": "Um Holzspäne zu halten",
                  "nl": "Om houten chips vast te houden"
        },
        {
                  "en": "To increase cooking temperature",
                  "es": "Para aumentar temperatura de cocción",
                  "de": "Um Kochtemperatur zu erhöhen",
                  "nl": "Om kooktemperatuur te verhogen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "A deflector plate or heat shield sits between the fire and food to distribute heat evenly, prevent direct flame contact, and catch drippings that would cause flare-ups.",
                  "es": "Una placa deflectora o escudo de calor se sitúa entre el fuego y la comida para distribuir calor uniformemente, prevenir contacto directo con llamas, y atrapar goteos que causarían llamaradas.",
                  "de": "Eine Deflektorplatte oder Hitzeschild sitzt zwischen Feuer und Essen um Hitze gleichmäßig zu verteilen, direkten Flammenkontakt zu verhindern, und Tropfen zu fangen die Stichflammen verursachen würden.",
                  "nl": "Een deflectorplaat of hitteschild zit tussen het vuur en voedsel om warmte gelijkmatig te verdelen, direct vlamcontact te voorkomen, en druppels op te vangen die vlammen zouden veroorzaken."
        }
      },
      {
        question: {
                  "en": "What is the ideal internal temperature for pulled pork?",
                  "es": "¿Cuál es la temperatura interna ideal para pulled pork?",
                  "de": "Was ist die ideale Innentemperatur für Pulled Pork?",
                  "nl": "Wat is de ideale interne temperatuur voor pulled pork?"
        },
        options: [
        {
                  "en": "165°F (74°C)",
                  "es": "165°F (74°C)",
                  "de": "165°F (74°C)",
                  "nl": "165°F (74°C)"
        },
        {
                  "en": "225°F (107°C)",
                  "es": "225°F (107°C)",
                  "de": "225°F (107°C)",
                  "nl": "225°F (107°C)"
        },
        {
                  "en": "145°F (63°C)",
                  "es": "145°F (63°C)",
                  "de": "145°F (63°C)",
                  "nl": "145°F (63°C)"
        },
        {
                  "en": "195-205°F (90-96°C)",
                  "es": "195-205°F (90-96°C)",
                  "de": "195-205°F (90-96°C)",
                  "nl": "195-205°F (90-96°C)"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Pork shoulder for pulling needs 195-205°F internal temperature. This high temp fully breaks down collagen into gelatin, making the meat tender enough to pull apart easily.",
                  "es": "Paleta de cerdo para desmenuzar necesita temperatura interna de 195-205°F. Esta temperatura alta descompone completamente el colágeno en gelatina, haciendo la carne lo suficientemente tierna para separar fácilmente.",
                  "de": "Schweineschulter zum Pullen braucht 195-205°F Innentemperatur. Diese hohe Temp baut Kollagen vollständig zu Gelatine ab, macht das Fleisch zart genug um leicht auseinanderzuziehen.",
                  "nl": "Varkensschouder voor pullen heeft 195-205°F interne temperatuur nodig. Deze hoge temp breekt collageen volledig af tot gelatine, maakt het vlees mals genoeg om gemakkelijk uit elkaar te trekken."
        }
      },
      {
        question: {
                  "en": "What does the term 'money muscle' refer to in pork shoulder?",
                  "es": "¿A qué se refiere el término 'money muscle' en la paleta de cerdo?",
                  "de": "Worauf bezieht sich der Begriff 'Money Muscle' in Schweineschulter?",
                  "nl": "Waar verwijst de term 'money muscle' naar in varkensschouder?"
        },
        options: [
        {
                  "en": "The fattiest section",
                  "es": "La sección más grasosa",
                  "de": "Der fetteste Abschnitt",
                  "nl": "Het vetste gedeelte"
        },
        {
                  "en": "The teres major muscle - the most tender and flavorful part",
                  "es": "El músculo teres major - la parte más tierna y sabrosa",
                  "de": "Der Teres-Major-Muskel - der zarteste und geschmackvollste Teil",
                  "nl": "De teres major spier - het malste en smaakvollste deel"
        },
        {
                  "en": "The bone marrow",
                  "es": "La médula ósea",
                  "de": "Das Knochenmark",
                  "nl": "Het beenmerg"
        },
        {
                  "en": "The skin layer",
                  "es": "La capa de piel",
                  "de": "Die Hautschicht",
                  "nl": "De huidlaag"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The money muscle is the teres major, a small cylindrical muscle on the blade bone side of pork shoulder. It's prized in competition BBQ for its tenderness and is often sliced for presentation.",
                  "es": "El money muscle es el teres major, un pequeño músculo cilíndrico en el lado del hueso de la paleta de cerdo. Es valorado en competencias de BBQ por su ternura y a menudo se corta para presentación.",
                  "de": "Der Money Muscle ist der Teres Major, ein kleiner zylindrischer Muskel an der Schulterblatt-Seite der Schweineschulter. Er wird in BBQ-Wettbewerben für seine Zartheit geschätzt und oft für die Präsentation geschnitten.",
                  "nl": "De money muscle is de teres major, een kleine cilindrische spier aan de schouderbladkant van varkensschouder. Het wordt gewaardeerd in BBQ competities voor zijn malheid en wordt vaak gesneden voor presentatie."
        }
      },
      {
        question: {
                  "en": "What is the purpose of a drip pan under the meat?",
                  "es": "¿Cuál es el propósito de una bandeja de goteo debajo de la carne?",
                  "de": "Was ist der Zweck einer Auffangschale unter dem Fleisch?",
                  "nl": "Wat is het doel van een druppelpan onder het vlees?"
        },
        options: [
        {
                  "en": "Add moisture to the air",
                  "es": "Añadir humedad al aire",
                  "de": "Feuchtigkeit zur Luft hinzufügen",
                  "nl": "Vocht toevoegen aan de lucht"
        },
        {
                  "en": "Increase smoke flavor",
                  "es": "Aumentar sabor de humo",
                  "de": "Rauchgeschmack erhöhen",
                  "nl": "Rooksmaak verhogen"
        },
        {
                  "en": "Catch drippings to prevent flare-ups and keep cooker clean",
                  "es": "Atrapar goteos para prevenir llamaradas y mantener limpio el cocinador",
                  "de": "Tropfen fangen um Stichflammen zu verhindern und Kocher sauber zu halten",
                  "nl": "Druppels opvangen om vlammen te voorkomen en kooktoestel schoon te houden"
        },
        {
                  "en": "Speed up cooking",
                  "es": "Acelerar la cocción",
                  "de": "Kochen beschleunigen",
                  "nl": "Koken versnellen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "A drip pan catches fat and juices that drip from meat, preventing flare-ups from grease hitting hot coals and making cleanup easier. The drippings can also be used for sauces or gravy.",
                  "es": "Una bandeja de goteo atrapa grasa y jugos que gotean de la carne, previniendo llamaradas de grasa golpeando carbones calientes y facilitando la limpieza. Los goteos también pueden usarse para salsas o gravy.",
                  "de": "Eine Auffangschale fängt Fett und Säfte die vom Fleisch tropfen, verhindert Stichflammen von Fett das heiße Kohlen trifft und erleichtert die Reinigung. Die Tropfen können auch für Saucen oder Soße verwendet werden.",
                  "nl": "Een druppelpan vangt vet en sappen die van vlees druppelen, voorkomt vlammen van vet dat hete kolen raakt en maakt schoonmaken makkelijker. De druppels kunnen ook gebruikt worden voor sauzen of jus."
        }
      },
      {
        question: {
                  "en": "What is the difference between dry aging and wet aging beef?",
                  "es": "¿Cuál es la diferencia entre maduración en seco y maduración húmeda de res?",
                  "de": "Was ist der Unterschied zwischen Trocken- und Nassreifung von Rindfleisch?",
                  "nl": "Wat is het verschil tussen droog rijpen en nat rijpen van rundvlees?"
        },
        options: [
        {
                  "en": "They are the same process",
                  "es": "Son el mismo proceso",
                  "de": "Sie sind derselbe Prozess",
                  "nl": "Ze zijn hetzelfde proces"
        },
        {
                  "en": "Dry aging is uncovered in controlled environment, wet aging is vacuum sealed",
                  "es": "Maduración seca es descubierta en ambiente controlado, maduración húmeda es sellada al vacío",
                  "de": "Trockenreifung ist unbedeckt in kontrollierter Umgebung, Nassreifung ist vakuumversiegelt",
                  "nl": "Droog rijpen is onbedekt in gecontroleerde omgeving, nat rijpen is vacuümverzegeld"
        },
        {
                  "en": "Dry aging uses salt, wet aging doesn't",
                  "es": "Maduración seca usa sal, maduración húmeda no",
                  "de": "Trockenreifung verwendet Salz, Nassreifung nicht",
                  "nl": "Droog rijpen gebruikt zout, nat rijpen niet"
        },
        {
                  "en": "Wet aging is for pork only",
                  "es": "Maduración húmeda es solo para cerdo",
                  "de": "Nassreifung ist nur für Schweinefleisch",
                  "nl": "Nat rijpen is alleen voor varkensvlees"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Dry aging exposes meat to air in a temperature/humidity controlled environment for weeks, concentrating flavors and tenderizing. Wet aging vacuum-seals meat in plastic, aging in its own juices for a milder result.",
                  "es": "Maduración seca expone carne al aire en ambiente controlado de temperatura/humedad por semanas, concentrando sabores y ablandando. Maduración húmeda sella al vacío carne en plástico, madurando en sus propios jugos para resultado más suave.",
                  "de": "Trockenreifung setzt Fleisch Luft in temperatur-/feuchtigkeitskontrollierter Umgebung für Wochen aus, konzentriert Aromen und macht zart. Nassreifung vakuumversiegelt Fleisch in Plastik, reift in eigenen Säften für milderes Ergebnis.",
                  "nl": "Droog rijpen stelt vlees bloot aan lucht in temperatuur/vochtigheid gecontroleerde omgeving voor weken, concentreert smaken en maakt mals. Nat rijpen vacuümverzegelt vlees in plastic, rijpt in eigen sappen voor milder resultaat."
        }
      },
      {
        question: {
                  "en": "What is the 'crutch' phase in barbecue?",
                  "es": "¿Qué es la fase 'crutch' en barbacoa?",
                  "de": "Was ist die 'Crutch'-Phase beim Barbecue?",
                  "nl": "Wat is de 'crutch' fase bij barbecue?"
        },
        options: [
        {
                  "en": "Resting the meat after cooking",
                  "es": "Reposar la carne después de cocinar",
                  "de": "Das Fleisch nach dem Kochen ruhen lassen",
                  "nl": "Het vlees laten rusten na het koken"
        },
        {
                  "en": "Adding more charcoal",
                  "es": "Añadir más carbón",
                  "de": "Mehr Holzkohle hinzufügen",
                  "nl": "Meer houtskool toevoegen"
        },
        {
                  "en": "The first hour of cooking",
                  "es": "La primera hora de cocción",
                  "de": "Die erste Stunde des Kochens",
                  "nl": "Het eerste uur van koken"
        },
        {
                  "en": "Wrapping meat in foil or paper to power through the stall",
                  "es": "Envolver carne en papel aluminio o papel para superar el estancamiento",
                  "de": "Fleisch in Folie oder Papier wickeln um durch den Stall zu kommen",
                  "nl": "Vlees in folie of papier wikkelen om door de stall heen te komen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The crutch refers to wrapping meat (usually in foil or butcher paper) when it hits the stall around 150-170°F. This traps moisture and heat, helping push through the temperature plateau faster.",
                  "es": "El crutch se refiere a envolver carne (usualmente en papel aluminio o papel de carnicero) cuando golpea el estancamiento alrededor de 150-170°F. Esto atrapa humedad y calor, ayudando a empujar a través del plateau de temperatura más rápido.",
                  "de": "Der Crutch bezieht sich auf Einwickeln von Fleisch (normalerweise in Folie oder Metzgerpapier) wenn es den Stall um 150-170°F erreicht. Dies fängt Feuchtigkeit und Hitze ein, hilft schneller durch das Temperaturplateau zu kommen.",
                  "nl": "De crutch verwijst naar het inwikkelen van vlees (meestal in folie of slagerspapier) wanneer het de stall rond 150-170°F bereikt. Dit vangt vocht en warmte, helpt sneller door het temperatuurplateau heen te komen."
        }
      },
      {
        question: {
                  "en": "What wood is best for smoking fish?",
                  "es": "¿Qué madera es mejor para ahumar pescado?",
                  "de": "Welches Holz ist am besten zum Räuchern von Fisch?",
                  "nl": "Welk hout is het beste voor het roken van vis?"
        },
        options: [
        {
                  "en": "Hickory exclusively",
                  "es": "Exclusivamente nogal americano",
                  "de": "Ausschließlich Hickory",
                  "nl": "Uitsluitend hickory"
        },
        {
                  "en": "Oak is the only option",
                  "es": "Roble es la única opción",
                  "de": "Eiche ist die einzige Option",
                  "nl": "Eik is de enige optie"
        },
        {
                  "en": "Mesquite only",
                  "es": "Solo mezquite",
                  "de": "Nur Mesquite",
                  "nl": "Alleen mesquite"
        },
        {
                  "en": "Alder or fruit woods like apple and cherry",
                  "es": "Aliso o maderas de frutas como manzana y cereza",
                  "de": "Erle oder Obsthölzer wie Apfel und Kirsche",
                  "nl": "Els of fruithouten zoals appel en kers"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Alder is traditional for smoking fish, especially salmon, providing mild, sweet smoke. Fruit woods like apple and cherry also work well, giving delicate flavor without overpowering the fish's taste.",
                  "es": "Aliso es tradicional para ahumar pescado, especialmente salmón, proporcionando humo suave y dulce. Maderas de frutas como manzana y cereza también funcionan bien, dando sabor delicado sin abrumar el sabor del pescado.",
                  "de": "Erle ist traditionell zum Räuchern von Fisch, besonders Lachs, bietet milden, süßen Rauch. Obsthölzer wie Apfel und Kirsche funktionieren auch gut, geben zarten Geschmack ohne den Fischgeschmack zu überwältigen.",
                  "nl": "Els is traditioneel voor het roken van vis, vooral zalm, biedt milde, zoete rook. Fruithouten zoals appel en kers werken ook goed, geven delicate smaak zonder de vissmaak te overheersen."
        }
      },
      {
        question: {
                  "en": "What is the benefit of dry brining vs wet brining?",
                  "es": "¿Cuál es el beneficio del brining seco vs brining húmedo?",
                  "de": "Was ist der Vorteil von Trockenpökeln vs Nasspökeln?",
                  "nl": "Wat is het voordeel van droog pekelen vs nat pekelen?"
        },
        options: [
        {
                  "en": "They produce identical results",
                  "es": "Producen resultados idénticos",
                  "de": "Sie produzieren identische Ergebnisse",
                  "nl": "Ze produceren identieke resultaten"
        },
        {
                  "en": "Dry brining is faster",
                  "es": "Brining seco es más rápido",
                  "de": "Trockenpökeln ist schneller",
                  "nl": "Droog pekelen is sneller"
        },
        {
                  "en": "Wet brining is always better",
                  "es": "Brining húmedo es siempre mejor",
                  "de": "Nasspökeln ist immer besser",
                  "nl": "Nat pekelen is altijd beter"
        },
        {
                  "en": "Dry brining concentrates flavors and creates crispier skin",
                  "es": "Brining seco concentra sabores y crea piel más crujiente",
                  "de": "Trockenpökeln konzentriert Aromen und erzeugt knusprigere Haut",
                  "nl": "Droog pekelen concentreert smaken en creëert knapperiger huid"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Dry brining (salting) draws out moisture which then reabsorbs with salt, concentrating flavor without diluting it. It also dries the skin for better crisping. Wet brining adds moisture but can dilute flavor.",
                  "es": "Brining seco (salado) extrae humedad que luego reabsorbe con sal, concentrando sabor sin diluirlo. También seca la piel para mejor crocancia. Brining húmedo añade humedad pero puede diluir sabor.",
                  "de": "Trockenpökeln (Salzen) zieht Feuchtigkeit heraus die dann mit Salz reabsorbiert wird, konzentriert Geschmack ohne zu verdünnen. Es trocknet auch die Haut für bessere Knusprigkeit. Nasspökeln fügt Feuchtigkeit hinzu aber kann Geschmack verdünnen.",
                  "nl": "Droog pekelen (zouten) haalt vocht eruit dat dan met zout wordt geherabsorbeerd, concentreert smaak zonder te verdunnen. Het droogt ook de huid voor betere knapperigheid. Nat pekelen voegt vocht toe maar kan smaak verdunnen."
        }
      },
      {
        question: {
                  "en": "What is a reverse flow smoker?",
                  "es": "¿Qué es un ahumador de flujo inverso?",
                  "de": "Was ist ein Reverse-Flow-Smoker?",
                  "nl": "Wat is een reverse flow roker?"
        },
        options: [
        {
                  "en": "A backwards-facing chimney",
                  "es": "Una chimenea orientada hacia atrás",
                  "de": "Ein rückwärts gerichteter Schornstein",
                  "nl": "Een achterwaarts gerichte schoorsteen"
        },
        {
                  "en": "A smoker you load from the back",
                  "es": "Un ahumador que se carga desde atrás",
                  "de": "Ein Smoker den man von hinten belädt",
                  "nl": "Een roker die je van achteren laadt"
        },
        {
                  "en": "A smoker where smoke travels under a baffle plate before reaching meat",
                  "es": "Un ahumador donde el humo viaja bajo una placa deflectora antes de llegar a la carne",
                  "de": "Ein Smoker wo Rauch unter einer Leitplatte reist bevor er Fleisch erreicht",
                  "nl": "Een roker waar rook onder een baffle plaat reist voordat het vlees bereikt"
        },
        {
                  "en": "A smoker that uses reverse osmosis",
                  "es": "Un ahumador que usa ósmosis inversa",
                  "de": "Ein Smoker der Umkehrosmose verwendet",
                  "nl": "Een roker die omgekeerde osmose gebruikt"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "In a reverse flow smoker, smoke and heat travel from the firebox under a baffle plate to the opposite end, then reverse direction over the top to exit. This creates more even heat distribution.",
                  "es": "En un ahumador de flujo inverso, humo y calor viajan desde la caja de fuego bajo una placa deflectora al extremo opuesto, luego revierten dirección sobre la parte superior para salir. Esto crea distribución de calor más uniforme.",
                  "de": "In einem Reverse-Flow-Smoker reisen Rauch und Hitze von der Feuerbox unter einer Leitplatte zum gegenüberliegenden Ende, dann kehren die Richtung über die Oberseite um auszutreten. Dies schafft gleichmäßigere Hitzeverteilung.",
                  "nl": "In een reverse flow roker reizen rook en warmte van de vuurbox onder een baffle plaat naar het tegenovergestelde einde, dan keren de richting om over de bovenkant om te vertrekken. Dit creëert meer gelijkmatige warmteverdeling."
        }
      },
      {
        question: {
                  "en": "What is the point and flat in a brisket?",
                  "es": "¿Qué es el point y el flat en un brisket?",
                  "de": "Was sind Point und Flat in einer Rinderbrust?",
                  "nl": "Wat zijn de point en flat in een brisket?"
        },
        options: [
        {
                  "en": "Point is the tip, flat is the middle",
                  "es": "Point es la punta, flat es el medio",
                  "de": "Point ist die Spitze, Flat ist die Mitte",
                  "nl": "Point is de punt, flat is het midden"
        },
        {
                  "en": "Two different cuts of beef",
                  "es": "Dos cortes diferentes de res",
                  "de": "Zwei verschiedene Rindfleischstücke",
                  "nl": "Twee verschillende stukken rundvlees"
        },
        {
                  "en": "Different cooking temperatures",
                  "es": "Diferentes temperaturas de cocción",
                  "de": "Verschiedene Kochtemperaturen",
                  "nl": "Verschillende kooktemperaturen"
        },
        {
                  "en": "Two muscles: point is fattier/thicker, flat is leaner/thinner",
                  "es": "Dos músculos: point es más graso/grueso, flat es más magro/delgado",
                  "de": "Zwei Muskeln: Point ist fetter/dicker, Flat ist magerer/dünner",
                  "nl": "Twee spieren: point is vetter/dikker, flat is magerder/dunner"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A whole packer brisket has two muscles: the point (deckle) is thicker with more marbling and fat, while the flat is leaner and more uniform. They're separated by a fat layer.",
                  "es": "Un brisket packer entero tiene dos músculos: el point (deckle) es más grueso con más marmoleo y grasa, mientras el flat es más magro y uniforme. Están separados por una capa de grasa.",
                  "de": "Eine ganze Packer-Rinderbrust hat zwei Muskeln: der Point (Deckle) ist dicker mit mehr Marmorierung und Fett, während der Flat magerer und gleichmäßiger ist. Sie sind durch eine Fettschicht getrennt.",
                  "nl": "Een hele packer brisket heeft twee spieren: de point (deckle) is dikker met meer marmerering en vet, terwijl de flat magerder en uniformer is. Ze zijn gescheiden door een vetlaag."
        }
      },
      {
        question: {
                  "en": "What is the Maillard reaction in barbecue?",
                  "es": "¿Qué es la reacción de Maillard en barbacoa?",
                  "de": "Was ist die Maillard-Reaktion beim Barbecue?",
                  "nl": "Wat is de Maillard reactie bij barbecue?"
        },
        options: [
        {
                  "en": "Caramelization of vegetables",
                  "es": "Caramelización de vegetales",
                  "de": "Karamellisierung von Gemüse",
                  "nl": "Karamelisatie van groenten"
        },
        {
                  "en": "Chemical reaction between amino acids and sugars creating brown crust and complex flavors",
                  "es": "Reacción química entre aminoácidos y azúcares creando corteza marrón y sabores complejos",
                  "de": "Chemische Reaktion zwischen Aminosäuren und Zucker die braune Kruste und komplexe Aromen schafft",
                  "nl": "Chemische reactie tussen aminozuren en suikers die bruine korst en complexe smaken creëert"
        },
        {
                  "en": "Fat rendering",
                  "es": "Derretimiento de grasa",
                  "de": "Fettrendern",
                  "nl": "Vet smelten"
        },
        {
                  "en": "The smoking process",
                  "es": "El proceso de ahumado",
                  "de": "Der Räucherprozess",
                  "nl": "Het rookproces"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The Maillard reaction occurs between 300-500°F when amino acids and reducing sugars react, creating hundreds of flavor compounds and the brown bark on meat. It's different from caramelization which only involves sugars.",
                  "es": "La reacción de Maillard ocurre entre 300-500°F cuando aminoácidos y azúcares reductores reaccionan, creando cientos de compuestos de sabor y el bark marrón en la carne. Es diferente de caramelización que solo involucra azúcares.",
                  "de": "Die Maillard-Reaktion tritt zwischen 300-500°F auf wenn Aminosäuren und reduzierende Zucker reagieren, hunderte Aromaverbindungen und die braune Bark auf Fleisch schaffen. Sie unterscheidet sich von Karamellisierung die nur Zucker beinhaltet.",
                  "nl": "De Maillard reactie treedt op tussen 300-500°F wanneer aminozuren en reducerende suikers reageren, honderden smaakverbindingen en de bruine bark op vlees creëren. Het verschilt van karamelisatie die alleen suikers betreft."
        }
      },
      {
        question: {
                  "en": "What is the purpose of a smoke ring?",
                  "es": "¿Cuál es el propósito de un anillo de humo?",
                  "de": "Was ist der Zweck eines Rauchrings?",
                  "nl": "Wat is het doel van een rookring?"
        },
        options: [
        {
                  "en": "It's a visual indicator of smoke exposure, not for flavor",
                  "es": "Es un indicador visual de exposición al humo, no para sabor",
                  "de": "Es ist ein visueller Indikator für Rauchbelichtung, nicht für Geschmack",
                  "nl": "Het is een visuele indicator van rookblootstelling, niet voor smaak"
        },
        {
                  "en": "It adds smoke flavor to the meat",
                  "es": "Añade sabor de humo a la carne",
                  "de": "Es verleiht dem Fleisch Rauchgeschmack",
                  "nl": "Het voegt rooksmaak toe aan het vlees"
        },
        {
                  "en": "It makes meat more tender",
                  "es": "Hace la carne más tierna",
                  "de": "Es macht Fleisch zarter",
                  "nl": "Het maakt vlees malser"
        },
        {
                  "en": "It helps cook the meat faster",
                  "es": "Ayuda a cocinar la carne más rápido",
                  "de": "Es hilft das Fleisch schneller zu kochen",
                  "nl": "Het helpt het vlees sneller te koken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The smoke ring is a pink layer caused by nitrogen dioxide in smoke reacting with myoglobin in meat. While prized in competitions, it's purely cosmetic and doesn't affect flavor or tenderness.",
                  "es": "El anillo de humo es una capa rosa causada por dióxido de nitrógeno en humo reaccionando con mioglobina en carne. Aunque valorado en competencias, es puramente cosmético y no afecta sabor o ternura.",
                  "de": "Der Rauchring ist eine rosa Schicht verursacht durch Stickstoffdioxid im Rauch das mit Myoglobin im Fleisch reagiert. Obwohl in Wettbewerben geschätzt, ist er rein kosmetisch und beeinflusst Geschmack oder Zartheit nicht.",
                  "nl": "De rookring is een roze laag veroorzaakt door stikstofdioxide in rook dat reageert met myoglobine in vlees. Hoewel gewaardeerd in competities, is het puur cosmetisch en beïnvloedt smaak of malheid niet."
        }
      },
      {
        question: {
                  "en": "What are burnt ends?",
                  "es": "¿Qué son los burnt ends?",
                  "de": "Was sind Burnt Ends?",
                  "nl": "Wat zijn burnt ends?"
        },
        options: [
        {
                  "en": "Overcooked and ruined meat",
                  "es": "Carne sobrecocinada y arruinada",
                  "de": "Übergekochtes und ruiniertes Fleisch",
                  "nl": "Overkookt en geruïneerd vlees"
        },
        {
                  "en": "Cubed point muscle of brisket, re-smoked until caramelized and tender",
                  "es": "Músculo point del brisket en cubos, reahumado hasta caramelizar y ablandar",
                  "de": "Gewürfelter Point-Muskel der Rinderbrust, erneut geräuchert bis karamellisiert und zart",
                  "nl": "Geblokte point spier van brisket, opnieuw gerookt tot gekarameliseerd en mals"
        },
        {
                  "en": "The tips of ribs",
                  "es": "Las puntas de las costillas",
                  "de": "Die Spitzen der Rippen",
                  "nl": "De punten van ribs"
        },
        {
                  "en": "Charred vegetables",
                  "es": "Verduras carbonizadas",
                  "de": "Verkohltes Gemüse",
                  "nl": "Verkoold groenten"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Burnt ends are a Kansas City specialty made from the point muscle of brisket. After initial cooking, it's cubed, sauced, and smoked again until the edges caramelize, creating incredibly tender, flavorful bites.",
                  "es": "Burnt ends son una especialidad de Kansas City hechos del músculo point del brisket. Después de cocción inicial, se corta en cubos, se sala y se ahuma de nuevo hasta que los bordes caramelicen, creando bocados increíblemente tiernos y sabrosos.",
                  "de": "Burnt Ends sind eine Kansas City Spezialität aus dem Point-Muskel der Rinderbrust. Nach anfänglichem Kochen wird es gewürfelt, mit Sauce versehen und erneut geräuchert bis die Kanten karamellisieren, schafft unglaublich zarte, geschmackvolle Bissen.",
                  "nl": "Burnt ends zijn een Kansas City specialiteit gemaakt van de point spier van brisket. Na eerste koken wordt het geblokt, gesausd en opnieuw gerookt tot de randen karameliseren, creëert ongelooflijk malse, smaakvolle hapjes."
        }
      },
      {
        question: {
                  "en": "Why should you let meat rest after cooking?",
                  "es": "¿Por qué debes dejar reposar la carne después de cocinar?",
                  "de": "Warum solltest du Fleisch nach dem Kochen ruhen lassen?",
                  "nl": "Waarom moet je vlees laten rusten na het koken?"
        },
        options: [
        {
                  "en": "To allow juices to redistribute throughout the meat",
                  "es": "Para permitir que los jugos se redistribuyan por toda la carne",
                  "de": "Um Säften zu erlauben sich im ganzen Fleisch zu verteilen",
                  "nl": "Om sappen toe te staan zich door het vlees te herverdelen"
        },
        {
                  "en": "To cool it down to eating temperature",
                  "es": "Para enfriarlo a temperatura de consumo",
                  "de": "Um es auf Esstemperatur abzukühlen",
                  "nl": "Om het af te koelen tot eettemperatuur"
        },
        {
                  "en": "Resting is not necessary",
                  "es": "Reposar no es necesario",
                  "de": "Ruhen ist nicht notwendig",
                  "nl": "Rusten is niet nodig"
        },
        {
                  "en": "To make it easier to cut",
                  "es": "Para hacerlo más fácil de cortar",
                  "de": "Um es einfacher zu schneiden",
                  "nl": "Om het makkelijker te snijden"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "During cooking, heat pushes juices toward the center. Resting allows proteins to relax and juices to redistribute evenly throughout the meat. Cutting immediately causes juices to run out, leaving dry meat.",
                  "es": "Durante la cocción, el calor empuja jugos hacia el centro. Reposar permite que proteínas se relajen y jugos se redistribuyan uniformemente por toda la carne. Cortar inmediatamente causa que jugos se escapen, dejando carne seca.",
                  "de": "Während des Kochens drückt Hitze Säfte zur Mitte. Ruhen erlaubt Proteinen sich zu entspannen und Säften sich gleichmäßig im ganzen Fleisch zu verteilen. Sofortiges Schneiden verursacht dass Säfte auslaufen, hinterlässt trockenes Fleisch.",
                  "nl": "Tijdens het koken duwt warmte sappen naar het midden. Rusten stelt eiwitten in staat te ontspannen en sappen zich gelijkmatig door het vlees te herverdelen. Direct snijden veroorzaakt dat sappen weglopen, laat droog vlees achter."
        }
      },
      {
        question: {
                  "en": "What is the purpose of scoring fat on pork ribs?",
                  "es": "¿Cuál es el propósito de marcar grasa en costillas de cerdo?",
                  "de": "Was ist der Zweck des Einschneidens von Fett auf Schweinerippchen?",
                  "nl": "Wat is het doel van het scoren van vet op varkensribs?"
        },
        options: [
        {
                  "en": "Scoring is harmful and should be avoided",
                  "es": "Marcar es dañino y debe evitarse",
                  "de": "Einschneiden ist schädlich und sollte vermieden werden",
                  "nl": "Scoren is schadelijk en moet vermeden worden"
        },
        {
                  "en": "To make them cook faster",
                  "es": "Para hacerlas cocinar más rápido",
                  "de": "Um sie schneller zu kochen",
                  "nl": "Om ze sneller te laten koken"
        },
        {
                  "en": "To help fat render and allow rub penetration",
                  "es": "Para ayudar a derretir grasa y permitir penetración del rub",
                  "de": "Um Fett zu rendern zu helfen und Rub-Penetration zu ermöglichen",
                  "nl": "Om vet te helpen smelten en rub penetratie toe te staan"
        },
        {
                  "en": "For decoration only",
                  "es": "Solo para decoración",
                  "de": "Nur zur Dekoration",
                  "nl": "Alleen voor decoratie"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Scoring (shallow cuts) in the fat side of ribs helps fat render more efficiently and allows seasonings to penetrate deeper into the meat, improving flavor throughout.",
                  "es": "Marcar (cortes superficiales) en el lado de grasa de costillas ayuda a derretir grasa más eficientemente y permite que condimentos penetren más profundo en la carne, mejorando sabor en toda ella.",
                  "de": "Einschneiden (flache Schnitte) in der Fettseite von Rippen hilft Fett effizienter zu rendern und ermöglicht Gewürzen tiefer ins Fleisch zu penetrieren, verbessert Geschmack durchgehend.",
                  "nl": "Scoren (ondiepe sneden) in de vetkant van ribs helpt vet efficiënter te smelten en stelt kruiden in staat dieper in het vlees te penetreren, verbetert smaak overal."
        }
      },
      {
        question: {
                  "en": "What is the membrane on the bone side of ribs called?",
                  "es": "¿Cómo se llama la membrana en el lado del hueso de las costillas?",
                  "de": "Wie heißt die Membran auf der Knochenseite der Rippen?",
                  "nl": "Hoe heet het membraan aan de botkant van de ribs?"
        },
        options: [
        {
                  "en": "Connective tissue",
                  "es": "Tejido conectivo",
                  "de": "Bindegewebe",
                  "nl": "Bindweefsel"
        },
        {
                  "en": "Fat cap",
                  "es": "Capa de grasa",
                  "de": "Fettkappe",
                  "nl": "Vetlaag"
        },
        {
                  "en": "Silver skin or pleura",
                  "es": "Silver skin o pleura",
                  "de": "Silberhaut oder Pleura",
                  "nl": "Silver skin of pleura"
        },
        {
                  "en": "Bark",
                  "es": "Corteza",
                  "de": "Rinde",
                  "nl": "Korst"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The silver skin (pleura) is a tough membrane on the bone side of ribs. Most pitmasters remove it before cooking as it prevents smoke and rub penetration and becomes chewy when cooked.",
                  "es": "El silver skin (pleura) es una membrana dura en el lado del hueso de las costillas. La mayoría de pitmasters la remueven antes de cocinar ya que previene penetración de humo y rub y se vuelve gomosa al cocinar.",
                  "de": "Die Silberhaut (Pleura) ist eine zähe Membran auf der Knochenseite der Rippen. Die meisten Pitmasters entfernen sie vor dem Kochen da sie Rauch- und Rub-Penetration verhindert und beim Kochen zäh wird.",
                  "nl": "De silver skin (pleura) is een taai membraan aan de botkant van ribs. De meeste pitmasters verwijderen het voor het koken omdat het rook- en rub-penetratie voorkomt en taai wordt bij het koken."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  }
})();